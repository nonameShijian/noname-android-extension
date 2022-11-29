"use strict";
game.import("character",(lib,game,ui,get,ai,_status)=>{
	/**
	 * @type {importCharacterConfig}
	 */
	const SST_EXTRA={
		name:"sst_extra",
		connect:true,
		character:{
			//Soldier
			shibing1sst_light:["male","sst_light",0,[],["unseen"]],
			shibing2sst_light:["female","sst_light",0,[],["unseen"]],
			shibing1sst_dark:["male","sst_dark",0,[],["unseen"]],
			shibing2sst_dark:["female","sst_dark",0,[],["unseen"]],
			shibing1sst_spirit:["male","sst_spirit",0,[],["unseen"]],
			shibing2sst_spirit:["female","sst_spirit",0,[],["unseen"]],
			shibing1sst_reality:["male","sst_reality",0,[],["unseen"]],
			shibing2sst_reality:["female","sst_reality",0,[],["unseen"]],
			shibing1sst_smash:["male","sst_smash",0,[],["unseen"]],
			shibing2sst_smash:["female","sst_smash",0,[],["unseen"]],
			//Identity mode character
			sst_pyra_mythra:["female","sst_light",3,["sst_xuanyi","sst_fuxin"],[]],
			sst_9_volt_18_volt:["male","sst_spirit",4,["sst_tanfen","sst_sutong"],[]],
			sst_claude:["male","sst_spirit",3,["sst_yunchou","sst_guimou"],[]],
			sst_geno:["male","sst_spirit",3,["sst_fuyuan","sst_doujiang"],["hiddenSkill"]],
			sst_duck_hunt:["male","sst_light",3,["sst_gonglie","sst_weishou"],[]],
			sst_ness:["male","sst_light",4,["sst_wenxin"],[]],
			sst_chrom:["male","sst_light",4,["sst_niming","sst_cuifeng"],[]],
			sst_lucina:["female","sst_light",4,["sst_suxing","sst_shengyi"],[]],
			sst_robin:["","sst_dark",3,["sst_zuozhan","sst_junce"],[]],
			sst_robin_female:["female","sst_dark",3,["sst_zuozhan","sst_junce"],["unseen"]],
			sst_robin_male:["male","sst_dark",3,["sst_zuozhan","sst_junce"],["unseen"]],
			sst_paipai:["male","sst_reality",4,["sst_aoshang","sst_lianxia"],[]],
			sst_bandana_waddle_dee:["male","sst_spirit",3,["sst_zhoudu","sst_mengchen"],[]],
			sst_magolor:["male","sst_spirit","1/1/5",["sst_miulu","sst_jifan"],[]],
			sst_roy:["male","sst_light",4,["sst_nuyan"],[]],
			sst_sans:["male","sst_spirit",1,["sst_yebao","sst_juexin"],[]],
			sst_r_o_b:["male","sst_dark",5,["sst_yinbao","sst_zhuxin"],["hiddenSkill"]],
			sst_snake:["male","sst_dark",4,["sst_qianlong","sst_dieying"],["hiddenSkill"]],
			sst_sheik:["female","sst_dark",3,["sst_nixing","sst_shouyin","sst_anzong"],["hiddenSkill"]],
			sst_inkling:["","sst_light",3,["sst_xumo","sst_pentu"],["hiddenSkill"]],
			sst_inkling_female:["female","sst_light",3,["sst_xumo","sst_pentu"],["unseen","hiddenSkill"]],
			sst_inkling_male:["male","sst_light",3,["sst_xumo","sst_pentu"],["unseen","hiddenSkill"]],
			sst_wii_fit_trainer:["","sst_light",4,["sst_zuoxi"],[]]
		},
		characterFilter:{
			sst_claude:()=>{
				if(_status.connectMode) return lib.config.connect_cards.contains("yingbian");
				return lib.config.cards.contains("yingbian");
			}
		},
		characterSort:{
			sst_extra:{
				sst_civil_war:["sst_pyra_mythra","sst_9_volt_18_volt"],
				sst_response:["sst_claude","sst_geno","sst_duck_hunt","sst_paipai","sst_snake","sst_sheik"],
				sst_the_use_of_spies:["sst_inkling"],
				sst_laying_plans:["sst_ness","sst_chrom","sst_lucina","sst_robin","sst_bandana_waddle_dee","sst_sans","sst_wii_fit_trainer"],
				sst_attack_by_stratagem:["sst_magolor","sst_roy","sst_r_o_b"]
			}
		},
		characterIntro:{
			/*
			"武将作者：Yumikohimi<br>\
				武将作者：mario not mary<br>\
				武将作者：Show-K<br>\
				武将作者：南柯<br>\
				武将作者：Axel_Zhai<br>\
				武将作者：小时节<br>\
				插图作者：未知<br>\
				<hr>\
				<br>\
				系列：（）<br>\
				首次登场：（）<br>\
				<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				"
			*/
			sst_pyra_mythra:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				1458. 焰（斗士）/Pyra(Fighter)/ホムラ（ファイター）<br>\
				系列：<ruby>异度神剑<rp>（</rp><rt>Xenoblade Chronicles</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>异度神剑2<rp>（</rp><rt>Xenoblade Chronicles 2</rt><rp>）</rp></ruby><br>\
				没错，不是莱克斯参战，而是天之圣杯参战了！——当然，莱克斯还是会在进场、炫耀和胜利画面中出现的。作为斗士的焰速度较慢，但伤害和击杀能力非常强。如有需要，她还能随时切换为光。立绘姿势来源于之前出的手办。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				1459. 光（斗士）/Mythra(Fighter)/ヒカリ（ファイター）<br>\
				系列：<ruby>异度神剑<rp>（</rp><rt>Xenoblade Chronicles</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>异度神剑2<rp>（</rp><rt>Xenoblade Chronicles 2</rt><rp>）</rp></ruby><br>\
				光的机动性和回场能力明显高于焰，但她的招式伤害较低。此外，在恰当的时机闪避还能触发“因果律预测”，创造反击机会。灵活运用天之圣杯不同形态的特点是取胜的关键。立绘姿势同样来源于之前出的手办。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				最终，少年遇到了少女。",
			sst_9_volt_18_volt:"武将作者：mario not mary、Show-K<br>\
				插图作者：未知<br>\
				<hr>\
				0733. 九伏特&十八伏特【九伏&十八伏】/9-Volt & 18-Volt/ナインボルト & エイティーンボルト<br>\
				系列：<ruby>瓦力欧<rp>（</rp><rt>Wario</rt><rp>）</rp></ruby><br>\
				首次登场：<br>\
				九伏特——<ruby>瓦力欧制造<rp>（</rp><rt>WarioWare, Inc.: Mega Microgame$!</rt><rp>）</rp></ruby><br>\
				十八伏特——<ruby>まわる 瓦力欧制造<rp>（</rp><rt>WarioWare: Twisted!</rt><rp>）</rp></ruby><br>\
				九伏特和十八伏特是最要好的朋友，目前正在钻石城市读小学——没错，看起来高大又成熟的十八伏特其实是个小学生。两人都喜欢玩游戏，其中九伏特会在晚上躲着妈妈偷偷玩。九伏特有个黄色的像素宠物蓬蓬，而十八伏特还很擅长rap，作为rapper的标志是老虎。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				此次推出的三噩梦命魂武将其三。",
			sst_claude:"武将作者：mario not mary、Yumikohimi<br>\
				插图作者：井塚大介<br>\
				——《TCG火焰纹章<ruby>0<rp>（</rp><rt>Cipher</rt><rp>）</rp></ruby>》<br>\
				<hr>\
				1386. 库罗德/Claude/クロード<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>火焰纹章 风花雪月<rp>（</rp><rt>Fire Emblem: Three Houses</rt><rp>）</rp></ruby><br>\
				雷斯塔诸侯同盟盟主之孙、爵位继承人。喜欢策略，喜欢琢磨战术，为了达到目标可以不择手段。不论玩家选择的是贝雷特还是贝雷丝，他都会以“兄弟”称呼他的老师。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				芙朵拉内外都要变革，才能得以见到所愿之景……对吧？",
			sst_geno:"武将作者：Show-K<br>\
				插图作者：ハルノ＠マリオ垢<br>\
				——"+get.formatUrl("https://www.pixiv.net/artworks/88378758")+"<br>\
				<hr>\
				0104. Geno/ジーノ<br>\
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>超级马力欧RPG<rp>（</rp><rt>Super Mario RPG: Legend of the Seven Stars</rt><rp>）</rp></ruby><br>\
				他是星之族的一员，本来没有身体，本名也是无法拼读的“♡♪!?”，所以选择附身在一个叫Geno的木偶上行动。他总是自信满满，擅长分析问题，战斗能力也相当出色。他会和马力欧、桃花公主、酷霸王和Mallow一起打败恶人。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				所以Square什么时候能把超级马力欧RPG交一下！",
			sst_duck_hunt:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0974. 打猎/Duck Hunt/ダックハント<br>\
				系列：<ruby>打猎<rp>（</rp><rt>Duck Hunt</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>打猎<rp>（</rp><rt>Duck Hunt</rt><rp>）</rp></ruby><br>\
				《打猎》是1984年的FC游戏，经常和FC捆绑销售。玩家需要用光枪打鸭子，而这只看起来有点欠揍的狗负责捡鸭子。在大乱斗中，狗和鸭子转而并肩作战。它们扔出的罐子和飞盘都会被某人射击从而移动或爆炸。让对手也尝尝被打猎的感觉吧！<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				MNM再一次对应变大打出手了。",
			sst_ness:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0563. 奈斯/Ness/ネス<br>\
				系列：<ruby>地球冒险<rp>（</rp><rt>EarthBound</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>地球冒险<rp>（</rp><rt>EarthBound</rt><rp>）</rp></ruby><br>\
				奈斯在Eagleland国的Onett镇上长大，虽然看起来很普通，但却能使用意念能力。在原作中，他要对抗邪恶的Giygas，在大乱斗中，他的意念能力让大家感到难以对付。他的意念之雷如果击中自己就能向前突进，而意念之火击中对手后会持续燃烧。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				接着MNM开始对使命技大打出手了。",
			sst_chrom:"武将作者：mario not mary<br>\
				插图作者：北千里<br>\
				——《TCG火焰纹章<ruby>0<rp>（</rp><rt>Cipher</rt><rp>）</rp></ruby>》<br>\
				<hr>\
				0613. 库洛姆/Chrom/クロム<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>火焰纹章 觉醒<rp>（</rp><rt>Fire Emblem Awakening</rt><rp>）</rp></ruby><br>\
				伊利斯圣王国的王子，英雄王马尔斯的后代。他率领一个保卫王国的自卫团。虽然他在训练时经常很莽以至于搞砸事情，但在战场上他是非常可靠的。他还会在鲁弗莱的最终必杀中出场。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				“运命改变了！”",
			sst_lucina:"武将作者：mario not mary<br>\
				插图作者：北千里<br>\
				——《TCG火焰纹章<ruby>0<rp>（</rp><rt>Cipher</rt><rp>）</rp></ruby>》<br>\
				<hr>\
				0611. 露琪娜/Lucina/ルキナ<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>火焰纹章 觉醒<rp>（</rp><rt>Fire Emblem Awakening</rt><rp>）</rp></ruby><br>\
				库洛姆的女儿，伊利斯圣王国的公主，从悲惨的未来穿越到现在，阻止那种未来发生。她最初以女扮男装，自称马尔斯的形态出现。在大乱斗中，她的技能和马尔斯是一样的，但没有马尔斯那种剑尖与剑根的伤害差异。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				“为了终结这个世界的战争……我会努力的。”",
			sst_robin:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0616. 鲁弗莱（男性）/Robin (Male)/ルフレ（男性）<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>火焰纹章 觉醒<rp>（</rp><rt>Fire Emblem Awakening</rt><rp>）</rp></ruby><br>\
				《火焰纹章：觉醒》中的主角，形象和性别可以自定义。根据选择的性别不同，能够攻略的对象也不一样——比如男鲁弗莱可以攻略露琪娜。在大乱斗中，鲁弗莱除了剑术之外，还会使用魔法。魔法书用完之后需要等待恢复。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				0617. 鲁弗莱（女性）/Robin (Female)/ルフレ（女性）<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>火焰纹章 觉醒<rp>（</rp><rt>Fire Emblem Awakening</rt><rp>）</rp></ruby><br>\
				《火焰纹章：觉醒》中的主角，根据选择的性别不同，能够攻略的对象也不一样——比如女鲁弗莱可以攻略库洛姆。她可以切换青铜剑和雷剑进行攻击，在地面或空中输入快弹就可以切换为雷剑，但雷剑使用时也会像魔法书一样消耗耐久。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				然后MNM开始对智囊大打出手了。",
			sst_paipai:"武将作者：mario not mary<br>\
				插图作者：无<br>\
				<hr>\
				R015. 派派\
				<hr>\
				然后MNM开始对指定牌不能响应大打出手了。",
			sst_bandana_waddle_dee:"武将作者：Show-K<br>\
				插图作者：Konna-Nani<br>\
				——"+get.formatUrl("https://www.pixiv.net/artworks/98930493")+"<br>\
				<hr>\
				0361. 头巾瓦豆鲁迪/Bandana Waddle Dee/バンダナワドルディ<br>\
				系列：<ruby>星之卡比<rp>（</rp><rt>Kirby</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>星之卡比 超级豪华版<rp>（</rp><rt>Kirby Super Star</rt><rp>）</rp></ruby><br>\
				头巾瓦豆鲁迪并非一个种群，而是指一位特定的戴蓝色头巾的瓦豆鲁迪。他是族群中的精英，使得一手好长枪，自《星之卡比：重返梦幻岛》以来多次作为可操作角色出场，可以用长枪使出暴风骤雨般的攻击。他直接效忠于帝帝帝大王，但同时也是卡比最好的朋友之一。目前他在星之卡比系列中的戏份地位堪比主角，仅次于卡比，帝帝帝大王，魅塔骑士。如果星之卡比系列还有人能够参战大乱斗，他将是最有竞争力的候选人之一。<br>\
				——封羽翎烈、鸿渐于陆，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				一是为了蹭《星之卡比 探索发现》的热度，二是为了庆祝无名杀武将牌上牌机制变革，三是为了调侃卡比四人组中就剩他一直没有参战了。",
			sst_magolor:"武将作者：Show-K<br>\
				插图作者：邪仁寿<br>\
				——"+get.formatUrl("https://www.pixiv.net/artworks/22504365")+"<br>\
				<hr>\
				0355. 魔法洛亚/Magolor/マホロア<br>\
				系列：<ruby>星之卡比<rp>（</rp><rt>Kirby</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>星之卡比Wii<rp>（</rp><rt>Kirby\x27s Return to Dream Land</rt><rp>）</rp></ruby><br>\
				某一天，梦幻岛的上空出现了大洞，魔法洛亚的飞船从洞中摔到了地面。虽然飞船坏了，但是魔法洛亚本人并没有事。他拜托卡比和它的朋友们一起收集飞船的部件，并且一起穿越次元回到自己的家乡。一切看起来好像都很平常，直到……<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				比起某个把“无双，万军取首”作为台词的武将，他这个大骗子属性简直可以忽略不计了。",
			sst_roy:"武将作者：mario not mary<br>\
				插图作者：山田孝太郎<br>\
				——《TCG火焰纹章<ruby>0<rp>（</rp><rt>Cipher</rt><rp>）</rp></ruby>》<br>\
				<hr>\
				0612. 罗伊/Roy (Fire Emblem)/ロイ（ファイアーエムブレム）<br>\
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>任天堂明星大乱斗DX<rp>（</rp><rt>Super Smash Bros. Melee</rt><rp>）</rp></ruby><br>\
				在父亲突病、局势动荡时毅然担当起责任，率兵抵抗敌国入侵的贵族少年。小小年纪就擅长带兵打仗和取信于人。顺便，他是先在大乱斗中出场，随后原作才发售的存在。以及，他和酷霸王军团中的洛伊是同一个英文名。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				率先体验谋攻篇。",
			sst_sans:"武将作者：Show-K、mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				S002. Sans/サンス<br>\
				系列：<ruby>传说之下<rp>（</rp><rt>Undertale</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>传说之下<rp>（</rp><rt>Undertale</rt><rp>）</rp></ruby><br>\
				Sans是由Toby Fox为2015年角色扮演游戏《Undertale》创造的虚构角色。Sans在《Undertale》中为NPC，但如果玩家选择完成“种族灭绝路线”并消灭游戏中的怪物种族，他将成为事实上的最终boss。他的名字基于Comic Sans字体，而该字体用于他的大部分游戏对话。该角色因其对话，以及被认为是游戏中最难的boss战斗而被评论家称赞。他在粉丝群体中相当出名，激发了很多人为其创造同人作品。<br>\
				——翻译自《维基百科》<br>\
				<hr>\
				外面是多么美好的一天啊，鸟儿在歌唱，花儿在绽放……",
			sst_r_o_b:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0822. 机器人/R.O.B./ロボット<br>\
				系列：<ruby>机器人<rp>（</rp><rt>R.O.B.</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>方块放置<rp>（</rp><rt>Stack-Up</rt><rp>）</rp></ruby><br>\
				这是任天堂在80年代，为了开辟刚受到雅达利危机重创的北美游戏市场而推出的外设，它可以配合特定的游戏游玩。在大乱斗中，机器人有两种飞行道具，回场也很不错。它的机器人光束可以蓄力增加威力。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				THE SUBSPACE EMISSARY.",
			sst_snake:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0749. 固蛇/Solid Snake/ソリッド・スネーク<br>\
				系列：<ruby>合金装备<rp>（</rp><rt>Metal Gear</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>合金装备<rp>（</rp><rt>Metal Gear</rt><rp>）</rp></ruby><br>\
				前Foxhound成员，IQ达180，能操流利六国语言。有“传说之佣兵”的称号，被称为“将不可能化为可能的男人”，是潜入任务中的专家，藏身纸皮箱躲过守卫进行潜入行动的桥段一直就为人津津乐道。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				“The Man Who Makes the Impossible Possible.”",
			sst_sheik:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0174. 希克/Sheik/シーク<br>\
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>塞尔达传说 时之笛<rp>（</rp><rt>The Legend of Zelda: Ocarina of Time</rt><rp>）</rp></ruby><br>\
				在《塞尔达传说：时之笛》中，希克自称是从灾难中幸存的希卡族人，不过她其实是塞尔达公主为了躲避加侬多夫的追捕而女扮男装的形态。在大乱斗中，希克以高速连招为主，和塞尔达的战斗风格有很大差别。<br>\
				——封羽翎烈、无敌阿尔宙斯，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				“接下来这段旋律，你要铭记于心……”",
			sst_inkling:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				1025. 鱿鱼（女孩）/Inkling (Girl)/インクリング（ガール）<br>\
				系列：<ruby>斯普拉遁<rp>（</rp><rt>Splatoon</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>斯普拉遁<rp>（</rp><rt>Splatoon</rt><rp>）</rp></ruby><br>\
				让我们来认识一下鱿鱼吧，这可是经过万年的进化，能切换人和鱿鱼形态的生物！她们喜欢用疯狂的、五彩缤纷的占地对战来打发时间，也不会错过任何登上顶级排名的机会。她们的时尚不叫时尚，而是叫“鱿型”！<br>\
				——谁的错820、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				1026. 鱿鱼（男孩）/Inkling (Boy)/インクリング（ボーイ）<br>\
				系列：<ruby>斯普拉遁<rp>（</rp><rt>Splatoon</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>斯普拉遁<rp>（</rp><rt>Splatoon</rt><rp>）</rp></ruby><br>\
				和女孩们一样，他们也喜欢激烈的占地对战。为了展示自己的风格，男孩们更喜欢将两条长触手绑成发髻而不是自然下垂。说起来，斯普拉遁里所有的衣服都是不限性别的，毕竟潮流不会有任何的限制！<br>\
				——谁的错820、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				明明是鱿鱼却又怕水，好奇怪啊。",
			sst_wii_fit_trainer:"武将作者：mario not mary<br>\
				插图作者：未知<br>\
				<hr>\
				0921. Wii Fit教练（女性）/Wii Fit Trainer (Female)/Wii Fit トレーナー（女性）<br>\
				系列：<ruby>Wii健身<rp>（</rp><rt>Wii Fit</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>Wii健身<rp>（</rp><rt>Wii Fit</rt><rp>）</rp></ruby><br>\
				在Wii Fit系列中帮助你锻炼的女教练。在大乱斗中，她许多招式都和瑜伽有关，既有强力的近战，也有不错的远程手段。她的下必杀技腹式呼吸如果在恰当时机按键，便能恢复累计伤害和短时间增强攻击力。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				0922. Wii Fit教练（男性）/Wii Fit Trainer (Male)/Wii Fit トレーナー（男性）<br>\
				系列：<ruby>Wii健身<rp>（</rp><rt>Wii Fit</rt><rp>）</rp></ruby><br>\
				首次登场：<ruby>Wii健身<rp>（</rp><rt>Wii Fit</rt><rp>）</rp></ruby><br>\
				在Wii Fit系列中帮助你锻炼的男教练。他的通常必杀技拜日式可以积蓄光球，当蓄满时发射它还会恢复一些累计伤害。他的通常空中攻击仰卧直腿（jackknife）原本是一种锻炼腹肌的姿势，其实有2次攻击判定。<br>\
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>\
				<hr>\
				至今都有Wii的身影。"
		},
		characterTitle:{
			sst_pyra_mythra:"天之圣杯",
			sst_9_volt_18_volt:"电子幻界",
			sst_claude:"连系世界之王",
			sst_geno:"星路战士",
			sst_duck_hunt:"天敌共演",
			sst_ness:"踏梦寻音",
			sst_chrom:"英雄王的血裔",
			sst_lucina:"觉醒的圣王女",
			sst_robin:"卓越的战术师",
			sst_paipai:"针强砭弱",
			sst_bandana_waddle_dee:"瓦豆鲁迪的传说",
			sst_magolor:"心中的最佳盟友",
			sst_roy:"年轻的狮子",
			sst_sans:"审判之眼",
			sst_r_o_b:"亚空的使者",
			sst_snake:"潜龙谍影",
			sst_sheik:"倩影扫弦音",
			sst_inkling:"瞎喷乱涂",
			sst_wii_fit_trainer:"修身养性"
		},
		perfectPair:{
			sst_pyra_mythra:["sst_rex"],
			sst_9_volt_18_volt:["sst_wario"],
			sst_claude:["sst_byleth_male","sst_byleth_female"],
			sst_geno:["sst_mario","sst_bowser","sst_peach"],
			sst_chrom:["sst_marth","sst_lucina","sst_robin"],
			sst_lucina:["sst_marth","sst_robin"],
			sst_bandana_waddle_dee:["sst_kirby","sst_meta_knight","sst_king_dedede"],
			sst_magolor:["sst_kirby","sst_meta_knight","sst_king_dedede","sst_bandana_waddle_dee"],
			sst_sheik:["sst_zelda"]
		},
		skill:{
			//System
			_sst_sex_select:{
				charlotte:true,
				superCharlotte:true,
				trigger:{
					global:'gameStart',
					player:['enterGame','showCharacterEnd']
				},
				ruleSkill:true,
				silent:true,
				firstDo:true,
				priority:2020,
				filter:(event,player)=>player.sex=='',
				content:()=>{
					'step 0'
					player.chooseControl('male','female').set('prompt','选择性别').set('ai',()=>['male','female'].randomGet());
					'step 1'
					player.sex=result.control;
					game.broadcast((player,sex)=>player.sex=sex,player,result.control);
					const name=player.name;
					const differentAvatar=['sst_corrin','sst_robin','nnk_robin','sst_inkling'];
					if(differentAvatar.contains(name)) player.setAvatar(name,name+'_'+result.control);
					game.log(player,'将性别变为了','#y'+get.translation(result.control));
					const differentGroup={sst_corrin_male:'sst_dark',sst_corrin_female:'sst_light'};
					if(typeof differentGroup[name+'_'+result.control]=='string') player.changeGroup(differentGroup[name+'_'+result.control]);
					player.update();
				}
			},
			_sst_group_select:{
				charlotte:true,
				superCharlotte:true,
				trigger:{
					global:'gameStart',
					player:['enterGame','showCharacterEnd']
				},
				ruleSkill:true,
				silent:true,
				firstDo:true,
				priority:2019,
				filter:(event,player)=>!get.config('no_group')&&player.group=='sst_smash',
				content:()=>{
					'step 0'
					player.chooseControl('sst_light','sst_dark','sst_spirit','sst_reality').set('prompt','选择势力').set('ai',()=>{
						if(game.zhu&&game.zhu!=_status.event.player&&get.attitude(_status.event.player,game.zhu)>0&&_status.event.controls.contains(game.zhu.group)) return game.zhu.group;
						return _status.event.controls.randomGet();
					});
					'step 1'
					player.changeGroup(result.control);
					player.update();
				}
			},
			braces:{
				intro:{
					content:'#'
				}
			},
			_guozhan_marks:{
				ruleSkill:true,
				enable:"phaseUse",
				filter:(event,player)=>player.hasMark("yexinjia_mark")||player.hasMark("xianqu_mark")||player.hasMark("yinyang_mark")||player.hasMark("zhulianbihe_mark"),
				chooseButton:{
					dialog:()=>ui.create.dialog("###国战标记###弃置一枚对应的标记，发动其对应的效果"),
					chooseControl:(event,player)=>{
						const list=[],bool=player.hasMark("yexinjia_mark");
						if(bool||player.hasMark("xianqu_mark")) list.push("先驱");
						if(bool||player.hasMark("zhulianbihe_mark")){
							list.push("珠联(摸牌)");
							if(event.filterCard({name:"tao",isCard:true},player,event)) list.push("珠联(桃)");
						}
						if(bool||player.hasMark("yinyang_mark")) list.push("阴阳鱼");
						list.push("cancel2");
						return list;
					},
					check:()=>{
						const player=_status.event.player,bool=player.hasMark("yexinjia_mark");
						if((bool||player.hasMark("xianqu_mark"))&&(4-player.countCards("h"))>1) return "先驱";
						if(bool||player.hasMark("zhulianbihe_mark")){
							if(_status.event.getParent().filterCard({name:"tao",isCard:true},player,event)&&get.effect_use(player,{name:"tao"},player)>0) return "珠联(桃)";
							if(player.getHandcardLimit()-player.countCards("h")>1&&!game.hasPlayer(function(current){
								return current!=player&&current.isFriendOf(player)&&current.hp+current.countCards("h","shan")<=2;
							})) return "珠联(摸牌)";
						}
						if(player.hasMark("yinyang_mark")&&player.getHandcardLimit()-player.countCards("h")>0) return "阴阳鱼";
						return "cancel2";
					},
					backup:(result,player)=>{
						switch(result.control){
							case "珠联(桃)":return get.copy(lib.skill._zhulianbihe_mark_tao);
							case "珠联(摸牌)":return {
								content:()=>{
									player.draw(2);
									player.removeMark(player.hasMark("zhulianbihe_mark")?"zhulianbihe_mark":"yexinjia_mark",1);
								},
							};
							case "阴阳鱼":return {
								content:()=>{
									player.draw();
									player.removeMark(player.hasMark("yinyang_mark")?"yinyang_mark":"yexinjia_mark",1);
								}
							};
							case "先驱":return {content:lib.skill.xianqu_mark.content};
						}
					}
				},
				ai:{
					order:1,
					result:{
						player:1
					}
				}
			},
			xianqu_mark:{
				intro:{
					content:"◇出牌阶段，你可以弃置此标记，然后将手牌摸至四张并观看一名其他角色的一张武将牌。",
				},
				content:()=>{
					"step 0"
					player.removeMark(player.hasMark("xianqu_mark")?"xianqu_mark":"yexinjia_mark",1);
					const num=4-player.countCards("h");
					if(num) player.draw(num);
					"step 1"
					if(game.hasPlayer(current=>current!=player&&current.isUnseen(2))) player.chooseTarget("是否观看一名其他角色的一张暗置武将牌？",(card,player,target)=>target!=player&&target.isUnseen(2)).set("ai",target=>{
						if(target.isUnseen()){
							if (target!=_status.event.player.getNext()) return 10;
							return 9;
						}
						return -get.attitude(_status.event.player,target);
					});
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						event.target=result.targets[0];
						player.line(event.target,"green");
						const controls=[];
						if(event.target.isUnseen(0)) controls.push("主将");
						if(event.target.isUnseen(1)) controls.push("副将");
						if(controls.length>1) player.chooseControl(controls);
						if(controls.length==0) event.finish();
					}
					else{
						player.removeSkill("xianqu_mark");
						event.finish();
					}
					"step 3"
					if(result.control){
						if(result.control=="主将"){
							player.viewCharacter(event.target,0);
						}
						else{
							player.viewCharacter(event.target,1);
						}
					}
					else if(target.isUnseen(0)){
						player.viewCharacter(event.target,0);
					}
					else{
						player.viewCharacter(event.target,1);
					}
				}
			},
			_useAnger_juedou:{
				ruleSkill:true,
				charlotte:true,
				forced:true,
				popup:false,
				trigger:{source:'damageBegin1'},
				filter:(event,player)=>{
					const evt=event.getParent(2);
					if(!evt||evt.name!='useCard') return false;
					if(typeof evt.th_anger!='object') return false;
					if(typeof evt.th_anger[player.playerid]!='number') return false;
					return evt.th_anger[player.playerid]!=0;
				},
				content:()=>trigger.num+=trigger.getParent(2).th_anger[player.playerid]
			},
			//Pyra/Mythra
			sst_xuanyi:{
				mark:true,
				marktext:"☯",
				intro:{
					content:storage=>storage?"转换技，出牌阶段限一次，你可以与牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点雷电伤害。":"转换技，出牌阶段限一次，你可以与一名角色拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点火焰伤害。"
				},
				zhuanhuanji:true,
				enable:"phaseUse",
				usable:1,
				filter:(event,player)=>{
					if(player.storage.sst_xuanyi) return player.canComparePlayer();
					return game.hasPlayer(current=>player.canCompare(current));
				},
				filterTarget:(card,player,target)=>{
					if(player.storage.sst_xuanyi) return false;
					return player.canCompare(target);
				},
				selectTarget:()=>{
					if(_status.event.player.storage.sst_xuanyi) return 0;
					return 1;
				},
				delay:false,
				content:()=>{
					"step 0"
					event.rotation=player.storage[event.name]==true;
					player.changeZhuanhuanji(event.name);
					if(!event.rotation){
						player.chooseToCompare(target);
					}
					else{
						player.chooseToComparePileTop();
					};
					"step 1"
					if(result.winner){
						event.winner=result.winner;
						event.winner.gain(event.winner==player?result.target:result.player,"gain2");
					}
					"step 2"
					if(event.winner!=player){
						let str="炫奕：对一名角色造成1点";
						str+=!event.rotation?"火焰":"雷电";
						str+="伤害";
						player.chooseTarget(str,true).set("ai",target=>{
							const evt=_status.event.getParent();
							return get.damageEffect(target,_status.event.player,_status.event.player,!evt.rotation?"fire":"thunder");
						});
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets,!event.rotation?"fire":"thunder");
						result.targets[0].damage(player,!event.rotation?"fire":"thunder","nocard");
						player.addExpose(0.2);
					}
					else{
						event.finish();
					}
					"step 4"
					game.delayx();
				},
				ai:{
					order:5,
					expose:0.2,
					damage:true,
					result:{
						player:(player,target)=>{
							if(!player.storage.sst_xuanyi) return -Math.cbrt(get.attitude(player,target));
							return 1;
						}
					}
				}
			},
			sst_fuxin:{
				delay:false,
				skillAnimation:true,
				animationStr:"付心",
				animationColor:"fire",
				line:"fire",
				enable:"phaseUse",
				usable:1,
				filterTarget:lib.filter.notMe,
				content:()=>{
					"step 0"
					const name=player.name;
					const next=game.createEvent("removeCharacter");
					next.player=player;
					next.toRemove=name;
					next.setContent(()=>{
						const name=player.name;
						const info=lib.character[name];
						if(!info) return;
						const to="shibing"+(info[0]=="male"?1:2)+info[1];
						game.log(player,"移除了武将牌","#b"+name);
						player.reinit(name,to,false);
						if(_status.characterlist) _status.characterlist.add(name);
					});
					"step 1"
					lib.inpile.push("sst_aegises");
					const card=game.createCard4("sst_aegises","","","",["sst_pyra_mythra"]);
					player.give(card,target,"give",true);
					target.addAdditionalSkill("sst_fuxin","sst_fuxin_card",true);
				},
				ai:{
					order:1,
					expose:0.2,
					damage:true,
					result:{
						target:player=>{
							if(player.hp<3) return 1;
						}
					}
				}
			},
			sst_fuxin_card:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>!player.hasCard(card=>get.name(card)=="sst_aegises","hej"),
				frequent:true,
				content:()=>{
					const card=get.cardPile("sst_aegises","field");
					if(card) player.gain(card,"gain2");
				}
			},
			//9-Volt & 18-Volt
			sst_tanfen:{
				trigger:{player:"phaseDrawBegin1"},
				filter:(event,player)=>!event.numFixed&&player.countCards()<player.getHandcardLimit(),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseControl(lib.suit,"cancel2").set("ai",()=>{
						const statistic={};
						Array.from(ui.cardPile.childNodes).forEach(card=>{
							const suit=get.suit(card);
							if(lib.suit.contains(suit)){
								if(!statistic[suit]) statistic[suit]=0;
								statistic[suit]++;
							}
						});
						let min=ui.cardPile.childNodes.length;
						let choice="cancel2";
						for(const i in statistic){
							if(!lib.suit.contains(i)) continue;
							if(statistic[i]<min){
								min=statistic[i];
								choice=i;
							}
						}
						return choice;
					}).set("prompt",get.prompt("sst_tanfen")).set("prompt2",get.translation("sst_tanfen_info"));
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_tanfen");
						player.popup(result.control);
						game.log(player,"声明了","#y"+get.translation(result.control));
						event.control=result.control;
						trigger.changeToZero();
					}
					else{
						event.finish();
					}
					"step 2"
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card);
					player.showCards(event.card,get.translation(player)+"发动了【"+get.skillTranslation(event.name,player)+"】（声明了"+get.translation(event.control)+"）",0.5);
					"step 3"
					if(get.suit(card)!=event.control) event.goto(2);
					player.gain(card,"gain2");
				},
				ai:{
					threaten:3
				}
			},
			sst_sutong:{
				frequent:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>{
					if(player.hasMark("xianqu_mark")) return false;
					return player.countUsed(null,true)<=player.countCards();
				},
				content:()=>{
					player.addMark("xianqu_mark",1);
					game.delayx();
				}
			},
			//Claude
			sst_yunchou:{
				frequent:true,
				trigger:{player:"useCardBegin"},
				filter:event=>get.is.yingbian(event.card),
				content:()=>{
					const list=["yingbian_kongchao","yingbian_canqu","yingbian_fujia","yingbian_zhuzhan"];
					if(!trigger.card.cardtags) trigger.card.cardtags=[];
					trigger.card.cardtags.addArray(list);
				},
				ai:{
					effect:{
						player:card=>{
							if(get.is.yingbian(card)) return [1,1];
						}
					}
				}
			},
			sst_guimou:{
				usable:1,
				direct:true,
				trigger:{player:"useCardBegin"},
				filter:event=>get.is.yingbian(event.card),
				content:()=>{
					"step 0"
					const list=lib.card[get.name(trigger.card)].yingbian_tags.slice(0).map(i=>"yingbian_"+i+"_tag");
					player.chooseControl(list,"cancel2").set("ai",()=>{
						const list=_status.event.controls;
						const card=_status.event.getTrigger().card;
						const choices=["yingbian_all_tag","yingbian_damage_tag","yingbian_hit_tag","yingbian_draw_tag","yingbian_gain_tag","yingbian_add_tag","yingbian_remove_tag"];
						for(const i of choices){
							if(_status.cardtag&&_status.cardtag[i.slice(0,-4)]&&_status.cardtag[i.slice(0,-4)].contains(card.cardid)) return "cancel2";
							if(list.contains(i)) return i;
						}
						return "cancel2";
					}).set("prompt",get.prompt("sst_guimou")).set("prompt2",get.translation("sst_guimou_info"));
					"step 1"
					if(result.control&&result.control!="cancel2"){
						player.logSkill("sst_guimou");
						if(!_status.cardtag) _status.cardtag={};
						const cardtag=[];
						["yingbian_add","yingbian_remove","yingbian_draw","yingbian_all","yingbian_hit","yingbian_gain","yingbian_damage"].forEach(i=>{
							if(!_status.cardtag[i]) _status.cardtag[i]=[];
							if(_status.cardtag[i].contains(trigger.card.cardid)){
								_status.cardtag[i].remove(trigger.card.cardid);
								cardtag.push(i);
							}
						});
						_status.cardtag[result.control.slice(0,-4)].add(trigger.card.cardid);
						game.broadcastAll(cardtag=>_status.cardtag=cardtag,_status.cardtag);
						player.popup(result.control,"wood");
						game.log(player,"指定此牌的应变效果为","#y"+result.control);
						const evt=event.getParent("useCard");
						if(evt&&evt.name=="useCard"){
							const next=game.createEvent("sst_guimou_clear");
							event.next.remove(next);
							evt.after.push(next);
							next.player=player;
							next.card=trigger.card;
							next.cardtag=cardtag;
							next.cardtag_temp=result.control.slice(0,-4);
							next.setContent(lib.skill.sst_guimou.contentx);
						}
					}
					else{
						player.storage.counttrigger[event.name]--;
					}
				},
				contentx:()=>{
					if(!_status.cardtag) _status.cardtag={};
					["yingbian_add","yingbian_remove","yingbian_draw","yingbian_all","yingbian_hit","yingbian_gain","yingbian_damage"].forEach(i=>{
						if(!_status.cardtag[i]) _status.cardtag[i]=[];
					});
					_status.cardtag[event.cardtag_temp].remove(card.cardid);
					event.cardtag.forEach(i=>_status.cardtag[i].add(card.cardid));
					game.broadcastAll(cardtag=>_status.cardtag=cardtag,_status.cardtag);
				}
			},
			//Geno
			sst_fuyuan:{
				trigger:{global:"phaseZhunbeiBegin"},
				logTarget:"player",
				frequent:true,
				content:()=>{
					"step 0"
					event.target=trigger.player;
					event.pileTop=get.cards()[0];
					ui.cardPile.insertBefore(event.pileTop.fix(),ui.cardPile.firstChild);
					const translateTargets=targets=>{
						if(get.itemtype(targets)=="player") targets=[targets];
						let str="";
						if(targets[0]==player){
							str="自己";
							if(targets.length>1){
								str+="、";
								str+=get.translation(targets.slice(1));
							}
						}
						else{
							str=get.translation(targets);
						}
						return str;
					};
					player.showCards(event.pileTop,get.translation(player)+"对"+translateTargets(event.target)+"发动了【"+get.skillTranslation(event.name,player)+"】");
					"step 1"
					player.chooseCard("复愿：你可以重铸一张牌，令"+get.translation(target)+"本回合下次造成伤害后再次结算此伤害，然后若与"+get.translation(event.pileTop)+"的点数相同，你令"+get.translation(target)+"一个限定技视为未发动过","he").set("ai",card=>{
						const evt=_status.event.getParent();
						if(get.attitude(_status.event.player,evt.target)<=0) return 0;
						const num=5.5-get.value(card);
						if(get.number(card)!=get.number(evt.pileTop)) return num;
						const skills=evt.target.getSkills(null,null,false);
						for(const i of skills){
							if(get.info(i).limited&&evt.target.awakenedSkills.contains(i)) return num+3;
						}
						return num;
					});
					"step 2"
					if(result.cards&&result.cards.length){
						if(get.number(result.cards[0])==get.number(event.pileTop)) event.equal=true;
						player.loseToDiscardpile(result.cards).set("skill","_chongzhu");
						player.draw();
						if(target.isIn()){
							if(target!=player) player.addExpose(0.2);
						}
						else{
							event.finish();
						}
					}
					else{
						event.finish();
					}
					"step 3"
					target.addTempSkill("sst_fuyuan_effect");
					target.addMark("sst_fuyuan_effect",1,false);
					game.delayx();
					if(!event.equal) event.finish();
					"step 4"
					const list=target.getSkills(null,null,false).filter(i=>get.info(i).limited&&target.awakenedSkills.contains(i));
					if(list.length){
						player.chooseControl(list).set("prompt","复愿：选择一个限定技恢复之");
					}
					else{
						event.finish();
					}
					"step 5"
					if(result.control){
						target.restoreSkill(result.control);
						target.popup(result.control,"fire");
						game.log(player,"恢复了技能","#g【"+get.translation(result.control)+"】");
						game.delayx();
					}
				}
			},
			sst_fuyuan_effect:{
				charlotte:true,
				forced:true,
				intro:{
					content:"本回合你下&次造成伤害后再次结算此伤害"
				},
				onremove:true,
				trigger:{source:"damageSource"},
				filter:event=>event.player.isIn(),
				logTarget:"player",
				content:()=>{
					player.removeMark("sst_fuyuan_effect",1,false);
					if(!player.hasMark("sst_fuyuan_effect")) player.removeSkill("sst_fuyuan_effect");
					const next=game.createEvent("damage");
					next.player=trigger.player;
					if(typeof trigger.cards!="undefined") next.cards=trigger.cards;
					if(typeof trigger.card!="undefined") next.card=trigger.card;
					if(typeof trigger.num!="undefined") next.num=trigger.num;
					if(typeof trigger.source!="undefined") next.source=trigger.source;
					if(typeof trigger._triggered!="undefined") next._triggered=trigger._triggered;
					if(typeof trigger.notrigger!="undefined") next.notrigger=trigger.notrigger;
					if(typeof trigger.nature!="undefined") next.nature=trigger.nature;
					next.setContent("damage");
					next.filterStop=function(){
						if(this.source&&this.source.isDead()) delete this.source;
						if(this.num<=0){
							delete this.filterStop;
							this.trigger("damageZero");
							this.finish();
							this._triggered=null;
							return true;
						}
					};
				}
			},
			sst_doujiang:{
				unique:true,
				mark:true,
				hiddenSkill:true,
				limited:true,
				skillAnimation:true,
				animationStr:"斗降",
				animationColor:"metal",
				intro:{
					content:"limited"
				},
				enable:"phaseUse",
				filterCard:true,
				selectCard:[1,Infinity],
				position:"he",
				content:()=>{
					"step 0"
					player.awakenSkill("sst_doujiang");
					event.toUse=get.cards(cards.length);
					game.cardsGotoOrdering(event.toUse);
					player.showCards(event.toUse,get.translation(player)+"发动了【"+get.skillTranslation(event.name,player)+"】");
					"step 1"
					if(event.toUse.length){
						player.chooseCardButton("斗降：你可以使用"+get.translation(event.toUse),event.toUse).set("filterButton",button=>_status.event.player.hasUseTarget(button.link,false)).set("ai",button=>_status.event.player.getUseValue(button.link,false));
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links&&result.links.length){
						event.toUse.removeArray(result.links);
						player.addTempSkill("sst_doujiang_effect");
						player.chooseUseTarget(result.links[0],"nodistance",false);
						event.goto(1);
					}
				},
				ai:{
					order:1,
					result:{
						player:player=>{
							if(!game.hasPlayer(current=>game.checkMod(null,player,current,"unchanged","playerEnabled",player)!=false&&get.attitude(player,current)!=0)) return 0;
							return 1;
						}
					}
				}
			},
			sst_doujiang_effect:{
				charlotte:true,
				trigger:{player:"useCard1"},
				forced:true,
				popup:false,
				filter:event=>event.getParent(2).name=="sst_doujiang"&&!event.card.yingbian&&get.is.yingbian(event.card),
				content:()=>{
					trigger.card.yingbian=true;
					game.broadcast(card=>card.yingbian=true,trigger.card);
					const info=get.info(trigger.card);
					if(info&&info.yingbian) info.yingbian(trigger);
					player.addTempSkill("yingbian_changeTarget");
				}
			},
			//Duck Hunt
			sst_gonglie:{
				frequent:true,
				trigger:{player:"useCardBegin"},
				filter:event=>get.name(event.card)=="sha"&&!(get.cardtag(event.card,"yingbian_zhuzhan")&&get.cardtag(event.card,"yingbian_add")),
				content:()=>{
					trigger.set("sst_gonglie",true);
					if(!trigger.card.cardtags) trigger.card.cardtags=[];
					trigger.card.cardtags.add("yingbian_zhuzhan");
					trigger.card.cardtags.add("yingbian_add");
					player.addTempSkill("sst_gonglie_zhuzhan");
				}
			},
			sst_gonglie_zhuzhan:{
				charlotte:true,
				silent:true,
				trigger:{player:"_yingbianAfter"},
				filter:event=>event.zhuzhanresult&&event.getParent(3).sst_gonglie,
				content:()=>{
					const evt=trigger.getParent(3);
					const next=game.createEvent("sst_gonglie_clear");
					event.next.remove(next);
					evt.after.push(next);
					next.player=player;
					next.card=evt.card;
					next.sst_gonglie=trigger.zhuzhanresult;
					next.setContent(lib.skill.sst_gonglie_zhuzhan.contentx);
				},
				contentx:()=>{
					"step 0"
					if(get.itemtype(event.sst_gonglie)=="player"&&game.cardCausedDamage(card)){
						event.targets=game.filterPlayer(current=>current.hasHistory("damage",evt=>evt.card==card));
						if(event.targets&&event.targets.length){
							event.num=0;
							event.sst_gonglie.line(event.targets,"green");
						}
						else{
							event.finish();
						}
					}
					else{
						event.finish();
					}
					"step 1"
					event.sst_gonglie.gainPlayerCard("共猎：你可以获得"+get.translation(targets[num])+"一张牌",targets[num],"he");
					"step 2"
					event.num++;
					if(event.num<targets.length) event.goto(1);
				}
			},
			sst_weishou:{
				global:"sst_weishou2"
			},
			sst_weishou2:{
				direct:true,
				trigger:{player:"discardBegin"},
				filter:(event,player)=>game.hasPlayer(current=>{
					if(current==player) return false;
					if(!current.hasSkill("sst_weishou")) return false;
					for(const card of event.cards){
						if(lib.filter.canBeGained(card,current,player)) return true;
					}
				})&&event.getParent().name=="_yingbian",
				content:()=>{
					"step 0"
					const targets=game.filterPlayer(current=>{
						if(current==player) return false;
						if(!current.hasSkill("sst_weishou")) return false;
						for(const card of trigger.cards){
							if(lib.filter.canBeGained(card,current,player)) return true;
						}
					});
					let str="你可以改为将"+get.translation(trigger.cards)+"交给"+get.translation(targets);
					if(targets.length>1) str+="其中的一人";
					player.chooseTarget(get.prompt("sst_weishou2"),str,(card,player,target)=>_status.event.targets.contains(target)).set("ai",target=>Math.cbrt(get.attitude(_status.event.player,target)*_status.event.getTrigger().cards.map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0))).set("targets",targets);
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_weishou2",result.targets);
						trigger.cancel();
						player.give(trigger.cards.filter(card=>lib.filter.canBeGained(card,result.targets[0],player)),result.targets[0],true);
					}
				}
			},
			//Ness
			sst_wenxin:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_wenxin_record)) player.storage.sst_wenxin_record=[];
				},
				dutySkill:true,
				locked:true,
				direct:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>player.hasCard(card=>lib.filter.cardDiscardable(card,player),"h")&&game.countPlayer(current=>current.hasCard(card=>{
					if(player.storage.sst_wenxin_alter) return get.color(card)=="red";
					return true;
				},"ej")),
				content:()=>{
					"step 0"
					const max=game.countPlayer(current=>{
						if(player.storage.sst_wenxin_alter) return current.hasCard(card=>get.color(card)=="red","ej");
						return current.countCards("ej");
					});
					player.chooseToDiscard(get.prompt("sst_wenxin"),get.skillInfoTranslation("sst_wenxin",player),[1,max]).set("ai",card=>{
						const num=game.countPlayer(current=>current.hasCard(card=>{
							if(_status.event.player.storage.sst_wenxin_alter&&get.color(card)!="red") return false;
							const fieldValue=card=>{
								const player=get.owner(card);
								if(!player) player=_status.event.player;
								if(player.getCards("j").contains(card)){
									const efff=get.effect(player,{
										name:card.viewAs||card.name,
										cards:[card]
									},player,player);
									if(efff>0) return 0.5;
									if(efff==0) return 0;
									return -1.5;
								}
								if(player.getCards("e").contains(card)){
									const evalue=get.value(card,player);
									if(player.hasSkillTag("noe")){
										if(evalue>=7) return evalue/6;
										return evalue/10;
									}
									return evalue/3;
								}
								if(player.hasSkillTag("noh")) return 0.1;
								const nh=player.countCards("h");
								switch(nh){
									case 1:return 2;
									case 2:return 1.6;
									case 3:return 1;
									case 4:return 0.8;
									case 5:return 0.6;
									default:return 0.4;
								}
							};
							const val=fieldValue(card);
							if(get.attitude(_status.event.player,get.owner(card))>0) return -val>0;
							return val>0;
						},"ej"));
						if(ui.selected.cards.length>=num) return 0;
						let val=5-get.useful(card);
						if(get.color(card)=="black") val+=3;
						return val;
					}).set("logSkill","sst_wenxin");
					"step 1"
					if(result.cards&&result.cards.length){
						event.num=result.cards.length;
						event.black=result.cards.filter(card=>get.color(card)=="black").length;
					}
					else{
						event.finish();
					}
					"step 2"
					event.num--;
					if(event.num>=0){
						player.chooseTarget("问心：弃置场上的一张"+(player.storage.sst_wenxin_alter?"红色":"")+"牌（剩余"+get.cnNumber(event.num)+"张）",true,(card,player,target)=>target.countDiscardableCards(player,"ej",card=>{
							if(player.storage.sst_wenxin_alter) return get.color(card)=="red";
							return true;
						})).set("ai",target=>{
							const guohe=(player,target)=>{
								const att=get.attitude(player,target);
								if(att>0){
									if(target.hasCard(card=>{
										if(player.storage.sst_wenxin_alter&&get.color(card)!="red") return false;
										const cardj=card.viewAs?{name:card.viewAs}:card;
										return get.effect(target,cardj,target,player)<0;
									},"j")) return 3;
									const baiyin=target.getEquip("baiyin");
									if(baiyin&&(player.storage.sst_wenxin_alter?get.color(baiyin)=="red":true)&&target.isDamaged()&&
										get.recoverEffect(target,player,player)>0) if(target.hp==1&&!target.hujia) return 1.6;
									if(target.hasCard(card=>{
										if(player.storage.sst_wenxin_alter&&get.color(card)!="red") return false;
										if(get.position(card)=="e") return get.value(card,target)<0;
									},"e")) return 1;
								}
								const es=target.getCards("e",card=>{
									if(player.storage.sst_wenxin_alter) return get.color(card)=="red";
									return true;
								});
								const noe=(es.length==0||target.hasSkillTag("noe"));
								const noe2=!es.some(esx=>get.value(esx,target)>0);
								if(noe||noe2) return 0;
								if(att<=0&&!target.hasCard(card=>{
									if(player.storage.sst_wenxin_alter) return get.color(card)=="red";
									return true;
								},"e")) return 1.5;
								return -1.5;
							};
							const player=_status.event.player;
							let att=get.attitude(player,target);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							return att*guohe(player,target);
						});
					}
					else{
						event.goto(5);
					}
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"green");
						player.discardPlayerCard("问心：弃置"+get.translation(result.targets[0])+"场上一张"+(player.storage.sst_wenxin_alter?"红色":"")+"牌",result.targets[0],"ej",true).set("filterButton",button=>{
							if(_status.event.player.storage.sst_wenxin_alter) return get.color(button.link)=="red";
							return true;
						});
					}
					"step 4"
					if(result.cards&&result.cards.length&&get.color(result.cards[0])=="black") event.black++;
					event.goto(2);
					"step 5"
					player.showHandcards();
					if(!player.storage.sst_wenxin&&player.countCards()&&!player.hasCard(card=>get.color(card)!="red","h")) event.red=true;
					"step 6"
					if(event.black) player.draw(event.black);
					if(player.storage.sst_wenxin) event.finish();
					"step 7"
					player.storage.sst_wenxin_record.push(event.red?true:false);
					let fail=true;
					for(let i=0;i<player.storage.sst_wenxin_record.length-1;i++){
						if(player.storage.sst_wenxin_record[i]&&player.storage.sst_wenxin_record[i+1]){
							event.set("achieve",true);
							event.trigger("dutySkill");
							fail=false;
							break;
						}
						if(!fail) break;
					}
					if(fail&&player.storage.sst_wenxin_record.length>=3){
						event.set("fail",true);
						event.trigger("dutySkill");
					}
				},
				ai:{
					expose:0.1
				},
				group:["sst_wenxin_achieve","sst_wenxin_fail"],
				subSkill:{
					achieve:{
						forced:true,
						trigger:{player:"dutySkill"},
						filter:event=>event.name=="sst_wenxin"&&event.achieve,
						skillAnimation:true,
						animationColor:"fire",
						content:()=>{
							"step 0"
							game.log(player,"成功完成使命");
							//player.awakenSkill("sst_wenxin");
							//player.addSkill("sst_wenxin_alter");
							player.storage.sst_wenxin=true;
							player.addSkill("sst_wenxin_effect");
							game.delayx();
						}
					},
					fail:{
						forced:true,
						trigger:{player:"dutySkill"},
						filter:event=>event.name=="sst_wenxin"&&event.fail,
						content:()=>{
							"step 0"
							game.log(player,"使命失败");
							//player.awakenSkill("sst_wenxin");
							//player.addSkill("sst_wenxin_alter");
							player.storage.sst_wenxin=true;
							player.storage.sst_wenxin_alter=true;
							game.delayx();
						}
					}
				}
			},
			sst_wenxin_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"你取消弃牌阶段"
				},
				firstDo:true,
				forced:true,
				popup:false,
				trigger:{player:"phaseDiscardBefore"},
				content:()=>{
					trigger.cancel();
				}
			},
			//Chrom
			sst_niming:{
				trigger:{global:"judge"},
				check:(event,player)=>{
					const result=event.judge(event.player.judging[0]);
					const attitude=get.attitude(player,event.player);
					if(attitude==0||result==0) return false;
					if(attitude>0){
						return result<0;
					}
					else{
						return result>0;
					}
				},
				content:()=>{
					"step 0"
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card).relatedEvent=trigger;
					"step 1"
					player.$throw(card);
					card.clone.classList.add("thrownhighlight");
					if(trigger.player.judging[0].clone){
						trigger.player.judging[0].clone.classList.remove("thrownhighlight");
						game.addVideo("deletenode",player,get.cardsInfo([trigger.player.judging[0].clone]));
					}
					game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0]=card;
					game.log(trigger.player,"的判定牌改为",card);
					game.delay(2);
				},
				ai:{
					expose:0.1,
					rejudge:true,
					tag:{
						rejudge:1
					}
				}
			},
			sst_cuifeng:{
				trigger:{player:"phaseZhunbeiBegin"},
				check:(event,player)=>game.hasPlayer(current=>player.canUse({name:"sha"},current)&&get.effect(current,{name:"sha"},player,player)>0),
				content:()=>{
					"step 0"
					player.judge(card=>{
						const color=get.color(card);
						switch(color){
							case "black":return -1;
							case "red":return 2;
						}
						return 0;
					}).set("judge2",()=>true);
					"step 1"
					if(game.hasPlayer(current=>player.canUse({name:"sha",cards:[result.card]},current))) player.chooseUseTarget({name:"sha"},[result.card],false,true).set("viewAs",true).set("ai",(get.color(result.card)=="red"||(get.color(result.card)=="black"&&player.hp>1))?get.effect_use:()=>0);
				},
				ai:{
					threaten:1.5
				},
				group:"sst_cuifeng2"
			},
			sst_cuifeng2:{
				trigger:{player:"useCard1"},
				forced:true,
				popup:false,
				filter:event=>event.getParent(2).name=="sst_cuifeng",
				content:()=>{
					"step 0"
					if(get.color(trigger.card)=="black"){
						const list=[],list2=[
							"弃置两张牌",
							"受到1点伤害令此【杀】伤害值基数+1",
							"背水！令此【杀】不可被响应，然后依次执行上述所有选项",
						];
						if(player.countCards("he",card=>lib.filter.cardDiscardable(card,player))>1) list.push("选项一");
						list.push("选项二");
						list.push("背水！");
						player.chooseControl(list).set("choiceList",list2).set("ai",()=>{
							if(_status.event.player.hp>1){
								const targets=_status.event.getTrigger().targets;
								for(const target of targets){
									if(target.mayHaveShan()) return "背水！";
								}
								return "选项二";
							}
							return 0;
						});
					}
					else if(get.color(trigger.card)=="red"){
						if(player.getDamagedHp()) player.recover("nocard");
						event.finish();
					}
					else{
						event.finish();
					}
					"step 1"
					if(typeof result.control=="string"){
						event.control=result.control;
						if(event.control=="背水！") trigger.directHit.addArray(game.players);
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.control=="选项一"||event.control=="背水！") player.chooseToDiscard("摧锋：弃置两张牌",2,"he",true);
					"step 3"
					if(event.control=="选项二"||event.control=="背水！"){
						player.damage("nosource","nocard");
						if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
						trigger.baseDamage++;
					}
				},
				ai:{
					damageBonus:true
				}
			},
			//Lucina
			sst_suxing:{
				trigger:{global:"roundStart"},
				forced:true,
				filter:(event,player)=>typeof player.storage.sst_suxing=="number"&&game.roundNumber-player.storage.sst_suxing==1,
				content:()=>{
					const next=player.phase("sst_suxing");
					event.next.remove(next);
					trigger.next.push(next);
				}
			},
			_sst_suxing_effect:{
				charlotte:true,
				forceDie:true,
				firstDo:true,
				trigger:{global:"loseAfter"},
				filter:event=>{
					if(event.player.countCards("h")) return false;
					return event.hs&&event.hs.length>0;
				},
				silent:true,
				content:()=>{
					player.storage.sst_suxing=game.roundNumber;
				}
			},
			sst_shengyi:{
				skillAnimation:true,
				animationColor:"water",
				juexingji:true,
				unique:true,
				derivation:["sst_hanmang","sst_cuifeng"],
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>player.hasAllHistory("useSkill",evt=>evt.skill=="sst_suxing"),
				forced:true,
				content:()=>{
					"step 0"
					player.awakenSkill("sst_shengyi");
					player.loseMaxHp();
					"step 1"
					player.addSkillLog("sst_hanmang");
					player.addSkillLog("sst_cuifeng");
					game.delayx();
				}
			},
			//Robin
			sst_zuozhan:{
				preHidden:true,
				trigger:{global:"damageBegin4"},
				filter:event=>!event.player.hasSkill("sst_junce"),
				logTarget:"player",
				check:(event,player)=>get.attitude(player,event.player)>0,
				content:()=>{
					"step 0"
					event.targets=game.filterPlayer(current=>current.hasSkill("sst_junce")).sortBySeat(_status.currentPhase);
					if(event.targets.length){
						event.num=0;
					}
					else{
						event.goto(3);
					}
					"step 1"
					if(num<targets.length){
						player.line(targets[num],"green");
						targets[num].removeSkill("sst_junce");
						player.popup("sst_junce","fire");
						game.log(targets[num],"失去了技能","#g【军策】");
					}
					else{
						event.goto(3);
					}
					"step 2"
					targets[num].draw(2);
					event.num++;
					event.goto(1);
					"step 3"
					trigger.player.addSkillLog("sst_junce");
				},
				ai:{
					expose:0.2,
					maixie:true,
					maixie_hp:true
				}
			},
			sst_junce:{
				unique:true,
				direct:true,
				trigger:{player:"damageEnd"},
				content:()=>{
					"step 0"
					player.chooseControl("选项一","选项二","背水！","cancel2").set("choiceList",[
						"摸一张牌",
						"获得一张额外智囊",
						"背水！弃置所有手牌，然后依次执行上述所有选项",
					]).set("ai",()=>{
						if(_status.event.player.getCards("h",card=>lib.filter.cardDiscardable(card,_status.event.player)).map(card=>get.useful(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)<7) return 2;
						return Math.random()>1/(_status.event.player.maxHp-_status.event.player.hp)?0:1;
					});
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_junce");
						event.control=result.control;
						if(event.control=="背水！") player.discard(player.getCards("h",card=>lib.filter.cardDiscardable(card,player)));
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.control=="选项一"||event.control=="背水！") player.draw();
					"step 3"
					if(event.control=="选项二"||event.control=="背水！"){
						const card=game.createCard3(get.zhinangs().randomGet(),null,null,null,["zhinang_tricks"]);
						player.gain(card,"gain2");
					}
				},
				ai:{
					threaten:()=>{
						if(game.hasPlayer(current=>current.hasSkill("sst_zuozhan"))) return 2;
						return 1;
					},
					maixie:true,
					maixie_hp:true
				}
			},
			//派派
			sst_aoshang:{
				init:player=>{
					if(!_status.sst_aoshang){
						_status.sst_aoshang=true;
						game.broadcastAll(()=>{
							lib.inpile.forEach(i=>{
								const info=lib.card[i];
								if(!info.backup_yingbian_prompt){
									info.backup_yingbian_prompt=card=>{
										let str="";
										if(get.cardtag(card,"yingbian_gain")) str+="当你声明使用此牌时，你获得此牌响应的目标牌";
										if(get.cardtag(card,"yingbian_hit")){
											if(str.length) str+="；";
											str+="此牌不可被响应";
										}
										if(get.cardtag(card,"yingbian_all")){
											if(str.length) str+="；";
											str+="此牌的效果改为依次执行所有选项";
										}
										if(get.cardtag(card,"yingbian_draw")){
											if(str.length) str+="；";
											str+="当你声明使用此牌时，你摸一张牌";
										}
										if(get.cardtag(card,"yingbian_remove")){
											if(str.length) str+="；";
											str+="当你使用此牌选择目标后，你可为此牌减少一个目标";
										}
										if(get.cardtag(card,"yingbian_add")){
											if(str.length) str+="；";
											str+="当你使用此牌选择目标后，你可为此牌增加一个目标";
										}
										return str;
									};
									info.yingbian_prompt=function(card){
										let str="";
										if(get.cardtag(card,"yingbian_recover")) str+="当你声明使用此牌时，你回复1点体力";
										const str2=this.backup_yingbian_prompt.apply(this,arguments);
										if(str.length&&str2.length) str+="；";
										return str+str2;
									}
								}
								else if(info.yingbian_prompt){
									info.sst_aoshang_yingbian_prompt=info.yingbian_prompt;
									info.yingbian_prompt=function(card){
										let str="";
										if(get.cardtag(card,"yingbian_recover")) str+="当你声明使用此牌时，你回复1点体力";
										const str2=this.sst_aoshang_yingbian_prompt.apply(this,arguments);
										if(str.length&&str2.length) str+="；";
										return str+str2;
									}
								}
								if(!info.backup_yingbian){
									info.backup_yingbian=event=>{
										const card=event.card;
										if(get.cardtag(card,"yingbian_gain")){
											const cardx=event.respondTo;
											if(cardx&&cardx[1]&&cardx[1].cards&&cardx[1].cards.filterInD("o").length) event.player.gain(cardx[1].cards.filterInD("o"),"gain2","log");
										}
										if(get.cardtag(card,"yingbian_hit")){
											event.directHit.addArray(game.players);
											game.log(card,"不可被响应");
										}
										if(get.cardtag(card,"yingbian_all")){
											card.yingbian_all=true;
											game.log(card,"执行所有选项");
										}
										if(get.cardtag(card,"yingbian_draw")) event.player.draw();
										if(get.cardtag(card,"yingbian_remove")) event.yingbian_removeTarget=true;
										if(get.cardtag(card,"yingbian_add")) event.yingbian_addTarget=true;
									};
									info.yingbian=function(event){
										const card=event.card;
										if(get.cardtag(card,"yingbian_recover")&&player.maxHp-player.hp>0) event.player.recover("nocard");
										this.backup_yingbian.apply(this,arguments);
									}
								}
								else if(info.yingbian){
									info.sst_aoshang_yingbian=info.yingbian;
									info.yingbian=function(event){
										const card=event.card;
										if(get.cardtag(card,"yingbian_recover")&&player.maxHp-player.hp>0) event.player.recover("nocard");
										this.sst_aoshang_yingbian.apply(this,arguments);
									}
								}
							});
						});
					}
				},
				forced:true,
				popup:false,
				trigger:{player:"useCardBegin"},
				filter:event=>!get.cardtag(event.card,"yingbian_kongchao")||!get.cardtag(event.card,"yingbian_recover"),
				content:()=>{
					if(!trigger.card.cardtags) trigger.card.cardtags=[];
					trigger.card.cardtags.add("yingbian_kongchao");
					trigger.card.cardtags.add("yingbian_recover");
				},
				group:"sst_aoshang2"
			},
			sst_aoshang2:{
				silent:true,
				trigger:{global:["chooseToUseBegin","chooseToRespondBegin"]},
				filter:(event,player)=>{
					const evt=event.getParent(2);
					if(!evt||evt.name!="useCard") return false;
					return evt.player==player&&typeof get.number(evt.card)=="number";
				},
				content:()=>{
					const evt=trigger.getParent(2);
					if(trigger.filterCard){
						trigger.set("sstAoshangFilterCard",trigger.filterCard);
						trigger.set("filterCard",function(card){
							if(card&&_status.event.respondToCard&&get.number(card)>get.number(_status.event.respondToCard)) return false;
							if(typeof _status.event.sstAoshangFilterCard!="function") return true;
							return _status.event.sstAoshangFilterCard.apply(this,arguments);
						});
						trigger.set("respondToCard",evt.card);
					}
					else{
						trigger.set("filterCard",card=>card&&_status.event.respondToCard&&!(get.number(card)>get.number(_status.event.respondToCard)));
						trigger.set("respondToCard",evt.card);
					}
				}
			},
			sst_lianxia:{
				enable:"phaseUse",
				usable:1,
				filterTarget:(card,player,target)=>target.countCards()<player.countCards(),
				filter:(event,player)=>player.countCards("he"),
				filterCard:true,
				discard:false,
				lose:false,
				delay:false,
				position:"he",
				content:()=>{
					"step 0"
					player.give(cards,target);
					"step 1"
					event.players=game.filterPlayer(current=>current.countCards("he")&&current.isMaxHandcard());
					if(event.players.length){
						event.players.sortBySeat(_status.currentPhase);
						player.line(event.players,"green");
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.players[num]!=player){
						event.players[num].chooseCard("怜下：交给"+get.translation(player)+"一张牌","he",true,card=>lib.filter.canBeGained(card,_status.event.getParent().player,_status.event.player));
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.cards&&result.cards.length) event.players[num].give(result.cards,player);
					"step 4"
					event.num++;
					if(event.num<event.players.length) event.goto(2);
				},
				ai:{
					order:7,
					result:{
						player:(player,target)=>{
							if(!ui.selected.cards.length) return;
							if(target.hasSkillTag("nogain")) return 0;
							return Math.cbrt(get.attitude(player,target)*get.value(ui.selected.cards[0]));
						}
					}
				}
			},
			//Bandana Waddle Dee
			sst_zhoudu:{
				locked:false,
				direct:true,
				mod:{
					targetInRange:card=>{
						if(card.name=="sst_spear_thrust") return true;
					}
				},
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]
				},
				filter:(event,player)=>{
					if(!player.countCards("hes")) return false;
					const evt=event.getl(player);
					if(evt){
						if(event.visible&&evt.hs&&evt.hs.length){
							for(const i of evt.hs){
								if(get.suit(i,player)=="spade") return true;
							}
						}
						if(evt.es&&evt.es.length){
							for(const i of evt.es){
								if(get.suit(i,player)=="spade") return true;
							}
						}
						if(evt.js&&evt.js.length){
							for(const i of evt.js){
								if(get.suit(i,player)=="spade") return true;
							}
						}
					}
					return false;
				},
				content:()=>{
					const next=player.chooseToUse();
					next.set("prompt",get.prompt("sst_zhoudu"));
					next.set("prompt2","你可以将一张牌当作【刺枪】使用");
					next.set("logSkill","sst_zhoudu");
					next.set("norestore",true);
					next.set("_backupevent","sst_zhoudux");
					next.backup("sst_zhoudux");
					next.set("addCount",false);
					next.set("custom",{
						add:{},
						replace:{window:()=>{}}
					});
				},
				ai:{
					effect:{
						player:card=>{
							if(card.suit=="spade") return [1,1];
						}
					}
				},
				group:"sst_zhoudu_init"
			},
			sst_zhoudu_init:{
				forced:true,
				locked:false,
				trigger:{
					global:"phaseBefore",
					player:"enterGame"
				},
				filter:event=>(event.name!="phase"||game.phaseNumber==0)&&!lib.inpile.contains("sst_spear_thrust"),
				content:()=>{
					"step 0"
					const cards=[];
					for(let i=1;i<=11;i++){
						const card=game.createCard2("sst_spear_thrust","spade",i);
						cards.push(card);
						ui.cardPile.insertBefore(card,ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length)]);
					}
					game.broadcastAll(()=>lib.inpile.add("sst_spear_thrust"));
					game.updateRoundNumber();
					player.$throw(cards);
					"step 1"
					game.broadcastAll(ui.clear);
					game.delayx();
				}
			},
			sst_zhoudux:{
				viewAs:{name:"sst_spear_thrust"},
				filterCard:card=>get.itemtype(card)=="card",
				position:"hes",
				check:card=>5-get.value(card)
			},
			sst_mengchen:{
				direct:true,
				trigger:{player:"damageEnd"},
				content:()=>{
					"step 0"
					event.count=trigger.num;
					"step 1"
					if(event.count>0){
						event.count--;
						player.chooseTarget(get.prompt2("sst_mengchen")).set("ai",target=>get.rawAttitude(_status.event.player,target));
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						event.targets=result.targets;
						player.logSkill("sst_mengchen",event.targets);
						event.cards=[];
						event.num=0;
						event.targets.push(player);
						event.targets.sortBySeat(_status.currentPhase);
					}
					else{
						event.finish();
					}
					"step 3"
					targets[num].draw();
					"step 4"
					targets[num].chooseToDiscard("盟谌：弃置一张牌","he",true);
					"step 5"
					if(result.cards&&result.cards.length) cards.addArray(result.cards);
					event.num++;
					if(event.num<targets.length) event.goto(3);
					"step 6"
					if(cards.length){
						target.chooseCardButton("盟谌：你可以使用"+get.translation(cards)+"中的一张牌",cards).set("filterButton",button=>["o","d"].contains(get.position(button.link,true))&&_status.event.player.hasUseTarget(button.link)).set("ai",button=>_status.event.player.getUseValue(button.link));
					}
					else{
						event.goto(1);
					}
					"step 7"
					if(result.links&&result.links.length) target.chooseUseTarget(result.links[0],false);
					event.goto(1);
				},
				ai:{
					expose:0.2,
					maixie:true,
					maixie_hp:true
				}
			},
			//Magolor
			sst_miulu:{
				forced:true,
				trigger:{player:"damageBegin4"},
				filter:(event,player)=>event.num>1&&player.hujia,
				content:()=>{
					trigger.num=1;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:player=>{
						if(!player.hujia) return false;
					}
				},
				group:"sst_miulu2"
			},
			sst_miulu2:{
				forced:true,
				trigger:{player:"changeHujiaAfter"},
				filter:event=>event.num<0,
				content:()=>{
					"step 0"
					player.addSkill("sst_miulu_effect");
					if(player.hasCard(card=>!card.hasGaintag("exposed"),"h")) player.chooseCard("谬陆：明置"+get.cnNumber(-trigger.num)+"张暗置手牌",-trigger.num,card=>!card.hasGaintag("exposed"),true).set("ai",get.value);
					"step 1"
					if(result.cards&&result.cards.length){
						player.$give(result.cards,player,false);
						player.addGaintag(result.cards,"exposed");
						player.addGaintag(result.cards,"sst_miulu");
						game.log(player,"明置了",result.cards);
						game.delayx();
					}
					"step 2"
					player.addMark("sst_miulu_effect",-trigger.num,false);
					player.$damagepop(player.countMark("sst_miulu_effect"),"water");
				},
				ai:{
					maixie:true,
					skillTagFilter:player=>{
						if(!player.hujia) return false;
					}
				}
			},
			sst_miulu_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>"本局游戏你的手牌上限+"+storage+"<br>当前你的手牌上限："+player.getHandcardLimit()
				},
				onremove:true,
				mod:{
					ignoredHandcard:card=>{
						if(card.hasGaintag("exposed")) return true;
					},
					maxHandcard:(player,num)=>num+player.countMark("sst_miulu_effect")
				}
			},
			sst_jifan:{
				global:"sst_jifan_effect",
				mahouSkill:true,
				enable:"phaseUse",
				usable:1,
				filter:(event,player)=>player.countCards("he")&&!player.hasSkill("sst_jifan_mahou"),
				filterCard:true,
				selectCard:[1,3],
				position:"he",
				content:()=>{
					player.storage.sst_jifan_mahou=[cards.length,cards.length];
					player.addTempSkill("sst_jifan_mahou",{player:"die"});
					game.delayx();
				},
				check:card=>{
					const player=_status.event.player;
					let val=6-get.useful(card);
					if(player.needsToDiscard()-ui.selected.cards.filter(i=>get.position(i)=="h"&&game.checkMod(i,player,false,"ignoredHandcard",player)!=true)>0&&get.position(card)=="h"&&game.checkMod(card,player,false,"ignoredHandcard",player)!=true) val+=5;
					return val;
				},
				ai:{
					order:1,
					result:{
						player:1
					}
				},
				subSkill:{
					mahou:{
						trigger:{global:"phaseEnd"},
						forced:true,
						popup:false,
						charlotte:true,
						content:()=>{
							"step 0"
							const list=player.storage.sst_jifan_mahou;
							list[1]--;
							if(list[1]==0){
								event.num=list[0];
								game.log(player,"的“羇帆”魔法生效");
								player.removeSkill("sst_jifan_mahou");
								player.chooseTarget("羇帆：你可以令至多"+get.cnNumber(5-event.num)+"名角色摸"+get.cnNumber(event.num)+"张牌（手牌数大于手牌上限的角色少摸一张牌）",[1,5-event.num]).set("ai",target=>get.attitude(_status.event.player,target));
							}
							else{
								game.log(player,"的“羇帆”魔法剩余","#g"+(list[1])+"回合");
								player.markSkill("sst_jifan_mahou");
								event.finish();
							}
							"step 1"
							if(result.targets&&result.targets.length){
								event.targets=result.targets.sortBySeat(_status.currentPhase);
								player.logSkill("sst_jifan",event.targets);
							}
							else{
								event.finish();
							}
							"step 2"
							const asyncDraw=[];
							targets.forEach(current=>{
								let draw=num;
								if(current.countCards()>current.getHandcardLimit()) draw--;
								asyncDraw.push(draw);
							});
							game.asyncDraw(targets,asyncDraw);
							"step 3"
							game.delayx();
						},
						ai:{
							expose:0.2
						},
						mark:true,
						onremove:true,
						marktext:"♗",
						intro:{
							name:"施法：羇帆",
							markcount:storage=>{
								if(storage) return storage[1];
								return 0;
							},
							content:storage=>{
								if(storage) return "经过"+storage[1]+"个“回合结束时”后，可以令至多"+get.cnNumber(5-storage[0])+"名角色摸"+get.cnNumber(storage[0])+"张牌（手牌数大于手牌上限的角色少摸一张牌）";
								return "未指定施法效果";
							}
						}
					}
				}
			},
			//Roy
			sst_nuyan:{
				direct:true,
				trigger:{player:"useCard"},
				filter:event=>_status.mougong_buff.contains(get.name(event.card)),
				content:()=>{
					"step 0"
					player.chooseToDiscard(get.prompt2(event.name),card=>get.color(card)=="red","he").set("ai",card=>{
						if(get.tag(card,"fireDamage")) return get.unuseful3(card);
						const evt=_status.event.getTrigger();
						const cardName=get.name(evt.card);
						if(cardName=="sha"||cardName=="juedou"||cardName=="huogong"||cardName=="tao") return evt.targets.filter(target=>{
							if(cardName=="sha"&&!target.mayHaveShan()) return false;
							if(cardName=="tao"&&target.hp+evt.baseDamage+1>target.maxHp) return false;
							return true;
						}).map(target=>get.effect(target,evt.card,evt.player,player)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/evt.targets.length-get.useful(card);
						const sha=evt.getParent(2);
						if(!sha||sha.name!="sha"||sha.shanRequired<2) return false;
						return 5-get.useful(card);
					}).set("logSkill",event.name);
					"step 1"
					if(result.cards&&result.cards.length){
						event.cards=result.cards;
						const cardName=get.name(trigger.card);
						if(cardName=="sha"){
							const map=trigger.customArgs;
							game.filterPlayer2(current=>{
								const id=current.playerid;
								if(!map[id]) map[id]={};
								if(typeof map[id].shanRequired=="number"){
									map[id].shanRequired++;
								}
								else{
									map[id].shanRequired=2;
								}
							});
						}
						else if(cardName=="shan"){
							const evt=trigger.getParent(2);
							if(evt&&evt.name=="sha") evt.shanRequired--;
						}
						else if(cardName=="juedou"){
							if(typeof trigger.th_anger!="object") trigger.th_anger={};
							if(typeof trigger.th_anger[trigger.player.playerid]!="number") trigger.th_anger[trigger.player.playerid]=0;
							trigger.th_anger[trigger.player.playerid]++;
						}
						else if(cardName=="huogong"||cardName=="tao"){
							trigger.baseDamage++;
						}
						player.popup(cardName,"fire");
						game.log(player,"强化了",trigger.card);
					}
					else{
						event.finish();
					}
					"step 2"
					if(cards.filter(card=>get.tag(card,"fireDamage")).length){
						player.chooseTarget("怒炎：你可以对一名角色造成1点火焰伤害").set("ai",target=>get.damageEffect(target,player,player,"fire"));
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"fire");
						result.targets[0].damage(player,"nocard");
						player.addExpose(0.2);
					}
				},
				ai:{
					damage:true
				}
			},
			//Sans
			sst_yebao:{
				trigger:{source:"damageBegin2"},
				filter:(event,player)=>event.player!=player&&!event.player.getAllHistory("useCard",evt=>get.name(evt.card)=="sha").length,
				forced:true,
				logTarget:"player",
				content:()=>{
					trigger.cancel();
				},
				ai:{
					effect:{
						player:(card,player,target)=>{
							if(get.tag(card,"damage")&&target!=player&&!target.getAllHistory("useCard",evt=>get.name(evt.card)=="sha").length) return "zeroplayertarget";
						}
					}
				},
				group:"sst_yebao2"
			},
			sst_yebao2:{
				trigger:{global:"damageEnd"},
				filter:(event,player)=>event.player!=player&&event.source==player&&event.player.isIn()&&event.player.getDamagedHp(),
				forced:true,
				logTarget:"player",
				content:()=>{
					trigger.player.addSkill("sst_yebao_effect");
					trigger.player.storage.sst_yebao_effect.push(trigger.player.getDamagedHp());
					trigger.player.markSkill("sst_yebao_effect");
				},
				ai:{
					effect:{
						player:(card,player,target)=>{
							if(get.tag(card,"damage")&&target!=player&&get.attitude(player,target)>0) return [1,-10];
						}
					}
				}
			},
			sst_yebao_effect:{
				charlotte:true,
				locked:true,
				mark:true,
				init:player=>{
					if(!Array.isArray(player.storage.sst_yebao_effect)) player.storage.sst_yebao_effect=[];
				},
				intro:{
					name:"业报",
					content:storage=>{
						let str="";
						storage.forEach((phase,i)=>{
							str+="接下来"+get.cnNumber(phase)+"个回合的回合结束时弃置一张牌";
							if(i<storage.length-1) str+="<br>";
						});
						return str;
					},
					markcount:storage=>storage.reduce((previousValue,currentValue)=>previousValue+currentValue,0)
				},
				onremove:true,
				trigger:{global:"phaseEnd"},
				direct:true,
				content:()=>{
					for(let i=0;Array.isArray(player.storage.sst_yebao_effect)&&i<player.storage.sst_yebao_effect.length;i++){
						player.storage.sst_yebao_effect[i]--;
						if(player.storage.sst_yebao_effect[i]<=0) player.storage.sst_yebao_effect.splice(i--,1);
						player.markSkill("sst_yebao_effect");
						if(!player.storage.sst_yebao_effect.length) player.removeSkill("sst_yebao_effect");
						player.chooseToDiscard("业报：弃置一张牌","he",true).set("logSkill","sst_yebao_effect");
					}
				}
			},
			sst_juexin:{
				dutySkill:true,
				forced:true,
				trigger:{player:"changeHp"},
				filter:event=>event.num<0,
				content:()=>{
					"step 0"
					event.count=-trigger.num;
					"step 1"
					event.count--;
					player.chooseTarget("决心：令一名角色判定并获得判定牌，若判定结果大于游戏轮数，你回复1点体力",true).set("ai",target=>get.sgnAttitude(_status.event.player,target));
					"step 2"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.line(event.target,"green");
						event.target.judge(card=>{
							if(get.number(card)>game.roundNumber) return 2;
							return -2;
						}).set("callback",()=>{
							if(get.position(card,true)=="o") event.getParent(2).target.gain(card,"gain2");
						});
						player.addExpose(0.2);
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.bool&&player.getDamagedHp()) player.recover("nocard");
					"step 4"
					if(event.count>0){
						player.logSkill(event.name);
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					maiHp:true,
					threaten:0.25
				},
				group:"sst_juexin_fail",
				subSkill:{
					fail:{
						skillAnimation:true,
						animationColor:"fire",
						trigger:{global:"phaseJieshuBegin"},
						filter:(event,player)=>event.player.hasAllHistory("damage",evt=>evt.source==player)&&event.player.getAllHistory("useCard",evt=>get.name(evt.card)=="sha").length>game.players.length&&lib.filter.targetEnabled({name:"sha"},player,event.player)&&event.player.isIn(),
						forced:true,
						logTarget:"player",
						content:()=>{
							"step 0"
							game.log(player,"使命失败");
							player.awakenSkill("sst_juexin");
							event.cards=[];
							event.targets=[player,trigger.player].sortBySeat(_status.currentPhase);
							event.targets.forEach(current=>event.cards.addArray(current.getCards("he",card=>lib.filter.cardEnabled(card,player))));
							if(!event.cards.length) event.finish();
							"step 1"
							const card=cards.shift();
							const owner=get.owner(card);
							if(owner&&targets.contains(owner)){
								if(trigger.player.isIn()){
									if(owner!=player) owner.lose(card,ui.special);
									player.useCard({name:"sha"},[card],trigger.player,false);
									if(cards.length) event.redo();
								}
							}
							else{
								if(cards.length) event.redo();
							}
						}
					}
				}
			},
			//R.O.B.
			sst_yinbao:{
				hiddenSkill:true,
				forced:true,
				trigger:{player:"showCharacterEnd"},
				logTarget:()=>game.filterPlayer().sortBySeat(_status.currentPhase),
				content:()=>{
					"step 0"
					event.targets=lib.skill.sst_yinbao.logTarget();
					"step 1"
					if(targets.length){
						event.target=targets.shift();
						if(!event.target.isIn()) event.redo();
					}
					else{
						event.finish();
					}
					"step 2"
					const next=target.chooseToRespond("引爆：打出一张闪，否则受到"+get.translation(player)+"造成的1点伤害",{name:"shan"});
					next.set("ai",card=>{
						const evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
						if(evt.target.hasSkillTag("noShan")) return -1;
						return get.order(card);
					});
					next.autochoose=lib.filter.autoRespondShan;
					"step 3"
					if(result.bool==false) target.damage("nocard");
					event.goto(1);
				}
			},
			sst_zhuxin:{
				trigger:{player:"changeHp"},
				filter:event=>event.num<0,
				check:(event,player)=>player.maxHp>-event.num&&player.getDamagedHp(),
				content:()=>{
					"step 0"
					player.loseMaxHp(-trigger.num);
					player.changeHujia(-trigger.num);
					event.targets=[];
					event.num=0;
					"step 1"
					if(player.hujia){
						const controls=["cancel2"];
						for(let i=1;i<=player.hujia;i++){
							controls.push(i.toString());
						}
						player.chooseControl(controls).set("prompt","铸心：你可以将任意点护甲分配给其他角色，分配完成后获得被分配角色区域内共计等量的牌").set("ai",()=>game.hasPlayer(current=>current!=_status.event.player&&get.attitude(_status.event.player,current)+lib.card.shunshou.ai.result.target(_status.event.player,current)>0)?1:0);
					}
					else{
						event.goto(4);
					}
					"step 2"
					if(result.index){
						event.distribution=result.index;
						event.num+=event.distribution;
						player.chooseTarget("铸心：分配给一名其他角色"+event.distribution+"点护甲，分配完成后获得被分配角色区域内共计等量的牌",lib.filter.notMe,true).set("ai",target=>get.attitude(_status.event.player,target)+lib.card.shunshou.ai.result.target(_status.event.player,target));
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.targets&&result.targets.length){
						event.targets.addArray(result.targets);
						player.line(result.targets,"green");
						player.changeHujia(-event.distribution);
						game.log(player,"失去了"+get.cnNumber(event.distribution)+"点护甲");
						result.targets[0].changeHujia(event.distribution);
						player.addExpose(0.1);
					}
					event.goto(1);
					"step 4"
					event.targets=event.targets.filter(target=>target.countGainableCards(player,"hej"));
					if(event.targets.length&&event.num>0){
						player.chooseTarget("铸心：获得"+get.translation(event.targets)+"区域内共计"+get.cnNumber(event.num)+"张牌",(card,player,target)=>_status.event.getParent().targets.contains(target)&&target.countGainableCards(_status.event.player,"hej"),true).set("ai",target=>lib.card.shunshou.ai.result.target(_status.event.player,target));
					}
					else{
						event.finish();
					}
					"step 5"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"fire");
						player.gainPlayerCard("铸心：获得"+get.translation(result.targets[0])+"区域内至多"+get.cnNumber(event.num)+"张牌",result.targets[0],[1,event.num],"hej",true);
					}
					else{
						event.goto(4);
					}
					"step 6"
					if(result.cards&&result.cards.length){
						event.num-=result.cards.length;
						player.addExpose(0.1);
					}
					event.goto(4);
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					maixie_defend:true,
					maiHp:true
				}
			},
			//Snake
			sst_qianlong:{
				ignoreMod:true,
				enable:"phaseUse",
				usable:1,
				filterCard:true,
				position:"hes",
				viewAs:{name:"sha",isCard:true},
				viewAsFilter:player=>{
					if(!player.countCards("hes")) return false;
				},
				check:card=>{
					if(get.name(card)=="du") return 20;
					if(get.name(card)=="sha") return 10;
					return 5-get.value(card);
				},
				precontent:()=>{
					if(Array.isArray(event.result.card.cards)&&event.result.card.cards.length){
						event.result.card.cards.length=0;
					}
					else{
						event.result.card.cards=[];
					}
					delete event.result.card.suit;
					delete event.result.card.number;
				},
				ai:{
					respondSha:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.isPhaseUsing()) return false;
					},
					order:()=>get.order({name:"sha"})+0.3
				},
				group:"sst_qianlong2"
			},
			sst_qianlong2:{
				trigger:{player:"useCardBegin"},
				silent:true,
				filter:event=> event.skill=="sst_qianlong",
				content:()=>{
					"step 0"
					event.cards=trigger.cards.slice(0);
					trigger.cards.length=0;
					trigger.throw=false;
					/*
					let next=game.createEvent("sst_qianlong_use");
					event.next.remove(next);
					trigger.next.push(next);
					next.player=player;
					next.cards=event.cards;
					next.setContent(()=>{
						player.lose(cards,ui.special).set("type","use");
						player.$throw(cards.length);
					});
					*/
					player.lose(event.cards,ui.special);
					player.$throw(event.cards.length);
					"step 1"
					const next=game.createEvent("sst_qianlong_clear");
					event.next.remove(next);
					trigger.after.push(next);
					next.player=player;
					next.card=trigger.card;
					next.cards=cards;
					next.setContent(lib.skill.sst_qianlong2.contentx);
				},
				contentx:()=>{
					"step 0"
					game.cardsGotoOrdering(cards);
					let history;
					const players=game.filterPlayer();
					let bool=false;
					for(const current of players){
						history=current.getHistory("sourceDamage",evt=>evt.card==card);
						if(history.length==1){
							event.target=history[0].player;
							const translateTargets=targets=>{
								if(get.itemtype(targets)=="player") targets=[targets];
								let str="";
								if(targets[0]==player){
									str="自己";
									if(targets.length>1){
										str+="、";
										str+=get.translation(targets.slice(1));
									}
								}
								else{
									str=get.translation(targets);
								}
								return str;
							};
							player.showCards(cards,get.translation(player)+"对"+translateTargets(event.target)+"发动了【潜龙】");
							bool=true;
							break;
						}
					}
					if(!bool) event.finish();
					"step 1"
					cards.forEach(i=>{
						if(target.isIn()&&lib.filter.targetEnabled3(i,player,target)) player.useCard(i,target,false,"noai");
					});
				}
			},
			sst_dieying:{
				hiddenSkill:true,
				direct:true,
				trigger:{player:"showCharacterEnd"},
				filter:(event,player)=>game.hasPlayer(current=>current.countGainableCards(player,"ej")),
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_dieying"),(card,player,target)=>target.countGainableCards(player,"ej")).set("ai",target=>{
						const shunshou=(player,target)=>{
							if(get.attitude(player,target)<=0) return (target.hasCard(card=>get.value(card,target)>0&&card!=target.getEquip("jinhe"),"e")>0)?-1.5:1.5;
							return (target.hasCard(card=>{
								if(get.position(card)=="e") return get.value(card,target)<=0;
								const cardj=card.viewAs?{name:card.viewAs}:card;
								return get.effect(target,cardj,target,player)<0;
							},"ej"))?1.5:-1.5;
						};
						const player=_status.event.player;
						let att=get.attitude(player,target);
						if(att<0){
							att=-Math.sqrt(-att);
						}
						else{
							att=Math.sqrt(att);
						}
						return att*shunshou(player,target);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_dieying",result.targets);
						player.gainPlayerCard("谍影：获得"+get.translation(result.targets[0])+"场上一张牌",result.targets[0],"ej",true);
					}
				},
				ai:{
					expose:0.2
				}
			},
			//Sheik
			sst_nixing:{
				filter:event=>event.targets&&event.targets.length>1,
				forced:true,
				trigger:{target:"useCardToTarget"},
				content:()=>{
					trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:card=>{
							if(card.name=="tiesuo") return [0,0];
							if(card.name=="yihuajiemu") return [0,1];
							if(get.tag(card,"multitarget")) return [0,2];
						}
					}
				}
			},
			sst_shouyin:{
				trigger:{player:"useCardAfter"},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_shouyin"),lib.filter.notMe).set("ai",target=>get.sgnAttitude(_status.event.player,target)*Math.max(0.5,target.countCards("h",card=>get.type2(card)==get.type2(_status.event.getTrigger().card))));
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_shouyin",result.targets);
						event.target=result.targets[0];
						event.chooseToUse=event.target.chooseToUse("授音：你可以使用一张"+get.translation(get.type(trigger.card,"trick"))+"牌",function(card){
							if(get.type2(card)!=get.type2(_status.event.cardx)) return false;
							return lib.filter.filterCard.apply(this,arguments);
						}).set("addCount",false).set("cardx",trigger.card);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result&&trigger.targets&&result.targets&&trigger.targets.length==1&&result.targets.length==1&&trigger.targets[0]==result.targets[0]){
						player.draw();
					}
					else if(!event.target.hasHistory("useCard",evt=>{
						const parent=evt.getParent(2);
						return parent&&parent.name=="chooseToUse"&&parent==event.chooseToUse;
					})) game.delayx();
				},
				ai:{
					expose:0.2
				}
			},
			sst_anzong:{
				hiddenSkill:true,
				forced:true,
				trigger:{player:"showCharacterEnd"},
				filter:()=>_status.currentPhase.isIn(),
				logTarget:()=>_status.currentPhase,
				content:()=>{
					lib.skill.sst_anzong.logTarget().addSkill(event.name+"_effect");
					game.delayx();
				}
			},
			sst_anzong_effect:{
				charlotte:true,
				init:(player,skill)=>{
					player.storage[skill]=player.dieAfter2;
					game.broadcastAll((player,dieAfter2)=>player.dieAfter2=dieAfter2,player,source=>{
						if(source) source.draw(3);
					});
				},
				mark:true,
				intro:{
					content:"杀死你执行的奖惩为：<span style=\"font-family: LXGWWenKai\">杀死你的角色摸三张牌</span>",
					markcount:()=>3
				},
				onremove:(player,skill)=>{
					game.broadcastAll((player,dieAfter2)=>player.dieAfter2=dieAfter2,player,player.storage[skill]);
					delete player.storage[skill];
				}
			},
			//Inkling
			sst_xumo:{
				hiddenSkill:true,
				forced:true,
				trigger:{player:"showCharacterEnd"},
				content:()=>{
					player.draw(3);
				}
			},
			sst_pentu:{
				delay:false,
				enable:"phaseUse",
				usable:1,
				filterCard:true,
				filterTarget:true,
				check:card=>5-get.value(card),
				discard:false,
				lose:true,
				losetrigger:false,
				content:()=>{
					const sst_ink=game.createCard3("sst_ink","","","",["sst_inkling"]);
					sst_ink.cards=cards;
					game.broadcast((sst_ink,cards)=>sst_ink.cards=cards,sst_ink,sst_ink.cards);
					const next=game.createEvent("_yongjian_zengyu");
					next.player=player;
					next.target=target;
					next.cards=[sst_ink];
					next.setContent(lib.skill._yongjian_zengyu.content);
				},
				ai:{
					order:()=>get.order({name:"sst_ink"})+0.1,
					result:{
						target:(player,target)=>{
							if(target.getEquip("sst_ink")) return 0;
							const card={name:"sst_ink",cards:ui.selected.cards};
							if(!card||target.hasSkillTag("refuseGifts")) return 0;
							return get.effect(target,card,target,target);
						}
					}
				}
			},
			_sst_pentu_effect:{
				charlotte:true,
				forceDie:true,
				firstDo:true,
				silent:true,
				trigger:{player:"loseBegin"},
				filter:event=>{
					if(!event.cards||!event.cards.length) return false;
					for(const card of event.cards){
						if(card.cards&&get.name(card)=="sst_ink") return true;
					}
					return false;
				},
				content:()=>{
					trigger.cards.filter(card=>card.cards&&get.name(card)=="sst_ink").forEach(sst_ink=>{
						sst_ink.cards.forEach(i=>{
							player.node.equips.appendChild(i);
							i.parentNode.classList.add("equips");
						});
						const modify=cards=>{
							const index=cards.indexOf(sst_ink);
							const before=[],after=[];
							if(index>0){
								before.push(...cards.slice(0,index-1));
							}
							if(index<cards.length-1){
								after.push(...cards.slice(index+1));
							}
							return before.concat(sst_ink.cards,after);
						};
						const modified=modify(trigger.cards);
						trigger.cards.length=0;
						trigger.cards.push(...modified);
						const evt=trigger.getParent();
						if(evt&&["lose","useCard","discard","loseToDiscardpile","respond","equip","addJudge","gain","loseAsync","addToExpansion"].contains(evt.name)&&evt.cards){
							const modified2=modify(evt.cards);
							evt.cards.length=0;
							evt.cards.push(...modified2);
							if(["useCard","respond"].contains(evt.name)&&evt.card.cardid==sst_ink.cardid) evt.card=get.autoViewAs(sst_ink.cards[0],sst_ink.cards);
						}
						const evt2=trigger.getParent(2);
						if(evt2&&["lose","useCard","discard","loseToDiscardpile","respond","equip","addJudge","gain","loseAsync","addToExpansion"].contains(evt2.name)&&evt2.cards){
							const modified2=modify(evt2.cards);
							evt2.cards.length=0;
							evt2.cards.push(...modified2);
							if(["useCard","respond"].contains(evt2.name)&&evt2.card&&evt2.card.cardid==sst_ink.cardid) evt2.card=get.autoViewAs(sst_ink.cards[0],sst_ink.cards);
						}
						delete sst_ink.cards;
						sst_ink._destroy=true;
						game.broadcast(sst_ink=>{
							delete sst_ink.cards;
							sst_ink._destroy=true;
						},sst_ink);
						player.lose(sst_ink).set("_triggered",null);
					});
				}
			},
			//Wii Fit Trainer
			sst_zuoxi:{
				direct:true,
				trigger:{player:"phaseUseBegin"},
				filter:(event,player)=>!player.hasSkill("zhengsu"),
				content:()=>{
					"step 0"
					player.chooseButton([get.prompt2("sst_zuoxi"),[["zhengsu_leijin","zhengsu_bianzhen","zhengsu_mingzhi"],"vcard"]]).set("ai",lib.skill.sst_zuoxi.zhengsuAi);
					"step 1"
					if(result.links&&result.links.length){
						player.logSkill("sst_zuoxi");
						const name=result.links[0][2];
						player.addTempSkill("zhengsu",{player:"phaseDiscardAfter"});
						player.addTempSkill(name,{player:"phaseDiscardAfter"});
						player.popup(name,"thunder");
						game.delayx();
					}
				},
				zhengsuAi:button=>{
					const player=_status.event.player;
					if(button.link[2]=="zhengsu_leijin"){
						const cards=player.getCards("hs",card=>lib.filter.cardEnabled(card,player)).sort((a,b)=>get.number(a)-get.number(b));
						for(let i=1;i<cards.length;i++){
							if(get.number(cards[i])==get.number(cards[i-1])) cards.splice(i--,1);
						}
						if(cards.length<3) return 0;
						return cards.length-2;
					}
					if(button.link[2]=="zhengsu_bianzhen"){
						const statistic={};
						player.getCards("hs",card=>lib.filter.cardEnabled(card,player)).forEach(card=>{
							const suit=get.suit(card);
							if(typeof statistic[suit]=="undefined") statistic[suit]=0;
							statistic[suit]++;
						});
						const num=Math.max(...Object.values(statistic));
						if(num<2) return 0;
						return num;
					}
					if(button.link[2]=="zhengsu_mingzhi"){
						const statistic={};
						player.getCards("h",card=>lib.filter.cardDiscardable(card,player)).forEach(card=>{
							const suit=get.suit(card);
							if(typeof statistic[suit]=="undefined") statistic[suit]=true;
						});
						const needsToDiscard=player.needsToDiscard();
						if(needsToDiscard<2) return 0;
						const num=Object.keys(statistic).length;
						if(num<2) return 0;
						return Math.min(needsToDiscard,num)-1;
					}
					return 0;
				},
				group:"sst_zuoxi2"
			},
			sst_zuoxi2:{
				direct:true,
				trigger:{player:["drawAfter","recoverAfter"]},
				filter:event=>event.getParent(2).name=="zhengsu",
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_zuoxi2"),"你可以令一名其他角色于其下个出牌阶段开始时“整肃”",lib.filter.notMe).set("ai",target=>Math.max(get.effect(target,{name:"wuzhong"},target,_status.event.player),get.recoverEffect(target,target,_status.event.player)));
					"step 1"
					if(result.bool){
						const target=result.targets[0];
						player.logSkill("sst_zuoxi2",target);
						target.addSkill("sst_zuoxi_effect");
						game.delayx();
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_zuoxi_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"下个出牌阶段开始时“整肃”"
				},
				forced:true,
				popup:false,
				trigger:{player:"phaseUseBegin"},
				filter:(event,player)=>!player.hasSkill("zhengsu"),
				content:()=>{
					"step 0"
					player.removeSkill("sst_zuoxi_effect");
					player.chooseButton(["作息：选择整肃类型",[["zhengsu_leijin","zhengsu_bianzhen","zhengsu_mingzhi"],"vcard"]],true).set("ai",lib.skill.sst_zuoxi.zhengsuAi);
					"step 1"
					if(result.links&&result.links.length){
						const name=result.links[0][2];
						game.log(player,"开始","#g【整肃】");
						player.addTempSkill("zhengsu",{player:"phaseDiscardAfter"});
						player.addTempSkill(name,{player:"phaseDiscardAfter"});
						player.popup(name,"thunder");
						game.delayx();
					}
				}
			}
		},
		dynamicTranslate:{
			sst_wenxin:player=>{
				if(player.storage.sst_wenxin){
					if(player.storage.sst_wenxin_alter) return "结束阶段，你可以弃置至少一张手牌并依次弃置场上等量的红色牌，然后展示手牌并摸等同于你弃置黑色牌数量的牌。";
					return "结束阶段，你可以弃置至少一张手牌并依次弃置场上等量的牌，然后展示手牌并摸等同于你弃置黑色牌数量的牌。";
				}
				return "使命技。结束阶段，你可以弃置至少一张手牌并依次弃置场上等量的牌，然后展示手牌并摸等同于你弃置黑色牌数量的牌。<br>\
					成功：若以此法连续两次展示的手牌均为红色，此技能改为非使命技，你取消弃牌阶段。<br>\
					失败：以此法展示三次手牌后，此技能改为非使命技，“场上等量的牌”改为“场上等量的红色牌”。";
			}
		},
		characterReplace:{},
		translate:{
			//Civil War mode reference
			_guozhan_marks:"标记",
			_guozhan_marks_backup:"标记",
			xianqu_mark:"先驱",
			//Soldier
			shibing1sst_light:"士兵",
			shibing2sst_light:"士兵",
			shibing1sst_dark:"士兵",
			shibing2sst_dark:"士兵",
			shibing1sst_spirit:"士兵",
			shibing2sst_spirit:"士兵",
			shibing1sst_reality:"士兵",
			shibing2sst_reality:"士兵",
			shibing1sst_smash:"士兵",
			shibing2sst_smash:"士兵",
			//Character
			sst_pyra_mythra:"焰／光",
			sst_9_volt_18_volt:"九伏特＆十八伏特",
			sst_claude:"库罗德",
			sst_geno:"♡♪!?",
			sst_duck_hunt:"打猎",
			sst_ness:"奈斯",
			sst_chrom:"库洛姆",
			sst_lucina:"露琪娜",
			sst_robin:"鲁弗莱",
			sst_paipai:"派派",
			sst_bandana_waddle_dee:"头巾瓦豆鲁迪",
			sst_magolor:"魔法洛亚",
			sst_roy:"罗伊",
			sst_sans:"Sans",
			sst_r_o_b:"机器人",
			sst_snake:"Snake",
			sst_sheik:"希克",
			sst_inkling:"鱿鱼",
			sst_wii_fit_trainer:"Wii Fit教练",
			//Character ab.
			sst_9_volt_18_volt_ab:"九伏十八伏",
			sst_geno_ab:"Geno",
			sst_bandana_waddle_dee_ab:"瓦豆鲁迪",
			sst_snake_ab:"固蛇",
			sst_wii_fit_trainer_ab:"瑜伽教练",
			//Skill
			sst_xuanyi:"炫奕",
			sst_xuanyi_info:"转换技，出牌阶段限一次，你可以与①一名角色②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰②雷电伤害。",
			sst_fuxin:"付心",
			sst_fuxin_info:"出牌阶段，你可以移除此武将牌，然后将此武将牌视为攻击范围3的武器牌加入游戏并交给一名其他角色。该角色的准备阶段，若这张牌不在其区域内，其可以检索并获得这张牌。",
			sst_fuxin_card:"付心",
			sst_fuxin_card_info:"准备阶段，若【天之圣杯】不在你区域内，你可以检索并获得【天之圣杯】。",
			sst_tanfen:"贪分",
			sst_tanfen_info:"摸牌阶段，若你的手牌数小于手牌上限，你可以放弃摸牌，改为声明一种花色，然后重复亮出并获得牌堆顶的牌，直到你以此法获得了你所声明花色的牌。",
			sst_sutong:"速通",
			sst_sutong_info:"结束阶段，若你没有“先驱”标记，且本回合使用牌数量不大于手牌数，你可以获得一个“先驱”标记。",
			sst_yunchou:"运筹",
			sst_yunchou_info:"若你使用的牌具有应变效果，你可以令此牌允许满足任意一种应变条件。",
			sst_guimou:"鬼谋",
			sst_guimou_info:"每回合限一次，若你使用的牌具有应变效果，你可以任意指定此牌的应变效果。",
			sst_fuyuan:"复愿",
			sst_fuyuan_effect:"复愿",
			sst_fuyuan_info:"一名角色的准备阶段，你可以展示牌堆顶一张牌，然后你可以重铸一张牌，令其本回合下次造成伤害后再次结算此伤害。若这两张牌点数相同，你令其一个限定技视为未发动过。",
			sst_doujiang:"斗降",
			sst_doujiang_info:"隐匿技，限定技，出牌阶段，你可以弃置至少一张牌，然后亮出牌堆顶等量牌且可以使用之（无距离限制且应变效果直接生效）。",
			sst_gonglie:"共猎",
			sst_gonglie_info:"你使用【杀】可以为其附加「助战→目标+1」应变效果；然后若有人响应〖助战〗且【杀】造成了伤害，其可以获得受到此【杀】伤害的角色一张牌。",
			sst_weishou:"围狩",
			sst_weishou2:"围狩",
			sst_weishou_info:"一名其他角色因响应〖助战〗而弃置时，可以改为将牌交给你。",
			sst_wenxin:"问心",
			sst_wenxin_effect:"问心",
			sst_wenxin_info:"使命技。结束阶段，你可以弃置至少一张手牌并依次弃置场上等量的牌，然后展示手牌并摸等同于你弃置黑色牌数量的牌。<br>\
				成功：若以此法连续两次展示的手牌均为红色，此技能改为非使命技，你取消弃牌阶段。<br>\
				失败：以此法展示三次手牌后，此技能改为非使命技，“场上等量的牌”改为“场上等量的红色牌”。",
			sst_niming:"逆命",
			sst_niming_info:"一名角色的判定牌生效前，你可以用牌堆顶的一张牌代替判定牌。",
			sst_cuifeng:"摧锋",
			sst_cuifeng2:"摧锋",
			sst_cuifeng_info:"准备阶段，你可以判定，然后将此判定牌当作【杀】使用：若此【杀】为红色，你回复1点体力；若为黑色，你弃置两张牌，或受到1点伤害令此【杀】伤害值基数+1（背水：令此【杀】不可被响应）。",
			sst_suxing:"溯行",
			sst_suxing_info:"锁定技，每轮游戏开始时，若上一轮至少一名角色失去过所有手牌，你执行一个额外的回合。",
			sst_shengyi:"圣裔",
			sst_shengyi_info:"觉醒技，结束阶段，若你已发动过〖溯行〗，你减1点体力上限，然后获得技能〖寒芒〗〖摧锋〗。",
			sst_zuozhan:"佐战",
			sst_zuozhan_info:"一名角色受到伤害时，你可以将〖军策〗交给其。因此失去〖军策〗的角色摸两张牌。",
			sst_junce:"军策",
			sst_junce_info:"当你受到伤害后，你可以摸一张牌或获得一张额外智囊。背水：弃置所有手牌。",
			sst_aoshang:"傲上",
			sst_aoshang2:"傲上",
			sst_aoshang_info:"锁定技，你使用的牌不能被点数大于此牌的牌响应且拥有「空巢→回复1点体力」应变效果。",
			sst_lianxia:"怜下",
			sst_lianxia_info:"出牌阶段限一次，你可以将一张牌交给一名手牌数小于你的角色，然后手牌数最多的角色依次交给你一张牌（若为你则无需交给牌）。",
			sst_zhoudu:"骤笃",
			sst_zhoudu_init:"骤笃",
			sst_zhoudu_info:"游戏开始时，你将11张【刺枪】加入牌堆；你使用【刺枪】无距离限制；当你的♠牌正面向上离开你的区域后，你可以将一张牌当作【刺枪】使用。",
			sst_mengchen:"盟谌",
			sst_mengchen_info:"当你受到1点伤害后，你可以与一名角色依次摸一张牌并弃置一张牌，然后其可以使用以此法弃置的牌中的一张牌。",
			sst_miulu:"谬陆",
			sst_miulu2:"谬陆",
			sst_miulu_effect:"谬陆",
			sst_miulu_info:"锁定技，若你有护甲，你最多受到1点伤害；每当你失去1点护甲，你明置一张暗置手牌，且本局游戏你的手牌上限+1；你的明置手牌不计入上限。",
			sst_jifan:"羇帆",
			sst_jifan_info:"出牌阶段限一次，你可以弃置X张牌并施法：可以令至多5-X名角色摸X张牌（手牌数大于手牌上限的角色少摸一张牌）。",
			sst_nuyan:"怒炎",
			sst_nuyan_info:"当你使用可以被怒气强化的牌时，你可以弃置一张红色牌强化之，然后若弃置的牌可以造成火焰伤害，你可以对一名角色造成1点火焰伤害。",
			sst_yebao:"业报",
			sst_yebao2:"业报",
			sst_yebao_effect:"业报",
			sst_yebao_info:"锁定技，当你对一名其他角色造成伤害时，若其未使用过【杀】，你防止此伤害；当一名其他角色受到你造成的伤害后，其于此后X个回合的回合结束时弃置一张牌。（X为其已损失的体力值）",
			sst_juexin:"决心",
			sst_juexin_info:"使命技。当你扣减1点体力时，你令一名角色判定并获得判定牌，若判定结果大于游戏轮数，你回复1点体力。<br>\
				失败：一名受到过你造成的伤害的角色的结束阶段，若其使用过【杀】的数量大于存活角色数，你将你与其所有牌依次当作【杀】对其使用。",
			sst_yinbao:"引爆",
			sst_yinbao_info:"隐匿技，锁定技，当你登场时，所有角色须打出一张闪，否则受到你造成的1点伤害。",
			sst_zhuxin:"铸心",
			sst_zhuxin_info:"当你扣减体力时，你可以将等量体力上限变为护甲，然后你可以将任意点护甲分配给其他角色，并获得这些角色区域内共计等量的牌。",
			sst_qianlong:"潜龙",
			sst_qianlong_info:"出牌阶段限一次，你可以将一张牌背面朝上当作【杀】使用，然后若此【杀】仅对一名角色造成了伤害，你亮出此牌并对该角色使用。",
			sst_dieying:"谍影",
			sst_dieying_info:"隐匿技，当你登场时，你可以获得场上的一张牌。",
			sst_nixing:"匿形",
			sst_nixing_info:"锁定技，你成为牌的目标时，若你不是唯一目标，此牌对你无效。",
			sst_shouyin:"授音",
			sst_shouyin_info:"你使用牌结算后，可以令一名其他角色选择是否使用一张类别相同的牌，若其以此法使用了牌且两张牌目标唯一且相同，你摸一张牌。",
			sst_anzong:"暗踪",
			sst_anzong_effect:"暗踪",
			sst_anzong_info:"隐匿技，锁定技，当你登场时，将杀死当前回合角色执行的奖惩改为：<span style=\"font-family: LXGWWenKai\">杀死其的角色摸三张牌</span>。",
			sst_xumo:"蓄墨",
			sst_xumo_info:"隐匿技，锁定技，当你登场时，摸三张牌。",
			sst_pentu:"喷涂",
			sst_pentu_info:"出牌阶段限一次，你可以将一张手牌背面朝上当作【墨水】〖赠予〗一名角色。",
			sst_zuoxi:"作息",
			sst_zuoxi2:"作息",
			sst_zuoxi_effect:"作息",
			sst_zuoxi_info:"出牌阶段开始时，你可以“整肃”；若你“整肃”成功，你可以令一名其他角色于其下个出牌阶段开始时“整肃”。",
			//Tag
			sst_pyra_mythra_tag:"焰／光",
			yingbian_recover_tag:"(回复)",
			zhinang_tricks_tag:"智囊",
			sst_inkling_tag:"鱿鱼",
			//Sort
			sst_civil_war:"国战",
			sst_response:"应变",
			sst_the_use_of_spies:"用间",
			sst_laying_plans:"始计",
			sst_attack_by_stratagem:"谋攻"
		},
		translateEnglish:{
			//Soldier
			shibing1sst_light:"Soldier",
			shibing2sst_light:"Soldier",
			shibing1sst_dark:"Soldier",
			shibing2sst_dark:"Soldier",
			shibing1sst_spirit:"Soldier",
			shibing2sst_spirit:"Soldier",
			shibing1sst_reality:"Soldier",
			shibing2sst_reality:"Soldier",
			shibing1sst_smash:"Soldier",
			shibing2sst_smash:"Soldier",
			//Character
			sst_pyra_mythra:"Pyra/Mythra",
			sst_9_volt_18_volt:"9-Volt & 18-Volt",
			sst_claude:"Claude",
			sst_geno:"♡♪!?",
			sst_duck_hunt:"Duck Hunt",
			sst_ness:"Ness",
			sst_chrom:"Chrom",
			sst_lucina:"Lucina",
			sst_robin:"Robin",
			sst_paipai:"Paipai",
			sst_bandana_waddle_dee:"Bandana Waddle Dee",
			sst_magolor:"Magolor",
			sst_roy:"Roy",
			sst_sans:"Sans",
			sst_r_o_b:"R.O.B.",
			sst_snake:"Snake",
			sst_sheik:"Sheik",
			sst_inkling:"Inkling",
			sst_wii_fit_trainer:"Wii Fit Trainer"
		},
		help:{
			"乱斗EX":"<div style=\"margin:10px\">\
					背水\
				</div>\
				<ul style=\"margin-top:0\">\
					<li>\
						你执行背水效果后，依次执行上述两项/上述出现的“或”改为“和”\
					</li>\
				</ul>\
				<div style=\"margin:10px\">\
					交给技能\
				</div>\
				<ul style=\"margin-top:0\">\
					<li>\
						交给技能为专属技能\
					</li>\
					<li>\
						理论上，场上只能存在一个交给技能\
					</li>\
					<li>\
						将交给技能交给一名角色前，先前角色失去此交给技能\
					</li>\
				</ul>\
				<div style=\"margin:10px\">\
					使命技\
				</div>\
				<ul style=\"margin-top:0\">\
					<li>\
						本身可包含子技能\
					</li>\
					<li>\
						若满足成功条件，失去此技能，执行成功分支的效果\
					</li>\
					<li>\
						若满足失败条件，失去此技能，执行失败分支的效果\
					</li>\
				</ul>\
				<div style=\"margin:10px\">\
					应变篇\
				</div>\
				<ul style=\"margin-top:0\">\
					<li>\
						派派：专属应变效果\
						<ul style=\"padding-left:20px;padding-top:5px\">\
							<li>\
								回复：回复1点体力\
							</li>\
						</ul>\
					</li>\
				</ul>\
				<div style=\"margin:10px\">\
					怒气强化说明\
				</div>\
				<ul style=\"margin-top:0\">\
					<li>\
						【杀】：消耗1点怒气强化，需要一张强化【闪】或两张【闪】才能抵消\
					</li>\
					<li>\
						【闪】：消耗1点怒气强化，使用时视为两张【闪】的效果\
					</li>\
					<li>\
						【决斗】：消耗2点怒气强化，对目标造成伤害时，伤害+1\
					</li>\
					<li>\
						【火攻】：消耗2点怒气强化，造成的伤害+1\
					</li>\
					<li>\
						【桃】：消耗3点怒气强化，回复的体力+1\
					</li>\
				</ul>"
		}
	};
	if(lib.device||lib.node){
		for(const i in SST_EXTRA.character){
			SST_EXTRA.character[i][4].push("ext:大乱桌斗/image/character/"+i+".png");
		}
	}
	else{
		for(const i in SST_EXTRA.character){
			SST_EXTRA.character[i][4].push("db:extension-大乱桌斗:image/character/"+i+".png");
		}
	}
	return SST_EXTRA;
});