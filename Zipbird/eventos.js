/* ==========================================================
   ZIPBIRD - SISTEMA DE EVENTOS DE EXPEDICIÓN
   Eventos aleatorios, hitos scriptados y decisiones con consecuencias
   ========================================================== */

const EVENTOS = {
  // ==========================================================
  // EVENTOS ALEATORIOS COMUNES (aparecen en cualquier región)
  // ==========================================================
  'corriente-ascendente': {
    id: 'corriente-ascendente',
    tipo: 'aleatorio',
    rareza: 'comun',
    titulo: 'Corriente Ascendente',
    descripcion: 'Una térmica poderosa te eleva sin esfuerzo. El aire cálido te empuja hacia las nubes.',
    icono: '💨',
    zonas: ['montaña', 'costa', 'llanura', 'tundra'],
    probabilidadBase: 0.15,
    opciones: [
      {
        id: 'aprovechar',
        texto: 'Aprovechar la corriente',
        descripcion: 'Te dejas llevar ganando altura y distancia',
        costeEnergia: 0,
        efectos: { distancia: 400, energia: 10, moral: 5 },
        resultadoTexto: 'La térmica te impulsa suavemente. Ganas altura sin esfuerzo.'
      },
      {
        id: 'controlar',
        texto: 'Controlar el ascenso',
        descripcion: 'Mantienes rumbo fijo gastando algo de energía',
        costeEnergia: 5,
        efectos: { distancia: 300, energia: -5, precision: 10 },
        resultadoTexto: 'Mantienes tu ruta con precisión, aunque el ascenso es más lento.'
      }
    ],
    condicionesEspeciales: (estado) => estado.energia < 30 ? { modificar: { 'aprovechar': { probabilidad: 1.5 } } } : null
  },

  'viento-favorable': {
    id: 'viento-favorable',
    tipo: 'aleatorio',
    rareza: 'comun',
    titulo: 'Viento a Favor',
    descripcion: 'Una brisa constante te empuja en la dirección correcta.',
    icono: '🌬️',
    zonas: ['costa', 'llanura', 'mar'],
    probabilidadBase: 0.12,
    opciones: [
      {
        id: 'dejarse-llevar',
        texto: 'Dejarse llevar',
        costeEnergia: 0,
        efectos: { distancia: 350, energia: 5 },
        resultadoTexto: 'El viento te empuja suavemente. Descansas mientras avanzas.'
      },
      {
        id: 'aprovechar-impulso',
        texto: 'Aprovechar el impulso',
        costeEnergia: 10,
        efectos: { distancia: 600, energia: -10 },
        resultadoTexto: 'Bates alas con el viento a favor. ¡Gran avance!'
      }
    ]
  },

  'nube-misteriosa': {
    id: 'nube-misteriosa',
    tipo: 'aleatorio',
    rareza: 'poco_comun',
    titulo: 'Nube Extraña',
    descripcion: 'Una nube con formas inusuales se interpone en tu ruta. Parece... observarte.',
    icono: '☁️',
    zonas: ['montaña', 'selva', 'tundra'],
    probabilidadBase: 0.08,
    opciones: [
      {
        id: 'atravesar',
        texto: 'Atravesarla directamente',
        costeEnergia: 15,
        efectos: { distancia: 200, energia: -15, misterio: true },
        resultadoTexto: 'Al cruzarla, sientes una energía extraña. Algo ha cambiado en ti.',
        especial: 'revelar-secreto'
      },
      {
        id: 'rodear',
        texto: 'Rodearla con precaución',
        costeEnergia: 5,
        efectos: { distancia: 100, energia: -5, seguro: true },
        resultadoTexto: 'Prefieres no arriesgarte. La nube se disipa tras ti.'
      },
      {
        id: 'observar',
        texto: 'Observar desde lejos',
        costeEnergia: 0,
        efectos: { distancia: 0, energia: 5, conocimiento: 1 },
        resultadoTexto: 'Estudias la nube. Aprendes algo sobre los vientos de esta región.'
      }
    ]
  },

  'encuentro-pajaro': {
    id: 'encuentro-pajaro',
    tipo: 'aleatorio',
    rareza: 'poco_comun',
    titulo: 'Encuentro Alado',
    descripcion: 'Otro pájaro vuela a tu lado. Su canto parece un saludo... o un desafío.',
    icono: '🐦',
    zonas: ['todas'],
    probabilidadBase: 0.10,
    opciones: [
      {
        id: 'volar-juntos',
        texto: 'Volar en formación',
        costeEnergia: -10, // gana energía
        efectos: { distancia: 300, energia: 10, companero: true },
        resultadoTexto: 'Voláis juntos. La formación en V reduce el esfuerzo de ambos.'
      },
      {
        id: 'competir',
        texto: 'Competir en velocidad',
        costeEnergia: 20,
        efectos: { distancia: 500, energia: -20, rivalidad: true },
        resultadoTexto: 'Una carrera épica. Llegas exhausto pero más lejos.'
      },
      {
        id: 'intercambiar',
        texto: 'Intercambiar cantos',
        costeEnergia: 0,
        efectos: { distancia: 100, energia: 5, descubrimiento: 'canto-regional' },
        resultadoTexto: 'Aprendes una nueva melodía. El otro pájaro continúa su camino.'
      }
    ]
  },

  'tormenta-repentina': {
    id: 'tormenta-repentina',
    tipo: 'aleatorio',
    rareza: 'raro',
    titulo: 'Tormenta Repentina',
    descripcion: 'El cielo se oscurece en segundos. Relámpagos iluminan nubes negras. La lluvia golpea tus plumas.',
    icono: '⛈️',
    zonas: ['todas'],
    probabilidadBase: 0.05,
    peligroso: true,
    opciones: [
      {
        id: 'cruzar',
        texto: 'Cruzar la tormenta',
        descripcion: 'Rápido pero peligroso. Gasta mucha energía.',
        costeEnergia: 30,
        efectos: { distancia: 400, energia: -30, riesgo: 'herida', valentia: 10 },
        resultadoTexto: 'Los relámpagos te ciegan momentáneamente. Sales malherido pero al otro lado.',
        requerimiento: { energiaMin: 35 }
      },
      {
        id: 'refugio',
        texto: 'Buscar refugio',
        descripcion: 'Seguro pero pierdes tiempo y distancia.',
        costeEnergia: 5,
        efectos: { distancia: 0, energia: 15, tiempo: 300, seguro: true },
        resultadoTexto: 'Te refugias bajo una roca. La tormenta pasa. Descansas y recuperas fuerzas.'
      },
      {
        id: 'rodear-tormenta',
        texto: 'Volando alrededor',
        descripcion: 'Más largo pero evitas lo peor.',
        costeEnergia: 20,
        efectos: { distancia: 200, energia: -20, seguro: true },
        resultadoTexto: 'El rodeo consume energía pero te mantienes a salvo.'
      }
    ]
  },

  'zona-desconocida': {
    id: 'zona-desconocida',
    tipo: 'aleatorio',
    rareza: 'raro',
    titulo: 'Terra Incógnita',
    descripcion: 'Entras en una zona que no aparece en ningún mapa. La brújula gira sin rumbo.',
    icono: '🗺️',
    zonas: ['selva', 'montaña', 'hielo'],
    probabilidadBase: 0.04,
    opciones: [
      {
        id: 'explorar',
        texto: 'Explorar a fondo',
        costeEnergia: 25,
        efectos: { distancia: 100, energia: -25, descubrimiento: 'zona-secreta', mapa: 1 },
        resultadoTexto: 'Descubres un lugar maravilloso que nadie ha cartografiado.',
        especial: 'descubrimiento-unico'
      },
      {
        id: 'marcar-ruta',
        texto: 'Marcar y continuar',
        costeEnergia: 10,
        efectos: { distancia: 200, energia: -10, mapa: 1 },
        resultadoTexto: 'Dejas una marca para futuros viajeros y sigues tu camino.'
      },
      {
        id: 'retirada',
        texto: 'Retroceder a zona conocida',
        costeEnergia: 5,
        efectos: { distancia: -100, energia: 5, seguro: true },
        resultadoTexto: 'La prudencia vale más que la curiosidad. Vuelves a terreno seguro.'
      }
    ]
  },

  'objeto-brillante': {
    id: 'objeto-brillante',
    tipo: 'aleatorio',
    rareza: 'poco_comun',
    titulo: 'Destello en el Suelo',
    descripcion: 'Algo brilla entre la vegetación/rocas/hielo. Un objeto perdido... o un regalo.',
    icono: '✨',
    zonas: ['todas'],
    probabilidadBase: 0.07,
    opciones: [
      {
        id: 'recoger',
        texto: 'Descender a recogerlo',
        costeEnergia: 10,
        efectos: { distancia: 50, energia: -10, objeto: 'aleatorio' },
        resultadoTexto: 'Es una pluma extraña / piedra pulida / fragmento antiguo. Lo guardas.'
      },
      {
        id: 'ignorar',
        texto: 'Ignorar y seguir',
        costeEnergia: 0,
        efectos: { distancia: 200, curiosidad: -1 },
        resultadoTexto: 'No te distraes. Tu destino te espera.'
      },
      {
        id: 'investigar',
        texto: 'Investigar desde el aire',
        costeEnergia: 5,
        efectos: { distancia: 100, energia: -5, conocimiento: 1 },
        resultadoTexto: 'Desde arriba ves que hay más objetos. Un nido de coleccionista.'
      }
    ]
  },

  // ==========================================================
  // EVENTOS ESPECÍFICOS POR REGIÓN (más inmersivos)
  // ==========================================================

  // CORDILLERA ANDINA
  'avistamiento-condor': {
    id: 'avistamiento-condor',
    tipo: 'regional',
    region: 'cordillera-andina',
    rareza: 'poco_comun',
    titulo: 'El Rey de los Andes',
    descripcion: 'Un cóndor andino planea majestuoso a tu altura. Sus alas de tres metros te sombrean.',
    icono: '🦅',
    probabilidadBase: 0.12,
    opciones: [
      {
        id: 'honrar',
        texto: 'Inclinar la cabeza en respeto',
        costeEnergia: 0,
        efectos: { distancia: 200, energia: 15, bendicion: 'condor', descubrimiento: 'espiritu-andino' },
        resultadoTexto: 'El cóndor grazna y una corriente cálida te eleva. Los apaches te bendicen.'
      },
      {
        id: 'seguir',
        texto: 'Seguir su estela',
        costeEnergia: 10,
        efectos: { distancia: 500, energia: -10, guia: 'condor' },
        resultadoTexto: 'El cóndor conoce las mejores corrientes. Le sigues y avanzas rápido.'
      }
    ]
  },

  'ruinas-incas': {
    id: 'ruinas-incas',
    tipo: 'regional',
    region: 'cordillera-andina',
    rareza: 'raro',
    titulo: 'Piedras que Hablan',
    descripcion: 'Muros perfectos entre la maleza. Pisas suelo que no siente pie humano en siglos.',
    icono: '🏛️',
    probabilidadBase: 0.06,
    reto: { tipo: 'conocimiento', tag: 'historia-inca', recompensa: { energia: 20, descubrimiento: 'arquitectura-inca' } },
    opciones: [
      {
        id: 'estudiar',
        texto: 'Estudiar las ruinas (reto de conocimiento)',
        costeEnergia: 15,
        efectos: { distancia: 100, energia: -15, reto: true },
        resultadoTexto: 'Descifras los quipus. La sabiduría inca fluye en ti.'
      },
      {
        id: 'rezar',
        texto: 'Ofrecer hoja de coca',
        costeEnergia: 5,
        efectos: { distancia: 150, energia: 10, respeto: 5 },
        resultadoTexto: 'El viento susurra entre las piedras. Los antiguos aprueban.'
      }
    ]
  },

  'amanecer-puerta-sol': {
    id: 'amanecer-puerta-sol',
    tipo: 'hito',
    region: 'cordillera-andina',
    destino: 'machu-picchu',
    titulo: 'Inti Raymi - Amanecer en la Puerta del Sol',
    descripcion: 'Los primeros rayos iluminan Machu Picchu. La ciudad despierta en oro y sombra.',
    icono: '🌅',
    obligatorio: true,
    reto: { tipo: 'observacion', prompt: 'Cuenta los rayos de sol que tocan la piedra sagrada', recompensa: { apariencia: 'penacho-inca', energia: 30, plumas: 3 } },
    resultadoExito: 'El sol te bendice. Llevas la luz de los incas en tus alas.',
    resultadoFallo: 'Las nubes ocultan el espectáculo. Pero Machu Picchu sigue allí, esperándote.'
  },

  // AMAZONIA
  'delfines-rosados': {
    id: 'delfines-rosados',
    tipo: 'regional',
    region: 'amazonia',
    rareza: 'poco_comun',
    titulo: 'Bufeos del Amazonas',
    descripcion: 'Delfines rosados saltan junto a ti en el río. Sus ojos inteligentes te observan.',
    icono: '🐬',
    probabilidadBase: 0.10,
    opciones: [
      {
        id: 'jugar',
        texto: 'Jugar con ellos',
        costeEnergia: -5,
        efectos: { distancia: 200, energia: 15, alegria: 10, descubrimiento: 'bufeos' },
        resultadoTexto: 'Te empujan suavemente con el hocico. La alegría pura te recarga.'
      },
      {
        id: 'preguntar',
        texto: 'Pedirles guía (reto creatividad)',
        costeEnergia: 10,
        reto: { tipo: 'creatividad', prompt: 'Inventa una leyenda sobre el origen del delfín rosa', recompensa: { energia: 20, descubrimiento: 'leyenda-bufeo' } },
        resultadoExito: 'Los delfines aplauden con la cola. Te muestran el canal más profundo.'
      }
    ]
  },

  'canto-uakari': {
    id: 'canto-uakari',
    tipo: 'regional',
    region: 'amazonia',
    destino: 'reserva-mamiraua',
    rareza: 'raro',
    titulo: 'El Mono de Cara Roja',
    descripcion: 'Un uakari te observa desde un árbol inundado. Su cara roja brilla en la penumbra.',
    icono: '🐒',
    reto: { tipo: 'adivinanza', pregunta: 'Tengo cara roja y vivo en el agua, no soy pez ni soy rana, ¿qué soy?', respuesta: 'uakari', recompensa: { apariencia: 'cola-uakari', energia: 25 } },
    resultadoExito: 'El uakari sonríe (muestra los dientes) y te lanza un fruto del árbol.'
  },

  // PATAGONIA
  'viento-patagonico': {
    id: 'viento-patagonico',
    tipo: 'regional',
    region: 'patagonia',
    rareza: 'comun',
    titulo: 'El Viento que Todo lo Mueve',
    descripcion: 'Una ráfaga de 100 km/h te golpea de lado. Las rocas silban. Es el espíritu de la Patagonia.',
    icono: '💨',
    probabilidadBase: 0.20,
    opciones: [
      {
        id: 'enfrentar',
        texto: 'Enfrentarlo de frente',
        costeEnergia: 25,
        efectos: { distancia: 300, energia: -25, fuerza: 10 },
        requerimiento: { energiaMin: 30 },
        resultadoTexto: 'Tus alas tiemblan pero aguantas. El viento respeta tu terquedad.'
      },
      {
        id: 'usar-viento',
        texto: 'Usar el viento a favor',
        costeEnergia: 5,
        efectos: { distancia: 600, energia: -5, habilidad: 'vuelo-viento' },
        resultadoTexto: 'Giras y dejas que te lleve. Vuelas más rápido que nunca.'
      },
      {
        id: 'esconderse',
        texto: 'Refugiarse entre rocas',
        costeEnergia: 0,
        efectos: { distancia: 0, energia: 10, tiempo: 180 },
        resultadoTexto: 'El viento ruge sobre ti. Descansas. Mañana será otro día.'
      }
    ]
  },

  'estruendo-hielo': {
    id: 'estruendo-hielo',
    tipo: 'hito',
    region: 'patagonia',
    destino: 'glaciar-perito-moreno',
    titulo: 'El Grito del Glaciar',
    descripcion: 'Un bloque de hielo del tamaño de un edificio se desprende. El estruendo retumba en el lago.',
    icono: '🧊',
    obligatorio: true,
    reto: { tipo: 'asociacion', palabras: ['hielo', 'azul', 'eterno', 'frío', 'antiguo'], minimo: 3, recompensa: { apariencia: 'plumas-hielo', energia: 30, plumas: 2 } },
    resultadoExito: 'El glaciar te regala un fragmento milenario. Nunca se derrite en tu garra.',
    resultadoFallo: 'El hielo cae en silencio para ti. Pero su memoria queda grabada.'
  },

  // ALASKA
  'pesca-osos': {
    id: 'pesca-osos',
    tipo: 'regional',
    region: 'alaska',
    destino: 'katmai',
    rareza: 'poco_comun',
    titulo: 'Maestros del Salmón',
    descripcion: 'Osos pardos esperan en la cascada. Con precisión quirúrgica atrapan salmones al vuelo.',
    icono: '🐻',
    reto: { tipo: 'observacion', prompt: 'Cuenta cuántos salmones atrapa el oso en 30 segundos', recompensa: { apariencia: 'garra-oso', energia: 25, descubrimiento: 'tecnica-oso' } },
    opciones: [
      {
        id: 'observar',
        texto: 'Observar y aprender (reto observación)',
        costeEnergia: 10,
        reto: true,
        resultadoExito: 'Aprendes su técnica. Tu próxima pesca será perfecta.'
      },
      {
        id: 'competir',
        texto: 'Competir por un salmón',
        costeEnergia: 20,
        efectos: { distancia: 100, energia: -20, valentia: 15, objeto: 'salmon' },
        resultadoTexto: 'El oso te mira, impresionado. Te deja el salmón y aúlla respetuoso.'
      }
    ]
  },

  'aurora-boreal-alaska': {
    id: 'aurora-boreal-alaska',
    tipo: 'hito',
    region: 'alaska',
    destino: 'nome-aurora',
    titulo: 'Danza de los Espíritus',
    descripcion: 'El cielo nocturno explota en verde, púrpura y rojo. Los ancestros bailan sobre ti.',
    icono: '🌌',
    obligatorio: true,
    reto: { tipo: 'creatividad', prompt: 'Describe lo que sientes bajo la aurora sin usar la palabra "hermoso"', recompensa: { apariencia: 'estela-aurora', energia: 40, plumas: 3 } },
    resultadoExito: 'La aurora pinta tus plumas. Ahora brillas en la oscuridad.',
    resultadoFallo: 'Las luces danzan indiferentes. Pero tú las has visto. Eso basta.'
  },

  // HIMALAYA
  'bandera-oracion': {
    id: 'bandera-oracion',
    tipo: 'regional',
    region: 'himalaya',
    rareza: 'comun',
    titulo: 'Viento que Reza',
    descripcion: 'Miles de banderas tibetanas ondean. Cada aleteo es una oración al viento.',
    icono: '🏳️',
    probabilidadBase: 0.15,
    opciones: [
      {
        id: 'añadir',
        texto: 'Añadir tu propia bandera',
        costeEnergia: 5,
        efectos: { distancia: 200, energia: 10, karma: 5, descubrimiento: 'mantra-viento' },
        resultadoTexto: 'Tu oración se une a miles. El viento la lleva a todos los rincones.'
      },
      {
        id: 'leer',
        texto: 'Leer los mantras (reto conocimiento)',
        costeEnergia: 10,
        reto: { tipo: 'conocimiento', tag: 'budismo-tibetano', recompensa: { energia: 20, sabiduria: 1 } },
        resultadoExito: 'Comprendes el significado profundo. La compasión crece en ti.'
      }
    ]
  },

  'yak-carguero': {
    id: 'yak-carguero',
    tipo: 'regional',
    region: 'himalaya',
    destino: 'everest-base',
    rareza: 'poco_comun',
    titulo: 'El Barco de la Montaña',
    descripcion: 'Una caravana de yaks sube lento pero seguro. Llevan suministros al campo base.',
    icono: '🐂',
    opciones: [
      {
        id: 'ayudar',
        texto: 'Ayudar a guiar la caravana',
        costeEnergia: 15,
        efectos: { distancia: 150, energia: -15, gratitud: 'sherpas', descubrimiento: 'vida-sherpa' },
        resultadoTexto: 'Los sherpas te invitan a té de mantequilla. Compartes calor y historias.'
      },
      {
        id: 'adelantar',
        texto: 'Voler adelante como explorador',
        costeEnergia: 10,
        efectos: { distancia: 400, energia: -10, explorador: true },
        resultadoTexto: 'Desde arriba ves grietas ocultas. Los yaks pasan a salvo gracias a ti.'
      }
    ]
  },

  // ISLANDIA
  'erupcion-strokkur': {
    id: 'erupcion-strokkur',
    tipo: 'regional',
    region: 'islandia',
    destino: 'golden-circle',
    rareza: 'comun',
    titulo: 'La Tierra Respira',
    descripcion: 'Strokkur erupciona cada 10 minutos. Agua hirviendo dispara 30 metros al cielo.',
    icono: '💧',
    probabilidadBase: 0.18,
    opciones: [
      {
        id: 'volar-vapor',
        texto: 'Volar a través del vapor',
        costeEnergia: 10,
        efectos: { distancia: 200, energia: -10, calor: 20, descubrimiento: 'geotermia' },
        resultadoTexto: 'El vapor te envuelve. Tibio. Mineral. Vivo. Te cura las alas cansadas.'
      },
      {
        id: 'esperar',
        texto: 'Esperar la próxima erupción',
        costeEnergia: 0,
        efectos: { distancia: 0, energia: 15, tiempo: 120, paciencia: 5 },
        resultadoTexto: 'La tierra ruge de nuevo. El ritmo del planeta te hipnotiza.'
      }
    ]
  },

  'frailecillos-latrabjarg': {
    id: 'frailecillos-latrabjarg',
    tipo: 'hito',
    region: 'islandia',
    destino: 'westfjords',
    titulo: 'Parlamento de Frailecillos',
    descripcion: 'Millones de frailecillos anidan en los acantilados. Sus picos de colores pintan la roca.',
    icono: '🐧',
    obligatorio: true,
    reto: { tipo: 'asociacion', palabras: ['pico', 'colorido', 'pescado', 'acantilado', 'colonia', 'verano'], minimo: 4, recompensa: { apariencia: 'pico-frailecillo', energia: 35, plumas: 3 } },
    resultadoExito: 'Un frailecillo te regala una pluma de su pico. Brilla con todos los colores del arcoíris.',
    resultadoFallo: 'Te observan con ojos cómicos. Te vas sonriendo.'
  },

  // SABANA AFRICANA
  'cruce-mara': {
    id: 'cruce-mara',
    tipo: 'hito',
    region: 'sabana-africana',
    destino: 'serengeti',
    titulo: 'El Río de la Vida y la Muerte',
    descripcion: 'Miles de ñus cruzan el Mara. Cocodrilos esperan. La manada no duda. El instinto manda.',
    icono: '🦓',
    obligatorio: true,
    reto: { tipo: 'conocimiento', tag: 'migracion', recompensa: { energia: 30, descubrimiento: 'ciclo-vida', plumas: 2 } },
    opciones: [
      {
        id: 'sobrevolar',
        texto: 'Sobrevolar el cruce',
        costeEnergia: 10,
        efectos: { distancia: 300, energia: -10, testigo: 'migracion' },
        resultadoTexto: 'Desde el aire ves el patrón: un río vivo fluyendo a través de la sabana.'
      },
      {
        id: 'cantar',
        texto: 'Cantar el canto del viaje',
        costeEnergia: 5,
        efectos: { distancia: 200, energia: 5, conexion: 'manada' },
        resultadoTexto: 'Tu canto se une a los cascos. Por un momento, eres parte de la manada.'
      }
    ]
  },

  'elefantes-nadando': {
    id: 'elefantes-nadando',
    tipo: 'regional',
    region: 'sabana-africana',
    destino: 'okavango',
    rareza: 'raro',
    titulo: 'Gigantes en el Agua',
    descripcion: 'Una manada de elefantes cruza nadando. Usan la trompa como snorkel. Juguetones, inmensos.',
    icono: '🐘',
    opciones: [
      {
        id: 'acompanar',
        texto: 'Acompañarles nadando (bajo)',
        costeEnergia: 20,
        efectos: { distancia: 200, energia: -20, descubrimiento: 'memoria-elefante', objeto: 'marfil-caido' },
        resultadoTexto: 'La matriarca te toca suavemente con la trompa. Sientes su sabiduría ancestral.'
      },
      {
        id: 'observar-arriba',
        texto: 'Observar desde arriba',
        costeEnergia: 5,
        efectos: { distancia: 300, energia: -5, perspectiva: 'delta' },
        resultadoTexto: 'Desde el cielo ves el delta como nunca: un árbol de vida en el desierto.'
      }
    ]
  },

  // ANTÁRTIDA
  'crianza-emperador': {
    id: 'crianza-emperador',
    tipo: 'hito',
    region: 'antartida',
    destino: 'mar-weddell',
    titulo: 'El Invierno Más Cruel',
    descripcion: 'Machos emperadores incuban huevos sobre los pies a -60°C. Meses sin comer. Amor puro.',
    icono: '🐧',
    obligatorio: true,
    reto: { tipo: 'creatividad', prompt: 'Escribe una promesa que cumplirías aunque cueste la vida', recompensa: { apariencia: 'penacho-emperador', energia: 40, plumas: 3, descubrimiento: 'sacrificio-padre' } },
    resultadoExito: 'Los pingüinos te aceptan. Una pluma dorada aparece en tu pecho. Calor eterno.',
    resultadoFallo: 'El frío te quita las palabras. Pero tu silencio también es promesa.'
  },

  'meteorito-marte': {
    id: 'meteorito-marte',
    tipo: 'regional',
    region: 'antartida',
    destino: 'montañas-ellsworth',
    rareza: 'legendario',
    titulo: 'Regalo de Otro Mundo',
    descripcion: 'Sobre el hielo azul, una roca negra. No es de aquí. Viajó millones de años desde Marte.',
    icono: '☄️',
    reto: { tipo: 'conocimiento', tag: 'geologia-gondwana', recompensa: { apariencia: 'hielo-eterno', energia: 50, plumas: 4, descubrimiento: 'meteorito-marciano' } },
    opciones: [
      {
        id: 'tocar',
        texto: 'Tocarla con la punta del ala',
        costeEnergia: 0,
        reto: true,
        resultadoExito: 'El frío marciano quema tu pluma. Ahora tienes polvo de Marte en las alas.'
      }
    ]
  },

  // EVENTOS UNIVERSALES ESPECIALES
  'estrellas-guia': {
    id: 'estrellas-guia',
    tipo: 'universal',
    rareza: 'raro',
    titulo: 'Navegación Estelar',
    descripcion: 'La noche clara revela el cielo completo. Las estrellas forman mapas antiguos.',
    icono: '⭐',
    zonas: ['todas'],
    probabilidadBase: 0.05,
    soloNoche: true,
    reto: { tipo: 'observacion', prompt: 'Identifica 3 constelaciones visibles', recompensa: { energia: 20, habilidad: 'navegacion-estrellas', descubrimiento: 'mapa-celeste' } }
  },

  'sueno-vuelo': {
    id: 'sueno-vuelo',
    tipo: 'universal',
    rareza: 'poco_comun',
    titulo: 'Sueño Despierto',
    descripcion: 'Vuelas tanto que entras en microsueños. Ves lugares que no has visitado... aún.',
    icono: '💭',
    zonas: ['todas'],
    probabilidadBase: 0.06,
    opciones: [
      {
        id: 'seguir-sueño',
        texto: 'Seguir la visión',
        costeEnergia: 10,
        efectos: { distancia: 300, energia: -10, vision: true, pista: 'region-futura' },
        resultadoTexto: 'La visión te muestra un lugar lejano. Ahora sabes que existe.'
      },
      {
        id: 'despertar',
        texto: 'Sacudir la cabeza y despertar',
        costeEnergia: 0,
        efectos: { distancia: 100, energia: 10, claridad: true },
        resultadoTexto: 'El sueño se rompe. Pero una pluma brilla en tu ala: era real.'
      }
    ]
  }
};

// Utilidades
function obtenerEventosPorRegion(regionId) {
  return Object.values(EVENTOS).filter(e => e.region === regionId || e.zonas?.includes('todas') || e.tipo === 'universal');
}

function obtenerEventosAleatorios(regionId, zonaActual, horaDia) {
  const eventos = obtenerEventosPorRegion(regionId);
  return eventos.filter(e => {
    if (e.soloNoche && horaDia !== 'noche') return false;
    if (e.zonas && !e.zonas.includes(zonaActual) && !e.zonas.includes('todas')) return false;
    return e.tipo === 'aleatorio' || e.tipo === 'universal';
  });
}

function obtenerEventosHito(regionId, destinoId) {
  return Object.values(EVENTOS).filter(e => e.tipo === 'hito' && e.region === regionId && e.destino === destinoId);
}

function obtenerEventosRegionales(regionId) {
  return Object.values(EVENTOS).filter(e => e.tipo === 'regional' && e.region === regionId);
}

function calcularProbabilidadEvento(evento, estadoExpedicion) {
  let prob = evento.probabilidadBase || 0.05;

  // Modificadores por estado
  if (estadoExpedicion.energia < 20) prob *= 0.5; // Menos eventos si poca energía
  if (estadoExpedicion.energia > 80) prob *= 1.2; // Más eventos si mucha energía

  // Modificadores por rareza
  const rarezaMult = { comun: 1.0, poco_comun: 0.6, raro: 0.3, legendario: 0.1 };
  prob *= rarezaMult[evento.rareza] || 1.0;

  // Condiciones especiales
  if (evento.condicionesEspeciales) {
    const mods = evento.condicionesEspeciales(estadoExpedicion);
    if (mods) {
      // Aplicar modificaciones a opciones específicas
    }
  }

  return Math.min(prob, 0.5); // Cap al 50%
}

// Exportar
window.EVENTOS = EVENTOS;
window.obtenerEventosPorRegion = obtenerEventosPorRegion;
window.obtenerEventosAleatorios = obtenerEventosAleatorios;
window.obtenerEventosHito = obtenerEventosHito;
window.obtenerEventosRegionales = obtenerEventosRegionales;
window.calcularProbabilidadEvento = calcularProbabilidadEvento;