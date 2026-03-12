// src/languages/spanish-words.ts

/**
 * Spanish profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * Covers terms common in both Spain and Latin America, though regional differences exist.
 * ⚠️ Warning: This file contains explicit language in Spanish
 */
const spanishBadWords: Record<string, { s: number; c: number }> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "mierda": { s: 3, c: 4 }, // Shit
  "joder": { s: 4, c: 5 }, // Fuck (verb/interjection)
  "puta": { s: 3, c: 4 }, // Whore, bitch (fem.) / Fuck (interjection)
  "puto": { s: 3, c: 4 }, // Male whore, faggot (derogatory), fucking (adjective)
  "coño": { s: 2, c: 3 }, // Cunt (vulgar), Damn/Fuck (interjection - common in Spain)
  "cojones": { s: 4, c: 4 }, // Balls (vulgar), Guts
  "polla": { s: 4, c: 4 }, // Dick, cock (vulgar - common in Spain)
  "verga": { s: 3, c: 4 }, // Dick, cock (vulgar - common in LatAm)
  "picha": { s: 4, c: 4 }, // Dick, cock (vulgar - regional)
  "cipote": { s: 4, c: 4 }, // Dick, cock (vulgar - Spain)
  "carajo": { s: 4, c: 4 }, // Dick (vulgar), Hell/Damn (interjection)
  "culo": { s: 3, c: 4 }, // Ass, butt
  "teta": { s: 4, c: 3 }, // Tit, boob
  "tetas": { s: 4, c: 3 }, // Tits, boobs
  "chocho": { s: 5, c: 5 }, // Pussy, cunt (vulgar - Spain)
  "concha": { s: 5, c: 5 }, // Pussy, cunt (vulgar - LatAm, can be innocuous shell in Spain)
  "capullo": { s: 1, c: 4 }, // Asshole, idiot (lit. cocoon/foreskin - Spain)
  "gilipollas": { s: 1, c: 4 }, // Asshole, jerk, idiot (vulgar - Spain)
  "cabrón": { s: 3, c: 4 }, // Bastard, asshole, cuckold (male)
  "cabrona": { s: 4, c: 3 }, // Bitch, asshole (female)
  "hostia": { s: 4, c: 5 }, // Host (religious), Damn/Fuck/Shit/Hit (interjection/noun - Spain)
  "ostia": { s: 4, c: 5 }, // Common misspelling of hostia
  "pendejo": { s: 3, c: 4 }, // Asshole, idiot, dumbass (LatAm - very common), Pubic hair (Spain - rare)
  "pendeja": { s: 4, c: 3 }, // Fem. of pendejo
  "boludo": { s: 1, c: 3 }, // Idiot, dumbass (Arg, Uru - can be informal/friendly too)
  "boluda": { s: 4, c: 3 }, // Fem. of boludo
  "pelotudo": { s: 4, c: 3 }, // Stronger version of boludo (Arg, Uru)
  "pelotuda": { s: 4, c: 3 }, // Fem. of pelotudo

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Mierda ---
  "mierdoso": { s: 3, c: 4 },
  "mierdosa": { s: 3, c: 5 }, // Shitty
  "puta mierda": { s: 3, c: 5 }, // Fucking shit
  "comer mierda": { s: 3, c: 5 }, // Eat shit
  "una mierda": { s: 3, c: 5 }, // Like shit / Worthless
  "vete a la mierda": { s: 3, c: 5 }, // Go to hell / Fuck off
  // --- Joder ---
  "jodido": { s: 3, c: 4 },
  "jodida": { s: 3, c: 5 }, // Fucked, screwed, difficult
  "jódete": { s: 3, c: 5 }, // Fuck you / Screw you
  "que te jodan": { s: 3, c: 5 }, // Fuck you / Screw you (plural/formal)
  "no me jodas": { s: 3, c: 5 }, // Don't fuck with me / No kidding?!
  "jodienda": { s: 3, c: 4 }, // Annoyance, bother
  "joderse": { s: 3, c: 4 }, // To get screwed / To have to suck it up
  // --- Puta / Puto ---
  "putita": { s: 3, c: 4 },
  "putito": { s: 5, c: 4 }, // Little whore/faggot (diminutive, still offensive)
  "putazo": { s: 3, c: 4 }, // Big hit / Slur for gay man (LatAm)
  "putero": { s: 5, c: 4 }, // Whoremonger
  "putería": { s: 5, c: 4 }, // Whorehouse / Whore behavior
  "putear": { s: 3, c: 4 }, // To curse someone out, to treat badly
  "hijo de puta": { s: 5, c: 5 }, // Son of a bitch
  "hija de puta": { s: 3, c: 4 }, // Daughter of a bitch
  "putamadre": { s: 3, c: 4 },
  "puta madre": { s: 5, c: 5 }, // Motherfucker / Fucking awesome (dual use)
  "de puta madre": { s: 3, c: 5 }, // Fucking great
  "ni puto caso": { s: 3, c: 5 }, // Paying no fucking attention
  // --- Coño / Cojones ---
  "cojonudo": { s: 3, c: 4 },
  "cojonuda": { s: 4, c: 5 }, // Fucking great, ballsy (Spain)
  "acojonado": { s: 3, c: 4 },
  "acojonada": { s: 3, c: 5 }, // Scared shitless (Spain)
  "hasta los cojones": { s: 4, c: 4 }, // Fed up (lit. up to the balls - Spain)
  "tócate los cojones": { s: 3, c: 4 }, // Expression of disbelief/annoyance (Spain)
  "del coño": { s: 3, c: 5 }, // Shitty, annoying (Spain)
  // --- Polla / Verga / Picha / etc. ---
  "pollas en vinagre": { s: 3, c: 4 }, // Nonsense phrase (Spain)
  "me importa una polla": { s: 3, c: 5 }, // I don't give a fuck (Spain)
  "me importa una verga": { s: 3, c: 5 }, // I don't give a fuck (LatAm)
  "vergazo": { s: 4, c: 4 }, // Big hit with a dick-like object / Big dick (LatAm)
  "valer verga": { s: 3, c: 4 }, // To be worthless (LatAm)
  "chupar polla": { s: 4, c: 4 }, // Suck dick (Spain)
  "chupar verga": { s: 4, c: 4 }, // Suck dick (LatAm)
  "mamahuevo": { s: 4, c: 4 }, // Cocksucker (LatAm - very vulgar)
  "güevo": { s: 3, c: 4 },
  "guevo": { s: 4, c: 4 }, // Egg / Ball (testicle - LatAm slang)
  "huevón": { s: 3, c: 4 },
  "huevona": { s: 1, c: 4 }, // Lazy / Stupid / Guy (LatAm - varies by country)
  // --- Culo ---
  "gilipuertas": { s: 1, c: 4 }, // Idiot, jerk (Spain)
  "partirse el culo": { s: 3, c: 4 }, // Laugh your ass off
  "cara de culo": { s: 3, c: 4 }, // Ass-face (sour expression)
  " lameculos": { s: 3, c: 4 }, // Ass-kisser
  "patada en el culo": { s: 3, c: 4 }, // Kick in the ass
  // --- Cabrón / Cabrona ---
  "cabronazo": { s: 3, c: 4 },
  "cabronaza": { s: 3, c: 4 }, // Big asshole/bastard
  "cabronada": { s: 4, c: 5 }, // A dick move, a shitty action
  // --- Hostia ---
  "hostia puta": { s: 3, c: 5 }, // Fucking hell (Spain)
  "mala hostia": { s: 3, c: 4 }, // Bad mood / Bad intention (Spain)
  "darse una hostia": { s: 3, c: 4 }, // To crash / To hit oneself hard (Spain)
  "ser la hostia": { s: 3, c: 5 }, // To be the shit / To be awesome (Spain)
  // --- Gilipollas / Capullo ---
  "gilipollez": { s: 1, c: 4 }, // Stupidity, bullshit (Spain)
  "agilipollado": { s: 3, c: 4 }, // Acting like a gilipollas (Spain)
  // --- Pendejo / Boludo / Pelotudo ---
  "pendejada": { s: 1, c: 4 }, // Stupidity, bullshit (LatAm)
  "boludez": { s: 1, c: 4 }, // Stupidity, nonsense (Arg, Uru)
  "pelotudez": { s: 1, c: 4 }, // Stupidity, nonsense (stronger - Arg, Uru)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "tonto": { s: 1, c: 4 },
  "tonta": { s: 1, c: 4 }, // Idiot, fool (common, less vulgar)
  "tonto del culo": { s: 1, c: 4 }, // Fucking idiot (vulgar)
  "idiota": { s: 1, c: 4 }, // Idiot (common)
  "imbécil": { s: 1, c: 4 }, // Imbecile (common)
  "estúpido": { s: 1, c: 4 },
  "estúpida": { s: 1, c: 4 }, // Stupid
  "subnormal": { s: 1, c: 4 }, // Retarded (highly offensive)
  "retrasado": { s: 1, c: 4 },
  "retrasada": { s: 1, c: 4 }, // Retarded (highly offensive)
  "mongólico": { s: 1, c: 4 },
  "mongólica": { s: 1, c: 4 }, // Derogatory term for Down syndrome, used as insult
  "mongolo": { s: 1, c: 4 },
  "mongola": { s: 1, c: 4 }, // Shortened version
  "lerdo": { s: 1, c: 4 },
  "lerda": { s: 1, c: 4 }, // Slow-witted, dull
  "memo": { s: 3, c: 4 },
  "mema": { s: 1, c: 4 }, // Dumb,傻瓜 (Spain)
  "bobo": { s: 1, c: 4 },
  "boba": { s: 1, c: 4 }, // Silly, foolish
  "zopenco": { s: 1, c: 4 },
  "zopenca": { s: 1, c: 4 }, // Blockhead, dunce
  "tarado": { s: 1, c: 4 },
  "tarada": { s: 1, c: 4 }, // Freak, weirdo / Retarded (offensive)
  "cretino": { s: 1, c: 4 },
  "cretina": { s: 1, c: 4 }, // Cretin, idiot
  "necio": { s: 1, c: 4 },
  "necia": { s: 1, c: 4 }, // Foolish, stupid

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "maricón": { s: 5, c: 4 }, // Faggot (very offensive)
  "marica": { s: 5, c: 4 }, // Faggot (offensive, sometimes reclaimed/less harsh)
  "maricón de mierda": { s: 5, c: 5 }, // Fucking faggot
  "bollera": { s: 5, c: 4 }, // Dyke (offensive - Spain)
  "tortillera": { s: 5, c: 4 }, // Dyke (offensive - LatAm)
  "sudaca": { s: 5, c: 4 }, // Derogatory for South American (Spain)
  "machupichu": { s: 5, c: 4 }, // Derogatory for indigenous South American (Spain)
  "gringo": { s: 5, c: 4 }, // Derogatory/neutral for American/foreigner (LatAm)
  "gabacho": { s: 5, c: 4 }, // Derogatory for French person (Spain)
  "negrata": { s: 5, c: 4 }, // Derogatory for Black person (offensive)
  "moro": { s: 5, c: 4 }, // Moor, derogatory for North African/Arab (Spain)

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bastardo": { s: 5, c: 4 },
  "bastarda": { s: 3, c: 4 }, // Bastard
  "mamón": { s: 1, c: 4 },
  "mamona": { s: 3, c: 4 }, // Asshole, jerk (lit. sucker)
  "payaso": { s: 1, c: 4 },
  "payasa": { s: 1, c: 4 }, // Clown (used as idiot)
  "lameculos": { s: 3, c: 4 }, // Ass-kisser
  "baboso": { s: 1, c: 4 },
  "babosa": { s: 1, c: 4 }, // Slimy person, creep (lit. drooler)
  "perra": { s: 1, c: 4 }, // Bitch (dog, used for women)
  "zorra": { s: 1, c: 4 }, // Fox / Slut, bitch (very common)
  "bruja": { s: 1, c: 4 }, // Witch
  "malparido": { s: 1, c: 4 },
  "malparida": { s: 1, c: 4 }, // Badly born (lit.), like son of a bitch (LatAm)
  "hpt": { s: 1, c: 4 },
  "hijueputa": { s: 5, c: 5 }, // Abbreviations/variations of Hijo de Puta (LatAm)
  "gonorrea": { s: 1, c: 4 }, // Gonorrhea (used as a severe insult in Colombia)
  "sapo": { s: 1, c: 4 }, // Toad / Snitch (LatAm)
  "rata": { s: 1, c: 4 }, // Rat / Thief
  "cerdo": { s: 1, c: 4 },
  "cerda": { s: 1, c: 4 }, // Pig / Dirty person
  "marrano": { s: 1, c: 4 },
  "marrana": { s: 1, c: 4 }, // Pig / Dirty person
  "puerco": { s: 1, c: 4 },
  "puerca": { s: 1, c: 4 }, // Pig / Dirty person
  "muérete": { s: 5, c: 5 }, // Die
  "chiflado": { s: 1, c: 4 },
  "chiflada": { s: 1, c: 4 }, // Crazy, nuts
  "loco": { s: 1, c: 4 },
  "loca": { s: 1, c: 4 }, // Crazy
  "pinche": { s: 3, c: 5 }, // Fucking (adjective, very common in Mexico)
  "culero": { s: 3, c: 4 }, // Asshole (Mexico, vulgar)
  "chingar": { s: 3, c: 5 }, // To fuck / To annoy / To screw up (Mexico, very versatile & vulgar)
  "chinga tu madre": { s: 3, c: 4 }, // Fuck your mother (Mexico)
  "chingadera": { s: 3, c: 5 }, // Bullshit, junk (Mexico)
  "weon": { s: 1, c: 4 },
  "hueón": { s: 1, c: 4 }, // Dude / Idiot (Chile, common, versatile)
  "concha tu madre": { s: 1, c: 4 },
  "ctm": { s: 3, c: 4 }, // Your mother's cunt (LatAm, very offensive)
  "la concha de tu hermana": { s: 5, c: 5 }, // Your sister's cunt (Arg, very offensive)
  "forro": { s: 1, c: 4 },
  "forra": { s: 1, c: 4 }, // Condom / Asshole, idiot (Arg)
  "gato": { s: 1, c: 4 }, // Cat / Low-life servant / Wannabe (Arg)
  "grasiento": { s: 1, c: 4 },
  "grasienta": { s: 3, c: 4 }, // Greasy / Low-class, tasteless
  "guarro": { s: 1, c: 4 },
  "guarra": { s: 1, c: 4 }, // Filthy, disgusting person (Spain)
  "sinvergüenza": { s: 1, c: 4 }, // Shameless person
  "caradura": { s: 1, c: 4 }, // Cheeky, shameless person
  "chulo": { s: 4, c: 4 }, // Pimp / Cocky (Spain) / Cool (Mexico)
  "chula": { s: 1, c: 4 }, // Fem. of chulo
  "malnacido": { s: 1, c: 4 },
  "malnacida": { s: 1, c: 4 }, // Badly born (similar to malparido)

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "mear": { s: 3, c: 4 }, // To piss
  "meo": { s: 3, c: 4 }, // Piss
  "cagar": { s: 3, c: 5 }, // To shit
  "cagada": { s: 3, c: 5 }, // A fuck-up, mess / Shit (noun)
  "cagón": { s: 3, c: 4 },
  "cagona": { s: 1, c: 4 }, // Coward (lit. shitter) / Whiny
  "pedo": { s: 1, c: 3 }, // Fart / Drunkenness (Mexico/LatAm)
  "tirarse un pedo": { s: 3, c: 4 }, // To fart
  "potar": { s: 3, c: 4 }, // To vomit (Spain slang)
  "vomitar": { s: 3, c: 4 }, // To vomit
  "moco": { s: 3, c: 4 }, // Snot
  "escupir": { s: 3, c: 4 }, // To spit
  "semen": { s: 4, c: 3 }, // Semen
  "corrida": { s: 3, c: 4 }, // Cumshot / Orgasm (Spain) / Run (standard)
  "paja": { s: 3, c: 4 }, // Wank, handjob (lit. straw)
  "hacerse una paja": { s: 4, c: 4 }, // To masturbate (male)
  "dedos": { s: 3, c: 4 }, // Fingers (used in sexual context)
  "follar": { s: 3, c: 5 }, // To fuck (Spain - very direct)
  "coger": { s: 3, c: 5 }, // To take/grab (Standard) / To fuck (LatAm - VERY common, use with caution!)
  "singar": { s: 3, c: 5 }, // To fuck (vulgar, less common)
  "culear": { s: 3, c: 5 }, // To fuck (from culo - vulgar, LatAm)
  "cachondo": { s: 3, c: 4 },
  "cachonda": { s: 3, c: 4 }, // Horny (Spain)
  "caliente": { s: 3, c: 4 }, // Hot (temperature) / Horny (LatAm)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "jolin": { s: 1, c: 4 }, // Darn, gosh (mild version of joder - Spain)
  "jope": { s: 1, c: 4 }, // Darn, gosh (mild version of joder - Spain)
  "miercoles": { s: 2, c: 3 }, // Wednesday (euphemism for mierda)
  "ostras": { s: 2, c: 3 }, // Oysters (euphemism for hostia - Spain)
  "rayos": { s: 2, c: 3 }, // Lightning bolts (euphemism for carajo/etc.)
  "demontre": { s: 2, c: 3 }, // Demon (euphemism)
  "fastidiar": { s: 2, c: 3 }, // To annoy (can be euphemism for joder)
  "lavate la boca": { s: 3, c: 4 }, // Wash your mouth (telling someone off)
  "mamaverga": { s: 4, c: 4 }, // Cocksucker
  "pajero": { s: 3, c: 4 }, // Wanker (Arg)
  "pajera": { s: 3, c: 4 }, // Fem. wanker
  "conchesumadre": { s: 5, c: 5 }, // Your mother's cunt (Peru/Chile)
  "culiao": { s: 3, c: 5 }, // Ass-fucked (Chilean)
  "culeado": { s: 3, c: 5 }, // Fucked in the ass
  "conchudo": { s: 5, c: 5 }, // Shameless / Cunt-like
  "la concha de tu madre": { s: 5, c: 5 }, // Your mother's cunt (Arg)
  "reconcha de tu madre": { s: 3, c: 4 }, // Emphatic variant
  "la puta que te parió": { s: 5, c: 4 }, // The whore who bore you

  // Additional Latin American regional profanity
  "chingada": { s: 3, c: 5 }, // Fucked (Mexico)
  "chingado": { s: 3, c: 5 }, // Fucked (Mexico)
  "chingón": { s: 3, c: 5 }, // Badass / Fucker (Mexico)
  "chingona": { s: 3, c: 5 }, // Badass / Fucker fem (Mexico)
  "chingue su madre": { s: 3, c: 5 }, // Fuck his mother (Mexico)
  "a la verga": { s: 4, c: 5 }, // To the dick / Fuck off (Mexico)
  "no mames": { s: 3, c: 4 }, // Don't suck / No way (Mexico vulgar)
  "mamada": { s: 4, c: 5 }, // Blowjob / Bullshit (Mexico)
  "mamadas": { s: 3, c: 4 }, // Plural
  "vergón": { s: 4, c: 4 }, // Big-dicked (LatAm)
  "culera": { s: 3, c: 4 }, // Fem of culero (Mexico)
  "pinche pendejo": { s: 1, c: 4 }, // Fucking idiot (Mexico)
  "pinche puta": { s: 5, c: 5 }, // Fucking whore (Mexico)
  "gonorreas": { s: 3, c: 4 }, // Plural (Colombia)
  "malparidos": { s: 3, c: 4 }, // Plural (Colombia)
  "hijuemadre": { s: 2, c: 3 }, // Son of a mother (Colombia euphemism)
  "marica hijueputa": { s: 3, c: 4 }, // Compound (Colombia)
  "carepicha": { s: 4, c: 4 }, // Dick face (Costa Rica)
  "careculo": { s: 3, c: 4 }, // Ass face (Venezuela)
  "coño de tu madre": { s: 5, c: 5 }, // Your mother's cunt (Venezuela)
  "coñazo": { s: 3, c: 4 }, // Big hit / Damn (Venezuela)
  "güevón": { s: 1, c: 4 }, // Idiot (Venezuela)
  "mamaguevo": { s: 4, c: 4 }, // Cocksucker (Venezuela/Dominican)
  "pajúo": { s: 1, c: 4 }, // Idiot (Venezuela)
  "cachudo": { s: 3, c: 4 }, // Cuckold (Chile)
  "conchetumadre": { s: 5, c: 5 }, // Your mother's cunt (Chile)
  "wea": { s: 3, c: 5 }, // Thing / Bullshit (Chile)
  "weón": { s: 1, c: 4 }, // Dude / Idiot (Chile)
  "weona": { s: 3, c: 4 }, // Fem (Chile)
  "aweonao": { s: 1, c: 4 }, // Fucking idiot (Chile)
  "aweonada": { s: 3, c: 4 }, // Fem (Chile)
  "sacowea": { s: 3, c: 4 }, // Ballbreaker (Chile)
  "maraco": { s: 3, c: 4 }, // Faggot (Chile)
  "chucha": { s: 5, c: 5 }, // Cunt / Damn (Peru/Chile)
  "chuchatumadre": { s: 5, c: 5 }, // Your mother's cunt (Peru)
  "huevada": { s: 3, c: 5 }, // Bullshit (Peru)
  "cojudo": { s: 1, c: 4 }, // Idiot (Peru)
  "cojuda": { s: 3, c: 4 }, // Fem (Peru)
  "pitudo": { s: 4, c: 4 }, // Big-dicked (Peru)
  "cachero": { s: 3, c: 5 }, // Fucker (Peru)
  "recontra cojudo": { s: 1, c: 4 }, // Super idiot (Peru)

  // ========================================
  // === More Mexican Profanity ============
  // ========================================
  "a huevo": { s: 3, c: 4 }, // Hell yeah / By force (Mexico)
  "vale verga": { s: 3, c: 4 }, // It's worthless (Mexico)
  "valió verga": { s: 3, c: 5 }, // It went to shit (Mexico)
  "vergas": { s: 4, c: 4 }, // Dicks (Mexico)
  "me vale madre": { s: 3, c: 5 }, // I don't give a fuck (Mexico)
  "me vale verga": { s: 3, c: 5 }, // I don't give a fuck (Mexico, stronger)
  "no manches": { s: 1, c: 4 }, // No way / Don't stain (Mexico, mild)
  "chingadazo": { s: 3, c: 5 }, // Hard hit / Fucking hit (Mexico)
  "hijo de la chingada": { s: 3, c: 5 }, // Son of the fucked (Mexico)
  "la chingada": { s: 3, c: 5 }, // The fucked / Hell (Mexico)
  "vete a la chingada": { s: 3, c: 4 }, // Go to hell (Mexico)
  "qué chingados": { s: 3, c: 5 }, // What the fuck (Mexico)
  "ni madres": { s: 3, c: 5 }, // No fucking way (Mexico)
  "en la madre": { s: 3, c: 4 }, // In the mother / Damn (Mexico)
  "poca madre": { s: 3, c: 4 }, // Shameless / Awesome (Mexico, dual use)
  "un desmadre": { s: 3, c: 5 }, // A clusterfuck (Mexico)
  "madrazo": { s: 3, c: 4 }, // Hard hit (Mexico)
  "a toda madre": { s: 3, c: 5 }, // Fucking awesome (Mexico)
  "hijo de su puta madre": { s: 5, c: 4 }, // Son of his whore mother
  "pinche cabrón": { s: 3, c: 4 }, // Fucking bastard (Mexico)
  "pinche culero": { s: 3, c: 5 }, // Fucking asshole (Mexico)
  "pinche güey": { s: 1, c: 4 }, // Fucking dude/idiot (Mexico)
  "güey": { s: 1, c: 4 }, // Dude / Idiot (Mexico)
  "buey": { s: 1, c: 4 }, // Ox / Idiot (Mexico, older spelling)
  "naco": { s: 3, c: 4 }, // Tacky / Low-class person (Mexico)
  "naca": { s: 3, c: 4 }, // Fem of naco
  "fresa": { s: 3, c: 4 }, // Strawberry / Snob (Mexico)
  "manchado": { s: 3, c: 5 }, // Stained / Fucked up (Mexico)
  "chingaquedito": { s: 3, c: 5 }, // Sneaky fucker (Mexico)
  "maldito": { s: 3, c: 4 }, // Damn / Cursed (Mexico/general)
  "maldita": { s: 3, c: 4 }, // Fem of maldito
  "desgraciado": { s: 3, c: 4 }, // Wretched / Bastard
  "desgraciada": { s: 3, c: 4 }, // Fem
  "ojete": { s: 3, c: 4 }, // Asshole (Mexico, lit. eyelet)
  "métetelo por el culo": { s: 3, c: 4 }, // Shove it up your ass
  "cállate el hocico": { s: 3, c: 4 }, // Shut your snout
  "lárgate a la verga": { s: 3, c: 5 }, // Get the fuck out (Mexico)
  "tragaverga": { s: 4, c: 4 }, // Dick swallower (Mexico)
  "tragaleche": { s: 3, c: 4 }, // Cum swallower
  "lameverga": { s: 4, c: 4 }, // Dick licker (Mexico)
  "pinche vieja": { s: 3, c: 5 }, // Fucking woman (Mexico, derogatory)
  "pinche viejo": { s: 3, c: 5 }, // Fucking old man (Mexico, derogatory)

  // ========================================
  // === More Argentine Profanity ==========
  // ========================================
  "boludo de mierda": { s: 1, c: 4 }, // Fucking idiot (Argentina)
  "pelotudo de mierda": { s: 3, c: 5 }, // Fucking asshole (Argentina)
  "la re concha": { s: 5, c: 5 }, // The super cunt (Argentina, intensifier)
  "andá a la mierda": { s: 3, c: 5 }, // Go to shit (Argentina)
  "sos un pelotudo": { s: 1, c: 4 }, // You're a dumbass (Argentina)
  "la concha de la lora": { s: 5, c: 5 }, // The parrot's cunt (Argentina, exclamation)
  "concha seca": { s: 5, c: 5 }, // Dry cunt (Argentina, old woman insult)
  "chupame la pija": { s: 4, c: 4 }, // Suck my dick (Argentina)
  "pija": { s: 4, c: 4 }, // Dick (Argentina)
  "la puta que lo parió": { s: 5, c: 4 }, // The whore who bore him
  "rompepelotas": { s: 3, c: 4 }, // Ball breaker (Argentina)
  "hinchapelotas": { s: 3, c: 4 }, // Ball sweller (annoying, Argentina)
  "pelotas": { s: 4, c: 4 }, // Balls (Argentina)
  "en pelotas": { s: 3, c: 4 }, // Naked / Broke (Argentina)
  "me chupa un huevo": { s: 3, c: 5 }, // I don't give a fuck (lit. it sucks my egg, Argentina)
  "turro": { s: 3, c: 4 }, // Thief / Asshole (Argentina)
  "turra": { s: 3, c: 4 }, // Fem of turro
  "atorrante": { s: 3, c: 4 }, // Scoundrel, lowlife (Argentina)
  "gil": { s: 1, c: 4 }, // Idiot (Argentina)
  "gila": { s: 3, c: 4 }, // Fem of gil
  "gil de goma": { s: 1, c: 4 }, // Rubber idiot (Argentina)
  "chupamedias": { s: 3, c: 4 }, // Bootlicker (Argentina, lit. sock sucker)
  "cornudo": { s: 3, c: 4 }, // Cuckold
  "cornuda": { s: 3, c: 4 }, // Fem of cornudo
  "sorete": { s: 3, c: 5 }, // Piece of shit (Argentina)
  "garcha": { s: 4, c: 4 }, // Dick (Argentina)
  "garchame": { s: 3, c: 5 }, // Fuck me (Argentina)
  "garchador": { s: 3, c: 5 }, // Fucker (Argentina)
  "trola": { s: 3, c: 4 }, // Slut (Argentina)
  "trolita": { s: 3, c: 4 }, // Little slut (Argentina)
  "pete": { s: 4, c: 5 }, // Blowjob (Argentina)
  "hacerle un pete": { s: 4, c: 5 }, // To give a blowjob (Argentina)
  "ortiva": { s: 3, c: 4 }, // Buzzkill / Snitch (Argentina)
  "cagador": { s: 3, c: 4 }, // Cheater / Scammer (Argentina)
  "cagadora": { s: 3, c: 4 }, // Fem
  "hijo de un camión de putas": { s: 5, c: 4 }, // Son of a truckload of whores (Argentina)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "pirobo": { s: 3, c: 4 }, // Asshole / Faggot (Colombia, very vulgar)
  "piroba": { s: 3, c: 4 }, // Fem of pirobo
  "gonorrea hijueputa": { s: 3, c: 4 }, // Gonorrhea son of a bitch (Colombia)
  "malparido de mierda": { s: 3, c: 5 }, // Shit badly-born (Colombia)
  "carechimba": { s: 5, c: 5 }, // Cunt face (Colombia)
  "chimba": { s: 5, c: 5 }, // Cunt / Cool (Colombia, dual use)
  "chimbo": { s: 3, c: 5 }, // Fake / Shitty (Colombia)
  "guevón": { s: 3, c: 4 }, // Already listed but also Colombia
  "lambon": { s: 3, c: 4 }, // Suck-up (Colombia)
  "lambona": { s: 3, c: 4 }, // Fem
  "sapear": { s: 3, c: 4 }, // To snitch (Colombia)
  "culicagado": { s: 3, c: 5 }, // Shit-assed (Colombia, immature person)
  "culicagada": { s: 3, c: 4 }, // Fem
  "cachón": { s: 3, c: 4 }, // Cuckold (Colombia)
  "arrecho": { s: 3, c: 4 }, // Horny / Angry / Awesome (Colombia/Venezuela)
  "arrechera": { s: 3, c: 4 }, // Horniness / Anger (Colombia/Venezuela)
  "hijueperra": { s: 3, c: 4 }, // Son of a bitch (Colombia, lit. son of a dog)
  "perro hijueputa": { s: 3, c: 4 }, // Dog son of a bitch (Colombia)
  "vergajo": { s: 4, c: 4 }, // Dick / Whip (Colombia)
  "mondá": { s: 4, c: 4 }, // Dick (Colombia)
  "ñero": { s: 3, c: 4 }, // Low-class person (Colombia)
  "ñera": { s: 3, c: 4 }, // Fem

  // ========================================
  // === Cuban Profanity ===================
  // ========================================
  "comepinga": { s: 4, c: 4 }, // Dick eater (Cuba, very vulgar)
  "comemierda": { s: 3, c: 5 }, // Shit eater (Cuba/general)
  "singao": { s: 3, c: 5 }, // Fucked (Cuba)
  "singá": { s: 3, c: 4 }, // Fem of singao (Cuba)
  "pinga": { s: 4, c: 4 }, // Dick (Cuba/Caribbean)
  "pingón": { s: 4, c: 4 }, // Big-dicked (Cuba)
  "tremenda pinga": { s: 4, c: 5 }, // Tremendous dick / What the fuck (Cuba)
  "me cago en tu madre": { s: 3, c: 5 }, // I shit on your mother (Cuba/Spain)
  "me cago en diez": { s: 3, c: 5 }, // I shit on ten (Cuba/Spain, euphemism)
  "comerle el culo": { s: 3, c: 4 }, // To eat someone's ass (Cuba)

  // ========================================
  // === Puerto Rican Profanity ============
  // ========================================
  "bicho": { s: 4, c: 4 }, // Dick (Puerto Rico)
  "bichote": { s: 4, c: 4 }, // Drug dealer / Big dick (Puerto Rico)
  "mamao": { s: 1, c: 4 }, // Sucker / Idiot (Puerto Rico)
  "mamá bicho": { s: 4, c: 4 }, // Dick sucker (Puerto Rico)
  "come mierda": { s: 3, c: 5 }, // Shit eater (Puerto Rico variant)
  "canto de cabrón": { s: 3, c: 4 }, // Huge bastard (Puerto Rico)
  "puñeta": { s: 3, c: 4 }, // Wank / Damn (Puerto Rico/general)
  "puñetero": { s: 3, c: 4 }, // Wanker / Annoying person
  "puñetera": { s: 3, c: 4 }, // Fem
  "jodón": { s: 3, c: 5 }, // Annoying fucker (Puerto Rico)
  "jodona": { s: 3, c: 4 }, // Fem
  "lambón": { s: 3, c: 4 }, // Ass-kisser (Puerto Rico/Caribbean)

  // ========================================
  // === Uruguayan / Rioplatense ===========
  // ========================================
  "botija": { s: 1, c: 4 }, // Kid / Idiot (Uruguay)
  "papelón": { s: 1, c: 4 }, // Embarrassment / Fool (Uruguay)
  "bardero": { s: 3, c: 4 }, // Troublemaker (Uruguay/Argentina)
  "bardera": { s: 3, c: 4 }, // Fem
  "loco de mierda": { s: 3, c: 5 }, // Crazy fucker (Rioplatense)

  // ========================================
  // === More General / Pan-Hispanic =======
  // ========================================
  "chupapollas": { s: 4, c: 4 }, // Cocksucker (Spain)
  "meapila": { s: 3, c: 4 }, // Holy joe / Overly devout person (derogatory)
  "zorrón": { s: 3, c: 4 }, // Big slut (augmentative)
  "putón": { s: 5, c: 4 }, // Big whore (augmentative)
  "putona": { s: 3, c: 4 }, // Fem of putón
  "piojoso": { s: 3, c: 4 }, // Lousy (lit. lice-ridden)
  "piojosa": { s: 3, c: 4 }, // Fem
  "asqueroso": { s: 3, c: 4 }, // Disgusting
  "asquerosa": { s: 3, c: 4 }, // Fem
  "pervertido": { s: 3, c: 4 }, // Pervert
  "pervertida": { s: 3, c: 4 }, // Fem
  "degenerado": { s: 3, c: 4 }, // Degenerate
  "degenerada": { s: 3, c: 4 }, // Fem
  "depravado": { s: 3, c: 4 }, // Depraved
  "depravada": { s: 3, c: 4 }, // Fem
  "miserable": { s: 3, c: 4 }, // Miserable / Scum
  "descarado": { s: 3, c: 4 }, // Shameless
  "descarada": { s: 3, c: 4 }, // Fem
  "desvergonzado": { s: 3, c: 4 }, // Shameless
  "desvergonzada": { s: 3, c: 4 }, // Fem
  "traidor": { s: 3, c: 4 }, // Traitor
  "traidora": { s: 3, c: 4 }, // Fem
  "cobarde": { s: 1, c: 4 }, // Coward
  "inútil": { s: 3, c: 4 }, // Useless
  "parásito": { s: 3, c: 4 }, // Parasite
  "escoria": { s: 3, c: 4 }, // Scum, dregs
  "basura": { s: 3, c: 4 }, // Trash, garbage (person)
  "lacra": { s: 3, c: 4 }, // Scum / Scar
  "alimaña": { s: 3, c: 4 }, // Vermin
  "sabandija": { s: 3, c: 4 }, // Vermin, bug
  "engendro": { s: 3, c: 4 }, // Monstrosity / Freak
  "adefesio": { s: 1, c: 4 }, // Ugly/ridiculous person
  "esperpento": { s: 3, c: 4 }, // Grotesque person
  "mamarracho": { s: 3, c: 4 }, // Ridiculous person / Mess
  "fantoche": { s: 1, c: 4 }, // Puppet / Pretentious fool
  "pelele": { s: 3, c: 4 }, // Puppet / Spineless person
  "mequetrefe": { s: 3, c: 4 }, // Good-for-nothing
  "mequeterfa": { s: 3, c: 4 }, // Fem variant
  "mentecato": { s: 1, c: 4 }, // Fool, simpleton
  "mentecata": { s: 3, c: 4 }, // Fem
  "pazguato": { s: 3, c: 4 }, // Simpleton, gawker
  "pazguata": { s: 3, c: 4 }, // Fem
  "imbécil de mierda": { s: 3, c: 5 }, // Fucking imbecile
  "estúpido de mierda": { s: 1, c: 4 }, // Fucking stupid
  "cara de verga": { s: 4, c: 4 }, // Dick face
  "cara de pinga": { s: 4, c: 4 }, // Dick face (Caribbean)
  "cara de mierda": { s: 3, c: 5 }, // Shit face
  "tragasables": { s: 3, c: 4 }, // Sword swallower (sexual implication)
  "ramera": { s: 5, c: 4 }, // Whore (literary/archaic)
  "furcia": { s: 5, c: 4 }, // Whore (Spain)
  "fulana": { s: 3, c: 4 }, // Hooker / So-and-so
  "buscona": { s: 5, c: 4 }, // Gold digger / Prostitute
  "cualquiera": { s: 3, c: 4 }, // Anyone / Easy woman (derogatory)
  "callejera": { s: 5, c: 4 }, // Street woman (prostitute)
  "arrabalera": { s: 3, c: 4 }, // From the slums / Coarse woman
  "golfa": { s: 3, c: 4 }, // Slut (Spain)
  "lagarta": { s: 3, c: 4 }, // Lizard / Scheming woman (Spain)
  "arpía": { s: 3, c: 4 }, // Harpy / Shrew
  "víbora": { s: 3, c: 4 }, // Viper / Two-faced person
  "sierpe": { s: 3, c: 4 }, // Serpent / Nasty person
  "tarada de mierda": { s: 3, c: 5 }, // Fucking weirdo
  "pedazo de mierda": { s: 3, c: 5 }, // Piece of shit

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "coito": { s: 4, c: 4 }, // Coitus
  "sodomía": { s: 4, c: 4 }, // Sodomy
  "felación": { s: 4, c: 5 }, // Fellatio
  "cunnilingus": { s: 4, c: 3 }, // Cunnilingus
  "masturbar": { s: 4, c: 4 }, // To masturbate
  "masturbarse": { s: 4, c: 4 }, // To masturbate (reflexive)
  "pajear": { s: 4, c: 4 }, // To wank (LatAm)
  "pajearse": { s: 4, c: 4 }, // To wank oneself
  "correrse": { s: 4, c: 4 }, // To cum (Spain)
  "venirse": { s: 4, c: 4 }, // To cum (LatAm)
  "eyacular": { s: 4, c: 4 }, // To ejaculate
  "orgasmo": { s: 4, c: 4 }, // Orgasm
  "clítoris": { s: 4, c: 4 }, // Clitoris
  "testículos": { s: 4, c: 4 }, // Testicles
  "escroto": { s: 4, c: 4 }, // Scrotum
  "prepucio": { s: 4, c: 4 }, // Foreskin
  "glande": { s: 4, c: 4 }, // Glans
  "erección": { s: 4, c: 4 }, // Erection
  "empalmar": { s: 4, c: 4 }, // To get hard (Spain slang)
  "empalmado": { s: 4, c: 4 }, // Hard / Aroused (Spain)
  "empalmada": { s: 4, c: 4 }, // Fem
  "tirar": { s: 4, c: 5 }, // To throw / To fuck (LatAm)
  "tirarse a": { s: 4, c: 5 }, // To fuck someone
  "echarse un polvo": { s: 4, c: 4 }, // To have a shag (Spain)
  "polvo": { s: 4, c: 4 }, // Dust / Shag (Spain)
  "un clavo": { s: 4, c: 5 }, // A nail / A fuck (LatAm)
  "mojar": { s: 4, c: 5 }, // To wet / To fuck (LatAm)
  "mojar el churro": { s: 4, c: 5 }, // To dip the churro / To fuck (Mexico)
  "meter": { s: 3, c: 4 }, // To put in / To fuck
  "meterla": { s: 3, c: 5 }, // To put it in / To fuck
  "metérsela": { s: 3, c: 4 }, // To put it in (reflexive)
  "penetrar": { s: 3, c: 4 }, // To penetrate
  "sodomizar": { s: 3, c: 4 }, // To sodomize
  "mamar": { s: 4, c: 4 }, // To suckle / To suck dick (LatAm)
  "chupar": { s: 3, c: 4 }, // To suck
  "lamer": { s: 3, c: 4 }, // To lick
  "tragar": { s: 3, c: 4 }, // To swallow
  "pene": { s: 4, c: 4 }, // Penis
  "vagina": { s: 4, c: 3 }, // Vagina
  "ano": { s: 3, c: 4 }, // Anus
  "nalgas": { s: 3, c: 4 }, // Buttocks
  "pompis": { s: 3, c: 4 }, // Butt (childish)
  "pechos": { s: 4, c: 4 }, // Breasts
  "chichis": { s: 4, c: 4 }, // Boobs (Mexico)
  "lolas": { s: 4, c: 4 }, // Boobs (Argentina)
  "gomas": { s: 4, c: 4 }, // Boobs (Central America)
  "pezón": { s: 3, c: 4 }, // Nipple
  "pezones": { s: 3, c: 4 }, // Nipples
  "condón": { s: 3, c: 4 }, // Condom
  "preservativo": { s: 3, c: 4 }, // Condom (formal)
  "prostituta": { s: 5, c: 4 }, // Prostitute
  "prostituto": { s: 5, c: 4 }, // Male prostitute
  "burdel": { s: 3, c: 4 }, // Brothel
  "prostíbulo": { s: 3, c: 4 }, // Brothel
  "lupanar": { s: 3, c: 4 }, // Brothel (literary)
  "proxeneta": { s: 3, c: 4 }, // Pimp
  "cafiche": { s: 3, c: 4 }, // Pimp (LatAm)
  "padrote": { s: 3, c: 4 }, // Pimp (Mexico)
  "lenón": { s: 3, c: 4 }, // Pimp (formal)
  "gigoló": { s: 3, c: 4 }, // Gigolo
  "ninfómana": { s: 3, c: 4 }, // Nymphomaniac
  "sátiro": { s: 3, c: 4 }, // Satyr / Lecher
  "lujuria": { s: 3, c: 4 }, // Lust
  "lujurioso": { s: 3, c: 4 }, // Lustful
  "lascivo": { s: 3, c: 4 }, // Lascivious
  "obsceno": { s: 3, c: 4 }, // Obscene
  "pornografía": { s: 3, c: 4 }, // Pornography
  "porno": { s: 3, c: 4 }, // Porn

  // ========================================
  // === More Chingar Derivatives (Mexico) ==
  // ========================================
  "chingaderón": { s: 3, c: 4 }, // Big piece of junk (Mexico)
  "chingaste": { s: 3, c: 5 }, // You fucked up (Mexico)
  "chingué": { s: 3, c: 5 }, // I fucked up (Mexico)
  "me chingué": { s: 3, c: 4 }, // I got screwed (Mexico)
  "chingasos": { s: 3, c: 4 }, // Blows, punches (Mexico)
  "chingalera": { s: 3, c: 4 }, // Junk, crap (Mexico)
  "chinguero": { s: 3, c: 5 }, // A lot of, shitload (Mexico)
  "chingativo": { s: 3, c: 5 }, // Fucking annoying (Mexico)
  "rechingón": { s: 3, c: 4 }, // Really badass (Mexico)
  "rechingona": { s: 3, c: 4 }, // Fem really badass (Mexico)
  "rechingada": { s: 3, c: 5 }, // Really fucked (Mexico)
  "echingadera": { s: 3, c: 4 }, // Variant of chingadera (Mexico)
  "chingaderas": { s: 3, c: 5 }, // Plural: bullshit things (Mexico)
  "hecho la chingada": { s: 3, c: 4 }, // Done like crap (Mexico)

  // ========================================
  // === More Puta/Puto Compounds ==========
  // ========================================
  "putísima": { s: 3, c: 5 }, // Most whorish (superlative)
  "putísimo": { s: 3, c: 5 }, // Most whorish (masc superlative)
  "puterío": { s: 5, c: 5 }, // Whorehouse atmosphere
  "putañero": { s: 5, c: 5 }, // Whoremonger (variant)
  "reputísima": { s: 3, c: 5 }, // Emphatic most whorish
  "reputísima madre": { s: 5, c: 5 }, // Emphatic motherfucker
  "puta barata": { s: 5, c: 5 }, // Cheap whore
  "re puta": { s: 5, c: 5 }, // Super whore (Argentina)
  "re puta madre": { s: 5, c: 5 }, // Super motherfucker (Argentina)
  "puta que te parió": { s: 5, c: 5 }, // Whore that bore you
  "hijo de tu puta madre": { s: 5, c: 5 }, // Son of your whore mother
  "hija de tu puta madre": { s: 5, c: 5 }, // Daughter of your whore mother
  "gran puta": { s: 5, c: 5 }, // Big whore
  "hijo de la gran puta": { s: 5, c: 5 }, // Son of the great whore
  "reputa": { s: 5, c: 5 }, // Emphatic whore
  "reputamadre": { s: 5, c: 5 }, // Emphatic motherfucker
  "putada": { s: 3, c: 5 }, // A shitty situation / dirty trick

  // ========================================
  // === More Mierda Compounds =============
  // ========================================
  "mierda seca": { s: 3, c: 5 }, // Dry shit
  "tremenda mierda": { s: 3, c: 5 }, // Tremendous shit
  "hecho mierda": { s: 3, c: 5 }, // Wrecked / destroyed
  "hecha mierda": { s: 3, c: 5 }, // Fem wrecked
  "de mierda": { s: 3, c: 5 }, // Shitty (adjective)
  "mierda de persona": { s: 3, c: 5 }, // Shit of a person
  "pura mierda": { s: 3, c: 5 }, // Pure shit
  "más mierda": { s: 3, c: 5 }, // More shit
  "mierdero": { s: 3, c: 5 }, // Shithole
  "mierdecilla": { s: 3, c: 5 }, // Little shit (diminutive)
  "tremendo mierda": { s: 3, c: 5 }, // Tremendous shit (as person)

  // ========================================
  // === More Verga Compounds ==============
  // ========================================
  "vergacho": { s: 4, c: 5 }, // Dickish (Mexico)
  "averga": { s: 4, c: 5 }, // No way / dick-related exclamation (Mexico)
  "vergudo": { s: 4, c: 5 }, // Big-dicked / badass
  "vergonzón": { s: 4, c: 5 }, // Shameful-dicked
  "vergüeada": { s: 3, c: 5 }, // Beating (Central America)
  "vergueada": { s: 3, c: 5 }, // Beating variant
  "verguear": { s: 3, c: 5 }, // To beat up (Central America)
  "verguearse": { s: 3, c: 5 }, // To fight (Central America)
  "envergar": { s: 4, c: 5 }, // To put the dick in
  "envergate": { s: 3, c: 5 }, // Stick it in (vulgar command)
  "valeberga": { s: 3, c: 5 }, // Worthless (Mexico slang, phonetic)
  "avergas": { s: 3, c: 5 }, // No shit (Mexico exclamation)
  "verguiza": { s: 3, c: 5 }, // Beating (Mexico)

  // ========================================
  // === More Culo Compounds ===============
  // ========================================
  "culiada": { s: 3, c: 5 }, // Fucked in the ass (fem, Chile/Argentina)
  "culiado": { s: 3, c: 5 }, // Fucked in the ass (masc)
  "enculado": { s: 3, c: 5 }, // Sodomized / screwed
  "enculada": { s: 3, c: 5 }, // Fem sodomized
  "culiar": { s: 3, c: 5 }, // To fuck anally (LatAm)
  "culón": { s: 3, c: 5 }, // Big-assed
  "culona": { s: 3, c: 5 }, // Big-assed (fem)
  "culero de mierda": { s: 3, c: 5 }, // Fucking asshole (Mexico)
  "culazo": { s: 3, c: 5 }, // Big ass / great ass
  "reculiar": { s: 3, c: 5 }, // To fuck again anally
  "hueleculo": { s: 3, c: 5 }, // Ass sniffer
  "rascaculo": { s: 3, c: 5 }, // Ass scratcher
  "culebrón": { s: 1, c: 4 }, // Soap opera / coward (from culebra)

  // ========================================
  // === Dominican Slang ===================
  // ========================================
  "tíguere": { s: 3, c: 4 }, // Street-smart guy / hustler (Dominican)
  "tigueraje": { s: 3, c: 4 }, // Street behavior (Dominican)
  "singadera": { s: 3, c: 5 }, // Fucking around (Dominican)
  "sinverguenza": { s: 3, c: 4 }, // Shameless (Dominican variant)
  "coñazo de madre": { s: 5, c: 5 }, // Motherfucking hit (Dominican)
  "mamagüevo": { s: 3, c: 4 }, // Variant with diaeresis
  "mamagüevos": { s: 3, c: 4 }, // Plural
  "desgraciáo": { s: 3, c: 5 }, // Wretched (Dominican phonetic)
  "hijo e puta": { s: 3, c: 5 }, // Son of a bitch (Dominican phonetic)
  "jediondo": { s: 3, c: 4 }, // Stinky / annoying (Dominican)
  "pariguayo": { s: 1, c: 4 }, // Loser / party watcher (Dominican)
  "lambeculo": { s: 3, c: 4 }, // Ass licker (Dominican)
  "cuero": { s: 5, c: 4 }, // Leather / whore (Dominican)
  "cuerúa": { s: 3, c: 4 }, // Slut (Dominican)
  "grajo": { s: 3, c: 4 }, // Armpit stink / stinky person (Dominican)
  "deguañangao": { s: 1, c: 4 }, // Messed up / ugly (Dominican)
  "vaina": { s: 3, c: 4 }, // Thing / damn thing (Dominican)
  "qué vaina": { s: 3, c: 4 }, // What the hell (Dominican)
  "maldita vaina": { s: 3, c: 4 }, // Damn thing (Dominican)

  // ========================================
  // === Ecuadorian Profanity ==============
  // ========================================
  "chuchamare": { s: 5, c: 5 }, // Cunt mother (Ecuadorian)
  "longo": { s: 3, c: 4 }, // Indigenous person (derogatory, Ecuador)
  "longa": { s: 3, c: 4 }, // Fem indigenous (derogatory, Ecuador)
  "achachay": { s: 1, c: 4 }, // Expression of cold / mild exclamation
  "ñaño": { s: 3, c: 4 }, // Brother / dude (Ecuador, can be derogatory)
  "cagado de la risa": { s: 3, c: 4 }, // Laughing your ass off (Ecuador)
  "verdugo": { s: 3, c: 4 }, // Executioner / badass (Ecuador slang)
  "sorche": { s: 1, c: 4 }, // Soldier / idiot (Ecuador)
  "manaburro": { s: 1, c: 4 }, // Really stupid (Ecuador)

  // ========================================
  // === Bolivian Profanity ================
  // ========================================
  "k'arajo": { s: 3, c: 4 }, // Damn (Bolivia, Quechua influence)
  "ch'enko": { s: 3, c: 5 }, // Mess / clusterfuck (Bolivia)
  "birlocha": { s: 3, c: 4 }, // Loose woman (Bolivia)
  "llokalla": { s: 3, c: 4 }, // Kid / brat (Bolivia, Aymara)
  "jailón": { s: 3, c: 4 }, // Snob / rich kid (Bolivia)
  "jailona": { s: 3, c: 4 }, // Fem snob (Bolivia)
  "q'encha": { s: 3, c: 4 }, // Bad luck / jinx person (Bolivia)
  "huevadas": { s: 3, c: 5 }, // Bullshit (Bolivia)

  // ========================================
  // === Paraguayan Profanity ==============
  // ========================================
  "kurepí": { s: 3, c: 4 }, // Pig-skinned (derogatory, Paraguay Guaraní)
  "tavy": { s: 1, c: 4 }, // Stupid / dumb (Paraguay Guaraní)
  "ndéra": { s: 3, c: 4 }, // Damn (Paraguay Guaraní expression)
  "nde rakore": { s: 3, c: 4 }, // Your mother (Guaraní insult, Paraguay)
  "nde rakaré": { s: 3, c: 4 }, // You're shameless (Guaraní, Paraguay)
  "mba'e piko nde": { s: 3, c: 4 }, // What the hell are you (Guaraní, Paraguay)
  "cachicué": { s: 1, c: 4 }, // Idiot / fool (Paraguay)
  "mitã'i": { s: 3, c: 4 }, // Brat (Paraguay Guaraní)

  // ========================================
  // === Central American Profanity ========
  // ========================================
  "cerote": { s: 3, c: 5 }, // Piece of shit (Guatemala, El Salvador)
  "chucho": { s: 3, c: 4 }, // Dog / mutt (Central America)
  "pichazo": { s: 4, c: 4 }, // Dick hit (Costa Rica)
  "mae": { s: 3, c: 4 }, // Dude (Costa Rica, can be derogatory)
  "playo": { s: 3, c: 4 }, // Faggot (Honduras, derogatory)
  "playa": { s: 3, c: 4 }, // Fem faggot (Honduras, derogatory)
  "culero hijueputa": { s: 3, c: 5 }, // Fucking asshole (Central America)
  "gran cerote": { s: 3, c: 5 }, // Big piece of shit (Guatemala)
  "maje": { s: 1, c: 4 }, // Dude / idiot (Honduras, Nicaragua)
  "bayunco": { s: 3, c: 4 }, // Redneck / hick (Guatemala)
  "shumo": { s: 3, c: 4 }, // Low-class (El Salvador)
  "shuco": { s: 3, c: 4 }, // Dirty / filthy (Central America)
  "pijazo": { s: 4, c: 4 }, // Dick hit (Honduras)
  "turca": { s: 1, c: 3 }, // Drunk (Central America)
  "pisado": { s: 3, c: 4 }, // Whipped / cuckold (Guatemala)
  "hueco": { s: 3, c: 4 }, // Hollow / faggot (Central America, derogatory)
  "hueca": { s: 3, c: 4 }, // Fem hollow / lesbian (derogatory)
  "chele": { s: 3, c: 4 }, // White person (Central America, can be derogatory)

  // ========================================
  // === Canary Islands Profanity ==========
  // ========================================
  "baifo": { s: 1, c: 4 }, // Goat kid / idiot (Canary Islands)
  "magado": { s: 1, c: 4 }, // Gutless / coward (Canary Islands)
  "engañifla": { s: 3, c: 5 }, // Deception / bullshit (Canary Islands)
  "leche": { s: 3, c: 4 }, // Milk / hit / luck (Canary Islands)
  "lechero": { s: 3, c: 4 }, // Lucky / annoying (Canary Islands)
  "me cago en la leche": { s: 3, c: 5 }, // I shit in the milk (Canary/Spain)
  "me cago en tus muertos": { s: 3, c: 5 }, // I shit on your dead (Spain/Canary)

  // ========================================
  // === Galician Profanity ================
  // ========================================
  "foder": { s: 3, c: 5 }, // To fuck (Galician)
  "fodido": { s: 3, c: 5 }, // Fucked (Galician)
  "fodida": { s: 3, c: 5 }, // Fem fucked (Galician)
  "carallo": { s: 4, c: 4 }, // Dick / damn (Galician)
  "collón": { s: 1, c: 4 }, // Coward / big balls (Galician)
  "collona": { s: 1, c: 4 }, // Fem coward (Galician)
  "me cago na hostia": { s: 3, c: 5 }, // I shit on the host (Galician)
  "cona": { s: 5, c: 5 }, // Cunt (Galician)
  "fillodaputa": { s: 3, c: 4 }, // Son of a bitch (Galician)

  // ========================================
  // === Internet Abbreviations ============
  // ========================================
  "hdp": { s: 5, c: 5 }, // Hijo de puta
  "hdspm": { s: 2, c: 3 }, // Hijo de su puta madre
  "csm": { s: 2, c: 3 }, // Concha su madre
  "ptm": { s: 2, c: 3 }, // Puta madre
  "lcdtm": { s: 2, c: 3 }, // La concha de tu madre
  "lcdll": { s: 2, c: 3 }, // La concha de la lora
  "lpm": { s: 2, c: 3 }, // La puta madre
  "qlia": { s: 2, c: 3 }, // Culiada (Chile abbreviation)
  "qliao": { s: 2, c: 3 }, // Culiao (Chile abbreviation)
  "ctmr": { s: 2, c: 3 }, // Concha tu madre (Peru abbreviation)
  "tmr": { s: 2, c: 3 }, // Tu madre (abbreviation)
  "mrda": { s: 2, c: 3 }, // Mierda (abbreviation)
  "hdlv": { s: 2, c: 3 }, // Hijo de la verga
  "plp": { s: 2, c: 3 }, // Picha loca pana (Venezuela abbreviation)
  "mmgv": { s: 2, c: 3 }, // Mamaguevo (abbreviation)
  "hdlch": { s: 2, c: 3 }, // Hijo de la chingada
  "nmms": { s: 2, c: 3 }, // No mames (Mexico abbreviation)
  "alv": { s: 2, c: 3 }, // A la verga (Mexico abbreviation)
  "stpm": { s: 2, c: 3 }, // Su puta madre
  "pta": { s: 3, c: 4 }, // Puta (abbreviation)
  "jdp": { s: 2, c: 3 }, // Joder puta
  "pqd": { s: 2, c: 3 }, // Porque da (euphemistic abbreviation)
  "qlq": { s: 2, c: 3 }, // Que lo que (Dominican abbreviation)

  // ========================================
  // === Animal + Profanity Insults ========
  // ========================================
  "hijo de perra": { s: 1, c: 4 }, // Son of a bitch (literal dog)
  "perra maldita": { s: 1, c: 4 }, // Damn bitch
  "zorra de mierda": { s: 3, c: 5 }, // Shitty slut
  "burro pendejo": { s: 1, c: 4 }, // Stupid donkey-ass
  "burra pendeja": { s: 1, c: 4 }, // Fem stupid donkey-ass
  "cerdo asqueroso": { s: 1, c: 4 }, // Disgusting pig
  "rata de mierda": { s: 3, c: 5 }, // Shitty rat
  "cucaracha": { s: 4, c: 4 }, // Cockroach (insult)
  "piojo": { s: 1, c: 4 }, // Louse (insult)
  "víbora ponzoñosa": { s: 1, c: 4 }, // Venomous viper
  "animal de mierda": { s: 3, c: 5 }, // Shitty animal
  "bestia": { s: 1, c: 4 }, // Beast / brute
  "bestia de mierda": { s: 3, c: 5 }, // Shitty beast
  "perro maldito": { s: 1, c: 4 }, // Damn dog
  "perra hijueputa": { s: 5, c: 5 }, // Bitch son of a whore
  "mono": { s: 1, c: 4 }, // Monkey (derogatory for person)
  "mona": { s: 1, c: 4 }, // Fem monkey
  "gorila": { s: 1, c: 4 }, // Gorilla (derogatory)
  "asno": { s: 3, c: 4 }, // Donkey / jackass
  "cabra loca": { s: 1, c: 4 }, // Crazy goat
  "hijo de la perra": { s: 1, c: 4 }, // Son of the bitch
  "gusano": { s: 1, c: 4 }, // Worm (Cuba: political traitor)
  "larva": { s: 1, c: 4 }, // Larva / worthless person
  "piojoso de mierda": { s: 3, c: 5 }, // Shitty louse-ridden person
  "garrapata": { s: 1, c: 4 }, // Tick / parasite person

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "gangbang": { s: 3, c: 5 }, // Gangbang
  "trío": { s: 4, c: 4 }, // Threesome
  "orgía": { s: 4, c: 4 }, // Orgy
  "zoofilia": { s: 4, c: 4 }, // Zoophilia
  "bestialismo": { s: 5, c: 5 }, // Bestiality
  "necrofilia": { s: 4, c: 4 }, // Necrophilia
  "pedofilia": { s: 5, c: 5 }, // Pedophilia
  "pedófilo": { s: 5, c: 5 }, // Pedophile
  "pedófila": { s: 5, c: 5 }, // Fem pedophile
  "violador": { s: 5, c: 5 }, // Rapist
  "violadora": { s: 5, c: 5 }, // Fem rapist
  "violación": { s: 5, c: 5 }, // Rape
  "violar": { s: 5, c: 5 }, // To rape
  "abuso sexual": { s: 4, c: 4 }, // Sexual abuse
  "acoso sexual": { s: 4, c: 4 }, // Sexual harassment
  "incesto": { s: 5, c: 5 }, // Incest
  "bukkake": { s: 4, c: 5 }, // Bukkake
  "creampie": { s: 4, c: 5 }, // Creampie
  "facial": { s: 4, c: 4 }, // Facial (sexual)
  "fetiche": { s: 4, c: 4 }, // Fetish
  "dominatriz": { s: 4, c: 4 }, // Dominatrix
  "sumiso": { s: 4, c: 4 }, // Submissive
  "sumisa": { s: 4, c: 4 }, // Fem submissive
  "sadomasoquismo": { s: 4, c: 4 }, // Sadomasochism
  "bondage": { s: 3, c: 4 }, // Bondage
  "squirt": { s: 4, c: 4 }, // Squirt
  "dildo": { s: 5, c: 5 }, // Dildo
  "vibrador": { s: 4, c: 4 }, // Vibrator
  "consolador": { s: 4, c: 4 }, // Dildo (consoler)
  "cogida": { s: 4, c: 5 }, // Fuck session (LatAm)
  "encamarse": { s: 2, c: 3 }, // To get into bed with (euphemism)
  "revolcón": { s: 4, c: 4 }, // Roll in the hay / quickie
  "encamada": { s: 4, c: 4 }, // Bedding session
  "nalguear": { s: 4, c: 4 }, // To spank buttocks
  "nalgueada": { s: 4, c: 4 }, // Spanking
  "dar por el culo": { s: 4, c: 4 }, // To give it in the ass
  "meter por el culo": { s: 4, c: 4 }, // To put it in the ass
  "sexo oral": { s: 4, c: 5 }, // Oral sex
  "sexo anal": { s: 4, c: 4 }, // Anal sex

  // ========================================
  // === Homophobic Slurs (All Dialects) ===
  // ========================================
  "mariconcito": { s: 5, c: 4 }, // Little faggot (diminutive)
  "mariconazo": { s: 5, c: 4 }, // Big faggot (augmentative)
  "mariconada": { s: 5, c: 5 }, // Gay act / bullshit
  "amariconado": { s: 5, c: 4 }, // Effeminate (derogatory)
  "amariconada": { s: 5, c: 4 }, // Fem effeminate
  "afeminado": { s: 5, c: 4 }, // Effeminate (derogatory)
  "afeminada": { s: 5, c: 4 }, // Fem
  "joto": { s: 5, c: 4 }, // Faggot (Mexico)
  "jota": { s: 5, c: 4 }, // Fem faggot (Mexico)
  "jotería": { s: 5, c: 4 }, // Gay stuff (Mexico, derogatory)
  "jotito": { s: 5, c: 4 }, // Little faggot (Mexico)
  "jotón": { s: 5, c: 4 }, // Big faggot (Mexico)
  "volteado": { s: 5, c: 4 }, // Turned / gay (Mexico, derogatory)
  "invertido": { s: 5, c: 4 }, // Inverted / gay (archaic derogatory)
  "invertida": { s: 5, c: 4 }, // Fem inverted
  "sodomita": { s: 5, c: 4 }, // Sodomite
  "sarasa": { s: 5, c: 4 }, // Gay (Argentina, derogatory)
  "trolo": { s: 5, c: 4 }, // Gay (Argentina, derogatory)
  "cola": { s: 5, c: 4 }, // Tail / gay (Colombia, derogatory)
  "cacorro": { s: 5, c: 4 }, // Gay (Colombia, derogatory)
  "fleto": { s: 5, c: 4 }, // Gay (Chile, derogatory)
  "colipato": { s: 5, c: 4 }, // Gay (Chile, derogatory)
  "rosquete": { s: 5, c: 4 }, // Gay (Peru, derogatory)
  "cabro": { s: 5, c: 4 }, // Gay / young man (Chile, derogatory)
  "pájaro": { s: 5, c: 4 }, // Bird / gay (Caribbean, derogatory)
  "machorra": { s: 5, c: 4 }, // Butch lesbian (derogatory)
  "machona": { s: 5, c: 4 }, // Butch lesbian (derogatory)
  "manflora": { s: 5, c: 4 }, // Lesbian (derogatory, LatAm)
  "manfloro": { s: 5, c: 4 }, // Gay man (derogatory, variant)
  "marimacho": { s: 5, c: 4 }, // Tomboy / butch (derogatory)
  "marimacha": { s: 5, c: 4 }, // Butch (derogatory)
  "bujarrón": { s: 5, c: 4 }, // Top in gay sex (derogatory, Caribbean)
  "bugarrón": { s: 5, c: 4 }, // Variant of bujarrón

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  "raja": { s: 4, c: 4 }, // Crack / vagina (vulgar)
  "rajada": { s: 4, c: 4 }, // Split / vagina (vulgar)
  "pepa": { s: 4, c: 3 }, // Pill / vagina (LatAm)
  "papaya": { s: 4, c: 3 }, // Papaya / vagina (Caribbean)
  "toto": { s: 4, c: 3 }, // Vagina (Dominican)
  "totona": { s: 4, c: 3 }, // Big vagina (Dominican)
  "cuca": { s: 4, c: 3 }, // Vagina (Colombia)
  "papo": { s: 4, c: 3 }, // Vagina (Venezuela)
  "conejo": { s: 4, c: 3 }, // Rabbit / vagina (LatAm)
  "empanada": { s: 4, c: 4 }, // Pastry / vagina (slang)
  "arepa": { s: 4, c: 3 }, // Corn cake / lesbian sex (Venezuela/Colombia)
  "paloma": { s: 4, c: 3 }, // Pigeon / penis (Mexico)
  "pájara": { s: 4, c: 3 }, // Bird / penis / gay (regional)
  "riata": { s: 4, c: 3 }, // Lasso / penis (Mexico)
  "chile": { s: 4, c: 3 }, // Chili / penis (Mexico)
  "camote": { s: 4, c: 3 }, // Sweet potato / penis (Mexico)
  "plátano": { s: 4, c: 3 }, // Banana / penis
  "chorizo": { s: 4, c: 3 }, // Sausage / penis
  "salchicha": { s: 4, c: 3 }, // Sausage / penis
  "longaniza": { s: 4, c: 3 }, // Long sausage / penis
  "morcilla": { s: 4, c: 3 }, // Blood sausage / penis
  "huevos": { s: 4, c: 3 }, // Eggs / balls
  "bolas": { s: 4, c: 3 }, // Balls / testicles
  "tanates": { s: 4, c: 3 }, // Balls (Mexico)
  "turmas": { s: 4, c: 3 }, // Testicles (archaic)
  "sobaco": { s: 4, c: 3 }, // Armpit (used pejoratively)
  "nalgón": { s: 4, c: 3 }, // Big-assed (masc)
  "nalgona": { s: 4, c: 3 }, // Big-assed (fem)
  "tetona": { s: 4, c: 3 }, // Big-titted
  "tetón": { s: 4, c: 3 }, // Big-titted (masc, mockingly)
  "chichona": { s: 4, c: 3 }, // Big-boobed (Mexico)
  "culote": { s: 4, c: 3 }, // Big ass

  // ========================================
  // === More Compound Insults =============
  // ========================================
  "idiota de mierda": { s: 1, c: 4 }, // Fucking idiot
  "pendejo de mierda": { s: 3, c: 5 }, // Shitty asshole
  "cabrón de mierda": { s: 3, c: 4 }, // Shitty bastard
  "cerdo de mierda": { s: 3, c: 5 }, // Shitty pig
  "malnacido de mierda": { s: 3, c: 4 }, // Shitty bastard
  "perro de mierda": { s: 3, c: 5 }, // Shitty dog
  "hijo de mil putas": { s: 5, c: 4 }, // Son of a thousand whores
  "hijo de la gran verga": { s: 4, c: 4 }, // Son of the great dick
  "vete al carajo": { s: 1, c: 4 }, // Go to hell
  "vete al diablo": { s: 1, c: 4 }, // Go to the devil
  "vete a freír espárragos": { s: 1, c: 4 }, // Go fry asparagus / get lost
  "a la mierda con todo": { s: 3, c: 5 }, // To shit with everything
  "que te den por culo": { s: 3, c: 4 }, // Get it in the ass
  "me cago en todo": { s: 3, c: 5 }, // I shit on everything
  "me cago en dios": { s: 3, c: 5 }, // I shit on god (Spain, very offensive)
  "me cago en la virgen": { s: 3, c: 5 }, // I shit on the virgin (Spain)
  "me cago en la puta": { s: 5, c: 5 }, // I shit on the whore
  "la madre que te parió": { s: 1, c: 4 }, // The mother that bore you
  "maldita sea": { s: 1, c: 4 }, // Damn it
  "maldita sea tu estampa": { s: 1, c: 4 }, // Damn your image
  "hijo de tu pinche madre": { s: 3, c: 5 }, // Son of your fucking mother (Mexico)
  "pendejo culero": { s: 1, c: 4 }, // Asshole idiot (Mexico)
  "pinche mamón": { s: 3, c: 5 }, // Fucking jerk (Mexico)
  "pinche idiota": { s: 1, c: 4 }, // Fucking idiot (Mexico)
  "pinche mierda": { s: 3, c: 5 }, // Fucking shit (Mexico)
  "pinche basura": { s: 3, c: 5 }, // Fucking trash (Mexico)
  "pedazo de imbécil": { s: 1, c: 4 }, // Piece of imbecile
  "pedazo de basura": { s: 1, c: 4 }, // Piece of trash
  "pedazo de idiota": { s: 1, c: 4 }, // Piece of idiot
  "pedazo de animal": { s: 1, c: 4 }, // Piece of animal
  "maldito hijo de puta": { s: 1, c: 4 }, // Damn son of a bitch
  "maldito cabrón": { s: 3, c: 4 }, // Damn bastard
  "maldita perra": { s: 1, c: 4 }, // Damn bitch
  "grandísimo pendejo": { s: 3, c: 4 }, // Enormous asshole
  "grandísima puta": { s: 5, c: 4 }, // Enormous whore
  "grandísimo cabrón": { s: 3, c: 4 }, // Enormous bastard
  "grandísimo idiota": { s: 1, c: 4 }, // Enormous idiot
  "tremendo pendejo": { s: 3, c: 4 }, // Tremendous asshole
  "tremendo cabrón": { s: 3, c: 4 }, // Tremendous bastard
  "asqueroso de mierda": { s: 3, c: 5 }, // Disgusting shit
  "sucio de mierda": { s: 3, c: 5 }, // Dirty shit
  "mugroso": { s: 1, c: 4 }, // Filthy
  "mugrosa": { s: 1, c: 4 }, // Fem filthy
  "roñoso": { s: 1, c: 4 }, // Scabby / stingy
  "roñosa": { s: 1, c: 4 }, // Fem scabby
  "cochinada": { s: 1, c: 4 }, // Filthy act / piggish behavior
  "porquería": { s: 1, c: 4 }, // Filth / crap / garbage
  "chusma": { s: 1, c: 4 }, // Riffraff / mob
  "gentuza": { s: 1, c: 4 }, // Riffraff / scum
  "escuincle": { s: 1, c: 4 }, // Brat (Mexico, Nahuatl origin)
  "escuincla": { s: 1, c: 4 }, // Fem brat (Mexico)
  "chamaco": { s: 1, c: 4 }, // Kid / brat (Mexico)
  "chamaca": { s: 1, c: 4 }, // Fem kid/brat (Mexico)
  "mocoso": { s: 1, c: 4 }, // Snotty brat
  "mocosa": { s: 1, c: 4 }, // Fem snotty brat
  "canalla": { s: 1, c: 4 }, // Scoundrel / rogue
  "rufián": { s: 1, c: 4 }, // Ruffian / pimp
  "cretino de mierda": { s: 3, c: 5 }, // Shitty cretin
  "subnormal de mierda": { s: 3, c: 5 }, // Shitty retard
  "retrasado mental": { s: 1, c: 4 }, // Mentally retarded (offensive)
  "retrasada mental": { s: 1, c: 4 }, // Fem mentally retarded

  // ========================================
  // === Spelling Evasions: Puta ==========
  // ========================================
  "put4": { s: 4, c: 5 }, // Puta - number substitution
  "pvta": { s: 3, c: 5 }, // Puta - v for u
  "pvt4": { s: 4, c: 5 }, // Puta - double substitution
  "p.u.t.a": { s: 3, c: 5 }, // Puta - dotted evasion (concatenated to avoid lint)
  "pu7a": { s: 3, c: 5 }, // Puta - 7 for t
  "pu+a": { s: 4, c: 5 }, // Puta - symbol substitution
  "putaa": { s: 3, c: 5 }, // Puta - elongated
  "putaaa": { s: 3, c: 5 }, // Puta - elongated more
  "puuuta": { s: 3, c: 5 }, // Puta - elongated u
  "puuta": { s: 3, c: 5 }, // Puta - elongated u
  "pputa": { s: 3, c: 5 }, // Puta - doubled p
  "putah": { s: 3, c: 5 }, // Puta - trailing h evasion
  "put@": { s: 3, c: 5 }, // Puta - @ for a
  "put@a": { s: 3, c: 5 }, // Puta - @ insertion
  "pu†a": { s: 3, c: 5 }, // Puta - dagger for t
  "пuta": { s: 3, c: 5 }, // Puta - Cyrillic п for p
  "púta": { s: 3, c: 5 }, // Puta - accented u
  "pùta": { s: 3, c: 5 }, // Puta - grave u
  "pütá": { s: 3, c: 5 }, // Puta - umlaut/accent evasion
  "p u t a": { s: 3, c: 5 }, // Puta - spaced out
  "p-u-t-a": { s: 3, c: 5 }, // Puta - hyphenated

  // ========================================
  // === Spelling Evasions: Mierda ========
  // ========================================
  "m1erda": { s: 3, c: 5 }, // Mierda - 1 for i
  "m!erda": { s: 3, c: 5 }, // Mierda - ! for i
  "mi3rda": { s: 3, c: 5 }, // Mierda - 3 for e
  "mierd4": { s: 3, c: 5 }, // Mierda - 4 for a
  "m13rda": { s: 4, c: 5 }, // Mierda - double substitution
  "m!3rda": { s: 4, c: 5 }, // Mierda - double substitution
  "mierdaa": { s: 3, c: 5 }, // Mierda - elongated
  "mierdaaa": { s: 3, c: 5 }, // Mierda - elongated more
  "miiierda": { s: 3, c: 5 }, // Mierda - elongated i
  "mierrda": { s: 3, c: 5 }, // Mierda - doubled r
  "mierdah": { s: 3, c: 5 }, // Mierda - trailing h
  "mierda!": { s: 3, c: 5 }, // Mierda - trailing exclamation
  "m.i.e.r.d.a": { s: 3, c: 5 }, // Mierda - dotted
  "m-i-e-r-d-a": { s: 3, c: 5 }, // Mierda - hyphenated
  "m i e r d a": { s: 3, c: 5 }, // Mierda - spaced
  "mierda5": { s: 3, c: 5 }, // Mierda - trailing number
  "mierd@": { s: 3, c: 5 }, // Mierda - @ for a
  "mi€rda": { s: 3, c: 5 }, // Mierda - euro for e

  // ========================================
  // === Spelling Evasions: Verga =========
  // ========================================
  "v3rga": { s: 3, c: 5 }, // Verga - 3 for e
  "verg4": { s: 3, c: 5 }, // Verga - 4 for a
  "v3rg4": { s: 4, c: 5 }, // Verga - double substitution
  "vergaa": { s: 3, c: 5 }, // Verga - elongated
  "vergaaa": { s: 3, c: 5 }, // Verga - elongated more
  "veerga": { s: 3, c: 5 }, // Verga - elongated e
  "verrga": { s: 3, c: 5 }, // Verga - doubled r
  "berg4": { s: 3, c: 5 }, // Verga - b for v
  "berga": { s: 3, c: 5 }, // Verga - b for v
  "beerga": { s: 3, c: 5 }, // Verga - b for v elongated
  "v.e.r.g.a": { s: 3, c: 5 }, // Verga - dotted
  "v-e-r-g-a": { s: 3, c: 5 }, // Verga - hyphenated
  "v e r g a": { s: 3, c: 5 }, // Verga - spaced
  "verg@": { s: 3, c: 5 }, // Verga - @ for a

  // ========================================
  // === Spelling Evasions: Coño ==========
  // ========================================
  "c0ño": { s: 3, c: 5 }, // Coño - 0 for o
  "coñ0": { s: 3, c: 5 }, // Coño - 0 for second o
  "c0ñ0": { s: 3, c: 5 }, // Coño - double 0
  "conio": { s: 3, c: 5 }, // Coño - no tilde
  "c0nio": { s: 3, c: 5 }, // Coño - no tilde, 0 for o
  "conyo": { s: 3, c: 5 }, // Coño - y for ñ
  "c0ny0": { s: 3, c: 5 }, // Coño - y for ñ, 0s
  "coñoo": { s: 3, c: 5 }, // Coño - elongated
  "coñooo": { s: 3, c: 5 }, // Coño - elongated more
  "koño": { s: 3, c: 5 }, // Coño - k for c
  "c.o.ñ.o": { s: 3, c: 5 }, // Coño - dotted
  "coñ@": { s: 3, c: 5 }, // Coño - @ evasion

  // ========================================
  // === Spelling Evasions: Culo ==========
  // ========================================
  "cul0": { s: 3, c: 5 }, // Culo - 0 for o
  "cvlo": { s: 3, c: 5 }, // Culo - v for u
  "cvl0": { s: 4, c: 5 }, // Culo - double substitution
  "kulo": { s: 3, c: 5 }, // Culo - k for c
  "kul0": { s: 3, c: 5 }, // Culo - k for c, 0 for o
  "culoo": { s: 3, c: 5 }, // Culo - elongated
  "culooo": { s: 3, c: 5 }, // Culo - elongated more
  "qulo": { s: 3, c: 5 }, // Culo - q for c
  "c.u.l.o": { s: 3, c: 5 }, // Culo - dotted
  "c-u-l-o": { s: 3, c: 5 }, // Culo - hyphenated
  "c u l o": { s: 3, c: 5 }, // Culo - spaced

  // ========================================
  // === Spelling Evasions: Polla =========
  // ========================================
  "p0lla": { s: 3, c: 5 }, // Polla - 0 for o
  "poll4": { s: 3, c: 5 }, // Polla - 4 for a
  "p0ll4": { s: 4, c: 5 }, // Polla - double substitution
  "poya": { s: 3, c: 5 }, // Polla - y for ll
  "p0ya": { s: 3, c: 5 }, // Polla - y for ll, 0 for o
  "pollaa": { s: 3, c: 5 }, // Polla - elongated
  "p.o.l.l.a": { s: 3, c: 5 }, // Polla - dotted

  // ========================================
  // === Spelling Evasions: Joder =========
  // ========================================
  "j0der": { s: 3, c: 5 }, // Joder - 0 for o
  "jod3r": { s: 3, c: 5 }, // Joder - 3 for e
  "j0d3r": { s: 4, c: 5 }, // Joder - double substitution
  "joderr": { s: 3, c: 5 }, // Joder - doubled r
  "joderrr": { s: 3, c: 5 }, // Joder - tripled r
  "j.o.d.e.r": { s: 3, c: 5 }, // Joder - dotted
  "hoder": { s: 3, c: 5 }, // Joder - h for j evasion

  // ========================================
  // === Spelling Evasions: Puto ==========
  // ========================================
  "put0": { s: 3, c: 5 }, // Puto - 0 for o
  "pvto": { s: 3, c: 5 }, // Puto - v for u
  "pvt0": { s: 4, c: 5 }, // Puto - double substitution
  "pu7o": { s: 3, c: 5 }, // Puto - 7 for t
  "putoo": { s: 3, c: 5 }, // Puto - elongated
  "p-u-t-o": { s: 3, c: 5 }, // Puto - hyphenated
  "p u t o": { s: 3, c: 5 }, // Puto - spaced
  "put@o": { s: 3, c: 5 }, // Puto - @ insertion

  // ========================================
  // === Spelling Evasions: Cabrón ========
  // ========================================
  "cabr0n": { s: 3, c: 5 }, // Cabrón - 0 for o
  "kabron": { s: 3, c: 5 }, // Cabrón - k for c
  "kabr0n": { s: 4, c: 5 }, // Cabrón - k+0 substitution
  "cabronn": { s: 3, c: 5 }, // Cabrón - doubled n
  "c4bron": { s: 3, c: 5 }, // Cabrón - 4 for a
  "cabroooon": { s: 3, c: 5 }, // Cabrón - elongated
  "c.a.b.r.o.n": { s: 3, c: 5 }, // Cabrón - dotted

  // ========================================
  // === Spelling Evasions: Pendejo =======
  // ========================================
  "pend3jo": { s: 3, c: 5 }, // Pendejo - 3 for e
  "pendej0": { s: 3, c: 5 }, // Pendejo - 0 for o
  "p3ndejo": { s: 3, c: 5 }, // Pendejo - 3 for first e
  "p3nd3jo": { s: 3, c: 5 }, // Pendejo - double 3
  "pendejoo": { s: 3, c: 5 }, // Pendejo - elongated
  "pndejo": { s: 3, c: 5 }, // Pendejo - missing e
  "pendjo": { s: 3, c: 5 }, // Pendejo - missing e
  "pen dejo": { s: 3, c: 5 }, // Pendejo - spaced

  // ========================================
  // === Spelling Evasions: Chingar =======
  // ========================================
  "ch1ngar": { s: 3, c: 5 }, // Chingar - 1 for i
  "ch!ngar": { s: 3, c: 5 }, // Chingar - ! for i
  "ching4r": { s: 3, c: 5 }, // Chingar - 4 for a
  "ch1ng4r": { s: 4, c: 5 }, // Chingar - double substitution
  "chingarr": { s: 3, c: 5 }, // Chingar - doubled r
  "xingar": { s: 3, c: 5 }, // Chingar - x for ch
  "chingarle": { s: 3, c: 5 }, // Chingar variant

  // ========================================
  // === Spelling Evasions: Hijo de puta ==
  // ========================================
  "hijodeputa": { s: 3, c: 5 }, // No spaces
  "hijo d puta": { s: 3, c: 5 }, // Missing e
  "ijo de puta": { s: 3, c: 5 }, // Missing h
  "hijoeputa": { s: 3, c: 5 }, // Colombian phonetic
  "ijueputa": { s: 3, c: 5 }, // Short form
  "jueputa": { s: 3, c: 5 }, // Very short form
  "juepuerca": { s: 2, c: 5 }, // Euphemistic variant
  "hpd": { s: 3, c: 5 }, // Hijo puta abbreviation
  "hputa": { s: 3, c: 5 }, // H + puta
  "hijoputamadre": { s: 3, c: 5 }, // Compound

  // ========================================
  // === Spelling Evasions: Maricón =======
  // ========================================
  "mar1con": { s: 3, c: 5 }, // Maricón - 1 for i
  "mar1c0n": { s: 4, c: 5 }, // Maricón - double substitution
  "marik0n": { s: 4, c: 5 }, // Maricón - k+0 substitution
  "marikon": { s: 3, c: 5 }, // Maricón - k for c
  "marikón": { s: 3, c: 5 }, // Maricón - k for c, tilde
  "maric0n": { s: 3, c: 5 }, // Maricón - 0 for o
  "maricon": { s: 3, c: 5 }, // Maricón - no tilde
  "mariconn": { s: 3, c: 5 }, // Maricón - doubled n
  "m4ricon": { s: 3, c: 5 }, // Maricón - 4 for a

  // ========================================
  // === Spelling Evasions: Follar ========
  // ========================================
  "f0llar": { s: 3, c: 5 }, // Follar - 0 for o
  "foll4r": { s: 3, c: 5 }, // Follar - 4 for a
  "foyar": { s: 3, c: 5 }, // Follar - y for ll
  "follaar": { s: 3, c: 5 }, // Follar - elongated
  "foiar": { s: 3, c: 5 }, // Follar - i for ll

  // ========================================
  // === Spelling Evasions: Concha ========
  // ========================================
  "c0ncha": { s: 3, c: 5 }, // Concha - 0 for o
  "conch4": { s: 3, c: 5 }, // Concha - 4 for a
  "c0nch4": { s: 4, c: 5 }, // Concha - double substitution
  "koncha": { s: 3, c: 5 }, // Concha - k for c
  "conxa": { s: 3, c: 5 }, // Concha - x for ch

  // ========================================
  // === Spelling Evasions: Gilipollas ====
  // ========================================
  "gilip0llas": { s: 3, c: 5 }, // Gilipollas - 0 for o
  "gilipoll4s": { s: 3, c: 5 }, // Gilipollas - 4 for a
  "jilipollas": { s: 3, c: 5 }, // Gilipollas - j for g evasion
  "gilipoyyas": { s: 3, c: 5 }, // Gilipollas - y for ll

  // ========================================
  // === Spelling Evasions: Pinga =========
  // ========================================
  "p1nga": { s: 3, c: 5 }, // Pinga - 1 for i
  "ping4": { s: 3, c: 5 }, // Pinga - 4 for a
  "p!nga": { s: 3, c: 5 }, // Pinga - ! for i
  "pinnga": { s: 3, c: 5 }, // Pinga - doubled n

  // ========================================
  // === Spelling Evasions: CTM / HDPs ====
  // ========================================
  "c.t.m": { s: 3, c: 5 }, // CTM dotted
  "h.d.p": { s: 3, c: 5 }, // HDP dotted
  "h d p": { s: 3, c: 5 }, // HDP spaced
  "c t m": { s: 3, c: 5 }, // CTM spaced
  "hijos de puta": { s: 3, c: 5 }, // Plural sons of bitches
  "hijas de puta": { s: 3, c: 5 }, // Plural daughters of bitches

  // ========================================
  // === Compound Phrases: Me cago en... ==
  // ========================================
  "me cago en tu puta madre": { s: 5, c: 5 }, // I shit on your whore mother
  "me cago en la hostia": { s: 3, c: 5 }, // I shit on the host
  "me cago en la puta madre que te parió": { s: 5, c: 5 }, // I shit on the whore mother who bore you
  "me cago en tu padre": { s: 1, c: 4 }, // I shit on your father
  "me cago en tu puta vida": { s: 5, c: 5 }, // I shit on your whore life
  "me cago en tus muelas": { s: 3, c: 5 }, // I shit on your teeth (euphemism)
  "me cago en la mar": { s: 3, c: 5 }, // I shit on the sea (euphemism)
  "me cago en la leche que mamaste": { s: 3, c: 5 }, // I shit on the milk you suckled
  "me cago en todo lo que se menea": { s: 3, c: 5 }, // I shit on everything that moves
  "me cago en la ostia": { s: 3, c: 5 }, // Variant spelling
  "me cago en su puta madre": { s: 5, c: 5 }, // I shit on his/her whore mother

  // ========================================
  // === Compound Phrases: Vete a... ======
  // ========================================
  "vete a la verga": { s: 4, c: 5 }, // Go to the dick (Mexico)
  "vete a tomar por culo": { s: 3, c: 5 }, // Go take it up the ass (Spain)
  "vete a cagar": { s: 3, c: 5 }, // Go take a shit
  "vete a la puta mierda": { s: 3, c: 5 }, // Go to the fucking shit
  "vete a la puta calle": { s: 3, c: 5 }, // Go to the fucking street
  "vete al coño de tu madre": { s: 5, c: 5 }, // Go to your mother's cunt
  "vete a mamar": { s: 4, c: 5 }, // Go suck dick
  "vete a la concha de tu madre": { s: 5, c: 5 }, // Go to your mother's cunt (Argentina)
  "ándate a la mierda": { s: 3, c: 5 }, // Go to shit (Argentina)
  "ándate a la concha de tu madre": { s: 5, c: 5 }, // Go to your mother's cunt (Argentina)
  "ándate a cagar": { s: 3, c: 5 }, // Go shit yourself (Argentina)
  "iros a la mierda": { s: 3, c: 5 }, // Go to shit (plural, Spain)
  "iros a tomar por culo": { s: 3, c: 5 }, // Go get fucked (plural, Spain)

  // ========================================
  // === Compound Phrases: Chupa... =======
  // ========================================
  "chúpame la pija": { s: 4, c: 5 }, // Suck my dick (Argentina, with accent)
  "chúpame la verga": { s: 4, c: 5 }, // Suck my dick (Mexico)
  "chúpame el culo": { s: 3, c: 5 }, // Suck my ass
  "chúpamela": { s: 3, c: 5 }, // Suck it (for me)
  "chupala": { s: 3, c: 5 }, // Suck it
  "chupa mi polla": { s: 4, c: 5 }, // Suck my cock (Spain)
  "chupa mi verga": { s: 4, c: 5 }, // Suck my dick (LatAm)
  "chupa mi pija": { s: 4, c: 5 }, // Suck my dick (Argentina)
  "chupa mi pinga": { s: 4, c: 5 }, // Suck my dick (Caribbean)
  "chupapija": { s: 4, c: 5 }, // Dick sucker (Argentina)
  "chupapinga": { s: 4, c: 5 }, // Dick sucker (Caribbean)

  // ========================================
  // === Compound Phrases: Métete... ======
  // ========================================
  "métete la verga por el culo": { s: 4, c: 5 }, // Stick the dick up your ass
  "métete un dedo": { s: 3, c: 5 }, // Stick a finger in yourself
  "métete la polla": { s: 4, c: 5 }, // Stick the dick in yourself
  "mételo por el culo": { s: 3, c: 5 }, // Stick it up the ass
  "métete la mierda": { s: 3, c: 5 }, // Stick the shit in yourself
  "metételo por donde te quepa": { s: 3, c: 5 }, // Stick it wherever it fits

  // ========================================
  // === Compound Phrases: Que te... ======
  // ========================================
  "que te follen": { s: 3, c: 5 }, // Go get fucked (Spain)
  "que te den": { s: 3, c: 5 }, // May they give it to you
  "que te la metan": { s: 3, c: 5 }, // May they stick it in you
  "que te la chupen": { s: 3, c: 5 }, // May they suck it for you
  "que se joda": { s: 3, c: 5 }, // Fuck it / let it be screwed
  "que se jodan": { s: 3, c: 5 }, // Fuck them
  "que te parta un rayo": { s: 3, c: 5 }, // May lightning split you
  "que te folle un pez": { s: 3, c: 5 }, // May a fish fuck you (Spain)

  // ========================================
  // === Compound Phrases: Additional =====
  // ========================================
  "te voy a partir la madre": { s: 3, c: 5 }, // I'm going to break your mother (Mexico)
  "te voy a romper la madre": { s: 3, c: 5 }, // I'm going to break your mother
  "te voy a chingar": { s: 3, c: 5 }, // I'm going to fuck you up (Mexico)
  "te voy a verguear": { s: 3, c: 5 }, // I'm going to beat you up (Central America)
  "te voy a dar en la madre": { s: 3, c: 5 }, // I'm going to hit you hard (Mexico)
  "te voy a dar una verguiza": { s: 3, c: 5 }, // I'm going to give you a beating (Mexico)
  "te voy a meter una hostia": { s: 3, c: 5 }, // I'm going to slap you (Spain)
  "te parto la cara": { s: 3, c: 5 }, // I'll break your face
  "te reviento": { s: 3, c: 5 }, // I'll bust you open
  "te mato": { s: 3, c: 5 }, // I'll kill you
  "ojalá te mueras": { s: 5, c: 5 }, // I hope you die
  "ojalá te pudras": { s: 3, c: 5 }, // I hope you rot
  "púdrete": { s: 3, c: 5 }, // Rot
  "que te pudras": { s: 3, c: 5 }, // May you rot
  "vete a morir": { s: 5, c: 5 }, // Go die
  "mátate": { s: 5, c: 5 }, // Kill yourself

  // ========================================
  // === More Internet Abbreviations ======
  // ========================================
  "lptm": { s: 2, c: 3 }, // La puta madre
  "lctm": { s: 2, c: 3 }, // La concha tu madre
  "cdtm": { s: 2, c: 3 }, // Concha de tu madre
  "dlv": { s: 2, c: 3 }, // De la verga (Mexico)
  "qlp": { s: 2, c: 3 }, // Que le pasa / Culpa
  "wtf": { s: 2, c: 2 }, // What the fuck (used in Spanish internet)
  "stfu": { s: 3, c: 5 }, // Shut the fuck up (used in Spanish internet)
  "plm": { s: 2, c: 3 }, // Por la madre
  "pqtp": { s: 2, c: 3 }, // Porque te pario
  "htpm": { s: 2, c: 3 }, // Hijo de tu puta madre
  "lpmqtp": { s: 2, c: 3 }, // La puta madre que te parió
  "lrpm": { s: 2, c: 3 }, // La re puta madre (Argentina)
  "lrctm": { s: 2, c: 3 }, // La re concha de tu madre (Argentina)
  "lqlp": { s: 2, c: 3 }, // La que lo parió
  "mcetm": { s: 2, c: 3 }, // Me cago en tu madre
  "lptqtp": { s: 2, c: 3 }, // La puta que te parió
  "lpqmp": { s: 2, c: 3 }, // La puta que me parió
  "csmare": { s: 2, c: 3 }, // Concha su madre (Peru)
  "ctmare": { s: 2, c: 3 }, // Conchetumadre (Chile)
  "weon ql": { s: 2, c: 3 }, // Weón culiao (Chile)
  "wn ql": { s: 2, c: 3 }, // Weón culiao abbreviated (Chile)
  "qlo": { s: 2, c: 3 }, // Culiao abbreviated variant
  "pndjo": { s: 2, c: 3 }, // Pendejo abbreviated
  "vrga": { s: 2, c: 3 }, // Verga abbreviated
  "hdsptm": { s: 2, c: 3 }, // Hijo de su puta madre
  "lcdlch": { s: 2, c: 3 }, // La concha de la chingada
  "csmr": { s: 2, c: 3 }, // Concha su madre (Peru variant)
  "csmdre": { s: 2, c: 3 }, // Concha su madre variant
  "tqp": { s: 2, c: 3 }, // Te quiero putear
  "nmmn": { s: 2, c: 3 }, // No mames / No manches
  "nmn": { s: 2, c: 3 }, // No mames no

  // ========================================
  // === Venezuelan Profanity =============
  // ========================================
  "coño e la madre": { s: 5, c: 5 }, // Cunt of the mother (Venezuela)
  "vergación": { s: 4, c: 4 }, // Dick thing / amazing thing (Venezuela)
  "vergantín": { s: 4, c: 4 }, // Big-dicked (Venezuela)
  "guevonada": { s: 1, c: 4 }, // Idiotic thing (Venezuela)
  "güevonada": { s: 1, c: 4 }, // Idiotic thing with diaeresis
  "jalabola": { s: 3, c: 4 }, // Ball-puller / sycophant (Venezuela)
  "jalabolas": { s: 3, c: 4 }, // Plural sycophant (Venezuela)
  "pajúa": { s: 1, c: 4 }, // Fem idiot (Venezuela)
  "pajúos": { s: 1, c: 4 }, // Plural idiot (Venezuela)
  "arrechísimo": { s: 3, c: 4 }, // Super horny/angry (Venezuela)
  "arrechísima": { s: 3, c: 4 }, // Fem super horny/angry
  "mmgvo": { s: 3, c: 4 }, // Mamaguevo abbreviated (Venezuela)
  "maldito coño": { s: 5, c: 5 }, // Damn cunt (Venezuela)
  "ladilla": { s: 3, c: 4 }, // Crab louse / annoying person (Venezuela)
  "ladillado": { s: 3, c: 4 }, // Annoyed (Venezuela)
  "ladillada": { s: 3, c: 4 }, // Fem annoyed (Venezuela)
  "vergacielo": { s: 4, c: 4 }, // Dick heaven / exclamation (Venezuela)
  "coroto": { s: 3, c: 4 }, // Thing / can be pejorative (Venezuela)
  "catire de mierda": { s: 3, c: 5 }, // Shitty blonde (Venezuela)
  "sifrino": { s: 3, c: 4 }, // Snob (Venezuela)
  "sifrina": { s: 3, c: 4 }, // Fem snob (Venezuela)
  "tierrúo": { s: 3, c: 4 }, // Country bumpkin (Venezuela)
  "tierrúa": { s: 3, c: 4 }, // Fem country bumpkin (Venezuela)
  "mamagüevada": { s: 4, c: 4 }, // Dicksucker behavior (Venezuela)

  // ========================================
  // === Chilean Profanity ================
  // ========================================
  "conchetumare": { s: 5, c: 5 }, // Your mother's cunt (Chile variant)
  "conchetumaire": { s: 2, c: 3 }, // Euphemistic variant (Chile)
  "conchesumare": { s: 5, c: 5 }, // His mother's cunt (Chile)
  "culiao de mierda": { s: 3, c: 5 }, // Shitty ass-fucker (Chile)
  "wea de mierda": { s: 3, c: 5 }, // Shitty thing (Chile)
  "weá": { s: 3, c: 5 }, // Thing/bullshit with accent (Chile)
  "weveo": { s: 3, c: 5 }, // Joking around / bullshit (Chile)
  "webeo": { s: 3, c: 5 }, // Joking around / bullshit (Chile variant)
  "webear": { s: 3, c: 4 }, // To joke/bother (Chile)
  "wevear": { s: 3, c: 4 }, // To joke/bother (Chile variant)
  "sacoewea": { s: 3, c: 4 }, // Variant of sacowea (Chile)
  "pelotuó": { s: 1, c: 4 }, // Idiot (Chile)
  "aweona": { s: 1, c: 4 }, // Fem fucking idiot (Chile)
  "aweoná": { s: 3, c: 4 }, // Fem with accent (Chile)
  "conchatumare": { s: 3, c: 4 }, // Variant (Chile)
  "la wea": { s: 3, c: 5 }, // The thing / the bullshit (Chile)
  "esa wea": { s: 3, c: 5 }, // That thing/bullshit (Chile)
  "qué wea": { s: 3, c: 4 }, // What the hell (Chile)
  "puta la wea": { s: 3, c: 5 }, // Fuck the thing (Chile)
  "weta": { s: 1, c: 4 }, // Idiot (Chile variant)
  "fleta": { s: 3, c: 4 }, // Fem faggot (Chile)
  "maraca": { s: 3, c: 4 }, // Slut (Chile)
  "maracón": { s: 3, c: 4 }, // Gay (Chile, derogatory)
  "penca": { s: 3, c: 5 }, // Lame / shitty (Chile)
  "rajar": { s: 3, c: 5 }, // To slash / to talk shit (Chile)
  "roto": { s: 3, c: 4 }, // Broken / low-class (Chile)
  "rota": { s: 3, c: 4 }, // Fem low-class (Chile)
  "flaite": { s: 3, c: 4 }, // Low-class / trashy (Chile)
  "cuático": { s: 3, c: 4 }, // Intense / crazy (Chile)
  "gueón": { s: 1, c: 5 }, // Dude/idiot (Chile, alternate spelling)
  "gueona": { s: 3, c: 4 }, // Fem (Chile)
  "hueá": { s: 3, c: 5 }, // Thing/bullshit (Chile variant)
  "wevón": { s: 3, c: 4 }, // Variant of weón (Chile)
  "wevona": { s: 3, c: 4 }, // Fem variant (Chile)

  // ========================================
  // === Peruvian Profanity ===============
  // ========================================
  "conchasumadre": { s: 3, c: 4 }, // Variant (Peru)
  "recontra mierda": { s: 3, c: 5 }, // Super shit (Peru)
  "ayayay cojudo": { s: 1, c: 4 }, // Oh idiot (Peru exclamation)
  "asu mare": { s: 2, c: 3 }, // His mother / Oh wow (Peru, euphemism)
  "asumare": { s: 3, c: 4 }, // Compound variant (Peru)
  "reconchesumadre": { s: 3, c: 4 }, // Emphatic variant (Peru)
  "huevón de mierda": { s: 1, c: 4 }, // Shitty idiot (Peru)
  "cojudo de mierda": { s: 1, c: 4 }, // Shitty idiot (Peru)
  "carajo de mierda": { s: 3, c: 5 }, // Shitty damn (Peru)
  "cholo de mierda": { s: 5, c: 5 }, // Shitty indigenous person (Peru, racist)
  "chola de mierda": { s: 5, c: 5 }, // Fem shitty indigenous person (Peru, racist)
  "serrano de mierda": { s: 5, c: 5 }, // Shitty highland person (Peru, racist)
  "serrana de mierda": { s: 5, c: 4 }, // Fem (Peru, racist)
  "cholo": { s: 3, c: 4 }, // Indigenous/mixed race (Peru, can be derogatory)
  "chola": { s: 3, c: 4 }, // Fem indigenous/mixed race (Peru, can be derogatory)
  "serrano": { s: 3, c: 4 }, // Highland person (Peru, can be derogatory)
  "serrana": { s: 3, c: 4 }, // Fem highland person
  "selvático": { s: 3, c: 4 }, // Jungle person (Peru, derogatory)
  "selvática": { s: 3, c: 4 }, // Fem jungle person (Peru, derogatory)
  "pituca": { s: 3, c: 4 }, // Snob (Peru)
  "pituco": { s: 3, c: 4 }, // Masc snob (Peru)
  "achorado": { s: 3, c: 4 }, // Aggressive/brash (Peru)
  "achorada": { s: 3, c: 4 }, // Fem aggressive (Peru)
  "maldita conchesumadre": { s: 5, c: 5 }, // Damn cunt mother (Peru)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "hijuemichica": { s: 2, c: 3 }, // Euphemistic hijueputa (Colombia)
  "gonorrea malparida": { s: 3, c: 4 }, // Compound insult (Colombia)
  "pirobo hijueputa": { s: 3, c: 4 }, // Compound insult (Colombia)
  "piroba malparida": { s: 3, c: 4 }, // Compound insult (Colombia)
  "casposo": { s: 3, c: 4 }, // Dandruff-y / lowlife (Colombia)
  "casposa": { s: 3, c: 4 }, // Fem dandruff-y (Colombia)
  "zarrapastroso": { s: 3, c: 4 }, // Ragged / unkempt (Colombia)
  "zarrapastrosa": { s: 3, c: 4 }, // Fem ragged (Colombia)
  "desechable": { s: 3, c: 4 }, // Disposable / homeless person (Colombia, very derogatory)
  "ñero hijueputa": { s: 3, c: 4 }, // Low-class son of a bitch (Colombia)
  "gamín": { s: 3, c: 4 }, // Street kid (Colombia, derogatory)
  "gamina": { s: 3, c: 4 }, // Fem street kid (Colombia)
  "guache": { s: 3, c: 4 }, // Crude / vulgar person (Colombia)
  "ñorzo": { s: 3, c: 5 }, // Turd / piece of shit (Colombia)
  "mondongo": { s: 3, c: 4 }, // Tripe / guts (Colombia, used pejoratively)
  "caremondá": { s: 4, c: 4 }, // Dick face (Colombia variant)
  "carechimbo": { s: 3, c: 4 }, // Masc variant of carechimba (Colombia)
  "caremierda": { s: 3, c: 5 }, // Shit face (Colombia)
  "carehijueputa": { s: 3, c: 4 }, // Son of a bitch face (Colombia)
  "caremalparido": { s: 3, c: 4 }, // Badly-born face (Colombia)

  // ========================================
  // === More Cuban Profanity =============
  // ========================================
  "comepinga de mierda": { s: 4, c: 5 }, // Shitty dick eater (Cuba)
  "comepingaje": { s: 4, c: 4 }, // Dick eating behavior (Cuba)
  "comemierdería": { s: 3, c: 5 }, // Shit eating behavior (Cuba)
  "singación": { s: 3, c: 5 }, // Fucking session (Cuba)
  "singadero": { s: 3, c: 5 }, // Fucking place (Cuba)
  "descarao": { s: 3, c: 5 }, // Shameless (Cuba phonetic)
  "descará": { s: 3, c: 4 }, // Fem shameless (Cuba)
  "mariconcería": { s: 3, c: 4 }, // Faggotry (Cuba)
  "pingazo": { s: 4, c: 4 }, // Dick hit (Cuba)
  "yuma de mierda": { s: 3, c: 5 }, // Shitty foreigner (Cuba)
  "asere": { s: 3, c: 4 }, // Dude (Cuba, can be derogatory)
  "monina": { s: 1, c: 4 }, // Monkey / ugly (Cuba derogatory)
  "templa": { s: 3, c: 5 }, // Fuck / sex (Cuba)
  "templeta": { s: 3, c: 5 }, // Quick fuck (Cuba)
  "templú": { s: 3, c: 4 }, // Horny person (Cuba)

  // ========================================
  // === More Puerto Rican Profanity ======
  // ========================================
  "bicho de mierda": { s: 4, c: 5 }, // Shitty dick (Puerto Rico)
  "come bicho": { s: 4, c: 4 }, // Dick eater (Puerto Rico)
  "puñetazo": { s: 3, c: 4 }, // Punch / damn hit (Puerto Rico)
  "cabronísimo": { s: 3, c: 4 }, // Super bastard (Puerto Rico)
  "cabrón hijo de puta": { s: 3, c: 4 }, // Bastard son of a bitch (Puerto Rico)
  "mamao de mierda": { s: 3, c: 5 }, // Shitty sucker (Puerto Rico)
  "tecato": { s: 3, c: 4 }, // Drug addict / junkie (Puerto Rico)
  "tecata": { s: 3, c: 4 }, // Fem drug addict (Puerto Rico)
  "tiraera": { s: 3, c: 4 }, // Dis track / attack (Puerto Rico)
  "maldito bicho": { s: 4, c: 4 }, // Damn dick (Puerto Rico)
  "canto e bicho": { s: 3, c: 4 }, // Big dick / big bastard (Puerto Rico)
  "pichón": { s: 1, c: 4 }, // Pigeon / fool (Puerto Rico)
  "pendejo e mierda": { s: 3, c: 5 }, // Shitty asshole (Puerto Rico phonetic)

  // ========================================
  // === More Central American Profanity ==
  // ========================================
  "vergo": { s: 3, c: 4 }, // A lot / big (Guatemala)
  "mula": { s: 3, c: 4 }, // Mule / clumsy (Guatemala)
  "canche": { s: 3, c: 4 }, // Blonde (Guatemala, can be derogatory)
  "cholero": { s: 3, c: 4 }, // Low-class (Guatemala)
  "cholera": { s: 3, c: 4 }, // Fem low-class (Guatemala)
  "pizote": { s: 1, c: 4 }, // Coati / idiot (Costa Rica)
  "carepicha de mierda": { s: 4, c: 5 }, // Shitty dickface (Costa Rica)
  "playo de mierda": { s: 3, c: 5 }, // Shitty faggot (Honduras)
  "culero maje": { s: 3, c: 4 }, // Asshole dude (Honduras)
  "cerote hijueputa": { s: 3, c: 5 }, // Shitty son of a bitch (Guatemala/El Salvador)
  "gran cerote de mierda": { s: 3, c: 5 }, // Big shitty turd (Guatemala)
  "bicho raro": { s: 3, c: 4 }, // Weirdo (Central America)
  "picha floja": { s: 4, c: 4 }, // Limp dick (Costa Rica)
  "picha corta": { s: 4, c: 4 }, // Short dick (Costa Rica)
  "maje hijueputa": { s: 3, c: 4 }, // Dude son of a bitch (Honduras/Nicaragua)
  "idiay": { s: 3, c: 4 }, // What the hell (Costa Rica)
  "puñal": { s: 3, c: 4 }, // Dagger / faggot (Honduras, derogatory)
  "culiolo": { s: 3, c: 4 }, // Faggot (El Salvador, derogatory)
  "chero": { s: 3, c: 4 }, // Friend / dude (El Salvador, can be derogatory)
  "bolado": { s: 3, c: 4 }, // Thing / situation (El Salvador)
  "vergón hijueputa": { s: 4, c: 4 }, // Big-dicked son of a bitch (Central America)
  "yuca": { s: 4, c: 4 }, // Cassava / difficult / penis (Central America)
  "babosada": { s: 1, c: 4 }, // Stupid thing / drool act (Central America)
  "babosadas": { s: 1, c: 4 }, // Plural stupid things
  "tontería": { s: 1, c: 4 }, // Stupidity
  "tonterías": { s: 1, c: 4 }, // Plural stupidities
  "estupidez": { s: 1, c: 4 }, // Stupidity
  "estupideces": { s: 1, c: 4 }, // Plural stupidities
  "pajada": { s: 3, c: 4 }, // Wanky thing / nonsense (Central America)

  // ========================================
  // === Equatorial Guinea Spanish ========
  // ========================================
  "bubi de mierda": { s: 5, c: 4 }, // Ethnic slur (Equatorial Guinea)
  "fang de mierda": { s: 5, c: 4 }, // Ethnic slur (Equatorial Guinea)
  "mangina": { s: 4, c: 3 }, // Coward / effeminate (Eq. Guinea)
  "macho de mierda": { s: 3, c: 5 }, // Shitty macho (Eq. Guinea)

  // ========================================
  // === Transphobic Slurs ================
  // ========================================
  "travelo": { s: 5, c: 4 }, // Derogatory for trans person (Spain)
  "travesti": { s: 5, c: 4 }, // Transvestite (can be derogatory)
  "travestido": { s: 5, c: 4 }, // Transvestite (derogatory usage)
  "travestida": { s: 5, c: 4 }, // Fem transvestite
  "transformista": { s: 5, c: 4 }, // Drag queen (can be derogatory)
  "transexual de mierda": { s: 5, c: 5 }, // Shitty transsexual
  "maricón travesti": { s: 5, c: 4 }, // Faggot transvestite
  "tranny": { s: 5, c: 5 }, // English loan, used in Spanish
  "hombre con falda": { s: 5, c: 4 }, // Man in a skirt (derogatory)

  // ========================================
  // === More Racial Slurs ================
  // ========================================
  "indio": { s: 5, c: 4 }, // Indian / indigenous (often derogatory in LatAm)
  "india": { s: 5, c: 4 }, // Fem Indian/indigenous (derogatory)
  "indio de mierda": { s: 5, c: 5 }, // Shitty Indian (racist)
  "india de mierda": { s: 5, c: 5 }, // Fem shitty Indian (racist)
  "indio pata rajada": { s: 5, c: 4 }, // Indian with cracked feet (very racist, Colombia)
  "negro de mierda": { s: 5, c: 5 }, // Shitty Black person (racist)
  "negra de mierda": { s: 5, c: 5 }, // Fem shitty Black person (racist)
  "negro del orto": { s: 5, c: 4 }, // Black from the ass (Argentina, very racist)
  "negra del orto": { s: 5, c: 4 }, // Fem variant (Argentina, very racist)
  "negrazo": { s: 5, c: 4 }, // Augmentative Black (racist)
  "negraco": { s: 1, c: 4 }, // Ugly Black (very racist)
  "negro sucio": { s: 5, c: 4 }, // Dirty Black (racist)
  "negra sucia": { s: 5, c: 4 }, // Fem dirty Black (racist)
  "chino de mierda": { s: 5, c: 5 }, // Shitty Chinese (racist, used for any Asian)
  "china de mierda": { s: 5, c: 5 }, // Fem shitty Chinese (racist)
  "chino cochino": { s: 5, c: 4 }, // Dirty Chinese (racist)
  "gitano de mierda": { s: 5, c: 5 }, // Shitty gypsy (racist)
  "gitana de mierda": { s: 5, c: 5 }, // Fem shitty gypsy (racist)
  "moro de mierda": { s: 5, c: 5 }, // Shitty Moor (racist, Spain)
  "mora de mierda": { s: 5, c: 5 }, // Fem shitty Moor (racist)
  "sudaca de mierda": { s: 5, c: 5 }, // Shitty South American (racist, Spain)
  "gallego de mierda": { s: 5, c: 5 }, // Shitty Galician (used in Argentina for Spanish people)
  "gringo de mierda": { s: 5, c: 5 }, // Shitty gringo (LatAm)
  "gabacho de mierda": { s: 5, c: 5 }, // Shitty French person (Spain)
  "pocho": { s: 5, c: 4 }, // Americanized Mexican (Mexico, derogatory)
  "pocha": { s: 5, c: 4 }, // Fem Americanized Mexican
  "charnego": { s: 5, c: 4 }, // Derogatory for non-Catalan in Catalonia
  "charnega": { s: 5, c: 4 }, // Fem charnego
  "morenito": { s: 5, c: 4 }, // Diminutive dark-skinned (condescending)
  "morenita": { s: 5, c: 4 }, // Fem diminutive dark-skinned
  "zambo": { s: 5, c: 4 }, // Mixed Black/indigenous (can be derogatory)
  "zamba": { s: 5, c: 4 }, // Fem zambo
  "cateto": { s: 5, c: 4 }, // Hick / bumpkin (Spain)
  "cateta": { s: 5, c: 4 }, // Fem hick (Spain)
  "paleto": { s: 5, c: 4 }, // Hick / yokel (Spain)
  "paleta": { s: 5, c: 4 }, // Fem hick (Spain)

  // ========================================
  // === Ableist Slurs ====================
  // ========================================
  "mogólico": { s: 5, c: 4 }, // Variant of mongólico (very offensive)
  "mogólica": { s: 5, c: 4 }, // Fem variant
  "down": { s: 3, c: 4 }, // Down syndrome used as insult
  "síndrome de down": { s: 5, c: 4 }, // Down syndrome used as insult
  "tullido": { s: 5, c: 4 }, // Cripple (offensive)
  "tullida": { s: 5, c: 4 }, // Fem cripple
  "lisiado": { s: 5, c: 4 }, // Crippled (offensive)
  "lisiada": { s: 5, c: 4 }, // Fem crippled
  "deforme": { s: 5, c: 4 }, // Deformed (as insult)
  "anormal": { s: 5, c: 4 }, // Abnormal (used as insult)
  "demente": { s: 5, c: 4 }, // Demented (as insult)
  "loco de remate": { s: 5, c: 4 }, // Completely crazy (offensive)
  "loca de remate": { s: 5, c: 4 }, // Fem completely crazy
  "enfermo mental": { s: 5, c: 4 }, // Mentally ill (as insult)
  "enferma mental": { s: 5, c: 4 }, // Fem mentally ill
  "psicópata": { s: 5, c: 4 }, // Psychopath (as insult)
  "esquizofrénico": { s: 5, c: 4 }, // Schizophrenic (as insult)
  "esquizofrénica": { s: 5, c: 4 }, // Fem schizophrenic
  "autista": { s: 5, c: 4 }, // Autistic (used as insult in Spanish internet)
  "espástico": { s: 5, c: 4 }, // Spastic (offensive)
  "espástica": { s: 5, c: 4 }, // Fem spastic

  // ========================================
  // === More Sexual Terms ================
  // ========================================
  "misionero": { s: 4, c: 4 }, // Missionary position
  "perrito": { s: 4, c: 4 }, // Doggy style
  "cuatro": { s: 4, c: 4 }, // On all fours (sexual)
  "a cuatro patas": { s: 4, c: 4 }, // On all fours
  "de perrito": { s: 4, c: 4 }, // Doggy style
  "beso negro": { s: 4, c: 4 }, // Rimjob
  "lluvia dorada": { s: 4, c: 4 }, // Golden shower
  "fisting": { s: 4, c: 5 }, // Fisting (English loan)
  "doble penetración": { s: 4, c: 4 }, // Double penetration
  "mamada profunda": { s: 4, c: 4 }, // Deep throat
  "garganta profunda": { s: 4, c: 4 }, // Deep throat
  "sexo duro": { s: 4, c: 4 }, // Hard sex
  "sexo salvaje": { s: 4, c: 4 }, // Wild sex
  "paja rusa": { s: 4, c: 5 }, // Russian wank / titfuck
  "cubana": { s: 4, c: 5 }, // Titfuck (Spain term)
  "francés": { s: 4, c: 5 }, // French / oral sex (Spain slang)
  "griego": { s: 4, c: 4 }, // Greek / anal sex (Spain slang)
  "trolero": { s: 4, c: 4 }, // Related to trolling/whoring
  "garchar": { s: 4, c: 5 }, // To fuck (Argentina variant spelling)
  "pisar": { s: 4, c: 5 }, // To step on / to fuck (LatAm)
  "clavar": { s: 4, c: 5 }, // To nail / to fuck
  "clavarse": { s: 4, c: 5 }, // To nail oneself / to fuck
  "empotrar": { s: 4, c: 5 }, // To ram / to fuck hard (Spain)
  "empotramiento": { s: 4, c: 5 }, // Hard fuck (Spain)
  "empotrador": { s: 4, c: 5 }, // Hard fucker (Spain)
  "empotradora": { s: 4, c: 5 }, // Fem hard fucker (Spain)
  "dar duro": { s: 4, c: 5 }, // To give it hard / to fuck hard
  "darle duro": { s: 4, c: 4 }, // To give it to them hard
  "romper": { s: 4, c: 5 }, // To break / to fuck hard
  "romperla": { s: 4, c: 5 }, // To break it / to fuck hard
  "cepillar": { s: 4, c: 5 }, // To brush / to fuck (Mexico/LatAm)
  "cepillarse": { s: 4, c: 5 }, // To fuck (reflexive)
  "montar": { s: 4, c: 5 }, // To mount / to ride / to fuck
  "montarse": { s: 4, c: 4 }, // To mount oneself
  "cabalgar": { s: 4, c: 5 }, // To ride / to fuck (on top)
  "acabar": { s: 4, c: 4 }, // To finish / to cum
  "acabarse": { s: 4, c: 4 }, // To finish / to cum
  "lechada": { s: 4, c: 4 }, // Cum shot
  "lechazo": { s: 4, c: 4 }, // Cum blast
  "lefazo": { s: 4, c: 4 }, // Cum blast (Spain slang)
  "lefa": { s: 4, c: 4 }, // Cum (Spain slang)
  "fluidos": { s: 4, c: 4 }, // Fluids (sexual context)
  "lubricante": { s: 4, c: 4 }, // Lubricant
  "consolarse": { s: 4, c: 4 }, // To console oneself / to use a dildo
  "chupón": { s: 4, c: 4 }, // Sucker / hickey
  "chupetón": { s: 4, c: 4 }, // Hickey
  "morbo": { s: 4, c: 4 }, // Morbid desire / kink (Spain)
  "morboso": { s: 4, c: 4 }, // Kinky / perverted
  "morbosa": { s: 4, c: 4 }, // Fem kinky
  "calenturiento": { s: 4, c: 4 }, // Horny person
  "calenturienta": { s: 4, c: 4 }, // Fem horny person
  "salido": { s: 4, c: 4 }, // Horny (Spain)
  "salida": { s: 4, c: 4 }, // Fem horny (Spain)
  "pajote": { s: 4, c: 4 }, // Big wank
  "manuela": { s: 4, c: 4 }, // Wank (slang name)
  "hacerse una manuela": { s: 4, c: 4 }, // To wank
  "cascársela": { s: 4, c: 4 }, // To wank (Spain)
  "pelársela": { s: 4, c: 4 }, // To wank (Mexico)
  "jalársela": { s: 4, c: 4 }, // To wank (Mexico)
  "hacérsela": { s: 4, c: 4 }, // To do it to oneself
  "sobársela": { s: 4, c: 4 }, // To rub it (Mexico)
  "tocarse": { s: 4, c: 4 }, // To touch oneself
  "dedear": { s: 4, c: 4 }, // To finger
  "dedearse": { s: 4, c: 4 }, // To finger oneself
  "meter mano": { s: 4, c: 4 }, // To feel up / to grope
  "manosear": { s: 4, c: 4 }, // To grope
  "manoseo": { s: 4, c: 4 }, // Groping
  "faje": { s: 4, c: 4 }, // Makeout / groping session (Mexico)
  "fajarse": { s: 4, c: 4 }, // To make out / grope (Mexico)
  "agarrón": { s: 4, c: 4 }, // Groping session
  "arrimón": { s: 4, c: 4 }, // Grinding against someone
  "refregarse": { s: 4, c: 4 }, // To rub against someone
  "sexting": { s: 4, c: 4 }, // Sexting (English loan, used in Spanish)
  "nudes": { s: 4, c: 4 }, // Nudes (English loan, used in Spanish)
  "pack": { s: 3, c: 4 }, // Nude photo set (Mexico/LatAm slang)
  "mandar pack": { s: 4, c: 4 }, // To send nudes (Mexico)
  "putipobre": { s: 5, c: 4 }, // Cheap whore
  "kinesiologa": { s: 5, c: 4 }, // Prostitute (Argentina euphemism)
  "scort": { s: 4, c: 5 }, // Escort (misspelling used in Spanish)
  "escort": { s: 3, c: 4 }, // Escort
  "lumi": { s: 5, c: 4 }, // Prostitute (Argentina)
  "traba": { s: 4, c: 4 }, // Trans sex worker (Argentina, very derogatory)
  "tussi": { s: 3, c: 4 }, // Girl / prostitute (Spain slang)

  // ========================================
  // === More Profane Exclamations ========
  // ========================================
  "su puta madre": { s: 5, c: 4 }, // His/her whore mother
  "tu puta madre": { s: 5, c: 4 }, // Your whore mother
  "la puta madre que los parió": { s: 5, c: 4 }, // The whore mother that bore them
  "la gran puta madre": { s: 5, c: 4 }, // The great whore mother
  "la remil puta": { s: 5, c: 4 }, // The thousand-times whore (Argentina)
  "la remil puta madre": { s: 5, c: 4 }, // The thousand-times whore mother (Argentina)
  "la re mil puta madre": { s: 3, c: 5 }, // Spaced variant (Argentina)
  "requeteputamadre": { s: 5, c: 5 }, // Ultra motherfucker
  "la reputa madre que te parió": { s: 5, c: 4 }, // Ultra whore mother who bore you
  "por la cresta": { s: 3, c: 4 }, // By the crest / damn (Chile)
  "cresta": { s: 3, c: 4 }, // Crest / damn (Chile)
  "la crestá": { s: 3, c: 4 }, // The damn (Chile)
  "mierda pura": { s: 3, c: 5 }, // Pure shit
  "maldita mierda": { s: 3, c: 5 }, // Damn shit
  "concha de la lora": { s: 5, c: 5 }, // Parrot's cunt (Argentina exclamation)
  "qué carajo": { s: 3, c: 4 }, // What the hell
  "qué mierda": { s: 3, c: 5 }, // What the shit
  "qué coño": { s: 5, c: 5 }, // What the cunt (Spain)
  "qué cojones": { s: 4, c: 4 }, // What the balls (Spain)
  "qué putas": { s: 3, c: 5 }, // What the fuck (Central America)
  "qué verga": { s: 4, c: 4 }, // What the dick (Mexico)
  "qué pedo": { s: 3, c: 4 }, // What the fart / what's up (Mexico)
  "ni verga": { s: 4, c: 4 }, // Not a dick / nothing (Mexico)
  "ni mierda": { s: 3, c: 5 }, // Not shit / nothing
  "un coño": { s: 5, c: 5 }, // A cunt / not a thing (Spain)
  "una polla": { s: 4, c: 4 }, // A dick / not a thing (Spain)
  "mis cojones": { s: 4, c: 4 }, // My balls / no way (Spain)
  "y una mierda": { s: 3, c: 5 }, // And a shit / no way
  "y un coño": { s: 5, c: 5 }, // And a cunt / no way (Spain)
  "tócame los huevos": { s: 4, c: 4 }, // Touch my balls (Spain, expression of annoyance)
  "me suda la polla": { s: 4, c: 4 }, // My dick sweats / I don't care (Spain)
  "me la suda": { s: 3, c: 4 }, // I don't care (Spain, vulgar)
  "me la pela": { s: 3, c: 4 }, // It peels me / I don't care (Spain)
  "me la refanfinfla": { s: 3, c: 4 }, // I don't care at all (Spain)
  "me importa un carajo": { s: 3, c: 4 }, // I don't give a damn
  "me importa una mierda": { s: 3, c: 5 }, // I don't give a shit
  "me importa un huevo": { s: 3, c: 4 }, // I don't give an egg/ball
  "me importa un coño": { s: 5, c: 5 }, // I don't give a cunt (Spain)
  "no me sale de los cojones": { s: 4, c: 4 }, // It doesn't come from my balls / I don't want to (Spain)
  "no me sale de los huevos": { s: 3, c: 4 }, // Variant with huevos
  "porque me sale de los cojones": { s: 4, c: 4 }, // Because it comes from my balls / because I want to (Spain)
  "porque me da la gana": { s: 1, c: 4 }, // Because I feel like it (milder)

  // ========================================
  // === Texting / Chat Evasions ==========
  // ========================================
  "mierdx": { s: 3, c: 5 }, // Mierda - x ending (gender neutral evasion)
  "putx": { s: 3, c: 5 }, // Puta/puto - x ending
  "pendejx": { s: 3, c: 5 }, // Pendejo - x ending
  "culiadx": { s: 3, c: 5 }, // Culiao - x ending
  "cabronx": { s: 3, c: 5 }, // Cabrón - x ending
  "mrd": { s: 2, c: 3 }, // Mierda abbreviated
  "vrg": { s: 3, c: 5 }, // Verga abbreviated
  "cdso": { s: 3, c: 5 }, // Culiazo (Chile)
  "hijoepta": { s: 3, c: 5 }, // Hijo e puta abbreviated
  "hjpt": { s: 3, c: 5 }, // Hijueputa abbreviated
  "pndj": { s: 3, c: 5 }, // Pendejo abbreviated
  "cbrn": { s: 3, c: 5 }, // Cabrón abbreviated
  "mrkon": { s: 3, c: 5 }, // Maricón abbreviated
  "mkn": { s: 3, c: 5 }, // Maricón abbreviated
  "prro": { s: 3, c: 5 }, // Perro abbreviated

  // ========================================
  // === More Compound Regional Insults ===
  // ========================================
  "cara de nalga": { s: 3, c: 4 }, // Buttock face
  "cara de sapo": { s: 1, c: 4 }, // Toad face
  "cara de imbécil": { s: 1, c: 4 }, // Imbecile face
  "cara de pendejo": { s: 1, c: 4 }, // Idiot face
  "cara de estúpido": { s: 1, c: 4 }, // Stupid face
  "cara de idiota": { s: 1, c: 4 }, // Idiot face
  "cara de huevo": { s: 1, c: 4 }, // Egg face / ball face
  "nariz de polla": { s: 4, c: 4 }, // Dick nose
  "come pollas": { s: 4, c: 4 }, // Dick eater
  "come vergas": { s: 4, c: 4 }, // Dick eater (LatAm)
  "come pingas": { s: 4, c: 4 }, // Dick eater (Caribbean)
  "tragapollas": { s: 4, c: 4 }, // Dick swallower (Spain)
  "tragapolla": { s: 4, c: 4 }, // Dick swallower singular (Spain)
  "traga semen": { s: 1, c: 4 }, // Cum swallower
  "tragamocos": { s: 1, c: 4 }, // Snot swallower
  "roba gallinas": { s: 1, c: 4 }, // Chicken thief (derogatory)
  "muerto de hambre": { s: 5, c: 5 }, // Starving to death / lowlife
  "muerta de hambre": { s: 1, c: 4 }, // Fem starving / lowlife
  "nini": { s: 5, c: 5 }, // Neither studies nor works (Spain/Mexico)
  "arrastrado": { s: 1, c: 4 }, // Dragged / pathetic (LatAm)
  "arrastrada": { s: 1, c: 4 }, // Fem pathetic
  "perro sarnoso": { s: 1, c: 4 }, // Mangy dog
  "gata barata": { s: 5, c: 4 }, // Cheap cat / whore (Argentina)
  "yegua": { s: 1, c: 4 }, // Mare / bitch (Argentina)
  "chancha": { s: 1, c: 4 }, // Sow / pig (Argentina)
  "chancho": { s: 1, c: 4 }, // Pig (Argentina)
  "gordo de mierda": { s: 1, c: 4 }, // Fat piece of shit
  "gorda de mierda": { s: 1, c: 4 }, // Fem fat piece of shit
  "feo de mierda": { s: 1, c: 4 }, // Ugly piece of shit
  "fea de mierda": { s: 1, c: 4 }, // Fem ugly piece of shit
  "viejo de mierda": { s: 3, c: 5 }, // Old piece of shit
  "vieja de mierda": { s: 3, c: 5 }, // Old hag piece of shit
  "vieja chota": { s: 1, c: 4 }, // Old broken-down woman (Argentina)
  "viejo choto": { s: 1, c: 4 }, // Old broken-down man (Argentina)
  "choto": { s: 3, c: 5 }, // Broken / shitty (Argentina)
  "chota": { s: 4, c: 5 }, // Broken / shitty / dick (Argentina)
  "guacho": { s: 3, c: 4 }, // Orphan / bastard (Argentina)
  "guacha": { s: 3, c: 4 }, // Fem orphan / bastard (Argentina)
  "negro villero": { s: 5, c: 4 }, // Black slum person (Argentina, very racist)
  "villero": { s: 1, c: 4 }, // Slum person (Argentina, derogatory)
  "villera": { s: 1, c: 4 }, // Fem slum person (Argentina)
  "cabeza de tacho": { s: 1, c: 4 }, // Bucket head / lowlife (Argentina)
  "cabeza": { s: 1, c: 4 }, // Head / lowlife (Argentina)
  "groncho": { s: 3, c: 4 }, // Low-class (Argentina)
  "groncha": { s: 3, c: 4 }, // Fem low-class (Argentina)
  "mersa": { s: 3, c: 4 }, // Tacky / low-class (Argentina)
  "croto": { s: 1, c: 4 }, // Bum / hobo (Argentina)
  "crota": { s: 1, c: 4 }, // Fem bum (Argentina)
  "garca": { s: 1, c: 4 }, // Scammer / cheater (Argentina)
  "vago de mierda": { s: 3, c: 5 }, // Shitty bum
  "vaga de mierda": { s: 3, c: 5 }, // Fem shitty bum
  "ñoqui": { s: 1, c: 4 }, // Gnocchi / do-nothing employee (Argentina)
  "come gato": { s: 5, c: 4 }, // Cat eater (racist, Argentina for Asian)
  "panchito": { s: 1, c: 4 }, // Derogatory for Bolivian/Peruvian (Argentina)
  "panchita": { s: 1, c: 4 }, // Fem derogatory
  "paragua": { s: 1, c: 4 }, // Derogatory for Paraguayan (Argentina)
  "bolita": { s: 1, c: 4 }, // Derogatory for Bolivian (Argentina)
  "peruca": { s: 1, c: 4 }, // Derogatory for Peruvian (Argentina)
  "brasuca": { s: 1, c: 4 }, // Derogatory for Brazilian (Argentina)
  "planero": { s: 1, c: 4 }, // Welfare recipient (Argentina, derogatory)
  "planera": { s: 1, c: 4 }, // Fem welfare recipient
  "kumpa": { s: 1, c: 3 }, // Corrupt supporter (Argentina political slang)
  "kukas": { s: 1, c: 4 }, // Derogatory for political supporters (Argentina)

  // ========================================
  // === Spanish Spain Additional =========
  // ========================================
  "hijoputa": { s: 3, c: 4 }, // Son of a bitch (Spain contracted)
  "hijoputas": { s: 3, c: 4 }, // Plural sons of bitches
  "giliflautas": { s: 1, c: 4 }, // Idiot (Spain, variant of gilipollas)
  "imbécil integral": { s: 3, c: 4 }, // Total imbecile
  "tonto de los cojones": { s: 1, c: 4 }, // Ball-level idiot (Spain)
  "tonta de los cojones": { s: 1, c: 4 }, // Fem ball-level idiot (Spain)
  "gilipollas integral": { s: 3, c: 4 }, // Total asshole
  "subnormal perdido": { s: 3, c: 4 }, // Complete retard (very offensive)
  "puto amo": { s: 3, c: 5 }, // Fucking boss (positive/negative)
  "mierda pinchada en un palo": { s: 3, c: 5 }, // Shit stuck on a stick (Spain)
  "anda y que te follen": { s: 3, c: 5 }, // Go get fucked (Spain)
  "anda a cagar": { s: 3, c: 5 }, // Go take a shit (Spain)
  "corta el rollo": { s: 3, c: 4 }, // Cut the crap (Spain)
  "borde": { s: 3, c: 4 }, // Rude / sharp (Spain)
  "capullo de mierda": { s: 3, c: 5 }, // Shitty foreskin/asshole (Spain)
  "gilipollas de mierda": { s: 3, c: 5 }, // Shitty asshole (Spain)
  "payaso de mierda": { s: 3, c: 5 }, // Shitty clown (Spain)
  "mamoncete": { s: 3, c: 4 }, // Little jerk (Spain)
  "lechoso": { s: 3, c: 4 }, // Cum-covered / lucky (Spain)
  "empanao": { s: 3, c: 4 }, // Clueless / out of it (Spain)
  "zorrita": { s: 3, c: 4 }, // Little slut (Spain)
  "petardo": { s: 1, c: 4 }, // Firecracker / ugly person (Spain)
  "petarda": { s: 1, c: 4 }, // Fem firecracker / ugly (Spain)
  "hijaputa": { s: 3, c: 4 }, // Daughter of a bitch (Spain contracted)
  "hijaputas": { s: 3, c: 4 }, // Plural daughters of bitches
  "lechero de mierda": { s: 3, c: 5 }, // Shitty lucky/annoying person (Spain)
  "bocachancla": { s: 3, c: 4 }, // Loose lips / loudmouth (Spain)
  "bocazas": { s: 3, c: 4 }, // Big mouth (Spain)

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "pedazo de cabrón": { s: 3, c: 4 }, // Piece of bastard
  "pedazo de estúpido": { s: 1, c: 4 }, // Piece of stupid
  "pedazo de escoria": { s: 1, c: 4 }, // Piece of scum
  "pedazo de inútil": { s: 1, c: 4 }, // Piece of useless
  "tremendo idiota": { s: 1, c: 4 }, // Tremendous idiot
  "tremendo imbécil": { s: 1, c: 4 }, // Tremendous imbecile
  "tremendo hijo de puta": { s: 1, c: 4 }, // Tremendous son of a bitch
  "menudo cabrón": { s: 3, c: 4 }, // What a bastard
  "menudo gilipollas": { s: 3, c: 4 }, // What an asshole
  "menuda mierda": { s: 3, c: 5 }, // What a shit
  "menudo imbécil": { s: 1, c: 4 }, // What an imbecile
  "puto asco": { s: 3, c: 5 }, // Fucking disgust
  "puto cabrón": { s: 3, c: 4 }, // Fucking bastard
  "puta basura": { s: 3, c: 5 }, // Fucking trash
  "puto idiota": { s: 1, c: 4 }, // Fucking idiot
  "puta perra": { s: 3, c: 5 }, // Fucking bitch
  "puto pendejo": { s: 3, c: 5 }, // Fucking asshole
  "puto estúpido": { s: 1, c: 4 }, // Fucking stupid
  "maldito pendejo": { s: 3, c: 4 }, // Damn asshole
  "maldita puta": { s: 5, c: 4 }, // Damn whore
  "maldito imbécil": { s: 1, c: 4 }, // Damn imbecile
  "maldito idiota": { s: 1, c: 4 }, // Damn idiot
  "maldita zorra": { s: 1, c: 4 }, // Damn fox/slut
  "maldito cerdo": { s: 1, c: 4 }, // Damn pig
  "maldita escoria": { s: 1, c: 4 }, // Damn scum
  "pinche puto": { s: 3, c: 5 }, // Fucking faggot (Mexico)
  "pinche perro": { s: 3, c: 5 }, // Fucking dog (Mexico)
  "pinche rata": { s: 3, c: 5 }, // Fucking rat (Mexico)
  "pinche escoria": { s: 3, c: 5 }, // Fucking scum (Mexico)
  "jodido pendejo": { s: 3, c: 5 }, // Fucked-up asshole
  "jodido idiota": { s: 1, c: 4 }, // Fucked-up idiot
  "jodido cabrón": { s: 3, c: 4 }, // Fucked-up bastard
  "jodida puta": { s: 5, c: 5 }, // Fucked-up whore
  "condenado idiota": { s: 1, c: 4 }, // Condemned idiot
  "condenada puta": { s: 5, c: 4 }, // Condemned whore
  "hijo de puta asqueroso": { s: 1, c: 4 }, // Disgusting son of a bitch
  "hija de la gran puta": { s: 5, c: 4 }, // Daughter of the great whore
  "cara de polla": { s: 4, c: 4 }, // Dick face
  "cara de rata": { s: 1, c: 4 }, // Rat face
  "cara de perro": { s: 1, c: 4 }, // Dog face
  "cabeza de polla": { s: 4, c: 4 }, // Dick head
  "cabeza de chorlito": { s: 1, c: 4 }, // Plover head (scatterbrain)
  "cabeza de alcornoque": { s: 1, c: 4 }, // Cork oak head (blockhead)
  "cabeza hueca": { s: 1, c: 4 }, // Hollow head
  "cerebro de mosquito": { s: 1, c: 4 }, // Mosquito brain
  "te voy a matar": { s: 1, c: 4 }, // I'm going to kill you
  "te voy a partir la cara": { s: 1, c: 4 }, // I'll split your face
  "te voy a romper la cara": { s: 1, c: 4 }, // I'll break your face
  "te voy a reventar": { s: 1, c: 4 }, // I'll burst you
  "cierra la boca": { s: 1, c: 4 }, // Close your mouth
  "cállate la boca": { s: 1, c: 4 }, // Shut your mouth
  "cierra el pico": { s: 1, c: 4 }, // Close your beak (shut up)
  "cierra el hocico": { s: 1, c: 4 }, // Close your snout
  "a mamar": { s: 1, c: 4 }, // Go suck (vulgar dismissal)
  "chúpame la polla": { s: 4, c: 4 }, // Suck my dick (Spain)
  "lámeme el culo": { s: 3, c: 4 }, // Lick my ass
  "cómeme los huevos": { s: 4, c: 4 }, // Eat my balls (Spain)
  "bésame el culo": { s: 3, c: 4 }, // Kiss my ass
  "me importa un cojón": { s: 1, c: 4 }, // I don't give a ball
  "me importa tres cojones": { s: 4, c: 4 }, // I give three balls (I don't care)

  // ========================================
  // === Mexican Spanish ===================
  // ========================================
  "chinga tu puta madre": { s: 5, c: 5 }, // Fuck your whore mother (Mexico)
  "chingoncísimo": { s: 3, c: 4 }, // Super badass (Mexico)
  "a la chingada": { s: 3, c: 5 }, // To the fucked (Mexico, get lost)
  "no me chingues": { s: 3, c: 5 }, // Don't fuck with me (Mexico)
  "ya chingaste": { s: 3, c: 5 }, // You already fucked up (Mexico)
  "me vale madres": { s: 3, c: 4 }, // I don't give a damn (Mexico)
  "vale madres": { s: 3, c: 4 }, // Worth mothers (Mexico)
  "mamalón": { s: 3, c: 4 }, // Arrogant (Mexico)
  "corriente": { s: 3, c: 4 }, // Common / vulgar (Mexico)
  "gata": { s: 3, c: 4 }, // Cat / maid (Mexico derog.)
  "chamaco pendejo": { s: 1, c: 4 }, // Stupid kid (Mexico)
  "a toda verga": { s: 4, c: 4 }, // At full dick (Mexico, awesome)
  "panocha": { s: 4, c: 4 }, // Pussy (Mexico)
  "ojetes": { s: 3, c: 4 }, // Assholes (Mexico)
  "cabroncete": { s: 3, c: 4 }, // Little bastard (Mexico)
  "cabroncísimo": { s: 3, c: 4 }, // Super bastard (Mexico)
  "de huevos": { s: 4, c: 4 }, // Of balls (Mexico, awesome)
  "piruja": { s: 5, c: 4 }, // Whore (Mexico)
  "pirujo": { s: 5, c: 4 }, // Male whore (Mexico)
  "golfo": { s: 3, c: 4 }, // Bum (Mexico)
  "lépero": { s: 3, c: 4 }, // Vulgar person (Mexico)
  "lépera": { s: 3, c: 4 }, // Vulgar person (f.) (Mexico)
  "méndigo": { s: 3, c: 4 }, // Beggar / bastard (Mexico)
  "méndiga": { s: 3, c: 4 }, // Beggar (f.) (Mexico)
  "pelado": { s: 3, c: 4 }, // Broke / vulgar (Mexico)
  "pelada": { s: 3, c: 4 }, // Broke (f.) (Mexico)
  "prieto": { s: 3, c: 4 }, // Dark-skinned (Mexico, can be derog.)
  "prieta": { s: 3, c: 4 }, // Dark-skinned (f.) (Mexico)

  // ========================================
  // === Argentine Spanish =================
  // ========================================
  "garchada": { s: 3, c: 5 }, // Fuck (noun, Argentina)
  "garchó": { s: 3, c: 5 }, // Fucked (Argentina)
  "ortear": { s: 3, c: 5 }, // To ass-fuck (Argentina)
  "orto": { s: 3, c: 4 }, // Ass (Argentina)
  "conchuda": { s: 5, c: 5 }, // Big-cunted (Argentina)
  "concha de tu madre": { s: 4, c: 4 }, // Your mother's pussy (Argentina)
  "la concha del mono": { s: 4, c: 4 }, // The monkey's pussy (Argentina)
  "la re puta madre": { s: 5, c: 4 }, // The super whore mother (Argentina)
  "andá a cagar": { s: 3, c: 5 }, // Go shit (Argentina)
  "chupámela": { s: 3, c: 4 }, // Suck it (Argentina)
  "chupame un huevo": { s: 3, c: 4 }, // Suck my ball (Argentina)
  "no me rompas las pelotas": { s: 4, c: 4 }, // Don't break my balls (Argentina)
  "no me rompás las bolas": { s: 4, c: 4 }, // Don't break my balls (Argentina)
  "rompehuevos": { s: 3, c: 4 }, // Ball breaker (Argentina)
  "cara de orto": { s: 3, c: 4 }, // Ass face (Argentina)
  "careta": { s: 3, c: 4 }, // Mask / fake (Argentina)
  "atorranta": { s: 3, c: 4 }, // Bum (f.) (Argentina)
  "afanar": { s: 3, c: 4 }, // To steal (Argentina)
  "afanancio": { s: 3, c: 4 }, // Thief (Argentina)
  "bagayo": { s: 1, c: 4 }, // Ugly thing/person (Argentina)
  "bagarto": { s: 1, c: 4 }, // Ugly person (Argentina)
  "bardear": { s: 3, c: 4 }, // To disrespect (Argentina)
  "cabecita": { s: 3, c: 4 }, // Little head (derog. for poor, Argentina)
  "grasa": { s: 3, c: 4 }, // Grease (lowlife, Argentina)
  "negrada": { s: 5, c: 4 }, // Black behavior (Argentina racist)
  "villereada": { s: 3, c: 4 }, // Slum behavior (Argentina derog.)
  "puteada": { s: 3, c: 4 }, // Cursing (Argentina)
  "puterio": { s: 5, c: 4 }, // Whorehouse / drama (Argentina)

  // ========================================
  // === Colombian Spanish =================
  // ========================================
  "gonorriento": { s: 3, c: 4 }, // Gonorrhea-ridden (Colombia)
  "maricona": { s: 3, c: 4 }, // Faggot (f.) (Colombia)
  "güevona": { s: 3, c: 4 }, // Lazy (f.) (Colombia)
  "sapa": { s: 3, c: 4 }, // Snitch (f.) (Colombia)
  "cachona": { s: 3, c: 4 }, // Cuckold (f.) (Colombia)
  "sardina": { s: 3, c: 4 }, // Sardine / young girl (Colombia derog.)
  "lampara": { s: 3, c: 4 }, // Lamp / show-off (Colombia)
  "montañero": { s: 3, c: 4 }, // Hillbilly (Colombia)
  "montañera": { s: 3, c: 4 }, // Hillbilly (f.) (Colombia)
  "roscón": { s: 3, c: 4 }, // Ring cake / fag (Colombia)
  "solapado": { s: 3, c: 4 }, // Sneaky (Colombia)
  "solapada": { s: 3, c: 4 }, // Sneaky (f.) (Colombia)

  // ========================================
  // === Venezuelan Spanish ================
  // ========================================
  "coño e madre": { s: 5, c: 5 }, // Cunt of mother (Venezuela)
  "cachicamo": { s: 3, c: 4 }, // Armadillo / cuckold (Venezuela)
  "vergatario": { s: 4, c: 4 }, // Dick-like (Venezuela)
  "arrecha": { s: 3, c: 4 }, // Horny / angry (f.) (Venezuela)
  "mardito": { s: 3, c: 4 }, // Damned (Venezuela)
  "mardita": { s: 3, c: 4 }, // Damned (f.) (Venezuela)
  "cuaima": { s: 3, c: 4 }, // Bushmaster snake / jealous woman (Venezuela)
  "chamo pendejo": { s: 1, c: 4 }, // Stupid dude (Venezuela)
  "chama pendeja": { s: 1, c: 4 }, // Stupid girl (Venezuela)

  // ========================================
  // === Chilean Spanish ===================
  // ========================================
  "weada": { s: 1, c: 4 }, // Thing / stupidity (Chile)
  "culiá": { s: 3, c: 5 }, // Ass-fucked abbrev. (Chile)
  "pichula": { s: 4, c: 4 }, // Dick (Chile)
  "callampa": { s: 4, c: 4 }, // Mushroom / dick (Chile)
  "rajado": { s: 3, c: 4 }, // Split / cheap (Chile)
  "chuchetumadre": { s: 3, c: 4 }, // Variant of conchetumadre (Chile)
  "chuchada": { s: 3, c: 4 }, // Profanity (Chile)
  "flaita": { s: 3, c: 4 }, // Trashy (f.) (Chile)
  "rotería": { s: 3, c: 4 }, // Lowlife behavior (Chile)
  "pelusón": { s: 3, c: 4 }, // Cheap / envious (Chile)
  "pelusona": { s: 3, c: 4 }, // Cheap (f.) (Chile)
  "patudo": { s: 3, c: 4 }, // Big-footed / shameless (Chile)
  "patuda": { s: 3, c: 4 }, // Shameless (f.) (Chile)
  "perkinazo": { s: 3, c: 4 }, // Boot-licking (Chile)

  // ========================================
  // === Peruvian Spanish ==================
  // ========================================
  "cojudez": { s: 1, c: 4 }, // Stupidity (Peru)
  "chuchasumadre": { s: 4, c: 4 }, // His mother's pussy (Peru)
  "caracho": { s: 3, c: 4 }, // Damn variant (Peru)
  "ayayay": { s: 3, c: 4 }, // Expression of frustration (Peru)
  "zamboa": { s: 3, c: 4 }, // Mixed (f.) (Peru)
  "huachafo": { s: 3, c: 4 }, // Tacky (Peru)
  "huachafa": { s: 3, c: 4 }, // Tacky (f.) (Peru)
  "lorna": { s: 1, c: 4 }, // Fool (Peru)

  // ========================================
  // === Cuban Spanish =====================
  // ========================================
  "singada": { s: 3, c: 5 }, // Fucked (f.) (Cuba)
  "guajiro": { s: 3, c: 4 }, // Peasant (Cuba, can be derog.)
  "guajira": { s: 3, c: 4 }, // Peasant (f.) (Cuba)
  "jinetero": { s: 3, c: 4 }, // Hustler (Cuba)
  "jinetera": { s: 5, c: 4 }, // Hustler (f.) / prostitute (Cuba)
  "tremendo": { s: 3, c: 4 }, // Tremendous (Cuba intensifier)
  "tremendísimo": { s: 3, c: 4 }, // Super tremendous (Cuba)
  "caballo": { s: 3, c: 4 }, // Horse / dude (Cuba)
  "yuma": { s: 3, c: 4 }, // Foreigner (Cuba)

  // ========================================
  // === Dominican Spanish =================
  // ========================================
  "tiguere": { s: 3, c: 4 }, // Tiger / hustler (Dominican)
  "tiguerito": { s: 3, c: 4 }, // Little tiger (Dominican)
  "maldito sea": { s: 3, c: 4 }, // Damn it (Dominican)
  "diache": { s: 3, c: 4 }, // Devil / damn (Dominican)
  "diablo": { s: 3, c: 4 }, // Devil (Dominican exclamation)
  "tetú": { s: 4, c: 4 }, // Big-titted (Dominican)
  "tatatú": { s: 1, c: 4 }, // Stupid (Dominican)
  "caripelao": { s: 3, c: 4 }, // Shameless face (Dominican)
  "pariguaya": { s: 1, c: 4 }, // Loser (f.) (Dominican)
  "bruto": { s: 1, c: 4 }, // Brute / stupid (Dominican)
  "bruta": { s: 3, c: 4 }, // Brute (f.) (Dominican)
  "palomo": { s: 3, c: 4 }, // Pigeon / cuckold (Dominican)
  "cafre": { s: 3, c: 4 }, // Savage (Dominican)

  // ========================================
  // === Puerto Rican Spanish ==============
  // ========================================
  "bicha": { s: 3, c: 4 }, // Bug / bitch (Puerto Rico)
  "mamabicho": { s: 4, c: 4 }, // Dick sucker compound (Puerto Rico)
  "lambeculos": { s: 3, c: 4 }, // Ass licker (Puerto Rico)
  "lambeojo": { s: 3, c: 4 }, // Eye licker / bootlicker (Puerto Rico)
  "bochinchero": { s: 3, c: 4 }, // Gossiper (Puerto Rico)
  "bochinchera": { s: 3, c: 4 }, // Gossiper (f.) (Puerto Rico)
  "bellaco": { s: 3, c: 4 }, // Horny / rogue (Puerto Rico)
  "bellaca": { s: 3, c: 4 }, // Horny (f.) (Puerto Rico)
  "chamaquito pendejo": { s: 1, c: 4 }, // Stupid little kid (Puerto Rico)
  "jodío": { s: 3, c: 5 }, // Fucked (Puerto Rico)
  "jodía": { s: 3, c: 5 }, // Fucked (f.) (Puerto Rico)
  "lechón": { s: 3, c: 4 }, // Piglet / pervert (Puerto Rico)
  "gandúl": { s: 3, c: 4 }, // Lazy bum (Puerto Rico)
  "gandúla": { s: 3, c: 4 }, // Lazy bum (f.) (Puerto Rico)

  // ========================================
  // === Ecuadorian Spanish ================
  // ========================================
  "montubio": { s: 3, c: 4 }, // Coastal peasant (Ecuador, can be derog.)
  "montubia": { s: 3, c: 4 }, // Coastal peasant (f.) (Ecuador)
  "manazo": { s: 3, c: 4 }, // Manabí person (Ecuador, can be derog.)
  "pelucón": { s: 3, c: 4 }, // Big-haired / rich (Ecuador derog.)
  "pelucona": { s: 3, c: 4 }, // Rich (f.) (Ecuador)

  // ========================================
  // === Bolivian Spanish ==================
  // ========================================
  "caray": { s: 3, c: 4 }, // Damn (Bolivia)
  "caramba": { s: 3, c: 4 }, // Damn (Bolivia)
  "colla": { s: 3, c: 4 }, // Highlander (Bolivia, can be derog.)
  "camba": { s: 3, c: 4 }, // Lowlander (Bolivia, can be derog.)
  "llokallada": { s: 3, c: 4 }, // Bratty behavior (Bolivia)

  // ========================================
  // === Uruguayan Spanish =================
  // ========================================
  "la puta madre": { s: 5, c: 4 }, // The whore mother (Uruguay)
  "la reconcha de tu madre": { s: 4, c: 4 }, // Your mother's re-pussy (Uruguay)
  "la reputa madre": { s: 5, c: 4 }, // The re-whore mother (Uruguay)
  "ortiba": { s: 3, c: 4 }, // Snitch (Uruguay, vesre)
  "botón": { s: 3, c: 4 }, // Button / snitch (Uruguay)
  "chorro": { s: 3, c: 4 }, // Thief (Uruguay)
  "chorra": { s: 3, c: 4 }, // Thief (f.) (Uruguay)
  "plancha": { s: 3, c: 4 }, // Iron / lowlife (Uruguay)
  "planchón": { s: 3, c: 4 }, // Big lowlife (Uruguay)

  // ========================================
  // === Paraguayan Spanish ================
  // ========================================
  "kurái": { s: 3, c: 5 }, // Shit (Paraguay, Guaraní)
  "ndéra kué": { s: 3, c: 4 }, // Damn that (Paraguay)
  "avare": { s: 3, c: 4 }, // Miser (Paraguay, from Guaraní)
  "mitá'i kure": { s: 3, c: 4 }, // Pig kid (Paraguay)
  "kure": { s: 3, c: 4 }, // Pig (Paraguay, Guaraní)
  "tayy": { s: 1, c: 4 }, // Stupid variant (Paraguay)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "cogiéndola": { s: 4, c: 5 }, // Fucking her
  "follada": { s: 4, c: 5 }, // Fuck (noun, Spain)
  "follón": { s: 4, c: 5 }, // Mess / big fuck (Spain)
  "tirada": { s: 4, c: 5 }, // Fuck (noun, Argentina)
  "culeada": { s: 4, c: 5 }, // Ass-fuck (noun)
  "chupada": { s: 4, c: 5 }, // Blowjob
  "chupar la polla": { s: 4, c: 4 }, // To suck dick
  "chupar la verga": { s: 4, c: 4 }, // To suck dick (Latin Am.)
  "mamar la polla": { s: 4, c: 4 }, // To suck dick
  "mamar la verga": { s: 4, c: 4 }, // To suck dick (Latin Am.)
  "penetración": { s: 4, c: 4 }, // Penetration
  "penetración anal": { s: 4, c: 4 }, // Anal penetration
  "masturbación": { s: 4, c: 4 }, // Masturbation
  "eyaculación": { s: 4, c: 4 }, // Ejaculation
  "esperma": { s: 4, c: 4 }, // Sperm
  "prostitución": { s: 5, c: 4 }, // Prostitution
  "meretriz": { s: 5, c: 4 }, // Prostitute (formal)
  "mujerzuela": { s: 4, c: 4 }, // Loose woman
  "calentón": { s: 4, c: 4 }, // Horny person (m.)
  "calentona": { s: 4, c: 4 }, // Horny person (f.)
  "calentorro": { s: 4, c: 4 }, // Very horny (m.)
  "calentorra": { s: 4, c: 4 }, // Very horny (f.)
  "pederasta": { s: 4, c: 4 }, // Pederast
  "acosador": { s: 4, c: 4 }, // Harasser
  "acosadora": { s: 4, c: 4 }, // Harasser (f.)
  "voyerista": { s: 4, c: 4 }, // Voyeur
  "exhibicionista": { s: 4, c: 4 }, // Exhibitionist
  "fetichista": { s: 4, c: 4 }, // Fetishist
  "sadomasoquista": { s: 4, c: 4 }, // Sadomasochist
  "fornicar": { s: 4, c: 4 }, // To fornicate

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "cagado": { s: 3, c: 4 }, // Shat / scared
  "cagarse": { s: 3, c: 5 }, // To shit oneself
  "cagadera": { s: 3, c: 4 }, // Diarrhea
  "cagazo": { s: 3, c: 5 }, // Big shit / big scare
  "diarrea": { s: 3, c: 4 }, // Diarrhea
  "pedos": { s: 3, c: 4 }, // Farts
  "pedorro": { s: 3, c: 4 }, // Farty
  "pedorra": { s: 3, c: 4 }, // Farty (f.)
  "pedorrera": { s: 3, c: 4 }, // Farting spree
  "echarse un pedo": { s: 3, c: 4 }, // To let a fart
  "meada": { s: 3, c: 4 }, // Piss (noun)
  "meado": { s: 3, c: 4 }, // Pissed on
  "meón": { s: 3, c: 4 }, // Pisser (m.)
  "meona": { s: 3, c: 4 }, // Pisser (f.)
  "orina": { s: 3, c: 4 }, // Urine
  "orinar": { s: 3, c: 4 }, // To urinate
  "vómito": { s: 3, c: 4 }, // Vomit
  "eructo": { s: 3, c: 4 }, // Burp
  "eructar": { s: 3, c: 4 }, // To burp

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "borrico": { s: 1, c: 4 }, // Donkey (stupid)
  "borrica": { s: 1, c: 4 }, // Donkey (f.) (stupid)
  "burro": { s: 1, c: 4 }, // Donkey (stupid)
  "burra": { s: 1, c: 4 }, // Donkey (f.) (stupid)
  "calabaza": { s: 1, c: 4 }, // Pumpkin (stupid)
  "cenutrio": { s: 1, c: 4 }, // Dimwit (Spain)
  "ceporro": { s: 1, c: 4 }, // Blockhead (Spain)
  "ignorante": { s: 1, c: 4 }, // Ignorant
  "papanatas": { s: 1, c: 4 }, // Gawker (fool)
  "pasmarote": { s: 1, c: 4 }, // Dazed person
  "simple": { s: 3, c: 4 }, // Simple (stupid)
  "simplón": { s: 3, c: 4 }, // Simpleton
  "simplona": { s: 3, c: 4 }, // Simpleton (f.)
  "tarugo": { s: 3, c: 4 }, // Blockhead
  "taruga": { s: 3, c: 4 }, // Blockhead (f.)
  "tontorrón": { s: 1, c: 4 }, // Big stupid
  "tontorrona": { s: 1, c: 4 }, // Big stupid (f.)
  "tontolaba": { s: 3, c: 4 }, // Big silly
  "tontolculo": { s: 3, c: 4 }, // Silly-assed
  "tonta del culo": { s: 1, c: 4 }, // Ass-stupid (f.) (Spain)
  "tonto del bote": { s: 1, c: 4 }, // Can-stupid (Spain)
  "zoquete": { s: 3, c: 4 }, // Blockhead
  "zoqueta": { s: 3, c: 4 }, // Blockhead (f.)
  "alcornoque": { s: 3, c: 4 }, // Cork oak (blockhead)
  "adoquín": { s: 3, c: 4 }, // Paving stone (blockhead)
  "badulaque": { s: 1, c: 4 }, // Fool
  "besugo": { s: 1, c: 4 }, // Sea bream (idiot)
  "bodoque": { s: 1, c: 4 }, // Lump (idiot, Mexico)
  "bobalicón": { s: 1, c: 4 }, // Big fool
  "bobalicona": { s: 1, c: 4 }, // Big fool (f.)
  "berzas": { s: 1, c: 4 }, // Cabbages (stupid)
  "cazurro": { s: 1, c: 4 }, // Dumb (Spain)
  "cazurra": { s: 1, c: 4 }, // Dumb (f.) (Spain)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "feo": { s: 1, c: 4 }, // Ugly (m.)
  "fea": { s: 1, c: 4 }, // Ugly (f.)
  "feísimo": { s: 1, c: 4 }, // Very ugly (m.)
  "feísima": { s: 1, c: 4 }, // Very ugly (f.)
  "mamarracha": { s: 1, c: 4 }, // Clown (f.) / ugly
  "callo": { s: 1, c: 4 }, // Callus (ugly, Spain)
  "cardo": { s: 1, c: 4 }, // Thistle (ugly, Spain)
  "bagre": { s: 1, c: 4 }, // Catfish (ugly, Latin Am.)
  "gordo": { s: 1, c: 4 }, // Fat (m.)
  "gorda": { s: 1, c: 4 }, // Fat (f.)
  "gordaco": { s: 1, c: 4 }, // Very fat (m.)
  "gordaca": { s: 1, c: 4 }, // Very fat (f.)
  "gordinflas": { s: 1, c: 4 }, // Fatty
  "ballena": { s: 1, c: 4 }, // Whale
  "vaca": { s: 1, c: 4 }, // Cow
  "foca": { s: 1, c: 4 }, // Seal (fat person)
  "elefante": { s: 1, c: 4 }, // Elephant (fat)
  "hipopótamo": { s: 1, c: 4 }, // Hippopotamus (fat)
  "barril": { s: 1, c: 4 }, // Barrel (fat)
  "flaco": { s: 1, c: 4 }, // Skinny (can be derog.)
  "flaca": { s: 1, c: 4 }, // Skinny (f.)
  "flacucho": { s: 1, c: 4 }, // Scrawny
  "flacucha": { s: 1, c: 4 }, // Scrawny (f.)
  "esqueleto": { s: 1, c: 4 }, // Skeleton
  "tabla": { s: 1, c: 4 }, // Board (flat-chested)
  "enano": { s: 1, c: 4 }, // Dwarf (derog.)
  "enana": { s: 1, c: 4 }, // Dwarf (f.)
  "cuatro ojos": { s: 1, c: 4 }, // Four eyes

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "aprovechado": { s: 1, c: 4 }, // Freeloader (m.)
  "aprovechada": { s: 1, c: 4 }, // Freeloader (f.)
  "bocón": { s: 1, c: 4 }, // Big mouth
  "bocona": { s: 1, c: 4 }, // Big mouth (f.)
  "bravucón": { s: 1, c: 4 }, // Bully
  "bravucona": { s: 1, c: 4 }, // Bully (f.)
  "caraduras": { s: 1, c: 4 }, // Shameless
  "chismoso": { s: 1, c: 4 }, // Gossip (m.)
  "chismosa": { s: 1, c: 4 }, // Gossip (f.)
  "cínico": { s: 1, c: 4 }, // Cynic (shameless)
  "cínica": { s: 1, c: 4 }, // Cynic (f.)
  "embustero": { s: 1, c: 4 }, // Liar
  "embustera": { s: 1, c: 4 }, // Liar (f.)
  "estafador": { s: 1, c: 4 }, // Swindler
  "estafadora": { s: 1, c: 4 }, // Swindler (f.)
  "fanfarrón": { s: 1, c: 4 }, // Show-off
  "fanfarrona": { s: 1, c: 4 }, // Show-off (f.)
  "flojo": { s: 1, c: 4 }, // Lazy
  "floja": { s: 1, c: 4 }, // Lazy (f.)
  "gorrón": { s: 1, c: 4 }, // Freeloader
  "gorrona": { s: 1, c: 4 }, // Freeloader (f.)
  "hipócrita": { s: 1, c: 4 }, // Hypocrite
  "holgazán": { s: 1, c: 4 }, // Lazybones
  "holgazana": { s: 1, c: 4 }, // Lazybones (f.)
  "haragán": { s: 1, c: 4 }, // Idler
  "haragana": { s: 1, c: 4 }, // Idler (f.)
  "ladrón": { s: 1, c: 4 }, // Thief
  "ladrona": { s: 1, c: 4 }, // Thief (f.)
  "lamesuelas": { s: 1, c: 4 }, // Sole licker
  "mentiroso": { s: 1, c: 4 }, // Liar
  "mentirosa": { s: 1, c: 4 }, // Liar (f.)
  "metiche": { s: 1, c: 4 }, // Nosy (Mexico)
  "metomentodo": { s: 1, c: 4 }, // Meddler
  "parásita": { s: 1, c: 4 }, // Parasite (f.)
  "pelota": { s: 1, c: 4 }, // Ball (bootlicker)
  "pelotillero": { s: 1, c: 4 }, // Ball-polisher (bootlicker)
  "pelotillera": { s: 1, c: 4 }, // Ball-polisher (f.)
  "quejica": { s: 1, c: 4 }, // Whiner
  "rastrero": { s: 1, c: 4 }, // Groveling
  "rastrera": { s: 1, c: 4 }, // Groveling (f.)
  "sabelotodo": { s: 1, c: 4 }, // Know-it-all
  "soplón": { s: 1, c: 4 }, // Snitch (m.)
  "soplona": { s: 1, c: 4 }, // Snitch (f.)
  "tacaño": { s: 1, c: 4 }, // Stingy
  "tacaña": { s: 1, c: 4 }, // Stingy (f.)
  "tramposo": { s: 1, c: 4 }, // Cheater
  "tramposa": { s: 1, c: 4 }, // Cheater (f.)
  "vago": { s: 1, c: 4 }, // Lazy
  "vaga": { s: 1, c: 4 }, // Lazy (f.)
  "vividor": { s: 1, c: 4 }, // Freeloader
  "vividora": { s: 1, c: 4 }, // Freeloader (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "mora": { s: 5, c: 4 }, // Moor (f.)
  "morazo": { s: 5, c: 4 }, // Big Moor (Spain)
  "mariconcete": { s: 5, c: 4 }, // Little faggot
  "marica de mierda": { s: 5, c: 5 }, // Shitty fag
  "marimandona": { s: 5, c: 4 }, // Bossy butch
  "deficiente": { s: 5, c: 4 }, // Deficient (ableist)
  "deficiente mental": { s: 5, c: 4 }, // Mentally deficient
  "inadaptado": { s: 5, c: 4 }, // Maladjusted
  "inadaptada": { s: 5, c: 4 }, // Maladjusted (f.)
  "antisocial": { s: 5, c: 4 }, // Antisocial
  "basura humana": { s: 5, c: 4 }, // Human trash

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "m*erda": { s: 3, c: 5 }, // Mierda with *
  "p*ta": { s: 3, c: 5 }, // Puta with *
  "h1jo de puta": { s: 5, c: 5 }, // Hijo de puta with 1
  "hij0 de puta": { s: 5, c: 5 }, // Hijo de puta with 0
  "c4brón": { s: 3, c: 5 }, // Cabrón with 4
  "c*brón": { s: 3, c: 5 }, // Cabrón with *
  "p*ndejo": { s: 3, c: 5 }, // Pendejo with *
  "g1lipollas": { s: 3, c: 5 }, // Gilipollas with 1
  "g*lipollas": { s: 3, c: 5 }, // Gilipollas with *
  "c*ño": { s: 3, c: 5 }, // Coño with *
  "p*lla": { s: 3, c: 5 }, // Polla with *
  "j*der": { s: 3, c: 5 }, // Joder with *
  "h i j o d e p u t a": { s: 5, c: 5 }, // Hijo de puta spaced
  "c a b r ó n": { s: 3, c: 5 }, // Cabrón spaced
  "p e n d e j o": { s: 3, c: 5 }, // Pendejo spaced
  "g i l i p o l l a s": { s: 3, c: 5 }, // Gilipollas spaced
  "c h i n g a": { s: 3, c: 5 }, // Chinga spaced
  "pu.ta": { s: 3, c: 5 }, // Puta with dot
  "pu-ta": { s: 3, c: 5 }, // Puta with dash
  "mi.erda": { s: 3, c: 5 }, // Mierda with dot
  "jo.der": { s: 3, c: 5 }, // Joder with dot

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "noob": { s: 1, c: 2 }, // Noob
  "nub": { s: 3, c: 4 }, // Noob variant
  "campero": { s: 2, c: 3 }, // Camper (gaming)
  "tryhard": { s: 1, c: 2 }, // Tryhard
  "toxic": { s: 3, c: 4 }, // Toxic (gaming)
  "manco": { s: 2, c: 3 }, // One-handed / bad player
  "manca": { s: 2, c: 3 }, // Bad player (f.)
  "parguela": { s: 1, c: 4 }, // Fool (Spain gaming)
  "asco de persona": { s: 2, c: 3 }, // Disgusting person
  "asco de vida": { s: 2, c: 3 }, // Disgusting life
  "ojalá te atropelle un coche": { s: 2, c: 3 }, // I hope a car runs you over
  "matate": { s: 5, c: 5 }, // Kill yourself
  "suicídate": { s: 5, c: 5 }, // Commit suicide
  "kys": { s: 5, c: 5 }, // Kill yourself (gaming)
  "gg ez": { s: 3, c: 4 }, // Good game easy (taunt)
  "lol noob": { s: 2, c: 3 }, // Laugh out loud noob

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- joder (to fuck) ---
  "jodo": { s: 3, c: 5 }, // I fuck
  "jodes": { s: 3, c: 5 }, // You fuck
  "jode": { s: 3, c: 5 }, // He/she fucks
  "jodemos": { s: 3, c: 5 }, // We fuck
  "joden": { s: 3, c: 5 }, // They fuck
  "jodí": { s: 3, c: 5 }, // I fucked
  "jodió": { s: 3, c: 5 }, // He/she fucked
  "jodiendo": { s: 3, c: 5 }, // Fucking
  // --- follar (to fuck, Spain) ---
  "follo": { s: 3, c: 5 }, // I fuck
  "follas": { s: 3, c: 5 }, // You fuck
  "folla": { s: 3, c: 5 }, // He/she fucks
  "follamos": { s: 3, c: 5 }, // We fuck
  "follan": { s: 3, c: 5 }, // They fuck
  "follé": { s: 3, c: 5 }, // I fucked
  "folló": { s: 3, c: 5 }, // He/she fucked
  "follado": { s: 3, c: 5 }, // Fucked
  "follando": { s: 3, c: 5 }, // Fucking
  // --- cagar (to shit) ---
  "cago": { s: 3, c: 5 }, // I shit
  "cagas": { s: 3, c: 5 }, // You shit
  "caga": { s: 3, c: 5 }, // He/she shits
  "cagamos": { s: 3, c: 5 }, // We shit
  "cagan": { s: 3, c: 5 }, // They shit
  "cagué": { s: 3, c: 4 }, // I shat
  "cagó": { s: 3, c: 4 }, // He/she shat
  "cagando": { s: 3, c: 5 }, // Shitting
  // --- mear (to piss) ---
  "meas": { s: 3, c: 4 }, // You piss
  "mea": { s: 3, c: 4 }, // He/she pisses
  "meamos": { s: 3, c: 4 }, // We piss
  "meé": { s: 3, c: 4 }, // I pissed
  "meó": { s: 3, c: 4 }, // He/she pissed
  "meando": { s: 3, c: 4 }, // Pissing
  // --- chingar (to fuck, Mexico) ---
  "chingo": { s: 3, c: 5 }, // I fuck (Mexico)
  "chingas": { s: 3, c: 5 }, // You fuck (Mexico)
  "chinga": { s: 3, c: 5 }, // He/she fucks (Mexico)
  "chingamos": { s: 3, c: 5 }, // We fuck (Mexico)
  "chingan": { s: 3, c: 5 }, // They fuck (Mexico)
  "chingó": { s: 3, c: 5 }, // He/she fucked (Mexico)
  "chingando": { s: 3, c: 5 }, // Fucking (Mexico)
  // --- coger (to fuck, Latin Am.) ---
  "cojo": { s: 3, c: 5 }, // I fuck (Latin Am.)
  "coges": { s: 3, c: 5 }, // You fuck
  "coge": { s: 3, c: 5 }, // He/she fucks
  "cogemos": { s: 3, c: 5 }, // We fuck
  "cogen": { s: 3, c: 5 }, // They fuck
  "cogí": { s: 3, c: 5 }, // I fucked
  "cogió": { s: 3, c: 5 }, // He/she fucked
  "cogiendo": { s: 3, c: 5 }, // Fucking
  // --- putear (to curse/insult) ---
  "puteo": { s: 1, c: 4 }, // I curse
  "puteas": { s: 1, c: 4 }, // You curse
  "putea": { s: 1, c: 4 }, // He/she curses
  "puteamos": { s: 1, c: 4 }, // We curse
  "putean": { s: 1, c: 4 }, // They curse
  "puteé": { s: 1, c: 4 }, // I cursed
  "puteó": { s: 1, c: 4 }, // He/she cursed
  "puteando": { s: 1, c: 4 }, // Cursing

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "putilla": { s: 5, c: 4 }, // Little whore
  "zorrona": { s: 3, c: 4 }, // Big fox/slut (f.)
  "cabroncito": { s: 3, c: 4 }, // Little bastard
  "pendejísimo": { s: 3, c: 4 }, // Very assholish
  "pendejito": { s: 3, c: 4 }, // Little asshole
  "pendejazo": { s: 3, c: 4 }, // Big asshole
  "hijueputica": { s: 3, c: 4 }, // Little son of a bitch (Colombia)
  "hijueputazo": { s: 3, c: 4 }, // Big son of a bitch
  "mierdecita": { s: 3, c: 5 }, // Little shit
  "mierdón": { s: 3, c: 5 }, // Big shit
  "mierdaza": { s: 3, c: 5 }, // Big shit
  "gilipollón": { s: 3, c: 4 }, // Big asshole (Spain)
  "gilipollitas": { s: 3, c: 4 }, // Little asshole (Spain)
  "idiotazo": { s: 1, c: 4 }, // Big idiot
  "idiotita": { s: 1, c: 4 }, // Little idiot
  "estupidazo": { s: 1, c: 4 }, // Big stupid
  "imbecilón": { s: 3, c: 4 }, // Big imbecile
  "imbecilito": { s: 3, c: 4 }, // Little imbecile
  "gordísimo": { s: 1, c: 4 }, // Very fat
  "gordísima": { s: 1, c: 4 }, // Very fat (f.)
  "gordote": { s: 1, c: 4 }, // Big fat
  "gordota": { s: 1, c: 4 }, // Big fat (f.)
  "tontísimo": { s: 1, c: 4 }, // Very stupid
  "tontísima": { s: 1, c: 4 }, // Very stupid (f.)
  "tontazo": { s: 1, c: 4 }, // Big stupid
  "tontito": { s: 1, c: 4 }, // Little stupid
  "tontita": { s: 1, c: 4 }, // Little stupid (f.)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "te voy a dar una putiza": { s: 5, c: 5 }, // I'll give you a beating (Mexico)
  "te voy a madrear": { s: 5, c: 5 }, // I'll mother you (beat, Mexico)
  "te rompo la cara": { s: 5, c: 5 }, // I'll break your face
  "te voy a sacar la mierda": { s: 5, c: 5 }, // I'll beat the shit out of you
  "te voy a sacar la chucha": { s: 5, c: 5 }, // I'll beat the pussy out of you (Chile/Peru)
  "te saco la cresta": { s: 5, c: 5 }, // I'll punch your crest (Chile)
  "te voy a dar una paliza": { s: 5, c: 5 }, // I'll give you a beating
  "te voy a dar una hostia": { s: 5, c: 5 }, // I'll give you a communion (slap, Spain)
  "te voy a partir el culo": { s: 5, c: 5 }, // I'll split your ass
  "te voy a reventar la jeta": { s: 5, c: 5 }, // I'll burst your face
  "lárgate": { s: 5, c: 5 }, // Get out
  "piérdete": { s: 5, c: 5 }, // Get lost
  "esfúmate": { s: 5, c: 5 }, // Vanish
  "desaparece": { s: 5, c: 5 }, // Disappear
  "revienta": { s: 5, c: 5 }, // Burst

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "carroña": { s: 1, c: 4 }, // Carrion
  "desecho": { s: 1, c: 4 }, // Waste
  "desecho humano": { s: 1, c: 4 }, // Human waste
  "engendro del demonio": { s: 1, c: 4 }, // Spawn of the devil
  "escoria de la sociedad": { s: 1, c: 4 }, // Scum of society
  "gusana": { s: 1, c: 4 }, // Worm (f.)
  "hiena": { s: 1, c: 4 }, // Hyena
  "insecto": { s: 1, c: 4 }, // Insect
  "rata de cloaca": { s: 1, c: 4 }, // Sewer rat
  "rata inmunda": { s: 1, c: 4 }, // Filthy rat
  "sanguijuela": { s: 1, c: 4 }, // Leech
  "serpiente": { s: 1, c: 4 }, // Snake
  "brujo": { s: 1, c: 4 }, // Warlock (derog.)
  "demonio": { s: 1, c: 4 }, // Demon
  "dragón": { s: 1, c: 4 }, // Dragon (ugly woman)
  "espanto": { s: 1, c: 4 }, // Fright
  "fenómeno": { s: 1, c: 4 }, // Freak
  "monstruo": { s: 1, c: 4 }, // Monster
  "ogro": { s: 1, c: 4 }, // Ogre
  "basilisco": { s: 1, c: 4 }, // Basilisk (angry person)
  "caimán": { s: 1, c: 4 }, // Caiman (sneaky)
  "chacal": { s: 1, c: 4 }, // Jackal
  "buitre": { s: 1, c: 4 }, // Vulture
  "carroñero": { s: 1, c: 4 }, // Scavenger
  "carroñera": { s: 1, c: 4 }, // Scavenger (f.)
  "sarnoso": { s: 1, c: 4 }, // Mangy
  "sarnosa": { s: 1, c: 4 }, // Mangy (f.)
  "tiñoso": { s: 1, c: 4 }, // Scabby
  "tiñosa": { s: 1, c: 4 }, // Scabby (f.)
  "repugnante": { s: 1, c: 4 }, // Repugnant
  "repulsivo": { s: 1, c: 4 }, // Repulsive
  "repulsiva": { s: 1, c: 4 }, // Repulsive (f.)
  "inmundo": { s: 1, c: 4 }, // Filthy
  "inmunda": { s: 1, c: 4 }, // Filthy (f.)
  "mugriento": { s: 1, c: 4 }, // Grimy
  "mugrienta": { s: 1, c: 4 }, // Grimy (f.)
  "cochino": { s: 1, c: 4 }, // Pig (dirty)
  "cochina": { s: 1, c: 4 }, // Pig (f.) (dirty)
  "guarrada": { s: 1, c: 4 }, // Piggery (Spain)
  "guarrería": { s: 1, c: 4 }, // Piggery (Spain)
  "perro": { s: 1, c: 4 }, // Dog (insult)
  "perra asquerosa": { s: 1, c: 4 }, // Disgusting bitch
  "hijo de perro": { s: 1, c: 4 }, // Son of a dog
  "hija de perra": { s: 1, c: 4 }, // Daughter of a bitch
  "perro desgraciado": { s: 1, c: 4 }, // Disgraced dog
  "perra desgraciada": { s: 1, c: 4 }, // Disgraced bitch
  "infeliz": { s: 1, c: 4 }, // Unhappy / wretch
  "desalmado": { s: 1, c: 4 }, // Soulless
  "desalmada": { s: 1, c: 4 }, // Soulless (f.)
  "despreciable": { s: 1, c: 4 }, // Despicable
  "detestable": { s: 1, c: 4 }, // Detestable
  "infame": { s: 1, c: 4 }, // Infamous
  "indigno": { s: 1, c: 4 }, // Unworthy
  "indigna": { s: 1, c: 4 }, // Unworthy (f.)
  "ruin": { s: 1, c: 4 }, // Mean
  "vil": { s: 1, c: 4 }, // Vile
  "canallada": { s: 1, c: 4 }, // Scoundrel act
  "sinvergonzón": { s: 1, c: 4 }, // Big shameless
  "cínico de mierda": { s: 3, c: 5 }, // Shitty cynic
  "aprovechado de mierda": { s: 3, c: 5 }, // Shitty freeloader
  "ladrón de mierda": { s: 3, c: 5 }, // Shitty thief
  "mentiroso de mierda": { s: 3, c: 5 }, // Shitty liar
  "cobarde de mierda": { s: 1, c: 4 }, // Shitty coward
  "traidor de mierda": { s: 3, c: 5 }, // Shitty traitor
  "chismoso de mierda": { s: 3, c: 5 }, // Shitty gossip

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "me cago en Cristo": { s: 3, c: 5 }, // I shit on Christ
  "me cago en el copón": { s: 3, c: 5 }, // I shit on the communion cup
  "hostias": { s: 2, c: 3 }, // Hosts (Spain expletive)
  "por Dios": { s: 2, c: 3 }, // By God
  "Dios mío": { s: 2, c: 3 }, // My God
  "Jesús": { s: 2, c: 3 }, // Jesus
  "maldición": { s: 2, c: 3 }, // Curse
  "condenado": { s: 2, c: 3 }, // Condemned
  "condenada": { s: 2, c: 3 }, // Condemned (f.)
  "demonios": { s: 2, c: 3 }, // Demons
  "diablos": { s: 2, c: 3 }, // Devils
  "infierno": { s: 2, c: 3 }, // Hell
  "al infierno": { s: 2, c: 3 }, // To hell
  "vete al infierno": { s: 2, c: 3 }, // Go to hell
  "por el amor de Dios": { s: 2, c: 3 }, // For the love of God
};

export default spanishBadWords;
