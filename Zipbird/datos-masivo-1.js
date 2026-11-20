/* ==========================================================
   BANCO MASIVO · GEOGRAFÍA
   Listas cerradas completas + categorías abiertas amplias.
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- CAPITALES DE ESTADOS DE EE. UU. (50) ---------------- */
  ['capitales-eeuu', 'una capital de estado de Estados Unidos',
    'sacramento,albany,austin,boston,denver|atlanta,phoenix,springfield,columbus,indianápolis|nashville,raleigh,richmond,olympia,harrisburg|tallahassee,lansing,madison,saint paul,montpelier|juneau,helena,cheyenne,bismarck,pierre,augusta,concord,dover,annapolis,hartford,providence,trenton,charleston,columbia,jackson,baton rouge,little rock,jefferson city,des moines,topeka,lincoln,oklahoma city,salt lake city,carson city,boise,salem,santa fe,honolulu,frankfort,montgomery'],

  /* ---------------- CAPITALES DE MÉXICO (32) ---------------- */
  ['capitales-mexico', 'una capital de estado de México',
    'aguascalientes,mexicali,la paz,campeche,tuxtla gutiérrez|chihuahua,ciudad de méxico,saltillo,colima,durango|guanajuato,chilpancingo,pachuca,guadalajara,toluca|morelia,cuernavaca,tepic,monterrey,oaxaca|puebla,querétaro,chetumal,san luis potosí,culiacán,hermosillo,villahermosa,ciudad victoria,tlaxcala,xalapa,mérida,zacatecas'],

  /* ---------------- CAPITALES DE PROVINCIAS DE ESPAÑA (50) ---------------- */
  ['capitales-provincias-espana', 'una capital de provincia española',
    'madrid,barcelona,valencia,sevilla,zaragoza|málaga,bilbao,alicante,valladolid,vigo|murcia,palma,las palmas,santa cruz de tenerife,córdoba|pamplona,santander,oviedo,san sebastián,a coruña|vitoria,granada,elche,castellón,toledo,albacete,logroño,badajoz,salamanca,huelva,cádiz,león,tarragona,lleida,girona,ourense,lugo,pontevedra,jaén,cáceres,guadalajara,cuenca,teruel,huesca,zamora,ávila,segovia,soria,palencia,ciudad real'],

  /* ---------------- ALEMANIA (16) ---------------- */
  ['estados-alemania', 'un estado de Alemania',
    'baviera,berlín,hamburgo,bremen,renania del norte-westfalia|baja sajonia,hessen,baden-wurtemberg,renania-palatinado,sarre|sajonia,sajonia-anhalt,schleswig-holstein,turingia,brandeburgo|mecklemburgo-pomerania occidental'],

  /* ---------------- ITALIA (20) ---------------- */
  ['regiones-italia', 'una región de Italia',
    'lombardía,lacio,campania,sicilia,véneto|piamonte,emilia-romaña,toscana,apulia,calabria|liguria,marcas,abruzos,cerdeña,umbría|friuli-venecia julia,trentino-alto adigio,basilicata,molise,valle de aosta'],

  /* ---------------- SUIZA (26) ---------------- */
  ['cantones-suiza', 'un cantón de Suiza',
    'zúrich,berna,ginebra,vaud,argovia|san galo,lucerna,tesino,valais,friburgo|basilea-ciudad,basilea-campiña,soleura,turgovia,grisones|schwyz,zug,schaffhausen,appenzell exterior,appenzell interior|glaris,nidwalden,obwalden,uri,jura,neuchâtel'],

  /* ---------------- PAÍSES BAJOS (12) ---------------- */
  ['provincias-paises-bajos', 'una provincia de los Países Bajos',
    'holanda septentrional,holanda meridional,utrecht,güeldres,brabante septentrional|limburgo,frisia,drente,overijssel,groninga|flevolandia,zelanda'],

  /* ---------------- BÉLGICA (11) ---------------- */
  ['provincias-belgica', 'una provincia de Bélgica',
    'amberes,lieja,flandes oriental,flandes occidental,hainaut|limburgo,namur,luxemburgo,brabante flamenco,brabante valón|bruselas-capital'],

  /* ---------------- AUSTRIA (9) ---------------- */
  ['estados-austria', 'un estado de Austria',
    'viena,alta austria,baja austria,tirol,estiria|salzburgo,carintia,burgenland,vorarlberg'],

  /* ---------------- CANADÁ (13) ---------------- */
  ['provincias-canada', 'una provincia o territorio de Canadá',
    'ontario,quebec,columbia británica,alberta,manitoba|saskatchewan,nueva escocia,nuevo brunswick,terranova y labrador,isla del príncipe eduardo|territorios del noroeste,nunavut,yukón'],

  /* ---------------- AUSTRALIA (8) ---------------- */
  ['estados-australia', 'un estado o territorio de Australia',
    'nueva gales del sur,victoria,queensland,australia occidental,australia meridional|tasmania,territorio del norte,territorio de la capital australiana'],

  /* ---------------- BRASIL (27) ---------------- */
  ['estados-brasil', 'un estado de Brasil',
    'são paulo,río de janeiro,minas gerais,bahía,paraná|río grande del sur,pernambuco,ceará,pará,santa catarina|goiás,maranhão,paraíba,espíritu santo,piauí|río grande del norte,alagoas,mato grosso,mato grosso del sur,distrito federal|acre,amapá,amazonas,rondonia,roraima,sergipe,tocantins'],

  /* ---------------- ARGENTINA (23) ---------------- */
  ['provincias-argentina', 'una provincia de Argentina',
    'buenos aires,córdoba,santa fe,mendoza,tucumán|salta,entre ríos,misiones,chaco,corrientes|santiago del estero,san juan,jujuy,río negro,neuquén|formosa,chubut,san luis,la pampa,catamarca|la rioja,santa cruz,tierra del fuego'],

  /* ---------------- CHILE (16) ---------------- */
  ['regiones-chile', 'una región de Chile',
    'metropolitana,valparaíso,biobío,antofagasta,la araucanía|los lagos,coquimbo,maule,o higgins,tarapacá|atacama,los ríos,aysén,magallanes,arica y parinacota|ñuble'],

  /* ---------------- VENEZUELA (23) ---------------- */
  ['estados-venezuela', 'un estado de Venezuela',
    'zulia,miranda,carabobo,lara,anzoátegui|bolívar,táchira,aragua,monagas,sucre|falcón,portuguesa,mérida,barinas,trujillo|nueva esparta,apure,yaracuy,guárico,cojedes|amazonas,delta amacuro,vargas'],

  /* ---------------- COLOMBIA (32) ---------------- */
  ['departamentos-colombia', 'un departamento de Colombia',
    'antioquia,valle del cauca,cundinamarca,atlántico,bolívar|santander,norte de santander,boyacá,tolima,nariño|córdoba,huila,cauca,magdalena,cesar|meta,caldas,risaralda,quindío,sucre|la guajira,casanare,putumayo,caquetá,arauca,amazonas,guainía,guaviare,vaupés,vichada,san andrés y providencia,chocó'],

  /* ---------------- ECUADOR (24) ---------------- */
  ['provincias-ecuador', 'una provincia de Ecuador',
    'pichincha,guayas,azuay,manabí,loja|el oro,tungurahua,chimborazo,imbabura,los ríos|santa elena,esmeraldas,carchi,cotopaxi,bolívar|cañar,santo domingo de los tsáchilas,sucumbíos,orellana,napo|pastaza,morona santiago,zamora chinchipe,galápagos'],

  /* ---------------- PERÚ (25) ---------------- */
  ['departamentos-peru', 'un departamento de Perú',
    'lima,arequipa,la libertad,cusco,piura|junín,lambayeque,puno,cajamarca,ica|áncash,loreto,ucayali,san martín,huánuco|ayacucho,apurímac,tacna,moquegua,huancavelica|amazonas,madre de dios,pasco,tumbes,callao'],

  /* ---------------- BOLIVIA (9) ---------------- */
  ['departamentos-bolivia', 'un departamento de Bolivia',
    'la paz,santa cruz,cochabamba,potosí,chuquisaca|oruro,tarija,beni,pando'],

  /* ---------------- URUGUAY (19) ---------------- */
  ['departamentos-uruguay', 'un departamento de Uruguay',
    'montevideo,canelones,maldonado,salto,colonia|paysandú,san josé,río negro,cerro largo,durazno|florida,soriano,tacuarembó,rivera,artigas|lavalleja,rocha,flores,treinta y tres'],

  /* ---------------- PARAGUAY (17) ---------------- */
  ['departamentos-paraguay', 'un departamento de Paraguay',
    'central,alto paraná,itapúa,caaguazú,san pedro|concepción,cordillera,guairá,paraguarí,amambay|canindeyú,presidente hayes,boquerón,ñeembucú,misiones|caazapá,alto paraguay'],

  /* ---------------- CUBA (15) ---------------- */
  ['provincias-cuba', 'una provincia de Cuba',
    'la habana,santiago de cuba,camagüey,holguín,villa clara|granma,pinar del río,matanzas,ciego de ávila,sancti spíritus|las tunas,artemisa,mayabeque,cienfuegos,guantánamo'],

  /* ---------------- INDIA (28) ---------------- */
  ['estados-india', 'un estado de India',
    'uttar pradesh,maharashtra,bengala occidental,bihar,tamil nadu|rajastán,karnataka,guyarat,madhya pradesh,andhra pradesh|odisha,telangana,kerala,jharkhand,assam|punjab,haryana,chhattisgarh,uttarakhand,himachal pradesh|goa,tripura,manipur,meghalaya,nagaland,arunachal pradesh,mizoram,sikkim'],

  /* ---------------- CHINA (33) ---------------- */
  ['provincias-china', 'una provincia o región de China',
    'cantón,shandong,henan,sichuan,jiangsu|hebei,hunan,anhui,hubei,zhejiang|yunnan,guangxi,jiangxi,liaoning,fujian|shanxi,guizhou,shaanxi,heilongjiang,jilin|gansu,hainan,qinghai,ningxia,xinjiang,tíbet,mongolia interior,pekín,shanghái,tianjin,chongqing,hong kong,macao'],

  /* ---------------- SUDÁFRICA (9) ---------------- */
  ['estados-sudafrica', 'una provincia de Sudáfrica',
    'gauteng,cabo occidental,kwaazulu-natal,cabo oriental,estado libre|limpopo,mpumalanga,noroeste,cabo septentrional'],

  /* ---------------- MARRUECOS (12) ---------------- */
  ['regiones-marruecos', 'una región de Marruecos',
    'casablanca-settat,rabat-salé-kenitra,marrakech-safí,fez-mequinez,tánger-tetuán-alhucemas|sus-masa,oriental,beni melal-jenifra,draa-tafilalet|guelmim-oued noun,laayún-saguía el hamra,dajla-río de oro'],

  /* ---------------- OTAN (32) ---------------- */
  ['paises-otan', 'un país de la OTAN',
    'estados unidos,reino unido,francia,alemania,italia|españa,canadá,turquía,polonia,países bajos|bélgica,portugal,grecia,noruega,dinamarca|suecia,finlandia,república checa,hungría,rumanía|bulgaria,eslovaquia,eslovenia,croacia,albania,montenegro,macedonia del norte,estonia,letonia,lituania,luxemburgo,islandia'],

  /* ---------------- OPEP (12) ---------------- */
  ['paises-opep', 'un país de la OPEP',
    'arabia saudí,irán,irak,emiratos árabes unidos,kuwait|venezuela,nigeria,argelia,angola,libia|república del congo,guinea ecuatorial'],

  /* ---------------- ASEAN (10) ---------------- */
  ['paises-asean', 'un país de la ASEAN',
    'indonesia,tailandia,vietnam,malasia,singapur|filipinas,myanmar,camboya,laos,brunéi'],

  /* ---------------- AMÉRICA CENTRAL (7) ---------------- */
  ['paises-america-central', 'un país de América Central',
    'guatemala,honduras,el salvador,nicaragua,costa rica|panamá,belice'],

  /* ---------------- CARIBE (13) ---------------- */
  ['paises-caribe', 'un país del Caribe',
    'cuba,república dominicana,haití,jamaica,trinidad y tobago|bahamas,barbados,santa lucía,granada,dominica|antigua y barbuda,san cristóbal y nieves,san vicente y las granadinas'],

  /* ---------------- BALCANES (11) ---------------- */
  ['paises-balcanes', 'un país de los Balcanes',
    'grecia,serbia,croacia,bulgaria,albania|bosnia y herzegovina,macedonia del norte,montenegro,eslovenia,rumanía|kosovo'],

  /* ---------------- NÓRDICOS (5) ---------------- */
  ['paises-nordicos', 'un país nórdico',
    'suecia,noruega,dinamarca,finlandia,islandia'],

  /* ---------------- ANDINOS (7) ---------------- */
  ['paises-andinos', 'un país de la cordillera de los Andes',
    'colombia,perú,ecuador,bolivia,chile|argentina,venezuela'],

  /* ---------------- MAGREB (5) ---------------- */
  ['paises-magreb', 'un país del Magreb',
    'marruecos,argelia,túnez,libia,mauritania'],

  /* ---------------- SAHEL (10) ---------------- */
  ['paises-sahel', 'un país del Sahel',
    'mali,níger,chad,sudán,mauritania|burkina faso,senegal,nigeria,eritrea,camerún'],

  /* ---------------- CIUDADES DE FRANCIA (20) ---------------- */
  ['ciudades-francia', 'una ciudad de Francia',
    'parís,marsella,lyon,toulouse,niza|nantes,montpellier,estrasburgo,burdeos,lille|rennes,reims,le havre,saint-étienne,toulon|grenoble,dijon,angers,nimes,aix-en-provence'],

  /* ---------------- CIUDADES DE ITALIA (20) ---------------- */
  ['ciudades-italia', 'una ciudad de Italia',
    'roma,milán,nápoles,turín,palermo|génova,bolonia,florencia,bari,catania|venecia,verona,mesina,padua,trieste|brescia,parma,prato,módena,cagliari'],

  /* ---------------- CIUDADES DE ALEMANIA (20) ---------------- */
  ['ciudades-alemania', 'una ciudad de Alemania',
    'berlín,hamburgo,múnich,colonia,fráncfort|stuttgart,düsseldorf,leipzig,dortmund,essen|bremen,dresde,hannover,núremberg,duisburgo|bochum,wuppertal,bielefeld,bonn,münster'],

  /* ---------------- CIUDADES DEL REINO UNIDO (20) ---------------- */
  ['ciudades-reino-unido', 'una ciudad del Reino Unido',
    'londres,birmingham,mánchester,glasgow,liverpool|leeds,sheffield,edimburgo,bristol,cardiff|belfast,newcastle,nottingham,leicester,coventry|brighton,southampton,portsmouth,oxford,cambridge'],

  /* ---------------- CIUDADES DE EE. UU. (25) ---------------- */
  ['ciudades-eeuu', 'una ciudad de Estados Unidos',
    'nueva york,los ángeles,chicago,houston,phoenix|filadelfia,san antonio,san diego,dallas,san josé|austin,jacksonville,fort worth,columbus,charlotte|indianápolis,san francisco,seattle,denver,washington|boston,nashville,detroit,portland,las vegas'],

  /* ---------------- CIUDADES DE MÉXICO (20) ---------------- */
  ['ciudades-mexico', 'una ciudad de México',
    'ciudad de méxico,guadalajara,monterrey,puebla,tijuana|león,ciudad juárez,zapopan,mérida,cancún|querétaro,aguascalientes,toluca,chihuahua,morelia|saltillo,hermosillo,culiacán,veracruz,acapulco'],

  /* ---------------- CIUDADES DE ARGENTINA (20) ---------------- */
  ['ciudades-argentina', 'una ciudad de Argentina',
    'buenos aires,córdoba,rosario,mendoza,la plata|tucumán,mar del plata,salta,santa fe,san juan|resistencia,santiago del estero,corrientes,posadas,neuquén|bahía blanca,paraná,formosa,san luis,río gallegos'],

  /* ---------------- CIUDADES DE BRASIL (20) ---------------- */
  ['ciudades-brasil', 'una ciudad de Brasil',
    'são paulo,río de janeiro,brasilia,salvador,fortaleza|belo horizonte,manaos,curitiba,recife,porto alegre|belén,goiânia,guarulhos,campinas,são luís|maceió,natal,campo grande,teresina,joão pessoa'],

  /* ---------------- CIUDADES DE CHINA (20) ---------------- */
  ['ciudades-china', 'una ciudad de China',
    'pekín,shanghái,cantón,shenzhen,tianjin|chongqing,wuhan,chengdu,nankín,hangzhou|xi an,harbin,suzhou,qingdao,dalian|zhengzhou,changsha,kunming,shenyang,xiamen'],

  /* ---------------- CIUDADES DE JAPÓN (20) ---------------- */
  ['ciudades-japon', 'una ciudad de Japón',
    'tokio,osaka,yokohama,nagoya,sapporo|fukuoka,kobe,kioto,kawasaki,saitama|hiroshima,sendai,chiba,kitakyushu,sakai|niigata,hamamatsu,kumamoto,sagamihara,shizuoka'],

  /* ---------------- CIUDADES DE INDIA (15) ---------------- */
  ['ciudades-india', 'una ciudad de India',
    'nueva delhi,bombay,bangalore,hyderabad,ahmedabad|chennai,calcuta,surat,pune,jaipur|lucknow,kanpur,nagpur,indore,bhopal'],

  /* ---------------- CIUDADES DE ÁFRICA (20) ---------------- */
  ['ciudades-africa', 'una ciudad de África',
    'el cairo,lagos,kinsasa,johannesburgo,casablanca|nairobi,addís abeba,argel,ciudad del cabo,dakar|acra,túnez,rabat,luanda,dar es salaam|abiyán,kampala,jartum,trípoli,maputo'],

  /* ---------------- CIUDADES DE OCEANÍA (12) ---------------- */
  ['ciudades-oceania', 'una ciudad de Oceanía',
    'sídney,melbourne,brisbane,perth,adelaida|auckland,wellington,christchurch,canberra,gold coast|newcastle,hobart'],

  /* ---------------- RÍOS DE EUROPA (20) ---------------- */
  ['rios-europa', 'un río de Europa',
    'danubio,rin,volga,sena,támesis|loira,elba,oder,vístula,don|dniéper,ural,po,ebro,duero|tajo,ródano,mosa,neckar,dniéster'],

  /* ---------------- RÍOS DE AMÉRICA (20) ---------------- */
  ['rios-america', 'un río de América',
    'amazonas,misisipi,misuri,río grande,colorado|paraná,orinoco,paraguay,uruguay,madeira|negro,são francisco,yukón,mackenzie,san lorenzo|ohio,tennessee,pilcomayo,bermejo,magdalena'],

  /* ---------------- RÍOS DE ASIA (15) ---------------- */
  ['rios-asia', 'un río de Asia',
    'yangtsé,ganges,indo,mekong,brahmaputra|éufrates,tigris,amur,huang he,obi|yeniséi,lena,salween,irrawaddy,jordán'],

  /* ---------------- RÍOS DE ÁFRICA (12) ---------------- */
  ['rios-africa', 'un río de África',
    'nilo,congo,níger,zambeze,orange|limpopo,senegal,volta,nilo azul,nilo blanco|okavango,shabelle'],

  /* ---------------- LAGOS DEL MUNDO (20) ---------------- */
  ['lagos-mundo', 'un lago del mundo',
    'superior,victoria,hurón,míchigan,tanganica|baikal,malawi,erie,ontario,ladoga|maracaibo,titicaca,turkana,chad,onega|eyre,vänern,winnipeg,balatón,ginebra'],

  /* ---------------- DESIERTOS DEL MUNDO (20) ---------------- */
  ['desiertos-mundo', 'un desierto del mundo',
    'sahara,gobi,kalahari,atacama,mojave|namib,thar,taklamakán,arabiano,sonora|chihuahua,karakum,kyzylkum,tanami,gibson|simpson,rub al-jali,dasht-e lut,dasht-e kavir,antártico'],

  /* ---------------- MONTAÑAS DEL MUNDO II (25) ---------------- */
  ['montanas-mundo-2', 'una montaña o cordillera del mundo',
    'everest,k2,kilimanjaro,mont blanc,aconcagua|denali,elbrús,matterhorn,fuji,alpes|himalaya,andes,rocallosas,pirineos,urales|cárpatos,atlas,cáucaso,annapurna,nanga parbat|manaslu,dhaulagiri,makalu,lhotse,cho oyu'],

  /* ---------------- VOLCANES DEL MUNDO (20) ---------------- */
  ['volcanes-mundo', 'un volcán del mundo',
    'vesubio,etna,teide,fuji,kilimanjaro|krakatoa,santorini,eyjafjallajökull,stromboli,popocatépetl|mauna loa,kilauea,cotopaxi,chimborazo,nevado del ruiz|pinatubo,tambora,hunga tonga,nyiragongo,laki'],

  /* ---------------- MARAVILLAS ANTIGUAS (7) ---------------- */
  ['maravillas-antiguas', 'una maravilla del mundo antiguo',
    'gran pirámide de giza,jardines colgantes de babilonia,estatua de zeus en olimpia|templo de artemisa en éfeso,mausoleo de halicarnaso|coloso de rodas,faro de alejandría'],

  /* ---------------- MARAVILLAS MODERNAS (7) ---------------- */
  ['maravillas-modernas', 'una maravilla del mundo moderno',
    'gran muralla china,petra,coliseo,chichén itzá|machu picchu,taj mahal,cristo redentor'],

  /* ---------------- PARQUES NACIONALES DEL MUNDO (20) ---------------- */
  ['parques-nacionales-mundo', 'un parque nacional del mundo',
    'yellowstone,yosemite,serengeti,kruger,galápagos|torres del paine,iguazú,plitvice,banff,jasper|doñana,ordesa,teide,picos de europa,timanfaya|garajonay,monfragüe,aigüestortes,sierra nevada,caldera de taburiente']

);
