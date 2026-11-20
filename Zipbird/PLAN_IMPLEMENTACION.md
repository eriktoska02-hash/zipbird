# PLAN DE IMPLEMENTACIÓN: EXPEDICIONES DE ZIPBIRD

## Análisis del Estado Actual

### Sistemas a CONSERVAR (adaptándolos)
1. **Identidad visual**: Pájaro rojo pixel art, fondos por escenario, animaciones CSS, scanlines CRT
2. **Sistema de rareza de respuestas** (10-100 pts): Reutilizar para retos de conocimiento
3. **Validación fuzzy avanzada** (Jaro-Winkler + Levenshtein): Base para evaluación flexible
4. **Logros**: Adaptar a nueva progresión por exploración
5. **Récords por dificultad**: Convertir a récords por región/expedición
6. **Service Worker / PWA**: Mantener
7. **Audio Context / Sonidos**: Ampliar para nuevos eventos
8. **Responsive / Safe areas**: Mantener

### Sistemas a SUSTITUIR COMPLETAMENTE
1. **Bucle de 7 preguntas fijas** → Sistema de expediciones con duración variable
2. **Temporizador por pregunta** → Tiempo por evento/reto (variable)
3. **Puntos = Altitud directa** → Energía + Progreso + Recompensas
4. **Escenarios lineales (0-7)** → Mapa de regiones con destinos desbloqueables
5. **Combo simple** → Sistema de racha por expedición + bonus por decisiones
6. **Pantalla inicio/juego/resultados** → Mapa mundial + Expedición activa + Diario de viaje

### Nuevos Sistemas a CREAR
1. **Motor de Expediciones**: Estado, distancia, eventos, decisiones, energía
2. **Sistema de Eventos**: Aleatorios + scriptados, con consecuencias reales
3. **Sistema de Decisiones**: Ramificación, coste energético, recompensas
4. **Barra de Energía**: Recurso central, gestión estratégica
5. **Tipos de Retos**: Conocimiento, creatividad, adivinanzas, asociación, observación, destino
6. **Progresión por Regiones**: Mapa mundial, destinos, coleccionables, apariencias
7. **Diario de Viaje**: Registro de expediciones, descubrimientos, logros

---

## Arquitectura de Datos

### Estado Principal de Partida (Expedición Activa)
```javascript
const expedicion = {
  // Identidad
  id: 'exp_001',
  region: 'cordillera-andina',        // Región actual
  destino: 'machu-picchu',            // Destino final
  nombre: 'Ruta de los Cóndores',
  
  // Progreso
  distanciaTotal: 5000,               // metros/kilómetros
  distanciaRecorrida: 0,
  etapaActual: 0,                     // Índice de evento actual
  eventosCompletados: [],
  
  // Recursos
  energia: 100,                       // 0-100 (base)
  energiaMaxima: 100,
  
  // Estado
  activa: true,
  completada: false,
  abandonada: false,
  
  // Estadísticas
  retosSuperados: 0,
  retosFallados: 0,
  decisionesTomadas: [],
  descubrimientos: [],
  coleccionables: [],
  puntuacion: 0,
  
  // Tiempo
  inicioTimestamp: Date.now(),
  tiempoTotal: 0
};
```

### Definición de Región
```javascript
const REGIONES = [
  {
    id: 'cordillera-andina',
    nombre: 'Cordillera Andina',
    descripcion: 'Cumbres nevadas y valles ancestrales',
    color: '#8aff8a',
    icono: '⛰️',
    destinos: [
      { id: 'machu-picchu', nombre: 'Machu Picchu', distancia: 5000, desbloqueado: true, coste: 0 },
      { id: 'lago-titicaca', nombre: 'Lago Titicaca', distancia: 8000, desbloqueado: false, coste: 3 },
      { id: 'salar-uyuni', nombre: 'Salar de Uyuni', distancia: 12000, desbloqueado: false, coste: 5 }
    ],
    eventosEspecificos: ['corriente-termica', 'avistamiento-condor', 'ruinas-incas'],
    retosEspecificos: ['cultura-andina', 'geografia-montana', 'flora-alpina']
  },
  // ... más regiones
];
```

### Evento de Expedición
```javascript
const EVENTOS = {
  // Aleatorios
  'corriente-ascendente': {
    tipo: 'aleatorio',
    titulo: 'Corriente Ascendente',
    descripcion: 'Una térmica te impulsa hacia arriba sin esfuerzo.',
    opciones: [
      { texto: 'Aprovecharla', energia: 0, efecto: { distancia: 500, energia: +10 }, probabilidad: 1.0 },
      { texto: 'Volver a tu ruta', energia: 0, efecto: { distancia: 100 }, probabilidad: 1.0 }
    ],
    rareza: 'común',
    zonas: ['montaña', 'costa']
  },
  'tormenta-repentina': {
    tipo: 'aleatorio',
    titulo: 'Tormenta Repentina',
    descripcion: 'El cielo se oscurece. El viento y la lluvia dificultan el vuelo.',
    opciones: [
      { texto: 'Cruzarla (gasta energía)', energia: 25, efecto: { distancia: 300, riesgo: 'herida' } },
      { texto: 'Buscar refugio', energia: 5, efecto: { distancia: 0, tiempo: 300, energia: +15 } },
      { texto: 'Volar alrededor', energia: 15, efecto: { distancia: 200, seguro: true } }
    ],
    rareza: 'raro',
    zonas: ['todas']
  },
  
  // Scriptados (hitos de la expedición)
  'encuentro-sabio': {
    tipo: 'hito',
    titulo: 'Encuentro con un Sabio',
    descripcion: 'Un anciano te ofrece conocimiento a cambio de una historia.',
    reto: { tipo: 'creatividad', prompt: 'Cuenta una leyenda de tu tierra natal' },
    recompensa: { energia: 30, objeto: 'pluma-dorada', desco: 'leyenda-andina' }
  }
};
```

### Tipos de Retos
```javascript
const TIPOS_RETO = {
  conocimiento: {
    nombre: 'Conocimiento',
    icono: '🧠',
    generar: (categoria) => seleccionarPregunta(categoria),
    evaluar: (respuesta, correcta) => validacionFuzzy(respuesta, correcta)
  },
  creatividad: {
    nombre: 'Creatividad',
    icono: '✨',
    generar: () => ({ prompt: 'Describe...', criterio: 'originalidad' }),
    evaluar: (respuesta) => ({ valida: respuesta.length > 10, puntos: Math.min(respuesta.length * 2, 50) })
  },
  adivinanza: {
    nombre: 'Adivinanza',
    icono: '🤔',
    generar: () => seleccionarAdivinanza(),
    evaluar: (respuesta, correcta) => validacionFuzzy(respuesta, correcta)
  },
  asociacion: {
    nombre: 'Asociación',
    icono: '🔗',
    generar: () => ({ palabra: 'vuelo', objetivo: 3, tiempo: 15 }),
    evaluar: (respuestas) => ({ valida: respuestas.length >= 3, puntos: respuestas.length * 15 })
  },
  observacion: {
    nombre: 'Observación',
    icono: '👁️',
    generar: () => ({ imagen: 'svg-paisaje', pregunta: '¿Qué ave ves?' }),
    evaluar: (respuesta, correcta) => validacionFuzzy(respuesta, correcta)
  },
  destino: {
    nombre: 'Conocimiento Local',
    icono: '🗺️',
    generar: (destino) => seleccionarPreguntaDestino(destino),
    evaluar: (respuesta, correcta) => validacionFuzzy(respuesta, correcta)
  }
};
```

---

## Plan de Migración por Fases

### FASE 1: Fundación (Nuevos archivos)
1. `expedicion.js` - Motor principal de expediciones
2. `regiones.js` - Definición de regiones, destinos, desbloqueos
3. `eventos.js` - Sistema de eventos aleatorios y scriptados
4. `retos.js` - Generación y evaluación de los 6 tipos de retos
4. `energia.js` - Sistema de energía con UI
5. `progresion.js` - Mapa mundial, coleccionables, apariencias
6. `diario.js` - Registro de expediciones, estadísticas históricas

### FASE 2: UI Nueva (modificar index.html + style.css)
1. **Pantalla Mapa Mundial**: Regiones, destinos, pájaro navegando
2. **Pantalla Expedición Activa**: Barra energía, progreso, evento actual, decisiones
3. **Pantalla Reto**: Input adaptado por tipo (texto, múltiples, selección)
4. **Pantalla Decisión**: Tarjetas visuales con costes/beneficios claros
5. **Diario de Viaje**: Historial, descubrimientos, logros de exploración
6. **Personalización**: Apariencias y accesorios del pájaro

### FASE 3: Integración y Limpieza
1. Conectar `game.js` → nuevo motor de expediciones
2. Migrar `questions.js` / datos a nuevo sistema de retos
3. Adaptar `validacion-avanzada.js` para todos los tipos
4. Migrar localStorage (récords, logros, estadísticas)
5. Eliminar código obsoleto (7 preguntas, altitud simple, combo viejo)
6. Testing completo móvil/desktop

### FASE 4: Pulido
1. Animaciones de transición entre eventos
2. Efectos visuales por tipo de evento (partículas, flash, pantalla)
3. Sonidos específicos por evento/reto/decisión
4. Balanceo de energía, distancias, recompensas
5. Tutorial guiado primera expedición

---

## Compatibilidad de Datos (localStorage)

| Clave Actual | Nueva Clave | Migración |
|-------------|-------------|-----------|
| `vueloRecord_facil/media/dificil` | `zipbirdRecord_{regionId}` | Convertir metros → mejor distancia por región |
| `vueloLogros` | `zipbirdLogros` | Mantener IDs, actualizar condiciones |
| `vueloDificultad` | `zipbirdRegionActual` | Última región jugada |
| `respuestas_rechazadas` | `zipbirdRechazadas` | Mantener para aprendizaje |
| (nuevo) | `zipbirdExpedicionActiva` | Estado serializado de expedición en curso |
| (nuevo) | `zipbirdProgreso` | Regiones desbloqueadas, coleccionables, apariencias |
| (nuevo) | `zipbirdDiario` | Historial de expediciones completadas |
| (nuevo) | `zipbirdPajaro` | Apariencia actual, accesorios desbloqueados |

---

## Métricas de Éxito (para testing)

1. **Primera expedición completable en < 5 min**
2. **Energía nunca se siente "inútil" ni "castigo"**
3. **Decisiones tienen impacto visible en resultado**
4. **Cada región se siente distinta (eventos, retos, visual)**
5. **0 errores en consola**
6. **Funciona fluido en móvil (320px) y desktop (1920px)**
7. **PWA instalable y offline-functional**
8. **Save/Load funciona tras recargar página**