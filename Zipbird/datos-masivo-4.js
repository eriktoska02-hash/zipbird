/* ==========================================================
   BANCO MASIVO · CINE, SERIES, MÚSICA, ARTE Y VIDEOJUEGOS
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  /* ---------------- DIRECTORES DE CINE ---------------- */
  ['directores-cine', 'un director de cine',
    'spielberg,scorsese,kubrick,hitchcock,tarantino|coppola,nolan,almodóvar,buñuel,fellini|kurosawa,chaplin,wilder,lean,ford|capra,cameron,ridley scott,fincher,villeneuve|bay,eastwood,allen,polanski,del toro'],

  /* ---------------- ACTRICES ---------------- */
  ['actrices', 'una actriz famosa',
    'meryl streep,audrey hepburn,marilyn monroe,katharine hepburn,bette davis|ingrid bergman,sophia loren,elizabeth taylor,julia roberts,nicole kidman|cate blanchett,natalie portman,scarlett johansson,emma stone,jennifer lawrence|penélope cruz,salma hayek,carmen maura,maribel verdú,ana de armas|charlize theron,angelina jolie,kate winslet,jodie foster,glenn close'],

  /* ---------------- PELÍCULAS DE TERROR ---------------- */
  ['peliculas-terror', 'una película de terror',
    'el exorcista,psicosis,el resplandor,halloween,viernes 13|pesadilla en elm street,scream,it,el conjuro,annabelle|la monja,hereditary,midsommar,el bebé de rosemary,la profecía|alien,saw,hostel,the ring,la casa muda'],

  /* ---------------- PELÍCULAS DE CIENCIA FICCIÓN ---------------- */
  ['peliculas-ciencia-ficcion', 'una película de ciencia ficción',
    '2001,blade runner,alien,aliens,matrix|interestelar,origen,gravity,marte,e.t.|star wars,star trek,terminator,regreso al futuro,jurassic park|avatar,dune,la llegada,distrito 9,ex machina'],

  /* ---------------- PELÍCULAS DE ACCIÓN ---------------- */
  ['peliculas-accion', 'una película de acción',
    'die hard,mad max,gladiator,braveheart,misión imposible|james bond,indiana jones,rambo,rocky,top gun|john wick,the raid,kill bill,los vengadores,sin perdón'],

  /* ---------------- PELÍCULAS DE COMEDIA ---------------- */
  ['peliculas-comedia', 'una película de comedia',
    'el gran lebowski,resacón en las vegas,american pie,la vida de brian,monty python|airplane,top secret,solo en casa,cazafantasmas,men in black|shrek,ted,superbad,la boda de mi mejor amiga,hermanos por pelotas'],

  /* ---------------- SAGAS DE CINE ---------------- */
  ['sagas-cine', 'una saga de cine',
    'star wars,harry potter,el señor de los anillos,marvel,dc|rápido y furioso,misión imposible,james bond,indiana jones,piratas del caribe|matrix,terminator,alien,depredador,jurassic park|rocky,crepúsculo,cazafantasmas,el hobbit,los juegos del hambre'],

  /* ---------------- PELÍCULAS DE ANIMACIÓN ---------------- */
  ['peliculas-animacion', 'una película de animación',
    'toy story,buscando a nemo,el rey león,shrek,coco|up,wall-e,frozen,moana,encanto|del revés,los increíbles,ratatouille,monsters inc,cars|kung fu panda,cómo entrenar a tu dragón,spider-man un nuevo universo,el viaje de chihiro,mi vecino totoro'],

  /* ---------------- PELÍCULAS GANADORAS DEL ÓSCAR ---------------- */
  ['peliculas-oscar', 'una película ganadora del Óscar',
    'el padrino,casablanca,lo que el viento se llevó,ben-hur,titanic|gladiator,braveheart,forrest gump,la lista de schindler,salvar al soldado ryan|el silencio de los corderos,american beauty,million dollar baby,slumdog millionaire,el discurso del rey|argo,12 años de esclavitud,birdman,moonlight,parasite|oppenheimer'],

  /* ---------------- SERIES DE COMEDIA ---------------- */
  ['series-comedia', 'una serie de comedia',
    'friends,how i met your mother,the big bang theory,seinfeld,the office|modern family,brooklyn nine-nine,parks and recreation,community,scrubs|frasier,cheers,los simpson,padre de familia,south park'],

  /* ---------------- SERIES DE DRAMA ---------------- */
  ['series-drama', 'una serie de drama',
    'breaking bad,the wire,los soprano,mad men,better call saul|the crown,downton abbey,juego de tronos,vikingos,peaky blinders|succession,ozark,narcos,el cuento de la criada,this is us'],

  /* ---------------- SERIES POLICIACAS ---------------- */
  ['series-policiacas', 'una serie policiaca',
    'csi,law and order,ncis,mentes criminales,bones|castle,the mentalist,dexter,true detective,sherlock|luther,broadchurch,foyle war,colombo,miami vice'],

  /* ---------------- SERIES MÉDICAS ---------------- */
  ['series-medicas', 'una serie médica',
    'house,anatomía de grey,er,scrubs,chicago med|new amsterdam,the good doctor,doogie howser,nurse jackie,diagnóstico asesinato'],

  /* ---------------- SERIES DE FANTASÍA ---------------- */
  ['series-fantasia', 'una serie de fantasía',
    'juego de tronos,el señor de los anillos los anillos de poder,the witcher,stranger things,buffy|angel,charmed,supernatural,lost,the vampire diaries|true blood,shadowhunters,merlin,once upon a time,good omens'],

  /* ---------------- PERSONAJES LITERARIOS ---------------- */
  ['personajes-literarios', 'un personaje literario',
    'don quijote,sancho panza,hamlet,romeo,julieta|macbeth,otelo,frankenstein,drácula,sherlock holmes|watson,hercule poirot,miss marple,james bond,frodo|gandalf,harry potter,hermione,dumbledore,katniss everdeen|jay gatsby,moby dick,el principito,ana karenina,emma bovary'],

  /* ---------------- OBRAS DE TEATRO ---------------- */
  ['obras-teatro', 'una obra de teatro famosa',
    'hamlet,macbeth,otelo,rey lear,romeo y julieta|sueño de una noche de verano,la vida es sueño,fuenteovejuna,el perro del hortelano,casa de muñecas|esperando a godot,la cantante calva,las criadas,bodas de sangre,la casa de bernarda alba'],

  /* ---------------- CÓMICS ---------------- */
  ['comics', 'un cómic famoso',
    'superman,batman,spider-man,x-men,los vengadores|iron man,capitán américa,hulk,thor,wonder woman|flash,green lantern,watchmen,maus,tintín|astérix,mortadelo y filemón,blueberry,hellboy,sin city'],

  /* ---------------- VILLANOS ---------------- */
  ['villanos', 'un villano famoso',
    'darth vader,joker,thanos,loki,magneto|lex luthor,doctor doom,green goblin,veneno,carnage|bane,espantapájaros,voldemort,sauron,gollum|hannibal lecter,freddy krueger,jason voorhees,michael myers,pennywise|drácula'],

  /* ---------------- SAGAS DE VIDEOJUEGOS ---------------- */
  ['sagas-videojuegos', 'una saga de videojuegos',
    'mario,zelda,pokémon,final fantasy,dragon quest|sonic,halo,god of war,assassin s creed,call of duty|battlefield,grand theft auto,red dead redemption,the elder scrolls,fallout|mass effect,metal gear,resident evil,silent hill,tomb raider|uncharted,ratchet and clank,sly cooper,crash bandicoot,spyro|mortal kombat,street fighter,tekken,super smash bros|destiny,apex legends,fortnite,pubg,roblox|minecraft,terraria,stardew valley,animal crossing,the sims|doom,quake,wolfenstein,half life,portal|diablo,warcraft,overwatch,hearthstone,world of warcraft|the witcher,cyberpunk,elden ring,dark souls,bloodborne|monster hunter,persona,fire emblem,xenoblade,metroid|donkey kong,kirby,star fox,f-zero,wave race|gran turismo,forza,need for speed,burnout,trackmania|fifa,pes,nba 2k,madden nhl,mlb the show|tony hawk,ssx,wave race 64,1080,excitebike|wii sports,wii fit,wii play,wii resort,wii party'],

  /* ---------------- VIDEOJUEGOS DE NINTENDO ---------------- */
  ['videojuegos-nintendo', 'un videojuego de Nintendo',
    'super mario bros,zelda,pokémon rojo,donkey kong,metroid|kirby,star fox,animal crossing,splatoon,pikmin|fire emblem,xenoblade,mario kart,super smash bros,luigi s mansion|super mario 64,super mario sunshine,super mario galaxy,super mario odyssey|zelda ocarina of time,zelda majora s mask,zelda wind waker,zelda twilight princess|zelda skyward sword,zelda breath of the wild,zelda tears of the kingdom|pokemon rojo,pokemon azul,pokemon amarillo,pokemon oro,pokemon plata|pokemon diamante,pokemon perla,pokemon platino,pokemon negro,pokemon blanco|pokemon x,pokemon y,pokemon sol,pokemon luna,pokemon escudo,pokemon espada|pokemon escarlata,pokemon púrpura,pokemon legends arceus|donkey kong country,donkey kong 64,donkey kong tropical freeze|metroid prime,metroid fusion,metroid zero mission,metroid dread|kirby dream land,kirby super star,kirby air ride,kirby planet robobot|animal crossing wild world,animal crossing city folk,animal crossing new leaf,animal crossing new horizons|splatoon,splatoon 2,splatoon 3|pikmin,pikmin 2,pikmin 3,pikmin 4|fire emblem awakening,fire emblem fates,fire emblem three houses,fire emblem engage|xenoblade chronicles,xenoblade chronicles 2,xenoblade chronicles 3|mario kart 64,mario kart double dash,mario kart wii,mario kart 8,mario kart 8 deluxe|super smash bros,super smash bros melee,super smash bros brawl,super smash bros for wii u,super smash bros ultimate|luigi s mansion,luigi s mansion 2,luigi s mansion 3|wii sports,wii sports resort,wii fit,wii play,wii party'],

  /* ---------------- POKÉMON ---------------- */
  ['pokemon', 'un pokémon',
    'pikachu,charizard,bulbasaur,squirtle,charmander|blastoise,venusaur,mewtwo,mew,eevee|snorlax,gengar,gyarados,dragonite,arcanine|lapras,jigglypuff,psyduck,machamp,alakazam|onix,geodude,zubat,magikarp,ditto|vaporeon,jolteon,flareon,umbreon,lucario'],

  /* ---------------- MANGAS ---------------- */
  ['mangas', 'un manga famoso',
    'one piece,naruto,bleach,dragon ball,death note|attack on titan,demon slayer,my hero academia,fullmetal alchemist,tokyo ghoul|sailor moon,doraemon,detective conan,slam dunk,berserk'],

  /* ---------------- PERSONAJES DE ANIME ---------------- */
  ['personajes-anime', 'un personaje de anime',
    'goku,naruto,luffy,ichigo,light yagami|l,eren yeager,tanjiro,nezuko,deku|edward elric,sailor moon,shinji ikari,asuka,vegeta'],

  /* ---------------- SERIES INFANTILES ---------------- */
  ['series-infantiles', 'una serie infantil',
    'barrio sésamo,los teletubbies,bob esponja,doraemon,shin chan|los simpson,padre de familia,south park,bob el constructor,caillou|peppa pig,pocoyó,bluey,las tres mellizas,dragon ball z'],

  /* ---------------- PRESENTADORES ---------------- */
  ['presentadores', 'un presentador de televisión',
    'david letterman,jay leno,conan o brien,oprah winfrey,ellen degeneres|jimmy fallon,jimmy kimmel,stephen colbert,trevor noah,john oliver|andreu buenafuente,el gran wyoming,pablo motos,julia otero,mercedes milá'],

  /* ---------------- STREAMERS ---------------- */
  ['streamers', 'un streamer famoso',
    'ibai,auronplay,rubius,elxokas,thegrefg|squeezie,ninja,pokimane,xqc,kai cenat'],

  /* ---------------- VIDEOJUEGOS MÓVILES ---------------- */
  ['videojuegos-moviles', 'un videojuego móvil',
    'candy crush,clash of clans,clash royale,angry birds,subway surfers|among us,pokémon go,monument valley,altos odyssey,plantas vs zombies|hay day,farmville,homescapes,gardenscapes,fishdom|block blast,tetris,puzzle bobble,bubble witch,candy crush soda|clash royale,brawl stars,clash of clans,boom beach,hay day|among us,fall guys mobile,roblox,minecraft pocket,terraria mobile|subway surfers,temple run,minion rush,despicable me,sonic dash|pokemon go,pokemon unite,pokemon masters ex,pokemon sleep|genshin impact,honkai star rail,honkai impact 3|free fire,pubg mobile,call of duty mobile,fortnite mobile|lego star wars,lego harry potter,lego marvel|angry birds friends,angry birds star wars,angry birds transformers|plants vs zombies,plants vs zombies 2|hearthstone,legends of runeterra,gwent|shadow fight,mortal kombat mobile,tekken mobile|asphalt 9,asphalt 8,real racing 3|hay day,block blast,tetris,puzzle bobble,bubble witch'],

  /* ---------------- CANCIONES ---------------- */
  ['canciones', 'una canción famosa',
    'bohemian rhapsody,imagine,like a rolling stone,smells like teen spirit,billie jean|thriller,hey jude,let it be,hotel california,stairway to heaven|sweet child o mine,wonderwall,despacito,la macarena,ymca|dancing queen,rolling in the deep,shape of you,blinding lights,la vida es un carnaval'],

  /* ---------------- ÁLBUMES ---------------- */
  ['albumes', 'un álbum musical famoso',
    'thriller,abbey road,the dark side of the moon,the wall,nevermind|back in black,rumours,sgt pepper,born to run,purple rain|ok computer,the joshua tree,appetite for destruction,21,lemonade'],

  /* ---------------- COMPOSITORES ---------------- */
  ['compositores', 'un compositor de música clásica',
    'bach,mozart,beethoven,haydn,handel|vivaldi,schubert,schumann,brahms,chopin|liszt,wagner,verdi,puccini,tchaikovsky|mahler,debussy,ravel,stravinsky,prokofiev'],

  /* ---------------- ÓPERAS ---------------- */
  ['operas', 'una ópera famosa',
    'la traviata,rigoletto,aida,carmen,la bohème|tosca,madama butterfly,turandot,don giovanni,las bodas de fígaro|la flauta mágica,el barbero de sevilla,norma,nabucco,otelo'],

  /* ---------------- FESTIVALES DE MÚSICA ---------------- */
  ['festivales-musica', 'un festival de música',
    'coachella,glastonbury,tomorrowland,lollapalooza,rock in rio|primavera sound,mad cool,viña del mar,sanremo,woodstock'],

  /* ---------------- DISCOGRÁFICAS ---------------- */
  ['discograficas', 'una discográfica',
    'universal,sony,warner,emi,columbia|atlantic,interscope,def jam'],

  /* ---------------- ACORDES ---------------- */
  ['acordes', 'un acorde musical',
    'do mayor,re mayor,mi mayor,fa mayor,sol mayor|la mayor,si mayor,do menor,re menor,mi menor'],

  /* ---------------- MUSEOS ---------------- */
  ['museos', 'un museo famoso',
    'louvre,prado,reina sofía,thyssen,british museum|national gallery,metropolitan,moma,guggenheim,vaticano|uffizi,hermitage,rijksmuseum,orsay,pompidou'],

  /* ---------------- OBRAS DE ARTE ---------------- */
  ['obras-arte', 'una obra de arte famosa',
    'mona lisa,la última cena,guernica,las meninas,la noche estrellada|los girasoles,el grito,la persistencia de la memoria,el jardín de las delicias,el nacimiento de venus|la creación de adán,la joven de la perla,american gothic,campbell s soup cans,el beso'],

  /* ---------------- ARQUITECTOS ---------------- */
  ['arquitectos', 'un arquitecto famoso',
    'gaudí,le corbusier,frank lloyd wright,mies van der rohe,zaha hadid|norman foster,renzo piano,santiago calatrava,i. m. pei,brunelleschi|miguel ángel,andrea palladio'],

  /* ---------------- ESCULTORES ---------------- */
  ['escultores', 'un escultor famoso',
    'miguel ángel,bernini,rodin,praxíteles,fidias|donatello,cellini,canova,giacometti,henry moore|chillida,botero'],

  /* ---------------- VIDEOJUEGOS DE PLAYSTATION ---------------- */
  ['videojuegos-playstation', 'un videojuego de PlayStation',
    'crash bandicoot,sly cooper,ratchet and clank,uncharted,the last of us|god of war,horizon zero dawn,horizon forbidden west,gran turismo,bloodborne|demon s souls,dark souls,elden ring,sekiro,ghost of tsushima|infamous,killzone,resistance,littlebigplanet,tearaway|journey,flower,abzu|spider man,miles morales,wolverine|death stranding|until dawn,the quarry,detroit become human,heavy rain|returnal,ratchet and clank rift apart|sackboy littlebigplanet,astrobot'
  ],

  /* ---------------- VIDEOJUEGOS DE XBOX ---------------- */
  ['videojuegos-xbox', 'un videojuego de Xbox',
    'halo,gears of war,forza horizon,forza motorsport,fable|perfect dark,banjo kazooie,conker,project gotham|crackdown,state of decay,sunset overdrive,quantum break,ori|sea of thieves,grounded,pentiment,hi-fi rush,starfield|halo combat evolved,halo 2,halo 3,halo 4,halo 5,halo infinite|gears of war 1,gears of war 2,gears of war 3,gears of war 4,gears 5|fable 1,fable 2,fable 3,fable anniversary|ori blind forest,ori will of the wisps|starfield'
  ],

  /* ---------------- VIDEOJUEGOS DE PC ---------------- */
  ['videojuegos-pc', 'un videojuego de PC',
    'league of legends,dota 2,overwatch,valorant,counter strike|the sims,simcity,civilization,age of empires,command and conquer|diablo,starcraft,warcraft,hearthstone,wow|the witcher,cyberpunk,elden ring,dark souls,bloodborne|minecraft,terraria,stardew valley,valheim,rust|among us,fall guys,rocket league,fallout,skyrim|half life,portal,team fortress,left 4 dead|doom,quake,wolfenstein,prey,dishonored|deus ex,thief,system shock,bioshock|serious sam,painkiller,bulletstorm'
  ],

  /* ---------------- VIDEOJUEGOS INDIE ---------------- */
  ['videojuegos-indie', 'un videojuego indie',
    'undertale,celeste,hollow knight,stardew valley,hotline miami|braid,fez,limbo,inside,journey|florence,abzu|return of the obra dinn,papers please|slay the spire,into the breach,faster than light|untitled goose game,what the golf|overcooked,overcooked 2|risk of rain,enter the gungeon,dead cells,hades|hyper light drifter,blasphemous'
  ]

);
