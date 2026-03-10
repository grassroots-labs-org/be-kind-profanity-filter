/**
 * Korean profanity words list
 * Contains common profanities, insults, and offensive terms.
 * ⚠️ Warning: This file contains explicit language in Korean
 */
const koreanBadWords = [
  // Core Korean profanity
  "씨발", // Fuck
  "시발", // Fuck (variant spelling)
  "씹", // Vulgar term for female genitalia
  "좆", // Dick
  "보지", // Pussy
  "자지", // Penis
  "개새끼", // Son of a bitch
  "개년", // Bitch (lit. dog-woman)
  "병신", // Retard/cripple
  "지랄", // Acting crazy / bullshit
  "미친놈", // Crazy bastard
  "미친년", // Crazy bitch
  "년", // Bitch / derogatory term for woman
  "놈", // Bastard / derogatory term for man
  "새끼", // Bastard (lit. offspring)
  "쌍놈", // Low-class bastard
  "쌍년", // Low-class bitch
  "창녀", // Whore
  "걸레", // Slut (lit. mop/rag)
  "매춘부", // Prostitute
  "또라이", // Lunatic / nutjob
  "찐따", // Loser / nerd
  "닥쳐", // Shut up
  "꺼져", // Get lost / fuck off
  "엿먹어", // Go fuck yourself (lit. eat taffy)
  "똥", // Shit
  "좆같다", // Dick-like (shitty)
  "존나", // Fucking / very (intensifier)
  "느금마", // Your mom (derogatory slang)
  "호로새끼", // Bastard (fatherless insult)
  "니미", // Your mother (vulgar abbreviation)

  // Abbreviations
  "ㅅㅂ", // Abbreviation: 씨발 (fuck)
  "ㅂㅅ", // Abbreviation: 병신 (retard)
  "ㅆㅂ", // Abbreviation: 씨발 (fuck, emphatic)
  "ㅄ", // Abbreviation: 병신 (retard, combined)

  // Loanword profanity
  "갱뱅", // Gang bang
  "오르가즘", // Orgasm
  "페니스", // Penis
  "쉬메일", // Shemale

  // Additional Korean profanity
  "개같은", // Dog-like
  "개자식", // Dog's offspring
  "개쓰레기", // Dog trash
  "개돼지", // Dog-pig (dehumanizing)
  "개씹", // Dog + vulgar
  "걸레년", // Slut bitch
  "꼴통", // Blockhead
  "나쁜년", // Bad bitch
  "뒈져라", // Drop dead
  "뒤질래", // Wanna die?
  "미친", // Crazy (prefix)
  "미친새끼", // Crazy bastard
  "발놈", // Stupid guy
  "벌레", // Bug (dehumanizing)
  "빡대가리", // Stupid head
  "빡쳤어", // Pissed off
  "쌍놈의새끼", // Double bastard's offspring
  "쓰레기", // Trash
  "씹새끼", // Vulgar bastard
  "씹년", // Vulgar bitch
  "씹할", // Vulgar (prefix)
  "애미", // Your mother (derogatory)
  "애비", // Your father (derogatory)
  "엠창", // Abbreviation: mother + window (insult)
  "옘병", // Plague (exclamation)
  "육변기", // Meat toilet (extremely vulgar)
  "잡놈", // Lowlife
  "지랄하네", // Acting crazy
  "찐따새끼", // Loser bastard
  "호구", // Sucker/pushover
  "화냥년", // Slut (archaic but still used)
  "ㅈㄹ", // Abbreviation: 지랄
  "ㅈㄴ", // Abbreviation: 존나
  "ㅅㅂㄹㅁ", // Abbreviation compound
  "ㅁㅊ", // Abbreviation: 미친
  "니미럴", // Your mother (vulgar variant)
  "니애미", // Your mother
  "좆까", // Fuck off (dick + imperative)
  "뻑큐", // Fuck you (Konglish)

  // 씨발 variations
  "씨팔", // Censored variant of 씨발
  "씨부랄", // Vulgar variant
  "씨발놈", // Fucking bastard
  "씨발년", // Fucking bitch
  "시팔", // Censored variant
  "씨부렁", // Vulgar variant
  "씨바", // Truncated variant
  "씨빨", // Misspelling variant
  "쉬발", // Phonetic variant
  "쉬벌", // Phonetic variant
  "씨볼", // Variant
  "씹발", // Vulgar compound
  "ㅆㅂ놈", // Abbreviated + noun
  "ㅆㅂ년", // Abbreviated + noun
  "시발놈", // Variant + bastard
  "시발년", // Variant + bitch
  "씨발새끼", // Fucking bastard
  "미친씨발", // Crazy fuck

  // 개 compounds
  "개같은년", // Dog-like bitch
  "개같은놈", // Dog-like bastard
  "개망나니", // Dog delinquent
  "개소리", // Dog sound (bullshit)
  "개지랄", // Dog tantrum
  "개판", // Dog mess (shitshow)
  "개씹새끼", // Dog-vulgar bastard
  "개미친", // Dog-crazy
  "개나리", // Derogatory (sounds like 개 + forsythia)
  "개년아", // Dog-bitch (vocative)
  "개놈아", // Dog-bastard (vocative)
  "개좆", // Dog dick
  "개보지", // Dog pussy
  "개자지", // Dog penis
  "개뼈다귀", // Dog bone (worthless)
  "개수작", // Dog trick (bullshit behavior)
  "개거품", // Dog foam (nonsense)
  "개찐따", // Dog loser
  "개병신", // Dog retard
  "개또라이", // Dog lunatic
  "개좆같은", // Dog-dick-like

  // 좆 compounds
  "좆만한", // Dick-sized (small/worthless)
  "좆밥", // Dick rice (loser)
  "좆같은", // Dick-like
  "좆같은새끼", // Dick-like bastard
  "좆나", // Dick + intensifier
  "좆대가리", // Dick head
  "좆물", // Dick juice
  "좆까라", // Fuck off (imperative)

  // Sexual terms
  "섹스", // Sex
  "자위", // Masturbation
  "강간", // Rape
  "성폭행", // Sexual assault
  "매춘", // Prostitution
  "음경", // Penis (medical)
  "질", // Vagina (medical)
  "클리토리스", // Clitoris
  "항문성교", // Anal sex
  "구강성교", // Oral sex
  "성기", // Genitals
  "성교", // Sexual intercourse
  "음핵", // Clitoris (medical)
  "포경", // Phimosis (insult)
  "고환", // Testicle
  "정액", // Semen
  "사정", // Ejaculation
  "조루", // Premature ejaculation (insult)
  "발기", // Erection
  "발기부전", // Erectile dysfunction (insult)
  "딸딸이", // Masturbation (slang)
  "야동", // Porn video
  "성인물", // Adult content
  "포르노", // Porno
  "윤간", // Gang rape
  "근친상간", // Incest
  "수간", // Bestiality
  "페도필리아", // Pedophilia
  "유두", // Nipple
  "젖꼭지", // Nipple
  "음모", // Pubic hair
  "스와핑", // Swapping (partner)
  "원조교제", // Compensated dating
  "성매매", // Sex trade
  "조건만남", // Conditional meeting (prostitution)
  "몰카", // Hidden camera (voyeurism)
  "도촬", // Voyeurism
  "노출증", // Exhibitionism
  "페티시", // Fetish
  "불륜", // Adultery
  "간통", // Adultery (legal)
  "박다", // To fuck (vulgar)
  "따먹다", // To fuck (vulgar)
  "씹하다", // To fuck

  // Slurs
  "쪽바리", // Slur for Japanese
  "짱깨", // Slur for Chinese
  "깜둥이", // Slur for Black people
  "흑형", // Black bro (can be derogatory)
  "양놈", // Western bastard
  "양키", // Yankee (derogatory)
  "빨갱이", // Commie (slur)
  "수꼴", // Extreme conservative (slur)
  "좌좀", // Leftist zombie (slur)
  "일뽕", // Japan-lover (derogatory)
  "미뽕", // America-lover (derogatory)
  "중뽕", // China-lover (derogatory)
  "토착왜구", // Native Japanese sympathizer (slur)
  "매국노", // Traitor
  "반쪽발이", // Half-Japanese slur

  // Internet abbreviations
  "ㅗ", // Middle finger gesture
  "ㄷㅊ", // Abbreviation: 닥쳐
  "ㅆㄹㄱ", // Abbreviated insult
  "ㅈㄱ", // Abbreviation: 자격/조건
  "ㅂㅊ", // Abbreviation: 보지/병충
  "ㄲㅈ", // Abbreviation: 꺼져
  "ㅅㄲ", // Abbreviation: 새끼
  "ㅈㅂ", // Abbreviation
  "ㅆㅂㄴ", // Abbreviation: 씨발놈
  "ㅆㅂㄹㅁ", // Compound abbreviation
  "ㄴㄱㅁ", // Abbreviation: 느금마
  "ㅈㄹㅎㄴ", // Abbreviation: 지랄하네
  "ㅂㄹ", // Abbreviation
  "ㅈㄱㅇ", // Abbreviation
  "ㅍㅋ", // Abbreviation: 뻑큐
  "ㅁㅊㄴ", // Abbreviation: 미친놈
  "ㅁㅊㄴㄴ", // Abbreviation: 미친년

  // Compound insults
  "니애미뒤졌어", // Your mom is dead
  "니애비뒤졌어", // Your dad is dead
  "느금마뒤졌어", // Your mom is dead (slang)
  "애미뒤진", // Dead-mom (modifier)
  "애비뒤진", // Dead-dad (modifier)
  "시발새끼", // Fuck bastard (variant)
  "개씹년", // Dog-vulgar bitch
  "미친개새끼", // Crazy dog bastard
  "좆만한새끼", // Dick-sized bastard
  "빡대가리새끼", // Stupid-head bastard
  "지랄새끼", // Crazy bastard
  "또라이새끼", // Lunatic bastard
  "찐따같은새끼", // Loser-like bastard
  "병신새끼", // Retard bastard
  "쓰레기같은년", // Trash-like bitch
  "쓰레기같은놈", // Trash-like bastard
  "죽어버려", // Go die
  "죽을래", // Wanna die?
  "뒈져", // Drop dead
  "뒤져라", // Die (vulgar)
  "뒤져버려", // Just die
  "자살해", // Kill yourself
  "니미씨발", // Your mom + fuck
  "엠병", // Mom + disease (insult)

  // Modern slang insults
  "틀딱", // Boomer (derogatory)
  "꼰대", // Old-fashioned/preachy person
  "한남충", // Korean male bug (misandrist slur)
  "한녀충", // Korean female bug (misogynist slur)
  "맘충", // Mom-bug (derogatory for mothers)
  "급식충", // School-lunch bug (insult for young students)
  "진지충", // Serious-bug (overly serious person)
  "설명충", // Explanation-bug
  "노키즈존", // No kids zone (derogatory context)
  "김치녀", // Kimchi woman (misogynist)
  "된장녀", // Doenjang woman (misogynist)
  "개저씨", // Dog-uncle (derogatory for middle-aged men)
  "보빨러", // Pussy licker (vulgar insult)
  "자댕이", // Slur (derogatory)
  "무뇌충", // No-brain bug
  "허언증", // Pathological liar (used as insult)
  "관종", // Attention whore
  "어그로", // Aggro (troll)
  "ㅂㄹㅇ", // Abbreviation: 빨리와/병리 (context-dependent)

  // Body-part vulgarities
  "젖", // Breast (vulgar)
  "똥꼬", // Asshole (childish/vulgar)
  "항문", // Anus
  "똥구멍", // Shit hole
  "보짓물", // Vaginal fluid (extremely vulgar)
  "자궁", // Uterus (vulgar context)
  "불알", // Balls/testicles
  "불알놈", // Ball-bastard
  "젖탱이", // Tit (vulgar)
  "큰보지", // Big pussy (vulgar)
  "좆구멍", // Dick hole
  "씹물", // Vulgar fluid

  // Additional insults and exclamations
  "염병", // Plague (exclamation, vulgar)
  "염병할", // Plague upon you
  "지랄맞다", // Crazy/messed up
  "좆망", // Dick + doomed (fucked)
  "개꿀", // Dog honey (sarcastic)
  "ㅈ됐다", // Fucked (abbreviated)
  "좆됐다", // Fucked
  "시발점", // Used as pun on 씨발
  "씹덕", // Vulgar otaku
  "씹선비", // Vulgar hypocrite
  "오지랖", // Nosy/meddlesome (insult)
  "주둥아리", // Snout (shut your mouth)
  "주둥이", // Snout (derogatory)
  "대가리", // Head (derogatory)
  "면상", // Face (derogatory)
  "상판대기", // Face (vulgar)

  // Additional 씨발 compounds
  "씨발놈아", // Fucking bastard (vocative)
  "씨발년아", // Fucking bitch (vocative)
  "씨발것", // Fucking thing
  "씨발놈의새끼", // Fucking bastard's offspring
  "씨발련", // Fucking wench
  "씨발롬", // Fucking guy (corruption)
  "씨발놈의자식", // Fucking bastard's child
  "씨발놈아죽어", // Fucking bastard, die
  "시발새끼야", // Fuck-bastard (vocative variant)
  "시발것", // Fucking thing (variant)
  "씨부랄년", // Vulgar variant + bitch
  "씨부랄놈", // Vulgar variant + bastard
  "시방새끼", // Dialectal fuck-bastard
  "씨벌", // Variant spelling
  "씹팔", // Vulgar compound variant
  "씨발덕", // Fucking otaku
  "씨발충", // Fucking bug (insect insult)
  "쌍시발", // Double-fuck
  "개씨발", // Dog-fuck
  "존나씨발", // Fucking fuck
  "미친씨발년", // Crazy fucking bitch
  "미친씨발놈", // Crazy fucking bastard

  // Additional 개 compounds
  "개무시", // Dog-ignore (total disrespect)
  "개한민국", // Dog-Korea (derogatory for Korea)
  "개꼴", // Dog-appearance (disgusting sight)
  "개꿈", // Dog dream (worthless dream)
  "개뿔", // Dog horn (bullshit)
  "개헛소리", // Dog nonsense
  "개쌍놈", // Dog lowlife bastard
  "개쌍년", // Dog lowlife bitch
  "개후장", // Dog asshole
  "개지랄하다", // To act like a dog tantrum
  "개쓰레기같은", // Dog-trash-like
  "개불알", // Dog balls
  "개잡놈", // Dog lowlife
  "개잡년", // Dog lowlife bitch
  "개씹발", // Dog + vulgar fuck
  "개좆같다", // Like a dog's dick (shitty)
  "개나발", // Dog trumpet (bullshit)
  "개허접", // Dog amateur (pathetic)
  "개쩐다", // Extremely (sarcastic)
  "개웃기다", // Dog-funny (sarcastically stupid)
  "개노답", // Dog-no answer (hopeless)
  "개극혐", // Dog-extreme disgust
  "개역겹다", // Dog-disgusting
  "개짜증", // Dog-annoying

  // Additional 좆 compounds
  "좆같은년", // Dick-like bitch
  "좆같은놈", // Dick-like bastard
  "좆도아닌", // Not even dick (worthless)
  "좆도없는", // Having no dick (worthless)
  "좆만한놈", // Dick-sized bastard
  "좆만한년", // Dick-sized bitch
  "좆물리다", // Dick-watered (disappointed)
  "좆벌레", // Dick bug
  "좆새끼", // Dick bastard
  "좆빠는", // Dick-sucking
  "좆까놈", // Fuck-off bastard

  // Additional 병신 compounds
  "병신같은", // Retard-like
  "병신아", // Retard (vocative)
  "씹병신", // Vulgar retard
  "개병신같은", // Dog-retard-like
  "존나병신", // Fucking retard
  "병신같은새끼", // Retard-like bastard
  "병신같은년", // Retard-like bitch
  "병신같은놈", // Retard-like bastard
  "병신짓", // Retard behavior
  "병신력", // Retard power (sarcastic)
  "병신년", // Retard bitch
  "병신놈", // Retard bastard
  "쌍병신", // Double retard
  "대병신", // Grand retard

  // Additional sexual terms
  "성행위", // Sexual act
  "자위행위", // Masturbation act
  "구강", // Oral (sexual context)
  "삽입", // Insertion (sexual)
  "체위", // Sexual position
  "후배위", // Doggy style
  "정상위", // Missionary position
  "기승위", // Cowgirl position
  "측위", // Side position (sexual)
  "좌위", // Sitting position (sexual)
  "입위", // Standing position (sexual)
  "69자세", // 69 position
  "쓰리썸", // Threesome
  "난교", // Orgy
  "관계", // Relations (sexual context)
  "성관계", // Sexual relations
  "정사", // Love affair/sexual act
  "음란", // Obscene/lewd
  "음란물", // Obscene material
  "음란행위", // Obscene act
  "외설", // Obscenity
  "변태", // Pervert
  "변태놈", // Pervert bastard
  "변태새끼", // Pervert bastard
  "색마", // Sex fiend
  "색골", // Lecher
  "호색한", // Lecher/philanderer
  "음탕", // Debauchery
  "치한", // Groper (from Japanese)
  "성추행", // Sexual harassment
  "성희롱", // Sexual harassment
  "추행", // Indecent act
  "성범죄", // Sex crime
  "성도착", // Sexual perversion
  "관음증", // Voyeurism
  "가학증", // Sadism
  "피학증", // Masochism
  "소아성애", // Pedophilia (Korean term)
  "아동성범죄", // Child sex crime
  "성노예", // Sex slave
  "매매춘", // Sex trade (buying/selling)
  "성인용품", // Adult goods
  "딜도", // Dildo
  "바이브레이터", // Vibrator
  "콘돔", // Condom
  "박아주다", // To fuck (give)
  "따먹히다", // To be fucked
  "꽂다", // To stick in (sexual)
  "넣다", // To put in (sexual context)
  "빨다", // To suck (sexual)
  "핥다", // To lick (sexual)
  "빠구리", // Sex (vulgar slang)
  "뒷치기", // From behind (sexual)
  "질싸", // Vaginal ejaculation
  "얼싸", // Facial (sexual)
  "가슴싸", // Chest ejaculation
  "입싸", // Oral ejaculation
  "안에싸", // Ejaculate inside
  "발사", // Fire/ejaculate
  "사까시", // Blowjob (from Japanese)
  "보빨", // Pussy licking (vulgar)
  "자빨", // Dick sucking (vulgar)
  "좆빨", // Dick sucking (vulgar)
  "잠지", // Female genitalia (dialectal)
  "씹팔이", // Vulgar derogatory
  "풍속", // Sex industry (from Japanese)

  // Additional slurs
  "조선족", // Joseonjok (derogatory context)
  "짱개년", // Chinese slur + bitch
  "짱개놈", // Chinese slur + bastard
  "쪽바리년", // Japanese slur + bitch
  "쪽바리놈", // Japanese slur + bastard
  "깜둥이년", // Black slur + bitch
  "깜둥이놈", // Black slur + bastard
  "동남아", // Southeast Asian (derogatory context)
  "다문화", // Multicultural (derogatory context)
  "혼혈", // Mixed blood (derogatory)
  "튀기", // Mixed race (derogatory)
  "왜놈", // Japanese bastard (historical slur)
  "왜놈새끼", // Japanese bastard offspring
  "왜구", // Japanese pirate (slur)
  "되놈", // Chinese bastard (slur)
  "오랑캐", // Barbarian (historical slur)
  "코쟁이", // Big-nose (Western slur)
  "양코배기", // Western nose (slur)
  "캄보디아년", // Cambodian woman (derogatory)
  "필리핀년", // Filipino woman (derogatory)

  // Additional internet abbreviations
  "ㅈㅈ", // Abbreviation: 좆좆/졌다 (gg/lost)
  "ㅂㅅㅇ", // Abbreviation: 병신아
  "ㅅㅂㄴ", // Abbreviation: 씨발놈
  "ㅅㅂㄴㄴ", // Abbreviation: 씨발년
  "ㅅㅂㅅㄲ", // Abbreviation: 씨발새끼
  "ㅈㅁㅎ", // Abbreviation: 좆만한
  "ㅈㄲ", // Abbreviation: 좆까
  "ㅅㅅ", // Abbreviation: 섹스
  "ㅂㅈ", // Abbreviation: 보지
  "ㅈㅈ남", // Abbreviation: 좆좆 + man
  "ㅊㄴ", // Abbreviation: 창녀
  "ㅆㄹㄱ년", // Abbreviated + bitch
  "ㄱㅅㄲ", // Abbreviation: 개새끼
  "ㄱㄴ", // Abbreviation: 개년
  "ㅁㅊㅅㄲ", // Abbreviation: 미친새끼
  "ㅈㄴㅅㄲ", // Abbreviation: 존나새끼
  "ㅈㅅ", // Abbreviation: 좆같은/지랄
  "ㅍㅌㅊ", // Abbreviation: 판단은 추 (meme)
  "ㅇㅂ", // Abbreviation: 오빠/assorted
  "ㅗㅗ", // Double middle finger

  // Modern Korean internet slang additions
  "느개비", // Your dad (derogatory slang)
  "느금", // Your mom (abbreviated derogatory)
  "느개미", // Your mom (variant)
  "노무현", // Used as profanity substitute (controversial)
  "이기야", // Gyeongsang exclamation (aggressive)
  "좆문가", // Dick expert (sarcastic)
  "좆소", // Dick company (small terrible company)
  "헬조선", // Hell Joseon (Korea is hell)
  "흙수저", // Dirt spoon (born poor, derogatory)
  "김여사", // Ms. Kim (bad female driver slur)
  "충무공", // Used sarcastically as insult
  "노답", // No answer (hopeless person)
  "답정너", // Answer-decided-you (close-minded)
  "문찐", // Door-loser (shut-in)
  "혐짤", // Disgusting photo
  "ㅈ망", // Abbreviation: dick-doomed
  "갈보", // Prostitute (archaic)
  "화냥", // Slut (archaic)
  "작부", // Barmaid/prostitute
  "요년", // This bitch
  "요놈", // This bastard
  "이년", // This bitch
  "이놈", // This bastard
  "그년", // That bitch
  "그놈", // That bastard
  "저년", // That bitch (over there)
  "저놈", // That bastard (over there)
  "년놈", // Bitches and bastards
  "잡것", // Lowlife thing
  "잡것들", // Lowlife things (plural)
  "못난이", // Ugly person
  "못생긴년", // Ugly bitch
  "못생긴놈", // Ugly bastard
  "뚱뚱이", // Fatty
  "뚱보", // Fatso
  "뚱땡이", // Fatty (childish)
  "찐빵", // Steamed bun (fat person)
  "돼지년", // Pig bitch
  "돼지놈", // Pig bastard
  "돼지새끼", // Pig bastard
  "원숭이", // Monkey (dehumanizing)
  "짐승", // Beast (dehumanizing)
  "짐승새끼", // Beast bastard
  "인간쓰레기", // Human trash
  "인간말종", // Human scum
  "인간이하", // Sub-human
  "사람도아닌것", // Not even a person
  "네이년", // Internet bitch (from Naver)
  "일베충", // Ilbe bug (political insult)
  "메갈충", // Megalia bug (political insult)
  "워마드충", // Womad bug (political insult)
  "페미충", // Feminist bug
  "꼴페미", // Disgusting feminist
  "미러링충", // Mirroring bug
  "군무새", // Military parrot (repeater)
  "앵무새", // Parrot (mindless repeater)
  "벌레새끼", // Bug bastard
  "벌레만도못한", // Worse than a bug
  "구더기", // Maggot
  "구더기만도못한", // Worse than a maggot
  "기생충", // Parasite
  "기생충새끼", // Parasite bastard
  "좀비", // Zombie (dehumanizing)

  // Gyeongsang dialect profanity
  "마이묵어라", // Eat a lot (sarcastic aggression)
  "니캐", // You (Gyeongsang hostile)
  "니기미", // Your mother (Gyeongsang vulgar)
  "씨부럴", // Fuck (Gyeongsang variant)
  "머시마", // What the hell (Gyeongsang)
  "무신", // What (Gyeongsang aggressive)
  "이자슥아", // This bastard (Gyeongsang)
  "자슥", // Bastard (Gyeongsang)
  "머하노", // What are you doing (aggressive)
  "니거", // Your thing (can be vulgar)
  "아이가", // No way (exasperated)
  "지랄발광", // Going absolutely crazy
  "맞을래", // Wanna get hit?
  "한대맞을래", // Wanna get punched?

  // Jeolla dialect profanity
  "거시기", // That thing (euphemistic vulgar)
  "쥑일놈", // Damned bastard (Jeolla)
  "쥑일년", // Damned bitch (Jeolla)
  "뭐시여", // What is it (aggressive, Jeolla)
  "허벌나게", // Extremely/outrageously (Jeolla)
  "쌉놈", // Low bastard (Jeolla variant)
  "되바라진", // Insolent (Jeolla)
  "건달", // Thug/hoodlum
  "고놈", // That bastard (Jeolla)
  "고년", // That bitch (Jeolla)
  "뒈진다", // Gonna die (Jeolla variant)

  // Chungcheong dialect profanity
  "바보유", // Idiot (Chungcheong ending)
  "왜그려", // Why (Chungcheong, aggressive)
  "미치겠슈", // Going crazy (Chungcheong)
  "뭐여이게", // What is this (Chungcheong, aggressive)
  "짜증나유", // Annoying (Chungcheong)

  // Texting shortcuts for profanity
  "ㅅㅂㄹㅁㅋ", // Compound abbreviation
  "ㅂㅅㄱㅌ", // Abbreviation compound
  "ㅈㄹㅁㅈ", // 지랄맞다 abbreviation
  "ㅈㄲㄹ", // 좆까라 abbreviation
  "ㅆ발", // 씨발 partial
  "ㅆ빨", // 씨빨 partial
  "ㅅ발", // 시발 partial
  "tlqkf", // 시발 (keyboard mapping)
  "ㅂ신", // 병신 partial
  "qudtls", // 병신 (keyboard mapping)
  "tpvmf", // 시발 variant (keyboard)
  "ㅅㅂ놈아", // Abbreviated fuck + bastard vocative
  "ㅅㅂ년아", // Abbreviated fuck + bitch vocative
  "ㅂㅅ새끼", // Abbreviated retard + bastard
  "ㄱㅅㄲ아", // Abbreviated dog bastard vocative
  "ㄴㄱㅁ뒤졌어", // Your mom dead (abbreviated)
  "ㅈㄴ웃기네", // Fucking funny (abbreviated)

  // Additional body-part vulgarities
  "좆대", // Dick (vulgar slang)
  "씹구멍", // Vulgar hole
  "똥침", // Poop-needle (prank, vulgar)
  "젖가슴", // Breasts (vulgar)
  "음낭", // Scrotum
  "자궁구", // Cervix (vulgar context)
  "귀두", // Glans
  "포피", // Foreskin
  "전립선", // Prostate (vulgar context)
  "유방", // Breast (vulgar context)
  "큰자지", // Big dick
  "작은자지", // Small dick (insult)
  "엉덩이", // Buttocks (vulgar context)
  "궁둥이", // Butt (childish/vulgar)
  "볼기짝", // Butt cheek (vulgar)
  "치골", // Pubic bone (vulgar context)
  "고추", // Pepper (child's word for penis)
  "잦", // Variant spelling of 자지
  "봊", // Variant spelling of 보지

  // Additional compound insults
  "씨발병신새끼", // Fuck retard bastard
  "개좆같은새끼", // Dog-dick-like bastard
  "미친년아죽어", // Crazy bitch, die
  "미친놈아죽어", // Crazy bastard, die
  "존나병신같은새끼", // Fucking retard-like bastard
  "존나쓰레기같은년", // Fucking trash-like bitch
  "좆까라이새끼야", // Fuck off you bastard
  "느금마한테말해", // Tell your mom (derogatory)
  "애미없는새끼", // Motherless bastard
  "애비없는새끼", // Fatherless bastard
  "고아새끼", // Orphan bastard
  "부모없는새끼", // Parentless bastard
  "니미럴새끼", // Your mom + bastard
  "조져버린다", // I'll fuck you up
  "조져줄까", // Shall I fuck you up
  "패버린다", // I'll beat you up
  "패줄까", // Shall I beat you up
  "쳐맞아라", // Get hit
  "맞아죽어", // Get beaten to death
  "죽여버린다", // I'll kill you
  "쳐죽인다", // I'll beat you to death
  "때려죽인다", // I'll beat you to death
  "찢어버린다", // I'll tear you apart
  "밟아버린다", // I'll stomp on you
  "뭉개버린다", // I'll crush you
  "씹어먹는다", // I'll chew you up
  "삼켜버린다", // I'll swallow you up

  // Additional exclamations and expressions
  "젠장", // Damn
  "제기랄", // Damn it
  "빌어먹을", // Damned
  "망할", // Damned/doomed
  "지긋지긋", // Sick and tired
  "꼴불견", // Unsightly
  "역겹다", // Disgusting
  "추잡하다", // Vile
  "더럽다", // Dirty/filthy (insult)
  "천하다", // Low-class/vulgar
  "비열하다", // Despicable
  "치사하다", // Petty/despicable
  "비겁하다", // Cowardly
  "겁쟁이", // Coward
  "겁보", // Scaredy cat
  "찌질이", // Pathetic loser
  "찐따짓", // Loser behavior
  "루저", // Loser (loanword)
  "덜떨어진", // Not fully developed (insult)
  "모자란", // Lacking (insult for intelligence)
  "멍청이", // Idiot
  "멍청한놈", // Stupid bastard
  "멍청한년", // Stupid bitch
  "바보", // Idiot/fool
  "바보새끼", // Idiot bastard
  "멍청한새끼", // Stupid bastard
  "돌대가리", // Rock head (stupid)
  "돌머리", // Rock head (stupid)
  "돈대가리", // Money head (materialistic, insult)
  "흉물", // Monstrosity/eyesore
  "추녀", // Ugly woman
  "추남", // Ugly man
  "꼴보기싫다", // Can't stand looking at you
  "눈깔", // Eyeball (vulgar)
  "주둥아리닥쳐", // Shut your snout
  "입닥쳐", // Shut your mouth
  "닥치고꺼져", // Shut up and get lost

  // Romanized Korean profanity (English keyboard input)
  "ssibal", // Fuck
  "sibal", // Fuck (variant)
  "shibal", // Fuck (variant)
  "sshibal", // Fuck (variant)
  "ssipal", // Fuck (censored variant)
  "sipal", // Fuck (censored variant)
  "gaesaekki", // Son of a bitch
  "gae saekki", // Son of a bitch (spaced)
  "gaenyeon", // Bitch (dog-woman)
  "byeongsin", // Retard
  "byungshin", // Retard (variant)
  "pyeongsin", // Retard (variant)
  "jiral", // Acting crazy/bullshit
  "jot", // Dick
  "jod", // Dick (variant)
  "jod gata", // Dick-like
  "boji", // Pussy
  "bozi", // Pussy (variant)
  "jaji", // Penis
  "saekki", // Bastard
  "sekki", // Bastard (variant)
  "seki", // Bastard (variant)
  "nom", // Bastard
  "nyeon", // Bitch
  "nyon", // Bitch (variant)
  "ssangnom", // Low-class bastard
  "ssangnyeon", // Low-class bitch
  "changnyeo", // Whore
  "changnyuh", // Whore (variant)
  "geollae", // Slut
  "georae", // Slut (variant)
  "ttorai", // Lunatic
  "ddorai", // Lunatic (variant)
  "jjindda", // Loser
  "dakchyeo", // Shut up
  "dakchuh", // Shut up (variant)
  "kkeojyeo", // Get lost
  "gguh jyuh", // Get lost (variant)
  "yeotmeogeo", // Go fuck yourself
  "jonna", // Fucking/very (vulgar intensifier)
  "jotna", // Fucking/very (vulgar variant)
  "neugumma", // Your mom (derogatory)
  "nigimi", // Your mother (vulgar)
  "nimi", // Your mother (vulgar abbreviation)
  "nimilal", // Your mother (vulgar variant)
  "niaebi", // Your father (derogatory)
  "niaemi", // Your mother (derogatory)
  "michin", // Crazy
  "michinnom", // Crazy bastard
  "michinnyeon", // Crazy bitch
  "michinsaekki", // Crazy bastard
  "hogu", // Sucker/pushover
  "horosekki", // Bastard (fatherless)
  "jobalna", // Fucking (variant intensifier)
  "gaegateun", // Dog-like
  "gaejasik", // Dog's offspring
  "gaesseuregi", // Dog trash
  "gaejiral", // Dog tantrum (bullshit)
  "gaesori", // Dog sound (bullshit)
  "gaepan", // Dog mess (shitshow)
  "jotkkara", // Fuck off
  "jotkkala", // Fuck off (variant)
  "ppakdaegari", // Stupid head
  "meongcheong", // Stupid
  "meongcheongi", // Idiot
  "babo", // Idiot
  "babosekki", // Idiot bastard
  "doldaegari", // Rock head
  "tteungbo", // Fatso
  "tteungtteongi", // Fatty
  "dwaeji", // Pig (insult)
  "jugeora", // Die
  "jugeo", // Die (casual)
  "jugeobeolyeo", // Go die
  "dwijyeora", // Die (vulgar)
  "dwijyeobeolyeo", // Just die
  "jasal hae", // Kill yourself
  "jjijeo", // Tear apart
  "jojyeo", // Fuck up
  "paejwo", // Beat up
  "matazugeo", // Get beaten to death
  "yeombyeong", // Plague (exclamation)
  "yeombyeonghal", // Plague upon you
  "jenjang", // Damn
  "jegilar", // Damn it
  "bireomeogeul", // Damned
  "manghal", // Doomed/damned
  "sseulegi", // Trash
  "ingansseuregi", // Human trash
  "inganmaljong", // Human scum
  "beollae", // Bug (dehumanizing)
  "beollaesaekki", // Bug bastard
  "gisaengchung", // Parasite
  "gudeogi", // Maggot
  "weonsung i", // Monkey (dehumanizing)
  "jimseung", // Beast (dehumanizing)
  "ggondae", // Old-fashioned person
  "teuldak", // Boomer (derogatory)
  "hannamchung", // Korean male bug
  "hannyeochung", // Korean female bug
  "mamchung", // Mom-bug
  "geupsikchung", // School-lunch bug
  "gimchinyeo", // Kimchi woman (misogynist)
  "doenjangnyo", // Doenjang woman (misogynist)
  "gaejeossi", // Dog-uncle
  "gwanjong", // Attention whore
  "eogeurol", // Aggro/troll
  "nodap", // No answer (hopeless)
  "jjijil i", // Pathetic loser
  "lujeo", // Loser (loanword)
  "chuno", // Ugly woman
  "chunam", // Ugly man
  "hyangeongmu", // Disgusting photo
  "galbo", // Prostitute (archaic)
  "hwanyangnyo", // Slut (archaic)
  "jagbu", // Barmaid/prostitute
  "jabnom", // Lowlife
  "jabnyeon", // Lowlife bitch
  "geomjaengi", // Coward
  "geobbo", // Scaredy cat
  "mosnangi", // Ugly person

  // Keyboard-mapped evasions (Korean typed on English keyboard)
  "rlawls", // 기싫 on English keyboard
  "wlfkf", // 지랄 on English keyboard
  "todrkf", // 새끼 on English keyboard
  "todrl", // 새기 variant
  "rotodk", // 개새끼 approximation
  "rnrtodk", // 개새끼 variant
  "rkqtlr", // 간싸 approximation
  "thvmf", // 씨발 (alternate mapping)
  "qkstod", // 방신 (병신 variant mapping)
  "wjdrmf", // 저놈
  "dusruf", // 연놈
  "anfro", // 망할
  "dbsxkf", // 뇬탈 variant
  "dkssud", // 닥쳐
  "Rkwk", // 까자 variant
  "rksem", // 가놈 variant
  "rlqns", // 기분 (used in profane context)
  "vkdlf", // 바이 variant
  "tnlqkf", // 시발 variant
  "tnvmf", // 시발 variant mapping
  "qudtlstodrl", // 병신새끼
  "tlqkftodrl", // 씨발새끼
  "rotodrldl", // 개새끼이
  "wlfkfgksms", // 지랄하는
  "anstjd", // 뭐시 variant

  // Additional compound insults
  "개후레자식", // Dog bastard offspring
  "개후레새끼", // Dog bastard child
  "개후레", // Dog bastard
  "후레자식", // Bastard offspring
  "후레새끼", // Bastard child
  "엠생", // Mom-born (your mother insult)
  "엠뒤", // Mom-dead (your mother died)
  "니미칠", // Your mom (vulgar variant)
  "니미세끼", // Your mom's offspring
  "느그엄마", // Your mother (dialectal)
  "느그아빠", // Your father (dialectal)
  "느그마", // Your mother (abbreviated)
  "쳐먹어", // Eat it (vulgar)
  "쳐박아", // Shove it (vulgar)
  "처먹을", // To eat (vulgar)
  "쳐발라", // Get the fuck out
  "좆도모르는", // Doesn't know dick
  "존나쉬운", // Fucking easy (insult)
  "존나어려운", // Fucking hard (insult)
  "존나못생긴", // Fucking ugly
  "존나찐따", // Fucking loser
  "씨발련아", // Fucking wench (vocative)
  "개쓰레기새끼", // Dog-trash bastard
  "미친병신새끼", // Crazy retard bastard
  "미친개같은", // Crazy dog-like
  "개미친새끼", // Dog-crazy bastard
  "좆같은세상", // Dick-like world
  "좆같은인생", // Dick-like life
  "씹새끼야", // Vulgar bastard (vocative)
  "개좆같은놈", // Dog-dick-like bastard
  "개좆같은년", // Dog-dick-like bitch
  "빡쳐죽겠다", // So pissed I could die
  "열받아죽겠다", // So angry I could die
  "짜증나죽겠다", // So annoyed I could die
  "지겨워죽겠다", // So bored I could die
  "맞아뒤져라", // Get beaten and die
  "쳐맞고뒤져", // Get hit and die
  "존나쓸모없는", // Fucking useless
  "아무짝에쓸모없는", // Utterly useless
  "쓸모없는놈", // Useless bastard
  "쓸모없는년", // Useless bitch
  "한심한놈", // Pathetic bastard
  "한심한년", // Pathetic bitch
  "한심한새끼", // Pathetic bastard
  "불쌍한새끼", // Pitiful bastard (sarcastic)
  "저능아", // Low-IQ person
  "정박아", // Mentally deficient (insult)
  "미치광이", // Madman
  "미치광이새끼", // Madman bastard
  "또라이같은", // Lunatic-like

  // Additional sexual terms
  "성인동영상", // Adult video
  "야한동영상", // Lewd video
  "야사", // Lewd photo
  "야설", // Erotic fiction
  "음란사이트", // Obscene website
  "성인사이트", // Adult website
  "떡치다", // To have sex (slang)
  "떡실신", // Fainting from sex
  "말뚝박기", // Piledriving (sexual)
  "쌍떡", // Double sex
  "앞뒤", // Front and back (sexual)
  "뒷구멍", // Back hole (vulgar)
  "유륜", // Areola
  "음순", // Labia
  "대음순", // Labia majora
  "소음순", // Labia minora
  "치구", // Pubic area (vulgar)
  "회음부", // Perineum (vulgar context)
  "정관", // Vas deferens (vulgar context)
  "포르노배우", // Porn actor
  "야한짓", // Lewd act
  "음란한짓", // Obscene act
  "변태짓", // Perverse act
  "추잡한짓", // Vile act
  "애널", // Anal
  "오럴", // Oral
  "쓰리피", // 3P (threesome)
  "란제리", // Lingerie (sexual context)
  "스트립", // Strip
  "스트리퍼", // Stripper
  "에스코트", // Escort
  "매춘굴", // Brothel
  "사창가", // Red-light district
  "유곽", // Brothel (traditional)
  "술집여자", // Bar girl
  "접대부", // Hostess (derogatory)
  "안마시술소", // Massage parlor (euphemism)

  // Additional slurs
  "동남아년", // Southeast Asian woman (derogatory)
  "동남아놈", // Southeast Asian man (derogatory)
  "조센징", // Korean (extreme self-deprecating slur)
  "한국년", // Korean woman (derogatory context)
  "짱깨새끼", // Chinese slur + bastard
  "쪽발이", // Japanese (slur variant)
  "왜놈년", // Japanese bastard woman
  "흑인놈", // Black man (derogatory)
  "흑인년", // Black woman (derogatory)
  "백인놈", // White man (derogatory)
  "중국놈", // Chinese man (derogatory)
  "중국년", // Chinese woman (derogatory)
  "일본놈", // Japanese man (derogatory)
  "일본년", // Japanese woman (derogatory)
  "다문화년", // Multicultural woman (derogatory)
  "다문화놈", // Multicultural man (derogatory)
  "장애인놈", // Disabled bastard (derogatory)
  "장애인년", // Disabled bitch (derogatory)
  "장애인새끼", // Disabled bastard
  "불구", // Cripple (derogatory)
  "불구자", // Crippled person
  "절름발이", // Limping person (derogatory)
  "곱사등이", // Hunchback (derogatory)
  "꺼벙이", // Dark-skinned person (derogatory)
  "이주노동자", // Migrant worker (derogatory context)
  "외노자", // Foreign worker (derogatory abbreviation)

  // Additional dialect profanity (Gangwon)
  "머래", // What (Gangwon aggressive)
  "쎄리", // Hit hard (Gangwon)
  "패대기", // Slam/throw down
  "패대기치다", // To slam down

  // Additional dialect (Jeju)
  "호멩이", // Fool (Jeju)
  "경헌", // Like that (Jeju, aggressive context)
  "하르방", // Old man (Jeju, can be derogatory)

  // Additional internet slang
  "ㅈ소", // Abbreviation: 좆소 (dick company)
  "ㅂㅅ짓", // Abbreviation: 병신짓
  "ㅁㅊㄱ", // Abbreviation: 미치겠
  "ㄱㅈ같은", // Abbreviation: 개좆같은
  "ㅅㅂㅅㄲ야", // 씨발새끼야
  "ㄴㄱㅁ한테", // 느금마한테
  "ㅂㅅ력", // 병신력
  "ㅇㅂ이", // 오빠이 (mockery)
  "ㅈ됨", // 좆됨 (fucked)
  "ㅈ망함", // 좆망함 (dick-doomed)
  "ㅋㅋ루삥뽕", // Mockery sound
  "ㅎㅂ", // Abbreviation: 혐짤/흥분
  "ㅊㄴ년", // 창녀 + bitch
  "ㅊㅊ", // 추천/창창 context-dependent
  "년놈들", // Bitches and bastards (plural)
  "놈년들", // Bastards and bitches (plural)
  "씨발것들", // Fucking things (plural)
  "개새끼들", // Sons of bitches (plural)
  "병신들", // Retards (plural)
  "좆같은것들", // Dick-like things (plural)
  "쓰레기들", // Trash (plural)
  "벌레들", // Bugs (plural)
  "찐따들", // Losers (plural)
  "미친놈들", // Crazy bastards (plural)
  "미친년들", // Crazy bitches (plural)

  // Additional modern Korean insults
  "무개념", // No concept (clueless)
  "개념없는", // Conceptless (clueless)
  "저질", // Low-quality
  "저급", // Low-grade
  "하류", // Lower class
  "하등", // Lower grade (insult)
  "얼간이", // Simpleton
  "천치", // Natural fool
  "백치", // Idiot (archaic)
  "둔재", // Dull person
  "퇴물", // Has-been
  "구닥다리", // Old-fashioned/outdated
  "골빈년", // Empty-headed bitch
  "골빈놈", // Empty-headed bastard
  "오지라퍼", // Nosy busybody
  "진상", // Difficult customer/person
  "진상놈", // Difficult bastard
  "진상년", // Difficult bitch
  "상폐녀", // Upper-waste woman (derogatory)
  "하폐남", // Lower-waste man (derogatory)
  "씹덕새끼", // Vulgar otaku bastard
  "좆선비새끼", // Dick-scholar bastard
  "존나구린", // Fucking pathetic
  "존나더러운", // Fucking dirty
  "존나역겨운", // Fucking disgusting
  "존나징그러운", // Fucking creepy
  "씹구린", // Vulgar + pathetic
  "개구린", // Dog + pathetic
  "좆구린", // Dick + pathetic

  // === EXPANDED ENTRIES ===

  // Additional 씨발/시발 variants - exhaustive
  "시발놈의새끼", // Fuck bastard's offspring (variant)
  "시발년의새끼", // Fuck bitch's offspring (variant)
  "씨발련의", // Fucking wench's
  "씨발롬의", // Fucking guy's (corruption)
  "씨발것의", // Fucking thing's
  "씨발롬아", // Fucking guy (vocative)
  "씨발것아", // Fucking thing (vocative)
  "씨발것들아", // Fucking things (vocative plural)
  "씨부랄것", // Vulgar variant thing
  "씨부랄새끼들", // Vulgar bastards
  "씨불", // Censored variant
  "씨블", // Censored variant
  "씨브랄", // Censored variant
  "씨방", // Censored variant
  "씨방새", // Censored variant + bird
  "씨방놈", // Censored variant + bastard
  "씨방년", // Censored variant + bitch
  "씨밤바", // Euphemistic variant
  "씨빠", // Truncated variant
  "씨파", // Truncated variant
  "씨부렁놈", // Vulgar variant bastard
  "씨부렁년", // Vulgar variant bitch
  "씨부렁새끼", // Vulgar variant bastard
  "시밤", // Censored variant
  "시방", // Dialectal variant
  "시벌", // Variant spelling
  "시불", // Variant spelling
  "시블", // Variant spelling
  "시팔놈", // Censored variant + bastard
  "시팔년", // Censored variant + bitch
  "시팔새끼", // Censored variant + bastard
  "씨팔놈", // Censored variant + bastard
  "씨팔년", // Censored variant + bitch
  "씨팔새끼", // Censored variant + bastard
  "ㅆ발놈", // Partial + bastard
  "ㅆ발년", // Partial + bitch
  "ㅆ발새끼", // Partial + bastard
  "ㅅ발놈", // Partial + bastard
  "ㅅ발년", // Partial + bitch
  "ㅅ발새끼", // Partial + bastard
  "시이발", // Extended variant
  "씨이발", // Extended variant
  "씌발", // Misspelling variant
  "씌팔", // Misspelling variant
  "씹발년", // Vulgar compound + bitch
  "씹발놈", // Vulgar compound + bastard
  "씹발새끼", // Vulgar compound + bastard
  "씹팔년", // Vulgar variant + bitch
  "씹팔놈", // Vulgar variant + bastard
  "씹팔새끼", // Vulgar variant + bastard
  "좆씨발", // Dick-fuck
  "존나씨발새끼", // Fucking fuck bastard
  "시부렬", // Variant spelling
  "시부래", // Variant spelling
  "시부럴", // Variant spelling
  "씨부래", // Variant spelling

  // Additional 개 compound insults - comprehensive
  "개미친놈", // Dog-crazy bastard
  "개미친년", // Dog-crazy bitch
  "개같은새끼", // Dog-like bastard
  "개같은것", // Dog-like thing
  "개같은인간", // Dog-like human
  "개같은세상", // Dog-like world
  "개같은인생", // Dog-like life
  "개같은상황", // Dog-like situation
  "개답없는", // Dog-no answer (hopeless)
  "개후레자식들", // Dog bastard offspring (plural)
  "개후레새끼들", // Dog bastard children (plural)
  "개무개념", // Dog-no concept
  "개한심한", // Dog-pathetic
  "개찐따같은", // Dog-loser-like
  "개변태", // Dog-pervert
  "개변태새끼", // Dog-pervert bastard
  "개쓰레기인간", // Dog-trash human
  "개쓰레기같은인간", // Dog-trash-like human
  "개쓰레기같은놈", // Dog-trash-like bastard
  "개쓰레기같은년", // Dog-trash-like bitch
  "개역겨운놈", // Dog-disgusting bastard
  "개역겨운년", // Dog-disgusting bitch
  "개짜증나는", // Dog-annoying
  "개짜증나는놈", // Dog-annoying bastard
  "개짜증나는년", // Dog-annoying bitch
  "개머저리", // Dog-dimwit
  "개한심", // Dog-pathetic (short)
  "개구역질나는", // Dog-nausea-inducing
  "개토할것같은", // Dog-vomit-inducing
  "개징그러운", // Dog-creepy
  "개꼴사나운", // Dog-unsightly
  "개망신", // Dog-disgrace
  "개창피한", // Dog-embarrassing
  "개더러운놈", // Dog-dirty bastard
  "개더러운년", // Dog-dirty bitch
  "개추잡한", // Dog-vile
  "개비열한", // Dog-despicable
  "개치사한", // Dog-petty
  "개비겁한", // Dog-cowardly
  "개한심스러운", // Dog-pathetically
  "개꼬라지", // Dog-state (pathetic state)

  // Additional 좆 compounds - exhaustive
  "좆같은인간", // Dick-like human
  "좆같은상황", // Dick-like situation
  "좆같은일", // Dick-like job/thing
  "좆같은말", // Dick-like talk
  "좆같은소리", // Dick-like sound (nonsense)
  "좆같은짓", // Dick-like behavior
  "좆같은게임", // Dick-like game
  "좆같은나라", // Dick-like country
  "좆같은회사", // Dick-like company
  "좆같은학교", // Dick-like school
  "좆같은선생", // Dick-like teacher
  "좆소기업", // Dick small company
  "좆문가놈", // Dick expert bastard
  "좆문가년", // Dick expert bitch
  "좆도모르는놈", // Bastard who doesn't know dick
  "좆도모르는년", // Bitch who doesn't know dick
  "좆도모르면서", // While not knowing dick
  "좆도아닌놈", // Not-even-dick bastard
  "좆도아닌년", // Not-even-dick bitch
  "좆도없는놈", // Having-no-dick bastard
  "좆도없는년", // Having-no-dick bitch
  "좆밥놈", // Dick-rice bastard (loser)
  "좆밥년", // Dick-rice bitch (loser)
  "좆빠는놈", // Dick-sucking bastard
  "좆빠는년", // Dick-sucking bitch
  "좆이나빨아라", // Go suck dick
  "좆이나빨아", // Suck a dick
  "좆까라이", // Fuck off (full)
  "좆까는놈", // Fuck-off bastard
  "좆같이생긴", // Looking dick-like

  // Additional 병신 compounds - exhaustive
  "병신같은짓", // Retard-like behavior
  "병신같은소리", // Retard-like sound (nonsense)
  "병신같은말", // Retard-like talk
  "병신같은인간", // Retard-like human
  "병신같은게임", // Retard-like game
  "병신같은행동", // Retard-like action
  "개병신짓", // Dog-retard behavior
  "존나병신짓", // Fucking retard behavior
  "씹병신짓", // Vulgar retard behavior
  "대병신짓", // Grand retard behavior
  "극병신", // Extreme retard
  "초병신", // Ultra retard
  "핵병신", // Nuclear retard
  "병신력폭발", // Retard power explosion
  "병신력만렙", // Retard power max level
  "병신중의병신", // Retard among retards
  "병신오브병신", // Retard of retards (Konglish)
  "병신의끝판왕", // Ultimate retard
  "병신레전드", // Retard legend
  "킹병신", // Already listed

  // Additional 씹 compounds
  "씹놈", // Vulgar bastard
  "씹놈아", // Vulgar bastard (vocative)
  "씹련", // Vulgar wench
  "씹련아", // Vulgar wench (vocative)
  "씹치", // Vulgar
  "씹창", // Vulgar window (insult)
  "씹뚜껑", // Vulgar lid (insult)
  "씹같은", // Vulgar-like
  "씹같은놈", // Vulgar-like bastard
  "씹같은년", // Vulgar-like bitch
  "씹같은새끼", // Vulgar-like bastard
  "씹귀신", // Vulgar ghost
  "씹질", // Vulgar acts

  // 존나/졸라 variants and compounds
  "졸라", // Fucking (variant of 존나)
  "존나게", // Fuckingly
  "졸라게", // Fuckingly (variant)
  "존나리", // Fucking (variant)
  "졸라리", // Fucking (variant)
  "존나웃긴", // Fucking funny
  "존나슬픈", // Fucking sad
  "존나힘든", // Fucking hard
  "존나약한", // Fucking weak
  "존나못하는", // Fucking bad at
  "존나빠른", // Fucking fast
  "존나느린", // Fucking slow
  "존나큰", // Fucking big
  "존나작은", // Fucking small
  "존나많은", // Fucking many
  "존나적은", // Fucking few
  "존나비싼", // Fucking expensive
  "존나싼", // Fucking cheap
  "존나뚱뚱한", // Fucking fat
  "존나마른", // Fucking thin
  "존나키큰", // Fucking tall
  "존나키작은", // Fucking short
  "존나지루한", // Fucking boring
  "존나짜증나는", // Fucking annoying
  "존나귀찮은", // Fucking bothersome
  "존나싫은", // Fucking hateful
  "졸라쓰레기", // Fucking trash (variant)
  "졸라병신", // Fucking retard (variant)
  "졸라새끼", // Fucking bastard (variant)
  "졸라바보", // Fucking idiot (variant)
  "졸라멍청한", // Fucking stupid (variant)

  // Additional Korean internet abbreviations - comprehensive
  "ㅈㄴ못하네", // Fucking bad at (abbreviated)
  "ㅈㄴ역겹다", // Fucking disgusting (abbreviated)
  "ㅈㄴ짜증", // Fucking annoying (abbreviated)
  "ㅈㄴ더럽다", // Fucking dirty (abbreviated)
  "ㅈㄴ한심", // Fucking pathetic (abbreviated)
  "ㅈㄴ구리다", // Fucking pathetic (abbreviated)
  "ㅂㅅ놈", // Retard bastard (abbreviated)
  "ㅂㅅ년", // Retard bitch (abbreviated)
  "ㅂㅅ짓하네", // Doing retard stuff (abbreviated)
  "ㅂㅅ력ㅈㄴ", // Retard power fucking (abbreviated)
  "ㄱㅅㄲ들", // Dog bastards (abbreviated plural)
  "ㅅㅂ것", // Fucking thing (abbreviated)
  "ㅅㅂ것들", // Fucking things (abbreviated plural)
  "ㅅㅂ롬", // Fucking guy (abbreviated)
  "ㅅㅂ련", // Fucking wench (abbreviated)
  "ㅈ같다", // Dick-like (abbreviated)
  "ㅈ같은놈", // Dick-like bastard (abbreviated)
  "ㅈ같은년", // Dick-like bitch (abbreviated)
  "ㄱㅂㅅ", // Abbreviation: 개병신
  "ㄱㅂㅅ새끼", // Dog-retard bastard (abbreviated)
  "ㄱㅈ같다", // Dog-dick-like (abbreviated)
  "ㅇㅁ뒤졌어", // Your parent dead (abbreviated)
  "ㅈㄹㅁㅈ하네", // Crazy stuff (abbreviated)
  "ㅈㅁㅎ놈", // Dick-sized bastard (abbreviated)
  "ㅁㅊ병신", // Crazy retard (abbreviated)
  "ㅁㅊ좆", // Crazy dick (abbreviated)
  "ㅁㅊㅂㅅ", // Crazy retard (abbreviated)
  "ㄱㅉ새끼", // Dog-loser bastard (abbreviated)
  "ㅈㄲ놈", // Fuck-off bastard (abbreviated)
  "ㅈㄲ년", // Fuck-off bitch (abbreviated)
  "ㅅㅂㅂㅅ", // Fuck retard (abbreviated)

  // Keyboard evasion mappings - comprehensive
  "tlqkf새끼", // 시발 keyboard + bastard
  "tlqkfska", // 시발놈 keyboard
  "tlqkfsus", // 시발년 keyboard
  "qudtls새끼", // 병신 keyboard + bastard
  "wlfkfgks", // 지랄하 keyboard
  "tnlqkf새끼", // 씨발 variant + bastard
  "EKfxm", // 따먹 keyboard
  "qkRek", // 박다 keyboard
  "wkwl", // 자위 keyboard
  "rkdrks", // 강간 keyboard
  "vhwl", // 보지 keyboard
  "whrt", // 좆 keyboard

  // Gyeongsang dialect profanity - expanded
  "니기미씨발", // Your mother fuck (Gyeongsang)
  "니기미좆같은", // Your mother dick-like (Gyeongsang)
  "니캐새끼", // You bastard (Gyeongsang)
  "이자식아", // This bastard (Gyeongsang)
  "저자식아", // That bastard (Gyeongsang)
  "머하노이기", // What are you doing (Gyeongsang aggressive)
  "머라카노", // What did you say (Gyeongsang aggressive)
  "아이고씨발", // Oh my fuck (Gyeongsang)
  "니기미럴", // Your mother (Gyeongsang vulgar)
  "니거새끼", // Your bastard (Gyeongsang)
  "니거년", // Your bitch (Gyeongsang)
  "니거놈", // Your bastard (Gyeongsang)
  "이기뭐꼬", // What is this (Gyeongsang aggressive)
  "꺼져빠라", // Get lost (Gyeongsang)
  "죽을라카나", // Wanna die (Gyeongsang)
  "맞을라카나", // Wanna get hit (Gyeongsang)
  "뒤질라카나", // Wanna get fucked up (Gyeongsang)
  "씨부러", // Fuck (Gyeongsang variant)
  "니기미할", // Your mother damn (Gyeongsang)
  "씨부럴놈", // Fuck bastard (Gyeongsang)
  "씨부럴년", // Fuck bitch (Gyeongsang)
  "씨부럴새끼", // Fuck bastard (Gyeongsang)

  // Jeolla dialect profanity - expanded
  "거시기년", // That thing bitch (Jeolla)
  "거시기놈", // That thing bastard (Jeolla)
  "쥑일놈의새끼", // Damned bastard's offspring (Jeolla)
  "쥑일년의새끼", // Damned bitch's offspring (Jeolla)
  "허벌나게못하네", // Outrageously bad at (Jeolla)
  "허벌나게못생겼네", // Outrageously ugly (Jeolla)
  "쌉놈의새끼", // Low bastard's offspring (Jeolla)
  "되바라진놈", // Insolent bastard (Jeolla)
  "되바라진년", // Insolent bitch (Jeolla)
  "건달놈", // Thug bastard (Jeolla)
  "건달년", // Thug bitch (Jeolla)
  "고놈의자식", // That bastard's child (Jeolla)
  "고년의자식", // That bitch's child (Jeolla)
  "뒈진다잉", // Gonna die (Jeolla variant)
  "뒈져불란다", // Gonna die (Jeolla extended)
  "쥑여불란다", // Gonna kill (Jeolla)
  "팰란다", // Gonna beat (Jeolla)
  "맞을란다", // Gonna get hit (Jeolla)
  "지랄발광이여", // Going crazy (Jeolla)
  "허벌씨부렁", // Outrageously vulgar (Jeolla)
  "겁내못하네", // So bad at it (Jeolla)
  "겁내못생겼다", // So ugly (Jeolla)

  // Chungcheong dialect profanity - expanded
  "바보유놈", // Idiot bastard (Chungcheong)
  "왜그려놈아", // Why bastard (Chungcheong)
  "미치겠슈놈아", // Going crazy bastard (Chungcheong)
  "뭐여이게놈아", // What is this bastard (Chungcheong)
  "짜증나유놈아", // Annoying bastard (Chungcheong)
  "꺼져유", // Get lost (Chungcheong)
  "닥쳐유", // Shut up (Chungcheong)
  "죽을려유", // Wanna die (Chungcheong)
  "맞을려유", // Wanna get hit (Chungcheong)

  // Jeju dialect profanity - expanded
  "호멩이야", // Fool (Jeju exclamation)
  "호멩이놈", // Fool bastard (Jeju)
  "호멩이년", // Fool bitch (Jeju)
  "경허지말라", // Don't do that (Jeju aggressive)
  "하르방놈", // Old man bastard (Jeju)
  "할망구", // Old woman (Jeju derogatory)
  "하르방구", // Old man (Jeju derogatory)
  "멍텅구리", // Idiot (Jeju)
  "촐딱서니", // Stupid behavior (Jeju)
  "놈펜이", // Idiot (Jeju variant)

  // Gangwon dialect profanity - expanded
  "머래놈아", // What bastard (Gangwon)
  "머래년아", // What bitch (Gangwon)
  "쎄리쳐라", // Hit hard (Gangwon)
  "패대기쳐라", // Slam them (Gangwon)
  "쎄리쳐죽인다", // Hit hard to death (Gangwon)
  "빡세게해라", // Do it hard (Gangwon aggressive)
  "빡세게맞아라", // Get hit hard (Gangwon)

  // Konglish profanity - comprehensive
  "뻑큐놈", // Fuck you bastard (Konglish)
  "뻑큐년", // Fuck you bitch (Konglish)
  "뻑큐새끼", // Fuck you bastard (Konglish)
  "뻑큐아", // Fuck you (Konglish vocative)
  "셧업", // Shut up (Konglish)
  "겟아웃", // Get out (Konglish)
  "파킹", // Fucking (Konglish)
  "파킹놈", // Fucking bastard (Konglish)
  "파킹년", // Fucking bitch (Konglish)
  "파킹새끼", // Fucking bastard (Konglish)
  "뻑유", // Fuck you (Konglish variant)
  "팍유", // Fuck you (Konglish variant)
  "팩유", // Fuck you (Konglish variant)
  "팩오프", // Fuck off (Konglish)
  "비치", // Bitch (Konglish)
  "비치놈", // Bitch bastard (Konglish)
  "비치년", // Bitch bitch (Konglish)
  "선오브어비치", // Son of a bitch (Konglish)
  "마더파커", // Motherfucker (Konglish)
  "아쉬홀", // Asshole (Konglish)
  "아쓰홀", // Asshole (Konglish variant)
  "담잇", // Damn it (Konglish)
  "갓댐", // God damn (Konglish)
  "홀리쉿", // Holy shit (Konglish)
  "왓더팩", // What the fuck (Konglish)
  "피스오브쉿", // Piece of shit (Konglish)
  "고투헬", // Go to hell (Konglish)
  "바스타드", // Bastard (Konglish)
  "슬럿", // Slut (Konglish)
  "호어", // Whore (Konglish)
  "크랩", // Crap (Konglish)
  "저크", // Jerk (Konglish)
  "이디엇", // Idiot (Konglish)
  "모론", // Moron (Konglish)
  "리타드", // Retard (Konglish)
  "루저놈", // Loser bastard (Konglish)
  "루저년", // Loser bitch (Konglish)
  "루저새끼", // Loser bastard (Konglish)
  "프릭", // Freak (Konglish)
  "크리피", // Creepy (Konglish)
  "디스거스팅", // Disgusting (Konglish)
  "페세틱", // Pathetic (Konglish)
  "미저러블", // Miserable (Konglish)
  "피그", // Pig (Konglish)
  "도그", // Dog (Konglish insult)
  "랫", // Rat (Konglish)
  "패러사이트", // Parasite (Konglish)
  "트래시", // Trash (Konglish)
  "스컴", // Scum (Konglish)

  // Additional romanized Korean profanity - comprehensive
  "ssibal saekki", // Fuck bastard
  "ssibal nom a", // Fucking bastard (vocative)
  "ssibal nyeon a", // Fucking bitch (vocative)
  "ssipal saekki", // Fuck bastard (censored)
  "ssibural", // Vulgar variant
  "ssibureong", // Vulgar variant
  "ssiba", // Truncated fuck
  "ssibal geot", // Fucking thing
  "gaesaekki deul", // Dog bastards (plural)
  "gaenyeon a", // Dog-bitch (vocative)
  "gaenom a", // Dog-bastard (vocative)
  "gaejot", // Dog dick
  "gaeboji", // Dog pussy
  "gaesori haji ma", // Don't make dog sounds
  "gaejiral haji ma", // Don't do dog tantrum
  "gaepan iya", // It's a dog mess
  "byeongsin gateun", // Retard-like
  "byeongsin jit", // Retard behavior
  "byeongsin ryeok", // Retard power
  "ssip byeongsin", // Vulgar retard
  "gae byeongsin", // Dog retard
  "jonna byeongsin", // Fucking retard
  "jot gateun", // Dick-like
  "jot gateun saekki", // Dick-like bastard
  "jot gateun nom", // Dick-like bastard
  "jot gateun nyeon", // Dick-like bitch
  "jot kkara", // Fuck off
  "jot kkala", // Fuck off (variant)
  "jot manha", // Dick-sized
  "jot bap", // Dick rice (loser)
  "jot na", // Dick (intensifier)
  "jot daegari", // Dickhead
  "ssip saekki", // Vulgar bastard
  "ssip nyeon", // Vulgar bitch
  "ssip hal", // Vulgar prefix
  "ssip deok", // Vulgar otaku
  "ssip seonbi", // Vulgar hypocrite
  "michin gae saekki", // Crazy dog bastard
  "ttorai saekki", // Lunatic bastard
  "jjindda saekki", // Loser bastard
  "sseulegi gateun", // Trash-like
  "beollae saekki", // Bug bastard
  "gisaengchung saekki", // Parasite bastard
  "gudeogi saekki", // Maggot bastard
  "babo nom", // Idiot bastard
  "babo nyeon", // Idiot bitch
  "meongcheonghan nom", // Stupid bastard
  "meongcheonghan nyeon", // Stupid bitch
  "doldaegari nom", // Rock head bastard
  "jugeo beoryeo", // Go die
  "dwijyeo beoryeo", // Just die
  "jasal hae ra", // Kill yourself

  // Additional compound threats and violence
  "조져버린다이새끼", // I'll fuck you up, bastard
  "조져줄까이새끼", // Shall I fuck you up, bastard
  "패버린다이새끼", // I'll beat you up, bastard
  "패줄까이새끼", // Shall I beat you up, bastard
  "쳐맞아라이새끼", // Get hit, bastard
  "죽여버린다이새끼", // I'll kill you, bastard
  "쳐죽인다이새끼", // I'll beat you to death, bastard
  "때려죽인다이새끼", // I'll beat you to death, bastard
  "찢어버린다이새끼", // I'll tear you apart, bastard
  "밟아버린다이새끼", // I'll stomp on you, bastard
  "뭉개버린다이새끼", // I'll crush you, bastard
  "씹어먹는다이새끼", // I'll chew you up, bastard
  "칼로찔러버린다", // I'll stab you with a knife
  "칼빵먹인다", // I'll knife you
  "총맞아죽어", // Get shot and die
  "불태워버린다", // I'll burn you
  "산채로묻어버린다", // I'll bury you alive
  "콘크리트에묻어버린다", // I'll bury you in concrete
  "바다에던져버린다", // I'll throw you in the ocean
  "사지를찢어버린다", // I'll tear your limbs apart
  "목을비틀어버린다", // I'll twist your neck
  "뼈를부러뜨린다", // I'll break your bones
  "이빨을부러뜨린다", // I'll break your teeth
  "눈을뽑아버린다", // I'll gouge out your eyes

  // Additional sexual insults
  "떡치는년", // Slut who fucks
  "떡치는놈", // Man-whore who fucks
  "떡치자", // Let's fuck
  "떡쳤냐", // Did you fuck
  "야동보는놈", // Porn-watching bastard
  "자위하는놈", // Masturbating bastard
  "딸치는놈", // Masturbating bastard
  "딸치고자빠져", // Masturbate and pass out
  "보빨놈", // Pussy-licking bastard
  "보빨년", // Pussy-licking bitch
  "자빨놈", // Dick-sucking bastard
  "자빨년", // Dick-sucking bitch
  "좆빨놈", // Dick-sucking bastard
  "좆빨년", // Dick-sucking bitch
  "사까시놈", // Blowjob bastard
  "사까시년", // Blowjob bitch
  "걸레짓하는년", // Slut-acting bitch
  "화냥질하는년", // Slutting around bitch
  "매춘부같은년", // Prostitute-like bitch
  "창녀같은년", // Whore-like bitch
  "성매매년", // Sex-trading bitch
  "조건년", // Conditional-meeting bitch
  "원조년", // Compensated-dating bitch
  "빠구리치자", // Let's fuck (vulgar)
  "빠구리치는년", // Fucking bitch (vulgar)
  "빠구리치는놈", // Fucking bastard (vulgar)
  "박아주까", // Shall I fuck you
  "따먹어주까", // Shall I fuck you
  "씹하자", // Let's fuck
  "벗어", // Take it off
  "다벗어", // Take it all off
  "다리벌려", // Spread your legs
  "야한짓하자", // Let's do lewd things

  // Additional slurs - expanded
  "조센징새끼", // Korean slur + bastard
  "한국년아", // Korean woman (vocative derogatory)
  "한국놈아", // Korean man (vocative derogatory)
  "짱깨놈아", // Chinese slur + bastard (vocative)
  "짱깨년아", // Chinese slur + bitch (vocative)
  "쪽바리놈아", // Japanese slur + bastard (vocative)
  "쪽바리년아", // Japanese slur + bitch (vocative)
  "깜둥이놈아", // Black slur + bastard (vocative)
  "깜둥이년아", // Black slur + bitch (vocative)
  "왜놈새끼야", // Japanese bastard offspring (vocative)
  "왜구새끼", // Japanese pirate bastard
  "되놈새끼", // Chinese bastard offspring
  "오랑캐새끼", // Barbarian bastard offspring
  "코쟁이새끼", // Big-nose bastard offspring
  "양코배기새끼", // Western nose bastard
  "외노자새끼", // Foreign worker bastard
  "불구자새끼", // Cripple bastard
  "불구놈", // Cripple bastard
  "불구년", // Cripple bitch
  "절름발이놈", // Limping bastard
  "벙어리", // Mute (derogatory)
  "소경", // Blind (derogatory)
  "귀머거리", // Deaf (derogatory)
  "외눈박이", // One-eyed (derogatory)
  "곱추", // Hunchback (derogatory short)
  "앉은뱅이", // Cripple who can't stand (derogatory)
  "정신지체", // Mentally retarded (derogatory)

  // Additional modern Korean insults - comprehensive
  "무개념놈", // Clueless bastard
  "무개념년", // Clueless bitch
  "개념없는놈", // Conceptless bastard
  "개념없는년", // Conceptless bitch
  "저질놈", // Low-quality bastard
  "저질년", // Low-quality bitch
  "저급놈", // Low-grade bastard
  "저급년", // Low-grade bitch
  "하류놈", // Lower-class bastard
  "하류년", // Lower-class bitch
  "하등놈", // Lower-grade bastard
  "하등년", // Lower-grade bitch
  "얼간이놈", // Simpleton bastard
  "얼간이년", // Simpleton bitch
  "천치놈", // Natural fool bastard
  "천치년", // Natural fool bitch
  "백치놈", // Idiot bastard (archaic)
  "백치년", // Idiot bitch (archaic)
  "둔재놈", // Dull bastard
  "퇴물놈", // Has-been bastard
  "구닥다리놈", // Outdated bastard
  "골빈놈아", // Empty-headed bastard (vocative)
  "골빈년아", // Empty-headed bitch (vocative)
  "오지라퍼놈", // Nosy bastard
  "오지라퍼년", // Nosy bitch
  "진상놈아", // Difficult bastard (vocative)
  "진상년아", // Difficult bitch (vocative)
  "진상새끼", // Difficult bastard
  "걸레년아", // Mop-bitch (vocative)
  "씹덕새끼야", // Vulgar otaku bastard (vocative)
  "좆선비새끼야", // Dick-scholar bastard (vocative)

  // Additional compound expressions with 존나
  "존나구린놈", // Fucking pathetic bastard
  "존나구린년", // Fucking pathetic bitch
  "존나더러운놈", // Fucking dirty bastard
  "존나더러운년", // Fucking dirty bitch
  "존나역겨운놈", // Fucking disgusting bastard
  "존나역겨운년", // Fucking disgusting bitch
  "존나징그러운놈", // Fucking creepy bastard
  "존나징그러운년", // Fucking creepy bitch
  "존나한심한놈", // Fucking pathetic bastard
  "존나한심한년", // Fucking pathetic bitch
  "존나거지같은", // Fucking beggar-like
  "존나무능한", // Fucking incompetent
  "존나쓸모없는놈", // Fucking useless bastard
  "존나쓸모없는년", // Fucking useless bitch
  "존나무식한", // Fucking ignorant
  "존나저능한", // Fucking low-IQ
  "존나개같은", // Fucking dog-like
  "존나돼지같은", // Fucking pig-like
  "존나벌레같은", // Fucking bug-like
  "존나구더기같은", // Fucking maggot-like
  "존나기생충같은", // Fucking parasite-like

  // Additional expressions of disgust/contempt
  "너같은놈은", // A person like you
  "너같은년은", // A woman like you
  "너같은새끼는", // A bastard like you
  "너같은인간은", // A human like you
  "너같은것은", // A thing like you
  "너같은쓰레기는", // A trash like you
  "너같은벌레는", // A bug like you
  "사라져라", // Disappear
  "사라져버려", // Just disappear
  "증발해라", // Evaporate
  "증발해버려", // Just evaporate
  "없어져라", // Cease to exist
  "없어져버려", // Just cease to exist
  "소멸해라", // Be annihilated
  "존재자체가혐오", // Your existence itself is disgusting
  "존재가역겨워", // Your existence is disgusting
  "존재가징그러워", // Your existence is creepy
  "너의존재자체가쓰레기", // Your existence itself is trash
  "태어나지말았어야했다", // Should not have been born
  "태어난게죄", // Being born is a crime
  "너를낳은부모가불쌍", // Parents who gave birth to you are pitiful
  "산소낭비", // Oxygen waste
  "공기낭비", // Air waste
  "음식낭비", // Food waste
  "자원낭비", // Resource waste
  "세금낭비", // Tax waste
  "공간낭비", // Space waste
  "살아있는게죄", // Being alive is a crime
  "이세상에서사라져", // Disappear from this world
  "지구에서꺼져", // Get off earth

  // Additional 핵/초/극/킹/갓 prefix insults
  "핵노답", // Nuclear no-answer (extremely hopeless)
  "핵쓰레기", // Nuclear trash
  "핵찐따", // Nuclear loser
  "핵구린", // Nuclear pathetic
  "핵한심", // Nuclear pathetic
  "핵멍청", // Nuclear stupid
  "핵못생긴", // Nuclear ugly
  "핵징그러운", // Nuclear creepy
  "핵역겨운", // Nuclear disgusting
  "초쓰레기", // Ultra trash
  "초찐따", // Ultra loser
  "초병신같은", // Ultra retard-like
  "초한심한", // Ultra pathetic
  "초멍청한", // Ultra stupid
  "극혐놈", // Extreme-disgust bastard
  "극혐년", // Extreme-disgust bitch
  "극혐새끼", // Extreme-disgust bastard
  "극혐인간", // Extreme-disgust human
  "킹받네", // King annoying (very annoying)
  "킹받는놈", // King-annoying bastard
  "킹받는년", // King-annoying bitch
  "킹받는새끼", // King-annoying bastard
  "킹쓰레기", // King trash
  "킹찐따", // King loser
  "갓쓰레기", // God trash (sarcastic)
  "갓찐따", // God loser (sarcastic)
  "갓노답", // God no-answer (sarcastic)

  // Additional 놈/년/새끼 compounds with various insults
  "멍청이새끼", // Idiot bastard
  "멍청이놈아", // Idiot bastard (vocative)
  "멍청이년아", // Idiot bitch (vocative)
  "바보놈아", // Idiot bastard (vocative)
  "바보년아", // Idiot bitch (vocative)
  "바보새끼야", // Idiot bastard (vocative)
  "돌대가리놈아", // Rock head bastard (vocative)
  "돌대가리년아", // Rock head bitch (vocative)
  "돌대가리새끼야", // Rock head bastard (vocative)
  "뚱뚱이놈아", // Fatty bastard (vocative)
  "뚱뚱이년아", // Fatty bitch (vocative)
  "뚱보놈아", // Fatso bastard (vocative)
  "뚱보년아", // Fatso bitch (vocative)
  "뚱보새끼야", // Fatso bastard (vocative)
  "못난이놈아", // Ugly bastard (vocative)
  "못난이년아", // Ugly bitch (vocative)
  "찌질이놈아", // Pathetic loser bastard (vocative)
  "찌질이년아", // Pathetic loser bitch (vocative)
  "찌질이새끼야", // Pathetic loser bastard (vocative)
  "겁쟁이놈아", // Coward bastard (vocative)
  "겁쟁이년아", // Coward bitch (vocative)
  "겁쟁이새끼야", // Coward bastard (vocative)
  "거지놈아", // Beggar bastard (vocative)
  "거지년아", // Beggar bitch (vocative)
  "거지새끼야", // Beggar bastard (vocative)
  "노숙자놈", // Homeless bastard
  "노숙자년", // Homeless bitch
  "노숙자새끼", // Homeless bastard
  "백수놈", // Unemployed bastard
  "백수년", // Unemployed bitch
  "백수새끼", // Unemployed bastard
  "백수건달", // Unemployed thug
  "니트족", // NEET (Korean)
  "니트족놈", // NEET bastard
  "니트족새끼", // NEET bastard
  "은둔형외톨이", // Shut-in loner
  "히키코모리", // Hikikomori (from Japanese)
  "폐인", // Ruined person
  "폐인놈", // Ruined person bastard
  "폐인새끼", // Ruined person bastard

  // Additional compound expressions
  "입좀닥쳐라", // Shut your mouth already
  "입좀다물어라", // Close your mouth already
  "주둥아리좀닥쳐", // Shut your snout already
  "주둥이좀닥쳐", // Shut your snout already
  "꺼져이새끼야", // Get lost bastard
  "사라져이새끼야", // Disappear bastard
  "닥치고사라져", // Shut up and disappear
  "닥치고꺼져라", // Shut up and get lost
  "개소리좀하지마", // Stop making dog sounds
  "개소리하지마라", // Don't make dog sounds
  "헛소리하지마라", // Don't talk nonsense
  "개헛소리하지마라", // Don't talk dog nonsense
  "닥치고가만있어", // Shut up and be still
  "닥치고앉아있어", // Shut up and sit down
  "존재하지마라", // Don't exist

  // Additional romanized - various systems
  "ssi bal", // Fuck (spaced with space)
  "si bal", // Fuck (variant spaced)
  "gae nyeon", // Dog-bitch (spaced)
  "gae nom", // Dog-bastard (spaced)
  "byeong sin", // Retard (spaced)
  "ji ral", // Crazy/bullshit (spaced)
  "jon na", // Fucking (spaced)
  "jot gata", // Dick-like (spaced)
  "bo ji", // Pussy (spaced)
  "ja ji", // Penis (spaced)
  "dak chyeo", // Shut up (spaced)
  "kkeo jyeo", // Get lost (spaced)
  "yeot meogeo", // Go fuck yourself (spaced)
  "neu geum ma", // Your mom (spaced)
  "ni mi", // Your mother (spaced)
  "ae mi", // Your mother (spaced)
  "ae bi", // Your father (spaced)
  "ssang nom", // Low-class bastard (spaced)
  "ssang nyeon", // Low-class bitch (spaced)
  "chang nyeo", // Whore (spaced)
  "geol lae", // Slut (spaced)
  "tto rai", // Lunatic (spaced)
  "jjin dda", // Loser (spaced)
  "ppak dae ga ri", // Stupid head (spaced)
  "meong cheong i", // Idiot (spaced)
  "dol dae ga ri", // Rock head (spaced)
  "ttung bo", // Fatso (spaced)
  "dwae ji", // Pig (spaced)
  "won sung i", // Monkey (spaced)
  "jim seung", // Beast (spaced)
  "in gan sseul le gi", // Human trash (spaced)
  "in gan mal jong", // Human scum (spaced)
  "beol lae", // Bug (spaced)
  "gi saeng chung", // Parasite (spaced)
  "gu deo gi", // Maggot (spaced)
  "yeom byeong", // Plague (spaced)
  "jen jang", // Damn (spaced)
  "je gi ral", // Damn it (spaced)
  "bil eo meog eul", // Damned (spaced)
  "mang hal", // Doomed (spaced)

  // Additional gaming/internet insults
  "트롤", // Troll
  "트롤놈", // Troll bastard
  "트롤년", // Troll bitch
  "트롤새끼", // Troll bastard
  "피딩놈", // Feeding bastard (gaming)
  "피딩년", // Feeding bitch (gaming)
  "피딩새끼", // Feeding bastard (gaming)
  "핵쟁이", // Hacker (gaming derogatory)
  "핵쟁이새끼", // Hacker bastard
  "치터놈", // Cheater bastard
  "치터년", // Cheater bitch
  "치터새끼", // Cheater bastard
  "발놈새끼", // Bad-play bastard
  "발컨놈", // Bad-control bastard
  "발컨새끼", // Bad-control bastard
  "실력없는놈", // Talentless bastard
  "실력없는년", // Talentless bitch
  "센스없는놈", // Senseless bastard
  "센스없는년", // Senseless bitch
  "노력도안하는놈", // Bastard who doesn't even try
  "꼴뚜기", // Squid (derogatory for bad play)
  "뉴비놈", // Newbie bastard
  "뉴비새끼", // Newbie bastard
  "초보놈", // Beginner bastard
  "초보새끼", // Beginner bastard
  "봇같은놈", // Bot-like bastard
  "봇같은년", // Bot-like bitch
  "봇이냐", // Are you a bot
  "롤충", // League-of-legends bug
  "겜충", // Game bug
  "폰겜충", // Phone-game bug
  "과금충", // Pay-to-win bug
  "과금돼지", // Pay-to-win pig
  "현질충", // Cash-shop bug
  "현질돼지", // Cash-shop pig
  "ATM놈", // ATM bastard
  "지갑놈", // Wallet bastard

  // ===== EXHAUSTIVE 씨발/시발 ADDITIONAL VARIANTS =====
  "씨8", // Fuck (number evasion)
  "시8", // Fuck (number evasion)
  "씨바알", // Fuck (elongated)
  "시바알", // Fuck (elongated)
  "시발련", // Fucking bitch
  "시발놈아", // You fucker
  "씨부리", // Fuck (variant)
  "씨1발", // Fuck (number insertion)
  "시1발", // Fuck (number insertion)
  "C발", // Fuck (English C evasion)
  "C8", // Fuck (English+number evasion)
  "ㅆ1ㅂㅏㄹ", // Fuck (decomposed)
  "씨@발", // Fuck (symbol evasion)
  "시@발", // Fuck (symbol evasion)
  "씨#발", // Fuck (symbol evasion)
  "shibbal", // Fuck (romanized variant)
  "shipal", // Fuck (romanized variant)
  "ssbal", // Fuck (romanized contracted)
  "cbal", // Fuck (romanized minimal)
  "tlqkf2", // Fuck (keyboard + number)
  "씨바놈", // Fucking bastard
  "씨발새끼야", // You fucking bastard (emphatic)
  "시발적", // Fucking (adjective form)
  "씨발적", // Fucking (adjective form)
  "시발탱", // Fucking (slang variant)
  "씨발탱", // Fucking (slang variant)

  // ===== EXHAUSTIVE 개 PREFIX ADDITIONAL COMPOUNDS =====
  "개역겹", // Dog disgusting
  "개구역질", // Dog nausea
  "개불쌍", // Dog pitiful (sarcastic)
  "개한심하다", // So pathetic
  "개쪽팔리다", // So embarrassing
  "개창피하다", // So shameful
  "개싫다", // So hateful
  "개빡침", // So enraged
  "개열받음", // So infuriating
  "개정신병자", // Dog psycho
  "개사이코", // Dog psycho (Konglish)
  "개쓸모없다", // So useless
  "개못생김", // So ugly
  "개추하다", // So ugly (formal)
  "개더럽다", // So dirty
  "개냄새", // Dog smell (stinks)
  "개구리다", // So stinky
  "개재수없다", // So unlucky/hateful
  "개짜증나다", // So irritating
  "개아깝다", // Such a waste
  "개꼴보기싫다", // Hate seeing (someone)
  "개눈꼴시다", // Hate the sight of

  // ===== EXHAUSTIVE 좆/자지 COMPOUNDS =====
  "좆까년", // Fuck off bitch
  "좆만이", // Dick-sized
  "자지빨아", // Suck dick
  "자지나빨아", // Go suck dick
  "자지같다", // Dick-like
  "자지벌레", // Dick bug
  "자지벌레같은", // Dick-bug-like
  "좆빨이", // Dick sucker

  // ===== EXHAUSTIVE 병신 ADDITIONAL COMPOUNDS =====
  "병신짓하다", // Doing retarded things
  "병신짓거리", // Retarded behavior
  "병신인증", // Retard certification (internet)
  "뼝신", // Retard (vowel variant)
  "벼응신", // Retard (stretched)
  "비응신", // Retard (vowel variant)
  "ㅂㅇㅅ", // Retard (consonant abbreviation)
  "byungsin", // Retard (romanized variant)
  "byeongshin", // Retard (romanized variant)
  "병1신", // Retard (number insertion)
  "병@신", // Retard (symbol evasion)

  // ===== EXHAUSTIVE 씹 ADDITIONAL COMPOUNDS =====
  "씹년아", // Hey cunt
  "씹쌍놈", // Cunt-double bastard
  "씹쌍년", // Cunt-double bitch
  "씹떡", // Cunt rice cake (sexual)
  "씹창녀", // Cunt-prostitute
  "씹보지", // Cunt-pussy
  "씹자지", // Cunt-dick
  "씹좆", // Cunt-dick
  "씹쓰레기", // Cunt-trash
  "씹꼴", // Cunt-sight (ugly)
  "씹꼴리다", // Cunt-looking (ugly)
  "씹덕후", // Cunt-fan (obsessive)

  // ===== ADDITIONAL INTERNET ABBREVIATIONS/EVASIONS =====
  "ㄱㅈ", // 개좆 abbreviation
  "ㅆㄺ", // 씨발 variant
  "ㄴㅁ", // 니미 abbreviation
  "ㄴㅁㅅㅂ", // 니미씨발
  "ㅎㅌㅊ", // 하튼 씨 abbreviation
  "ㅗㅗㅗ", // Multiple middle fingers
  "ㅗㅗㅗㅗ", // Many middle fingers

  // ===== KEYBOARD MAPPING EVASIONS =====
  "qkftor", // 발싸 (English keyboard)
  "answkd", // 문제 context variant
  "rotorl", // 개새끼 variant mapping
  "wjdtlq", // 정씨 variant mapping
  "tptkd", // 세상 variant mapping
  "qnrwlq", // 병씨 variant mapping
  "rlqnf", // 기발 variant mapping
  "wkrPwl", // 장애 variant mapping

  // ===== ADDITIONAL GYEONGSANG DIALECT =====
  "니기미씹", // Your mother's cunt (Gyeongsang)
  "니기미좆", // Your mother's dick (Gyeongsang)
  "뭐라카노", // What are you saying (Gyeongsang)
  "가가가가", // That person (confusing Gyeongsang sentence)
  "이 씨부럴", // This fucking (Gyeongsang)
  "우짜노", // What do we do (Gyeongsang dismissive)
  "무데이", // Idiot (Gyeongsang)
  "간나새끼", // Bastard (Gyeongsang)
  "간나", // Derogatory term (Gyeongsang)
  "문디이", // Idiot (Gyeongsang variant)
  "문디새끼", // Idiot bastard (Gyeongsang)
  "느그아부지", // Your father (Gyeongsang derogatory)
  "느그어무이", // Your mother (Gyeongsang derogatory)
  "니아부지", // Your father (Gyeongsang derogatory)
  "니어무이", // Your mother (Gyeongsang derogatory)
  "조빠라", // Suck it (Gyeongsang vulgar)
  "할매", // Grandma (Gyeongsang, can be derogatory)
  "할배", // Grandpa (Gyeongsang, can be derogatory)
  "해뿌리야", // Stop it (Gyeongsang angry)

  // ===== ADDITIONAL JEOLLA DIALECT =====
  "거시기새끼", // That-thing bastard (Jeolla)
  "거시기같은놈", // That-thing-like bastard (Jeolla)
  "쓸개빠진놈", // Gutless bastard (Jeolla)
  "쓸개빠진것", // Gutless thing (Jeolla)
  "지랄염병", // Crazy plague (Jeolla compound)
  "니미럴놈", // Your mother bastard (Jeolla)
  "이것이", // This thing (Jeolla dismissive)
  "저것이", // That thing (Jeolla dismissive)
  "뭣이중헌디", // What's important (Jeolla dismissive)
  "거시기한", // That-thinged (Jeolla vulgar)
  "해뿌렸다", // Did it already (Jeolla aggressive)
  "싸가지없당께", // Ill-mannered (Jeolla)
  "못난놈이당께", // Ugly bastard (Jeolla)

  // ===== ADDITIONAL CHUNGCHEONG DIALECT =====
  "그냥유", // Just that (Chungcheong dismissive)
  "뭐여", // What (Chungcheong dismissive)
  "이놈시키유", // This bastard (Chungcheong)
  "저놈시키유", // That bastard (Chungcheong)
  "허튼소리유", // Nonsense (Chungcheong)
  "지랄마셔유", // Stop being crazy (Chungcheong)
  "뻘소리유", // Bullshit (Chungcheong)
  "멍텅구리유", // Idiot (Chungcheong)
  "얼빠진놈유", // Absent-minded bastard (Chungcheong)
  "미친것이유", // Crazy thing (Chungcheong)

  // ===== ADDITIONAL JEJU DIALECT =====
  "이녁", // You (Jeju derogatory)
  "저녁", // That person (Jeju derogatory context)
  "혼저옵서양", // Come here (Jeju, vulgar context)
  "게메", // Dog (Jeju for 개)
  "미쳔것", // Crazy thing (Jeju)
  "호로자식", // Bastard child (Jeju variant)
  "바당에빠져", // Drown in the sea (Jeju curse)
  "돌아분놈", // Crazy bastard (Jeju)
  "뭐곡", // What (Jeju aggressive)

  // ===== ADDITIONAL GANGWON DIALECT =====
  "야래", // Come on (Gangwon aggressive)
  "이놈래", // This bastard (Gangwon)
  "저놈래", // That bastard (Gangwon)
  "뭐래", // What (Gangwon aggressive)
  "바보래", // Idiot (Gangwon)
  "미친놈래", // Crazy bastard (Gangwon)

  // ===== ADDITIONAL KONGLISH PROFANITY =====
  "파킹셧", // Fucking shit (Konglish)
  "파킹헬", // Fucking hell (Konglish)
  "파킹비치", // Fucking bitch (Konglish)
  "파킹바스타드", // Fucking bastard (Konglish)
  "쉿", // Shit (Konglish)
  "쉬잇", // Shit (Konglish elongated)
  "쉬이잇", // Shit (Konglish more elongated)
  "빡큐", // Fuck you (Konglish variant)
  "빡유", // Fuck you (Konglish variant)
  "씩유", // Sick you (Konglish insult)
  "빛치", // Bitch (Konglish variant)
  "비이치", // Bitch (Konglish elongated)
  "비취", // Bitch (Konglish variant)
  "어스홀", // Asshole (Konglish)
  "애스홀", // Asshole (Konglish variant)
  "마더뻐커", // Motherfucker (Konglish variant)
  "선오브비치", // Son of a bitch (Konglish)
  "썬오브비치", // Son of a bitch (Konglish variant)
  "호모", // Homo (Konglish derogatory)
  "게이", // Gay (Konglish derogatory use)
  "레즈", // Lesbian (Konglish derogatory)
  "레즈비언", // Lesbian (Konglish)
  "트랜스", // Trans (Konglish derogatory use)
  "디스", // Diss (Konglish)
  "디스하다", // To diss (Konglish verb)
  "트롤링", // Trolling (Konglish)

  // ===== ROMANIZED KOREAN PROFANITY =====
  "gaesaeggi", // 개새끼 (romanized variant)
  "geseki", // 개새끼 (romanized shortened)
  "ge seki", // 개새끼 (romanized shortened spaced)
  "shibal nom", // 씨발놈 (romanized)
  "ssibal nom", // 씨발놈 (romanized)
  "jotka", // 좆까 (romanized)
  "jot ka", // 좆까 (romanized spaced)
  "jotbap", // 좆밥 (romanized)
  "ssip", // 씹 (romanized)
  "sship", // 씹 (romanized variant)
  "mi chin nom", // 미친놈 (romanized)
  "michin nom", // 미친놈 (romanized)
  "mi chin nyun", // 미친년 (romanized)
  "michin nyun", // 미친년 (romanized)
  "michinnyun", // 미친년 (romanized)
  "dak chuh", // 닥쳐 (romanized)
  "gguh juh", // 꺼져 (romanized)
  "yut meogeo", // 엿먹어 (romanized variant)
  "nimiSSibal", // 니미씨발 (romanized)
  "ni mi ssi bal", // 니미씨발 (romanized spaced)
  "nimiral", // 니미럴 (romanized)
  "horoseki", // 호로새끼 (romanized)
  "horo seki", // 호로새끼 (romanized spaced)
  "ddong", // 똥 (romanized)
  "ttong", // 똥 (romanized variant)
  "ddong gae", // 똥개 (romanized)
  "bbak chida", // 빡치다 (romanized)
  "bbakchida", // 빡치다 (romanized)
  "bbi chi", // 삐치 (romanized)
  "gaenom", // 개놈 (romanized)
  "gae nyun", // 개년 (romanized)
  "gaenyun", // 개년 (romanized)

  // ===== ADDITIONAL COMPOUND THREATS/CURSES =====
  "죽어라", // Die (imperative)
  "죽고싶어", // Want to die (used as threat)
  "죽여줄까", // Shall I kill you?
  "죽여버리겠다", // I will kill you
  "찢어죽인다", // I'll tear you to death
  "갈기갈기찢어", // Tear to shreds
  "때려죽여", // Beat to death
  "밟아죽인다", // Stomp to death
  "밟아죽여", // Stomp to death
  "쳐죽여", // Strike to death
  "뒈져버려", // Drop dead already
  "뒈질래", // Want to drop dead?
  "디져라", // Drop dead (variant)
  "디져버려", // Drop dead (variant)
  "골로가라", // Go die
  "골로가버려", // Go die already
  "저승가라", // Go to the afterlife
  "지옥가라", // Go to hell
  "지옥에나가라", // Go to hell
  "지옥에서썩어라", // Rot in hell
  "지옥불에타라", // Burn in hellfire
  "염병할놈", // Plague bastard
  "염병할년", // Plague bitch
  "지랄하고자빠졌네", // Going crazy and collapsed
  "약쳐먹었냐", // Did you take drugs?
  "약빨았냐", // Did you suck drugs?
  "정신나갔냐", // Lost your mind?
  "정신줄놓았냐", // Let go of your sanity string?
  "정신병자놈", // Psycho bastard
  "정신병자년", // Psycho bitch
  "정신이상자", // Mentally abnormal person
  "돌아이놈", // Crazy bastard
  "돌아이년", // Crazy bitch
  "돌+i", // Crazy (symbol evasion)
  "또라이놈", // Lunatic bastard
  "또라이년", // Lunatic bitch
  "미치광이놈", // Maniac bastard
  "미치광이년", // Maniac bitch

  // ===== ADDITIONAL SEXUAL INSULTS =====
  "걸레같은년", // Rag-like bitch (slut)
  "걸레같은놈", // Rag-like bastard
  "창년아", // Hey whore
  "꽃뱀", // Gold digger (flower snake)
  "꽃뱀년", // Gold digger bitch
  "한남", // Korean man (derogatory)
  "한녀", // Korean woman (derogatory)
  "김치남", // Kimchi man (misandrist)
  "된장남", // Soybean paste man
  "숫처녀", // Virgin (derogatory context)
  "총각딱지", // Bachelor stigma
  "임신충", // Pregnancy bug (derogatory for pregnant)
  "애비없는", // Fatherless
  "애미없는", // Motherless
  "에미없는", // Motherless (variant)
  "에비없는", // Fatherless (variant)
  "고아놈", // Orphan bastard
  "고아년", // Orphan bitch
  "사생아", // Illegitimate child
  "사생아새끼", // Illegitimate child bastard

  // ===== ADDITIONAL MODERN KOREAN INSULTS =====
  "관심종자", // Attention seeker
  "관종새끼", // Attention whore bastard
  "싸이코", // Psycho (Korean)
  "싸이코놈", // Psycho bastard
  "싸이코년", // Psycho bitch
  "찐따놈", // Loser bastard
  "찐따같은", // Loser-like
  "오타쿠", // Otaku (derogatory)
  "오덕후", // Otaku (Korean variant)
  "오덕충", // Otaku-bug
  "빠돌이", // Fanboy (derogatory)
  "빠순이", // Fangirl (derogatory)
  "빠가", // Idiot (from Japanese baka)
  "빠가새끼", // Idiot bastard
  "빠가놈", // Idiot bastard
  "빠가년", // Idiot bitch
  "쪼다", // Coward/weakling
  "쪼다새끼", // Coward bastard
  "쪼다놈", // Coward bastard
  "겁쟁이새끼", // Coward bastard
  "찌질이새끼", // Pathetic bastard
  "찌질이놈", // Pathetic bastard
  "양아치", // Thug
  "양아치새끼", // Thug bastard
  "양아치놈", // Thug bastard
  "양아치년", // Thug bitch
  "날라리", // Delinquent
  "날라리새끼", // Delinquent bastard
  "불량배", // Hoodlum
  "깡패", // Gangster
  "깡패새끼", // Gangster bastard
  "깡패놈", // Gangster bastard
  "조폭새끼", // Mob bastard
  "건달새끼", // Ruffian bastard

  // ===== ADDITIONAL 핵/초/극/킹/갓 PREFIX INSULTS =====
  "핵꼴보기싫다", // Nuclear hate the sight of
  "핵폐급", // Nuclear waste-class
  "초저능", // Super low-ability
  "초바보", // Super idiot
  "초멍청이", // Super idiot
  "극혐오", // Extreme disgust
  "극극혐", // Extreme extreme disgust
  "킹받다", // King-angry (very angry)
  "킹받는다", // King-angry (very angry)
  "킹바보", // King idiot
  "갓병신", // God-retard (ironic)

  // ===== ADDITIONAL DISGUST/CONTEMPT EXPRESSIONS =====
  "꺼져새끼", // Fuck off bastard
  "꺼져놈", // Fuck off bastard
  "꺼져년", // Fuck off bitch
  "닥쳐새끼", // Shut up bastard
  "닥쳐놈", // Shut up bastard
  "닥쳐년", // Shut up bitch
  "입닥쳐새끼", // Shut your mouth bastard
  "입닥쳐놈", // Shut your mouth bastard
  "입닥쳐년", // Shut your mouth bitch
  "주둥이닥쳐", // Shut your snout
  "주둥이쳐", // Shut snout
  "주둥이다물어", // Close your snout
  "아가리해", // Shut your mouth (vulgar slang)
  "아갈이해", // Shut your jaw (variant)
  "재수없는놈", // Unlucky bastard
  "재수없는년", // Unlucky bitch
  "재수없는새끼", // Unlucky bastard
  "재수없어", // Unlucky/hateful
  "짜증나는놈", // Annoying bastard
  "짜증나는년", // Annoying bitch
  "짜증나는새끼", // Annoying bastard
  "역겨운놈", // Disgusting bastard
  "역겨운년", // Disgusting bitch
  "역겨운새끼", // Disgusting bastard
  "구역질나는놈", // Nausea-inducing bastard
  "구역질나는년", // Nausea-inducing bitch
  "메스꺼운놈", // Sickening bastard
  "메스꺼운년", // Sickening bitch
  "토나온다", // Makes me vomit
  "토할것같다", // Feel like vomiting
  "보기싫다", // Hate seeing you
  "보기싫은놈", // Hate-seeing bastard
  "보기싫은년", // Hate-seeing bitch
  "눈에거슬리는놈", // Eye-sore bastard
  "눈에거슬리는년", // Eye-sore bitch
  "꼴보기싫은놈", // Hate-the-sight bastard
  "꼴보기싫은년", // Hate-the-sight bitch
  "존재자체가짜증", // Your very existence is annoying
  "살아있는게짜증", // Your being alive is annoying

  // ===== ADDITIONAL GAMING INSULTS =====
  "롤충새끼", // LOL bug bastard
  "피시방충", // PC-bang bug
  "피시방거지", // PC-bang beggar
  "핵유저", // Hack user
  "치터", // Cheater (Korean)
  "치팅", // Cheating (Korean)
  "매크로충", // Macro bug (cheater)
  "서버충", // Server bug
  "미꾸라지", // Loach (slippery player)
  "팀킬러", // Team killer
  "팀킬충", // Team-kill bug
  "트롤러", // Troller
  "트롤픽", // Troll pick
  "트롤충", // Troll bug
  "브론즈놈", // Bronze bastard (low rank)
  "실버따리", // Silver (low rank insult)
  "골드따리", // Gold (mid rank insult)
  "하드스턱", // Hard stuck
  "만년브론즈", // Permanent bronze
  "만년실버", // Permanent silver
  "승률충", // Win-rate bug
  "캐리못함", // Can't carry
  "딜못", // Can't deal damage
  "탱못", // Can't tank
  "힐못", // Can't heal
  "탈주충", // Deserter bug
  "탈주놈", // Deserter bastard
  "어그로충", // Aggro bug (troll)
  "어그로꾼", // Aggro person
  "키보드워리어", // Keyboard warrior
  "키워", // Keyboard warrior (abbreviated)

  // ===== BODY SHAMING =====
  "뚱뚱보", // Big fatso
  "살찐돼지", // Fat pig
  "뚱뚱한돼지", // Fat pig
  "못생긴새끼", // Ugly bastard
  "흉물스럽다", // Monstrous
  "볼품없는놈", // Worthless-looking bastard
  "볼품없는년", // Worthless-looking bitch
  "쪼끄만놈", // Tiny bastard
  "쪼끄만년", // Tiny bitch
  "땅꼬마", // Ground-midget
  "키작은놈", // Short bastard

  // ===== WORTH/STATUS INSULTS =====
  "거지같은놈", // Beggar-like bastard
  "거지같은년", // Beggar-like bitch
  "거지새끼", // Beggar bastard
  "거지놈", // Beggar bastard
  "거지년", // Beggar bitch
  "거렁뱅이", // Beggar/bum
  "쓸모없는새끼", // Useless bastard
  "무능한놈", // Incompetent bastard
  "무능한년", // Incompetent bitch
  "무능한새끼", // Incompetent bastard
  "무능력자", // Incompetent person
  "낙오자", // Dropout/failure
  "패배자", // Loser
  "패배자놈", // Loser bastard
  "패배자새끼", // Loser bastard
  "인생낙오자", // Life failure
  "인생쓰레기", // Life trash
  "인생실패자", // Life failure
  "인생폐급", // Life waste-class
  "사회부적응자", // Social misfit
  "사회쓰레기", // Social trash
  "잉여인간", // Surplus human
  "잉여놈", // Surplus bastard
  "잉여새끼", // Surplus bastard
  "바닥인생", // Bottom-tier life
  "밑바닥인간", // Bottom human
  "하류인생", // Low-class life
  "찌꺼기인생", // Dregs life
  "찌꺼기놈", // Dregs bastard
  "찌꺼기새끼", // Dregs bastard

  // ===== ADDITIONAL SLURS =====
  "쪽바리새끼", // Japanese bastard (derogatory)
  "짱개", // Chinese (derogatory variant)
  "짱개새끼", // Chinese bastard (derogatory variant)
  "떠거리", // Chinese group (derogatory)
  "양키새끼", // Yankee bastard
  "깜둥이새끼", // Dark-skinned bastard
  "동남아충", // Southeast Asian bug (derogatory)
  "다문화충", // Multicultural bug (derogatory)
  "미국놈", // American bastard
  "미국년", // American bitch

  // ===== ADDITIONAL NUMBER/SYMBOL EVASIONS =====
  "18놈", // 씨발놈 (18 sounds like 시발)
  "18새끼", // 씨발새끼 (18 sounds like 시발)
  "18년", // 씨발년 (18 sounds like 시발)
  "18아", // 시발아 (18 sounds like 시발)
  "ㅆ1ㅂ", // 씨발 abbreviated with number
  "ㅅ1ㅂ", // 시발 abbreviated with number
  "o1", // 오이 → 왜 context evasion
  "2발", // 이발 → 시발 evasion
  "10발", // 십발 → 씨발 evasion
  "10팔", // 십팔 → 씨팔 evasion
  "10새끼", // 십새끼 → 씨발새끼 evasion
  "ㅂ2", // 병신 number evasion
  "시bal", // Mixed Korean-English
  "씨bal", // Mixed Korean-English
  "개sae끼", // Mixed Korean-English
  "미chin", // Mixed Korean-English
  "좆gat은", // Mixed Korean-English
  "shi-bal", // Romanized with hyphen
  "ssi-bal", // Romanized with hyphen
  "gae-sae-kki", // Romanized with hyphens
  "byeong-sin", // Romanized with hyphen
  "jot-ka", // Romanized with hyphen

  // ===== ADDITIONAL 존나/졸라 VARIANTS =====
  "존내", // Fucking (vowel variant)
  "존니", // Fucking (vowel variant)
  "존나리게", // Fucking (extended)
  "좐나", // Fucking (consonant variant)
  "좐나게", // Fucking (consonant variant adverb)
  "쥰나", // Fucking (vowel variant)
  "쥰내", // Fucking (vowel variant)
  "ㅈㄴㅂㅅ", // 존나병신 abbreviation
  "ㅈㄴㅈㄹ", // 존나지랄 abbreviation
  "jola", // 졸라 (romanized)
  "jol la", // 졸라 (romanized spaced)

  // ===== ADDITIONAL COMPOUND INSULTS (NOUN + MODIFIER) =====
  "쓰레기같은인간", // Trash-like human
  "쓰레기같은새끼", // Trash-like bastard
  "쓰레기만도못한", // Worse than trash
  "짐승같은놈", // Animal-like bastard
  "짐승같은년", // Animal-like bitch
  "짐승만도못한", // Worse than an animal
  "개만도못한", // Worse than a dog
  "개만도못한놈", // Worse than a dog bastard
  "개만도못한년", // Worse than a dog bitch
  "돼지만도못한", // Worse than a pig
  "벌레같은놈", // Bug-like bastard
  "벌레같은년", // Bug-like bitch
  "구더기같은놈", // Maggot-like bastard
  "구더기같은년", // Maggot-like bitch
  "기생충같은놈", // Parasite-like bastard
  "기생충같은년", // Parasite-like bitch
  "쥐같은놈", // Rat-like bastard
  "쥐같은년", // Rat-like bitch
  "바퀴벌레같은", // Cockroach-like
  "바퀴벌레같은놈", // Cockroach-like bastard
  "바퀴벌레같은년", // Cockroach-like bitch
  "잡초같은놈", // Weed-like bastard
  "잡초같은년", // Weed-like bitch
  "배설물같은놈", // Excrement-like bastard
  "오줌같은놈", // Piss-like bastard
  "똥같은놈", // Shit-like bastard
  "똥같은년", // Shit-like bitch
  "똥같은새끼", // Shit-like bastard
  "똥물같은놈", // Sewage-like bastard
  "하수구같은놈", // Sewer-like bastard

  // ===== ADDITIONAL APPEARANCE INSULTS =====
  "얼굴값못하는", // Face not worth its price
  "얼굴도못생기고", // Ugly-faced and...
  "얼굴이죄", // Face is a sin (so ugly)
  "꼴값하네", // Living up to your looks (ugly)
  "꼬라지하고는", // Look at that state
  "꼬라지좋다", // Nice state (sarcastic)
  "꼬라지봐라", // Look at that state
  "몰골봐라", // Look at that appearance
  "몰골이그게뭐냐", // What is that appearance
  "꼬라지하곤", // With that state
  "꼴좋다", // Nice sight (sarcastic)
  "얼굴찌푸리지마", // Don't make that face
  "면상좀봐", // Look at that face (derogatory)
  "면상봐라", // Look at that face
  "그면상으로", // With that face
  "대가리좀봐", // Look at that head

  // ===== ADDITIONAL INTELLIGENCE INSULTS =====
  "머리에뭐들었냐", // What's in your head
  "머리가비었냐", // Is your head empty
  "뇌가없냐", // Do you have no brain
  "뇌가비었냐", // Is your brain empty
  "뇌를빼고사냐", // Living without a brain
  "생각이란걸해봐", // Try thinking for once
  "생각좀해라", // Think for once
  "바보같은놈", // Foolish bastard
  "바보같은년", // Foolish bitch
  "바보같은새끼", // Foolish bastard
  "등신같은놈", // Idiot-like bastard
  "등신같은년", // Idiot-like bitch
  "저능아놈", // Imbecile bastard
  "저능아년", // Imbecile bitch
  "저능아새끼", // Imbecile bastard
  "IQ낮은놈", // Low-IQ bastard
  "IQ바닥놈", // Floor-IQ bastard
  "머리나쁜놈", // Bad-headed bastard
  "무식한놈", // Ignorant bastard
  "무식한년", // Ignorant bitch
  "무식한새끼", // Ignorant bastard
  "배운게없는놈", // Uneducated bastard
  "상식없는놈", // No-common-sense bastard
  "교양없는놈", // Uncultured bastard
  "교양없는년", // Uncultured bitch

  // ===== ADDITIONAL SOCIAL MEDIA/ONLINE INSULTS =====
  "좋아요거지", // Like-beggar
  "구독거지", // Subscribe-beggar
  "팔로워거지", // Follower-beggar
  "관심거지", // Attention-beggar
  "관심병", // Attention sickness
  "관심병자", // Attention-sick person
  "관심병환자", // Attention-sickness patient
  "자기과시", // Self-showing off
  "허세충", // Pretension bug
  "허세놈", // Pretension bastard
  "허세년", // Pretension bitch
  "허세부리지마", // Stop pretending
  "좆도아닌것이", // Thing that's not even a dick
  "주제파악좀해", // Know your place
  "주제넘다", // Overstepping your bounds
  "주제넘는놈", // Overstepping bastard
  "주제넘는년", // Overstepping bitch
  "분수를알아라", // Know your place
  "분수를모르다", // Not knowing one's place
  "잘난척하지마", // Don't act superior
  "잘난척하는놈", // Acting-superior bastard
  "잘난척하는년", // Acting-superior bitch
  "쇼하지마", // Don't put on a show
  "쇼하는놈", // Show-off bastard
  "오지랖충", // Busybody bug
  "오지랖넓다", // Wide busybody (too meddling)
  "참견충", // Meddling bug
  "참견하지마", // Don't meddle
  "상관마", // None of your business
  "니가뭔데", // Who are you to...
  "니가뭔데참견", // Who are you to meddle
  "쓸데없는소리", // Useless talk
  "개소리하지마", // Don't talk dog-shit
  "뻘소리하지마", // Don't talk nonsense
  "헛소리하지마", // Don't talk nonsense
  "지껄이지마", // Don't babble

  // ===== ADDITIONAL WORKPLACE/SCHOOL INSULTS =====
  "왕따", // Outcast/bullying target
  "왕따시키다", // To ostracize
  "왕따놈", // Outcast bastard
  "왕따새끼", // Outcast bastard
  "따돌리다", // To ostracize
  "따돌림", // Ostracism
  "은따", // Hidden outcast
  "전따", // Full outcast
  "핵인싸", // Nuclear insider (can be mocking)
  "아싸", // Outsider (can be derogatory)
  "아싸새끼", // Outsider bastard
  "초딩", // Elementary schooler (derogatory)
  "초딩새끼", // Elementary schooler bastard
  "중딩", // Middle schooler (derogatory)
  "중딩새끼", // Middle schooler bastard
  "고딩", // High schooler (can be derogatory)
  "대딩", // College student (can be derogatory)
  "틀딱충", // Old person bug
  "틀딱놈", // Old person bastard
  "꼰대놈", // Preachy bastard
  "꼰대새끼", // Preachy bastard
  "꼰대짓", // Preachy behavior
  "라떼놈", // Latte bastard (in my days... person)
  "라떼충", // Latte bug

  // ===== ADDITIONAL RELIGIOUS/POLITICAL INSULTS =====
  "개독", // Dog-Christian (derogatory)
  "개독교", // Dog-Christianity
  "개독놈", // Dog-Christian bastard
  "개독년", // Dog-Christian bitch
  "틀딱보수", // Old conservative
  "우좀", // Right-zombie
  "빨갱이새끼", // Commie bastard
  "빨갱이놈", // Commie bastard
  "수꼴놈", // Extreme conservative bastard
  "종북", // Pro-North Korea (derogatory)
  "종북새끼", // Pro-NK bastard
  "종북놈", // Pro-NK bastard
  "국뽕", // Extreme nationalism (derogatory)
  "국뽕충", // Extreme nationalism bug
  "국까", // Country-denigrator
  "국까새끼", // Country-denigrator bastard
  "매국노새끼", // Traitor bastard
  "친일파", // Pro-Japanese (derogatory)
  "친일파새끼", // Pro-Japanese bastard

  // ===== FAMILY-RELATED INSULTS =====
  "니애비", // Your dad
  "느그애미", // Your mom (dialect)
  "느그애비", // Your dad (dialect)
  "니엄마", // Your mom
  "니아빠", // Your dad
  "야엄마없냐", // Hey, don't you have a mother?
  "애미뒤졌냐", // Is your mother dead?
  "애비뒤졌냐", // Is your father dead?
  "애미나팔아", // Go sell your mother
  "니미뒤진", // Your mother dead (prefix)
  "니미뒤진놈", // Your-mother-dead bastard
  "니미뒤진년", // Your-mother-dead bitch
  "니미뒤진새끼", // Your-mother-dead bastard
  "어미를팔아먹은놈", // Bastard who sold his mother
  "부모없는놈", // Parentless bastard
  "부모얼굴에먹칠", // Disgrace to parents' faces
  "조상님얼굴에먹칠", // Disgrace to ancestors
  "삼대가욕한다", // Three generations curse you
  "집안망신", // Family disgrace
  "집안수치", // Family shame
  "가문의수치", // Disgrace of the family

  // ===== ADDITIONAL MISCELLANEOUS INSULTS =====
  "꼬져", // Get lost (variant of 꺼져)
  "꼬져라", // Get lost (emphatic)
  "꺼져라", // Get lost (emphatic)
  "엿이나먹어라", // Go eat yeot (go fuck yourself)
  "엿이나처먹어", // Go stuff yeot (vulgar)
  "좆이나먹어라", // Go eat a dick
  "보지나핥아라", // Go lick a pussy
  "똥이나먹어라", // Go eat shit
  "똥이나처먹어", // Go stuff shit (vulgar)
  "조용히해라", // Shut up (mild)
  "시끄러워", // You're noisy
  "시끄러운놈", // Noisy bastard
  "시끄러운년", // Noisy bitch
  "입을다물어", // Close your mouth
  "입다물어", // Shut your mouth
  "아구다물어", // Shut your jaw
  "떠들지마", // Don't chatter
  "재잘거리지마", // Don't babble
  "지껄이다", // To babble (derogatory)
  "조잘거리다", // To chirp (derogatory)
  "뒤통수치다", // Backstab
  "뒤통수친놈", // Backstabber
  "뒤통수친년", // Backstabbing bitch
  "배신자", // Traitor
  "배신자놈", // Traitor bastard
  "배신자새끼", // Traitor bastard
  "사기꾼", // Swindler
  "사기꾼놈", // Swindler bastard
  "사기꾼새끼", // Swindler bastard
  "거짓말쟁이", // Liar
  "거짓말쟁이놈", // Liar bastard
  "구라치다", // To lie (slang)
  "구라쟁이", // Liar (slang)
  "뻥치다", // To lie (slang)
  "뻥쟁이", // Liar (slang)
  "뻥쟁이놈", // Liar bastard
  "약올리다", // To tease/provoke
  "약올리지마", // Don't provoke me
  "눈깔깐다", // Rolling eyes (aggressive)
  "눈깔뒤집다", // Eyes flipping (angry)
];

export default koreanBadWords;
