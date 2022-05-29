game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"阳光包",content:function (config,pack){
   
    //平凡武将
    lib.rank.rarity.junk.addArray([]);
    //精品武将
    lib.rank.rarity.rare.addArray(["lyz_huangyueying","lyz_zhangxingcai","lyz_xinxianying","lyz_jiaxu","lyz_zhangliao","lyz_zhangchunhua"]);
    //史诗武将
	lib.rank.rarity.epic.addArray(["lyz_zhouyu","lyz_lingju","lyz_caiwenji","lyz_zhenji","lyz_daqiao","lyz_xiaoqiao","lyz_sunshangxiang","lyz_simayi","lyz_guojia","lyz_huatuo","lyz_caojie","lyz_caocao","lyz_liubei","lyz_sunjian","lyz_zhangjiao","lyz_luxun","lyz_diaochan","lyz_guanyinping","lyz_bulianshi","lyz_wangyi"]);
	//传说武将
	lib.rank.rarity.legend.addArray(["lyz_shen_diaochan","lyz_shen_zhangliao","lyz_shen_gaodayihao","lyz_zhugeliang","lyz_mayunlu","lyz_shen_lvbu","lyz_machao","lyz_shen_simayi","lyz_shen_zhouyu","lyz_yangguangweiliang","lyz_zhangfei","lyz_yjlgt","lyz_guanyu","lyz_xunyu","lyz_shijian","lyz_lvlingqi","lyz_zuoci","lyz_sunce","lyz_ziyu","lyz_xusheng","lyz_xuedaoshaozhu","lyz_shen_zhenji","lyz_shen_zhugeliang","lyz_nanxun","lyz_shen_guanyu","lyz_zhaoyun"]);
    
         
    lib.arenaReady.push(function (){
                if (lib.config.extensions&&lib.config.extensions.contains('十周年UI')&&lib.config['extension_十周年UI_enable']) {
					if (lib.config['extension_十周年UI_showJieMark']) {
                        lib.ygb_player_init=lib.element.player.init;
                        lib.element.player.init=function(character,character2,skill){
                            var ygb={
            "lyz_shen_diaochan":"☼神貂蝉",
            "lyz_shen_zhangliao":"☼神张辽",
            "lyz_shen_gaodayihao":"☼高达一号",
            "lyz_zhugeliang":"☼诸葛亮",
            "lyz_mayunlu":"☼马云騄",
            "lyz_zhouyu":"☼周瑜",
            "lyz_shen_lvbu":"☼神吕布",
            "lyz_lingju":"☼灵雎",
            "lyz_caiwenji":"☼蔡文姬",
            "lyz_zhenji":"☼甄姬",
            "lyz_daqiao":"☼大乔",
            "lyz_xiaoqiao":"☼小乔",
            "lyz_sunshangxiang":"☼孙尚香",
            "lyz_huangyueying":"☼黄月英",
            "lyz_simayi":"☼司马懿",
            "lyz_guojia":"☼郭嘉",
            "lyz_machao":"☼马超",
            "lyz_huatuo":"☼华佗",
            "lyz_caojie":"☼曹节",
            "lyz_caocao":"☼曹操",
            "lyz_liubei":"☼刘备",
            "lyz_sunjian":"☼孙坚",
            "lyz_zhangjiao":"☼张角",
            "lyz_zhangchunhua":"☼张春华",
            "lyz_luxun":"☼陆逊",
            "lyz_shen_simayi":"☼神司马懿",
            "lyz_zhangxingcai":"☼张星彩",
            "lyz_diaochan":"☼貂蝉",
            "lyz_shen_zhouyu":"☼神周瑜",
            "lyz_yangguangweiliang":"阳光微凉",
            "lyz_zhangfei":"☼张飞",
            "lyz_yjlgt":"遗计两个桃",
            "lyz_guanyu":"☼关羽",
            "lyz_guanyinping":"☼关银屏",
            "lyz_xunyu":"☼荀彧",
            "lyz_zhangliao":"☼张辽",
            "lyz_xinxianying":"☼辛宪英",
			"lyz_shijian": "诗笺",
			"lyz_lvlingqi":"☼吕玲绮",
			"lyz_zuoci":"☼左慈",
			"lyz_jiaxu":"☼贾诩",
			"lyz_sunce":"☼孙策",
			"lyz_ziyu":"子鱼",
			"lyz_xusheng":"☼徐盛",
			"lyz_bulianshi":"☼步练师",
            "lyz_xuedaoshaozhu":"血刀少主",
            "lyz_shen_zhenji":"☼神甄姬",
            "lyz_shen_zhugeliang":"☼神诸葛亮",
            "lyz_nanxun":"南尋",    
            "lyz_shen_guanyu":"☼神关羽",
            "lyz_wangyi":"☼王异",
            "lyz_zhaoyun":"☼赵云",                     
                            };                            
                            var player=lib.ygb_player_init.apply(this, arguments);

// ---------------------------------------阳字标------------------------------------------//					        
                              if(character && ygb[character] && lib.config['extension_十周年UI_newDecadeStyle'] != 'off' &&lib.config['extension_十周年UI_newDecadeStyle'] != 'othersOn'){
                                if (this.$jieMark == undefined){
                                    this.$jieMark = dui.element.create('jie-mark', this); 
                                }else {                                               
                                    this.appendChild(this.$jieMark);
                                };                             
                                this.$jieMark.style.backgroundImage='url("'+lib.assetURL+"extension/阳光包/image/biaoqian/mark_lyz.png"+'")';
                                var name=ygb[character];
                                if(name.indexOf("☼")==0) name=name.slice(1);
                                this.node.name.innerHTML=get.verticalStr(name,true);
                                return this;
                            };
                            return this;
                        };
                    };
                };
            });
                        
    lib.skill._ygbzhenwangpeiyin={
        trigger:{player:'dieBegin',},
        priority:2,
        forced:true,
        unique:true,
        popup:false,
        content:function(){                 
            game.playAudio('..','extension','阳光包/audio',trigger.player.name);                                                                          
        }
    }
},precontent:function (yangguangbao){

    window.ygb_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
    lib.init.js(lib.assetURL +'extension/阳光包/skin.js',null);

    if(yangguangbao.enable){
         game.import("character",function(){
             var yangguangbao={
                 name:"yangguangbao",
                 connect:true,                
                 characterSort:{
            yangguangbao:{
                "lyz_shen":["lyz_shen_guanyu","lyz_shen_zhugeliang","lyz_shen_zhenji","lyz_shen_diaochan","lyz_shen_zhangliao","lyz_shen_gaodayihao","lyz_shen_lvbu","lyz_shen_simayi","lyz_shen_zhouyu","lyz_shen_zhenji","lyz_shen_guanyu"],
                "lyz_wei":["lyz_wangyi","lyz_xinxianying","lyz_zhangliao","lyz_xunyu","lyz_caiwenji","lyz_zhenji","lyz_simayi","lyz_guojia","lyz_caocao","lyz_zhangchunhua","lyz_wangyi"],
                "lyz_shu":["lyz_guanyinping","lyz_guanyu","lyz_zhangfei","lyz_zhugeliang","lyz_mayunlu","lyz_huangyueying","lyz_liubei","lyz_zhangxingcai","lyz_zhaoyun"],
                "lyz_wu":["lyz_bulianshi","lyz_sunce","lyz_zhouyu","lyz_daqiao","lyz_xiaoqiao","lyz_sunshangxiang","lyz_sunjian","lyz_luxun","lyz_xusheng"],
                "lyz_qun":["lyz_jiaxu","lyz_zuoci","lyz_lvlingqi","lyz_lingju","lyz_machao","lyz_huatuo","lyz_caojie","lyz_zhangjiao","lyz_diaochan"],
                "lyz_caidan":["lyz_yangguangweiliang","lyz_yjlgt","lyz_shijian","lyz_ziyu","lyz_xuedaoshaozhu","lyz_nanxun"],
            },
        },
        character:{
            "lyz_shen_diaochan":["female","shen",3,["lyzyuhun","lyzhuanmei","lyzyuepo"],["die_audio"]],
            "lyz_shen_zhangliao":["male","shen",4,["lyzcuifeng","lyzxiasha","lyzzhijue"],["die_audio"]],
            "lyz_shen_gaodayihao":["male","shen",1,["lyzjuejing","lyzlonghun","lyzzhanjiang"],["die_audio"]],
            "lyz_zhugeliang":["male","shu",3,["lyzwendao","lyzzhaoce","lyzkuitian"],["die_audio"]],
            "lyz_mayunlu":["female","shu",4,["lyzjingxing","lyzfengyi","lyzlingxiang"],["die_audio"]],
            "lyz_zhouyu":["male","wu",4,["lyzxinlve","lyzyanjie"],["die_audio"]],
            "lyz_shen_lvbu":["male","shen",4,["lyznuozhan","lyzzhenguan","lyzxiaohu"],["die_audio"]],
            "lyz_lingju":["female","qun",3,["lyzwuren","lyzhongshang"],["die_audio"]],
            "lyz_caiwenji":["female","wei",3,["lyzchengxin","lyzfuqing"],["die_audio"]],
            "lyz_zhenji":["female","wei",3,["lyzshenhuang","lyzjinghong"],["die_audio"]],
            "lyz_daqiao":["female","wu",3,["lyzyurong","lyzfuhua"],["die_audio"]],
            "lyz_xiaoqiao":["female","wu",3,["lyzfangze","lyzfumeng"],["die_audio"]],
            "lyz_sunshangxiang":["female","wu",4,["lyzbeiwu","lyzjiaogong"],["die_audio"]],
            "lyz_huangyueying":["female","shu",3,["lyzzhiying","lyzjinxin"],["die_audio"]],
            "lyz_simayi":["male","wei",3,["lyzyinfeng","lyztaohui"],["die_audio"]],
            "lyz_guojia":["male","wei",3,["lyzchouji","lyzmingfu"],["die_audio"]],
            "lyz_machao":["male","qun",4,["lyztianwei","lyzxiaohun"],["die_audio"]],
            "lyz_huatuo":["male","qun",3,["lyzqinggu","lyzhuomai","lyztiantong"],["die_audio"]],
            "lyz_caojie":["female","qun",3,["lyzxianmu","lyzfengjun"],["die_audio"]],
            "lyz_caocao":["male","wei",4,["lyzbabei","lyztianfu"],["zhu","die_audio"]],
            "lyz_liubei":["male","shu",5,["lyzzhaoren","lyzlongjie"],["zhu","die_audio"]],
            "lyz_sunjian":["male","wu",5,["lyzjinzheng","lyzyilie"],["zhu","die_audio"]],
            "lyz_zhangjiao":["male","qun",3,["lyzluanshi","huangtian","lyztaiping"],["zhu","die_audio"]],
            "lyz_zhangchunhua":["female","wei",3,["lyzcanqing","lyzwanai"],["die_audio"]],
            "lyz_luxun":["male","wu",4,["lyzdingqian","lyzguilv"],["die_audio"]],
            "lyz_shen_simayi":["male","shen",4,["lyzchouyi","lyztianqian","lyzdikun","lyzguiyuan"],["die_audio"]],
            "lyz_zhangxingcai":["female","shu",4,["lyzxingxuan","lyzlingying"],["die_audio"]],
            "lyz_diaochan":["female","qun",3,["lyzyinghuo","lyzxingyun"],["die_audio"]],
            "lyz_shen_zhouyu":["male","shen",4,["lyzningxian","lyzjueyin","lyzdizui"],["die_audio"]],
            "lyz_yangguangweiliang":["male","shen",6,["lyzzhiguo","lyzpingfang","lyzqingyan"],["die_audio"]],
            "lyz_zhangfei":["male","shu",4,["lyzfengxuan","lyztiansha"],["die_audio"]],
            "lyz_yjlgt":["male","shen",4,["lyzzhidian","lyzshulun","lyzjianji"],["die_audio"]],
            "lyz_guanyu":["male","shu",4,["lyzhongzheng","lyzxiansheng"],["die_audio"]],
            "lyz_guanyinping":["female","shu",4,["lyzrongcheng","lyzzhuoji"],["die_audio"]],
            "lyz_xunyu":["male","wei",3,["lyzwangzuo","lyzxianshi","lyzxiaoran"],["die_audio"]],
            "lyz_zhangliao":["male","wei",5,["lyzliaolai","lyzshepo"],["die_audio"]],
            "lyz_xinxianying":["female","wei",3,["lyztaoming","lyzcaiqing"],["die_audio"]],
			"lyz_shijian":["female","shen",4,["lyzpianwu"],["die_audio"]],
			"lyz_lvlingqi":["female","qun",4,["lyzzhanmo","lyzyoulin"],["die_audio"]],
			"lyz_zuoci":["male","qun",4,["lyzchenju","lyzchuiweng","lyzwangsheng"],["die_audio"]],
			"lyz_jiaxu":["male","qun",3,["lyzjiansha","lyzyinlan","lyzminwei"],["die_audio"]],
			"lyz_sunce":["male","wu",4,["lyzaolie","lyzdingjiang","lyzbalve"],["zhu","die_audio"]],
			"lyz_ziyu":["male","shen","3/6",["lyzkezhi","lyzyouxun"],["die_audio"]],
            "lyz_xusheng":["male","wu",4,["lyzyinjun","lyzmingbu"],["die_audio"]],
            "lyz_bulianshi":["female","wu",3,["lyzxinlan","lyzyanzun"],["die_audio"]],
            "lyz_xuedaoshaozhu":["male","shen",5,["lyzyintian","lyzyudi","lyzdianshen","lyzrugui"],["die_audio"]],
            "lyz_shen_zhenji":["female","shen",3,["lyzqiqing","lyzshenjiang","lyzdianchuan"],["die_audio"]],
            "lyz_shen_zhugeliang":["male","shen","3/7",["lyzdouzhuan","lyzxingsuo","lyztianji"],["die_audio"]],
            "lyz_nanxun":["male","shen",5,["lyzdingzheng","lyzshiyi","lyzhuanxing"],["die_audio"]],
            "lyz_shen_guanyu":["male","shen",5,["lyzmingjue","lyzyanren","lyzedao"],["die_audio"]],
            "lyz_wangyi":["female","wei",4,["lyzzhaojie","lyzyingwu"],["die_audio"]],
            "lyz_zhaoyun":["male","shu",4,["lyzlinhuang","lyzyuwang"],["die_audio"]],
            
        },
        characterIntro:{
            "lyz_shen_diaochan":"<br>【武将定位】 控制·限制·回复<br> <br>【武将简介】 阳光包的☼神貂蝉保留了官方操控别人回合的创新设计并加强了操作体验。技能1〖驭魂〗为核心技能，相比〖惑心〗，〖驭魂〗控制目标精准，不需消耗手牌且能为☼神貂蝉提供额外的存过牌能力。技能2〖幻魅〗为特色技能，强制发动的特性使☼神貂蝉每一回合的打法都不尽相同，可随机的诸如〖离魂〗等技能更能与〖驭魂〗形成完美的配合。技能3〖月魄〗为生存技能，☼神貂蝉进入濒死状态时的回复能力与脱离濒死状态时强大的负面威慑效果能够为她创造一定的生存环境。",
            "lyz_shen_zhangliao":"<br>【武将定位】 输出·限制<br> <br>【武将简介】 保留了官方神张辽夺取他人技能的创新性设计。技能1〖摧锋〗为机制技能，夺取不同的武将技能为☼神张辽带来较高的随机性和趣味性。技能2〖諕杀〗为主收益技能，具有可控的稳定收益，自身血量越低，压制力越强。技能3〖制决〗为辅收益技能，除配合“摧锋”发动外，还可用于处理敌方棘手的武将，只需对其造成一次伤害即可。整体上，☼神张辽技能多变，收益稳定，是强度较高的娱乐武将。",
            "lyz_shen_gaodayihao":"<br>【武将定位】 爽将<br> <br>【武将简介】 传说中的“高达一号”，谁用谁知道！☼高达一号将〖旧龙魂〗改为拥有锁定技标签的〖新龙魂〗，并略微调整了〖斩将〗的效果（可获得【青釭剑】的范围：场上、牌堆、弃牌堆），再次提高了其过牌量和生存能力。",
            "lyz_zhugeliang":"<br>【武将定位】 全能<br> <br>【武将简介】 诸葛丞相无论在历史还是演义中，都是一位几近完美的人物，故阳光包对诸葛亮进行了全方位的增强。技能1〖问道〗为过牌技能，强制发动的特性要求玩家合理规划自身的牌序。技能2〖昭策〗为核心技能，可进一步强化自身，或为队友增添额外的能力，发育成型后的〖昭策〗则拥有更庞大的技能库和更强力的技能。技能3〖窥天〗为辅助技能，天意可顺不可违，☼诸葛亮能够在知晓判定结果后，选择一种最有利的方式来获取此技能的收益。",
            "lyz_mayunlu":"<br>【武将定位】 输出·爆发·防御·过牌<br> <br>【武将简介】 马妹妹天下第一！阳光包的马妹妹以〖凤魄〗为操作基础，全面增强了过牌、防御与输出能力，并拥有了最关键的强命能力。技能1〖景星〗为基础技能，记录更多花色并在适当时机获取女儿的〖芳魂〗与哥哥的〖铁骑〗是核心思路。技能2〖凤逸〗为输出+防御技能，在马妹妹发育的前期和发育成型后，〖凤逸〗分别能够为她提供优秀的防御能力和核心的强命能力。技能3〖凌骧〗为核心技能，其描述中的X与〖景星〗相同，指的是〖景星〗记录的花色数。需注意，〖凌骧〗的发动时机在〖凤逸〗之后，即玩家可根据〖凤逸〗的强命与否来决定此次加伤的数值。<br><br>为方便各位玩家理解，我举了以下例子——<br><br>例1：马妹妹通过〖景星〗记录了红桃、方块、梅花三种花色，然后对18张手牌的神曹操使用【杀】并发动〖凌骧〗，通过观看神曹操的手牌得知，神曹操一共有3张红桃、4张方块、5张梅花和6张黑桃牌。则满足条件的手牌一共有3+4+5=12张牌。因〖景星〗共记录了三种花色，故马妹妹此次可选择令此【杀】的伤害增加0、1、2或3。若选择+2，则根据Y值的描述，马妹妹此次一共可以摸12-2=10张牌。<br><br>例2：马妹妹通过〖景星〗记录了方块、梅花、黑桃三种花色，然后对1张红桃和1张方块手牌的界孙权使用【杀】并发动〖凌骧〗。马妹妹此次若选择伤害+1，则可以摸1-1=0张牌；若选择+3，则可以摸1-3=-2（取最小值0）0张牌。<br><br>例3：装备【诸葛连弩】的马妹妹通过〖景星〗记录了一种花色，然后对界孙权使用【杀】，但不发动〖凌骧〗，则此【杀】不加伤，马妹妹不摸牌。若马妹妹继续对界孙权使用【杀】，可选择发动〖凌骧〗进行后续结算。发动〖凌骧〗结算完毕后，若马妹妹接下来改为对界赵云使用【杀】，因本回合已触发过【杀】的〖凌骧〗结算，故马妹妹不能对界赵云发动〖凌骧〗。<br><br>例4：马妹妹通过〖景星〗记录了两种花色，然后对没有手牌的界马超使用【杀】。因不满足观看手牌的条件，故〖凌骧〗无法发动，此【杀】不加伤，马妹妹不摸牌。",
            "lyz_zhouyu":"<br>【武将定位】 全能<br> <br>【武将简介】 周嘟嘟的技能灵感来源于赤壁之战。技能1〖心略〗为核心技能，在受伤后的发动时机使☼周瑜具备一定的卖血收益，通过展示不同数量的手牌达到控制或辅助的效果，也可用来解除自身的延时锦囊。技能2〖焰劫〗为伤害+过牌技能，配合〖心略〗的连环效果能给予敌人高额的伤害。在必要时，可将三张或更多牌交给敌人，然后通过〖焰劫〗对其造成高额的伤害并收回部分手牌以保证自身的生存。",
            "lyz_shen_lvbu":"<br>【武将定位】 输出·爆发·防御<br> <br>【武将简介】 ☼神吕布采用了“使命技”的新机制，取材于吕布雄踞虎牢，勇斗三英的故事。技能1〖搦战〗与技能2〖镇关〗均为☼神吕布的使命——镇守虎牢关服务。有“英”的武将在死亡时也会移去“英”标记，因此，依据距离和武将能力合理地交出“英”标记，能帮助☼神吕布更快地达成使命。技能3〖虓虎〗为过牌+防御技能，合理卖血能够最大化其收益。达成使命后，〖极武〗和〖溃魄〗将使得☼神吕布拥有恐怖的杀伤力和控制力。若使命失败，〖利驭〗会为☼神吕布提供一些非基本牌以配合〖虓虎〗的发动，但〖无谋〗则会对☼神吕布进行较大的限制。",
            "lyz_lingju":"<br>【武将定位】 输出·回复<br> <br>【武将简介】 灵雎在电影《铜雀台》中以刺客的形象登场，故赋予她相符的技能机制。技能1〖舞刃〗为输出技能，意为“舞蹈时暗藏杀机”。额外的【杀】为☼灵雎带来了一定的回合内能力和不错的卖血收益。技能2〖红殇〗为核心技能，进入濒死状态或死亡的其他角色会为☼灵雎带来极大的能力提升，配合〖舞刃〗对攻击范围内的残血敌人进行收割，能为☼灵雎奠定胜局。",
            "lyz_caiwenji":"<br>【武将定位】 过牌·辅助·回复<br> <br>【武将简介】 三国杀中的两个蔡文姬设计的都不错，☼蔡文姬的设计纯属个人喜好。技能1“澄心”为核心辅助技能，其效果多样——回血、摸牌、复原，在点数为A或K时更可令一名角色永久获得群蔡文姬的〖悲歌〗或魏蔡文姬的〖默识〗，但收益不稳定，具有改判能力的武将会是最好的队友。技能2〖赋情〗同为辅助技能，使己方武将都具备了卖血能力，发动频率较高且收益稳定。需注意的是，若一名其他角色因受到伤害而死亡，则☼蔡文姬依然可以发动〖赋情〗摸牌，且不需给出牌。",
            "lyz_zhenji":"<br>【武将定位】 过牌·控场<br> <br>【武将简介】 甄姬，相传名宓。阳光包按照个人喜好对其进行了重塑。技能1〖神惶〗具备强大的印卡效果，但需足量手牌支撑。技能2〖惊鸿〗为核心过牌技能，在使用时需玩家对各个牌名有所了解。一字牌为基本牌，触发频率相对较高，但功能单一；四字牌大多拥有优秀的控场能力，但自保不足；二字牌与三字牌中则有较多装备；五字牌数量较少，名称固定。因此，在发动〖惊鸿〗调整字数时，对场上局势的合理判断能让关键字数的牌发挥各自最大的效果。需注意：“随机获得”是从牌堆或弃牌堆中获得，若没有则无事发生；在查看〖惊鸿〗X的值时，有时图标上会显示错误的数字，将图标点开能看到正确的结果。",
            "lyz_daqiao":"<br>【武将定位】 限制·辅助·过牌<br> <br>【武将简介】 阳光包的☼大乔基本继承了原版大乔控制+防御的定位，并在此基础上赋予了她新的能力。技能1〖玉容〗为核心技能，可根据局势和自身的手牌结构来选择最佳效果，其中红桃牌的效果能与〖浮华〗达成一定联动。技能2〖浮华〗为过牌+防御技能，受到无来源的伤害时也可发动，且不需要给出手牌。在自身使用诸如【桃】、【无中生有】等红色增益牌时，更能取得高额的收益。",
            "lyz_xiaoqiao":"<br>【武将定位】 辅助·过牌·防御<br> <br>【武将简介】 ☼小乔相对原版小乔，较大幅度地增强了她的单挑及团队能力。技能1〖芳泽〗为核心技能，充足的牌量是发挥能力的根本，可辅助队友或自己进行过牌、回复、爆发、解控、存牌，也可对敌方关键的手牌或装备进行限制。技能2〖浮梦〗为防御技能，为〖芳泽〗提供了一定的手牌支撑。在对局中，☼小乔可较大程度地消耗手牌并在〖浮梦〗的保护下提高生存能力。",
            "lyz_sunshangxiang":"<br>【武将定位】 输出·过牌<br> <br>【武将简介】 ☼孙尚香的设计灵感来源于演义中她“好武事，娴弓马”的形象特点。技能1〖备武〗为基础技能，获取标记的方式共有三种，最优的是使用装备牌。技能2〖娇弓〗为核心技能，具备使用【杀】、无视距离、过牌和增伤的效果。需注意的是，当☼孙尚香使用一张【杀】指定多个目标后，需依次选择是否获得目标的一张牌，每获得一张牌需消耗1个标记。若自身只有1枚“武”，不可通过使用装备牌触发〖枭姬〗。在多名敌人横置的情况下，☼孙尚香可通过不断移去标记使属性伤害递增。总体上，☼孙尚香能作为输出核心，为团队创造极大的优势。",
            "lyz_huangyueying":"<br>【武将定位】 限制·控场<br> <br>【武将简介】 原版的黄月英极度依赖锦囊牌的爆发，导致武将发挥不稳，方差过大。而☼黄月英则不再依赖自己手中的锦囊牌，每名角色使用过的锦囊牌都可能给她带来不错的收益。技能1〖智映〗为核心技能，可配合队友的关键锦囊牌破坏集火目标的手牌结构或对其造成高额伤害，也可在对手使用高收益锦囊牌后为团队止损。技能2〖锦心〗为辅助、防御、控制技能。通过使用【木牛流马】和【八卦阵】，提高团队的存过牌能力和防御能力，也可破坏敌方核心难缠的防具牌和宝物牌，为团队打开突破口。",
            "lyz_simayi":"<br>【武将定位】 生存·过牌<br> <br>【武将简介】 ☼司马懿的设计思路来源于演义塑造的“隐忍筹划，以待时变”的人物形象。技能1〖隐锋〗为防御技能，免疫大部分的异常状态，并且同〖智迟〗类似，在受到一次伤害后，防止整轮的伤害，能让☼司马懿平稳度过手牌欠缺的前期。技能2〖韬晦〗为核心过牌技能，随着游戏的进行，☼司马懿将拥有递增的摸牌量和手牌上限。整体上，同演义中的形象一样，在牌局的后期，☼司马懿能够发挥相当恐怖的能力。",
            "lyz_guojia":"<br>【武将定位】 限制·回复·辅助<br> <br>【武将简介】 郭嘉作为三国杀经典角色之一，〖遗计〗创造了最早的“1血=2牌”的收益标准。但在目前的牌局中，其陷入了“四害”的尴尬境地，☼郭嘉则弥补了这一缺陷。技能1〖筹疾〗为核心技能，发动条件宽泛，收益较高，在发动效果2时，需玩家熟练记忆牌堆剩余的锦囊牌。技能2〖命缚〗为辅助技能，主动变换体力值发动〖筹疾〗是☼郭嘉脱离“四害”的关键，需注意技能发动的时点。在相对脆弱的☼郭嘉进入濒死状态后，更可为队友带来极强的辅助效果。",
            "lyz_machao":"<br>【武将定位】 输出·爆发<br> <br>【武将简介】 界马超因其封锁技能的特殊机制而被玩家们尊称为“神”。阳光包的☼马超针对原版界马超摸【杀】能力不足且输出值有限的问题进行了增强。技能1〖天威〗为核心技能，通过让对手的防具和技能失效，为☼马超营造一个优秀的输出环境，一旦命中，☼马超更可得到极强的持续输出能力。技能2〖骁魂〗为输出技能，能有效解决☼马超断杀的问题。总体上，☼马超的输出强力，不需要过多资源，是优秀的菜刀武将。",
            "lyz_huatuo":"<br>【武将定位】 回复·辅助<br> <br>【武将简介】 ☼华佗比原版进一步强化了回复和辅助能力，能适应目前的军争环境。技能1〖清骨〗取材于华佗“刮骨疗毒”的故事。可发动此技能或使用伤害牌主动攻击队友及自身来达成回复效果，与卖血将会形成极优的搭配。技能2〖活脉〗为团队收益技能，收益量大体与〖遗计〗相当，与〖清骨〗配合是☼华佗发挥能力的主要手段。技能3〖天通〗是强力的限定技，使用后或许能达成逆转局势的奇效。",
            "lyz_caojie":"<br>【武将定位】 辅助·过牌<br> <br>【武将简介】 曹节虽是曹氏一脉，但仍心向汉帝，是个忠义的女子，史称“献穆皇后”。原版曹节高防低能，不适应较快的军争节奏，阳光包则对其进行了重塑。技能1〖献穆〗为收益+辅助技能，结算顺序为先摸牌回复，再给牌，但摸牌回复并不为给牌的前置条件。〖献穆〗与包括刘协在内的补牌系武将有很好的配合，同时克制兄长曹丕。技能2〖奉君〗同为收益+辅助技能，后续效果并非绑定此次拼点，而是单独存在。拥有〖密诏〗的角色可发动技能将牌送还给☼曹节来触发其〖献穆〗与〖奉君〗，不断地拉开团队牌差。",
            "lyz_caocao":"<br>【武将定位】 控场·输出<br> <br>【武将简介】 曹操作为曹魏政权的奠基者，因其复杂特殊的性格而成为无数人争论的焦点。☼曹操取材于官渡大胜，平定北方，意气风发的曹操，主要展现其霸道，而非权谋的一面。技能1〖霸北〗为核心技能，除常规用法外，〖霸北〗能解除自己的延时锦囊，使☼曹操利用衍生技〖奸雄〗卖血再无顾忌，也能利用装备区的白银狮子进行强力的自我回复，对低血敌人的强制伤害也颇为可观。技能2〖天负〗作为主公技，体现了曹操“宁我负人，毋人负我”的性格特点。在使用时需合理判断场上身份并目的性地使用大点或小点的牌进行拼点。",
            "lyz_liubei":"<br>【武将定位】 辅助·控场·全能<br> <br>【武将简介】 刘备作为蜀汉政权的缔造者，是《三国演义》重点描写的人物之一。技能1〖昭仁〗为辅助+控制技能，纵观刘备一生，有馈赠他人之时，亦有受人馈赠的经历，将关键牌交给队友，并抢夺对方核心武将的牌，是☼刘备作为主公重要的控场手段。技能2〖龙劫〗为核心技能，意为“皇帝遭劫”，对应蜀汉集团遭遇失去关键人物的重大劫难，此亦是刘备一生的重要转折。在一位忠臣阵亡后，☼刘备可选择继承其能力或获得新的能力，最大程度地减少主忠方的损失，并在特殊情况下发挥1+1＞2的效果。",
            "lyz_sunjian":"<br>【武将定位】 输出·过牌·控场<br> <br>【武将简介】 孙坚在东吴政权的奠基中发挥了重要作用，也是我认为在三国杀中最应该拥有主公技的角色。☼孙坚相比原版，能力有了较大提升，但技能仍与自身的体力值息息相关。技能1〖尽征〗为过牌+输出技能，通过类似程昱〖设伏〗的机制，在使用对应牌时为自身提供额外的过牌和伤害能力。推荐记录使用频率较高的基本牌和【无懈可击】，来让〖尽征〗发挥最大的能力。技能2〖翊烈〗为娱乐向技能，在自身状态不佳时，通过将一名反贼变为忠臣，大幅提高己方的实力。",
            "lyz_zhangjiao":"<br>【武将定位】 输出·控场·辅助<br> <br>【武将简介】 张角是东汉末年著名的“黄巾起义”的领导者，同时也是中国早期道教派别“太平道”的创始人，演义记载其具有鬼神不测之术。☼张角具备优秀的技能组，只有自身作为主公时，才有完美的发挥。技能1〖乱始〗为核心技能，关键词是“判定”、“伤害”、“摸牌”，单独使用时，对敌人造成伤害，对队友和自身进行增益是基础的思路。技能3〖太平〗为辅助技能，也是☼张角发挥自身能力的根本。在〖雷击〗、〖鬼道〗和〖天妒〗的帮助下，技能1〖乱始〗得到最大程度的发挥。",
            "lyz_zhangchunhua":"<br>【武将定位】 限制·控制<br> <br>【武将简介】 原版张春华在目前对局中已经难有出彩表现，故对她进行了重塑。阳光包的☼张春华拥有完全不同的技能机制，但保留甚至加强了信仰能力以及对卖血将的克制能力。技能1〖残情〗为限制+过牌技能，用法较多，可选择对方的手牌进行摸奖或小制衡，也可在自身被【杀】指定时卸除敌人的关键武器。技能2〖惋哀〗为强力控制技能，在自身状态较差时能力更突出。〖惋哀〗对以神郭嘉为代表的回合内爆牌武将和以曹金玉为代表的高收益卖血武将具有较强的克制效果。",
            "lyz_luxun":"<br>【武将定位】 过牌·辅助<br> <br>【武将简介】 原版陆逊因〖连营〗而拥有极大的收益方差，阳光包的☼陆逊则取消了这种不确定性，发挥更稳定。技能1〖定谦〗为发育型的收益技能，将“谦”标记给予有高过牌能力的武将，能大幅提高自身的过牌量并调整手牌结构。技能2〖规虑〗为输出、辅助技能，配合〖定谦〗能够对敌方核心强制输出火焰伤害或与队友共同回复状态。",
            "lyz_shen_simayi":"<br>【武将定位】 全能<br> <br>【武将简介】 神司马懿的原画和技能都是难以超越的巅峰。阳光包则尝试着从另一个角度来呈现这个武将。技能1〖筹易〗取材于易经，是☼神司马懿发挥能力的根本。“阳爻”和“阴爻”价值相当，用途不同，“太初”的价值略高，效果强大。技能2〖天乾〗为“爻全阳”的卦象，记忆牌局中某名角色上回合使用过牌的花色与类别，能够最大化〖天乾〗的收益。技能3〖地坤〗为纯阴卦象，成功预测某名角色接下来使用的牌型，能够对其进行强效的控制。技能4〖归元〗需消耗价值较高的“太初”发动。正面效果能瞬间治愈残血队友，负面效果能完全压制残血敌人的状态，对低血量高手牌的卖血武将的打击尤其致命。",
            "lyz_zhangxingcai":"<br>【武将定位】 限制·控场<br> <br>【武将简介】 原版张星彩是具有代表性的过牌系菜刀武将，阳光包的☼张星彩则对其定位略作修改。技能1〖星旋〗为核心技能，在回合内大量使用手牌并在最后时刻对敌方发动〖星旋〗是基本思路，也可以通过使用非关键锦囊牌，将队友最需要的手牌和装备换给他。技能2〖绫缨〗为转化类技能，发动频率较高，与〖星旋〗具有较高的契合度，将暂时无用的装备牌转化为【杀】或一张核心锦囊牌能够为☼张星彩带来较高的收益。",
            "lyz_diaochan":"<br>【武将定位】 输出·防御<br> <br>【武将简介】 ☼貂蝉保留了官方貂蝉输出+防御的技能组，总体能力有所提升。技能1〖荧惑〗为核心技能，“强制使用”可无视敌方的〖空城〗、〖泯微〗等技能。除指定角色进行多刀输出外，还可消耗高手牌、蓄爆流敌人的攻击手牌，更可与界吕布、界许褚等角色达成良好的配合。技能2〖行云〗为防御技能，推荐声明黑色，因红色的增益性牌居多，在自身使用红色牌时能够进行过牌。",
            "lyz_shen_zhouyu":"<br>【武将定位】 破核<br> <br>【武将简介】 ☼神周瑜作为神将，具备与神关羽相同的即死机制，但代价较神关羽小得多，且相比官方神周瑜，大幅提升了生存能力。技能1〖凝弦〗为基础技能，合理放置的“弦”能为技能2〖绝音〗打下良好的发挥基础。技能3〖涤罪〗为☼神周瑜特色技能，强大的即死机制在理论上只需三个出牌阶段就能完杀一名敌方武将，可用于处理某些极为棘手的敌人或boss。",
            "lyz_yangguangweiliang":"<br>【武将定位】 彩蛋<br> <br>【武将简介】 阳光包的彩蛋，享受被女武将们包围的感觉吧！",
            "lyz_zhangfei":"<br>【武将定位】 输出·爆发<br> <br>【武将简介】 张飞是三国时期蜀汉名将，与关羽并称“万人敌”。阳光包的☼张飞呈现了其勇武过人、凶煞非常的战场形象。技能1〖锋玄〗为基础技能，“玄”意为黑，通过使用或被使用黑色牌积累“锋”，充足的“锋”是☼张飞发挥能力的根本。技能2〖天煞〗为核心技能，可累计多次使用。实战中，可移去少量的“锋”触发锁牌、锁技能及〖锋玄〗的额外目标效果，也可移去大量的“锋”触发〖天煞〗的全部效果，同神吕布的〖神愤〗一样，一旦发动，接下来触发就会变得更容易。整体上，☼张飞具备大量优秀的菜刀属性，若使用得当，轻易就能取得胜利。",
            "lyz_yjlgt":"<br>【武将定位】 彩蛋。<br> <br>【武将简介】 遗计两个桃，《无名杀全教程》作者兼主编。在位时治理群聊、解决萌新问题都颇有建树，也被其他群友亲切地称为“桃子姐姐”。“读 教 程”是他的名言，也是〖治典〗的由来。〖检记〗的原型是他写的《死亡笔记》和常说的“突袭检查”。不过遗计两个桃现已经隐退，不多过问江湖。",
            "lyz_guanyu":"<br>【武将定位】 输出·限制·生存<br> <br>【武将简介】 关羽是三国时期蜀汉名将，与张飞并称“万人敌”。阳光包的☼关羽描绘了一个勇武无敌，令敌人闻风丧胆的武圣形象。技能1〖虹铮〗为核心技能，通过积累“势”，在适当时机以【杀】或【决斗】为渠道，发挥『气慑』、『断腕』和『枭首』的强力输出和控制能力。技能2〖显圣〗为觉醒技，取材于《三国演义》中关公显圣的故事。在〖武神〗的帮助下，〖虹铮〗的效果能得到最大程度的发挥。",
            "lyz_guanyinping":"<br>【武将定位】 输出·控场·过牌<br> <br>【武将简介】 关银屏是民间传说关羽女儿的名字。阳光包的☼关银屏对其能力倾向进行了调整。技能1〖戎承〗为基础技能，发动频率相对稳定，若额外获取多刀能力，〖戎承〗能得到更优秀的发挥。技能2〖灼祭〗为强力的输出技能，能有效避免断杀而影响〖戎承〗发动的问题，类似大宝的增伤机制更给☼关银屏提供了极强的输出能力。整体上，☼关银屏能够凭借自身高额的输出来应对各种情况。",
            "lyz_xunyu":"<br>【武将定位】 全能<br> <br>【武将简介】 荀彧是我个人喜爱的谋臣，然其结局令人唏嘘，☼荀彧则用技能的方式呈现了其一生。技能1〖王佐〗为核心技能，通过自动触发或主动卖血的方式令自己或队友获取较高收益。技能2〖先识〗为控制+辅助技能，跳过敌方核心的爆发并为队友免除一次延时锦囊和手牌上限的困扰，使用时需把握时机。技能3〖萧然〗为回复技能，虽然能帮助☼荀彧迅速调整状态，但之后的荀彧其心已寒，〖王佐〗不再。〖困奋〗应是其最后的人生写照。",
            "lyz_zhangliao":"<br>【武将定位】 输出·限制<br> <br>【武将简介】 阳光包的☼张辽取材于张辽在合肥战场大破孙权，使小儿闻名止啼的故事。技能1〖辽来〗为输出+限制技能，对牌多、血多、状态好的敌人能起到优秀的效果，在状态较好时，合理地控制自身的装备数是〖辽来〗发动的关键。技能2〖慑魄〗为输出技能，能够在血量过剩时主动压低自身的状态。“强制使用”意为不会受到诸如〖鸡肋〗或〖空城〗等限制使用牌的技能的影响（但如果此技能并非是限制使用牌的技能，例如〖父荫〗，则仍会生效）。〖慑魄〗的后续效果只针对最初选择的角色，若有其他角色因横置等原因同样受到了此技能的伤害，则其他角色仍然能正常进行出牌阶段。",
            "lyz_xinxianying":"<br>【武将定位】 过牌·辅助<br> <br>【武将简介】 原版的辛宪英因军八与单挑能力差距过大而被广大玩家戏称为“辛笨”，阳光包则尝试着对她的能力倾向进行重塑。技能1〖韬明〗为辅助+限制技能，能为团队拉开较大的牌差，并使一名角色明牌以达成集火的目的。技能2〖才清〗为核心收益技能，能有效地为自身和团队存贮手牌，也可与例如【铁索连环】等牌达成巧妙的联动效果。需注意，若一次性失去大量手牌（例如弃牌阶段弃牌），仍只会触发一次〖才清〗。",
            "lyz_shijian":"<br>【武将定位】 彩蛋<br> <br>【武将简介】 人美声甜而且代码力MAX的超（无）可（名）爱（杀）的（圈）小（内）姐（大）姐（佬），她代更的《合纵抗秦》扩展以及编写的《无名杀win安装程序》、《在线更新》、《全能搜索》、《拖拽读取》等程序和扩展更是造福了众多无名杀玩家，真的不试试吗？",
            "lyz_lvlingqi":"<br>【武将定位】 输出·爆发<br> <br>【武将简介】 官方吕玲绮的技能组与“暴怒的战神”大多重合，而阳光包则尝试呈现一个下邳之战时“四面楚歌，孤军奋战”的战神之女形象。技能1〖战陌〗为收益技能，在自身状态不佳时具有强大的威慑力，但也让☼吕玲绮需谨慎使用装备牌。技能2〖犹凛〗为核心技能，选择合适的效果能够配合〖战陌〗发挥最大的能力。其中距离-1的效果可叠加，为避免被卡距离，推荐在装备栏全部废除之前，至少选择一次距离-1的效果。",
            "lyz_zuoci":"<br>【武将定位】 全能<br> <br>【武将简介】 阳光包的☼左慈保留原左慈的化身机制，并尝试着从技能方面体现一个为凡人所不能为之事的“仙人”的形象。技能1〖尘局〗为控场技能，能够为敌友两方提供相应的负面或正面技能。技能2〖垂瓮〗取材于左慈“盘中垂钓”的故事，是一个优秀的辅助技能，可以对自身使用。技能3〖往生〗为三国杀目前机制中从未有过的复生技能，新生的武将虽然失去了所有技能，但配合〖尘局〗也能在团队中发挥一定作用。",
            "lyz_jiaxu":"<br>【武将定位】 辅助·防御·输出<br> <br>【武将简介】 贾诩在作者的印象中是个计出必成、明哲保身的“毒士”形象，因此在阳光包中进行了相应呈现。技能1〖谏杀〗为输出+辅助技能，主效果为提升一张伤害牌的收益，“无次数限制”指的是不计入次数且无次数限制。技能2〖引澜〗同为输出+辅助技能，配合〖谏杀〗与某些菜刀武将更有不错的发挥，额外指定的目标没有距离限制。技能3〖泯微〗为防御技能，能为手牌稀缺的☼贾诩提供一定的过牌，但也会出现不能享受增益锦囊的负面情况。整体上，合理规划自身的过牌技能和有限的手牌，最大化自身在场上的效果，是操控☼贾诩的关键所在。",
            "lyz_sunce":"<br>【武将定位】 输出·爆发·回复<br> <br>【武将简介】 那个男人，因梗众多而火遍三国杀，甚至火出圈外。因此阳光包的☼孙策在设计时并未选择全部推翻重塑，而是继承发扬其原有技能。技能1〖傲烈〗为回复+过牌技能，从中能看到某个著名技能的影子。技能2〖定疆〗采取使命技的形式，类似原孙策，使命一旦成功，☼孙策将拥有极为可怕的能力。即使使命失败，〖傲烈〗和〖英魂〗也能带给☼孙策相当不错的作战能力。技能3〖霸略〗为主公技，主要配合其他技能的发动，在☼孙策作为主公时拥有更大的初始优势。",
            "lyz_ziyu":"<br>【武将定位】 彩蛋<br> <br>【武将简介】 专注美化30年的无名杀隐藏大佬，还兼职开展编写教程、教导萌新、宣传无名杀、代裁露头等众多业务。一位自信音游人！",
			"lyz_xusheng":"<br>【武将定位】 娱乐<br> <br>【武将简介】 黑白无常之黑无常，地府的看门人，江东铁壁的构筑者。闪耀的宝刀，自信的微笑无不彰显着大宝和善阳光的气质。作为一名合格的三国杀玩家，输入字符时使用一些大宝的名梗代替场上的人名，或许能起到亿点点帮助。<br><br>隐藏效果，输入如下字符：<br>马必宝——获取武将“马钧”的所有技能；<br>宝必昂——获取武将“曹昂”的所有技能；<br>黑白无常——获取武将“神甘宁”的所有技能；<br>二鬼拍门——获取武将“神郭嘉”的所有技能；<br>操作型武将——获取武将“许攸”的所有技能；<br>犯大吴疆土——获取手杀武将“杜预”的所有技能；<br>闹够了没有——你从场上、牌堆或弃牌堆中获得【古锭刀】、【酒】、【火杀】和【铁索连环】。",
            "lyz_bulianshi":"<br>【武将定位】 辅助·限制<br> <br>【武将简介】 步练师是东吴大帝（大魏吴王）孙权的宠妃，丞相步骘的族人，性格不妒，因此受到他人的敬爱。技能1〖心澜〗为核心辅助技能，功能繁多，在使用时需仔细思考如何选择敌友和相应选项以最大化收益。技能2〖偃尊〗取材于步练师“无冕之后”的故事。☼步练师能够在特定时机凭空使用一张或几张自身并不具备的特定类型牌来达成控场、回复、辅助或过牌的多样效果。需注意的是，若在对应时机不选择展示手牌，则无法执行最后的摸牌效果。",
            "lyz_xuedaoshaozhu":"<br>【武将定位】 彩蛋<br> <br>【武将简介】 玄武江湖创始人之一，无名杀玄武版负责人之一，千幻聆音美化总监，主要负责工作扩展内文案编辑，台词配音设计，扩展外交运营；目前与玄武建交合作的扩展有血色衣冠，阳光包，秦时明月，时空枢纽，云将等。（除了XP有点奇怪）",
            "lyz_shen_zhenji":"<br>【武将定位】 过牌·爆发·限制<br> <br>【武将简介】 阳光包☼神甄姬的设计参考了神话故事中“洛水神女”的形象，相传她是代表美丽与爱情的神。技能1〖祈情〗为防御+过牌技能，人们通过向神女祈福来获取美好的爱情。男性角色在交出手牌后，也可以选择与☼神甄姬共同摸牌。技能2〖神降〗为核心技能，只能选择当前拥有合法目标且可使用的牌名（例如不能以此法喝第二张【酒】），以此法使用的牌无次数限制但会计入次数限制（例如可以先出【杀】再发动〖神降〗出第二张【杀】）。若选择的牌名中有装备牌或延时锦囊牌，则会创造一张同名牌，以此法创造的牌会在牌堆洗牌后销毁。技能3〖点川〗为收益技能，类似【灵蛇髻】的效果能为☼神甄姬提供一定的存过牌能力，当〖点川〗令〖神降〗发育成型后，☼神甄姬在回合内将能创造非常可观的收益。",
            "lyz_shen_zhugeliang":"<br>【武将定位】 控场·输出·辅助<br> <br>【武将简介】 ☼神诸葛亮的设计思路来自于诸葛亮创立的军阵—八卦阵，及诸葛亮本人的道士形象。技能1〖斗转〗与技能2〖星锁〗为互相配合的核心技能。阵列角色将拥有额外的输出和防御能力，☼神诸葛亮需合理规划“阵”的布置，在适当时机，也要给予敌人“阵”，以便对夹击的另一敌人触发增伤效果。技能3〖天汲〗为特色技能，通过消耗暂不需要的体力上限，来获取存过牌能力和珍贵的排兵布阵的机会，最大程度地减少☼神诸葛亮给敌人“阵”的负面影响。最后一句描述对包括因刘禅〖放权〗而产生的所有额外回合均生效。",
            "lyz_nanxun":"<br>【武将定位】 彩蛋<br> <br>【武将简介】 南尋，亦称尋，无名杀玩家，热衷于对扩展“十周年UI”和“手杀ui”进行修改，代表作“魔改十周年UI”。代码水平不高，但也会指导萌新和解答一些问题，常出没于夜晚的群聊中。",
            "lyz_shen_guanyu":"<br>【武将定位】 限制·生存·输出<br> <br>【武将简介】 阳光包的☼神关羽仍延续了官方“追魂恶鬼”的形象设定，但具体思路有所差别，整体节奏较慢。技能1〖冥绝〗为生存技能，确保☼神关羽能度过爆发较高的前期，重生后的火【杀】需合理选择目标。技能2〖魇刃〗为主收益技能，只能对有手牌的其他角色发动，但发动后能弃置三个区域的牌，合理地选择颜色和弃牌数是关键，此技能使用的【杀】不计入次数限制且无次数限制。技能3〖噩道〗取材于“六道轮回”中的“饿鬼道”与“畜牲道”，“饿鬼”与“畜牲”能够共存，但自身不能叠加，且在☼神关羽死亡后仍生效。配合〖魇刃〗强制让敌人攻击自身，能够起到不错的效果。",
            "lyz_wangyi":"<br>【武将定位】 成长·限制·控场<br> <br>【武将简介】 阳光包☼王异的人设与官方一致，但武将的技能和定位均有差别，拥有强大的主动能力。技能1〖昭节〗为核心收益技能，带有成长属性，需注意技能的触发条件。技能2〖颖悟〗参考了王异“秘计九出”的典故。“单目标普通锦囊牌”与杨仪的〖狷狭〗范围相同，不包括【无中生有】等锦囊。【无懈可击】、【顺手牵羊】、【决斗】应该是使用频率较高的锦囊牌。总体上，不需要节省〖颖悟〗的次数，尽快地令〖昭节〗发育成型，是☼王异的基本思路。",
            "lyz_zhaoyun":"<br>【武将定位】 防御·过牌<br> <br>【武将简介】 官方赵云防御能力足够，但主动能力、过牌能力不足，且与团队的相性较差。阳光包则作出了部分调整。技能1〖鳞煌〗为核心技能，触发频率较高，使得☼赵云发挥防御与团队辅助能力时不再依赖手牌，克制大部分拆迁武将。需注意，〖鳞煌〗仅能“使用”而不能“打出”牌（在通常需要“打出”【杀】或【闪】的情况下，都能使用【无懈可击】）。技能2〖宇望〗为收益技能，发动时能积累“心”。☼赵云能够重铸依赖度极低的【杀】、【闪】、【无懈可击】或部分价值不高的锦囊进行过牌，并获取【酒】、【桃】、装备或核心锦囊等关键牌。在获取相应的牌后，剩余的牌回归原位。总而言之，☼赵云正如演义描绘的那样，是个非常稳定、强力、令人心安的武将。",
            
        },
        
        characterTitle:{
		    "lyz_shen_diaochan":"魅影神光",
		    "lyz_shen_zhangliao":"諕杀灭魄",
		    "lyz_shen_gaodayihao":"天龙乘云",
		    "lyz_zhugeliang":"昭星翊汉",
		    "lyz_mayunlu":"骏騄骧驰",
		    "lyz_zhouyu":"汲心之焰",
		    "lyz_shen_lvbu":"且断轮回",
		    "lyz_lingju":"刃介红颜",
		    "lyz_caiwenji":"笳吟芳悲",
		    "lyz_zhenji":"洛影神翩",
		    "lyz_daqiao":"玉裳足惜",
		    "lyz_xiaoqiao":"珺乔遗韵",
		    "lyz_sunshangxiang":"器秀姿戎",
		    "lyz_huangyueying":"姝颜何加",
		    "lyz_simayi":"戢鳞潜翼",
		    "lyz_guojia":"天命靡常",
		    "lyz_machao":"獯鬻慕义",
		    "lyz_huatuo":"着手成春",
		    "lyz_caojie":"凰难咨嗟",
		    "lyz_caocao":"诸心堪负",
		    "lyz_liubei":"迍邅终腾",
		    "lyz_sunjian":"凌威荡虏",
		    "lyz_zhangjiao":"太平难复",
		    "lyz_zhangchunhua":"殁情于宣",
		    "lyz_luxun":"谦謇言君",
		    "lyz_shen_simayi":"思著太虚",
		    "lyz_zhangxingcai":"霞绽星煌",
		    "lyz_diaochan":"云渡潇湘",
		    "lyz_shen_zhouyu":"琴蕴灼锋",
		    "lyz_yangguangweiliang":"作者彩蛋",
		    "lyz_zhangfei":"虎砺山河",
		    "lyz_yjlgt":"萌新殺手",
		    "lyz_guanyu":"睥睨天下",
		    "lyz_guanyinping":"青龙饮恨",
		    "lyz_xunyu":"忠秉临渊",
		    "lyz_zhangliao":"逍遥震魂",
		    "lyz_xinxianying":"慧鉴明心",
		    "lyz_shijian":"小姐姐",
		    "lyz_lvlingqi":"碧血孤芳",
		    "lyz_zuoci":"怎却凡尘",
		    "lyz_jiaxu":"乾坤毋问",
		    "lyz_sunce":"那个男人",
		    "lyz_ziyu":"七笺循诱",
			"lyz_xusheng":"稀世珍宝",
			"lyz_bulianshi":"无冕之后",
			"lyz_xuedaoshaozhu":"碎玉折香",		
		    "lyz_shen_zhenji":"忽怅神宵",
		    "lyz_shen_zhugeliang":"八阵连星",
		    "lyz_nanxun":"小有名气",
		    "lyz_shen_guanyu":"厄刃拂夜",
		    "lyz_wangyi":"绝智明妍",
		    "lyz_zhaoyun":"云涯无对",
		
		},       
       
       //技能代码
       skill:{
            lyzlinhuang:{
                group:"lyzlinhuang_use",
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:["phaseZhunbeiBegin","loseAfter"]
                },
                intro:{
                    content:"共有#枚“心”"
                },
                marktext:"心",
                forced:true,
                filter:function(event,player){
                    if(player.countMark("lyzlinhuang")>6) return false;
                    if(event.name!="lose") return true;
                    else{
                        var evt=event.getParent();
                        return evt.name!="useCard";
                    }
                },
                content:function(){
                    player.addMark("lyzlinhuang",1);
                },
                subSkill:{
                    use:{
                         enable:'chooseToUse',
                         audio:"lyzlinhuang",
				filter:function(event,player){
					if(!player.countMark("lyzlinhuang")) return false;
					return event.filterCard({name:'sha'},player,event)||
						event.filterCard({name:'wuxie'},player,event)||
						event.filterCard({name:'shan'},player,event);
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						if(event.filterCard({name:'sha'},player,event)){
							list.push(['基本','','sha']);
                            for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
						}
						if(event.filterCard({name:'wuxie'},player,event)){
							list.push(['锦囊','','wuxie']);
						}						
						if(event.filterCard({name:'shan'},player,event)){
							list.push(['基本','','shan']);
						}
						return ui.create.dialog('鳞煌',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};						
							if(card.name=='sha'){
								if(card.nature=='fire') return 2.95;
								else return 2.9;
							}
							else if(card.name=='wuxie'||card.name=='shan'){
								return 4;
							}
					},
					backup:function(links,player){
						return {
							filterCard:function(){return false},
							viewAs:{name:links[0][2],nature:links[0][3],isCard:true},
							audio:"lyzlinhuang",
							selectCard:-1,
							popname:true,
							precontent:function(){
								player.removeMark("lyzlinhuang");
							},
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'的目标';
					}
				},
				hiddenCard:function(player,name){
					return (name=="sha"||name=="shan"||name=="wuxie")&&player.countMark('lyzlinhuang')>0;
				},
				ai:{
					order:function(){
					    var player=_status.event.player;
						var event=_status.event;													
						if(event.filterCard({name:'wuxie'},player,event)||event.filterCard({name:'shan'},player,event)){
							return 4;
						}
						if(event.filterCard({name:'sha'},player,event)){
							return 2.9;
						}
					},
					respondSha:true,
					respondShan:true,
					skillTagFilter:function(player,tag,arg){
						if(!player.countMark("lyzlinhuang")) return false;
						return true;
					},
					result:{
						player:function(player){
							return 1;
						}
					}
				}
                    }
                }
            },
            lyzyuwang:{
                enable:"phaseUse",
                group:"lyzyuwang2",
                audio:"ext:阳光包/audio:2",
                filter:function(event,player){
                    return player.countCards("he")>0;
                },
                filterCard:function(card,player){
					return !player.storage.lyzyuwang||!player.storage.lyzyuwang.contains(get.type(card,'trick'));
				},
				check:function(card){
				    if(card.name=="wuxie"||card.name=="sha"||card.name=="shan") return 10;
					else return 10-get.value(card);
				},
				position:"he",
				discard:false,
				lose:false,
				delay:false,    
				content:function(){
				    "step 0"
				    if(!player.storage.lyzyuwang) player.storage.lyzyuwang=[];
					player.storage.lyzyuwang.push(get.type(cards[0],'trick'));
					"step 1"
					player.loseToDiscardpile(cards[0]);
					player.draw();
					"step 2"
					var type=get.type(cards[0]);
					if(type=="basic"){
					    var names=[];
						var cards=[];
						while(cards.length<3){
							var card=get.cardPile(function(card){
								return !cards.contains(card)&&!names.contains(card.name)&&get.type(card)=='basic';
							});
							if(card){
								cards.push(card);
								names.push(card.name);
							}
							else break;
						}
						if(cards.length){
						    player.chooseCardButton("请选择要获得的牌",true,cards).set("ai",function(button){
                                    return 1;
                            });
						}
						else event.finish();					    
					}
					else event.goto(4);
					"step 3"
					if(result.bool){
					    player.gain(result.links,"gain2");
					    event.finish();
					}
					"step 4"
					var names=[];
						var cards=[];
						while(cards.length<4){
							var card=get.cardPile(function(card){
								return !cards.contains(card)&&!names.contains(card.name)&&get.type(card)!='basic';
							});
							if(card){
								cards.push(card);
								names.push(card.name);
							}
							else break;
						}
						if(cards.length){
						    player.chooseCardButton("请选择要获得的牌",true,cards).set("ai",function(button){
                                    return 1;
                            });
						}
						else event.finish();
						"step 5"	
				      if(result.bool){
					    player.gain(result.links,"gain2");
					}
				},
				ai:{
                    order:10,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
            },
            lyzyuwang2:{
                charlotte:true,
                trigger:{
                    player:"phaseBefore"
                },
                forced:true,
                popup:false,
                content:function(){
                    player.storage.lyzyuwang=[];
                }
            },
            lyzzhaojie:{
                audio:"ext:阳光包/audio:2",
                derivation:["lyzzhaojie_lv1","lyzzhaojie_lv2","lyzzhaojie_lv3"],
                group:["lyzzhaojie_clear","lyzzhaojie_card"],
                intro:{
                    content:"cards"
                },
                enable:"phaseUse",
                usable:1,
                selectCard:[0,1],
                filterCard:true,
                check:function(card){
					return -1;
				},
				position:"he",
				content:function(){
				    "step 0"
				    player.markSkill("lyzzhaojie");
				    if(cards.length){
				         var card=cards[0];
				         player.storage.lyzzhaojie=card;
				         event.finish();
				    }
				    else player.judge();
				    "step 1"
				    player.storage.lyzzhaojie=result.card;
				},
				ai:{
                    order:10,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
				subSkill:{
				    clear:{
				        trigger:{
				            player:"phaseBegin"
				        },
				        forced:true,
				        popup:false,
				        firstDo:true,
				        charlotte:true,
				        content:function(){
				            delete player.storage.lyzzhaojie;
				            player.unmarkSkill("lyzzhaojie");
				        }
				    },
				    card:{
				       trigger:{
				           global:"useCard"
				       },
				       forced:true,
				       audio:"lyzzhaojie",
				       filter:function(event,player){
				           if(!player.storage.lyzzhaojie) return false;
				           if(!event.targets.length) return false;
				           if(get.type(event.card)!="basic"&&get.type(event.card)!="trick") return false;
				           if(player.storage.lyzzhaojie_lv1!=true&&player.storage.lyzzhaojie_lv2!=true){
				                 return event.player==player&&get.suit(event.card)==get.suit(player.storage.lyzzhaojie);
				           }
				           if(player.storage.lyzzhaojie_lv1==true&&player.storage.lyzzhaojie_lv2!=true){
				                 return event.player==player&&get.color(event.card)==get.color(player.storage.lyzzhaojie);
				           }
				           if(player.storage.lyzzhaojie_lv1==true&&player.storage.lyzzhaojie_lv2==true){
				                 return (event.player==player||event.targets.contains(player))&&get.color(event.card)==get.color(player.storage.lyzzhaojie);
				           }
				           return false;				           			
				       },
				       content:function(){
				           "step 0"
				           event.videoId=lib.status.videoId++;
					    var func=function(player,id){
						var list=[
							'选项一：摸一张牌',
							'选项二：弃置一名角色区域里的一张牌',												
						];
						if(player.storage.lyzzhaojie_lv3==true) list.push('选项三：令此牌结算两次')
						var choiceList=ui.create.dialog('昭节：请选择'+(player.storage.lyzzhaojie_lv3==true?"两":"一")+'项');
						choiceList.videoId=id;
						for(var i=0;i<list.length;i++){
							var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
							str+=list[i];
							str+='</div>';
							var next=choiceList.add(str);
							next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							next.firstChild.link=i;
							for(var j in lib.element.button){
								next[j]=lib.element.button[j];
							}
							choiceList.buttons.add(next.firstChild);
						}
						return choiceList;
					};
					if(player.isOnline2()){
						player.send(func,player,event.videoId);
					}
					event.dialog=func(player,event.videoId);
					if(player!=game.me||_status.auto){
						event.dialog.style.display='none';
					}
					var next=player.chooseButton();
					next.set('dialog',event.videoId);
					next.set('forced',true);
					next.set('ai',function(button){
						var player=_status.event.player;
						switch(button.link){
							case 0:
								return 2;
								break;							
							case 1:
								var num=0;
								return 0.8*Math.max.apply(Math,game.filterPlayer(function(current){
									return current.hasCard((card)=>lib.filter.canBeDiscarded(card,current,player),'hej');
								}).map(function(target){
									return get.effect(target,{name:'guohe_copy'},player,player);
								}));
							 break;
							case 2:
						        return get.effect(trigger.targets[0],trigger.card,trigger.player,player);
							 break;
						}
					});
					if(player.storage.lyzzhaojie_lv3==true) next.set('selectButton',2);
					else next.set('selectButton',1);
					       "step 1"
					       if(player.isOnline2()){
						player.send('closeDialog',event.videoId);
					}
					event.dialog.close();
					result.links.sort();
					for(var i of result.links) game.log(player,'选择了','#g〖昭节〗','的','#y选项'+get.cnNumber(1+i,true))
					event.links=result.links;
					if(result.links.contains(0)) player.draw();
					if(result.links.contains(2)){
					    trigger.player.addTempSkill('olfengzi_buff','phaseUseAfter');
						trigger.olfengzi_buff=trigger.player;
					}
				    if(result.links.contains(1)&&game.hasPlayer(function(current){
						return current.hasCard((card)=>lib.filter.canBeDiscarded(card,current,player),'hej');
					})){
						player.chooseTarget(true,'弃置一名角色区域里的一张牌',function(card,player,current){
							return current.hasCard((card)=>lib.filter.canBeDiscarded(card,current,player),'hej');
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'guohe_copy'},player,player);
						});
					}
					else event.finish();
					"step 2"
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						player.discardPlayerCard(target,'hej',true);
					}
				       }
				    }
				}
            },
            lyzyingwu:{
                audio:"ext:阳光包/audio:2",
                init:function(player){
                    player.storage.lyzyingwu=0;
                },
                mark:true,
                intro: {
                  content: function(storage, player, skill) {
                       var str="已使用过"+player.storage.lyzyingwu+"次<br>";
                       if(player.storage.lyzyingwu<3) str+="〖昭节〗lv0";
                       if(player.storage.lyzyingwu>2&&player.storage.lyzyingwu<6) str+="〖昭节〗lv1";
                       if(player.storage.lyzyingwu>5&&player.storage.lyzyingwu<9) str+="〖昭节〗lv2";
                       if(player.storage.lyzyingwu>8) str+="〖昭节〗lv3";
                       return str;
                  }
                },
                group:"lyzyingwu_use",
                enable: "chooseToUse",
                viewAs: {
                     name: "wuxie",
                     isCard: true,
                },
                filterCard: function(){
                     return false;
                },
                viewAsFilter: function(player) {
                      if(player.storage.lyzyingwu>=9) return false;
                      if(player.hasSkill("lyzyingwu2")) return false;
                      return player !== _status.currentPhase;
                },
                selectCard: -1,
                precontent: function(){
                      "step 0"
                      player.addTempSkill("lyzyingwu2");
                      player.storage.lyzyingwu++;
                      "step 1"
                      if(player.storage.lyzyingwu==3) player.storage.lyzzhaojie_lv1=true;
                      if(player.storage.lyzyingwu==6) player.storage.lyzzhaojie_lv2=true;
                      if(player.storage.lyzyingwu==9) player.storage.lyzzhaojie_lv3=true;
                },
                hiddenCard:function(player,name){
                      return name=="wuxie"&&!player.hasSkill("lyzyingwu2");
                },
                prompt: "视为使用一张【无懈可击】",
                ai: {
                      respondWuxie: true,
                      basic: {
                          useful: [6, 4],
                          value: [6, 4],
                      },
                      result: {
                          player: 1,
                      },
                          expose: 0.2,
                },
                subSkill:{
                     use:{
                         enable:"phaseUse",
                         usable:1,
                         audio:"lyzyingwu",
                         filter:function(event,player){
                            if(player.storage.lyzyingwu>=9) return false;
                            return true;
                         },
                         chooseButton:{
					dialog:function(player){
						var list=[];
					for(var name of lib.inpile){
						var info=lib.card[name];
						if(!info||info.type!='trick'||info.notarget||(info.selectTarget&&info.selectTarget!=1)) continue;
						list.push(name);
					}
						return ui.create.dialog(get.translation('lyzyingwu'),[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					
					backup:function(links,player){
						return {
							filterCard: function(){
                                 return false;
                            },
							selectCard:-1,
							audio:"lyzyingwu",
							popname:true,
							viewAs:{name:links[0][2]},
							precontent: function(){
                      "step 0"
                      player.storage.lyzyingwu++;
                      "step 1"
                      if(player.storage.lyzyingwu==3) player.storage.lyzzhaojie_lv1=true;
                      if(player.storage.lyzyingwu==6) player.storage.lyzzhaojie_lv2=true;
                      if(player.storage.lyzyingwu==9) player.storage.lyzzhaojie_lv3=true;
                },
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][2])+'的目标';
					}
				},
				ai:{
                    order:7,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
                     }
                }
            },
            lyzyingwu2:{},
            lyzmingjue:{
                 group:"lyzmingjue_die",
                 trigger:{
                    player:["damageBegin4","phaseDiscardBefore"]
                 },
                 forced:true,
                 audio:"ext:阳光包/audio:2",
                 filter:function(event,player){
                    if(game.dead.length>0) return false;
                    return game.countPlayer()>3;
                 },
                 content:function(){
                    trigger.cancel();
                 },
                 ai:{
                    effect:{
						target:function(card,player,target,current){
						    if(game.dead.length>0||game.countPlayer()<=3) return;
							if(get.tag(card,'damage')&&!player.hasSkillTag('jueqing',false,target)) return 'zerotarget';
						}
					},
                 },
                 subSkill:{
                     die:{
                         trigger:{
                             player:"dying"
                         },
                         usable:1,
                         forced:true,
                         audio:"lyzmingjue",
                         content:function(){
                             "step 0"
                             player.recover(1-player.hp);
                             "step 1"
                             player.chooseTarget("选择火【杀】的目标",true,function(card,player,target){
                                return player!=target;
                            }).set('ai',function(target){
                                var player=_status.event.player;
                                var att=get.attitude(player,target);
                                if(att<0){
                                     if(target.countCards("h")>2) return 0;
                                     return get.effect(target,{name:"sha"},player,player);
                                }
                                else {
                                     if(target.hasSkillTag("maixie")&&target.hp>2) return att;
                                     return 0
                                }
                                return get.effect(target,{name:"sha"},player,player);
                            }); 
                            "step 2"
                            if(result.bool) event.related=player.useCard({name:"sha",nature:"fire"},result.targets[0],false);
                            else event.finish();                            
                             "step 3"
                             if(!event.related||!game.hasPlayer2(function(current){
                                   return current.getHistory('damage',function(evt){
                                         return evt.getParent(2)==event.related;
                                    }).length>0;
                             })){
                                player.loseHp();
                             }
                         },
                         ai:{
                            effect:{
                                player:function(card,player,target){
                                    if(player.isDying()&&get.name(card)=="sha"&&get.tag(card,"damage")&&get.attitude(target,player)>0&&target.hp>1) return [1,1,1,1];
                                }                          
                            }              
                        }
                     }
                 }
            },
            lyzyanren:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
                    return target!=player&&target.countCards('h');
                },
                content:function(){
                    "step 0"
                    var info=["魇刃"];			
					if(target.countCards('h')){
						info.push('<div class="text center">'+get.translation(target)+'的手牌区</div>');
						info.push(target.getCards('h'));
					}
					if(target.countCards('e')){
						info.push('<div class="text center">'+get.translation(target)+'的装备区</div>');
						info.push(target.getCards('e'));
					}
					if(target.countCards('j')){
						info.push('<div class="text center">'+get.translation(target)+'的判定区</div>');
						info.push(target.getCards('j'));
					}					
                    var next=player.chooseButton(true,[1,2]).set('filterButton',function(button){
                        for(var i=0;i<ui.selected.buttons.length;i++){
                            if(get.color(button.link)!=get.color(ui.selected.buttons[i].link)) return false;                  
                        };
                        return true;
                    }).set('dialog',event.videoId);
                    next.set('createDialog',info);
                    "step 1"
                    if(result.bool){
                        event.cards=result.links.slice(0);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    target.discard(event.cards);              
                    "step 3"
                    if(get.color(event.cards[0])=="red") var card={name:"sha"};
                    else var card={name:"juedou"};
                    if(event.cards.length==1) player.useCard(card,target,false);
                    if(event.cards.length==2) target.useCard(card,player,false);
                },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function(player,target){
                            return -target.countCards('h');
                        }
                    },
                    order:10,
                    expose:0.4,
                }
            },
            lyzedao:{
                group:"lyzedao_damage",
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
                    return target!=player&&target.hasSkill("lyzedao2");
                },
                content:function(){
                    "step 0"
                    target.judge();
                    "step 1"
                    if(result.color=="red") target.addSkill("lyzegui");
                    else target.addSkill("lyzchusheng");
                },
                ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                            if(target.hasSkill("lyzegui")&&target.hasSkill("lyzchusheng")) return 0;
                            return -1;
                        },
                    },
                },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function(){
                            if(trigger.source) trigger.source.addSkill("lyzedao2");
                        }
                    }
                }
            },
            lyzedao2:{},
            lyzegui:{
                mark:true,
                charlotte:true,
				intro:{
					content:"手牌上限-1",
				},
				mod:{
					maxHandcard:function(player,num){
						return num-1;
					},
				},
            },
            lyzchusheng:{
                mark:true,
                charlotte:true,
                intro:{
                    content:"受到属性伤害+1"
                },
                trigger:{
                 player:"damageBegin3",
             },
             forced:true,
             filter:function(event,player){
                 if(event.nature) return true;
                 return false;
             },
             content:function(){
                 trigger.num++;
             },
            },
            lyzdingzheng:{
                 trigger:{
                     global:"useCardAfter"
                 },
                 audio:"ext:阳光包/audio:2",
                 direct:true,
                 usable:2,
                 filter:function(event,player){
                      if(event.player==player) return false;                      
                      if(event.targets.contains(event.player)&&event.targets.length==1) return false;
                      if(player.countDiscardableCards("he")==0) return false;
                      if(event.parent.name=='lyzdingzheng') return false;
					  if(event.targets.length!=1) return false;
                      if(!event.targets[0].isAlive()) return false;
                      if(!event.player.isAlive()) return false;
					  if(event.card&&(event.card.name=='wuxie'||event.card.name=='shan'||event.card.name=='jiedao'||event.card.name=='shengdong')) return false;
					  var type=get.type(event.card);
					  if(type!='trick'&&type!='basic') return false;
					  return true;
                 },
                 content:function(){
                       "step 0"
                       player.chooseToDiscard("he",get.prompt("lyzdingzheng"),"使用者："+get.translation(trigger.player)+"<br>牌："+get.translation(trigger.card)+"<br>目标："+get.translation(trigger.targets),function(card){
                            return true;
                       }).set('ai',function(card){
                            var target=trigger.targets[0];
                            var player=_status.event.player;
                            var player2=_status.event.getTrigger().player;
                            var eff1=get.effect(target,{name:trigger.card.name},player2,player);
                            var eff2=get.effect(player2,{name:trigger.card.name},player,player);
                            if(eff1>0&&get.color(card)=="red") return 7-get.value(card);
                            if(eff2>0&&get.color(card)=="black") return 7-get.value(card);
                            return 0;
                       });
                       "step 1"
                       if(result.bool){
                            player.logSkill("lyzdingzheng");
                            var card=result.cards[0];
                            var color=get.color(card);
                            if(color=="red") trigger.player.useCard({name:trigger.card.name,nature:trigger.card.nature,isCard:true},(trigger._targets||trigger.targets).slice(0));
                            else player.useCard({name:trigger.card.name,nature:trigger.card.nature,isCard:true},trigger.player);
                       }
                       else{
						player.storage.counttrigger.lyzdingzheng--;
					   }
                 }
            },
            lyzshiyi:{
                 audio:"ext:阳光包/audio:2",
                 group:"lyzshiyi_draw",
                 trigger:{
                     global:"roundStart"
                 },
                 forced:true,
                 content:function(){
                     "step 0"
                     for(var i=0;i<game.players.length;i++){
						   if(game.players[i].hasSkill("lyzshiyi_effect")){
							     game.players[i].removeSkill("lyzshiyi_effect");
						   }						
					 }
					 "step 1"
					 player.chooseTarget("〖释疑〗：请选择一名角色",true,function(card,player,target){
                        return target!=player;
                     }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        return att;
                     });
                    "step 2"
                    if(result.bool){
                    player.line(result.targets[0]);
                    result.targets[0].addSkill("lyzshiyi_effect");
                    } 
                 },
                 subSkill:{
                    draw:{
                        trigger:{global:'useCard'},
                        audio:'lyzshiyi',
				forced:true,
				filter:function(event,player){
				    var evt=event.player.getLastUsed(1);
					if(!evt) return false;
					return event.player.hasSkill("lyzshiyi_effect");					
				},
				content:function(){
				    var evt=trigger.player.getLastUsed(1);
					var color1=get.color(evt.card);
					var color2=get.color(trigger.card);
					if(color1&&color2&&color1!='none'&&color2!='none'&&color1!=color2) trigger.player.draw();
					else if(color1&&color2&&color1!='none'&&color2!='none'&&color1==color2) player.draw();				
				},
                    },
                    effect:{
                      mark:true,
                      intro:{
                         content:"你的牌得这样打！"
                      },
                      mod:{
					aiOrder:function(player,card,num){
						if(typeof card=='object'){
							var evt=player.getLastUsed();
							if(evt&&evt.card&&get.color(evt.card)!='none'&&get.color(card)!='none'&&get.color(evt.card)!=get.color(card)){
								return num+10;
							}
						}
					},
				},
                    }
                 }
            },
            lyzhuanxing:{
                 group:"lyzhuanxing_give",
                 audio:"ext:阳光包/audio:2",
                 trigger:{
                     global:"phaseJieshuBegin"
                 },
                 forced:true,
                 filter:function(event,player){
                     if(event.player==player) return false;
                     return event.player.countCards("he");
                 },
                 content:function(){
                      "step 0"
                    trigger.player.chooseCard('he',true,'交给'+get.translation(player)+'一张牌');
					"step 1"
					player.gain(result.cards,trigger.player,"giveAuto");
                 },
                 subSkill:{
                     give:{
                         trigger:{
                             player:"phaseBegin"
                         },
                         forced:true,
                         audio:"lyzhuanxing",
                         filter:function(event,player){
                              if(player.countCards("he")==0) return false;
                              return player.phaseNumber>1;
                         },
                         content:function(){
                             "step 0"
                             var num1=Math.floor(game.countPlayer()/2);
                             var num2=player.countCards("he");
                             var num=Math.min(num1,num2);
                             player.chooseTarget("请选择要交给牌的角色",num,true,function(card,player,target){                                        
                                   return target!=player;
                              }).ai=function(target){
                                   var player=_status.event.player;
                                   var att=get.attitude(player,target);
                                   return att;   
                              }
                              "step 1"
                              if(result.bool){
                                 event.targets=result.targets.slice(0);
                              }
                              else event.finish();
                              "step 2" 
					         event.current=player.next;
                             event.currented=[];
                             "step 3"
                              event.currented.push(event.current);
                             if(event.targets.contains(event.current)){                               
                                 var name=get.translation(event.current);
                                 if(player.countCards("he")) player.chooseCard('he',true,'〖缓行〗：交给'+name+'一张牌');
                                 else event.finish();
                             }
                             else event.goto(5);
                             "step 4"
                             if(result.bool){
                                  event.current.gain(result.cards,player,"giveAuto");
                             }
                             "step 5"
                             event.current = event.current.next;
                                if ( player.countCards("he") && event.current != player && !event.currented.contains(event.current)) {
                                    event.goto(3);
                                }
                         }
                     }
                 }
            },
            lyzshepo:{
               audio:"ext:阳光包/audio:2",
               enable:"phaseUse",
               usable:1,
               filter:function(event,player){
                    return true;
                },
               filterTarget:function(card,player,target){
                    return target!=player;
               },
               content:function(){
                    "step 0"
                    if(target.hp<player.hp) player.loseHp();
                    "step 1"
                    var list=[];
                    list.push(['基本','','sha','thunder']);
                    list.push(['锦囊','','juedou']);
                    player.chooseButton(true,["请选择要强制使用的牌", [list, "vcard"]]);
                    "step 2"
                    if(result.bool){
                        event.related=player.useCard({name:result.links[0][2],nature:result.links[0][3]},target);
                    }
                    "step 3"
                    if(game.hasPlayer2(function(current){
                        return current.getHistory('damage',function(evt){
                            return evt.getParent(2)==event.related;
                        }).length>0;
                    })){
                        target.skip('phaseUse');
                        target.addTempSkill('lyzshepo2',{player:'phaseUseSkipped'});
                    }
               },                
            },
            lyzshepo2:{
                mark:true,
                charlotte:true,
                intro:{content:'跳过下个出牌阶段'},
            },
            lyzliaolai:{
                group:"lyzliaolai_gain",
                audio:"ext:阳光包/audio:2",
                forced:true,
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
                    return event.card&&(get.type(event.card)=='trick'||get.type(event.card)=='basic'&&!['shan','tao','jiu','du'].contains(event.card.name))&&game.hasPlayer(function(current){
                        return current!=player&&current.hp>=player.hp;
                    });
                },
                content:function(){
                    trigger.directHit.addArray(game.filterPlayer(function(current){
                         return current!=player&&current.hp>=player.hp;
                    }));
                },
                ai:{
                    directHit_ai:true,
                    skillTagFilter:function(player,tag,arg){
                        return arg.target.hp>=player.hp;
                    },
                },
                subSkill:{
                    gain:{
                        trigger:{source:'damageSource'},
                        audio:"lyzliaolai",
                        forced:true,
                        filter:function(event,player){
                             if(!event.player.countCards("hej")) return false;
                             return player!=event.player&&(event.player.countCards('h')>=player.countCards('h')||event.player.countCards('e')>=player.countCards('e'));
                        },
                        content:function(){                            
                             player.gainPlayerCard(trigger.player,true,'hej','获得'+get.translation(trigger.player)+'区域里一张牌',function(card){                                 
                                 return true;
                             });
                        }
                    }
                }
            },           
            lyzdouzhuan:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                selectTarget:1,
                multitarget:true,
                multiline:true,
                prompt:"令一名角色获得或移去“阵”",
                content:function(){
                     for(var i=0;i<targets.length;i++){
                         if(!targets[i].hasSkill("lyzzhen")) targets[i].addSkill("lyzzhen");
                         else targets[i].removeSkill("lyzzhen");
                     }
                },
                ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                            if(!target.hasSkill("lyzzhen")) return 1;
                            return -1;
                        }
                    },
                },
            },
            lyzzhen:{
                mark:true,
                marktext:"阵",
                intro:{
                    content:"已成为阵列角色"
                },
                popup:false,
                charlotte:true,
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function(event,player){
                    return event.card&&get.tag(event.card,'damage')&&game.hasPlayer(function(current){
                        return !current.hasSkill("lyzzhen");
                    });
                },
                content:function(){
                    trigger.directHit.addArray(game.filterPlayer(function(current){
                        return !current.hasSkill("lyzzhen");
                    }));
                },
                ai:{
                    directHit_ai:true,
                    skillTagFilter:function(player,tag,arg){
                        return !arg.target.hasSkill("lyzzhen");
                    },
                },
            },
            lyzxingsuo:{
                global:["lyzxingsuo2","lyzxingsuo3"],
                audio:"ext:阳光包/audio:2",
            },
            lyzxingsuo2:{
                trigger:{
                    player:"useCardToBefore"
                },
                forced:true,
                audio:"lyzxingsuo",
                filter:function(event,player){
                    if(player.hasSkill("lyzzhen")) return false;
                    return event.targets.length==1&&event.target.hasSkill("lyzzhen")&&get.tag(event.card,'damage');
                },
                content:function(){
                    "step 0"
                    player.logSkill("lyzxingsuo");
                    var eff=get.effect(trigger.target,trigger.card,player,player);
                    player.chooseToDiscard("he",'弃置一张牌，否则此牌对'+get.translation(trigger.target)+'无效',function(card){
                        return true;
                    }).set('ai',function(card){
                        if(_status.event.eff>0){
                            return 10-get.value(card);
                        }
                        return 0;
                    }).set('eff',eff);
                    "step 1"
                    if(result.bool==false){
                        trigger.cancel();
                    }
                },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                            if(get.tag(card,'damage')&&get.attitude(player,target)<0){
                                var bs=player.getCards('he');
                                if(bs.length<=3){
                                    for(var i=0;i<bs.length;i++){
                                        if(get.tag(bs[i],'damage')&&get.value(bs[i])<7){
                                            return [1,0,1,-0.5];
                                        }
                                    }
                                    return 0;
                                }
                                if(bs.length<2&&!player.hasSkillTag("noh")) return 0;
                                return [1,0,1,-0.5];
                            }
                        }
                    }
                }
            },
            lyzxingsuo3:{
                trigger:{
                    player:"damageBegin3"
                },
                forced:true,
                audio:"lyzxingsuo",
                filter:function(event,player){
                     if(player.hasSkill("lyzzhen")) return false;
                     return player.previous.hasSkill("lyzzhen")&&player.next.hasSkill("lyzzhen")&&player.previous!=player.next;
                },
                content:function(){
                    player.logSkill("lyzxingsuo");
                    trigger.num++;
                },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                            if(get.tag(card,'damage')&&target.previous.hasSkill("lyzzhen")&&target.next.hasSkill("lyzzhen")&&target.previous!=target.next) return [1,-2];
                        }
                    }
                }
            },
            lyztianji:{
                group:["lyztianji_draw","lyztianji_discard","lyztianji_storage","lyztianji_clear"],
                trigger:{
                    global:"phaseEnd"
                },
                audio:"ext:阳光包/audio:2",
                check:function(event,player){
                    return player.maxHp>3
                },
                filter:function(event,player){
                    return !player.hasSkill("lyztianji2")&&event.player!=player;
                },
                content:function(){
                    "step 0"
                    player.addTempSkill("lyztianji2","roundStart");
                    "step 1"
                    player.loseMaxHp();
                    "step 2"                    
                     var next=player.insertPhase();
                     event.next.remove(next);
                     trigger.next.push(next);
                },
                subSkill:{
                    draw:{
                         trigger:{player:'phaseDrawBegin2'},
                         audio:"lyztianji",
                         forced:true,
                         filter:function(event,player){
                             return !event.numFixed&&player.storage.lyztianji==true;
                         },
                         content:function(){
                            trigger.num++;
                         },
                    },
                    discard:{
                        trigger:{player:'phaseDiscardBefore'},
                        audio:"lyztianji",
                        forced:true,
                        filter:function(event,player){
                            return player.storage.lyztianji==true;
                        },
                        content:function(){
                            trigger.cancel();
                        }
                    },
                    storage:{
                        trigger:{player:"phaseBefore"},
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                            return event.skill;
                        },
                        content:function(){
                            player.storage.lyztianji=true;
                        }
                    },
                    clear:{
                        trigger:{player:"phaseEnd"},
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                            return event.skill;
                        },
                        content:function(){
                            delete player.storage.lyztianji;
                        }
                    }
                },
            },
            lyztianji2:{},
            
            lyzqiqing:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:"phaseBegin"
                },                
                forced:true,
                content:function(){
                    "step 0"
                    if(trigger.player!=player){
                         if(!trigger.player.countCards("he")){
                               player.addTempSkill("lyzqiqing_buff");
                               event.finish();
                         }
                        else {
                              trigger.player.chooseCard("交给"+get.translation(player)+"一张牌，或点取消令其此回合受到的伤害-1","he").set('ai',function(card){  
                                    if(get.attitude(trigger.player,player)>=0) return 7-get.value(card);
                                    return Math.random()<0.4;                      
                              });
                        }
                    }
                    else event.goto(3);
                    "step 1"
                    if(result.bool){
                        trigger.player.give(result.cards,player,true);
                        if(game.hasPlayer(function(current){
                            return current.sex!=trigger.player.sex;
                        })){
                            trigger.player.chooseTarget("与一名异性角色各摸一张牌",true,function(card,player,target){
                                return trigger.player.sex!=target.sex;
                            }).set('ai',function(target){
                                var att=get.attitude(trigger.player,target);
                                return att;
                            }); 
                        }
                        else event.finish();
                    }
                    else {
                        player.addTempSkill("lyzqiqing_buff");
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        game.asyncDraw([trigger.player,result.targets[0]]);
                    }
                    event.finish();
                    "step 3"
                    player.chooseBool("与一名异性角色各摸一张牌，或点取消令自己此回合受到的伤害-1");
                    "step 4"
                    if(result.bool){
                         if(game.hasPlayer(function(current){
                            return current.sex!=trigger.player.sex;
                        })){
                              player.chooseTarget("与一名异性角色各摸一张牌",true,function(card,player,target){
                                return player.sex!=target.sex;
                              }).set('ai',function(target){
                                   var att=get.attitude(player,target);
                                   return att;
                              }); 
                         }
                    }
                    else {
                        player.addTempSkill("lyzqiqing_buff");
                        event.finish(); 
                    }
                    "step 5"
                    if(result.bool){
                        game.asyncDraw([player,result.targets[0]]);
                    }
                },
                subSkill:{
                    buff:{
                        charlotte:true,
                        intro:{
                          content:"此回合受到的伤害-1"
                        },
                        mark:true,
                        trigger:{player:'damageBegin3'},      
                        audio:"lyzqiqing",          
                        forced:true,
                        content:function(){
                            trigger.num--;
                        },
                        ai:{
                          nofire:true,
                          nothunder:true,
                          nodamage:true,
                          effect:{
                              target:function(card,player,target,current){
                                  if(get.tag(card,'damage')) return [0,0];
                              }
                          }
                       }                 
                    }
                }
            },
            lyzshenjiang:{
                init:function(player){
                    player.storage.lyzshenjiang=1;
                },
                intro:{
                    content:"出牌阶段限一次，你可从所有名称字数不大于(#)的牌中选择至多(#)张名称字数不同的可使用的牌，然后你按选牌的顺序视为依次合法地使用这些牌。"
                },
                mark:true,
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                content:function(){
                    "step 0"
                    var list=[];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if(get.translation(name).length>player.storage.lyzshenjiang) continue;
                        if(!player.hasUseTarget(name)) continue;
                        if(lib.filter.cardEnabled({name: name}, player)){
                            if(name=='sha'){
                                list.push(['基本','','sha']);
                                for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                            }
                            else if (get.type(name) == "trick") list.push(["锦囊","",name]);
                            else if(get.type(name)=='trick'||get.type(name)=='delay') list.push(['锦囊','',name]);
                            else if(get.type(name)=='basic') list.push(['基本','',name]);
                            else if(get.type(name)=='equip') list.push(['装备','',name]);
                        }                        
                    }
                    if(list.length==0){
                          event.finish();
                          return;
                    }
                    player.chooseButton(true,[0,Math.min(player.storage.lyzshenjiang,list.length)],["请按顺序选择要使用的牌", [list, "vcard"]]).set('filterButton',function(button){                       
                        for(var i=0;i<ui.selected.buttons.length;i++){
                            if(get.translation(button.link[2]).length==get.translation(ui.selected.buttons[i].link[2]).length) return false;                  
                        };
                        return true;
                    }).set("ai", function(button) {
                       var effect=player.getUseValue(button.link[2]);
                       if (effect>2) return effect;
                       return 0;
                    });
                   "step 1"
                   if(result.bool&&result.links.length){
                       event.links=result.links;
                       event.num=0;
					}
					else event.finish();
					"step 2" 
				  if(player.isIn){ 
				       var name=event.links[event.num][2];
				       var nature=event.links[event.num][3];
				       if(player.hasUseTarget(name)){
				             if(get.type(name)=="basic"||get.type(name)=="trick") player.chooseUseTarget({name:name,nature:nature,isCard:true},true);
					         else if(get.type(name)=="equip"){
					             var card=game.createCard(name);
					             player.chooseUseTarget(card,true);
					         }
					         else if(get.type(name)=="delay"){
					             var card=game.createCard(name);
					             player.chooseUseTarget(card,true);
					         }
				        }					   
				  }
				  else event.finish();
				  "step 3"  
				  if(event.num<event.links.length-1){
				      event.num++;
				      event.goto(2);
				  }            
                },
                ai:{
                    order:7,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
            },
            lyzdianchuan:{
                group:"lyzdianchuan_add",
                audio:"ext:阳光包/audio:2",
                trigger:{player:'phaseUseEnd'},
				direct:true,
				content:function(){
					'step 0'
					var list=['摸一张牌'];
					if(player.countCards('he')>1) list.push('将一张牌置于武将牌上并于回合结束后获得之');
					player.chooseControl('cancel2').set('prompt',get.prompt('lyzdianchuan')).set('choiceList',list).set('ai',function(){
					 var player=_status.event.player;
					 if(player.countCards('e',function(card){
					  return card.name!='tengjia'&&get.value(card)<=0;
					 })) return 1;
					 if(!player.needsToDiscard()) return 0;
					 return 1;
					});
					'step 1'
					if(result.control=='cancel2'){
					 event.finish();return;
					}
					player.logSkill('lyzdianchuan');
					if(result.index==0){
					 player.draw();
					 event.finish();
					}
					else{
					 player.chooseCard('he',true,function(card,player){
					 return true;
					 }).set('ai',function(card){
					  if(get.position(card)=='e'&&get.value(card)<=0) return 10;
					  return (get.position(card)=='h'?2:1)*-get.value(card);
					 });
					}
					'step 2'
					player.addSkill('lyzdianchuan2');
					player.lose(result.cards,ui.special,'toStorage');
					player.markAuto('lyzdianchuan2',result.cards);
				},
                subSkill:{
                    add:{
                        audio:"lyzdianchuan",
                        trigger:{
                            player:"phaseJieshuBegin"
                        },
                        forced:true,
                        filter:function(event,player){
                            return player.storage.lyzshenjiang<5;
                        },
                        content:function(){
                            player.storage.lyzshenjiang+=2;
                        }
                    }
                }
            },
            lyzdianchuan2:{
				trigger:{player:'phaseEnd'},
				equipSkill:true,
				forced:true,
				popup:false,
				content:function(){
					player.gain(player.getStorage('lyzdianchuan2'),'gain2','log');
					player.storage.lyzdianchuan2.length=0;
					player.removeSkill('lyzdianchuan2');
				},
				intro:{content:'cards'},
			},
            
            lyzyintian:{                
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin"
                },
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                        return player.inRange(current)&&((current.sex=="male")||(current.sex=="female"&&current.group!="shen"));
                    });
                },
                forced:true,
                content:function(){
                    "step 0"
                    var chat=["恶堕于此，尽情沉沦吧！","别忘了，是谁……将你推上的神坛！"].randomGet();
                    player.chat(chat);
                    "step 1"
                    player.chooseTarget("淫天：将一名男性角色改为女性，或将一名女性角色改为神势力",true,function(card,player,target){
                        return player.inRange(target)&&((target.sex=="male")||(target.sex=="female"&&target.group!="shen"));
                    }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        return -att;
                    });
                    "step 2"
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target);
                        if(target.sex=="male"){
                             target.sex="female";
                             target.markSkill("lyzyintian_sex");  
                        }
                        else {
                             target.group="shen";
                        }
                    }
                },
                subSkill:{
                    sex:{
                        intro:{
                          content:"尽情沉沦吧！"
                        }
                    },
                }
            },
            lyzyudi:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                        return current.sex=="female"&&current!=player;
                    });
                },
                filterTarget:function(card,player,target){
                    return target!=player&&target.sex=="female";
                },
                content:function(){
                    "step 0"
                    var chat=["脱不脱？别逼老子亮刀！","从了本少主，可免皮肉之苦！"].randomGet();
                    player.chat(chat);
                    player.viewHandcards(target);
                    "step 1"
                    if(target.countCards("h",{color:"red"})){
                        var cards=target.getCards('h');
                        var togain=[]
                        for(var i=0;i<cards.length;i++){
                            if(get.color(cards[i])=='red') togain.push(cards[i]);
                        }
                        if(togain.length) player.gain(togain,target,'giveAuto');
                        event.finish();
                    }
                    else player.chooseBool("是否对"+get.translation(target)+"造成2点伤害？");
                    "step 2"
                    if(result.bool){
                        target.damage(2);
                    }
                },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function(player,target){
                            return -target.countCards('h');
                        }
                    },
                    order:10,
                    expose:0.4,
                }
            },
            lyzdianshen:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"phaseJieshuBegin"
                },
                direct:true,
                filter:function(event,player){
                    var cards=player.getCards("he");
                    var flag=0;
                    for(var i=0;i<cards.length;i++){
                       if(get.number(cards[i])==11) flag=1
                    }
                    if(flag==0) return false;    
                    return game.hasPlayer(function(current){
                        return current.sex=="female"&&current.group=="shen"&&current!=player;
                    });
                },
                content:function(){
                    "step 0"
                    player.chooseCardTarget({
                        prompt:get.prompt2("lyzdianshen"),
                        filterCard:function(card,player){
                            return get.number(card)==11&&lib.filter.cardDiscardable(card,player);
                        },
                        position:'he',
                        filterTarget:function(card,player,target){
                            return target.sex=="female"&&target.group=="shen"&&target!=player;
                        },
                        ai1:function(card){
                            return 6-get.value(card);
                        },
                        ai2:function(target){
                            var att=get.attitude(_status.event.player,target);
                            return -att;
                        },
                    });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        var card=result.cards[0];
                        event.target=target;
                        player.logSkill("lyzdianshen",target);
                        player.discard(card);
                    }
                    else event.finish();
                    "step 2"
                    event.target.chooseControl(function(event,player){
                         var player=_status.event.player,target=_status.event.getParent().player;
                         var att=get.attitude(target,player);
                         if(att>0) return "选项一";
                         return ["选项一","选项二","选项三"].randomGet();
                    }).set('prompt','玷神').set('choiceList',["孕：将手牌补至体力上限然后将所有手牌交给"+get.translation(player),"缚：将武将牌翻至背面并横置","凌：减1点体力上限并令"+get.translation(player)+"加1点体力上限"]);
                    "step 3"
                    if(result.control=="选项一"){
                        var chat=["怎会……如此……","你这恶贼！我要杀了你！"].randomGet();
                        event.target.chat(chat);
                        var num=event.target.maxHp-event.target.countCards("h");
                        if(num>0) event.target.draw(num);                        
                    }
                    if(result.control=="选项二"){
                        var chat=["身虽缚，心尚存！","休想让我屈服！"].randomGet();
                        event.target.chat(chat);
                        event.target.link(true);
                        event.target.turnOver(true);
                        event.finish();
                    }
                    if(result.control=="选项三"){
                        var chat=["呃啊……","可恶……"].randomGet();
                        event.target.chat(chat);
                        event.target.loseMaxHp();
                        player.gainMaxHp();
                        event.finish();
                    }
                    "step 4"
                    player.gain(event.target.getCards('h'),event.target,'giveAuto');
                }
            },
            lyzrugui:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:"die"
                },
                check:function(event,player){
                    return event.player.countCards('he')>2
                },
                logTarget:'player',
                limited:true,
                unique:true,
                skillAnimation:true,
                animationColor:'metal',
                filter:function(event){
                    return event.player.sex=="female";
                },
                content:function(){
                    var chat=["以为做了鬼我就不会放过你吗？","你这辈子都逃不出我的阴影！我是你此生至死都萦绕不去的梦魇！"].randomGet();
                    player.chat(chat);
                    player.awakenSkill("lyzrugui");
                    player.gainMaxHp();
                    player.recover();
                    event.togain=trigger.player.getCards('he');
                    player.gain(event.togain,trigger.player,'giveAuto');
                },
            },
            lyzwendao:{
                mod:{
                    maxHandcard:function(player,num){
                        return num+player.storage.lyzwendao;
                    }
                },
                intro:{
                    content:'本回合手牌上限+#'
                },
                init:function(player){
                    player.storage.lyzwendao=0;
                },
                group:["lyzwendao_maxhand","lyzwendao_clear"],
                trigger:{
                    player:"useCardAfter"
                },
                audio:"ext:阳光包/audio:2",
                forced:true,
                usable:2,
                filter:function(event,player){
                    if(get.type(event.card)=="equip") return false;
                    return true;
                },
                content:function(){
                    if(get.type(trigger.card)=="basic"){
                        var card=get.cardPile(function(card){
                            return get.type2(card)=="trick";
                        });
                    }
                    else {
                        var card=get.cardPile(function(card){
                            return get.type(card)=="basic";
                        });
                    }
                    if(card){
                        player.gain(card,'gain2');
                    }    
                },
                subSkill:{
                    maxhand:{
                        trigger:{
                            player:"useCardAfter"
                        },
                        forced:true,
                        popup:false,
                        lastDo:true,
                        filter:function(event,player){
                            if(get.type(event.card)=="basic") return false;
                            return player.storage.lyzwendao<2;
                        },
                        content:function(){
                            player.storage.lyzwendao++;
                            player.markSkill("lyzwendao");
                        }
                    },
                    clear:{
                        trigger:{global:'phaseAfter'},
                        silent:true,
                        content:function(){
                            player.storage.lyzwendao=0;
                            player.unmarkSkill("lyzwendao");
                        }
                    }
                }
            },
            lyzzhaoce:{
                audio:"ext:阳光包/audio:2",
                group:"lyzzhaoce_storage",
                intro: {
                  content: function(storage, player, skill) {
                      return '已记录的势力：' + get.translation(storage) ;
                  }
                },
                mark: true,
                init:function(player){
                    if(!player.storage.lyzzhaoce) player.storage.lyzzhaoce=[];
                },
                enable:"phaseUse",
                filter:function(event,player){
                    return player.storage.lyzzhaoce.length>0;
                },
                usable:1,
                content:function(){
                    "step 0"
                    var controls=[];
                    if(player.storage.lyzzhaoce.contains("shu")) controls.push("shu");
                    if(player.storage.lyzzhaoce.contains("qun")) controls.push("qun");
                    if(player.storage.lyzzhaoce.contains("wu")) controls.push("wu");
                    if(player.storage.lyzzhaoce.contains("wei")) controls.push("wei");
                    if(player.storage.lyzzhaoce.contains("shen")) controls.push("shen");
                    player.chooseControl(controls).set("prompt","〖昭策〗：请选择一种势力");
                    "step 1"
                    var list;
                    if(_status.characterlist){
                        list=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            if(lib.character[name][1]==result.control) list.push(name);
                        }
                    }                    
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }        
                    if(list.length>0){        
                        player.chooseButton(true).set('ai',function(button){                    
                             return Math.random();
                        }).set('createDialog',['请选择一张武将牌',[list.randomGets(5),'character']]);
                    }
                    else event.finish();
                    "step 2"
                    var link=result.links[0];
                    event.link=link;
                    "step 3"
                    var list=[];
                    var listm=[];
                    listm=lib.character[event.link][3];
                    var func=function(skill){
                        var info=get.info(skill);
                        if(!info||info.charlotte) return false;
                        return true;
                    };
                    for(var i=0;i<listm.length;i++){
                        if(func(listm[i])) list.add(listm[i]);
                    }
                    event.skills=list;
                    player.chooseControl(list).set("prompt","请选择一个技能");
                    "step 4"
                    var skill=result.control;
                    event.skill=skill;
                      player.chooseTarget("请选择要获得技能的角色",function(card,player,target){
                                return true;
                            }).set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    "step 5"
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.line(target);
                        if(target.storage.lyzzhaoce2) target.removeSkill(target.storage.lyzzhaoce2);
                        target.storage.lyzzhaoce2=event.skill;
                        target.addSkillLog(event.skill);
                    }        
                },
                ai:{
                    order:7,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
                subSkill:{
                    storage:{
                        trigger:{
                            player:"damageEnd",
                            global:"roundStart"
                        },
                        forced:true,
                        locked:false,
                        audio:"lyzzhaoce",
                        filter:function(event,player){
                            return player.storage.lyzzhaoce.length<5;
                        },
                        content:function(){
                            if(player.storage.lyzzhaoce.length==0) player.storage.lyzzhaoce.add("shu");
                            else if(player.storage.lyzzhaoce.length==1) player.storage.lyzzhaoce.add("qun");
                            else if(player.storage.lyzzhaoce.length==2) player.storage.lyzzhaoce.add("wu");
                            else if(player.storage.lyzzhaoce.length==3) player.storage.lyzzhaoce.add("wei");
                            else if(player.storage.lyzzhaoce.length==4) player.storage.lyzzhaoce.add("shen");
                        }
                    }
                }
            },
            lyzkuitian:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                content:function(){
                    "step 0"
                    player.judge();
                    "step 1"
                    var color=get.color(result.card);
                    event.card=result.card;
                    event.color=color;
                    if(!player.countCards('he',{color:color})){
                        player.gain(result.card,"gain2");
                        event.finish();
                    } 
                    else {
                        if(color=="red") var str="狂风";
                        else var str="大雾";
                        player.chooseControl(function(){
                             return Math.random()<0.5?'选项一':'选项二';
                        }).set('prompt','窥天').set('choiceList',['获得'+get.translation(result.card),'令至多两名角色处于'+str+'状态直至你下回合开始']);
                    }
                    "step 2"
                    if(result.control=="选项一"){
                        player.gain(event.card,"gain2");
                        event.finish();
                    }
                    else {
                        player.addSkill("dawu3");
                        player.chooseToDiscard(true,"he",{color:event.color});
                        if(event.color=="red") var str="狂风";
                        else var str="大雾";
                        player.chooseTarget([1,2],"选择角色获得"+str+"标记").set('ai',function(target){
                             if(event.color=="red") return -get.attitude(_status.event.player,target);
                             else return get.attitude(_status.event.player,target);
                        });
                    }
                    "step 3"
                    if(result.bool){
                        if(event.color=="red") var skill="kuangfeng2";
                        else var skill="dawu2";
                        var length=result.targets.length;
                        for(var i=0;i<length;i++){
                            result.targets[i].addSkill(skill);
                        }
                    }
                },
                ai:{
                    order:7,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    }
                },
            },
            lyzjingxing:{
                group:["lyzjingxing_zhunbei","lyzjingxing_other"],
                derivation:["fanghun_lyz_mayunlu","tieqi_lyz_mayunlu"],
                intro: {
                  content: function(storage, player, skill) {
                      return '已记录的花色：' + get.translation(storage) ;
                  }
                },
                mark: true,
                init:function (player,skill){
                     if(!player.storage.lyzjingxing) player.storage.lyzjingxing=[];
                },
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:["roundStart","dieAfter"]
                },
                forced:true,
                filter:function(event,player){
                    return player.storage.lyzjingxing.length<4;
                },
                content:function(){
                    "step 0"
                    var controls=["heart","diamond","club","spade"];
                    if(player.storage.lyzjingxing.contains("heart")) controls.remove("heart");
                    if(player.storage.lyzjingxing.contains("diamond")) controls.remove("diamond");
                    if(player.storage.lyzjingxing.contains("club")) controls.remove("club");
                    if(player.storage.lyzjingxing.contains("spade")) controls.remove("spade");
                    player.chooseControl(controls).set("prompt","〖景星〗：请记录一种花色");
                    "step 1"
                    player.popup(result.control);
                    player.storage.lyzjingxing.add(result.control);                                       
                },
                subSkill:{
                    zhunbei:{
                        trigger:{
                            player:"phaseZhunbeiBegin"
                        },
                        filter:function(event,player){
                            return player.storage.lyzjingxing.length>0;
                        },
                        direct:true,
                        content:function(){
                             "step 0"
                    player.chooseBool("是否移去记录的一种花色，然后获得〖芳魂〗或〖铁骑〗？");
                    "step 1"
                    if(!result.bool) event.finish();
                    "step 2"
                    player.logSkill("lyzjingxing");
                    var controls=[];
                    if(player.storage.lyzjingxing.contains("heart")) controls.push("heart");
                    if(player.storage.lyzjingxing.contains("diamond")) controls.push("diamond");
                    if(player.storage.lyzjingxing.contains("club")) controls.push("club");
                    if(player.storage.lyzjingxing.contains("spade")) controls.push("spade");
                    player.chooseControl(controls).set("prompt","〖景星〗：请移去一种花色");
                    "step 3"
                    player.storage.lyzjingxing.remove(result.control);
                    if(player.hasSkill("fanghun_lyz_mayunlu")&&player.hasSkill("tieqi_lyz_mayunlu")){
                       event.finish();
                       return;
                    }
                    var controls=["fanghun_lyz_mayunlu","tieqi_lyz_mayunlu"];
                    if(player.hasSkill("fanghun_lyz_mayunlu")) controls.remove("fanghun_lyz_mayunlu");
                    if(player.hasSkill("tieqi_lyz_mayunlu")) controls.remove("tieqi_lyz_mayunlu");
                    player.chooseControl(controls).set("prompt","〖景星〗：请选择获得一项技能");
                    "step 4"
                    player.addSkillLog(result.control);
                        }
                    },
                    other:{
                        mod:{
					         globalFrom:function(from,to,distance){
						         return distance-from.storage.lyzjingxing.length;
					         },
					         maxHandcard:function (player,num){
                                 return num+player.storage.lyzjingxing.length;
                             },
				         },				         
                    }
                }
            },
            lyzfengyi:{
                group:"lyzfengyi_use",
                audio:"ext:阳光包/audio:2",
                trigger:{
                    target:"useCardToTarget"  
               },                
                filter:function(event,player){
                    var suit=get.suit(event.card);
                    if(player.storage.lyzjingxing.contains(suit)) return false;
					return event.player!=player&&(get.type(event.card)=="basic"||get.type(event.card)=="trick");
				},
				prompt:function(event,player){
                    return "是否发动〖凤逸〗？可能会令"+get.translation(event.card)+"对你无效";
                },
                check:function(event,player){
					return get.effect(player,event.card,event.player,player)<0;
				},
				content:function(){
				    "step 0"
				    player.judge(function(card){
						if(get.color(card)=="red") return 2;
						return 0;
					}).judge2=function(result){
						return result.bool?true:false;
					};
					"step 1"
					if(result.bool){					
						trigger.getParent().excluded.add(player);
					}
				},
				subSkill:{
				       use:{
                          audio:"lyzfengyi",
                          trigger:{
                             player:"useCardToPlayered"
                          },
                          priority:10,
                          prompt:function(event,player){
                               return "是否发动〖凤逸〗？可能会令"+get.translation(event.card)+"不可被响应";
                           },
				          filter:function(event,player){
				             var suit=get.suit(event.card);
                             if(!player.storage.lyzjingxing.contains(suit)) return false;
                             if(event.getParent().triggeredTargets3.length>1) return false;	
                             if(event.targets.contains(player)&&event.targets.length==1) return false;				
					         return get.type(event.card)=="basic"||get.type(event.card)=="trick";
				          },
				          check:function (event,player){
                               return get.attitude(player,event.target)<0;
                          },
                          content:function(){
				             "step 0"
				             player.judge(function(card){
						         if(get.color(card)=="red") return 2;
						         return 0;
					         }).judge2=function(result){
						         return result.bool?true:false;
					         };
					        "step 1"
					        if(result.bool){					
						       trigger.directHit.addArray(game.players);
					        }
				        }
                    }
				}
            },            
            lyzlingxiang:{
                group:"lyzlingxiang2",
                init:function (player,skill){
                     if(!player.storage.lyzlingxiang) player.storage.lyzlingxiang=[];
                },
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                priority:5,
                filter:function(event,player){
                    var name=get.name(event.card);
                    if(player.storage.lyzlingxiang.contains(name)) return false;
                    if(event.getParent().triggeredTargets3.length>1) return false;
                    if(player.storage.lyzjingxing.length==0) return false;
					if(event.targets.contains(player)&&event.targets.length==1) return false;
                    return get.tag(event.card,'damage');
				},
				direct:true,
				content:function(){
				    "step 0"
				    player.chooseTarget(get.prompt("lyzlingxiang"),'选择一名目标角色',function(card,player,target){
						  return _status.event.targets.contains(target)&&target.countCards("h")&&target!=player;
					}).set('ai',function(target){
						  return 2-get.attitude(_status.event.player,target);
				    }).set('targets',trigger.targets);
				    "step 1"
				    if(result.bool){
				         player.storage.lyzlingxiang.add(trigger.card.name);
				         var target=result.targets[0];
				         event.target=target;
				         player.logSkill("lyzlingxiang",target);
				         player.viewHandcards(target);
				    }
				    else event.finish();
				    "step 2"
				    var num=player.storage.lyzjingxing.length;
					var map={};
					var list=[];
					for(var i=0;i<=num;i++){
						var cn=get.cnNumber(i,true);
						map[cn]=i;
						list.push(cn);
					}
					event.map=map;
					player.chooseControl(list,function(){
						//if(!get.tag(trigger.card,'damage')) return '0';
						return get.cnNumber(_status.event.goon,true);
					}).set('prompt',"请选择此次加伤的数值").set('goon',num);
					"step 3"
					var num=event.map[result.control];
					event.num1=num;
					if(get.tag(trigger.card,'damage')) trigger.getParent().baseDamage+=num; 
					"step 4"
			        if(player.storage.lyzjingxing.contains("heart")) var n1=event.target.countCards('h',{suit:"heart"});
			        else var n1=0;
			        if(player.storage.lyzjingxing.contains("diamond")) var n2=event.target.countCards('h',{suit:"diamond"});
			        else var n2=0;
			        if(player.storage.lyzjingxing.contains("club")) var n3=event.target.countCards('h',{suit:"club"});
			        else var n3=0;
			        if(player.storage.lyzjingxing.contains("spade")) var n4=event.target.countCards('h',{suit:"spade"});
			        else var n4=0;
			        var num2=n1+n2+n3+n4;
			        var num3=num2-event.num1;
			        if(num3>0) player.draw(num3);
				}
            },
            lyzlingxiang2:{
                trigger:{
                    global:"phaseBegin"
                },
                forced:true,
                popup:false,
                content:function(){
                    player.storage.lyzlingxiang=[];
                }
            },
            lyzfangze:{
                 audio:"ext:阳光包/audio:2",
                 trigger:{
                     global:"phaseBegin"
                 },
                 direct:true,
                 filter:function(event,player){
                     if(event.player==player) return true;
                     return player.countCards("he");
                 },
                 content:function(){
                     "step 0"
                     if(trigger.player!=player) player.chooseCard(get.prompt2("lyzfangze"),[1,3],"he").set('ai',function(card){  
                           if(get.attitude(player,trigger.player)<=0)  return 0;                       
                           return 7-get.value(card);
                     });
                     else {
                        player.logSkill("lyzfangze");
                        player.draw(2);
                        event.goto(2);
                     }
                     "step 1"
                     if(result.bool){
                        player.logSkill("lyzfangze",trigger.player);
                        player.give(result.cards,trigger.player,true);
                        event.num=result.cards.length;
                     }
                     else event.finish();
                     "step 2"
                     if(trigger.player!=player){
                         player.discardPlayerCard(trigger.player,"hej",[1,event.num],"visible").set('ai',function(card){                           
                               return 3-get.value(card);
                         });
                     }
                     else {
                         player.discardPlayerCard(player,"hej",[1,2],"visible").set('ai',function(card){                           
                               return 3-get.value(card);
                         });
                     }
                     "step 3"
                     event.hh=false;
                     event.ee=false
                     if(result.bool&&result.cards){
						for(var i=0;i<result.cards.length;i++){
						    if(result.cards[i].original=='h'){
								event.hh=true;
							}
							if(result.cards[i].original=='e'){
								event.ee=true;
							}
						}
					}
					"step 4"
					if(event.hh) player.chooseBool("是否令"+get.translation(trigger.player)+"摸两张牌？");
					"step 5"
					if(result.bool&&event.hh) trigger.player.draw(2);
					"step 6"
					if(event.ee) {
					    player.chooseBool("是否令"+get.translation(trigger.player)+"回复1点体力并且使用牌无距离次数限制？");					    
					}
				    "step 7"
				    if(result.bool&&event.ee){
				        trigger.player.recover();
					    trigger.player.addTempSkill("yuiko_fenglun2");
				    }
                 }
            },
            lyzfumeng:{
                mod:{
                    maxHandcard:function (player,num){
                        return num+player.hp;
                    },
                },
                trigger:{
                    player:"damageEnd"
                },
                forced:true,
                audio:"ext:阳光包/audio:2",
                content:function(){
                    "step 0"
                    player.draw(2);
                    "step 1"
                    if(trigger.source&&trigger.source.countCards("h")>=player.countCards("h")) player.addTempSkill("mianyi");
                }
            },
            lyzyurong:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                discard:false,
                lose:false,
                delay:false,
                filter:function(event,player){
                    if(player.getStat().skill.lyzyurong>=1+player.getDamagedHp()) return false;    
                    return player.countCards("he")>0;
                },
                position:"he",
                filterCard:true,
                filterTarget:function(card,player,target){
                    if(player==target) return false;
                    if(get.suit(ui.selected.cards[0])=="diamond") return player.canUse({name:'lebu',cards:ui.selected.cards},target);
                    if(get.suit(ui.selected.cards[0])=="club") return target.countCards("he")>0;
                    return true;
                },
                check:function(card){
                    if(get.suit(card)=="spade") return 10;
                    return 7-get.value(card);
                },
                content:function(){
                    "step 0"
                    var card=cards;
                    if(get.suit(card)=="diamond"){
                        player.useCard({name:'lebu'},target,card).audio=false;
                        player.draw();
                        event.finish();
                    } 
                    if(get.suit(card)=="club"){
                        player.discard(card);
                        target.chooseToDiscard("he",3,true);
                        event.finish();
                    }
                    if(get.suit(card)=="spade"){
                        player.give(card,target,true);
                        target.draw();
                        target.turnOver();
                        event.finish();
                    }
                    if(get.suit(card)=="heart"){
                        player.give(card,target,true);
                        target.chooseCard("将一张手牌当作【无中生有】对"+get.translation(player)+"使用",true).set('ai',function(card){
                               var att=get.attitude(target,player);
                               if(att<0&&get.color(card)=="black") return 10;
                               if(att>0&&get.color(card)=="red") return 10;
                               return 7-get.value(card);
                        });
                    }
                    "step 1"
                    if(result.bool){
                         target.useCard({name:"wuzhong"},player,result.cards);
                    }
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(ui.selected.cards.length&&get.suit(ui.selected.cards[0])=="spade"){
                                if(target.isTurnedOver()) return 10;
                                return -10;
                            }
                            return -1;
                        }
                    },
                }
            },
            lyzfuhua:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"damageEnd",
                    target:"useCardToTarget"
                },
                filter:function(event,player){
                    if(event.name=="useCardToTarget") return get.color(event.card)=="red"&&get.type(event.card)!="equip";
                    return true;
                },
                content:function(){
                    "step 0"
                     if(event.triggername=="damageEnd") event.num=trigger.num;
                    "step 1"
                     player.chooseControl("一张","两张").ai=function(event,player){
                        if(event.triggername=="damageEnd") var target=trigger.player;
                        else if(trigger.source) var target=trigger.source;
                        else return 1;
                        if(get.attitude(player,target)<=0) return 0;
                        return 1;
                    }
                    "step 2"
                    if(result.control=="一张") player.draw();
                    if(result.control=="两张"){
                        player.draw(2);
                        if((trigger.source&&trigger.source!=player)||(event.triggername=="useCardToTarget"&&trigger.player!=player)){
                            player.chooseCard("he","请选择要给出的牌",true);
                        }
                        else event.goto(4);
                    }
                    "step 3"
                    if(result.cards){
                        if(event.triggername=="useCardToTarget") var target=trigger.player;
                        else if(trigger.source) var target=trigger.source;
                        player.give(result.cards,target,true);
                    }
                    "step 4"
                    if(--event.num>0){
                        player.chooseBool(get.prompt2("lyzfuhua"));
                    }
                    else{
                        event.finish();
                    }
                    "step 5"
                    if(result.bool){
                        player.logSkill("lyzfuhua");
                        event.goto(1);
                    }
                }
            },
            lyzcanqing:{
                audio:"ext:阳光包/audio:2",
                trigger:{
					player:'useCardToPlayered',
					target:'useCardToTargeted',
				},
				filter:function(event,player){
					if(event.name=="useCardToPlayered"){
					    if(event.getParent().triggeredTargets3.length>1) return false;
					    if(event.targets.contains(player)&&event.targets.length==1) return false;
					    var flag=0;
					    for (var i=0;i<event.targets.length;i++){
                            if(event.targets[i].countCards("hej")) flag=1;
                        }
					    return flag==1;
					}
					else return event.player.countCards("hej")&&event.player!=player;
				},
				direct:true,
				content:function(){
				     "step 0"
				     if(event.triggername=="useCardToPlayered"){
				          player.chooseTarget(get.prompt("lyzcanqing"),'选择一名目标角色并获得其一张牌',function(card,player,target){
						      return _status.event.targets.contains(target)&&target.countCards("hej")&&target!=player;
					      }).set('ai',function(target){
						      return 2-get.attitude(_status.event.player,target);
					      }).set('targets',trigger.targets);
				     }
				     else {
				          player.gainPlayerCard(get.prompt("lyzcanqing",trigger.player),trigger.player,'hej','visibleMove').set('logSkill',[event.name,trigger.player]);
				          event.goto(2);
				     }
				     "step 1"
				     if(result.bool){
				          var target=result.targets[0];
				          player.logSkill("lyzcanqing",target);
				          event.target0=target,
				          player.gainPlayerCard(true,target,'hej','visibleMove');
				     }
				     "step 2"
				     if(result.cards){
						event.bool=false;
						var card=result.cards[0];
						if(get.color(card)=="black"||get.type(card)=="equip") event.bool=true;
					}
					"step 3"
					if(event.triggername=="useCardToPlayered") event.target=event.target0;
					else event.target=trigger.player;
					if(event.bool&&player.countCards("he")){
					     player.chooseCard("he","交给"+get.translation(event.target)+"一张牌，或点取消失去1点体力");
					}
					else {
					    event.finish();
					}
					"step 4"
					if(result.bool){
					    player.give(result.cards,event.target,true);
					}
					else player.loseHp();
				},
            },
            lyzwanai:{
                audio:"ext:阳光包/audio:2",
                group:"lyzwanai2",
                trigger:{
                    player:"phaseBegin"
                },
                filter:function(event,player){
					return true;
				},
				forced:true,
				content:function(){
				    "step 0"
				    player.chooseTarget('你可令一名其他角色获得“哀”',function(card,player,target){
						return target!=player&&!target.hasSkill("lyzwanai_ai");
					}).set('ai',function(target){
						var player=_status.event.player;
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.bool&&result.targets&&result.targets.length){
						var target=result.targets[0];
						player.line2(game.filterPlayer(function(current){
							if(current.hasSkill('lyzwanai_ai')){
								current.removeSkill('lyzwanai_ai');
								return true;
							}
						}).concat(result.targets),'green');
						target.addSkill("lyzwanai_ai");
					}				    
				}
            },
            "lyzwanai2":{
				trigger:{
					global:"gainAfter",
				},
				popup:false,
				forced:true,
				usable:2,
				filter:function (event,player){
				    if(event.player.countCards("h")<=player.hp) return false;
					return event.player.hasSkill("lyzwanai_ai");
				},
				content:function (){
					var num=trigger.player.countCards("h")-player.hp;
					if(num>0){
					     trigger.player.chooseToDiscard("h",num,true);
					}
				},
			},
			"lyzwanai_ai":{
			     mark:true,
			     marktext:"哀",
			     intro:{
				     name:"惋哀",
					 content:"已获得“哀”",
				 },
				 charlotte:true,				 
			},
            lyzqinggu:{
                group:"lyzqinggu_recover",
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                selectCard:1,
                position:"he",
                filterCard:function(card){
                   return get.tag(card,"damage")||get.type(card)=="equip";
                },
                check:function(card){return 8-get.value(card)},
                filter:function(event,player){
                   if(player.countCards("he",lib.skill.lyzqinggu.filterCard)==0) return false;
                   return true;
                },
                filterTarget: function(card, player, target) {
                   return true ;
                },
                selectTarget:function(){
				   var card=ui.selected.cards[0];
				   if(get.subtype(card)=="equip1"){
				       var num=1;
					   var info=get.info(card);
					   if(info&&info.distance&&info.distance.attackFrom){
						   num-=info.distance.attackFrom;
					   }
					   return [1,num];
				   }
				   return 1;
				},
				content:function(){
				   target.damage();
				},
				ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                            var player=_status.event.player;
                            if(get.attitude(player,target)>0){
                                 if(target.hp>1&&(target.isDamaged()||target.hasSkillTag("maixie"))) return 5;
                                 return -1;
                            }
                            else return -get.damageEffect(target,player,player);
                        },
                    },
                },
                subSkill:{
                    recover:{
                        trigger:{
                            global:"damageEnd"
                        },
                        audio:"lyzqinggu",
                        check:function (event,player){
                            return get.attitude(player,event.player)>0;
                        },
                        filter:function(event,player){
                            return event.source&&event.source==player&&event.player.isAlive();
                        },
                        logTarget:"player",
                        prompt:function(event,player){
                            return "是否发动〖清骨〗，令"+get.translation(event.player)+"回复2点体力？";
                        },
                        content:function(){
                            trigger.player.recover(2);
                        },
                        ai:{
                            effect:{
                                player:function(card,player,target){
                                    if(get.tag(card,"damage")&&(target.hasSkillTag("maixie")||target.isDamaged)&&target.hp>1&&get.attitude(player,target)>=0) return [1,1,0,0];
                                    if(get.tag(card,"damage")&&get.attitude(target,player)>=0&&target.hp>1) return [1,1,0,0];
                                }
                            }           
                        }
                    }
                }
            },
            lyzhuomai:{
                 group:"lyzhuomai_draw",
                 audio:"ext:阳光包/audio:2",
                 marktext:"淤",
			     intro:{
				     name:"活脉",
					 content:"瘀血阻滞，气脉不畅",
				 },
                 trigger:{
                    global:"damageEnd"
                 },
                 filter:function(event,player){
                    return event.player.isAlive()&&!event.player.countMark("lyzhuomai");
                 },
                 forced:true,
                 firstDo:true,
                 content:function(){
                    trigger.player.addMark("lyzhuomai");
                 },
                 subSkill:{
                    draw:{
                        trigger:{
                            global:"recoverAfter"
                        },
                        audio:"lyzhuomai",
                        check:function (event,player){
                            return get.attitude(player,event.player)>0;
                        },
                        filter:function(event,player){
                            return event.player.countMark("lyzhuomai")>0;
                        },
                        prompt:function(event,player){
                            return "是否发动〖活脉〗，与"+get.translation(event.player)+"各摸一张牌？";
                        },
                        content:function(){
                            "step 0"
                            game.asyncDraw([trigger.player,player]);
                            "step 1"
                            trigger.player.removeMark("lyzhuomai",1);
                        },
                    }
                 }
            }, 
            lyztiantong:{
                trigger:{global:'dying'},
				audio:"ext:阳光包/audio:2",
				filter:function(event,player){
					return event.player.hp<1;
				},
				limited:true,
				skillAnimation:true,
				animationColor:'gray',
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)<4) return false;					
					return true;
				},
				content:function(){
					"step 0"
					player.awakenSkill('lyztiantong');
                    trigger.player.gainMaxHp();
                    "step 1"
					//var num=Math.min(5,trigger.player.maxHp);
					trigger.player.recover(trigger.player.maxHp-trigger.player.hp);
					//if(trigger.player.countCards("h")<=num) trigger.player.draw(num-trigger.player.countCards("h"));
					//else trigger.player.chooseToDiscard("h",true,trigger.player.countCards("h")-num);
					"step 2"
					trigger.player.link(false);
					trigger.player.turnOver(false);
					"step 3"
					trigger.player.disableJudge();
					"step 4"
					var num=trigger.player.countDisabled();
					if(num){
						for(var i=1;i<6;i++){
							if(trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
						}
					}					
				},
            },           
            lyzyuhun:{
              group:["lyzyuhun_control","lyzyuhun_draw"],
              audio:"ext:阳光包/audio:2",  
              enable: "phaseUse",
              skillAnimation: true,
              animationColor: "metal",
              filter: function(event, player) {
                return true;
              },
              usable:1,
                filterTarget: function(card, player, target) {
                return target != player ;
              },
                content:function(){
                    "step 0"
                    player.turnOver();
                    player.skip("phaseDiscard");
                    "step 1"
                    target.addSkill("lyzyuhun2");
                },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },
                subSkill:{
                    control:{
                        audio:"lyzyuhun",
                        forced:true,
                        trigger:{global:'phaseBeginStart'},
                        filter:function(event,player){
                             return player!=event.player&&!event.player._trueMe&&event.player.hasSkill("lyzyuhun2");
                        },
                        content:function(){
                             trigger.player._trueMe=player;
                             game.addGlobalSkill('autoswap');
                             if(trigger.player==game.me){
                                game.notMe=true;
                                if(!_status.auto) ui.click.auto();
                             }
                             trigger.player.addSkill('huoxin2');
                         }
                    },
                    draw:{
                        audio:"lyzyuhun",
                        trigger:{
                            global:"phaseEnd"
                        },
                        filter:function(event,player){
                            return player.isTurnedOver();
                        },
                        forced:true,
                        content:function(){
                            player.draw();
                        }
                    }
                }
            },
            lyzyuhun2:{
                charlotte:true,
                forceDie:true,
                mark:true,
                marktext:"驭",
                intro:{
                    content:function(storage,player){
                     return "下回合由☼神貂蝉控制";
                    },
                },
                popup:false,
                forced:true,
                trigger:{
                    player:["phaseEnd","dieAfter"]
                },
                content:function(){
                    player.removeSkill("lyzyuhun2");
                }
             },
            lyzyuepo:{
                group:"lyzyuepo_skill",
                audio:"ext:阳光包/audio:2",  
                trigger:{
                   player:"dying"
                },
                forced:true,
                filter:function(event,player){
                   return player.countCards("h")>0&&player.hp<=0
                },
                content:function(){
                    "step 0"
                    player.discard(player.getCards("h"));
                    player.recover();
                },
                subSkill:{
                    skill:{
                        audio:"lyzyuepo",
                        trigger:{
                           player:"dyingAfter"
                        },
                        forced:true,
                        content:function(){
                            "step 0"
                            player.chooseTarget(true,'〖月魄〗：请选择一名角色',function(card,player,target){
                                return target!=player;
                            }).set('ai',function(target){
                                 return -get.attitude(_status.event.player,target);
                            });
                            "step 1"
                            if(result.bool){
                                var target=result.targets[0];
                                event.target=target;
                                player.chooseControl('benghuai','wumou','chouhai','rechanyuan').set('prompt','选择令其获得一个技能').ai=function(){
                                      return ['benghuai','wumou','chouhai','rechanyuan'].randomGet();
                                };
                            }
                            else event.finish();
                            "step 2"
                            event.target.addSkill(result.control);
                        }
                    }
                }
            },
            lyzhuanmei:{
                init:function (player,skill){
                     if(!player.storage.lyzhuanmei) player.storage.lyzhuanmei=[];
                },
                trigger:{player:'phaseBegin'},
                audio:"ext:阳光包/audio:2",  
				forced:true,
				content:function(){
					'step 0'
					
					'step 1'
					var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][0]=='female') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][0]!='female';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[0]=='female';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}					
					list=list.randomGets(5);
					var skills=[];
					for(var i of list){
						skills.addArray((lib.character[i][3]||[]).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
						}));
					}
					if(!list.length||!skills.length){event.finish();return;}
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
							skills:skills.randomGets(2),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多两个技能',[list,'character'],'hidden');
						event.dialog=dialog;
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=0;i<skills.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=skills[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								if(!this.classList.contains('bluebg')){
									if(rSkill.length>=2) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								}
								else{
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						
						event.switchToAuto=function(){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
						event.control=ui.create.control('ok',function(link){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.pause();
						game.countChoose();
					};
					if(event.isMine()){
						chooseButton(list,skills);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,list,skills);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					'step 2'
					var map=event.result||result;
					if(map&&map.skills&&map.skills.length){
						for(var i of map.skills){
						     player.addTempSkill(i,{player:"phaseBegin"});
						} 
					}
					game.broadcastAll(function(list){
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.old_yuanshu='weidi';
						}
					},map.skills);					
				},
            },
            lyzyanzun:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                   player:["damageEnd","phaseJieshuBegin"]
                },
                forced:true,
                locked:false,
				content:function(){
				    "step 0"
				  //  player.draw();
				    "step 1"
				    player.chooseBool("是否展示手牌?");
				    "step 2"
				    if(result.bool) player.showHandcards();
				    else event.finish();
				    "step 3"
				    event.bool1=false;
				    event.bool2=false;
				    event.bool3=false;
				    if(!player.countCards("h",{type:"basic"})) event.bool1=true;
				    if(!player.countCards("h",{type:"trick"})&&!player.countCards("h",{type:"delay"})) event.bool2=true;
				    if(!player.countCards("h",{type:"equip"})) event.bool3=true;
				    "step 4"
				    if(event.bool1){
				        var list=[];
                        for(var i=0;i<lib.inpile.length;i++){
                            var name=lib.inpile[i];
                            if(name=='sha'){
                                for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                            }
                                else if(get.type(name)=='basic') list.push(['基本','',name]);
                             }
                            player.chooseButton(['〖偃尊〗：选择要使用的牌',[list,'vcard']],function(button){
						        return _status.event.player.getUseValue({name:button.link[2],nature:button.link[3]});
					     },function(button){
						       return _status.event.player.hasUseTarget({name:button.link[2],nature:button.link[3]});
					    });
				    }
				    else event.goto(6);
				    "step 5"	
				    if(result.bool&&event.bool1) player.chooseUseTarget(true,{name:result.links[0][2],isCard:true,nature:result.links[0][3]});
				    "step 6"
				    if(event.bool2){
				        var list=[];
                        for(var i=0;i<lib.inpile.length;i++){
                            var name=lib.inpile[i];                           
                               if(get.type(name)=='trick') list.push(['锦囊','',name]);
                             }
                            player.chooseButton(['〖偃尊〗：选择要使用的牌',[list,'vcard']],function(button){
						        return _status.event.player.getUseValue({name:button.link[2],nature:button.link[3]});
					     },function(button){
						       return _status.event.player.hasUseTarget({name:button.link[2],nature:button.link[3]});
					    });
				    }
				    else event.goto(8);
				    "step 7"	
				    if(result.bool&&event.bool2) player.chooseUseTarget(true,{name:result.links[0][2],isCard:true,nature:result.links[0][3]});
				    "step 8"
				    if(event.bool3){
				       var equip=get.cardPile(function(card){
						return get.type(card)=='equip'&&player.hasUseTarget(card)&&player.isEmpty(get.subtype(card));
					});
					if(equip){
						player.chooseUseTarget(equip,'nothrow','nopopup',true);
					}			          
				  }
				  "step 9"
				  player.draw();				  
			  }
            },
            lyzxinlan:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
					return game.countPlayer(function(current){
						return true;
					})>1;
				},
                filterTarget:function(card,player,target){					
					return true;
				},
				targetprompt:["前者","后者"],
				selectTarget:2,
				multitarget:true,
                content:function(){
                    "step 0"
                    event.controls=["体力","手牌","装备区牌"];
                    player.chooseControl(event.controls).set("prompt","请选择一项，令前者调整该项至与后者相同");
					"step 1"
					if(result.control=="体力"){
				        event.controls.remove("体力");
				        var num1=targets[0].hp;
				        var num2=targets[1].hp;
				        if(num1>num2) targets[0].loseHp(num1-num2);
				        if(num1<num2) targets[0].recover(num2-num1);
				        event.goto(4);
					}
					if(result.control=="手牌"){
					    event.controls.remove("手牌");
				        var num1=targets[0].countCards("h");
				        var num2=targets[1].countCards("h");
				        if(num1>num2) targets[0].chooseToDiscard("h",num1-num2,true);
				        if(num1<num2) targets[0].draw(num2-num1);
				        event.goto(4);
					}
					if(result.control=="装备区牌"){
					    event.controls.remove("装备区牌");
				        var num1=targets[0].countCards("e");
				        var num2=targets[1].countCards("e");
				        if(num1>num2) {
				            targets[0].chooseToDiscard("e",num1-num2,true);
				            event.goto(4);
				        }	
				        if(num1<num2) event.goto(2);
				        if(num1==num2) event.goto(4);
					}
					"step 2"
					var type="equip"+num;
					if(!targets[0].isEmpty(type)) return;
					var card=get.cardPile2(function(card){
						return get.subtype(card,false)==type&&targets[0].canUse(card,targets[0]);
					});
					if(card) targets[0].chooseUseTarget(card,true).nopopup=true;
					"step 3"
					game.updateRoundNumber();
					event.num++;
					if(event.num<=5&&targets[1].isAlive()&&targets[0].countCards('e')<targets[1].countCards('e')) event.goto(2);
					"step 4"
					player.chooseControl(event.controls).set("prompt","请选择一项，令后者调整该项至与前者相同");
					"step 5"
					if(result.control=="体力"){
				        var num1=targets[0].hp;
				        var num2=targets[1].hp;
				        if(num1<num2) targets[1].loseHp(num2-num1);
				        if(num1>num2) targets[1].recover(num1-num2);
				        event.finish();
					}
					if(result.control=="手牌"){
				        var num1=targets[0].countCards("h");
				        var num2=targets[1].countCards("h");
				        if(num1<num2) targets[1].chooseToDiscard("h",num2-num1,true);
				        if(num1>num2) targets[1].draw(num1-num2);
				        event.finish();
					}
					if(result.control=="装备区牌"){
				        var num1=targets[0].countCards("e");
				        var num2=targets[1].countCards("e");
				        if(num1<num2) {
				            targets[1].chooseToDiscard("e",num2-num1,true);
				        }	
				        if(num1>num2) event.goto(6);
				        if(num1==num2) event.finish();
					}
					"step 6"
					var type="equip"+num;
					if(!targets[1].isEmpty(type)) return;
					var card=get.cardPile2(function(card){
						return get.subtype(card,false)==type&&targets[1].canUse(card,targets[1]);
					});
					if(card) targets[1].chooseUseTarget(card,true).nopopup=true;
					"step 7"
					game.updateRoundNumber();
					event.num++;
					if(event.num<=5&&targets[0].isAlive()&&targets[1].countCards('e')<targets[0].countCards('e')) event.goto(6);
                },
                
            },
            lyzshenhuang:{
                audio:"ext:阳光包/audio:2",
                group:"lyzshenhuang2",
                usable:2,
                        enable:["chooseToUse","chooseToRespond"],
                        hiddenCard:function(player,name){
                           if(!['sha','shan','tao','jiu'].contains(name)) return false;
                           if(player.countCards('hs')<2) return false;
                           return true;
                        },
                        filter:function(event,player){
                           if(event.filterCard({name:'sha'},player,event)||
                           event.filterCard({name:'shan'},player,event)||
                           event.filterCard({name:'jiu'},player,event)||
                           event.filterCard({name:'tao'},player,event)){
                              return player.countCards("hs")>1;
                           }
                           return false;
                       },
                       chooseButton:{
                    dialog:function(event,player){
                        var list=[];
                        if(event.filterCard({name:'sha'},player,event)){
                            list.push(['基本','','sha']);
                            for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                        }
                        if(event.filterCard({name:'shan'},player,event)){
                            list.push(['基本','','shan']);
                        }
                        if(event.filterCard({name:'tao'},player,event)){
                            list.push(['基本','','tao']);
                        }
                        if(event.filterCard({name:'jiu'},player,event)){
                            list.push(['基本','','jiu']);
                        }
                        return ui.create.dialog('神惶',[list,'vcard'],'hidden');
                    },
                    check:function(button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(_status.event.getParent().type!='phase'||game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':case 'shan':return 5;
                                case 'jiu':{
                                    if(player.countCards('hs',{name:'sha'})>0) return 3;
                                };
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='thunder'||button.link[3]=='ice') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function(links,player){
                        return {
                            audio:'lyzshenhuang',
                            filterCard:true,
                            complexCard:true,
                            selectCard:2,
                            check:function(card,player,target){
                                if(!ui.selected.cards.length&&get.type(card)=='basic') return 6;
                                else return 6-get.value(card);
                            },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'hs',
                            popname:true,                            
                        }
                    },
                    prompt:function(links,player){
                        return '将两张手牌当做'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用或打出';
                    },
                },
                ai:{
                    order:function(){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0&&player.countCards('hs',{type:'basic'})>2){
                            return 3.3;
                        }
                        return 3.1;
                    },
                    skillTagFilter:function(player,tag,arg){
                        if(tag=='fireAttack') return true;
                        if(player.countCards('hs')<2) return false;
                        if(!player.hasCard(function(card){
                            return get.color(card)=='red';
                        },'hs')){
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                    respondSha:true,
                    respondShan:true,
                    fireAttack:true,
                    }
            },
            lyzshenhuang2:{
                 trigger:{
                     player:"useCard",
                 },
                 forced:true,
                 filter:function (event,player){
                     return event.skill=="lyzshenhuang_backup";
                 },
                 content:function (){
                    "step 0"
                    var cards=trigger.cards;
					for(var i of cards){
						event[get.color(i,player)]=true;
						if(event.red&&event.black) break;
					}
					"step 1"
					if(event.black) player.draw();
					if(event.red){
					     player.turnOver(false);
					     player.link(false);
					}
                 }            
            },
            lyzxinlve:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:["damageEnd","phaseZhunbeiBegin"]
                },
                forced:true,
                content:function (){
                    "step 0"
                    player.draw(2);
                    "step 1"
                    player.chooseCard("h",[1,Infinity],"展示任意张手牌").set('ai',lib.skill.rende.check).set('complexCard',true);
                    "step 2"
                    if(result.bool){
                        player.showCards(result.cards);
                        event.cards=result.cards;
                    }
                    else event.finish();
                    "step 3"
                     var suits=[];
                     for (var i=0;i<event.cards.length;i++){
                        if (!suits.contains(get.suit(event.cards[i]))) suits.add(get.suit(event.cards[i]));
                     }
                     event.num=suits.length;
                     "step 4"
                     if(event.num>=1){
                         player.chooseTarget(true,'弃置一名角色区域里的一张牌',function(card,player,target){
                            return target.countCards('hej');
                        }).set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target);
                            if(att<0){
                                att=-Math.sqrt(-att);
                            }
                            else{
                                att=Math.sqrt(att);
                            }
                            return att*lib.card.guohe.ai.result.target(player,target);
                        })
                        return;
                    }
                    else event.finish();
                    "step 5"
                    if(result.bool){
                           var target=result.targets[0];
                           player.line(target);
                           player.discardPlayerCard(target,'hej',true);                                
                    }
                    "step 6"    
                    if(event.num>=2){
                          player.chooseTarget(true,'横置至多两名角色',[1,2],function(card,player,target){
                             return true;
                        }).set('ai',function(target){
                            if(target.isLinked()) return -1;
                             return -get.attitude(_status.event.player,target);
                        });
                    }
                    else event.finish();
                    "step 7"
                    if(result.bool){
                        player.line(result.targets);
                        event.targets_link=result.targets;
                        event.num2=0;
                    }
                    else event.goto(9);                   
                    "step 8"
                    if(event.num2<event.targets_link.length){
                        event.targets_link[event.num2].link(true);
                        event.num2++;
                        event.redo();
                    }
                    "step 9"
                    if(event.num>=3){
                          player.chooseTarget(true,'请选择获得牌的角色',function(card,player,target){
                             return target!=player;
                        }).set('ai',function(target){
                             return get.attitude(_status.event.player,target);
                        });          
                    }
                    else event.finish();                   
                    "step 10"
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        target.gain(event.cards,player,'give');
                        player.recover();
                    }
                    else event.finish();
                    "step 11"
                    player.chooseControl().set('choiceList',[
                "其失去1点体力",
                "其回复1点体力",
                ]).set('ai',function(){
                   return 1;
            });
            "step 12"
            if(result.index==0) event.target.loseHp();
            else event.target.recover();
            event.finish();
                }
            },
      
            lyzlonghun:{
				audio:"ext:阳光包/audio:4",
				locked:true,
				//技能发动时机
				enable:['chooseToUse','chooseToRespond'],
				//发动时提示的技能描述
				prompt:'将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
				//动态的viewAs
				viewAs:function(cards,player){
					var name=false;
					var nature=null;
					//根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='fire';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					//返回判断结果
					if(name) return {name:name,nature:nature};
					return null;
				},
				//AI选牌思路
				check:function(card){
					if(ui.selected.cards.length) return 0;
					var player=_status.event.player;
					if(_status.event.type=='phase'){
						var max=0;
						var name2;
						var list=['sha','tao'];
						var map={sha:'diamond',tao:'heart'}
						for(var i=0;i<list.length;i++){
							var name=list[i];
		 				if(player.countCards('hes',function(card){
		 					return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
		 				})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
		 					var temp=get.order({name:name,nature:name=='sha'?'fire':null});
		 					if(temp>max){
		 						max=temp;
		 						name2=map[name];
		 					}
		 				}
		 			}
		 			if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
		 			return 0;
					}
					return 1;
				},
				//选牌数量
				selectCard:[1,2],
				//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
				complexCard:true,
				//选牌范围：手牌区和装备区和木马
				position:'hes',
				//选牌合法性判断
				filterCard:function(card,player,event){
					//如果已经选了一张牌 那么第二张牌和第一张花色相同即可
					if(ui.selected.cards.length) return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
					event=event||_status.event;
					//获取当前时机的卡牌选择限制
					var filter=event._backup.filterCard;
					//获取卡牌花色
					var name=get.suit(card,player);
					//如果这张牌是梅花并且当前时机能够使用/打出闪 那么这张牌可以选择
					if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
					//如果这张牌是方片并且当前时机能够使用/打出火杀 那么这张牌可以选择
					if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
					//如果这张牌是黑桃并且当前时机能够使用/打出无懈 那么这张牌可以选择
					if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
					//如果这张牌是红桃并且当前时机能够使用/打出桃 那么这张牌可以选择
					if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
					//上述条件都不满足 那么就不能选择这张牌
					return false;
				},
				//判断当前时机能否发动技能
				filter:function(event,player){
					//获取当前时机的卡牌选择限制
					var filter=event.filterCard;
					//如果当前时机能够使用/打出火杀并且角色有方片 那么可以发动技能
					if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
					//如果当前时机能够使用/打出闪并且角色有梅花 那么可以发动技能
					if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
					//如果当前时机能够使用/打出桃并且角色有红桃 那么可以发动技能
					if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
					//如果当前时机能够使用/打出无懈可击并且角色有黑桃 那么可以发动技能
					if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
					return false;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					//让系统知道角色“有杀”“有闪”
					skillTagFilter:function(player,tag){
						var name;
						switch(tag){
							case 'respondSha':name='diamond';break;
							case 'respondShan':name='club';break;
							case 'save':name='heart';break;
						}
						if(!player.countCards('hes',{suit:name})) return false;
					},
					//AI牌序
					order:function(item,player){
						if(player&&_status.event.type=='phase'){
							var max=0;
							var list=['sha','tao'];
							var map={sha:'diamond',tao:'heart'}
							for(var i=0;i<list.length;i++){
								var name=list[i];
			 				if(player.countCards('hes',function(card){
		 						return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
		 					})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
			 					var temp=get.order({name:name,nature:name=='sha'?'fire':null});
			 					if(temp>max) max=temp;
			 				}
			 			}
			 			max/=1.1;
			 			return max;
						}
						return 2;
					},
				},
				//让系统知道玩家“有无懈”“有桃”
				hiddenCard:function(player,name){
					if(name=='wuxie'&&_status.connectMode&&player.countCards('hs')>0) return true;
					if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
					if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
				},
				group:['lyzlonghun_num','lyzlonghun_discard'],
				subSkill:{
					num:{
						trigger:{player:'useCard'},
						forced:true,
						popup:false,
						filter:function(event){
							var evt=event;
							return ['sha','tao'].contains(evt.card.name)&&evt.skill=='lyzlonghun'&&evt.cards&&evt.cards.length==2;
						},
						content:function(){
							trigger.baseDamage++;
						}
					},
					discard:{
						trigger:{player:['useCardAfter','respondAfter']},
						forced:true,
						popup:false,
						logTarget:function(){
							return _status.currentPhase;
						},
						autodelay:function(event){
							return event.name=='respond'?0.5:false;
						},
						filter:function(evt,player){
							return ['shan','wuxie'].contains(evt.card.name)&&evt.skill=='lyzlonghun'&&
								evt.cards&&evt.cards.length==2&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.countDiscardableCards(player,'he');
						},
						content:function(){
							player.line(_status.currentPhase,'green');
							player.discardPlayerCard(_status.currentPhase,'he',true);
						}
					}
				}
			}, 
            
            
            lyzcuifeng:{
                audio:"ext:阳光包/audio:2",
                init:function (player,skill){
          if(!player.storage.lyzcuifeng) player.storage.lyzcuifeng=[];
                },
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player.canCompare(target);
                },
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if(result.bool){
                        event.goto(2);
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    player.chooseSkill(target,function(info,skill){
               if(!info||info.charlotte||player.hasSkill(skill)) return false;
                        return true;
                    });
                    "step 3"
                    if(result.bool){
              var skill=result.skill;
              player.addSkill(skill);
              target.storage.lyzcuifeng=[result.skill];
              target.addTempSkill('lyzcuifeng2',{player:'phaseAfter'});
              player.popup(skill);
                    }            
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },
            },
            "lyzcuifeng2":{
                init:function (player,skill){
                    player.disableSkill(skill,player.storage.lyzcuifeng);
                },
                onremove:function (player,skill){
                    player.enableSkill(skill);
                },
                locked:true,
                mark:true,
                charlotte:true,
                intro:{
                    content:function (storage,player,skill){
                        var list=[];
                        for(var i in player.disabledSkills){
                            if(player.disabledSkills[i].contains(skill)) list.push(i);
                        };
                        if(list.length){
                            var str='失效技能：';
                            for(var i=0;i<list.length;i++){
                                if(lib.translate[list[i]+'_info']) str+=get.translation(list[i])+'、';
                            };
                            return str.slice(0,str.length-1);
                        };
                    },
                },
            },
            lyzxiasha:{
                audio:"ext:阳光包/audio:2",
                group:["lyzxiasha_1","lyzxiasha_2"],
                subSkill:{
                    "1":{
                        audio:"lyzxiasha",
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        filter:function (event,player){
    return player.hp<player.maxHp;
            },
                        direct:true,
                        content:function (){
            "step 0"
            event.num=player.maxHp-player.hp;
            "step 1"
            player.chooseTarget('请选择至多'+get.cnNumber(event.num)+'名有牌的角色，弃置这些角色区域里的一张牌',[1,event.num],function(card,player,target){
            return target.countCards('hej')>0;
               }).set('ai',function(target){
            return -get.attitude(_status.event.player,target)+0.5;
        });
        "step 2"
        if(result.bool&&result.targets){
            player.logSkill("lyzxiasha");
            player.line(result.targets,'green');
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
            event.discarded=0;
        }
            else{
              event.finish();
        }
           "step 3"
           if(player.isAlive()&&event.targets.length){
            player.discardPlayerCard(event.targets.shift(),'hej',true);
                    }
            else event.finish();
        "step 4"
        if(result.bool){
            event.discarded+=result.cards.length;
            }
           if(event.targets.length) event.goto(3);
                      
        },
                        sub:true,
                    },
                    "2":{
                        audio:"lyzxiasha",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        filter:function (event,player){
    return player.hp<player.maxHp;
            },
                        direct:true,
                        content:function (){
            "step 0"
            event.num=player.maxHp-player.hp;
            "step 1"
            player.chooseTarget('请选择至多'+get.cnNumber(event.num)+'名其他角色，视为对这些角色使用一张雷【杀】',[1,event.num],function(card,player,target){
            return target!=player;
               }).set('ai',function(target){
            return -get.attitude(_status.event.player,target)+0.5;
        });
        "step 2"
        if(result.bool&&result.targets){
        player.logSkill("lyzxiasha");
            var length=result.targets.length;
                          for(var i=0;i<length;i++){
                               result.targets[i].addTempSkill('lyzxiasha2');
                          }
        }
            else{
              event.finish();
        }
        "step 3"
        var list=game.filterPlayer(function(current){
                    return current.hasSkill("lyzxiasha2");
                              });                                     
                    player.useCard({name:"sha",nature:"thunder",isCard:true},list);           
       },
                        sub:true,
                    },
                },
            },
            "lyzxiasha2":{
            },
            lyzjuejing:{
                locked:true,
                group:["lyzjuejing_1","lyzjuejing_2","lyzjuejing_3"],
                audio:"ext:阳光包/audio:true",
                subSkill:{
                    "1":{
                        audio:"lyzjuejing",
                        trigger:{
                            player:"phaseDrawBefore",
                        },
                        forced:true,
                        content:function (){
                        trigger.cancel();
                     },
                        ai:{
                            noh:true,
                        },
                        sub:true,
                    },
                    "2":{
                        audio:false,
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                        return player.countCards('h')<4;
                    },
                        content:function (){
                        player.draw(4-player.countCards('h'));
                        },
                        sub:true,
                    },
                    "3":{
                        audio:false,
                        trigger:{
                            player:"gainEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                        return player.countCards('h')>4;
                    },
                        content:function (){
                        player.chooseToDiscard(player.countCards('h')-4,true);
                        },
                        sub:true,
                    },
                },
            },
            
            lyzzhanjiang:{
                audio:"lyzjuejing",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                content:function (){
                    var card=get.cardPile('qinggang','field');
                    if(card){
                        player.$gain2(card);
					player.equip(card);
					game.delay();
                    }
                    else {
                        player.chat('劳资的青釭剑呢？');
						game.log('但青釭剑不在场上、牌堆或弃牌堆里。');
                    }
                },
            },
            
            lyzyanjie:{
                group:"lyzyanjie1",
                init:function (player,skill){
                  if(!player.storage.lyzyanjie) player.storage.lyzyanjie=[];
                },
                onremove:true,
				intro:{
					content:"已对$发动过技能",
				},           
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                content:function (){
                     "step 0"
                     player.chooseTarget('是否发动〖焰劫〗？选择一名角色',function(card,player,target){
						     return !player.storage.lyzyanjie.contains(target)&&target!=player;
					    }).set('ai',function(target){
						     var player=_status.event.player;
						return get.damageEffect(target,player,player);
					    });
					 "step 1"
					 if(result.bool){
					     var target=result.targets[0];
					     event.target=target;
					     player.logSkill("lyzyanjie",target);
					     player.storage.lyzyanjie.add(target);
					     player.markSkill("lyzyanjie");
                         var num=Math.max(1,Math.floor(target.countMark("lyzyanjie2")/2));
					     target.damage(num,"fire");
					     if(target.countCards("he")>0){
					          player.gainPlayerCard("he",true,target,Math.min(num,target.countCards("he")));  
					     }					 
					 }					                 
                }
            },
            "lyzyanjie1":{
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                forced:true,
                content:function (){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('lyzyanjie2')){
                current.addSkill('lyzyanjie2');
            }
        });
    },
            },
            "lyzyanjie2":{
                marktext:"焰",
                intro:{
                    name:"焰劫",
                    content:"累计获得了#张牌",
                },
                trigger:{
                    player:"gainAfter",
                },
                filter:function (event,player){
                 return event.source!=undefined&&event.source.hasSkill("lyzyanjie");
                 },
                forced:true,
                content:function (){
                     player.addMark("lyzyanjie2",trigger.cards.length);           
                 },
            },
         
            lyzkuipo:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
              return event.player!=player;
       },
                forced:true,
                content:function (){
        if(trigger.player.countDisabled()<5){
         var list=[];
                        for(var i=1;i<6;i++){
                            if(!trigger.player.isDisabled(i)) list.add((i==3||i==4)?6:i);
                        }
                        var num=list.randomGet();
                        if(num!=6) trigger.player.disableEquip(num);
                        else{
                            trigger.player.disableEquip(3);
                            trigger.player.disableEquip(4);
                        }
        }
        else {
            trigger.player.loseMaxHp();
        }
    },
            },
            lyzwuren:{
                trigger:{
                    player:["phaseZhunbeiBegin","damageEnd"]
                },
                direct:true,
                audio:"ext:阳光包/audio:2",
                content:function (){
             "step 0"
       player.chooseTarget("〖舞刃〗：请选择要指定的目标",function(card,player,target){
            return player.inRange(target)&&target!=player&&player.canUse({name:'sha'},target,false);
       }).set('ai',function(target){
            return -get.attitude(player,target);
        });
       "step 1"
       if(result.bool){
              var target=result.targets[0];
              event.target=target;
             // target.addTempSkill("lyzwuren_1");
         }
         else {
                 event.finish();
         }
         "step 2"
        var list=[];
                        for(var i=0;i<lib.inpile.length;i++){
                            var name=lib.inpile[i];
                            if(name=='sha'){
                                list.push(['基本','','sha']);
                                for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                            }                            
                        }
              player.chooseButton(['请选择一个牌名',[list,'vcard'],true]).set('filterButton',function(button){                        
                        return true;
                    }).set('ai',function(button){            
            var effect=player.getUseValue(button.link[2]);
            if(effect>0) return effect;
            return 0;
                    });
           "step 3"
           if(result.bool){ 
          var name=result.links[0][2];                                                                            
       }
        else{
           event.finish();
       }
       "step 4"
       player.logSkill("lyzwuren");                                         
           event.related=player.useCard(false,{name:result.links[0][2],nature:result.links[0][3],isCard:true},event.target);
       "step 5"
       if(game.hasPlayer2(function(current){
                        return current.getHistory('damage',function(evt){
                            return evt.getParent(2)==event.related;
                        }).length>0;
                    })){
                        player.draw();
                    }
    },
                subSkill:{
                    "1":{
                        sub:true,
                    },                    
                },
            },
            lyzhongshang:{ 
                intro:{
                     content:function(storage,player,skill){
                        // var player=_status.event.player;
                         var str="已获得如下效果：<br>"; 
                         if(player.storage.lyzhongshang>0)  str+="·摸牌阶段摸牌数和手牌上限+1<br>"; 
                         if(player.storage.lyzhongshang>1)  str+="·计算与其他角色距离-1<br>";
                         if(player.storage.lyzhongshang>2) str+="·对其他角色造成的伤害+1";
                         return str;
                     }
                },  
                mark:true,          
                group:["lyzhongshang_die"],
                trigger:{
                    global:"dying",
                },
                audio:"ext:阳光包/audio:2",
                filter:function (event,player){
              return event.player!=player;
       },
                forced:true,
                content:function (){
         "step 0"
         player.recover();
         "step 1"
         var card=get.cardPile2(function(card){
            return get.color(card)=='red';
                });
         if(card){
            player.gain(card,'gain2');
                }            
          },
          subSkill:{
              die:{
                 trigger:{
                    global:"dieAfter"
                 },
                 audio:"lyzhongshang",
                 init:function(player){
                     if(!player.storage.lyzhongshang) player.storage.lyzhongshang=0;
                 },
                 filter:function (event,player){
                 if(player.storage.lyzhongshang>2) return false;
              return event.player!=player;
       },
                 forced:true,
                 content:function (){
                    player.storage.lyzhongshang++;
                    if(player.storage.lyzhongshang==1) player.addSkill("lyzhongshang_draw");
                    if(player.storage.lyzhongshang==2) player.addSkill("lyzhongshang_mashu");
                    if(player.storage.lyzhongshang==3) player.addSkill("lyzhongshang_sha");                   
                 },                 
              },
              sha:{
				trigger:{source:'damageBegin1'},
				audio:"lyzhongshang",
				filter:function(event,player){
					return event.player!=player;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					damageBonus:true
				}
			}, 
			mashu:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
		    draw:{
		        mod:{
					maxHandcard:function(player,num){
						return 1+num;
					}
				},
				audio:"lyzhongshang",
				trigger:{player:'phaseDrawBegin2'},
				frequent:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.3
				}
			},  
          }
    },
            lyzchengxin:{
                audio:"ext:阳光包/audio:2",
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return true;
    },
                content:function (){
      "step 0"
      target.draw(2);
      target.judge();
      "step 1"
      if(result.color=="red"){
          target.recover();
      }
    else {
          target.link(false);
          target.turnOver(false);
      }
      if(get.type(result.card)=="basic"){
          var card=get.cardPile('tao','field');
                    if(card){
                        target.gain(card,'gain2','log');
                    }
      }
      else {
          var card=get.cardPile('wuxie','field');
                    if(card){
                        target.gain(card,'gain2','log');
                    }
      }
      if(result.number==13||result.number==1){
          event.goto(2);
      }
      else {
          event.finish();
      }
      "step 2"
      player.chooseControl('悲歌','默识');
      "step 3"
      if(result.control=='悲歌'){
                        target.addSkill("rebeige");
                    }
                    else{
                    target.addSkill("mozhi");
                    }
  },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return 1;
                        },
                    },
                },
            },
            lyzfuqing:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:["damageEnd"],
                },
                check:function(event,player){
                    return get.attitude(player,event.player)>0;
                },
                content:function (){
        "step 0"
        if(player.isHealthy()) player.draw();
        else player.draw(2);
        "step 1"
        if(player!=trigger.player&&trigger.player.isAlive()){
            player.chooseCard(true,"he",[1,Infinity],"请选择要给出的牌").set('ai',function(card){
                            return 6-get.value(card,player,'raw');
                    });
        }
        else event.finish();        
        "step 2"
    if(result.bool){
                player.logSkill('lyzfuqing',trigger.player);
                player.give(result.cards,trigger.player);
            }
     },
            },
            lyzlingbo:{
                group:"lyzlingbo_1",
                audio:"ext:阳光包/audio:2",
                filter:function (event,player){
        return player.canMoveCard(null,true);
    },
                trigger:{
                    player:["phaseZhunbeiBegin","damageEnd"],
                },
                content:function (){
        player.moveCard();        
    },
                subSkill:{
                    "1":{
                        audio:"lyzlingbo",
                        enable:"phaseUse",
                        usable:1,
                        filterTarget:function (card,player,target){
                    if(ui.selected.targets.length==0){
                        return target.countCards("h");
                    }
                    return true;
                },
                        targetprompt:["展示牌","得到牌"],
                        selectTarget:2,
                        multitarget:true,
                        content:function (){
                    "step 0"
                     targets[0].chooseCard('交给'+get.translation(targets[1])+'一张手牌',true);
                    "step 1"
                    if(result.bool){
                        targets[1].gain(result.cards,targets[0],'give');
                     }
                     else {
                         event.finish();
                     }
                    "step 2"
                    if(get.suit(result.cards)=="heart"){
                        player.recover();
                    }
            },
                        ai:{
                            expose:0.2,
                            threaten:2,
                            order:9,
                            result:{
                                player:function(player,target){
                            if(ui.selected.targets.length) return 0.01;
                            return target.countCards('e')?0:0.5;
                        },
                                target:function(player,target){
                            if(ui.selected.targets.length){
                                player=target;
                                target=ui.selected.targets[0];
                                if(get.attitude(player,target)>1){
                                    return 0;
                                }
                                return target.countCards('h')-player.countCards('h')>(target.countCards('e')?2:1)?2:1;
                            }
                            else{
                                if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
                                    return card.name=='tengjia'||get.value(card)>0;
                                })>0)?-1.5:1.5;
                                return (target.countCards('he',function(card){
                                    return card.name!='tengjia'&&get.value(card)<=0;
                                })>0)?1.5:-1.5
                            }
                        },
                            },
                        },
                        sub:true,
                    },
                },
            },
            lyzqingge:{
                audio:"ext:阳光包/audio:2",
                priority:10,
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function (event,player){
            return player.getHistory('gain').length>0||player.getHistory('lose').length>0;
    },
                content:function (){
        player.draw();
    },
            },
                      
            lyzbeiwu:{
                locked:true,
                group:["lyzbeiwu_Begin","lyzbeiwu_damage","lyzbeiwu_use"],
                audio:"ext:阳光包/audio:2",
                marktext:"武",
                unique:true,
                intro:{
                    name:"武",
                    content:"mark",
                },
                subSkill:{
                    Begin:{
                        audio:"lyzbeiwu",
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
                            player.addMark("lyzbeiwu",1);
                            if((!player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")>=2){
                                player.addSkill('xiaoji');
                            };
                        },
                        sub:true,
                    },
                    damage:{
                        audio:"lyzbeiwu",
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                            return (event.source&&event.num>0);
                        },
                        content:function (){
                            player.addMark("lyzbeiwu",trigger.num);
                            if((!player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")>=2){
                                player.addSkill('xiaoji');
                            };
                        },
                        sub:true,
                    },
                    use:{
                        audio:"lyzbeiwu",
                        trigger:{
                            player:"useCardEnd",
                        },
                        forced:true,
                        filter:function (event,player){
                            return get.type(event.card)=='equip';
                        },
                        content:function (){
                            player.addMark("lyzbeiwu",1);
                            if((!player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")>=2){
                                player.addSkill('xiaoji');
                            };
                        },
                        sub:true,
                    },
                },
            },
            lyzjiaogong:{
                group:["lyzjiaogong_use","lyzjiaogong_sha","lyzjiaogong_damage"],
                audio:"ext:阳光包/audio:2",
                subSkill:{
                    use:{
                        audio:"lyzjiaogong",
                        enable:"phaseUse",
                        viewAs:{
                            name:"sha",
                        },
                        prompt:"请选择【杀】的目标",
                        precontent:function (){
                            player.removeMark("lyzbeiwu",1);
                            if((player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")<2){
                                player.removeSkill('xiaoji');
                            };
                        },
                        filter:function (card,player,target){
                            return player.countMark("lyzbeiwu")>0;
                        },
                        filterTarget:function (card,player,target){
                            if(player==target) return false;
						    return player.canUse({name:'sha'},target,false);
                        },
                        filterCard:function (){return false},
                        selectCard:-1,
                        sub:true,
                        ai:{
                            canLink:function (player,target,card){
                        if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                        if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return false;
                        if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                        return true;
                    },
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            order:function (item,player){
                        if(player.hasSkillTag('presha',true,null,true)) return 10;
                        if(lib.linked.contains(get.nature(item))){
                            if(game.hasPlayer(function(current){
                                return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                            })&&game.countPlayer(function(current){
                                return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                            })>1) return 3.1;
                            return 3;
                        }
                        return 3.05;
                    },
                            result:{
                                target:function (player,target,card,isLink){
                            var eff=function(){
                                if(!isLink&&player.hasSkill('jiu')){
                                    if(!target.hasSkillTag('filterDamage',null,{
                                        player:player,
                                        card:card,
                                        jiu:true,
                                    })){
                                        if(get.attitude(player,target)>0){
                                            return -7;
                                        }
                                        else{
                                            return -4;
                                        }
                                    }
                                    return -0.5;
                                }
                                return -1.5;
                            }();
                            if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)) return eff/1.2;
                            return eff;
                        },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function (card){
                            if(card.nature=='poison') return;
                            return 1;
                        },
                                natureDamage:function (card){
                            if(card.nature) return 1;
                        },
                                fireDamage:function (card,nature){
                            if(card.nature=='fire') return 1;
                        },
                                thunderDamage:function (card,nature){
                            if(card.nature=='thunder') return 1;
                        },
                                poisonDamage:function (card,nature){
                            if(card.nature=='poison') return 1;
                        },
                            },
                        },
                    },
                    sha:{
                        audio:"lyzjiaogong",
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        checkx:function (event,player){
                            return get.attitude(player,event.target)<0;
                        },
                        direct:true,
                        filter:function (event,player){
                            return event.card.name=='sha'&&event.target.countCards('he')>0&&event.player.countMark("lyzbeiwu")>0;
                        },
                        content:function (){
                        "step 0"
                        var next=player.chooseBool("是否发动〖娇弓〗？获得"+get.translation(trigger.target)+"一张牌");
                        var check=lib.skill.lyzjiaogong_sha.checkx(trigger,player);
                        next.set('ai',function(card){
                        if(_status.event.goon) return 1;
                        return 0;
                         });
                        next.set('goon',check);
                        "step 1"
                        if(result.bool){
                        player.logSkill("lyzjiaogong",trigger.target);
                         player.gainPlayerCard(trigger.target,'he',true);
                            player.removeMark("lyzbeiwu",1);
                            if((player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")<2){
                                player.removeSkill('xiaoji');
                            };
                        }              
                        },
                        sub:true,
                    },
                    damage:{
                        audio:"lyzjiaogong",
                        trigger:{
                            source:"damageBegin",
                        },
                        checkx:function (event,player){
                            return get.attitude(player,event.player)<0;
                        },
                        direct:true,
                        filter:function (event,player){
                            return player.countMark("lyzbeiwu")>0;
                        },
                        content:function (){
                        "step 0"
                        var next=player.chooseBool("是否发动〖娇弓〗？令此次伤害值+1");
                        var check=lib.skill.lyzjiaogong_damage.checkx(trigger,player);
                        next.set('ai',function(card){
                        if(_status.event.goon) return 1;
                        return 0;
                         });
                        next.set('goon',check);
                        "step 1"
                        if(result.bool){
                         player.logSkill("lyzjiaogong",trigger.player);
                           player.removeMark("lyzbeiwu",1);
                            trigger.num++;
                            if((player.hasSkill('xiaoji'))&&player.countMark("lyzbeiwu")<2){
                                player.removeSkill('xiaoji');
                            };
                        }                            
                        },
                        sub:true,
                    },
                },
            },
            lyzzhiying:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                direct:true,
                locked:true,
                filter:function (event,player){
                    return event.player.getHistory('useCard',function(evt){
                        return evt.isPhaseUsing()&&['trick'].contains(get.type(evt.card))&&player.hasUseTarget({
                            name:evt.card.name,
                            nature:evt.card.nature,
                            isCard:true,
                        });
                    }).length>0;
                },
                content:function (){
                    'step 0'
                    player.addTempSkill("qicai");
                    var list=[];
                    trigger.player.getHistory('useCard',function(evt){
                        if(!evt.isPhaseUsing()||!['trick'].contains(get.type(evt.card))) return;
                        else list.add(evt.card.name);
                    });
                    for(var i=0;i<list.length;i++){
                         list[i]=[get.type(list[i]),'',list[i]];
                    }
                    player.chooseButton([get.prompt('lyzzhiying'),[list,'vcard']]).set('filterButton',function(button){
                        return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
                    }).set('ai',function(button){
                        return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('lyzzhiying');
                        player.chooseUseTarget(true,{name:result.links[0][2],nature:result.links[0][3],isCard:true});
                    }
                    'step 2'
                   var bool=game.hasPlayer2(function(current){
						return current.getHistory('damage',function(evt){
							return evt.getParent(4)==event;
						}).length>0
					});
					if(bool) player.recover();
                },
            },
            lyzjinxin:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:["phaseZhunbeiBegin","damageEnd"],
                },
                content:function (){
              "step 0"
              player.chooseControl("八卦","木马","弃牌","摸牌").ai=function(){
            return [].randomGet("八卦","弃牌","摸牌");
        };
              "step 1"
              if(result.control=="弃牌"){
                event.goto(2)
              }
              if(result.control=="八卦"){
                event.goto(4)
              }
              if(result.control=="木马"){
                event.goto(6)
              }
              if(result.control=="摸牌"){
                event.goto(8)
              }
              "step 2"
              player.chooseTarget(function(card,player,target){
            return true;
           },true).set('ai',function(target){
            return -get.attitude(player,target);
        });
           "step 3"
           var equip2=result.targets[0].getEquip(2);
        var equip5=result.targets[0].getEquip(5);
                    var cards=[];
                    if(equip2) cards.push(equip2);
                    if(equip5) cards.push(equip5);
                    if(cards.length){
                        result.targets[0].discard(cards);
                    }
        event.finish();
        "step 4"
        player.chooseTarget(function(card,player,target){
            return true;
           },true).set('ai',function(target){
            return get.attitude(player,target);
        });
           "step 5"
        var card=get.cardPile(function(card){
            return get.name(card,false)=='bagua';
        });
        var target=result.targets[0];
            if(!card){
        event.finish();
            return;
        }            
                    target.$gain2(card);
				    target.equip(card);
					game.delay();      
        event.finish();
        "step 6"
        player.chooseTarget(function(card,player,target){
            return true;
           },true);
           "step 7"
        var card=get.cardPile(function(card){
            return get.name(card,false)=='muniu';
        });
        var target=result.targets[0];
            if(!card){
        event.finish();
            return;
        }
            target.$gain2(card);
				    target.equip(card);
					game.delay();
					event.finish();
	    "step 8"
	    player.draw();
      },
            },
            lyzyinfeng:{
                audio:"ext:阳光包/audio:2",
                locked:true,
                group:["lyzyinfeng_1","lyzyinfeng_2","lyzyinfeng_3","lyzyinfeng_4","lyzyinfeng_5"],
                subSkill:{
                    "1":{
                        audio:"lyzyinfeng",
                        trigger:{
                            player:"linkBegin",
                        },
                        forced:true,
                        filter:function (event,player){
            return !player.isLinked();
        },
                        content:function (){
            trigger.cancel();
        },
        ai:{
					effect:{
						target:function(card){
							if(card.name=='tiesuo') return 'zeroplayertarget';
						},
					},
				},
                        sub:true,
                    },
                    "2":{
                        audio:"lyzyinfeng",
                        trigger:{
                            player:"turnOverBefore",
                        },
                        priority:20,
                        forced:true,
                        filter:function (event,player){
            return !player.isTurnedOver();
    },
                        content:function (){
            trigger.cancel();
            game.log(player,'取消了翻面');
        },
        ai:{
           noturn:true,
        },
                        sub:true,
                    },
                    "3":{
                        mod:{
                            targetEnabled:function (card,player,target){
                        if(get.type(card)=='delay') return false;
                   },
                        },
                        sub:true,
                    },
                    "4":{
                        ai:{
                            noCompareTarget:true,
                        },
                        sub:true,
                    },
                    "5":{
                        audio:"lyzyinfeng",
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
                    player.addTempSkill("lyzyinfeng_6",{player:"phaseBegin"});
                },
                        sub:true,
                    },
                    "6":{
                        audio:"lyzyinfeng",
                        trigger:{
                            player:"damageBegin4",
                        },
                        forced:true,
                        mark:true,
                        intro:{
                            content:"防止你受到的所有伤害直至你下回合开始",
                        },
                        content:function (){
                    trigger.cancel();
                },
                ai:{
					nofire:true,
					nothunder:true,
					nodamage:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')) return [0,0];
						}
					},
				},
                        sub:true,
                    },
                },
            },
            lyztaohui:{
                audio:"ext:阳光包/audio:2",
                group:"lyztaohui_1",
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,                
                content:function (){
      var num=Math.min(5,game.roundNumber);
      player.draw(num);    
    },
                subSkill:{
                    "1":{
                        mod:{
                            maxHandcard:function (player,num){
                        return num+=Math.min(5,game.roundNumber);
                    },
                        },
                        sub:true,
                    },
                },
            },
            lyzchouji:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:["damageEnd","loseHpEnd","recoverEnd"],
                },
                filter:function(event,player){
       if(player.hasSkill("lyzchouji1")&&player.hasSkill("lyzchouji2")) return false;
       return true;
    },
                content:function(){
        "step 0"
        if(!player.hasSkill("lyzchouji1")&&!player.hasSkill("lyzchouji2")){
             player.chooseControl().set('choiceList',[
                "视为对至多两名角色使用一张普通锦囊牌",
                "令至多两名角色获得一张牌堆里的锦囊牌",
                ]).set('ai',function(){
                var list=[0,1];
                return list.randomGet();
            });
        }
        if(player.hasSkill("lyzchouji1")) event.goto(7);
        if(player.hasSkill("lyzchouji2")) event.goto(2);
        "step 1"
        if(result.index==0){
             event.goto(2);
        }
        else event.goto(7);
        "step 2"
        player.chooseTarget("〖筹疾〗（使用牌）：请选择要指定的目标",[1,2],true,function(card,player,target){
            return target!=player;
         }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 3"
          if(result.bool){
          player.addTempSkill("lyzchouji1");
          var length=result.targets.length;
          for(var i=0;i<length;i++){
          result.targets[i].addTempSkill("lyzchouji3",{target:"useCardToTargeted"});
                }
          }
          "step 4"
           var list=[];
                for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(get.type(name)=='trick') list.push(['锦囊','',name]);
                        }
              player.chooseButton(['使用牌：请选择一个牌名',[list,'vcard'],true]).set('filterButton',function(button){
                        if(button.link[2]=="wuxie") return false;
                        if(button.link[2]=="jiedao") return false;
                        if(button.link[2]=="shengdong") return false;
                        if(button.link[2]=="jinchan") return false;
                        if(button.link[2]=="caochuan") return false;
                        return true;
                    }).set('ai',function(button){
            var player=_status.event.player;
            if(button.link[2]=='nanman') return 10;
            if(button.link[2]=='wanjian') return 10;
            return 0;
                    });             
        "step 5"
           if(result.bool){ 
          var name=result.links[0][2];                                                                            
       }
        else{
           event.finish();
       }
       "step 6"
       player.logSkill("lyzchouji");
       var list=game.filterPlayer(function(current){
           return current.hasSkill("lyzchouji3");
       });                                     
           player.useCard(false,{name:result.links[0][2],nature:result.links[0][3],isCard:true},list);
           event.finish();
      "step 7"
      player.chooseTarget("〖筹疾〗（获得牌）：请选择要指定的目标",[1,2],true,function(card,player,target){
            return target!=player;
         }).set('ai',function(target){
            return get.attitude(player,target);
        });
      "step 8"
      if(result.targets){
        player.addTempSkill("lyzchouji2");
        player.line(result.targets,'green');
        event.targets=result.targets;
        event.targets.sort(lib.sort.seat);                    
        }
        else{
            event.finish();
      }
      "step 9"
     var list=[];
                for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(get.type(name)=='trick') list.push(['锦囊','',name])
                if(get.type(name)=='delay') list.push(['锦囊','',name]);
                        }
              var num=0;
              event.num=0;
              player.chooseButton(['获得牌：请选择令'+get.translation(targets[num])+'获得的牌',[list,'vcard'],true]).set('ai',function(button){
                        return Math.random();
                    });
      "step 10"
       if(result.bool){ 
       var card=get.cardPile2(function(card){
                        return card.name==result.links[0][2]; ;
                    });
       if(card)  event.targets.shift().gain(card,'gain2');
       else event.targets.shift().draw();                                                              
       }
       "step 11" 
      if(event.targets.length){
      event.num++;
      event.goto(9);
         }          
    },
            },
            "lyzchouji1":{
            },
            "lyzchouji2":{
            },
            "lyzchouji3":{
            },
            lyzmingfu:{
                audio:"ext:阳光包/audio:2",
                group:"lyzmingfu_1",
                forced:true,
                trigger:{
                    player:"phaseUseBegin",
                },
                content:function (){
        if(player.isHealthy()){
        player.loseHp();
    }
    else{
        player.recover();
    }
    },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"dying",
                        },
                        audio:"lyzmingfu",
                        direct:true,
                        forceDie:true,
                        content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt2('lyzmingfu'),function(card,player,target){
                        return target!=player;
                    }).set('forceDie',true).set('ai',function(target){
            return get.attitude(player,target);
        });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('lyzmingfu',target);
                        player.line(target);
                        target.addSkill("new_reyiji");
                    }
                },
                        sub:true,
                    },
                },
            },
            lyztianwei:{
                group:"lyztianwei3",
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                logTarget:"target",
                forced:true,
                filter:function (event,player){        
        if(event.target==player) return false;
        if(event.target.hasSkill("baiban")&&event.target.hasSkill("lyztianwei2")) return false;
        return get.tag(event.card,'damage');
   },
                content:function (){       
            trigger.target.addTempSkill("baiban");
            trigger.target.addTempSkill("lyztianwei2");
        
    },
            },
            lyztianwei2:{
                charlotte:true,
                ai:{unequip2:true}
            },
            lyztianwei3:{
				usable:1,
				forced:true,
				trigger:{source:'damageSource'},
				audio:"lyztianwei",		
				content:function(){
					"step 0"
					player.addTempSkill("yuiko_fenglun2");
					"step 1"
					player.draw(2);
				},
			},      
            lyzxiaohun:{
                  audio:"ext:阳光包/audio:2",
                  group:"lyzxiaohun2",
                enable:["chooseToRespond","chooseToUse"],           
            filter:function (event,player){
                       var list=["sha","juedou"];
                   for(var i=0;i<list.length;i++){              
						if(event.filterCard({name:list[i]},player)) return true;
					}
					return false;					
                },
                chooseButton:{
                    dialog:function (event,player){
            var list=["sha","juedou"];
            list[0]=['基本','',list[0]];
            list[1]=['锦囊','',list[1]];
            return ui.create.dialog('骁魂',[list,'vcard']);
        },
                    filter:function(button,player){
						return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
					},
                    check:function(button){
                        return 10;
                    },
                    backup:function (links,player){
            return {
                audio:'lyzxiaohun',
                filterCard:function (card,player){
                    return get.type(card)!='basic';
                },
                position:"hes",
                selectCard:1,
                popname:true,
                ai:function(card){
                    return 8-ai.get.value(card);
                },
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function (links,player){
                    return '将一张非基本牌当作'+get.translation(links[0][2])+'使用或打出';
        },
                },
                ai:{
                    order:8,
                    result:{
                        player:function(player){
                            return 2;
                        },
                    },
                    threaten:1.6,
                }
            },
            lyzxiaohun2:{
				trigger:{player:'useCard1'},
				forced:true,
				firstDo:true,
				filter:function(event,player){
					return event.card&&event.skill&&(event.card.name=='sha'||event.card.name=='juedou')&&get.color(event.card)=="red"&&event.cards&&
						event.cards.length==1&&get.type(event.cards[0])!='basic';
				},
				content:function(){
					trigger.baseDamage++;
				}
			},
            lyzmafei:{
                trigger:{
                    global:"phaseBegin",
                },
                audio:"ext:阳光包/audio:2",
                filter:function (event,player){
        return player.countCards("he")>=event.player.countMark("lyzmafei_1")&&
        player.countCards("he")>0;    
    },
                direct:true,
                content:function (){
        "step 0"
        var nono=(get.attitude(player,trigger.player)<=0);
                    if(trigger.player.hp>1){
                        nono=true
                    }                    
        var num1=Math.max(1,trigger.player.countMark("lyzmafei_1"));
        var next=player.chooseToDiscard("he",num1,get.prompt("lyzmafei"),"令"+get.translation(trigger.player)+"将体力回复至体力上限（至多回复至5）并跳过其本回合的出牌阶段和弃牌阶段");
        next.set('ai',function(card){
                        if(_status.event.nono) return -1;
                        return 7-get.value(card);
                    });
                    next.set('logSkill',['lyzmafei',trigger.player]);
                    next.set('nono',nono);
        "step 1"
        if(result.bool){
            player.logSkill("lyzmafei");
            var num2=5-trigger.player.hp;
            trigger.player.recover(num2);
            trigger.player.addTempSkill("lyzmafei_2");
            trigger.player.addMark("lyzmafei_1");
        }
    },
                subSkill:{
                    "1":{
                        intro:{
                            content:"已对其发动过#次〖麻沸〗",
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:["phaseUseBefore","phaseDiscardBefore"],
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                trigger.cancel();
            },
                        sub:true,
                    },
                },
            },
            lyzwuqin:{
                group:"lyzwuqin_remove",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:阳光包/audio:2",
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('lyzwuqin'),"令其回复1点体力并摸一张牌，若其于上回合成为过此技能的目标且于上回合未以此法增加过体力上限，其加1点体力上限",function(card,player,target){
            return true;
            }).set('ai',function(target){            
            if(target.hp==1&&get.attitude(player,target)>0) return 10;
                            if(player==target&&player.countCards('h')>player.hp&&get.attitude(player,target)>0) return 10;
                            return get.attitude(player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('lyzwuqin',result.targets);
            result.targets[0].recover();
            result.targets[0].draw();
            result.targets[0].addSkill("lyzwuqin_mark");
            if(result.targets[0]==player.storage.lyzwuqin&&!result.targets[0].hasSkill("lyzwuqin_1")){
                result.targets[0].gainMaxHp();
                result.targets[0].addSkill("lyzwuqin_1");
            }
            else {
                result.targets[0].removeSkill("lyzwuqin_1");
                delete player.storage.lyzwuqin;
            }
            player.storage.lyzwuqin=result.targets[0];            
        }
    },
                subSkill:{
                    "1":{
                        sub:true,
                    },
                    mark:{
                        mark:true,
                        marktext:"禽",
                        intro:{
                            content:function (storage,player,skill){
                                if(player.hasSkill("lyzwuqin_1")) return "上回合〖五禽〗的目标且增加过上限";
                                return "上回合〖五禽〗的目标且未增加上限";
                            },
                        },
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            player:["phaseZhunbeiBegin","dieBegin"],
                        },
                        silent:true,
                        content:function (){
                         for(var i=0;i<game.players.length;i++){
                         if(game.players[i].hasSkill('lyzwuqin_mark')){
                            game.players[i].removeSkill('lyzwuqin_mark');
                        }
                        if(game.players[i].hasSkill('lyzwuqin_mark')){
                            game.players[i].removeSkill('lyzwuqin_mark');
                        }
                    }
                },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            lyzbabei:{
                group:"lyzbabei_damage",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:阳光包/audio:2",
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget('请选择你和你攻击范围内的共计至多两名角色，获得这些角色区域里的一张牌。',[1,2],function(card,player,target){
                return target.countCards('hej')>0&&(player.inRange(target)||target==player);
            }).set('ai',function(target){
                return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool&&result.targets){
            player.line(result.targets,'green');
            player.logSkill("lyzbabei");
            event.targets=result.targets;
            event.targets.sort(lib.sort.seat);
        }
        else{
            event.finish();
        }
        "step 2"
        if(player.isAlive()&&event.targets.length){
            player.gainPlayerCard(event.targets.shift(),'hej',true);
        }
        else event.finish(); 
        "step 3"
        if(event.targets.length) event.goto(2);         
    },
    ai:{
		effect:{
			target:function(card){
				if(get.type(card)=='delay') return 'zeroplayertarget';
						},
					},
				},
                subSkill:{
                    damage:{
                        audio:"lyzbabei",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        direct:true,
                        content:function (){
                "step 0"
                player.chooseTarget("是否发动〖霸北〗？选择一名角色，对其造成1点伤害",function(card,player,target){
                                return target.hp<=player.hp;
                            }).set('ai',function(target){
                        return get.attitude(player,target)<0;
                    });
                "step 1"
                if(result.bool){
                      player.logSkill("lyzbabei",result.targets);
                      result.targets[0].damage();
                    }
            },
                        sub:true,
                    },
                },
            },
            lyztianfu2:{
                        mark:true,
                        charlotte:true,
                        marktext:"负",
                        intro:{
                            content:"已明置身份牌",
                        },
                    },
            lyztianfu:{
               zhuSkill:true,
               enable:"phaseUse",
               usable:1,
               audio:"ext:阳光包/audio:2",
               filterTarget:function (card,player,target){
                    return player.canCompare(target)&&target.identityShown!=true;
                },
               filter:function (event,player){
                    return player.countCards('h')>0&&player.hasZhuSkill("lyztianfu");
                },
                content:function (){
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if(result.bool){
                        event.goto(2);
                    }
                    else{
                        player.addTempSkill('new_rejianxiong',{player:'phaseBegin'});
                        event.finish();
                    }
                    "step 2"
                    target.addSkill("lyztianfu2");
                    target.setIdentity(target.identity);
               target.identityShown=true;
               target.node.identity.classList.remove("guseesing");
               if(target.identity=="zhong"){
             player.gainPlayerCard(2,target,'hej',true);
         }
         else {
             target.damage();
         }
               },
                  ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },       
            },
            lyzlongjie:{
                audio:"ext:阳光包/audio:2",
                ZhuSkill:true,
                unique:true,
                skillAnimation:true,
                limited:true,
                logTarget:"player",
                animationColor:"fire",
                trigger:{
                    global:"die",
                },
                filter:function (event,player){
       return player.hasZhuSkill("lyzlongjie")&&event.player.identity=="zhong";
   },
                content:function (){
       "step 0"
       player.awakenSkill("lyzlongjie");
       "step 1"
       player.recover();
       player.chooseControl(function(){
		    return Math.random()<0.5?'选项一':'选项二';
	   }).set('prompt','龙劫').set('choiceList',['获得'+get.translation(trigger.player)+'武将牌上的技能','从六张未登场的蜀国武将牌上选择获得至多两个技能']);
	   "step 2"
	   if(result.control=='选项一'){
	       var skills=trigger.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
           var info=get.info(skill);
             return info&&!info.charlotte;
        });
        for(var i of skills) player.addSkillLog(i);
        event.goto(4);
        return;	   
	   }
       else {
       var list;
					if(_status.characterlist){
						list=[];
						for(var i=0;i<_status.characterlist.length;i++){
							var name=_status.characterlist[i];
							if(lib.character[name][1]=='shu') list.push(name);
						}
					}
					else if(_status.connectMode){
						list=get.charactersOL(function(i){
							return lib.character[i][1]!='shu';
						});
					}
					else{
						list=get.gainableCharacters(function(info){
							return info[1]=='shu';
						});
					}
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}				
					list=list.randomGets(6);
					var skills=[];
					for(var i of list){
						skills.addArray((lib.character[i][3]||[]).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.charlotte&&!info.dutySkill;
						}));
					}
					if(!list.length||!skills.length){event.finish();return;}
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
							skills:skills.randomGets(2),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多两个技能',[list,'character'],'hidden');
						event.dialog=dialog;
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=0;i<skills.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=skills[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								if(!this.classList.contains('bluebg')){
									if(rSkill.length>=2) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								}
								else{
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						
						event.switchToAuto=function(){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
						event.control=ui.create.control('ok',function(link){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						});
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.pause();
						game.countChoose();
					};
					if(event.isMine()){
						chooseButton(list,skills);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,list,skills);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
       
       
       
       }
       "step 3"
       var map=event.result||result;
					if(map&&map.skills&&map.skills.length){
						for(var i of map.skills) player.addSkillLog(i);
					}
					game.broadcastAll(function(list){
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.old_yuanshu='weidi';
						}
					},map.skills);
	    "step 4"
	    if(player.name=="lyz_liubei"){	    	    
	        if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_liubei2.jpg');    
            else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_liubei2.jpg');    
        }
   },
                init:function(player){
                    if(player.hasZhuSkill('lyzlongjie')){
                        player.markSkill('lyzlongjie');
                        player.storage.lyzlongjie=false;
                    }
                },
                mark:false,
                intro:{
                    content:"limited",
                },
            },
            lyzzhaoren:{
                group:"lyzzhaoren_draw",
                mark:true,
                marktext:"昭",
                zhuanhuanji:true,
                locked:false,
                filterTarget:function (card,player,target){
                    if(player.storage.lyzzhaoren==true) return target.countCards("hej")>0&&target!=player;
                    else return target!=player;
                },
                intro:{
                    content:function (storage,player,skill){
                        if(player.storage.lyzzhaoren==true) return "你获得一名其他角色区域里的至多两张牌";
                        return "你交给一名其他角色任意张牌";
                    },
                },
                enable:"phaseUse",
                usable:1,
                audio:"ext:阳光包/audio:2",
                content:function (){
                     "step 0"
                     if(player.storage.lyzzhaoren==true){
                          player.storage.lyzzhaoren=false;                          
                          player.gainPlayerCard([1,2],target,'hej',true);
                     }
                     else event.goto(2);
                     "step 1"
                     if(result.bool){
                        player.addMark("lyzzhaoren2",result.cards.length);                        
                        event.finish();
                    }
                    "step 2"
                    player.storage.lyzzhaoren=true;
                    player.chooseCard([1,Infinity],'he',true,'〖昭仁〗：将任意张牌交给'+get.translation(target));
                    "step 3"
                       if(result.bool){
                        player.give(result.cards,target,true);                       
                        player.addMark("lyzzhaoren2",result.cards.length);
                        event.finish();
                    }
                },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            if(player.storage.lyzzhaoren==true) return -1;
                            else return 1;
                        },
                    },
                },
                subSkill:{
                    draw:{
                        audio:"lyzzhaoren",
                        forced:true,
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        filter:function (event,player){
                    return player.countMark("lyzzhaoren2")>0;
                },
                        content:function (){
                      "step 0"
                     player.draw(Math.min(player.countMark("lyzzhaoren2"),4));        
                     "step 1"    
                     player.removeMark("lyzzhaoren2",player.countMark("lyzzhaoren2"));
                },
                        sub:true,
                    },
                },
            },
         /*   lyzjingxing:{
                group:["lyzjingxing_red","lyzjingxing_black","lyzjingxing_remove"],
                audio:"ext:阳光包/audio:2",
                subSkill:{
                    red:{
                        trigger:{
                            player:"loseAfter",
                            global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                        },
                        audio:"lyzjingxing",
                        forced:true,
                        priority:4,
                        usable:1,
                        filter:function (event,player){
                var evt=event.getl(player);
                    if(!evt||!evt.cards2||!evt.cards2.length) return false;
                    for(var i of evt.cards2){
                        if(get.color(i,player)=="red") return true;
                    }
                    return false;
            },
                        content:function (){
                "step 0"                
                    var cards=[];          
                        var card=get.cardPile(function(card){
                            return !cards.contains(card)&&(card.name=="sha"||card.name=="shan");
                        });
                        if(card) cards.push(card);                         
                    if(cards.length){
                        player.gain(cards,'gain2');
                    }
                    else event.finish();
                "step 1"
                game.updateRoundNumber();
            },
                        sub:true,
                    },
                    black:{
                        trigger:{
                            player:"loseAfter",
                            global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                        },
                        forced:true,
                        audio:"lyzjingxing",
                        priority:3,
                        usable:1,
                        filter:function (event,player){
                var evt=event.getl(player);
                    if(!evt||!evt.cards2||!evt.cards2.length) return false;
                    for(var i of evt.cards2){
                        if(get.color(i,player)=="black") return true;
                    }
                    return false;
            },
                        content:function (){
                "step 0"
               
                    var cards=[];
                        var card=get.cardPile(function(card){
                            return !cards.contains(card)&&(get.type(card)=="trick"||get.type(card)=="equip");
                        });
                        if(card) cards.push(card);
           
                   
                    if(cards.length){
                        player.gain(cards,'gain2');
                        player.addMark("lyzjingxing_mark");
                    }
                    else event.finish();
                "step 1"
                game.updateRoundNumber();
            },
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            global:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        priority:-3,
                        content:function (){
                player.removeMark("lyzjingxing_mark",player.countMark("lyzjingxing_mark"));
            },
                        sub:true,
                    },
                },
            },
            lyzjueyi:{
                group:["lyzjueyi_red","lyzjueyi_black"],
                skillAnimation:true,
                animationColor:"fire",
                audio:"ext:阳光包/audio:1",
                juexingji:true,
                derivation:["fanghun_lyz_mayunlu","tieqi_lyz_mayunlu"],
                unique:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event,player){
        return player.countMark("red")>1&&
        player.countMark("black")>1&&
        !player.storage.lyzjueyi;
    },
                forced:true,
                content:function (){
        player.recover();
        player.addSkill('fanghun_lyz_mayunlu');
        player.addSkill('tieqi_lyz_mayunlu');
        game.log(player,'获得了技能','#g〖芳魂〗和〖铁骑〗')
        player.awakenSkill(event.name);
        player.storage[event.name]=true;
    },
                subSkill:{
                    red:{
                        trigger:{
                            player:"loseAfter",
                            global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                        },
                        forced:true,
                        priority:7,
                        popup:false,
                        filter:function (event,player){
                            if(player.countMark("lyzjingxing_mark")>1) return false;
                var evt=event.getl(player);
                    if(!evt||!evt.cards2||!evt.cards2.length) return false;
                    for(var i of evt.cards2){
                        if(get.color(i,player)=="red") return true;
                    }
                    return false;
            },
                        content:function (){
                "step 0"
                var num=trigger.getl(player).cards2.filter(function(card){
                        return get.color(card,player)=="red";
                    }).length;
                    var cards=[];
                    while(num--){
                        player.addMark("red");
                    }
                    
            },
                        sub:true,
                    },
                    black:{
                        trigger:{
                            player:"loseAfter",
                            global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                        },
                        forced:true,
                        priority:6,
                        popup:false,
                        filter:function (event,player){
                            if(player.countMark("lyzjingxing_mark")>1) return false;
                var evt=event.getl(player);
                    if(!evt||!evt.cards2||!evt.cards2.length) return false;
                    for(var i of evt.cards2){
                        if(get.color(i,player)=="black") return true;
                    }
                    return false;
            },
                        content:function (){
                "step 0"
                var num=trigger.getl(player).cards2.filter(function(card){
                        return get.color(card,player)=="black";
                    }).length;
                    var cards=[];
                    while(num--){
                         player.addMark("black");
                    }
                    
            },
                        sub:true,
                    },
                },
            },
            */
            "tieqi_lyz_mayunlu":{
                shaRelated:true,
                audio:"ext:阳光包/audio:1",
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player){
        return event.card.name=='sha';
    },
                logTarget:"target",
                content:function(){
        "step 0"
        player.judge(function(){return 0});
        if(!trigger.target.hasSkill('fengyin')){
            trigger.target.addTempSkill('fengyin');
        }
        "step 1"
        var suit=result.suit;
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 8-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 2"
        if(!result.bool){
            trigger.getParent().directHit.add(trigger.target);
        }
    },
                ai:{
                    ignoreSkill:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='directHit_ai'){
                return get.attitude(player,arg.target)<=0;
            }
            if(!arg||arg.isLink||!arg.card||arg.card.name!='sha') return false;
            if(!arg.target||get.attitude(player,arg.target)>=0) return false;
            if(!arg.skill||!lib.skill[arg.skill]||lib.skill[arg.skill].charlotte||get.is.locked(arg.skill)||!arg.target.getSkills(true,false).contains(arg.skill)) return false;
        },
                    "directHit_ai":true,
                },
            },
            lyzyilie:{
                group:"lyzyilie_use",
                audio:"ext:阳光包/audio:2",
                ZhuSkill:true,
                unique:true,
                skillAnimation:true,
                limited:true,
                animationColor:"wood",
                direct:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
       return player.hasZhuSkill("lyzyilie")&&player.hp<=2;
   },
                content:function(){
       "step 0"
       player.chooseTarget("是否发动〖翊烈〗？选择一名角色，令其将武将牌替换为“界孙笨”，身份牌替换为忠臣，",function(card,player,target){
              return target!=player&&target.identity!="zhu";
       }).set('ai',function(target){
              return get.attitude(player,target)<0;
       });
       "step 1"
       if(result.bool){
           var target=result.targets[0];
           event.target=target;           
           player.logSkill("lyzyilie",target);
           target.draw(2);
           target.identity="zhong";
           target.setIdentity(result.targets[0].identity);
           target.identityShown=true;
           target.node.identity.classList.remove("guseesing");
           event.goto(2);                        
       }
       else event.finish();
       "step 2"
       if(target.name2!=undefined){
                target.chooseControl(target.name1,target.name2).set('prompt','请选择要更换的武将牌');
            }
           else event._result={control:target.name1};     
    "step 3"
       event.num=target.maxHp+1;
       target.reinit(result.control,"re_sunben");
           if(_status.characterlist){
                _status.characterlist.add(result.control);
                _status.characterlist.remove('re_sunben');
            }
    "step 4" 
    var num=event.num-target.maxHp;
                    if(num>0) target.gainMaxHp(num);
                    else target.loseMaxHp(-num);
           player.awakenSkill("lyzyilie");       
       "step 5"       
           if(game.zhu.isAlive()&&get.population('fan')+get.population('nei')==0){
             if(player.identity=="zhu"||player.identity=="zhong"){
                game.over("游戏胜利");                
             }
             else game.over("游戏失败");
          }
   },
                subSkill:{
                    use:{
                        audio:"lyzyilie",
                        ZhuSkill:true,
                        unique:true,
                        skillAnimation:true,
                        limited:true,
                        animationColor:"wood",
                        enable:"phaseUse",
                        filter:function(event,player){
              return player.hasZhuSkill("lyzyilie")&&player.hp<=2;
          },
                        filterTarget:function(card,player,target){
              return target!=player&&target.identity!="zhu";
          },
                        content:function(){
          "step 0"           
           target.draw(2);
           target.identity="zhong";
           target.setIdentity(targets.identity);
           target.identityShown=true;
           target.node.identity.classList.remove("guseesing");
           "step 1"
           if(target.name2!=undefined){
                target.chooseControl(target.name1,target.name2).set('prompt','请选择要更换的武将牌');
            }
           else event._result={control:target.name1};
           "step 2"
           event.num=target.maxHp+1;
           target.reinit(result.control,"re_sunben");
           if(_status.characterlist){
                _status.characterlist.add(result.control);
                _status.characterlist.remove('re_sunben');
            }
           "step 3"
              var num=event.num-target.maxHp;
                    if(num>0) target.gainMaxHp(num);
                    else target.loseMaxHp(-num);
           player.awakenSkill("lyzyilie");
             "step 4"
           if(game.zhu.isAlive()&&get.population('fan')+get.population('nei')==0){
             if(player.identity=="zhu"||player.identity=="zhong"){
                game.over("游戏胜利");                
             }
             else game.over("游戏失败");
          }
            },
                        ai:{
                            order:1,
                            result:{
                                target:function(player,target){
                            return -1;
                        },
                            },
                        },
                        sub:true,
                        mark:false,
                        intro:{
                            content:"limited",
                        },
                        init:function(player){
                    if(player.hasZhuSkill('lyzyilie')){
                        player.markSkill('lyzyilie');
                        player.storage.lyzyilie=false;
                    }
                },
                    },
                },
                mark:false,
                intro:{
                    content:"limited",
                },
                init:function(player){
                    if(player.hasZhuSkill('lyzyilie')){
                        player.markSkill('lyzyilie');
                        player.storage.lyzyilie=false;
                    }
                },
            },
            lyzjinzheng:{
                group:"lyzjinzheng2",
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function(event,player){
      if(player.storage.lyzjinzheng.length>=4) return false;
      return true;
   },
   check:function(event,player){
      return player.hp>1; 
   },
                init:function(player){
      if(!player.storage.lyzjinzheng) player.storage.lyzjinzheng=[];
      if(!player.storage.lyzjinzheng2) player.storage.lyzjinzheng2=[];
   },
                content:function(){
      "step 0"
      player.loseHp();
      "step 1"
      var list1=[],list2=[];
      for(var i=0;i<lib.inpile.length;i++){
      var type=get.type(lib.inpile[i]);
         if(type=='basic'){
            list1.push(['基本','',lib.inpile[i]]);
            }
            else if(type=='trick'){
            list2.push(['锦囊','',lib.inpile[i]]);
            }
        }
            player.chooseButton(true,[[list1.concat(list2),'vcard']]).set('filterButton',function(button){
            var player=_status.event.player;
            if(player.storage.lyzjinzheng2&&player.storage.lyzjinzheng2.contains(button.link[2])) return false;
            return true;
        }).set('ai',function(button){
        var player=_status.event.player;
            if(button.link[2]=='sha') return 10;
            if(button.link[2]=='shan') return 10;
            if(button.link[2]=='tao') return 10;
            if(button.link[2]=='wuxie') return 10;
            return 0;                        
       });
      "step 2"  
      if(result.bool){
            player.storage.lyzjinzheng2.push(result.links[0][2]);
            if(player.isOnline2()){
            player.send(function(storage){
            game.me.storage.lyzjinzheng2=storage;
            },player.storage.lyzjinzheng2);
        }
    }
         else{
            event.finish();
          }
    "step 3"
    if(result.bool){
            var card=result.cards[0];
            player.storage.lyzjinzheng.push(card);
            player.syncStorage('lyzjinzheng');
            player.markSkill('lyzjinzheng');
        }
     },
            },
            "lyzjinzheng2":{
                trigger:{
                    player:"useCard",
                },
                forced:true,
                audio:"lyzjinzheng",
                filter:function(event,player){
                    return player.storage.lyzjinzheng2&&player.storage.lyzjinzheng2.contains(event.card.name)&&player.getHistory('lose',function(evt){
                        return evt.getParent()==event&&evt.hs&&evt.hs.length==event.cards.length;
                    }).length;
                },
                content:function(){
                    "step 0"
                    player.chooseTarget('对一名体力值不小于你的其他角色造成1点伤害，或点取消摸牌',function(card,player,target){
                        return target.hp>=player.hp&&target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player);
                    });
                    "step 1"
                    if(result.bool&&result.targets&&result.targets.length){
                        player.logSkill('lyzjinzheng',result.targets);
                        player.line(result.targets[0],'green');
                        result.targets[0].damage();
                    }
                    else player.draw(Math.ceil(player.getDamagedHp()/2));
                
                
                },
            },
            lyzluanshi:{
                trigger:{
                    global:"phaseUseBegin",
                },
                audio:"ext:阳光包/audio:2",
                content:function(){
       "step 0"
       player.line(trigger.player);
       "step 1"
       trigger.player.judge();
       "step 2"
       player.storage.lyzluanshi=get.color(result.card);
       "step 3"
       player.chooseToDiscard("he").set('ai',function(card){
          if(get.attitude(player,trigger.player)>3) return get.color(card,player)!=player.storage.lyzluanshi;
          if(get.attitude(player,trigger.player)<0) return get.color(card,player)==player.storage.lyzluanshi;
          return -1;                               
        });
       "step 4"
       if(result.bool){
           if(get.color(result.cards[0])!=player.storage.lyzluanshi){
              trigger.player.draw(2);
           }
           else trigger.player.damage("thunder");
        }
        else event.finish();  
    },
            },
            lyztaiping:{
                zhuSkill:true,
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                filter:function (event,player){
        return player.hasZhuSkill("lyztaiping");
    },
                direct:true,
                content:function(){
       "step 0"
           _status.noclearcountdown=true;
           var num1=game.countPlayer();
           var num2=game.countPlayer(function(current){
            return current.group=="qun";
        });
        if(num1!=num2){
        player.chooseControl('cancel2').set('choiceList',[
            '令一名群势力角色获得技能〖雷击〗、〖鬼道〗或〖天妒〗',
            '令一名角色将势力变更为群',
        ]).set('prompt',get.prompt('lyztaiping'));
        }
        else{
            player.chooseControl('ok','cancel2').set('prompt',get.prompt2('lyztaiping'));
        }
      "step 1"
       if(result.control=='cancel2'){
          delete _status.noclearcountdown;
            if(!_status.noclearcountdown){
                game.stopCountChoose();
            }
            event.finish();
            return;
        }
        else if(result.index==1){
          player.chooseTarget('请选择一名角色，将其势力变更为群',true,function(card,player,target){
            return target.group!="qun";
        });        
        }
        else {
        delete _status.noclearcountdown;
            if(!_status.noclearcountdown){
                game.stopCountChoose();
        }
    player.chooseTarget(function(card,player,target){
                                return target.group=="qun";
                            },"请选择一名角色",true).set('ai',function(target){
                                return get.attitude(player,target);
                            });
        event.goto(3);
        }
    "step 2"
       delete _status.noclearcountdown;
        if(!_status.noclearcountdown){
        game.stopCountChoose();
        }
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('lyztaiping',target);
            target.group="qun";
            event.finish();
        }
        else event.finish();
    "step 3"
      if(result.bool){
                                var target=result.targets[0];
                                player.logSkill('lyztaiping',target);
                                    event.target=target;
                                    player.chooseControl('xinleiji','xinguidao','tiandu').set('prompt','令'+get.translation(target)+'获得一项技能').ai=function(event,player){
                        if(target.hasSkill("xinleiji")&&!target.hasSkill("xinguidao")) return 1;
                        if(target.hasSkill("xinleiji")&&target.hasSkill("xinguidao")) return 2;
                        return 0;                    
                    }                           
                            }
    "step 4"
    event.target.addSkillLog(result.control);
   },
            },                                   
             lyzdingqian:{
                audio:"ext:阳光包/audio:2",
                group:"lyzdingqian_gain",
                trigger:{
                    player:["phaseZhunbeiBegin","damageEnd"],
                },
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                        return current!=player&&!current.hasSkill("lyzdingqian_mark");
                    });
                },
                forced:true,
                content:function(){
       "step 0"
       player.chooseTarget(true,"请选择要获得“谦”的角色",function(card,player,target){
            return !target.hasSkill("lyzdingqian_mark")&&target!=player;
       }).set('ai',function(target){
          return -get.attitude(player,target);
          });
       "step 1"
       if(result.bool){
            player.line(result.targets[0],'green');
            result.targets[0].addSkill("lyzdingqian_mark");
         }   
    },
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"谦",
                        intro:{
                            content:"已获得“谦”",
                        },
                        sub:true,
                    },
                    gain:{
                        trigger:{
                            global:"gainAfter",
                        },
                        audio:"lyzdingqian",
                        filter:function (event,player){
                if(event.parent.parent.name=='phaseDraw') return false;
              //  if(player.countCards("h")>player.maxHp) return false;
                return event.cards&&event.cards.length>0&&event.player.hasSkill("lyzdingqian_mark");
             },                        
                       forced:true,                       
                        content:function(){
                        "step 0" 
               if(player.countCards("h")>player.maxHp){                     
                        player.chooseCard('he',"可重铸一张牌").set('ai',function(card){
						return 1;
					});
			   }
			   else {
			        player.draw();
			        event.finish();
			   }
					"step 1"
					if(result.bool){
						var card=result.cards[0];     
						player.lose(card,ui.discardPile,'visible');
						player.$throw(card,1000);
						game.log(player,'将',card,'置入弃牌堆');
						player.draw();
			      }
             },
                        sub:true,
                    },
                },
            },
            lyzguilv:{
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                audio:"ext:阳光包/audio:2",
                content:function(){
      "step 0"
      player.chooseTarget("是否发动〖规虑〗？选择一名角色为目标",function(card,player,target){
          return target!=player;
          }).set('ai',function(target){
          if(get.attitude(player,target)<0&&target.countCards("h")<=player.countCards("h")) return 10;
          return get.attitude(player,target);
          });
      "step 1"
      if(result.bool){
           player.logSkill("lyzguilv",result.targets);
           player.draw();
           player.addTempSkill("lyzguilv2");
           result.targets[0].draw();
           result.targets[0].addTempSkill("lyzguilv3");           
         }        
   },
            },
            "lyzguilv2":{
                trigger:{
                    player:"phaseUseEnd",
                },
                direct:true,
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current!=player&&current.hasSkill("lyzguilv3");
        });
    },
                content:function(){
        "step 0"
        event.list=game.filterPlayer(function(current){
            return current.hasSkill("lyzguilv3");
        });
        event.current=event.list.shift();
        if(event.current.countCards("h")<=player.countCards("h")){
            event.goto(1);
        }
        else event.finish();
        "step 1"
        player.chooseBool('是否对'+get.translation(event.current)+'造成1点火焰伤害？或点取消与其各回复1点体力').ai=function(){
                return get.damageEffect(event.current,player,player)>0
                        };
        "step 2"
        if(result.bool){
             player.logSkill("lyzguilv",event.current);
             event.current.damage('fire');
        }
        else {
             player.logSkill("lyzguilv",event.current);
             event.current.recover();
             player.recover();
        }     
    },
            },
            "lyzguilv3":{
                 charlotte:true,
            },
            lyzchouyi:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"damageEnd",
                    global:"roundStart",
                },
                forced:true,
                content:function(){
            "step 0"
            event.card=get.cards()[0];
            game.cardsGotoOrdering(event.card);
            event.videoId=lib.status.videoId++;
            var judgestr="";
            game.addVideo('judge1',player,[get.cardInfo(event.card),judgestr,event.videoId]);
            game.broadcastAll(function(player,card,str,id,cardid){
                var event;
                if(game.online){
                    event={};
                }
                else{
                    event=_status.event;
                }
                if(game.chess){
                    event.node=card.copy('thrown','center',ui.arena).animate('start');
                }
                else{
                    event.node=player.$throwordered(card.copy(),true);
                }
                if(lib.cardOL) lib.cardOL[cardid]=event.node;
                event.node.cardid=cardid;
                event.node.classList.add('thrownhighlight');
                ui.arena.classList.add('thrownhighlight');
                event.dialog=ui.create.dialog(str);
                event.dialog.classList.add('center');
                event.dialog.videoId=id;
            },player,event.card,judgestr,event.videoId,get.id());

            game.log(player,'展示了',event.card);
            game.delay(2);
            game.addVideo('deletenode',player,[get.cardInfo(event.node)]);
                        event.node.delete();
                        game.broadcast(function(id){
                            var dialog=get.idDialog(id);
                            if(dialog){
                                dialog.close();
                            }
                            if(card.clone){
                                card.clone.delete();
                            }
                            ui.arena.classList.remove('thrownhighlight');
                        },event.videoId,event.card);
                        event.dialog.close();
                        game.addVideo('judge2',null,event.videoId);
                        ui.arena.classList.remove('thrownhighlight');
            if(get.number(event.card)%2==1&&!player.countMark("lyzchouyi_yinyao")){
                 player.addMark("lyzchouyi_yinyao")
            }
            if(get.number(event.card)%2!=1&&!player.countMark("lyzchouyi_yangyao")){
                 player.addMark("lyzchouyi_yangyao")
            }
            "step 1"
            if(player.countMark("lyzchouyi_yinyao")&&player.countMark("lyzchouyi_yangyao")&&!player.countMark("lyzchouyi_taichu")){
                 player.addMark("lyzchouyi_taichu")
            }    
     },
                subSkill:{
                    yangyao:{
                        mark:true,
                        marktext:"阳",
                        intro:{
                            name:"阳爻",
                            content:"mark",
                        },
                        sub:true,
                    },
                    yinyao:{
                        mark:true,
                        marktext:"阴",
                        intro:{
                            name:"阴爻",
                            content:"mark",
                        },
                        sub:true,
                    },
                    taichu:{
                        mark:true,
                        marktext:"太",
                        intro:{
                            name:"太初",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
            },
            lyztianqian:{
                audio:"ext:阳光包/audio:1",
                global:"lyztianqian2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return player.countMark("lyzchouyi_yangyao"); 
    },
                direct:true,
                content:function(){
        "step 0"
        player.chooseTarget(get.prompt2("lyztianqian"),function(card,player,target){
                        return target.storage.lyztianqian2!=undefined;
                    })
        "step 1"
        if(result.bool){
            player.removeMark("lyzchouyi_yangyao")
            player.logSkill("lyztianqian",result.targets);
            var target=result.targets[0];
            player.draw(target.storage.lyztianqian2);
            player.storage.lyztianqian3=target.storage.lyztianqian2;
            player.addTempSkill("lyztianqian3");        
        }    
    },
            },
            "lyztianqian2":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                popup:false,
                content:function(){
       var history=player.getHistory('useCard',function(evt){
           return evt.position=ui.discardPile;
       });
       var suits=[];
       for(var i=0;i<history.length;i++){
       var suit=get.suit(history[i].card);
            if(suit) suits.add(suit);
       }
       var types=[];
       for(var i=0;i<history.length;i++){
       var type=get.type(history[i].card);
            if(type) types.add(type);
       }
       player.storage.lyztianqian2=suits.length+types.length;   
   },
            },
            "lyztianqian3":{
                mark:true,
                charlotte:true,
                intro:{
                    content:function (storage,player){
                        return '手牌上限+'+player.storage.lyztianqian3;
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num+player.storage.lyztianqian3;
                    },
                },
                onremove:function (player){
                    delete player.storage.lyztianqian3;
                },
            },
            lyzdikun:{
                audio:"ext:阳光包/audio:1",
                group:"lyzdikun_gain",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
     return player.countMark("lyzchouyi_yinyao")>0&&event.player!=player;
   },
                content:function(){
     "step 0"
     player.removeMark("lyzchouyi_yinyao");
     "step 1"
     player.line(trigger.player);
     trigger.player.addTempSkill("lyzdikun2");
     player.chooseControl('basic','trick','equip');
     "step 2"
     trigger.player.storage.lyzdikun2=result.control;
   },
                subSkill:{
                    gain:{
                        trigger:{
                            global:"phaseUseEnd",
                        },
                        forced:true,
                        audio:"lyzdikun",
                        filter:function(event,player){
            return event.player.hasSkill("lyzdikun2");
         },
                        content:function(){
                "step 0"        
        var trick=true;
                    trigger.player.getHistory('useCard',function(evt){
                        if(evt.getParent('phaseUse')!=trigger) return false;
                
                        if(trick&&get.type2(evt.card,false)==trigger.player.storage.lyzdikun2) trick=false;
                    });
                    if(trick) event.goto(4);
                    else event.goto(1);                    
                    "step 1"
                      player.chooseBool('是否令'+get.translation(trigger.player)+'失去一个技能？');
                      "step 2"
                      var list=trigger.player.getSkills().filter(function(skill){
                        var info=get.info(skill);
                        return info&&!info.charlotte&&!info.equipSkill;
                    });
                      if(result.bool&&list.length>0){
                      var list=trigger.player.getSkills().filter(function(skill){
                        var info=get.info(skill);
                        return info&&!info.charlotte&&!info.equipSkill;
                    });
                    if(list.length==1) event._result={control:list[0]};
                    else player.chooseControl(list).set('prompt','选择令'+get.translation(trigger.player)+'失去一个技能').set('forceDie',true).set('ai',function(){
                        return list.randomGet();
                    });           
                      }
                      else event.finish();
                      "step 3"
                      trigger.player.removeSkill(result.control);
                      trigger.player.removeSkill("lyzdikun2");
                      event.finish();
                      "step 4"
                      player.gainMaxHp();
                      player.recover();
                      trigger.player.removeSkill("lyzdikun2");
            },
                        sub:true,
                    },
                },
            },
            "lyzdikun2":{
                charlotte:true,
            },
            lyzguiyuan:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                filter:function(event,player){
       return player.countMark("lyzchouyi_taichu")>0;
    },
                content:function(){
          "step 0"
          player.removeMark("lyzchouyi_taichu");
          "step 1"
          player.chooseControl(function(){
               return Math.random()<0.5?'选项一':'选项二';
          }).set('prompt','归元').set('choiceList',['令至多两名其他角色将体力回复至体力上限','令至多两名其他角色弃置所有牌，然后将体力上限调整至与当前体力值相同']);
          "step 2"
          if(result.control=='选项一'){
              player.chooseTarget([1,2],"请选择〖归元〗的目标",lib.filter.notMe).ai=function(target){
                return get.attitude(player,target)&&target.hp<target.maxHp;
             };                    
          }
          else {
             player.chooseTarget([1,2],"请选择〖归元〗的目标",lib.filter.notMe).ai=function(target){
                return get.attitude(player,target)<0;
             };    
             event.goto(4);                  
          }
          "step 3"
          if(result.bool){
                player.line(targets);
                var targets=result.targets.sortBySeat();
                for(var i=0;i<targets.length;i++){
                targets[i].recover(targets[i].maxHp-targets[i].hp);
             };      
          }
          event.finish();
          "step 4"
          if(result.bool){
               player.line(targets);
               var targets=result.targets.sortBySeat();
                for(var i=0;i<targets.length;i++){
                targets[i].discard(targets[i].getCards('he'));
                targets[i].loseMaxHp(targets[i].maxHp-targets[i].hp);
             };      
          }    
    },
            },
            lyzxingxuan:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                direct:true,
                filter:function (event,player){
        if(player.hasSkill("lyzxingxuan2")) return false;
        if(event.name=="useCardToPlayered"&&event.getParent().triggeredTargets3.length>1) return false;
        if(event.player==player&&event.targets.length==1&&event.target==player) return false;
        return true;
    },
                content:function(){
        "step 0"
        if(event.triggername=="useCardToPlayered"){
            player.chooseTarget("###是否发动〖星旋〗？###请选择要交换的目标",function(card,player,target){
                        return _status.event.targets.contains(target)&&player!=target;
                    }).set('ai',function(target){
                        if(target.countCards("h")<player.countCards("h")) return -1;
                        return 2-get.attitude(_status.event.player,target);
                    }).set('targets',trigger.targets);        
        }
        if(event.triggername=="useCardToTargeted"){
            player.chooseTarget("###是否发动〖星旋〗？###请选择要交换的目标",function(card,player,target){
                        return trigger.player.contains(target);
                    }).set('ai',function(target){
                        if(target.countCards("h")<player.countCards("h")) return -1;
                        return 2-get.attitude(_status.event.player,target);
                    }).set('targets',trigger.player);              
        }
        "step 1"
        if(result.bool){
            player.addTempSkill("lyzxingxuan2");
            player.logSkill("lyzxingxuan",result.targets[0]);
            var target=result.targets[0];
            event.target=target;
            player.line(target);
            player.chooseControl("手牌区","装备区");
        }
        else event.finish();
        "step 2"
        if(result.control=="手牌区"){
            player.swapHandcards(target);
        }
        else player.swapEquip(target);
    },
            },
            lyzxingxuan2:{
            mark:true,
                        marktext:"星",
                        intro:{
                            content:"本回合已发动〖星旋〗",
                        },            
            },
            lyzlingying:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:"phaseUseEnd",
                },
                direct:true,
                filter:function(event,player){
        return event.player.getHistory('useCard',function(evt){
               return evt.isPhaseUsing()&&['basic','trick'].contains(get.type(evt.card))&&player.hasUseTarget({
               name:evt.card.name,
               nature:evt.card.nature,
               isCard:true,
               });
        }).length>0;
    },
                content:function(){
        "step 0"
        player.addTempSkill("yuiko_fenglun2");
        var list=[];
        trigger.player.getHistory('useCard',function(evt){
        if(!evt.isPhaseUsing()||!['basic','trick'].contains(get.type(evt.card))) return;
        if(evt.card.name=='sha'&&evt.card.nature) list.add('sha:'+evt.card.nature);
            else list.add(evt.card.name);
        });
        for(var i=0;i<list.length;i++){
            if(list[i].indexOf('sha:')==0) list[i]=['基本','','sha',list[i].slice(4)];
            else list[i]=[get.type(list[i]),'',list[i]];
        }
        player.chooseButton([get.prompt('lyzlingying'),[list,'vcard']]).set('filterButton',function(button){
            return player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
        }).set('ai',function(button){
            return player.getUseValue({name:button.link[2],nature:button.link[3],isCard:true});
        });
        "step 1"
        if(result.bool){
        var card={name:result.links[0][2],nature:result.links[0][3]};
                        if(lib.filter.cardEnabled(card)){
                            if(game.hasPlayer(function(current){
                                return player.canUse(card,current);
                            })){
                                lib.skill.lyzlingyingx.viewAs=card;
                                var next=player.chooseToUse();
                                if(next.isOnline()){
                                    player.send(function(card){
                                        lib.skill.lyzlingyingx.viewAs=card;
                                    },card)
                                }
                                next.logSkill='lyzlingying';
                                next.set('openskilldialog','〖绫缨〗：将一张装备牌当'+get.translation(card)+'使用');
                                next.set('norestore',true);
                                next.set('_backupevent','lyzlingyingx');
                                next.set('custom',{
                                    add:{},
                                    replace:{window:function(){}}
                                });
                                next.backup('lyzlingyingx');
                  }
             }        
        }                       
   },
            },
            lyzlingyingx:{
                filterCard:function(card){
                    return get.type(card)=='equip';
                },
                selectCard:1,
                position:"he",
                popname:true,
            },
            lyzxianmu:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    global:"phaseEnd"
                },
                forced:true,
                content:function (){
                    "step 0"
                    var num=0;
                    if(player.getHistory('gain').length>0) num++;
                    if(player.getHistory('lose').length>0) num++;
                    if(player.getHistory('damage').length>0) num++;
                    if(num>0) player.draw(num);
                    "step 1"
                    if(player.countCards("he")>1){
                    player.chooseCardTarget({
                        position:'he',
                        filterCard:true,
                        selectCard:2,
                        filterTarget:function(card,player,target){
                            return player!=target;
                        },
                        ai1:function(card){
                            if(get.attitude(_status.event.player,_status.currentPhase)<0&&_status.currentPhase.needsToDiscard()&&card.name!='du') return -1;
                            for(var i=0;i<ui.selected.cards.length;i++){
                                if(get.type(ui.selected.cards[i])==get.type(card)||(ui.selected.cards[i].name=='du'&&card.name!='du')) return -1;
                            };
                            if(card.name=='du') return 20;
                            return (_status.event.player.countCards('h')-_status.event.player.hp);
                        },
                        ai2:function(target){
                            if(get.attitude(_status.event.player,_status.currentPhase)<0) return -1;
                            var att=get.attitude(_status.event.player,target);
                            if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                                if(target.hasSkillTag('nodu')) return 0;
                                return 1-att;
                            }
                            if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
                            return att-4;
                        },
                        prompt:get.prompt2('lyzxianmu'),
                    });
                    }
                    "step 2"
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        var cards=result.cards;                        
                        player.logSkill('lyzxianmu',target);
                        target.gain(cards,player,'giveAuto');
                        target.link(false);
                        target.turnOver(false);
                }
                else event.finish();
                  "step 3"
                    var list=lib.inpile_nature.slice(0);					
					var vcards=[];
					if(lib.filter.cardEnabled({name:"sha"},event.target)) {
					       for(var j of lib.inpile_nature) vcards.push(['基本','','sha',j]);
					       vcards.push("sha");
					}
					if(lib.filter.cardEnabled({name:"tao"},event.target)) vcards.push("tao");
					player.chooseButton(['请选择要令'+get.translation(event.target)+'使用的牌',[vcards,'vcard']],true);
					"step 4"
					if(result.bool) event.target.chooseUseTarget({name:result.links[0][2],nature:result.links[0][3]},true,'nodistance');
					
            },
        },
            lyzfengjun:{
                audio:"ext:阳光包/audio:2",
                group:["lyzfengjun2","lyzfengjun_damage"],
                enable:'phaseUse',
                usable:1,
                filterTarget:function(card,player,target){
                    return player.canCompare(target);
                },
                content:function(){
                    "step 0"
                    player.draw();
                    "step 1"
                    player.chooseToCompare(target);
                },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },
            },
            lyzfengjun_damage:{
                trigger:{
                   player:"damageEnd"
                },
                direct:true,
                content:function(){
                    "step 0"
                    player.chooseTarget("请选择拼点的角色",function(card,player,target){
						return player.canCompare(target);
					}).set("ai",function(target){
						var player=_status.event.player
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.bool){
					    var target=result.targets[0];
					    player.logSkill("lyzfengjun",target);
					    player.draw();
					    player.chooseToCompare(target);
					}					
                }
            },            
            lyzfengjun2:{
                trigger:{player:['chooseToCompareAfter','compareMultipleAfter'],target:['chooseToCompareAfter','compareMultipleAfter']},
                direct:true,
                content:function(){
                    "step 0"
                    if(player==trigger.player){
                        if(trigger.num1>trigger.num2){
                            player.chooseTarget("选择一名角色为目标",function(card,player,target){
                               return true;
                            }).set("ai",function(target){
                               return get.attitude(player,target);
                            });
                        }
                        
                    }
                    else{
                        if(trigger.num1<trigger.num2){
                            player.chooseTarget("选择一名角色为目标",function(card,player,target){
                               return true;
                            }).set("ai",function(target){
                               return get.attitude(player,target);
                            });
                        }
                        
                    }
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill("lyzfengjun",target);
                        if(!target.storage.lyzfengjun3) target.storage.lyzfengjun3=0;
                        target.storage.lyzfengjun3++;
                        target.addSkill("lyzfengjun3");
                        target.addTempSkill("mizhao",{player:"phaseEnd"});
                    }
                    else event.finish();
                  
                }
            },
            lyzfengjun3:{
                intro:{
                    content:"多摸#张牌",
                },
                mark:true,
                marktext:"君",
                trigger:{player:['phaseDrawBegin2','phaseEnd']},
                forced:true,
                filter:function(event,player){
                    return !event.numFixed;
                },
                content:function(){
                    if(event.triggername=="phaseDrawBegin2"){
                         trigger.num+=player.storage.lyzfengjun3;
                    }
                    else{
                         delete player.storage.lyzfengjun3;
                         player.removeSkill("lyzfengjun3");
                    }
                },
            },
            lyzzhijue:{
                audio:"ext:阳光包/audio:2",
                group:"lyzzhijue_gain",
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
                     return player!=event.player&&event.player.isAlive();
                },
                direct:true,
                content:function(){
       "step 0"
      player.chooseBool('是否令'+get.translation(trigger.player)+'变更武将牌？').ai=function(){
						return false;
					};
       "step 1"
      if(result.bool){
            player.logSkill("lyzzhijue",trigger.player);
            var list=get.gainableCharacters(true);
            var choice=[];
            for(var i=0;i<list.length;i++){
                 choice.push(list[i]);
           }
            if(!choice.length){
                 for(var i=0;i<list.length;i++){
                     choice.push(list[i]);                            
                 }
          }
              if(choice.length){    
                 var maxHp=trigger.player.maxHp;
                 var hp=trigger.player.hp;            
                 var name=choice.randomGet();
                 trigger.player.reinit(trigger.player.name1,name);
                 trigger.player.maxHp=maxHp;
                 trigger.player.hp=hp;
                 trigger.player.update();
                 game.triggerEnter(trigger.player);
                  }
              } 
           },
                subSkill:{
                    gain:{
                        trigger:{
                            player:["chooseToCompareAfter","compareMultipleAfter"],
                            target:["chooseToCompareAfter","compareMultipleAfter"],
                        },
                        audio:"lyzzhijue",
                        filter:function(event,player){
                    if(event.preserve) return false;
                    return [event.card1,event.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    }).length>0;
                },
                        prompt:function(trigger,player){
                    var cards=[trigger.card1,trigger.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    });
                    cards.sort(function(a,b){
                        return b.number-a.number;
                    });
                    if(cards.length>1&&cards[0].number>cards[1].number) cards.splice(1);
                    return '是否发动〖制决〗？获得'+get.translation(cards);
                },
                        content:function(){
                    var cards=[trigger.card1,trigger.card2].filter(function(card){
                        return get.position(card,true)=='o';
                    });
                    cards.sort(function(a,b){
                        return b.number-a.number;
                    });
                    if(cards.length>1&&cards[0].number>cards[1].number) cards.splice(1);
                    player.gain(cards,'gain2');
                 },
                        sub:true,
                    },
                },
            },
            lyzyinghuo:{
                audio:"ext:阳光包/audio:2",
                enable:"phaseUse",
                usable:1,
                selectCard:[1,Infinity],
                filterCard:function(card){
        return get.tag(card,'damage');
    },
                filter:function(event,player){
            if(player.countCards('h',lib.skill.lyzyinghuo.filterCard)==0) return false;
            return true;
    },
                check:function(card){return 8-get.value(card)},
                selectTarget:2,
                multitarget:true,
                discard:false,
                lose:false,
                targetprompt:["得到牌","出牌目标"],
                filterTarget:function(card,player,target){
        if(ui.selected.targets.length==0){
        return player!=target;
        }
        else{
            return true;
        }
    },
                delay:false,
                content:function(){
        "step 0"
        player.addSkill("lyzyinghuo2");
        targets[0].gain(cards,player,'give');
        "step 1"
        targets[0].showHandcards();
        event.cards=targets[0].getCards('h');
        "step 2"
                   if(event.lyzyinghuo_die) return;
                    var hs=targets[0].getCards('h');
                    cards=cards.filter(function(card){
                        return hs.contains(card)&&get.tag(card,"damage");
                    });
                    if(cards.length){
                        var card=cards.randomRemove(1)[0];
                        targets[0].useCard(targets[1],false,card);
                        event.redo();
                    }
        "step 3"
        if(targets[0].getHistory('useCard',function(evt){
                        return evt.getParent()==event&&targets[0].getHistory('sourceDamage',function(evt2){
                            return evt.card==evt2.card;
                        }).length;
                    }).length){
                        player.draw();
                        player.recover();
                    }
          player.removeSkill("lyzyinghuo2");
    },
                ai:{
                    result:{
                        player:function(player){
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(players[i]!=player&&get.attitude(player,players[i])>1&&get.attitude(players[i],player)>1){
                                    return 1;
                                }
                            }
                            return 0;
                        },
                        target:function(player,target){
                            if(ui.selected.targets.length){
                                return -0.1;
                            }
                            return 1;
                        },
                    },
                    order:8.5,
                    expose:0.2,
                },
            },
            "lyzyinghuo2":{
                charlotte:true,
                trigger:{
                    global:"die",
                },
                forced:true,
                firstDo:true,
                popup:false,
                filter:function(event,player){
                    return event.getParent('lyzyinghuo');
                },
                content:function(){
                    trigger.getParent('lyzyinghuo').lyzyinghuo_die=true;
                },
            },
            lyzxingyun:{
                audio:"ext:阳光包/audio:2",
                group:"lyzxingyun_dis",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function (){
          "step 0"
          player.chooseControl('red','black').set('prompt','〖行云〗：请选择一种颜色').set('ai',function(){
            var list=[0,1];
            return list.randomGet();
         });
         "step 1"
         player.addSkill("lyzxingyun_draw");
         player.storage.lyzxingyun_draw=result.control;
         player.popup(result.control,result.control=='red'?'fire':'thunder');
         game.log(player,'声明了','#y'+get.translation(result.control));
    },
                subSkill:{
                    dis:{
                        intro:{
                            content:"手牌上限+#",
                        },
                        mod:{
                            maxHandcard:function(player,num){
                    return num+player.countMark("lyzxingyun_dis");
                },
                        },
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeMark("lyzxingyun_dis",player.countMark("lyzxingyun_dis"));       
            },
                        sub:true,
                    },
                },
            },
            "lyzxingyun_draw":{
                mark:true,
                charlotte:true,
                audio:"lyzxingyun",
                intro:{
                    content:"当前颜色：$",
                },
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function(event,player){
            if(event.player.sex!=player.sex&&get.color(event.card)==player.storage.lyzxingyun_draw)  return true;
            if(event.player.sex==player.sex&&get.color(event.card)!=player.storage.lyzxingyun_draw)  return true;
            return false;           
       },
                content:function(){
            player.draw();
            player.addMark("lyzxingyun_dis");
       },
            },
            lyzningxian:{
                audio:"ext:阳光包/audio:2",
                marktext:"弦",
                intro:{
                    content:"cards",
                    onunmark:function(storage,player){
                        if(storage&&storage.length){
                            player.$throw(storage,1000);
                            game.cardsDiscard(storage);
                            game.log(storage,'被置入了弃牌堆');
                         storage.length=0;
                        }
                    },
                },
                init:function(player){
                    if(!player.storage.lyzningxian) player.storage.lyzningxian=[];
                },
                enable:"phaseUse",
                usable:1,
                filterCard:function(card){
        var player=_status.event.player;
        var suits=[];
            for(var i=0;i<player.storage.lyzningxian.length;i++){
            suits.add(get.suit(player.storage.lyzningxian[i]));
        }
        var names=[];
            for(var i=0;i<player.storage.lyzningxian.length;i++){
            names.add(get.name(player.storage.lyzningxian[i]));
        }
        if(suits.contains(get.suit(card))) return false;
        if(names.contains(get.name(card))) return false;
        return get.type(card)=="basic"||get.type(card)=="trick";
    },
                check:function (card){
                    if(get.type(card)=="basic") return 10;
                    if(get.name(card)=="jiedao") return -1;                 
                    return 10-get.value(card);
                },
                discard:false,
                lose:false,
                content:function (){
        player.lose(cards,ui.special,'toStorage');
        player.$give(cards,player);
        if(!player.storage.lyzningxian) player.storage.lyzningxian=[];
        player.storage.lyzningxian.addArray(cards);
        player.markSkill('lyzningxian');
    },
                mod:{
                    maxHandcard:function(player,num){
                        return num+player.storage.lyzningxian.length;
                    },
                },
                ai:{
                    order:7,
                    result:{
                        player:1,
                    },
                },
            },
            lyzjueyin:{
                locked:true,
                group:["lyzjueyin2","lyzjueyin3","lyzjueyin4","lyzjueyin5","lyzjueyin6","lyzjueyin7"],
                init:function(player,skill){
                    player.storage[skill]=0;
                },
                enable:"chooseToUse",
                audio:"ext:阳光包/audio:2",
                filter:function(event,player){
                    if(player.storage.lyzningxian.length==0) return false;
                    if(player.storage.lyzjueyin>0) return false;
                    return event.type!='wuxie'&&event.type!='respondShan';
                },
                chooseButton:{
                    dialog:function(event,player){
                    var list=[];
                    for(var i=0;i<player.storage.lyzningxian.length;i++){
                            var name=get.name(player.storage.lyzningxian[i]);                            
                            if(name=='wuxie') continue;
                            if(name=='sha'){
                            var nature=player.storage.lyzningxian[i].nature;
                            switch(nature){
                                case 'fire':name='huosha';break;
                                case 'thunder':name='leisha';break;
                                case 'kami':name='kamisha';break;
                                case 'ice':name='icesha';break;
                            }
                            list.push(['基本','',name]);
                        }                             
                            else if(get.type(name)=='trick') list.push(['锦囊','',name]);
                            else if(get.type(name)=='basic') list.push(['基本','',name]);
                        }
                        return ui.create.dialog('绝音',[list,'vcard']);
                    },
                    filter:function(button,player){
                        var evt=_status.event.getParent();
                        if(player.storage.lyzjueyin>0) return false;
                        if(evt&&typeof evt.filterCard=='function') return evt.filterCard({name:button.link[2]},player,evt);
                        return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
                    },
                    check:function(button){
                        var player=_status.event.player;
                        if(player.countCards('h',button.link[2])) return 0;
                        if(_status.event.getParent().type!='phase') return 1;
                        return player.getUseValue({name:button.link[2]});
                    },
                    backup:function(links,player){
                        return {
                            filterCard:function(){return false;},
                            selectCard:-1,
                            check:function(card){
                                return 1;
                            },
                            viewAs:{name:links[0][2],nature:links[0][3],isCard:true},
                        }
                    },
                    prompt:function(links,player){
                        return '请选择'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'的目标';
                    },
                },
                ai:{
                    save:true,
                },
            },
            "lyzjueyin2":{
                locked:true,
                log:false,
                enable:["chooseToRespond","chooseToUse"],
                viewAsFilter:function(player){        
                    var names=[];
                       for(var i=0;i<player.storage.lyzningxian.length;i++){
                       names.add(get.name(player.storage.lyzningxian[i]));
                }
                    if(player.storage.lyzjueyin>0) return false;
                    return names.contains("shan");
                },
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{
                    name:"shan",
                },
                ai:{
                    threaten:1.5,
                    respondShan:true,
                    order:3,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "lyzjueyin3":{
                locked:true,
                log:false,
                enable:"chooseToUse",
                viewAsFilter:function(player){        
                    var names=[];
                       for(var i=0;i<player.storage.lyzningxian.length;i++){
                       names.add(get.name(player.storage.lyzningxian[i]));
                }
                    if(player.storage.lyzjueyin>0) return false;
                    return names.contains("wuxie");
                },
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{
                    name:"wuxie",
                },
                ai:{
                    threaten:1.5,
                    respondWuxie:true,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "lyzjueyin4":{
                locked:true,
                audio:"lyzjueyin",
                enable:"chooseToRespond",
                viewAsFilter:function(player){        
                    var names=[];
                       for(var i=0;i<player.storage.lyzningxian.length;i++){
                       names.add(get.name(player.storage.lyzningxian[i]));
                }
                    if(player.storage.lyzjueyin>0) return false;
                    return names.contains("sha");
                },
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{
                    name:"sha",
                },
                ai:{
                    threaten:1.5,
                    respondSha:true,
                    canLink:function(player,target,card){
                        if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                        if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return false;
                        if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                        return true;
                    },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function(item,player){
                        if(player.hasSkillTag('presha',true,null,true)) return 10;
                        if(lib.linked.contains(get.nature(item))){
                            if(game.hasPlayer(function(current){
                                return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                            })&&game.countPlayer(function(current){
                                return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                            })>1) return 3.1;
                            return 3;
                        }
                        return 3.05;
                    },
                    result:{
                        target:function(player,target,card,isLink){
                            var eff=function(){
                                if(!isLink&&player.hasSkill('jiu')){
                                    if(!target.hasSkillTag('filterDamage',null,{
                                        player:player,
                                        card:card,
                                        jiu:true,
                                    })){
                                        if(get.attitude(player,target)>0){
                                            return -7;
                                        }
                                        else{
                                            return -4;
                                        }
                                    }
                                    return -0.5;
                                }
                                return -1.5;
                            }();
                            if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)) return eff/1.2;
                            return eff;
                        },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                            if(card.nature=='poison') return;
                            return 1;
                        },
                        natureDamage:function(card){
                            if(card.nature) return 1;
                        },
                        fireDamage:function(card,nature){
                            if(card.nature=='fire') return 1;
                        },
                        thunderDamage:function(card,nature){
                            if(card.nature=='thunder') return 1;
                        },
                        poisonDamage:function(card,nature){
                            if(card.nature=='poison') return 1;
                        },
                    },
                },
            },
            "lyzjueyin5":{
                trigger:{
                    player:["useCardAfter","respondAfter"],
                },
                forced:true,
                charlotte:true,
                popup:false,
                filter:function(event,player){
                    return event.skill=='lyzjueyin_backup'||event.skill=='lyzjueyin2'||event.skill=='lyzjueyin3'||event.skill=='lyzjueyin4';
                },
                content:function(){
                if(player==_status.currentPhase) player.draw();                            
                },
            },
            "lyzjueyin6":{
                trigger:{
                    global:"phaseBefore",
                },
                forced:true,
                silent:true,
                popup:false,
                content:function(){
                    player.storage.lyzjueyin=0;
                },
            },
            "lyzjueyin7":{
                trigger:{
                    player:["useCardBefore","respondBefore"],
                },
                forced:true,
                charlotte:true,
                popup:false,
                filter:function(event,player){
                    return event.skill=='lyzjueyin_backup'||event.skill=='lyzjueyin2'||event.skill=='lyzjueyin3'||event.skill=='lyzjueyin4';
                },
                content:function(){
                player.storage.lyzjueyin++;        
                    player.logSkill("lyzjueyin");
                },
            },
            lyzdizui:{
                enable:"phaseUse",
                skillAnimation:true,
                animationColor:"fire",
                usable:1,
                audio:"ext:阳光包/audio:1",
                filter:function(event,player){
       return player.storage.lyzningxian.length>2;
    },
                filterTarget:function(card,player,target){
                return player!=target;
            },
                content:function(){
        "step 0"
        if(player.storage.lyzningxian.length==3){
            event.directresult=player.storage.lyzningxian.slice(0);
        }
        else{
            player.chooseCardButton('弃置三张“弦”',3,player.storage.lyzningxian,true);
        }        
        "step 1"
        if(event.directresult||result.bool){
                        var links=event.directresult||result.links;
                        for(var i=0;i<links.length;i++){
                            player.storage.lyzningxian.remove(links[i]);
                        }
                        player.syncStorage('lyzningxian');
                        if(!player.storage.lyzningxian.length){
                            player.unmarkSkill('lyzningxian');
                        }
                        else{
                            player.markSkill('lyzningxian');
                        }
                        player.$throw(links);
                        game.log(player,'被弃置了',links);
                        game.cardsDiscard(links);
                    }
        "step 2"
    target.die();
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -target.hp;
                        },
                    },
                },
            },
            "fanghun_lyz_mayunlu":{
                audio:"ext:阳光包/audio:1",
                inherit:"fanghun",
                trigger:{
                    player:"useCard",
                    target:"useCardToTargeted",
                },
                hiddenCard:function(player,name){
        if(!player.storage.fanghun||player.storage.fanghun<=0) return false;
        if(name=='tao') return player.countCards('hs','jiu')>0;
        if(name=='jiu') return player.countCards('hs','tao')>0;
        return false;
    },
                marktext:"影",
                intro:{
                    content:"mark",
                    name:"梅影",
                },
                forced:true,
                locked:false,
                filter:function(event){
        return event.card&&event.card.name=='sha';
    },
                content:function(){
        player.addMark('fanghun',trigger.num||1);
        player.addMark('fanghun2',trigger.num||1,false);
    },
                group:["fanghun_lyz_mayunlu_sha","fanghun_lyz_mayunlu_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["useCardAfter","respondAfter"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event){
                return event.skill=='fanghun_lyz_mayunlu_sha'||event.skill=='fanghun_lyz_mayunlu_shan';
            },
                        content:function(){
                player.draw();
            },
                        sub:true,
                    },
                    sha:{
                        audio:"fanghun_lyz_mayunlu",
                        enable:["chooseToUse","chooseToRespond"],
                        prompt:"弃置一枚“梅影”标记，将【杀】当作【闪】，或将【闪】当作【杀】，或将【桃】当作【酒】，或将【酒】当作【桃】使用或打出",
                        viewAs:function(cards,player){
                var name=false;
                switch(get.name(cards[0],player)){
                    case 'sha':name='shan';break;
                    case 'shan':name='sha';break;
                    case 'tao':name='jiu';break;
                    case 'jiu':name='tao';break;
                }
                if(name) return {name:name};
                return null;
            },
                        position:"hs",
                        check:function(card){
                var player=_status.event.player;
                if(_status.event.type=='phase'){
                    var max=0;
                    var name2;
                    var list=['sha','tao','jiu'];
                    var map={sha:'shan',tao:'jiu',jiu:'tao'}
                    for(var i=0;i<list.length;i++){
                        var name=list[i];
                     if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
                         var temp=get.order({name:name});
                         if(temp>max){
                             max=temp;
                             name2=map[name];
                         }
                     }
                 }
                 if(name2==get.name(card,player)) return 1;
                 return 0;
                }
                return 1;
            },
                        filterCard:function(card,player,event){
                event=event||_status.event;
                var filter=event._backup.filterCard;
                var name=get.name(card,player);
                if(name=='sha'&&filter({name:'shan',cards:[card]},player,event)) return true;
                if(name=='shan'&&filter({name:'sha',cards:[card]},player,event)) return true;
                if(name=='tao'&&filter({name:'jiu',cards:[card]},player,event)) return true;
                if(name=='jiu'&&filter({name:'tao',cards:[card]},player,event)) return true;
                return false;
            },
                        filter:function(event,player){
                if(!player.storage.fanghun||player.storage.fanghun<=0) return false;
                var filter=event.filterCard;
                if(filter({name:'sha'},player,event)&&player.countCards('hs','shan')) return true;
                if(filter({name:'shan'},player,event)&&player.countCards('hs','sha')) return true;
                if(filter({name:'tao'},player,event)&&player.countCards('hs','jiu')) return true;
                if(filter({name:'jiu'},player, event)&&player.countCards('hs','tao')) return true;
                return false;
            },
                        onrespond:function(){return this.onuse.apply(this,arguments)},
                        onuse:function(result,player){
             player.removeMark('fanghun',1);
            },
                        ai:{
                            respondSha:true,
                            respondShan:true,
                            skillTagFilter:function(player,tag){
                    if(!player.storage.fanghun||player.storage.fanghun<0) return false;
                    var name;
                    switch(tag){
                        case 'respondSha':name='shan';break;
                        case 'respondShan':name='sha';break;
                    }
                    if(!player.countCards('hs',name)) return false;
                },
                            order:function(item,player){
                    if(player&&_status.event.type=='phase'){
                        var max=0;
                        var list=['sha','tao','jiu'];
                        var map={sha:'shan',tao:'jiu',jiu:'tao'}
                        for(var i=0;i<list.length;i++){
                            var name=list[i];
                         if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
                             var temp=get.order({name:name});
                             if(temp>max) max=temp;
                         }
                     }
                     if(max>0) max+=0.3;
                     return max;
                    }
                    return 4;
                },
                        },
                        sub:true,
                    },
                },
            },
          
            lyzzhiguo:{
                global:"lyzzhiguo2",
                trigger:{
                    global:"phaseDrawEnd",
                },
                forced:true,
                audio:"ext:阳光包/audio:2",
                logTarget:"player",
                filter:function(event,player){
       return event.player.sex=="female"&&event.player!=player
    },
                content:function(){
       "step 0"
       trigger.player.chooseCard("he","〖掷果〗：交给"+get.translation(player)+"一张牌",true);
       "step 1"
       if(result.bool){
       player.gain(result.cards,trigger.player);
            trigger.player.$give(1,player);
            var chat=["傅粉何郎，荀令留香。","有匪君子，如切如磋，如琢如磨。","且盼与君相知。"].randomGet();
            trigger.player.chat(chat);
       }
       player.recover();
       "step 2"
                    var list=[];
                    list.push('失去体力');
                    if(trigger.player.isDamaged()) list.push('回复体力');
                    list.push('cancel2')
                    player.chooseControl(list).set('prompt','你要令'+get.translation(trigger.player)+'做什么呢？').set('ai',function(){
                        var player=_status.event.player,target=_status.event.getTrigger().player;
						var att=get.attitude(player,target),eff=get.recoverEffect(target,player,player);
						if(target.isDamaged()&&att>2&&eff>0) return '回复体力';
						if(att<-2&&eff<=0) return '失去体力';
						return 'cancel2';
                    });
                    "step 3"
                    if(result.control=='回复体力'){
                        var target=trigger.player;
                        var chat=["姑娘谬赞。","桃之夭夭，灼灼其华。","所谓伊人，在水一方。"].randomGet();
                        target.recover();
                        player.chat(chat);
                    }
                    if(result.control=='失去体力'){
                        var target=trigger.player;
                        var chat=["卿本佳人，奈何助贼。","与姑娘道不同，难相知。","如此言语，徒增姑娘烦恼。"].randomGet();
                        target.loseHp();
                        player.chat(chat);
                    }
               },
            },
            "lyzzhiguo2":{
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                    return !event.numFixed&&player.sex=="female"&&
                    game.countPlayer(function(current){return current.hasSkill('lyzzhiguo')})>0;
                },
                content:function(){
                    trigger.num++;
                },
            },
            lyzpingfang:{
                group:"lyzpingfang_other",
                audio:"ext:阳光包/audio:2",
                usable:1,
                enable:"phaseUse",
                content:function(){
                   "step 0"
                   var chat=["北方有佳人，绝世而独立。","一顾倾人城，再顾倾人国。","有美一人，清扬婉兮。"].randomGet();
                   player.chat(chat);
                    var list;
                    if(_status.characterlist){
                        list=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            if(lib.character[name][0]=='female') list.push(name);
                        }
                    }
                    else if(_status.connectMode){
                        list=get.charactersOL(function(i){
                            return lib.character[i][0]!='female';
                        });
                    }
                    else{
                        list=get.gainableCharacters(function(info){
                            return info[0]=='female';
                        });
                    }
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }        
                    player.chooseButton(true).set('ai',function(button){                    
                        return Math.random();
                    }).set('createDialog',['请选择一张武将牌',[list.randomGets(6),'character']]);
                    "step 1"
                    var link=result.links[0];
                    event.link=link;
                    "step 2"                                                   
                    player.chooseTarget('请选择要变更武将牌的角色',function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        if(target.sex=="male")  return 10;
                        if(get.rank(link)>6)  return 1;
						return -1;
                    });
                    "step 3"
                    if(result.bool){
                        var target=result.targets[0];  
                        player.line(target);                        
                        target.reinit(target.name1,event.link,false);
                         if(_status.characterlist){
                        _status.characterlist.add(target.name1);
                        _status.characterlist.remove(event.link);
                        }        
                    }                          
               },
               ai:{
                    order:7, 
                    result:{
						player:function(player){					
							 if(game.countPlayer(function(current){
						       return current!=player&&current.sex=='male';
					         })==0) return -1;
							return 1;
						}
					}
                },
                subSkill:{
                    other:{
                        audio:"lyzpingfang",
                        trigger:{
                            player:["damageEnd","phaseZhunbeiBegin"],
                        },
                        check:function (event,player){
                            if(game.countPlayer(function(current){
						       return current!=player&&current.sex=='male';
					         })==0)  return false;
                            return true;
                        },
                        content:function(){
                   "step 0"
                   var chat=["北方有佳人，绝世而独立。","一顾倾人城，再顾倾人国。","有美一人，清扬婉兮。"].randomGet();
                   player.chat(chat);
                    var list;
                    if(_status.characterlist){
                        list=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            if(lib.character[name][0]=='female') list.push(name);
                        }
                    }
                    else if(_status.connectMode){
                        list=get.charactersOL(function(i){
                            return lib.character[i][0]!='female';
                        });
                    }
                    else{
                        list=get.gainableCharacters(function(info){
                            return info[0]=='female';
                        });
                    }
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }        
                    player.chooseButton(true).set('ai',function(button){
                        return Math.random();
                    }).set('createDialog',['请选择一张武将牌',[list.randomGets(6),'character']]);
                    "step 1"
                    var link=result.links[0];
                    event.link=link;
                    "step 2"                                                   
                    player.chooseTarget('请选择要变更武将牌的角色',function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        if(target.sex=="male")  return 10;
                        if(get.rank(link)>6)  return 1;
						return -1;
                    });
                    "step 3"
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target);                       
                        target.reinit(target.name1,event.link,false);
                         if(_status.characterlist){
                        _status.characterlist.add(target.name1);
                        _status.characterlist.remove(event.link);
                        }  
                    }                          
               },
                        sub:true,
                    },
                },
            },
            lyzqingyan:{
                enable:"phaseUse",
                audio:"ext:阳光包/audio:2",
                filterCard:function (card){
                    return get.name(card)=='jiu';
                },
                selectCard:function (){
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(target.hasSkill('lyzqingyan_off')) return false;
                    return target==player||target.sex=="female";
                },
                content:function (){
                    "step 0"
                    var chat=["品拟飞仙，情殊流俗。","才逾苏小，貌并王嫱。","韵中生韵，香外生香。"].randomGet();
                    player.chat(chat);
                    if(cards.length==0){
                        player.loseHp();
                    }
                    "step 1"
                    target.addTempSkill('lyzqingyan_off');
                    target.draw(3);
                },
                check:function (card){
                    return 10-get.value(card);
                },
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if(!ui.selected.cards.length){
                                if(player.hp<3) return 0;
                            }
                            return 1;
                        },
                    },
                },
                subSkill:{
                   off:{
                       sub:true,
                   }
                }
            },
            lyzfengxuan:{
                 audio:"ext:阳光包/audio:2",
                 group:"lyzfengxuan_sha",
                 trigger:{
					player:'useCardAfter',
					target:'useCardToTargeted',
				},
				filter:function(event,player){
					if(get.color(event.card)!="black") return false;
					if(event.name=='useCardToTargeted'&&event.player==player) return false;
					return true;
				},
				frequent:true,
				init:function(player){
					if(!player.storage.lyzfengxuan) player.storage.lyzfengxuan=[];
				},
				content:function(){
				"step 0"
					var next=player.judge(function(card){
						if(get.suit(card)=='heart') return -1;
						return 1;
					});
				"step 1"
				    event.card=result.card;
					event.node=result.node;
				"step 2"
				    if(!result.bool||get.position(result.card)!='d'){
						event.finish();
						return;
					}
					player.storage.lyzfengxuan.push(event.card);
					game.cardsGotoSpecial(card);
					event.node.moveDelete(player);
					game.broadcast(function(cardid,player){
						var node=lib.cardOL[cardid];
						if(node){
							node.moveDelete(player);
						}
					},event.node.cardid,player);
					game.addVideo('gain2',player,get.cardsInfo([event.node]));
					player.markSkill('lyzfengxuan');
					game.addVideo('storage',player,['lyzfengxuan',get.cardsInfo(player.storage.lyzfengxuan),'cards']);
					
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
						 storage.length=0;
						}
					},
				},
				subSkill:{
				     sha:{
				        sub:true,
				        trigger:{
					player:'useCard2',
				},
				audio:"lyzfengxuan",
				direct:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.storage.lyzfengxuan.length>0;
				},
				content:function(){
					'step 0'
					var num=player.storage.lyzfengxuan.length;
					player.chooseTarget('是否发动〖锋玄〗，令至多'+num+'名其他角色也成为此【杀】的目标？',[1,num],function(card,player,target){
						return target!=player&&!trigger.targets.contains(target)&&player.canUse({name:'sha'},target);
					}).ai=function(target){
						return get.effect(target,{name:'sha'},_status.event.player);
					};
					'step 1'
					if(result.bool&&result.targets&&result.targets.length){
						var targets=result.targets;
						player.logSkill('lyzfengxuan',targets);
						player.line(targets,trigger.card.nature);
						trigger.targets.addArray(targets);						
					}
				          }				     
				     }				
				}          
            },
            lyztiansha:{                  
                  group:"lyztiansha_remove",
                  audio:"ext:阳光包/audio:2",
                  enable:"phaseUse",
                  filter:function(event,player){
                       return player.storage.lyzfengxuan.length>0;
                  },
                  content:function(){
                       "step 0"
                       player.chooseCardButton('弃置任意张“锋”',[1,Infinity],player.storage.lyzfengxuan,true);
                       "step 1"
                       if(result.bool){
                        var links=result.links;
                        player.addMark("lyztiansha",links.length);
                        for(var i=0;i<links.length;i++){
                            player.storage.lyzfengxuan.remove(links[i]);
                        }
                        player.syncStorage('lyzfengxuan');
                        if(!player.storage.lyzfengxuan.length){
                            player.unmarkSkill('lyzfengxuan');
                        }
                        else{
                            player.markSkill('lyzfengxuan');
                        }
                        player.$throw(links);
                        game.log(player,'被弃置了',links);
                        game.cardsDiscard(links);
                    }
                        "step 2"
                    
                        if(player.countMark("lyztiansha")>1){
                             	game.countPlayer(function(current){
						if(current!=player&&!current.hasSkill('lyztiansha_card')){
							current.addTempSkill('lyztiansha_card');
						}
					        });                        
                        }
                        if(player.countMark("lyztiansha")>2){
                             	game.countPlayer(function(current){
						if(current!=player&&!current.hasSkill('baiban')){
							current.addTempSkill('baiban');
						}
					        });                        
                        }
                        if(player.countMark("lyztiansha")>3&&!player.hasSkill("lyztiansha2")){
                            player.addTempSkill("lyztiansha2");
                            player.draw(4);
                            player.addTempSkill("lyztiansha3");
                        }
                 },
                 ai:{
					basic:{
						order:7
					},
					result:{
						player:function(player){
							if(player.countMark("lyztiansha")>3) return -1;
							return 1;
						}
					}
				},
                 subSkill:{
                      
           card:{
                mark:true,
				marktext:"煞",
				charlotte:true,
				intro:{
					content:'不能使用或打出手牌',
				},
                mod:{
					cardEnabled2:function(card){
						if(get.position(card)=='h') return false;
					},
				},
               sub:true,           
           },
           remove:{
                        forced:true,
                        popup:false,
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
                    return player.countMark("lyztiansha")>0;
                },
                        content:function (){              
                     player.removeMark("lyztiansha",player.countMark("lyztiansha"));
                },
                        sub:true,           
           }                        
                 }   
            },
            lyztiansha2:{},
            lyztiansha3:{
				mod:{
					cardUsable:function(){return Infinity},
					//targetInRange:function(){return true},
				},
			},
            lyzzhidian:{
                audio:"ext:阳光包/audio:2",
                group:"lyzzhidian_use",
                trigger:{
                    player:"phaseZhunbeiBegin"
                },
                frequent:true,
                init:function(player){
                    if(!player.storage.lyzzhidian) player.storage.lyzzhidian=[];
                },
                intro:{
                    content:'cards'
                },
                content:function(){
                    'step 0'
                    var chat=["《无名杀全教程》震撼发布！主编正是在下。","新版教程添加什么内容合适？"].randomGet();
                    player.chat(chat);
                    player.draw(2);
                    player.chooseCard(2,'he',true,'选择两张牌作为“典”');
                    'step 1'
                    player.storage.lyzzhidian=player.storage.lyzzhidian.concat(result.cards);
                    player.lose(result.cards,ui.special,'toStorage');
                    player.syncStorage("lyzzhidian");
                    player.markSkill("lyzzhidian");
                },
                subSkill:{
                    use:{
                        trigger:{
                            global:"useCard"
                        },
                        audio:"lyzzhidian",
                        filter:function(event,player){
                           var type=[];
                           var ss=player.storage.lyzzhidian;
                           for(var i=0;i<ss.length;i++){
                              type.add(get.type2(ss[i]));
                           }
                           return player.storage.lyzzhidian&&type.contains(get.type(event.card));
                        },
                        content:function(){
                            "step 0"
                            var chat=["读！教！程！","不看教程，不必多言。"].randomGet();
                            player.chat(chat);
                            player.chooseCardButton('选择获得一张同类别的“典”',player.storage.lyzzhidian,true).set('filterButton',function(button){
                               return get.type2(button.link)==get.type2(trigger.card);
                            });
                            "step 1"
                            if(result.bool){
                                player.gain(result.links[0],'draw2','log','fromStorage');
                                player.storage.lyzzhidian.remove(result.links[0]);
                                player.syncStorage("lyzzhidian");
                                if(player.storage.lyzzhidian.length==0){
                                     player.unmarkSkill("lyzzhidian");
                                }
                                else{
                                     player.markSkill("lyzzhidian");
                                }
                            }
                            else event.finish();
                            "step 2"
                            player.chooseControl(function(){
                               return get.attitude(player,trigger.player)<0?'选项一':'选项二';
                            }).set('prompt','治典').set('choiceList',["令"+get.translation(trigger.card)+"无效","令"+get.translation(trigger.player)+"回复1点体力"]);
                            "step 3"
                            if(result.control=='选项一'){
                                trigger.targets.length=0;
                                trigger.all_excluded=true;
                            }
                            else trigger.player.recover();
                        }
                    }
                }
            },
            lyzshulun:{
                trigger:{
                    global:"phaseBegin"
                },
                audio:"ext:阳光包/audio:2",
                logTarget:"player",
                filter:function(event,player){
                    return event.player!=player&&!event.player.hasSkill("lyzshulun2");
                },
                check:function(event,player){
                    return get.attitude(player,event.player)<0;
                },
                content:function(){
                    "step 0"
                    var chat=["突袭检查。","谁在开车？统统禁言。"].randomGet();
                    player.chat(chat);
                    trigger.player.addSkill("lyzshulun2");
                    trigger.player.storage.lyzshulun2=2;
                    trigger.player.addTempSkill("lyzshulun_forbid");
                    player.chooseControl('equip','trick','basic');
                    "step 1"
                    trigger.player.storage.lyzshulun_forbid.add(result.control);
                },
                subSkill:{
                    forbid:{
                        charlotte:true,
                        intro:{
                          content:function(storage){
                          return '只能使用'+get.translation(storage)+'牌';
                        }
                     },
                        init:function(player,skill){
                          if(!player.storage[skill]) player.storage[skill]=[];
                     },
                       mark:true,
                       onremove:true,
                       mod:{
                           cardEnabled:function(card,player){
                                if(player.storage.lyzshulun_forbid.contains(get.type(card,'trick'))) return true;
                                return false;
                            }
                        }
                    }
                }
            },
            "lyzshulun2":{
                mark:true,
                charlotte:true,
                intro:{
                    content:"上回合已成为过〖束论〗的目标",
                },
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                popup:false,
                content:function(){
                    player.storage.lyzshulun2--;
                    if(player.storage.lyzshulun2==0){
                        delete player.storage.lyzshulun2;
                        player.removeSkill('lyzshulun2');
                    }
                    else{
                        player.updateMarks();
                    }
                },
            },            
            lyzjianji:{
                audio:"ext:阳光包/audio:2",
                unique:true,
                enable:'phaseUse',
                limited:true,
                skillAnimation:'epic',
                animationColor:'thunder',
                filterCard:true,
                check:function(card){
                    return 10-get.value(card)
                },
                filterTarget:function(card,player,target){
                    return target!=player;
                },
                selectCard:3,
                position:'he',
                content:function(){
                    "step 0"
                    var chat=["《死亡笔记》新添一员。","你没了。"].randomGet();
                    player.chat(chat);
                    player.awakenSkill("lyzjianji");
                    "step 1"
                    target.loseHp(target.hp);
                    "step 2"
                    var list=[];
                    for(var i of cards) list.add(get.type2(i));
                        if(list.length==cards.length&&target.isAlive()){
;                            player.addTempSkill("lyzjianji_remove");
                        }
                },
                ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },
                subSkill:{
                    remove:{
                        trigger:{player:'phaseEnd'},
                        forced:true,
                        popup:false,
                        content:function(){
                            player.restoreSkill("lyzjianji");
                        }
                    }
                }
            },
            lyzhongzheng:{
                group:"lyzhongzheng_use",
                trigger:{
                   player:["phaseZhunbeiBegin","damageEnd"],
                   source:"damageSource",
                },
                audio:"ext:阳光包/audio:2",
                forced:true,
                
				content:function(){
					player.addMark("lyzhongzheng",1);
				},
				intro:{
					name:"势",
					content:"mark"
				},
				ai:{
					maixie:true,
					maixie_hp:true
				},
				subSkill:{
				    use:{
				       trigger:{
				          player:"useCardToTargeted"
				       },
				       audio:"lyzhongzheng",
				       logTarget:"target",
				       filter:function(event,player){
				          return (event.card.name=="sha"||event.card.name=="juedou")&&
				             player.countMark("lyzhongzheng")>0&&event.targets&&event.targets.length==1;
				       },
				       check:function (event,player){
                             return get.attitude(player,event.target)<0;
                       },
				       content:function(){
				           "step 0"
				           var controls=[];
				           if(player.countMark("lyzhongzheng")>0){
				                 controls.push("气慑");
				           }
				           if(player.countMark("lyzhongzheng")>1){
				                 controls.push("断腕");
				           }
				           if(player.countMark("lyzhongzheng")>2){
				                 controls.push("枭首");
				           }    
                           player.chooseControl(controls).ai=function(){
                                 if(player.countMark("lyzhongzheng")==1){
                                     return "气慑";
                                 }
                                 if(player.countMark("lyzhongzheng")==2){
                                     return "断腕";
                                 }
                                 if(player.countMark("lyzhongzheng")>2&&trigger.target.hp!=1){
                                     return "枭首";
                                 }                              
                                 return "气慑";
                            };
                          "step 1"
                          event.control=result.control;
                          switch(event.control){
                              case "气慑":player.removeMark("lyzhongzheng",1);break;
                              case "断腕":player.removeMark("lyzhongzheng",2);break;
                              case "枭首":player.removeMark("lyzhongzheng",3);break;
                          }
                          "step 2"
                          if(event.control=="气慑"){
                              player.discardPlayerCard("h",trigger.target,true).visible=true;
                              player.draw();
                          }
                          if(event.control=="断腕"){
                              trigger.target.disableEquip(1);
                              trigger.target.addTempSkill("lyzhongzheng2",{player:"phaseAfter"});
                              player.draw(2);
                          }
                          if(event.control=="枭首"){
                               trigger.directHit.addArray(game.players);
                               var map=trigger.customArgs;
						       var id=trigger.target.playerid;
						       if(!map[id]) map[id]={};
						       if(typeof map[id].extraDamage!='number') map[id].extraDamage=0;
						       map[id].extraDamage+=trigger.target.hp-1;    
						       player.draw(3);                     
                          }
				       }
				    }
				}         
            },
            lyzhongzheng2:{
                mod:{
					attackFrom:function(){
						return Infinity;
					}
				},
				mark:true,
				intro:{
					name:"虹铮",
					content:"攻击范围为0"
				}
            },
            lyzxiansheng:{
                skillAnimation:true,
				animationColor:"fire",
				unique:true,
				juexingji:true,
				audio:"ext:阳光包/audio:2",
				derivation:"wushen",
				trigger:{player:"dying"},
				forced:true,
				content:function(){
				   "step 0"
				   player.loseMaxHp();
				   "step 1"
				   if(player.hp<player.maxHp){
						player.recover(player.maxHp-player.hp);
					}
				   "step 2"
				   player.addSkill("wushen");
				   player.awakenSkill("lyzxiansheng");
				   "step 3"
				   if(player.name=="lyz_guanyu"){
				       if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_guanyu2.jpg');    
                       else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_guanyu2.jpg');       
				   }
				}            
            },
            lyzrongcheng:{
                audio:"ext:阳光包/audio:2",
                trigger:{
                    player:'useCard'
                },
				filter:function(event,player){
					return get.type(event.card)=="basic";
				},
				direct:true,
				content:function(){
				    "step 0"
                     player.chooseCard('he',get.prompt2("lyzrongcheng")).set('ai',function(card){
						return 1;
					});
					"step 1"
					if(result.bool){
						var card=result.cards[0];
						player.logSkill("lyzrongcheng");     
						player.lose(card,ui.discardPile,'visible');
						player.$throw(card,1000);
						game.log(player,'将',card,'置入弃牌堆');
						player.draw();						
					}
					else event.finish(); 
					"step 2" 
					if(player.canMoveCard()){
					    player.moveCard();
					}     		    
				}
            },
            lyzzhuoji:{
                group:"lyzzhuoji_damage",
                audio:"ext:阳光包/audio:2",
                trigger:{
                   player:"phaseUseBegin"
                },
                filter:function(event,player){
                    return game.hasPlayer(function(current){
                         return player.canUse({name:'sha',nature:'fire'},current,false);
                    });
                },
                forced:true,
                content:function(){
					player.chooseUseTarget('视为使用一张不计入次数且无距离限制的火【杀】',{name:'sha',nature:'fire'},true,false,'nodistance').logSkill='lyzzhuoji';
				},
                subSkill:{
                    damage:{
                        audio:"lyzzhuoji",
                        logTarget:"player",
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                            return event.player.countCards("e")<player.countCards("e");
                        },
                        content:function(){
                            trigger.num++;
                        }
                    }
                }   
            },
            lyznuozhan:{
                audio:"ext:阳光包/audio:1",
                trigger:{
                   global:"gameDrawAfter",
                   player:"enterGame"
                },
                locked:true,
				direct:true,
				filter:function(event,player){
					return game.players.length>1&&!game.hasPlayer(function(current){
						return current.hasSkill("ying_lyz_shen_lvbu");
					});
				},
				content:function(){
				    "step 0"
				    var num=Math.min(game.players.length-1,3);
				    player.chooseTarget(num,true,"请选择〖搦战〗的目标","令"+get.cnNumber(num)+"名角色获得“英”",lib.filter.notMe).set("ai",function(target){
				       var player=_status.event.player;
				       return Math.max(1,get.attitude(player,target))/Math.max(1,get.distance(player,target));
                    });
                    "step 1"
                    if(result.bool){
                       var targets=result.targets.sortBySeat();
                       event.target0=result.targets[0];
                       if(result.targets.length>1) event.target1=result.targets[1];
                       if(result.targets.length>2) event.target2=result.targets[2];
                       player.logSkill("lyznuozhan",targets);
                       game.delayx();
                    }
                    "step 2"
                    event.target0.addSkill("ying_lyz_shen_lvbu");
                    if(event.target1) event.target1.addSkill("ying_lyz_shen_lvbu");	
                    if(event.target2) event.target2.addSkill("ying_lyz_shen_lvbu");	
				},				
            },
            ying_lyz_shen_lvbu:{
                mark:true,
                marktext:"英",
                intro:{
                    name:"搦战",
                    name2:"英",
                    content:"出牌阶段可多使用一张【杀】"
                },
                mod:{
                    cardUsable:function(card,player,num){
                        if(card.name=='sha') return num+1;
                    },
                },
            },
            lyzzhenguan:{
                audio:"ext:阳光包/audio:2",
                dutySkill:true,
                forced:true,
                trigger:{
                   source:"damageSource"
                },
                filter:function(event,player){
                   return event.player&&event.player.isIn()&&event.player.hasSkill("ying_lyz_shen_lvbu");
                },
                content:function(){
                   trigger.player.removeSkill("ying_lyz_shen_lvbu");       
                },
                derivation:["lyznewjiwu","lyzkuipo","wumou","new_liyu"],
                group:["lyzzhenguan_achieve","lyzzhenguan_fail"],
                ai:{
                   combo:"lyznuozhan",
                   effect:{
                      player:function(card,player,target){
                         if(get.tag(card,"damage")&&target.hasSkill("ying_lyz_shen_lvbu")&&target.hp>1&&get.attitude(player,target)>=0) return [1,1,0,0];
                         if(get.tag(card,"damage")&&target.hasSkill("ying_lyz_shen_lvbu")&&get.attitude(target,player)>=0) return [1,1,0,0];
                      }
                   }                
                },
                subSkill:{
                  achieve:{
                        audio:"lyzzhenguan",
                        trigger:{
                           source:"damageSource",
                           global:"dieAfter"
                        },
                        forced:true,
                        skillAnimation:true,
                        animationColor:"metal",
                        filter:function(event,player){
                            return !game.hasPlayer(function(current){
                                 return current.hasSkill("ying_lyz_shen_lvbu")
                            });
                        },
                        content:function(){
                            game.log(player,"成功完成使命");
                            player.awakenSkill("lyzzhenguan");                    
                            player.addSkillLog("lyznewjiwu");
                            player.addSkillLog("lyzkuipo");
                            if(player.name=="lyz_shen_lvbu"){                       
                            if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_shen_lvbu2.jpg');    
                            else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_shen_lvbu2.jpg');    
                            
                            ui.backgroundMusic.src=lib.assetURL+'extension/阳光包/audio/bgm1.mp3'; 
                            }
                            
                        }
                    },
                    fail:{
                        audio:"lyzzhenguan",
                        trigger:{
                           player:"dying",
                        },
                        forced:true,
                        content:function(){
                           game.log(player,"使命失败");
                           player.addSkillLog("wumou");
                           player.addSkillLog("new_liyu");
                           if(player.name=="lyz_shen_lvbu"){
                           if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_shen_lvbu3.jpg');    
                            else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_shen_lvbu3.jpg');    
                          }
                            player.awakenSkill("lyzzhenguan");
                           if(player.isDamaged()) player.recover(player.maxHp-player.hp);            
                        }
                    }                
                }          
            },
            lyznewjiwu:{
				audio:"ext:阳光包/audio:2",
				enable:'phaseUse',
				filter:function(event,player){
					if(player.countCards('he')==0) return false;
					if(!player.hasSkill('lyznewqiangxi')) return true;
					if(!player.hasSkill('lyznewtieqi')) return true;
					if(!player.hasSkill('lyznewxuanfeng')) return true;
					if(!player.hasSkill('lyznewwansha')) return true;
					return false;
				},
				filterCard:true,
				position:'he',
				check:function(card){
					if(get.position(card)=='e'&&_status.event.player.hasSkill('lyznewxuanfeng')) return 16-get.value(card);
					return 7-get.value(card);
				},
				content:function(){
					'step 0'
					var list=[];
					if(!player.hasSkill('lyznewqiangxi')) list.push('lyznewqiangxi');
					if(!player.hasSkill('lyznewtieqi')) list.push('lyznewtieqi');
					if(!player.hasSkill('lyznewxuanfeng')) list.push('lyznewxuanfeng');
					if(!player.hasSkill('lyznewwansha')) list.push('lyznewwansha');
					if(list.length==1){
						player.addTempSkill(list[0]);
						event.finish();
					}
					else{
						player.chooseControl(list,function(){
							if(list.contains('lyznewxuanfeng')&&player.countCards('he',{type:'equip'})) return 'lyznewxuanfeng';
							if(!player.getStat().skill.lyznewqiangxi){
								if(player.hasSkill('lyznewqiangxi')&&player.getEquip(1)&&list.contains('lyznewxuanfeng')) return 'lyznewxuanfeng';
								if(list.contains('lyznewwansha')||list.contains('lyznewqiangxi')){
									var players=game.filterPlayer();
									for(var i=0;i<players.length;i++){
										if(players[i].hp==1&&get.attitude(player,players[i])<0){
											if(list.contains('lyznewwansha')) return 'lyznewwansha';
											if(list.contains('lyznewqiangxi')) return 'lyznewqiangxi';
										}
									}
								}
							}
							if(list.contains('lyznewqiangxi')) return 'lyznewqiangxi';
							if(list.contains('lyznewwansha')) return 'lyznewwansha';
							if(list.contains('lyznewxuanfeng')) return 'lyznewxuanfeng';
							return 'lyznewtieqi';
						}).set('prompt','选择获得一个技能直至回合结束');
					}
					'step 1'
					player.addTempSkill(result.control);
					player.popup(get.translation(result.control));
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						if(player.countCards('e',{type:'equip'})) return 10;
						if(!player.getStat().skill.lyznewqiangxi){
							if(player.hasSkill('lyznewqiangxi')&&player.getEquip(1)&&!player.hasSkill('lyznewxuanfeng')) return 10;
							if(player.hasSkill('lyznewwansha')) return 1;
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].hp==1&&get.attitude(player,players[i])<0) return 10;
							}
						}
						return 1;
					},
					result:{
						player:function(player){
							if(player.countCards('e',{type:'equip'})) return 1;
							if(!player.getStat().skill.lyznewqiangxi){
								if(player.hasSkill('lyznewqiangxi')&&player.getEquip(1)&&!player.hasSkill('lyznewxuanfeng')) return 1;
								if(!player.hasSkill('lyznewwansha')||!player.hasSkill('lyznewqiangxi')){
									var players=game.filterPlayer();
									for(var i=0;i<players.length;i++){
										if(players[i].hp==1&&get.attitude(player,players[i])<0) return 1;
									}
								}
							}
							return 0;
						}
					}
				}
			},
			lyznewqiangxi:{
			   audio:"ext:阳光包/audio:1",
			   inherit:"reqiangxi",
			},
			lyznewtieqi:{
			   audio:"ext:阳光包/audio:1",
			   inherit:"retieji",
			},
			lyznewxuanfeng:{
			   audio:"ext:阳光包/audio:1",
			   inherit:"decadexuanfeng",
			   trigger:{
					player:['loseAfter','phaseDiscardEnd'],
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter'],
				},
				direct:true,
				filter:function(event,player){
					if(_status.dying.length) return false;
					if(event.name=='phaseDiscard'){
						var cards=[];
						player.getHistory('lose',function(evt){
							if(evt&&evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs) cards.addArray(evt.hs);
						});
						return cards.length>1;
					}
					else{
						var evt=event.getl(player);
						return evt&&evt.es&&evt.es.length>0;
					}
				},
				content:function(){
					"step 0"
					event.count=2;
					event.targets=[];
					event.logged=false;
					"step 1"
					event.count--;
					player.chooseTarget(get.prompt('lyznewxuanfeng'),'弃置一名其他角色的一张牌',function(card,player,target){
						if(player==target) return false;
						return target.countDiscardableCards(player,'he');
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 2"
					if(result.bool){
						if(!event.logged){
							player.logSkill('lyznewxuanfeng',result.targets);
							event.logged=true;
						}
						else player.line(result.targets[0],'green');
						targets.add(result.targets[0]);
						player.discardPlayerCard(result.targets[0],'he',true);
					}
					else if(!targets.length) event.finish();
					"step 3"
					if(event.count) event.goto(1);
					else if(player==_status.currentPhase){
						player.chooseTarget('是否对一名目标角色造成1点伤害',function(card,player,target){
							return _status.event.targets.contains(target);
						}).set('targets',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						});
					}
					else event.finish();
					"step 4"
					if(result.bool){
						player.line(result.targets[0],'thunder');
						result.targets[0].damage();
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},
					reverseEquip:true,
					noe:true,
					expose:0.2,
				}
			},
			lyznewwansha:{
			    audio:"ext:阳光包/audio:1",
				global:'lyznewwansha_global',
				trigger:{global:'dyingBegin'},
				forced:true,
				logTarget:'player',
				filter:function(event,player){
					return player==_status.currentPhase;
				},
				content:function(){
					game.countPlayer(function(current){
						if(current!=player&&current!=trigger.player) current.addSkillBlocker('lyznewwansha_fengyin');
					});
					player.addTempSkill('lyznewwansha_clear');
				},
				subSkill:{
					global:{
						mod:{
							cardEnabled:function(card,player){
								var source=_status.currentPhase;
								if(card.name=='tao'&&source&&source!=player&&source.hasSkill('lyznewwansha')&&!player.isDying()) return false;
							},
							cardSavable:function(card,player){
								var source=_status.currentPhase;
								if(card.name=='tao'&&source&&source!=player&&source.hasSkill('lyznewwansha')&&!player.isDying()) return false;
							},
						},
					},
					fengyin:{
						inherit:'fengyin',
					},
					clear:{
						trigger:{global:'dyingAfter'},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							return !_status.dying.length;
						},
						content:function(){
							player.removeSkill('lyznewwansha_clear');
						},
						onremove:function(){
							game.countPlayer2(function(current){
								current.removeSkillBlocker('lyznewwansha_fengyin');
							});
						},
					},
				},
			},
            lyzxiaohu:{
               audio:"ext:阳光包/audio:2",
               group:"lyzxiaohu_damage",
               mod:{
				   targetEnabled:function(card,player,target){
					   if(get.type(card)=="delay") return false;
			       }
			    },
			    trigger:{
			       player:["phaseZhunbeiBegin","phaseJieshuBegin"]
			    },
			    forced:true,
			    content:function(){
			       var num=player.maxHp-player.hp+1;
			       player.draw(num);		    
			    },
			    subSkill:{
			       damage:{
			           trigger:{
			               player:"damageBegin3",
			           },
			           audio:"lyzxiaohu",
			           filter:function(event,player){
			               return player.hasCard(function(card){
			                   return get.type(card)!="basic"
			               },"he");
			           },
			           direct:true,
			           locked:true,
			           content:function(){
			                "step 0"
			                player.chooseToDiscard("he","〖虓虎〗：是否弃置一张非基本牌并令此伤害-1？",function(card,player){
			                     return get.type(card)!="basic";
			                }).set("ai",function(card){
			                     return 10-get.value(card);
			                });
			                "step 1"
			                if(result.bool){
			                    player.logSkill("lyzxiaohu");
			                   	trigger.num--;		
			               }
			               else event.finish();			               	           
			           }
			       }
			    }            
            },
            lyzwangzuo:{
                trigger:{
                    player:["damageEnd","phaseZhunbeiBegin"]
                },
                forced:true,
                audio:"ext:阳光包/audio:2",
                content:function(){
                    "step 0"
                    player.draw();
                    "step 1"
                    var list;
                    if(_status.characterlist){
                        list=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            list.push(name);
                        }
                    }                    
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }        
                    player.chooseButton(true).set('ai',function(button){                    
                        if(button.link.group=="wei"||button.link.group=="shen") return 10;
                        return Math.random();
                    }).set('createDialog',['请选择一张武将牌',[list.randomGets(3),'character']]);
                    "step 2"
                    var link=result.links[0];
                    event.link=link;
                    "step 3"
                    var list=[];
					var listm=[];
					listm=lib.character[event.link][3];
					var func=function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					event.skills=list;
					player.chooseControl(list).set("prompt","请选择一个技能");
					"step 4"
					var skill=result.control;
					event.skill=skill;
					  player.chooseTarget("请选择要获得技能的角色",function(card,player,target){
                                return true;
                            }).set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    "step 5"
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.line(target);
                        target.addTempSkill(skill,{player:"phaseEnd"});
                    }
                    else event.finish();                    
                    "step 6"
                    if(lib.character[event.link][1]=="wei"||lib.character[event.link][1]=="shen"){
                         player.chooseControl("摸牌","回复体力","cancel2").set("prompt","令"+get.translation(target)+"执行一项");
                    }
                    "step 7"
                    if(result.control=="摸牌") event.target.draw();
                    if(result.control=="回复体力") event.target.recover();                   
                }            
            },
            lyzxianshi:{
                trigger:{
                   global:"phaseBegin"
                },
                audio:"ext:阳光包/audio:2",
                init:function (player,skill){
          if(!player.storage.lyzxianshi) player.storage.lyzxianshi=[];
                },
                filter:function(event,player){
					if(player.storage.lyzxianshi.contains(event.player)) return false;
					return true;
				},
                direct:true,
                content:function(){
                    "step 0"
					player.chooseCard('he',get.prompt2("lyzxianshi")).set('ai',function(card){
						if(_status.event.goon) return 8-get.value(card);
						return 0;
					});
					"step 1"
					if(result.bool){
						var card=result.cards[0];
						player.logSkill("lyzxianshi",trigger.player);
						player.lose(card,ui.discardPile,'visible');
						player.$throw(card,1000);
						game.log(player,'将',card,'置入弃牌堆');
						player.draw();
					}
					else event.finish();
					"step 2" 
					if(!player.storage.lyzxianshi) player.storage.lyzxianshi=[];
					player.storage.lyzxianshi.add(trigger.player);
					player.markSkill('lyzxianshi');
					 player.chooseControl(function(){
                          return get.attitude(player,trigger.player)<0?'选项一':'选项二';
                     }).set('prompt','先识').set('choiceList',["令"+get.translation(trigger.player)+"跳过摸牌阶段和出牌阶段","令"+get.translation(trigger.player)+"跳过判定阶段和弃牌阶段"]);
                     "step 3"
                     if(result.control=='选项一'){
                         trigger.player.skip("phaseDraw");
                         trigger.player.skip("phaseUse");
                     }
                    else {
                         trigger.player.skip("phaseJudge");
                         trigger.player.skip("phaseDiscard");				  
                    }            
                },
                onremove:true,
				intro:{
					content:"已对$发动过技能",
				},           
            },            
            lyzxiaoran:{
                skillAnimation:true,
				animationColor:'thunder',
				unique:true,
				juexingji:true,
				audio:"ext:阳光包/audio:1",
				derivation:'lyznewkunfen',
				trigger:{player:'dying'},
				forced:true,				
				content:function(){
					"step 0"
					if(player.hp<player.maxHp){
						player.recover(player.maxHp-player.hp);
					}
					"step 1"
					player.addSkill('lyznewkunfen');
					player.removeSkill("lyzwangzuo");
					player.awakenSkill('lyzxiaoran');
					player.storage.lyzxianshi=[];
					if(player.name=="lyz_xunyu"){ 
					 if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_xunyu2.jpg');    
                     else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_xunyu2.jpg');    
				   }
				}            
            },
           lyznewkunfen:{
                trigger:{
                    player:"phaseJieshuBegin"
                },
                forced:true,
                audio:"ext:阳光包/audio:2",
                content:function(){
                    player.loseHp();
                    player.draw(2);                
                }           
            },
           
            lyztaoming:{
                  group:"lyztaoming_damage",
                  enable:"phaseUse",
                  audio:"ext:阳光包/audio:2",
                  usable:1, 
                  filterTarget:function (card,player,target){
                    if(target.countCards("h")==0) return false;
                    var num=Math.min(Math.abs(player.countCards("h")-target.countCards("h")),3);
                    return player.countCards("h")>= num;
                  },                                                 
                  logTarget:"target",
                  content:function(){
                      "step 0"                      
                      var num=Math.min(Math.abs(player.countCards("h")-target.countCards("h")),3);
                      if(num!=0) player.chooseToDiscard(num,true);
                      event.target1=target;
                      "step 1"
                      event.num3=game.countPlayer()-1;
                      target.showHandcards();                                        
                      "step 2"
                      event.videoId=lib.status.videoId++;
                      var cards=target.getCards('h');
                      event.dialog=ui.create.dialog('〖韬明〗：请选择牌',cards);
                      event.dialog.videoId=event.videoId;
                      if(!event.isMine()){
                        event.dialog.style.display='none';
                      }
                      var list=[];
					  var hs=target.getCards('h');
					  for(var i of hs){
						   list.add(get.suit(i,player));
					  }                    
					  player.chooseCardButton(true,[1,Math.min(list.length,event.num3)]).set('dialog',event.videoId).set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
						};
						return true;
					});
					"step 3"
                     if(result.bool){
                         event.dialog.close();
                         var num2=result.links.length;
                         event.num2=num2;                     
						 event.link=result.links.slice(0);												
                     }
                     else event.finish();
                     "step 4"
                     player.chooseTarget(true,'请依次选择'+get.cnNumber(event.num2)+'名角色，按照刚才选牌的顺序获得牌',event.num2,function(card,player,target){
						return target!=event.target1;
					 }).set('ai',function(target){
						return get.attitude(_status.event.player,target)+0.5;
					 });
					 "step 5"
					 if(result.bool){
					      while(result.targets.length){
					           var target0=result.targets.shift();					           
					           var card=event.link.shift();
					           target0.gain(card,target);
					           target.$give(card,target0);
					      }
					      event.next.sort(function(a,b){
							return lib.sort.seat(a.player,b.player);
						});				 					 
					 }
					 	"step 6"  
					game.delay();					   
                 },
                 ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                            return -1;
                        },
                    },
                },
                subSkill:{
                    damage:{
                         trigger:{player:'damageEnd'},
                         audio:"lyztaoming",
				         direct:true,
				          content:function(){
                      "step 0"
                     player.chooseTarget('是否发动〖韬明〗？',function(card,player,target){
						if(target.countCards("h")==0) return false;
						if(target==player) return false;
                    var num=Math.min(Math.abs(player.countCards("h")-target.countCards("h")),3);
                    return player.countCards("h")>=num;
					 }).set('ai',function(target){
						return -get.attitude(_status.event.player,target)+0.5;
					 });
                      "step 1"
                      if(result.bool){
                            var num=Math.min(Math.abs(player.countCards("h")-result.targets[0].countCards("h")),3);
                            if(num!=0) player.chooseToDiscard(num,true);
                            var target=result.targets[0];
                            player.logSkill("lyztaoming",target);
                            event. target=target;
                            event.num3=game.countPlayer()-1;
                            target.showHandcards();                      
                      }
                      else event.finish();                      
                      "step 2"
                      event.videoId=lib.status.videoId++;
                      var cards=event.target.getCards('h');
                      event.dialog=ui.create.dialog('〖韬明〗：请按照想分配的顺序选择牌',cards);
                      event.dialog.videoId=event.videoId;
                      if(!event.isMine()){
                        event.dialog.style.display='none';
                      }
                      var list=[];
					  var hs=event.target.getCards('h');
					  for(var i of hs){
						   list.add(get.suit(i,player));
					  }                    
					  player.chooseCardButton(true,[1,Math.min(list.length,event.num3)]).set('dialog',event.videoId).set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
						};
						return true;
					});
					"step 3"
                     if(result.bool){
                         event.dialog.close();
                         var num2=result.links.length;
                         event.num2=num2;                     
						 event.link=result.links.slice(0);												
                     }
                     else event.finish();
                     "step 4"
                     player.chooseTarget(true,'请按想分配的顺序选择'+get.cnNumber(event.num2)+'名角色，按照刚才选牌的顺序获得牌',event.num2,function(card,player,target){
						return target!=event.target;
					 }).set('ai',function(target){
						return get.attitude(_status.event.player,target)+0.5;
					 });
					 "step 5"
					 if(result.bool){
					      while(result.targets.length){
					           var target0=result.targets.shift();					           
					           var card=event.link.shift();
					           target0.gain(card,event.target);
					           event.target.$give(card,target0);
					      }
					      event.next.sort(function(a,b){
							return lib.sort.seat(a.player,b.player);
						});				 					 
					 }
					 	"step 6"  
					game.delay();					   
                 }
                    }                
                }
            },
            lyzcaiqing:{
                 intro:{
                    name:"才清",
                    content:'已因$牌发动过技能',
                },
                 group:"lyzcaiqing_recover",
                 audio:"ext:阳光包/audio:2",
                 init:function(player){
                     if(!player.storage.lyzcaiqing) player.storage.lyzcaiqing=[];
                 },
                 trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter'],
				},
				filter:function(event,player){
				        if(event.getParent().name=='useCard') return false;
					    if(event.name=='gain'&&event.player==player) return false;
						var evt=event.getl(player);
						if(!evt||!evt.hs||!evt.hs.length) return false;
					var list=[];
                    var num1=event.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="basic";
					}).length;
					var num2=event.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="trick";
					}).length;
					var num3=event.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="equip";
					}).length;
					if(num1>0&&!player.storage.lyzcaiqing.contains("basic")){
					    list.push("basic");
					}
					if(num2>0&&!player.storage.lyzcaiqing.contains("trick")){
					   list.push("trick");
					}
					if(num3>0&&!player.storage.lyzcaiqing.contains("equip")){
					    list.push("equip");
					}
					if(list.length==0) return false;
					return true;
				},
				 direct:true,
				 locked:true,
				 content:function(){
				    "step 0"
				    player.chooseTarget("是否发动〖才清〗？请选择一名角色").set('ai',function(target){
                        return get.attitude(player,target);
                    });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill("lyzcaiqing",target);
                        event.target=target;                                        
                    }
                    else event.finish();
                    "step 2"
                    var controls=[];
                    var num1=trigger.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="basic";
					}).length;
					var num2=trigger.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="trick";
					}).length;
					var num3=trigger.getl(player).cards2.filter(function(card){
						return get.type2(card,player)=="equip";
					}).length;
					if(num1>0&&!player.storage.lyzcaiqing.contains("basic")){
					    controls.push("basic");
					}
					if(num2>0&&!player.storage.lyzcaiqing.contains("trick")){
					    controls.push("trick");
					}
					if(num3>0&&!player.storage.lyzcaiqing.contains("equip")){
					    controls.push("equip");
					}
                    player.chooseControl(controls);
                    "step 3"
                    player.markSkill("lyzcaiqing");
                    if(result.control=="basic"){
                         player.storage.lyzcaiqing.add("basic");
                         var card=get.cardPile2(function(card){
							return get.type2(card,false)=="basic"
						});		    
					     if(card) event.target.gain(card,'gain2');
                    }
                    if(result.control=="trick"){
                         player.storage.lyzcaiqing.add("trick");
                         var card=get.cardPile2(function(card){
							return get.type2(card,false)=="trick"
						});		    
					     if(card) event.target.gain(card,'gain2');
                    }
                     if(result.control=="equip"){
                         player.storage.lyzcaiqing.add("equip");
                         var card=get.cardPile2(function(card){
							return get.type2(card,false)=="equip"
						});		    
					     if(card) event.target.gain(card,'gain2');
                    }                    
				 },
				 subSkill:{
				     recover:{
				         trigger:{
				             global:"phaseEnd"
				         },
				         forced:true,
				         popup:false,
				         Charlotte:true,
				         content:function(){
				             "step 0"
				             if(player.storage.lyzcaiqing.length>1){
				                 player.logSkill("lyzcaiqing");
				                 player.chooseDrawRecover(function(event,player){
						              if(player.hp==1&&player.isDamaged()) return 'recover_hp';
						              return 'draw_card';
					               });
				             }				        
				             "step 1"
				             player.storage.lyzcaiqing=[];
				             player.unmarkSkill("lyzcaiqing");
				         }				     
				     }				 
				 }                        
            },
			'_lyzShijianGlobalSkill': {
						trigger: {
							player: ['shijian_init', 'shijian_removeSkill', 'shijian_addSkill'],
						},
						filter: (event, player) => {
							return (event.skill == 'lyzpianwu' && [player.name, player.name1, player.name2].contains('lyz_shijian')) || (game.lyz_shijian && game.lyz_shijian.players.contains(player));
						},
						forced: true,
						content: () => {
							'step 0'
							var name = event.triggername;
							var skill = event.name;
							switch(name) {
								case 'shijian_init': 
									game.lyz_shijian = game.lyz_shijian || {
										skills: 0,
										players: [],
									};
									game.lyz_shijian.players.add(player);
									break;
								case 'shijian_removeSkill': 
									setTimeout(() => player.addSkillLog(skill), 0);
									break;
								case 'shijian_addSkill':
									//新技能内容
									var newSkill = {
										audio: 'lyzpianwu',
									};
									//新技能描述
									var newSkillTran = '';
									//新技能名
									var skillName = 'lyz_shijian_createSkill_' + game.lyz_shijian.skills ++;
									
									//获得技能时的效果（45%的几率有）
									if(Math.random() <= 0.45) {
										var initList = [{
											init: player => {
												player.draw();
											},
											translate: '你摸一张牌',
										}, {
											init: player => {
												player.recover();
											},
											translate: '你回复一点体力',
										}, {
											init: player => {
												player.recover(player.maxHp - player.hp);
											},
											translate: '你将体力值回复至体力上限',
										}, {
											init: player => {
												player.countCards('he') && player.chooseToDiscard('he', true);
											},
											translate: '你需弃置一张牌',
										}, {
											init: player => {
												player.link(true);
											},
											translate: '你横置',
										},{
											init: player => {
												player.gainMaxHp();
											},
											translate: '你增加一点体力上限',
										}, {
											init: player => {
												player.loseMaxHp();
											},
											translate: '你失去一点体力上限',
										}, {
											init: player => {
												player.getBuff();
											},
											translate: '你随机获得一个正面效果',
										}, {
											init: player => {
												player.tempHide();
											},
											translate: '你获得【潜行】到你的回合开始',
										}, {
											init: player => {
												var card = get.cardPile(card => get.type(card) == 'equip');
												if(card) player.equip(card);
											},
											translate: '你随机从牌堆中装备一张装备牌',
										}, {
											init: player => {
												var card = get.cardPile2(card => get.type(card) == 'basic');
												if(card) player.gain(card,'gain2','log');
											},
											translate: '你随机从牌堆中获得一张基本牌',
										}, {
											init: player => {
												var card = get.cardPile2(card => get.type(card) == 'trick');
												if(card) player.gain(card,'gain2','log');
											},
											translate: '你随机从牌堆中获得一张普通锦囊牌',
										}, {
											init: player => {
												var card = get.cardPile2(card => get.type(card) == 'delay');
												if(card) player.gain(card,'gain2','log');
											},
											translate: '你随机从牌堆中获得一张延时锦囊牌',
										}];
										
										//随机选择
										var randomInit = initList[Math.floor(Math.random() * initList.length)];
										newSkillTran += '当你获得此技能时，' + randomInit.translate + '。';
										newSkill.init = randomInit.init;
									}
									
									//随机决定是否是锁定技
									if(Math.random() <= 0.5) {
										newSkill.forced = true;
										newSkillTran += '锁定技，';
									}
									
									var usable = [1, 2, 3, 4][Math.floor(Math.random() * 4)];
									newSkill.usable = usable;
									newSkillTran += `每回合限${usable}次，`;
									
									//时机列表
									var triggerList1 = [{
										trigger: 'Before',
										translate: '前',
									},{
										trigger: 'Begin',
										translate: '时',
									},{
										trigger: 'End',
										translate: '后',
									}];
									
									var triggerList2 = [{
										trigger: 'damage',
										translate: '受到伤害',
										num: true, //有trigger.num
									}, {
										trigger: 'recover',
										translate: '回复体力',
										num: true, //有trigger.num
									}, {
										trigger: 'loseHp',
										translate: '失去体力',
										num: true, //有trigger.num
										noSource: true,
									}, {
										trigger: 'gainMaxHp',
										translate: '增加体力上限',
										num: true, //有trigger.num
										noSource: true,
									}, {
										trigger: 'loseMaxHp',
										translate: '失去体力上限',
										num: true, //有trigger.num
										noSource: true,
									}, {
										trigger: 'phaseDraw',
										translate: '摸牌阶段',
										num: true, //有trigger.num
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'draw',
										translate: '摸牌',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'judge',
										translate: '判定',
										cancel: false, //不能取消
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'turnOver',
										translate: '翻面',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'link',
										translate: '横置/重置',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'useCard',
										translate: '使用牌',
										cancel: false, //不能取消
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'useSkill',
										translate: '使用主动技能',
										cancel: false, //不能取消
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'addJudge',
										translate: '的判定区添加延时锦囊',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'die',
										translate: '死亡',
										cancel: false, //不能取消
									}];
									
									var triggerList3 = [{
										target: 'player',
										translate: '你',
									}, {
										target: 'source',
										translate: '以你为来源的角色',
									}, {
										target: 'global',
										translate: '一名角色',
									}];
									
									//多一些几率
									var triggerList4 = [{
										trigger: 'damage',
										translate: '受到伤害',
										num: true, //有trigger.num
									}, {
										trigger: 'recover',
										translate: '回复体力',
										num: true, //有trigger.num
									}, {
										trigger: 'loseHp',
										translate: '失去体力',
										num: true, //有trigger.num
										noSource: true,
									}, {
										trigger: 'draw',
										translate: '摸牌',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'judge',
										translate: '判定',
										cancel: false, //不能取消
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'link',
										translate: '横置',
										noSource: true, //不是source: 'xxx'类的时机
									}, {
										trigger: 'useCard',
										translate: '使用牌',
										cancel: false, //不能取消
										noSource: true, //不是source: 'xxx'类的时机
									}];
									
									//随机取一个时机
									var triggerList = triggerList2.concat(triggerList4);
									var randomTrigger = triggerList[Math.floor(Math.random() * triggerList.length)];
									if(randomTrigger.noSource) triggerList3.remove(triggerList3[1]);
									
									//技能目标
									var randomTriggerTarget = triggerList3[Math.floor(Math.random() * triggerList3.length)];
									newSkillTran += '当' + randomTriggerTarget.translate;
									if(randomTrigger.trigger == 'die' && randomTriggerTarget.target == 'player') triggerList1.remove(triggerList1[2]);
									
									//是否使用了triggerList1
									var randomTriggerList1 = null;
									
									//时机名称
									var triggerName = randomTrigger.trigger;
									newSkillTran += randomTrigger.translate;
									
									//是否能使用triggerList1
									if(!randomTrigger.notUseList1) {
										randomTriggerList1 = triggerList1[Math.floor(Math.random() * triggerList1.length)];
										triggerName += randomTriggerList1.trigger;
										newSkillTran += randomTriggerList1.translate;
									}
									
									newSkillTran += '，'
									newSkill.trigger = {};
									newSkill.trigger[randomTriggerTarget.target] = triggerName;
									
									//有55%的几率有filter
									if(Math.random() <= 0.55) {
										//filter列表
										var filterList1 = [{
											filter: (event, player) => {
												return player.hp > 2;
											},
											translate: '若你的体力值大于2',
										}, {
											filter: (event, player) => {
												return player.hp < 2;
											},
											translate: '若你的体力值小于2',
										}, {
											filter: (event, player) => {
												return player.countCards('j');
											},
											translate: '若你的判定区内有牌',
										}, {
											filter: (event, player) => {
												return !player.countCards('j');
											},
											translate: '若你的判定区内没有牌',
										}, {
											filter: (event, player) => {
												return !player.countCards('h');
											},
											translate: '若你没有手牌',
										}, {
											filter: (event, player) => {
												return !player.getHistory('useCard');
											},
											translate: '若你本回合没有使用过牌',
										}, {
											filter: (event, player) => {
												return player.getHistory('useCard').length > 0;
											},
											translate: '若你本回合使用过牌',
										}, {
											filter: (event, player) => {
												return !player.getHistory('respond');
											},
											translate: '若你本回合没有打出过牌',
										}, {
											filter: (event, player) => {
												return player.isDamaged();
											},
											translate: '若你已受伤',
										}, {
											filter: (event, player) => {
												return player.isHealthy();
											},
											translate: '若你的体力值为满',
										}, {
											filter: (event, player) => {
												return player.isMaxHp();
											},
											translate: '若你的体力值为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMaxHp(true);
											},
											translate: '若你的体力值为全场最多',
										}, {
											filter: (event, player) => {
												return player.isMinHp();
											},
											translate: '若你的体力值为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMinHp(true);
											},
											translate: '若你的体力值为全场最少',
										}, {
											filter: (event, player) => {
												return player.isMaxCard();
											},
											translate: '若你的牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMaxCard(true);
											},
											translate: '若你的牌为全场最多',
										}, {
											filter: (event, player) => {
												return player.isMinCard();
											},
											translate: '若你的牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMinCard(true);
											},
											translate: '若你的牌为全场最少',
										}, {
											filter: (event, player) => {
												return player.isMaxHandcard();
											},
											translate: '若你的手牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMaxHandcard(true);
											},
											translate: '若你的手牌为全场最多',
										}, {
											filter: (event, player) => {
												return player.isMinHandcard();
											},
											translate: '若你的手牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMinHandcard(true);
											},
											translate: '若你的手牌为全场最少',
										}, {
											filter: (event, player) => {
												return player.isMaxEquip();
											},
											translate: '若你装备区的牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMaxEquip(true);
											},
											translate: '若你装备区的牌为全场最多',
										}, {
											filter: (event, player) => {
												return player.isMinEquip();
											},
											translate: '若你装备区的牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return player.isMinEquip(true);
											},
											translate: '若你装备区的牌为全场最少',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().hp > 1;
											},
											translate: '若你的上家（不为自己）的体力值大于1',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().hp == 1;
											},
											translate: '若你的上家（不为自己）的体力值等于1',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().countCards('h') > 2;
											},
											translate: '若你的上家（不为自己）的手牌数大于2',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && !player.getPrevious().countCards('h');
											},
											translate: '若你的上家（不为自己）没有手牌',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().getHistory('useCard').length > 0;
											},
											translate: '若你的上家（不为自己）本回合使用过牌',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && !player.getPrevious().getHistory('respond');
											},
											translate: '若你的上家（不为自己）本回合没有打出过牌',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().isDamaged();
											},
											translate: '若你的上家（不为自己）已受伤',
										}, {
											filter: (event, player) => {
												return player.getPrevious() != player && player.getPrevious().isHealthy();
											},
											translate: '若你的上家（不为自己）的体力值为满',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().hp > 1;
											},
											translate: '若你的下家（不为自己）的体力值大于1',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().hp == 1;
											},
											translate: '若你的下家（不为自己）的体力值等于1',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().countCards('h') > 2;
											},
											translate: '若你的下家（不为自己）的手牌数大于2',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && !player.getNext().countCards('h');
											},
											translate: '若你的下家（不为自己）没有手牌',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().getHistory('useCard').length > 0;
											},
											translate: '若你的下家（不为自己）本回合使用过牌',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && !player.getNext().getHistory('respond');
											},
											translate: '若你的下家（不为自己）本回合没有打出过牌',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().isDamaged();
											},
											translate: '若你的下家（不为自己）已受伤',
										}, {
											filter: (event, player) => {
												return player.getNext() != player && player.getNext().isHealthy();
											},
											translate: '若你的下家（不为自己）的体力值为满',
										}];
										
										var filterList2 = [{
											filter: (event, player) => {
												return event.player.hp > 1;
											},
											translate: '若其的体力值大于1',
										}, {
											filter: (event, player) => {
												return event.player.countCards('h', 'sha');
											},
											translate: '若其手牌中有【杀】',
										}, {
											filter: (event, player) => {
												return event.player.isDamaged();
											},
											translate: '若其已受伤',
										}, {
											filter: (event, player) => {
												return event.player.isHealthy();
											},
											translate: '若其的体力值为满',
										}, {
											filter: (event, player) => {
												return event.player.isMaxHp();
											},
											translate: '若其的体力值为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMaxHp(true);
											},
											translate: '若其的体力值为全场最多',
										}, {
											filter: (event, player) => {
												return event.player.isMinHp();
											},
											translate: '若其的体力值为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMinHp(true);
											},
											translate: '若其的体力值为全场最少',
										}, {
											filter: (event, player) => {
												return event.player.isMaxCard();
											},
											translate: '若其的牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMaxCard(true);
											},
											translate: '若其的牌为全场最多',
										}, {
											filter: (event, player) => {
												return event.player.isMinCard();
											},
											translate: '若其的牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMinCard(true);
											},
											translate: '若其的牌为全场最少',
										}, {
											filter: (event, player) => {
												return event.player.isMaxHandcard();
											},
											translate: '若其的手牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMaxHandcard(true);
											},
											translate: '若其的手牌为全场最多',
										}, {
											filter: (event, player) => {
												return event.player.isMinHandcard();
											},
											translate: '若其的手牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMinHandcard(true);
											},
											translate: '若其的手牌为全场最少',
										}, {
											filter: (event, player) => {
												return event.player.isMaxEquip();
											},
											translate: '若其装备区的牌为全场最多（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMaxEquip(true);
											},
											translate: '若其装备区的牌为全场最多',
										}, {
											filter: (event, player) => {
												return event.player.isMinEquip();
											},
											translate: '若其装备区的牌为全场最少（或之一）',
										}, {
											filter: (event, player) => {
												return event.player.isMinEquip(true);
											},
											translate: '若其装备区的牌为全场最少',
										}];
										
										var filterList3 = [{
											filter: (event, player) => {
												return event.num && event.num > 1;
											},
											translate: `若${randomTrigger.translate}的点数大于1`,
										}, {
											filter: (event, player) => {
												return event.num && event.num > 2;
											},
											translate: `若${randomTrigger.translate}的点数大于2`,
										}];
										
										var filterList = filterList1;
										//触发技能的不是【player】，而是【global】或【source】
										if(randomTriggerTarget != triggerList3[0]) {
											filterList = filterList.concat(filterList2);
										}
										//如果可以有trigger.num
										if(randomTrigger.num) {
											filterList = filterList.concat(filterList3);
										}
										
										//取随机的filter
										var randomFilter = filterList[Math.floor(Math.random() * filterList.length)];
										newSkillTran += randomFilter.translate + '，';
										newSkill.filter = randomFilter.filter;
									}
									
									//content列表
									var contentList1 = [{
											content: () => {
												player.draw();
											},
											check: 4,
											translate: '你摸一张牌',
										}, {
											content: () => {
												player.draw(2);
											},
											check: 4,
											translate: '你摸两张牌',
										}, {
											content: () => {
												player.draw(3);
											},
											check: 4,
											translate: '你摸三张牌',
										}, {
											content: () => {
												player.recover();
											},
											check: 4,
											translate: '你回复一点体力',
										}, {
											content: () => {
												player.recover(player.maxHp - player.hp);
											},
											check: 4,
											translate: '你回复体力至体力上限',
										}, {
											content: () => {
												player.damage('nocard');
											},
											check: 3,
											translate: '你受到一点伤害',
										}, {
											content: () => {
												player.loseHp();
											},
											check: 3,
											translate: '你失去一点体力',
										}, {
											content: () => {
												player.countCards('he') && player.chooseToDiscard('he', true);
											},
											check: 3,
											translate: '你需弃置一张牌',
										}, {
											content: () => {
												player.gainMaxHp();
											},
											check: 4,
											translate: '你增加一点体力上限',
										}, {
											content: () => {
												player.loseMaxHp();
											},
											check: 3,
											translate: '你减少一点体力上限',
										}, {
											content: () => {
												player.die();
											},
											check: 3,
											translate: '你立即阵亡',
										},{
											content: () => {
												player.turnOver();
											},
											check: (event, player) => {
												return player.isTurnedOver();
											},
											translate: '你翻面',
										}, {
											content: () => {
												player.link();
											},
											check: (event, player) => {
												return player.isLinked();
											},
											translate: '你横置/重置',
										}, {
											content: () => {
												var next = player.judge(card => 1);
												next.judge2 = result => {
													return true;
												};
											},
											check: 4,
											translate: '你进行一次判定',
										}, {
											content: () => {
												player.getBuff();
											},
											check: 4,
											translate: '你随机获得一个正面效果',
										}, {
											content: () => {
												player.tempHide();
											},
											check: 4,
											translate: '你获得【潜行】到你的回合开始',
										}, {
											content: () => {
												var card = get.cardPile(card => get.type(card) == 'equip');
												if(card) player.equip(card);
											},
											check: 4,
											translate: '你随机从牌堆中装备一张装备牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'basic');
												if(card) player.gain(card,'gain2','log');
											},
											check: 4,
											translate: '你随机从牌堆中获得一张基本牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'trick');
												if(card) player.gain(card,'gain2','log');
											},
											check: 4,
											translate: '你随机从牌堆中获得一张普通锦囊牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'delay');
												if(card) player.gain(card,'gain2','log');
											},
											check: 4,
											translate: '你随机从牌堆中获得一张延时锦囊牌',
										}, {
											content: () => {
										        event.cards = get.cards(3);
										        game.cardsGotoOrdering(event.cards);
										        player.showCards(event.cards);
												game.delay(2);
										        var num = 0;
										        for(var i = 0; i < event.cards.length; i++) {
										            if(get.suit(event.cards[i]) == 'heart') {
										                num++;
										                event.cards.splice(i--, 1);
										            }
										        }
										        if(num) {
										            player.recover(num);
										        }
										        if(event.cards.length) {
										            player.gain(event.cards);
										            player.$gain2(event.cards);
										            game.delay();
										        }
										    },
											check: 4,
											translate: '你展示牌堆顶的3张牌，然后回复X点体力（X为其中红桃牌数目），然后你将其中的红桃牌置于弃牌堆，并获得其他牌',
										}, {
											content: () => {
												player.chooseToUse();
											},
											check: 4,
											translate: '你可以立即使用一张牌',
										}, {
											content: () => {
												if(!player.hasSkill('fengyin')){
													player.addTempSkill('fengyin');
												}
											},
											check: 3,
											translate: '本回合你的非锁定技失效',
									}];
									
									var contentList2 = [{
											content: () => {
												trigger.player.draw();
											},
											check: 1,
											translate: '其摸一张牌',
										}, {
											content: () => {
												trigger.player.draw(2);
											},
											check: 1,
											translate: '其摸两张牌',
										}, {
											content: () => {
												trigger.player.recover();
											},
											check: 1,
											translate: '其回复一点体力',
										}, {
											content: () => {
												trigger.player.damage('nocard');
											},
											check: 2,
											translate: '其受到一点伤害',
										}, {
											content: () => {
												trigger.player.damage(2, 'nocard');
											},
											check: 2,
											translate: '其受到两点伤害',
										}, {
											content: () => {
												trigger.player.loseHp();
											},
											check: 1,
											translate: '其失去一点体力',
										}, {
											content: () => {
												trigger.player.chooseToDiscard('he', true);
											},
											check: 2,
											translate: '其需弃置一张牌',
										}, {
											content: () => {
												trigger.player.gainMaxHp();
											},
											check: 1,
											translate: '其增加一点体力上限',
										}, {
											content: () => {
												trigger.player.loseMaxHp();
											},
											check: 2,
											translate: '其失去一点体力上限',
										}, {
											content: () => {
												trigger.player.turnOver();
											},
											check: 2,
											translate: '其翻面',
										}, {
											content: () => {
												trigger.player.link(true);
											},
											check: 2,
											translate: '其横置/重置',
										}, {
											content: () => {
												var next = trigger.player.judge(card => 1);
												next.judge2 = result => {
													return true;
												};
											},
											check: 1,
											translate: '其进行一次判定',
										}, {
											content: () => {
												trigger.player.die();
											},
											check: 2,
											translate: '其立即阵亡',
										}, {
											content: () => {
												trigger.player.getBuff();
											},
											check: 1,
											translate: '其随机获得一个正面效果',
										}, {
											content: () => {
												var card = get.cardPile(card => {
													return get.type(card) == 'equip';
												});
												if(card) trigger.player.equip(card);
											},
											check: 1,
											translate: '其随机从牌堆中装备一张装备牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'basic');
												if(card) trigger.player.gain(card,'gain2','log');
											},
											check: 1,
											translate: '其随机从牌堆中获得一张基本牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'trick');
												if(card) trigger.player.gain(card,'gain2','log');
											},
											check: 1,
											translate: '其随机从牌堆中获得一张普通锦囊牌',
										}, {
											content: () => {
												var card = get.cardPile2(card => get.type(card) == 'delay');
												if(card) trigger.player.gain(card,'gain2','log');
											},
											check: 1,
											translate: '其随机从牌堆中获得一张延时锦囊牌',
										}, {
											content: () => {
												trigger.player.chooseToUse();
											},
											check: 1,
											translate: '其可以立即使用一张牌',
										}, {
											content: () => {
												if(!trigger.player.hasSkill('fengyin')){
													trigger.player.addTempSkill('fengyin');
												}
											},
											check: 2,
											translate: '本回合其的非锁定技失效',
									}];
									
									var contentList3 = [{
										content: () => {
											trigger.num ++;
										},
										check: (triggerName) => {
											if(['damage', 'loseHp', 'loseMaxHp'].contains(triggerName)) return 2;
											return 1;
										},
										translate: '该数值+1',
									}, {
										content: () => {
											trigger.num += 2;
										},
										check: (triggerName) => {
											if(['damage', 'loseHp', 'loseMaxHp'].contains(triggerName)) return 2;
											return 1;
										},
										translate: '该数值+2',
									}, {
										content: () => {
											trigger.num --;
										},
										check: (triggerName) => {
											if(['damage', 'loseHp', 'loseMaxHp', 'phaseDraw'].contains(triggerName)) return 1;
											return 2;
										},
										translate: '该数值-1',
									}, {
										content: () => {
											trigger.num -= 2;
										},
										check: (triggerName) => {
											if(['damage', 'loseHp', 'loseMaxHp', 'phaseDraw'].contains(triggerName)) return 1;
											return 2;
										},
										translate: '该数值-2',
									}];
									
									var contentList4 = [{
										content: () => {
											trigger.cancel();
										},
										check: (triggerName) => {
											if(['damage', 'loseHp', 'loseMaxHp'].contains(triggerName)) return 1;
											return 2;
										},
										translate: '取消该效果',
									}];
									
									var contentList = contentList1;
									//触发技能的不是【player】，而是【global】或【source】
									//并且时机不是【死亡】
									if(randomTriggerTarget != triggerList3[0] && randomTrigger.trigger != 'die') {
										contentList = contentList.concat(contentList2);
									}
									//如果不为End,则可以取消
									if(randomTriggerList1 != triggerList1[2]) {
										//如果可以有trigger.num
										if(randomTrigger.num) {
											contentList = contentList.concat(contentList3);
										}
										if(randomTrigger.cancel !== false) {
											contentList = contentList.concat(contentList4);
										}
									}
									
									//取随机的content
									var randomContent = contentList[Math.floor(Math.random() * contentList.length)];
									newSkillTran += randomContent.translate;
									newSkill.content = randomContent.content;
									
									var checkList = [{
										check: (event, player) => {
											return get.attitude(player, event.player) > 0;
										},
									}, {
										check: (event, player) => {
											return get.attitude(player, event.player) < 0;
										},
									}, {
										check: () => {
											return false;
										},
									}, {
										check: () => {
											return true;
										},
									}];
									
									var check = randomContent.check;
									if (typeof check == 'function') {
										if(check.length == 1) {
											newSkill.check = checkList[check(randomTrigger.trigger) - 1].check;
										} else {
											newSkill.check = check;
										}
									} else if (typeof check == 'number') {
										newSkill.check = checkList[check - 1].check;
									}
									
									var skillNameList = ["微尘", "芷蕊", "余念", "稚遇", "幽殤", "代真", "淡陌", "余念", "紫寒", "忆伤", "酒巷", "千兰", "之柔", "新蕾", "稚言", "祭心", "染尘", "未安", "奢念", "暮兮", "曼易", "心盲", "矜暮", "紫蓝", "以亦", "夏蓉", "柒夏", "久安", "安暖", "妙彤", "凛然", "北觅", "晴天", "殇忆", "卿尘", "墨默", "拾忆", "青琯", "黛儿", "木槿", "初夏", "陌然", "眸敛", "涵双", "情寂", "陌沫", "凉生", "暖亦", "凉栀", "念露", "慕青", "平蝶", "安蕾", "如初", "挽安", "宛海", "屿风", "幻柏", "千寻", "妙菡", "雨寒", "南浔", "初雨", "梦琪", "曼文", "栀颜", "素笺", "哽咽", "明眸", "陌屿", "陌颜", "葬情", "妄想", "断念", "惜雪", "蝶衣", "傲珊", "青栀", "熙妍", "迁心", "旧颜", "孤音", "怜梦", "含烟", "冷傲", "晓灵", "浅伤", "断城", "喜孤", "青橙", "沦陷", "故里", "屿暖", "紫翠", "孤心", "淡然", "墨兮", "南忆", "酒笙", "归安", "暮凉", "暖言", "亡心", "新波", "沐兮", "非墨", "执念", "天荷", "凡旋", "展眉", "陌路", "顾念", "柒安", "静枫", "泪雨", "深碍", "如南", "拒昧", "凡蕾", "风吟", "冷眸", "沛菡", "久孤", "瘾情", "安朵", "夏青", "凉薄", "亦瑶", "旧夢", "陌若", "敬情", "雅蕊", "厌离", "温唇", "遇見", "妄生", "元霜", "尔岚", "南莲", "陌殇", "沫忆", "若雨", "倾忆", "芷蕾", "呓语", "枫溪", "凡柔", "温瞳", "墨轩", "花葬", "梵心", "洛雪", "無言", "兮颜", "清欢"];
									
									lib.skill[skillName] = newSkill;
									lib.translate[skillName] = skillNameList.randomGet();
									lib.translate[skillName + '_info'] = newSkillTran;
									event.skillName = skillName;
									
									var next = player.chooseTarget();
									next.set('filterTarget', (card, player, target) => {
										return target != player;
									});
									next.set('prompt', '是否将技能赠与其他角色？');
									next.set('prompt2', `【${lib.translate[skillName]}】:${lib.translate[skillName + '_info']}`);
									next.set('ai', (target) => {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										var giveFriend;
										if (newSkill.check == checkList[3].check) {
											giveFriend = true;
										} else if (newSkill.check == checkList[2].check) {
											giveFriend = false;
										} else {
											// 看情况的check
											switch (randomTriggerTarget.target){
												case 'player':
													giveFriend = newSkill.check({player}, player);
													break;
												default :
													if (newSkill.check == checkList[0].check) {
														giveFriend = true;
													} else if (newSkill.check == checkList[1].check) {
														//对敌人发动
														if (newSkill.forced) {
															giveFriend = false;
														} else {
															giveFriend = true;
														}
													}
													break;
											}
										}
										
										//event.giveFriend = giveFriend;
										//event.check = newSkill.check;
										var mySkillLength = player.skills.filter(skill => {
											return skill.indexOf('lyz_shijian_createSkill_') == 0;
										}).length;
										if (giveFriend && mySkillLength >= 8) {
											return att;
										} else if (!giveFriend && newSkill.forced) {
											return -att + 2;
										} else if (!giveFriend) {
											return -att;
										}
										return 0;
									});
									break;
							}
							'step 1'
							if (event.skillName) {
								/*console.log({
									giveFriend: event.giveFriend,
									check: event.check,
									result: result,
								});*/
								if (result && result.bool) {
									result.targets[0].addSkillLog(event.skillName);
								} else {
									player.addSkillLog(event.skillName);
								}
							}
						},
					},
			'lyzpianwu': {
				skillTrigger: (triggerName, player, skill) => {
					var next = game.createEvent(triggerName, false);
					next.player = player;
					next.skill = skill;
					next.setContent(() => {
						event.trigger(event.name);
					});
				},
				init: (player, skill) => {
					lib.skill[skill].skillTrigger('shijian_init', player, skill);
				},
				onremove: (player, skill) => {
					lib.skill[skill].skillTrigger('shijian_removeSkill', player, skill);
				},
				audio:"ext:阳光包/audio:4",
				trigger: {
					player:["damageEnd", "phaseJieshuBegin"],
					source:"damageSource",
				},
				forced: true,
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				filter: (event, player) => {
					return [player.name, player.name1, player.name2].contains('lyz_shijian') || (game.lyz_shijian && game.lyz_shijian.players.contains(player));
				},
				content: () => {
					lib.skill[event.name].skillTrigger('shijian_addSkill', player, event.name);
				    var chat=["获得技能是随机生成的，请仔细看看。","是欧皇技能还是非酋技能呢？","听说《在线更新》这个扩展相当不错。"].randomGet();
                    player.chat(chat);
				},
			},
			lyzjinghong:{
			    group:["lyzjinghong2","lyzjinghong3","lyzjinghong4"],
			    mark:true,
			    intro:{
                    content:"当前X的值为:#",
                },
			    init:function(player,skill){
			        if(!player.storage.lyzjinghong) player.storage.lyzjinghong=2;
			        if(!player.storage.lyzjinghong3) player.storage.lyzjinghong3=0;
			    },
			    trigger:{
			        player:"phaseUseBegin",
			    },
			    audio:"ext:阳光包/audio:2",
			    forced:true,
			    content:function(){
			        var card=get.cardPile(function(card){
						return get.translation(card.name).length==player.storage.lyzjinghong;
					},'field');
					if(card) player.gain(card,'gain2');			    
			    }			 
			 },
			 lyzjinghong2:{
			    trigger:{
			       player:["phaseZhunbeiBegin","phaseJieshuBegin"],
			    },
			    audio:"lyzjinghong",
			    forced:true,
			    content:function(){
			        "step 0"
			        var controls=["1","2","3","4","5"];
			        player.chooseControl(controls).set('prompt','〖惊鸿〗：请选择一项').ai=function(){
			            return "1";
                    };
                    "step 1"
                    event.control=result.control;
                    switch(event.control){
                      case '1':player.storage.lyzjinghong=1;break;
                      case '2':player.storage.lyzjinghong=2;break;
                      case '3':player.storage.lyzjinghong=3;break;
                      case '4':player.storage.lyzjinghong=4;break;                 
                      case '5':player.storage.lyzjinghong=5;break;
			         }
			    }
			 },
			 lyzjinghong3:{
			      mark:true,
			       intro:{
                    content:"本轮已获得#张牌",
                  },
			      trigger:{global:['useCardAfter','respondAfter']},
				  forced:true,
				  audio:"lyzjinghong",
				  filter:function(event,player){
					return player.storage.lyzjinghong3<4&&get.translation(event.card.name).length==player.storage.lyzjinghong&&event.player!=player&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o'&&event.card.isCard&&event.cards.length==1;
				  },
				  content:function(){
				    player.markSkill("lyzjinghong3");
				    player.storage.lyzjinghong3++;
					player.gain(trigger.cards,'gain2');
				}			 
			 },
			 lyzjinghong4:{
			    trigger:{
                    global:"roundStart",
                },
                forced:true,
                silent:true,
                popup:false,
                content:function(){
                    player.storage.lyzjinghong3=0;
                }
			 },
			lyzzhanmo:{
			      audio:"ext:阳光包/audio:2",
			      group:"lyzzhanmo2",
			      trigger:{
			          player:"useCardToTargeted",
			      },
			      forced:true,
			      filter:function (event,player){
                    //if(event.parent.name=="lyzzhanmo") return false;                                
                    return get.type(event.card)!="delay"&&get.type(event.card)!="equip"&&event.card.name!="shan"&&event.card.name!="wuxie"&&(!player.countCards("e")||player.hp<=2);
                },
                content:function(){
 
                       if(!player.countCards("e")&&trigger.targets&&trigger.card&&trigger.card.name!='wuxie'&&trigger.card.name!='shan'&&get.type(trigger.card)!="delay"&&trigger.targets.length==trigger.parent.triggeredTargets4.length){
                             trigger.getParent().targets=trigger.getParent().targets.concat(trigger.targets);
							trigger.getParent().triggeredTargets4=trigger.getParent().triggeredTargets4.concat(trigger.targets);
                          }                                                                  
                  }			 
			 },	
			 lyzzhanmo2:{
			      trigger:{
			          player:"useCardToPlayered",
			      },
			      forced:true,
			      filter:function (event,player){
                    //if(event.parent.name=="lyzzhanmo") return false;                                
                    return get.type(event.card)!="delay"&&get.type(event.card)!="equip"&&event.card.name!="shan"&&event.card.name!="wuxie"&&(!player.countCards("e")||player.hp<=2);
                },
                content:function(){
                      "step 0"
                      if(player.hp<=2&&player.hp>0&&trigger.getParent().triggeredTargets3.length==1){
                            player.chooseTarget(true,'对一名其他角色造成1点雷电伤害',function(card,player,target){
						       return target!=player;
					        }).set('ai',function(target){
						        var player=_status.event.player;
						        return get.damageEffect(target,player,player);
					        });
                      }
                      "step 1"
                      if(result.bool){
                            var target=result.targets[0];
                            player.line(target);
                            target.damage("thunder");                
                      }
                                                                                 
                  }			 			 
			 },
			 lyzyoulin:{
			     intro:{
                    content:"计算与其他角色的距离-#",
                },
			     audio:"ext:阳光包/audio:2",
			     trigger:{
			        player:"phaseUseBegin"
			     },
			     forced:true,
			     group:"lyzyoulin_jieshu",
			     content:function(){
			        "step 0"
			        var cards=player.getCards('he');
					var todis=[]
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i])=='equip') todis.push(cards[i]);
					}
					if(todis.length) {
					    player.discard(todis);
					}
					"step 1"
					if(player.storage.disableEquip==undefined||player.storage.disableEquip.length==5) event.finish();
					else player.chooseToDisable();
					"step 2"
					player.chooseControl(function(event, player) {
                          return Math.random();
                    }).set('prompt', '犹凛').set('choiceList', ['使用杀目标数和次数+1', '横置任意名角色', '计算与其他角色距离-1']);
                    "step 3"
                    if(result.control=="选项一") {
                        player.addTempSkill("lyzyoulin_sha");
                        event.finish();
                    }
                    if(result.control=="选项二") event.goto(4);
                    if(result.control=="选项三") {
                        if(!player.storage.lyzyoulin) player.storage.lyzyoulin=0;
					    player.markSkill("lyzyoulin");
					    player.storage.lyzyoulin++;
					    player.addSkill("lyzyoulin_mashu");
                        event.finish();
                    }
                    "step 4"
                    player.chooseTarget('横置任意名角色',[1,Infinity],function(card,player,target){
						return true;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 5"
					if(result.bool){
						player.logSkill('lyzyoulin',result.targets);
						event.targets=result.targets;
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 6"
					if(event.num<event.targets.length){
						event.targets[event.num].link(true);
						event.num++;
						event.redo();
					}
			     },
			     subSkill:{	
			         jieshu:{
			            audio:"lyzyoulin",
			            trigger:{
			               player:"phaseJieshuBegin"
			            },
			            forced:true,
			            content:function(){
			                player.draw(player.storage.disableEquip.length);			                               
			            }
			         },		         
			         mashu:{
				     mod:{
					      globalFrom:function(from,to,distance){
						return distance-from.storage.lyzyoulin;
					         }
				         }								
				     },			     
			     }
			 },	
			 lyzyoulin_sha:{
			     mod:{					        
					        selectTarget:function(card,player,range){
						        if(card.name=='sha'&&range[1]!=-1) range[1]++;
					        },
					        cardUsable:function(card,player,num){
						        if(card.name=='sha') return num+1;
					        }
				       },
				       charlotte:true,			 
			 },	 
			 
			 lyzoldchenju:{
			     group:["lyzoldchenju3","lyzoldchenju4","lyzoldchenju_die"],
			     audio:"ext:阳光包/audio:2",
			     trigger:{
			        global:"gameDrawAfter",
					player:"enterGame",
			     },
			     forced:true,
			     content:function(){
			        "step 0"
			        var players=game.players.slice(0).sortBySeat();	
			        player.line(players);
					event.num1=Math.floor(game.countPlayer()/2);					
					event.list=game.filterPlayer(function(current){
						return current!=player;
					}).randomGets(event.num1).sortBySeat();
					"step 1"
					var target=event.list.shift();
					target.addSkill("lyzoldchenju2");
					target.storage.lyzoldchenju2=true;
					if(event.list.length) event.redo();
					"step 2"
					var players=game.players.slice(0).sortBySeat();						
					for(var i=0;i<players.length;i++){
						if(players[i]!=player&&!players[i].hasSkill("lyzoldchenju2")){
						    players[i].addSkill("lyzoldchenju2");
						    players[i].storage.lyzoldchenju2=false;
						};
					};
			     },
	        subSkill:{
			          "0":{
			            intro:{
							content:function(storage,player){
								return "造成的伤害+1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            trigger:{source:'damageBegin1'},				
				        forced:true,
				        content:function(){
					        trigger.num++;
				        },
				        ai:{
					        damageBonus:true
				        }	        
			         },
			         "1":{
			            intro:{
							content:function(storage,player){
								return "受到的伤害+1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            trigger:{player:'damageBegin3'},				
				        forced:true,
				        content:function(){
					        trigger.num++;
				        }				    
			         },	
			        "2":{
			            intro:{
							content:function(storage,player){
								return "手牌上限+1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					       maxHandcard:function(player,num){
						      return num+1;
					         }
				         }			        
			         },	
			         "3":{
			            intro:{
							content:function(storage,player){
								return "手牌上限-1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					       maxHandcard:function(player,num){
						      return num-1;
					         }
				         }			        
			         },
			         "4":{
			            intro:{
							content:function(storage,player){
								return "计算与其他角色距离-1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					      globalFrom:function(from,to,distance){
						      return distance-1;
					         }
				         }					         			         
			         },	
			         "5":{
			            intro:{
							content:function(storage,player){
								return "计算与其他角色距离+1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					      globalFrom:function(from,to,distance){
						      return distance+1;
					         }
				         }					         			         
			         },
			         "6":{
			            intro:{
							content:function(storage,player){
								return "摸牌阶段摸牌数+1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			             trigger:{player:'phaseDrawBegin2'},
				         forced:true,
				         filter:function(event,player){
					        return !event.numFixed;
				         },
				         content:function(){
					         trigger.num++;
				         },		         
			         },	
			         "7":{
			            intro:{
							content:function(storage,player){
								return "摸牌阶段摸牌数-1";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			             trigger:{player:'phaseDrawBegin2'},
				         forced:true,
				         filter:function(event,player){
					        return !event.numFixed;
				         },
				         content:function(){
					         trigger.num--;
				         },		         
			         },
			         "8":{
			            intro:{
							content:function(storage,player){
								return "只能对同类角色使用牌";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					        playerEnabled:function(card,player,target){
						       if(player.storage.lyzoldchenju2!=target.storage.lyzoldchenju2) return false;
					        }
				        }			         
			         },	
			         "9":{
			            intro:{
							content:function(storage,player){
								return "只能对异类角色使用牌";
							},
						},
			            charlotte:true,
			            mark:true,
			            marktext:'局',
			            mod:{
					        playerEnabled:function(card,player,target){
						       if(player.storage.lyzoldchenju2==target.storage.lyzoldchenju2) return false;
					        }
				        }			         
			         },
			         die:{
			            trigger:{
			               player:"die"
			            },
			            forced:true,
			            popup:false,
			            content:function(){
			                var players=game.players.slice(0).sortBySeat();
			          for(var i=0;i<players.length;i++){
			               for(var a=0;a<10;a++){
						      if(players[i].hasSkill('lyzoldchenju_'+a)) players[i].removeSkill('lyzoldchenju_'+a);
						      if(players[i].hasSkill("lyzoldchenju2")) players[i].removeSkill("lyzoldchenju2");
					      }			          
			          }          			            
			            }			         			         
			         }       
			     }
			 },
			 lyzoldchenju2:{
			      charlotte:true,
			      mark:true,
			      marktext:"局",
			      intro:{
                    content:function (storage,player,skill){
                       if(player.storage.lyzoldchenju2==true) return 'A类角色';
                       return 'B类角色';
                    }
                }		 			 			 
			 },
			 lyzoldchenju3:{
			      trigger:{
			         global:"roundStart"
			      },
			      forced:true,
			      content:function(){
			          "step 0"			          
			          var players=game.players.slice(0).sortBySeat();
			          for(var i=0;i<players.length;i++){
			               for(var a=0;a<10;a++){
						      if(players[i].hasSkill('lyzoldchenju_'+a)) players[i].removeSkill('lyzoldchenju_'+a);
					      }			          
			          }
			          "step 1"          
			          event.num1=[0,1,2,3,4,5,6,7,8,9].randomGet();
					  event.num2=[0,1,2,3,4,5,6,7,8,9].randomGet();
			          player.storage.lyzoldchenjuA=event.num1;
			          player.storage.lyzoldchenjuB=event.num2;
			          "step 2"
			          var players=game.players.slice(0).sortBySeat();						
					    for(var i=0;i<players.length;i++){
						if(players[i].storage.lyzoldchenju2==true){
						    players[i].addSkill("lyzoldchenju_"+event.num1);
						};
						if(players[i].storage.lyzoldchenju2==false){
						    players[i].addSkill("lyzoldchenju_"+event.num2);
						  };
					  };	      
			      }			 			 			 
			 },
			 lyzoldchenju4:{
                  locked:true,
                  forecd:false,
			      trigger:{
			          player:["phaseBegin","damageEnd"],
			      },
			      prompt:function(event,player){
                      return "是否发动〖尘局〗？改变一名其他角色的分类或刷新一类角色的效果"
                  },
			      content:function(){
			           "step 0"
                       player.chooseControl(function(){
                            return Math.random()<0.5?'选项一':'选项二';
                       }).set('prompt','尘局').set('choiceList',['改变一名其他角色的分类','刷新一类角色的效果']);
                       "step 1"
                       if(result.control=='选项一'){
                           player.chooseTarget(true,'请选择改变分类的角色',function(card,player,target){
                                return target!=player;
                           })
                       }
                       else {
                           player.chooseControl(function(){
                                return Math.random()<0.5?'选项一':'选项二';
                           }).set('prompt','尘局').set('choiceList',['刷新A类角色的效果','刷新B类角色的效果']);
                           event.goto(3);
                       }
                       "step 2"
                       if(result.bool){
                           var target=result.targets[0];
                           event.target=target;
                           player.line(target);
                           if(target.storage.lyzoldchenju2==true) target.storage.lyzoldchenju2=false;
                           else target.storage.lyzoldchenju2=true;
                       }
                       event.goto(6);
                       "step 3"
                       if(result.control=='选项一'){
                           event.num1=[0,1,2,3,4,5,6,7,8,9].randomGet();
                           player.storage.lyzoldchenjuA=event.num1;			          
                       }
                       else {
                           event.num2=[0,1,2,3,4,5,6,7,8,9].randomGet();
                           player.storage.lyzoldchenjuB=event.num2;
                           event.goto(5);
                       }
                       "step 4"
                        var players=game.players.slice(0).sortBySeat();
                         for(var b=0;b<players.length;b++){
                           for(var a=0;a<10;a++){
                              if(players[b].hasSkill('lyzoldchenju_'+a)&&players[b].storage.lyzoldchenju2==true) players[b].removeSkill('lyzoldchenju_'+a);
                          }                   
                        }                     
                        for(var i=0;i<players.length;i++){
                        if(players[i].storage.lyzoldchenju2==true){
                            players[i].addSkill("lyzoldchenju_"+event.num1);
                          };
                      };
                      event.finish();
                      "step 5"
                        var players=game.players.slice(0).sortBySeat();
                        for(var b=0;b<players.length;b++){
                           for(var a=0;a<10;a++){
                              if(players[b].hasSkill('lyzoldchenju_'+a)&&players[b].storage.lyzoldchenju2==false) players[b].removeSkill('lyzoldchenju_'+a);
                          }                   
                        }                           
                        for(var i=0;i<players.length;i++){
                        if(players[i].storage.lyzoldchenju2==false){
                            players[i].addSkill("lyzoldchenju_"+event.num2);
                          };
                      };
                      event.finish();
                      "step 6"
                      for(var i=0;i<10;i++){
                            if(target.hasSkill('lyzoldchenju_'+i)) target.removeSkill('lyzoldchenju_'+i);
                      }
                      if(target.storage.lyzoldchenju2==true)  target.addSkill("lyzoldchenju_"+player.storage.lyzoldchenjuA);
                      else target.addSkill("lyzoldchenju_"+player.storage.lyzoldchenjuB);
			      },			 
			 },
			 lyzchuiweng:{
                audio:"ext:阳光包/audio:2",
                enable:'phaseUse',
                usable:1,
                filterTarget:function(card,player,target){
                    return true;
                },
                content:function(){
                    'step 0'                    
                    var list=[];
                    var cards=[];
                    for(var i of lib.inpile) list.add(get.type2(i));
                    for(var i of list){
                        if(!target.countCards('h',function(card){
                            return get.type2(card,target)==i;
                        })){
                            var card=get.cardPile(function(card){
                                return get.type2(card,false)==i;
                            });
                            if(card) cards.push(card);
                        }
                    }
                    if(cards.length) target.gain(cards,'gain2','log');
                    else event.finish();
                    if(cards.length>1) player.recover();
                    'step 1'
                    game.updateRoundNumber();
                },
                ai:{
                    order:10,
                    result:{
                        target:function(player,target){
                            return 1/Math.sqrt(1+target.countCards('h'))
                        },
                    },
                },                
             },             			
             
             lyzjiansha:{
                  audio:"ext:阳光包/audio:2",
                  group:"lyzjiansha_use",
                  trigger:{
                     player:"damageEnd"
                  },
                  filter:function(event,player){
                     return player.countCards("he");
                  },
                  frequent:true,
                  content:function(){
                       "step 0"
                  player.draw();
                      "step 1"
                    var filterTarget=function(card,player,target){
                        return target!=player;
                    };
                    if(!player.countCards('h')||!game.hasPlayer(function(current){
                        return filterTarget(null,player,current);
                    })) event.finish();
                    else player.chooseCardTarget({
                        prompt:'将一张带伤害标签的牌交给一名其他角色',
                        filterTarget:filterTarget,
                        filterCard:function(card){
                           return get.tag(card,'damage');
                        },
                        position:'he',
                        ai1:function(card){
                            return 7-get.value(card);
                        },
                        ai2:function(target){
                            var player=_status.event.player;
                            return get.attitude(player,target);
                        },
                    });
                    "step 2"
                    if(result.bool){
                        var target=result.targets[0];
                        var card=result.cards[0];
                        event.card=card;
                        target.gain(card,player,"give");
                      }
                    else event.finish();
                    "step 3"
                    player.chooseUseTarget({name:event.card.name,nature:event.card.nature},false,'nodistance');
                  },
                  subSkill:{
                      use:{
                         enable:"phaseUse",
                         usable:1,
                         audio:"lyzjiansha",
                         filter:function(event,player){
                     return player.countCards("he");
                  },
                         content:function(){
                   "step 0"
                     player.draw();
                      "step 1"
                    var filterTarget=function(card,player,target){
                        return target!=player;
                    };
                    if(!player.countCards('h')||!game.hasPlayer(function(current){
                        return filterTarget(null,player,current);
                    })) event.finish();
                    else player.chooseCardTarget({
                        prompt:'将一张带伤害标签的牌交给一名其他角色',
                        filterTarget:filterTarget,
                        filterCard:function(card){
                           return get.tag(card,'damage');
                        },
                        position:'he',
                        ai1:function(card){
                            return 7-get.value(card);
                        },
                        ai2:function(target){
                            var player=_status.event.player;
                            return get.attitude(player,target);
                        },
                    });
                    "step 2"
                    if(result.bool){
                        var target=result.targets[0];
                        var card=result.cards[0];
                        event.card=card;
                        target.gain(card,player,"give");
                      }
                    else event.finish();
                    "step 3"
                    player.chooseUseTarget({name:event.card.name,nature:event.card.nature},false,'nodistance');
                  }, 
                ai:{
                    order:7,
                    result:{
                        player:function(player,target){
                            return 1;
                        },
                    },
                },
                      }                                   
                  }                                                            
             },
             lyzyinlan:{
                audio:"ext:阳光包/audio:2",
                trigger:{global:'useCardToPlayer'},
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					if(event.targets.length>1) return false;
					return event.player!=player&&get.tag(event.card,'damage');
				},
				direct:true,
				content:function(){
				    "step 0"
				    player.chooseCard("h","是否发动〖引澜〗？交给"+get.translation(trigger.player)+"一张手牌").set('ai',function(card){
                         var att=get.attitude(_status.event.player,trigger.player);
                         if(att<0&&get.color(card)=="black") return -1;
                         if(att<0&&game.countPlayer()<3) return -1;
                         return 6-get.value(card,player);
                    });
                    "step 1"
                    if(result.bool){
                         player.logSkill("lyzyinlan",trigger.player);
                         var card=result.cards[0];
                         trigger.player.gain(card,player,"give");
                         if(get.color(card)=="black"){
                             trigger.player.addTempSkill('lyzyinlan_adddamage');
						     trigger.player.storage.lyzyinlan={
							    card:trigger.card,
						    }
						    event.finish();                         
                        }
                        else event.goto(2);
                    }
                    else event.finish();
                    "step 2"
                    var bool=game.hasPlayer(function(current){
						return !trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,trigger.player,current);
					});
					if(bool){
                    player.chooseTarget(true,'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
							var trigger=_status.event.getTrigger();
							return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
						}).set('ai',function(target){
							var trigger=_status.event.getTrigger();
							return get.effect(target,trigger.card,trigger.player,_status.event.player);
						});
					}
					else event.finish();
					"step 3"
					if(result.bool){
						if(!event.isMine()&&!event.isOnline()) game.delayx();
						player.line(result.targets[0]);
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 4"
						trigger.targets.push(event.target);                 
				},
				subSkill:{
				    adddamage:{
				        onremove:function (player){
					delete player.storage.lyzyinlan;
				},
				trigger:{
					source:"damageBegin1",
				},
				filter:function (event,player){
					var info=player.storage.lyzyinlan;
					return event.card&&event.card==info.card;
				},
				silent:true,
				popup:false,
				forced:true,
				content:function (){
						trigger.num++;
				},
				    }
				}       
             },
             lyzminwei:{
                audio:"ext:阳光包/audio:2",
                group:"lyzminwei_clear",
                trigger:{
                    target:"useCardToTargeted"
                },
                forced:true,
                init:function (player,skill){
                     if(!player.storage.lyzminwei_mod) player.storage.lyzminwei_mod=[];
                },
                filter:function (event,player){
                     if(player.storage.lyzminwei_mod.contains(get.type2(event.card))) return false;
                     return player!=_status.currentPhase;
                },
                content:function(){
                    "step 0"
                    player.draw();
                    "step 1"
                    player.addTempSkill("lyzminwei_mod");
                    player.storage.lyzminwei_mod.push(get.type2(trigger.card));
                },
            subSkill:{
                mod:{
                     marktext:"泯",
                mark:true,
                intro:{
                    content:"不能成为$牌的目标",
                },
                mod:{
                targetEnabled:function(card,player,target){
						if(target.storage.lyzminwei_mod&&target.storage.lyzminwei_mod.contains(get.type2(card))) return false;
					    }			   
                       }					
				    },				
				clear:{
				    charlotte:true,
				    trigger:{
				        global:"phaseEnd",
				    },
				    forced:true,
				    popup:false,
				    content:function(){
				    player.storage.lyzminwei_mod=[];
				        }								
				    }              
                }                                       
             },
             lyzaolie:{
                group:"lyzaolie_draw",
                audio:"ext:阳光包/audio:2",
                forced:true,
                trigger:{
                   player:"phaseBegin",
                },
                content:function(){
                   "step 0"
                   player.recover();
                   player.draw();
                   "step 1"
                   if(player.maxHp<4) player.gainMaxHp();
                },
                subSkill:{
                   draw:{
                      trigger:{
					      player:'useCardToPlayered',
					      target:'useCardToTargeted',
				      },
				      audio:"lyzaolie",
				      filter:function(event,player){
				           if(!get.tag(event.card,'damage')) return false;
				           if(player.hasSkill("lyzaolie2")) return false;
					       return player==event.target||event.getParent().triggeredTargets3.length==1;
				      },
				      forced:true,
				      content:function(){
				          "step 0"
					      player.draw();
					      "step 1"
					      if(get.color(trigger.card)!="red") player.addTempSkill("lyzaolie2");
				      },
                   }
                }
             },
             lyzaolie2:{},
             lyzdingjiang:{
                group:["lyzdingjiang_achieve","lyzdingjiang_fail"],
                intro:{
					content:"当前有#个标记",
				},
				marktext:"疆",
                audio:"ext:阳光包/audio:2",               
                trigger:{
                   source:"damageSource",
                },
                forced:true,
                content:function(){
                   player.addMark("lyzdingjiang",trigger.num);
                },
                derivation:["yingba","lyztianyi","lyzyingzi","lyzpojun","lyzpoxi","lyzyinghun"],
                subSkill:{
                   achieve:{
                       audio:"lyzdingjiang",
                       forced:true,
                       skillAnimation:true,
                       animationColor:"wood",
                       trigger:{
                           player:"phaseZhunbeiBegin",
                       },
                      filter:function(event,player){
                           return player.countMark("lyzdingjiang")>2;
                       },
                       content:function(){
                           "step 0"
                           game.log(player,"成功完成使命");
                           player.draw(player.countMark("lyzdingjiang"));
                           player.awakenSkill("lyzdingjiang");
                           "step 1"
                           event.prompt="请选择获得两个技能";
                           player.chooseButton(2,[event.prompt,[["yingba","lyztianyi","lyzyingzi","lyzpojun","lyzpoxi"],"vcard"]],true,function(button){						
						      return Math.random();
					      });
					       "step 2"
					       var skill1=result.links[0];
					       var skill2=result.links[1]
					       player.addSkill(skill1);
					       player.addSkill(skill2);
					       if(player.name=="lyz_sunce"){
					       if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_sunce2.jpg');    
                            else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_sunce2.jpg');    				       				       					       
                          }
                       }
                   },
                   fail:{
                       trigger:{
                           player:"dying"
                       },
                       forced:true,
                       content:function(){
                           "step 0"
                           game.log(player,"使命失败");
                           if(player.hp<1) player.recover(1-player.hp);
                           player.awakenSkill("lyzdingjiang");
                           "step 1"
                           player.addSkill("lyzyinghun");
                           if(player.name=="lyz_sunce"){
                            if(lib.config.ygbLutou) player.node.avatar.setBackgroundImage('extension/阳光包/image/lutou/lyz_sunce3.jpg');    
                            else player.node.avatar.setBackgroundImage('extension/阳光包/image/character/lyz_sunce3.jpg');  
                          }      
                       }
                   }
                }            
             },
            lyztianyi:{
                inherit:"tianyi",
                audio:"ext:阳光包/audio:1",   
            },
			lyzdangmo:{
				inherit:"dangmo",
				audio:"ext:阳光包/audio:1",   
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					if(event.card.name!='sha'||player.hp<=1) return false;
					var evt=event.getParent('phaseUse');
					return evt&&evt.player==player&&player.getHistory('useCard',function(evtx){
						return evtx.card.name=='sha'&&evtx.getParent('phaseUse')==evt;
					})[0]==event&&game.hasPlayer(function(current){
						return !event.targets.contains(current)&&lib.filter.filterTarget(event.card,player,current);
					});
				},
				content:function(){
					'step 0'
					var num=Math.min(player.hp-1,game.countPlayer(function(current){
						return !trigger.targets.contains(current)&&lib.filter.filterTarget(trigger.card,player,current);
					}));
					player.chooseTarget(get.prompt('lyzdangmo'),'为'+get.translation(trigger.card)+'增加至多'+get.translation(num)+'个目标',[1,num],function(card,player,target){
						var evt=_status.event.getTrigger();
						return !evt.targets.contains(target)&&lib.filter.filterTarget(evt.card,player,target);
					}).set('ai',function(target){
						var evt=_status.event.getTrigger(),eff=get.effect(target,evt.card,evt.player,evt.player);
						if(player.hasSkill('tspowei')&&target.hasMark('dulie')) return 4*eff;
						return eff;
					});
					'step 1'
					if(result.bool){
						if(player!=game.me&&!player.isOnline()) game.delayx();
						event.targets=result.targets;
					}
					else event.finish();
					'step 2'
					player.logSkill('lyzdangmo',targets);
					trigger.targets.addArray(targets);
				},
			},
			lyzyingzi:{
			    inherit:"reyingzi",
				audio:"ext:阳光包/audio:1",   
			},
			lyzpojun:{
				shaRelated:true,
				inherit:"repojun",
				audio:"ext:阳光包/audio:1",   
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.hp>0&&event.target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.choosePlayerCard(trigger.target,'he',[1,Math.min(trigger.target.hp,trigger.target.countCards('he'))],get.prompt('lyzpojun',trigger.target));
					next.set('ai',function(button){
						if(!_status.event.goon) return 0;
						var val=get.value(button.link);
						if(button.link==_status.event.target.getEquip(2)) return 2*(val+3);
						return val;
					});
					next.set('goon',get.attitude(player,trigger.target)<=0);
					next.set('forceAuto',true);
					'step 1'
					if(result.bool){
						var target=trigger.target;
						player.logSkill('lyzpojun',trigger.target);
						target.addSkill('lyzpojun2');
						target.storage.lyzpojun2.addArray(result.cards);
						target.lose(result.cards,ui.special,'toStorage');
						game.log(target,'失去了'+get.cnNumber(result.cards.length)+'张牌');
						target.markSkill('lyzpojun2');
					}
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)>0) return false;
						if(tag=='directHit_ai') return arg.target.hp>=Math.max(1,arg.target.countCards('h')-1);
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},
				group:'lyzpojun3',
			},
			lyzpojun3:{
				audio:'lyzpojun',
				trigger:{source:'damageBegin1'},
				forced:true,
				locked:false,
				logTarget:'player',
				filter:function(event,player){
					var target=event.player;
					return event.getParent().name=='sha'&&player.countCards('h')>=target.countCards('h')&&player.countCards('e')>=target.countCards('e');
				},
				content:function(){
					trigger.num++;
				},
			},
			lyzpojun2:{
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				trigger:{global:'phaseEnd'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return player.storage.lyzpojun2&&player.storage.lyzpojun2.length>0;
				},
				content:function(){
					game.log(player,'收回了'+get.cnNumber(player.gain(player.storage.lyzpojun2,'draw','fromStorage').cards.length)+'张〖破军〗牌');
					player.storage.lyzpojun2.length=0;
					player.removeSkill('lyzpojun2');
				},
				intro:{
					onunmark:'throw',
					content:'cardCount',
				},
			},
			lyzpoxi:{
			    inherit:"drlt_poxi",
				audio:"ext:阳光包/audio:1",   
			},
			lyzyinghun:{
			    inherit:"gzyinghun",
				audio:"ext:阳光包/audio:1",   
			},
             lyzbalve:{
                audio:"ext:阳光包/audio:1",
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                filter:function(event,player){
                    return player.hasZhuSkill("lyzbalve");
                },
                ZhuSkill:true,
                forced:true,
                content:function(){
                    "step 0"
                    player.gainMaxHp();
                    "step 1"
                    if(player.hasSkill("lyzdingjiang")) player.addMark("lyzdingjiang");
                }
             },
             lyzchenju:{
                trigger:{
                   player:["enterGame","phaseZhunbeiBegin","phaseJieshuBegin","damageEnd"],
                   global:"gameDrawAfter"
                },
                audio:"ext:阳光包/audio:2",
                forced:true,
                content:function(){
                     "step 0"
                     var list;
                     var grouplist;              
                    if(_status.characterlist){
                        list=[];
                        grouplist=[];
                        for(var i=0;i<_status.characterlist.length;i++){
                            var name=_status.characterlist[i];
                            list.push(name);                            
                        }
                    }                    
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list.remove(players[i].name);
                        list.remove(players[i].name1);
                        list.remove(players[i].name2);
                    }
                    list.remove(name);        
                    player.chooseButton(true).set('ai',function(button){                    
                        return Math.random();
                    }).set('createDialog',['请选择一张武将牌',[list.randomGets(5),'character']]);
                    "step 1"
                    var list=[];
					var listm=[];
					listm=lib.character[result.links[0]][3];
					var func=function(skill){
						var info=get.info(skill);
						if(!info||info.charlotte) return false;
						return true;
					};
					for(var i=0;i<listm.length;i++){
						if(func(listm[i])) list.add(listm[i]);
					}
					event.skills=list;
					player.chooseControl(list).set("prompt","请选择一个技能");
					"step 2"
					var skill=result.control;
					event.skill=skill;
					  player.chooseTarget("请选择要获得技能的角色",function(card,player,target){
                                return true;
                            }).set('ai',function(target){
                        return get.attitude(player,target);
                    });                    
                    "step 3"
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target);
                        if(target.storage.lyzchenju) target.removeSkill(target.removeSkill(target.storage.lyzchenju));
                        target.storage.lyzchenju=skill;
                        target.addSkillLog(skill);
                    }
                    else event.finish();                                       															
                }
             },
             lyzwangsheng:{
                  audio:"ext:阳光包/audio:2",
                  enable:"phaseUse",
                  usable:1,
                  filter:function(event,player){
                       var list=[];
                       for(var i=0;i<game.dead.length;i++){
                          list.push(game.dead[i].name);
                      }
                      return list.length>0; 
                  },
                  content:function(){
                  "step 0"
                       var list=[];
                   for(var i=0;i<game.dead.length;i++){
                   list.push(game.dead[i].name);
              } 
                   player.chooseButton(ui.create.dialog('选择一名已死亡的角色令其复活',[list,'character']),function(button){
                   for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                   return ai.get.attitude(_status.event.player,game.dead[i]);
              }); 
                   "step 1" 
                if(result.bool){
                    for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                    var dead=game.dead[i]; 
                    dead.maxHp=2;
                    dead.revive(2);                    
                    dead.draw(2);
                    dead.clearSkills();
                  }                          
             },
         },
         lyzkezhi:{
             group:"lyzkezhi_cancel",
             audio:"ext:阳光包/audio:2",   
             trigger:{
                 player:"damageBegin3",
                 source:"damageBegin1"
             },
             forced:true,
             logTarget:"player",
             filter:function(event,player){
                 if(event.nature) return true;
                 return false;
             },
             content:function(){
                 var chat=["桃子姐姐摸摸奈！","先生，买朵花吗？"].randomGet();
                 player.chat(chat);
                 trigger.num++;
             },
             subSkill:{
                 cancel:{
                     trigger:{
                         player:"damageBegin4"
                     },
                     audio:"lyzkezhi",
                     forced:true,
                     content:function(){
                         "step 0"
                         var chat=["桃子姐姐摸摸奈！","先生，买朵花吗？"].randomGet();
                         player.chat(chat);
                         player.draw(trigger.num);
                         "step 1"
                         player.chooseControl("体力值","体力上限",function(event,player){
						     if(player.hp==player.maxHp) return "体力值";
						     return "体力上限";
					     }).set("prompt","克止：失去1点体力或减1点体力上限");
					     "step 2"
					     if(result.control=="体力值"){
						     player.loseHp();
					     }
					     else{
						     player.loseMaxHp();
					     }
					     "step 3"
					     trigger.cancel();
                     }
                 }
             }
         },
         lyzyouxun:{
             enable:"phaseUse",
             audio:"ext:阳光包/audio:2",   
             filterTarget:function(card,player,target){
                if(target.hasSkill("lyzyouxun2")) return false;
				return player.canCompare(target);
		     },
			 filter:function(event,player){
			    if(player.hasSkill("lyzyouxun3")) return false;
				return player.countCards("h")>0;
			 },
			 content:function(){
			    "step 0"
			    var chat=["两只老虎爱跳舞～","One,Two,Three,FIRE!"].randomGet();
                player.chat(chat);
			    target.addTempSkill("lyzyouxun2");
			    "step 1"
			    player.chooseToCompare(target);
			    "step 2"
			    if(result.bool){
			        player.damage("fire",target);
			        player.addTempSkill("lyzyouxun3");
			    }
			    else {			
			        player.gainPlayerCard(target,"hej");
			        target.damage("thunder");
			    }
			 },
			 ai:{
                 order:7,
                 result:{
                    target:function(player,target){
                        return -1;
                     },
                 },
             },
         },
         lyzyouxun2:{},
         lyzyouxun3:{},
		 lyzyinjun:{
		      audio:"ext:阳光包/audio:2",  
		      group:"lyzyinjun4",
		      shaRelated:true,
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(trigger.target,'he',
						[1,trigger.target.countCards('he')],get.prompt('lyzyinjun',trigger.target));
					'step 1'
					if(result.bool&&result.links.length){
						player.logSkill('lyzyinjun',trigger.target);
						if(trigger.target.storage.lyzyinjun2){
							trigger.target.storage.lyzyinjun2=trigger.target.storage.lyzyinjun2.concat(result.links);
						}
						else{
							trigger.target.storage.lyzyinjun2=result.links.slice(0);
						}
						game.addVideo('storage',trigger.target,['lyzyinjun2',get.cardsInfo(trigger.target.storage.lyzyinjun2),'cards']);
						trigger.target.addSkill('lyzyinjun2');
						trigger.target.storage.lyzyinjun3=player;
						trigger.target.lose(result.links,ui.special,'toStorage');
					}
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)>0||!player.isPhaseUsing()) return false;
						if(tag=='directHit_ai') return arg.target.hp>=Math.max(1,arg.target.countCards('h')-1);
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},		      
		 },
		 lyzyinjun2:{
				trigger:{global:'phaseEnd'},
				forced:true,
				audio:false,
				mark:true,
				charlotte:true,
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							game.log(storage,'被置入了弃牌堆');
						 storage.length=0;
						}
					},
				},
				content:function(){
				    "step 0"
				    if(player.storage.lyzyinjun3){
				         var target=player.storage.lyzyinjun3;
				         event.target=target;
				         target.chooseCardButton('选择获得一张牌',player.storage.lyzyinjun2);
				    }
				    "step 1"
				    if(result.bool){
				          event.target.gain(result.links[0],'draw2','log','fromStorage');
						  player.storage.lyzyinjun2.remove(result.links[0]);
						  player.syncStorage('lyzyinjun2');
				    }
				    "step 2"
					if(player.storage.lyzyinjun2&&player.storage.lyzyinjun2.length>0){
						player.gain(player.storage.lyzyinjun2,'fromStorage');						
					}
					delete player.storage.lyzyinjun2;
					player.removeSkill('lyzyinjun2');
				},
			},
            lyzyinjun4:{
				trigger:{source:'damageBegin1'},
				forced:true,
				locked:false,
				logTarget:'player',
				audio:"lyzyinjun",
				filter:function(event,player){
					var target=event.player;
					return player.countCards('h')>=target.countCards('h')&&target!=player;
				},
				content:function(){
					trigger.num++;
				},
			},
		 lyzmingbu: {
			group: 'lyzmingbu_use',
			audio:"ext:阳光包/audio:2",  
		 	trigger: {
		 		global: 'gameStart'
		 	},
		 	direct:true,
		 	content: function() {
		 		'step 0';
		 		/* 创建dialog */
		 		var dialog = ui.create.dialog(false);
		 		/* dialog标题 */
		 		dialog.add('请任意输入至多五个字符');
		 		/* dialog.add方法只接受div，而不是input */
		 		var div = document.createElement('div');
		 		/* 创建input并添加到div里 */
		 		var input = div.appendChild(document.createElement('input'));
		 		/* 输入最多5个字符 */
		 		input.setAttribute('maxlength', '5');
				/* input内按键不继续冒泡*/
				input.addEventListener('keydown', e => {
					e.stopPropagation();
				});
				input.addEventListener('keyup', e => {
					e.stopPropagation();
				});
		 		/* 输入前的提示 */
		 		input.placeholder = '请输入武将名';
		 		/* dialog添加div */
		 		dialog.add(div);
		 		/* 把dialog，input加入event,让下一步骤的技能可调用dialog */
		 		event.dialog = dialog;
		 		event.input = input;
		 		'step 1'
		 		/* 获取上一步骤的dialog */
		 		
		 		var dialog = event.dialog;
                var input = event.input;
		 		
		 		var clickFun = () => {
		 			/* 移除dialog */
		 			dialog.remove();
		 			/* value是输入框里的值 */
		 			var value = input.value;
		 			/* 保存到player.storage中 */
		 			player.storage.lyzmingbu = [...value].map((item, index) => value.charCodeAt(index));
		 			/* 判断隐藏效果 */
		 			switch (input.value) {
		 				case [39532, 24517, 23453].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("qiaosi");
		 					player.addSkill("xinfu_jingxie1");
		 					break;
		 				case [23453, 24517, 26114].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("kaikang");
		 					break;
		 				case [40657, 30333, 26080, 24120].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("drlt_jieying");
		 					player.addSkill("drlt_poxi");
		 					break;
		 				case [20108, 39740, 25293, 38376].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("reshuishi");
		 					player.addSkill("stianyi");
		 					player.addSkill("resghuishi");
		 					break;
		 				case [25805, 20316, 22411, 27494, 23558].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("nzry_chenglve");
		 					player.addSkill("nzry_shicai");
		 					player.addSkill("nzry_cunmu");
		 					break;
		 				case [29359, 22823, 21556, 30086, 22303].map(item => String.fromCharCode(item)).reduce((accumulator, item) =>
		 					accumulator + item):
		 					player.addSkill("spwuku");
		 					player.addSkill("spsanchen");
		 					break;
		 				case [38393, 22815, 20102, 27809, 26377].map(item => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item):
		 					var name = ['guding', 'jiu', 'sha', 'tiesuo'];
		 					for (var cardName of name) {
		 						var card = get.cardPile(card => {
		 							if (cardName != 'sha') return card.name == cardName;
		 							return card.name == cardName && card.nature == 'fire';
		 						}, 'field');
		 						if (card) {
		 							player.gain(card, 'gain2', 'log');
		 						}
		 					}
		 					break;
		 			}
		 			/* 继续游戏 */
		 			game.resume();
		 		}
		 		/* 如果是ai */
		 		if (!event.isMine()) {
		 			/* 给予ai透视 */
		 			var list = game.players
		 				.filter(item => !item.isFriendsOf(player) && item != player)
		 				.map(item => (lib.translate[item.name] || '').replace(/[神,界,OL,手杀,sp]/g, '') );
		 
		 			var str = list.reduce((accumulator, item) => {
		 				for (var i = 0; i < item.length; i++) {
		 					if (!accumulator.includes(item[i])) return accumulator + item[i];
		 				}
		 			}, '');
		 
		 			/* 输入框赋值 */
		 			input.value = str.slice(0, 5);
		 			/* 然后执行clickFun*/
		 			clickFun();
		 		} else {
		 			/* 显示dialog */
		 			dialog.open();
		 			/* 暂停游戏 */
		 			game.pause();
		 			/* 输入结束后点击确定 */
		 			var button = ui.create.control('确定', () => {
		 				if(!input.value){
		 				  return alert('输入不能为空');
		 				  }
		 				/*移除button */
		 				button.remove();
		 				clickFun();
		 			});
		 		}
		 	},
			subSkill: {
				use: {
					sub: true,
					usable: 1,
					enable: 'phaseUse',
					filter: function(event, player, name) {
						var disCardNum = Math.ceil(player.storage.lyzmingbu.length / 2);
						return Array.isArray(player.storage.lyzmingbu) && player.countCards('he') >= disCardNum;
					},
					audio:"lyzmingbu",
					content: function() {
						'step 0'
						var disCardNum = Math.ceil(player.storage.lyzmingbu.length / 2);
						player.chooseToDiscard(disCardNum);
						'step 1'
						if (result.bool) {
							var strList = player.storage.lyzmingbu.map(item => String.fromCharCode(item)).reduce((accumulator, item) => accumulator + item);
							game.countPlayer(function(current) {
								if (current == player) return;
								var name = lib.translate[current.name] || '';
								var name1 = lib.translate[current.name1] || '';
								var name2 = lib.translate[current.name2] || '';
								/* 数组去重 */
								var nameList = Array.from(new Set([...name, ...name1, ...name2]));
								if (nameList.some(item => {
										return strList.includes(item);
									})) {
									current.loseHp();
									current.addTempSkill('baiban');
								}
							});
						}
					},
				},
			}
		 },
    
    
    
     },
         
         
         translate:{
            
            //分组部分
            "lyz_shen":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_shen.png" width="91" height="21">',
            "lyz_wei":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_wei.png" width="91" height="21">',
            "lyz_shu":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_shu.png" width="91" height="21">',
            "lyz_wu":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_wu.png" width="91" height="21">',
            "lyz_qun":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_qun.png" width="91" height="21">',
            "lyz_caidan":'<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao_caidan.png" width="43" height="21">',
             
             
            //武将部分
            "lyz_shen_diaochan":"☼神貂蝉",
            "lyz_shen_zhangliao":"☼神张辽",
            "lyz_shen_gaodayihao":"☼高达一号",
            "lyz_zhugeliang":"☼诸葛亮",
            "lyz_mayunlu":"☼马云騄",
            "lyz_zhouyu":"☼周瑜",
            "lyz_shen_lvbu":"☼神吕布",
            "lyz_lingju":"☼灵雎",
            "lyz_caiwenji":"☼蔡文姬",
            "lyz_zhenji":"☼甄姬",
            "lyz_daqiao":"☼大乔",
            "lyz_xiaoqiao":"☼小乔",
            "lyz_sunshangxiang":"☼孙尚香",
            "lyz_huangyueying":"☼黄月英",
            "lyz_simayi":"☼司马懿",
            "lyz_guojia":"☼郭嘉",
            "lyz_machao":"☼马超",
            "lyz_huatuo":"☼华佗",
            "lyz_caojie":"☼曹节",
            "lyz_caocao":"☼曹操",
            "lyz_liubei":"☼刘备",
            "lyz_sunjian":"☼孙坚",
            "lyz_zhangjiao":"☼张角",
            "lyz_zhangchunhua":"☼张春华",
            "lyz_luxun":"☼陆逊",
            "lyz_shen_simayi":"☼神司马懿",
            "lyz_zhangxingcai":"☼张星彩",
            "lyz_diaochan":"☼貂蝉",
            "lyz_shen_zhouyu":"☼神周瑜",
            "lyz_yangguangweiliang":"阳光微凉",
            "lyz_zhangfei":"☼张飞",
            "lyz_yjlgt":"遗计两个桃",
            "lyz_guanyu":"☼关羽",
            "lyz_guanyinping":"☼关银屏",
            "lyz_xunyu":"☼荀彧",
            "lyz_zhangliao":"☼张辽",
            "lyz_xinxianying":"☼辛宪英",
			"lyz_shijian": "诗笺",
			"lyz_lvlingqi":"☼吕玲绮",
			"lyz_zuoci":"☼左慈",
			"lyz_jiaxu":"☼贾诩",
			"lyz_sunce":"☼孙策",
			"lyz_ziyu":"子鱼",
			"lyz_xusheng":"☼徐盛",
			"lyz_bulianshi":"☼步练师",
            "lyz_xuedaoshaozhu":"血刀少主",
            "lyz_shen_zhenji":"☼神甄姬",
            "lyz_shen_zhugeliang":"☼神诸葛亮",
            "lyz_nanxun":"南尋",
            "lyz_shen_guanyu":"☼神关羽",
            "lyz_wangyi":"☼王异",
            "lyz_zhaoyun":"☼赵云",
            
            //技能部分
            lyzyuhun:"驭魂",
            lyzyuhun2:"驭魂",
            "lyzyuhun_info":"出牌阶段限一次，你可将武将牌翻面并跳过本回合的弃牌阶段，若如此做，你将一名其他角色的下回合改为由你操控。当一名角色的回合结束时，若你的武将牌背面向上，你摸一张牌。",         
            lyzhuanmei:"幻魅",
            "lyzhuanmei_info":"锁定技，回合开始时，你从五张未登场的女性武将牌中选择获得至多两个技能直至你下回合开始。",
            lyzyuepo:"月魄",
            "lyzyuepo_info":"锁定技，当你进入濒死状态时，你弃置所有手牌（至少一张）并回复1点体力；当你脱离濒死状态时，你令一名其他角色获得以下技能中的一个：〖崩坏〗、〖无谋〗、〖仇海〗、〖缠怨〗。",
            lyzcuifeng:"摧锋",
            "lyzcuifeng_info":"出牌阶段限一次，你可与一名其他角色拼点：若你赢，你选择该角色武将牌上的一个可获得的技能，令此技能失效直至其下回合结束，然后你获得此技能。",
            "lyzcuifeng2":"摧锋",
            "lyzcuifeng2_info":"",
            lyzxiasha:"諕杀",
            "lyzxiasha_info":"准备阶段开始时，你可弃置至多X名角色区域里的一张牌；结束阶段开始时，你可视为对至多X名其他角色使用一张雷【杀】（X为你已损失的体力值）。",
            "lyzxiasha2":"諕杀",
            "lyzxiasha2_info":"",
            lyzzhijue:"制决",
            "lyzzhijue_info":"当你拼点后，你可获得拼点牌中点数大的一张；当你对其他角色造成伤害后，你可令其变更武将牌。",
            lyzjuejing:"绝境",
            "lyzjuejing_info":"锁定技，你始终跳过摸牌阶段，你的手牌数始终为4。",
            lyzlonghun:"龙魂",
            "lyzlonghun_info":"锁定技，你可将至多两张同花色的牌按以下规则使用或打出：红桃当【桃】；方块当火【杀】；梅花当【闪】；黑桃当【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1，若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。",          
            lyzzhanjiang:"斩将",
            "lyzzhanjiang_info":"准备阶段开始时，你可将【青釭剑】置入你的装备区并替换原装备。",
            lyzwendao:"问道",
            "lyzwendao_info":"锁定技，每回合限两次，当你使用基本/锦囊牌后，你获得一张锦囊/基本牌；当你使用一张非基本牌后，本回合你的手牌上限+1（至多+2）。",
            lyzzhaoce:"昭策",
            "lyzzhaoce_info":"出牌阶段限一次，你可选择一个已记录的势力并从该势力五张未登场的武将牌上选择一个技能，然后你可令一名角色失去上次以此法获得的技能并获得此技能。每轮游戏开始时或当你受到伤害后，你依序在〖昭策〗中记录如下势力：蜀、群、吴、魏、神。",
            lyzkuitian:"窥天",
            "lyzkuitian_info":"出牌阶段限一次，你可进行判定，然后选择一项：获得生效后的判定牌；或弃置一张与判定结果颜色相同的牌，若此牌为红/黑色，你令至多两名角色处于“狂风”/“大雾”状态直至你下回合开始。",          
            lyzjingxing:"景星",
            "lyzjingxing_info":"锁定技，每轮游戏开始时或有角色死亡后，你记录一种花色；准备阶段，你可移去记录的一种花色，然后获得〖芳魂〗或〖铁骑〗。你的手牌上限+X，你计算与其他角色的距离-X（X为你记录的花色数）。",
            lyzfengyi:"凤逸",
            "lyzfengyi_info":"当你使用基本牌或普通锦囊牌指定其他角色为目标时/成为其他角色使用基本牌或普通锦囊牌的目标时，若此牌的花色在/不在〖景星〗的记录中，则你可进行判定，若结果为红色，此牌不可被响应/对你无效。",
            lyzlingxiang:"凌骧",
            "lyzlingxiang_info":"每回合每种牌名限一次，当你使用带伤害标签的牌指定其他角色为目标后，你可观看一名目标角色的手牌，然后令此牌的伤害值至多+X并摸Y张牌（Y为其拥有你记录花色的手牌数-此次你选择的加伤值，至少为0）。",
            "fanghun_lyz_mayunlu":"芳魂",
            "fanghun_lyz_mayunlu_info":"当你使用【杀】或成为【杀】的目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。",
            "tieqi_lyz_mayunlu":"铁骑",
            "tieqi_lyz_mayunlu_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            lyzxinlve:"心略",
            "lyzxinlve_info":"锁定技，准备阶段开始时或当你受到伤害后，你摸两张牌并可展示任意张手牌，若这些牌包含的花色数:不小于1，你弃置一名角色区域里的一张牌; 不小于2,你横置至多两名角色; 不小于3,你将展示的牌交给一名其他角色并回复1点体力,然后令其回复或失去1点体力。", 
            lyzyanjie:"焰劫",
            "lyzyanjie_info":"每名角色限一次，结束阶段开始时，你可对一名其他角色造成X点火焰伤害并获得其区域里的等量张牌（X为本局中其累计获得过你牌数量的一半，向下取整且至少为1）。",            
            lyzfengyin:"凤吟",
            "lyzfengyin_info":"锁定技，你计算与其他角色的距离-X；其他角色计算与你的距离+X（X为你已损失的体力值且至少为1）。",             
            lyzkuipo:"溃魄",
            "lyzkuipo_info":"锁定技，当你对其他角色造成伤害后，你废除其一个随机的装备栏，若其装备栏均已被废除，改为其减1点体力上限。",
            lyznuozhan:"搦战",
            "lyznuozhan_info":"锁定技，游戏开始时，你令三名其他角色（若人数不足则改为所有其他角色）获得“英”；有“英”的角色于其出牌阶段可多使用一张【杀】。",
            lyzzhenguan:"镇关",
            "lyzzhenguan_info":"使命技，当你对有“英”的角色造成伤害后，移去其“英”。成功：当场上最后一枚“英”被移去后，你获得〖极武〗和〖溃魄〗。失败：当你进入濒死状态时，你将体力回复至体力上限，然后获得〖无谋〗和〖利驭〗。",
            lyzxiaohu:"虓虎",
            "lyzxiaohu_info":"锁定技，你不能成为延时锦囊牌的目标。准备阶段和结束阶段开始时，你摸X张牌。当你受到伤害时，你可弃置一张非基本牌并令此伤害-1（X为你已损失的体力值+1）。",
            lyznewjiwu:"极武",
			"lyznewjiwu_info":"出牌阶段，你可弃置一张牌，然后获得以下技能中的一个直至回合结束：〖强袭〗、〖铁骑〗、〖旋风〗、〖完杀〗。",
            lyzwuren:"舞刃",
            "lyzwuren_info":"准备阶段开始时或当你受到伤害后，你可视为对一名攻击范围内的角色使用任意一种【杀】，若此【杀】造成了伤害，你摸一张牌。",
            lyzhongshang:"红殇",
            "lyzhongshang_info":"锁定技，当一名其他角色进入濒死状态时，你回复1点体力并随机获得牌堆里的一张红色牌；当有角色死亡后，你依序获得如下效果之一：1.摸牌阶段摸牌数和手牌上限+1；2.计算与其他角色的距离-1；3.对其他角色造成的伤害+1。",
            lyzchengxin:"澄心",
            "lyzchengxin_info":"出牌阶段限一次，你可令一名角色摸两张牌，然后其进行判定，若结果为：1.红色，其回复1点体力；2.黑色，其复原武将牌；3.基本牌，其获得一张【桃】；4.非基本牌，其获得一张【无懈可击】；5.点数为A或K，你令其获得〖悲歌〗或〖默识〗。",
            lyzfuqing:"赋情",
            "lyzfuqing_info":"当一名角色受到伤害后，你可摸一张牌（若你已受伤则改为摸两张牌），然后交给其至少一张牌。",
            lyzlingbo:"凌波",
            "lyzlingbo_info":"准备阶段开始时或当你受到伤害后，你可移动场上一张牌。出牌阶段限一次，你可令一名有牌的角色展示一张手牌并将之交给另一名角色，若此牌为红桃，你回复1点体力。",
            lyzqingge:"清歌",
            "lyzqingge_info":"锁定技，任一角色的回合结束后，若你于此回合获得或失去过牌，你摸一张牌。",
            lyzshenhuang:"神惶",
            "lyzshenhuang_info":"每回合限两次，你可将两张手牌当任一基本牌使用或打出。若你以此法使用牌对应的实体牌中包含：红色牌，你复原武将牌；黑色牌，你摸一张牌。", 
			lyzjinghong:"惊鸿",
			"lyzjinghong_info":"锁定技，每轮限四次，当其他角色使用或打出的名称字数为X的非转化实体牌结算完毕即将进入弃牌堆时，你获得之；准备阶段和结束阶段，你重新声明X的值；出牌阶段开始时，你随机获得一张名称字数为X的牌；（X初始为2，取值区间为1至5）。",
			lyzjinghong2:"惊鸿",
			lyzjinghong3:"惊鸿",
			lyzjinghong4:"惊鸿",
            lyzyurong:"玉容",
            "lyzyurong_info":"出牌阶段限X次，你可选择一项：1.将一张方块牌当作【乐不思蜀】置入一名其他角色的判定区，然后摸一张牌；2.交给一名其他角色一张红桃牌，然后其将一张手牌当作【无中生有】对你使用；3.弃置一张梅花牌并令一名其他角色弃置三张牌；4.交给一名其他角色一张黑桃牌，然后其摸一张牌并将武将牌翻面（X为你已损失的体力值+1）。",
            "lyzyurong2":"玉容",
            "lyzyurong2_info":"",
            lyzfuhua:"浮华",
            "lyzfuhua_info":"当你成为红色非装备牌的目标时/受到1点伤害后，你可选择一项：摸一张牌；或摸两张牌，然后交给此牌使用者/伤害来源一张牌。",
            lyzfangze:"芳泽",
            "lyzfangze_info":"当一名角色的回合开始时，你可交给其至多三张牌（若为你则改为须摸两张牌），然后观看其手牌并弃置其区域里至多等量的牌，若此次弃置的牌来自其：手牌区，你可令其摸两张牌；装备区，你可令其回复1点体力且本回合使用牌无距离与次数限制。",
            lyzfumeng:"浮梦",
            "lyzfumeng_info":"锁定技，当你受到伤害后，你摸两张牌，然后若伤害来源的手牌数不小于你，防止你本回合受到的所有伤害；你的手牌上限+X（X为你的体力值）。",
            lyzbeiwu:"备武",
            "lyzbeiwu_info":"锁定技，你于以下时机获得1枚“武”：你的回合开始时；当你受到1点伤害后；当你使用的装备牌结算完成后。若你的“武”数量不小于2，你视为拥有〖枭姬〗。",
            lyzjiaogong:"娇弓",
            "lyzjiaogong_info":"出牌阶段，你可移去1枚“武”，视为使用一张无距离限制的【杀】；当你使用【杀】指定目标后，你可移去1枚“武”并获得其一张牌；当你造成伤害时，你可移去1枚“武”并令此伤害+1。",
            lyzzhiying:"智映",
            "lyzzhiying_info":"任一角色的结束阶段开始时，你可视为使用一张该角色于此回合出牌阶段内使用过普通锦囊牌（你以此法使用的牌无距离限制），若此牌造成了伤害，则你回复1点体力。",
            lyzjinxin:"锦心",
            "lyzjinxin_info":"准备阶段开始时或当你受到伤害后，你可选择一项：1.将牌堆或弃牌堆里的一张【八卦阵】或【木牛流马】置入一名角色的装备区并替换原装备；2.弃置一名角色装备区的防具和宝物；3.摸一张牌。",
            lyzyinfeng:"隐锋",
            "lyzyinfeng_info":"锁定技，你不能被翻面或横置，且不能成为延时锦囊牌或其他角色拼点的目标。当你受到伤害后，防止你受到的所有伤害直至你下回合开始。",
            lyztaohui:"韬晦",
            "lyztaohui_info":"锁定技，出牌阶段开始时，你摸X张牌，你的手牌上限+X（X为游戏轮数且至多为5）。",
            lyzchouji:"筹疾",
            "lyzchouji_info":"每回合每项限一次，当你的体力值变化后，你可选择至多两名其他角色，然后执行一项：视为对这些角色使用一张合法的普通锦囊牌；或令这些角色依次获得牌堆里一张由你指定牌名的锦囊牌（若牌堆里没有你声明的牌，则改为其摸一张牌）。",
            lyzmingfu:"命缚",
            "lyzmingfu_info":"锁定技，出牌阶段开始时，若你已受伤，则你回复1点体力，否则你失去1点体力；当你进入濒死状态时，你可令一名其他角色获得〖遗计〗。",
            lyztianwei:"天威",
            "lyztianwei2":"天威",
            lyztianwei3:"天威",
            "lyztianwei3_info":"",
            "lyztianwei_info":"锁定技，当你使用带伤害标签的牌指定其他角色为目标后，你令其防具和技能失效直至回合结束。每回合限一次，当你造成伤害后，你摸两张牌且本回合使用牌无距离和次数限制。",
            lyzxiaohun:"骁魂",
            "lyzxiaohun_info":"你可将一张非基本牌当【杀】或【决斗】使用或打出，你以此法使用红色转化牌的伤害值+1。",
            lyzqinggu:"清骨",    
            lyzqinggu_info:"出牌阶段限一次，你可弃置一张带伤害标签的牌或装备牌并对一名角色造成1点伤害，若弃置的是武器牌，则改为对至多X名角色各造成1点伤害（X为该武器牌的攻击范围且至少为1）；当一名角色受到伤害后，若伤害来源为你，则你可令其回复2点体力。", 
            lyzhuomai:"活脉", 
            lyzhuomai_info:"锁定技，当一名角色受到伤害时，若其没有“淤”，则其获得“淤”；当一名角色回复体力后，你可令其移去“淤”并与其各摸一张牌。",  
            lyztiantong:"天通",
            lyztiantong_info:"限定技，当一名角色进入濒死状态时，你可令其依次执行以下操作：1.加1点体力上限；2.将体力回复至体力上限；3.复原武将牌；4.废除判定区；5.恢复所有装备栏。",
            lyzmafei:"麻沸",
            "lyzmafei_info":"当一名角色的回合开始时，你可弃置X张牌并令其将体力回复至体力上限（至多回复至5），然后其跳过本回合的出牌阶段和弃牌阶段（X为你对其发动过〖麻沸〗的次数且至少为1）。",
            lyzwuqin:"五禽",
            "lyzwuqin_info":"准备阶段开始时，你可选择一名角色，令其回复1点体力并摸一张牌，若其于上回合成为过此技能的目标且于上回合未以此法增加过体力上限，则其加1点体力上限。",
            lyzbabei:"霸北",
            "lyzbabei_info":"准备阶段开始时，你可从你和你攻击范围内的角色中选择至多两名，然后依次获得这些角色区域里的一张牌。结束阶段开始时，你可对一名体力值不大于你的其他角色造成1点伤害。",
            "lyztianfu2":"天负",
            lyztianfu:"天负",
            "lyztianfu_info":"主公技，出牌阶段限一次，你可与一名暗置身份牌的角色拼点：若你赢，其亮出身份牌，若为忠臣，你获得其区域里的两张牌，否则你对其造成1点伤害；若你没赢，你获得〖奸雄〗直至你下回合开始。",
            lyzlongjie:"龙劫",
            "lyzlongjie_info":"主公技，限定技，当一名忠臣死亡后，你可回复1点体力并选择一项：获得其武将牌上的所有技能；或从六张未登场的蜀势力武将牌上选择获得至多两个技能。",
            lyzzhaoren:"昭仁",
            "lyzzhaoren_info":"转换技，出牌阶段限一次，阳：你可交给一名其他角色任意张牌。阴：你可获得一名其他角色区域里的至多两张牌。结束阶段开始时，你摸等同于此回合出牌阶段以此法交出或获得牌数量的牌（至多为4）。",
            lyzyilie:"翊烈",
            "lyzyilie_info":"主公技，限定技，出牌阶段或当你受到伤害后，若你的体力值不大于2，你可令一名不为主公的其他角色增加1点体力上限并摸两张牌，然后其将武将牌替换为“界孙笨”，身份牌替换为忠臣。",
            lyzjinzheng:"尽征",
            "lyzjinzheng_info":"出牌阶段开始时，你可失去1点体力，然后记录一个基本牌或锦囊牌的名称。当你使用与记录名称相同的牌时，你选择一项：摸X张牌；或对一名体力值不小于你的其他角色造成1点伤害（X为你已损失体力值的一半，向上取整，你至多以此法记录四个牌名）。",
            "lyzjinzheng2":"尽征",
            "lyzjinzheng2_info":"",
            lyzluanshi:"乱始",
            "lyzluanshi_info":"当一名角色的出牌阶段开始时，你可令其进行判定，然后你可弃置一张牌，若此牌与判定结果颜色相同，则你对其造成1点雷电伤害，否则其摸两张牌。",
            lyztaiping:"太平",
            "lyztaiping_info":"主公技，结束阶段开始时，你可选择一项：将一名角色的势力变更为群；或令一名群势力角色获得技能〖雷击〗、〖鬼道〗或〖天妒〗。",
            lyzcanqing:"残情",
            "lyzcanqing_info":"当你使用牌指定其他角色为目标后/成为其他角色使用牌的目标后，你可获得一名目标角色/此牌使用者区域里的一张牌，若你以此法获得了黑色或装备牌，则你失去1点体力或交给其一张牌。",
            lyzwanai:"惋哀",
            "lyzwanai_info":"锁定技，回合开始时，你可令一名其他角色获得“哀”（若场上已有“哀”则转移给该角色）。每回合限两次，当有“哀”的角色获得牌后，若其手牌数大于你的体力值，则其弃置多余手牌。",
            "lyzwanai2":"惋哀",
            lyzdingqian:"定谦",
            "lyzdingqian_info":"锁定技，准备阶段开始时或当你受到伤害后，你令一名没有“谦”的其他角色获得“谦”；当有“谦”的角色于其摸牌阶段外获得牌后，若你的手牌数不大于体力上限，你摸一张牌，否则你可重铸一张牌。",
            lyzguilv:"规虑",
            "lyzguilv_info":"出牌阶段开始时，你可与一名其他角色各摸一张牌，若如此做，则出牌阶段结束时，若其手牌数不大于你，你可对其造成1点火焰伤害或与其各回复1点体力。",
            "lyzguilv2":"规虑",
            "lyzguilv2_info":"",
            "lyzguilv3":"规虑",
            "lyzguilv3_info":"",
            lyzchouyi:"筹易",
            "lyzchouyi_info":"锁定技，每轮游戏开始时或当你受到伤害后，你展示牌堆顶一张牌，若点数为偶数，你获得“阳爻”，否则你获得“阴爻”；然后若你已有“阳爻”和“阴爻”，你获得“太初”（每种标记限1枚）。",
            lyztianqian:"天乾",
            "lyztianqian_info":"准备阶段开始时，你可移去“阳爻”并选择一名角色，然后你摸X张牌，此回合手牌上限+X（X为该角色上回合使用过牌的花色数+类别数）。",
            "lyztianqian2":"天乾",
            "lyztianqian2_info":"",
            "lyztianqian3":"天乾",
            "lyztianqian3_info":"",
            lyzdikun:"地坤",
            "lyzdikun_info":"当一名其他角色的出牌阶段开始时，你可移去“阴爻”并声明一种牌的类别，此阶段结束时，若其于此阶段内使用过该类别的牌，则你可令其失去一个技能，否则你加1点体力上限，然后回复1点体力。",
            "lyzdikun2":"地坤",
            "lyzdikun2_info":"",
            lyzguiyuan:"归元",
            "lyzguiyuan_info":"出牌阶段，你可移去“太初”并选择一项：令至多两名其他角色将体力回复至体力上限；或令至多两名其他角色弃置所有牌，然后将体力上限调整至与当前体力值相同。",
            lyzxingxuan:"星旋",
            "lyzxingxuan_info":"每回合限一次，当你使用牌指定其他角色为目标后/成为其他角色使用牌的目标后，你可与其中一名目标角色/此牌使用者交换手牌或装备区里的牌。",
            "lyzxingxuan2":"星旋",
            lyzlingying:"绫缨",
            "lyzlingying_info":"当一名角色的出牌阶段结束时，你可将一张装备牌当作该角色于此阶段内使用过的一张基本牌或普通锦囊牌使用，你以此法使用的牌无距离和次数限制。",
            lyzxianmu:"献穆",
            "lyzxianmu_info":"锁定技，任一角色的回合结束时，你于此回合每满足以下一项便摸一张牌：获得过牌；失去过牌；受到过伤害。然后你可将两张牌交给一名其他角色，若如此做，其复原武将牌，然后你令其视为使用一张无距离限制的任意一种【杀】或【桃】。",
            lyzfengjun:"奉君",
            "lyzfengjun_info":"出牌阶段限一次或当你受到伤害后，你可选择一名有牌的其他角色，然后摸一张牌并与其拼点。当你拼点赢时，你可令一名角色视为拥有〖密诏〗且摸牌阶段多摸一张牌直至其回合结束。",
            lyzfengjun3:"奉君",
            lyzfengjun_damage:"奉君",
            lyzyinghuo:"荧惑",
            "lyzyinghuo_info":"出牌阶段限一次，你可将至少一张带伤害标签的牌交给一名其他角色，然后该角色展示所有手牌，并对你选择的另一名角色依次强制使用其中所有带伤害标签的牌。结算完毕后，若有角色因此受到伤害，则你摸一张牌并回复1点体力。",
            lyzxingyun:"行云",
            "lyzxingyun_info":"锁定技，每轮游戏开始时，你声明一种颜色；当你成为异性角色使用该色牌或同性角色使用非该色牌的目标后，你摸一张牌且手牌上限+1直至你回合结束。",
            "lyzxingyun_draw":"行云",
            "lyzxingyun_draw_info":"",
            lyzningxian:"凝弦",
            "lyzningxian_info":"出牌阶段限一次，你可将一张基本牌或普通锦囊牌置于你的武将牌上，称为“弦”（“弦”的花色和牌名须各不相同）；你的手牌上限+X（X为“弦”的数量）。",
            lyzjueyin:"绝音",
            "lyzjueyin_info":"锁定技，每回合限一次，当你需要使用或打出与“弦”同名的牌时，你可视为使用或打出了此牌，然后若此时是你的回合内，你摸一张牌。",
            "lyzjueyin2":"绝音",
            "lyzjueyin2_info":"",
            "lyzjueyin3":"绝音",
            "lyzjueyin4":"绝音",
            lyzdizui:"涤罪",
            "lyzdizui_info":"出牌阶段限一次，你可将三张“弦”置入弃牌堆并选择一名其他角色，令其立即死亡。",
            lyzzhiguo:"掷果",
            "lyzzhiguo_info":"锁定技，场上女性角色摸牌阶段多摸一张牌；其摸牌阶段结束时，须交给你一张牌并令你回复1点体力，然后你可令其失去或回复1点体力。",
            "lyzzhiguo2":"掷果",
            "lyzzhiguo2_info":"",
            lyzpingfang:"评芳",
            "lyzpingfang_info":"你可于以下时机发动〖评芳〗：准备阶段开始时；出牌阶段限一次；当你受到伤害后。若如此做，你观看随机六张未登场的女性武将牌并选择一张，然后你可用这张牌替换一名其他角色的武将牌。",
            lyzqingyan:"倾颜",
            "lyzqingyan_info":"出牌阶段每名角色限一次，你可失去1点体力或弃置一张【酒】，然后令你或一名女性角色摸三张牌。",
            lyzfengxuan:"锋玄",
            "lyzfengxuan_info":"当你使用黑色牌或成为其他角色使用黑色牌的目标后，你可进行判定：若结果不为红桃，你将判定牌置于武将牌上，称为“锋”。当你使用【杀】指定目标后，你可令攻击范围内至多X名角色也成为此【杀】的目标（X为“锋”的数量）。",
            lyztiansha:"天煞",
            "lyztiansha_info":"出牌阶段，你可将任意张“锋”置入弃牌堆。根据此阶段内累计置入弃牌堆“锋”的数量，如下效果生效直至回合结束：不小于2，其他角色不能使用或打出手牌；不小于3，其他角色的技能失效；不小于4，你摸四张牌，然后使用牌无次数限制。",
            lyzzhidian:"治典",
            "lyzzhidian_info":"准备阶段开始时，你可摸两张牌，然后将两张牌置于武将牌上，称为“典”。当一名角色使用牌时，你可获得一张同类别的“典”并选择一项：令此牌无效；或令其回复1点体力。",
            lyzshulun:"束论",
            "lyzshulun_info":"当一名其他角色的回合开始时，若其上回合未成为过〖束论〗的目标，则你可声明一种牌的类别，令其只能使用或打出该类别的牌直至回合结束。",
            "lyzshulun2":"束论",
            "lyzshulun2_info":"",
            lyzjianji:"检记",
            "lyzjianji_info":"限定技，出牌阶段，你可弃置三张牌，然后令一名其他角色失去X点体力，若你以此法弃置的牌类别均不同且该角色未因此死亡，回合结束时，你令此技能于此局游戏内的发动次数上限+1（X为其体力值）。",
            lyzhongzheng:"虹铮",
            "lyzhongzheng_info":"锁定技，准备阶段开始时或当你造成/受到伤害后，你获得1枚“势”。当你使用【杀】或【决斗】指定唯一目标后，你可为此牌附加『气慑』、『断腕』或『枭首』三种效果之一，然后摸X张牌（X为本次移去“势”的数量）。<br>『气慑』：移去1枚“势”，你观看其手牌并弃置其中一张。<br>『断腕』：移去2枚“势”，你废除其武器栏，然后令其攻击范围为0直至其回合结束。<br>『枭首』：移去3枚“势”，此牌不能被响应且伤害基数改为其当前体力值。",
            "lyzhongzheng2":"虹铮",
            "lyzhongzheng2_info":"",
            lyzxiansheng:"显圣",
            "lyzxiansheng_info":"觉醒技，当你进入濒死状态时，你减1点体力上限并将体力回复至体力上限，然后获得〖武神〗。",
            lyzrongcheng:"戎承",
            "lyzrongcheng_info":"当你使用基本牌后，你可重铸一张牌，然后你可移动场上的一张牌。",
            lyzzhuoji:"灼祭",
            "lyzzhuoji_info":"锁定技，出牌阶段开始时，你视为使用一张不计入次数且无距离限制的火【杀】。当你对装备数小于你的其他角色造成伤害时，此伤害+1。",
            lyznewqiangxi:"强袭",
            "lyznewqiangxi_info":"出牌阶段对每名角色限一次，你可以失去1点体力或弃置一张武器牌，然后对你攻击范围内的一名其他角色造成1点伤害。",
            lyznewtieqi:"铁骑",
            "lyznewtieqi_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            lyznewxuanfeng:"旋风",
            "lyznewxuanfeng_info":"当你于弃牌阶段弃置过至少两张牌，或当你失去装备区里的牌后，你可以弃置至多两名其他角色的共计两张牌。然后若此时是你的回合内，你可以对其中一名角色造成1点伤害。",
            lyznewwansha:"完杀",
            "lyznewwansha_info":"锁定技，你的回合内，①不处于濒死状态的其他角色不能使用【桃】。②当有角色于你的回合内进入濒死状态时，你令你和除该角色之外的其他角色非锁定技失效直到此濒死状态结算结束。",
            lyzwangzuo:"王佐",
            "lyzwangzuo_info":"锁定技，准备阶段开始时或当你受到伤害后，你摸一张牌并从三张随机的未登场武将牌上选择一个技能，然后你可令一名角色获得此技能直至其回合结束。若其以此法获得的技能来自魏或神势力，则你可令其回复1点体力或摸一张牌。",
            lyzxianshi:"先识",
            "lyzxianshi_info":"每名角色限一次，当一名角色的回合开始时，你可重铸一张牌并令其跳过：1.摸牌阶段和出牌阶段；2.判定阶段和弃牌阶段。",
            lyzxiaoran:"萧然",
            "lyzxiaoran_info":"觉醒技，当你进入濒死状态时，你将体力回复至体力上限并重置〖先识〗记录的角色，然后你失去〖王佐〗，获得〖困奋〗。",
            lyznewkunfen:"困奋",
            "lyznewkunfen_info":"锁定技，结束阶段开始时，你失去1点体力，然后摸两张牌。",
            lyzliaolai:"辽来",
            lyzliaolai_info:"锁定技，体力值不小于你的其他角色不能响应你使用的牌。当你对其他角色造成伤害后，若其手牌或装备数不小于你，则你获得其区域里的一张牌。",
            lyzshepo:"慑魄",
            lyzshepo_info:"出牌阶段限一次，你可视为对一名其他角色强制使用一张雷【杀】或【决斗】（若其体力值小于你，则你须先失去1点体力），若你以此法对其造成了伤害，则其跳过下个出牌阶段。",
            lyzshepo2:"慑魄",
            lyztaoming:"韬明",
            "lyztaoming_info":"出牌阶段限一次或当你受到伤害后，你可选择一名其他角色并弃置X张手牌，若如此做，你令其展示所有手牌，然后你将其中至少一张花色不同的牌交给等量的除该角色外的角色（X为你与其手牌数之差且至多为3）。",
            lyzcaiqing:"才清",
            "lyzcaiqing_info":"锁定技，每回合每类牌限一次，当你不因使用而失去手牌后，你可令一名角色从牌堆里获得一张此次失去牌中所含类别的牌。任一角色的回合结束后，若你于此回合至少发动了两次〖才清〗，则你可摸一张牌或回复1点体力。",
			"lyzpianwu": "翩舞",
			"lyzpianwu_info": "特殊效果：你的技能不会被失去和无效。锁定技，当你受到伤害后，造成伤害时，回合结束时随机创建一个触发技能，然后你可以选择一名其他角色是否将新生成的技能赠与其，否则自己获得这个技能。",
			lyzzhanmo:"战陌",
			"lyzzhanmo_info":"锁定技，当你使用有目标的基本牌或普通锦囊牌时，若你：体力值为1或2，你对一名其他角色造成1点雷电伤害；装备区没有牌，你令此牌结算两次。",
			lyzyoulin:"犹凛",
			"lyzyoulin_info":"锁定技，出牌阶段开始时，你弃置所有装备牌，然后废除一个装备栏并选择一项：①本阶段你使用【杀】的次数和额定目标数+1；②你横置任意名角色；③你计算与其他角色的距离-1。结束阶段，你摸等同于你已废除装备栏数量的牌。",
			lyzoldchenju:"尘局",
			"lyzoldchenju_info":"锁定技，游戏开始时，随机将场上角色数一半（向下取整）的其他角色归为A类，剩余的其他角色归为B类，两类角色各随机获得一项效果；每轮游戏开始时，刷新两类角色的效果。你的回合开始时或当你受到伤害后，你可选择一项：改变一名其他角色的分类；或刷新一类角色的效果。<br>可获得的效果如下：<br>1.造成/受到的伤害+1；<br>2.手牌上限+1/-1；<br>3.计算与其他角色的距离-1/+1；<br>4.摸牌阶段额定摸牌数+1/-1；<br>5.只能对同类/异类角色使用牌。",
			lyzoldchenju2:"尘局",
			lyzoldchenju3:"尘局",
			lyzoldchenju4:"尘局",
			lyzchuiweng:"垂瓮",
			"lyzchuiweng_info":"出牌阶段限一次，你可令一名角色从牌堆或弃牌堆中获得其手牌中缺失类别的各一张牌。若其以此法获得了至少两张牌，则你回复1点体力。",
            lyzchuiweng2:"垂瓮",
			lyzjiansha:"谏杀",
			"lyzjiansha_info":"出牌阶段限一次或当你受到伤害后，你可摸一张牌，然后可将一张带伤害标签的牌交给一名其他角色并可视为使用一张同名牌（无距离和次数限制）。",
			lyzyinlan:"引澜",
			"lyzyinlan_info":"当一名其他角色使用带伤害标签的牌指定唯一目标时，你可选择一项：交给其一张红色手牌，然后为此牌额外指定一个目标；或交给其一张黑色手牌，然后令此牌的伤害值+1。",
			lyzminwei:"泯微",
			"lyzminwei_info":"锁定技，当你于回合外成为一类牌的目标后，你摸一张牌且本回合不处于濒死状态的你不能再成为此类牌的目标。",
			lyzaolie:"傲烈",
			"lyzaolie_info":"锁定技，回合开始时，你回复1点体力并摸一张牌，然后若你的体力上限小于4，你加1点体力上限。当你使用带伤害标签的牌指定目标后或成为带伤害标签的牌的目标后，你摸一张牌，若此次使用或被使用的牌不为红色，你不能再以此法摸牌直至回合结束。",
			lyzdingjiang:"定疆",
			"lyzdingjiang_info":"使命技，当你造成1点伤害后，你获得1枚“疆”。成功：准备阶段开始时，若你拥有3枚“疆”或更多，则你摸等同于“疆”数量的牌，然后选择并获得以下技能中的两个：〖英霸〗、〖荡魔〗、〖英姿〗、〖破军〗、〖魄袭〗。失败：当你进入濒死状态时，你将体力回复至1点，然后获得〖英魂〗。",
			lyzbalve:"霸略",
			"lyzbalve_info":"主公技，游戏开始时，你加1点体力上限，然后若你拥有技能〖定疆〗，则你获得1枚“疆”。",
			lyzpojun2:"破军",
			"lyzpojun2_info":"",
			lyzpojun3:"破军",
			"lyzpojun3_info":"",
			lyzchenju:"尘局",
			"lyzchenju_info":"锁定技，你于以下时机从五张随机的未登场的武将牌上选择一个技能：游戏开始时；准备阶段；结束阶段；当你受到伤害后。然后你可令一名角色失去上次以此法获得的技能并获得此技能。",
			lyzwangsheng:"往生",
			"lyzwangsheng_info":"出牌阶段限一次，你可令一名已死亡的角色复活并将体力值与体力上限调整为2，然后其失去所有技能并摸两张牌。",
			lyzkezhi:"克止",
			"lyzkezhi_info":"锁定技，你造成或受到的属性伤害+1。当你受到伤害时，你摸等同于此次伤害值数量的牌，然后失去1点体力或减1点体力上限并防止此伤害。",
			lyzyouxun:"诱循",
			"lyzyouxun_info":"出牌阶段每名角色限一次，你可与一名其他角色拼点：若你赢，其对你造成1点火焰伤害且你本回合不能再发动此技能；若你没赢，你获得其区域里的一张牌，然后对其造成1点雷电伤害。",
			lyzyinjun:"阴军",
			"lyzyinjun_info":"当你使用【杀】指定目标后，你可将其任意张牌扣置于其武将牌旁。若如此做，当前回合结束后，你获得这些牌中的一张，其获得剩余的牌。当你对手牌数不大于你的其他角色造成伤害时，此伤害+1。",
			lyzyinjun2:"阴军",
			lyzyinjun3:"阴军",
			lyzyinjun4:"阴军",
			lyzmingbu:"冥簿",
			"lyzmingbu_info":"游戏开始时，你任意输入至多五个字符。出牌阶段限一次，你可弃置X张牌，然后令场上所有姓名中包含该字符的其他角色失去1点体力且本回合技能失效（X为你以此法输入字符数的一半，向上取整）。",
			lyzxinlan:"心澜",
            "lyzxinlan_info":"出牌阶段限一次，你可依次选择两名角色，令前者执行以下一项，然后令后者执行另一项：1.回复或失去体力至与对方相同；2.将手牌补或弃至与对方相同；3.随机使用牌堆里的装备牌或弃置装备区的牌至与对方相同。",
            lyzyanzun:"偃尊",  
            "lyzyanzun_info":"结束阶段或当你受到伤害后，你可展示所有手牌，并根据这些牌所满足的条件依次选择对应项：没有基本牌，你可视为使用一张基本牌；没有锦囊牌，你可视为使用一张普通锦囊牌；没有装备牌，你将牌堆或弃牌堆里的一张装备牌置于你的一个空置装备栏内。结算完毕后，你摸一张牌。", 
			lyzyintian:"淫天",
            lyzyintian_info:"锁定技，准备阶段，你选择一项：将攻击范围内一名男性角色的性别改为女；或将攻击范围内一名女性角色的势力改为神。",
            lyzyudi:"欲地",
            lyzyudi_info:"出牌阶段限一次，你可选择一名女性角色，然后观看其手牌并获得其中所有的红色牌，若你未以此法获得牌，则你可对其造成2点伤害。",
            lyzdianshen:"玷神",
            lyzdianshen_info:"结束阶段，你可弃置一张点数为J的牌并令一名神势力女性角色选择一项：孕，其将手牌补至体力上限，然后将所有手牌交给你；缚，将武将牌翻至背面并横置；凌，减1点体力上限并令你加1点体力上限。",
            lyzrugui:"辱鬼",
            lyzrugui_info:"限定技，当一名女性角色死亡后，你可加1点体力上限并回复1点体力，然后获得其所有牌。",
			lyzqiqing:"祈情",
            lyzqiqing_info:"锁定技，当一名角色的回合开始时，其选择一项：令你此回合受到的伤害-1；或交给你一张牌（若为你则跳过此步骤），然后与一名异性角色各摸一张牌。", 
            lyzshenjiang:"神降",
            lyzshenjiang_info:"出牌阶段限一次，你可从所有名称字数不大于(1)的牌中选择至多(1)张名称字数不同的可使用的牌，然后你按选牌的顺序视为依次合法地使用这些牌。",
            lyzdianchuan:"点川",
            lyzdianchuan_info:"锁定技，出牌阶段结束时，你选择一项：摸一张牌；或将一张牌置于武将牌上并于本回合结束时获得之。结束阶段，你令〖神降〗中所有括号内的数字+2（至多为5）。",
            lyzdianchuan2:"点川",
            lyzdouzhuan:"斗转",
            lyzdouzhuan_info:"出牌阶段限一次，你可选择一名角色，若其没有“阵”，则其获得“阵”，否则其移去“阵”（有“阵”的角色称为阵列角色）。",            
            lyzzhen:"阵",
            lyzxingsuo:"星锁",
            lyzxingsuo_info:"锁定技，非阵列角色不能响应阵列角色使用的带伤害标签的牌。当非阵列角色：①受到伤害时，若其上下家均为阵列角色且不为同一角色，则此伤害+1；②使用带伤害标签的牌指定阵列角色为唯一目标时，其需弃置一张牌，否则此牌无效。",
            lyzxingsuo2:"星锁",
            lyzxingsuo3:"星锁",
            lyztianji:"天汲",
            lyztianji_info:"每轮游戏限一次，当一名其他角色的回合结束后，你可减1点体力上限并进行一个额外的回合。在你的额外回合内，你于摸牌阶段多摸一张牌且跳过弃牌阶段。",
            lyzdingzheng:"订正",
            lyzdingzheng_info:"每回合限两次，当一名其他角色不因此技能使用的仅指定唯一非自身目标的基本牌或普通锦囊牌结算完毕后，若此牌的使用者与目标均存活，则你可弃置一张红/黑色牌并令其视为强制对同一目标再次使用此牌/视为你强制对其使用此牌。",
            lyzshiyi:"释疑",
            lyzshiyi_info:"锁定技，每轮游戏开始时，你选择一名其他角色。当其使用牌时，若此牌与其本回合使用的上一张牌均有颜色且颜色：不同，其摸一张牌；相同，你摸一张牌。",
            lyzhuanxing:"缓行",
            lyzhuanxing_info:"锁定技，当一名其他角色的回合结束后，其须交给你一张牌。你的非首回合开始时，你须选择X名其他角色，然后依次交给这些角色一张牌（X为你的手牌数与场上存活角色数的一半（向下取整）中的较小值）。",
            lyzmingjue:"冥绝",
            lyzmingjue_info:"锁定技，若游戏人数大于3且场上无死亡角色，则你防止受到的所有伤害且跳过弃牌阶段。每回合限一次，当你进入濒死状态时，你将体力回复至1点，然后视为强制使用一张无距离限制的火【杀】，若此火【杀】未造成伤害，你失去1点体力。",
		    lyzyanren:"魇刃",
		    lyzyanren_info:"出牌阶段限一次，你可观看一名其他角色的手牌并弃置其区域里的一至两张同色牌，若为红/黑色，则规定牌名为【杀】/【决斗】；若弃牌数为一/二，则视为你对其/其对你强制使用一张规定牌名的牌。",
		    lyzedao:"噩道",
		    lyzedao_info:"出牌阶段限一次，你可令一名对你造成过伤害的其他角色进行判定，若结果为红/黑色，其称为“饿鬼”/“畜牲”。“饿鬼”的手牌上限-1；“畜牲”受到的属性伤害+1。",
            lyzegui:"饿鬼",
            lyzchusheng:"畜牲",
            lyzzhaojie:"昭节",
            lyzzhaojie_info:"出牌阶段限一次，你可进行一次判定或弃置一张牌，并记录判定牌（弃置牌）的花色。若如此做，则直至你下回合开始，当你使用此花色有目标的基本牌或普通锦囊牌时，你选择一项：①摸一张牌；②弃置一名角色区域里的一张牌。",
            lyzzhaojie_lv1:"昭节·升级lv1",
            lyzzhaojie_lv1_info:"出牌阶段限一次，你可进行一次判定或弃置一张牌，并记录判定牌（弃置牌）的颜色。若如此做，则直至你下回合开始，当你使用此颜色有目标的基本牌或普通锦囊牌时，你选择一项：①摸一张牌；②弃置一名角色区域里的一张牌。",
            lyzzhaojie_lv2:"昭节·升级lv2",
            lyzzhaojie_lv2_info:"出牌阶段限一次，你可进行一次判定或弃置一张牌，并记录判定牌（弃置牌）的颜色。若如此做，则直至你下回合开始，当你使用或被其他角色使用此颜色有目标的基本牌或普通锦囊牌时，你选择一项：①摸一张牌；②弃置一名角色区域里的一张牌。",
            lyzzhaojie_lv3:"昭节·升级lv3",
            lyzzhaojie_lv3_info:"出牌阶段限一次，你可进行一次判定或弃置一张牌，并记录判定牌（弃置牌）的颜色。若如此做，则直至你下回合开始，当你使用或被其他角色使用此颜色有目标的基本牌或普通锦囊牌时，你选择两项：①摸一张牌；②弃置一名角色区域里的一张牌；③令此牌结算两次。",
            lyzyingwu:"颖悟",
            lyzyingwu_info:"剩余可使用9次，出牌阶段/其他角色的回合限一次，你可视为使用一张单目标普通锦囊牌/【无懈可击】；当此技能的使用次数达到3、6、9时，你对〖昭节〗进行第一、二、三次升级。",
		    lyzlinhuang:"鳞煌",
            lyzlinhuang_info:"准备阶段或当你不因使用而失去一次牌后，你获得1枚“心”（至多拥有7枚“心”）。你可于合法时机移去1枚“心”并视为使用一张任意种类的【杀】、【闪】或【无懈可击】。",
            lyzyuwang:"宇望",
            lyzyuwang_info:"出牌阶段每类牌限一次，你可重铸一张牌，然后若此牌为基本/非基本牌，你观看牌堆和弃牌堆里牌名不同的三张基本/四张非基本牌，并获得其中一张。",
		  }
       }
         
		    for(var i in yangguangbao.character){
		       if(lib.config.ygbLutou) yangguangbao.character[i][4].push('ext:阳光包/image/lutou/'+i+'.jpg')
		       else yangguangbao.character[i][4].push('ext:阳光包/image/character/'+i+'.jpg')
		    }
			return yangguangbao;         
        });   
        lib.config.all.characters.push('yangguangbao');		
		//lib.translate['yangguangbao_character_config']='<img src="'+lib.assetURL+'extension/阳光包/image/fenlan/yangguangbao.png" width="78" height="25">';
		lib.translate['yangguangbao_character_config']="阳光包";
    }			 
},
help:{},config:{
    ygbLutou: {
		init: false,
		intro: '开启后本扩展所有武将的插画（含皮肤）将显示为露头插画，需配合扩展“十周年UI”的对应功能使用。',
		name: '露头模式（需重启）',
		onclick:function(item) {
			game.saveConfig('extension_阳光包_ygbLutou',item);
            game.saveConfig('ygbLutou',item);
		},
	},
},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        
        },        
        translate:{
            
        },                                
    },
    intro:"“阳光包”版本：5.7.72<br>☼扩展简介：自制三国武将合集，武将技能均推翻重塑。适用环境：三服全扩，八人军争场。武将强度：平均为半阴级；包内带武将评级，仅代表该武将在本扩展内的强度水平，SSS武将的强度不受限。<br>☼运行环境：①较新的游戏版本；②打开“兼容模式”；③“十周年UI”扩展；④“千幻聆音”扩展。<br>☼扩展说明：①本扩展部分引用了游戏本体武将包的代码，请勿隐藏游戏本体的武将包。②本扩展的更新可能会伴随文件的删减，推荐彻底删除旧版再安装新版。③因语音需求，本扩展部分与原版同名同效果的衍生技能为全新ID的技能，可与原版技能共同存在并在满足条件时分别单独发动。<br>☼鸣谢——<br>代码支持：戒除联盟、诗笺、寰宇星城、微尘、“柚子、奶茶、猫以及面具”、尋。<br>素材支持：〖世海〗资源包、『桤楴』露头包、周子鱼yu、无伤大鸽子、洛神、戴夫、血刀少主、遗计两个桃、尋、可宣、林柒柒。<br>特别感谢所有热爱支持阳光包的玩家们，你们的支持是阳光包更新的最大动力！<br><br>更新说明——<br>（此版本建议删除原扩展并重新导入）<br>1.重塑☼赵云（定位：防御·过牌，评级：SSS）；<br>2.为大部分状态类效果添加charlotte标签；<br>3.为☼甄姬的〖神惶〗限定了次数；<br>4.新增☼甄姬的史诗皮肤“廊下待君”；<br>5.调整☼赵云的插画，并将原插画改为皮肤“烟绚繁星”；<br>6.调整☼马云騄的插画和皮肤；<br>7.为☼神司马懿的皮肤“鉴往知来”补齐语音；<br>8.调整部分武将的插画、文本、配音。",
    author:"阳光微凉",
    diskURL:"",
    forumURL:"",
    version:"5.7.72",
},files:{"character":[],"card":[],"skill":[]}}})