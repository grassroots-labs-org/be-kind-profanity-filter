export const latinCases: { label: string; text: string; expectRomanized: boolean }[] = [
  // ═══ English — General conversation ═══
  { label: 'EN gen 1', text: "I went to the store yesterday and bought some groceries for the whole week ahead", expectRomanized: false },
  { label: 'EN gen 2', text: "my neighbor just got a new puppy and it keeps barking every night waking us up", expectRomanized: false },
  { label: 'EN gen 3', text: "the traffic on the highway was terrible this morning took me two hours to get here", expectRomanized: false },
  { label: 'EN gen 4', text: "we should plan a road trip this summer maybe drive up the coast and camp along the way", expectRomanized: false },
  { label: 'EN gen 5', text: "she finally finished her thesis after working on it for almost three years straight", expectRomanized: false },
  { label: 'EN gen 6', text: "my phone battery dies so fast now I think I need to get a new one soon before winter", expectRomanized: false },
  { label: 'EN gen 7', text: "the kids are doing really well in school this year their teacher says they are improving fast", expectRomanized: false },
  { label: 'EN gen 8', text: "I cannot believe how expensive everything has gotten lately even basic stuff costs so much", expectRomanized: false },
  { label: 'EN gen 9', text: "we had such a great time at the concert last night the band played all their best songs", expectRomanized: false },
  { label: 'EN gen 10', text: "the library downtown has a really good selection of books and they just renovated the building", expectRomanized: false },
  { label: 'EN gen 11', text: "I think we should repaint the living room this weekend the walls are looking pretty faded now", expectRomanized: false },
  { label: 'EN gen 12', text: "did you hear that the old factory on main street is being converted into apartments and shops", expectRomanized: false },
  { label: 'EN gen 13', text: "our flight got delayed by four hours so we ended up spending the whole day at the airport", expectRomanized: false },
  { label: 'EN gen 14', text: "the new coffee place on fifth avenue makes the best latte I have ever had in my life", expectRomanized: false },
  { label: 'EN gen 15', text: "I started learning guitar last month and my fingers are still sore from practicing every day", expectRomanized: false },

  // ═══ English — Event descriptions ═══
  { label: 'EN evt 1', text: "community movie night in the park this friday bring blankets and snacks for the whole family", expectRomanized: false },
  { label: 'EN evt 2', text: "charity run this saturday morning through downtown all proceeds go to the local food bank", expectRomanized: false },
  { label: 'EN evt 3', text: "art exhibition opening reception next thursday evening wine and cheese will be served for free", expectRomanized: false },
  { label: 'EN evt 4', text: "coding workshop for beginners every wednesday at the community center no experience required just come", expectRomanized: false },
  { label: 'EN evt 5', text: "farmers market every sunday from eight to noon with fresh produce and handmade crafts and baked goods", expectRomanized: false },
  { label: 'EN evt 6', text: "trivia night at the pub every tuesday teams of four compete for prizes and bragging rights", expectRomanized: false },
  { label: 'EN evt 7', text: "book club meets the first monday of every month we are reading a mystery novel this time", expectRomanized: false },
  { label: 'EN evt 8', text: "outdoor fitness bootcamp every morning at six in the park all levels welcome rain or shine", expectRomanized: false },
  { label: 'EN evt 9', text: "holiday craft fair at the school gymnasium this weekend with over fifty local artisan vendors", expectRomanized: false },
  { label: 'EN evt 10', text: "neighborhood block party next saturday with bounce houses face painting and live music for everyone", expectRomanized: false },
  { label: 'EN evt 11', text: "weekly hiking group meets at the trailhead every saturday morning for a moderate three mile hike", expectRomanized: false },
  { label: 'EN evt 12', text: "talent show auditions next week at the community theater all ages and all types of acts welcome", expectRomanized: false },
  { label: 'EN evt 13', text: "chess club meets every friday afternoon in the back room of the library beginners always welcome", expectRomanized: false },
  { label: 'EN evt 14', text: "potluck dinner at the church hall this sunday bring a dish to share and join the fellowship", expectRomanized: false },
  { label: 'EN evt 15', text: "car wash fundraiser for the school band this saturday in the parking lot donations appreciated", expectRomanized: false },

  // ═══ English — Food/cooking ═══
  { label: 'EN food 1', text: "season the steak with salt pepper and garlic powder then sear it on high heat for three minutes", expectRomanized: false },
  { label: 'EN food 2', text: "the banana bread recipe calls for three ripe bananas two cups flour and half cup sugar mixed well", expectRomanized: false },
  { label: 'EN food 3', text: "we made homemade pasta from scratch last night with a simple tomato basil sauce it was incredible", expectRomanized: false },
  { label: 'EN food 4', text: "the best way to cook rice is to rinse it first then use a two to one water ratio every time", expectRomanized: false },
  { label: 'EN food 5', text: "grilled vegetables taste amazing with just olive oil salt and a squeeze of fresh lemon juice on top", expectRomanized: false },
  { label: 'EN food 6', text: "for the perfect omelet use three eggs a splash of milk and fold it gently when half cooked", expectRomanized: false },
  { label: 'EN food 7', text: "slow cooker chili is so easy just throw everything in and let it simmer for eight hours today", expectRomanized: false },
  { label: 'EN food 8', text: "the chocolate cake turned out perfectly moist and rich everyone asked for the recipe at the party", expectRomanized: false },
  { label: 'EN food 9', text: "fresh fruit smoothies are my favorite breakfast just blend berries banana yogurt and some ice", expectRomanized: false },
  { label: 'EN food 10', text: "roasted chicken with potatoes and carrots is the ultimate comfort food on a cold winter evening", expectRomanized: false },

  // ═══ English — Technology ═══
  { label: 'EN tech 1', text: "the new software update broke several features and now the team is scrambling to roll it back", expectRomanized: false },
  { label: 'EN tech 2', text: "we migrated the entire database to a new cloud provider last weekend without any downtime at all", expectRomanized: false },
  { label: 'EN tech 3', text: "the machine learning model achieved ninety five percent accuracy on the test dataset after training", expectRomanized: false },
  { label: 'EN tech 4', text: "debugging this issue took forever but it turned out to be a simple typo in the config file", expectRomanized: false },
  { label: 'EN tech 5', text: "we need to set up continuous integration so that every pull request runs the test suite automatically", expectRomanized: false },
  { label: 'EN tech 6', text: "the api rate limiting is too aggressive and causing timeouts for users during peak hours fix it", expectRomanized: false },
  { label: 'EN tech 7', text: "containerizing the application made deployments much smoother and reduced environment related bugs significantly", expectRomanized: false },
  { label: 'EN tech 8', text: "the frontend team is switching from webpack to vite for faster build times and better development experience", expectRomanized: false },
  { label: 'EN tech 9', text: "monitoring showed a memory leak in the background worker process that was causing periodic crashes every day", expectRomanized: false },
  { label: 'EN tech 10', text: "implementing websocket support for real time notifications improved user engagement by thirty percent this quarter", expectRomanized: false },

  // ═══ English — Sports ═══
  { label: 'EN sport 1', text: "the basketball game went into overtime and our team won by three points at the buzzer", expectRomanized: false },
  { label: 'EN sport 2', text: "she broke the school record in the hundred meter dash with an incredible time of eleven seconds", expectRomanized: false },
  { label: 'EN sport 3', text: "the soccer tournament starts next week and all the local youth teams are registered to compete", expectRomanized: false },
  { label: 'EN sport 4', text: "he scored a hat trick in the final match leading his team to the championship victory last night", expectRomanized: false },
  { label: 'EN sport 5', text: "swimming practice is every morning at five thirty and the coach expects everyone to be on time always", expectRomanized: false },
  { label: 'EN sport 6', text: "the tennis match lasted three sets and both players showed incredible skill and determination throughout", expectRomanized: false },
  { label: 'EN sport 7', text: "our running club completed a half marathon together and everyone finished under two hours this year", expectRomanized: false },
  { label: 'EN sport 8', text: "the volleyball team needs two more players for the league season starting in september sign up today", expectRomanized: false },

  // ═══ English — Medical ═══
  { label: 'EN med 1', text: "the doctor prescribed antibiotics for the infection and said to come back in two weeks for a checkup", expectRomanized: false },
  { label: 'EN med 2', text: "physical therapy has really helped with my knee pain after the surgery I can walk normally again now", expectRomanized: false },
  { label: 'EN med 3', text: "getting enough sleep is crucial for mental health experts recommend seven to nine hours every night", expectRomanized: false },
  { label: 'EN med 4', text: "the annual health screening includes blood work cholesterol check and blood pressure measurement for everyone", expectRomanized: false },
  { label: 'EN med 5', text: "vaccination drives are happening at the community clinic this weekend no appointment needed just walk in", expectRomanized: false },

  // ═══ English — Academic ═══
  { label: 'EN acad 1', text: "the research paper examines the impact of social media on adolescent mental health and self esteem levels", expectRomanized: false },
  { label: 'EN acad 2', text: "applications for the graduate program are due by december fifteenth and require three letters of recommendation", expectRomanized: false },
  { label: 'EN acad 3', text: "the lecture covered quantum mechanics and its applications in modern computing technology and encryption methods", expectRomanized: false },
  { label: 'EN acad 4', text: "peer review is an essential part of the scientific process ensuring research quality and reproducibility standards", expectRomanized: false },
  { label: 'EN acad 5', text: "the scholarship program provides full tuition coverage for students from underrepresented communities in science fields", expectRomanized: false },

  // ═══ English — Weather ═══
  { label: 'EN wea 1', text: "temperatures are expected to drop below freezing tonight so make sure to cover your outdoor plants", expectRomanized: false },
  { label: 'EN wea 2', text: "the forecast calls for heavy rain and thunderstorms throughout the weekend so plan indoor activities", expectRomanized: false },
  { label: 'EN wea 3', text: "spring has finally arrived and the cherry blossoms are starting to bloom all along the river park", expectRomanized: false },
  { label: 'EN wea 4', text: "we are expecting a heat wave next week with temperatures reaching over a hundred degrees every day", expectRomanized: false },
  { label: 'EN wea 5', text: "the first snowfall of the season is expected tonight and schools may be closed tomorrow morning check alerts", expectRomanized: false },

  // ═══ English — Profanity/slang ═══
  { label: 'EN prof 1', text: "this is absolute bullshit I cannot believe they screwed up the order again for the third time", expectRomanized: false },
  { label: 'EN prof 2', text: "holy crap that was the scariest movie I have ever seen my heart was pounding the entire time", expectRomanized: false },
  { label: 'EN prof 3', text: "damn it I forgot my keys at home and now I am locked out and it is freezing cold outside", expectRomanized: false },
  { label: 'EN prof 4', text: "what the hell is wrong with this computer it keeps crashing every five minutes and I lost my work", expectRomanized: false },
  { label: 'EN prof 5', text: "that guy is such an asshole he cut in line and then had the nerve to be rude about it", expectRomanized: false },
  { label: 'EN prof 6', text: "she told him to piss off after he made that sexist comment in front of the whole office team", expectRomanized: false },
  { label: 'EN prof 7', text: "the whole situation is fucked up and nobody seems to care enough to actually fix it at all", expectRomanized: false },

  // ═══ French — General ═══
  { label: 'FR gen 1', text: "je vais au supermarche acheter des fruits et des legumes pour la semaine prochaine", expectRomanized: false },
  { label: 'FR gen 2', text: "ma soeur vient nous rendre visite le mois prochain elle arrive de Paris en train", expectRomanized: false },
  { label: 'FR gen 3', text: "les enfants jouent dans le jardin depuis ce matin ils sont tellement heureux dehors", expectRomanized: false },
  { label: 'FR gen 4', text: "nous avons demenage dans un nouvel appartement au centre ville le quartier est tres agreable", expectRomanized: false },
  { label: 'FR gen 5', text: "le film que nous avons vu hier soir etait vraiment formidable je le recommande a tout le monde", expectRomanized: false },
  { label: 'FR gen 6', text: "mon collegue de travail a obtenu une promotion bien meritee apres cinq ans dans la compagnie", expectRomanized: false },
  { label: 'FR gen 7', text: "la bibliotheque municipale organise des activites pour les enfants tous les mercredis apres midi gratuit", expectRomanized: false },
  { label: 'FR gen 8', text: "nous preparons un grand diner pour feter notre anniversaire de mariage ce samedi soir chez nous", expectRomanized: false },
  { label: 'FR gen 9', text: "le jardin botanique est magnifique en cette saison les fleurs sont toutes en pleine floraison maintenant", expectRomanized: false },
  { label: 'FR gen 10', text: "il faut que je prenne rendez vous chez le dentiste ca fait trop longtemps que je reporte", expectRomanized: false },

  // ═══ French — Events ═══
  { label: 'FR evt 1', text: "festival de musique gratuit ce samedi au parc municipal avec des artistes locaux et regionaux", expectRomanized: false },
  { label: 'FR evt 2', text: "vente de garage dans notre quartier ce dimanche de huit heures a quatorze heures bonnes affaires", expectRomanized: false },
  { label: 'FR evt 3', text: "atelier de peinture pour adultes tous les vendredis soir au centre culturel inscription recommandee", expectRomanized: false },
  { label: 'FR evt 4', text: "course caritative de cinq kilometres dimanche matin au profit des enfants malades de la region", expectRomanized: false },
  { label: 'FR evt 5', text: "marche de Noel au centre ville avec stands artisanaux vin chaud et animation pour enfants", expectRomanized: false },
  { label: 'FR evt 6', text: "soiree cinema en plein air ce vendredi projection du film commence a la tombee de la nuit", expectRomanized: false },
  { label: 'FR evt 7', text: "cours de yoga gratuit dans le parc tous les samedis matin apportez votre tapis personnel", expectRomanized: false },
  { label: 'FR evt 8', text: "exposition photo au musee municipal entree libre du mardi au dimanche pendant tout le mois", expectRomanized: false },

  // ═══ French — Food ═══
  { label: 'FR food 1', text: "la quiche lorraine est facile a preparer avec des oeufs de la creme et du lard fume", expectRomanized: false },
  { label: 'FR food 2', text: "on mange des crepes ce soir avec du sucre du citron et de la confiture de fraises maison", expectRomanized: false },
  { label: 'FR food 3', text: "le boulanger du coin fait les meilleurs croissants du quartier ils sont toujours frais et croustillants", expectRomanized: false },
  { label: 'FR food 4', text: "pour le dessert je vais faire une tarte aux pommes avec de la cannelle et du beurre", expectRomanized: false },
  { label: 'FR food 5', text: "la ratatouille est un plat provencal delicieux avec des courgettes aubergines tomates et poivrons", expectRomanized: false },
  { label: 'FR food 6', text: "le fromage francais est renomme dans le monde entier le camembert et le brie sont mes preferes", expectRomanized: false },
  { label: 'FR food 7', text: "nous allons au marche acheter du poisson frais pour preparer une bouillabaisse ce dimanche midi", expectRomanized: false },
  { label: 'FR food 8', text: "le coq au vin est un classique de la cuisine francaise mijoter pendant trois heures minimum", expectRomanized: false },

  // ═══ French — News ═══
  { label: 'FR news 1', text: "le gouvernement a annonce un nouveau plan de relance economique pour soutenir les petites entreprises", expectRomanized: false },
  { label: 'FR news 2', text: "les scientifiques ont decouvert une nouvelle espece marine dans les profondeurs de ocean atlantique", expectRomanized: false },
  { label: 'FR news 3', text: "la mairie a decide de renover le quartier historique pour preserver le patrimoine architectural de la ville", expectRomanized: false },
  { label: 'FR news 4', text: "les negotiations commerciales entre les deux pays ont abouti a un accord benefique pour les deux parties", expectRomanized: false },
  { label: 'FR news 5', text: "une nouvelle ligne de tramway va etre construite pour relier la banlieue au centre ville plus rapidement", expectRomanized: false },

  // ═══ French — Casual ═══
  { label: 'FR cas 1', text: "alors tu viens ce soir ou pas parce que tout le monde t attend a la maison deja", expectRomanized: false },
  { label: 'FR cas 2', text: "franchement je suis crevee aujourd hui la journee etait vraiment longue et epuisante au boulot", expectRomanized: false },
  { label: 'FR cas 3', text: "trop bien le match hier les bleus ont gagne trois a un quelle victoire magnifique", expectRomanized: false },
  { label: 'FR cas 4', text: "on se fait un resto demain soir je connais un super endroit pas loin de chez toi", expectRomanized: false },
  { label: 'FR cas 5', text: "tu as vu la nouvelle serie sur netflix elle est vraiment geniale je la recommande fortement", expectRomanized: false },

  // ═══ French — Weather ═══
  { label: 'FR wea 1', text: "demain il va pleuvoir toute la journee prenez un parapluie avant de sortir de la maison", expectRomanized: false },
  { label: 'FR wea 2', text: "le soleil brille et les temperatures sont douces c est parfait pour une promenade au parc", expectRomanized: false },
  { label: 'FR wea 3', text: "la canicule continue cette semaine buvez beaucoup d eau et restez a l ombre autant que possible", expectRomanized: false },
  { label: 'FR wea 4', text: "les premieres neiges sont tombees cette nuit les enfants sont ravis de pouvoir faire un bonhomme", expectRomanized: false },
  { label: 'FR wea 5', text: "le vent souffle tres fort aujourd hui il vaut mieux rester a l interieur cet apres midi", expectRomanized: false },

  // ═══ French — Profanity ═══
  { label: 'FR prof 1', text: "bordel de merde cette voiture me fait chier elle tombe toujours en panne au pire moment possible", expectRomanized: false },
  { label: 'FR prof 2', text: "espece de cretin tu ne comprends rien a rien arrete de dire des conneries tout le temps", expectRomanized: false },
  { label: 'FR prof 3', text: "ta gueule j en ai marre de tes excuses bidon tu me prends vraiment pour un con", expectRomanized: false },
  { label: 'FR prof 4', text: "quel enfoiré ce type il a arnaque tout le monde et il s en fout completement le salaud", expectRomanized: false },

  // ═══ French — Greetings ═══
  { label: 'FR greet 1', text: "bonjour madame comment allez vous aujourd hui j espere que tout va bien pour vous", expectRomanized: false },
  { label: 'FR greet 2', text: "salut les amis ca fait super longtemps qu on ne s est pas vus comment ca va", expectRomanized: false },
  { label: 'FR greet 3', text: "coucou ma cherie je pense a toi bisous prends soin de toi et de ta famille", expectRomanized: false },
  { label: 'FR greet 4', text: "bonsoir monsieur enchanté de vous rencontrer j ai beaucoup entendu parler de vous", expectRomanized: false },
  { label: 'FR greet 5', text: "a bientot j espere te revoir tres vite on se tient au courant par message d accord", expectRomanized: false },

  // ═══ Spanish — General ═══
  { label: 'ES gen 1', text: "fui al mercado esta manana y compre frutas verduras y pan fresco para toda la semana", expectRomanized: false },
  { label: 'ES gen 2', text: "mi hermana viene a visitarnos el proximo mes ella vive en Barcelona y viene en tren", expectRomanized: false },
  { label: 'ES gen 3', text: "los ninos estan jugando en el parque desde temprano estan muy contentos con sus amigos nuevos", expectRomanized: false },
  { label: 'ES gen 4', text: "nos mudamos a un apartamento nuevo en el centro la zona es muy bonita y tranquila", expectRomanized: false },
  { label: 'ES gen 5', text: "la pelicula que vimos anoche fue increible la recomiendo a todos mis amigos y familiares", expectRomanized: false },
  { label: 'ES gen 6', text: "mi compañero de trabajo recibio un ascenso despues de cinco años en la empresa lo merecia", expectRomanized: false },
  { label: 'ES gen 7', text: "la biblioteca publica organiza actividades para niños todos los miercoles por la tarde entrada gratuita", expectRomanized: false },
  { label: 'ES gen 8', text: "estamos preparando una gran cena para celebrar nuestro aniversario de bodas este sabado en casa", expectRomanized: false },
  { label: 'ES gen 9', text: "el jardin botanico esta precioso en esta epoca del año las flores estan en plena floracion", expectRomanized: false },
  { label: 'ES gen 10', text: "tengo que pedir cita con el dentista hace demasiado tiempo que no voy a verlo ya", expectRomanized: false },

  // ═══ Spanish — Events ═══
  { label: 'ES evt 1', text: "festival de musica gratuito este sabado en la plaza con artistas locales y comida tipica", expectRomanized: false },
  { label: 'ES evt 2', text: "mercadillo de segunda mano este domingo en el barrio de ocho a dos de la tarde", expectRomanized: false },
  { label: 'ES evt 3', text: "taller de ceramica para adultos todos los viernes por la noche en el centro cultural", expectRomanized: false },
  { label: 'ES evt 4', text: "carrera solidaria de cinco kilometros el domingo por la manana a beneficio de los niños", expectRomanized: false },
  { label: 'ES evt 5', text: "mercado navideno en el centro con puestos artesanales chocolate caliente y actividades infantiles", expectRomanized: false },
  { label: 'ES evt 6', text: "noche de cine al aire libre este viernes la proyeccion empieza al anochecer traigan mantas", expectRomanized: false },
  { label: 'ES evt 7', text: "clase de baile gratis en el parque todos los sabados por la mañana todos bienvenidos", expectRomanized: false },
  { label: 'ES evt 8', text: "exposicion de arte en el museo entrada libre de martes a domingo durante todo el mes", expectRomanized: false },

  // ═══ Spanish — Food ═══
  { label: 'ES food 1', text: "la paella valenciana lleva arroz pollo conejo judias verdes y azafran para el color y sabor", expectRomanized: false },
  { label: 'ES food 2', text: "las tortillas de patata son mi plato favorito con cebolla huevos y aceite de oliva", expectRomanized: false },
  { label: 'ES food 3', text: "vamos a preparar gazpacho esta noche con tomates pepino pimiento ajo y aceite de oliva frio", expectRomanized: false },
  { label: 'ES food 4', text: "el churrero de la esquina hace los mejores churros con chocolate del barrio siempre hay cola", expectRomanized: false },
  { label: 'ES food 5', text: "para la cena voy a hacer pollo al horno con patatas y ensalada mixta muy sencillo y rico", expectRomanized: false },
  { label: 'ES food 6', text: "los tacos al pastor son mi comida mexicana favorita con cilantro cebolla y salsa verde picante", expectRomanized: false },
  { label: 'ES food 7', text: "el ceviche peruano se prepara con pescado fresco limon cebolla morada y aji limo muy fresco", expectRomanized: false },
  { label: 'ES food 8', text: "las empanadas argentinas de carne son deliciosas con aceitunas huevo y especias bien condimentadas", expectRomanized: false },

  // ═══ Spanish — News ═══
  { label: 'ES news 1', text: "el gobierno anuncio un nuevo plan de ayudas para las pequeñas y medianas empresas del pais", expectRomanized: false },
  { label: 'ES news 2', text: "los cientificos descubrieron una nueva especie de ave en la selva amazonica muy rara y bonita", expectRomanized: false },
  { label: 'ES news 3', text: "la alcaldia decidio renovar el barrio historico para preservar el patrimonio cultural de la ciudad", expectRomanized: false },
  { label: 'ES news 4', text: "las negociaciones comerciales entre los dos paises llegaron a un acuerdo beneficioso para ambas partes", expectRomanized: false },
  { label: 'ES news 5', text: "se construira una nueva linea de metro para conectar los barrios perifericos con el centro rapidamente", expectRomanized: false },

  // ═══ Spanish — Casual ═══
  { label: 'ES cas 1', text: "oye vienes esta noche o que porque todos te estan esperando en casa ya llegan todos", expectRomanized: false },
  { label: 'ES cas 2', text: "estoy agotado hoy el dia fue larguisimo y super cansado en el trabajo no aguanto mas", expectRomanized: false },
  { label: 'ES cas 3', text: "que bien el partido de ayer ganamos tres a uno menuda victoria increible de verdad", expectRomanized: false },
  { label: 'ES cas 4', text: "quedamos manana para cenar conozco un sitio genial cerca de tu casa te va a gustar", expectRomanized: false },
  { label: 'ES cas 5', text: "viste la nueva serie es buenisima la estoy viendo en casa todas las noches esta semana", expectRomanized: false },

  // ═══ Spanish — Weather ═══
  { label: 'ES wea 1', text: "manana llovera todo el dia asi que llevate un paraguas antes de salir de casa por favor", expectRomanized: false },
  { label: 'ES wea 2', text: "hace un sol estupendo y las temperaturas son agradables perfecto para pasear por el parque hoy", expectRomanized: false },
  { label: 'ES wea 3', text: "la ola de calor continua esta semana beban mucha agua y quédense a la sombra por favor", expectRomanized: false },
  { label: 'ES wea 4', text: "las primeras nieves cayeron esta noche los ninos estan encantados de poder hacer un muñeco de nieve", expectRomanized: false },
  { label: 'ES wea 5', text: "el viento sopla muy fuerte hoy es mejor quedarse dentro de casa hasta que pase la tormenta", expectRomanized: false },

  // ═══ Spanish — Profanity ═══
  { label: 'ES prof 1', text: "joder este coche me tiene harto siempre se averia en el peor momento posible que asco", expectRomanized: false },
  { label: 'ES prof 2', text: "menudo imbecil no entiende nada de nada deja de decir gilipolleces de una buena vez ya", expectRomanized: false },
  { label: 'ES prof 3', text: "callate ya estoy hasta las narices de tus excusas me tomas por tonto o que pasa", expectRomanized: false },
  { label: 'ES prof 4', text: "que cabron ese tio estafo a todo el mundo y le da igual el muy sinverguenza descarado", expectRomanized: false },

  // ═══ Spanish — Greetings ═══
  { label: 'ES greet 1', text: "hola señora como esta usted hoy espero que todo le vaya muy bien a usted y familia", expectRomanized: false },
  { label: 'ES greet 2', text: "que tal amigos cuanto tiempo sin vernos como estan todos por alla me alegro de verlos", expectRomanized: false },
  { label: 'ES greet 3', text: "buenas noches señor encantado de conocerle he oido hablar mucho de usted es un placer", expectRomanized: false },
  { label: 'ES greet 4', text: "hasta luego espero verte pronto nos mantenemos en contacto por mensaje vale cuidate mucho amigo", expectRomanized: false },
  { label: 'ES greet 5', text: "hola mi amor te quiero mucho cuidate y descansa bien esta noche besos para ti siempre", expectRomanized: false },

  // ═══ German — General ═══
  { label: 'DE gen 1', text: "ich war gestern im Supermarkt und habe Lebensmittel fur die ganze Woche eingekauft alles frisch", expectRomanized: false },
  { label: 'DE gen 2', text: "meine Schwester kommt naechsten Monat zu Besuch sie lebt in Berlin und kommt mit dem Zug", expectRomanized: false },
  { label: 'DE gen 3', text: "die Kinder spielen seit heute Morgen im Garten sie sind so gluecklich draussen mit ihren Freunden", expectRomanized: false },
  { label: 'DE gen 4', text: "wir sind in eine neue Wohnung in der Innenstadt umgezogen die Gegend ist sehr angenehm hier", expectRomanized: false },
  { label: 'DE gen 5', text: "der Film den wir gestern Abend gesehen haben war wirklich grossartig ich empfehle ihn allen", expectRomanized: false },
  { label: 'DE gen 6', text: "mein Arbeitskollege hat eine verdiente Beforderung bekommen nach funf Jahren in der Firma endlich", expectRomanized: false },
  { label: 'DE gen 7', text: "die Stadtbibliothek bietet jeden Mittwochnachmittag Aktivitaeten fur Kinder an der Eintritt ist frei", expectRomanized: false },
  { label: 'DE gen 8', text: "ich muss einen Termin beim Zahnarzt machen es ist viel zu lange her dass ich dort war", expectRomanized: false },

  // ═══ German — Events ═══
  { label: 'DE evt 1', text: "kostenloses Musikfestival am Samstag im Stadtpark mit lokalen Kuenstlern und regionalen Speisen", expectRomanized: false },
  { label: 'DE evt 2', text: "Flohmarkt in unserem Viertel am Sonntag von acht bis vierzehn Uhr viele tolle Schnäppchen", expectRomanized: false },
  { label: 'DE evt 3', text: "Malkurs fur Erwachsene jeden Freitagabend im Kulturzentrum Anmeldung wird empfohlen bitte vorher anrufen", expectRomanized: false },
  { label: 'DE evt 4', text: "Wohltaetigkeitslauf uber funf Kilometer am Sonntagmorgen fuer kranke Kinder der Region mitmachen lohnt sich", expectRomanized: false },
  { label: 'DE evt 5', text: "Weihnachtsmarkt in der Innenstadt mit Handwerksstaenden Gluehwein und Kinderprogramm ab naechster Woche geoeffnet", expectRomanized: false },
  { label: 'DE evt 6', text: "Freilichtkino am Freitagabend die Vorstellung beginnt bei Einbruch der Dunkelheit bringt Decken mit bitte", expectRomanized: false },

  // ═══ German — Food ═══
  { label: 'DE food 1', text: "das Wiener Schnitzel wird mit Kalbfleisch Paniermehl und Eiern zubereitet und mit Zitrone serviert dazu Kartoffeln", expectRomanized: false },
  { label: 'DE food 2', text: "heute Abend machen wir Kartoffelsuppe mit Wuerstchen und frischem Brot dazu ein kaltes Bier perfekt", expectRomanized: false },
  { label: 'DE food 3', text: "der Baecker um die Ecke macht die besten Brötchen der Stadt immer frisch und knusprig morgens", expectRomanized: false },
  { label: 'DE food 4', text: "Schwarzwaelder Kirschtorte ist mein Lieblingskuchen mit Schokolade Kirschen und Sahne einfach koestlich", expectRomanized: false },
  { label: 'DE food 5', text: "zum Fruehstueck esse ich gerne Muesli mit frischen Fruechten Joghurt und einem Loeffel Honig dazu", expectRomanized: false },
  { label: 'DE food 6', text: "die Bratwurst vom Grill schmeckt am besten mit Senf Sauerkraut und einem frischen Broetchen dazu", expectRomanized: false },

  // ═══ German — News ═══
  { label: 'DE news 1', text: "die Bundesregierung hat ein neues Konjunkturpaket zur Unterstuetzung kleiner Unternehmen angekuendigt heute Morgen", expectRomanized: false },
  { label: 'DE news 2', text: "Wissenschaftler haben eine neue Meeresart in der Tiefsee des Atlantiks entdeckt sehr selten und interessant", expectRomanized: false },
  { label: 'DE news 3', text: "die Stadt hat beschlossen das historische Viertel zu renovieren um das architektonische Erbe zu bewahren", expectRomanized: false },
  { label: 'DE news 4', text: "eine neue Strassenbahnlinie soll gebaut werden um die Vororte schneller mit dem Stadtzentrum zu verbinden", expectRomanized: false },
  { label: 'DE news 5', text: "die Handelsgespräche zwischen den beiden Laendern fuehrten zu einem vorteilhaften Abkommen fuer beide Seiten", expectRomanized: false },

  // ═══ German — Casual ═══
  { label: 'DE cas 1', text: "kommst du heute Abend oder nicht weil alle schon auf dich warten zu Hause bitte schnell", expectRomanized: false },
  { label: 'DE cas 2', text: "ich bin echt platt heute der Tag war mega anstrengend auf der Arbeit bin total fertig", expectRomanized: false },
  { label: 'DE cas 3', text: "lass uns morgen essen gehen ich kenne ein tolles Restaurant in deiner Naehe probier es aus", expectRomanized: false },
  { label: 'DE cas 4', text: "hast du die neue Serie auf Netflix gesehen die ist echt super ich kann nicht aufhoeren", expectRomanized: false },
  { label: 'DE cas 5', text: "mega geil das Spiel gestern wir haben drei zu eins gewonnen was fuer ein Sieg endlich", expectRomanized: false },

  // ═══ German — Weather ═══
  { label: 'DE wea 1', text: "morgen regnet es den ganzen Tag also nimm einen Regenschirm mit bevor du das Haus verlaesst", expectRomanized: false },
  { label: 'DE wea 2', text: "die Sonne scheint und die Temperaturen sind angenehm perfekt fuer einen Spaziergang im Park heute", expectRomanized: false },
  { label: 'DE wea 3', text: "die Hitzewelle haelt diese Woche an trinkt viel Wasser und bleibt moeglichst im Schatten bitte", expectRomanized: false },
  { label: 'DE wea 4', text: "der erste Schnee ist gefallen die Kinder freuen sich riesig und wollen einen Schneemann bauen draussen", expectRomanized: false },

  // ═══ German — Profanity ═══
  { label: 'DE prof 1', text: "verdammte Scheisse dieses Auto nervt mich es geht immer im schlechtesten Moment kaputt jedes Mal", expectRomanized: false },
  { label: 'DE prof 2', text: "so ein Vollidiot der versteht ueberhaupt nichts hoer auf so einen Mist zu erzaehlen bitte", expectRomanized: false },
  { label: 'DE prof 3', text: "halt die Fresse ich hab die Schnauze voll von deinen Ausreden du nimmst mich nicht ernst", expectRomanized: false },

  // ═══ German — Greetings ═══
  { label: 'DE greet 1', text: "guten Tag wie geht es Ihnen heute ich hoffe alles ist gut bei Ihnen und Familie", expectRomanized: false },
  { label: 'DE greet 2', text: "hallo Freunde lange nicht gesehen wie geht es euch allen ich freue mich sehr euch wiederzusehen", expectRomanized: false },
  { label: 'DE greet 3', text: "tschuess bis bald hoffentlich sehen wir uns naechste Woche wieder wir bleiben in Kontakt ja", expectRomanized: false },

  // ═══ Italian — General ═══
  { label: 'IT gen 1', text: "sono andato al supermercato e ho comprato frutta verdura e pane fresco per tutta la settimana", expectRomanized: false },
  { label: 'IT gen 2', text: "mia sorella viene a trovarci il mese prossimo lei abita a Roma e arriva in treno domani", expectRomanized: false },
  { label: 'IT gen 3', text: "i bambini giocano in giardino da questa mattina sono cosi felici di stare fuori con amici", expectRomanized: false },
  { label: 'IT gen 4', text: "ci siamo trasferiti in un nuovo appartamento in centro la zona e molto bella e tranquilla", expectRomanized: false },
  { label: 'IT gen 5', text: "il film che abbiamo visto ieri sera era davvero fantastico lo consiglio a tutti quanti voi", expectRomanized: false },
  { label: 'IT gen 6', text: "devo prendere un appuntamento dal dentista e passato troppo tempo dall ultima visita ormai mesi", expectRomanized: false },

  // ═══ Italian — Events ═══
  { label: 'IT evt 1', text: "festival musicale gratuito sabato nella piazza del paese con artisti locali e specialita regionali", expectRomanized: false },
  { label: 'IT evt 2', text: "mercatino dell usato domenica nel quartiere dalle otto alle quattordici venite a fare affari con noi", expectRomanized: false },
  { label: 'IT evt 3', text: "corso di pittura per adulti ogni venerdi sera al centro culturale prenotazione consigliata chiamare prima", expectRomanized: false },
  { label: 'IT evt 4', text: "corsa benefica di cinque chilometri domenica mattina per i bambini malati della regione partecipate tutti", expectRomanized: false },
  { label: 'IT evt 5', text: "mercatino di Natale in centro con bancarelle artigianali vin brule e attivita per bambini divertenti", expectRomanized: false },

  // ═══ Italian — Food ═══
  { label: 'IT food 1', text: "la carbonara si prepara con guanciale uova pecorino romano e pepe nero senza panna mai aggiungere", expectRomanized: false },
  { label: 'IT food 2', text: "stasera facciamo la pizza in casa con mozzarella fresca pomodori basilico e un filo di olio", expectRomanized: false },
  { label: 'IT food 3', text: "il risotto ai funghi porcini e uno dei piatti piu buoni della cucina italiana tradizionale davvero", expectRomanized: false },
  { label: 'IT food 4', text: "il gelato artigianale italiano e il migliore del mondo con pistacchio nocciola e cioccolato fondente", expectRomanized: false },
  { label: 'IT food 5', text: "la nonna fa la lasagna migliore del mondo con ragu besciamella e parmigiano ogni domenica per noi", expectRomanized: false },
  { label: 'IT food 6', text: "per colazione prendo un cornetto caldo e un cappuccino al bar sotto casa ogni mattina presto", expectRomanized: false },

  // ═══ Italian — Casual ═══
  { label: 'IT cas 1', text: "vieni stasera o no perche tutti ti stanno aspettando a casa dai sbrigati un po per favore", expectRomanized: false },
  { label: 'IT cas 2', text: "sono stanchissimo oggi la giornata e stata lunghissima e pesantissima al lavoro non ce la faccio piu", expectRomanized: false },
  { label: 'IT cas 3', text: "andiamo a cena fuori domani conosco un posto fantastico vicino a casa tua ti piacera sicuro", expectRomanized: false },
  { label: 'IT cas 4', text: "hai visto la nuova serie su Netflix e davvero bella non riesco a smettere di guardarla adesso", expectRomanized: false },
  { label: 'IT cas 5', text: "che partita incredibile ieri abbiamo vinto tre a uno che vittoria ragazzi sono felicissimo ora", expectRomanized: false },

  // ═══ Italian — Weather ═══
  { label: 'IT wea 1', text: "domani piove tutto il giorno quindi portati un ombrello prima di uscire di casa per favore", expectRomanized: false },
  { label: 'IT wea 2', text: "il sole splende e le temperature sono miti perfetto per una passeggiata al parco oggi pomeriggio", expectRomanized: false },
  { label: 'IT wea 3', text: "l ondata di caldo continua questa settimana bevete molta acqua e state all ombra per favore", expectRomanized: false },
  { label: 'IT wea 4', text: "e caduta la prima neve i bambini sono felicissimi e vogliono fare un pupazzo di neve fuori", expectRomanized: false },

  // ═══ Italian — Greetings ═══
  { label: 'IT greet 1', text: "buongiorno signora come sta oggi spero che tutto vada bene per lei e la sua famiglia", expectRomanized: false },
  { label: 'IT greet 2', text: "ciao amici quanto tempo che non ci vediamo come state tutti quanti mi mancate tanto voi", expectRomanized: false },
  { label: 'IT greet 3', text: "buonasera piacere di conoscerla ho sentito molto parlare di lei e un vero onore signore", expectRomanized: false },
  { label: 'IT greet 4', text: "arrivederci spero di rivederti presto restiamo in contatto mandami un messaggio quando puoi va bene", expectRomanized: false },

  // ═══ Portuguese — General ═══
  { label: 'PT gen 1', text: "fui ao supermercado hoje de manha e comprei frutas legumes e pao fresco para toda semana", expectRomanized: false },
  { label: 'PT gen 2', text: "minha irma vem nos visitar no proximo mes ela mora em Lisboa e vem de comboio", expectRomanized: false },
  { label: 'PT gen 3', text: "as criancas estao brincando no jardim desde cedo estao muito felizes la fora com amigos novos", expectRomanized: false },
  { label: 'PT gen 4', text: "o filme que vimos ontem a noite foi realmente fantastico eu recomendo a todos os amigos", expectRomanized: false },
  { label: 'PT gen 5', text: "preciso marcar uma consulta no dentista ja faz muito tempo que nao vou la verificar tudo", expectRomanized: false },

  // ═══ Portuguese — Brazilian ═══
  { label: 'PT BR 1', text: "cara voce viu o jogo ontem o Flamengo ganhou de tres a zero que jogao meu amigo", expectRomanized: false },
  { label: 'PT BR 2', text: "bora no shopping comprar umas roupas novas pra festa de sabado vai ser muito legal gente", expectRomanized: false },
  { label: 'PT BR 3', text: "mano o transito aqui em Sao Paulo ta impossivel hoje fiquei parado duas horas na marginal", expectRomanized: false },
  { label: 'PT BR 4', text: "vamos na praia amanha se o tempo tiver bom leva a prancha e protetor solar nao esquece", expectRomanized: false },
  { label: 'PT BR 5', text: "a feijoada que a minha mae fez ontem tava sensacional todo mundo repetiu o prato duas vezes", expectRomanized: false },

  // ═══ Portuguese — Events ═══
  { label: 'PT evt 1', text: "festival de musica gratuito neste sabado na praça com artistas locais e comida tipica da regiao", expectRomanized: false },
  { label: 'PT evt 2', text: "feira de artesanato no centro da cidade com produtos feitos a mao e comidas deliciosas", expectRomanized: false },
  { label: 'PT evt 3', text: "corrida beneficente de cinco quilometros no domingo de manha em prol das criancas carentes da cidade", expectRomanized: false },
  { label: 'PT evt 4', text: "cinema ao ar livre nesta sexta a sessao comeca ao anoitecer tragam cobertores e pipoca", expectRomanized: false },
  { label: 'PT evt 5', text: "aula de danca gratuita no parque todos os sabados de manha todos sao bem vindos venham", expectRomanized: false },

  // ═══ Portuguese — Food ═══
  { label: 'PT food 1', text: "o bacalhau a bras e um prato tipico portugues com batatas palha ovos e azeitonas pretas", expectRomanized: false },
  { label: 'PT food 2', text: "vamos fazer um churrasco no fim de semana com picanha linguica e pao de alho na brasa", expectRomanized: false },
  { label: 'PT food 3', text: "os pasteis de nata ficam melhores quando saem quentinhos do forno com canela e acucar por cima", expectRomanized: false },
  { label: 'PT food 4', text: "a sopa de legumes da minha avo e a melhor do mundo sempre faco questao de repetir", expectRomanized: false },
  { label: 'PT food 5', text: "no cafe da manha como pao com manteiga queijo e tomo um suco de laranja natural fresco", expectRomanized: false },

  // ═══ Portuguese — Casual ═══
  { label: 'PT cas 1', text: "voce vem hoje a noite ou nao porque todo mundo esta te esperando aqui em casa ja", expectRomanized: false },
  { label: 'PT cas 2', text: "estou morto de cansaco hoje o dia foi muito longo e puxado no trabalho que canseira", expectRomanized: false },
  { label: 'PT cas 3', text: "vamos jantar fora amanha conheco um lugar otimo perto da sua casa voce vai adorar garanto", expectRomanized: false },
  { label: 'PT cas 4', text: "voce assistiu a nova serie esta incrivel nao consigo parar de assistir toda noite em casa", expectRomanized: false },
  { label: 'PT cas 5', text: "que jogo incrivel ontem ganhamos de tres a um que vitoria estou muito feliz com resultado", expectRomanized: false },

  // ═══ Dutch ═══
  { label: 'NL gen 1', text: "ik ben gisteren naar de supermarkt geweest en heb boodschappen gedaan voor de hele week thuis", expectRomanized: false },
  { label: 'NL gen 2', text: "mijn zus komt volgende maand op bezoek zij woont in Amsterdam en komt met de trein hierheen", expectRomanized: false },
  { label: 'NL gen 3', text: "de kinderen spelen al de hele ochtend in de tuin ze zijn zo blij buiten met vrienden", expectRomanized: false },
  { label: 'NL gen 4', text: "de film die we gisteravond hebben gezien was echt geweldig ik raad hem iedereen aan serieus", expectRomanized: false },
  { label: 'NL gen 5', text: "ik moet een afspraak maken bij de tandarts het is al veel te lang geleden nu echt", expectRomanized: false },
  { label: 'NL evt 1', text: "gratis muziekfestival zaterdag in het stadspark met lokale artiesten en regionale lekkernijen voor iedereen", expectRomanized: false },
  { label: 'NL evt 2', text: "rommelmarkt in onze wijk zondag van acht tot twee uur veel leuke koopjes en spullen te vinden", expectRomanized: false },
  { label: 'NL evt 3', text: "schildercursus voor volwassenen elke vrijdagavond in het cultuurcentrum aanmelding wordt aanbevolen bel vooraf", expectRomanized: false },
  { label: 'NL evt 4', text: "openluchtbioscoop vrijdagavond de voorstelling begint bij zonsondergang neem dekens mee en wat snacks", expectRomanized: false },
  { label: 'NL evt 5', text: "kerstmarkt in het centrum met ambachtelijke kraampjes gluhwein en kinderprogramma de hele maand december open", expectRomanized: false },
  { label: 'NL cas 1', text: "kom je vanavond of niet want iedereen wacht al op je thuis schiet een beetje op zeg", expectRomanized: false },
  { label: 'NL cas 2', text: "ik ben echt kapot vandaag de dag was heel zwaar op het werk ben compleet uitgeput nu", expectRomanized: false },
  { label: 'NL cas 3', text: "zullen we morgen uit eten gaan ik ken een super restaurant bij jou in de buurt leuk", expectRomanized: false },
  { label: 'NL cas 4', text: "heb je de nieuwe serie op Netflix al gezien die is echt super goed aanrader serieus", expectRomanized: false },
  { label: 'NL cas 5', text: "wat een wedstrijd gisteren we hebben met drie tegen een gewonnen wat een overwinning eindelijk weer", expectRomanized: false },
  { label: 'NL wea 1', text: "morgen regent het de hele dag dus neem een paraplu mee voordat je het huis verlaat", expectRomanized: false },
  { label: 'NL wea 2', text: "de zon schijnt en het is aangenaam warm buiten perfect voor een wandeling in het park", expectRomanized: false },
  { label: 'NL wea 3', text: "de hittegolf houdt deze week aan drink genoeg water en blijf zoveel mogelijk in de schaduw", expectRomanized: false },
  { label: 'NL wea 4', text: "de eerste sneeuw is gevallen de kinderen zijn door het dolle en willen een sneeuwpop maken", expectRomanized: false },
  { label: 'NL wea 5', text: "het waait heel hard vandaag het is beter om binnen te blijven tot de storm voorbij is", expectRomanized: false },

  // ═══ Turkish ═══
  { label: 'TR gen 1', text: "dun markete gittim ve butun hafta icin meyve sebze ve ekmek aldim evde yemek icin", expectRomanized: false },
  { label: 'TR gen 2', text: "kiz kardesim gelecek ay bizi ziyarete gelecek istanbul dan trenle gelecek cok sevindim", expectRomanized: false },
  { label: 'TR gen 3', text: "cocuklar sabahtan beri bahcede oynuyorlar disarida cok mutlular arkadaslariyla birlikte oyun oynuyorlar", expectRomanized: false },
  { label: 'TR gen 4', text: "dun aksam izledigimiz film gercekten harikaydı herkese tavsiye ederim mutlaka izleyin cok guzel", expectRomanized: false },
  { label: 'TR gen 5', text: "dis doktorundan randevu almam lazim cok uzun zamandir gitmedim artik ertelememem gerekiyor", expectRomanized: false },
  { label: 'TR evt 1', text: "ucretsiz muzik festivali cumartesi sehir parkinda yerel sanatcilar ve yoresel yemekler var gelin", expectRomanized: false },
  { label: 'TR evt 2', text: "bit pazari mahallede pazar gunu sabah sekizden ikiye kadar guzel firsatlar var kacirmayin", expectRomanized: false },
  { label: 'TR evt 3', text: "resim kursu yetiskinler icin her cuma aksami kultur merkezinde kayit yaptirmaniz onerilir arayiniz", expectRomanized: false },
  { label: 'TR evt 4', text: "hayir kosus bu pazar sabahi bes kilometre hasta cocuklar yararına herkes katilabilir gelin kousalim", expectRomanized: false },
  { label: 'TR evt 5', text: "acik hava sinemasi cuma aksami gosterim gunes batiminda basliyor battaniye getirin sicak olmuyor aksam", expectRomanized: false },
  { label: 'TR food 1', text: "lahmacun ve ayran en sevdigim yemek ogle yemeginde mutlaka yerim her seferinde cok lezzetli", expectRomanized: false },
  { label: 'TR food 2', text: "anneannem en guzel borek yapar icine peynir ve maydanoz koyar firinda guzel pisene kadar bekler", expectRomanized: false },
  { label: 'TR food 3', text: "bugun aksam yemegi icin pilav tavuk ve salata yapacagim basit ama cok lezzetli bir menu olacak", expectRomanized: false },
  { label: 'TR food 4', text: "cay demlemek icin once suyu kaynatin sonra caydanliga cayi ekleyin ve birkac dakika demlensin bekleyin", expectRomanized: false },
  { label: 'TR food 5', text: "iskender kebap ustune tereyagi ve domates sosu dokulur yaninda yogurt ve pide ile servis edilir", expectRomanized: false },
  { label: 'TR cas 1', text: "bu aksam geliyor musun herkes seni bekliyor evde cabuklasan biraz lutfen gec kalma yine", expectRomanized: false },
  { label: 'TR cas 2', text: "bugun cok yoruldum is gunu cok uzun ve yorucuydu artik eve gidip yatmak istiyorum sadece", expectRomanized: false },
  { label: 'TR cas 3', text: "yarin disari yemege gidelim mi senin yakininda cok guzel bir yer biliyorum denemek ister misin", expectRomanized: false },
  { label: 'TR cas 4', text: "yeni diziyi izledin mi cok guzel birakamiyorum her aksam izliyorum evde tavsiye ederim sana", expectRomanized: false },
  { label: 'TR cas 5', text: "dun maç cok iyiydi uc bir kazandik ne guzel bir galibiyet sonunda sevindim cok", expectRomanized: false },
  { label: 'TR wea 1', text: "yarin butun gun yagmur yagacak semsiyeni al evden cikmadan once unutma sakın bırakma", expectRomanized: false },
  { label: 'TR wea 2', text: "gunes parlıyor ve hava cok guzel parkta yuruyuse cikmak icin mukemmel bir gun bugun", expectRomanized: false },
  { label: 'TR wea 3', text: "sicak dalgasi bu hafta devam ediyor bol su icin ve golge de kalin lutfen dikkat edin", expectRomanized: false },
  { label: 'TR wea 4', text: "ilk kar yagdi cocuklar cok sevindi kardan adam yapmak istiyorlar bahcede hemen kosarak ciktilar", expectRomanized: false },
  { label: 'TR wea 5', text: "bugun ruzgar cok sert esiyor disari cikmamak daha iyi firtina gecene kadar evde kalin lutfen", expectRomanized: false },

  // ═══ Indonesian/Malay ═══
  { label: 'ID gen 1', text: "saya pergi ke pasar tadi pagi untuk membeli buah sayur dan roti segar untuk seminggu", expectRomanized: false },
  { label: 'ID gen 2', text: "adik saya akan datang berkunjung bulan depan dia tinggal di Jakarta dan naik kereta kemari", expectRomanized: false },
  { label: 'ID gen 3', text: "anak anak bermain di taman sejak pagi mereka sangat senang bermain dengan teman teman barunya", expectRomanized: false },
  { label: 'ID gen 4', text: "film yang kami tonton semalam sangat bagus saya merekomendasikannya kepada semua teman dan keluarga", expectRomanized: false },
  { label: 'ID gen 5', text: "saya harus membuat janji dengan dokter gigi sudah terlalu lama sejak terakhir kali periksa gigi", expectRomanized: false },
  { label: 'ID evt 1', text: "festival musik gratis hari sabtu di taman kota dengan seniman lokal dan makanan khas daerah", expectRomanized: false },
  { label: 'ID evt 2', text: "pasar loak di lingkungan kami hari minggu dari jam delapan sampai jam dua siang banyak barang bagus", expectRomanized: false },
  { label: 'ID evt 3', text: "kelas memasak untuk dewasa setiap jumat malam di pusat kebudayaan pendaftaran disarankan hubungi kami", expectRomanized: false },
  { label: 'ID evt 4', text: "lari amal lima kilometer hari minggu pagi untuk anak anak yang sakit mari berpartisipasi bersama", expectRomanized: false },
  { label: 'ID evt 5', text: "bioskop terbuka malam jumat film mulai saat matahari terbenam bawa selimut dan makanan ringan", expectRomanized: false },
  { label: 'ID cas 1', text: "kamu datang malam ini atau tidak semua orang sudah menunggu di rumah cepatlah sedikit dong", expectRomanized: false },
  { label: 'ID cas 2', text: "hari ini capek banget hari kerja panjang dan melelahkan sekali mau pulang tidur saja rasanya", expectRomanized: false },
  { label: 'ID cas 3', text: "besok makan di luar yuk aku tahu tempat enak dekat rumahmu pasti kamu suka deh", expectRomanized: false },
  { label: 'ID cas 4', text: "sudah nonton serial baru itu bagus banget aku tidak bisa berhenti nonton setiap malam dirumah", expectRomanized: false },
  { label: 'ID cas 5', text: "pertandingan kemarin seru banget kita menang tiga satu kemenangan yang luar biasa akhirnya senang", expectRomanized: false },
  { label: 'ID food 1', text: "nasi goreng buatan ibu paling enak pakai telur ayam kecap dan sambal pedas nikmat sekali", expectRomanized: false },
  { label: 'ID food 2', text: "rendang daging sapi adalah masakan padang yang terkenal di seluruh dunia bumbu rempah kaya rasa", expectRomanized: false },
  { label: 'ID food 3', text: "sate ayam dengan bumbu kacang dan lontong adalah makanan favorit saya setiap kali jajan malam", expectRomanized: false },
  { label: 'ID food 4', text: "untuk sarapan saya biasa makan bubur ayam dengan kerupuk kecap dan sambal sangat enak pagi hari", expectRomanized: false },
  { label: 'ID food 5', text: "bakso adalah jajanan favorit orang Indonesia kuahnya hangat dengan mie dan pangsit sangat nikmat", expectRomanized: false },

  // ═══ Polish ═══
  { label: 'PL gen 1', text: "wczoraj bylem w sklepie i kupilem jedzenie na caly tydzien owoce warzywa i swiezy chleb", expectRomanized: false },
  { label: 'PL gen 2', text: "moja siostra przyjedzie nas odwiedzic w przyszlym miesiacu mieszka w Krakowie i przyjedzie pociagiem", expectRomanized: false },
  { label: 'PL gen 3', text: "dzieci bawia sie w ogrodzie od rana sa bardzo szczesliwe na dworze z kolegami i kolezankami", expectRomanized: false },
  { label: 'PL gen 4', text: "film ktory obejrzalismy wczoraj wieczorem byl naprawde swietny polecam go wszystkim goraco naprawde", expectRomanized: false },
  { label: 'PL gen 5', text: "musze umowic sie do dentysty juz dawno powinien bylem tam pojsc nie moge dłuzej zwlekac", expectRomanized: false },
  { label: 'PL cas 1', text: "przychodzisz dzis wieczorem czy nie bo wszyscy juz na ciebie czekaja w domu pospiesz sie", expectRomanized: false },
  { label: 'PL cas 2', text: "jestem dzis wykończony dzien w pracy byl bardzo dligi i meczacy chce juz isc spac naprawde", expectRomanized: false },
  { label: 'PL cas 3', text: "moze jutro pojdziemy na kolacje znam swietna restauracje blisko twojego domu na pewno ci sie spodoba", expectRomanized: false },
  { label: 'PL cas 4', text: "widziales nowy serial jest naprawde super nie moge przestac go ogladac kazdego wieczoru w domu", expectRomanized: false },
  { label: 'PL cas 5', text: "co za mecz wczoraj wygralismy trzy do jednego co za zwyciestwo nareszcie jestem szczesliwy", expectRomanized: false },
  { label: 'PL evt 1', text: "darmowy festiwal muzyczny w sobote w parku miejskim z lokalnymi artystami i regionalnymi potrawami", expectRomanized: false },
  { label: 'PL evt 2', text: "pchli targ w naszej dzielnicy w niedziele od osmej do czternastej wiele fajnych okazji czeka", expectRomanized: false },
  { label: 'PL evt 3', text: "kurs malarski dla doroslych w kazdy piatek wieczorem w centrum kultury rejestracja zalecana zadzwoncie", expectRomanized: false },
  { label: 'PL evt 4', text: "bieg charytatywny piec kilometrow w niedzielny poranek dla chorych dzieci z regionu wezcie udzial", expectRomanized: false },
  { label: 'PL evt 5', text: "kino pod gwiazdami w piatek wieczorem seans rozpoczyna sie o zachodzie slonca przyniesc koce i jedzenie", expectRomanized: false },

  // ═══ Swedish ═══
  { label: 'SV gen 1', text: "jag gick till affaren igar och handlade mat for hela veckan frukt gronsaker och brod", expectRomanized: false },
  { label: 'SV gen 2', text: "min syster kommer pa besok nasta manad hon bor i Stockholm och tar taget hit", expectRomanized: false },
  { label: 'SV gen 3', text: "barnen har lekt i tradgarden hela morgonen de ar sa glada ute med sina kompisar idag", expectRomanized: false },
  { label: 'SV cas 1', text: "kommer du ikvall eller inte for alla vantar redan pa dig hemma skynd dig lite nu", expectRomanized: false },
  { label: 'SV cas 2', text: "jag ar helt slut idag jobbet var sa tungt och trottande vill bara sova nu genast", expectRomanized: false },
  { label: 'SV evt 1', text: "gratis musikfestival pa lordag i stadsparken med lokala artister och regionala specialiteter for alla", expectRomanized: false },
  { label: 'SV wea 1', text: "imorgon regnar det hela dagen sa ta med dig ett paraply innan du gar hemifran", expectRomanized: false },

  // ═══ Norwegian ═══
  { label: 'NO gen 1', text: "jeg var pa butikken i gar og handlet mat til hele uken frukt gronnsaker og brod", expectRomanized: false },
  { label: 'NO gen 2', text: "soster mi kommer pa besok neste maned hun bor i Oslo og tar toget hit til oss", expectRomanized: false },
  { label: 'NO gen 3', text: "barna har lekt i hagen hele morgenen de er sa glade ute med vennene sine idag", expectRomanized: false },
  { label: 'NO cas 1', text: "kommer du i kveld eller ikke for alle venter pa deg hjemme skynd deg litt na", expectRomanized: false },
  { label: 'NO cas 2', text: "jeg er helt utslitt i dag jobben var sa tungt og slitsom vil bare sove na fort", expectRomanized: false },
  { label: 'NO evt 1', text: "gratis musikkfestival pa lordag i byparken med lokale artister og regionale spesialiteter for alle", expectRomanized: false },
  { label: 'NO wea 1', text: "i morgen regner det hele dagen sa ta med deg en paraply for du gar ut av huset", expectRomanized: false },

  // ═══ Danish ═══
  { label: 'DA gen 1', text: "jeg var i supermarkedet i gar og kobt mad til hele ugen frugt grontsager og brod", expectRomanized: false },
  { label: 'DA gen 2', text: "min soster kommer pa besog naeste maned hun bor i Kobenhavn og tager toget hertil", expectRomanized: false },
  { label: 'DA cas 1', text: "kommer du i aften eller ej for alle venter pa dig derhjemme skynd dig lidt nu", expectRomanized: false },
  { label: 'DA cas 2', text: "jeg er helt smadret i dag arbejdsdagen var lang og udmattende vil bare sove nu hjem", expectRomanized: false },
  { label: 'DA evt 1', text: "gratis musikfestival lordag i byparken med lokale kunstnere og regionale specialiteter for alle velkommen", expectRomanized: false },
  { label: 'DA wea 1', text: "i morgen regner det hele dagen husk at tage en paraply med for du gar hjemmefra tak", expectRomanized: false },

  // ═══ Finnish ═══
  { label: 'FI gen 1', text: "kaevin eilen kaupassa ja ostin ruokaa koko viikoksi hedelmaet vihanneksia ja tuoretta leipaa kotiin", expectRomanized: false },
  { label: 'FI gen 2', text: "sisareni tulee kaymaan ensi kuussa han asuu Helsingissa ja tulee junalla tanne meille kylaaan", expectRomanized: false },
  { label: 'FI cas 1', text: "tuletko tanaan illalla vai et koska kaikki odottavat sinua jo kotona kiirehdithaan vahan jo nyt", expectRomanized: false },
  { label: 'FI cas 2', text: "olen aivan poikki tanaan tyopaiva oli niin pitkae ja raskas haluan vain nukkua nyt heti", expectRomanized: false },
  { label: 'FI evt 1', text: "ilmainen musiikkifestivaali lauantaina kaupunginpuistossa paikallisten artistien esityksia ja alueen erikoisuuksia kaikille", expectRomanized: false },

  // ═══ Hungarian ═══
  { label: 'HU gen 1', text: "tegnap elmentem a boltba es bevasaroltam az egesz hetre gyumolcsot zoldseget es friss kenyeret", expectRomanized: false },
  { label: 'HU gen 2', text: "a hugom jon latogatoba jovo honapban Budapesten lakik es vonattal jon ide hozzank orommel varjuk", expectRomanized: false },
  { label: 'HU cas 1', text: "jossz ma este vagy nem mert mindenki var rad otthon siess mar egy kicsit kerlek szepen", expectRomanized: false },
  { label: 'HU cas 2', text: "teljesen ki vagyok merulve ma a munkanap nagyon hosszu es faraszto volt csak aludni akarok most", expectRomanized: false },
  { label: 'HU evt 1', text: "ingyenes zeneje fesztival szombaton a varosligeten helyi eloadokkal es regionalis kulonlegessegekkel mindenkit varunk", expectRomanized: false },

  // ═══ Romanian ═══
  { label: 'RO gen 1', text: "am fost ieri la magazin si am cumparat mancare pentru toata saptamana fructe legume si paine", expectRomanized: false },
  { label: 'RO gen 2', text: "sora mea vine in vizita luna viitoare ea locuieste in Bucuresti si vine cu trenul aici", expectRomanized: false },
  { label: 'RO cas 1', text: "vii diseara sau nu pentru ca toata lumea te asteapta acasa grabeste te putin te rog", expectRomanized: false },
  { label: 'RO cas 2', text: "sunt total epuizat azi ziua de munca a fost foarte lunga si obositoare vreau doar sa dorm", expectRomanized: false },
  { label: 'RO evt 1', text: "festival de muzica gratuit sambata in parcul orasului cu artisti locali si mancaruri traditionale veniti", expectRomanized: false },

  // ═══ Croatian ═══
  { label: 'HR gen 1', text: "jucer sam isao u ducan i kupio hranu za cijeli tjedan voce povrce i svjezi kruh", expectRomanized: false },
  { label: 'HR gen 2', text: "moja sestra dolazi u posjet sljedecrg mjeseca zivi u Zagrebu i dolazi vlakom ovamo k nama", expectRomanized: false },
  { label: 'HR cas 1', text: "dolazis li veceras ili ne jer svi te cekaju doma pozuri se malo molim te brzo", expectRomanized: false },
  { label: 'HR cas 2', text: "potpuno sam iscrpljen danas radni dan bio je jako dug i naporan zelim samo spavati", expectRomanized: false },
  { label: 'HR evt 1', text: "besplatan glazbeni festival u subotu u gradskom parku s lokalnim umjetnicima i regionalnim specijalitetima", expectRomanized: false },

  // ═══ Czech ═══
  { label: 'CS gen 1', text: "vcera jsem sel do obchodu a nakoupil jidlo na cely tyden ovoce zeleninu a certsvy chleb", expectRomanized: false },
  { label: 'CS gen 2', text: "moje sestra prijede na navstevu pristi mesic bydli v Praze a prijede vlakem k nam domu", expectRomanized: false },
  { label: 'CS cas 1', text: "prijdes dnes vecer nebo ne protoze vsichni uz na tebe cekaji doma pospichas trochu prosim", expectRomanized: false },
  { label: 'CS cas 2', text: "jsem uplne vycerpany dnes pracovni den byl hrozne dlouhy a unavny chci jen spat ted hned", expectRomanized: false },
  { label: 'CS evt 1', text: "bezplatny hudebnij festival v sobotu v mestskem parku s mistnimi umelci a regionalnymi specialitami", expectRomanized: false },

  // ═══ Tagalog ═══
  { label: 'TL gen 1', text: "pumunta ako sa palengke kahapon at bumili ng prutas gulay at tinapay para sa buong linggo", expectRomanized: false },
  { label: 'TL gen 2', text: "ang kapatid kong babae ay bibisita sa susunod na buwan taga Manila siya at sasakay ng tren", expectRomanized: false },
  { label: 'TL gen 3', text: "naglalaro ang mga bata sa hardin buong umaga masaya sila sa labas kasama ang mga kaibigan nila", expectRomanized: false },
  { label: 'TL cas 1', text: "pupunta ka ba mamaya o hindi kasi lahat naghahatay na sayo sa bahay bilisan mo naman", expectRomanized: false },
  { label: 'TL cas 2', text: "pagod na pagod ako ngayon napakahabang araw sa trabaho gusto ko na lang matulog agad ngayon", expectRomanized: false },
  { label: 'TL evt 1', text: "libreng musika festival sa sabado sa parke ng lungsod may mga lokal na artista at pagkain", expectRomanized: false },
  { label: 'TL food 1', text: "ang adobo ay paborito kong pagkain manok o baboy sa toyo suka bawang at paminta masarap", expectRomanized: false },
  { label: 'TL food 2', text: "sinigang na baboy ang pinakamasarap na sabaw mainit at maasim na may kangkong at kamatis talaga", expectRomanized: false },

  // ═══ Swahili ═══
  { label: 'SW gen 1', text: "jana nilikwenda dukani na kununua chakula kwa wiki nzima matunda mboga na mkate mbivu safi", expectRomanized: false },
  { label: 'SW gen 2', text: "dada yangu atakuja kutuzuru mwezi ujao anaishi Dar es Salaam na atakuja kwa treni hadi hapa", expectRomanized: false },
  { label: 'SW gen 3', text: "watoto wanacheza bustanini tangu asubuhi wanafurahi sana nje na marafiki zao wanacheza vizuri sana", expectRomanized: false },
  { label: 'SW cas 1', text: "utakuja jioni hii au hapana kwa sababu kila mtu anakusubiri nyumbani harakisha kidogo tafadhali", expectRomanized: false },
  { label: 'SW cas 2', text: "nimechoka sana leo siku ya kazi ilikuwa ndefu sana na ya kuchosha nataka kulala tu sasa", expectRomanized: false },
  { label: 'SW evt 1', text: "tamasha la muziki bure jumamosi katika bustani ya jiji na wasanii wa eneo na vyakula vya kimila", expectRomanized: false },
  { label: 'SW food 1', text: "ugali na nyama choma ni chakula kinachopendwa sana Tanzania unaongeza kachumbari na pilipili hoho nzuri", expectRomanized: false },

  // ═══ Yoruba ═══
  { label: 'YO gen 1', text: "mo lo si oja lana mo si ra onje fun gbogbo ose eso efo ati akara", expectRomanized: false },
  { label: 'YO gen 2', text: "arabinrin mi yoo wa beere wa ni osu to nbo o ngbe ni Eko yoo gun irin ajo", expectRomanized: false },
  { label: 'YO gen 3', text: "awon omo naa ti nse ere ni inu ogba lati owuro wipe inu won dun gidigidi lode", expectRomanized: false },
  { label: 'YO cas 1', text: "se o maa wa lale yi tabi rara nitori gbogbo eniyan nduro de o nile yara die", expectRomanized: false },
  { label: 'YO cas 2', text: "mo re gidigidi loni ojo ise naa gun pupo ati arewu mo fe sun nikan ni bayi", expectRomanized: false },

  // ═══ Hausa ═══
  { label: 'HA gen 1', text: "na je kasuwa jiya na sayi abinci na dukan mako fruts kayan marmari da burodi sabo", expectRomanized: false },
  { label: 'HA gen 2', text: "yar uwata za ta zo ziyara watan gobe tana zaune Kano za ta zo da jirgi zuwa", expectRomanized: false },
  { label: 'HA gen 3', text: "yara suna wasa a cikin lambu tun safe suna farin ciki a waje tare da abokan su", expectRomanized: false },
  { label: 'HA cas 1', text: "za ka zo da yamma ko ba za ka ba domin kowa yana jiran ka a gida ka gaggauta", expectRomanized: false },
  { label: 'HA cas 2', text: "na gaji sosai yau ranar aiki ta yi tsayi kuma ta gajiyar da ni ina so in yi barci", expectRomanized: false },

  // ═══ Igbo ═══
  { label: 'IG gen 1', text: "agara m ahia uta nke gara aga wee zuta nri maka izu nile mkpuru osisi na akwukwo nri", expectRomanized: false },
  { label: 'IG gen 2', text: "nwanne m nwanyi ga abata leta onwa na abata o bi na Enugu o ga eji ugbo elu", expectRomanized: false },
  { label: 'IG gen 3', text: "umuaka no na egwuregwu na ogige kemgbe ututu ha nwere anuri na mperi ha na ndi enyi ha", expectRomanized: false },
  { label: 'IG cas 1', text: "i ga abata n abalii a ka o bu na onye o bula na eche gi na ulo mee ngwa ngwa", expectRomanized: false },
  { label: 'IG cas 2', text: "ike gwuru m tata ubochi oru ahu di ogologo na ike gwu nke ukwu achoro m naani ihi ura", expectRomanized: false },
];
