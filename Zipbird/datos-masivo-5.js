/* ==========================================================
   BANCO MASIVO · DEPORTES, COMIDA Y VIDA COTIDIANA
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- FUTBOLISTAS ---------------- */
  ['jugadores-futbol', 'un futbolista famoso',
    'messi,cristiano ronaldo,maradona,pelé,di stéfano|cruyff,beckenbauer,zidane,ronaldinho,ronaldo nazário|romário,baggio,maldini,buffon,casillas|xavi,iniesta,puyol,raúl,torres|david villa,mbappé,neymar,haaland,lewandowski|modric,de bruyne,salah,benzema,suárez'],

  /* ---------------- BALONCESTISTAS ---------------- */
  ['jugadores-baloncesto', 'un jugador de baloncesto famoso',
    'michael jordan,lebron james,kobe bryant,shaquille o neal,tim duncan|kareem abdul-jabbar,magic johnson,larry bird,wilt chamberlain,bill russell|stephen curry,kevin durant,giannis antetokounmpo,nikola jokic,luka doncic|joel embiid,james harden,westbrook,chris paul,allen iverson'],

  /* ---------------- CAMPEONES DE FÓRMULA 1 ---------------- */
  ['campeones-f1', 'un campeón del mundo de Fórmula 1',
    'fangio,senna,prost,schumacher,hamilton|verstappen,lauda,piquet,mansell,hill|clark,stewart,fittipaldi,andretti,hunt|rosberg,vettel,alonso,häkkinen,button'],

  /* ---------------- MOTOCICLISMO ---------------- */
  ['motociclismo', 'un piloto de motociclismo famoso',
    'rossi,márquez,lorenzo,pedrosa,doohan|agostini,hailwood,stoner,nieto,crivillé|bagnaia,quartararo,mir,zarco,acosta'],

  /* ---------------- CICLISTAS ---------------- */
  ['ciclistas', 'un ciclista famoso',
    'eddy merckx,bernard hinault,jacques anquetil,miguel indurain,alberto contador|chris froome,tadej pogačar,jonas vingegaard,fausto coppi,gino bartali|marco pantani,alejandro valverde,joaquim rodríguez,carlos sastre,óscar pereiro'],

  /* ---------------- ATLETAS ---------------- */
  ['atletas', 'un atleta famoso',
    'usain bolt,carl lewis,jesse owens,michael johnson,haile gebrselassie|kenenisa bekele,eliud kipchoge,mo farah,paavo nurmi,emil zátopek|javier sotomayor,sergey bubka,ashton eaton,wayde van niekerk,shelly-ann fraser'],

  /* ---------------- NADADORES ---------------- */
  ['nadadores', 'un nadador famoso',
    'michael phelps,mark spitz,ian thorpe,katie ledecky,ryan lochte|alexander popov,grant hackett,sun yang,caeleb dressel,adam peaty|federica pellegrini,mireia belmonte,david meca,martín lópez-zubero,kirsty coventry'],

  /* ---------------- BOXEADORES ---------------- */
  ['boxeadores', 'un boxeador famoso',
    'muhammad ali,mike tyson,joe frazier,george foreman,rocky marciano|sugar ray leonard,manny pacquiao,floyd mayweather,oscar de la hoya,julio césar chávez|lennox lewis,evander holyfield,tyson fury,anthony joshua,canelo álvarez'],

  /* ---------------- CIUDADES OLÍMPICAS ---------------- */
  ['jjoo-sedes', 'una ciudad olímpica',
    'atenas,parís,londres,roma,tokio|berlín,moscú,los ángeles,atlanta,sídney|pekín,río de janeiro,seúl,barcelona,ciudad de méxico|montreal,múnich,ámsterdam,estocolmo,helsinki|melbourne,amberes,san luis,cortina d ampezzo,sapporo'],

  /* ---------------- MUNDIALES DE FÚTBOL ---------------- */
  ['mundiales-futbol', 'un país que ha organizado un Mundial de fútbol',
    'uruguay,italia,francia,brasil,suiza|suecia,chile,inglaterra,méxico,alemania|argentina,españa,estados unidos,sudáfrica,rusia|catar,corea del sur,japón'],

  /* ---------------- ESTADIOS ---------------- */
  ['estadios', 'un estadio famoso',
    'camp nou,santiago bernabéu,wembley,maracaná,san siro|allianz arena,old trafford,anfield,signal iduna park,estadio azteca|la bombonera,monumental,arena corinthians,metlife,sofi|emirates,parc des princes,mestalla,benito villamarín,ramón sánchez-pizjuán'],

  /* ---------------- POSICIONES DE FÚTBOL ---------------- */
  ['posiciones-futbol', 'una posición de fútbol',
    'portero,defensa central,lateral derecho,lateral izquierdo,mediocentro|centrocampista,interior,extremo,delantero centro,segundo delantero|enganche'],

  /* ---------------- EQUIPOS DE LA LIGA ESPAÑOLA ---------------- */
  ['equipos-laliga', 'un equipo de la Liga española',
    'real madrid,barcelona,atlético de madrid,sevilla,valencia|villarreal,betis,athletic bilbao,real sociedad,espanyol|celta,osasuna,getafe,rayo vallecano,mallorca|girona,alavés,las palmas,cádiz,granada'],

  /* ---------------- EQUIPOS DE LA PREMIER LEAGUE ---------------- */
  ['equipos-premier', 'un equipo de la Premier League',
    'manchester united,manchester city,liverpool,arsenal,chelsea|tottenham,newcastle,aston villa,everton,west ham|brighton,crystal palace,fulham,brentford,wolves|nottingham forest,leicester,leeds,southampton,sheffield united'],

  /* ---------------- EQUIPOS DE LA SERIE A ---------------- */
  ['equipos-seriea', 'un equipo de la Serie A italiana',
    'juventus,milan,inter,roma,lazio|napoli,fiorentina,atalanta,torino,bologna|genoa,sampdoria,udinese,parma,cagliari|palermo,verona,sassuolo,empoli,lecce'],

  /* ---------------- EQUIPOS DE LA BUNDESLIGA ---------------- */
  ['equipos-bundesliga', 'un equipo de la Bundesliga alemana',
    'bayern múnich,borussia dortmund,rb leipzig,bayer leverkusen,eintracht fráncfort|borussia mönchengladbach,stuttgart,wolfsburgo,hoffenheim,friburgo|werder bremen,mainz 05,augsburgo,unión berlín,hertha berlín|hamburgo,schalke 04,colonia'],

  /* ---------------- EQUIPOS DE LA LIGUE 1 ---------------- */
  ['equipos-ligue1', 'un equipo de la Ligue 1 francesa',
    'paris saint-germain,marsella,lyon,mónaco,lille|niza,rennes,lens,nantes,saint-étienne|burdeos,estrasburgo,montpellier,toulouse,reims|auxerre,lorient,brest'],

  /* ---------------- COMIDAS DEL MUNDO ---------------- */
  ['comidas-mundo', 'una comida del mundo',
    'paella,pizza,hamburguesa,sushi,tacos|pasta,lasaña,curry,ramen,couscous|falafel,hummus,kebab,ceviche,arepas|empanadas,asado,feijoada,goulash,schnitzel|croissant,baguette,fish and chips,pad thai,pho|dim sum,biryani,moussaka,gazpacho,tortilla de patatas'],

  /* ---------------- CÓCTELES ---------------- */
  ['cocteles', 'un cóctel',
    'mojito,margarita,daiquiri,piña colada,cosmopolitan|martini,manhattan,negroni,old fashioned,bloody mary|gin tonic,cuba libre,caipirinha,mai tai,tequila sunrise|pisco sour,aperol spritz,moscow mule,paloma,sangría'],

  /* ---------------- VINOS ---------------- */
  ['vinos', 'un tipo de vino',
    'rioja,ribera del duero,burdeos,borgoña,champaña|oporto,jerez,chianti,barolo,pinot noir|cabernet sauvignon,merlot,tempranillo,albariño,verdejo'],

  /* ---------------- CERVEZAS ---------------- */
  ['cervezas', 'un tipo de cerveza',
    'lager,ale,stout,porter,pilsner|ipa,trigo,sour,lambic,bock'],

  /* ---------------- CAFÉS ---------------- */
  ['cafes', 'un tipo de café',
    'espresso,capuchino,latte,americano,cortado|macchiato,moka,flat white,ristretto,descafeinado'],

  /* ---------------- INFUSIONES ---------------- */
  ['infusiones', 'una infusión',
    'té,té verde,té negro,manzanilla,menta|poleo,tila,rooibos,mate,rosa mosqueta'],

  /* ---------------- CARNES ---------------- */
  ['carnes', 'un tipo de carne',
    'pollo,vacuno,cerdo,cordero,ternera|pavo,pato,conejo,jabalí,ciervo|cabra,buey,cochinillo,lechón,foie gras'],

  /* ---------------- SALSAS ---------------- */
  ['salsas', 'una salsa',
    'mayonesa,ketchup,mostaza,alioli,barbacoa|pesto,boloñesa,carbonara,bechamel,velouté|española,holandesa,tabasco,sriracha,soja'],

  /* ---------------- CONDIMENTOS ---------------- */
  ['condimentos', 'un condimento',
    'sal,pimienta,pimentón,comino,orégano|laurel,tomillo,romero,canela,nuez moscada'],

  /* ---------------- SOPAS ---------------- */
  ['sopas', 'una sopa',
    'gazpacho,salmorejo,sopa de cebolla,sopa de ajo,caldo gallego|cocido,fabada,lentejas,garbanzos,minestrone|ramen,pho,borscht,chowder,sopa de tomate'],

  /* ---------------- ARROCES ---------------- */
  ['arroces', 'un plato de arroz',
    'paella,risotto,arroz negro,arroz a banda,arroz con pollo|arroz frito,sushi,paella valenciana,arroz caldoso,arroz tres delicias'],

  /* ---------------- PASTAS ---------------- */
  ['pastas', 'un tipo de pasta',
    'espagueti,macarrones,penne,fusilli,lasaña|ravioli,tortellini,tagliatelle,fettuccine,canelones'],

  /* ---------------- PIZZAS ---------------- */
  ['pizzas', 'un tipo de pizza',
    'margarita,napolitana,cuatro quesos,pepperoni,carbonara|barbacoa,hawaiana,vegetal,diavola,prosciutto'],

  /* ---------------- VEHÍCULOS ---------------- */
  ['vehiculos', 'un vehículo',
    'coche,moto,bicicleta,autobús,tren|tranvía,metro,avión,helicóptero,barco|velero,lancha,camión,furgoneta,taxi|patinete,monopatín,quad,tractor,caravana'],

  /* ---------------- PARTES DEL COCHE ---------------- */
  ['partes-coche', 'una parte de un coche',
    'motor,rueda,volante,freno,embrague|acelerador,cambio de marchas,batería,radiador,amortiguador|faro,parachoques,parabrisas,escape,maletero'],

  /* ---------------- PARTES DE LA CASA ---------------- */
  ['partes-casa', 'una parte de una casa',
    'salón,cocina,baño,dormitorio,pasillo|recibidor,garaje,jardín,terraza,balcón|azotea,sótano,despensa,lavadero,trastero'],

  /* ---------------- HABITACIONES ---------------- */
  ['habitaciones', 'una habitación de una casa',
    'salón,cocina,baño,dormitorio,despacho|comedor,recibidor,lavadero,trastero,garaje'],

  /* ---------------- OBJETOS DE BAÑO ---------------- */
  ['objetos-bano', 'un objeto de baño',
    'cepillo de dientes,pasta de dientes,jabón,champú,toalla|esponja,peine,secador,afeitadora,papel higiénico'],

  /* ---------------- OBJETOS DE OFICINA ---------------- */
  ['objetos-oficina', 'un objeto de oficina',
    'bolígrafo,lápiz,goma,regla,tijeras|grapadora,calculadora,ordenador,impresora,archivador'],

  /* ---------------- ACCESORIOS ---------------- */
  ['accesorios', 'un accesorio de ropa',
    'reloj,pulsera,collar,anillo,pendientes|gafas,sombrero,bufanda,guantes,cinturón'],

  /* ---------------- SÍMBOLOS MATEMÁTICOS ---------------- */
  ['simbolos-matematicos', 'un símbolo matemático',
    'más,menos,multiplicación,división,igual|menor que,mayor que,raíz cuadrada,porcentaje,infinito'],

  /* ---------------- FIGURAS LITERARIAS ---------------- */
  ['figuras-literarias', 'una figura literaria',
    'metáfora,símil,personificación,hipérbole,ironía|anáfora,aliteración,oxímoron,antítesis,metonimia|sinécdoque,perífrasis'],

  /* ---------------- TIPOS DE TEXTO ---------------- */
  ['tipos-texto', 'un tipo de texto',
    'narrativo,descriptivo,expositivo,argumentativo,instructivo|dialogado,poético,periodístico,publicitario,científico'],

  /* ---------------- EMPRESAS ---------------- */
  ['empresas', 'una empresa famosa',
    'apple,microsoft,google,amazon,meta|tesla,samsung,toyota,volkswagen,coca-cola|nike,adidas,mcdonalds,netflix,disney|ibm,intel,nvidia,sony,huawei'],

  /* ---------------- OFICIOS ---------------- */
  ['oficios', 'un oficio',
    'fontanero,electricista,carpintero,albañil,pintor|mecánico,cocinero,camarero,panadero,carnicero|peluquero,jardinero,agricultor,ganadero,pescador|minero,sastre,zapatero,joyero,cerrajero']

);
