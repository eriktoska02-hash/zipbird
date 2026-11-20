/* ==========================================================
   AMPLIACIÓN DEL BANCO DE RESPUESTAS
   ----------------------------------------------------------
   Las categorías se fusionan con las de datos-*.js por su id.
   Formato: [id, "título (solo se usa la primera vez)", "niveles"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   Las barras | vacías sirven para añadir solo a un nivel concreto.
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- PAÍSES DEL MUNDO (195) ---------------- */
  ['paises', 'un país',
    '|serbia,croacia,eslovenia,eslovaquia,bulgaria,rumanía,hungría,ucrania,bielorrusia,lituania,letonia,estonia,finlandia,dinamarca,bélgica,países bajos~holanda,suiza,austria,irlanda,nueva zelanda,corea del sur,tailandia,vietnam,indonesia,filipinas,malasia,singapur,pakistán,bangladés,irán,irak,israel,líbano,siria,jordania,arabia saudí,emiratos árabes unidos,catar,kuwait,cuba,jamaica,haití,república dominicana,guatemala,honduras,el salvador,nicaragua,costa rica,panamá,venezuela,colombia,ecuador,bolivia,paraguay,uruguay,chile|albania,andorra,bosnia y herzegovina,chequia~república checa,chipre,georgia,armenia,azerbaiyán,kazajistán,uzbekistán,turkmenistán,kirguistán~kirguizistán,tayikistán,afganistán,sri lanka,birmania~myanmar,camboya,laos,corea del norte,brunéi~brunei,maldivas,baréin~bahrein,omán,yemen,palestina,timor oriental~timor leste,libia,sudán,sudán del sur,somalia,eritrea,yibuti,etiopía,kenia,tanzania,uganda,ruanda,burundi,república democrática del congo~rd congo,república del congo,camerún,costa de marfil,ghana,senegal,malí,níger,chad,mauritania,gambia,guinea,guinea-bisáu,sierra leona,liberia,togo,benín,burkina faso,cabo verde,santo tomé y príncipe,guinea ecuatorial,gabón,angola,zambia,zimbabue,malaui,mozambique,madagascar,mauricio,seychelles,comoras,botsuana,namibia,esuatini~suazilandia,lesoto,argelia,túnez,nigeria,república centroafricana,sudáfrica|antigua y barbuda,bahamas,barbados,belice,dominica,granada,guyana,san cristóbal y nieves,san vicente y las granadinas,santa lucía,surinam,trinidad y tobago,fiyi,kiribati,islas marshall,islas salomón,micronesia,nauru,palaos,papúa nueva guinea,samoa,tonga,tuvalu,vanuatu,mónaco,liechtenstein,san marino,ciudad del vaticano~vaticano,luxemburgo,macedonia del norte~macedonia,moldavia,montenegro,kosovo,taiwán'],

  /* ---------------- EUROPA ---------------- */
  ['paises-europa', 'un país de Europa',
    '|serbia,croacia,bulgaria,ucrania,bielorrusia,lituania,letonia,estonia,chipre,rusia,turquía|bosnia y herzegovina,montenegro,macedonia del norte,albania,moldavia,georgia,armenia,azerbaiyán|andorra,mónaco,liechtenstein,san marino,ciudad del vaticano,kosovo,kazajistán'],

  /* ---------------- AMÉRICA ---------------- */
  ['paises-america', 'un país de América',
    '|canadá|bahamas,guyana|antigua y barbuda,dominica,granada,san cristóbal y nieves,san vicente y las granadinas,santa lucía,surinam'],

  /* ---------------- ASIA ---------------- */
  ['paises-asia', 'un país de Asia',
    '|catar,kuwait,jordania,líbano,siria,omán,yemen,corea del norte,kazajistán,bangladés|afganistán,baréin,brunéi,chipre,georgia,armenia,azerbaiyán,maldivas,palestina,timor oriental|kirguistán,tayikistán,turkmenistán,uzbekistán'],

  /* ---------------- ÁFRICA ---------------- */
  ['paises-africa', 'un país de África',
    '|libia,sudán,somalia,ruanda,zambia|benín,burkina faso,burundi,cabo verde,chad,gabón,gambia,guinea,guinea-bisáu,liberia,malaui,malí,mauricio,mauritania,níger,república centroafricana,sierra leona,togo|república del congo,república democrática del congo,guinea ecuatorial,santo tomé y príncipe,seychelles,sudán del sur'],

  /* ---------------- OCEANÍA ---------------- */
  ['paises-oceania', 'un país de Oceanía',
    'australia,nueva zelanda|fiyi,papúa nueva guinea|samoa,tonga,vanuatu|islas salomón,islas marshall,palaos,micronesia|kiribati,nauru,tuvalu'],

  /* ---------------- UNIÓN EUROPEA ---------------- */
  ['paises-ue', 'un país de la Unión Europea',
    '|chipre,malta'],

  /* ---------------- CAPITALES DE EUROPA ---------------- */
  ['capitales-europa', 'una capital europea',
    '|moscú,kiev~kyiv,bucarest,sofía,belgrado,zagreb,bratislava|sarajevo,podgorica,skopie~skopje,tirana,chisináu~chisinau,minsk,nicosia,luxemburgo|ankara,ereván~yerevan,tiflis~tbilisi,bakú~baku,andorra la vieja,mónaco,vaduz,san marino,ciudad del vaticano|prístina~pristina,astaná'],

  /* ---------------- CAPITALES DE AMÉRICA ---------------- */
  ['capitales-america', 'una capital de América',
    '|ottawa|nassau,georgetown,paramaribo|castries,kingstown,basseterre,roseau,saint john s~st john s,saint george s~st george s'],

  /* ---------------- CAPITALES DE ASIA ---------------- */
  ['capitales-asia', 'una capital de Asia',
    'pekín,tokio,nueva delhi,seúl,pyongyang,bangkok|yakarta,manila,hanói,singapur,kuala lumpur,ankara,teherán,bagdad,riad,jerusalén,abu dabi,doha|kabul,islamabad,daca,colombo,katmandú,ulán bator,nom pen,vientián,biskek,taskent,asjabad,dusambé,bakú,tiflis,ereván,nicosia|manama,mascate,kuwait,saná,amán,damasco,beirut,astaná,timbu,bandar seri begawan,naipyidó,malé,ramala,dili|sri jayewardenepura kotte'],

  /* ---------------- CAPITALES DE ÁFRICA ---------------- */
  ['capitales-africa', 'una capital de África',
    'el cairo,rabat,argel,túnez,abuya,nairobi,addís abeba,dakar,accra,pretoria|trípoli,jartum,kinsasa,brazzaville,luanda,maputo,harare,lusaka,kampala,dodoma,banjul|yaundé,bamako,uagadugú,niamey,nuakchot,conakri,monrovia,freetown,lomé,porto-novo,yamena~n djamena~ndjamena|gaborone,windhoek,maseru,mbabane,lilongüe,kigali,moroni,victoria,praia,bisáu|malabo,santo tomé,libreville,yamusukro,yibuti,asmara,mogadiscio,yuba,gitega,port louis,antananarivo,bangui,bujumbura,lobamba'],

  /* ---------------- CAPITALES DE OCEANÍA ---------------- */
  ['capitales-oceania', 'una capital de Oceanía',
    'canberra,wellington|suva,port moresby|apia,honiara,nukualofa,port vila|tarawa del sur,majuro,palikir,ngerulmud|funafuti,yaren'],

  /* ---------------- PROVINCIAS DE ESPAÑA (50) ---------------- */
  ['provincias', 'una provincia de España',
    '|burgos,tarragona,girona~gerona,a coruña~la coruña|baleares~islas baleares,lleida~lérida,zamora,huelva,las palmas,santa cruz de tenerife'],

  /* ---------------- ESTADOS DE EE. UU. (50) ---------------- */
  ['estados-eeuu', 'un estado de Estados Unidos',
    'california,texas,florida,nueva york,hawái~hawaii|illinois,ohio,pensilvania,georgia,carolina del norte,míchigan~michigan,nueva jersey,virginia,washington,arizona|massachusetts,tennessee,indiana,misuri~missouri,maryland,wisconsin,colorado,minnesota,carolina del sur,alabama,luisiana~louisiana,kentucky,oregón~oregon,oklahoma,connecticut|iowa,utah,nevada,arkansas,misisipi~mississippi,kansas,nuevo méxico~new mexico,nebraska,virginia occidental~west virginia,idaho,delaware,maine,nuevo hampshire~new hampshire,rhode island,montana|dakota del norte~north dakota,dakota del sur~south dakota,alaska,vermont,wyoming'],

  /* ---------------- ESTADOS DE MÉXICO (32) ---------------- */
  ['estados-mexico', 'un estado de México',
    'ciudad de méxico,jalisco,nuevo león,puebla,veracruz|estado de méxico,guanajuato,chihuahua,sonora,coahuila,michoacán,oaxaca|yucatán,quintana roo,sinaloa,baja california,baja california sur,tamaulipas,guerrero|hidalgo,querétaro,san luis potosí,zacatecas,morelos,tabasco,aguascalientes|campeche,colima,durango,nayarit,tlaxcala,chiapas'],

  /* ---------------- NBA (30) ---------------- */
  ['equipos-nba', 'un equipo de la NBA',
    '||thunder,kings,hawks,wizards,magic'],

  /* ---------------- PRESIDENTES ---------------- */
  ['presidentes-espana', 'un presidente del Gobierno de España',
    'adolfo suárez,felipe gonzález,pedro sánchez|josé maría aznar,mariano rajoy|josé luis rodríguez zapatero|leopoldo calvo-sotelo'],

  ['presidentes-eeuu', 'un presidente de Estados Unidos',
    'george washington~washington,abraham lincoln~lincoln,john f. kennedy~kennedy,barack obama~obama,donald trump~trump,joe biden~biden|thomas jefferson~jefferson,franklin d. roosevelt~franklin roosevelt,ronald reagan~reagan,bill clinton~clinton,george w. bush~bush,jimmy carter~carter,richard nixon~nixon|john adams,james madison,james monroe,andrew jackson,theodore roosevelt,woodrow wilson,harry s. truman,dwight d. eisenhower,lyndon b. johnson,gerald ford,george h. w. bush|john quincy adams,martin van buren,william henry harrison,john tyler,james k. polk,zachary taylor,millard fillmore,franklin pierce,james buchanan,ulysses s. grant,rutherford b. hayes,james a. garfield,chester a. arthur,grover cleveland,benjamin harrison,william mckinley,william howard taft,warren g. harding,calvin coolidge,herbert hoover|andrew johnson'],

  /* ---------------- MONEDAS ---------------- */
  ['monedas', 'una moneda',
    '|shekel,riyal,baht,ringgit,rupia indonesia,dólar australiano,dólar canadiense,peso mexicano,peso argentino,bolívar,sol,guaraní,peso uruguayo,colón,quetzal,lempira,córdoba,balboa,gourde,dólar de hong kong,dólar neozelandés|libra egipcia,naira,chelín,birr,cedi,metical,kwacha,pula,nakfa,som,afgani,taka,kyat,kip,tugrik,tenge,manat,dram,lari,dong,riel'],

  /* ---------------- IDIOMAS ---------------- */
  ['idiomas', 'un idioma',
    '|catalán,gallego,euskera,valenciano|hindi,bengalí,urdu,persa,turco,coreano,vietnamita,tailandés,indonesio,malayo,filipino|swahili,zulú,afrikáans,amárico,yoruba,hausa,igbo,checo,eslovaco,húngaro,rumano,búlgaro,serbio,croata,esloveno,ucraniano,bielorruso,lituano,letón,estonio,finlandés,noruego,danés,islandés|gaélico,galés,bretón,latín,griego,hebreo,armenio,georgiano,azerí,kazajo,uzbeko,mongol,nepalí,cingalés,birmano,jemer,laosiano,tibetano,malgache,somalí,bereber,quechua,aimara,guaraní,náhuatl,maya,mapuche'],

  /* ---------------- ELEMENTOS QUÍMICOS ---------------- */
  ['elementos-quimicos', 'un elemento químico',
    '|nitrógeno,fósforo,flúor,bromo,yodo,argón,neón,criptón,xenón,radón|bario,estroncio,cadmio,cobalto,níquel,zinc,estaño,antimonio,arsénico,selenio,manganeso,cromo,molibdeno,tungsteno,platino,paladio,rodio,osmio,iridio,bismuto,polonio,radio,torio,plutonio,americio,berilio,boro,silicio,germanio,galio,indio,talio'],

  /* ---------------- CUERPO HUMANO ---------------- */
  ['huesos', 'un hueso del cuerpo humano',
    '|frontal,parietal,temporal,occipital,nasal,lagrimal,cigomático,maxilar,hioides|atlas,axis,coxal,ilion,carpo,metacarpo,falange,tarso,metatarso'],

  ['organos', 'un órgano del cuerpo humano',
    '|piel,lengua,faringe,laringe,diafragma,uretra,uréter,próstata,útero,ovario,testículo|cerebelo,bulbo raquídeo,médula espinal,hipotálamo,retina,córnea,iris'],

  /* ---------------- ANIMALES Y COMIDA ---------------- */
  ['animales', 'un animal',
    '|hámster,cobaya,hurón,erizo,mapache,mofeta,nutria,castor,morsa,koala,canguro,wombat,equidna,ornitorrinco,perezoso,armadillo,pangolín,suricata,jaguar,ocelote|hiena,chacal,coyote,bisonte,búfalo,antílope,gacela,ñu,tapir,manatí,dugongo'],

  ['frutas', 'una fruta',
    '|mandarina,clementina,pomelo,lima,coco,aguacate|chirimoya,guayaba,granadilla,physalis,arándano,frambuesa,mora,membrillo,endrina|naranja sanguina,uva pasa,ciruela pasa,breva'],

  ['verduras', 'una verdura',
    '|rábano,nabo,maíz,col lombarda,repollo,rúcula,hinojo|canónigo,pimiento verde,pimiento rojo,judía blanca,judía roja'],

  ['postres', 'un postre',
    '|tarta de manzana,tarta de zanahoria,coulant,macarons,éclair|milhojas,pudding,tortitas,brazo de gitano,sorbete,granizado|crema de limón,tarta de limón,pionono'],

  ['comidas-espana', 'una comida típica de España',
    '|marmitako,bacalao al pil pil,merluza a la vasca,pisto,ajoblanco|porra antequerana,sopa de ajo,sopa castellana,lentejas,garbanzos,potaje|fabes con almejas,arroz con bogavante,paella valenciana,fideuá,zarzuela,suquet de peix,escudella|botifarra amb mongetes,calçots,romesco,all i oli'],

  ['tapas', 'una tapa',
    '|papas arrugadas,mojo picón,queso frito,pincho moruno,brocheta|champiñones al ajillo,gambas al ajillo,txangurro,bacalao a la vizcaína,mejillones,almejas|navajas,berberechos,salpicón,oreja a la plancha'],

  /* ---------------- CIUDADES, RÍOS Y MONTAÑAS ---------------- */
  ['ciudades-espana', 'una ciudad de España',
    '|albacete,almería,ávila,badajoz,burgos,cáceres,castellón,ciudad real,cuenca,girona~gerona|guadalajara,huelva,jaén,león,lleida~lérida,logroño,lugo,ourense~orense,palencia,pontevedra|segovia,soria,tarragona,teruel,zamora'],

  ['rios-espana', 'un río de España',
    '|turia,mijares,palancia,serpis,vinalopó,guadalete,guadalhorce|segre,cinca,gállego,arga,ega,alagón,jerte,ambroz|fluvià,garona,besaya,martín,guadalentín,almanzora,andarax,tinto,piedras'],

  ['montanas-espana', 'una montaña o sierra de España',
    '|comapedrosa,vignemale,taillon,perdiguero,besiberri,russell,marboré|pedraforca,montseny,penyagolosa,javalambre,gúdar,moncayo,urbión|demanda,cebollera,almenara,peña ubiña,mampodre,castro valnera|gorbea,aizkorri,anboto,ernio,ulia'],

  ['monumentos-espana', 'un monumento de España',
    '|catedral de león,catedral de toledo,catedral de salamanca,catedral de cuenca,catedral de ávila|muralla de ávila,castillo de segovia,alcázar de toledo,palacio de aranjuez,plaza mayor de salamanca|puente romano de mérida,teatro romano de mérida,catedral de murcia,catedral de valencia,lonja de valencia|castillo de peñafiel,castillo de sigüenza,castillo de cardona,monasterio de ripoll,monasterio de poblet|catedral de tarragona,circo romano de tarragona,murallas de tarragona,monasterio de santes creus,monasterio de sant joan de les abadesses'],

  /* ---------------- SERIES Y TV ---------------- */
  ['series-espana', 'una serie española',
    '|merlí,pulseras rojas,el barco,los protegidos,el secreto de puente viejo|amar es para siempre,acacias 38,servir y proteger,la promesa,salón de té la moderna|al salir de clase,compañeros,los hombres de paco,la pecera de eva,yo soy bea|curro jiménez,verano azul,farmacia de guardia,periodistas,el comisario|homicidios,la embajada,la zona,el accidente,la valla,la caza,mentiras,el nudo'],

  ['programas-tv', 'un programa de televisión español',
    '|sálvame deluxe,viva la vida,dancing with the stars,mask singer,got talent|la voz,factor x,bailando con las estrellas,pequeños gigantes,el desafío|la isla de las tentaciones,primeras citas,la revuelta,el diario de patricia,todo es mentira|ya es mediodía,espejo público,la mañana,informe robinson,equipo de investigación'],

  /* ---------------- MARCAS ESPAÑOLAS ---------------- */
  ['marcas-espana', 'una marca española',
    '|iberdrola,endesa,naturgy,telefónica,movistar,yoigo|santander,bbva,caixabank,sabadell,bankinter,abanca,unicaja|damm,mahou,san miguel,estrella galicia,cruzcampo,renfe|vueling,air europa,melía,riu,iberostar,seur,correos|pc componentes,worten,phone house,eroski,consum,dia,alcampo']

);

CATEGORIAS.push(

  /* ---------------- CONSTELACIONES ---------------- */
  ['constelaciones', 'una constelación',
    '|hércules~hercules,perseo,lira,can mayor~canis major,can menor~canis minor,auriga,cetus~ballena,columba,corona boreal~corona borealis,cruz del sur~crux,ofiuco~ophiuchus,pavo,tucana,indus|antlia,apus,ara,bootes~boyero,caelum~cincel,camelopardalis~jirafa,canes venatici~perros de caza,carina~quilla,cefeo,chamaeleon~camaleón,circinus~compás,coma berenices~cabellera de berenice,corona austral~corona australis,corvus~cuervo,crater~copa|delphinus~delfín,dorado,equuleus~caballito,eridano,fornax~horno,grus~grulla,horologium~reloj,hydrus~hidra macho,lacerta~lagarto,leo minor~león menor,lepus~liebre,lynx~lince,mensa~mesa,microscopium~microscopio,monoceros~unicornio|musca~mosca,norma~escuadra,octans~octante,pictor~caballete,piscis austrinus~pez austral,puppis~popa,pyxis~brújula,reticulum~retículo,sagitta~flecha,sculptor~escultor,scutum~escudo,serpens~serpiente,sextans~sextante,telescopium~telescopio,triangulum~triángulo,triangulum australe~triángulo austral,vela~velas,volans~pez volador,vulpecula~zorra'],

  /* ---------------- ELEMENTOS QUÍMICOS (118) ---------------- */
  ['elementos-quimicos', 'un elemento químico',
    '||escandio,vanadio,rubidio,itrio,circonio,niobio,rutenio,telurio,cesio,lantano,cerio,neodimio,prometio,samario,europio|terbio,disprosio,erbio,tulio,lutecio,hafnio,tantalio,renio,astato,francio,actinio,protactinio,neptunio,curio,berkelio|californio,einstenio,fermio,mendelevio,nobelio,lawrencio,rutherfordio,dubnio,seaborgio,bohrio,hasio,meitnerio,darmstadtio,roentgenio,copernicio,nihonio,flerovio,moscovio,livermorio,teneso,oganesón'],

  /* ---------------- EQUIPOS NFL (32) ---------------- */
  ['equipos-nfl', 'un equipo de la NFL',
    'dallas cowboys~cowboys,new england patriots~patriots,kansas city chiefs~chiefs,san francisco 49ers~49ers~niners,green bay packers~packers|pittsburgh steelers~steelers,new york giants~giants,new york jets~jets,philadelphia eagles~eagles,buffalo bills~bills,miami dolphins~dolphins,chicago bears~bears,las vegas raiders~raiders|denver broncos~broncos,seattle seahawks~seahawks,baltimore ravens~ravens,new orleans saints~saints,minnesota vikings~vikings,los angeles rams~rams,los angeles chargers~chargers,tampa bay buccaneers~buccaneers~bucs|atlanta falcons~falcons,carolina panthers~panthers,cincinnati bengals~bengals,cleveland browns~browns,detroit lions~lions,houston texans~texans,indianapolis colts~colts,jacksonville jaguars~jaguars|arizona cardinals~cardinals,tennessee titans~titans,washington commanders~commanders'],

  /* ---------------- EQUIPOS MLB (30) ---------------- */
  ['equipos-mlb', 'un equipo de las Grandes Ligas de béisbol',
    'new york yankees~yankees,boston red sox~red sox,los angeles dodgers~dodgers,chicago cubs~cubs,san francisco giants~giants|new york mets~mets,atlanta braves~braves,philadelphia phillies~phillies,houston astros~astros,st. louis cardinals~cardinals|seattle mariners~mariners,texas rangers~rangers,oakland athletics~athletics~a s,los angeles angels~angels,san diego padres~padres|colorado rockies~rockies,arizona diamondbacks~diamondbacks~d backs,milwaukee brewers~brewers,cincinnati reds~reds,pittsburgh pirates~pirates|washington nationals~nationals,miami marlins~marlins,tampa bay rays~rays,toronto blue jays~blue jays,baltimore orioles~orioles,minnesota twins~twins,chicago white sox~white sox,kansas city royals~royals,detroit tigers~tigers,cleveland guardians~guardians'],

  /* ---------------- EQUIPOS NHL (32) ---------------- */
  ['equipos-nhl', 'un equipo de la NHL',
    'montreal canadiens~canadiens~habs,toronto maple leafs~maple leafs,boston bruins~bruins,new york rangers~rangers,detroit red wings~red wings|chicago blackhawks~blackhawks,pittsburgh penguins~penguins,philadelphia flyers~flyers,washington capitals~capitals,new york islanders~islanders|new jersey devils~devils,buffalo sabres~sabres,ottawa senators~senators,florida panthers~panthers,tampa bay lightning~lightning|carolina hurricanes~hurricanes,columbus blue jackets~blue jackets,nashville predators~predators,st. louis blues~blues,minnesota wild~wild|colorado avalanche~avalanche,dallas stars~stars,vegas golden knights~golden knights,seattle kraken~kraken,san jose sharks~sharks,los angeles kings~kings,anaheim ducks~ducks,utah hockey club~hockey club,winnipeg jets~jets,edmonton oilers~oilers,calgary flames~flames,vancouver canucks~canucks']

);

