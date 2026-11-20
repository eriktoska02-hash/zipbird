/* ==========================================================
   BANCO DE RESPUESTAS · ANIMALES Y NATURALEZA
   ----------------------------------------------------------
   Formato de cada categoría:
     [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]

   · Los niveles van de MÁS común (nivel 1) a MENOS conocida (nivel 5).
   · Dentro de un nivel, las respuestas se separan por comas.
   · Los sinónimos se separan con ~  (ej: ordenador~computadora)
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['colores', 'un color',
    'rojo,azul,verde,amarillo,negro,blanco|gris,naranja,rosa,morado,violeta,marrón|celeste,turquesa,dorado,plateado,beige,lila,granate|fucsia,añil,ocre,índigo,salmón,coral,oliva,bermellón|escarlata,malva,chartreuse,cian,magenta,aquamarina,ámbar,carmesí'],

  ['animales', 'un animal',
    'perro,gato,caballo,vaca,cerdo,gallina|oveja,cabra,conejo,pájaro,león,elefante,ratón,tigre|jirafa,mono,oso,lobo,zorro,serpiente,águila,tortuga,ballena,delfín|hurón,comadreja,lince,avestruz,camello,rinoceronte,hipopótamo,pingüino,koala,canguro|ornitorrinco,armiño,musaraña,okapi,tapir,quokka,numbat,saiga,gerenuk,fosa'],

  ['animales-voladores', 'un animal que vuela',
    'pájaro,águila,paloma,gaviota,murciélago|halcón,búho,loro,cuervo,mariposa,abeja,moscón|colibrí,buitre,flamenco,pelícano,cigüeña,libélula,mariquita|quetzal,albatros,cóndor,tucán,faisán,lucana|abejaruco,chotacabras,piquituerto,avutarda,cernícalo,alcaudón'],

  ['animales-marinos', 'un animal marino',
    'delfín,tiburón,ballena,pulpo,pez|foca,orca,cangrejo,estrella de mar,caballito de mar,medusa|tortuga marina,pez espada,calamar,langosta,morena,erizo de mar|narval,beluga,manatí,pez martillo,pez luna,rape,rodaballo|celacanto,pez abisal,isópodo gigante,nudibranquio,pejeperro,tunicado'],

  ['animales-granja', 'un animal de granja',
    'vaca,cerdo,gallina,oveja,caballo|cabra,pato,ganso,conejo,burro,pavo|pavo real,codorniz,faisán,llama,alpaca,mula|búfalo,avestruz,ñandú,emú,buey,ternero|gallina de guinea,yak,dromedario,babirusa,cobaya'],

  ['animales-salvajes', 'un animal salvaje',
    'león,elefante,tigre,oso,lobo|jirafa,mono,zorro,serpiente,cebra,rinoceronte|hipopótamo,cocodrilo,gorila,pantera,guepardo,chimpancé|puma,ocelote,armadillo,perezoso,tapir,okapi|pangolín,gerenuk,saiga,quokka,fosa,numbat'],

  ['aves', 'un ave',
    'águila,paloma,gaviota,búho|halcón,loro,cuervo,buitre,cigüeña,flamenco|pelícano,tucán,colibrí,avestruz,pavo real,faisán|quetzal,albatros,cóndor,kiwi,avutarda|abejaruco,chotacabras,piquituerto,alcaudón,chocha,picapinos'],

  ['insectos', 'un insecto',
    'mosca,abeja,hormiga,mariposa,mosquito|escarabajo,cucaracha,grillo,libélula,mariquita,saltamontes|avispa,abejorro,termita,polilla,mantis religiosa|lucana,ciervo volante,escarabajo pelotero,efímera,chinche|escarabajo joya,avispón asiático,cochinilla,moscardón,libélula tigre'],

  ['peces', 'un pez',
    'sardina,atún,merluza,salmón,trucha|bacalao,lubina,dorada,besugo,boquerón|rape,lenguado,rodaballo,caballa,mero,pez espada|gallo,pez luna,pez globo,anguila,morena|celacanto,pez abisal,pez remo,pez dragón,esturión'],

  ['reptiles', 'un reptil',
    'serpiente,lagartija,tortuga,cocodrilo,lagarto|iguana,camaleón,pitón,boa,víbora,gecko|tortuga gigante,dragón de komodo,caimán,anaconda,varano|tuátara,eslizón,basilisco,serpiente coral|mamba negra,serpiente de cascabel,cocodrilo del Nilo,matamata,bungarus'],

  ['felinos', 'un felino',
    'gato,león,tigre,leopardo,puma|guepardo,pantera,lince,jaguar,tigre de bengala|serval,ocelote,caracal,leopardo de las nieves,manul|margay,tigrillo,lince ibérico,gato montés|gato de patas negras,oncilla,leopardo nublado,jaguarundí'],

  ['razas-perro', 'una raza de perro',
    'labrador,pastor alemán,bulldog,caniche,chihuahua|beagle,husky,golden retriever,boxer,dálmata,yorkshire|schnauzer,rottweiler,dóberman,galgo,pitbull,akita|san bernardo,terrier,mastín,shar pei,bichón|podenco,presacanario,perro de agua,dingo,azawakh'],

  ['razas-gato', 'una raza de gato',
    'siamés,persa,angora,bengalí,esfinge|siberiano,maine coon,británico,azul ruso,somalí|abisinio,ragdoll,scottish fold,noruego del bosque,manx|bombay,burmés,ocicat,turco van,savannah|korat,laperm,munchkin,singapura,devon rex'],

  ['frutas', 'una fruta',
    'manzana,plátano,naranja,fresa,uva|pera,melocotón,piña,sandía,cereza,limón|kiwi,mango,melón,granada,higo,ciruela|papaya,maracuyá,pitahaya,lichi,caqui,níspero|rambután,carambola,guanábana,acerola,tamarindo'],

  ['verduras', 'una verdura',
    'tomate,cebolla,lechuga,zanahoria,pepino|calabacín,berenjena,pimiento,judía verde,espinaca,brócoli|coliflor,calabaza,alcachofa,espárrago,puerro,remolacha|acelga,apio,berza,coles de bruselas,pimiento del padrón|boniato,chirivía,endibia,escarola,tupinambo'],

  ['frutos-secos', 'un fruto seco',
    'nuez,almendra,cacahuete,avellana|pistacho,anacardo,castaña,pipa,piñón|macadamia,pecana,nuez de brasil,dátil|bellota,semilla de girasol,semilla de calabaza,castaña pilonga|almendra marcona,nuez de nogal,piñón mediterráneo,avellana tostada'],

  ['legumbres', 'una legumbre',
    'lenteja,garbanzo,judía,guisante|alubia,soja,haba,altramuz|azuki,lenteja roja,guisante negro,judía mung|caupí,algarroba,soja verde,lenteja beluga'],

  ['pescados', 'un pescado',
    'atún,merluza,sardina,salmón,bacalao|dorada,lubina,trucha,boquerón,caballa|rape,lenguado,rodaballo,mero,pez espada|gallo,anguila,morena,pez luna,esturión|celacanto,pez remo,pez dragón,pez abisal,marlin'],

  ['mariscos', 'un marisco',
    'gamba,langostino,mejillón,almeja,pulpo|calamar,cangrejo,langosta,berberecho,vieira|bogavante,nécora,centollo,buey de mar,caracol de mar|percebe,erizo de mar,navaja,ostra,coquina|oreja de mar,pepino de mar,babosa de mar,limaco de mar'],

  ['setas', 'una seta',
    'champiñón,boletus,níscalo|shiitake,portobello,rebozuelo,amanita|trufa,cola de pavo,seta de cardo,oronja|trompeta de los muertos,lepista,hydnum,marzuelo|colmenilla,amanita muscaria,oreja de judas,pie azul'],

  ['flores', 'una flor',
    'rosa,margarita,tulipán,girasol,clavel|orquídea,lirio,narciso,violeta,amapola|jazmín,lavanda,peonía,hortensia,camelia|edelweiss,loto,dalia,anémona,gladiolo|pasionaria,ixora,clivia,fresia,nemophila'],

  ['arboles', 'un árbol',
    'pino,roble,encina,olivo,naranjo|chopo,abedul,haya,castaño,almendro|cedro,abeto,álamo,sauce,fresno|secuoya,baobab,mangle,acacia,eucalipto|tejo,aliso,serbal,acebuche,alcornoque'],

  ['plantas', 'una planta',
    'cactus,helecho,geranio,romero,albahaca|lavanda,tomillo,hiedra,palmera,bambú|bonsái,orquídea,suculenta,begonia,fucsia|drosera,dionea,heliconia,protea,strelitzia|welwitschia,rafflesia,Victoria amazónica,hydnora']

);
