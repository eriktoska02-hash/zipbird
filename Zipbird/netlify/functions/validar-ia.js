/**
 * Netlify Function: validar-ia
 * 
 * Valida respuestas de Zipbird usando NVIDIA NIM como juez de IA.
 * Nunca expone la API key en el frontend.
 * 
 * Endpoint: POST /.netlify/functions/validar-ia
 * Body: { pregunta, respuesta, categoria, contexto? }
 * 
 * Variables de entorno requeridas:
 *   NVIDIA_API_KEY - Clave de API de NVIDIA NIM
 */

const fetch = require('node-fetch');

// Configuración NVIDIA NIM
const NVIDIA_NIM_ENDPOINT = 'https://integrate.api.nvidia.com/v1/chat/completions';
const NVIDIA_MODEL = 'nvidia/nemotron-4-340b-instruct';

// Caché en memoria para evitar consultas repetidas (durante la vida de la función)
const cache = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos

// Rate limiting simple (por IP)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX = 30; // 30 solicitudes por minuto

function getCacheKey(pregunta, respuesta, categoria) {
  return `${pregunta}|||${respuesta}|||${categoria || ''}`;
}

function getCache(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  return entry.value;
}

function setCache(key, value) {
  cache.set(key, { value, timestamp: Date.now() });
}

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

/**
 * Construye el prompt para la IA
 */
function buildPrompt(pregunta, respuesta, categoria, contexto) {
  const categoriaTexto = categoria ? `Categoría: ${categoria}\n` : '';
  const contextoTexto = contexto ? `Contexto adicional: ${contexto}\n` : '';

  return `Eres un juez experto del juego ZIPBIRD. Tu única tarea es determinar si una respuesta de jugador es correcta para una pregunta dada.

PREGUNTA: ${pregunta}
${categoriaTexto}${contextoTexto}RESPUESTA DEL JUGADOR: ${respuesta}

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
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    throw new Error('NVIDIA_API_KEY no configurada');
  }

  const response = await fetch(NVIDIA_NIM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
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
    signal: AbortSignal.timeout(15000) // 15 segundos timeout
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`NVIDIA NIM API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices && data.choices[0] && data.choices[0].message
    ? data.choices[0].message.content
    : null;

  if (!content) {
    throw new Error('NVIDIA NIM devolvió respuesta vacía');
  }

  // Extraer JSON de la respuesta (puede venir con markdown)
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('No se encontró JSON en la respuesta de la IA');
  }

  return JSON.parse(jsonMatch[0]);
}

/**
 * Handler principal de la función Netlify
 */
exports.handler = async (event, context) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido. Usa POST.' })
    };
  }

  // Obtener IP para rate limiting
  const ip = event.headers['x-nf-client-connection-ip'] || 'unknown';

  // Verificar rate limit
  if (!checkRateLimit(ip)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Demasiadas solicitudes. Intenta de nuevo más tarde.' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Cuerpo de solicitud inválido' })
    };
  }

  const { pregunta, respuesta, categoria, contexto } = body;

  if (!pregunta || !respuesta) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Se requieren los campos: pregunta, respuesta' })
    };
  }

  // Verificar caché
  const cacheKey = getCacheKey(pregunta, respuesta, categoria);
  const cached = getCache(cacheKey);
  if (cached) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...cached, desde_cache: true })
    };
  }

  // Llamar a NVIDIA NIM
  try {
    const prompt = buildPrompt(pregunta, respuesta, categoria, contexto);
    const resultado = await callNVIDIANIM(prompt);

    // Validar estructura de respuesta
    if (typeof resultado.valida !== 'boolean' ||
        typeof resultado.confianza !== 'number' ||
        !['correcta', 'incorrecta', 'incierta'].includes(resultado.estado)) {
      throw new Error('Estructura de respuesta de IA inválida');
    }

    // Guardar en caché
    setCache(cacheKey, resultado);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...resultado, desde_cache: false })
    };

  } catch (error) {
    console.error('Error validando con IA:', error.message);

    // Devolver incierta en caso de error para no bloquear el juego
    const resultadoError = {
      valida: false,
      confianza: 0,
      estado: 'incierta',
      explicacion: 'No se pudo validar con IA: ' + error.message,
      respuesta_normalizada: respuesta,
      error: true
    };

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resultadoError)
    };
  }
};