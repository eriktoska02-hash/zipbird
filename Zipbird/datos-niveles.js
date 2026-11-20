/* ==========================================================
   ZIPBIRD - PREGUNTAS POR NIVELES
   ----------------------------------------------------------
   Más preguntas organizadas en 3 niveles de rareza.
   
   Formato: [id, "título", "nivel1|nivel2|nivel3]
   Nivel 1 = respuestas comunes   (nivel fácil del juego)
   Nivel 2 = respuestas poco comunes (nivel medio del juego)
   Nivel 3 = respuestas poco conocidas (nivel difícil del juego)
   
   Cada respuesta registrada es válida para su pregunta,
   incluyendo las poco conocidas. Las respuestas repetidas
   se descartan automáticamente en questions.js.
   Los IDs usan el sufijo -n para no chocar con los existentes.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- PAÍSES ---------------- */
  ['paises-n', 'un país',
    'españa,francia,italia,alemania,reino unido,estados unidos,canada,mexico,brasil,argentina,chile|japón,china,india,rusia,egipto,sudáfrica,australia,nueva zelanda,corea del sur,tailandia|islandia,bután,lesoto,suazilandia'
  ],

  /* ---------------- CIUDADES ---------------- */
  ['ciudades-n', 'una ciudad',
    'madrid,parís,roma,londres,berlín,nueva york,méxico,buenos aires,río de janeiro,são paulo|tokio,peking,moscú,el cairo,ciudad del cabo,sídney,seúl,bangkok,ciudad de ho chi minh,yakarta|lesoto,suazilandia,bután'
  ],

  /* ---------------- IDIOMAS ---------------- */
  ['idiomas-n', 'un idioma',
    'español,inglés,francés,alemán,italiano,portugués,ruso,chino,japonés,árabe|holandés,sueco,noruego,danés,finés,polaco,checo,húngaro,rumano,griego,turco|quechua,guaraní,aimara,náhuatl'
  ],

  /* ---------------- ELEMENTOS QUIMICOS ---------------- */
  ['elementos-n', 'un elemento químico',
    'oxígeno,hidrógeno,carbono,nitrógeno,oro,plata,cobre,hierro,aluminio,calcio|sodio,potasio,magnesio,zinc,plomo,estaño,níquel,cobalto,manganeso,cromo|itrio,iterbio,ituvio'
  ],

  /* ---------------- PLANETAS ---------------- */
  ['planetas-n', 'un planeta',
    'tierra,marte,júpiter,saturno,venus,mercurio,urano,neptuno|plutón,caronte,eris,haumea,makemake,sedna'
  ],

  /* ---------------- MONUMENTOS ---------------- */
  ['monumentos-n', 'un monumento famoso',
    'torre eiffel,estatua de la libertad,big ben,coliseo,muralla china,pirámides de guiza,taj mahal,cristo redentor|acrópolis,puerta de brandemburgo,estatua de david,fuente de trevi,puente de londres,ciudad prohibida,torre de pisa,alambra'
  ],

  /* ---------------- INVENTOS ---------------- */
  ['inventos-n', 'un invento',
    'rueda,imprenta,bombilla,teléfono,ordenador,avión,internet,microscopio,telescopio,brújula|vapor,electricidad,radio,televisión,cámara,refrigerador,lávadora,aspiradora,microondas,lavavajillas'
  ],

  /* ---------------- ANIMALES MARINOS ---------------- */
  ['animales-marinos-n', 'un animal marino',
    'delfín,ballena,tiburón,pez espada,calamar,pulpo,cangrejo,langosta,camarón,mejillón|medusa,rayo,mantarraya,pez globo,pez león,morsa,foca,león marino,pingüino,nutria|nautilo,calamar gigante,pez murciélago,pez roca'
  ],

  /* ---------------- AVES EXOTICAS ---------------- */
  ['aves-exoticas-n', 'un ave exótica',
    'loro,colibrí,tucán,flamenco,pelícano,cisne,águila,halcón,búho,buitre|quetzal,albatros,cóndor,faisán,abejaruco,avutarda,alcaudón,paloma,gaviota,milano'
  ],

  /* ---------------- INSTRUMENTOS ---------------- */
  ['instrumentos-n', 'un instrumento musical',
    'guitarra,piano,violín,flauta,trompeta,tambor,arpa,xilófono,acordeón,armónica|violonchelo,contrabajo,trombón,tuba,fagot,oboe,órgano,sintetizador,ukelele,banjo'
  ],

  /* ---------------- FRUTAS TROPICALES ---------------- */
  ['frutas-tropicales-n', 'una fruta tropical',
    'piña,banana,mango,papaya,maracuyá,coco,aguacate,guanábana,mamey,níspero|rambután,carambola,lichi,caqui,mangostán,durian,salak,tamarillo,longan,feijoa'
  ],

  /* ---------------- DEPORTES ---------------- */
  ['deportes-n', 'un deporte',
    'fútbol,baloncesto,tenis,natación,atletismo,ciclismo,boxeo,voleibol,béisbol,golf|rugby,críquet,hockey,bádminton,esgrima,judô,karate,taekwondo,esquí'
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
