/* ==========================================================
   RESPUESTAS EXTRA (AMPLIACIÓN CURADA)
   ----------------------------------------------------------
   Añade respuestas reales y distintas a categorías que ya
   existen en el banco. No hay relleno ni duplicados.

   La barra | inicial coloca estas respuestas en el nivel 2,
   para no alterar el nivel 1 original.

   Formato: [id, "título", "nivel1|nivel2|nivel3|..."]
   Las respuestas repetidas se descartan automáticamente en
   questions.js.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- COLORES ---------------- */
  ['colores', 'un color',
    '|fucsia,añil,ocre,índigo,salmón,coral,oliva,bermellón,escarlata,malva,cian,magenta,aguamarina,ámbar,carmesí,esmeralda,turquesa,beige,granate,burdeos,lila,celeste,dorado,plateado,bronce,marfil,crema,hueso,perla,pizarra,terracota,mostaza,lavanda,melocotón,cereza,frambuesa,menta,limón,chocolate,café,tabaco,vino,arena'],

  /* ---------------- ANIMALES ---------------- */
  ['animales', 'un animal',
    '|capibara,perezoso,armadillo,pangolín,manatí,narval,beluga,morsa,foca,leopardo,guepardo,jaguar,puma,ocelote,serval,caracal,hiena,chacal,zorro,lobo,tejón,nutria,castor,marmota,ardilla,topo,murciélago,cebra,jirafa,elefante,bisonte,búfalo,alce,reno,yak,antílope,gacela,ñu,jabalí,ciervo,corzo,gamo,conejo,liebre,erizo,musaraña,comadreja,armiño,hurón'],

  /* ---------------- FRUTAS ---------------- */
  ['frutas', 'una fruta',
    '|kiwi,mango,melón,granada,higo,ciruela,papaya,maracuyá,pitahaya,lichi,caqui,níspero,rambután,carambola,guanábana,acerola,tamarindo,grosella,arándano,mora,frambuesa,mandarina,lima,pomelo,nectarina,albaricoque,durazno,coco,aguacate,chirimoya,membrillo,feijoa,durian,mangostán,longan,salak,tamarillo,plátano de canarias,pomelo rosado,manzana verde,pera conferencia,ciruela roja,cereza picota'],

  /* ---------------- VERDURAS ---------------- */
  ['verduras', 'una verdura',
    '|calabacín,berenjena,pimiento,judía verde,espinaca,brócoli,coliflor,calabaza,alcachofa,espárrago,puerro,remolacha,acelga,apio,berza,boniato,chirivía,endibia,escarola,nabo,rábano,apionabo,cardo,berro,canónigos,lechuga romana,repollo,col rizada,col morada,pak choi,okra,tupinambo,yuca,ñame,malanga,chayote,pepino,tomate,cebolla,ajo,zanahoria,guisante,haba,maíz'],

  /* ---------------- FLORES ---------------- */
  ['flores', 'una flor',
    '|orquídea,lirio,narciso,violeta,amapola,jazmín,lavanda,peonía,hortensia,camelia,edelweiss,loto,dalia,anémona,gladiolo,pasionaria,fresia,begonia,petunia,zinnia,azalea,buganvilla,geranio,azucena,tulipán,rosa,clavel,margarita,girasol,nomeolvides,pensamiento,campanilla,hibisco,jacinto,crisantemo,ciclamen,magnolia,verbena,caléndula'],

  /* ---------------- ÁRBOLES ---------------- */
  ['arboles', 'un árbol',
    '|cedro,abeto,álamo,sauce,fresno,secuoya,baobab,mangle,acacia,eucalipto,tejo,aliso,serbal,acebuche,alcornoque,ciprés,magnolia,laurel,naranjo,limonero,mandarino,melocotonero,peral,manzano,cerezo,albaricoquero,higuera,granado,olivo,encina,haya,roble,pino,abedul,castaño,nogal,avellano,tilo,arce,olmo,chopo,sabina,enebro,acebo'],

  /* ---------------- BEBIDAS ---------------- */
  ['bebidas', 'una bebida',
    '|gaseosa,limonada,batido,licuado,smoothie,cóctel,mojito,margarita,daiquiri,whisky,ron,vodka,ginebra,tequila,brandy,coñac,sake,soju,café con leche,cappuccino,latte,macchiato,americano,espresso,té helado,horchata,zumo de naranja,agua con gas,tónica,vermut,sidra,hidromiel,kombucha,kéfir,leche de almendra,chocolate caliente'],

  /* ---------------- DEPORTES ---------------- */
  ['deportes', 'un deporte',
    '|boxeo,esgrima,lucha,judô,karate,taekwondo,esquí,snowboard,patinaje,surf,remo,piragüismo,pilates,crossfit,parkour,escalada,alpinismo,senderismo,ciclismo de montaña,bádminton,tenis de mesa,hockey sobre hielo,hockey sobre hierba,waterpolo,rugby,béisbol,sóftbol,críquet,golf,bolos,billar,dardos,halterofilia,gimnasia artística,natación sincronizada,salto de trampolín,triatlón,pentatlón,decatlón,curling,luge,skeleton,biatlón,motociclismo,automovilismo,vela,kitesurf,paddle surf,skateboard,breakdance'],

  /* ---------------- INSTRUMENTOS ---------------- */
  ['instrumentos', 'un instrumento musical',
    '|violonchelo,contrabajo,trombón,tuba,fagot,oboe,órgano,sintetizador,teclado,ukelele,banjo,violín,laúd,arpa,gaita,maracas,triángulo,tambor,pandereta,güiro,bombo,castañuelas,clarinete,saxofón,flauta travesera,corneta,trompeta,trompa,xilófono,vibráfono,timbales,cajón flamenco,darbuka,sitar,bandurria,mandolina,acordeón,armónica,theremin'],

  /* ---------------- PROFESIONES ---------------- */
  ['profesiones', 'una profesión',
    '|veterinario,farmacéutico,contador,economista,psicólogo,trabajador social,periodista,escritor,artista,pintor,escultor,músico,cantante,bailarín,actor,actriz,director,productor,fotógrafo,programador,diseñador,arquitecto,electricista,fontanero,carpintero,albañil,peluquero,panadero,carnicero,pescadero,frutero,cocinero,camarero,recepcionista,bombero,policía,médico,enfermero,dentista,óptico,fisioterapeuta,nutricionista,abogado,juez,notario,profesor,maestro,traductor,bibliotecario,piloto,azafata,marinero,agricultor,ganadero,jardinero,minero,soldador,mecánico'],

  /* ---------------- PECES ---------------- */
  ['peces', 'un pez',
    '|bacalao,lubina,dorada,besugo,boquerón,rape,lenguado,rodaballo,caballa,mero,pez espada,pez luna,pez globo,anguila,morena,celacanto,esturión,salmón,trucha,sardina,atún,anchoa,arenque,jurel,corvina,pargo,dentón,halibut,solla,platija,congrio,bonito,pez volador,pez payaso,pez ángel,pez cirujano,pez loro,pez martillo,tiburón blanco,tiburón ballena,raya,mantarraya'],

  /* ---------------- AVES ---------------- */
  ['aves', 'un ave',
    '|halcón,búho,loro,cuervo,buitre,cigüeña,flamenco,pelícano,tucán,colibrí,quetzal,albatros,cóndor,faisán,abejaruco,avutarda,alcaudón,paloma,gaviota,águila,halcón peregrino,milano,búho real,lechuza,mochuelo,cárabo,urraca,grajilla,arrendajo,jilguero,verderón,golondrina,vencejo,mirlo,zorzal,petirrojo,ruiseñor,canario,periquito,cacatúa,guacamayo,avestruz,emú,ñandú,pingüino,frailecillo,alcatraz,pardela,cormorán'],

  /* ---------------- MAMÍFEROS ---------------- */
  ['mamiferos', 'un mamífero',
    '|jirafa,cebra,rinoceronte,hipopótamo,gorila,chimpancé,orangután,babuino,macaco,lémur,koala,canguro,wombat,ornitorrinco,equidna,hurón,comadreja,armiño,marta,tejón,nutria,castor,lince,camello,dromedario,llama,alpaca,vicuña,guanaco,okapi,tapir,quokka,numbat,saiga,gerenuk,fosa,capibara,perezoso,armadillo,pangolín,manatí,narval,beluga,morsa,foca,león marino,elefante,bisonte,búfalo,alce,reno,yak,jabalí,ciervo,corzo,gamo,antílope,gacela,ñu,hiena,chacal,zorro,lobo,oso pardo,oso polar,oso panda,mapache,mofeta,erizo,topo,musaraña,murciélago,ardilla,marmota,conejo,liebre'],

  /* ---------------- REPTILES ---------------- */
  ['reptiles', 'un reptil',
    '|iguana,camaleón,pitón,boa,víbora,gecko,tortuga,dragón de komodo,caimán,anaconda,varano,tuátara,eslizón,basilisco,mamba negra,cobra,crotalo,cocodrilo,lagarto,lagartija,salamanquesa,galápago,tortuga laúd,tortuga carey,tortuga verde,iguana marina,culebra,víbora hocicuda,pitón real,boa constrictor'],

  /* ---------------- INSECTOS ---------------- */
  ['insectos', 'un insecto',
    '|escarabajo,cucaracha,grillo,libélula,mariquita,saltamontes,avispa,abejorro,termita,polilla,mantis religiosa,lucano,ciervo volante,escarabajo pelotero,efímera,chinche,avispón,cochinilla,moscardón,mosquito,mosca,abeja,hormiga,mariposa,oruga,pulgón,cigarra,luciérnaga,tijereta,piojo,pulga,garrapata,ácaro,ciempiés,milpiés'],

  /* ---------------- FELINOS ---------------- */
  ['felinos', 'un felino',
    '|guepardo,pantera,lince,jaguar,tigre,serval,ocelote,caracal,leopardo de las nieves,manul,margay,tigrillo,lince ibérico,gato montés,leopardo nublado,jaguarundí,puma,león,leopardo,tigre de bengala,tigre de sumatra,gato doméstico,gato siamés,gato persa'],

  /* ---------------- RAZAS DE PERRO ---------------- */
  ['razas-perro', 'una raza de perro',
    '|beagle,husky,golden retriever,boxer,dálmata,yorkshire,schnauzer,rottweiler,dóberman,galgo,pitbull,akita,san bernardo,terrier,mastín,shar pei,bichón,podenco,perro de agua,dingo,azawakh,labrador,pastor alemán,border collie,cocker spaniel,bulldog,caniche,chihuahua,pomerania,samoyedo,malamute,collie,setter,braco,perdiguero,sabueso,lebrel,dogo argentino,cane corso,bull terrier,jack russell'],

  /* ---------------- RAZAS DE GATO ---------------- */
  ['razas-gato', 'una raza de gato',
    '|siberiano,maine coon,británico,azul ruso,somalí,abisinio,ragdoll,scottish fold,noruego del bosque,manx,bombay,burmés,ocicat,turco van,savannah,korat,laperm,munchkin,singapura,devon rex,persa,siamés,bengalí,angora,esfinge,american shorthair,oriental,birmano,chartreux'],

  /* ---------------- MARISCOS ---------------- */
  ['mariscos', 'un marisco',
    '|calamar,cangrejo,langosta,berberecho,vieira,bogavante,nécora,centollo,buey de mar,caracol de mar,percebe,erizo de mar,navaja,ostra,coquina,oreja de mar,pepino de mar,gamba,langostino,mejillón,almeja,pulpo,cigala,camarón,quisquilla,cangrejo azul,cangrejo de río,krill'],

  /* ---------------- SETAS ---------------- */
  ['setas', 'una seta',
    '|shiitake,portobello,rebozuelo,amanita,trufa,cola de pavo,seta de cardo,oronja,trompeta de los muertos,lepista,marzuelo,colmenilla,amanita muscaria,oreja de judas,pie azul,nízcalo,champiñón,boletus,maitake,enoki,shimeji,reishi,chaga,cordyceps,gírgola,senderuela,angula de monte,seta de san jorge'],

  /* ---------------- POSTRES ---------------- */
  ['postres', 'un postre',
    '|flan,natillas,arroz con leche,crema catalana,tarta de santiago,churros,buñuelos,torrija,roscón de reyes,pan de muerto,galleta,magdalena,madeleine,éclair,profiterol,mousse,tiramisú,cheesecake,brownie,cookie,cupcake,macaron,merengue,pavlova,strudel,baklava,dulce de leche,alfajor,quesillo,budín,pudín,clafoutis,crêpe'],

  /* ---------------- DULCES ---------------- */
  ['dulces', 'un dulce',
    '|churro,buñuelo,torrija,roscón de reyes,pan de muerto,galleta,magdalena,madeleine,éclair,profiterol,mousse,tiramisú,cheesecake,brownie,cookie,cupcake,macaron,merengue,pavlova,strudel,baklava'],

  /* ---------------- COMIDAS DE ESPAÑA ---------------- */
  ['comidas-espana', 'una comida típica de España',
    '|paella,tortilla de patatas,gazpacho,salmorejo,fabada,cocido madrileño,pulpo a la gallega,jamón ibérico,croquetas,patatas bravas,pimientos de padrón,calamares a la romana,bacalao al pil-pil,marmitako,migas,callos,rabo de toro,cochinillo asado,arroz negro,escalivada,esqueixada,trinxat,caldereta,pisto,albóndigas,lentejas,garbanzos con espinacas,sopa de ajo,torrijas,churros con chocolate,crema catalana,tarta de santiago'],

  /* ---------------- COMIDAS DEL MUNDO ---------------- */
  ['comidas-mundo', 'una comida del mundo',
    '|curry,ramen,pho,pad thai,nasi goreng,dim sum,empanada,arepa,falafel,hummus,shawarma,kebab,cuscús,tajín,harira,meze,asado,feijoada,churrasco,ceviche,lomo saltado,anticucho,causa,sushi,sashimi,tacos,burrito,quesadilla,enchilada,mole,pasta carbonara,pizza,lasaña,risotto,paella,goulash,stroganoff,fish and chips,shepherd pie,croissant'],

  /* ---------------- QUESOS ---------------- */
  ['quesos', 'un tipo de queso',
    '|cabrales,idiazábal,mahón,tetilla,zamorano,roncal,roquefort,camembert,brie,gorgonzola,parmesano,mozzarella,ricotta,feta,gouda,edam,emmental,gruyère,pecorino,provolone,fontina,taleggio,mascarpone,burrata,queso de bola,queso panela,queso fresco,queso blanco,manchego'],

  /* ---------------- CARNES ---------------- */
  ['carnes', 'un tipo de carne',
    '|conejo,venado,jabalí,bisonte,alce,reno,caribú,yak,búfalo,salchicha,chorizo,morcilla,salami,pepperoni,jamón,tocino,panceta,lomo,solomillo,filete,chuletón,entrecot,filete mignon,costilla,pecho,muslo,ala,pechuga,pollo,pavo,ternera,cerdo,cordero'],

  /* ---------------- TAPAS ---------------- */
  ['tapas', 'una tapa',
    '|calamares,pulpo,gambas,queso,albóndigas,pimientos del padrón,boquerones,anchoas,tortilla de camarones,gilda,oreja,caracoles,morcilla,huevos rotos,pescaíto frito,huevas,mojama,ortiguillas,papas aliñás,soldaditos de pavía,tortilla española,croquetas,patatas bravas,aceitunas,jamón'],

  /* ---------------- LEGUMBRES ---------------- */
  ['legumbres', 'una legumbre',
    '|alubia,soja,haba,altramuz,azuki,lenteja,guisante,garbanzo,caupí,algarroba,judía verde,judía blanca,judía negra,judía roja,judía pinta,judía canaria,lenteja roja,lenteja beluga,soja verde,guisante negro'],

  /* ---------------- CEREALES ---------------- */
  ['cereales', 'un cereal',
    '|cebada,centeno,mijo,sorgo,quinoa,amaranto,espelta,kamut,triticale,teff,fonio,alforfón,arroz,trigo,maíz,avena'],

  /* ---------------- ESPECIAS ---------------- */
  ['especias', 'una especia',
    '|azafrán,comino,pimentón,pimienta negra,pimienta blanca,pimienta roja,canela,nuez moscada,clavo,cardamomo,cúrcuma,jengibre,mostaza,anís,hinojo,alcaravea,eneldo,mejorana,orégano,tomillo,romero,laurel,perejil,cilantro,albahaca,vainilla,sumac,zaatar'],

  /* ---------------- HIERBAS AROMÁTICAS ---------------- */
  ['hierbas-aromaticas', 'una hierba aromática',
    '|albahaca,orégano,tomillo,romero,laurel,perejil,cilantro,eneldo,estragón,mejorana,menta,hierbabuena,salvia,melisa,ajedrea,hisopo,lavanda,limoncillo,verbena,camomila'],

  /* ---------------- PLANTAS ---------------- */
  ['plantas', 'una planta',
    '|helecho,musgo,liquen,alga,ortiga,trébol,diente de león,amapola,margarita,tulipán,rosa,girasol,lavanda,menta,romero,tomillo,salvia,albahaca,orégano,perejil,cactus,suculenta,bambú,caña,junco,loto,nentúfar,helecho arborescente'],

  /* ---------------- FRUTAS TROPICALES ---------------- */
  ['frutas-tropicales', 'una fruta tropical',
    '|guanábana,acerola,tamarindo,maracuyá,grosella,arándano,mora,frambuesa,mandarina,lima,pomelo,nectarina,albaricoque,durazno,coco,aguacate,chirimoya,pitahaya,lichi,rambután,carambola,mangostán,durian,longan,salak,tamarillo,feijoa,cupuaçu,jabuticaba'],

  /* ---------------- PESCADOS ---------------- */
  ['pescados', 'un pescado',
    '|merluza,bacalao,lubina,dorada,besugo,boquerón,rape,lenguado,rodaballo,caballa,mero,pez espada,anguila,salmón,trucha,sardina,atún,anchoa,arenque,jurel,corvina,pargo,dentón,halibut,solla,platija,congrio,bonito,raya'],

  /* ---------------- ANIMALES MARINOS ---------------- */
  ['animales-marinos', 'un animal marino',
    '|foca,orca,cangrejo,estrella de mar,caballito de mar,medusa,tortuga marina,pez espada,calamar,langosta,morena,erizo de mar,narval,beluga,manatí,pez martillo,pez luna,rape,rodaballo,celacanto,isópodo gigante,nudibranquio,tunicado,pulpo,gamba,mejillón,almeja'],

  /* ---------------- ANIMALES SALVAJES ---------------- */
  ['animales-salvajes', 'un animal salvaje',
    '|jirafa,mono,zorro,serpiente,cebra,rinoceronte,hipopótamo,cocodrilo,gorila,pantera,guepardo,chimpancé,puma,ocelote,armadillo,perezoso,tapir,okapi,pangolín,gerenuk,saiga,quokka,fosa,numbat,hiena,lobo,oso,jabalí,ciervo,antílope'],

  /* ---------------- AVES MARINAS ---------------- */
  ['aves-marinas', 'un ave marina',
    '|gaviota,pelícano,alcatraz,fragata,pardela,cormorán,frailecillo,pingüino,albatroz,charrán,ostrero,garza real'],

  /* ---------------- PLANTAS MEDICINALES ---------------- */
  ['plantas-medicinales', 'una planta medicinal',
    '|manzanilla,menta,melisa,valeriana,pasiflora,tila,romero,tomillo,salvia,orégano,albahaca,lavanda,equinácea,caléndula,árnica,hipérico,aloe vera,ginseng,jengibre,cúrcuma,cardo mariano,diente de león,ortiga,cola de caballo'],

  /* ---------------- FRUTOS SECOS ---------------- */
  ['frutos-secos', 'un fruto seco',
    '|pistacho,anacardo,castaña,pipa,piñón,macadamia,pecana,nuez de brasil,dátil,bellota,almendra,avellana,nuez,cacahuete,semilla de girasol,semilla de calabaza,semilla de sésamo,semilla de amapola,semilla de lino,semilla de chía'],

  /* ---------------- VERDURAS DE HOJA ---------------- */
  ['verduras-de-hoja', 'una verdura de hoja',
    '|endibia,escarola,rúcula,berro,hoja de mostaza,hoja de nabo,hoja de remolacha,acelga,espinaca,lechuga,repollo,col rizada,col morada,col china,pak choi,canónigos,berza,coliflor,brócoli'],

  /* ---------------- VERDURAS DE RAÍZ ---------------- */
  ['verduras-de-raiz', 'una verdura de raíz',
    '|zanahoria,nabo,rábano,remolacha,chirivía,apionabo,puerro,cebolla,ajo,boniato,yuca,ñame,malanga,tupinambo,perejil de raíz'],

  /* ---------------- TUBÉRCULOS ---------------- */
  ['tuberos', 'un tubérculo',
    '|papa,patata,boniato,batata,yuca,ñame,malanga,tupinambo,chayote,oca,ulluco,mashua,arracacha'],

  /* ---------------- COMIDA RÁPIDA ---------------- */
  ['comida-rapida', 'comida rápida',
    '|nuggets,patatas fritas,aros de cebolla,palitos de mozzarella,alitas de pollo,dedos de queso,jalapeños rellenos,samosa,empanada,rollito de primavera,sushi,sashimi,wonton,gyozas,dumplings,bao,ramen,udon,soba,pad thai,hamburguesa,perrito caliente,pizza'],

  /* ---------------- PLATILLOS ---------------- */
  ['platillos', 'un platillo',
    '|fabada,cocido madrileño,migas,ensaladilla rusa,salmorejo,callos,rabo de toro,cochinillo,arroz negro,escalivada,olla podrida,farinato,pantruque,trinxat,caldereta de langosta,pulpo a la gallega,patatas bravas,pescado frito,empanada gallega'],

  /* ---------------- BEBIDAS CALIENTES ---------------- */
  ['bebidas-calientes', 'una bebida caliente',
    '|té de hierbas,té de manzanilla,té de menta,té de tilo,té de valeriana,té de pasiflora,té de azahar,té de jazmín,té verde,té negro,té blanco,té oolong,té pu-erh,té matcha,té chai,té rooibos,té de frutas,té de especias,té de jengibre,café,chocolate caliente'],

  /* ---------------- BEBIDAS FRÍAS ---------------- */
  ['bebidas-frias', 'una bebida fría',
    '|batido,licuado,smoothie,cóctel,mojito,margarita,daiquiri,whisky sour,tequila sunrise,sex on the beach,long island,mai tai,singapore sling,pisco sour,caipirinha,caipiroska,bellini,kir royal,aperol spritz,horchata,limonada,zumo de naranja,agua con gas'],

  /* ---------------- BEBIDAS ALCOHÓLICAS ---------------- */
  ['bebidas-alcoholicas', 'una bebida alcohólica',
    '|coñac,pisco,sake,soju,whisky,ron,vodka,ginebra,tequila,brandy,vermut,sidra,hidromiel,cerveza,vino,cava,champán,licor,absenta'],

  /* ---------------- CARNES ROJAS ---------------- */
  ['carnes-rojas', 'una carne roja',
    '|ternera,res,vaca,buey,cerdo,cordero,conejo,venado,jabalí,bisonte,alce,reno,caribú,yak,búfalo'],

  /* ---------------- CARNES BLANCAS ---------------- */
  ['carnes-blancas', 'una carne blanca',
    '|pollo,pavo,conejo,ternera,pato,ganso,codorniz,faisán'],

  /* ---------------- PESCADO BLANCO ---------------- */
  ['pescado-blanco', 'un pescado blanco',
    '|merluza,bacalao,mero,gallo,lenguado,rodaballo,rape,corvina,dorada,lubina,solla,platija,halibut'],

  /* ---------------- PESCADO AZUL ---------------- */
  ['pescado-azul', 'un pescado azul',
    '|salmón,sardina,caballa,boquerón,atún,anchoa,arenque,jurel,bonito,pez espada,trucha'],

  /* ---------------- FRUTOS DEL MAR ---------------- */
  ['frutos-del-mar', 'un fruto del mar',
    '|vieira,bogavante,nécora,centollo,buey de mar,caracol de mar,percebe,erizo de mar,navaja,coquina,oreja de mar,pepino de mar,gamba,langostino,mejillón,almeja,pulpo,calamar,ostra'],

  /* ---------------- VERDURAS DE INVIERNO ---------------- */
  ['verduras-de-invierno', 'una verdura de invierno',
    '|col blanca,col rizada,col morada,repollo,berza,acelga,espinaca,puerro,apio,nabo,rábano,remolacha,zanahoria,calabaza,boniato,alcachofa,cardo,endibia,escarola'],

  /* ---------------- VERDURAS DE VERANO ---------------- */
  ['verduras-de-verano', 'una verdura de verano',
    '|tomate,pepino,pimiento,calabacín,berenjena,judía verde,guisante,maíz,lechuga,cebolla,ajo,remolacha,zanahoria,calabaza,espárrago,alcachofa'],

  /* ---------------- VERDURAS DE OTOÑO ---------------- */
  ['verduras-de-otoño', 'una verdura de otoño',
    '|calabaza,boniato,seta,champiñón,castaña,zanahoria,remolacha,puerro,apio,nabo,rábano,col rizada,col morada,espinaca,acelga,endibia'],

  /* ---------------- VERDURAS DE PRIMAVERA ---------------- */
  ['verduras-de-primavera', 'una verdura de primavera',
    '|espárrago,guisante,haba,alcachofa,lechuga,espinaca,acelga,rúcula,berro,canónigo,cebolla,nabo,rábano,zanahoria,calabacín'],

  /* ---------------- LEGUMBRES DE INVIERNO ---------------- */
  ['legumbres-de-invierno', 'una legumbre de invierno',
    '|lenteja,garbanzo,alubia,haba,guisante,soja,altramuz,azuki,judía blanca,judía negra,judía roja'],

  /* ---------------- LEGUMBRES DE VERANO ---------------- */
  ['legumbres-de-verano', 'una legumbre de verano',
    '|judía verde,guisante,haba,alubia,lenteja,garbanzo,soja,azuki,altramuz,caupí,algarroba']
);
