/* ==========================================================
   BANCO DE RESPUESTAS · CINE, SERIES Y CULTURA POP
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['peliculas-disney', 'una película de Disney',
    'el rey león,aladdín,frozen,la sirenita,blancanieves|la bella y la bestia,pocahontas,mulán,tarzán,encanto|valiente,hércules,peter pan,dumbo,bambi|pinocho,la dama y el vagabundo,el libro de la selva,atlantis,hermano oso|el planeta del tesoro,tarón y el caldero mágico,el emperador y sus locuras,lilo y stitch,rompe ralph'],

  ['peliculas-pixar', 'una película de Pixar',
    'toy story,buscando a nemo,los increíbles,cars,up|monstruos sa,ratatouille,wall-e,del revés,coco|el viaje de arlo,onward,soul,luca,red|bichos,aviones,monstruos university,buscando a dory,toy story 4|el buen dinosaurio,cars 2,lightyear,elemental,cars 3'],

  ['peliculas-famosas', 'una película famosa',
    'titanic,el padrino,star wars,harry potter,el señor de los anillos|jurassic park,matrix,avatar,gladiator,forrest gump|pulp fiction,el club de la lucha,inception,interstellar,el resplandor|ciudadano kane,psicosis,2001,blade runner,apocalypse now|ciudad de dios,oldboy,los siete samuráis,el séptimo sello,stalker'],

  ['personajes-disney', 'un personaje de Disney',
    'mickey mouse,donald,goofy,minnie,pluto|simba,ariel,elsa,aladdín,blancanieves|bella,vaiana,rapunzel,stich,mulán|tarzán,hércules,pinocho,bambi,dumbo|olaf,timón,pumba,abú,flounder'],

  ['superheroes-marvel', 'un superhéroe de Marvel',
    'spiderman,iron man,capitán américa,thor,hulk|viuda negra,doctor strange,pantera negra,capitana marvel,ant-man|wolverine,deadpool,visión,scarlet witch,hawkeye|groot,rocket,star-lord,daredevil,punisher|namor,ka-zar,medusa,black bolt,quasar'],

  ['superheroes-dc', 'un superhéroe de DC',
    'batman,superman,mujer maravilla,flash,aquaman|linterna verde,cyborg,green arrow,shazam,supergirl|robin,nightwing,superboy,batgirl,ravager|constantine,swamp thing,zatanna,black canary,blue beetle|oracle,huntress,atom,hawkman,martian manhunter'],

  ['superheroes', 'un superhéroe',
    'superman,batman,spiderman,hulk,iron man|capitán américa,thor,mujer maravilla,flash,aquaman|linterna verde,doctor strange,pantera negra,capitana marvel,deadpool|wolverine,ant-man,visión,supergirl,robin|namor,quasar,medusa,black bolt,ka-zar'],

  ['personajes-star-wars', 'un personaje de Star Wars',
    'luke skywalker,darth vader,han solo,leia,yoda|chewbacca,r2-d2,c-3po,obi-wan kenobi,kylo ren|palpatine,boba fett,anakin skywalker,padmé,rey|mace windu,qui-gon jinn,dooku,jabba el hutt,almirante ackbar|ahsoka tano,kit fisto,plo koon,ventress,thrawn'],

  ['personajes-harry-potter', 'un personaje de Harry Potter',
    'harry potter,hermione,ron,dumbledore,voldemort|snape,hagrid,draco malfoy,sirius black,dobby|mcgonagall,ginny weasley,luna lovegood,neville,bellatrix|lupin,tonks,moody,fleur,krum|sprout,flitwick,slughorn,umbridge,quirrell'],

  ['personajes-dibujos', 'un personaje de dibujos animados',
    'homer simpson,bob esponja,pikachu,bugs bunny,tom y jerry|mickey mouse,shrek,bart simpson,popeye,pedro picapiedra|scooby doo,goku,naruto,piolín,correcaminos|snoopy,garfield,calvin,mafalda,mortadelo|filemón,zipi y zape,cleo,doraemon,shin chan'],

  ['personajes-videojuegos', 'un personaje de videojuego',
    'mario,sonic,link,pikachu,lara croft|kratos,master chief,cloud,nathan drake,zelda|samus,crash bandicoot,spyro,ratchet,joel|ellie,arthur morgan,geralt,aloy,2b|kirby,donkey kong,yoshi,toad,bowser'],

  ['libros-famosos', 'un libro famoso',
    'el quijote,harry potter,el señor de los anillos,el principito,1984|cien años de soledad,la odisea,los juegos del hambre,orgullo y prejuicio,el hobbit|drácula,frankenstein,moby dick,crimen y castigo,el gran gatsby|lolita,ulises,en busca del tiempo perdido,la divina comedia,el proceso|el extranjero,fahrenheit 451,un mundo feliz,el nombre de la rosa,la sombra del viento'],

  ['escritores-mundo', 'un escritor famoso',
    'shakespeare,cervantes,dickens,tolstói,hemingway|borges,garcía márquez,orwell,kafka,poe|stephen king,agatha christie,umberto eco,proust,dostoievski|virginia woolf,joyce,nabokov,cortázar,neruda|murakami,saramago,coetzee,pamuk,ishiguro'],

  ['artistas-mundo', 'un pintor famoso',
    'picasso,van gogh,da vinci,monet,dalí|miguel ángel,rembrandt,velázquez,klimt,warhol|kandinsky,mondrian,matisse,botticelli,caravaggio|rubens,tiziano,el greco,goya,pollock|rothko,bacon,hockney,basquiat,chagall'],

  ['grupos-musica', 'un grupo de música',
    'the beatles,queen,rolling stones,u2,pink floyd|led zeppelin,metallica,nirvana,coldplay,ac/dc|abba,guns n roses,red hot chili peppers,radiohead,oasis|the doors,the who,depeche mode,the cure,kraftwerk|can,neu,faust,tangerine dream,cocteau twins'],

  ['youtubers', 'un youtuber o streamer español',
    'elrubius,auronplay,vegetta777,willyrex,ibai|thegrefg,alexby,jordi wild,illojuan,river|plex,spok,mangel,luzu,dross'],

  ['actores-hollywood', 'un actor o actriz de Hollywood',
    'tom cruise,brad pitt,leonardo dicaprio,johnny depp,will smith|angelina jolie,scarlett johansson,robert downey jr,morgan freeman,tom hanks|emma watson,jennifer lawrence,dwayne johnson,denzel washington,meryl streep|al pacino,robert de niro,jack nicholson,anthony hopkins,kevin spacey|gary oldman,daniel day-lewis,joaquin phoenix,cate blanchett,philip seymour hoffman'],

  ['personajes-historicos', 'un personaje histórico',
    'napoleón,cleopatra,julio césar,alejandro magno,colón|franco,hitler,kennedy,lincoln,washington|gandhi,mandela,churchill,marco polo,gengis kan|ramsés,tutankamón,leonardo da vinci,galileo,newton|carlomagno,atila,nerón,calígula,salomón'],

  ['dioses-griegos', 'un dios de la mitología griega',
    'zeus,poseidón,hades,atenea,apolo|hermes,artemisa,afrodita,ares,hefesto|hercules,dioniso,deméter,perséfone,helios|cronos,rea,urano,gaia,hidra|nyx,eris,hypnos,thanatos,morpheo'],

  ['animes', 'un anime',
    'dragon ball,naruto,one piece,pokémon,attack on titan|death note,my hero academia,demon slayer,bleach,saint seiya|evangelion,gundam,hunter x hunter,fullmetal alchemist,jojo|conan,initial d,akira,code geass,steins gate|cowboy bebop,samurai champloo,monster,mushishi,texhnolyze'],

  ['series-mundo', 'una serie de televisión famosa',
    'friends,breaking bad,game of thrones,the office,stranger things|los simpson,lost,house,dexter,peaky blinders|better call saul,the wire,los soprano,dark,the crown|twin peaks,the mandalorian,westworld,succession,fleabag|mad men,the leftovers,six feet under,the shield,oz']

);
