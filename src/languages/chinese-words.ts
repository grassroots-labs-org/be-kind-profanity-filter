/**
 * Chinese profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Chinese
 */
const chineseBadWords = [
  // Core Chinese profanity
  "操", // fuck
  "肏", // fuck (vulgar variant)
  "我操", // holy fuck
  "他妈的", // damn it (lit. his mother's)
  "妈的", // damn (lit. mother's)
  "去你妈的", // fuck off (lit. go to your mother's)
  "草泥马", // fuck your mother (homophone euphemism)
  "逼", // cunt
  "傻逼", // stupid cunt
  "牛逼", // fucking awesome
  "装逼", // pretentious / show-off
  "臭逼", // stinky cunt
  "贱逼", // cheap cunt
  "二逼", // dumb cunt
  "屌", // dick
  "鸡巴", // dick / penis
  "龟头", // glans / dickhead
  "小鸡鸡", // little dick / wee-wee

  // Insults
  "混蛋", // bastard
  "混帐", // scoundrel
  "王八蛋", // son of a bitch (lit. turtle egg)
  "杂种", // bastard / mongrel
  "畜生", // animal / beast (dehumanizing)
  "贱人", // cheap/lowly person
  "贱货", // cheap slut
  "蠢货", // idiot / stupid thing
  "白痴", // idiot / moron
  "废话", // nonsense / bullshit
  "废物", // trash / useless person
  "变态", // pervert
  "去死", // go die
  "骚货", // slut
  "荡妇", // whore / slut
  "婊子", // bitch / whore
  "婊子们", // bitches / whores (plural)
  "臭婊子", // stinky bitch
  "三八", // bitch (lit. March 8th, derogatory for women)
  "娘们", // broads / women (derogatory)

  // Sexual / vulgar
  "狗娘养的", // son of a bitch (lit. raised by a dog mother)
  "狗日的", // son of a bitch (lit. dog-fucked)
  "日", // fuck
  "干", // fuck / do
  "屁股", // ass / butt
  "屁眼", // asshole
  "肛门", // anus
  "阴道", // vagina
  "阴蒂", // clitoris
  "睾丸", // testicles
  "精液", // semen
  "高潮", // orgasm
  "手淫", // masturbation
  "妓女", // prostitute
  "色情电影", // pornographic film
  "色情制品", // pornography

  // Bodily functions
  "撒尿", // piss / urinate
  "拉屎", // take a shit
  "放屁", // fart
  "狗屎", // dog shit / bullshit

  // Slurs
  "黑鬼", // n-word (racial slur)
  "黑鬼们", // n-word plural (racial slur)
  "纳粹", // Nazi
  "皮条客", // pimp

  // Body parts (vulgar context)
  "奶头", // nipple
  "乳头", // nipple
  "直肠", // rectum

  // 操/日/草 variations
  "操你妈", // fuck your mother
  "操你大爷", // fuck your uncle/grandpa
  "操你全家", // fuck your whole family
  "操你祖宗", // fuck your ancestors
  "操蛋", // fucked up / bullshit
  "我日", // holy fuck (variant)
  "日你妈", // fuck your mother
  "日你大爷", // fuck your uncle/grandpa
  "日了狗了", // what the fuck (lit. fucked a dog)
  "草你妈", // fuck your mother (variant)
  "草你大爷", // fuck your uncle/grandpa (variant)
  "我草", // holy fuck (variant)
  "草", // fuck (variant)
  "肏你妈", // fuck your mother (vulgar variant)
  "肏你大爷", // fuck your uncle/grandpa (vulgar variant)

  // 逼 compounds
  "苦逼", // miserable / pathetic
  "死逼", // dead cunt
  "破逼", // worn-out cunt
  "烂逼", // rotten cunt
  "好逼", // good cunt
  "你妈逼", // your mother's cunt
  "逼样", // cunt-face
  "二B", // stupid cunt (variant abbreviation)
  "老逼", // old cunt
  "嫩逼", // young cunt
  "小逼", // little cunt
  "屄", // cunt (archaic character)
  "傻B", // stupid cunt (abbreviation)

  // Insults (additional)
  "脑残", // brain-damaged / retard
  "智障", // mentally disabled (used as insult)
  "弱智", // mentally weak / retard
  "傻子", // fool / idiot
  "笨蛋", // dummy / fool
  "蠢猪", // stupid pig
  "蠢驴", // stupid donkey
  "猪头", // pig head / idiot
  "狗腿子", // lackey / running dog
  "走狗", // lackey / running dog
  "汉奸", // traitor (to Chinese people)
  "卖国贼", // traitor (to one's country)
  "人渣", // scum / human trash
  "败类", // scum / degenerate
  "饭桶", // good-for-nothing (lit. rice bucket)
  "草包", // good-for-nothing (lit. straw bag)
  "窝囊废", // coward / wimp
  "下三滥", // lowlife / sleazy
  "不要脸", // shameless
  "臭不要脸", // utterly shameless
  "无耻", // shameless / despicable
  "恬不知耻", // brazenly shameless
  "狗东西", // dog thing (insult)
  "狗杂种", // dog mongrel
  "龟儿子", // son of a turtle (insult)
  "龟孙子", // grandson of a turtle (insult)
  "龟孙", // turtle grandson (insult)
  "王八", // turtle / cuckold (insult)
  "王八羔子", // son of a turtle (insult)
  "小王八蛋", // little son of a bitch
  "臭流氓", // stinky hooligan
  "流氓", // hooligan / thug
  "地痞", // local thug / ruffian
  "痞子", // ruffian / scoundrel
  "二百五", // idiot (lit. 250)
  "蠢材", // stupid person / blockhead
  "呆逼", // dumb cunt
  "死鬼", // damn ghost (term of annoyance)
  "死胖子", // fat ass / die fatty
  "丑八怪", // ugly freak
  "老不死", // old and won't die (insult to elderly)
  "老东西", // old thing (insult to elderly)
  "老废物", // old useless person
  "狗崽子", // puppy / son of a dog
  "野种", // illegitimate child / bastard
  "私生子", // illegitimate child
  "小杂种", // little mongrel / bastard
  "缺德", // immoral / wicked
  "损种", // wicked person
  "孙子", // grandson (used as insult, submissive)

  // Sexual terms (additional)
  "鸡", // prostitute (slang)
  "嫖", // to solicit a prostitute
  "嫖娼", // to visit a prostitute
  "卖淫", // prostitution
  "淫荡", // lewd / lascivious
  "淫乱", // promiscuous / debauched
  "淫秽", // obscene / pornographic
  "骚", // slutty / flirtatious
  "骚逼", // slutty cunt
  "骚狐狸", // slutty fox / vixen
  "浪", // slutty / loose
  "浪货", // slut
  "浪逼", // loose cunt
  "浪荡", // dissolute / promiscuous
  "卖骚", // to act slutty
  "发骚", // to be in heat / act slutty
  "骚浪贱", // slutty, loose, and cheap
  "鸡婆", // prostitute / busybody
  "嫖客", // john / prostitute's client
  "老鸨", // madam (brothel keeper)
  "龟公", // pimp (lit. male turtle)
  "拉皮条", // to pimp
  "叫鸡", // to call a prostitute
  "援交", // compensated dating (prostitution)
  "卖肉", // to sell one's body
  "操逼", // to fuck (vulgar)
  "日逼", // to fuck (vulgar variant)
  "干逼", // to fuck (vulgar variant)
  "大鸡巴", // big dick
  "鸡鸡", // penis (childish)
  "阳具", // phallus / penis (formal)
  "打炮", // to have sex (slang)
  "约炮", // hookup / booty call
  "炮友", // friends with benefits
  "一夜情", // one-night stand
  "做爱", // to make love / have sex
  "性交", // sexual intercourse
  "口交", // oral sex
  "肛交", // anal sex
  "强奸", // rape
  "轮奸", // gang rape
  "鸡奸", // sodomy
  "乱伦", // incest
  "兽交", // bestiality
  "恋童癖", // pedophilia
  "自慰", // masturbation
  "打飞机", // to masturbate (male, slang)
  "撸管", // to masturbate (male, slang)
  "射精", // ejaculation
  "潮吹", // squirting
  "阴茎", // penis

  // Cantonese profanity
  "仆街", // drop dead / fall on the street
  "扑街", // drop dead (variant)
  "冚家铲", // may your whole family be wiped out
  "冚家富贵", // may your whole family die (ironic)
  "丢你老母", // fuck your mother (Cantonese)
  "丢那妈", // fuck your mother (Cantonese variant)
  "丢那星", // fuck your mother (Cantonese euphemism)
  "收皮", // shut up / piss off
  "痴线", // crazy / insane
  "黐线", // crazy / insane (variant)
  "戆鸠", // stupid dick
  "鸠", // dick (Cantonese)
  "老母", // your mother (Cantonese insult)
  "含家产", // may your whole family die (variant)
  "食屎", // eat shit
  "你老母", // your mother (Cantonese insult)
  "戆居", // stupid / foolish
  "七头", // dickhead (Cantonese)
  "废柴", // useless person (lit. waste firewood)
  "老坑", // old fart (Cantonese)
  "八婆", // gossipy woman / bitch
  "死八婆", // damn gossipy bitch
  "死仔", // damn boy
  "死女", // damn girl
  "粉肠", // idiot (Cantonese, lit. rice noodle roll)
  "咸湿", // perverted / lecherous
  "衰人", // awful person
  "衰仔", // awful boy
  "衰婆", // awful woman
  "柒头", // dickhead (Cantonese variant)
  "碌鸠", // dick (Cantonese)
  "含撚", // suck dick (Cantonese)

  // Internet slang / abbreviations
  "TMD", // ta ma de (damn it)
  "CNMB", // cao ni ma bi (fuck your mother's cunt)
  "CNM", // cao ni ma (fuck your mother)
  "NMB", // ni ma bi (your mother's cunt)
  "NMSL", // ni ma si le (your mother is dead)
  "WNM", // wo ni ma (fuck, your mother)
  "MMP", // ma mai pi (damn it, Sichuan dialect)
  "尼玛", // your mother (euphemism)
  "你妈死了", // your mother is dead
  "你全家死光", // may your whole family die
  "去你大爷的", // fuck off (lit. go to your uncle)
  "滚你妈的", // fuck off (lit. roll your mother's)
  "他妈", // his/her mother (damn)
  "特么的", // damn it (euphemism for 他妈的)
  "卧槽", // holy shit (euphemism for 我操)
  "握草", // holy shit (euphemism variant)
  "我去年买了个表", // fuck (coded phrase, acronym WQNMLGB)
  "日了狗", // what the fuck (lit. fucked a dog)
  "艹", // fuck (internet shorthand for 操)
  "干你妈", // fuck your mother
  "干你娘", // fuck your mother (variant)
  "什么玩意", // what the hell / what kind of thing
  "脑子有病", // something wrong with your brain

  // Taiwan / Hokkien
  "幹", // fuck (traditional)
  "幹你娘", // fuck your mother (Hokkien)
  "幹你媽", // fuck your mother (traditional)
  "幹林娘", // fuck your mother (Hokkien variant)
  "靠北", // complain / bullshit (Hokkien)
  "靠腰", // damn / complain (Hokkien)
  "靠夭", // damn / bullshit (Hokkien variant)
  "機掰", // cunt (Hokkien, traditional)
  "雞掰", // cunt (Hokkien variant)
  "賤", // cheap / despicable (traditional)
  "賤人", // cheap/lowly person (traditional)
  "臭雞掰", // stinky cunt (Hokkien)
  "死囡仔", // damn kid (Hokkien)
  "幹拎娘", // fuck your mother (Hokkien variant)
  "林北", // your father (Hokkien, asserting dominance)
  "你娘", // your mother (Hokkien insult)
  "番仔", // barbarian / foreigner (derogatory)
  "三小", // what the hell (Hokkien)
  "衝三小", // what the fuck are you doing (Hokkien)
  "靠杯", // damn / complain (Hokkien variant)

  // Regional insults
  "瓜娃子", // idiot (Sichuan dialect)
  "瓜皮", // idiot (Northwestern dialect)
  "锤子", // dick / bullshit (Sichuan dialect)
  "哈麻批", // stupid cunt (Sichuan dialect)
  "日妈", // fuck your mother (regional)
  "龟儿", // turtle's son (Sichuan insult)
  "瘪三", // good-for-nothing (Shanghai dialect)
  "二流子", // loafer / hooligan
  "小赤佬", // little bastard (Shanghai dialect)
  "戳脊梁骨", // to be cursed behind one's back
  "绿帽子", // cuckold (lit. green hat)
  "戴绿帽", // to be cuckolded
  "乌龟", // turtle / cuckold
  "缩头乌龟", // coward (lit. turtle hiding in shell)
  "软蛋", // coward / wimp (lit. soft egg)
  "怂货", // coward
  "怂逼", // cowardly cunt
  "孬种", // coward / weakling

  // Body parts vulgar (additional)
  "大逼", // big cunt
  "骚穴", // slutty hole
  "穴", // hole (vulgar for vagina)
  "肉棒", // meat stick (slang for penis)
  "菊花", // chrysanthemum (slang for anus)
  "大波", // big boobs
  "奶子", // boobs / tits
  "咪咪", // boobs (childish/slang)

  // 操 compounds (additional)
  "操你奶奶", // fuck your grandmother
  "操你姐", // fuck your sister
  "操你妹", // fuck your younger sister
  "操你老师", // fuck your teacher
  "操死你", // fuck you to death
  "操烂你", // fuck you to ruin
  "操翻你", // fuck you over
  "操你十八代祖宗", // fuck your 18 generations of ancestors
  "操遍你全家", // fuck everyone in your family
  "操比", // fuck cunt (variant spelling)
  "操逼的", // the one who fucks cunts
  "操鸡巴", // fuck dick (expletive)
  "被操", // get fucked
  "让你操", // let you fuck
  "我肏", // holy fuck (vulgar variant)

  // 逼 compounds (additional)
  "狗逼", // dog cunt
  "穷逼", // poor cunt
  "丑逼", // ugly cunt
  "蠢逼", // stupid cunt
  "妈逼", // mother's cunt
  "闷逼", // depressed cunt
  "抠逼", // cheap/stingy cunt
  "吹逼", // to brag
  "蛋逼", // annoying/nagging
  "逼脸", // cunt face
  "逗逼", // funny idiot
  "奇逼", // weird cunt
  "牛B", // fucking awesome (variant)
  "你妈B", // your mom's cunt (abbreviation)
  "SB货", // stupid cunt (internet)
  "大SB", // big stupid cunt
  "NB闪闪", // fucking awesome (internet slang)

  // 屌 compounds
  "屌丝", // loser (lit. dick hair)
  "吊毛", // pubic hair / loser (variant)
  "屌你", // fuck you (dick you)
  "屌你老母", // fuck your mother (dick your mother)
  "屌你妈", // fuck your mother (dick)
  "屌死了", // fucking amazing
  "屌爆了", // fucking awesome
  "大屌", // big dick
  "小屌", // small dick
  "吊样", // dick-like appearance (insult)
  "屌毛", // pubic hair / worthless person
  "屌人", // to scold someone
  "吊死你", // hang you (insult)

  // Additional Cantonese profanity
  "戇撚", // stupid dick (Cantonese)
  "撚样", // dick-face (Cantonese)
  "仆你个街", // drop dead on the street (Cantonese)
  "死仆街", // damn drop dead (Cantonese)
  "冚家拎", // your whole family (Cantonese curse)
  "食屎啦", // eat shit (Cantonese)
  "你老豆", // your father (Cantonese insult)
  "你老母臭閪", // your mother's stinky cunt (Cantonese)
  "閪", // cunt (Cantonese)
  "臭閪", // stinky cunt (Cantonese)
  "死閪", // damn cunt (Cantonese)
  "撚", // dick (Cantonese)
  "㞗", // dick (Cantonese variant character)
  "丢你", // fuck you (Cantonese short form)
  "丢雷楼母", // fuck your mother (Cantonese variant)
  "丢佢老母", // fuck his/her mother (Cantonese)
  "扑你个街", // drop dead (Cantonese variant)
  "死蠢", // damn stupid (Cantonese)
  "死肥仔", // fat bastard (Cantonese)
  "死肥婆", // fat bitch (Cantonese)
  "死佬", // damn man (Cantonese)
  "冚家铲泥路", // may your whole family die (Cantonese extended)
  "含柒", // suck dick (Cantonese variant)
  "戆鸠鸠", // very stupid (Cantonese)
  "黐孖筋", // crazy (Cantonese variant)
  "你條仆街", // you drop-dead bastard (Cantonese)
  "收档啦", // piss off (Cantonese)
  "闩水喉", // shut up (Cantonese vulgar)
  "咸家铲", // curse whole family (Cantonese variant)
  "叼你", // fuck you (Cantonese variant)
  "叼你老母", // fuck your mother (Cantonese variant)
  "你阿妈", // your mother (Cantonese insult)
  "食你老母", // eat your mother (Cantonese vulgar)
  "冚把啦", // all of them (Cantonese insult)
  "仆你个死街", // drop dead on the damn street (Cantonese)
  "傻閪", // stupid cunt (Cantonese)
  "碌七", // dick (Cantonese variant)
  "含碌", // suck dick (Cantonese)
  "柒头皮", // dickhead (Cantonese extended)
  "死蛋家", // damn (Cantonese)
  "生旧叉烧好过生你", // better to have given birth to BBQ pork than you (Cantonese)
  "你个衰人", // you awful person (Cantonese)
  "死变态", // damn pervert (Cantonese)

  // Shanghainese profanity
  "册那", // fuck (Shanghainese)
  "册那妈", // fuck your mother (Shanghainese)
  "赤佬", // bastard (Shanghainese)
  "十三点", // crazy/stupid (Shanghainese)
  "小娘皮", // little slut (Shanghainese)
  "戆大", // big idiot (Shanghainese)
  "寿头", // idiot (Shanghainese)
  "寿头寿脑", // idiotic (Shanghainese)
  "触气", // annoying (Shanghainese)
  "猪头三", // pig head (Shanghainese insult)
  "小瘪三", // little good-for-nothing (Shanghainese)
  "娘希匹", // fuck your mother (Shanghainese)
  "那摩温", // asshole (Shanghainese)
  "棺材板", // coffin board (Shanghainese curse)
  "伊娘", // his/her mother (Shanghainese curse)
  "侬脑子瓦特了", // your brain is broken (Shanghainese)
  "港督", // stupid (Shanghainese slang)
  "阿乌卵", // dimwit (Shanghainese)

  // Sichuanese / Southwestern profanity
  "瓜批", // stupid cunt (Sichuanese)
  "日你仙人板板", // fuck your ancestors (Sichuanese)
  "日你先人", // fuck your ancestors (Sichuanese variant)
  "妈卖批", // mother sells cunt (Sichuanese)
  "卖批", // selling cunt (Sichuanese)
  "麻批", // cunt (Sichuanese)
  "龟儿子的", // son of a turtle (Sichuanese)
  "狗日", // dog-fucked (Sichuanese)
  "格老子", // damn it (Sichuanese)
  "批话", // bullshit (Sichuanese)
  "批事", // cunt business (Sichuanese)
  "瓜兮兮", // being stupid (Sichuanese)
  "日妈批", // fuck your mother's cunt (Sichuanese)
  "戳拐", // clumsy / stupid (Sichuanese)
  "瓜眉日眼", // stupid looking (Sichuanese)
  "瓜裹裹", // very stupid (Sichuanese)
  "勾子", // ass (Sichuanese)
  "哈戳戳", // extremely stupid (Sichuanese)
  "龟儿龟孙", // turtle son turtle grandson (Sichuanese double insult)
  "锤子锤子", // bullshit bullshit (Sichuanese emphasis)

  // Northeastern (东北) profanity
  "彪", // crazy/stupid (Northeastern)
  "虎", // stupid/reckless (Northeastern)
  "滚犊子", // get lost (Northeastern)
  "你大爷的", // your uncle's (Northeastern expletive)
  "你大爷", // your uncle (Northeastern)
  "傻了吧唧", // idiotic (Northeastern)
  "二椅子", // neither man nor woman (Northeastern insult)
  "臭不要脸的", // shameless (Northeastern variant)
  "嘎哈呢", // what the hell are you doing (Northeastern)
  "削你", // beat you up (Northeastern)
  "抽你", // slap you (Northeastern)
  "秃撸反涨", // unreliable (Northeastern)
  "破鞋", // slut (lit. broken shoe, Northeastern)
  "老疙瘩", // youngest child (can be insult)
  "犊子", // calf / bastard (Northeastern)
  "你个犊子", // you bastard (Northeastern)
  "扯犊子", // talking nonsense (Northeastern)
  "磨叽", // nagging / annoying (Northeastern)
  "得瑟", // showing off / annoying (Northeastern)
  "嘚瑟", // showing off (Northeastern variant)
  "妈了个巴子", // motherfucker (Northeastern)
  "妈了巴子", // motherfucker (Northeastern variant)
  "傻不拉几", // very stupid (Northeastern)
  "虎了吧唧", // recklessly stupid (Northeastern)
  "埋汰", // dirty / disgusting (Northeastern)
  "赖皮狗", // shameless dog (Northeastern)
  "嗑碜", // ugly (Northeastern)
  "膈应", // disgusting (Northeastern)
  "老嗑碜了", // very ugly (Northeastern)
  "松货", // loose woman / coward (Northeastern)

  // Hokkien/Minnan (additional)
  "肖查某", // crazy woman (Hokkien)
  "靠邀", // damn/bullshit (Hokkien)
  "靠爸", // damn (Hokkien, lit. cry for dad)
  "靠母", // damn (Hokkien, lit. cry for mom)
  "干恁娘", // fuck your mother (Hokkien variant)
  "恁爸", // your father (Hokkien, asserting dominance)
  "恁娘", // your mother (Hokkien insult)
  "恁娘咧", // your mother (Hokkien extended)
  "林老师", // your father (Hokkien euphemism for 林北)
  "死猴", // damn monkey (Hokkien insult)
  "夭寿", // short-lived / damn (Hokkien)
  "夭寿仔", // damn kid (Hokkien)
  "死番仔", // damn barbarian (Hokkien)
  "猪哥", // perverted man (Hokkien)
  "膨风", // blowhard / braggart (Hokkien)
  "白目", // clueless / annoying (Hokkien)
  "目屎", // crybaby (Hokkien)
  "赤查某", // shameless woman (Hokkien)
  "查某人", // woman (Hokkien, can be derogatory)
  "死査某", // damn woman (Hokkien)
  "肖年仔", // crazy kid (Hokkien)
  "垃圾", // garbage (Hokkien insult)
  "无路用", // useless (Hokkien)

  // Hakka profanity
  "屌你阿姆", // fuck your mother (Hakka)
  "屌那妈", // fuck your mother (Hakka variant)
  "食屎狗", // eat-shit dog (Hakka)
  "畜牲", // beast (Hakka variant of 畜生)
  "你姆个", // your mother's (Hakka)
  "死嫲", // damn old woman (Hakka)
  "死公", // damn old man (Hakka)
  "臭狗屎", // stinky dog shit (Hakka)
  "番狗", // foreign dog (Hakka insult)
  "阿姆个逼", // your mother's cunt (Hakka)
  "打你阿姆", // hit your mother (Hakka)
  "死猴精", // damn monkey spirit (Hakka)
  "矮仔冬瓜", // short winter melon (Hakka insult)

  // Internet slang / euphemisms (additional)
  "滚", // get lost
  "滚蛋", // get lost (lit. roll egg)
  "滚开", // get lost / go away
  "滚你的", // get the hell out
  "去死吧", // go die
  "找死", // looking for death
  "作死", // courting death
  "我了个去", // what the hell (euphemism)
  "我去", // what the hell (short euphemism)
  "河蟹", // censored (homophone for 和谐 harmonize)
  "我擦", // holy crap (euphemism for 我操)
  "我靠", // holy crap (variant euphemism)
  "靠", // damn (short form)
  "尻", // ass/fuck (variant character)
  "妈蛋", // damn it (mom egg)
  "狗币", // dog coin (euphemism for 狗逼)
  "牛掰", // fucking awesome (euphemism for 牛逼)
  "我勒个去", // what the hell (extended)
  "你妹", // your sister (euphemism for dismissal)
  "你妹的", // your sister's (expletive)
  "你大姨妈", // your aunt (menstruation) (insult)
  "去你的", // screw you
  "去你大爷", // go to your uncle (expletive)
  "药店碧莲", // shameless (internet pun: 要点逼脸)
  "然并卵", // but it's useless (internet slang)
  "日了哈士奇了", // what the fuck (variant)
  "我次奥", // what the fuck (euphemism)
  "握了个草", // holy shit (extended euphemism)
  "卧了个槽", // holy shit (extended variant)
  "你麻痹", // your paralysis (euphemism for 你妈逼)
  "麻痹", // paralysis (euphemism for 妈逼)
  "尼玛死了", // your mother died (euphemism)
  "WDNMD", // wo de ni ma de (internet abbreviation)
  "DLLM", // diu lei lou mou (Cantonese romanized abbreviation)
  "GDX", // gou dong xi (dog thing, abbreviation)
  "RNM", // ri ni ma (fuck your mother, abbreviation)
  "RNMB", // ri ni ma bi (fuck your mother's cunt, abbreviation)
  "WTM", // wo ta ma (fucking, abbreviation)

  // Homophobic slurs
  "死基佬", // damn faggot
  "娘炮", // sissy / effeminate man
  "死人妖", // damn ladyboy
  "人妖", // ladyboy / transgender (derogatory)
  "同性恋", // homosexual (used derogatorily)
  "搞基", // to be gay (derogatory)
  "玻璃", // glass (slang for gay)
  "兔子", // rabbit (old slang for gay)
  "断背", // brokeback (gay slur from movie)
  "断袖", // cut sleeve (classical term for homosexual, used derogatorily)
  "娘娘腔", // sissy voice
  "阴阳人", // intersex/hermaphrodite (insult)
  "不男不女", // neither man nor woman
  "死gay", // damn gay
  "搞基的", // the gay one (derogatory)
  "男同", // male homosexual (used derogatorily)
  "女同", // lesbian (used derogatorily)
  "拉拉", // lesbian (sometimes derogatory)
  "男妓", // male prostitute
  "鸭子", // duck (male prostitute slang)

  // Ethnic/discriminatory terms
  "蝗虫", // locust (derogatory for mainlanders in HK)
  "支那", // China (WWII-era Japanese slur, extremely offensive)
  "支那人", // Chinese person (extremely offensive slur)
  "东亚病夫", // sick man of East Asia (offensive)
  "鬼子", // devil (derogatory for Japanese)
  "小日本", // little Japan (derogatory)
  "日本鬼子", // Japanese devils
  "高丽棒子", // Korean stick (derogatory for Koreans)
  "棒子", // stick (derogatory for Koreans)
  "阿三", // Ah San (derogatory for Indians)
  "印度阿三", // Indian Ah San (derogatory)
  "白皮猪", // white pig
  "洋鬼子", // foreign devil
  "红毛", // red hair (derogatory for Westerners)
  "番鬼", // foreign ghost (Cantonese derogatory)
  "死鬼佬", // damn foreigner (Cantonese)
  "鬼佬", // foreigner (Cantonese, can be derogatory)
  "北佬", // northern person (Cantonese derogatory)
  "南蛮子", // southern barbarian
  "乡巴佬", // country bumpkin
  "土包子", // hillbilly / country bumpkin
  "外地人", // outsider (used derogatorily)

  // Traditional Chinese variants (Taiwan/HK)
  "幹你爸", // fuck your father (traditional)
  "幹死你", // fuck you to death (traditional)
  "媽的", // damn (traditional)
  "他媽的", // damn it (traditional)
  "去你媽的", // fuck off (traditional)
  "賤貨", // cheap slut (traditional)
  "蕩婦", // whore (traditional)
  "龜頭", // dickhead (traditional)
  "操你媽", // fuck your mother (traditional)
  "雜種", // bastard/mongrel (traditional)
  "廢物", // trash (traditional)
  "白癡", // idiot (traditional)
  "變態", // pervert (traditional)
  "腦殘", // brain damaged (traditional)
  "傻屄", // stupid cunt (traditional variant)
  "臭機掰", // stinky cunt (Hokkien variant)
  "幹你老師", // fuck your teacher (Hokkien euphemism)
  "幹拎老師", // fuck your teacher (Hokkien variant euphemism)
  "哩公蝦毀", // what the hell are you saying (Hokkien)
  "死好", // serves you right to die (traditional/Cantonese)

  // Additional sexual terms
  "肉便器", // human toilet (extreme insult)
  "性奴", // sex slave
  "淫妇", // lewd woman
  "淫娃", // lewd girl
  "骚女", // slutty girl
  "骚男", // slutty man
  "色狼", // pervert (lit. color wolf)
  "色鬼", // sex fiend
  "色魔", // sex demon
  "老色鬼", // old pervert
  "采花贼", // sexual predator (lit. flower-picking thief)
  "偷腥", // to cheat sexually
  "包二奶", // to keep a mistress
  "二奶", // mistress
  "小三", // mistress / homewrecker
  "劈腿", // to cheat (lit. split legs)
  "出轨", // to cheat on partner
  "野鸡", // wild chicken (prostitute)
  "站街", // street prostitute
  "失足妇女", // fallen woman (euphemism for prostitute)
  "三陪", // escort (hostess/prostitute)
  "开房", // to get a room (sexual connotation)
  "打野战", // outdoor sex
  "颜射", // facial (sexual act)
  "中出", // creampie (sexual)
  "内射", // internal ejaculation
  "群交", // group sex

  // Additional body part vulgarities
  "臭穴", // stinky hole
  "烂穴", // rotten hole
  "小穴", // little hole
  "嫩穴", // tender hole
  "肉穴", // flesh hole
  "马眼", // urethral opening (vulgar)
  "大胸", // big breasts (objectifying)
  "巨乳", // huge breasts
  "贫乳", // flat chest (insult)
  "飞机场", // airport (flat chest insult)
  "大屁股", // big ass
  "肥婆", // fat woman
  "肥仔", // fat boy
  "包皮", // foreskin (vulgar usage)

  // Death/violence threats used as profanity
  "弄死你", // I'll kill you
  "整死你", // I'll get you killed
  "打死你", // beat you to death
  "杀了你", // kill you
  "剁了你", // chop you up
  "活该", // serves you right
  "该死", // damn / deserve to die
  "死全家", // die whole family
  "全家死光光", // may your whole family die
  "断子绝孙", // may your line end
  "不得好死", // may you not die well
  "天打雷劈", // may heaven strike you with lightning
  "遭报应", // you'll get your karma

  // Additional internet censorship circumventions
  "NMDB", // ni ma de bi (your mother's cunt, abbreviation)
  "日MLGB", // ri ma le ge bi (fuck, abbreviation)
  "尼马", // your mother (variant euphemism)
  "泥马", // your mother (variant euphemism)
  "你嘛", // your mother (variant euphemism)
  "马勒戈壁", // fuck (euphemism: Malgobi desert)
  "法克", // fuck (transliteration)
  "法克鱿", // fuck you (transliteration)
  "妈勒个逼", // mother's cunt (euphemism variant)
  "吗勒个逼", // mother's cunt (variant)
  "要你命三千", // want your life 3000 (internet threat slang)

  // Pinyin romanization (people type in pinyin)
  "cao ni ma", // fuck your mother
  "cao ni", // fuck you
  "cao", // fuck
  "ri ni ma", // fuck your mother
  "ri ni", // fuck you
  "sha bi", // stupid cunt
  "shabi", // stupid cunt (no space)
  "gun dan", // get lost (roll egg)
  "gundan", // get lost (no space)
  "gun kai", // go away
  "qu si", // go die
  "qusi", // go die (no space)
  "qu si ba", // go die
  "qu ni ma de", // fuck off
  "ta ma de", // damn it
  "tamade", // damn it (no space)
  "ma de", // damn
  "wo cao", // holy fuck
  "wocao", // holy fuck (no space)
  "ni ma", // your mother (vulgar)
  "nima", // your mother (no space)
  "ni ma bi", // your mother's cunt
  "nimabi", // your mother's cunt (no space)
  "ni ma de", // your mother's
  "nimade", // your mother's (no space)
  "ji ba", // dick
  "jiba", // dick (no space)
  "gou ri de", // son of a bitch (dog-fucked)
  "gouride", // son of a bitch (no space)
  "gou niang yang de", // son of a bitch
  "wang ba dan", // son of a bitch
  "wangbadan", // son of a bitch (no space)
  "hun dan", // bastard
  "hundan", // bastard (no space)
  "za zhong", // bastard/mongrel
  "zazhong", // bastard/mongrel (no space)
  "biao zi", // bitch/whore
  "biaozi", // bitch/whore (no space)
  "jian ren", // cheap person
  "jianren", // cheap person (no space)
  "jian huo", // cheap slut
  "jianhuo", // cheap slut (no space)
  "ben dan", // dummy
  "bendan", // dummy (no space)
  "chun huo", // idiot
  "chunhuo", // idiot (no space)
  "fei wu", // trash/useless
  "feiwu", // trash (no space)
  "bai chi", // idiot
  "baichi", // idiot (no space)
  "nao can", // brain damaged
  "naocan", // brain damaged (no space)
  "zhi zhang", // mentally disabled (insult)
  "ruo zhi", // mentally weak
  "bian tai", // pervert
  "biantai", // pervert (no space)
  "bu yao lian", // shameless
  "wu chi", // shameless
  "ren zha", // scum
  "renzha", // scum (no space)
  "sao huo", // slut
  "saohuo", // slut (no space)
  "dang fu", // whore
  "dangfu", // whore (no space)
  "mai yin", // prostitution
  "piao chang", // visit a prostitute
  "da fei ji", // masturbate (male)
  "lu guan", // masturbate (male)
  "yue pao", // hookup
  "pao you", // friends with benefits
  "xiao san", // mistress
  "lv mao zi", // cuckold (green hat)
  "si quan jia", // die whole family
  "duan zi jue sun", // may your line end
  "bu de hao si", // may you not die well
  "nong si ni", // I'll kill you
  "da si ni", // beat you to death
  "sha le ni", // kill you
  "gai si", // deserve to die
  "zhao si", // looking for death
  "zuo si", // courting death
  "gun ni de", // fuck off
  "gun ni ma de", // fuck off (your mother)
  "cao dan", // fucked up
  "wo ri", // holy fuck
  "gan ni niang", // fuck your mother (variant)
  "gan ni ma", // fuck your mother
  "diao si", // loser
  "diaosi", // loser (no space)
  "niu bi", // fucking awesome
  "niubi", // fucking awesome (no space)
  "zhuang bi", // pretentious
  "zhuangbi", // pretentious (no space)
  "si bi", // dead cunt
  "lan bi", // rotten cunt
  "chou bi", // stinky cunt
  "gou bi", // dog cunt
  "qiong bi", // poor cunt
  "chou biao zi", // stinky bitch
  "chu sheng", // beast (dehumanizing)
  "pi yan", // asshole (butt eye)
  "gang men", // anus
  "yin dao", // vagina
  "yin jing", // penis
  "gao wan", // testicles
  "jing ye", // semen
  "she jing", // ejaculation
  "zi wei", // masturbation
  "kou jiao", // oral sex
  "gang jiao", // anal sex
  "xing jiao", // sexual intercourse
  "qiang jian", // rape
  "lun jian", // gang rape
  "luan lun", // incest
  "shou jiao", // bestiality
  "se lang", // pervert
  "se gui", // sex fiend
  "lao se gui", // old pervert
  "se mo", // sex demon
  "liu mang", // hooligan
  "di pi", // thug

  // Homophone evasions and internet circumventions
  "尼玛逼", // your mother's cunt (euphemism)
  "泥马逼", // your mother's cunt (euphemism)
  "尼马死了", // your mother died (euphemism variant)
  "草尼马", // fuck your mother (euphemism order variant)
  "糙你妈", // fuck your mother (rough variant)
  "艹你妈", // fuck your mother (internet shorthand)
  "艹你", // fuck you (internet shorthand)
  "艹了", // fucked (internet shorthand)
  "日尼玛", // fuck your mother (euphemism)
  "你马", // your mother (euphemism)
  "你麻", // your mother (euphemism)
  "你马比", // your mother's cunt (euphemism)
  "你麻比", // your mother's cunt (euphemism)
  "你吗的", // damn it (euphemism)
  "妈了个鸡", // mother's chicken (euphemism)
  "我槽", // holy shit (variant)
  "卧草", // holy shit (euphemism)
  "卧曹", // holy shit (euphemism variant)
  "我日了", // holy fuck (variant)
  "你妈了个逼", // your mother's cunt (extended)
  "尼妈逼", // your mother's cunt (euphemism)
  "你妈了个B", // your mother's cunt (mixed)
  "去尼玛的", // fuck off (euphemism)
  "去泥马的", // fuck off (euphemism)
  "QNMD", // qu ni ma de (abbreviation)
  "QNMLGB", // qu ni ma le ge bi (abbreviation)
  "TMB", // ta ma bi (abbreviation)
  "GNM", // gan ni ma (abbreviation)
  "GNMB", // gan ni ma bi (abbreviation)
  "CCB", // cao cao bi (abbreviation)

  // Internet slang and meme insults
  "绿茶婊", // green tea bitch (fake innocent)
  "白莲花", // white lotus (fake innocent)
  "圣母婊", // holy mother bitch (virtue signaler)
  "心机婊", // scheming bitch
  "绿茶", // green tea (fake innocent, abbreviated)
  "白富美", // white-rich-beautiful (used sarcastically)
  "高富帅", // tall-rich-handsome (used sarcastically)
  "矮矬穷", // short-ugly-poor
  "矮穷挫", // short-poor-ugly (variant)
  "凤凰男", // phoenix man (rural man marrying up, derogatory)
  "孔雀女", // peacock woman (spoiled urban woman)
  "田园女权", // pastoral feminism (derogatory)
  "直男癌", // straight man cancer (insult for sexist men)
  "女拳", // female fist (derogatory for feminist)
  "拳师", // fist master (derogatory for feminist)
  "杠精", // arguing spirit (contrarian)
  "键盘侠", // keyboard warrior
  "喷子", // troll / hater
  "水军", // water army (paid trolls)
  "五毛", // fifty cents (paid government commenter, derogatory)
  "五毛党", // fifty-cent party (derogatory)
  "小粉红", // little pinks (ultranationalists, derogatory)
  "粉红", // pink (ultranationalist, derogatory)
  "公知", // public intellectual (used derogatorily)
  "带路党", // guide party (traitor)
  "精日", // spiritual Japanese (traitor)
  "精美", // spiritual American (traitor)
  "慕洋犬", // foreign-worshipping dog
  "恨国党", // hate-country party
  "舔狗", // licking dog (simp)
  "舔", // lick (simp)
  "海王", // sea king (player/fuckboy)
  "渣男", // scum man
  "渣女", // scum woman
  "绿帽王", // cuckold king
  "接盘侠", // plate-catcher (man who dates single mothers, derogatory)
  "备胎", // spare tire (backup option in dating)
  "添头", // addition (unimportant person)
  "工具人", // tool person (being used)
  "老六", // old six (sneaky person)
  "狗腿", // dog leg (lackey, abbreviated)
  "软饭男", // soft rice man (kept man)
  "软饭", // soft rice (living off partner)
  "吃软饭", // eating soft rice (living off partner)
  "小白脸", // pretty boy (kept man)
  "花花公子", // playboy
  "臭老九", // stinky old nine (intellectual insult)
  "二货", // idiot
  "二逼青年", // stupid cunt youth
  "智商欠费", // IQ underpaid (stupid)
  "脑子进水", // water in the brain (stupid)
  "脑子有坑", // pit in the brain (stupid)
  "脑子有屎", // shit in the brain (stupid)
  "脑袋被门挤了", // head caught in door (stupid)
  "脑子被驴踢了", // brain kicked by donkey (stupid)
  "你是不是傻", // are you stupid
  "你有病吧", // you're sick
  "你有毛病", // you have problems
  "有病", // you're sick (short)
  "脑瘫", // cerebral palsy (used as insult)
  "自闭", // autistic (used as insult)
  "弱鸡", // weak chicken (weakling)
  "菜鸡", // vegetable chicken (noob)
  "菜鸟", // vegetable bird (noob)
  "菜狗", // vegetable dog (noob)
  "菜逼", // vegetable cunt (noob, vulgar)
  "战五渣", // combat power 5 (useless, Dragon Ball reference)
  "辣鸡", // spicy chicken (trash, homophone for 垃圾)
  "垃圾人", // garbage person
  "垃圾货", // garbage goods (worthless person)

  // Additional dialect profanity (Wenzhounese)
  "促侬", // damn you (Wenzhounese)
  "促侬娘", // damn your mother (Wenzhounese)
  "憨居", // stupid (Wenzhounese)
  "侬脑壳", // your skull (Wenzhounese insult)

  // Fuzhounese (Fuzhou dialect)
  "骂你母", // curse your mother (Fuzhounese)
  "死人骨", // dead person's bone (Fuzhounese insult)
  "你老母个逼", // your mother's cunt (Fuzhounese)
  "穷鬼", // poor ghost (Fuzhounese insult)
  "死鬼仔", // damn ghost kid (Fuzhounese)

  // Teochew/Chaozhou dialect
  "个老父", // your old father (Teochew)
  "食屎啦你", // eat shit (Teochew variant)
  "五百年", // five hundred years (Teochew curse)
  "死好命", // die well (Teochew sarcastic)
  "痴哥", // crazy brother (Teochew insult)

  // Hunanese/Xiang dialect
  "日你先人板板", // fuck your ancestor boards (variant for Hunan)
  "你个狗日的", // you dog-fucked (Hunanese)
  "堂客", // wife (can be derogatory in some contexts)
  "你个瘟猪", // you plague pig (Hunanese)
  "嬲", // fuck / mess with (dialectal)

  // Gansu/Northwestern dialect
  "日弄", // fuck around (Northwestern)
  "怂", // coward / stupid (Northwestern)
  "怂人", // cowardly person (Northwestern)
  "怂包", // coward (Northwestern)
  "瓜怂", // stupid coward (Northwestern)
  "憨怂", // foolish coward (Northwestern)

  // Additional Cantonese
  "死仔包", // damn kid (Cantonese)
  "死佬包", // damn man (Cantonese)
  "收嗮皮", // piss off completely (Cantonese)
  "你老味", // your old man (Cantonese insult)
  "碌柒", // dick (Cantonese variant)
  "食塞米", // eat clogged rice (Cantonese insult, useless)
  "你条友", // you (Cantonese derogatory)
  "白撞", // freeloader (Cantonese)
  "八公", // gossipy man (Cantonese)
  "死咸湿", // damn pervert (Cantonese)
  "衰格", // bad luck/character (Cantonese)
  "仆你个臭街", // drop dead on a stinky street (Cantonese)

  // Additional sexual terms
  "内衣", // underwear (used in sexual context)
  "情趣内衣", // sexy lingerie
  "调教", // training (sexual)
  "女王", // queen (dominatrix)
  "奴隶", // slave (sexual)
  "捆绑", // bondage
  "蜡烛", // candle (sexual play)
  "皮鞭", // leather whip (BDSM)
  "项圈", // collar (BDSM)
  "口枷", // ball gag
  "后入", // from behind (sexual)
  "骑乘", // riding (sexual position)
  "传教士", // missionary (sexual position)
  "深喉", // deep throat
  "吞精", // swallowing semen
  "口爆", // oral ejaculation
  "胸推", // breast massage/service
  "足交", // footjob
  "腋交", // armpit sex
  "股交", // intercrural sex
  "拳交", // fisting
  "玩弄", // to play with (sexual)
  "抽插", // thrusting (sexual)
  "高潮迭起", // climaxing repeatedly
  "多人运动", // multi-person exercise (group sex euphemism)
  "换妻", // wife swapping
  "换夫", // husband swapping
  "绿帽", // green hat (cuckold)
  "露出", // exposure (exhibitionism)
  "暴露癖", // exhibitionism
  "窥淫癖", // voyeurism
  "恋足癖", // foot fetish
  "恋物癖", // object fetish
  "制服诱惑", // uniform temptation
  "角色扮演", // role play (sexual)
  "性虐待", // sexual abuse
  "性暴力", // sexual violence
  "性骚扰", // sexual harassment
  "猥亵儿童", // child molestation
  "强制猥亵", // forced indecency
  "嫖资", // prostitution fee
  "肉体交易", // flesh trade
  "包养", // to keep (a mistress)
  "金主", // sugar daddy/mommy
  "干爹", // sugar daddy
  "干妈", // sugar mommy

  // Additional compound insults
  "你这个废物", // you useless thing
  "你这个垃圾", // you garbage
  "你这个人渣", // you scum
  "你这个败类", // you degenerate
  "你这个贱人", // you cheap person
  "你这个混蛋", // you bastard
  "你这个王八蛋", // you son of a bitch
  "你全家都是", // your whole family is
  "你妈是婊子", // your mother is a whore
  "你爸是王八", // your father is a cuckold
  "你祖宗十八代", // your 18 generations of ancestors
  "老子操你", // I'll fuck you (asserting dominance)
  "信不信我打你", // believe me I'll hit you
  "信不信我弄死你", // believe me I'll kill you
  "你活该", // you deserve it
  "你不配", // you don't deserve
  "你不配做人", // you don't deserve to be human
  "你算什么东西", // what kind of thing are you
  "你算个屁", // you count as a fart (worthless)
  "你算个鸡巴", // you count as a dick (worthless)
  "猪狗不如", // worse than pigs and dogs
  "狗都不如", // worse than a dog
  "禽兽不如", // worse than a beast
  "不是人", // not a person
  "不是东西", // not a thing (worthless)
  "老畜生", // old beast
  "小畜生", // little beast
  "畜生不如", // worse than a beast
  "臭不可闻", // unbearably stinky
  "臭不要脸的东西", // shameless thing
  "下流胚", // sleazy type
  "下贱", // lowly/base
  "无耻之徒", // shameless person
  "卑鄙小人", // despicable person
  "阴险小人", // treacherous person
  "势利眼", // snob (derogatory)
  "墙头草", // wall-top grass (fence-sitter, derogatory)
  "马屁精", // ass-kissing spirit (sycophant)
  "拍马屁", // patting horse's ass (sucking up)
  "哈巴狗", // Pekingese dog (lapdog/sycophant)
  "三孙子", // triple grandson (very submissive, insult)
  "孙子辈", // grandson generation (insult)
  "缩头王八", // hiding turtle (coward)
  "胆小鬼", // scaredy ghost (coward)
  "没种", // no seed (coward/gutless)
  "没卵子", // no eggs (no balls, coward)
  "没胆子", // no guts
  "窝囊", // wimpy/useless
  "软骨头", // soft bones (spineless)
  "软脚虾", // soft-legged shrimp (weakling)
  "贱骨头", // cheap bones (masochistic/cheap)
  "死皮赖脸", // shameless (dead skin relying on face)
  "厚颜无耻", // thick-faced and shameless
  "不知廉耻", // knowing no shame
  "丧尽天良", // completely devoid of conscience
  "天杀的", // heaven-killed (damned)
  "混蛋东西", // bastard thing
  "狗屁不通", // dog fart doesn't go through (complete nonsense)
  "放你妈的屁", // fart your mother's fart (bullshit)
  "放狗屁", // letting out dog farts (bullshit)
  "胡说八道", // talking nonsense
  "满嘴喷粪", // mouth spraying shit (talking nonsense)
  "吃屎去吧", // go eat shit
  "吃屎长大的", // grew up eating shit

  // === EXPANDED ENTRIES ===

  // Mandarin character variants (simplified + traditional pairs)
  "傻屌", // stupid dick
  "臭屌", // stinky dick
  "爛人", // rotten person (traditional)
  "爛貨", // rotten goods (traditional)
  "爛逼", // rotten cunt (traditional)
  "爛穴", // rotten hole (traditional)
  "臭逼的", // of the stinky cunt
  "臭逼貨", // stinky cunt goods
  "臭逼婊子", // stinky cunt whore
  "賤B", // cheap cunt (traditional)
  "臭B", // stinky cunt (abbreviation)
  "爛B", // rotten cunt (abbreviation)
  "老B", // old cunt (abbreviation)
  "嫩B", // young cunt (abbreviation)
  "騷逼", // slutty cunt (traditional)
  "騷貨", // slut (traditional)
  "賤貨婊子", // cheap slut whore (traditional)
  "騷女人", // slutty woman (traditional)
  "賤女人", // cheap woman (traditional)
  "臭女人", // stinky woman
  "臭男人", // stinky man
  "爛女人", // rotten woman
  "爛男人", // rotten man
  "死女人", // damn woman
  "死男人", // damn man
  "笨女人", // stupid woman
  "笨男人", // stupid man
  "蠢女人", // dumb woman
  "蠢男人", // dumb man
  "臭老太婆", // stinky old hag
  "老太婆", // old hag
  "老太公", // old fart
  "老不死的", // won't die old person
  "老妖婆", // old witch
  "老妖精", // old vixen
  "老贼", // old thief/villain
  "老狗", // old dog
  "臭老头", // stinky old man
  "臭老太", // stinky old woman
  "死老头", // damn old man
  "死老太", // damn old woman
  "狐狸精", // fox spirit (homewrecker)
  "小妖精", // little vixen
  "小骚货", // little slut
  "小贱人", // little cheap person
  "小婊子", // little whore
  "小流氓", // little hooligan
  "小混蛋", // little bastard
  "老杂种", // old mongrel
  "死杂种", // damn mongrel

  // Additional Cantonese (粤语) profanity - exhaustive
  "𨳊", // dick (Cantonese vulgar character)
  "𨳍", // dick (Cantonese variant)
  "𨶙", // fuck (Cantonese variant)
  "鳩样", // dick-looking (Cantonese)
  "鳩食", // eat dick (Cantonese)
  "鳩做", // dick-do (Cantonese, doing badly)
  "鳩叫", // dick-call (Cantonese, yelling stupidly)
  "鳩咁", // dick-like (Cantonese intensifier)
  "鳩嘈", // dick-noisy (Cantonese)
  "鸠样嘢", // dick-looking thing (Cantonese)
  "鸠嗌", // dick-yell (Cantonese)
  "閪樣", // cunt-looking (Cantonese)
  "閪面", // cunt face (Cantonese)
  "閪嘢", // cunt thing (Cantonese)
  "閪鬼", // cunt ghost (Cantonese)
  "臭閪婆", // stinky cunt woman (Cantonese)
  "老閪", // old cunt (Cantonese)
  "爛閪", // rotten cunt (Cantonese)
  "死閪婆", // damn cunt woman (Cantonese)
  "撚样嘢", // dick-looking thing (Cantonese)
  "撚嘢", // dick thing (Cantonese)
  "撚化", // dicktified (Cantonese)
  "撚鬼", // dick ghost (Cantonese)
  "撚都唔", // not even dick (Cantonese)
  "撚咁", // dick-like (Cantonese intensifier)
  "屌你個閪", // fuck your cunt (Cantonese)
  "屌你老閪", // fuck your old cunt (Cantonese)
  "屌鳩", // fuck dick (Cantonese)
  "屌撚", // fuck dick (Cantonese variant)
  "屌閪", // fuck cunt (Cantonese)
  "屌你一家", // fuck your whole family (Cantonese)
  "屌你祖宗", // fuck your ancestors (Cantonese)
  "屌你十八代", // fuck your 18 generations (Cantonese)
  "扑你个臭閪", // drop dead stinky cunt (Cantonese)
  "仆街仔", // drop-dead kid (Cantonese)
  "仆街婆", // drop-dead woman (Cantonese)
  "仆街佬", // drop-dead man (Cantonese)
  "死仆街仔", // damn drop-dead kid (Cantonese)
  "死仆街婆", // damn drop-dead woman (Cantonese)
  "你仆街啦", // you drop dead (Cantonese)
  "仆你個死街", // drop dead damn street (Cantonese)
  "冚家鏟", // whole family die (Cantonese traditional)
  "冚家剷", // whole family die (Cantonese variant)
  "冚家富貴", // whole family die (ironic, traditional)
  "丟你老味", // fuck your old man (Cantonese)
  "丟你老豆", // fuck your father (Cantonese)
  "丟你阿妈", // fuck your mother (Cantonese)
  "丟你全家", // fuck your whole family (Cantonese)
  "丟那媽", // fuck your mother (Cantonese traditional)
  "丟那妈个閪", // fuck your mother's cunt (Cantonese)
  "死蠢婆", // damn stupid woman (Cantonese)
  "死蠢仔", // damn stupid kid (Cantonese)
  "死蠢佬", // damn stupid man (Cantonese)
  "死on居", // damn stupid (Cantonese internet)
  "on居仔", // stupid kid (Cantonese internet)
  "on9", // stupid (Cantonese internet slang)
  "on9仔", // stupid kid (Cantonese internet)
  "on9婆", // stupid woman (Cantonese internet)
  "on99", // very stupid (Cantonese internet)
  "戆鸠仔", // stupid dick kid (Cantonese)
  "戆鸠佬", // stupid dick man (Cantonese)
  "戆鸠婆", // stupid dick woman (Cantonese)
  "戆居居", // very stupid (Cantonese variant)
  "黐线佬", // crazy man (Cantonese)
  "黐线婆", // crazy woman (Cantonese)
  "黐线仔", // crazy kid (Cantonese)
  "痴线佬", // crazy man (Cantonese variant)
  "痴线婆", // crazy woman (Cantonese variant)
  "死咸湿佬", // damn perverted man (Cantonese)
  "咸湿佬", // perverted man (Cantonese)
  "咸湿仔", // perverted kid (Cantonese)
  "咸湿鬼", // perverted ghost (Cantonese)
  "你食屎", // you eat shit (Cantonese)
  "你去食屎", // go eat shit (Cantonese)
  "收皮啦", // shut up already (Cantonese)
  "收皮啦你", // shut up you (Cantonese)
  "你收皮", // you shut up (Cantonese)
  "衰佬", // awful man (Cantonese)
  "衰女人", // awful woman (Cantonese)
  "衰鬼", // awful ghost (Cantonese)
  "衰嘢", // awful thing (Cantonese)
  "衰到贴地", // awful to the ground (Cantonese)
  "废柴一个", // a useless person (Cantonese)
  "大废柴", // big useless person (Cantonese)
  "你条废柴", // you useless person (Cantonese)
  "你条粉肠", // you rice noodle (Cantonese insult)
  "死粉肠", // damn rice noodle (Cantonese)
  "你条友仔", // you that guy (Cantonese derogatory)
  "契弟", // catamite (Cantonese insult)
  "死契弟", // damn catamite (Cantonese)
  "基佬", // gay (Cantonese derogatory)
  "死基仔", // damn gay kid (Cantonese)
  "死肥仔佬", // damn fat man (Cantonese)
  "肥婆乸", // fat woman (Cantonese)
  "丑怪", // ugly freak (Cantonese)
  "死丑怪", // damn ugly freak (Cantonese)
  "你嗰样", // your appearance (Cantonese insult)
  "你把口", // your mouth (Cantonese, shut up)
  "你把臭口", // your stinky mouth (Cantonese)
  "讲乜嘢", // what are you saying (Cantonese aggressive)
  "做乜鸠嘢", // what the dick are you doing (Cantonese)
  "做乜撚嘢", // what the dick are you doing (Cantonese)
  "你做乜", // what are you doing (Cantonese aggressive)
  "有冇搞错", // are you kidding (Cantonese aggressive)
  "你癫架", // are you crazy (Cantonese)
  "癫佬", // crazy man (Cantonese)
  "癫婆", // crazy woman (Cantonese)
  "有病嘅", // sick person (Cantonese)
  "神经病佬", // mental patient man (Cantonese)
  "憨鸠", // stupid dick (Cantonese variant)
  "低B", // low-class (Cantonese internet)
  "低能仔", // low-IQ kid (Cantonese)
  "低能婆", // low-IQ woman (Cantonese)
  "白痴仔", // idiot kid (Cantonese)
  "白痴婆", // idiot woman (Cantonese)
  "白痴佬", // idiot man (Cantonese)

  // Additional Hokkien/Taiwanese (闽南语) - exhaustive
  "幹恁祖嬤", // fuck your grandmother (Hokkien)
  "幹恁阿祖", // fuck your great-grandfather (Hokkien)
  "幹恁全家", // fuck your whole family (Hokkien)
  "幹恁老師", // fuck your teacher (Hokkien euphemism)
  "幹恁老母", // fuck your mother (Hokkien)
  "幹恁老父", // fuck your father (Hokkien)
  "幹恁媽", // fuck your mother (Hokkien variant)
  "幹恁爸", // fuck your father (Hokkien variant)
  "靠北靠母", // crying for dad and mom (Hokkien)
  "靠杯靠母", // damn and damn (Hokkien)
  "靠北啦", // damn it (Hokkien extended)
  "靠邀啦", // damn it (Hokkien extended)
  "靠北喔", // damn (Hokkien exclamation)
  "靠腰喔", // damn (Hokkien exclamation)
  "機掰人", // cunt person (Hokkien)
  "機掰仔", // cunt kid (Hokkien)
  "機掰話", // cunt talk (Hokkien)
  "機掰事", // cunt business (Hokkien)
  "雞掰人", // cunt person (Hokkien variant)
  "雞掰面", // cunt face (Hokkien)
  "雞掰臉", // cunt face (Hokkien traditional)
  "臭機掰的", // stinky cunt's (Hokkien)
  "林北馬", // your father (Hokkien assertive variant)
  "林北就是", // your father is (Hokkien assertive)
  "你娘咧", // your mother (Hokkien extended)
  "幹林老母", // fuck your old mother (Hokkien)
  "衝啥小", // what the hell (Hokkien variant)
  "三小啦", // what the hell (Hokkien extended)
  "啥小", // what the hell (Hokkien short)
  "啥洨", // what the semen (Hokkien vulgar)
  "洨", // semen (Hokkien)
  "番仔腳", // barbarian foot (Hokkien derogatory)
  "死番薯", // damn sweet potato (Hokkien, insult for Taiwanese)
  "番薯", // sweet potato (Hokkien, can be derogatory)
  "阿達仔", // crazy person (Hokkien)
  "肖仔", // crazy person (Hokkien)
  "肖婆", // crazy woman (Hokkien)
  "肖狗", // crazy dog (Hokkien)
  "憨人", // stupid person (Hokkien)
  "憨仔", // stupid kid (Hokkien)
  "憨面", // stupid face (Hokkien)
  "憨膽", // stupid nerve (Hokkien)
  "死囡仔脯", // damn kid meat (Hokkien)
  "夭壽骨", // damn bones (Hokkien)
  "夭壽啊", // damn it (Hokkien exclamation)
  "夭壽人", // damn person (Hokkien)
  "死猴仔", // damn monkey kid (Hokkien)
  "猴死囡仔", // monkey damn kid (Hokkien)
  "豬哥好色", // perverted man (Hokkien extended)
  "無路用的", // useless person (Hokkien extended)
  "無路用人", // useless person (Hokkien)
  "無效", // ineffective/useless (Hokkien)
  "歹命人", // cursed person (Hokkien)
  "歹勢", // sorry/embarrassing (Hokkien, can be sarcastic insult)
  "死人骨頭", // dead person's bones (Hokkien insult)

  // Additional Shanghainese (上海话) profanity
  "册那妈逼", // fuck your mother's cunt (Shanghainese)
  "册那马勒", // fuck that horse (Shanghainese euphemism)
  "赤佬头", // bastard head (Shanghainese)
  "小赤佬头", // little bastard head (Shanghainese)
  "死赤佬", // damn bastard (Shanghainese)
  "寿头寿脑的", // idiotic one (Shanghainese)
  "大寿头", // big idiot (Shanghainese)
  "十三点人", // crazy person (Shanghainese)
  "戆卵", // stupid egg (Shanghainese)
  "戆逼", // stupid cunt (Shanghainese)
  "瘪三货", // good-for-nothing goods (Shanghainese)
  "娘希匹的", // your mother's (Shanghainese)
  "小娘皮货", // little slut goods (Shanghainese)
  "触霉头", // unlucky/annoying (Shanghainese)
  "猪头三的", // pig head's (Shanghainese)
  "阿乌卵头", // dimwit head (Shanghainese)
  "侬个册那", // you fucking (Shanghainese)
  "侬个瘪三", // you good-for-nothing (Shanghainese)
  "侬个戆大", // you big idiot (Shanghainese)
  "侬个赤佬", // you bastard (Shanghainese)
  "侬个寿头", // you idiot (Shanghainese)
  "侬滚", // you get lost (Shanghainese)
  "侬去死", // you go die (Shanghainese)
  "侬个死人", // you dead person (Shanghainese)
  "搓死侬", // rub you to death (Shanghainese threat)
  "打侬个伊娘", // hit your mother (Shanghainese)
  "拆侬个骨头", // break your bones (Shanghainese)

  // Additional Sichuanese/Southwestern (四川话/西南官话)
  "瓜婆娘", // stupid woman (Sichuanese)
  "瓜兮兮的", // being stupid (Sichuanese extended)
  "瓜裹裹的", // very stupid (Sichuanese extended)
  "瓜批的", // stupid cunt (Sichuanese possessive)
  "日你妈哟", // fuck your mother (Sichuanese exclamation)
  "日他妈的", // fuck his mother (Sichuanese)
  "日你的仙人板板", // fuck your ancestor boards (Sichuanese extended)
  "格老子的", // damn it (Sichuanese possessive)
  "哈批", // stupid cunt (Sichuanese)
  "哈批的", // stupid cunt's (Sichuanese)
  "龟儿子的东西", // son of a turtle thing (Sichuanese)
  "龟儿龟孙的", // turtle son turtle grandson (Sichuanese)
  "你个龟儿", // you turtle's son (Sichuanese)
  "你个瓜娃", // you stupid kid (Sichuanese)
  "你个瓜批", // you stupid cunt (Sichuanese)
  "你个锤子", // you dick/bullshit (Sichuanese)
  "球都不是", // not even a ball (Sichuanese, worthless)
  "求都不懂", // doesn't know dick (Sichuanese, ball homophone)
  "日麻", // fuck mother (Sichuanese abbreviated)
  "日龟儿", // fuck turtle's son (Sichuanese)
  "卖麻批", // sell cunt (Sichuanese)
  "老子", // your father (Sichuanese assertive)
  "老子整死你", // I'll get you killed (Sichuanese)
  "龟孙儿的", // turtle grandson's (Sichuanese)
  "龟公的", // pimp's (Sichuanese)
  "批娃儿", // cunt kid (Sichuanese)
  "批话连篇", // full of cunt talk (Sichuanese)
  "勾子痒", // itchy ass (Sichuanese insult)
  "日你八辈祖宗", // fuck your eight generations (Sichuanese)
  "梆硬", // very stupid (Sichuanese slang)
  "棒老二", // thug/bandit (Sichuanese)
  "哈戳戳的", // extremely stupid (Sichuanese extended)
  "木脑壳", // wooden head (Sichuanese, stupid)
  "铲铲", // bullshit/nothing (Sichuanese)
  "龟儿瓜皮", // turtle son stupid (Sichuanese compound)

  // Additional Northeastern (东北话) profanity
  "你个彪子", // you crazy person (Northeastern)
  "彪呼呼", // crazy and dumb (Northeastern)
  "虎了吧唧的", // recklessly stupid (Northeastern extended)
  "傻了吧唧的", // idiotic (Northeastern extended)
  "犊子崽子", // calf brat (Northeastern)
  "扯蛋", // bullshit (Northeastern)
  "扯犊子的", // nonsense (Northeastern)
  "破马张飞", // making a scene (Northeastern)
  "嘚瑟什么", // why are you showing off (Northeastern)
  "削死你", // I'll beat you to death (Northeastern)
  "抽死你", // I'll slap you to death (Northeastern)
  "你个瘪犊子", // you deflated calf (Northeastern)
  "瘪犊子", // deflated calf (Northeastern insult)
  "滚犊子去吧", // get the hell out (Northeastern)
  "你大爷的操", // your uncle's fuck (Northeastern)
  "妈了个腿儿", // mother's leg (Northeastern euphemism)
  "妈了个蛋", // mother's egg (Northeastern euphemism)
  "整你", // get you (Northeastern threat)
  "你咋不上天呢", // why don't you fly to heaven (Northeastern sarcasm)
  "你咋不去死呢", // why don't you go die (Northeastern)
  "别得瑟了", // stop showing off (Northeastern)
  "嗑碜死了", // extremely ugly (Northeastern)
  "老嗑碜的", // very ugly person (Northeastern)
  "磨叽什么", // stop nagging (Northeastern)
  "墨迹什么", // stop being verbose (Northeastern variant)
  "埋汰人", // dirty person/insulting (Northeastern)
  "埋汰死了", // extremely dirty/disgusting (Northeastern)
  "膈应死了", // extremely disgusting (Northeastern)
  "彪呼呼的", // crazy stupid (Northeastern extended)
  "虎逼", // stupid cunt (Northeastern)
  "虎逼的", // stupid cunt's (Northeastern)
  "松松垮垮", // slack/loose (Northeastern insult for women)
  "松包", // loose bag (Northeastern, coward)
  "松包蛋", // loose egg (Northeastern, coward)
  "嘎嘛呢", // what the hell (Northeastern variant)
  "你妈了个比", // your mother's cunt (Northeastern)
  "妈逼的", // mother's cunt (Northeastern)
  "你大爷我", // I'm your uncle (Northeastern assertive)
  "秃噜反帐", // unreliable (Northeastern variant)
  "秃噜扣", // unreliable person (Northeastern)
  "二椅子人", // neither man nor woman person (Northeastern)
  "二虎子", // stupid tiger (Northeastern)
  "铁憨憨", // iron fool (Northeastern internet)
  "傻狍子", // stupid roe deer (Northeastern)
  "你个傻狍子", // you stupid roe deer (Northeastern)

  // Hakka (客家话) profanity - expanded
  "屌你阿姆个臭逼", // fuck your mother's stinky cunt (Hakka)
  "屌你个死人", // fuck you dead person (Hakka)
  "你个死人婆", // you dead woman (Hakka)
  "你个死人公", // you dead man (Hakka)
  "番狗仔", // foreign dog kid (Hakka)
  "死嫲婆", // damn old woman (Hakka)
  "你姆个逼", // your mother's cunt (Hakka variant)
  "衰人家", // awful family (Hakka)
  "打你个死人", // hit you dead person (Hakka)
  "你个猴精", // you monkey spirit (Hakka)
  "臭婆娘", // stinky woman (Hakka)
  "矮冬瓜", // short winter melon (Hakka insult)
  "番薯仔", // sweet potato kid (Hakka insult)
  "你个憨包", // you stupid bag (Hakka)
  "阿姆个屄", // your mother's cunt (Hakka variant)

  // Teochew/Chaozhou (潮州话) profanity - expanded
  "个老母", // your old mother (Teochew)
  "你老父", // your father (Teochew)
  "食屎人", // eat-shit person (Teochew)
  "五百年前的", // from 500 years ago (Teochew curse)
  "死好命的", // die-well-fated (Teochew sarcasm)
  "痴哥仔", // crazy brother kid (Teochew)
  "你个痴的", // you crazy one (Teochew)
  "老嫲的", // old woman's (Teochew insult)
  "番的", // barbarian (Teochew)
  "番仔的", // barbarian's (Teochew)
  "你个无用人", // you useless person (Teochew)
  "个老母的逼", // your old mother's cunt (Teochew)
  "你个蠢才", // you stupid talent (Teochew)

  // Wenzhounese (温州话) profanity - expanded
  "促侬个娘", // damn your mother (Wenzhounese)
  "促侬个老父", // damn your old father (Wenzhounese)
  "促人", // damn person (Wenzhounese)
  "憨居人", // stupid person (Wenzhounese)
  "侬个脑壳坏了", // your skull is broken (Wenzhounese)
  "侬个死人头", // your dead person head (Wenzhounese)
  "侬个瓜头", // you melon head (Wenzhounese)
  "促死的", // damn dead (Wenzhounese)

  // Fuzhounese (福州话) profanity - expanded
  "骂你全家", // curse your whole family (Fuzhounese)
  "死人骨头", // dead person's bones (Fuzhounese)
  "穷鬼人", // poor ghost person (Fuzhounese)
  "死鬼头", // dead ghost head (Fuzhounese)
  "你个穷鬼仔", // you poor ghost kid (Fuzhounese)
  "你个死人", // you dead person (Fuzhounese)
  "骂你母亲", // curse your mother (Fuzhounese)

  // Hunanese/Xiang (湖南话/湘语) profanity - expanded
  "日你先人板板的", // fuck your ancestor boards (Hunanese extended)
  "你个狗日的东西", // you dog-fucked thing (Hunanese)
  "你个瘟猪崽", // you plague piglet (Hunanese)
  "嬲死你", // fuck you to death (Hunanese)
  "嬲你妈", // fuck your mother (Hunanese)
  "嬲你的", // fuck yours (Hunanese)
  "堂客婆", // wife woman (Hunanese derogatory)
  "你个死堂客", // you damn wife (Hunanese)
  "蠢得死", // stupid to death (Hunanese)
  "婊子养的", // raised by a whore (Hunanese)
  "你个婊子", // you whore (Hunanese)

  // Gansu/Northwestern (甘肃/西北) profanity - expanded
  "日弄人", // fuck around with people (Northwestern)
  "怂人一个", // a cowardly person (Northwestern)
  "怂包蛋", // cowardly egg (Northwestern)
  "瓜怂人", // stupid cowardly person (Northwestern)
  "憨怂人", // foolish cowardly person (Northwestern)
  "日弄死你", // fuck around you to death (Northwestern)
  "你个瓜皮子", // you stupid skin (Northwestern)
  "额日你妈", // I fuck your mother (Northwestern dialect "I")
  "批脸", // cunt face (Northwestern)
  "锤子人", // dick person (Northwestern)
  "日塌了", // fucked up (Northwestern)
  "怂的一批", // cowardly as a cunt (Northwestern)

  // Guizhou (贵州话) profanity
  "日你仙人", // fuck your ancestor (Guizhou)
  "日你老汉", // fuck your old man (Guizhou)
  "瓜了巴叽", // very stupid (Guizhou)
  "日怪", // strange/fucking weird (Guizhou)
  "日鬼", // fucking ghost (Guizhou, sneaky)
  "老麻批", // old cunt (Guizhou)
  "你个二杆子", // you reckless person (Guizhou)

  // Anhui (安徽话) profanity
  "日你个仙人", // fuck your ancestor (Anhui)
  "你个瘟神", // you plague god (Anhui)
  "你个活宝", // you living treasure (Anhui sarcastic)
  "你个怂样子", // you cowardly looking (Anhui)
  "你个砍头的", // you beheaded one (Anhui curse)

  // Jiangxi (江西话) profanity
  "你个鬼样子", // you ghost-looking (Jiangxi)
  "你个死鬼", // you dead ghost (Jiangxi)
  "你个贱骨头", // you cheap bone (Jiangxi)
  "鬼样", // ghost-looking (Jiangxi)
  "鬼崽子", // ghost kid (Jiangxi)

  // Additional Pinyin romanizations - comprehensive
  "cao ni da ye", // fuck your uncle
  "cao ni nai nai", // fuck your grandmother
  "cao ni jie", // fuck your sister
  "cao ni mei", // fuck your younger sister
  "cao ni lao shi", // fuck your teacher
  "cao si ni", // fuck you to death
  "cao lan ni", // fuck you to ruin
  "cao fan ni", // fuck you over
  "cao ni shi ba dai zu zong", // fuck your 18 generations
  "cao bian ni quan jia", // fuck your whole family
  "ri ni da ye", // fuck your uncle (variant)
  "ri ni nai nai", // fuck your grandmother (variant)
  "ri ni quan jia", // fuck your whole family (variant)
  "gan ni lao mu", // fuck your old mother
  "gan ni niang de", // fuck your mother's
  "wo cao ni ma", // I fuck your mother
  "wo ri ni ma", // I fuck your mother (variant)
  "ni ta ma de", // you damn
  "ta ma de bi", // damn cunt
  "sha B", // stupid cunt
  "niu B", // fucking awesome
  "zhuang B", // pretentious
  "si B", // dead cunt
  "lan B", // rotten cunt
  "chou B", // stinky cunt
  "gou B", // dog cunt
  "qiong B", // poor cunt
  "po B", // broken cunt
  "da B", // big cunt
  "xiao B", // little cunt
  "lao B", // old cunt
  "nen B", // young cunt
  "sao B", // slutty cunt
  "ku B", // miserable cunt
  "men B", // depressed cunt
  "chou bi de", // of the stinky cunt
  "ni shi sha bi", // you are a stupid cunt
  "ni shi ge sha bi", // you are a stupid cunt (with classifier)
  "sha bi dong xi", // stupid cunt thing
  "ge sha bi", // a stupid cunt
  "da sha bi", // big stupid cunt
  "zhen ta ma de", // really damn
  "ta ma de sha bi", // damn stupid cunt
  "bi yang de", // cunt-born
  "bi lian", // cunt face
  "bi yang", // cunt looking
  "diao mao", // pubic hair
  "diao ren", // dick person
  "diao ni", // dick you
  "diao ni ma", // dick your mother
  "diao si le", // fucking amazing
  "diao bao le", // fucking awesome
  "da diao", // big dick
  "xiao diao", // small dick
  "ji ba ren", // dick person
  "ji ba dong xi", // dick thing
  "ji ba lian", // dick face
  "ji ba shi", // dick matter
  "ji ba mao", // pubic hair
  "ni ji ba shui", // who the dick are you
  "guan ni ji ba shi", // none of your dick business
  "gou ri de dong xi", // dog-fucked thing
  "gou niang yang de dong xi", // dog-mother-raised thing
  "wang ba nao dai", // turtle head
  "lao wang ba", // old turtle
  "gui sun zi de", // turtle grandson's
  "gui er zi de", // turtle son's
  "si quan jia de", // die whole family's
  "duan zi jue sun de", // line-ending
  "bu de hao si de", // may not die well
  "tian da lei pi de", // heaven-struck by lightning
  "chu sheng dong xi", // beast thing
  "ren zha dong xi", // scum thing
  "fei wu dong xi", // trash thing
  "la ji dong xi", // garbage thing
  "si bi yang de", // dead cunt born
  "ni shi la ji", // you are garbage
  "ni shi fei wu", // you are trash
  "ni shi ren zha", // you are scum
  "ni shi chu sheng", // you are a beast
  "ni shi sha gua", // you are a fool
  "ni shi bai chi", // you are an idiot
  "ni shi ben dan", // you are a dummy
  "ni shi zhu", // you are a pig
  "ni shi gou", // you are a dog
  "ni shi wang ba dan", // you are a son of a bitch
  "ni shi hun dan", // you are a bastard
  "ni shi za zhong", // you are a mongrel
  "ni shi ye zhong", // you are illegitimate
  "gun ni ma bi", // fuck off your mother's cunt
  "ni ma le ge bi", // your mother's cunt
  "wo cao ni da ye", // I fuck your uncle
  "ni ma de bi", // your mother's cunt (possessive)
  "cao ni ge bi", // fuck your cunt
  "cao ni ge xian ren ban ban", // fuck your ancestor boards
  "ma mai pi de", // mother selling cunt (Sichuan)
  "ma le ge bi de", // mother's cunt (exclamation)
  "wo ri ni xian ren", // I fuck your ancestors
  "gua pi zi", // stupid skin (Northwestern)
  "gua wa zi a", // stupid kid ah (Sichuan)
  "gui er de", // turtle son's (Sichuan)
  "biao zi yang de", // whore-raised
  "ji nv yang de", // prostitute-raised
  "pu jie la", // drop dead (Cantonese pinyin)
  "diu lei lou mou", // fuck your mother (Cantonese pinyin)
  "diu nei", // fuck you (Cantonese pinyin)
  "diu nei lo mo", // fuck your mother (Cantonese pinyin variant)
  "ham gaa caan", // whole family die (Cantonese pinyin)
  "puk gaai", // drop dead (Cantonese pinyin)
  "sei puk gaai", // damn drop dead (Cantonese pinyin)
  "chi sin", // crazy (Cantonese pinyin)
  "on gau", // stupid (Cantonese pinyin)
  "sei nui", // damn girl (Cantonese pinyin)
  "sei zai", // damn boy (Cantonese pinyin)
  "sei lo", // damn man (Cantonese pinyin)
  "sei fei po", // damn fat woman (Cantonese pinyin)
  "fei zai", // fatty (Cantonese pinyin)
  "lan yeung", // dick-looking (Cantonese pinyin)
  "hai yeung", // cunt-looking (Cantonese pinyin)
  "gau yeung", // dick-looking (Cantonese pinyin variant)
  "han lun", // suck dick (Cantonese pinyin)
  "sik si", // eat shit (Cantonese pinyin)
  "sau pei", // shut up (Cantonese pinyin)
  "fai chai", // useless person (Cantonese pinyin)
  "gan lin niang", // fuck your mother (Hokkien pinyin)
  "ka bei", // damn (Hokkien pinyin)
  "ka bai", // damn (Hokkien pinyin variant)
  "ka yao", // damn (Hokkien pinyin variant)
  "ji bai", // cunt (Hokkien pinyin)
  "lin bei", // your father (Hokkien pinyin)
  "sa siao", // what the hell (Hokkien pinyin)
  "li niang", // your mother (Hokkien pinyin)

  // Additional Internet slang / abbreviations - comprehensive
  "NMD", // ni ma de (damn)
  "NMDX", // ni ma de xia (your mother's shrimp, euphemism)
  "CNNM", // cao ni niang ma (fuck your mother)
  "CND", // cao ni de (fuck yours)
  "RNM的", // ri ni ma de (fuck your mother's)
  "RNMB的", // ri ni ma bi de (fuck your mother's cunt)
  "GDX的", // gou dong xi de (dog thing's)
  "SB的", // sha bi de (stupid cunt's)
  "SBnm", // sha bi ni ma (stupid cunt your mother)
  "QNM", // qu ni ma (go to your mother)
  "QNMD的", // qu ni ma de (fuck off)
  "NMB的", // ni ma bi de (your mother's cunt)
  "WDNM", // wo de ni ma (my your mother)
  "DLLM的", // diu lei lou mou (Cantonese)
  "WTF中文", // WTF in Chinese context
  "RGNM", // variant abbreviation
  "WQNM", // wo qu ni ma
  "WQNMLGB", // wo qu ni ma le ge bi
  "GNMB的东西", // gan ni ma bi de thing
  "DSB", // da sha bi (big stupid cunt)
  "DSSB", // da si sha bi (big dead stupid cunt)
  "NCB", // nao can bi (brain damaged cunt)
  "SBnew", // sha bi new (stupid cunt newbie)

  // Homophone evasions - comprehensive expansion
  "糙你妈的", // fuck your mother's (rough variant)
  "糙你大爷", // fuck your uncle (rough variant)
  "糙你祖宗", // fuck your ancestors (rough variant)
  "糙死你", // rough-fuck you to death
  "艹死你", // internet-fuck you to death
  "艹你大爷", // internet-fuck your uncle
  "艹你祖宗", // internet-fuck your ancestors
  "艹你全家", // internet-fuck your whole family
  "日尼玛的", // fuck your mother's (euphemism)
  "日泥马的", // fuck your mother's (euphemism variant)
  "你马勒逼", // your horse cunt (euphemism)
  "你麻辣逼", // your spicy cunt (euphemism)
  "你马拉个逼", // your horse pull cunt (euphemism)
  "你麻辣隔壁", // your spicy neighbor (euphemism pun)
  "马勒个逼", // horse cunt (euphemism)
  "马勒隔壁", // horse next door (euphemism)
  "妈了个逼的", // mother's cunt (euphemism)
  "妈了个鸡巴", // mother's dick (euphemism)
  "你妈的逼", // your mother's cunt (explicit)
  "我靠你妈", // I lean your mother (euphemism)
  "我擦你妈", // I wipe your mother (euphemism)
  "我去你妈", // I go your mother (euphemism)
  "卧了个大槽", // holy big shit (euphemism)
  "我了个大去", // what the big (euphemism)
  "我靠了个去", // holy damn (euphemism)
  "天了噜", // oh heavens (euphemism)
  "日了狗了这个", // what the fuck is this (euphemism)
  "这他妈的", // this damn
  "那他妈的", // that damn
  "他妈的逼", // damn cunt
  "你妈了个大逼", // your mother's big cunt
  "你妈了个臭逼", // your mother's stinky cunt
  "去你妈个逼", // go to your mother's cunt
  "去你妈了个逼", // go to your mother's cunt
  "法克你", // fuck you (transliteration)
  "法克鱿们", // fuck you all (transliteration)
  "法克的", // fucking (transliteration)
  "达姆", // damn (transliteration)
  "比奇", // bitch (transliteration)
  "阿斯霍尔", // asshole (transliteration)
  "什特", // shit (transliteration)
  "芬克", // funk/fuck (transliteration variant)
  "牛B克拉斯", // fucking class (mixed)
  "妈的智障", // damn mentally disabled
  "你妈是鸡", // your mother is a prostitute
  "你妈卖逼", // your mother sells cunt
  "你妈卖批", // your mother sells cunt (variant)
  "你妈打炮", // your mother bangs
  "你爸是龟", // your father is a turtle (cuckold)
  "你全家死绝", // may your whole family die out
  "你全家火葬场", // your whole family crematorium
  "你全家暴毙", // your whole family sudden death
  "你全家下地狱", // your whole family go to hell
  "全家暴毙", // whole family sudden death
  "全家下地狱", // whole family go to hell
  "全家火葬", // whole family cremation
  "下地狱", // go to hell
  "下地狱去吧", // go to hell
  "你下地狱吧", // you go to hell

  // Number/letter substitutions used as evasions
  "C你M", // cao ni ma (substitution)
  "C你MB", // cao ni ma bi (substitution)
  "R你M", // ri ni ma (substitution)
  "C你的", // cao ni de (substitution)
  "C了", // cao le (substitution)
  "C蛋", // cao dan (substitution)
  "S你M", // sha ni ma (substitution)
  "N你M", // ni ma (substitution)
  "你M的", // ni ma de (substitution)
  "你M逼", // ni ma bi (substitution)
  "你M了个B", // ni ma le ge bi (substitution)
  "去N的", // qu ni de (substitution)
  "去NM的", // qu ni ma de (substitution)
  "W操", // wo cao (substitution)
  "我C", // wo cao (substitution)
  "我R", // wo ri (substitution)
  "日NM", // ri ni ma (substitution)
  "草NM", // cao ni ma (substitution)
  "操NM", // cao ni ma (substitution)
  "你个SB", // ni ge sha bi (substitution)
  "真是SB", // zhen shi sha bi (substitution)
  "大SB一个", // a big stupid cunt
  "小SB", // little stupid cunt
  "这个SB", // this stupid cunt
  "那个SB", // that stupid cunt
  "NB的很", // really fucking awesome
  "牛13", // niu B (number substitution)
  "2B青年", // stupid cunt youth (number substitution)
  "S13", // sha B (number substitution for 傻逼)
  "装13", // zhuang B (number substitution)
  "你13", // ni B (number substitution)
  "250", // idiot (number slang)
  "748", // go die (number slang: qu si ba)

  // Additional internet meme insults
  "药店碧莲的", // shameless person (internet pun)
  "城会玩", // city people know how to play (sarcastic)
  "贵圈真乱", // your circle is really messed up
  "然并卵的", // but it's useless (internet)
  "你很社会", // you're very street (sarcastic)
  "我也是醉了", // I'm drunk too (exasperated)
  "也是没谁了", // there's no one like you (negative)
  "给跪了", // kneeling (overwhelmed, negative)
  "跪着看完的", // watched while kneeling (sarcastic)
  "沙雕", // sand sculpture (idiot, homophone euphemism for 傻逼)
  "沙雕网友", // sand sculpture netizen (idiot)
  "大沙雕", // big sand sculpture (big idiot)
  "沙雕行为", // sand sculpture behavior (stupid behavior)
  "铁废物", // iron waste (truly useless)
  "人形垃圾", // human-shaped garbage
  "行走的垃圾", // walking garbage
  "行走的废物", // walking waste
  "社会垃圾", // social garbage
  "社会的渣滓", // dregs of society
  "社会败类", // social scum
  "人间败类", // human scum
  "败类中的败类", // scum among scum
  "垃圾中的垃圾", // garbage among garbage
  "废物中的废物", // waste among waste
  "猪队友", // pig teammate (useless teammate)
  "猪一样的队友", // teammate like a pig
  "带不动", // can't carry (useless in gaming)
  "演员", // actor (someone throwing the game)
  "挂逼", // hack cunt (cheater)
  "外挂狗", // hack dog (cheater)
  "神经病", // psycho
  "精神病", // mental illness (used as insult)
  "精神病人", // mental patient (used as insult)
  "精神病院出来的", // escaped from mental hospital
  "神经病的", // psycho's
  "你有精神病", // you have mental illness
  "吃药了没", // have you taken your medicine
  "吃药去吧", // go take your medicine
  "该吃药了", // time to take your medicine
  "你疯了吧", // you're crazy
  "你傻了吧", // you're stupid
  "你瞎了吧", // you're blind
  "你聋了吧", // you're deaf
  "你脑子有坑吧", // you have a pit in your brain
  "你脑子有水吧", // you have water in your brain
  "你脑子有屎吧", // you have shit in your brain
  "智商感人", // IQ is touching (sarcastically low)
  "智商堪忧", // IQ is worrying
  "智商低下", // low IQ
  "智商为零", // IQ is zero
  "智商为负", // IQ is negative
  "智商税", // IQ tax (buying stupid things)
  "情商为零", // EQ is zero
  "脑瘫的", // cerebral palsy (insult)
  "自闭的", // autistic (insult)
  "脑残粉", // brain-damaged fan
  "脑残行为", // brain-damaged behavior
  "脑残逻辑", // brain-damaged logic
  "脑残想法", // brain-damaged idea
  "弱鸡行为", // weak chicken behavior
  "菜鸡行为", // vegetable chicken behavior
  "辣鸡行为", // spicy chicken behavior (trash)
  "辣鸡人", // spicy chicken person (trash person)
  "辣鸡货", // spicy chicken goods (trash)

  // Additional death/violence curse words
  "弄死你全家", // I'll kill your whole family
  "整死你全家", // I'll get your whole family killed
  "打死你妈", // beat your mother to death
  "杀了你全家", // kill your whole family
  "剁了你全家", // chop up your whole family
  "活该去死", // deserve to go die
  "你活该去死", // you deserve to go die
  "不得好死的东西", // thing that won't die well
  "天打雷劈的东西", // thing struck by lightning
  "全家不得好死", // whole family won't die well
  "全家天打雷劈", // whole family struck by lightning
  "断子绝孙的东西", // thing with no descendants
  "绝后", // cut off posterity
  "绝种", // extinct
  "去死去死去死", // go die go die go die
  "死死死", // die die die
  "快去死", // hurry up and die
  "赶紧去死", // hurry up and die
  "赶紧死", // hurry up and die (short)
  "立刻去死", // die immediately
  "马上去死", // die right now
  "给我去死", // die for me
  "滚去死", // roll off and die
  "爬去死", // crawl off and die

  // Additional traditional Chinese characters (繁体字)
  "幹你娘的", // fuck your mother's (traditional)
  "幹你媽的", // fuck your mother's (traditional)
  "幹你爸的", // fuck your father's (traditional)
  "幹你祖宗的", // fuck your ancestors' (traditional)
  "幹你全家的", // fuck your whole family's (traditional)
  "幹死你的", // fuck you to death (traditional)
  "幹爆你", // fuck you hard (traditional)
  "幹翻你", // fuck you over (traditional)
  "操你媽的逼", // fuck your mother's cunt (traditional)
  "賤人一個", // a cheap person (traditional)
  "賤貨一個", // a cheap slut (traditional)
  "蕩婦一個", // a whore (traditional)
  "婊子一個", // a bitch (traditional)
  "白癡一個", // an idiot (traditional)
  "變態一個", // a pervert (traditional)
  "廢物一個", // a piece of trash (traditional)
  "人渣一個", // a scum (traditional)
  "敗類一個", // a degenerate (traditional)
  "腦殘一個", // a brain-damaged person (traditional)
  "智障一個", // a retard (traditional)
  "弱智一個", // a mentally weak person (traditional)
  "混蛋一個", // a bastard (traditional)
  "雜種一個", // a mongrel (traditional)
  "畜牲一個", // a beast (traditional)
  "禽獸", // beast (traditional)
  "禽獸不如", // worse than a beast (traditional)
  "豬狗不如", // worse than pigs and dogs (traditional)
  "狗都不如的東西", // thing worse than a dog (traditional)
  "連狗都不如", // not even as good as a dog (traditional)
  "連豬都不如", // not even as good as a pig (traditional)
  "不如狗", // worse than a dog
  "不如猪", // worse than a pig
  "不如畜生", // worse than a beast
  "猪狗不如的东西", // thing worse than pigs and dogs

  // Additional compound curse phrases
  "你这个狗东西", // you this dog thing
  "你这个烂人", // you this rotten person
  "你这个臭人", // you this stinky person
  "你这个死人", // you this dead person
  "你这个蠢猪", // you this stupid pig
  "你这个笨蛋", // you this dummy
  "你这个傻蛋", // you this fool
  "你这个蠢蛋", // you this dumb egg
  "你这个蠢驴子", // you this stupid donkey
  "你这个烂货", // you this rotten goods
  "你这个贱货", // you this cheap goods
  "你这个骚货", // you this slutty goods
  "你这个浪货", // you this loose goods
  "你这个臭货", // you this stinky goods
  "你这个臭婊子", // you this stinky whore
  "你这个贱婊子", // you this cheap whore
  "你这个死婊子", // you this damn whore
  "你这个臭三八", // you this stinky bitch
  "你这个死三八", // you this damn bitch
  "你这个老三八", // you this old bitch
  "你这个臭流氓", // you this stinky hooligan
  "你这个死流氓", // you this damn hooligan
  "你这个地痞流氓", // you this thug hooligan
  "你这个痞子流氓", // you this ruffian hooligan
  "你这个人渣败类", // you this scum degenerate
  "你这个社会垃圾", // you this social garbage
  "你这个社会败类", // you this social scum
  "你这个社会渣滓", // you this social dregs
  "你这个害虫", // you this pest
  "你这个寄生虫", // you this parasite
  "你这个蛆虫", // you this maggot
  "你这个苍蝇", // you this fly
  "你这个蟑螂", // you this cockroach
  "你这个老鼠", // you this rat
  "你这个臭虫", // you this stink bug
  "你这个跳蚤", // you this flea
  "你这个蝇营狗苟的东西", // you this scheming dog thing
  "臭不可闻的东西", // unbearably stinky thing
  "烂到骨子里", // rotten to the bone
  "坏到骨子里", // bad to the bone
  "贱到骨子里", // cheap to the bone
  "下贱到骨子里", // lowly to the bone
  "无耻到极点", // shameless to the extreme
  "无耻至极", // extremely shameless
  "卑鄙无耻", // despicable and shameless
  "卑鄙至极", // extremely despicable
  "阴险至极", // extremely treacherous
  "恶心死了", // disgusting to death
  "恶心到极点", // disgusting to the extreme
  "恶心人", // disgusting person
  "恶心死人", // disgusting to death
  "恶心的东西", // disgusting thing
  "令人作呕", // makes people vomit
  "令人恶心", // makes people disgusted

  // Additional sexual insults and terms
  "阳痿", // impotence
  "阳痿男", // impotent man
  "早泄", // premature ejaculation
  "早泄男", // premature ejaculation man
  "性冷淡", // frigid
  "性变态", // sexual pervert
  "性狂", // sex maniac
  "性瘾", // sex addict
  "露阴癖", // exhibitionism
  "露出癖的", // exhibitionist's
  "窥阴癖的", // voyeurist's
  "恋足癖的", // foot fetishist's
  "恋童的", // pedophilic
  "恋童癖者", // pedophile (person)
  "鸡巴脸", // dick face
  "鸡巴头", // dickhead
  "鸡巴样", // dick-looking
  "鸡巴东西", // dick thing
  "鸡巴人", // dick person
  "骚逼货", // slutty cunt goods
  "骚逼样", // slutty cunt looking
  "骚逼的", // slutty cunt's
  "骚穴的", // slutty hole's
  "骚逼女人", // slutty cunt woman
  "骚逼男人", // slutty cunt man
  "大奶子", // big tits
  "大奶牛", // big milk cow (big-titted)
  "平胸", // flat chest
  "平胸女", // flat-chested woman
  "搓衣板", // washboard (flat chest insult)
  "太平公主", // Princess Taiping (flat chest insult)
  "阴道松弛", // loose vagina
  "松逼", // loose cunt
  "紧逼", // tight cunt
  "处女逼", // virgin cunt
  "破处", // break virginity
  "被破处", // have virginity broken
  "开苞", // deflower
  "初夜权", // right of first night
  "肉体补偿", // bodily compensation
  "潜规则", // unspoken rules (casting couch)
  "被潜规则", // subjected to unspoken rules

  // Gaming/internet insult culture
  "坑逼", // pit cunt (person who makes others lose)
  "坑货", // pit goods (useless person in games)
  "坑逼队友", // pit cunt teammate
  "送人头", // giving away kills
  "送逼", // giving away kills (vulgar)
  "挂狗", // hack dog
  "开挂逼", // hacking cunt
  "外挂逼", // cheat cunt
  "代练狗", // boosting dog
  "演逼", // acting cunt (pretending)
  "装死逼", // playing dead cunt
  "鸽逼", // pigeon cunt (person who stands others up)
  "白嫖逼", // freeloading cunt
  "白嫖狗", // freeloading dog
  "白嫖怪", // freeloading monster
  "伸手党", // reaching-hand party (always asking for freebies)
  "吃瓜群众", // melon-eating masses (can be derogatory)
  "圣母逼", // holy mother cunt (fake virtue)
  "心机逼", // scheming cunt
  "绿茶逼", // green tea cunt (fake innocent)
  "白莲花逼", // white lotus cunt (fake innocent)
  "双标逼", // double-standard cunt
  "双标狗", // double-standard dog
  "杠精逼", // contrarian cunt
  "喷子逼", // troll cunt
  "键盘侠逼", // keyboard warrior cunt
  "圣母婊的", // holy mother bitch's
  "心机婊的", // scheming bitch's
  "绿茶婊的", // green tea bitch's

  // Additional Cantonese romanizations (Jyutping/Yale)
  "diu nei lo mo chau hai", // fuck your mother stinky cunt (Cantonese)
  "diu lei", // fuck you (Cantonese variant)
  "diu lei lo mo", // fuck your mother (Cantonese)
  "diu lei lo mo ge hai", // fuck your mother's cunt (Cantonese)
  "diu lei go hai", // fuck your cunt (Cantonese)
  "puk gai", // drop dead (Cantonese)
  "sei puk gai", // damn drop dead (Cantonese)
  "ham gaa ling", // whole family (curse, Cantonese)
  "sei zan", // damn kid (Cantonese)
  "sei neoi", // damn girl (Cantonese)
  "fei po", // fat woman (Cantonese)
  "ci sin", // crazy (Cantonese)
  "fai caai", // useless (Cantonese)
  "haam sap", // perverted (Cantonese)
  "haam sap lo", // perverted man (Cantonese)
  "baat po", // gossipy woman (Cantonese)
  "siu pei", // shut up/piss off (Cantonese)
  "sik si la", // eat shit (Cantonese)

  // Additional Hokkien romanizations (POJ/Tai-lo)
  "kan lin niang", // fuck your mother (Hokkien)
  "kan li niang", // fuck your mother (Hokkien variant)
  "kan lin nioh", // fuck your mother (Hokkien variant)
  "khau pe", // cry for father (Hokkien)
  "khau bu", // cry for mother (Hokkien)
  "khau pe khau bu", // cry for dad and mom (Hokkien)
  "ki pai", // cunt (Hokkien)
  "chau ki pai", // stinky cunt (Hokkien)
  "lin pe", // your father (Hokkien)
  "lin bu", // your mother (Hokkien)
  "sa siau", // what the hell (Hokkien)
  "siong sa siau", // what the hell (Hokkien variant)
  "chau cha bo", // stinky woman (Hokkien)
  "gong siann", // talking nonsense (Hokkien)
  "si gin na", // damn kid (Hokkien)
  "iau siu", // damn/short-lived (Hokkien)
  "ti ko", // perverted man (Hokkien)
  "beh bin", // horse face (Hokkien insult)
  "peh bak", // white eyes/clueless (Hokkien)
  "bo lo iong", // useless (Hokkien)
  "lan pha", // dick/balls (Hokkien)
  "lan ciau", // dick bird (Hokkien)
  "ka ciau", // fake bird/dick (Hokkien)

  // Additional number/symbol evasions
  "我C了", // I fucked (C = cao)
  "你他C的", // you his C's (C = cao)
  "我R了", // I R'd (R = ri, fucked)
  "R你的", // R yours (R = ri)
  "S B", // sha bi with space
  "S.B.", // sha bi with dots
  "S B 货", // sha bi goods with spaces
  "N B", // niu bi with space
  "N.B.", // niu bi with dots
  "2 B", // er bi with space
  "T M D", // ta ma de with spaces
  "T.M.D.", // ta ma de with dots
  "C N M", // cao ni ma with spaces
  "C.N.M.", // cao ni ma with dots
  "C N M B", // cao ni ma bi with spaces
  "W C", // wo cao with space
  "W.C.的", // wo cao with dots
  "J B", // ji ba with space
  "J.B.", // ji ba with dots
  "N M S L", // ni ma si le with spaces
  "G D X", // gou dong xi with spaces
  "G.D.X.", // gou dong xi with dots
  "R N M", // ri ni ma with spaces
  "R.N.M.", // ri ni ma with dots
  "Q N M D", // qu ni ma de with spaces
  "M M P", // ma mai pi with spaces
  "M.M.P.", // ma mai pi with dots
  "W N M", // wo ni ma with spaces

  // Additional homophone character evasions
  "你嬤的", // your grandmother's (euphemism)
  "你媽了個逼", // your mother's cunt (traditional)
  "你嘛了個逼", // your (euphemism) cunt
  "草泥马的", // fuck your mother's (euphemism)
  "草泥马逼", // fuck your mother's cunt (euphemism)
  "草泥吗", // fuck your (euphemism)
  "操泥马", // fuck mud horse (euphemism)
  "操尼玛", // fuck your mother (euphemism)
  "日泥马", // fuck mud horse (euphemism)
  "日尼马", // fuck your mother (euphemism variant)
  "日尼妈逼", // fuck your mother's cunt (euphemism)
  "你吗逼", // your (euphemism) cunt
  "你嘛逼", // your (euphemism) cunt
  "妈了个鸡的", // mother's chicken (euphemism)
  "妈了个鸡巴的", // mother's dick (euphemism)
  "我擦了", // I wiped (euphemism for 我操了)
  "我靠了", // I leaned (euphemism for 我操)
  "我日了个仙人", // I fucked an immortal (euphemism)
  "卧了个大草", // holy big grass (euphemism)
  "我了个去的", // what the hell (euphemism)
  "你麻痹的", // your paralysis's (euphemism)
  "你马痹的", // your horse paralysis's (euphemism)
  "你马壁的", // your horse wall's (euphemism)
  "草拟吗", // grass draft (euphemism)
  "草拟妈", // grass draft mom (euphemism)
  "曹尼玛", // Cao Ni Ma (name disguise)
  "曹你妈", // Cao your mother (name disguise)
  "糙你吗", // rough you (euphemism)
  "操你吗", // fuck you (euphemism question)
  "肏你吗", // vulgar fuck you (euphemism question)
  "去尼妈的", // go to your mother's (euphemism)
  "去你吗的", // go to yours (euphemism)
  "滚尼妈的", // get lost your mother's (euphemism)
  "滚泥马的", // get lost mud horse's (euphemism)

  // Profanity with common misspellings/typos
  "操你吗的", // fuck your mother (typo variant)
  "操你嘛的", // fuck your mother (typo variant)
  "日你嘛的", // fuck your mother (typo variant)
  "草你嘛的", // fuck your mother (typo variant)
  "傻B的", // stupid cunt's (typo variant)
  "牛B的", // fucking awesome (typo variant)
  "装B的", // pretentious person (typo variant)
  "你妈B的", // your mom's cunt (typo variant)
  "操B的", // fuck cunt's (typo variant)
  "日B的", // fuck cunt's (typo variant)
  "干B的", // fuck cunt's (typo variant)

  // Additional phrases commonly used as profanity
  "去你妈的蛋", // go to your mother's egg
  "你算老几", // who do you think you are
  "你算什么玩意", // what kind of thing are you
  "你算个毛", // you count as a hair (worthless)
  "你算个屁啊", // you count as a fart
  "你算个锤子", // you count as a dick (Sichuan)
  "你算个鸟", // you count as a bird (worthless)
  "鸟人", // bird person (worthless person)
  "鸟事", // bird business (worthless matter)
  "屁大点事", // fart-sized matter
  "放你妈的狗屁", // release your mother's dog fart
  "放你妈的臭屁", // release your mother's stinky fart
  "满嘴放屁", // mouth full of farts
  "满嘴喷粪的", // mouth spraying shit
  "狗嘴吐不出象牙", // can't get ivory from dog's mouth
  "狗改不了吃屎", // dog can't stop eating shit
  "你是狗", // you are a dog
  "你就是条狗", // you're just a dog
  "你连狗都不如", // you're not even as good as a dog
  "你连猪都不如", // you're not even as good as a pig
  "你连虫子都不如", // you're not even as good as a bug
  "你连蛆都不如", // you're not even as good as a maggot
  "狗一样的东西", // thing like a dog
  "猪一样的东西", // thing like a pig
  "虫子一样的东西", // thing like a bug
  "人不人鬼不鬼", // neither human nor ghost
  "半人不鬼的东西", // half-human half-ghost thing
  "丧家犬", // homeless dog
  "丧家之犬", // dog that lost its home
  "过街老鼠", // rat crossing the street (universally despised)
  "人人喊打", // everyone shouts to hit (universally hated)

  // Additional LGBTQ-related slurs (used derogatorily in Chinese)
  "死变态的", // damn pervert's
  "娘炮的", // sissy's
  "死人妖的", // damn ladyboy's
  "公公", // eunuch (derogatory for effeminate men)
  "太监", // eunuch (derogatory)
  "阉人", // castrated person (derogatory)
  "不男不女的", // neither man nor woman
  "不男不女的东西", // neither man nor woman thing
  "死gay的", // damn gay's
  "死拉拉的", // damn lesbian's
  "搞基的东西", // gay thing
  "男男的", // male-male (derogatory context)
  "女女的", // female-female (derogatory context)
  "玻璃的", // glass (gay slur)
  "断袖的", // cut sleeve (gay slur)
  "断背的", // brokeback (gay slur)

  // Additional ethnic/regional slurs
  "蝗虫的", // locust's (mainlander slur)
  "支那猪", // China pig (extreme slur)
  "支那狗", // China dog (extreme slur)
  "支那鬼", // China ghost (extreme slur)
  "东亚病夫的", // sick man of East Asia
  "小鬼子", // little devil (anti-Japanese)
  "日本狗", // Japanese dog
  "日本猪", // Japanese pig
  "高丽棒子的", // Korean stick's
  "棒子的", // stick's (Korean slur)
  "阿三的", // Ah San's (Indian slur)
  "黑皮", // black skin (racial slur)
  "黑鬼的", // n-word's
  "白皮", // white skin (racial slur)
  "白皮猪的", // white pig's
  "红脖子", // redneck
  "洋鬼子的", // foreign devil's
  "红毛鬼", // red-hair ghost (Westerner slur)
  "番鬼的", // foreign ghost's
  "鬼佬的", // foreigner's (Cantonese)
  "北佬的", // northerner's (Cantonese derogatory)
  "南蛮子的", // southern barbarian's
  "乡巴佬的", // country bumpkin's
  "土包子的", // hillbilly's
  "外地人的", // outsider's
  "农民工", // migrant worker (derogatory context)
  "下等人", // lower class person
  "低等人", // lower grade person
  "劣等人", // inferior person
  "贱民", // untouchable/lowly person

  // Additional compound vulgarities with 操/日/草/肏
  "操你姥姥", // fuck your maternal grandmother
  "操你奶奶的", // fuck your grandmother's
  "操你姐的", // fuck your sister's
  "操你妹的", // fuck your younger sister's
  "日你姥姥", // fuck your maternal grandmother
  "日你奶奶", // fuck your grandmother
  "日你姐", // fuck your sister
  "日你妹", // fuck your younger sister
  "日你全家女性", // fuck all women in your family
  "草你姥姥", // fuck your maternal grandmother (variant)
  "草你奶奶", // fuck your grandmother (variant)
  "肏你姥姥", // fuck your maternal grandmother (vulgar)
  "肏你奶奶", // fuck your grandmother (vulgar)
  "肏你全家", // fuck your whole family (vulgar)
  "操死你妈", // fuck your mother to death
  "操死你全家", // fuck your whole family to death
  "操烂你妈", // fuck your mother to ruin
  "操翻你妈", // fuck your mother over
  "日死你妈", // fuck your mother to death (variant)
  "日烂你妈", // fuck your mother to ruin (variant)
  "草死你妈", // fuck your mother to death (variant)
  "肏死你妈", // fuck your mother to death (vulgar)
  "被操的", // the fucked one
  "被日的", // the fucked one (variant)
  "被草的", // the fucked one (variant)
  "被肏的", // the fucked one (vulgar)
  "给人操", // let people fuck
  "给人日", // let people fuck (variant)
  "给人草", // let people fuck (variant)
  "人人操", // everyone fucks
  "人人日", // everyone fucks (variant)
  "千人操", // thousand people fuck
  "万人操", // ten thousand people fuck
  "千人骑", // thousand people ride
  "万人骑", // ten thousand people ride

  // Additional scatological insults
  "狗屎一堆", // a pile of dog shit
  "你就是一坨屎", // you're a pile of shit
  "一坨屎", // a pile of shit
  "屎一样的东西", // thing like shit
  "放屁的", // fart's / one who farts
  "满嘴放屁的", // one with mouth full of farts
  "拉屎的", // one who shits
  "吃屎的", // one who eats shit
  "吃屎狗", // shit-eating dog
  "吃屎的东西", // shit-eating thing
  "屎壳郎", // dung beetle (insult)
  "粪叉子", // manure fork (insult)
  "粪坑", // manure pit
  "粪坑里的石头", // stone in a manure pit (stinky and hard)
  "茅坑", // outhouse
  "茅坑里的石头", // stone in an outhouse
  "你就是个茅坑", // you're an outhouse
  "臭气熏天", // stinking to high heaven
  "臭不可闻的人", // person too stinky to smell

  // Additional phrases used as euphemistic profanity
  "你大爷的蛋", // your uncle's egg
  "你大爷的腿", // your uncle's leg
  "你大爷的头", // your uncle's head
  "你奶奶个腿", // your grandmother's leg
  "你姥姥个腿", // your maternal grandmother's leg
  "你姥姥个熊", // your maternal grandmother's bear
  "我了个大去啊", // what the big hell
  "我去你大爷的", // I go to your uncle's
  "我去你妈个蛋", // I go to your mother's egg
  "你妈个头", // your mother's head
  "你妈个蛋", // your mother's egg
  "你妈个腿", // your mother's leg
  "你妈个叉", // your mother's fork
  "你妈个鬼", // your mother's ghost
  "去你个大头鬼", // go to your big-headed ghost
  "去你个蛋", // go to your egg
  "去你个腿", // go to your leg
  "去你个头", // go to your head
  "去你个叉", // go to your fork
  "滚你个蛋", // roll your egg (get lost)
  "滚你个头", // roll your head (get lost)
  "滚一边去", // roll to the side (get lost)
  "滚一边玩去", // roll aside and play (dismissive)
  "有多远滚多远", // roll as far as you can
  "爱滚不滚", // roll if you want (dismissive)
  "赶紧滚", // hurry up and get lost
  "立刻滚", // immediately get lost
  "马上滚", // get lost right now
  "给我滚", // get lost (imperative)
  "快滚吧你", // hurry up and get lost
  "滚吧你", // get lost you
  "你给我滚", // you get lost for me
  "你赶紧给我滚", // you hurry up and get lost for me

  // Political/social insults used in profanity
  "五毛狗", // fifty-cent dog
  "五毛逼", // fifty-cent cunt
  "小粉红逼", // little pink cunt
  "小粉红狗", // little pink dog
  "公知狗", // public intellectual dog
  "公知逼", // public intellectual cunt
  "带路党狗", // guide party dog
  "精日狗", // spiritual Japanese dog
  "精美狗", // spiritual American dog
  "慕洋犬的", // foreign-worshipping dog's
  "恨国党狗", // hate-country party dog
  "舔狗的", // simp's
  "舔逼", // licking cunt (simp, vulgar)
  "舔狗舔到最后", // simp to the end
  "舔到最后一无所有", // lick until you have nothing
  "海王逼", // sea king cunt (player)
  "渣男逼", // scum man cunt
  "渣女逼", // scum woman cunt
  "渣逼", // scum cunt
  "绿帽王逼", // cuckold king cunt
  "接盘逼", // plate-catcher cunt
  "备胎逼", // spare tire cunt
  "工具人逼", // tool person cunt
  "老六逼", // sneaky cunt
  "软饭逼", // soft rice cunt (kept person)
  "小白脸逼", // pretty boy cunt

  // Additional Mandarin profanity with tone marks (for romanization filters)
  "cào nǐ mā", // fuck your mother (with tones)
  "cào", // fuck (with tone)
  "rì nǐ mā", // fuck your mother (with tones)
  "shǎ bī", // stupid cunt (with tones)
  "niú bī", // fucking awesome (with tones)
  "gǔn", // get lost (with tone)
  "gǔn dàn", // get lost (with tones)
  "qù sǐ", // go die (with tones)
  "tā mā de", // damn it (with tones)
  "mā de", // damn (with tones)
  "wǒ cào", // holy fuck (with tones)
  "nǐ mā", // your mother (with tones)
  "nǐ mā bī", // your mother's cunt (with tones)
  "jī bā", // dick (with tones)
  "gǒu rì de", // dog-fucked (with tones)
  "wáng bā dàn", // son of a bitch (with tones)
  "hún dàn", // bastard (with tones)
  "zá zhǒng", // mongrel (with tones)
  "biǎo zi", // whore (with tones)
  "jiàn rén", // cheap person (with tones)
  "fèi wù", // trash (with tones)
  "bái chī", // idiot (with tones)
  "biàn tài", // pervert (with tones)
  "sǎo huò", // slut (with tones)
  "dàng fù", // whore (with tones)
  "chù shēng", // beast (with tones)
  "rén zhā", // scum (with tones)

  // More additional compound insults
  "脑子是摆设", // brain is just decoration
  "脑子是装饰品", // brain is an ornament
  "脑子进水了吧", // brain filled with water
  "脑子被门夹了吧", // brain caught in door
  "脑子被驴踢了吧", // brain kicked by donkey
  "脑子里装的都是屎", // brain filled with shit
  "脑子里装的都是草", // brain filled with grass
  "你是吃屎长大的吧", // you grew up eating shit right
  "你是猪投胎的吧", // you were reincarnated from a pig
  "你是狗投胎的吧", // you were reincarnated from a dog
  "你是驴投胎的吧", // you were reincarnated from a donkey
  "你妈生你的时候后悔了吧", // your mom regretted giving birth to you
  "你妈生你还不如生块叉烧", // your mom should've given birth to BBQ pork
  "生你不如生条狗", // better to birth a dog than you
  "生你不如生块豆腐", // better to birth tofu than you
  "白生了你", // wasted giving birth to you
  "白养了你", // wasted raising you
  "浪费粮食", // wasting food (your existence)
  "浪费空气", // wasting air (your existence)
  "浪费氧气", // wasting oxygen
  "浪费水", // wasting water
  "浪费资源", // wasting resources
  "社会的蛀虫", // society's wood worm
  "国家的蛀虫", // nation's wood worm
  "社会的毒瘤", // society's tumor
  "社会的垃圾堆", // society's garbage dump
  "人类的耻辱", // shame of humanity
  "人类的败类", // scum of humanity
  "人类的渣滓", // dregs of humanity
  "你是人类的耻辱", // you are shame of humanity
  "你是社会的毒瘤", // you are society's tumor

  // Cross-language profanity commonly used in Chinese internet
  "fuck你", // fuck you (mixed)
  "fuck你妈", // fuck your mother (mixed)
  "fuck off", // fuck off (used in Chinese context)
  "shit你", // shit you (mixed)
  "bitch你", // bitch you (mixed)
  "son of a bitch", // used in Chinese internet
  "asshole你", // asshole you (mixed)
  "damn你", // damn you (mixed)
  "你motherfucker", // you motherfucker (mixed)
  "你fucker", // you fucker (mixed)
  "你bitch", // you bitch (mixed)
  "你asshole", // you asshole (mixed)
  "滚你的fuck", // roll your fuck (mixed)
  "去你的fuck", // go to your fuck (mixed)

  // Additional censorship circumvention patterns
  "操___你妈", // fuck __ your mother (with blanks)
  "你_妈_的", // your_mother's (with underscores)
  "你.妈.的", // your.mother's (with dots)
  "你*妈*的", // your*mother's (with asterisks)
  "草*你*妈", // fuck*your*mother (with asterisks)
  "日*你*妈", // fuck*your*mother (with asterisks)
  "傻*逼", // stupid*cunt (with asterisks)
  "牛*逼", // fucking*awesome (with asterisks)
  "c a o n i m a", // cao ni ma spaced out
  "s h a b i", // sha bi spaced out
  "r i n i m a", // ri ni ma spaced out
  "g u n", // gun spaced out
  "q u s i", // qu si spaced out
  "c a o", // cao spaced out
  "j i b a", // ji ba spaced out

  // Final additional entries to reach 1500+ new words
  "痞子货", // ruffian goods
  "痞子东西", // ruffian thing
  "流氓货", // hooligan goods
  "流氓东西", // hooligan thing
  "狗腿子货", // lackey goods
  "走狗货", // running dog goods
  "走狗东西", // running dog thing
  "汉奸货", // traitor goods
  "汉奸东西", // traitor thing
  "卖国贼货", // traitor goods
  "卖国贼东西", // traitor thing
  "人渣货", // scum goods
  "败类货", // degenerate goods
  "饭桶货", // rice bucket goods
  "草包货", // straw bag goods
  "窝囊废货", // wimp goods
  "下三滥货", // lowlife goods
  "下三滥东西", // lowlife thing
  "不要脸货", // shameless goods
  "不要脸的东西", // shameless thing
  "无耻货", // shameless goods
  "无耻东西", // shameless thing
  "恬不知耻的东西", // brazenly shameless thing
  "狗东西的", // dog thing's
  "狗杂种的", // dog mongrel's
  "老王八的", // old turtle's
  "小王八蛋的", // little turtle egg's
  "臭流氓的", // stinky hooligan's
  "地痞的", // local thug's
  "痞子的", // ruffian's
  "二百五的", // idiot's (250)
  "蠢材的", // blockhead's
  "死鬼的", // damn ghost's
  "呆逼的", // dumb cunt's
  "死胖子的", // fat ass's
  "丑八怪的", // ugly freak's
  "老不死的东西", // old won't die thing
  "老东西的", // old thing's
  "老废物的", // old useless person's
  "狗崽子的", // puppy's (insult)
  "野种的", // illegitimate child's
  "私生子的", // illegitimate child's
  "缺德的", // immoral person's
  "缺德的东西", // immoral thing
  "损种的", // wicked person's
  "你个缺德的", // you immoral one
  "你个缺德玩意儿", // you immoral thing
  "你个王八蛋", // you son of a bitch
  "你个混蛋", // you bastard
  "你个杂种", // you mongrel
  "你个畜生", // you beast
  "你个白痴", // you idiot
  "你个弱智", // you retard
  "你个脑残", // you brain-damaged
  "你个智障", // you mentally disabled
  "你个变态", // you pervert
  "你个流氓", // you hooligan
  "你个痞子", // you ruffian
  "你个地痞", // you local thug
  "你个二百五", // you idiot (250)
  "你个蠢材", // you blockhead
  "你个傻子", // you fool
  "你个笨蛋", // you dummy
  "你个蠢猪", // you stupid pig
  "你个蠢驴", // you stupid donkey
  "你个猪头", // you pig head
  "你个狗腿子", // you lackey
  "你个走狗", // you running dog
  "你个人渣", // you scum
  "你个败类", // you degenerate
  "你个饭桶", // you rice bucket
  "你个草包", // you straw bag
  "你个窝囊废", // you wimp
  "你个下三滥", // you lowlife
  "你个老废物", // you old useless
  "你个狗崽子", // you puppy (insult)
  "你个野种", // you illegitimate
  "你个私生子", // you illegitimate child
  "你个小杂种", // you little mongrel
  "你个缺德鬼", // you immoral ghost
  "你个损种", // you wicked person
  "你个死东西", // you dead thing
  "你个死垃圾", // you dead garbage
  "你个活垃圾", // you living garbage
  "你个大垃圾", // you big garbage
  "你个小垃圾", // you little garbage
  "你个老垃圾", // you old garbage
  "臭东西", // stinky thing
  "烂东西", // rotten thing
  "贱东西", // cheap thing
  "死东西", // dead thing
  "破东西", // broken thing
  "脏东西", // dirty thing
  "坏东西", // bad thing
  "蠢东西", // stupid thing
  "笨东西", // dumb thing
  "傻东西", // foolish thing
  "丑东西", // ugly thing
  "恶心东西", // disgusting thing
  "可恶的东西", // detestable thing
  "可恨的东西", // hateful thing
  "可耻的东西", // shameful thing
  "肮脏的东西", // filthy thing
  "龌龊的东西", // dirty thing
  "卑鄙的东西", // despicable thing
  "阴险的东西", // treacherous thing
  "恶毒的东西", // malicious thing
  "毒辣的东西", // venomous thing
  "狠毒的东西", // vicious thing
  "残忍的东西", // cruel thing
  "冷血的东西", // cold-blooded thing
  "无情的东西", // heartless thing
  "你活该被打", // you deserve to be beaten
  "你活该被骂", // you deserve to be scolded
  "你活该孤独", // you deserve to be alone
  "你活该被甩", // you deserve to be dumped
  "你活该倒霉", // you deserve bad luck
  "天生的贱骨头", // born with cheap bones
  "天生的废物", // born useless
  "天生的垃圾", // born garbage
  "天生的败类", // born scum
  "天生的人渣", // born human trash

  // === ADDITIONAL EXPANDED ENTRIES ===

  // More pinyin with tones and without
  "cào nǐ", // fuck you (with tones)
  "cào sǐ nǐ", // fuck you to death (with tones)
  "rì nǐ", // fuck you (with tones)
  "gǔn nǐ de", // get lost yours (with tones)
  "gǔn nǐ mā de", // get lost your mother's (with tones)
  "cào nǐ quán jiā", // fuck your whole family (with tones)
  "cào nǐ zǔ zōng", // fuck your ancestors (with tones)
  "nǐ shì shǎ bī", // you are a stupid cunt (with tones)
  "nǐ shì fèi wù", // you are trash (with tones)
  "nǐ shì lā jī", // you are garbage (with tones)
  "nǐ shì rén zhā", // you are scum (with tones)
  "cao ni quan jia", // fuck your whole family
  "cao ni zu zong", // fuck your ancestors
  "cao ni shi ba dai", // fuck your 18 generations
  "ri ni zu zong", // fuck your ancestors (variant)
  "gan ni quan jia", // fuck your whole family (variant)

  // More internet abbreviations and evasions
  "MLGB", // ma le ge bi
  "WQNMLGB的", // variant abbreviation possessive
  "LZSB", // lao zi sha bi (I'm a stupid cunt, ironic)
  "RNMMP", // ri ni ma mai pi
  "SNMDG", // variant abbreviation
  "CLM", // cao le ma (fucked mother)
  "RNM的B", // ri ni ma de bi
  "WCNM", // wo cao ni ma
  "WCNMB", // wo cao ni ma bi
  "CK", // variant abbreviation
  "FW", // fei wu (trash)
  "LJ", // la ji (garbage)
  "RZ", // ren zha (scum)
  "BC", // bai chi (idiot)
  "BT", // bian tai (pervert)
  "NR", // nao ren (annoying)
  "HB", // hun ban (bastard)
  "ZZ的", // zhi zhang de (mentally disabled)
  "NCSB", // nao can sha bi (brain damaged stupid cunt)
  "SBWC", // sha bi wo cao

  // More homophone evasions
  "尼玛死", // your mother died (euphemism)
  "泥马死", // your mother died (euphemism variant)
  "你嫲死", // your grandmother died (euphemism)
  "草拟嘛", // grass draft (euphemism)
  "草拟马", // grass draft horse (euphemism)
  "曹泥马", // Cao mud horse (name disguise variant)
  "糙死了", // rough to death (euphemism)
  "擦了个蛋", // wiped an egg (euphemism)
  "我了个天", // I heavens (euphemism)
  "我了个去啊", // what the hell ah (euphemism)
  "你嘛啊", // your what ah (euphemism)
  "你嘛呢", // your what (euphemism)
  "干嘛呢你", // what the hell you (euphemism)
  "你干嘛呢", // what are you doing (aggressive)
  "你搞什么", // what are you doing (aggressive)
  "你搞什么鬼", // what ghost are you doing
  "你搞什么名堂", // what trick are you doing
  "你搞什么飞机", // what airplane are you doing
  "你在搞毛", // what hair are you doing (vulgar)
  "你在搞什么毛", // what hair are you doing
  "搞毛啊", // doing what hair (vulgar question)
  "搞屁啊", // doing what fart (vulgar question)
  "搞鸡巴啊", // doing what dick (vulgar question)
  "搞鸡毛啊", // doing what chicken feather (euphemism)

  // More insult phrases
  "你妈喊你回家吃饭", // your mom is calling you home (dismissive)
  "回家喝奶去吧", // go home and drink milk (dismissive)
  "回家找妈去", // go home to find your mom
  "你还没断奶吧", // you haven't been weaned yet
  "你还穿尿不湿吧", // you still wear diapers
  "你是不是脑子有坑啊", // do you have a pit in your brain
  "你是不是吃错药了", // did you take the wrong medicine
  "你是不是脑子进屎了", // did shit get into your brain
  "你是不是被驴踢了", // were you kicked by a donkey
  "你是不是被门夹了", // was your head caught in a door
  "你是不是投胎投错了", // did you reincarnate wrong
  "你妈怀你的时候摔了吧", // your mom fell while pregnant with you
  "医院把你和猪换了吧", // the hospital swapped you with a pig

  // More traditional Chinese variants
  "操你媽逼", // fuck your mother's cunt (traditional)
  "日你媽逼", // fuck your mother's cunt (traditional variant)
  "草你媽逼", // fuck your mother's cunt (traditional variant)
  "臭屄", // stinky cunt (archaic traditional)
  "爛屄", // rotten cunt (archaic traditional)
  "死屄", // dead cunt (archaic traditional)
  "老屄", // old cunt (archaic traditional)
  "嫩屄", // young cunt (archaic traditional)
  "破屄", // broken cunt (archaic traditional)
  "好屄", // good cunt (archaic traditional)
  "騷屄", // slutty cunt (archaic traditional)
  "屄樣", // cunt-looking (archaic traditional)
  "屄臉", // cunt face (archaic traditional)

  // Additional Cantonese compounds
  "你仆街啦你", // you drop dead (Cantonese emphatic)
  "你扑街啦你", // you drop dead (Cantonese variant)
  "你食屎啦你", // you eat shit (Cantonese emphatic)
  "你收皮啦你", // you shut up (Cantonese emphatic)
  "你条友好衰", // you are very bad (Cantonese)
  "你个死变态佬", // you damn pervert man (Cantonese)
  "你个死肥猪", // you damn fat pig (Cantonese)
  "你个死蠢材", // you damn stupid person (Cantonese)
  "你个垃圾佬", // you garbage man (Cantonese)
  "你个垃圾婆", // you garbage woman (Cantonese)
  "你个垃圾仔", // you garbage kid (Cantonese)
  "做乜嘢啊你", // what are you doing (Cantonese aggressive)
  "你搞咩啊", // what are you doing (Cantonese aggressive)
  "你搞咩鬼啊", // what ghost are you doing (Cantonese)
  "你搞咩嘢啊", // what thing are you doing (Cantonese)
  "你痴撚线架", // you're fucking crazy (Cantonese)
  "你条仆街嘢", // you drop-dead thing (Cantonese)
  "你条死嘢", // you dead thing (Cantonese)
  "你条契弟", // you catamite (Cantonese)
  "你条八婆嘢", // you gossipy thing (Cantonese)

  // More gaming/internet compounds
  "挂逼的", // hacking cunt's
  "开挂逼的", // cheating cunt's
  "外挂狗的", // cheat dog's
  "菜逼中的菜逼", // noob among noobs
  "猪队友的", // pig teammate's
  "演员的", // actor's (game thrower)
  "坑逼中的坑逼", // pit among pits
  "送头狗", // kill-giving dog
  "白嫖怪的", // freeloading monster's
  "伸手党的", // reaching-hand party's
  "沙雕操作", // sand sculpture operation (stupid play)
  "沙雕玩家", // sand sculpture player (stupid player)
  "铁废物玩家", // iron waste player
  "臭鱼烂虾", // stinky fish rotten shrimp (bad teammates)
  "一群废物", // a group of trash
  "一堆废物", // a pile of trash
  "一群垃圾", // a group of garbage
  "一堆垃圾", // a pile of garbage
  "一群蠢货", // a group of idiots
  "一群傻逼", // a group of stupid cunts
  "一群脑残", // a group of brain-damaged people

  // More compound verb insults
  "滚回你妈逼里去", // roll back into your mother's cunt
  "爬回你妈肚子里", // crawl back into your mother's belly
  "钻回你妈逼里去", // drill back into your mother's cunt
  "你从你妈逼里爬出来", // you crawled out of your mother's cunt
  "你从垃圾堆里捡来的", // you were picked up from a garbage dump
  "你从厕所里捞出来的", // you were fished out of a toilet
  "你从阴沟里爬出来的", // you crawled out of a drain
  "你从粪坑里捞出来的", // you were fished out of a cesspit
  "你妈生你的时候肯定后悔了", // your mom definitely regretted giving birth to you
  "你妈当初就不该生你", // your mom shouldn't have given birth to you
  "你妈当初就该把你打掉", // your mom should have aborted you
  "你爸当初就不该射", // your dad shouldn't have ejaculated
  "你是充话费送的吧", // you were a free gift with phone credit
  "你是买一送一送的吧", // you were a buy-one-get-one-free
  "你是捡来的吧", // you were picked up (adopted as trash)
  "你是垃圾桶里翻出来的", // you were found in a trash can

  // More death/curse expressions
  "不得好死的人", // person who won't die well
  "死无葬身之地", // die with no burial place
  "粉身碎骨", // body ground to powder
  "万箭穿心", // ten thousand arrows pierce the heart
  "五雷轰顶", // five thunders strike the head
  "千刀万剐", // death by a thousand cuts
  "死于非命", // die an unnatural death
  "横死街头", // die on the street
  "不得善终", // not die a good death
  "死路一条", // only one road: death
  "你死定了", // you're dead
  "等死吧你", // just wait to die
  "早死早超生", // die early and reincarnate early
  "活着浪费空气", // living wastes air
  "活着浪费粮食", // living wastes food
  "早该死了", // should have died long ago
  "怎么还没死", // how come you haven't died yet
  "怎么还活着", // how come you're still alive
  "你怎么还没死", // how come you haven't died
  "你怎么还活着", // how come you're still alive
  "命中该死", // fated to die
  "命该如此", // fate deserves this (sarcastic)

  // Additional profanity with common Chinese sentence patterns
  "你他妈的什么东西", // what the hell thing are you
  "你他妈的算什么", // what the hell do you count as
  "他妈的什么玩意儿", // what the damn thing
  "这他妈的什么东西", // what the damn is this
  "这狗屁不通的东西", // this nonsensical thing
  "你他妈的闭嘴", // you damn shut up
  "你他妈的滚开", // you damn get lost
  "你他妈的去死", // you damn go die
  "他妈的闭嘴", // damn shut up
  "他妈的滚", // damn get lost
  "他妈的去死吧", // damn go die
  "你妈的闭嘴", // your mother's shut up
  "你妈的滚", // your mother's get lost
  "你妈的去死", // your mother's go die
  "妈的给我闭嘴", // damn shut up for me
  "妈的给我滚", // damn get lost for me
  "操你妈的闭嘴", // fuck your mother shut up
  "操你妈的滚开", // fuck your mother get lost
  "操你妈的去死", // fuck your mother go die
];

export default chineseBadWords;
