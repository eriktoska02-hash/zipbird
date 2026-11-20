/* ==========================================================
   ZIPBIRD - REGIONES Y DESTINOS DEL MUNDO
   Definición del mapa mundial de expediciones
   ========================================================== */

const REGIONES = [
  {
    id: 'cordillera-andina',
    nombre: 'Cordillera Andina',
    descripcion: 'Cumbres nevadas y valles ancestrales donde vuelan los cóndores',
    color: '#8aff8a',
    colorOscuro: '#4acc4a',
    icono: '⛰️',
    fondoClase: 'fondo-andes',
    orden: 0,
    desbloqueada: true,
    destinos: [
      {
        id: 'valle-sagrado',
        nombre: 'Valle Sagrado de los Incas',
        descripcion: 'Terrazas agrícolas y templos entre montañas',
        distancia: 3000,
        costeDesbloqueo: 0,
        icono: '🏛️',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['terrazas-incas'] },
        retosTags: ['cultura-andina', 'geografia-montana', 'historia-inca'],
        eventosEspeciales: ['encuentro-sabio-inca', 'ruinas-ocultas'],
        desbloqueado: true
      },
      {
        id: 'machu-picchu',
        nombre: 'Machu Picchu',
        descripcion: 'La ciudadela perdida en la nube',
        distancia: 5000,
        costeDesbloqueo: 1,
        icono: '🏔️',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['ciudadela-perdida'], apariencia: 'penacho-inca' },
        retosTags: ['cultura-andina', 'arquitectura-inca', 'astronomia-inca'],
        eventosEspeciales: ['amanecer-puerta-sol', 'condor-vigia'],
        desbloqueado: false
      },
      {
        id: 'lago-titicaca',
        nombre: 'Lago Titicaca',
        descripcion: 'El lago navegable más alto del mundo',
        distancia: 7500,
        costeDesbloqueo: 2,
        icono: '🌊',
        recompensas: { energia: 25, plumas: 2, descubrimientos: ['islas-flotantes'], apariencia: 'gorro-chullo' },
        retosTags: ['cultura-aymara', 'geografia-lacustre', 'mitologia-andina'],
        eventosEspeciales: ['isla-del-sol', 'totora-navegante'],
        desbloqueado: false
      },
      {
        id: 'salar-uyuni',
        nombre: 'Salar de Uyuni',
        descripcion: 'El espejo de sal más grande del mundo',
        distancia: 10000,
        costeDesbloqueo: 4,
        icono: '🪞',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['espejo-cielo'], apariencia: 'gafas-espejo' },
        retosTags: ['geologia-salar', 'flora-extrema', 'fenomenos-opticos'],
        eventosEspeciales: ['lluvia-espejo', 'flamencos-andinos', 'tren-cementerio'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['corriente-termica', 'avistamiento-condor', 'cambio-clima', 'hierba-ichu', 'apacheta'],
    retosBase: ['cultura-andina', 'geografia-montana', 'fauna-andina', 'flora-alpina', 'historia-inca']
  },

  {
    id: 'amazonia',
    nombre: 'Amazonia',
    descripcion: 'El pulmón verde del planeta, río y selva infinita',
    color: '#4acc4a',
    colorOscuro: '#2d8a2d',
    icono: '🌿',
    fondoClase: 'fondo-amazonia',
    orden: 1,
    desbloqueada: false,
    costeDesbloqueoRegion: 2,
    destinos: [
      {
        id: 'manaus',
        nombre: 'Manaus - Puerta de la Selva',
        descripcion: 'Donde el río Negro y el Solimões se encuentran',
        distancia: 4000,
        costeDesbloqueo: 0,
        icono: '🌊',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['encuentro-aguas'] },
        retosTags: ['geografia-amazonica', 'biodiversidad', 'culturas-riberenas'],
        eventosEspeciales: ['delfines-rosados', 'encuentro-rios'],
        desbloqueado: false
      },
      {
        id: 'reserva-mamiraua',
        nombre: 'Reserva Mamirauá',
        descripcion: 'Bosque inundado y monos uakari',
        distancia: 6500,
        costeDesbloqueo: 1,
        icono: '🐒',
        recompensas: { energia: 25, plumas: 2, descubrimientos: ['monos-uakari'], apariencia: 'cola-uakari' },
        retosTags: ['primates', 'ecologia-varzea', 'conservacion'],
        eventosEspeciales: ['canto-uakari', 'noche-selva'],
        desbloqueado: false
      },
      {
        id: 'yanomami',
        nombre: 'Territorio Yanomami',
        descripcion: 'Guardianes ancestrales de la selva profunda',
        distancia: 9000,
        costeDesbloqueo: 3,
        icono: '🏕️',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['saberes-yanomami'], apariencia: 'pintura-corporal' },
        retosTags: ['cultura-yanomami', 'etnobotanica', 'cosmovision-indigena'],
        eventosEspeciales: ['chamán-yanomami', 'caza-tradicional'],
        desbloqueado: false
      },
      {
        id: 'monte-roraima',
        nombre: 'Monte Roraima',
        descripcion: 'La montaña mesa que inspiró "El Mundo Perdido"',
        distancia: 12000,
        costeDesbloqueo: 5,
        icono: '🏔️',
        recompensas: { energia: 40, plumas: 3, descubrimientos: ['tepuy-sagrado'], apariencia: 'capa-neblina' },
        retosTags: ['geologia-tepuy', 'endemismo', 'literatura-aventura'],
        eventosEspeciales: ['cascada-tepuy', 'plantas-carnivoras', 'cristales-cuarzo'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['lluvia-tropical', 'canto-pajaro', 'arbol-caido', 'rio-crecido', 'mariposas-azules'],
    retosBase: ['biodiversidad-amazonica', 'geografia-selva', 'culturas-indigenas', 'ecologia-rios', 'plantas-medicinales']
  },

  {
    id: 'patagonia',
    nombre: 'Patagonia Austral',
    descripcion: 'Vientos furiosos, glaciares y estepas infinitas al fin del mundo',
    color: '#7fe9ff',
    colorOscuro: '#38d6ff',
    icono: '🧊',
    fondoClase: 'fondo-patagonia',
    orden: 2,
    desbloqueada: false,
    costeDesbloqueoRegion: 3,
    destinos: [
      {
        id: 'torres-paine',
        nombre: 'Torres del Paine',
        descripcion: 'Los cuernos de granito que desafían el cielo',
        distancia: 4500,
        costeDesbloqueo: 0,
        icono: '⛰️',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['cuernos-granito'] },
        retosTags: ['geologia-patagonica', 'fauna-austral', 'trekking'],
        eventosEspeciales: ['guanacos-manada', 'viento-patagonico'],
        desbloqueado: false
      },
      {
        id: 'glaciar-perito-moreno',
        nombre: 'Glaciar Perito Moreno',
        descripcion: 'El gigante de hielo que ruge al romperse',
        distancia: 7000,
        costeDesbloqueo: 2,
        icono: '🧊',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['ruptura-glaciar'], apariencia: 'plumas-hielo' },
        retosTags: ['glaciologia', 'cambio-climatico', 'fauna-antartica'],
        eventosEspeciales: ['estruendo-hielo', 'condor-andino', 'icebergs-lago'],
        desbloqueado: false
      },
      {
        id: 'ushuaia',
        nombre: 'Ushuaia - Fin del Mundo',
        descripcion: 'La ciudad más austral, puerta a la Antártida',
        distancia: 9500,
        costeDesbloqueo: 4,
        icono: '🏠',
        recompensas: { energia: 25, plumas: 2, descubrimientos: ['faro-fin-mundo'], apariencia: 'bufanda-pinguino' },
        retosTags: ['historia-fuego', 'fauna-canales', 'navegacion-austral'],
        eventosEspeciales: ['pinguinos-magallanicos', 'canal-beagle', 'aurora-austral'],
        desbloqueado: false
      },
      {
        id: 'peninsula-valdes',
        nombre: 'Península Valdés',
        descripcion: 'Santuario de ballenas francas y elefantes marinos',
        distancia: 11000,
        costeDesbloqueo: 6,
        icono: '🐋',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['ballenas-francas'], apariencia: 'cola-ballena' },
        retosTags: ['mamiferos-marinos', 'conservacion-marina', 'ecologia-costa'],
        eventosEspeciales: ['salto-ballena', 'orcas-varamiento', 'lobos-marinos'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['viento-fuerte', 'nieve-repentina', 'guanaco-vistazo', 'zorro-colorado', 'arco-iris-patagonico'],
    retosBase: ['geologia-patagonica', 'fauna-austral', 'glaciologia', 'historia-exploradores', 'clima-extremo']
  },

  {
    id: 'alaska',
    nombre: 'Alaska Salvaje',
    descripcion: 'Tierra de osos, águilas y auroras boreales bajo el sol de medianoche',
    color: '#c899ff',
    colorOscuro: '#a866ff',
    icono: '🦅',
    fondoClase: 'fondo-alaska',
    orden: 3,
    desbloqueada: false,
    costeDesbloqueoRegion: 4,
    destinos: [
      {
        id: 'denali',
        nombre: 'Denali - La Gran Montaña',
        descripcion: 'El pico más alto de América del Norte',
        distancia: 5000,
        costeDesbloqueo: 0,
        icono: '🏔️',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['cumbre-denali'] },
        retosTags: ['montanismo', 'geologia-denali', 'fauna-alpina'],
        eventosEspeciales: ['caribou-migracion', 'sol-medianoche'],
        desbloqueado: false
      },
      {
        id: 'katmai',
        nombre: 'Katmai - Tierra de Osos',
        descripcion: 'Donde los pardos pescan salmones en cascadas',
        distancia: 7500,
        costeDesbloqueo: 2,
        icono: '🐻',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['osos-salmon'], apariencia: 'garra-oso' },
        retosTags: ['osos-pardos', 'salmones', 'ecologia-rios'],
        eventosEspeciales: ['pesca-osos', 'cascada-brooks'],
        desbloqueado: false
      },
      {
        id: 'juneau-glaciares',
        nombre: 'Campos de Hielo Juneau',
        descripcion: 'Glaciares que nacen en montañas y mueren en el mar',
        distancia: 10000,
        costeDesbloqueo: 4,
        icono: '🧊',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['glaciar-mendenhall'], apariencia: 'cristales-hielo' },
        retosTags: ['glaciologia', 'cambio-climatico', 'fauna-fjord'],
        eventosEspeciales: ['ballena-jorobada', 'foca-puerto', 'iceberg-azul'],
        desbloqueado: false
      },
      {
        id: 'nome-aurora',
        nombre: 'Nome - Bajo la Aurora',
        descripcion: 'El final de la ruta Iditarod, luces danzantes',
        distancia: 13000,
        costeDesbloqueo: 6,
        icono: '🌌',
        recompensas: { energia: 40, plumas: 3, descubrimientos: ['aurora-boreal'], apariencia: 'estela-aurora' },
        retosTags: ['auroras', 'historia-iditarod', 'cultura-inupiat'],
        eventosEspeciales: ['aurora-boreal', 'perros-trineo', 'solsticio-verano'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['aguila-calva', 'oso-cercano', 'salmones-rio', 'niebla-matinal', 'lobo-aullido'],
    retosBase: ['fauna-alaska', 'glaciologia', 'culturas-nativas', 'historia-oro', 'fenomenos-atmosfericos']
  },

  {
    id: 'himalaya',
    nombre: 'Himalaya - Techo del Mundo',
    descripcion: 'Donde el aire es delgado y las banderas de oración ondean al viento',
    color: '#ffcc33',
    colorOscuro: '#e6b800',
    icono: '🏔️',
    fondoClase: 'fondo-himalaya',
    orden: 4,
    desbloqueada: false,
    costeDesbloqueoRegion: 6,
    destinos: [
      {
        id: 'katmandu',
        nombre: 'Katmandú - Valle de Templos',
        descripcion: 'Ciudad antigua donde hinduismo y budismo se entrelazan',
        distancia: 4000,
        costeDesbloqueo: 0,
        icono: '🛕',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['stupa-boudhanath'] },
        retosTags: ['cultura-nepal', 'budismo-tibetano', 'arquitectura-newar'],
        eventosEspeciales: ['monjes-oracion', 'rhesus-monos'],
        desbloqueado: false
      },
      {
        id: 'everest-base',
        nombre: 'Campo Base Everest',
        descripcion: 'Donde los soñadores miran la cima del mundo',
        distancia: 7000,
        costeDesbloqueo: 3,
        icono: '🏔️',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['khumbhu-hielo'], apariencia: 'bandera-oracion' },
        retosTags: ['montanismo-everest', 'sherpas', 'glaciologia-himalaya'],
        eventosEspeciales: ['avalancha-lejana', 'yak-carguero', 'estrellas-cumbre'],
        desbloqueado: false
      },
      {
        id: 'butan',
        nombre: 'Bután - Felicidad Nacional Bruta',
        descripcion: 'El reino del dragón del trueno, bosques intactos',
        distancia: 9500,
        costeDesbloqueo: 5,
        icono: '🐉',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['tiger-nest'], apariencia: 'mascara-butan' },
        retosTags: ['cultura-butan', 'budismo-vajrayana', 'conservacion-bosques'],
        eventosEspeciales: ['taktsang-monasterio', 'grulla-cuello-negro', 'festivales-tshechu'],
        desbloqueado: false
      },
      {
        id: 'tibet-lago',
        nombre: 'Lago Namtso - Cielo Tibetano',
        descripcion: 'Lago sagrado a 4700m, espejo de las montañas',
        distancia: 12000,
        costeDesbloqueo: 7,
        icono: '🕉️',
        recompensas: { energia: 40, plumas: 3, descubrimientos: ['lago-sagrado'], apariencia: 'cuenco-cantar' },
        retosTags: ['budismo-tibetano', 'geografia-meseta', 'nomadas-changthang'],
        eventosEspeciales: ['peregrinos-kora', 'antelope-tibetano', 'mantras-viento'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['bandera-oracion', 'yak-pastoreo', 'aire-delgado', 'monje-caminante', 'estupa-chorten'],
    retosBase: ['budismo-tibetano', 'montanismo', 'cultura-sherpa', 'geografia-meseta', 'fauna-himalaya']
  },

  {
    id: 'islandia',
    nombre: 'Islandia - Tierra de Hielo y Fuego',
    descripcion: 'Volcanes activos, géiseres y auroras sobre campos de lava',
    color: '#ff66aa',
    colorOscuro: '#e03f88',
    icono: '🌋',
    fondoClase: 'fondo-islandia',
    orden: 5,
    desbloqueada: false,
    costeDesbloqueoRegion: 5,
    destinos: [
      {
        id: 'reykjavik',
        nombre: 'Reikiavik - Capital del Norte',
        descripcion: 'Casas de colores, arte callejero y aguas termales',
        distancia: 3500,
        costeDesbloqueo: 0,
        icono: '🏙️',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['hallgrimskirkja'] },
        retosTags: ['cultura-islandesa', 'historia-vikinga', 'energia-geotermica'],
        eventosEspeciales: ['blue-lagoon', 'sun-voyager'],
        desbloqueado: false
      },
      {
        id: 'golden-circle',
        nombre: 'Círculo Dorado',
        descripcion: 'Géiseres, cascadas y falla tectónica visible',
        distancia: 5500,
        costeDesbloqueo: 1,
        icono: '💧',
        recompensas: { energia: 25, plumas: 2, descubrimientos: ['geysir-strokkur'], apariencia: 'vapor-geyser' },
        retosTags: ['geologia-islandia', 'tectonica', 'cascadas'],
        eventosEspeciales: ['erupcion-strokkur', 'gullfoss-cascada', 'thingvellir-falla'],
        desbloqueado: false
      },
      {
        id: 'jokulsarlon',
        nombre: 'Jökulsárlón - Laguna Glaciar',
        descripcion: 'Icebergs azul zafiro flotando hacia el mar',
        distancia: 8000,
        costeDesbloqueo: 3,
        icono: '🧊',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['diamond-beach'], apariencia: 'cristal-hielo' },
        retosTags: ['glaciologia', 'cambio-climatico', 'focas-islandia'],
        eventosEspeciales: ['focas-iceberg', 'aurora-laguna', 'volcan-subglacial'],
        desbloqueado: false
      },
      {
        id: 'westfjords',
        nombre: 'Fiordos del Oeste - Acantilados de Aves',
        descripcion: 'Millones de frailecillos y la soledad más pura',
        distancia: 11000,
        costeDesbloqueo: 5,
        icono: '🐧',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['latrabjarg-frailecillos'], apariencia: 'pico-frailecillo' },
        retosTags: ['aves-marinas', 'geografia-fiordos', 'aislamiento'],
        eventosEspeciales: ['colonia-frailecillos', 'orca-cazando', 'sol-medianoche-verano'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['aurora-boreal', 'geyser-erupcion', 'caballo-islandes', 'ovejas-carretera', 'campo-lava-musgo'],
    retosBase: ['geologia-volcanica', 'glaciologia', 'cultura-vikinga', 'aves-marinas', 'energia-renovable']
  },

  {
    id: 'sabana-africana',
    nombre: 'Sabana Africana',
    descripcion: 'Horizontes infinitos, grandes manadas y el ciclo de la vida',
    color: '#ff9944',
    colorOscuro: '#e67722',
    icono: '🦁',
    fondoClase: 'fondo-sabana',
    orden: 6,
    desbloqueada: false,
    costeDesbloqueoRegion: 7,
    destinos: [
      {
        id: 'serengeti',
        nombre: 'Serengeti - La Gran Migración',
        descripcion: 'Millones de ñus y cebras cruzando llanuras eternas',
        distancia: 5000,
        costeDesbloqueo: 0,
        icono: '🦓',
        recompensas: { energia: 20, plumas: 1, descubrimientos: ['migracion-ñus'] },
        retosTags: ['migracion', 'depredadores', 'ecologia-sabana'],
        eventosEspeciales: ['cruce-mara', 'leones-caza', 'guepardo-carrera'],
        desbloqueado: false
      },
      {
        id: 'ngorongoro',
        nombre: 'Cráter Ngorongoro',
        descripcion: 'El Edén africano en un volcán colapsado',
        distancia: 7500,
        costeDesbloqueo: 2,
        icono: '🌋',
        recompensas: { energia: 30, plumas: 2, descubrimientos: ['crater-ngorongoro'], apariencia: 'melena-leon' },
        retosTags: ['geologia-caldera', 'densidad-fauna', 'conservacion'],
        eventosEspeciales: ['rinoceronte-negro', 'flamencos-lago', 'manada-leonas'],
        desbloqueado: false
      },
      {
        id: 'okavango',
        nombre: 'Delta del Okavango',
        descripcion: 'Río que muere en el desierto creando vida',
        distancia: 10000,
        costeDesbloqueo: 4,
        icono: '🌊',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['delta-okavango'], apariencia: 'lirio-agua' },
        retosTags: ['hidrologia-unica', 'fauna-acuatica', ' mokoro-navegacion'],
        eventosEspeciales: ['elefantes-nadando', 'hipopotamos-territorio', 'mokoro-silencio'],
        desbloqueado: false
      },
      {
        id: 'namib',
        nombre: 'Desierto de Namib - Dunas Rojas',
        descripcion: 'El desierto más antiguo, dunas que encuentran el mar',
        distancia: 13000,
        costeDesbloqueo: 6,
        icono: '🏜️',
        recompensas: { energia: 40, plumas: 3, descubrimientos: ['deadvlei-arboles'], apariencia: 'arena-estelar' },
        retosTags: ['geologia-dunas', 'adaptacion-extrema', 'costa-esqueletos'],
        eventosEspeciales: ['duna-45-amanecer', 'oryx-gemsbok', 'niebla-costa', 'barcos-fantasma'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['atardecer-sabana', 'rugido-leon', 'elefantes-polvo', 'acacias-silueta', 'lluvia-estacional'],
    retosBase: ['fauna-africana', 'ecologia-sabana', 'conservacion', 'culturas-maasai', 'geologia-rift']
  },

  {
    id: 'antartida',
    nombre: 'Antártida - Continente Blanco',
    descripcion: 'El desierto más frío, pingüinos emperadores y ciencia en el límite',
    color: '#ffffff',
    colorOscuro: '#cce6ff',
    icono: '🐧',
    fondoClase: 'fondo-antartida',
    orden: 7,
    desbloqueada: false,
    costeDesbloqueoRegion: 10,
    destinos: [
      {
        id: 'peninsula-antartica',
        nombre: 'Península Antártica',
        descripcion: 'La parte más accesible, pingüinos papúa y ballenas',
        distancia: 6000,
        costeDesbloqueo: 0,
        icono: '🐧',
        recompensas: { energia: 25, plumas: 2, descubrimientos: ['pingüinos-papua'] },
        retosTags: ['pingüinos', 'ballenas-australes', 'bases-cientificas'],
        eventosEspeciales: ['colonia-papua', 'ballena-jorobada', 'iceberg-esculpido'],
        desbloqueado: false
      },
      {
        id: 'mar-weddell',
        nombre: 'Mar de Weddell',
        descripcion: 'Hielo marino denso, pingüinos emperador y el Endurance',
        distancia: 9000,
        costeDesbloqueo: 3,
        icono: '❄️',
        recompensas: { energia: 35, plumas: 3, descubrimientos: ['emperadores-hielo'], apariencia: 'penacho-emperador' },
        retosTags: ['pingüinos-emperador', 'historia-shackleton', 'hielo-marino'],
        eventosEspeciales: ['crianza-emperador', 'aurora-austral', 'foca-leopardo'],
        desbloqueado: false
      },
      {
        id: 'polo-sur',
        nombre: 'Polo Sur Geográfico',
        descripcion: 'El eje del mundo, estación Amundsen-Scott',
        distancia: 12000,
        costeDesbloqueo: 5,
        icono: '🌐',
        recompensas: { energia: 40, plumas: 3, descubrimientos: ['polo-sur'], apariencia: 'bandera-polo' },
        retosTags: ['exploracion-polar', 'ciencia-antartida', 'clima-extremo'],
        eventosEspeciales: ['ceremonia-polo', 'neutrinos-icecube', 'seis-meses-noche'],
        desbloqueado: false
      },
      {
        id: 'montañas-ellsworth',
        nombre: 'Montañas Ellsworth - Vinson Massif',
        descripcion: 'La cima más alta del continente helado',
        distancia: 15000,
        costeDesbloqueo: 8,
        icono: '🏔️',
        recompensas: { energia: 50, plumas: 4, descubrimientos: ['vinson-massif'], apariencia: 'hielo-eterno' },
        retosTags: ['montanismo-antartico', 'geologia-gondwana', 'meteoritos'],
        eventosEspeciales: ['meteorito-marte', 'fossil-glossopteris', 'viento-katabatico'],
        desbloqueado: false
      }
    ],
    eventosComunes: ['ventisca', 'halo-solar', 'petrel-antartico', 'foca-weddell', 'iceberg-volcado'],
    retosBase: ['pingüinos', 'exploracion-polar', 'ciencia-clima', 'geologia-hielo', 'tratado-antartico']
  }
];

// Utilidades de acceso
function obtenerRegion(id) {
  return REGIONES.find(r => r.id === id);
}

function obtenerDestino(regionId, destinoId) {
  const region = obtenerRegion(regionId);
  return region?.destinos.find(d => d.id === destinoId);
}

function obtenerRegionesDesbloqueadas() {
  return REGIONES.filter(r => r.desbloqueada);
}

function obtenerProximaRegion(regionActual) {
  const idx = REGIONES.findIndex(r => r.id === regionActual);
  if (idx >= 0 && idx < REGIONES.length - 1) {
    return REGIONES[idx + 1];
  }
  return null;
}

function calcularProgresoRegion(regionId) {
  const region = obtenerRegion(regionId);
  if (!region) return { completados: 0, total: 0, porcentaje: 0 };
  const desbloqueados = region.destinos.filter(d => d.desbloqueado).length;
  const total = region.destinos.length;
  return { completados: desbloqueados, total, porcentaje: Math.round((desbloqueados / total) * 100) };
}

function calcularProgresoGlobal() {
  let totalDestinos = 0;
  let destinosDesbloqueados = 0;
  REGIONES.forEach(r => {
    totalDestinos += r.destinos.length;
    destinosDesbloqueados += r.destinos.filter(d => d.desbloqueado).length;
  });
  return {
    regionesDesbloqueadas: REGIONES.filter(r => r.desbloqueada).length,
    totalRegiones: REGIONES.length,
    destinosDesbloqueados,
    totalDestinos,
    porcentajeGlobal: Math.round((destinosDesbloqueados / totalDestinos) * 100)
  };
}

// Exportar para uso global
window.REGIONES = REGIONES;
window.obtenerRegion = obtenerRegion;
window.obtenerDestino = obtenerDestino;
window.obtenerRegionesDesbloqueadas = obtenerRegionesDesbloqueadas;
window.obtenerProximaRegion = obtenerProximaRegion;
window.calcularProgresoRegion = calcularProgresoRegion;
window.calcularProgresoGlobal = calcularProgresoGlobal;