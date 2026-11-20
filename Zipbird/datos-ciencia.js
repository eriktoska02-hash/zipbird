/* ==========================================================
   BANCO DE RESPUESTAS · CIENCIA Y NATURALEZA
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['planetas', 'un planeta del sistema solar',
    'tierra,marte,júpiter,venus,saturno|mercurio,urano,neptuno'],

  ['constelaciones', 'una constelación',
    'osa mayor,osa menor,orion,casiopea,draco|leo,géminis,tauro,escorpio,sagitario|acuario,piscis,aries,cáncer,virgo|libra,capricornio,pegaso,cygnus,andrómeda|hidra,fénix,centauro,lobo,águila'],

  ['elementos-quimicos', 'un elemento químico',
    'oxígeno,hidrógeno,carbono,hierro,oro|plata,cobre,aluminio,calcio,sodio|potasio,magnesio,azufre,cloro,helio|litio,titanio,plomo,mercurio,uranio|iterbio,holmio,praseodimio,tecnecio,gadolinio'],

  ['inventos', 'un invento',
    'rueda,bombilla,teléfono,avión,internet|televisión,imprenta,vacuna,penicilina,ordenador|radio,telescopio,microscopio,motor de vapor,electricidad|rayos x,transistor,satélite,gps,impresora 3d|blockchain,dron,panel solar,código de barras,led'],

  ['cientificos', 'un científico famoso',
    'einstein,newton,galileo,darwin,marie curie|tesla,edison,hawking,pasteur,arquímedes|kepler,copérnico,feynman,mendel,lavoisier|bohr,planck,heisenberg,schrödinger,maxwell|ramón y cajal,sever ochoa,margarita salas,rosalind franklin,ada lovelace'],

  ['unidades-medida', 'una unidad de medida',
    'metro,kilogramo,segundo,litro,grado|kilómetro,gramo,hora,voltio,amperio|julio,vatio,newton,pascal,hercio|kelvin,mol,candela,bar,tesla|weber,henrio,siemens,lux,becquerel'],

  ['formas-geometricas', 'una forma geométrica',
    'círculo,cuadrado,triángulo,rectángulo,rombo|óvalo,pentágono,hexágono,trapecio,esfera|cubo,cono,cilindro,pirámide,prisma|octógono,heptágono,dodecaedro,icosaedro,toro|fractal,espiral,hélice,paraboloide,hipercubo'],

  ['dinosaurios', 'un dinosaurio',
    'tiranosaurio,triceratops,velociraptor,estegosaurio,brontosaurio|diplodocus,pterodáctilo,espinosaurio,ankilosaurio,parasaurolophus|allosaurus,braquiosaurio,iguanodón,dilofosaurio,pliosaurio|mosasaurio,plesiosaurio,argentinosaurio,therizinosaurus,carnotauro|giganotosaurio,deinonychus,oviraptor,maiasaura,archaeopteryx'],

  ['enfermedades', 'una enfermedad',
    'gripe,resfriado,varicela,sarampión,paperas|angina,bronquitis,gastroenteritis,conjuntivitis,otitis|neumonía,hepatitis,tuberculosis,malaria,cólera|diabetes,cáncer,alzheimer,párkinson,asma|leucemia,esclerosis múltiple,fibromialgia,lupus,ela'],

  ['partes-celula', 'una parte de la célula',
    'núcleo,membrana,citoplasma,mitocondria|ribosoma,lisosoma,vacuola,cloroplasto,pared celular|aparato de golgi,retículo endoplasmático,nucleolo,centriolo,citoesqueleto|peroxisoma,plastidio,flagelo,cilios,plasmodesmo'],

  ['tipos-energia', 'un tipo de energía',
    'solar,eólica,hidráulica,nuclear,eléctrica|térmica,geotérmica,mareomotriz,química,cinética|potencial,radiante,sonora,biomasa,undimotriz|osmótica,fusión nuclear,fisión nuclear,piezoeléctrica,fotovoltaica'],

  ['ramas-ciencia', 'una rama de la ciencia',
    'física,química,biología,matemáticas,medicina|astronomía,geología,psicología,sociología,botánica|zoología,ecología,genética,neurología,arqueología|paleontología,meteorología,oceanografía,entomología,etología|criptografía,epistemología,toxicología,sismología,volcanología'],

  ['naves-espaciales', 'una nave o misión espacial',
    'apolo 11,transbordador espacial,soyuz,estación espacial,cohete|saturno v,falcon 9,voyager,curiosity,perseverance|hubble,james webb,sputnik,gemini,artemis|new horizons,cassini,juno,pioneer,vostok|buran,energia,long march,ariane,vega'],

  ['astronautas', 'un astronauta',
    'neil armstrong,yuri gagarin,pedro duque,buzz aldrin,chris hadfield|valentina tereshkova,michael collins,jim lovell,tim peake,samantha cristoforetti|alan shepard,john glenn,sally ride,guion bluford,marc garneau|ed white,alexei leonov,charles duke,ken mattingly,fred haise|bruce mccandless,mark kelly,scott kelly,jessica meir,christina koch'],

  ['mujeres-cientificas', 'una científica famosa',
    'marie curie,rosalind franklin,ada lovelace,margarita salas,hipatia|katherine johnson,jane goodall,virginia apgar,dorothy hodgkin,lise meitner|emmy noether,barbara mcclintock,rita levi-montalcini,grace hopper,hedy lamarr|mary anning,caroline herschel,elizabeth blackburn,tu youyou,esther lederberg|cecilia payne,annie jump cannon,inge lehmann,katia krafft,maría blasco'],

  ['instrumentos-cientificos', 'un instrumento científico',
    'microscopio,telescopio,termómetro,balanza,regla|bureta,pipeta,probeta,matraz,brújula|barómetro,sismógrafo,espectrómetro,acelerador de partículas,osciloscopio|centrífuga,electroscopio,calorímetro,manómetro,voltímetro|criostato,espectrofotómetro,interferómetro,cromatógrafo,citómetro'],

  ['rocas', 'un tipo de roca',
    'granito,basalto,mármol,caliza,pizarra|arenisca,obsidiana,cuarzo,yeso,carbón|gneis,esquisto,andesita,riolita,dolomía|conglomerado,brecha,travertino,sílex,anhidrita|kimberlita,peridotita,ofiolita,migmatita,anortosita'],

  ['estados-materia', 'un estado de la materia',
    'sólido,líquido,gas,plasma|condensado de bose-einstein,superfluido,supersólido,plasma de quarks'],

  ['planetas-enanos', 'un planeta enano',
    'plutón,ceres,eris|haumea,makemake,gonggong|quaoar,sedna,orcus,salacia']

);
