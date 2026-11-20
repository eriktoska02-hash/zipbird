/* ==========================================================
   BANCO MASIVO · CIENCIA Y NATURALEZA
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- LUNAS DEL SISTEMA SOLAR ---------------- */
  ['lunas-sistema-solar', 'una luna del sistema solar',
    'luna,Ío,europa,ganímedes,calisto|titán,encélado,mimas,tetis,dione|rea,jápeto,tritón,caronte,fobos|deimos,miranda,ariel,umbriel,titania|oberón'],

  /* ---------------- MISIONES ESPACIALES ---------------- */
  ['misiones-espaciales', 'una misión espacial',
    'apolo 11,apolo 13,gemini,mercury,voyager 1|voyager 2,pioneer,hubble,james webb,cassini|galileo,juno,new horizons,curiosity,perseverance|sojourner,sputnik 1,vostok 1,artemis,crew dragon'],

  /* ---------------- TELESCOPIOS ---------------- */
  ['telescopios', 'un telescopio famoso',
    'hubble,james webb,keck,arecibo,alma|vlt,chandra,spitzer,compton,fermi|gaia,tess'],

  /* ---------------- UNIDADES DEL SI ---------------- */
  ['unidades-si', 'una unidad del sistema internacional',
    'metro,kilogramo,segundo,amperio,kelvin|mol,candela,newton,julio,vatio|pascal,hercio,culombio,voltio,ohmio|faradio,tesla,weber,siemens,lumen|lux,becquerel,gray,sievert,katal'],

  /* ---------------- MAGNITUDES FÍSICAS ---------------- */
  ['magnitudes-fisicas', 'una magnitud física',
    'longitud,masa,tiempo,temperatura,corriente eléctrica|cantidad de sustancia,intensidad luminosa,velocidad,aceleración,fuerza|energía,potencia,presión,densidad,volumen|trabajo,calor,frecuencia,carga eléctrica,resistencia'],

  /* ---------------- PARTÍCULAS SUBATÓMICAS ---------------- */
  ['particulas-subatomicas', 'una partícula subatómica',
    'protón,neutrón,electrón,neutrino,fotón|gluón,quark,bosón de higgs,muón,tau|positrón,antiprotón'],

  /* ---------------- LEYES FÍSICAS ---------------- */
  ['leyes-fisicas', 'una ley física',
    'gravedad,inercia,acción-reacción,conservación de la energía,conservación de la masa|termodinámica,ley de hooke,ley de ohm,ley de coulomb,ley de faraday|ley de snell,principio de bernoulli'],

  /* ---------------- GRUPOS DE LA TABLA PERIÓDICA ---------------- */
  ['grupos-tabla-periodica', 'un grupo de la tabla periódica',
    'alcalinos,alcalinotérreos,metales de transición,postransición,metaloides|no metales,halógenos,gases nobles,lantánidos,actínidos|metales,bloque s,bloque p,bloque d,bloque f|tierras raras,calcógenos,nitrogenoides'],

  /* ---------------- MINERALES ---------------- */
  ['minerales', 'un mineral',
    'cuarzo,feldespato,mica,calcita,dolomita|yeso,halita,azufre,grafito,diamante|corindón,hematita,magnetita,pirita,galena|esfalerita,cinabrio,bauxita,olivino,piroxeno|anfíbol,turmalina,topacio,zafiro,rubí'],

  /* ---------------- ALEACIONES ---------------- */
  ['aleaciones', 'una aleación',
    'acero,bronce,latón,alpaca,duraluminio|amalgama,peltre,zamak,inconel,constantán|níquel-cromo,oro blanco'],

  /* ---------------- ÁCIDOS ---------------- */
  ['acidos', 'un ácido',
    'clorhídrico,sulfúrico,nítrico,fosfórico,carbónico|acético,cítrico,láctico,fórmico,oxálico|málico,tartárico,benzoico,salicílico,acetilsalicílico'],

  /* ---------------- GASES ---------------- */
  ['gases', 'un gas',
    'oxígeno,nitrógeno,hidrógeno,helio,neón|argón,criptón,xenón,radón,cloro|flúor,metano,propano,butano,dióxido de carbono|monóxido de carbono,ozono,amoniaco'],

  /* ---------------- METALES ---------------- */
  ['metales', 'un metal',
    'hierro,cobre,aluminio,zinc,plomo|estaño,níquel,cromo,manganeso,titanio|tungsteno,platino,oro,plata,mercurio|uranio,cobalto,molibdeno,vanadio,circonio'],

  /* ---------------- TIPOS DE REACCIÓN QUÍMICA ---------------- */
  ['tipos-reaccion', 'un tipo de reacción química',
    'síntesis,descomposición,sustitución,doble sustitución,combustión|neutralización,oxidación,reducción,precipitación,polimerización'],

  /* ---------------- ORGÁNULOS CELULARES ---------------- */
  ['organulos', 'un orgánulo celular',
    'núcleo,mitocondria,ribosoma,retículo endoplasmático,aparato de golgi|lisosoma,peroxisoma,vacuola,cloroplasto,centríolo|citoesqueleto,membrana plasmática,nucleolo,vesícula,pared celular'],

  /* ---------------- TEJIDOS ---------------- */
  ['tejidos', 'un tejido del cuerpo humano',
    'epitelial,conectivo,muscular,nervioso,óseo|cartilaginoso,sanguíneo,adiposo,linfático,glandular'],

  /* ---------------- SISTEMAS DEL CUERPO ---------------- */
  ['sistemas-cuerpo', 'un sistema del cuerpo humano',
    'digestivo,respiratorio,circulatorio,nervioso,endocrino|inmunitario,linfático,urinario,reproductor,muscular|esquelético'],

  /* ---------------- MÚSCULOS ---------------- */
  ['musculos', 'un músculo del cuerpo humano',
    'bíceps,tríceps,deltoides,pectoral,abdominal|dorsal,glúteo,cuádriceps,isquiotibial,gastrocnemio|sóleo,trapecio,esternocleidomastoideo,masetero,diafragma|corazón,lengua,orbicular,temporal,occipital'],

  /* ---------------- GLÁNDULAS ---------------- */
  ['glandulas', 'una glándula del cuerpo humano',
    'hipófisis,tiroides,paratiroides,suprarrenal,páncreas|ovario,testículo,próstata,pineal,timo|salival,lagrimal'],

  /* ---------------- HORMONAS ---------------- */
  ['hormonas', 'una hormona',
    'insulina,glucagón,tiroxina,cortisol,adrenalina|noradrenalina,testosterona,estrógeno,progesterona,prolactina|oxitocina,melatonina,serotonina,dopamina,leptina'],

  /* ---------------- ENZIMAS ---------------- */
  ['enzimas', 'una enzima',
    'amilasa,lipasa,proteasa,pepsina,tripsina|lactasa,catalasa,adn polimerasa,arn polimerasa,helicasa'],

  /* ---------------- VITAMINAS ---------------- */
  ['vitaminas', 'una vitamina',
    'vitamina a,vitamina b1,vitamina b2,vitamina b3,vitamina b6|vitamina b12,vitamina c,vitamina d,vitamina e,vitamina k|ácido fólico,biotina,ácido pantoténico'],

  /* ---------------- VIRUS ---------------- */
  ['virus', 'un virus',
    'gripe,covid-19,sarampión,paperas,rubéola|varicela,herpes,rabia,ébola,vih|polio,hepatitis,papiloma,dengue,zika'],

  /* ---------------- BACTERIAS ---------------- */
  ['bacterias', 'una bacteria',
    'escherichia coli,salmonela,estreptococo,estafilococo,lactobacilo|neumococo,meningococo,helicobacter pylori,micobacteria,clostridium|bacilo anthracis,rickettsia'],

  /* ---------------- HONGOS ---------------- */
  ['hongos', 'un hongo',
    'champiñón,seta de cardo,boletus,níscalo,trufa|shiitake,seta ostra,enoki,portobello,levadura|moho,penicillium,aspergillus,candida,amanita'],

  /* ---------------- ALGAS ---------------- */
  ['algas', 'un alga',
    'alga verde,alga roja,alga parda,kelp,spirulina|chlorella,sargazo,ulva,fucus,dulse'],

  /* ---------------- CEREALES ---------------- */
  ['cereales', 'un cereal',
    'trigo,arroz,maíz,cebada,centeno|avena,mijo,sorgo,quinoa,trigo sarraceno|espelta,kamut'],

  /* ---------------- FRUTOS ---------------- */
  ['frutos', 'un fruto',
    'manzana,pera,plátano,naranja,mandarina|limón,lima,pomelo,uva,fresa|frambuesa,mora,arándano,cereza,ciruela|melocotón,albaricoque,nectarina,kiwi,piña|mango,papaya,aguacate,granada,higo'],

  /* ---------------- PLANTAS MEDICINALES ---------------- */
  ['plantas-medicinales', 'una planta medicinal',
    'manzanilla,menta,lavanda,tomillo,romero|salvia,orégano,albahaca,valeriana,pasiflora|equinácea,ginseng,jengibre,cúrcuma,aloe vera'],

  /* ---------------- ANIMALES EXTINTOS ---------------- */
  ['animales-extintos', 'un animal extinto',
    'mamut,dodo,moa,tilacino,megalodón|plesiosaurio,pterosaurio,trilobite,amonites,gliptodonte|smilodon,rinoceronte lanudo,oso cavernario,león cavernario,ave elefante'],

  /* ---------------- ARÁCNIDOS ---------------- */
  ['aranidos', 'un arácnido',
    'araña,escorpión,garrapata,ácaro,opilión|tarántula,viuda negra,araña lobo,araña tejedora,escorpión emperador'],

  /* ---------------- CRUSTÁCEOS ---------------- */
  ['crustaceos', 'un crustáceo',
    'cangrejo,langosta,langostino,gamba,camarón|bogavante,cangrejo ermitaño,cochinilla,krill,centollo'],

  /* ---------------- MOLUSCOS ---------------- */
  ['moluscos', 'un molusco',
    'caracol,babosa,mejillón,almeja,ostra|vieira,calamar,pulpo,sepia,nautilo'],

  /* ---------------- CETÁCEOS ---------------- */
  ['cetaceos', 'un cetáceo',
    'ballena azul,ballena jorobada,cachalote,orca,delfín|delfín mular,beluga,narval,marsopa,rorcual|ballena franca,zifio,calderón,delfín común,ballena gris'],

  /* ---------------- PRIMATES ---------------- */
  ['primates', 'un primate',
    'chimpancé,gorila,orangután,bonobo,gibón|lémur,loris,tarsero,mandril,babuino|macaco,tití,tamarino,mono araña,mono capuchino'],

  /* ---------------- CÁNIDOS ---------------- */
  ['canidos', 'un cánido',
    'perro,lobo,zorro,coyote,chacal|dingo,licaón,zorro ártico,zorro fenec,perro mapache'],

  /* ---------------- MARSUPIALES ---------------- */
  ['marsupiales', 'un marsupial',
    'canguro,koala,wombat,ualabí,opósum|demonio de tasmania,cuscús,bandicut,petauro,numbat'],

  /* ---------------- ROEDORES ---------------- */
  ['roedores', 'un roedor',
    'ratón,rata,hámster,cobaya,ardilla|castor,puercoespín,capibara,chinchilla,jerbo|lemming,agutí'],

  /* ---------------- ANIMALES VENENOSOS ---------------- */
  ['animales-venenosos', 'un animal venenoso',
    'cobra,víbora,serpiente de cascabel,mamba negra,escorpión|viuda negra,avispa,abeja,medusa,pez piedra|pez globo,rana dardo,ornitorrinco,caracol cono,pulpo de anillos azules'],

  /* ---------------- ANIMALES NOCTURNOS ---------------- */
  ['animales-nocturnos', 'un animal nocturno',
    'búho,lechuza,murciélago,zorro,gato|ratón,erizo,lémur,gálago,kinkajú|tejón,hiena,lobo,coyote,tarántula'],

  /* ---------------- ANIMALES POLARES ---------------- */
  ['animales-polares', 'un animal de los polos',
    'oso polar,pingüino,foca,morsa,zorro ártico|reno,beluga,narval,lemming,albatros'],

  /* ---------------- ANIMALES DE SABANA ---------------- */
  ['animales-sabana', 'un animal de la sabana',
    'león,elefante,jirafa,cebra,gacela|ñu,rinoceronte,hipopótamo,búfalo,hiena|chacal,guepardo,leopardo,facóquero,avestruz'],

  /* ---------------- PLANTAS CARNÍVORAS ---------------- */
  ['plantas-carnivoras', 'una planta carnívora',
    'venus atrapamoscas,drosera,nepenthes,sarracenia,pinguicula|utricularia,heliamphora,cephalotus,byblis,drosophyllum'],

  /* ---------------- CACTUS ---------------- */
  ['cactus', 'un cactus',
    'saguaro,nopal,chumbera,echinopsis,mammillaria|opuntia,ferocactus,cereus,rebutia,ariocarpus'],

  /* ---------------- ÁRBOLES FRUTALES ---------------- */
  ['arboles-frutales', 'un árbol frutal',
    'manzano,peral,naranjo,limonero,mandarino|cerezo,ciruelo,melocotonero,albaricoquero,higuera|granado,olivo,vid,almendro,nogal']

);
