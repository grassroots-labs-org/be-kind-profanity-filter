/**
 * Brazilian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Brazilian
 */
const brazilianBadWords = [
  "abusador", // Abuser
  "arrombado", // Broken open (vulgar insult)
  "babaca", // Asshole / idiot
  "baitola", // Faggot (regional, offensive)
  "besta", // Stupid / fool
  "boçal", // Boor / ignorant
  "boquete", // Blowjob
  "brocha", // Impotent (variant)
  "buceta", // Pussy (vulgar)
  "burro", // Donkey / stupid
  "cacete", // Dick / damn
  "cagando", // Shitting
  "canalha", // Scoundrel
  "cara de cu", // Ass-face
  "carai", // Damn (variant of caralho)
  "caralho", // Dick (strong expletive)
  "caramba", // Damn (mild)
  "checheca", // Pussy (slang)
  "clitoris", // Clitoris
  "clitóris", // Clitoris (accented)
  "cocaina", // Cocaine
  "corno", // Cuckold
  "cretino", // Cretin
  "cu", // Ass / asshole
  "cuzao", // Big asshole
  "debiloide", // Moron
  "demente", // Demented / insane
  "demonio", // Demon
  "demônio", // Demon (accented)
  "desgraça", // Disgrace / damn
  "desgraçado", // Bastard / wretch
  "diabo", // Devil
  "droga", // Drug / damn
  "drogado", // Drugged / junkie
  "escroto", // Scrotum / scummy
  "estupido", // Stupid
  "estúpido", // Stupid (accented)
  "estupro", // Rape
  "fdp", // Filho da puta (son of a bitch)
  "filha da puta", // Daughter of a bitch
  "filho de uma eguá", // Son of a mare
  "foda", // Fuck
  "foda-se", // Fuck it
  "fodido", // Fucked
  "fudendo", // Fucking (variant)
  "fuder", // To fuck (variant)
  "fudido", // Fucked (variant)
  "gay", // Gay (used as insult)
  "gorda", // Fat (female)
  "gordo", // Fat (male)
  "grelinho", // Little clitoris (slang)
  "grelo", // Clitoris (slang)
  "idiota", // Idiot
  "inutil", // Useless
  "inútil", // Useless (accented)
  "karalho", // Dick (internet spelling)
  "krl", // Dick (abbreviation of caralho)
  "leproso", // Leper (insult)
  "lesado", // Dazed / stupid
  "macaca", // Female monkey (racial slur)
  "marginal", // Criminal / thug
  "marica", // Sissy / faggot
  "masoquista", // Masochist
  "merda", // Shit
  "miseravel", // Miserable / wretch
  "miserável", // Miserable / wretch (accented)
  "mulata", // Mulatto (racial term)
  "nao presta", // Good for nothing
  "nazi", // Nazi
  "nazista", // Nazi (adjective)
  "necrofilo", // Necrophiliac
  "necrófilo", // Necrophiliac (accented)
  "nem fodendo", // No fucking way
  "ninfeta", // Nymphet / underage girl (sexualized)
  "otario", // Sucker / fool
  "otário", // Sucker / fool (accented)
  "pariu", // Gave birth (as in "puta que pariu")
  "pau", // Dick / stick
  "pau no cu", // Dick in the ass
  "pedofilo", // Pedophile
  "pedófilo", // Pedophile (accented)
  "peido", // Fart
  "pemba", // Bad luck charm / penis (slang)
  "penis", // Penis
  "pênis", // Penis (accented)
  "pentelha", // Pubic hair (female, insult)
  "pentelho", // Pubic hair (male, insult)
  "perereca", // Pussy (slang)
  "peru", // Penis (slang)
  "perú", // Penis (slang, accented)
  "pica", // Dick (slang)
  "picao", // Big dick
  "picão", // Big dick (accented)
  "pinto", // Dick (slang)
  "piranha", // Piranha / slut
  "piroca", // Dick (slang)
  "piru", // Dick (childish slang)
  "pnc", // Pau no cu (dick in the ass)
  "porno", // Porn
  "porra", // Cum / fuck (expletive)
  "pqp", // Puta que pariu (holy shit)
  "prega", // Fold / insult (regional)
  "prostibulo", // Brothel
  "prostituta", // Prostitute (female)
  "prostituto", // Prostitute (male)
  "punheta", // Handjob / masturbation
  "punhetao", // Big wank
  "punhetão", // Big wank (accented)
  "punheteiro", // Wanker
  "puta", // Whore
  "puta merda", // Holy shit
  "puta que pariu", // Son of a bitch (lit. whore that gave birth)
  "puto", // Angry / male whore
  "que porra é essa", // What the fuck is this
  "rabao", // Big ass
  "rabão", // Big ass (accented)
  "rabo", // Ass / tail
  "rabuda", // Big-assed (female)
  "rabudao", // Big-assed (augmentative)
  "rabudão", // Big-assed (augmentative, accented)
  "rabudo", // Big-assed (male)
  "rabudona", // Big-assed woman
  "rachada", // Split / pussy (vulgar)
  "rachadao", // Big split (vulgar)
  "rachadinha", // Little split (vulgar)
  "rachadinho", // Little split (vulgar, male)
  "retardada", // Retarded (female)
  "retardado", // Retarded (male)
  "ridicula", // Ridiculous (female)
  "ridícula", // Ridiculous (female, accented)
  "ridiculo", // Ridiculous (male)
  "rola", // Dick (slang)
  "rolinha", // Little dick
  "rosca", // Asshole (slang)
  "sacanagem", // Dirty trick / sexual act
  "safada", // Pervert / slut (female)
  "safadeza", // Perversion / dirty behavior
  "safado", // Pervert (male)
  "safados", // Perverts (plural)
  "sapatao", // Dyke (offensive)
  "sapatão", // Dyke (offensive, accented)
  "sapatona", // Dyke (augmentative)
  "seu verme", // You worm
  "sexo", // Sex
  "sifilis", // Syphilis
  "siririca", // Female masturbation
  "sua cachorra", // You bitch (lit. your female dog)
  "tarada", // Pervert (female)
  "tarado", // Pervert (male)
  "testuda", // Big forehead (insult, female)
  "tezao", // Horny / arousal
  "tezão", // Horny / arousal (accented)
  "tezuda", // Horny (female)
  "tezudo", // Horny (male)
  "tnc", // Toma no cu (take it in the ass)
  "toma no cu", // Take it in the ass
  "tomar no cu", // Take it in the ass (infinitive)
  "tomar no cứ", // Take it in the ass (variant)
  "tonto", // Dumb / dizzy
  "transar", // To have sex
  "traveco", // Tranny (offensive)
  "trepar", // To fuck / to climb
  "trocha", // Fool (variant)
  "trolha", // Fool / trowel (insult)
  "troucha", // Fool (variant)
  "trouchas", // Fools (variant, plural)
  "trouxa", // Fool / sucker
  "trouxas", // Fools / suckers (plural)
  "troxa", // Fool (variant)
  "troxas", // Fools (variant, plural)
  "vaca", // Cow (insult for women)
  "vacilão", // Unreliable person / jerk
  "vadio", // Vagrant / bum
  "vagabunda", // Slut / bum (female)
  "vagabundo", // Bum / lowlife (male)
  "vagabundos", // Bums / lowlifes (plural)
  "vagagundos", // Bums (misspelling variant)
  "vagina", // Vagina
  "vai se foder", // Go fuck yourself
  "veada", // Doe / faggot (variant, female)
  "veadao", // Big fag (variant)
  "viada", // Faggot (female variant)
  "viadao", // Big fag
  "viadão", // Big fag (accented)
  "viado", // Faggot (offensive)
  "viados", // Faggots (plural)
  "vntc", // Vai no toma no cu (abbreviation)
  "xana", // Pussy (slang)
  "xaninha", // Little pussy (slang)
  "xavasca", // Pussy (regional slang)
  "xbiu", // Pussy (variant)
  "xereca", // Pussy (slang)
  "xerereca", // Pussy (variant)
  "xexecə", // Pussy (variant)
  "xibu", // Pussy (variant)
  "xota", // Pussy (slang)
  "xoxota", // Pussy (slang)
  "bunda", // Butt / ass
  "bundas", // Butts / asses (plural)
  "bolas", // Balls (testicles)
  "broche", // Blowjob (Portuguese variant)
  "broches", // Blowjobs (plural)
  "cabrão", // Bastard (Portuguese)
  "cabrões", // Bastards (plural)
  "cadelas", // Bitches (lit. female dogs)
  "cona", // Cunt (Portuguese)
  "conas", // Cunts (plural, Portuguese)
  "ejaculação", // Ejaculation
  "excitado", // Aroused / horny
  "filho da puta", // Son of a bitch
  "filhos da puta", // Sons of bitches
  "filho da mãe", // Son of a mother (euphemism for son of a bitch)
  "fode-se", // Fuck it (Portuguese variant)
  "fodas", // Fucks (plural)
  "fodendo", // Fucking
  "fodida", // Fucked (female)
  "idiotas", // Idiots (plural)
  "mamas", // Breasts
  "masturbar-se", // To masturbate
  "merdas", // Shits (plural)
  "mijando", // Pissing
  "orgasmo", // Orgasm
  "peitos", // Breasts / chest
  "pornô", // Porn (accented)
  "pornografia", // Pornography
  "putas", // Whores (plural)
  "que merda", // What shit
  "que se lixe", // Screw it (Portuguese)
  "sacana", // Rascal / pervert
  "sémen", // Semen
  "tetas", // Tits
  "bosta", // Crap / cow dung
  "arrombada", // Broken open (female, vulgar insult)
  "rapariga", // Prostitute (Brazilian) / girl (Portuguese)
  "putaria", // Debauchery / slutty behavior
  "pilantra", // Crook / scammer
  "chupa rola", // Suck dick
  "chupa meu pau", // Suck my dick
  "vai tomar no cu", // Go take it in the ass
  "puta que te pariu", // The whore that bore you
  "pau no seu cu", // Dick in your ass
  "enrabado", // Sodomized (insult)
  "cuzuda", // Big-assed (female, vulgar)
  "cornudo", // Cuckold (variant)
  "boceta", // Pussy (variant spelling)
  "desgraçada", // Wretch / bastard (female)
  "porra caralho", // Fuck damn (compound expletive)

  // Additional Brazilian Portuguese profanity
  "bicha", // Faggot (very offensive in Brazil)
  "bichona", // Augmentative of bicha
  "broxa", // Impotent / limp dick
  "bucetuda", // Big pussy (vulgar)
  "caceta", // Variant of cacete
  "caralha", // Fem variant of caralho
  "caguei", // I shat / I don't care
  "cornão", // Big cuckold
  "cu de burro", // Donkey's ass
  "desgraçado de merda", // Fucking bastard
  "embucetado", // Pissed off (vulgar)
  "encoxar", // To grope
  "enfiado no cu", // Shoved up the ass
  "enrabada", // Fem of enrabado
  "feder", // To stink
  "filha de uma égua", // Daughter of a mare
  "foda pra caralho", // Fucking a lot
  "fudeu", // It's fucked
  "gringo de merda", // Fucking foreigner
  "lazarento", // Leper (insult)
  "mete o pau", // Stick the dick in / Criticize harshly
  "não enche o saco", // Don't bust my balls
  "otária", // Fem of otário
  "pau no cu da sua mãe", // Dick in your mother's ass
  "piranhão", // Big slut
  "porra louca", // Crazy fucker
  "safadão", // Big pervert
  "saco de merda", // Bag of shit
  "sem vergonha", // Shameless
  "sua puta", // You whore
  "tapado", // Stupid / blocked
  "vai se fuder", // Go fuck yourself
  "vtnc", // Abbreviation: vai tomar no cu

  // More compound insults and phrases
  "vai tomar no olho do cu", // Go get fucked in the eye of the ass
  "enfia no cu", // Shove it up your ass
  "mete no cu", // Stick it in the ass
  "mete a rola", // Stick the dick
  "enfiar no rabo", // Shove up the ass
  "cu arrombado", // Busted ass
  "cuzão de merda", // Shitty asshole
  "filho da puta de merda", // Son of a bitch of shit
  "desgraça de merda", // Fucking disgrace
  "porra nenhuma", // No fucking thing
  "vai pro caralho", // Go to the dick (go to hell)
  "vai pro inferno", // Go to hell
  "que porra", // What the fuck
  "puta da tua mãe", // Your mother the whore
  "tua mãe é uma puta", // Your mother is a whore
  "mama minha rola", // Suck my dick
  "chupa minha pica", // Suck my dick (variant)
  "caralho de merda", // Shitty dick
  "vai chupar rola", // Go suck dick
  "goza na cara", // Cum on face
  "me chupa", // Suck me

  // More insults
  "cabaço", // Virgin (male, insulting)
  "cabaça", // Virgin (female, insulting)
  "corna", // Female cuckold
  "fresco", // Effeminate (derogatory)
  "frescão", // Augmentative of fresco
  "galinha", // Chicken (slut)
  "galinhão", // Man-whore
  "filho de uma puta", // Son of a bitch
  "jumento", // Jackass
  "jumenta", // Female jackass
  "borra", // Scum
  "imbecil", // Imbecile
  "babacão", // Augmentative of babaca
  "lambe cu", // Ass licker
  "lambe saco", // Ball licker
  "chupador", // Sucker
  "cuzeta", // Small asshole
  "filha de uma puta", // Daughter of a bitch
  "mongol", // Mongoloid (offensive)
  "mongolão", // Augmentative
  "merdão", // Big shit
  "merdosa", // Shitty (female)
  "merdoso", // Shitty (male)
  "pau mole", // Limp dick
  "pau pequeno", // Small dick
  "pau torto", // Bent dick
  "pirocudo", // Big-dicked
  "porra toda", // All shit
  "putão", // Big whore (male)
  "putona", // Big whore (female)
  "rabudas", // Plural of rabuda
  "saco de bosta", // Bag of crap
  "sem cu", // Without ass
  "viado nojento", // Disgusting fag
  "puteiro", // Whorehouse
  "cafetina", // Madam (brothel)
  "cafetão", // Pimp
  "chifre", // Horn (cuckold reference)
  "chifrado", // Cuckolded
  "chifrada", // Cuckolded (female)
  "arregaçada", // Stretched out (vulgar)
  "arregaçado", // Stretched out (vulgar, male)

  // Internet/text slang
  "vsf", // Vai se fuder
  "kct", // Cacete
  "caraio", // Caralho variant
  "kraal", // Caralho variant
  "poha", // Porra variant
  "sfd", // Se fuder
  "plmds", // Pelo amor de deus (frustration)
  "nmrl", // Na moral (slang)
  "lixo humano", // Human garbage
  "verme", // Worm
  "nojento", // Disgusting (male)
  "nojenta", // Disgusting (female)
  "asqueroso", // Disgusting
  "asquerosa", // Disgusting (female)

  // Regional variations
  "porco", // Pig (insult)
  "porca", // Pig (female insult)
  "jegue", // Donkey (northeastern)
  "baitolão", // Augmentative of baitola
  "trouxão", // Big fool
  "cagueta", // Snitch
  "dedo duro", // Snitch
  "fominha", // Greedy
  "mão de vaca", // Cheapskate
  "pão duro", // Cheapskate
  "sem vergonhice", // Shamelessness
  "metido", // Full of oneself
  "metida", // Full of oneself (female)
  "filho de chocadeira", // Son of an incubator
  "desgraçados", // Plural
  "biscate", // Slut (regional)
  "quenga", // Prostitute (northeastern)
  "raparigueiro", // Womanizer (northeastern)
  "mulambo", // Rag (insult)
  "mulambento", // Ragged (insult)
  "pau mandado", // Puppet
  "comedor de merda", // Shit eater

  // ========================================
  // === Northeastern Brazilian Slang ===
  // ========================================
  "arretado de besta", // Extremely stupid (NE)
  "arengueira", // Troublemaker woman (NE)
  "arengueiro", // Troublemaker man (NE)
  "besta quadrada", // Squared beast (very stupid, NE)
  "bizonho", // Ugly/weird (NE)
  "brocado", // Horny (NE)
  "cabra safado", // Dirty dude (NE)
  "cabra desgraçado", // Wretched dude (NE)
  "comer a mãe", // Fuck the mother (NE)
  "cu de boi", // Ox's ass (NE insult)
  "cu de jegue", // Donkey's ass (NE)
  "desconjuntado", // Disjointed (NE insult)
  "egua", // Mare (NE expletive)
  "égua", // Mare (NE expletive, accented)
  "égua puta", // Mare whore (NE compound)
  "eita porra", // Damn fuck (NE expletive)
  "filho de rapariga", // Son of a slut (NE)
  "fresco do cu", // Ass fresh (NE effeminate insult)
  "mala sem alça", // Suitcase without handle (annoying person, NE)
  "marmota", // Fool (NE)
  "mofino", // Stingy/pathetic (NE)
  "mocreia", // Ugly woman (NE)
  "peba", // Pathetic person (NE)
  "pivete de merda", // Shitty kid (NE)
  "quenga de merda", // Shitty prostitute (NE)
  "rapariga de merda", // Shitty slut (NE)
  "tabacudo", // Big-lipped (NE insult)
  "tchola", // Gay (NE offensive)
  "toxico", // Drug addict (NE slang)

  // ========================================
  // === Southern Brazilian (Gaúcho) ===
  // ========================================
  "barbaridade porra", // Damn (Gaúcho compound)
  "bah porra", // Gaúcho expletive compound
  "butiá descascado", // Peeled butiá (ugly, RS)
  "cusco safado", // Dirty mutt (RS)
  "cusco de merda", // Shitty mutt (RS)
  "gringo filho da puta", // Foreigner son of a bitch (RS)
  "guria puta", // Whore girl (RS)
  "guri safado", // Dirty boy (RS)
  "tchê porra", // Gaúcho fuck expletive
  "tri arrombado", // Very broken open (RS intensifier)
  "tri cuzão", // Very asshole (RS)
  "tri fdp", // Very son of a bitch (RS)
  "tri otário", // Very fool (RS)

  // ========================================
  // === Rio de Janeiro/Carioca Slang ===
  // ========================================
  "caralho mermão", // Dick bro (carioca)
  "é o caralho", // It's the dick (carioca dismissal)
  "foda-se mermão", // Fuck it bro (carioca)
  "maluco do caralho", // Crazy fucker (carioca)
  "mané do caralho", // Stupid fucker (carioca)
  "mermão do caralho", // Fucking bro (carioca)
  "neguinho safado", // Dirty dude (carioca, can be racial)
  "porra mané", // Fuck stupid (carioca)
  "porra mermão", // Fuck bro (carioca)
  "vai se fuder mané", // Go fuck yourself stupid (carioca)
  "vagabundo do caralho", // Fucking bum (carioca)
  "menor safado", // Dirty kid (carioca slang)
  "alemão safado", // Dirty german (carioca slang for enemy)
  "cria do diabo", // Devil's spawn (carioca)

  // ========================================
  // === São Paulo/Paulista Profanity ===
  // ========================================
  "mano do caralho", // Fucking bro (SP)
  "mano otário", // Fool bro (SP)
  "mina vadia", // Slutty girl (SP)
  "mlk fdp", // Kid son of a bitch (SP texting)
  "nóia do caralho", // Fucking junkie (SP)
  "porra mano", // Fuck bro (SP)
  "truta fdp", // Homie son of a bitch (SP)
  "vai se fuder mano", // Go fuck yourself bro (SP)
  "véio safado", // Dirty old man (SP)
  "véia safada", // Dirty old woman (SP)
  "zé buceta", // Joe pussy (SP worthless man)
  "zé ruela", // Joe asshole (SP)
  "zé mané", // Joe stupid (SP)

  // ========================================
  // === Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl", // Broken open fucker (texting)
  "bct", // Buceta abbreviation
  "boludo", // Ball-like (borrowed from Argentine, fool)
  "canceroso", // Cancerous (gaming insult)
  "crlh", // Caralho abbreviation
  "cu de ferro", // Iron ass (stubborn, gaming)
  "desinstalou o jogo", // Uninstall the game (gaming taunt)
  "fdp do krl", // Son of a bitch fucker (texting)
  "fds", // Foda-se abbreviation
  "filhodaputa", // Son of a bitch (compound)
  "flw fdp", // Bye son of a bitch (texting)
  "gg fdp", // Good game son of a bitch (gaming)
  "kd o cu", // Where's the ass (texting)
  "kid burro", // Stupid kid (gaming)
  "lixão", // Big garbage (gaming insult)
  "lixo do caralho", // Fucking garbage (gaming)
  "mrd", // Merda abbreviation
  "noob fdp", // Noob son of a bitch (gaming)
  "pqp mano", // Holy shit bro (texting)
  "puta q pariu", // Son of a bitch (texting variant)
  "retardado do krl", // Fucking retard (texting)
  "tmj fdp", // Together son of a bitch (texting)
  "vai cagar", // Go shit
  "vai pro krl", // Go to the dick (texting)
  "vtnc mano", // Take it in the ass bro (texting)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "arrombado de merda", // Shitty broken open
  "babaca do caralho", // Fucking idiot
  "besta de merda", // Shitty fool
  "bicha nojenta", // Disgusting fag
  "bosta de gente", // Shit of a person
  "broxa de merda", // Shitty impotent
  "buceta fedida", // Stinky pussy
  "burro de merda", // Shitty donkey
  "burro do caralho", // Fucking donkey
  "cachorra de merda", // Shitty bitch
  "caralho a quatro", // Four-way dick (extreme expletive)
  "cona de merda", // Shitty cunt
  "cornão de merda", // Shitty big cuckold
  "corno manso", // Tame cuckold (accepting cuckold)
  "cu de cavalo", // Horse's ass
  "cu fedido", // Stinky ass
  "cu sujo", // Dirty ass
  "cuzão do caralho", // Fucking asshole
  "desgraçado do caralho", // Fucking bastard
  "imbecil do caralho", // Fucking imbecile
  "jumento de merda", // Shitty jackass
  "lixo de gente", // Garbage of a person
  "merda de pessoa", // Shit of a person
  "nojento de merda", // Shitty disgusting
  "otário do caralho", // Fucking sucker
  "pau de merda", // Shitty dick
  "piranha de merda", // Shitty slut
  "piranha do caralho", // Fucking slut
  "porco de merda", // Shitty pig
  "porra de merda", // Shitty cum
  "puta barata", // Cheap whore
  "puta de merda", // Shitty whore
  "puta do caralho", // Fucking whore
  "rola de merda", // Shitty dick
  "safado de merda", // Shitty pervert
  "safado do caralho", // Fucking pervert
  "trouxa do caralho", // Fucking fool
  "vaca de merda", // Shitty cow
  "vagabunda de merda", // Shitty slut
  "vagabundo de merda", // Shitty bum
  "verme de merda", // Shitty worm
  "verme do caralho", // Fucking worm
  "viado de merda", // Shitty fag

  // ========================================
  // === Portuguese from Portugal ===
  // ========================================
  "atirar ao boneco", // Masturbate (PT)
  "badalhoca", // Filthy woman (PT)
  "badalhoco", // Filthy man (PT)
  "branleur", // Wanker (PT borrowed)
  "burra do caralho", // Fucking stupid (female, PT)
  "cabrão do caralho", // Fucking bastard (PT)
  "caralhada", // Dick move (PT)
  "caralhudo", // Big-dicked (PT)
  "chulo", // Pimp (PT)
  "chula", // Pimp's woman (PT)
  "coiro", // Leather/hide (PT slang for ugly person)
  "conas de sabão", // Soap cunts (PT worthless)
  "esporra", // Cum (PT)
  "esporrada", // Ejaculation (PT)
  "foda-se caralho", // Fuck damn (PT compound)
  "fodasse", // Fuck (PT compound variant)
  "foder a mãe", // Fuck the mother (PT)
  "foder o cu", // Fuck the ass (PT)
  "foder-se", // Fuck oneself (PT)
  "fufa", // Dyke (PT offensive)
  "granda cabrão", // Big bastard (PT)
  "granda cona", // Big cunt (PT)
  "granda puta", // Big whore (PT)
  "ir para o caralho", // Go to the dick (PT go to hell)
  "lamparina", // Lamp (PT euphemism for ass)
  "levar no cu", // Take it in the ass (PT)
  "mama na piça", // Suck the dick (PT)
  "manda-te foder", // Go get fucked (PT)
  "maricas", // Faggot (PT)
  "mija", // Piss (PT)
  "mija-me todo", // Piss me all (PT)
  "paneleiro", // Faggot (PT offensive)
  "paneleira", // Dyke (PT offensive)
  "piça", // Dick (PT)
  "pissa", // Piss (PT variant)
  "putedo", // Brothel (PT)
  "putéfio", // Brothel (PT variant)
  "rabo de fora", // Ass out (PT)
  "rata", // Pussy (PT slang)
  "ratinha", // Little pussy (PT)
  "tomates", // Tomatoes/balls (PT slang for testicles)
  "vai levar no cu", // Go take it in the ass (PT)
  "vai para o caralho", // Go to the dick (PT)
  "vai para o cu da tua mãe", // Go to your mother's ass (PT)

  // ========================================
  // === Body Part Vulgarities ===
  // ========================================
  "anus", // Anus
  "ânus", // Anus (accented)
  "bico do peito", // Nipple
  "bocetinha", // Little pussy
  "boquinha", // Little mouth (sexual innuendo)
  "bundinha", // Little ass
  "cacetão", // Big dick
  "cacetinho", // Little dick
  "culhão", // Big ball/testicle
  "culhões", // Big balls/testicles
  "cu peludo", // Hairy ass
  "cu raspado", // Shaved ass
  "mamilo", // Nipple
  "pentelhuda", // Hairy-pubed (female)
  "pentelhudo", // Hairy-pubed (male)
  "periquita", // Little pussy (variant)
  "picona", // Big-dicked (female form, as insult)
  "rabo peludo", // Hairy ass
  "saco de bola", // Ball sack (variant)
  "teta grande", // Big tit
  "tetona", // Big-titted
  "tetuda", // Big-titted (variant)

  // ========================================
  // === Favela/Street Slang ===
  // ========================================
  "boca de fumo", // Drug selling point
  "bonde do caralho", // Fucking gang
  "caguetou", // Snitched (past tense)
  "cheirador", // Coke snorter
  "chupar o pau do diabo", // Suck the devil's dick
  "cuzinheiro", // Ass man (vulgar)
  "desce a ladeira", // Go down the hill (dismissive)
  "engomadinho", // Preppy (insult)
  "favelado de merda", // Shitty favela dweller
  "gambé", // Cop (slang, derogatory)
  "gambé fdp", // Cop son of a bitch
  "laranja podre", // Rotten orange (snitch)
  "maloqueiro fdp", // Thug son of a bitch
  "merdinha", // Little shit
  "moleque de merda", // Shitty kid
  "noia", // Junkie (street slang)
  "noiado", // High/junky
  "noiada", // High/junky (female)
  "patrãozinho de merda", // Shitty little boss
  "playboy de merda", // Shitty rich kid
  "safadinho", // Little pervert
  "safadinha", // Little pervert (female)
  "traficante de merda", // Shitty drug dealer
  "trombadinha", // Pickpocket kid
  "vacilou", // Slipped up (used insultingly)
  "vida loka", // Crazy life (street slang)
  "X9 do caralho", // Fucking snitch

  // ========================================
  // === Sexual Terms ===
  // ========================================
  "boqueteira", // Blowjob giver (female)
  "boqueteiro", // Blowjob giver (male)
  "brochar", // To go limp
  "chupeta de rola", // Dick pacifier
  "comer o cu", // Eat the ass (fuck the ass)
  "comer o rabo", // Eat the ass (variant)
  "comeu gostoso", // Ate/fucked good
  "dar a buceta", // Give the pussy
  "dar o cu", // Give the ass
  "dar o rabo", // Give the ass (variant)
  "enrabar", // To sodomize
  "fio terra", // Ground wire (anal play slang)
  "gozar na boca", // Cum in the mouth
  "gozar na cara", // Cum in the face
  "leite de rola", // Dick milk (cum)
  "mamar o pau", // Suck the dick (variant)
  "meter a pica", // Insert the dick
  "meter gostoso", // Fuck good
  "meter o pau", // Insert the dick (variant)
  "pica na buceta", // Dick in pussy
  "rola dura", // Hard dick
  "sentar na pica", // Sit on the dick
  "sentar na rola", // Sit on the dick (variant)
  "trepada", // Fuck (noun)
  "xerecão", // Big pussy
  "xerequinha", // Little pussy

  // ========================================
  // === Evasion Spellings ===
  // ========================================
  "c4ralho", // Dick (evasion)
  "buc3ta", // Pussy (evasion)
  "fod4", // Fuck (evasion)
  "p0rra", // Cum/fuck (evasion)
  "m3rda", // Shit (evasion)
  "put4", // Whore (evasion)
  "c@ralho", // Dick (evasion)
  "buc#ta", // Pussy (evasion)
  "f0da", // Fuck (evasion)
  "p*rra", // Cum/fuck (evasion)
  "m*rda", // Shit (evasion)
  "put@", // Whore (evasion)
  "c*ralho", // Dick (evasion)
  "b*ceta", // Pussy (evasion)
  "f*da", // Fuck (evasion)
  "v1ado", // Faggot (evasion)
  "v!ado", // Faggot (evasion)
  "arr0mbado", // Broken open (evasion)
  "cuz4o", // Asshole (evasion)
  "p1ranha", // Slut (evasion)
  "r0la", // Dick (evasion)
  "p1ca", // Dick (evasion)
  "pir0ca", // Dick (evasion)
  "b0sta", // Crap (evasion)
  "p@u", // Dick (evasion)
  "c0rno", // Cuckold (evasion)
  "crlho", // Caralho shorthand
  "bct4", // Buceta evasion
  "fdp!", // Son of a bitch evasion
  "ptqp", // Puta que pariu evasion
  "carr4lho", // Dick evasion variant
  "buçeta", // Pussy (accent evasion)
  "karaio", // Dick (k evasion variant)
  "pohha", // Porra variant
  "pohá", // Porra variant
  "mierda", // Shit (Spanish-influenced evasion)
  "arronbado", // Broken open (misspelling evasion)
  "cuza0", // Asshole (zero evasion)

  // ========================================
  // === More Compound Phrases ===
  // ========================================
  "vai tomar no meio do cu", // Go take it in the middle of the ass
  "vai chupar o cu da mãe", // Go suck your mother's ass
  "enfia essa porra no cu", // Shove this shit up your ass
  "mete essa rola no cu", // Stick this dick up your ass
  "enfiar a rola no cu", // Shove the dick up the ass
  "mama minha pica", // Suck my dick (variant)
  "chupa meu saco", // Suck my balls
  "lambe meu cu", // Lick my ass
  "lambe minha buceta", // Lick my pussy
  "senta nessa pica", // Sit on this dick
  "vai dar o cu", // Go give your ass
  "vai chupar uma rola", // Go suck a dick
  "vai mamar", // Go suck (vulgar)
  "vai dar a buceta", // Go give your pussy
  "toma no rabo", // Take it in the ass (variant)
  "toma nesse cu", // Take it in this ass
  "mete no rabo", // Stick it in the ass (variant)
  "enfiar no cu e rodar", // Shove up the ass and spin
  "chupa até o talo", // Suck it to the base
  "pau na tua boca", // Dick in your mouth
  "rola na tua cara", // Dick in your face
  "porra na tua cara", // Cum in your face
  "goza nessa cara de puta", // Cum on this whore face
  "mama essa pica suja", // Suck this dirty dick
  "carne de porco fedida", // Stinky pork (compound insult)
  "saco de merda ambulante", // Walking bag of shit
  "monte de bosta", // Pile of crap
  "pedaço de merda", // Piece of shit
  "cara de merda", // Shit face
  "cara de buceta", // Pussy face
  "boca de buceta", // Pussy mouth
  "nariz de pau", // Dick nose
  "olho do cu", // Eye of the ass (asshole)
  "cu de gato", // Cat's ass
  "cu de porco", // Pig's ass
  "rabo de vaca", // Cow's ass
  "cu de macaco", // Monkey's ass
  "merda de gente", // Shit person (variant)

  // ========================================
  // === Regional Variations (All States) ===
  // ========================================
  // Minas Gerais
  "uai porra", // MG expletive
  "trem do caralho", // Fucking thing (MG)
  "trem arrombado", // Broken thing (MG)
  "nó tio que porra", // Damn uncle what fuck (MG)
  "vai tomar no cu sô", // Go get fucked buddy (MG)
  "cê é besta demais", // You're too stupid (MG)
  "sô do caralho", // Fucking buddy (MG)
  "cabra da peste fdp", // Stubborn bastard son of bitch (MG)
  "cê é burro pra caralho", // You're fucking stupid (MG)

  // Bahia
  "mah ôxe porra", // Bahia expletive
  "ave maria porra", // Holy Mary fuck (Bahia)
  "ôxe do caralho", // Fucking damn (Bahia)
  "piranha oxente", // Bahia slut
  "corno da porra", // Damn cuckold (Bahia)
  "vei safado do caralho", // Fucking dirty old man (Bahia)
  "cabra safado da porra", // Damn dirty dude (Bahia)
  "bicha do caralho", // Fucking fag (Bahia)

  // Pará / Northern
  "égua do caralho", // Fucking mare (Pará)
  "curumim safado", // Dirty kid (Pará)
  "caboclo fdp", // Mixed-race son of bitch (Pará, offensive)
  "porra egua", // Damn mare (Pará)
  "égua da puta", // Whore mare (Pará)
  "caralho bicho", // Dick dude (Pará)
  "bicho fdp", // Dude son of bitch (Pará)

  // Pernambuco
  "aff porra", // Pernambuco expletive
  "quenga arrombada", // Broken open prostitute (PE)
  "cabra da peste desgraçado", // Stubborn bastard (PE)
  "eita porra do caralho", // Damn fuck (PE compound)
  "besta porra", // Stupid fuck (PE)
  "arrombado da peste", // Stubborn broken open (PE)
  "porra recife", // Recife fuck (PE expletive)
  "vixe porra", // Holy shit (PE)

  // Maranhão
  "égua porra maranhão", // Mare fuck (MA)
  "cabra fdp do caralho", // Dude son of bitch fucker (MA)
  "porra moleque", // Fuck kid (MA)

  // Ceará
  "rapaz do caralho", // Fucking boy (CE)
  "abestado do caralho", // Fucking fool (CE)
  "cabra macho fdp", // Tough dude son of bitch (CE)
  "mermão porra", // Bro fuck (CE)
  "rapaz desgraçado", // Wretched boy (CE)

  // Goiás / Centro-Oeste
  "uai do caralho", // Fucking damn (GO)
  "trem fdp", // Fucking thing (GO, MG influence)
  "cê é trouxa demais", // You're too foolish (GO)
  "porra sertanejo", // Fuck (GO expletive)

  // ========================================
  // === Portuguese Internet Slang Evasions ===
  // ========================================
  "krl mano", // Caralho mano evasion
  "pfv fdp", // Please son of bitch (ironic)
  "tmj krl", // Together dick (texting)
  "kkk fdp", // Laughing son of bitch
  "slc krl", // Damn dick (texting)
  "mds fdp", // My God son of bitch
  "pqp krl", // Holy shit dick
  "vsf krl", // Go fuck yourself dick
  "vtnc krl", // Take it in the ass dick
  "mn do krl", // Bro fucker
  "mlk fdp krl", // Kid son of bitch dick
  "ss fdp", // Yes son of bitch
  "n fdp", // No son of bitch
  "glr fdp", // Guys son of bitch (group)
  "ta de sacanagem", // You're kidding (vulgar)
  "na moralzinha", // On the down low (sarcastic)
  "papo reto fdp", // Straight talk son of bitch
  "caraleo", // Caralho evasion variant
  "karamba", // Caramba evasion
  "pohha carai", // Porra caralho evasion
  "mds porr", // My God porra evasion

  // ========================================
  // === Portunhol (Portuguese-Spanish Mix Border Slang) ===
  // ========================================
  "hijo de puta", // Son of a bitch (Spanish in Brazil border)
  "la concha de tu madre", // Your mother's pussy (Argentine-border)
  "boludo de merda", // Shitty fool (Argentine-border)
  "pelotudo fdp", // Big-balled son of bitch (border)
  "la puta que te parió", // The whore that bore you (border)
  "anda a la mierda", // Go to shit (border)
  "anda cagar", // Go shit (border mix)
  "conchudo", // Brazen (border)
  "conchuda", // Brazen (female, border)
  "pendejo do caralho", // Fucking idiot (border)
  "boludo arrombado", // Fool broken open (border)
  "la puta madre", // The whore mother (border)
  "carajo de merda", // Shitty dick (border)
  "chinga tu madre", // Fuck your mother (Mexican-border)
  "verga del caralho", // Dick of the dick (border compound)
  "culero fdp", // Asshole son of bitch (border)
  "mierda de poronga", // Shit of a dick (border)
  "poronga de merda", // Shitty dick (border variant)
  "pija do caralho", // Fucking dick (border)
  "la re puta madre", // The re-whore mother (border intensified)
  "choto do caralho", // Fucking worthless (border)
  "forro de merda", // Shitty condom (border insult)

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "boquetão", // Big blowjob
  "chupar a xota", // Suck the pussy
  "comer a xereca", // Eat the pussy
  "dar a xota", // Give the pussy
  "enfiar a pica", // Insert the dick
  "foder a buceta", // Fuck the pussy
  "foder o rabo", // Fuck the ass
  "gozar dentro", // Cum inside
  "gozar fora", // Cum outside
  "lamber a buceta", // Lick the pussy
  "lamber a xota", // Lick the pussy (variant)
  "lamber o cu", // Lick the ass
  "mamar a pica", // Suck the dick (variant)
  "mamar a piroca", // Suck the dick (variant)
  "meter a rola", // Insert the dick (variant)
  "meter forte", // Fuck hard
  "meter fundo", // Fuck deep
  "pica dura", // Hard dick
  "pica grande", // Big dick
  "pica grossa", // Thick dick
  "pica mole", // Limp dick
  "piroca dura", // Hard dick (variant)
  "rola grande", // Big dick (variant)
  "rola grossa", // Thick dick (variant)
  "sentar gostoso", // Sit nice (sexual)
  "sentar no pau", // Sit on the dick
  "trepada gostosa", // Nice fuck
  "xereca molhada", // Wet pussy
  "xota gostosa", // Nice pussy
  "buceta apertada", // Tight pussy
  "buceta larga", // Loose pussy
  "cu apertado", // Tight ass
  "cu largo", // Loose ass
  "gozar na boca dela", // Cum in her mouth
  "gozar no rabo", // Cum in the ass
  "leite na cara", // Milk in the face (cum)
  "meter até o saco", // Fuck until the balls
  "pau gostoso", // Nice dick
  "sentar até o talo", // Sit until the base
  "chupar o grelo", // Suck the clitoris
  "dedo no cu", // Finger in the ass
  "punheta gostosa", // Nice handjob
  "siririca gostosa", // Nice female masturbation
  "chupada no pau", // Blowjob on the dick
  "chupada na buceta", // Oral on the pussy
  "foda violenta", // Violent fuck
  "comida de rabo", // Ass eating

  // ========================================
  // === More Insults and Slurs ===
  // ========================================
  "abobado", // Dazed/dumb
  "abobalhado", // Dazed/stupid
  "animal do caralho", // Fucking animal
  "babaovo", // Sycophant / bootlicker
  "bagaceira", // Trashy woman
  "bagaceiro", // Trashy man
  "barrigudo", // Big-bellied (insult)
  "bisonho", // Ugly/weird
  "bruxa", // Witch (insult)
  "burra", // Stupid (female)
  "caloteiro", // Deadbeat
  "caloteira", // Deadbeat (female)
  "canalha de merda", // Shitty scoundrel
  "capeta", // Devil/demon
  "chato do caralho", // Fucking annoying
  "cobra", // Snake (treacherous)
  "cretino de merda", // Shitty cretin
  "descarada", // Shameless (female)
  "descarado", // Shameless (male)
  "energúmeno", // Energumen/violent idiot
  "escória", // Scum/dregs
  "escrota", // Scummy (female)
  "estorvo", // Nuisance
  "fedorento", // Stinky (male)
  "fedorenta", // Stinky (female)
  "feia", // Ugly (female)
  "feio", // Ugly (male)
  "fracassado", // Failure/loser
  "fracassada", // Failure/loser (female)
  "franguinha", // Little chicken (coward, effeminate)
  "ignorante", // Ignorant
  "imundo", // Filthy (male)
  "imunda", // Filthy (female)
  "infeliz", // Unhappy/wretched person
  "maldito", // Damn/cursed (male)
  "maldita", // Damn/cursed (female)
  "maluco", // Crazy (male)
  "maluca", // Crazy (female)
  "mandrião", // Lazy bum
  "miserável do caralho", // Fucking wretch
  "monstra", // Monster (female insult)
  "monstro", // Monster (male insult)
  "morto de fome", // Starving (cheapskate insult)
  "mula", // Mule (stupid)
  "narigudo", // Big-nosed
  "orelhudo", // Big-eared
  "parasita", // Parasite
  "pé rapado", // Bare-footed (poor, insult)
  "picareta", // Scammer
  "porco imundo", // Filthy pig
  "preguiçoso", // Lazy (male)
  "preguiçosa", // Lazy (female)
  "pústula", // Pustule (insult)
  "ranhoso", // Snotty (male)
  "ranhosa", // Snotty (female)
  "resto de aborto", // Abortion leftovers (extreme insult)
  "seboso", // Greasy/gross (male)
  "sebosa", // Greasy/gross (female)
  "sujo", // Dirty (male)
  "suja", // Dirty (female)
  "toupeira", // Mole (blind/stupid)
  "vagal", // Vagrant (variant)
  "velho broxa", // Old impotent man
  "verme nojento", // Disgusting worm
  "aborto mal feito", // Badly done abortion (extreme insult)
  "catinga", // Body odor (insult)
  "catingoso", // Stinky person
  "chinelão", // Big flip-flop (cheap person)
  "crackudo", // Crack addict
  "drogadinho", // Little drug addict
  "escória humana", // Human scum
  "lixo ambulante", // Walking garbage
  "pedaço de bosta", // Piece of crap
  "podre por dentro", // Rotten inside
  "rato de esgoto", // Sewer rat
  "sanguessuga", // Leech (parasite)
  "trambiquer", // Scammer (variant)
  "traste", // Piece of junk (insult)
  "vadiagem", // Vagrancy/slutty behavior
  "vergonha da família", // Family shame

  // ========================================
  // === Extended Brazilian Profanity ===
  // ========================================
  "arrombado de merda do caralho", // Fucking shitty broken open
  "babaca de merda do caralho", // Fucking shitty idiot
  "besta de merda do caralho", // Fucking shitty fool
  "burro de merda do caralho", // Fucking shitty donkey
  "corno de merda do caralho", // Fucking shitty cuckold
  "cuzão de merda do caralho", // Fucking shitty asshole
  "desgraçado de merda do caralho", // Fucking shitty bastard
  "imbecil de merda do caralho", // Fucking shitty imbecile
  "otário de merda do caralho", // Fucking shitty sucker
  "piranha de merda do caralho", // Fucking shitty slut
  "puta de merda do caralho", // Fucking shitty whore
  "retardado de merda do caralho", // Fucking shitty retard
  "safado de merda do caralho", // Fucking shitty pervert
  "trouxa de merda do caralho", // Fucking shitty fool
  "vaca de merda do caralho", // Fucking shitty cow
  "vagabunda de merda do caralho", // Fucking shitty slut
  "vagabundo de merda do caralho", // Fucking shitty bum
  "viado de merda do caralho", // Fucking shitty fag
  "verme de merda do caralho", // Fucking shitty worm

  // ========================================
  // === Angola Portuguese Profanity ===
  // ========================================
  "cabrão da merda", // Bastard of shit (Angola)
  "cornudo de merda", // Shitty cuckold (Angola)
  "foder a mãe toda", // Fuck the whole mother (Angola)
  "grande puta", // Big whore (Angola)
  "ir pro caralho todo", // Go completely to dick (Angola)
  "mambo de merda", // Shitty matter (Angola slang)
  "monangamba de merda", // Shitty slave (Angola offensive)
  "mulato de merda", // Shitty mixed-race (Angola offensive)
  "pila", // Dick (Angola/PT)
  "pila grande", // Big dick (Angola)
  "pila pequena", // Small dick (Angola)
  "pilantra de merda", // Shitty crook (Angola)
  "pontapé no cu", // Kick in the ass (Angola)
  "quimbunda", // Insult (Angola ethnic slur)
  "vai para a pila", // Go to the dick (Angola)
  "vai para o raio que te parta", // Go to the lightning (Angola curse)

  // ========================================
  // === Mozambique Portuguese Profanity ===
  // ========================================
  "chamar nomes", // Call names (Mozambique insult)
  "dar porrada", // Give beatings (Mozambique)
  "foda-se mano", // Fuck it bro (Mozambique)
  "grande cabrão do caralho", // Fucking big bastard (Mozambique)
  "ir mamar", // Go suck (Mozambique)
  "machimbombo de merda", // Shitty bus (Mozambique insult)
  "mana puta", // Sister whore (Mozambique)
  "pila no cu", // Dick in the ass (Mozambique)
  "vai para a cona", // Go to the cunt (Mozambique)
  "vai levar porrada", // Go take beatings (Mozambique)

  // ========================================
  // === Cape Verde Portuguese Profanity ===
  // ========================================
  "badiu de merda", // Shitty islander (CV offensive)
  "ca bu mãe", // Your mother (CV Creole insult)
  "cona da tua mãe", // Your mother's cunt (CV)
  "filho de cadela", // Son of a bitch (CV)
  "filha de cadela", // Daughter of a bitch (CV)
  "grande porca", // Big pig (female, CV)
  "grande porco", // Big pig (male, CV)
  "mama piça", // Suck the dick (CV)
  "piça de burro", // Donkey's dick (CV)
  "vai mamar piça", // Go suck dick (CV)

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "atirar à cona", // Throw to the cunt (PT vulgar)
  "badalhoca do caralho", // Fucking filthy woman (PT)
  "bêbedo do caralho", // Fucking drunk (PT)
  "brochista", // Impotent (PT variant)
  "burra da merda", // Stupid shit (female, PT)
  "cabrão da tua mãe", // Your mother's bastard (PT)
  "cabrão filho da puta", // Bastard son of a bitch (PT)
  "caralhada grande", // Big dick move (PT)
  "caralhudo do caralho", // Big-dicked fucker (PT)
  "coiro do caralho", // Fucking ugly person (PT)
  "conas de merda", // Shitty cunts (PT)
  "cornudo do caralho", // Fucking cuckold (PT)
  "cu aberto", // Open ass (PT insult)
  "cona aberta", // Open cunt (PT insult)
  "cona molhada", // Wet cunt (PT)
  "cona seca", // Dry cunt (PT)
  "esporro todo", // Full cum (PT)
  "esporrada na cara", // Ejaculation on face (PT)
  "foda-se caralho porra", // Fuck damn cum (PT triple expletive)
  "foder a cona toda", // Fuck the whole cunt (PT)
  "foder o cu todo", // Fuck the whole ass (PT)
  "foder-se todo", // Fuck oneself completely (PT)
  "fufa do caralho", // Fucking dyke (PT)
  "ir para o caralho mais velho", // Go to the oldest dick (PT)
  "ir para o cu da tua mãe", // Go to your mother's ass (PT variant)
  "levar no cu todo", // Take it all in the ass (PT)
  "mama na piça do teu pai", // Suck your father's dick (PT)
  "maricas do caralho", // Fucking faggot (PT)
  "paneleiro do caralho", // Fucking faggot (PT variant)
  "paneleira do caralho", // Fucking dyke (PT)
  "piça de merda", // Shitty dick (PT)
  "piça grande", // Big dick (PT)
  "piça pequena", // Small dick (PT)
  "piça torta", // Bent dick (PT)
  "putedo de merda", // Shitty brothel (PT)
  "rata da merda", // Shitty pussy (PT)
  "rata molhada", // Wet pussy (PT)
  "tomar na cona", // Take it in the cunt (PT)
  "vai levar na cona", // Go take it in the cunt (PT)
  "vai para a cona da tua mãe", // Go to your mother's cunt (PT)
  "vai para o cu da tua avó", // Go to your grandmother's ass (PT)

  // ========================================
  // === Extended Northeastern Brazilian ===
  // ========================================
  "arretado de porra", // Damn fuck (NE)
  "arretado de merda", // Damn shit (NE)
  "besta do caralho", // Fucking fool (NE)
  "bizonho de merda", // Shitty ugly (NE)
  "brocado de merda", // Shitty horny (NE)
  "cabra safado de merda", // Shitty dirty dude (NE)
  "cabra desgraçado de merda", // Shitty wretched dude (NE)
  "cabra safado do caralho", // Fucking dirty dude (NE)
  "comer a mãe e a irmã", // Fuck the mother and sister (NE)
  "cu de boi de merda", // Shitty ox's ass (NE)
  "cu de jegue de merda", // Shitty donkey's ass (NE)
  "desconjuntado de merda", // Shitty disjointed (NE)
  "égua do caralho de merda", // Fucking shitty mare (NE)
  "égua puta de merda", // Shitty mare whore (NE)
  "filho de rapariga de merda", // Shitty son of a slut (NE)
  "fresco do cu de merda", // Shitty ass fresh (NE)
  "mala sem alça de merda", // Shitty annoying person (NE)
  "marmota de merda", // Shitty fool (NE)
  "mocreia de merda", // Shitty ugly woman (NE)
  "peba de merda", // Shitty pathetic person (NE)
  "pivete de merda do caralho", // Fucking shitty kid (NE)
  "quenga arrombada de merda", // Shitty broken prostitute (NE)
  "rapariga arrombada", // Broken slut (NE)
  "rapariga de merda do caralho", // Fucking shitty slut (NE)
  "tabacudo de merda", // Shitty big-lipped (NE)
  "tchola de merda", // Shitty gay (NE)

  // ========================================
  // === Extended Southern Brazilian ===
  // ========================================
  "barbaridade do caralho", // Fucking damn (RS)
  "bah porra do caralho", // Gaúcho triple expletive
  "butiá descascado de merda", // Shitty ugly (RS)
  "cusco safado de merda", // Shitty dirty mutt (RS)
  "gringo filho da puta de merda", // Shitty foreigner SOB (RS)
  "guria puta de merda", // Shitty whore girl (RS)
  "guri safado de merda", // Shitty dirty boy (RS)
  "tchê porra do caralho", // Gaúcho triple expletive
  "tri arrombado de merda", // Very broken shitty (RS)
  "tri cuzão de merda", // Very shitty asshole (RS)
  "tri fdp de merda", // Very shitty SOB (RS)
  "tri otário de merda", // Very shitty fool (RS)
  "bah tri merda", // Very shit (RS)
  "tri safado de merda", // Very shitty pervert (RS)
  "tri vagabundo de merda", // Very shitty bum (RS)
  "piá safado de merda", // Shitty dirty kid (RS)
  "piá fdp do caralho", // Fucking SOB kid (RS)
  "guria safada do caralho", // Fucking dirty girl (RS)

  // ========================================
  // === Extended Rio de Janeiro Slang ===
  // ========================================
  "caralho mermão do caralho", // Dick bro fucker (carioca)
  "é o caralho de merda", // It's the shitty dick (carioca)
  "foda-se mermão do caralho", // Fuck it bro fucker (carioca)
  "maluco do caralho de merda", // Fucking shitty crazy (carioca)
  "mané do caralho de merda", // Fucking shitty stupid (carioca)
  "mermão do caralho de merda", // Fucking shitty bro (carioca)
  "porra mané do caralho", // Fuck stupid fucker (carioca)
  "porra mermão do caralho", // Fuck bro fucker (carioca)
  "vagabundo do caralho de merda", // Fucking shitty bum (carioca)
  "menor safado de merda", // Shitty dirty kid (carioca)
  "alemão safado de merda", // Shitty dirty enemy (carioca)
  "cria do diabo de merda", // Shitty devil's spawn (carioca)
  "sangue bom fdp", // Good blood SOB (carioca ironic)
  "irmão fdp do caralho", // Fucking SOB brother (carioca)
  "parceiro fdp", // SOB partner (carioca)
  "chapa fdp do caralho", // Fucking SOB buddy (carioca)

  // ========================================
  // === Extended São Paulo Slang ===
  // ========================================
  "mano do caralho de merda", // Fucking shitty bro (SP)
  "mano otário de merda", // Shitty fool bro (SP)
  "mina vadia de merda", // Shitty slutty girl (SP)
  "mlk fdp de merda", // Shitty SOB kid (SP)
  "nóia do caralho de merda", // Fucking shitty junkie (SP)
  "porra mano do caralho", // Fuck bro fucker (SP)
  "truta fdp de merda", // Shitty SOB homie (SP)
  "véio safado de merda", // Shitty dirty old man (SP)
  "véia safada de merda", // Shitty dirty old woman (SP)
  "zé buceta de merda", // Shitty Joe pussy (SP)
  "zé ruela de merda", // Shitty Joe asshole (SP)
  "zé mané de merda", // Shitty Joe stupid (SP)
  "moleque fdp de merda", // Shitty SOB kid (SP variant)
  "mina fdp do caralho", // Fucking SOB girl (SP)
  "brother fdp de merda", // Shitty SOB brother (SP)
  "parça fdp do caralho", // Fucking SOB pal (SP)
  "véio broxa de merda", // Shitty old impotent (SP)

  // ========================================
  // === Extended Minas Gerais Slang ===
  // ========================================
  "uai porra do caralho", // MG triple expletive
  "trem do caralho de merda", // Fucking shitty thing (MG)
  "trem arrombado de merda", // Shitty broken thing (MG)
  "nó tio que porra é essa", // Damn uncle WTF (MG)
  "vai tomar no cu sô de merda", // Go get fucked shitty buddy (MG)
  "cê é besta demais do caralho", // You're too fucking stupid (MG)
  "sô do caralho de merda", // Fucking shitty buddy (MG)
  "cê é burro pra caralho de merda", // You're fucking shitty stupid (MG)
  "uai trem de merda", // Damn shitty thing (MG)
  "trem porco de merda", // Shitty dirty thing (MG)
  "cê é um trem de merda", // You're a shitty thing (MG)
  "trem nojento de merda", // Shitty disgusting thing (MG)
  "sô arrombado do caralho", // Fucking broken buddy (MG)
  "sô safado do caralho", // Fucking dirty buddy (MG)
  "sô otário do caralho", // Fucking fool buddy (MG)

  // ========================================
  // === Extended Bahia Slang ===
  // ========================================
  "mah ôxe porra do caralho", // Bahia triple expletive
  "ave maria porra do caralho", // Holy Mary fuck (Bahia triple)
  "ôxe do caralho de merda", // Fucking shitty damn (Bahia)
  "piranha oxente de merda", // Shitty damn slut (Bahia)
  "corno da porra de merda", // Shitty damn cuckold (Bahia)
  "vei safado do caralho de merda", // Fucking shitty dirty old man (Bahia)
  "cabra safado da porra de merda", // Shitty damn dirty dude (Bahia)
  "bicha do caralho de merda", // Fucking shitty fag (Bahia)
  "ôxe velho safado", // Damn dirty old man (Bahia)
  "ôxe piranha arrombada", // Damn broken slut (Bahia)
  "ôxe corno manso", // Damn tame cuckold (Bahia)
  "oxente fdp do caralho", // Damn fucking SOB (Bahia)

  // ========================================
  // === Extended Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl de merda", // Broken open fucker shitty (texting)
  "bct de merda", // Shitty pussy (texting)
  "canceroso de merda", // Shitty cancerous (gaming)
  "canceroso do krl", // Cancerous fucker (gaming)
  "crlh de merda", // Shitty dick (texting)
  "cu de ferro de merda", // Shitty iron ass (gaming)
  "fdp do krl de merda", // Shitty SOB fucker (texting)
  "fds de merda", // Shitty fuck it (texting)
  "filhodaputa de merda", // Shitty SOB (texting)
  "flw fdp de merda", // Bye shitty SOB (texting)
  "gg fdp de merda", // GG shitty SOB (gaming)
  "kid burro de merda", // Shitty stupid kid (gaming)
  "lixão de merda", // Shitty big garbage (gaming)
  "lixo do caralho de merda", // Fucking shitty garbage (gaming)
  "noob fdp de merda", // Shitty noob SOB (gaming)
  "retardado do krl de merda", // Fucking shitty retard (texting)
  "vai cagar de merda", // Go shit shitty (redundant intensifier)
  "vai pro krl de merda", // Go to shitty dick (texting)
  "vtnc mano de merda", // Take it shitty bro (texting)
  "hacker fdp", // Hacker SOB (gaming)
  "cheater fdp", // Cheater SOB (gaming)
  "tryhard fdp", // Tryhard SOB (gaming)
  "camper fdp", // Camper SOB (gaming)
  "feeder fdp", // Feeder SOB (gaming)
  "toxic fdp", // Toxic SOB (gaming)
  "bot de merda", // Shitty bot (gaming)
  "bot do caralho", // Fucking bot (gaming)
  "aimbot fdp", // Aimbot SOB (gaming)
  "wallhack fdp", // Wallhack SOB (gaming)
  "rage quit fdp", // Rage quit SOB (gaming)
  "lag fdp", // Lag SOB (gaming)
  "desinstala fdp", // Uninstall SOB (gaming)
  "deleta o jogo fdp", // Delete game SOB (gaming)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boquetão de merda", // Shitty big blowjob
  "chupar a xota de merda", // Suck the shitty pussy
  "comer a xereca de merda", // Eat the shitty pussy
  "dar a xota de merda", // Give the shitty pussy
  "enfiar a pica de merda", // Insert the shitty dick
  "foder a buceta toda", // Fuck the whole pussy
  "foder o rabo todo", // Fuck the whole ass
  "gozar dentro de merda", // Cum inside shitty
  "lamber a buceta toda", // Lick the whole pussy
  "lamber a xota toda", // Lick the whole pussy variant
  "lamber o cu todo", // Lick the whole ass
  "mamar a pica toda", // Suck the whole dick
  "meter a rola toda", // Insert the whole dick
  "meter forte de merda", // Fuck hard shitty
  "meter fundo de merda", // Fuck deep shitty
  "pica dura de merda", // Shitty hard dick
  "rola grande de merda", // Shitty big dick
  "sentar na pica toda", // Sit on the whole dick
  "trepada de merda", // Shitty fuck
  "xerecão de merda", // Shitty big pussy
  "buceta apertada de merda", // Shitty tight pussy
  "cu largo de merda", // Shitty loose ass
  "pau duro no cu", // Hard dick in ass
  "pau mole de merda", // Shitty limp dick
  "pirocão no cu", // Big dick in the ass
  "rola na buceta", // Dick in pussy
  "rola no cu", // Dick in ass
  "pica na boca", // Dick in mouth
  "gozada na cara", // Cum shot on face
  "leitada na boca", // Milk shot in mouth
  "leitada na cara", // Milk shot on face
  "leitada no cu", // Milk shot in ass
  "chupar até secar", // Suck until dry
  "meter até gozar", // Fuck until cum
  "foder até cansar", // Fuck until tired
  "comer o cu e a buceta", // Eat the ass and pussy
  "meter no cu e na boca", // Insert in ass and mouth
  "chupar a rola toda", // Suck the whole dick
  "sentar no pau todo", // Sit on the whole dick
  "meter gostoso no cu", // Fuck the ass nicely
  "dar o cu gostoso", // Give the ass nicely
  "comer a buceta toda", // Eat the whole pussy
  "lamber o cu inteiro", // Lick the whole ass

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "c4r4lho", // Dick evasion
  "buc3t4", // Pussy evasion
  "f0d4-se", // Fuck it evasion
  "p0rr4", // Cum evasion
  "m3rd4", // Shit evasion
  "put4 que p4riu", // SOB evasion
  "c@r@lho", // Dick evasion
  "buc#t@", // Pussy evasion
  "f*da-se", // Fuck it evasion
  "p*rr@", // Cum evasion
  "m*rd@", // Shit evasion
  "put@ que p@riu", // SOB evasion
  "v!@do", // Faggot evasion
  "arr0mb@do", // Broken evasion
  "cuz@0", // Asshole evasion
  "p1r@nha", // Slut evasion
  "r0l@", // Dick evasion
  "p1c@", // Dick evasion
  "p1r0c@", // Dick evasion
  "b0st@", // Crap evasion
  "c0rn0", // Cuckold evasion
  "karalh0", // Dick evasion
  "karai0", // Dick evasion
  "p0hha", // Cum evasion
  "busc3ta", // Pussy evasion
  "bucet@", // Pussy evasion
  "f0dase", // Fuck it evasion
  "c4cete", // Dick evasion
  "b4baca", // Idiot evasion
  "cr3tino", // Cretin evasion
  "1diota", // Idiot evasion
  "1mbecil", // Imbecile evasion
  "tr0uxa", // Fool evasion
  "v@gabunda", // Slut evasion
  "v@gabundo", // Bum evasion
  "des gr@çado", // Bastard evasion
  "arr0nbado", // Broken evasion variant
  "f1lho da put@", // SOB evasion
  "v@i se f0der", // Go fuck yourself evasion
  "v@i tom@r no cu", // Go take it evasion

  // ========================================
  // === Extended Compound Phrases ===
  // ========================================
  "vai tomar no meio do olho do cu", // Take it in the middle of asshole
  "vai chupar o cu da mãe e do pai", // Suck parents' asses
  "enfia essa porra no cu e roda", // Shove and spin
  "mete essa rola no cu e gira", // Stick and spin
  "enfiar a rola no cu e girar", // Shove and spin variant
  "mama minha pica e engole", // Suck my dick and swallow
  "chupa meu saco e engole", // Suck my balls and swallow
  "lambe meu cu e engole", // Lick my ass and swallow
  "senta nessa pica e goza", // Sit on dick and cum
  "vai dar o cu pro diabo", // Go give ass to devil
  "vai chupar uma rola de cavalo", // Go suck a horse's dick
  "vai mamar uma piroca de burro", // Go suck a donkey's dick
  "vai dar a buceta pro cachorro", // Go give pussy to dog
  "toma no rabo e no cu", // Take in both asses
  "mete no rabo e na boca", // Stick in ass and mouth
  "enfiar no cu e na boca", // Shove in ass and mouth
  "chupa até sair sangue", // Suck until bleed
  "pau na tua boca até engasgar", // Dick in mouth until gag
  "rola na tua cara até cegar", // Dick on face until blind
  "porra na tua cara até afogar", // Cum on face until drown
  "saco de merda ambulante fedido", // Walking stinky bag of shit
  "monte de bosta fedida", // Pile of stinky crap
  "pedaço de merda podre", // Piece of rotten shit
  "cara de merda fedida", // Stinky shit face
  "boca de buceta fedida", // Stinky pussy mouth
  "olho do cu cabeludo", // Hairy asshole
  "cu de porco fedido", // Stinky pig's ass
  "rabo de vaca fedido", // Stinky cow's ass
  "cu de macaco fedido", // Stinky monkey's ass
  "merda de gente fedida", // Stinky shit person

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bocetona", // Big pussy (augmentative)
  "bocetuda grande", // Big big-pussy
  "boquinha de merda", // Shitty little mouth
  "bundona", // Big butt
  "bunduda grande", // Big big-butted
  "cacetada", // Dick hit
  "cacetudo", // Big-dicked
  "caralho grande", // Big dick
  "caralho grosso", // Thick dick
  "caralho mole", // Limp dick
  "caralho torto", // Bent dick
  "clitoris grande", // Big clitoris
  "cu cabeludo", // Hairy ass
  "cu de fora", // Ass out
  "cu gordo", // Fat ass
  "cu grande", // Big ass
  "cu magro", // Skinny ass
  "cu peludo grande", // Big hairy ass
  "culhão grande", // Big testicle
  "grelo grande", // Big clitoris
  "grelo inchado", // Swollen clitoris
  "mama grande", // Big breast
  "mamilo grande", // Big nipple
  "peitão", // Big breast
  "peituda grande", // Big big-breasted
  "pentelhona", // Very hairy-pubed (female)
  "pentelhudo grande", // Very hairy-pubed (male)
  "periquita grande", // Big pussy variant
  "pica grossa de merda", // Shitty thick dick
  "picudo", // Pointy/big-dicked
  "piroca grande", // Big dick
  "piroca grossa", // Thick dick
  "piroca mole", // Limp dick
  "piroca torta", // Bent dick
  "rabo gordo", // Fat ass
  "rabo grande", // Big ass
  "rola fina", // Thin dick
  "saco grande", // Big ball sack
  "saco peludo", // Hairy ball sack
  "teta enorme", // Enormous tit
  "tetona grande", // Big titted large
  "tetuda enorme", // Enormous titted
  "xota grande", // Big pussy
  "xota larga", // Wide pussy
  "xereca grande", // Big pussy
  "xereca larga", // Wide pussy

  // ========================================
  // === Extended Favela/Street Slang ===
  // ========================================
  "boca de fumo de merda", // Shitty drug point
  "bonde do caralho de merda", // Fucking shitty gang
  "caguetou de merda", // Shitty snitched
  "cheirador de merda", // Shitty coke snorter
  "cuzinheiro de merda", // Shitty ass man
  "favelado de merda do caralho", // Fucking shitty slum dweller
  "gambé fdp de merda", // Shitty cop SOB
  "maloqueiro fdp de merda", // Shitty thug SOB
  "merdinha do caralho", // Fucking little shit
  "moleque de merda do caralho", // Fucking shitty kid
  "noia do caralho de merda", // Fucking shitty junkie
  "noiado de merda", // Shitty high
  "playboy de merda do caralho", // Fucking shitty rich kid
  "traficante de merda do caralho", // Fucking shitty dealer
  "trombadinha de merda", // Shitty pickpocket kid
  "vida loka de merda", // Shitty crazy life
  "X9 do caralho de merda", // Fucking shitty snitch
  "cria de merda", // Shitty spawn
  "menor infrator fdp", // Juvenile offender SOB
  "pivete arrombado", // Broken kid
  "maconheiro fdp", // Pothead SOB
  "crackeiro de merda", // Shitty crack addict
  "noiado do caralho", // Fucking junkie
  "cheirado de merda", // Shitty snorted
  "brisado de merda", // Shitty high
  "chapado fdp", // Stoned SOB
  "doidão fdp", // Crazy SOB
  "maluco beleza fdp", // Crazy good SOB (ironic)

  // ========================================
  // === Extended Portunhol Border Slang ===
  // ========================================
  "hijo de puta de merda", // Shitty SOB (border)
  "la concha de tu madre porra", // Your mother's pussy cum (border)
  "boludo de merda do caralho", // Fucking shitty fool (border)
  "pelotudo fdp de merda", // Shitty big-balled SOB (border)
  "anda a la mierda do caralho", // Go to fucking shit (border)
  "anda cagar do caralho", // Go fucking shit (border)
  "conchudo de merda do caralho", // Fucking shitty brazen (border)
  "pendejo do caralho de merda", // Fucking shitty idiot (border)
  "boludo arrombado de merda", // Shitty broken fool (border)
  "carajo de merda do caralho", // Fucking shitty dick (border)
  "chinga tu madre do caralho", // Fucking fuck your mother (border)
  "poronga de merda do caralho", // Fucking shitty dick (border)
  "forro de merda do caralho", // Fucking shitty condom (border)
  "pelotudo arrombado", // Big-balled broken (border)
  "boludo cornudo", // Foolish cuckold (border)
  "conchudo arrombado", // Brazen broken (border)

  // ========================================
  // === Extended Pará/Northern Slang ===
  // ========================================
  "curumim safado de merda", // Shitty dirty kid (Pará)
  "caboclo fdp de merda", // Shitty mixed-race SOB (Pará)
  "porra egua de merda", // Shitty damn mare (Pará)
  "égua da puta de merda", // Shitty whore mare (Pará)
  "caralho bicho de merda", // Shitty dick dude (Pará)
  "bicho fdp de merda", // Shitty dude SOB (Pará)
  "maninho fdp do caralho", // Fucking SOB buddy (Pará)
  "primo fdp do caralho", // Fucking SOB cousin (Pará)
  "égua primo do caralho", // Damn fucking cousin (Pará)

  // ========================================
  // === Extended Pernambuco Slang ===
  // ========================================
  "aff porra do caralho", // Damn dick fuck (PE)
  "cabra da peste desgraçado de merda", // Shitty stubborn bastard (PE)
  "eita porra do caralho de merda", // Fucking shitty damn (PE)
  "besta porra de merda", // Shitty stupid fuck (PE)
  "arrombado da peste de merda", // Shitty stubborn broken (PE)
  "vixe porra do caralho", // Holy shit (PE triple)
  "mainha fdp de merda", // Shitty mom SOB (PE ironic)
  "quenga do caralho", // Fucking prostitute (PE)

  // ========================================
  // === Extended Ceará Slang ===
  // ========================================
  "rapaz do caralho de merda", // Fucking shitty boy (CE)
  "abestado do caralho de merda", // Fucking shitty fool (CE)
  "cabra macho fdp de merda", // Shitty tough SOB (CE)
  "mermão porra de merda", // Shitty bro fuck (CE)
  "rapaz desgraçado de merda", // Shitty wretched boy (CE)
  "abestalhado do caralho", // Fucking dumbfounded (CE)
  "doido do caralho", // Fucking crazy (CE)
  "macho fdp do caralho", // Fucking SOB tough guy (CE)

  // ========================================
  // === Extended Goiás/Centro-Oeste ===
  // ========================================
  "uai do caralho de merda", // Fucking shitty damn (GO)
  "trem fdp de merda", // Shitty fucking thing (GO)
  "cê é trouxa demais de merda", // You're too shitty foolish (GO)
  "porra sertanejo de merda", // Shitty country fuck (GO)
  "trem goiano fdp", // Goiás thing SOB (GO)
  "uai sô fdp", // Damn buddy SOB (GO)
  "cê é um trem fdp", // You're a thing SOB (GO)

  // ========================================
  // === Extended Internet Evasions ===
  // ========================================
  "krl mano de merda", // Dick shitty bro
  "pfv fdp de merda", // Please shitty SOB
  "tmj krl de merda", // Together shitty dick
  "kkk fdp de merda", // Laughing shitty SOB
  "slc krl de merda", // Damn shitty dick
  "mds fdp de merda", // My God shitty SOB
  "pqp krl de merda", // Holy shit dick shitty
  "vsf krl de merda", // Go fuck yourself shitty dick
  "vtnc krl de merda", // Take it shitty dick
  "mn do krl de merda", // Shitty bro fucker
  "mlk fdp krl de merda", // Shitty kid SOB dick
  "glr fdp de merda", // Shitty guys SOB
  "poh fdp krl", // Porra fdp caralho compound
  "krllll", // Caralho extended
  "fdpppp", // FDP extended
  "vsffff", // VSF extended
  "vtnccc", // VTNC extended
  "pqpppp", // PQP extended
  "mdsss", // MDS extended
  "slccc", // SLC extended
  "ksksks fdp", // Laughing SOB
  "hauahuaha fdp", // Laughing SOB variant
  "kkkk fdp krl", // Laughing SOB dick
  "poha mano krl", // Porra mano caralho (evasion compound)
  "krll poha vsf", // Caralho porra VSF compound
  "mdsss poha krl", // MDS porra caralho compound

  // ========================================
  // === Extended Racial/Ethnic Slurs ===
  // ========================================
  "macaco de merda", // Shitty monkey (racial)
  "macaca de merda", // Shitty monkey (female, racial)
  "negro de merda", // Shitty black (racial)
  "negra de merda", // Shitty black (female, racial)
  "preto de merda", // Shitty black (racial variant)
  "preta de merda", // Shitty black (female, racial)
  "crioulo de merda", // Shitty creole (racial)
  "crioula de merda", // Shitty creole (female, racial)
  "mulata de merda", // Shitty mixed-race (female, racial)
  "caboclo de merda", // Shitty mixed indigenous (racial)
  "cabocla de merda", // Shitty mixed indigenous (female, racial)
  "índio de merda", // Shitty indigenous (racial)
  "índia de merda", // Shitty indigenous (female, racial)
  "japa de merda", // Shitty Japanese (racial)
  "china de merda", // Shitty Chinese (racial)
  "gringo de merda fdp", // Shitty foreigner SOB
  "baiano de merda", // Shitty Bahian (regional prejudice)
  "paraíba de merda", // Shitty Paraíba (regional prejudice)
  "nordestino de merda", // Shitty northeasterner (regional)
  "sulista de merda", // Shitty southerner (regional)
  "paulista de merda", // Shitty São Paulo person (regional)
  "carioca de merda", // Shitty Rio person (regional)
  "mineiro de merda", // Shitty Minas person (regional)
  "gaúcho de merda", // Shitty Gaúcho (regional)

  // ========================================
  // === Extended Insult Nouns/Adjectives ===
  // ========================================
  "aberração", // Aberration
  "abominação", // Abomination
  "acéfalo", // Brainless
  "aloprado", // Crazy/reckless
  "aloprada", // Crazy/reckless (female)
  "borra botas", // Boot dirtier (PT useless)
  "cabeça de bagre", // Catfish head (stupid)
  "cabeça de vento", // Wind head (airheaded)
  "cabeçudo", // Big-headed (stubborn)
  "cagão", // Coward / big shitter
  "cagona", // Coward (female)
  "cara de pau", // Wooden face (shameless)
  "cara de mamão", // Papaya face (dumb looking)
  "cérebro de amendoim", // Peanut brain
  "charlatão", // Charlatan
  "covarde de merda", // Shitty coward
  "delinquente", // Delinquent
  "desmiolado", // Brainless
  "estúpida", // Stupid (female)
  "feia de doer", // Ugly enough to hurt
  "feio de doer", // Ugly enough to hurt (male)
  "frouxo", // Limp / coward
  "frouxona", // Limp / coward (female)
  "gaguejo de merda", // Shitty stutterer
  "gentinha", // Little people (contemptuous)
  "gorducho", // Chubby (insult)
  "gorducha", // Chubby (female insult)
  "lazarenta", // Leprous (female insult)
  "lerdo", // Slow/dumb (male)
  "lerda", // Slow/dumb (female)
  "língua de trapo", // Rag tongue (gossiper)
  "maria vai com as outras", // Mary goes with others (follower)
  "molenga", // Limp/lazy
  "oca", // Hollow (brainless female)
  "oco", // Hollow (brainless male)
  "panaca", // Fool (PT)
  "pateta", // Silly
  "palerma", // Fool (PT)
  "pestilento", // Pestilent (male)
  "pestilenta", // Pestilent (female)
  "relaxado", // Sloppy (male)
  "relaxada", // Sloppy (female)
  "repugnante", // Repugnant
  "sebento", // Greasy (male variant)
  "sebenta", // Greasy (female variant)
  "sem noção", // Clueless
  "sem sal", // Saltless (bland/boring)
  "tapada", // Stupid (female variant)
  "tramoia", // Scheme (insult)
  "troglodita", // Troglodyte
  "urso de merda", // Shitty bear (clumsy)
  "vagal de merda", // Shitty vagrant
  "zé ninguém", // Joe nobody
  "zé povinho", // Joe common people (conformist)

  // ========================================
  // === More Extended Compound Insults ===
  // ========================================
  "sua mãe é uma puta barata", // Your mother is a cheap whore
  "sua mãe dá pra todo mundo", // Your mother gives to everyone
  "sua irmã é a puta do bairro", // Your sister is the neighborhood whore
  "seu pai é um corno manso de merda", // Your father is a shitty tame cuckold
  "sua família inteira é de merda", // Your entire family is shit
  "sua linhagem é toda de puta", // Your entire lineage is whores
  "a puta que pariu tua raça", // The whore that bore your race
  "tua mãe dá de graça", // Your mother gives for free
  "tua irmã dá de graça", // Your sister gives for free
  "tua mãe cobra um real", // Your mother charges one real
  "tua mãe nem de graça presta", // Your mother isn't worth it even for free
  "tua mãe chupa rola na esquina", // Your mother sucks dick on the corner
  "tua mãe dá o cu na esquina", // Your mother gives ass on the corner
  "tua irmã mama rola no beco", // Your sister sucks dick in the alley
  "tua mãe é conhecida no puteiro", // Your mother is known at the brothel
  "tua mãe é a atração do puteiro", // Your mother is the brothel attraction
  "a cachorra da tua mãe", // The bitch of your mother
  "a vaca da tua mãe", // The cow of your mother
  "a piranha da tua irmã", // The slut of your sister
  "o corno do teu pai", // The cuckold of your father
  "o cafetão do teu pai", // Your father the pimp
  "o viado do teu pai", // The fag of your father
  "o broxa do teu pai", // The impotent of your father
  "o pau mole do teu pai", // Your father's limp dick
  "teu avô é um corno", // Your grandfather is a cuckold
  "tua avó é uma puta", // Your grandmother is a whore
  "teu tio é um viado", // Your uncle is a fag
  "tua tia é uma piranha", // Your aunt is a slut
  "a família toda é de puta e corno", // The whole family is whores and cuckolds
  "nasceu da buceta da puta", // Born from the whore's pussy
  "nasceu do cu da puta", // Born from the whore's ass
  "nasceu da merda", // Born from shit
  "fruto de aborto mal feito", // Fruit of a botched abortion
  "sobra de aborto", // Leftover of abortion
  "refugo de esperma", // Sperm reject
  "acidente de camisinha furada", // Broken condom accident
  "erro da natureza", // Nature's mistake
  "desperdício de oxigênio", // Oxygen waste
  "desperdício de esperma", // Sperm waste
  "desperdício de vida", // Life waste
  "estorvo da humanidade", // Humanity's nuisance
  "esgoto humano", // Human sewage
  "lixo da sociedade", // Society's garbage
  "cancro da sociedade", // Society's cancer
  "praga humana", // Human plague
  "doença ambulante", // Walking disease
  "chorume humano", // Human slurry
  "escória da Terra", // Earth's scum
  "resíduo tóxico humano", // Human toxic waste
  "cocô de cachorro", // Dog poop
  "bosta de cavalo", // Horse crap
  "bosta de vaca", // Cow crap
  "bosta de porco", // Pig crap
  "cu de galinha", // Chicken's ass
  "cu de cachorro", // Dog's ass
  "cu de jumento", // Jackass's ass
  "cu de cobra", // Snake's ass
  "rabo de burro", // Donkey's ass
  "focinho de porco", // Pig's snout
  "cara de macaco", // Monkey face
  "cara de bunda", // Butt face
  "cara de buceta usada", // Used pussy face
  "cara de rola murcha", // Wilted dick face
  "cara de cu suado", // Sweaty ass face
  "cara de bosta seca", // Dry crap face
  "cheiro de cu", // Ass smell
  "cheiro de buceta podre", // Rotten pussy smell
  "cheiro de merda", // Shit smell
  "fede a cu", // Smells like ass
  "fede a merda", // Smells like shit
  "fede a porra", // Smells like cum

  // ========================================
  // === More Portuguese from Portugal ===
  // ========================================
  "atirar à parede", // Throw against wall (PT vulgar)
  "badalhoca fedorenta", // Stinky filthy woman (PT)
  "brochar todo", // Go completely limp (PT)
  "cabra do caralho", // Fucking goat/bastard (PT)
  "cagalhão", // Big turd (PT)
  "cagalhoto", // Little turd (PT)
  "chular", // To pimp (PT)
  "coiro velho", // Old hide (PT ugly person)
  "cona podre", // Rotten cunt (PT)
  "cornudo velho", // Old cuckold (PT)
  "cu podre", // Rotten ass (PT)
  "esporrada no focinho", // Ejaculation on face (PT)
  "foda forte", // Strong fuck (PT)
  "foder bem", // Fuck well (PT)
  "foder com força", // Fuck with force (PT)
  "granda cabrão de merda", // Big shitty bastard (PT)
  "granda cona de merda", // Big shitty cunt (PT)
  "granda puta de merda", // Big shitty whore (PT)
  "ir para o cu que te foda", // Go to the ass that fucks you (PT)
  "levar no cu com força", // Take it in the ass with force (PT)
  "mama na piça toda", // Suck the whole dick (PT)
  "manda-te foder todo", // Go get completely fucked (PT)
  "paneleiro nojento", // Disgusting faggot (PT)
  "piça podre", // Rotten dick (PT)
  "piça de merda velha", // Old shitty dick (PT)
  "rata nojenta", // Disgusting pussy (PT)
  "vai para o caralho todo", // Go completely to the dick (PT)
  "vai para o cu de quem te ouve", // Go to the ass of who listens (PT)
  "vai para o raio", // Go to the lightning (PT curse)

  // ========================================
  // === More Extended Angola/Mozambique ===
  // ========================================
  "cabrão da terra", // Bastard of the land (Angola)
  "filho de cão", // Son of a dog (Angola)
  "filha de cão", // Daughter of a dog (Angola)
  "grande cabrão da terra", // Big bastard of the land (Angola)
  "ir para a terra", // Go to the ground (Angola dismissal)
  "meu irmão cabrão", // My brother bastard (Mozambique)
  "pila no rabo", // Dick in the ass (Mozambique)
  "vai mamar na cona", // Go suck the cunt (Mozambique)
  "vai mamar na pila toda", // Go suck the whole dick (Mozambique)
  "grande puta angolana", // Big Angolan whore
  "grande cabrão angolano", // Big Angolan bastard
  "grande puta moçambicana", // Big Mozambican whore
  "grande cabrão moçambicano", // Big Mozambican bastard

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "kara1ho", // Dick evasion
  "bu$eta", // Pussy evasion
  "f0d@-se", // Fuck it evasion
  "p0rr@", // Cum evasion
  "m3rd@", // Shit evasion
  "pu+a", // Whore evasion
  "c*u", // Ass evasion
  "p*u", // Dick evasion
  "r*la", // Dick evasion
  "p*ca", // Dick evasion
  "b*sta", // Crap evasion
  "f*der", // To fuck evasion
  "tr*nsar", // To have sex evasion
  "v*ado", // Fag evasion
  "b*cha", // Fag evasion
  "s@fado", // Pervert evasion
  "s@fada", // Pervert evasion (female)
  "puut@", // Whore evasion
  "puuuta", // Whore evasion (extended)
  "carrralho", // Dick evasion (extended)
  "foooda-se", // Fuck it evasion (extended)
  "meeerda", // Shit evasion (extended)
  "pooorrrra", // Cum evasion (extended)
  "cuzzão", // Asshole evasion
  "v i a d o", // Fag evasion (spaced)
  "p u t a", // Whore evasion (spaced)
  "c a r a l h o", // Dick evasion (spaced)
  "m e r d a", // Shit evasion (spaced)
  "b u c e t a", // Pussy evasion (spaced)
  "f o d a", // Fuck evasion (spaced)

  // ========================================
  // === More Extended Internet Slang ===
  // ========================================
  "pqp mds krl", // Triple internet expletive
  "vsf vtnc krl", // Triple internet expletive
  "fdp fdp fdp", // Repeated SOB
  "krl krl krl", // Repeated dick
  "pqp pqp pqp", // Repeated holy shit
  "vsf vsf vsf", // Repeated go fuck yourself
  "mrd mrd mrd", // Repeated shit
  "tmj na buceta", // Together in the pussy
  "tmj no cu", // Together in the ass
  "chupa essa krl", // Suck this dick (internet)
  "mama essa krl", // Suck this dick (internet variant)
  "senta nessa krl", // Sit on this dick (internet)
  "toma essa krl", // Take this dick (internet)
  "come essa krl", // Eat this dick (internet)
  "enfia essa krl", // Shove this dick (internet)
  "mete essa krl", // Insert this dick (internet)
  "leva essa krl", // Take this dick (internet)
  "krl na sua boca", // Dick in your mouth (internet)
  "krl na sua cara", // Dick in your face (internet)
  "krl no seu cu", // Dick in your ass (internet)
  "poha no seu cu", // Cum in your ass (internet)
  "poha na sua boca", // Cum in your mouth (internet)
  "poha na sua cara", // Cum in your face (internet)

  // ========================================
  // === More Extended Threats ===
  // ========================================
  "vou te arrebentar", // I'll smash you
  "vou te arrebentar o cu", // I'll smash your ass
  "vou te arrebentar a cara", // I'll smash your face
  "vou te matar fdp", // I'll kill you SOB
  "vou te meter porrada", // I'll beat you up
  "vou te meter um soco", // I'll punch you
  "vou te encher de porrada", // I'll fill you with beatings
  "vou te dar uma surra", // I'll give you a beating
  "vou quebrar tua cara", // I'll break your face
  "vou quebrar teus dentes", // I'll break your teeth
  "vou quebrar teus ossos", // I'll break your bones
  "vou te jogar no lixo", // I'll throw you in garbage
  "vou te jogar no esgoto", // I'll throw you in sewer
  "vou te enterrar vivo", // I'll bury you alive
  "vou te esfolar", // I'll skin you
  "vou te despedaçar", // I'll tear you apart
  "vou foder tua mãe", // I'll fuck your mother
  "vou foder tua irmã", // I'll fuck your sister
  "vou foder tua mulher", // I'll fuck your wife
  "vou foder tua família toda", // I'll fuck your whole family
  "vou acabar com tua raça", // I'll end your lineage
  "vou acabar contigo fdp", // I'll end you SOB
  "vai apanhar até morrer", // You'll be beaten until death
  "vai sofrer fdp", // You'll suffer SOB
  "vou te fazer sofrer", // I'll make you suffer

  // ========================================
  // === Extended Brazilian Sexual Terms ===
  // ========================================
  "vou chupar a buceta da tua mãe", // I'll eat your mother's pussy
  "vou chupar a buceta da tua irmã", // I'll eat your sister's pussy
  "vou chupar o cu da tua mãe", // I'll eat your mother's ass
  "vou chupar o cu da tua irmã", // I'll eat your sister's ass
  "vou apertar os peitos da tua mãe", // I'll squeeze your mother's tits
  "vou apertar os peitos da tua irmã", // I'll squeeze your sister's tits
  "vou foder tua mãe de quatro", // I'll fuck your mother doggy style
  "vou foder tua irmã de quatro", // I'll fuck your sister doggy style
  "vou enfiar a mão na buceta da tua mãe", // I'll fist your mother's pussy
  "vou enfiar o pé na buceta da tua mãe", // I'll put foot in your mother's pussy
  "vou cortar teu pau", // I'll cut your dick
  "vou quebrar teu pau", // I'll break your dick
  "vou esmagar teus ovos", // I'll crush your balls
  "vou cortar teus ovos", // I'll cut your balls
  "vou rasgar a buceta da tua mãe", // I'll tear your mother's pussy
  "vou rasgar a buceta da tua irmã", // I'll tear your sister's pussy
  "vou rasgar o cu da tua mãe", // I'll tear your mother's ass
  "vou rasgar o cu da tua irmã", // I'll tear your sister's ass
  "filho de puta nojento", // Disgusting SOB
  "filha de puta nojenta", // Disgusting SOB (female)
  "filha de rapariga", // Daughter of a slut
  "tua mãe é puta de rua", // Your mother is a street whore
  "tua irmã é puta de rua", // Your sister is a street whore
  "tua mãe é piranha de esquina", // Your mother is a corner whore
  "tua irmã é piranha de esquina", // Your sister is a corner whore
  "tua mãe é vadia de bairro", // Your mother is a neighborhood slut
  "tua mãe é putona do bairro", // Your mother is the neighborhood's big whore
  "tua mãe é galinha do bairro", // Your mother is the neighborhood's slut

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "caralho do teu pai", // Your father's dick (Portugal)
  "cona da tua irmã", // Your sister's pussy (Portugal)
  "foda-se ó caralho", // Fuck off dick (Portugal)
  "vai para o caralho que te foda", // Go to the dick that fucks you (Portugal)
  "paneleiro de merda", // Faggot of shit (Portugal)
  "maricas de merda", // Faggot of shit (Portugal alt)
  "chupa-me o caralho", // Suck my dick (Portugal)
  "chupa-me os colhões", // Suck my balls (Portugal)
  "lambe-me o cu", // Lick my ass (Portugal)
  "lambe-me a cona", // Lick my pussy (Portugal)
  "fode-te a ti e à tua mãe", // Fuck you and your mother (Portugal)
  "meto-te o caralho na cona", // I'll put my dick in your pussy (Portugal)
  "meto-te o caralho no cu", // I'll put my dick in your ass (Portugal)
  "sua puta rasca", // You cheap whore (Portugal)
  "sua cabra de merda", // You shit goat/whore (Portugal)
  "sua vaca de merda", // You shit cow/whore (Portugal)
  "és uma cona de sabão", // You're a soap pussy/coward (Portugal)
  "és um otário do caralho", // You're a dick sucker/fool (Portugal)
  "és um merda do caralho", // You're a shit of dick (Portugal)

  // ========================================
  // === Extended Angola/Mozambique Portuguese ===
  // ========================================
  "kamba de merda", // Friend of shit (Angola)
  "kiamba sujo", // Dirty bastard (Angola)
  "vai pro kamba da tua mãe", // Go to your mother's friend (Angola)
  "cabrunco sujo", // Dirty bastard (Angola)
  "ximbicar a tua mãe", // Fuck your mother (Angola)
  "kuia da tua mãe", // Your mother's pussy (Angola)
  "baza daqui seu merda", // Get out you shit (Angola)
  "gasosa da tua mãe", // Your mother's pussy (Angola slang)
  "cagão de merda", // Coward of shit (Mozambique)
  "pangar de merda", // Asshole of shit (Mozambique)
  "bazuca da tua mãe", // Your mother's big pussy (Mozambique)
  "xingondo de merda", // Ugly of shit (Mozambique)
  "machimbombo na tua mãe", // Bus in your mother (Mozambique insult)
  "sua tchuna nojenta", // You disgusting whore (Mozambique)
  "vai tomar na tchuna", // Go take it in the pussy (Mozambique)

  // ========================================
  // === Extended NE Brazil Regional ===
  // ========================================
  "rapariga desgraçada", // Disgraced slut (NE Brazil)
  "rapariga safada", // Dirty slut (NE Brazil)
  "rapariga vagabunda", // Bum slut (NE Brazil)
  "cabra filho da puta", // Dude son of a bitch (NE Brazil)
  "oxe seu arrombado", // Damn you broken ass (NE Brazil)
  "oxe sua rapariga", // Damn you slut (NE Brazil)
  "oxe seu viado", // Damn you faggot (NE Brazil)
  "visse seu arrombado", // See you broken ass (PE Brazil)
  "visse seu fdp", // See you SOB (PE Brazil)
  "mainha é puta", // Your mommy is whore (NE Brazil)
  "painho é corno", // Your daddy is cuckold (NE Brazil)
  "aff seu merda", // Ugh you shit (NE Brazil)
  "eita porra seu fdp", // Damn your SOB (NE Brazil)

  // ========================================
  // === Extended South Brazil Regional ===
  // ========================================
  "tchê seu merda", // Hey you shit (South Brazil)
  "bah seu arrombado", // Damn you broken ass (South Brazil)
  "bah teu cu", // Damn your ass (South Brazil)
  "tri vagabundo", // Very bum (South Brazil)
  "tri puta", // Very whore (South Brazil)
  "guri fdp", // Boy SOB (South Brazil)
  "guria vadia", // Girl slut (South Brazil)
  "guri arrombado", // Boy broken ass (South Brazil)
  "piá fdp", // Kid SOB (South Brazil)
  "piá arrombado", // Kid broken ass (South Brazil)
  "bagual fdp", // Horse SOB (South Brazil)
  "bagual arrombado", // Horse broken ass (South Brazil)
  "cusco fdp", // Dog SOB (South Brazil)

  // ========================================
  // === Extended SP/Rio Slang ===
  // ========================================
  "mano seu fdp", // Dude you SOB (SP)
  "mano seu arrombado", // Dude you broken ass (SP)
  "maluco fdp", // Crazy SOB (SP)
  "maluco arrombado", // Crazy broken ass (SP)
  "irmão fdp", // Brother SOB (Rio)
  "mermão fdp", // Brother SOB (Rio slang)
  "menor fdp", // Kid SOB (Rio)
  "menor arrombado", // Kid broken ass (Rio)
  "cria fdp", // Kid SOB (Rio favela)
  "cria arrombado", // Kid broken ass (Rio favela)
  "playboy fdp", // Rich boy SOB (Rio)
  "playboy arrombado", // Rich boy broken ass (Rio)
  "noia fdp", // Druggie SOB (SP)

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bucetona grande", // Big pussy
  "pintinho pequeno", // Small dick (diminutive)
  "rabo enorme", // Huge ass
  "ovo pequeno", // Small balls
  "peito caído", // Saggy tits
  "pau murcho", // Limp dick
  "pau fedido", // Smelly dick
  "saco murcho", // Saggy balls
  "boceta peluda", // Hairy pussy
  "pau peludo", // Hairy dick
  "teta murcha", // Saggy tit
  "boceta podre", // Rotten pussy
  "pau podre", // Rotten dick

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "teu pau não levanta", // Your dick can't get up
  "teu pau não funciona", // Your dick doesn't work
  "teu pau morreu", // Your dick died
  "tu é impotente", // You are impotent
  "tu é viado", // You are a faggot
  "tu é bicha", // You are a faggot (alt)
  "tu é traveco", // You are a tranny
  "teu pau é um palito", // Your dick is a toothpick
  "teu pau é um fósforo", // Your dick is a matchstick
  "teu pau é uma minhoca", // Your dick is a worm
  "teu pau é um dedinho", // Your dick is a little finger
  "corno assumido", // Admitted cuckold
  "corno feliz", // Happy cuckold
  "chifrudo nojento", // Disgusting cuckold
  "galhudo de merda", // Antlered of shit (cuckold)
  "manso de merda", // Tame of shit (cuckold)
  "frouxo de merda", // Limp of shit

  // ========================================
  // === Extended Scatological (Brazilian) ===
  // ========================================
  "vou cagar na tua cara", // I'll shit on your face
  "vou mijar na tua cara", // I'll piss on your face
  "vou cagar na tua comida", // I'll shit in your food
  "vou mijar na tua comida", // I'll piss in your food
  "vou cagar na cara da tua mãe", // I'll shit on your mother's face
  "vou cagar na cara da tua irmã", // I'll shit on your sister's face
  "come merda", // Eat shit
  "bebe mijo", // Drink piss
  "cheira peido", // Smell fart
  "cara de bosta", // Cow shit face
  "cara de cocô", // Poop face
  "boca de merda", // Shit mouth
  "boca de bosta", // Cow shit mouth
  "peida na cara", // Fart in the face
  "cagão nojento", // Disgusting shitter
  "mijão nojento", // Disgusting pisser
  "bosta ambulante", // Walking shit
  "merda ambulante", // Walking shit (alt)

  // ========================================
  // === Extended Abuse Phrases (Brazilian) ===
  // ========================================
  "tua vida não vale nada", // Your life is worth nothing
  "melhor se tu não tivesse nascido", // Better if you weren't born
  "tua mãe não sabe quem é teu pai", // Your mother doesn't know your father
  "ninguém sabe quem é teu pai", // Nobody knows who your father is
  "tua mãe te jogou no lixo", // Your mother threw you in garbage
  "ninguém te quer", // Nobody wants you
  "as pessoas cospem quando te veem", // People spit when they see you
  "as pessoas riem do teu nome", // People laugh at your name
  "tua família toda é puta", // Your whole family is whore
  "tua família toda é fdp", // Your whole family is SOB
  "tua linhagem toda é vagabunda", // Your whole lineage is slut
  "tu é um lixo de pessoa", // You are a garbage person
  "tu é um verme nojento", // You are a disgusting worm
  "tu é um cocô ambulante", // You are a walking poop
  "tu devia ter sido abortado", // You should have been aborted

  // ========================================
  // === Extended Internet/Gaming Brazilian ===
  // ========================================
  "noob fdp do caralho", // Noob SOB of dick
  "noob arrombado do caralho", // Noob broken ass of dick
  "camper fdp do caralho", // Camper SOB of dick
  "hacker fdp do caralho", // Hacker SOB of dick
  "feeder fdp do caralho", // Feeder SOB of dick
  "troll fdp do caralho", // Troll SOB of dick
  "toxic fdp do caralho", // Toxic SOB of dick
  "afk fdp do caralho", // AFK SOB of dick
  "gg fdp chupa", // GG SOB suck
  "ez fdp chupa", // EZ SOB suck
  "gg chupa meu pau", // GG suck my dick
  "ez chupa meu pau", // EZ suck my dick
  "sai do jogo fdp", // Leave game SOB
  "deleta fdp", // Delete SOB
  "lag fdp do caralho", // Lag SOB of dick
  "ping fdp do caralho", // Ping SOB of dick
  "server fdp do caralho", // Server SOB of dick
  "report fdp", // Report SOB
  "stream sniper fdp", // Stream sniper SOB

  // ========================================
  // === Extended Racial/Ethnic Slurs (Brazilian) ===
  // ========================================
  "macaco nojento", // Disgusting monkey (racist)
  "macaco fdp", // Monkey SOB (racist)
  "preto nojento", // Disgusting black (racist)
  "preto fdp", // Black SOB (racist)
  "crioulo nojento", // Disgusting black (racist alt)
  "crioulo fdp", // Black SOB (racist alt)
  "neguinho nojento", // Disgusting little black (racist)
  "baiano burro", // Stupid Bahian (regionalist)
  "nordestino burro", // Stupid Northeasterner (regionalist)
  "paraíba burro", // Stupid Paraíba person (regionalist)
  "índio burro", // Stupid Indian (racist)
  "japa fdp", // Japanese SOB (racist)
  "china fdp", // Chinese SOB (racist)
  "boludo fdp", // Argentine SOB (xenophobic)
  "gringo fdp", // Foreigner SOB (xenophobic)

  // ========================================
  // === Extended Evasion Spellings (Brazilian) ===
  // ========================================
  "f1lho d4 put4", // Son of a bitch (evasion)
  "v4d14", // Slut (evasion)
  "put4 qu3 p4r1u", // Bitch that gave birth (evasion)
  "4rr0mb4d0", // Broken ass (evasion)
  "c4r4lh0", // Dick (evasion)
  "p4u n0 c*", // Dick in ass (evasion)
  "f0d4-s3", // Fuck off (evasion)
  "v14d0", // Faggot (evasion)
  "b1ch4", // Faggot (evasion alt)
  "p1r4nh4", // Whore (evasion)
  "v4g4bund4", // Slut (evasion)
  "b0st4", // Cow shit (evasion)
  "buc€ta", // Pussy (evasion)
  "f0da-se", // Fuck off (evasion)
  "p@u no cu", // Dick in ass (evasion)
  "arr0mbad0", // Broken ass (evasion)

  // ========================================
  // === Extended Animal Insults (Brazilian) ===
  // ========================================
  "cachorro fdp", // Dog SOB
  "porco nojento", // Disgusting pig
  "jumento fdp", // Donkey SOB
  "cavalo fdp", // Horse SOB
  "cobra nojenta", // Disgusting snake
  "rato nojento", // Disgusting rat
  "barata nojenta", // Disgusting cockroach
  "parasita nojento", // Disgusting parasite
  "cadela fdp", // Bitch SOB
  "porca nojenta", // Disgusting sow
  "jumenta fdp", // She-donkey SOB
  "égua fdp", // Mare SOB
  "galinha fdp", // Chicken/slut SOB
];

export default brazilianBadWords;
