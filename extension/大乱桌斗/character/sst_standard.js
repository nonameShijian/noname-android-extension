"use strict";
game.import("character",(lib,game,ui,get,ai,_status)=>{
	/**
	 * @type {importCharacterConfig}
	 */
	const SST_STANDARD={
		name:"sst_standard",
		connect:true,
		character:{
			sst_mario:["male","sst_light",4,["sst_jueyi"],["type:neutral","primary:10","attack:1,0.125,3","defense:1,0.125,3"]],
			sst_link:["male","sst_light",4,["sst_qingyong"],["type:shield","primary:3,1,30","attack:1","defense:4","feature:若你未受伤，你的攻击×2。"]],
			sst_yoshi:["male","sst_light",4,["sst_tanshi"],["type:grab","primary:1.4","attack:1.6","defense:1.5"]],
			sst_wario:["male","sst_dark",4,["sst_haoduo"],["type:attack"]],
			sst_villager:["male","sst_light",4,["sst_huandai"],["type:grab"]],
			sst_zelda:["female","sst_light",3,["sst_anzhi","sst_yinjie","sst_qinwei"],["zhu","type:shield"]],
			sst_ganondorf:["male","sst_dark",5,["sst_chengli","sst_huoluan","sst_yane"],["zhu","type:attack"]],
			sst_dr_mario:["male","sst_light",4,["sst_quji"],["type:shield"]],
			sst_palutena:["female","sst_light",3,["sst_qiji","sst_shengbing"],["type:attack"]],
			sst_marth:["male","sst_light",4,["sst_hanmang","sst_jianbu","sst_fuguo"],["zhu","type:attack"]],
			sst_rosalina:["female","sst_light",3,["sst_xingchen","sst_zhuansheng"],["type:shield"]],
			sst_zero_suit_samus:["female","sst_light",3,["sst_guangsuo","sst_qingying"],["type:grab"]],
			sst_luigi:["male","sst_light",4,["sst_que","sst_guiyun"],["type:grab","primary:4.2","attack:1.4","defense:1.2"]],
			sst_bowser:["male","sst_dark",5,["sst_xiduo","sst_xiongao","sst_yujun"],["zhu","type:neutral","primary:20","attack:1,0.25,2","defense:1,0.25,2"]],
			sst_peach:["female","sst_light",3,["sst_hongyan","sst_yice","sst_qiuyuan"],["zhu","type:grab"]],
			sst_byleth_female:["female","sst_light",3,["sst_potian","sst_shenjiao"],["type:attack"]],
			sst_byleth_male:["male","sst_light",4,["sst_yanchuan","sst_tianmai"],["type:attack"]],
			sst_massy:["male","sst_reality",5,["sst_shenfa","sst_shenwu"],["type:unknown"]],
			sst_samus:["female","sst_light",4,["sst_qiongtu","sst_juezhan"],["type:shield"]],
			sst_ridley:["male","sst_dark",5,["sst_baozheng","sst_furan"],["type:attack"]],
			sst_dark_samus:["female","sst_dark",3,["sst_yingliu","sst_shunxing"],["type:grab"]],
			sst_mr_game_watch:["male","sst_dark",3,["sst_shenpan"],["type:shield"]],
			sst_mario_not_mary:["male","sst_reality",5,["sst_qixiao","sst_xuansha"],["type:unknown"]],
			sst_yumikohimi:["female","sst_reality",3,["sst_yingji","sst_huxiao"],["type:unknown"]],
			sst_haine:["male","sst_reality",3,["sst_yiqing","sst_mingxi"],["type:unknown"]],
			sst_terry:["male","sst_light",4,["sst_elang","sst_paoxiao"],["type:attack"]],
			sst_simon:["male","sst_dark",4,["sst_shengfa","sst_shengbian"],["type:grab"]],
			sst_incineroar:["male","sst_dark",4,["sst_weihe","sst_fuchou"],["type:attack"]],
			sst_greninja:["male","sst_dark",3,["sst_huanbian","sst_yingxi"],["type:shield"]],
			sst_kirby:["male","sst_light",3,["sst_qushi","sst_xinghuo"],["type:unknown","primary:?,average","attack:?,average","defense:?,average"]],
			sst_king_k_rool:["male","sst_dark",4,["sst_badao","sst_jinjia"],["type:attack"]],
			sst_donkey_kong:["male","sst_light",4,["sst_baochui"],["type:grab"]],
			sst_richter:["male","sst_dark",4,["sst_xuelun","sst_shengxi"],["type:grab"]],
			sst_pokemon_trainer_red:["male","sst_light",4,["sst_xiandu"],["type:attack"]],
			sst_isabelle:["female","sst_light",3,["sst_wenxu","sst_mihu"],["type:grab"]],
			sst_daisy:["female","sst_light",3,["sst_renqing","sst_manchan"],["type:attack"]],
			sst_meta_knight:["male","sst_dark",4,["sst_canyun"],["type:attack"]],
			sst_little_mac:["male","sst_light",2,["sst_douhun","sst_juejing"],["type:attack"]],
			sst_oc:["male","sst_reality",4,["sst_baling"],["type:unknown"]],
			sst_mr_8:["male","sst_reality",3,["sst_yingzi","sst_geliao"],["type:unknown"]],
			sst_dark_link:["male","sst_spirit",4,["sst_jingyue"],["type:shield"]],
			sst_kyuukou:["male","sst_reality",4,["sst_jianxiang","sst_baochao"],["type:unknown"]],
			sst_windier:["female","sst_reality",3,["sst_chixing","sst_chuanxiao"],["type:unknown"]],
			sst_rentianshu:["male","sst_reality",4,["sst_jilve","sst_yuanchuan"],["type:unknown"]],
			sst_srf:["male","sst_reality",3,["sst_diebu","sst_bielian"],["type:unknown"]],
			sst_bowser_jr:["male","sst_dark",3,["sst_guaibi","sst_daonao"],["type:grab"]],
			sst_koopalings:["double","sst_dark",7,["sst_shimo","sst_qiebao","sst_duzhi"],["type:grab"]],
			sst_ryu:["male","sst_light",4,["sst_tandao","sst_bodong"],["type:attack"]],
			sst_ken:["male","sst_light",4,["sst_yanyang","sst_shenglong"],["type:neutral"]],
			sst_waluigi:["male","sst_spirit",4,["sst_zhamou"],["type:neutral"]],
			sst_master_hand:["male","sst_spirit",4,["sst_zhuzai","sst_zhixu"],["zhu","type:neutral"]],
			sst_ike:["male","sst_light",4,["sst_tugu"],["type:attack"]],
			sst_miumiu:["female","sst_reality",3,["sst_qichang","sst_shizhu"],["type:unknown"]],
			sst_toon_link:["male","sst_light",4,["sst_yufeng","sst_chihang"],["type:attack"]],
			sst_wolf:["male","sst_dark",4,["sst_xishou"],["type:attack"]],
			sst_young_link:["male","sst_dark",3,["sst_shishi","sst_jiamian"],["type:grab"]],
			sst_ocarina_of_time_link:["male","sst_light",4,["sst_shisu","sst_yongfeng"],["type:grab","unseen"]],
			sst_spring_man:["male","sst_spirit",4,["sst_shenbi","sst_lanbo"],["type:neutral"]],
			sst_joker:["male","sst_dark",3,["sst_daoxin","sst_fanni"],["type:grab"]],
			sst_rex:["male","sst_spirit",3,["sst_qianban","sst_tanyun"],["type:shield"]],
			sst_cuphead_mugman:["male","sst_spirit",3,["sst_zhuizhai","sst_fanfei"],["type:attack"]],
			sst_mega_man:["male","sst_light",4,["sst_guangpao","sst_tewu"],["type:shield"]],
			sst_captain_falcon:["male","sst_light",4,["sst_jijing"],["type:attack"]],
			sst_jigglypuff:["female","sst_light",3,["sst_yinyao","sst_anke"],["type:shield"]],
			sst_lucario:["male","sst_dark",4,["sst_bodao","sst_juyuan"],["type:attack"]],
			sst_pichu:["double","sst_light","2/3",["sst_tieyan","sst_gaoya"],["type:attack"]],
			sst_steve:["male","sst_light",4,["sst_tankuang"],["type:grab","primary:20","attack:1,0,0,0,0.5,1.5","defense:1"]],
			sst_ma:["male","sst_reality",4,["sst_fumiao","sst_huayu"],["zhu","type:unknown"]],
			sst_feiji:["male","sst_reality",4,["sst_xuhuang"],["type:unknown"]],
			sst_sonic:["male","sst_light",4,["sst_jibu","sst_juechen"],["type:attack"]],
			sst_hero:["male","sst_light",4,["sst_songmo","sst_yonghun"],["type:attack"]],
			sst_fox:["male","sst_light",4,["sst_powei"],["type:shield"]],
			sst_alex:["female","sst_light",3,["sst_qiaoqi","sst_fumo"],["type:grab","primary:20","attack:1","defense:1","feature:若你的装备区内有武器牌，你的攻击+X（X为此牌的攻击范围）；你的装备区内每有一张非武器牌，你的防御+1。"]],
			sst_min_min:["female","sst_light",3,["sst_longbo","sst_fengcu"],["type:attack"]],
			sst_pikachu:["double","sst_light",3,["sst_fulei","sst_duoshan"],["type:attack"]],
			sst_falco:["male","sst_light",4,["sst_juao"],["type:attack"]],
			sst_enderman:["none","sst_dark",2,["sst_lingying","sst_fankui","sst_xiangzhu"],["type:neutral","primary:40","attack:7","defense:1"]],
			sst_sephiroth:["male","sst_dark",5,["sst_fenshi","sst_xingduo"],["type:attack"]],
			sst_pokemon_trainer_leaf:["female","sst_light",3,["sst_jiliu"],["type:attack"]],
			sst_kyo_kusanagi:["male","sst_spirit",4,["sst_congyun","sst_fuzhuo"],["type:attack"]],
			sst_pauline:["female","sst_spirit",3,["sst_shangzheng","sst_yinyuan"],["type:shield"]],
			sst_dr_wily:["male","sst_spirit",3,["sst_zaowu","sst_fuqi"],["type:attack"]],
			sst_kazuya:["male","sst_dark",5,["sst_chouyu","sst_xuehai"],["type:attack"]],
			sst_kraid:["male","sst_spirit",8,["sst_yintong","sst_gukui"],["type:neutral"]],
			sst_sora:["male","sst_light",4,["sst_qixin","sst_gongcun"],["type:neutral"]],
			sst_pac_man:["male","sst_light",3,["sst_jichang"],["type:grab"]],
			sst_mewtwo:["none","sst_dark",3,["sst_xiongli","sst_nixi"],["type:grab"]],
			sst_olimar:["male","sst_light",3,["sst_liedui","sst_chunni"],["type:grab"]],
			sst_marioraz:["male","sst_reality",2,["sst_buxi","sst_litu","sst_zihua"],["zhu","type:unknown"]],
			sst_piranha_plant:["none","sst_dark",4,["sst_tunshi","sst_yangfen"],["type:grab"]],
			sst_bayonetta:["female","sst_dark",3,["sst_qiangyi","sst_moke"],["type:shield"]]
		},
		characterFilter:{},
		characterSort:{
			sst_standard:{
				sst_64:["sst_mario","sst_donkey_kong","sst_link","sst_samus","sst_yoshi","sst_kirby","sst_luigi","sst_captain_falcon","sst_jigglypuff","sst_fox","sst_pikachu"],
				sst_melee:["sst_bowser","sst_peach","sst_zelda","sst_dr_mario","sst_ganondorf","sst_mr_game_watch","sst_marth","sst_young_link","sst_pichu","sst_falco","sst_mewtwo"],
				sst_brawl:["sst_zero_suit_samus","sst_wario","sst_pokemon_trainer_red","sst_meta_knight","sst_ike","sst_toon_link","sst_wolf","sst_lucario","sst_sonic","sst_pokemon_trainer_leaf","sst_olimar"],
				sst_4:["sst_villager","sst_rosalina","sst_little_mac","sst_greninja","sst_palutena","sst_bowser_jr","sst_koopalings","sst_ryu","sst_mega_man","sst_pac_man","sst_bayonetta"],
				sst_ultimate:["sst_dark_samus","sst_daisy","sst_ridley","sst_simon","sst_richter","sst_king_k_rool","sst_isabelle","sst_incineroar","sst_ken"],
				sst_dlc:["sst_terry","sst_byleth_male","sst_byleth_female","sst_joker","sst_steve","sst_alex","sst_hero","sst_min_min","sst_sephiroth","sst_enderman","sst_kazuya","sst_sora","sst_piranha_plant"],
				sst_spirits:["sst_dark_link","sst_waluigi","sst_master_hand","sst_spring_man","sst_rex","sst_cuphead_mugman","sst_kyo_kusanagi","sst_pauline","sst_dr_wily","sst_kraid"],
				sst_players:["sst_mario_not_mary","sst_yumikohimi","sst_massy","sst_haine","sst_oc","sst_mr_8","sst_kyuukou","sst_windier","sst_rentianshu","sst_srf","sst_miumiu","sst_ma","sst_feiji","sst_marioraz"]
			}
		},
		characterIntro:{
			/*
			`武将作者：Yumikohimi<br>
				武将作者：mario not mary<br>
				武将作者：Show-K<br>
				武将作者：南柯<br>
				武将作者：Axel_Zhai<br>
				武将作者：小时节<br>
				插图作者：未知<br>
				<hr>
				<br>
				系列：（）<br>
				首次登场：（）<br>
				<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				`
			*/
			sst_mario:`武将作者：mario not mary、Show-K<br>
				插图作者：kuromame_983<br>
				<hr>
				0001. 马力欧/Mario/マリオ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>咚奇刚<rp>（</rp><rt>Donkey Kong</rt><rp>）</rp></ruby><br>
				超级标志性的角色！这位游戏巨星常常从酷霸王手中拯救世界。他有惊人的跳跃能力和多种变身道具。在闲暇时刻，他还会参与体育运动，擅长的项目数也数不清。在大乱斗里，他是一个值得信赖的全能型斗士。让我们一起来说：“是我，马力欧！”<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				太激昂了，太生生不息了。`,
			sst_link:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0172. 林克/Link/リンク<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				传统上林克的标志性特征是绿衣绿帽，不过在旷野之息中林克反而穿着蓝色的英杰服，也不戴帽子了。在大乱斗里，他的剑和盾让他攻守兼备，而他的弓、回旋镖和炸弹则给战斗增加了更多的变数。在前几代大乱斗里林克还会使用勾爪——所以说他是怎么同时带这么多东西上场的啊！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“醒醒吧……”`,
			sst_yoshi:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0297. 耀西/Yoshi/ヨッシー<br>
				系列：<ruby>耀西<rp>（</rp><rt>Yoshi</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧世界<rp>（</rp><rt>Super Mario World</rt><rp>）</rp></ruby><br>
				耀西经常和马力欧一起冒险，可以说是他最好的搭档。耀西可以吃掉几乎任何大小合适的生物，然后马上生出蛋来。借助他的浮空跳能力，他在大乱斗中非常适合空战。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				耀西~！`,
			sst_wario:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				0729. 瓦力欧/Wario/ワリオ<br>
				系列：<ruby>瓦力欧<rp>（</rp><rt>Wario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧乐园 六个金币<rp>（</rp><rt>Super Mario Land: 6 Golden Coins</rt><rp>）</rp></ruby><br>
				瓦力欧简直就是恶趣味的集合体。这个怪人自称是马力欧的发小，并且相当厌恶马力欧。同时他还视财如命。在大乱斗中，他是个灵活的重量级斗士，还可以通过积攒屁来释放强力攻击——真的是太恶趣味了！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				瓦！瓦！瓦！！！`,
			sst_villager:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0825. 村民（男孩）/Villager (Boy)/むらびと（男の子）<br>
				系列：<ruby>动物森友会<rp>（</rp><rt>Animal Crossing</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>动物森友会<rp>（</rp><rt>Doubutsu no Mori</rt><rp>）</rp></ruby><br>
				在动物森友会系列中和动物们平和的生活在一起的年轻人，当然他也不拒绝在大乱斗里大显身手。他的上必杀技其实来自于《气球大战》这个游戏，而下必杀技则能生动地为大家说明不要在别人砍树的时候站在旁边。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“因为什么都没有，所以什么都做得到”`,
			sst_zelda:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				0173. 塞尔达/Zelda/ゼルダ<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				塞尔达传说系列就是以这位坚强的公主命名的。在不同的作品里她的形象也不同，但她总是肩负重任。在大乱斗里，她擅长使用多种魔法，但是移动速度不是特别快。她在大乱斗四代和五代中的下必杀是幻影铠甲，而二代和三代的下必杀则是变身希克。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				林克，这就是三角力量……`,
			sst_ganondorf:`武将作者：Show-K、mario not mary<br>
				插图作者：未知<br>
				<hr>
				0175. 加侬多夫【盖侬多夫】/Ganondorf/ガノンドロフ<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说 时之笛<rp>（</rp><rt>The Legend of Zelda: Ocarina of Time</rt><rp>）</rp></ruby><br>
				加侬多夫是拥有力量三角的魔王，意欲将海拉鲁大陆毁灭。除了人形态之外，他还可以变成巨大的野猪魔兽。当然，在大多数作品里，他的野心都会被林克摧毁。在大乱斗里，他虽然行动缓慢但威力强大，很容易就会把对手击飞，非常适合轻度玩家使用。<br>
				——封羽翎烈、无敌阿尔宙斯，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				你知道吗？海拉鲁的历史，就是一部被叫做盖侬的魔善侵袭的历史……`,
			sst_dr_mario:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0008. 马力欧医生/Dr. Mario/ドクターマリオ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>马力欧医生<rp>（</rp><rt>Dr. Mario</rt><rp>）</rp></ruby><br>
				在1990年的益智游戏《马力欧医生》中，马力欧换上了白大褂，准备在医学界大展身手。在大乱斗世界中，他是能够投掷药丸、使用超级床单反弹攻击的全能型斗士。他比马力欧要慢，但是攻击也更高。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				一开始技能就没设计好，但我还是要占个位置……现在设计好了，然而已经改了很多次了……`,
			sst_palutena:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0705. 帕露蒂娜/Palutena/パルテナ<br>
				系列：<ruby>光神话<rp>（</rp><rt>Kid Icarus</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>光神话<rp>（</rp><rt>Kid Icarus</rt><rp>）</rp></ruby><br>
				在《新光神话：帕露蒂娜之镜》中，这位光之女神通过心灵感应和彼特交流，并且赐予他各种对冒险有帮助的奇迹。在大乱斗中，她也有能适应各种场合的技能。以及，在大乱斗四代中，她的每个自定义技能都和基础技能完全不同，可以将她打造成不同风格的斗士。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				稍微认真点也没关系哦～`,
			sst_marth:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0610. 马尔斯/Marth/マルス<br>
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>火焰纹章 暗黑龙与光之剑<rp>（</rp><rt>Fire Emblem: Shadow Dragon and the Blade of Light</rt><rp>）</rp></ruby><br>
				初代《火焰纹章》的主角，阿提利亚王国的王子，也是英雄的后裔。在大乱斗中，他是一个标志性的剑人，剑法精湛而优雅。他的剑尖比剑根能的攻击力更高，还可以使用防反来应对对方的攻击。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“那正是英雄王本人”`,
			sst_rosalina:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0009. 罗莎塔/Rosalina/ロゼッタ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧银河<rp>（</rp><rt>Super Mario Galaxy</rt><rp>）</rp></ruby><br>
				神秘的罗莎塔和琪琪们一起生活在长尾星天文台。在大乱斗中，罗莎塔和琪琪能同时在不同位置攻击。如果你能将对手夹在罗莎塔和琪琪中间，她们就能合力打出超高伤害！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				欢迎来到新的银河。`,
			sst_zero_suit_samus:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0266. 零装甲萨姆斯/Zero Suit Samus/ゼロスーツサムス<br>
				系列：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				即使不穿能量装甲，萨姆斯也很强。虽然没有装甲形态的高火力，但她的动力鞋给了她高机动性。而她的麻痹手枪既可以定住对手，也能发射等离子鞭进行抓取或回场。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“化整为零。”`,
			sst_luigi:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0004. 路易吉/Luigi/ルイージ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>马力欧兄弟<rp>（</rp><rt>Mario Bros.</rt><rp>）</rp></ruby><br>
				虽说有专门为他庆贺的“路易吉年（2013年）”，也曾经在某种意义上成为了电影明星，但这些关注只是让他变得更内向和不知所措了。不论是在原作中还是在大乱斗中，他都倾向于模仿哥哥的举动，不过他也将哥哥的部分招式改良了，比如他的超级跳跃拳在特定时机击飞力超高。以及，他的嘲讽都是100%纯原创的哦！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				和哥哥一起！`,
			sst_bowser:`武将作者：mario not mary<br>
				插图作者：mario not mary<br>
				<hr>
				0007. 酷霸王/Bowser/クッパ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟<rp>（</rp><rt>Super Mario Bros.</rt><rp>）</rp></ruby><br>
				马力欧的死对头，也是碧姬公主老被绑架的罪魁祸首。他的阴谋基本上都没有实现，相反，有时候他甚至还会和马力欧合作。在大乱斗中，他是全游戏最重的人物，并且不会被轻攻击打出硬直。你必须得揍得足够大力才能将他击飞！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				终于有武将图片了。`,
			sst_peach:`武将作者：mario not mary<br>
				插图作者：ゲB<br>
				——${get.formatUrl("https://www.pixiv.net/artworks/50055037")}<br>
				<hr>
				0005. 碧姬公主/Peach/ピーチ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟<rp>（</rp><rt>Super Mario Bros.</rt><rp>）</rp></ruby><br>
				蘑菇王国的公主，也是强大和可爱可以共存的最好证明。在大乱斗中，碧姬公主可以在空中飘浮，随后突然落地掏出一堆武器来——包括但不限于平底锅、阳伞和奇诺比奥——所以她到底把这些都放在哪的啊？<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				哦～我赢了吗？`,
			sst_byleth_female:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1381. 贝雷丝/Byleth (Female)/ベレス<br>
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>火焰纹章 风花雪月<rp>（</rp><rt>Fire Emblem: Three Houses</rt><rp>）</rp></ruby><br>
				作为士官学校的老师，除了教学生战斗技巧之外，还可以请他们喝茶聊天。5年前亲密的学生们5年后却要各自为敌，实在令人唏嘘。顺便，5年后贝老师的头发会变成绿色。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				老师真的很希望你们都能活下来……`,
			sst_byleth_male:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1380. 贝雷特/Byleth (Male)/ベレト<br>
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>火焰纹章 风花雪月<rp>（</rp><rt>Fire Emblem: Three Houses</rt><rp>）</rp></ruby><br>
				赛罗斯骑士团前任团长杰拉尔特的儿子/女儿，因为在意外中救了几名学生，成为了加尔古·玛库士官学校的教师。缺乏情绪起伏，被称为灰色恶魔。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“你还算是个男人嘛？！”`,
			sst_massy:`武将作者：mario not mary<br>
				插图作者：mario not mary<br>
				<hr>
				R001. 绯和雅也/Massy
				<hr>
				Massy，唯一的神！`,
			sst_samus:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0264. 萨姆斯/Samus/サムス<br>
				系列：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				萨姆斯·亚兰是游戏历史上第一个女主角，以只身一人在外星球的作战闻名。她的能量装甲是高等文明“鸟人族”的成果，给了她强大的火力、防护力和升级的可能性。在大乱斗中，虽然她是道具人，但是她的体术也不差。她的蓄力射击威力惊人。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“萨姆斯，很不幸的消息……”`,
			sst_ridley:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0267. 利德雷/Ridley/リドリー<br>
				系列：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				萨姆斯的死对头，是杀害了她至亲的仇人，也是宇宙海盗的干部之一。看上去像是野兽，但是具有高度智慧。虽然一直到这代大乱斗才成为斗士，但在之前的大乱斗里也以其他的形式露过面。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“没有任何洗白的余地与必要”`,
			sst_dark_samus:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0265. 黑暗萨姆斯/Dark Samus/ダークサムス<br>
				系列：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>密特罗德 究极<rp>（</rp><rt>Metroid Prime</rt><rp>）</rp></ruby><br>
				萨姆斯的废弃盔甲、究极密特罗德和有机矿石“啡宗”结合的产物，不但有强大的恢复能力，还能精神控制其他生物和制造自己的分身。它在3ds和WiiU版《任天堂明星大乱斗》中作为辅助模型的时候还能使用啡宗的力量攻击，成为斗士之后各个招式倒是完全和萨姆斯一样了，遗憾。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“堕入黑暗”`,
			sst_mr_game_watch:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0689. Mr. Game & Watch/Mr.ゲーム & ウォッチ<br>
				系列：Game & Watch<br>
				首次登场：Ball<br>
				Game & Watch是任天堂于80年代推出的一系列游戏及其设备的统称，既能玩游戏也能当时钟，这一设备也是之后的GB以及DS掌机的雏形。在大乱斗中，Game & Watch先生会使用来自原作的各种要素攻击。不过因为它是真实意义上的纸片人，所以非常轻，容易被击飞。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“是9！是9！”`,
			sst_mario_not_mary:`武将作者：mario not mary<br>
				插图作者：mario not mary<br>
				<hr>
				R002. MNM
				<hr>
				这才是大佬！整个计划的发起者！还是用酷霸王斗士的高手！`,
			sst_yumikohimi:`武将作者：mario not mary<br>
				插图作者：mario not mary<br>
				<hr>
				R003. 柚子/Yumikohimi
				<hr>
				比MNM好相处……`,
			sst_haine:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R004. 海涅/Haine
				<hr>
				公认的渣男！`,
			sst_terry:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1356. 特瑞·博加德/Terry Bogard/テリー・ボガード<br>
				系列：<ruby>饿狼传说<rp>（</rp><rt>Fatal Fury</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>饿狼传说<rp>（</rp><rt>Fatal Fury</rt><rp>）</rp></ruby><br>
				被称为“传说之狼”的传奇格斗家，多次夺得KOF的冠军，实际上却是一个南镇街头的无业游民。年少时为了替养父杰夫报仇而踏上了击败吉斯的旅途。师从中华武术大师唐福禄门下，招数却都是从杰夫那里学来的。在南镇的大街小巷的一次次的战斗中，他逐渐对和吉斯之间无穷无尽的复仇产生了质疑，但吉斯并没有给他反悔的机会。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				OK！`,
			sst_simon:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1050. 西蒙·贝尔蒙特/Simon Belmont/シモン・ベルモンド<br>
				系列：<ruby>恶魔城<rp>（</rp><rt>Castlevania</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>恶魔城<rp>（</rp><rt>Castlevania</rt><rp>）</rp></ruby><br>
				初代《恶魔城》的主角，最著名的吸血鬼猎人之一，个性勇敢莽撞。依靠除魔圣鞭和其他神圣武器击败了百年后卷土重来的德古拉，并且通过焚烧德古拉遗体破解了他给自己施加的诅咒。在原作中还有如骑士般武装或是清秀优雅的形象，大乱斗中的这个形象是他最初登场时的样子。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“滚回黑暗。”`,
			sst_incineroar:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0419. 炽焰咆哮虎/Incineroar/ガオガエン<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>精灵宝可梦 太阳／月亮<rp>（</rp><rt>Pokémon Sun and Moon</rt><rp>）</rp></ruby><br>
				以反派摔角手为原型的宝可梦，是《宝可梦：太阳/月亮》中初始宝可梦火斑喵的最终进化。性格暴躁又任性，但讨厌欺凌弱小这类无聊的事。对于强大的对手会拿出干劲来。在大乱斗中，它主要使用各种与摔角有关的招式。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				宇宙第一宝可梦！`,
			sst_greninja:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0418. 甲贺忍蛙/Greninja/ゲッコウガ<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>精灵宝可梦 Ｘ／Ｙ<rp>（</rp><rt>Pokémon X and Y</rt><rp>）</rp></ruby><br>
				甲贺忍蛙是水+恶属性的宝可梦，完全想不到最初呆萌的呱呱泡蛙会进化成这样。它和所有忍者一样敏捷而致命，投掷的飞水手里剑甚至能切割金属。在大乱斗中，它是高速型的斗士，回场能力也非常不错。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“变幻自在”`,
			sst_kirby:`武将作者：mario not mary<br>
				插图作者：kotori<br>
				——${get.formatUrl("https://www.pixiv.net/artworks/26818738")}<br>
				<hr>
				0323. 卡比/Kirby/カービィ<br>
				系列：<ruby>星之卡比<rp>（</rp><rt>Kirby</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>星之卡比<rp>（</rp><rt>Kirby\x27s Dream Land</rt><rp>）</rp></ruby><br>
				圆圆滚滚的可爱卡比在波普之星过着平静的生活。它可以吸入物品或者生物，并且将它们吐出来或者复制能力。在大乱斗中，卡比吸入斗士之后可以复制他们的通常必杀技。它虽然很容易被击飞，但回场能力还不错。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				樱井亲儿子，粉红恶魔，灯火之星。`,
			sst_king_k_rool:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0136. 库鲁鲁王/King K. Rool/キングクルール<br>
				系列：<ruby>咚奇刚<rp>（</rp><rt>Donkey Kong</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级咚奇刚<rp>（</rp><rt>Donkey Kong Country</rt><rp>）</rp></ruby><br>
				就像马力欧的死对头是酷霸王一样，咚奇刚的死对头是库鲁鲁王。他是个性格恶劣的鳄鱼，拥有坚硬的肚皮铠甲和闪亮的皇冠。想要他和咚奇刚合作甚至成为朋友是几乎不可能的。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				别说他了，现在连咚奇刚新作也没有个影子……`,
			sst_donkey_kong:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0134. 咚奇刚/Donkey Kong/ドンキーコング<br>
				系列：<ruby>咚奇刚<rp>（</rp><rt>Donkey Kong</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>咚奇刚<rp>（</rp><rt>Donkey Kong</rt><rp>）</rp></ruby><br>
				丛林的王者，也是最狂热的香蕉狂魔。他的冒险总是以某人偷了他的香蕉开始。在大乱斗中，他的力度和投技是众所周知的。虽然体积很大，但是速度也不是特别慢。他的前投掷还能扛着对手走哦！要合理利用这一点！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				最近来了次史诗级加强。`,
			sst_richter:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				1051. 里希特·贝尔蒙特/Richter Belmont/リヒター・ベルモンド<br>
				系列：<ruby>恶魔城<rp>（</rp><rt>Castlevania</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>恶魔城X 血之轮回<rp>（</rp><rt>Castlevania: Rondo of Blood</rt><rp>）</rp></ruby><br>
				《恶魔城X：血之轮回》的主角，吸血鬼猎人家族的后代，他从德古拉手中救出了自己的恋人，还曾经和德古拉的儿子阿鲁卡多并肩作战。他擅长使用杂技般灵活的体术与敌人周旋，还能解放除鞭子外其他神圣武器的力量，进行更强力的攻击。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“我有愧于此称……”`,
			sst_pokemon_trainer_red:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0412. 宝可梦训练家（男性）/Pokémon Trainer (Male)/ポケモントレーナー（男性）<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦 红／绿<rp>（</rp><rt>Pokémon Red and Green Versions</rt><rp>）</rp></ruby><br>
				历代《宝可梦》的主线里都有一个以冠军为目标的训练师，带着宝可梦博士给的初始宝可梦踏上旅途。他们还会骑自行车或者滑轮滑。在大乱斗中，宝可梦训练师会一直在场地后面，负责切换宝可梦和为他的同伴加油鼓劲。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“……”`,
			sst_isabelle:`武将作者：mario not mary、Yumikohimi<br>
				插图作者：未知<br>
				<hr>
				0827. 西施惠/Isabelle/しずえ<br>
				系列：<ruby>动物森友会<rp>（</rp><rt>Animal Crossing</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>来吧！动物森友会<rp>（</rp><rt>Animal Crossing: New Leaf</rt><rp>）</rp></ruby><br>
				在3DS版《动物森友会》中，她是村民们的可靠秘书；而在NS版中，她也为每个无人岛居民提供生活服务。她有时可能健忘，但总的来说很靠谱。有个叫西施德的弟弟。她在3DS和WiiU版《任天堂明星大乱斗》中是辅助模型，NS版中则成为了斗士。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				大家都爱的秘书西施惠！`,
			sst_daisy:`武将作者：mario not mary<br>
				插图作者：高橋うもり<br>
				——${get.formatUrl("https://www.pixiv.net/artworks/73249081")}<br>
				<hr>
				0006. 黛西公主/Daisy/デイジー<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧乐园<rp>（</rp><rt>Super Mario Land</rt><rp>）</rp></ruby><br>
				虽然是萨拉萨大陆的公主，但黛西公主完全没有身为王族的优雅，反而相当活泼任性，这也是她的独特之处。据说路易吉对她很着迷？和碧姬公主不同，黛西公主只被绑架过一次。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				嘿！我是黛西！`,
			sst_meta_knight:`武将作者：mario not mary<br>
				插图作者：糸谷さいれん<br>
				——${get.formatUrl("https://www.pixiv.net/artworks/60069126")}<br>
				<hr>
				0324. 魅塔骑士/Meta Knight/メタナイト<br>
				系列：<ruby>星之卡比<rp>（</rp><rt>Kirby</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>星之卡比 梦之泉物语<rp>（</rp><rt>Kirby\x27s Adventure</rt><rp>）</rp></ruby><br>
				卡比的神秘劲敌，披风可以变成翅膀的样子。在大乱斗里，他以剑术和强大的空战能力著称。他拥有多段跳，并且所有的必杀技都能用来回场。在Wii版《任天堂明星大乱斗》里，他的强度甚至破坏了平衡。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“Fight me.”`,
			sst_little_mac:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0932. 小麦克/Little Mac/リトル・マック<br>
				系列：<ruby>击拳热斗！！<rp>（</rp><rt>Punch-Out!!</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>击拳热斗！！<rp>（</rp><rt>Punch-Out!!</rt><rp>）</rp></ruby><br>
				击拳热斗系列的主角，虽然身材矮小，但斗志满满。无论是在世界拳击大赛中面对高大的对手们，还是在大乱斗中面对游戏明星们，都毫不畏惧。在大乱斗中，他的拳法简单粗暴。当KO槽蓄满时，他就可以使用击飞力超强的上勾拳。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				加油！麦克！`,
			sst_oc:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				R005. OC
				<hr>
				霸凌你哦！`,
			sst_mr_8:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R006. 八爷/Mr. 8
				<hr>
				据说大乱斗人都叫他东北吴彦祖。`,
			sst_dark_link:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				S001. Dark Link/ダークリンク<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>林克的冒险<rp>（</rp><rt>Zelda II: The Adventure of Link</rt><rp>）</rp></ruby><br>
				暗黑林克是林克的邪恶面。他是《塞尔达传说》系列中最神秘的敌人角色之一，通常在没有背景故事和对话的情况下出现，尽管在很多场合都暗示它只是由暗影魔法构成。对于林克来说，暗黑林克不仅仅是一场与怪物的战斗，而是一场与自己的战斗，因为这位年轻的英雄必须面对自己的力量与他作对。正因为如此，暗黑林克通常是终极挑战。他有一次成为正式的最终Boss（《林克的冒险》），以及在《四剑神殿》和“Take \x27Em All On!”等中作为可选挑战的最终Boss。<br>
				——翻译自《塞尔达维基》<br>
				<hr>
				话说塞尔达传说的第二部和系列其他作品很不一样。`,
			sst_kyuukou:`武将作者：mario not mary<br>
				插图作者：封羽翎烈<br>
				<hr>
				R007. 鸿渐/Kyuukou
				<hr>
				经典白给！`,
			sst_windier:`武将作者：mario not mary<br>
				插图作者：封羽翎烈<br>
				<hr>
				R008. 翎烈/Windier
				<hr>
				这里几乎所有武将介绍都取材于封羽翎烈的《任天堂明星大乱斗特别版全命魂介绍》，还不快去${get.formatUrl("https://ssbuspirits.top")}支持一下？`,
			sst_rentianshu:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R009. 任天鼠
				<hr>
				当了很久的“任豚”了。`,
			sst_srf:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R010. Srf
				<hr>
				看来又是一个渣男。`,
			sst_bowser_jr:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0010. 酷霸王Jr. /Bowser Jr. /クッパJr.<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧阳光<rp>（</rp><rt>Super Mario Sunshine</rt><rp>）</rp></ruby><br>
				酷霸王超宠爱的孩子，有标志性的带大嘴巴图案的围脖。和他爸一样，酷霸王Jr.也想打败马力欧。在大乱斗中，他乘坐全副武装的酷霸王小丑飞船出战。如果被击中飞船而不是本体，受伤会更少，所以要注意走位。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				怎么也想不到，当初发誓要打败马力欧的少年，现在却和马力欧越走越近。`,
			sst_koopalings:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0011. 伊吉/Iggy/イギー<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				伊吉戴着黑框眼镜，梳着个菠萝发型，有些爱搞恶作剧。他说话语气卖萌，但是笑起来又疯疯癫癫的。他还喜欢训练汪汪，在《新超级马力欧兄弟2》中，他就靠一只暴躁的汪汪来对付马力欧。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0012. 温缇/Wendy/ウェンディ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中唯一的一个女孩子。她非常莽，也非常傲慢自大，并且将碧姬公主和黛西公主视为对手。虽然性格像是假小子，但是也不排斥用粉色蝴蝶结和高跟鞋展示自己女性化的一面。在《新超级马力欧兄弟U》中，她还展示了自己优雅的溜冰技巧。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0013. 雷米/Lemmy/レミー<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中身材最矮小的一个，是个一脸怪相又不失稚气的小捣蛋。在《新超级马力欧兄弟U》中，他是第一关的Boss，踩在球上投掷炸弹攻击，与此同时炫彩的头发一抖一抖的。不要低估他的实力哦！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0014. 洛伊/Roy/ロイ（スーパーマリオブラザーズ）<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中的重量级选手，经常四处耀武扬威。他的粉色墨镜虽然没什么压迫感，但他灵活可变的速度却威胁不小。在《超级马力欧兄弟3》中，他通过制造地震和使用魔法来攻击马力欧，还真是挺棘手的！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0015. 拉里/Larry/ラリー<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中年纪最小的一个，总是想在各种事情上赢过别人——即使别人并没有想与他竞争。他高耸的蓝色头发非常引人注目。在《新超级马力欧兄弟Wii》里，他在第一关出现。虽说他的蓝色火球和刺壳旋转看起来很难对付，但其实他的行动非常套路化。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0016. 洛德威格/Ludwig/ルドウィッグ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中最聪明的一个，有非常标志性的蓝色中分头。虽然可以表现的很成熟，但是他更喜欢装逼。在《新超级马力欧兄弟Wii》里，他是第七关的Boss，可以使用追踪魔法弹，还会故意悬在空中躲避攻击。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0017. 莫顿/Morton/モートン<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟3<rp>（</rp><rt>Super Mario Bros. 3</rt><rp>）</rp></ruby><br>
				酷霸王7人组中体格最大的一个。他标志性的特征是三根呆毛——不对，应该是脸上的星星标记。他四肢发达头脑简单，在《新超级马力欧兄弟2》中，他在第四关出现，你不打他他就不会动。也许他真的是很不爱动吧！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				摇身一变就和酷霸王没有血缘关系了。`,
			sst_ryu:`武将作者：mario not mary<br>
				插图作者：隆叔_karate<br>
				<hr>
				0977. 隆/Ryu/リュウ<br>
				系列：<ruby>街头霸王<rp>（</rp><rt>Street Fighter</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>街头霸王<rp>（</rp><rt>Street Fighter</rt><rp>）</rp></ruby><br>
				隆，武道上永恒的探求者，凭借着从刚拳处学来的波动流暗杀术，他遍历全球挑战强者，在夺得大赛冠军后却淡泊名利不去领奖，因为他的目标只有一个，也是豪鬼留给他的问题：战斗的意义，除了杀戮，还有什么？他也曾为了追求力量迷失自我，将自己沉浸在杀意中，但现在的他已经将阴影从心中驱逐，俨然一代宗师。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				你必须击败我的升龙拳才能得到一线转机。`,
			sst_ken:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0978. 肯/Ken/ケン<br>
				系列：<ruby>街头霸王<rp>（</rp><rt>Street Fighter</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>街头霸王<rp>（</rp><rt>Street Fighter</rt><rp>）</rp></ruby><br>
				肯是隆的头号挚友兼劲敌，两人师出同门，与风餐露宿四处苦行的隆不同，肯有着自己的家族与财大气粗的产业，据说现在空手道网课也办的红红火火。他在年轻时因为急躁吃过不少败仗，但现在的他已经有了自己的家庭，即便如此，在顾家的闲暇也一定要挤出时间与挚友对战几局，才是男人的快乐。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				我准备好了，来吧。`,
			sst_waluigi:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0035. 瓦路易吉/Waluigi/ワルイージ<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>马力欧网球64<rp>（</rp><rt>Mario Tennis</rt><rp>）</rp></ruby><br>
				一看他那个硬而扭曲的胡子，还有红色的鹰钩鼻，就知道这是个带恶人了。他自称是路易吉的劲敌，性格狡猾，行动敏捷。当作为辅助模型被召唤时，他会将离他最近的斗士猛踩到地里，然后用网球拍殴打他的受害者。不知道为什么，在国外希望瓦路易基参战大乱斗的呼声相当高，甚至都成为烂梗了。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				金钱，名声，邀请函，都会是本大爷的！`,
			sst_master_hand:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1095. 大师之手/Master Hand/マスターハンド<br>
				系列：<ruby>任天堂明星大乱斗<rp>（</rp><rt>Super Smash Bros.</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>任天堂明星大乱斗<rp>（</rp><rt>Super Smash Bros.</rt><rp>）</rp></ruby><br>
				创造大乱斗世界的神秘之手。它会在取胜乱斗中所有对手被打败后出现在终点。它的招数极其多样，并且在生命不足时会变得更强大。如果知道什么时候攻击，什么时候躲闪，应对它就不是难事！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				右手，代表着创造。`,
			sst_ike:`武将作者：mario not mary<br>
				插图作者：北千里<br>
				——《TCG火焰纹章<ruby>0<rp>（</rp><rt>Cipher</rt><rp>）</rp></ruby>》<br>
				<hr>
				0614. 艾克（苍炎之轨迹）/Ike (Path of Radiance)/アイク（蒼炎の軌跡）<br>
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>火焰纹章 苍炎之轨迹<rp>（</rp><rt>Fire Emblem: Path of Radiance</rt><rp>）</rp></ruby><br>
				《火焰纹章：苍炎之轨迹》的主角，父亲被神秘的漆黑骑士所杀，于是继承了父亲的佣兵团，并且承担了保卫未来女皇的任务。拥有恐怖的力量，他的剑本来是双手剑，但他可以单手使用。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0615. 艾克（晓之女神）/Ike (Radiant Dawn)/アイク（暁の女神）<br>
				系列：<ruby>火焰纹章<rp>（</rp><rt>Fire Emblem</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>火焰纹章 苍炎之轨迹<rp>（</rp><rt>Fire Emblem: Path of Radiance</rt><rp>）</rp></ruby><br>
				《火焰纹章：晓之女神》的故事发生于前作《苍炎之轨迹》的3年后，狂王战争后一切百废待兴，然而又有新的势力出现威胁和平。经历过这么多事情后，艾克真能称得上是英雄。在大乱斗中，他的各种技能击飞力度也很强。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				大！天！空！`,
			sst_miumiu:`武将作者：mario not mary<br>
				插图作者：mario not mary<br>
				<hr>
				R011. 缪缪
				<hr>
				据说家里裙子比其他女生还要多。`,
			sst_toon_link:`武将作者：mario not mary、Yumikohimi<br>
				插图作者：未知<br>
				<hr>
				0177. 卡通林克/Toon Link/トゥーンリンク<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说 风之杖<rp>（</rp><rt>The Legend of Zelda: The Wind Waker</rt><rp>）</rp></ruby><br>
				这个林克来自《塞尔达传说：风之律动》，偶尔也会被称为猫眼林克。在大乱斗中，他的技能组看似和另外两个林克相同，但他的炸弹爆炸范围更大，上必杀滞空时间也更长。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“故事到处都有，传说仅此一个。”`,
			sst_wolf:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0384. 沃鲁夫/Wolf O\x27Donnell/ウルフ<br>
				系列：<ruby>星际火狐<rp>（</rp><rt>Star Fox</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>星际火狐64<rp>（</rp><rt>Star Fox 64</rt><rp>）</rp></ruby><br>
				沃鲁夫曾经为安德罗斯效力，和“星际火狐”小队多次交战。在安德罗斯被流放后，他自己组建了“星狼”小队。虽然偶尔也会和火狐并肩作战，但总体而言他们还是死对头。他的通常必杀技射出的子弹比火狐和佛克都要强力。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				游戏结束了！星际火狐！`,
			sst_young_link:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				0176. 幼年林克/Young Link/こどもリンク<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说 时之笛<rp>（</rp><rt>The Legend of Zelda: Ocarina of Time</rt><rp>）</rp></ruby><br>
				《塞尔达传说：时之笛》中的林克，在原作中可以通过时之笛切换幼年和成年两个形态。幼年形态是不能使用大师剑的。在大乱斗中，他的通常必杀技射出的是火箭，相比另两个林克的箭性能更好。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				老摸有时候能写出让我吐血的武将……比如这个……现在〖假面〗好像废了，在找解决方法。现在应该可以了，然而要重新编写好多技能的代码啊……`,
			sst_ocarina_of_time_link:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0176. 幼年林克/Young Link/こどもリンク<br>
				系列：<ruby>塞尔达传说<rp>（</rp><rt>The Legend of Zelda</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>塞尔达传说 时之笛<rp>（</rp><rt>The Legend of Zelda: Ocarina of Time</rt><rp>）</rp></ruby><br>
				《塞尔达传说：时之笛》中的林克，在原作中可以通过时之笛切换幼年和成年两个形态。幼年形态是不能使用大师剑的。在大乱斗中，他的通常必杀技射出的是火箭，相比另两个林克的箭性能更好。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				物是人非，沧海桑田……`,
			sst_spring_man:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1287. 弹簧人/Spring Man/スプリングマン<br>
				系列：<ruby>神臂斗士<rp>（</rp><rt>ARMS</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>神臂斗士<rp>（</rp><rt>ARMS</rt><rp>）</rp></ruby><br>
				在弹簧竞技场进行修炼的、热血的弹簧斗士。他的梦想是有朝一日能在ARMS大奖赛中打败最强铜领，夺得冠军。他最喜欢吃披萨，靠自己的手臂，可以在吃的时候拉出长长的奶酪丝。在大乱斗中，作为辅助模型的他会使用弹簧手臂连击对手。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				然而却是面面参战了……`,
			sst_joker:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1304. Joker（怪盗）/Joker (Phantom Thief)/ジョーカー（怪盗）<br>
				系列：<ruby>女神异闻录<rp>（</rp><rt>Persona</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>女神异闻录5<rp>（</rp><rt>Persona 5</rt><rp>）</rp></ruby><br>
				P5主人公在异世界的形态，是由反抗意识觉醒了人格面具的样子。初始人格面具为亚森——大乱斗里也是这家伙，戴着白鸟外形眼部为黑色的面具。身穿黑色的风衣，棕色古巴高跟鞋，灰衬衫和黑色长裤，配上标志性的红色手套。代号“Joker”，是“王牌”的意思。<br>
				——Eric、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				1305. Joker（学生）/Joker (Student)/ジョーカー（学生）<br>
				系列：<ruby>女神异闻录<rp>（</rp><rt>Persona</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>女神异闻录5<rp>（</rp><rt>Persona 5</rt><rp>）</rp></ruby><br>
				P5主人公的常服。身穿秀尽学园的校服，戴着黑框眼镜，有着黑色卷发和深灰的瞳孔。在平常他会以这身装束行动，虽然打扮并不出众，但却是个美男子，所以能与许多人建立关系。<br>
				——Eric、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“真不愧是Joker！”`,
			sst_rex:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0966. 莱克斯/Rex/レックス<br>
				系列：<ruby>异度神剑<rp>（</rp><rt>Xenoblade Chronicles</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>异度神剑2<rp>（</rp><rt>Xenoblade Chronicles 2</rt><rp>）</rp></ruby><br>
				平时生活在巨神兽“青龙”的身上，以打捞为生的少年，梦想是登上远方的世界树，去往“乐园”。有一次接受了报酬丰厚的打捞沉船委托，并意外的唤醒了沉船中的异刃“焰”。他接受了焰分给他的一半生命，并立志要带她一起去乐园。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“莱克斯，你一个人……也已经没问题了吧。”`,
			sst_cuphead_mugman:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1398. 茶杯头/Cuphead/カップヘッド<br>
				系列：<ruby>茶杯头<rp>（</rp><rt>Cuphead</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>茶杯头<rp>（</rp><rt>Cuphead</rt><rp>）</rp></ruby><br>
				人如其名，脑袋是个茶杯，甚至还可以拿下来或者用吸管吸里面的水。他和弟弟马克杯人误入魔鬼的赌场并被魔鬼欺骗，不得不帮助魔鬼回收他其他债主的灵魂——这些债主可一个比一个难缠。所以说，一开始就不要跟魔鬼打交道啊！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“不要和恶魔做交易。”`,
			sst_mega_man:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0864. 洛克人/Mega Man/ロックマン<br>
				系列：<ruby>洛克人<rp>（</rp><rt>Mega Man</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>洛克人<rp>（</rp><rt>Mega Man</rt><rp>）</rp></ruby><br>
				CAPCOM公司的元祖洛克人系列的主角，首次登场于1987年。他需要通过各个关卡，打败关底的机器人Boss得到他们的武器。在大乱斗中，他所使用的各种技能就来源于此，总共超过10种。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				有段时间老摸一直在玩洛克人……`,
			sst_captain_falcon:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0591. 飞隼队长/Captain Falcon/キャプテン・ファルコン<br>
				系列：<ruby>零式赛车<rp>（</rp><rt>F-Zero</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>零式赛车<rp>（</rp><rt>F-Zero</rt><rp>）</rp></ruby><br>
				在F-Zero赛车大赛中，飞隼队长驾驶着他的“蓝色猎鹰”取得了优秀的成绩。虽然参战了大乱斗，但他的真实身份仍然是个谜。他的速度和力量都很强，还有演出效果爆炸的招牌技能“飞隼拳”，可以在落地的时候尝试使用哦！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				亮招来见。`,
			sst_jigglypuff:`武将作者：mario not mary、南柯<br>
				插图作者：未知<br>
				<hr>
				0409. 胖丁/Jigglypuff/プリン<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦 红／绿<rp>（</rp><rt>Pokémon Red and Green Versions</rt><rp>）</rp></ruby><br>
				胖丁是一般+妖精属性的宝可梦，以其催眠性的歌声闻名。在大乱斗中，它空战很强，还有多段跳的能力。不过它的缺点是太轻了，如果露出破绽，很容易就会被击飞。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				什么叫超级方差斗士啊！`,
			sst_lucario:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0417. 路卡利欧/Lucario/ルカリオ<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦不可思议迷宫 赤之救助队／青之救助队<rp>（</rp><rt>Pokémon Mystery Dungeon: Red Rescue Team and Blue Rescue Team</rt><rp>）</rp></ruby><br>
				路卡利欧是格斗+钢属性的宝可梦，通过观察和操纵波导来攻击。路卡利欧受到的伤害越多，自身的伤害也越高，最多可以造成1.8倍的伤害，此时波导弹也会变大！如果敌人没有击杀路卡利欧，那就很难办了。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				波导之力永存吾心。`,
			sst_pichu:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0410. 皮丘/Pichu/ピチュー<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>精灵宝可梦 金／银<rp>（</rp><rt>Pokémon Gold and Silver Versions</rt><rp>）</rp></ruby><br>
				皮卡丘尚未进化时就是皮丘。它还不擅长蓄电。惊讶或者发笑时，就会立刻进行放电。在大乱斗中，虽然皮丘各个技能的力度比皮卡丘强，但它每次放电都会伤到自己。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				自损八百，可伤敌一千。`,
			sst_steve:`武将作者：mario not mary、Show-K<br>
				插图作者：Edward Kinslow/waffletc<br>
				<hr>
				1428. 史蒂夫/Steve/スティーブ<br>
				系列：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				来自一个由立方体构成的世界的神秘人物，身为一名探险家（同时还是一名矿工），他将（和他心爱的镐子）探索这个世界，并与各位斗士们进行一次武艺切磋。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“想挖到钻石吗？尝试在Y=11找找！”<br>
				<hr>
				（Show-K注：Steve能参战我是真的很惊讶，猜到他会来却又猜不到他会在这个时候来吧……）`,
			sst_ma:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R012. 马老师/Ma
				<hr>
				我们都是初级人～`,
			sst_feiji:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R013. 飞机
				<hr>
				打了吗？还没有！`,
			sst_sonic:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0775. 索尼克/Sonic the Hedgehog/ソニック・ザ・ヘッジホッグ<br>
				系列：<ruby>刺猬索尼克<rp>（</rp><rt>Sonic the Hedgehog</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>刺激赛车<rp>（</rp><rt>Rad Mobile</rt><rp>）</rp></ruby><br>
				索尼克系列的主角，很好相处，喜欢用速度证明自己的实力。事实上，他是大乱斗中跑步速度最快的斗士。他可以利用速度优势躲避攻击并进行快攻。在过去，索尼克系列曾经对马力欧系列形成了强力的竞争。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				“SONIC SPEED！”`,
			sst_hero:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				1324. 勇者（勇者斗恶龙XI S）/Hero (DRAGON QUEST XI S)/勇者（ドラゴンクエストXI S）<br>
				系列：<ruby>勇者斗恶龙<rp>（</rp><rt>Dragon Quest</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>勇者斗恶龙XI S<rp>（</rp><rt>Dragon Quest XI S</rt><rp>）</rp></ruby><br>
				勇者斗恶龙系列中的每个主角都不会说话，名字也是玩家自定义的，但他们的设定各不相同。《勇者斗恶龙XI S》中的勇者左手有世界树的标志，然而因为国王被魔王控制，他很长一段时间都被污蔑为恶魔之子并遭到追捕。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				1325. 勇者（勇者斗恶龙III）/Hero (DRAGON QUEST III)/勇者（ドラゴンクエストIII）<br>
				系列：<ruby>勇者斗恶龙<rp>（</rp><rt>Dragon Quest</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>勇者斗恶龙III<rp>（</rp><rt>Dragon Quest III</rt><rp>）</rp></ruby><br>
				系列中最为标志性的勇者，通常被称为洛特，《勇者斗恶龙》和《勇者斗恶龙II》的主角都是他的后代。他为了完成父亲未竟的讨伐魔王大业，而和三个同伴一同冒险。这也是拥有转职系统的第一作。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				1326. 勇者（勇者斗恶龙IV）/Hero (DRAGON QUEST IV)/勇者（ドラゴンクエストIV）<br>
				系列：<ruby>勇者斗恶龙<rp>（</rp><rt>Dragon Quest</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>勇者斗恶龙IV<rp>（</rp><rt>Dragon Quest IV</rt><rp>）</rp></ruby><br>
				这位勇者虽然肩负击败魔王的预言，生活却很平静，直到魔王发现了他隐居的村庄并将之洗劫。勇者的青梅竹马为掩护他逃跑而牺牲。一无所有的勇者决心解开自己的身世之谜，完成使命。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				1327. 勇者（勇者斗恶龙VIII）/Hero (DRAGON QUEST VIII)/勇者（ドラゴンクエストVIII）<br>
				系列：<ruby>勇者斗恶龙<rp>（</rp><rt>Dragon Quest</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>勇者斗恶龙VIII<rp>（</rp><rt>Dragon Quest VIII</rt><rp>）</rp></ruby><br>
				这位勇者本来是一名皇家护卫，邪恶小丑诅咒了整个王国，将人们都变成了动植物，他只能带着变成动物的国王与公主逃离，寻找击败小丑的方法。他口袋里有一只名为Munchie的仓鼠，如果给它吃奶酪，它也会帮助战斗。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				超级摸奖。`,
			sst_fox:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0382. 火狐/Fox McCloud/フォックス<br>
				系列：<ruby>星际火狐<rp>（</rp><rt>Star Fox</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>星际火狐<rp>（</rp><rt>Star Fox</rt><rp>）</rp></ruby><br>
				火狐是星际佣兵小队“星际火狐”的队长，多次和邪恶的安德罗斯交战。他的飞机驾驶技术出神入化，即使在大乱斗里难得开一次飞机，他也能依靠自身的高速进行战斗。他的反射盾可以反射对方的飞行道具，同时增加其威力。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				这里是火狐，前来支援！`,
			sst_alex:`武将作者：mario not mary<br>
				插图作者：《我的世界》<br>
				<hr>
				1429. 艾莉克斯/Alex/アレックス（Minecraft）<br>
				系列：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				身为史蒂夫的女朋友，她也一同来到了大乱斗的世界，并在这里继续进行她的创造与建设，小心她所布置的各种机关！它们可能会让你陷入大麻烦。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				真正的主角。`,
			sst_min_min:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1414. 面面（斗士）/Min Min (Fighter)/ミェンミェン（ファイター）<br>
				系列：<ruby>神臂斗士<rp>（</rp><rt>ARMS</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>神臂斗士<rp>（</rp><rt>ARMS</rt><rp>）</rp></ruby><br>
				在2020年6月，面面作为第6个DLC斗士加入了大乱斗，打破了“有命魂和Mii服装的系列就无法参战”的前例。她使用A和B分别控制双臂的机制相当特殊，而踢回飞行道具、龙臂等要素也很还原。总之大家跟着她一起来喊——“我爱拉面！”<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				我！爱！拉！面！`,
			sst_pikachu:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0407. 皮卡丘/Pikachu/ピカチュウ<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦 红／绿<rp>（</rp><rt>Pokémon Red and Green Versions</rt><rp>）</rp></ruby><br>
				世界知名的超人气宝可梦！皮卡丘是电属性宝可梦，红红的脸颊储存电力用来作战。在大乱斗里，皮卡丘的强度算是非常高的，能使用迅速而强力的攻击。他的电光石火可以改变2次方向。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				皮～卡～丘！`,
			sst_falco:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0383. 佛克/Falco Lombardi/ファルコ<br>
				系列：<ruby>星际火狐<rp>（</rp><rt>Star Fox</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>星际火狐<rp>（</rp><rt>Star Fox</rt><rp>）</rp></ruby><br>
				“星际火狐”小队里才华横溢、不拘小节的队员。在加入火狐的小队之前，他曾经在多个帮派待过。在大乱斗里，他的跳跃和空战能力很不错，并且可以将反射盾踢出去进行攻击。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				放心，一个也别想逃。`,
			sst_enderman:`武将作者：mario not mary、Yumikohimi、Show-K<br>
				插图作者：KSUWABE<br>
				<hr>
				1434. 末影人/Enderman/エンダーマン<br>
				系列：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>我的世界<rp>（</rp><rt>Minecraft</rt><rp>）</rp></ruby><br>
				细长的四肢，紫色的眼睛。这比黑夜更黑暗的生物可不是你瞪眼的理想对象。它们通常出现在下界和末地，在主世界较为稀有。而更为稀有的，是曾经与它的眼神接触，然后幸存下来讲述其恐怖经历的玩家。不过放心，参加这次大乱斗的末影人并不会这样做，而是用各种技巧来击垮对手。<br>
				——谁的错820、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				小黑！`,
			sst_sephiroth:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1439. 萨菲罗斯/Sephiroth/セフィロス<br>
				系列：<ruby>最终幻想<rp>（</rp><rt>Final Fantasy</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>最终幻想VII<rp>（</rp><rt>Final Fantasy VII</rt><rp>）</rp></ruby><br>
				曾经是神罗公司里最伟大的战士，也是人和外星生命“杰诺瓦”进行融合的实验产物。他了解到自己身世之后，逐渐对人类产生恨意，开始了一系列的毁灭活动。只要有足够杰诺瓦细胞，他就能够重生。似乎以在战斗中和精神上折磨克劳德为乐。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				Sephiroth♫~`,
			sst_pokemon_trainer_leaf:`武将作者：南柯、Show-K<br>
				插图作者：未知<br>
				<hr>
				0413. 宝可梦训练家（女性）/Pokémon Trainer (Female)/ポケモントレーナー（女性）<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦 火红／叶绿<rp>（</rp><rt>Pokémon FireRed and LeafGreen Versions</rt><rp>）</rp></ruby><br>
				在早一些的《宝可梦》游戏中，如果你选择了女性训练家，则你的劲敌就会变成男性，反之亦然。从《宝可梦：X/Y》开始，训练家们不但可以选择肤色，还可以更换服装了——夺冠虽然重要，但打扮也不可或缺！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				来看看新人设计的第一个武将！`,
			sst_kyo_kusanagi:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1362. 草薙京/Kyo Kusanagi/草薙京<br>
				系列：<ruby>拳皇<rp>（</rp><rt>The King of Fighters</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>拳皇\x2794<rp>（</rp><rt>The King of Fighters \x2794</rt><rp>）</rp></ruby><br>
				炎之贵公子草薙京，三神器之一“草薙剑”的传人，因此能够使用神器所带来的火焰之力。三神器家族自1800年前便与大蛇结下了宿命的渊源。大蛇作为地球的意志，想要清除一直以来破坏地球的人类，而三神器一族则世世代代守护着大蛇的封印。他们也背负上了与大蛇一族战斗的宿命。不过听说他现在还拿不到中学毕业证。<br>
				——Mario_not_mary、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				所以拳皇XV终于憋出来了……`,
			sst_pauline:`武将作者：mario not mary<br>
				插图作者：맛감쟈<br>
				——${get.formatUrl("https://www.pixiv.net/artworks/84875359")}<br>
				<hr>
				0079. 宝琳/Pauline/ポリーン<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>咚奇刚<rp>（</rp><rt>Donkey Kong</rt><rp>）</rp></ruby><br>
				宝琳登场于1981年的初代《咚奇刚》游戏，在那个游戏中，咚奇刚不断从台阶上扔下木桶，而马力欧需要躲开木桶救出宝琳。经过这么多年之后，她现在的形象和最初登场时也截然不同了。在《超级马力欧奥德赛》中，她作为纽敦市市长举办了一场盛大的庆典。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				此次推出的三噩梦命魂武将其一。`,
			sst_dr_wily:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0873. 威利博士/Dr. Wily/Dr.ワイリー<br>
				系列：<ruby>洛克人<rp>（</rp><rt>Mega Man</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>洛克人<rp>（</rp><rt>Mega Man</rt><rp>）</rp></ruby><br>
				洛克人系列中的疯狂科学家，制造了许多战斗机器人想要掌控世界。他也丝毫不介意偷走其他科学家开发的机器人并将它们改造得更加邪恶。一般来说要击败他改造的8个机器人（初代《洛克人》为6个）才能和他对战。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				此次推出的三噩梦命魂武将其二。`,
			sst_kazuya:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1474. 三岛一八/Kazuya Mishima/三島一八<br>
				系列：<ruby>铁拳<rp>（</rp><rt>Tekken</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>铁拳<rp>（</rp><rt>Tekken</rt><rp>）</rp></ruby><br>
				为什么这位格斗家执意要把斗士们都扔下悬崖？因为这不但符合大乱斗的规则，也是在原作中他和父亲斗得你死我活的表现。作为斗士的三岛一八拥有非常丰富的技能组，还有特殊的移动方式和投技。巧妙利用各种招式制胜！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				MNM终于开始对弃牌堆大打出手了。`,
			sst_kraid:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				0283. 克雷德/Kraid/クレイド<br>
				系列：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>密特罗德<rp>（</rp><rt>Metroid</rt><rp>）</rp></ruby><br>
				宇宙海盗的干部之一，在初代《密特罗德》就有登场。那个时候的它受机能限制还非常小只，但在《超级密特罗德》和《密特罗德：零点任务》中的它就相当巨大了，会从肚子中发射爪子攻击。它也出现在“布林斯塔深部”这个场地的背景中。在“灯火之星”中，它能赋予命魂“重战车流”的效果。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				直接上8血魔将了……`,
			sst_sora:`武将作者：mario not mary、Show-K<br>
				插图作者：未知<br>
				<hr>
				1500. 索拉/Sora/ソラ<br>
				系列：<ruby>王国之心<rp>（</rp><rt>Kingdom Hearts</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>王国之心<rp>（</rp><rt>Kingdom Hearts</rt><rp>）</rp></ruby><br>
				让我们热烈欢迎这一代大乱斗的最后一个斗士登场！虽然索拉并没有带着他的迪士尼伙伴们一起来，但他仍然能使用标志性的钥匙剑“钥刃”和各种魔法，施展灵活的攻击。不过要注意，他的重量比较轻，容易被击飞。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				第一次见到这个“施法”就大为震惊……不过索拉能来大乱斗显然比这个更震惊。`,
			sst_pac_man:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0946. 吃豆人/PAC-MAN/パックマン<br>
				系列：<ruby>吃豆人<rp>（</rp><rt>Pac-Man</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>吃豆人<rp>（</rp><rt>Pac-Man</rt><rp>）</rp></ruby><br>
				黄黄圆圆的吃豆人！他的原作可是创造了“最成功的投币式街机游戏”这一吉尼斯世界纪录的。在大乱斗中，他的技能大多基于最初代的吃豆人。在他的炫耀动作中还有不少南梦宫的其他ip出场。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				大游戏天下，已半入我手！`,
			sst_mewtwo:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0411. 超梦/Mewtwo/ミュウツー<br>
				系列：<ruby>宝可梦<rp>（</rp><rt>Pokémon</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>宝可梦 红／绿<rp>（</rp><rt>Pokémon Red and Green Versions</rt><rp>）</rp></ruby><br>
				使用梦幻的基因制造出来的宝可梦，科学力量可以造出它的身体，给予它强大的力量和极高的智慧，却无法造出一颗温柔的心。它一方面厌恶人类，另一方面又为自己的身份认同而迷茫。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				由强行添加进去的数据强行诞生。`,
			sst_olimar:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				0798. 欧力马/Olimar/キャプテン·オリマー<br>
				系列：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				老练的宇宙飞行家欧力马是多露芬号飞船的船长，他和皮克敏一起在大乱斗中作战，可以拔出皮克敏和使用哨子号令它们。在拥有皮克敏的时候，欧力马的强度会更高，并且不同颜色的皮克敏有不同的效果，在对战之前要查阅清楚。顺便，他的名字倒过来就是马力欧。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0799. 阿尔福/Alph/アルフ<br>
				系列：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>皮克敏3<rp>（</rp><rt>Pikmin 3</rt><rp>）</rp></ruby><br>
				阿尔福是坠毁在星球PNF-404上的年轻探险家，他需要尽快找到失散的船员和飞船。他醒来后发现的第一种生物就是皮克敏。除了探索星球，他和船员们还需要寻找食物以维持生存和供给母星。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0803. 红色皮克敏/Red Pikmin/赤ピクミン<br>
				系列：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				红色皮克敏有着尖尖的鼻子，这也是欧力马遇到的第一种皮克敏。在原作中，它们不怕火。在大乱斗中，红色皮克敏的攻击力是第二高的，并且攻击带火属性。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0804. 蓝色皮克敏/Blue Pikmin/青ピクミン<br>
				系列：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				蓝色皮克敏的嘴角一直耷拉着，看起来不太开心。在原作中，它们可以进入水中取物。在大乱斗中，蓝色皮克敏的防御力是第二高的，投掷出去的伤害也相当可观。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				0805. 黄色皮克敏/Yellow Pikmin/黄ピクミン<br>
				系列：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>皮克敏<rp>（</rp><rt>Pikmin</rt><rp>）</rp></ruby><br>
				黄色皮克敏有尖尖的“耳朵”——其实这个结构的作用仍然不清楚。它们在原作中免疫电，并且是最轻的皮克敏。在大乱斗中，它们被投掷出去时抛物线比其他皮克敏高，并且能对接触到的斗士造成电属性伤害。<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				真正实现了主机/手柄玩即时战略游戏的梦想。`,
			sst_marioraz:`武将作者：mario not mary<br>
				插图作者：无<br>
				<hr>
				R014. 升哥/Marioraz
				<hr>
				“樱井懂个屁大乱斗”`,
			sst_piranha_plant:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1303. 吞食花/Piranha Plant/パックンフラワー<br>
				系列：<ruby>马力欧<rp>（</rp><rt>Mario</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>超级马力欧兄弟<rp>（</rp><rt>Super Mario Bros.</rt><rp>）</rp></ruby><br>
				这些植物与其说是肉食性的，不如说是马力欧食性的。世界上有非常多种吞食花，如果让自然王来给你讲甚至能讲出绕口令来。总之，没有什么吞食花不是火球和震地不能解决的啦！<br>
				——封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				某紫衣男子已绝望。`,
			sst_bayonetta:`武将作者：mario not mary<br>
				插图作者：未知<br>
				<hr>
				1006. 蓓优妮塔（安柏拉的魔女）/Bayonetta (Bayonetta 2)/ベヨネッタ（アンブラの魔女）<br>
				系列：<ruby>蓓优妮塔<rp>（</rp><rt>Bayonetta</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>蓓优妮塔2<rp>（</rp><rt>Bayonetta 2</rt><rp>）</rp></ruby><br>
				蓓优妮塔属于濒临灭绝的“安柏拉的魔女”一族。她擅长使用四肢的四把枪攻击，还能以头发为介质召唤恶魔。在大乱斗中，她的战法也和原作一样华丽。通常必杀技按住按键可以蓄力，并且连续两次使用时姿势必定不同。在3DS和WiiU版《任天堂明星大乱斗》中，她的强度甚至破坏了平衡。<br>
				——无敌阿尔宙斯、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				1007. 蓓优妮塔（丧失记忆的魔女）/Bayonetta (Bayonetta)/ベヨネッタ（記憶を失った魔女）<br>
				系列：<ruby>蓓优妮塔<rp>（</rp><rt>Bayonetta</rt><rp>）</rp></ruby><br>
				首次登场：<ruby>蓓优妮塔 魔兵惊天录<rp>（</rp><rt>Bayonetta</rt><rp>）</rp></ruby><br>
				《蓓优妮塔：魔兵惊天录》中蓓优妮塔的形象。这位安柏拉的魔女从上百年的沉睡中醒来时失去了所有记忆。她的日常一般是扮作修女，吸引天使，然后猎杀它们，直到另一个拥有与她相同力量的魔女出现，她的记忆才开始逐渐恢复。她最后被卷进一场拯救世界的战斗中。<br>
				——无敌阿尔宙斯、封羽翎烈，《任天堂明星大乱斗特别版全命魂介绍》<br>
				<hr>
				Broken!`
		},
		characterTitle:{
			sst_mario:"炎烈意决",
			sst_link:"无言的勇者",
			sst_yoshi:"贪吃的守护者",
			sst_wario:"恶贯满盈",
			sst_villager:"采菊东篱",
			sst_zelda:"沉毅的王女",
			sst_ganondorf:"苏醒的魔王",
			sst_dr_mario:"末日郎中",
			sst_palutena:"光之神话",
			sst_marth:"英雄王",
			sst_rosalina:"众星捧月",
			sst_zero_suit_samus:"战火零星",
			sst_luigi:"绿叶清风",
			sst_bowser:"侵天之火",
			sst_peach:"灼灼其华",
			sst_byleth_female:"神祖破天",
			sst_byleth_male:"春雨天劾",
			sst_massy:"唯一神",
			sst_samus:"银河战士",
			sst_ridley:"狡猾的死神",
			sst_dark_samus:"暗流涌动",
			sst_mr_game_watch:"平面住民",
			sst_mario_not_mary:"傲世轻物",
			sst_yumikohimi:"酸甜可喵",
			sst_haine:"渣男",
			sst_terry:"饿狼传说",
			sst_simon:"除魔圣鞭",
			sst_incineroar:"擂台的猛火",
			sst_greninja:"水无常形",
			sst_kirby:"灯火之星",
			sst_king_k_rool:"暴君",
			sst_donkey_kong:"丛林的王者",
			sst_richter:"血之轮回",
			sst_pokemon_trainer_red:"白银山的王者",
			sst_isabelle:"尽忠职守",
			sst_daisy:"泥金万点",
			sst_meta_knight:"暗夜",
			sst_little_mac:"顽强的斗魂",
			sst_oc:"恶霸",
			sst_mr_8:"东北吴彦祖",
			sst_dark_link:"镜中花月影",
			sst_kyuukou:"灶台上的猛火",
			sst_windier:"笑哭怪人",
			sst_rentianshu:"星火的第一章",
			sst_srf:"步弄清影",
			sst_bowser_jr:"漫天乱书",
			sst_koopalings:"坐镇七方",
			sst_ryu:"求道的武者",
			sst_ken:"红莲格斗王",
			sst_waluigi:"奸巧狞猾",
			sst_master_hand:"秩序之光",
			sst_ike:"战场的屠夫",
			sst_miumiu:"端砚点朱砂",
			sst_toon_link:"海风奏鸣曲",
			sst_wolf:"贪狼吞星",
			sst_young_link:"时光的笛音",
			sst_ocarina_of_time_link:"时光的笛音",
			sst_spring_man:"拳簧",
			sst_joker:"心之怪盗",
			sst_rex:"天之御刃者",
			sst_cuphead_mugman:"推杯换盏",
			sst_mega_man:"蓝色英雄",
			sst_captain_falcon:"风驰电掣",
			sst_jigglypuff:"轻音留香",
			sst_lucario:"波导的勇者",
			sst_pichu:"刹那光火",
			sst_steve:"世界创造者",
			sst_ma:"用晦而藏明",
			sst_feiji:"通巧晓变",
			sst_sonic:"音爆刺猬",
			sst_hero:"龙寻者",
			sst_fox:"狐舞星河",
			sst_alex:"世界探索者",
			sst_min_min:"玉盘珍馐",
			sst_pikachu:"电光一闪",
			sst_falco:"鹰击长空",
			sst_enderman:"末地住民",
			sst_sephiroth:"片翼天使",
			sst_pokemon_trainer_leaf:"三位一体",
			sst_kyo_kusanagi:"炎之贵公子",
			sst_pauline:"纡朱怀金",
			sst_dr_wily:"反逆的齿轮",
			sst_kazuya:"末日铁拳",
			sst_kraid:"地崩山摧",
			sst_sora:"命运之子",
			sst_pac_man:"饕餮盛宴",
			sst_mewtwo:"逆袭造物",
			sst_olimar:"雨后春笋",
			sst_marioraz:"漫卷长路",
			sst_piranha_plant:"层林尽染",
			sst_bayonetta:"猎天使魔女"
		},
		perfectPair:{
			sst_mario:["sst_yoshi","sst_dr_mario","sst_rosalina","sst_luigi","sst_bowser","sst_peach","sst_donkey_kong","sst_daisy","sst_bowser_jr","sst_koopalings","sst_wario","sst_waluigi","sst_pauline","sst_piranha_plant"],
			sst_bowser:["sst_bowser_jr","sst_koopalings","sst_peach"],
			sst_bowser_jr:["sst_koopalings"],
			sst_luigi:["sst_yoshi","sst_peach","sst_daisy"],
			sst_peach:["sst_daisy"],
			sst_wario:["sst_waluigi"],
			sst_link:["sst_zelda","sst_young_link","sst_ocarina_of_time_link","sst_toon_link","sst_massy"],
			sst_zelda:["sst_young_link","sst_ocarina_of_time_link","sst_toon_link"],
			sst_villager:["sst_isabelle"],
			sst_samus:["sst_zero_suit_samus"],
			sst_byleth_male:["sst_byleth_female"],
			sst_simon:["sst_richter"],
			sst_mario_not_mary:["sst_yumikohimi","sst_bowser"],
			sst_yumikohimi:["sst_terry"],
			sst_kyuukou:["sst_windier","sst_incineroar"],
			sst_oc:["sst_bowser"],
			sst_windier:["sst_little_mac"],
			sst_ryu:["sst_ken"],
			sst_meta_knight:["sst_kirby"],
			sst_fox:["sst_falco","sst_wolf"],
			sst_pikachu:["sst_pichu"],
			sst_steve:["sst_alex"],
			sst_pokemon_trainer_red:["sst_pokemon_trainer_red","sst_pikachu"],
			sst_pokemon_trainer_leaf:["sst_pikachu"],
			sst_pauline:["sst_donkey_kong"]
		},
		skill:{
			//System
			braces:{
				intro:{
					content:"#"
				}
			},
			//Mario
			sst_jueyi:{
				mod:{
					aiOrder:(player,card,num)=>{
						if(player.canUse(card,player)&&!game.hasPlayer(current=>current!=player&&player.canUse(card,current))) return num+10;
					}
				},
				trigger:{player:"useCardToPlayer"},
				filter:(event,player)=>event.getParent().targets.contains(event.target)&&event.target.countCards("h")>player.countCards("h"),
				forced:true,
				logTarget:"target",
				content:()=>{
					player.draw("nodelay");
					trigger.getParent().directHit.add(trigger.target);
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:(player,tag,arg)=>arg.target.countCards("h")>player.countCards("h")
				}
			},
			//Link
			sst_qingyong:{
				trigger:{player:"phaseUseBegin"},
				frequent:true,
				content:()=>{
					"step 0"
					player.draw();
					"step 1"
					const next=player.chooseToUse("倾勇：你可以将一张牌当杀对一名其他角色使用（无距离限制，不计入使用次数）");
					next.set("norestore",true);
					next.set("_backupevent","sst_qingyongx");
					next.backup("sst_qingyongx");
					next.set("addCount",false);
					next.set("custom",{
						add:{},
						replace:{window:()=>{}}
					});
					next.set("filterTarget",function(){
						return lib.filter.targetEnabled.apply(this,arguments);
					});
				}
			},
			sst_qingyongx:{
				viewAs:{name:"sha"},
				filterCard:card=>get.itemtype(card)=="card",
				position:"hes",
				check:card=>5-get.value(card)
			},
			//Yoshi
			sst_tanshi:{
				trigger:{global:"gainBegin"},
				filter:(event,player)=>event.player!=player&&event.getParent("phaseDraw")&&event.getParent("phaseDraw").player==event.player&&!event.getParent("phaseDraw").numFixed&&event.player.countCards("h")>player.countCards("h"),
				direct:true,
				content:()=>{
					"step 0";
					player.chooseBool(get.prompt("sst_tanshi",trigger.player),`你可以获得${get.translation(trigger.player)}所摸的${get.cnNumber(trigger.cards.length)}张牌`).set("ai",()=>get.attitude(_status.event.player,_status.event.getTrigger().player)<0);
					"step 1"
					if(result.bool){
						player.logSkill("sst_tanshi",trigger.player);
						game.log(player,"获得了",trigger.player,"所摸的",get.cnNumber(trigger.cards.length),"张牌");
						trigger.set("player",player);
					}
				},
				ai:{
					expose:0.2
				}
			},
			//Wario
			sst_haoduo:{
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]
				},
				filter:(event,player)=>{
					if(!player.isMinHandcard()) return false;
					if(!game.hasPlayer(current=>current.countCards("h")&&current.isMaxHandcard())) return false;
					if(event.getParent("sst_haoduo").name=="sst_haoduo") return false;
					if(event.name=="gain"&&event.player==player&&event.cards&&event.cards.length&&player.hasCard(card=>event.cards.contains(card),"h")) return true;
					const evt=event.getl(player);
					return evt&&evt.player==player&&evt.hs&&evt.hs.length;
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_haoduo"),(card,player,target)=>target.countCards("h")&&target.isMaxHandcard()).set("ai",target=>Math.cbrt(get.attitude(_status.event.player,target)*(_status.event.player.getCards("h").map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)-target.getCards("h").map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0))));
					"step 1"
					if(result.targets){
						player.logSkill("sst_haoduo",result.targets);
						player.swapHandcards(result.targets[0]);
					}
				},
				ai:{
					nolose:1,
					noh:1,
					expose:0.2
				}
			},
			//Villager
			sst_huandai:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.countGainableCards(player,"h")),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_huandai"),(card,player,target)=>target!=player&&target.countGainableCards(player,"h")).set("ai",target=>{
						if(_status.event.player.hasJudge("lebu")) return 0;
						return get.attitude(target,_status.event.player);
					});
					"step 1"
					if(result.targets){
						player.logSkill("sst_huandai",result.targets);
						event.target=result.targets[0];
						event.target.chooseCard([1,Infinity],`还贷：是否交给${get.translation(player)}任意张手牌？`,card=>lib.filter.canBeGained(card,_status.event.getParent().player,_status.event.player)).set("ai",card=>{
							const target=_status.event.getParent().player;
							if(target.hasJudge("lebu")) return 0;
							const player=_status.event.player;
							if(get.name(card)=="du") return Math.cbrt(-get.attitude(player,target)*20);
							return Math.cbrt(get.attitude(player,target)*get.useful(card,target));
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length){
						target.give(result.cards,player);
						if(typeof player.storage.sst_huandai_effect!="object") player.storage.sst_huandai_effect={};
						if(typeof player.storage.sst_huandai_effect[target.playerid]!="number") player.storage.sst_huandai_effect[target.playerid]=0;
						player.storage.sst_huandai_effect[target.playerid]+=result.cards.length;
						player.addTempSkill("sst_huandai_effect");
					}
				},
				ai:{
					effect:{
						player:(card,player)=>{
							if(typeof player.storage.sst_huandai_effect!="object") return;
							if(player.countUsed()<Math.max(...Object.values(player.storage.sst_huandai_effect))) return [1,2];
						}
					}
				}
			},
			sst_huandai_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:storage=>`你已向${game.findPlayersByPlayerid(Object.keys(storage)).sortBySeat(_status.currentPhase).map(current=>`${get.translation(current)}（${get.cnNumber(storage[current.playerid])}张牌）`).join("、")}贷款`,
					markcount:storage=>game.findPlayersByPlayerid(Object.keys(storage)).map(current=>storage[current.playerid]).reduce((previousValue,currentValue)=>previousValue+currentValue,0)
				},
				onremove:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>typeof player.storage.sst_huandai_effect=="object",
				forced:true,
				logTarget:(event,player)=>game.findPlayersByPlayerid(Object.keys(player.storage.sst_huandai_effect)).sortBySeat(_status.currentPhase),
				content:()=>{
					"step 0"
					event.targets=lib.skill.sst_huandai_effect.logTarget(trigger,player);
					event.num=0;
					"step 1"
					if(player.countUsed(null,true)>=player.storage.sst_huandai_effect[targets[num].playerid]){
						targets[num].draw(player.storage.sst_huandai_effect[targets[num].playerid]);
						event.goto(3);
					}
					else{
						player.damage(targets[num],"nocard");
					}
					"step 2"
					game.delayx();
					"step 3"
					event.num++;
					if(event.num<targets.length) event.goto(1);
				}
			},
			//Zelda
			sst_anzhi:{
				preHidden:true,
				trigger:{global:"useCard"},
				filter:(event,player)=>event.player.countUsed(null,true)>5-player.countDisabled()&&event.player.countCards("he"),
				direct:true,
				content:()=>{
					player.discardPlayerCard(get.prompt("sst_anzhi",trigger.player),trigger.player,"he").set("logSkill",["sst_anzhi",trigger.player]);
				},
				ai:{
					threaten:player=>1+player.countDisabled()*0.2,
					expose:0.2
				}
			},
			sst_yinjie:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_yinjie)) player.storage.sst_yinjie=[];
				},
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player!=player&&event.player.getHp()>=player.getHp()&&5-player.countDisabled(),
				logTarget:"player",
				check:(event,player)=>{
					if(get.attitude(player,event.player)>=0) return false;
					const cards=player.getCards();
					return 6-cards.map(card=>get.useful(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/cards.length>0;
				},
				content:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_yinjie_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_yinjie)) player.storage.sst_yinjie.length=0;
						});
					}
					"step 1"
					player.chooseToDisable();
					"step 2"
					player.discard(player.getCards("h",card=>lib.filter.cardDiscardable(card,player)));
					"step 3"
					player.storage.sst_yinjie.push(trigger.player);
					trigger.player.addTempSkill("sst_yinjie_effect");
					player.addTempSkill("sst_yinjie2");
				},
				ai:{
					threaten:player=>{
						if(5-player.countDisabled()) return 3;
						return 1;
					},
					expose:0.3
				}
			},
			sst_yinjie2:{
				charlotte:true,
				trigger:{global:"phaseJieshuBegin"},
				forced:true,
				filter:(event,player)=>player.storage.sst_yinjie.contains(event.player)&&event.player.isIn(),
				logTarget:"player",
				content:()=>{
					player.gain(trigger.player.getGainableCards(player,"he"),trigger.player,"giveAuto","bySelf");
				}
			},
			sst_yinjie_effect:{
				mark:true,
				intro:{
					content:(storage,player)=>{
						const players=game.filterPlayer(current=>Array.isArray(current.storage.sst_yinjie)&&current.storage.sst_yinjie.contains(player));
						if(!players.length) return "【印结】来源不在场";
						if(!players.length>1){
							players.sortBySeat(_status.currentPhase);
							return `${get.translation(players)}与你相互距离为1<br>本回合内你使用牌不能指定其他角色为目标<br>结束阶段，${get.translation(players)}获得你所有牌`;
						}
						return `${get.translation(players)}与你相互距离为1<br>本回合内你使用牌不能指定除${get.translation(players)}外角色为目标<br>结束阶段，${get.translation(players)}获得你所有牌`;
					}
				},
				mod:{
					globalFrom:(from,to)=>{
						if(Array.isArray(to.storage.sst_yinjie)&&to.storage.sst_yinjie.contains(from)) return -Infinity;
					},
					globalTo:(from,to)=>{
						if(Array.isArray(from.storage.sst_yinjie)&&from.storage.sst_yinjie.contains(to)) return -Infinity;
					},
					playerEnabled:(card,player,target)=>{
						if(game.filterPlayer(current=>Array.isArray(current.storage.sst_yinjie)&&current.storage.sst_yinjie.contains(player)).length>1) return false;
						if(!Array.isArray(target.storage.sst_yinjie)||!target.storage.sst_yinjie.contains(player)) return false;
					}
				},
				ai:{
					nokeep:true
				}
			},
			sst_qinwei:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_qinwei)) player.storage.sst_qinwei=[];
					if(!Array.isArray(player.storage.sst_qinwei_es)) player.storage.sst_qinwei_es=[];
				},
				intro:{
					content:(storage,player)=>{
						if(!storage.length) return `没有与你距离最近的其他${get.translation(player.group)}势力角色`;
						let str=`与你距离最近的其他${get.translation(player.group)}势力角色：${get.translation(storage)}<br>`;
						const equips=[];
						storage.forEach(current=>equips.addArray(current.getCards("e",card=>get.name(card)!="muniu")));
						if(!equips.length){
							str+="没有装备";
						}
						else{
							str+=`装备：${get.translation(equips)}`;
						}
						return str;
					}
				},
				//Remove all extra equip skill(s)
				onremove:player=>player.removeAdditionalSkill("sst_qinwei"),
				unique:true,
				zhuSkill:true,
				mod:{
					attackRangeBase:(player,range)=>{
						if(player.hasZhuSkill("sst_qinwei")){
							const equips=[];
							player.storage.sst_qinwei.forEach(current=>equips.addArray(current.getCards("e",card=>get.name(card)!="muniu")));
							if(equips.length){
								const rangeNow=Math.max(...equips.map(equip=>{
									const info=get.info(equip);
									return 1-((info.distance&&typeof info.distance.attackFrom=="number")?info.distance.attackFrom:0);
								}));
								if(rangeNow>range) return rangeNow;
							}
						}
					},
					globalFrom:(from,to,distance)=>{
						if(from.hasZhuSkill("sst_qinwei")){
							const equips=[];
							from.storage.sst_qinwei.forEach(current=>equips.addArray(current.getCards("e",card=>get.name(card)!="muniu")));
							if(equips.length){
								return distance+Math.min(...equips.map(equip=>{
									const info=get.info(equip);
									return (info.distance&&typeof info.distance.globalFrom=="number")?info.distance.globalFrom:0;
								}));
							}
						}
					},
					globalTo:(from,to,distance)=>{
						if(to.hasZhuSkill("sst_qinwei")){
							const equips=[];
							to.storage.sst_qinwei.forEach(current=>equips.addArray(current.getCards("e",card=>get.name(card)!="muniu")));
							if(equips.length){
								return distance+Math.max(...equips.map(equip=>{
									const info=get.info(equip);
									return (info.distance&&typeof info.distance.globalTo=="number")?info.distance.globalTo:0;
								}));
							}
						}
					}
				},
				forced:true,
				popup:false,
				//When any card moved
				trigger:{global:["loseEnd","equipEnd","addJudgeEnd","gainEnd","loseAsyncEnd","addToExpansionEnd"]},
				filter:(event,player)=>player.hasZhuSkill("sst_qinwei"),
				content:()=>{
					"step 0"
					//Get nearest player(s)
					const players=game.filterPlayer(current=>{
						if(current==player) return false;
						if(current.group!=player.group) return false;
						const dist=get.distance(player,current);
						if(dist<=1) return true;
						return !game.hasPlayer(current2=>current2!=player&&current2.group==player.group&&get.distance(player,current2)<dist);
					});
					player.storage.sst_qinwei=players;
					player.markAuto("sst_qinwei");
					const es=[];
					//Get their equip skill(s)
					players.forEach(current=>es.addArray(current.getSkills("e")));
					//Remove an equip skill if it is no longer exist
					player.storage.sst_qinwei_es.forEach(skill=>{
						if(!es.contains(skill)&&player.hasSkill(skill)) player.removeAdditionalSkill("sst_qinwei",skill);
					});
					//Add an equip skill if the player do not have it
					for(let i=0;i<es.length;i++){
						if(es[i].indexOf("muniu_skill")==0){
							es.splice(i--,1);
							continue;
						}
						player.addAdditionalSkill("sst_qinwei",es[i],true);
					}
					player.storage.sst_qinwei_es=es;
				}
			},
			//Ganondorf
			sst_chengli:{
				mod:{
					aiValue:(player,card,num)=>{
						const cards=player.getCards("hes");
						const geti=()=>{
							if(cards.contains(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						if(get.name(card)=="shan"){
							cards.sort((a,b)=>(get.name(b)=="shan"?1:2)-(get.name(a)=="shan"?1:2));
							if(get.name(card)=="shan") return Math.min(num,[7,5.1,2][Math.min(geti(),2)])*0.6;
							return Math.max(num,[7,5.1,2][Math.min(geti(),2)]);
						}
						else if(get.name(card)=="wuxie"){
							cards.sort((a,b)=>(get.name(b)=="wuxie"?1:2)-(get.name(a)=="wuxie"?1:2));
							if(get.name(card)=="wuxie") return Math.min(num,[6,4,3][Math.min(geti(),2)])*0.6;
							return Math.max(num,[6,4,3][Math.min(geti(),2)]);
						}
					},
					aiUseful:function(){
						return lib.skill.sst_chengli.mod.aiValue.apply(this,arguments);
					}
				},
				locked:false,
				enable:"chooseToUse",
				filter:(event,player)=>{
					if(!player.isDamaged()||!player.countCards("hes")) return false;
					for(const name of lib.inpile){
						const type=get.type(name);
						if((type=="basic"||type=="trick")&&event.filterCard({name:name},player,event)) return true;
					}
					return false;
				},
				hiddenCard:(player,name)=>{
					if(!lib.inpile.contains(name)||!player.isDamaged()||!player.countCards("hes")) return false;
					const type=get.type(name);
					return type=="basic"||type=="trick";
				},
				prompt:()=>{
					let num=_status.event.player.countUsed(null,true)+1;
					if(_status.currentPhase!=_status.event.player) num++;
					return `你可以将${get.cnNumber(num)}张牌当作任意一张基本牌或普通锦囊牌使用`;
				},
				chooseButton:{
					dialog:(event,player)=>{
						const list=[];
						lib.inpile.forEach(name=>{
							if(name=="sha"){
								if(event.filterCard({name:name},player,event)) list.push(["基本","","sha"]);
								lib.inpile_nature.forEach(nature=>{
									if(event.filterCard({name:name,nature:nature},player,event)) list.push(["基本","","sha",nature]);
								});
							}
							else if(get.type(name)=="trick"&&event.filterCard({name:name},player,event)){
								list.push(["锦囊","",name]);
							}
							else if(get.type(name)=="basic"&&event.filterCard({name:name},player,event)){
								list.push(["基本","",name]);
							}
						});
						return ui.create.dialog("逞力",[list,"vcard"]);
					},
					filter:(button,player)=>_status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent()),
					check:button=>{
						if(["wugu","zhulu_card","yiyi","lulitongxin","lianjunshengyan","diaohulishan"].contains(button.link[2])) return 0;
						const player=_status.event.player;
						if(player.countCards()<=(()=>{
							const num=player.countUsed(null,true)+1;
							if(_status.currentPhase!=player) return num+1;
							return num+1;
						})()) return 0;
						if(player.countCards("hs",button.link[2])) return 0;
						if(player.hasHistory("useCard",evt=>evt.skill=="sst_chengli_backup"&&get.name(evt.card)==button.link[2])) return 0;
						let val=player.getUseValue({
							name:button.link[2],
							nature:button.link[3],
						});
						if(_status.event.getParent().type!="phase") val-=3;
						return val;
					},
					backup:links=>({
						filterCard:true,
						selectCard:()=>{
							const num=_status.event.player.countUsed(null,true)+1;
							if(_status.currentPhase!=_status.event.player) return num+1;
							return num;
						},
						popname:true,
						position:"hes",
						check:card=>5-get.value(card),
						viewAs:{name:links[0][2],nature:links[0][3]}
					}),
					prompt:(links,player)=>{
						let num=player.countUsed(null,true)+1;
						if(_status.currentPhase!=player) num++;
						return `将${get.cnNumber(num)}张牌当作${get.translation(links[0][3])||""}${get.translation(links[0][2])}使用`;
					}
				},
				ai:{
					order:10,
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					respondTao:true,
					save:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.countCards("hes")||!player.isDamaged()) return false;
					},
					result:{
						player:player=>{
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							const cards=player.getCards("hes");
							return Math.cbrt(5-cards.map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/cards.length);
						}
					},
					effect:{
						player:(card,player,target)=>{
							if(get.tag(card,"recover")&&target==player&&target.hp>1&&target.getDamagedHp()<2) return [1,-3];
						},
						target:(card,player,target)=>{
							if(get.tag(card,"recover")&&target.hp>1&&target.getDamagedHp()<2) return [1,-3];
						}
					}
				}
			},
			sst_huoluan:{
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>!player.isDamaged(),
				forced:true,
				content:()=>{
					"step 0"
					player.loseHp();
					"step 1"
					game.delayx();
				},
				ai:{
					neg:true
				},
				group:"sst_huoluan2"
			},
			sst_huoluan2:{
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]
				},
				filter:(event,player)=>{
					if(player.countCards("h")) return false;
					const evt=event.getl(player);
					return evt&&evt.player==player&&evt.hs&&evt.hs.length>0;
				},
				forced:true,
				content:()=>{
					player.loseMaxHp();
				}
			},
			sst_yane:{
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player.group==player.group&&player.hasZhuSkill("sst_yane"),
				unique:true,
				zhuSkill:true,
				logTarget:"player",
				check:(event,player)=>get.damageEffect(event.player,player,player)+Math.cbrt(get.attitude(player,event.player))>0,
				content:()=>{
					"step 0"
					trigger.player.damage(player,"nocard");
					"step 1"
					trigger.player.draw(2);
				}
			},
			//Dr. Mario
			sst_quji:{
				mark:true,
				intro:{
					mark:(dialog,content,player)=>{
						if(player!=game.me) return `牌堆顶的牌始终对${get.translation(player)}可见`;
						if(get.itemtype(_status.pileTop)!="card") return "牌堆顶无牌";
						dialog.addAuto(_status.pileTop);
					}
				},
				usable:1,
				preHidden:true,
				trigger:{global:"useCard"},
				filter:(event,player)=>player.hasCard(card=>lib.filter.cardDiscardable(card,player),"h")||get.itemtype(_status.pileTop)=="card",
				direct:true,
				content:()=>{
					"step 0"
					let effect=0;
					if(trigger.card.name=="wuxie"||trigger.card.name=="shan"){
						if(get.attitude(player,trigger.player)<-1){
							effect=-1;
						}
					}
					else if(trigger.targets&&trigger.targets.length){
						trigger.targets.forEach(current=>effect+=get.effect(current,trigger.card,trigger.player,player));
					}
					const suit=get.suit(trigger.card);
					const info=[`###${get.prompt("sst_quji",trigger.player)}${suit?`（${get.translation(suit)}）`:""}###你可以将牌堆顶一张与${get.translation(trigger.card)}花色相同的牌置入弃牌堆，或弃置一张与${get.translation(trigger.card)}花色相同的手牌，抵消之${suit?`（${get.translation(suit)}）`:""}`];
					if(get.itemtype(_status.pileTop)=="card"){
						info.push(`<div class="text center">牌堆顶</div>`);
						event.card=_status.pileTop;
						info.push([_status.pileTop]);
					}
					if(player.countCards("h")){
						info.push(`<div class="text center">手牌区</div>`);
						info.push(player.getCards("h"));
					}
					const next=player.chooseButton();
					next.set("createDialog",info);
					next.set("filterButton",button=>{
						const card=_status.event.getTrigger().card;
						if(card!=_status.pileTop&&!lib.filter.cardDiscardable(button.link,_status.event.player)) return false;
						return get.suit(button.link)==get.suit(card);
					});
					next.set("ai",button=>{
						const player=_status.event.player;
						const evt=_status.event.getTrigger();
						let needToDo=false;
						if(_status.event.effect<0){
							if(evt.card.name=="sha"){
								const target=evt.targets[0];
								if(target==player){
									if(!player.countCards("h","shan")) needToDo=true;
								}
								else{
									if(target.hp==1||target.countCards("h")<=2&&target.hp<=2) needToDo=true;
								}
							}
							else{
								needToDo=true;
							}
						}
						if(needToDo){
							if(button.link==_status.pileTop) return 10;
							return 5-get.value(button.link);
						}
						return 0;
					});
					next.set("effect",effect);
					"step 1"
					if(result.links&&result.links.length){
						player.logSkill("sst_quji",trigger.player);
						if(result.links[0]==event.card){
							game.cardsDiscard(result.links);
							player.$throw(result.links);
							game.log(player,"将",result.links,"置入了弃牌堆");
							player.popup("牌堆顶");
							player.$fullscreenpop("牌堆顶");
						}
						else{
							player.discard(result.links);
							event.goto(3);
						}
					}
					else{
						player.storage.counttrigger[event.name]--;
						event.finish();
					}
					"step 2"
					//trigger.targets.slice(0).sortBySeat(_status.currentPhase).shift()
					if(!trigger.target) trigger.target=player;
					trigger.neutralize();
					game.broadcastAll(ui.clear);
					game.updateRoundNumber();
					game.delayx();
					event.finish();
					"step 3"
					if(!trigger.target) trigger.target=player;
					trigger.neutralize();
				},
				ai:{
					expose:0.2,
					threaten:1.5
				}
			},
			//Palutena
			sst_qiji:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_qiji)) player.storage.sst_qiji=[false,false];
				},
				delay:false,
				enable:"phaseUse",
				filter:(event,player)=>{
					if(player.storage.sst_qiji[0]){
						return !player.storage.sst_qiji[1]&&player.countCards("he")>=3;
					}
					else if(player.storage.sst_qiji[1]){
						return !player.storage.sst_qiji[0];
					}
					return true;
				},
				filterCard:true,
				selectCard:()=>{
					const player=_status.event.player;
					if(player.storage.sst_qiji[0]){
						return 3;
					}
					else if(player.storage.sst_qiji[1]){
						return 0;
					}
					return [0,3];
				},
				filterTarget:()=>ui.selected.cards.length==0||ui.selected.cards.length==3,
				targetprompt:()=>ui.selected.cards.length?"翻面":"摸三张牌",
				prompt:()=>{
					const player=_status.event.player;
					if(player.storage.sst_qiji[0]){
						return "选择三张牌：你弃置这三张牌，令指定角色翻面";
					}
					else if(player.storage.sst_qiji[1]){
						return "不选择牌：你翻面，令指定角色摸三张牌";
					}
					return "不选择牌：你翻面，令指定角色摸三张牌<br>选择三张牌：你弃置这三张牌，令指定角色翻面";
				},
				check:card=>{
					if(!ui.selected.cards.length&&!_status.event.player.storage.sst_qiji[0]) return 0;
					return 8-get.value(card);
				},
				content:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_qiji_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_qiji)){
								player.storage.sst_qiji[0]=false;
								player.storage.sst_qiji[1]=false;
							}
						});
					}
					if(cards.length==0){
						player.storage.sst_qiji[0]=true;
						event.goto(1);
					}
					else{
						player.storage.sst_qiji[1]=true;
						event.goto(4);
						game.delayx();
					}
					"step 1"
					player.turnOver();
					"step 2"
					game.delayx();
					"step 3"
					target.draw(3);
					event.finish();
					"step 4"
					target.turnOver();
					"step 5"
					game.delayx();
				},
				position:"he",
				ai:{
					order:(skill,player)=>{
						if(!player.storage.sst_qiji[0]) return 5;
						return 3;
					},
					result:{
						target:(player,target)=>{
							if(!ui.selected.cards.length){
								if(target==player) return 3;
								return 2;
							}
							else{
								if(target.hasSkillTag("noturn")) return 0;
								if(target.classList.contains("turnedover")){
									if(target==player) return 3;
									return 2;
								}
								else{
									return -2;
								}
							}
						},
						player:1
					},
					expose:0.2
				}
			},
			sst_shengbing:{
				trigger:{player:"loseAfter"},
				filter:event=>event.es&&event.es.length,
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_shengbing"),(card,player,target)=>{
						if(player==target) return false;
						const equips=_status.event.getTrigger().es;
						for(const equip of equips){
							if(target.canEquip(equip,true)) return true;
						}
						return false;
					}).set("ai",target=>Math.cbrt(_status.event.getTrigger().es.filter(equip=>target.canEquip(equip,true)).map(equip=>get.effect(target,equip,_status.event.player)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)));
					"step 1"
					if(result.targets){
						player.logSkill("sst_shengbing",result.targets);
						event.target=result.targets[0];
						trigger.es.filter(card=>event.target.canEquip(card,true)).forEach((equip,i,equips)=>{
							const next=event.target.equip(equip);
							if(i>=equips.length-1) next.set("delay",true);
						});
					}
					else{
						event.finish();
					}
					"step 2"
					target.chooseToDiscard("圣兵：弃置一张牌","he",true);
					"step 3"
					target.addTempSkill("sst_shengbing_effect",{player:"phaseUseBegin"});
					target.addMark("sst_shengbing_effect",1,false);
				},
				ai:{
					expose:0.2,
					noe:true
				}
			},
			sst_shengbing_effect:{
				charlotte:true,
				intro:{
					content:"下一个出牌阶段你可以额外使用&张杀"
				},
				onremove:player=>{
					const num=player.countMark("sst_shengbing_effect");
					player.removeMark("sst_shengbing_effect",num,false);
					if(player.isIn()){
						player.addTempSkill("sst_shengbing_effect2","phaseUseAfter");
						player.addMark("sst_shengbing_effect2",num,false);
					}
				}
			},
			sst_shengbing_effect2:{
				charlotte:true,
				intro:{
					content:"此出牌阶段你可以额外使用&张杀"
				},
				onremove:true,
				mod:{
					cardUsable:(card,player,num)=>{
						if(card.name=="sha") return num+player.countMark("sst_shengbing_effect2");
					}
				}
			},
			//Marth
			sst_hanmang:{
				trigger:{source:"damageBegin1"},
				filter:(event,player)=>player.getAttackRange()==Math.max(1,get.distance(player,event.player)),
				forced:true,
				logTarget:"player",
				content:()=>{
					trigger.num++;
				},
				ai:{
					damageBonus:true
				}
			},
			sst_jianbu:{
				trigger:{player:"phaseDrawBegin2"},
				filter:event=>!event.numFixed,
				direct:true,
				content:()=>{
					"step 0"
					player.chooseControl("cancel2").set("choiceList",[
						"少摸一张牌，本回合你计算与其他角色的距离-1",
						"多摸一张牌，本回合你计算与其他角色的距离+1"
					]).set("ai",()=>{
						const player=_status.event.player;
						if(player.countCards("h")<2) return 1;
						if(!game.hasPlayer(current=>get.distance(player,current,"attack")<player.getAttackRange())) return 1;
						const target=game.findPlayer(current=>!game.hasPlayer(current2=>current2!=current&&get.damageEffect(current2,player,player)>get.damageEffect(current,player,player)));
						if(!target) return 1;
						if(get.distance(player,target,"attack")<player.getAttackRange()) return 1;
						if(player.countCards("h")>2&&player.hasSha()&&get.distance(player,target,"attack")-player.getAttackRange()==1) return 0;
						return "cancel2";
					}).set("prompt",get.prompt("sst_jianbu")).set("prompt2",get.translation("sst_jianbu_info"));
					"step 1"
					if(result.index==0){
						player.logSkill("sst_jianbu");
						trigger.num--;
						player.addTempSkill("sst_jianbu_less");
						player.addMark("sst_jianbu_less",1,false);
					}
					else if(result.index==1){
						player.logSkill("sst_jianbu");
						trigger.num++;
						player.addTempSkill("sst_jianbu_more");
						player.addMark("sst_jianbu_more",1,false);
					}
				}
			},
			sst_jianbu_less:{
				charlotte:true,
				marktext:"-",
				intro:{
					content:"本回合你计算与其他角色的距离-#"
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_jianbu_less")
				}
			},
			sst_jianbu_more:{
				charlotte:true,
				marktext:"+",
				intro:{
					content:"本回合你计算与其他角色的距离+#"
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance+from.countMark("sst_jianbu_more")
				}
			},
			sst_fuguo:{
				unique:true,
				zhuSkill:true,
				global:"sst_fuguo2"
			},
			sst_fuguo2:{
				direct:true,
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player!=player&&event.player.hasZhuSkill("sst_fuguo",player)&&event.player.group==player.group&&player.countGainableCards(event.player,"he"),
				content:()=>{
					"step 0"
					player.chooseCard(get.prompt("sst_fuguo2",trigger.player),`你可以交给${get.translation(trigger.player)}一张牌`,"he",card=>lib.filter.canBeGained(card,_status.event.getTrigger().player,_status.event.player)).set("ai",card=>{
						const player=_status.event.player;
						const target=_status.event.getTrigger().player;
						if(get.name(card)=="du") return Math.cbrt(-get.attitude(player,target)*20);
						return Math.cbrt(get.attitude(player,target)*get.value(card))-player.getHandcardLimit()+player.countCards("he",card=>lib.filter.canBeGained(card,target,player));
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_fuguo2",trigger.player);
						player.give(result.cards,trigger.player);
					}
				},
				ai:{
					expose:0.2
				}
			},
			//Rosalina
			sst_xingchen:{
				trigger:{player:"loseBefore"},
				filter:(event,player)=>{
					if(event.getParent().name!="discard") return false;
					for(const card of event.cards){
						if(player.hasCard(i=>i==card,"h")) return true;
					}
					return false;
				},
				prompt2:event=>{
					const str=`你可以将${get.translation(event.cards.filter(card=>event.player.hasCard(i=>i==card,"h")))}任意分配给其他角色`;
					if(_status.currentPhase&&_status.currentPhase.isIn()) return `${str}，然后${get.translation(_status.currentPhase)}摸一张牌`;
					return str;
				},
				check:(event,player)=>game.hasPlayer(current=>current!=player&&get.attitude(player,current)>0),
				content:()=>{
					"step 0"
					event.cards=trigger.cards.filter(card=>player.hasCard(i=>i==card,"h"));
					"step 1"
					if(cards.length>1){
						player.chooseCardButton("星尘：你可以将牌分配给其他角色",cards,[1,cards.length]).set("ai",()=>{
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(cards.length==1){
						event._result={links:cards.slice(0),bool:true};
					}
					else{
						event.goto(4);
					}
					"step 2"
					if(result.links&&result.links.length){
						result.links.forEach(link=>cards.remove(link));
						event.toGive=result.links;
						player.chooseTarget(`将${get.translation(result.links)}分配给一名其他角色`,true,lib.filter.notMe).set("ai",target=>{
							const att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards("h"));
							}
							else{
								return att/100;
							}
						}).set("enemy",get.value(event.toGive[0],player,"raw")<0);
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"green");
						player.give(event.toGive,result.targets[0],true);
						event.goto(1);
					}
					"step 4"
					if(_status.currentPhase&&_status.currentPhase.isIn()) _status.currentPhase.draw();
				}
			},
			sst_zhuansheng:{
				unique:true,
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"转生",
				animationColor:"water",
				intro:{
					content:"limited"
				},
				logTarget:"player",
				trigger:{global:"dieBefore"},
				content:()=>{
					"step 0"
					player.awakenSkill("sst_zhuansheng");
					trigger.cancel();
					player.discard(player.getCards("hej",card=>lib.filter.cardDiscardable(card,player)));
					"step 1"
					if(!_status.characterlist){
						const list=[];
						for(const i in lib.character){
							if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
						game.filterPlayer2(current=>{
							list.remove(current.name);
							list.remove(current.name1);
							list.remove(current.name2);
						});
						_status.characterlist=list;
					}
					_status.characterlist.randomSort();
					const name=_status.characterlist[0];
					const group=lib.character[_status.characterlist[0]][1];
					_status.characterlist.shift();
					event.toRemove=trigger.player.name;
					event.toChange=name;
					if(event.change) event.trigger("removeCharacterBefore");
					event.group=group;
					"step 2"
					game.log(trigger.player,"将武将变更为",`#b${get.translation(event.toChange)}`);
					trigger.player.reinit(trigger.player.name,event.toChange);
					if(event.group!="shen"&&event.group!="sst_smash") trigger.player.changeGroup(event.group,false);
					game.triggerEnter(player);
					"step 3"
					if(trigger.player.hp<Math.ceil(trigger.player.maxHp/2)) trigger.player.recover(trigger.player.maxHp-trigger.player.hp-Math.floor(trigger.player.maxHp/2),"nocard");
				},
				check:(event,player)=>get.attitude(player,event.player)>0,
				ai:{
					expose:0.2
				}
			},
			//Zero Suit Samus
			sst_guangsuo:{
				trigger:{player:"useCardAfter"},
				global:"sst_guangsuo2",
				filter:event=>{
					if(get.name(event.card)!="sha") return false;
					return lib.skill.sst_guangsuo.logTarget(event).length;
				},
				logTarget:event=>{
					if(!event.targets||!event.targets.length) return [];
					const targets=event.targets.slice(0);
					for(let i=0;i<targets.length;i++){
						if(targets[i].isLinked()||!targets[i].isIn()) targets.splice(i--,1);
					}
					return targets.sortBySeat(_status.currentPhase);
				},
				check:(event,player)=>lib.skill.sst_guangsuo.logTarget(event).map(target=>{
					let att=get.attitude(player,target);
					if(att<0){
						att=-Math.sqrt(-att);
					}
					else{
						att=Math.sqrt(att);
					}
					return -0.9*att;
				}).reduce((previousValue,currentValue)=>previousValue+currentValue,0)>0,
				content:()=>{
					"step 0"
					lib.skill.sst_guangsuo.logTarget(trigger).forEach(target=>target.link(true));
					"step 1"
					game.delayx();
				},
				ai:{
					expose:0.2
				}
			},
			sst_guangsuo2:{
				mod:{
					cardEnabled:(card,player)=>{
						if(_status.currentPhase.isIn()&&_status.currentPhase.hasSkill("sst_guangsuo")&&_status.currentPhase!=player&&player.isLinked()) return false;
					},
					cardRespondable:function(){
						return lib.skill.sst_guangsuo2.mod.cardEnabled.apply(this,arguments);
					},
					cardSavable:function(){
						return lib.skill.sst_guangsuo2.mod.cardEnabled.apply(this,arguments);
					}
				}
			},
			sst_qingying:{
				enable:"phaseUse",
				usable:1,
				filterCard:()=>false,
				selectCard:-1,
				filterTarget:(card,player,target)=>target.countDiscardableCards(player,"ej"),
				delay:false,
				content:()=>{
					"step 0"
					player.discardPlayerCard(`轻影：弃置${get.translation(target)}场上一张牌`,target,"ej",true);
					"step 1"
					if(target==player){
						player.draw(2);
						player.storage.sst_qingying_effect=player;
						player.addTempSkill("sst_qingying_effect");
					}
				},
				ai:{
					result:{
						target:(player,target)=>{
							if(target==player&&target.countCards("ej")) return 2;
							const att=get.attitude(player,target);
							if(att>0){
								if(target.hasCard(card=>{
									const cardj=card.viewAs?{name:card.viewAs}:card;
									return get.effect(target,cardj,target,player)<0;
								},"j")) return 3;
								if(target.getEquip("baiyin")&&target.isDamaged()&&
									get.recoverEffect(target,player,player)>0){
									if(target.hp==1&&!target.hujia) return 1.6;
								}
								if(target.hasCard(card=>{
									if(get.position(card)=="e") return get.value(card,target)<0;
								},"e")) return 1;
							}
							const es=target.getCards("e");
							const noe=(es.length==0||target.hasSkillTag("noe"));
							const noe2=!es.some(esx=>get.value(esx,target)>0);
							if(noe||noe2) return 0;
							if(att<=0&&!target.countCards("e")) return 1.5;
							return -1.5;
						}
					},
					order:5
				}
			},
			sst_qingying_effect:{
				charlotte:true,
				mark:"character",
				intro:{
					content:"本回合你使用牌无距离和次数限制"
				},
				mod:{
					targetInRange:()=>true,
					cardUsable:()=>Infinity
				}
			},
			//Luigi
			sst_que:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>game.hasPlayer(current=>player!=current&&current.countCards("h")),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_que"),`你可以观看一名其他角色的手牌，然后获得其中至多${get.cnNumber(player.getDamagedHp()+1)}张黑色牌`,(card,player,target)=>target!=player&&target.countCards("h")).set("ai",target=>-get.attitude(_status.event.player,target));
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_que",result.targets);
						player.gainPlayerCard(`驱厄：你可以获得最多${get.cnNumber(player.getDamagedHp()+1)}张黑色牌`,result.targets[0],[1,player.getDamagedHp()+1],"h","visible").set("filterButton",button=>get.color(button.link)=="black").set("visibleMove",true);
					}
					"step 2"
					if(!result.cards||!result.cards.length) game.delayx();
				},
				ai:{
					expose:0.2
				}
			},
			sst_guiyun:{
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>!player.countUsed(null,true)&&!player.hasHistory("lose",evt=>evt.type=="discard"),
				forced:true,
				content:()=>{
					player.storage.sst_guiyun_effect=player;
					player.addTempSkill("sst_guiyun_effect",{player:"phaseZhunbeiBegin"});
				}
			},
			sst_guiyun_effect:{
				trigger:{player:"damageBegin4"},
				mark:"character",
				intro:{
					content:"取消你即将受到的所有伤害直到你的下一个准备阶段"
				},
				forced:true,
				charlotte:true,
				content:()=>{
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:card=>{
							if(get.tag(card,"damage")) return "zeroplayertarget";
						}
					}
				}
			},
			//Bowser
			sst_xiduo:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>lib.skill.sst_xiduo.logTarget(event,player).length,
				logTarget:(event,player)=>game.filterPlayer(current=>current.getHp()<player.getHp()).sortBySeat(_status.currentPhase),
				prompt2:(event,player)=>`你可以令${get.translation(lib.skill.sst_xiduo.logTarget(event,player))}选择一项：1. 令你获得其一张牌；2. 你对其使用牌无距离和次数限制且其非锁定技失效`,
				check:(event,player)=>{
					let fin=0;
					lib.skill.sst_xiduo.logTarget(event,player).forEach(target=>{
						if(get.attitude(player,target)>0){
							fin-=0.5;
						}
						else{
							fin++;
						}
					});
					return fin>0;
				},
				content:()=>{
					"step 0"
					event.targets=lib.skill.sst_xiduo.logTarget(trigger,player);
					"step 1"
					if(targets.length){
						const target=event.targets.shift();
						event.target=target;
						if(target.countCards("he")){
							target.chooseBool(`袭夺：令${get.translation(player)}获得你一张牌，否则本回合${get.translation(player)}对你使用牌无距离和次数限制且你非锁定技失效`).set("ai",()=>{
								const player=_status.event.player;
								const source=_status.event.getTrigger().player;
								if(get.attitude(source,player)>=0) return false;
								const cardValues=player.getGainableCards(source,"he").map(card=>get.value(card));
								if(Math.random()>0.05) return 5+(source.hasZhuSkill("sst_yujun",player?3:0))-cardValues.reduce((previousValue,currentValue)=>previousValue+currentValue,0)/cardValues.length>0;
								return false;
							});
						}
						else{
							player.addTempSkill("sst_xiduo_effect");
							player.markAuto("sst_xiduo_effect",[target]);
							target.addTempSkill("fengyin");
							event.redo();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.gainPlayerCard(`袭夺：获得${get.translation(target)}一张牌`,target,"he",true);
					}
					else{
						player.addTempSkill("sst_xiduo_effect");
						player.markAuto("sst_xiduo_effect",[target]);
						target.addTempSkill("fengyin");
					}
					event.goto(1);
				}
			},
			sst_xiduo_effect:{
				charlotte:true,
				intro:{
					content:"本回合你对$使用牌无距离和次数限制"
				},
				onremove:true,
				mod:{
					targetInRange:(card,player,target)=>{
						if(player.storage.sst_xiduo_effect.contains(target)) return true;
					},
					cardUsableTarget:function(){
						return lib.skill.sst_xiduo_effect.mod.targetInRange.apply(this,arguments);
					}
				}
			},
			sst_xiongao:{
				trigger:{global:"useCard"},
				filter:(event,player)=>event.player!=player&&player.countCards("h")>=player.getHp(),
				forced:true,
				popup:false,
				content:()=>{
					trigger.directHit.add(player);
				},
				ai:{
					nogain:1,
					neg:true,
					effect:{
						player:(card,player)=>{
							if(player.countCards("h")>=player.hp&&!get.tag(card,"recover")) return [1,1];
						}
					}
				},
				global:"sst_xiongao_ai",
				subSkill:{
					ai:{
						ai:{
							directHit_ai:true,
							skillTagFilter:(player,tag,arg)=>arg.target.hasSkill("sst_xiongao")&&arg.target!=player&&arg.target.countCards("h")>=arg.target.getHp()
						}
					}
				}
			},
			sst_yujun:{
				derivation:"sst_yujun_faq",
				unique:true,
				zhuSkill:true,
				global:["sst_yujun1","sst_yujun2"]
			},
			sst_yujun1:{
				enable:"chooseToUse",
				filter:(event,player)=>{
					if(!game.hasPlayer(current=>current.hasZhuSkill("sst_yujun",player)&&current.group==player.group&&current.countCards("h"))) return false;
					return !event.sst_yujun&&(event.type!="phase"||!player.hasSkill("sst_yujun3"));
				},
				viewAs:{name:"sha"},
				filterCard:()=>false,
				selectCard:-1,
				prompt:()=>{
					const list=game.filterPlayer(current=>current.hasZhuSkill("sst_yujun",_status.event.player));
					let str=`若${get.translation(list)}`;
					if(list.length>1) str+="中的一人";
					return `${str}允许，则你可以将允许角色的一张手牌当作杀使用`;
				},
				ai:{
					order:1,
					respondSha:true,
					result:{
						target:(player,target,card,isLink)=>{
							if(!game.hasPlayer(current=>current.hasZhuSkill("sst_yujun",player)&&current.group==player.group&&current.countCards("h")&&get.attitude(current,player)>0)) return 0;
							return lib.card.sha.ai.result.target(player,target,card,isLink);
						}
					},
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!game.hasPlayer(current=>current.hasZhuSkill("sst_yujun",player)&&current.group==player.group&&current.countCards("h"))) return false;
					}
				}
			},
			sst_yujun2:{
				trigger:{player:"useCardBegin"},
				filter:event=>event.skill=="sst_yujun1",
				logTarget:"targets",
				forced:true,
				content:()=>{
					"step 0"
					delete trigger.skill;
					trigger.getParent().set("sst_yujun",true);
					game.delayx();
					"step 1"
					player.chooseTarget("驭军：选择一位拥有〖驭军〗的角色",true,(card,player,target)=>target.hasZhuSkill("sst_yujun",player)&&target.countCards("h")).set("ai",(target)=>get.attitude(_status.event.player,target));
					"step 2"
					if(result.targets&&result.targets.length){
						event.request=result.targets[0];
						player.line(event.request,"green");
						event.request.chooseBool().set("prompt",`驭军：是否允许${get.translation(player)}将你的一张手牌当杀对${get.translation(trigger.targets)}使用？`).set("ai",()=>get.attitude(_status.event.player,_status.event.getParent().player)>0);
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						player.choosePlayerCard(`驭军：你可以将${get.translation(event.request)}的一张手牌当作杀使用（对${get.translation(trigger.targets)}）`,event.request,"h","visible").set("ai",button=>{
							const val=get.buttonValue(button);
							if(get.attitude(_status.event.player,get.owner(button.link))>0) return 10-val;
							return val;
						}).set("filterButton",button=>{
							const player=_status.event.getParent().request;
							const card=button.link;
							const mod2=game.checkMod(card,player,"unchanged","cardEnabled2",player);
							if(mod2!="unchanged") return mod2;
							const mod=game.checkMod(card,player,"unchanged","cardRespondable",player);
							if(mod!="unchanged") return mod;
							return true;
						});
					}
					else{
						game.log(event.request,"拒绝了",player,"的请求");
						event.request.chat("但是，我拒绝！");
						player.addSkill("sst_yujun3");
						trigger.cancel();
						trigger.getParent().goto(0);
						game.delayx();
						event.finish();
					}
					"step 4"
					if(result.cards&&result.cards.length){
						event.request.respond(result.cards,"noOrdering");
						trigger.cards=result.cards;
						trigger.card.cards=result.cards.slice(0);
						trigger.throw=false;
					}
				}
			},
			sst_yujun3:{
				trigger:{global:["useCardAfter","useSkillAfter","phaseAfter"]},
				silent:true,
				charlotte:true,
				filter:event=>event.skill!="sst_yujun1",
				content:()=>{
					player.removeSkill("sst_yujun3");
				}
			},
			//Peach
			sst_hongyan:{
				mod:{
					suit:(card,suit)=>{
						if(suit=="spade") return "heart";
					}
				}
			},
			sst_yice:{
				trigger:{target:"useCardToTarget"},
				filter:(event,player)=>event.getParent().targets.contains(player)&&["basic","trick"].contains(get.type(event.card))&&game.hasPlayer(current=>!event.getParent().targets.contains(current)&&current.countGainableCards(player,"h")&&player.countGainableCards(current,"h")),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_yice"),`你可以与一名不是${get.translation(trigger.card)}目标的角色展示并交换一张手牌，若展示时颜色相同，${get.translation(trigger.card)}对你无效；不同，该角色摸一张牌`,(card,player,target)=>!_status.event.getTrigger().targets.contains(target)&&target.countGainableCards(player,"h")&&player.countGainableCards(target,"h")).set("ai",target=>{
						const evt=_status.event.getTrigger();
						if(get.effect(evt.target,evt.card,evt.player,_status.event.player)<0) return Math.cbrt(get.attitude(_status.event.player,target)*target.countCards("h"))+5;
						return 0;
					});
					"step 1"
					if(result.targets){
						event.target=result.targets[0];
						player.logSkill("sst_yice",event.target);
						const sendback=()=>{
							if(_status.event!=event) return ()=>{
								event.resultOL=_status.event.resultOL;
							};
						};
						if(player.isOnline()){
							player.wait(sendback);
							event.ol=true;
							player.send(target=>{
								game.me.chooseCard("议策：选择一张要展示并交换的手牌",card=>lib.filter.canBeGained(card,_status.event.target,_status.event.player),true).set("glow_result",true).set("ai",card=>11-get.useful(card)).set("target",target);
								game.resume();
							},event.target);
						}
						else{
							event.localPlayer=true;
							player.chooseCard("议策：选择一张要展示并交换的手牌",card=>lib.filter.canBeGained(card,_status.event.getParent().target,_status.event.player),true).set("glow_result",true).set("ai",card=>11-get.useful(card));
						}
						if(event.target.isOnline()){
							event.target.wait(sendback);
							event.ol=true;
							event.target.send(target=>{
								game.me.chooseCard("议策：选择一张要展示并交换的手牌",card=>lib.filter.canBeGained(card,_status.event.target,_status.event.player),true).set("glow_result",true).set("ai",card=>11-get.useful(card)).set("target",target);
								game.resume();
							},player);
						}
						else{
							event.localTarget=true;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.localPlayer){
						event.card1=result.cards[0];
					}
					if(event.localTarget){
						target.chooseCard("议策：选择一张要展示并交换的手牌",card=>lib.filter.canBeGained(card,_status.event.getParent().player,_status.event.player),true).set("glow_result",true).set("ai",card=>11-get.useful(card));
					}
					"step 3"
					if(event.localTarget){
						event.card2=result.cards[0];
					}
					if(!event.resultOL&&event.ol){
						game.pause();
					}
					"step 4"
					try{
						if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
						if(!event.card2) event.card2=event.resultOL[target.playerid].cards[0];
						if(!event.card1||!event.card2) throw("err");
					}
					catch(e){
						console.log(e);
						event.finish();
						return;
					}
					game.broadcastAll((card1,card2)=>{
						card1.classList.remove("glow");
						card2.classList.remove("glow");
					},event.card1,event.card2);
					"step 5"
					game.broadcastAll(()=>ui.arena.classList.add("thrownhighlight"));
					game.addVideo("thrownhighlight1");
					player.$compare(event.card1,target,event.card2);
					game.log(player,"展示了",event.card1);
					game.log(target,"展示了",event.card2);
					game.delay(4);
					"step 6"
					if(get.color(event.card1)==get.color(event.card2)){
						trigger.getParent().excluded.add(player);
					}
					else{
						target.draw();
					}
					"step 7"
					const clone=event.card1.clone;
					if(clone){
						clone.style.transition="all 0.5s";
						clone.style.transform="scale(1.2)";
						clone.delete();
						game.addVideo("deletenode",player,get.cardsInfo([clone]));
					}
					game.broadcast(card=>{
						const clone=card.clone;
						if(clone){
							clone.style.transition="all 0.5s";
							clone.style.transform="scale(1.2)";
							clone.delete();
						}
					},event.card1);
					const clone2=event.card2.clone;
					if(clone2){
						clone2.style.transition="all 0.5s";
						clone2.style.transform="scale(1.2)";
						clone2.delete();
						game.addVideo("deletenode",player,get.cardsInfo([clone2]));
					}
					game.broadcast(card=>{
						const clone2=card.clone;
						if(clone2){
							clone2.style.transition="all 0.5s";
							clone2.style.transform="scale(1.2)";
							clone2.delete();
						}
					},event.card2);
					const next=game.loseAsync({
						player:player,
						target:target,
						cards:[event.card1,event.card2],
						card1:event.card1,
						card2:event.card2,
					});
					next.setContent(()=>{
						target.gain(event.card1,player).set("getlx",false);
						player.gain(event.card2,target).set("getlx",false);
						player.$giveAuto(event.card1,target);
						target.$giveAuto(event.card2,player);
					});
					game.broadcastAll(()=>ui.arena.classList.remove("thrownhighlight"));
					game.addVideo("thrownhighlight2");
				},
				ai:{
					threaten:0.8
				}
			},
			sst_qiuyuan:{
				unique:true,
				zhuSkill:true,
				global:"sst_qiuyuan2"
			},
			sst_qiuyuan2:{
				trigger:{global:"useCard2"},
				filter:(event,player)=>{
					if(event.targets.contains(player)||!lib.filter.targetEnabled2(event.card,event.player,player)) return false;
					let bool=false;
					for(const target of event.targets){
						if(target!=player&&target.hasZhuSkill("sst_qiuyuan",player)&&target.group==player.group){
							bool=true;
							break;
						}
					}
					if(!bool) return false;
					if(get.type(event.card)=="trick") return get.tag(event.card,"damage");
					if(get.name(event.card)=="sha") return true;
					return false;
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_qiuyuan"),`选择一名目标角色。你可以摸一张牌，将${get.translation(trigger.card)}的目标改为自己`,(card,player,target)=>target.hasZhuSkill("sst_qiuyuan",player)&&_status.event.getTrigger().targets.contains(target)).set("ai",target=>{
						const player=_status.event.player;
						const evt=_status.event.getTrigger();
						return get.attitude(player,target)-target.hp-player.maxHp+player.hp+get.effect(player,evt.card,evt.player,player);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_qiuyuan",event.target);
						player.draw();
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.targets.remove(target);
					trigger.targets.push(player);
					game.log(player,"代替",target,"成为了目标");
				},
				ai:{
					expose:0.2
				}
			},
			//Byleth (Female)
			sst_potian:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>player.countCards("he"),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseCard(get.prompt2("sst_potian"),"he",[1,Infinity],card=>{
						for(const i of ui.selected.cards){
							if(get.suit(i)==get.suit(card)) return false;
						}
						return true;
					}).set("complexCard",true).set("ai",card=>{
						if(get.type(card)=="basic") return 11-get.value(card);
						return 8-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length) {
						player.logSkill("sst_potian");
						event.cards=result.cards;
						player.loseToDiscardpile(event.cards).set("skill","_chongzhu");
						player.draw(event.cards.length);
					}
					else{
						event.finish();
					}
					"step 2"
					player.addTempSkill("sst_potian_effect");
					const num=cards.filter(card=>get.type(card)=="basic").length;
					if(num){
						player.addMark("sst_potian_effect",num,false);
					}
					else{
						player.storage.sst_potian_effect=0;
						player.syncStorage("sst_potian_effect");
						player.markSkill("sst_potian_effect");
					}
					game.delayx();
				}
			},
			sst_potian_effect:{
				charlotte:true,
				shaRelated:true,
				mark:true,
				intro:{
					content:"你使用的杀伤害值基数为#直到回合结束"
				},
				trigger:{player:"useCard1"},
				filter:event=>event.card&&get.name(event.card)=="sha",
				forced:true,
				onremove:true,
				content:()=>{
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage+=player.countMark("sst_potian_effect")-1;
				},
				ai:{
					damageBonus:true,
					effect:{
						player:(card,player)=>{
							if(!player.hasMark("sst_potian_effect")&&get.name(card)=="sha") return [1,-5];
						}
					}
				}
			},
			sst_shenjiao:{
				trigger:{player:"loseBefore"},
				filter:(event,player)=>{
					if(event.getParent().skill!="_chongzhu") return false;
					for(const card of event.cards){
						if(player.hasCard(i=>i==card,"he")) return true;
					}
					return false;
				},
				direct:true,
				content:()=>{
					"step 0"
					event.cards=trigger.cards.filter(card=>player.hasCard(i=>i==card,"he"));
					let str=`你可以将${get.translation(event.cards)}交给一名其他角色`;
					if(trigger.getParent(2).name=="sst_potian") str+="，然后你令该角色于其下一个回合内拥有【破天】";
					player.chooseTarget(get.prompt("sst_shenjiao"),str,lib.filter.notMe).set("ai",target=>get.attitude(_status.event.player,target));
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_shenjiao",event.target);
						player.give(cards,event.target,true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(trigger.getParent(2).name=="sst_potian"){
						target.addTempSkill("sst_shenjiao_effect",{player:"phaseBeginStart"});
						game.log(player,"令",target,"于其下一个回合内拥有","#g【破天】");
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_shenjiao_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"下一个回合内拥有【破天】"
				},
				onremove:player=>{
					if(player.isIn()) player.addTempSkill("sst_potian");
				}
			},
			//Byleth (Male)
			sst_yanchuan:{
				enable:"phaseUse",
				usable:1,
				filterTarget:lib.filter.notMe,
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
					const num=player.getAllHistory("useSkill",evt=>evt.skill=="sst_yanchuan"&&evt.targets.contains(target)).length-1;
					if(num>0) player.draw(num);
				},
				ai:{
					order:3,
					threaten:player=>1+Math.max(...game.filterPlayer().map(current=>player.getAllHistory("useSkill",evt=>evt.skill=="sst_yanchuan"&&evt.targets.contains(current)).length))/8,
					result:{
						player:(player,target)=>{
							if(!ui.selected.cards.length) return;
							const eff=player.getAllHistory("useSkill",evt=>evt.skill=="sst_yanchuan"&&evt.targets.contains(target)).length;
							if(game.countPlayer()<=2) return 1+eff;
							if(target.hasSkillTag("nogain")) return 0;
							return Math.cbrt(get.attitude(player,target)*get.value(ui.selected.cards[0]))+eff;
						}
					}
				}
			},
			sst_tianmai:{
				unique:true,
				enable:"chooseToUse",
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"天脉",
				animationColor:"orange",
				init:player=>player.addSkill("sst_tianmai_count"),
				filter:(event,player)=>{
					if(event.type=="dying"){
						if(player==event.dying) return false;
						return true;
					}
					return false;
				},
				filterTarget:(card,player,target)=>target==_status.event.dying,
				delay:false,
				selectTarget:-1,
				content:()=>{
					"step 0"
					player.awakenSkill("sst_tianmai");
					if(target.hp<target.storage.sst_tianmai_count) target.recover(target.storage.sst_tianmai_count-target.hp,"nocard");
					"step 1"
					target.link(false);
					"step 2"
					target.turnOver(false);
					"step 3"
					const dying=event.getParent("dying");
					if(dying&&dying.name=="dying"){
						const next=game.createEvent("sst_tianmai_clear");
						event.next.remove(next);
						dying.after.push(next);
						next.player=target;
						next.setContent(()=>{
							const phase=event.getParent("phase");
							if(phase&&phase.name=="phase"){
								game.resetSkills();
								_status.event=phase;
								_status.event.finish();
								_status.event.untrigger(true);
								game.broadcastAll(ui.clear);
								_status.roundSkipped=true;
								const phaseLoop=phase.getParent("phaseLoop");
								if(phaseLoop&&phaseLoop.name=="phaseLoop"){
									phaseLoop.player=player;
									phaseLoop.goto(0);
								}
								game.log("由",player,"的回合开始",`#g第${game.roundNumber+1}轮`);
							}
						});
					}
				},
				ai:{
					order:0.5,
					expose:0.3,
					skillTagFilter:player=>{
						if(player.storage.sst_tianmai) return false;
					},
					result:{
						target:3
					},
					save:true
				},
				intro:{
					content:"limited"
				}
			},
			sst_tianmai_count:{
				charlotte:true,
				firstDo:true,
				priority:2022,
				trigger:{global:"phaseBeginStart"},
				silent:true,
				content:()=>{
					game.filterPlayer(current=>current!=player).forEach(current=>current.storage.sst_tianmai_count=current.hp);
				}
			},
			//Massy
			sst_shenfa:{
				mark:true,
				marktext:"LV",
				intro:{
					content:storage=>{
						if(storage>1) return "锁定技，你使用【杀】指定目标后，你令此【杀】不可被响应，且此【杀】伤害+1。";
						if(storage==1) return "锁定技，你使用【杀】指定目标后，你选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
						return "锁定技，你使用【杀】指定目标后，你令目标角色选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
					},
					markcount:storage=>{
						if(typeof storage!="number") return 1;
						return storage+1;
					}
				},
				shaRelated:true,
				trigger:{player:"useCardToPlayered"},
				filter:event=>get.name(event.card)=="sha",
				logTarget:"target",
				forced:true,
				content:()=>{
					"step 0"
					const list=["此杀不可被响应","此杀伤害+1"];
					switch(player.countMark("sst_shenfa")){
						case 1:
							player.chooseControl().set("ai",()=>{
								const target=_status.event.getTrigger().target;
								let rand=0.95;
								if(!target.hasUsableCard("shan")) rand=0.05;
								if(!target.countCards("h")) rand=0;
								return Math.random()>rand?1:0;
							}).set("choiceList",list).set("prompt","神罚：选择一项");
							break;
						case 2:
							trigger.getParent().directHit.add(trigger.target);
							const id=trigger.target.playerid;
							const map=trigger.getParent().customArgs;
							if(!map[id]) map[id]={};
							if(typeof map[id].extraDamage!="number"){
								map[id].extraDamage=0;
							}
							map[id].extraDamage++;
							event.finish();
							break;
						default:
							trigger.target.chooseControl().set("ai",()=>{
								if(_status.event.player.hasUsableCard("shan")) return 1;
								return 0;
							}).set("choiceList",list).set("prompt","神罚：选择一项");
							break;
					}
					"step 1"
					if(result.index==1){
						game.log(player.countMark("sst_shenfa")==1?player:trigger.target,"选择了","#y此杀伤害+1");
						const id=trigger.target.playerid;
						const map=trigger.getParent().customArgs;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!="number"){
							map[id].extraDamage=0;
						}
						map[id].extraDamage++;
					}
					else{
						game.log(player.countMark("sst_shenfa")==1?player:trigger.target,"选择了","#y此杀不可被响应");
						trigger.getParent().directHit.add(trigger.target);
					}
				},
				ai:{
					damageBonus:true,
					threaten:player=>{
						if(typeof player.storage.sst_shenfa=="number") return 1+player.storage.sst_shenfa;
						return 1;
					}
				}
			},
			sst_shenwu:{
				derivation:"sst_shenwu_faq",
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>!player.getHistory("sourceDamage").length,
				forced:true,
				content:()=>{
					"step 0"
					player.draw();
					"step 1"
					if(player.countMark("sst_shenfa")<2){
						player.loseMaxHp();
					}
					else{
						event.finish();
					}
					"step 2"
					player.addMark("sst_shenfa",1,false);
					game.log(player,"升级了技能","#g【神罚】");
					player.popup("技能升级");
					game.delayx();
				}
			},
			//Samus
			sst_qiongtu:{
				init:player=>{
					//0: Draw
					//1: Attack Range
					//2: Max HP
					if(!Array.isArray(player.storage.sst_qiongtu)) player.storage.sst_qiongtu=[0,0,0];
				},
				forced:true,
				trigger:{
					source:"damageSource",
					player:"phaseDiscardEnd",
					global:["respondAfter","useCardAfter"]
				},
				filter:(event,player,name)=>{
					switch(name){
						case "phaseDiscardEnd":return event.cards&&event.cards.length;
						case "respondAfter":case "useCardAfter":
							if(!event.respondTo) return false;
							if(player!=event.respondTo[0]) return false;
					}
					return true;
				},
				content:()=>{
					"step 0"
					switch(event.triggername){
						case "damageSource":
							//0: Draw
							player.storage.sst_qiongtu[0]=Math.min(3,player.storage.sst_qiongtu[0]+1);
							break;
						case "phaseDiscardEnd":
							//1: Attack Range
							player.storage.sst_qiongtu[1]=Math.min(3,player.storage.sst_qiongtu[1]+trigger.cards.length);
							break;
						case "respondAfter":case "useCardAfter":
							//2: Max HP
							if(player.storage.sst_qiongtu[2]<3) player.gainMaxHp();
							player.storage.sst_qiongtu[2]=Math.min(3,player.storage.sst_qiongtu[2]+1);
							break;
					}
					player.addSkill("sst_qiongtu_effect");
					player.markSkill("sst_qiongtu_effect");
					"step 1"
					if(!lib.skill.sst_qiongtu.isSstJuezhanDeletedAll(player)){
						const next=game.createEvent("sstJuezhanDelete");
						next.player=player;
						next.setContent(lib.skill.sst_qiongtu.sstJuezhanDelete);
					}
				},
				isSstJuezhanDeletedAll:player=>{
					if(!Array.isArray(player.storage.sst_juezhan)) return false;
					if(player.storage.sst_juezhan[0]) return false;
					if(player.storage.sst_juezhan[1]) return false;
					if(Array.isArray(player.storage.sst_juezhan[2])) return false;
					return true;
				},
				sstJuezhanDelete:()=>{
					"step 0"
					if(!Array.isArray(player.storage.sst_juezhan)) player.storage.sst_juezhan=[true,true,["equip1","equip2","equip3","equip4","equip5"].filter(value=>!player.isDisabled(value))];
					const choice=[];
					const list=[];
					if(player.storage.sst_juezhan[0]){
						choice.push("｛1｝");
						list.push("｛1｝你带有「伤害」标签的牌均视为【杀】。");
					}
					if(player.storage.sst_juezhan[1]){
						choice.push("｛2｝");
						list.push("｛2｝你使用牌不能指定与你距离1以外的目标。");
					}
					if(Array.isArray(player.storage.sst_juezhan[2])){
						choice.push("｛3｝");
						list.push("｛3｝你的装备区被废除。");
					}
					player.chooseControl(choice,"cancel2").set("ai",()=>{
						const controls=_status.event.controls;
						if(controls.contains("｛3｝")) return "｛3｝";
						if(controls.contains("｛2｝")) return "｛2｝";
						return 0;
					}).set("choiceList",list).set("displayIndex",false).set("prompt","茕途：你可以删除〖绝战〗一个｛｝内的内容");
					"step 1"
					if(result.control&&result.control!="cancel2"){
						let str="";
						switch(result.control){
							case "｛1｝":
								player.storage.sst_juezhan[0]=false;
								str+="｛你带有「伤害」标签的牌均视为【杀】。｝";
								break;
							case "｛2｝":
								player.storage.sst_juezhan[1]=false;
								str+="｛你使用牌不能指定与你距离1以外的目标。｝";
								break;
							case "｛3｝":
								const disable=player.storage.sst_juezhan[2];
								player.storage.sst_juezhan[2]=false;
								str+="｛你的装备区被废除。｝";
								disable.forEach(value=>player.enableEquip(value));
								break;
						}
						game.log(player,"更改了","#g【绝战】","的描述");
						game.log(player,"删除了",`#y${str}`);
						player.popup("更改描述");
					}
				}
			},
			sst_qiongtu_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:(storage,player)=>{
						let str="";
						if(player.storage.sst_qiongtu[0]) str+=`本局游戏你的摸牌阶段摸牌数+${player.storage.sst_qiongtu[0]}`;
						if(player.storage.sst_qiongtu[0]&&(player.storage.sst_qiongtu[1]||player.storage.sst_qiongtu[2])) str+="<br>";
						if(player.storage.sst_qiongtu[1]) str+=`本局游戏你的攻击范围+${player.storage.sst_qiongtu[1]}`;
						if(player.storage.sst_qiongtu[1]&&player.storage.sst_qiongtu[2]) str+="<br>";
						if(player.storage.sst_qiongtu[2]) str+=`本局游戏你的体力上限+${player.storage.sst_qiongtu[2]}`;
						return str;
					},
					markcount:(storage,player)=>player.storage.sst_qiongtu[0]+player.storage.sst_qiongtu[1]+player.storage.sst_qiongtu[2]
				},
				mod:{
					//1: Attack Range
					attackRange:(player,range)=>range+player.storage.sst_qiongtu[1]
				},
				forced:true,
				trigger:{player:"phaseDrawBegin2"},
				//0: Draw
				filter:(event,player)=>player.storage.sst_qiongtu[0]&&!event.numFixed,
				content:()=>{
					//0: Draw
					trigger.num+=player.storage.sst_qiongtu[0];
				}
			},
			sst_juezhan:{
				init:player=>{
					const enable=["equip1","equip2","equip3","equip4","equip5"].filter(value=>!player.isDisabled(value));
					if(Array.isArray(player.storage.sst_juezhan)){
						if(Array.isArray(player.storage.sst_juezhan[2])){
							player.storage.sst_juezhan[2].length=0;
							player.storage.sst_juezhan[2].addArray(enable);
						}
					}
					else{
						player.storage.sst_juezhan=[true,true,enable];
					}
					if(Array.isArray(player.storage.sst_juezhan[2])&&enable.length&&_status.gameStarted){
						player.logSkill("sst_juezhan");
						enable.forEach(value=>player.disableEquip(value));
					}
				},
				onremove:player=>{
					if(Array.isArray(player.storage.sst_juezhan[2])) player.storage.sst_juezhan[2].forEach(value=>player.enableEquip(value))
				},
				forced:true,
				trigger:{
					global:"phaseBefore",
					player:"enterGame"
				},
				filter:(event,player)=>(event.name!="phase"||game.phaseNumber==0)&&Array.isArray(player.storage.sst_juezhan[2])&&player.storage.sst_juezhan[2].length,
				content:()=>{
					player.storage.sst_juezhan[2].forEach(value=>player.disableEquip(value));
				},
				mod:{
					cardname:(card,player)=>{
						if(player.storage.sst_juezhan[0]&&card.name!="sha"&&lib.card[card.name].ai&&lib.card[card.name].ai.tag&&lib.card[card.name].ai.tag.damage) return "sha";
					},
					playerEnabled:(card,player,target)=>{
						if(player.storage.sst_juezhan[1]&&get.distance(player,target)>1) return false;
					}
				}
			},
			//Ridley
			sst_baozheng:{
				trigger:{player:"phaseDrawBegin1"},
				forced:true,
				content:()=>{
					"step 0"
					trigger.changeToZero();
					"step 1"
					player.loseHp();
					"step 2"
					if(player.getDamagedHp()){
						player.chooseTarget(`暴征：获得${get.cnNumber(player.getDamagedHp())}名其他角色区域内的各一张牌，本回合内你可以将这些牌当作【杀】使用`,player.getDamagedHp(),true,(card,player,target)=>player!=target&&target.countGainableCards(player,"hej")).set("ai",target=>{
							const player=_status.event.player;
							let att=get.attitude(player,target);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							return att*lib.card.shunshou.ai.result.target(player,target);
						});
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.targets&&result.targets.length){
						const evt=event.getParent("phase");
						if(evt&&evt.name=="phase"){
							const next=game.createEvent("sst_baozheng_clear");
							event.next.remove(next);
							evt.after.push(next);
							next.player=player;
							next.setContent(()=>{
								player.removeGaintag("sst_baozheng",player.getCards("hes"));
							});
						}
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						player.line(event.targets,"green");
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 4"
					if(num<targets.length){
						player.gainPlayerCard(`暴征：获得${get.translation(targets[num])}区域内一张牌`,targets[num],"hej",true);
					}
					else{
						event.finish();
					}
					"step 5"
					if(result.cards&&result.cards.length){
						player.addGaintag(result.cards,"sst_baozheng");
						player.addExpose(0.1);
					}
					event.num++;
					event.goto(4);
				},
				ai:{
					halfneg:true,
					pretao:true
				},
				group:"sst_baozheng2"
			},
			sst_baozheng2:{
				enable:"chooseToUse",
				filterCard:card=>card.hasGaintag("sst_baozheng"),
				position:"hes",
				viewAs:{name:"sha"},
				viewAsFilter:player=>{
					if(!player.hasCard(card=>card.hasGaintag("sst_baozheng"),"hes")) return false;
				},
				prompt:"将暴征获得的牌当作杀使用",
				check:card=>5-get.value(card),
				ai:{
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.hasCard(card=>card.hasGaintag("sst_baozheng"),"hes")) return false;
					},
					respondSha:true
				}
			},
			sst_furan:{
				trigger:{player:"dying"},
				forced:true,
				content:()=>{
					"step 0"
					player.discard(player.getCards("h",card=>lib.filter.cardDiscardable(card,player)));
					"step 1"
					if(player.hp<1) player.recover(1-player.hp,"nocard");
					"step 2"
					player.loseMaxHp();
				},
				ai:{
					filterDamage:true,
					skillTagFilter:(player,tag)=>{
						if(tag=="filterDamage"&&player.hp>1) return false;
					},
					halfneg:true,
					nokeep:true
				}
			},
			//Dark Samus
			sst_yingliu:{
				trigger:{player:"phaseZhunbeiBegin"},
				forced:true,
				content:()=>{
					"step 0"
					game.updateRoundNumber();
					const phaseDraw=player.phaseDraw();
					event.next.remove(phaseDraw);
					trigger.next.push(phaseDraw);
					phaseDraw.set("sst_yingliu",true);
					const phaseUse=player.phaseUse();
					event.next.remove(phaseUse);
					trigger.next.push(phaseUse);
					phaseUse.set("sst_yingliu",true);
				}
			},
			sst_shunxing:{
				derivation:"sst_shunxing_faq",
				forced:true,
				trigger:{player:"phaseDiscardEnd"},
				filter:(event,player)=>{
					if(player.hasHistory("lose",evt=>{
						if(evt.getParent().name!="discard") return false;
						return evt.getParent("phaseDiscard")==event;
					})) return !(player.hasSkill("sst_shunxing_draw_extra")&&player.hasSkill("sst_shunxing_use_extra")&&player.hasSkill("sst_shunxing_draw")&&player.hasSkill("sst_shunxing_use"));
					return player.hasSkill("sst_shunxing_draw_extra")||player.hasSkill("sst_shunxing_use_extra")||player.hasSkill("sst_shunxing_draw")||player.hasSkill("sst_shunxing_use");
				},
				content:()=>{
					"step 0"
					if(player.hasHistory("lose",evt=>{
						if(evt.getParent().name!="discard") return false;
						return evt.getParent("phaseDiscard")==trigger;
					})){
						event.discarded=true;
						const list=[];
						if(!player.hasSkill("sst_shunxing_draw_extra")) list.push("摸牌阶段【影流】");
						if(!player.hasSkill("sst_shunxing_use_extra")) list.push("出牌阶段【影流】");
						if(!player.hasSkill("sst_shunxing_draw")) list.push("摸牌阶段");
						if(!player.hasSkill("sst_shunxing_use")) list.push("出牌阶段");
						if(list.length){
							player.chooseControl(list).set("ai",()=>{
								const controls=_status.event.controls;
								if(controls.contains("出牌阶段【影流】")) return "出牌阶段【影流】";
								if(controls.contains("摸牌阶段【影流】")) return "摸牌阶段【影流】";
								if(controls.contains("摸牌阶段")) return "摸牌阶段";
								return 0;
							}).set("prompt","瞬形：废除一个阶段，然后将场上一张装备移动到你的装备区");
						}
						else{
							event.goto(2);
						}
					}
					else{
						const list=[];
						if(player.hasSkill("sst_shunxing_draw_extra")) list.push("摸牌阶段【影流】");
						if(player.hasSkill("sst_shunxing_use_extra")) list.push("出牌阶段【影流】");
						if(player.hasSkill("sst_shunxing_draw")) list.push("摸牌阶段");
						if(player.hasSkill("sst_shunxing_use")) list.push("出牌阶段");
						if(list.length){
							player.chooseControl(list).set("ai",()=>{
								const controls=_status.event.controls;
								if(controls.contains("出牌阶段")) return "出牌阶段";
								if(controls.contains("摸牌阶段")) return "摸牌阶段";
								if(controls.contains("摸牌阶段【影流】")) return "摸牌阶段【影流】";
								return 0;
							}).set("prompt","瞬形：恢复一个阶段");
						}
						else{
							game.delayx();
							event.finish();
						}
					}
					"step 1"
					if(event.discarded){
						switch(result.control){
							case "摸牌阶段【影流】":
								player.addSkill("sst_shunxing_draw_extra");
								player.popup("摸牌影流");
								game.log(player,"废除了","#y摸牌阶段【影流】");
								break;
							case "出牌阶段【影流】":
								player.addSkill("sst_shunxing_use_extra");
								player.popup("出牌影流");
								game.log(player,"废除了","#y出牌阶段【影流】");
								break;
							case "摸牌阶段":
								player.addSkill("sst_shunxing_draw");
								player.popup("摸牌阶段");
								game.log(player,"废除了","#y摸牌阶段");
								break;
							case "出牌阶段":
								player.addSkill("sst_shunxing_use");
								player.popup("出牌阶段");
								game.log(player,"废除了","#y出牌阶段");
								break;
						}
					}
					else{
						switch(result.control){
							case "摸牌阶段【影流】":
								player.removeSkill("sst_shunxing_draw_extra");
								player.popup("摸牌影流");
								game.log(player,"恢复了","#y摸牌阶段【影流】");
								break;
							case "出牌阶段【影流】":
								player.removeSkill("sst_shunxing_use_extra");
								player.popup("出牌影流");
								game.log(player,"恢复了","#y出牌阶段【影流】");
								break;
							case "摸牌阶段":
								player.removeSkill("sst_shunxing_draw");
								player.popup("摸牌阶段");
								game.log(player,"恢复了","#y摸牌阶段");
								break;
							case "出牌阶段":
								player.removeSkill("sst_shunxing_use");
								player.popup("出牌阶段");
								game.log(player,"恢复了","#y出牌阶段");
								break;
						}
						event.finish();
					}
					game.delayx();
					"step 2"
					const filterTarget=(card,player,target)=>target!=player&&target.hasCard(card=>player.isEmpty(get.subtype(card)),"e");
					if(game.hasPlayer(current=>filterTarget(null,player,current))){
						player.chooseTarget(filterTarget,"瞬形：将场上一张装备移动到你的装备区",true).set("ai",target=>{
							const player=_status.event.player;
							const att=get.attitude(player,target);
							if(att>0&&!target.hasSkillTag("noe")) return 0;
							const num=Math.max(...target.getCards("e",card=>player.isEmpty(get.subtype(card))).map(card=>get.effect(player,card,player,player)));
							if(num<=0) return 0;
							if(att<0) return num*-att;
							return 1/num;
						});
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.line(event.target,"green");
						player.choosePlayerCard(event.target,"e",`将${get.translation(event.target)}一张装备牌移动到你的装备区`,true).set("filterButton",button=>_status.event.player.isEmpty(get.subtype(button.link)));
					}
					else{
						event.finish();
					}
					"step 4"
					if(result.links&&result.links.length){
						target.$give(result.links,player,false);
						game.log(target,"的",result.links,"被移动给了",player);
						player.equip(result.links[0]).set("delay",true);
						player.addExpose(0.1);
					}
				}
			},
			sst_shunxing_draw_extra:{
				charlotte:true,
				mark:true,
				intro:{
					content:"摸牌阶段【影流】已废除"
				},
				firstDo:true,
				forced:true,
				popup:false,
				trigger:{player:"phaseDrawBefore"},
				filter:event=>event.sst_yingliu,
				content:()=>{
					trigger.cancel();
				}
			},
			sst_shunxing_use_extra:{
				charlotte:true,
				mark:true,
				intro:{
					content:"出牌阶段【影流】已废除"
				},
				firstDo:true,
				forced:true,
				popup:false,
				trigger:{player:"phaseUseBefore"},
				filter:event=>event.sst_yingliu,
				content:()=>{
					trigger.cancel();
				}
			},
			sst_shunxing_draw:{
				charlotte:true,
				mark:true,
				intro:{
					content:"摸牌阶段已废除"
				},
				firstDo:true,
				forced:true,
				popup:false,
				trigger:{player:"phaseDrawBefore"},
				filter:event=>event.getParent().name=="phase",
				content:()=>{
					trigger.cancel();
				}
			},
			sst_shunxing_use:{
				charlotte:true,
				mark:true,
				intro:{
					content:"出牌阶段已废除"
				},
				firstDo:true,
				forced:true,
				popup:false,
				trigger:{player:"phaseUseBefore"},
				filter:event=>event.getParent().name=="phase",
				content:()=>{
					trigger.cancel();
				}
			},
			//Mr. Game & Watch
			sst_shenpan:{
				trigger:{player:"useCardToPlayered"},
				filter:event=>event.targets&&event.targets.length==1&&(get.name(event.card)=="sha"||get.type(event.card)=="trick"),
				logTarget:"target",
				check:(event,player)=>get.attitude(player,event.target)<0,
				content:()=>{
					"step 0"
					player.judge(card=>{
						switch(get.number(card)){
							case 1:return -2;
							case 2:return -1;
							case 3:return 1;
							case 4:return 2;
							case 5:return 2;
							case 6:return 2;
							case 7:{
								if(player.getDamagedHp()){
									return 2;
								}
								else{
									return 0;
								}
							}
							case 8:return 3;
							case 9:return 4;
						}
					}).set("judge2",result=>result.number>=1&&result.number<=9);
					"step 1"
					switch(result.number){
						case 1:
							player.popup("①");
							player.loseHp();
							break;
						case 2:
							player.popup("②");
							player.chooseToDiscard("审判：弃置一张牌","he",true);
							event.finish();
							break;
						case 3:
							player.popup("③");
							player.line(trigger.target,"green");
							trigger.getParent().directHit.addArray(game.players);
							break;
						case 4:
							player.popup("④");
							player.line(trigger.target);
							trigger.target.damage(player,"nocard");
							break;
						case 5:
							player.popup("⑤","thunder");
							player.line(trigger.target,"thunder");
							trigger.target.damage(player,"thunder","nocard");
							break;
						case 6:
							player.popup("⑥","fire");
							player.line(trigger.target,"fire");
							trigger.target.damage(player,"fire","nocard");
							break;
						case 7:
							player.popup("⑦");
							player.recover("nocard");
							break;
						case 8:
							player.popup("⑧");
							player.line(trigger.target,"green");
							trigger.target.turnOver();
							break;
						case 9:
							player.popup("⑨");
							player.line(trigger.target,{color:[0,0,0]});
							game.filterPlayer2(current=>current.chat("是⑨！是⑨！"));
							event.goto(3);
							break;
					}
					"step 2"
					event.finish();
					game.delayx();
					"step 3"
					const next=game.createEvent("nine_effect");
					next.player=player;
					next.target=trigger.target;
					//next.set("others",game.filterPlayer(current=>current!=player&&current!=trigger.target));
					next.setContent(lib.skill.sst_shenpan.nine_effect);
				},
				nine_effect:()=>{
					"step 0"
					player.trySkillAnimate("sst_shenpan_animation","sst_shenpan_animation",player.checkShow("sst_shenpan_animation"));
					player.popup("⑨");
					event.num=64;
					"step 1"
					event.num--;
					player.line(target,{color:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)],duration:250});
					for(let i=0;i<4;i++){
						game.linexy([
							player.getLeft()+player.offsetWidth/2,
							player.getTop()+player.offsetHeight/2,
							target.getLeft()+target.offsetWidth/2+Math.floor(Math.random()*256)-128,
							target.getTop()+target.offsetHeight/2+Math.floor(Math.random()*256)-128
						],{color:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)],duration:250},true);
						game.broadcast((player,target)=>game.linexy([
							player.getLeft()+player.offsetWidth/2,
							player.getTop()+player.offsetHeight/2,
							target.getLeft()+target.offsetWidth/2+Math.floor(Math.random()*256)-128,
							target.getTop()+target.offsetHeight/2+Math.floor(Math.random()*256)-128
						],{color:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)],duration:250},true),player,target);
					}
					//if(event.others&&event.others.length) event.others.randomGet().line(target,{color:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]});
					if(lib.config.background_audio) game.playAudio("effect","damage");
					game.broadcast(()=>{
						if(lib.config.background_audio) game.playAudio("effect","damage");
					});
					target.$damage(player);
					game.delay(0.0625);
					if(event.num) event.redo();
					"step 2"
					player.popup("⑨");
					player.line(target,{color:[Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128)]});
					for(let i=0;i<16;i++){
						game.linexy([
							player.getLeft()+player.offsetWidth/2+Math.floor(Math.random()*32)-16,
							player.getTop()+player.offsetHeight/2+Math.floor(Math.random()*32)-16,
							target.getLeft()+target.offsetWidth/2+Math.floor(Math.random()*32)-16,
							target.getTop()+target.offsetHeight/2+Math.floor(Math.random()*32)-16
						],{color:[Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128)]},true);
						game.broadcast((player,target)=>game.linexy([
							player.getLeft()+player.offsetWidth/2+Math.floor(Math.random()*32)-16,
							player.getTop()+player.offsetHeight/2+Math.floor(Math.random()*32)-16,
							target.getLeft()+target.offsetWidth/2+Math.floor(Math.random()*32)-16,
							target.getTop()+target.offsetHeight/2+Math.floor(Math.random()*32)-16
						],{color:[Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128)]},true),player,target);
					}
					//if(event.others&&event.others.length) event.others.randomGet().line(target,{color:[Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128),Math.floor(Math.random()*128+128)]});
					target.damage(3,player,"nocard");
					"step 3"
					game.delayx();
				},
				ai:{
					threaten:2,
					damage:true,
					expose:0.2
				}
			},
			sst_shenpan_animation:{
				skillAnimation:true,
				animationStr:"审判",
				animationColor:"metal"
			},
			//mario not mary
			sst_qixiao:{
				line:"fire",
				enable:"phaseUse",
				filter:(event,player)=>{
					if(player.hasMark("sst_qixiao")){
						if(player.getStat().skill["sst_qixiao"]>=2) return false;
					}
					else{
						if(player.getStat().skill["sst_qixiao"]>=1) return false;
					}
					return true;
				},
				filterTarget:(card,player,target)=>lib.filter.targetEnabled({name:"sha",nature:"fire"},player,target),
				selectTarget:()=>{
					if(_status.event.player.hasMark("sst_qixiao")) return [1,2];
					return 1;
				},
				multitarget:true,
				multiline:true,
				delay:false,
				prompt:()=>{
					if(_status.event.player.hasMark("sst_qixiao")) return "出牌阶段限两次，你可以失去2点体力，视为对至多两名角色使用火杀（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸两张牌";
					return "出牌阶段限一次，你可以失去1点体力，视为对一名角色使用火杀（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸一张牌";
				},
				content:()=>{
					if(player.hasMark("sst_qixiao")){
						player.loseHp(2);
						player.useCard({name:"sha",nature:"fire",isCard:true,storage:{sst_qixiao:true}},targets,false).set("line",false);
					}
					else{
						player.loseHp();
						player.useCard({name:"sha",nature:"fire",isCard:true,storage:{sst_qixiao:true}},target,false).set("line",false);
					}
				},
				ai:{
					order:1,
					result:{
						target:(player,target)=>{
							if(player.hp>2) return get.effect(target,{name:"sha",nature:"fire",isCard:true},player,target);
							return 0;
						},
						player:player=>{
							if((player.hasMark("sst_qixiao")&&player.hp<=2)||player.hp<=1) return 0;
						}
					}
				},
				group:"sst_qixiao2",
				intro:{
					content:storage=>{
						if(storage) return "出牌阶段限两次，你可以失去2点体力，视为对至多两名角色使用火【杀】（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸两张牌。";
						return "出牌阶段限一次，你可以失去1点体力，视为对一名角色使用火【杀】（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸一张牌。";
					}
				}
			},
			sst_qixiao2:{
				charlotte:true,
				trigger:{source:"damageSource"},
				forced:true,
				popup:false,
				filter:event=>event.card&&event.card.storage&&event.card.storage.sst_qixiao,
				content:()=>{
					if(player.hasMark("sst_qixiao")){
						player.draw(2);
					}
					else{
						player.draw();
					}
				}
			},
			sst_xuansha:{
				derivation:"sst_xuansha_faq",
				skillAnimation:true,
				animationColor:"fire",
				juexingji:true,
				unique:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>player.getHp()==1,
				forced:true,
				content:()=>{
					"step 0"
					player.awakenSkill("sst_xuansha");
					player.gainMaxHp();
					"step 1"
					player.addMark("sst_qixiao",1,false);
					game.log(player,"更改了","#g【奇嚣】","的描述");
					player.popup("更改描述");
					"step 2"
					player.addTempSkill("sst_xuansha_effect");
				},
				ai:{
					threaten:(player,target)=>{
						if(target.hp==1) return 2;
						return 0.5;
					},
					maixie:true,
					effect:{
						target:(card,player,target)=>{
							if(!target.hasFriend()) return;
							if(get.tag(card,"damage")==1&&target.hp==2&&!target.isTurnedOver()&&_status.currentPhase!=target&&get.distance(_status.currentPhase,target,"pure")<=3) return [0.5,1];
						}
					}
				}
			},
			sst_xuansha_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"本回合你的手牌均视为【桃】"
				},
				mod:{
					cardname:card=>{
						if(get.position(card)=="h") return "tao";
					},
				},
				ai:{
					respondTao:true,
					pretao:true,
					nokeep:true
				}
			},
			//Yumikohimi
			sst_yingji:{
				enable:"phaseUse",
				usable:1,
				filterTarget:(card,player,target)=>lib.filter.targetEnabled({name:"sha"},player,target),
				line:false,
				delay:false,
				content:()=>{
					if(get.distance(player,target)-1>0) target.draw(get.distance(player,target)-1);
					player.useCard({name:"sha",isCard:true},target,false);
				},
				ai:{
					order:1,
					result:{
						target:(player,target)=>get.effect(target,{name:"sha"},player,target)+Math.max(0,get.distance(player,target)-1)*2
					}
				}
			},
			sst_huxiao:{
				trigger:{global:"useCard2"},
				filter:(event,player)=>{
					if(get.name(event.card)!="sha") return false;
					return game.hasPlayer(current=>(get.zhu(player,"shouyue")||player.hasCard({color:"red"},"he"))&&!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current));
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseCardTarget({
						filterCard:function(card,player){
							if(!lib.filter.cardDiscardable.apply(this,arguments)) return false;
							if(get.zhu(player,"shouyue")) return true;
							return get.color(card)=="red";
						},
						position:"he",
						filterTarget:(card,player,target)=>{
							const evt=_status.event.getTrigger();
							return !evt.targets.contains(target)&&lib.filter.targetEnabled2(evt.card,evt.player,target);
						},
						ai1:card=>5-get.useful(card),
						ai2:target=>{
							const evt=_status.event.getTrigger();
							return get.effect(target,evt.card,evt.player,_status.event.player);
						},
						prompt:get.prompt("sst_huxiao"),
						prompt2:`你可以弃置一张红色牌，为${get.translation(trigger.card)}增加一个目标`
					});
					"step 1"
					if(result.cards&&result.cards.length&&result.targets&&result.targets.length){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.cards=result.cards;
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill("sst_huxiao",targets);
					player.discard(cards);
					trigger.targets.addArray(targets);
				},
				ai:{
					expose:0.2
				}
			},
			//Haine
			sst_yiqing:{
				mod:{
					aiOrder:(player,card,num)=>{
						const history=player.getAllHistory("useCard");
						if(history.length){
							const targets=game.filterPlayer(current=>player.canUse(card,current));
							if(targets.length==1&&history[history.length-1].targets.contains(targets[0])) return num/2;
						}
					}
				},
				trigger:{player:"useCardToPlayered"},
				filter:(event,player)=>{
					if(!event.targets||event.targets.length!=1) return false;
					const history=player.getAllHistory("useCard");
					if(history.length<2) return false;
					return !history[history.length-2].targets.contains(event.targets[0]);
				},
				forced:true,
				content:()=>{
					player.draw("nodelay");
				},
				ai:{
					threaten:2,
					effect:{
						player:(card,player,target)=>{
							if(get.itemtype(card)=="card"&&!get.tag(card,"multitarget")){
								const history=player.getAllHistory("useCard");
								if(history.length){
									const num=history.length-1;
									if(num>=0&&history[num].targets&&!history[num].targets.contains(target)&&!get.tag(card,"recover")) return [1,2];
								}
							}
						}
					}
				}
			},
			sst_mingxi:{
				trigger:{player:"phaseUseEnd"},
				filter:(event,player)=>lib.skill.sst_mingxi.maxTarget(player),
				direct:true,
				content:()=>{
					"step 0"
					const num=lib.skill.sst_mingxi.maxTarget(player);
					player.chooseTarget(get.prompt("sst_mingxi"),`你可以展示至多${get.cnNumber(num)}名角色的手牌`,[1,num],(card,player,target)=>target.countCards("h")).set("ai",target=>-get.attitude(_status.event.player,target));
					"step 1"
					if(result.targets&&result.targets.length){
						const targets=result.targets.sortBySeat(_status.currentPhase);
						player.logSkill("sst_mingxi",targets);
						targets.forEach(target=>target.showHandcards());
					}
				},
				maxTarget:player=>{
					const history=player.getHistory("useCard");
					if(history.length<2) return 0;
					let num=3;
					const conditions=[true,true,true];
					const targets=[];
					const types=[];
					const suits=[];
					history.forEach(evt=>{
						if(evt.targets) evt.targets.forEach(target=>{
							if(targets.contains(target)) conditions[0]=false;
							targets.push(target);
						});
						if(types.contains(get.type2(evt.card))) conditions[1]=false;
						types.push(get.type2(evt.card));
						if(suits.contains(get.suit(evt.card))) conditions[2]=false;
						suits.push(get.suit(evt.card));
					});
					conditions.forEach(condition=>{
						if(!condition) num--;
					});
					return num;
				}
			},
			//Terry
			sst_elang:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>game.hasPlayer(current=>current.countCards("h")>=player.countCards("h")),
				direct:true,
				content:()=>{
					player.addTempSkill("sst_elang_effect");
					player.chooseUseTarget({name:"juedou",isCard:true},game.filterPlayer(current=>current.countCards("h")>=player.countCards("h")),false).set("prompt",get.prompt("sst_elang")).set("prompt2",get.translation("sst_elang_info")).set("logSkill","sst_elang");
				}
			},
			sst_elang_effect:{
				charlotte:true,
				trigger:{player:"juedouAfter"},
				prompt:"饿狼：你可以获得此决斗流程内打出的所有杀",
				filter:event=>event.getParent().skill=="sst_elang"&&event["targetCards"].length+event["playerCards"].length,
				popup:false,
				content:()=>{
					player.gain(trigger["targetCards"].concat(trigger["playerCards"]).filterInD("d"),"gain2");
				}
			},
			sst_paoxiao:{
				mod:{
					cardUsable:card=>{
						if(card.name=="sha") return Infinity;
					}
				},
				trigger:{player:"useCard"},
				filter:(event,player)=>{
					if(get.name(event.card)!="sha") return false;
					const history=player.getHistory("useCard",evt=>get.name(evt.card)=="sha");
					return history.length&&history.indexOf(event)==1;
				},
				prompt2:"你可以摸一张牌",
				frequent:true,
				content:()=>{
					player.draw("nodelay");
				}
			},
			//Simon
			sst_shengfa:{
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player!=player,
				logTarget:"player",
				check:(event,player)=>{
					if(event.player.hasJudge("lebu")) return false;
					return get.damageEffect(event.player,player,player)+get.damageEffect(player,null,player)+1>0;
				},
				content:()=>{
					player.draw();
					player.addTempSkill("sst_shengfa_effect");
					player.markAuto("sst_shengfa_effect",[trigger.player]);
				},
				ai:{
					damage:true,
					expose:0.2
				}
			},
			sst_shengfa_effect:{
				charlotte:true,
				intro:{
					content:"此回合结束阶段，若$于本回合内：未造成伤害，你受到1点伤害；造成了伤害，你对其造成1点伤害"
				},
				onremove:true,
				trigger:{global:"phaseJieshuBegin"},
				filter:(event,player)=>event.player!=player&&player.storage.sst_shengfa_effect.contains(event.player),
				forced:true,
				content:()=>{
					"step 0"
					if(!trigger.player.getStat("damage")){
						player.damage("nosource","nocard");
					}
					else if(trigger.player.isIn()){
						player.line(trigger.player,"green");
						trigger.player.damage(player,"nocard");
					}
					else{
						event.finish();
					}
					"step 1"
					game.delayx();
				}
			},
			sst_shengbian:{
				mark:true,
				intro:{
					content:(storage,player)=>`当前攻击范围：${player.getAttackRange()}`,
					markcount:(storage,player)=>player.countCards()
				},
				lastDo:true,
				mod:{
					attackRangeBase:player=>player.countCards()
				}
			},
			//Incineroar
			sst_weihe:{
				trigger:{source:"damageEnd"},
				filter:event=>event.card&&event.card.name=="sha"&&event.player.isIn(),
				logTarget:"player",
				forced:true,
				content:()=>{
					trigger.player.addTempSkill("sst_weihe_effect",{player:"phaseEnd"});
					trigger.player.addMark("sst_weihe_effect",1,false);
				}
			},
			sst_weihe_effect:{
				charlotte:true,
				intro:{
					content:"你即将造成的伤害-#直至你下个回合结束"
				},
				trigger:{source:"damageBegin1"},
				forced:true,
				onremove:true,
				content:()=>{
					trigger.num-=player.countMark("sst_weihe_effect");
				},
				ai:{
					effect:{
						player:(card,player,target)=>{
							if(get.tag(card,"damage")&&!player.hasSkillTag("jueqing",false,target)) return "zeroplayertarget";
						}
					}
				}
			},
			sst_fuchou:{
				trigger:{global:"roundStart"},
				filter:(event,player)=>!player.hasSkill("sst_fuchou_effect"),
				check:(event,player)=>(player.maxHp-player.hp<2)||!player.hasUsableCard("shan"),
				content:()=>{
					player.storage.sst_fuchou_effect=player;
					player.addTempSkill("sst_fuchou_effect","roundStart");
					game.delayx();
				}
			},
			sst_fuchou_effect:{
				init:player=>player.addSkill("sst_fuchou_card"),
				global:"sst_fuchou_effect_ai",
				mark:true,
				intro:{
					content:"本轮你不能响应牌"
				},
				trigger:{global:"useCard"},
				forced:true,
				popup:false,
				charlotte:true,
				content:()=>{
					trigger.directHit.add(player);
				},
				subSkill:{
					ai:{
						ai:{
							directHit_ai:true,
							skillTagFilter:(player,tag,arg)=>arg.target.hasSkill("sst_fuchou_effect")
						}
					}
				}
			},
			sst_fuchou_card:{
				charlotte:true,
				marktext:"牌",
				intro:{
					mark:(dialog,storage,player)=>dialog.addAuto(player.getCards("s",card=>card.hasGaintag("sst_fuchou_card"))),
					markcount:(storage,player)=>player.countCards("s",card=>card.hasGaintag("sst_fuchou_card"))
				},
				onremove:(player,skill)=>{
					const cards=player.getCards("s",card=>card.hasGaintag(skill));
					if(cards.length) player.loseToDiscardpile(cards);
				},
				trigger:{player:"damageEnd"},
				filter:(event,player)=>player.hasSkill("sst_fuchou_effect")&&get.itemtype(event.cards)=="cards"&&event.cards.filterInD("o").length,
				check:()=>true,
				prompt2:"你受到伤害后，你可以将造成伤害的牌置于你的武将牌上。你可以将这些牌如手牌般使用或打出，你使用这些牌造成伤害时，此伤害+1。",
				content:()=>{
					const cards=trigger.cards.filterInD("o");
					player.$gain2(cards);
					game.log(player,"将",cards,"置于了武将牌上");
					player.loseToSpecial(cards,"sst_fuchou_card");
					player.markSkill("sst_fuchou_card");
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:(card,player,target)=>{
							if(player.hasSkillTag("jueqing",false,target)) return [1,-1];
							if(get.tag(card,"damage")&&player!=target) return [1,0.6];
						}
					}
				},
				group:["sst_fuchou_card2","sst_fuchou_card3"]
			},
			sst_fuchou_card2:{
				trigger:{player:"loseEnd"},
				forced:true,
				filter:event=>{
					if(!event.ss||!event.ss.length) return false;
					for(const i in event.gaintag_map){
						if(event.gaintag_map[i].contains("sst_fuchou_card")) return true;
					}
					return false;
				},
				content:()=>{
					"step 0"
					const num=player.countCards("s",card=>card.hasGaintag("sst_fuchou_card"));
					if(num){
						player.markSkill("sst_fuchou_card");
					}
					else{
						player.unmarkSkill("sst_fuchou_card");
					}
					game.updateRoundNumber();
				}
			},
			sst_fuchou_card3:{
				trigger:{source:"damageBegin1"},
				forced:true,
				filter:(event,player)=>{
					const useCard=event.getParent(2);
					if(useCard&&useCard.name=="useCard"&&player.hasHistory("lose",evt=>{
						if(evt.getParent()!=useCard) return false;
						for(const i in evt.gaintag_map){
							if(evt.gaintag_map[i].contains("sst_fuchou_card")) return true;
						}
						return false;
					})) return true;
					const useCard2=event.getParent(6);
					if(useCard2&&useCard2.name=="useCard"&&player.hasHistory("lose",evt=>{
						if(evt.getParent()!=useCard2) return false;
						for(const i in evt.gaintag_map){
							if(evt.gaintag_map[i].contains("sst_fuchou_card")) return true;
						}
						return false;
					})) return true;
					return false;
				},
				logTarget:"player",
				content:()=>{
					trigger.num++;
				},
				ai:{
					damageBonus:true
				}
			},
			//Greninja
			sst_huanbian:{
				init:player=>{
					player.addSkill("sst_huanbian_previous");
					if(!Array.isArray(player.storage.sst_huanbian)) player.storage.sst_huanbian=[];
				},
				hiddenCard:(player,name)=>{
					if(!player.countCards("hes")) return false;
					if(typeof player.storage.sst_huanbian_previous!="object") return false;
					if(player.storage.sst_huanbian.contains(get.name(player.storage.sst_huanbian_previous))) return false;
					return get.name(player.storage.sst_huanbian_previous)==name;
				},
				enable:"chooseToUse",
				filterCard:true,
				position:"hes",
				viewAs:(cards,player)=>typeof player.storage.sst_huanbian_previous=="object"?player.storage.sst_huanbian_previous:null,
				filter:(event,player)=>{
					if(!player.countCards("hes")) return false;
					if(typeof player.storage.sst_huanbian_previous!="object") return false;
					if(player.storage.sst_huanbian.contains(get.name(player.storage.sst_huanbian_previous))) return false;
					return event.filterCard(player.storage.sst_huanbian_previous,player,event);
				},
				prompt:()=>{
					const player=_status.event.player;
					let str="将一张牌当作";
					if(typeof player.storage.sst_huanbian_previous=="object") str+=get.translation(player.storage.sst_huanbian_previous);
					return `${str}使用`;
				},
				onuse:(result,player)=>{
					player.storage.sst_huanbian.push(get.name(result.card));
					const evt=_status.event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_huanbian_clear");
						_status.event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_huanbian)) player.storage.sst_huanbian.length=0;
						});
					}
				},
				check:card=>5-get.value(card),
				ai:{
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.countCards("hes")) return false;
						if(typeof player.storage.sst_huanbian_previous!="object") return false;
						if(player.storage.sst_huanbian.contains(get.name(player.storage.sst_huanbian_previous))) return false;
						switch(tag){
							case "fireAttack":
								if(get.name(player.storage.sst_huanbian_previous)!="huogong") return false;
								break;
							case "respondSha":
								if(get.name(player.storage.sst_huanbian_previous)!="sha") return false;
								break;
							case "respondShan":
								if(get.name(player.storage.sst_huanbian_previous)!="shan") return false;
								break;
							case "respondTao":
								if(get.name(player.storage.sst_huanbian_previous)!="tao") return false;
								break;
							case "save":
								if(!get.tag(player.storage.sst_huanbian_previous,"save")) return false;
								break;
						}
					},
					order:8,
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					respondTao:true,
					save:true
				}
			},
			sst_huanbian_previous:{
				charlotte:true,
				trigger:{player:"useCard1"},
				silent:true,
				firstDo:true,
				filter:event=>{
					const type=get.type(event.card);
					return type=="basic"||type=="trick";
				},
				content:()=>{
					const card=player.storage.sst_huanbian_previous=Object.assign({},trigger.card);
					delete card.isCard;
					delete card.suit;
					delete card.number;
				}
			},
			sst_yingxi:{
				trigger:{player:"damageBegin"},
				direct:true,
				filter:(event,player)=>event.source&&event.source.countDiscardableCards(player,"he"),
				content:()=>{
					player.discardPlayerCard(get.prompt("sst_yingxi",trigger.source),trigger.source,"he").set("logSkill",["sst_yingxi",trigger.source]);
				},
				ai:{
					expose:0.2,
					maixie_defend:true,
					effect:{
						target:(card,player,target)=>{
							if(player.countCards("he")>1&&get.tag(card,"damage")){
								if(player.hasSkillTag("jueqing",false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
			//Kirby
			sst_qushi:{
				unique:true,
				trigger:{source:"damageEnd"},
				direct:true,
				content:()=>{
					"step 0"
					const list=[];
					const listm=[];
					const listv=[];
					if(typeof trigger.player.name1!="undefined"){
						listm.addArray(lib.character[trigger.player.name1][3]);
					}
					else{
						listm.addArray(lib.character[trigger.player.name][3]);
					}
					if(typeof trigger.player.name2!="undefined") listv.addArray(lib.character[trigger.player.name2][3]);
					listm.addArray(listv);
					const func=skill=>{
						const info=get.info(skill);
						if(get.is.locked(skill)||info.charlotte||info.superCharlotte||info.zhuanhuanji||info.hiddenSkill||info.dutySkill||info.zhuSkill||info.unique||info.limited||info.mainSkill||info.viceSkill) return false;
						return true;
					};
					listm.forEach(skill=>{
						if(func(skill)&&!player.hasSkill(skill)) list.add(skill);
					});
					player.chooseControl(list,"摸一张牌","cancel2").set("prompt",get.prompt("sst_qushi",trigger.player)).set("prompt2",get.skillInfoTranslation("sst_qushi")).set("ai",()=>{
						if(_status.event.controls[0]=="摸一张牌") return "摸一张牌";
						const list=_status.event.list.filter(skill=>{
							const info=lib.skill[skill];
							if(info.ai&&(info.ai.maixie_hp||info.ai.maixie_defend)) return false;
							return get.skillRank(skill,"in")>0;
						});
						if(!list.length) return "摸一张牌";
						return get.max(list,get.skillRank,"item");
					}).set("list",list.slice(0));
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_qushi",trigger.player);
						if(result.control!="摸一张牌"){
							player.popup(result.control,"thunder");
							game.log(player,"获得了技能",`#g【${get.translation(result.control)}】`);
							player.addTempSkill(result.control,{player:"damageEnd"});
						}
						else{
							player.draw();
						}
					}
				}
			},
			sst_xinghuo:{
				skillAnimation:true,
				animationColor:"fire",
				global:"sst_xinghuo2"
			},
			sst_xinghuo2:{
				trigger:{player:"die"},
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.hasSkill("sst_xinghuo")),
				direct:true,
				forceDie:true,
				content:()=>{
					"step 0"
					event.targeted=[];
					"step 1"
					const players=game.filterPlayer(current=>current!=player&&!event.targeted.contains(current)&&current.hasSkill("sst_xinghuo")).sortBySeat(_status.currentPhase);
					if(players.length){
						event.current=players.shift();
						event.targeted.push(event.current);
					}
					else{
						event.finish();
					}
					"step 2"
					event.num1=1;
					event.num2=1;
					const controls=["draw_card"];
					let prompt=`你可以令${get.translation(event.current)}摸一张牌`;
					if(event.current.getDamagedHp()){
						event.num2=Math.min(event.num2,event.current.maxHp-event.current.hp);
						controls.push("recover_hp");
						prompt+="或回复1点体力";
					}
					controls.push("cancel2");
					player.chooseControl(controls).set("forceDie",true).set("prompt",get.prompt("sst_xinghuo",event.current)).set("prompt2",prompt).set("ai",()=>{
						const evt=_status.event.getParent();
						const target=evt.current;
						if(get.attitude(_status.event.player,target)<=0) return "cancel2";
						const num1=evt.num1;
						const num2=evt.num2;
						if(target.isDamaged()&&get.recoverEffect(target)>0&&(
							target.hp==1||target.needsToDiscard()||
							target.hasSkillTag("maixie_hp")||num2>num1||
							(num2==num1&&target.needsToDiscard(1))
						)){
							return "recover_hp";
						}
						return "draw_card";
					});
					"step 3"
					if(result.control!="cancel2"){
						player.logSkill("sst_xinghuo",event.current);
						if(result.control=="draw_card"){
							event.current.draw(event.num1);
						}
						else{
							event.current.recover(event.num2,"nocard");
						}
						event.num++;
						event.goto(1);
					}
				}
			},
			//King K. Rool
			sst_badao:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.countCards("hej")),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_badao"),(card,player,target)=>target!=player&&target.countCards("hej")).set("ai",target=>{
						const player=_status.event.player;
						let att=get.attitude(player,target);
						if(att<0){
							att=-Math.sqrt(-att);
						}
						else{
							att=Math.sqrt(att);
						}
						if(!game.hasPlayer(current=>current.inRange(player))) return att*lib.card.shunshou.ai.result.target(player,target);
						return att*lib.card.shunshou.ai.result.target(player,target)-player.maxHp+player.hp;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_badao",result.targets);
						player.gainPlayerCard(`霸岛：获得${get.translation(result.targets)}区域内一张牌`,result.targets[0],"hej",true);
					}
					else{
						event.finish();
					}
					"step 2"
					event.inRanges=game.filterPlayer(current=>current.inRange(player));
					if(event.inRanges.length){
						event.inRanges.sortBySeat(_status.currentPhase);
						event.num=0;
						player.line(event.inRanges,"green");
					}
					else{
						event.finish();
					}
					"step 3"
					if(num<event.inRanges.length){
						if(player.isIn()){
							event.inRanges[event.num++].chooseToUse(`霸岛：是否以${get.translation(player)}为目标使用一张基本牌？`).set("filterTarget",function(card,player,target){
								if(target!=_status.event.getParent().player) return false;
								return lib.filter.targetEnabled3.apply(this,arguments);
							}).set("filterCard",function(card){
								if(get.type(card)!="basic") return false;
								return lib.filter.filterCard.apply(this,arguments);
							});
						}
						event.redo();
					}
					"step 4"
					if(!game.hasPlayer2(current=>current.hasHistory("useCard",evt=>{
						const parent=evt.getParent("chooseToUse");
						return parent&&parent.name=="chooseToUse"&&parent.getParent().name=="sst_badao";
					}))) game.delayx();
				},
				ai:{
					threaten:2,
					expose:0.2
				}
			},
			sst_jinjia:{
				trigger:{player:"damageBegin3"},
				filter:event=>event.num>0,
				forced:true,
				content:()=>{
					"step 0"
					trigger.num--;
					if(player.getHistory("useSkill",evt=>evt.skill=="sst_jinjia").length-1>0){
						player.turnOver();
						event.goto(2);
					}
					"step 1"
					if(trigger.num>0){
						player.logSkill("sst_jinjia");
						event.goto(0);
					}
					else{
						event.finish();
					}
					"step 2"
					player.removeSkill(event.name);
					player.popup(event.name,"fire");
					game.log(player,"失去了技能","#g【金甲】");
				},
				ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:(card,player,target)=>{
							if(player.hasSkillTag("jueqing")) return;
							if(target.hujia) return;
							if(player._sst_jinjia_tmp) return;
							if(_status.event.getParent("useCard",true)||_status.event.getParent("_wuxie",true)) return;
							if(get.tag(card,"damage")){
								if(target.hasHistory("damage")){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1) return 0;
									if(get.attitude(player,target)<0&&!player.hasSkillTag("damageBonus")){
										if(card.name=="sha") return;
										let sha=false;
										player._sst_jinjia_tmp=true;
										let num=player.countCards("h",card=>{
											if(card.name=="sha"){
												if(sha){
													return false;
												}
												else{
													sha=true;
												}
											}
											return get.tag(card,"damage")&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._sst_jinjia_tmp;
										if(player.hasSkillTag("damage")) num++;
										if(num<2){
											const enemies=player.getEnemies();
											if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()) return;
											return 0;
										}
									}
								}
							}
						}
					}
				}
			},
			//Donkey Kong
			sst_baochui:{
				usable:1,
				trigger:{player:"useCardToPlayer"},
				filter:(event,player)=>player.isPhaseUsing()&&get.tag(event.card,"damage")&&event.targets&&event.targets.length==1,
				check:(event,player)=>{
					let num=0;
					player.getHistory("lose",evt=>num+=evt.cards2.length);
					num=Math.ceil(num/2)+1;
					if(num<=1) return false;
					let rand=0.95;
					for(const target of event.targets){
						if(get.effect(target,event.card,player,player)>5){
							rand=0.25;
							break;
						}
					}
					for(const target of event.targets){
						if(!event.target.countCards("h")){
							rand=0.05;
							break;
						}
					}
					return Math.random()>rand?true:false;
				},
				prompt2:(event,player)=>`出牌阶段限一次，你使用带有「伤害」标签的牌指定唯一目标时，你可以令其伤害值基数为${Math.ceil(player.getHistory("lose",evt=>evt.cards2&&evt.cards2.length).map(evt=>evt.cards2.length).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/2)+1}；然后若此牌没有造成伤害，本局游戏你的手牌上限-1`,
				content:()=>{
					const num=Math.ceil(player.getHistory("lose",evt=>evt.cards2&&evt.cards2.length).map(evt=>evt.cards2.length).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/2)+1;
					trigger.getParent().baseDamage+=num-1;
					const next=game.createEvent("sst_baochui_clear");
					event.next.remove(next);
					trigger.getParent().after.push(next);
					next.player=player;
					next.card=trigger.card;
					next.setContent(lib.skill.sst_baochui.contentx);
				},
				contentx:()=>{
					if(!game.cardCausedDamage(card)){
						player.addSkill("sst_baochui_effect");
						player.addMark("sst_baochui_effect",1,false);
					}
				},
				ai:{
					threaten:2
				}
			},
			sst_baochui_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>`本局游戏你的手牌上限-${storage}<br>当前你的手牌上限：${player.getHandcardLimit()}`
				},
				onremove:true,
				mod:{
					maxHandcard:(player,num)=>num-player.countMark("sst_baochui_effect")
				}
			},
			//Richter
			sst_xuelun:{
				init:player=>{
					if(typeof player.storage.sst_xuelun!="number") player.storage.sst_xuelun=1;
					player.addAdditionalSkill("sst_xuelun",["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"][player.storage.sst_xuelun-1]);
				},
				onremove:player=>player.removeAdditionalSkill("sst_xuelun"),
				mark:true,
				marktext:"☯",
				intro:{
					content:storage=>`转换技，你视为拥有${["〖茕途〗","〖圣罚〗","〖勇魂〗"][storage-1]}，发动上述技能时转换。每完成一轮转换，你将手牌补至手牌上限。`
				},
				derivation:["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"],
				zhuanhuanji:(player,skill)=>{
					let fullRotation=false;
					if(player.storage[skill]<3){
						player.storage[skill]++;
					}
					else{
						fullRotation=true;
						player.storage[skill]=1;
					}
					player.markSkill(skill);
					player.addAdditionalSkill(skill,["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"][player.storage[skill]-1]);
					if(fullRotation) player.drawTo(player.getHandcardLimit());
				}
			},
			sst_xuelun_qiongtu:{
				inherit:"sst_qiongtu",
				hookTrigger:{
					log:player=>{
						if(!_status.event.sst_xuelun&&_status.event.skill=="sst_xuelun_qiongtu"&&player.additionalSkills.sst_xuelun&&(player.additionalSkills.sst_xuelun=="sst_xuelun_qiongtu"||player.additionalSkills.sst_xuelun.contains("sst_xuelun_qiongtu"))){
							_status.event.set("sst_xuelun",true);
							player.logSkill("sst_xuelun");
							player.changeZhuanhuanji("sst_xuelun");
						}
					}
				}
			},
			sst_xuelun_shengfa:{
				inherit:"sst_shengfa",
				hookTrigger:{
					log:player=>{
						if(!_status.event.sst_xuelun&&_status.event.skill=="sst_xuelun_shengfa"&&player.additionalSkills.sst_xuelun&&(player.additionalSkills.sst_xuelun=="sst_xuelun_shengfa"||player.additionalSkills.sst_xuelun.contains("sst_xuelun_shengfa"))){
							_status.event.set("sst_xuelun",true);
							player.logSkill("sst_xuelun");
							player.changeZhuanhuanji("sst_xuelun");
						}
					}
				}
			},
			sst_xuelun_yonghun:{
				inherit:"sst_yonghun",
				hookTrigger:{
					log:player=>{
						if(!_status.event.sst_xuelun&&_status.event.name=="sst_xuelun_yonghun"&&player.additionalSkills.sst_xuelun&&(player.additionalSkills.sst_xuelun=="sst_xuelun_yonghun"||player.additionalSkills.sst_xuelun.contains("sst_xuelun_yonghun"))){
							_status.event.set("sst_xuelun",true);
							player.logSkill("sst_xuelun");
							player.changeZhuanhuanji("sst_xuelun");
						}
					}
				}
			},
			sst_shengxi:{
				trigger:{global:"damageSource"},
				filter:(event,player)=>player.hasSkill("sst_xuelun")&&event.source&&!event.source.hasSkill(["sst_qiongtu","sst_shengfa","sst_yonghun"][player.storage.sst_xuelun-1],null,null,false)&&!event.source.hasSkill(["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"][player.storage.sst_xuelun-1],null,null,false),
				logTarget:"source",
				check:(event,player)=>get.attitude(player,event.source)>0,
				prompt2:(event,player)=>`你可以询问${get.translation(event.source)}是否获得【${get.translation(["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"][player.storage.sst_xuelun-1])}】直到其发动此技能后`,
				content:()=>{
					"step 0"
					event.current=["sst_xuelun_qiongtu","sst_xuelun_shengfa","sst_xuelun_yonghun"][player.storage.sst_xuelun-1];
					trigger.source.chooseBool(`圣袭：是否获得【${get.translation(event.current)}】？`).set("ai",()=>true);
					"step 1"
					if(result.bool){
						trigger.source.addAdditionalSkill("sst_shengxi_effect",event.current,true);
						trigger.source.addSkill("sst_shengxi_effect");
						trigger.source.popup(event.current,"thunder");
						game.log(trigger.source,"获得了技能",`#g【${get.translation(event.current)}】`);
					}
					else{
						game.log(trigger.source,"拒绝了",player,"的请求");
						trigger.source.chat("但是，我拒绝！");
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_shengxi_effect:{
				charlotte:true,
				silent:true,
				trigger:{player:["sst_xuelun_qiongtuAfter","sst_xuelun_shengfaAfter","sst_xuelun_yonghunAfter"]},
				filter:(event,player)=>{
					if(!player.additionalSkills.sst_shengxi_effect) return false;
					if(!player.hasHistory("useSkill",evt=>evt.skill==event.name&&(evt.event==event||evt.event==event.getParent()))) return false;
					return true;
				},
				content:()=>{
					player.removeAdditionalSkill("sst_shengxi_effect",trigger.name);
					if(player.additionalSkills.sst_shengxi_effect){
						let additionalSkills=player.additionalSkills.sst_shengxi_effect;
						if(Array.isArray(additionalSkills)&&!additionalSkills.length) player.removeSkill("sst_shengxi_effect");
					}
					else{
						player.removeSkill("sst_shengxi_effect");
					}
				}
			},
			//Red
			sst_xiandu:{
				intro:{
					name:"先读",
					mark:(dialog,storage,player)=>{
						const cards=player.getExpansions("sst_xiandu");
						if(player.isUnderControl(true)){
							dialog.addAuto(cards);
						}
						else{
							return `共有${get.cnNumber(cards.length)}张牌`;
						}
					},
					markcount:"expansion"
				},
				onremove:(player,skill)=>{
					const cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				trigger:{global:"phaseUseBegin"},
				direct:true,
				filter:(event,player)=>event.player!=player&&!player.getExpansions("sst_xiandu").length,
				content:()=>{
					"step 0"
					player.chooseCard("h",get.prompt("sst_xiandu",trigger.player),`你可以扣置一张手牌，于${get.translation(trigger.player)}本回合第一次使用牌时亮出。若这两张牌的类别：相同，你可以对${get.translation(trigger.player)}造成一点伤害或摸两张牌；不同，${get.translation(trigger.player)}对你造成一点伤害。出牌阶段结束时，你将此牌置入弃牌堆`).set("ai",card=>{
						const target=_status.event.getTrigger().player;
						if(target.countUsed(null,true)) return 0;
						const cards=target.getCards("h",card=>target.hasUseTarget(card));
						if(!cards.length) return 0;
						return 7-get.value(card)-Math.abs(Math.max(...cards.map(value=>get.order(value)))-get.order(card));
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_xiandu",trigger.player);
						player.addToExpansion(result.cards,player,"giveAuto").gaintag.add("sst_xiandu");
					}
				},
				group:["sst_xiandu2","sst_xiandu3"]
			},
			sst_xiandu2:{
				trigger:{global:"useCard"},
				forced:true,
				logTarget:"player",
				filter:(event,player)=>{
					if(_status.currentPhase!=event.player) return false;
					if(event.player.countUsed(null,true)!=1) return false;
					return player.getExpansions("sst_xiandu").length;
				},
				content:()=>{
					"step 0"
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
					player.showCards(player.getExpansions("sst_xiandu"),`${get.translation(player)}对${translateTargets(trigger.player)}发动了【${get.skillTranslation(event.name,player)}】`);
					"step 1"
					if(get.type2(player.getExpansions("sst_xiandu")[0])==get.type2(trigger.card)){
						player.chooseControl(`对${get.translation(trigger.player)}造成1点伤害`,"摸两张牌","cancel2").set("ai",()=>{
							const player=_status.event.player;
							if(get.damageEffect(_status.event.getTrigger().player,player,player)-4>0) return 0;
							return 1;
						}).set("prompt","先读：选择一项");
					}
					else{
						trigger.player.line(player,"green");
						player.damage(trigger.player,"nocard");
					}
					"step 2"
					if(result.index==0){
						player.line(trigger.player,"green");
						trigger.player.damage(player,"nocard");
						player.addExpose(0.2);
					}
					else if(result.index==1){
						player.draw(2);
					}
				},
				ai:{
					damage:true
				}
			},
			sst_xiandu3:{
				trigger:{global:"phaseUseEnd"},
				forced:true,
				filter:(event,player)=>player.getExpansions("sst_xiandu").length,
				content:()=>{
					lib.skill.sst_xiandu.onremove(player,"sst_xiandu");
				}
			},
			//Isabelle
			sst_wenxu:{
				trigger:{global:"useCardAfter"},
				logTarget:"player",
				filter:(event,player)=>event.player!=player&&_status.currentPhase==event.player&&get.itemtype(event.cards)=="cards"&&event.cards.filterInD("o").length,
				check:(event,player)=>{
					if(get.attitude(player,event.player)>0&&game.hasPlayer(current=>event.player.canUse("sha",current)&&get.effect(current,{name:"sha",isCard:true},event.player,player)>0)) return event.player.getCardUsable("sha")<event.player.countCards("h","sha");
					return false;
				},
				content:()=>{
					"step 0"
					player.gain(trigger.cards.filterInD("o"),"gain2");
					"step 1"
					trigger.player.addTempSkill("sst_wenxu_effect");
					trigger.player.addMark("sst_wenxu_effect",1,false);
					player.addTempSkill("sst_wenxu_damage");
				},
				ai:{
					expose:0.2,
					threaten:1.5
				}
			},
			sst_wenxu_effect:{
				charlotte:true,
				intro:{
					content:"本回合你可以额外使用&张杀"
				},
				onremove:true,
				mod:{
					cardUsable:(card,player,num)=>{
						if(card.name=="sha") return num+player.countMark("sst_wenxu_effect");
					}
				}
			},
			sst_wenxu_damage:{
				trigger:{global:"phaseJieshuBegin"},
				filter:event=>event.player.hasSkill("sst_wenxu_effect")&&event.player.getCardUsable("sha")-event.player.countUsed("sha",true)>0,
				logTarget:"player",
				forced:true,
				content:()=>{
					player.damage(trigger.player,"nocard");
				}
			},
			sst_mihu:{
				trigger:{player:"useCardToPlayer"},
				filter:(event,player)=>{
					if(!player.isDamaged()) return false;
					return event.targets.length==1&&!event.getParent().sst_mihu;
				},
				forced:true,
				content:()=>{
					"step 0"
					player.judge(card=>{
						const suit=get.suit(card);
						return (suit=="spade"||suit=="club")?-1:0;
					}).set("judge2",result=>result.suit=="spade"||result.suit=="club");
					"step 1"
					const source=trigger.target;
					let target;
					switch(result.suit){
						case "spade":
							target=source.getPrevious();
							while(!lib.filter.targetEnabled2(trigger.card,player,target)){
								target=target.getPrevious();
							}
							trigger.getParent().sst_mihu=true;
							trigger.getParent().targets.remove(source);
							trigger.getParent().targets.push(target);
							source.line(target,"green");
							break;
						case "club":
							target=source.getNext();
							while(!lib.filter.targetEnabled2(trigger.card,player,target)){
								target=target.getNext();
							}
							trigger.getParent().sst_mihu=true;
							trigger.getParent().targets.remove(source);
							trigger.getParent().targets.push(target);
							source.line(target,"green");
							break;
					}
				}
			},
			//Daisy
			sst_renqing:{
				derivation:"sst_renqing_faq",
				init:player=>player.addSkill("sst_renqing_count"),
				trigger:{global:["phaseDrawBefore","phaseUseBefore","phaseDiscardBefore"]},
				filter:(event,player)=>{
					if(event.sst_renqing) return false;
					return event.player==player||(event.player.hasSkill("sst_manchan_effect_active")&&event.player.storage.sst_manchan&&event.player.storage.sst_manchan.contains(player));
				},
				direct:true,
				content:()=>{
					"step 0"
					event.phaseTranslate=name=>{
						switch(name){
							case "phaseDraw":
								return "摸牌阶段";
							case "phaseUse":
								return "出牌阶段";
							case "phaseDiscard":
								return "弃牌阶段";
						}
						return "";
					};
					event.phaseTranslateShort=name=>{
						switch(name){
							case "phaseDraw":
								return "摸牌";
							case "phaseUse":
								return "出牌";
							case "phaseDiscard":
								return "弃牌";
						}
						return "";
					};
					const list=["摸牌阶段","出牌阶段","弃牌阶段"].remove(event.phaseTranslate(trigger.name));
					let prompt="你可以跳过";
					prompt+=event.phaseTranslate(trigger.name);
					prompt+="，改为从",
					prompt+=list.join("、");
					prompt+="中选择一个执行。若如此做，本回合结束阶段，若本回合没有执行过弃牌阶段，你失去1点体力",
					player.chooseControl(list,"cancel2").set("prompt",get.prompt("sst_renqing",trigger.player)).set("prompt2",prompt).set("ai",()=>{
						const player=_status.event.player;
						const target=_status.event.getTrigger().player;
						const now=_status.event.now;
						const att=get.attitude(player,target);
						if(att<0){
							if(now!="弃牌阶段"){
								return "弃牌阶段";
							}
							else{
								return "cancel2";
							}
						}
						else if(att>0){
							switch(now){
								case "摸牌阶段":
									if(target.needsToDiscard()>2) return "cancel2";
									return "弃牌阶段";
								case "出牌阶段":
									if(player.hasSkill("sst_renqing_discard")) return "摸牌阶段";
									return "cancel2";
								case "弃牌阶段":
									if(player.hasSkill("sst_renqing_discard")) return "出牌阶段";
									return "cancel2";
							}
						}
						return "cancel2";
					}).set("now",event.phaseTranslate(trigger.name));
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_renqing",trigger.player);
						trigger.cancel();
						player.addTempSkill("sst_renqing_effect");
						switch(result.control){
							case "摸牌阶段":
								game.log(player,"将此",`#y${event.phaseTranslate(trigger.name)}`,"改为","#y摸牌阶段");
								player.popup(`${event.phaseTranslateShort(trigger.name)}→摸牌`,"wood");
								const phaseDraw=trigger.player.phaseDraw();
								event.next.remove(phaseDraw);
								trigger.next.push(phaseDraw);
								phaseDraw.set("sst_renqing",true);
								break;
							case "出牌阶段":
								game.log(player,"将此",`#y${event.phaseTranslate(trigger.name)}`,"改为","#y出牌阶段");
								player.popup(`${event.phaseTranslateShort(trigger.name)}→出牌`,"wood");
								const phaseUse=trigger.player.phaseUse();
								event.next.remove(phaseUse);
								trigger.next.push(phaseUse);
								phaseUse.set("sst_renqing",true);
								break;
							case "弃牌阶段":
								game.log(player,"将此",`#y${event.phaseTranslate(trigger.name)}`,"改为","#y弃牌阶段");
								player.popup(`${event.phaseTranslateShort(trigger.name)}→弃牌`,"wood");
								const phaseDiscard=trigger.player.phaseDiscard();
								event.next.remove(phaseDiscard);
								trigger.next.push(phaseDiscard);
								phaseDiscard.set("sst_renqing",true);
								break;
						}
						game.delayx();
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_renqing_count:{
				charlotte:true,
				trigger:{global:"phaseDiscardBegin"},
				silent:true,
				content:()=>{
					player.addTempSkill("sst_renqing_discard");
				}
			},
			sst_renqing_discard:{},
			sst_renqing_effect:{
				charlotte:true,
				trigger:{global:"phaseEnd"},
				filter:(event,player)=>!player.hasSkill("sst_renqing_discard"),
				forced:true,
				content:()=>{
					player.loseHp();
				}
			},
			sst_manchan:{
				trigger:{player:"damageEnd"},
				filter:(event,player)=>{
					if(!event.source) return false;
					if(event.source.storage.sst_manchan&&event.source.storage.sst_manchan.length&&event.source.storage.sst_manchan.contains(player)) return false;
					return event.source!=player;
				},
				direct:true,
				content:()=>{
					"step 0"
					const num=Math.floor(player.countCards("h")/2);
					player.chooseToDiscard(get.prompt("sst_manchan",trigger.source),`你可以弃置${get.cnNumber(num)}张手牌，然后你可以于${get.translation(trigger.source)}的下个回合内发动〖任情〗`,num).set("ai",get.unuseful3).set("logSkill",["sst_manchan",trigger.source]);
					"step 1"
					if(result.bool){
						if(!trigger.source.storage.sst_manchan) trigger.source.storage.sst_manchan=[];
						trigger.source.storage.sst_manchan.push(player);
						trigger.source.storage.sst_manchan_effect=player;
						trigger.source.addTempSkill("sst_manchan_effect",{player:"phaseBegin"});
						if(!result.cards||!result.cards.length) game.delayx();
					}
				},
				ai:{
					threaten:0.8,
					maixie_defend:true,
					combo:"sst_renqing"
				}
			},
			sst_manchan_effect:{
				charlotte:true,
				mark:"character",
				intro:{
					content:(storage,player)=>`${get.translation(player.storage.sst_manchan)}可以于你的下个回合内发动〖任情〗`
				},
				onremove:player=>player.addTempSkill("sst_manchan_effect_active")
			},
			sst_manchan_effect_active:{
				charlotte:true,
				onremove:player=>delete player.storage.sst_manchan
			},
			//Meta Knight
			sst_canyun:{
				enable:"phaseUse",
				filter:(event,player)=>player.hasCard(card=>!Array.isArray(player.storage.sst_canyun_effect)||!player.storage.sst_canyun_effect.contains(get.suit(card)),"he"),
				filterCard:(card,player)=>!Array.isArray(player.storage.sst_canyun_effect)||!player.storage.sst_canyun_effect.contains(get.suit(card)),
				filterTarget:true,
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				check:card=>6-get.value(card),
				position:"he",
				delay:false,
				content:()=>{
					"step 0"
					player.addTempSkill("sst_canyun_effect");
					player.markAuto("sst_canyun_effect",[get.suit(cards)]);
					game.delayx();
					"step 1"
					if(player.hasUseTarget({name:"juedou",isCard:true})) player.chooseUseTarget(true,{name:"juedou",isCard:true},false);
				},
				ai:{
					order:1,
					threaten:3,
					result:{
						player:player=>{
							const players=game.filterPlayer(current=>player.canUse("juedou",current));
							if(!players.length) return 0;
							return Math.cbrt(Math.max(...players.map(current=>get.effect(current,{name:"juedou"},player,player))));
						}
					}
				}
			},
			sst_canyun_effect:{
				global:"sst_canyun_effect2",
				charlotte:true,
				init:player=>{
					if(!Array.isArray(player.storage.sst_canyun_effect)) player.storage.sst_canyun_effect=[];
				},
				intro:{
					content:storage=>{
						const suits=[];
						storage.forEach(suit=>{
							if(!suits.contains(suit)) suits.push(suit);
						});
						return `本回合所有角色不能使用或打出${get.translation(suits)}牌`;
					}
				},
				onremove:true
			},
			sst_canyun_effect2:{
				mod:{
					cardEnabled:card=>{
						if(game.hasPlayer(current=>Array.isArray(current.storage.sst_canyun_effect)&&current.storage.sst_canyun_effect.contains(get.suit(card)))) return false;
					},
					cardRespondable:function(){
						return lib.skill.sst_canyun_effect2.mod.cardEnabled.apply(this,arguments);
					},
					cardSavable:function(){
						return lib.skill.sst_canyun_effect2.mod.cardEnabled.apply(this,arguments);
					}
				}
			},
			//Little Mac
			sst_douhun:{
				trigger:{player:"phaseZhunbeiBegin"},
				forced:true,
				logTarget:(event,player)=>game.filterPlayer(current=>current!=player).sortBySeat(_status.currentPhase),
				content:()=>{
					"step 0"
					player.addTempSkill("sst_douhun_effect");
					"step 1"
					event.targets=game.filterPlayer(current=>current!=player).sortBySeat(_status.currentPhase);
					event.num=0;
					player.line(event.targets,"green");
					"step 2"
					if(num<targets.length){
						if(targets[num].isIn()){
							targets[num].chooseToUse(`斗魂：对${get.translation(player)}使用一张杀（无距离限制），若如此做，你计算与${get.translation(player)}的距离为1直到${get.translation(player)}的下个准备阶段，否则本回合你不能响应${get.translation(player)}使用的牌`).set("filterTarget",function(card,player,target){
								if(target!=_status.event.getParent().player) return false;
								return lib.filter.targetEnabled.apply(this,arguments);
							}).set("filterCard",function(card){
								if(get.name(card)!="sha") return false;
								return lib.filter.filterCard.apply(this,arguments);
							});
						}
						else{
							event.num++;
							event.redo();
						}
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						targets[num].addSkill("sst_douhun_effect_sha");
						targets[num].markAuto("sst_douhun_effect_sha",[player]);
					}
					else{
						player.addTempSkill("sst_douhun_effect_direct");
						player.markAuto("sst_douhun_effect_direct",[targets[num]]);
					}
					event.num++;
					event.goto(2);
				}
			},
			sst_douhun_effect:{
				charlotte:true,
				mod:{
					globalFrom:()=>-Infinity
				}
			},
			sst_douhun_effect_sha:{
				charlotte:true,
				intro:{
					content:storage=>storage.map(value=>get.translation(value)).map(value=>`你计算与${value}的距离为1直到${value}下个回合开始`).join("<br>")
				},
				onremove:true,
				mod:{
					globalFrom:(from,to)=>{
						if(from.storage.sst_douhun_effect_sha.contains(to)) return -Infinity;
					}
				},
				forced:true,
				popup:false,
				trigger:{global:["phaseBeginStart","die"]},
				filter:(event,player)=>player.storage.sst_douhun_effect_sha.contains(event.player),
				content:()=>{
					player.unmarkAuto("sst_douhun_effect_sha",[trigger.player]);
					if(!player.storage.sst_douhun_effect_sha.length) player.removeSkill("sst_douhun_effect_sha");
				}
			},
			sst_douhun_effect_direct:{
				charlotte:true,
				intro:{
					content:"$不能响应你使用的牌"
				},
				onremove:true,
				trigger:{player:"useCard"},
				forced:true,
				popup:false,
				filter:(event,player)=>player.storage.sst_douhun_effect_direct&&player.storage.sst_douhun_effect_direct.length,
				content:()=>{
					trigger.directHit.addArray(player.storage.sst_douhun_effect_direct);
				}
			},
			sst_juejing:{
				mod:{
					aiValue:(player,card)=>{
						if(card.name=="zhuge") return 20;
					}
				},
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]
				},
				forced:true,
				filter:(event,player)=>{
					if(event.name=="gain"&&event.player==player) return player.countCards("h")!=4;
					const evt=event.getl(player);
					if(evt&&evt.player==player&&((evt.hs&&evt.hs.length>0)||(evt.es&&evt.es.length>0))) return player.countCards("h")!=4;
					return false;
				},
				content:()=>{
					if(player.countCards("h")<4){
						player.draw(4-player.countCards("h"),"nodelay");
					}
					else{
						player.chooseToDiscard(`绝境：弃置${get.cnNumber(player.countCards("h")-4)}张手牌`,player.countCards("h")-4,true).set("delay",false);
					}
				},
				ai:{
					noh:true,
					nogain:true
				}
			},
			//OC
			sst_baling:{
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player.isIn()&&player.inRange(event.player),
				logTarget:"player",
				check:(event,player)=>get.attitude(player,event.player)<0,
				content:()=>{
					"step 0"
					const controls=["选项一"];
					if(trigger.player.countGainableCards(player,"he")) controls.push("选项二");
					const list=[`受到${get.translation(player)}造成的一点伤害，然后你本回合下次造成的伤害+1`,`${get.translation(player)}获得你一张牌`];
					trigger.player.chooseControl(controls).set("choiceList",list).set("ai",()=>{
						if(!_status.event.controls.contains("选项二")) return "选项一";
						const player=_status.event.player;
						const source=_status.event.getParent().player;
						const cardValues=player.getGainableCards(source,"he").map(card=>get.value(card));
						return get.damageEffect(player,source,player)+cardValues.reduce((previousValue,currentValue)=>previousValue+currentValue,0)/cardValues.length*2>0?"选项一":"选项二";
					}).set("prompt","霸凌：选择一项");
					"step 1"
					if(result.control!="选项二"){
						trigger.player.damage(player,"nocard");
						trigger.player.addTempSkill("sst_baling_effect");
						trigger.player.addMark("sst_baling_effect",1,false);
					}
					else{
						player.gainPlayerCard(`霸凌：获得${get.translation(trigger.player)}一张牌`,trigger.player,"he",true);
						event.finish();
					}
					"step 2"
					game.delayx();
				},
				ai:{
					damage:true,
					expose:0.2
				}
			},
			sst_baling_effect:{
				charlotte:true,
				intro:{
					content:"本回合你下次造成的伤害+#"
				},
				trigger:{source:"damageBegin"},
				forced:true,
				onremove:true,
				logTarget:"player",
				content:()=>{
					const num=player.countMark("sst_baling_effect");
					player.removeSkill("sst_baling_effect");
					trigger.num+=num;
				},
				ai:{
					damageBonus:true
				}
			},
			//Mr. 8
			sst_yingzi:{
				trigger:{player:"phaseDrawBegin2"},
				forced:true,
				filter:event=>!event.numFixed,
				content:()=>{
					trigger.num++;
				},
				ai:{
					threaten:1.5
				},
				mod:{
					maxHandcardBase:player=>player.maxHp
				}
			},
			sst_geliao:{
				derivation:"sst_xiangle",
				trigger:{player:"phaseUseBefore"},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseCardTarget({
						selectCard:[0,Infinity],
						filterTarget:(card,player,target)=>{
							if(target==player) return false;
							if(ui.selected.cards.length){
								for(const i of ui.selected.cards){
									if(!lib.filter.canBeGained(i,target,player)) return false;
								}
							}
							return true;
						},
						ai1:card=>{
							const player=_status.event.player;
							if(player.needsToDiscard()-ui.selected.cards.filter(value=>get.position(value)=="h"&&game.checkMod(value,player,false,"ignoredHandcard",player)!=true).length>0&&game.checkMod(card,player,false,"ignoredHandcard",player)!=true) return 11-get.useful(card);
							return 3-get.useful(card);
						},
						ai2:target=>{
							if(!ui.selected.cards.length) return 0;
							const atts=ui.selected.cards.map(card=>Math.cbrt(get.attitude(_status.event.player,target)*get.value(card,target)));
							let att=atts.reduce((previousValue,currentValue)=>previousValue+currentValue,0)/atts.length;
							if(att>0&&(target.hasSkill("xiangle")||target.hasSkill("sst_xiangle"))) att-=2;
							return att;
						},
						prompt:get.prompt("sst_geliao"),
						prompt2:get.skillInfoTranslation("sst_geliao")
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_geliao",event.target);
						trigger.cancel();
						if(result.cards&&result.cards.length) player.give(result.cards,event.target);
					}
					else{
						event.finish();
					}
					"step 2"
					player.addSkill("sst_geliao_effect");
					player.markAuto("sst_geliao_effect",[target]);
					[player,target].sortBySeat(_status.currentPhase).forEach(current=>{
						if(!current.hasSkill("sst_xiangle")){
							current.addAdditionalSkill("sst_geliao_effect","sst_xiangle");
							current.popup("sst_xiangle","thunder");
							game.log(current,"获得了技能","#g【享乐】");
						}
					});
				},
				ai:{
					expose:0.2
				}
			},
			sst_geliao_effect:{
				charlotte:true,
				intro:{
					content:"你和$获得〖享乐〗直到你的下个回合开始"
				},
				onremove:true,
				trigger:{player:["phaseBeginStart","die"]},
				forceDie:true,
				forced:true,
				popup:false,
				content:()=>{
					const storage=player.storage.sst_geliao_effect.slice(0);
					player.removeSkill("sst_geliao_effect");
					game.filterPlayer(current=>current==player||storage.contains(current)).sortBySeat(_status.currentPhase).forEach(current=>{
						current.removeAdditionalSkill("sst_geliao_effect");
						if(!current.hasSkill("sst_xiangle")){
							current.popup("sst_xiangle","fire");
							game.log(current,"失去了技能","#g【享乐】");
						}
					});
				}
			},
			sst_xiangle:{
				trigger:{target:"useCardToTargeted"},
				forced:true,
				filter:event=>get.name(event.card)=="sha",
				content:()=>{
					"step 0"
					const eff=get.effect(player,trigger.card,trigger.player,trigger.player);
					trigger.player.chooseToDiscard(`享乐：弃置一张基本牌，否则杀对${get.translation(player)}无效`,card=>get.type(card)=="basic").set("ai",card=>{
						if(_status.event.eff>0) return 10-get.value(card);
						return 0;
					}).set("eff",eff);
					"step 1"
					if(result.bool==false) trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:(card,player,target)=>{
							if(card.name=="sha"&&get.attitude(player,target)<0){
								if(_status.event.name=="sst_xiangle") return;
								const bs=player.getCards("h",{type:"basic"});
								if(bs.length<2) return 0;
								if(player.hasSkill("jiu")||player.hasSkill("tianxianjiu")) return;
								if(bs.length<=3&&player.countCards("h","sha")<=1){
									for(const i of bs){
										if(i.name!="sha"&&get.value(i)<7) return [1,0,1,-0.5];
									}
									return 0;
								}
								return [1,0,1,-0.5];
							}
						}
					}
				}
			},
			//Dark Link
			sst_jingyue:{
				trigger:{global:"phaseZhunbeiBegin"},
				filter:(event,player)=>event.player!=player,
				logTarget:"player",
				content:()=>{
					"step 0"
					player.loseHp();
					"step 1"
					player.storage.sst_jingyue_target=trigger.player;
					player.addTempSkill("sst_jingyue_effect");
					game.delayx();
				},
				check:(event,player)=>player.hp>1&&event.player.countCards("h")>=Math.random()*event.player.getHandcardLimit()
			},
			sst_jingyue_effect:{
				charlotte:true,
				intro:{
					content:"expansion",
					markcount:"expansion"
				},
				onremove:(player,skill)=>{
					const cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
					delete player.storage.sst_jingyue_target;
				},
				trigger:{global:["useCardAfter","phaseJieshuBegin"]},
				filter:(event,player,name)=>{
					if(event.player!=player.storage.sst_jingyue_target) return false;
					if(name=="phaseJieshuBegin") return player.getExpansions("sst_jingyue_effect").length;
					return event.player.isPhaseUsing()&&get.itemtype(event.cards)=="cards"&&event.cards.filterInD("o").length;
				},
				forced:true,
				logTarget:"player",
				content:()=>{
					"step 0"
					if(event.triggername=="phaseJieshuBegin"){
						player.chooseBool(`镜月：以${get.translation(trigger.player)}为唯一目标依次使用${get.translation(player.getExpansions("sst_jingyue_effect"))}（目标不合法则置入弃牌堆），否则获得${get.translation(player.getExpansions("sst_jingyue_effect"))}`).set("ai",()=>{
							const player=_status.event.player;
							const cards=player.getExpansions("sst_jingyue_effect");
							const target=_status.event.getTrigger().player;
							return cards.filter(card=>lib.filter.targetEnabled3(card,player,target)).map(card=>get.effect(target,card,player,player)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)>cards.map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0);
						});
					}
					else{
						player.addToExpansion(trigger.cards.filterInD("o"),"gain2").gaintag.add("sst_jingyue_effect");
						event.finish();
					}
					"step 1"
					if(result.bool){
						event.cards=player.getExpansions("sst_jingyue_effect");
					}
					else{
						player.gain(player.getExpansions("sst_jingyue_effect"),"gain2");
						event.finish();
					}
					"step 2"
					const card=cards.shift();
					if(lib.filter.targetEnabled3(card,player,trigger.player)){
						player.useCard(card,trigger.player,false);
					}
					else{
						player.loseToDiscardpile(card);
					}
					if(cards.length) event.redo();
				}
			},
			//Kyuukou
			sst_jianxiang:{
				trigger:{player:"phaseJieshuAfter"},
				forced:true,
				content:()=>{
					player.addSkill("sst_jianxiang_effect");
					player.addMark("sst_jianxiang_effect",2,false);
					game.delayx();
				}
			},
			sst_jianxiang_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>`你本局游戏计算与其他角色的距离-${storage}<br>当前你计算与其他角色的距离：${-player.getGlobalFrom()}`
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_jianxiang_effect")
				}
			},
			sst_baochao:{
				trigger:{global:"useCard"},
				locked:false,
				filter:event=>["sha","tao"].contains(get.name(event.card)),
				logTarget:"player",
				check:(event,player)=>{
					if(get.name(event.card)=="tao"){
						let doubleDamaged=false;
						for(const i of event.targets){
							if(i.maxHp-i.hp>=2){
								doubleDamaged=true;
								break;
							}
						}
						if(!doubleDamaged) return false;
					}
					const effs=event.targets.map(target=>get.effect(target,event.card,event.player,player));
					return effs.reduce((previousValue,currentValue)=>previousValue+currentValue,0)/effs.length>0;
				},
				content:()=>{
					player.addSkill("sst_baochao_effect");
					player.addMark("sst_baochao_effect",1,false);
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage++;
				},
				ai:{
					expose:0.2
				}
			},
			sst_baochao_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>`你本局游戏计算与其他角色的距离+${storage}<br>当前你计算与其他角色的距离：${-player.getGlobalFrom()}`
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance+from.countMark("sst_baochao_effect")
				}
			},
			//Windier
			sst_chixing:{
				locked:false,
				mod:{
					aiOrder:(player,card,num)=>{
						if(get.color(card)!="red") return num+10;
					}
				},
				init:player=>player.initBraces(),
				trigger:{player:"phaseAfter"},
				filter:(event,player)=>{
					const evt=player.getLastUsed();
					return evt&&get.color(evt.card)=="red";
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_chixing"),`你可以令至多${get.cnNumber(player.getBraces())}名角色将手牌数调整到与你另外指定的一名角色相等`,[1,player.getBraces()]).set("ai",target=>{
						let fin=0;
						const att=get.attitude(_status.event.player,target);
						fin+=game.filterPlayer(current=>current.isMaxHandcard())[0].countCards("h")-target.countCards("h")*att;
						fin+=game.filterPlayer(current=>current.isMinHandcard())[0].countCards("h")-target.countCards("h")*att;
						return fin;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						player.logSkill("sst_chixing",event.targets);
						player.chooseTarget(`赤行：另外指定一名角色，令${get.translation(event.targets)}将手牌数调整到与其相等`,true).set("ai",target=>_status.event.getParent().targets.map(current=>{
							if(get.attitude(_status.event.player,current)>0) return target.countCards("h")-current.countCards("h");
							return current.countCards("h")-target.countCards("h");
						}).reduce((previousValue,currentValue)=>previousValue+currentValue,0));
						game.delayx();
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.targets&&result.targets.length){
						event.source=result.targets[0];
						player.line(event.source,"green");
						player.addExpose(0.2);
						game.delay();
					}
					else{
						event.finish();
					}
					"step 3"
					targets.forEach((target,i)=>{
						if(target.isIn()){
							const num=source.countCards("h");
							const num2=target.countCards("h");
							source.line(target,"green");
							if(num<num2){
								let next=target.chooseToDiscard(`赤行：弃置${get.cnNumber(num2-num)}张手牌`,num2-num,true);
								if(i<targets.length-1) next.set("delay",false);
							}
							else{
								target.drawTo(num,(i<targets.length-1)?["nodelay"]:undefined);
							}
						}
					});
				}
			},
			sst_chuanxiao:{
				init:player=>player.initBraces(),
				trigger:{global:"roundStart"},
				forced:true,
				filter:(event,player)=>{
					if(!player.bracesInited()) return false;
					const history=player.getAllHistory("useCard");
					return history&&history.length&&get.color(history[history.length-1].card)=="red";
				},
				content:()=>{
					player.addBraces();
					game.delayx();
				},
				ai:{
					combo:"sst_chixing"
				}
			},
			//任天鼠
			sst_jilve:{
				trigger:{global:"phaseUseBegin"},
				filter:(event,player)=>event.player!=player,
				logTarget:"player",
				check:(event,player)=>get.attitude(player,event.player)>0,
				content:()=>{
					"step 0"
					trigger.player.gainPlayerCard(`辑略：你可以获得${get.translation(player)}任意张手牌，然后你本回合计算与其他角色的距离-X（X为其以此法获得${get.translation(player)}的牌的数量），若因此你与场上所有其他角色距离为1，${get.translation(player)}摸两张牌`,player,[1,Infinity],"h","visible").set("ai",button=>_status.event.player.getUseValue(button.link));
					"step 1"
					if(result.cards&&result.cards.length){
						trigger.player.addTempSkill("sst_jilve_effect");
						trigger.player.addMark("sst_jilve_effect",result.cards.length,false);
					}
					"step 2"
					if(!game.hasPlayer(current=>get.distance(trigger.player,current)>1)){
						player.draw(2);
					}
					else{
						game.delayx();
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_jilve_effect:{
				charlotte:true,
				intro:{
					content:"本回合计算与其他角色的距离-#"
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_jilve_effect")
				}
			},
			sst_yuanchuan:{
				skillAnimation:true,
				animationColor:"fire",
				trigger:{player:"die"},
				filter:()=>lib.skill.sst_yuanchuan.logTarget().length,
				logTarget:()=>game.filterPlayer(current=>game.hasPlayer2(source=>source.hasAllHistory("useSkill",evt=>evt.skill=="sst_jilve"&&evt.targets.contains(current)))).sortBySeat(_status.currentPhase),
				forced:true,
				forceDie:true,
				content:()=>{
					game.asyncDraw(lib.skill.sst_yuanchuan.logTarget(trigger,player),3);
				}
			},
			//Srf
			sst_diebu:{
				mark:true,
				marktext:"☯",
				intro:{
					content:storage=>storage?"转换技，你可以视为使用一张【闪】。":"转换技，你可以视为使用一张【杀】。"
				},
				locked:false,
				zhuanhuanji:true,
				enable:"chooseToUse",
				viewAs:(cards,player)=>({name:player.storage.sst_diebu?"shan":"sha",isCard:true,storage:{sst_diebu:true}}),
				filterCard:()=>false,
				selectCard:-1,
				filter:(event,player)=>{
					const filter=event.filterCard;
					if(filter({name:"sha",isCard:true,storage:{sst_diebu:true}},player,event)&&!player.storage.sst_diebu) return true;
					if(filter({name:"shan",isCard:true,storage:{sst_diebu:true}},player,event)&&player.storage.sst_diebu) return true;
					return false;
				},
				onuse:(result,player)=>player.changeZhuanhuanji("sst_diebu"),
				mod:{
					targetInRange:card=>{
						if(card.storage&&card.storage.sst_diebu) return true;
					}
				},
				ai:{
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						switch(tag){
							case "respondSha":
								if(player.storage.sst_diebu) return false;
								break;
							case "respondShan":
								if(!player.storage.sst_diebu) return false;
								break;
						}
					},
					respondSha:true,
					respondShan:true,
					order:4
				}
			},
			sst_bielian:{
				preHidden:true,
				trigger:{player:"useCardAfter"},
				filter:event=>event.cards.length,
				check:(event,player)=>!player.hasCard(card=>get.type2(card)==get.type2(event.card)&&lib.filter.cardEnabled(card,player)&&lib.filter.cardUsable(card,player),"h"),
				content:()=>{
					"step 0"
					player.draw();
					"step 1"
					player.addTempSkill("sst_bielian_effect");
					player.markAuto("sst_bielian_effect",[get.type2(trigger.card)]);
				}
			},
			sst_bielian_effect:{
				charlotte:true,
				intro:{
					content:"本回合你不能使用或打出$牌"
				},
				onremove:true,
				mod:{
					cardEnabled:(card,player)=>{
						if(Array.isArray(player.storage.sst_bielian_effect)&&player.storage.sst_bielian_effect.contains(get.type2(card))) return false;
					},
					cardRespondable:function(){
						return lib.skill.sst_bielian_effect.mod.cardEnabled.apply(this,arguments);
					},
					cardSavable:function(){
						return lib.skill.sst_bielian_effect.mod.cardEnabled.apply(this,arguments);
					}
				}
			},
			//Bowser Jr.
			sst_guaibi:{
				global:"sst_guaibi_ai",
				init:player=>{
					player.initBraces();
					if(typeof player.storage.sst_guaibi!="number") player.storage.sst_guaibi=0;
					player.addSkill("sst_guaibi_clear");
				},
				trigger:{global:"useCard"},
				filter:(event,player)=>{
					if(player.storage.sst_guaibi>=player.getBraces()) return false;
					if(get.name(event.card)=="sha") return true;
					return false;
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_guaibi"),get.skillInfoTranslation("sst_guaibi",player),(card,player,target)=>target.countCards("he")>=2).set("ai",target=>{
						const player=_status.event.player;
						const evt=_status.event.getTrigger();
						const card=evt.card;
						const att=get.attitude(player,target);
						let eff=att*lib.card.guohe_copy2.ai.result.target(player,target);
						if(target!=evt.player) eff+=att*target.getUseValue(card);
						eff=Math.cbrt(eff);
						if(target==player) eff+=2;
						return eff;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_guaibi",event.target);
						player.storage.sst_guaibi++;
						player.discardPlayerCard(`怪笔：弃置${get.translation(event.target)}两张牌`,event.target,"he",2,true);
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.set("player",target);
					game.log(target,"成为了",trigger.card,"的使用者");
					game.delayx();
					"step 3"
					target.chooseTarget(`怪笔：你可以为${get.translation(trigger.card)}重新指定目标`).set("ai",target=>{
						const player=_status.event.player;
						const card=get.card();
						let val=get.effect(target,card,player,player);
						const evt=_status.event.getTrigger();
						if(evt.targets.map(value=>get.effect(value,card,player,player)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/evt.targets.length<0) val+=1;
						return val;
					}).set("_get_card",trigger.card).set("filterTarget",(card,player,target)=>lib.filter.filterTarget(get.card(),player,target)).set("selectTarget",lib.filter.selectTarget);
					"step 4"
					if(result.targets&&result.targets.length){
						target.line(result.targets,"green");
						trigger.targets.length=0;
						trigger.targets.addArray(result.targets);
						game.log(target,"重新指定了",trigger.card,"的目标为",result.targets);
					}
				},
				ai:{
					threaten:4,
					expose:0.2
				}
			},
			sst_guaibi_clear:{
				charlotte:true,
				trigger:{global:"roundStart"},
				silent:true,
				content:()=>{
					player.storage.sst_guaibi=0;
				}
			},
			sst_guaibi_ai:{
				ai:{
					effect:{
						player:(card,player)=>{
							if(game.hasPlayer(current=>current!=player&&current.hasSkill("sst_guaibi")&&get.attitude(player,current)<0&&current.storage.sst_guaibi_round<current.storage.sst_guaibi)&&game.countPlayer()>2&&get.name(card)=="sha"&&game.hasPlayer(current=>get.attitude(player,current)<0&&current.countCards("he")>=2)){
								if(game.hasPlayer(current=>get.attitude(player,current)>0&&current.mayHaveShan())) return [1,-1];
								return [1,-3];
							}
						}
					}
				}
			},
			sst_daonao:{
				init:player=>player.initBraces(),
				trigger:{source:"damageSource"},
				filter:(event,player)=>player.bracesInited(),
				forced:true,
				content:()=>{
					player.addBraces();
				},
				ai:{
					combo:"sst_guaibi",
					halfneg:true,
					effect:{
						target:(card,player,target)=>{
							if(get.attitude(player,target)<0&&get.tag(card,"damage")){
								if(get.name(card)=="sha") return [1,1];
								return [1,5];
							}
						}
					},
					threaten:4
				},
				group:"sst_daonao2"
			},
			sst_daonao2:{
				trigger:{player:"damageEnd"},
				filter:(event,player)=>{
					if(!player.bracesInited()) return false;
					return player.getBraces()>0;
				},
				forced:true,
				content:()=>{
					player.removeBraces(Math.min(player.getBraces(),trigger.num));
				}
			},
			//Koopalings
			sst_shimo:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_shimo")).set("ai",target=>{
						const player=_status.event.player;
						if(player.hp<=1) return 0;
						const num=game.hasPlayer2(current=>current.hasAllHistory("useSkill",evt=>evt.skill=="sst_shimo"&&evt.targets.contains(target)))?1:2;
						if(get.attitude(player,target)<0){
							if(target.countCards("he",card=>lib.filter.cardDiscardable(card,target))<2) return 0;
							return Math.sqrt(-get.attitude(player,target))*num-4+player.hp;
						}
						return Math.sqrt(get.attitude(player,target))*num-4+player.hp;
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_shimo",result.targets);
						player.loseHp();
						event.target=result.targets[0];
						event.num=1;
						if(!game.hasPlayer2(current=>current.getAllHistory("useSkill",evt=>evt.skill=="sst_shimo"&&evt.targets.contains(event.target)).length-1>0)) event.num=2;
						const controls=["选项一"];
						if(trigger.player.countCards("he",card=>lib.filter.cardDiscardable(card,trigger.player))>=2) controls.push("选项二");
						player.chooseControl(controls).set("choiceList",[
							`${get.translation(event.target)}摸${get.cnNumber(event.num)}张牌`,
							`${get.translation(event.target)}弃置${get.cnNumber(event.num)}张牌`
						]).set("ai",()=>get.attitude(player,_status.event.getParent().target)>0?0:1).set("prompt","施魔：选择一项");
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.control=="选项二"){
						target.chooseToDiscard(`施魔：弃置${get.cnNumber(num)}张牌`,num,true,"he");
					}
					else{
						target.draw(num);
					}
					player.addExpose(0.2);
				}
			},
			sst_qiebao:{
				enable:"phaseUse",
				usable:1,
				log:false,
				viewAs:{name:"shunshou",isCard:true},
				filterCard:()=>false,
				selectCard:-1,
				precontent:()=>{
					player.logSkill("sst_qiebao",event.result.targets);
					player.loseMaxHp();
				},
				ai:{
					order:(item,player)=>{
						if(!player) return;
						if(player.hp==player.maxHp) return 0;
						if(player.hp<player.maxHp-1||player.hp<=2) return get.order({name:"shunshou",isCard:true})-0.1;
						return 0;
					},
					result:{
						player:player=>{
							if(player.maxHp<=3) return -1;
							return 0.5;
						}
					}
				}
			},
			sst_duzhi:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:(event,player)=>!player.hasHistory("useSkill",evt=>evt.skill=="sst_shimo")||!player.hasHistory("useSkill",evt=>evt.skill=="sst_qiebao"),
				content:()=>{
					player.addTempSkill("sst_duzhi_effect",{player:"phaseBeginStart"});
					game.delayx();
				},
				ai:{
					neg:true
				}
			},
			sst_duzhi_effect:{
				mark:true,
				intro:{
					content:"你不能响应其他角色使用的牌直到你的下回合开始"
				},
				trigger:{global:"useCard"},
				filter:(event,player)=>event.player!=player,
				forced:true,
				popup:false,
				charlotte:true,
				content:()=>{
					trigger.directHit.add(player);
				},
				ai:{
					neg:true
				},
				global:"sst_duzhi_effect_ai",
				subSkill:{
					ai:{
						ai:{
							directHit_ai:true,
							skillTagFilter:(player,tag,arg)=>arg.target.hasSkill("sst_duzhi_effect")&&arg.target!=player
						}
					}
				}
			},
			//Ryu
			sst_tandao:{
				forced:true,
				trigger:{player:"phaseDrawBegin1"},
				filter:event=>!event.numFixed,
				content:()=>{
					"step 0"
					trigger.changeToZero();
					event.cards=get.cards(4);
					event.cards.forEach(card=>ui.cardPile.insertBefore(card.fix(),ui.cardPile.firstChild));
					player.showCards(event.cards,`${get.translation(player)}发动了【${get.skillTranslation(event.name,player)}】`);
					"step 1"
					let str="探道：获得其中的杀或非杀的牌";
					if(player.storage.sst_tandao==1){
						str+="，若你选择获得其中的杀的牌，你本回合使用杀没有次数限制";
					}
					else if(player.storage.sst_tandao==2){
						str+="，若你选择获得其中的非杀的牌，你可以额外获得一张牌";
					}
					player.chooseCardButton(str,cards,true).set("filterButton",button=>{
						if(!ui.selected.buttons||!ui.selected.buttons.length) return true;
						const player=_status.event.player;
						const buttons=ui.selected.buttons.filter(value=>get.name(value.link)=="sha");
						if(buttons.length){
							if(player.storage.sst_tandao==2&&buttons.length<=1) return true;
							if(buttons.length<ui.selected.buttons.length) return get.name(button.link)!="sha";
							return get.name(button.link)=="sha";
						}
						if(player.storage.sst_tandao==2) return true;
						return get.name(button.link)!="sha";
					}).set("selectButton",()=>{
						const evt=_status.event.getParent();
						if(!ui.selected.buttons.length) return evt.cards.length;
						const player=_status.event.player;
						const num=evt.cards.filter(card=>get.name(card)!="sha").length;
						const buttons=ui.selected.buttons.filter(value=>get.name(value.link)=="sha");
						if(buttons.length){
							if(player.storage.sst_tandao==2&&buttons.length<=1){
								if(ui.selected.buttons.length==buttons.length) return [evt.cards.length-num,evt.cards.length];
								return num+1;
							}
							return evt.cards.length-num;
						}
						if(player.storage.sst_tandao==2) return [num,num+1];
						return num;
					}).set("complexSelect",true);
					"step 2"
					if(result.links&&result.links.length){
						event.previous=player.storage.sst_tandao;
						event.now=1;
						for(const i of result.links){
							if(get.name(i)!="sha"){
								event.now=2;
								break;
							}
						}
						player.storage.sst_tandao=event.now;
						player.gain(result.links,"gain2");
					}
					"step 3"
					if(event.previous==1&&event.now==1) player.addTempSkill("sst_tandao_effect");
				}
			},
			sst_tandao_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"你本回合使用杀没有次数限制"
				},
				mod:{
					cardUsable:card=>{
						if(card.name=="sha") return Infinity;
					}
				}
			},
			sst_bodong:{
				mod:{
					targetInRange:()=>true
				}
			},
			//Ken
			sst_yanyang:{
				enable:"phaseUse",
				filterTarget:(card,player,target)=>target.hasCard(card=>lib.filter.cardDiscardable(card,target),"he")&&target.countCards("h")>=player.countCards("h"),
				delay:false,
				content:()=>{
					"step 0"
					target.chooseToDiscard("焰扬：弃置一张牌","he",true).set("ai",card=>{
						if(get.name(card)=="sha"&&get.damageEffect(_status.event.getParent().player,_status.event.player,_status.event.player)>0) return 0;
						if(get.position(card)!="h") return -10;
						return get.unuseful(card);
					});
					"step 1"
					if(result.cards&&result.cards.length&&get.name(result.cards[0])=="sha"){
						target.line(player,"green");
						player.damage(player.getHistory("useSkill",evt=>evt.skill=="sst_yanyang").length,target,"nocard");
					}
					else{
						event.finish();
					}
					"step 2"
					game.delayx();
				},
				ai:{
					order:3,
					result:{
						target:player=>{
							if(player.hasHistory("damage",evt=>{
								const sst_yanyang=evt.getParent();
								return sst_yanyang&&sst_yanyang.name=="sst_yanyang";
							})) return 0;
							return -0.5;
						}
					}
				}
			},
			sst_shenglong:{
				trigger:{player:"useCard"},
				forced:true,
				popup:false,
				content:()=>{
					trigger.directHit.addArray(game.filterPlayer2(current=>{
						if(current==player) return false;
						const dist=get.distance(player,current);
						if(dist<=1) return true;
						return !game.hasPlayer(current2=>current2!=player&&get.distance(player,current2)<dist);
					}));
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg.target==player) return false;
						const dist=get.distance(player,arg.target);
						if(dist<=1) return true;
						return !game.hasPlayer(current=>current!=player&&get.distance(player,current)<dist);
					}
				}
			},
			//Waluigi
			sst_zhamou:{
				locked:false,
				mod:{
					aiOrder:(player,card,num)=>{
						if(player==_status.currentPhase&&get.itemtype(card)=="card"&&get.color(card)=="red") return num+3;
					}
				},
				enable:"phaseUse",
				usable:1,
				filter:(event,player)=>player.countCards("h"),
				filterTarget:lib.filter.notMe,
				delay:false,
				content:()=>{
					"step 0"
					target.discardPlayerCard(`诈谋：弃置${get.translation(player)}一张手牌，若为黑色，视为${get.translation(player)}对你使用一张任意普通锦囊牌`,player,"h",true);
					"step 1"
					if(result.cards&&result.cards.length&&get.color(result.cards[0])=="black"){
						event.card=result.cards[0];
						const list=lib.inpile.filter(name=>get.type(name)=="trick"&&lib.filter.targetEnabled3({name:name,isCard:true},player,target)).map(name=>["锦囊","",name]);
						if(list.length) player.chooseButton([`诈谋：视为对${get.translation(target)}使用一张锦囊牌`,[list,"vcard"]],true).set("filterButton",button=>lib.filter.targetEnabled3({name:button.link[2],isCard:true},_status.event.player,_status.event.getParent().target)).set("ai",button=>get.effect(_status.event.getParent().target,{name:button.link[2],isCard:true},_status.event.player,_status.event.player));
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links&&result.links.length) player.useCard({name:result.links[0][2],isCard:true},target,false);
					"step 3"
					player.chooseBool(`诈谋：是否收回${get.translation(card)}？否则令此技能视为此出牌阶段未发动过`).set("ai",()=>{
						const card=_status.event.getParent().card;
						if(!_status.event.player.countCards("h",{color:"black"})&&get.value(card)>0) return true;
						if(get.position(card)=="d") return get.value(card)>7;
						return false;
					});
					"step 4"
					if(result.bool){
						if(get.position(card)=="d") player.gain(card,"gain2");
					}
					else{
						const stat=player.getStat("skill");
						if(stat.sst_zhamou) stat.sst_zhamou=0;
						game.log(player,"令技能","#g【诈谋】","视为此出牌阶段未发动过");
					}
				},
				ai:{
					order:6,
					fireAttack:true,
					result:{
						player:(player,target)=>{
							const black=player.countCards("h",{color:"black"});
							if(!black) return 0;
							return Math.cbrt((black-player.countCards("h",{color:"red"})+1)*get.attitude(player,target));
						}
					}
				}
			},
			//Master Hand
			sst_zhuzai:{
				preHidden:true,
				global:"sst_zhuzai_ai",
				init:player=>{
					if(!Array.isArray(player.storage.sst_zhuzai)) player.storage.sst_zhuzai=[];
				},
				trigger:{global:"phaseZhunbeiBegin"},
				filter:event=>event.player.countCards("h"),
				logTarget:"player",
				check:()=>true,
				content:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_zhuzai_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_zhuzai)) player.storage.sst_zhuzai.length=0;
							game.filterPlayer(current=>current.removeGaintag("sst_zhuzai"));
						});
					}
					"step 1"
					const next=player.choosePlayerCard(`主宰：展示${get.translation(trigger.player)}一张手牌，若为基本牌或普通锦囊牌，${get.translation(trigger.player)}本回合使用此牌时你可以为其增加一个目标。结束阶段，若${get.translation(trigger.player)}本回合未使用此牌，你可以对${get.translation(trigger.player)}造成1点伤害`,trigger.player,"h",true).set("ai",get.buttonValue);
					if(player.hasZhuSkill("sst_zhixu",player)&&trigger.player.group==player.group) next.set("visible",true);
					"step 2"
					if(result.cards&&result.cards.length){
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
						player.storage.sst_zhuzai.addArray(result.cards);
						trigger.player.addGaintag(result.cards,"sst_zhuzai");
						player.showCards(result.cards,`${get.translation(player)}对${translateTargets(trigger.player)}发动了【${get.skillTranslation(event.name,player)}】`);
					}
				},
				group:["sst_zhuzai2","sst_zhuzai3"]
			},
			sst_zhuzai2:{
				trigger:{global:"useCard2"},
				filter:(event,player)=>{
					if(!["basic","trick"].contains(get.type(event.card))) return false;
					if(event.player!=_status.currentPhase) return false;
					if(!event.player.hasHistory("lose",evt=>{
						if(evt.getParent()!=event) return false;
						for(const i in evt.gaintag_map){
							if(evt.gaintag_map[i].contains("sst_zhuzai")&&player.storage.sst_zhuzai.some(card=>card.cardid==i)) return true;
						}
						return false;
					})) return false;
					return game.hasPlayer(current=>!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current));
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_zhuzai2"),`为${get.translation(trigger.card)}增加目标`,(card,player,target)=>{
						const evt=_status.event.getTrigger();
						return !evt.targets.contains(target)&&lib.filter.targetEnabled2(evt.card,evt.player,target);
					}).set("autodelay",true).set("ai",target=>get.effect(target,_status.event.getTrigger().card,_status.event.player,_status.event.player));
					"step 1"
					if(result.bool){
						player.logSkill("sst_zhuzai2",result.targets);
						trigger.targets.addArray(result.targets);
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_zhuzai3:{
				trigger:{global:"phaseJieshuBegin"},
				filter:(event,player)=>player.storage.sst_zhuzai.length&&!event.player.hasHistory("useCard",evt=>event.player.hasHistory("lose",lose=>{
					if(lose.getParent()!=evt) return false;
					for(const i in lose.gaintag_map){
						if(lose.gaintag_map[i].contains("sst_zhuzai")&&player.storage.sst_zhuzai.some(card=>card.cardid==i)) return true;
					}
					return false;
				})),
				logTarget:"player",
				prompt2:event=>`你可以对${get.translation(event.player)}造成1点伤害`,
				check:(event,player)=>get.damageEffect(event.player,player,player)>0,
				content:()=>{
					"step 0"
					trigger.player.damage(player,"nocard");
					"step 1"
					game.delayx();
				},
				ai:{
					damage:true,
					expose:0.2
				}
			},
			sst_zhuzai_ai:{
				ai:{
					effect:{
						player:card=>{
							if(game.countPlayer(current=>card==current.storage.sst_zhuzai)) return [1,1];
						}
					}
				}
			},
			sst_zhixu:{
				zhuSkill:true,
				unique:true,
				locked:true
			},
			//Ike
			sst_tugu:{
				enable:"chooseToUse",
				usable:1,
				hiddenCard:(player,name)=>!player.getStat().skill.sst_tugu&&player.hasCard(card=>!get.tag(card,"damage"),"hes")&&lib.inpile.contains(name)&&get.tag({name:name},"damage"),
				filter:(event,player)=>{
					if(!player.hasCard(card=>!get.tag(card,"damage"),"hes")) return false;
					for(const name of lib.inpile){
						if(get.tag({name:name},"damage")&&event.filterCard({name:name},player,event)) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:(event,player)=>{
						const list=[];
						lib.inpile.forEach(name=>{
							if(get.tag({name:name},"damage")){
								if(name=="sha"){
									if(event.filterCard({name:name},player,event)) list.push(["基本","","sha"]);
									lib.inpile_nature.forEach(nature=>{
										if(event.filterCard({name:name},player,event)) list.push(["基本","","sha",nature]);
									});
								}
								else if(get.type(name)=="trick"&&event.filterCard({name:name},player,event)){
									list.push(["锦囊","",name]);
								}
								else if(get.type(name)=="basic"&&event.filterCard({name:name},player,event)){
									list.push(["基本","",name]);
								}
							}
						});
						return ui.create.dialog("突固",[list,"vcard"]);
					},
					filter:(button,player)=>_status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent()),
					check:button=>{
						const player=_status.event.player;
						if(player.countCards("h",button.link[2])>0) return 0;
						if(button.link[2]=="wugu") return 0;
						const effect=player.getUseValue(button.link[2]);
						if(effect>0) return effect;
						return 0;
					},
					backup:links=>({
						filterCard:card=>!get.tag(card,"damage"),
						selectCard:1,
						check:card=>6-get.value(card),
						position:"hes",
						popname:true,
						viewAs:{name:links[0][2],nature:links[0][3]}
					}),
					prompt:links=>`将一张不带有「伤害」标签的牌当作${get.translation(links[0][3])||""}${get.translation(links[0][2])}使用`
				},
				ai:{
					threaten:2,
					respondSha:true,
					order:4,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.hasCard(card=>!get.tag(card,"damage"),"hes")) return false;
					},
					result:{
						player:1
					}
				}
			},
			//缪缪
			sst_qichang:{
				derivation:"sst_qichang_faq",
				locked:false,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>{
					for(let i=1;i<=5;i++){
						if(player.isEmpty(i)) return true;
					}
					return false;
				},
				content:()=>{
					"step 0"
					player.addTempSkill("sst_qichang_effect");
					player.addMark("sst_qichang_effect",1,false);
					"step 1"
					const list=lib.inpile.filter(name=>get.type(name)=="equip"&&name!="muniu"&&player.isEmpty(get.subtype({name:name,isCard:true}))).map(name=>["装备","",name]);
					if(list.length){
						player.chooseButton(["绮裳：视为装备一张装备牌",[list,"vcard"]],true).set("ai",button=>get.effect(_status.event.player,{name:button.link[2],isCard:true},_status.event.player,_status.event.player));
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links&&result.links.length){
						player.addSkill("sst_qichang_effect2");
						const card=game.createCard(result.links[0][2],"","");
						player.storage.sst_qichang=card;
						player.popup(card,"wood");
						game.log(player,"视为装备了",card);
						if(lib.config.background_audio) game.playAudio("effect",get.subtype(card));
						game.broadcast(type=>{
							if(lib.config.background_audio) game.playAudio("effect",type);
						},get.subtype(card));
						player.$gain2(card);
						player.directequip([card]);
						card._destroy=true;
						game.broadcast(card=>card._destroy=true,card);
						game.delayx();
					}
				}
			},
			sst_qichang_effect:{
				intro:{
					content:(storage,player)=>`本回合你的手牌上限-${storage}<br>当前你的手牌上限：${player.getHandcardLimit()}`
				},
				onremove:true,
				mod:{
					maxHandcard:(player,num)=>num-player.countMark("sst_qichang_effect")
				}
			},
			sst_qichang_effect2:{
				charlotte:true,
				mod:{
					cardDiscardable:(card,player)=>{
						if(player.storage.sst_qichang==card) return false;
					},
					canBeDiscarded:(card,source,player)=>{
						if(player.storage.sst_qichang==card) return false;
					},
					canBeGained:function(){
						return lib.skill.sst_qichang_effect2.mod.canBeDiscarded.apply(this,arguments);
					}
				},
				trigger:{player:"phaseBeginStart"},
				filter:(event,player)=>player.storage.sst_qichang&&player.getCards("e").contains(player.storage.sst_qichang),
				forced:true,
				popup:false,
				content:()=>{
					"step 0"
					player.removeSkill("sst_qichang_effect2");
					player.lose(player.storage.sst_qichang,ui.special).set("_triggered",null);
					player.$throw(player.storage.sst_qichang);
					"step 1"
					delete player.storage.sst_qichang;
					game.broadcastAll(ui.clear);
					player.update();
					game.delayx();
				}
			},
			sst_shizhu:{
				derivation:"sst_shizhu_faq",
				trigger:{global:"phaseDiscardEnd"},
				filter:event=>event.cards&&event.cards.length,
				direct:true,
				content:()=>{
					"step 0"
					if(trigger.player==player){
						player.chooseTarget(get.prompt("sst_shizhu"),`你可以令一名其他角色弃置${get.cnNumber(trigger.cards.length)}张牌，若如此做，你可以从你与其弃置的牌中选择任意张对你或其使用`,(card,player,target)=>target.countCards("he",i=>lib.filter.cardDiscardable(i,target))>=_status.event.getTrigger().cards.length).set("ai",target=>-get.attitude(_status.event.player,target));
						event.control=1;
					}
					else{
						player.chooseToDiscard(get.prompt("sst_shizhu"),`你可以弃置${get.cnNumber(trigger.cards.length)}张牌，若如此做，你可以从此阶段进入弃牌堆的牌中选择任意张对你或其使用`,trigger.cards.length,"he").set("logSkill",["sst_shizhu",trigger.player]).set("ai",card=>{
							const player=_status.event.player;
							const target=_status.event.getTrigger().player;
							if(!lib.filter.targetEnabled3(card,player,player)&&!lib.filter.targetEnabled3(card,player,target)&&!_status.event.getTrigger().cards.some(i=>lib.filter.targetEnabled3(i,player,player)||lib.filter.targetEnabled3(i,player,target))) return 0;
							return Math.max(get.effect(player,card,player,player),get.effect(target,card,player,player))-5;
						});
						event.control=2;
					}
					"step 1"
					if(event.control==1){
						if(result.targets&&result.targets.length){
							event.target=result.targets[0];
							player.logSkill("sst_shizhu",event.target);
							event.target.chooseToDiscard(`拾珠：弃置${get.cnNumber(trigger.cards.length)}张牌，然后${get.translation(player)}可以从此阶段进入弃牌堆的牌中选择任意张对${get.translation(player)}或你使用`,trigger.cards.length,"he",true);
						}
						else{
							event.finish();
						}
					}
					else{
						if(result.cards&&result.cards.length){
							event.target=trigger.player;
						}
						else{
							event.finish();
						}
					}
					"step 2"
					event.cards=[];
					game.getGlobalHistory("cardMove",evt=>{
						if(evt.name=="cardsDiscard"||(evt.name=="lose"&&evt.position==ui.discardPile)){
							const phaseDiscard=evt.getParent("phaseDiscard");
							if(phaseDiscard&&phaseDiscard.name=="phaseDiscard") event.cards.addArray(evt.cards.filterInD("d"));
						}
					});
					"step 3"
					player.chooseCardButton("拾珠：选择一张牌",cards).set("filterButton",button=>{
						const player=_status.event.player;
						return lib.filter.targetEnabled3(button.link,player,player)||lib.filter.targetEnabled3(button.link,player,_status.event.getParent().target);
					}).set("ai",button=>{
						const player=_status.event.player;
						return Math.max(get.effect(player,button.link,player,player),get.effect(_status.event.getParent().target,button.link,player,player));
					});
					"step 4"
					if(result.links&&result.links.length){
						cards.removeArray(result.links);
						event.card=result.links[0];
					}
					else{
						event.finish();
					}
					"step 5"
					player.chooseTarget(`拾珠：选择${get.translation(card)}的目标`,(card,player,target)=>{
						const evt=_status.event.getParent();
						return [player,evt.target].contains(target)&&lib.filter.targetEnabled3(evt.card,player,target);
					}).set("ai",target=>get.effect(target,_status.event.getParent().card,_status.event.player,_status.event.player));
					"step 6"
					if(result.targets&&result.targets.length) player.useCard(card,result.targets[0],false);
					if(cards.length) event.goto(3);
				}
			},
			//Toon Link
			sst_yufeng:{
				preHidden:true,
				trigger:{global:"phaseZhunbeiBegin"},
				direct:true,
				filter:(event,player)=>player.countCards("h"),
				content:()=>{
					"step 0"
					player.chooseToDiscard(get.prompt2("sst_yufeng",trigger.player)).set("ai",card=>{
						const player=_status.event.player;
						const target=_status.event.getTrigger().player;
						if(get.attitude(player,target)<=0) return 0;
						const judges=target.getCards("j");
						if(judges&&judges.length&&!player.hasWuxie()){
							const judge=get.judge(judges[0]);
							return judge(card)*(11-get.value(card));
						}
						if(target.countCards("h",{color:"red"})-target.countCards("h",{color:"black"})>0){
							const val=5-get.value(card);
							if(get.color(card)!="red") return val-2;
							return val;
						}
						else if(target.countCards("h",{color:"black"})-target.countCards("h",{color:"red"})>=0){
							const val=5-get.value(card);
							if(get.color(card)!="black") return val-2;
							return val;
						}
						return 0;
					}).set("logSkill",["sst_yufeng",trigger.player]);
					"step 1"
					if(result.cards&&result.cards.length){
						trigger.player.storage.sst_yufeng_effect=get.suit(result.cards[0]);
						trigger.player.addTempSkill("sst_yufeng_effect");
						game.delayx();
					}
				},
				ai:{
					expose:0.1
				}
			},
			sst_yufeng_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:storage=>{
						const color=suit=>{
							if(["spade","club"].contains(suit)) return "black";
							if(["heart","diamond"].contains(suit)) return "red";
							return "none";
						}
						return `本回合${get.translation(color(storage))}牌花色均视为${get.translation(storage)}`;
					}
				},
				mod:{
					suit:(card,suit)=>{
						const player=_status.event.player;
						if(get.itemtype(player)=="player"){
							const color=suit=>{
								if(["spade","club"].contains(suit)) return "black";
								if(["heart","diamond"].contains(suit)) return "red";
								return "none";
							};
							if(player.storage.sst_yufeng_effect&&color(suit)==color(player.storage.sst_yufeng_effect)) return player.storage.sst_yufeng_effect;
						}
					}
				}
			},
			sst_chihang:{
				global:"sst_chihang2"
			},
			sst_chihang2:{
				trigger:{player:"phaseUseBegin"},
				direct:true,
				filter:(event,player)=>game.hasPlayer(current=>current.hasSkill("sst_chihang"))&&player.countCards("he"),
				content:()=>{
					"step 0"
					const list=game.filterPlayer(current=>current.hasSkill("sst_chihang"));
					let str=`你可以展示并交给${get.translation(list)}`;
					if(list.length>1) str+="中的一人";
					player.chooseCardTarget({
						filterCard:true,
						position:"he",
						filterTarget:(card,player,target)=>{
							if(!target.hasSkill("sst_chihang")) return false;
							if(!ui.selected.cards.length) return false;
							return lib.filter.canBeGained(ui.selected.cards[0],target,player);
						},
						ai1:card=>{
							const statistic=_status.event.player.getCards("he").map(value=>get.suit(value)).reduce((previousValue,currentValue)=>{
								if(typeof previousValue[currentValue]!="number") previousValue[currentValue]=0;
								previousValue[currentValue]++;
								return previousValue;
							},{});
							for(const suit in statistic){
								if(statistic[suit]<2) delete statistic[suit];
							}
							const keys=Object.keys(statistic);
							const values=Object.values(statistic);
							const max=Math.max(...values);
							if(values.reduce((previousValue,currentValue,currentIndex)=>{
								if(currentValue==max) previousValue.push(keys[currentIndex]);
								return previousValue;
							},[]).contains(get.suit(card))) return 5-get.useful(card);
							return 0;
						},
						prompt:get.prompt("sst_chihang2"),
						prompt2:`${str}一张牌，然后此出牌阶段内，你使用或打出牌时，若与此牌花色：相同，你将手牌补至体力上限；不同，你须失去1点体力或结束出牌阶段`
					});
					"step 1"
					if(result.cards&&result.cards.length&&result.targets&&result.targets.length){
						event.card=result.cards[0];
						event.suit=get.suit(event.card);
						event.target=result.targets[0];
						player.logSkill("sst_chihang",event.target);
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
						player.showCards(event.card,`${get.translation(player)}对${translateTargets(event.target)}发动了【${get.skillTranslation(event.name,player)}】`);
					}
					else{
						event.finish();
					}
					"step 2"
					if(target!=player) player.give(card,target);
					"step 3"
					player.storage.sst_chihang_effect=event.suit;
					player.addTempSkill("sst_chihang_effect","phaseUseEnd");
					game.delayx();
				}
			},
			sst_chihang_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:"此出牌阶段内，你使用或打出牌时，若此牌花色与$：相同，你将手牌补至体力上限；不同，你须失去1点体力或结束出牌阶段"
				},
				trigger:{player:["useCard","respond"]},
				forced:true,
				filter:(event,player)=>player.isPhaseUsing()&&player.storage.sst_chihang_effect,
				content:()=>{
					"step 0"
					if(get.suit(trigger.card)==player.storage.sst_chihang_effect){
						player.drawTo(player.maxHp,["nodelay"]);
						event.finish();
					}
					else{
						player.chooseControl("失去1点体力","结束出牌阶段",true).set("ai",()=>{
							if(_status.event.player.hp<=1) return 1;
							return 0;
						}).set("prompt","驰航：选择一项");
					}
					"step 1"
					if(result.index==0){
						player.loseHp();
					}
					else{
						const evt=trigger.getParent("phaseUse");
						if(evt&&evt.name=="phaseUse") evt.skipped=true;
					}
				},
				ai:{
					effect:{
						player:(card,player)=>{
							if(get.suit(card)==player.storage.sst_chihang_effect&&!get.tag(card,"recover")) return [1,1];
							return [1,-1];
						}
					}
				}
			},
			//Wolf
			sst_xishou:{
				enable:"phaseUse",
				filter:(event,player)=>player.getHandcardLimit()>0,
				delay:false,
				content:()=>{
					"step 0"
					player.addTempSkill("sst_xishou_effect");
					player.addMark("sst_xishou_effect",1,false);
					game.delayx();
					"step 1"
					player.drawTo(player.maxHp);
				},
				ai:{
					order:1,
					result:{
						player:player=>player.maxHp-player.countCards("h")-player.getHistory("useSkill",evt=>evt.skill=="sst_xishou").length
					}
				}
			},
			sst_xishou_effect:{
				charlotte:true,
				intro:{
					content:"你本回合手牌上限和计算与其他角色的距离均-#"
				},
				onremove:true,
				mod:{
					maxHandcard:(player,num)=>num-player.countMark("sst_xishou_effect"),
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_xishou_effect")
				},
				trigger:{player:"discardAfter"},
				forced:true,
				filter:(event,player)=>{
					if(!player.hasMark("sst_xishou_effect")) return false;
					const evt=event.getParent("phaseDiscard");
					if(!evt||evt.name!="phaseDiscard") return false;
					return event.cards.length>0;
				},
				content:()=>{
					player.loseHp(trigger.cards.length);
				},
				ai:{
					effect:{
						player:(card,player)=>{
							if(player.hasMark("sst_xishou_effect")&&player.needsToDiscard()) return [1,1];
						}
					}
				}
			},
			//Young Link
			sst_shishi:{
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>(!player.isDamaged()&&game.hasPlayer(current=>current.countDiscardableCards(player,"he")))||(player.isDamaged()&&player.hasUseTarget({name:"sha",isCard:true},false)),
				forced:true,
				content:()=>{
					"step 0"
					if(!player.isDamaged()){
						event.sst_shishi="discard";
						player.chooseTarget("时逝：弃置一名角色的一张牌",true,(card,player,target)=>target.countDiscardableCards(player,"he")).set("ai",target=>{
							const player=_status.event.player;
							let att=get.attitude(player,target);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							return att*lib.card.guohe_copy2.ai.result.target(player,target);
						});
					}
					else{
						event.sst_shishi="sha";
						player.addTempSkill("sst_shishi_effect");
						player.chooseUseTarget({name:"sha",isCard:true},"nodistance",true,false);
					}
					"step 1"
					if(event.sst_shishi=="discard"&&result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.line(event.target,"green");
						player.discardPlayerCard(`时逝：弃置${get.translation(event.target)}一张牌`,event.target,"he",true);
					}
					"step 2"
					if(result.cards&&result.cards.length) player.addExpose(0.1);
				}
			},
			sst_shishi_effect:{
				charlotte:true,
				trigger:{player:"useCardBegin"},
				silent:true,
				filter:event=>event.getParent(2).name=="sst_shishi",
				content:()=>{
					const next=game.createEvent("sst_shishi_clear");
					event.next.remove(next);
					trigger.after.push(next);
					next.player=player;
					next.card=trigger.card;
					next.setContent(()=>{
						if(!game.cardCausedDamage(card)){
							game.log(player,"将武将变更为",`#b${get.translation("sst_ocarina_of_time_link")}`);
							player.reinit(player.name,"sst_ocarina_of_time_link");
							player.changeGroup("sst_light",false);
							game.triggerEnter(player);
							game.delayx();
						}
					});
				}
			},
			sst_jiamian:{
				unique:true,
				derivation:"sst_jiamian_faq",
				group:["sst_jiamian_add","sst_jiamian_refresh","sst_jiamian_remove","sst_jiamian_disallow","sst_jiamian_flash"],
				init:player=>{
					player.storage.sst_jiamian=[];
					player.storage.sst_jiamian_removing=[];
					player.storage.sst_jiamian_trigger=[];
					player.storage.sst_jiamian_map={};
				},
				onremove:player=>{
					for(const i in player.storage.sst_jiamian_map){
						lib.skill.sst_jiamian.removeCharacter(player,i);
						game.log(player,"移除了假面牌",`#g${get.translation(i)}`);
					}
					delete player.storage.sst_jiamian;
					delete player.storage.sst_jiamian_removing;
					delete player.storage.sst_jiamian_trigger;
					delete player.storage.sst_jiamian_map;
				},
				ondisable:true,
				mark:true,
				intro:{
					mark:(dialog,storage,player)=>{
						if(storage&&storage.length){
							dialog.addSmall([storage,"character"]);
							const skills=[];
							for(const i in player.storage.sst_jiamian_map){
								skills.addArray(player.storage.sst_jiamian_map[i]);
							}
							dialog.addText(`可用技能：${skills.length?get.translation(skills):"无"}`);
						}
						else{
							return "没有假面";
						}
					},
					content:(storage,player)=>{
						const skills=[];
						for(const i in player.storage.sst_jiamian_map){
							skills.addArray(player.storage.sst_jiamian_map[i]);
						}
						return `【${get.translation(storage)}】<br>可用技能：${skills.length?get.translation(skills):"无"}`;
					}
				},
				filterSkill:(player,name)=>{
					const skills=[];
					if(lib.character[name]){
						const group=lib.character[name][1];
						game.filterPlayer(current=>current!=player&&(group=="sst_smash"||group=="shen"||current.group==group)).forEach(current=>skills.addArray(current.skills));
						for(let i=0;i<skills.length;i++){
							const info=lib.skill[skills[i]];
							if(info.charlotte||info.superCharlotte||info.dutySkill||info.zhuanhuanji||info.unique||info.limited||info.mainSkill||info.viceSkill||get.is.locked(skills[i])) skills.splice(i--,1);
						}
					}
					return skills;
				},
				addCharacter:(player,name,show)=>{
					const skills=lib.skill.sst_jiamian.filterSkill(player,name);
					player.storage.sst_jiamian_map[name]=skills;
					if(skills.length) skills.forEach(skill=>player.addAdditionalSkill("sst_jiamian",skill,true));
					player.storage.sst_jiamian.add(name);
					player.markSkill("sst_jiamian");
					_status.characterlist.remove(name);
					if(show) lib.skill.sst_jiamian.drawCharacter(player,name);
				},
				drawCharacter:(player,name)=>{
					game.broadcastAll((player,name)=>{
						const cards=[];
						const cardname=`sst_jiamian_card_${name}`;
						lib.card[cardname]={
							fullimage:true,
							image:`character:${name}`
						}
						lib.translate[cardname]=lib.translate[name];
						cards.push(game.createCard(cardname,"","",""));
						player.$gain2(cards);
					},player,name);
				},
				discardCharacter:(player,name)=>{
					game.broadcastAll((player,name)=>{
						const cards=[];
						const cardname=`sst_jiamian_card_${name}`;
						lib.card[cardname]={
							fullimage:true,
							image:`character:${name}`
						}
						lib.translate[cardname]=lib.translate[name];
						cards.push(game.createCard(cardname,"","",""));
						player.$throw(cards);
					},player,name);
				},
				removeCharacter:(player,name)=>{
					const skills=lib.skill.sst_jiamian.filterSkill(player,name);
					delete player.storage.sst_jiamian_map[name];
					if(skills.length) skills.forEach(skill=>{
						let remove=true;
						for(const j in player.storage.sst_jiamian_map){
							if(j!=name&&game.expandSkills(player.storage.sst_jiamian_map[j].slice(0)).contains(skill)){
								remove=false;
								break;
							}
						}
						if(remove){
							player.removeAdditionalSkill("sst_jiamian",skill);
							player.storage.sst_jiamian_removing.remove(skill);
						}
					});
					player.storage.sst_jiamian.remove(name);
					player.markSkill("sst_jiamian");
					_status.characterlist.add(name);
					lib.skill.sst_jiamian.discardCharacter(player,name);
				},
				getSkillSources:(player,skill)=>{
					if(player.getStockSkills().contains(skill)) return [];
					const sources=[];
					if(skill.endsWith("_backup")) skill=skill.slice(0,-7);
					for(const i in player.storage.sst_jiamian_map){
						const skills=game.expandSkills(player.storage.sst_jiamian_map[i].slice(0));
						if(skills.contains(skill)){
							sources.push(i);
						}
						/*
						else{
							for(let j=0;j<skills.length;j++){
								let info=lib.skill[skills[j]];
								if(info.global){
									if((typeof info.global=="string"&&info.global==skill)||(Array.isArray(info.global)&&info.global.contains(skill))) sources.push(i);
								}
								else{
									continue;
								}
							}
						}
						*/
					}
					return sources;
				},
				subSkill:{
					add:{
						forced:true,
						popup:false,
						trigger:{
							global:"phaseBefore",
							player:"enterGame"
						},
						filter:event=>event.name!="phase"||game.phaseNumber==0,
						content:()=>{
							if(!_status.characterlist){
								const list=[];
								for(const i in lib.character){
									if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
									list.push(i);
								}
								game.countPlayer2(current=>{
									list.remove(current.name);
									list.remove(current.name1);
									list.remove(current.name2);
								});
								_status.characterlist=list;
							}
							_status.characterlist.randomSort();
							const name=_status.characterlist.shift();
							lib.skill.sst_jiamian.addCharacter(player,name);
							lib.skill.sst_jiamian.drawCharacter(player,name);
							//player.addTempSkill("sst_jiamian_triggered");
							game.log(player,"获得了一张假面牌",`#g${get.translation(name)}`);
							game.delayx();
						}
					},
					refresh:{
						trigger:{global:"die"},
						silent:true,
						content:()=>{
							player.removeAdditionalSkill("sst_jiamian");
							const name=player.storage.sst_jiamian[0];
							const skills=lib.skill.sst_jiamian.filterSkill(player,name);
							player.storage.sst_jiamian_map[name]=skills;
							if(skills.length) skills.forEach(skill=>player.addAdditionalSkill("sst_jiamian",skill,true));
							player.storage.sst_jiamian.add(name);
							player.markSkill("sst_jiamian");
						}
					},
					triggered:{},
					flash:{
						hookTrigger:{
							log:(player,skill)=>{
								let sources=lib.skill.sst_jiamian.getSkillSources(player,skill);
								if(sources.length){
									player.flashAvatar("sst_jiamian",sources.randomGet());
									player.storage.sst_jiamian_removing.add(skill);
								}
							}
						},
						trigger:{player:["useSkillBegin","useCard","respond"]},
						silent:true,
						filter:(event,player)=>event.skill&&lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0,
						content:()=>{
							lib.skill.sst_jiamian_flash.hookTrigger.log(player,trigger.skill);
						}
					},
					clear:{
						trigger:{global:"phaseAfter"},
						silent:true,
						content:()=>{
							player.storage.sst_jiamian_trigger.length=0;
						}
					},
					disallow:{
						hookTrigger:{
							block:(event,player,name,skill)=>{
								for(const info of player.storage.sst_jiamian_trigger){
									if(info[0]==event&&info[1]==name&&lib.skill.sst_jiamian.getSkillSources(player,skill).length>0) return true;
								}
								return false;
							}
						}
					},
					remove:{
						trigger:{player:["useSkillAfter","useCardAfter","respondAfter","triggerAfter","skillAfter"]},
						hookTrigger:{
							after:(event,player)=>{
								if(event._direct&&!player.storage.sst_jiamian_removing.contains(event.skill)) return false;
								if(lib.skill[event.skill].silent) return false;
								return lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0;
							}
						},
						silent:true,
						filter:(event,player)=>event.skill&&lib.skill.sst_jiamian.getSkillSources(player,event.skill).length>0,
						content:()=>{
							"step 0"
							if(trigger.name=="trigger") player.storage.sst_jiamian_trigger.push([trigger._trigger,trigger.triggername]);
							const sources=lib.skill.sst_jiamian.getSkillSources(player,trigger.skill);
							if(sources.length==1){
								event.directresult=sources[0];
							}
							else{
								player.chooseButton(true).set("createDialog",["移除一张“假面”牌",[sources,"character"]]);
							}
							"step 1"
							if(!event.directresult&&result&&result.links[0]) event.directresult=result.links[0];
							lib.skill.sst_jiamian.removeCharacter(player,event.directresult);
							game.log(player,"移除了假面牌",`#g${get.translation(event.directresult)}`);
							game.delayx();
							"step 2"
							if(!_status.characterlist){
								const list=[];
								for(const i in lib.character){
									if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
									list.push(i);
								}
								game.countPlayer2(current=>{
									list.remove(current.name);
									list.remove(current.name1);
									list.remove(current.name2);
								});
								_status.characterlist=list;
							}
							_status.characterlist.randomSort();
							const name=_status.characterlist.shift();
							lib.skill.sst_jiamian.addCharacter(player,name);
							lib.skill.sst_jiamian.drawCharacter(player,name);
							//player.addTempSkill("sst_jiamian_triggered");
							game.log(player,"获得了一张假面牌",`#g${get.translation(name)}`);
							game.delayx();
						}
					}
				},
				ai:{
					nofrequent:true,
					skillTagFilter:(player,tag,arg)=>arg&&player.storage.sst_jiamian&&lib.skill.sst_jiamian.getSkillSources(player,arg).length>0
				}
			},
			//Ocarina of Time Link
			sst_shisu:{
				trigger:{player:"phaseDrawBegin"},
				forced:true,
				filter:event=>!event.numFixed,
				content:()=>{
					trigger.num=Math.max(0,player.getHp()+2-player.countCards("h"));
				},
				group:"sst_shisu2"
			},
			sst_shisu2:{
				trigger:{player:"phaseDrawEnd"},
				filter:(event,player)=>!player.hasHistory("gain",evt=>{
					const draw=evt.getParent();
					if(!draw&&draw.name!="draw") return false;
					const phaseDraw=draw.getParent("phaseDraw");
					return phaseDraw&&phaseDraw.name=="phaseDraw";
				}),
				forced:true,
				content:()=>{
					game.log(player,"将武将变更为",`#b${get.translation("sst_young_link")}`);
					player.reinit(player.name,"sst_young_link");
					player.changeGroup("sst_dark",false);
					game.triggerEnter(player);
				}
			},
			sst_yongfeng:{
				trigger:{player:"phaseDrawBegin2"},
				direct:true,
				filter:event=>!event.numFixed&&event.num,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_yongfeng"),[1,trigger.num],(card,player,target)=>player.canUse({name:"sha",isCard:true},target),target=>get.effect(target,{name:"sha",isCard:true},_status.event.player,_status.event.player)-ui.selected.targets.length*2);
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						event.num=0;
						player.logSkill("sst_yongfeng",event.targets);
						trigger.num-=event.targets.length;
					}
					else{
						event.finish();
					}
					"step 2"
					if(num<targets.length){
						player.useCard({name:"sha",isCard:true},targets[event.num++],false);
						event.redo();
					}
				},
				ai:{
					threaten:1.2
				}
			},
			//Springman
			sst_shenbi:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_shenbi)) player.storage.sst_shenbi=["下一张杀伤害基数+1","此杀不可被响应","失去1点体力"];
					if(!Array.isArray(player.storage.sst_shenbi_ready)) player.storage.sst_shenbi_ready=["下一张杀伤害基数+1","此杀不可被响应","失去1点体力"];
				},
				locked:false,
				mod:{
					targetInRange:card=>{
						if(card.storage&&card.storage.sst_shenbi) return true;
					}
				},
				enable:["chooseToUse","chooseToRespond"],
				filterCard:()=>false,
				selectCard:-1,
				viewAs:{name:"sha",isCard:true,storage:{sst_shenbi:true}},
				viewAsFilter:player=>player.countCards("h")!=Math.max(0,_status.currentPhase.countCards("h")-1),
				log:false,
				precontent:()=>{
					const evt=event.getParent();
					console.log(evt);
					if(evt.name=="chooseToRespond") delete evt.result.skill;
					player.logSkill("sst_shenbi",event.result.targets);
					const num=_status.currentPhase.countCards("h");
					const num2=player.countCards("h");
					if(num-1<num2){
						player.chooseToDiscard(`神臂：弃置${get.cnNumber(num2-num+1)}张手牌`,num2-num+1,true).set("delay",false);
					}
					else{
						player.drawTo(num-1,["nodelay"]);
					}
				},
				ai:{
					threaten:3,
					respondSha:true,
					order:()=>get.order({name:"sha"})+0.1,
					useful:-1,
					value:-1
				},
				group:"sst_shenbi2"
			},
			sst_shenbi2:{
				trigger:{player:["useCard","respond"]},
				filter:(event,player)=>event.card.storage&&event.card.storage.sst_shenbi&&player.storage.sst_shenbi_ready.length,
				forced:true,
				popup:false,
				content:()=>{
					"step 0"
					if(player.storage.sst_shenbi.length){
						player.chooseControl(player.storage.sst_shenbi).set("prompt","神臂：选择一项");
					}
					else{
						event.goto(2);
					}
					"step 1"
					game.log(player,"选择了",`#y${result.control}`);
					player.chat(result.control);
					player.storage.sst_shenbi.remove(result.control);
					switch(result.control){
						case "下一张杀伤害基数+1":
							player.addSkill("sst_shenbi_effect");
							player.addMark("sst_shenbi_effect",1,false);
							break;
						case "此杀不可被响应":
							if(trigger.name=="useCard") trigger.directHit.addArray(game.players);
							break;
						case "失去1点体力":
							player.loseHp();
							break;
					}
					"step 2"
					if(!player.storage.sst_shenbi.length||player.getHp()==1){
						player.storage.sst_shenbi=player.storage.sst_shenbi_ready.slice(0);
						game.log(player,"重置了技能","#g【神臂】");
					}
				}
			},
			sst_shenbi_effect:{
				shaRelated:true,
				intro:{
					content:"下一张杀伤害基数+#"
				},
				trigger:{player:"useCard1"},
				filter:event=>event.card&&get.name(event.card)=="sha",
				forced:true,
				content:()=>{
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.countMark("sst_shenbi_effect");
					player.removeSkill("sst_shenbi_effect");
				},
				onremove:true,
				ai:{
					damageBonus:true
				}
			},
			sst_lanbo:{
				enable:"chooseToUse",
				filterCard:()=>false,
				selectCard:-1,
				viewAs:{name:"shan",isCard:true},
				viewAsFilter:player=>{
					if(!player.needsToDiscard()&&(Array.isArray(player.storage.sst_shenbi_ready)&&!player.storage.sst_shenbi_ready.length)) return false;
				},
				ai:{
					respondShan:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
					},
					order:(item,player)=>{
						if(!player) return;
						if(!Array.isArray(player.storage.sst_shenbi_ready)||player.storage.sst_shenbi_ready.contains("失去1点体力")) return get.order({name:"shan",isCard:true})+0.1;
						if(player.countCards("hs","shan")&&!player.needsToDiscard()) return 0;
						return get.order({name:"shan",isCard:true})+0.1;
					}
				},
				group:"sst_lanbo2"
			},
			sst_lanbo2:{
				trigger:{player:"useCardBegin"},
				filter:event=>event.skill=="sst_lanbo",
				forced:true,
				content:()=>{
					"step 0"
					delete trigger.skill;
					const list=[];
					if(player.needsToDiscard()) list.push("弃置手牌");
					if(!Array.isArray(player.storage.sst_shenbi_ready)||player.storage.sst_shenbi_ready.length) list.push("删除选项");
					player.chooseControl(list).set("ai",()=>{
						if(!Array.isArray(_status.event.player.storage.sst_shenbi_ready)||_status.event.player.storage.sst_shenbi_ready.contains("失去1点体力")) return "删除选项";
						return 0;
					}).set("prompt","蓝波：选择一项");
					"step 1"
					if(result.control=="弃置手牌"){
						player.chooseToDiscard(`蓝波：弃置${get.cnNumber(player.needsToDiscard())}张手牌`,player.needsToDiscard(),true);
						event.finish();
					}
					else{
						if(!Array.isArray(player.storage.sst_shenbi_ready)) player.storage.sst_shenbi_ready=["下一张杀伤害基数+1","此杀不可被响应","失去1点体力"];
						player.chooseControl(player.storage.sst_shenbi_ready).set("ai",()=>{
							if(_status.event.controls.contains("失去1点体力")) return "失去1点体力";
							return _status.event.controls.slice(0).randomGet();
						}).set("prompt","蓝波：删除〖神臂〗的一个选项");
					}
					"step 2"
					if(result.control){
						game.log(player,"删除了",`#y${result.control}`);
						player.chat(`删除：${result.control}`);
						player.storage.sst_shenbi_ready.remove(result.control);
						player.storage.sst_shenbi.remove(result.control);
					}
				}
			},
			//Joker
			sst_daoxin:{
				trigger:{player:"useCardToPlayered"},
				logTarget:"target",
				forced:true,
				filter:event=>get.tag(event.card,"damage"),
				content:()=>{
					"step 0"
					trigger.target.draw();
					"step 1"
					if(trigger.target.countCards("h")>=player.countCards("h")){
						player.viewHandcards(trigger.target);
					}
					else{
						event.finish();
					}
					"step 2"
					player.gain(trigger.target.getGainableCards(player,"he",{color:"red"}),trigger.target,"give","bySelf");
				}
			},
			sst_fanni:{
				enable:"phaseUse",
				usable:1,
				filter:(event,player)=>player.getHp()!=player.countCards("h"),
				filterCard:true,
				selectCard:()=>Math.max(0,_status.event.player.countCards("h")-_status.event.player.getHp()),
				discard:false,
				lose:false,
				delay:false,
				check:card=>7-get.value(card),
				content:()=>{
					"step 0"
					const hp=player.getHp();
					const hc=player.countCards("h");
					const dh=player.getDamagedHp();
					if(hp>hc){
						player.loseHp(hp-hc);
						player.draw(hp-hc);
					}
					else{
						if(player.getDamagedHp()) player.recover(Math.min(dh,cards.length),"nocard");
						player.discard(cards);
					}
					if(cards.length>dh){
						event.num=cards.length-dh;
					}
					else{
						event.finish();
					}
					"step 1"
					event.num--;
					if(event.num>=0&&player.hasUseTarget({name:"sha",isCard:true})){
						player.chooseUseTarget(`反逆：视为使用一张杀（剩余${event.num}次）`,{name:"sha",isCard:true},"nodistance",true,false);
						event.redo();
					}
				},
				ai:{
					order:8,
					result:{
						player:player=>{
							if(!player.countCards("h")) return 0;
							if(player.countCards("h")-player.getHp()<=player.getDamagedHp()) return 1;
							return Math.cbrt(player.getUseValue({name:"sha",isCard:true},false));
						}
					}
				}
			},
			//Rex
			sst_qianban:{
				init:player=>{
					//if(!player.hasSkill("sst_qianban_effect")) player.addSkill("sst_qianban_effect");
					if(get.itemtype(player.getEquip(1))=="card"){
						player.gainMaxHp();
						player.storage.sst_qianban=true;
					}
				},
				onremove:player=>{
					if(player.storage.sst_qianban){
						player.loseMaxHp();
						delete player.storage.sst_qianban;
					}
				},
				trigger:{
					player:"loseAfter",
					global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]
				},
				forced:true,
				filter:(event,player)=>{
					const evt=event.getl(player);
					if(evt&&evt.player==player&&evt.es&&evt.es.length){
						for(const i of evt.es){
							if(get.subtype(i)=="equip1") return true;
						}
					}
					return false;
				},
				content:()=>{
					player.gain(trigger.getl(player).es.filter(value=>get.subtype(value)=="equip1"),"gain2");
				},
				group:["sst_qianban2","sst_qianban3","sst_qianban4"]
			},
			sst_qianban2:{
				forced:true,
				trigger:{
					player:"loseEnd",
					global:["equipEnd","addJudgeEnd","gainEnd","loseAsyncEnd","addToExpansionEnd"]
				},
				filter:(event,player)=>(get.itemtype(player.getEquip(1))=="card"&&!player.storage.sst_qianban)||(get.itemtype(player.getEquip(1))!="card"&&player.storage.sst_qianban),
				content:()=>{
					if(get.itemtype(player.getEquip(1))=="card"&&!player.storage.sst_qianban){
						player.gainMaxHp();
						player.storage.sst_qianban=true;
					}
					else if(get.itemtype(player.getEquip(1))!="card"&&player.storage.sst_qianban){
						player.loseMaxHp();
						player.storage.sst_qianban=false;
					}
				}
			},
			sst_qianban3:{
				trigger:{player:"phaseDrawBegin2"},
				forced:true,
				filter:(event,player)=>!event.numFixed&&get.itemtype(player.getEquip(1))=="card",
				content:()=>{
					trigger.num+=1;
				}
			},
			sst_qianban4:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:(event,player)=>get.itemtype(player.getEquip(1))!="card"&&game.hasPlayer(current=>current.countDiscardableCards(player,"ej")),
				content:()=>{
					"step 0"
					player.chooseTarget("牵绊：弃置场上的一张牌",true,(card,player,target)=>target.countDiscardableCards(player,"ej")).set("ai",target=>{
						const guohe=(player,target)=>{
							const att=get.attitude(player,target);
							if(att>0){
								if(target.hasCard(card=>{
									const cardj=card.viewAs?{name:card.viewAs}:card;
									return get.effect(target,cardj,target,player)<0;
								},"j")) return 3;
								if(target.getEquip("baiyin")&&target.isDamaged()&&
									get.recoverEffect(target,player,player)>0) if(target.hp==1&&!target.hujia) return 1.6;
								if(target.hasCard(card=>{
									if(get.position(card)=="e") return get.value(card,target)<0;
								},"e")) return 1;
							}
							const es=target.getCards("e");
							const noe=(es.length==0||target.hasSkillTag("noe"));
							const noe2=(es.filter(esx=>get.value(esx,target)>0).length==0);
							if(noe||noe2) return 0;
							if(att<=0&&!target.countCards("e")) return 1.5;
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
					"step 1"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"green");
						player.discardPlayerCard(`牵绊：弃置${get.translation(result.targets[0])}场上一张牌`,result.targets[0],"ej",true);
					}
					"step 2"
					if(result.cards&&result.cards.length) player.addExpose(0.1);
				}
			},
			sst_tanyun:{
				usable:1,
				trigger:{player:["phaseZhunbeiBegin","phaseJieshuBegin"]},
				direct:true,
				filter:()=>ui.discardPile.childNodes&&ui.discardPile.childNodes.length,
				content:()=>{
					"step 0"
					const types=[];
					const cards=[];
					Array.from(ui.discardPile.childNodes).reverse().forEach(card=>{
						const type2=get.type2(card);
						if(!types.contains(type2)){
							types.push(type2);
							cards.push(card);
						}
					});
					player.chooseCardButton(cards,get.prompt2("sst_tanyun")).set("ai",button=>{
						const player=_status.event.player;
						const judges=player.getCards("j");
						if(judges&&judges.length&&!player.hasWuxie()){
							const judge=get.judge(judges[0]);
							return judge(button.link)*(11-get.value(button.link));
						}
						return get.value(button.link);
					});
					"step 1"
					if(result.links&&result.links.length){
						player.logSkill("sst_tanyun");
						const card=result.links[0];
						player.$throw(card);
						ui.cardPile.insertBefore(card.fix(),ui.cardPile.firstChild);
						game.log(player,"将",card,"置于牌堆顶");
						game.updateRoundNumber();
						game.delayx();
					}
					else{
						player.storage.counttrigger[event.name]--;
						event.finish();
					}
					"step 2"
					game.broadcastAll(ui.clear);
				}
			},
			//Cuphead & Mugman
			sst_zhuizhai:{
				trigger:{global:"roundStart"},
				direct:true,
				filter:(event,player)=>game.hasPlayer(current=>player.inRange(current)),
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_zhuizhai"),[1,Infinity],(card,player,target)=>player.inRange(target)).set("ai",()=>true);
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						player.logSkill("sst_zhuizhai",event.targets);
						game.asyncDraw(event.targets);
					}
					"step 2"
					targets.forEach(target=>target.addTempSkill("sst_zhuizhai_effect","roundStart"));
					game.delayx();
				}
			},
			sst_zhuizhai_effect:{
				global:"sst_zhuizhai_effect2",
				charlotte:true,
				mark:true,
				intro:{
					content:"当你受到伤害后，伤害来源可以获得你两张牌"
				}
			},
			sst_zhuizhai_effect2:{
				trigger:{source:"damageEnd"},
				direct:true,
				filter:event=>event.player.hasSkill("sst_zhuizhai_effect")&&event.player.countCards("he")>1,
				content:()=>{
					player.gainPlayerCard(get.prompt("sst_zhuizhai_effect2",trigger.player),trigger.player,"he",2).set("logSkill",["sst_zhuizhai_effect2",trigger.player]).set("prompt2",`你可以获得${get.translation(trigger.player)}两张牌`);
				}
			},
			sst_fanfei:{
				trigger:{target:"useCardToTarget"},
				filter:(event,player)=>get.color(event.card)=="red"&&player.hasCard(card=>lib.filter.cardDiscardable(card,player),"he"),
				direct:true,
				content:()=>{
					"step 0"
					const check=get.effect(trigger.target,trigger.card,trigger.player,player)<1&&Math.max(...game.filterPlayer(current=>current.countCards()>=player.countCards()).map(current=>get.damageEffect(current,player,player)))>0;
					player.chooseToDiscard(get.prompt2("sst_fanfei"),"he").set("ai",card=>{
						if(_status.event.check) return 7-get.value(card);
						return 0;
					}).set("check",check).set("logSkill",event.name);
					"step 1"
					if(result.cards&&result.cards.length){
						trigger.getParent().excluded.add(player);
					}
					else{
						event.finish();
					}
					"step 2"
					player.chooseTarget("翻飞：对手牌数大于你的一名角色造成一点伤害",(card,player,target)=>target.countCards()>player.countCards(),true).set("ai",target=>get.damageEffect(target,_status.event.player,_status.event.player));
					"step 3"
					if(result.targets&&result.targets.length){
						player.line(result.targets,"green");
						result.targets[0].damage(player,"nocard");
					}
				},
				ai:{
					effect:{
						target:(card,player,target)=>{
							if(target!=player&&get.color(card)=="red"&&game.hasPlayer(current=>current.countCards()>=target.countCards()&&get.damageEffect(current,target,player)<0)) return [1,-8];
						}
					}
				}
			},
			//Mega Man
			sst_guangpao:{
				enable:"phaseUse",
				filter:(event,player)=>{
					const statistic={};
					player.getCards("he",card=>{
						if(lib.filter.cardDiscardable(card,player)){
							const name=get.name(card);
							if(typeof statistic[name]!="number") statistic[name]=0;
							statistic[name]++;
						}
					});
					for(const name in statistic){
						if(statistic[name]>=2) return true;
					}
					return false;
				},
				complexCard:true,
				filterCard:(card,player)=>{
					if(!ui.selected.cards.length) return true;
					return get.name(card)==get.name(ui.selected.cards[0]);
				},
				selectCard:2,
				position:"he",
				usable:1,
				check:card=>7-get.value(card),
				filterTarget:lib.filter.notMe,
				content:()=>{
					"step 0"
					target.damage(player,"nocard");
					"step 1"
					const name=get.name(cards[0]);
					event.identical=player.getCards("h").some(i=>name==get.name(i));
					player.chooseBool(event.identical?`光炮：你手上有与${get.translation(cards)}同名的牌`:"光炮：是否展示手牌并摸一张牌？").set("ai",()=>true);
					"step 2"
					if(result.bool&&!event.identical){
						player.showHandcards();
					}
					else{
						event.finish();
					}
					"step 3"
					player.draw();
				},
				ai:{
					order:6,
					expose:0.2,
					damage:true,
					result:{
						target:(player,target)=>get.damageEffect(target,player,target)
					}
				}
			},
			sst_tewu:{
				intro:{
					content:"拥有技能【特武】的角色对你造成伤害时弃置你一张牌",
					nocount:true
				},
				global:"sst_tewu2",
				trigger:{source:"damageBegin1"},
				forced:true,
				filter:(event,player)=>event.player.hasMark("sst_tewu")&&event.player.countCards("he"),
				logTarget:"player",
				content:()=>{
					player.discardPlayerCard(`特武：弃置${get.translation(trigger.player)}一张牌`,trigger.player,"he",true);
				}
			},
			sst_tewu2:{
				skillAnimation:true,
				animationStr:"特武",
				animationColor:"thunder",
				trigger:{player:"die"},
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.hasSkill("sst_tewu"))&&game.hasPlayer(current=>current!=player&&!current.hasMark("sst_tewu")),
				direct:true,
				forceDie:true,
				content:()=>{
					"step 0"
					player.chooseTarget(`特武：指定一名其他角色，${get.translation(game.filterPlayer(current=>current!=player&&current.hasSkill("sst_tewu")))}对该角色造成伤害时弃置其一张牌`,(card,player,target)=>target!=player&&!target.hasMark("sst_tewu"),true).set("ai",target=>10-get.attitude(_status.event.player,target)).set("forceDie",true);
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_tewu2",result.targets);
						result.targets[0].addMark("sst_tewu",1,false);
					}
				}
			},
			//Captain Falcon
			sst_jijing:{
				enable:"phaseUse",
				filter:(event,player)=>player.hasCard(card=>lib.filter.cardDiscardable(card,player),"h"),
				filterCard:true,
				selectCard:-1,
				delay:false,
				content:()=>{
					"step 0"
					if(cards.length-1>0) player.draw(cards.length-1);
					"step 1"
					player.addSkill("sst_jijing_effect");
					player.addMark("sst_jijing_effect",1,false);
					game.delayx();
				},
				ai:{
					order:1,
					result:{
						player:player=>{
							const cards=player.getCards();
							if(cards.length<2&&!game.hasPlayer(current=>get.distance(player,current)>1)) return 0;
							return Math.cbrt(6-cards.map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)/cards.length);
						}
					}
				},
				group:"sst_jijing2"
			},
			sst_jijing2:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:(event,player)=>!game.hasPlayer(current=>get.distance(player,current)>1),
				content:()=>{
					"step 0"
					player.chooseDrawRecover(2,true);
					"step 1"
					player.removeSkill("sst_jijing_effect");
				}
			},
			sst_jijing_effect:{
				charlotte:true,
				intro:{
					content:"你计算与其他角色的距离-#"
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_jijing_effect")
				}
			},
			//Jigglypuff
			sst_yinyao:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				filter:(event,player)=>player.countCards("h"),
				content:()=>{
					"step 0"
					player.chooseCard(get.prompt2("sst_yinyao"),lib.filter.cardDiscardable).set("ai",card=>{
						if(!game.hasPlayer(current=>current!=player&&current.countCards())) return 0;
						return 5-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
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
						const targets=game.filterPlayer(current=>current!=player);
						player.logSkill("sst_yinyao",targets);
						event.card=result.cards[0];
						player.showCards(event.card,`${get.translation(player)}对${translateTargets(targets)}发动了【${get.skillTranslation(event.name,player)}】`);
					}
					else{
						event.finish();
					}
					"step 2"
					player.discard(card);
					"step 3"
					if(!event.current) event.current=player;
					event.current=event.current.getNext();
					if(event.current==player){
						event.finish();
					}
					else if(!event.current.countCards("h")){
						event.redo();
					}
					"step 4"
					player.line(event.current,"green");
					event.current.chooseCard(`音谣：展示与${get.translation(card)}花色或点数相同的牌，否则你翻面`,"he",card=>{
						const evt=_status.event.getParent();
						return get.suit(card)==get.suit(evt.card)||get.number(card)==get.number(evt.card);
					}).set("ai",card=>{
						if(get.position(card)=="e") return 10;
						return 7-get.value(card);
					});
					"step 5"
					if(result.cards&&result.cards.length){
						event.card=result.cards[0];
						event.current.showCards(event.card);
						event.goto(3);
					}
					else{
						event.current.turnOver();
					}
					"step 6"
					game.delayx();
				}
			},
			sst_anke:{
				global:"sst_anke2"
			},
			sst_anke2:{
				trigger:{player:"phaseBefore"},
				filter:(event,player)=>player.isTurnedOver()&&game.hasPlayer(current=>current.hasSkill("sst_anke")),
				priority:2020,
				firstDo:true,
				direct:true,
				content:()=>{
					"step 0"
					const list=game.filterPlayer(current=>current.hasSkill("sst_anke"));
					let str=`你可以交给${get.translation(list)}`;
					if(list.length>1) str+="中的一人";
					player.chooseCardTarget({
						filterCard:true,
						filterTarget:(card,player,target)=>{
							if(!target.hasSkill("sst_anke")) return false;
							if(!ui.selected.cards.length) return false;
							return lib.filter.canBeGained(ui.selected.cards[0],target,player);
						},
						ai1:card=>7-get.value(card),
						ai2:target=>10+get.attitude(_status.event.player,target),
						prompt:get.prompt("sst_anke2"),
						prompt2:`${str}一张手牌，然后你翻回正面`
					});
					"step 1"
					if(result.cards&&result.cards.length&&result.targets&&result.targets.length){
						player.logSkill("sst_anke2",result.targets);
						player.give(result.cards,result.targets[0]);
						player.turnOver();
					}
				}
			},
			//Lucario
			sst_bodao:{
				preHidden:true,
				trigger:{player:"useCardToPlayered"},
				filter:(event,player)=>player.getDamagedHp(),
				prompt2:(event,player)=>`你使用牌指定目标后，你可以令${get.translation(event.target)}除非弃置${get.cnNumber(player.getDamagedHp())}张牌，否则不能响应${get.translation(event.card)}`,
				check:(event,player)=>get.attitude(player,event.target)<0,
				logTarget:"target",
				content:()=>{
					"step 0"
					const eff=get.effect(trigger.target,trigger.card,player,trigger.target);
					trigger.target.chooseToDiscard(`波导：弃置${get.cnNumber(player.getDamagedHp())}张牌，否则不能响应${get.translation(trigger.card)}`,player.getDamagedHp(),"he").set("ai",card=>{
						if(!get.tag(_status.event.getTrigger().card,"respond")) return 0;
						if(_status.event.eff<0) return 5-get.useful(card);
						return 0;
					}).set("eff",eff);
					"step 1"
					if(!result.cards||!result.cards.length) trigger.getParent().directHit.add(trigger.target);
				}
			},
			sst_juyuan:{
				preHidden:true,
				init:player=>{
					if(typeof player.storage.sst_juyuan_black!="number") player.storage.sst_juyuan_black=0;
					if(typeof player.storage.sst_juyuan_red!="number") player.storage.sst_juyuan_red=0;
				},
				trigger:{global:["loseAfter","cardsDiscardAfter","loseAsyncAfter","equipAfter"]},
				forced:true,
				popup:false,
				filter:(event,player)=>player==_status.currentPhase&&event.getd().some(card=>get.color(card)!="none"),
				content:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_juyuan_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(player.storage.sst_juyuan_black!=0) player.storage.sst_juyuan_black=0;
							if(player.storage.sst_juyuan_red!=0) player.storage.sst_juyuan_red=0;
						});
					}
					"step 1"
					const statistic=trigger.getd().filter(card=>{
						const color=get.color(card);
						return color=="black"||color=="red";
					}).map(card=>get.color(card)).reduce((previousValue,currentValue)=>{
						previousValue[currentValue]++;
						return previousValue;
					},{
						black:0,
						red:0
					});
					player.storage.sst_juyuan_black+=statistic.black;
					player.storage.sst_juyuan_red+=statistic.red;
					player.addTempSkill("sst_juyuan_effect");
					player.markSkill("sst_juyuan_effect");
				}
			},
			sst_juyuan_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:(storage,player)=>{
						let str="";
						if(player.storage.sst_juyuan_black) str+=`本回合你的攻击范围+${player.storage.sst_juyuan_black}`;
						if(player.storage.sst_juyuan_black&&player.storage.sst_juyuan_red) str+="<br>";
						if(player.storage.sst_juyuan_red) str+=`本回合你使用【杀】的次数上限+${player.storage.sst_juyuan_red}`;
						return str;
					},
					markcount:(storage,player)=>{
						let num=0;
						if(player.storage.sst_juyuan_black) num+=player.storage.sst_juyuan_black;
						if(player.storage.sst_juyuan_red) num+=player.storage.sst_juyuan_red;
						return num;
					}
				},
				mod:{
					attackRange:(player,range)=>{
						if(player==_status.currentPhase&&typeof player.storage.sst_juyuan_black=="number") return range+player.storage.sst_juyuan_black;
					},
					cardUsable:(card,player,num)=>{
						if(player==_status.currentPhase&&typeof player.storage.sst_juyuan_red=="number"&&card.name=="sha") return num+player.storage.sst_juyuan_red;
					}
				}
			},
			//Pichu
			sst_tieyan:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				filter:(event,player)=>player.countCards("he"),
				content:()=>{
					"step 0"
					player.chooseCard("he",`${get.prompt2("sst_tieyan")}（先选择的在上）`,player.getHp()).set("ai",card=>{
						const player=_status.event.player;
						const judges=player.getCards("j");
						if(ui.selected.cards.length){
							for(let i=0;i<ui.selected.cards.length;i++){
								if(judges&&judges.length) judges.shift();
							}
						}
						if(judges&&judges.length&&!player.hasWuxie()){
							const judge=get.judge(judges[0]);
							return judge(card)*(11-get.value(card));
						}
						return 5-get.value(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_tieyan");
						const hs=[],nhs=[];
						result.cards.forEach(card=>{
							if(get.position(card)=="h"){
								hs.push(card);
							}
							else{
								nhs.push(card);
							}
						});
						if(hs.length){
							player.$throw(hs.length);
							game.log(player,"将",get.cnNumber(hs.length),"张牌置于牌堆顶");
						}
						if(nhs.length){
							player.$throw(nhs);
							game.log(player,"将",nhs,"置于牌堆顶");
						}
						player.lose(result.cards,ui.cardPile,"insert");
					}
					else{
						event.finish();
					}
					"step 2"
					if(player.getDamagedHp()){
						event.linkTargets=true;
						player.chooseTarget(`贴颜：横置你和${get.cnNumber(player.getDamagedHp())}名未横置的角色`,player.getDamagedHp(),(card,player,target)=>target!=player&&!target.isLinked(),true).set("ai",target=>get.effect(target,{name:"tiesuo"},_status.event.player,_status.event.player));
					}
					"step 3"
					event.targets=[];
					if(!player.isLinked()) event.targets.push(player);
					if(event.linkTargets&&result.targets&&result.targets.length){
						event.targets.addArray(result.targets);
						player.addExpose(0.2);
					}
					event.targets.sortBySeat(_status.currentPhase);
					if(!event.targets.length){
						event.finish();
					}
					else{
						player.line(event.targets,"green");
						event.num=0;
					}
					"step 4"
					if(num<targets.length){
						targets[num].link();
						event.num++;
						event.redo();
					}
					"step 5"
					game.delayx();
					game.broadcastAll(ui.clear);
				}
			},
			sst_gaoya:{
				trigger:{player:"phaseJieshuBegin"},
				forced:true,
				filter:(event,player)=>player.countCards("h")<player.getHp(),
				content:()=>{
					"step 0"
					player.judgeCard("shandian");
					"step 1"
					if(!player.hasHistory("damage",evt=>evt.getParent(3).name=="sst_gaoya")) player.draw(3);
				}
			},
			//Steve
			sst_tankuang:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_tankuang)) player.storage.sst_tankuang=[];
				},
				enable:"phaseUse",
				filter:event=>{
					const evt=event.getParent("phase");
					return evt&&evt.name=="phase"&&!evt.sst_tankuang_overflow;
				},
				chooseButton:{
					dialog:(event,player)=>ui.create.dialog(`###探矿###按花色或类别举荐一张牌，其间若本回合亮出的牌超过十张，中止此流程且本回合不能再发动此技能，然后你受到1点伤害（本回合已亮出${get.cnNumber(player.storage.sst_tankuang.length)}张牌）`),
					chooseControl:()=>lib.suit.concat(["basic","trick","equip"]),
					check:(event,player)=>{
						const cardPile=Array.from(ui.cardPile.childNodes);
						const choices=_status.event.controls.map(value=>cardPile.filter(card=>lib.suit.contains(value)&&get.suit(card)==value||get.type2(card)==value).length);
						const max=Math.max(...choices);
						return choices.reduce((previousValue,currentValue,currentIndex)=>{
							if(currentValue==max) previousValue.push(currentIndex);
							return previousValue;
						},[]).randomGet();
					},
					backup:result=>({
						delay:false,
						control:result.control,
						content:lib.skill.sst_tankuang.contentx
					})
				},
				contentx:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_tankuang_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_tankuang)) player.storage.sst_tankuang.length=0;
						});
					}
					"step 1"
					event.control=lib.skill.sst_tankuang_backup.control;
					player.popup(event.control);
					game.log(player,"声明了",`#y${get.translation(event.control)}`);
					"step 2"
					event.card=get.cards()[0];
					game.cardsGotoOrdering(event.card);
					player.showCards(event.card,`${get.translation(player)}发动了【${get.skillTranslation(event.name,player)}】（声明了${get.translation(event.control)}）`).set("delay_time",0.5);
					player.storage.sst_tankuang.push(event.card);
					"step 3"
					if(player.storage.sst_tankuang.length>10){
						const evt=event.getParent("phase");
						if(evt&&evt.name=="phase") evt.set("sst_tankuang_overflow",true);
						player.damage("nosource","nocard");
						event.goto(5);
					}
					"step 4"
					if(get.suit(card)==event.control||get.type2(card)==event.control){
						player.gain(card,"gain2");
						event.finish();
					}
					else{
						game.cardsDiscard(card);
						event.goto(2);
					}
					"step 5"
					game.delayx();
				},
				ai:{
					threaten:3,
					order:7,
					result:{
						player:player=>{
							if(player.storage.sst_tankuang.length>=10) return 0;
							return 1;
						}
					}
				}
			},
			//Ma
			sst_fumiao:{
				trigger:{global:["damageEnd","loseHpAfter","recoverAfter"]},
				filter:(event,player)=>{
					if(player!=_status.currentPhase) return false;
					return event.player.isIn()&&player.countCards("h")!=event.player.getHp();
				},
				logTarget:"player",
				check:(event,player)=>{
					if(player.countCards("h")<event.player.hp) return true;
					return player.getUseValue("sha",false)-player.countCards("h")+event.player.getHp()>0;
				},
				content:()=>{
					"step 0"
					if(player.countCards("h")<=trigger.player.hp){
						player.draw(trigger.player.hp-player.countCards("h"));
						event.finish();
					}
					else{
						player.chooseToDiscard(`伏妙：弃置${get.cnNumber(player.countCards("h")-trigger.player.getHp())}张手牌`,player.countCards("h")-trigger.player.getHp(),true);
					}
					"step 1"
					const next=player.chooseToUse("伏妙：你可以将一张牌当作【杀】使用（无距离限制，不计入使用次数）");
					next.set("norestore",true);
					next.set("_backupevent","sst_fumiaox");
					next.backup("sst_fumiaox");
					next.set("addCount",false);
					next.set("custom",{
						add:{},
						replace:{window:()=>{}}
					});
					next.set("filterTarget",(card,player,target)=>lib.filter.targetEnabled({name:"sha"},player,target));
				}
			},
			sst_fumiaox:{
				viewAs:{name:"sha"},
				filterCard:card=>get.itemtype(card)=="card",
				position:"hes",
				check:card=>7-get.value(card),
			},
			sst_huayu:{
				unique:true,
				zhuSkill:true,
				enable:"phaseUse",
				position:"he",
				filterCard:card=>get.name(card)=="sha",
				filterTarget:(card,player,target)=>{
					if(target==player) return false;
					if(target.group!=player.group) return false;
					for(const i of ui.selected.cards){
						if(!lib.filter.canBeGained(i,target,player)) return false;
					}
					return true;
				},
				filter:(event,player)=>{
					if(!player.hasZhuSkill("sst_huayu")) return false;
					return game.hasPlayer(current=>current!=player&&current.group==player.group);
				},
				discard:false,
				lose:false,
				delay:false,
				position:"he",
				check:card=>get.order(card),
				content:()=>{
					"step 0"
					player.give(cards,target,true);
					"step 1"
					player.chooseBool("化雨：是否摸一张牌？").set("ai",()=>true);
					"step 2"
					if(result.bool) player.draw();
				},
				ai:{
					order:1,
					result:{
						target:()=>{
							if(ui.selected.cards.length) return Math.cbrt(get.value(ui.selected.cards[0]));
							return 0;
						}
					}
				}
			},
			//飞机
			sst_xuhuang:{
				usable:1,
				shaRelated:true,
				trigger:{
					player:"useCardToPlayered",
					target:"useCardToTargeted"
				},
				filter:(event,player)=>{
					if(get.name(event.card)!="sha") return false;
					const evt=event.getParent();
					return typeof evt.sst_xuhuang!="object"||typeof evt.sst_xuhuang[player.playerid]!="object";
				},
				content:()=>{
					"step 0"
					player.chooseControl("是","否").set("ai",()=>{
						let mayDamage=false;
						const targets=_status.event.getTrigger().targets;
						for(const target of targets){
							const evt=_status.event.getParent(2);
							if(!evt.excluded||!evt.excluded.contains(target)){
								if(target==_status.event.player){
									if(!_status.event.player.hasUsableCard("shan")){
										mayDamage=true;
										break;
									}
								}
								else{
									let rand=0.95;
									if(!target.hasUsableCard("shan")){
										if(!target.countCards("h")){
											rand=0;
										}
										else{
											rand=0.05;
										}
									}
									else if(!target.countCards("h")){
										rand=0;
									}
									if(Math.random()>rand){
										mayDamage=true;
										break;
									}
								}
							}
						}
						return mayDamage?"是":"否";
					}).set("prompt",`虚晃：${get.translation(trigger.card)}是否造成伤害？`);
					"step 1"
					const evt=trigger.getParent();
					if(typeof evt.sst_xuhuang!="object") evt.set("sst_xuhuang",{});
					evt.sst_xuhuang[player.playerid]={result:result.control=="是"?true:false};
				},
				group:"sst_xuhuang2"
			},
			sst_xuhuang2:{
				forced:true,
				popup:false,
				trigger:{global:"useCardAfter"},
				filter:event=>typeof event.sst_xuhuang=="object",
				content:()=>{
					"step 0"
					const players=game.findPlayersByPlayerid(Object.keys(trigger.sst_xuhuang));
					if(players.length){
						event.target=players.sortBySeat(_status.currentPhase)[0];
					}
					else{
						event.finish();
					}
					"step 1"
					event.identical=trigger.sst_xuhuang[target.playerid].result==game.cardCausedDamage(trigger.card);
					target.popup(trigger.sst_xuhuang[target.playerid].result?"是":"否");
					target.$fullscreenpop(trigger.sst_xuhuang[target.playerid].result?"造成伤害":"不造成伤害",event.identical?"wood":"fire");
					game.log(target,"公布了结果",`#y${trigger.sst_xuhuang[target.playerid].result?"造成伤害":"不造成伤害"}`);
					game.delayx();
					"step 2"
					if(event.identical){
						target.popup("猜中");
						game.log(target,"#y猜中");
						target.draw(2);
					}
					else{
						target.popup("未猜中");
						game.log(target,"#y未猜中");
						target.chooseToDiscard("虚晃：弃置两张牌",2,"he",true);
					}
					delete trigger.sst_xuhuang[target.playerid];
					event.goto(0);
				}
			},
			//Sonic
			_sst_sonic_phase:{
				charlotte:true,
				trigger:{player:"phaseBegin"},
				ruleSkill:true,
				silent:true,
				firstDo:true,
				priority:2020,
				content:()=>{
					player.addTempSkill("sst_phase_pass","roundStart");
				}
			},
			sst_phase_pass:{
				charlotte:true,
				ruleSkill:true
			},
			sst_jibu:{
				lastDo:true,
				trigger:{global:"phaseBefore"},
				filter:(event,player)=>event.player!=player&&!player.hasSkill("sst_phase_pass")&&!player.hasSkill("sst_jibu_effect"),
				logTarget:"player",
				check:(event,player)=>get.attitude(event.player,player)<0,
				content:()=>{
					const next=player.phase("sst_jibu");
					event.next.remove(next);
					trigger.next.push(next);
					player.addTempSkill("sst_jibu_effect","roundStart");
				}
			},
			sst_jibu_effect:{
				notemp:true,
				trigger:{player:"phaseBefore"},
				charlotte:true,
				firstDo:true,
				priority:2021,
				forced:true,
				popup:false,
				filter:event=>event.skill!="sst_jibu",
				content:()=>{
					player.removeSkill("sst_jibu_effect");
					trigger.cancel();
				}
			},
			sst_juechen:{
				global:"sst_juechen2",
				trigger:{player:"useCard2"},
				filter:(event,player)=>{
					if(_status.currentPhase!=player) return false;
					if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
					return game.hasPlayer(current=>!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current)&&!current.hasSkill("sst_phase_pass"));
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_juechen"),`为${get.translation(trigger.card)}增加一个目标`,(card,player,target)=>{
						const evt=_status.event.getTrigger();
						return !evt.targets.contains(target)&&lib.filter.targetEnabled2(evt.card,evt.player,target)&&!target.hasSkill("sst_phase_pass");
					}).set("autodelay",true).set("ai",target=>{
						const evt=_status.event.getTrigger();
						return get.effect(target,evt.card,evt.player,_status.event.player);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_juechen",result.targets);
						trigger.targets.addArray(result.targets);
					}
				}
			},
			sst_juechen2:{
				trigger:{player:"useCard2"},
				filter:(event,player)=>{
					if(_status.currentPhase==player&&player.hasSkill("sst_juechen")) return false;
					if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
					return game.hasPlayer(current=>!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current)&&current.hasSkill("sst_phase_pass")&&_status.currentPhase!=current&&current.hasSkill("sst_juechen"));
				},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt("sst_juechen2"),`为${get.translation(trigger.card)}增加目标`,[1,Infinity],(card,player,target)=>{
						const evt=_status.event.getTrigger();
						return !evt.targets.contains(target)&&lib.filter.targetEnabled2(evt.card,evt.player,target)&&target.hasSkill("sst_phase_pass")&&_status.currentPhase!=target&&target.hasSkill("sst_juechen");
					}).set("autodelay",true).set("ai",target=>{
						const evt=_status.event.getTrigger();
						return get.effect(target,evt.card,evt.player,_status.event.player);
					});
					"step 1"
					if(result.bool){
						player.logSkill("sst_juechen2",result.targets);
						trigger.targets.addArray(result.targets);
					}
				}
			},
			//Hero
			sst_songmo:{
				preHidden:true,
				locked:false,
				trigger:{global:"phaseUseBegin"},
				filter:(event,player)=>player.getHandcardLimit()>0,
				logTarget:"player",
				check:(event,player)=>get.attitude(player,event.player)>0,
				content:()=>{
					"step 0"
					player.addSkill("sst_songmo_effect");
					player.addMark("sst_songmo_effect",1,false);
					"step 1"
					if(player.needsToDiscard()) player.chooseToDiscard(`诵魔：弃置${get.cnNumber(player.needsToDiscard())}张手牌`,player.needsToDiscard(),true);
					"step 2"
					const list=lib.inpile.filter(name=>get.type(name)=="trick"&&trigger.player.hasUseTarget({name:name,isCard:true})).map(name=>["锦囊","",name]);
					if(list.length) player.chooseButton([`诵魔：视为${get.translation(trigger.player)}使用一张锦囊牌`,[list,"vcard"]],true).set("filterButton",button=>_status.event.getTrigger().player.hasUseTarget({name:button.link[2],isCard:true})).set("ai",button=>_status.event.getTrigger().player.getUseValue({name:button.link[2],isCard:true}));
					"step 3"
					if(result&&result.bool&&result.links&&result.links.length) trigger.player.chooseUseTarget({name:result.links[0][2],isCard:true},true,false);
				},
				ai:{
					expose:0.2
				}
			},
			sst_songmo_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>`本局游戏你的手牌上限-${storage}<br>当前你的手牌上限：${player.getHandcardLimit()}`
				},
				onremove:true,
				mod:{
					maxHandcard:(player,num)=>num-player.countMark("sst_songmo_effect")
				}
			},
			sst_yonghun:{
				locked:false,
				trigger:{player:"useCardAfter"},
				direct:true,
				filter:(event,player)=>get.tag(event.card,"damage")&&event.targets&&event.targets.length==1&&!game.cardCausedDamage(event.card,player,event.targets[0]),
				content:()=>{
					"step 0"
					player.chooseCard("he",get.prompt2("sst_yonghun")).set("ai",card=>{
						if(!get.tag(card,"damage")) return 21-get.value(card);
						if(_status.event.player.needsToDiscard()>ui.selected.cards.length) return 11-get.value(card);
						return 0;
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill(event.name);
						const card=result.cards[0];
						event.tag=get.tag(card,"damage");
						player.addSkill("sst_yonghun_effect2");
						player.addToExpansion(card,player,"give").gaintag.add("sst_yonghun_effect2");
					}
					else{
						event.finish();
					}
					"step 2"
					if(!event.tag){
						player.addSkill("sst_yonghun_effect");
						player.addMark("sst_yonghun_effect",1,false);
						player.addTempSkill("sst_yonghun_effect3");
						player.addMark("sst_yonghun_effect3",1,false);
					}
				}
			},
			sst_yonghun_effect:{
				charlotte:true,
				intro:{
					content:(storage,player)=>`本局游戏你的手牌上限+${storage}<br>当前你的手牌上限：${player.getHandcardLimit()}`
				},
				onremove:true,
				mod:{
					maxHandcard:(player,num)=>num+player.countMark("sst_yonghun_effect")
				}
			},
			sst_yonghun_effect2:{
				marktext:"破",
				charlotte:true,
				trigger:{global:"phaseEnd"},
				forced:true,
				intro:{
					content:"expansion",
					markcount:"expansion"
				},
				onremove:(player,skill)=>{
					const cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				content:()=>{
					"step 0"
					const cards=player.getExpansions("sst_yonghun_effect2");
					if(cards.length) player.gain(cards,"gain2");
					"step 1"
					player.removeSkill("sst_yonghun_effect2");
				}
			},
			sst_yonghun_effect3:{
				charlotte:true,
				marktext:"额",
				intro:{
					content:"本回合你可以额外使用&张杀"
				},
				onremove:true,
				mod:{
					cardUsable:(card,player,num)=>{
						if(card.name=="sha") return num+player.countMark("sst_yonghun_effect3");
					}
				}
			},
			//Fox
			sst_powei:{
				trigger:{player:"phaseDrawBegin2"},
				check:(event,player)=>player.countCards("h"),
				filter:event=>!event.numFixed,
				prompt2:()=>{
					const num=game.countPlayer(current=>current.isDamaged())*2>game.countPlayer()?2:1;
					return `摸牌阶段，你可以令摸牌数-${num}，然后亮出牌堆顶的${get.cnNumber(num)}张牌且可以使用之（不能指定自己为目标）。你重复此流程直到你没有以此法使用牌。`;
				},
				content:()=>{
					"step 0"
					event.num=game.countPlayer(current=>current.isDamaged())*2>game.countPlayer()?2:1;
					"step 1"
					trigger.num-=trigger.num-num<0?0:num;
					event.cards=game.cardsGotoOrdering(get.cards(event.num)).cards;
					player.showCards(event.cards,`${get.translation(player)}发动了【${get.skillTranslation(event.name,player)}】`);
					"step 2"
					if(cards.length) player.chooseCardButton("破围：选择一张牌",cards).set("ai",button=>_status.event.player.getUseValue(button.link)).set("filterButton",button=>lib.filter.cardEnabled(button.link,_status.event.player));
					"step 3"
					if(result.links&&result.links.length){
						cards.removeArray(result.links);
						event.card=result.links[0];
					}
					else{
						cards.length=0;
						event.goto(5);
					}
					"step 4"
					if(card) player.chooseUseTarget(card,game.filterPlayer(current=>current!=player),false);
					"step 5"
					if(player.hasHistory("useCard",evt=>{
						if(!evt.cards.contains(card)) return false;
						const sst_powei=evt.getParent(2);
						return sst_powei&&sst_powei.name=="sst_powei";
					})) event.used=true;
					if(cards.length){
						event.goto(2);
					}
					else{
						if(event.used){
							event.used=false;
							player.chooseBool("破围：是否继续？").set("ai",()=>true);
						}
						else{
							event.finish();
						}
					}
					event.card=null;
					"step 6"
					if(result.bool) event.goto(0);
				}
			},
			//Alex
			sst_qiaoqi:{
				intro:{
					mark:(dialog,storage,player)=>{
						const sst_qiaoqi=player.getCards("e",card=>card.sst_qiaoqi&&card.cards);
						const cards=[];
						sst_qiaoqi.forEach(card=>cards.addArray(card.cards));
						if(!cards.length) return "共有〇张牌";
						if(player.isUnderControl(true)){
							sst_qiaoqi.forEach(card=>{
								dialog.addText(get.translation(card));
								dialog.addAuto(card.cards);
							});
						}
						else{
							sst_qiaoqi.forEach(card=>dialog.addText(`${get.translation(card)}：共有${get.cnNumber(card.cards.length)}张牌`));
						}
					},
					markcount:(storage,player)=>{
						const cards=[];
						player.getCards("e",card=>card.sst_qiaoqi&&card.cards).forEach(card=>cards.addArray(card.cards));
						if(cards.length) return cards.length;
						return 0;
					}
				},
				global:["sst_qiaoqi2","sst_qiaoqi4","sst_qiaoqi7"],
				enable:"phaseUse",
				filterCard:card=>get.color(card)=="red",
				check:card=>{
					if(card.name=="du") return 20;
					const player=_status.event.player;
					const nh=player.countCards("h");
					if(!player.needsToDiscard()){
						if(nh<3) return 0;
						if(nh==3) return 5-get.value(card);
						return 7-get.value(card);
					}
					return 10-get.useful(card);
				},
				discard:false,
				lose:false,
				delay:false,
				sync:sst_qiaoqi=>{
					if(game.online) return;
					if(typeof sst_qiaoqi.cards=="undefined"){
						delete sst_qiaoqi.sst_qiaoqi;
						game.broadcast(sst_qiaoqi=>{
							delete sst_qiaoqi.cards;
							delete sst_qiaoqi.sst_qiaoqi;
						},sst_qiaoqi);
						return;
					}
					for(let i=0;i<sst_qiaoqi.cards.length;i++){
						if(get.position(sst_qiaoqi.cards[i])!="s"){
							sst_qiaoqi.cards.splice(i--,1);
						}
					}
					if(sst_qiaoqi.cards.length){
						game.broadcast((sst_qiaoqi,cards)=>{
							sst_qiaoqi.cards=cards;
							sst_qiaoqi.sst_qiaoqi=true;
						},sst_qiaoqi,sst_qiaoqi.cards);
					}
					else{
						delete sst_qiaoqi.cards;
						delete sst_qiaoqi.sst_qiaoqi;
						game.broadcast(sst_qiaoqi=>{
							delete sst_qiaoqi.cards;
							delete sst_qiaoqi.sst_qiaoqi;
						},sst_qiaoqi);
					}
				},
				filter:(event,player)=>{
					if(!player.countCards("h",{color:"red"})) return false;
					if(player.hasSkill("sst_fumo")&&player.getEquip(5)) return true;
					return !player.getStat().skill["sst_qiaoqi"]||player.getStat().skill["sst_qiaoqi"]<1;
				},
				filterTarget:(card,player,target)=>target.countCards("e"),
				content:()=>{
					"step 0"
					player.showCards(cards,`${get.translation(player)}发动了【${get.skillTranslation(event.name,player)}】`);
					"step 1"
					player.choosePlayerCard("巧器：选择一张装备牌","e",target,true);
					"step 2"
					if(result.cards&&result.cards.length){
						event.muniu=result.cards[0];
						if(get.name(event.muniu)=="muniu"){
							player.loseToSpecial(cards,"muniu",target);
						}
						else{
							player.loseToSpecial(cards,"sst_qiaoqi",target);
						}
						player.popup(get.name(event.muniu),"wood");
						game.log(player,"将一张牌扣置于",event.muniu,"上");
						player.$give(1,target,false);
					}
					else{
						event.finish();
					}
					"step 3"
					for(let i=0;i<cards.length;i++){
						if(cards[i].destroyed||(!cards[i].hasGaintag("sst_qiaoqi")&&!cards[i].hasGaintag("muniu"))||get.position(cards[i])!="s"){
							cards[i].remove();
							cards.splice(i--,1);
						}
					}
					game.broadcastAll((cards,tag)=>cards.forEach(card=>{
						if(!card.hasGaintag("muniu")) card.addGaintag(tag);
					}),cards,get.name(event.muniu));
					const muniu=event.muniu;
					if(!muniu||!cards.length) cards.forEach(card=>card.discard());
					if(typeof muniu.cards=="undefined") muniu.cards=[];
					muniu.cards.addArray(cards);
					if(get.name(muniu)!="muniu") muniu.sst_qiaoqi=true;
					game.broadcast((muniu,cards)=>{
						muniu.cards=cards;
						if(get.name(muniu)!="muniu") muniu.sst_qiaoqi=true;
					},muniu,muniu.cards);
					target.markSkill("sst_qiaoqi");
					game.delayx();
				},
				ai:{
					order:1,
					expose:0.1,
					result:{
						target:1
					}
				}
			},
			sst_qiaoqi2:{
				enable:"phaseUse",
				usable:1,
				filterCard:true,
				check:card=>{
					if(card.name=="du") return 20;
					const player=_status.event.player;
					const nh=player.countCards("h");
					if(!player.needsToDiscard()){
						if(nh<3) return 0;
						if(nh==3) return 5-get.value(card);
						return 7-get.value(card);
					}
					return 10-get.useful(card);
				},
				discard:false,
				lose:false,
				delay:false,
				filter:(event,player)=>player.getCards("e",card=>card.cards&&card.sst_qiaoqi).length&&player.countCards("h"),
				content:()=>{
					"step 0"
					player.choosePlayerCard("巧器：选择一张“巧器”牌","e",player,true).set("filterButton",button=>{
						if(button.link&&button.link.cards&&button.link.sst_qiaoqi){
							lib.skill.sst_qiaoqi.sync(button.link);
							if(button.link.cards.length) return true;
						}
						return false;
					});
					"step 1"
					if(result.cards&&result.cards.length){
						event.muniu=result.cards[0];
						player.loseToSpecial(cards,"sst_qiaoqi");
						player.popup(get.name(event.muniu),"wood");
						game.log(player,"将一张牌扣置于",event.muniu,"上");
						player.$give(1,player,false);
					}
					else{
						event.finish();
					}
					"step 2"
					for(let i=0;i<cards.length;i++){
						if(cards[i].destroyed||!cards[i].hasGaintag("sst_qiaoqi")||get.position(cards[i])!="s"){
							cards[i].remove();
							cards.splice(i--,1);
						}
					}
					game.broadcastAll((cards,tag)=>cards.forEach(card=>card.addGaintag(tag)),cards,get.name(event.muniu));
					const muniu=event.muniu;
					if(!muniu||!cards.length){
						cards.forEach(card=>card.discard());
						event.finish();
						return;
					}
					if(typeof muniu.cards=="undefined") muniu.cards=[];
					muniu.cards.addArray(cards);
					muniu.sst_qiaoqi=true;
					game.broadcast((muniu,cards)=>{
						muniu.cards=cards;
						muniu.sst_qiaoqi=true;
					},muniu,muniu.cards);
					game.delayx();
					"step 3"
					const choice=game.filterPlayer(current=>{
						if(!current.getEquip(event.muniu)&&current!=player&&!current.isTurnedOver()&&
							get.attitude(player,current)>=3&&get.attitude(current,player)>=3) return true;
					}).sort(lib.sort.seat)[0];
					const next=player.chooseTarget(`是否移动${get.translation(event.muniu)}？`,(card,player,target)=>!target.isMin()&&player!=target&&target.isEmpty(get.equiptype(event.muniu)));
					next.set("ai",target=>target==_status.event.choice?1:-1);
					next.set("choice",choice);
					"step 4"
					if(result.targets&&result.targets.length){
						const card=event.muniu;
						event.targetx=result.targets[0];
						event.targetx.equip(card).set("delay",true);
						player.$give(card,event.targetx);
						player.line(event.targetx,"green");
					}
					else{
						player.updateMarks();
						event.finish();
					}
					"step 5"
					if(event.muniu&&event.muniu.cards&&event.muniu.cards.length){
						event.targetx.directgains(event.muniu.cards,null,"sst_qiaoqi");
					}
					event.targetx.markSkill("sst_qiaoqi");
					"step 6"
					game.broadcastAll((cards,tag)=>cards.forEach(card=>card.addGaintag(tag)),event.muniu.cards,get.name(event.muniu));
					lib.skill.sst_qiaoqi.sync(event.muniu);
				},
				ai:{
					order:1,
					expose:0.1,
					result:{
						player:1
					}
				}
			},
			sst_qiaoqi4:{
				trigger:{player:"loseEnd"},
				firstDo:true,
				filter:(event,player)=>{
					if(!event.es||!event.es.length) return false;
					for(const i of event.es){
						if(i.cards&&i.sst_qiaoqi) return true;
					}
					return false;
				},
				silent:true,
				content:()=>{
					"step 0"
					for(const card of trigger.es){
						if(!card.sst_qiaoqi) continue;
						if(!card||!card.cards||!card.cards.length) return;
						if((!trigger.getParent()||trigger.getParent().name!="swapEquip")&&(trigger.type!="equip"||trigger.swapEquip)){
							player.lose(card.cards,ui.discardPile);
							player.$throw(card.cards,1000);
							player.popup("sst_qiaoqi");
							player.popup(get.name(card),"fire");
							game.log(card,"掉落了",card.cards);
							delete card.cards;
							lib.skill.sst_qiaoqi.sync(card);
						}
						else{
							player.lose(card.cards,ui.special);
						}
					}
					const sst_qiaoqi=player.getCards("e",card=>card.cards&&get.name(card)!="muniu");
					sst_qiaoqi.forEach(card=>{
						card.cards.remove(trigger.cards);
						lib.skill.sst_qiaoqi.sync(card);
					});
					const cards=[];
					sst_qiaoqi.forEach(card=>{
						if(card.cards){
							lib.skill.sst_qiaoqi.sync(card);
							cards.addArray(card.cards);
						}
					});
					if(!cards.length) player.unmarkSkill("sst_qiaoqi");
					player.updateMarks();
				}
			},
			sst_qiaoqi7:{
				trigger:{player:"loseEnd"},
				forced:true,
				firstDo:true,
				filter:(event,player)=>{
					if(!event.ss||!event.ss.length) return false;
					const cards=[];
					player.getCards("e",card=>card.cards&&card.sst_qiaoqi).forEach(card=>cards.addArray(card.cards));
					if(!cards.length) return false;
					return event.ss.some(card=>cards.contains(card));
				},
				content:()=>{
					const sst_qiaoqi=player.getCards("e",card=>card.cards&&card.sst_qiaoqi);
					sst_qiaoqi.forEach(card=>{
						const length=card.cards.length;
						card.cards.removeArray(trigger.ss);
						if(card.cards.length<length) player.popup(get.name(card),"fire");
						lib.skill.sst_qiaoqi.sync(card);
					});
					const cards=[];
					sst_qiaoqi.forEach(card=>{
						if(card.cards){
							lib.skill.sst_qiaoqi.sync(card);
							cards.addArray(card.cards);
						}
					});
					if(!cards.length) player.unmarkSkill("sst_qiaoqi");
					player.updateMarks();
				}
			},
			sst_fumo:{
				locked:true,
				trigger:{source:"damageBegin2"},
				direct:true,
				filter:(event,player)=>player.getEquip(1)&&event.notLink(),
				content:()=>{
					"step 0"
					player.chooseControl("普",lib.nature,"cancel2").set("prompt",get.prompt("sst_fumo2",trigger.player)).set("prompt2","你可以指定你造成伤害的属性").set("ai",()=>{
						const player=_status.event.player;
						const target=_status.event.getTrigger().player;
						const choices=_status.event.controls.filter(value=>value!="cancel2").map(value=>{
							if(value=="普") return get.damageEffect(target,player,player);
							return get.damageEffect(target,player,player,value);;
						});
						const max=Math.max(...choices);
						return choices.reduce((previousValue,currentValue,currentIndex)=>{
							if(currentValue==max) previousValue.push(currentIndex);
							return previousValue;
						},[]).randomGet();
					});
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_fumo",trigger.player);
						if(result.control=="普"){
							delete trigger.nature;
						}
						else{
							trigger.nature=result.control;
						}
						player.popup(result.control,result.control);
						game.log(player,"将对",trigger.player,"造成伤害的属性指定为",`#y${get.translation(result.control)}`);
					}
				},
				group:["sst_fumo2","sst_fumo3"]
			},
			sst_fumo2:{
				trigger:{player:"damageBegin2"},
				filter:(event,player)=>player.getEquip(2)&&event.source&&!player.inRangeOf(event.source),
				forced:true,
				content:()=>{
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:(card,player,target)=>{
							if(get.tag(card,"damage")&&target.getEquip(2)&&!player.inRangeOf(target)) return "zeroplayertarget";
						}
					}
				}
			},
			sst_fumo3:{
				mod:{
					globalFrom:(from,to,current)=>{
						const mount=from.getEquip(4);
						if(mount){
							const info=get.info(mount).distance;
							if(info&&info.globalFrom) return current+info.globalFrom;
						}
					},
					globalTo:(from,to,current)=>{
						const mount=to.getEquip(3);
						if(mount){
							const info=get.info(mount).distance;
							if(info&&info.globalTo) return current+info.globalTo;
						}
					}
				}
			},
			//Min Min
			sst_longbo:{
				locked:false,
				mod:{
					cardUsableTarget:(card,player,target)=>{
						if(get.color(card)=="red"){
							const x=Math.ceil(game.countPlayer()/2),lefts=[];
							let left=player;
							for(let i=0;i<x;i++){
								left=left.getPrevious();
								lefts.push(left);
							}
							if(lefts.contains(target)) return true;
						}
						else if(get.color(card)=="black"){
							const x=Math.ceil(game.countPlayer()/2),rights=[];
							let right=player;
							for(let i=0;i<x;i++){
								right=right.getNext();
								rights.push(right);
							}
							if(rights.contains(target)) return true;
						}
					},
					targetInRange:()=>true
				}
			},
			sst_fengcu:{
				group:["sst_fengcu_sha","sst_fengcu_shan","sst_fengcu2"],
				subSkill:{
					sha:{
						enable:["chooseToUse","chooseToRespond"],
						complexCard:true,
						filterCard:card=>{
							if(!ui.selected.cards.length) return true;
							return get.color(card)!=get.color(ui.selected.cards[0]);
						},
						selectCard:2,
						position:"hes",
						viewAs:{name:"sha"},
						viewAsFilter:player=>{
							if(player.getCards("hes").map(card=>get.color(card)).reduce((previousValue,currentValue)=>{
								previousValue.add(currentValue);
								return previousValue;
							},[]).length<2) return false;
						},
						prompt:"你可以将两张颜色不同的牌当作杀使用或打出。若以此法使用的牌造成了伤害，你本轮造成伤害后获得目标一张牌；若以此法响应了牌，你获得被响应的牌",
						check:card=>6-get.value(card),
						precontent:()=>{
							event.result.skill="sst_fengcu";
						},
						ai:{
							order:()=>get.order({name:"sha"})+0.1,
							respondSha:true,
							skillTagFilter:player=>{
								if(player.getCards("hes").map(card=>get.color(card)).reduce((previousValue,currentValue)=>{
									previousValue.add(currentValue);
									return previousValue;
								},[]).length<2) return false;
							}
						}
					},
					shan:{
						enable:["chooseToUse","chooseToRespond"],
						complexCard:true,
						filterCard:card=>{
							if(!ui.selected.cards.length) return true;
							return get.color(card)!=get.color(ui.selected.cards[0]);
						},
						selectCard:2,
						position:"hes",
						viewAs:{name:"shan"},
						viewAsFilter:player=>{
							if(player.getCards("hes").map(card=>get.color(card)).reduce((previousValue,currentValue)=>{
								previousValue.add(currentValue);
								return previousValue;
							},[]).length<2) return false;
						},
						prompt:"你可以将两张颜色不同的牌当作闪使用或打出。若以此法使用的牌造成了伤害，你本轮造成伤害后获得目标一张牌；若以此法响应了牌，你获得被响应的牌",
						check:card=>6-get.value(card),
						precontent:()=>{
							event.result.skill="sst_fengcu";
						},
						ai:{
							order:()=>get.order({name:"shan"})+0.1,
							respondShan:true,
							skillTagFilter:player=>{
								if(player.getCards("hes").map(card=>get.color(card)).reduce((previousValue,currentValue)=>{
									previousValue.add(currentValue);
									return previousValue;
								},[]).length<2) return false;
							}
						}
					}
				}
			},
			sst_fengcu2:{
				trigger:{player:["useCardBegin","respondBegin"]},
				silent:true,
				filter:event=>event.skill=="sst_fengcu",
				content:()=>{
					const next=game.createEvent("sst_fengcu_clear");
					event.next.remove(next);
					trigger.after.push(next);
					next.player=player;
					next.card=trigger.card;
					next.respondTo=trigger.respondTo;
					next.setContent(lib.skill.sst_fengcu2.contentx);
				},
				contentx:()=>{
					"step 0"
					if(game.cardCausedDamage(card)) player.addTempSkill("sst_fengcu_effect","roundStart");
					"step 1"
					if(event.respondTo&&event.respondTo[1]&&event.respondTo[1].cards){
						const cards=event.respondTo[1].cards.filterInD("o");
						if(cards.length) player.gain(cards,"gain2");
					}
				}
			},
			sst_fengcu_effect:{
				charlotte:true,
				mark:true,
				intro:{
					name:"凤蹴",
					content:"你本轮造成伤害后获得目标一张牌"
				},
				trigger:{source:"damageSource"},
				forced:true,
				filter:event=>event.player.countCards("he"),
				logTarget:"player",
				content:()=>{
					player.gainPlayerCard(`凤蹴：获得${get.translation(trigger.player)}一张牌`,trigger.player,"he",true);
				}
			},
			//Pikachu
			sst_fulei:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_fulei)) player.storage.sst_fulei=[];
				},
				preHidden:true,
				trigger:{player:"loseAfter"},
				filter:(event,player)=>(!player.storage.sst_fulei.contains("h")&&event.hs.filterInD("d").length)||
					(!player.storage.sst_fulei.contains("e")&&event.es.filterInD("d").length)||
					(!player.storage.sst_fulei.contains("j")&&event.js.filterInD("d").length),
				direct:true,
				content:()=>{
					"step 0"
					event.hs=[];
					event.es=[];
					event.js=[];
					if(!player.storage.sst_fulei.contains("h")&&trigger.hs.filterInD("d").length) event.hs.addArray(trigger.hs.filterInD("d"));
					if(!player.storage.sst_fulei.contains("e")&&trigger.es.filterInD("d").length) event.es.addArray(trigger.es.filterInD("d"));
					if(!player.storage.sst_fulei.contains("j")&&trigger.js.filterInD("d").length) event.js.addArray(trigger.js.filterInD("d"));
					player.chooseTarget(get.prompt2("sst_fulei"),(card,player,target)=>player.canCompareTarget(target)).set("ai",target=>get.damageEffect(target,_status.event.player,_status.event.player,"thunder"));
					"step 1"
					if(result.targets&&result.targets.length){
						const evt=event.getParent("phase");
						if(evt&&evt.name=="phase"){
							const next=game.createEvent("sst_fulei_clear");
							event.next.remove(next);
							evt.after.push(next);
							next.player=player;
							next.setContent(()=>{
								if(Array.isArray(player.storage.sst_fulei)) player.storage.sst_fulei.length=0;
							});
						}
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill("sst_fulei",target,"thunder");
					const info=["伏雷：选择用于拼点的牌"];
					if(event.hs.length){
						info.push(`<div class="text center">来自手牌区</div>`);
						info.push(event.hs);
					}
					if(event.es.length){
						info.push(`<div class="text center">来自装备区</div>`);
						info.push(event.es);
					}
					if(event.js.length){
						info.push(`<div class="text center">来自判定区</div>`);
						info.push(event.js);
					}
					const next=player.chooseButton();
					next.set("createDialog",info);
					next.set("forced",true);
					next.set("ai",button=>{
						const card=button.link;
						if(typeof card=="string"&&lib.skill[card]){
							const ais=lib.skill[card].check||(()=>0);
							return ais();
						}
						const player=_status.event.player;
						const getn=card=>{
							if(player.hasSkill("tianbian")&&get.suit(card)=="heart") return 13;
							return get.number(card);
						}
						const event=_status.event.getParent();
						const to=event.target;
						let addi=get.value(card)>=8&&get.type(card)!="equip"?-6:0;
						if(card.name=="du") addi-=5;
						if(Boolean(event.small)) return -getn(card)-get.value(card)/2+addi;
						return getn(card)-get.value(card)/2+addi;
					});
					"step 3"
					if(result.links&&result.links.length){
						if(event.hs.contains(result.links[0])) player.storage.sst_fulei.push("h");
						if(event.es.contains(result.links[0])) player.storage.sst_fulei.push("e");
						if(event.js.contains(result.links[0])) player.storage.sst_fulei.push("j");
						const next=player.chooseToCompare(target);
						if(!next.fixedResult) next.fixedResult={};
						next.fixedResult[player.playerid]=result.links[0];
					}
					else{
						event.finish();
					}
					"step 4"
					event.targets=[player,target].filter(current=>current!=result.winner).sortBySeat(_status.currentPhase);
					if(event.targets.length){
						player.chooseControl().set("choiceList",[
							`${get.translation(event.targets.filter(current=>current.isIn()))}受到你造成的1点雷电伤害`,
							`${get.translation(event.targets.filter(current=>current.isIn()))}判定一次【闪电】`
						]).set("ai",()=>_status.event.getParent().targets.filter(current=>current.isIn()).map(current=>get.damageEffect(current,_status.event.player,_status.event.player,"thunder")).reduce((previousValue,currentValue)=>previousValue+currentValue,0)>0?0:1).set("prompt","伏雷：选择一项");
					}
					else{
						event.finish();
					}
					"step 5"
					player.line(targets.filter(current=>current.isIn()),"thunder");
					if(result.index==1){
						targets.forEach(current=>{
							if(current.isIn()) current.judgeCard("shandian");
						});
					}
					else{
						targets.forEach(current=>{
							if(current.isIn()) current.damage(player,"thunder","nocard");
						});
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_duoshan:{
				trigger:{player:"damageBegin4"},
				filter:(event,player)=>player.countCards("hej"),
				direct:true,
				content:()=>{
					"step 0"
					player.discardPlayerCard(get.prompt2("sst_duoshan"),player,"hej").set("filterButton",button=>{
						if(!ui.selected.buttons.length) return true;
						return get.position(button.link)==get.position(ui.selected.buttons[0].link);
					}).set("selectButton",()=>{
						const player=_status.event.player;
						if(!ui.selected.buttons.length) return player.getDiscardableCards(player,"hej").length;
						return player.getDiscardableCards(player,get.position(ui.selected.buttons[0].link)).length;
					}).set("ai",button=>{
						if(get.position(button.link)=="j") return 10;
						if(get.position(button.link)=="e") return 11-get.useful(button.link);
						return 8-get.useful(button.link);
					}).set("complexSelect",true).set("logSkill","sst_duoshan");
					"step 1"
					if(result.cards&&result.cards.length) trigger.cancel();
				}
			},
			//Falco
			sst_juao:{
				trigger:{player:"phaseZhunbeiBegin"},
				direct:true,
				content:()=>{
					"step 0"
					const choice=["cancel2"];
					const hp=player.getHp();
					for(let i=1;i<=hp;i++){
						choice.push(get.cnNumber(i,true));
					}
					player.chooseControl(choice).set("prompt",get.prompt2("sst_juao")).set("ai",()=>{
						if(_status.event.player.hp<3) return 1;
						return _status.event.player.hp-2;
					});
					"step 1"
					if(result.control!="cancel2"){
						player.logSkill("sst_juao");
						event.num=result.index;
						player.draw(event.num);
					}
					else{
						event.finish();
					}
					"step 2"
					player.addTempSkill("sst_juao_effect",{player:"phaseZhunbeiBegin"});
					player.addMark("sst_juao_effect",num,false);
				}
			},
			sst_juao_effect:{
				charlotte:true,
				intro:{
					content:"因【倨傲】摸了&张牌"
				},
				onremove:true,
				trigger:{player:"changeHp"},
				filter:(event,player)=>player.getHp()<player.countMark("sst_juao_effect"),
				forced:true,
				content:()=>{
					player.die();
				}
			},
			//Enderman
			sst_lingying:{
				forced:true,
				trigger:{target:"useCardToTarget"},
				filter:(event,player)=>event.player.isIn()&&(get.name(event.card)=="sha"||get.type2(event.card)=="trick"&&get.tag(event.card,"damage"))&&get.distance(event.player,player)>1,
				content:()=>{
					trigger.getParent().excluded.add(player);
				},
				ai:{
					effect:{
						target:(card,player,target)=>{
							if((card.name=="sha"||(get.type2(card)=="trick"&&get.tag(card,"damage")))&&get.distance(player,target)>1) return "zeroplayertarget";
						}
					}
				}
			},
			sst_fankui:{
				init:player=>{
					player.addSkill("sst_fankui_range");
					if(!Array.isArray(player.storage.sst_fankui)) player.storage.sst_fankui=[];
					player.storage.sst_fankui_range={};
					if(_status.gameStarted) game.filterPlayer().sortBySeat(_status.currentPhase||player).forEach(current=>player.storage.sst_fankui_range[current.playerid]=player.inRangeOf(current));
				},
				forced:true,
				trigger:{player:"inRangeOf"},
				logTarget:"targets",
				content:()=>{
					"step 0"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						const next=game.createEvent("sst_fankui_clear");
						event.next.remove(next);
						evt.after.push(next);
						next.player=player;
						next.setContent(()=>{
							if(Array.isArray(player.storage.sst_fankui)) player.storage.sst_fankui.length=0;
						});
					}
					"step 1"
					event.num=0;
					"step 2"
					player.gainPlayerCard(`反窥：获得${get.translation(trigger.targets[num])}区域里的一张牌`,trigger.targets[num],"hej",true).set("filterButton",button=>!_status.event.player.storage.sst_fankui.contains(button.link));
					"step 3"
					if(result.cards&&result.cards.length){
						player.storage.sst_fankui.addArray(result.cards);
					}
					event.num++;
					if(event.num<trigger.targets.length) event.goto(2);
				}
			},
			sst_fankui_range:{
				silent:true,
				trigger:{
					global:[
						"gameStart","gameDrawAfter","enterGame",
						"phaseBefore","phaseBeginStart","phaseBegin","phaseEnd","phaseAfter",
						"phaseZhunbeiBefore","phaseJudgeBefore","phaseDrawBefore","phaseUseBefore","phaseDiscardBefore","phaseJieshuBefore",
						"phaseZhunbeiBegin","phaseJudgeBegin","phaseDrawBegin","phaseUseBegin","phaseDiscardBegin","phaseJieshuBegin",
						"phaseZhunbeiEnd","phaseJudgeEnd","phaseDrawEnd","phaseUseEnd","phaseDiscardEnd","phaseJieshuEnd",
						"phaseZhunbeiAfter","phaseJudgeAfter","phaseDrawAfter","phaseUseAfter","phaseDiscardAfter","phaseJieshuAfter",
						"useSkillBefore","useSkillBegin","useSkillEnd","useSkillAfter",
						"useCardBefore","useCardBegin","useCard","useCardEnd","useCardAfter",
						"respondBefore","respondBegin","respond","respondEnd","respondAfter",
						"triggerBefore","triggerBegin","trigger","triggerEnd","triggerAfter",
						"triggerHiddenBefore","triggerHiddenBegin","triggerHiddenEnd","triggerHiddenAfter",
						"skillBefore","skillBegin","skillEnd","skillAfter",
						"arrangeTriggerBefore","arrangeTriggerBegin","arrangeTrigger","arrangeTriggerEnd","arrangeTriggerAfter",
						"loseEnd","equipEnd","addJudgeEnd","gainEnd","loseAsyncEnd","addToExpansionEnd",
						"loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"
					]
				},
				content:()=>{
					if(typeof player.storage.sst_fankui_range!="object") player.storage.sst_fankui_range={};
					const targets=[];
					game.filterPlayer().sortBySeat(_status.currentPhase).forEach(current=>{
						const inRangeOf=player.inRangeOf(current);
						if(current.isIn()&&typeof inRangeOf!="undefined"&&typeof player.storage.sst_fankui_range[current.playerid]!="undefined"&&inRangeOf&&!player.storage.sst_fankui_range[current.playerid]) targets.push(current);
						player.storage.sst_fankui_range[current.playerid]=inRangeOf;
					});
					if(targets.length){
						targets.sortBySeat(_status.currentPhase);
						const next=game.createEvent("inRangeOf",false);
						next.player=player;
						next.targets=targets;
						next.setContent("emptyEvent");
					}
				}
			},
			sst_xiangzhu:{
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.hasCard(card=>player.isEmpty(get.subtype(card)),"e")),
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_xiangzhu"),(card,player,target)=>target!=player&&target.hasCard(cardx=>player.isEmpty(get.subtype(cardx)),"e")).set("ai",target=>Math.max(...target.getCards("e",card=>_status.event.player.isEmpty(get.subtype(card))).map(card=>get.value(card))));
					"step 1"
					if(result.targets&&result.targets.length){
						event.target=result.targets[0];
						player.logSkill("sst_xiangzhu",event.target);
						player.choosePlayerCard(`向筑：将${get.translation(event.target)}装备区里的一张牌移动到你的装备区里`,event.target,"e",true).set("filterButton",button=>_status.event.player.isEmpty(get.subtype(button.link)));
					}
					"step 2"
					if(result.cards&&result.cards.length){
						event.card=result.cards[0];
						target.$give(event.card,player,false);
						game.log(target,"的",event.card,"被移动给了",player);
						player.equip(event.card).set("delay",true);
						player.addExpose(0.1);
					}
					else{
						event.finish();
					}
					"step 3"
					player.addGaintag(card,"sst_xiangzhu");
				},
				group:"sst_xiangzhu2"
			},
			sst_xiangzhu2:{
				direct:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>player.hasCard(card=>card.hasGaintag("sst_xiangzhu"),"e"),
				content:()=>{
					"step 0"
					const cards=player.getCards("e",card=>card.hasGaintag("sst_xiangzhu"));
					if(cards.length){
						event.card=cards.pop();
					}
					else{
						event.finish();
					}
					"step 1"
					player.chooseTarget(`向筑：将${get.translation(card)}移动到一名其他角色的装备区内`,(card,player,target)=>target!=player&&target.isEmpty(get.subtype(_status.event.getParent().card)),true).set("ai",target=>get.effect(target,_status.event.getParent().card,_status.event.player,_status.event.player));
					"step 2"
					if(result.targets&&result.targets.length){
						const target=result.targets[0];
						player.logSkill("sst_xiangzhu2",target);
						player.$give(card,target,false);
						game.log(player,"的",card,"被移动给了",target);
						target.equip(card).set("delay",true);
						player.addExpose(0.1);
					}
					event.goto(0);
				}
			},
			//Sephiroth
			sst_fenshi:{
				init:player=>{
					if(!Array.isArray(player.storage.sst_fenshi)) player.storage.sst_fenshi=[true,true];
				},
				direct:true,
				trigger:{player:"phaseZhunbeiBegin"},
				content:()=>{
					"step 0"
					event.targets=[];
					player.chooseTarget(get.prompt("sst_fenshi"),"你可以对一名角色造成1点伤害").set("ai",target=>get.damageEffect(target,_status.event.player,_status.event.player));
					"step 1"
					if(result.targets&&result.targets.length){
						targets.push(...result.targets);
						player.logSkill("sst_fenshi",result.targets);
						result.targets[0].damage(player,"nocard");
					}
					else{
						event.goto(7);
					}
					"step 2"
					game.delayx();
					"step 3"
					if(player.storage.sst_fenshi[0]&&!targets.contains(player)){
						player.loseMaxHp();
					}
					else{
						event.goto(5);
					}
					"step 4"
					player.storage.sst_fenshi[0]=false;
					game.log(player,"更改了","#g【焚世】","的描述");
					game.log(player,"删除了","#y｛若你没有指定自己，你减1点体力上限并删除此内容。｝");
					player.popup("更改描述","fire");
					game.delayx();
					"step 5"
					if(player.storage.sst_fenshi[1]&&targets.length>1&&targets[targets.length-2]==targets[targets.length-1]){
						player.loseMaxHp();
					}
					else{
						event.goto(7);
					}
					"step 6"
					player.storage.sst_fenshi[1]=false;
					game.log(player,"更改了","#g【焚世】","的描述");
					game.log(player,"删除了","#y｛若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。｝");
					player.popup("更改描述","water");
					game.delayx();
					"step 7"
					player.chooseTarget(get.prompt("sst_fenshi"),"你可以弃置一名角色两张牌",(card,player,target)=>target.countCards("he")>1).set("ai",target=>{
						const player=_status.event.player;
						let att=get.attitude(player,target);
						if(att<0){
							att=-Math.sqrt(-att);
						}
						else{
							att=Math.sqrt(att);
						}
						return att*lib.card.guohe_copy2.ai.result.target(player,target);
					});
					"step 8"
					if(result.targets&&result.targets.length){
						targets.push(...result.targets);
						player.logSkill("sst_fenshi",result.targets);
						player.discardPlayerCard(`焚世：弃置${get.translation(result.targets[0])}两张牌`,result.targets[0],2,"he",true);
					}
					else{
						event.finish();
					}
					"step 9"
					if(player.storage.sst_fenshi[0]&&!targets.contains(player)){
						player.loseMaxHp();
					}
					else{
						event.goto(11);
					}
					"step 10"
					player.storage.sst_fenshi[0]=false;
					game.log(player,"更改了","#g【焚世】","的描述");
					game.log(player,"删除了","#y｛若你没有指定自己，你减1点体力上限并删除此内容。｝");
					player.popup("更改描述","fire");
					game.delayx();
					"step 11"
					if(player.storage.sst_fenshi[1]&&targets.length>1&&targets[targets.length-2]==targets[targets.length-1]){
						player.loseMaxHp();
					}
					else{
						event.finish();
					}
					"step 12"
					player.storage.sst_fenshi[1]=false;
					game.log(player,"更改了","#g【焚世】","的描述");
					game.log(player,"删除了","#y｛若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。｝");
					player.popup("更改描述","water");
					game.delayx();
				},
				ai:{
					halfneg:true,
					damage:true,
					threaten:2,
					expose:0.2
				}
			},
			sst_xingduo:{
				intro:{
					content:"limited"
				},
				unique:true,
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"星堕",
				animationColor:"thunder",
				trigger:{player:"phaseJieshuBegin"},
				direct:true,
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_xingduo"),[1,3],lib.filter.notMe).set("ai",target=>{
						if(_status.event.player.maxHp<=1) return 0;
						if(target.isTurnedOver()) return get.attitude(_status.event.player,target);
						if(target.hp==1) return 0;
						return get.effect(target,{name:"losehp"},_status.event.player,_status.event.player);
					});
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						player.logSkill("sst_xingduo",event.targets);
						player.awakenSkill("sst_xingduo");
						player.loseMaxHp();
					}
					else{
						event.finish();
					}
					"step 2"
					if(targets.length){
						event.target=targets.shift();
						if(!event.target.isIn()) event.redo();
					}
					else{
						game.delayx();
						event.finish();
					}
					"step 3"
					target.chooseControl().set("ai",()=>{
						if(_status.event.player.isTurnedOver()) return 1;
						if(_status.event.player.hp>4) return 1;
						return 0;
					}).set("choiceList",[`失去${Math.floor(target.hp/2)}点体力`,"翻面"]).set("prompt","星堕：选择一项");
					"step 4"
					if(typeof result.index=="number"){
						switch(result.index){
							case 1:
								target.turnOver();
								break;
							default:
								const num=target.hp/2;
								if(Math.floor(num)) target.loseHp(Math.floor(num));
								break;
						}
					}
					event.goto(2);
				},
				ai:{
					jueqing:true,
					expose:0.2
				}
			},
			//Leaf
			sst_jiliu:{
				derivation:["sst_maosheng","sst_menghuo"],
				forced:true,
				trigger:{source:"damageSource"},
				content:()=>{
					"step 0"
					const num=game.countPlayer(current=>get.distance(player,current)<=1);
					if(num) player.draw(num);
					"step 1"
					player.addTempSkill("sst_jiliu_effect");
					player.addMark("sst_jiliu_effect",1,false);
					"step 2"
					player.removeSkill("sst_jiliu");
					player.popup("sst_jiliu","fire");
					game.log(player,"失去了技能","#g【激流】");
					player.addSkillLog("sst_maosheng");
				}
			},
			sst_jiliu_effect:{
				charlotte:true,
				intro:{
					content:"本回合你计算与其他角色的距离-#"
				},
				onremove:true,
				mod:{
					globalFrom:(from,to,distance)=>distance-from.countMark("sst_jiliu_effect")
				}
			},
			sst_maosheng:{
				forced:true,
				trigger:{player:["useCard","respond"]},
				filter:(event,player)=>game.countPlayer(current=>get.distance(player,current)<=1),
				content:()=>{
					"step 0"
					const max=game.countPlayer(current=>get.distance(player,current)<=1);
					player.chooseTarget(`茂盛：令至多${get.cnNumber(max)}名角色横置（若其已横置，改为弃置其一张牌），然后你失去〖茂盛〗，获得〖猛火〗`,[1,max]).set("ai",target=>-get.attitude(_status.event.player,target));
					"step 1"
					if(result.targets&&result.targets.length){
						event.targets=result.targets.sortBySeat(_status.currentPhase);
						player.line(event.targets,"green");
						player.addExpose(0.2);
						event.num=0;
					}
					else{
						event.goto(4);
					}
					"step 2"
					if(num<targets.length){
						if(!targets[num].isLinked()){
							targets[num].link();
						}
						else{
							player.discardPlayerCard(`茂盛：弃置${get.translation(targets[num])}一张牌`,targets[num],true);
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.removeSkill("sst_maosheng");
					player.popup("sst_maosheng","fire");
					game.log(player,"失去了技能","#g【茂盛】");
					player.addSkillLog("sst_menghuo");
				}
			},
			sst_menghuo:{
				forced:true,
				trigger:{source:"damageBegin2"},
				filter:event=>event.nature!="fire",
				content:()=>{
					trigger.nature="fire";
				},
				group:["sst_menghuo2","sst_menghuo3"]
			},
			sst_menghuo2:{
				forced:true,
				trigger:{player:"useCard"},
				filter:event=>get.name(event.card)=="juedou",
				content:()=>{
					"step 0"
					player.loseHp();
					"step 1"
					if(typeof trigger.baseDamage!="number") trigger.baseDamage=1;
					trigger.baseDamage++;
				}
			},
			sst_menghuo3:{
				forced:true,
				trigger:{global:"dying"},
				filter:(event,player)=>{
					const evt=event.getParent();
					return evt&&evt.name=="damage"&&evt.source==player;
				},
				content:()=>{
					player.removeSkill("sst_menghuo");
					player.popup("sst_menghuo","fire");
					game.log(player,"失去了技能","#g【猛火】");
					player.addSkillLog("sst_jiliu");
				}
			},
			//Kyo Kusanagi
			sst_congyun:{
				usable:1,
				enable:"phaseUse",
				viewAs:{name:"huogong",isCard:true},
				selectCard:-1,
				filterCard:()=>false,
				ai:{
					fireAttack:true,
					result:{
						player:1,
						target:(player,target)=>{
							if(target.hasSkill("huogong2")||target.countCards("h")==0) return 0;
							if(target==player){
								if(typeof _status.event.filterCard=="function"&&
									_status.event.filterCard({name:"huogong"},player,_status.event)) return -1.5;
								if(_status.event.skill){
									const viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=="huogong") return -1.5;
									if(viewAs&&viewAs.name=="huogong") return -1.5;
								}
								return 0;
							}
							return -1.5;
						}
					}
				}
			},
			sst_fuzhuo:{
				trigger:{source:"damageSource"},
				filter:event=>event.nature=="fire",
				check:(event,player)=>{
					if((player.storage.counttrigger&&player.storage.counttrigger.sst_fuzhuo)||!player.isPhaseUsing()||!player.getDamagedHp()) return true;
					return player.hasValueTarget({name:"sha",nature:"fire",isCard:true},false);
				},
				content:()=>{
					"step 0"
					player.addSkill("counttrigger");
					if(!player.storage.counttrigger) player.storage.counttrigger={};
					if(!player.storage.counttrigger[event.name]) player.storage.counttrigger[event.name]=0;
					player.storage.counttrigger[event.name]++;
					player.draw("nodelay");
					if(player.storage.counttrigger[event.name]<=1&&player.isPhaseUsing()){
						event.num=player.getDamagedHp();
					}
					else{
						event.finish();
					}
					"step 1"
					event.num--;
					if(event.num>=0){
						player.chooseUseTarget(`祓濯：视为使用一张火【杀】（剩余${event.num}次）`,{name:"sha",nature:"fire",isCard:true},"nodistance",true,false);
						event.redo();
					}
				}
			},
			//Pauline
			sst_shangzheng:{
				global:"sst_shangzheng2"
			},
			sst_shangzheng2:{
				usable:1,
				enable:"phaseUse",
				filter:(event,player)=>game.hasPlayer(current=>current!=player&&current.hasSkill("sst_shangzheng")&&player.countGainableCards(current,"he",card=>!lib.filter.cardEnabled(card,player)||!lib.filter.cardUsable(card,player)))&&player.hasHistory("useCard",evt=>get.name(evt.card)=="sha"&&evt.getParent("phaseUse")==event.getParent()),
				filterTarget:(card,player,target)=>target!=player&&target.hasSkill("sst_shangzheng"),
				filterCard:(card,player)=>!lib.filter.cardEnabled(card,player)||!lib.filter.cardUsable(card,player),
				discard:false,
				lose:false,
				delay:false,
				content:()=>{
					"step 0"
					player.give(cards,target,true);
					"step 1"
					event.nearests=game.filterPlayer(current=>{
						if(current==player) return false;
						if(!current.countGainableCards(player,"he")) return false;
						const dist=get.distance(player,current);
						if(dist<=1) return true;
						return !game.hasPlayer(current2=>current2!=player&&get.distance(player,current2)<dist);
					}).sortBySeat(_status.currentPhase);
					target.chooseBool(`商政：是否令${get.translation(player)}获得${get.translation(event.nearests)}${event.nearests.length>1?"各":""}一张牌？`).set("ai",()=>{
						const evt=_status.event.getParent();
						const target=evt.player;
						if(get.attitude(_status.event.player,target)<=0) return false;
						return evt.nearests.filter(current=>current.countGainableCards(target,"he")).map(current=>{
							let att=get.attitude(target,current);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							return att*lib.card.shunshou_copy2.ai.result.target(target,current);
						}).reduce((previousValue,currentValue)=>previousValue+currentValue,0)>0;
					});
					"step 2"
					if(result.bool){
						target.line(player,"green");
					}
					else{
						event.finish();
					}
					"step 3"
					player.line(event.nearests,"green");
					player.gainMultiple(event.nearests,"he");
				},
				ai:{
					order:10,
					result:{
						player:(player,target)=>{
							if(!ui.selected.cards.length) return;
							return Math.cbrt(get.attitude(player,target)*get.value(ui.selected.cards[0]));
						}
					}
				}
			},
			sst_yinyuan:{
				usable:1,
				trigger:{player:"damageBegin"},
				filter:(event,player)=>{
					if(!player.countCards()) return false;
					const targets=lib.skill.sst_yinyuan.logTarget(event,player);
					if(!targets.length) return true;
					for(const target of targets){
						if(!target.countCards()) return false;
					}
					return true;
				},
				logTarget:(event,player)=>{
					const targets=game.filterPlayer(current=>get.distance(player,current,"pure")==1);
					targets.add(player);
					return targets.sortBySeat(_status.currentPhase);
				},
				check:(event,player)=>lib.skill.sst_yinyuan.logTarget(event,player).filter(target=>target!=player).map(target=>get.attitude(player,target)).reduce((previousValue,currentValue)=>previousValue-currentValue,-get.damageEffect(event.player,event.source,player))>0,
				content:()=>{
					"step 0"
					lib.skill.sst_yinyuan.logTarget(trigger,player).forEach(target=>target.chooseToDiscard("引援：弃置一张手牌",true));
					"step 1"
					trigger.cancel();
				}
			},
			//Dr. Wily
			sst_zaowu:{
				intro:{
					name:"机器",
					content:"expansion",
					markcount:"expansion"
				},
				onremove:(player,skill)=>{
					const cards=player.getExpansions(skill);
					if(cards.length) player.loseToDiscardpile(cards);
				},
				marktext:"机器",
				locked:false,
				direct:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>player.countCards(),
				content:()=>{
					"step 0"
					player.chooseCard(get.prompt2("sst_zaowu"),[1,Infinity]).set("ai",card=>{
						if(lib.filter.cardEnabled(card,_status.event.player)) return 10;
						if(!player.hasMark("sst_zaowu")&&!ui.selected.cards.length) return get.unuseful3(card);
						return 5-get.useful(card);
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_zaowu");
						player.addToExpansion(result.cards,player,"give").gaintag.add("sst_zaowu");
					}
				},
				group:"sst_zaowu2"
			},
			sst_zaowu_effect:{
				charlotte:true,
				intro:{
					content:"已销毁“机器”名称：$"
				},
				onremove:true,
				mod:{
					cardEnabled:(card,player)=>{
						const list=player.storage.sst_zaowu_effect;
						if(Array.isArray(list)&&list.contains(get.name(card))) return false;
					},
					cardSavable:function(){
						return lib.skill.sst_zaowu_effect.mod.cardEnabled.apply(this,arguments);
					}
				}
			},
			sst_zaowu2:{
				enable:"phaseUse",
				filter:(event,player)=>player.getExpansions("sst_zaowu").length,
				chooseButton:{
					dialog:(event,player)=>ui.create.dialog("造物",player.getExpansions("sst_zaowu"),"hidden"),
					backup:links=>({
						filterTarget:true,
						filterCard:()=>false,
						selectCard:-1,
						card:links[0],
						delay:false,
						content:lib.skill.sst_zaowu2.contentx,
						ai:{
							result:{
								target:(player,target)=>get.damageEffect(target,player,target)
							}
						}
					}),
					prompt:()=>"选择【造物】的目标"
				},
				contentx:()=>{
					"step 0"
					event.card=lib.skill.sst_zaowu2_backup.card;
					event.card._destroy=true;
					game.broadcast(card=>card._destroy=true,event.card);
					"step 1"
					player.addSkill("sst_zaowu_effect");
					player.markAuto("sst_zaowu_effect",[get.name(card)]);
					game.log(card,"被销毁了");
					player.$throw(card);
					player.lose(card,ui.special).set("_triggered",null);
					"step 2"
					game.delayx();
					"step 3"
					target.damage(player,"nocard");
					"step 4"
					game.broadcastAll(ui.clear);
					game.delayx();
				},
				ai:{
					order:1,
					threaten:2,
					result:{
						player:1
					}
				}
			},
			sst_fuqi:{
				skillAnimation:true,
				animationStr:"复起",
				animationColor:"thunder",
				forced:true,
				trigger:{player:"dying"},
				filter:(event,player)=>player.getExpansions("sst_zaowu").length,
				content:()=>{
					"step 0"
					event.cards=player.getExpansions("sst_zaowu");
					event.cards.forEach(card=>{
						card._destroy=true;
						game.broadcast(card=>card._destroy=true,card);
					});
					"step 1"
					player.addSkill("sst_zaowu_effect");
					player.markAuto("sst_zaowu_effect",cards.map(card=>get.name(card)));
					game.log(cards,"被销毁了");
					player.$throw(cards);
					player.lose(cards,ui.special).set("_triggered",null);
					"step 2"
					player.draw(3);
					"step 3"
					if(player.hp<1) player.recover(1-player.hp,"nocard");
					"step 4"
					game.broadcastAll(ui.clear);
				},
				ai:{
					filterDamage:true,
					skillTagFilter:player=>{
						if(!player.hasMark("sst_zaowu")||player.hp>1) return false;
					},
					combo:"sst_zaowu"
				}
			},
			//Kazuya
			sst_chouyu:{
				preHidden:true,
				forced:true,
				usable:1,
				trigger:{global:"damageEnd"},
				filter:event=>!event.sst_chouyu&&event.player.hasSkill("sst_chouyu")&&event.source,
				logTarget:"source",
				content:()=>{
					"step 0"
					if(!trigger.source.hasSkill("sst_chouyu")){
						const card=get.discardPile(card=>get.name(card)=="sha");
						if(card){
							player.gain(card,"gain2");
						}
						else{
							player.chat("无牌可得了吗");
							game.log("但是弃牌堆里面已经没有","#y杀","了！");
						}
					}
					else{
						const card=get.discardPile(card=>get.name(card)=="sha");
						if(card){
							trigger.source.gain(card,"gain2");
						}
						else{
							player.chat("无牌可得了吗");
							game.log("但是弃牌堆里面已经没有","#y杀","了！");
						}
						trigger.set("sst_chouyu",true);
						event.finish();
					}
					"step 1"
					trigger.source.addSkill("sst_chouyu");
					if(trigger.source.hasSkill("sst_chouyu")){
						trigger.source.popup("sst_chouyu");
						game.log(trigger.source,"获得了技能",`#g【${get.translation("sst_chouyu")}】`);
					};
				},
				ai:{
					maixie:true
				}
			},
			sst_xuehai:{
				skillAnimation:"epic",
				animationColor:"thunder",
				skillBlocker:skill=>skill=="sst_chouyu",
				derivation:"sst_luanwu",
				forced:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>!player.storage.sst_xuehai&&!game.hasPlayer(current=>!current.hasSkill("sst_chouyu")),
				content:()=>{
					player.storage.sst_xuehai=true;
					player.addSkillLog("sst_luanwu");
				},
				group:["sst_xuehai2","sst_xuehai3"]
			},
			sst_xuehai2:{
				forced:true,
				trigger:{global:"changeHp"},
				filter:(event,player)=>{
					const evt=event.getParent("sst_luanwu");
					if(!evt||evt.name!="sst_luanwu"||evt.player!=player) return false;
					return event.num<0;
				},
				content:()=>{
					player.draw();
				}
			},
			sst_xuehai3:{
				forced:true,
				trigger:{player:"sst_luanwuAfter"},
				filter:(event,player)=>lib.skill.sst_xuehai3.logTarget(event,player).length,
				logTarget:(event,player)=>game.filterPlayer(current=>{
					if(current==player) return false;
					return !current.hasHistory("sourceDamage",evt=>evt.getParent("sst_luanwu")==event);
				}).sortBySeat(_status.currentPhase),
				content:()=>{
					lib.skill.sst_xuehai3.logTarget(trigger,player).forEach(current=>current.addSkillBlocker("sst_xuehai"));
				}
			},
			sst_luanwu:{
				unique:true,
				enable:"phaseUse",
				limited:true,
				skillAnimation:"epic",
				animationColor:"thunder",
				filterTarget:lib.filter.notMe,
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				content:()=>{
					"step 0"
					player.awakenSkill("sst_luanwu");
					event.current=player.next;
					event.currented=[];
					"step 1"
					event.currented.push(event.current);
					event.current.animate("target");
					event.current.chooseToUse("乱武：使用一张杀或失去1点体力",function(card){
						if(get.name(card)!="sha") return false;
						return lib.filter.filterCard.apply(this,arguments);
					},function(card,player,target){
						if(player==target) return false;
						const dist=get.distance(player,target);
						if(dist>1) if(game.hasPlayer(current=>current!=player&&get.distance(player,current)<dist)) return false;
						return lib.filter.filterTarget.apply(this,arguments);
					}).set("ai2",function(){
						return get.effect_use.apply(this,arguments)+0.01;
					});
					"step 2"
					if(result.bool==false) event.current.loseHp();
					event.current=event.current.next;
					if(event.current!=player&&!event.currented.contains(event.current)){
						game.delay(0.5);
						event.goto(1);
					}
				},
				ai:{
					order:1,
					result:{
						player:player=>{
							if(lib.config.mode=="identity"&&game.zhu.isZhu&&player.identity=="fan") if(game.zhu.hp==1&&game.zhu.countCards("h")<=2) return 1;
							let num=0;
							game.filterPlayer(current=>{
								let att=get.attitude(player,current);
								if(att>0) att=1;
								if(att<0) att=-1;
								if(current!=player&&current.hp<=3){
									if(current.countCards("h")==0){
										num+=att/current.hp;
									}
									else if(current.countCards("h")==1){
										num+=att/2/current.hp;
									}
									else if(current.countCards("h")==2){
										num+=att/4/current.hp;
									}
								}
								if(current.hp==1) num+=att*1.5;
							});
							if(player.hp==1) return -num;
							if(player.hp==2) return -game.players.length/4-num;
							return -game.players.length/3-num;
						}
					}
				}
			},
			//Kraid
			sst_yintong:{
				forced:true,
				preHidden:true,
				trigger:{global:"dyingAfter"},
				filter:event=>event.player&&event.player.isAlive(),
				logTarget:"player",
				content:()=>{
					player.draw();
				}
			},
			sst_gukui:{
				forced:true,
				trigger:{global:["loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]},
				filter:(event,player)=>{
					if(event.getParent("sst_gukui").name=="sst_gukui") return false;
					return player.countCards()&&player.isMaxHandcard(true)&&game.hasPlayer(current=>current!=player&&player.canUse({name:"sha"},current));
				},
				content:()=>{
					"step 0"
					event.num=Math.ceil(player.countCards()/2);
					event.targets=game.filterPlayer(current=>current!=player&&player.canUse({name:"sha"},current,false));
					"step 1"
					if(num&&targets.length){
						event.num--;
						let str=`骨溃：将一张手牌当作无距离限制的【杀】对${get.translation(targets)}`;
						if(targets.length>1) str+="中的一人";
						const next=player.chooseToUse(`${str}使用（剩余${event.num}次）`,true);
						next.set("norestore",true);
						next.set("_backupevent","sst_gukuix");
						next.backup("sst_gukuix");
						next.set("addCount",false);
						next.set("custom",{
							add:{},
							replace:{window:()=>{}}
						});
						next.set("filterTarget",function(card,player,target){
							if(!_status.event.getParent().targets.contains(target)) return false;
							return lib.filter.targetEnabled.apply(this,arguments);
						});
					}
					else{
						event.goto(3);
					}
					"step 2"
					if(result.targets&&result.targets.length) targets.removeArray(result.targets);
					event.goto(1);
					"step 3"
					player.loseMaxHp();
				}
			},
			sst_gukuix:{
				viewAs:{name:"sha"},
				filterCard:card=>get.itemtype(card)=="card",
				position:"hs",
				check:card=>5-get.value(card)
			},
			//Sora
			sst_qixin:{
				preHidden:true,
				direct:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>player.hasCard(card=>lib.filter.cardDiscardable(card,player),"he"),
				content:()=>{
					"step 0"
					player.chooseCardTarget({
						filterCard:function(card){
							if(get.suit(card)!="heart") return false;
							if(get.type(card)!="basic"&&get.type(card)!="trick") return false;
							return lib.filter.cardDiscardable.apply(this,arguments);
						},
						position:"he",
						selectTarget:[1,3],
						ai1:card=>{
							if(game.countPlayer(current=>get.attitude(_status.event.player,current)>0)<2) return 0;
							return 7-get.useful(card);
						},
						ai2:target=>get.sgnAttitude(_status.event.player,target),
						prompt:get.prompt("sst_qixin"),
						prompt2:get.skillInfoTranslation("sst_qixin")
					});
					"step 1"
					if(result.cards&&result.cards.length&&result.targets&&result.targets.length){
						const targets=result.targets.sortBySeat(_status.currentPhase);
						player.logSkill("sst_qixin",targets);
						player.discard(result.cards);
						targets.forEach(target=>{
							if(typeof target.storage.sst_qixin_effect!="object") target.storage.sst_qixin_effect={};
							if(!Array.isArray(target.storage.sst_qixin_effect[player.playerid])) target.storage.sst_qixin_effect[player.playerid]=[];
							target.storage.sst_qixin_effect[player.playerid].addArray(result.cards);
							target.addSkill("sst_qixin_effect");
						});
					}
				},
				ai:{
					expose:0.2
				}
			},
			sst_qixin_effect:{
				mark:true,
				intro:{
					content:storage=>game.findPlayersByPlayerid(Object.keys(storage)).sortBySeat(_status.currentPhase).map(current=>`直到${get.translation(current)}的下个回合开始可以视为使用一次${get.translation(storage[current.playerid].map(card=>get.translation({name:card.name,nature:card.nature,isCard:true})).join("/"))}`).join("<br>")
				},
				enable:"chooseToUse",
				filter:(event,player)=>{
					if(typeof player.storage.sst_qixin_effect!="object") return false;
					for(const current of game.findPlayersByPlayerid(Object.keys(player.storage.sst_qixin_effect))){
						for(const i of player.storage.sst_qixin_effect[current.playerid]){
							if(lib.filter.filterCard({name:i.name,nature:i.nature,isCard:true},player,event)) return true;
						}
					}
					return false;
				},
				prompt:"你可以视为使用一次齐心牌",
				chooseButton:{
					dialog:(event,player)=>ui.create.dialog("齐心",[game.findPlayersByPlayerid(Object.keys(player.storage.sst_qixin_effect)).sortBySeat(_status.currentPhase).map(current=>player.storage.sst_qixin_effect[current.playerid].map(value=>[current,"",value.name,value.nature,value])).reduce((previousValue,currentValue)=>{
						previousValue.push(...currentValue);
						return previousValue;
					},[]),"vcard"],"hidden"),
					filter:(button,player)=>_status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent()),
					backup:links=>({
						filterCard:()=>false,
						selectCard:-1,
						popname:true,
						viewAs:{name:links[0][2],nature:links[0][3],isCard:true},
						sourcePlayer:links[0][0],
						sourceCard:links[0][4],
						onuse:(result,player)=>{
							player.storage.sst_qixin_effect[lib.skill.sst_qixin_effect_backup.sourcePlayer.playerid].remove(lib.skill.sst_qixin_effect_backup.sourceCard);
							if(!game.findPlayersByPlayerid(Object.keys(player.storage.sst_qixin_effect)).some(current=>player.storage.sst_qixin_effect[current.playerid].length)) player.unmarkSkill("sst_qixin_effect");
						}
					}),
					prompt:links=>`视为使用${get.translation(links[0][3])||""}${get.translation(links[0][2])}`
				},
				hiddenCard:(player,name)=>{
					for(const i in player.storage.sst_qixin_effect){
						if(player.storage.sst_qixin_effect[i].some(card=>get.name(card)==name)) return true;
					}
					return false;
				},
				ai:{
					order:10,
					fireAttack:true,
					respondSha:true,
					respondShan:true,
					respondTao:true,
					save:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(typeof player.storage.sst_qixin_effect!="object") return false;
						const cards=game.findPlayersByPlayerid(Object.keys(player.storage.sst_qixin_effect)).map(current=>player.storage.sst_qixin_effect[current.playerid]).flat();
						switch(tag){
							case "respondSha":
								if(!cards.some(card=>get.name(card)=="sha")) return false;
								break;
							case "respondShan":
								if(!cards.some(card=>get.name(card)=="shan")) return false;
								break;
							case "respondTao":
								if(!cards.some(card=>get.name(card)=="tao")) return false;
								break;
							case "save":
								if(!cards.some(card=>get.tag(card,"save"))) return false;
								break;
						}
					},
					result:{
						player:player=>{
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				},
				group:"sst_qixin_effect2"
			},
			sst_qixin_effect2:{
				charlotte:true,
				forceDie:true,
				forced:true,
				popup:false,
				trigger:{global:["phaseBeginStart","die"]},
				filter:(event,player)=>typeof player.storage.sst_qixin_effect=="object"&&Array.isArray(player.storage.sst_qixin_effect[event.player.playerid]),
				content:()=>{
					delete player.storage.sst_qixin_effect[trigger.player.playerid];
					let cleared=true;
					const players=game.findPlayersByPlayerid(Object.keys(player.storage.sst_qixin_effect)).sortBySeat(_status.currentPhase);
					for(const i of players){
						if(player.storage.sst_qixin_effect[i.playerid].length){
							cleared=false;
							break;
						}
					}
					if(cleared) player.removeSkill("sst_qixin_effect");
				}
			},
			sst_gongcun:{
				global:"sst_gongcun2"
			},
			sst_gongcun2:{
				usable:1,
				direct:true,
				trigger:{global:"loseAfter"},
				filter:(event,player)=>{
					if(!game.hasPlayer(current=>current.hasSkill("sst_gongcun"))) return false;
					if(!event.player.isIn()) return false;
					if(!event.hs||!event.es) return false;
					if(!event.hs.length&&event.es.length) return false;
					if(event.player.getNext()!=player&&event.player.getPrevious()!=player) return false;
					if(!event.visible) return false;
					for(const i of event.cards2){
						if(get.suit(i)=="heart") return true;
					}
					return false;
				},
				content:()=>{
					"step 0"
					player.chooseCard(get.prompt("sst_gongcun2",trigger.player),`你可以交给${get.translation(trigger.player)}一张手牌`,card=>lib.filter.canBeGained(card,_status.event.targetx,_status.event.player)).set("ai",card=>{
						const evt=_status.event.getTrigger();
						if(get.name(card)=="du") return Math.cbrt(-get.attitude(_status.event.player,evt.player)*20);
						return Math.cbrt(get.attitude(_status.event.player,evt.player)*get.value(card,evt.player));
					});
					"step 1"
					if(result.cards&&result.cards.length){
						player.logSkill("sst_gongcun2",trigger.player);
						player.give(result.cards,trigger.player);
					}
					else{
						player.storage.counttrigger[event.name]--;
					}
				},
				ai:{
					expose:0.2
				}
			},
			//Pac-Man
			sst_jichang:{
				forced:true,
				trigger:{player:"phaseZhunbeiBegin"},
				content:()=>{
					"step 0"
					event.cards=player.getCards("h",card=>lib.filter.cardDiscardable(card,player));
					if(event.cards.length) player.discard(event.cards);
					"step 1"
					let total=4;
					const types=[];
					event.cards.forEach(card=>{
						const type2=get.type2(card);
						if(!types.contains(type2)){
							types.push(type2);
							total++;
						}
					});
					event.videoId=lib.status.videoId++;
					const func=(id,total)=>{
						const setting=ui.create.dialog(`###饥肠：设定本回合的以下数值###（三项数值相加须等于${total}）`);
						setting.videoId=id;
						//Number of cards
						setting.addText("摸牌阶段额外摸牌数");
						const table=document.createElement("div");
						setting.content.appendChild(table);
						table.classList.add("add-setting");
						table.style.margin="0";
						table.style.width="100%";
						table.style.position="relative";
						for(let i=0;i<=total;i++){
							const td=ui.create.div(".button.tdnode");
							table.appendChild(td);
							setting.buttons.add(td);
							td.innerHTML=`<span>${i}</span>`;
							td.addEventListener(lib.config.touchscreen?"touchend":"click",ui.click.button);
							td.link=["sst_jichang_first",i];
							for(const j in lib.element.button){
								td[j]=lib.element.button[j];
							}
						}
						//Attack range
						setting.addText("攻击范围增加数");
						const table2=document.createElement("div");
						setting.content.appendChild(table2);
						table2.classList.add("add-setting");
						table2.style.margin="0";
						table2.style.width="100%";
						table2.style.position="relative";
						for(let i=0;i<=total;i++){
							const td=ui.create.div(".button.tdnode");
							table2.appendChild(td);
							setting.buttons.add(td);
							td.innerHTML=`<span>${i}</span>`;
							td.addEventListener(lib.config.touchscreen?"touchend":"click",ui.click.button);
							td.link=["sst_jichang_second",i];
							for(const j in lib.element.button){
								td[j]=lib.element.button[j];
							}
						}
						//Times limit
						setting.addText("出牌阶段额外使用【杀】次数");
						const table3=document.createElement("div");
						setting.content.appendChild(table3);
						table3.classList.add("add-setting");
						table3.style.margin="0";
						table3.style.width="100%";
						table3.style.position="relative";
						for(let i=0;i<=total;i++){
							const td=ui.create.div(".button.tdnode");
							table3.appendChild(td);
							setting.buttons.add(td);
							td.innerHTML=`<span>${i}</span>`;
							td.addEventListener(lib.config.touchscreen?"touchend":"click",ui.click.button);
							td.link=["sst_jichang_third",i];
							for(const j in lib.element.button){
								td[j]=lib.element.button[j];
							}
						}
						return setting;
					};
					if(player.isOnline2()) player.send(func,event.videoId,total);
					event.dialog=func(event.videoId,total);
					if(player!=game.me||_status.auto) event.dialog.style.display="none";
					const next=player.chooseButton();
					next.set("dialog",event.videoId);
					next.set("forced",true);
					next.set("filterButton",button=>{
						if(!ui.selected.buttons.length) return true;
						let sum=0;
						const selected=[];
						ui.selected.buttons.forEach(value=>{
							sum+=value.link[1];
							if(!selected.contains(value.link[0])) selected.push(value.link[0]);
						});
						if(selected.contains(button.link[0])) return false;
						if(ui.selected.buttons.length>=2) return sum+button.link[1]==_status.event.total;
						return sum+button.link[1]<=_status.event.total;
					});
					next.set("selectButton",3);
					next.set("complexSelect",true);
					next.set("ai",button=>{
						const player=_status.event.player;
						if(player.hasJudge("lebu")||!game.hasPlayer(current=>get.attitude(player,current)<0)){
							if(button.link[0]=="sst_jichang_first") return button.link[1];
							return -button.link[1];
						}
						if(button.link[0]=="sst_jichang_second"){
							const target=game.findPlayer(current=>!game.hasPlayer(current2=>current2!=current&&get.effect(current2,{name:"sha"},player,player)>get.effect(current,{name:"sha"},player,player)));
							if(!target) return -button.link[1];
							return 5-Math.abs(button.link[1]+1-get.distance(player,target,"attack"));
						}
						if(button.link[0]=="sst_jichang_third"){
							return 5-Math.abs(button.link[1]+1-Math.random()*5);
						}
						return button.link[1]-Math.random()*7;
					});
					next.set("total",total);
					"step 2"
					if(player.isOnline2()) player.send("closeDialog",event.videoId);
					event.dialog.close();
					if(result.links&&result.links.length){
						let sst_jichang_first=0,sst_jichang_second=0,sst_jichang_third=0;
						result.links.forEach(link=>{
							if(link[0]=="sst_jichang_first"){
								sst_jichang_first+=link[1];
							}
							else if(link[0]=="sst_jichang_second"){
								sst_jichang_second+=link[1];
							}
							else if(link[0]=="sst_jichang_third"){
								sst_jichang_third+=link[1];
							}
						});
						game.log(player,"设定的数值：<br>摸牌阶段额外摸牌数：",`#y${sst_jichang_first}`,"<br>攻击范围增加数：",`#y${sst_jichang_second}`,"<br>出牌阶段额外使用【杀】次数：",`#y${sst_jichang_third}`);
						const zeroToTwentyAsCircledNumber=n=>{
							if(n===0){
								return String.fromCharCode(9450);
							}
							else if(n>20||n<0){
								return "?";
							}
							return String.fromCharCode(9311+n);
						};
						player.popup(zeroToTwentyAsCircledNumber(sst_jichang_first)+zeroToTwentyAsCircledNumber(sst_jichang_second)+zeroToTwentyAsCircledNumber(sst_jichang_third),"wood");
						player.chat(`摸牌阶段额外摸牌数：${sst_jichang_first}<br>攻击范围增加数：${sst_jichang_second}<br>出牌阶段额外使用【杀】次数：${sst_jichang_third}`);
						player.storage.sst_jichang_effect=[sst_jichang_first,sst_jichang_second,sst_jichang_third];
						player.addTempSkill("sst_jichang_effect");
					}
				},
				ai:{
					threaten:3,
					nokeep:true,
					nogain:true
				}
			},
			sst_jichang_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:storage=>{
						let str="";
						if(Array.isArray(storage)){
							if(typeof storage[0]=="number") str+=`本回合你的摸牌阶段额外摸${get.cnNumber(storage[0])}张牌`;
							if(typeof storage[0]=="number"&&(typeof storage[1]=="number"||typeof storage[2]=="number")) str+="<br>";
							if(typeof storage[1]=="number") str+=`本回合你的攻击范围+${storage[1]}`;
							if(typeof storage[1]=="number"&&typeof storage[2]=="number") str+="<br>";
							if(typeof storage[2]=="number") str+=`本回合你的出牌阶段使用【杀】次数+${storage[2]}`;
						}
						return str;
					},
					markcount:storage=>{
						let num=0;
						if(Array.isArray(storage)){
							if(typeof storage[0]=="number") num+=storage[0];
							if(typeof storage[1]=="number") num+=storage[1];
							if(typeof storage[2]=="number") num+=storage[2];
						}
						return num;
					}
				},
				mod:{
					attackRange:(player,range)=>{
						if(Array.isArray(player.storage.sst_jichang_effect)&&typeof player.storage.sst_jichang_effect[1]=="number") return range+player.storage.sst_jichang_effect[1];
					},
					cardUsable:(card,player,num)=>{
						if(Array.isArray(player.storage.sst_jichang_effect)&&typeof player.storage.sst_jichang_effect[2]=="number"&&card.name=="sha") return num+player.storage.sst_jichang_effect[2];
					}
				},
				forced:true,
				trigger:{player:"phaseDrawBegin2"},
				filter:(event,player)=>Array.isArray(player.storage.sst_jichang_effect)&&typeof player.storage.sst_jichang_effect[0]=="number"&&!event.numFixed,
				content:()=>{
					trigger.num+=player.storage.sst_jichang_effect[0];
				}
			},
			sst_jiangshang:{
				forced:true,
				trigger:{player:"equipEnd"},
				filter:(event,player)=>get.owner(event.card)&&lib.filter.cardDiscardable(event.card,player),
				content:()=>{
					"step 0"
					player.discard(trigger.card);
					"step 1"
					player.draw(2);
				}
			},
			//Mewtwo
			sst_xiongli:{
				init:player=>{
					player.addSkill("sst_xiongli_effect");
					if(!Array.isArray(player.storage.sst_xiongli)) player.storage.sst_xiongli=[];
					if(!Array.isArray(player.storage.sst_xiongli_previous)) player.storage.sst_xiongli_previous=[];
				},
				intro:{
					content:(storage,player)=>{
						if(!Array.isArray(storage)||!storage.length) return "没有选择条件";
						let str="本轮选择条件：<br>";
						if(storage.contains("sst_xiongli_first")) str+="1. 本轮造成伤害唯一最少的角色<br>";
						if(storage.contains("sst_xiongli_second")) str+="2. 体力唯一最少的角色<br>";
						if(storage.contains("sst_xiongli_third")) str+="3. 装备唯一最少的角色<br>";
						const targets=game.filterPlayer(current=>{
							if(storage.contains("sst_xiongli_first")){
								if(lib.skill.sst_xiongli_effect.isOnlyMin(player)) return current==lib.skill.sst_xiongli_effect.getMin(player);
								return false;
							}
							return (storage.contains("sst_xiongli_second")&&current.isMinHp(true))||(storage.contains("sst_xiongli_third")&&current.isMinEquip(true));
						});
						if(targets.length){
							str+=`满足条件角色：${get.translation(targets)}`;
						}
						else{
							str+="无满足条件角色";
						}
						let checkPlayer=false;
						if(storage.contains("sst_xiongli_first")&&lib.skill.sst_xiongli_effect.isMin(player,player)) checkPlayer=true;
						if((storage.contains("sst_xiongli_second")&&player.isMinHp())||(storage.contains("sst_xiongli_third")&&player.isMinEquip())) checkPlayer=true;
						if(checkPlayer){
							str+="<br>你可以发动〖逆袭〗";
						}
						else{
							str+="<br>你不可以发动〖逆袭〗";
						}
						return str;
					},
					markcount:storage=>{
						if(storage.contains("sst_xiongli_first")) return 1;
						if(storage.contains("sst_xiongli_second")) return 2;
						if(storage.contains("sst_xiongli_third")) return 3;
						return 0;
					}
				},
				forced:true,
				trigger:{global:"roundStart"},
				content:()=>{
					"step 0"
					if(player.storage.sst_xiongli.length){
						const targets=game.filterPlayer(current=>{
							if(player.storage.sst_xiongli.contains("sst_xiongli_first")){
								if(lib.skill.sst_xiongli_effect.isOnlyMin(player)) return current==lib.skill.sst_xiongli_effect.getMin(player);
								return false;
							}
							return (player.storage.sst_xiongli.contains("sst_xiongli_second")&&current.isMinHp(true))||(player.storage.sst_xiongli.contains("sst_xiongli_third")&&current.isMinEquip(true));
						});
						if(!targets.length){
							player.popup("无角色","fire");
							game.log("但是没有角色满足条件！");
						}
						else{
							player.trySkillAnimate("sst_xiongli_animation","sst_xiongli_animation",player.checkShow("sst_xiongli_animation"));
							player.line(targets,"green");
							targets.forEach(target=>target.die({source:player}));
						}
						player.storage.sst_xiongli_previous.length=0;
						player.storage.sst_xiongli_previous.addArray(player.storage.sst_xiongli);
						player.storage.sst_xiongli.length=0;
						player.unmarkSkill("sst_xiongli");
					}
					lib.skill.sst_xiongli_effect.init(player);
					"step 1"
					const list=[];
					const choice=[];
					if(!player.storage.sst_xiongli_previous.contains("sst_xiongli_first")){
						list.push("选项一");
						choice.push("本轮造成伤害唯一最少的角色");
					}
					else{
						choice.push("本轮造成伤害唯一最少的角色（上一轮游戏已选择）");
					}
					if(!player.storage.sst_xiongli_previous.contains("sst_xiongli_second")){
						list.push("选项二");
						choice.push("体力唯一最少的角色");
					}
					else{
						choice.push("体力唯一最少的角色（上一轮游戏已选择）");
					}
					if(!player.storage.sst_xiongli_previous.contains("sst_xiongli_third")){
						list.push("选项三");
						choice.push("装备唯一最少的角色");
					}
					else{
						choice.push("装备唯一最少的角色（上一轮游戏已选择）");
					}
					player.chooseControl(list).set("choiceList",choice).set("ai",()=>{
						const controls=_status.event.controls;
						if(controls.contains("选项二")&&game.hasPlayer(current=>get.attitude(player,current)<0&&current.isMinHp())) return "选项二";
						if(controls.contains("选项三")&&game.hasPlayer(current=>get.attitude(player,current)<0&&current.isMinEquip())) return "选项三";
						return 0;
					}).set("prompt","凶戾：选择一个条件，下一轮游戏开始你杀死满足条件的角色");
					"step 2"
					switch(result.control){
						case "选项一":
							game.log(player,"选择了","#y本轮造成伤害唯一最少的角色");
							player.popup("①","thunder");
							player.chat("1. 本轮造成伤害唯一最少的角色");
							player.storage.sst_xiongli.push("sst_xiongli_first");
							player.markSkill("sst_xiongli");
							game.delayx();
							break;
						case "选项二":
							game.log(player,"选择了","#y体力唯一最少的角色");
							player.popup("②","thunder");
							player.chat("2. 体力唯一最少的角色");
							player.storage.sst_xiongli.push("sst_xiongli_second");
							player.markSkill("sst_xiongli");
							game.delayx();
							break;
						case "选项三":
							game.log(player,"选择了","#y装备唯一最少的角色");
							player.popup("③","thunder");
							player.chat("3. 装备唯一最少的角色");
							player.storage.sst_xiongli.push("sst_xiongli_third");
							player.markSkill("sst_xiongli");
							game.delayx();
							break;
					}
				}
			},
			sst_xiongli_animation:{
				skillAnimation:true,
				animationStr:"凶戾",
				animationColor:"thunder"
			},
			sst_xiongli_effect:{
				charlotte:true,
				sync:player=>game.filterPlayer2(current=>{
					if(typeof player.storage.sst_xiongli_effect[current.playerid]!="number") player.storage.sst_xiongli_effect[current.playerid]=0;
				}),
				valid:player=>{
					lib.skill.sst_xiongli_effect.sync(player);
					const result=Object.assign({},player.storage.sst_xiongli_effect);
					for(const i in result){
						if(!game.findPlayerByPlayerid(i).isIn()) delete result[i];
					}
					return result;
				},
				init:player=>{
					player.storage.sst_xiongli_effect={};
					lib.skill.sst_xiongli_effect.sync(player);
				},
				getMin:player=>{
					lib.skill.sst_xiongli_effect.sync(player);
					const statistic=lib.skill.sst_xiongli_effect.valid(player);
					let target=null;
					let min=Infinity;
					for(const i in statistic){
						if(statistic[i]<min){
							min=statistic[i];
							target=game.findPlayerByPlayerid(i);
						}
					}
					return target;
				},
				isMin:(player,target)=>{
					lib.skill.sst_xiongli_effect.sync(player);
					const statistic=lib.skill.sst_xiongli_effect.valid(player);
					let min=Infinity;
					for(const i in statistic){
						if(statistic[i]<min){
							min=statistic[i];
						}
					}
					return statistic[target.playerid]==min;
				},
				isOnlyMin:player=>{
					lib.skill.sst_xiongli_effect.sync(player);
					const statistic=lib.skill.sst_xiongli_effect.valid(player);
					const min=statistic[lib.skill.sst_xiongli_effect.getMin(player).playerid];
					for(const i in statistic){
						if(statistic[i]==min) return false;
					}
					return true;
				},
				trigger:{global:"damageSource"},
				filter:event=>event.source,
				silent:true,
				content:()=>{
					lib.skill.sst_xiongli_effect.sync(player);
					player.storage.sst_xiongli_effect[trigger.source.playerid]++;
				}
			},
			sst_nixi:{
				direct:true,
				trigger:{player:"phaseJieshuBegin"},
				filter:(event,player)=>game.hasPlayer(current=>{
					if(!Array.isArray(current.storage.sst_xiongli)) return false;
					return (current.storage.sst_xiongli.contains("sst_xiongli_first")&&lib.skill.sst_xiongli_effect.isMin(current,player))||(current.storage.sst_xiongli.contains("sst_xiongli_second")&&player.isMinHp())||(current.storage.sst_xiongli.contains("sst_xiongli_third")&&player.isMinEquip());
				}),
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_nixi")).set("ai",target=>get.damageEffect(target,_status.event.player,_status.event.player));
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_nixi",result.targets);
						result.targets[0].damage(player,"nocard");
					}
					else{
						event.finish();
					}
					"step 2"
					player.draw();
				},
				ai:{
					expose:0.2
				}
			},
			//Olimar
			sst_liedui:{
				mark:true,
				marktext:"☯",
				intro:{
					content:storage=>`转换技，当你需要使用一张${["【杀】","【闪】","【桃】","【酒】","【无懈可击】"][storage-1]}时，你可以弃置一张牌视为使用之，若你弃置的牌与先前弃牌堆顶的牌颜色不同，你可以指定此转换技的状态。`
				},
				init:player=>{
					if(typeof player.storage.sst_liedui!="number") player.storage.sst_liedui=1;
				},
				locked:false,
				mod:{
					targetInRange:card=>{
						if(card.storage&&card.storage.sst_liedui) return true;
					}
				},
				zhuanhuanji:(player,skill)=>{
					if(player.storage[skill]<5){
						player.storage[skill]++;
					}
					else{
						player.storage[skill]=1;
					}
					player.markSkill(skill);
				},
				log:false,
				enable:"chooseToUse",
				viewAs:(cards,player)=>{
					let name=false;
					switch(player.storage.sst_liedui){
						case 1:name="sha";break;
						case 2:name="shan";break;
						case 3:name="tao";break;
						case 4:name="jiu";break;
						case 5:name="wuxie";break;
					}
					if(name) return {name:name,isCard:true,storage:{sst_liedui:true}};
					return null;
				},
				check:card=>{
					const val=5-get.value(card);
					if(ui.discardPile.childNodes.length&&get.color(card)!=get.color(ui.discardPile.lastChild)) return val+2;
					return val;
				},
				ignoreMod:true,
				filterCard:function(){
					return lib.filter.cardDiscardable.apply(this,arguments);
				},
				position:"he",
				filter:(event,player)=>{
					const filter=event.filterCard;
					if(filter({name:"sha",isCard:true,storage:{sst_liedui:true}},player,event)&&player.storage.sst_liedui==1) return true;
					if(filter({name:"shan",isCard:true,storage:{sst_liedui:true}},player,event)&&player.storage.sst_liedui==2) return true;
					if(filter({name:"tao",isCard:true,storage:{sst_liedui:true}},player,event)&&player.storage.sst_liedui==3) return true;
					if(filter({name:"jiu",isCard:true,storage:{sst_liedui:true}},player,event)&&player.storage.sst_liedui==4) return true;
					if(filter({name:"wuxie",isCard:true,storage:{sst_liedui:true}},player,event)&&player.storage.sst_liedui==5) return true;
					return false;
				},
				precontent:()=>{
					"step 0"
					player.logSkill("sst_liedui");
					player.changeZhuanhuanji("sst_liedui");
					if(event.result.cards&&event.result.cards.length) event.color1=get.color(event.result.cards[0]);
					if(ui.discardPile.childNodes.length) event.color2=get.color(ui.discardPile.lastChild);
					player.discard(event.result.cards);
					event.result.card.cards=[];
					event.result.cards=[];
					delete event.result.card.suit;
					delete event.result.card.number;
					"step 1"
					if(typeof event.color1=="string"&&typeof event.color2=="string"&&event.color1!=event.color2){
						player.chooseControl("sha","shan","tao","jiu","wuxie","cancel2").set("ai",()=>{
							const choices=_status.event.controls.filter(value=>value!="cancel2").map(value=>_status.event.player.getUseValue(value));
							const max=Math.max(...choices);
							return choices.reduce((previousValue,currentValue,currentIndex)=>{
								if(currentValue==max) previousValue.push(currentIndex);
								return previousValue;
							},[]).randomGet();
						}).set("prompt","列队：你可以指定此转换技的状态");
					}
					else{
						event.finish();
					}
					"step 2"
					let control=["sha","shan","tao","jiu","wuxie"].indexOf(result.control);
					if(control!=-1){
						control++;
						player.storage.sst_liedui=control;
						player.markSkill("sst_liedui");
						const zeroToTwentyAsCircledNumber=n=>{
							if(n===0){
								return String.fromCharCode(9450);
							}
							else if(n>20||n<0){
								return "?";
							}
							return String.fromCharCode(9311+n);
						};
						player.popup(zeroToTwentyAsCircledNumber(control),"green");
						let str="";
						switch(control){
							case 1:str="①【杀】";break;
							case 2:str="②【闪】";break;
							case 3:str="③【桃】";break;
							case 4:str="④【酒】";break;
							case 5:str="⑤【无懈可击】";break;
						}
						game.log(player,"指定了","#g【列队】","的转换状态为",`#y${str}`);
					}
				},
				ai:{
					respondSha:true,
					respondShan:true,
					save:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.hasCard(card=>lib.filter.cardDiscardable(card,player),"he")) return false;
						switch(tag){
							case "respondSha":
								if(player.storage.sst_liedui!=1) return false;
								break;
							case "respondShan":
								if(player.storage.sst_liedui!=2) return false;
								break;
							case "save":
								if(player.storage.sst_liedui!=3&&player.storage.sst_liedui!=4) return false;
								break;
						}
					},
					order:(item,player)=>{
						if(!player) return;
						const name=["sha","shan","tao","jiu","wuxie"][player.storage.sst_liedui-1];
						return get.order({name:name})+0.1;
					}
				},
				hiddenCard:(player,name)=>{
					if(!player.hasCard(card=>lib.filter.cardDiscardable(card,player),"he")) return false;
					return ["sha","shan","tao","jiu","wuxie"][player.storage.sst_liedui-1]==name;
				}
			},
			sst_chunni:{
				unique:true,
				mark:true,
				limited:true,
				skillAnimation:true,
				animationStr:"春泥",
				animationColor:"soil",
				intro:{
					content:"limited"
				},
				trigger:{player:"phaseZhunbeiBegin"},
				filter:()=>ui.discardPile.childNodes.length,
				check:()=>ui.discardPile.childNodes.length>ui.cardPile.childNodes.length,
				content:()=>{
					"step 0"
					player.awakenSkill("sst_chunni");
					const cards=[];
					while(ui.discardPile.childNodes.length){
						const currentCard=ui.discardPile.removeChild(ui.discardPile.firstChild);
						currentCard.vanishtag.length=0;
						if(get.info(currentCard).vanish||currentCard.storage.vanish){
							currentCard.remove();
							continue;
						}
						cards.push(currentCard);
					}
					cards.randomSort();
					if(cards.length){
						if(player.deckCards&&player.deckCards.length){
							game.cardsDiscard(player.deckCards);
							player.$throw(player.deckCards);
							event.clear=true;
						}
						player.deckCards=cards;
						player.addTempSkill("sst_chunni_effect",{player:"die"});
					}
					game.updateRoundNumber();
					game.log(player,"将",get.cnNumber(cards.length),"张牌置入了","#b自己","的牌库");
					"step 1"
					if(event.clear) game.broadcastAll(ui.clear);
				}
			},
			sst_chunni_effect:{
				charlotte:true,
				mark:true,
				intro:{
					content:(storage,player)=>{
						if(typeof player.deckCards=="object"&&typeof player.deckCards.length=="number") return `共有${get.cnNumber(player.deckCards.length)}张牌`;
						return false;
					},
					markcount:(storage,player)=>{
						if(typeof player.deckCards=="object"&&typeof player.deckCards.length=="number") return player.deckCards.length;
						return 0;
					}
				},
				onremove:player=>{
					game.cardsDiscard(player.deckCards);
					player.$throw(player.deckCards);
					game.log(player,"将",player.deckCards,"置入了弃牌堆");
					delete player.deckCards;
				},
				trigger:{player:"drawBegin"},
				forced:true,
				content:()=>{
					trigger.drawDeck=Math.max(trigger.num,player.deckCards.length);
					const sst_chunni=[];
					for(let i=0;i<trigger.drawDeck;i++){
						sst_chunni.push(player.deckCards[player.deckCards.length-1-i]);
					}
					trigger.set("sst_chunni",sst_chunni);
					if(trigger.num>=player.deckCards.length) player.removeAdditionalSkill("sst_chunni");
				},
				mod:{
					suit:card=>{
						if(card.hasGaintag("sst_chunni")) return "";
					}
				},
				group:"sst_chunni_effect2"
			},
			sst_chunni_effect2:{
				forced:true,
				popup:false,
				trigger:{player:"gainEnd"},
				filter:event=>{
					const evt=event.getParent();
					if(!evt||evt.name!="draw"||!Array.isArray(evt.sst_chunni)) return false;
					for(const card of event.cards){
						if(evt.sst_chunni.contains(card)) return true;
					}
					return false;
				},
				content:()=>{
					const evt=trigger.getParent();
					player.addGaintag(trigger.cards.filter(card=>evt.sst_chunni.contains(card)),"sst_chunni");
				}
			},
			//Marioraz
			sst_buxi:{
				init:player=>{
					if(_status.gameStarted){
						player.logSkill("sst_buxi");
						player.gainMaxHp();
					}
				},
				forced:true,
				trigger:{
					global:"phaseBefore",
					player:["enterGame","changeHp","gainMaxHpEnd","loseMaxHpEnd"]
				},
				filter:(event,player,name)=>{
					if(name=="phaseBefore"||name=="enterGame") return (event.name!="phase"||game.phaseNumber==0)&&player.getHp()==player.maxHp;
					return player.getHp()==player.maxHp;
				},
				content:()=>{
					player.gainMaxHp();
				},
				ai:{
					threaten:1.5
				}
			},
			sst_litu:{
				direct:true,
				trigger:{player:"phaseUseEnd"},
				filter:(event,player)=>{
					let num=0;
					game.getGlobalHistory("cardMove",evt=>{
						if(evt.name=="cardsDiscard"||(evt.name=="lose"&&evt.position==ui.discardPile)) num+=evt.cards.filterInD("d").length;
					});
					return (player.maxHp-player.hp>0||num)&&game.hasPlayer(current=>current.maxHp<player.maxHp);
				},
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_litu"),(card,player,target)=>target.maxHp<player.maxHp).set("ai",target=>Math.abs(get.attitude(_status.event.player,target))+1);
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_litu",result.targets);
						event.target=result.targets[0];
						event.cards=[];
						game.getGlobalHistory("cardMove",evt=>{
							if(evt.name=="cardsDiscard"||(evt.name=="lose"&&evt.position==ui.discardPile)) event.cards.addArray(evt.cards.filterInD("d"));
						});
						const controls=[];
						if(player.maxHp-player.hp>0) controls.push("选项一");
						if(event.cards.length) controls.push("选项二");
						event.target.chooseControl(controls).set("ai",()=>{
							if(_status.event.controls.length<2) return 0;
							const player=_status.event.player;
							const evt=_status.event.getParent();
							const target=evt.player;
							let att=get.attitude(player,target);
							if(att<0){
								att=-Math.sqrt(-att);
							}
							else{
								att=Math.sqrt(att);
							}
							let val=evt.cards.map(card=>get.value(card)).reduce((previousValue,currentValue)=>previousValue+currentValue,0);
							if(val<0){
								val=-Math.sqrt(-val);
							}
							else{
								val=Math.sqrt(val);
							}
							return get.recoverEffect(target,player,player)>att*val?"选项一":"选项二";
						}).set("choiceList",[`令${get.translation(player)}回复1点体力`,`令${get.translation(player)}获得本回合内进入弃牌堆的牌${event.cards.length?`（${get.translation(event.cards)}）`:""}`]);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.control=="选项一"){
						player.recover(target,"nocard");
					}
					else if(result.control=="选项二"){
						player.gain(cards,"gain2");
					}
				},
				ai:{
					threaten:1.5
				}
			},
			sst_zihua:{
				unique:true,
				zhuSkill:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:(event,player)=>player.hasZhuSkill("sst_zihua",player)&&lib.skill.sst_zihua.logTarget(event,player).length,
				logTarget:(event,player)=>game.filterPlayer(current=>current.group==player.group&&current.countDiscardableCards(player,"h")).sortBySeat(_status.currentPhase),
				check:(event,player)=>lib.skill.sst_zihua.logTarget(event,player).map(target=>get.attitude(player,target)).reduce((previousValue,currentValue)=>previousValue+currentValue,0)<0,
				content:()=>{
					"step 0"
					event.targets=lib.skill.sst_zihua.logTarget(trigger,player);
					event.delayed=false;
					event.num=0;
					"step 1"
					player.discardPlayerCard(`自化：弃置${get.translation(targets[num])}一张手牌`,targets[num],"h",true).set("boolline",false).set("delay",num==targets.length-1);
					"step 2"
					if(result.bool) if(num==targets.length-1) event.delayed=true;
					event.num++;
					if(event.num<targets.length) event.goto(1);
					"step 3"
					if(!event.delayed) game.delay();
				},
				ai:{
					expose:0.2
				}
			},
			//Piranha Plant
			sst_tunshi:{
				init:player=>{
					if(typeof player.storage.sst_tunshi_origin!="object") player.storage.sst_tunshi_origin={};
				},
				intro:{
					mark:(dialog,storage,player)=>{
						lib.skill.sst_tunshi.sync(player);
						game.findPlayersByPlayerid(Object.keys(player.storage.sst_tunshi_origin)).sortBySeat(_status.currentPhase).forEach(current=>{
							if(player.storage.sst_tunshi_origin[current.playerid].length){
								dialog.addText(get.translation(current));
								dialog.addAuto(player.storage.sst_tunshi_origin[current.playerid]);
							}
						});
					},
					markcount:"expansion"
				},
				onremove:(player,skill)=>{
					lib.skill.sst_tunshi.sync(player);
					const cards=player.getExpansions(skill);
					if(cards.length){
						game.findPlayersByPlayerid(Object.keys(player.storage.sst_tunshi_origin)).sortBySeat(_status.currentPhase).forEach(current=>{
							if(player.storage.sst_tunshi_origin[current.playerid].length){
								cards.removeArray(player.storage.sst_tunshi_origin[current.playerid]);
								player.give(player.storage.sst_tunshi_origin[current.playerid],current);
							}
						});
						for(const i in player.storage.sst_tunshi_origin){
							delete player.storage.sst_tunshi_origin[i];
						}
					}
					if(cards.length) player.loseToDiscardpile(cards);
				},
				direct:true,
				trigger:{player:"phaseZhunbeiBegin"},
				filter:()=>game.hasPlayer(current=>current.countCards("he")),
				content:()=>{
					"step 0"
					player.chooseTarget(get.prompt2("sst_tunshi"),(card,player,target)=>target.countCards("he")).set("ai",target=>{
						const player=_status.event.player;
						if(player.hasMark("sst_tunshi")&&player.countCards()<player.countMark("sst_tunshi")+target.countCards("he")) return 0;
						return -get.rawAttitude(player,target)*target.countCards("he");
					});
					"step 1"
					if(result.targets&&result.targets.length){
						player.logSkill("sst_tunshi",result.targets);
						const cards=result.targets[0].getCards("he");
						player.addToExpansion(cards,result.targets[0],"give").gaintag.add("sst_tunshi");
						if(!Array.isArray(player.storage.sst_tunshi_origin[result.targets[0].playerid])) player.storage.sst_tunshi_origin[result.targets[0].playerid]=[];
						player.storage.sst_tunshi_origin[result.targets[0].playerid].addArray(cards);
					}
					else{
						event.finish();
					}
					"step 2"
					lib.skill.sst_tunshi.sync(player);
				},
				sync:player=>{
					const cards=player.getExpansions("sst_tunshi");
					game.findPlayersByPlayerid(Object.keys(player.storage.sst_tunshi_origin)).sortBySeat(_status.currentPhase).forEach(current=>{
						for(let i=0;i<player.storage.sst_tunshi_origin[current.playerid].length;i++){
							if(!cards.contains(player.storage.sst_tunshi_origin[current.playerid][i])) player.storage.sst_tunshi_origin[current.playerid].splice(i--,1);
						}
					});
				},
				ai:{
					expose:0.2,
					threaten:1.5
				},
				group:["sst_tunshi2","sst_tunshi3"]
			},
			sst_tunshi2:{
				forced:true,
				trigger:{global:["loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"]},
				filter:(event,player)=>player.countCards()<player.getExpansions("sst_tunshi").length,
				logTarget:(event,player)=>game.filterPlayer(current=>Array.isArray(player.storage.sst_tunshi_origin[current.playerid])&&player.storage.sst_tunshi_origin[current.playerid].length),
				content:()=>{
					player.unmarkSkill("sst_tunshi");
					lib.skill.sst_tunshi.onremove(player,"sst_tunshi");
				}
			},
			sst_tunshi3:{
				forced:true,
				popup:false,
				trigger:{global:"die"},
				filter:(event,player)=>Array.isArray(player.storage.sst_tunshi_origin[event.player.playerid])&&player.storage.sst_tunshi_origin[event.player.playerid].length,
				logTarget:"player",
				content:()=>{
					player.loseToDiscardpile(player.storage.sst_tunshi_origin[trigger.player.playerid]);
					delete player.storage.sst_tunshi_origin[trigger.player.playerid];
					lib.skill.sst_tunshi.sync(player);
				}
			},
			sst_yangfen:{
				frequent:true,
				trigger:{global:"dieAfter"},
				filter:event=>event.player.maxHp,
				logTarget:"player",
				content:()=>{
					player.draw(trigger.player.maxHp);
				},
				ai:{
					threaten:2
				}
			},
			//Bayonetta
			sst_qiangyi:{
				mark:true,
				marktext:"☯",
				intro:{
					content:storage=>`转换技，你使用【杀】时，你可以${["于结算后视为使用一张【杀】","令本阶段使用【杀】无距离和次数限制","于结算后摸两张牌，当前回合结束"][storage-1]}。`
				},
				init:player=>{
					if(typeof player.storage.sst_qiangyi!="number") player.storage.sst_qiangyi=1;
				},
				zhuanhuanji:(player,skill)=>{
					if(player.storage[skill]<3){
						player.storage[skill]++;
					}
					else{
						player.storage[skill]=1;
					}
					player.markSkill(skill);
				},
				trigger:{player:"useCard"},
				filter:event=>get.name(event.card)=="sha",
				check:(event,player)=>{
					const rotation=player.storage.sst_qiangyi||1;
					if(rotation==1) return player.hasValueTarget({name:"sha",isCard:true},false);
					if(rotation==2) return player.isPhaseUsing();
					if(rotation==3) return _status.currentPhase==player&&!player.hasCard(card=>lib.filter.cardEnabled(card,player)&&lib.filter.cardUsable(card,player),"h")||get.attitude(player,_status.currentPhase)<0;
					return false;
				},
				content:()=>{
					const rotation=player.storage.sst_qiangyi||1;
					player.changeZhuanhuanji("sst_qiangyi");
					if(rotation==1){
						trigger.set("sst_qiangyi_effect",1);
						player.addTempSkill("sst_qiangyi_effect");
					}
					else if(rotation==2){
						player.storage.sst_qiangyi_effect2=player;
						player.addTempSkill("sst_qiangyi_effect2",["phaseZhunbeiEnd","phaseJudgeEnd","phaseDrawEnd","phaseUseEnd","phaseDiscardEnd","phaseJieshuEnd"]);
					}
					else if(rotation==3){
						trigger.set("sst_qiangyi_effect",3);
						player.addTempSkill("sst_qiangyi_effect3");
						if(_status.currentPhase!=player) player.addExpose(0.2);
					}
				}
			},
			sst_qiangyi_effect:{
				charlotte:true,
				forced:true,
				popup:false,
				trigger:{player:"useCardAfter"},
				filter:event=>event.sst_qiangyi_effect==1,
				content:()=>{
					player.chooseUseTarget("枪艺：视为使用一张杀",{name:"sha",isCard:true},true,false,"nodistance");
				}
			},
			sst_qiangyi_effect2:{
				charlotte:true,
				mark:"character",
				intro:{
					content:"本阶段使用【杀】无距离和次数限制"
				},
				mod:{
					targetInRange:card=>{
						if(card.name=="sha") return true;
					},
					cardUsable:card=>{
						if(card.name=="sha") return Infinity;
					}
				}
			},
			sst_qiangyi_effect3:{
				charlotte:true,
				forced:true,
				popup:false,
				trigger:{player:"useCardAfter"},
				filter:event=>event.sst_qiangyi_effect==3,
				content:()=>{
					"step 0"
					player.draw(2);
					"step 1"
					const evt=event.getParent("phase");
					if(evt&&evt.name=="phase"){
						game.resetSkills();
						_status.event=evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				}
			},
			sst_moke:{
				enable:"chooseToUse",
				usable:1,
				filterCard:true,
				viewAs:{name:"shan"},
				viewAsFilter:player=>{
					if(!player.countCards("hes")) return false;
				},
				position:"hes",
				check:()=>1,
				onuse:(result,player)=>player.addTempSkill("sst_moke_effect"),
				ai:{
					order:()=>get.order({name:"shan"})+0.1,
					respondShan:true,
					skillTagFilter:(player,tag,arg)=>{
						if(arg!="use") return false;
						if(!player.countCards("hes")) return false;
					},
					effect:{
						target:(card,player,target,current)=>{
							if(get.tag(card,"respondShan")&&current<0) return 0.6;
						}
					}
				}
			},
			sst_moke_effect:{
				charlotte:true,
				silent:true,
				trigger:{player:"useCardBegin"},
				filter:event=>event.skill=="sst_moke",
				content:()=>{
					const next=player.chooseToUse("魔刻：你可以将一张牌当作杀使用");
					event.next.remove(next);
					trigger.after.push(next);
					next.set("norestore",true);
					next.set("_backupevent","sst_moke_effectx");
					next.backup("sst_moke_effectx");
					next.set("addCount",false);
					next.set("custom",{
						add:{},
						replace:{window:()=>{}}
					});
				}
			},
			sst_moke_effectx:{
				viewAs:{name:"sha"},
				filterCard:card=>get.itemtype(card)=="card",
				position:"hes",
				check:card=>8-get.value(card)
			}
		},
		dynamicTranslate:{
			sst_shenfa:player=>{
				if(player.storage.sst_shenfa>1) return "锁定技，你使用【杀】指定目标后，你令此【杀】不可被响应，且此【杀】伤害+1。";
				if(player.storage.sst_shenfa==1) return "锁定技，你使用【杀】指定目标后，你选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
				return "锁定技，你使用【杀】指定目标后，你令目标角色选择一项：此【杀】不可被响应，或此【杀】伤害+1。";
			},
			sst_qixiao:player=>{
				if(player.storage.sst_qixiao) return "出牌阶段限两次，你可以失去2点体力，视为对至多两名角色使用火【杀】（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸两张牌。";
				return "出牌阶段限一次，你可以失去1点体力，视为对一名角色使用火【杀】（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸一张牌。";
			},
			sst_chixing:player=>`你使用的最后一张牌为红色的回合结束后，你可以令至多｛<span class="bluetext">${player.getBraces()}</span>｝名角色将手牌数调整到与你另外指定的一名角色相等。`,
			sst_diebu:player=>{
				if(player.storage.sst_diebu) return `转换技，你可以视为使用一张①【杀】<span class="bluetext">②【闪】</span>。`;
				return `转换技，你可以视为使用一张<span class="bluetext">①【杀】</span>②【闪】。`;
			},
			sst_guaibi:player=>`每轮限｛<span class="bluetext">${player.getBraces()}</span>｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。`,
			sst_shenbi:player=>{
				if(!Array.isArray(player.storage.sst_shenbi)||!Array.isArray(player.storage.sst_shenbi_ready)) return `你可以将手牌数调整至比当前回合角色少1，视为使用或打出一张无距离限制的【杀】，然后当你以此法使用或打出【杀】时，你选择未选择过的一项：<span class="bluetext">1. 你使用的下一张【杀】伤害基数+1；</span><span class="bluetext">2. 此【杀】不可被响应；</span><span class="bluetext">3. 失去1点体力。</span>然后若均已选择过或你体力值为1，重置此技能。`;
				let str="你可以将手牌数调整至比当前回合角色少1，视为使用或打出一张无距离限制的【杀】";
				if(!player.storage.sst_shenbi_ready.length){
					str+="。";
				}
				else{
					str+="，然后当你以此法使用或打出【杀】时，你选择未选择过的一项：";
					player.storage.sst_shenbi_ready.forEach((value,index)=>{
						switch(value){
							case "下一张杀伤害基数+1":
								str+=`${player.storage.sst_shenbi.contains(value)?`<span class="bluetext">`:`<span style="opacity:0.5">`}1. 你使用的下一张【杀】伤害基数+1`;
								break;
							case "此杀不可被响应":
								str+=`${player.storage.sst_shenbi.contains(value)?`<span class="bluetext">`:`<span style="opacity:0.5">`}2. 此【杀】不可被响应`;
								break;
							case "失去1点体力":
								str+=`${player.storage.sst_shenbi.contains(value)?`<span class="bluetext">`:`<span style="opacity:0.5">`}3. 失去1点体力`;
								break;
						}
						if(index==player.storage.sst_shenbi_ready.length-1){
							str+="。</span>";
						}
						else{
							str+="；</span>";
						}
					});
					str+="然后若均已选择过或你体力值为1，重置此技能。";
				}
				return str;
			},
			sst_xuanyi:player=>{
				if(player.storage.sst_xuanyi) return `转换技，出牌阶段限一次，你可以与①一名角色<span class="bluetext">②牌堆顶的一张牌</span>拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰<span class="bluetext">②雷电伤害</span>。`;
				return `转换技，出牌阶段限一次，你可以与<span class="bluetext">①一名角色</span>②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点<span class="bluetext">①火焰</span>②雷电伤害。`;
			},
			sst_juezhan:player=>{
				if(!Array.isArray(player.storage.sst_juezhan)) return `锁定技，<span class="bluetext">｛你带有「伤害」标签的牌均视为【杀】。｝</span><span class="bluetext">｛你使用牌不能指定与你距离1以外的目标。｝</span><span class="bluetext">｛你的装备区被废除。｝</span>`;
				if(!player.storage.sst_juezhan[0]&&!player.storage.sst_juezhan[1]&&!player.storage.sst_juezhan[2]) return `<span style="opacity:0.5">锁定技，｛你带有「伤害」标签的牌均视为【杀】。｝｛你使用牌不能指定与你距离1以外的目标。｝｛你的装备区被废除。｝</span>`;
				let str="锁定技，";
				if(player.storage.sst_juezhan[0]) str+=`<span class="bluetext">｛你带有「伤害」标签的牌均视为【杀】。｝</span>`;
				if(player.storage.sst_juezhan[1]) str+=`<span class="bluetext">｛你使用牌不能指定与你距离1以外的目标。｝</span>`;
				if(player.storage.sst_juezhan[2]) str+=`<span class="bluetext">｛你的装备区被废除。｝</span>`;
				return str;
			},
			sst_fenshi:player=>{
				let str="准备阶段各限一次：1. 你可以对一名角色造成1点伤害；2. 你可以弃置一名角色两张牌。";
				if(!Array.isArray(player.storage.sst_fenshi)||player.storage.sst_fenshi[0]) str+=`<span class="bluetext">｛若你没有指定自己，你减1点体力上限并删除此内容。｝</span>`;
				if(!Array.isArray(player.storage.sst_fenshi)||player.storage.sst_fenshi[1]) str+=`<span class="bluetext">｛若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。｝</span>`;
				return str;
			},
			sst_xuelun:player=>{
				if(typeof player.storage.sst_xuelun!="number") return `转换技，你视为拥有<span class="bluetext">①〖茕途〗</span>②〖圣罚〗③〖勇魂〗，发动上述技能时转换。每完成一轮转换，你将手牌补至手牌上限。`;
				let str="转换技，你视为拥有";
				str+=player.storage.sst_xuelun==1?`<span class="bluetext">①〖茕途〗</span>`:"①〖茕途〗";
				str+=player.storage.sst_xuelun==2?`<span class="bluetext">②〖圣罚〗</span>`:"②〖圣罚〗";
				str+=player.storage.sst_xuelun==3?`<span class="bluetext">③〖勇魂〗</span>`:"③〖勇魂〗";
				return `${str}，发动上述技能时转换。每完成一轮转换，你将手牌补至手牌上限。`;
			},
			sst_liedui:player=>{
				if(typeof player.storage.sst_liedui!="number") return `转换技，当你需要使用一张<span class="bluetext">①【杀】</span>②【闪】③【桃】④【酒】⑤【无懈可击】时，你可以弃置一张牌视为使用之，若你弃置的牌与先前弃牌堆顶的牌颜色不同，你可以指定此转换技的状态。`;
				let str="转换技，当你需要使用一张";
				str+=player.storage.sst_liedui==1?`<span class="bluetext">①【杀】</span>`:"①【杀】";
				str+=player.storage.sst_liedui==2?`<span class="bluetext">②【闪】</span>`:"②【闪】";
				str+=player.storage.sst_liedui==3?`<span class="bluetext">③【桃】</span>`:"③【桃】";
				str+=player.storage.sst_liedui==4?`<span class="bluetext">④【酒】</span>`:"④【酒】";
				str+=player.storage.sst_liedui==5?`<span class="bluetext">⑤【无懈可击】</span>`:"⑤【无懈可击】";
				return `${str}时，你可以弃置一张牌视为使用之，若你弃置的牌与先前弃牌堆顶的牌颜色不同，你可以指定此转换技的状态。`;
			},
			sst_qiangyi:player=>{
				if(typeof player.storage.sst_qiangyi!="number") return `转换技，你使用【杀】时，你可以<span class="bluetext">①于结算后视为使用一张【杀】</span>②令本阶段使用【杀】无距离和次数限制③于结算后摸两张牌，当前回合结束。`;
				let str="转换技，你使用【杀】时，你可以";
				str+=player.storage.sst_qiangyi==1?`<span class="bluetext">①于结算后视为使用一张【杀】</span>`:"①于结算后视为使用一张【杀】";
				str+=player.storage.sst_qiangyi==2?`<span class="bluetext">②令本阶段使用【杀】无距离和次数限制</span>`:"②令本阶段使用【杀】无距离和次数限制";
				str+=player.storage.sst_qiangyi==3?`<span class="bluetext">③于结算后摸两张牌，当前回合结束</span>`:"③于结算后摸两张牌，当前回合结束";
				return `${str}。`;
			}
		},
		characterReplace:{},
		translate:{
			//Character
			sst_mario:"马力欧",
			sst_link:"林克",
			sst_yoshi:"耀西",
			sst_wario:"瓦力欧",
			sst_villager:"村民",
			sst_zelda:"塞尔达",
			sst_ganondorf:"加侬多夫",
			sst_dr_mario:"马力欧医生",
			sst_palutena:"帕露蒂娜",
			sst_marth:"马尔斯",
			sst_rosalina:"罗莎塔",
			sst_zero_suit_samus:"零装甲萨姆斯",
			sst_luigi:"路易吉",
			sst_bowser:"酷霸王",
			sst_peach:"碧姬公主",
			sst_byleth_female:"贝雷丝",
			sst_byleth_male:"贝雷特",
			sst_massy:"Massy",
			sst_samus:"萨姆斯",
			sst_ridley:"利德雷",
			sst_dark_samus:"黑暗萨姆斯",
			sst_mr_game_watch:"Mr. Game & Watch",
			sst_mario_not_mary:"MNM",
			sst_yumikohimi:"柚子",
			sst_haine:"海涅",
			sst_terry:"特瑞",
			sst_simon:"西蒙",
			sst_incineroar:"炽焰咆哮虎",
			sst_greninja:"甲贺忍蛙",
			sst_kirby:"卡比",
			sst_king_k_rool:"库鲁鲁王",
			sst_donkey_kong:"咚奇刚",
			sst_richter:"里希特",
			sst_pokemon_trainer_red:"赤红",
			sst_isabelle:"西施惠",
			sst_daisy:"黛西公主",
			sst_meta_knight:"魅塔骑士",
			sst_little_mac:"小麦克",
			sst_oc:"OC",
			sst_mr_8:"八爷",
			sst_dark_link:"暗黑林克",
			sst_kyuukou:"鸿渐",
			sst_windier:"翎烈",
			sst_rentianshu:"任天鼠",
			sst_srf:"Srf",
			sst_bowser_jr:"酷霸王Jr.",
			sst_koopalings:"酷霸王7人帮",
			sst_ryu:"隆",
			sst_ken:"肯",
			sst_waluigi:"瓦路易吉",
			sst_master_hand:"大师之手",
			sst_ike:"艾克",
			sst_miumiu:"缪缪",
			sst_toon_link:"卡通林克",
			sst_wolf:"沃鲁夫",
			sst_young_link:"幼年林克",
			sst_ocarina_of_time_link:"时之笛林克",
			sst_spring_man:"弹簧人",
			sst_joker:"Joker",
			sst_rex:"莱克斯",
			sst_cuphead_mugman:"茶杯头＆马克杯人",
			sst_mega_man:"洛克人",
			sst_captain_falcon:"飞隼队长",
			sst_jigglypuff:"胖丁",
			sst_lucario:"路卡利欧",
			sst_pichu:"皮丘",
			sst_steve:"史蒂夫",
			sst_ma:"马老师",
			sst_feiji:"飞机",
			sst_sonic:"索尼克",
			sst_hero:"勇者",
			sst_fox:"火狐",
			sst_alex:"艾莉克斯",
			sst_min_min:"面面",
			sst_pikachu:"皮卡丘",
			sst_falco:"佛克",
			sst_enderman:"末影人",
			sst_sephiroth:"萨菲罗斯",
			sst_pokemon_trainer_leaf:"碧蓝",
			sst_kyo_kusanagi:"草薙京",
			sst_pauline:"宝琳",
			sst_dr_wily:"威利博士",
			sst_kazuya:"一八",
			sst_kraid:"克雷德",
			sst_sora:"索拉",
			sst_pac_man:"吃豆人",
			sst_mewtwo:"超梦",
			sst_olimar:"皮克敏＆欧力马＆阿尔福",
			sst_marioraz:"升哥",
			sst_piranha_plant:"吞食花",
			sst_bayonetta:"蓓优妮塔",
			//Character ab.
			sst_dr_mario_ab:"马力欧",
			sst_zero_suit_samus_ab:"萨姆斯",
			sst_mr_game_watch_ab:"代码人",
			sst_king_k_rool_ab:"库鲁鲁",
			sst_koopalings_ab:"7人帮",
			sst_toon_link_ab:"林克",
			sst_young_link_ab:"林克",
			sst_ocarina_of_time_link_ab:"林克",
			sst_joker_ab:"雨宫莲",
			sst_cuphead_mugman_ab:"杯子兄弟",
			sst_olimar_ab:"皮克敏",
			//Identity mode skill
			sst_jueyi:"决意",
			sst_jueyi_info:"锁定技，你使用牌指定目标时，若其手牌数大于你，你摸一张牌，令此牌不可被目标响应。",
			sst_qingyong:"倾勇",
			sst_qingyong_info:"出牌阶段开始时，你可以摸一张牌，然后你可以将一张牌当作【杀】对一名其他角色使用（无距离限制，不计入使用次数）。",
			sst_tanshi:"贪食",
			sst_tanshi_info:"其他角色摸牌阶段摸牌时，若其手牌数大于你，你可以获得该角色所摸的牌。",
			sst_haoduo:"豪夺",
			sst_haoduo_info:"当你不于〖豪夺〗流程内获得或失去手牌后，若你的手牌数为全场最少，你可以与手牌最多的角色交换手牌。",
			sst_huandai:"还贷",
			sst_huandai_effect:"还贷",
			sst_huandai_info:"准备阶段，你可以令一名其他角色选择是否交给你任意张手牌，若其选择是，则结束阶段，若你本回合使用牌数不小于其交给你的牌数，其摸等量的牌，否则你受到其造成的1点伤害。",
			sst_anzhi:"安智",
			sst_anzhi_info:"一名角色使用牌时，若该角色于本回合内使用超过X张牌，你可以弃置其一张牌。（X为你的装备栏数）",
			sst_yinjie:"印结",
			sst_yinjie2:"印结",
			sst_yinjie_effect:"印结",
			sst_yinjie_info:"其他角色的准备阶段，若其体力值不小于你，你可以废除一个装备栏并弃置所有手牌令你与其相互距离为1，然后该角色本回合内使用牌不能指定除你外角色为目标。若如此做，本回合结束阶段，你获得其所有牌。",
			sst_qinwei:"亲卫",
			sst_qinwei_info:"主公技，锁定技，你视为拥有与你距离最近的其他本势力角色装备效果（【木牛流马】除外）。",
			sst_chengli:"逞力",
			sst_chengli_backup:"逞力",
			sst_chengli_info:"若你已受伤，你可以将X+1张牌当作任意一张基本牌或普通锦囊牌使用。（X为你本回合使用牌的次数，若处于回合外则+1）",
			sst_huoluan:"祸乱",
			sst_huoluan2:"祸乱",
			sst_huoluan_info:"锁定技，结束阶段，若你未受伤，你失去1点体力；当你失去最后的手牌后，你减1点体力上限。",
			sst_yane:"延厄",
			sst_yane_info:"主公技，本势力角色的准备阶段，你可以对其造成1点伤害，令其摸两张牌。",
			sst_quji:"祛疾",
			sst_quji_info:"牌堆顶的牌始终对你可见；每回合限一次，一名角色使用牌时，你可以将牌堆顶一张与之花色相同的牌置入弃牌堆，或弃置一张与之花色相同的手牌，抵消之。",
			sst_qiji:"奇迹",
			sst_qiji_info:"出牌阶段每种选项各限一次：1. 你可以翻面，令一名角色摸三张牌；2. 你可以弃置三张牌，令一名角色翻面。",
			sst_shengbing:"圣兵",
			sst_shengbing_effect:"圣兵",
			sst_shengbing_effect2:"圣兵",
			sst_shengbing_info:"你失去装备区内的牌后，你可以将其置入一名其他角色的装备区，然后该角色须弃置一张牌且下一个出牌阶段可以额外使用一张【杀】。",
			sst_hanmang:"寒芒",
			sst_hanmang_info:"锁定技，你对一名角色造成伤害时，若你计算与该角色的距离与你的攻击范围相同，你令此伤害+1。",
			sst_jianbu:"剑步",
			sst_jianbu_less:"剑步-",
			sst_jianbu_more:"剑步+",
			sst_jianbu_info:"摸牌阶段，你可以：1. 少摸一张牌，本回合你计算与其他角色的距离-1；2. 多摸一张牌，本回合你计算与其他角色的距离+1。",
			sst_fuguo:"复国",
			sst_fuguo2:"复国",
			sst_fuguo_info:"主公技，准备阶段，与你势力相同的其他角色可以交给你一张牌。",
			sst_xingchen:"星尘",
			sst_xingchen_info:"每当你的手牌因弃置而进入弃牌堆前，你可以将这些牌任意分配给其他角色，然后当前回合角色摸一张牌。",
			sst_zhuansheng:"转生",
			sst_zhuansheng_info:"限定技，一名角色死亡前，你可以弃置你区域内的所有牌，令其改为变更武将牌，将体力上限调整至与新的武将牌相同，然后回复体力至上限的一半。",
			sst_guangsuo:"光索",
			sst_guangsuo2:"光索",
			sst_guangsuo_info:"你使用【杀】结算完成后，你可以横置目标。你的回合内，已横置的其他角色不能使用或打出牌。",
			sst_qingying:"轻影",
			sst_qingying_effect:"轻影",
			sst_qingying_info:"出牌阶段限一次，你可以弃置场上的一张牌，若你以此法弃置了你区域内的牌，你摸两张牌且本回合使用牌无距离和次数限制。",
			sst_que:"驱厄",
			sst_que_info:"准备阶段，你可以观看一名其他角色的手牌，然后获得其中至多X+1张黑色牌。（X为你已损失的体力值）",
			sst_guiyun:"诡运",
			sst_guiyun_effect:"诡运",
			sst_guiyun_info:"锁定技，回合结束阶段，若你于本回合内未使用和弃置过任何牌，取消你即将受到的所有伤害直到你的下一个准备阶段。",
			sst_xiduo:"袭夺",
			sst_xiduo_effect:"袭夺",
			sst_xiduo_info:"准备阶段，你可以令所有体力值小于你的角色选择一项：1. 令你获得其一张牌；2. 本回合你对其使用牌无距离和次数限制且其非锁定技失效。",
			sst_xiongao:"雄傲",
			sst_xiongao_info:"锁定技，若你的手牌数不小于体力值，你不能响应其他角色使用的牌。",
			sst_yujun:"驭军",
			sst_yujun1:"驭军",
			sst_yujun2:"驭军",
			sst_yujun_info:"主公技，本势力角色需要使用【杀】时，经你允许后，其可以将你的一张手牌当作【杀】使用。",
			sst_yujun_faq:"*",
			sst_yujun_faq_info:"主公技，本势力角色需要使用【杀】时，经你允许后，其观看你的手牌，然后可以选择你一张手牌并由你打出，其将此牌当作【杀】使用。",
			sst_hongyan:"红颜",
			sst_hongyan_info:"锁定技，你区域内的♠牌和♠判定牌均视为♥。",
			sst_yice:"议策",
			sst_yice_info:"你成为基本牌或普通锦囊牌的目标时，你可以与一名不是目标的角色同时展示并交换一张手牌，若展示时颜色相同，此牌对你无效；不同，该角色摸一张牌。",
			sst_qiuyuan:"求援",
			sst_qiuyuan2:"求援",
			sst_qiuyuan_info:"主公技，你成为带有「伤害」标签的锦囊或【杀】的目标前，其他本势力角色可以摸一张牌，将目标改为自己。",
			sst_potian:"破天",
			sst_potian_effect:"破天",
			sst_potian_info:"准备阶段，你可以重铸任意张花色不同的牌，然后你令你使用的【杀】伤害值基数为X直到回合结束（X为你以此法置入弃牌堆的基本牌数量）。",
			sst_shenjiao:"身教",
			sst_shenjiao_effect:"身教",
			sst_shenjiao_info:"你重铸的牌进入弃牌堆前，你可以将这些牌交给一名其他角色，若这些牌是因〖破天〗重铸的，你令该角色于其下一个回合内拥有〖破天〗。",
			sst_yanchuan:"言传",
			sst_yanchuan_info:"出牌阶段限一次，你可以交给一名其他角色一张牌，然后你摸X张牌（X为你此前使用此技能指定该角色的次数）。",
			sst_tianmai:"天脉",
			sst_tianmai_info:"限定技，一名其他角色的濒死阶段，你可以令其将体力回复至与本回合开始相同，其重置武将牌，当前回合结束，由该角色的回合开始一个新的轮次。",
			sst_shenfa:"神罚",
			sst_shenfa_info:"锁定技，你使用【杀】指定目标后，你令目标角色选择一项：此【杀】不可被响应，或此【杀】伤害+1。",
			sst_shenwu:"神悟",
			sst_shenwu_info:"锁定技，结束阶段，若你本回合内未造成过伤害，你摸一张牌，然后若〖神罚〗不为最高级，你减1点体力上限，升级〖神罚〗。",
			sst_shenwu_append:`<span style="font-family: yuanli">*〖神罚〗二级：改为由自己选择一项效果。三级：改为同时具有两种效果。</span>`,
			sst_shenwu_faq:"*",
			sst_shenwu_faq_info:"〖神罚〗二级：改为由自己选择一项效果。三级：改为同时具有两种效果。",
			sst_qiongtu:"茕途",
			sst_qiongtu2:"茕途",
			sst_qiongtu3:"茕途",
			sst_qiongtu_effect:"茕途",
			sst_qiongtu_info:"锁定技，每当你造成一次伤害，本局游戏你的摸牌阶段摸牌数+1；每当你于弃牌阶段弃置一张牌，本局游戏你的攻击范围+1；每当你使用牌被响应，本局游戏你的体力上限+1（以上三项本局游戏均至多+3）。然后你可以删除〖绝战〗一个｛｝内的内容。",
			sst_juezhan:"绝战",
			sst_juezhan_info:"锁定技，｛你带有「伤害」标签的牌均视为【杀】。｝｛你使用牌不能指定与你距离1以外的目标。｝｛你的装备区被废除。｝",
			sst_baozheng:"暴征",
			sst_baozheng2:"暴征",
			sst_baozheng_info:"锁定技，摸牌阶段，你放弃摸牌，失去1点体力，获得X名其他角色区域内的各一张牌（X为你已损失的体力值）；本回合内你可以将这些牌当作【杀】使用。",
			sst_furan:"复燃",
			sst_furan_info:"锁定技，当你处于濒死状态时，弃置所有手牌，将体力回复至1点，减1点体力上限。",
			sst_yingliu:"影流",
			sst_yingliu_info:"锁定技，你于准备阶段后执行一个额外的摸牌阶段与出牌阶段。",
			sst_shunxing:"瞬形",
			sst_shunxing_draw_extra:"摸影",
			sst_shunxing_use_extra:"出影",
			sst_shunxing_draw:"摸牌",
			sst_shunxing_use:"出牌",
			sst_shunxing_info:"锁定技，弃牌阶段结束时，若你于此阶段弃置了牌，你废除一个阶段，然后将场上一张装备移动到你的装备区，否则你恢复一个阶段。",
			sst_shunxing_append:`<span style="font-family: yuanli">*可废除/恢复阶段：摸牌阶段〖影流〗、出牌阶段〖影流〗、摸牌阶段、出牌阶段。</span>`,
			sst_shunxing_faq:"*",
			sst_shunxing_faq_info:"可废除/恢复阶段：摸牌阶段〖影流〗、出牌阶段〖影流〗、摸牌阶段、出牌阶段。",
			sst_shenpan:"审判",
			sst_shenpan_animation:"审判",
			sst_shenpan_info:`你使用杀或普通锦囊牌指定唯一目标后，你可以判定，若判定结果：<br>
				为1，你失去1点体力；<br>
				为2，你弃置一张牌；<br>
				为3，此牌不可响应；<br>
				为4，你对其造成1点伤害；<br>
				为5，你对其造成1点雷电伤害；<br>
				为6，你对其造成1点火焰伤害；<br>
				为7，你回复1点体力；<br>
				为8，你令其翻面；<br>
				为9，你对其造成3点伤害。`,
			sst_qixiao:"奇嚣",
			sst_qixiao2:"奇嚣",
			sst_qixiao_info:"出牌阶段限一次，你可以失去1点体力，视为对一名角色使用火【杀】（不受使用次数限制，不计入使用次数）。你每以此法造成伤害后，摸一张牌。",
			sst_xuansha:"喧杀",
			sst_xuansha_effect:"喧杀",
			sst_xuansha_info:"觉醒技，准备阶段，若你的体力值为1，你加1点体力上限，然后修改〖奇嚣〗描述，且本回合你的手牌均视为【桃】。",
			sst_xuansha_append:`<span style="font-family: yuanli">*“一”修改为“两”，“1”修改为“2”，“两名角色”修改为“至多两名角色”。</span>`,
			sst_xuansha_faq:"*",
			sst_xuansha_faq_info:"“一”修改为“两”，“1”修改为“2”，“两名角色”修改为“至多两名角色”。",
			sst_yingji:"鹰击",
			sst_yingji_info:"出牌阶段限一次，你可以令一名其他角色摸X-1张牌，视为对其使用一张不受使用次数限制且不计入次数的【杀】。（X为你计算与其的距离）。",
			sst_huxiao:"虎啸",
			sst_huxiao_info:"一名角色使用【杀】时，你可以弃置一张红色牌，为此【杀】增加一个目标。",
			sst_yiqing:"移情",
			sst_yiqing_info:"锁定技，你使用牌指定唯一目标角色后，若其不是你上一张牌指定的目标，你摸一张牌。",
			sst_mingxi:"明析",
			sst_mingxi_info:"出牌阶段结束时，若你于此阶段内至少使用了两张牌且：1. 目标均不同；2. 类别均不同；3. 花色均不同；你每满足一项，可展示一名角色的手牌。",
			sst_elang:"饿狼",
			sst_elang_effect:"饿狼",
			sst_elang_info:"准备阶段，你可以视为对一名手牌数不小于你的角色使用一张【决斗】，若如此做，此【决斗】流程结束后，你可以获得打出的所有【杀】。",
			sst_paoxiao:"咆哮",
			sst_paoxiao_info:"锁定技，你使用【杀】无出牌阶段次数限制，每当你于本回合使用第二张【杀】时，你可以摸一张牌。",
			sst_shengfa:"圣罚",
			sst_shengfa_effect:"圣罚",
			sst_shengfa_info:"其他角色的准备阶段，你可以摸一张牌；若如此做，此回合结束阶段，若该角色于本回合内：未造成伤害，你受到1点伤害；造成了伤害，你对其造成1点伤害。",
			sst_shengbian:"圣鞭",
			sst_shengbian_info:"锁定技，你的攻击范围为你的手牌数。",
			sst_weihe:"威吓",
			sst_weihe_effect:"威吓",
			sst_weihe_info:"锁定技，你使用【杀】对一名角色造成伤害后，你令该角色即将造成的伤害-1直至其下个回合结束。",
			sst_fuchou:"复仇",
			sst_fuchou_effect:"复仇",
			sst_fuchou_card:"复仇",
			sst_fuchou_card2:"复仇",
			sst_fuchou_card3:"复仇",
			sst_fuchou_info:"每轮游戏开始时，你可以令自己本轮不能响应牌，若如此做，本轮你受到伤害后，你可以将造成伤害的牌置于你的武将牌上。你可以将这些牌如手牌般使用或打出，你使用这些牌造成伤害时，此伤害+1。",
			sst_huanbian:"幻变",
			sst_huanbian2:"幻变",
			sst_huanbian3:"幻变",
			sst_huanbian_info:"每回合每个牌名限一次，你可以将一张牌当作你使用的上一张基本牌或普通锦囊牌使用。",
			sst_yingxi:"影袭",
			sst_yingxi_info:"你受到伤害前，你可以弃置伤害来源的一张牌。",
			sst_qushi:"取噬",
			sst_qushi_info:"你对一名角色造成伤害后，你可以摸一张牌，或获得该角色的一个没有技能标签的技能直到你受到伤害后。",
			sst_xinghuo:"星火",
			sst_xinghuo2:"星火",
			sst_xinghuo_info:"其他角色死亡后，其可以令你摸一张牌或回复1点体力。",
			sst_badao:"霸岛",
			sst_badao_info:"准备阶段，你可以获得一名其他角色区域内的一张牌，然后攻击范围内包含你的角色可以依次以你为目标使用一张基本牌。",
			sst_jinjia:"金甲",
			sst_jinjia_info:"锁定技，每当你受到1点伤害时，你令此伤害减1，若此前你于本回合以此法减少过伤害，你翻面，失去〖金甲〗。",
			sst_baochui:"爆锤",
			sst_baochui2:"爆锤",
			sst_baochui_effect:"爆锤",
			sst_baochui_info:"出牌阶段限一次，你使用带有「伤害」标签的牌指定唯一目标时，你可以令其伤害值基数为X+1；然后若此牌没有造成伤害，本局游戏你的手牌上限-1。（X为你本回合失去牌的数量除以2且向上取整）",
			sst_xuelun:"血轮",
			sst_xuelun_info:"转换技，你视为拥有①〖茕途〗②〖圣罚〗③〖勇魂〗，发动上述技能时转换。每完成一轮转换，你将手牌补至手牌上限。",
			sst_xuelun_qiongtu:"茕途",
			sst_xuelun_qiongtu_info:"锁定技，每当你造成一次伤害，本局游戏你的摸牌阶段摸牌数+1；每当你于弃牌阶段弃置一张牌，本局游戏你的攻击范围+1；每当你使用牌被响应，本局游戏你的体力上限+1（以上三项本局游戏均至多+3）。然后你可以删除〖绝战〗一个｛｝内的内容。",
			sst_xuelun_shengfa:"圣罚",
			sst_xuelun_shengfa_info:"其他角色的准备阶段，你可以摸一张牌；若如此做，此回合结束阶段，若该角色于本回合内：未造成伤害，你受到1点伤害；造成了伤害，你对其造成1点伤害。",
			sst_xuelun_yonghun:"勇魂",
			sst_xuelun_yonghun_info:"若你使用带有「伤害」标签的牌未对唯一目标造成伤害，你可以正面向上破军1，然后若你未以此法破军带有「伤害」标签的牌，你的手牌上限+1且本回合可以额外使用一张【杀】。",
			sst_shengxi:"圣袭",
			sst_shengxi_info:"一名角色造成伤害后，你可以询问其是否获得你〖血轮〗当前技能（不可获得已有技能）直到其发动此技能后。",
			sst_xiandu:"先读",
			sst_xiandu2:"先读",
			sst_xiandu3:"先读",
			sst_xiandu_info:"一名其他角色的出牌阶段开始时，你可以扣置一张手牌，于该角色本回合第一次使用牌时展示。若这两张牌的类别：相同，你可以对其造成1点伤害或摸两张牌；不同，其对你造成1点伤害。出牌阶段结束时，你将此牌置入弃牌堆。",
			sst_wenxu:"温恤",
			sst_wenxu_effect:"温恤",
			sst_wenxu_info:"一名其他角色于其回合内使用基本牌或普通锦囊牌结算后，你可以获得此牌，然后令此角色本回合使用【杀】的次数+1。若如此做，本回合结束阶段，若其使用【杀】的次数未达上限，你受到其造成的1点伤害。",
			sst_mihu:"迷糊",
			sst_mihu_info:"锁定技，若你已受伤，你使用牌指定唯一目标时判定，若结果为♠，目标改为其上家，若结果为♣，目标改为其下家。",
			sst_renqing:"任情",
			sst_renqing_effect:"任情",
			sst_renqing_info:"你的回合内，判定阶段结束后，你的每个主要阶段开始前，你可以将其更改为一个其他主要阶段。若如此做，本回合结束时，若本回合没有弃牌阶段，你失去1点体力。",
			sst_renqing_faq:"*",
			sst_renqing_faq_info:"你的回合内，不以此法执行的摸牌阶段，出牌阶段，弃牌阶段开始前，你可以跳过此阶段，改为从上述其他两个阶段选择一个执行。若如此做，本回合结束时，若本回合没有执行过弃牌阶段，你失去1点体力。",
			sst_manchan:"蛮缠",
			sst_manchan_effect:"蛮缠",
			sst_manchan_info:"当你受到伤害后，你可以弃置一半手牌（向下取整），然后你可以于伤害来源的下个回合内发动〖任情〗。",
			sst_canyun:"残云",
			sst_canyun_effect:"残云",
			sst_canyun_effect2:"残云",
			sst_canyun_info:"出牌阶段，你可以弃置一张牌（不得与本回合以此法弃置过的牌的花色相同），令所有角色本回合不能使用或打出与此牌花色相同的牌，然后视为使用一张【决斗】。",
			sst_douhun:"斗魂",
			sst_douhun_effect:"斗魂",
			sst_douhun_effect_sha:"斗魂",
			sst_douhun_effect_direct:"斗魂",
			sst_douhun_info:"锁定技，准备阶段，你令你计算与其他角色的距离为1直到回合结束，然后其他角色需依次以你为目标使用一张【杀】（无距离限制），否则本回合不能响应你使用的牌。以此法对你使用【杀】的角色计算与你的距离为1直到你的下个回合开始。",
			sst_juejing:"绝境",
			sst_juejing_info:"锁定技，每当你获得或失去牌后，将你的手牌数摸至或弃置至四张。",
			sst_baling:"霸凌",
			sst_baling_effect:"霸凌",
			sst_baling_info:"你攻击范围内的角色的准备阶段，你可以令其选择一项：1. 受到你造成的1点伤害，然后其本回合下次造成的伤害+1；2. 你获得其一张牌。",
			sst_yingzi:"英姿",
			sst_yingzi_info:"锁定技，摸牌阶段摸牌时，你多摸一张牌；你的手牌上限为你的体力上限。",
			sst_geliao:"鸽了",
			sst_geliao_effect:"鸽了",
			sst_geliao_info:"你可以跳过你的出牌阶段并交给一名其他角色任意张手牌，然后令你和该角色获得〖享乐〗直到你的下个回合开始。",
			sst_xiangle:"享乐",
			sst_xiangle_info:"锁定技，当其他角色使用【杀】指定你为目标时，其需弃置一张基本牌，否则此【杀】对你无效。",
			sst_jingyue:"镜月",
			sst_jingyue_effect:"镜月",
			sst_jingyue_info:"一名其他角色的准备阶段，你可以失去1点体力，若如此做，该角色于本回合出牌阶段内使用的牌结算后，你将其置于你的武将牌上，然后此回合的结束阶段，你选择一项：1. 以该角色为唯一目标依次使用这些牌（目标不合法则置入弃牌堆）；2. 获得这些牌。",
			sst_jianxiang:"渐翔",
			sst_jianxiang_effect:"渐翔",
			sst_jianxiang_info:"锁定技，你的结束阶段结束后，你本局游戏计算与其他角色的距离-2。",
			sst_baochao:"爆炒",
			sst_baochao_effect:"爆炒",
			sst_baochao_info:"一名角色使用【杀】或【桃】时，你可以令你本局游戏计算与其他角色的距离+1，若如此做，此牌基数+1。",
			sst_chixing:"赤行",
			sst_chixing_info:"你使用的最后一张牌为红色的回合结束后，你可以令至多｛1｝名角色将手牌数调整到与你另外指定的一名角色相等。",
			sst_chuanxiao:"传笑",
			sst_chuanxiao_info:"锁定技，每轮游戏开始时，若你使用的最后一张牌为红色，你令｛｝内数值+1。",
			sst_jilve:"辑略",
			sst_jilve_effect:"辑略",
			sst_jilve_info:"一名其他角色的出牌阶段开始时，你可以令其观看并获得你任意张手牌，然后该角色本回合计算与其他角色的距离-X（X为其以此法获得你的牌的数量），若因此其与场上所有其他角色距离为1，你摸两张牌。",
			sst_yuanchuan:"源传",
			sst_yuanchuan_info:"锁定技，你死亡后，所有被〖辑略〗指定过的角色摸三张牌。",
			sst_diebu:"蝶步",
			sst_diebu_info:"转换技，你可以视为使用一张①【杀】②【闪】。",
			sst_bielian:"别恋",
			sst_bielian_effect:"别恋",
			sst_bielian_info:"你使用一张牌结算后，若此牌不为虚拟牌，你可以摸一张牌，然后本回合不能使用或打出与此结算后的牌的类别相同的牌。",
			sst_guaibi:"怪笔",
			sst_guaibi_info:"每轮限｛1｝次，一张【杀】指定目标前，你可以弃置一名角色的两张牌，令其成为此【杀】的使用者，然后该角色可以为此【杀】重新指定目标。",
			sst_daonao:"捣闹",
			sst_daonao2:"捣闹",
			sst_daonao_info:"锁定技，每当你造成一次伤害，｛｝内数值+1；每当你受到1点伤害，｛｝内数值-1（至少为0）。",
			sst_shimo:"施魔",
			sst_shimo_info:"准备阶段，你可以失去1点体力，令一名角色摸或弃置一张牌（若其此前未被此技能指定过，则改为两张）。",
			sst_qiebao:"窃宝",
			sst_qiebao_info:"出牌阶段限一次，你可以减1点体力上限，视为使用一张【顺手牵羊】。",
			sst_duzhi:"渎职",
			sst_duzhi_effect:"渎职",
			sst_duzhi_info:"锁定技，结束阶段，若你本回合未发动过〖施魔〗或〖窃宝〗，你不能响应其他角色使用的牌直到你的下回合开始。",
			sst_tandao:"探道",
			sst_tandao_effect:"探道",
			sst_tandao_info:"锁定技，摸牌阶段，你改为展示牌堆顶的四张牌，然后选择获得其中的【杀】或非【杀】的牌。若你连续选择前者，你本回合使用【杀】没有次数限制；若你连续选择后者，你可以额外获得一张展示牌。",
			sst_bodong:"波动",
			sst_bodong_info:"锁定技，你使用牌无距离限制。",
			sst_yanyang:"焰扬",
			sst_yanyang2:"焰扬",
			sst_yanyang_info:"出牌阶段，你可以令一名手牌数不小于你的角色弃置一张牌，若弃置的是【杀】，你受到其造成的X点伤害。（X为本回合你发动此技能的次数）",
			sst_shenglong:"升龙",
			sst_shenglong_info:"锁定技，与你距离最近的其他角色不能响应你使用的牌。",
			sst_zhamou:"诈谋",
			sst_zhamou_info:"出牌阶段限一次，你可以令一名其他角色弃置你一张手牌，若为黑色，视为对其使用一张任意普通锦囊牌，然后你选择一项：1. 收回此牌；2. 令此技能视为此出牌阶段未发动过。",
			sst_zhuzai:"主宰",
			sst_zhuzai2:"主宰",
			sst_zhuzai3:"主宰",
			sst_zhuzai_info:"一名角色的准备阶段，你可以展示其一张手牌。若为基本牌或普通锦囊牌，此角色本回合使用此牌时你可以为其增加一个目标。结束阶段，若此角色本回合未使用此牌，你可以对其造成1点伤害。",
			sst_zhixu:"秩序",
			sst_zhixu_info:"主公技，锁定技，你对本势力角色发动〖主宰〗时，将“你可以展示其一张手牌”改为“你可以观看其手牌并展示其一张手牌”。",
			sst_tugu:"突固",
			sst_tugu_backup:"突固",
			sst_tugu_info:"每回合限一次，你可以将一张不带有「伤害」标签的牌当作一张带有「伤害」标签的基本牌或普通锦囊牌使用。",
			sst_qichang:"绮裳",
			sst_qichang_effect:"绮裳",
			sst_qichang_effect2:"绮裳",
			sst_qichang_info:"准备阶段，你可以令你本回合手牌上限-1，然后视为装备了一张你声明的装备牌（【木牛流马】除外，不可替换原有装备），直到你的下回合开始。",
			sst_qichang_faq:"*",
			sst_qichang_faq_info:"准备阶段，你可以令你本回合手牌上限-1，然后视为装备一张装备牌（【木牛流马】除外，不可替换原有装备，不能弃置，被弃置或获得）。若如此做，你的回合开始时或失去此牌后，销毁之。",
			sst_shizhu:"拾珠",
			sst_shizhu_info:"弃牌阶段，你可以令一名其他角色弃置与你数量相同的牌，或其他角色的弃牌阶段，你可以弃置与其等量的牌；然后你可以从此阶段进入弃牌堆的牌中选择任意张对你或其使用。",
			sst_shizhu_faq:"*",
			sst_shizhu_faq_info:"你/其他角色的弃牌阶段结束时，你可以令一名其他角色/你可以弃置与你/其于此阶段弃置牌等量的牌，若如此做，你可以从此阶段进入弃牌堆的牌中选择任意张对你或其使用。",
			sst_yufeng:"御风",
			sst_yufeng_effect:"御风",
			sst_yufeng_info:"一名角色的准备阶段，你可以弃置一张手牌，若如此做，本回合此角色与此牌颜色相同的牌花色均视为此牌花色。",
			sst_chihang:"驰航",
			sst_chihang2:"驰航",
			sst_chihang_effect:"驰航",
			sst_chihang_info:"一名角色的出牌阶段开始时，其可以展示并交给你一张牌（若为你则无需交给牌）。若如此做，此出牌阶段内，其使用或打出牌时，若与此牌花色：相同，其将手牌补至体力上限；不同，其须失去1点体力或结束出牌阶段。",
			sst_xishou:"袭狩",
			sst_xishou_effect:"袭狩",
			sst_xishou_info:"出牌阶段，若你手牌上限不为0，你可以令你本回合手牌上限和计算与其他角色的距离均-1，然后你将手牌补至体力上限。若如此做，你每于弃牌阶段弃置一张牌，你失去1点体力。",
			sst_shishi:"时逝",
			sst_shishi_info:"锁定技，结束阶段，若你未受伤，你弃置一名角色的一张牌；若你已受伤，你视为使用一张【杀】，若此【杀】未造成伤害，你将武将牌变更为【时光的笛音·林克】 。",
			sst_jiamian:"假面",
			sst_jiamian_info:"此武将牌登场时，你获得一张武将牌置于一旁，称为“假面”。你可以弃置一张“假面”，发动场上与“假面”同势力角色的一个没有技能标签的技能，然后获得一张新的“假面”。",
			sst_jiamian_append:`<span style="font-family: yuanli">*斗势力或神势力的“假面”视为与任意角色同势力。</span>`,
			sst_jiamian_faq:"*",
			sst_jiamian_faq_info:"斗势力或神势力的“假面”视为与任意角色同势力。",
			sst_shisu:"时溯",
			sst_shisu2:"时溯",
			sst_shisu_info:"锁定技，摸牌阶段，你改为将手牌摸至X张（X为你的体力值+2）。摸牌阶段结束时，若你于摸牌阶段没有摸牌，你将武将牌变更为【时光的笛音·幼年林克】。",
			sst_yongfeng:"勇锋",
			sst_yongfeng_info:"摸牌阶段摸牌时，你可以少摸任意张牌，视为对攻击范围内等量角色依次使用一张【杀】。",
			sst_shenbi:"神臂",
			sst_shenbi2:"神臂",
			sst_shenbi_effect:"神臂",
			sst_shenbi_info:"你可以将手牌数调整至比当前回合角色少1，视为使用或打出一张无距离限制的【杀】。当你以此法使用或打出【杀】时，你选择未选择过的一项：1. 你使用的下一张【杀】伤害基数+1；2. 此【杀】不可被响应；3. 失去1点体力。然后若均已选择过或你体力值为1，重置此技能。",
			sst_lanbo:"蓝波",
			sst_lanbo2:"蓝波",
			sst_lanbo_info:"你可以弃置超出你手牌上限张牌或删除〖神臂〗的一个选项，视为使用一张【闪】。",
			sst_daoxin:"盗心",
			sst_daoxin_info:"锁定技，你使用带有「伤害」标签的牌指定目标后，目标角色摸一张牌，然后若其手牌数不小于你，你观看其手牌并获得所有红色牌。",
			sst_fanni:"反逆",
			sst_fanni_info:"出牌阶段限一次，你可以调换体力值与手牌数，若体力因此超出上限，防止超出上限的数值并视为依次使用等量张【杀】。",
			sst_qianban:"牵绊",
			sst_qianban2:"牵绊",
			sst_qianban3:"牵绊",
			sst_qianban4:"牵绊",
			sst_qianban_info:"锁定技，当你失去装备区内的武器牌后，你获得此牌。只要你的装备区有武器牌，你加1点体力上限，摸牌阶段摸牌数+1。结束阶段，若你的装备区没有武器牌，你弃置场上的一张牌。",
			sst_tanyun:"探云",
			sst_tanyun_info:"每回合限一次，准备阶段或结束阶段，你可以将弃牌堆最上方的一张你指定类别的牌置于牌堆顶。",
			sst_zhuizhai:"追债",
			sst_zhuizhai_effect:"追债",
			sst_zhuizhai_effect2:"追债",
			sst_zhuizhai_info:"每轮游戏开始时，你可以令你攻击范围内任意名角色各摸一张牌，若如此做，当本轮这些角色受到伤害后，伤害来源可以获得其两张牌。",
			sst_fanfei:"翻飞",
			sst_fanfei_info:"当你成为红色牌的目标时，你可以弃置一张牌令此牌对你无效，然后对手牌数大于你的一名角色造成1点伤害。",
			sst_guangpao:"光炮",
			sst_guangpao_info:"出牌阶段限一次，你可以弃置两张同名牌并对一名其他角色造成1点伤害，然后若你手牌中没有同名牌，你可以展示手牌并摸一张牌。",
			sst_tewu:"特武",
			sst_tewu2:"特武",
			sst_tewu_info:"锁定技，一名其他角色死亡后，其须指定另一名角色，你对该角色造成伤害时弃置其一张牌。",
			sst_jijing:"急竞",
			sst_jijing2:"急竞",
			sst_jijing_effect:"急竞",
			sst_jijing_info:"出牌阶段，你可以弃置所有手牌（至少一张），并摸比弃置牌数少一的牌，然后你计算与其他角色的距离-1。结束阶段，若你与其他角色距离均为1，你摸两张牌或回复1点体力，然后重置此技能的距离计算。",
			sst_yinyao:"音谣",
			sst_yinyao_info:"准备阶段，你可以展示并弃置一张手牌，然后从你下家开始到你上家为止，每名角色须依次展示与其上家所展示的牌花色或点数相同的牌（若其没有手牌则跳过），否则其翻面并结束此流程。",
			sst_anke:"安可",
			sst_anke2:"安可",
			sst_anke_info:"一名已翻面角色的回合开始前，其可以交给你一张手牌，然后其翻回正面。",
			sst_bodao:"波导",
			sst_bodao_info:"你使用牌指定目标后，你可以令目标角色除非弃置X张牌，否则不能响应此牌。（X为你已损失的体力值）",
			sst_juyuan:"聚元",
			sst_juyuan_effect:"聚元",
			sst_juyuan_info:"锁定技，你的回合内，每有一张黑色牌进入弃牌堆，你本回合攻击范围+1；每有一张红色牌进入弃牌堆，你本回合使用【杀】次数上限+1。",
			sst_tieyan:"贴颜",
			sst_tieyan_info:"准备阶段，你可以将等同于你体力值的牌置于牌堆顶，然后横置你和你已损失体力值名其他角色。",
			sst_gaoya:"高压",
			sst_gaoya_info:"锁定技，结束阶段，若你的手牌数小于体力值，你须判定一次【闪电】，若你未因此受到伤害，你摸三张牌。",
			sst_tankuang:"探矿",
			sst_tankuang_backup:"探矿",
			sst_tankuang_info:"出牌阶段，你可以按花色或类别举荐一张牌，其间若本回合亮出的牌超过十张，中止此流程且本回合不能再发动此技能，然后你受到1点伤害。",
			sst_fumiao:"伏妙",
			sst_fumiao_info:"你的回合内，一名角色受到伤害后，失去体力后或回复体力后，你可以将手牌数调整至与其体力值相同。若你因此弃置了牌，你可以将一张牌当作无距离限制的【杀】使用。",
			sst_huayu:"化雨",
			sst_huayu_info:"主公技，出牌阶段，你可以将一张【杀】交给一名其他本势力角色，然后你可以摸一张牌。",
			sst_xuhuang:"虚晃",
			sst_xuhuang2:"虚晃",
			sst_xuhuang_info:"每回合限一次，你使用【杀】指定目标后，或你成为【杀】的目标后，你可以猜测此【杀】是否造成伤害，结算后公布结果，若你猜中，你摸两张牌，否则你弃置两张牌。",
			sst_jibu:"疾步",
			sst_jibu_info:"若你本轮还没有执行过回合，你可以提前执行你本轮的回合。",
			sst_juechen:"绝尘",
			sst_juechen2:"绝尘",
			sst_juechen_info:"你的回合内，你使用牌可以增加一个本轮未执行过回合的角色为目标；你的回合外，其他角色使用牌可以增加本轮已执行过回合的你为目标。",
			sst_songmo:"诵魔",
			sst_songmo_effect:"诵魔",
			sst_songmo_info:"一名角色的出牌阶段开始时，若你的手牌上限不为0，你可以令你的手牌上限-1并弃置超出上限张牌，然后视为其使用你指定的一张普通锦囊牌。",
			sst_yonghun:"勇魂",
			sst_yonghun_effect:"勇魂",
			sst_yonghun_effect2:"勇魂",
			sst_yonghun_effect3:"勇魂",
			sst_yonghun_info:"若你使用带有「伤害」标签的牌未对唯一目标造成伤害，你可以正面向上破军1，然后若你未以此法破军带有「伤害」标签的牌，你的手牌上限+1且本回合可以额外使用一张【杀】。",
			sst_powei:"破围",
			sst_powei_info:"摸牌阶段，你可以令摸牌数-1（若场上已受伤角色超过一半，改为令摸牌数-2），然后亮出牌堆顶的等量牌且可以使用之（不能指定自己为目标）。你重复此流程直到你没有以此法使用牌。",
			sst_qiaoqi:"巧器",
			sst_qiaoqi_bg:`<span class="bluetext">辎</span>`,
			sst_qiaoqi2:"巧器·木牛",
			sst_qiaoqi2_info:"将一张手牌扣置于你装备区里的“巧器”牌下，然后可以将此装备移动到一名其他角色的装备区里。",
			sst_qiaoqi4:"巧器",
			sst_qiaoqi7:"巧器·流马",
			sst_qiaoqi_info:"出牌阶段限一次，你可以展示一张红色手牌并扣置于场上一张装备牌上，称为“辎”；有“辎”的装备牌视为拥有【木牛流马】的效果。",
			sst_fumo:"附魔",
			sst_fumo2:"附魔",
			sst_fumo3:"附魔",
			sst_fumo_info:"锁定技，若你的装备区内有：<br>武器牌，你可以指定你造成的非连环伤害的属性；<br>防具牌，攻击范围内不包含你的角色不能对你造成伤害；<br>坐骑牌，坐骑数值翻倍；<br>宝物牌，〖巧器〗无次数限制。",
			sst_longbo:"龙搏",
			sst_longbo_info:"你使用红色牌对上X家、使用黑色牌对下X家无次数限制；你使用牌无距离限制。（X为存活玩家数的一半且向上取整）",
			sst_fengcu:"凤蹴",
			sst_fengcu_sha:"凤蹴·杀",
			sst_fengcu_shan:"凤蹴·闪",
			sst_fengcu_effect:"凤蹴",
			sst_fengcu_info:"你可以将两张颜色不同的牌当作【杀】或【闪】使用或打出。若以此法使用的牌造成了伤害，你本轮造成伤害后获得目标一张牌；若以此法响应了牌，你获得被响应的牌。",
			sst_fulei:"伏雷",
			sst_fulei_info:"每回合每个区域限一次，你区域内的牌进入弃牌堆后，你可以用其中一张牌与一名其他角色拼点，然后你选择令没赢的角色受到你造成的1点雷电伤害或判定一次【闪电】。",
			sst_duoshan:"躲闪",
			sst_duoshan_info:"当你受到伤害时，你可以弃置你一个区域内的所有牌（至少一张），然后防止此伤害。",
			sst_juao:"倨傲",
			sst_juao_effect:"倨傲",
			sst_juao_info:"准备阶段，你可以摸不多于你体力值的任意张牌。若如此做，直到你的下个准备阶段，你的体力值低于此次摸牌数时，你死亡。",
			sst_lingying:"灵影",
			sst_lingying_info:"锁定技，当你成为【杀】或带有「伤害」标签的锦囊的目标时，若其与你距离大于1，此牌对你无效。",
			sst_fankui:"反窥",
			sst_fankui_info:"锁定技，每回合每张牌限一次，你进入一名角色的攻击范围时，你获得其区域里的一张牌。",
			sst_xiangzhu:"向筑",
			sst_xiangzhu2:"向筑",
			sst_xiangzhu_info:"准备阶段，你可以将一名其他角色装备区里的一张牌移动到你的装备区里。结束阶段，你将以此法获得的牌移动到一名其他角色的装备区内。",
			sst_fenshi:"焚世",
			sst_fenshi_info:"准备阶段各限一次：1. 你可以对一名角色造成1点伤害；2. 你可以弃置一名角色两张牌。｛若你没有指定自己，你减1点体力上限并删除此内容。｝｛若你一回合两次指定了同一名角色，你减1点体力上限并删除此内容。｝",
			sst_xingduo:"星堕",
			sst_xingduo_info:"限定技，结束阶段，你可以减1点体力上限，令至多三名其他角色选择失去一半体力（向下取整）或翻面。",
			sst_jiliu:"激流",
			sst_jiliu_effect:"激流",
			sst_jiliu_info:"锁定技，当你造成伤害后，你摸X张牌（X为与你距离1以内的角色数），本回合你计算与其他角色的距离-1，然后你失去〖激流〗，获得〖茂盛〗。",
			sst_jiliu_append:`<span style="font-family: yuanli">〖茂盛〗锁定技，当你使用或打出牌时，令至多X名角色横置（若其已横置，改为弃置其一张牌），然后你失去〖茂盛〗，获得〖猛火〗。（X为与你距离1以内的角色数）<br>
				〖猛火〗锁定技，你造成的伤害均视为火焰伤害；当你使用【决斗】时，你失去1点体力，此决斗造成的伤害+1；当一名角色因你造成的伤害进入濒死状态时，你失去〖猛火〗，获得〖激流〗。</span>`,
			sst_maosheng:"茂盛",
			sst_maosheng_info:"锁定技，当你使用或打出牌时，令至多X名角色横置（若其已横置，改为弃置其一张牌），然后你失去〖茂盛〗，获得〖猛火〗。（X为与你距离1以内的角色数）",
			sst_maosheng_append:`<span style="font-family: yuanli">〖猛火〗锁定技，你造成的伤害均视为火焰伤害；当你使用【决斗】时，你失去1点体力，此决斗造成的伤害+1；当一名角色因你造成的伤害进入濒死状态时，你失去〖猛火〗，获得〖激流〗。<br>
				〖激流〗锁定技，当你造成伤害后，你摸X张牌（X为与你距离1以内的角色数），本回合你计算与其他角色的距离-1，然后你失去〖激流〗，获得〖茂盛〗。</span>`,
			sst_menghuo:"猛火",
			sst_menghuo2:"猛火",
			sst_menghuo3:"猛火",
			sst_menghuo_info:"锁定技，你造成的伤害均视为火焰伤害；当你使用【决斗】时，你失去1点体力，此决斗造成的伤害+1；当一名角色因你造成的伤害进入濒死状态时，你失去〖猛火〗，获得〖激流〗。",
			sst_menghuo_append:`<span style="font-family: yuanli">〖激流〗锁定技，当你造成伤害后，你摸X张牌（X为与你距离1以内的角色数），本回合你计算与其他角色的距离-1，然后你失去〖激流〗，获得〖茂盛〗。<br>
				〖茂盛〗锁定技，当你使用或打出牌时，令至多X名角色横置（若其已横置，改为弃置其一张牌），然后你失去〖茂盛〗，获得〖猛火〗。（X为与你距离1以内的角色数）</span>`,
			sst_congyun:"丛云",
			sst_congyun_info:"出牌阶段限一次，你可以视为使用一张【火攻】。",
			sst_fuzhuo:"祓濯",
			sst_fuzhuo_info:"当你造成火焰伤害后，你可以摸一张牌；每回合限一次，若此时是你的出牌阶段，视为依次使用X张火【杀】。（X为你已损失的体力值）",
			sst_shangzheng:"商政",
			sst_shangzheng2:"商政",
			sst_shangzheng_info:"一名其他角色的出牌阶段限一次，若其本阶段已使用过【杀】，其可以交给你一张其此时不能使用的牌，然后你可以令其获得除其外与其距离最近的角色一张牌。",
			sst_shangzheng2_info:"出牌阶段限一次，若你本阶段已使用过【杀】，你可以交给一名拥有〖商政〗的其他角色一张你此时不能使用的牌，然后其可以令你获得除你外与你距离最近的角色一张牌。",
			sst_yinyuan:"引援",
			sst_yinyuan_info:"每回合限一次，你受到伤害前，若你与你相邻的角色均有手牌，你可以令你与这些角色依次弃置一张手牌，然后防止此伤害。",
			sst_zaowu:"造物",
			sst_zaowu_effect:"造物",
			sst_zaowu2:"造物",
			sst_zaowu2_backup:"造物",
			sst_zaowu_info:"结束阶段，你可以将任意张手牌置于你的武将牌上，称为“机器”；出牌阶段，你可以将一张“机器”销毁，然后对一名角色造成1点伤害；本局游戏你不能使用与你已销毁“机器”同名的牌。",
			sst_zaowu2_info:"出牌阶段，你可以将一张“机器”销毁，然后对一名角色造成1点伤害。",
			sst_fuqi:"复起",
			sst_fuqi_info:"锁定技，当你进入濒死状态时，若你有“机器”，你销毁所有“机器”，摸三张牌并回复体力至1点。",
			sst_chouyu:"仇狱",
			sst_chouyu_info:"锁定技，每回合限一次，拥有〖仇狱〗的角色受到伤害后，若伤害来源没有〖仇狱〗，你从弃牌堆获得一张【杀】，然后伤害来源获得〖仇狱〗，否则伤害来源从弃牌堆获得一张【杀】，且此伤害流程不会再次触发〖仇狱〗。",
			sst_xuehai:"血海",
			sst_xuehai2:"血海",
			sst_xuehai3:"血海",
			sst_xuehai_info:"锁定技，准备阶段，若所有存活角色均拥有〖仇狱〗且你未以此法获得过〖乱武〗，你获得〖乱武〗。你发动的〖乱武〗流程内，每有一名角色减少体力，你摸一张牌。此〖乱武〗结算后，流程内未造成伤害的角色失去〖仇狱〗且本局游戏无法再获得〖仇狱〗。",
			sst_luanwu:"乱武",
			sst_luanwu_info:"限定技，出牌阶段，你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】，否则失去1点体力。",
			sst_yintong:"饮痛",
			sst_yintong_info:"锁定技，一名角色脱离濒死状态后，你摸一张牌。",
			sst_gukui:"骨溃",
			sst_gukui_info:"锁定技，每当你不于〖骨溃〗流程内成为手牌数唯一最多的角色时，你须将一半手牌（向上取整）依次当作无距离限制的【杀】对不同的其他角色使用，然后你减1点体力上限。",
			sst_qixin:"齐心",
			sst_qixin_effect:"齐心",
			sst_qixin_effect_backup:"齐心",
			sst_qixin_info:"准备阶段，你可以弃置一张♥基本牌或♥普通锦囊牌并选择一至三名角色，这些角色直到你的下个回合开始可以视为使用一次此牌。",
			sst_gongcun:"共存",
			sst_gongcun2:"共存",
			sst_gongcun_info:"一名角色的每回合限一次，当与其相邻的角色正面朝上失去♥牌后，其可以交给该角色一张手牌。",
			sst_jichang:"饥肠",
			sst_jichang_effect:"饥肠",
			sst_jichang_info:`锁定技，准备阶段，你弃置所有手牌，然后你设定本回合的以下数值：<br>
				1. 摸牌阶段额外摸牌数；<br>
				2. 攻击范围增加数；<br>
				3. 出牌阶段额外使用【杀】次数；<br>
				三项数值相加须等于上述弃置牌的类别数+4。`,
			sst_jiangshang:"奖赏",
			sst_jiangshang_info:"锁定技，一张装备牌置入你的装备区时，你弃置之并摸两张牌。",
			sst_xiongli:"凶戾",
			sst_xiongli_animation:"凶戾",
			sst_xiongli_info:`锁定技，每轮游戏开始时，你选择一个与上轮不同的条件：<br>
				1. 本轮造成伤害唯一最少的角色；<br>
				2. 体力唯一最少的角色；<br>
				3. 装备唯一最少的角色。<br>
				下一轮游戏开始你杀死该角色。`,
			sst_nixi:"逆袭",
			sst_nixi_info:"结束阶段，若你满足本轮〖凶戾〗的条件（可不为唯一），你可以对一名角色造成1点伤害并摸一张牌。",
			sst_liedui:"列队",
			sst_liedui_info:"转换技，当你需要使用一张①【杀】②【闪】③【桃】④【酒】⑤【无懈可击】时，你可以弃置一张牌视为使用之，若你弃置的牌与先前弃牌堆顶的牌颜色不同，你可以指定此转换技的状态。",
			sst_chunni:"春泥",
			sst_chunni_effect:"春泥",
			sst_chunni_info:"限定技，准备阶段，你可以将弃牌堆洗牌并变为你专属的摸牌堆，且这些牌花色视为无色。",
			sst_buxi:"不息",
			sst_buxi_info:"锁定技，若你的体力值等于上限，你的体力上限+1。",
			sst_litu:"历途",
			sst_litu_info:"出牌阶段结束时，你可以指定一名体力上限小于你的角色，该角色选择令你回复1点体力，或令你获得本回合内进入弃牌堆的牌。",
			sst_zihua:"自化",
			sst_zihua_info:"主公技，准备阶段，你可以弃置所有本势力角色一张手牌。",
			sst_tunshi:"吞食",
			sst_tunshi2:"吞食",
			sst_tunshi_info:"准备阶段，你可以将一名角色的所有牌置于你武将牌上；当你的手牌少于你武将牌上的这些牌时，你将这些牌归还到来源的手牌区。",
			sst_yangfen:"养分",
			sst_yangfen_info:"一名角色死亡后，你可以摸其体力上限张数牌。",
			sst_qiangyi:"枪艺",
			sst_qiangyi_effect2:"枪艺",
			sst_qiangyi_info:"转换技，你使用【杀】时，你可以①于结算后视为使用一张【杀】②令本阶段使用【杀】无距离和次数限制③于结算后摸两张牌，当前回合结束。",
			sst_moke:"魔刻",
			sst_moke_info:"每回合限一次，你可以将一张牌当作【闪】使用，然后你可以将一张牌当作【杀】使用。",
			//Sort
			sst_64:"64",
			sst_melee:"Melee",
			sst_brawl:"Brawl",
			sst_4:"For WiiU/3DS",
			sst_ultimate:"Ultimate",
			sst_dlc:"DLC",
			sst_spirits:"命魂",
			sst_players:"玩家"
		},
		translateEnglish:{
			sst_mario:"Mario",
			sst_link:"Link",
			sst_yoshi:"Yoshi",
			sst_wario:"Wario",
			sst_villager:"Villager",
			sst_zelda:"Zelda",
			sst_ganondorf:"Ganondorf",
			sst_dr_mario:"Dr. Mario",
			sst_palutena:"Palutena",
			sst_marth:"Marth",
			sst_rosalina:"Rosalina",
			sst_zero_suit_samus:"Zero Suit Samus",
			sst_luigi:"Luigi",
			sst_bowser:"Bowser",
			sst_peach:"Peach",
			sst_byleth_female:"Byleth (Female)",
			sst_byleth_male:"Byleth (Male)",
			sst_massy:"Massy",
			sst_samus:"Samus",
			sst_ridley:"Ridley",
			sst_dark_samus:"Dark Samus",
			sst_mr_game_watch:"Mr. Game & Watch",
			sst_mario_not_mary:"mario not mary",
			sst_yumikohimi:"Yumikohimi",
			sst_haine:"Haine",
			sst_terry:"Terry",
			sst_simon:"Simon",
			sst_incineroar:"Incineroar",
			sst_greninja:"Greninja",
			sst_kirby:"Kirby",
			sst_king_k_rool:"King K. Rool",
			sst_donkey_kong:"Donkey Kong",
			sst_richter:"Richter",
			sst_pokemon_trainer_red:"Red",
			sst_isabelle:"Isabelle",
			sst_daisy:"Daisy",
			sst_meta_knight:"Meta Knight",
			sst_little_mac:"Little Mac",
			sst_oc:"OC",
			sst_mr_8:"Mr. 8",
			sst_dark_link:"Dark Link",
			sst_kyuukou:"Kyuukou",
			sst_windier:"Windier",
			sst_rentianshu:"Rentianshu",
			sst_srf:"Srf",
			sst_bowser_jr:"Bowser Jr.",
			sst_koopalings:"Koopalings",
			sst_ryu:"Ryu",
			sst_ken:"Ken",
			sst_waluigi:"Waluigi",
			sst_master_hand:"Master Hand",
			sst_ike:"Ike",
			sst_miumiu:"Miumiu",
			sst_toon_link:"Toon Link",
			sst_wolf:"Wolf",
			sst_young_link:"Young Link",
			sst_ocarina_of_time_link:"Ocarina of Time Link",
			sst_spring_man:"Springman",
			sst_joker:"Joker",
			sst_rex:"Rex",
			sst_cuphead_mugman:"Cuphead & Mugman",
			sst_mega_man:"Mega Man",
			sst_captain_falcon:"Captain Falcon",
			sst_jigglypuff:"Jigglypuff",
			sst_lucario:"Lucario",
			sst_pichu:"Pichu",
			sst_steve:"Steve",
			sst_ma:"Ma",
			sst_feiji:"Feiji",
			sst_sonic:"Sonic",
			sst_hero:"Hero",
			sst_fox:"Fox",
			sst_alex:"Alex",
			sst_min_min:"Min Min",
			sst_pikachu:"Pikachu",
			sst_falco:"Falco",
			sst_enderman:"Enderman",
			sst_sephiroth:"Sephiroth",
			sst_pokemon_trainer_leaf:"Blue",
			sst_kyo_kusanagi:"Kyo Kusanagi",
			sst_pauline:"Pauline",
			sst_dr_wily:"Dr. Wily",
			sst_kazuya:"Kazuya",
			sst_kraid:"Kraid",
			sst_sora:"Sora",
			sst_pac_man:"Pac-Man",
			sst_mewtwo:"Mewtwo",
			sst_olimar:"Pikmin & Olimar & Alph",
			sst_marioraz:"Marioraz",
			sst_piranha_plant:"Piranha Plant",
			sst_bayonetta:"Bayonetta"
		},
		help:{
			"大乱桌斗":`<div style="margin:10px">
					举荐
				</div>
				<ul style="margin-top:0">
					<li>
						你亮出牌堆顶的一张牌，若此牌满足指定条件，你获得此牌，否则将此牌置入弃牌堆并重复此流程
					</li>
				</ul>
				<div style="margin:10px">
					破军
				</div>
				<ul style="margin-top:0">
					<li>
						你将目标的指定牌扣置于其武将牌上，回合结束时其获得武将牌上的这些牌
					</li>
				</ul>
				<div style="margin:10px">
					提前执行回合
				</div>
				<ul style="margin-top:0">
					<li>
						你执行一个额外回合，若如此做，本轮你的下一个非额外回合开始前，你取消之
					</li>
				</ul>
				<div style="margin:10px">
					销毁
				</div>
				<ul style="margin-top:0">
					<li>
						将一张牌永久移出游戏
					</li>
				</ul>
				<div style="margin:10px">
					移除武将牌
				</div>
				<ul style="margin-top:0">
					<li>
						线上系统会将武将替换为同势力同性别无技能的士兵，且不触发武将登场
					</li>
				</ul>`
		}
	};
	if(lib.device||lib.node){
		for(const i in SST_STANDARD.character){
			SST_STANDARD.character[i][4].push(`ext:大乱桌斗/image/character/${i}.png`);
		}
	}
	else{
		for(const i in SST_STANDARD.character){
			SST_STANDARD.character[i][4].push(`db:extension-大乱桌斗:image/character/${i}.png`);
		}
	}
	return SST_STANDARD;
});