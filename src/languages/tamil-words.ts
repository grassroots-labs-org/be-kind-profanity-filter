// src/languages/tamil-words.ts

/**
 * Tamil profanity words list
 * Contains common profanities in both Tamil script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Tamil
 */
const tamilBadWords: Record<string, { s: number; c: number }> = {
  // ========================================
  // === Tamil Script Profanities ===
  // ========================================
  "ஓத்தா": { s: 3, c: 4 }, // Otha (f**k off)
  "தேவடியா": { s: 5, c: 4 }, // Thevidiya (prostitute)
  "கூதி": { s: 3, c: 4 }, // Koothi (female genitalia)
  "புண்ட": { s: 3, c: 4 }, // Punda (female genitalia)
  "புண்டை": { s: 3, c: 4 }, // Pundai (female genitalia)
  "பொட்டை": { s: 3, c: 4 }, // Pottai (eunuch/transgender slur)
  "மயிரு": { s: 3, c: 4 }, // Mayiru (pubic hair)
  "சுன்னி": { s: 4, c: 4 }, // Sunni (penis)
  "தாயோளி": { s: 3, c: 4 }, // Thayoli (motherf**ker)
  "நாய்": { s: 3, c: 4 }, // Naai (dog)
  "புள்ள": { s: 3, c: 4 }, // Pulla (worm/kid, used as insult)
  "முட்டாள்": { s: 1, c: 4 }, // Muttaal (fool)
  "பொறுக்கி": { s: 3, c: 4 }, // Porukki (scoundrel/pimp)
  "கோமியம்": { s: 3, c: 4 }, // Gomiyam (cow dung)
  "கும்மு": { s: 3, c: 4 }, // Kummu (punch/hit)
  "அயிர்": { s: 4, c: 4 }, // Ayir (testicles)
  "பால்": { s: 2, c: 3 }, // Paal (milk, euphemism for semen)
  "வெட்ட": { s: 3, c: 4 }, // Vetta (cut/kill)
  "ஊம்பு": { s: 3, c: 4 }, // Oombu (suck)
  "மாட்டு": { s: 3, c: 4 }, // Maatu (cattle, used as insult)
  "ஐயா கூதி": { s: 5, c: 5 }, // Aiyaa koothi (sir's cunt)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "otha": { s: 3, c: 5 }, // f**k off
  "thevidiya": { s: 5, c: 5 }, // prostitute
  "koothi": { s: 3, c: 5 }, // female genitalia
  "punda": { s: 3, c: 5 }, // female genitalia
  "pundai": { s: 3, c: 5 }, // female genitalia
  "pottai": { s: 3, c: 5 }, // eunuch/transgender slur
  "mayiru": { s: 3, c: 5 }, // pubic hair
  "sunni": { s: 4, c: 5 }, // penis
  "thayoli": { s: 3, c: 5 }, // motherf**ker
  "naai": { s: 3, c: 4 }, // dog (insult)
  "pulla": { s: 3, c: 5 }, // worm/kid (insult)
  "muttaal": { s: 1, c: 5 }, // fool
  "porukki": { s: 3, c: 5 }, // scoundrel/pimp
  "gomiyam": { s: 3, c: 5 }, // cow dung
  "kummu": { s: 3, c: 5 }, // punch/hit
  "ayir": { s: 4, c: 5 }, // testicles
  "paal": { s: 3, c: 4 }, // milk (euphemism for semen)
  "vetta": { s: 3, c: 5 }, // cut/kill
  "oombu": { s: 3, c: 5 }, // suck
  "maatu": { s: 3, c: 5 }, // cattle (insult)
  "aiyaa koothi": { s: 5, c: 5 }, // sir's cunt

  // Common variations and combinations
  "thevidiya paiyan": { s: 5, c: 4 }, // Son of a prostitute
  "thevidiya payale": { s: 3, c: 4 }, // Vocative form
  "otha pundai": { s: 5, c: 5 }, // f**k off cunt
  "baadu": { s: 3, c: 4 }, // Derogatory term
  "loosu": { s: 1, c: 4 }, // Crazy/fool
  "enna da mayiru": { s: 3, c: 4 }, // What the hell
  "graandi": { s: 3, c: 4 }, // Derogatory term
  "kandaaala": { s: 3, c: 4 }, // Derogatory term
  "dai pundai": { s: 5, c: 5 }, // hey cunt
  "kena punda": { s: 1, c: 4 }, // Stupid
  "mutta punda": { s: 1, c: 4 }, // Stupid
  "narakoothi": { s: 3, c: 4 }, // Dog + female genitalia
  "akkul thukki": { s: 3, c: 4 }, // lifted the armpit (vulgar gesture)
  "pacha thevudiya": { s: 5, c: 4 }, // Total prostitute
  "thevadiya paiya": { s: 5, c: 4 }, // Son of a prostitute
  "myra": { s: 3, c: 4 }, // Romanized short form of mayiru
  "pundamavaney": { s: 4, c: 4 }, // Born of a vagina
  "sunni oombu": { s: 3, c: 4 }, // Vulgar phrase

  // Common misspellings and variations
  "oththaa": { s: 3, c: 5 }, // f**k off (variant)
  "ottha": { s: 3, c: 5 }, // f**k off (variant)
  "thayli": { s: 3, c: 5 }, // motherf**ker (variant)
  "thailee": { s: 3, c: 5 }, // motherf**ker (variant)
  "koothee": { s: 3, c: 5 }, // female genitalia (variant)
  "kooti": { s: 3, c: 5 }, // female genitalia (variant)
  "pundek": { s: 3, c: 5 }, // female genitalia (variant)
  "pundaik": { s: 3, c: 5 }, // female genitalia (variant)
  "illa pundek": { s: 5, c: 5 }, // no cunt (insult)
  "thevdiya": { s: 5, c: 5 }, // prostitute (variant)
  "poriki": { s: 3, c: 5 }, // scoundrel (variant)
  "kuthi": { s: 3, c: 5 }, // female genitalia (variant)
  "soothu": { s: 3, c: 5 }, // Anus
  "lavadey": { s: 4, c: 5 }, // Penis
  "lavda": { s: 4, c: 5 }, // penis (variant)
  "sappi": { s: 3, c: 5 }, // Sucker

  // Additional Tamil profanity
  "oombu da": { s: 3, c: 4 }, // Suck it
  "pundai mavanae": { s: 4, c: 4 }, // Pussy-born
  "koothi payale": { s: 3, c: 4 }, // Vulgar insult
  "thevudiya mavan": { s: 5, c: 4 }, // Son of a prostitute
  "okka": { s: 3, c: 5 }, // Fuck (variant)
  "okkala": { s: 3, c: 5 }, // Fucking
  "soothu nakki": { s: 3, c: 4 }, // Ass licker
  "poolu": { s: 4, c: 4 }, // Dick (variant)
  "poolai oombuda": { s: 4, c: 4 }, // Suck the dick
  "kena pundai": { s: 1, c: 4 }, // Stupid cunt
  "akka koothi": { s: 4, c: 4 }, // Sister's pussy
  "amma koothi": { s: 4, c: 4 }, // Mother's pussy
  "thayoli paiyan": { s: 5, c: 5 }, // Motherfucker's son
  "kevalama": { s: 3, c: 4 }, // Shameful
  "olai pottan": { s: 3, c: 4 }, // Broken eunuch (insult)
  "katukutty": { s: 3, c: 4 }, // Vulgar term
  "ammayandi": { s: 3, c: 4 }, // Derogatory term
  "koodhi magane": { s: 5, c: 5 }, // Son of a cunt

  // Tamil script additions
  "ஊம்பு டா": { s: 3, c: 4 }, // Oombu da
  "புண்டை மாவனே": { s: 3, c: 4 }, // Pundai mavanae
  "கூத்தி பயலே": { s: 3, c: 4 }, // Koothi payale
  "தேவுடிய மாவன்": { s: 3, c: 4 }, // Thevudiya mavan
  "சூத்து நக்கி": { s: 3, c: 4 }, // Soothu nakki
  "பூலு": { s: 3, c: 4 }, // Poolu
  "அக்கா கூதி": { s: 3, c: 4 }, // Akka koothi
  "அம்மா கூதி": { s: 3, c: 4 }, // Amma koothi
  "கூதி மகனே": { s: 3, c: 4 }, // Koodhi magane

  // More Tamil profanity - Roman script
  "aambala koothi": { s: 5, c: 5 }, // Male's cunt
  "ammadi pundai": { s: 5, c: 5 }, // Mother's cunt
  "anga soothu": { s: 3, c: 4 }, // There ass (insult)
  "baadu punda": { s: 5, c: 5 }, // Bitch cunt
  "dei kena": { s: 1, c: 4 }, // Hey stupid
  "dei punda": { s: 5, c: 5 }, // Hey cunt
  "ennada punda": { s: 5, c: 5 }, // What the cunt
  "gommala": { s: 4, c: 4 }, // Balls (insult)
  "kaai": { s: 4, c: 4 }, // Dick (slang)
  "kandaarai": { s: 3, c: 5 }, // Shit
  "kazhudhai": { s: 3, c: 4 }, // Donkey (insult)
  "keezhadi": { s: 3, c: 4 }, // Low person
  "kena payale": { s: 1, c: 4 }, // Stupid fellow
  "ki adi": { s: 3, c: 4 }, // Eat a kick
  "koothichi": { s: 3, c: 4 }, // Slut
  "koodhi munda": { s: 5, c: 5 }, // Cunt face
  "kudikaran": { s: 1, c: 3 }, // Drunkard (insult)
  "kusu": { s: 3, c: 4 }, // Fart
  "kuthimagane": { s: 5, c: 5 }, // Son of a cunt
  "lavadai": { s: 4, c: 4 }, // Dick (variant)
  "lenda": { s: 4, c: 4 }, // Dick (slang)
  "maadu": { s: 3, c: 4 }, // Cattle (insult)
  "mairu pudungi": { s: 3, c: 4 }, // Pubic hair plucker
  "mayira pudunguda": { s: 3, c: 4 }, // Pluck the pubic hair
  "mayiru poodai": { s: 5, c: 5 }, // Pubic hair cunt
  "molai": { s: 4, c: 4 }, // Breast (vulgar context)
  "moodevi": { s: 3, c: 4 }, // Goddess of misfortune (insult)
  "mooku oombura": { s: 3, c: 4 }, // Nose sucker (insult)
  "myiru": { s: 3, c: 4 }, // Pubic hair variant
  "na koothi": { s: 5, c: 5 }, // Dog cunt
  "naai koodhi": { s: 5, c: 5 }, // Dog cunt variant
  "naaye": { s: 3, c: 4 }, // Dog (vocative)
  "narakoodhi": { s: 5, c: 5 }, // Dog cunt
  "okkali": { s: 3, c: 5 }, // Fucking
  "olmaari": { s: 3, c: 4 }, // Pervert
  "ommala": { s: 3, c: 4 }, // Your mother (start of insult)
  "ommala koothi": { s: 5, c: 5 }, // Your mother's cunt
  "oor koothi": { s: 3, c: 4 }, // Village slut
  "oor otha": { s: 3, c: 5 }, // Village fucker
  "paal kudi": { s: 3, c: 4 }, // Milk drinker (childish insult)
  "pacha koothi": { s: 5, c: 5 }, // Raw cunt
  "pachakoothi": { s: 3, c: 4 }, // Variant
  "pandi": { s: 3, c: 4 }, // Pig (slang insult)
  "panni": { s: 3, c: 4 }, // Pig
  "panni punda": { s: 5, c: 5 }, // Pig cunt
  "podei": { s: 3, c: 4 }, // Beat (vulgar)
  "poolu sappi": { s: 4, c: 4 }, // Dick sucker
  "pottachi": { s: 3, c: 4 }, // Female eunuch
  "potta koothi": { s: 5, c: 5 }, // Eunuch cunt
  "pullu": { s: 4, c: 4 }, // Dick (variant)
  "pundai payale": { s: 5, c: 5 }, // Cunt fellow
  "pundamavan": { s: 5, c: 5 }, // Cunt born
  "saathaan": { s: 3, c: 4 }, // Satan (insult)
  "sevuru": { s: 3, c: 4 }, // Corpse (insult)
  "sootha moodi": { s: 3, c: 4 }, // Shut your ass
  "soothu kolutha": { s: 3, c: 4 }, // Light the ass on fire
  "soothu oombura": { s: 3, c: 4 }, // Ass sucker
  "sunni koodhi": { s: 5, c: 5 }, // Dick cunt
  "sunni sappi": { s: 4, c: 4 }, // Dick sucker
  "thayir sappaan": { s: 3, c: 4 }, // Curd sucker (insult)
  "thevadiya payale": { s: 5, c: 4 }, // Son of a prostitute (vocative)
  "thevadiya pasanga": { s: 5, c: 4 }, // Children of a prostitute
  "thodai": { s: 3, c: 4 }, // Thigh (vulgar context)
  "thoombu": { s: 3, c: 4 }, // Trunk (insult)
  "thottal": { s: 3, c: 4 }, // Untouchable (very offensive)
  "ukkaru": { s: 3, c: 4 }, // Sit (vulgar command)
  "venna punda": { s: 5, c: 5 }, // Butter cunt (useless)
  "vesi": { s: 5, c: 4 }, // Prostitute
  "vesipaya": { s: 5, c: 4 }, // Prostitute's son
  "vesikoothi": { s: 5, c: 5 }, // Prostitute cunt

  // More Tamil script additions
  "ஆம்பள கூதி": { s: 3, c: 4 }, // Aambala koothi
  "கழுதை": { s: 3, c: 4 }, // Kazhudhai (donkey)
  "கூத்தி முண்ட": { s: 3, c: 4 }, // Koodhi munda
  "கூத்திச்சி": { s: 3, c: 4 }, // Koothichi (slut)
  "பச்ச கூதி": { s: 3, c: 4 }, // Pacha koothi
  "பன்னி": { s: 3, c: 4 }, // Panni (pig)
  "பூலு சப்பி": { s: 3, c: 4 }, // Poolu sappi
  "சூத்து மூடு": { s: 3, c: 4 }, // Sootha moodi
  "சூத்து ஊம்பு": { s: 3, c: 4 }, // Soothu oombura
  "சுன்னி சப்பி": { s: 3, c: 4 }, // Sunni sappi
  "தேவடியா பசங்க": { s: 3, c: 4 }, // Thevadiya pasanga
  "வேசி": { s: 5, c: 4 }, // Vesi (prostitute)
  "வேசிபய": { s: 3, c: 4 }, // Vesipaya
  "ஓக்கலி": { s: 3, c: 4 }, // Okkali
  "ஊர் கூத்தி": { s: 3, c: 4 }, // Oor koothi
  "ஒம்மால கூத்தி": { s: 3, c: 4 }, // Ommala koothi
  "நாய்க்கூதி": { s: 3, c: 4 }, // Naaikoodhi
  "மயிரு புடுங்குடா": { s: 3, c: 4 }, // Mayira pudunguda
  "மூடேவி": { s: 3, c: 4 }, // Moodevi

  // ========================================
  // === Extended Tamil Profanity (Roman) ===
  // ========================================
  "aambala soothu": { s: 3, c: 4 }, // Male's ass
  "adi otha": { s: 3, c: 5 }, // Beat and fuck
  "akka pundai": { s: 5, c: 5 }, // Sister's cunt
  "akka soothu": { s: 3, c: 4 }, // Sister's ass
  "ammadi soothu": { s: 3, c: 4 }, // Mother's ass
  "amma oombu": { s: 3, c: 4 }, // Mother suck (insult)
  "amma pundai otha": { s: 5, c: 5 }, // Fuck mother's cunt
  "anga pundai": { s: 5, c: 5 }, // There cunt
  "anna koothi": { s: 5, c: 5 }, // Brother's cunt (insult)
  "asingam": { s: 1, c: 4 }, // Shameful/ugly
  "avala otha": { s: 3, c: 5 }, // Fuck her
  "baadu koothi": { s: 5, c: 5 }, // Bitch cunt
  "baadu soothu": { s: 3, c: 4 }, // Bitch ass
  "baadu sunni": { s: 4, c: 4 }, // Bitch dick (compound)
  "chee koothi": { s: 5, c: 5 }, // Disgusting cunt
  "chinna punda": { s: 5, c: 5 }, // Small cunt
  "chinna sunni": { s: 4, c: 4 }, // Small dick
  "dei koothi": { s: 5, c: 5 }, // Hey cunt
  "dei soothu": { s: 3, c: 4 }, // Hey ass
  "enna koothi": { s: 5, c: 5 }, // What cunt
  "enna soothu": { s: 3, c: 4 }, // What ass
  "gommala udai": { s: 4, c: 4 }, // Break the balls
  "irumbu sunni": { s: 4, c: 4 }, // Iron dick
  "kai adi": { s: 4, c: 4 }, // Masturbation (hand hit)
  "kari koothi": { s: 5, c: 5 }, // Dark cunt (racial vulgar)
  "kari sunni": { s: 4, c: 4 }, // Dark dick (racial vulgar)
  "kazhudhai punda": { s: 5, c: 5 }, // Donkey cunt
  "kazhudhai soothu": { s: 3, c: 4 }, // Donkey ass
  "keezhtharam": { s: 3, c: 4 }, // Low-class person
  "konju punda": { s: 5, c: 5 }, // Shrimp cunt (small/useless)
  "koothimagal": { s: 5, c: 5 }, // Daughter of a cunt
  "koothi mairu": { s: 5, c: 5 }, // Cunt's pubic hair
  "koothi munda sappi": { s: 5, c: 5 }, // Cunt face sucker
  "koothi nakki": { s: 5, c: 5 }, // Cunt licker
  "koothi odanji": { s: 5, c: 5 }, // Cunt breaker
  "koothi sappi": { s: 5, c: 5 }, // Cunt sucker
  "kudimagan": { s: 1, c: 3 }, // Son of a drunkard
  "kunju sunni": { s: 4, c: 4 }, // Little dick
  "kuppai koothi": { s: 5, c: 5 }, // Garbage cunt
  "kuppai punda": { s: 5, c: 5 }, // Garbage cunt (variant)
  "lavadai sappi": { s: 4, c: 4 }, // Dick sucker (variant)
  "mairu punda": { s: 5, c: 5 }, // Pubic hair cunt
  "mairu soothu": { s: 3, c: 4 }, // Pubic hair ass
  "mama punda": { s: 5, c: 5 }, // Uncle's cunt
  "mamanar soothu": { s: 1, c: 4 }, // Father-in-law's ass
  "mandi koothi": { s: 5, c: 5 }, // Cattle cunt
  "mandi soothu": { s: 3, c: 4 }, // Cattle ass
  "mayiru koothi": { s: 5, c: 5 }, // Pubic hair cunt
  "mayiru sappi": { s: 3, c: 4 }, // Pubic hair sucker
  "modha koothi": { s: 1, c: 4 }, // Stupid cunt
  "molai paal": { s: 4, c: 4 }, // Breast milk (vulgar)
  "molai sappi": { s: 4, c: 4 }, // Breast sucker
  "motta punda": { s: 5, c: 5 }, // Bald cunt
  "motta soothu": { s: 3, c: 4 }, // Bald ass
  "muttaa punda": { s: 1, c: 4 }, // Stupid cunt
  "muttaal koothi": { s: 1, c: 4 }, // Fool cunt
  "myre": { s: 3, c: 4 }, // Pubic hair (texting short form)
  "na punda": { s: 5, c: 5 }, // Dog cunt
  "na soothu": { s: 3, c: 4 }, // Dog ass
  "naai oombu": { s: 3, c: 4 }, // Dog suck
  "naai punda": { s: 5, c: 5 }, // Dog cunt (variant)
  "naai soothu": { s: 3, c: 4 }, // Dog ass (variant)
  "naai sunni": { s: 4, c: 4 }, // Dog dick
  "naaye poda": { s: 3, c: 4 }, // Get lost dog
  "okkali sunni": { s: 4, c: 5 }, // Fucking dick
  "ommala pundai": { s: 5, c: 5 }, // Your mother's cunt (variant)
  "ommala soothu": { s: 3, c: 4 }, // Your mother's ass
  "oor baadu": { s: 3, c: 4 }, // Village bitch
  "oor punda": { s: 5, c: 5 }, // Village cunt
  "oor vesi": { s: 5, c: 4 }, // Village prostitute
  "oor vesikoothi": { s: 5, c: 5 }, // Village prostitute cunt
  "otha da": { s: 3, c: 5 }, // Fuck off (male)
  "otha di": { s: 3, c: 5 }, // Fuck off (female)
  "otha koothi": { s: 5, c: 5 }, // Fuck off cunt
  "otha loosu": { s: 3, c: 5 }, // Fuck off crazy
  "otha myre": { s: 3, c: 5 }, // Fuck off pubic hair
  "otha poda": { s: 3, c: 5 }, // Fuck off get lost
  "otha soothu": { s: 3, c: 5 }, // Fuck off ass
  "oththa": { s: 3, c: 5 }, // Fuck off (variant)
  "oththa punda": { s: 5, c: 5 }, // Fuck off cunt (variant)
  "pacha punda": { s: 5, c: 5 }, // Raw cunt
  "pacha soothu": { s: 3, c: 4 }, // Raw ass
  "pacha vesi": { s: 5, c: 4 }, // Total prostitute
  "pandi punda": { s: 5, c: 5 }, // Pig cunt
  "pandi soothu": { s: 3, c: 4 }, // Pig ass
  "panni oombu": { s: 3, c: 4 }, // Pig suck
  "pathu koothi": { s: 5, c: 5 }, // Ten cunts
  "pathu sunni": { s: 4, c: 4 }, // Ten dicks
  "pee koothi": { s: 5, c: 5 }, // Shit cunt
  "periya koothi": { s: 5, c: 5 }, // Big cunt
  "periya punda": { s: 5, c: 5 }, // Big cunt (variant)
  "periya soothu": { s: 3, c: 4 }, // Big ass
  "periya sunni": { s: 4, c: 4 }, // Big dick
  "podei da": { s: 3, c: 4 }, // Beat it (insult)
  "podei di": { s: 3, c: 4 }, // Beat it (female)
  "poolu oombu": { s: 4, c: 4 }, // Suck the dick
  "poolu thattu": { s: 4, c: 4 }, // Dick hit
  "poolu udai": { s: 4, c: 4 }, // Dick break
  "pudungu sunni": { s: 4, c: 4 }, // Pluck the dick
  "pullu oombu": { s: 4, c: 4 }, // Dick suck (variant)
  "pullu sappi": { s: 4, c: 4 }, // Dick suck (variant)
  "puluthee": { s: 3, c: 4 }, // Worm (insult)
  "pundai adi": { s: 5, c: 5 }, // Cunt hit
  "pundai koothi": { s: 5, c: 5 }, // Cunt (redundant compound insult)
  "pundai mairu": { s: 5, c: 5 }, // Cunt's pubic hair
  "pundai nakki": { s: 5, c: 5 }, // Cunt licker (variant)
  "pundai odai": { s: 5, c: 5 }, // Cunt break
  "pundai thattu": { s: 5, c: 5 }, // Cunt hit
  "sappi da": { s: 3, c: 4 }, // Suck it (male)
  "sappi di": { s: 3, c: 4 }, // Suck it (female)
  "semma koothi": { s: 5, c: 5 }, // Super cunt
  "semma punda": { s: 5, c: 5 }, // Super cunt (variant)
  "sevaru koothi": { s: 5, c: 5 }, // Corpse cunt
  "sinna punda": { s: 5, c: 5 }, // Small cunt (variant)
  "soothu adi": { s: 3, c: 4 }, // Ass hit
  "soothu koothi": { s: 5, c: 5 }, // Ass cunt
  "soothu mairu": { s: 3, c: 4 }, // Ass pubic hair
  "soothu mara": { s: 3, c: 4 }, // Ass tree (insult)
  "soothu sappi": { s: 3, c: 4 }, // Ass sucker
  "soothu thattu": { s: 3, c: 4 }, // Ass hit (variant)
  "sunni adi": { s: 4, c: 4 }, // Dick hit
  "sunni koothi mavan": { s: 5, c: 5 }, // Dick cunt born
  "sunni mavan": { s: 4, c: 4 }, // Dick born
  "sunni poolu": { s: 4, c: 4 }, // Dick (compound)
  "sunni thattu": { s: 4, c: 4 }, // Dick slap
  "sunni udai": { s: 4, c: 4 }, // Dick break
  "thaayoli paiyan": { s: 5, c: 5 }, // Motherfucker's son (variant)
  "thanni koothi": { s: 5, c: 5 }, // Water cunt (loose)
  "thanni punda": { s: 5, c: 5 }, // Water cunt (loose, variant)
  "thayoli batch": { s: 5, c: 5 }, // Motherfucker batch
  "thayoli koothi": { s: 5, c: 5 }, // Motherfucker cunt
  "thayoli punda": { s: 5, c: 5 }, // Motherfucker cunt (variant)
  "thevadiya batch": { s: 5, c: 4 }, // Prostitute batch
  "thevadiya koothi": { s: 5, c: 5 }, // Prostitute cunt
  "thevadiya punda": { s: 5, c: 5 }, // Prostitute cunt (variant)
  "thevadiya soothu": { s: 5, c: 4 }, // Prostitute ass
  "thevadiya sunni": { s: 5, c: 4 }, // Prostitute dick
  "thoo koothi": { s: 5, c: 5 }, // Spit cunt
  "thookku sunni": { s: 4, c: 4 }, // Hanging dick
  "venna koothi": { s: 5, c: 5 }, // Butter cunt (useless, variant)
  "vesi batch": { s: 5, c: 4 }, // Prostitute batch
  "vesi koothi": { s: 5, c: 5 }, // Prostitute cunt (variant)
  "vesi mavan": { s: 5, c: 4 }, // Prostitute's son
  "vesi punda": { s: 5, c: 5 }, // Prostitute cunt
  "vesi soothu": { s: 5, c: 4 }, // Prostitute ass

  // ========================================
  // === Madras Bashai (Slang) ===
  // ========================================
  "figure otha": { s: 3, c: 5 }, // Figure fuck (objectifying)
  "galeej": { s: 3, c: 4 }, // Dirty/vulgar (from Hindi)
  "galatta punda": { s: 5, c: 5 }, // Trouble cunt
  "goiyala": { s: 4, c: 4 }, // Balls (slang)
  "gumbal koothi": { s: 5, c: 5 }, // Gang cunt
  "item koothi": { s: 5, c: 5 }, // Item cunt (objectifying)
  "jollu viduradhu": { s: 3, c: 4 }, // Drooling (being pervy)
  "kattapunda": { s: 5, c: 5 }, // Cut cunt
  "kettavan": { s: 3, c: 4 }, // Bad man
  "kettava": { s: 3, c: 4 }, // Bad woman
  "kodumai koothi": { s: 5, c: 5 }, // Torture cunt
  "kuppam punda": { s: 5, c: 5 }, // Slum cunt
  "loosu koothi": { s: 5, c: 5 }, // Crazy cunt
  "loosu punda": { s: 5, c: 5 }, // Crazy cunt (variant)
  "mokka punda": { s: 5, c: 5 }, // Boring cunt
  "naatukoothi": { s: 5, c: 5 }, // Country cunt
  "olu podra": { s: 3, c: 4 }, // Leak/useless
  "settai koothi": { s: 5, c: 5 }, // Mischief cunt
  "somberi koothi": { s: 5, c: 5 }, // Lazy cunt
  "thara local koothi": { s: 5, c: 5 }, // Very local cunt (classist)
  "waste koothi": { s: 5, c: 5 }, // Waste cunt

  // ========================================
  // === Sri Lankan Tamil Profanity ===
  // ========================================
  "hutti punda": { s: 1, c: 4 }, // Idiot cunt (SL Tamil)
  "kundi": { s: 3, c: 4 }, // Ass (SL Tamil)
  "kundi adi": { s: 3, c: 4 }, // Ass hit (SL Tamil)
  "modda": { s: 4, c: 4 }, // Dick (SL Tamil, borrowed)
  "moddai oombu": { s: 4, c: 4 }, // Suck the dick (SL Tamil)
  "ponnaya": { s: 3, c: 4 }, // Effeminate man (SL Tamil derogatory)
  "pundai vettu": { s: 5, c: 5 }, // Cut the cunt (SL Tamil)
  "salli vesi": { s: 5, c: 4 }, // Cheap prostitute (SL Tamil)
  "sunni vetti": { s: 4, c: 4 }, // Dick cutting (SL Tamil insult)
  "thambiya punda": { s: 5, c: 5 }, // Little brother cunt (SL Tamil)
  "umbala kundi": { s: 3, c: 4 }, // Your ass (SL Tamil)

  // ========================================
  // === Malaysian Tamil Profanity ===
  // ========================================
  "bodoh punda": { s: 1, c: 4 }, // Stupid cunt (MY Tamil, Malay mix)
  "dei pundek": { s: 5, c: 5 }, // Hey cunt (Malaysian variant)
  "keling koothi": { s: 5, c: 5 }, // Racial slur + cunt (MY Tamil)
  "machan punda": { s: 5, c: 5 }, // Friend's cunt (MY Tamil)
  "mabuk koothi": { s: 1, c: 3 }, // Drunk cunt (MY Tamil, Malay mix)
  "pukimak": { s: 5, c: 5 }, // Mother's cunt (MY Tamil/Malay)
  "pundek amma": { s: 5, c: 5 }, // Cunt mother (MY Tamil)
  "sial pundek": { s: 5, c: 5 }, // Damn cunt (MY Tamil, Malay mix)
  "thayoli pundek": { s: 5, c: 5 }, // Motherfucker cunt (MY Tamil)
  "thambi pundek": { s: 5, c: 5 }, // Brother cunt (MY Tamil)

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "ஆம்பள சூத்து": { s: 3, c: 4 }, // Aambala soothu
  "அக்கா புண்டை": { s: 3, c: 4 }, // Akka pundai
  "அக்கா சூத்து": { s: 3, c: 4 }, // Akka soothu
  "அம்மா ஊம்பு": { s: 3, c: 4 }, // Amma oombu
  "அவள ஓத்தா": { s: 3, c: 4 }, // Avala otha
  "சின்ன புண்ட": { s: 3, c: 4 }, // Chinna punda
  "சின்ன சுன்னி": { s: 3, c: 4 }, // Chinna sunni
  "என்ன கூத்தி": { s: 3, c: 4 }, // Enna koothi
  "கழுதை புண்ட": { s: 3, c: 4 }, // Kazhudhai punda
  "கூத்தி மகள்": { s: 3, c: 4 }, // Koothimagal
  "கூத்தி மயிரு": { s: 3, c: 4 }, // Koothi mairu
  "கூத்தி நக்கி": { s: 3, c: 4 }, // Koothi nakki
  "கூத்தி சப்பி": { s: 3, c: 4 }, // Koothi sappi
  "குப்பை கூத்தி": { s: 3, c: 4 }, // Kuppai koothi
  "மயிரு கூத்தி": { s: 3, c: 4 }, // Mayiru koothi
  "மொலை சப்பி": { s: 3, c: 4 }, // Molai sappi
  "முட்டா புண்ட": { s: 3, c: 4 }, // Muttaa punda
  "நாய் புண்ட": { s: 3, c: 4 }, // Naai punda
  "நாய் சூத்து": { s: 3, c: 4 }, // Naai soothu
  "நாய் சுன்னி": { s: 3, c: 4 }, // Naai sunni
  "ஒத்தா டா": { s: 3, c: 4 }, // Otha da
  "ஒத்தா டி": { s: 3, c: 4 }, // Otha di
  "பச்ச வேசி": { s: 3, c: 4 }, // Pacha vesi
  "பன்னி புண்ட": { s: 3, c: 4 }, // Pandi punda
  "பெரிய கூத்தி": { s: 3, c: 4 }, // Periya koothi
  "பெரிய சுன்னி": { s: 3, c: 4 }, // Periya sunni
  "பூலு ஊம்பு": { s: 3, c: 4 }, // Poolu oombu
  "புண்டை அடி": { s: 3, c: 4 }, // Pundai adi
  "புண்டை நக்கி": { s: 3, c: 4 }, // Pundai nakki
  "சப்பி டா": { s: 3, c: 4 }, // Sappi da
  "செம்ம கூத்தி": { s: 3, c: 4 }, // Semma koothi
  "சூத்து அடி": { s: 3, c: 4 }, // Soothu adi
  "சூத்து சப்பி": { s: 3, c: 4 }, // Soothu sappi
  "சுன்னி அடி": { s: 3, c: 4 }, // Sunni adi
  "சுன்னி மாவன்": { s: 3, c: 4 }, // Sunni mavan
  "தாயோளி பண்ட": { s: 3, c: 4 }, // Thayoli punda
  "தேவடியா சூத்து": { s: 3, c: 4 }, // Thevadiya soothu
  "வேசி பண்ட": { s: 3, c: 4 }, // Vesi punda
  "வேசி சூத்து": { s: 3, c: 4 }, // Vesi soothu
  "வேசி மாவன்": { s: 3, c: 4 }, // Vesi mavan
  "போன்னாய": { s: 3, c: 4 }, // Ponnaya (SL Tamil)
  "குண்டி": { s: 3, c: 4 }, // Kundi (SL Tamil)

  // ========================================
  // === Tamil Internet Slang ===
  // ========================================
  "otha myr": { s: 3, c: 5 }, // Fuck off pubic hair (texting)
  "koodhi mgne": { s: 5, c: 5 }, // Son of a cunt (texting)
  "tvdya": { s: 2, c: 3 }, // Thevidiya abbreviation
  "thyoli": { s: 2, c: 3 }, // Thayoli abbreviation
  "othmyr": { s: 2, c: 3 }, // Compound (texting)
  "myru": { s: 2, c: 3 }, // Pubic hair (texting variant)
  "pnda": { s: 2, c: 3 }, // Punda abbreviation
  "snni": { s: 2, c: 3 }, // Sunni abbreviation
  "sthu": { s: 2, c: 3 }, // Soothu abbreviation
  "kthi": { s: 2, c: 3 }, // Koothi abbreviation
  "dei othmyr": { s: 3, c: 5 }, // Hey fuck-pubic-hair (texting)
  "aama kthi": { s: 5, c: 5 }, // Mother cunt (texting)

  // ========================================
  // === More Romanized Tamil Profanity ===
  // ========================================
  "aambala pundai": { s: 5, c: 5 }, // Male's cunt
  "akka sunni": { s: 4, c: 5 }, // Sister's dick (absurd insult)
  "amma poolai oombu": { s: 4, c: 5 }, // Suck mother's dick
  "amma soothu otha": { s: 3, c: 5 }, // Fuck mother's ass
  "anga sunni": { s: 4, c: 5 }, // There dick
  "anna punda": { s: 5, c: 5 }, // Brother's cunt (insult)
  "anna soothu": { s: 3, c: 5 }, // Brother's ass
  "appan koothi": { s: 1, c: 5 }, // Father's cunt
  "appan soothu": { s: 1, c: 5 }, // Father's ass
  "avana otha": { s: 3, c: 5 }, // Fuck him
  "avanuku sunni illa": { s: 4, c: 5 }, // He has no dick
  "avaluku pudikum sunni": { s: 4, c: 5 }, // She likes dick
  "baadu mayiru": { s: 3, c: 5 }, // Bitch pubic hair
  "chee mayiru": { s: 3, c: 5 }, // Disgusting pubic hair
  "chinna mayiru": { s: 3, c: 5 }, // Small pubic hair
  "dei kena baadu": { s: 1, c: 5 }, // Hey stupid bitch
  "dei poolai oombu": { s: 4, c: 5 }, // Hey suck the dick
  "dei venna sunni": { s: 4, c: 5 }, // Hey butter dick (useless)
  "ennada soothu": { s: 3, c: 5 }, // What the ass
  "galeej koothi": { s: 5, c: 5 }, // Dirty cunt
  "irumbu koothi": { s: 5, c: 5 }, // Iron cunt (hard)
  "kaai udai": { s: 4, c: 5 }, // Dick break
  "kaai oombu": { s: 4, c: 5 }, // Suck dick (slang)
  "kai adippa": { s: 4, c: 5 }, // Masturbator
  "kandaarai koothi": { s: 5, c: 5 }, // Shit cunt
  "kari baadu": { s: 3, c: 5 }, // Dark bitch (racial)
  "kari mayiru": { s: 3, c: 5 }, // Dark pubic hair (racial)
  "kattai koothi": { s: 5, c: 5 }, // Wooden cunt
  "keezh taram koothi": { s: 5, c: 5 }, // Low class cunt
  "kena koothi": { s: 1, c: 5 }, // Stupid cunt (variant)
  "kena mayiru": { s: 1, c: 5 }, // Stupid pubic hair
  "kena soothu": { s: 1, c: 5 }, // Stupid ass
  "kodumai soothu": { s: 3, c: 5 }, // Torture ass
  "koothi mooku": { s: 5, c: 5 }, // Cunt nose
  "koothi vaai": { s: 5, c: 5 }, // Cunt mouth
  "koothi vesam": { s: 5, c: 5 }, // Cunt disguise
  "kuppai mayiru": { s: 3, c: 5 }, // Garbage pubic hair
  "kuppai soothu": { s: 3, c: 5 }, // Garbage ass
  "kuppai sunni": { s: 4, c: 5 }, // Garbage dick
  "loosu mayiru": { s: 3, c: 5 }, // Crazy pubic hair
  "loosu soothu": { s: 3, c: 5 }, // Crazy ass
  "loosu sunni": { s: 4, c: 5 }, // Crazy dick
  "maadu koothi": { s: 5, c: 5 }, // Cattle cunt
  "maadu soothu": { s: 3, c: 5 }, // Cattle ass
  "maadu sunni": { s: 4, c: 5 }, // Cattle dick
  "mairu odanji": { s: 3, c: 5 }, // Pubic hair breaker
  "mairu veri": { s: 3, c: 5 }, // Pubic hair madness (insult)
  "mama koothi": { s: 5, c: 5 }, // Uncle's cunt
  "mama soothu": { s: 3, c: 5 }, // Uncle's ass
  "mandi punda": { s: 5, c: 5 }, // Cattle cunt (variant)
  "mandi sunni": { s: 4, c: 5 }, // Cattle dick
  "mayiru koothi vesi": { s: 5, c: 5 }, // Pubic hair cunt prostitute
  "modha punda": { s: 1, c: 5 }, // Stupid cunt (variant)
  "modha soothu": { s: 1, c: 5 }, // Stupid ass (variant)
  "modha sunni": { s: 1, c: 5 }, // Stupid dick
  "molai oombu": { s: 4, c: 5 }, // Breast suck (vulgar)
  "motta koothi": { s: 5, c: 5 }, // Bald cunt
  "motta mayiru": { s: 1, c: 5 }, // Bald pubic hair (oxymoron insult)
  "mottai koothi": { s: 5, c: 5 }, // Bald cunt (variant)
  "motta sunni": { s: 4, c: 5 }, // Bald dick
  "mooku koothi": { s: 5, c: 5 }, // Nose cunt (insult)
  "muttaa soothu": { s: 1, c: 5 }, // Stupid ass
  "muttaa sunni": { s: 1, c: 5 }, // Stupid dick
  "naai koothi": { s: 5, c: 5 }, // Dog cunt
  "naai mayiru": { s: 3, c: 5 }, // Dog pubic hair
  "naaiye oombu da": { s: 3, c: 5 }, // Dog suck it
  "naai koothi magane": { s: 5, c: 5 }, // Dog cunt's son
  "oor mayiru": { s: 3, c: 5 }, // Village pubic hair
  "oor soothu": { s: 3, c: 5 }, // Village ass
  "oor sunni": { s: 4, c: 5 }, // Village dick
  "oru koothi kooda kidaiyathu": { s: 5, c: 5 }, // Not even one cunt available (pathetic)
  "otha poolai": { s: 4, c: 5 }, // Fuck the dick
  "otha sunni": { s: 4, c: 5 }, // Fuck the dick
  "oththa koothi": { s: 5, c: 5 }, // Fuck cunt (variant)
  "othmyr koothi": { s: 5, c: 5 }, // Fuck pubic hair cunt
  "pacha mayiru": { s: 3, c: 5 }, // Raw pubic hair
  "pacha sunni": { s: 4, c: 5 }, // Raw dick
  "pandi koothi": { s: 5, c: 5 }, // Pig cunt
  "pandi mayiru": { s: 3, c: 5 }, // Pig pubic hair
  "pandi sunni": { s: 4, c: 5 }, // Pig dick
  "panni koothi": { s: 5, c: 5 }, // Pig cunt (variant)
  "panni mayiru": { s: 3, c: 5 }, // Pig pubic hair
  "panni sunni": { s: 4, c: 5 }, // Pig dick
  "panni soothu": { s: 3, c: 5 }, // Pig ass
  "pee soothu": { s: 3, c: 5 }, // Shit ass
  "pee sunni": { s: 4, c: 5 }, // Shit dick
  "periya mayiru": { s: 3, c: 5 }, // Big pubic hair
  "poolu koothi": { s: 5, c: 5 }, // Dick cunt
  "poolu mayiru": { s: 4, c: 5 }, // Dick pubic hair
  "poolu soothu": { s: 4, c: 5 }, // Dick ass
  "pottai koothi": { s: 5, c: 5 }, // Eunuch cunt
  "pottai sunni": { s: 4, c: 5 }, // Eunuch dick
  "pundai oombu": { s: 5, c: 5 }, // Cunt suck
  "pundai sappi": { s: 5, c: 5 }, // Cunt sucker
  "pundai vedikkai": { s: 5, c: 5 }, // Cunt comedy (insult)
  "sappi sappi": { s: 3, c: 5 }, // Suck suck (repeated emphasis)

  // ========================================
  // === Tanglish (Tamil-English Mix) Profanity ===
  // ========================================
  "fucking otha": { s: 3, c: 5 }, // Fucking fuck off
  "bloody koothi": { s: 5, c: 5 }, // Bloody cunt
  "damn thevidiya": { s: 5, c: 4 }, // Damn prostitute
  "fucking punda": { s: 5, c: 5 }, // Fucking cunt
  "shit mayiru": { s: 3, c: 5 }, // Shit pubic hair
  "asshole soothu": { s: 3, c: 4 }, // Asshole ass (Tanglish)
  "bastard thevidiya paiyan": { s: 3, c: 4 }, // Bastard son of prostitute
  "bitch koothi": { s: 5, c: 5 }, // Bitch cunt (Tanglish)
  "son of a thevidiya": { s: 5, c: 4 }, // Son of a prostitute (Tanglish)
  "stupid muttaal": { s: 1, c: 4 }, // Stupid fool (Tanglish)
  "shut up koothi": { s: 5, c: 5 }, // Shut up cunt (Tanglish)
  "fuck off otha": { s: 3, c: 5 }, // Fuck off (Tanglish redundant)
  "die da koothi": { s: 5, c: 5 }, // Die cunt (Tanglish)
  "ugly koothi": { s: 1, c: 4 }, // Ugly cunt (Tanglish)
  "cheap vesi": { s: 5, c: 4 }, // Cheap prostitute (Tanglish)
  "dirty soothu": { s: 3, c: 4 }, // Dirty ass (Tanglish)
  "loser punda": { s: 1, c: 4 }, // Loser cunt (Tanglish)
  "idiot muttaal": { s: 1, c: 4 }, // Idiot fool (Tanglish)
  "useless waste": { s: 3, c: 4 }, // Useless waste (Tanglish)
  "disgusting punda": { s: 5, c: 5 }, // Disgusting cunt (Tanglish)
  "pathetic mayiru": { s: 3, c: 4 }, // Pathetic pubic hair (Tanglish)
  "bloody vesi": { s: 5, c: 4 }, // Bloody prostitute (Tanglish)
  "fucking sunni": { s: 4, c: 5 }, // Fucking dick (Tanglish)
  "go to hell otha": { s: 3, c: 5 }, // Go to hell fuck off (Tanglish)
  "mother fucker thayoli": { s: 5, c: 5 }, // Motherfucker (Tanglish)
  "bloody thayoli": { s: 5, c: 5 }, // Bloody motherfucker (Tanglish)
  "shut your koothi mouth": { s: 5, c: 5 }, // Shut your cunt mouth (Tanglish)
  "piece of shit punda": { s: 5, c: 5 }, // Piece of shit cunt (Tanglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "thevidiya paiyan otha": { s: 5, c: 5 }, // Son of prostitute fuck off
  "koothi magane otha": { s: 5, c: 5 }, // Son of cunt fuck off
  "thayoli paiyan koothi": { s: 5, c: 5 }, // Motherfucker's son cunt
  "otha punda koothi": { s: 5, c: 5 }, // Fuck off cunt (compound)
  "naai koothi thevidiya": { s: 5, c: 5 }, // Dog cunt prostitute
  "panni punda otha": { s: 5, c: 5 }, // Pig cunt fuck off
  "vesi koothi mayiru": { s: 5, c: 5 }, // Prostitute cunt pubic hair
  "thevidiya soothu koothi": { s: 5, c: 5 }, // Prostitute ass cunt
  "otha da thevidiya paiyan": { s: 5, c: 5 }, // Fuck off son of prostitute
  "oombu da sunni koothi": { s: 5, c: 5 }, // Suck it dick cunt
  "sappi da koothi mayiru": { s: 5, c: 5 }, // Suck it cunt pubic hair
  "naai koothi vesi punda": { s: 5, c: 5 }, // Dog cunt prostitute
  "panni sunni koothi otha": { s: 5, c: 5 }, // Pig dick cunt fuck off
  "otha loosu koothi mayiru": { s: 5, c: 5 }, // Fuck off crazy cunt pubic hair
  "thayoli batch koothi": { s: 5, c: 5 }, // Motherfucker batch cunt
  "thevidiya koothi mayiru otha": { s: 5, c: 5 }, // Prostitute cunt pubic hair fuck off
  "akka pundai otha": { s: 5, c: 5 }, // Sister's cunt fuck off
  "amma koothi otha da": { s: 5, c: 5 }, // Mother's cunt fuck off
  "ommala koothi mayiru otha": { s: 5, c: 5 }, // Your mother's cunt pubic hair fuck off
  "oor koothi vesi punda": { s: 5, c: 5 }, // Village cunt prostitute

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "அப்பன் கூத்தி": { s: 1, c: 4 }, // Appan koothi (father's cunt)
  "அப்பன் சூத்து": { s: 1, c: 4 }, // Appan soothu (father's ass)
  "அவன ஓத்தா": { s: 3, c: 5 }, // Avana otha (fuck him)
  "கை அடிப்ப": { s: 4, c: 4 }, // Kai adippa (masturbator)
  "கணக்காரி கூத்தி": { s: 5, c: 5 }, // Kanakari koothi (accountant cunt insult)
  "கரி பாடு": { s: 3, c: 4 }, // Kari baadu (dark bitch)
  "கூத்தி வாய்": { s: 5, c: 5 }, // Koothi vaai (cunt mouth)
  "கூத்தி மூக்கு": { s: 5, c: 5 }, // Koothi mooku (cunt nose)
  "குப்பை சுன்னி": { s: 4, c: 4 }, // Kuppai sunni (garbage dick)
  "லூசு சுன்னி": { s: 4, c: 4 }, // Loosu sunni (crazy dick)
  "மாடு கூத்தி": { s: 5, c: 5 }, // Maadu koothi (cattle cunt)
  "மாமா கூத்தி": { s: 5, c: 5 }, // Mama koothi (uncle's cunt)
  "மொட்ட கூத்தி": { s: 5, c: 5 }, // Motta koothi (bald cunt)
  "நாய் மயிரு": { s: 3, c: 4 }, // Naai mayiru (dog pubic hair)
  "ஊர் மயிரு": { s: 3, c: 4 }, // Oor mayiru (village pubic hair)
  "பச்ச சுன்னி": { s: 4, c: 4 }, // Pacha sunni (raw dick)
  "பன்னி கூத்தி": { s: 5, c: 5 }, // Panni koothi (pig cunt)
  "பன்னி மயிரு": { s: 3, c: 4 }, // Panni mayiru (pig pubic hair)
  "பன்னி சுன்னி": { s: 4, c: 4 }, // Panni sunni (pig dick)
  "பூ சூத்து": { s: 3, c: 5 }, // Pee soothu (shit ass)
  "பெரிய மயிரு": { s: 3, c: 4 }, // Periya mayiru (big pubic hair)
  "பூலு கூத்தி": { s: 5, c: 5 }, // Poolu koothi (dick cunt)
  "பொட்டை சுன்னி": { s: 4, c: 4 }, // Pottai sunni (eunuch dick)
  "புண்டை வெடிக்கை": { s: 5, c: 5 }, // Pundai vedikkai (cunt comedy)
  "தேவடியா சுன்னி": { s: 5, c: 4 }, // Thevidiya sunni (prostitute's dick)
  "வேசி மயிரு": { s: 5, c: 4 }, // Vesi mayiru (prostitute pubic hair)
  "நாய் கூத்தி மகனே": { s: 5, c: 5 }, // Naai koothi magane (dog cunt's son)
  "தாயோளி பிண்ட கூத்தி": { s: 5, c: 5 }, // Thayoli punda koothi (motherfucker cunt)
  "ஒத்தா டா தேவடியா பையன்": { s: 5, c: 5 }, // Otha da thevidiya paiyan (fuck off prostitute's son)
  "ஊம்பு டா சுன்னி கூத்தி": { s: 5, c: 5 }, // Oombu da sunni koothi (suck it dick cunt)
  "நாய் கூத்தி வேசி புண்ட": { s: 5, c: 5 }, // Naai koothi vesi punda (dog cunt prostitute)
  "பன்னி சுன்னி கூத்தி ஓத்தா": { s: 5, c: 5 }, // Panni sunni koothi otha (pig dick cunt fuck off)
  "ஊர் கூத்தி வேசி புண்ட": { s: 5, c: 5 }, // Oor koothi vesi punda (village cunt prostitute)
  "அக்கா புண்டை ஓத்தா": { s: 5, c: 5 }, // Akka pundai otha (sister's cunt fuck off)

  // ========================================
  // === Kongu Tamil Dialect ===
  // ========================================
  "koothadi": { s: 5, c: 5 }, // Cunt-hitter (Kongu)
  "punda vazhinjirukku": { s: 5, c: 5 }, // Cunt is slippery (Kongu)
  "sunni thattu da": { s: 4, c: 4 }, // Dick slap (Kongu)
  "oombu di soothu": { s: 3, c: 4 }, // Suck it ass (Kongu, female)
  "okkara myre": { s: 3, c: 4 }, // Sitting pubic hair (Kongu)
  "poola oombura": { s: 4, c: 4 }, // Dick sucking (Kongu)
  "koothi vaari": { s: 5, c: 5 }, // Cunt collected (Kongu)
  "punda kalaichi": { s: 5, c: 5 }, // Cunt mixed (Kongu)
  "soothu vedichi": { s: 3, c: 4 }, // Ass exploded (Kongu)

  // ========================================
  // === Madurai Dialect ===
  // ========================================
  "koothi na": { s: 5, c: 5 }, // Cunt dog (Madurai)
  "punda polappa": { s: 5, c: 5 }, // Cunt disaster (Madurai)
  "mayiru da polappa": { s: 3, c: 4 }, // Pubic hair disaster (Madurai)
  "sunni koothi polappa": { s: 5, c: 5 }, // Dick cunt disaster (Madurai)
  "otha polappa": { s: 3, c: 5 }, // Fuck off disaster (Madurai)
  "soothu polappa": { s: 3, c: 4 }, // Ass disaster (Madurai)
  "dei punda polappa": { s: 5, c: 5 }, // Hey cunt disaster (Madurai)
  "thevidiya polappa": { s: 5, c: 4 }, // Prostitute disaster (Madurai)
  "naaye polappa": { s: 3, c: 4 }, // Dog disaster (Madurai)

  // ========================================
  // === Singapore Tamil Profanity ===
  // ========================================
  "kaneh pundai": { s: 1, c: 4 }, // Stupid cunt (SG Tamil)
  "machan koothi": { s: 5, c: 5 }, // Friend's cunt (SG Tamil)
  "thambi sunni": { s: 4, c: 4 }, // Brother's dick (SG Tamil)
  "bodoh otha": { s: 1, c: 4 }, // Stupid fuck off (SG Tamil, Malay mix)
  "sial otha": { s: 3, c: 5 }, // Damn fuck off (SG Tamil, Malay mix)
  "knn pundek": { s: 5, c: 5 }, // KNN cunt (SG Tamil)
  "pundek neh": { s: 5, c: 5 }, // Cunt there (SG Tamil)
  "mayiru neh": { s: 3, c: 4 }, // Pubic hair there (SG Tamil)

  // ========================================
  // === More Internet/Texting Abbreviations ===
  // ========================================
  "otha myr da": { s: 3, c: 5 }, // Fuck off pubic hair (texting)
  "tvdya pyn": { s: 2, c: 3 }, // Thevidiya paiyan abbreviation
  "kthimgn": { s: 2, c: 3 }, // Koothi magane abbreviation
  "snni ombu": { s: 2, c: 3 }, // Sunni oombu abbreviation
  "sthu nkki": { s: 2, c: 3 }, // Soothu nakki abbreviation
  "pndai nkki": { s: 2, c: 3 }, // Pundai nakki abbreviation
  "otha kth myr": { s: 2, c: 3 }, // Otha koothi mayiru abbreviation
  "dei othmyr kth": { s: 2, c: 3 }, // Dei otha mayiru koothi abbreviation
  "tvdya sthu": { s: 2, c: 3 }, // Thevidiya soothu abbreviation
  "vsi kth": { s: 2, c: 3 }, // Vesi koothi abbreviation
  "pnni kth": { s: 2, c: 3 }, // Panni koothi abbreviation
  "otha lsu": { s: 2, c: 3 }, // Otha loosu abbreviation
  "nai pnda": { s: 2, c: 3 }, // Naai punda abbreviation

  // ========================================
  // === Extended Tamil Script Profanity ===
  // ========================================
  "சுன்னி ஊம்பு டா": { s: 4, c: 4 }, // Sunni oombu da (suck the dick)
  "தேவடியா மகனே": { s: 5, c: 4 }, // Thevidiya magane (son of a prostitute)
  "புண்டை ஓத்தா": { s: 5, c: 5 }, // Pundai otha (fuck the cunt)
  "சூத்து ஓத்தா": { s: 3, c: 5 }, // Soothu otha (fuck the ass)
  "மயிரு பிடுங்கு": { s: 3, c: 4 }, // Mayiru pudungu (pluck the pubic hair)
  "கூத்தி அடிச்சி": { s: 5, c: 5 }, // Koothi adichchi (cunt-hitter)
  "ஊம்பு வேசி": { s: 5, c: 4 }, // Oombu vesi (suck prostitute)
  "கழுதை சூத்து": { s: 3, c: 4 }, // Kazhudhai soothu (donkey ass)
  "பன்னி சூத்து": { s: 3, c: 4 }, // Panni soothu (pig ass)
  "ஆடு புண்டை": { s: 5, c: 5 }, // Aadu pundai (goat cunt)
  "மாடு சுன்னி": { s: 4, c: 4 }, // Maadu sunni (cattle dick)
  "கரடி கூத்தி": { s: 5, c: 5 }, // Karadi koothi (bear cunt)
  "குரங்கு புண்டை": { s: 5, c: 5 }, // Kurangu pundai (monkey cunt)
  "எலி சூத்து": { s: 3, c: 4 }, // Eli soothu (rat ass)
  "பாம்பு சுன்னி": { s: 4, c: 4 }, // Paambu sunni (snake dick)
  "காக்கா கூத்தி": { s: 5, c: 5 }, // Kaakka koothi (crow cunt)
  "நரி கூத்தி": { s: 5, c: 5 }, // Nari koothi (fox cunt)
  "ஓநாய் புண்டை": { s: 5, c: 5 }, // Onaai pundai (wolf cunt)
  "எருமை கூத்தி": { s: 5, c: 5 }, // Erumai koothi (buffalo cunt)
  "எருமை மாடு": { s: 3, c: 4 }, // Erumai maadu (buffalo cattle insult)
  "கோழை": { s: 1, c: 4 }, // Kozhai (coward)
  "கோழை நாய்": { s: 1, c: 4 }, // Kozhai naai (coward dog)
  "பேடி": { s: 1, c: 4 }, // Pedi (coward/eunuch)
  "பேடிப்பயல்": { s: 1, c: 4 }, // Pedippayal (cowardly fellow)
  "தாயோளி மகனே": { s: 5, c: 5 }, // Thayoli magane (motherfucker's son)
  "கூத்தி அடி": { s: 5, c: 5 }, // Koothi adi (cunt hit)
  "புண்டை வெட்டு": { s: 5, c: 5 }, // Pundai vettu (cunt cut)
  "சுன்னி வெட்டு": { s: 4, c: 4 }, // Sunni vettu (dick cut)
  "சூத்து வெடி": { s: 3, c: 4 }, // Soothu vedi (ass explosion)
  "மயிரு கொட்டு": { s: 3, c: 4 }, // Mayiru kottu (pubic hair shed)
  "கூத்தி வழிய": { s: 5, c: 5 }, // Koothi vazhiya (cunt dripping)
  "சுன்னி நிக்குது": { s: 4, c: 4 }, // Sunni nikkudhu (dick standing)
  "சூத்து எரியுது": { s: 3, c: 4 }, // Soothu eriyudhu (ass burning)
  "கூத்தி நாறுது": { s: 5, c: 5 }, // Koothi naarudhu (cunt stinking)
  "சுன்னி கம்பு": { s: 4, c: 4 }, // Sunni kambu (dick pole)
  "கூத்தி குழி": { s: 5, c: 5 }, // Koothi kuzhi (cunt hole)
  "சூத்து குழி": { s: 3, c: 4 }, // Soothu kuzhi (ass hole)
  "மயிரு காடு": { s: 3, c: 4 }, // Mayiru kaadu (pubic hair forest)
  "பூனை கூத்தி": { s: 5, c: 5 }, // Poonai koothi (cat cunt)
  "பூனை சூத்து": { s: 3, c: 4 }, // Poonai soothu (cat ass)

  // ========================================
  // === Extended Romanized Tamil ===
  // ========================================
  "sunni oombu da": { s: 4, c: 5 }, // Suck the dick
  "thevidiya magane": { s: 5, c: 5 }, // Son of a prostitute
  "pundai otha": { s: 5, c: 5 }, // Fuck the cunt
  "soothu otha": { s: 3, c: 5 }, // Fuck the ass
  "mayiru pudungu": { s: 3, c: 5 }, // Pluck the pubic hair
  "koothi adichchi": { s: 5, c: 5 }, // Cunt-hitter
  "oombu vesi": { s: 5, c: 5 }, // Suck prostitute
  "aadu pundai": { s: 5, c: 5 }, // Goat cunt
  "karadi koothi": { s: 5, c: 5 }, // Bear cunt
  "kurangu pundai": { s: 5, c: 5 }, // Monkey cunt
  "eli soothu": { s: 3, c: 5 }, // Rat ass
  "paambu sunni": { s: 4, c: 5 }, // Snake dick
  "kaakka koothi": { s: 5, c: 5 }, // Crow cunt
  "nari koothi": { s: 5, c: 5 }, // Fox cunt
  "onaai pundai": { s: 5, c: 5 }, // Wolf cunt
  "erumai koothi": { s: 5, c: 5 }, // Buffalo cunt
  "erumai maadu": { s: 3, c: 5 }, // Buffalo cattle (insult)
  "kozhai": { s: 1, c: 5 }, // Coward
  "kozhai naai": { s: 1, c: 5 }, // Coward dog
  "pedi": { s: 1, c: 5 }, // Coward/eunuch
  "pedippayal": { s: 1, c: 5 }, // Cowardly fellow
  "thayoli magane": { s: 5, c: 5 }, // Motherfucker's son
  "koothi adi da": { s: 5, c: 5 }, // Hit the cunt (male)
  "pundai vettu da": { s: 5, c: 5 }, // Cut the cunt (male)
  "sunni vettu da": { s: 4, c: 5 }, // Cut the dick (male)
  "soothu vedi": { s: 3, c: 5 }, // Ass explosion
  "mayiru kottu": { s: 3, c: 5 }, // Pubic hair shed
  "koothi vazhiya": { s: 5, c: 5 }, // Cunt dripping
  "sunni nikkudhu": { s: 4, c: 5 }, // Dick standing
  "soothu eriyudhu": { s: 3, c: 5 }, // Ass burning
  "koothi naarudhu": { s: 5, c: 5 }, // Cunt stinking
  "sunni kambu": { s: 4, c: 5 }, // Dick pole
  "koothi kuzhi": { s: 5, c: 5 }, // Cunt hole
  "soothu kuzhi": { s: 3, c: 5 }, // Ass hole
  "mayiru kaadu": { s: 3, c: 5 }, // Pubic hair forest
  "poonai koothi": { s: 5, c: 5 }, // Cat cunt
  "poonai soothu": { s: 3, c: 5 }, // Cat ass

  // ========================================
  // === Extended Madras Bashai ===
  // ========================================
  "area koothi": { s: 5, c: 5 }, // Area cunt (local)
  "area punda": { s: 5, c: 5 }, // Area cunt (local variant)
  "auto koothi": { s: 5, c: 5 }, // Auto-rickshaw cunt
  "bajji punda": { s: 5, c: 5 }, // Fritter cunt (worthless)
  "beedi koothi": { s: 5, c: 5 }, // Cigarette cunt
  "chappal koothi": { s: 5, c: 5 }, // Slipper cunt (cheap)
  "chappal sunni": { s: 4, c: 4 }, // Slipper dick (cheap)
  "dabba koothi": { s: 5, c: 5 }, // Box cunt (worthless)
  "dabba sunni": { s: 4, c: 4 }, // Box dick (worthless)
  "dosai koothi": { s: 5, c: 5 }, // Dosa cunt (common)
  "figure koothi": { s: 5, c: 5 }, // Figure cunt (objectifying)
  "galeej punda": { s: 5, c: 5 }, // Dirty cunt
  "galeej soothu": { s: 3, c: 4 }, // Dirty ass
  "galeej sunni": { s: 4, c: 4 }, // Dirty dick
  "goiyala koothi": { s: 5, c: 5 }, // Ball cunt
  "item punda": { s: 5, c: 5 }, // Item cunt (objectifying variant)
  "item soothu": { s: 3, c: 4 }, // Item ass (objectifying)
  "jollu punda": { s: 5, c: 5 }, // Drool cunt (pervy)
  "kattai punda": { s: 5, c: 5 }, // Wooden cunt (hard)
  "kattai soothu": { s: 3, c: 4 }, // Wooden ass (hard)
  "kettavan koothi": { s: 5, c: 5 }, // Bad man cunt
  "kettava soothu": { s: 3, c: 4 }, // Bad woman ass
  "kodumai punda": { s: 5, c: 5 }, // Torture cunt
  "kodumai sunni": { s: 4, c: 4 }, // Torture dick
  "kuppam koothi": { s: 5, c: 5 }, // Slum cunt
  "kuppam punda otha": { s: 5, c: 5 }, // Slum cunt fuck off
  "local koothi": { s: 5, c: 5 }, // Local cunt
  "local punda": { s: 5, c: 5 }, // Local cunt variant
  "loosu mayiru punda": { s: 5, c: 5 }, // Crazy pubic hair cunt
  "mass koothi": { s: 5, c: 5 }, // Mass cunt (classist)
  "mokka soothu": { s: 3, c: 4 }, // Boring ass
  "mokka sunni": { s: 4, c: 4 }, // Boring dick
  "naatukoothi otha": { s: 5, c: 5 }, // Country cunt fuck off
  "olu koothi": { s: 5, c: 5 }, // Leaking cunt
  "oru pisa illa koothi": { s: 5, c: 5 }, // Not worth a penny cunt
  "paavi koothi": { s: 5, c: 5 }, // Sinful cunt
  "paavi punda": { s: 5, c: 5 }, // Sinful cunt variant
  "rowdy koothi": { s: 5, c: 5 }, // Rowdy cunt
  "semma waste koothi": { s: 5, c: 5 }, // Super waste cunt
  "settai punda": { s: 5, c: 5 }, // Mischief cunt
  "settai soothu": { s: 3, c: 4 }, // Mischief ass
  "somberi punda": { s: 5, c: 5 }, // Lazy cunt
  "somberi soothu": { s: 3, c: 4 }, // Lazy ass
  "thara local punda": { s: 5, c: 5 }, // Very local cunt (classist)
  "thara local soothu": { s: 3, c: 4 }, // Very local ass (classist)
  "theri koothi": { s: 5, c: 5 }, // Street cunt
  "theri punda": { s: 5, c: 5 }, // Street cunt variant
  "waste punda": { s: 5, c: 5 }, // Waste cunt
  "waste soothu": { s: 3, c: 4 }, // Waste ass
  "waste sunni": { s: 4, c: 4 }, // Waste dick

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "hutti punda otha": { s: 1, c: 4 }, // Idiot cunt fuck off (SL)
  "kundi adi da": { s: 3, c: 4 }, // Ass hit (SL)
  "kundi sappi": { s: 3, c: 4 }, // Ass sucker (SL)
  "kundi nakki": { s: 3, c: 4 }, // Ass licker (SL)
  "modda oombu da": { s: 4, c: 4 }, // Suck the dick (SL)
  "modda sappi": { s: 4, c: 4 }, // Dick sucker (SL)
  "ponnaya koothi": { s: 5, c: 5 }, // Effeminate man cunt (SL)
  "ponnaya punda": { s: 5, c: 5 }, // Effeminate man cunt (SL variant)
  "ponnaya sunni": { s: 4, c: 4 }, // Effeminate man dick (SL)
  "salli vesi koothi": { s: 5, c: 5 }, // Cheap prostitute cunt (SL)
  "salli vesi punda": { s: 5, c: 5 }, // Cheap prostitute cunt (SL)
  "sunni vetti da": { s: 4, c: 4 }, // Dick cutting (SL)
  "thambiya punda otha": { s: 5, c: 5 }, // Brother cunt fuck off (SL)
  "umbala kundi sappi": { s: 3, c: 4 }, // Your ass sucker (SL)
  "umbala kundi otha": { s: 3, c: 5 }, // Your ass fuck off (SL)
  "kundi otha da": { s: 3, c: 5 }, // Ass fuck off (SL)
  "umbala amma kundi": { s: 3, c: 4 }, // Your mother's ass (SL)
  "umbala thathi kundi": { s: 1, c: 4 }, // Your father's ass (SL)
  "umbala akka kundi": { s: 3, c: 4 }, // Your sister's ass (SL)
  "rathu kundi": { s: 3, c: 4 }, // Red ass (SL insult)
  "modda illatha": { s: 4, c: 4 }, // Without a dick (SL impotent insult)
  "hutti kundi": { s: 1, c: 4 }, // Idiot ass (SL)
  "maaraadi kundi": { s: 1, c: 4 }, // Stupid ass (SL)
  "gon punda": { s: 1, c: 4 }, // Stupid cunt (SL)
  "gon soothu": { s: 1, c: 4 }, // Stupid ass (SL)
  "gon sunni": { s: 1, c: 4 }, // Stupid dick (SL)
  "yakko kundi": { s: 3, c: 4 }, // Friend's ass (SL)
  "yakko punda": { s: 5, c: 5 }, // Friend's cunt (SL)

  // ========================================
  // === Extended Malaysian Tamil ===
  // ========================================
  "bodoh punda koothi": { s: 1, c: 4 }, // Stupid cunt (MY)
  "dei pundek sial": { s: 5, c: 5 }, // Hey cunt damn (MY)
  "keling koothi otha": { s: 5, c: 5 }, // Racial slur cunt fuck off (MY)
  "machan punda otha": { s: 5, c: 5 }, // Friend's cunt fuck off (MY)
  "mabuk koothi otha": { s: 1, c: 3 }, // Drunk cunt fuck off (MY)
  "pukimak koothi": { s: 5, c: 5 }, // Mother's cunt (MY compound)
  "pundek amma otha": { s: 5, c: 5 }, // Cunt mother fuck off (MY)
  "sial pundek otha": { s: 5, c: 5 }, // Damn cunt fuck off (MY)
  "thayoli pundek otha": { s: 5, c: 5 }, // Motherfucker cunt fuck off (MY)
  "thambi pundek otha": { s: 5, c: 5 }, // Brother cunt fuck off (MY)
  "bodoh sunni": { s: 1, c: 4 }, // Stupid dick (MY)
  "bodoh soothu": { s: 1, c: 4 }, // Stupid ass (MY)
  "sial sunni": { s: 4, c: 4 }, // Damn dick (MY)
  "sial soothu": { s: 3, c: 4 }, // Damn ass (MY)
  "keling sunni": { s: 5, c: 4 }, // Racial slur dick (MY)
  "pukimak sunni": { s: 5, c: 5 }, // Mother's cunt dick (MY)
  "mangkuk punda": { s: 1, c: 4 }, // Bowl cunt (MY idiom for stupid)
  "babi punda": { s: 5, c: 5 }, // Pig cunt (MY Malay mix)
  "babi koothi": { s: 5, c: 5 }, // Pig cunt (MY variant)
  "babi soothu": { s: 3, c: 4 }, // Pig ass (MY)
  "babi sunni": { s: 4, c: 4 }, // Pig dick (MY)
  "haram punda": { s: 5, c: 5 }, // Forbidden cunt (MY)
  "haram koothi": { s: 5, c: 5 }, // Forbidden cunt (MY variant)
  "lancau punda": { s: 5, c: 5 }, // Dick cunt (MY Malay)
  "pantat koothi": { s: 5, c: 5 }, // Ass cunt (MY Malay)
  "sundal koothi": { s: 5, c: 5 }, // Prostitute cunt (MY)
  "sundal punda": { s: 5, c: 5 }, // Prostitute cunt (MY)

  // ========================================
  // === Extended Singapore Tamil ===
  // ========================================
  "kaneh pundai otha": { s: 1, c: 4 }, // Stupid cunt fuck off (SG)
  "machan koothi otha": { s: 5, c: 5 }, // Friend's cunt fuck off (SG)
  "thambi sunni otha": { s: 4, c: 5 }, // Brother dick fuck off (SG)
  "bodoh otha da": { s: 1, c: 4 }, // Stupid fuck off (SG)
  "sial otha da": { s: 3, c: 5 }, // Damn fuck off (SG)
  "knn pundek otha": { s: 5, c: 5 }, // KNN cunt fuck off (SG)
  "pundek neh otha": { s: 5, c: 5 }, // Cunt there fuck off (SG)
  "mayiru neh otha": { s: 3, c: 5 }, // Pubic hair there fuck off (SG)
  "kaneh soothu": { s: 1, c: 4 }, // Stupid ass (SG)
  "kaneh sunni": { s: 1, c: 4 }, // Stupid dick (SG)
  "machan soothu": { s: 3, c: 4 }, // Friend's ass (SG)
  "machan sunni": { s: 4, c: 4 }, // Friend's dick (SG)
  "thambi koothi": { s: 5, c: 5 }, // Brother's cunt (SG)
  "thambi soothu": { s: 3, c: 4 }, // Brother's ass (SG)
  "abang punda": { s: 5, c: 5 }, // Brother cunt (SG Malay)
  "abang koothi": { s: 5, c: 5 }, // Brother cunt (SG variant)
  "keling bodoh": { s: 1, c: 4 }, // Racial slur stupid (SG)

  // ========================================
  // === Extended Kongu Tamil ===
  // ========================================
  "koothadi da": { s: 5, c: 5 }, // Cunt-hitter (Kongu male)
  "koothadi di": { s: 5, c: 5 }, // Cunt-hitter (Kongu female)
  "punda vazhinjirukku da": { s: 5, c: 5 }, // Cunt is slippery (Kongu male)
  "sunni thattu otha": { s: 4, c: 5 }, // Dick slap fuck off (Kongu)
  "okkara myre da": { s: 3, c: 4 }, // Sitting pubic hair (Kongu male)
  "poola oombura di": { s: 4, c: 4 }, // Dick sucking (Kongu female)
  "koothi vaari da": { s: 5, c: 5 }, // Cunt collected (Kongu male)
  "punda kalaichi da": { s: 5, c: 5 }, // Cunt mixed (Kongu male)
  "soothu vedichi da": { s: 3, c: 4 }, // Ass exploded (Kongu male)

  // ========================================
  // === Extended Madurai Tamil ===
  // ========================================
  "koothi na polappa": { s: 5, c: 5 }, // Cunt dog disaster (Madurai variant)
  "punda polappa da": { s: 5, c: 5 }, // Cunt disaster (Madurai male)
  "mayiru da polappa otha": { s: 3, c: 5 }, // Pubic hair disaster fuck off (Madurai)
  "sunni koothi polappa da": { s: 5, c: 5 }, // Dick cunt disaster (Madurai male)
  "otha polappa da": { s: 3, c: 5 }, // Fuck off disaster (Madurai male)
  "soothu polappa da": { s: 3, c: 4 }, // Ass disaster (Madurai male)
  "dei punda polappa otha": { s: 5, c: 5 }, // Hey cunt disaster fuck off (Madurai)
  "thevidiya polappa otha": { s: 5, c: 5 }, // Prostitute disaster fuck off (Madurai)
  "naaye polappa otha": { s: 3, c: 5 }, // Dog disaster fuck off (Madurai)
  "thayoli polappa": { s: 5, c: 5 }, // Motherfucker disaster (Madurai)
  "vesi polappa": { s: 5, c: 4 }, // Prostitute disaster (Madurai)
  "kazhudhai polappa": { s: 3, c: 4 }, // Donkey disaster (Madurai)
  "panni polappa": { s: 3, c: 4 }, // Pig disaster (Madurai)
  "erumai polappa": { s: 3, c: 4 }, // Buffalo disaster (Madurai)

  // ========================================
  // === Extended Compound Tamil Insults ===
  // ========================================
  "thevidiya paiyan otha punda koothi": { s: 5, c: 4 }, // Son of prostitute compound
  "koothi magane otha punda naai": { s: 5, c: 5 }, // Son of cunt compound
  "thayoli paiyan koothi sunni otha": { s: 5, c: 5 }, // Motherfucker's son compound
  "otha punda koothi mayiru sunni": { s: 5, c: 5 }, // Fuck off cunt compound
  "naai koothi thevidiya punda soothu": { s: 5, c: 5 }, // Dog cunt prostitute compound
  "panni punda otha koothi sunni": { s: 5, c: 5 }, // Pig cunt compound
  "vesi koothi mayiru punda soothu": { s: 5, c: 5 }, // Prostitute cunt compound
  "thevidiya soothu koothi sunni otha": { s: 5, c: 4 }, // Prostitute ass compound
  "otha da thevidiya paiyan koothi": { s: 5, c: 5 }, // Fuck off son of prostitute
  "oombu da sunni koothi punda": { s: 5, c: 5 }, // Suck it dick cunt compound
  "sappi da koothi mayiru punda": { s: 5, c: 5 }, // Suck it cunt compound
  "naai koothi vesi punda otha": { s: 5, c: 5 }, // Dog cunt prostitute fuck off
  "panni sunni koothi otha da": { s: 5, c: 5 }, // Pig dick cunt fuck off
  "otha loosu koothi mayiru punda": { s: 5, c: 5 }, // Fuck off crazy cunt compound
  "thayoli batch koothi punda": { s: 5, c: 5 }, // Motherfucker batch cunt
  "ommala koothi mayiru otha punda": { s: 5, c: 5 }, // Mother's cunt compound
  "oor koothi vesi punda otha da": { s: 5, c: 5 }, // Village cunt prostitute

  // ========================================
  // === Caste-Based Slurs (Tamil) ===
  // ========================================
  "paraiyan": { s: 5, c: 4 }, // Dalit caste slur
  "paraichi": { s: 5, c: 4 }, // Female Dalit slur
  "chakkiliya": { s: 5, c: 4 }, // Leather-worker caste slur
  "pallan": { s: 5, c: 4 }, // Agricultural caste slur
  "pallaichi": { s: 5, c: 4 }, // Female form
  "vannan": { s: 5, c: 4 }, // Washerman caste (derogatory)
  "vannaathi": { s: 5, c: 4 }, // Female washerman (derogatory)
  "thotti": { s: 5, c: 4 }, // Sweeper caste (derogatory)
  "thottichi": { s: 5, c: 4 }, // Female sweeper (derogatory)
  "paarpan": { s: 5, c: 4 }, // Brahmin (derogatory)
  "paarpathi": { s: 5, c: 4 }, // Female Brahmin (derogatory)
  "kulam kettavan": { s: 5, c: 4 }, // One of ruined caste
  "jathi thaazhndha": { s: 5, c: 4 }, // Of low caste
  "keezh jathi": { s: 5, c: 4 }, // Low caste
  "thazhntha jathi": { s: 5, c: 4 }, // Lowered caste
  "kulam keduthavan": { s: 5, c: 4 }, // One who ruined caste
  "keezh jaathi koothi": { s: 5, c: 5 }, // Low caste cunt
  "keezh jaathi punda": { s: 5, c: 5 }, // Low caste cunt variant
  "paraiyan koothi": { s: 5, c: 5 }, // Dalit caste cunt
  "paraiyan punda": { s: 5, c: 5 }, // Dalit caste cunt variant
  "chakkiliya koothi": { s: 5, c: 5 }, // Leather-worker caste cunt
  "thotti koothi": { s: 5, c: 5 }, // Sweeper caste cunt

  // ========================================
  // === Tamil Caste Slurs - Script ===
  // ========================================
  "பறையன்": { s: 5, c: 4 }, // Paraiyan (Dalit caste slur)
  "பறைச்சி": { s: 5, c: 4 }, // Paraichi (female Dalit slur)
  "சக்கிலிய": { s: 5, c: 4 }, // Chakkiliya (leather-worker caste)
  "பள்ளன்": { s: 5, c: 4 }, // Pallan (agricultural caste slur)
  "பள்ளச்சி": { s: 5, c: 4 }, // Pallaichi (female form)
  "வண்ணான்": { s: 5, c: 4 }, // Vannan (washerman derogatory)
  "தோட்டி": { s: 5, c: 4 }, // Thotti (sweeper derogatory)
  "பாப்பான்": { s: 5, c: 4 }, // Paarpan (Brahmin derogatory)
  "குலம் கெட்டவன்": { s: 5, c: 4 }, // Kulam kettavan (ruined caste)
  "கீழ் ஜாதி": { s: 5, c: 4 }, // Keezh jaathi (low caste)

  // ========================================
  // === Extended Tanglish Mix ===
  // ========================================
  "fucking otha da": { s: 3, c: 5 }, // Fucking fuck off (Tanglish male)
  "bloody koothi di": { s: 5, c: 5 }, // Bloody cunt (Tanglish female)
  "damn thevidiya otha": { s: 5, c: 5 }, // Damn prostitute fuck off
  "fucking punda otha": { s: 5, c: 5 }, // Fucking cunt fuck off
  "shit mayiru otha": { s: 3, c: 5 }, // Shit pubic hair fuck off
  "asshole soothu otha": { s: 3, c: 5 }, // Asshole ass fuck off
  "bastard thevidiya paiyan otha": { s: 3, c: 4 }, // Bastard prostitute's son fuck off
  "bitch koothi otha": { s: 5, c: 5 }, // Bitch cunt fuck off
  "son of a thevidiya otha": { s: 5, c: 5 }, // Son of a prostitute fuck off
  "stupid muttaal otha": { s: 1, c: 4 }, // Stupid fool fuck off
  "shut up koothi otha": { s: 5, c: 5 }, // Shut up cunt fuck off
  "fuck off otha da punda": { s: 5, c: 5 }, // Fuck off cunt compound
  "die da koothi otha": { s: 5, c: 5 }, // Die cunt fuck off
  "ugly koothi vesi": { s: 1, c: 4 }, // Ugly cunt prostitute
  "cheap vesi koothi otha": { s: 5, c: 5 }, // Cheap prostitute cunt fuck off
  "dirty soothu otha": { s: 3, c: 5 }, // Dirty ass fuck off
  "loser punda otha": { s: 1, c: 4 }, // Loser cunt fuck off
  "trash koothi otha": { s: 5, c: 5 }, // Trash cunt fuck off
  "garbage punda otha": { s: 5, c: 5 }, // Garbage cunt fuck off
  "noob koothi otha": { s: 5, c: 5 }, // Noob cunt fuck off (gaming)
  "toxic punda otha": { s: 5, c: 5 }, // Toxic cunt fuck off (gaming)
  "cancer koothi": { s: 5, c: 5 }, // Cancer cunt (gaming)
  "feeder punda": { s: 5, c: 5 }, // Feeder cunt (gaming)
  "bot koothi": { s: 5, c: 5 }, // Bot cunt (gaming)
  "hacker otha": { s: 3, c: 5 }, // Hacker fuck off (gaming)
  "camper punda": { s: 5, c: 5 }, // Camper cunt (gaming)
  "uninstall pannu da koothi": { s: 5, c: 5 }, // Uninstall cunt (gaming)
  "delete pannu da punda": { s: 5, c: 5 }, // Delete cunt (gaming)

  // ========================================
  // === Extended Threats (Tamil) ===
  // ========================================
  "un soothu poduven": { s: 5, c: 5 }, // I'll beat your ass
  "un pundai kedhuppen": { s: 5, c: 5 }, // I'll rip your cunt
  "un sunni odaippen": { s: 5, c: 5 }, // I'll break your dick
  "un goiyala madippen": { s: 5, c: 5 }, // I'll crush your balls
  "soothu la sunni vaippen": { s: 5, c: 5 }, // I'll put dick in ass
  "un koothi keduppen": { s: 5, c: 5 }, // I'll ruin your cunt
  "un thala odaippen": { s: 5, c: 5 }, // I'll break your head
  "un pal udaippen": { s: 5, c: 5 }, // I'll break your teeth
  "un elumbu odaippen": { s: 5, c: 5 }, // I'll break your bones
  "kaalai odaippen": { s: 5, c: 5 }, // I'll break your legs
  "kaiyai odaippen": { s: 5, c: 5 }, // I'll break your arms
  "naai ku theenam pottruven": { s: 5, c: 5 }, // I'll feed you to dogs
  "drain la thallruven": { s: 5, c: 5 }, // I'll push you in drain
  "gutter la thallruven": { s: 5, c: 5 }, // I'll push you in gutter
  "uyiroda puthaippen": { s: 5, c: 5 }, // I'll bury you alive
  "thol urichen": { s: 5, c: 5 }, // I'll skin you
  "keezhi kizhippen": { s: 5, c: 5 }, // I'll tear you apart
  "adichippen": { s: 5, c: 5 }, // I'll beat you
  "kolluven": { s: 5, c: 5 }, // I'll kill you
  "saaga adichippen": { s: 5, c: 5 }, // I'll beat you to death

  // ========================================
  // === Tamil Threats - Script ===
  // ========================================
  "உன் சூத்து போடுவேன்": { s: 5, c: 5 }, // I'll beat your ass
  "உன் புண்டை கெடுப்பேன்": { s: 5, c: 5 }, // I'll rip your cunt
  "உன் சுன்னி ஒடைப்பேன்": { s: 5, c: 5 }, // I'll break your dick
  "உன் கூத்தி கெடுப்பேன்": { s: 5, c: 5 }, // I'll ruin your cunt
  "உன் தலை ஒடைப்பேன்": { s: 5, c: 5 }, // I'll break your head
  "உன் பல் உடைப்பேன்": { s: 5, c: 5 }, // I'll break your teeth
  "உன் எலும்பு ஒடைப்பேன்": { s: 5, c: 5 }, // I'll break your bones
  "நாய்க்கு தீனம் போட்டுருவேன்": { s: 5, c: 5 }, // I'll feed you to dogs
  "உயிரோட புதைப்பேன்": { s: 5, c: 5 }, // I'll bury you alive
  "கொல்லுவேன்": { s: 5, c: 5 }, // I'll kill you
  "சாக அடிச்சிப்பேன்": { s: 5, c: 5 }, // I'll beat to death

  // ========================================
  // === Extended Tamil Body Part Insults ===
  // ========================================
  "soothu mudichu": { s: 4, c: 3 }, // Ass knot (insult)
  "pundai mudichu": { s: 5, c: 5 }, // Cunt knot (insult)
  "sunni mudichu": { s: 4, c: 3 }, // Dick knot (insult)
  "koothi thuni": { s: 5, c: 5 }, // Cunt cloth (insult)
  "soothu thuni": { s: 4, c: 3 }, // Ass cloth (insult)
  "sunni thuni": { s: 4, c: 3 }, // Dick cloth (insult)
  "pundai thol": { s: 5, c: 5 }, // Cunt skin (insult)
  "soothu thol": { s: 4, c: 3 }, // Ass skin (insult)
  "sunni thol": { s: 4, c: 3 }, // Dick skin (insult)
  "koothi kaadhu": { s: 5, c: 5 }, // Cunt ear (insult)
  "koothi kan": { s: 5, c: 5 }, // Cunt eye (insult)
  "soothu kan": { s: 4, c: 3 }, // Ass eye (asshole)
  "sunni kan": { s: 4, c: 3 }, // Dick eye (insult)
  "pundai mooku": { s: 5, c: 5 }, // Cunt nose (insult)
  "soothu mooku": { s: 4, c: 3 }, // Ass nose (insult)
  "sunni mooku": { s: 4, c: 3 }, // Dick nose (insult)

  // ========================================
  // === Extended Scatological Tamil ===
  // ========================================
  "theeni koothi": { s: 5, c: 5 }, // Shit cunt
  "theeni punda": { s: 5, c: 5 }, // Shit cunt variant
  "theeni sunni": { s: 4, c: 5 }, // Shit dick
  "theeni soothu": { s: 3, c: 5 }, // Shit ass
  "moothram kudi da": { s: 3, c: 4 }, // Drink urine
  "moothram koothi": { s: 5, c: 5 }, // Urine cunt
  "moothram sunni": { s: 4, c: 4 }, // Urine dick
  "kusu koothi": { s: 5, c: 5 }, // Fart cunt
  "kusu punda": { s: 5, c: 5 }, // Fart cunt variant
  "kusu sunni": { s: 4, c: 4 }, // Fart dick
  "kusu soothu": { s: 3, c: 4 }, // Fart ass
  "theeni thinnu da": { s: 3, c: 5 }, // Eat shit (variant)
  "moothram kudi koothi": { s: 5, c: 5 }, // Drink urine cunt
  "drainage koothi": { s: 5, c: 5 }, // Drainage cunt
  "drainage punda": { s: 5, c: 5 }, // Drainage cunt variant
  "drainage sunni": { s: 4, c: 4 }, // Drainage dick
  "sewage koothi": { s: 5, c: 5 }, // Sewage cunt
  "sewage punda": { s: 5, c: 5 }, // Sewage cunt variant
  "kuppai thotti koothi": { s: 5, c: 5 }, // Garbage bin cunt
  "kuppai thotti punda": { s: 5, c: 5 }, // Garbage bin cunt variant
  "kuppai thotti sunni": { s: 4, c: 4 }, // Garbage bin dick

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0tha": { s: 3, c: 5 }, // Otha evasion
  "th3vidiya": { s: 3, c: 5 }, // Thevidiya evasion
  "k00thi": { s: 3, c: 5 }, // Koothi evasion
  "p0nda": { s: 3, c: 5 }, // Punda evasion
  "p0ndai": { s: 3, c: 5 }, // Pundai evasion
  "s00thu": { s: 3, c: 5 }, // Soothu evasion
  "s0nni": { s: 3, c: 5 }, // Sunni evasion
  "m@yiru": { s: 3, c: 5 }, // Mayiru evasion
  "th@yoli": { s: 3, c: 5 }, // Thayoli evasion
  "v3si": { s: 3, c: 5 }, // Vesi evasion
  "p0olu": { s: 3, c: 5 }, // Poolu evasion
  "0mbu": { s: 3, c: 5 }, // Oombu evasion
  "s@ppi": { s: 3, c: 5 }, // Sappi evasion
  "n@ai": { s: 3, c: 5 }, // Naai evasion
  "p@nni": { s: 3, c: 5 }, // Panni evasion
  "k@zhudhai": { s: 3, c: 5 }, // Kazhudhai evasion

  // ========================================
  // === More Internet Abbreviations ===
  // ========================================
  "oth myr pnda": { s: 2, c: 3 }, // Otha mayiru punda abbreviation
  "tvdya pyn kth": { s: 2, c: 3 }, // Thevidiya paiyan koothi abbreviation
  "kth mgne oth pnd": { s: 2, c: 3 }, // Koothi magane otha punda abbreviation
  "snni mbu da": { s: 2, c: 3 }, // Sunni oombu da abbreviation
  "sthu nkki oth": { s: 2, c: 3 }, // Soothu nakki otha abbreviation
  "pndai nkki oth": { s: 2, c: 3 }, // Pundai nakki otha abbreviation
  "oth kth myr pnd": { s: 2, c: 3 }, // Otha koothi mayiru punda abbreviation
  "dei othmyr kth pnd": { s: 2, c: 3 }, // Dei otha mayiru koothi punda abbreviation
  "tvdya sthu kth": { s: 2, c: 3 }, // Thevidiya soothu koothi abbreviation
  "vsi kth pnd": { s: 2, c: 3 }, // Vesi koothi punda abbreviation
  "pnni kth myr": { s: 2, c: 3 }, // Panni koothi mayiru abbreviation
  "oth lsu kth myr": { s: 2, c: 3 }, // Otha loosu koothi mayiru abbreviation
  "nai pnda oth": { s: 2, c: 3 }, // Naai punda otha abbreviation
  "thyoli pnd kth": { s: 2, c: 3 }, // Thayoli punda koothi abbreviation
  "kth vsi myr oth": { s: 2, c: 3 }, // Koothi vesi mayiru otha abbreviation

  // ========================================
  // === Extended Animal Insults (Tamil) ===
  // ========================================
  "erumai koothi otha": { s: 5, c: 5 }, // Buffalo cunt fuck off
  "erumai punda otha": { s: 5, c: 5 }, // Buffalo cunt fuck off variant
  "erumai soothu otha": { s: 3, c: 5 }, // Buffalo ass fuck off
  "erumai sunni otha": { s: 4, c: 5 }, // Buffalo dick fuck off
  "kurangu koothi otha": { s: 5, c: 5 }, // Monkey cunt fuck off
  "kurangu punda otha": { s: 5, c: 5 }, // Monkey cunt fuck off variant
  "kurangu soothu otha": { s: 3, c: 5 }, // Monkey ass fuck off
  "kurangu sunni otha": { s: 4, c: 5 }, // Monkey dick fuck off
  "eli koothi otha": { s: 5, c: 5 }, // Rat cunt fuck off
  "eli punda otha": { s: 5, c: 5 }, // Rat cunt fuck off variant
  "paambu koothi otha": { s: 5, c: 5 }, // Snake cunt fuck off
  "paambu punda otha": { s: 5, c: 5 }, // Snake cunt fuck off variant
  "aadu koothi otha": { s: 5, c: 5 }, // Goat cunt fuck off
  "aadu soothu otha": { s: 3, c: 5 }, // Goat ass fuck off
  "aadu sunni otha": { s: 4, c: 5 }, // Goat dick fuck off
  "karadi punda otha": { s: 5, c: 5 }, // Bear cunt fuck off
  "karadi soothu otha": { s: 3, c: 5 }, // Bear ass fuck off
  "nari punda otha": { s: 5, c: 5 }, // Fox cunt fuck off
  "nari soothu otha": { s: 3, c: 5 }, // Fox ass fuck off
  "onaai koothi otha": { s: 5, c: 5 }, // Wolf cunt fuck off
  "onaai soothu otha": { s: 3, c: 5 }, // Wolf ass fuck off
  "kaakka punda otha": { s: 5, c: 5 }, // Crow cunt fuck off
  "poonai punda otha": { s: 5, c: 5 }, // Cat cunt fuck off
  "poonai sunni otha": { s: 4, c: 5 }, // Cat dick fuck off

  // ========================================
  // === Extended Tamil Religious Insults ===
  // ========================================
  "kovil koothi": { s: 5, c: 5 }, // Temple cunt (sacrilegious)
  "kovil punda": { s: 5, c: 5 }, // Temple cunt variant
  "kovil sunni": { s: 4, c: 3 }, // Temple dick (sacrilegious)
  "sami koothi": { s: 5, c: 5 }, // God cunt (sacrilegious)
  "sami punda": { s: 5, c: 5 }, // God cunt variant
  "sami sunni": { s: 4, c: 3 }, // God dick (sacrilegious)
  "pujari koothi": { s: 5, c: 5 }, // Priest cunt
  "pujari punda": { s: 5, c: 5 }, // Priest cunt variant
  "pujari sunni": { s: 4, c: 3 }, // Priest dick
  "maulvi koothi": { s: 5, c: 5 }, // Maulvi cunt
  "maulvi punda": { s: 5, c: 5 }, // Maulvi cunt variant
  "church koothi": { s: 5, c: 5 }, // Church cunt
  "church punda": { s: 5, c: 5 }, // Church cunt variant
  "mosque koothi": { s: 5, c: 5 }, // Mosque cunt
  "mosque punda": { s: 5, c: 5 }, // Mosque cunt variant

  // ========================================
  // === Extended Tamil Script Body Part ===
  // ========================================
  "சூத்து முடிச்சு": { s: 4, c: 3 }, // Soothu mudichu (ass knot)
  "புண்டை முடிச்சு": { s: 5, c: 5 }, // Pundai mudichu (cunt knot)
  "சுன்னி முடிச்சு": { s: 4, c: 3 }, // Sunni mudichu (dick knot)
  "கூத்தி துணி": { s: 5, c: 5 }, // Koothi thuni (cunt cloth)
  "சூத்து துணி": { s: 4, c: 3 }, // Soothu thuni (ass cloth)
  "சுன்னி துணி": { s: 4, c: 3 }, // Sunni thuni (dick cloth)
  "கூத்தி காது": { s: 5, c: 5 }, // Koothi kaadhu (cunt ear)
  "கூத்தி கண்": { s: 5, c: 5 }, // Koothi kan (cunt eye)
  "சூத்து கண்": { s: 4, c: 3 }, // Soothu kan (ass eye)
  "சுன்னி கண்": { s: 4, c: 3 }, // Sunni kan (dick eye)
  "புண்டை மூக்கு": { s: 5, c: 5 }, // Pundai mooku (cunt nose)
  "சூத்து மூக்கு": { s: 4, c: 3 }, // Soothu mooku (ass nose)
  "சுன்னி மூக்கு": { s: 4, c: 3 }, // Sunni mooku (dick nose)
  "எருமை கூத்தி ஓத்தா": { s: 5, c: 5 }, // Erumai koothi otha (buffalo cunt fuck off)
  "குரங்கு கூத்தி ஓத்தா": { s: 5, c: 5 }, // Kurangu koothi otha (monkey cunt fuck off)
  "பூனை புண்ட ஓத்தா": { s: 5, c: 5 }, // Poonai punda otha (cat cunt fuck off)
  "ஆடு புண்டை ஓத்தா": { s: 5, c: 5 }, // Aadu pundai otha (goat cunt fuck off)
  "நரி கூத்தி ஓத்தா": { s: 5, c: 5 }, // Nari koothi otha (fox cunt fuck off)

  // ========================================
  // === Extended Tamil Scatological Script ===
  // ========================================
  "தீனி கூத்தி": { s: 5, c: 5 }, // Theeni koothi (shit cunt)
  "தீனி புண்ட": { s: 5, c: 5 }, // Theeni punda (shit cunt variant)
  "தீனி சுன்னி": { s: 4, c: 5 }, // Theeni sunni (shit dick)
  "தீனி சூத்து": { s: 3, c: 5 }, // Theeni soothu (shit ass)
  "மூத்திரம் குடி டா": { s: 3, c: 4 }, // Moothram kudi da (drink urine)
  "குசு கூத்தி": { s: 5, c: 5 }, // Kusu koothi (fart cunt)
  "குசு புண்ட": { s: 5, c: 5 }, // Kusu punda (fart cunt variant)
  "குசு சுன்னி": { s: 4, c: 4 }, // Kusu sunni (fart dick)
  "குசு சூத்து": { s: 3, c: 4 }, // Kusu soothu (fart ass)
  "குப்பை தொட்டி கூத்தி": { s: 5, c: 5 }, // Kuppai thotti koothi (garbage bin cunt)
  "டிரெய்னேஜ் கூத்தி": { s: 5, c: 5 }, // Drainage koothi (drainage cunt)
  "சீவேஜ் கூத்தி": { s: 5, c: 5 }, // Sewage koothi (sewage cunt)

  // ========================================
  // === More Extended Tamil Compounds ===
  // ========================================
  "un amma oor koothi": { s: 3, c: 5 }, // Your mother is a village slut
  "un amma pacha vesi": { s: 5, c: 5 }, // Your mother is a total prostitute
  "un akka oor vesi": { s: 5, c: 5 }, // Your sister is a village prostitute
  "un appa koothi payale": { s: 1, c: 4 }, // Your father is a cunt fellow
  "un kudumbam muzhusum koothi": { s: 5, c: 5 }, // Your entire family is cunts
  "un vaamsam muzhusum vesi": { s: 5, c: 5 }, // Your entire lineage is prostitutes
  "un amma ku sunni oombu tha theriyum": { s: 4, c: 5 }, // Your mother only knows dick sucking
  "un akka ku koothi okkura tha theriyum": { s: 5, c: 5 }, // Your sister only knows cunt fucking
  "un amma oor naai koothi": { s: 5, c: 5 }, // Your mother is a village dog cunt
  "un amma panni koothi vesi": { s: 5, c: 5 }, // Your mother is a pig cunt prostitute
  "un akka naai punda vesi": { s: 5, c: 5 }, // Your sister is a dog cunt prostitute
  "un amma kazhudhai koothi": { s: 5, c: 5 }, // Your mother is a donkey cunt
  "un akka erumai koothi": { s: 5, c: 5 }, // Your sister is a buffalo cunt
  "un appa naai sunni": { s: 1, c: 4 }, // Your father is a dog dick
  "un amma sunni oomburadhu paathurukken": { s: 4, c: 5 }, // I've seen your mother suck dick
  "un akka soothu thara paathurukken": { s: 3, c: 5 }, // I've seen your sister give ass
  "un amma ku naai okkum": { s: 3, c: 5 }, // Dogs fuck your mother
  "un amma ku panni okkum": { s: 3, c: 5 }, // Pigs fuck your mother
  "un amma ku kazhudhai okkum": { s: 3, c: 5 }, // Donkeys fuck your mother
  "un amma ku erumai okkum": { s: 3, c: 5 }, // Buffaloes fuck your mother
  "un amma ku aadu okkum": { s: 3, c: 5 }, // Goats fuck your mother
  "un amma ku kurangu okkum": { s: 3, c: 5 }, // Monkeys fuck your mother
  "un amma ku eli okkum": { s: 3, c: 5 }, // Rats fuck your mother
  "un amma ku paambu okkum": { s: 3, c: 5 }, // Snakes fuck your mother
  "un amma hijra": { s: 3, c: 5 }, // Your mother is a eunuch
  "un appa hijra": { s: 1, c: 4 }, // Your father is a eunuch
  "un akka hijra": { s: 3, c: 5 }, // Your sister is a eunuch
  "hijra koothi": { s: 5, c: 5 }, // Eunuch cunt
  "hijra punda": { s: 5, c: 5 }, // Eunuch cunt variant
  "hijra sunni": { s: 4, c: 5 }, // Eunuch dick
  "hijra soothu": { s: 3, c: 5 }, // Eunuch ass
  "pottai vesi": { s: 5, c: 5 }, // Eunuch prostitute
  "pottai koothi vesi": { s: 5, c: 5 }, // Eunuch cunt prostitute
  "aravani koothi": { s: 5, c: 5 }, // Third-gender cunt (derogatory)
  "thirunangai koothi": { s: 5, c: 5 }, // Trans woman cunt (derogatory use)
  "number 9 koothi": { s: 5, c: 5 }, // Number 9 cunt (slang for eunuch)
  "pottal koothi": { s: 5, c: 5 }, // Eunuch cunt variant
  "pottal sunni": { s: 4, c: 5 }, // Eunuch dick variant

  // ========================================
  // === More Extended Tamil Script ===
  // ========================================
  "உன் அம்மா ஊர் கூத்தி": { s: 3, c: 4 }, // Your mother village slut
  "உன் அம்மா பச்ச வேசி": { s: 5, c: 4 }, // Your mother total prostitute
  "உன் அக்கா ஊர் வேசி": { s: 5, c: 4 }, // Your sister village prostitute
  "உன் குடும்பம் முழுசும் கூத்தி": { s: 5, c: 5 }, // Entire family cunts
  "உன் வம்சம் முழுசும் வேசி": { s: 5, c: 4 }, // Entire lineage prostitutes
  "உன் அம்மா கழுதை கூத்தி": { s: 5, c: 5 }, // Your mother donkey cunt
  "உன் அக்கா எருமை கூத்தி": { s: 5, c: 5 }, // Your sister buffalo cunt
  "உன் அம்மாக்கு நாய் ஒக்கும்": { s: 3, c: 5 }, // Dogs fuck your mother
  "உன் அம்மாக்கு பன்னி ஒக்கும்": { s: 3, c: 5 }, // Pigs fuck your mother
  "உன் அம்மாக்கு கழுதை ஒக்கும்": { s: 3, c: 5 }, // Donkeys fuck your mother
  "உன் அம்மா ஹிஜ்ரா": { s: 3, c: 4 }, // Your mother eunuch
  "உன் அப்பா ஹிஜ்ரா": { s: 1, c: 4 }, // Your father eunuch
  "ஹிஜ்ரா கூத்தி": { s: 5, c: 5 }, // Eunuch cunt
  "பொட்டை வேசி": { s: 5, c: 4 }, // Eunuch prostitute
  "அரவாணி கூத்தி": { s: 5, c: 5 }, // Third-gender cunt (derogatory)

  // ========================================
  // === More Extended Animal Compounds ===
  // ========================================
  "naai otha punda koothi": { s: 5, c: 5 }, // Dog fuck off cunt
  "panni otha punda koothi": { s: 5, c: 5 }, // Pig fuck off cunt
  "kazhudhai otha punda koothi": { s: 5, c: 5 }, // Donkey fuck off cunt
  "erumai otha punda koothi": { s: 5, c: 5 }, // Buffalo fuck off cunt
  "aadu otha punda koothi": { s: 5, c: 5 }, // Goat fuck off cunt
  "kurangu otha punda koothi": { s: 5, c: 5 }, // Monkey fuck off cunt
  "poonai otha punda koothi": { s: 5, c: 5 }, // Cat fuck off cunt
  "eli otha punda koothi": { s: 5, c: 5 }, // Rat fuck off cunt
  "paambu otha punda koothi": { s: 5, c: 5 }, // Snake fuck off cunt
  "naai vesi thevidiya koothi": { s: 5, c: 5 }, // Dog prostitute cunt
  "panni vesi thevidiya koothi": { s: 5, c: 5 }, // Pig prostitute cunt
  "kazhudhai vesi thevidiya koothi": { s: 5, c: 5 }, // Donkey prostitute cunt
  "erumai vesi thevidiya koothi": { s: 5, c: 5 }, // Buffalo prostitute cunt
  "naai sunni oombu": { s: 4, c: 5 }, // Suck dog's dick
  "panni sunni oombu": { s: 4, c: 5 }, // Suck pig's dick
  "kazhudhai sunni oombu": { s: 4, c: 5 }, // Suck donkey's dick
  "erumai sunni oombu": { s: 4, c: 5 }, // Suck buffalo's dick
  "kurangu sunni oombu": { s: 4, c: 5 }, // Suck monkey's dick
  "aadu sunni oombu": { s: 4, c: 5 }, // Suck goat's dick
  "naai soothu nakki": { s: 3, c: 5 }, // Lick dog's ass
  "panni soothu nakki": { s: 3, c: 5 }, // Lick pig's ass
  "kazhudhai soothu nakki": { s: 3, c: 5 }, // Lick donkey's ass
  "erumai soothu nakki": { s: 3, c: 5 }, // Lick buffalo's ass
  "naai thayoli": { s: 5, c: 5 }, // Dog motherfucker
  "panni thayoli": { s: 5, c: 5 }, // Pig motherfucker
  "kazhudhai thayoli": { s: 5, c: 5 }, // Donkey motherfucker
  "erumai thayoli": { s: 5, c: 5 }, // Buffalo motherfucker
  "kurangu thayoli": { s: 5, c: 5 }, // Monkey motherfucker
  "aadu thayoli": { s: 5, c: 5 }, // Goat motherfucker
  "poonai thayoli": { s: 5, c: 5 }, // Cat motherfucker
  "eli thayoli": { s: 5, c: 5 }, // Rat motherfucker

  // ========================================
  // === More Extended Threats (Tamil) ===
  // ========================================
  "un amma munnadiye okkuven": { s: 5, c: 5 }, // I'll fuck your mother in front (of you)
  "un akka munnadiye okkuven": { s: 5, c: 5 }, // I'll fuck your sister in front (of you)
  "un vamsam azhikkuven": { s: 5, c: 5 }, // I'll destroy your lineage
  "un kudumbam azhikkuven": { s: 5, c: 5 }, // I'll destroy your family
  "un peyar keli kettiduvaan": { s: 5, c: 5 }, // Your name will be defamed
  "un pundai la thee vaippen": { s: 5, c: 5 }, // I'll set your cunt on fire
  "un soothu la thee vaippen": { s: 5, c: 5 }, // I'll set your ass on fire
  "un sunni la thee vaippen": { s: 5, c: 5 }, // I'll set your dick on fire
  "un koothi la milagai podhuven": { s: 5, c: 5 }, // I'll put chili in your cunt
  "un soothu la milagai podhuven": { s: 5, c: 5 }, // I'll put chili in your ass
  "un pundai la irumbu sunni dhukuven": { s: 5, c: 5 }, // I'll insert iron dick in your cunt
  "un soothu la irumbu sunni dhukuven": { s: 5, c: 5 }, // I'll insert iron dick in your ass
  "un sunni la rope kattuven": { s: 5, c: 5 }, // I'll tie rope to your dick
  "un koothi thaichikuven": { s: 5, c: 5 }, // I'll sew your cunt shut
  "un soothu thaichikuven": { s: 5, c: 5 }, // I'll sew your ass shut
  "un pundai la paambu viduven": { s: 5, c: 5 }, // I'll put snake in your cunt
  "un soothu la paambu viduven": { s: 5, c: 5 }, // I'll put snake in your ass
  "un vamsam thikku muzhangu paduvaan": { s: 5, c: 5 }, // Your lineage will be humiliated
  "unna naai ku pottruven": { s: 5, c: 5 }, // I'll feed you to dogs
  "unna panni ku pottruven": { s: 5, c: 5 }, // I'll feed you to pigs
  "unna drain la podhuven": { s: 5, c: 5 }, // I'll put you in drain
  "unna gutter la podhuven": { s: 5, c: 5 }, // I'll put you in gutter
  "unna uyiroda puthaippen": { s: 5, c: 5 }, // I'll bury you alive

  // ========================================
  // === More Extended Tamil Script Threats ===
  // ========================================
  "உன் அம்மா முன்னாடியே ஒக்குவேன்": { s: 5, c: 5 }, // I'll fuck mother in front
  "உன் அக்கா முன்னாடியே ஒக்குவேன்": { s: 5, c: 5 }, // I'll fuck sister in front
  "உன் வம்சம் அழிக்குவேன்": { s: 5, c: 5 }, // I'll destroy lineage
  "உன் குடும்பம் அழிக்குவேன்": { s: 5, c: 5 }, // I'll destroy family
  "உன் புண்டையில தீ வைப்பேன்": { s: 5, c: 5 }, // Set cunt on fire
  "உன் சூத்தில தீ வைப்பேன்": { s: 5, c: 5 }, // Set ass on fire
  "உன் கூத்தியில மிளகாய் போடுவேன்": { s: 5, c: 5 }, // Put chili in cunt
  "உன் சூத்தில மிளகாய் போடுவேன்": { s: 5, c: 5 }, // Put chili in ass
  "உன் புண்டையில பாம்பு விடுவேன்": { s: 5, c: 5 }, // Put snake in cunt
  "உன் சூத்தில பாம்பு விடுவேன்": { s: 5, c: 5 }, // Put snake in ass
  "உன்னை நாய்க்கு போட்டுருவேன்": { s: 5, c: 5 }, // Feed you to dogs
  "உன்னை பன்னிக்கு போட்டுருவேன்": { s: 5, c: 5 }, // Feed you to pigs

  // ========================================
  // === More Extended Tanglish Gaming ===
  // ========================================
  "afk koothi otha": { s: 5, c: 5 }, // AFK cunt fuck off
  "report pannu da koothi": { s: 5, c: 5 }, // Report cunt
  "mute pannu da punda": { s: 5, c: 5 }, // Mute cunt
  "feed panda koothi": { s: 5, c: 5 }, // Fed cunt
  "carry pannura koothi": { s: 5, c: 5 }, // Carrying cunt
  "int panda koothi": { s: 5, c: 5 }, // Feeding intentionally cunt
  "trash tier koothi": { s: 5, c: 5 }, // Trash tier cunt
  "bronze koothi": { s: 5, c: 5 }, // Bronze cunt (low rank)
  "iron koothi": { s: 5, c: 5 }, // Iron cunt (lowest rank)
  "hardstuck koothi": { s: 5, c: 5 }, // Hardstuck cunt (can't rank up)
  "boosted koothi": { s: 5, c: 5 }, // Boosted cunt (fake rank)
  "elo hell koothi": { s: 5, c: 5 }, // Elo hell cunt
  "smurf otha": { s: 3, c: 5 }, // Smurf fuck off
  "aim illa koothi": { s: 5, c: 5 }, // No aim cunt
  "game sense illa koothi": { s: 5, c: 5 }, // No game sense cunt
  "camping koothi otha": { s: 5, c: 5 }, // Camping cunt fuck off
  "stream sniper otha": { s: 3, c: 5 }, // Stream sniper fuck off
  "gg koothi otha": { s: 5, c: 5 }, // GG cunt fuck off
  "ez koothi otha": { s: 5, c: 5 }, // EZ cunt fuck off

  // ========================================
  // === More Extended Caste Slurs ===
  // ========================================
  "paraiyan koothi otha": { s: 5, c: 5 }, // Dalit caste cunt fuck off
  "paraiyan punda otha": { s: 5, c: 5 }, // Dalit caste cunt fuck off variant
  "paraichi koothi otha": { s: 5, c: 5 }, // Female Dalit cunt fuck off
  "chakkiliya punda otha": { s: 5, c: 5 }, // Leather-worker cunt fuck off
  "pallan koothi otha": { s: 5, c: 5 }, // Agricultural caste cunt fuck off
  "pallaichi punda otha": { s: 5, c: 5 }, // Female form cunt fuck off
  "thotti koothi otha": { s: 5, c: 5 }, // Sweeper cunt fuck off
  "thottichi punda otha": { s: 5, c: 5 }, // Female sweeper cunt fuck off
  "paarpan koothi otha": { s: 5, c: 5 }, // Brahmin cunt fuck off
  "keezh jaathi otha da": { s: 5, c: 5 }, // Low caste fuck off
  "kulam kettavan otha": { s: 5, c: 5 }, // Ruined caste fuck off
  "jathi illa otha": { s: 5, c: 5 }, // No caste fuck off
  "paraiyan thevidiya": { s: 5, c: 4 }, // Dalit prostitute
  "chakkiliya thevidiya": { s: 5, c: 4 }, // Leather-worker prostitute
  "pallan thevidiya": { s: 5, c: 4 }, // Agricultural caste prostitute
  "thotti thevidiya": { s: 5, c: 4 }, // Sweeper prostitute
  "keezh jaathi thevidiya": { s: 5, c: 4 }, // Low caste prostitute
  "keezh jaathi thayoli": { s: 5, c: 5 }, // Low caste motherfucker
  "keezh jaathi sunni oombu": { s: 5, c: 4 }, // Low caste suck dick
  "keezh jaathi vesi": { s: 5, c: 4 }, // Low caste prostitute variant

  // ========================================
  // === More Extended Tamil Script Caste ===
  // ========================================
  "பறையன் கூத்தி ஓத்தா": { s: 5, c: 4 }, // Paraiyan koothi otha
  "பறைச்சி கூத்தி ஓத்தா": { s: 5, c: 4 }, // Paraichi koothi otha
  "சக்கிலிய புண்ட ஓத்தா": { s: 5, c: 4 }, // Chakkiliya punda otha
  "பள்ளன் கூத்தி ஓத்தா": { s: 5, c: 4 }, // Pallan koothi otha
  "தோட்டி கூத்தி ஓத்தா": { s: 5, c: 4 }, // Thotti koothi otha
  "பாப்பான் கூத்தி ஓத்தா": { s: 5, c: 4 }, // Paarpan koothi otha
  "கீழ் ஜாதி ஓத்தா டா": { s: 5, c: 4 }, // Keezh jaathi otha da
  "கீழ் ஜாதி தேவடியா": { s: 5, c: 4 }, // Keezh jaathi thevidiya
  "கீழ் ஜாதி தாயோளி": { s: 5, c: 4 }, // Keezh jaathi thayoli
  "கீழ் ஜாதி வேசி": { s: 5, c: 4 }, // Keezh jaathi vesi

  // ========================================
  // === More Tamil Romanized Compounds ===
  // ========================================
  "un amma thevidiya batch": { s: 5, c: 5 }, // Your mother is prostitute batch
  "un akka vesi batch": { s: 5, c: 5 }, // Your sister is prostitute batch
  "un appa punda batch": { s: 1, c: 5 }, // Your father is cunt batch
  "un kudumbam koothi batch": { s: 5, c: 5 }, // Your family is cunt batch
  "un vaamsam vesi batch": { s: 5, c: 5 }, // Your lineage is prostitute batch
  "oor la ellaarum un amma ku okkum": { s: 3, c: 5 }, // Everyone in town fucks your mother
  "oor la ellaarum un akka ku okkum": { s: 3, c: 5 }, // Everyone in town fucks your sister
  "area la ellaarum un amma ku okkum": { s: 3, c: 5 }, // Everyone in area fucks your mother
  "bazaar la ellaarum un amma ku okkum": { s: 3, c: 5 }, // Everyone in bazaar fucks your mother
  "naai kuda un amma ku okkum": { s: 3, c: 5 }, // Even dogs fuck your mother
  "panni kuda un amma ku okkum": { s: 3, c: 5 }, // Even pigs fuck your mother
  "kazhudhai kuda un amma ku okkum": { s: 3, c: 5 }, // Even donkeys fuck your mother
  "un amma sunni oomburadhu profession": { s: 4, c: 5 }, // Your mother's profession is dick sucking
  "un akka soothu tharuradhu profession": { s: 3, c: 5 }, // Your sister's profession is giving ass
  "un amma free la okkum": { s: 5, c: 5 }, // Your mother fucks for free
  "un akka free la okkum": { s: 3, c: 5 }, // Your sister fucks for free
  "un amma oru ruba ku okkum": { s: 5, c: 5 }, // Your mother fucks for one rupee
  "un amma oru paisa ku okkum": { s: 5, c: 5 }, // Your mother fucks for one paisa
  "un amma ku price illa": { s: 3, c: 5 }, // Your mother has no price (worthless)
  "un akka ku price illa": { s: 3, c: 5 }, // Your sister has no price (worthless)

  // ========================================
  // === Extended Tamil Script Sexual Insults ===
  // ========================================
  "உன் அம்மா புண்ட நக்குவேன்": { s: 4, c: 4 }, // I'll lick your mother's pussy
  "உன் அக்கா புண்ட நக்குவேன்": { s: 4, c: 4 }, // I'll lick your sister's pussy
  "உன் அம்மா சூத்து நக்குவேன்": { s: 3, c: 4 }, // I'll lick your mother's ass
  "உன் அக்கா சூத்து நக்குவேன்": { s: 3, c: 4 }, // I'll lick your sister's ass
  "உன் அம்மா முலை பிடிப்பேன்": { s: 4, c: 4 }, // I'll squeeze your mother's breasts
  "உன் அக்கா முலை பிடிப்பேன்": { s: 4, c: 4 }, // I'll squeeze your sister's breasts
  "உன் அம்மா புண்டையில கை வைப்பேன்": { s: 4, c: 4 }, // I'll put hand in your mother's pussy
  "உன் அம்மா புண்டையில கால் வைப்பேன்": { s: 4, c: 4 }, // I'll put foot in your mother's pussy
  "உன் சுன்னி வெட்டுவேன்": { s: 4, c: 4 }, // I'll cut your dick
  "உன் சுன்னி ஒடிப்பேன்": { s: 4, c: 4 }, // I'll break your dick
  "உன் கொட்டை பிடிப்பேன்": { s: 4, c: 4 }, // I'll squeeze your balls
  "உன் கொட்டை வெட்டுவேன்": { s: 4, c: 4 }, // I'll cut your balls
  "உன் அம்மா புண்ட கிழிப்பேன்": { s: 4, c: 4 }, // I'll tear your mother's pussy
  "உன் அக்கா புண்ட கிழிப்பேன்": { s: 4, c: 4 }, // I'll tear your sister's pussy
  "உன் அம்மா சூத்து கிழிப்பேன்": { s: 3, c: 4 }, // I'll tear your mother's ass
  "உன் அக்கா சூத்து கிழிப்பேன்": { s: 3, c: 4 }, // I'll tear your sister's ass
  "வேசி மகனே நீ": { s: 5, c: 4 }, // Prostitute's son you (formal)
  "விபச்சாரி மகனே நீ": { s: 5, c: 4 }, // Prostitute's son you (alt)
  "தேவிடியா மகனே நீ": { s: 5, c: 4 }, // Prostitute's son you
  "தேவிடியா மகளே நீ": { s: 5, c: 4 }, // Prostitute's daughter you
  "கூத்தி மகனே நீ": { s: 5, c: 4 }, // Whore's son you
  "கூத்தி மகளே நீ": { s: 5, c: 4 }, // Whore's daughter you
  "உன் அம்மா சந்தை வேசி": { s: 5, c: 4 }, // Your mother is market whore
  "உன் அக்கா சந்தை வேசி": { s: 5, c: 4 }, // Your sister is market whore
  "உன் அம்மா ரோட்டு வேசி": { s: 5, c: 4 }, // Your mother is street whore
  "உன் அக்கா ரோட்டு வேசி": { s: 5, c: 4 }, // Your sister is street whore
  "உன் அம்மா ஊர் வேசி": { s: 5, c: 4 }, // Your mother is town whore

  // ========================================
  // === Extended Romanized Tamil Sexual ===
  // ========================================
  "un amma punda nakkuven": { s: 4, c: 5 }, // I'll lick your mother's pussy
  "un akka punda nakkuven": { s: 4, c: 5 }, // I'll lick your sister's pussy
  "un amma soothu nakkuven": { s: 3, c: 5 }, // I'll lick your mother's ass
  "un akka soothu nakkuven": { s: 3, c: 5 }, // I'll lick your sister's ass
  "un amma mulai pidipppen": { s: 4, c: 5 }, // I'll squeeze your mother's breasts
  "un akka mulai pidippen": { s: 4, c: 5 }, // I'll squeeze your sister's breasts
  "un amma pundaiyila kai vaipppen": { s: 4, c: 5 }, // I'll put hand in your mother's pussy
  "un amma pundaiyila kaal vaipppen": { s: 4, c: 5 }, // I'll put foot in your mother's pussy
  "un sunni vettuven": { s: 4, c: 5 }, // I'll cut your dick
  "un sunni odippen": { s: 4, c: 5 }, // I'll break your dick
  "un kottai pidippen": { s: 4, c: 5 }, // I'll squeeze your balls
  "un kottai vettuven": { s: 4, c: 5 }, // I'll cut your balls
  "un amma punda kizhippen": { s: 4, c: 5 }, // I'll tear your mother's pussy
  "un akka punda kizhippen": { s: 4, c: 5 }, // I'll tear your sister's pussy
  "un amma soothu kizhippen": { s: 3, c: 5 }, // I'll tear your mother's ass
  "un akka soothu kizhippen": { s: 3, c: 5 }, // I'll tear your sister's ass
  "vesi magane nee": { s: 5, c: 5 }, // Prostitute's son you (formal)
  "vibachchaari magane nee": { s: 5, c: 5 }, // Prostitute's son you (alt)
  "thevidiya magane nee": { s: 5, c: 5 }, // Prostitute's son you
  "thevidiya magale nee": { s: 5, c: 5 }, // Prostitute's daughter you
  "koothi magane nee": { s: 5, c: 5 }, // Whore's son you
  "koothi magale nee": { s: 5, c: 5 }, // Whore's daughter you
  "un amma sandai vesi": { s: 5, c: 5 }, // Your mother is market whore
  "un akka sandai vesi": { s: 5, c: 5 }, // Your sister is market whore
  "un amma rottu vesi": { s: 5, c: 5 }, // Your mother is street whore
  "un akka rottu vesi": { s: 5, c: 5 }, // Your sister is street whore
  "un amma ooru vesi": { s: 5, c: 5 }, // Your mother is town whore
  "un akka ooru vesi": { s: 5, c: 5 }, // Your sister is town whore

  // ========================================
  // === Extended Madurai/Kongu Dialect ===
  // ========================================
  "unga amma ku okkuven da": { s: 3, c: 5 }, // I'll fuck your mother (Madurai)
  "unga akka ku okkuven da": { s: 3, c: 5 }, // I'll fuck your sister (Madurai)
  "thevidiya paiyan da nee": { s: 5, c: 4 }, // Prostitute's son you (Madurai)
  "koothi paiyan da nee": { s: 5, c: 4 }, // Whore's son you (Madurai)
  "punda paiyan da nee": { s: 5, c: 5 }, // Cunt's son you (Madurai)
  "otha da saani": { s: 3, c: 5 }, // Fuck you eunuch (Madurai)
  "okkala da saani": { s: 3, c: 5 }, // Get fucked eunuch (Madurai)
  "punda mavane": { s: 5, c: 5 }, // Cunt son-in-law (Kongu)
  "koothi mavane": { s: 5, c: 4 }, // Whore son-in-law (Kongu)
  "soothu mavane": { s: 3, c: 4 }, // Ass son-in-law (Kongu)
  "sunni mavane": { s: 4, c: 4 }, // Dick son-in-law (Kongu)
  "okkala mavane": { s: 3, c: 5 }, // Get fucked son-in-law (Kongu)
  "poda koothi payale": { s: 5, c: 4 }, // Go whore's son (Kongu)
  "poda punda payale": { s: 5, c: 5 }, // Go cunt's son (Kongu)
  "poda soothu payale": { s: 3, c: 4 }, // Go ass's son (Kongu)
  "unga veettula ellaarum vesi": { s: 5, c: 4 }, // Everyone in your house is whore (Madurai)
  "unga veettula ellaarum thevidiya": { s: 5, c: 4 }, // Everyone in your house is prostitute (Madurai)
  "unga kula ellaarum vesi": { s: 5, c: 4 }, // Everyone in your clan is whore (Madurai)
  "unga kula ellaarum koothi": { s: 5, c: 4 }, // Everyone in your clan is whore (Madurai alt)
  "ooru la un amma ku okkuvaanga": { s: 3, c: 5 }, // Village people fuck your mother (Madurai)

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "umba amma pundai okkuvan": { s: 4, c: 5 }, // I'll fuck your mother's pussy (SL Tamil)
  "umba akka pundai okkuvan": { s: 4, c: 5 }, // I'll fuck your sister's pussy (SL Tamil)
  "umba thathi modda": { s: 1, c: 4 }, // Your father's dick (SL Tamil)
  "umba amma vesiyaa": { s: 5, c: 4 }, // Your mother is a whore (SL Tamil)
  "umba akka vesiyaa": { s: 5, c: 4 }, // Your sister is a whore (SL Tamil)
  "pundai okkara paiyan": { s: 4, c: 5 }, // Pussy fucker boy (SL Tamil)
  "soothu okkara paiyan": { s: 3, c: 5 }, // Ass fucker boy (SL Tamil)
  "sunni oomba paiyan": { s: 4, c: 4 }, // Dick sucker boy (SL Tamil)
  "vesiyoda mahan": { s: 5, c: 4 }, // Whore's son (SL Tamil formal)
  "kooththiyoda mahan": { s: 5, c: 4 }, // Whore's son (SL Tamil)
  "umba amma roadla nikkindra": { s: 3, c: 4 }, // Your mother stands on the road (SL Tamil)
  "umba akka roadla nikkindra": { s: 3, c: 4 }, // Your sister stands on the road (SL Tamil)
  "umba amma lorry driverlukku okkum": { s: 5, c: 5 }, // Your mother fucks lorry drivers (SL Tamil)
  "umba amma soldierslukku okkum": { s: 5, c: 5 }, // Your mother fucks soldiers (SL Tamil)
  "umba amma bazaarlaa okkum": { s: 5, c: 5 }, // Your mother fucks in the bazaar (SL Tamil)

  // ========================================
  // === Extended Malaysian/Singapore Tamil ===
  // ========================================
  "pundek maa": { s: 4, c: 4 }, // Pussy mother (MY Tamil)
  "pundek ayah": { s: 1, c: 4 }, // Pussy father (MY Tamil)
  "pundek lu": { s: 4, c: 4 }, // Pussy you (MY Tamil)
  "keling pundek": { s: 4, c: 4 }, // Indian pussy (MY Tamil slur)
  "anna pundek": { s: 4, c: 4 }, // Brother pussy (MY Tamil elder)
  "machan pundek": { s: 4, c: 4 }, // Dude pussy (MY Tamil)
  "pundek kia": { s: 4, c: 4 }, // Pussy child (MY Tamil)
  "okkala pundek": { s: 4, c: 5 }, // Get fucked pussy (MY Tamil)
  "pundek bodoh": { s: 1, c: 4 }, // Pussy stupid (MY Tamil-Malay mix)
  "sundel lu": { s: 5, c: 4 }, // Whore you (MY Tamil-Malay mix)
  "palat lu pundek": { s: 4, c: 4 }, // Go back pussy (MY Tamil)
  "mabuk pundek": { s: 1, c: 3 }, // Drunk pussy (MY Tamil-Malay mix)
  "celaka pundek": { s: 4, c: 4 }, // Damn pussy (MY Tamil-Malay mix)

  // ========================================
  // === Extended Body Part Combos (Tamil) ===
  // ========================================
  "பெரிய புண்ட வாடா": { s: 4, c: 3 }, // Big pussy guy
  "சின்ன சுன்னி வாடா": { s: 4, c: 3 }, // Small dick guy
  "பெரிய சூத்து வாடா": { s: 4, c: 3 }, // Big ass guy
  "சின்ன கொட்டை வாடா": { s: 4, c: 3 }, // Small balls guy
  "வளைந்த சுன்னி வாடா": { s: 4, c: 3 }, // Bent dick guy
  "குட்டை சுன்னி வாடா": { s: 4, c: 3 }, // Short dick guy
  "தொங்கு முலை": { s: 4, c: 3 }, // Saggy breasts
  "தொங்கு சுன்னி": { s: 4, c: 3 }, // Saggy dick
  "periya punda vaada": { s: 4, c: 3 }, // Big pussy guy
  "chinna sunni vaada": { s: 4, c: 3 }, // Small dick guy
  "periya soothu vaada": { s: 4, c: 3 }, // Big ass guy
  "chinna kottai vaada": { s: 4, c: 3 }, // Small balls guy
  "valaindha sunni vaada": { s: 4, c: 3 }, // Bent dick guy
  "kuttai sunni vaada": { s: 4, c: 3 }, // Short dick guy
  "thongu mulai": { s: 4, c: 3 }, // Saggy breasts
  "thongu sunni": { s: 4, c: 3 }, // Saggy dick
  "ஊளை சுன்னி": { s: 4, c: 3 }, // Rotten dick
  "ஊளை புண்ட": { s: 4, c: 3 }, // Rotten pussy
  "oolai sunni": { s: 4, c: 3 }, // Rotten dick
  "oolai punda": { s: 4, c: 3 }, // Rotten pussy

  // ========================================
  // === Extended Emasculation Insults (Tamil) ===
  // ========================================
  "உன் சுன்னி எழும்பாது": { s: 4, c: 4 }, // Your dick can't get up
  "உன் சுன்னி வேலை செய்யாது": { s: 4, c: 4 }, // Your dick doesn't work
  "உன் சுன்னி செத்துப்போச்சு": { s: 5, c: 5 }, // Your dick died
  "நீ ஆண்மை இல்லாதவன்": { s: 1, c: 4 }, // You are impotent
  "நீ அலி": { s: 1, c: 4 }, // You are a eunuch
  "நீ ஒன்பது": { s: 1, c: 3 }, // You are a nine (eunuch slang)
  "உன் சுன்னி புழு மாதிரி": { s: 4, c: 4 }, // Your dick is like a worm
  "உன் சுன்னி விரல் மாதிரி": { s: 4, c: 4 }, // Your dick is like a finger
  "un sunni ezhumbadhu": { s: 4, c: 4 }, // Your dick can't get up
  "un sunni velai seyyaadhu": { s: 4, c: 4 }, // Your dick doesn't work
  "un sunni sethupochu": { s: 5, c: 5 }, // Your dick died
  "nee aanmai illaathavan": { s: 1, c: 4 }, // You are impotent
  "nee ali": { s: 1, c: 4 }, // You are a eunuch
  "nee ombudhu": { s: 1, c: 3 }, // You are a nine (eunuch slang)
  "un sunni puzhu maathiri": { s: 4, c: 4 }, // Your dick is like a worm
  "un sunni viral maathiri": { s: 4, c: 4 }, // Your dick is like a finger

  // ========================================
  // === Extended Scatological (Tamil) ===
  // ========================================
  "உன் முகத்தில் மலம் தீற்றுவேன்": { s: 3, c: 5 }, // I'll smear shit on your face
  "உன் முகத்தில் சிறுநீர் ஊற்றுவேன்": { s: 3, c: 4 }, // I'll pour piss on your face
  "உன் சாப்பாட்டில் மலம் போடுவேன்": { s: 3, c: 5 }, // I'll put shit in your food
  "உன் சாப்பாட்டில் சிறுநீர் போடுவேன்": { s: 3, c: 4 }, // I'll put piss in your food
  "மலம் தின்னும் நாய்": { s: 3, c: 5 }, // Shit eating dog
  "சிறுநீர் குடிக்கும் நாய்": { s: 3, c: 4 }, // Piss drinking dog
  "குண்டி காற்று மோப்பான்": { s: 3, c: 4 }, // Fart sniffer
  "un mugathtula malam theetruven": { s: 3, c: 5 }, // I'll smear shit on your face
  "un mugathtula siruneer ootruven": { s: 3, c: 4 }, // I'll pour piss on your face
  "un saappaattula malam poduven": { s: 3, c: 5 }, // I'll put shit in your food
  "un saappaattula siruneer poduven": { s: 3, c: 4 }, // I'll put piss in your food
  "malam thinnum naai": { s: 3, c: 5 }, // Shit eating dog
  "siruneer kudikkum naai": { s: 3, c: 4 }, // Piss drinking dog
  "kundi kaatru moppaan": { s: 3, c: 4 }, // Fart sniffer
  "un amma mugathtula malam": { s: 3, c: 5 }, // Shit on your mother's face
  "un akka mugathtula malam": { s: 3, c: 5 }, // Shit on your sister's face
  "un amma mugathtula moothiram": { s: 3, c: 4 }, // Piss on your mother's face
  "un akka mugathtula moothiram": { s: 3, c: 4 }, // Piss on your sister's face

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0thaa": { s: 3, c: 5 }, // Fuck (evasion alt)
  "p00nda": { s: 4, c: 5 }, // Pussy (evasion)
  "sunn1": { s: 4, c: 5 }, // Dick (evasion)
  "0kkala": { s: 3, c: 5 }, // Get fucked (evasion)
  "p00ndai": { s: 4, c: 5 }, // Pussy (evasion alt)
  "th3v1d1ya": { s: 5, c: 5 }, // Prostitute (evasion alt)
  "k@@thi": { s: 5, c: 5 }, // Whore (evasion)
  "p@@nda": { s: 4, c: 5 }, // Pussy (evasion)
  "s@@thu": { s: 3, c: 5 }, // Ass (evasion)
  "0mb0": { s: 3, c: 5 }, // Suck (evasion)
  "sunn!": { s: 4, c: 5 }, // Dick (evasion)
  "m00lai": { s: 4, c: 5 }, // Breasts (evasion)
  "k0tt@i": { s: 4, c: 5 }, // Balls (evasion)
  "th@y0li": { s: 5, c: 5 }, // Motherfucker (evasion alt)

  // ========================================
  // === Extended Abuse Phrases (Tamil) ===
  // ========================================
  "un vazhkaikku vilai illa": { s: 3, c: 4 }, // Your life has no price
  "nee porakkaamal irunthaa nallaa irukum": { s: 3, c: 4 }, // Better if you weren't born
  "un amma un appaa yaarunu theriyaadhu": { s: 1, c: 4 }, // Your mother doesn't know your father
  "un appaa yaaru yaarukkum theriyaadhu": { s: 1, c: 4 }, // Nobody knows who your father is
  "un amma unnai dustbin la pottu vittaa": { s: 3, c: 4 }, // Your mother threw you in dustbin
  "un amma unnai road la pottu vittaa": { s: 3, c: 4 }, // Your mother threw you on the road
  "unnai yaarukum vendaam": { s: 3, c: 4 }, // Nobody wants you
  "un mugam paarthaa aalu thupum": { s: 3, c: 4 }, // People spit seeing your face
  "un peru ketta aalu sirikum": { s: 3, c: 4 }, // People laugh hearing your name
  "un family la ellaarum vesi": { s: 5, c: 4 }, // Everyone in your family is whore
  "un family la ellaarum thevidiya": { s: 5, c: 4 }, // Everyone in your family is prostitute
  "un kulam la ellaarum koothi": { s: 5, c: 4 }, // Everyone in your clan is whore
  "un kulam la ellaarum okkalaigal": { s: 3, c: 5 }, // Everyone in your clan are fuckers
  "உன் வாழ்க்கைக்கு விலை இல்லை": { s: 3, c: 4 }, // Your life has no price (script)
  "நீ பொறக்காமல் இருந்தா நல்லா இருக்கும்": { s: 3, c: 4 }, // Better if you weren't born (script)
  "உன் அம்மா உன் அப்பா யாருன்னு தெரியாது": { s: 1, c: 4 }, // Your mother doesn't know your father (script)
  "உன்னை யாருக்கும் வேண்டாம்": { s: 3, c: 4 }, // Nobody wants you (script)
  "உன் முகம் பார்த்தா ஆளு துப்பும்": { s: 3, c: 4 }, // People spit seeing your face (script)
  "உன் பேரு கேட்டா ஆளு சிரிக்கும்": { s: 3, c: 4 }, // People laugh hearing your name (script)
  "உன் ஃபேமிலி ல எல்லாரும் வேசி": { s: 5, c: 4 }, // Everyone in your family is whore (script)

  // ========================================
  // === Extended Caste-Based (Tamil) ===
  // ========================================
  "pallan punda otha": { s: 5, c: 5 }, // Pallan caste cunt fucker
  "chakkiliyar punda otha": { s: 5, c: 5 }, // Chakkiliyar caste cunt fucker
  "vannan punda otha": { s: 5, c: 5 }, // Washerman caste cunt fucker
  "ambaththan punda otha": { s: 5, c: 5 }, // Barber caste cunt fucker
  "keezh jaathi naai": { s: 5, c: 4 }, // Low caste dog
  "keezh jaathi panni": { s: 5, c: 4 }, // Low caste pig
  "keezh jaathi thevidiya magan": { s: 5, c: 4 }, // Low caste prostitute's son
  "keezh jaathi koothi magan": { s: 5, c: 4 }, // Low caste whore's son
  "கீழ் ஜாதி நாய்": { s: 5, c: 4 }, // Low caste dog (script)
  "கீழ் ஜாதி பன்னி": { s: 5, c: 4 }, // Low caste pig (script)
  "கீழ் ஜாதி தேவடியா மகன்": { s: 5, c: 4 }, // Low caste prostitute's son (script)
  "கீழ் ஜாதி கூத்தி மகன்": { s: 5, c: 4 }, // Low caste whore's son (script)
  "பள்ளன் புண்ட": { s: 5, c: 5 }, // Pallan caste cunt (script)
  "பறையன் புண்ட": { s: 5, c: 5 }, // Paraiyan caste cunt (script)

  // ========================================
  // === Extended Internet/Gaming Tamil ===
  // ========================================
  "nee noob punda da": { s: 5, c: 5 }, // You noob cunt
  "nee hacker thevidiya magan da": { s: 5, c: 4 }, // You hacker prostitute's son
  "nee camper koothi paiyan da": { s: 5, c: 4 }, // You camper whore's son
  "nee feeder punda da": { s: 5, c: 5 }, // You feeder cunt
  "nee troll thevidiya magan da": { s: 5, c: 4 }, // You troll prostitute's son
  "nee toxic koothi paiyan da": { s: 5, c: 4 }, // You toxic whore's son
  "nee griefing punda da": { s: 5, c: 5 }, // You griefing cunt
  "nee afk thevidiya magan da": { s: 5, c: 4 }, // You AFK prostitute's son
  "nee stream sniper punda da": { s: 5, c: 5 }, // You stream sniper cunt
  "game vidu da koothi paiyan": { s: 5, c: 4 }, // Leave game whore's son
  "uninstall pannu da punda": { s: 5, c: 5 }, // Uninstall cunt
  "lag ku otha da": { s: 3, c: 5 }, // Fuck the lag
  "ping ku otha da": { s: 3, c: 5 }, // Fuck the ping
  "server ku otha da": { s: 3, c: 5 }, // Fuck the server
  "gg punda": { s: 5, c: 5 }, // GG cunt
  "ez punda": { s: 5, c: 5 }, // EZ cunt
  "gg sunni oombu": { s: 4, c: 3 }, // GG suck dick
  "ez sunni oombu": { s: 4, c: 3 }, // EZ suck dick
  "report pannu punda": { s: 5, c: 5 }, // Report cunt
};

export default tamilBadWords;
