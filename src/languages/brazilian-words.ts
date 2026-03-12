/**
 * Brazilian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Brazilian
 */
const brazilianBadWords: Record<string, { s: number; c: number }> = {
  "abusador": { s: 3, c: 4 }, // Abuser
  "arrombado": { s: 3, c: 4 }, // Broken open (vulgar insult)
  "babaca": { s: 1, c: 4 }, // Asshole / idiot
  "baitola": { s: 3, c: 4 }, // Faggot (regional, offensive)
  "besta": { s: 1, c: 4 }, // Stupid / fool
  "boçal": { s: 3, c: 4 }, // Boor / ignorant
  "boquete": { s: 4, c: 5 }, // Blowjob
  "brocha": { s: 3, c: 4 }, // Impotent (variant)
  "buceta": { s: 4, c: 4 }, // Pussy (vulgar)
  "burro": { s: 1, c: 4 }, // Donkey / stupid
  "cacete": { s: 4, c: 4 }, // Dick / damn
  "cagando": { s: 3, c: 5 }, // Shitting
  "canalha": { s: 3, c: 4 }, // Scoundrel
  "cara de cu": { s: 3, c: 4 }, // Ass-face
  "carai": { s: 3, c: 4 }, // Damn (variant of caralho)
  "caralho": { s: 4, c: 4 }, // Dick (strong expletive)
  "caramba": { s: 3, c: 4 }, // Damn (mild)
  "checheca": { s: 4, c: 4 }, // Pussy (slang)
  "clitoris": { s: 4, c: 3 }, // Clitoris
  "clitóris": { s: 3, c: 4 }, // Clitoris (accented)
  "cocaina": { s: 3, c: 4 }, // Cocaine
  "corno": { s: 3, c: 4 }, // Cuckold
  "cretino": { s: 1, c: 4 }, // Cretin
  "cu": { s: 3, c: 4 }, // Ass / asshole
  "cuzao": { s: 3, c: 4 }, // Big asshole
  "debiloide": { s: 1, c: 4 }, // Moron
  "demente": { s: 5, c: 4 }, // Demented / insane
  "demonio": { s: 1, c: 4 }, // Demon
  "demônio": { s: 3, c: 4 }, // Demon (accented)
  "desgraça": { s: 3, c: 4 }, // Disgrace / damn
  "desgraçado": { s: 3, c: 4 }, // Bastard / wretch
  "diabo": { s: 3, c: 4 }, // Devil
  "droga": { s: 3, c: 4 }, // Drug / damn
  "drogado": { s: 3, c: 4 }, // Drugged / junkie
  "escroto": { s: 4, c: 4 }, // Scrotum / scummy
  "estupido": { s: 1, c: 4 }, // Stupid
  "estúpido": { s: 1, c: 4 }, // Stupid (accented)
  "estupro": { s: 5, c: 5 }, // Rape
  "fdp": { s: 3, c: 4 }, // Filho da puta (son of a bitch)
  "filha da puta": { s: 3, c: 4 }, // Daughter of a bitch
  "filho de uma eguá": { s: 3, c: 4 }, // Son of a mare
  "foda": { s: 3, c: 5 }, // Fuck
  "foda-se": { s: 3, c: 5 }, // Fuck it
  "fodido": { s: 3, c: 5 }, // Fucked
  "fudendo": { s: 3, c: 5 }, // Fucking (variant)
  "fuder": { s: 3, c: 5 }, // To fuck (variant)
  "fudido": { s: 3, c: 5 }, // Fucked (variant)
  "gay": { s: 5, c: 2 }, // Gay (used as insult)
  "gorda": { s: 1, c: 4 }, // Fat (female)
  "gordo": { s: 1, c: 4 }, // Fat (male)
  "grelinho": { s: 3, c: 4 }, // Little clitoris (slang)
  "grelo": { s: 3, c: 4 }, // Clitoris (slang)
  "idiota": { s: 1, c: 4 }, // Idiot
  "inutil": { s: 3, c: 4 }, // Useless
  "inútil": { s: 3, c: 4 }, // Useless (accented)
  "karalho": { s: 4, c: 4 }, // Dick (internet spelling)
  "krl": { s: 4, c: 4 }, // Dick (abbreviation of caralho)
  "leproso": { s: 3, c: 4 }, // Leper (insult)
  "lesado": { s: 1, c: 4 }, // Dazed / stupid
  "macaca": { s: 5, c: 4 }, // Female monkey (racial slur)
  "marginal": { s: 3, c: 4 }, // Criminal / thug
  "marica": { s: 5, c: 4 }, // Sissy / faggot
  "masoquista": { s: 3, c: 4 }, // Masochist
  "merda": { s: 3, c: 5 }, // Shit
  "miseravel": { s: 3, c: 4 }, // Miserable / wretch
  "miserável": { s: 3, c: 4 }, // Miserable / wretch (accented)
  "mulata": { s: 3, c: 4 }, // Mulatto (racial term)
  "nao presta": { s: 3, c: 4 }, // Good for nothing
  "nazi": { s: 3, c: 4 }, // Nazi
  "nazista": { s: 5, c: 5 }, // Nazi (adjective)
  "necrofilo": { s: 3, c: 4 }, // Necrophiliac
  "necrófilo": { s: 3, c: 4 }, // Necrophiliac (accented)
  "nem fodendo": { s: 3, c: 5 }, // No fucking way
  "ninfeta": { s: 3, c: 4 }, // Nymphet / underage girl (sexualized)
  "otario": { s: 1, c: 4 }, // Sucker / fool
  "otário": { s: 1, c: 4 }, // Sucker / fool (accented)
  "pariu": { s: 3, c: 4 }, // Gave birth (as in "puta que pariu")
  "pau": { s: 4, c: 4 }, // Dick / stick
  "pau no cu": { s: 4, c: 4 }, // Dick in the ass
  "pedofilo": { s: 5, c: 5 }, // Pedophile
  "pedófilo": { s: 5, c: 5 }, // Pedophile (accented)
  "peido": { s: 3, c: 4 }, // Fart
  "pemba": { s: 4, c: 4 }, // Bad luck charm / penis (slang)
  "penis": { s: 4, c: 3 }, // Penis
  "pênis": { s: 4, c: 4 }, // Penis (accented)
  "pentelha": { s: 3, c: 4 }, // Pubic hair (female, insult)
  "pentelho": { s: 3, c: 4 }, // Pubic hair (male, insult)
  "perereca": { s: 4, c: 4 }, // Pussy (slang)
  "peru": { s: 3, c: 4 }, // Penis (slang)
  "perú": { s: 4, c: 4 }, // Penis (slang, accented)
  "pica": { s: 3, c: 4 }, // Dick (slang)
  "picao": { s: 4, c: 4 }, // Big dick
  "picão": { s: 4, c: 4 }, // Big dick (accented)
  "pinto": { s: 3, c: 4 }, // Dick (slang)
  "piranha": { s: 3, c: 4 }, // Piranha / slut
  "piroca": { s: 4, c: 4 }, // Dick (slang)
  "piru": { s: 4, c: 4 }, // Dick (childish slang)
  "pnc": { s: 4, c: 4 }, // Pau no cu (dick in the ass)
  "porno": { s: 3, c: 4 }, // Porn
  "porra": { s: 3, c: 5 }, // Cum / fuck (expletive)
  "pqp": { s: 3, c: 5 }, // Puta que pariu (holy shit)
  "prega": { s: 3, c: 4 }, // Fold / insult (regional)
  "prostibulo": { s: 3, c: 4 }, // Brothel
  "prostituta": { s: 5, c: 4 }, // Prostitute (female)
  "prostituto": { s: 5, c: 4 }, // Prostitute (male)
  "punheta": { s: 4, c: 4 }, // Handjob / masturbation
  "punhetao": { s: 3, c: 4 }, // Big wank
  "punhetão": { s: 3, c: 4 }, // Big wank (accented)
  "punheteiro": { s: 3, c: 4 }, // Wanker
  "puta": { s: 3, c: 4 }, // Whore
  "puta merda": { s: 3, c: 5 }, // Holy shit
  "puta que pariu": { s: 5, c: 4 }, // Son of a bitch (lit. whore that gave birth)
  "puto": { s: 3, c: 4 }, // Angry / male whore
  "que porra é essa": { s: 3, c: 5 }, // What the fuck is this
  "rabao": { s: 3, c: 4 }, // Big ass
  "rabão": { s: 3, c: 4 }, // Big ass (accented)
  "rabo": { s: 3, c: 4 }, // Ass / tail
  "rabuda": { s: 3, c: 4 }, // Big-assed (female)
  "rabudao": { s: 3, c: 4 }, // Big-assed (augmentative)
  "rabudão": { s: 3, c: 4 }, // Big-assed (augmentative, accented)
  "rabudo": { s: 3, c: 4 }, // Big-assed (male)
  "rabudona": { s: 3, c: 4 }, // Big-assed woman
  "rachada": { s: 4, c: 4 }, // Split / pussy (vulgar)
  "rachadao": { s: 3, c: 4 }, // Big split (vulgar)
  "rachadinha": { s: 3, c: 4 }, // Little split (vulgar)
  "rachadinho": { s: 3, c: 4 }, // Little split (vulgar, male)
  "retardada": { s: 3, c: 4 }, // Retarded (female)
  "retardado": { s: 3, c: 4 }, // Retarded (male)
  "ridicula": { s: 3, c: 4 }, // Ridiculous (female)
  "ridícula": { s: 3, c: 4 }, // Ridiculous (female, accented)
  "ridiculo": { s: 3, c: 4 }, // Ridiculous (male)
  "rola": { s: 4, c: 4 }, // Dick (slang)
  "rolinha": { s: 4, c: 4 }, // Little dick
  "rosca": { s: 3, c: 4 }, // Asshole (slang)
  "sacanagem": { s: 4, c: 4 }, // Dirty trick / sexual act
  "safada": { s: 3, c: 4 }, // Pervert / slut (female)
  "safadeza": { s: 3, c: 4 }, // Perversion / dirty behavior
  "safado": { s: 3, c: 4 }, // Pervert (male)
  "safados": { s: 3, c: 4 }, // Perverts (plural)
  "sapatao": { s: 3, c: 4 }, // Dyke (offensive)
  "sapatão": { s: 3, c: 4 }, // Dyke (offensive, accented)
  "sapatona": { s: 3, c: 4 }, // Dyke (augmentative)
  "seu verme": { s: 3, c: 4 }, // You worm
  "sexo": { s: 3, c: 4 }, // Sex
  "sifilis": { s: 3, c: 4 }, // Syphilis
  "siririca": { s: 4, c: 4 }, // Female masturbation
  "sua cachorra": { s: 3, c: 4 }, // You bitch (lit. your female dog)
  "tarada": { s: 1, c: 4 }, // Pervert (female)
  "tarado": { s: 1, c: 4 }, // Pervert (male)
  "testuda": { s: 3, c: 4 }, // Big forehead (insult, female)
  "tezao": { s: 3, c: 4 }, // Horny / arousal
  "tezão": { s: 3, c: 4 }, // Horny / arousal (accented)
  "tezuda": { s: 3, c: 4 }, // Horny (female)
  "tezudo": { s: 3, c: 4 }, // Horny (male)
  "tnc": { s: 3, c: 4 }, // Toma no cu (take it in the ass)
  "toma no cu": { s: 3, c: 4 }, // Take it in the ass
  "tomar no cu": { s: 3, c: 4 }, // Take it in the ass (infinitive)
  "tomar no cứ": { s: 3, c: 4 }, // Take it in the ass (variant)
  "tonto": { s: 1, c: 4 }, // Dumb / dizzy
  "transar": { s: 3, c: 4 }, // To have sex
  "traveco": { s: 3, c: 4 }, // Tranny (offensive)
  "trepar": { s: 3, c: 5 }, // To fuck / to climb
  "trocha": { s: 1, c: 4 }, // Fool (variant)
  "trolha": { s: 1, c: 4 }, // Fool / trowel (insult)
  "troucha": { s: 1, c: 4 }, // Fool (variant)
  "trouchas": { s: 1, c: 4 }, // Fools (variant, plural)
  "trouxa": { s: 1, c: 4 }, // Fool / sucker
  "trouxas": { s: 1, c: 4 }, // Fools / suckers (plural)
  "troxa": { s: 1, c: 4 }, // Fool (variant)
  "troxas": { s: 1, c: 4 }, // Fools (variant, plural)
  "vaca": { s: 1, c: 4 }, // Cow (insult for women)
  "vacilão": { s: 3, c: 4 }, // Unreliable person / jerk
  "vadio": { s: 3, c: 4 }, // Vagrant / bum
  "vagabunda": { s: 3, c: 4 }, // Slut / bum (female)
  "vagabundo": { s: 3, c: 4 }, // Bum / lowlife (male)
  "vagabundos": { s: 3, c: 4 }, // Bums / lowlifes (plural)
  "vagagundos": { s: 3, c: 5 }, // Bums (misspelling variant)
  "vagina": { s: 4, c: 3 }, // Vagina
  "vai se foder": { s: 3, c: 5 }, // Go fuck yourself
  "veada": { s: 3, c: 4 }, // Doe / faggot (variant, female)
  "veadao": { s: 3, c: 4 }, // Big fag (variant)
  "viada": { s: 3, c: 4 }, // Faggot (female variant)
  "viadao": { s: 3, c: 4 }, // Big fag
  "viadão": { s: 3, c: 4 }, // Big fag (accented)
  "viado": { s: 3, c: 4 }, // Faggot (offensive)
  "viados": { s: 3, c: 4 }, // Faggots (plural)
  "vntc": { s: 3, c: 4 }, // Vai no toma no cu (abbreviation)
  "xana": { s: 4, c: 4 }, // Pussy (slang)
  "xaninha": { s: 4, c: 4 }, // Little pussy (slang)
  "xavasca": { s: 4, c: 4 }, // Pussy (regional slang)
  "xbiu": { s: 4, c: 4 }, // Pussy (variant)
  "xereca": { s: 4, c: 4 }, // Pussy (slang)
  "xerereca": { s: 4, c: 4 }, // Pussy (variant)
  "xexecə": { s: 4, c: 4 }, // Pussy (variant)
  "xibu": { s: 4, c: 4 }, // Pussy (variant)
  "xota": { s: 4, c: 4 }, // Pussy (slang)
  "xoxota": { s: 4, c: 4 }, // Pussy (slang)
  "bunda": { s: 3, c: 4 }, // Butt / ass
  "bundas": { s: 3, c: 4 }, // Butts / asses (plural)
  "bolas": { s: 4, c: 3 }, // Balls (testicles)
  "broche": { s: 4, c: 5 }, // Blowjob (Portuguese variant)
  "broches": { s: 4, c: 5 }, // Blowjobs (plural)
  "cabrão": { s: 3, c: 4 }, // Bastard (Portuguese)
  "cabrões": { s: 3, c: 4 }, // Bastards (plural)
  "cadelas": { s: 3, c: 4 }, // Bitches (lit. female dogs)
  "cona": { s: 5, c: 5 }, // Cunt (Portuguese)
  "conas": { s: 5, c: 5 }, // Cunts (plural, Portuguese)
  "ejaculação": { s: 3, c: 4 }, // Ejaculation
  "excitado": { s: 3, c: 4 }, // Aroused / horny
  "filho da puta": { s: 3, c: 4 }, // Son of a bitch
  "filhos da puta": { s: 3, c: 4 }, // Sons of bitches
  "filho da mãe": { s: 2, c: 3 }, // Son of a mother (euphemism for son of a bitch)
  "fode-se": { s: 3, c: 5 }, // Fuck it (Portuguese variant)
  "fodas": { s: 3, c: 5 }, // Fucks (plural)
  "fodendo": { s: 3, c: 5 }, // Fucking
  "fodida": { s: 3, c: 5 }, // Fucked (female)
  "idiotas": { s: 1, c: 4 }, // Idiots (plural)
  "mamas": { s: 4, c: 4 }, // Breasts
  "masturbar-se": { s: 4, c: 4 }, // To masturbate
  "merdas": { s: 3, c: 5 }, // Shits (plural)
  "mijando": { s: 3, c: 4 }, // Pissing
  "orgasmo": { s: 4, c: 4 }, // Orgasm
  "peitos": { s: 4, c: 4 }, // Breasts / chest
  "pornô": { s: 3, c: 4 }, // Porn (accented)
  "pornografia": { s: 3, c: 4 }, // Pornography
  "putas": { s: 5, c: 4 }, // Whores (plural)
  "que merda": { s: 3, c: 5 }, // What shit
  "que se lixe": { s: 3, c: 4 }, // Screw it (Portuguese)
  "sacana": { s: 3, c: 4 }, // Rascal / pervert
  "sémen": { s: 3, c: 4 }, // Semen
  "tetas": { s: 4, c: 3 }, // Tits
  "bosta": { s: 3, c: 4 }, // Crap / cow dung
  "arrombada": { s: 3, c: 4 }, // Broken open (female, vulgar insult)
  "rapariga": { s: 5, c: 4 }, // Prostitute (Brazilian) / girl (Portuguese)
  "putaria": { s: 3, c: 4 }, // Debauchery / slutty behavior
  "pilantra": { s: 3, c: 4 }, // Crook / scammer
  "chupa rola": { s: 4, c: 4 }, // Suck dick
  "chupa meu pau": { s: 4, c: 4 }, // Suck my dick
  "vai tomar no cu": { s: 3, c: 4 }, // Go take it in the ass
  "puta que te pariu": { s: 5, c: 4 }, // The whore that bore you
  "pau no seu cu": { s: 4, c: 4 }, // Dick in your ass
  "enrabado": { s: 3, c: 4 }, // Sodomized (insult)
  "cuzuda": { s: 3, c: 4 }, // Big-assed (female, vulgar)
  "cornudo": { s: 3, c: 4 }, // Cuckold (variant)
  "boceta": { s: 4, c: 4 }, // Pussy (variant spelling)
  "desgraçada": { s: 3, c: 4 }, // Wretch / bastard (female)
  "porra caralho": { s: 3, c: 5 }, // Fuck damn (compound expletive)

  // Additional Brazilian Portuguese profanity
  "bicha": { s: 3, c: 4 }, // Faggot (very offensive in Brazil)
  "bichona": { s: 3, c: 4 }, // Augmentative of bicha
  "broxa": { s: 4, c: 4 }, // Impotent / limp dick
  "bucetuda": { s: 4, c: 4 }, // Big pussy (vulgar)
  "caceta": { s: 3, c: 4 }, // Variant of cacete
  "caralha": { s: 3, c: 4 }, // Fem variant of caralho
  "caguei": { s: 3, c: 4 }, // I shat / I don't care
  "cornão": { s: 3, c: 4 }, // Big cuckold
  "cu de burro": { s: 3, c: 4 }, // Donkey's ass
  "desgraçado de merda": { s: 3, c: 4 }, // Fucking bastard
  "embucetado": { s: 3, c: 4 }, // Pissed off (vulgar)
  "encoxar": { s: 3, c: 4 }, // To grope
  "enfiado no cu": { s: 3, c: 4 }, // Shoved up the ass
  "enrabada": { s: 3, c: 4 }, // Fem of enrabado
  "feder": { s: 3, c: 4 }, // To stink
  "filha de uma égua": { s: 3, c: 4 }, // Daughter of a mare
  "foda pra caralho": { s: 3, c: 5 }, // Fucking a lot
  "fudeu": { s: 3, c: 5 }, // It's fucked
  "gringo de merda": { s: 3, c: 5 }, // Fucking foreigner
  "lazarento": { s: 3, c: 4 }, // Leper (insult)
  "mete o pau": { s: 4, c: 4 }, // Stick the dick in / Criticize harshly
  "não enche o saco": { s: 4, c: 4 }, // Don't bust my balls
  "otária": { s: 3, c: 4 }, // Fem of otário
  "pau no cu da sua mãe": { s: 4, c: 4 }, // Dick in your mother's ass
  "piranhão": { s: 3, c: 4 }, // Big slut
  "porra louca": { s: 3, c: 5 }, // Crazy fucker
  "safadão": { s: 3, c: 4 }, // Big pervert
  "saco de merda": { s: 3, c: 5 }, // Bag of shit
  "sem vergonha": { s: 3, c: 4 }, // Shameless
  "sua puta": { s: 5, c: 4 }, // You whore
  "tapado": { s: 1, c: 4 }, // Stupid / blocked
  "vai se fuder": { s: 3, c: 5 }, // Go fuck yourself
  "vtnc": { s: 3, c: 4 }, // Abbreviation: vai tomar no cu

  // More compound insults and phrases
  "vai tomar no olho do cu": { s: 3, c: 5 }, // Go get fucked in the eye of the ass
  "enfia no cu": { s: 3, c: 4 }, // Shove it up your ass
  "mete no cu": { s: 3, c: 4 }, // Stick it in the ass
  "mete a rola": { s: 4, c: 4 }, // Stick the dick
  "enfiar no rabo": { s: 3, c: 4 }, // Shove up the ass
  "cu arrombado": { s: 3, c: 4 }, // Busted ass
  "cuzão de merda": { s: 3, c: 5 }, // Shitty asshole
  "filho da puta de merda": { s: 3, c: 5 }, // Son of a bitch of shit
  "desgraça de merda": { s: 3, c: 5 }, // Fucking disgrace
  "porra nenhuma": { s: 3, c: 5 }, // No fucking thing
  "vai pro caralho": { s: 4, c: 4 }, // Go to the dick (go to hell)
  "vai pro inferno": { s: 1, c: 4 }, // Go to hell
  "que porra": { s: 3, c: 5 }, // What the fuck
  "puta da tua mãe": { s: 5, c: 4 }, // Your mother the whore
  "tua mãe é uma puta": { s: 5, c: 4 }, // Your mother is a whore
  "mama minha rola": { s: 4, c: 4 }, // Suck my dick
  "chupa minha pica": { s: 4, c: 4 }, // Suck my dick (variant)
  "caralho de merda": { s: 4, c: 5 }, // Shitty dick
  "vai chupar rola": { s: 4, c: 4 }, // Go suck dick
  "goza na cara": { s: 1, c: 4 }, // Cum on face
  "me chupa": { s: 1, c: 4 }, // Suck me

  // More insults
  "cabaço": { s: 1, c: 4 }, // Virgin (male, insulting)
  "cabaça": { s: 1, c: 4 }, // Virgin (female, insulting)
  "corna": { s: 1, c: 4 }, // Female cuckold
  "fresco": { s: 1, c: 4 }, // Effeminate (derogatory)
  "frescão": { s: 1, c: 4 }, // Augmentative of fresco
  "galinha": { s: 1, c: 4 }, // Chicken (slut)
  "galinhão": { s: 5, c: 4 }, // Man-whore
  "filho de uma puta": { s: 1, c: 4 }, // Son of a bitch
  "jumento": { s: 3, c: 4 }, // Jackass
  "jumenta": { s: 3, c: 4 }, // Female jackass
  "borra": { s: 1, c: 4 }, // Scum
  "imbecil": { s: 1, c: 4 }, // Imbecile
  "babacão": { s: 1, c: 4 }, // Augmentative of babaca
  "lambe cu": { s: 3, c: 4 }, // Ass licker
  "lambe saco": { s: 1, c: 4 }, // Ball licker
  "chupador": { s: 1, c: 4 }, // Sucker
  "cuzeta": { s: 3, c: 4 }, // Small asshole
  "filha de uma puta": { s: 1, c: 4 }, // Daughter of a bitch
  "mongol": { s: 1, c: 4 }, // Mongoloid (offensive)
  "mongolão": { s: 1, c: 4 }, // Augmentative
  "merdão": { s: 3, c: 5 }, // Big shit
  "merdosa": { s: 3, c: 5 }, // Shitty (female)
  "merdoso": { s: 3, c: 5 }, // Shitty (male)
  "pau mole": { s: 4, c: 4 }, // Limp dick
  "pau pequeno": { s: 4, c: 4 }, // Small dick
  "pau torto": { s: 4, c: 4 }, // Bent dick
  "pirocudo": { s: 4, c: 4 }, // Big-dicked
  "porra toda": { s: 3, c: 5 }, // All shit
  "putão": { s: 5, c: 4 }, // Big whore (male)
  "putona": { s: 3, c: 4 }, // Big whore (female)
  "rabudas": { s: 1, c: 4 }, // Plural of rabuda
  "saco de bosta": { s: 1, c: 4 }, // Bag of crap
  "sem cu": { s: 3, c: 4 }, // Without ass
  "viado nojento": { s: 1, c: 4 }, // Disgusting fag
  "puteiro": { s: 5, c: 4 }, // Whorehouse
  "cafetina": { s: 1, c: 4 }, // Madam (brothel)
  "cafetão": { s: 1, c: 4 }, // Pimp
  "chifre": { s: 1, c: 4 }, // Horn (cuckold reference)
  "chifrado": { s: 1, c: 4 }, // Cuckolded
  "chifrada": { s: 1, c: 4 }, // Cuckolded (female)
  "arregaçada": { s: 1, c: 4 }, // Stretched out (vulgar)
  "arregaçado": { s: 1, c: 4 }, // Stretched out (vulgar, male)

  // Internet/text slang
  "vsf": { s: 2, c: 3 }, // Vai se fuder
  "kct": { s: 2, c: 3 }, // Cacete
  "caraio": { s: 2, c: 3 }, // Caralho variant
  "kraal": { s: 2, c: 3 }, // Caralho variant
  "poha": { s: 2, c: 3 }, // Porra variant
  "sfd": { s: 2, c: 3 }, // Se fuder
  "plmds": { s: 2, c: 3 }, // Pelo amor de deus (frustration)
  "nmrl": { s: 2, c: 3 }, // Na moral (slang)
  "lixo humano": { s: 2, c: 3 }, // Human garbage
  "verme": { s: 2, c: 3 }, // Worm
  "nojento": { s: 2, c: 3 }, // Disgusting (male)
  "nojenta": { s: 2, c: 3 }, // Disgusting (female)
  "asqueroso": { s: 3, c: 4 }, // Disgusting
  "asquerosa": { s: 3, c: 4 }, // Disgusting (female)

  // Regional variations
  "porco": { s: 3, c: 4 }, // Pig (insult)
  "porca": { s: 3, c: 4 }, // Pig (female insult)
  "jegue": { s: 3, c: 4 }, // Donkey (northeastern)
  "baitolão": { s: 3, c: 4 }, // Augmentative of baitola
  "trouxão": { s: 1, c: 4 }, // Big fool
  "cagueta": { s: 3, c: 4 }, // Snitch
  "dedo duro": { s: 3, c: 4 }, // Snitch
  "fominha": { s: 3, c: 4 }, // Greedy
  "mão de vaca": { s: 3, c: 4 }, // Cheapskate
  "pão duro": { s: 3, c: 4 }, // Cheapskate
  "sem vergonhice": { s: 3, c: 4 }, // Shamelessness
  "metido": { s: 3, c: 4 }, // Full of oneself
  "metida": { s: 3, c: 4 }, // Full of oneself (female)
  "filho de chocadeira": { s: 3, c: 4 }, // Son of an incubator
  "desgraçados": { s: 3, c: 4 }, // Plural
  "biscate": { s: 3, c: 4 }, // Slut (regional)
  "quenga": { s: 5, c: 4 }, // Prostitute (northeastern)
  "raparigueiro": { s: 3, c: 4 }, // Womanizer (northeastern)
  "mulambo": { s: 3, c: 4 }, // Rag (insult)
  "mulambento": { s: 3, c: 4 }, // Ragged (insult)
  "pau mandado": { s: 3, c: 4 }, // Puppet
  "comedor de merda": { s: 3, c: 5 }, // Shit eater

  // ========================================
  // === Northeastern Brazilian Slang ===
  // ========================================
  "arretado de besta": { s: 1, c: 4 }, // Extremely stupid (NE)
  "arengueira": { s: 3, c: 4 }, // Troublemaker woman (NE)
  "arengueiro": { s: 3, c: 4 }, // Troublemaker man (NE)
  "besta quadrada": { s: 1, c: 4 }, // Squared beast (very stupid, NE)
  "bizonho": { s: 1, c: 4 }, // Ugly/weird (NE)
  "brocado": { s: 3, c: 4 }, // Horny (NE)
  "cabra safado": { s: 3, c: 4 }, // Dirty dude (NE)
  "cabra desgraçado": { s: 3, c: 4 }, // Wretched dude (NE)
  "comer a mãe": { s: 3, c: 5 }, // Fuck the mother (NE)
  "cu de boi": { s: 3, c: 4 }, // Ox's ass (NE insult)
  "cu de jegue": { s: 3, c: 4 }, // Donkey's ass (NE)
  "desconjuntado": { s: 3, c: 4 }, // Disjointed (NE insult)
  "egua": { s: 3, c: 4 }, // Mare (NE expletive)
  "égua": { s: 3, c: 4 }, // Mare (NE expletive, accented)
  "égua puta": { s: 5, c: 4 }, // Mare whore (NE compound)
  "eita porra": { s: 3, c: 5 }, // Damn fuck (NE expletive)
  "filho de rapariga": { s: 3, c: 4 }, // Son of a slut (NE)
  "fresco do cu": { s: 3, c: 4 }, // Ass fresh (NE effeminate insult)
  "mala sem alça": { s: 3, c: 4 }, // Suitcase without handle (annoying person, NE)
  "marmota": { s: 1, c: 4 }, // Fool (NE)
  "mofino": { s: 3, c: 4 }, // Stingy/pathetic (NE)
  "mocreia": { s: 1, c: 4 }, // Ugly woman (NE)
  "peba": { s: 3, c: 4 }, // Pathetic person (NE)
  "pivete de merda": { s: 3, c: 5 }, // Shitty kid (NE)
  "quenga de merda": { s: 5, c: 5 }, // Shitty prostitute (NE)
  "rapariga de merda": { s: 3, c: 5 }, // Shitty slut (NE)
  "tabacudo": { s: 3, c: 4 }, // Big-lipped (NE insult)
  "tchola": { s: 3, c: 4 }, // Gay (NE offensive)
  "toxico": { s: 3, c: 4 }, // Drug addict (NE slang)

  // ========================================
  // === Southern Brazilian (Gaúcho) ===
  // ========================================
  "barbaridade porra": { s: 3, c: 4 }, // Damn (Gaúcho compound)
  "bah porra": { s: 3, c: 4 }, // Gaúcho expletive compound
  "butiá descascado": { s: 1, c: 4 }, // Peeled butiá (ugly, RS)
  "cusco safado": { s: 3, c: 4 }, // Dirty mutt (RS)
  "cusco de merda": { s: 3, c: 5 }, // Shitty mutt (RS)
  "gringo filho da puta": { s: 3, c: 4 }, // Foreigner son of a bitch (RS)
  "guria puta": { s: 5, c: 4 }, // Whore girl (RS)
  "guri safado": { s: 3, c: 4 }, // Dirty boy (RS)
  "tchê porra": { s: 3, c: 5 }, // Gaúcho fuck expletive
  "tri arrombado": { s: 3, c: 4 }, // Very broken open (RS intensifier)
  "tri cuzão": { s: 3, c: 4 }, // Very asshole (RS)
  "tri fdp": { s: 3, c: 4 }, // Very son of a bitch (RS)
  "tri otário": { s: 1, c: 4 }, // Very fool (RS)

  // ========================================
  // === Rio de Janeiro/Carioca Slang ===
  // ========================================
  "caralho mermão": { s: 4, c: 4 }, // Dick bro (carioca)
  "é o caralho": { s: 4, c: 4 }, // It's the dick (carioca dismissal)
  "foda-se mermão": { s: 3, c: 5 }, // Fuck it bro (carioca)
  "maluco do caralho": { s: 3, c: 5 }, // Crazy fucker (carioca)
  "mané do caralho": { s: 1, c: 4 }, // Stupid fucker (carioca)
  "mermão do caralho": { s: 3, c: 5 }, // Fucking bro (carioca)
  "neguinho safado": { s: 3, c: 4 }, // Dirty dude (carioca, can be racial)
  "porra mané": { s: 1, c: 4 }, // Fuck stupid (carioca)
  "porra mermão": { s: 3, c: 5 }, // Fuck bro (carioca)
  "vai se fuder mané": { s: 1, c: 4 }, // Go fuck yourself stupid (carioca)
  "vagabundo do caralho": { s: 3, c: 5 }, // Fucking bum (carioca)
  "menor safado": { s: 3, c: 4 }, // Dirty kid (carioca slang)
  "alemão safado": { s: 3, c: 4 }, // Dirty german (carioca slang for enemy)
  "cria do diabo": { s: 3, c: 4 }, // Devil's spawn (carioca)

  // ========================================
  // === São Paulo/Paulista Profanity ===
  // ========================================
  "mano do caralho": { s: 3, c: 5 }, // Fucking bro (SP)
  "mano otário": { s: 1, c: 4 }, // Fool bro (SP)
  "mina vadia": { s: 3, c: 4 }, // Slutty girl (SP)
  "mlk fdp": { s: 3, c: 4 }, // Kid son of a bitch (SP texting)
  "nóia do caralho": { s: 3, c: 5 }, // Fucking junkie (SP)
  "porra mano": { s: 3, c: 5 }, // Fuck bro (SP)
  "truta fdp": { s: 3, c: 4 }, // Homie son of a bitch (SP)
  "vai se fuder mano": { s: 3, c: 5 }, // Go fuck yourself bro (SP)
  "véio safado": { s: 3, c: 4 }, // Dirty old man (SP)
  "véia safada": { s: 3, c: 4 }, // Dirty old woman (SP)
  "zé buceta": { s: 4, c: 4 }, // Joe pussy (SP worthless man)
  "zé ruela": { s: 3, c: 4 }, // Joe asshole (SP)
  "zé mané": { s: 1, c: 4 }, // Joe stupid (SP)

  // ========================================
  // === Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl": { s: 3, c: 5 }, // Broken open fucker (texting)
  "bct": { s: 2, c: 3 }, // Buceta abbreviation
  "boludo": { s: 1, c: 3 }, // Ball-like (borrowed from Argentine, fool)
  "canceroso": { s: 2, c: 3 }, // Cancerous (gaming insult)
  "crlh": { s: 2, c: 3 }, // Caralho abbreviation
  "cu de ferro": { s: 3, c: 3 }, // Iron ass (stubborn, gaming)
  "desinstalou o jogo": { s: 2, c: 3 }, // Uninstall the game (gaming taunt)
  "fdp do krl": { s: 3, c: 5 }, // Son of a bitch fucker (texting)
  "fds": { s: 2, c: 3 }, // Foda-se abbreviation
  "filhodaputa": { s: 2, c: 3 }, // Son of a bitch (compound)
  "flw fdp": { s: 2, c: 3 }, // Bye son of a bitch (texting)
  "gg fdp": { s: 2, c: 3 }, // Good game son of a bitch (gaming)
  "kd o cu": { s: 3, c: 3 }, // Where's the ass (texting)
  "kid burro": { s: 1, c: 4 }, // Stupid kid (gaming)
  "lixão": { s: 2, c: 3 }, // Big garbage (gaming insult)
  "lixo do caralho": { s: 3, c: 5 }, // Fucking garbage (gaming)
  "mrd": { s: 2, c: 3 }, // Merda abbreviation
  "noob fdp": { s: 2, c: 3 }, // Noob son of a bitch (gaming)
  "pqp mano": { s: 3, c: 5 }, // Holy shit bro (texting)
  "puta q pariu": { s: 2, c: 3 }, // Son of a bitch (texting variant)
  "retardado do krl": { s: 3, c: 5 }, // Fucking retard (texting)
  "tmj fdp": { s: 2, c: 3 }, // Together son of a bitch (texting)
  "vai cagar": { s: 3, c: 5 }, // Go shit
  "vai pro krl": { s: 4, c: 3 }, // Go to the dick (texting)
  "vtnc mano": { s: 3, c: 3 }, // Take it in the ass bro (texting)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "arrombado de merda": { s: 3, c: 5 }, // Shitty broken open
  "babaca do caralho": { s: 1, c: 4 }, // Fucking idiot
  "besta de merda": { s: 1, c: 4 }, // Shitty fool
  "bicha nojenta": { s: 1, c: 4 }, // Disgusting fag
  "bosta de gente": { s: 3, c: 5 }, // Shit of a person
  "broxa de merda": { s: 3, c: 5 }, // Shitty impotent
  "buceta fedida": { s: 4, c: 4 }, // Stinky pussy
  "burro de merda": { s: 3, c: 5 }, // Shitty donkey
  "burro do caralho": { s: 3, c: 5 }, // Fucking donkey
  "cachorra de merda": { s: 3, c: 5 }, // Shitty bitch
  "caralho a quatro": { s: 4, c: 4 }, // Four-way dick (extreme expletive)
  "cona de merda": { s: 5, c: 5 }, // Shitty cunt
  "cornão de merda": { s: 3, c: 5 }, // Shitty big cuckold
  "corno manso": { s: 1, c: 4 }, // Tame cuckold (accepting cuckold)
  "cu de cavalo": { s: 3, c: 4 }, // Horse's ass
  "cu fedido": { s: 3, c: 4 }, // Stinky ass
  "cu sujo": { s: 3, c: 4 }, // Dirty ass
  "cuzão do caralho": { s: 3, c: 5 }, // Fucking asshole
  "desgraçado do caralho": { s: 3, c: 4 }, // Fucking bastard
  "imbecil do caralho": { s: 3, c: 5 }, // Fucking imbecile
  "jumento de merda": { s: 3, c: 5 }, // Shitty jackass
  "lixo de gente": { s: 1, c: 4 }, // Garbage of a person
  "merda de pessoa": { s: 3, c: 5 }, // Shit of a person
  "nojento de merda": { s: 3, c: 5 }, // Shitty disgusting
  "otário do caralho": { s: 3, c: 5 }, // Fucking sucker
  "pau de merda": { s: 4, c: 5 }, // Shitty dick
  "piranha de merda": { s: 3, c: 5 }, // Shitty slut
  "piranha do caralho": { s: 3, c: 5 }, // Fucking slut
  "porco de merda": { s: 3, c: 5 }, // Shitty pig
  "porra de merda": { s: 3, c: 5 }, // Shitty cum
  "puta barata": { s: 5, c: 5 }, // Cheap whore
  "puta de merda": { s: 5, c: 5 }, // Shitty whore
  "puta do caralho": { s: 5, c: 5 }, // Fucking whore
  "rola de merda": { s: 4, c: 5 }, // Shitty dick
  "safado de merda": { s: 3, c: 5 }, // Shitty pervert
  "safado do caralho": { s: 3, c: 5 }, // Fucking pervert
  "trouxa do caralho": { s: 1, c: 4 }, // Fucking fool
  "vaca de merda": { s: 3, c: 5 }, // Shitty cow
  "vagabunda de merda": { s: 3, c: 5 }, // Shitty slut
  "vagabundo de merda": { s: 3, c: 5 }, // Shitty bum
  "verme de merda": { s: 3, c: 5 }, // Shitty worm
  "verme do caralho": { s: 3, c: 5 }, // Fucking worm
  "viado de merda": { s: 3, c: 5 }, // Shitty fag

  // ========================================
  // === Portuguese from Portugal ===
  // ========================================
  "atirar ao boneco": { s: 4, c: 4 }, // Masturbate (PT)
  "badalhoca": { s: 3, c: 4 }, // Filthy woman (PT)
  "badalhoco": { s: 3, c: 4 }, // Filthy man (PT)
  "branleur": { s: 1, c: 4 }, // Wanker (PT borrowed)
  "burra do caralho": { s: 1, c: 4 }, // Fucking stupid (female, PT)
  "cabrão do caralho": { s: 3, c: 4 }, // Fucking bastard (PT)
  "caralhada": { s: 4, c: 4 }, // Dick move (PT)
  "caralhudo": { s: 4, c: 4 }, // Big-dicked (PT)
  "chulo": { s: 4, c: 4 }, // Pimp (PT)
  "chula": { s: 1, c: 4 }, // Pimp's woman (PT)
  "coiro": { s: 1, c: 3 }, // Leather/hide (PT slang for ugly person)
  "conas de sabão": { s: 5, c: 5 }, // Soap cunts (PT worthless)
  "esporra": { s: 3, c: 4 }, // Cum (PT)
  "esporrada": { s: 3, c: 4 }, // Ejaculation (PT)
  "foda-se caralho": { s: 3, c: 5 }, // Fuck damn (PT compound)
  "fodasse": { s: 3, c: 5 }, // Fuck (PT compound variant)
  "foder a mãe": { s: 3, c: 5 }, // Fuck the mother (PT)
  "foder o cu": { s: 3, c: 5 }, // Fuck the ass (PT)
  "foder-se": { s: 3, c: 5 }, // Fuck oneself (PT)
  "fufa": { s: 3, c: 4 }, // Dyke (PT offensive)
  "granda cabrão": { s: 3, c: 4 }, // Big bastard (PT)
  "granda cona": { s: 5, c: 5 }, // Big cunt (PT)
  "granda puta": { s: 5, c: 4 }, // Big whore (PT)
  "ir para o caralho": { s: 4, c: 4 }, // Go to the dick (PT go to hell)
  "lamparina": { s: 3, c: 3 }, // Lamp (PT euphemism for ass)
  "levar no cu": { s: 3, c: 4 }, // Take it in the ass (PT)
  "mama na piça": { s: 4, c: 4 }, // Suck the dick (PT)
  "manda-te foder": { s: 3, c: 5 }, // Go get fucked (PT)
  "maricas": { s: 3, c: 4 }, // Faggot (PT)
  "mija": { s: 3, c: 4 }, // Piss (PT)
  "mija-me todo": { s: 3, c: 4 }, // Piss me all (PT)
  "paneleiro": { s: 3, c: 4 }, // Faggot (PT offensive)
  "paneleira": { s: 3, c: 4 }, // Dyke (PT offensive)
  "piça": { s: 4, c: 4 }, // Dick (PT)
  "pissa": { s: 3, c: 4 }, // Piss (PT variant)
  "putedo": { s: 3, c: 4 }, // Brothel (PT)
  "putéfio": { s: 3, c: 4 }, // Brothel (PT variant)
  "rabo de fora": { s: 3, c: 4 }, // Ass out (PT)
  "rata": { s: 1, c: 4 }, // Pussy (PT slang)
  "ratinha": { s: 4, c: 4 }, // Little pussy (PT)
  "tomates": { s: 4, c: 4 }, // Tomatoes/balls (PT slang for testicles)
  "vai levar no cu": { s: 3, c: 4 }, // Go take it in the ass (PT)
  "vai para o caralho": { s: 4, c: 4 }, // Go to the dick (PT)
  "vai para o cu da tua mãe": { s: 3, c: 4 }, // Go to your mother's ass (PT)

  // ========================================
  // === Body Part Vulgarities ===
  // ========================================
  "anus": { s: 3, c: 4 }, // Anus
  "ânus": { s: 4, c: 3 }, // Anus (accented)
  "bico do peito": { s: 4, c: 3 }, // Nipple
  "bocetinha": { s: 4, c: 3 }, // Little pussy
  "boquinha": { s: 4, c: 3 }, // Little mouth (sexual innuendo)
  "bundinha": { s: 4, c: 3 }, // Little ass
  "cacetão": { s: 4, c: 3 }, // Big dick
  "cacetinho": { s: 4, c: 3 }, // Little dick
  "culhão": { s: 4, c: 3 }, // Big ball/testicle
  "culhões": { s: 4, c: 3 }, // Big balls/testicles
  "cu peludo": { s: 4, c: 3 }, // Hairy ass
  "cu raspado": { s: 4, c: 3 }, // Shaved ass
  "mamilo": { s: 4, c: 3 }, // Nipple
  "pentelhuda": { s: 4, c: 3 }, // Hairy-pubed (female)
  "pentelhudo": { s: 4, c: 3 }, // Hairy-pubed (male)
  "periquita": { s: 4, c: 3 }, // Little pussy (variant)
  "picona": { s: 4, c: 3 }, // Big-dicked (female form, as insult)
  "rabo peludo": { s: 4, c: 3 }, // Hairy ass
  "saco de bola": { s: 4, c: 3 }, // Ball sack (variant)
  "teta grande": { s: 4, c: 3 }, // Big tit
  "tetona": { s: 4, c: 3 }, // Big-titted
  "tetuda": { s: 4, c: 3 }, // Big-titted (variant)

  // ========================================
  // === Favela/Street Slang ===
  // ========================================
  "boca de fumo": { s: 3, c: 4 }, // Drug selling point
  "bonde do caralho": { s: 3, c: 5 }, // Fucking gang
  "caguetou": { s: 3, c: 4 }, // Snitched (past tense)
  "cheirador": { s: 3, c: 4 }, // Coke snorter
  "chupar o pau do diabo": { s: 4, c: 4 }, // Suck the devil's dick
  "cuzinheiro": { s: 3, c: 4 }, // Ass man (vulgar)
  "desce a ladeira": { s: 3, c: 4 }, // Go down the hill (dismissive)
  "engomadinho": { s: 3, c: 4 }, // Preppy (insult)
  "favelado de merda": { s: 3, c: 5 }, // Shitty favela dweller
  "gambé": { s: 3, c: 4 }, // Cop (slang, derogatory)
  "gambé fdp": { s: 3, c: 4 }, // Cop son of a bitch
  "laranja podre": { s: 3, c: 4 }, // Rotten orange (snitch)
  "maloqueiro fdp": { s: 3, c: 4 }, // Thug son of a bitch
  "merdinha": { s: 3, c: 5 }, // Little shit
  "moleque de merda": { s: 3, c: 5 }, // Shitty kid
  "noia": { s: 3, c: 4 }, // Junkie (street slang)
  "noiado": { s: 3, c: 4 }, // High/junky
  "noiada": { s: 3, c: 4 }, // High/junky (female)
  "patrãozinho de merda": { s: 3, c: 5 }, // Shitty little boss
  "playboy de merda": { s: 3, c: 5 }, // Shitty rich kid
  "safadinho": { s: 3, c: 4 }, // Little pervert
  "safadinha": { s: 3, c: 4 }, // Little pervert (female)
  "traficante de merda": { s: 3, c: 5 }, // Shitty drug dealer
  "trombadinha": { s: 3, c: 4 }, // Pickpocket kid
  "vacilou": { s: 3, c: 4 }, // Slipped up (used insultingly)
  "vida loka": { s: 3, c: 4 }, // Crazy life (street slang)
  "X9 do caralho": { s: 3, c: 5 }, // Fucking snitch

  // ========================================
  // === Sexual Terms ===
  // ========================================
  "boqueteira": { s: 4, c: 5 }, // Blowjob giver (female)
  "boqueteiro": { s: 4, c: 5 }, // Blowjob giver (male)
  "brochar": { s: 4, c: 4 }, // To go limp
  "chupeta de rola": { s: 4, c: 4 }, // Dick pacifier
  "comer o cu": { s: 4, c: 5 }, // Eat the ass (fuck the ass)
  "comer o rabo": { s: 4, c: 4 }, // Eat the ass (variant)
  "comeu gostoso": { s: 4, c: 5 }, // Ate/fucked good
  "dar a buceta": { s: 4, c: 4 }, // Give the pussy
  "dar o cu": { s: 4, c: 4 }, // Give the ass
  "dar o rabo": { s: 4, c: 4 }, // Give the ass (variant)
  "enrabar": { s: 4, c: 4 }, // To sodomize
  "fio terra": { s: 4, c: 4 }, // Ground wire (anal play slang)
  "gozar na boca": { s: 4, c: 4 }, // Cum in the mouth
  "gozar na cara": { s: 4, c: 4 }, // Cum in the face
  "leite de rola": { s: 4, c: 4 }, // Dick milk (cum)
  "mamar o pau": { s: 4, c: 4 }, // Suck the dick (variant)
  "meter a pica": { s: 4, c: 4 }, // Insert the dick
  "meter gostoso": { s: 4, c: 5 }, // Fuck good
  "meter o pau": { s: 4, c: 4 }, // Insert the dick (variant)
  "pica na buceta": { s: 4, c: 4 }, // Dick in pussy
  "rola dura": { s: 4, c: 4 }, // Hard dick
  "sentar na pica": { s: 4, c: 4 }, // Sit on the dick
  "sentar na rola": { s: 4, c: 4 }, // Sit on the dick (variant)
  "trepada": { s: 4, c: 5 }, // Fuck (noun)
  "xerecão": { s: 4, c: 4 }, // Big pussy
  "xerequinha": { s: 4, c: 4 }, // Little pussy

  // ========================================
  // === Evasion Spellings ===
  // ========================================
  "c4ralho": { s: 4, c: 5 }, // Dick (evasion)
  "buc3ta": { s: 4, c: 5 }, // Pussy (evasion)
  "fod4": { s: 3, c: 5 }, // Fuck (evasion)
  "p0rra": { s: 3, c: 5 }, // Cum/fuck (evasion)
  "m3rda": { s: 3, c: 5 }, // Shit (evasion)
  "put4": { s: 4, c: 5 }, // Whore (evasion)
  "c@ralho": { s: 4, c: 5 }, // Dick (evasion)
  "buc#ta": { s: 4, c: 5 }, // Pussy (evasion)
  "f0da": { s: 3, c: 5 }, // Fuck (evasion)
  "p*rra": { s: 3, c: 5 }, // Cum/fuck (evasion)
  "m*rda": { s: 3, c: 5 }, // Shit (evasion)
  "put@": { s: 3, c: 5 }, // Whore (evasion)
  "c*ralho": { s: 4, c: 5 }, // Dick (evasion)
  "b*ceta": { s: 4, c: 5 }, // Pussy (evasion)
  "f*da": { s: 3, c: 5 }, // Fuck (evasion)
  "v1ado": { s: 3, c: 5 }, // Faggot (evasion)
  "v!ado": { s: 3, c: 5 }, // Faggot (evasion)
  "arr0mbado": { s: 3, c: 5 }, // Broken open (evasion)
  "cuz4o": { s: 3, c: 5 }, // Asshole (evasion)
  "p1ranha": { s: 3, c: 5 }, // Slut (evasion)
  "r0la": { s: 4, c: 5 }, // Dick (evasion)
  "p1ca": { s: 4, c: 5 }, // Dick (evasion)
  "pir0ca": { s: 4, c: 5 }, // Dick (evasion)
  "b0sta": { s: 3, c: 5 }, // Crap (evasion)
  "p@u": { s: 4, c: 5 }, // Dick (evasion)
  "c0rno": { s: 3, c: 5 }, // Cuckold (evasion)
  "crlho": { s: 3, c: 5 }, // Caralho shorthand
  "bct4": { s: 3, c: 5 }, // Buceta evasion
  "fdp!": { s: 3, c: 5 }, // Son of a bitch evasion
  "ptqp": { s: 3, c: 5 }, // Puta que pariu evasion
  "carr4lho": { s: 4, c: 5 }, // Dick evasion variant
  "buçeta": { s: 4, c: 5 }, // Pussy (accent evasion)
  "karaio": { s: 4, c: 5 }, // Dick (k evasion variant)
  "pohha": { s: 3, c: 5 }, // Porra variant
  "pohá": { s: 3, c: 5 }, // Porra variant
  "mierda": { s: 3, c: 4 }, // Shit (Spanish-influenced evasion)
  "arronbado": { s: 3, c: 5 }, // Broken open (misspelling evasion)
  "cuza0": { s: 3, c: 5 }, // Asshole (zero evasion)

  // ========================================
  // === More Compound Phrases ===
  // ========================================
  "vai tomar no meio do cu": { s: 3, c: 5 }, // Go take it in the middle of the ass
  "vai chupar o cu da mãe": { s: 3, c: 5 }, // Go suck your mother's ass
  "enfia essa porra no cu": { s: 3, c: 5 }, // Shove this shit up your ass
  "mete essa rola no cu": { s: 4, c: 5 }, // Stick this dick up your ass
  "enfiar a rola no cu": { s: 4, c: 5 }, // Shove the dick up the ass
  "mama minha pica": { s: 4, c: 5 }, // Suck my dick (variant)
  "chupa meu saco": { s: 4, c: 5 }, // Suck my balls
  "lambe meu cu": { s: 3, c: 5 }, // Lick my ass
  "lambe minha buceta": { s: 4, c: 5 }, // Lick my pussy
  "senta nessa pica": { s: 4, c: 5 }, // Sit on this dick
  "vai dar o cu": { s: 3, c: 5 }, // Go give your ass
  "vai chupar uma rola": { s: 4, c: 5 }, // Go suck a dick
  "vai mamar": { s: 3, c: 5 }, // Go suck (vulgar)
  "vai dar a buceta": { s: 4, c: 5 }, // Go give your pussy
  "toma no rabo": { s: 3, c: 5 }, // Take it in the ass (variant)
  "toma nesse cu": { s: 3, c: 5 }, // Take it in this ass
  "mete no rabo": { s: 3, c: 5 }, // Stick it in the ass (variant)
  "enfiar no cu e rodar": { s: 3, c: 5 }, // Shove up the ass and spin
  "chupa até o talo": { s: 3, c: 5 }, // Suck it to the base
  "pau na tua boca": { s: 4, c: 5 }, // Dick in your mouth
  "rola na tua cara": { s: 4, c: 5 }, // Dick in your face
  "porra na tua cara": { s: 3, c: 5 }, // Cum in your face
  "goza nessa cara de puta": { s: 5, c: 5 }, // Cum on this whore face
  "mama essa pica suja": { s: 4, c: 5 }, // Suck this dirty dick
  "carne de porco fedida": { s: 3, c: 5 }, // Stinky pork (compound insult)
  "saco de merda ambulante": { s: 3, c: 5 }, // Walking bag of shit
  "monte de bosta": { s: 3, c: 5 }, // Pile of crap
  "pedaço de merda": { s: 3, c: 5 }, // Piece of shit
  "cara de merda": { s: 3, c: 5 }, // Shit face
  "cara de buceta": { s: 4, c: 5 }, // Pussy face
  "boca de buceta": { s: 4, c: 5 }, // Pussy mouth
  "nariz de pau": { s: 4, c: 5 }, // Dick nose
  "olho do cu": { s: 3, c: 5 }, // Eye of the ass (asshole)
  "cu de gato": { s: 3, c: 5 }, // Cat's ass
  "cu de porco": { s: 3, c: 5 }, // Pig's ass
  "rabo de vaca": { s: 3, c: 5 }, // Cow's ass
  "cu de macaco": { s: 3, c: 5 }, // Monkey's ass
  "merda de gente": { s: 3, c: 5 }, // Shit person (variant)

  // ========================================
  // === Regional Variations (All States) ===
  // ========================================
  // Minas Gerais
  "uai porra": { s: 3, c: 4 }, // MG expletive
  "trem do caralho": { s: 3, c: 5 }, // Fucking thing (MG)
  "trem arrombado": { s: 3, c: 4 }, // Broken thing (MG)
  "nó tio que porra": { s: 3, c: 5 }, // Damn uncle what fuck (MG)
  "vai tomar no cu sô": { s: 3, c: 5 }, // Go get fucked buddy (MG)
  "cê é besta demais": { s: 1, c: 4 }, // You're too stupid (MG)
  "sô do caralho": { s: 3, c: 5 }, // Fucking buddy (MG)
  "cabra da peste fdp": { s: 3, c: 4 }, // Stubborn bastard son of bitch (MG)
  "cê é burro pra caralho": { s: 1, c: 4 }, // You're fucking stupid (MG)

  // Bahia
  "mah ôxe porra": { s: 3, c: 4 }, // Bahia expletive
  "ave maria porra": { s: 3, c: 5 }, // Holy Mary fuck (Bahia)
  "ôxe do caralho": { s: 3, c: 5 }, // Fucking damn (Bahia)
  "piranha oxente": { s: 3, c: 4 }, // Bahia slut
  "corno da porra": { s: 3, c: 4 }, // Damn cuckold (Bahia)
  "vei safado do caralho": { s: 3, c: 5 }, // Fucking dirty old man (Bahia)
  "cabra safado da porra": { s: 3, c: 4 }, // Damn dirty dude (Bahia)
  "bicha do caralho": { s: 3, c: 5 }, // Fucking fag (Bahia)

  // Pará / Northern
  "égua do caralho": { s: 3, c: 5 }, // Fucking mare (Pará)
  "curumim safado": { s: 3, c: 4 }, // Dirty kid (Pará)
  "caboclo fdp": { s: 3, c: 4 }, // Mixed-race son of bitch (Pará, offensive)
  "porra egua": { s: 3, c: 4 }, // Damn mare (Pará)
  "égua da puta": { s: 5, c: 4 }, // Whore mare (Pará)
  "caralho bicho": { s: 4, c: 4 }, // Dick dude (Pará)
  "bicho fdp": { s: 3, c: 4 }, // Dude son of bitch (Pará)

  // Pernambuco
  "aff porra": { s: 3, c: 4 }, // Pernambuco expletive
  "quenga arrombada": { s: 5, c: 4 }, // Broken open prostitute (PE)
  "cabra da peste desgraçado": { s: 3, c: 4 }, // Stubborn bastard (PE)
  "eita porra do caralho": { s: 3, c: 5 }, // Damn fuck (PE compound)
  "besta porra": { s: 1, c: 4 }, // Stupid fuck (PE)
  "arrombado da peste": { s: 3, c: 4 }, // Stubborn broken open (PE)
  "porra recife": { s: 3, c: 5 }, // Recife fuck (PE expletive)
  "vixe porra": { s: 3, c: 5 }, // Holy shit (PE)

  // Maranhão
  "égua porra maranhão": { s: 3, c: 5 }, // Mare fuck (MA)
  "cabra fdp do caralho": { s: 3, c: 5 }, // Dude son of bitch fucker (MA)
  "porra moleque": { s: 3, c: 5 }, // Fuck kid (MA)

  // Ceará
  "rapaz do caralho": { s: 3, c: 5 }, // Fucking boy (CE)
  "abestado do caralho": { s: 1, c: 4 }, // Fucking fool (CE)
  "cabra macho fdp": { s: 3, c: 4 }, // Tough dude son of bitch (CE)
  "mermão porra": { s: 3, c: 5 }, // Bro fuck (CE)
  "rapaz desgraçado": { s: 3, c: 4 }, // Wretched boy (CE)

  // Goiás / Centro-Oeste
  "uai do caralho": { s: 3, c: 5 }, // Fucking damn (GO)
  "trem fdp": { s: 3, c: 5 }, // Fucking thing (GO, MG influence)
  "cê é trouxa demais": { s: 1, c: 4 }, // You're too foolish (GO)
  "porra sertanejo": { s: 3, c: 5 }, // Fuck (GO expletive)

  // ========================================
  // === Portuguese Internet Slang Evasions ===
  // ========================================
  "krl mano": { s: 2, c: 5 }, // Caralho mano evasion
  "pfv fdp": { s: 2, c: 5 }, // Please son of bitch (ironic)
  "tmj krl": { s: 4, c: 5 }, // Together dick (texting)
  "kkk fdp": { s: 2, c: 5 }, // Laughing son of bitch
  "slc krl": { s: 4, c: 5 }, // Damn dick (texting)
  "mds fdp": { s: 2, c: 5 }, // My God son of bitch
  "pqp krl": { s: 4, c: 5 }, // Holy shit dick
  "vsf krl": { s: 4, c: 5 }, // Go fuck yourself dick
  "vtnc krl": { s: 4, c: 5 }, // Take it in the ass dick
  "mn do krl": { s: 3, c: 5 }, // Bro fucker
  "mlk fdp krl": { s: 4, c: 5 }, // Kid son of bitch dick
  "ss fdp": { s: 2, c: 5 }, // Yes son of bitch
  "n fdp": { s: 2, c: 5 }, // No son of bitch
  "glr fdp": { s: 2, c: 5 }, // Guys son of bitch (group)
  "ta de sacanagem": { s: 2, c: 5 }, // You're kidding (vulgar)
  "na moralzinha": { s: 2, c: 5 }, // On the down low (sarcastic)
  "papo reto fdp": { s: 2, c: 5 }, // Straight talk son of bitch
  "caraleo": { s: 2, c: 5 }, // Caralho evasion variant
  "karamba": { s: 2, c: 5 }, // Caramba evasion
  "pohha carai": { s: 2, c: 5 }, // Porra caralho evasion
  "mds porr": { s: 2, c: 5 }, // My God porra evasion

  // ========================================
  // === Portunhol (Portuguese-Spanish Mix Border Slang) ===
  // ========================================
  "hijo de puta": { s: 5, c: 5 }, // Son of a bitch (Spanish in Brazil border)
  "la concha de tu madre": { s: 5, c: 5 }, // Your mother's pussy (Argentine-border)
  "boludo de merda": { s: 1, c: 4 }, // Shitty fool (Argentine-border)
  "pelotudo fdp": { s: 3, c: 4 }, // Big-balled son of bitch (border)
  "la puta que te parió": { s: 5, c: 4 }, // The whore that bore you (border)
  "anda a la mierda": { s: 3, c: 5 }, // Go to shit (border)
  "anda cagar": { s: 3, c: 5 }, // Go shit (border mix)
  "conchudo": { s: 5, c: 5 }, // Brazen (border)
  "conchuda": { s: 5, c: 5 }, // Brazen (female, border)
  "pendejo do caralho": { s: 1, c: 4 }, // Fucking idiot (border)
  "boludo arrombado": { s: 1, c: 4 }, // Fool broken open (border)
  "la puta madre": { s: 5, c: 4 }, // The whore mother (border)
  "carajo de merda": { s: 4, c: 5 }, // Shitty dick (border)
  "chinga tu madre": { s: 3, c: 4 }, // Fuck your mother (Mexican-border)
  "verga del caralho": { s: 4, c: 4 }, // Dick of the dick (border compound)
  "culero fdp": { s: 3, c: 4 }, // Asshole son of bitch (border)
  "mierda de poronga": { s: 4, c: 5 }, // Shit of a dick (border)
  "poronga de merda": { s: 4, c: 5 }, // Shitty dick (border variant)
  "pija do caralho": { s: 4, c: 5 }, // Fucking dick (border)
  "la re puta madre": { s: 5, c: 4 }, // The re-whore mother (border intensified)
  "choto do caralho": { s: 3, c: 5 }, // Fucking worthless (border)
  "forro de merda": { s: 3, c: 5 }, // Shitty condom (border insult)

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "boquetão": { s: 4, c: 5 }, // Big blowjob
  "chupar a xota": { s: 4, c: 4 }, // Suck the pussy
  "comer a xereca": { s: 4, c: 4 }, // Eat the pussy
  "dar a xota": { s: 4, c: 4 }, // Give the pussy
  "enfiar a pica": { s: 4, c: 4 }, // Insert the dick
  "foder a buceta": { s: 4, c: 5 }, // Fuck the pussy
  "foder o rabo": { s: 4, c: 5 }, // Fuck the ass
  "gozar dentro": { s: 4, c: 4 }, // Cum inside
  "gozar fora": { s: 4, c: 4 }, // Cum outside
  "lamber a buceta": { s: 4, c: 4 }, // Lick the pussy
  "lamber a xota": { s: 4, c: 4 }, // Lick the pussy (variant)
  "lamber o cu": { s: 4, c: 4 }, // Lick the ass
  "mamar a pica": { s: 4, c: 4 }, // Suck the dick (variant)
  "mamar a piroca": { s: 4, c: 4 }, // Suck the dick (variant)
  "meter a rola": { s: 4, c: 4 }, // Insert the dick (variant)
  "meter forte": { s: 4, c: 5 }, // Fuck hard
  "meter fundo": { s: 4, c: 5 }, // Fuck deep
  "pica dura": { s: 4, c: 4 }, // Hard dick
  "pica grande": { s: 4, c: 4 }, // Big dick
  "pica grossa": { s: 4, c: 4 }, // Thick dick
  "pica mole": { s: 4, c: 4 }, // Limp dick
  "piroca dura": { s: 4, c: 4 }, // Hard dick (variant)
  "rola grande": { s: 4, c: 4 }, // Big dick (variant)
  "rola grossa": { s: 4, c: 4 }, // Thick dick (variant)
  "sentar gostoso": { s: 4, c: 4 }, // Sit nice (sexual)
  "sentar no pau": { s: 4, c: 4 }, // Sit on the dick
  "trepada gostosa": { s: 4, c: 5 }, // Nice fuck
  "xereca molhada": { s: 4, c: 4 }, // Wet pussy
  "xota gostosa": { s: 4, c: 4 }, // Nice pussy
  "buceta apertada": { s: 4, c: 4 }, // Tight pussy
  "buceta larga": { s: 4, c: 4 }, // Loose pussy
  "cu apertado": { s: 4, c: 4 }, // Tight ass
  "cu largo": { s: 4, c: 4 }, // Loose ass
  "gozar na boca dela": { s: 4, c: 4 }, // Cum in her mouth
  "gozar no rabo": { s: 4, c: 4 }, // Cum in the ass
  "leite na cara": { s: 4, c: 4 }, // Milk in the face (cum)
  "meter até o saco": { s: 4, c: 5 }, // Fuck until the balls
  "pau gostoso": { s: 4, c: 4 }, // Nice dick
  "sentar até o talo": { s: 4, c: 4 }, // Sit until the base
  "chupar o grelo": { s: 4, c: 4 }, // Suck the clitoris
  "dedo no cu": { s: 4, c: 4 }, // Finger in the ass
  "punheta gostosa": { s: 4, c: 4 }, // Nice handjob
  "siririca gostosa": { s: 4, c: 4 }, // Nice female masturbation
  "chupada no pau": { s: 4, c: 5 }, // Blowjob on the dick
  "chupada na buceta": { s: 4, c: 4 }, // Oral on the pussy
  "foda violenta": { s: 4, c: 5 }, // Violent fuck
  "comida de rabo": { s: 4, c: 4 }, // Ass eating

  // ========================================
  // === More Insults and Slurs ===
  // ========================================
  "abobado": { s: 1, c: 4 }, // Dazed/dumb
  "abobalhado": { s: 1, c: 4 }, // Dazed/stupid
  "animal do caralho": { s: 5, c: 5 }, // Fucking animal
  "babaovo": { s: 5, c: 4 }, // Sycophant / bootlicker
  "bagaceira": { s: 5, c: 4 }, // Trashy woman
  "bagaceiro": { s: 5, c: 4 }, // Trashy man
  "barrigudo": { s: 5, c: 4 }, // Big-bellied (insult)
  "bisonho": { s: 1, c: 4 }, // Ugly/weird
  "bruxa": { s: 5, c: 4 }, // Witch (insult)
  "burra": { s: 1, c: 4 }, // Stupid (female)
  "caloteiro": { s: 5, c: 4 }, // Deadbeat
  "caloteira": { s: 5, c: 4 }, // Deadbeat (female)
  "canalha de merda": { s: 5, c: 5 }, // Shitty scoundrel
  "capeta": { s: 5, c: 4 }, // Devil/demon
  "chato do caralho": { s: 5, c: 5 }, // Fucking annoying
  "cobra": { s: 5, c: 4 }, // Snake (treacherous)
  "cretino de merda": { s: 5, c: 5 }, // Shitty cretin
  "descarada": { s: 3, c: 4 }, // Shameless (female)
  "descarado": { s: 3, c: 4 }, // Shameless (male)
  "energúmeno": { s: 1, c: 4 }, // Energumen/violent idiot
  "escória": { s: 5, c: 4 }, // Scum/dregs
  "escrota": { s: 5, c: 4 }, // Scummy (female)
  "estorvo": { s: 5, c: 4 }, // Nuisance
  "fedorento": { s: 5, c: 4 }, // Stinky (male)
  "fedorenta": { s: 5, c: 4 }, // Stinky (female)
  "feia": { s: 1, c: 4 }, // Ugly (female)
  "feio": { s: 1, c: 4 }, // Ugly (male)
  "fracassado": { s: 1, c: 4 }, // Failure/loser
  "fracassada": { s: 1, c: 4 }, // Failure/loser (female)
  "franguinha": { s: 1, c: 4 }, // Little chicken (coward, effeminate)
  "ignorante": { s: 1, c: 4 }, // Ignorant
  "imundo": { s: 5, c: 4 }, // Filthy (male)
  "imunda": { s: 5, c: 4 }, // Filthy (female)
  "infeliz": { s: 1, c: 4 }, // Unhappy/wretched person
  "maldito": { s: 3, c: 4 }, // Damn/cursed (male)
  "maldita": { s: 3, c: 4 }, // Damn/cursed (female)
  "maluco": { s: 5, c: 4 }, // Crazy (male)
  "maluca": { s: 5, c: 4 }, // Crazy (female)
  "mandrião": { s: 5, c: 4 }, // Lazy bum
  "miserável do caralho": { s: 5, c: 5 }, // Fucking wretch
  "monstra": { s: 5, c: 4 }, // Monster (female insult)
  "monstro": { s: 5, c: 4 }, // Monster (male insult)
  "morto de fome": { s: 5, c: 4 }, // Starving (cheapskate insult)
  "mula": { s: 3, c: 4 }, // Mule (stupid)
  "narigudo": { s: 5, c: 4 }, // Big-nosed
  "orelhudo": { s: 5, c: 4 }, // Big-eared
  "parasita": { s: 5, c: 4 }, // Parasite
  "pé rapado": { s: 5, c: 4 }, // Bare-footed (poor, insult)
  "picareta": { s: 5, c: 4 }, // Scammer
  "porco imundo": { s: 5, c: 4 }, // Filthy pig
  "preguiçoso": { s: 5, c: 4 }, // Lazy (male)
  "preguiçosa": { s: 5, c: 4 }, // Lazy (female)
  "pústula": { s: 5, c: 4 }, // Pustule (insult)
  "ranhoso": { s: 5, c: 4 }, // Snotty (male)
  "ranhosa": { s: 5, c: 4 }, // Snotty (female)
  "resto de aborto": { s: 5, c: 5 }, // Abortion leftovers (extreme insult)
  "seboso": { s: 5, c: 4 }, // Greasy/gross (male)
  "sebosa": { s: 5, c: 4 }, // Greasy/gross (female)
  "sujo": { s: 5, c: 4 }, // Dirty (male)
  "suja": { s: 5, c: 4 }, // Dirty (female)
  "toupeira": { s: 1, c: 4 }, // Mole (blind/stupid)
  "vagal": { s: 5, c: 4 }, // Vagrant (variant)
  "velho broxa": { s: 5, c: 4 }, // Old impotent man
  "verme nojento": { s: 5, c: 4 }, // Disgusting worm
  "aborto mal feito": { s: 5, c: 5 }, // Badly done abortion (extreme insult)
  "catinga": { s: 5, c: 4 }, // Body odor (insult)
  "catingoso": { s: 5, c: 4 }, // Stinky person
  "chinelão": { s: 5, c: 4 }, // Big flip-flop (cheap person)
  "crackudo": { s: 5, c: 4 }, // Crack addict
  "drogadinho": { s: 5, c: 4 }, // Little drug addict
  "escória humana": { s: 5, c: 4 }, // Human scum
  "lixo ambulante": { s: 5, c: 4 }, // Walking garbage
  "pedaço de bosta": { s: 5, c: 4 }, // Piece of crap
  "podre por dentro": { s: 5, c: 4 }, // Rotten inside
  "rato de esgoto": { s: 5, c: 4 }, // Sewer rat
  "sanguessuga": { s: 5, c: 4 }, // Leech (parasite)
  "trambiquer": { s: 5, c: 4 }, // Scammer (variant)
  "traste": { s: 5, c: 4 }, // Piece of junk (insult)
  "vadiagem": { s: 5, c: 4 }, // Vagrancy/slutty behavior
  "vergonha da família": { s: 5, c: 4 }, // Family shame

  // ========================================
  // === Extended Brazilian Profanity ===
  // ========================================
  "arrombado de merda do caralho": { s: 3, c: 5 }, // Fucking shitty broken open
  "babaca de merda do caralho": { s: 1, c: 4 }, // Fucking shitty idiot
  "besta de merda do caralho": { s: 1, c: 4 }, // Fucking shitty fool
  "burro de merda do caralho": { s: 3, c: 5 }, // Fucking shitty donkey
  "corno de merda do caralho": { s: 3, c: 5 }, // Fucking shitty cuckold
  "cuzão de merda do caralho": { s: 3, c: 5 }, // Fucking shitty asshole
  "desgraçado de merda do caralho": { s: 3, c: 4 }, // Fucking shitty bastard
  "imbecil de merda do caralho": { s: 3, c: 5 }, // Fucking shitty imbecile
  "otário de merda do caralho": { s: 3, c: 5 }, // Fucking shitty sucker
  "piranha de merda do caralho": { s: 3, c: 5 }, // Fucking shitty slut
  "puta de merda do caralho": { s: 5, c: 5 }, // Fucking shitty whore
  "retardado de merda do caralho": { s: 3, c: 5 }, // Fucking shitty retard
  "safado de merda do caralho": { s: 3, c: 5 }, // Fucking shitty pervert
  "trouxa de merda do caralho": { s: 1, c: 4 }, // Fucking shitty fool
  "vaca de merda do caralho": { s: 3, c: 5 }, // Fucking shitty cow
  "vagabunda de merda do caralho": { s: 3, c: 5 }, // Fucking shitty slut
  "vagabundo de merda do caralho": { s: 3, c: 5 }, // Fucking shitty bum
  "viado de merda do caralho": { s: 3, c: 5 }, // Fucking shitty fag
  "verme de merda do caralho": { s: 3, c: 5 }, // Fucking shitty worm

  // ========================================
  // === Angola Portuguese Profanity ===
  // ========================================
  "cabrão da merda": { s: 3, c: 4 }, // Bastard of shit (Angola)
  "cornudo de merda": { s: 3, c: 5 }, // Shitty cuckold (Angola)
  "foder a mãe toda": { s: 3, c: 5 }, // Fuck the whole mother (Angola)
  "grande puta": { s: 5, c: 4 }, // Big whore (Angola)
  "ir pro caralho todo": { s: 4, c: 4 }, // Go completely to dick (Angola)
  "mambo de merda": { s: 3, c: 5 }, // Shitty matter (Angola slang)
  "monangamba de merda": { s: 3, c: 5 }, // Shitty slave (Angola offensive)
  "mulato de merda": { s: 3, c: 5 }, // Shitty mixed-race (Angola offensive)
  "pila": { s: 4, c: 4 }, // Dick (Angola/PT)
  "pila grande": { s: 4, c: 4 }, // Big dick (Angola)
  "pila pequena": { s: 4, c: 4 }, // Small dick (Angola)
  "pilantra de merda": { s: 3, c: 5 }, // Shitty crook (Angola)
  "pontapé no cu": { s: 3, c: 4 }, // Kick in the ass (Angola)
  "quimbunda": { s: 5, c: 4 }, // Insult (Angola ethnic slur)
  "vai para a pila": { s: 4, c: 4 }, // Go to the dick (Angola)
  "vai para o raio que te parta": { s: 3, c: 4 }, // Go to the lightning (Angola curse)

  // ========================================
  // === Mozambique Portuguese Profanity ===
  // ========================================
  "chamar nomes": { s: 3, c: 4 }, // Call names (Mozambique insult)
  "dar porrada": { s: 3, c: 4 }, // Give beatings (Mozambique)
  "foda-se mano": { s: 3, c: 5 }, // Fuck it bro (Mozambique)
  "grande cabrão do caralho": { s: 3, c: 4 }, // Fucking big bastard (Mozambique)
  "ir mamar": { s: 3, c: 4 }, // Go suck (Mozambique)
  "machimbombo de merda": { s: 3, c: 5 }, // Shitty bus (Mozambique insult)
  "mana puta": { s: 5, c: 4 }, // Sister whore (Mozambique)
  "pila no cu": { s: 4, c: 4 }, // Dick in the ass (Mozambique)
  "vai para a cona": { s: 5, c: 5 }, // Go to the cunt (Mozambique)
  "vai levar porrada": { s: 3, c: 4 }, // Go take beatings (Mozambique)

  // ========================================
  // === Cape Verde Portuguese Profanity ===
  // ========================================
  "badiu de merda": { s: 3, c: 5 }, // Shitty islander (CV offensive)
  "ca bu mãe": { s: 3, c: 4 }, // Your mother (CV Creole insult)
  "cona da tua mãe": { s: 5, c: 5 }, // Your mother's cunt (CV)
  "filho de cadela": { s: 3, c: 4 }, // Son of a bitch (CV)
  "filha de cadela": { s: 3, c: 4 }, // Daughter of a bitch (CV)
  "grande porca": { s: 3, c: 4 }, // Big pig (female, CV)
  "grande porco": { s: 3, c: 4 }, // Big pig (male, CV)
  "mama piça": { s: 4, c: 4 }, // Suck the dick (CV)
  "piça de burro": { s: 4, c: 4 }, // Donkey's dick (CV)
  "vai mamar piça": { s: 4, c: 4 }, // Go suck dick (CV)

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "atirar à cona": { s: 5, c: 5 }, // Throw to the cunt (PT vulgar)
  "badalhoca do caralho": { s: 3, c: 5 }, // Fucking filthy woman (PT)
  "bêbedo do caralho": { s: 1, c: 3 }, // Fucking drunk (PT)
  "brochista": { s: 3, c: 4 }, // Impotent (PT variant)
  "burra da merda": { s: 1, c: 4 }, // Stupid shit (female, PT)
  "cabrão da tua mãe": { s: 3, c: 4 }, // Your mother's bastard (PT)
  "cabrão filho da puta": { s: 3, c: 4 }, // Bastard son of a bitch (PT)
  "caralhada grande": { s: 4, c: 4 }, // Big dick move (PT)
  "caralhudo do caralho": { s: 4, c: 5 }, // Big-dicked fucker (PT)
  "coiro do caralho": { s: 1, c: 4 }, // Fucking ugly person (PT)
  "conas de merda": { s: 5, c: 5 }, // Shitty cunts (PT)
  "cornudo do caralho": { s: 3, c: 5 }, // Fucking cuckold (PT)
  "cu aberto": { s: 3, c: 4 }, // Open ass (PT insult)
  "cona aberta": { s: 5, c: 5 }, // Open cunt (PT insult)
  "cona molhada": { s: 5, c: 5 }, // Wet cunt (PT)
  "cona seca": { s: 5, c: 5 }, // Dry cunt (PT)
  "esporro todo": { s: 3, c: 4 }, // Full cum (PT)
  "esporrada na cara": { s: 3, c: 4 }, // Ejaculation on face (PT)
  "foda-se caralho porra": { s: 3, c: 5 }, // Fuck damn cum (PT triple expletive)
  "foder a cona toda": { s: 5, c: 5 }, // Fuck the whole cunt (PT)
  "foder o cu todo": { s: 3, c: 5 }, // Fuck the whole ass (PT)
  "foder-se todo": { s: 3, c: 5 }, // Fuck oneself completely (PT)
  "fufa do caralho": { s: 3, c: 5 }, // Fucking dyke (PT)
  "ir para o caralho mais velho": { s: 4, c: 4 }, // Go to the oldest dick (PT)
  "ir para o cu da tua mãe": { s: 3, c: 4 }, // Go to your mother's ass (PT variant)
  "levar no cu todo": { s: 3, c: 4 }, // Take it all in the ass (PT)
  "mama na piça do teu pai": { s: 1, c: 4 }, // Suck your father's dick (PT)
  "maricas do caralho": { s: 3, c: 5 }, // Fucking faggot (PT)
  "paneleiro do caralho": { s: 3, c: 5 }, // Fucking faggot (PT variant)
  "paneleira do caralho": { s: 3, c: 5 }, // Fucking dyke (PT)
  "piça de merda": { s: 4, c: 5 }, // Shitty dick (PT)
  "piça grande": { s: 4, c: 4 }, // Big dick (PT)
  "piça pequena": { s: 4, c: 4 }, // Small dick (PT)
  "piça torta": { s: 4, c: 4 }, // Bent dick (PT)
  "putedo de merda": { s: 3, c: 5 }, // Shitty brothel (PT)
  "rata da merda": { s: 4, c: 5 }, // Shitty pussy (PT)
  "rata molhada": { s: 4, c: 4 }, // Wet pussy (PT)
  "tomar na cona": { s: 5, c: 5 }, // Take it in the cunt (PT)
  "vai levar na cona": { s: 5, c: 5 }, // Go take it in the cunt (PT)
  "vai para a cona da tua mãe": { s: 5, c: 5 }, // Go to your mother's cunt (PT)
  "vai para o cu da tua avó": { s: 3, c: 4 }, // Go to your grandmother's ass (PT)

  // ========================================
  // === Extended Northeastern Brazilian ===
  // ========================================
  "arretado de porra": { s: 3, c: 5 }, // Damn fuck (NE)
  "arretado de merda": { s: 3, c: 5 }, // Damn shit (NE)
  "besta do caralho": { s: 1, c: 4 }, // Fucking fool (NE)
  "bizonho de merda": { s: 1, c: 4 }, // Shitty ugly (NE)
  "brocado de merda": { s: 3, c: 5 }, // Shitty horny (NE)
  "cabra safado de merda": { s: 3, c: 5 }, // Shitty dirty dude (NE)
  "cabra desgraçado de merda": { s: 3, c: 5 }, // Shitty wretched dude (NE)
  "cabra safado do caralho": { s: 3, c: 5 }, // Fucking dirty dude (NE)
  "comer a mãe e a irmã": { s: 3, c: 5 }, // Fuck the mother and sister (NE)
  "cu de boi de merda": { s: 3, c: 5 }, // Shitty ox's ass (NE)
  "cu de jegue de merda": { s: 3, c: 5 }, // Shitty donkey's ass (NE)
  "desconjuntado de merda": { s: 3, c: 5 }, // Shitty disjointed (NE)
  "égua do caralho de merda": { s: 3, c: 5 }, // Fucking shitty mare (NE)
  "égua puta de merda": { s: 5, c: 5 }, // Shitty mare whore (NE)
  "filho de rapariga de merda": { s: 3, c: 5 }, // Shitty son of a slut (NE)
  "fresco do cu de merda": { s: 3, c: 5 }, // Shitty ass fresh (NE)
  "mala sem alça de merda": { s: 3, c: 5 }, // Shitty annoying person (NE)
  "marmota de merda": { s: 1, c: 4 }, // Shitty fool (NE)
  "mocreia de merda": { s: 1, c: 4 }, // Shitty ugly woman (NE)
  "peba de merda": { s: 3, c: 5 }, // Shitty pathetic person (NE)
  "pivete de merda do caralho": { s: 3, c: 5 }, // Fucking shitty kid (NE)
  "quenga arrombada de merda": { s: 5, c: 5 }, // Shitty broken prostitute (NE)
  "rapariga arrombada": { s: 3, c: 4 }, // Broken slut (NE)
  "rapariga de merda do caralho": { s: 3, c: 5 }, // Fucking shitty slut (NE)
  "tabacudo de merda": { s: 3, c: 5 }, // Shitty big-lipped (NE)
  "tchola de merda": { s: 3, c: 5 }, // Shitty gay (NE)

  // ========================================
  // === Extended Southern Brazilian ===
  // ========================================
  "barbaridade do caralho": { s: 3, c: 5 }, // Fucking damn (RS)
  "bah porra do caralho": { s: 3, c: 4 }, // Gaúcho triple expletive
  "butiá descascado de merda": { s: 1, c: 4 }, // Shitty ugly (RS)
  "cusco safado de merda": { s: 3, c: 5 }, // Shitty dirty mutt (RS)
  "gringo filho da puta de merda": { s: 3, c: 5 }, // Shitty foreigner SOB (RS)
  "guria puta de merda": { s: 5, c: 5 }, // Shitty whore girl (RS)
  "guri safado de merda": { s: 3, c: 5 }, // Shitty dirty boy (RS)
  "tchê porra do caralho": { s: 3, c: 4 }, // Gaúcho triple expletive
  "tri arrombado de merda": { s: 3, c: 5 }, // Very broken shitty (RS)
  "tri cuzão de merda": { s: 3, c: 5 }, // Very shitty asshole (RS)
  "tri fdp de merda": { s: 3, c: 5 }, // Very shitty SOB (RS)
  "tri otário de merda": { s: 1, c: 4 }, // Very shitty fool (RS)
  "bah tri merda": { s: 3, c: 5 }, // Very shit (RS)
  "tri safado de merda": { s: 3, c: 5 }, // Very shitty pervert (RS)
  "tri vagabundo de merda": { s: 3, c: 5 }, // Very shitty bum (RS)
  "piá safado de merda": { s: 3, c: 5 }, // Shitty dirty kid (RS)
  "piá fdp do caralho": { s: 3, c: 5 }, // Fucking SOB kid (RS)
  "guria safada do caralho": { s: 3, c: 5 }, // Fucking dirty girl (RS)

  // ========================================
  // === Extended Rio de Janeiro Slang ===
  // ========================================
  "caralho mermão do caralho": { s: 4, c: 5 }, // Dick bro fucker (carioca)
  "é o caralho de merda": { s: 4, c: 5 }, // It's the shitty dick (carioca)
  "foda-se mermão do caralho": { s: 3, c: 5 }, // Fuck it bro fucker (carioca)
  "maluco do caralho de merda": { s: 3, c: 5 }, // Fucking shitty crazy (carioca)
  "mané do caralho de merda": { s: 1, c: 4 }, // Fucking shitty stupid (carioca)
  "mermão do caralho de merda": { s: 3, c: 5 }, // Fucking shitty bro (carioca)
  "porra mané do caralho": { s: 1, c: 4 }, // Fuck stupid fucker (carioca)
  "porra mermão do caralho": { s: 3, c: 5 }, // Fuck bro fucker (carioca)
  "vagabundo do caralho de merda": { s: 3, c: 5 }, // Fucking shitty bum (carioca)
  "menor safado de merda": { s: 3, c: 5 }, // Shitty dirty kid (carioca)
  "alemão safado de merda": { s: 3, c: 5 }, // Shitty dirty enemy (carioca)
  "cria do diabo de merda": { s: 3, c: 5 }, // Shitty devil's spawn (carioca)
  "sangue bom fdp": { s: 3, c: 4 }, // Good blood SOB (carioca ironic)
  "irmão fdp do caralho": { s: 3, c: 5 }, // Fucking SOB brother (carioca)
  "parceiro fdp": { s: 3, c: 4 }, // SOB partner (carioca)
  "chapa fdp do caralho": { s: 3, c: 5 }, // Fucking SOB buddy (carioca)

  // ========================================
  // === Extended São Paulo Slang ===
  // ========================================
  "mano do caralho de merda": { s: 3, c: 5 }, // Fucking shitty bro (SP)
  "mano otário de merda": { s: 1, c: 4 }, // Shitty fool bro (SP)
  "mina vadia de merda": { s: 3, c: 5 }, // Shitty slutty girl (SP)
  "mlk fdp de merda": { s: 3, c: 5 }, // Shitty SOB kid (SP)
  "nóia do caralho de merda": { s: 3, c: 5 }, // Fucking shitty junkie (SP)
  "porra mano do caralho": { s: 3, c: 5 }, // Fuck bro fucker (SP)
  "truta fdp de merda": { s: 3, c: 5 }, // Shitty SOB homie (SP)
  "véio safado de merda": { s: 3, c: 5 }, // Shitty dirty old man (SP)
  "véia safada de merda": { s: 3, c: 5 }, // Shitty dirty old woman (SP)
  "zé buceta de merda": { s: 4, c: 5 }, // Shitty Joe pussy (SP)
  "zé ruela de merda": { s: 3, c: 5 }, // Shitty Joe asshole (SP)
  "zé mané de merda": { s: 1, c: 4 }, // Shitty Joe stupid (SP)
  "moleque fdp de merda": { s: 3, c: 5 }, // Shitty SOB kid (SP variant)
  "mina fdp do caralho": { s: 3, c: 5 }, // Fucking SOB girl (SP)
  "brother fdp de merda": { s: 3, c: 5 }, // Shitty SOB brother (SP)
  "parça fdp do caralho": { s: 3, c: 5 }, // Fucking SOB pal (SP)
  "véio broxa de merda": { s: 3, c: 5 }, // Shitty old impotent (SP)

  // ========================================
  // === Extended Minas Gerais Slang ===
  // ========================================
  "uai porra do caralho": { s: 3, c: 4 }, // MG triple expletive
  "trem do caralho de merda": { s: 3, c: 5 }, // Fucking shitty thing (MG)
  "trem arrombado de merda": { s: 3, c: 5 }, // Shitty broken thing (MG)
  "nó tio que porra é essa": { s: 3, c: 4 }, // Damn uncle WTF (MG)
  "vai tomar no cu sô de merda": { s: 3, c: 5 }, // Go get fucked shitty buddy (MG)
  "cê é besta demais do caralho": { s: 1, c: 4 }, // You're too fucking stupid (MG)
  "sô do caralho de merda": { s: 3, c: 5 }, // Fucking shitty buddy (MG)
  "cê é burro pra caralho de merda": { s: 1, c: 4 }, // You're fucking shitty stupid (MG)
  "uai trem de merda": { s: 3, c: 5 }, // Damn shitty thing (MG)
  "trem porco de merda": { s: 3, c: 5 }, // Shitty dirty thing (MG)
  "cê é um trem de merda": { s: 3, c: 5 }, // You're a shitty thing (MG)
  "trem nojento de merda": { s: 3, c: 5 }, // Shitty disgusting thing (MG)
  "sô arrombado do caralho": { s: 3, c: 5 }, // Fucking broken buddy (MG)
  "sô safado do caralho": { s: 3, c: 5 }, // Fucking dirty buddy (MG)
  "sô otário do caralho": { s: 1, c: 4 }, // Fucking fool buddy (MG)

  // ========================================
  // === Extended Bahia Slang ===
  // ========================================
  "mah ôxe porra do caralho": { s: 3, c: 4 }, // Bahia triple expletive
  "ave maria porra do caralho": { s: 3, c: 5 }, // Holy Mary fuck (Bahia triple)
  "ôxe do caralho de merda": { s: 3, c: 5 }, // Fucking shitty damn (Bahia)
  "piranha oxente de merda": { s: 3, c: 5 }, // Shitty damn slut (Bahia)
  "corno da porra de merda": { s: 3, c: 5 }, // Shitty damn cuckold (Bahia)
  "vei safado do caralho de merda": { s: 3, c: 5 }, // Fucking shitty dirty old man (Bahia)
  "cabra safado da porra de merda": { s: 3, c: 5 }, // Shitty damn dirty dude (Bahia)
  "bicha do caralho de merda": { s: 3, c: 5 }, // Fucking shitty fag (Bahia)
  "ôxe velho safado": { s: 3, c: 4 }, // Damn dirty old man (Bahia)
  "ôxe piranha arrombada": { s: 3, c: 4 }, // Damn broken slut (Bahia)
  "ôxe corno manso": { s: 3, c: 4 }, // Damn tame cuckold (Bahia)
  "oxente fdp do caralho": { s: 3, c: 5 }, // Damn fucking SOB (Bahia)

  // ========================================
  // === Extended Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl de merda": { s: 3, c: 5 }, // Broken open fucker shitty (texting)
  "bct de merda": { s: 4, c: 5 }, // Shitty pussy (texting)
  "canceroso de merda": { s: 3, c: 5 }, // Shitty cancerous (gaming)
  "canceroso do krl": { s: 3, c: 5 }, // Cancerous fucker (gaming)
  "crlh de merda": { s: 4, c: 5 }, // Shitty dick (texting)
  "cu de ferro de merda": { s: 3, c: 5 }, // Shitty iron ass (gaming)
  "fdp do krl de merda": { s: 3, c: 5 }, // Shitty SOB fucker (texting)
  "fds de merda": { s: 3, c: 5 }, // Shitty fuck it (texting)
  "filhodaputa de merda": { s: 3, c: 5 }, // Shitty SOB (texting)
  "flw fdp de merda": { s: 3, c: 5 }, // Bye shitty SOB (texting)
  "gg fdp de merda": { s: 3, c: 5 }, // GG shitty SOB (gaming)
  "kid burro de merda": { s: 1, c: 4 }, // Shitty stupid kid (gaming)
  "lixão de merda": { s: 3, c: 5 }, // Shitty big garbage (gaming)
  "lixo do caralho de merda": { s: 3, c: 5 }, // Fucking shitty garbage (gaming)
  "noob fdp de merda": { s: 3, c: 5 }, // Shitty noob SOB (gaming)
  "retardado do krl de merda": { s: 3, c: 5 }, // Fucking shitty retard (texting)
  "vai cagar de merda": { s: 3, c: 5 }, // Go shit shitty (redundant intensifier)
  "vai pro krl de merda": { s: 4, c: 5 }, // Go to shitty dick (texting)
  "vtnc mano de merda": { s: 3, c: 5 }, // Take it shitty bro (texting)
  "hacker fdp": { s: 2, c: 3 }, // Hacker SOB (gaming)
  "cheater fdp": { s: 2, c: 3 }, // Cheater SOB (gaming)
  "tryhard fdp": { s: 2, c: 3 }, // Tryhard SOB (gaming)
  "camper fdp": { s: 2, c: 3 }, // Camper SOB (gaming)
  "feeder fdp": { s: 2, c: 3 }, // Feeder SOB (gaming)
  "toxic fdp": { s: 2, c: 3 }, // Toxic SOB (gaming)
  "bot de merda": { s: 3, c: 5 }, // Shitty bot (gaming)
  "bot do caralho": { s: 3, c: 5 }, // Fucking bot (gaming)
  "aimbot fdp": { s: 2, c: 3 }, // Aimbot SOB (gaming)
  "wallhack fdp": { s: 2, c: 3 }, // Wallhack SOB (gaming)
  "rage quit fdp": { s: 2, c: 3 }, // Rage quit SOB (gaming)
  "lag fdp": { s: 2, c: 3 }, // Lag SOB (gaming)
  "desinstala fdp": { s: 2, c: 3 }, // Uninstall SOB (gaming)
  "deleta o jogo fdp": { s: 2, c: 3 }, // Delete game SOB (gaming)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boquetão de merda": { s: 4, c: 5 }, // Shitty big blowjob
  "chupar a xota de merda": { s: 4, c: 5 }, // Suck the shitty pussy
  "comer a xereca de merda": { s: 4, c: 5 }, // Eat the shitty pussy
  "dar a xota de merda": { s: 4, c: 5 }, // Give the shitty pussy
  "enfiar a pica de merda": { s: 4, c: 5 }, // Insert the shitty dick
  "foder a buceta toda": { s: 4, c: 5 }, // Fuck the whole pussy
  "foder o rabo todo": { s: 4, c: 5 }, // Fuck the whole ass
  "gozar dentro de merda": { s: 4, c: 5 }, // Cum inside shitty
  "lamber a buceta toda": { s: 4, c: 4 }, // Lick the whole pussy
  "lamber a xota toda": { s: 4, c: 4 }, // Lick the whole pussy variant
  "lamber o cu todo": { s: 4, c: 4 }, // Lick the whole ass
  "mamar a pica toda": { s: 4, c: 4 }, // Suck the whole dick
  "meter a rola toda": { s: 4, c: 4 }, // Insert the whole dick
  "meter forte de merda": { s: 4, c: 5 }, // Fuck hard shitty
  "meter fundo de merda": { s: 4, c: 5 }, // Fuck deep shitty
  "pica dura de merda": { s: 4, c: 5 }, // Shitty hard dick
  "rola grande de merda": { s: 4, c: 5 }, // Shitty big dick
  "sentar na pica toda": { s: 4, c: 4 }, // Sit on the whole dick
  "trepada de merda": { s: 4, c: 5 }, // Shitty fuck
  "xerecão de merda": { s: 4, c: 5 }, // Shitty big pussy
  "buceta apertada de merda": { s: 4, c: 5 }, // Shitty tight pussy
  "cu largo de merda": { s: 4, c: 5 }, // Shitty loose ass
  "pau duro no cu": { s: 4, c: 4 }, // Hard dick in ass
  "pau mole de merda": { s: 4, c: 5 }, // Shitty limp dick
  "pirocão no cu": { s: 4, c: 4 }, // Big dick in the ass
  "rola na buceta": { s: 4, c: 4 }, // Dick in pussy
  "rola no cu": { s: 4, c: 4 }, // Dick in ass
  "pica na boca": { s: 4, c: 4 }, // Dick in mouth
  "gozada na cara": { s: 4, c: 4 }, // Cum shot on face
  "leitada na boca": { s: 4, c: 4 }, // Milk shot in mouth
  "leitada na cara": { s: 4, c: 4 }, // Milk shot on face
  "leitada no cu": { s: 4, c: 4 }, // Milk shot in ass
  "chupar até secar": { s: 4, c: 4 }, // Suck until dry
  "meter até gozar": { s: 4, c: 5 }, // Fuck until cum
  "foder até cansar": { s: 4, c: 5 }, // Fuck until tired
  "comer o cu e a buceta": { s: 4, c: 4 }, // Eat the ass and pussy
  "meter no cu e na boca": { s: 4, c: 4 }, // Insert in ass and mouth
  "chupar a rola toda": { s: 4, c: 4 }, // Suck the whole dick
  "sentar no pau todo": { s: 4, c: 4 }, // Sit on the whole dick
  "meter gostoso no cu": { s: 4, c: 5 }, // Fuck the ass nicely
  "dar o cu gostoso": { s: 4, c: 4 }, // Give the ass nicely
  "comer a buceta toda": { s: 4, c: 4 }, // Eat the whole pussy
  "lamber o cu inteiro": { s: 4, c: 4 }, // Lick the whole ass

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "c4r4lho": { s: 4, c: 5 }, // Dick evasion
  "buc3t4": { s: 4, c: 5 }, // Pussy evasion
  "f0d4-se": { s: 3, c: 5 }, // Fuck it evasion
  "p0rr4": { s: 3, c: 5 }, // Cum evasion
  "m3rd4": { s: 3, c: 5 }, // Shit evasion
  "put4 que p4riu": { s: 3, c: 5 }, // SOB evasion
  "c@r@lho": { s: 4, c: 5 }, // Dick evasion
  "buc#t@": { s: 4, c: 5 }, // Pussy evasion
  "f*da-se": { s: 3, c: 5 }, // Fuck it evasion
  "p*rr@": { s: 3, c: 5 }, // Cum evasion
  "m*rd@": { s: 3, c: 5 }, // Shit evasion
  "put@ que p@riu": { s: 3, c: 5 }, // SOB evasion
  "v!@do": { s: 3, c: 5 }, // Faggot evasion
  "arr0mb@do": { s: 3, c: 5 }, // Broken evasion
  "cuz@0": { s: 3, c: 5 }, // Asshole evasion
  "p1r@nha": { s: 3, c: 5 }, // Slut evasion
  "r0l@": { s: 4, c: 5 }, // Dick evasion
  "p1c@": { s: 4, c: 5 }, // Dick evasion
  "p1r0c@": { s: 4, c: 5 }, // Dick evasion
  "b0st@": { s: 3, c: 5 }, // Crap evasion
  "c0rn0": { s: 3, c: 5 }, // Cuckold evasion
  "karalh0": { s: 4, c: 5 }, // Dick evasion
  "karai0": { s: 4, c: 5 }, // Dick evasion
  "p0hha": { s: 3, c: 5 }, // Cum evasion
  "busc3ta": { s: 4, c: 5 }, // Pussy evasion
  "bucet@": { s: 4, c: 5 }, // Pussy evasion
  "f0dase": { s: 3, c: 5 }, // Fuck it evasion
  "c4cete": { s: 4, c: 5 }, // Dick evasion
  "b4baca": { s: 1, c: 5 }, // Idiot evasion
  "cr3tino": { s: 3, c: 5 }, // Cretin evasion
  "1diota": { s: 1, c: 5 }, // Idiot evasion
  "1mbecil": { s: 3, c: 5 }, // Imbecile evasion
  "tr0uxa": { s: 1, c: 5 }, // Fool evasion
  "v@gabunda": { s: 3, c: 5 }, // Slut evasion
  "v@gabundo": { s: 3, c: 5 }, // Bum evasion
  "des gr@çado": { s: 3, c: 5 }, // Bastard evasion
  "arr0nbado": { s: 3, c: 5 }, // Broken evasion variant
  "f1lho da put@": { s: 3, c: 5 }, // SOB evasion
  "v@i se f0der": { s: 3, c: 5 }, // Go fuck yourself evasion
  "v@i tom@r no cu": { s: 3, c: 5 }, // Go take it evasion

  // ========================================
  // === Extended Compound Phrases ===
  // ========================================
  "vai tomar no meio do olho do cu": { s: 3, c: 5 }, // Take it in the middle of asshole
  "vai chupar o cu da mãe e do pai": { s: 3, c: 5 }, // Suck parents' asses
  "enfia essa porra no cu e roda": { s: 3, c: 5 }, // Shove and spin
  "mete essa rola no cu e gira": { s: 3, c: 5 }, // Stick and spin
  "enfiar a rola no cu e girar": { s: 3, c: 5 }, // Shove and spin variant
  "mama minha pica e engole": { s: 4, c: 5 }, // Suck my dick and swallow
  "chupa meu saco e engole": { s: 4, c: 5 }, // Suck my balls and swallow
  "lambe meu cu e engole": { s: 3, c: 5 }, // Lick my ass and swallow
  "senta nessa pica e goza": { s: 4, c: 5 }, // Sit on dick and cum
  "vai dar o cu pro diabo": { s: 3, c: 5 }, // Go give ass to devil
  "vai chupar uma rola de cavalo": { s: 4, c: 5 }, // Go suck a horse's dick
  "vai mamar uma piroca de burro": { s: 4, c: 5 }, // Go suck a donkey's dick
  "vai dar a buceta pro cachorro": { s: 4, c: 5 }, // Go give pussy to dog
  "toma no rabo e no cu": { s: 3, c: 5 }, // Take in both asses
  "mete no rabo e na boca": { s: 3, c: 5 }, // Stick in ass and mouth
  "enfiar no cu e na boca": { s: 3, c: 5 }, // Shove in ass and mouth
  "chupa até sair sangue": { s: 3, c: 5 }, // Suck until bleed
  "pau na tua boca até engasgar": { s: 4, c: 5 }, // Dick in mouth until gag
  "rola na tua cara até cegar": { s: 4, c: 5 }, // Dick on face until blind
  "porra na tua cara até afogar": { s: 3, c: 5 }, // Cum on face until drown
  "saco de merda ambulante fedido": { s: 3, c: 5 }, // Walking stinky bag of shit
  "monte de bosta fedida": { s: 3, c: 5 }, // Pile of stinky crap
  "pedaço de merda podre": { s: 3, c: 5 }, // Piece of rotten shit
  "cara de merda fedida": { s: 3, c: 5 }, // Stinky shit face
  "boca de buceta fedida": { s: 4, c: 5 }, // Stinky pussy mouth
  "olho do cu cabeludo": { s: 3, c: 5 }, // Hairy asshole
  "cu de porco fedido": { s: 3, c: 5 }, // Stinky pig's ass
  "rabo de vaca fedido": { s: 3, c: 5 }, // Stinky cow's ass
  "cu de macaco fedido": { s: 3, c: 5 }, // Stinky monkey's ass
  "merda de gente fedida": { s: 3, c: 5 }, // Stinky shit person

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bocetona": { s: 4, c: 3 }, // Big pussy (augmentative)
  "bocetuda grande": { s: 4, c: 3 }, // Big big-pussy
  "boquinha de merda": { s: 4, c: 5 }, // Shitty little mouth
  "bundona": { s: 4, c: 3 }, // Big butt
  "bunduda grande": { s: 4, c: 3 }, // Big big-butted
  "cacetada": { s: 4, c: 3 }, // Dick hit
  "cacetudo": { s: 4, c: 3 }, // Big-dicked
  "caralho grande": { s: 4, c: 3 }, // Big dick
  "caralho grosso": { s: 4, c: 3 }, // Thick dick
  "caralho mole": { s: 4, c: 3 }, // Limp dick
  "caralho torto": { s: 4, c: 3 }, // Bent dick
  "clitoris grande": { s: 4, c: 3 }, // Big clitoris
  "cu cabeludo": { s: 4, c: 3 }, // Hairy ass
  "cu de fora": { s: 4, c: 3 }, // Ass out
  "cu gordo": { s: 1, c: 4 }, // Fat ass
  "cu grande": { s: 4, c: 3 }, // Big ass
  "cu magro": { s: 4, c: 3 }, // Skinny ass
  "cu peludo grande": { s: 4, c: 3 }, // Big hairy ass
  "culhão grande": { s: 4, c: 3 }, // Big testicle
  "grelo grande": { s: 4, c: 3 }, // Big clitoris
  "grelo inchado": { s: 4, c: 3 }, // Swollen clitoris
  "mama grande": { s: 4, c: 3 }, // Big breast
  "mamilo grande": { s: 4, c: 3 }, // Big nipple
  "peitão": { s: 4, c: 3 }, // Big breast
  "peituda grande": { s: 4, c: 3 }, // Big big-breasted
  "pentelhona": { s: 4, c: 3 }, // Very hairy-pubed (female)
  "pentelhudo grande": { s: 4, c: 3 }, // Very hairy-pubed (male)
  "periquita grande": { s: 4, c: 3 }, // Big pussy variant
  "pica grossa de merda": { s: 4, c: 5 }, // Shitty thick dick
  "picudo": { s: 4, c: 3 }, // Pointy/big-dicked
  "piroca grande": { s: 4, c: 3 }, // Big dick
  "piroca grossa": { s: 4, c: 3 }, // Thick dick
  "piroca mole": { s: 4, c: 3 }, // Limp dick
  "piroca torta": { s: 4, c: 3 }, // Bent dick
  "rabo gordo": { s: 1, c: 4 }, // Fat ass
  "rabo grande": { s: 4, c: 3 }, // Big ass
  "rola fina": { s: 4, c: 3 }, // Thin dick
  "saco grande": { s: 4, c: 3 }, // Big ball sack
  "saco peludo": { s: 4, c: 3 }, // Hairy ball sack
  "teta enorme": { s: 4, c: 3 }, // Enormous tit
  "tetona grande": { s: 4, c: 3 }, // Big titted large
  "tetuda enorme": { s: 4, c: 3 }, // Enormous titted
  "xota grande": { s: 4, c: 3 }, // Big pussy
  "xota larga": { s: 4, c: 3 }, // Wide pussy
  "xereca grande": { s: 4, c: 3 }, // Big pussy
  "xereca larga": { s: 4, c: 3 }, // Wide pussy

  // ========================================
  // === Extended Favela/Street Slang ===
  // ========================================
  "boca de fumo de merda": { s: 3, c: 5 }, // Shitty drug point
  "bonde do caralho de merda": { s: 3, c: 5 }, // Fucking shitty gang
  "caguetou de merda": { s: 3, c: 5 }, // Shitty snitched
  "cheirador de merda": { s: 3, c: 5 }, // Shitty coke snorter
  "cuzinheiro de merda": { s: 3, c: 5 }, // Shitty ass man
  "favelado de merda do caralho": { s: 3, c: 5 }, // Fucking shitty slum dweller
  "gambé fdp de merda": { s: 3, c: 5 }, // Shitty cop SOB
  "maloqueiro fdp de merda": { s: 3, c: 5 }, // Shitty thug SOB
  "merdinha do caralho": { s: 3, c: 5 }, // Fucking little shit
  "moleque de merda do caralho": { s: 3, c: 5 }, // Fucking shitty kid
  "noia do caralho de merda": { s: 3, c: 5 }, // Fucking shitty junkie
  "noiado de merda": { s: 3, c: 5 }, // Shitty high
  "playboy de merda do caralho": { s: 3, c: 5 }, // Fucking shitty rich kid
  "traficante de merda do caralho": { s: 3, c: 5 }, // Fucking shitty dealer
  "trombadinha de merda": { s: 3, c: 5 }, // Shitty pickpocket kid
  "vida loka de merda": { s: 3, c: 5 }, // Shitty crazy life
  "X9 do caralho de merda": { s: 3, c: 5 }, // Fucking shitty snitch
  "cria de merda": { s: 3, c: 5 }, // Shitty spawn
  "menor infrator fdp": { s: 3, c: 4 }, // Juvenile offender SOB
  "pivete arrombado": { s: 3, c: 4 }, // Broken kid
  "maconheiro fdp": { s: 3, c: 4 }, // Pothead SOB
  "crackeiro de merda": { s: 3, c: 5 }, // Shitty crack addict
  "noiado do caralho": { s: 3, c: 5 }, // Fucking junkie
  "cheirado de merda": { s: 3, c: 5 }, // Shitty snorted
  "brisado de merda": { s: 3, c: 5 }, // Shitty high
  "chapado fdp": { s: 3, c: 4 }, // Stoned SOB
  "doidão fdp": { s: 3, c: 4 }, // Crazy SOB
  "maluco beleza fdp": { s: 3, c: 4 }, // Crazy good SOB (ironic)

  // ========================================
  // === Extended Portunhol Border Slang ===
  // ========================================
  "hijo de puta de merda": { s: 3, c: 5 }, // Shitty SOB (border)
  "la concha de tu madre porra": { s: 4, c: 4 }, // Your mother's pussy cum (border)
  "boludo de merda do caralho": { s: 1, c: 4 }, // Fucking shitty fool (border)
  "pelotudo fdp de merda": { s: 3, c: 5 }, // Shitty big-balled SOB (border)
  "anda a la mierda do caralho": { s: 3, c: 5 }, // Go to fucking shit (border)
  "anda cagar do caralho": { s: 3, c: 5 }, // Go fucking shit (border)
  "conchudo de merda do caralho": { s: 3, c: 5 }, // Fucking shitty brazen (border)
  "pendejo do caralho de merda": { s: 1, c: 4 }, // Fucking shitty idiot (border)
  "boludo arrombado de merda": { s: 1, c: 4 }, // Shitty broken fool (border)
  "carajo de merda do caralho": { s: 4, c: 5 }, // Fucking shitty dick (border)
  "chinga tu madre do caralho": { s: 3, c: 5 }, // Fucking fuck your mother (border)
  "poronga de merda do caralho": { s: 4, c: 5 }, // Fucking shitty dick (border)
  "forro de merda do caralho": { s: 3, c: 5 }, // Fucking shitty condom (border)
  "pelotudo arrombado": { s: 3, c: 4 }, // Big-balled broken (border)
  "boludo cornudo": { s: 1, c: 4 }, // Foolish cuckold (border)
  "conchudo arrombado": { s: 3, c: 4 }, // Brazen broken (border)

  // ========================================
  // === Extended Pará/Northern Slang ===
  // ========================================
  "curumim safado de merda": { s: 3, c: 5 }, // Shitty dirty kid (Pará)
  "caboclo fdp de merda": { s: 3, c: 5 }, // Shitty mixed-race SOB (Pará)
  "porra egua de merda": { s: 3, c: 5 }, // Shitty damn mare (Pará)
  "égua da puta de merda": { s: 5, c: 5 }, // Shitty whore mare (Pará)
  "caralho bicho de merda": { s: 4, c: 5 }, // Shitty dick dude (Pará)
  "bicho fdp de merda": { s: 3, c: 5 }, // Shitty dude SOB (Pará)
  "maninho fdp do caralho": { s: 3, c: 5 }, // Fucking SOB buddy (Pará)
  "primo fdp do caralho": { s: 3, c: 5 }, // Fucking SOB cousin (Pará)
  "égua primo do caralho": { s: 3, c: 5 }, // Damn fucking cousin (Pará)

  // ========================================
  // === Extended Pernambuco Slang ===
  // ========================================
  "aff porra do caralho": { s: 4, c: 5 }, // Damn dick fuck (PE)
  "cabra da peste desgraçado de merda": { s: 3, c: 4 }, // Shitty stubborn bastard (PE)
  "eita porra do caralho de merda": { s: 3, c: 5 }, // Fucking shitty damn (PE)
  "besta porra de merda": { s: 1, c: 4 }, // Shitty stupid fuck (PE)
  "arrombado da peste de merda": { s: 3, c: 5 }, // Shitty stubborn broken (PE)
  "vixe porra do caralho": { s: 3, c: 5 }, // Holy shit (PE triple)
  "mainha fdp de merda": { s: 3, c: 5 }, // Shitty mom SOB (PE ironic)
  "quenga do caralho": { s: 5, c: 5 }, // Fucking prostitute (PE)

  // ========================================
  // === Extended Ceará Slang ===
  // ========================================
  "rapaz do caralho de merda": { s: 3, c: 5 }, // Fucking shitty boy (CE)
  "abestado do caralho de merda": { s: 1, c: 4 }, // Fucking shitty fool (CE)
  "cabra macho fdp de merda": { s: 3, c: 5 }, // Shitty tough SOB (CE)
  "mermão porra de merda": { s: 3, c: 5 }, // Shitty bro fuck (CE)
  "rapaz desgraçado de merda": { s: 3, c: 5 }, // Shitty wretched boy (CE)
  "abestalhado do caralho": { s: 1, c: 4 }, // Fucking dumbfounded (CE)
  "doido do caralho": { s: 3, c: 5 }, // Fucking crazy (CE)
  "macho fdp do caralho": { s: 3, c: 5 }, // Fucking SOB tough guy (CE)

  // ========================================
  // === Extended Goiás/Centro-Oeste ===
  // ========================================
  "uai do caralho de merda": { s: 3, c: 5 }, // Fucking shitty damn (GO)
  "trem fdp de merda": { s: 3, c: 5 }, // Shitty fucking thing (GO)
  "cê é trouxa demais de merda": { s: 1, c: 4 }, // You're too shitty foolish (GO)
  "porra sertanejo de merda": { s: 3, c: 5 }, // Shitty country fuck (GO)
  "trem goiano fdp": { s: 3, c: 4 }, // Goiás thing SOB (GO)
  "uai sô fdp": { s: 3, c: 4 }, // Damn buddy SOB (GO)
  "cê é um trem fdp": { s: 3, c: 4 }, // You're a thing SOB (GO)

  // ========================================
  // === Extended Internet Evasions ===
  // ========================================
  "krl mano de merda": { s: 4, c: 5 }, // Dick shitty bro
  "pfv fdp de merda": { s: 3, c: 5 }, // Please shitty SOB
  "tmj krl de merda": { s: 4, c: 5 }, // Together shitty dick
  "kkk fdp de merda": { s: 3, c: 5 }, // Laughing shitty SOB
  "slc krl de merda": { s: 4, c: 5 }, // Damn shitty dick
  "mds fdp de merda": { s: 3, c: 5 }, // My God shitty SOB
  "pqp krl de merda": { s: 4, c: 5 }, // Holy shit dick shitty
  "vsf krl de merda": { s: 4, c: 5 }, // Go fuck yourself shitty dick
  "vtnc krl de merda": { s: 4, c: 5 }, // Take it shitty dick
  "mn do krl de merda": { s: 3, c: 5 }, // Shitty bro fucker
  "mlk fdp krl de merda": { s: 4, c: 5 }, // Shitty kid SOB dick
  "glr fdp de merda": { s: 3, c: 5 }, // Shitty guys SOB
  "poh fdp krl": { s: 2, c: 5 }, // Porra fdp caralho compound
  "krllll": { s: 2, c: 5 }, // Caralho extended
  "fdpppp": { s: 2, c: 5 }, // FDP extended
  "vsffff": { s: 2, c: 5 }, // VSF extended
  "vtnccc": { s: 2, c: 5 }, // VTNC extended
  "pqpppp": { s: 2, c: 5 }, // PQP extended
  "mdsss": { s: 2, c: 5 }, // MDS extended
  "slccc": { s: 2, c: 5 }, // SLC extended
  "ksksks fdp": { s: 2, c: 5 }, // Laughing SOB
  "hauahuaha fdp": { s: 2, c: 5 }, // Laughing SOB variant
  "kkkk fdp krl": { s: 4, c: 5 }, // Laughing SOB dick
  "poha mano krl": { s: 2, c: 5 }, // Porra mano caralho (evasion compound)
  "krll poha vsf": { s: 2, c: 5 }, // Caralho porra VSF compound
  "mdsss poha krl": { s: 2, c: 5 }, // MDS porra caralho compound

  // ========================================
  // === Extended Racial/Ethnic Slurs ===
  // ========================================
  "macaco de merda": { s: 5, c: 5 }, // Shitty monkey (racial)
  "macaca de merda": { s: 5, c: 5 }, // Shitty monkey (female, racial)
  "negro de merda": { s: 5, c: 5 }, // Shitty black (racial)
  "negra de merda": { s: 5, c: 5 }, // Shitty black (female, racial)
  "preto de merda": { s: 5, c: 5 }, // Shitty black (racial variant)
  "preta de merda": { s: 5, c: 5 }, // Shitty black (female, racial)
  "crioulo de merda": { s: 5, c: 5 }, // Shitty creole (racial)
  "crioula de merda": { s: 5, c: 5 }, // Shitty creole (female, racial)
  "mulata de merda": { s: 5, c: 5 }, // Shitty mixed-race (female, racial)
  "caboclo de merda": { s: 5, c: 5 }, // Shitty mixed indigenous (racial)
  "cabocla de merda": { s: 5, c: 5 }, // Shitty mixed indigenous (female, racial)
  "índio de merda": { s: 5, c: 5 }, // Shitty indigenous (racial)
  "índia de merda": { s: 5, c: 5 }, // Shitty indigenous (female, racial)
  "japa de merda": { s: 5, c: 5 }, // Shitty Japanese (racial)
  "china de merda": { s: 5, c: 5 }, // Shitty Chinese (racial)
  "gringo de merda fdp": { s: 5, c: 5 }, // Shitty foreigner SOB
  "baiano de merda": { s: 5, c: 5 }, // Shitty Bahian (regional prejudice)
  "paraíba de merda": { s: 5, c: 5 }, // Shitty Paraíba (regional prejudice)
  "nordestino de merda": { s: 5, c: 5 }, // Shitty northeasterner (regional)
  "sulista de merda": { s: 5, c: 5 }, // Shitty southerner (regional)
  "paulista de merda": { s: 5, c: 5 }, // Shitty São Paulo person (regional)
  "carioca de merda": { s: 5, c: 5 }, // Shitty Rio person (regional)
  "mineiro de merda": { s: 5, c: 5 }, // Shitty Minas person (regional)
  "gaúcho de merda": { s: 5, c: 5 }, // Shitty Gaúcho (regional)

  // ========================================
  // === Extended Insult Nouns/Adjectives ===
  // ========================================
  "aberração": { s: 1, c: 4 }, // Aberration
  "abominação": { s: 1, c: 4 }, // Abomination
  "acéfalo": { s: 1, c: 4 }, // Brainless
  "aloprado": { s: 1, c: 4 }, // Crazy/reckless
  "aloprada": { s: 1, c: 4 }, // Crazy/reckless (female)
  "borra botas": { s: 1, c: 4 }, // Boot dirtier (PT useless)
  "cabeça de bagre": { s: 1, c: 4 }, // Catfish head (stupid)
  "cabeça de vento": { s: 1, c: 4 }, // Wind head (airheaded)
  "cabeçudo": { s: 1, c: 4 }, // Big-headed (stubborn)
  "cagão": { s: 1, c: 4 }, // Coward / big shitter
  "cagona": { s: 1, c: 4 }, // Coward (female)
  "cara de pau": { s: 1, c: 4 }, // Wooden face (shameless)
  "cara de mamão": { s: 1, c: 4 }, // Papaya face (dumb looking)
  "cérebro de amendoim": { s: 1, c: 4 }, // Peanut brain
  "charlatão": { s: 1, c: 4 }, // Charlatan
  "covarde de merda": { s: 1, c: 4 }, // Shitty coward
  "delinquente": { s: 1, c: 4 }, // Delinquent
  "desmiolado": { s: 1, c: 4 }, // Brainless
  "estúpida": { s: 1, c: 4 }, // Stupid (female)
  "feia de doer": { s: 1, c: 4 }, // Ugly enough to hurt
  "feio de doer": { s: 1, c: 4 }, // Ugly enough to hurt (male)
  "frouxo": { s: 1, c: 4 }, // Limp / coward
  "frouxona": { s: 1, c: 4 }, // Limp / coward (female)
  "gaguejo de merda": { s: 3, c: 5 }, // Shitty stutterer
  "gentinha": { s: 1, c: 4 }, // Little people (contemptuous)
  "gorducho": { s: 1, c: 4 }, // Chubby (insult)
  "gorducha": { s: 1, c: 4 }, // Chubby (female insult)
  "lazarenta": { s: 1, c: 4 }, // Leprous (female insult)
  "lerdo": { s: 1, c: 4 }, // Slow/dumb (male)
  "lerda": { s: 1, c: 4 }, // Slow/dumb (female)
  "língua de trapo": { s: 1, c: 4 }, // Rag tongue (gossiper)
  "maria vai com as outras": { s: 1, c: 4 }, // Mary goes with others (follower)
  "molenga": { s: 1, c: 4 }, // Limp/lazy
  "oca": { s: 1, c: 4 }, // Hollow (brainless female)
  "oco": { s: 1, c: 4 }, // Hollow (brainless male)
  "panaca": { s: 1, c: 4 }, // Fool (PT)
  "pateta": { s: 1, c: 4 }, // Silly
  "palerma": { s: 1, c: 4 }, // Fool (PT)
  "pestilento": { s: 1, c: 4 }, // Pestilent (male)
  "pestilenta": { s: 1, c: 4 }, // Pestilent (female)
  "relaxado": { s: 1, c: 4 }, // Sloppy (male)
  "relaxada": { s: 1, c: 4 }, // Sloppy (female)
  "repugnante": { s: 1, c: 4 }, // Repugnant
  "sebento": { s: 1, c: 4 }, // Greasy (male variant)
  "sebenta": { s: 1, c: 4 }, // Greasy (female variant)
  "sem noção": { s: 1, c: 4 }, // Clueless
  "sem sal": { s: 1, c: 4 }, // Saltless (bland/boring)
  "tapada": { s: 1, c: 4 }, // Stupid (female variant)
  "tramoia": { s: 1, c: 4 }, // Scheme (insult)
  "troglodita": { s: 1, c: 4 }, // Troglodyte
  "urso de merda": { s: 3, c: 5 }, // Shitty bear (clumsy)
  "vagal de merda": { s: 3, c: 5 }, // Shitty vagrant
  "zé ninguém": { s: 1, c: 4 }, // Joe nobody
  "zé povinho": { s: 1, c: 4 }, // Joe common people (conformist)

  // ========================================
  // === More Extended Compound Insults ===
  // ========================================
  "sua mãe é uma puta barata": { s: 5, c: 4 }, // Your mother is a cheap whore
  "sua mãe dá pra todo mundo": { s: 1, c: 4 }, // Your mother gives to everyone
  "sua irmã é a puta do bairro": { s: 5, c: 4 }, // Your sister is the neighborhood whore
  "seu pai é um corno manso de merda": { s: 1, c: 4 }, // Your father is a shitty tame cuckold
  "sua família inteira é de merda": { s: 3, c: 5 }, // Your entire family is shit
  "sua linhagem é toda de puta": { s: 5, c: 4 }, // Your entire lineage is whores
  "a puta que pariu tua raça": { s: 5, c: 4 }, // The whore that bore your race
  "tua mãe dá de graça": { s: 1, c: 4 }, // Your mother gives for free
  "tua irmã dá de graça": { s: 1, c: 4 }, // Your sister gives for free
  "tua mãe cobra um real": { s: 1, c: 4 }, // Your mother charges one real
  "tua mãe nem de graça presta": { s: 1, c: 4 }, // Your mother isn't worth it even for free
  "tua mãe chupa rola na esquina": { s: 4, c: 4 }, // Your mother sucks dick on the corner
  "tua mãe dá o cu na esquina": { s: 3, c: 4 }, // Your mother gives ass on the corner
  "tua irmã mama rola no beco": { s: 4, c: 4 }, // Your sister sucks dick in the alley
  "tua mãe é conhecida no puteiro": { s: 1, c: 4 }, // Your mother is known at the brothel
  "tua mãe é a atração do puteiro": { s: 1, c: 4 }, // Your mother is the brothel attraction
  "a cachorra da tua mãe": { s: 1, c: 4 }, // The bitch of your mother
  "a vaca da tua mãe": { s: 1, c: 4 }, // The cow of your mother
  "a piranha da tua irmã": { s: 1, c: 4 }, // The slut of your sister
  "o corno do teu pai": { s: 1, c: 4 }, // The cuckold of your father
  "o cafetão do teu pai": { s: 1, c: 4 }, // Your father the pimp
  "o viado do teu pai": { s: 1, c: 4 }, // The fag of your father
  "o broxa do teu pai": { s: 1, c: 4 }, // The impotent of your father
  "o pau mole do teu pai": { s: 1, c: 4 }, // Your father's limp dick
  "teu avô é um corno": { s: 1, c: 4 }, // Your grandfather is a cuckold
  "tua avó é uma puta": { s: 5, c: 4 }, // Your grandmother is a whore
  "teu tio é um viado": { s: 1, c: 4 }, // Your uncle is a fag
  "tua tia é uma piranha": { s: 1, c: 4 }, // Your aunt is a slut
  "a família toda é de puta e corno": { s: 5, c: 4 }, // The whole family is whores and cuckolds
  "nasceu da buceta da puta": { s: 5, c: 4 }, // Born from the whore's pussy
  "nasceu do cu da puta": { s: 5, c: 4 }, // Born from the whore's ass
  "nasceu da merda": { s: 3, c: 5 }, // Born from shit
  "fruto de aborto mal feito": { s: 1, c: 4 }, // Fruit of a botched abortion
  "sobra de aborto": { s: 1, c: 4 }, // Leftover of abortion
  "refugo de esperma": { s: 1, c: 4 }, // Sperm reject
  "acidente de camisinha furada": { s: 1, c: 4 }, // Broken condom accident
  "erro da natureza": { s: 1, c: 4 }, // Nature's mistake
  "desperdício de oxigênio": { s: 1, c: 4 }, // Oxygen waste
  "desperdício de esperma": { s: 1, c: 4 }, // Sperm waste
  "desperdício de vida": { s: 1, c: 4 }, // Life waste
  "estorvo da humanidade": { s: 1, c: 4 }, // Humanity's nuisance
  "esgoto humano": { s: 1, c: 4 }, // Human sewage
  "lixo da sociedade": { s: 1, c: 4 }, // Society's garbage
  "cancro da sociedade": { s: 1, c: 4 }, // Society's cancer
  "praga humana": { s: 1, c: 4 }, // Human plague
  "doença ambulante": { s: 1, c: 4 }, // Walking disease
  "chorume humano": { s: 1, c: 4 }, // Human slurry
  "escória da Terra": { s: 1, c: 4 }, // Earth's scum
  "resíduo tóxico humano": { s: 1, c: 4 }, // Human toxic waste
  "cocô de cachorro": { s: 1, c: 4 }, // Dog poop
  "bosta de cavalo": { s: 1, c: 4 }, // Horse crap
  "bosta de vaca": { s: 1, c: 4 }, // Cow crap
  "bosta de porco": { s: 1, c: 4 }, // Pig crap
  "cu de galinha": { s: 3, c: 4 }, // Chicken's ass
  "cu de cachorro": { s: 3, c: 4 }, // Dog's ass
  "cu de jumento": { s: 3, c: 4 }, // Jackass's ass
  "cu de cobra": { s: 3, c: 4 }, // Snake's ass
  "rabo de burro": { s: 3, c: 4 }, // Donkey's ass
  "focinho de porco": { s: 1, c: 4 }, // Pig's snout
  "cara de macaco": { s: 1, c: 4 }, // Monkey face
  "cara de bunda": { s: 3, c: 4 }, // Butt face
  "cara de buceta usada": { s: 4, c: 4 }, // Used pussy face
  "cara de rola murcha": { s: 4, c: 4 }, // Wilted dick face
  "cara de cu suado": { s: 3, c: 4 }, // Sweaty ass face
  "cara de bosta seca": { s: 1, c: 4 }, // Dry crap face
  "cheiro de cu": { s: 3, c: 4 }, // Ass smell
  "cheiro de buceta podre": { s: 4, c: 4 }, // Rotten pussy smell
  "cheiro de merda": { s: 3, c: 5 }, // Shit smell
  "fede a cu": { s: 3, c: 4 }, // Smells like ass
  "fede a merda": { s: 3, c: 5 }, // Smells like shit
  "fede a porra": { s: 1, c: 4 }, // Smells like cum

  // ========================================
  // === More Portuguese from Portugal ===
  // ========================================
  "atirar à parede": { s: 3, c: 4 }, // Throw against wall (PT vulgar)
  "badalhoca fedorenta": { s: 3, c: 4 }, // Stinky filthy woman (PT)
  "brochar todo": { s: 3, c: 4 }, // Go completely limp (PT)
  "cabra do caralho": { s: 3, c: 4 }, // Fucking goat/bastard (PT)
  "cagalhão": { s: 3, c: 4 }, // Big turd (PT)
  "cagalhoto": { s: 3, c: 4 }, // Little turd (PT)
  "chular": { s: 3, c: 4 }, // To pimp (PT)
  "coiro velho": { s: 1, c: 4 }, // Old hide (PT ugly person)
  "cona podre": { s: 5, c: 5 }, // Rotten cunt (PT)
  "cornudo velho": { s: 3, c: 4 }, // Old cuckold (PT)
  "cu podre": { s: 3, c: 4 }, // Rotten ass (PT)
  "esporrada no focinho": { s: 3, c: 4 }, // Ejaculation on face (PT)
  "foda forte": { s: 3, c: 5 }, // Strong fuck (PT)
  "foder bem": { s: 3, c: 5 }, // Fuck well (PT)
  "foder com força": { s: 3, c: 5 }, // Fuck with force (PT)
  "granda cabrão de merda": { s: 3, c: 4 }, // Big shitty bastard (PT)
  "granda cona de merda": { s: 5, c: 5 }, // Big shitty cunt (PT)
  "granda puta de merda": { s: 5, c: 5 }, // Big shitty whore (PT)
  "ir para o cu que te foda": { s: 3, c: 5 }, // Go to the ass that fucks you (PT)
  "levar no cu com força": { s: 3, c: 4 }, // Take it in the ass with force (PT)
  "mama na piça toda": { s: 4, c: 4 }, // Suck the whole dick (PT)
  "manda-te foder todo": { s: 3, c: 5 }, // Go get completely fucked (PT)
  "paneleiro nojento": { s: 3, c: 4 }, // Disgusting faggot (PT)
  "piça podre": { s: 4, c: 4 }, // Rotten dick (PT)
  "piça de merda velha": { s: 4, c: 5 }, // Old shitty dick (PT)
  "rata nojenta": { s: 4, c: 4 }, // Disgusting pussy (PT)
  "vai para o caralho todo": { s: 4, c: 4 }, // Go completely to the dick (PT)
  "vai para o cu de quem te ouve": { s: 3, c: 4 }, // Go to the ass of who listens (PT)
  "vai para o raio": { s: 3, c: 4 }, // Go to the lightning (PT curse)

  // ========================================
  // === More Extended Angola/Mozambique ===
  // ========================================
  "cabrão da terra": { s: 3, c: 4 }, // Bastard of the land (Angola)
  "filho de cão": { s: 3, c: 4 }, // Son of a dog (Angola)
  "filha de cão": { s: 3, c: 4 }, // Daughter of a dog (Angola)
  "grande cabrão da terra": { s: 3, c: 4 }, // Big bastard of the land (Angola)
  "ir para a terra": { s: 3, c: 4 }, // Go to the ground (Angola dismissal)
  "meu irmão cabrão": { s: 3, c: 4 }, // My brother bastard (Mozambique)
  "pila no rabo": { s: 4, c: 4 }, // Dick in the ass (Mozambique)
  "vai mamar na cona": { s: 5, c: 5 }, // Go suck the cunt (Mozambique)
  "vai mamar na pila toda": { s: 4, c: 4 }, // Go suck the whole dick (Mozambique)
  "grande puta angolana": { s: 5, c: 4 }, // Big Angolan whore
  "grande cabrão angolano": { s: 3, c: 4 }, // Big Angolan bastard
  "grande puta moçambicana": { s: 5, c: 4 }, // Big Mozambican whore
  "grande cabrão moçambicano": { s: 3, c: 4 }, // Big Mozambican bastard

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "kara1ho": { s: 4, c: 5 }, // Dick evasion
  "bu$eta": { s: 4, c: 5 }, // Pussy evasion
  "f0d@-se": { s: 3, c: 5 }, // Fuck it evasion
  "p0rr@": { s: 3, c: 5 }, // Cum evasion
  "m3rd@": { s: 3, c: 5 }, // Shit evasion
  "pu+a": { s: 4, c: 5 }, // Whore evasion
  "c*u": { s: 3, c: 5 }, // Ass evasion
  "p*u": { s: 4, c: 5 }, // Dick evasion
  "r*la": { s: 4, c: 5 }, // Dick evasion
  "p*ca": { s: 4, c: 5 }, // Dick evasion
  "b*sta": { s: 3, c: 5 }, // Crap evasion
  "f*der": { s: 3, c: 5 }, // To fuck evasion
  "tr*nsar": { s: 3, c: 5 }, // To have sex evasion
  "v*ado": { s: 3, c: 5 }, // Fag evasion
  "b*cha": { s: 3, c: 5 }, // Fag evasion
  "s@fado": { s: 3, c: 5 }, // Pervert evasion
  "s@fada": { s: 3, c: 5 }, // Pervert evasion (female)
  "puut@": { s: 5, c: 5 }, // Whore evasion
  "puuuta": { s: 3, c: 5 }, // Whore evasion (extended)
  "carrralho": { s: 4, c: 5 }, // Dick evasion (extended)
  "foooda-se": { s: 3, c: 5 }, // Fuck it evasion (extended)
  "meeerda": { s: 3, c: 5 }, // Shit evasion (extended)
  "pooorrrra": { s: 3, c: 5 }, // Cum evasion (extended)
  "cuzzão": { s: 3, c: 5 }, // Asshole evasion
  "v i a d o": { s: 3, c: 5 }, // Fag evasion (spaced)
  "p u t a": { s: 3, c: 5 }, // Whore evasion (spaced)
  "c a r a l h o": { s: 4, c: 5 }, // Dick evasion (spaced)
  "m e r d a": { s: 3, c: 5 }, // Shit evasion (spaced)
  "b u c e t a": { s: 4, c: 5 }, // Pussy evasion (spaced)
  "f o d a": { s: 3, c: 5 }, // Fuck evasion (spaced)

  // ========================================
  // === More Extended Internet Slang ===
  // ========================================
  "pqp mds krl": { s: 2, c: 3 }, // Triple internet expletive
  "vsf vtnc krl": { s: 2, c: 3 }, // Triple internet expletive
  "fdp fdp fdp": { s: 2, c: 3 }, // Repeated SOB
  "krl krl krl": { s: 4, c: 3 }, // Repeated dick
  "pqp pqp pqp": { s: 3, c: 5 }, // Repeated holy shit
  "vsf vsf vsf": { s: 3, c: 5 }, // Repeated go fuck yourself
  "mrd mrd mrd": { s: 3, c: 5 }, // Repeated shit
  "tmj na buceta": { s: 4, c: 3 }, // Together in the pussy
  "tmj no cu": { s: 3, c: 3 }, // Together in the ass
  "chupa essa krl": { s: 4, c: 3 }, // Suck this dick (internet)
  "mama essa krl": { s: 4, c: 3 }, // Suck this dick (internet variant)
  "senta nessa krl": { s: 4, c: 3 }, // Sit on this dick (internet)
  "toma essa krl": { s: 4, c: 3 }, // Take this dick (internet)
  "come essa krl": { s: 4, c: 3 }, // Eat this dick (internet)
  "enfia essa krl": { s: 4, c: 3 }, // Shove this dick (internet)
  "mete essa krl": { s: 4, c: 3 }, // Insert this dick (internet)
  "leva essa krl": { s: 4, c: 3 }, // Take this dick (internet)
  "krl na sua boca": { s: 4, c: 3 }, // Dick in your mouth (internet)
  "krl na sua cara": { s: 4, c: 3 }, // Dick in your face (internet)
  "krl no seu cu": { s: 4, c: 3 }, // Dick in your ass (internet)
  "poha no seu cu": { s: 3, c: 3 }, // Cum in your ass (internet)
  "poha na sua boca": { s: 2, c: 3 }, // Cum in your mouth (internet)
  "poha na sua cara": { s: 2, c: 3 }, // Cum in your face (internet)

  // ========================================
  // === More Extended Threats ===
  // ========================================
  "vou te arrebentar": { s: 5, c: 5 }, // I'll smash you
  "vou te arrebentar o cu": { s: 5, c: 5 }, // I'll smash your ass
  "vou te arrebentar a cara": { s: 5, c: 5 }, // I'll smash your face
  "vou te matar fdp": { s: 5, c: 5 }, // I'll kill you SOB
  "vou te meter porrada": { s: 5, c: 5 }, // I'll beat you up
  "vou te meter um soco": { s: 5, c: 5 }, // I'll punch you
  "vou te encher de porrada": { s: 5, c: 5 }, // I'll fill you with beatings
  "vou te dar uma surra": { s: 5, c: 5 }, // I'll give you a beating
  "vou quebrar tua cara": { s: 5, c: 5 }, // I'll break your face
  "vou quebrar teus dentes": { s: 5, c: 5 }, // I'll break your teeth
  "vou quebrar teus ossos": { s: 5, c: 5 }, // I'll break your bones
  "vou te jogar no lixo": { s: 5, c: 5 }, // I'll throw you in garbage
  "vou te jogar no esgoto": { s: 5, c: 5 }, // I'll throw you in sewer
  "vou te enterrar vivo": { s: 5, c: 5 }, // I'll bury you alive
  "vou te esfolar": { s: 5, c: 5 }, // I'll skin you
  "vou te despedaçar": { s: 5, c: 5 }, // I'll tear you apart
  "vou foder tua mãe": { s: 5, c: 5 }, // I'll fuck your mother
  "vou foder tua irmã": { s: 5, c: 5 }, // I'll fuck your sister
  "vou foder tua mulher": { s: 5, c: 5 }, // I'll fuck your wife
  "vou foder tua família toda": { s: 5, c: 5 }, // I'll fuck your whole family
  "vou acabar com tua raça": { s: 5, c: 5 }, // I'll end your lineage
  "vou acabar contigo fdp": { s: 5, c: 5 }, // I'll end you SOB
  "vai apanhar até morrer": { s: 5, c: 5 }, // You'll be beaten until death
  "vai sofrer fdp": { s: 5, c: 5 }, // You'll suffer SOB
  "vou te fazer sofrer": { s: 5, c: 5 }, // I'll make you suffer

  // ========================================
  // === Extended Brazilian Sexual Terms ===
  // ========================================
  "vou chupar a buceta da tua mãe": { s: 4, c: 4 }, // I'll eat your mother's pussy
  "vou chupar a buceta da tua irmã": { s: 4, c: 4 }, // I'll eat your sister's pussy
  "vou chupar o cu da tua mãe": { s: 4, c: 4 }, // I'll eat your mother's ass
  "vou chupar o cu da tua irmã": { s: 4, c: 4 }, // I'll eat your sister's ass
  "vou apertar os peitos da tua mãe": { s: 4, c: 4 }, // I'll squeeze your mother's tits
  "vou apertar os peitos da tua irmã": { s: 4, c: 4 }, // I'll squeeze your sister's tits
  "vou foder tua mãe de quatro": { s: 4, c: 5 }, // I'll fuck your mother doggy style
  "vou foder tua irmã de quatro": { s: 4, c: 5 }, // I'll fuck your sister doggy style
  "vou enfiar a mão na buceta da tua mãe": { s: 4, c: 4 }, // I'll fist your mother's pussy
  "vou enfiar o pé na buceta da tua mãe": { s: 4, c: 4 }, // I'll put foot in your mother's pussy
  "vou cortar teu pau": { s: 4, c: 4 }, // I'll cut your dick
  "vou quebrar teu pau": { s: 4, c: 4 }, // I'll break your dick
  "vou esmagar teus ovos": { s: 4, c: 4 }, // I'll crush your balls
  "vou cortar teus ovos": { s: 4, c: 4 }, // I'll cut your balls
  "vou rasgar a buceta da tua mãe": { s: 4, c: 4 }, // I'll tear your mother's pussy
  "vou rasgar a buceta da tua irmã": { s: 4, c: 4 }, // I'll tear your sister's pussy
  "vou rasgar o cu da tua mãe": { s: 4, c: 4 }, // I'll tear your mother's ass
  "vou rasgar o cu da tua irmã": { s: 4, c: 4 }, // I'll tear your sister's ass
  "filho de puta nojento": { s: 4, c: 4 }, // Disgusting SOB
  "filha de puta nojenta": { s: 4, c: 4 }, // Disgusting SOB (female)
  "filha de rapariga": { s: 4, c: 4 }, // Daughter of a slut
  "tua mãe é puta de rua": { s: 5, c: 4 }, // Your mother is a street whore
  "tua irmã é puta de rua": { s: 5, c: 4 }, // Your sister is a street whore
  "tua mãe é piranha de esquina": { s: 5, c: 4 }, // Your mother is a corner whore
  "tua irmã é piranha de esquina": { s: 5, c: 4 }, // Your sister is a corner whore
  "tua mãe é vadia de bairro": { s: 4, c: 4 }, // Your mother is a neighborhood slut
  "tua mãe é putona do bairro": { s: 5, c: 4 }, // Your mother is the neighborhood's big whore
  "tua mãe é galinha do bairro": { s: 4, c: 4 }, // Your mother is the neighborhood's slut

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "caralho do teu pai": { s: 1, c: 4 }, // Your father's dick (Portugal)
  "cona da tua irmã": { s: 4, c: 4 }, // Your sister's pussy (Portugal)
  "foda-se ó caralho": { s: 4, c: 5 }, // Fuck off dick (Portugal)
  "vai para o caralho que te foda": { s: 4, c: 5 }, // Go to the dick that fucks you (Portugal)
  "paneleiro de merda": { s: 3, c: 5 }, // Faggot of shit (Portugal)
  "maricas de merda": { s: 3, c: 5 }, // Faggot of shit (Portugal alt)
  "chupa-me o caralho": { s: 4, c: 4 }, // Suck my dick (Portugal)
  "chupa-me os colhões": { s: 4, c: 4 }, // Suck my balls (Portugal)
  "lambe-me o cu": { s: 3, c: 4 }, // Lick my ass (Portugal)
  "lambe-me a cona": { s: 4, c: 4 }, // Lick my pussy (Portugal)
  "fode-te a ti e à tua mãe": { s: 3, c: 5 }, // Fuck you and your mother (Portugal)
  "meto-te o caralho na cona": { s: 4, c: 4 }, // I'll put my dick in your pussy (Portugal)
  "meto-te o caralho no cu": { s: 4, c: 4 }, // I'll put my dick in your ass (Portugal)
  "sua puta rasca": { s: 5, c: 4 }, // You cheap whore (Portugal)
  "sua cabra de merda": { s: 5, c: 5 }, // You shit goat/whore (Portugal)
  "sua vaca de merda": { s: 5, c: 5 }, // You shit cow/whore (Portugal)
  "és uma cona de sabão": { s: 1, c: 4 }, // You're a soap pussy/coward (Portugal)
  "és um otário do caralho": { s: 1, c: 4 }, // You're a dick sucker/fool (Portugal)
  "és um merda do caralho": { s: 4, c: 5 }, // You're a shit of dick (Portugal)

  // ========================================
  // === Extended Angola/Mozambique Portuguese ===
  // ========================================
  "kamba de merda": { s: 3, c: 5 }, // Friend of shit (Angola)
  "kiamba sujo": { s: 3, c: 4 }, // Dirty bastard (Angola)
  "vai pro kamba da tua mãe": { s: 3, c: 4 }, // Go to your mother's friend (Angola)
  "cabrunco sujo": { s: 3, c: 4 }, // Dirty bastard (Angola)
  "ximbicar a tua mãe": { s: 3, c: 5 }, // Fuck your mother (Angola)
  "kuia da tua mãe": { s: 4, c: 4 }, // Your mother's pussy (Angola)
  "baza daqui seu merda": { s: 3, c: 5 }, // Get out you shit (Angola)
  "gasosa da tua mãe": { s: 4, c: 4 }, // Your mother's pussy (Angola slang)
  "cagão de merda": { s: 1, c: 4 }, // Coward of shit (Mozambique)
  "pangar de merda": { s: 3, c: 5 }, // Asshole of shit (Mozambique)
  "bazuca da tua mãe": { s: 4, c: 4 }, // Your mother's big pussy (Mozambique)
  "xingondo de merda": { s: 1, c: 4 }, // Ugly of shit (Mozambique)
  "machimbombo na tua mãe": { s: 3, c: 4 }, // Bus in your mother (Mozambique insult)
  "sua tchuna nojenta": { s: 5, c: 4 }, // You disgusting whore (Mozambique)
  "vai tomar na tchuna": { s: 4, c: 4 }, // Go take it in the pussy (Mozambique)

  // ========================================
  // === Extended NE Brazil Regional ===
  // ========================================
  "rapariga desgraçada": { s: 3, c: 4 }, // Disgraced slut (NE Brazil)
  "rapariga safada": { s: 3, c: 4 }, // Dirty slut (NE Brazil)
  "rapariga vagabunda": { s: 3, c: 4 }, // Bum slut (NE Brazil)
  "cabra filho da puta": { s: 3, c: 4 }, // Dude son of a bitch (NE Brazil)
  "oxe seu arrombado": { s: 3, c: 4 }, // Damn you broken ass (NE Brazil)
  "oxe sua rapariga": { s: 3, c: 4 }, // Damn you slut (NE Brazil)
  "oxe seu viado": { s: 3, c: 4 }, // Damn you faggot (NE Brazil)
  "visse seu arrombado": { s: 3, c: 4 }, // See you broken ass (PE Brazil)
  "visse seu fdp": { s: 3, c: 4 }, // See you SOB (PE Brazil)
  "mainha é puta": { s: 5, c: 4 }, // Your mommy is whore (NE Brazil)
  "painho é corno": { s: 3, c: 4 }, // Your daddy is cuckold (NE Brazil)
  "aff seu merda": { s: 3, c: 5 }, // Ugh you shit (NE Brazil)
  "eita porra seu fdp": { s: 3, c: 4 }, // Damn your SOB (NE Brazil)

  // ========================================
  // === Extended South Brazil Regional ===
  // ========================================
  "tchê seu merda": { s: 3, c: 5 }, // Hey you shit (South Brazil)
  "bah seu arrombado": { s: 3, c: 4 }, // Damn you broken ass (South Brazil)
  "bah teu cu": { s: 3, c: 4 }, // Damn your ass (South Brazil)
  "tri vagabundo": { s: 3, c: 4 }, // Very bum (South Brazil)
  "tri puta": { s: 5, c: 4 }, // Very whore (South Brazil)
  "guri fdp": { s: 3, c: 4 }, // Boy SOB (South Brazil)
  "guria vadia": { s: 3, c: 4 }, // Girl slut (South Brazil)
  "guri arrombado": { s: 3, c: 4 }, // Boy broken ass (South Brazil)
  "piá fdp": { s: 3, c: 4 }, // Kid SOB (South Brazil)
  "piá arrombado": { s: 3, c: 4 }, // Kid broken ass (South Brazil)
  "bagual fdp": { s: 3, c: 4 }, // Horse SOB (South Brazil)
  "bagual arrombado": { s: 3, c: 4 }, // Horse broken ass (South Brazil)
  "cusco fdp": { s: 3, c: 4 }, // Dog SOB (South Brazil)

  // ========================================
  // === Extended SP/Rio Slang ===
  // ========================================
  "mano seu fdp": { s: 3, c: 4 }, // Dude you SOB (SP)
  "mano seu arrombado": { s: 3, c: 4 }, // Dude you broken ass (SP)
  "maluco fdp": { s: 3, c: 4 }, // Crazy SOB (SP)
  "maluco arrombado": { s: 3, c: 4 }, // Crazy broken ass (SP)
  "irmão fdp": { s: 3, c: 4 }, // Brother SOB (Rio)
  "mermão fdp": { s: 3, c: 4 }, // Brother SOB (Rio slang)
  "menor fdp": { s: 3, c: 4 }, // Kid SOB (Rio)
  "menor arrombado": { s: 3, c: 4 }, // Kid broken ass (Rio)
  "cria fdp": { s: 3, c: 4 }, // Kid SOB (Rio favela)
  "cria arrombado": { s: 3, c: 4 }, // Kid broken ass (Rio favela)
  "playboy fdp": { s: 3, c: 4 }, // Rich boy SOB (Rio)
  "playboy arrombado": { s: 3, c: 4 }, // Rich boy broken ass (Rio)
  "noia fdp": { s: 3, c: 4 }, // Druggie SOB (SP)

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bucetona grande": { s: 4, c: 3 }, // Big pussy
  "pintinho pequeno": { s: 4, c: 3 }, // Small dick (diminutive)
  "rabo enorme": { s: 4, c: 3 }, // Huge ass
  "ovo pequeno": { s: 4, c: 3 }, // Small balls
  "peito caído": { s: 4, c: 3 }, // Saggy tits
  "pau murcho": { s: 4, c: 3 }, // Limp dick
  "pau fedido": { s: 4, c: 3 }, // Smelly dick
  "saco murcho": { s: 4, c: 3 }, // Saggy balls
  "boceta peluda": { s: 4, c: 3 }, // Hairy pussy
  "pau peludo": { s: 4, c: 3 }, // Hairy dick
  "teta murcha": { s: 4, c: 3 }, // Saggy tit
  "boceta podre": { s: 4, c: 3 }, // Rotten pussy
  "pau podre": { s: 4, c: 3 }, // Rotten dick

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "teu pau não levanta": { s: 4, c: 4 }, // Your dick can't get up
  "teu pau não funciona": { s: 4, c: 4 }, // Your dick doesn't work
  "teu pau morreu": { s: 5, c: 5 }, // Your dick died
  "tu é impotente": { s: 1, c: 4 }, // You are impotent
  "tu é viado": { s: 1, c: 4 }, // You are a faggot
  "tu é bicha": { s: 1, c: 4 }, // You are a faggot (alt)
  "tu é traveco": { s: 1, c: 4 }, // You are a tranny
  "teu pau é um palito": { s: 4, c: 4 }, // Your dick is a toothpick
  "teu pau é um fósforo": { s: 4, c: 4 }, // Your dick is a matchstick
  "teu pau é uma minhoca": { s: 4, c: 4 }, // Your dick is a worm
  "teu pau é um dedinho": { s: 4, c: 4 }, // Your dick is a little finger
  "corno assumido": { s: 1, c: 4 }, // Admitted cuckold
  "corno feliz": { s: 1, c: 4 }, // Happy cuckold
  "chifrudo nojento": { s: 1, c: 4 }, // Disgusting cuckold
  "galhudo de merda": { s: 3, c: 5 }, // Antlered of shit (cuckold)
  "manso de merda": { s: 3, c: 5 }, // Tame of shit (cuckold)
  "frouxo de merda": { s: 3, c: 5 }, // Limp of shit

  // ========================================
  // === Extended Scatological (Brazilian) ===
  // ========================================
  "vou cagar na tua cara": { s: 3, c: 5 }, // I'll shit on your face
  "vou mijar na tua cara": { s: 3, c: 4 }, // I'll piss on your face
  "vou cagar na tua comida": { s: 3, c: 5 }, // I'll shit in your food
  "vou mijar na tua comida": { s: 3, c: 4 }, // I'll piss in your food
  "vou cagar na cara da tua mãe": { s: 3, c: 5 }, // I'll shit on your mother's face
  "vou cagar na cara da tua irmã": { s: 3, c: 5 }, // I'll shit on your sister's face
  "come merda": { s: 3, c: 5 }, // Eat shit
  "bebe mijo": { s: 3, c: 4 }, // Drink piss
  "cheira peido": { s: 3, c: 4 }, // Smell fart
  "cara de bosta": { s: 3, c: 5 }, // Cow shit face
  "cara de cocô": { s: 3, c: 4 }, // Poop face
  "boca de merda": { s: 3, c: 5 }, // Shit mouth
  "boca de bosta": { s: 3, c: 5 }, // Cow shit mouth
  "peida na cara": { s: 3, c: 4 }, // Fart in the face
  "cagão nojento": { s: 3, c: 5 }, // Disgusting shitter
  "mijão nojento": { s: 3, c: 4 }, // Disgusting pisser
  "bosta ambulante": { s: 3, c: 5 }, // Walking shit
  "merda ambulante": { s: 3, c: 5 }, // Walking shit (alt)

  // ========================================
  // === Extended Abuse Phrases (Brazilian) ===
  // ========================================
  "tua vida não vale nada": { s: 3, c: 4 }, // Your life is worth nothing
  "melhor se tu não tivesse nascido": { s: 3, c: 4 }, // Better if you weren't born
  "tua mãe não sabe quem é teu pai": { s: 1, c: 4 }, // Your mother doesn't know your father
  "ninguém sabe quem é teu pai": { s: 1, c: 4 }, // Nobody knows who your father is
  "tua mãe te jogou no lixo": { s: 3, c: 4 }, // Your mother threw you in garbage
  "ninguém te quer": { s: 3, c: 4 }, // Nobody wants you
  "as pessoas cospem quando te veem": { s: 3, c: 4 }, // People spit when they see you
  "as pessoas riem do teu nome": { s: 3, c: 4 }, // People laugh at your name
  "tua família toda é puta": { s: 5, c: 4 }, // Your whole family is whore
  "tua família toda é fdp": { s: 3, c: 4 }, // Your whole family is SOB
  "tua linhagem toda é vagabunda": { s: 3, c: 4 }, // Your whole lineage is slut
  "tu é um lixo de pessoa": { s: 3, c: 4 }, // You are a garbage person
  "tu é um verme nojento": { s: 3, c: 4 }, // You are a disgusting worm
  "tu é um cocô ambulante": { s: 3, c: 4 }, // You are a walking poop
  "tu devia ter sido abortado": { s: 3, c: 4 }, // You should have been aborted

  // ========================================
  // === Extended Internet/Gaming Brazilian ===
  // ========================================
  "noob fdp do caralho": { s: 4, c: 3 }, // Noob SOB of dick
  "noob arrombado do caralho": { s: 4, c: 3 }, // Noob broken ass of dick
  "camper fdp do caralho": { s: 4, c: 3 }, // Camper SOB of dick
  "hacker fdp do caralho": { s: 4, c: 3 }, // Hacker SOB of dick
  "feeder fdp do caralho": { s: 4, c: 3 }, // Feeder SOB of dick
  "troll fdp do caralho": { s: 4, c: 3 }, // Troll SOB of dick
  "toxic fdp do caralho": { s: 4, c: 3 }, // Toxic SOB of dick
  "afk fdp do caralho": { s: 4, c: 3 }, // AFK SOB of dick
  "gg fdp chupa": { s: 2, c: 3 }, // GG SOB suck
  "ez fdp chupa": { s: 2, c: 3 }, // EZ SOB suck
  "gg chupa meu pau": { s: 4, c: 3 }, // GG suck my dick
  "ez chupa meu pau": { s: 4, c: 3 }, // EZ suck my dick
  "sai do jogo fdp": { s: 2, c: 3 }, // Leave game SOB
  "deleta fdp": { s: 2, c: 3 }, // Delete SOB
  "lag fdp do caralho": { s: 4, c: 3 }, // Lag SOB of dick
  "ping fdp do caralho": { s: 4, c: 3 }, // Ping SOB of dick
  "server fdp do caralho": { s: 4, c: 3 }, // Server SOB of dick
  "report fdp": { s: 2, c: 3 }, // Report SOB
  "stream sniper fdp": { s: 2, c: 3 }, // Stream sniper SOB

  // ========================================
  // === Extended Racial/Ethnic Slurs (Brazilian) ===
  // ========================================
  "macaco nojento": { s: 5, c: 4 }, // Disgusting monkey (racist)
  "macaco fdp": { s: 5, c: 4 }, // Monkey SOB (racist)
  "preto nojento": { s: 5, c: 4 }, // Disgusting black (racist)
  "preto fdp": { s: 5, c: 4 }, // Black SOB (racist)
  "crioulo nojento": { s: 5, c: 4 }, // Disgusting black (racist alt)
  "crioulo fdp": { s: 5, c: 4 }, // Black SOB (racist alt)
  "neguinho nojento": { s: 5, c: 4 }, // Disgusting little black (racist)
  "baiano burro": { s: 1, c: 4 }, // Stupid Bahian (regionalist)
  "nordestino burro": { s: 1, c: 4 }, // Stupid Northeasterner (regionalist)
  "paraíba burro": { s: 1, c: 4 }, // Stupid Paraíba person (regionalist)
  "índio burro": { s: 1, c: 4 }, // Stupid Indian (racist)
  "japa fdp": { s: 5, c: 4 }, // Japanese SOB (racist)
  "china fdp": { s: 5, c: 4 }, // Chinese SOB (racist)
  "boludo fdp": { s: 5, c: 4 }, // Argentine SOB (xenophobic)
  "gringo fdp": { s: 5, c: 4 }, // Foreigner SOB (xenophobic)

  // ========================================
  // === Extended Evasion Spellings (Brazilian) ===
  // ========================================
  "f1lho d4 put4": { s: 3, c: 5 }, // Son of a bitch (evasion)
  "v4d14": { s: 3, c: 5 }, // Slut (evasion)
  "put4 qu3 p4r1u": { s: 3, c: 5 }, // Bitch that gave birth (evasion)
  "4rr0mb4d0": { s: 3, c: 5 }, // Broken ass (evasion)
  "c4r4lh0": { s: 4, c: 5 }, // Dick (evasion)
  "p4u n0 c*": { s: 4, c: 5 }, // Dick in ass (evasion)
  "f0d4-s3": { s: 3, c: 5 }, // Fuck off (evasion)
  "v14d0": { s: 3, c: 5 }, // Faggot (evasion)
  "b1ch4": { s: 3, c: 5 }, // Faggot (evasion alt)
  "p1r4nh4": { s: 5, c: 5 }, // Whore (evasion)
  "v4g4bund4": { s: 3, c: 5 }, // Slut (evasion)
  "b0st4": { s: 3, c: 5 }, // Cow shit (evasion)
  "buc€ta": { s: 4, c: 5 }, // Pussy (evasion)
  "f0da-se": { s: 3, c: 5 }, // Fuck off (evasion)
  "p@u no cu": { s: 4, c: 5 }, // Dick in ass (evasion)
  "arr0mbad0": { s: 3, c: 5 }, // Broken ass (evasion)

  // ========================================
  // === Extended Animal Insults (Brazilian) ===
  // ========================================
  "cachorro fdp": { s: 1, c: 4 }, // Dog SOB
  "porco nojento": { s: 1, c: 4 }, // Disgusting pig
  "jumento fdp": { s: 1, c: 4 }, // Donkey SOB
  "cavalo fdp": { s: 1, c: 4 }, // Horse SOB
  "cobra nojenta": { s: 1, c: 4 }, // Disgusting snake
  "rato nojento": { s: 1, c: 4 }, // Disgusting rat
  "barata nojenta": { s: 4, c: 4 }, // Disgusting cockroach
  "parasita nojento": { s: 1, c: 4 }, // Disgusting parasite
  "cadela fdp": { s: 1, c: 4 }, // Bitch SOB
  "porca nojenta": { s: 1, c: 4 }, // Disgusting sow
  "jumenta fdp": { s: 1, c: 4 }, // She-donkey SOB
  "égua fdp": { s: 1, c: 4 }, // Mare SOB
  "galinha fdp": { s: 1, c: 4 }, // Chicken/slut SOB
};

export default brazilianBadWords;
