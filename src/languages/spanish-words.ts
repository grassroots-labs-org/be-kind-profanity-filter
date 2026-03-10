// src/languages/spanish-words.ts

/**
 * Spanish profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * Covers terms common in both Spain and Latin America, though regional differences exist.
 * ⚠️ Warning: This file contains explicit language in Spanish
 */
const spanishBadWords: string[] = [
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "mierda", // Shit
  "joder", // Fuck (verb/interjection)
  "puta", // Whore, bitch (fem.) / Fuck (interjection)
  "puto", // Male whore, faggot (derogatory), fucking (adjective)
  "coño", // Cunt (vulgar), Damn/Fuck (interjection - common in Spain)
  "cojones", // Balls (vulgar), Guts
  "polla", // Dick, cock (vulgar - common in Spain)
  "verga", // Dick, cock (vulgar - common in LatAm)
  "picha", // Dick, cock (vulgar - regional)
  "cipote", // Dick, cock (vulgar - Spain)
  "carajo", // Dick (vulgar), Hell/Damn (interjection)
  "culo", // Ass, butt
  "teta", // Tit, boob
  "tetas", // Tits, boobs
  "chocho", // Pussy, cunt (vulgar - Spain)
  "concha", // Pussy, cunt (vulgar - LatAm, can be innocuous shell in Spain)
  "capullo", // Asshole, idiot (lit. cocoon/foreskin - Spain)
  "gilipollas", // Asshole, jerk, idiot (vulgar - Spain)
  "cabrón", // Bastard, asshole, cuckold (male)
  "cabrona", // Bitch, asshole (female)
  "hostia", // Host (religious), Damn/Fuck/Shit/Hit (interjection/noun - Spain)
  "ostia", // Common misspelling of hostia
  "pendejo", // Asshole, idiot, dumbass (LatAm - very common), Pubic hair (Spain - rare)
  "pendeja", // Fem. of pendejo
  "boludo", // Idiot, dumbass (Arg, Uru - can be informal/friendly too)
  "boluda", // Fem. of boludo
  "pelotudo", // Stronger version of boludo (Arg, Uru)
  "pelotuda", // Fem. of pelotudo

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Mierda ---
  "mierdoso",
  "mierdosa", // Shitty
  "puta mierda", // Fucking shit
  "comer mierda", // Eat shit
  "una mierda", // Like shit / Worthless
  "vete a la mierda", // Go to hell / Fuck off
  // --- Joder ---
  "jodido",
  "jodida", // Fucked, screwed, difficult
  "jódete", // Fuck you / Screw you
  "que te jodan", // Fuck you / Screw you (plural/formal)
  "no me jodas", // Don't fuck with me / No kidding?!
  "jodienda", // Annoyance, bother
  "joderse", // To get screwed / To have to suck it up
  // --- Puta / Puto ---
  "putita",
  "putito", // Little whore/faggot (diminutive, still offensive)
  "putazo", // Big hit / Slur for gay man (LatAm)
  "putero", // Whoremonger
  "putería", // Whorehouse / Whore behavior
  "putear", // To curse someone out, to treat badly
  "hijo de puta", // Son of a bitch
  "hija de puta", // Daughter of a bitch
  "putamadre",
  "puta madre", // Motherfucker / Fucking awesome (dual use)
  "de puta madre", // Fucking great
  "ni puto caso", // Paying no fucking attention
  // --- Coño / Cojones ---
  "cojonudo",
  "cojonuda", // Fucking great, ballsy (Spain)
  "acojonado",
  "acojonada", // Scared shitless (Spain)
  "hasta los cojones", // Fed up (lit. up to the balls - Spain)
  "tócate los cojones", // Expression of disbelief/annoyance (Spain)
  "del coño", // Shitty, annoying (Spain)
  // --- Polla / Verga / Picha / etc. ---
  "pollas en vinagre", // Nonsense phrase (Spain)
  "me importa una polla", // I don't give a fuck (Spain)
  "me importa una verga", // I don't give a fuck (LatAm)
  "vergazo", // Big hit with a dick-like object / Big dick (LatAm)
  "valer verga", // To be worthless (LatAm)
  "chupar polla", // Suck dick (Spain)
  "chupar verga", // Suck dick (LatAm)
  "mamahuevo", // Cocksucker (LatAm - very vulgar)
  "güevo",
  "guevo", // Egg / Ball (testicle - LatAm slang)
  "huevón",
  "huevona", // Lazy / Stupid / Guy (LatAm - varies by country)
  // --- Culo ---
  "gilipuertas", // Idiot, jerk (Spain)
  "partirse el culo", // Laugh your ass off
  "cara de culo", // Ass-face (sour expression)
  " lameculos", // Ass-kisser
  "patada en el culo", // Kick in the ass
  // --- Cabrón / Cabrona ---
  "cabronazo",
  "cabronaza", // Big asshole/bastard
  "cabronada", // A dick move, a shitty action
  // --- Hostia ---
  "hostia puta", // Fucking hell (Spain)
  "mala hostia", // Bad mood / Bad intention (Spain)
  "darse una hostia", // To crash / To hit oneself hard (Spain)
  "ser la hostia", // To be the shit / To be awesome (Spain)
  // --- Gilipollas / Capullo ---
  "gilipollez", // Stupidity, bullshit (Spain)
  "agilipollado", // Acting like a gilipollas (Spain)
  // --- Pendejo / Boludo / Pelotudo ---
  "pendejada", // Stupidity, bullshit (LatAm)
  "boludez", // Stupidity, nonsense (Arg, Uru)
  "pelotudez", // Stupidity, nonsense (stronger - Arg, Uru)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "tonto",
  "tonta", // Idiot, fool (common, less vulgar)
  "tonto del culo", // Fucking idiot (vulgar)
  "idiota", // Idiot (common)
  "imbécil", // Imbecile (common)
  "estúpido",
  "estúpida", // Stupid
  "subnormal", // Retarded (highly offensive)
  "retrasado",
  "retrasada", // Retarded (highly offensive)
  "mongólico",
  "mongólica", // Derogatory term for Down syndrome, used as insult
  "mongolo",
  "mongola", // Shortened version
  "lerdo",
  "lerda", // Slow-witted, dull
  "memo",
  "mema", // Dumb,傻瓜 (Spain)
  "bobo",
  "boba", // Silly, foolish
  "zopenco",
  "zopenca", // Blockhead, dunce
  "tarado",
  "tarada", // Freak, weirdo / Retarded (offensive)
  "cretino",
  "cretina", // Cretin, idiot
  "necio",
  "necia", // Foolish, stupid

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "maricón", // Faggot (very offensive)
  "marica", // Faggot (offensive, sometimes reclaimed/less harsh)
  "maricón de mierda", // Fucking faggot
  "bollera", // Dyke (offensive - Spain)
  "tortillera", // Dyke (offensive - LatAm)
  "sudaca", // Derogatory for South American (Spain)
  "machupichu", // Derogatory for indigenous South American (Spain)
  "gringo", // Derogatory/neutral for American/foreigner (LatAm)
  "gabacho", // Derogatory for French person (Spain)
  "negrata", // Derogatory for Black person (offensive)
  "moro", // Moor, derogatory for North African/Arab (Spain)

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bastardo",
  "bastarda", // Bastard
  "mamón",
  "mamona", // Asshole, jerk (lit. sucker)
  "payaso",
  "payasa", // Clown (used as idiot)
  "lameculos", // Ass-kisser
  "baboso",
  "babosa", // Slimy person, creep (lit. drooler)
  "perra", // Bitch (dog, used for women)
  "zorra", // Fox / Slut, bitch (very common)
  "bruja", // Witch
  "malparido",
  "malparida", // Badly born (lit.), like son of a bitch (LatAm)
  "hpt",
  "hijueputa", // Abbreviations/variations of Hijo de Puta (LatAm)
  "gonorrea", // Gonorrhea (used as a severe insult in Colombia)
  "sapo", // Toad / Snitch (LatAm)
  "rata", // Rat / Thief
  "cerdo",
  "cerda", // Pig / Dirty person
  "marrano",
  "marrana", // Pig / Dirty person
  "puerco",
  "puerca", // Pig / Dirty person
  "muérete", // Die
  "chiflado",
  "chiflada", // Crazy, nuts
  "loco",
  "loca", // Crazy
  "pinche", // Fucking (adjective, very common in Mexico)
  "culero", // Asshole (Mexico, vulgar)
  "chingar", // To fuck / To annoy / To screw up (Mexico, very versatile & vulgar)
  "chinga tu madre", // Fuck your mother (Mexico)
  "chingadera", // Bullshit, junk (Mexico)
  "weon",
  "hueón", // Dude / Idiot (Chile, common, versatile)
  "concha tu madre",
  "ctm", // Your mother's cunt (LatAm, very offensive)
  "la concha de tu hermana", // Your sister's cunt (Arg, very offensive)
  "forro",
  "forra", // Condom / Asshole, idiot (Arg)
  "gato", // Cat / Low-life servant / Wannabe (Arg)
  "grasiento",
  "grasienta", // Greasy / Low-class, tasteless
  "guarro",
  "guarra", // Filthy, disgusting person (Spain)
  "sinvergüenza", // Shameless person
  "caradura", // Cheeky, shameless person
  "chulo", // Pimp / Cocky (Spain) / Cool (Mexico)
  "chula", // Fem. of chulo
  "malnacido",
  "malnacida", // Badly born (similar to malparido)

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "mear", // To piss
  "meo", // Piss
  "cagar", // To shit
  "cagada", // A fuck-up, mess / Shit (noun)
  "cagón",
  "cagona", // Coward (lit. shitter) / Whiny
  "pedo", // Fart / Drunkenness (Mexico/LatAm)
  "tirarse un pedo", // To fart
  "potar", // To vomit (Spain slang)
  "vomitar", // To vomit
  "moco", // Snot
  "escupir", // To spit
  "semen", // Semen
  "corrida", // Cumshot / Orgasm (Spain) / Run (standard)
  "paja", // Wank, handjob (lit. straw)
  "hacerse una paja", // To masturbate (male)
  "dedos", // Fingers (used in sexual context)
  "follar", // To fuck (Spain - very direct)
  "coger", // To take/grab (Standard) / To fuck (LatAm - VERY common, use with caution!)
  "singar", // To fuck (vulgar, less common)
  "culear", // To fuck (from culo - vulgar, LatAm)
  "cachondo",
  "cachonda", // Horny (Spain)
  "caliente", // Hot (temperature) / Horny (LatAm)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "jolin", // Darn, gosh (mild version of joder - Spain)
  "jope", // Darn, gosh (mild version of joder - Spain)
  "miercoles", // Wednesday (euphemism for mierda)
  "ostras", // Oysters (euphemism for hostia - Spain)
  "rayos", // Lightning bolts (euphemism for carajo/etc.)
  "demontre", // Demon (euphemism)
  "fastidiar", // To annoy (can be euphemism for joder)
  "lavate la boca", // Wash your mouth (telling someone off)
  "mamaverga", // Cocksucker
  "pajero", // Wanker (Arg)
  "pajera", // Fem. wanker
  "conchesumadre", // Your mother's cunt (Peru/Chile)
  "culiao", // Ass-fucked (Chilean)
  "culeado", // Fucked in the ass
  "conchudo", // Shameless / Cunt-like
  "la concha de tu madre", // Your mother's cunt (Arg)
  "reconcha de tu madre", // Emphatic variant
  "la puta que te parió", // The whore who bore you

  // Additional Latin American regional profanity
  "chingada", // Fucked (Mexico)
  "chingado", // Fucked (Mexico)
  "chingón", // Badass / Fucker (Mexico)
  "chingona", // Badass / Fucker fem (Mexico)
  "chingue su madre", // Fuck his mother (Mexico)
  "a la verga", // To the dick / Fuck off (Mexico)
  "no mames", // Don't suck / No way (Mexico vulgar)
  "mamada", // Blowjob / Bullshit (Mexico)
  "mamadas", // Plural
  "vergón", // Big-dicked (LatAm)
  "culera", // Fem of culero (Mexico)
  "pinche pendejo", // Fucking idiot (Mexico)
  "pinche puta", // Fucking whore (Mexico)
  "gonorreas", // Plural (Colombia)
  "malparidos", // Plural (Colombia)
  "hijuemadre", // Son of a mother (Colombia euphemism)
  "marica hijueputa", // Compound (Colombia)
  "carepicha", // Dick face (Costa Rica)
  "careculo", // Ass face (Venezuela)
  "coño de tu madre", // Your mother's cunt (Venezuela)
  "coñazo", // Big hit / Damn (Venezuela)
  "güevón", // Idiot (Venezuela)
  "mamaguevo", // Cocksucker (Venezuela/Dominican)
  "pajúo", // Idiot (Venezuela)
  "cachudo", // Cuckold (Chile)
  "conchetumadre", // Your mother's cunt (Chile)
  "wea", // Thing / Bullshit (Chile)
  "weón", // Dude / Idiot (Chile)
  "weona", // Fem (Chile)
  "aweonao", // Fucking idiot (Chile)
  "aweonada", // Fem (Chile)
  "sacowea", // Ballbreaker (Chile)
  "maraco", // Faggot (Chile)
  "chucha", // Cunt / Damn (Peru/Chile)
  "chuchatumadre", // Your mother's cunt (Peru)
  "huevada", // Bullshit (Peru)
  "cojudo", // Idiot (Peru)
  "cojuda", // Fem (Peru)
  "pitudo", // Big-dicked (Peru)
  "cachero", // Fucker (Peru)
  "recontra cojudo", // Super idiot (Peru)

  // ========================================
  // === More Mexican Profanity ============
  // ========================================
  "a huevo", // Hell yeah / By force (Mexico)
  "vale verga", // It's worthless (Mexico)
  "valió verga", // It went to shit (Mexico)
  "vergas", // Dicks (Mexico)
  "me vale madre", // I don't give a fuck (Mexico)
  "me vale verga", // I don't give a fuck (Mexico, stronger)
  "no manches", // No way / Don't stain (Mexico, mild)
  "chingadazo", // Hard hit / Fucking hit (Mexico)
  "hijo de la chingada", // Son of the fucked (Mexico)
  "la chingada", // The fucked / Hell (Mexico)
  "vete a la chingada", // Go to hell (Mexico)
  "qué chingados", // What the fuck (Mexico)
  "ni madres", // No fucking way (Mexico)
  "en la madre", // In the mother / Damn (Mexico)
  "poca madre", // Shameless / Awesome (Mexico, dual use)
  "un desmadre", // A clusterfuck (Mexico)
  "madrazo", // Hard hit (Mexico)
  "a toda madre", // Fucking awesome (Mexico)
  "hijo de su puta madre", // Son of his whore mother
  "pinche cabrón", // Fucking bastard (Mexico)
  "pinche culero", // Fucking asshole (Mexico)
  "pinche güey", // Fucking dude/idiot (Mexico)
  "güey", // Dude / Idiot (Mexico)
  "buey", // Ox / Idiot (Mexico, older spelling)
  "naco", // Tacky / Low-class person (Mexico)
  "naca", // Fem of naco
  "fresa", // Strawberry / Snob (Mexico)
  "manchado", // Stained / Fucked up (Mexico)
  "chingaquedito", // Sneaky fucker (Mexico)
  "maldito", // Damn / Cursed (Mexico/general)
  "maldita", // Fem of maldito
  "desgraciado", // Wretched / Bastard
  "desgraciada", // Fem
  "ojete", // Asshole (Mexico, lit. eyelet)
  "métetelo por el culo", // Shove it up your ass
  "cállate el hocico", // Shut your snout
  "lárgate a la verga", // Get the fuck out (Mexico)
  "tragaverga", // Dick swallower (Mexico)
  "tragaleche", // Cum swallower
  "lameverga", // Dick licker (Mexico)
  "pinche vieja", // Fucking woman (Mexico, derogatory)
  "pinche viejo", // Fucking old man (Mexico, derogatory)

  // ========================================
  // === More Argentine Profanity ==========
  // ========================================
  "boludo de mierda", // Fucking idiot (Argentina)
  "pelotudo de mierda", // Fucking asshole (Argentina)
  "la re concha", // The super cunt (Argentina, intensifier)
  "andá a la mierda", // Go to shit (Argentina)
  "sos un pelotudo", // You're a dumbass (Argentina)
  "la concha de la lora", // The parrot's cunt (Argentina, exclamation)
  "concha seca", // Dry cunt (Argentina, old woman insult)
  "chupame la pija", // Suck my dick (Argentina)
  "pija", // Dick (Argentina)
  "la puta que lo parió", // The whore who bore him
  "rompepelotas", // Ball breaker (Argentina)
  "hinchapelotas", // Ball sweller (annoying, Argentina)
  "pelotas", // Balls (Argentina)
  "en pelotas", // Naked / Broke (Argentina)
  "me chupa un huevo", // I don't give a fuck (lit. it sucks my egg, Argentina)
  "turro", // Thief / Asshole (Argentina)
  "turra", // Fem of turro
  "atorrante", // Scoundrel, lowlife (Argentina)
  "gil", // Idiot (Argentina)
  "gila", // Fem of gil
  "gil de goma", // Rubber idiot (Argentina)
  "chupamedias", // Bootlicker (Argentina, lit. sock sucker)
  "cornudo", // Cuckold
  "cornuda", // Fem of cornudo
  "sorete", // Piece of shit (Argentina)
  "garcha", // Dick (Argentina)
  "garchame", // Fuck me (Argentina)
  "garchador", // Fucker (Argentina)
  "trola", // Slut (Argentina)
  "trolita", // Little slut (Argentina)
  "pete", // Blowjob (Argentina)
  "hacerle un pete", // To give a blowjob (Argentina)
  "ortiva", // Buzzkill / Snitch (Argentina)
  "cagador", // Cheater / Scammer (Argentina)
  "cagadora", // Fem
  "hijo de un camión de putas", // Son of a truckload of whores (Argentina)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "pirobo", // Asshole / Faggot (Colombia, very vulgar)
  "piroba", // Fem of pirobo
  "gonorrea hijueputa", // Gonorrhea son of a bitch (Colombia)
  "malparido de mierda", // Shit badly-born (Colombia)
  "carechimba", // Cunt face (Colombia)
  "chimba", // Cunt / Cool (Colombia, dual use)
  "chimbo", // Fake / Shitty (Colombia)
  "guevón", // Already listed but also Colombia
  "lambon", // Suck-up (Colombia)
  "lambona", // Fem
  "sapear", // To snitch (Colombia)
  "culicagado", // Shit-assed (Colombia, immature person)
  "culicagada", // Fem
  "cachón", // Cuckold (Colombia)
  "arrecho", // Horny / Angry / Awesome (Colombia/Venezuela)
  "arrechera", // Horniness / Anger (Colombia/Venezuela)
  "hijueperra", // Son of a bitch (Colombia, lit. son of a dog)
  "perro hijueputa", // Dog son of a bitch (Colombia)
  "vergajo", // Dick / Whip (Colombia)
  "mondá", // Dick (Colombia)
  "ñero", // Low-class person (Colombia)
  "ñera", // Fem

  // ========================================
  // === Cuban Profanity ===================
  // ========================================
  "comepinga", // Dick eater (Cuba, very vulgar)
  "comemierda", // Shit eater (Cuba/general)
  "singao", // Fucked (Cuba)
  "singá", // Fem of singao (Cuba)
  "pinga", // Dick (Cuba/Caribbean)
  "pingón", // Big-dicked (Cuba)
  "tremenda pinga", // Tremendous dick / What the fuck (Cuba)
  "me cago en tu madre", // I shit on your mother (Cuba/Spain)
  "me cago en diez", // I shit on ten (Cuba/Spain, euphemism)
  "comerle el culo", // To eat someone's ass (Cuba)

  // ========================================
  // === Puerto Rican Profanity ============
  // ========================================
  "bicho", // Dick (Puerto Rico)
  "bichote", // Drug dealer / Big dick (Puerto Rico)
  "mamao", // Sucker / Idiot (Puerto Rico)
  "mamá bicho", // Dick sucker (Puerto Rico)
  "come mierda", // Shit eater (Puerto Rico variant)
  "canto de cabrón", // Huge bastard (Puerto Rico)
  "puñeta", // Wank / Damn (Puerto Rico/general)
  "puñetero", // Wanker / Annoying person
  "puñetera", // Fem
  "jodón", // Annoying fucker (Puerto Rico)
  "jodona", // Fem
  "lambón", // Ass-kisser (Puerto Rico/Caribbean)

  // ========================================
  // === Uruguayan / Rioplatense ===========
  // ========================================
  "botija", // Kid / Idiot (Uruguay)
  "papelón", // Embarrassment / Fool (Uruguay)
  "bardero", // Troublemaker (Uruguay/Argentina)
  "bardera", // Fem
  "loco de mierda", // Crazy fucker (Rioplatense)

  // ========================================
  // === More General / Pan-Hispanic =======
  // ========================================
  "chupapollas", // Cocksucker (Spain)
  "meapila", // Holy joe / Overly devout person (derogatory)
  "zorrón", // Big slut (augmentative)
  "putón", // Big whore (augmentative)
  "putona", // Fem of putón
  "piojoso", // Lousy (lit. lice-ridden)
  "piojosa", // Fem
  "asqueroso", // Disgusting
  "asquerosa", // Fem
  "pervertido", // Pervert
  "pervertida", // Fem
  "degenerado", // Degenerate
  "degenerada", // Fem
  "depravado", // Depraved
  "depravada", // Fem
  "miserable", // Miserable / Scum
  "descarado", // Shameless
  "descarada", // Fem
  "desvergonzado", // Shameless
  "desvergonzada", // Fem
  "traidor", // Traitor
  "traidora", // Fem
  "cobarde", // Coward
  "inútil", // Useless
  "parásito", // Parasite
  "escoria", // Scum, dregs
  "basura", // Trash, garbage (person)
  "lacra", // Scum / Scar
  "alimaña", // Vermin
  "sabandija", // Vermin, bug
  "engendro", // Monstrosity / Freak
  "adefesio", // Ugly/ridiculous person
  "esperpento", // Grotesque person
  "mamarracho", // Ridiculous person / Mess
  "fantoche", // Puppet / Pretentious fool
  "pelele", // Puppet / Spineless person
  "mequetrefe", // Good-for-nothing
  "mequeterfa", // Fem variant
  "mentecato", // Fool, simpleton
  "mentecata", // Fem
  "pazguato", // Simpleton, gawker
  "pazguata", // Fem
  "imbécil de mierda", // Fucking imbecile
  "estúpido de mierda", // Fucking stupid
  "cara de verga", // Dick face
  "cara de pinga", // Dick face (Caribbean)
  "cara de mierda", // Shit face
  "tragasables", // Sword swallower (sexual implication)
  "ramera", // Whore (literary/archaic)
  "furcia", // Whore (Spain)
  "fulana", // Hooker / So-and-so
  "buscona", // Gold digger / Prostitute
  "cualquiera", // Anyone / Easy woman (derogatory)
  "callejera", // Street woman (prostitute)
  "arrabalera", // From the slums / Coarse woman
  "golfa", // Slut (Spain)
  "lagarta", // Lizard / Scheming woman (Spain)
  "arpía", // Harpy / Shrew
  "víbora", // Viper / Two-faced person
  "sierpe", // Serpent / Nasty person
  "tarada de mierda", // Fucking weirdo
  "pedazo de mierda", // Piece of shit

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "coito", // Coitus
  "sodomía", // Sodomy
  "felación", // Fellatio
  "cunnilingus", // Cunnilingus
  "masturbar", // To masturbate
  "masturbarse", // To masturbate (reflexive)
  "pajear", // To wank (LatAm)
  "pajearse", // To wank oneself
  "correrse", // To cum (Spain)
  "venirse", // To cum (LatAm)
  "eyacular", // To ejaculate
  "orgasmo", // Orgasm
  "clítoris", // Clitoris
  "testículos", // Testicles
  "escroto", // Scrotum
  "prepucio", // Foreskin
  "glande", // Glans
  "erección", // Erection
  "empalmar", // To get hard (Spain slang)
  "empalmado", // Hard / Aroused (Spain)
  "empalmada", // Fem
  "tirar", // To throw / To fuck (LatAm)
  "tirarse a", // To fuck someone
  "echarse un polvo", // To have a shag (Spain)
  "polvo", // Dust / Shag (Spain)
  "un clavo", // A nail / A fuck (LatAm)
  "mojar", // To wet / To fuck (LatAm)
  "mojar el churro", // To dip the churro / To fuck (Mexico)
  "meter", // To put in / To fuck
  "meterla", // To put it in / To fuck
  "metérsela", // To put it in (reflexive)
  "penetrar", // To penetrate
  "sodomizar", // To sodomize
  "mamar", // To suckle / To suck dick (LatAm)
  "chupar", // To suck
  "lamer", // To lick
  "tragar", // To swallow
  "pene", // Penis
  "vagina", // Vagina
  "ano", // Anus
  "nalgas", // Buttocks
  "pompis", // Butt (childish)
  "pechos", // Breasts
  "chichis", // Boobs (Mexico)
  "lolas", // Boobs (Argentina)
  "gomas", // Boobs (Central America)
  "pezón", // Nipple
  "pezones", // Nipples
  "condón", // Condom
  "preservativo", // Condom (formal)
  "prostituta", // Prostitute
  "prostituto", // Male prostitute
  "burdel", // Brothel
  "prostíbulo", // Brothel
  "lupanar", // Brothel (literary)
  "proxeneta", // Pimp
  "cafiche", // Pimp (LatAm)
  "padrote", // Pimp (Mexico)
  "lenón", // Pimp (formal)
  "gigoló", // Gigolo
  "ninfómana", // Nymphomaniac
  "sátiro", // Satyr / Lecher
  "lujuria", // Lust
  "lujurioso", // Lustful
  "lascivo", // Lascivious
  "obsceno", // Obscene
  "pornografía", // Pornography
  "porno", // Porn

  // ========================================
  // === More Chingar Derivatives (Mexico) ==
  // ========================================
  "chingaderón", // Big piece of junk (Mexico)
  "chingaste", // You fucked up (Mexico)
  "chingué", // I fucked up (Mexico)
  "me chingué", // I got screwed (Mexico)
  "chingasos", // Blows, punches (Mexico)
  "chingalera", // Junk, crap (Mexico)
  "chinguero", // A lot of, shitload (Mexico)
  "chingativo", // Fucking annoying (Mexico)
  "rechingón", // Really badass (Mexico)
  "rechingona", // Fem really badass (Mexico)
  "rechingada", // Really fucked (Mexico)
  "echingadera", // Variant of chingadera (Mexico)
  "chingaderas", // Plural: bullshit things (Mexico)
  "hecho la chingada", // Done like crap (Mexico)

  // ========================================
  // === More Puta/Puto Compounds ==========
  // ========================================
  "putísima", // Most whorish (superlative)
  "putísimo", // Most whorish (masc superlative)
  "puterío", // Whorehouse atmosphere
  "putañero", // Whoremonger (variant)
  "reputísima", // Emphatic most whorish
  "reputísima madre", // Emphatic motherfucker
  "puta barata", // Cheap whore
  "re puta", // Super whore (Argentina)
  "re puta madre", // Super motherfucker (Argentina)
  "puta que te parió", // Whore that bore you
  "hijo de tu puta madre", // Son of your whore mother
  "hija de tu puta madre", // Daughter of your whore mother
  "gran puta", // Big whore
  "hijo de la gran puta", // Son of the great whore
  "reputa", // Emphatic whore
  "reputamadre", // Emphatic motherfucker
  "putada", // A shitty situation / dirty trick

  // ========================================
  // === More Mierda Compounds =============
  // ========================================
  "mierda seca", // Dry shit
  "tremenda mierda", // Tremendous shit
  "hecho mierda", // Wrecked / destroyed
  "hecha mierda", // Fem wrecked
  "de mierda", // Shitty (adjective)
  "mierda de persona", // Shit of a person
  "pura mierda", // Pure shit
  "más mierda", // More shit
  "mierdero", // Shithole
  "mierdecilla", // Little shit (diminutive)
  "tremendo mierda", // Tremendous shit (as person)

  // ========================================
  // === More Verga Compounds ==============
  // ========================================
  "vergacho", // Dickish (Mexico)
  "averga", // No way / dick-related exclamation (Mexico)
  "vergudo", // Big-dicked / badass
  "vergonzón", // Shameful-dicked
  "vergüeada", // Beating (Central America)
  "vergueada", // Beating variant
  "verguear", // To beat up (Central America)
  "verguearse", // To fight (Central America)
  "envergar", // To put the dick in
  "envergate", // Stick it in (vulgar command)
  "valeberga", // Worthless (Mexico slang, phonetic)
  "avergas", // No shit (Mexico exclamation)
  "verguiza", // Beating (Mexico)

  // ========================================
  // === More Culo Compounds ===============
  // ========================================
  "culiada", // Fucked in the ass (fem, Chile/Argentina)
  "culiado", // Fucked in the ass (masc)
  "enculado", // Sodomized / screwed
  "enculada", // Fem sodomized
  "culiar", // To fuck anally (LatAm)
  "culón", // Big-assed
  "culona", // Big-assed (fem)
  "culero de mierda", // Fucking asshole (Mexico)
  "culazo", // Big ass / great ass
  "reculiar", // To fuck again anally
  "hueleculo", // Ass sniffer
  "rascaculo", // Ass scratcher
  "culebrón", // Soap opera / coward (from culebra)

  // ========================================
  // === Dominican Slang ===================
  // ========================================
  "tíguere", // Street-smart guy / hustler (Dominican)
  "tigueraje", // Street behavior (Dominican)
  "singadera", // Fucking around (Dominican)
  "sinverguenza", // Shameless (Dominican variant)
  "coñazo de madre", // Motherfucking hit (Dominican)
  "mamagüevo", // Variant with diaeresis
  "mamagüevos", // Plural
  "desgraciáo", // Wretched (Dominican phonetic)
  "hijo e puta", // Son of a bitch (Dominican phonetic)
  "jediondo", // Stinky / annoying (Dominican)
  "pariguayo", // Loser / party watcher (Dominican)
  "lambeculo", // Ass licker (Dominican)
  "cuero", // Leather / whore (Dominican)
  "cuerúa", // Slut (Dominican)
  "grajo", // Armpit stink / stinky person (Dominican)
  "deguañangao", // Messed up / ugly (Dominican)
  "vaina", // Thing / damn thing (Dominican)
  "qué vaina", // What the hell (Dominican)
  "maldita vaina", // Damn thing (Dominican)

  // ========================================
  // === Ecuadorian Profanity ==============
  // ========================================
  "chuchamare", // Cunt mother (Ecuadorian)
  "longo", // Indigenous person (derogatory, Ecuador)
  "longa", // Fem indigenous (derogatory, Ecuador)
  "achachay", // Expression of cold / mild exclamation
  "ñaño", // Brother / dude (Ecuador, can be derogatory)
  "cagado de la risa", // Laughing your ass off (Ecuador)
  "verdugo", // Executioner / badass (Ecuador slang)
  "sorche", // Soldier / idiot (Ecuador)
  "manaburro", // Really stupid (Ecuador)

  // ========================================
  // === Bolivian Profanity ================
  // ========================================
  "k'arajo", // Damn (Bolivia, Quechua influence)
  "ch'enko", // Mess / clusterfuck (Bolivia)
  "birlocha", // Loose woman (Bolivia)
  "llokalla", // Kid / brat (Bolivia, Aymara)
  "jailón", // Snob / rich kid (Bolivia)
  "jailona", // Fem snob (Bolivia)
  "q'encha", // Bad luck / jinx person (Bolivia)
  "huevadas", // Bullshit (Bolivia)

  // ========================================
  // === Paraguayan Profanity ==============
  // ========================================
  "kurepí", // Pig-skinned (derogatory, Paraguay Guaraní)
  "tavy", // Stupid / dumb (Paraguay Guaraní)
  "ndéra", // Damn (Paraguay Guaraní expression)
  "nde rakore", // Your mother (Guaraní insult, Paraguay)
  "nde rakaré", // You're shameless (Guaraní, Paraguay)
  "mba'e piko nde", // What the hell are you (Guaraní, Paraguay)
  "cachicué", // Idiot / fool (Paraguay)
  "mitã'i", // Brat (Paraguay Guaraní)

  // ========================================
  // === Central American Profanity ========
  // ========================================
  "cerote", // Piece of shit (Guatemala, El Salvador)
  "chucho", // Dog / mutt (Central America)
  "pichazo", // Dick hit (Costa Rica)
  "mae", // Dude (Costa Rica, can be derogatory)
  "playo", // Faggot (Honduras, derogatory)
  "playa", // Fem faggot (Honduras, derogatory)
  "culero hijueputa", // Fucking asshole (Central America)
  "gran cerote", // Big piece of shit (Guatemala)
  "maje", // Dude / idiot (Honduras, Nicaragua)
  "bayunco", // Redneck / hick (Guatemala)
  "shumo", // Low-class (El Salvador)
  "shuco", // Dirty / filthy (Central America)
  "pijazo", // Dick hit (Honduras)
  "turca", // Drunk (Central America)
  "pisado", // Whipped / cuckold (Guatemala)
  "hueco", // Hollow / faggot (Central America, derogatory)
  "hueca", // Fem hollow / lesbian (derogatory)
  "chele", // White person (Central America, can be derogatory)

  // ========================================
  // === Canary Islands Profanity ==========
  // ========================================
  "baifo", // Goat kid / idiot (Canary Islands)
  "magado", // Gutless / coward (Canary Islands)
  "engañifla", // Deception / bullshit (Canary Islands)
  "leche", // Milk / hit / luck (Canary Islands)
  "lechero", // Lucky / annoying (Canary Islands)
  "me cago en la leche", // I shit in the milk (Canary/Spain)
  "me cago en tus muertos", // I shit on your dead (Spain/Canary)

  // ========================================
  // === Galician Profanity ================
  // ========================================
  "foder", // To fuck (Galician)
  "fodido", // Fucked (Galician)
  "fodida", // Fem fucked (Galician)
  "carallo", // Dick / damn (Galician)
  "collón", // Coward / big balls (Galician)
  "collona", // Fem coward (Galician)
  "me cago na hostia", // I shit on the host (Galician)
  "cona", // Cunt (Galician)
  "fillodaputa", // Son of a bitch (Galician)

  // ========================================
  // === Internet Abbreviations ============
  // ========================================
  "hdp", // Hijo de puta
  "hdspm", // Hijo de su puta madre
  "csm", // Concha su madre
  "ptm", // Puta madre
  "lcdtm", // La concha de tu madre
  "lcdll", // La concha de la lora
  "lpm", // La puta madre
  "qlia", // Culiada (Chile abbreviation)
  "qliao", // Culiao (Chile abbreviation)
  "ctmr", // Concha tu madre (Peru abbreviation)
  "tmr", // Tu madre (abbreviation)
  "mrda", // Mierda (abbreviation)
  "hdlv", // Hijo de la verga
  "plp", // Picha loca pana (Venezuela abbreviation)
  "mmgv", // Mamaguevo (abbreviation)
  "hdlch", // Hijo de la chingada
  "nmms", // No mames (Mexico abbreviation)
  "alv", // A la verga (Mexico abbreviation)
  "stpm", // Su puta madre
  "pta", // Puta (abbreviation)
  "jdp", // Joder puta
  "pqd", // Porque da (euphemistic abbreviation)
  "qlq", // Que lo que (Dominican abbreviation)

  // ========================================
  // === Animal + Profanity Insults ========
  // ========================================
  "hijo de perra", // Son of a bitch (literal dog)
  "perra maldita", // Damn bitch
  "zorra de mierda", // Shitty slut
  "burro pendejo", // Stupid donkey-ass
  "burra pendeja", // Fem stupid donkey-ass
  "cerdo asqueroso", // Disgusting pig
  "rata de mierda", // Shitty rat
  "cucaracha", // Cockroach (insult)
  "piojo", // Louse (insult)
  "víbora ponzoñosa", // Venomous viper
  "animal de mierda", // Shitty animal
  "bestia", // Beast / brute
  "bestia de mierda", // Shitty beast
  "perro maldito", // Damn dog
  "perra hijueputa", // Bitch son of a whore
  "mono", // Monkey (derogatory for person)
  "mona", // Fem monkey
  "gorila", // Gorilla (derogatory)
  "asno", // Donkey / jackass
  "cabra loca", // Crazy goat
  "hijo de la perra", // Son of the bitch
  "gusano", // Worm (Cuba: political traitor)
  "larva", // Larva / worthless person
  "piojoso de mierda", // Shitty louse-ridden person
  "garrapata", // Tick / parasite person

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "gangbang", // Gangbang
  "trío", // Threesome
  "orgía", // Orgy
  "zoofilia", // Zoophilia
  "bestialismo", // Bestiality
  "necrofilia", // Necrophilia
  "pedofilia", // Pedophilia
  "pedófilo", // Pedophile
  "pedófila", // Fem pedophile
  "violador", // Rapist
  "violadora", // Fem rapist
  "violación", // Rape
  "violar", // To rape
  "abuso sexual", // Sexual abuse
  "acoso sexual", // Sexual harassment
  "incesto", // Incest
  "bukkake", // Bukkake
  "creampie", // Creampie
  "facial", // Facial (sexual)
  "fetiche", // Fetish
  "dominatriz", // Dominatrix
  "sumiso", // Submissive
  "sumisa", // Fem submissive
  "sadomasoquismo", // Sadomasochism
  "bondage", // Bondage
  "squirt", // Squirt
  "dildo", // Dildo
  "vibrador", // Vibrator
  "consolador", // Dildo (consoler)
  "cogida", // Fuck session (LatAm)
  "encamarse", // To get into bed with (euphemism)
  "revolcón", // Roll in the hay / quickie
  "encamada", // Bedding session
  "nalguear", // To spank buttocks
  "nalgueada", // Spanking
  "dar por el culo", // To give it in the ass
  "meter por el culo", // To put it in the ass
  "sexo oral", // Oral sex
  "sexo anal", // Anal sex

  // ========================================
  // === Homophobic Slurs (All Dialects) ===
  // ========================================
  "mariconcito", // Little faggot (diminutive)
  "mariconazo", // Big faggot (augmentative)
  "mariconada", // Gay act / bullshit
  "amariconado", // Effeminate (derogatory)
  "amariconada", // Fem effeminate
  "afeminado", // Effeminate (derogatory)
  "afeminada", // Fem
  "joto", // Faggot (Mexico)
  "jota", // Fem faggot (Mexico)
  "jotería", // Gay stuff (Mexico, derogatory)
  "jotito", // Little faggot (Mexico)
  "jotón", // Big faggot (Mexico)
  "volteado", // Turned / gay (Mexico, derogatory)
  "invertido", // Inverted / gay (archaic derogatory)
  "invertida", // Fem inverted
  "sodomita", // Sodomite
  "sarasa", // Gay (Argentina, derogatory)
  "trolo", // Gay (Argentina, derogatory)
  "cola", // Tail / gay (Colombia, derogatory)
  "cacorro", // Gay (Colombia, derogatory)
  "fleto", // Gay (Chile, derogatory)
  "colipato", // Gay (Chile, derogatory)
  "rosquete", // Gay (Peru, derogatory)
  "cabro", // Gay / young man (Chile, derogatory)
  "pájaro", // Bird / gay (Caribbean, derogatory)
  "machorra", // Butch lesbian (derogatory)
  "machona", // Butch lesbian (derogatory)
  "manflora", // Lesbian (derogatory, LatAm)
  "manfloro", // Gay man (derogatory, variant)
  "marimacho", // Tomboy / butch (derogatory)
  "marimacha", // Butch (derogatory)
  "bujarrón", // Top in gay sex (derogatory, Caribbean)
  "bugarrón", // Variant of bujarrón

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  "raja", // Crack / vagina (vulgar)
  "rajada", // Split / vagina (vulgar)
  "pepa", // Pill / vagina (LatAm)
  "papaya", // Papaya / vagina (Caribbean)
  "toto", // Vagina (Dominican)
  "totona", // Big vagina (Dominican)
  "cuca", // Vagina (Colombia)
  "papo", // Vagina (Venezuela)
  "conejo", // Rabbit / vagina (LatAm)
  "empanada", // Pastry / vagina (slang)
  "arepa", // Corn cake / lesbian sex (Venezuela/Colombia)
  "paloma", // Pigeon / penis (Mexico)
  "pájara", // Bird / penis / gay (regional)
  "riata", // Lasso / penis (Mexico)
  "chile", // Chili / penis (Mexico)
  "camote", // Sweet potato / penis (Mexico)
  "plátano", // Banana / penis
  "chorizo", // Sausage / penis
  "salchicha", // Sausage / penis
  "longaniza", // Long sausage / penis
  "morcilla", // Blood sausage / penis
  "huevos", // Eggs / balls
  "bolas", // Balls / testicles
  "tanates", // Balls (Mexico)
  "turmas", // Testicles (archaic)
  "sobaco", // Armpit (used pejoratively)
  "nalgón", // Big-assed (masc)
  "nalgona", // Big-assed (fem)
  "tetona", // Big-titted
  "tetón", // Big-titted (masc, mockingly)
  "chichona", // Big-boobed (Mexico)
  "culote", // Big ass

  // ========================================
  // === More Compound Insults =============
  // ========================================
  "idiota de mierda", // Fucking idiot
  "pendejo de mierda", // Shitty asshole
  "cabrón de mierda", // Shitty bastard
  "cerdo de mierda", // Shitty pig
  "malnacido de mierda", // Shitty bastard
  "perro de mierda", // Shitty dog
  "hijo de mil putas", // Son of a thousand whores
  "hijo de la gran verga", // Son of the great dick
  "vete al carajo", // Go to hell
  "vete al diablo", // Go to the devil
  "vete a freír espárragos", // Go fry asparagus / get lost
  "a la mierda con todo", // To shit with everything
  "que te den por culo", // Get it in the ass
  "me cago en todo", // I shit on everything
  "me cago en dios", // I shit on god (Spain, very offensive)
  "me cago en la virgen", // I shit on the virgin (Spain)
  "me cago en la puta", // I shit on the whore
  "la madre que te parió", // The mother that bore you
  "maldita sea", // Damn it
  "maldita sea tu estampa", // Damn your image
  "hijo de tu pinche madre", // Son of your fucking mother (Mexico)
  "pendejo culero", // Asshole idiot (Mexico)
  "pinche mamón", // Fucking jerk (Mexico)
  "pinche idiota", // Fucking idiot (Mexico)
  "pinche mierda", // Fucking shit (Mexico)
  "pinche basura", // Fucking trash (Mexico)
  "pedazo de imbécil", // Piece of imbecile
  "pedazo de basura", // Piece of trash
  "pedazo de idiota", // Piece of idiot
  "pedazo de animal", // Piece of animal
  "maldito hijo de puta", // Damn son of a bitch
  "maldito cabrón", // Damn bastard
  "maldita perra", // Damn bitch
  "grandísimo pendejo", // Enormous asshole
  "grandísima puta", // Enormous whore
  "grandísimo cabrón", // Enormous bastard
  "grandísimo idiota", // Enormous idiot
  "tremendo pendejo", // Tremendous asshole
  "tremendo cabrón", // Tremendous bastard
  "asqueroso de mierda", // Disgusting shit
  "sucio de mierda", // Dirty shit
  "mugroso", // Filthy
  "mugrosa", // Fem filthy
  "roñoso", // Scabby / stingy
  "roñosa", // Fem scabby
  "cochinada", // Filthy act / piggish behavior
  "porquería", // Filth / crap / garbage
  "chusma", // Riffraff / mob
  "gentuza", // Riffraff / scum
  "escuincle", // Brat (Mexico, Nahuatl origin)
  "escuincla", // Fem brat (Mexico)
  "chamaco", // Kid / brat (Mexico)
  "chamaca", // Fem kid/brat (Mexico)
  "mocoso", // Snotty brat
  "mocosa", // Fem snotty brat
  "canalla", // Scoundrel / rogue
  "rufián", // Ruffian / pimp
  "cretino de mierda", // Shitty cretin
  "subnormal de mierda", // Shitty retard
  "retrasado mental", // Mentally retarded (offensive)
  "retrasada mental", // Fem mentally retarded

  // ========================================
  // === Spelling Evasions: Puta ==========
  // ========================================
  "put4", // Puta - number substitution
  "pvta", // Puta - v for u
  "pvt4", // Puta - double substitution
  "p.u" + ".t.a", // Puta - dotted evasion (concatenated to avoid lint)
  "pu7a", // Puta - 7 for t
  "pu+a", // Puta - symbol substitution
  "putaa", // Puta - elongated
  "putaaa", // Puta - elongated more
  "puuuta", // Puta - elongated u
  "puuta", // Puta - elongated u
  "pputa", // Puta - doubled p
  "putah", // Puta - trailing h evasion
  "put@", // Puta - @ for a
  "put@a", // Puta - @ insertion
  "pu†a", // Puta - dagger for t
  "пuta", // Puta - Cyrillic п for p
  "púta", // Puta - accented u
  "pùta", // Puta - grave u
  "pütá", // Puta - umlaut/accent evasion
  "p u t a", // Puta - spaced out
  "p-u-t-a", // Puta - hyphenated

  // ========================================
  // === Spelling Evasions: Mierda ========
  // ========================================
  "m1erda", // Mierda - 1 for i
  "m!erda", // Mierda - ! for i
  "mi3rda", // Mierda - 3 for e
  "mierd4", // Mierda - 4 for a
  "m13rda", // Mierda - double substitution
  "m!3rda", // Mierda - double substitution
  "mierdaa", // Mierda - elongated
  "mierdaaa", // Mierda - elongated more
  "miiierda", // Mierda - elongated i
  "mierrda", // Mierda - doubled r
  "mierdah", // Mierda - trailing h
  "mierda!", // Mierda - trailing exclamation
  "m.i.e.r.d.a", // Mierda - dotted
  "m-i-e-r-d-a", // Mierda - hyphenated
  "m i e r d a", // Mierda - spaced
  "mierda5", // Mierda - trailing number
  "mierd@", // Mierda - @ for a
  "mi€rda", // Mierda - euro for e

  // ========================================
  // === Spelling Evasions: Verga =========
  // ========================================
  "v3rga", // Verga - 3 for e
  "verg4", // Verga - 4 for a
  "v3rg4", // Verga - double substitution
  "vergaa", // Verga - elongated
  "vergaaa", // Verga - elongated more
  "veerga", // Verga - elongated e
  "verrga", // Verga - doubled r
  "berg4", // Verga - b for v
  "berga", // Verga - b for v
  "beerga", // Verga - b for v elongated
  "v.e.r.g.a", // Verga - dotted
  "v-e-r-g-a", // Verga - hyphenated
  "v e r g a", // Verga - spaced
  "verg@", // Verga - @ for a

  // ========================================
  // === Spelling Evasions: Coño ==========
  // ========================================
  "c0ño", // Coño - 0 for o
  "coñ0", // Coño - 0 for second o
  "c0ñ0", // Coño - double 0
  "conio", // Coño - no tilde
  "c0nio", // Coño - no tilde, 0 for o
  "conyo", // Coño - y for ñ
  "c0ny0", // Coño - y for ñ, 0s
  "coñoo", // Coño - elongated
  "coñooo", // Coño - elongated more
  "koño", // Coño - k for c
  "c.o.ñ.o", // Coño - dotted
  "coñ@", // Coño - @ evasion

  // ========================================
  // === Spelling Evasions: Culo ==========
  // ========================================
  "cul0", // Culo - 0 for o
  "cvlo", // Culo - v for u
  "cvl0", // Culo - double substitution
  "kulo", // Culo - k for c
  "kul0", // Culo - k for c, 0 for o
  "culoo", // Culo - elongated
  "culooo", // Culo - elongated more
  "qulo", // Culo - q for c
  "c.u.l.o", // Culo - dotted
  "c-u-l-o", // Culo - hyphenated
  "c u l o", // Culo - spaced

  // ========================================
  // === Spelling Evasions: Polla =========
  // ========================================
  "p0lla", // Polla - 0 for o
  "poll4", // Polla - 4 for a
  "p0ll4", // Polla - double substitution
  "poya", // Polla - y for ll
  "p0ya", // Polla - y for ll, 0 for o
  "pollaa", // Polla - elongated
  "p.o.l.l.a", // Polla - dotted

  // ========================================
  // === Spelling Evasions: Joder =========
  // ========================================
  "j0der", // Joder - 0 for o
  "jod3r", // Joder - 3 for e
  "j0d3r", // Joder - double substitution
  "joderr", // Joder - doubled r
  "joderrr", // Joder - tripled r
  "j.o.d.e.r", // Joder - dotted
  "hoder", // Joder - h for j evasion

  // ========================================
  // === Spelling Evasions: Puto ==========
  // ========================================
  "put0", // Puto - 0 for o
  "pvto", // Puto - v for u
  "pvt0", // Puto - double substitution
  "pu7o", // Puto - 7 for t
  "putoo", // Puto - elongated
  "p-u-t-o", // Puto - hyphenated
  "p u t o", // Puto - spaced
  "put@o", // Puto - @ insertion

  // ========================================
  // === Spelling Evasions: Cabrón ========
  // ========================================
  "cabr0n", // Cabrón - 0 for o
  "kabron", // Cabrón - k for c
  "kabr0n", // Cabrón - k+0 substitution
  "cabronn", // Cabrón - doubled n
  "c4bron", // Cabrón - 4 for a
  "cabroooon", // Cabrón - elongated
  "c.a.b.r.o.n", // Cabrón - dotted

  // ========================================
  // === Spelling Evasions: Pendejo =======
  // ========================================
  "pend3jo", // Pendejo - 3 for e
  "pendej0", // Pendejo - 0 for o
  "p3ndejo", // Pendejo - 3 for first e
  "p3nd3jo", // Pendejo - double 3
  "pendejoo", // Pendejo - elongated
  "pndejo", // Pendejo - missing e
  "pendjo", // Pendejo - missing e
  "pen dejo", // Pendejo - spaced

  // ========================================
  // === Spelling Evasions: Chingar =======
  // ========================================
  "ch1ngar", // Chingar - 1 for i
  "ch!ngar", // Chingar - ! for i
  "ching4r", // Chingar - 4 for a
  "ch1ng4r", // Chingar - double substitution
  "chingarr", // Chingar - doubled r
  "xingar", // Chingar - x for ch
  "chingarle", // Chingar variant

  // ========================================
  // === Spelling Evasions: Hijo de puta ==
  // ========================================
  "hijodeputa", // No spaces
  "hijo d puta", // Missing e
  "ijo de puta", // Missing h
  "hijoeputa", // Colombian phonetic
  "ijueputa", // Short form
  "jueputa", // Very short form
  "juepuerca", // Euphemistic variant
  "hpd", // Hijo puta abbreviation
  "hputa", // H + puta
  "hijoputamadre", // Compound

  // ========================================
  // === Spelling Evasions: Maricón =======
  // ========================================
  "mar1con", // Maricón - 1 for i
  "mar1c0n", // Maricón - double substitution
  "marik0n", // Maricón - k+0 substitution
  "marikon", // Maricón - k for c
  "marikón", // Maricón - k for c, tilde
  "maric0n", // Maricón - 0 for o
  "maricon", // Maricón - no tilde
  "mariconn", // Maricón - doubled n
  "m4ricon", // Maricón - 4 for a

  // ========================================
  // === Spelling Evasions: Follar ========
  // ========================================
  "f0llar", // Follar - 0 for o
  "foll4r", // Follar - 4 for a
  "foyar", // Follar - y for ll
  "follaar", // Follar - elongated
  "foiar", // Follar - i for ll

  // ========================================
  // === Spelling Evasions: Concha ========
  // ========================================
  "c0ncha", // Concha - 0 for o
  "conch4", // Concha - 4 for a
  "c0nch4", // Concha - double substitution
  "koncha", // Concha - k for c
  "conxa", // Concha - x for ch

  // ========================================
  // === Spelling Evasions: Gilipollas ====
  // ========================================
  "gilip0llas", // Gilipollas - 0 for o
  "gilipoll4s", // Gilipollas - 4 for a
  "jilipollas", // Gilipollas - j for g evasion
  "gilipoyyas", // Gilipollas - y for ll

  // ========================================
  // === Spelling Evasions: Pinga =========
  // ========================================
  "p1nga", // Pinga - 1 for i
  "ping4", // Pinga - 4 for a
  "p!nga", // Pinga - ! for i
  "pinnga", // Pinga - doubled n

  // ========================================
  // === Spelling Evasions: CTM / HDPs ====
  // ========================================
  "c.t.m", // CTM dotted
  "h.d.p", // HDP dotted
  "h d p", // HDP spaced
  "c t m", // CTM spaced
  "hijos de puta", // Plural sons of bitches
  "hijas de puta", // Plural daughters of bitches

  // ========================================
  // === Compound Phrases: Me cago en... ==
  // ========================================
  "me cago en tu puta madre", // I shit on your whore mother
  "me cago en la hostia", // I shit on the host
  "me cago en la puta madre que te parió", // I shit on the whore mother who bore you
  "me cago en tu padre", // I shit on your father
  "me cago en tu puta vida", // I shit on your whore life
  "me cago en tus muelas", // I shit on your teeth (euphemism)
  "me cago en la mar", // I shit on the sea (euphemism)
  "me cago en la leche que mamaste", // I shit on the milk you suckled
  "me cago en todo lo que se menea", // I shit on everything that moves
  "me cago en la ostia", // Variant spelling
  "me cago en su puta madre", // I shit on his/her whore mother

  // ========================================
  // === Compound Phrases: Vete a... ======
  // ========================================
  "vete a la verga", // Go to the dick (Mexico)
  "vete a tomar por culo", // Go take it up the ass (Spain)
  "vete a cagar", // Go take a shit
  "vete a la puta mierda", // Go to the fucking shit
  "vete a la puta calle", // Go to the fucking street
  "vete al coño de tu madre", // Go to your mother's cunt
  "vete a mamar", // Go suck dick
  "vete a la concha de tu madre", // Go to your mother's cunt (Argentina)
  "ándate a la mierda", // Go to shit (Argentina)
  "ándate a la concha de tu madre", // Go to your mother's cunt (Argentina)
  "ándate a cagar", // Go shit yourself (Argentina)
  "iros a la mierda", // Go to shit (plural, Spain)
  "iros a tomar por culo", // Go get fucked (plural, Spain)

  // ========================================
  // === Compound Phrases: Chupa... =======
  // ========================================
  "chúpame la pija", // Suck my dick (Argentina, with accent)
  "chúpame la verga", // Suck my dick (Mexico)
  "chúpame el culo", // Suck my ass
  "chúpamela", // Suck it (for me)
  "chupala", // Suck it
  "chupa mi polla", // Suck my cock (Spain)
  "chupa mi verga", // Suck my dick (LatAm)
  "chupa mi pija", // Suck my dick (Argentina)
  "chupa mi pinga", // Suck my dick (Caribbean)
  "chupapija", // Dick sucker (Argentina)
  "chupapinga", // Dick sucker (Caribbean)

  // ========================================
  // === Compound Phrases: Métete... ======
  // ========================================
  "métete la verga por el culo", // Stick the dick up your ass
  "métete un dedo", // Stick a finger in yourself
  "métete la polla", // Stick the dick in yourself
  "mételo por el culo", // Stick it up the ass
  "métete la mierda", // Stick the shit in yourself
  "metételo por donde te quepa", // Stick it wherever it fits

  // ========================================
  // === Compound Phrases: Que te... ======
  // ========================================
  "que te follen", // Go get fucked (Spain)
  "que te den", // May they give it to you
  "que te la metan", // May they stick it in you
  "que te la chupen", // May they suck it for you
  "que se joda", // Fuck it / let it be screwed
  "que se jodan", // Fuck them
  "que te parta un rayo", // May lightning split you
  "que te folle un pez", // May a fish fuck you (Spain)

  // ========================================
  // === Compound Phrases: Additional =====
  // ========================================
  "te voy a partir la madre", // I'm going to break your mother (Mexico)
  "te voy a romper la madre", // I'm going to break your mother
  "te voy a chingar", // I'm going to fuck you up (Mexico)
  "te voy a verguear", // I'm going to beat you up (Central America)
  "te voy a dar en la madre", // I'm going to hit you hard (Mexico)
  "te voy a dar una verguiza", // I'm going to give you a beating (Mexico)
  "te voy a meter una hostia", // I'm going to slap you (Spain)
  "te parto la cara", // I'll break your face
  "te reviento", // I'll bust you open
  "te mato", // I'll kill you
  "ojalá te mueras", // I hope you die
  "ojalá te pudras", // I hope you rot
  "púdrete", // Rot
  "que te pudras", // May you rot
  "vete a morir", // Go die
  "mátate", // Kill yourself

  // ========================================
  // === More Internet Abbreviations ======
  // ========================================
  "lptm", // La puta madre
  "lctm", // La concha tu madre
  "cdtm", // Concha de tu madre
  "dlv", // De la verga (Mexico)
  "qlp", // Que le pasa / Culpa
  "wtf", // What the fuck (used in Spanish internet)
  "stfu", // Shut the fuck up (used in Spanish internet)
  "plm", // Por la madre
  "pqtp", // Porque te pario
  "htpm", // Hijo de tu puta madre
  "lpmqtp", // La puta madre que te parió
  "lrpm", // La re puta madre (Argentina)
  "lrctm", // La re concha de tu madre (Argentina)
  "lqlp", // La que lo parió
  "mcetm", // Me cago en tu madre
  "lptqtp", // La puta que te parió
  "lpqmp", // La puta que me parió
  "csmare", // Concha su madre (Peru)
  "ctmare", // Conchetumadre (Chile)
  "weon ql", // Weón culiao (Chile)
  "wn ql", // Weón culiao abbreviated (Chile)
  "qlo", // Culiao abbreviated variant
  "pndjo", // Pendejo abbreviated
  "vrga", // Verga abbreviated
  "hdsptm", // Hijo de su puta madre
  "lcdlch", // La concha de la chingada
  "csmr", // Concha su madre (Peru variant)
  "csmdre", // Concha su madre variant
  "tqp", // Te quiero putear
  "nmmn", // No mames / No manches
  "nmn", // No mames no

  // ========================================
  // === Venezuelan Profanity =============
  // ========================================
  "coño e la madre", // Cunt of the mother (Venezuela)
  "vergación", // Dick thing / amazing thing (Venezuela)
  "vergantín", // Big-dicked (Venezuela)
  "guevonada", // Idiotic thing (Venezuela)
  "güevonada", // Idiotic thing with diaeresis
  "jalabola", // Ball-puller / sycophant (Venezuela)
  "jalabolas", // Plural sycophant (Venezuela)
  "pajúa", // Fem idiot (Venezuela)
  "pajúos", // Plural idiot (Venezuela)
  "arrechísimo", // Super horny/angry (Venezuela)
  "arrechísima", // Fem super horny/angry
  "mmgvo", // Mamaguevo abbreviated (Venezuela)
  "maldito coño", // Damn cunt (Venezuela)
  "ladilla", // Crab louse / annoying person (Venezuela)
  "ladillado", // Annoyed (Venezuela)
  "ladillada", // Fem annoyed (Venezuela)
  "vergacielo", // Dick heaven / exclamation (Venezuela)
  "coroto", // Thing / can be pejorative (Venezuela)
  "catire de mierda", // Shitty blonde (Venezuela)
  "sifrino", // Snob (Venezuela)
  "sifrina", // Fem snob (Venezuela)
  "tierrúo", // Country bumpkin (Venezuela)
  "tierrúa", // Fem country bumpkin (Venezuela)
  "mamagüevada", // Dicksucker behavior (Venezuela)

  // ========================================
  // === Chilean Profanity ================
  // ========================================
  "conchetumare", // Your mother's cunt (Chile variant)
  "conchetumaire", // Euphemistic variant (Chile)
  "conchesumare", // His mother's cunt (Chile)
  "culiao de mierda", // Shitty ass-fucker (Chile)
  "wea de mierda", // Shitty thing (Chile)
  "weá", // Thing/bullshit with accent (Chile)
  "weveo", // Joking around / bullshit (Chile)
  "webeo", // Joking around / bullshit (Chile variant)
  "webear", // To joke/bother (Chile)
  "wevear", // To joke/bother (Chile variant)
  "sacoewea", // Variant of sacowea (Chile)
  "pelotuó", // Idiot (Chile)
  "aweona", // Fem fucking idiot (Chile)
  "aweoná", // Fem with accent (Chile)
  "conchatumare", // Variant (Chile)
  "la wea", // The thing / the bullshit (Chile)
  "esa wea", // That thing/bullshit (Chile)
  "qué wea", // What the hell (Chile)
  "puta la wea", // Fuck the thing (Chile)
  "weta", // Idiot (Chile variant)
  "fleta", // Fem faggot (Chile)
  "maraca", // Slut (Chile)
  "maracón", // Gay (Chile, derogatory)
  "penca", // Lame / shitty (Chile)
  "rajar", // To slash / to talk shit (Chile)
  "roto", // Broken / low-class (Chile)
  "rota", // Fem low-class (Chile)
  "flaite", // Low-class / trashy (Chile)
  "cuático", // Intense / crazy (Chile)
  "gueón", // Dude/idiot (Chile, alternate spelling)
  "gueona", // Fem (Chile)
  "hueá", // Thing/bullshit (Chile variant)
  "wevón", // Variant of weón (Chile)
  "wevona", // Fem variant (Chile)

  // ========================================
  // === Peruvian Profanity ===============
  // ========================================
  "conchasumadre", // Variant (Peru)
  "recontra mierda", // Super shit (Peru)
  "ayayay cojudo", // Oh idiot (Peru exclamation)
  "asu mare", // His mother / Oh wow (Peru, euphemism)
  "asumare", // Compound variant (Peru)
  "reconchesumadre", // Emphatic variant (Peru)
  "huevón de mierda", // Shitty idiot (Peru)
  "cojudo de mierda", // Shitty idiot (Peru)
  "carajo de mierda", // Shitty damn (Peru)
  "cholo de mierda", // Shitty indigenous person (Peru, racist)
  "chola de mierda", // Fem shitty indigenous person (Peru, racist)
  "serrano de mierda", // Shitty highland person (Peru, racist)
  "serrana de mierda", // Fem (Peru, racist)
  "cholo", // Indigenous/mixed race (Peru, can be derogatory)
  "chola", // Fem indigenous/mixed race (Peru, can be derogatory)
  "serrano", // Highland person (Peru, can be derogatory)
  "serrana", // Fem highland person
  "selvático", // Jungle person (Peru, derogatory)
  "selvática", // Fem jungle person (Peru, derogatory)
  "pituca", // Snob (Peru)
  "pituco", // Masc snob (Peru)
  "achorado", // Aggressive/brash (Peru)
  "achorada", // Fem aggressive (Peru)
  "maldita conchesumadre", // Damn cunt mother (Peru)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "hijuemichica", // Euphemistic hijueputa (Colombia)
  "gonorrea malparida", // Compound insult (Colombia)
  "pirobo hijueputa", // Compound insult (Colombia)
  "piroba malparida", // Compound insult (Colombia)
  "casposo", // Dandruff-y / lowlife (Colombia)
  "casposa", // Fem dandruff-y (Colombia)
  "zarrapastroso", // Ragged / unkempt (Colombia)
  "zarrapastrosa", // Fem ragged (Colombia)
  "desechable", // Disposable / homeless person (Colombia, very derogatory)
  "ñero hijueputa", // Low-class son of a bitch (Colombia)
  "gamín", // Street kid (Colombia, derogatory)
  "gamina", // Fem street kid (Colombia)
  "guache", // Crude / vulgar person (Colombia)
  "ñorzo", // Turd / piece of shit (Colombia)
  "mondongo", // Tripe / guts (Colombia, used pejoratively)
  "caremondá", // Dick face (Colombia variant)
  "carechimbo", // Masc variant of carechimba (Colombia)
  "caremierda", // Shit face (Colombia)
  "carehijueputa", // Son of a bitch face (Colombia)
  "caremalparido", // Badly-born face (Colombia)

  // ========================================
  // === More Cuban Profanity =============
  // ========================================
  "comepinga de mierda", // Shitty dick eater (Cuba)
  "comepingaje", // Dick eating behavior (Cuba)
  "comemierdería", // Shit eating behavior (Cuba)
  "singación", // Fucking session (Cuba)
  "singadero", // Fucking place (Cuba)
  "descarao", // Shameless (Cuba phonetic)
  "descará", // Fem shameless (Cuba)
  "mariconcería", // Faggotry (Cuba)
  "pingazo", // Dick hit (Cuba)
  "yuma de mierda", // Shitty foreigner (Cuba)
  "asere", // Dude (Cuba, can be derogatory)
  "monina", // Monkey / ugly (Cuba derogatory)
  "templa", // Fuck / sex (Cuba)
  "templeta", // Quick fuck (Cuba)
  "templú", // Horny person (Cuba)

  // ========================================
  // === More Puerto Rican Profanity ======
  // ========================================
  "bicho de mierda", // Shitty dick (Puerto Rico)
  "come bicho", // Dick eater (Puerto Rico)
  "puñetazo", // Punch / damn hit (Puerto Rico)
  "cabronísimo", // Super bastard (Puerto Rico)
  "cabrón hijo de puta", // Bastard son of a bitch (Puerto Rico)
  "mamao de mierda", // Shitty sucker (Puerto Rico)
  "tecato", // Drug addict / junkie (Puerto Rico)
  "tecata", // Fem drug addict (Puerto Rico)
  "tiraera", // Dis track / attack (Puerto Rico)
  "maldito bicho", // Damn dick (Puerto Rico)
  "canto e bicho", // Big dick / big bastard (Puerto Rico)
  "pichón", // Pigeon / fool (Puerto Rico)
  "pendejo e mierda", // Shitty asshole (Puerto Rico phonetic)

  // ========================================
  // === More Central American Profanity ==
  // ========================================
  "vergo", // A lot / big (Guatemala)
  "mula", // Mule / clumsy (Guatemala)
  "canche", // Blonde (Guatemala, can be derogatory)
  "cholero", // Low-class (Guatemala)
  "cholera", // Fem low-class (Guatemala)
  "pizote", // Coati / idiot (Costa Rica)
  "carepicha de mierda", // Shitty dickface (Costa Rica)
  "playo de mierda", // Shitty faggot (Honduras)
  "culero maje", // Asshole dude (Honduras)
  "cerote hijueputa", // Shitty son of a bitch (Guatemala/El Salvador)
  "gran cerote de mierda", // Big shitty turd (Guatemala)
  "bicho raro", // Weirdo (Central America)
  "picha floja", // Limp dick (Costa Rica)
  "picha corta", // Short dick (Costa Rica)
  "maje hijueputa", // Dude son of a bitch (Honduras/Nicaragua)
  "idiay", // What the hell (Costa Rica)
  "puñal", // Dagger / faggot (Honduras, derogatory)
  "culiolo", // Faggot (El Salvador, derogatory)
  "chero", // Friend / dude (El Salvador, can be derogatory)
  "bolado", // Thing / situation (El Salvador)
  "vergón hijueputa", // Big-dicked son of a bitch (Central America)
  "yuca", // Cassava / difficult / penis (Central America)
  "babosada", // Stupid thing / drool act (Central America)
  "babosadas", // Plural stupid things
  "tontería", // Stupidity
  "tonterías", // Plural stupidities
  "estupidez", // Stupidity
  "estupideces", // Plural stupidities
  "pajada", // Wanky thing / nonsense (Central America)

  // ========================================
  // === Equatorial Guinea Spanish ========
  // ========================================
  "bubi de mierda", // Ethnic slur (Equatorial Guinea)
  "fang de mierda", // Ethnic slur (Equatorial Guinea)
  "mangina", // Coward / effeminate (Eq. Guinea)
  "macho de mierda", // Shitty macho (Eq. Guinea)

  // ========================================
  // === Transphobic Slurs ================
  // ========================================
  "travelo", // Derogatory for trans person (Spain)
  "travesti", // Transvestite (can be derogatory)
  "travestido", // Transvestite (derogatory usage)
  "travestida", // Fem transvestite
  "transformista", // Drag queen (can be derogatory)
  "transexual de mierda", // Shitty transsexual
  "maricón travesti", // Faggot transvestite
  "tranny", // English loan, used in Spanish
  "hombre con falda", // Man in a skirt (derogatory)

  // ========================================
  // === More Racial Slurs ================
  // ========================================
  "indio", // Indian / indigenous (often derogatory in LatAm)
  "india", // Fem Indian/indigenous (derogatory)
  "indio de mierda", // Shitty Indian (racist)
  "india de mierda", // Fem shitty Indian (racist)
  "indio pata rajada", // Indian with cracked feet (very racist, Colombia)
  "negro de mierda", // Shitty Black person (racist)
  "negra de mierda", // Fem shitty Black person (racist)
  "negro del orto", // Black from the ass (Argentina, very racist)
  "negra del orto", // Fem variant (Argentina, very racist)
  "negrazo", // Augmentative Black (racist)
  "negraco", // Ugly Black (very racist)
  "negro sucio", // Dirty Black (racist)
  "negra sucia", // Fem dirty Black (racist)
  "chino de mierda", // Shitty Chinese (racist, used for any Asian)
  "china de mierda", // Fem shitty Chinese (racist)
  "chino cochino", // Dirty Chinese (racist)
  "gitano de mierda", // Shitty gypsy (racist)
  "gitana de mierda", // Fem shitty gypsy (racist)
  "moro de mierda", // Shitty Moor (racist, Spain)
  "mora de mierda", // Fem shitty Moor (racist)
  "sudaca de mierda", // Shitty South American (racist, Spain)
  "gallego de mierda", // Shitty Galician (used in Argentina for Spanish people)
  "gringo de mierda", // Shitty gringo (LatAm)
  "gabacho de mierda", // Shitty French person (Spain)
  "pocho", // Americanized Mexican (Mexico, derogatory)
  "pocha", // Fem Americanized Mexican
  "charnego", // Derogatory for non-Catalan in Catalonia
  "charnega", // Fem charnego
  "morenito", // Diminutive dark-skinned (condescending)
  "morenita", // Fem diminutive dark-skinned
  "zambo", // Mixed Black/indigenous (can be derogatory)
  "zamba", // Fem zambo
  "cateto", // Hick / bumpkin (Spain)
  "cateta", // Fem hick (Spain)
  "paleto", // Hick / yokel (Spain)
  "paleta", // Fem hick (Spain)

  // ========================================
  // === Ableist Slurs ====================
  // ========================================
  "mogólico", // Variant of mongólico (very offensive)
  "mogólica", // Fem variant
  "down", // Down syndrome used as insult
  "síndrome de down", // Down syndrome used as insult
  "tullido", // Cripple (offensive)
  "tullida", // Fem cripple
  "lisiado", // Crippled (offensive)
  "lisiada", // Fem crippled
  "deforme", // Deformed (as insult)
  "anormal", // Abnormal (used as insult)
  "demente", // Demented (as insult)
  "loco de remate", // Completely crazy (offensive)
  "loca de remate", // Fem completely crazy
  "enfermo mental", // Mentally ill (as insult)
  "enferma mental", // Fem mentally ill
  "psicópata", // Psychopath (as insult)
  "esquizofrénico", // Schizophrenic (as insult)
  "esquizofrénica", // Fem schizophrenic
  "autista", // Autistic (used as insult in Spanish internet)
  "espástico", // Spastic (offensive)
  "espástica", // Fem spastic

  // ========================================
  // === More Sexual Terms ================
  // ========================================
  "misionero", // Missionary position
  "perrito", // Doggy style
  "cuatro", // On all fours (sexual)
  "a cuatro patas", // On all fours
  "de perrito", // Doggy style
  "beso negro", // Rimjob
  "lluvia dorada", // Golden shower
  "fisting", // Fisting (English loan)
  "doble penetración", // Double penetration
  "mamada profunda", // Deep throat
  "garganta profunda", // Deep throat
  "sexo duro", // Hard sex
  "sexo salvaje", // Wild sex
  "paja rusa", // Russian wank / titfuck
  "cubana", // Titfuck (Spain term)
  "francés", // French / oral sex (Spain slang)
  "griego", // Greek / anal sex (Spain slang)
  "trolero", // Related to trolling/whoring
  "garchar", // To fuck (Argentina variant spelling)
  "pisar", // To step on / to fuck (LatAm)
  "clavar", // To nail / to fuck
  "clavarse", // To nail oneself / to fuck
  "empotrar", // To ram / to fuck hard (Spain)
  "empotramiento", // Hard fuck (Spain)
  "empotrador", // Hard fucker (Spain)
  "empotradora", // Fem hard fucker (Spain)
  "dar duro", // To give it hard / to fuck hard
  "darle duro", // To give it to them hard
  "romper", // To break / to fuck hard
  "romperla", // To break it / to fuck hard
  "cepillar", // To brush / to fuck (Mexico/LatAm)
  "cepillarse", // To fuck (reflexive)
  "montar", // To mount / to ride / to fuck
  "montarse", // To mount oneself
  "cabalgar", // To ride / to fuck (on top)
  "acabar", // To finish / to cum
  "acabarse", // To finish / to cum
  "lechada", // Cum shot
  "lechazo", // Cum blast
  "lefazo", // Cum blast (Spain slang)
  "lefa", // Cum (Spain slang)
  "fluidos", // Fluids (sexual context)
  "lubricante", // Lubricant
  "consolarse", // To console oneself / to use a dildo
  "chupón", // Sucker / hickey
  "chupetón", // Hickey
  "morbo", // Morbid desire / kink (Spain)
  "morboso", // Kinky / perverted
  "morbosa", // Fem kinky
  "calenturiento", // Horny person
  "calenturienta", // Fem horny person
  "salido", // Horny (Spain)
  "salida", // Fem horny (Spain)
  "pajote", // Big wank
  "manuela", // Wank (slang name)
  "hacerse una manuela", // To wank
  "cascársela", // To wank (Spain)
  "pelársela", // To wank (Mexico)
  "jalársela", // To wank (Mexico)
  "hacérsela", // To do it to oneself
  "sobársela", // To rub it (Mexico)
  "tocarse", // To touch oneself
  "dedear", // To finger
  "dedearse", // To finger oneself
  "meter mano", // To feel up / to grope
  "manosear", // To grope
  "manoseo", // Groping
  "faje", // Makeout / groping session (Mexico)
  "fajarse", // To make out / grope (Mexico)
  "agarrón", // Groping session
  "arrimón", // Grinding against someone
  "refregarse", // To rub against someone
  "sexting", // Sexting (English loan, used in Spanish)
  "nudes", // Nudes (English loan, used in Spanish)
  "pack", // Nude photo set (Mexico/LatAm slang)
  "mandar pack", // To send nudes (Mexico)
  "putipobre", // Cheap whore
  "kinesiologa", // Prostitute (Argentina euphemism)
  "scort", // Escort (misspelling used in Spanish)
  "escort", // Escort
  "lumi", // Prostitute (Argentina)
  "traba", // Trans sex worker (Argentina, very derogatory)
  "tussi", // Girl / prostitute (Spain slang)

  // ========================================
  // === More Profane Exclamations ========
  // ========================================
  "su puta madre", // His/her whore mother
  "tu puta madre", // Your whore mother
  "la puta madre que los parió", // The whore mother that bore them
  "la gran puta madre", // The great whore mother
  "la remil puta", // The thousand-times whore (Argentina)
  "la remil puta madre", // The thousand-times whore mother (Argentina)
  "la re mil puta madre", // Spaced variant (Argentina)
  "requeteputamadre", // Ultra motherfucker
  "la reputa madre que te parió", // Ultra whore mother who bore you
  "por la cresta", // By the crest / damn (Chile)
  "cresta", // Crest / damn (Chile)
  "la crestá", // The damn (Chile)
  "mierda pura", // Pure shit
  "maldita mierda", // Damn shit
  "concha de la lora", // Parrot's cunt (Argentina exclamation)
  "qué carajo", // What the hell
  "qué mierda", // What the shit
  "qué coño", // What the cunt (Spain)
  "qué cojones", // What the balls (Spain)
  "qué putas", // What the fuck (Central America)
  "qué verga", // What the dick (Mexico)
  "qué pedo", // What the fart / what's up (Mexico)
  "ni verga", // Not a dick / nothing (Mexico)
  "ni mierda", // Not shit / nothing
  "un coño", // A cunt / not a thing (Spain)
  "una polla", // A dick / not a thing (Spain)
  "mis cojones", // My balls / no way (Spain)
  "y una mierda", // And a shit / no way
  "y un coño", // And a cunt / no way (Spain)
  "tócame los huevos", // Touch my balls (Spain, expression of annoyance)
  "me suda la polla", // My dick sweats / I don't care (Spain)
  "me la suda", // I don't care (Spain, vulgar)
  "me la pela", // It peels me / I don't care (Spain)
  "me la refanfinfla", // I don't care at all (Spain)
  "me importa un carajo", // I don't give a damn
  "me importa una mierda", // I don't give a shit
  "me importa un huevo", // I don't give an egg/ball
  "me importa un coño", // I don't give a cunt (Spain)
  "no me sale de los cojones", // It doesn't come from my balls / I don't want to (Spain)
  "no me sale de los huevos", // Variant with huevos
  "porque me sale de los cojones", // Because it comes from my balls / because I want to (Spain)
  "porque me da la gana", // Because I feel like it (milder)

  // ========================================
  // === Texting / Chat Evasions ==========
  // ========================================
  "mierdx", // Mierda - x ending (gender neutral evasion)
  "putx", // Puta/puto - x ending
  "pendejx", // Pendejo - x ending
  "culiadx", // Culiao - x ending
  "cabronx", // Cabrón - x ending
  "mrd", // Mierda abbreviated
  "vrg", // Verga abbreviated
  "cdso", // Culiazo (Chile)
  "hijoepta", // Hijo e puta abbreviated
  "hjpt", // Hijueputa abbreviated
  "pndj", // Pendejo abbreviated
  "cbrn", // Cabrón abbreviated
  "mrkon", // Maricón abbreviated
  "mkn", // Maricón abbreviated
  "prro", // Perro abbreviated

  // ========================================
  // === More Compound Regional Insults ===
  // ========================================
  "cara de nalga", // Buttock face
  "cara de sapo", // Toad face
  "cara de imbécil", // Imbecile face
  "cara de pendejo", // Idiot face
  "cara de estúpido", // Stupid face
  "cara de idiota", // Idiot face
  "cara de huevo", // Egg face / ball face
  "nariz de polla", // Dick nose
  "come pollas", // Dick eater
  "come vergas", // Dick eater (LatAm)
  "come pingas", // Dick eater (Caribbean)
  "tragapollas", // Dick swallower (Spain)
  "tragapolla", // Dick swallower singular (Spain)
  "traga semen", // Cum swallower
  "tragamocos", // Snot swallower
  "roba gallinas", // Chicken thief (derogatory)
  "muerto de hambre", // Starving to death / lowlife
  "muerta de hambre", // Fem starving / lowlife
  "nini", // Neither studies nor works (Spain/Mexico)
  "arrastrado", // Dragged / pathetic (LatAm)
  "arrastrada", // Fem pathetic
  "perro sarnoso", // Mangy dog
  "gata barata", // Cheap cat / whore (Argentina)
  "yegua", // Mare / bitch (Argentina)
  "chancha", // Sow / pig (Argentina)
  "chancho", // Pig (Argentina)
  "gordo de mierda", // Fat piece of shit
  "gorda de mierda", // Fem fat piece of shit
  "feo de mierda", // Ugly piece of shit
  "fea de mierda", // Fem ugly piece of shit
  "viejo de mierda", // Old piece of shit
  "vieja de mierda", // Old hag piece of shit
  "vieja chota", // Old broken-down woman (Argentina)
  "viejo choto", // Old broken-down man (Argentina)
  "choto", // Broken / shitty (Argentina)
  "chota", // Broken / shitty / dick (Argentina)
  "guacho", // Orphan / bastard (Argentina)
  "guacha", // Fem orphan / bastard (Argentina)
  "negro villero", // Black slum person (Argentina, very racist)
  "villero", // Slum person (Argentina, derogatory)
  "villera", // Fem slum person (Argentina)
  "cabeza de tacho", // Bucket head / lowlife (Argentina)
  "cabeza", // Head / lowlife (Argentina)
  "groncho", // Low-class (Argentina)
  "groncha", // Fem low-class (Argentina)
  "mersa", // Tacky / low-class (Argentina)
  "croto", // Bum / hobo (Argentina)
  "crota", // Fem bum (Argentina)
  "garca", // Scammer / cheater (Argentina)
  "vago de mierda", // Shitty bum
  "vaga de mierda", // Fem shitty bum
  "ñoqui", // Gnocchi / do-nothing employee (Argentina)
  "come gato", // Cat eater (racist, Argentina for Asian)
  "panchito", // Derogatory for Bolivian/Peruvian (Argentina)
  "panchita", // Fem derogatory
  "paragua", // Derogatory for Paraguayan (Argentina)
  "bolita", // Derogatory for Bolivian (Argentina)
  "peruca", // Derogatory for Peruvian (Argentina)
  "brasuca", // Derogatory for Brazilian (Argentina)
  "planero", // Welfare recipient (Argentina, derogatory)
  "planera", // Fem welfare recipient
  "kumpa", // Corrupt supporter (Argentina political slang)
  "kukas", // Derogatory for political supporters (Argentina)

  // ========================================
  // === Spanish Spain Additional =========
  // ========================================
  "hijoputa", // Son of a bitch (Spain contracted)
  "hijoputas", // Plural sons of bitches
  "giliflautas", // Idiot (Spain, variant of gilipollas)
  "imbécil integral", // Total imbecile
  "tonto de los cojones", // Ball-level idiot (Spain)
  "tonta de los cojones", // Fem ball-level idiot (Spain)
  "gilipollas integral", // Total asshole
  "subnormal perdido", // Complete retard (very offensive)
  "puto amo", // Fucking boss (positive/negative)
  "mierda pinchada en un palo", // Shit stuck on a stick (Spain)
  "anda y que te follen", // Go get fucked (Spain)
  "anda a cagar", // Go take a shit (Spain)
  "corta el rollo", // Cut the crap (Spain)
  "borde", // Rude / sharp (Spain)
  "capullo de mierda", // Shitty foreskin/asshole (Spain)
  "gilipollas de mierda", // Shitty asshole (Spain)
  "payaso de mierda", // Shitty clown (Spain)
  "mamoncete", // Little jerk (Spain)
  "lechoso", // Cum-covered / lucky (Spain)
  "empanao", // Clueless / out of it (Spain)
  "zorrita", // Little slut (Spain)
  "petardo", // Firecracker / ugly person (Spain)
  "petarda", // Fem firecracker / ugly (Spain)
  "hijaputa", // Daughter of a bitch (Spain contracted)
  "hijaputas", // Plural daughters of bitches
  "lechero de mierda", // Shitty lucky/annoying person (Spain)
  "bocachancla", // Loose lips / loudmouth (Spain)
  "bocazas", // Big mouth (Spain)

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "pedazo de cabrón", // Piece of bastard
  "pedazo de estúpido", // Piece of stupid
  "pedazo de escoria", // Piece of scum
  "pedazo de inútil", // Piece of useless
  "tremendo idiota", // Tremendous idiot
  "tremendo imbécil", // Tremendous imbecile
  "tremendo hijo de puta", // Tremendous son of a bitch
  "menudo cabrón", // What a bastard
  "menudo gilipollas", // What an asshole
  "menuda mierda", // What a shit
  "menudo imbécil", // What an imbecile
  "puto asco", // Fucking disgust
  "puto cabrón", // Fucking bastard
  "puta basura", // Fucking trash
  "puto idiota", // Fucking idiot
  "puta perra", // Fucking bitch
  "puto pendejo", // Fucking asshole
  "puto estúpido", // Fucking stupid
  "maldito pendejo", // Damn asshole
  "maldita puta", // Damn whore
  "maldito imbécil", // Damn imbecile
  "maldito idiota", // Damn idiot
  "maldita zorra", // Damn fox/slut
  "maldito cerdo", // Damn pig
  "maldita escoria", // Damn scum
  "pinche puto", // Fucking faggot (Mexico)
  "pinche perro", // Fucking dog (Mexico)
  "pinche rata", // Fucking rat (Mexico)
  "pinche escoria", // Fucking scum (Mexico)
  "jodido pendejo", // Fucked-up asshole
  "jodido idiota", // Fucked-up idiot
  "jodido cabrón", // Fucked-up bastard
  "jodida puta", // Fucked-up whore
  "condenado idiota", // Condemned idiot
  "condenada puta", // Condemned whore
  "hijo de puta asqueroso", // Disgusting son of a bitch
  "hija de la gran puta", // Daughter of the great whore
  "cara de polla", // Dick face
  "cara de rata", // Rat face
  "cara de perro", // Dog face
  "cabeza de polla", // Dick head
  "cabeza de chorlito", // Plover head (scatterbrain)
  "cabeza de alcornoque", // Cork oak head (blockhead)
  "cabeza hueca", // Hollow head
  "cerebro de mosquito", // Mosquito brain
  "te voy a matar", // I'm going to kill you
  "te voy a partir la cara", // I'll split your face
  "te voy a romper la cara", // I'll break your face
  "te voy a reventar", // I'll burst you
  "cierra la boca", // Close your mouth
  "cállate la boca", // Shut your mouth
  "cierra el pico", // Close your beak (shut up)
  "cierra el hocico", // Close your snout
  "a mamar", // Go suck (vulgar dismissal)
  "chúpame la polla", // Suck my dick (Spain)
  "lámeme el culo", // Lick my ass
  "cómeme los huevos", // Eat my balls (Spain)
  "bésame el culo", // Kiss my ass
  "me importa un cojón", // I don't give a ball
  "me importa tres cojones", // I give three balls (I don't care)

  // ========================================
  // === Mexican Spanish ===================
  // ========================================
  "chinga tu puta madre", // Fuck your whore mother (Mexico)
  "chingoncísimo", // Super badass (Mexico)
  "a la chingada", // To the fucked (Mexico, get lost)
  "no me chingues", // Don't fuck with me (Mexico)
  "ya chingaste", // You already fucked up (Mexico)
  "me vale madres", // I don't give a damn (Mexico)
  "vale madres", // Worth mothers (Mexico)
  "mamalón", // Arrogant (Mexico)
  "corriente", // Common / vulgar (Mexico)
  "gata", // Cat / maid (Mexico derog.)
  "chamaco pendejo", // Stupid kid (Mexico)
  "a toda verga", // At full dick (Mexico, awesome)
  "panocha", // Pussy (Mexico)
  "ojetes", // Assholes (Mexico)
  "cabroncete", // Little bastard (Mexico)
  "cabroncísimo", // Super bastard (Mexico)
  "de huevos", // Of balls (Mexico, awesome)
  "piruja", // Whore (Mexico)
  "pirujo", // Male whore (Mexico)
  "golfo", // Bum (Mexico)
  "lépero", // Vulgar person (Mexico)
  "lépera", // Vulgar person (f.) (Mexico)
  "méndigo", // Beggar / bastard (Mexico)
  "méndiga", // Beggar (f.) (Mexico)
  "pelado", // Broke / vulgar (Mexico)
  "pelada", // Broke (f.) (Mexico)
  "prieto", // Dark-skinned (Mexico, can be derog.)
  "prieta", // Dark-skinned (f.) (Mexico)

  // ========================================
  // === Argentine Spanish =================
  // ========================================
  "garchada", // Fuck (noun, Argentina)
  "garchó", // Fucked (Argentina)
  "ortear", // To ass-fuck (Argentina)
  "orto", // Ass (Argentina)
  "conchuda", // Big-cunted (Argentina)
  "concha de tu madre", // Your mother's pussy (Argentina)
  "la concha del mono", // The monkey's pussy (Argentina)
  "la re puta madre", // The super whore mother (Argentina)
  "andá a cagar", // Go shit (Argentina)
  "chupámela", // Suck it (Argentina)
  "chupame un huevo", // Suck my ball (Argentina)
  "no me rompas las pelotas", // Don't break my balls (Argentina)
  "no me rompás las bolas", // Don't break my balls (Argentina)
  "rompehuevos", // Ball breaker (Argentina)
  "cara de orto", // Ass face (Argentina)
  "careta", // Mask / fake (Argentina)
  "atorranta", // Bum (f.) (Argentina)
  "afanar", // To steal (Argentina)
  "afanancio", // Thief (Argentina)
  "bagayo", // Ugly thing/person (Argentina)
  "bagarto", // Ugly person (Argentina)
  "bardear", // To disrespect (Argentina)
  "cabecita", // Little head (derog. for poor, Argentina)
  "grasa", // Grease (lowlife, Argentina)
  "negrada", // Black behavior (Argentina racist)
  "villereada", // Slum behavior (Argentina derog.)
  "puteada", // Cursing (Argentina)
  "puterio", // Whorehouse / drama (Argentina)

  // ========================================
  // === Colombian Spanish =================
  // ========================================
  "gonorriento", // Gonorrhea-ridden (Colombia)
  "maricona", // Faggot (f.) (Colombia)
  "güevona", // Lazy (f.) (Colombia)
  "sapa", // Snitch (f.) (Colombia)
  "cachona", // Cuckold (f.) (Colombia)
  "sardina", // Sardine / young girl (Colombia derog.)
  "lampara", // Lamp / show-off (Colombia)
  "montañero", // Hillbilly (Colombia)
  "montañera", // Hillbilly (f.) (Colombia)
  "roscón", // Ring cake / fag (Colombia)
  "solapado", // Sneaky (Colombia)
  "solapada", // Sneaky (f.) (Colombia)

  // ========================================
  // === Venezuelan Spanish ================
  // ========================================
  "coño e madre", // Cunt of mother (Venezuela)
  "cachicamo", // Armadillo / cuckold (Venezuela)
  "vergatario", // Dick-like (Venezuela)
  "arrecha", // Horny / angry (f.) (Venezuela)
  "mardito", // Damned (Venezuela)
  "mardita", // Damned (f.) (Venezuela)
  "cuaima", // Bushmaster snake / jealous woman (Venezuela)
  "chamo pendejo", // Stupid dude (Venezuela)
  "chama pendeja", // Stupid girl (Venezuela)

  // ========================================
  // === Chilean Spanish ===================
  // ========================================
  "weada", // Thing / stupidity (Chile)
  "culiá", // Ass-fucked abbrev. (Chile)
  "pichula", // Dick (Chile)
  "callampa", // Mushroom / dick (Chile)
  "rajado", // Split / cheap (Chile)
  "chuchetumadre", // Variant of conchetumadre (Chile)
  "chuchada", // Profanity (Chile)
  "flaita", // Trashy (f.) (Chile)
  "rotería", // Lowlife behavior (Chile)
  "pelusón", // Cheap / envious (Chile)
  "pelusona", // Cheap (f.) (Chile)
  "patudo", // Big-footed / shameless (Chile)
  "patuda", // Shameless (f.) (Chile)
  "perkinazo", // Boot-licking (Chile)

  // ========================================
  // === Peruvian Spanish ==================
  // ========================================
  "cojudez", // Stupidity (Peru)
  "chuchasumadre", // His mother's pussy (Peru)
  "caracho", // Damn variant (Peru)
  "ayayay", // Expression of frustration (Peru)
  "zamboa", // Mixed (f.) (Peru)
  "huachafo", // Tacky (Peru)
  "huachafa", // Tacky (f.) (Peru)
  "lorna", // Fool (Peru)

  // ========================================
  // === Cuban Spanish =====================
  // ========================================
  "singada", // Fucked (f.) (Cuba)
  "guajiro", // Peasant (Cuba, can be derog.)
  "guajira", // Peasant (f.) (Cuba)
  "jinetero", // Hustler (Cuba)
  "jinetera", // Hustler (f.) / prostitute (Cuba)
  "tremendo", // Tremendous (Cuba intensifier)
  "tremendísimo", // Super tremendous (Cuba)
  "caballo", // Horse / dude (Cuba)
  "yuma", // Foreigner (Cuba)

  // ========================================
  // === Dominican Spanish =================
  // ========================================
  "tiguere", // Tiger / hustler (Dominican)
  "tiguerito", // Little tiger (Dominican)
  "maldito sea", // Damn it (Dominican)
  "diache", // Devil / damn (Dominican)
  "diablo", // Devil (Dominican exclamation)
  "tetú", // Big-titted (Dominican)
  "tatatú", // Stupid (Dominican)
  "caripelao", // Shameless face (Dominican)
  "pariguaya", // Loser (f.) (Dominican)
  "bruto", // Brute / stupid (Dominican)
  "bruta", // Brute (f.) (Dominican)
  "palomo", // Pigeon / cuckold (Dominican)
  "cafre", // Savage (Dominican)

  // ========================================
  // === Puerto Rican Spanish ==============
  // ========================================
  "bicha", // Bug / bitch (Puerto Rico)
  "mamabicho", // Dick sucker compound (Puerto Rico)
  "lambeculos", // Ass licker (Puerto Rico)
  "lambeojo", // Eye licker / bootlicker (Puerto Rico)
  "bochinchero", // Gossiper (Puerto Rico)
  "bochinchera", // Gossiper (f.) (Puerto Rico)
  "bellaco", // Horny / rogue (Puerto Rico)
  "bellaca", // Horny (f.) (Puerto Rico)
  "chamaquito pendejo", // Stupid little kid (Puerto Rico)
  "jodío", // Fucked (Puerto Rico)
  "jodía", // Fucked (f.) (Puerto Rico)
  "lechón", // Piglet / pervert (Puerto Rico)
  "gandúl", // Lazy bum (Puerto Rico)
  "gandúla", // Lazy bum (f.) (Puerto Rico)

  // ========================================
  // === Ecuadorian Spanish ================
  // ========================================
  "montubio", // Coastal peasant (Ecuador, can be derog.)
  "montubia", // Coastal peasant (f.) (Ecuador)
  "manazo", // Manabí person (Ecuador, can be derog.)
  "pelucón", // Big-haired / rich (Ecuador derog.)
  "pelucona", // Rich (f.) (Ecuador)

  // ========================================
  // === Bolivian Spanish ==================
  // ========================================
  "caray", // Damn (Bolivia)
  "caramba", // Damn (Bolivia)
  "colla", // Highlander (Bolivia, can be derog.)
  "camba", // Lowlander (Bolivia, can be derog.)
  "llokallada", // Bratty behavior (Bolivia)

  // ========================================
  // === Uruguayan Spanish =================
  // ========================================
  "la puta madre", // The whore mother (Uruguay)
  "la reconcha de tu madre", // Your mother's re-pussy (Uruguay)
  "la reputa madre", // The re-whore mother (Uruguay)
  "ortiba", // Snitch (Uruguay, vesre)
  "botón", // Button / snitch (Uruguay)
  "chorro", // Thief (Uruguay)
  "chorra", // Thief (f.) (Uruguay)
  "plancha", // Iron / lowlife (Uruguay)
  "planchón", // Big lowlife (Uruguay)

  // ========================================
  // === Paraguayan Spanish ================
  // ========================================
  "kurái", // Shit (Paraguay, Guaraní)
  "ndéra kué", // Damn that (Paraguay)
  "avare", // Miser (Paraguay, from Guaraní)
  "mitá'i kure", // Pig kid (Paraguay)
  "kure", // Pig (Paraguay, Guaraní)
  "tayy", // Stupid variant (Paraguay)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "cogiéndola", // Fucking her
  "follada", // Fuck (noun, Spain)
  "follón", // Mess / big fuck (Spain)
  "tirada", // Fuck (noun, Argentina)
  "culeada", // Ass-fuck (noun)
  "chupada", // Blowjob
  "chupar la polla", // To suck dick
  "chupar la verga", // To suck dick (Latin Am.)
  "mamar la polla", // To suck dick
  "mamar la verga", // To suck dick (Latin Am.)
  "penetración", // Penetration
  "penetración anal", // Anal penetration
  "masturbación", // Masturbation
  "eyaculación", // Ejaculation
  "esperma", // Sperm
  "prostitución", // Prostitution
  "meretriz", // Prostitute (formal)
  "mujerzuela", // Loose woman
  "calentón", // Horny person (m.)
  "calentona", // Horny person (f.)
  "calentorro", // Very horny (m.)
  "calentorra", // Very horny (f.)
  "pederasta", // Pederast
  "acosador", // Harasser
  "acosadora", // Harasser (f.)
  "voyerista", // Voyeur
  "exhibicionista", // Exhibitionist
  "fetichista", // Fetishist
  "sadomasoquista", // Sadomasochist
  "fornicar", // To fornicate

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "cagado", // Shat / scared
  "cagarse", // To shit oneself
  "cagadera", // Diarrhea
  "cagazo", // Big shit / big scare
  "diarrea", // Diarrhea
  "pedos", // Farts
  "pedorro", // Farty
  "pedorra", // Farty (f.)
  "pedorrera", // Farting spree
  "echarse un pedo", // To let a fart
  "meada", // Piss (noun)
  "meado", // Pissed on
  "meón", // Pisser (m.)
  "meona", // Pisser (f.)
  "orina", // Urine
  "orinar", // To urinate
  "vómito", // Vomit
  "eructo", // Burp
  "eructar", // To burp

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "borrico", // Donkey (stupid)
  "borrica", // Donkey (f.) (stupid)
  "burro", // Donkey (stupid)
  "burra", // Donkey (f.) (stupid)
  "calabaza", // Pumpkin (stupid)
  "cenutrio", // Dimwit (Spain)
  "ceporro", // Blockhead (Spain)
  "ignorante", // Ignorant
  "papanatas", // Gawker (fool)
  "pasmarote", // Dazed person
  "simple", // Simple (stupid)
  "simplón", // Simpleton
  "simplona", // Simpleton (f.)
  "tarugo", // Blockhead
  "taruga", // Blockhead (f.)
  "tontorrón", // Big stupid
  "tontorrona", // Big stupid (f.)
  "tontolaba", // Big silly
  "tontolculo", // Silly-assed
  "tonta del culo", // Ass-stupid (f.) (Spain)
  "tonto del bote", // Can-stupid (Spain)
  "zoquete", // Blockhead
  "zoqueta", // Blockhead (f.)
  "alcornoque", // Cork oak (blockhead)
  "adoquín", // Paving stone (blockhead)
  "badulaque", // Fool
  "besugo", // Sea bream (idiot)
  "bodoque", // Lump (idiot, Mexico)
  "bobalicón", // Big fool
  "bobalicona", // Big fool (f.)
  "berzas", // Cabbages (stupid)
  "cazurro", // Dumb (Spain)
  "cazurra", // Dumb (f.) (Spain)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "feo", // Ugly (m.)
  "fea", // Ugly (f.)
  "feísimo", // Very ugly (m.)
  "feísima", // Very ugly (f.)
  "mamarracha", // Clown (f.) / ugly
  "callo", // Callus (ugly, Spain)
  "cardo", // Thistle (ugly, Spain)
  "bagre", // Catfish (ugly, Latin Am.)
  "gordo", // Fat (m.)
  "gorda", // Fat (f.)
  "gordaco", // Very fat (m.)
  "gordaca", // Very fat (f.)
  "gordinflas", // Fatty
  "ballena", // Whale
  "vaca", // Cow
  "foca", // Seal (fat person)
  "elefante", // Elephant (fat)
  "hipopótamo", // Hippopotamus (fat)
  "barril", // Barrel (fat)
  "flaco", // Skinny (can be derog.)
  "flaca", // Skinny (f.)
  "flacucho", // Scrawny
  "flacucha", // Scrawny (f.)
  "esqueleto", // Skeleton
  "tabla", // Board (flat-chested)
  "enano", // Dwarf (derog.)
  "enana", // Dwarf (f.)
  "cuatro ojos", // Four eyes

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "aprovechado", // Freeloader (m.)
  "aprovechada", // Freeloader (f.)
  "bocón", // Big mouth
  "bocona", // Big mouth (f.)
  "bravucón", // Bully
  "bravucona", // Bully (f.)
  "caraduras", // Shameless
  "chismoso", // Gossip (m.)
  "chismosa", // Gossip (f.)
  "cínico", // Cynic (shameless)
  "cínica", // Cynic (f.)
  "embustero", // Liar
  "embustera", // Liar (f.)
  "estafador", // Swindler
  "estafadora", // Swindler (f.)
  "fanfarrón", // Show-off
  "fanfarrona", // Show-off (f.)
  "flojo", // Lazy
  "floja", // Lazy (f.)
  "gorrón", // Freeloader
  "gorrona", // Freeloader (f.)
  "hipócrita", // Hypocrite
  "holgazán", // Lazybones
  "holgazana", // Lazybones (f.)
  "haragán", // Idler
  "haragana", // Idler (f.)
  "ladrón", // Thief
  "ladrona", // Thief (f.)
  "lamesuelas", // Sole licker
  "mentiroso", // Liar
  "mentirosa", // Liar (f.)
  "metiche", // Nosy (Mexico)
  "metomentodo", // Meddler
  "parásita", // Parasite (f.)
  "pelota", // Ball (bootlicker)
  "pelotillero", // Ball-polisher (bootlicker)
  "pelotillera", // Ball-polisher (f.)
  "quejica", // Whiner
  "rastrero", // Groveling
  "rastrera", // Groveling (f.)
  "sabelotodo", // Know-it-all
  "soplón", // Snitch (m.)
  "soplona", // Snitch (f.)
  "tacaño", // Stingy
  "tacaña", // Stingy (f.)
  "tramposo", // Cheater
  "tramposa", // Cheater (f.)
  "vago", // Lazy
  "vaga", // Lazy (f.)
  "vividor", // Freeloader
  "vividora", // Freeloader (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "mora", // Moor (f.)
  "morazo", // Big Moor (Spain)
  "mariconcete", // Little faggot
  "marica de mierda", // Shitty fag
  "marimandona", // Bossy butch
  "deficiente", // Deficient (ableist)
  "deficiente mental", // Mentally deficient
  "inadaptado", // Maladjusted
  "inadaptada", // Maladjusted (f.)
  "antisocial", // Antisocial
  "basura humana", // Human trash

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "m*erda", // Mierda with *
  "p*ta", // Puta with *
  "h1jo de puta", // Hijo de puta with 1
  "hij0 de puta", // Hijo de puta with 0
  "c4brón", // Cabrón with 4
  "c*brón", // Cabrón with *
  "p*ndejo", // Pendejo with *
  "g1lipollas", // Gilipollas with 1
  "g*lipollas", // Gilipollas with *
  "c*ño", // Coño with *
  "p*lla", // Polla with *
  "j*der", // Joder with *
  "h i j o d e p u t a", // Hijo de puta spaced
  "c a b r ó n", // Cabrón spaced
  "p e n d e j o", // Pendejo spaced
  "g i l i p o l l a s", // Gilipollas spaced
  "c h i n g a", // Chinga spaced
  "pu.ta", // Puta with dot
  "pu-ta", // Puta with dash
  "mi.erda", // Mierda with dot
  "jo.der", // Joder with dot

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "noob", // Noob
  "nub", // Noob variant
  "campero", // Camper (gaming)
  "tryhard", // Tryhard
  "toxic", // Toxic (gaming)
  "manco", // One-handed / bad player
  "manca", // Bad player (f.)
  "parguela", // Fool (Spain gaming)
  "asco de persona", // Disgusting person
  "asco de vida", // Disgusting life
  "ojalá te atropelle un coche", // I hope a car runs you over
  "matate", // Kill yourself
  "suicídate", // Commit suicide
  "kys", // Kill yourself (gaming)
  "gg ez", // Good game easy (taunt)
  "lol noob", // Laugh out loud noob

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- joder (to fuck) ---
  "jodo", // I fuck
  "jodes", // You fuck
  "jode", // He/she fucks
  "jodemos", // We fuck
  "joden", // They fuck
  "jodí", // I fucked
  "jodió", // He/she fucked
  "jodiendo", // Fucking
  // --- follar (to fuck, Spain) ---
  "follo", // I fuck
  "follas", // You fuck
  "folla", // He/she fucks
  "follamos", // We fuck
  "follan", // They fuck
  "follé", // I fucked
  "folló", // He/she fucked
  "follado", // Fucked
  "follando", // Fucking
  // --- cagar (to shit) ---
  "cago", // I shit
  "cagas", // You shit
  "caga", // He/she shits
  "cagamos", // We shit
  "cagan", // They shit
  "cagué", // I shat
  "cagó", // He/she shat
  "cagando", // Shitting
  // --- mear (to piss) ---
  "meas", // You piss
  "mea", // He/she pisses
  "meamos", // We piss
  "meé", // I pissed
  "meó", // He/she pissed
  "meando", // Pissing
  // --- chingar (to fuck, Mexico) ---
  "chingo", // I fuck (Mexico)
  "chingas", // You fuck (Mexico)
  "chinga", // He/she fucks (Mexico)
  "chingamos", // We fuck (Mexico)
  "chingan", // They fuck (Mexico)
  "chingó", // He/she fucked (Mexico)
  "chingando", // Fucking (Mexico)
  // --- coger (to fuck, Latin Am.) ---
  "cojo", // I fuck (Latin Am.)
  "coges", // You fuck
  "coge", // He/she fucks
  "cogemos", // We fuck
  "cogen", // They fuck
  "cogí", // I fucked
  "cogió", // He/she fucked
  "cogiendo", // Fucking
  // --- putear (to curse/insult) ---
  "puteo", // I curse
  "puteas", // You curse
  "putea", // He/she curses
  "puteamos", // We curse
  "putean", // They curse
  "puteé", // I cursed
  "puteó", // He/she cursed
  "puteando", // Cursing

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "putilla", // Little whore
  "zorrona", // Big fox/slut (f.)
  "cabroncito", // Little bastard
  "pendejísimo", // Very assholish
  "pendejito", // Little asshole
  "pendejazo", // Big asshole
  "hijueputica", // Little son of a bitch (Colombia)
  "hijueputazo", // Big son of a bitch
  "mierdecita", // Little shit
  "mierdón", // Big shit
  "mierdaza", // Big shit
  "gilipollón", // Big asshole (Spain)
  "gilipollitas", // Little asshole (Spain)
  "idiotazo", // Big idiot
  "idiotita", // Little idiot
  "estupidazo", // Big stupid
  "imbecilón", // Big imbecile
  "imbecilito", // Little imbecile
  "gordísimo", // Very fat
  "gordísima", // Very fat (f.)
  "gordote", // Big fat
  "gordota", // Big fat (f.)
  "tontísimo", // Very stupid
  "tontísima", // Very stupid (f.)
  "tontazo", // Big stupid
  "tontito", // Little stupid
  "tontita", // Little stupid (f.)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "te voy a dar una putiza", // I'll give you a beating (Mexico)
  "te voy a madrear", // I'll mother you (beat, Mexico)
  "te rompo la cara", // I'll break your face
  "te voy a sacar la mierda", // I'll beat the shit out of you
  "te voy a sacar la chucha", // I'll beat the pussy out of you (Chile/Peru)
  "te saco la cresta", // I'll punch your crest (Chile)
  "te voy a dar una paliza", // I'll give you a beating
  "te voy a dar una hostia", // I'll give you a communion (slap, Spain)
  "te voy a partir el culo", // I'll split your ass
  "te voy a reventar la jeta", // I'll burst your face
  "lárgate", // Get out
  "piérdete", // Get lost
  "esfúmate", // Vanish
  "desaparece", // Disappear
  "revienta", // Burst

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "carroña", // Carrion
  "desecho", // Waste
  "desecho humano", // Human waste
  "engendro del demonio", // Spawn of the devil
  "escoria de la sociedad", // Scum of society
  "gusana", // Worm (f.)
  "hiena", // Hyena
  "insecto", // Insect
  "rata de cloaca", // Sewer rat
  "rata inmunda", // Filthy rat
  "sanguijuela", // Leech
  "serpiente", // Snake
  "brujo", // Warlock (derog.)
  "demonio", // Demon
  "dragón", // Dragon (ugly woman)
  "espanto", // Fright
  "fenómeno", // Freak
  "monstruo", // Monster
  "ogro", // Ogre
  "basilisco", // Basilisk (angry person)
  "caimán", // Caiman (sneaky)
  "chacal", // Jackal
  "buitre", // Vulture
  "carroñero", // Scavenger
  "carroñera", // Scavenger (f.)
  "sarnoso", // Mangy
  "sarnosa", // Mangy (f.)
  "tiñoso", // Scabby
  "tiñosa", // Scabby (f.)
  "repugnante", // Repugnant
  "repulsivo", // Repulsive
  "repulsiva", // Repulsive (f.)
  "inmundo", // Filthy
  "inmunda", // Filthy (f.)
  "mugriento", // Grimy
  "mugrienta", // Grimy (f.)
  "cochino", // Pig (dirty)
  "cochina", // Pig (f.) (dirty)
  "guarrada", // Piggery (Spain)
  "guarrería", // Piggery (Spain)
  "perro", // Dog (insult)
  "perra asquerosa", // Disgusting bitch
  "hijo de perro", // Son of a dog
  "hija de perra", // Daughter of a bitch
  "perro desgraciado", // Disgraced dog
  "perra desgraciada", // Disgraced bitch
  "infeliz", // Unhappy / wretch
  "desalmado", // Soulless
  "desalmada", // Soulless (f.)
  "despreciable", // Despicable
  "detestable", // Detestable
  "infame", // Infamous
  "indigno", // Unworthy
  "indigna", // Unworthy (f.)
  "ruin", // Mean
  "vil", // Vile
  "canallada", // Scoundrel act
  "sinvergonzón", // Big shameless
  "cínico de mierda", // Shitty cynic
  "aprovechado de mierda", // Shitty freeloader
  "ladrón de mierda", // Shitty thief
  "mentiroso de mierda", // Shitty liar
  "cobarde de mierda", // Shitty coward
  "traidor de mierda", // Shitty traitor
  "chismoso de mierda", // Shitty gossip

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "me cago en Cristo", // I shit on Christ
  "me cago en el copón", // I shit on the communion cup
  "hostias", // Hosts (Spain expletive)
  "por Dios", // By God
  "Dios mío", // My God
  "Jesús", // Jesus
  "maldición", // Curse
  "condenado", // Condemned
  "condenada", // Condemned (f.)
  "demonios", // Demons
  "diablos", // Devils
  "infierno", // Hell
  "al infierno", // To hell
  "vete al infierno", // Go to hell
  "por el amor de Dios", // For the love of God
];

export default spanishBadWords;
