/* ==========================================================
   BANCO DE RESPUESTAS · COMIDA, CASA, CUERPO Y ROPA
   Formato: [id, "un/una ...", "nivel1|nivel2|nivel3|nivel4|nivel5"]
   Nivel 1 = más común · Nivel 5 = menos conocida
   Sinónimos con ~
   ========================================================== */

window.CATEGORIAS = window.CATEGORIAS || [];

CATEGORIAS.push(

  ['postres', 'un postre',
    'flan,helado,tarta de chocolate,tiramisú,arroz con leche|natillas,crema catalana,profiteroles,mousse,brownie|panna cotta,tarta de queso,churros con chocolate,tocino de cielo,pastel de tres leches|bienmesabe,leche frita,tarta de Santiago,panellet,buñuelo|quesada pasiega,fartons,pastissets,rosquillas de anís,casadielles'],

  ['bebidas', 'una bebida',
    'agua,leche,café,cerveza,refresco|té,zumo,vino,chocolate caliente,batido|sangría,sidra,vermut,licor,cóctel|horchata,agua de valencia,tinto de verano,kalimotxo,mosto|hidromiel,absenta,grappa,pacharán,orujo'],

  ['especias', 'una especia',
    'pimienta,orégano,comino,azafrán,pimentón|canela,nuez moscada,jengibre,curri,hierbabuena|laurel,tomillo,romero,albahaca,perejil|cúrcuma,cardamomo,clavo,anís,estragón|sumac,zaatar,fenogreco,galanga,ajedrea'],

  ['quesos', 'un tipo de queso',
    'manchego,parmesano,cheddar,mozzarella,mahón|gouda,brie,camembert,roquefort,gruyer|queso de cabra,gorgonzola,azul,idiazábal,tetilla|reblochon,comté,pecorino,raclette,emmental|mimolette,époisses,taleggio,valdeón,cabrales'],

  ['panes', 'un tipo de pan',
    'baguette,pan de molde,pan integral,barra,bollo|focaccia,pan de centeno,chapata,croissant,bagel|naan,ciabatta,pita,brioche,pan de hamburguesa|hogaza,masa madre,pretzel,tortilla de maíz,pan de aceitunas|pan de espelta,pan de kamut,pan de pasas,pan de soda,pan de leña'],

  ['dulces', 'un dulce',
    'chocolate,galleta,caramelo,chicle,donut|magdalena,croissant,churro,helado,bizcocho|brownie,crepe,gofre,flan,helado de vainilla|turrón,mazapán,polvorón,pestiño,alfajor|teja,guirlache,fruta de sartén,buñuelo de calabaza,coca de sant joan'],

  ['embutidos', 'un embutido',
    'jamón,chorizo,salchicha,mortadela,salami|salchichón,butifarra,fuet,sobrasada,lomo|morcilla,cecina,longaniza,chistorra,botillo|salchichón de Vic,androlla,sobrasada de Mallorca,morcón,salchicha de Zaratán|butifarra negra,chorizo de Cantimpalos,sobrasada ibicenca,salchicha de Frankfurt,chorizo pamplonica'],

  ['utensilios-cocina', 'un utensilio de cocina',
    'cuchillo,tenedor,cuchara,sartén,olla|plato,vaso,taza,tabla de cortar,espátula|batidor,colador,rallador,pelador,cazo|mortero,mandolina,termómetro,balanza,sacacorchos|chino,espumadera,mondador,afilador,mezzaluna'],

  ['electrodomesticos', 'un electrodoméstico',
    'nevera,lavadora,horno,microondas,televisión|lavavajillas,secadora,aspiradora,tostadora,batidora|cafetera,plancha,ventilador,aire acondicionado,freidora|calefactor,humidificador,robot de cocina,air fryer,licuadora|deshidratador,envasadora al vacío,máquina de pan,fuente de chocolate,yogurtera'],

  ['muebles', 'un mueble',
    'cama,sofá,mesa,silla,armario|estantería,cómoda,escritorio,sillón,taburete|aparador,banco,mecedora,litera,tocador|bargueño,pupitre,velador,diván,chaiselongue|consola,vitrina,recibidor,banqueta,mesita'],

  ['herramientas', 'una herramienta',
    'martillo,destornillador,llave inglesa,alicates,sierra|taladro,clavo,tornillo,cinta métrica,nivel|formón,lima,cepillo,lijadora,amoladora|soldador,sierra circular,cincel,sargento,escuadra|escoplo,garlopa,berbiquí,buril,azuela'],

  ['prendas', 'una prenda de vestir',
    'camiseta,pantalón,vestido,chaqueta,zapatos|camisa,jersey,falda,abrigo,calcetines|sudadera,traje,chaleco,gorro,bufanda|gabardina,impermeable,mono,pijama,guantes|frac,esmoquin,quimono,toga,levita'],

  ['calzado', 'un tipo de calzado',
    'zapatillas,botas,sandalias,zapatos,chanclas|deportivas,botines,mocasines,tacones,alpargatas|suecos,katiuskas,merceditas,ballet,plataformas|botas de montaña,nauticos,babuchas,albarcas,chapines|abarka,esparteñas,alpargata de esparto,zuecos holandeses,botas camperas'],

  ['partes-cuerpo', 'una parte del cuerpo',
    'cabeza,mano,pie,brazo,pierna|ojo,nariz,boca,oreja,dedo|cuello,hombro,codo,rodilla,espalda|muñeca,tobillo,muslo,mentón,ceja|párpado,nuca,axila,ingle,omóplato'],

  ['huesos', 'un hueso del cuerpo humano',
    'fémur,cráneo,columna,costilla,húmero|tibia,rótula,clavícula,pelvis,peroné|cúbito,radio,esternón,vértebra,mandíbula|escápula,sacro,isquion,pubis,calcáneo|etmoides,esfenoides,vómer,maléolo,trapecio'],

  ['organos', 'un órgano del cuerpo humano',
    'corazón,cerebro,pulmón,hígado,riñón|estómago,intestino,páncreas,bazo,vejiga|timo,tiroides,esófago,tráquea,apéndice|glándula suprarrenal,hipófisis,amígdala,vesícula,bronquio|epífisis,paratiroides,duodeno,pleura,peritoneo'],

  ['emociones', 'una emoción',
    'alegría,tristeza,amor,miedo,enfado|sorpresa,asco,vergüenza,orgullo,cariño|celos,envidia,nostalgia,ansiedad,esperanza|melancolía,frustración,gratitud,culpa,euforia|resignación,añoranza,impotencia,serenidad,arrebato'],

  ['transportes', 'un medio de transporte',
    'coche,bicicleta,autobús,tren,moto|avión,barco,metro,tranvía,camión|helicóptero,patinete,globo aerostático,taxi,ferry|submarino,cohete,teleférico,canoa,trineo|dirigible,hidroavión,segway,funicular,transbordador'],

  ['profesiones', 'una profesión',
    'médico,profesor,policía,bombero,abogado|cocinero,enfermero,camarero,ingeniero,arquitecto|veterinario,periodista,fontanero,electricista,panadero|astronauta,notario,farmacéutico,traductor,soldado|actuario,edafólogo,taquígrafo,hidrógrafo,perito'],

  ['materiales', 'un material',
    'madera,plástico,hierro,vidrio,papel|acero,aluminio,cobre,piedra,tela|cemento,hormigón,mármol,cartón,cuero|titanio,tungsteno,fibra de carbono,poliéster,cerámica|grafeno,kevlar,bronce,estaño,carburo'],

  ['colores-pelo', 'un color de pelo',
    'negro,castaño,rubio,pelirrojo|moreno,claro,oscuro,canoso,blanco|ceniza,cobrizo,caoba,rojizo,platino|balayage,californianas,mechas,reflejos,decolorado|castaño avellana,rubio miel,rubio ceniza,gris perla,negro azulado']

);
