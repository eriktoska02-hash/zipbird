/* ==========================================================
   BANCO MASIVO · AMPLIACIÓN IV
   Ciencia, cultura, deporte, comida y vida cotidiana.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- ESTRELLAS (20) ---------------- */
  ['estrellas', 'una estrella famosa',
    'sirio,canopus,arturo,vega,capella|rigel,procyon,betelgeuse,achernar,altair|aldebarán,antares,espiga,polaris,deneb|régulo,castor,pólux,fomalhaut,alfa centauri'],

  /* ---------------- COMETAS (8) ---------------- */
  ['cometas', 'un cometa famoso',
    'halley,hale-bopp,encke,hyakutake|mcnaught,tempel-tuttle,churyumov-gerasimenko,neowise'],

  /* ---------------- ASTEROIDES (10) ---------------- */
  ['asteroides', 'un asteroide famoso',
    'ceres,vesta,palas,juno,eros|ida,gaspra,mathilde,hygiea,psyche'],

  /* ---------------- CAPAS DE LA TIERRA (5) ---------------- */
  ['capas-tierra', 'una capa de la Tierra',
    'corteza,manto,núcleo externo,núcleo interno,litosfera'],

  /* ---------------- CAPAS DE LA ATMÓSFERA (5) ---------------- */
  ['capas-atmosfera', 'una capa de la atmósfera',
    'troposfera,estratosfera,mesosfera,termosfera,exosfera'],

  /* ---------------- ERAS GEOLÓGICAS (6) ---------------- */
  ['eras-geologicas', 'una era geológica',
    'arcaico,proterozoico,paleozoico,mesozoico,cenozoico,precámbrico'],

  /* ---------------- PERÍODOS GEOLÓGICOS (10) ---------------- */
  ['periodos-geologicos', 'un período geológico',
    'cámbrico,ordovícico,silúrico,devónico,carbonífero|pérmico,triásico,jurásico,cretácico,paleógeno'],

  /* ---------------- ARTICULACIONES (10) ---------------- */
  ['articulaciones', 'una articulación del cuerpo humano',
    'rodilla,cadera,hombro,codo,tobillo|muñeca,cuello,columna,mandíbula,dedos'],

  /* ---------------- TIPOS DE CÉLULA (8) ---------------- */
  ['tipos-celula', 'un tipo de célula',
    'eucariota,procariota,animal,vegetal|bacteriana,sanguínea,nerviosa,muscular'],

  /* ---------------- ANTIBIÓTICOS (10) ---------------- */
  ['antibioticos', 'un antibiótico',
    'penicilina,amoxicilina,azitromicina,ciprofloxacino,tetraciclina|eritromicina,clindamicina,metronidazol,vancomicina,gentamicina'],

  /* ---------------- FRUTAS TROPICALES (12) ---------------- */
  ['frutas-tropicales', 'una fruta tropical',
    'mango,papaya,piña,plátano,coco|aguacate,maracuyá,guayaba,lichi,pitahaya|durián,rambután'],

  /* ---------------- HIERBAS AROMÁTICAS (12) ---------------- */
  ['hierbas-aromaticas', 'una hierba aromática',
    'albahaca,perejil,cilantro,romero,tomillo|orégano,salvia,menta,eneldo,hinojo|laurel,estragón'],

  /* ---------------- BEBIDAS ALCOHÓLICAS (15) ---------------- */
  ['bebidas-alcoholicas', 'una bebida alcohólica',
    'cerveza,vino,whisky,vodka,ron|ginebra,tequila,mezcal,brandy,coñac|sidra,sake,soju,absenta,vermut'],

  /* ---------------- REFRESCOS (10) ---------------- */
  ['refrescos', 'un refresco',
    'coca-cola,pepsi,fanta,sprite,seven up|mirinda,schweppes,kas,aquarius,powerade'],

  /* ---------------- HELADOS (10) ---------------- */
  ['helados', 'un sabor de helado',
    'vainilla,chocolate,fresa,limón,nata|turrón,pistacho,mango,coco,stracciatella'],

  /* ---------------- COMIDA RÁPIDA (12) ---------------- */
  ['comida-rapida', 'una comida rápida',
    'hamburguesa,pizza,perrito caliente,patatas fritas,kebab|tacos,sándwich,pollo frito,nachos,burrito|wrap,aros de cebolla'],

  /* ---------------- PREMIOS NOBEL DE LITERATURA (20) ---------------- */
  ['nobel-literatura', 'un premio nobel de literatura',
    'kipling,tagore,shaw,mann,yeats|pirandello,faulkner,hemingway,camus,beckett|neruda,solzhenitsyn,bellow,garcía márquez,golding|cela,paz,morrison,saramago,vargas llosa'],

  /* ---------------- PREMIOS NOBEL DE LA PAZ (15) ---------------- */
  ['nobel-paz', 'un premio nobel de la paz',
    'dunant,mandela,luther king,teresa de calcuta,kissinger|arafat,obama,malala,tutu,walesa|sajarov,roosevelt,wilson,brandt,begin'],

  /* ---------------- BALÓN DE ORO (22) ---------------- */
  ['balon-oro', 'un ganador del Balón de Oro',
    'di stéfano,cruyff,beckenbauer,keegan,rummenigge|platini,gullit,van basten,baggio,weah|ronaldo,zidane,figo,nedvěd,ronaldinho|cannavaro,kaká,cristiano ronaldo,messi,modrić|benzema,rodri'],

  /* ---------------- PELÍCULAS DE SUPERHÉROES (15) ---------------- */
  ['peliculas-superheroes', 'una película de superhéroes',
    'superman,batman,spider-man,iron man,capitán américa|thor,hulk,wonder woman,aquaman,deadpool|lobezno,black panther,doctor strange,ant-man,guardianes de la galaxia'],

  /* ---------------- SERIES DE ANIMACIÓN (15) ---------------- */
  ['series-animacion', 'una serie de animación',
    'los simpson,padre de familia,south park,bob esponja,dragon ball|pokémon,naruto,one piece,rick y morty,futurama|los picapiedra,scooby-doo,tom y jerry,avatar,hora de aventuras'],

  /* ---------------- CANTANTES LATINOS (20) ---------------- */
  ['cantantes-latinos', 'un cantante latino',
    'julio iglesias,enrique iglesias,luis miguel,juan gabriel,josé josé|alejandro sanz,shakira,ricky martin,marc anthony,jennifer lópez|thalía,paulina rubio,juanes,carlos vives,bad bunny|karol g,maluma,j balvin,rosalía,daddy yankee'],

  /* ---------------- BAILES LATINOS (10) ---------------- */
  ['bailes-latinos', 'un baile latino',
    'salsa,bachata,merengue,cumbia,tango|mambo,cha-cha-chá,rumba,samba,reggaetón'],

  /* ---------------- OBRAS DE SHAKESPEARE (20) ---------------- */
  ['obras-shakespeare', 'una obra de Shakespeare',
    'hamlet,macbeth,otelo,rey lear,romeo y julieta|el sueño de una noche de verano,julio césar,antonio y cleopatra,la tempestad,mucho ruido y pocas nueces|noche de reyes,como gustéis,el mercader de venecia,ricardo iii,enrique v|timón de atenas,medida por medida,coriolano,tito andrónico,las alegres comadres de windsor'],

  /* ---------------- PINTORES (25) ---------------- */
  ['pintores', 'un pintor universal',
    'leonardo,miguel ángel,rafael,botticelli,tiziano|velázquez,goya,el greco,murillo,rubens|rembrandt,vermeer,van gogh,monet,renoir|degas,cézanne,gauguin,picasso,dalí|miró,kandinsky,klimt,munch,warhol'],

  /* ---------------- RASCACIELOS (10) ---------------- */
  ['rascacielos', 'un rascacielos famoso',
    'burj khalifa,shanghai tower,taipei 101,empire state,chrysler|one world trade center,petronas,willis tower,kingdom centre,lotte world tower'],

  /* ---------------- PUENTES (10) ---------------- */
  ['puentes', 'un puente famoso',
    'golden gate,brooklyn,tower bridge,millennium bridge,rialto|charles bridge,akashi kaikyo,millau,vasco da gama,bósforo'],

  /* ---------------- CATEDRALES (12) ---------------- */
  ['catedrales', 'una catedral famosa',
    'notre dame,sagrada familia,san pedro,duomo de milán,colonia|chartres,reims,santiago de compostela,burgos,toledo|sevilla,canterbury'],

  /* ---------------- CASTILLOS DE ESPAÑA (12) ---------------- */
  ['castillos-espana', 'un castillo de España',
    'alhambra,alcázar de segovia,castillo de loarre,castillo de peñafiel,castillo de coca|castillo de cardona,castillo de bellver,castillo de olite,castillo de javier,castillo de sigüenza|castillo de gormaz,castillo de monzón'],

  /* ---------------- GANADORES DE ROLAND GARROS (15) ---------------- */
  ['roland-garros', 'un ganador de Roland Garros',
    'nadal,borg,federer,djokovic,wilander|lendl,kuerten,courier,agassi,muster|bruguera,ferrero,costa,alcaraz,swiatek'],

  /* ---------------- GANADORES DE WIMBLEDON (15) ---------------- */
  ['wimbledon', 'un ganador de Wimbledon',
    'federer,djokovic,sampras,borg,nadal|mcenroe,becker,connors,agassi,murray|alcaraz,laver,edberg,hewitt,serena williams'],

  /* ---------------- GANADORES DEL TOUR DE FRANCIA (15) ---------------- */
  ['tour-francia', 'un ganador del Tour de Francia',
    'merckx,hinault,anquetil,indurain,froome|armstrong,contador,pogacar,vingegaard,coppi|bartali,bobet,thévenet,fignon,lemond'],

  /* ---------------- JUGADORES DE GOLF (10) ---------------- */
  ['jugadores-golf', 'un golfista famoso',
    'tiger woods,jack nicklaus,arnold palmer,gary player,ben hogan|sam snead,rory mcilroy,phil mickelson,seve ballesteros,jon rahm'],

  /* ---------------- EQUIPOS DE LA EUROLIGA (15) ---------------- */
  ['equipos-euroliga', 'un equipo de la Euroliga de baloncesto',
    'real madrid,barcelona,panathinaikos,olympiacos,fenerbahçe|anadolu efes,cska moscú,maccabi tel aviv,baskonia,valencia basket|unicaja,joventut,armani milán,žalgiris,partizan'],

  /* ---------------- MATERIALES DE CONSTRUCCIÓN (12) ---------------- */
  ['materiales-construccion', 'un material de construcción',
    'cemento,hormigón,ladrillo,acero,madera|vidrio,yeso,piedra,aluminio,mármol|pizarra,adobe'],

  /* ---------------- TIPOS DE VIVIENDA (10) ---------------- */
  ['tipos-vivienda', 'un tipo de vivienda',
    'piso,casa,chalet,adosado,dúplex|ático,estudio,loft,cabaña,palacete']

);
