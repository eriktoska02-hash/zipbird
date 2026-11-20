/* ==========================================================
   BANCO DE RESPUESTAS · DEPORTE, MÚSICA, JUEGOS Y OCIO
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['deportes', 'un deporte',
    'fútbol,baloncesto,tenis,natación,ciclismo|atletismo,balonmano,voleibol,pádel,golf|rugby,béisbol,hockey,esgrima,bádminton|waterpolo,piragüismo,escalada,surf,esquí|curling,lacrosse,croquet,polo,sóftbol'],

  ['deportes-olimpicos', 'un deporte olímpico',
    'atletismo,natación,gimnasia,esgrima,remo|judo,taekwondo,halterofilia,tiro con arco,vela|piragüismo,bádminton,tenis de mesa,hockey sobre hierba,pentatlón|trampolín,saltos ornamentales,lucha grecorromana,breakdance,escalada deportiva|curling,luge,bobsleigh,skateboarding,surf olímpico'],

  ['deportes-equipo', 'un deporte de equipo',
    'fútbol,baloncesto,balonmano,voleibol|rugby,béisbol,hockey,waterpolo|fútbol sala,baloncesto 3x3,korfball,ultimate|polo,lacrosse,netball,floorball|sepak takraw,bossaball,kin-ball,tchoukball'],

  ['deportes-agua', 'un deporte acuático',
    'natación,waterpolo,surf,remo|piragüismo,vela,buceo,saltos|esquí acuático,wakeboard,apnea,rafting|nado sincronizado,barranquismo,snorkel,kitesurf|windsurf,hydrospeed,underwater hockey,apnea libre'],

  ['deportes-invierno', 'un deporte de invierno',
    'esquí,snowboard,patinaje,hockey sobre hielo|curling,biatlón,trineo,esquí de fondo|saltos de esquí,eslalon,combinada nórdica,luge|skeleton,bobsleigh,esquí acrobático,boardercross|skijoring,esquí de travesía,patinaje de velocidad,esquí nórdico'],

  ['artes-marciales', 'un arte marcial',
    'karate,judo,taekwondo,boxeo,kung fu|aikido,jiu-jitsu,muay thai,kickboxing,capoeira|sumo,krav maga,sambo,hapkido,wing chun|kendo,iaido,kyudo,kalaripayattu,silat|bartitsu,bajiquan,dambe,okichitaw,shorinji kempo'],

  ['pruebas-atletismo', 'una prueba de atletismo',
    'maratón,100 metros,salto de longitud,jabalina|400 metros,salto de altura,vallas,lanzamiento de peso|800 metros,5.000 metros,salto con pértiga,lanzamiento de martillo|10.000 metros,3.000 obstáculos,decatlón,heptatlón|marcha atlética,media maratón,relevos 4x400,lanzamiento de disco'],

  ['instrumentos', 'un instrumento musical',
    'guitarra,piano,batería,violín,trompeta|flauta,saxofón,tambor,arpa,acordeón|clarinete,trombón,tuba,chelo,contrabajo|xilófono,banjo,mandolina,ukelele,oboe|teremín,sitar,oud,didgeridoo,erhu'],

  ['instrumentos-viento', 'un instrumento de viento',
    'flauta,trompeta,saxofón,clarinete|trombón,tuba,oboe,fagot|trompa,flautín,armónica,gaita|corneta,fliscorno,ocarina,duduk|shakuhachi,didgeridoo,nay,bansuri,quena'],

  ['instrumentos-cuerda', 'un instrumento de cuerda',
    'guitarra,violín,chelo,contrabajo,arpa|viola,ukelele,banjo,mandolina,bajo|laúd,sitar,balalaica,lira,clave|salterio,dulcémele,oud,guzheng,koto|erhu,nyckelharpa,tiorba,zanfoña,hurdy-gurdy'],

  ['instrumentos-percusion', 'un instrumento de percusión',
    'batería,tambor,pandereta,triángulo|maracas,campanas,xilófono,bongos|congas,timbales,cajón,castañuelas|djembe,tabla,gong,marimba|hang,caxixi,udu,berimbau,cuíca'],

  ['generos-musicales', 'un género musical',
    'rock,pop,reggaetón,flamenco,música clásica|jazz,hip hop,electrónica,salsa,bachata|heavy metal,indie,blues,cumbia,country|reggae,techno,house,trap,bolero|drum and bass,dubstep,k-pop,cantautor,new age'],

  ['bailes', 'un baile',
    'salsa,sevillanas,bachata,vals,jota|tango,flamenco,samba,merengue,cumbia|chachachá,rumba,mambo,pasodoble,bolero|foxtrot,swing,lindy hop,vogue,breakdance|kathak,bharatanatyam,polca,contradanza,czardas'],

  ['juegos-mesa', 'un juego de mesa',
    'monopoly,parchís,oca,ajedrez,damas|póker,dominó,bingo,scrabble,trivial|risk,catan,cluedo,twister,jenga|backgammon,mahjong,carcassonne,dixit,bang|go,shogi,hive,azul,wingspan'],

  ['juguetes', 'un juguete',
    'pelota,muñeca,coche teledirigido,lego,peluche|consola,comba,yoyó,peonza,puzzle|canicas,tren eléctrico,casita de muñecas,playmobil,figuras de acción|scalextric,tamagotchi,furby,barbie,ken|meccano,tente,cromos,spirograph,telesketch'],

  ['juegos-populares', 'un juego popular de calle',
    'pilla-pilla,escondite,balón prisionero,rayuela|tira y afloja,gallinita ciega,el pañuelo,tres en raya|carrera de sacos,limbo,bolos,petanca|calva,chito,la rana,herradura,tejo|barra aragonesa,estornela,birles,petos,boliche'],

  ['asignaturas', 'una asignatura del colegio',
    'matemáticas,lengua,inglés,historia,ciencias|física,química,biología,geografía,educación física|filosofía,arte,plástica,música,tecnología|latín,griego,informática,religión,economía|estadística,psicología,anatomía,geología,astronomía'],

  ['redes-sociales', 'una red social',
    'instagram,facebook,whatsapp,tiktok,twitter|youtube,snapchat,telegram,linkedin,pinterest|twitch,reddit,tumblr,threads,be real|discord,mastodon,bluesky,vimeo,flickr|vero,clubhouse,parler,gab,rumble'],

  ['apps', 'una aplicación móvil',
    'whatsapp,instagram,youtube,spotify,tiktok|netflix,google maps,amazon,uber,waze|wallapop,idealista,airbnb,glovo,just eat|badoo,tinder,strava,duolingo,shazam|signal,notion,obsidian,anki,bing'],

  ['videojuegos', 'un videojuego',
    'minecraft,fifa,fortnite,gta,mario|zelda,among us,roblox,clash royale,los sims|call of duty,league of legends,valorant,overwatch,terraria|dark souls,elden ring,red dead redemption,god of war,the last of us|hollow knight,stardew valley,disco elysium,outer wilds,baldur s gate'],

  ['consolas', 'una consola de videojuegos',
    'playstation,xbox,nintendo switch,game boy,sega|nintendo 64,gamecube,wii,psp,atari|dreamcast,master system,game gear,virtual boy,steam deck|neogeo,3do,jaguar,cd-i,wonderswan|colecovision,intellivision,vectrex,fairchild channel f,n-gage']

);
