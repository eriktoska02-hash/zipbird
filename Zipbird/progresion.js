/* ==========================================================
   ZIPBIRD - SISTEMA DE PROGRESIÓN Y RECOMPENSAS
   Regiones, destinos, coleccionables, apariencias, logros de exploración
   ========================================================== */

class SistemaProgresion {
  constructor() {
    this.regionesDesbloqueadas = ['cordillera-andina'];
    this.destinosCompletados = new Set();
    this.destinosDesbloqueados = new Set(['valle-sagrado']);
    this.coleccionables = new Set();
    this.descubrimientos = new Set();
    this.aparienciasDesbloqueadas = ['basica'];
    this.aparienciaActual = 'basica';
    this.accesoriosDesbloqueados = new Set();
    this.accesorioActual = null;
    this.plumasTotales = 0;
    this.expedicionesCompletadas = 0;
    this.distanciaTotalRecorrida = 0;
    this.energiaMaximaHistorica = 100;
    this.rachaExpediciones = 0;
    this.ultimaRegionJugada = 'cordillera-andina';
    this.logrosExploracion = new Set();
    this.estadisticasGlobales = {
      retosSuperados: 0,
      retosFallados: 0,
      decisionesTomadas: 0,
      eventosEncontrados: 0,
      descubrimientosUnicos: 0,
      tiempoTotalJuego: 0
    };
  }

  // ==========================================================
  // REGIONES Y DESTINOS
  // ==========================================================

  estaRegionDesbloqueada(regionId) {
    return this.regionesDesbloqueadas.includes(regionId);
  }

  desbloquearRegion(regionId) {
    if (!this.regionesDesbloqueadas.includes(regionId)) {
      this.regionesDesbloqueadas.push(regionId);
      this.dispararCambio('region', regionId);
      return true;
    }
    return false;
  }

  obtenerProximaRegion() {
    const regiones = window.REGIONES || [];
    const indiceActual = regiones.findIndex(r => r.id === this.ultimaRegionJugada);
    if (indiceActual >= 0 && indiceActual < regiones.length - 1) {
      const siguiente = regiones[indiceActual + 1];
      if (this.puedeDesbloquearRegion(siguiente.id)) {
        return siguiente;
      }
    }
    return null;
  }

  puedeDesbloquearRegion(regionId) {
    const region = (window.REGIONES || []).find(r => r.id === regionId);
    if (!region) return false;
    if (this.regionesDesbloqueadas.includes(regionId)) return false;

    // Verificar requisitos: destinos completados en región anterior
    const regionAnterior = this.obtenerRegionAnterior(regionId);
    if (regionAnterior) {
      const destinosRegionAnterior = regionAnterior.destinos.filter(d => d.desbloqueado);
      const completados = destinosRegionAnterior.filter(d => this.destinosCompletados.has(d.id)).length;
      return completados >= (region.costeDesbloqueoRegion || 2);
    }
    return true;
  }

  obtenerRegionAnterior(regionId) {
    const regiones = window.REGIONES || [];
    const idx = regiones.findIndex(r => r.id === regionId);
    if (idx > 0) return regiones[idx - 1];
    return null;
  }

  estaDestinoDesbloqueado(destinoId) {
    return this.destinosDesbloqueados.has(destinoId);
  }

  desbloquearDestino(destinoId) {
    if (!this.destinosDesbloqueados.has(destinoId)) {
      this.destinosDesbloqueados.add(destinoId);
      this.dispararCambio('destino', destinoId);
      return true;
    }
    return false;
  }

  completarDestino(destinoId, estadisticas = {}) {
    this.destinosCompletados.add(destinoId);
    this.expedicionesCompletadas++;
    this.rachaExpediciones++;
    this.distanciaTotalRecorrida += estadisticas.distancia || 0;
    this.plumasTotales += estadisticas.plumas || 0;
    this.actualizarEstadisticas(estadisticas);

    // Desbloquear siguiente destino en la región
    this.desbloquearSiguienteDestino(destinoId);

    // Verificar desbloqueo de región siguiente
    this.verificarDesbloqueoRegiones();

    this.dispararCambio('completado', destinoId);
    return this.obtenerRecompensasDestino(destinoId);
  }

  desbloquearSiguienteDestino(destinoIdCompletado) {
    const regiones = window.REGIONES || [];
    for (const region of regiones) {
      const idx = region.destinos.findIndex(d => d.id === destinoIdCompletado);
      if (idx >= 0 && idx < region.destinos.length - 1) {
        const siguiente = region.destinos[idx + 1];
        if (this.puedeDesbloquearDestino(siguiente)) {
          this.desbloquearDestino(siguiente.id);
        }
        break;
      }
    }
  }

  puedeDesbloquearDestino(destino) {
    // Requisitos: destino anterior completado + coste en plumas
    return this.plumasTotales >= (destino.costeDesbloqueo || 0);
  }

  verificarDesbloqueoRegiones() {
    const regiones = window.REGIONES || [];
    for (const region of regiones) {
      if (!this.regionesDesbloqueadas.includes(region.id) && this.puedeDesbloquearRegion(region.id)) {
        this.desbloquearRegion(region.id);
      }
    }
  }

  obtenerRecompensasDestino(destinoId) {
    const regiones = window.REGIONES || [];
    for (const region of regiones) {
      const destino = region.destinos.find(d => d.id === destinoId);
      if (destino) {
        return destino.recompensas || {};
      }
    }
    return {};
  }

  // ==========================================================
  // COLECCIONABLES Y DESCUBRIMIENTOS
  // ==========================================================

  agregarColeccionable(id, metadata = {}) {
    if (!this.coleccionables.has(id)) {
      this.coleccionables.add(id);
      this.estadisticasGlobales.descubrimientosUnicos++;
      this.dispararCambio('coleccionable', { id, metadata });
      return true;
    }
    return false;
  }

  agregarDescubrimiento(id, metadata = {}) {
    if (!this.descubrimientos.has(id)) {
      this.descubrimientos.add(id);
      this.estadisticasGlobales.descubrimientosUnicos++;
      this.dispararCambio('descubrimiento', { id, metadata });
      return true;
    }
    return false;
  }

  tieneColeccionable(id) {
    return this.coleccionables.has(id);
  }

  tieneDescubrimiento(id) {
    return this.descubrimientos.has(id);
  }

  // ==========================================================
  // APARIENCIAS Y ACCESORIOS
  // ==========================================================

  desbloquearApariencia(id) {
    if (!this.aparienciasDesbloqueadas.includes(id)) {
      this.aparienciasDesbloqueadas.push(id);
      this.dispararCambio('apariencia', id);
      return true;
    }
    return false;
  }

  cambiarApariencia(id) {
    if (this.aparienciasDesbloqueadas.includes(id)) {
      this.aparienciaActual = id;
      this.dispararCambio('apariencia_actual', id);
      return true;
    }
    return false;
  }

  desbloquearAccesorio(id) {
    if (!this.accesoriosDesbloqueados.has(id)) {
      this.accesoriosDesbloqueados.add(id);
      this.dispararCambio('accesorio', id);
      return true;
    }
    return false;
  }

  equiparAccesorio(id) {
    if (this.accesoriosDesbloqueados.has(id) || id === null) {
      this.accesorioActual = id;
      this.dispararCambio('accesorio_actual', id);
      return true;
    }
    return false;
  }

  obtenerAparienciasDisponibles() {
    return this.aparienciasDesbloqueadas.map(id => ({
      id,
      ...this.obtenerInfoApariencia(id)
    }));
  }

  obtenerAccesoriosDisponibles() {
    return [...this.accesoriosDesbloqueados].map(id => ({
      id,
      ...this.obtenerInfoAccesorio(id)
    }));
  }

  obtenerInfoApariencia(id) {
    const apariencias = {
      basica: { nombre: 'Pájaro Rojo Clásico', descripcion: 'Tu plumaje original, rojo vibrante', icono: '🐦', rareza: 'común' },
      'penacho-inca': { nombre: 'Penacho Inca', descripcion: 'Plumas doradas como el sol de los Andes', icono: '👑', rareza: 'raro' },
      'gorro-chullo': { nombre: 'Gorro Andino', descripcion: 'Tejido a mano con lana de vicuña', icono: '🧢', rareza: 'poco-comun' },
      'gafas-espejo': { nombre: 'Gafas de Espejo', descripcion: 'Reflejan el Salar como el cielo', icono: '🕶️', rareza: 'raro' },
      'cola-uakari': { nombre: 'Cola de Uakari', descripcion: 'Rojiza como la cara del mono sagrado', icono: '🐒', rareza: 'raro' },
      'pintura-corporal': { nombre: 'Pintura Yanomami', descripcion: 'Diseños ancestrales de protección', icono: '🎨', rareza: 'legendario' },
      'capa-neblina': { nombre: 'Capa de Neblina', descripcion: 'Te envuelve como las nubes del Roraima', icono: '🌫️', rareza: 'legendario' },
      'plumas-hielo': { nombre: 'Plumas de Hielo', descripcion: 'Cristales que nunca se derriten', icono: '❄️', rareza: 'raro' },
      'bufanda-pinguino': { nombre: 'Bufanda Pingüino', descripcion: 'Calidez del fin del mundo', icono: '🧣', rareza: 'poco-comun' },
      'cola-ballena': { nombre: 'Cola de Ballena', descripcion: 'Potencia del océano austral', icono: '🐋', rareza: 'legendario' },
      'garra-oso': { nombre: 'Garra de Oso', descripcion: 'Fuerza de los pescadores de Brooks', icono: '🐻', rareza: 'raro' },
      'cristales-hielo': { nombre: 'Cristales de Hielo', descripcion: 'Azul glacial de Mendenhall', icono: '💎', rareza: 'raro' },
      'estela-aurora': { nombre: 'Estela Aurora', descripcion: 'Dejas luz verde y púrpura al volar', icono: '🌌', rareza: 'legendario' },
      'bandera-oracion': { nombre: 'Banderas de Oración', descripcion: 'Tus alas llevan mantras al viento', icono: '🏳️', rareza: 'poco-comun' },
      'mascara-butan': { nombre: 'Máscara de Bután', descripcion: 'Guardián del monasterio del tigre', icono: '🎭', rareza: 'legendario' },
      'cuenco-cantar': { nombre: 'Cuenco Cantor', descripcion: 'Tu canto sana como los cuencos tibetanos', icono: '🔔', rareza: 'legendario' },
      'vapor-geyser': { nombre: 'Vapor de Geyser', descripcion: 'Erupicionas energía geotérmica', icono: '💨', rareza: 'poco-comun' },
      'cristal-hielo': { nombre: 'Cristal de Hielo', descripcion: 'Diamante negro de la playa de Jökulsárlón', icono: '💎', rareza: 'raro' },
      'pico-frailecillo': { nombre: 'Pico de Frailecillo', descripcion: 'Colorido como el parlamento de Latrabjarg', icono: '🐧', rareza: 'legendario' },
      'melena-leon': { nombre: 'Melena de León', descripcion: 'Reina de la sabana en tu cuello', icono: '🦁', rareza: 'legendario' },
      'lirio-agua': { nombre: 'Lirio de Agua', descripcion: 'Flota en el delta del Okavango', icono: '🌸', rareza: 'raro' },
      'arena-estelar': { nombre: 'Arena Estelar', descripcion: 'Dunas de Namib bajo la Vía Láctea', icono: '🏜️', rareza: 'legendario' },
      'penacho-emperador': { nombre: 'Penacho Emperador', descripcion: 'Oro y negro del pingüino real', icono: '👑', rareza: 'legendario' },
      'bandera-polo': { nombre: 'Bandera del Polo Sur', descripcion: 'Donde todos los meridianos se encuentran', icono: '🚩', rareza: 'legendario' },
      'hielo-eterno': { nombre: 'Hielo Eterno', descripcion: 'Polvo de Marte en tus alas', icono: '☄️', rareza: 'legendario' }
    };
    return apariencias[id] || { nombre: id, descripcion: '', icono: '❓', rareza: 'desconocido' };
  }

  obtenerInfoAccesorio(id) {
    const accesorios = {
      'brújula-antigua': { nombre: 'Brújula Antigua', descripcion: 'Siempre apunta a lo desconocido', slot: 'cuello', icono: '🧭' },
      'pluma-dorada': { nombre: 'Pluma Dorada', descripcion: 'Regalo de un sabio andino', slot: 'ala', icono: '🪶' },
      'piedra-luna': { nombre: 'Piedra de Luna', descripcion: 'Brilla en las noches polares', slot: 'pecho', icono: '🌙' },
      'semilla-yggdrasil': { nombre: 'Semilla de Yggdrasil', descripcion: 'Conecta los nueve mundos', slot: 'cuello', icono: '🌱' },
      'diente-megalodon': { nombre: 'Diente de Megalodón', descripcion: 'Fósil de los mares antiguos', slot: 'cola', icono: '🦷' },
      'escama-dragon': { nombre: 'Escama de Dragón', descripcion: 'Resistencia al fuego y hielo', slot: 'pecho', icono: '🐉' }
    };
    return accesorios[id] || { nombre: id, descripcion: '', slot: 'desconocido', icono: '❓' };
  }

  // ==========================================================
  // LOGROS DE EXPLORACIÓN
  // ==========================================================

  desbloquearLogroExploracion(id) {
    if (!this.logrosExploracion.has(id)) {
      this.logrosExploracion.add(id);
      this.dispararCambio('logro_exploracion', id);
      return true;
    }
    return false;
  }

  verificarLogrosExploracion() {
    const logros = this.obtenerDefinicionesLogros();
    logros.forEach(logro => {
      if (!this.logrosExploracion.has(logro.id) && logro.condicion(this)) {
        this.desbloquearLogroExploracion(logro.id);
      }
    });
  }

  obtenerDefinicionesLogros() {
    return [
      {
        id: 'primer-vuelo',
        nombre: 'Primer Vuelo',
        descripcion: 'Completa tu primera expedición',
        icono: '🛫',
        condicion: (s) => s.expedicionesCompletadas >= 1
      },
      {
        id: 'explorador-andes',
        nombre: 'Explorador de los Andes',
        descripcion: 'Completa todos los destinos de la Cordillera Andina',
        icono: '⛰️',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'cordillera-andina');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-amazonia',
        nombre: 'Guardián de la Selva',
        descripcion: 'Completa todos los destinos de la Amazonia',
        icono: '🌿',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'amazonia');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-patagonia',
        nombre: 'Viento Patagónico',
        descripcion: 'Completa todos los destinos de la Patagonia',
        icono: '🧊',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'patagonia');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-alaska',
        nombre: 'Espíritu del Norte',
        descripcion: 'Completa todos los destinos de Alaska',
        icono: '🦅',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'alaska');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-himalaya',
        nombre: 'Techo del Mundo',
        descripcion: 'Completa todos los destinos del Himalaya',
        icono: '🏔️',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'himalaya');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-islandia',
        nombre: 'Hielo y Fuego',
        descripcion: 'Completa todos los destinos de Islandia',
        icono: '🌋',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'islandia');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-sabana',
        nombre: 'Rey de la Sabana',
        descripcion: 'Completa todos los destinos de la Sabana Africana',
        icono: '🦁',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'sabana-africana');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'explorador-antartida',
        nombre: 'Conquistador del Blanco',
        descripcion: 'Completa todos los destinos de la Antártida',
        icono: '🐧',
        condicion: (s) => {
          const region = (window.REGIONES || []).find(r => r.id === 'antartida');
          return region && region.destinos.every(d => s.destinosCompletados.has(d.id));
        }
      },
      {
        id: 'coleccionista-novato',
        nombre: 'Coleccionista Novato',
        descripcion: 'Consigue 5 coleccionables',
        icono: '📦',
        condicion: (s) => s.coleccionables.size >= 5
      },
      {
        id: 'coleccionista-experto',
        nombre: 'Coleccionista Experto',
        descripcion: 'Consigue 15 coleccionables',
        icono: '📦',
        condicion: (s) => s.coleccionables.size >= 15
      },
      {
        id: 'coleccionista-maestro',
        nombre: 'Coleccionista Maestro',
        descripcion: 'Consigue todos los coleccionables',
        icono: '📦',
        condicion: (s) => s.coleccionables.size >= 30
      },
      {
        id: 'sabio-viajero',
        nombre: 'Sabio Viajero',
        descripcion: 'Descubre 20 secretos del mundo',
        icono: '🧠',
        condicion: (s) => s.descubrimientos.size >= 20
      },
      {
        id: 'modista-alas',
        nombre: 'Modista de Alas',
        descripcion: 'Desbloquea 10 apariencias',
        icono: '👗',
        condicion: (s) => s.aparienciasDesbloqueadas.length >= 10
      },
      {
        id: 'globetrotter',
        nombre: 'Globetrotter',
        descripcion: 'Visita 5 regiones distintas',
        icono: '🌍',
        condicion: (s) => s.regionesDesbloqueadas.length >= 5
      },
      {
        id: 'maestro-del-viento',
        nombre: 'Maestro del Viento',
        descripcion: 'Recorre 50,000 km en total',
        icono: '💨',
        condicion: (s) => s.distanciaTotalRecorrida >= 50000
      },
      {
        id: 'superviviente-extremo',
        nombre: 'Superviviente Extremo',
        descripcion: 'Completa una expedición con menos de 10% de energía',
        icono: '⚡',
        condicion: (s) => s.energiaMaximaHistorica <= 10 // Se verifica en la expedición
      },
      {
        id: 'racha-imparable',
        nombre: 'Racha Imparable',
        descripcion: 'Completa 5 expediciones seguidas sin fallar',
        icono: '🔥',
        condicion: (s) => s.rachaExpediciones >= 5
      }
    ];
  }

  // ==========================================================
  // ESTADÍSTICAS
  // ==========================================================

  actualizarEstadisticas(stats) {
    this.estadisticasGlobales.retosSuperados += stats.retosSuperados || 0;
    this.estadisticasGlobales.retosFallados += stats.retosFallados || 0;
    this.estadisticasGlobales.decisionesTomadas += stats.decisionesTomadas || 0;
    this.estadisticasGlobales.eventosEncontrados += stats.eventosEncontrados || 0;
    this.estadisticasGlobales.tiempoTotalJuego += stats.tiempo || 0;
  }

  obtenerEstadisticas() {
    return { ...this.estadisticasGlobales };
  }

  obtenerProgresoGlobal() {
    const regiones = window.REGIONES || [];
    let totalDestinos = 0;
    let completados = 0;
    let desbloqueados = 0;

    regiones.forEach(r => {
      totalDestinos += r.destinos.length;
      r.destinos.forEach(d => {
        if (this.destinosCompletados.has(d.id)) completados++;
        if (this.destinosDesbloqueados.has(d.id)) desbloqueados++;
      });
    });

    return {
      regionesDesbloqueadas: this.regionesDesbloqueadas.length,
      totalRegiones: regiones.length,
      destinosCompletados: completados,
      destinosDesbloqueados: desbloqueados,
      totalDestinos,
      porcentajeCompletado: totalDestinos > 0 ? Math.round((completados / totalDestinos) * 100) : 0,
      porcentajeDesbloqueado: totalDestinos > 0 ? Math.round((desbloqueados / totalDestinos) * 100) : 0
    };
  }

  // ==========================================================
  // SERIALIZACIÓN
  // ==========================================================

  serializar() {
    return {
      regionesDesbloqueadas: this.regionesDesbloqueadas,
      destinosCompletados: [...this.destinosCompletados],
      destinosDesbloqueados: [...this.destinosDesbloqueados],
      coleccionables: [...this.coleccionables],
      descubrimientos: [...this.descubrimientos],
      aparienciasDesbloqueadas: this.aparienciasDesbloqueadas,
      aparienciaActual: this.aparienciaActual,
      accesoriosDesbloqueados: [...this.accesoriosDesbloqueados],
      accesorioActual: this.accesorioActual,
      plumasTotales: this.plumasTotales,
      expedicionesCompletadas: this.expedicionesCompletadas,
      distanciaTotalRecorrida: this.distanciaTotalRecorrida,
      energiaMaximaHistorica: this.energiaMaximaHistorica,
      rachaExpediciones: this.rachaExpediciones,
      ultimaRegionJugada: this.ultimaRegionJugada,
      logrosExploracion: [...this.logrosExploracion],
      estadisticasGlobales: this.estadisticasGlobales
    };
  }

  static deserializar(data) {
    const s = new SistemaProgresion();
    if (!data) return s;

    s.regionesDesbloqueadas = data.regionesDesbloqueadas || ['cordillera-andina'];
    s.destinosCompletados = new Set(data.destinosCompletados || []);
    s.destinosDesbloqueados = new Set(data.destinosDesbloqueados || ['valle-sagrado']);
    s.coleccionables = new Set(data.coleccionables || []);
    s.descubrimientos = new Set(data.descubrimientos || []);
    s.aparienciasDesbloqueadas = data.aparienciasDesbloqueadas || ['basica'];
    s.aparienciaActual = data.aparienciaActual || 'basica';
    s.accesoriosDesbloqueados = new Set(data.accesoriosDesbloqueados || []);
    s.accesorioActual = data.accesorioActual || null;
    s.plumasTotales = data.plumasTotales || 0;
    s.expedicionesCompletadas = data.expedicionesCompletadas || 0;
    s.distanciaTotalRecorrida = data.distanciaTotalRecorrida || 0;
    s.energiaMaximaHistorica = data.energiaMaximaHistorica || 100;
    s.rachaExpediciones = data.rachaExpediciones || 0;
    s.ultimaRegionJugada = data.ultimaRegionJugada || 'cordillera-andina';
    s.logrosExploracion = new Set(data.logrosExploracion || []);
    s.estadisticasGlobales = data.estadisticasGlobales || s.estadisticasGlobales;

    return s;
  }

  // ==========================================================
  // CALLBACKS
  // ==========================================================

  setCallback(callback) {
    this.onCambio = callback;
  }

  dispararCambio(tipo, data) {
    if (this.onCambio) this.onCambio({ tipo, data, estado: this.obtenerEstadoResumido() });
  }

  obtenerEstadoResumido() {
    return {
      regionesDesbloqueadas: this.regionesDesbloqueadas.length,
      destinosCompletados: this.destinosCompletados.size,
      coleccionables: this.coleccionables.size,
      descubrimientos: this.descubrimientos.size,
      apariencias: this.aparienciasDesbloqueadas.length,
      plumas: this.plumasTotales,
      expediciones: this.expedicionesCompletadas
    };
  }
}

// Definiciones de apariencias por región (para UI)
const APARIENCIAS_POR_REGION = {
  'cordillera-andina': ['penacho-inca', 'gorro-chullo', 'gafas-espejo'],
  'amazonia': ['cola-uakari', 'pintura-corporal', 'capa-neblina'],
  'patagonia': ['plumas-hielo', 'bufanda-pinguino', 'cola-ballena'],
  'alaska': ['garra-oso', 'cristales-hielo', 'estela-aurora'],
  'himalaya': ['bandera-oracion', 'mascara-butan', 'cuenco-cantar'],
  'islandia': ['vapor-geyser', 'cristal-hielo', 'pico-frailecillo'],
  'sabana-africana': ['melena-leon', 'lirio-agua', 'arena-estelar'],
  'antartida': ['penacho-emperador', 'bandera-polo', 'hielo-eterno']
};

// Exportar
window.SistemaProgresion = SistemaProgresion;
window.APARIENCIAS_POR_REGION = APARIENCIAS_POR_REGION;