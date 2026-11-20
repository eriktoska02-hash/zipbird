require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Cargar clave API de NVIDIA
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
const NVIDIA_NIM_ENDPOINT = 'https://integrate.api.nvidia.com/v1/chat/completions';
const NVIDIA_MODEL = 'nvidia/nemotron-3.5-bolt-e4b';

// Rate limiting simple
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 30;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count++;
  return true;
}

// Función para construir el prompt
function buildPrompt(pregunta, respuesta, categoria) {
  return `Eres un juez experto del juego ZIPBIRD. Tu única tarea es determinar si una respuesta de jugador es correcta para una pregunta dada.

PREGUNTA: ${pregunta}
Categoría: ${categoria || 'general'}

RESPUESTA DEL JUGADOR: ${respuesta}

Instrucciones:
1. Analiza si la respuesta es correcta según el conocimiento real del mundo.
2. No bases tu decisión solo en similitud de palabras; usa comprensión semántica real.
3. Si la respuesta es correcta, devuelve "correcta".
4. Si la respuesta es incorrecta (no es lo que se pide o es de otra categoría), devuelve "incorrecta".
5. Si hay ambigüedad o no hay suficiente información para decidir, devuelve "incierta".
6. No aceptes respuestas simplemente relacionadas temáticamente; debe ser realmente válida.
7. Si no estás seguro, marca como "incierta" en lugar de adivinar.

Responde ÚNICAMENTE con un objeto JSON válido con este formato exacto:
{
  "valida": true/false,
  "confianza": 0.0 a 1.0,
  "estado": "correcta" | "incorrecta" | "incierta",
  "explicacion": "Breve explicación en español",
  "respuesta_normalizada": "forma normalizada de la respuesta"
}

No incluyas texto antes o después del JSON.`;
}

/**
 * Llama a NVIDIA NIM API
 */
async function callNVIDIANIM(prompt) {
  if (!NVIDIA_API_KEY) {
    throw new Error('NVIDIA_API_KEY no configurada');
  }

  const response = await fetch(NVIDIA_NIM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NVIDIA_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      model: NVIDIA_MODEL,
      messages: [
        {
          role: 'system',
          content: 'Eres un juez experto de respuestas para el juego ZIPBIRD. Respondes únicamente con JSON válido.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.1,
      max_tokens: 500,
      stream: false
    }),
    timeout: 15000
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`NVIDIA NIM API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();

const content = data.choices && data.choices[0] && data.choices[0].message
  ? data.choices[0].message.content
  : null;

console.log('RESPUESTA REAL NVIDIA:', JSON.stringify(data, null, 2));
console.log('CONTENIDO NVIDIA:', content);

  if (!content) {
    throw new Error('NVIDIA NIM devolvió respuesta vacía');
  }

  // Extraer JSON de la respuesta (manejo robusto)
  // El modelo NVIDIA a menudo devuelve JSON con texto explicativo, bloques Markdown ``` ``` ``` o formato variado
  let jsonMatch = null;

  // Intento 1: Buscar JSON dentro de bloques Markdown ```json ``` o ``` ```
  const markdownMatch = content.match(/```(?:json)?\s*(\{[\s\S]*?\})```/i);
  if (markdownMatch) {
    jsonMatch = markdownMatch[1];
  }

  // Intento 2: Buscar JSON directo buscando el último } y retrocediendo para encontrar {
  if (!jsonMatch) {
    const lastBrace = content.lastIndexOf('}');
    if (lastBrace > -1) {
      // Buscar el { correspondiente retrocediendo desde el último }
      const segmentBefore = content.substring(0, lastBrace);
      const firstBraceIndex = segmentBefore.lastIndexOf('{');
      if (firstBraceIndex > -1) {
        const potentialJson = content.substring(firstBraceIndex, lastBrace + 1);
        // Validar que parezca JSON válido teniendo las claves esperadas
        if (potentialJson.includes('"valida"') || potentialJson.includes('"estado"')) {
          jsonMatch = potentialJson;
        }
      }
    }
  }

  // Intento 3: Último recurso - buscar cualquier { ... } con las claves esperadas
  if (!jsonMatch) {
    const allBraces = content.match(/\{[^}]+\}/g);
    if (allBraces) {
      for (const brace of allBraces) {
        if (brace.includes('"valida"') || brace.includes('"estado"')) {
          jsonMatch = brace;
          break;
        }
      }
    }
  }

  if (!jsonMatch) {
    throw new Error('No se encontró JSON en la respuesta de la IA');
  }

  // Validar que el JSON tenga los campos necesarios para Zipbird
  const requiredFields = ['valida', 'confianza', 'estado', 'explicacion'];
  const missingFields = requiredFields.filter(field => !(field in JSON.parse(jsonMatch)));
  if (missingFields.length > 0) {
    throw new Error(`JSON de IA incompleto: faltan campos ${missingFields.join(', ')}. Respuesta recibida: ${jsonMatch.substring(0, 100)}...`);
  }

  // Retornar el JSON parseado exitosamente
  return JSON.parse(jsonMatch);
}

/**
 * Endpoint: Validar respuesta
 */
app.post('/api/validar-ia', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Rate limiting
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Demasiadas solicitudes' });
  }

  const { pregunta, respuesta, categoria } = req.body;

  if (!pregunta || !respuesta) {
    return res.status(400).json({ error: 'Se requieren los campos: pregunta, respuesta' });
  }

  // Verificar caché en memoria (solo durante esta sesión)
  // (Para persistencia real, usarías Redis o base de datos)

  try {
    const prompt = buildPrompt(pregunta, respuesta, categoria || 'general');
    let resultado = await callNVIDIANIM(prompt);

    // Diagnosticar estructura antes de validar
    if (!resultado) {
      throw new Error('callNVIDIANIM retornó undefined');
    }

    // Validar estructura
    if (typeof resultado.valida !== 'boolean' ||
        typeof resultado.confianza !== 'number' ||
        !['correcta', 'incorrecta', 'incierta'].includes(resultado.estado)) {
      throw new Error('Estructura de respuesta de IA inválida: ' + JSON.stringify(resultado).substring(0, 200));
    }

    res.json({
      ...resultado,
      desde_cache: false
    });

  } catch (error) {
    console.error('Error validando con IA:', error.message);
    // Si resultado existe pero es inválido, o si falló la llamada, devolver incierta
    res.status(200).json({
      valida: false,
      confianza: 0,
      estado: 'incierta',
      explicacion: 'No se pudo validar con IA: ' + error.message,
      respuesta_normalizada: respuesta,
      error: true
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 Zipbird IA Backend escuchando en http://localhost:${port}`);
  console.log(`🔑 NVIDIA_API_KEY: ${process.env.NVIDIA_API_KEY ? 'CONFIGURADA' : 'NO CONFIGURADA'}`);
  console.log(`📋 Endpoints:`);
  console.log(`   POST /api/validar-ia - Validar respuesta`);
  console.log(`   GET  /health - Health check`);
});