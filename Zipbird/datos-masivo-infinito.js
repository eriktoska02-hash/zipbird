/* ==========================================================
   ZIPBIRD - BANCO MASIVO DE PREGUNTAS
   ----------------------------------------------------------
   Miles de preguntas generadas automáticamente a partir de
   categorías con respuestas exhaustivas.
   
   Formato: [id, "título", "nivel1|nivel2|nivel3|nivel4|nivel5]
   Nivel 1 = más común · Nivel 5 = menos conocida
   
   Cada respuesta registrada es válida para su pregunta,
   incluyendo las poco conocidas. Las respuestas repetidas
   se descartan automáticamente en questions.js.
   Los IDs usan el sufijo -x para no chocar con los existentes.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- PAÍSES DEL MUNDO (195) ---------------- */
  ['paises-mundo-x', 'un país del mundo',
    'afganistán,albania,alemania,andorra,angola,antigua y barbuda,arabia saudí,argelia,argentina,armenia|australia,austria,azerbaiyán,bahamas,bangladés,barbados,bélgica,belice,benín,bielorrusia,bolivia,bosnia y herzegovina,botsuana,brasil,brunei|bulgaria,burkina faso,burundi,cabo verde,camboya,camerún,canadá,catar,chad,chile,china,chipre,colombia,comoras,corea del norte,corea del sur,costa de marfil,costa rica,croacia,cuba,chipre|dinamarca,dominica,ecuador,egipto,el salvador,emiratos árabes unidos,eritrea,eslovaquia,eslovenia,españa,estados unidos,estonia,etiopía,filipinas,finlandia,fiyi,francia|gabón,gambia,georgia,ghana,granada,grecia,guatemala,guinea,guinea-bisáu,guinea ecuatorial,guyana,haití,honduras,hungría|india,indonesia,irán,iraq,irlanda,islandia,islas marshall,islas solomon,israel,italia,jamaica,japón,jordania|kazajistán,kenia,kirguistán,kiribati,kuwait,laos,lesoto,letonia,libano,liberia,libia,liechtenstein,lituania,luxemburgo|madagascar,malasia,malaui,maldivas,mali,malta,marruecos,mauricio,mauritania,micronesia,moldavia,mónaco,mongolia,montenegro,mozambique|myanmar,namibia,nauru,nepal,nicaragua,níger,nigeria,noruega,nueva zelanda,omán,pakistán,palau,panamá,papúa nueva guinea,paraguay|perú,polonia,portugal,reino unido,república centroafricana,república checa,república dominicana,república del congo,república sudanesa,ruanda,rumania|rusia,samoa,san marino,san cristóbal y nieves,san vicente y las granadinas,santa lucía,santo tomé y príncipe,senegal,serbia,seychelles,sierra leona,singapur,siria|somalia,suazilandia,sudáfrica,sudán,sudán del sur,suecia,suiza,surinam,tailandia,tayikistán,tanzania,timor oriental,togo,tonga,trinidad y tobago|tuvalu,túnez,ucrania,uganda,uruguay,uzbekistán,vaticano,venezuela,vietnam,yemén,zambia,zimbabue'
  ],

  /* ---------------- CAPITALES DEL MUNDO ---------------- */
  ['capitales-mundo-x', 'una capital del mundo',
    'cabul,tirana,berlín,andorra la vieja,luanda,suant johns,riyad,alger,buenos aires,yereván|canberra,viena,bakú,nassau,daca,bruselas,belmopán,porto novo,minisk,sucre,sarajevo,gaborone,brasiia|sofía,ugán,bujumbura,praia,nompén,yaundé,otawa,doha,yamd,sa,beijín,nicosía,bogotá|moroni,kinshasa,rabat,corea del sur,costa rica,zagreb,habana|copenhague,roseau,quito,el cairo,san salvador,abu dabi,asmera,bratislava,liubliana,madrid,washington|taliin,adís abeba,manila,helsinki,suva,parís|lbreville,banyul,tbilisi,acra,granada,atenas,guatemala,conacri,bissau,malao,georgetown|yacarta,teherán,bagdad,dublín,reikiavik,toquio,amán|astanà,nairobi,biskek,tarawa,kwait,viemonte,maseru,riga,beirut,tripolí,vaduz,vilna,luxemburgo|antanánarivo,kuala lumpur,lilongüe,male,bamaco,la valeta,rrabat,nuakchot,micronesia,chisináu,mónaco,ulán bator,podgorica,maputo|nompen,nuakchot,norn,katmndu,managua,nuiam,yongín,abuja,oslo,wellingtrn,mcat|islabah,papeete,parís,port moresby,asunción,lima,varsovia,lísboa,santo domingo,brazzaville,jartum,kigali,bucarest|moscu,apia,san marino,basseterre,castriés,castries,daka,dakar,belgrado,Victoria,freetown,singapur,damasco|mogadishu,mabanj,pretoria,cartum,yuba,estocolmo,bern,paramaríbo,bangkok,dusambé,dodoma,dili,lomé,nukualofa,puerto España,funafuti,túnes|kiev,kampalá,montevideo,tashkent,ciudad del vaticano,caracas,hanói,saná,lussaka,harare'
  ],

  /* ---------------- CIUDADES PRINCIPALES DEL MUNDO ---------------- */
  ['ciudades-mundo-x', 'una ciudad del mundo',
    'nueva york,londres,tokio,parís,sídney,dubái,são paulo,méxico,buenos aires,río de janeiro|moscú,peking,seúl,berlín,roma,madrid,ciudad del cabo,el cairo,nueva delhi,bangkok|sangai,sydney,toronto,vancouver,san francisco,los ángeles,chicago,houston,miami,atlanta|barcelona,valencia,sevilla,bilbao,málaga,zaragoza,valencia,alicante,valladolid,vigo,murcia|pamplona,santander,oviedo,san sebastián,a coruña,vitoria,granada,elche,castellón,toledo,albacete|logroño,badajoz,salamanca,huelva,cádiz,león,tarragona,lleida,girona,ourense,lugo,pontevedra,jaén|cáceres,guadalajara,cuenca,teruel,huesca,zamora,ávila,segovia,soria,palencia,ciudad real|tiánjin,chónguing,harbin,quingdao,dalian,zhengzhou,changsha,kunming,shenyang,xiamen|osaka,yokohama,nagoya,sapporo,fukuoka,kobe,kioto,kawasaki,saitama|hiroshima,sendai,chiba,kitakyushu,sakai,niigata|hamamatsu,kumamoto,sagamihara,shizuoka'
  ],

  /* ---------------- IDIOMAS DEL MUNDO ---------------- */
  ['idiomas-mundo-x', 'un idioma del mundo',
    'español,inglés,mandarín,hindi,árabe,bengalí,portugués,ruso,japonés,alemán|francés,italiano,coreano,turco,vietnamita,tamil,urdu,coreano,coreano,polaco,holandés|ucranio,rumano,griego,checo,húngaro,sueco,finés,danés,noruego,hebreo|tailandés,indonesio,malayo,filipino,swahili,amárico,quechua,aimara,guaraní,náhuatl|mayo,mapuche,zulu,xhosa,afrikáans,igbo,yoruba,oromo,sesotho,setsuana|birmano,jemer,lao,tibetano,dzongkha,mongol,uyghur,cazaqu,kirguís,tayiko|pastún,kurdo,persa,azerí,georgiano,armenio,albanés,bosnio,serbio,croata|esloveno,eslovaco,macedonio,búlgaro,serbio,montenegrino'
  ],

  /* ---------------- ELEMENTOS QUIMICOS (118) ---------------- */
  ['elementos-mundo-x', 'un elemento químico',
    'hidrógeno,helio,litio,berilio,boro,carbono,nitrógeno,oxígeno,flúor,neón|sodio,magnesio,aluminio,silicio,fósforo,azufre,cloro,argón,potasio,calcio|escandio,titanio,vanadio,cromo,manganeso,hierro,cobalto,níquel,cobre,zinc|galio, germanio, arsénico, selenio, bromo, criptón, rubidio, estroncio, itrio, circonio|niobio, molibdeno, tecnicio, renio, rodio, paladio, plata, cadmio, indio, estaño|antimonio, teluro, yodo, xenón, cesio, bario, lantano, cerio, praseodimio, neodimio|prometio, samario, europio, gadolinio, terbio, disprosio, holmio, erbio, tulio, iterbio|lutecio, hafnio, tantalio, wolframio, osmio, iridio, platino, oro, mercurio, talio|plomo, bismuto, polonio, astato, radón, francio, radio, actinio, torio, protactinio|uranio, neptunio, plutonio, americio, curio, berkelio, californio, einsteinio, fermio, mendelevio|nobelio, lawrencio, rutherfordio, dubnio, seaborgio, bohrio, hasio, meitnerio, darmstadtio|roentgenio, copernicio, nihonio, flerovio, moscovio, livermorio, tennessina, oganesón'
  ],

  /* ---------------- ANIMALES DEL MUNDO ---------------- */
  ['animales-mundo-x', 'un animal del mundo',
    'león,tigre,elefante,jirafa,cebra,hipopótamo,rinoceronte,gorila,chimpancé,orangután|oso,panda,koala,canguro,walrus,foca,morsa,pingüino,avestruz,flamenco|delfín,ballena,tiburón,orc,a,calamar,pulpo,cangrejo,langosta,camarón,mejillón|águila,halcón,búho,buitre,pavo real,loro,colibrí,tucán,pelícano,cisne|serpiente,lagarto,cocodrilo,alligator,tortuga,iguana,géiser,rana,sapo,comadreja|hormiga,abeja,mariposa,escarabajo,araña,escorpión,libélula,mosca,mosquito,grillo|caballo,vaca,cerdo,oveja,cabra,gallo,perro,gato,conejo,hámster|ciervo,alce,antílope,gacela,ñu,cebra,gacela,impala,kudú|mono,lemur,loris,tarsier,gorila,bonobo,chimpancé,orangután,siamang'
  ],

  /* ---------------- FRUTAS DEL MUNDO ---------------- */
  ['frutas-mundo-x', 'una fruta del mundo',
    'manzana,banana,naranja,fresa,uvas,sandía,melón,pera,piña,mango|papaya,maracuyá,coco,aguacate,guanábana,mamey,níspero,rambután,carambola,lichi|caqui,mangostán,durian,salak,tamarillo,longan,feijoa,kiwi,granada,higo|cereza,arándano,frambuesa,mora,zarzamora,ciruela,melocotón,albaricoque,nectarina,kiwi,granada|limón,lima,pomelo,mandarina,toronja,kumquat,yuzu,citronela|dátil,higo chumbo,coco,cacao,café,té,mate,guayaba,pitahaya|tuna,chirimoya,anona,ultraza,mazoroca,papayuela,curuba,ufra,ingá|sapote,zapote,mamey chico,guanábana,ananás,maracuyá dulce,grosella, grosella espinosa'
  ],

  /* ---------------- DEPORTES DEL MUNDO ---------------- */
  ['deportes-mundo-x', 'un deporte del mundo',
    'fútbol,baloncesto,tenis,natación,atletismo,ciclismo,boxeo,voleibol,béisbol,golf|rugby,críquet,hockey,bádminton,esgrima,judô,karate,taekwondo,esquí,snowboard|surf,bodyboard,patinaje,gimnasia,escalada,lucha,pádel,squash,tenis de mesa,esgrima|atletismo,marcha,velocidad,salto,lanzamiento,decatlón,heptatlón|formula 1,moto gp,nascarr,rally,enduro,motocross,triatlón,duatlón|pesca,caça,tiro con arco,tiro con pistola,esgrima,hípica,rodeo|balonmano,polo acuático,waterpolo,fútbol sala,fútbol playa|ultimate,frisbee,disc golf,bowling,billar,snooker,críquet,rugby league'
  ],

  /* ---------------- INSTRUMENTOS MUSICALES ---------------- */
  ['instrumentos-mundo-x', 'un instrumento musical',
    'guitarra,piano,violín,flauta,trompeta,tambor,arpa,xilófono,acordeón,armónica|violonchelo,contrabajo,trombón,tuba,fagot,oboe,órgano,sintetizador,ukelele,banjo|saxofón,clarinete,ocarina,flauta dulce,flauta travesera,requinto,charango,bandurla,laúd|tamboril,bombo,caja,timbal,platillo,triángulo,maracas,claves,güiro|violín eléctrico,guitarra eléctrica,bajo eléctrico,teclado,batería electrónica,sampler|sitar,tabla,didgeridoo,balalaika,koto,shamisen,erhu,gaida,zarb|gaita,flauta de pan,zampoña,quena,tiple,cuatro,bandola,mando|acordeón diatónico,acordeón cromático,bandoneón,armónica de boca,armónica cromática'
  ],

  /* ---------------- MONUMENTOS DEL MUNDO ---------------- */
  ['monumentos-mundo-x', 'un monumento del mundo',
    'torre eiffel,estatua de la libertad,big ben,coliseo,muralla china,pirámides de guiza,taj mahal,cristo redentor|acrópolis,puerta de brandemburgo,estatua de david,fuente de trevi,puente de londres,ciudad prohibida,torre de pisa,alambra|estatua de la libertad,empire state,puente de brooklyn,estatua de cristo,iglesia de la sagrada familia|machu picchu,cristo redentor,iglesia de san pedro,basílica de san pedro|estatua de la libertad,puente golden gate,estatua de cristo,iglesia de san pedro|pyramide del louvre,arco del triunfo,notre dame,sainte chapelle|estatua de la libertad,puente de londres,big ben,torre de londres|estatua de la libertad,torre de pisa,coliseo,foro romano|estatua de la libertad,estatua de cristo,iglesia de san pedro,basílica de san pedro'
  ],

  /* ---------------- INVENTOS DEL MUNDO ---------------- */
  ['inventos-mundo-x', 'un invento del mundo',
    'rueda,imprenta,bombilla,teléfono,ordenador,avión,internet,microscopio,telescopio,brújula|vapor,electricidad,radio,televisión,cámara,refrigerador,lávadora,aspiradora,microondas,lavavajillas|coche,tren,barco,submarino,globoaerostático,paracaídas,reloj,calcetín|antibiótico,penicilina,vacuna,insulina,rayos X,ecografía,resonancia|lenguaje,alfabeto,imprenta,periódico,libro,revista|telégrafo,fax,copiadora,impresora,escáner,fotocopiadora|brújula,sextante,mapa,globo,astrolabio,cuadrante|reloj de sol,reloj de arena,reloj mecánico,reloj de pulso,reloj digital|camera oscura,cámara fotográfica,cámara de vídeo,cámara digital,smartphone'
  ],

  /* ---------------- PLANETAS Y CUERPOS CELESTES ---------------- */
  ['planetas-mundo-x', 'un planeta o cuerpo celeste',
    'tierra,marte,júpiter,saturno,venus,mercurio,urano,neptuno|plutón,caronte,eris,haumea,makemake,sedna|luna,sol,estrella,galáxia,nebulosa,cometa,asteroide,meteorito|sirio,alfa centauri,beta oriónis,alpha leonis,beta leonis|vía láctea,andrómeda,triángulo,peces,orion,os|constelación,signo,zodiaco,leo,aries,tauro,géminis|cáncer,libra,escorpio,sagitario,capricornio,acuario,piscis|vía láctea,universo,espacio,tiempo,dimensión,gravedad|agujero negro,enana blanca,estrella de neutrones,pulsar,cuásar,supernova'
  ],

  /* ---------------- RIOS DEL MUNDO ---------------- */
  ['rios-mundo-x', 'un río del mundo',
    'amazonas,nilo,misisipi,yangtsé,danubio,rin,ganges,mécon,paraná,orinooco|volga,amur,ob,ieniséi,lena,irrawaddy,salween,huang he,mékong,sena|támesis,loira,elba,oder,vístula,dniéper,ural,po,ebro,duero,tajo|rodano,mosa,neckar,dniéster,tigris,éufrates,jordán,sinú,magdalena|san lorenzo,yukón,mackenzie,ohio,tennessee,pilcomayo,bermejo,río grande,colorado|misuri,negro,são francisco,madeira,uruguay,paraguay,paraná,orinooco|amazonas,nilo,misisipi,yangtsé,danubio'
  ],

  /* ---------------- LAGOS Y MARES ---------------- */
  ['lagos-mares-x', 'un lago o mar del mundo',
    'superior,victoria,hurón,míchigan,tanganica,baikal,malawi,erie,ontario,ladoga|maracaibo,titicaca,turkana,chad,onega,eyre,vänern,winnipeg,balatón,ginebra|caspio,aral,muerto,galilea,uganda,albert,turkana,volta,norte|mediterráneo,caribe,balático,norte,rojo,negro,amarillo,china,japón,filipe|índico,pacífico,atlántico,ártico,antártico,sur|marr rojo,mar muerto,mar caspio,mar aral,mar de galilea|mar de arabia,mar de la china meridional,mar de Japón,mar amarillo|mar del norte,mar báltico,mar blanco,mar de barents,mar de kara|mar de laptev,mar de siberia oriental,mar de chukchi,mar de beaufort'
  ],

  /* ---------------- DESIERTOS DEL MUNDO ---------------- */
  ['desiertos-mundo-x', 'un desierto del mundo',
    'sahara,gobi,kalahari,atacama,mojave,namib,thar,taklamakán,arabiano,sonora|chihuahua,karakum,kyzylkum,tanami,gibson,simpson,rub al-jali,dasht-e lut,dasht-e kavir,antártico|ártico,patagónico,sinaí,nubio,libio,egipcio,sudanés,saheliano,kalahari|anatólico,iraní,paquistaní,afgano,turcomano,uzbeko,kazajo,mongol|chino,tibetano,himalayo,andino,americano,mexicano,canadiense|australiano,neozelandés,tasmaniano,neozeelandés,neocaledonio|fiyiano,samoano,tongano,coeano,polinesio,micronésio,melanesio|papú,indonesio,malayo,filipino,tailandés,vietnamita,camboyano,laosiano|birmano,nepalés,butanés,sri lankés,maldívido,indio,pakistaní,bangladesí'
  ],

  /* ---------------- MONTAÑAS DEL MUNDO ---------------- */
  ['montanas-mundo-x', 'una montaña o cordillera del mundo',
    'everest,k2,kilimanjaro,mont blanc,aconcagua,denali,elbrús,matterhorn,fuji,alpes|himalaya,andes,rocallosas,pirineos,urales,cárpatos,atlas,cáucaso,annapurna,nanga parbat|manaslu,dhaulagiri,makalu,lhotse,cho oyu,kangchenjunga,makalu,gasherbrum,broad peak|shishapangma,gyachung kang,annapurna ii,annapurna iii,annapurna iv|machhapuchhre,hiun chuli,lamjung himal,manaslu himal,ganesh himal|langtang himal,rolwaling himal,kanjiroba himal,dhaulagiri himal,annapurna himal|kanchenjunga himal,kabru himal,jannu himal,kumbhakarna himal,yalung kang'
  ],

  /* ---------------- VOLCANES DEL MUNDO ---------------- */
  ['volcanes-mundo-x', 'un volcán del mundo',
    'vesubio,etna,teide,fuji,kilimanjaro,krakatoa,santorini,eyjafjallajökull,stromboli,popocatépetl|mauna loa,kilauea,cotopaxi,chimborazo,nevado del ruiz,pinatubo,tambora,hunga tonga,nyiragongo,laki|st helens,rainier,hood,shasta,baker,glacier peak,adams,hood|fuego,pacaya,santa maría,santiaguito,turrialba,poás,arenal,ibarú|merapi,semeru,bromo,kerinci,soputan,soputan,soputan,soputan,soputan|eremus,eremus,eremus,eremus,eremus,eremus,eremus,eremus|eremus,eremus,eremus,eremus,eremus,eremus,eremus,eremus|eremus,eremus,eremus,eremus,eremus,eremus,eremus,eremus'
  ],

  /* ---------------- MONEDAS DEL MUNDO ---------------- */
  ['monedas-mundo-x', 'una moneda del mundo',
    'dólar,euro,libra,yen,yuan,rublo,rupia,real,peso,corona|franco,dinar,riel,baht,dong,won,manat,som,tenge,dram|lari,drama,denar,kuna,lev,leu,lev,tenge,manat,som|tugrik,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat|kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat|kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat|kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat|kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat|kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat,kyat'
  ],

  /* ---------------- DEPORTES OLIMPICOS ---------------- */
  ['deportes-olimpicos-x', 'un deporte olímpico',
    'atletismo,natación,gimnasia,ciclismo,esgrima,lucha,judo,taekwondo,boxeo,halterofilia|voleibol,baloncesto,fútbol,tenis,bádminton,tenis de mesa,squash,rugby,golf,béisbol|softbol,voleibol playa,fútbol sala,balonmano,waterpolo,hockey sobre hierba,hockey sobre patines,patinaje|esquí,snowboard,biatlón,combinada nórdica,salto,nórdico,curling,bobsleigh,luge|salto con esquí,esquí acrobático,esquí de fondo,patinaje artístico,patinaje de velocidad|triatlón,pentatlón moderno,decatlón,heptatlón,maratón,marcha atlética|salto en largo,salto triple,salto de altura,salto con pértiga,lanzamiento de peso,lanzamiento de disco|lanzamiento de martillo,lanzamiento de jabalina,carrera de relevos,carrera de vallas,carrera de medio fondo,carrera de fondo|carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad|carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad,carrera de velocidad'
  ],

  /* ---------------- INSTRUMENTOS MUSICALES EXOTICOS ---------------- */
  ['instrumentos-exoticos-x', 'un instrumento musical exótico',
    'sitar,tabla,didgeridoo,balalaika,koto,shamisen,erhu,gaida,zarb,gaita|flauta de pan,zampoña,quena,tiple,cuatro,bandola,mando,arpa,arpa celta,arpa paraguaya|acordeón diatónico,acordeón cromático,bandoneón,armónica de boca,armónica cromática,armónica de tremolo,armónica de octava|violín eléctrico,guitarra eléctrica,bajo eléctrico,teclado,batería electrónica,sampler,drum machine,sequencer,sintetizador|saxofón,clarinete,ocarina,flauta dulce,flauta travesera,requinto,charango,bandurla,laúd|tamboril,bombo,caja,timbal,platillo,triángulo,maracas,claves,güiro,cajón|conga,bongó,timbal,tumbadora,quinto,requinto,redoblante,caja,platillo|tambora,albogue,charango,quena,zampoña,siku,tarka,pincullo,quena quenilla|arkilla,arkilla,arkilla,arkilla,arkilla,arkilla,arkilla,arkilla,arkilla,arkilla'
  ],

  /* ---------------- MONUMENTOS HISTORICOS ---------------- */
  ['monumentos-historicos-x', 'un monumento histórico',
    'gran pirámide de giza,jardines colgantes de babilonia,estatua de zeus en olimpia,templo de artemisa en éfeso,mausoleo de halicarnaso|coloso de rodas,faro de alejandría,gran muralla china,petra,coliseo,chichén itzá|machu picchu,taj mahal,cristo redentor,estatua de la libertad,torre eiffel,big ben,acrópolis,puerta de brandemburgo|estatua de david,fuente de trevi,puente de londres,ciudad prohibida,torre de pisa,alambra,basílica de san pedro,iglesia de san pedro|estatua de la libertad,empire state,puente de brooklyn,estatua de cristo,iglesia de san pedro|machu picchu,cristo redentor,iglesia de san pedro,basílica de san pedro|estatua de la libertad,puente golden gate,estatua de cristo,iglesia de san pedro|pyramide del louvre,arco del triunfo,notre dame,sainte chapelle|estatua de la libertad,puente de londres,big ben,torre de londres|estatua de la libertad,torre de pisa,coliseo,foro romano'
  ],

  /* ---------------- CIENCIA Y TECNOLOGIA ---------------- */
  ['ciencia-tecnologia-x', 'un término de ciencia o tecnología',
    'física,química,biología,astronomía,geología,meteorología,ecología,genética,biotecnología,nanotecnología|informática,programación,algoritmo,datos,red,inteligencia artificial,aprendizaje automático,big data,cloud computing,ciberseguridad|internet,web,sitio web,navegador,buscador,email,red social,blog,podcast,streaming|ordenador,tableta,smartphone,teclado,ratón,pantalla,impresora,escáner,cámara,micrófono|software,hardware,sistema operativo,aplicación,programa,fichero,carpeta,navegador,motor de búsqueda|robot,dron,satélite,sonda,telescopio,microscopio,laboratorio,experimento,investigación,descubrimiento|energía,electricidad,energía solar,energía eólica,energía nuclear,energía hidráulica,energía geotérmica,biocombustible|vacuna,antibiótico,medicina,enfermedad,virus,bacteria,infección,inmunidad,anticuerpo,genoma|árbol,planta,flor,fruta,semilla,raíz,tallo,hoja,raíz,célula'
  ],

  /* ---------------- COMIDAS DEL MUNDO ---------------- */
  ['comidas-mundo-x', 'un plato o comida del mundo',
    'pizza,pasta,hamburguesa,taco,sushi,curry,paella,wrap,taco,burrito|tacos,enchiladas,quesadillas,tamales,guacamole,salsa,chile,chorizo,paella,tortilla|paella,gazpacho,tortilla española,fabada,cocido,pulpo,calamares,gambas,langosta,camarón,mejillón|sushi,sashimi,ramen,udon,tempura,teriyaki,miso,soja,wasabi,jengibre,alga|curry,naan,samosa,tandoori,biryani,dahl,chutney,lassi,masala,garam masala|croissant,baguette,quiche,ratatouille,crème brûlée,foie gras,escargot,coq au vin,bouillabaisse|estofado,asado,empanada,choripán,asado,parrillada,churrasco,feijoada,moqueca,acarajé|dumpling,dim sum,bao,noodles,sopa,rollo primavera,rollo verano,rollo primavera|hamburguesa,hot dog,patatas fritas,ensalada,sopa,sándwich,wrap,burrito,taco,quesadilla'
  ],

  /* ---------------- BEBIDAS DEL MUNDO ---------------- */
  ['bebidas-mundo-x', 'una bebida del mundo',
    'agua,café,té,jugo,refresco,cerveza,vino,champaña,whisky,ron|vodka,gin,tequila,pisco,mezcal,brandy,coñac,licor,absenta,vermú|coca cola,pepsi,fanta,sprite,7up,mirinda,schweppes,tonic,agua tónica,agua mineral|leche,batido,licuado,smoothie,chocolate,malteada,frappe,café con leche,capuchino|mate,tereré,chicha,chicha morada,aguardiente,pisco sour,caipirinha,mojito,daiquiri|sangría,tinto de verano,rebujito,clara con limón,tinto,blanco,rosado,cava|whisky escocés,whisky irlandés,bourbon,tennessee,rye,canadiense,japonés,indio|cerveza lager,cerveza ale,cerveza stout,cerveza porter,cerveza wheat,cerveza pilsner,cerveza ipa,cerveza sour|té verde,té negro,té blanco,té oolong,té rojo,té de hierbas,tisana,infusión,mate,coca'
  ],

  /* ---------------- COLORES DEL MUNDO ---------------- */
  ['colores-mundo-x', 'un color',
    'rojo,azul,verde,amarillo,naranja,morado,rosa,negro,blanco,gris|marrón,beige,café,dorado,plateado,cobre,bronce,crema,hueso,marfil|turquesa,celeste,azul claro,azul oscuro,azul marino,azul cielo,azul eléctrico,azul real|verde claro,verde oscuro,verde bosque,verde esmeralda,verde lima,verde manzana,verde oliva,verde pistacho|naranja claro,naranja oscuro,naranja quemado,naranja calabaza,naranja mandarina|morado claro,morado oscuro,morado lila,morado violeta,morado púrpura,morado lavanda|rosa claro,rosa oscuro,rosa palo,rosa fucsia,rosa magenta,rosa burdeos|negro,blanco,gris claro,gris oscuro,gris plata,gris humo,gris perla,gris cemento|amarillo claro,amarillo oscuro,amarillo dorado,amarillo limón,amarillo canario,amarillo girasol|color,tono,matiz,matiz,matiz,matiz,matiz,matiz,matiz,matiz'
  ],

  /* ---------------- ANIMALES MARINOS EXOTICOS ---------------- */
  ['animales-marinos-exoticos-x', 'un animal marino exótico',
    'nautilo,calamar gigante,pez murciélago,pez roca,pez león,manta raya,pez globo,pez piedra,pez escorpión,pez rana|pez luna,pez sol,pez espada,pez vela,pez marlín,pez atún,pez bonito,pez jurel,pez caballa,pez sardina|pez anchova,pez boquerón,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha,pez lubina|pez dorada,pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha|pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha,pez lubina|pez dorada,pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha|pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha,pez lubina|pez dorada,pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha|pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha,pez lubina|pez dorada,pez mero,pez rape,pez lenguado,pez rombo,pez rodaballo,pez merluza,pez bacalao,pez salmón,pez trucha'
  ],

  /* ---------------- AVES EXOTICAS DEL MUNDO ---------------- */
  ['aves-exoticas-mundo-x', 'un ave exótica del mundo',
    'quetzal,albatros,cóndor,faisán,abejaruco,avutarda,alcaudón,paloma,gaviota,milano|colibrí,tucán,flamenco,pelícano,cisne,águila,halcón,búho,buitre,loro|periquito,guacamayo,cacatúa,ninfa,agapornis,amazona,cotorra,piquero,alcatraz,fragata|charrán,alca,arao,frailecillo,ostrero,avestruz,ñandú,emú,casuario,kiwi|pavo real,faisán,perdiz,codorniz,cacatúa,ninfa,agapornis,amazona,cotorra,piquero|alcatraz,fragata,charrán,alca,arao,frailecillo,ostrero,avestruz,ñandú,emú|casuario,kiwi,pavo real,faisán,perdiz,codorniz,cacatúa,ninfa,agapornis,amazona|cotorra,piquero,alcatraz,fragata,charrán,alca,arao,frailecillo,ostrero,avestruz|ñandú,emú,casuario,kiwi,pavo real,faisán,perdiz,codorniz,cacatúa,ninfa'
  ],

  /* ---------------- FRUTAS TROPICALES EXOTICAS ---------------- */
  ['frutas-tropicales-exoticas-x', 'una fruta tropical exótica',
    'rambután,carambola,lichi,caqui,mangostán,durian,salak,tamarillo,longan,feijoa|pitahaya,chirimoya,anona,guanábana,mamey,sapote,zapote,curuba,ufra,ingá|tuna,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo|granada,higo chumbo,dátil,higo,granada,higo chumbo,tuna,higo chumbo,dátil,higo'
  ],

  /* ---------------- DEPORTES DE INVIERNO ---------------- */
  ['deportes-invierno-x', 'un deporte de invierno',
    'esquí,snowboard,biatlón,combinada nórdica,salto,nórdico,curling,bobsleigh,luge,esquí de fondo|esquí alpino,esquí de travesía,esquí de montaña,esquí de velocidad,esquí de acrobacias,esquí de estilo libre,esquí de moguls,esquí de halfpipe,esquí de slopestyle,esquí de big air|patinaje artístico,patinaje de velocidad,patinaje de velocidad en pista corta,patinaje de velocidad en pista larga,patinaje de velocidad en pista corta,patinaje de velocidad en pista larga|hockey sobre hielo,hockey sobre patines,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy|bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy,bandy'
  ],

  /* ---------------- DEPORTES DE VERANO ---------------- */
  ['deportes-verano-x', 'un deporte de verano',
    'natación,atletismo,ciclismo,boxeo,voleibol,béisbol,golf,tenis,bádminton,tenis de mesa|surf,bodyboard,patinaje,gimnasia,escalada,lucha,pádel,squash,tenis de mesa,esgrima|atletismo,marcha,velocidad,salto,lanzamiento,decatlón,heptatlón,maratón,marcha atlética|formula 1,moto gp,nascarr,rally,enduro,motocross,triatlón,duatlón,ironman|pesca,caça,tiro con arco,tiro con pistola,esgrima,hípica,rodeo,balonmano|balonmano,polo acuático,waterpolo,fútbol sala,fútbol playa,ultimate,frisbee,disc golf,bowling|billar,snooker,críquet,rugby league,rugby union,fútbol americano,baloncesto|baloncesto,voleibol,voleibol playa,fútbol sala,balonmano,waterpolo,hockey sobre hierba|hockey sobre patines,patinaje,esquí,snowboard,biatlón,combinada nórdica,salto,nórdico|curling,bobsleigh,luge,esquí de fondo,esquí alpino,esquí de travesía,esquí de montaña,esquí de velocidad'
  ]

);

/* Evitar duplicados exactos entre categorías nuevas y existentes */
(function () {
  var vistos = {};
  var limpias = [];
  window.CATEGORIAS.forEach(function (c) {
    var id = c[0];
    if (vistos[id]) return;
    vistos[id] = true;
    limpias.push(c);
  });
  window.CATEGORIAS = limpias;
})();
