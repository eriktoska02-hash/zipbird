/* ==========================================================
   BANCO MASIVO · AMPLIACIÓN II
   Geografía, historia, naturaleza, cultura, deporte y comida.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- MÁS CIUDADES DE ESPAÑA ---------------- */
  ['ciudades-espana-2', 'una ciudad de España',
    'santander,oviedo,vitoria,pamplona,logroño|badajoz,cáceres,salamanca,león,zamora|palencia,soria,segovia,ávila,cuenca|teruel,huesca,lleida,girona,tarragona|ourense,lugo,pontevedra,ferrol,cartagena'],

  /* ---------------- MÁS ISLAS DEL MUNDO ---------------- */
  ['islas-mundo-2', 'una isla del mundo',
    'madagascar,groenlandia,nueva guinea,borneo,sumatra|java,célebes,filipinas,japón,reino unido|irlanda,islandia,cuba,la española,jamaica|puerto rico,sicilia,cerdeña,córcega,creta|chipre,malta,mallorca,tenerife,hawái'],

  /* ---------------- GOLFOS ---------------- */
  ['golfos', 'un golfo',
    'golfo de méxico,golfo de bengala,golfo pérsico,golfo de adén,golfo de guinea|golfo de vizcaya,golfo de génova,golfo de venecia,golfo de botnia,golfo de finlandia|golfo de tailandia,golfo de tonkín,golfo de carpentaria,golfo de san lorenzo,golfo de california'],

  /* ---------------- CASCADAS ---------------- */
  ['cascadas', 'una cascada famosa',
    'niágara,victoria,iguazú,ángel,yosemite|gullfoss,rin,kaieteur,detian,tugela|svartifoss,skógafoss,salto del tequendama,salto grande,cascada de la cueva'],

  /* ---------------- CUEVAS ---------------- */
  ['cuevas', 'una cueva famosa',
    'altamira,lascaux,chauvet,cueva de los cristales,mammoth|sac actun,son doong,waitomo,carlsbad,postojna|nerja,tito bustillo'],

  /* ---------------- CAPITALES DE COMUNIDADES ---------------- */
  ['capitales-comunidades', 'una capital de comunidad autónoma',
    'madrid,barcelona,valencia,sevilla,zaragoza|mérida,santiago de compostela,oviedo,santander,pamplona|logroño,vitoria,murcia,toledo,valladolid|palma,santa cruz de tenerife,ceuta,melilla'],

  /* ---------------- SULTANES OTOMANOS ---------------- */
  ['sultanes-otomanos', 'un sultán otomano',
    'osman i,orhan,murad i,bayaceto i,mehmed i|murad ii,mehmed ii,selim i,suleimán i,selim ii|murad iii,mehmed iii,ahmed i,osman ii,murad iv|ibrahim,mehmed iv,mahmud ii,abdülmecid i,abdülhamid ii'],

  /* ---------------- ZARES RUSOS ---------------- */
  ['zares-rusos', 'un zar ruso',
    'iván iv,feodor i,boris godunov,miguel i,alexis|feodor iii,pedro i,catalina i,pedro ii,ana|isabel,pedro iii,catalina ii,pablo i,alejandro i|nicolás i,alejandro ii,alejandro iii,nicolás ii'],

  /* ---------------- CALIFAS ---------------- */
  ['califas', 'un califa',
    'abu bakr,umar,uthman,ali,muawiya|yazid i,abd al-malik,walid i,umar ii,hisham|harun al-rashid,al-mamun,al-mutasim,al-mutawakkil,al-muqtadir|abd al-rahman iii,al-hakam ii,hisham ii,al-mansur,al-mutamid'],

  /* ---------------- DICTADORES ---------------- */
  ['dictadores', 'un dictador famoso',
    'hitler,mussolini,franco,stalin,mao|castro,pinochet,videla,somoza,batista|trujillo,duvalier,saddam hussein,gaddafi,kim jong-il'],

  /* ---------------- PRIMEROS MINISTROS DE ESPAÑA ---------------- */
  ['primeros-ministros-espana', 'un presidente del Gobierno de España',
    'adolfo suárez,leopoldo calvo-sotelo,felipe gonzález,josé maría aznar,pedro sánchez|josé luis rodríguez zapatero,mariano rajoy,manuel azaña,antonio cánovas del castillo,práxedes mateo sagasta|francisco silvela,josé canalejas,eduardo dato,miguel primo de rivera,luis carrera blanco|carlos arias navarro,juan prim,ramón maría narváez,leopoldo o donnell,baldomero espartero'],

  /* ---------------- EMPERADORES CHINOS ---------------- */
  ['emperadores-chinos', 'un emperador chino',
    'qin shi huang,han wudi,wang mang,tang taizong,wu zetian|song taizu,kublai khan,hongwu,yongle,wanli|kangxi,qianlong,puyi,sui yangdi,liu bang'],

  /* ---------------- EMPERADORES JAPONESES ---------------- */
  ['emperadores-japoneses', 'un emperador japonés',
    'jimmu,kammu,saga,go-daigo,meiji|taisho,hirohito,akihito,naruhito,komei'],

  /* ---------------- MAMÍFEROS ---------------- */
  ['mamiferos', 'un mamífero',
    'perro,gato,caballo,vaca,cerdo|oveja,cabra,conejo,ratón,rata|hámster,cobaya,ardilla,castor,murciélago|ballena,delfín,orca,elefante,jirafa|león,tigre,oso,lobo,zorro|ciervo,jabalí,mono,gorila,canguro'],

  /* ---------------- MÁS AVES ---------------- */
  ['aves-2', 'un ave',
    'águila,halcón,búho,lechuza,buitre|cóndor,albatros,gaviota,pelícano,flamenco|pingüino,avestruz,pavo real,loro,guacamayo|tucán,colibrí,golondrina,gorrión,cuervo'],

  /* ---------------- MÁS PECES ---------------- */
  ['peces-2', 'un pez',
    'sardina,boquerón,atún,bonito,merluza|bacalao,salmón,trucha,lubina,dorada|mero,rape,lenguado,rodaballo,pez espada|tiburón,raya,anguila,carpa,piraña'],

  /* ---------------- MÁS INSECTOS ---------------- */
  ['insectos-2', 'un insecto',
    'abeja,avispa,hormiga,mariposa,polilla|escarabajo,mariquita,libélula,mosca,mosquito|cucaracha,grillo,saltamontes,mantis,termita|pulga,piojo,abejorro,zángano,luciérnaga'],

  /* ---------------- MÁS REPTILES ---------------- */
  ['reptiles-2', 'un reptil',
    'lagarto,lagartija,salamanquesa,iguana,camaleón|cocodrilo,caimán,aligátor,tortuga,galápago|serpiente,pitón,boa,anaconda,cobra'],

  /* ---------------- ANIMALES DE SELVA ---------------- */
  ['animales-selva', 'un animal de la selva',
    'jaguar,puma,ocelote,tucán,guacamayo|perezoso,mono araña,orangután,gorila,chimpancé|elefante,tigre,pantera,anaconda,piraña'],

  /* ---------------- ANIMALES DE MONTAÑA ---------------- */
  ['animales-montana', 'un animal de montaña',
    'cabra montés,rebeco,marmota,águila real,quebrantahuesos|buitre,lobo,oso pardo,lince,ciervo|corzo,jabalí,armiño,nutria,salmón'],

  /* ---------------- ANIMALES DE AGUA DULCE ---------------- */
  ['animales-agua-dulce', 'un animal de agua dulce',
    'trucha,carpa,barbo,lucio,anguila|salmón,cangrejo de río,rana,sapo,nutria|castor,hipopótamo,cocodrilo,tortuga,piraña'],

  /* ---------------- MÁS RAZAS DE PERRO ---------------- */
  ['razas-perro-2', 'una raza de perro',
    'labrador,golden retriever,pastor alemán,bulldog,beagle|caniche,chihuahua,yorkshire,boxer,dóberman|rottweiler,husky,border collie,bichón maltés,shih tzu|gran danés,san bernardo,dálmata,pug,saluki'],

  /* ---------------- MÁS RAZAS DE GATO ---------------- */
  ['razas-gato-2', 'una raza de gato',
    'siamés,persa,angora,bengalí,maine coon|azul ruso,británico de pelo corto,escocés,sphynx,abisinio|birmano,ragdoll,noruego de los bosques,devon rex,manx'],

  /* ---------------- MÁS FLORES ---------------- */
  ['flores-2', 'una flor',
    'rosa,tulipán,margarita,girasol,lirio|orquídea,clavel,jazmín,lavanda,amapola|narciso,gladiolo,peonía,hortensia,azalea'],

  /* ---------------- MÁS ÁRBOLES ---------------- */
  ['arboles-2', 'un árbol',
    'roble,encina,haya,abedul,pino|abeto,ciprés,olmo,fresno,arce|castaño,nogal,plátano,sauce,álamo|tilo,tejo,acebo,magnolio,secuoya'],

  /* ---------------- MÁS PLANTAS ---------------- */
  ['plantas-2', 'una planta',
    'helecho,musgo,hiedra,ortiga,trébol|diente de león,llantén,romero,tomillo,salvia|menta,albahaca,orégano,perejil,cilantro|eneldo,hinojo,lavanda,amapola,cardo'],

  /* ---------------- MÁS FRUTAS ---------------- */
  ['frutas-2', 'una fruta',
    'mango,papaya,guayaba,maracuyá,chirimoya|lichi,rambután,durián,pitahaya,carambola|kiwi,caqui,níspero,membrillo,endrina|arándano,grosella,frambuesa,mora,uva'],

  /* ---------------- MÁS VERDURAS ---------------- */
  ['verduras-2', 'una verdura',
    'brócoli,coliflor,repollo,col lombarda,col rizada|espinaca,acelga,lechuga,escarola,rúcula|berza,apio,puerro,cebolla,ajo|zanahoria,remolacha,calabaza,calabacín,berenjena'],

  /* ---------------- ESPECIALIDADES MÉDICAS ---------------- */
  ['especialidades-medicas', 'una especialidad médica',
    'cardiología,neurología,pediatría,dermatología,traumatología|oftalmología,otorrinolaringología,ginecología,urología,oncología|psiquiatría,endocrinología,gastroenterología,neumología,nefrología|reumatología,hematología,cirugía,radiología,anestesiología'],

  /* ---------------- PARTES DEL OJO ---------------- */
  ['partes-ojo', 'una parte del ojo',
    'córnea,iris,pupila,retina,cristalino|esclerótica,conjuntiva,párpado,cejas,humor vítreo'],

  /* ---------------- PARTES DEL CORAZÓN ---------------- */
  ['partes-corazon', 'una parte del corazón',
    'aurícula derecha,aurícula izquierda,ventrículo derecho,ventrículo izquierdo,válvula mitral|válvula tricúspide,válvula aórtica,aorta,vena cava,arteria pulmonar'],

  /* ---------------- PARTES DEL CEREBRO ---------------- */
  ['partes-cerebro', 'una parte del cerebro',
    'cerebro,cerebelo,bulbo raquídeo,hipotálamo,hipófisis|tálamo,amígdala,hipocampo,corteza cerebral,cuerpo calloso'],

  /* ---------------- RAMAS DE LA BIOLOGÍA ---------------- */
  ['ramas-biologia', 'una rama de la biología',
    'zoología,botánica,ecología,genética,microbiología|bioquímica,fisiología,anatomía,citología,evolución|taxonomía,biotecnología'],

  /* ---------------- ENERGÍAS RENOVABLES ---------------- */
  ['energias-renovables', 'una energía renovable',
    'solar,eólica,hidráulica,geotérmica,biomasa|mareomotriz,undimotriz,fotovoltaica,termosolar,biocombustible'],

  /* ---------------- INSTRUMENTOS MÉDICOS ---------------- */
  ['instrumentos-medicos', 'un instrumento médico',
    'estetoscopio,termómetro,tensiómetro,jeringuilla,bisturí|escalpelo,pinzas,tijeras,otoscopio,oftalmoscopio|ecógrafo,electrocardiógrafo,microscopio,laringoscopio,catéter'],

  /* ---------------- MÁS LIBROS ---------------- */
  ['libros-2', 'un libro famoso',
    'cien años de soledad,don quijote,la odisea,la ilíada,la divina comedia|el principito,1984,rebelión en la granja,un mundo feliz,fahrenheit 451|matar a un ruiseñor,el gran gatsby,moby dick,crimen y castigo,guerra y paz|anna karenina,madame bovary,orgullo y prejuicio,jane eyre,cumbres borrascosas|el señor de los anillos,harry potter,juego de tronos,los juegos del hambre,el código da vinci'],

  /* ---------------- MÁS ESCRITORES ---------------- */
  ['escritores-2', 'un escritor famoso',
    'cervantes,shakespeare,dante,homero,tolstói|dostoievski,dickens,austen,brontë,poe|kafka,proust,joyce,virginia woolf,orwell|hemingway,fitzgerald,garcía márquez,borges,cortázar|vargas llosa,neruda,lorca,machado,bécquer'],

  /* ---------------- POETAS ---------------- */
  ['poetas', 'un poeta famoso',
    'homero,safo,virgilio,petrarca,garcilaso|quevedo,góngora,lope de vega,bécquer,rosalía de castro|machado,juan ramón jiménez,lorca,neruda,borges|octavio paz,rilke,baudelaire,rimbaud,verlaine'],

  /* ---------------- MÁS PELÍCULAS ---------------- */
  ['peliculas-2', 'una película famosa',
    'ciudadano kane,casablanca,el padrino,pulp fiction,uno de los nuestros|apocalypse now,el cazador,taxi driver,toro salvaje,la naranja mecánica|2001,alien,blade runner,matrix,el club de la lucha|forrest gump,cadena perpetua,la milla verde,salvar al soldado ryan,la lista de schindler|gladiator,braveheart,titanic,avatar,inception|interestelar,el silencio de los corderos,psicosis,tiburón,e.t.|regreso al futuro,indiana jones,star wars,el señor de los anillos,el hobbit'],

  /* ---------------- MÁS ACTORES ---------------- */
  ['actores-2', 'un actor famoso',
    'marlon brando,al pacino,robert de niro,jack nicholson,leonardo dicaprio|tom hanks,brad pitt,johnny depp,morgan freeman,samuel l. jackson|anthony hopkins,clint eastwood,harrison ford,tom cruise,denzel washington|will smith,robert downey jr.,christian bale,heath ledger,joaquin phoenix|antonio banderas,javier bardem,ricardo darín,gael garcía bernal,jean-paul belmondo'],

  /* ---------------- MÁS SERIES ---------------- */
  ['series-2', 'una serie famosa',
    'lost,prison break,24,homeland,house of cards|the west wing,the newsroom,the americans,fargo,true detective|the leftovers,the boys,invincible,arcane,the mandalorian|andor,star trek,doctor who,black mirror,westworld|the handmaid s tale,the umbrella academy,dark,la casa de papel,élite|narcos,ozark,peaky blinders,vikingos,juego de tronos'],

  /* ---------------- MÁS VIDEOJUEGOS ---------------- */
  ['videojuegos-2', 'un videojuego famoso',
    'tetris,pac-man,space invaders,donkey kong,super mario bros|the legend of zelda,metroid,mega man,sonic,street fighter|mortal kombat,tekken,final fantasy vii,chrono trigger,doom|quake,half-life,counter-strike,warcraft,starcraft|diablo,the sims,minecraft,fortnite,among us'],

  /* ---------------- MÁS DIBUJOS ANIMADOS ---------------- */
  ['dibujos-animados-2', 'un dibujo animado',
    'tom y jerry,looney tunes,los picapiedra,scooby-doo,los supersónicos|he-man,transformers,teenage mutant ninja turtles,los simpson,padre de familia|south park,bob esponja,rugrats,hey arnold,dragon ball|sailor moon,pokémon,digimon,avatar the last airbender,adventure time'],

  /* ---------------- MÁS GRUPOS DE MÚSICA ---------------- */
  ['grupos-2', 'un grupo de música famoso',
    'the beatles,rolling stones,queen,led zeppelin,pink floyd|the who,ac dc,metallica,nirvana,guns n roses|u2,coldplay,radiohead,oasis,blur|green day,red hot chili peppers,linkin park,bon jovi,aerosmith|the doors,the beach boys,abba,bee gees,daft punk|depeche mode,the cure,joy division,the smiths,arctic monkeys'],

  /* ---------------- MÁS CANTANTES ---------------- */
  ['cantantes-2', 'un cantante famoso',
    'michael jackson,madonna,elvis presley,freddie mercury,david bowie|prince,stevie wonder,aretha franklin,whitney houston,mariah carey|celine dion,adele,beyoncé,rihanna,lady gaga|taylor swift,ed sheeran,bruno mars,justin bieber,shakira|enrique iglesias,ricky martin,julio iglesias,alejandro sanz,rosalía|bad bunny,karol g,juanes,luis miguel,frank sinatra'],

  /* ---------------- MÁS CANCIONES ---------------- */
  ['canciones-2', 'una canción famosa',
    'yesterday,let it be,hey jude,imagine,bohemian rhapsody|we will rock you,billie jean,thriller,beat it,like a prayer|purple rain,smells like teen spirit,wonderwall,creep,yellow|fix you,viva la vida,rolling in the deep,someone like you,hello|shape of you,despacito,waka waka,la bamba,macarena'],

  /* ---------------- BAILES ---------------- */
  ['bailes-2', 'un baile',
    'salsa,bachata,merengue,cumbia,tango|flamenco,sevillanas,rumba,mambo,cha-cha-chá|vals,polca,ballet,hip hop,breakdance|swing,foxtrot,samba,lambada,conga'],

  /* ---------------- PARQUES TEMÁTICOS ---------------- */
  ['parques-tematicos', 'un parque temático',
    'disneyland,disney world,universal studios,europa park,portaventura|parque warner,legoland,six flags,cedar point,seaworld|busch gardens,efteling,tivoli,plopsaland,ferrari world'],

  /* ---------------- MÁS FUTBOLISTAS ---------------- */
  ['futbolistas-2', 'un futbolista famoso',
    'zidane,ronaldinho,ronaldo,romário,rivaldo|kaká,drogba,etoo,henry,vieira|bergkamp,van basten,gullit,rijkaard,baresi|maldini,nesta,cannavaro,totti,del piero|pirlo,buffon,casillas,ramos,piqué|alba,busquets,silva,agüero,higuaín'],

  /* ---------------- MÁS TENISTAS ---------------- */
  ['tenistas-2', 'un tenista famoso',
    'federer,nadal,djokovic,murray,sampras|agassi,becker,mcenroe,borg,connors|lendl,wilander,edberg,courier,kuerten|hewitt,roddick,alcaraz,sinner,swiatek'],

  /* ---------------- JUGADORES DE BÉISBOL ---------------- */
  ['jugadores-beisbol', 'un jugador de béisbol famoso',
    'babe ruth,lou gehrig,jackie robinson,hank aaron,willie mays|mickey mantle,ted williams,joe dimaggio,sandy koufax,nolan ryan|barry bonds,ken griffey jr.,derek jeter,mariano rivera,albert pujols|ichiro suzuki,shohei ohtani,pedro martínez,david ortiz,alex rodríguez'],

  /* ---------------- ENTRENADORES DE FÚTBOL ---------------- */
  ['entrenadores-futbol', 'un entrenador de fútbol famoso',
    'guardiola,mourinho,klopp,ancelotti,zidane|simeone,ferguson,wenger,cruyff,sacchi|capello,lippi,del bosque,luis enrique,scaloni|bielsa,sampaoli,van gaal,hiddink,heynckes'],

  /* ---------------- MÁS DEPORTES ---------------- */
  ['deportes-2', 'un deporte',
    'fútbol,baloncesto,tenis,natación,atletismo|ciclismo,voleibol,balonmano,rugby,béisbol|hockey,golf,boxeo,judo,karate|taekwondo,esgrima,remo,vela,equitación'],

  /* ---------------- DEPORTES NÁUTICOS ---------------- */
  ['deportes-nauticos', 'un deporte náutico',
    'natación,waterpolo,remo,piragüismo,vela|windsurf,surf,buceo,esquí acuático,motonáutica|kayak,paddle surf'],

  /* ---------------- MÁS COMIDAS ---------------- */
  ['comidas-2', 'una comida española',
    'tortilla,croquetas,patatas bravas,pulpo a la gallega,jamón|chorizo,salchichón,morcilla,queso manchego,aceitunas|pan con tomate,escalivada,calçots,butifarra,fabada|cocido madrileño,callos,rabo de toro,salmorejo,gazpacho|paella,fideuá,arroz negro,zarzuela,bacalao al pil pil|merluza a la vasca,txangurro,marmitako,pisto,migas'],

  /* ---------------- MÁS POSTRES ---------------- */
  ['postres-2', 'un postre',
    'tarta de santiago,crema catalana,arroz con leche,flan,natillas|churros,torrijas,pestiños,buñuelos,rosquillas|magdalenas,bizcocho,tarta de queso,tiramisú,panna cotta|crème brûlée,profiteroles,éclair,macarons,brownie|cheesecake,helado,sorbete,mousse,tarta de manzana'],

  /* ---------------- MÁS QUESOS ---------------- */
  ['quesos-2', 'un queso',
    'manchego,idiazábal,cabrales,roquefort,camembert|brie,cheddar,gouda,parmesano,mozzarella|gorgonzola,emmental,gruyère,feta,tetilla|san simón,mahón,zamorano,roncal,afuega el pitu'],

  /* ---------------- MÁS PESCADOS ---------------- */
  ['pescados-2', 'un pescado',
    'merluza,bacalao,atún,bonito,sardina|boquerón,salmón,trucha,lubina,dorada|mero,rape,lenguado,rodaballo,pez espada|tiburón,raya,anguila,carpa,piraña'],

  /* ---------------- MÁS MARISCOS ---------------- */
  ['mariscos-2', 'un marisco',
    'gamba,langostino,camarón,langosta,bogavante|cangrejo,centollo,nécora,buey de mar,cigala|carabinero,mejillón,almeja,ostra,vieira|berberecho,navaja,calamar,sepia,pulpo'],

  /* ---------------- MÁS UTENSILIOS DE COCINA ---------------- */
  ['utensilios-2', 'un utensilio de cocina',
    'cuchillo,tenedor,cuchara,plato,vaso|taza,olla,sartén,cazo,bandeja|tabla de cortar,batidor,rodillo,colador,rallador|pelador,abrelatas,sacacorchos,espátula,pinzas'],

  /* ---------------- MÁS HERRAMIENTAS ---------------- */
  ['herramientas-2', 'una herramienta',
    'martillo,destornillador,llave inglesa,alicate,sierra|taladro,nivel,cinta métrica,escuadra,formón|cincel,lima,lija,torno,soldador|grapadora,remachadora,maceta,punzón,navaja'],

  /* ---------------- MÁS PRENDAS ---------------- */
  ['prendas-2', 'una prenda de ropa',
    'camisa,camiseta,pantalón,falda,vestido|chaqueta,abrigo,jersey,sudadera,shorts|calcetines,medias,ropa interior,sujetador,bañador|pijama,bufanda,guantes,sombrero,cinturón'],

  /* ---------------- MASCOTAS ---------------- */
  ['mascotas', 'una mascota',
    'perro,gato,hámster,cobaya,conejo|loro,periquito,canario,pez,tortuga|iguana,serpiente,hurón,chinchilla,rata']

);
