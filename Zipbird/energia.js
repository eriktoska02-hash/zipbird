/* ==========================================================
   ZIPBIRD - SISTEMA DE ENERGÍA
   Barra de resistencia del pájaro, gestión estratégica, recuperación
   ========================================================== */

class SistemaEnergia {
  constructor(config = {}) {
    this.energiaMaxima = config.maxima || 100;
    this.energiaActual = config.inicial || this.energiaMaxima;
    this.energiaMinima = 0;
    this.regeneracionBase = config.regeneracionBase || 0; // por evento/turno
    this.umbralAgotamiento = config.umbralAgotamiento || 10;
    this.umbralCritico = config.umbralCritico || 25;
    this.umbralAlto = config.umbralAlto || 75;

    // Estado
    this.historial = []; // {accion, coste, timestamp, energiaAntes, energiaDespues}
    this.modificadoresTemporales = []; // {factor, duracion, tipo}
    this.efectosActivos = new Set(); // 'agotado', 'critico', 'lleno', 'sobrecarga'

    // Callbacks
    this.onCambio = null;
    this.onAgotamiento = null;
    this.onCritico = null;
    this.onRecuperacion = null;
    this.onLleno = null;
  }

  // ==========================================================
  // GETTERS
  // ==========================================================

  get porcentaje() {
    return Math.round((this.energiaActual / this.energiaMaxima) * 100);
  }

  get estado() {
    if (this.energiaActual <= 0) return 'agotado';
    if (this.energiaActual <= this.umbralAgotamiento) return 'critico';
    if (this.energiaActual <= this.umbralCritico) return 'bajo';
    if (this.energiaActual >= this.energiaMaxima) return 'lleno';
    if (this.energiaActual >= this.umbralAlto) return 'alto';
    return 'normal';
  }

  get color() {
    switch (this.estado) {
      case 'agotado': return '#ff3333';
      case 'critico': return '#ff6644';
      case 'bajo': return '#ffaa33';
      case 'normal': return '#88ff88';
      case 'alto': return '#44ff88';
      case 'lleno': return '#00ff88';
      default: return '#88ff88';
    }
  }

  get etiqueta() {
    const etiquetas = {
      agotado: 'AGOTADO',
      critico: 'CRÍTICO',
      bajo: 'BAJO',
      normal: 'NORMAL',
      alto: 'ALTO',
      lleno: 'MÁXIMO'
    };
    return etiquetas[this.estado] || 'NORMAL';
  }

  // ==========================================================
  // OPERACIONES PRINCIPALES
  // ==========================================================

  gastar(cantidad, accion = 'accion', metadata = {}) {
    if (this.energiaActual <= 0) return { exito: false, mensaje: 'Sin energía' };

    const costeReal = Math.min(cantidad, this.energiaActual);
    const energiaAntes = this.energiaActual;
    this.energiaActual = Math.max(0, this.energiaActual - costeReal);

    this.registrarHistorial({
      tipo: 'gasto',
      accion,
      coste: costeReal,
      energiaAntes,
      energiaDespues: this.energiaActual,
      metadata,
      timestamp: Date.now()
    });

    this.actualizarEfectos();
    this.dispararCambio();

    // Verificar umbrales
    if (this.energiaActual === 0 && energiaAntes > 0) {
      this.dispararAgotamiento();
    } else if (this.energiaActual <= this.umbralAgotamiento && energiaAntes > this.umbralAgotamiento) {
      this.dispararCritico();
    } else if (this.energiaActual <= this.umbralCritico && energiaAntes > this.umbralCritico) {
      this.dispararBajo();
    }

    return {
      exito: true,
      costeReal,
      energiaRestante: this.energiaActual,
      estado: this.estado
    };
  }

  recuperar(cantidad, fuente = 'recuperacion', metadata = {}) {
    if (this.energiaActual >= this.energiaMaxima) {
      return { exito: false, mensaje: 'Energía al máximo', desperdiciado: cantidad };
    }

    const energiaAntes = this.energiaActual;
    const espacioDisponible = this.energiaMaxima - this.energiaActual;
    const recuperadoReal = Math.min(cantidad, espacioDisponible);
    this.energiaActual = Math.min(this.energiaMaxima, this.energiaActual + recuperadoReal);

    this.registrarHistorial({
      tipo: 'recuperacion',
      fuente,
      cantidad: recuperadoReal,
      energiaAntes,
      energiaDespues: this.energiaActual,
      metadata,
      timestamp: Date.now()
    });

    this.actualizarEfectos();
    this.dispararCambio();

    // Verificar umbrales de recuperación
    if (this.energiaActual >= this.energiaMaxima && energiaAntes < this.energiaMaxima) {
      this.dispararLleno();
    } else if (this.energiaActual > this.umbralAgotamiento && energiaAntes <= this.umbralAgotamiento) {
      this.dispararRecuperacion();
    } else if (this.energiaActual > this.umbralCritico && energiaAntes <= this.umbralCritico) {
      this.dispararRecuperacion();
    }

    return {
      exito: true,
      recuperadoReal,
      energiaActual: this.energiaActual,
      desperdiciado: cantidad - recuperadoReal,
      estado: this.estado
    };
  }

  establecer(valor) {
    const anterior = this.energiaActual;
    this.energiaActual = Math.max(0, Math.min(this.energiaMaxima, valor));
    this.actualizarEfectos();
    this.dispararCambio();
    return { anterior, actual: this.energiaActual };
  }

  modificarMaxima(nuevaMaxima) {
    const ratio = this.energiaActual / this.energiaMaxima;
    this.energiaMaxima = Math.max(50, nuevaMaxima);
    this.energiaActual = Math.round(this.energiaMaxima * ratio);
    this.actualizarEfectos();
    this.dispararCambio();
  }

  // ==========================================================
  // MODIFICADORES TEMPORALES
  // ==========================================================

  agregarModificador(factor, duracion, tipo = 'temporal') {
    // factor: multiplicador de coste (1.0 = normal, 0.5 = mitad coste, 2.0 = doble)
    this.modificadoresTemporales.push({
      factor,
      duracionRestante: duracion,
      tipo,
      inicio: Date.now()
    });
  }

  calcularCosteFinal(costeBase) {
    let factor = 1.0;
    this.modificadoresTemporales.forEach(m => {
      factor *= m.factor;
    });
    return Math.round(costeBase * factor);
  }

  actualizarModificadores() {
    this.modificadoresTemporales = this.modificadoresTemporales
      .map(m => ({ ...m, duracionRestante: m.duracionRestante - 1 }))
      .filter(m => m.duracionRestante > 0);
  }

  // ==========================================================
  // EFECTOS VISUALES/ESTADO
  // ==========================================================

  actualizarEfectos() {
    this.efectosActivos.clear();
    if (this.energiaActual === 0) this.efectosActivos.add('agotado');
    if (this.energiaActual <= this.umbralAgotamiento && this.energiaActual > 0) this.efectosActivos.add('critico');
    if (this.energiaActual <= this.umbralCritico && this.energiaActual > this.umbralAgotamiento) this.efectosActivos.add('bajo');
    if (this.energiaActual >= this.umbralAlto && this.energiaActual < this.energiaMaxima) this.efectosActivos.add('alto');
    if (this.energiaActual >= this.energiaMaxima) this.efectosActivos.add('lleno');
  }

  tieneEfecto(efecto) {
    return this.efectosActivos.has(efecto);
  }

  // ==========================================================
  // REGENERACIÓN PASIVA (por evento completado, tiempo, etc.)
  // ==========================================================

  regenerarPasiva(contexto = {}) {
    // Regeneración base por completar evento
    let regen = this.regeneracionBase;

    // Bonus por tipo de evento
    if (contexto.tipoEvento === 'descanso') regen += 15;
    if (contexto.tipoEvento === 'reteo_facil') regen += 5;
    if (contexto.tipoEvento === 'reteo_dificil') regen += 10;
    if (contexto.tipoEvento === 'decision_sabia') regen += 8;

    // Penalización por estado crítico
    if (this.energiaActual <= this.umbralAgotamiento) regen = Math.max(0, regen - 5);

    if (regen > 0) {
      return this.recuperar(regen, 'regeneracion_pasiva', { contexto });
    }
    return { exito: false, recuperadoReal: 0 };
  }

  // ==========================================================
  // HISTORIAL Y ESTADÍSTICAS
  // ==========================================================

  registrarHistorial(entrada) {
    this.historial.push(entrada);
    // Mantener solo últimas 100 entradas
    if (this.historial.length > 100) this.historial.shift();
  }

  obtenerEstadisticas() {
    const gastos = this.historial.filter(h => h.tipo === 'gasto');
    const recuperaciones = this.historial.filter(h => h.tipo === 'recuperacion');

    return {
      totalGastado: gastos.reduce((s, h) => s + h.coste, 0),
      totalRecuperado: recuperaciones.reduce((s, h) => s + h.cantidad, 0),
      numGastos: gastos.length,
      numRecuperaciones: recuperaciones.length,
      gastoPromedio: gastos.length ? Math.round(gastos.reduce((s, h) => s + h.coste, 0) / gastos.length) : 0,
      energiaMinimaAlcanzada: Math.min(...this.historial.map(h => h.energiaDespues), this.energiaActual),
      energiaMaximaAlcanzada: Math.max(...this.historial.map(h => h.energiaDespues), this.energiaActual),
      tiempoAgotado: this.historial.filter(h => h.energiaDespues === 0).length
    };
  }

  // ==========================================================
  // SERIALIZACIÓN
  // ==========================================================

  serializar() {
    return {
      energiaMaxima: this.energiaMaxima,
      energiaActual: this.energiaActual,
      regeneracionBase: this.regeneracionBase,
      umbralAgotamiento: this.umbralAgotamiento,
      umbralCritico: this.umbralCritico,
      umbralAlto: this.umbralAlto,
      historial: this.historial.slice(-20), // Solo últimas 20
      modificadoresTemporales: this.modificadoresTemporales
    };
  }

  static deserializar(data) {
    const sistema = new SistemaEnergia(data);
    sistema.historial = data.historial || [];
    sistema.modificadoresTemporales = data.modificadoresTemporales || [];
    sistema.actualizarEfectos();
    return sistema;
  }

  // ==========================================================
  // CALLBACKS (para UI)
  // ==========================================================

  setCallbacks(callbacks) {
    this.onCambio = callbacks.onCambio || null;
    this.onAgotamiento = callbacks.onAgotamiento || null;
    this.onCritico = callbacks.onCritico || null;
    this.onBajo = callbacks.onBajo || null;
    this.onRecuperacion = callbacks.onRecuperacion || null;
    this.onLleno = callbacks.onLleno || null;
  }

  dispararCambio() {
    if (this.onCambio) this.onCambio(this.obtenerEstadoUI());
  }

  dispararAgotamiento() {
    this.efectosActivos.add('agotado');
    if (this.onAgotamiento) this.onAgotamiento(this.obtenerEstadoUI());
    this.reproducirSonido('agotamiento');
  }

  dispararCritico() {
    this.efectosActivos.add('critico');
    if (this.onCritico) this.onCritico(this.obtenerEstadoUI());
    this.reproducirSonido('critico');
  }

  dispararBajo() {
    this.efectosActivos.add('bajo');
    if (this.onBajo) this.onBajo(this.obtenerEstadoUI());
  }

  dispararRecuperacion() {
    if (this.onRecuperacion) this.onRecuperacion(this.obtenerEstadoUI());
    this.reproducirSonido('recuperacion');
  }

  dispararLleno() {
    this.efectosActivos.add('lleno');
    if (this.onLleno) this.onLleno(this.obtenerEstadoUI());
    this.reproducirSonido('lleno');
  }

  obtenerEstadoUI() {
    return {
      actual: this.energiaActual,
      maxima: this.energiaMaxima,
      porcentaje: this.porcentaje,
      estado: this.estado,
      color: this.color,
      etiqueta: this.etiqueta,
      efectos: [...this.efectosActivos]
    };
  }

  reproducirSonido(tipo) {
    if (!window.inicializarAudio) return;
    window.inicializarAudio();
    const sonidos = {
      agotamiento: [150, 120, 100],
      critico: [200, 180],
      recuperacion: [400, 500, 600],
      lleno: [600, 800, 1000]
    };
    const freq = sonidos[tipo] || [300];
    freq.forEach((f, i) => window.tono(f, i * 0.1, 0.15, 'sine', 0.05));
  }
}

// Configuraciones predefinidas por dificultad/región
const CONFIGS_ENERGIA = {
  facil: { maxima: 120, inicial: 120, regeneracionBase: 8, umbralAgotamiento: 15, umbralCritico: 35 },
  normal: { maxima: 100, inicial: 100, regeneracionBase: 5, umbralAgotamiento: 10, umbralCritico: 25 },
  dificil: { maxima: 80, inicial: 80, regeneracionBase: 3, umbralAgotamiento: 8, umbralCritico: 20 },
  experto: { maxima: 60, inicial: 60, regeneracionBase: 2, umbralAgotamiento: 5, umbralCritico: 15 },

  // Por región (modificadores)
  'cordillera-andina': { maxima: 100, regeneracionBase: 5 }, // Térmicas ayudan
  'amazonia': { maxima: 110, regeneracionBase: 6 }, // Humedad, comida abundante
  'patagonia': { maxima: 90, regeneracionBase: 3 }, // Viento gasta energía
  'alaska': { maxima: 95, regeneracionBase: 4 }, // Frío gasta energía
  'himalaya': { maxima: 85, regeneracionBase: 3 }, // Altitud gasta energía
  'islandia': { maxima: 100, regeneracionBase: 5 }, // Geotermia ayuda
  'sabana-africana': { maxima: 105, regeneracionBase: 5 }, // Calor pero termales
  'antartida': { maxima: 80, regeneracionBase: 2 } // Frío extremo
};

function crearSistemaEnergia(dificultad = 'normal', regionId = null) {
  const config = { ...CONFIGS_ENERGIA[dificultad] };
  if (regionId && CONFIGS_ENERGIA[regionId]) {
    Object.assign(config, CONFIGS_ENERGIA[regionId]);
  }
  return new SistemaEnergia(config);
}

// Costes estándar de acciones
const COSTES_ENERGIA = {
  // Vuelo base
  vuelo_normal: 5,
  vuelo_rapido: 10,
  vuelo_lento: 3,
  planeo: 0,

  // Eventos
  cruzar_tormenta: 30,
  rodear_tormenta: 15,
  buscar_refugio: 5,
  explorar_zona: 25,
  marcar_ruta: 10,
  retroceder: 5,

  // Retos
  reto_facil: 5,
  reto_medio: 10,
  reto_dificil: 15,
  reto_creativo: 8,
  reto_adivinanza: 5,

  // Decisiones
  decision_arriesgada: 15,
  decision_segura: 5,
  decision_explorar: 20,
  decision_descansar: -10, // recupera

  // Objetos/ayudas
  usar_objeto: 0,
  comer: -15,
  beber: -5,
  dormir: -25
};

// Exportar
window.SistemaEnergia = SistemaEnergia;
window.CONFIGS_ENERGIA = CONFIGS_ENERGIA;
window.COSTES_ENERGIA = COSTES_ENERGIA;
window.crearSistemaEnergia = crearSistemaEnergia;