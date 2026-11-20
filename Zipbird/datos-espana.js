/* ==========================================================
   BANCO DE RESPUESTAS · ESPAÑA
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['provincias', 'una provincia de España',
    'madrid,barcelona,valencia,sevilla,málaga,zaragoza,alicante,murcia|asturias,cantabria,granada,toledo,salamanca,cádiz,córdoba,valladolid|palencia,león,huesca,teruel,cuenca,soria,segovia,ávila|guadalajara,álava,guipúzcoa,vizcaya,navarra,la rioja,almería,cáceres|ourense,lugo,pontevedra,badajoz,ciudad real,albacete,castellón,jaén'],

  ['comunidades', 'una comunidad autónoma',
    'andalucía,cataluña,madrid,valencia,galicia|país vasco,castilla y león,castilla-la mancha,aragón,murcia|asturias,cantabria,navarra,extremadura,baleares|canarias,la rioja|ceuta,melilla'],

  ['ciudades-espana', 'una ciudad de España',
    'madrid,barcelona,valencia,sevilla,bilbao|málaga,zaragoza,murcia,granada,valladolid|alicante,córdoba,salamanca,toledo,san sebastián|cádiz,santiago de compostela,oviedo,pamplona,santander|teruel,cuenca,soria,huesca,ávila'],

  ['rios-espana', 'un río de España',
    'ebro,duero,tajo,guadalquivir,miño|segura,júcar,genil,pisuerga,esla|tormes,sil,nalón,deva,guadiana|bidasoa,ter,llobregat,alberche,jalón|aragón,carrión,tiétar,odiel,pas'],

  ['montanas-espana', 'una montaña o sierra de España',
    'teide,mulhacén,aneto,picos de europa,montserrat|pirineos,sierra nevada,gredos,guadarrama,sierra morena|pica d estats,posets,monte perdido,naranjo de bulnes,veleta|torre cerredo,almanzor,peñalara,puig major,turbón|teleno,uruena,manzaneda,cazorla,grazalema'],

  ['monumentos-espana', 'un monumento de España',
    'alhambra,sagrada familia,plaza mayor,giralda,acueducto de segovia|mezquita de córdoba,catedral de santiago,museo del prado,alcázar de sevilla,el escorial|puerta de alcalá,catedral de burgos,valle de los caídos,ciudad de las artes,palacio real|acueducto de mérida,torre del oro,monasterio de montserrat,cueva de altamira,torre de hércules|dolmen de menga,anfiteatro de mérida,castillo de loarre,castillo de butrón,monasterio de piedra'],

  ['fiestas-espana', 'una fiesta típica de España',
    'feria de abril,fallas,san fermín,semana santa,carnaval|tomatina,san juan,san isidro,moros y cristianos,el pilar|la mercè,romería del rocío,san mateo,fiesta de la vendimia,magosto|carnaval de tenerife,san pedro,san antonio,san andrés,la candelaria|corpus christi,danza de los zancos,el colacho,fiesta de la alcachofa,la patum'],

  ['comidas-espana', 'una comida típica de España',
    'paella,tortilla de patatas,jamón,gazpacho,croquetas|pulpo a la gallega,patatas bravas,pescado frito,churros,empanada gallega|fabada,cocido madrileño,migas,ensaladilla rusa,salmorejo|callos,rabo de toro,cochinillo,arroz negro,escalivada|olla podrida,farinato,pantruque,trinxat,caldereta de langosta'],

  ['tapas', 'una tapa',
    'tortilla,patatas bravas,croquetas,jamón,aceitunas|calamares,pulpo,gambas,queso,albóndigas|pimientos del padrón,boquerones,anchoas,tortilla de camarones,gilda|oreja,caracoles,morcilla,huevos rotos,pescaíto frito|huevas,mojama,ortiguillas,papas aliñás,soldaditos de pavía'],

  ['escritores-espana', 'un escritor español',
    'cervantes,federico garcía lorca,gustavo adolfo bécquer,benito pérez galdós,miguel de unamuno|antonio machado,rafael alberti,rosalía de castro,calderón de la barca,lope de vega|francisco de quevedo,gonzalo de berceo,fernán caballero,emilia pardo bazán,carmen laforet|javier marías,almudena grandes,arturo pérez-reverte,eduardo mendoza,manuel rivas|max aub,rosa chacel,carmen martín gaite,dulce chacón,jorge semprún'],

  ['pintores-espana', 'un pintor español',
    'velázquez,picasso,dalí,goya,murillo|el greco,miró,sorolla,zurbarán,tàpies|antonio lópez,eduardo rosales,mariano fortuny,romero de torres,luis de morales|alonso cano,juan de juanes,pedro berruguete,bartolomé bermejo,ignacio zuloaga|julio romero de torres,ramón casas,isidro nonell,ángeles santos,darío de regoyos'],

  ['cantantes-espana', 'un cantante español',
    'rosalía,alejandro sanz,enrique iglesias,pablo alborán,malú|julio iglesias,camarón,lola flores,joan manuel serrat,víctor manuel|estopa,melendi,la oreja de van gogh,mecano,loquillo|nino bravo,los secretos,radio futura,alaska,kiko veneno|el canto del loco,supersubmarina,oques grasses,antílopez,vetusta morla'],

  ['actores-espana', 'un actor o actriz español',
    'penélope cruz,javier bardem,antonio banderas,paz vega,eduard fernández|luis tosar,maribel verdú,carmen maura,blanca suárez,mario casas|úrsula corberó,álvaro morte,clara lago,josé coronado,karra elejalde|maría barranco,rossy de palma,fermí reixach,loles león,toni acosta|asier etxea,luis callejo,itsaso arana,bárbara lennie,nathalie poza'],

  ['deportistas-espana', 'un deportista español',
    'rafa nadal,andrés iniesta,iker casillas,pau gasol,sergio ramos|fernando torres,xavi,carles puyol,marc márquez,álvaro morata|alejandro valverde,alberto contador,carlos saez,gemma mengual,teresa perales|mireia belmonte,carolina marín,jon rahm,saúl craviotto,joan llaneras|david cal,fermín cacho,maría vasco,abel antón,miriam casillas'],

  ['equipos-futbol', 'un equipo de fútbol español',
    'real madrid,barcelona,atlético de madrid,sevilla,valencia|athletic bilbao,real sociedad,villarreal,betis,español|zaragoza,celta,deportivo,osasuna,racing|mallorca,granada,valladolid,alavés,elche|eibar,huesca,leganés,numancia,sporting de gijón'],

  ['series-espana', 'una serie española',
    'la casa de papel,élite,cuéntame cómo pasó,los serrano,aída|aquí no hay quien viva,la que se avecina,médico de familia,el internado,física o química|vis a vis,el ministerio del tiempo,gran hotel,velvet,sin tetas no hay paraíso|los misterios de laura,hospital central,un paso adelante,policías,hispania|crematorio,la peste,30 monedas,antidisturbios,el pueblo'],

  ['programas-tv', 'un programa de televisión español',
    'gran hermano,operación triunfo,pasapalabra,el hormiguero,sálvame|la ruleta de la suerte,boom,ahora caigo,tu cara me suena,masterchef|supervivientes,pesadilla en la cocina,hermano mayor,cifras y letras,el precio justo|un dos tres,crónicas marcianas,más vale tarde,el intermedio,la bola de cristal|barrio sésamo,los payasos de la tele,la noria,casa de tu vida,miénteme'],

  ['reyes-espana', 'un rey o reina de España',
    'felipe vi,juan carlos i,isabel ii,los reyes católicos,felipe ii|carlos v,felipe iv,alfonso xiii,alfonso x,juana la loca|carlos iii,felipe v,amadeo de saboya,alfonso xii,fernando vii|enrique iv,juan ii,pedro i,carlos ii,felipe iii|recaredo,leovigildo,don pelayo,wamba,rodrigo'],

  ['lenguas-espana', 'una lengua o idioma de España',
    'castellano,catalán,gallego,euskera|valenciano,mallorquín,aranés,asturiano,aragonés|extremeño,andaluz,canario,murciano,castúo|silbo gomero,caló,fala,xalimego,erromintxela'],

  ['marcas-espana', 'una marca española',
    'zara,mercadona,el corte inglés,repsol,seat|mango,iberia,desigual,camper,freixenet|barceló,chupa chups,colacao,campofrío,don simón|nh,telepizza,rodilla,lacasa,vidal golosinas|simago,galerías preciados,phoskitos,bollycao,petazetas']

);
