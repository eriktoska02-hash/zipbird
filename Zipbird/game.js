/* ==========================================================
/* ==========================================================
   ZIPBIRD - lógica
   un escenario distinto por cada respuesta correcta
   ========================================================== */

/* Dificultades: cambian el banco de preguntas y el tiempo por pregunta */
const DIFICULTADES = {
  facil:   { nombre: 'FÁCIL',   tiempo: 30, detalle: 'directas', record: 'vueloRecord_facil' },
  media:   { nombre: 'MEDIO',   tiempo: 25, detalle: 'mezcla',   record: 'vueloRecord_media' },
  dificil: { nombre: 'DIFÍCIL', tiempo: 20, detalle: 'raras',    record: 'vueloRecord_dificil' }
};

let dificultadActual = 'media';
let tiempoLimite = DIFICULTADES.media.tiempo;
const TOTAL_PREGUNTAS = 7;
const MAX_PUNTOS = 700;
const METROS_POR_PUNTO = 10;
const MAX_METROS = MAX_PUNTOS * METROS_POR_PUNTO;
/* cada acierto asciende un tramo completo: 1000 m */
const METROS_POR_ACIERTO = MAX_METROS / TOTAL_PREGUNTAS;

/* Nombre de cada escenario (índice = respuestas correctas) */
const ESCENAS = [
  { nombre: 'GLOBOS AEROSTÁTICOS' },
  { nombre: 'NUBES ALTAS' },
  { nombre: 'AVIONES COMERCIALES' },
  { nombre: 'ZONA DE COHETES' },
  { nombre: 'ÓRBITA TERRESTRE' },
  { nombre: 'PLANETAS' },
  { nombre: 'GALAXIA' },
  { nombre: 'FUERA DE LA GALAXIA' }
];

let estado = 'inicio';
let jugadorNombre = '';
let preguntaActual = 0;
let puntuacion = 0;
let aciertos = 0;
let preguntasPartida = [];
let preguntasHechas = new Set(); // historial persistente entre partidas
let tiempoRestante = tiempoLimite;
let temporizadorId = null;
let respuestaDada = false;
let reintentando = false;
let sonidoActivo = true;
let audioCtx = null;
let escenaMostrada = -1;
let puntosActuales = 0;
let bannerTimer = null;

/* ---------- Nivel y XP ---------- */
let nivel = 1;
let xp = 0;
let xpParaSiguienteNivel = 100;
let xpGanadoPartida = 0;
let subioDeNivel = false;

function calcularXpParaNivel(n) {
  /* Fórmula exponencial: cada nivel cuesta más XP */
  return Math.floor(100 * Math.pow(1.5, n - 1));
}

function ganarXp(puntos) {
  /* 1 XP por cada 10 puntos, mínimo 10 XP */
  const xpGanado = Math.max(10, Math.floor(puntos / 10));
  xp += xpGanado;
  xpGanadoPartida = xpGanado;
  subioDeNivel = false;

  while (xp >= xpParaSiguienteNivel) {
    xp -= xpParaSiguienteNivel;
    nivel++;
    xpParaSiguienteNivel = calcularXpParaNivel(nivel);
    subioDeNivel = true;
  }

  return { xpGanado, subioDeNivel, nivel, xp, xpParaSiguienteNivel };
}

function guardarNivel() {
  try {
    localStorage.setItem('vueloNivel', String(nivel));
    localStorage.setItem('vueloXp', String(xp));
  } catch (e) { /* ignorar */ }
}

function cargarNivel() {
  try {
    const n = localStorage.getItem('vueloNivel');
    const x = localStorage.getItem('vueloXp');
    if (n) nivel = parseInt(n, 10) || 1;
    if (x) xp = parseInt(x, 10) || 0;
    xpParaSiguienteNivel = calcularXpParaNivel(nivel);
  } catch (e) { /* ignorar */ }
}

/* ---------- Ranking ---------- */

/* ---------- Combo ---------- */
let comboActual = 0;
let multiplicadorCombo = 1;
let comboMaximoPartida = 0;

/* ---------- Zonas de altitud ---------- */
const ZONAS = [
  { nombre: 'CIELO', altitudMin: 0, altitudMax: 999 },
  { nombre: 'MONTAÑAS', altitudMin: 1000, altitudMax: 2499 },
  { nombre: 'ESTRATOSFERA', altitudMin: 2500, altitudMax: 3999 },
  { nombre: 'ESPACIO', altitudMin: 4000, altitudMax: 5499 },
  { nombre: 'UNIVERSO', altitudMin: 5500, altitudMax: 7000 }
];
let zonaActualIndex = 0;
let altitudMaximaPartida = 0;
let zonasVisitadas = new Set([0]);

/* ---------- Logros ---------- */
let logrosDesbloqueadosSet = new Set();
const LOGROS = [
  {
    id: 'primer-vuelo',
    nombre: 'Primer Vuelo',
    descripcion: 'Completa tu primera partida',
    icono: '<path d="M12 2 L2 12 L12 22 L22 12 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.aciertos >= 1
  },
  {
    id: 'explorador-montanas',
    nombre: 'Explorador',
    descripcion: 'Zona Montañas',
    icono: '<path d="M10 2 L20 18 L30 2 Z M10 18 L30 18 L20 34 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.altitudMaxima >= 1000
  },
  {
    id: 'explorador-estratosfera',
    nombre: 'Estratonauta',
    descripcion: 'Zona Estratosfera',
    icono: '<path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.altitudMaxima >= 2500
  },
  {
    id: 'explorador-espacio',
    nombre: 'Astronauta',
    descripcion: 'Zona Espacio',
    icono: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="3"/><path d="M8 12 L16 12 M12 8 L12 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    condicion: (s) => s.altitudMaxima >= 4000
  },
  {
    id: 'explorador-universo',
    nombre: 'Viaje Universo',
    descripcion: 'Zona Universo',
    icono: '<path d="M2 2 L22 2 L22 22 L2 22 Z M6 6 L18 6 L18 18 L6 18 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.altitudMaxima >= 5500
  },
  {
    id: 'palabra-legendaria',
    nombre: 'Palabra Legendaria',
    descripcion: 'Respuesta legendaria 100 pts',
    icono: '<path d="M12 2 L2 12 L12 22 L22 12 Z M12 6 L12 18 M6 12 L18 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.tuvoLegendaria
  },
  {
    id: 'racha-perfecta',
    nombre: 'Racha Perfecta',
    descripcion: '7 aciertos seguidos',
    icono: '<path d="M2 12 L12 2 L22 12 L12 22 Z M6 12 L18 12 M12 6 L12 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.comboMaximo >= 7
  },
  {
    id: 'gran-aviador',
    nombre: 'Gran Aviador',
    descripcion: '7000 metros',
    icono: '<path d="M12 2 L2 12 L12 22 L22 12 Z M12 6 L12 18 M6 12 L18 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.altitudMaxima >= 7000
  },
  {
    id: 'perfeccionista',
    nombre: 'Perfeccionista',
    descripcion: '7 aciertos perfectos',
    icono: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="3"/><path d="M8 12 L12 16 L16 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.aciertos === TOTAL_PREGUNTAS
  },
  {
    id: 'combo-maestro',
    nombre: 'Combo Maestro',
    descripcion: 'Combo x5 alcanzado',
    icono: '<path d="M12 4 L20 12 L12 20 L4 12 Z M12 6 L12 18 M6 12 L18 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.comboMaximo >= 5
  },
  {
    id: 'vuelo-veloz',
    nombre: 'Vuelo Veloz',
    descripcion: 'Partida en modo Difícil',
    icono: '<path d="M2 6 L12 2 L22 6 L12 10 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
    condicion: (s) => s.dificultad === 'dificil'
  }
];

/* ---------- Elementos ---------- */
const fondos = [...document.querySelectorAll('.fondo')];
const capaEstrellas = document.getElementById('capa-estrellas');
const capaGlobos = document.getElementById('capa-globos');
const capaNubes = document.getElementById('capa-nubes');
const capaAviones = document.getElementById('capa-aviones');
const capaCohetes = document.getElementById('capa-cohetes');
const capaOrbita = document.getElementById('capa-orbita');
const capaPlanetas = document.getElementById('capa-planetas');
const capaGalaxias = document.getElementById('capa-galaxias');
const capaMontanas = document.getElementById('capa-montanas');
const capaEstratosfera = document.getElementById('capa-estratosfera');
const efectoAscensoEl = document.getElementById('efecto-ascenso');
const flash = document.getElementById('flash');
const banner = document.getElementById('banner');

const pajaro = document.getElementById('pajaro-juego');
const regla = document.getElementById('regla');
const marcaTu = document.getElementById('marca-tu');

const hudAltitud = document.getElementById('hud-altitud');
const hudPuntaje = document.getElementById('hud-puntaje');
const hudEstado = document.getElementById('hud-estado');
const cajas = document.getElementById('cajas');

const vistaInicio = document.getElementById('pantalla-inicio');
const vistaJuego = document.getElementById('pantalla-juego');
const vistaResultados = document.getElementById('pantalla-resultados');
const vistaLogros = document.getElementById('pantalla-logros');

const zonaActual = document.getElementById('zona-actual');
const zonaFinal = document.getElementById('zona-final');
const textoPrompt = document.getElementById('texto-prompt');
const barraFill = document.getElementById('barra-fill');
const formRespuesta = document.getElementById('form-respuesta');
const inputRespuesta = document.getElementById('input-respuesta');
const feedback = document.getElementById('mensaje-feedback');
const sublinea = document.getElementById('sublinea-feedback');

const puntosFinales = document.getElementById('puntos-finales');
const calificacionFinal = document.getElementById('calificacion-final');
const resumen = document.getElementById('resumen-respuestas');
const recordEl = document.getElementById('record');

const inputNombre = document.getElementById('input-nombre');
const campoNombre = document.getElementById('campo-nombre');
const vistaRanking = document.getElementById('pantalla-ranking');
const rankingLista = document.getElementById('ranking-lista');
const btnRankingVolver = document.getElementById('btn-ranking-volver');
const btnRankingInicio = document.getElementById('btn-ranking-inicio');
const btnSaltar = document.getElementById('btn-saltar');
const btnLogrosVolver = document.getElementById('btn-logros-volver');

/* ---------- Combo ---------- */
const hudCombo = document.getElementById('hud-combo');
const comboValor = document.getElementById('combo-valor');
const comboContador = document.getElementById('combo-contador');
const particulasCombo = document.getElementById('particulas-combo');

/* ---------- Zona de altitud ---------- */
const zonaIndicador = document.getElementById('zona-indicador');
const zonaNombre = document.getElementById('zona-nombre');
const zonaAltitud = document.getElementById('zona-altitud');

/* ---------- Logros ---------- */
const btnLogros = document.getElementById('btn-logros');
const btnLogrosInicio = document.getElementById('btn-logros-inicio');
const btnCerrarLogros = document.getElementById('btn-cerrar-logros');
const overlayLogros = document.getElementById('overlay-logros');
const logrosGrid = document.getElementById('logros-grid');
const logrosGridOverlay = document.getElementById('logros-grid-overlay');
const logrosProgreso = document.getElementById('logros-progreso');
const logrosProgresoOverlay = document.getElementById('logros-progreso-overlay');
const logrosDesbloqueados = document.getElementById('logros-desbloqueados');
const logrosLista = document.getElementById('logros-lista');
const toastLogro = document.getElementById('toast-logro');
const toastNombreLogro = document.getElementById('toast-nombre-logro');

const btnAccion = document.getElementById('btn-accion');
const btnMenu = document.getElementById('btn-menu');
const btnSonido = document.getElementById('btn-sonido');
const overlay = document.getElementById('overlay-menu');
const btnCerrarMenu = document.getElementById('btn-cerrar-menu');

const botonesNivel = [...document.querySelectorAll('.nivel-btn')];
const bancoNivel = document.getElementById('banco-nivel');
const nivelFinal = document.getElementById('nivel-final');

/* ---------- SVG decorativos ---------- */
const SVG_AVION = `
<svg viewBox="0 0 100 48" fill="currentColor" aria-hidden="true">
  <path d="M2 26 L44 22 L62 4 L72 4 L62 22 L96 18 L100 26 L96 34 L62 30 L72 46 L62 46 L44 30 L2 28 Z"/>
</svg>`;

const SVG_COHETE = `
<svg viewBox="0 0 40 80" aria-hidden="true">
  <path d="M20 0 C30 16 31 38 29 58 L11 58 C9 38 10 16 20 0 Z" fill="#243347"/>
  <path d="M11 58 L20 72 L29 58 Z" fill="#ff8a4d"/>
  <circle cx="20" cy="28" r="5.5" fill="#04070f"/>
  <path d="M14 58 L11 72 M26 58 L29 72" stroke="#ff8a4d" stroke-width="3" fill="none"/>
</svg>`;

function svgGlobo(color, luz) {
  return `
<svg viewBox="0 0 26 36" aria-hidden="true">
  <path d="M13 0 C6 0 2 5 2 12 C2 19 7 24 10 25 L16 25 C19 24 24 19 24 12 C24 5 20 0 13 0 Z" fill="${color}"/>
  <path d="M13 0 C9 2 7 7 7 12 C7 17 9 22 11 25 L13 25 Z" fill="${luz}" opacity="0.55"/>
  <path d="M16 0 C19 3 21 7 21 12 C21 17 19 21 17 24" fill="none" stroke="${luz}" stroke-width="1.5" opacity="0.7"/>
  <rect x="9" y="25" width="2" height="4" fill="#c9a15a"/>
  <rect x="15" y="25" width="2" height="4" fill="#c9a15a"/>
  <rect x="8" y="29" width="10" height="6" fill="#8a5a2b"/>
  <rect x="8" y="29" width="10" height="1" fill="#c08a4e"/>
  <rect x="10" y="31" width="6" height="2" fill="#d9a45f"/>
</svg>`;
}

const SVG_SATELITE = `
<svg viewBox="0 0 52 30" aria-hidden="true">
  <rect x="21" y="11" width="10" height="8" fill="#d7e3ee"/>
  <rect x="23" y="13" width="6" height="4" fill="#7f93a5"/>
  <rect x="2" y="10" width="18" height="10" fill="#2f5f96"/>
  <rect x="32" y="10" width="18" height="10" fill="#2f5f96"/>
  <rect x="6" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="11" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="16" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="36" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="41" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="46" y="10" width="1" height="10" fill="#5c93cf"/>
  <rect x="25" y="5" width="2" height="6" fill="#9fb3c4"/>
  <rect x="23" y="3" width="6" height="2" fill="#ffd23f"/>
</svg>`;


/* ---------- Inicio ---------- */
document.addEventListener('DOMContentLoaded', () => {
  crearCajas();
  crearRegla();
  crearDecoracion();
  aplicarProgreso(0);

  inicializarDificultad();

  /* cargar historial de preguntas ya hechas (persistente entre partidas) */
  try {
    const guardado = localStorage.getItem('vueloPreguntasHechas');
    if (guardado) {
      const arr = JSON.parse(guardado);
      arr.forEach((id) => preguntasHechas.add(id));
    }
  } catch (e) { /* ignorar errores de storage */ }

  cargarNivel();

  if (window.BANCO_INFO) {
    const infoBanco = document.getElementById('info-banco');
    const menuBanco = document.getElementById('menu-banco');
    const menuResp = document.getElementById('menu-respuestas');
    if (infoBanco) infoBanco.textContent = BANCO_INFO.preguntas.toLocaleString('es-ES') + ' preguntas';
    if (menuBanco) menuBanco.textContent = BANCO_INFO.preguntas.toLocaleString('es-ES');
    if (menuResp) menuResp.textContent = BANCO_INFO.unicas.toLocaleString('es-ES');
  }

  btnAccion.addEventListener('click', accionPrincipal);
  btnMenu.addEventListener('click', () => overlay.classList.add('activa'));
  btnCerrarMenu.addEventListener('click', () => overlay.classList.remove('activa'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('activa');
  });
  btnSonido.addEventListener('click', alternarSonido);

  btnRankingVolver.addEventListener('click', () => {
    mostrarVista(vistaInicio);
    if (campoNombre) campoNombre.style.display = 'block';
  });

  btnRankingInicio.addEventListener('click', () => {
    mostrarRanking();
    mostrarVista(vistaRanking);
    if (campoNombre) campoNombre.style.display = 'none';
  });

  btnLogrosInicio.addEventListener('click', () => {
    mostrarVista(vistaLogros);
    if (campoNombre) campoNombre.style.display = 'none';
  });

  btnLogrosVolver.addEventListener('click', () => {
    mostrarVista(vistaInicio);
    if (campoNombre) campoNombre.style.display = 'block';
  });

  btnSaltar.addEventListener('click', () => {
    if (respuestaDada || estado !== 'jugando') return;
    respuestaDada = true;
    reintentando = false;
    feedback.textContent = 'PREGUNTA SALTADA';
    feedback.className = 'feedback cero';
    sublinea.textContent = 'sigues con el siguiente vuelo';
    bloquear();
    setTimeout(siguientePregunta, 1500);
  });

  window.addEventListener('resize', () => aplicarProgreso(puntosActuales));

  formRespuesta.addEventListener('submit', (e) => {
    e.preventDefault();
    enviarRespuesta();
  });

  /* cargar nombre guardado */
  const guardado = localStorage.getItem('vueloNombre');
  if (guardado && inputNombre) inputNombre.value = guardado;
});
function crearCajas() {
  cajas.innerHTML = '';
  for (let i = 0; i < TOTAL_PREGUNTAS; i++) {
    const c = document.createElement('span');
    c.className = 'caja';
    cajas.appendChild(c);
  }
}

function crearRegla() {
  regla.innerHTML = '';
  for (let metros = 0; metros <= MAX_METROS; metros += 500) {
    const tick = document.createElement('div');
    tick.className = 'tick' + (metros % 1000 === 0 ? ' grande' : '');
    tick.style.bottom = (metros / MAX_METROS) * 100 + '%';
    tick.innerHTML = `<span class="num">${metros} m</span><span class="linea"></span>`;
    regla.appendChild(tick);
  }
}

function crearDecoracion() {
  for (let i = 0; i < 9; i++) {
    const n = document.createElement('div');
    n.className = 'nube';
    const u = 9 + Math.floor(Math.random() * 9);
    const filas = [
      { x: 3, y: 0, w: 4 },
      { x: 2, y: 1, w: 6 },
      { x: 0, y: 2, w: 8 },
      { x: 0, y: 3, w: 8 }
    ];
    n.style.width = 8 * u + 'px';
    n.style.height = 4 * u + 'px';
    n.style.opacity = 0.55 + Math.random() * 0.55;
    filas.forEach((f) => {
      const b = document.createElement('div');
      b.className = 'nube-barra';
      b.style.left = f.x * u + 'px';
      b.style.top = f.y * u + 'px';
      b.style.width = f.w * u + 'px';
      b.style.height = u + 'px';
      n.appendChild(b);
    });
    n.style.left = Math.random() * 85 + '%';
    n.style.top = 6 + Math.random() * 78 + '%';
    n.style.animationDuration = 45 + Math.random() * 45 + 's';
    n.style.animationDelay = -Math.random() * 70 + 's';
    capaNubes.appendChild(n);
  }

  /* globos aerostáticos: el primer tramo del vuelo */
  const COLORES_GLOBO = [
    ['#e8503a', '#ffb08a'],
    ['#f2b134', '#ffe08a'],
    ['#3aa6d8', '#9fe0ff'],
    ['#8a5ed8', '#d3b8ff'],
    ['#3ec98a', '#b3ffd9'],
    ['#e84a8a', '#ffb3d1']
  ];
  for (let i = 0; i < 8; i++) {
    const g = document.createElement('div');
    g.className = 'globo';
    const c = COLORES_GLOBO[i % COLORES_GLOBO.length];
    g.innerHTML = `<span class="globo-cuerpo">${svgGlobo(c[0], c[1])}</span>`;
    g.style.left = 4 + Math.random() * 86 + '%';
    g.style.width = 34 + Math.random() * 28 + 'px';
    g.style.animationDuration = 32 + Math.random() * 36 + 's';
    g.style.animationDelay = -Math.random() * 65 + 's';
    g.style.opacity = 0.7 + Math.random() * 0.3;
    capaGlobos.appendChild(g);
  }

  for (let i = 0; i < 4; i++) {
    const a = document.createElement('div');
    a.className = 'avion';
    a.innerHTML = SVG_AVION;
    a.style.top = 10 + Math.random() * 62 + '%';
    a.style.animationDuration = 26 + Math.random() * 24 + 's';
    a.style.animationDelay = -Math.random() * 45 + 's';
    capaAviones.appendChild(a);
  }

  for (let i = 0; i < 4; i++) {
    const c = document.createElement('div');
    c.className = 'cohete';
    c.innerHTML = SVG_COHETE;
    c.style.left = 8 + Math.random() * 80 + '%';
    c.style.animationDuration = 24 + Math.random() * 22 + 's';
    c.style.animationDelay = -Math.random() * 45 + 's';
    capaCohetes.appendChild(c);
  }

  /* satélites en órbita */
  for (let i = 0; i < 5; i++) {
    const s = document.createElement('div');
    s.className = 'satelite';
    s.innerHTML = SVG_SATELITE;
    s.style.top = 6 + Math.random() * 68 + '%';
    s.style.width = 44 + Math.random() * 30 + 'px';
    s.style.animationDuration = 38 + Math.random() * 34 + 's';
    s.style.animationDelay = -Math.random() * 60 + 's';
    capaOrbita.appendChild(s);
  }

  /* planetas gigantes */
  const PLANETAS = [
    ['#ffd9a8', '#e8892f', '#8a3a12'],
    ['#bfe6ff', '#3a8fd0', '#123c66'],
    ['#d6ffd9', '#46b57a', '#124a3a'],
    ['#f0d4ff', '#9a5cd8', '#3a1c5e'],
    ['#ffd0c0', '#d8583a', '#5e1a12'],
    ['#fff2b3', '#d8b83a', '#6e5410']
  ];
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('div');
    p.className = 'planeta' + (i % 2 === 0 ? ' anillo' : '');
    const c = PLANETAS[i];
    const tam = 90 + Math.random() * 110;
    p.style.width = tam + 'px';
    p.style.height = tam + 'px';
    p.style.left = (i % 3 === 0 ? 2 + Math.random() * 16 : 56 + Math.random() * 34) + '%';
    p.style.backgroundImage =
      'repeating-linear-gradient(180deg, rgba(255,255,255,0.08) 0 4px, rgba(0,0,0,0.10) 4px 8px),' +
      'radial-gradient(circle at 32% 28%, ' + c[0] + ' 0%, ' + c[1] + ' 48%, ' + c[2] + ' 100%)';
    p.style.animationDuration = 100 + Math.random() * 80 + 's';
    p.style.animationDelay = -Math.random() * 160 + 's';
    capaPlanetas.appendChild(p);
  }

  /* galaxias lejanas */
  for (let i = 0; i < 4; i++) {
    const gx = document.createElement('div');
    gx.className = 'galaxia';
    const w = 150 + Math.random() * 130;
    gx.style.width = w + 'px';
    gx.style.height = (w * 0.52) + 'px';
    gx.style.left = (i % 2 === 0 ? 4 + Math.random() * 26 : 58 + Math.random() * 30) + '%';
    gx.style.background =
      'radial-gradient(ellipse 58% 16% at 50% 50%, rgba(255,255,255,0.80) 0%, rgba(210,160,255,0.42) 24%, transparent 68%),' +
      'radial-gradient(ellipse 34% 52% at 50% 50%, rgba(120,90,220,0.38) 0%, transparent 70%),' +
      'radial-gradient(ellipse 85% 62% at 50% 50%, rgba(90,40,140,0.30) 0%, transparent 72%)';
    gx.style.animationDuration = 130 + Math.random() * 80 + 's';
    gx.style.animationDelay = -Math.random() * 180 + 's';
    capaGalaxias.appendChild(gx);
  }

  for (let i = 0; i < 110; i++) {
    const e = document.createElement('div');
    e.className = 'estrella';
    const s = 1 + Math.random() * 2;
    e.style.width = s + 'px';
    e.style.height = s + 'px';
    e.style.left = Math.floor(Math.random() * 100) + '%';
    e.style.top = Math.floor(Math.random() * 100) + '%';
    e.style.animationDuration = 2 + Math.random() * 3 + 's';
    e.style.animationDelay = -Math.random() * 5 + 's';
    capaEstrellas.appendChild(e);
  }

  /* ráfagas verticales del ascenso */
  for (let i = 0; i < 20; i++) {
    const r = document.createElement('div');
    r.className = 'rayo';
    r.style.left = Math.random() * 100 + '%';
    r.style.width = 1 + Math.random() * 3 + 'px';
    r.style.height = 8 + Math.random() * 24 + 'vh';
    r.style.animationDuration = 0.45 + Math.random() * 0.5 + 's';
    r.style.animationDelay = -Math.random() + 's';
    r.style.setProperty('--op', (0.35 + Math.random() * 0.45).toFixed(2));
    efectoAscensoEl.appendChild(r);
  }
}

/* ---------- Escenarios ---------- */
function escenaActual() {
  return Math.min(aciertos, ESCENAS.length - 1);
}

function aplicarEscena(indice) {
  fondos.forEach((f, i) => f.classList.toggle('activa', i === indice));

  capaGlobos.classList.toggle('activa', indice <= 1);
  capaNubes.classList.toggle('activa', indice <= 2);
  capaNubes.classList.toggle('tenue', indice === 2);
  capaAviones.classList.toggle('activa', indice === 2);
  capaCohetes.classList.toggle('activa', indice === 3);
  capaOrbita.classList.toggle('activa', indice === 4);
  capaPlanetas.classList.toggle('activa', indice === 5);
  capaGalaxias.classList.toggle('activa', indice >= 6);

  capaEstrellas.classList.add('activa');
  capaEstrellas.classList.toggle('tenue', indice < 4);

  zonaActual.textContent = ESCENAS[indice].nombre;

  if (escenaMostrada !== -1 && escenaMostrada !== indice) {
    mostrarBanner(`ASCENSO · ${ESCENAS[indice].nombre}`);
  }
  escenaMostrada = indice;
}

function mostrarBanner(texto) {
  banner.textContent = texto;
  banner.classList.add('visible');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => banner.classList.remove('visible'), 2000);
}

/* ---------- Zonas de altitud ---------- */
function obtenerZona(altitud) {
  for (let i = ZONAS.length - 1; i >= 0; i--) {
    if (altitud >= ZONAS[i].altitudMin) return i;
  }
  return 0;
}

function aplicarZona(indice) {
  if (indice === zonaActualIndex) return;

  zonaActualIndex = indice;
  zonasVisitadas.add(indice);
  altitudMaximaPartida = Math.max(altitudMaximaPartida, (indice + 1) * 1000);

  const z = ZONAS[indice];

  /* Activar capa visual de la zona */
  const capas = {
    0: capaGlobos,
    1: capaMontanas,
    2: capaEstratosfera,
    3: capaOrbita,
    4: capaGalaxias
  };
  Object.values(capas).forEach((c) => c && c.classList.remove('activa'));
  if (capas[indice]) capas[indice].classList.add('activa');

  /* Indicador de zona */
  zonaNombre.textContent = z.nombre;
  zonaAltitud.textContent = z.altitudMin + ' - ' + z.altitudMax + ' m';
  zonaIndicador.classList.add('visible');
  setTimeout(() => zonaIndicador.classList.remove('visible'), 2200);

  mostrarBanner(`NUEVA ZONA · ${z.nombre}`);

  /* Logro: explorador por zona */
  if (indice === 1) comprobarLogro('explorador-montanas');
  if (indice === 2) comprobarLogro('explorador-estratosfera');
  if (indice === 3) comprobarLogro('explorador-espacio');
  if (indice === 4) comprobarLogro('explorador-universo');
}

/* ---------- Combo ---------- */
function actualizarCombo() {
  if (comboActual >= 2) {
    hudCombo.classList.add('activo');
  } else {
    hudCombo.classList.remove('activo');
    hudCombo.classList.remove('nuevo-multiplicador');
  }
  comboValor.textContent = 'x' + multiplicadorCombo;
  comboContador.textContent = comboActual;
}

function romperCombo() {
  comboActual = 0;
  multiplicadorCombo = 1;
  actualizarCombo();
}

function incrementarCombo() {
  comboActual++;
  comboMaximoPartida = Math.max(comboMaximoPartida, comboActual);

  const previo = multiplicadorCombo;
  if (comboActual >= 9) multiplicadorCombo = 5;
  else if (comboActual >= 7) multiplicadorCombo = 4;
  else if (comboActual >= 5) multiplicadorCombo = 3;
  else if (comboActual >= 3) multiplicadorCombo = 2;
  else multiplicadorCombo = 1;

  if (multiplicadorCombo > previo) {
    hudCombo.classList.add('nuevo-multiplicador');
    setTimeout(() => hudCombo.classList.remove('nuevo-multiplicador'), 600);
    crearParticulasCombo('x' + multiplicadorCombo);
  }

  actualizarCombo();
}

function crearParticulasCombo(texto) {
  if (!particulasCombo) return;
  const rect = pajaro.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top;
  for (let i = 0; i < 5; i++) {
    const p = document.createElement('div');
    p.className = 'particula-combo';
    p.textContent = texto;
    p.style.left = cx + (Math.random() * 40 - 20) + 'px';
    p.style.top = cy + 'px';
    p.style.animationDelay = (i * 0.08) + 's';
    particulasCombo.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

/* ---------- Logros ---------- */
function cargarLogros() {
  try {
    const guardado = localStorage.getItem('vueloLogros');
    if (guardado) {
      const arr = JSON.parse(guardado);
      arr.forEach((id) => logrosDesbloqueadosSet.add(id));
    }
  } catch (e) { /* ignorar errores de storage */ }
}

function guardarLogros() {
  try {
    localStorage.setItem('vueloLogros', JSON.stringify([...logrosDesbloqueadosSet]));
  } catch (e) { /* ignorar */ }
}

function comprobarLogro(idLogro, estadoPartida = null) {
  const logro = LOGROS.find((l) => l.id === idLogro);
  if (!logro || logrosDesbloqueadosSet.has(idLogro)) return;

  const s = estadoPartida || {
    aciertos: aciertos,
    altitudMaxima: altitudMaximaPartida,
    comboMaximo: comboMaximoPartida,
    tuvoLegendaria: false
  };

  if (!logro.condicion(s)) return;

  desbloquearLogro(logro);
}

function desbloquearLogro(logro) {
  logrosDesbloqueadosSet.add(logro.id);
  guardarLogros();

  /* Toast de notificación */
  if (toastNombreLogro) toastNombreLogro.textContent = logro.nombre;
  if (toastLogro) {
    toastLogro.classList.add('visible');
    setTimeout(() => toastLogro.classList.remove('visible'), 2500);
  }

  sonidoRareza('legendario');

  /* Añadir a la lista de resultados si estamos en pantalla de resultados */
  if (logrosLista && document.getElementById('pantalla-resultados').classList.contains('activa')) {
    const item = document.createElement('div');
    item.className = 'item-respuesta';
    item.innerHTML = `<span>🏆 ${logro.nombre}</span><span class="pts">${logro.descripcion}</span>`;
    logrosLista.appendChild(item);
    if (logrosDesbloqueados) logrosDesbloqueados.style.display = 'block';
  }

  renderizarGridLogros();
}

function renderizarGridLogros() {
  const grids = [logrosGrid, logrosGridOverlay].filter(Boolean);
  const progresos = [logrosProgreso, logrosProgresoOverlay].filter(Boolean);

  grids.forEach((grid) => {
    grid.innerHTML = '';
    LOGROS.forEach((l) => {
      const desbloqueado = logrosDesbloqueadosSet.has(l.id);
      const tarjeta = document.createElement('div');
      tarjeta.className = 'logro-tarjeta logro-' + l.id + ' ' + (desbloqueado ? 'desbloqueado' : 'bloqueado');
      tarjeta.innerHTML =
        '<div class="logro-icono"><div class="medalla">' + (desbloqueado ? '🥇' : '🥈') + '</div><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        l.icono + '</svg></div>' +
        '<div class="logro-nombre">' + l.nombre + '</div>' +
        '<div class="logro-descripcion">' + l.descripcion + '</div>' +
        '<div class="logro-progreso">' + (desbloqueado ? '✓' : '?') + '</div>';
      grid.appendChild(tarjeta);
    });
  });

  const total = LOGROS.length;
  const desbloqueados = logrosDesbloqueadosSet.size;
  progresos.forEach((p) => {
    p.textContent = desbloqueados + ' / ' + total + ' desbloqueados';
  });
}

/* ---------- Ranking ---------- */
function obtenerRanking() {
  try {
    const datos = localStorage.getItem('vueloRanking');
    return datos ? JSON.parse(datos) : [];
  } catch (e) {
    return [];
  }
}

function guardarRanking(lista) {
  try {
    localStorage.setItem('vueloRanking', JSON.stringify(lista));
  } catch (e) { /* ignorar errores de storage */ }
}

function agregarARanking(nombre, puntos, metros, dificultad) {
  const lista = obtenerRanking();
  lista.push({
    nombre: nombre,
    puntos: puntos,
    metros: metros,
    dificultad: dificultad || 'media',
    fecha: Date.now()
  });
  lista.sort((a, b) => b.puntos - a.puntos);
  guardarRanking(lista.slice(0, 30));
  return lista;
}

function mostrarRanking() {
  const lista = obtenerRanking();
  rankingLista.innerHTML = '';
  if (lista.length === 0) {
    rankingLista.innerHTML = '<div class="ranking-vacio">Todavía no hay vuelos registrados.</div>';
    return;
  }
  lista.forEach((entrada, i) => {
    const fila = document.createElement('div');
    fila.className = 'ranking-fila' + (i === 0 ? ' primero' : '');
    fila.innerHTML =
      '<span class="ranking-pos">' + (i + 1) + '.</span>' +
      '<span class="ranking-nombre">' + escapeHtml(entrada.nombre) + '</span>' +
      '<span class="ranking-puntos">' + entrada.puntos + ' pts</span>' +
      '<span class="ranking-metros">' + entrada.metros + ' m</span>' +
      '<span class="ranking-dificultad">' + (entrada.dificultad || 'media') + '</span>';
    rankingLista.appendChild(fila);
  });
}

function escapeHtml(texto) {
  const d = document.createElement('div');
  d.textContent = texto;
  return d.innerHTML;
}

/* ---------- Sonido ---------- */
function sonidoRareza(nivel) {
  inicializarAudio();
  const base = {
    'muy-comun': 392,
    'poco-comun': 440,
    'raro': 523,
    'muy-raro': 659,
    'legendario': 784
  }[nivel] || 523;
  tono(base, 0, 0.14);
  tono(base * 1.5, 0.08, 0.2);
  tono(base * 2, 0.16, 0.3);
}

function mostrarToastLogro(nombre) {
  if (toastNombreLogro) toastNombreLogro.textContent = nombre;
  if (toastLogro) {
    toastLogro.classList.add('visible');
    setTimeout(() => toastLogro.classList.remove('visible'), 2500);
  }
}

/* ---------- Pantalla de logros ---------- */
function abrirLogros() {
  renderizarGridLogros();
  if (overlayLogros) overlayLogros.classList.add('activa');
}

function cerrarLogros() {
  if (overlayLogros) overlayLogros.classList.remove('activa');
}

function aplicarProgreso(puntos) {
  puntosActuales = puntos;
  aplicarEscena(escenaActual());

  /* la altitud avanza un tramo entero por acierto: 1000 m */
  const metros = Math.min(aciertos, TOTAL_PREGUNTAS) * METROS_POR_ACIERTO;
  const t = Math.min(aciertos / TOTAL_PREGUNTAS, 1);
  /* el pájaro y la marca recorren la misma pista que la regla */
  const r = regla.getBoundingClientRect();
  const base = window.innerHeight - r.bottom;
  const alto = r.height;
  const altoPajaro = pajaro.offsetHeight;

  marcaTu.style.bottom = base + t * alto + 'px';
  pajaro.style.bottom = base + t * Math.max(alto - altoPajaro, 0) + 'px';

  hudAltitud.textContent = metros.toLocaleString('es-ES') + ' m';
  hudPuntaje.textContent = puntos;

  /* Zona de altitud según metros alcanzados */
  const zonaIdx = obtenerZona(metros);
  aplicarZona(zonaIdx);
}

function destello() {
  flash.classList.add('activo');
  setTimeout(() => flash.classList.remove('activo'), 80);
}

let ascensoTimer = null;

function efectoAscenso() {
  if (ascensoTimer) clearTimeout(ascensoTimer);

  document.body.classList.remove('ascendiendo');
  pajaro.classList.remove('trepando');
  efectoAscensoEl.classList.remove('activo');
  void pajaro.offsetWidth;

  document.body.classList.add('ascendiendo');
  pajaro.classList.add('trepando');
  efectoAscensoEl.classList.add('activo');

  ascensoTimer = setTimeout(() => {
    document.body.classList.remove('ascendiendo');
    pajaro.classList.remove('trepando');
    efectoAscensoEl.classList.remove('activo');
  }, 1650);
}

/* ---------- Acción principal ---------- */
function accionPrincipal() {
  if (estado === 'inicio') {
    /* pedir nombre antes de empezar */
    jugadorNombre = inputNombre.value.trim() || 'Jugador';
    localStorage.setItem('vueloNombre', jugadorNombre);
    if (campoNombre) campoNombre.style.display = 'none';
    iniciarPartida();
  } else if (estado === 'jugando') {
    enviarRespuesta();
  } else if (estado === 'resultados') {
    volverAlInicio();
  }
}

function mostrarVista(vista) {
  [vistaInicio, vistaJuego, vistaResultados, vistaRanking, vistaLogros].forEach((v) => v.classList.remove('activa'));
  vista.classList.add('activa');
}

/* ---------- Dificultad ---------- */
function bancoDeDificultad(clave) {
  const banco = window.PREGUNTAS_DIFICULTAD && window.PREGUNTAS_DIFICULTAD[clave];
  if (banco && banco.length) return banco;
  /* si no hay banco propio para "facil", usamos las primeras preguntas del banco general
     que suelen ser las más comunes y sencillas */
  if (clave === 'facil' && window.PREGUNTAS) {
    return window.PREGUNTAS.slice(0, Math.min(window.PREGUNTAS.length, 200));
  }
  return window.PREGUNTAS;
}

function recordDeDificultad(clave) {
  const cfg = DIFICULTADES[clave] || DIFICULTADES.media;
  let valor = localStorage.getItem(cfg.record);
  /* compatibilidad con el récord antiguo, que era el de nivel medio */
  if (valor === null && clave === 'media') valor = localStorage.getItem('vueloRecord');
  return parseInt(valor || '0', 10) || 0;
}

function pintarRecord() {
  if (!recordEl) return;
  recordEl.textContent = recordDeDificultad(dificultadActual).toLocaleString('es-ES') + ' m';
}

function seleccionarDificultad(clave, guardar) {
  if (!DIFICULTADES[clave]) clave = 'media';
  dificultadActual = clave;
  tiempoLimite = DIFICULTADES[clave].tiempo;

  botonesNivel.forEach(function (b) {
    const activo = b.dataset.dificultad === clave;
    b.classList.toggle('activa', activo);
    b.setAttribute('aria-pressed', activo ? 'true' : 'false');
  });

  if (bancoNivel) {
    const n = bancoDeDificultad(clave).length;
    bancoNivel.textContent = n.toLocaleString('es-ES') + ' preguntas de nivel ' +
      DIFICULTADES[clave].nombre.toLowerCase() + ' · ' + tiempoLimite + ' s';
  }

  pintarRecord();
  if (guardar) localStorage.setItem('vueloDificultad', clave);
}

function inicializarDificultad() {
  const guardada = localStorage.getItem('vueloDificultad');
  seleccionarDificultad(DIFICULTADES[guardada] ? guardada : 'media', false);

  botonesNivel.forEach(function (b) {
    b.addEventListener('click', function () {
      seleccionarDificultad(b.dataset.dificultad, true);
      inicializarAudio();
      tono(520, 0, 0.08, 'square', 0.03);
    });
  });
}

function volverAlInicio() {
  clearInterval(temporizadorId);
  estado = 'inicio';
  preguntaActual = 0;
  puntuacion = 0;
  aciertos = 0;
  respuestaDada = false;
  escenaMostrada = -1;

  mostrarVista(vistaInicio);
  document.body.classList.remove('ascendiendo');
  pajaro.classList.remove('trepando');
  efectoAscensoEl.classList.remove('activo');
  pajaro.classList.add('sin-transicion');
  aplicarProgreso(0);
  requestAnimationFrame(() => pajaro.classList.remove('sin-transicion'));
  actualizarCajas();
  hudEstado.textContent = 'DESPEGUE';
  btnAccion.textContent = 'DESPEGAR ▲';
  btnAccion.disabled = false;
  pintarRecord();

  /* actualizar nivel y XP en pantalla de inicio */
  const nivelInicio = document.getElementById('nivel-inicio');
  const xpBarraInicio = document.getElementById('xp-barra-inicio');
  const xpTextoInicio = document.getElementById('xp-texto-inicio');
  if (nivelInicio) nivelInicio.textContent = 'Nivel ' + nivel;
  if (xpBarraInicio) {
    const porcentaje = Math.min(100, (xp / xpParaSiguienteNivel) * 100);
    xpBarraInicio.style.width = porcentaje + '%';
  }
  if (xpTextoInicio) xpTextoInicio.textContent = xp + ' / ' + xpParaSiguienteNivel + ' XP';
}

/* ---------- Partida ---------- */
function iniciarPartida() {
  estado = 'jugando';
  preguntaActual = 0;
  puntuacion = 0;
  aciertos = 0;
  respuestaDada = false;
  preguntasPartida = [];
  escenaMostrada = -1;

  const banco = bancoDeDificultad(dificultadActual);

  /* filtrar preguntas ya hechas en partidas anteriores */
  const bancoNuevo = banco.filter((p) => !preguntasHechas.has(p.id));

  /* si se agotaron las preguntas nuevas, resetear historial para poder seguir jugando */
  if (bancoNuevo.length < TOTAL_PREGUNTAS) {
    preguntasHechas = new Set();
    localStorage.removeItem('vueloPreguntasHechas');
  }

  const mezcladas = [...bancoNuevo].sort(() => 0.5 - Math.random());
  preguntasPartida = mezcladas.slice(0, TOTAL_PREGUNTAS);

  mostrarVista(vistaJuego);
  pajaro.classList.add('sin-transicion');
  aplicarProgreso(0);
  requestAnimationFrame(() => pajaro.classList.remove('sin-transicion'));
  actualizarCajas();
  cargarPregunta(0);
}

function actualizarCajas() {
  [...cajas.children].forEach((c, i) => {
    c.classList.toggle('hecha', i < preguntaActual);
    c.classList.toggle('actual', i === preguntaActual && estado === 'jugando');
  });
  hudEstado.textContent = estado === 'jugando'
    ? `VUELO ${preguntaActual + 1}/${TOTAL_PREGUNTAS}`
    : 'DESPEGUE';
}

function cargarPregunta(indice) {
  const p = preguntasPartida[indice];

  textoPrompt.textContent = p.texto;
  inputRespuesta.value = '';
  inputRespuesta.disabled = false;
  inputRespuesta.classList.remove('sacudida');
  respuestaDada = false;
  reintentando = false;

  feedback.textContent = '';
  feedback.className = 'feedback';
  sublinea.textContent = 'escribe una respuesta antes de que acabe el tiempo';

  btnAccion.textContent = 'ENVIAR ▲';
  btnAccion.disabled = false;

  actualizarCajas();
  iniciarTemporizador();
  inputRespuesta.focus({ preventScroll: true });
}

function iniciarTemporizador() {
  clearInterval(temporizadorId);
  tiempoRestante = tiempoLimite;
  actualizarTiempo();

  temporizadorId = setInterval(() => {
    tiempoRestante--;
    actualizarTiempo();
    if (tiempoRestante <= 0) {
      clearInterval(temporizadorId);
      tiempoAgotado();
    }
  }, 1000);
}

function actualizarTiempo() {
  const proporcion = Math.max(tiempoRestante, 0) / tiempoLimite;
  barraFill.style.width = proporcion * 100 + '%';
  barraFill.classList.toggle('urgente', tiempoRestante <= 5);
  if (reintentando && !respuestaDada && estado === 'jugando') {
    sublinea.textContent = `sigue intentando · ${Math.max(tiempoRestante, 0)} s`;
  }
}

function tiempoAgotado() {
  if (respuestaDada) return;
  respuestaDada = true;
  reintentando = false;
  bloquear();

  const pregunta = preguntasPartida[preguntaActual];
  pregunta.puntosObtenidos = 0;
  pregunta.respuestaUsuario = '';

  feedback.textContent = '+0 PUNTOS';
  feedback.className = 'feedback cero';
  sublinea.textContent = 'el reloj se te adelantó';

  setTimeout(siguientePregunta, 1500);
}

let validandoIA = false;

async function enviarRespuesta() {
  if (respuestaDada || estado !== 'jugando') return;

  const texto = inputRespuesta.value.trim();
  if (!texto) return;

  const pregunta = preguntasPartida[preguntaActual];
  const acierto = buscarRespuesta(pregunta, texto);

  if (acierto) {
    clearInterval(temporizadorId);
    respuestaDada = true;
    reintentando = false;
    bloquear();

    puntuacion += acierto.puntos;
    aciertos++;
    pregunta.puntosObtenidos = acierto.puntos;
    pregunta.respuestaUsuario = texto;

    feedback.textContent = `+${acierto.puntos} PUNTOS`;
    feedback.className = 'feedback';

    let extra = `${obtenerNombreNivel(acierto.nivel)} · +${METROS_POR_ACIERTO} m`;
    if (acierto.corregida) extra += ` · corregido: «${acierto.texto}»`;
    else if (acierto.libre) extra += ' · válida (no registrada)';
    sublinea.textContent = extra;

    efectoAscenso();
    aplicarProgreso(puntuacion);
    destello();
    mostrarFlotante('+' + METROS_POR_ACIERTO + ' m');
    sonidoAcierto(acierto.nivel);

    setTimeout(siguientePregunta, 1700);
    return;
  }

  /* Validación local falló. Intentar con IA (NVIDIA NIM) como respaldo inteligente. */
  if (validandoIA) return; // Ya hay una validación en curso

  validandoIA = true;
  reintentando = true;
  feedback.textContent = 'Validando con IA…';
  feedback.className = 'feedback';
  sublinea.textContent = 'Consultando juez de IA…';

  try {
    const aciertoIA = await validarConIA(pregunta, texto);

    if (aciertoIA) {
      /* IA aceptó la respuesta */
      clearInterval(temporizadorId);
      respuestaDada = true;
      reintentando = false;
      bloquear();

      puntuacion += aciertoIA.puntos;
      aciertos++;
      pregunta.puntosObtenidos = aciertoIA.puntos;
      pregunta.respuestaUsuario = texto;

      feedback.textContent = `+${aciertoIA.puntos} PUNTOS`;
      feedback.className = 'feedback';

      let extra = `${obtenerNombreNivel(aciertoIA.nivel)} · +${METROS_POR_ACIERTO} m`;
      if (aciertoIA.ia) extra += ` · validado por IA`;
      sublinea.textContent = extra;

      efectoAscenso();
      aplicarProgreso(puntuacion);
      destello();
      mostrarFlotante('+' + METROS_POR_ACIERTO + ' m');
      sonidoAcierto(aciertoIA.nivel);

      setTimeout(siguientePregunta, 1700);
    } else {
      /* IA rechazó o no pudo validar */
      feedback.textContent = 'NO ESTÁ EN LA LISTA';
      feedback.className = 'feedback cero';
      sublinea.textContent = `sigue intentando · ${Math.max(tiempoRestante, 0)} s`;

      inputRespuesta.classList.remove('sacudida');
      void inputRespuesta.offsetWidth;
      inputRespuesta.classList.add('sacudida');
      inputRespuesta.select();

      sonidoFallo();
    }
  } catch (e) {
    /* Error en IA -> tratar como fallo normal */
    feedback.textContent = 'NO ESTÁ EN LA LISTA';
    feedback.className = 'feedback cero';
    sublinea.textContent = `sigue intentando · ${Math.max(tiempoRestante, 0)} s`;

    inputRespuesta.classList.remove('sacudida');
    void inputRespuesta.offsetWidth;
    inputRespuesta.classList.add('sacudida');
    inputRespuesta.select();

    sonidoFallo();
  } finally {
    validandoIA = false;
  }
}

function bloquear() {
  inputRespuesta.disabled = true;
  btnAccion.disabled = true;
}

function mostrarFlotante(texto) {
  const rect = pajaro.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'flotante';
  el.textContent = texto;
  el.style.left = rect.left + rect.width / 2 - 18 + 'px';
  el.style.top = rect.top - 12 + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < TOTAL_PREGUNTAS) {
    cargarPregunta(preguntaActual);
  } else {
    terminarPartida();
  }
}

function terminarPartida() {
  clearInterval(temporizadorId);
  estado = 'resultados';

  const metros = aciertos * METROS_POR_ACIERTO;
  const cfg = DIFICULTADES[dificultadActual] || DIFICULTADES.media;
  const recordPrevio = recordDeDificultad(dificultadActual);
  if (metros > recordPrevio) {
    localStorage.setItem(cfg.record, String(metros));
    pintarRecord();
  }

  /* guardar en ranking */
  const listaRanking = agregarARanking(jugadorNombre, puntuacion, metros, dificultadActual);

  aplicarProgreso(puntuacion);
  zonaFinal.textContent = ESCENAS[escenaActual()].nombre;

  puntosFinales.textContent = `+${puntuacion} PUNTOS`;
  puntosFinales.className = 'puntos-grande' + (puntuacion === 0 ? ' cero' : '');
  calificacionFinal.textContent = `${obtenerCalificacion(puntuacion)} · ${metros} m`;
  if (nivelFinal) nivelFinal.textContent = `nivel ${cfg.nombre.toLowerCase()} · ${cfg.tiempo} s por pregunta`;

  resumen.innerHTML = '';
  preguntasPartida.forEach((p) => {
    const pts = p.puntosObtenidos || 0;
    const fila = document.createElement('div');
    fila.className = 'item-respuesta';
    fila.innerHTML = `<span>${p.texto}</span><span class="pts${pts === 0 ? ' cero' : ''}">+${pts}</span>`;
    resumen.appendChild(fila);
  });

  /* mostrar ranking y posición del jugador */
  mostrarRanking();
  const posicion = listaRanking.findIndex((e) => e.nombre === jugadorNombre && e.puntos === puntuacion && e.metros === metros);
  if (posicion >= 0) {
    const badge = document.createElement('div');
    badge.className = 'ranking-posicion-jugador';
    badge.textContent = '¡Estás en el puesto #' + (posicion + 1) + ' del ranking!';
    resumen.parentNode.insertBefore(badge, resumen);
  }

  /* ganar XP por los puntos de la partida */
  const resultadoXp = ganarXp(puntuacion);
  guardarNivel();

  /* actualizar nivel final mostrado */
  const xpBarraFinal = document.getElementById('xp-barra-final');
  const xpTextoFinal = document.getElementById('xp-texto-final');
  const nivelTextoFinal = document.getElementById('nivel-texto-final');
  const subioNivelBadge = document.getElementById('subio-nivel-badge');

  if (xpBarraFinal) {
    const porcentaje = Math.min(100, (resultadoXp.xp / resultadoXp.xpParaSiguienteNivel) * 100);
    xpBarraFinal.style.width = porcentaje + '%';
  }
  if (xpTextoFinal) {
    xpTextoFinal.textContent = resultadoXp.xp + ' / ' + resultadoXp.xpParaSiguienteNivel + ' XP';
  }
  if (nivelTextoFinal) {
    nivelTextoFinal.textContent = 'Nivel ' + resultadoXp.nivel;
  }
  if (subioNivelBadge) {
    subioNivelBadge.style.display = resultadoXp.subioDeNivel ? 'block' : 'none';
  }

  mostrarVista(vistaResultados);
  actualizarCajas();
  hudEstado.textContent = 'VUELO COMPLETADO';

  btnAccion.textContent = 'VOLVER AL INICIO ▲';
  btnAccion.disabled = false;

  sonidoFinal(puntuacion);

  /* guardar preguntas hechas en historial persistente */
  preguntasPartida.forEach((p) => preguntasHechas.add(p.id));
  try {
    localStorage.setItem('vueloPreguntasHechas', JSON.stringify([...preguntasHechas]));
  } catch (e) { /* ignorar errores de storage */ }
}

/* ---------- Calificaciones ---------- */
function obtenerCalificacion(puntos) {
  if (puntos >= 450) return 'legendario';
  if (puntos >= 351) return 'muy raro';
  if (puntos >= 251) return 'raro';
  if (puntos >= 151) return 'poco común';
  return 'común';
}

function obtenerNombreNivel(nivel) {
  const nombres = {
    'muy-comun': 'pluma común',
    'poco-comun': 'pluma poco común',
    'raro': 'pluma rara',
    'muy-raro': 'pluma muy rara',
    'legendario': '¡pluma legendaria!'
  };
  return nombres[nivel] || '';
}

/* ---------- Sonido ---------- */
function inicializarAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

function tono(frecuencia, retraso, duracion, tipo = 'sine', volumen = 0.06) {
  if (!audioCtx || !sonidoActivo) return;
  const osc = audioCtx.createOscillator();
  const gan = audioCtx.createGain();
  osc.type = tipo;
  osc.frequency.value = frecuencia;
  const t0 = audioCtx.currentTime + retraso;
  gan.gain.setValueAtTime(0.0001, t0);
  gan.gain.linearRampToValueAtTime(volumen, t0 + 0.012);
  gan.gain.exponentialRampToValueAtTime(0.0001, t0 + duracion);
  osc.connect(gan);
  gan.connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0 + duracion + 0.03);
}

function sonidoAcierto(nivel) {
  inicializarAudio();
  const base = {
    'muy-comun': 392,
    'poco-comun': 440,
    'raro': 523,
    'muy-raro': 659,
    'legendario': 784
  }[nivel] || 523;
  tono(base, 0, 0.16);
  tono(base * 1.5, 0.1, 0.24);
  if (nivel === 'legendario') tono(base * 2, 0.2, 0.32);
}

function sonidoFallo() {
  inicializarAudio();
  tono(196, 0, 0.16, 'square', 0.045);
  tono(147, 0.12, 0.22, 'square', 0.045);
}

function sonidoFinal(puntos) {
  inicializarAudio();
  const nota = puntos >= 450 ? 784 : puntos >= 251 ? 659 : 523;
  tono(nota, 0, 0.18);
  tono(nota * 1.25, 0.14, 0.2);
  tono(nota * 1.5, 0.28, 0.3);
}

function alternarSonido() {
  sonidoActivo = !sonidoActivo;
  btnSonido.classList.toggle('mudo', !sonidoActivo);
  btnSonido.setAttribute('aria-label', sonidoActivo ? 'Silenciar sonido' : 'Activar sonido');
  if (sonidoActivo) {
    inicializarAudio();
    tono(660, 0, 0.12);
  }
}

/* ---------- Utilidades ---------- */
function normalizar(texto) {
  return texto
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ñ/g, '\u0001')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0001/g, 'ñ')
    .replace(/[^a-z0-9ñ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(el|la|los|las|un|una|unos|unas) /, '');
}

/* formas equivalentes: singular/plural, con o sin tilde final */
function variantes(palabra) {
  const set = new Set([palabra]);
  if (palabra.length > 4 && palabra.endsWith('ces')) set.add(palabra.slice(0, -3) + 'z');
  if (palabra.length > 4 && palabra.endsWith('es')) set.add(palabra.slice(0, -2));
  if (palabra.length > 3 && palabra.endsWith('s')) set.add(palabra.slice(0, -1));
  set.add(palabra + 's');
  if (palabra.endsWith('z')) set.add(palabra.slice(0, -1) + 'ces');
  return set;
}

function buscarRespuesta(pregunta, respuestaUsuario) {
  /* Usa el nuevo sistema de validación avanzada con índice global y respuestas libres */
  return buscarRespuestaAvanzada(pregunta, respuestaUsuario);
}

/* Acepta «miró» para «Joan Miró» o «merkel» para «Angela Merkel»
   solo si esa última palabra identifica a una única respuesta. */
function buscarPorUltimaPalabra(pregunta, objetivo) {
  if (objetivo.indexOf(' ') !== -1 || objetivo.length < 4) return null;

  const formas = variantes(objetivo);
  let encontrada = null;
  let repetida = false;

  for (let i = 0; i < pregunta.respuestas.length; i++) {
    const r = pregunta.respuestas[i];
    const alias = r.alias || [r.texto];
    for (let j = 0; j < alias.length; j++) {
      const n = normalizar(alias[j]);
      if (!n || n.indexOf(' ') === -1) continue;
      const partes = n.split(' ');
      const ultima = partes[partes.length - 1];
      if (ultima.length < 4) continue;
      const suyas = variantes(ultima);
      let coincide = false;
      for (const v of suyas) {
        if (formas.has(v)) { coincide = true; break; }
      }
      if (!coincide) continue;
      if (encontrada && encontrada.clave !== r.clave) repetida = true;
      else encontrada = r;
    }
  }

  return repetida ? null : encontrada;
}

/* distancia de Damerau-Levenshtein (incluye letras intercambiadas) */
function distancia(a, b) {
  const m = a.length;
  const n = b.length;
  if (Math.abs(m - n) > 3) return 99;

  const d = [];
  for (let i = 0; i <= m; i++) {
    d[i] = [i];
    for (let j = 1; j <= n; j++) d[i][j] = i === 0 ? j : 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const coste = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + coste
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }

  return d[m][n];
}

function buscarAproximada(pregunta, objetivo, original) {
  if (objetivo.length < 4) return null;

  const umbral = objetivo.length <= 7 ? 1 : objetivo.length <= 12 ? 2 : 3;
  const inicial = objetivo.charAt(0);

  let mejor = null;
  let mejorDistancia = 99;
  let empate = false;

  pregunta.respuestas.forEach(function (r) {
    const alias = r.alias || [r.texto];
    alias.forEach(function (a) {
      const n = normalizar(a);
      if (!n || n.charAt(0) !== inicial) return;
      if (Math.abs(n.length - objetivo.length) > umbral) return;

      const d = distancia(objetivo, n);
      if (d < mejorDistancia) {
        mejor = r;
        mejorDistancia = d;
        empate = false;
      } else if (d === mejorDistancia && mejor && r.clave !== mejor.clave) {
        empate = true;
      }
    });
  });

  if (!mejor || mejorDistancia > umbral || empate) return null;

  return Object.assign({}, mejor, { corregida: true, original: original });
}

function cumpleFiltro(clave, filtro) {
  if (!filtro) return false;
  if (filtro.tipo === 'inicial') return clave.charAt(0) === filtro.valor;
  if (filtro.tipo === 'final') return clave.charAt(clave.length - 1) === filtro.valor;
  if (filtro.tipo === 'contiene') return clave.indexOf(filtro.valor) !== -1;
  if (filtro.tipo === 'largo') return clave.indexOf(' ') === -1 && clave.length === filtro.valor;
  return false;
}
