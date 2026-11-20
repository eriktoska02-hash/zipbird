/* ==========================================================
   ZIPBIRD - SISTEMA DE RETOS Y CONOCIMIENTO
   6 tipos de retos: conocimiento, creatividad, adivinanza, asociación, observación, destino
   Evaluación flexible con validación fuzzy
   ========================================================== */

// ==========================================================
// BASE DE DATOS DE RETOS POR TIPO Y TEMA
// ==========================================================

const RETOS_CONOCIMIENTO = {
  'cultura-andina': [
    { pregunta: '¿Cómo se llamaba el imperio que construyó Machu Picchu?', respuestas: ['inca', 'imperio inca', 'tahuantinsuyo', 'tahuantinsuyu'], nivel: 'poco-comun' },
    { pregunta: '¿Qué sistema de registro usaban los incas sin escritura?', respuestas: ['quipu', 'quipus', 'nudos'], nivel: 'raro' },
    { pregunta: '¿Cuál era la capital del Imperio Inca?', respuestas: ['cusco', 'qosqo', 'cozco'], nivel: 'muy-comun' },
    { pregunta: '¿Qué animal sagrado representaba el mundo de arriba (Hanan Pacha)?', respuestas: ['condor', 'cóndor', 'condor andino'], nivel: 'poco-comun' },
    { pregunta: '¿Cómo se llama la técnica de agricultura en terrazas de los incas?', respuestas: ['andenes', 'terraza', 'terrazas andinas'], nivel: 'raro' },
    { pregunta: '¿Qué bebida sagrada fermentada de maíz tomaban los incas?', respuestas: ['chicha', 'chicha de jora', 'aqha'], nivel: 'poco-comun' },
    { pregunta: '¿Cuál es el idioma que hablaban los incas y que aún se habla hoy?', respuestas: ['quechua', 'runa simi'], nivel: 'muy-comun' },
    { pregunta: '¿Qué ceremonia inca celebraba el solsticio de invierno?', respuestas: ['inti raymi', 'inti raymi', 'fiesta del sol'], nivel: 'raro' }
  ],
  'geografia-montana': [
    { pregunta: '¿Cómo se llama la montaña más alta de los Andes?', respuestas: ['aconcagua'], nivel: 'muy-comun' },
    { pregunta: '¿Qué fenómeno meteorológico crea las corrientes térmicas en montañas?', respuestas: ['termica', 'corriente termica', 'ascendencia termica'], nivel: 'raro' },
    { pregunta: '¿Cómo se llama la hierba alta y dura típica de los Andes?', respuestas: ['ichu', 'paja brava', 'stipa ichu'], nivel: 'poco-comun' },
    { pregunta: '¿A qué altitud aproximada empieza la "zona de la muerte" en montañismo?', respuestas: ['8000', '8000 metros', '8000m', 'ochomiles'], nivel: 'raro' }
  ],
  'historia-inca': [
    { pregunta: '¿Quién fue el último emperador inca antes de la conquista española?', respuestas: ['atualpa', 'atawallpa', 'atahuallpa'], nivel: 'poco-comun' },
    { pregunta: '¿Qué explorador "redescubrió" Machu Picchu en 1911?', respuestas: ['hiram bingham', 'bingham'], nivel: 'muy-comun' },
    { pregunta: '¿Cómo se llamaban los mensajeros corredores del imperio inca?', respuestas: ['chasqui', 'chasquis', 'chaski'], nivel: 'raro' }
  ],
  'fauna-andina': [
    { pregunta: '¿Qué camelido sudamericano es el ancestro de la alpaca?', respuestas: ['vicuna', 'vicuña'], nivel: 'raro' },
    { pregunta: '¿Cómo se llama el oso de anteojos, único oso nativo de Sudamérica?', respuestas: ['oso de anteojos', 'oso andino', 'tremarctos ornatus'], nivel: 'poco-comun' },
    { pregunta: '¿Qué roedor gigante vive en los Andes y es pariente del conejillo de indias?', respuestas: ['vizcacha', 'viscacha'], nivel: 'raro' }
  ],
  'flora-alpina': [
    { pregunta: '¿Qué planta emblemática de los Andes florece una sola vez tras décadas?', respuestas: ['puya raimondii', 'puya', 'reina de los andes'], nivel: 'legendario' },
    { pregunta: '¿Qué árbol polylepis forma bosques en la mayor altitud del mundo?', respuestas: ['queñua', 'quenua', 'polylepis', 'árbol de papel'], nivel: 'raro' }
  ],
  'biodiversidad-amazonica': [
    { pregunta: '¿Qué mamífero es el más grande de la Amazonía?', respuestas: ['tapir', 'tapir amazonico', 'danta'], nivel: 'poco-comun' },
    { pregunta: '¿Qué serpiente es la más pesada del mundo y vive en la Amazonía?', respuestas: ['anaconda', 'anaconda verde', 'eunectes murinus'], nivel: 'muy-comun' },
    { pregunta: '¿Qué primate de cara roja vive en bosques inundados amazónicos?', respuestas: ['uakari', 'uakari calvo', 'cacajao calvus'], nivel: 'raro' }
  ],
  'geografia-selva': [
    { pregunta: '¿Cómo se llama el fenómeno donde el río Negro y el Solimões corren juntos sin mezclarse?', respuestas: ['encuentro de las aguas', 'encuentro das aguas', 'confluencia'], nivel: 'poco-comun' },
    { pregunta: '¿Qué tipo de bosque se inunda estacionalmente en la Amazonía?', respuestas: ['varzea', 'várzea', 'igapo', 'igapó'], nivel: 'raro' }
  ],
  'culturas-indigenas': [
    { pregunta: '¿Qué pueblo indígena vive en la frontera Brasil-Venezuela y practica el chamanismo con yopo?', respuestas: ['yanomami', 'yanomamï', 'yanomam'], nivel: 'raro' },
    { pregunta: '¿Cómo se llama la casa comunal grande de los pueblos amazónicos?', respuestas: ['maloca', 'maloka'], nivel: 'poco-comun' }
  ],
  'geologia-patagonica': [
    { pregunta: '¿Cómo se llaman las formaciones graníticas características de Torres del Paine?', respuestas: ['cuernos', 'cuernos del paine', 'horns'], nivel: 'poco-comun' },
    { pregunta: '¿Qué viento constante sopla en la Patagonia desde el oeste?', respuestas: ['viento patagonico', 'vientos del oeste', 'roaring forties'], nivel: 'muy-comun' }
  ],
  'fauna-austral': [
    { pregunta: '¿Qué camelido salvaje de la Patagonia es ancestro de la llama?', respuestas: ['guanaco'], nivel: 'poco-comun' },
    { pregunta: '¿Qué pájaro carroñero gigante vuela en la Patagonia?', respuestas: ['condor andino', 'cóndor', 'vultur gryphus'], nivel: 'muy-comun' },
    { pregunta: '¿Qué felino patagónico es el más austral del mundo?', respuestas: ['puma', 'puma concolor', 'león americano'], nivel: 'muy-comun' }
  ],
  'glaciologia': [
    { pregunta: '¿Cómo se llama el proceso de desprendimiento de icebergs de un glaciar?', respuestas: ['calving', 'desprendimiento', 'rotura glacial'], nivel: 'raro' },
    { pregunta: '¿Qué glaciar patagónico es famoso por su ruptura cíclica?', respuestas: ['perito moreno', 'glaciar perito moreno'], nivel: 'muy-comun' }
  ],
  'fauna-alaska': [
    { pregunta: '¿Qué ave rapaz es símbolo de EE. UU. y abunda en Alaska?', respuestas: ['aguila calva', 'águila calva', 'haliaeetus leucocephalus'], nivel: 'muy-comun' },
    { pregunta: '¿Qué salmón del Pacífico muere tras desovar una sola vez?', respuestas: ['salmon del pacifico', 'salmon rojo', 'sockeye', 'oncorhynchus nerka'], nivel: 'poco-comun' }
  ],
  'culturas-nativas': [
    { pregunta: '¿Qué pueblo nativo de Alaska compite en la carrera Iditarod?', respuestas: ['inupiat', 'inupiaq', 'esquimal'], nivel: 'poco-comun' },
    { pregunta: '¿Cómo se llama la casa de nieve tradicional del Ártico?', respuestas: ['iglu', 'igloo', 'iglu'], nivel: 'muy-comun' }
  ],
  'budismo-tibetano': [
    { pregunta: '¿Cómo se llama el líder espiritual del budismo tibetano?', respuestas: ['dalai lama', 'dalai-lama', 'tenzin gyatso'], nivel: 'muy-comun' },
    { pregunta: '¿Qué objeto giratorio contiene mantras y genera mérito al girar?', respuestas: ['rueda de oracion', 'rueda de plegaria', 'mani khorlo'], nivel: 'poco-comun' },
    { pregunta: '¿Qué significa "Om Mani Padme Hum"?', respuestas: ['la joya en el loto', 'joya en el loto'], nivel: 'raro' }
  ],
  'cultura-sherpa': [
    { pregunta: '¿Qué significa "Sherpa" en su lengua original?', respuestas: ['gente del este', 'pueblo del este', 'shar pa'], nivel: 'raro' },
    { pregunta: '¿Quién fue el primer sherpa en subir al Everest con Hillary?', respuestas: ['tenzing norgay', 'tensing norgay'], nivel: 'muy-comun' }
  ],
  'geologia-volcanica': [
    { pregunta: '¿Cómo se llama la falla tectónica visible en Thingvellir, Islandia?', respuestas: ['falla mesoatlantica', 'dorsal mesoatlantica', 'alimak'], nivel: 'raro' },
    { pregunta: '¿Qué volcán islandés detuvo el tráfico aéreo europeo en 2010?', respuestas: ['eyjafjallajokull', 'eyjafjallajökull'], nivel: 'poco-comun' }
  ],
  'aves-marinas': [
    { pregunta: '¿Qué ave marina de pico colorido anida en acantilados islandeses?', respuestas: ['frailecillo', 'frailecillo atlantico', 'puffin'], nivel: 'muy-comun' },
    { pregunta: '¿Qué ave marina viaja del Ártico al Antártico cada año?', respuestas: ['charran artico', 'charrán ártico', 'sterna paradisaea'], nivel: 'raro' }
  ],
  'fauna-africana': [
    { pregunta: '¿Qué felino africano es el más rápido en tierra?', respuestas: ['guepardo', 'chita', 'acynonix jubatus'], nivel: 'muy-comun' },
    { pregunta: '¿Qué antílope realiza la gran migración del Serengeti?', respuestas: ['ñu', 'gnu', 'connochaetes'], nivel: 'poco-comun' }
  ],
  'ecologia-sabana': [
    { pregunta: '¿Qué árbol africano de copa plana es símbolo de la sabana?', respuestas: ['acacia', 'acacia tortilis', 'acacia paraguas'], nivel: 'muy-comun' },
    { pregunta: '¿Cómo se llama la relación mutualista entre aves y grandes mamíferos?', respuestas: ['simbiosis', 'mutualismo', 'pajaros buitres y rinocerontes'], nivel: 'raro' }
  ],
  'pingüinos': [
    { pregunta: '¿Qué pingüino es el más grande y cría en el invierno antártico?', respuestas: ['pingüino emperador', 'emperador', 'aptenodytes forsteri'], nivel: 'muy-comun' },
    { pregunta: '¿Cómo se llama el pingüino de la península antártica con pico naranja?', respuestas: ['pingüino papua', 'papua', 'gentoo'], nivel: 'poco-comun' }
  ],
  'exploracion-polar': [
    { pregunta: '¿Qué explorador llegó primero al Polo Sur en 1911?', respuestas: ['amundsen', 'roald amundsen'], nivel: 'muy-comun' },
    { pregunta: '¿Cómo se llamaba el barco de Shackleton que quedó atrapado en el hielo?', respuestas: ['endurance'], nivel: 'poco-comun' }
  ]
};

const ADIVINANZAS = [
  { pregunta: 'Vuelo sin alas, lloró sin ojos. Donde voy, la oscuridad huyo. ¿Qué soy?', respuestas: ['nube', 'las nubes'], pista: 'Está en el cielo y trae lluvia' },
  { pregunta: 'Tengo ciudades pero no casas, montañas pero no árboles, agua pero no peces. ¿Qué soy?', respuestas: ['mapa', 'un mapa'], pista: 'Te ayuda a navegar' },
  { pregunta: 'Cuanto más me quitas, más grande me hago. ¿Qué soy?', respuestas: ['agujero', 'hueco', 'un agujero'], pista: 'Se hace cavando' },
  { pregunta: 'Tengo agujas pero no coso, tengo cara pero no ojos. ¿Qué soy?', respuestas: ['reloj', 'un reloj'], pista: 'Marca el tiempo' },
  { pregunta: 'Subo y bajo pero nunca me muevo. ¿Qué soy?', respuestas: ['escalera', 'la escalera', 'escaleras'], pista: 'La usas para subir' },
  { pregunta: 'Blanco por dentro, verde por fuera. Si no lo sabes, espera. ¿Qué soy?', respuestas: ['pera', 'una pera'], pista: 'Es una fruta' },
  { pregunta: 'Oro parece, plata no es. Quien no lo adivine, tonto es. ¿Qué soy?', respuestas: ['platano', 'plátano', 'banana'], pista: 'Fruta curva y amarilla' },
  { pregunta: 'Tengo dientes pero no muerdo, tengo cabeza pero no cerebro. ¿Qué soy?', respuestas: ['peine', 'un peine'], pista: 'Para el cabello' },
  { pregunta: 'En el mar nací, en el mar me crié, y en el mar me morí. ¿Qué soy?', respuestas: ['sal', 'la sal'], pista: 'Condimento blanco' },
  { pregunta: 'Tengo alas pero no vuelo, tengo ojos pero no veo. ¿Qué soy?', respuestas: ['mariposa de papel', 'avion de papel', 'cometa'], pista: 'Juguete de viento' },
  { pregunta: 'Redondo como el mundo, plano como una hoja. Todos me pisan, nadie me moja. ¿Qué soy?', respuestas: ['moneda', 'una moneda', 'dinero'], pista: 'La usas para comprar' },
  { pregunta: 'Dos hermanas tenemos, la una nace a la otra, y la otra a la una. ¿Qué somos?', respuestas: ['dia y noche', 'día y noche', 'el dia y la noche'], pista: 'Ciclo eterno' },
  { pregunta: 'Tengo patas pero no camino, tengo respaldo pero no me siento. ¿Qué soy?', respuestas: ['mesa', 'una mesa'], pista: 'Mueble de comer' },
  { pregunta: 'Pequeño como una nuez, la casa entera ilumina. ¿Qué soy?', respuestas: ['foco', 'bombilla', 'luz', 'bombillo'], pista: 'Electricidad' },
  { pregunta: 'Subo por la chimenea, bajo por la puerta. ¿Qué soy?', respuestas: ['humo', 'el humo'], pista: 'Del fuego' }
];

const RETOS_CREATIVIDAD = [
  { prompt: 'Inventa un nombre para una constelación que solo los pájaros pueden ver', tipo: 'nombre', minPalabras: 3 },
  { prompt: 'Describe el olor de una nube de tormenta en la montaña', tipo: 'descripcion', minPalabras: 8 },
  { prompt: 'Escribe el consejo que un cóndor anciano daría a un pichón en su primer vuelo', tipo: 'consejo', minPalabras: 10 },
  { prompt: 'Inventa una leyenda de 3 frases sobre por qué los ríos cantan', tipo: 'leyenda', minPalabras: 15 },
  { prompt: 'Describe el color de un sueño que nunca has tenido', tipo: 'descripcion', minPalabras: 8 },
  { prompt: 'Escribe el último mensaje que el viento susurraría a las montañas', tipo: 'mensaje', minPalabras: 6 },
  { prompt: 'Inventa el nombre y poder de una pluma mágica de esta región', tipo: 'objeto', minPalabras: 5 },
  { prompt: 'Describe cómo suena el silencio en la nieve a 5000 metros', tipo: 'descripcion', minPalabras: 8 },
  { prompt: 'Escribe una promesa que le harías a un glaciar que se derrite', tipo: 'promesa', minPalabras: 8 },
  { prompt: 'Inventa un dicho popular de los pueblos de esta región sobre el vuelo', tipo: 'refran', minPalabras: 6 },
  { prompt: 'Describe la textura de una aurora boreal si pudieras tocarla', tipo: 'descripcion', minPalabras: 8 },
  { prompt: 'Escribe el nombre de un viento que aún no tiene nombre', tipo: 'nombre', minPalabras: 2 }
];

const RETOS_ASOCIACION = [
  { palabra: 'vuelo', minimo: 3, tema: 'aire', sugerencias: ['alas', 'cielo', 'nube', 'viento', 'pluma', 'ave', 'altura', 'planar'] },
  { palabra: 'montaña', minimo: 3, tema: 'tierra', sugerencias: ['cumbre', 'roca', 'nieve', 'valle', 'escalada', 'cima', 'pendiente', 'glaciar'] },
  { palabra: 'rio', minimo: 3, tema: 'agua', sugerencias: ['corriente', 'caudal', 'orilla', 'pez', 'navegar', 'desembocadura', 'nacimiento', 'puente'] },
  { palabra: 'selva', minimo: 3, tema: 'naturaleza', sugerencias: ['arbol', 'mono', 'verde', 'lluvia', 'biodiversidad', 'copa', 'liana', 'jaguar'] },
  { palabra: 'hielo', minimo: 3, tema: 'frio', sugerencias: ['glaciar', 'copo', 'escarcha', 'iceberg', 'polar', 'invernal', 'cristal', 'congelado'] },
  { palabra: 'desierto', minimo: 3, tema: 'arido', sugerencias: ['arena', 'duna', 'sol', 'calor', 'cactus', 'oasis', 'escarabajo', 'lagarto'] },
  { palabra: 'aurora', minimo: 3, tema: 'luz', sugerencias: ['boreal', 'color', 'cielo', 'noche', 'magnetico', 'particula', 'verde', 'danza'] },
  { palabra: 'condor', minimo: 3, tema: 'ave', sugerencias: ['andes', 'carroñero', 'alas', 'planeador', 'rey', 'sagrado', 'viento', 'termica'] },
  { palabra: 'ballena', minimo: 3, tema: 'mar', sugerencias: ['oceano', 'canto', 'migracion', 'krill', 'aleta', 'soplo', 'profundo', 'gigante'] },
  { palabra: 'volcan', minimo: 3, tema: 'fuego', sugerencias: ['lava', 'ceniza', 'erupcion', 'magma', 'crater', 'humo', 'tierra', 'creacion'] }
];

const RETOS_OBSERVACION = [
  { imagen: 'svg-condor', pregunta: '¿Qué ave rapaz gigante planea sobre los Andes?', respuestas: ['condor', 'cóndor', 'condor andino', 'vultur gryphus'], pista: 'Tiene alas de 3 metros' },
  { imagen: 'svg-pinguino-emperador', pregunta: '¿Qué pingüino cría el huevo sobre los pies en invierno?', respuestas: ['emperador', 'pingüino emperador', 'aptenodytes forsteri'], pista: 'El más grande de todos' },
  { imagen: 'svg-frailecillo', pregunta: '¿Qué ave marina tiene el pico de colores como un payaso?', respuestas: ['frailecillo', 'puffin', 'frailecillo atlantico'], pista: 'Anida en acantilados' },
  { imagen: 'svg-aurora', pregunta: '¿Qué fenómeno lumínico pinta el cielo polar de verde y púrpura?', respuestas: ['aurora boreal', 'aurora', 'luces del norte', 'aurora polar'], pista: 'Partículas solares + atmósfera' },
  { imagen: 'svg-geyser', pregunta: '¿Qué fenómeno geotérmico erupciona agua hirviendo cada pocos minutos?', respuestas: ['geyser', 'géiser', 'strokkur'], pista: 'Islandia es famosa por ellos' },
  { imagen: 'svg-glaciar', pregunta: '¿Cómo se llama el desprendimiento de hielo de un glaciar al mar?', respuestas: ['calving', 'desprendimiento', 'rotura', 'parto glacial'], pista: 'Suena como un trueno' },
  { imagen: 'svg-ballena', pregunta: '¿Qué ballena salta fuera del agua y cae de espaldas?', respuestas: ['jorobada', 'ballena jorobada', 'megaptera novaeangliae'], pista: 'Famosa por sus saltos' },
  { imagen: 'svg-arbol-acacia', pregunta: '¿Qué árbol de copa plana es símbolo de la sabana africana?', respuestas: ['acacia', 'acacia tortilis', 'acacia paraguas'], pista: 'Las jirafas comen sus hojas' },
  { imagen: 'svg-vicuna', pregunta: '¿Qué camelido fino y salvaje vive en los Andes por encima de 4000m?', respuestas: ['vicuna', 'vicuña'], pista: 'Lana más fina del mundo' },
  { imagen: 'svg-uakari', pregunta: '¿Qué mono amazónico tiene la cara roja brillante y calva?', respuestas: ['uakari', 'uakari calvo', 'cacajao calvus'], pista: 'Vive en bosques inundados' }
];

// Retos específicos por destino (conocimiento local)
const RETOS_DESTINO = {
  'valle-sagrado': [
    { pregunta: '¿Qué cultivo sagrado inca crecía en las terrazas de Moray?', respuestas: ['papa', 'patata', 'mashua', 'oca', 'quinoa'], nivel: 'raro' },
    { pregunta: '¿Cómo se llama el mercado famoso de Pisac?', respuestas: ['mercado de pisac', 'pisac'], nivel: 'poco-comun' }
  ],
  'machu-picchu': [
    { pregunta: '¿Qué estructura de Machu Picchu servía de reloj solar?', respuestas: ['intihuatana', 'intiwatana', 'reloj solar', 'piedra sagrada'], nivel: 'raro' },
    { pregunta: '¿Qué significa "Machu Picchu" en quechua?', respuestas: ['montaña vieja', 'cerro viejo', 'montaña antigua'], nivel: 'poco-comun' }
  ],
  'lago-titicaca': [
    { pregunta: '¿Qué pueblo vive en islas flotantes de totora en el Titicaca?', respuestas: ['uros', 'pueblo uro'], nivel: 'poco-comun' },
    { pregunta: '¿Qué isla del Titicaca es sagrada por ser origen del sol inca?', respuestas: ['isla del sol', 'isla del sol'], nivel: 'muy-comun' }
  ],
  'salar-uyuni': [
    { pregunta: '¿Qué mineral cubre el Salar de Uyuni creando efecto espejo?', respuestas: ['sal', 'cloruro de sodio', 'halita'], nivel: 'muy-comun' },
    { pregunta: '¿Qué flamenco anida en el Salar cuando llueve?', respuestas: ['flamenco andino', 'flamenco de james', 'phoenicoparrus jamesi'], nivel: 'raro' }
  ],
  'manaus': [
    { pregunta: '¿Qué ópera famosa hay en medio de la selva amazónica?', respuestas: ['teatro amazonas', 'opera de manaus'], nivel: 'poco-comun' },
    { pregunta: '¿Qué pez gigante de agua dulce vive en el Amazonas?', respuestas: ['pirarucu', 'arapaima', 'paiche'], nivel: 'raro' }
  ],
  'reserva-mamiraua': [
    { pregunta: '¿Qué mono de cara roja es emblema de Mamirauá?', respuestas: ['uakari', 'uakari calvo'], nivel: 'muy-comun' },
    { pregunta: '¿Qué tipo de bosque inundado protege Mamirauá?', respuestas: ['varzea', 'várzea'], nivel: 'raro' }
  ],
  'torres-paine': [
    { pregunta: '¿Qué formación geológica da nombre al parque Torres del Paine?', respuestas: ['los cuernos', 'cuernos del paine', 'torres de granito'], nivel: 'muy-comun' },
    { pregunta: '¿Qué color tienen los lagos glaciares de Torres del Paine?', respuestas: ['turquesa', 'azul lechoso', 'celeste'], nivel: 'poco-comun' }
  ],
  'glaciar-perito-moreno': [
    { pregunta: '¿Qué hace único al Perito Moreno entre los glaciares?', respuestas: ['avanza', 'no retrocede', 'en equilibrio', 'ruptura ciclica'], nivel: 'poco-comun' },
    { pregunta: '¿En qué lago se desprenden los icebergs del Perito Moreno?', respuestas: ['lago argentino', 'lago argentina'], nivel: 'muy-comun' }
  ],
  'denali': [
    { pregunta: '¿Cuál era el nombre oficial del Denali hasta 2015?', respuestas: ['mount mckinley', 'mc kinley', 'monte mckinley'], nivel: 'poco-comun' },
    { pregunta: '¿Qué significa "Denali" en lengua koyukon?', respuestas: ['la gran montaña', 'la alta', 'la gran cima'], nivel: 'raro' }
  ],
  'katmai': [
    { pregunta: '¿En qué cascada de Katmai pescan los osos los salmones?', respuestas: ['brooks falls', 'cascada brooks', 'brooks'], nivel: 'muy-comun' },
    { pregunta: '¿Qué especie de salmón sube por Brooks River?', respuestas: ['salmon rojo', 'sockeye', 'oncorhynchus nerka'], nivel: 'raro' }
  ],
  'katmandu': [
    { pregunta: '¿Qué stupa gigante domina Katmandú con ojos de Buda?', respuestas: ['boudhanath', 'bodnath', 'stupa de boudha'], nivel: 'poco-comun' },
    { pregunta: '¿Qué plaza histórica de Katmandú fue dañada en el terremoto de 2015?', respuestas: ['durbar square', 'plaza durbar'], nivel: 'poco-comun' }
  ],
  'everest-base': [
    { pregunta: '¿Cómo llaman los sherpas al Everest?', respuestas: ['chomolungma', 'qomolangma', 'madre del universo'], nivel: 'raro' },
    { pregunta: '¿Qué cascada de hielo cruzan los escaladores hacia el Campo 1?', respuestas: ['khumbhu icefall', 'cascada de khumbu', 'icefall'], nivel: 'poco-comun' }
  ],
  'reykjavik': [
    { pregunta: '¿Qué iglesia de Reikiavik parece un cohete de basalto?', respuestas: ['hallgrimskirkja', 'hallgrímskirkja'], nivel: 'poco-comun' },
    { pregunta: '¿Qué porcentaje de energía de Islandia es renovable?', respuestas: ['100', 'casi 100', '99', 'casi toda'], nivel: 'muy-comun' }
  ],
  'golden-circle': [
    { pregunta: '¿Qué géiser del Círculo Dorado erupciona cada 5-10 minutos?', respuestas: ['strokkur'], nivel: 'muy-comun' },
    { pregunta: '¿Qué cascada del Círculo Dorado significa "cascada dorada"?', respuestas: ['gullfoss'], nivel: 'poco-comun' }
  ],
  'serengeti': [
    { pregunta: '¿Qué río cruzan los ñus en la gran migración?', respuestas: ['mara', 'rio mara'], nivel: 'muy-comun' },
    { pregunta: '¿Qué depredador sigue a la migración esperando los débiles?', respuestas: ['hiena', 'hienas', 'leon', 'leones'], nivel: 'poco-comun' }
  ],
  'ngorongoro': [
    { pregunta: '¿Qué tipo de formación geológica es el Ngorongoro?', respuestas: ['caldera', 'cráter', 'volcan colapsado'], nivel: 'poco-comun' },
    { pregunta: '¿Qué animal en peligro crítico vive en el cráter?', respuestas: ['rinoceronte negro', 'rinoceronte negro'], nivel: 'raro' }
  ],
  'peninsula-antartica': [
    { pregunta: '¿Qué pingüino de la península tiene el pico naranja-rojo?', respuestas: ['papua', 'pingüino papua', 'gentoo'], nivel: 'muy-comun' },
    { pregunta: '¿Qué tratado protege la Antártida para la ciencia y paz?', respuestas: ['tratado antartico', 'tratado de la antartida'], nivel: 'poco-comun' }
  ],
  'mar-weddell': [
    { pregunta: '¿Qué barco de Shackleton quedó atrapado en el hielo del Weddell?', respuestas: ['endurance'], nivel: 'muy-comun' },
    { pregunta: '¿Qué foca antártica tiene dientes como colmillos?', respuestas: ['foca leopardo', 'leopardo', 'hydrurga leptonyx'], nivel: 'raro' }
  ]
};

// ==========================================================
// FUNCIONES DE GENERACIÓN Y EVALUACIÓN
// ==========================================================

function obtenerRetoConocimiento(tags, excluirIds = []) {
  let candidatos = [];
  tags.forEach(tag => {
    if (RETOS_CONOCIMIENTO[tag]) {
      RETOS_CONOCIMIENTO[tag].forEach((reto, idx) => {
        const id = `${tag}_${idx}`;
        if (!excluirIds.includes(id)) {
          candidatos.push({ ...reto, id, tag });
        }
      });
    }
  });
  if (candidatos.length === 0) return null;
  return candidatos[Math.floor(Math.random() * candidatos.length)];
}

function obtenerAdivinanza(excluirIds = []) {
  const disponibles = ADIVINANZAS.filter((_, i) => !excluirIds.includes(`adivinanza_${i}`));
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  const originalIdx = ADIVINANZAS.indexOf(disponibles[idx]);
  return { ...disponibles[idx], id: `adivinanza_${originalIdx}` };
}

function obtenerRetoCreatividad(excluirIds = []) {
  const disponibles = RETOS_CREATIVIDAD.filter((_, i) => !excluirIds.includes(`creatividad_${i}`));
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  const originalIdx = RETOS_CREATIVIDAD.indexOf(disponibles[idx]);
  return { ...disponibles[idx], id: `creatividad_${originalIdx}` };
}

function obtenerRetoAsociacion(excluirIds = []) {
  const disponibles = RETOS_ASOCIACION.filter((_, i) => !excluirIds.includes(`asociacion_${i}`));
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  const originalIdx = RETOS_ASOCIACION.indexOf(disponibles[idx]);
  return { ...disponibles[idx], id: `asociacion_${originalIdx}` };
}

function obtenerRetoObservacion(excluirIds = []) {
  const disponibles = RETOS_OBSERVACION.filter((_, i) => !excluirIds.includes(`observacion_${i}`));
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  const originalIdx = RETOS_OBSERVACION.indexOf(disponibles[idx]);
  return { ...disponibles[idx], id: `observacion_${originalIdx}` };
}

function obtenerRetoDestino(destinoId, excluirIds = []) {
  if (!RETOS_DESTINO[destinoId]) return null;
  const disponibles = RETOS_DESTINO[destinoId].filter((_, i) => !excluirIds.includes(`destino_${destinoId}_${i}`));
  if (disponibles.length === 0) return null;
  const idx = Math.floor(Math.random() * disponibles.length);
  const originalIdx = RETOS_DESTINO[destinoId].indexOf(disponibles[idx]);
  return { ...disponibles[idx], id: `destino_${destinoId}_${originalIdx}` };
}

// ==========================================================
// EVALUACIÓN FLEXIBLE (usa validacion-avanzada.js)
// ==========================================================

function evaluarRespuestaConocimiento(respuestaUsuario, reto) {
  if (!window.SistemaValidacion) return { valida: false, puntos: 0, mensaje: 'Sistema no disponible' };
  const validador = new window.SistemaValidacion();

  // Normalizar respuesta del usuario
  const norma = validador.normalizar(respuestaUsuario);
  if (!norma) return { valida: false, puntos: 0, mensaje: 'Respuesta vacía' };

  // Verificar contra respuestas correctas
  for (const correcta of reto.respuestas) {
    const correctaNorm = validador.normalizar(correcta);
    if (norma === correctaNorm) {
      return { valida: true, puntos: puntosPorNivel(reto.nivel), mensaje: `¡Correcto! "${correcta}"`, nivel: reto.nivel };
    }
    // Fuzzy matching
    const similitud = validador.jaroWinkler(validador.normalizarFuzzy(norma), validador.normalizarFuzzy(correctaNorm));
    const umbral = validador.umbralJaro(correctaNorm.length);
    if (similitud >= umbral) {
      return { valida: true, puntos: puntosPorNivel(reto.nivel), mensaje: `¡Correcto! Querías decir "${correcta}"`, nivel: reto.nivel, corregida: true };
    }
  }

  return { valida: false, puntos: 0, mensaje: 'No está en la lista. Intenta otra respuesta.', respuestaUsuario: norma };
}

function evaluarAdivinanza(respuestaUsuario, reto) {
  if (!window.SistemaValidacion) return { valida: false, puntos: 0 };
  const validador = new window.SistemaValidacion();
  const norma = validador.normalizar(respuestaUsuario);

  for (const correcta of reto.respuestas) {
    const correctaNorm = validador.normalizar(correcta);
    if (norma === correctaNorm) {
      return { valida: true, puntos: 50, mensaje: `¡Exacto! La respuesta era "${correcta}"`, nivel: 'raro' };
    }
    const similitud = validador.jaroWinkler(validador.normalizarFuzzy(norma), validador.normalizarFuzzy(correctaNorm));
    if (similitud >= 0.85) {
      return { valida: true, puntos: 40, mensaje: `¡Casi! Era "${correcta}"`, nivel: 'poco-comun', corregida: true };
    }
  }
  return { valida: false, puntos: 0, mensaje: `No es "${respuestaUsuario}". ${reto.pista || 'Piensa lateralmente.'}` };
}

function evaluarCreatividad(respuestaUsuario, reto) {
  const norma = respuestaUsuario.trim();
  const palabras = norma.split(/\s+/).filter(p => p.length > 0).length;

  if (palabras < (reto.minPalabras || 5)) {
    return { valida: false, puntos: 0, mensaje: `Muy corto. Escribe al menos ${reto.minPalabras} palabras.` };
  }

  // Puntuación por longitud y originalidad (heurística simple)
  let puntos = Math.min(palabras * 3, 60);
  // Bonus por palabras poco comunes (longitud > 8)
  const palabrasLargas = norma.split(/\s+/).filter(p => p.length > 8).length;
  puntos += palabrasLargas * 5;

  return {
    valida: true,
    puntos: Math.min(puntos, 80),
    mensaje: `¡Creativo! ${puntos} puntos por tu imaginación.`,
    nivel: puntos > 50 ? 'raro' : puntos > 30 ? 'poco-comun' : 'muy-comun'
  };
}

function evaluarAsociacion(respuestasUsuario, reto) {
  // respuestasUsuario es array de strings
  if (!Array.isArray(respuestasUsuario)) {
    respuestasUsuario = [respuestasUsuario];
  }

  const validas = [];
  const validador = new window.SistemaValidacion();
  const objetivoNorm = validador.normalizarFuzzy(reto.palabra);

  respuestasUsuario.forEach(r => {
    const norma = validador.normalizar(r);
    if (!norma) return;
    // Verificar que esté relacionada semánticamente (heurística: compartir raíz o ser sugerida)
    if (reto.sugerencias.some(s => validador.normalizarFuzzy(s) === validador.normalizarFuzzy(norma))) {
      validas.push(r);
    } else if (validador.jaroWinkler(validador.normalizarFuzzy(norma), objetivoNorm) > 0.6) {
      validas.push(r);
    }
  });

  const unicas = [...new Set(validas.map(v => validador.normalizar(v)))];
  const count = unicas.length;

  if (count >= reto.minimo) {
    return {
      valida: true,
      puntos: count * 15,
      mensaje: `¡${count} asociaciones válidas! ${count * 15} puntos.`,
      nivel: count >= 5 ? 'raro' : count >= 4 ? 'poco-comun' : 'muy-comun',
      asociaciones: unicas
    };
  }
  return {
    valida: false,
    puntos: count * 5,
    mensaje: `Solo ${count}/${reto.minimo} asociaciones válidas. Necesitas ${reto.minimo}.`,
    parcial: true,
    asociaciones: unicas
  };
}

function evaluarObservacion(respuestaUsuario, reto) {
  return evaluarRespuestaConocimiento(respuestaUsuario, { respuestas: reto.respuestas, nivel: 'poco-comun' });
}

function evaluarDestino(respuestaUsuario, reto) {
  return evaluarRespuestaConocimiento(respuestaUsuario, reto);
}

// ==========================================================
// UTILIDADES
// ==========================================================

function puntosPorNivel(nivel) {
  const mapa = {
    'muy-comun': 10,
    'poco-comun': 25,
    'raro': 45,
    'muy-raro': 70,
    'legendario': 100
  };
  return mapa[nivel] || 10;
}

function generarRetoAleatorio(tipo, contexto = {}) {
  const { tags = [], destinoId = null, excluirIds = [] } = contexto;

  switch (tipo) {
    case 'conocimiento':
      return obtenerRetoConocimiento(tags.length ? tags : ['general'], excluirIds);
    case 'adivinanza':
      return obtenerAdivinanza(excluirIds);
    case 'creatividad':
      return obtenerRetoCreatividad(excluirIds);
    case 'asociacion':
      return obtenerRetoAsociacion(excluirIds);
    case 'observacion':
      return obtenerRetoObservacion(excluirIds);
    case 'destino':
      return destinoId ? obtenerRetoDestino(destinoId, excluirIds) : obtenerRetoConocimiento(tags, excluirIds);
    default:
      return obtenerRetoConocimiento(tags, excluirIds);
  }
}

function evaluarReto(tipo, respuestaUsuario, reto) {
  switch (tipo) {
    case 'conocimiento':
    case 'destino':
      return evaluarRespuestaConocimiento(respuestaUsuario, reto);
    case 'adivinanza':
      return evaluarAdivinanza(respuestaUsuario, reto);
    case 'creatividad':
      return evaluarCreatividad(respuestaUsuario, reto);
    case 'asociacion':
      return evaluarAsociacion(respuestaUsuario, reto);
    case 'observacion':
      return evaluarObservacion(respuestaUsuario, reto);
    default:
      return { valida: false, puntos: 0, mensaje: 'Tipo de reto desconocido' };
  }
}

function obtenerTiposRetoDisponibles(regionId, destinoId) {
  const base = ['conocimiento', 'adivinanza', 'creatividad', 'asociacion', 'observacion'];
  if (destinoId && RETOS_DESTINO[destinoId]) {
    return [...base, 'destino'];
  }
  return base;
}

// Exportar
window.RETOS_CONOCIMIENTO = RETOS_CONOCIMIENTO;
window.ADIVINANZAS = ADIVINANZAS;
window.RETOS_CREATIVIDAD = RETOS_CREATIVIDAD;
window.RETOS_ASOCIACION = RETOS_ASOCIACION;
window.RETOS_OBSERVACION = RETOS_OBSERVACION;
window.RETOS_DESTINO = RETOS_DESTINO;
window.obtenerRetoConocimiento = obtenerRetoConocimiento;
window.obtenerAdivinanza = obtenerAdivinanza;
window.obtenerRetoCreatividad = obtenerRetoCreatividad;
window.obtenerRetoAsociacion = obtenerRetoAsociacion;
window.obtenerRetoObservacion = obtenerRetoObservacion;
window.obtenerRetoDestino = obtenerRetoDestino;
window.generarRetoAleatorio = generarRetoAleatorio;
window.evaluarReto = evaluarReto;
window.obtenerTiposRetoDisponibles = obtenerTiposRetoDisponibles;
window.puntosPorNivel = puntosPorNivel;