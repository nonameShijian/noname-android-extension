game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"JoJo",content:function (config,pack){      
    lib.cardPack.mode_derivation.push('metallica_card');
    lib.cardPack.mode_derivation.push('dics_cards');
    lib.cardPack.mode_derivation.push('talocard');
    lib.translate.rubbish_actor = '废弃设计武将';
    lib.translate.zhuyueo_append='<h5><span style="color:gold">只有被命运选中之人才配支配这支箭。</span></h5>'    
    //lib.translate._chereacter_cardsonactoer = '武将牌库(特殊)';
    //lib.card.type.push('metal_special');
    lib.translate.metal_special = '金属制品';
    lib.translate.disc_special = '灵魂產物';
    lib.translate.jojo_15_cards = '里苏特涅罗';
    lib.group.push('theboold');
    lib.translate.theboold = '幻影之血';    
    lib.group.push('battletrend');
    lib.translate.battletrend = '战斗潮流';
    lib.group.push('starbattler');
    lib.translate.starbattler = '星辰斗士';    
    lib.group.push('bumianshidiamond');
    lib.translate.bumianshidiamond = '不灭钻石';
    lib.group.push('goldfight');
    lib.translate.goldfight = '黄金之风';    
    lib.group.push('storesea');
    lib.translate.storesea = '石之海';
    lib.translate.jojo_6_boolcar = '爆炸小车';        
    lib.characterSort['mode_extension_JoJo'] = {
        'theboold': ["jojo_22"],
        'battletrend': ["jojo_5"],
        'starbattler': ["jojo_2","jojo_4","jojo_7","jojo_8","jojo_9","jojo_10","jojo_18",
                        "jojo_20","jojo_21","jojo_23","jojo_24","jojo_26","jojo_27",
                        "jojo_28","jojo_29","jojo_30","jojo_31"],
        'bumianshidiamond': ["jojo_3","jojo_6","jojo_25"],
        'goldfight': ["jojo_11","jojo_12","jojo_13","jojo_14","jojo_15"],
        'storesea':["jojo_16","jojo_17","jojo_19"],
        'rubbish_actor':["jojo_1"],
        };
    lib.rank.rarity.legend.push('dio_boss');
    lib.rank.rarity.rare.push('jojo_2');
    lib.rank.rarity.rare.push('jojo_3');
    lib.rank.rarity.rare.push('jojo_4');
    lib.rank.rarity.rare.push('jojo_6');
    lib.rank.rarity.rare.push('jojo_11');
    lib.rank.rarity.rare.push('jojo_13');
    lib.rank.rarity.rare.push('jojo_14');
    lib.rank.rarity.rare.push('jojo_16');
    lib.rank.rarity.rare.push('jojo_18');
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "jojo_1":["male","goldfight",4,["fuhunt","cunheart"],["des:迪亚波罗，日本漫画《JOJO的奇妙冒险：黄金之风》及其衍生作品中的角色。 登场于第61卷至63卷，首次出战于第56卷，但其中并未出现完整的形象。 另一人格——托比欧，则主要登场于58,59,61卷，在那之前只有他人的转述以及回忆等。 (第五部为单行本47卷至63卷。)","ext:JoJo/jojo_1.jpg","die:ext:JoJo/audio/die/jojo_1.mp3"]],
            "jojo_2":["male","starbattler",5,["baijui","ziuyui"],["des:空条承太郎是日本漫画《JoJo的奇妙冒险》中的一个虚构角色，由荒木飞吕彦创作，是该系列第三部的主角，星尘十字军的领导人物，空条承太郎被描述为一个既善良又粗野的不良学生，与他的外祖父乔瑟夫·乔斯达从日本旅行到埃及并与他的同伴击败迪奥·布兰度，拯救他的母亲的生命。","ext:JoJo/jojo_2.jpg","die:ext:JoJo/audio/die/jojo_2.mp3"]],
            "jojo_3":["male","bumianshidiamond",4,["time_stop_3second","spbaijui","yuigui"],["des:空条承太郎是日本漫画《JoJo的奇妙冒险》中的一个虚构角色，由荒木飞吕彦创作，是该系列第三部的主角，星尘十字军的领导人物，空条承太郎被描述为一个既善良又粗野的不良学生，与他的外祖父乔瑟夫·乔斯达从日本旅行到埃及并与他的同伴击败迪奥·布兰度，拯救他的母亲的生命。","ext:JoJo/jojo_3.jpg","die:ext:JoJo/audio/die/jojo_3.mp3"]],
            "jojo_4":["male","starbattler",6,["theworld","fubvtu","time_stop_9second"],["des:迪奥·布兰度是荒木飞吕彦所创作的日本漫画《JoJo的奇妙冒险》中的角色。他是著名的反派角色，也是贯穿整部作品的重要角色。初次登场于系列作第一部《幻影血脉》并担任主要反派、并以DIO之名登场于第三部《星尘斗士》担任主要反派。此外，在其他部中也都有轻重不一的戏份。 ","ext:JoJo/jojo_4.jpg","die:ext:JoJo/audio/die/jojo_4.mp3"]],
            "jojo_5":["male","battletrend",5,["zumuxy","bowin"],["des:乔瑟夫·乔斯达，是荒木飞吕彦创作的漫画《JOJO的奇妙冒险》系列中的角色，第二部《JOJO的奇妙冒险：战斗潮流》的男主角，是第一代JOJO乔纳森·乔斯达的孙子。","ext:JoJo/jojo_5.jpg","die:ext:JoJo/audio/die/jojo_5.mp3"]],
            "jojo_6":["male","bumianshidiamond",4,["fire_boo","second_boo","jurwui"],["des:漫畫JOJO的奇妙冒險中登場的反派人物，為第四部的最終BOSS，同時也是作者特別喜歡的最終BOSS。 與那些有著巨大野心的反派(包括本漫畫第一部與第三部的BOSS-DIO在內)不同，吉良吉影只想過平穩的生活，相對於其他歷代反派，內心的刻畫相對來得多，性格也比較接近一般人。","ext:JoJo/jojo_6.jpg","die:ext:JoJo/audio/die/jojo_6.mp3"]],
            "jojo_7":["male","starbattler",4,["muxhuo","futuo"],["des:阿雷西是迪奥·布兰度派遣的拦截乔瑟夫一行人的替身使者其中之一，与暗示为塔罗牌的替身使者不同，是埃及九荣神中的瑟多神为暗示的替身。"]],
            "jojo_8":["male","starbattler",4,["shenku"],["des:伊奇（Iggy），日本漫畫《JOJO的奇妙冒險：星塵鬥士》及其衍生作品中的角色，“星塵十字軍”的最後一位成員，是一條小波士頓狗。"]],
            "jojo_9":["male","starbattler",4,["zhucaty","cuyuan","jundgyiw"],["des:为寻找杀死妹妹的凶手（倒吊男J·凯尔）而四处旅行，被迪奥·布兰度用肉芽控制后去香港刺杀空条承太郎一行人。在与阿布德尔的替身对决落败被承太郎解除肉芽，遂加入了由承太郎一行人组成的“星尘十字军”，与他们一同远赴埃及。"]],
            "jojo_10":["male","starbattler",4,["yuyuio","yuirunt"],["des:波因哥，日本漫畫《JOJO的奇妙冒險：星塵鬥士》及其衍生作品中的角色，由熊井統子配音，替身為託託神，代表“埃及九榮神”中的“書本之神”。替身外形是一本書，裏面的漫畫能預知即將發生的命運，預言絕對會實現。歐因哥（日語：オインゴ；英語：Oingo）是由荒木飛呂彥所創作的漫畫《JOJO的奇妙冒險》及其衍生作品的登場角色。 簡介. 埃及九榮神的成員之一"]],
            "jojo_11":["male","goldfight",4,["hung_gold","healthy_hp","dujun"],["des:乔鲁诺·乔巴纳幼年时遭受迫害而自暴自弃的他，由于拯救了一名黑帮男子，而学到了“相信他人”。不忘恩义、带着敬意对待自己的黑帮，让他的心变得率直。就这样，他开始对“黑帮明星”怀有憧憬。15岁的他，与统领意大利黑社会的黑帮组织“热情”一同引发事端，并成为被盯上的目标。"]],
            "jojo_12":["male","goldfight",4,["monzui","doubuo"],["des:盖多·米斯达，日本漫画《JOJO的奇妙冒险：黄金之风》及其衍生作品中的角色。他也在同人外传小说《恬不知耻的紫烟》中作为配角登场。 米斯达是意大利黑帮“热情”的成员，跟随布鲁诺·布加拉提的小队执行保护特里休·乌纳的任务。他是一个枪手和替身使者，替身名为“性感手枪”。因为替身能力需要依靠枪械的原因，因此随身佩戴一把S&W M28转轮手枪。"]],
            "jojo_13":["male","goldfight",4,["whzuio","youcui","touhun"],["des:託比歐，“Passione”（熱情）黑手幫組織頭目迪亞波羅最信任的手下。 實際上其為迪亞波羅的第二人格"]],
            "jojo_14":["male","goldfight",4,["youcui","mzhuoi"],["des:迪亚波罗，日本漫画《JOJO的奇妙冒险：黄金之风》及其衍生作品中的角色。 登场于第61卷至63卷，首次出战于第56卷，但其中并未出现完整的形象。 另一人格——托比欧，则主要登场于58,59,61卷，在那之前只有他人的转述以及回忆等。 (第五部为单行本47卷至63卷。)"]],
            "jojo_15":["male","goldfight",4,["metal_product","cudo"],["des:暗杀小队队长，个性沉着冷静，有着奇异的黑色巩膜和红色虹膜赫眼  非常重视自己的部下，索尔贝和杰拉德的死使得里苏特暗地伤感，其他部下在与布加拉提小队的战斗中牺牲后更是点燃了复仇的怒火。  为了找出老板的女儿而去寻找护卫队一行人，半路遇到还是多比欧人格的老板，与之交战但战败死亡  名字Risotto是一种意大利式烩饭，姓Nero在意大利语里是“黑色”的意思。另外，连起来的话Risotto Nero即墨鱼汁烩饭。","ext:JoJo/jojo_15.jpg","die:ext:JoJo/audio/die/jojo_15.mp3"]],
            "dio_boss":["male","shen",1,["change_write","time_stop_goddio","wu_si"],["des:［英文名］：「The world•Over heaven」 在「天國之眼」遊戲中，到達天堂的迪奧•布蘭度，替身也隨之進化為「世界•超越天堂」，其能力在主世界的「世界」之上，擁有著時間暫停與強行修改與覆寫自然法則的能力，其發動能力的條件是以「雙拳」擊中過目標，在遊戲中也使「黃金體驗•鎮魂曲」「無法到達現實的能力」 和喬尼•喬斯達的「迴轉」無效化"]],
            "jojo_16":["male","storesea",4,["draw_disc","toa_don"],["des:恩裏克·普奇，漫畫《JOJO的奇妙冒險：石之海》及其衍生作品中的角色，第六部的最終反派。 綠海豚水族館監獄的教誨師，信奉天主教，人稱“普奇神父”，為獲悉好友迪奧登上天堂的計劃開啓了第六部的故事。擁有三個完全不同能力的替身，其中最終進化的第三階段的“天堂製造”擁有在全宇宙範圍內加速時間的能力，最終造成了宇宙重置。"]],
            "jojo_17":["female","storesea","2/3",["Ssenol","senjui","chfu"],["des:空條徐倫，日本漫畫《JOJO的奇妙冒險》及其衍生作品中的角色，第六部《石之海》的主角，歷代主角團中出現的第一位女性JOJO，替身為石之自由。日裔美國人，空條承太郎的女兒，母親是一位美國女性。 [1]  空條徐倫早年被他人算計入獄，之後為了阻止神父恩裏克·普奇的計劃，與在監獄相識的夥伴一同越獄，對抗神父。海上之戰中，眾人不敵替身進化為天堂製造的神父，在空條承太郎保護徐倫而死後，徐倫為了掩護安波里歐·亞曼紐進入新世界，最終選擇犧牲了自己。"]],
            "jojo_18":["male","starbattler","5/5",["xinshu","shujiu","time_stop_9second","yulog"],["des:迪奥·布兰度是荒木飞吕彦所创作的日本漫画《JoJo的奇妙冒险》中的角色。他是著名的反派角色，也是贯穿整部作品的重要角色。初次登场于系列作第一部《幻影血脉》并担任主要反派、并以DIO之名登场于第三部《星尘斗士》担任主要反派。此外，在其他部中也都有轻重不一的戏份。 ","ext:JoJo/jojo_18.jpg","die:ext:JoJo/audio/die/jojo_18.mp3"]],
            "jojo_19":["male","storesea",4,["huzui"],["des:安波里欧·亚曼纽，日本漫画《JOJO的奇妙冒险》及其衍生作品中的角色，第六部《JOJO的奇妙冒险：石之海》的主要人物。住在绿海豚街监狱里的11岁少年，替身为放火烧厝。 他协助空条徐伦越狱，并一同阻止恩里克·普奇神父的计划。他是主角团里唯一一个存活到新世界的人，利用“天气预报”的替身DISC打倒了神父。最后在重置后的新世界中遇到代替旧世界徐伦的空条爱伦等人，与他们一同踏入更美好的未来"]],
            "jojo_20":["male","starbattler",5,["tucui","zuimuk"],["des:乔瑟夫·乔斯达，是荒木飞吕彦创作的漫画《JOJO的奇妙冒险》系列中的角色，第二部《JOJO的奇妙冒险：战斗潮流》的男主角，是第一代JOJO乔纳森·乔斯达的孙子。"]],
            "jojo_21":["male","starbattler",3,["bassoul","jujui","jigyu"],["des:花京院典明，日本漫畫《JOJO的奇妙冒險：星塵鬥士》及其衍生作品中的角色。 曾被迫成為DIO的手下，因DIO植入的肉芽被空條承太郎清除而恢復自我意識。為了報答承太郎，同時也為了克服自身對DIO的恐懼，花京院典明加入了“星塵十字軍”，與承太郎等人一同前往埃及對抗DIO。"]],
            "jojo_22":["male","theboold",4,["gumnum","banomui","yumimio"],["des:迪奥·布兰度是荒木飞吕彦所创作的日本漫画《JoJo的奇妙冒险》中的角色。他是著名的反派角色，也是贯穿整部作品的重要角色。初次登场于系列作第一部《幻影血脉》并担任主要反派、并以DIO之名登场于第三部《星尘斗士》担任主要反派。此外，在其他部中也都有轻重不一的戏份。"]],
            "jojo_23":["male","starbattler",4,["mushi","wuhot","suki"],["des:穆罕默德·阿布德爾，日本漫畫《JOJO的奇妙冒險：星塵鬥士》及其衍生作品中的角色，出身於埃及的一名占卜師，是喬瑟夫·喬斯達的友人。為了擊敗邪惡的化身，被稱作“惡人的救世主”的DIO，阿布德爾與空條承太郎及喬瑟夫等人組成了“星塵十字軍”。他們從日本出發，一同前往埃及對抗DIO。在旅途中，他們遭到了DIO派出的眾多替身使者的追殺，但他們的意志從未動搖。"]],
            "jojo_24":["female","starbattler",3,["zhyui","beyui"],["des:恩亚·凯尔，日本漫画《JOJO的奇妙冒险：星尘斗士》及其衍生作品中的角色，迪奥·布兰度的崇拜者，以箭制造了大量替身使者来阻碍主角团队。"]],
            "jojo_25":["male","bumianshidiamond",4,["funyui","zuigui","suizui"],["des:東方仗助，日本漫畫《JOJO的奇妙冒險：不滅鑽石》及其衍生作品中的角色，第四代JOJO，是二代JOJO喬瑟夫·喬斯達與東方朋子的私生子。杜王町葡萄丘高中的高中一年級生，有個漂亮老媽和作為警察的外公，喜歡打電子遊戲，很受女孩子歡迎。是荒木飛呂彥筆下的人物。 輩分上是空條承太郎的舅舅、空條徐倫的舅姥爺，但年齡比承太郎分別小了13歲，僅僅比徐倫大了10歲。 外形十分時尚，改裝校服、喜歡名牌鞋子，因此經常為零花錢苦惱。有着世界上最温柔的力量，十分重視自己的家人、朋友，平時基本上都是温和善良的樣子，但是一旦涉及自己的家人、朋友或是自己的髮型就會暴走。"]],
            "jojo_26":["female","starbattler",3,["bifuio","juiyyuiui"],["des:dio的部下，對dio極其忠誠，甚至不惜放棄生命。"]],
            "jojo_27":["male","starbattler",3,["bai_yui","shu_run"],["des:埃及九榮神中第一個出戰的成員。  雖然是個盲人但是聽覺非常敏銳，如果藉助有作助聽器作用的拐杖，甚至能通過地面傳來的聲音判斷幾公里外敵人的精確位置。能通過步長、移動方式等得到對方的身體信息、推斷出對方的身份。  非常崇敬DIO，將他稱為「惡人的救世主」。"]],
            "jojo_28":["male","starbattler",4,["you_ton"],["des:五百年前的刀匠恰拉邦·薩拉伊，本體死後替身附在了刀上。隨後一直陳列在在博物館的倉庫裡，直到被迪奧解放。阿努比斯神是JOJO系列中第一個登場的全自動運作型替身。"]],
            "jojo_29":["male","starbattler","3/3/2",["dou_bo","lui_zui"],["des:達比是一名狂熱的賭徒，他曾經依靠賭博和替身能力贏得了很多人的財產和靈魂，並把這些靈魂做成籌碼收集起來。他的快樂來自於賭博，和收集靈魂。他甚至對承太郎等人直言說，自己並不是受到了迪奧的命令，而是作為一名賭徒，想要賭博而賭博。他的賭博技巧極其高明，就連承太郎也評價他是一個極其危險的對手，差點使四人全滅。開始賭博時，會有口頭禪「GOOD!」  在弟弟15歲時，因為調戲弟弟的女朋友被弟弟打到再起不能。  阅读更多：丹尼尔·J·达比（https://zh.moegirl.org.cn/%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7J%C2%B7%E8%BE%BE%E6%AF%94 ） 本文引自萌娘百科(https://zh.moegirl.org.cn )，文字内容默认使用《知识共享 署名-非商业性使用-相同方式共享 3.0 中国大陆》协议。"]],
            "jojo_30":["male","starbattler",3,["shi_wu","zui_sh"],["des:埃及九榮神的成員之一，DIO所飼養的一隻隼，也是埃及九榮神中唯一一個動物替身使者。  負責守衛DIO洋館的入口，作為一隻猛禽，性格相當兇狠，對待任何闖入者都絕不手軟。"]],
            "jojo_31":["female","starbattler",3,["mui_to","zui_li","zyi_qo"],["des:DIO旗下精英小隊埃及九榮神的成員，同時是「埃及九榮神」里唯一的女性。  外型出色，仰慕著DIO，喬瑟夫·喬斯達也因為她的美腿而留下深刻印象。  對喬瑟夫·喬斯達有好感，不過依然覺得DIO更有魅力。"]],
        },
        translate:{
            "jojo_1":"旧迪亚波罗",
            "jojo_2":"空条承太郎",
            "jojo_3":"SP空条承太郎",
            "jojo_4":"迪奥布兰度",
            "jojo_5":"乔瑟夫乔斯达",
            "jojo_6":"吉良吉影",
            "jojo_7":"赛特神",
            "jojo_8":"伊奇",
            "jojo_9":"波鲁纳雷夫",
            "jojo_10":"波音哥欧音哥",
            "jojo_11":"乔鲁诺乔巴纳",
            "jojo_12":"米斯达",
            "jojo_13":"托比欧",
            "jojo_14":"迪亚波罗",
            "jojo_15":"里苏特涅罗",
            "dio_boss":"到达天堂的迪奥",
            "jojo_16":"普奇神父",
            "jojo_17":"空条徐伦",
            "jojo_18":"SP迪奥布兰度",
            "jojo_19":"安波里欧",
            "jojo_20":"老东西",
            "jojo_21":"花京院典明",
            "jojo_22":"☆迪奥",
            "jojo_23":"阿布德尔",
            "jojo_24":"思雅",
            "jojo_25":"东方仗助",
            "jojo_26":"女教皇",
            "jojo_27":"恩多尔",
            "jojo_28":"阿努比斯神",
            "jojo_29":"J达比",
            "jojo_30":"佩特夏",
            "jojo_31":"玛莱雅",
        },
    },
    card:{
        card:{
            zhuyueo:{
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                nomod:true,
                nopower:true,
                unique:true,
                skills:["虫箭1"],
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkill('gzjuebi')) return 8;
            if(game.hasPlayer(function(current){
                return current.hasSkill('gzjuebi')&&get.attitude(player,current)<=0;
            })){
                return 0;
            }
            return 7;
        },
                    basic:{
                        equipValue:6.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:(player, target, card) => get.equipResult(player, target, card.name),
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                image:"ext:JoJo/zhuyueo.png",
            },
            "metallica_card":{
                derivation:"jojo_15_cards",
                type:"metal_special",
                fullimage:true,
                ai:{
                    value:-114514,
                },
                image:"ext:JoJo/metallica_card.jpg",
            },
            "dics_cards":{
                "skill_list":[""],
                type:"disc_special",
                fullskin:true,
                image:"ext:JoJo/dics_cards.png",
            },
            "SP_dio_roller":{
                fullskin:true,
                image:"ext:JoJo/SP_dio_roller.png",
            },
            "sg_mask":{
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                nomod:true,
                nopower:true,
                unique:true,
                skills:["xixghost_item"],
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkill('gzjuebi')) return 8;
            if(game.hasPlayer(function(current){
                return current.hasSkill('gzjuebi')&&get.attitude(player,current)<=0;
            })){
                return 0;
            }
            return 7;
        },
                    basic:{
                        equipValue:6.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:(player, target, card) => get.equipResult(player, target, card.name),
                    },
                },
                enable:true,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return get.distance(player,target)<=1;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                image:"ext:JoJo/sg_mask.png",
                toself:true,
            },
            talocard:{
                derivation:"jojo_23",
                fullskin:true,
                type:"trick",
                enable:true,
                filterTarget:true,
                content:function (){
        'step 0'
        event.list=[];
        for (var i = 0; i < lib.inpile.length; i++) {                
   if (get.type(lib.inpile[i])=='trick'&&game.hasPlayer(function(current){
            return player.canUse(lib.inpile[i],current);
        })) event.list.push(lib.inpile[i]);
                  }
        'step 1'
        //player.line(target,'fire');
        player.useCard({name:event.list.randomGet()},target,false);
    },
                ai:{
                    value:[8,5],
                    useful:2,
                    order:2,
                    result:{
                        player:function (player){                
                return 1;
            },
                        target:function (player,target){
                if(get.attitude(player,target)<=0) return 2.5;        
                if(target.hp==1) return 2.6;
                return -1;
            },
                    },
                    tag:{
                        damage:1,
                    },
                },
                selectTarget:1,
                image:"ext:JoJo/talocard.png",
            },
            "ar_bise_kn":{
                derivation:"jojo_28",
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:8,
                    },
                },
                skills:["ar_bise_kn_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:(card,player,target)=>player==target&&target.canEquip(card,true),
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
        },
        translate:{
            zhuyueo:"虫箭",
            "zhuyueo_info":"出牌阶段，本次游戏限一次，你可以损失一点体力，若你不为以下武将列的武将，则你获得随机效果的【替身】，否则你可以升级相应的替身技能。武将列包括：<h5><span style=\"color:red\">旧迪亚波罗，空条承太郎，迪奥布兰度，波鲁纳雷夫，吉良吉影，乔鲁诺乔巴纳。</span></h5>(不包括SP或其他版本，仅限经典版)<br>绯红.改：当一名角色使用牌指定你为目标后，你可以弃一张手牌，然后令其交给你两张手牌并令此牌目标取消你，否则受到一点伤害你与其交换位置并在此回合结束后额外获得一个回合。(此技能不会失效)<br>白金.改：锁定技，你使用【杀】无次数限制；当你成为一名角色【杀】的目标时，你可以摸一张牌然后弃一张牌，进行一次判定，然后令此【杀】对你无效，若判定结果为黑色，则你视为对目标使用一张【杀】；准备阶段，你从牌堆获得一张【杀】。(此技能不会失效)<br>世界.改：锁定技，你使用【杀】的伤害+1。当你成为一名角色【杀】的目标后，從牌堆获得一张基本牌。你使用【杀】时，若目标的体力值小于你，则其无法使用【闪】响应此【杀】。(此技能不会失效)<br>战车.改：出牌阶段，你可以损失X-1点体力，然后令你本回合的进攻距离+1，若如此做，你摸X+1张牌，并且可以多使用X张【杀】。(X为你本回合发动此技能的次数)(此技能不会失效)<br>第三爆弹：限定技，败者食尘。当你进入濒死状态时，你可以摸两张牌，然后将所有牌(包括判定区)交给一名角色，并附上\"败者食尘\"的标签，拥有\"败者食尘\"的标签的牌无法被弃置，也不能使用，不占用手牌上限，然后你和\"败者食尘\"的目标将体力回复至体力上限，最后你摸三张牌，并复原武将牌，获得技能【引爆】，当你死亡时会解除\"败者食尘\"所限制的牌，此外，\"败者食尘\"的目标可以将一张带有\"败者食尘\"的标签的牌展示並交给一名除你以外的角色，每回合限一次。<br>黄金：黄金体验镇魂曲。当你对一名角色造成伤害后，你可以令其获得\"镇魂\"标记。当拥有\"镇魂\"标记的角色，体力值发生变化时，则记录，并取消之。此外，其失去所有阶段和技能，并且每回合失去一点体力，持续三个回合。三个回合后，若X大於或等于其的体力上限， 其死亡，否则损失X点体力上限。(X为其体力变化的数值)",
            "metallica_card":"金屬制品",
            "metallica_card_info":"此牌在失去后会自动销毁。",
            "dics_cards":"光碟",
            "dics_cards_info":"出牌阶段，你可以将此牌置入武将牌特殊牌库中，然后获得相应的技能，当你进入临死状态时，此牌置入弃牌堆中。(此牌可以被重新洗牌并摸取)",
            "SP_dio_roller":"压路机",
            "SP_dio_roller_info":"Dio的压路机。",
            "sg_mask":"石鬼面",
            "sg_mask_info":"此牌可以对距离计算与自己不大于1的角色使用。出牌阶段，本次游戏限一次，若你本回合已造成伤害并且你的阵营不为【吸血鬼】，你可以更换之，获得技能【吸血】。<br><h5><span style=\"color:red\">特殊阵营：【吸血鬼】：你受到的火焰伤害+1。准备阶段，可以视为使用一张【杀】。<br>【吸血】：当你对一名角色造成一点伤害时，若此伤害渠道为卡牌，你可以将手牌摸至二，或回复一点体力。</span></h5> ",
            talocard:"塔罗牌",
            "talocard_info":"出牌阶段，你可以对一名角色使用，然后视为你对其使用一张随机普通锦囊牌。",
            "ar_bise_kn":"阿努比斯神",
            "ar_bise_kn_info":"锁定技，你使用【杀】的次数+1。当装备此装备的使用者陷入濒死状态后，其需要将此装备置入一名角色的装备区。当此装备者杀死一名角色的时候，则游戏终止，并视为装备者的胜利。此牌无法进入弃牌堆和牌堆，且装备后不能装备其他武器牌。",
        },
        list:[["club","13","zhuyueo"],["club","12","sg_mask"],["club","13","zhuyueo"],["club","12","sg_mask"],["club","13","zhuyueo"],["club","12","sg_mask"]],
    },
    skill:{
        skill:{
            fuhunt:{
                trigger:{
                    target:"useCardToTarget",
                },
                direct:true,
                filter:function (event,player){
        if(event.target!=player||event.player==player) return false;                          
        if(!get.tag(event.card,'damage')) return false;
        return player.countCards('h',{name:'sha'})||player.countCards('he',{suit:'spade'});
    },
                shaRelated:true,
                checkx:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                content:function (){
        'step 0'
 var next=player.chooseToDiscard(get.prompt2('fuhunt'),1,'he',false,function(card){
    return get.name(card)=='sha'||get.suit(card)=='spade';
});
        var check=lib.skill.fuhunt.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('goon',check);
        'step 1'
        if(result.bool){
            player.line(trigger.player,'fire');
        trigger.player.chooseCard(2,'he',false,'请交给'+get.translation(player)+'两张牌否则受到一点伤害').set('ai',function(card){
            if(card.name=='tao') return -10;
            if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
            return get.unuseful(card)+2.5*(5-get.owner(card).hp);
        });
             }else event.finish();
   'step 2'   
   if(result.bool){    
   event.cards=result.cards;
   player.gain(event.cards,'gain2'); 
   trigger.getParent().excluded.add(player);
        }else{
        trigger.player.damage()  ;
        game.broadcastAll(function(target1,target2){
        game.swapSeat(target1,target2);
        },player,trigger.player);
        player.insertPhase();
        }
    },
                "_priority":0,
            },
            cunheart:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return true;
    },
                filterTarget:function (card,player,target){
        return player.inRange(target)&&!target.inRange(player);
    },
                content:function (){
       target.damage(2);
    },
                ai:{
                    result:{
                        target:function (player,target){             
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            baijui:{
                group:"baijui_gainsha",
                subSkill:{
                    gainsha:{
                        priority:9,
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
                    var sha=get.cardPile2(function(card){
            return get.name(card)=='sha';
        });
        return true;
    },
                        forced:true,
                        content:function (){
                    var sha=get.cardPile2(function(card){
            return get.name(card)=='sha';
        });     
                player.gain(sha,'gain2');
       
            },
                        sub:true,
                        "_priority":900,
                    },
                },
                trigger:{
                    target:"useCardToTarget",
                },
                forced:true,
                direct:true,
                filter:function (event,player){
        if(event.target!=player||event.player==player) return false;                          
        if(get.name(event.card)!='sha') return false;
        return player.countCards('h');
    },
                shaRelated:true,
                checkx:function (event,player){
        return !player.countCards('h',{name:'shan'});
    },
                content:function (){
        'step 0'
        var next=player.chooseToDiscard(get.prompt2('baijui'),1,'h',false,function(card){
    return true;
});
        var check=lib.skill.baijui.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('goon',check);
        'step 1'
        if(result.bool){
            player.logSkill("spbaijui",trigger.target);
            trigger.getParent().excluded.add(player);
        }
    },
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
                "_priority":0,
            },
            ziuyui:{
                group:"ziuyui_effect",
                subSkill:{
                    effect:{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        skillAnimation:true,
                        animationColor:"thunder",
                        filter:function (event,player){
        return player.countMark('ziuyui')>=3;
    },
                        forced:true,
                        content:function (){
        var num=Math.floor(player.countMark('ziuyui')/2)
        player.draw(num);
        player.gainMaxHp(true);
        player.recover();
        game.log(player,'获得了技能','#g【时停】');
        player.awakenSkill('ziuyui');
        player.addSkill('time_stop_3second');
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                marktext:"战",
                intro:{
                    content:function (storage,player,skill){
                return '已获得'+get.cnNumber(player.storage.ziuyui)+'个"战意"标记';       
        },
                },
                trigger:{
                    global:"damageEnd",
                    player:"damageEnd",
                },
                charlotte:true,
                juexingji:true,
                derivation:["time_stop_3second"],
                unique:true,
                forced:true,
                filter:function (event,player){
        if(event.name=='damage'&&event.num&&event.player==player&&event.source!=player) return true;
        if(event.name=='damage'&&event.num&&event.player!=player&&event.source==player) return true;
        return false;
    },
                content:function (){
        player.addMark('ziuyui',trigger.num?trigger.num:1)
    },
                "_priority":0,
            },
            "time_stop_3second":{
                group:"time_stop_3second_count",
                subSkill:{
                    die:{
                        trigger:{
                            player:["die"],
                        },
                        forced:true,
                        forceDie:true,
                        direct:true,
                        filter:function (event,player){
        return player.countMark('time_stop_3second');
    },
                        content:function (){
                'step 0'
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
                'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect',Infinity);
            }
                'step 2'
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                    count:{
                        trigger:{
                            player:["phaseEnd"],
                        },
                        forced:true,
                        filter:function (event,player){
        return player.countMark('time_stop_3second');
    },
                        content:function (){
                'step 0'
            player.removeMark('time_stop_3second',1);
            if(!player.countMark('time_stop_3second')){
               player.addSkill('time_stop_3second_cd1'); 
               player.addMark('time_stop_3second_cd1',3);
            }
             var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 1'
        if(!player.countMark('time_stop_3second')){
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect',event.targets[i].countMark('time_stop_effect'));
            }
             }
                'step 2'
                if(!player.countMark('time_stop_3second')){
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
             }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                marktext:"时",
                intro:{
                    content:function (storage,player,skill){
                return '时停还有'+get.cnNumber(player.storage.time_stop_3second)+'个回合。';       
        },
                },
                enable:"phaseUse",
                filter:function (event,player){
        return !player.hasSkill('time_stop_3second_cd1')&&!player.countMark('time_stop_3second');
    },
                skillAnimation:true,
                animationColor:"thunder",
                content:function (){
      'step 0'
      var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'fire');
                event.targets[i].addMark('time_stop_effect',2);
                event.targets[i].addSkill('time_stop_effect');
                event.targets[i].storage.time_stop_user=player;
            }
        player.addMark('time_stop_3second',2);
      
    },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "time_stop_effect":{
                mod:{
                    cardEnabled:function (card){
 return false;
         },
                    cardUsable:function (card){
             return false;
        },
                    cardRespondable:function (card){
           return false;
        },
                    cardSavable:function (card){
            return false;
        },
                },
                init:function (player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function (player,skill){
        player.removeSkillBlocker(skill);
    },
                "time_effect":true,
                charlotte:true,
                skillBlocker:function (skill,player){        
        return !lib.skill[skill].charlotte;
    },
                mark:true,
                group:"time_stop_effect_count",
                subSkill:{
                    count:{
                        trigger:{
                            global:["phaseEnd"],
                        },
                        charlotte:true,
                        forced:true,
                        filter:function (event,player){
        return event.player!=player&&!event.player.hasSkill('time_stop_effect');
    },
                        content:function (){
        if(player.countMark('time_stop_effect')){
            player.removeMark('time_stop_effect',1);
        }
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:["phaseBefore"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.countMark('time_stop_effect');
    },
                content:function (){
        trigger.cancel();
    },
                marktext:"时",
                intro:{
                    content:function (storage,player,skill){
                return '时停效果将会持续'+get.cnNumber(player.storage.time_stop_effect)+'个回合。';       
        },
                },
                "_priority":0,
            },
            "time_stop_3second_cd1":{
                trigger:{
                    player:["phaseEnd"],
                },
                popup:false,
                charlotte:true,
                filter:function (event,player){
        return player.countMark('time_stop_3second_cd1');
    },
                content:function (){
      player.removeMark('time_stop_3second_cd1',1);
        if(!player.countMark('time_stop_3second_cd1')) player.removeSkill('time_stop_3second_cd1');
    },
                forced:true,
                mark:true,
                marktext:"时",
                intro:{
                    content:function (storage,player,skill){
            return '【时停】还有'+get.cnNumber(player.storage.time_stop_3second_cd1)+'回合重置。';
       
        },
                },
                "_priority":0,
            },
            spbaijui:{
                trigger:{
                    player:"useCardToPlayer",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.card.isCard&&event.cards.length==1;
    },
                content:function (){
        'step 0'
        var nature=trigger.card.nature;
        var number=trigger.card.number;
        var info=[get.translation(nature)+'杀，点数为'+number];
        player.useCard({name:'sha',nature:nature,number:number,isCard:false},trigger.target,false);       
        game.log(player,'使用了'+info);
    },
                "_priority":0,
            },
            yuigui:{
                group:"yuigui_sha",
                subSkill:{
                    sha:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.card&&event.card.name=='sha'&&event.target.hasSkill('yuigui_2');
    },
                        content:function (){
        trigger.target.chooseToDiscard(true,'he');
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
       return event.source!=player&&event.source&&event.num&&!event.source.hasSkill('yuigui_2');
    },
                content:function (){
        player.draw(2);
        trigger.source.addSkill('yuigui_2');
    },
                "_priority":0,
            },
            "yuigui_2":{
                charlotte:true,
                forced:true,
                mark:true,
                marktext:"警",
                intro:{
                    content:function (storage,player,skill){
            return '已获得"警"标记。';
       
        },
                },
                "_priority":0,
            },
            fubvtu:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:function (card){
        return true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                check:function (card){
        return 8-get.value(card);
    },
                discard:true,
                content:function (){         
        if(target.hasSkill('time_stop_effect')){
            target.addSkill('fubvtu_mark');
            target.addMark('fubvtu_mark',1);
            target.storage.fubvtu_target=player
        }else player.useCard({name:'sha',isCard:true},target,false);        
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "time_stop_9second":{
                group:["time_stop_9second_count","time_stop_9second_die"],
                subSkill:{
                    die:{
                        trigger:{
                            player:["die"],
                        },
                        forced:true,
                        forceDie:true,
                        direct:true,
                        filter:function (event,player){
        return player.countMark('time_stop_9second');
    },
                        content:function (){
                'step 0'
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
                'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect',Infinity);
            }
                'step 2'
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                    count:{
                        trigger:{
                            player:["phaseEnd"],
                        },
                        forced:true,
                        filter:function (event,player){
        return player.countMark('time_stop_9second');
    },
                        content:function (){
                'step 0'
            player.removeMark('time_stop_9second',1);
            if(!player.countMark('time_stop_9second')){
               player.addSkill('time_stop_3second_cd1'); 
               player.addMark('time_stop_3second_cd1',4);
            }
             var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 1'
        if(!player.countMark('time_stop_9second')){
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect',event.targets[i].countMark('time_stop_effect'));
            }
             }
                'step 2'
                if(!player.countMark('time_stop_9second')){
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
             }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                marktext:"时",
                intro:{
                    content:function (storage,player,skill){
                return '时停还有'+get.cnNumber(player.storage.time_stop_3second)+'个回合。';       
        },
                },
                enable:"phaseUse",
                filter:function (event,player){
        return !player.hasSkill('time_stop_3second_cd1')&&!player.countMark('time_stop_9second');
    },
                skillAnimation:true,
                content:function (){
      'step 0'
      var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'fire');
                event.targets[i].addMark('time_stop_effect',3);
                event.targets[i].addSkill('time_stop_effect');
                event.targets[i].storage.time_stop_user=player;
            }
        player.addMark('time_stop_9second',3);
      
    },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            theworld:{
                group:"theworld_sha",
                subSkill:{
                    sha:{
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        forced:true,
                        filter:function (event,player,target){
        if(!event.card) return false;        
        return event.target==player&&event.card.name=='sha';
    },
                        content:function (){
        var card=get.cardPile2(function(card){
            return get.type(card)=='basic';
        });
        if(card){
        player.gain(card);
        player.$draw();
             }else player.draw();
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                direct:true,
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.card.name=='sha'&&event.source==player&&event.player!=player){
           return true;
        }
        return false;       
    },
                content:function () {
            player.logSkill('theworld',trigger.player);
            trigger.player.chooseToDiscard(true,'h');
        
    },
                "_priority":0,
            },
            "fubvtu_mark":{
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return true;
    },
                content:function (){
        'step 0'
        event.count=player.countMark('fubvtu_mark');
        player.removeMark('fubvtu_mark',event.count);
        'step 1'
        player.storage.fubvtu_target.logSkill("fubvtu",player);
        player.storage.fubvtu_target.useCard({name:'sha',isCard:true,popup:false},player,false);
        'step 2'
        event.count--;
        if(event.count>0){
            event.goto(1);
        }else player.removeSkill('fubvtu_mark');
    },
                charlotte:true,
                forced:true,
                marktext:"刀",
                intro:{
                    content:function (storage,player,skill){
                return '拥有'+get.cnNumber(player.storage.fubvtu_mark)+'个"刀"标记，来源:'+get.translation(player.storage.fubvtu_target);       
        },
                },
                "_priority":0,
            },
            bowin:{
                group:"bowin_recover",
                subSkill:{
                    recover:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        prompt:function (player) {
               var player=_status.event.player;
               return get.prompt('bowin')+'回复一点体力值？';       
            },
                        filter:function (event,player){
        var num=player.getDamagedHp();
        return num>0;
    },
                        content:function (){
        player.recover();
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"damageBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                filter:function (event,player){
         if(event.source==player&&event.player!=player){
           return true;
        }
        return false;       
    },
                content:function () {
'step 0' 
trigger.cancel();
if(!trigger.player.hasSkill('bowin_mark')) trigger.player.addSkill('bowin_mark')
   
'step 1' 
trigger.player.addMark('bowin_mark',trigger.num?trigger.num+1:1);
    },
                "_priority":0,
            },
            zumuxy:{
                group:"zumuxy_wuxie",
                subSkill:{
                    wuxie:{
                        enable:["chooseToUse"],
                        filterCard:function (){return false},
                        selectCard:-1,
                        viewAsFilter:function (player){
                var num=player.getStat('skill').zumuxy_wuxie||0;
                return !player.isPhaseUsing()&&num<1;
            },
                        viewAs:{
                            name:"wuxie",
                        },
                        onuse:function (result,player){
                var chat=["没错，这也在我JOJO的算计之中！！！","跟我智斗，还差点火候呢。","你的下一句话是......"];
                player.say(chat.randomGet());          
    },
                        prompt:"你的回合外，每名角色的回合限一次，你可以视为使用一张【无懈可击】",
                        check:function (){return 1},
                        ai:{
                            basic:{
                                useful:[6,4],
                                value:[6,4],
                            },
                            result:{
                                player:1,
                            },
                            expose:0.2,
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return true;
    },
                content:function (){
      'step 0'
        var list={basic:[],equip:[],trick:[],delay:[]};
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var info=lib.card[name];
            if(info.autoViewAs||name=='yuansuhuimie') continue;
            if(lib.filter.cardEnabled({name:name},player)){
                if(!list[info.type]){
                    list[info.type]=[];
                }
                list[info.type].push([get.translation(lib.card[name].type),'',name]);
            }
        }
        list.trick.sort(lib.sort.name);
        var dialog=ui.create.dialog('智谋',[list.trick,'vcard']);
        var rand1=Math.random()<1/3;
        var rand2=Math.random()<0.5;
        var rand3=Math.random()<1/3;
        var rand4=Math.random()<1/3;
        player.chooseButton(dialog).ai=function(button){
            var name=button.link[2];
            if(player.hp<=1){
                switch(name){
                    case 'zhiliaobo':return 1;
                    case 'dunpaigedang':return 0.8;
                    case 'nanman':return 0.5;
                    default:return 0;
                }
            }
            if(rand4&&player.countCards('h')<=1){
                switch(name){
                    case 'zengbin':return 1;
                    case 'wuzhong':return 0.8;
                    default:return 0;
                }
            }
            if(player.hasSkill('qinglonglingzhu')){
                if(rand2) return name=='chiyuxi'?0.8:0;
                return name=='jingleishan'?0.8:0;
            }
            if(rand2) return name=='wanjian'?0.8:0;
            return name=='nanman'?0.8:0;
        }
        'step 1'
        if(result.bool){
            player.chooseUseTarget(result.links[0][2],true,false);
        }
   
    },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "bowin_mark":{
                charlotte:true,
                forced:true,
                marktext:"纹",
                intro:{
                    content:function (storage,player,skill){
                return '拥有'+get.cnNumber(player.storage.bowin_mark)+'个"纹"标记';       
        },
                },
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
        return true;
    },
                content:function (){
        'step 0'        
        player.damage('fire','nosource');
        player.chooseToDiscard(true,'he');
        'step 1'
        player.removeMark('bowin_mark',1);
        if(!player.countMark('bowin_mark')) player.removeSkill('bowin_mark');
    },
                "_priority":0,
            },
            "fire_boo":{
                nobracket:true,
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                prompt:"是否对其造成一点火焰伤害？",
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.card.name=='sha'||event.card&&event.card.name=='juedou'){
            if(event.player!=player) return true;
        }
        return false;     
    },
                content:function () {   
        var chat=["你的替身力量很弱呢。","你真的觉得你可以赢得过我的杀手皇后？？","杀手皇后第一爆弹！！！"];
                player.say(chat.randomGet());
            trigger.player.damage('fire',player);   
    },
                "_priority":0,
            },
            "second_boo":{
                nobracket:true,
                enable:"phaseUse",
                filter:function (event,player){
        return !player.hasSkill('second_boo_cd');
    },
                content:function (){
        'step 0'
        var chat=["就用我的第二爆弹，枯萎穿心攻击","我一定要摆脱他们。"];
                player.say(chat.randomGet());
        lib.character.jojo_6_boolcar=["male","xhuo",4,["jojo_6_boolcar"],[]];
player.callSubPlayer(player.addSubPlayer({
name:'jojo_6_boolcar',
maxHp:6,
hp:6,
skills:['self_bool','die_stand'],
hs:get.cards(2),
}));
        'step 1'
        setTimeout(function(){
player.node.avatar.setBackgroundImage('extension/JoJo/bool_car.jpg'); 
},500);
    },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
                "_priority":0,
            },
            "third_boo":{
                derivation:["yubossl"],
                nobracket:true,
                limited:true,
                skillAnimation:true,
                animationColor:"thunder",
                trigger:{
                    player:"dying",
                },
                unique:true,
                init:function (player){
        player.storage.third_boo=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){   
        return !player.storage.third_boo;
    },
                content:function (){
        'step 0'
        player.draw(2);
        'step 1'
        player.chooseTarget(get.prompt('third_boo'),true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return (get.attitude(_status.event.player,target));
        });
        'step 2'
        if(result.bool){            
            var chat=["没想到我吉良吉影竟然会被你们逼到如此绝境。","怎么办......","我一定要捍卫我平静的生活......"];
                player.say(chat.randomGet());
            var target=result.targets[0];
            player.storage.third_boo_target=target;
            target.storage.baizucuocu_gain_target=player;
            player.markSkillCharacter('baizucuocu',target,'败者食尘','当其他角色获得带有"败者食尘"的标签的牌时，你可以对其造成两点火焰伤害');
            player.line(target,'green');
            target.addSkill('baizucuocu');
            target.addSkill('baizucuocu_gain');
            event.cards=player.getCards('hej',function(card){
                return player.countCards('hej');       
            });
            player.storage.third_boo_cards=event.cards;
            event.target=result.targets[0];                                
             }
            target.gain(event.cards,player,'give'); 
        'step 3'
        event.target.addGaintag(event.cards,'baizucuocu');            
        'step 4'
        var num=player.maxHp-player.hp;
        var num2=event.target.maxHp-event.target.hp;
        if(num) player.recover(num);
        if(num2) event.target.recover(num2);
        player.turnOver(false);
        player.link(false);
        player.draw(3);
        player.addSkill('yubossl');
        player.addSkill('baizucuocu2');
        player.storage.third_boo=true;
        player.awakenSkill('third_boo');
    },
                mark:true,
                "_priority":0,
            },
            yubossl:{
                trigger:{
                    global:"gainEnd",
                },
                forced:true,
                filter:function (event,player){
        if(player==event.player||event.player==player.storage.third_boo_target) return false;        
        return player.storage.third_boo_cards.contains(event.cards[0]);
    },
                content:function (){
        'step 0'
        var chat=["杀手皇后已经进入你的眼睛里面了！！！","知道我身份的人将会灰飞烟灭。"];
                player.say(chat.randomGet());
        player.storage.third_boo_cards.remove(trigger.cards[0])
        player.line(trigger.player,'green');
        trigger.player.damage(3,'fire',player);
        'step 1'
        if(trigger.player.hp>1) trigger.player.loseHp();
    },
                "_priority":0,
            },
            "self_bool":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        if(event.name=='damage'&&get.distance(player,event.source)<=1&&event.num&&event.player==player&&event.source!=player) return true;
        return false;
    },
                content:function (){
        player.loseHp();
        trigger.source.damage('fire',player);
    },
                "_priority":0,
            },
            "second_boo_cd":{
                trigger:{
                    player:["phaseEnd"],
                },
                popup:false,
                charlotte:true,
                filter:function (event,player){
        return player.countMark('second_boo_cd');
    },
                content:function (){
        'step 0'
      player.removeMark('second_boo_cd',1);
        'step 1'
      if(!player.countMark('second_boo_cd')) player.removeSkill('second_boo_cd');
    },
                forced:true,
                mark:true,
                marktext:"二",
                intro:{
                    content:function (storage,player,skill){
            return '【第二爆弹】还有'+get.cnNumber(player.storage.second_boo_cd)+'回合重置。';
       
        },
                },
                "_priority":0,
            },
            "die_stand":{
                trigger:{
                    player:"dying",
                },
                charlotte:true,
                forced:true,
                content:function (){
        player.die();
    player.addSkill('second_boo_cd');
    player.addMark('second_boo_cd',5);
      },
                "_priority":0,
            },
            baizucuocu:{
                mod:{
                    ignoredHandcard:function (card,player){
        if(card.hasGaintag('baizucuocu')){
            return true;
        }
         },
                    "cardEnabled2":function (card){
            if(get.itemtype(card)=='card'&&card.hasGaintag('baizucuocu')) return false;
        },
                    cardDiscardable:function (card){
            if(card.hasGaintag('baizucuocu')) return false;
        },
                },
                trigger:{
                    global:["phaseEnd","phaseBegin","damageEnd","loseHpEnd"],
                    player:"die",
                },
                filter:function (event,player){
        return player.getCards('hes').filter(function(card){
            return card.hasGaintag('baizucuocu');
        }).length<=0||!player.isAlive();
    },
                content:function (){
       player.removeSkill('baizucuocu'); 
       player.removeSkill('baizucuocu_gain'); 
       player.storage.baizucuocu_gain_target.unmarkSkill('baizucuocu');
       player.storage.baizucuocu_gain_target.storage.third_boo_cards=[];
    },
                mark:true,
                nobracket:true,
                charlotte:true,
                forced:true,
                marktext:"败",
                intro:{
                    content:function (storage,player,skill){
                return '拥有"败者食尘"的标签的牌无法被弃置，也不能使用，不占用手牌上限。你可以以将一张带有"败者食尘"的标签的牌展示並交给一名除你以外的角色，每回合限一次。';       
        },
                },
                onremove:function (player){
        player.removeGaintag('baizucuocu');
    },
                "_priority":0,
            },
            "baizucuocu2":{
                nobracket:true,
                trigger:{
                    player:"die",
                },
                charlotte:true,
                forceDie:true,
                forced:true,
                content:function (){
       player.say('我一定要......按下按钮...');
       player.line(player.storage.third_boo_target,'green');
       if(player.storage.third_boo_target.hasSkill('baizucuocu')){
           player.storage.third_boo_target.removeSkill('baizucuocu');
           player.storage.third_boo_target.removeSkill('baizucuocu_gain');
           
            } 
    },
                "_priority":0,
            },
            "baizucuocu_gain":{
                enable:"phaseUse",
                usable:1,
                discard:false,
                filter:function (event,player){
        return player.hasSkill('baizucuocu');
    },
                prompt:function (player) {
       var player=_status.event.player;
       return '你可以将一张带有"败者食尘"的标签的牌展示並交给一名除'+get.translation(player.storage.baizucuocu_gain_target)+'以外的角色，每回合限一次。';       
    },
                filterTarget:function (card,player,target){
        return player!=target&&target!=player.storage.baizucuocu_gain_target;
    },
                filterCard:function (card){
        return card.hasGaintag('baizucuocu');
    },
                check:function (card){
        return 1;
    },
                content:function (){
        'step 0'
       player.showCards(cards[0],'"败者食尘"');
        'step 1'
       target.gain(cards[0],player); 
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            muxhuo:{
                trigger:{
                    player:["phaseDrawBegin2"],
                },
                filter:function (event,player){
        return !event.numFixed
    },
                check:function (event,player){
        return player.countCards('h')>2;
    },
                content:function (){
       'step 0' 
       trigger.cancel();
       event.cards=get.cards(2);
       player.showCards(event.cards,'谋害'); 
       'step 1' 
      if(get.color(event.cards[0])==get.color(event.cards[1])){
          player.gain(event.cards,'gain2');
          event.finish();
      }else{
          player.chooseTarget(get.prompt('muxhuo'),'对一名角色造成1点伤害',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        }); 
      }
        'step 2'
        if(result.bool){
            var target=result.targets[0];        
            player.line(target,'green');
            if(get.distance(player,target)<=1){
            target.damage(2);    
            }else target.damage();            
            }
    },
                "_priority":0,
            },
            futuo:{
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                limited:true,
                enable:"phaseUse",
                filter:function (event,player){
        return  true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){  
        'step 0'
        target.storage.futuo_hp=target.hp;
        target.storage.futuo_maxHp=target.maxHp;
        target.storage.futuo2=2;
        'step 1'
        target.maxHp=1;
        target.hp=1;
        target.update();       
        target.addSkill('futuo2');
        player.awakenSkill('futuo');
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "futuo2":{
                init:function (player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function (player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                skillBlocker:function (skill,player){        
        return !lib.skill[skill].charlotte;
    },
                trigger:{
                    player:["phaseBegin"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.countMark('futuo2');
    },
                content:function (){
        'step 0'
        player.storage.futuo2--;
        player.updateMarks();
        'step 1'
        if(player.countMark('futuo2')<=0){
           player.maxHp=player.storage.futuo_maxHp
           player.hp=player.storage.futuo_hp
           player.update();
           player.removeSkill('futuo2');
        }
    },
                mark:true,
                marktext:"返",
                intro:{
                    content:function (storage,player,skill){
                return '返童效果将会持续'+get.cnNumber(player.storage.futuo2)+'个准备阶段后结束。';       
        },
                },
                "_priority":0,
            },
            shenku:{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                selectCard:[1,Infinity],
                filterCard:function (card){
        return true;
    },
                filterTarget:function (card,player,target){
        return !target.hasSkill('shenku2');
    },
                check:function (card){
       var player=_status.event.player;
        var max=Math.min(player.isDamaged()?3:2,4-player.countMark('shenku2'));        
        if(max==0&&ui.selected.length>0) return 0;
        return 7-ui.selected.cards.length-get.value(card);  
    },
                discard:true,
                content:function (){         
        target.addSkill('shenku2');
        target.addMark('shenku2',cards.length);
    },
                ai:{
                    result:{
                        player:function (player){                
                if(player.hp<3||player.countCards('h')>2) return 1;
                return -1;
            },
                        target:function (player,target){                
               // var eff=get.damageEffect(target,player);
                var att=get.attitude(target,player);
                if(att>0) return 1.5;
                if(player==target) return 2.5;               
                return -1;
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "shenku2":{
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
                mark:true,
                marktext:"沙",
                intro:{
                    content:function (storage,player,skill){
                return '还有'+get.cnNumber(player.storage.shenku2)+'标"沙"标记。受到伤害后，伤害减一并移除一枚标记。此外，防御距离+1。';       
        },
                },
                trigger:{
                    player:"damageBegin4",
                },
                forced:true,
                filter:function (event,player){
       return player.countMark('shenku2')&&event.num;
    },
                content:function (){
        'step 0'
        trigger.num--;
        player.removeMark('shenku2');
        'step 1'
        if(!player.countMark('shenku2')){
            player.removeSkill('shenku2')
        }
    },
                "_priority":0,
            },
            zhucaty:{
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.zhucaty_distent>=0;
    },
                check:function (player){
        var num=player.getStat('skill').zhucaty||0;
        return player.hp>2&&num<2;
    },
                init:function (player){
        player.storage.zhucaty_distent=0;
    },
                content:function (){
        'step 0'
        player.say(player.name);
        var num=player.getStat('skill').zhucaty;
        event.num=num;
        player.loseHp(num);
        player.storage.zhucaty_distent++;
        'step 1'
        if(!player.hasSkill('zhucaty_distent')) player.addTempSkill('zhucaty_distent');
        player.updateMark();
        if(event.num) player.draw(event.num);
    },
                ai:{
                    basic:{
                        order:9.5,
                    },
                    result:{
                        player:function (player){
                var num=player.getStat('skill').zhucaty
                if(num>=player.hp-1) return -1;                
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "zhucaty_distent":{
                mark:true,
                marktext:"战",
                intro:{
                    content:function (storage,player,skill){
            return '进攻距离+'+player.countMark('zhucaty_distent')+'，并且可以多使用'+player.countMark('zhucaty_distent')+'张杀。';
            
       
        },
                },
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-from.storage.zhucaty_distent;
        },
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+=player.countMark('zhucaty_distent');
        },
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                popup:false,
                content:function (){
      if(player.storage.zhucaty_distent) player.storage.zhucaty_distent=0
      player.updateMark();
    },
                "_priority":0,
            },
            cuyuan:{
                group:["cuyuan_restart","cuyuan_use"],
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
       return player.isPhaseUsing();
    },
                        content:function (){
        'step 0'      
   player.storage.cuyuan_effect=player.getStat().card.sha;
    },
                        sub:true,
                        "_priority":0,
                    },
                    restart:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
       return player.storage.cuyuan_effect;
    },
                        forced:true,
                        popup:false,
                        content:function (){
      if(player.storage.cuyuan_effect) player.storage.cuyuan_effect=0;
        player.updateMark();
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
       return player.storage.cuyuan_effect;
    },
                frequent:true,
                content:function (){
      if(!player.hasSkill('cuyuan_effect')) player.addTempSkill('cuyuan_effect',{player:'phaseBegin'});
      player.updateMark();
    },
                "_priority":0,
            },
            jundgyiw:{
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                limited:true,
                enable:"phaseUse",
                filter:function (event,player){
        var num=player.maxHp-player.hp;
        return num;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
       player.loseMaxHp(true);
       target.damage(3);
       player.awakenSkill('jundgyiw');
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "cuyuan_effect":{
                mark:true,
                marktext:"影",
                intro:{
                    content:function (storage,player,skill){
           var num=player.countMark('cuyuan_effect');
           num--;
           if(player.countMark('cuyuan_effect')>1) return '当你成为一名其他角色使用牌的目标后，你可以摸'+num+'张牌';
           return '当你成为一名角色使用牌的目标时，你回复一点体力。';      
        },
                },
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function (event,player,target){
        if(!event.card||player.isPhaseUsing()) return false;
        if(event.target==player&&event.player==player) return false;        
        return event.target==player;
    },
                content:function (){
        'step 0'
        var num=player.countMark('cuyuan_effect');
        player.draw(num-1);
        if(num<2) player.recover();
        'step 1'
        player.removeMark('cuyuan_effect');
    },
                "_priority":0,
            },
            yuyuio:{
                group:"yuyuio_phase",
                subSkill:{
                    phase:{
                        enable:"phaseUse",
                        filter:function (event,player){
        return !player.storage.yuyuio_lastCard||get.translation(ui.cardPile.childNodes[0])!=get.translation(player.storage.yuyuio_lastCard);
    },
                        content:function (){              
                player.storage.yuyuio_target=player;               
                event.card=get.cards(1);        
                if(!player.storage.yuyuio_lastCard) player.storage.yuyuio_lastCard=[];
        var content=['牌堆顶的一张牌。',event.card];        
            player.chooseControl('ok').set('dialog',content);
        player.storage.yuyuio_color=get.color(event.card);
        for(var i=0;i<event.card.length;i++){
            ui.cardPile.insertBefore(event.card[i],ui.cardPile.firstChild);
        }
                if(get.suit(event.card)=='heart'){
                    if(get.suit(player.storage.yuyuio_lastCard)=='heart'&&player.storage.yuyuio_lastCard) player.gainMaxHp(true);
                    player.recover();
                }
                if(get.suit(event.card)=='diamond'){
       player.draw('bottom');
                }
                if(get.suit(event.card)=='club'){
                    if(get.suit(player.storage.yuyuio_lastCard)=='club'&&player.storage.yuyuio_lastCard){
                       player.damage(2,'thunder','nosource'); 
                    }else player.damage('thunder','nosource');
                    
                }
                if(get.suit(event.card)=='spade'){
                    if(get.suit(player.storage.yuyuio_lastCard)=='spade'&&player.storage.yuyuio_lastCard) player.turnOver();
                    player.loseHp();
                }
        player.addTempSkill('yuyuio2');
        player.storage.yuyuio_lastCard=event.card;
        game.log(player,'观看了牌堆顶的一张牌。');
        game.updateRoundNumber();
        game.delayx(); 
            },
                        ai:{
                            basic:{
                                order:1,
                            },
                            result:{
                                player:function (player){
                if(get.color(ui.cardPile.childNodes[0])=='black') return -1;
                return 1;
            },
                            },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                mark:true,
                marktext:"预",
                intro:{
                    content:function (storage,player,skill){
           var content=['预言目标为：'+get.translation(player.storage.yuyuio_target)];         
           if(!player.storage.yuyuio_target) content='未有预言目标'
           if(player.storage.yuyuio_lastCard&&player.storage.yuyuio_target) content.push('<br>上一张预言的卡为：'+get.translation(player.storage.yuyuio_lastCard))
           return content;
        },
                },
                init:function (player){        
        player.storage.yuyuio_color=[]; 
    },
                trigger:{
                    global:["phaseBegin","phaseEnd"],
                },
                check:function (event,player){
        return get.attitude(player,event.player)<=0&&get.color(ui.cardPile.childNodes[0])=='black'||get.attitude(player,event.player)>0&&get.color(ui.cardPile.childNodes[0])=='red';
    },
                filter:function (event,player,target){       
        return !player.storage.yuyuio_lastCard||get.translation(ui.cardPile.childNodes[0])!=get.translation(player.storage.yuyuio_lastCard);
    },
                content:function (){
        'step 0'
        player.storage.yuyuio_target=trigger.player;
        event.card=get.cards(1);  
        if(!player.storage.yuyuio_lastCard) player.storage.yuyuio_lastCard=[];
        var content=['牌堆顶的一张牌。',event.card];        
            player.chooseControl('ok').set('dialog',content);
        player.storage.yuyuio_color=get.color(event.card);
        for(var i=0;i<event.card.length;i++){
            ui.cardPile.insertBefore(event.card[i],ui.cardPile.firstChild);
        }
        if(get.suit(event.card)=='heart'){
            if(get.suit(player.storage.yuyuio_lastCard)=='heart'&&player.storage.yuyuio_lastCard) trigger.player.gainMaxHp();
                    trigger.player.recover();
                }
        if(get.suit(event.card)=='diamond'){
            
       trigger.player.draw('bottom');
                    
                }
                if(get.suit(event.card)=='club'){
                    if(get.suit(player.storage.yuyuio_lastCard)=='club'&&player.storage.yuyuio_lastCard){
                    trigger.player.damage(2,'thunder','nosource');    
                    }else trigger.player.damage('thunder','nosource');                    
                }
                if(get.suit(event.card)=='spade'){
                    if(get.suit(player.storage.yuyuio_lastCard)=='spade'&&player.storage.yuyuio_lastCard) trigger.player.turnOver();
                    trigger.player.loseHp();
                }
        player.addTempSkill('yuyuio2');
        player.storage.yuyuio_lastCard=event.card;
        game.log(player,'观看了牌堆顶的一张牌。');
        game.updateRoundNumber();
        game.delayx();
    },
                "_priority":0,
            },
            "yuyuio2":{
                trigger:{
                    global:["useCard","respond"],
                },
                forced:true,
                usable:1,
                filter:function (event,player){
        return event.player==player.storage.yuyuio_target&&get.color(event.card)==player.storage.yuyuio_color;
    },
                content:function (){        
       var card=get.bottomCards()[0];;
       player.gain(card);
       player.$draw();
    },
                "_priority":0,
            },
            yuirunt:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
       return event.num;
    },
                content:function (){
        player.addTempSkill('diaohulishan');
    },
                "_priority":0,
            },
            "虫箭1":{
                subSkill:{
                    air:{
                        sub:true,
                        "_priority":0,
                    },
                },
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                enable:"phaseUse",
                filter:function (event,player){
        return !player.storage.虫箭1&&!player.hasSkill('虫箭1_air');
    },
                content:function (){
        player.addSkill('虫箭1_air')
        player.loseHp();
        //1迪亚波罗 2承太郎 4迪奥 9波波 6吉良吉影
        var list=["jojo_1","jojo_2","jojo_4","jojo_9","jojo_6","jojo_11"];
        event.skill_list=['stand_skill','stand_skill2','stand_skill3','stand_skill4','stand_special_cyuhos'];
        var skill=event.skill_list.randomGet();
        if(list.contains(player.name)){
            var playern=player.name;
            if(playern=="jojo_11"){
                player.say('此时一位秧歌star拿到了他的钢琴。');                
                player.$fullscreenpop('黄金体验•镇魂曲','metal');
                game.delay(0.8);
                player.removeSkill('hung_gold');
                player.addSkill('hung_gold_update');
                ui.backgroundMusic.src=lib.assetURL+'extension/JoJo/fight_gold.mp3';                   
            }
            if(playern=="jojo_1"){
                player.$fullscreenpop('绯红之王•镇魂曲','fire');
                game.delay(0.8);
                player.removeSkill('fuhunt');
                player.addSkill('fuhunt_update');
            }
            if(playern=="jojo_2"){
                player.$fullscreenpop('白金之星•镇魂曲','thunder');
                game.delay(0.8);
                player.removeSkill('baijui');
                player.addSkill('baijui_update');
            }
            if(playern=="jojo_4"){
                player.$fullscreenpop('世界•镇魂曲','fire');
                game.delay(0.8);
                player.removeSkill('theworld');
                player.addSkill('theworld_update');
            }
            if(playern=="jojo_6"){
                player.$fullscreenpop('第三爆弹•败者食尘','thunder');
                game.delay(0.8);
                player.addSkill('third_boo');                  
            }
            if(playern=="jojo_9"){
                player.$fullscreenpop('银色战车•镇魂曲','thunder');
                game.delay(0.8);
                player.removeSkill('zhucaty');
                player.addSkill('zhucaty_update');
            }
        }else{
                   player.addSkill(skill); 
            if(skill=='stand_special_cyuhos'){
        player.$fullscreenpop('特殊替身•猜拳小子','thunder');
        game.delay(0.8);
        }
        }        
        player.storage.虫箭1=true;
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.hp<3) return -1;
                return 1;
            },
                    },
                },
                init:function (player,skill){
        player.storage[skill]=false;
    },
                "_priority":0,
            },
            "fuhunt_update":{
                forced:true,
                charlotte:true,
                trigger:{
                    target:"useCardToTarget",
                },
                direct:true,
                filter:function (event,player){
        if(event.target!=player||event.player==player) return false;                          
        return player.countCards('h');
    },
                shaRelated:true,
                checkx:function (event,player){
        return get.attitude(player,event.player)<=0;
    },
                content:function (){
        'step 0'
 var next=player.chooseToDiscard(get.prompt2('fuhunt_update'),1,'h',false,function(card){
    return true;
});
        var check=lib.skill.fuhunt_update.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('goon',check);
        'step 1'
        if(result.bool){
            player.line(trigger.player,'fire');
        trigger.player.chooseCard(2,'he',false,'请交给'+get.translation(player)+'两张牌否则受到一点伤害').set('ai',function(card){
            if(card.name=='tao') return -10;
            if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
            return get.unuseful(card)+2.5*(5-get.owner(card).hp);
        });
             }else event.finish();
   'step 2'   
   if(result.bool){    
   event.cards=result.cards;
   player.gain(event.cards,'gain2'); 
   trigger.getParent().excluded.add(player);
        }else{
        trigger.player.damage()  ;
        game.broadcastAll(function(target1,target2){
        game.swapSeat(target1,target2);
        },player,trigger.player);
        player.insertPhase();
        }
    },
                "_priority":0,
            },
            "baijui_update":{
                group:"baijui_gainsha",
                trigger:{
                    target:"useCardToTarget",
                },
                charlotte:true,
                forced:true,
                direct:true,
                filter:function (event,player){
        if(event.target!=player||event.player==player) return false;                          
        if(get.name(event.card)!='sha') return false;
        return player.countCards('he');
    },
                shaRelated:true,
                checkx:function (event,player){
        return !player.countCards('h',{name:'shan'});
    },
                content:function (){
        'step 0'
        player.draw();
        var next=player.chooseToDiscard(get.prompt2('baijui'),1,'he',false,function(card){
    return true;
});
        var check=lib.skill.baijui.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('goon',check);
        'step 1'
        if(result.bool){
            player.judge();
            player.logSkill("spbaijui",trigger.target);
            trigger.getParent().excluded.add(player);
        }else event.finish();
        'step 2'
        event.color=result.color;
        if(event.color=='black'){
            player.say('欧拉！！');
            player.useCard({name:'sha',isCard:false},trigger.target,false);               
        }
    },
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
                "_priority":0,
            },
            "theworld_update":{
                group:["theworld_sha","theworld_update_sha"],
                subSkill:{
                    sha:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function (event,player){
            return event.card&&event.card.name=='sha'&&event.target.hp<player.hp;
    },
                        content:function (){
        trigger.getParent().directHit.add(trigger.target);
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"damageBegin",
                },
                charlotte:true,
                forced:true,
                direct:true,
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.card.name=='sha'&&event.source==player&&event.player!=player){
           return true;
        }
        return false;       
    },
                content:function () {
            player.logSkill('theworld',trigger.player);
            trigger.num += 1;
        
    },
                "_priority":0,
            },
            "zhucaty_update":{
                forced:true,
                charlotte:true,
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.zhucaty_distent>=0;
    },
                check:function (player){
        var num=player.getStat('skill').zhucaty_update||0;
        return player.hp>2&&num<3;
    },
                init:function (player){
        player.storage.zhucaty_distent=0;
    },
                content:function (){
        'step 0'
        var num=player.getStat('skill').zhucaty_update;
        event.num=num;
        num--;
        if(num>0) player.loseHp(num);
        player.storage.zhucaty_distent++;
        'step 1'
        if(!player.hasSkill('zhucaty_distent')) player.addTempSkill('zhucaty_distent');
        player.updateMark();
        if(event.num) player.draw(event.num+1);
    },
                "_priority":0,
            },
            "stand_skill":{
                mark:true,
                marktext:"替",
                intro:{
                    content:function (storage,player,skill){
                return '出牌阶段限一次，你可以对一名攻击范围内的角色使用一张【杀】。';       
        },
                },
                usable:1,
                enable:"phaseUse",
                filter:function (event,player){
        return  true;
    },
                filterTarget:function (card,player,target){
        return player!=target&&player.inRange(target);
    },
                content:function (){
        player.useCard({name:'sha',isCard:false},target,false);               
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "stand_skill2":{
                mark:true,
                marktext:"替",
                intro:{
                    content:function (storage,player,skill){
                return '锁定技，准备阶段，你可以回复一点体力。';       
        },
                },
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        var num=player.getDamagedHp();
        return num>0;
    },
                content:function (){
        player.recover();
    },
                "_priority":0,
            },
            "stand_skill3":{
                mark:true,
                marktext:"替",
                intro:{
                    content:function (storage,player,skill){
                return '锁定技，你不能成为梅花牌的合法使用目标。';       
        },
                },
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.suit(card)=="club"&&target!=player){
                return false;
            }
        },
                },
                "_priority":0,
            },
            "stand_skill4":{
                mark:true,
                marktext:"替",
                intro:{
                    content:function (storage,player,skill){
                return '锁定技，摸牌阶段，你可以多摸一张牌。';       
        },
                },
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function (event,player){
        return !event.numFixed;
    },
                content:function (){
        trigger.num++;
    },
                "_priority":0,
            },
            "stand_special_cyuhos":{
                group:"stand_special_cyuhos_dying",
                subSkill:{
                    tag:{
                        forced:true,
                        mark:true,
                        charlotte:true,
                        marktext:"猜",
                        intro:{
                            content:function (storage,player,skill){
            return '失去的技能为：'+get.translation(player.storage.stand_remove_skill);      
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    dying:{
                        trigger:{
                            player:"dying",
                        },
                        filter:function (event,player){
            return player.storage.stand_special_cyuhos==true;
    },
                        forced:true,
                        charlotte:true,
                        content:function (){
               player.line(player.storage.stand_special_cyuhos_target,'green');
               player.storage.stand_special_cyuhos=false;     
               player.storage.stand_special_cyuhos_target.addSkill(player.storage.stand_special_cyuhos_skill);                 
               player.storage.stand_special_cyuhos_target.removeSkill("stand_special_cyuhos_tag");
               player.removeSkill(player.storage.stand_special_cyuhos_skill);
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                init:function (player){
        if(!player.storage.stand_special_cyuhos) player.storage.stand_special_cyuhos=false;
        if(!player.storage.stand_special_cyuhos_skill) player.storage.stand_special_cyuhos_skill=[];   
        if(!player.storage.stand_special_cyuhos_target) player.storage.stand_special_cyuhos_target=[];       
    },
                mark:true,
                marktext:"猜",
                intro:{
                    content:function (storage,player,skill){
            if(player.storage.stand_special_cyuhos==false) return '出牌阶段限一次，你可以与一名角色进行猜拳，若你赢，你可以获得其武将牌上的一个技能，使该技能失效。'; 
            return '当前获得的技能为：'+get.translation(player.storage.stand_special_cyuhos_skill);      
        },
                },
                usable:1,
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.stand_special_cyuhos==false;
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){ 
        'step 0'
                   player.line(target,'green');
                   player.chooseToPSS(target);
        'step 1'        
        if(result.bool){
            player.$skill('猜拳小子','fire','red','avatar');
            game.delay(0.8);
            var list=[];
        var listm=[];
        var listv=[];
        if(target.name1!=undefined) listm=lib.character[target.name1][3];
        else listm=lib.character[target.name][3];
        if(target.name2!=undefined) listv=lib.character[target.name2][3];
        listm=listm.concat(listv);
        var func=function(skill){
           var info=get.info(skill);
            if(!info||info.hiddenSkill||info.zhuSkill||info.juexingji||info.dutySkill||lib.skill.drlt_duorui.bannedList.contains(skill)) return false;
            return true;
        };
        for(var i=0;i<listm.length;i++){
            if(func(listm[i])) list.add(listm[i]);
        }
        event.skills=list;
        }else if(result.tie){
                        event.goto(0);
                    }else event.finish();
        'step 2'      
        if(event.skills.length>0){
            player.chooseControl(event.skills).set('prompt','请选择要获得的技能').set('ai',function(){return event.skills.randomGet()});
        }
        else event.finish();
        'step 3'
        if(result.control){ 
        player.addSkill(result.control);
        target.removeSkill(result.control);
        player.storage.stand_special_cyuhos_skill=result.control;
        target.storage.stand_remove_skill=result.control;
        player.storage.stand_special_cyuhos_target=target;
        target.addSkill("stand_special_cyuhos_tag");
        player.storage.stand_special_cyuhos=true;
        game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】')    
             }
    },
                ai:{
                    result:{
                        target:function (player,target){             
                return -2;
            },
                    },
                    order:20,
                    expose:0.4,
                },
                "_priority":0,
            },
            "hung_gold":{
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        popup:false,
                        charlotte:true,
                        filter:function (event,player){
                return event.source==player&&event.player!=player;
    },
                        forced:true,
                        content:function (){
              trigger.player=player;
              event.finish();
            },
                        sub:true,
                        "_priority":0,
                    },
                    hp:{
                        trigger:{
                            player:"damageBegin",
                        },
                        popup:false,
                        charlotte:true,
                        filter:function (event,player){
                return player.countMark('hung_gold_hp')&&event.source!=player;
    },
                        forced:true,
                        content:function (){
                'step 0'
                player.popup("生成功抵消了"+trigger.num+"伤害");                
                event.num=trigger.num
                if(trigger.num>player.countMark('hung_gold_hp')){
                    trigger.num-=player.countMark('hung_gold_hp');
                    player.storage.hung_gold_hp=0;
                }else{
                    trigger.cancel();
                    player.storage.hung_gold_hp-=trigger.num;                    
                }
                player.updateMark('hung_gold_hp');
                'step 1'
                if(!player.storage.hung_gold_hp){
                    player.removeSkill('hung_gold_hp');
                    player.removeSkill('hung_gold_effect');
                    player.removeSkill('hung_gold_damage');
                }
            },
                        mark:true,
                        marktext:"生",
                        intro:{
                            content:function (storage,player,skill){
                return '"生"的体力还有'+get.cnNumber(player.storage.hung_gold_hp)+'点。';       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    effect:{
                        onremove:function (player,skill){
        var cards=player.getExpansions(skill);
        if(cards.length) player.loseToDiscardpile(cards);
    },
                        intro:{
                            content:"expansion",
                            markcount:"expansion",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2'||event.player.hasSkill('hung_gold_effect')) return false;
        if(event.source==player&&event.player!=player&&event.player.countCards('e')){
           return true;
        }
        return false;       
    },
                content:function () {
      'step 0'
        player.choosePlayerCard(trigger.player,'e',get.prompt('hung_gold',trigger.player)).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.target)>=0) return 0;
            return get.buttonValue(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('hung_gold',trigger.player);
            var c=result.cards[0];               
            var skill=lib.card[c.name].skills;
            if(!trigger.player.hasSkill('hung_gold_effect')) trigger.player.addSkill('hung_gold_effect');
            if(!trigger.player.hasSkill('hung_gold_hp'))  trigger.player.addSkill('hung_gold_hp');
            if(!trigger.player.hasSkill('hung_gold_damage'))  trigger.player.addSkill('hung_gold_damage');
            trigger.player.storage.hung_gold_hp=3;
            trigger.player.updateMark('hung_gold_hp');
            trigger.player.addToExpansion(c,'giveAuto',player).gaintag.add('hung_gold_effect');            
            trigger.player.removeAdditionalSkill('hung_gold_effect');
            if(skill) trigger.player.addAdditionalSkill('hung_gold_effect',skill);
        }       
    },
                "_priority":0,
            },
            dujun:{
                limited:true,
                skillAnimation:true,
                animationColor:"gold",
                unique:true,
                init:function (player){
        player.storage.dujun=false;
    },
                intro:{
                    content:"limited",
                },
                trigger:{
                    source:"damageSource",
                },
                priority:10,
                filter:function (event,player){
        var give_card=event.player.countCards('hes',function(card){
            return get.name(card)=='zhuyueo';
        });
        var cards=get.cardPile2(function(card){
            return get.name(card)=='zhuyueo';
        });
        var dcards=get.discardPile(function(card){
            return get.name(card)=='zhuyueo';
        });
        if(player.storage.dujun) return false;        
        return (event.player!=player&&event.player.hp<=1)&&(cards||give_card||dcards);
    },
                content:function (){
        player.storage.dujun=true;
        player.awakenSkill('dujun');
        var give_card=trigger.player.getCards('hes',function(card){
            return get.name(card)=='zhuyueo';
        });
        if(give_card){
            trigger.player.line(player,'green');
            trigger.player.give(give_card,player);
        }
        var cards=get.cardPile2(function(card){
            return get.name(card)=='zhuyueo';
        });
        var dcards=get.discardPile(function(card){
            return get.name(card)=='zhuyueo';
        });
        if(cards){
            player.gain(cards,'gain2','log');
             }
        if(dcards){
            player.gain(dcards,'gain2','log');
             }      
    },
                mark:true,
                "_priority":1000,
            },
            "hung_gold_update":{
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
        if(event.player.hasSkill('hung_gold_update_hui')) return false;
        if(event.source==player&&event.player!=player&&!game.hasPlayer(function(current){
                    return current.hasSkill('hung_gold_update_hui');
                })){
           return true;
        }
        return false;       
    },
                content:function (){
        'step 0'
        player.$fullscreenpop('黄金体验•镇魂曲','metal');
                game.delay(0.8);
        'step 1'
        player.say('这就是，黄金体验镇魂曲！他已经哪里都去不了了...');
        game.delay(1.2);
        'step 2'
     trigger.player.addSkill('hung_gold_update_hui');      
    },
                "_priority":0,
            },
            "healthy_hp":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')<player.maxHp;
    },
                content:function (){
        'step 0'        
        player.$fullscreenpop('黄金体验•再生能力','metal');
                game.delay(0.8);
        player.draw(player.maxHp-player.countCards('h'));
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>=player.hp-1) return -1;                
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "hung_gold_update_hui":{
                mod:{
                    cardEnabled:function (card){
        return false;
         },
                    cardUsable:function (card){
        return false;
        },
                    cardRespondable:function (card){
        return false;
        },
                    cardSavable:function (card){
        return false;
        },
                },
                "hung_gold_update_hui_special":true,
                init:function (player,skill){
        player.addSkillBlocker(skill);
        player.storage.hung_gold_update_hui_hp=0;
        player.storage.hung_gold_update_hui=3;
    },
                onremove:function (player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                skillBlocker:function (skill,player){        
        return !lib.skill[skill].hung_gold_update_hui_special;
    },
                group:"hung_gold_update_hui_save",
                subSkill:{
                    hp:{
                        "hung_gold_update_hui_special":true,
                        mark:true,
                        marktext:"镇",
                        intro:{
                            content:function (storage,player,skill){
                return '体力值已变化：'+player.storage.hung_gold_update_hui_hp;       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    save:{
                        "hung_gold_update_hui_special":true,
                        trigger:{
                            player:["recoverBegin","changeMaxHp","damageBegin","loseHpBegin"],
                        },
                        forced:true,
                        popup:false,
                        content:function (){
        player.storage.hung_gold_update_hui_hp+=trigger.num
        player.updateMark('hung_gold_update_hui_hp');
       if(!player.hasSkill('hung_gold_update_hui_hp')) player.addSkill('hung_gold_update_hui_hp');
       trigger.cancel();
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:["phaseBefore"],
                },
                forced:true,
                popup:false,
                mark:true,
                content:function (){
        'step 0'
        trigger.cancel();
        if(player.countMark('hung_gold_update_hui')){
           player.loseHp();
           player.storage.hung_gold_update_hui--;
           player.updateMark('hung_gold_update_hui');
        }
        'step 1'
                if(!player.countMark('hung_gold_update_hui')){
                    player.removeSkill('hung_gold_update_hui');
                    player.removeSkill('hung_gold_update_hui_hp');
                    player.removeSkill('hung_gold_update_hui_save');
                    if(player.storage.hung_gold_update_hui_hp>player.maxHp){
                        player.die();
                    }else player.loseMaxHp(player.storage.hung_gold_update_hui_hp);
                }
    },
                marktext:"镇",
                intro:{
                    content:function (storage,player,skill){
                return '镇魂曲效果将会持续'+get.cnNumber(player.storage.hung_gold_update_hui)+'个回合。<br><i>你永远无法到达死亡的真实。';       
        },
                },
                "_priority":0,
            },
            monzui:{
                trigger:{
                    player:"shaMiss",
                },
                shaRelated:true,
                direct:true,
                content:function (){
        'step 0'
        event.nature=trigger.card.nature
        player.chooseTarget('你可以将'+get.translation(event.nature)+get.translation(trigger.card.name)+'转移给另一名角色',false,function(card,player,target){
                return target!=player&&target!=trigger.target;
            }).set('ai',function(target){
                 var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
            })
        'step 1'
        if(result.bool){
            var target=result.targets[0];
                player.line(target,'green');
            player.useCard({name:'sha',nature:event.nature?event.nature:null,isCard:trigger.card.isCard?true:false},target,false);       
        
        }
    },
                "_priority":0,
            },
            doubuo:{
                group:"doubuo_use",
                subSkill:{
                    air:{
                        sub:true,
                        "_priority":0,
                    },
                    use:{
                        enable:"phaseUse",
                        filter:function (event,player){
        return player.countMark('doubuo')&&!player.hasSkill('doubuo_air');
    },
                        filterTarget:function (card,player,target){
        return player!=target;
    },
                        content:function (){
        'step 0'
        var rate=[1]
        if(player.countMark('doubuo')==4) rate.push(2);
        if(rate.randomGet()==1){
        player.useCard({name:'sha',isCard:false},target,false).card.doubuo=true;   
             }else{
                 player.addTempSkill('doubuo_air');
                 player.popup('卡壳');
             }
        if(rate==1) player.removeMark('doubuo');
    },
                        ai:{
                            result:{
                                target:function (player,target){                
                return get.effect(target,{name:'sha'},player,player);
            },
                            },
                            order:7,
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                marktext:"弹",
                intro:{
                    content:function (storage,player,skill){
                return '你拥有'+get.cnNumber(player.storage.doubuo)+'枚"弹"';       
        },
                },
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                filter:function (event,player){        
        var list=[];
         var history=player.getHistory('useCard');
        for(var i=0;i<history.length;i++){
            if(history[i].card.name=='sha'&&history[i].isPhaseUsing()) return false;
        }
        return true;
    },
                content:function (){
        player.addMark('doubuo');
    },
                "_priority":0,
            },
            youcui:{
                subSkill:{
                    skill:{
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"useCardBefore",
                },
                frequent:true,
                filter:function (event,player){
       return event.player!=player&&event.cards.length==1&&!player.hasSkill('youcui_skill');
    },
                content:function (){
        'step 0'
        event.card=trigger.cards[0];
         content=['使用的牌。',event.card];        
            player.chooseControl('ok').set('dialog',content);
        'step 1'
        var card=get.cardPile2(function(card){
            return get.type(card)!=get.type(event.card);
        });
        if(card){
        player.gain(card,'gain2');
        //player.$draw();
             }
        'step 2'
            var next=player.chooseToDiscard(get.prompt('youcui'),'弃一张与'+get.translation(event.card)+'相同类型的手牌，否则此技能失效。',1,'h',false,function(card){
    return get.type(card)==get.type(event.card);
});        
        next.set('ai',function(card){
            if(player.countCards('h')>3) return 8-get.value(card);   
            return 0;
        });
        'step 3'
        if(!result.bool){
            player.addTempSkill('youcui_skill');
        }
    },
                "_priority":0,
            },
            whzuio:{
                group:"whzuio_sha",
                subSkill:{
                    sha:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function (event,player){
            return event.card&&event.card.name=='sha';
    },
                        content:function (){
        trigger.getParent().directHit.add(trigger.target);
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
       return event.num;
    },
                content:function (){
        trigger.num++;
    },
                "_priority":0,
            },
            touhun:{
                filter:function (event,player){
        return player.hp<2&&!player.storage.touhun;
    },
                skillAnimation:true,
                animationColor:"fire",
                juexingji:true,
                derivation:["mzhuoi"],
                unique:true,
                trigger:{
                    player:["phaseZhunbeiBegin","dying"],
                },
                forced:true,
                content:function (){
        "step 0"
        ui.backgroundMusic.src=lib.assetURL+'extension/JoJo/迪亚波罗处刑曲.mp3';
        game.broadcastAll(function(player){           
           var Animation = ui.create.div();
           //Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
           Animation.setBackgroundImage('extension/JoJo/就是一场试练.gif');                         
                   Animation.style.backgroundSize='cover';               
                       Animation.style["z-index"] = 5;  
            Animation.style.width = (window.screen.width*1.4) + "px";
                        Animation.style.height= (window.screen.height*1.4) + "px";                        
                        Animation.style.left= "0%";
                        Animation.style.top = "0%";                        
                        ui.window.appendChild(Animation);
            setTimeout(function(){
    Animation.delete();
},8300);
            },player);
      game.delay(15); 
        "step 1"
        player.gainMaxHp();
        player.recover(Infinity);
        player.addSkill('mzhuoi');   
        game.log(player,'获得了技能','#g【绯红】');
        player.init('jojo_14');
        player.update();
        player.say('これは「試練」だ。過去に打ち勝てという「試練」とオレは受けとった。人の成長とは……未熟な過去に打ち勝つことだとな……');
        player.awakenSkill('whzuio');
        player.awakenSkill(event.name);
        player.storage[event.name]=true;
    },
                "_priority":0,
            },
            mzhuoi:{
                group:"mzhuoi_use",
                subSkill:{
                    black:{
                        mod:{
                            cardEnabled:function (card){
 return false;
         },
                            cardUsable:function (card){
             return false;
        },
                            cardRespondable:function (card){
           return false;
        },
                            cardSavable:function (card){
            return false;
        },
                        },
                        init:function (player,skill){
        player.addSkillBlocker(skill);
    },
                        onremove:function (player,skill){
        player.removeSkillBlocker(skill);
    },
                        charlotte:true,
                        skillBlocker:function (skill,player){        
        return !lib.skill[skill].charlotte;
    },
                        mark:true,
                        marktext:"绯",
                        intro:{
                            content:function (storage,player,skill){
                return '无法打出/使用牌，并且所有技能失效。<br><i>你们的替身能力就是「垃圾」，加上凭你们那低级的智商…就妄想摆脱绯红之王的预测能力，未来完全掌握在我手中！';       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    use:{
                        trigger:{
                            global:"useCardAfter",
                        },
                        prompt:function (player) {
               var player=_status.event.player;
               return get.prompt2('mzhuoi');       
            },
                        filter:function (event,player){
             return event.player!=player&&!player.isPhaseUsing()&&event.cards.length==1&&player.storage.mzhuoi.contains(event.card.number)
            },
                        content:function (){
                'step 0'
                var chat=['你所目击到，并且触碰到的东西，是「未来」的你自己。数秒过去的你自己所看到的「未来」的你自己。这就是我「绯红之王」的能力','我将时间消减并飞跃掉了！！'];
                player.$skill('绯红之王','fire','red','avatar');
                player.say(chat.randomGet());
                game.delay(9);
                player.storage.mzhuoi_target=trigger.player
                player.storage.mzhuoi=[]
                player.addSkill('mzhuoi_effect');
                player.addSkill('mzhuoi_endk');
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
                game.broadcastAll(function(player){           
           var Animation = ui.create.div();
           //Animation.style.backgroundImage = player.node.avatar.style.backgroundImage;
           Animation.setBackgroundImage('extension/JoJo/绯红之王发动特效.gif');                         
                   Animation.style.backgroundSize='cover';               
                       Animation.style["z-index"] = 5;  
            Animation.style.width = (window.screen.width*1.4) + "px";
                        Animation.style.height= (window.screen.height*1.4) + "px";                        
                        Animation.style.left= "0%";
                        Animation.style.top = "0%";                        
                        ui.window.appendChild(Animation);
            setTimeout(function(){
    Animation.delete();
},4500);
            },player);
                'step 1'
                game.delay(2.5);
                for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'fire');                
                event.targets[i].addSkill('mzhuoi_black');                
            }
                'step 2'
                var chat=['时间将再次开始铭刻！','只有「结果」！这个世界上只会留下「结果」！']
                player.say(chat.randomGet());
                game.delay(0.8);
                ui.clear();
                while(_status.event.name!='phaseLoop'){
            _status.event=_status.event.parent;
        }
        game.resetSkills();
        _status.paused=false;
        _status.event.player=player;
        _status.event.step=0;
            },
                        sub:true,
                        "_priority":0,
                    },
                    endk:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        charlotte:true,
                        forced:true,
                        content:function (){
                'step 0'
                player.removeSkill('mzhuoi_endk');
                 player.removeSkill('mzhuoi_effect');
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
                'step 1'
                for(var i=0;i<event.targets.length;i++){         
                event.targets[i].removeSkill('mzhuoi_black');                
            }
            },
                        sub:true,
                        "_priority":0,
                    },
                    effect:{
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        charlotte:true,
                        forced:true,
                        filter:function (event,player){
        return player.storage.mzhuoi_target.getNext()!=player||player.storage.mzhuoi_target.getPrevious()!=player;
    },
                        content:function (){
               'step 0' 
               player.chooseTarget('你可以与该名角色的上家或下家交换位置。',1,function(card,player,target){
            return target!=player&&(target==player.storage.mzhuoi_target.getNext()||target==player.storage.mzhuoi_target.getPrevious());
            }).set('ai',function(targets){
            return 1;
            })
               'step 1'
                if(result.bool){
            game.broadcastAll(function(target1,target2){
        game.swapSeat(target1,target2);
        },player,result.targets[0]);
                     }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                init:function (player){
        if(!player.storage.mzhuoi) player.storage.mzhuoi=[];
    },
                marktext:"绯",
                intro:{
                    content:function (storage,player,skill){
           if(player.storage.mzhuoi.length) return '当前已记录数字：'+player.storage.mzhuoi;
           return '未有记录。';
        },
                },
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                filter:function (event,player){
        if(!player.storage.mzhuoi) player.storage.mzhuoi=[];
        return player.isPhaseUsing()&&player.storage.mzhuoi.length<13&&!player.hasSkill("mzhuoi_effect");
    },
                content:function (){       
       'step 0' 
       event.number=[1,2,3,4,5,6,7,8,9,10,11,12,13];
       event.number.remove(player.storage.mzhuoi);
       'step 1'
       var num=event.number.randomGet()
       player.markAuto('mzhuoi',[num]);
       player.logSkill('mzhuoi');
       player.updateMark('mzhuoi'); 
       game.log(player,'记录了','#y'+num);
    },
                "_priority":0,
            },
            jurwui:{
                limited:true,
                skillAnimation:true,
                animationColor:"fire",
                unique:true,
                init:function (player){
        player.storage.jurwui=false;
    },
                intro:{
                    content:"limited",
                },
                trigger:{
                    player:"damageEnd",
                },
                mark:true,
                filter:function (event,player){ 
        if(player.storage.jurwui==true) return false;
        return player.hp<2;
    },
                content:function (){
        "step 0"
        event.card=game.createCard('zhuyueo','heart',13)
player.storage.jurwui=true;
player.awakenSkill('jurwui');
player.useCard(event.card,player);
        "step 1"
        player.addToExpansion(event.card,'giveAuto',player).gaintag.add('_chereacter_cardsonactoer');  
        player.useSkill("虫箭1",player);
     },
                "_priority":0,
            },
            "_chereacter_cardsonactoer":{
                marktext:"牌",
                intro:{
                    markcount:"expansion",
                    mark:function (dialog,content,player){
            var content=player.getExpansions('_chereacter_cardsonactoer');
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    dialog.addAuto(content);
                }
                else{
                    return '共有'+get.cnNumber(content.length)+'张牌';
                }
            }
        },
                    content:function (content,player){
            var content=player.getExpansions('_chereacter_cardsonactoer');
            if(content&&content.length){
                if(player==game.me||player.isUnderControl()){
                    return get.translation(content);
                }
                return '共有'+get.cnNumber(content.length)+'张牌';
            }
        },
                },
                onremove:function (player,skill){
        var cards=player.getExpansions(skill);
        if(cards.length) player.loseToDiscardpile(cards);
    },
                charlotte:true,
                "hung_gold_update_hui_special":true,
                forced:true,
                "_priority":0,
            },
            "metal_product":{
                group:"metal_product_phase",
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        direct:true,
                        filter:function (event,player){
               if(game.hasPlayer(function(current){
            return current!=player&&current.countCards('h');
        })){
            return true;
        }else return false;
            },
                        content:function (){
                'step 0'
                player.chooseTarget(get.prompt2('metal_product'),false,function(card,player,target){
            return player!=target&&target.countCards('h');
        }).ai=function(target){            
            var player=_status.event.player;            
            return get.attitude(_status.event.player,target)<=0;
        } 
                'step 1'
                if(result.bool){
                   var target=result.targets[0];
                   var n=Math.ceil(Math.random()*13);
        var s=['heart','diamond','club','spade'].randomGet();
                    player.logSkill('metal_product',target)
        player.discardPlayerCard(target,'h',true);
        target.addToExpansion(game.createCard('metallica_card',s,n),'giveAuto',player).gaintag.add('_chereacter_cardsonactoer');            
        if(!target.hasSkill('metal_product_use')) target.addSkill('metal_product_use');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                    use:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        charlotte:true,
                        forced:true,
                        direct:true,
                        filter:function (event,player){
                for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='metal_special') return true;
                }                        
                return false;
            },
                        content:function (){
              'step 0'  
              player.chooseCardButton('获得一张"金属制品"',1,player.getExpansions('_chereacter_cardsonactoer'),true).set('filterButton',function(button){
            return get.type(button.link)=='metal_special';
        });;
              'step 1'
              if(result.links){
              player.logSkill('metal_product_use');
              //player.gain(result.links,'gain2');
              player.gain(result.links[0],'gain2');
              //player.$draw()
              player.loseHp();
                   }
                'step 2'
                var metal_tyep=[];
                for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='metal_special') metal_tyep.push(player.getExpansions('_chereacter_cardsonactoer')[i]);
                }
                if(metal_tyep.length<=0){
                    player.removeSkill('metal_product_use');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                check:function (event,player,target){
        var att=get.attitude(player,event.player);
        var att2=get.attitude(player,event.target);
        return att<=0&&event.target==player||att2<=0&&event.player==player;
    },
                usable:1,
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function (event,player,target){
        if(!event.card) return false;
        if(event.target==player&&event.player==player||event.target==player&&!event.player.countCards('h')||event.player==player&&!event.target.countCards('h')) return false;        
        return event.targets.length==1;
    },
                content:function (){
        var target=trigger.player==player?trigger.target:trigger.player;
        var n=Math.ceil(Math.random()*13);
        var s=['heart','diamond','club','spade'].randomGet();
        player.line(target,'green')
        player.discardPlayerCard(target,'h',true);
        target.addToExpansion(game.createCard('metallica_card',s,n),'giveAuto',player).gaintag.add('_chereacter_cardsonactoer');            
        if(!target.hasSkill('metal_product_use')) target.addSkill('metal_product_use');
    },
                "_priority":0,
            },
            cudo:{
                trigger:{
                    global:["gainEnd","loseAfter"],
                },
                priority:10,
                forced:true,
                filter:function (event,player){
        var type_list=[];
        if(event.name=='lose'){
            for(var i=0;i<event.cards.length;i++){
                if(!type_list.contains(get.type(event.cards[i]))) type_list.push(get.type(event.cards[i]));
            }
        }        
        if(player==event.player) return false;
        var evt=event.getl(player);
        return evt&&evt.cards2&&evt.cards2.filter(function(card){
            return get.type(card)=='metal_special';
        }).length>0&&event.name=='gain'||event.name=='lose'&&type_list.contains('metal_special');
    },
                content:function (){          
       player.draw();
    },
                "_priority":1000,
            },
            "_metallica_card_destory":{
                charlotte:true,
                "hung_gold_update_hui_special":true,
                popup:false,
                priority:2022,
                trigger:{
                    global:["phaseEnd","loseAfter","phaseBegin"],
                },
                forced:true,
                filter:function (event,player){
        var list=[];
        for(var i=0;i<ui.discardPile.childNodes.length;i++){
                        var card=ui.discardPile.childNodes[i];
                        if(!list.contains(card)&&get.type(card)=='metal_special'||card.name=='ar_bise_kn') list.push(card);
                            }
        for(var i=0;i<ui.cardPile.childNodes.length;i++){
                        var card=ui.cardPile.childNodes[i];
                        if(!list.contains(card)&&get.type(card)=='metal_special'||card.name=='ar_bise_kn') list.push(card);
                            }
        return list.length>0;
    },
                content:function (){        
      var list=[];                              
       for(var i=0;i<ui.discardPile.childNodes.length;i++){
                        var card=ui.discardPile.childNodes[i];
                        if(!list.contains(card)&&get.type(card)=='metal_special'||card.name=='ar_bise_kn') list.push(card);
                            } 
         for(var i=0;i<ui.cardPile.childNodes.length;i++){
                        var card=ui.cardPile.childNodes[i];
                        if(!list.contains(card)&&get.type(card)=='metal_special'||card.name=='ar_bise_kn') list.push(card);
                            }
     player.addToExpansion(list,'visible',player).gaintag.add('_metallica_card_destory')
     player.lose(list,ui.special,'visible');
    },
                "_priority":202200,
            },
            "change_write":{
                subSkill:{
                    record:{
                        trigger:{
                            player:["useCardAfter","respondAfter"],
                        },
                        direct:true,
                        charlotte:true,
                        forced:true,
                        filter:function (event,player){
        return event.skill=='change_write_backup';
    },
                        content:function (){                       
            if(!player.storage.change_write.contains(trigger.card.name)) player.storage.change_write.push(trigger.card.name);
            player.updateMark('change_write');    
            player.logSkill('change_write');
            game.log(player,'改写记录了','#y'+get.translation(trigger.card.name));
                if(player.maxHp<5){
                    player.gainMaxHp();
                    player.recover();
                }
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                init:function (player,skill){
        if(!player.storage.change_write) player.storage.change_write=[];        
    },
                mark:true,
                marktext:"改",
                intro:{
                    content:function (storage,player,skill){
           if(player.storage.change_write.length) return '当前已记录：'+get.translation(player.storage.change_write);
           return '未有记录。';
        },
                },
                enable:["chooseToUse","chooseToRespond"],
                filter:function (event,player){
        if((player.getStat().skill.change_write)>=player.hp) return false;
        for(var i of lib.inpile){
            var type=get.type(i);
   if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)&&!player.storage.change_write.contains(i)){
    return true;   
   }
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(name=='sha'){
                    if(event.filterCard({name:name},player,event)&&!player.storage.change_write.contains(name)) list.push(['基本','','sha']);
                    for(var j of lib.inpile_nature){
                        if(event.filterCard({name:name,nature:j},player,event)&&!player.storage.change_write.contains('sha')) list.push(['基本','','sha',j]);
                    }
                }
                else if(get.type(name)=='trick'&&event.filterCard({name:name},player,event)&&!player.storage.change_write.contains(name)) list.push(['锦囊','',name]);
                else if(get.type(name)=='basic'&&event.filterCard({name:name},player,event)&&!player.storage.change_write.contains(name)) list.push(['基本','',name]);
            }
            return ui.create.dialog('改写',[list,'vcard']);
        },
                    filter:function (button,player){
            return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent())&&!player.storage.change_write.contains(button.link[2]);
        },
                    check:function (button){
            if(_status.event.getParent().type!='phase') return 1;
            var player=_status.event.player;
            if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].contains(button.link[2])) return 0;
            return player.getUseValue({
                name:button.link[2],
                nature:button.link[3],
            });
        },
                    backup:function (links,player){
            return {
                filterCard:function (){return false},
                selectCard:-1,                
                popname:true,
                check:function(card){
                    return 8-get.value(card);
                },
                position:'hse',
                viewAs:{name:links[0][2],nature:links[0][3]},
                precontent:function (result,player) {
                player.addTempSkill('change_write_record');                
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
        },
                },
                hiddenCard:function(player,name){
        if(!lib.inpile.contains(name)) return false;
        var type=get.type(name);
        return (type=='basic'||type=='trick')&&!player.storage.change_write.contains(name);
    },
                ai:{
                    fireAttack:true,
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player){
            if((player.getStat().skill.change_write)>=player.hp) return false;
        },
                    order:1,
                    result:{
                        player:function(player){
                if(_status.event.dying) return get.attitude(player,_status.event.dying);
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "draw_disc":{
                mod:{
                    ignoredHandcard:function (card,player){
        if(get.type(card)=='disc_special'){
            return true;
        }
         },
                },
                locked:false,
                trigger:{
                    source:"damageSource",
                },
                preHidden:true,
                filter:function (event,player,name){        
        var target=event.player;
        var list=[];
        var listm=[];
        var listv=[];
        if(target.name1!=undefined) listm=lib.character[target.name1][3];
        else listm=lib.character[target.name][3];
        if(target.name2!=undefined) listv=lib.character[target.name2][3];
        listm=listm.concat(listv);
        var func=function(skill){
           var info=get.info(skill);
            if(!info||info.hiddenSkill||info.disc_skill||lib.skill.drlt_duorui.bannedList.contains(skill)) return false;
            return true;
        };
        for(var i=0;i<listm.length;i++){
            if(func(listm[i])) list.add(listm[i]);
        }       
        event.skills=list;
        var gain=[];
        for(var i=0;i<event.skills.length;i++){
            if(event.player.hasSkill(list[i])&&!event.player.tempSkills[list[i]]) gain.push(list[i]);
        }
        var disc=[];
        for(var i=0;i<target.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(target.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') disc.push(target.getExpansions('_chereacter_cardsonactoer')[i]);
                }        
        if(!event.card||list.length<1||disc.length>0||event.player.hasSkill('disable_disc_card')||gain.length<1) return false;
        var evt=event.getParent();
        return evt&&evt.card==event.card&&evt.type=='card'&&evt.targets&&evt.targets.length==1;
    },
                content:function (){
        'step 0'
        player.$skill('白蛇','','','avatar');
        player.say(['你还是慢了一步啊，'+get.translation(trigger.player.name)+'！这一刻，我终于从无敌的你那里拿到了我想要的东西。','这一切都是为了让我上天堂！','你的替身我收下了。'].randomGet());
        game.delay(0.8);
        var target1=trigger.player;
        var list=[];
        var listm=[];
        var listv=[];
        if(target1.name1!=undefined) listm=lib.character[target1.name1][3];
        else listm=lib.character[target1.name][3];
        if(target1.name2!=undefined) listv=lib.character[target1.name2][3];
        listm=listm.concat(listv);
        var func=function(skill){
           var info=get.info(skill);
            if(!info||info.hiddenSkill||info.disc_skill||lib.skill.drlt_duorui.bannedList.contains(skill)) return false;
            return true;
        };
        for(var i=0;i<listm.length;i++){
            if(func(listm[i])) list.add(listm[i]);
        }
        event.skills=list;
        var gain=[];
        for(var i=0;i<event.skills.length;i++){
            if(trigger.player.hasSkill(list[i])&&!trigger.player.tempSkills[list[i]]) gain.push(list[i]);
        }
        list=gain;
        target1.removeSkill(list);
      //var name=lib.skill.disc_product.process(target,list);       
        var card=game.createCard('dics_cards');
       game.broadcastAll(function(card){
            card.init([card.suit,card.number,card.name+target1.name]);            
        },card);
        lib.card[card.name]={             
fullimage:true,
skill_list:[list],
derivation:target1.name,
image:lib.card['dics_cards'].image,
enable:false,
type:'disc_special',
   filterTarget:function (card,player,target){
        return target==player||get.distance(player,target)<=1;
    },
content:function(){},
            ai:{
        order:10,
        value:5.5*gain.length,
        useful:5.5*gain.length,
        tag:{
            draw:2,
        }, 
                 },
                 } 
        
        
        var info=card.name+'_info'
        var append=card.name+'_append'
        lib.translate[card.name]=get.translation(target1.name)+'的光碟';
        lib.translate[info]=get.translation(target1.name)+'的技能光碟，对自己使用或距离计算与自己不大于1的角色使用，此牌可以进入牌堆并被抽取。<br>已储存技能：'+get.translation(list)+'<br><span style="color:gold">价值：'+lib.card[card.name].ai.value+' (技能数量越多价值越高。)</span>';        
        lib.translate[append]='<h5><span style="color:red">你还是慢了一步啊，'+get.translation(target1.name)+'。</span></h5>'      
        lib.card.list.push([card]);
        var real_card=game.createCard2(card);
        event.card=real_card;
        'step 1'
        //game.log(get.effect(player,event.card,player,player));
        player.gain(event.card,'gain2')
    },
                "_priority":0,
            },
            "_show_disc_card":{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h',{type:'disc_special'})>0;
    },
                filterCard:function (card){
        return get.type(card)=='disc_special';
    },
                filterTarget:function (card,player,target){      
        if(target.getExpansions('_chereacter_cardsonactoer').length){
                for(var i=0;i<target.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(target.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') return false;
                }}                                             
        return target==player||get.distance(player,target)<=1;
    },
                check:function (card){
        return lib.card[card.name].skill_list.length>0;
    },
                discard:false,
                content:function (){
        'step 0'
        player.showCards(cards[0]);     
        var skills=lib.card[cards[0].name].skill_list;
        for(var i=0;i<skills.length;i++){
            //lib.skill[skills[i]].disc_skill=true;
            target.addSkill(skills[i]);    
             }
        'step 1'
        target.addToExpansion(cards[0],'giveAuto',player).gaintag.add('_chereacter_cardsonactoer');            
        if(!target.hasSkill('mark_dis_process_card')){
            target.addSkill('mark_dis_process_card');
            target.markSkillCharacter('mark_dis_process_card',lib.card[cards[0].name].derivation,'光碟','已获得技能：'+get.translation(lib.card[cards[0].name].skill_list));
         }
    },
                ai:{
                    order:7,
                    result:{
                        player:{
                            player:1,
                        },
                        target:function (player,target){ 
                //var eff=get.value(target,player);
                var att=get.attitude(target,player);
                if(target==player) return 2.5;
                if(att>0&&target!=player) return 1.5;              
                return -1;
                
            },
                    },
                },
                "_priority":0,
            },
            "mark_dis_process_card":{
                group:"mark_dis_process_card_die",
                subSkill:{
                    die:{
                        trigger:{
                            player:"dying",
                        },
                        filter:function (event,player){        
                for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') return true;
                }                        
                return false;      
    },
                        charlotte:true,
                        forced:true,
                        content:function (){
        'step 0'  
        event.gain=[];
        for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') event.gain.push(player.getExpansions('_chereacter_cardsonactoer')[i]);
                }
        'step 1'
        var card=event.gain[0];
        player.discard(card);        
        game.log(player,'弃置了一张技能光盘');
        player.removeSkill(lib.card[card.name].skill_list);
        player.unmarkSkill('mark_dis_process_card');
        player.removeSkill('mark_dis_process_card');
      },
                        sub:true,
                        "_priority":0,
                    },
                },
                charlotte:true,
                hiddenSkill:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){        
                for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') return true;
                }                        
                return false;      
    },
                content:function (){
        'step 0'  
        event.gain=[];
        for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') event.gain.push(player.getExpansions('_chereacter_cardsonactoer')[i]);
                }
        'step 1'
        var card=event.gain[0];
        player.gain(card);
        player.$draw();
        game.log(player,'获得了一张技能光盘');
        player.removeSkill(lib.card[card.name].skill_list);
        player.unmarkSkill('mark_dis_process_card');
        player.removeSkill('mark_dis_process_card');
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.countCards('h')>2) return -1;                
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "toa_don":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event,player){    
            var num=0;
                for(var i=0;i<player.getExpansions('_chereacter_cardsonactoer').length;i++){
                  if(get.type(player.getExpansions('_chereacter_cardsonactoer')[i])=='disc_special') num++;
                }                                         
        return (player.countCards('h',{type:'disc_special'})+num)>2&&!player.storage.toa_don;
    },
                skillAnimation:true,
                animationColor:null,
                juexingji:true,
                derivation:["haven_product"],
                unique:true,
                forced:true,
                content:function (){
        player.addSkill('haven_product');
        player.popup('天堂制造');
        player.loseMaxHp();
        player.draw(2);
        player.recover();
        game.log(player,'获得了技能【天造】，失去了技能【光碟】')
        player.awakenSkill(event.name);
        player.awakenSkill('draw_disc');
        player.storage[event.name]=true;
    },
                "_priority":0,
            },
            "haven_product":{
                group:"haven_product_restart",
                subSkill:{
                    mark:{
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"重置",
                        intro:{
                            content:function (storage,player,skill){
            return '世界已被重置，进入新世界。';
       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    restart:{
                        enable:"phaseUse",
                        filter:function (event,player){
           return game.dead.length>3&&!player.hasSkill('haven_product_mark')&&!player.storage.haven_product_restart;
    },
                        content:function (){
        'step 0'
        player.addSkill('haven_product_mark');     
        player.storage.haven_product_restart=true;
        event.words=['你相信引力吗？','我很敬佩第一个吃香菇的人','因为说不定是毒菇','dio，等我得心应手之时','一定会让你觉醒的','人终是要上天堂的啊','最后再说一次','时间要加速了','『螺旋楼梯』','『废墟街道』','『无花果塔』','『独角仙』','『苦伤道』','『特异点』','『乔托』','『天使』','『紫阳花』','『秘密皇帝』','话语到此为止','Made in heaven！！！','以神的名义令你退下！'];
        event.count=0;
       'step 1'       
        player.say(event.words[event.count]);
        if(event.count==20) player.$skill('天堂制造','','','avatar');
        game.delay(1.5);
                'step 2'
                event.count++;
                game.delay(0.5);
                if(event.count<event.words.length) event.goto(1);                
               'step 3'
            player.chooseControl('反','忠','内','取消').set('prompt','是否增加一种身份的权重？').set('ai',function(){
            if(player.identity!='nei') return get.translation(player.identity)
            return '取消';
        });
               player.$skill('时间开始加速','fire','red','avatar');
               game.delay(0.8);
                'step 4'
                var identity=['fan','nei','zhong'];
                if(result.control!='取消'){
                    if(result.control=='忠') identity.push('zhong');
                    if(result.control=='内') identity.push('nei');
                    if(result.control=='反') identity.push('fan');
                }
                var skills=[]; 
                          for(var i in lib.character){ 
                          for(var j=0;j<lib.character[i][3].length;j++){
                          var info=lib.skill[lib.character[i][3][j]];
                          if(info&&(info.gainable||!info.unique)){
                          skills.add(lib.character[i][3][j]); 
                                    }}}                                                                                                                                                               
                game.broadcastAll(function(player) {
                                    var list = [];
                                    for (var i = 0; i < game.dead.length; i++) {
                                        list.push(game.dead[i]);
                                        player.line(game.dead[i], 'green');
                                    }                                                                
                                    for (var i = 0; i < list.length; i++) {
                                        var gskill=skills.randomGet();
                                        var gidentity=identity.randomGet();
                                        list[i].revive();                
                                        list[i].draw(4);    
                                        list[i].recover(Infinity);
                                        list[i].clearSkills();
                                        list[i].addSkill(gskill);
                                        list[i].setIdentity(gidentity);
                                        list[i].identity=gidentity;
                                        list[i].update();
                                        list[i].markSkillCharacter('haven_product',player,'天造','你的新身份是：'+get.translation(gidentity)+'，你的新技能：'+get.translation(gskill));       
                                    
                                    }
                                }, player);
                'step 5'
               game.log('世界已经被重置，就世界死亡的人物变成新人物，旧世界活着的人物将继续神父战斗。');                           
               player.say('只有我才能拯救人类的未来！');
               game.delay(0.8);
                
    },
                        ai:{
                            basic:{
                                order:1,
                            },
                            result:{
                                player:function (player){
                        var fri=player.getFriends();
        if(fri.contains(player)) fri.remove(player);
                if(fri.length<2) return -1;                
                return 1;
            },
                            },
                        },
                        skillAnimation:true,
                        animationColor:null,
                        sub:true,
                        "_priority":0,
                    },
                },
                init:function (player){        
        lib.translate.haven_product_restart='重启世界'                   
    },
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                content:function (){
    'step 0'        
        player.chooseTarget(false,'天堂制造：你可以对一名角色造成一点伤害。',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });        
    'step 1'
    if(result.bool){
        var target=result.targets[0];
        event.target=target;
        player.line(target,'green');
        target.damage();
    }
     },
                forced:true,
                mod:{
                    globalFrom:function (from,to,distance){
            return distance-=Infinity;
        },
                    globalTo:function (from,to,distance){
            return distance+=Infinity;
        },
                },
                "_priority":0,
            },
            Ssenol:{
                priority:10,
                group:"Ssenol_dying",
                subSkill:{
                    dying:{
                        skillAnimation:true,
                        animationColor:"thunder",
                        trigger:{
                            player:"dying",
                        },
                        prompt:function (player) {
               var player=_status.event.player;
               return get.prompt('Ssenol')+'移除场上的线标记？';       
            },
                        filter:function (event,player){
            return game.hasPlayer(function(current){
                    return current.hasSkill('senjui_mark')&&current.countMark('senjui_mark');
                })
    },
                        content:function (){
                'step 0'
                event.num=0
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
                for(var i=0;i<targets.length;i++){
                    if(targets[i].hasSkill('senjui_mark')&&targets[i].countMark('senjui_mark')){
                        player.line(targets[i],'green');
                        event.num+=targets[i].countMark('senjui_mark');                        
                        targets[i].removeSkill('senjui_mark');                        
                         }
                }                
                'step 1'
                player.draw(event.num);
                var es=player.getCards('e');
                if(es.length>0) player.discard(es);
                'step 2'
                if(player.hasSkill('chfu')&&player.storage.chfu==false) player.useSkill('chfu',player)
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
    'step 0'        
        player.chooseTarget(false,'石之自由：你可以对将一名角色的装备移至你的装备区，或取消令你和有"线"标记的角色摸牌。',function(card,player,target){
            return target!=player&&target.countCards('e')&&target.hasSkill('senjui_mark')&&target.countMark('senjui_mark');
        }).set('ai',function(target){
            var player=_status.event.player;      
            var att=get.attitude(target,player);
            if(player.countCards('h')>2||att<0) return 2;
            return -1;
        });        
    'step 1'
    if(result.bool){
        var target=result.targets[0];
        event.target=target;
        player.logSkill('Ssenol',target);
        var es=target.getGainableCards(player,'e')
        if(es.length){
            player.choosePlayerCard('e',target,true).set('es',es).set('filterButton',function(button){
                return _status.event.es.contains(button.link);
            });
        }
    }else{
        var targets=game.filterPlayer();        
        targets.sort(lib.sort.seat);        
                for(var i=0;i<targets.length;i++){
                    if(targets[i]==player||targets[i].hasSkill('senjui_mark')&&targets[i].countMark('senjui_mark')){                        
                        targets[i].draw();
                        player.logSkill('Ssenol',targets[i]);
                         }
                }
        event.finish();
    };
        'step 2'
        if(result.links){
            target.$give(result.links[0],player);
            target.lose(result.links[0],ui.special);
            event.card=result.links[0];
            game.delay();
        }
        'step 3'
        if(event.card&&get.position(event.card)=='s'){
            player.equip(event.card);
        }else event.finish();
        'step 4'
     },
                "_priority":1000,
            },
            senjui:{
                mod:{
                    maxHandcard:function (player,num){
            var c=0;
             var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
                for(var i=0;i<targets.length;i++){
                    if(targets[i].hasSkill('senjui_mark')&&targets[i].countMark('senjui_mark')) c+=targets[i].countMark('senjui_mark');
                }
            if(c>0) return num+=c;
        },
                },
                init:function (player,skill){
        player.storage.senjui=player.countCards('e');
        player.update('senjui');
    },
                mark:true,
                marktext:"线",
                intro:{
                    content:function (storage,player,skill){
                return '目前装备数量:'+player.storage.senjui+'。';       
        },
                },
                group:["senjui_equip","senjui_update"],
                subSkill:{
                    update:{
                        popup:false,
                        forced:true,
                        charlotte:true,
                        unique:true,
                        trigger:{
                            player:["loseAfter"],
                        },
                        filter:function (event,player){        
        var card_list=[];
        for(var i=0;i<event.cards.length;i++){
            var card=event.cards[i];
            if(get.type(card)=='equip') card_list.add(card);
        }
        return card_list.length>0;
    },
                        content:function (){
                player.storage.senjui=player.countCards('e');
        player.update('senjui');
            },
                        sub:true,
                        "_priority":0,
                    },
                    equip:{
                        trigger:{
                            player:"equipBegin",
                        },
                        filter:function (event, player) {
                var num=0;
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
                for(var i=0;i<targets.length;i++){
                    if(targets[i].hasSkill('senjui_mark')&&targets[i].countMark('senjui_mark')) num+=targets[i].countMark('senjui_mark');
                }
        if (get.subtype(event.card)==undefined) return false
        return player.countCards('e')<(5+num);
      },
                        popup:false,
                        unique:true,
                        forced:true,
                        lastDo:true,
                        content:function () {
         "step 0"  
        player.popup('使用装备');
        trigger.untrigger();
        trigger.finish();
        var card = trigger.card;                
        if (card.clone) {
          game.broadcast(function (card, player) {
            if (card.clone) {
                card.clone.moveDelete(player);
            }
          }, card, player);
         card.clone.moveDelete(player);
          game.addVideo('gain2', player, get.cardsInfo([card.clone]));
        }
                if (lib.config.background_audio) {
          game.playAudio('effect', get.subtype(trigger.card));
        }
        player.$equip(trigger.card);
        game.addVideo('equip', player, get.cardInfo(trigger.card));
        game.log(player, '装备了', trigger.card);
           "step 1"
           var info = get.info(trigger.card, false);
        if (info.onEquip && (!info.filterEquip || info.filterEquip(card, player))) {
          if (Array.isArray(info.onEquip)) {
              for (var i = 0; i < info.onEquip.length; i++) {
                var next = game.createEvent('equip_' + trigger.card.name);
                next.setContent(info.onEquip[i]);
                next.player = player;
                next.card = trigger.card;
              }
          } else {
            var next = game.createEvent('equip_' + trigger.card.name);
            next.setContent(info.onEquip);
            next.player = player;
            next.card = trigger.card;
          }
          if (info.equipDelay != 'false') game.delayx();
        }
        delete player.equiping;
        if (event.delay) game.delayx();
                player.storage.senjui=player.countCards('e');
        player.update('senjui');
    },
                        sub:true,
                        "_priority":0,
                    },
                    mark:{
                        trigger:{
                            global:"die",
                        },
                        filter:function (event,player){
        return event.player==player.storage.senjui_mark_target;
    },
                        content:function (){        
        player.removeSkill('senjui_mark');
      },
                        onremove:function (player,skill){        
        if(player.storage.senjui_mark_target){
          if(player.countMark('senjui_mark')){
              player.storage.senjui_mark_target.logSkill("senjui",player);
              player.storage.senjui_mark_target.gainMaxHp(player.countMark('senjui_mark'));
              player.storage.senjui_mark_target.recover(player.countMark('senjui_mark'));             
          }
            player.removeMark('senjui_mark',Infinity);
           delete player.storage.senjui_mark_target 
        }
    },
                        charlotte:true,
                        forced:true,
                        marktext:"线",
                        intro:{
                            content:"mark",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                forced:true,
                charlotte:true,
                unique:true,
                enable:"phaseUse",
                filter:function (event,player){
        return player.maxHp>1;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
       player.loseMaxHp(true); 
       if(!target.hasSkill('senjui_mark')) target.addTempSkill('senjui_mark',{player:'dying'});
       target.addMark('senjui_mark');
       if(!target.storage.senjui_mark_target) target.storage.senjui_mark_target=player;
    },
                ai:{
                    result:{
                        player:function (player){                
                if(player.maxHp>player.hp) return 1;
                return -1;
            },
                        target:function (player,target){                
               // var eff=get.damageEffect(target,player);
                var att=get.attitude(target,player);
                if(att>0) return 1.5;
                if(att>0&&!target.countMark('senjui_mark')) return 2.5;               
                return -1;
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            chfu:{
                init:function (player,skill){
        if(!player.storage.chfu) player.storage.chfu=false;
    },
                skillAnimation:true,
                animationColor:"thunder",
                derivation:["baijui"],
                unique:true,
                forced:true,
                juexingji:true,
                filter:function (event,player){
         if(player.storage.chfu) return false;
         return player.hasSkill('Ssenol');
    },
                content:function (){
        player.gainMaxHp();
        player.addSkill('baijui');
        player.awakenSkill(event.name);        
        player.storage[event.name]=true;
    },
                "_priority":0,
            },
            xinshu:{
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'&&event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.card.name!='sha'||!event.card) return true;
        return false;         
    },
                content:function () {   
       'step 0' 
       event.num=trigger.num;
        'step 1'
       var list=['增加一点体力上限'];
       if(player.maxHp>player.hp) list.push('回复一点体力');
       list.push('取消')
       player.chooseControl(list).set('prompt','吸血？').set('ai',function(){
            if(player.hp<4&&list.contains('回复一点体力')) return '回复一点体力';
            return '增加一点体力上限';
        });
        'step 2'
        if(result.control!='取消'){
            var chat=[get.translation(trigger.player)+"的血真的太棒了！","我简直嗨到不行！！！","哈哈哈哈哈哈哈哈哈哈！！！"];
                player.say(chat.randomGet());             
            player.logSkill('xinshu');
            if(result.control=='回复一点体力'){
                player.recover();
            }else player.gainMaxHp(true);
        }
        event.num--;
        if(event.num>0) event.goto(1);
    },
                "_priority":0,
            },
            shujiu:{
                subSkill:{
                    num:{
                        charlotte:true,
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event){
                var evt=event;
                return evt.skill=='shujiu'&&evt.cards&&evt.card.name=='sha';
            },
                        content:function (){
                var name=trigger.card.name;                
                player.loseMaxHp();
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                locked:false,
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (){return false},
                selectCard:-1,
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function (player){
        return player.maxHp>3;
    },
                precontent:function (result,player) {
    player.addTempSkill('shujiu_num');                
    },
                prompt:"扣一点体力上限，视为使用一张【杀】。",
                check:function (player,card){
        if(player.maxHp>player.hp) return 1;
        return 0;
    },
                ai:{
                    respondSha:true,
                    skillTagFilter:function (player){
        return player.maxHp>2;   
        },
                    yingbian:function (card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function (player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
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
                "_priority":0,
            },
            yulog:{
                subSkill:{
                    damage:{
                        init:function (player,skill){
                player.storage.juedou_num_roller=0;
            },
                        trigger:{
                            global:"damageBegin",
                        },
                        popup:false,
                        forced:true,
                        charlotte:true,
                        filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.card.name=='juedou'){
            if(lib.card[event.card.name].image==lib.card['SP_dio_roller'].image) return true;
        }
        return false;       
    },
                        content:function () {
            'step 0'
            trigger.num += (1+player.storage.juedou_num_roller);            
            'step 1'
            var target=player.storage.yulog_target;
        if(trigger.player==player){
            player.say('不可能！')
            event.finish();
        }else{
            player.say('wryyyyyyy！给我压成肉酱吧。');
        }
        game.delay(1.5);
        'step 2'
        player.$skill('结束了','fire','red','avatar');
                game.delay(1.5);
                'step 3'
                player.say('终于结束了。');
                game.delay(1.5);
                'step 4'
                player.say('白金之星终于败在了我的世界之下。');
                game.delay(1.5);
                'step 5'
                player.say('不死之身，不老不死，哼哼，还有替身的力量！');
                game.delay(1.5);
    },
                        sub:true,
                        "_priority":0,
                    },
                    useCard:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        firstDo:true,
                        popup:false,
                        forced:true,
                        charlotte:true,
                        filter:function (event,player){
               return event.card.name=='sha'; 
            },
                        content:function ()  {
                'step 0'                
                player.say('木打木打木打');
                game.log('木打！！');
                player.storage.juedou_num_roller++;
                'step 1'
                
            },
                        sub:true,
                        "_priority":0,
                    },
                    useCardAfter:{
                        trigger:{
                            player:["useCardAfter","respondAfter"],
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        filter:function (event,player){
               return event.card.name=='juedou'; 
            },
                        content:function (){
                'step 0'
                var card=trigger.card
                var target=player.storage.yulog_target;                                
                if(card.name=='juedou'&&lib.card[card.name].image==lib.card['SP_dio_roller'].image){                    
                    if(target.hasSkill('yulog_block_time_stop')) target.removeSkill('yulog_block_time_stop');
                    if(target.hasSkill('yulog_black')) target.removeSkill('yulog_black');
                    if(target.hasSkill('yulog_red')) target.removeSkill('yulog_red');
                    player.removeSkill('yulog_useCardAfter');
                    player.removeSkill('yulog_useCard');    
                    player.removeSkill('yulog_damage'); 
                }                                    
                
                
            },
                        sub:true,
                        "_priority":0,
                    },
                    "block_time_stop":{
                        marktext:"压",
                        mark:true,
                        intro:{
                            content:function (storage,player,skill){
                return '正在进行压路机的对线，还可以使用'+get.cnNumber(player.storage.yulog_block_time_stop)+'张牌。';       
        },
                        },
                        trigger:{
                            player:["useCard","respond"],
                        },
                        filter:function (event,player){
                   return player.storage.yulog_block_time_stop>0;
    },
                        content:function (){
                player.storage.yulog_block_time_stop--;
                player.updateMark('yulog_block_time_stop');
            },
                        mod:{
                            cardEnabled:function (card,player){
if(player.storage.yulog_block_time_stop==0) return false;
         },
                            cardUsable:function (card,player){
            if(player.storage.yulog_block_time_stop==0) return false;
        },
                            cardRespondable:function (card,player){
            if(player.storage.yulog_block_time_stop==0) return false;
        },
                            cardSavable:function (card,player){
            if(player.storage.yulog_block_time_stop==0) return false;
        },
                        },
                        init:function (player,skill){
        player.storage.yulog_block_time_stop=3;
        player.addSkillBlocker(skill);
        player.updateMark('yulog_block_time_stop');
    },
                        onremove:function (player,skill){
        player.removeSkillBlocker(skill);
    },
                        forced:true,
                        charlotte:true,
                        skillBlocker:function (skill,player){        
        return lib.skill[skill].time_effect==true;
    },
                        sub:true,
                        "_priority":0,
                    },
                    red:{
                        forced:true,
                        charlotte:true,
                        mod:{
                            cardname:function (card,player,event){
            var event=_status.event;
            if(get.color(card)=='red') return 'sha';          
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    black:{
                        forced:true,
                        charlotte:true,
                        mod:{
                            cardname:function (card,player,event){
            var event=_status.event;
            if(get.color(card)=='black') return 'sha';          
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                limited:true,
                enable:"phaseUse",
                filter:function (event,player){       
        return true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
       'step 0'
       player.storage.yulog_target=target;
       var card=game.createCard('juedou');
       lib.card[card.name].image=lib.card['SP_dio_roller'].image
       lib.translate[card.name]='压路机';
       event.card=card;
        'step 1'
       event.card2=game.createCard(event.card);
        target.chooseControl('红','黑').set('prompt','请选择一种颜色，本回合全部视为杀。').set('ai',function(){
            if(target.countCards('h',{color:'black'})>target.countCards('h',{color:'red'})) return '黑';
            return '红';
        });
        'step 2'        
        if(target.hasSkill('time_stop_effect')) target.addSkill('yulog_block_time_stop');
        target.popup(result.control);
        if(result.control=='红'){
            target.addSkill('yulog_red');            
        }else{
            target.addSkill('yulog_black'); 
        }
        player.addSkill('yulog_useCardAfter');
        player.addSkill('yulog_useCard');
        player.addSkill('yulog_damage'); 
        player.$skill('太慢了，你已经逃不掉了。','fire','red','avatar');
        game.delay(1.5);
        'step 3'
        player.useCard(event.card2,'nowuxie',target);  
        'step 4'
        player.awakenSkill(event.name);
        player.storage[event.name]=true;
    },
                ai:{
                    result:{
                        player:function (player){
                if(player.maxHp<6) return -1;                
                return 1;
            },
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            huzui:{
                mod:{
                    maxHandcard:function (player,num){
              return num+=Infinity;
        },
                },
                "_priority":0,
            },
            "_xixghost_skill":{
                group:"_xixghost_skill_useSha",
                subSkill:{
                    useSha:{
                        priority:99,
                        trigger:{
                            player:"phaseBegin",
                        },
                        popup:false,
                        filter:function (event,player){
            return player.group=="xixghost";
    },
                        forced:true,
                        content:function (){
             'step 0'     
             player.chooseTarget('空裂眼刺驚：你可以使用一张【杀】。',false,function(card,player,target){
                return target!=player;
            }).set('ai',function(target){
                 var player=_status.event.player;
            return get.effect(target,{name:'sha'},player,player);
            })
       'step 1'
       if(result.bool){
            var target=result.targets[0];
                player.line(target,'fire');
                player.useCard({name:'sha'},target,false);               
        }
            },
                        sub:true,
                        "_priority":9900,
                    },
                },
                trigger:{
                    player:["damageBefore"],
                },
                preHidden:true,
                popup:false,
                filter:function (event,player){
        return player.group=="xixghost"&&event.nature=="fire";
    },
                forced:true,
                content:function (){
        trigger.num++;
    },
                "_priority":0,
            },
            "xixghost_item":{
                init:function (player){
        if(!lib.group.contains('xixghost')){
             lib.group.push('xixghost');
             lib.translate.xixghost = '<span style="color:red">吸血鬼</span>'; 
        }
    },
                skillAnimation:true,
                enable:"phaseUse",
                filter:function (event,player){
        return !player.storage.xixghost_item&&player.group!="xixghost"&&player.getHistory('sourceDamage').length;
    },
                content:function (){
        'step 0'
        player.storage.xixghost_item=true;
        player.say('人类这种生物还真是有极限');
        game.delay(1.5);
        'step 1'
        player.say('我在这漫长的人生中，人类越是懂得算计');
        game.delay(1.5);
        'step 2'
        player.say('所以要超越人类啊！我不做人了');
        game.delay(1.5);
        'step 3'
        player.$skill('吸血鬼','fire','red','avatar');
        game.log(player,'<span style="color:red">将自己的阵营转变为"吸血鬼"并获得技能【吸血】</span>');
        player.addSkill('xinshu_skill');
        player.popup('<span style="color:red">吸血</span>');
        player.group='xixghost';
        player.update();
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){                
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "xinshu_skill":{
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        //if(event.parent.name=='_lianhuan'&&event.parent.name=='_lianhuan2') return false;
        if(event.card&&event.player!=player&&(player.maxHp>player.hp||player.countCards('h')<2)) return true;
        return false;         
    },
                content:function (){
       'step 0' 
       event.num=trigger.num;
        'step 1'
       var list=[];
       if(player.countCards('h')<2) list.push('将手牌摸至二');
       if(player.maxHp>player.hp) list.push('回复一点体力');
       list.push('取消');
       event.list=list;
       player.chooseControl(list).set('prompt','吸血？').set('ai',function(){
            if(player.hp<3&&list.contains('回复一点体力')) return '回复一点体力';
            if(list.contains('将手牌摸至二')) return '将手牌摸至二';
            return '取消';
        });
        'step 2'
        if(result.control!='取消'){
            var chat=[get.translation(trigger.player)+"的血真的太棒了！","我简直嗨到不行！！！","哈哈哈哈哈哈哈哈哈哈！！！"];
                player.say(chat.randomGet());             
            player.logSkill('xinshu_skill');
            if(result.control=='回复一点体力'){
                player.recover();
            }else player.drawTo(2);
        }
        event.num--;
        if(event.num>0&&event.list.length>1) event.goto(1);  
    },
                "_priority":0,
            },
            tucui:{
                enable:"phaseUse",
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:function (card){
        return get.number(card)>8;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                check:function (card){
        return 8-get.value(card);
    },
                discard:true,
                content:function (){   
        'step 0'       
         var cards2=target.getCards('h');         
            var content=[get.translation(target)+'的手牌',cards2];
            game.log(player,'观看了',target,'的手牌');
            player.chooseControl('ok').set('dialog',content);
        'step 1'
        var appropriate=[];
        for(var i=0;i<target.getCards('h').length;i++){
            var fcard=target.getCards('h')[i];
           if(get.suit(fcard)==get.suit(cards[0])||get.number(fcard)==get.number(cards[0])) appropriate.push(fcard);
        }
        var next=player.chooseToDiscard('【紫色隐者】：弃一张牌，然后将目标手中的一张牌弃置，如弃其的牌与'+get.translation(cards[0])+'花色或点数相同，你可以摸牌。',1,'he',false,function(card){
    return true;
});        
        next.set('ai',function(card){
            if(player.countCards('h')>2&&appropriate.length) return 6-get.value(card);   
            return 0;
        });
        'step 2'
        if(result.bool){
           event.rcard=result.cards[0];
           player.discard(event.rcard); 
            player.chooseButton(['选择其中一张牌弃置之。',target.getCards('h')],true).ai=function(button){
             var fcard=button.link;
              return get.suit(fcard)==get.suit(cards[0])||get.number(fcard)==get.number(cards[0])||get.value(button.link)
            }
        }else event.finish();
        'step 3'
        if(result.links){
            var fcard=result.links[0];
            target.discard(result.links);
            if(get.suit(fcard)==get.suit(cards[0])||get.number(fcard)==get.number(cards[0])) player.draw();
        }
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            zuimuk:{
                mod:{
                    ignoredHandcard:function (card,player){
        if(get.type2(card)=='trick'){
            return true;
        }
         },
                },
                "_priority":0,
            },
            bassoul:{
                subSkill:{
                    "thunder_sha":{
                        charlotte:true,
                        forced:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        filter:function (event,player){
        return event.card.name=='sha'&&event.card.nature=='thunder';
    },
                        logTarget:"target",
                        content:function (){
        trigger.getParent().directHit.add(trigger.target);
    },
                        sub:true,
                        "_priority":0,
                    },
                    yellow:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        filter:function (event,player){
        return event.card.name=='sha'&&event.target.countCards('h');
    },
                        logTarget:"target",
                        content:function (){
        'step 0'
        player.chooseButton(['你可以选择其中1-2张牌获得之。',trigger.target.getCards('h')],[1,2],false).ai=function(button){
             var fcard=button.link;
             return get.value(button.link)
            }
        'step 1'
        if(result.links){
           player.gain(result.links,trigger.target,'give');  
           if(result.links.length>1) player.loseHp();
        }
    },
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"<span style=\"color:yellow\">黄</span>",
                        intro:{
                            content:function (storage,player,skill){
            return '使用【杀】可以获得目标最多两张手牌，获得两张牌时损失体力。';
       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    red:{
                        trigger:{
                            player:"useCard",
                        },
                        filter:function (event,player){
        return event.card&&event.card.name=='sha';           
    },
                        content:function (){                
                trigger.baseDamage++;
                trigger.card.nature='fire';
    },
                        mod:{
                            cardnature:function (card,player){
                    if(get.name(card)=='sha') return 'fire';
                },
                        },
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"<span style=\"color:red\">红</span>",
                        intro:{
                            content:function (storage,player,skill){
            return '【杀】均视为【火杀】，并且伤害+1。';
       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    blue:{
                        group:"bassoul_thunder_sha",
                        trigger:{
                            player:"useCard",
                        },
                        filter:function (event,player){
        return event.card&&event.card.name=='sha';           
    },
                        content:function (){                
                trigger.card.nature='thunder';
    },
                        mod:{
                            cardnature:function (card,player){
                    if(get.name(card)=='sha') return 'thunder';
                },
                        },
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"<span style=\"color:blue\">蓝</span>",
                        intro:{
                            content:function (storage,player,skill){
            return '【杀】均视为【雷杀】，并且无法被响应。';
       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    green:{
                        mod:{
                            selectTarget:function (card,player,range){
if(card.name=='sha'&&range[1]!=-1) range[1]+=2;
},
                        },
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"<span style=\"color:green\">绿</span>",
                        intro:{
                            content:function (storage,player,skill){
            return '【杀】可以额外指定两名角色为目标。';
       
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    range:{
                        charlotte:true,
                        forced:true,
                        mark:true,
                        marktext:"宝",
                        intro:{
                            content:function (storage,player,skill){
            return '你使用【杀】无距离限制。';
       
        },
                        },
                        mod:{
                            targetInRange:function (card){
            if(get.name(card)=='sha') return true;
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player){
        return true;   
    },
                content:function () {
        'step 0'
        var list=['绿宝石','蓝宝石','红宝石','黄宝石','取消'];        
        player.chooseControl(list).set('prompt','是否发动【绿色法皇】？').set('ai',function(){
            event.list=list;
            event.list.remove('取消');
            return event.list.randomGet();
        });
        'step 1'
        if(result.control!='取消'){
        player.logSkill('bassoul');
        player.popup(result.control); 
            player.addTempSkill('bassoul_range'); 
          if(result.control=='绿宝石') player.addTempSkill('bassoul_green'); 
          if(result.control=='蓝宝石') player.addTempSkill('bassoul_blue'); 
          if(result.control=='红宝石') player.addTempSkill('bassoul_red'); 
          if(result.control=='黄宝石') player.addTempSkill('bassoul_yellow'); 
             }
        
    },
                "_priority":0,
            },
            jujui:{
                group:["jujui_changeshatarget","jujui_die"],
                subSkill:{
                    die:{
                        charlotte:true,
                        forced:true,
                        popup:false,
                        trigger:{
                            global:"die",
                        },
                        filter:function (event,player){
        return player.storage.jujui[0].contains(event.player);
    },
                        content:function (){ 
                'step 0'
        player.storage.jujui[1].remove(player.storage.jujui[1][player.storage.jujui[0].length-1]);
                'step 1'
                player.storage.jujui[0].remove(trigger.player);
        player.updateMark('jujui')
      },
                        sub:true,
                        "_priority":0,
                    },
                    "changeshatarget_air":{
                        sub:true,
                        "_priority":0,
                    },
                    changeshatarget:{
                        trigger:{
                            player:"shaMiss",
                        },
                        filter:function (event,player,target){                
        if(player.hasSkill('jujui_changeshatarget_air')) return false;
        return event.cards.length<=1&&player.storage.jujui[0].contains(event.target)&&player.storage.jujui[0].length>1;
    },
                        direct:true,
                        content:function (){
    'step 0'    
    event.nature=trigger.card.nature
    player.chooseTarget('你可以将'+get.translation(event.nature)+get.translation(trigger.card.name)+'转移给另一名角色',false,function(card,player,target){
            return target!=player&&target!=trigger.target&&player.storage.jujui[0].contains(target);
        }).set('ai',function(target){
             var player=_status.event.player;
        return get.effect(target,{name:'sha'},player,player);
        })
    'step 1'
    if(result.bool){
        var target=result.targets[0];
            player.line(target,'green');
        player.addTempSkill('jujui_changeshatarget_air')
        player.useCard({name:'sha',nature:event.nature?event.nature:null,isCard:false},target,false);
         }
             },
                        sub:true,
                        "_priority":0,
                    },
                },
                mark:true,
                marktext:"布",
                intro:{
                    markcount:function (storage){
            if(!storage) return 0;
            return storage[0].length;
        },
                    content:function (storage,player,skill){
                if(player.storage.jujui[0].length>0) return '已对'+get.translation(player.storage.jujui[0])+'(目标'+player.storage.jujui[1]+')'+'布下绿宝石结界。';       
                return '你需要至少记录两名目标才可以发动半径20m的绿宝石水花。';
        },
                },
                init:function (player){
        if(!player.storage.jujui) player.storage.jujui=[[],[]];
    },
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){                                
        return game.hasPlayer(function(current){
                    return !player.storage.jujui.contains(current)&&current!=player;
                });
    },
                content:function (){
        'step 0'     
             player.chooseTarget('绿宝石结界：你可以记录一名未记录的角色。',false,function(card,player,target){
                return target!=player&&!player.storage.jujui[0].contains(target);
            }).set('ai',function(target){
                 var player=_status.event.player;
            return get.attitude(target,player)<=0;
            })
       'step 1'
       if(result.bool){
           player.logSkill('jujui');
            var target=result.targets[0];
                player.line(target,'green');
                player.storage.jujui[0].push(target);                  
                player.updateMark('jujui');
        }else event.finish();
        'step 2'
        player.storage.jujui[1].push(player.storage.jujui[0].length);
                player.updateMark('jujui');
    },
                "_priority":0,
            },
            jigyu:{
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){        
        if(!player.storage.jujui) player.storage.jujui=[[],[]];
        player.storage[skill]=false;
    },
                limited:true,
                enable:"phaseUse",
                filter:function (event,player){
        return player.storage.jujui[0].length>1;
    },
                content:function (){
       'step 0'
       player.line(player.storage.jujui[0],'green');
       event.count=0;
       event.length=player.storage.jujui[0].length;       
       'step 1'
       player.useCard({name:'sha'},player.storage.jujui[0][event.count],false);
       'step 2' 
       event.count++;
       if(event.count<=event.length) event.goto(1);
        'step 3'
        player.awakenSkill('jigyu');
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function (player){
                if(player.storage.jujui[0].length<3) return -1;                
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            gumnum:{
                trigger:{
                    global:"gameDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        var cards=get.cardPile2(function(card){
            return get.name(card)=='sg_mask';
        });
        var dcards=get.discardPile(function(card){
            return get.name(card)=='sg_mask';
        });
        return cards||dcards;
    },
                content:function (){        
                  var cards=get.cardPile2(function(card){
            return get.name(card)=='sg_mask';
        });
        var dcards=get.discardPile(function(card){
            return get.name(card)=='sg_mask';
        });
        if(cards){
            player.gain(cards,'gain2','log');
             }
        if(dcards){
            player.gain(dcards,'gain2','log');
             }      
            
        
    },
                "_priority":0,
            },
            banomui:{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                content:function (){
        'step 0'
        player.draw(2);
        'step 1'
        if(player.countCards('j')){
           var next=player.chooseToDiscard('【跋扈】：弃一张手牌，然后视为对任意角色使用一张【过河拆桥】(黑)。',1,'h',false,function(card){
    return true;
});        
        next.set('ai',function(card){
            return 6-get.value(card);              
        }); 
        }else event.finish();
        'step 2'
        if(result.bool){
            player.chooseTarget('【跋扈】：请选择过河拆桥的目标。',false,function(card,player,target){
                return player==target||player.canUse({name:'guohe',color:'black'},target,false);
            }).set('ai',function(target){
                 var player=_status.event.player;
            return get.effect(target,{name:'guohe',color:'black'},player,player);
            })
        }else event.finish();
        'step 3'
        if(result.bool){
            var target=result.targets[0];
            var card=game.createCard('guohe','black');
                player.line(target,'fire');
                player.useCard(card,target,true);               
        }
    },
                "_priority":0,
            },
            yumimio:{
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return get.color(event.card)=='black';
    },
                logTarget:"target",
                content:function (){        
         trigger.directHit.addArray(game.filterPlayer());
    },
                "_priority":0,
            },
            mushi:{
                group:"mushi_draw",
                subSkill:{
                    draw:{
                        trigger:{
                            global:"useCard",
                        },
                        forced:true,
                        filter:function (event,player){
        return (event.card.isCard&&event.card.name=='talocard');
    },
                        content:function (){
        player.draw();
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                filter:function (event,player){
        return (event.name!='phase'||game.phaseNumber==0)&&!lib.inpile.contains('talocard');
    },
                content:function (){        
        'step 0'
        for(var i=0;i<18;i++){
            var card=game.createCard2('talocard',i%2?'heart':'spade',i);
            ui.cardPile.insertBefore(card,ui.cardPile.childNodes[get.rand(0,ui.cardPile.childNodes.length)]);
        }
        game.log(player,'将18张塔罗牌放入了牌堆。');
        game.broadcastAll(function(){lib.inpile.add('talocard')});
        game.updateRoundNumber();
        'step 1'
        var targets=game.filterPlayer();
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.count=0;
        'step 2'
        var card=get.cardPile2(function(card){
            return get.name(card)=='talocard';
        });
        player.line(event.targets[event.count],'green');
        event.targets[event.count].gain(card,'gain2');
        'step 3'
        event.count++;
        if(event.count<event.targets.length) event.goto(2);
    },
                "_priority":0,
            },
            wuhot:{
                group:"wuhot_draw",
                subSkill:{
                    draw:{
                        direct:true,
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function (event,player){       
        if(event.nature=='fire'){
        if(event.source==player&&event.player!=player){
           return true;
        }
             }
        return false;       
    },
                        content:function () {
                'step 0'
                 event.count=trigger.num;
                'step 1'
            player.chooseControl('摸牌','弃牌','取消',function(event,player){
                    return _status.event.choice;
                }).set('choice',player.countCards('h')>2?'弃牌':'摸牌');
               'step 2' 
               if(result.control!='取消'){
               if(result.control=='摸牌'){
                   player.draw();
                   player.logSkill('wuhot');
               }else{
                    player.chooseTarget('你可以弃一名角色一张牌。',false,function(card,player,target){
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
               }
                    }else event.finish();
                'step 3'
                if(result.bool){
            var target=result.targets[0];
            player.logSkill('wuhot',target);        
            player.line(target,'green')
            player.discardPlayerCard(target,'hej',true);
             }
                'step 4'
                event.count--;
                if(event.count>0) event.goto(1);
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                "prompt2":function (event,player) {                
       return '是否令本次伤害+1，并且改为火属性。';       
    },
                logTarget:"player",
                trigger:{
                    source:"damageBegin2",
                },
                usable:1,
                filter:function (event,player){
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        if(event.source==player&&event.player!=player){
          if(player.getHistory('sourceDamage').length) return true;
        }
        return false;       
    },
                content:function () {   
        player.logSkill('wuhot',trigger.player);
            trigger.num += 1;
            trigger.nature='fire';   
    },
                "_priority":0,
            },
            suki:{
                animationColor:"fire",
                mark:true,
                selectTarget:[1,2],
                targetprompt:["十字火焰目标1","十字火焰目标2"],
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                limited:true,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        if(!ui.selected.targets.length) return player!=target;
        return ui.selected.targets[0].getPrevious()!=target&&ui.selected.targets[0].getNext()!=target&&player!=target
    },
                content:function (){
      target.damage('fire',player);
      if(target.getPrevious()!=player) target.getPrevious().damage('fire',player);
      if(target.getNext()!=player) target.getNext().damage('fire',player);
      if(player.hasSkill('suki')) player.awakenSkill('suki');
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            sknife:{
                "_priority":0,
            },
            juinu:{
                "_priority":0,
            },
            zhyui:{
                group:"zhyui_use",
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        //if(event.parent.name=='_lianhuan'&&event.parent.name=='_lianhuan2') return false;
        if(event.player!=player&&event.player.isAlive()&&!event._notrigger.contains(event.player)) return true;
        return false;         
    },
                content:function (){
        if(!trigger.player.hasSkill("zhyui_mark")){
            trigger.player.addSkill("zhyui_mark")
        }
        trigger.player.addMark("zhyui_mark",1);
    },
                subSkill:{
                    use:{
                        prompt:function (player) {
               var player=_status.event.player;
               return get.prompt2('zhyui');       
            },
                        enable:"phaseUse",
                        filter:function (event,player){
        return game.hasPlayer(function(current){
                    return current.countMark('zhyui_mark');
                });
    },
                        filterTarget:function (card,player,target){
        return player!=target&&target.countMark("zhyui_mark")&&target.countCards("h");
    },
                        content:function (){
        'step 0'
        var cards2=target.getCards('h');         
            var content=[get.translation(target)+'的手牌',cards2];
            game.log(player,'观看了',target,'的手牌');
            player.chooseControl('ok').set('dialog',content);
            event.cards=cards2;
        'step 1'  
        event.available=target.getCards('h',function(card){
            return game.hasPlayer(function(current){
            return player.canUse(card,current);
        });
        });
       'step 2'  
       if(event.available.length>0){
           player.chooseButton(['选择其中一张牌对场上的角色使用之，并且消耗一枚正义标记。',event.available],false).ai=function(button){
               var att=get.attitude(player,target);
               var eff=get.effect(player,button.link,target,player);
              return get.value(button.link);
            }
       }else event.finish();
                'step 3'
                 if(result.links&&result.bool){
                 target.removeMark('zhyui_mark',1);
                 event.use_card=result.links[0];
                 player.chooseTarget('正义：请选择'+get.translation(event.use_card)+'的目标。',true,function(card,player,target){
                return true;
            }).set('ai',function(target){
                 var player=_status.event.player;
            return get.effect(target,_status.event.cardx,player,player);
            }).set('cardx',result.links[0]);
                      }else event.finish();
                'step 4'
                if(result.bool){
                    var targetx=result.targets[0];
                    player.line(target,'green');
                    player.useCard(event.use_card,targetx);
                }
    },
                        ai:{
                            result:{
                                player:function (player){                
                return 1;
            },
                                target:function (player,target){                
                var eff=get.damageEffect(target,player);
                var att=get.attitude(target,player);
                if(att<=0) return 2.5;                
               return -1;
            },
                            },
                            order:7,
                        },
                        sub:true,
                        "_priority":0,
                    },
                    mark:{
                        charlotte:true,
                        forced:true,
                        marktext:"正义",
                        intro:{
                            content:"mark",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            beyui:{
                trigger:{
                    player:"die",
                },
                direct:true,
                skillAnimation:true,
                forceDie:true,
                content:function (){
         "step 0"
        player.chooseTarget(get.prompt2('beyui'),function(card,player,target){
            return player!=target;
        }).set('forceDie',true).set('ai',function(target){
            var num=get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        })
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('beyui',target);
            player.line(target,'green');
            var chat=["Dio大人！我什么都没有说......","我绝对不会出卖Dio大人"];               
            player.say(chat.randomGet());
            target.draw(3);
        }
    },
                "_priority":0,
            },
            funyui:{
                subSkill:{
                    recover:{
                        mark:true,
                        marktext:"<span style=\"color:blue\">钻</span>",
                        intro:{
                            content:function (storage,player,skill){
            return "【疯狂钻石】:准备阶段回复所有体力，并将手牌摸至4。"
        },
                        },
                        charlotte:true,
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
            player.recover(Infinity);
            player.drawTo(4);
            player.removeSkill('funyui_recover');
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                usable:1,
                enable:"phaseUse",
                filter:function (event,player){
        return true;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.inRange(player);
    },
                content:function (){
       target.damage(player);
       if(!target.hasSkill('funyui_recover')) target.addSkill('funyui_recover');
    },
                ai:{
                    result:{
                        player:function (player){                              
                return 1;
            },
                        target:function (player,target){                
                var eff=get.damageEffect(target,player);
                var att=get.attitude(target,player);
                var dd=0,rr=0,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                var attx=get.attitude(player,players[i]);                
                if(attx<0&&players[i].countCards('h',{name:'tao'})) dd++; 
                if(attx>0&&players[i].countCards('h',{name:'tao'})) rr++; 
                }
               if(att>0&&target.hp>1&&player.countCards('h',{name:'tao'})) return 4.5;                
               if(att>0&&rr>1) return 4.2;
               if(eff<0&&dd<1&&target.hp<2) return 4.0;
               if(eff<0&&target.hasSkill('funyui_recover')) return 4.1;
               return -1;
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            zuigui:{
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){        
        if(event.source==player&&event.player!=player&&event.player.countCards('he')){
           return true;
        }
        return false;       
    },
                content:function (){
        'step 0'
        event.num=trigger.player.getCards('he').length
        trigger.player.discard(trigger.player.getCards('he'));
        'step 1'
        event.cards=get.cards(event.num*2);
        player.showCards(event.cards,'疯狂钻石');
        'step 2'
        player.chooseButton(['选择其中'+event.num+'张牌令其获得。',event.cards],event.num,true).ai=function(button){
               var att=get.attitude(player,trigger.player);
               var eff=get.effect(player,button.link,trigger.player,player);
              return get.value(button.link)&&att>0||-get.value(button.link)&&att<=0;
            }
        'step 3'
        if(result.links){
            player.line(trigger.player,'green');
            trigger.player.gain(result.links);
            trigger.player.$draw(event.num);
            game.log(trigger.player,'的手牌被'+get.translation(player)+'重构，张数为:'+event.num);
        }
        
    },
                "_priority":0,
            },
            suizui:{
                mark:true,
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                limited:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
            return player.storage.suizui==false;
    },
                content:function (){
            player.storage.suizui=true
            player.draw(3);
                player.awakenSkill('suizui');
       
            },
                "_priority":0,
            },
            bifuio:{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function (event,player){
       return event.player.getHistory('useCard').length<game.countPlayer()&&player.countCards('h');
    },
                content:function (){
        'step 0'
        var dialog=['变化：可以选择其中一张牌执行。'];        
        event.list=[];
        var list=[];
        for (var i = 0; i < lib.inpile.length; i++) {                
   if (get.type(lib.inpile[i])!='equip'&&game.hasPlayer(function(current){
            return player.canUse(lib.inpile[i],current);
        })) event.list.push(['变化', '', lib.inpile[i]]);
        }
        for (var i = 0; (event.list.length>game.countPlayer())?i<game.countPlayer():i<event.list.length; i++){    
            var e=event.list.randomGet()
            if(!list.contains(e)){
               list.push(e);
            }else{
                i--;
            }         
        }
            dialog.push([list, 'vcard']);
            player.chooseButton(dialog).set('ai',function(button){
        var player=_status.event.player;var name=button.link[2];var person=_status.event.target;    
        var att=get.attitude(player,person);
          if(person!=player) return get.value({name:name});   
          return get.effect(player,{name:name},player,player);
    }).set('target',trigger.player);
             
            'step 1'
            if(result.bool&&result.links){
                event.name=result.links[0][2]; 
                var choice=['对己使用'];
                if(trigger.player!=player) choice.push('对其使用');
                choice.push('cancel2');
                player.chooseControl(choice).set('prompt','请选择'+get.translation(event.name)+'的目标').set('ai',function(){            
            var eff=get.effect(player,{name:event.name},trigger.player,player);
            var att=get.attitude(player,trigger.player);
            if(eff>0&&(choice.length==2||choice.length==3)) return 0;
            if(eff>0&&att>0&&choice.length==3) return 1;
            if(eff<0&&att<0&&choice.length==3) return 1;
            if(choice.length==2) return 1;
            if(choice.length==3) return 2;        
        });
            }else event.finish();
             'step 2' 
              if(result.control!='cancel2'){
                 event.control=result.control
                 player.chooseCard('h',true,function(card,player){
                    return true;
                },'选择一张手牌当做【'+get.translation(event.name)+'】对'+(event.control=='对其使用'?get.translation(trigger.player):get.translation(player))+'使用').set('ai',function(card){
                    var player=_status.event.player;
                    return -get.value(card);
                });
              }else event.finish();
        'step 3'
        if(result.bool){
            if(event.control=='对其使用'){
              player.useCard({name:event.name},result.cards,trigger.player,false);  
            }else{
              player.useCard({name:event.name},result.cards,player,false);  
            }
            
        }
    },
                "_priority":0,
            },
            juiyyuiui:{
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                content:function (){
        'step 0'
      player.gainMaxHp(Math.floor(game.countPlayer()/2));   
      player.recover(Math.floor(game.countPlayer()/2)); 
      player.changeHujia(2);   
    },
                "_priority":0,
            },
            "bai_yui":{
                audio:"ext:JoJo:1",
                enable:["chooseToUse","chooseToRespond"],
                hiddenCard:function(player,name){
        if(get.type(name)!='basic') return false;
        return player.countCards('hes',{type:'equip'});
    },
                filter:function(event,player){
        if(!player.countCards('hes',{type:'equip'})) return false;
        for(var name of lib.inpile){
            if(get.type(name)!='basic') continue;
            if(event.filterCard({name:name},player,event)) return true;
            if(name=='sha'){
                for(var nature of lib.inpile_nature){
                    if(event.filterCard({name:'sha',nature:nature},player,event)) return true;
                }
            }
        }
        return false;
    },
                chooseButton:{
                    dialog:function(event,player){
            var list=[];
            for(var name of lib.inpile){
                if(get.type(name)!='basic') continue;
                if(event.filterCard({name:name},player,event)){
                    list.push(['基本','',name]);
                }
                if(name=='sha'){
                    for(var nature of lib.inpile_nature){
                        if(event.filterCard({name:name,nature:nature},player,event)) list.push(['基本','','sha',nature]);
                    }
                }
            }
            return ui.create.dialog('',[list,'vcard'],'hidden');
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
                        if(player.countCards('hes',{type:'equip'})) return 3;
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
                filterCard:function(card,player,target){
                    if(player.countCards('hes',{type:'equip'})) return get.type(card)=='equip';
                    else if(ui.selected.cards.length){
                        if(get.type(ui.selected.cards[0])=='basic') return true;
                        return get.type(card)=='basic';
                    }
                    return true;
                },
                complexCard:true,
                selectCard:function(){
                    var player=_status.event.player;
                    return 1;
                },
                check:function(card,player,target){
                    if(!ui.selected.cards.length&&get.type(card)=='basic') return 6;
                    else return 6-get.value(card);
                },
                viewAs:{name:links[0][2],nature:links[0][3]},
                position:'hes',
                popname:true,
                precontent:function (result,player) {
                player.logSkill("bai_yui");          
                },
            }
        },
                    prompt:function(links,player){
            return '将一张装备牌当做'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'使用或打出';
        },
                },
                ai:{
                    order:function(){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0&&player.countCards('hes',{type:'equip'})){
                return 3.3;
            }
            return 3.1;
        },
                    skillTagFilter:function(player,tag,arg){
            if(tag=='fireAttack') return true;
            if(!player.countCards('hes',{type:'equip'})) return false;
        },
                    result:{
                        player:1,
                    },
                    respondSha:true,
                    respondShan:true,
                    fireAttack:true,
                },
                group:["bai_yui_num"],
                "_priority":0,
                subSkill:{
                    num:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event){
                var evt=event;
                return ['sha','tao'].contains(evt.card.name)&&evt.skill=='bai_yui_backup'&&evt.cards;
            },
                        content:function(){
                trigger.baseDamage++;
            },
                        sub:true,
                        "_priority":0,
                    },
                },
            },
            "shu_run":{
                shaRelated:true,
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.skill=='bai_yui_backup';
    },
                logTarget:"target",
                content:function(){
            trigger.getParent().directHit.add(trigger.target);
    },
                "_priority":0,
            },
            "you_ton":{
                group:["you_ton_s"],
                subSkill:{
                    s:{
                        trigger:{
                            global:"phaseBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
            if(players[i].getCards('hejs',{name:'ar_bise_kn'}).length>0){
                return false;
            }
        }
                return true;
            },
                        content:function (){
                player.useCard(game.createCard('ar_bise_kn'),player);
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                content:function (){
      player.useCard(game.createCard('ar_bise_kn'),player);
    },
                "_priority":0,
            },
            "ar_bise_kn_skill":{
                equipSkill:true,
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return num+=1;
        },
                    targetEnabled:function (card,player,target){
            if(get.subtype(card)=='equip1'&&get.type(card)=='equip'){
                return false;
            }
        },
                },
                trigger:{
                    source:"dieAfter",
                },
                forceDie:true,
                filter:function(event,player,name){
        return name=='die'||player.isIn();
    },
                direct:true,
                content:function(){
        game.over(true);
    },
                group:["ar_bise_kn_skill_num"],
                "_priority":0,
                subSkill:{
                    num:{
                        trigger:{
                            player:["dying"],
                        },
                        forced:true,
                        content:function(){
                'step 0'
                player.chooseTarget('请将【阿努比斯神】置入一名其他角色的装备区内',true,function(card,player,target){
                return player!=target;
        }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                return att>0;
            });
                'step 1'
                if(result.bool){
            player.$give(player.getCards('e',function(card){
            return get.subtype(card)=='equip1';
        })[0],result.targets[0],false);
            result.targets[0].useCard(player.getCards('e',function(card){
            return get.subtype(card)=='equip1';
        })[0],result.targets[0]);
                }
    },
                        sub:true,
                        "_priority":0,
                    },
                },
            },
            "dou_bo":{
                usable:1,
                enable:"phaseUse",
                filter:function (event,player){
        return  true;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        'step 0'
        player.addTempSkill('dou_bo2');
        target.addTempSkill('dou_bo2');
        player.chooseControl().set('choiceList',[
            '胜者摸牌,败者弃牌',
            '胜者获得败者的牌',
            '胜者恢复体力败者损失体力',
        ]).set('ai',function(){
            if(player.hp<=2&&(player.maxHp-player.hp)>=2){
                return 2;
            }else if(target.countCards('h')>=3){
                return 1;
            }else{
                return 0;
            }
        });
        'step 1'
        event.index=result.index;
        player.$draw();
        event.card1=get.cards(1);   
        player.gain(event.card1).gaintag=['dou_bo2'];
        
        target.$draw();
        event.card2=get.cards(1);   
        target.gain(event.card2).gaintag=['dou_bo2'];
        
        event.playerCount=0;
        event.targetCount=0;
        result.control
        game.delay(0.5);
        'step 2'
        if(event.playerCount<3){
            var str11='重复摸牌';
             var str22='结束';
            player.chooseControl(str11,str22,function(){ 
                var count = 0;
                var len = 13;
                for(var i=0;i<player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length;i++){
                    count+=get.number(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        })[i]);
                }
                len = len - count;
            if(count<13&&len>6){
                return str11;
            }else{
                return str22;
            } 
                });
         }else{
             event.goto(4);
         }
        'step 3'
        if(result.control=='重复摸牌'){
            event.playerCount++;
            player.$draw();
        event.card1=get.cards(1);   
        player.gain(event.card1).gaintag=['dou_bo2'];
            game.delay(0.5);
            event.goto(2);
        }
        'step 4'
        if(event.targetCount<3){
            var str11='重复摸牌';
             var str22='结束';
            target.chooseControl(str11,str22,function(){ 
                var count = 0;
                var len = 13;
                for(var i=0;i<target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length;i++){
                    count+=get.number(target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        })[i]);
                }
                len = len - count;
            if(count<13&&len>6){
                return str11;
            }else{
                return str22;
            } 
                });
         }else{
             event.goto(6);
         }
        'step 5'
        if(result.control=='重复摸牌'){
            event.targetCount++
            target.$draw();
        event.card2=get.cards(1);   
        target.gain(event.card2).gaintag=['dou_bo2'];
            game.delay(0.5);
            event.goto(4);
        }
        'step 6'
        event.playerTotal = 0;
        event.targetTotal = 0;
        event.winner = 0;//0为平局 1玩家获胜 2目标获胜
        for(var i=0;i<player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length;i++){
                    event.playerTotal+=get.number(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        })[i]);
                }
        for(var i=0;i<target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length;i++){
                    event.targetTotal+=get.number(target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        })[i]);
                }
        game.delay(0.5);
        
        'step 7'
        player.showCards('玩家的赌牌',player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }));
        target.showCards('目标的赌牌',target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }));
        var scr1 = '你的总点数为'+event.playerTotal;
        var scr2 = '目标的总点数为'+event.targetTotal;
        if(event.playerTotal>13) scr1+='(大于13)'
        if(event.targetTotal>13) scr2+='(大于13)'
        player.chooseControl().set('choiceList',[
            scr1,
            scr2,
            '确定',
        ]).set('ai',function(){
                return 2;
        });
        //如果这个阶段双方有一方的总点数超过了13则直接判定输赢
        if(event.playerTotal>13&&event.targetTotal>13){
            player.say('看来这场牌局还没有分出胜负,我的点数为'+event.playerTotal+'你的点数为'+event.targetTotal+',根据规则我们两个都输了啊');
            event.winner = 0;
            event.goto(11);
        }else if(event.playerTotal>13){
            player.say('不可能!!你绝对把我的牌给换了！什么时候难道是刚才白金之星？！！');
            event.winner = 2;
            event.goto(11);
        }else if(event.targetTotal>13){
            player.say('看来我赢了，你的点数似乎太大了，违反了规则呢，那么你的灵魂归我了');
            event.winner = 1;
            event.goto(11);
        }
        game.delay(0.5);
        'step 8'
        event.playerBase = event.playerTotal;
        event.targetBase = event.targetTotal;
        event.playerHeart = 0;
        event.playerClub = 0;
        event.playerBasic = 0;
        event.playerSkill = 0;
        event.targetHeart = 0;
        event.targetClub = 0;
        event.targetBasic = 0;
        //全部都是红心
        //玩家
        if(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length==player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.suit(card)=='heart';
        }).length){
            event.playerTotal += 5;
            event.playerHeart = 5
        }
        
        //目标
        if(target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.suit(card)=='heart';
        }).length==target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length){
            event.targetTotal += 5;
            event.targetHeart = 5;
        }
        //全部都是梅花
        //玩家
        if(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.suit(card)=='club';
        }).length==player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length){
            event.playerTotal += 3;
            event.playerClub = 3;
        }
        
        //目标
        if(target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.suit(card)=='club';
        }).length==target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length){
            event.targetTotal +=3;
            event.targetClub = 3;
        }
        //全部都是基本牌
        //玩家 
        if(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.type(card)=='basic';
        }).length==player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length){
            event.playerTotal += 1;
            event.playerBasic = 1;
        }
        //目标
        if(target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2')&&get.type(card)=='basic';
        }).length==target.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }).length){
            event.targetTotal += 1;
            event.targetBasic = 1;
        }
        if(player.hasSkill('lui_zui')){
            event.playerTotal += player.hujia;
            event.playerSkill = player.hujia;
         }
        game.delay(0.5);
        'step 9'
        var scr1 = '你的基础点数为'+event.playerBase;
        if(event.playerHeart > 0) scr1=scr1+'+'+ event.playerHeart +'(红心牌加成)';
        if(event.playerClub > 0) scr1=scr1+'+'+ event.playerClub +'(梅花牌加成)';
        if(event.playerBasic > 0) scr1=scr1+'+'+ event.playerBasic +'(基本牌加成)';
        if(event.playerSkill > 0) scr1=scr1+'+'+ event.playerSkill +'(技能加成)';
        scr1=scr1+'=(总计)'+event.playerTotal+'(后续点数加成不算超过13)';
        var scr2 = '目标的基础点数为'+event.targetBase;
        if(event.targetHeart > 0) scr2=scr2+'+'+ event.targetHeart +'(红心牌加成)';
        if(event.targetClub > 0) scr2=scr2+'+'+ event.targetClub +'(梅花牌加成)';
        if(event.targetBasic > 0) scr2=scr2+'+'+ event.targetBasic +'(基本牌加成)';
        scr2=scr2+'=(总计)'+event.targetTotal+'(后续点数加成不算超过13)';
        player.chooseControl().set('choiceList',[
            scr1,
            scr2,
            '确定',
        ]).set('ai',function(){
                return 2;
        });
        'step 10'
        if(event.playerTotal>event.targetTotal){
            player.say('看来我赢了,作为交换你的灵魂是我的了');
            event.winner = 1;
        }else if(event.playerTotal<event.targetTotal){
            player.say('不可能!!你一定是出老千了,难道是靠白金之星的速度?!!');
            event.winner = 2;
        }else{
            event.winner = 0;
        }
        'step 11'
        player.removeSkill('dou_bo2');
        target.removeSkill('dou_bo2');
        'step 12'
        var loser;
        var winner;
        if(event.winner == 1){
            player.changeHujia(1);
            loser = target;
            winner = player;
        }else if(event.winner == 2){
            loser = player;
            winner = target;
        }else{
            //若为平局则玩家损失一点体力
            player.loseHp();
            event.finish();
        }
       if(event.winner!=0){
           var num = Math.floor((event.playerTotal+event.targetTotal)/4);
           if(num < 1) num = 1;
           if(num > 4) num = 4;
           if(event.index == 0){
               winner.logSkill('dou_bo', loser);
               winner.draw(num);
               loser.chooseToDiscard(num,true,'he');
           }
           if(event.index == 1){
               winner.logSkill('dou_bo', loser);
               if(num > loser.countCards('he')){
                    winner.gain(loser.getCards('he'),loser,"give"); 
               }
               winner.gainPlayerCard('he',num,loser,true);
           }
           if(event.index == 2){
               var num2 = Math.floor((event.playerTotal+event.targetTotal)/4);
               winner.logSkill('dou_bo', loser);
               num2 = Math.floor(num2/2)<1?1:Math.floor(num2/2);
               if(num2 < 1) num2 = 1;
               if(num2 > 4) num2 = 4;
               winner.recover(num2);
               loser.loseHp(num2);
           }
       }
    },
                ai:{
                    result:{
                        target:function (player,target){                
                return get.attitude(target,player)<=0;
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "dou_bo2":{
                mark:true,
                charlotte:true,
                forced:true,
                marktext:"赌",
                intro:{
                    content:function (storage,player,skill){
                return '正在进行狂赌';       
        },
                },
                onremove:function (player){
        player.discard(player.getCards('he',function(card){
            return card.hasGaintag('dou_bo2');
        }));
        player.removeGaintag('dou_bo2');
    },
                "_priority":0,
            },
            "lui_zui":{
                "_priority":0,
            },
            "shi_wu":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        player.discardPlayerCard(target,2,'he',true);
        target.damage();
        
    },
                ai:{
                    result:{
                        player:function (player){                
                return 1;
            },
                        target:function (player,target){                
                var eff=get.damageEffect(target,player);
                var att=get.attitude(target,player);
                if(att<=0) return 2.5;                
               return -1;
            },
                    },
                    order:7,
                },
                "_priority":0,
            },
            "zui_sh":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                filter:function (event,player){
        if(player.countCards('he')<=0) return false;
        return game.hasPlayer(function(current){
                    return current.getDamagedHp();
                });
    },
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt('zui_sh'),'你可以为一名角色进行"止伤"',function(card,player,target){
            return target.getDamagedHp()&&player.countCards('he')>=target.getDamagedHp();
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            if(player.getDamagedHp()>=3) return player.getDamagedHp()+(player.getDamagedHp()-1);
            if(att>0){
                if(target.getDamagedHp()) return att;
                if(target.getDamagedHp()&&target.hp<=2) return att+target.getDamagedHp();
            }else{
                return -1;
            }
        });
        'step 1'
        if(result.bool){
            player.line(result.targets[0],'green');
            event.target=result.targets[0];
            event.draw=event.target.getDamagedHp()-1;
            var scr='【止伤】：弃'+event.target.getDamagedHp()+'张牌，然后'+get.translation(event.target)+'将体力回复至'+event.target.maxHp;
            if(event.draw>0) scr=scr+'并且摸'+(event.draw)+'张牌';
            var next=player.chooseToDiscard(scr,event.target.getDamagedHp(),'he',false);        
        next.set('ai',function(card){
            var player=_status.event.player;
            if(player.countCards('h')) return -get.value(card);   
            return -1;
        });
        }else{
            event.finish();
        }
        'step 2'
        if(result.bool&&result.cards){
            player.logSkill('zui_sh',event.target);
            event.target.recover(event.target.getDamagedHp());
            if(event.draw>0) event.target.draw(event.draw);
        }
    },
                "_priority":0,
            },
            "mui_to":{
                trigger:{
                    player:"damageBegin4",
                },
                forced:true,
                filter:function (event,player){
       if(!event.source) return false;
       return event.num&&event.num>1&&event.source.hasSex('male');
    },
                content:function (){
        'step 0'
        trigger.num--;
    },
                "_priority":0,
            },
            "zui_li":{
                group:["zui_li_effect"],
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                filter:function (event,player){
        return !game.hasPlayer(function(current){
                    return current.hasSkill('zui_li_mark')&&current.hasMark('zui_li_mark');
                });
    },
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt('zui_li'),'你需要另一名角色获得"磁"',true,function(card,player,target){
            return target!=player&&!target.hasMark('zui_li_mark');
        }).set('ai',function(target){
            var att=get.attitude(player,target);
            return -att;
        });
        'step 1'
        if(result.bool){
            player.logSkill('zui_li',result.targets[0]);
            event.target=result.targets[0];
            event.target.addTempSkill('zui_li_mark',{player:'dying'});
            event.target.addMark('zui_li_mark',1);
            player.draw(2);
        }
    },
                subSkill:{
                    effect:{
                        trigger:{
                            global:"useCardToPlayer",
                        },
                        forced:true,
                        direct:true,
                        filter:function(event,player){
                if(!game.hasPlayer(function(current){
                    return current.hasSkill('zui_li_mark')&&current.hasMark('zui_li_mark');
                })) return false;
        if(event.targets.length!=1||event.target.hasMark('zui_li_mark')||event.cards.length!=1||event.player.hasMark('zui_li_mark')) return false;
        return event.card.name=='sha'||get.type(event.card)=='equip'&&(get.subtype(event.card)=='equip1'||get.subtype(event.card)=='equip2');
    },
                        content:function(){
            var targets=game.filterPlayer();
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.target;
                for(var i=0;i<targets.length;i++){
                 if(targets[i].hasMark('zui_li_mark')) event.target=targets[i];
                }
            player.logSkill('zui_li',event.target);
            trigger.player.line(event.target,'green');
            trigger.targets.remove(trigger.target);
            trigger.targets.push(event.target);
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "zyi_qo":{
                group:["zyi_qo_effect"],
                subSkill:{
                    effect:{
                        trigger:{
                            global:"useCardToPlayered",
                        },
                        filter:function(event,player){
                if(!game.hasPlayer(function(current){
                    return current.hasSkill('zui_li_mark')&&current.hasMark('zui_li_mark');
                })) return false;
        if(event.targets.length!=1||!event.target.hasMark('zui_li_mark')||event.cards.length!=1||!player.hujia) return false;
        return get.type(event.card)=='equip'&&(get.subtype(event.card)=='equip1'||get.subtype(event.card)=='equip2');
    },
                        direct:true,
                        logTarget:"target",
                        content:function(){
                'step 0'
            player.chooseTarget(get.prompt('zyi_qo'),'是否对其造成一点伤害然后你失去一点护甲?',function(card,player,target){
            return target==trigger.target;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        'step 1'
        if(result.bool){
            player.logSkill('zyi_qo',result.targets);
            player.changeHujia(-1);  
            result.targets[0].damage();
        }
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                filter:function (event,player){
        return !player.hujia;
    },
                content:function (){
        'step 0'
        var scr='【胸器】：你可以弃等量的手牌获得等量护甲';
            var next=player.chooseToDiscard(scr,[1,player.countCards('h')],'h',false);        
        next.set('ai',function(card){
            var player=_status.event.player;
            if(player.countCards('h')>=2) return 6-get.value(card);   
            return -1;
        });
        'step 1'
        if(result.bool){
           player.logSkill('zyi_qo');
           player.changeHujia(result.cards.length);
           if(result.cards.length>1){
               var type = true;
               for(var i=1;i<result.cards.length;i++){
                   if(get.type(result.cards[0])!=get.type(result.cards[i])) type=false;
               }
               if(type) player.changeHujia(2);
           }
        }
    },
                "_priority":0,
            },
            "zui_li_mark":{
                onremove:function (player){
        player.removeMark('zui_li_mark',Infinity);
    },
                intro:{
                    content:"mark",
                },
                mark:true,
                charlotte:true,
                forced:true,
                marktext:"磁",
                "_priority":0,
            },
            "time_stop_goddio":{
                group:["time_stop_goddio_die","time_stop_goddio_count"],
                subSkill:{
                    count:{
                        trigger:{
                            player:["phaseEnd"],
                        },
                        direct:true,
                        forced:true,
                        filter:function (event,player){
        return player.countMark('time_stop_goddio');
    },
                        content:function (){
                'step 0'
            player.removeMark('time_stop_goddio');
            var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect');
            }
                'step 2'
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                    die:{
                        trigger:{
                            player:["die"],
                        },
                        forced:true,
                        forceDie:true,
                        direct:true,
                        content:function (){
                'step 0'
                var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
                'step 1'
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'green');
                event.targets[i].removeMark('time_stop_effect',Infinity);
            }
                'step 2'
         for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeSkill('time_stop_effect');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                marktext:"时",
                intro:{
                    content:function (storage,player,skill){
                return '时停还有'+get.cnNumber(player.storage.time_stop_goddio)+'个回合。';       
        },
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(!player.hasSkill('change_write')) return false;
        return !player.countMark('time_stop_goddio')&&player.storage.change_write.length>player.maxHp;
    },
                direct:true,
                skillAnimation:true,
                content:function (){
        'step 0'
                var dialog=[get.prompt('change_write')];list1=player.getStorage('change_write');
                if(list1.length){
                    dialog.push('<div class="text center">请选择并移除'+player.maxHp+'笔记录发动一次时停</div>');
                    dialog.push([list1,'vcard']);
                }
                player.chooseButton(dialog,player.maxHp).set('ai',function(button){
                    var player=_status.event.player,name=button.link[2];
                    return get.effect(player,{name:name},player,player);
                });
                'step 1'
                if(result.bool){
                    event.cardName=[];
                    player.logSkill('time_stop_goddio');
                    for(var i=0;i<result.links.length;i++){
                    var name=result.links[i][2];
                    player.unmarkAuto('change_write',[name]);
                    event.cardName.push(name);
                }
                    game.log(player,'从改写记录中移除了','#y'+get.translation(event.cardName));
                    game.delayx();
                }else{
                    event.finish();
                }
      'step 2'
      var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        'step 3'
         player.addMark('time_stop_goddio');
         if(player.maxHp>1){
             player.loseMaxHp(player.maxHp-1);
         }
         for(var i=0;i<event.targets.length;i++){
                player.line(event.targets[i],'fire');
                event.targets[i].addMark('time_stop_effect',1);
                event.targets[i].addSkill('time_stop_effect');
                event.targets[i].storage.time_stop_user=player;
            }
      
    },
                ai:{
                    order:9.1,
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "wu_si":{
                trigger:{
                    global:"useCard",
                },
                logTarget:"player",
                check:function (event,player){
        var att=get.attitude(player,event.player);
        return att<=0;
    },
                filter:function (event,player){
       return (player.storage.change_write.contains(event.card.name)&&event.player!=player&&player.maxHp>1);
    },
                content:function (){
        'step 0'        
        trigger.targets.length=0;
        trigger.all_excluded=true;
        'step 1'
        player.storage.change_write.remove(trigger.card.name);
        player.loseMaxHp();
        player.updateMark('change_write');
        game.log(player,'发动无效令'+get.translation(trigger.player)+'的','#y'+get.translation(trigger.card.name)+'#无效之');
        'step 2'
        if(player.storage.change_write.length<=0){
            player.markSkill('change_write');
            player.updateMark('change_write');
        }
    },
                "_priority":0,
            },
        },
        translate:{
            fuhunt:"绯红",
            "fuhunt_info":"当一名角色使用带有伤害标签的牌指定你为目标后，你可以弃一张【杀】或黑桃牌，然后令其交给你两张手牌并令此牌目标取消你，否则受到一点伤害你与其交换位置并在此回合结束后额外获得一个回合。",
            cunheart:"穿胸",
            "cunheart_info":"出牌阶段限一次，你可以对一名在你攻击范围内，但是你不在其攻击范围内的角色造成两点伤害。",
            baijui:"白金",
            "baijui_info":"锁定技，你使用【杀】无次数限制；当你成为一名角色【杀】的目标时，你可以弃一张手牌，然后令此【杀】对你无效；准备阶段，你从牌堆获得一张【杀】。",
            ziuyui:"战意",
            "ziuyui_info":"觉醒技，当你受到一名角色/对一名角色造成1点伤害时，你获得1枚\"战\"标。准备阶段，若你的\"战\"标记有3个或以上，你移除所有的标记，摸X张牌，增加一点体力上限，回复一点体力，然后获得【时停】。(X为你的\"战\"标记的一半向下取整)",
            "time_stop_3second":"时停",
            "time_stop_3second_info":"五秒时停。出牌阶段，你的每三个回合限一次并且在效果结算后计算，你可以令全场角色失去所有阶段，所有技能失效，并且无法使用和打出任何牌持续两个回合。",
            "time_stop_effect":"时停",
            "time_stop_effect_info":"",
            "time_stop_3second_cd1":"时停",
            "time_stop_3second_cd1_info":"",
            spbaijui:"白金",
            "spbaijui_info":"锁定技，当你使用一张非转换的【杀】指定一名角色后，你对其再使用一张额外且属性和点数相同的【杀】。",
            yuigui:"稳重",
            "yuigui_info":"锁定技，当你受到伤害后，若伤害来源没有\"警\"标记，你令其获得\"警\"标记然后摸两张牌。你对拥有\"警\"标记的角色使用一张【杀】后，其弃一张牌。",
            "yuigui_2":"稳重",
            "yuigui_2_info":"",
            fubvtu:"飞刀",
            "fubvtu_info":"出牌阶段限一次，你可以弃一张手牌，然后对一名角色使用一张不计入次数的【杀】，若该角色处于\"时停\"状态，则改为获得一枚\"刀\"标记。当拥有\"刀\"标记的角色进入出牌阶段时，移除所有\"刀\"标记，视为你对其使用X张【杀】。(X为其\"刀\"标记的数量)",
            "time_stop_9second":"时停",
            "time_stop_9second_info":"九秒时停。出牌阶段，你的每四个回合限一次并且在效果结算后计算，你可以令全场角色失去所有阶段，所有技能失效，并且无法使用和打出任何牌持续三个回合。",
            theworld:"世界",
            "theworld_info":"锁定技，你使用【杀】造成伤害时，目标弃一张手牌。当你成为一名角色【杀】的目标后，從牌堆获得一张基本牌。",
            "fubvtu_mark":"飞刀",
            "fubvtu_mark_info":"",
            bowin:"波纹",
            "bowin_info":"当你对一名角色即将造成伤害时，你可以取消此伤害，令其获得X+1枚\"纹\"标记。其的出牌阶段，若其有\"纹\"，其受到1点无来源的火焰伤害並弃一张牌，移去一个标记。准备阶段，你可以回复一点体力。(X为本次的伤害量)",
            zumuxy:"智谋",
            "zumuxy_info":"出牌阶段限一次，你可以视为使用一张普通锦囊牌。你的回合外，每名角色的回合限一次，你可以视为使用一张【无懈可击】。",
            "bowin_mark":"波纹",
            "bowin_mark_info":"",
            "fire_boo":"第一爆弹",
            "fire_boo_info":"当你使用【杀】或【决斗】对一名角色造成伤害后，你可以对其造成一点火焰伤害。",
            "second_boo":"第二爆弹",
            "second_boo_info":"出牌阶段，你可以将武将牌替换为爆炸小车(爆炸小车 体力：6 自爆：锁定技，当你受到伤害后，若其距离与你计算不大於1，你损失一点体力，然后对其造成一点火焰伤害。)，爆炸小车死亡后，你重新替换回原武将牌，然后此技能进入五个回合的冷却。",
            "third_boo":"第三爆弹",
            "third_boo_info":"限定技，败者食尘。当你进入濒死状态时，你可以摸两张牌，然后将所有牌(包括判定区)交给一名角色，并附上\"败者食尘\"的标签，拥有\"败者食尘\"的标签的牌无法被弃置，也不能使用，不占用手牌上限，然后你和\"败者食尘\"的目标将体力回复至体力上限，最后你摸三张牌，并复原武将牌，获得技能【引爆】，当你死亡时会解除\"败者食尘\"所限制的牌，此外，\"败者食尘\"的目标可以将一张带有\"败者食尘\"的标签的牌展示並交给一名除你以外的角色，每回合限一次。",
            yubossl:"引爆",
            "yubossl_info":"锁定技，当场上一名非你和非\"败者食尘\"的角色获得带有\"败者食尘\"标签的牌时，你对其造成三点火焰伤害，若其的血量大于1，则额外损失一点体力。",
            "self_bool":"自爆",
            "self_bool_info":"锁定技，当你受到伤害后，若其距离与你计算不大於1，你损失一点体力，然后对其造成一点火焰伤害。",
            "second_boo_cd":"第二爆弹",
            "second_boo_cd_info":"",
            "die_stand":"替身",
            "die_stand_info":"当你即将死亡时，你将会替换回原武将牌。",
            baizucuocu:"败者食尘",
            "baizucuocu_info":"",
            "baizucuocu2":"败者食尘",
            "baizucuocu2_info":"",
            "baizucuocu_gain":"败者食尘",
            "baizucuocu_gain_info":"",
            muxhuo:"谋害",
            "muxhuo_info":"摸牌阶段，你可以改为亮出牌堆顶的两张牌，若这两张牌颜色不同，则你可以对一名角色造成1点伤害，若其距离计算与你为1时，则你对其造成2点伤害，否则你获得这两张牌。",
            futuo:"返童",
            "futuo_info":"限定技，出牌阶段，你可以令一名角色体力上限和体力值变为1，并令其所有技能失效，直到其经过两个准备阶段后结束，复原原本的体力值和体力上限。",
            "futuo2":"返童",
            "futuo2_info":"",
            shenku:"愚者",
            "shenku_info":"出牌阶段，你可以弃置任意张手牌，令一名没有\"沙\"标记的角色获得等量的\"沙\"标记。(拥有\"沙\"标记的角色受到伤害时，此伤害-1，然后弃置一枚\"沙\"标记。此外，拥有\"沙\"标记的角色防御距+1。)",
            "shenku2":"愚者",
            "shenku2_info":"",
            zhucaty:"战车",
            "zhucaty_info":"出牌阶段，你可以损失X点体力，然后令你本回合的进攻距离+1，若如此做，你摸X张牌，并且可以多使用X张【杀】。(X为你本回合发动此技能的次数)",
            "zhucaty_distent":"战车",
            "zhucaty_distent_info":"",
            cuyuan:"残影",
            "cuyuan_info":"结束回合时，如果你本回合使用过【杀】，在你的回合外，当你成为一名角色使用牌的目标后，你摸X-1张牌，若X小於2，你回复一点体力，然后令X减1，你的回合开始时重置X。(X为你本回合使用【杀】的次数)",
            jundgyiw:"剑芯",
            "jundgyiw_info":"限定技，出牌阶段，若你已受伤，你可以损失一点体力上限，令一名角色受到3点伤害。",
            "cuyuan_effect":"残影",
            "cuyuan_effect_info":"",
            yuyuio:"预言",
            "yuyuio_info":"当一名角色进入准备阶段，结束阶段，或处於你的出牌阶段内时，若牌堆顶的一张牌与你上一次预言的牌不同，你可以观看牌堆顶的一张牌，并根据此牌的花色为其赋予命运：<br>红心，其回复一点体力，若上一张预言的牌也是红心，则改为增加1点体力上限并回复1点体力。<br>方块，从牌堆底摸一张牌。<br>梅花，其受到1点无来源的雷电伤害，若上一张预言的牌也是梅花，则改为受到2点无来源的雷电伤害。<br>黑桃，其损失一点体力，若上一张预言的牌也是黑桃，则改为损失一点体力并翻面。<br>若如此做，当本回合的角色第一次使用或打出此牌颜色相同的牌时，你可以从牌堆底获得一张牌。",
            "yuyuio2":"预言",
            "yuyuio2_info":"",
            yuirunt:"易容",
            "yuirunt_info":"当你受到伤害时，你可以令你本回合处于\"调虎离山 \"的状态。",
            "虫箭1":"虫箭",
            "虫箭1_info":"",
            "fuhunt_update":"绯红.改",
            "fuhunt_update_info":"当一名角色使用牌指定你为目标后，你可以弃一张手牌，然后令其交给你两张手牌并令此牌目标取消你，否则受到一点伤害你与其交换位置并在此回合结束后额外获得一个回合。(此技能不会失效)",
            "baijui_update":"白金.改",
            "baijui_update_info":"锁定技，你使用【杀】无次数限制；当你成为一名角色【杀】的目标时，你可以摸一张牌然后弃一张牌，进行一次判定，然后令此【杀】对你无效，若判定结果为黑色，则你视为对目标使用一张【杀】；准备阶段，你从牌堆获得一张【杀】。(此技能不会失效)",
            "theworld_update":"世界.改",
            "theworld_update_info":"锁定技，你使用【杀】的伤害+1。当你成为一名角色【杀】的目标后，從牌堆获得一张基本牌。你使用【杀】时，若目标的体力值小于你，则其无法使用【闪】响应此【杀】。(此技能不会失效)",
            "zhucaty_update":"战车.改",
            "zhucaty_update_info":"出牌阶段，你可以损失X-1点体力，然后令你本回合的进攻距离+1，若如此做，你摸X+1张牌，并且可以多使用X张【杀】。(X为你本回合发动此技能的次数)(此技能不会失效)",
            "stand_skill":"替身",
            "stand_skill_info":"出牌阶段限一次，你可以对一名攻击范围内的角色使用一张【杀】。",
            "stand_skill2":"替身",
            "stand_skill2_info":"锁定技，准备阶段，你可以回复一点体力。",
            "stand_skill3":"替身",
            "stand_skill3_info":"锁定技，你不能成为梅花牌的合法使用目标。",
            "stand_skill4":"替身",
            "stand_skill4_info":"锁定技，摸牌阶段，你可以多摸一张牌。",
            "stand_special_cyuhos":"猜拳",
            "stand_special_cyuhos_info":"特殊替身，猜拳小子。转换技，阴，出牌阶段限一次，你可以与一名角色进行一次猜拳，若你赢，你可以获得其武将牌上的一个技能，然后其该技能失效，转换为阳。阳，当你进入濒死状态时，你失去因\"猜拳\"而获得的技能，然后其恢复该技能，然后转换为阴。如果平手，则再进行一次猜拳。",
            "hung_gold":"黄金",
            "hung_gold_info":"黄金体验。当你对一名角色造成伤害后，若其身上有装备牌，并且武将牌上没有\"生\"，你可以选择一张将其置于目标武将牌之上，并赋予3点体力，称为\"生\"。若其有\"生\"，当其受到伤害时，改为由\"生\"扣除同等的体力免疫此次伤害，当其对一名角色造成伤害时 ，则改为由其承担伤害(以此法造成的伤害不会由\"生\"承担)。此外，目标视为拥有\"生\"牌的技能。",
            dujun:"夺箭",
            "dujun_info":"限定技，当你对一名角色造成伤害后，若其的体力值小於或等于1，你可以从其的区域中或牌堆获得装备\"虫箭\"。",
            "hung_gold_update":"黄金",
            "hung_gold_update_info":"黄金体验镇魂曲。当你对一名角色造成伤害后，若场上未有角色获得镇魂标记，你可以令其获得\"镇魂\"标记。当拥有\"镇魂\"标记的角色，体力值发生变化时，则记录，并取消之。此外，其失去所有阶段和技能，并且每回合失去一点体力，持续三个回合。三个回合后，若X大於或等于其的体力上限， 其死亡，否则损失X点体力上限。(X为其体力变化的数值)",
            "healthy_hp":"再生",
            "healthy_hp_info":"出牌阶段限一次，若你的手牌小于你的体力上限，你可以将手牌摸至体力上限。",
            "hung_gold_update_hui":"镇魂",
            "hung_gold_update_hui_info":"",
            monzui:"瞄准",
            "monzui_info":"当你的【杀】被【闪】响应后，你可以选择一名其他目标对其使用此【杀】。",
            doubuo:"弹备",
            "doubuo_info":"结束阶段，若本回合你未使用【杀】，你可以获得1枚\"弹\"，你最多拥有4枚\"弹\"。出牌阶段，若你的\"弹\"大于0，你可以选择1名角色并移除1枚\"弹\"，视为使用1张无次数，距离限制和无视防具的【杀】，若此\"弹\"是第4枚，则有概率无法触发效果，然后此技能失效直至回合结束。",
            youcui:"预测",
            "youcui_info":"墓志铭。当一名其他角色即将使用牌时，你可以观看其使用的牌，然后获得一张与此牌类型不同的牌，除非你弃一张与此牌类型相同的手牌，否则此技能失效直至本回合结束。",
            whzuio:"伪装",
            "whzuio_info":"锁定技，你受到的伤害+1。你使用【杀】无法被【闪】响应。",
            touhun:"通话",
            "touhun_info":"觉醒技，准备阶段，若你的体力值不大2或当你进入濒死状态时，你可以增加1点体力上限，然后失去技能\"伪装\"，获得\"绯红\"，然后变身为迪亚波罗。 ",
            mzhuoi:"绯红",
            "mzhuoi_info":"你的回合内，当你使用一张牌时，你随机记录一个数字(1-13)。你的回合外，当一名角色使用一张与你记录的数字相同点数的牌结算完毕后，你可以将\"绯红\"所有的记录清除，然后你强制进行一个回合，此回合内，除你以外的角色无法打出/使用牌，并且本回合\"绯红\"失效，回合结束后，你可以与该名角色的上家/下家交换位置。",
            jurwui:"绝望",
            "jurwui_info":"限定技，当你受到伤害后，若你的体力值小于2，你可以从对自己使用【虫箭】，然后你将此牌至于武将牌之上，发动\"虫箭\"之。",
            "_chereacter_cardsonactoer":"武将牌库(特殊)",
            "_chereacter_cardsonactoer_info":"",
            "metal_product":"制品",
            "metal_product_info":"每回合限一次，准备阶段或当你成为一名角色的使用牌/使用牌指定唯一角色的目标时，你可以弃一名其他角色/目标的一张手牌，然后将一张\"金属制品\"置於其特殊牌库之上 ，当其使用牌时，其须获得一张\"金属制品\"，损失一点体力。",
            cudo:"杀意",
            "cudo_info":"锁定技，当一名角色获得/失去\"金属制品\"时，你摸一张牌。",
            "_metallica_card_destory":"销毁",
            "_metallica_card_destory_info":"",
            "change_write":"改写",
            "change_write_info":"每回合限X次，若\"改写\"有未记录的非装备牌和非延误锦囊牌，你可以视为使用之，然后记录之，若你的体力上限小于5，你增加1点体力上限并回复1点体力。(X为你的体力值)",
            "draw_disc":"光碟",
            "draw_disc_info":"①当你使用牌指定一名唯一角色并造成伤害后，若其武将牌上有你可抽取的技能，并且其武将牌上未有光碟，并且这些技能属于其原本的武将牌上，你可以将这些技能移除(特殊技能除外)，然后制造一张相应技能的光碟。<br>②你的光碟不计入手牌上限。<br><h5><span style=\"color:pink\">光碟：若目标的武将特殊牌库中未存在同类型的光碟牌时，你可以展示然后对目标使用，则将此牌置于其中，然后获得相应的技能。出牌阶段限一次，目标可以获得光碟。当目标进入濒死状态后，此光碟置入弃牌堆。</span></h5> ",
            "_show_disc_card":"使用",
            "_show_disc_card_info":"你可以展示并对一名角色使用一张光碟。 ",
            "mark_dis_process_card":"光碟",
            "mark_dis_process_card_info":"",
            "toa_don":"天堂",
            "toa_don_info":"觉醒技，若你已收集3个或以上的光碟，你减少一点体力上限，并摸两张牌和回复一点体力，失去技能\"光盘\"，获得技能\"天造\"。",
            "haven_product":"天造",
            "haven_product_info":"锁定技，若你未处于\"时停\"，你的防御距离无限和进攻距离无限。准备阶段，你可以对一名其他角色造成一点伤害。<br>重启世界：每局游戏限一次，若场上死亡的角色大于3，你可以复活所有死亡的角色，其失去所有技能，恢复所有体力，摸四张牌，并随机获得一项场上未存在的技能，然后替换随机身份牌，你可以增加一个替换身份牌的权重。",
            Ssenol:"线勾",
            "Ssenol_info":"①准备阶段，你可以选择一项：<br>1.将一名拥有\"线\"标记的角色装备区的一张牌移至你的装备区。<br>2.摸一张牌，然后令场上拥有\"线\"标记的角色摸一张牌。<br>②当你进入濒死状态时，你可以移除场上所有的\"线\"标记，然后摸等量的牌，并弃置所有装备牌。",
            senjui:"线阵",
            "senjui_info":"锁定技：<br>①出牌阶段，若你的体力上限大于1，你可以令一名其他角色获得1枚\"线\"标记，然后损失1点体力上限。<br>②若你的装备数不大于5+X，则你使用装备牌无次数限制。<br>③当场上一名拥有\"线\"标记的角色进入濒死状态时，其失去所有\"线\"标记。<br>④你的手牌上限+X。(X为场上\"线\"标记的总合)<br>⑥当场上一名角色的\"线\"标记被移除后，你增加同等的体力上限，并回复同等体力。",
            chfu:"承父",
            "chfu_info":"觉醒技，若你本游戏第一次发动\"线勾\"②，你增加一点体力上限，然后获得技能 【白金】。",
            xinshu:"吸血",
            "xinshu_info":"当你对一名角色造成一点伤害时，若此伤害渠道不为【杀】，你可以增加一点体力上限，或回复一点体力。",
            shujiu:"世界",
            "shujiu_info":"当你需要使用【杀】时，若你的体力上限大於3，你可以损失1点体力上限， 视为使用一张【杀】。",
            yulog:"压路",
            "yulog_info":"限定技，出牌阶段，你可以视为使用一张的【决斗】，此【决斗】伤害+1，并且你每打出一张【杀】，伤害便+1 ，而且不能被【无懈可击】，并且指定目标，目标可以选择手牌中的一种颜色，本回合此颜色的所有手牌视为【杀】，若此时目标处于【时停】，则目标暂时解除之，并且回合最多使用3张牌，直到此【决斗】结算完毕。",
            huzui:"空间",
            "huzui_info":"锁定技，的手牌上限为无限。 ",
            "_xixghost_skill":"吸血鬼",
            "_xixghost_skill_info":"",
            "xixghost_item":"石鬼面",
            "xixghost_item_info":"",
            "xinshu_skill":"吸血",
            "xinshu_skill_info":"当你对一名角色造成一点伤害时，若此伤害渠道为卡牌，你可以将手牌摸至二，或回复一点体力。",
            tucui:"探测",
            "tucui_info":"出牌阶段，你可以弃置一张点数大于8的手牌1，然后观看一名角色的手牌，若如此做，你可以弃一张牌，然后弃其手中任意一张牌，若此牌与你手牌1所弃的牌花色或点数相同，你摸一张牌。",
            zuimuk:"智谋",
            "zuimuk_info":"锁定技，你的锦囊牌不计入手牌上限。",
            bassoul:"宝石",
            "bassoul_info":"准备阶段，你可以从\"绿宝石\"、\"蓝宝石\"、\"红宝石\"、\"黄宝石\"中选择一个，令你本回合使用【杀】无距离限制，获得以下效果：<br>绿宝石：你使用【杀】可以指定额外两名目标。<br>蓝宝石：你的【杀】均视为【雷杀】，你使用【雷杀】无法被响应。<br>红宝石：你的【杀】均视为【火杀】，你使用【火杀】伤害+1。<br>黄宝石：你使用【杀】指定目标后可以观看并获得目标至多两张手牌，如果获得的牌大于1，你损失一点体力。",
            jujui:"布置",
            "jujui_info":"①结束阶段，你可以选择一名没有被记录的角色，记录其於\"结界\"之中。②每回合限一次，当你使用一张【杀】被绿宝石结界已记录的角色闪避后，你可以将此【杀】视为对结界内的另一名角色使用。 ",
            jigyu:"结界",
            "jigyu_info":"限定技，出牌阶段，若你你记录2名或更多角色时，你可以对他们依次使用一张【杀】，直至所有角色都已成为【杀】的目标。",
            gumnum:"鬼面",
            "gumnum_info":"锁定技，进入游戏前，你获得【石鬼面】。",
            banomui:"跋扈",
            "banomui_info":"锁定技，准备阶段，你可以摸两张牌，若你的判定区有牌，你可以弃一张手牌，视为对一名任意角色使用一张黑色的【过河拆桥】。",
            yumimio:"阴谋",
            "yumimio_info":"锁定技，你使用的黑色牌无法被响应。",
            mushi:"魔术",
            "mushi_info":"锁定技，游戏开始，你将十八张【塔罗牌】置入牌堆，然后你令场上所有角色各从牌堆获得一张【塔罗牌】。当场上有角色使用【塔罗牌】时，你摸一张牌。",
            wuhot:"狂热",
            "wuhot_info":"每回合限一次，当你造成伤害时，若你此前已造成过伤害，你可以将此伤害+1并改为火属性。当你造成一点火焰伤害时，你可以摸一张牌或弃置场上的一张牌。",
            suki:"十字",
            "suki_info":"限定技，出牌阶段，你可以选择至多两名角色(角色不能是已选择的角色的上家或者下家)，对他们各造成一点火焰伤害，若他们的上家或下家不为你，则对他们的上家和下家造成一点火焰伤害。",
            sknife:"流刀",
            "sknife_info":"锁定技，你使用【杀】对距离计算与你不大于1的角色时，其无法响应。你使用【杀♠】造成的伤害+1。",
            juinu:"柱男",
            "juinu_info":"锁定技，特殊技，你受到的火焰伤害+1。当一名角色进入结束阶段时，若你本回合未受到火焰伤害，则你回复一点体力或者摸一张牌。你使用【石鬼面】时会成为Jo极生物。 ",
            zhyui:"正义",
            "zhyui_info":"①当你对一名角色造成伤害后，你可以令其获得1枚正义标记。②出牌阶段，你可以观看一名有正义标记的角色的手牌，若当中有你可以打出/使用的牌，你可以消耗其一枚正义标记，选择其中一张牌视为由你对场上的角色打出/使用。",
            beyui:"闭言",
            "beyui_info":"当你死亡的时候，你可以令一名角色摸三张牌。",
            funyui:"复原",
            "funyui_info":"出牌阶段限一次，你可以对一名距离与你不大于一的其他角色造成1点伤害，然后其下个回合开始时，将体力回满并且将手牌摸至四张。",
            zuigui:"重构",
            "zuigui_info":"当你对一名角色造成伤害后，你可以将其所有手牌和装备牌弃置，然后你从牌堆顶亮出2X张牌，选择其中X张令其获得之。(X为其弃置的牌数)",
            suizui:"伤负",
            "suizui_info":"限定技，当你受到伤害后，你可以摸三张牌。 ",
            bifuio:"变化",
            "bifuio_info":"当一名角色的回合结束后，若其本回打出的牌小於X，则你可以从牌堆中随机观看X张你可以使用的非装备牌，然后你可以将一张手牌对其/对你当作此牌使用之。(X为全场存活的角色数)",
            juiyyuiui:"奇硬",
            "juiyyuiui_info":"锁定技，游戏开始时，你增加X点体力上限回复X点体力，并获得两点护甲。(X为全场存活的角色数的一半，向下取整)",
            "bai_yui":"水形",
            "bai_yui_info":"你可以将一张装备牌当做任意基本牌打出。你以此法打出的牌伤害量/回复量+1。",
            "shu_run":"水刀",
            "shu_run_info":"锁定技，当你使用技能“水形”打出的【杀】无法被闪避。",
            "you_ton":"妖刀",
            "you_ton_info":"锁定技，游戏开始时/一名角色的准备阶段开始时，若场上未拥有【阿努比斯神】，你将一张【阿努比斯神】置入你的装备区。",
            "ar_bise_kn_skill":"阿努比斯神",
            "ar_bise_kn_skill_info":"",
            "dou_bo":"狂赌",
            "dou_bo_info":"出牌阶段限一次，你可以设下一项赌注：<br>1.胜者摸X张牌，败者弃X张牌。<br>2.胜者获得败者X张牌。（不足则全交）<br>3.胜者恢复X/2点体力，败者失去X/2点体力。（X向下取整，且至少为1）<br>然后你们两个各摸一张牌，并记录为“赌牌”，并从你开始到目标选择是否重复上述动作，最多重复3次，当目标选择结束时，各自亮出你们所得的“赌牌”，点数大的人视为胜者，然后你们两个弃置所有“赌牌”。（X你与其“赌牌”点数之和的平均值除以二，且最少为1，最大为4），并且如果“赌牌”符合以下规则，则：<br>所有“赌牌”花色为红心，则视为该名角色的“赌牌”点数+5，并且不会被视为超过13。<br>所有“赌牌”花色为梅花，则视为该名角色的“赌牌”点数+3，并且不会被视为超过13。<br>所有“赌牌”均为基本牌，则视为该名角色的“赌牌”点数+1，并且不会被视为超过13。<br>双方“赌牌”点数相同/点数总和超过13，则你损失1点体力且上述赌注作废。<br>“赌牌” 点数总和超过13，则该名目标视为败者。<br>若你于赌局获胜后，你获得1点护甲。",
            "dou_bo2":"赌牌",
            "dou_bo2_info":"",
            "lui_zui":"老千",
            "lui_zui_info":"锁定技，当你使用技能“狂赌”的时候，你的所有赌牌的点数总和+X（X为你的护甲值，并且以此法增加的点数不会视为超过13）",
            "shi_wu":"冰刺",
            "shi_wu_info":"出牌阶段限一次，你可以对一名角色造成一点伤害，然后弃置其两张牌。",
            "zui_sh":"止伤",
            "zui_sh_info":"准备阶段，若场上一名角色已受伤，你可以弃置X张牌，然后该名角色将体力恢复至体力上限，并且摸X-1张牌。（X为该角色已损失的体力）",
            "mui_to":"美腿",
            "mui_to_info":"锁定技，当你受到来自男性角色的伤害时并且伤害大于1，此伤害-1。",
            "zui_li":"磁力",
            "zui_li_info":"准备阶段，若场上没有角色有“磁”，你需令一名其他角色获得“磁”直到该名角色进入濒死状态，然后你摸两张牌。<br>“磁”：当场上一名除你以外的角色成为【杀】/【武器牌】/【防具牌】的唯一目标的时候且使用者不为你，你代替其成为该目标。",
            "zyi_qo":"胸器",
            "zyi_qo_info":"结束回合，如果你没有护甲，你可以弃置等量张手牌，然后获得等量护甲，若你弃的牌均为同一种类型且数量大于1，则额外获得两点护甲。当拥有”磁“的角色成为其他角色使用【武器牌】/【防具牌】目标的时候，如果你有护甲，你可以失去一点护甲然后对其造成一点伤害。",
            "zui_li_mark":"磁力",
            "zui_li_mark_info":"",
            "time_stop_goddio":"时停",
            "time_stop_goddio_info":"出牌阶段，如果X大于你的体力上限，并且你拥有技能“改写”，你可以移除“改写”中同等于你体力上限笔记录，然后发动一次时停并将你的体力上限调整至1，持续1个回合。（X为”改写“已记录的记录数量）",
            "wu_si":"无效",
            "wu_si_info":"当一名角色使用一张\"改写\"记录的牌名相同时，若你的体力上限大于1，你可以移除相应的记录并损失1点体力上限，然后令此牌无效。",
        },
    },
    intro:"关注微信公众号“无名杀扩展交流”，获取最新版本。本扩列添加了JOJO一系列各种作品的角色,后续还会更新更多角色!!",
    author:"Sunny",
    diskURL:"https://pan.baidu.com/s/1rW9PXPbdY7P8DAQjOB3OKg?pwd=1234",
    forumURL:"",
    version:"1.0",
},files:{"character":["jojo_6.jpg","jojo_13.jpg","jojo_14.jpg","jojo_18.jpg","jojo_30.jpg","jojo_3.jpg","jojo_8.jpg","jojo_10.jpg","jojo_21.jpg","jojo_20.jpg","jojo_23.jpg","jojo_24.jpg","jojo_26.jpg","jojo_22.jpg","jojo_25.jpg","jojo_28.jpg","jojo_17.jpg","jojo_31.jpg","jojo_27.jpg","jojo_2.jpg","dio_boss.jpg","jojo_16.jpg","jojo_29.jpg","jojo_1.jpg","jojo_7.jpg","jojo_9.jpg","jojo_11.jpg","jojo_12.jpg","jojo_15.jpg","jojo_19.jpg","jojo_4.jpg","jojo_5.jpg"],"card":["SP_dio_roller.png","metallica_card.jpg","talocard.png","ar_bise_kn.png","zhuyueo.png","sg_mask.png","dics_cards.png"],"skill":[],"audio":[]}}})