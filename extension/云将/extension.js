game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"云将",editable:false,content:function (config,pack){    
// ---------------------------------------AI加强------------------------------------------//
     lib.skill._fenghuyunlong={
                trigger:{
                    global:"phaseZhunbeiBefore",
                },
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_shanheyonggu=='on'&&player.identity=='zhu'&&game.roundNumber==1&&!player.isUnderControl(true);
                },
                content:function(){
                player.addTempSkill('shanheyonggu_mz');
                },
            };        
     lib.skill._tianxiayitong={
                trigger:{
                    global:"dieEnd",
                },
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_shanheyonggu=='on'&&player.identity=='zhu'&&!player.isUnderControl(true);
                },
                content:function(){
                if(get.mode()=='identity'){
                var numf=game.countPlayer(function(current){
                return current.identity=='fan';
                });
                var numz=game.countPlayer(function(current){
                return current.identity=='zhong';
                });
                }
                if(numf==0&&numz>0){
                if(numz>=2){
                player.addSkill('shanheyonggu_smz');
                }else{
                if(Math.random()>1/3){
                player.addSkill('shanheyonggu_smz');
                }
                    }
                }
            },
        };
     lib.skill._yingshilanggu={
                trigger:{
                    global:["changeHp","dieAfter","useSkillAfter","phaseZhunbeiAfter","phaseBefore","phaseJieshuAfter","useCard","respond"],
                },    
                silent:true,             
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_shanheyonggu=='on'&&player.identity=='nei';
                },
                content:function(){
                "step 0"
                event.trigger('neijian');
                if(get.mode()=='identity'){
                var numz=game.countPlayer(function(current){
                return current.identity=='zhong'||current.identity=='mingzhong';
                });
                var numf=game.countPlayer(function(current){
                return current.identity=='fan';
                });
                if(numf==0){
                event.finish();
                }
                if(numz==0&&numf==0){
                event.finish();
                }
           }
                "step 1"
                if(get.mode()=='identity'){
                var numz=game.countPlayer(function(current){
                return current.identity=='zhong'||current.identity=='mingzhong';
                });
                var numf=game.countPlayer(function(current){
                return current.identity=='fan';
                });
                if(numf>(numz+1)||game.zhu.hp<=2){
                player.addTempSkill('shanheyonggu_tz','neijian');
                }else{
                player.addTempSkill('shanheyonggu_tf','neijian');
                }
           }
     },
            };       
     lib.skill._wanjunpiyi={
                trigger:{
                    global:"gameStart",
                },
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                filter:function(event,player){
                return lib.config.extension_云将_shanheyonggu=='on';
                },
                content:function(){
                if(game.getRarity(player.name)=="common"){
                player.addSkill('chaofeng_common');
                }
                if(game.getRarity(player.name)=="rare"){
                player.addSkill('chaofeng_rare');
                }
                if(game.getRarity(player.name)=="epic"){
                player.addSkill('chaofeng_epic');
                }
                if(game.getRarity(player.name)=="legend"){
                player.addSkill('chaofeng_legend');
                }
           },
     };             
// ---------------------------------------娘化皮肤------------------------------------------//
     if(!lib.qhly_callbackList){
           lib.qhly_callbackList=[];
     }
     lib.qhly_callbackList.push({
     onChangeSkin:function(name,skin){
     if(name=="yunzhangjiao"&&skin=="yunzhangjiao7.jpg"){
     game.countPlayer(function(current){
            if(current.name=='yunzhangjiao'){
                current.sex="female";                                                
            }            
        });       
     }else{
     game.countPlayer(function(current){
            if(current.name=='yunzhangjiao'){
                current.sex="male";                                                
            }            
        });       
     }
     if(name=="yunzuoci"&&skin=="yunzuoci7.jpg"){
     game.countPlayer(function(current){
            if(current.name=='yunzuoci'){
                current.sex="female";                                                
            }            
        });       
     }else{
     game.countPlayer(function(current){
            if(current.name=='yunzuoci'){
                current.sex="male";                                                
            }            
        });       
     }
        }
     });
     lib.skill._nianghua={
                trigger:{
                    global:["gameStart","dieAfter","dying","useSkillAfter","phaseZhunbeiAfter","phaseJieshuAfter","useCardBefore","respondBefore"],
                },                
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                content:function(){
                if(player.name1=='yunzhangjiao'&&game.yjGetQhlySkin('yunzhangjiao')=='yunzhangjiao7.jpg'){                        
                        player.sex="female";
                    } 
                if(player.name1=='yunzuoci'&&game.yjGetQhlySkin('yunzuoci')=='yunzuoci7.jpg'){                        
                        player.sex="female";
                    }     
                },
            };
// ---------------------------------------风云再起------------------------------------------//
    if(lib.config.fengyunzaiqi2){
            var savedFilter=lib.filter.characterDisabled;
            lib.filter.characterDisabled=function(i,libCharacter){
                if(i&&i.indexOf('yun')!=0){
                    return true;
                }
                return savedFilter(i,libCharacter);
            };
 }
// ---------------------------------------百花缭乱------------------------------------------//
    lib.skill._baihualiaoluan={
                trigger:{
                    global:"gameStart",
                },                
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                if(player.name1=='yunyouzi') return false;
                   return lib.config.extension_云将_baihualiaoluan=='on'&&player.isUnderControl(true)&&player==game.me;
                },
                content:function(){         
                'step 0'
                game.countPlayer(function(current){
                if(current!=player){
                var list=get.gainableCharacters(function(info){
			    return info[0]=='female';
		        });
	     	    current.uninit();
                var choice=list.filter(function(name){
                return !game.findPlayer(function(heisinaizidabaitui){
                return heisinaizidabaitui.name==name;
                });
            });
               if(choice.length){
               current.init(choice.randomGet());
               current.update();
               current.addSkill('baihualiaoluan_sf');
               game.triggerEnter(current);
               }
            }
        });         
               'step 1'         
               player.chooseBool('是否召唤一只帅气的狗子？');
               'step 2'
               if(result.bool){
               player.disableSkill('_baihualiaoluan',lib.character[player.name][3]);
               player.init('yunyouzi');
               }
               player.addSkill('baihualiaoluan_sf');
               },
            };
// ---------------------------------------露头------------------------------------------//
        if(lib.config.yjLutou){
        var func=HTMLDivElement.prototype.setBackgroundImage;
        HTMLDivElement.prototype.setBackgroundImage=function(name){
            if((this.classList.contains('avatar')||this.classList.contains('avatar2')||this.classList.contains('qh-image-lutou')||this.classList.contains('primary-avatar') || this.classList.contains('deputy-avatar') || this.classList.contains('button')) && name.indexOf('extension/云将/') == 0 && !this.classList.contains('xwnotingame')&& name.indexOf("extension/云将/skin/")!=0){
                name=name.replace('extension/云将/','extension/云将/lutou/');
            }
            func.apply(this,arguments);
        };
    }    
    // ---------------------------------------标记------------------------------------------//
    
                lib.arenaReady.push(function(){
                if(lib.config.extensions&&lib.config.extensions.contains('十周年UI')&&lib.config['extension_十周年UI_enable']) {
                    if(duicfg&&duicfg.showJieMark){
                        lib.yj_player_init=lib.element.player.init;
                        lib.element.player.init=function(character,character2,skill){
                            var yun={
                                yunguojia:"郭嘉",
                                yuncaocao:"曹操",
                                yunlvbu:"吕布",
                                yunwangji:"王基",            
                                yunzhugeliang:"诸葛亮",           
                                yunlvmeng:"吕蒙",            
                                yunzhangliao:"张辽",           
                                yuncaishi:"蔡氏",          
                                yunsunshangxiang:"孙尚香",           
                                yunpangtong:"庞统",            
                                yunguanyu:"关羽",           
                                yunzhangchunhua:"张春华",          
                                yundongbai:"董白",          
                                yundongzuo:"董卓",          
                                yunzhouyu:"周瑜",          
                                yunliubei:"刘备",         
                                yunzhangfei:"张飞",          
                                yundiaochan:"貂蝉",          
                                yunsunce:"孙策",          
                                yunxushi:"徐氏",          
                                yungongsunzhan:"公孙瓒",        
                                "db_yunjiaxu":"贾诩",          
                                yunzhaoyun:"赵云",          
                                yunhuangyueying:"黄月英",           
                                yunxunyu:"荀彧",          
                                yunzhanghe:"张郃",           
                                yunsimayi:"司马懿",          
                                yunsunquan:"孙权",         
                                yuncaoying:"曹婴",           
                                yunzuoci:"左慈",           
                                yunjiangwei:"姜维",           
                                yunzhangjiao:"张角",          
                                "db_yunmachao":"马超",           
                                yuncaiwenji:"蔡琰",
                                yunsunjian:"孙坚",
                                yunluxun:"陆逊",
                                "db_yundaxiaoqiao":"大乔&小乔",
                                yuncaopi:"曹丕",
                                yunzhaoxiang:"赵襄",
                                yunfazheng:"法正",
                                yunxuhuang:"徐晃",
                                yunhuangzhong:"黄忠",
                                yunliuxie:"刘协",
                                yundianwei:"典韦",
                                yunlusu:"鲁肃",
                                yunlejin:"乐进",
                                yunyujin:"于禁",
                                yunhuaman:"花蔓",
                                yunyuanshao:"袁绍",
                                yuntaishici:"太史慈",
                            };
                            var sp={
                                yunhanyun:"韩云",
                            };
                            var ji={
                                yunjihanyun:"极韩云",
                            };
                            var shen={
                                yunshenhanyun:"神韩云",
                            };
                            var player=lib.yj_player_init.apply(this,arguments);
// ---------------------------------------云标------------------------------------------//				
                            if (character&&yun[character]){
                                if (this.$jieMark==undefined){
                                    this.$jieMark=dui.element.create('jie-mark',this);
                                }else{
                                    this.appendChild(this.$jieMark);
                                };
                                this.$jieMark.style.backgroundImage='url("'+lib.assetURL+"extension/云将/biaoqian/mark_yun.png"+'")';
                                return this;
                            };                          
// ---------------------------------------SP标------------------------------------------//
                            if(character&&sp[character]){
                                if (this.$jieMark==undefined){
                                    this.$jieMark=dui.element.create('jie-mark',this);
                                }else{
                                    this.appendChild(this.$jieMark);
                                };
                                this.$jieMark.style.backgroundImage='url("'+lib.assetURL+"extension/云将/biaoqian/mark_sp.png"+'")';
                                return this;
                            };
// ---------------------------------------极标------------------------------------------//
                            if (character&&ji[character]){
                                if (this.$jieMark==undefined){
                                    this.$jieMark=dui.element.create('jie-mark',this);
                                }else {
                                    this.appendChild(this.$jieMark);
                                };
                                this.$jieMark.style.backgroundImage='url("'+lib.assetURL+"extension/云将/biaoqian/mark_ji.png"+'")';
                                var name=ji[character];
                                name=name.slice(1);
                                this.node.name.innerHTML=get.verticalStr(name,true);
                                return this;
                            };                                                      
 // ---------------------------------------神标------------------------------------------// 
                            if (character&&shen[character]) {
                                if (this.$jieMark==undefined){
                                    this.$jieMark=dui.element.create('jie-mark',this);
                                }else {
                                    this.appendChild(this.$jieMark);
                                };
                                this.$jieMark.style.backgroundImage='url("'+lib.assetURL+"extension/云将/biaoqian/mark_shen.png"+'")';
                                var name=shen[character];
                                name=name.slice(1);
                                this.node.name.innerHTML=get.verticalStr(name,true);
                                return this;
                            };                           
                            return this;
                        };
                    };
                };
            });   
 // ---------------------------------------阵亡配音------------------------------------------//
			lib.skill._yjzwyy={
				trigger:{
				global:'dieAfter',
				},
				direct:true,
				priority:2,
				forced:true,
				unique:true,
				frequent:true,
				/*filter:function(event,player){
				return!event.player.isAlive();
				},*/
				content:function(){
					game.playAudio('..','extension','云将/audio',trigger.player.name);
				},
			}
  // ---------------------------------------武将评级------------------------------------------//
    if(lib.rank){
        //lib.rank.rarity.common.addArray();
        lib.rank.rarity.rare.addArray(['yunyuanshao','yunhuaman','yunyujin','yunlejin','yundianwei','yunliuxie','yunhuangzhong','yunzhangchunhua','yundongzuo','yuncaopi','db_yundaxiaoqiao','yunsunce','yunsunjian','yuncaiwenji','yunhuangyueying','yunzuoci','yuncaishi','yundiaochan','yundongbai','yunwangji','yungongsunzhan','yunzhangfei','yunjiangwei','yunlusu','yunxushi','db_yunmachao','yuntaishici']);
        lib.rank.rarity.epic.addArray(['yunzhaoxiang','yunzhangjiao','yunxuhuang','yunfazheng','yunluxun','yuncaoying','yunsunquan','yunzhanghe','yunxunyu','db_yunjiaxu','yunsunshangxiang','yunzhugeliang','yunlvbu','yunguanyu','yunguojia','yunpangtong','yunzhangliao','yuncaocao','yunzhouyu','yunlvmeng','yunliubei','yunzhaoyun','yunsimayi']);
        lib.rank.rarity.legend.addArray(['yunyouzi','yunhanyun','yunjihanyun','yunshenhanyun']);
    }
},precontent:function(){
 // ---------------------------------------千幻皮肤------------------------------------------//  
    window.yunjiang_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
    game.yjGetQhlySkin=function(name){
            if(game.qhly_getSkin){
                return game.qhly_getSkin(name);
            }
            return null;
        };
    lib.init.js(lib.assetURL+'extension/云将/skin.js',null);//这一行代码加载扩展中的skin.js文件。   
},help:{},config:{

// -------------------------------------拓展介绍------------------------------------------//  
        tuozhanjieshao:{
                "name":"拓展介绍",
                "init":"jieshao",
                "unfrequent": true,
                "item":{
                    "jieshao": "点击查看",
                },
                "textMenu":function(node,link){
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.transform="translateY(-100px)";
                    node.parentNode.style.height="300px";
                    node.parentNode.style.width="300px";
                    switch (link) {
                        case "jieshao":
                            node.innerHTML = "欢迎使用我的拓展<br>本拓展武将设计思路尽量遵循历史记载和话本戏剧演义，代码机制大部分参考了其他大佬的代码缝合而来，立绘来自各类三国游戏，尽量做到缝合又不失乐趣。强度控制在玩的时候虽然很爽，但还是会翻车。AI操控的时候觉得难打而不是没法打，大概就这么个定位，所以感觉那个武将太强或者太弱都可以反馈一下，我会在不影响武将人设的情况下做调整。<br><br><br>特别鸣谢玄武江湖星城大佬提供的代码支持 </b><br><img style=width:200px src="+lib.assetURL+"extension/云将/MG_xwjh.jpg><br><br><br>特别鸣谢时空枢纽爪爪 </b><br><img style=width:200px src="+lib.assetURL+"extension/云将/MG_sksn.jpg><br><br><br>特别鸣谢群友马大钧 小姜同学 小虎 阿枫 戴夫 蝙蝠老师 跟我捉迷藏 仮面ライダー提供的素材支持<br><br><br>特别鸣谢群友Empty city° 菓菓 余丰慧の聚魂棺 Δ红色拓跋Δ等群友提供的设计思路支持与测试<br><br><br>很高兴能在无名杀这个圈子认识大家，希望大家天天开心(๑>؂<๑）";
                            break;
                    }
                },
            },
// -------------------------------------露头开关------------------------------------------//  
        yjLutou:{
        name:"露头模式",
        intro:"切换武将插画与皮肤为露头，需要搭配十周年UI使用，重启生效。",
        init:lib.config.yjLutou===undefined?false:lib.config.yjLutou,
        onclick:function(item){
            game.saveConfig('extension_云将_yjLutou',item);
            game.saveConfig('yjLutou',item);
            if (window.decadeUI)ui.arena.dataset.outcropSkin=item?'on':'off';
            game.saveConfig('extension_十周年UI_outcropSkin',item);
        }
    },         
// ----------------------------------风云再起----------------------------------------//  
     fengyunzaiqi:{
        "name":"风云再起",
        "intro":"保存当前AI禁选配置并强制将所有非本拓展或非本人制作的武将配置为AI禁选，关闭后恢复保存的配置，重启生效。（若与其他扩展的禁用武将功能同时打开会导致无法选将）",
        "init":lib.config.fengyunzaiqi2===undefined?false:lib.config.fengyunzaiqi2,
        onclick:function(item){
            game.saveConfig('fengyunzaiqi2',item);
            game.saveConfig('extension_云将_fengyunzaiqi',item);
        }
    },
// ----------------------------------百花缭乱----------------------------------------//  
     baihualiaoluan:{
        name:'百花缭乱',
        intro:'仅身份局时有效，开局默认明置身份，除玩家以外的武将必为女性角色，并且可以召唤一只帅气的狗子。',
        init:'off',
        item:{
            'on':'开',
            'off':'关',
        },
        onclick:function(item){
            game.saveConfig('extension_云将_baihualiaoluan',item);
        }
    },
    // ----------------------------------一世风华----------------------------------------//  
     yincangpifu:{
        name:'一世风华',
        intro:'打开以后部分武将触发对应技能后会切换隐藏皮肤，需要搭配千幻聆音使用。',
        init:'on',
        item:{
            'on':'开',
            'off':'关',
        },
        onclick:function(item){
            game.saveConfig('extension_云将_yincangpifu',item);
        }
    },
    
    // ----------------------------------山河永固----------------------------------------//  
     shanheyonggu:{
        name:'山河永固',
        intro:'全拓AI增强。（非技能逻辑优化）',
        init:'on',
        item:{
            'on':'开',
            'off':'关',
        },
        onclick:function(item){
            game.saveConfig('extension_云将_shanheyonggu',item);
        }
    },
   // -----------------------------------天下三分---------------------------------------//  
     tianxiasanfen:{
        name:'天下三分',
        intro:'身份模式下每个势力会获得专属势力BUFF。<br>『魏武扬鞭』：每回合首次受到伤害后亮出牌堆顶一张牌，若为黑色则获得之。<br>『昭烈季汉』：每回合一次，使用【杀】被闪避后收回此【杀】。<br>『虎踞江东』：每个自己回合内首次使用【桃】后，从牌堆／弃牌堆随机获得一张【火攻】。<br>『群雄乱武』：准备阶段，若场上存活人数大于四且当前体力值等于一，摸一张牌或恢复一点体力。<br>『三分归晋』：结束阶段，可以弃置一张手牌卜算一，然后摸一张牌。<br>『神话降临』：准备阶段，可以弃置两张牌，然后移除判定区一张牌。',
        init:'off',
        item:{
            'on':'开',
            'off':'关',
        },
        onclick:function(item){
            game.saveConfig('extension_云将_tianxiasanfen',item);
        }
    },
    },package:{
    character:{
        character:{
            yunyouzi:["male","shen",5,["yungkd"],["zhu","forbidai","unseen","des:我只想当一只安静的狗子，享受纯粹的快乐！<br><br><br><br><br><br><br>———作者养的狗。"]],
            yunhanyun:["male","shen",3,["yunshenzi"],["zhu","forbidai","des:吾之所好，杀人诛心！<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            yunjihanyun:["male","shen",3,["yunjilve"],["zhu","forbidai","des:来，让我看一出好戏吧。<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            yunshenhanyun:["male","shen",3,["yunshenquan"],["zhu","forbidai","des:天命难违？哈哈哈哈！<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            yunguojia:["male","wei",3,["yunguimou","yunyice"],["des:如若奉孝在，何使孤至此……痛哉！奉孝……惜哉！奉孝……"]],
            yuncaocao:["male","wei",3,["yunxiongcai","yunxieling","yunzongyu"],["zhu","des:今起义兵，以除暴乱；九合诸侯，一扫群桀！"]],
            yunlvbu:["male","qun",5,["yuntanlang","yunwushuang"],["zhu","des:“那是……是刘虎哒！！！刘虎出阵了！！” “快逃！！快！这种怪物我们怎么可能……” “鬼神！鬼神降临在虎牢关！！！神鬼惊怖！！！”"]],
            yunwangji:["male","wei",3,["yunqizhi"],["des:奇兵百出，敌何能为？"]],
            yunzhugeliang:["male","shu",3,["yunshouji","yunqixing","yunbazhen"],["des:臣必鞠躬尽瘁，死而后已，以报先帝三顾之恩！"]],
            yunlvmeng:["male","wu",4,["yunshelve","yunkeji"],["des:士别三日，吾已非昔日吴下阿蒙。"]],
            yunzhangliao:["male","wei","3/4",["yunduorui","yunzhiti"],["des:娃闻名止啼，孙损十万休。"]],
            yuncaishi:["female","qun",3,["yunqieting","yunxianzhou"],["des:青蛇竹儿口，黄蜂尾后针，两者皆不毒，最毒妇人心。"]],
            yunsunshangxiang:["female","wu",4,["yunjieyin","yunxiaoji"],["des:你 愿不愿意和我在一起？"]],
            yunpangtong:["male","shu",3,["yunxiance","yunfengming"],["des:落凤坡……落凤坡……哈哈哈…涅磐重生……的……该是 这 天 下 ！"]],
            yunguanyu:["male","shu",4,["yunyijue","yunguayin"],["des:“关某虽一介武夫，亦颇知忠义二字，正所谓择木之禽，必栖良木，择主之臣，得遇明主。从今往后，关某之命即是刘兄之命，关某之躯即是刘兄之躯，但凭趋使，绝无二心！”"]],
            yunzhangchunhua:["female","wei",3,["yunjueqing","yunshangshi","yunjuekou"],["des:司马仲达，如果有来世，我不要再遇见你！"]],
            yundongbai:["female","qun",3,["yunzhulian","yunjiaoheng"],["des:我要让爷爷定你们死罪！！！"]],
            yundongzuo:["male","qun",9,["yundongzuo","yunbaonve","yunchongni"],["forbidai","unseen","des:竟敢欺负我的宝贝孙女?薛刀，给我把这个杂碎剁了！"]],
            yunzhouyu:["male","wu",3,["yunguqu","yunyeyan"],["des:遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。"]],
            yunliubei:["male","shu",4,["yunjieyi","yunzhaolie","yunsangu"],["zhu","des:“为图大事，我漂流半生，苦苦寻找志同道合之人，直到今日淘尽狂沙始见真金，天可怜见，将二位英雄赐予刘备，备欲同你二人结拜为生死弟兄，不知二位意下如何？”"]],
            yunzhangfei:["male","shu",4,["yunwanjun","yunyongzhi"],["des:“俺也一样！”"]],
            yundiaochan:["female","qun",3,["yunmeihuo","yunbiyue"],["des:歌月徘徊孤楼前，舞影零游群雄间。如花朱颜非吾愿，香消玉殒惹谁怜？"]],
            yunsunce:["male","wu",4,["yunyingyang","yunjiang","yunxianxi"],["zhu","des:父亲在上，公瑾在旁，一拜天地，二拜高堂。"]],
            yunxushi:["female","wu",3,["yunbugua","yunfuzhu"],["des:我连做梦都在等这一天呢!！"]],
            yungongsunzhan:["male","qun",4,["yunyicong","yunzhujing"],["des:伯珪疏犷，武才趫猛。虞好无终，绍势难并。"]],
            "db_yunjiaxu":["male","qun",3,["yunjiance","yunwansha","yunjimou","fengyunshibian_jx"],["doublegroup:qun:wei","des:吾之所求，不过是安身立命而已。天下人的死活，与我何干？"]],
            yunzhaoyun:["male","shu",3,["yunlongdan","yunlonglie"],["des:捂奶长衫造纸农！"]],
            yunhuangyueying:["female","shu",3,["yunqiqiao","yunlinglong"],["des:孔明大人，待扶汉功成，我们便回隆中……可好……"]],
            yunxunyu:["male","wei",3,["yunquhu","yunwangzuo"],["des:令君留香，君子如彧。"]],
            yunzhanghe:["male","wei",4,["yunqiaobian","yunshanlve"],["des:我曾经翻山越岭，直到膝盖中了一箭……"]],
            yunsimayi:["male","wei",3,["yunrenjie","yunyingshi"],["des:鹰视狼顾，志存高远！"]],
            yunsunquan:["male","wu",3,["yunzhiheng","yunhuju","yunjianye"],["zhu","des:十万对八百，此战优势在我！你八百兵能打赢我？你今天要是能赢我，我当场把这逍遥津给吃了！十万大军骑脸我都不知道要怎么输！"]],
            yuncaoying:["female","wei",3,["yunlingren","yunfujian"],["des:老将军虎威犹在，只可惜命不久矣！<br>将军一副好骨，不如埋于此山？<br>将军这些把戏，可难不倒我哦。<br>我已在此，等候将军多时了！<br>你这点小心思，我还会猜不透？<br>你输了，这些就要归我。<br><br>———曹婴的世界只有将军(๑>؂<๑）！！！"]],
            yunzuoci:["male","qun",3,["yunyugui"],["des:我可以女装，也可以帮你女装，你要不要？"]],
            yunjiangwei:["male","shu",4,["yunchengzhi","yunqilin"],["des:丞相遗志，伯约竭力而为，奈何大汉国运衰微至此！丞相……伯约……力尽矣……"]],
            yunzhangjiao:["male","qun",3,["yunchuandao","yuntaiping","yunhuangtian"],["zhu","des:打雷啦！快回家收衣服！"]],
            "db_yunmachao":["male","qun","3/4",["yunshichou","yunjinshi","fengyunshibian_mc"],["doublegroup:qun:shu","des:今超弃父，以将军为父，将军亦当弃子，以超为子。"]],
            yuncaiwenji:["female","wei",3,["yunmoshi","yunbeige"],["des:我生之初尚无为，我生之后汉祚衰。天不仁兮降乱离，地不仁兮使我逢此时。干戈日寻兮道路危，民卒流亡兮共哀悲。烟尘蔽野兮胡虏盛，志意乖兮节义亏。对殊俗兮非我宜，遭忍辱兮当告谁？笳一会兮琴一拍，心愤怨兮无人知。<br><br>戎羯逼我兮为室家，将我行兮向天涯。云山万重兮归路遐，疾风千里兮扬尘沙。人多暴猛兮如虺蛇，控弦被甲兮为骄奢。两拍张弦兮弦欲绝，志摧心折兮自悲嗟。<br><br>越汉国兮入胡城，亡家失身兮不如无生。毡裘为裳兮骨肉震惊，羯羶为味兮枉遏我情。鼙鼓喧兮从夜达明，胡风浩浩兮暗塞营。伤今感晋兮三拍成，衔悲畜恨兮何时平。<br><br>无日无夜兮不思我乡土，禀气合生兮莫过我最苦。天灾国乱兮人无主，唯我薄命兮没戎虏。殊俗心异兮身难处，嗜欲不同兮谁可与语！寻思涉历兮多艰阻，四拍成兮益凄楚。<br><br>雁南征兮欲寄边声，雁北归兮为得汉音。雁飞高兮邈难寻，空断肠兮思愔愔。攒眉向月兮抚雅琴，五拍泠泠兮意弥深。<br><br>冰霜凛凛兮身苦寒，饥对肉酪兮不能餐。夜间陇水兮声呜咽，朝见长城兮路杳漫。追思往日兮行李难，六拍悲来兮欲罢弹。<br><br>日暮风悲兮边声四起，不知愁心兮说向谁是！原野萧条兮烽戍万里，俗贱老弱兮少壮为美。逐有水草兮安家葺垒，牛羊满野兮聚如蜂蚁。草尽水竭兮羊马皆徙，七拍流恨兮恶居于此。<br><br>为天有眼兮何不见我独漂流？为神有灵兮何事处我天南海北头？我不负天兮天何配我殊匹？我不负神兮神何殛我越荒州？制兹八拍兮拟排忧，何知曲成兮心转愁。<br><br>天无涯兮地无边，我心愁兮亦复然。人生倏忽兮如白驹之过隙，然不得欢乐兮当我之盛年。怨兮欲问天，天苍苍兮上无缘。举头仰望兮空云烟，九拍怀情兮谁与传？<br><br>城头烽火不曾灭，疆场征战何时歇？杀气朝朝冲塞门，胡风夜夜吹边月。故乡隔兮音生绝，哭无声兮气将咽。一生辛苦兮缘别离，十拍悲深兮泪成血。<br><br>我非食生而恶死，不能捐身兮心有以。生仍冀得兮归桑梓，死当埋骨兮长已矣。日居月诸兮在戎垒，胡人宠我兮有二子。鞠之育之兮不羞耻，憋之念之兮生长边鄙。十有一拍兮因兹起，哀响缠绵兮彻心髓。<br><br>东风应律兮暖气多，知是汉家天子兮布阳和。羌胡蹈舞兮共讴歌，两国交欢兮罢兵戈。忽遇汉使兮称近诏，遗千金兮赎妾身。喜得生还兮逢圣君，嗟别稚子兮会无因。十有二拍兮哀乐均，去住两情兮难具陈。<br><br>不谓残生兮却得旋归，抚抱胡儿兮注下沾衣。汉使迎我兮四牡騑騑，胡儿号兮谁得知？与我生死兮逢此时，愁为子兮日无光辉，焉得羽翼兮将汝归。一步一远兮足难移，魂消影绝兮恩爱遗。十有三拍兮弦急调悲，肝肠搅刺兮人莫我知。<br><br>身归国兮儿莫之随，心悬悬兮长如饥。四时万物兮有盛衰，唯我愁苦兮不暂移。山高地阔兮见汝无期，更深夜阑兮梦汝来斯。梦中执手兮一喜一悲，觉后痛吾心兮无休歇时。十有四拍兮涕泪交垂，河水东流兮心是思。<br><br>十五拍兮节调促，气填胸兮谁识曲？处穹庐兮偶殊俗。愿得归来兮天从欲，再还汉国兮欢心足。心有怀兮愁转深，日月无私兮曾不照临。子母分离兮意难怪，同天隔越兮如商参，生死不相知兮何处寻！<br><br>十六拍兮思茫茫，我与儿兮各一方。日东月西兮徒相望，不得相随兮空断肠。对萱草兮忧不忘，弹鸣琴兮情何伤！今别子兮归故乡，旧怨平兮新怨长！泣血仰头兮诉苍苍，胡为生兮独罹此殃！<br><br>十七拍兮心鼻酸，关山阻修兮行路难。去时怀土兮心无绪，来时别儿兮思漫漫。塞上黄蒿兮枝枯叶干，沙场白骨兮刀痕箭瘢。风霜凛凛兮春夏寒，人马饥豗兮筋力单。岂知重得兮入长安，叹息欲绝兮泪阑干。<br> <br>胡笳本自出胡中，缘琴翻出音律同。十八拍兮曲虽终，响有余兮思无穷。是知丝竹微妙兮均造化之功，哀乐各随人心兮有变则通。胡与汉兮异域殊风，天与地隔兮子西母东。苦我怨气兮浩于长空，六合虽广兮受之应不容！"]],
            yunsunjian:["male","wu",4,["yunpolu","yunwulie"],["zhu","des:此去泉台招旧部，旌旗十万斩阎罗！"]],
            yunluxun:["male","wu",3,["yuntaolve","yunqianya"],["des:吴中有连清人者，名曰陆逊，字伯言。逊为人谦雅亦有闭月羞花之容，倾国倾城之色，吴人见之，皆叹惋。逊自比八神之神，八神闻之，皆不服，之其处于其相辨。仲谋先至，逊笑而问曰：“汝有何能哉？”权曰：“吾善换牌也，杀换闪，闪换桃，桃换无懈，制衡之道，敌未能测也！”逊对曰：“敌若顺之汝牌，卸之汝甲，盖使汝善制衡，无牌者，以何换之？”权闻之，无言以对，羞然退也。少焉，七神皆至，逊端坐于室，神情自若，仰天笑曰：“吾通汝之弊处甚矣！”七神皆大惊，心中暗曰：“此儒子为何如此了得？吾观日后其必超神矣！”逊侃侃道来：“彧，善补牌也，三张鸡肋也，四张不足也，五张多乎哉？吾之连营，贯彻于全牌之中，变化于瞬息之间，三十余张亦不足挂齿。辽、术二人，汝皆惧兵也，敌若兵吾，吾即连营，摧枯拉朽之势，敌闻之皆丧胆。备、肃二人，汝固善仁德汝之牌、换敌我之牌，但汝之防御不堪一击，以致为敌突破之处，哀哉！诸葛孔明，观星何用？汝未曾闻，天命难违？吾料蜀汉必亡矣！貂蝉，汝为妇人，其貌却不如吾，吾不做多言！”七神皆哑然，跪拜逊为当世神将。"]],
            "db_yundaxiaoqiao":["female","wu",3,["yunguose","yuntianxiang","fengyunshibian_dxq"],["doublegroup:qun:wu","des:揽二乔于东南兮，乐朝夕之与共。——丞相，我悟了！"]],
            "yuncaopi":["male","wei",3,["yunduodi","yunxingshang","yundengwei"],["zhu","des:甄姬拔菜啊！"]],
            yunzhaoxiang:["female","shu",4,["yunfanghun"],["des:我感受到了……仙贝们的力量！"]],
            yunfazheng:["male","shu",3,["yunyazi"],["des:孝直最是知恩图报！嗯～有仇也必报！"]],
            yunxuhuang:["male","wei",4,["yunchangqu","yunpoqian"],["des:‘贼围堑鹿角十重，将军致战全胜，遂陷贼围，多斩首虏。吾用兵三十馀年，及所闻古之善用兵者，未有长驱径入敌围者也。且樊、襄阳之在围，过于莒、即墨，将军之功，逾孙武、穰苴。徐将军可谓有周亚夫之风矣！’"]],
            yunhuangzhong:["male","shu",4,["yunliegong","yunposhi"],["des:中！"]],
            yunliuxie:["male","qun",4,["yunxuezhao","yuntianming","yunhanzuo"],["zhu","des:来人啊！命曹皇后今晚穿丞相制服等着朕！"]],
            yundianwei:["male","wei",4,["yunhuwei","yunelai"],["des:曹公速走！"]],
            yunlusu:["male","wu",4,["yundingce","yunshimeng"],["des:“子敬乃是实诚人也～”“啊～对对对～”"]],
            yunlejin:["male","wei",4,["yunxiandeng","yunxiaolie"],["des:武力既弘，计略周备，质忠性一，守执节义，每临战攻，常为督率，奋强突固，无坚不陷，自援枹鼓，手不知倦。又遣别征，统御师旅，抚众则和，奉令无犯，当敌制决，靡有遗失。论功纪用，宜各显宠。"]],
            yunyujin:["male","wei",4,["yunzhenjun","yunyizhong"],["des:战无不胜的左将军即将与红脸贼对阵！<br> 文则将军与关羽相持不下！<br>关云长水淹七军，于禁大败！<br>贪生怕死的无义之徒投降了威震华夏的武圣！ "]],
            yunhuaman:["female","shu",4,["yunmansi","yunzhanyuan"],["des:“这是个孩子？”<br>“是孩子。”<br>“几岁？” <br>“十六……”<br>“这他妈十六岁？！！！”<br>“没人信，我都不信，八岁就颇具规模，十岁就比她妈还大，十六岁就已然如此浮夸了！”"]],
            yunyuanshao:["male","qun",4,["yunshiguan","yunxiongjie","yunlisi"],["zhu","des:呦……这不曹阿瞒嘛？几天不见怎么这么扌……我艹……"]],
            yuntaishici:["male","wu",4,["yuntianyi","yunaozhan"],["des:周瑜：“为什么会变成这样呢……第一次，称霸了江东；第一次交到了一生的挚友。这两件愉快的事情交织在了一起。而这两份喜悦，又会给我带来许许多多的喜悦。我本应该获得了这种如梦一般的幸福时光才对。可是，为什么，会变成现在这样呢……明明是我先来的，认识伯符也好，一起战斗也好……”<br><br>太史慈：“伯符，且与我一战！”"]],
        },
        characterSort:{
            "mode_extension_云将":{
                weiwuyangbian:["yuncaocao","yuncaopi","yuncaoying","yunxunyu","yunguojia","yunzhangliao","yunzhanghe","yunwangji","yuncaiwenji","yunsimayi","yunzhangchunhua","yunxuhuang","yundianwei","yunlejin","yunyujin"],
                zhaoliejihan:["yunliubei","yunguanyu","yunzhangfei","yunzhaoyun","yunzhaoxiang","yunzhugeliang","yunpangtong","yunhuangyueying","yunjiangwei","yunfazheng","yunhuangzhong","yunhuaman"],
                hujujiangdong:["yuntaishici","yunsunjian","yunsunce","yunsunquan","yunsunshangxiang","yunzhouyu","yunlvmeng","yunluxun","yunxushi","yunlusu"],
                qunxiongluanwu:["yunyuanshao","yunliuxie","yunlvbu","yundiaochan","yunzhangjiao","yunzuoci","yuncaishi","yundongbai","yungongsunzhan"],
                fengyunshibian:["db_yunjiaxu","db_yunmachao","db_yundaxiaoqiao"],
                qianlongzaiyuan:["yunhanyun","yunjihanyun","yunshenhanyun"],
            },
        },
        characterTitle:{
            yunguojia:"鬼才",
            yuncaocao:"乱世枭雄",
            yunlvbu:"虓虎",
            yunwangji:"奇制百出",
            yunzhugeliang:"卧龙",
            yunlvmeng:"白衣夜行",
            yunzhangliao:"闻名止啼",
            yuncaishi:"蛇蝎夫人",
            yunsunshangxiang:"弓腰姬",
            yunpangtong:"凤雏",
            yunguanyu:"义绝天下",
            yunzhangchunhua:"清冷多姿",
            yundongbai:"长乐未央",
            yundongzuo:"凌虐长安",
            yunzhouyu:"大都督",
            yunliubei:"昭烈帝",
            yunzhangfei:"万军取首",
            yundiaochan:"闭月羞花",
            yunsunce:"小霸王",
            yunxushi:"节义双全",
            yungongsunzhan:"白马将军",
            "db_yunjiaxu":"乱武",
            yunzhaoyun:"一身皆胆",
            yunhuangyueying:"巧手慧心",
            yunxunyu:"王佐之才",
            yunzhanghe:"善阵巧变",
            yunsimayi:"鹰视狼顾",
            yunsunquan:"东吴大帝",
            yuncaoying:"魏缨凤鸣",
            yunzuoci:"幻之仙人",
            yunjiangwei:"麒麟儿",
            yunzhangjiao:"天公将军",
            "db_yunmachao":"神威将军",
            yuncaiwenji:"汉末悲歌",
            yunsunjian:"江东猛虎",
            yunluxun:"雄才儒将",
            "db_yundaxiaoqiao":"并蒂花",
            yuncaopi:"魏文帝",
            yunzhaoxiang:"梅踪芳迹",
            yunfazheng:"睚眦必报",
            yunxuhuang:"长驱直入",
            yunhuangzhong:"百步穿杨",
            yunliuxie:"汉献帝",
            yundianwei:"古之恶来",
            yunlusu:"定策东吴",
            yunlejin:"百战不殆",
            yunyujin:"毅重御严",
            yunhuaman:"南中俏色",
            yunyuanshao:"天下名望",
            yuntaishici:"信义昭彰",
        },
        translate:{
            weiwuyangbian:"魏武扬鞭",
            zhaoliejihan:"昭烈季汉",
            hujujiangdong:"虎踞江东",
            qunxiongluanwu:"群雄乱武",
            fengyunshibian:"风云势变",
            qianlongzaiyuan:"潜龙在渊",
            yunyouzi:"柚子丶",
            yunhanyun:"韩云",
            yunjihanyun:"极韩云",
            yunshenhanyun:"神韩云",
            yunguojia:"郭嘉",
            yuncaocao:"曹操",
            yunlvbu:"吕布",
            yunwangji:"王基",
            yunzhugeliang:"诸葛亮",
            yunlvmeng:"吕蒙",
            yunzhangliao:"张辽",
            yuncaishi:"蔡氏",
            yunsunshangxiang:"孙尚香",
            yunpangtong:"庞统",
            yunguanyu:"关羽",
            yunzhangchunhua:"张春华",
            yundongbai:"董白",
            yundongzuo:"董卓",
            yunzhouyu:"周瑜",
            yunliubei:"刘备",
            yunzhangfei:"张飞",
            yundiaochan:"貂蝉",
            yunsunce:"孙策",
            yunxushi:"徐氏",
            yungongsunzhan:"公孙瓒",
            "db_yunjiaxu":"贾诩",
            yunzhaoyun:"赵云",
            yunhuangyueying:"黄月英",
            yunxunyu:"荀彧",
            yunzhanghe:"张郃",
            yunsimayi:"司马懿",
            yunsunquan:"孙权",
            yuncaoying:"曹婴",
            yunzuoci:"左慈",
            yunjiangwei:"姜维",
            yunzhangjiao:"张角",
            "db_yunmachao":"马超",
            yuncaiwenji:"蔡琰",
            yunsunjian:"孙坚",
            yunluxun:"陆逊",
            "db_yundaxiaoqiao":"大乔&小乔",
            yuncaopi:"曹丕",
            yunzhaoxiang:"赵襄",
            yunfazheng:"法正",
            yunxuhuang:"徐晃",
            yunhuangzhong:"黄忠",
            yunliuxie:"刘协",
            yundianwei:"典韦",
            yunlusu:"鲁肃",
            yunlejin:"乐进",
            yunyujin:"于禁",
            yunhuaman:"花蔓",
            yunyuanshao:"袁绍",
            yuntaishici:"太史慈",
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
// ----------------------------------------主公AI---------------------------------------//
            "shanheyonggu_mz":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                trigger:{
                    player:"phaseZhunbeiAfter",
                },
                filter:function(event,player){
                return game.roundNumber==1&&!player.isUnderControl(true);
                },
                content:function(){
                var list=[];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].identity=='zhong'){
                        list.push(game.players[i]);
                    }
                }
                var target=list.randomGet();
                player.storage.dongcha=target;
                if(!_status.connectMode){
                    if(player==game.me){
                        target.setIdentity('zhong');
                        target.node.identity.classList.remove('guessing');
                        target.fanfixed=true;   
                    }
                }
                else{
                    player.chooseControl('ok').set('dialog',[get.translation(target)+'是忠臣',[[target.name],'character']]);
                }
            },
            ai:{
            effect:{
                player:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(get.attitude(player,target)<=0&&target.identity!='zhong'){
                    return [0,1.5]
                    }
                }
                if(card.name=="shandian"){
                return "zeroplayertarget";
                }
                if(card.name=="guohe"||card.name=="lebu"||card.name=="bingliang"||card.name=="zengbin"||card.name=="caomu"||card.name=="kaihua"||card.name=="zhujinqiyuan"||card.name=="caochuanjiejian"||card.name=="toulianghuanzhu"){
                    if(get.attitude(player,target)<=0&&target.identity!='zhong'){
                    return [0,1.5]
                    }
                }
            }
        },
    },
},
            "shanheyonggu_smz":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                trigger:{
                    player:"phaseZhunbeiAfter",
                    source:"dieAfter",
                },
                filter:function(event,player){
                return !player.isUnderControl(true);
                },
                content:function(){
                var list=[];
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].identity=='nei'){
                        list.push(game.players[i]);
                    }
                }
                var target=list.randomGet();
                player.storage.dongcha=target;
                if(!_status.connectMode){
                    if(player==game.me){
                        target.setIdentity('nei');
                        target.node.identity.classList.remove('guessing');
                        target.fanfixed=true;   
                    }
                }
                else{
                    player.chooseControl('ok').set('dialog',[get.translation(target)+'是内奸',[[target.name],'character']]);
                }
            },
                ai:{
                    effect:{
                       player:function(card,player,target){
                       if(get.tag(card,'damage')){
                       if(target.identity=='nei'){
                       return [0,1.5]
                       }
                       if(target.identity=='mingzhong'&&(target.hp==1||target.isMinHp())){
                       return [0,-999];
                       }
                    }
                       if(card.name=="shandian"){
                       return "zeroplayertarget";
                       }
                    },
                },
            },
        },

// --------------------------------------内奸AI----------------------------------------//
            "shanheyonggu_tz":{
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                trigger:{
                    player:"useCardBegin",
                },
                content:function(){},
                ai:{
                expose:1,
                effect:{
                player:function(card,player,target){
                if(player.identity=='nei'){ 
                if(get.tag(card,'damage')){
                if(target.identity=='zhu'){
                return "zeroplayertarget";
                }
                if(target.identity=='fan'){
                return [0,1.5]
                }
            }
                if(card.name=="nanman"||card.name=="wanjian"){
                if(game.zhu.isMinHp()||game.zhu.hp<=2){
                return [0,-999];
                }else{
                return [0,1.5]
                }
            }
        }
    }
                    },
                },
            },
            "shanheyonggu_tf":{
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                trigger:{
                    player:"useCardBegin",
                },
                content:function(){},
                ai:{
                expose:1,
                effect:{
                player:function(card,player,target){
                if(player.identity=='nei'){ 
                if(get.tag(card,'damage')){
                if(target.identity=='zhu'){
                return "zeroplayertarget";
                }
                if(target.identity=='mingzhong'){
                return [0,1.5]
                }
            }
                if(card.name=="nanman"||card.name=="wanjian"){
                if(game.zhu.isMinHp()||game.zhu.hp<=2){
                return [0,-999];
                }else{
                return [0,1.5]
                }
            }
        }   
    },
                },
            },
        },

// --------------------------------------身份局AI----------------------------------------//
            "_shanheyonggu":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                ai:{
                    effect:{
                    target:function(card,player,target){
                        if(get.mode()=='identity'){
                        var numz=game.countPlayer(function(current){
                        return current.identity=='zhong'||current.identity=='mingzhong';
                        });
                        var numf=game.countPlayer(function(current){
                        return current.identity=='fan';
                        });
                     }
                // ----------------内奸对主AI------------------//
                    if(lib.config.extension_云将_shanheyonggu=='on'&&player.identity=='nei'&&numf>0&&get.mode()=='identity'){ 
                    if(get.tag(card,'damage')){
                       if(target.identity=='zhu'){
                       return "zeroplayertarget";
                }
            }
        }
                // ----------------身份局桃相关AI------------------//
                   if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="tao"&&numf>0&&get.mode()=='identity'){
                   if(player.identity=='fan'&&target.identity=='fan'&&target.countCards('h')>=3&&target.hp<=0){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                        if((numx+numt)>0){
                        return [0,1.5]
                        }
                   }
                if(lib.config.extension_云将_shanheyonggu=='on'&&(player.identity=='zhu'||player.identity=='zhong')&&target.identity=='mingzhong'&&target.hp<=0&&target!=player&&get.mode()=='identity'){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                        if((numx+numt)>0){
                        return [0,1.5]
                        }
                   }
                if(lib.config.extension_云将_shanheyonggu=='on'&&player.identity=='nei'){
                   if(numz==1&&numf>3&&target.identity=='zhong'&&target.hp<=0&&get.mode()=='identity'){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                        if((numx+numt)>0){
                        return [0,1.5]
                        }else{
                        return "zeroplayertarget";
                        }
                   }
                   if(numz>=2&&numf==1&&target.identity=='fan'&&target.hp<=0&&get.mode()=='identity'){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                        if((numx+numt)>0){
                        return [0,1.5]
                        }else{
                        return "zeroplayertarget";
                        }
                   }
                }
            }
            // ----------------主公南蛮万箭AI------------------//
            if(lib.config.extension_云将_shanheyonggu=='on'&&(card.name=="nanman"||card.name=="wanjian")&&get.mode()=='identity'){
                if((player.identity=='zhu'||player.identity=='zhong')&&target.identity=='zhong'&&(target.hp==1||target.isMinHp())&&!target.getEquip('tengjia')){
                return [0,-999];
                }
            }
             // ----------------忠臣南蛮万箭相关AI------------------//
            if(lib.config.extension_云将_shanheyonggu=='on'&&(card.name=="nanman"||card.name=="wanjian")&&get.mode()=='identity'){
                if((player.identity=='zhu'||player.identity=='zhong')&&target.identity=='zhong'&&(target.hp==1||target.isMinHp())&&!target.getEquip('tengjia')){
                return [0,-999];
                }
            }
            // ----------------身份杀与防具相关AI------------------//
            if(lib.config.extension_云将_shanheyonggu=='on'&&(player.hasSkill('shanheyonggu_tz')||player.hasSkill('shanheyonggu_tf')||player.hasSkill('shanheyonggu_smz'))){
                if(card.name=="sha"&&!card.nature&&target.getEquip('tengjia')){
                return "zeroplayertarget";
                }
                if(card.name=="sha"&&get.color(card)=='black'&&target.getEquip('renwang')){
                return "zeroplayertarget";
                }
            }
        },
        
             player:function(card,player,target){
                 if(get.mode()=='identity'){
                var numz=game.countPlayer(function(current){
                return current.identity=='zhong'||current.identity=='mingzhong';
                });
                var numf=game.countPlayer(function(current){
                return current.identity=='fan';
                });
             }
                // ----------------身份局桃相关AI补充------------------//
                if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="tao"&&numf>0&&get.mode()=='identity'){
                    if(player.identity=='zhu'&&player.hp>1){
                       if((target.identity=='zhong'||target.identity=='mingzhong')&&target.hp<=0){
                       var numt=player.countCards('hs',{name:'tao'})
                       var numx=target.hp;
                       if((numx+numt)>0){
                       return [0,1.5]
                       }else{
                       return "zeroplayertarget";
                       }
                   }
                   if(numz==0&&numf>=3&&target.identity=='nei'&&target.hp<=0){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                   if((numx+numt)>0){
                   return [0,1.5]
                   }else{
                   return "zeroplayertarget";
                   }
                }
             }
                   if(player.identity=='zhong'){
                       if(target.identity=='zhu'){
                       return [0,999]
                       }
                   if(numz==1&&numf>3&&target.identity=='nei'&&target.hp<=0){
                   var numt=player.countCards('hs',{name:'tao'})
                   var numx=target.hp;
                   if((numx+numt)>0){
                   return [0,1.5]
                   }else{
                   return "zeroplayertarget";
                   }
                }
             }
                   if(player.identity=='fan'){
                      if(target.identity=='fan'&&target.hp<=0&&target.countCards('h')>=3){
                      var numt=player.countCards('hs',{name:'tao'})
                      var numx=target.hp;
                      if((numx+numt)>0){
                      return [0,1.5]
                      }else{
                      return "zeroplayertarget";
                      }
                   }
                      if(numz>=2&&numf==1&&target.identity=='nei'&&target.hp<=0){
                      var numt=player.countCards('hs',{name:'tao'})
                      var numx=target.hp;
                      if((numx+numt)>0){
                      return [0,1.5]
                      }else{
                      return "zeroplayertarget";
                      }
                   }
                }
                   if(player.identity=='nei'){
                       if(numz==1&&numf>3&&target.identity=='zhong'&&target.hp<=0){
                       var numt=player.countCards('hs',{name:'tao'})
                       var numx=target.hp;
                       if((numx+numt)>0){
                       return [0,1.5]
                       }else{
                       return "zeroplayertarget";
                       }
                   }
                        if(numz>=2&&numf==1&&target.identity=='fan'&&target.hp<=0){
                        var numt=player.countCards('hs',{name:'tao'})
                        var numx=target.hp;
                        if((numx+numt)>0){
                        return [0,1.5]
                        }else{
                        return "zeroplayertarget";
                        }
                     }
                  }
               }
            }
        },
    },
},
            "_shanheyonggu_cs":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                // ----------------全局存牌AI------------------//
                mod:{
                    aiUseful:function(player,card,num){
                         if(lib.config.extension_云将_shanheyonggu=='on'){
                         if(get.name(card)=='tao'){
                         return num+3;
                            }
                        if(get.name(card)=='jiu'){
                        return num+2;
                            }
                        if(get.name(card)=='wuxie'){
                        return num+1;
                        }
                    }
                }
            },
                    ai:{
                    effect:{
                    // ----------------全局卖血AI------------------//
                        target:function(card,player,target){
                            if(lib.config.extension_云将_shanheyonggu=='on'&&target.hasSkillTag("maixie")&&!target.hasSkillTag("maixie_defend")){
                    // ----------------卖血VIP名单（卖血相关）------------------// 
                        if(get.tag(card,'damage')&&get.attitude(target,player)>=0){
                            if(target.hasSkill('new_rejianxiong')||target.hasSkill('jianxiong')||target.hasSkill('huituo')||target.hasSkill('hunzi')||target.hasSkill('olhunzi')||target.hasSkill('rehunzi')){
                            return "zeroplayertarget";
                            }
                        }
                               if(get.tag(card,'damage')&&(!player.hasSkillTag('jueqing')||!player.hasSkill('jiu'))){
                                   if(target.maxHp==target.hp||(target.countCards('hs',{name:'tao'})+target.hp)>=target.maxHp||(target.hp+target.hujia)>=target.maxHp){
                                       if(!target.hasFriend()) return;
                                       return [0,1.5];
                                  }
                                  if(card.name=="sha"&&get.attitude(target,player)>=0&&player.hasSkill('jiu')){
                                   return [0,-999];
                                  }
                               if(card.name=="sha"&&get.attitude(target,player)>=0&&target.countCards('h')==0&&player.getEquip('guding')){
                                   return [0,-999];
                                  }
                                  if(card.name=="sha"&&!card.nature&&target.getEquip('tengjia')){
                                  return "zeroplayertarget";
                                  }
                                  if(card.name=="sha"&&card.nature&&target.getEquip('tengjia')){
                                  return [0,-999];
                                  }
                if(card.name=="sha"&&get.color(card)=='black'&&target.getEquip('renwang')){
                                  return "zeroplayertarget";
                                  }
                               }
                            }
                            // ----------------闪相关AI------------------//
                            if(lib.config.extension_云将_shanheyonggu=='on'&&target.hasSkillTag("useShan")){
                               if(card.name=="sha"&&get.attitude(target,player)>=0&&player.hasSkill('jiu')){
                                   return "zeroplayertarget";
                               }
                               if(card.name=="sha"&&get.attitude(target,player)>=0&&target.countCards('h')==0&&player.getEquip('guding')){
                                   return [0,-999];
                               }
                               if(card.name=="sha"&&card.nature&&target.getEquip('tengjia')){
                                  return [0,-999];
                               }
                               if(card.name=="sha"&&target.getEquip('tengjia')){
                                  return "zeroplayertarget";
                               }
                               if(card.name=="sha"&&get.color(card)=='black'&&target.getEquip('renwang')){
                                  return "zeroplayertarget";
                               }
                            }
                            // ----------------卖血VIP名单-（恢复体力相关）-----------------//
                            if(player.hasSkill('yinghun')||player.hasSkill('gzyinghun')){
                               if(get.tag(card,'damage')){
                                  if(!target.hasFriend()) return;
                                    if(target.hp>=4) return [0,1.5];
                               }
                               if(get.tag(card,'recover')&&player.hp==2) return [0,0];
                            }
                        },
                        player:function(card,player,target){
                        // ----------------全局桃相关AI补充------------------//
                            if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="tao"&&get.mode()!='identity'){
                                if(get.attitude(player,target)>0&&target.hp<=0&&player!=target){
                                var numt=player.countCards('hs',{name:'tao'})
                                var numx=target.hp;
                                    if((numx+numt)>0){
                                    return [0,1.5];
                                    }else{
                                    return "zeroplayertarget";
                                    }
                                }
                            }
                            // ----------------全局酒相关AI------------------//
                            if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="jiu"&&player.hp>0){
                            if(player.countCards('hs',{name:'sha'})==0){
                            return "zeroplayertarget";
                            }
                        }
                            if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="sha"&&player.hasSkill('jiu')){
                            return [0,1.5];
                            }
                            if(lib.config.extension_云将_shanheyonggu=='on'&&player.hasSkill('jiu')&&card.name=="sha"&&(target.getEquip('baiyin')||target.getEquip('rewrite_baiyin'))){
                            if(!player.getEquip('qinggang')){
                            return "zeroplayertarget";
                            }
                        }
                            if(lib.config.extension_云将_shanheyonggu=='on'&&get.attitude(target,player)>=0&&player.hasSkill('jiu')&&card.name=="sha"){
                            return "zeroplayertarget";
                            }
                            // ----------------铁索相关AI------------------//
                            if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="sha"&&card.nature){
                                if(target.isLinked()&&player.isLinked()&&(player.hp==1||(player.hp+player.hujia)<2)){
                                    if(card.nature=='fire'&&(!player.hasSkillTag('nofire')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                    if(card.nature=='thunder'&&(!player.hasSkillTag('nothunder')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                if(target.isLinked()&&player.isLinked()&&(target.hp>player.hp||target.hp>(player.hp+player.hujia))&&(player.hp<=2||(player.hp+player.hujia)<=3)){
                                    if(card.nature=='fire'&&(!player.hasSkillTag('nofire')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                    if(card.nature=='thunder'&&(!player.hasSkillTag('nothunder')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                    if(((player.hp+player.hujia)>3||player.hp>3)&&player.hasSkillTag('maixie')){
                                    return [0,1.5]
                                    }
                                }
                            }
                        }
                        // ----------------全局铁索卖血相关AI补充------------------//
                        if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="huogong"&&card.nature){
                                    if(target.isLinked()&&player.isLinked()&&(player.hp==1||(player.hp+player.hujia)<2)){
                                    if(card.nature=='fire'&&(!player.hasSkillTag('nofire')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                    if(target.isLinked()&&player.isLinked()&&(target.hp>player.hp||target.hp>(player.hp+player.hujia))&&(player.hp<=2||(player.hp+player.hujia)<=3)){
                                    if(card.nature=='fire'&&(!player.hasSkillTag('nofire')||!player.hasSkillTag('nodamage'))){
                                    return "zeroplayertarget";
                                    }
                                    if(player.hp>3&&player.hasSkillTag('maixie')){
                                    return [0,1.5]
                                    }
                                }
                            }
                        }
                        // ----------------全局过河拆桥相关AI------------------//
                        if(lib.config.extension_云将_shanheyonggu=='on'&&card.name=="guohe"&&get.attitude(player,target)>0&&target.maxHp>target.hp&&target.countCards('h')==0&&(target.getEquip('baiyin')||target.getEquip('rewrite_baiyin'))){
                        return "zeroplayertarget";
                        }
                    },
                },
            },
        },
            "chaofeng_common":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                ai:{                    
                    threaten:1,
                },
            },
            "chaofeng_rare":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                ai:{                    
                    threaten:2,
                },
            },
            "chaofeng_epic":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                ai:{                    
                    threaten:3,
                },
            },
            "chaofeng_legend":{
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                ai:{                    
                    threaten:4,
                },
            },
            "baihualiaoluan_sf":{
            trigger:{
                global:'gameStart'
            },
				forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
				filter:function(event,player){
					return get.mode()=='identity';
				},
				content:function(){
					var func=function(){
						game.countPlayer(function(current){
							current.setIdentity();
						});
					};
					if(player==game.me) func();
					else if(player.isOnline()) player.send(func);
					if(!player.storage.zhibi) player.storage.zhibi=[];
					player.storage.zhibi.addArray(game.players);
				},
            },
            "_sanfentianxia_wei":{
                trigger:{
                player:"damageEnd",
            },
                usable:1,
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_tianxiasanfen=='on'&&player.group=='wei';
                },
                content:function(){
                'step 0' 
                var cards=get.cards(); 
                player.showCards(cards,get.translation(player)); 
                if(event.bool=(get.color(cards[0])=='black')){
                player.gain(cards,'draw2');       
                }      
            },
        },
            "_sanfentianxia_shu":{
                trigger:{
                   player:"shaMiss",
                },
                usable:1,
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_tianxiasanfen=='on'&&player.group=='shu'&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
                },
                content:function(){
                player.gain(trigger.cards); 
                player.$gain2(trigger.cards); 
                },
            },
            "_sanfentianxia_wu":{
                trigger:{
                   player:"taoEnd",
                },
                usable:1,
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){     
                return lib.config.extension_云将_tianxiasanfen=='on'&&_status.currentPhase==player&&player.group=='wu';
                },
                content:function(){
                'step 0' 
                var card=get.cardPile(function(card){
                return card.name=='huogong';
                });
                if(card) player.gain(card,'gain2');
                'step 1'
                game.updateRoundNumber();
                },
            },
            "_sanfentianxia_qun":{
                trigger:{
                    player:"phaseZhunbeiBefore",
                },
                usable:1,
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                if(player.hp!=1) return false;
                return lib.config.extension_云将_tianxiasanfen=='on'&&player.group=='qun'&&Math.ceil(game.players.length)>4;
                },
                content:function(){
                player.chooseDrawRecover(true);
                },
            },
            "_sanfentianxia_jin":{            
                trigger:{
                   player:"phaseJieshuBegin",
                },
                usable:1,
                forced:true,
                silent:true, 
                unique:true,
                popup:false,
                fixed:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_tianxiasanfen=='on'&&player.group=='jin'&&player.countCards('h')>0;
                },
                content:function(){
                 'step 0' 
                player.chooseToDiscard('h','是否弃置一张手牌观看并移动牌堆顶一张牌，然后摸一张牌').set('ai',function(card){
                if(get.attitude(player,trigger.target)>0) return true;
                return 6 - ai.get.value(card);
                });
                'step 1' 
                if(result.bool){
                player.chooseToGuanxing(1);
                }else{
                event.finish();
                }
                'step 2' 
                player.draw();
                },
            },
            "_sanfentianxia_shen":{
                trigger:{
                   player:"phaseZhunbeiBegin",
                },
                usable:1,
                silent:true, 
                forced:true,
                unique:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                mode:["identity"],
                filter:function(event,player){
                return lib.config.extension_云将_tianxiasanfen=='on'&&player.group=='shen'&&player.countCards('j')&&player.countCards('he')>1;
                },
                content:function(){
                "step 0"
                player.chooseToDiscard('he',2,'是否弃置两张牌来移除自己判定区的一张牌？').ai=function(card){
                return 6-get.value(card);
                };
                "step 1"
                if(result.bool){
                player.discardPlayerCard(player,'j',true);
                }
            },
        },
            yungkd:{
            fixed:true,
            forced:true,
            nobracket:true,
            charlotte:true,
            superCharlotte:true,
            ruleSkill:true, 
            forceunique:true,
            audio:"ext:云将/audio:1",
            enable:"phaseUse",
            position:"hes",
            usable:1,
            filter:function(event,player){
               return player.countCards('hes')>0&&player.name1=='yunyouzi';
            },
            filterCard:true,
            filterTarget:function(card,player,target){
               return target!=player;
            },
            check:function(card){
               return 7-get.value(card);
            },
            selectCard:1,
            prompt:"一回合限一次，弃置一张牌对一名其他角色造成等同弃置牌点数的神圣伤害并移除其武将牌上全部技能，若其因此死亡，重置此技能使用次数。",
            content:function(){
            'step 0'
            var num=get.number(cards[0]);
            target.disableSkill('yungkd',lib.character[target.name][3]);
            player.addTempSkill('unequip', 'gkd');
            target.damage(num)._triggered=null;
            'step 1'
            event.trigger('gkd')
            if(!target.isAlive()){
            delete player.getStat('skill').yungkd;
            }
        },
    },
            "fengyunshibian_jx":{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"phaseZhunbeiBefore",
                },
                nobracket:true,
                forced:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                skillAnimation:true,
                filter:function(event,player){
                return game.roundNumber==3; 
                },
                content:function(){
                'step 0'
                player.chooseControl('魏','群',true).set('ai',function(){
                if(player.identity=='zhong'){
                return '魏';
                }
                if(player.identity=='fan'){
                return '群';
                }
                if(player.identity=='zhu'){
                return '群';
                }
                if(player.identity=='nei'){
                return ["魏","群"].randomGet();
                }
            });
                'step 1'
                if(result.control=='魏'){
                player.changeGroup('wei');
                player.useSkill('yunyongdi');
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_wei.mp3'; 
                }
                if(result.control=='群'){
                player.changeGroup('qun');
                player.useSkill('yunluanwu');
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_qun.mp3'; 
                } 
                'step 2'
                player.removeSkill('fengyunshibian_jx');
                },
            },
            "fengyunshibian_mc":{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"phaseZhunbeiBefore",
                },
                forced:true,
                nobracket:true,
                skillAnimation:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                filter:function(event,player){
                return game.roundNumber==3; 
                },
                content:function(){
                'step 0'
                player.chooseControl('蜀','群',true).set('ai',function(){
                return ["蜀","群"].randomGet();
                });
                'step 1'
                if(result.control=='蜀'){
                player.changeGroup('shu');
                player.addSkill('fengyunshibian_mc_shu');
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_shu.mp3'; 
                }
                if(result.control=='群'){
                player.changeGroup('qun');
                player.gainMaxHp();
                player.addSkill('fengyunshibian_mc_qun');
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_qun.mp3'; 
                } 
                'step 2'
                player.removeSkill('fengyunshibian_mc');
                },
            },
            "fengyunshibian_mc_qun":{
                trigger:{
                    global:"damageBegin",
                },
                popup:false,
                forced:true,
                nobracket:true,
                unique:true,
                fixed:true,
                charlotte:true,
                superCharlotte:true,
                content:function(){
                trigger.num++;
                },
            },
            "fengyunshibian_mc_shu":{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                nobracket:true,
                content:function(){
                if(player.maxHp<9){
                player.gainMaxHp();
                }
                if(player.hp>1){
                player.loseHp();
                }
                if(_status.currentPhase!=player){
                player.chooseToUse({name:'sha'},'势变•蜀：是否使用一张杀？');
                }
            },
                ai:{
                threaten:1.5,
                },
            },
            "fengyunshibian_dxq":{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"phaseZhunbeiBefore",
                },
                forced:true,
                nobracket:true,
                skillAnimation:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,
                ruleSkill:true, 
                forceunique:true,
                filter:function(event,player){
                return game.roundNumber==3;
                },
                content:function(){
                'step 0'
                player.chooseControl('吴','群',true).set('ai',function(){
                return ["吴","群"].randomGet();
                });
                'step 1'
                if(result.control=='吴'){
                player.changeGroup('wu');
                player.addSkill('fengyunshibian_dxq_wu');
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='db_yundaxiaoqiao'&&game.yjGetQhlySkin('db_yundaxiaoqiao')=='db_yundaxiaoqiao5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/db_yundaxiaoqiao5a.jpg');
                }
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_wu.mp3'; 
                }
                if(result.control=='群'){
                player.changeGroup('qun');
                player.addSkill('yuntianxianga');
                player.addSkill('fengyunshibian_dxq_qun');
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='db_yundaxiaoqiao'&&game.yjGetQhlySkin('db_yundaxiaoqiao')=='db_yundaxiaoqiao5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/db_yundaxiaoqiao5b.jpg');
                }
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/fengyunshibian_qun.mp3'; 
                }
                'step 2'
                player.removeSkill('fengyunshibian_dxq');
                },
            },
            "fengyunshibian_dxq_wu":{
                nobracket:true,
                charlotte:true,
                superCharlotte:true,
            },
            "fengyunshibian_dxq_qun":{
                nobracket:true,
                charlotte:true,
                superCharlotte:true,
            },
            yunshenyi:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"loseAfter",
                },
                forced:true,
                fixed:true,
                unique:true,
                filter:function(event,player){
                return player.countCards('h')<player.maxHp;
                },
                content:function(){
                player.draw(player.maxHp-player.countCards('h'));
                },
            },
    yunshenzi:{
        audio:"ext:云将/audio:3",
        trigger:{
            global:"damageEnd",
        },
        usable:1,
        unique:true,
        fixed:true,
        charlotte:true,
        superCharlotte:true,
        noAdd:true,
	    noRemove:true,
	    noDisabled:true,
	    ruleSkill:true, 
        forceunique:true,
        logTarget:"player",
        content:function(){
        'step 0'
        var controls=[],controlsx=['选项一','选项二'];
        var skills=trigger.player.get('s',false,false);
        for(i=0;i<skills.length;i++){
            var info=lib.skill[skills[i]];
            if(!info) continue;
            if(info.charlotte) continue;
            if(info.superCharlotte) continue;
            if(!lib.translate[skills[i]]) continue;
            if(!lib.translate[skills[i]+'_info']) continue;
            if(player.hasSkill(skills[i])) continue;
            if(!controls.contains(skills[i])){
                controls.push(skills[i]);
            }
        }
        if(!controls.length) controlsx.remove('选项二');
        player.chooseControl(controlsx).set('prompt','神姿<br><br><div class="text">选项一:你摸一张牌。</div><br><div class="text">选项二:获得'+get.translation(trigger.player)+'一个技能。</div></br>').set('ai',function(event,player){
            if(player.hp<2||player.countCards('h')<2) return '选项一';
            return '选项二';
        });
        'step 1'
        if(result.control=='选项一'){
            player.draw();
            event.finish();
        }
        else{
            event.goto(2);
        }
        'step 2'
        var controls=[];
        var skills=trigger.player.get('s',false,false);
        for(i=0;i<skills.length;i++){
            var info=lib.skill[skills[i]];
            if(!info) continue;
            if(info.charlotte) continue;
            if(info.superCharlotte) continue;
            if(!lib.translate[skills[i]]) continue;
            if(!lib.translate[skills[i]+'_info']) continue;
            if(player.hasSkill(skills[i])) continue;
            if(!controls.contains(skills[i])){
                controls.push(skills[i]);
            }
        }
        if(controls.length==1){
            player.popup(controls[0]);
            player.addAdditionalSkill('yunshenzi',[controls[0]],true);
            game.log(player,'获得技能','【'+get.translation(controls[0])+'】');event.finish();
        }
        else{
            player.chooseControl(controls).set('ai',function(){
                return Math.floor(Math.random()*controls.length);
            }).set('prompt','神姿：选择获得'+get.translation(trigger.player)+'的一项技能');
        }
        "step 3"
        if(result.control){
            player.popup(result.control);
            player.addAdditionalSkill('yunshenzi',[result.control],true);
            player.storage.zhuSkill_yunshenzi=[result.control];
            game.log(player,'获得技能','【'+get.translation(result.control)+'】');
            player.update();
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhanyun'){
            player.node.avatar.setBackground('yunhanyun','character'); 
                }
        }
    },
                ai:{
                    threaten:1.2,
                },
            },            
    yunshenquan:{
        audio:"ext:云将/audio:3",
        enable:"phaseUse",
        delay:0,
        unique:true,
        fixed:true,
        forced:true,
        charlotte:true,
        superCharlotte:true,
        noAdd:true,
	    noRemove:true,
        noDisabled:true,
	    ruleSkill:true, 
        forceunique:true,
	    usable:1,
        filter:function(event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('he')){
                return true;
            }
        }
        return false;
    },
        content:function(){
        "step 0"
        player.chooseTarget(true,function(card,player,target){
            return player!=target&&target.num('he');
        },'选择要获得牌的角色').ai=function(target){
            return -ai.get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            event.goto(2);
        }
        else{
            event.finish();    
        }
        "step 2"
        var target=event.target;
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add('选择'+get.translation(target)+'的一张卡牌');
        event.position='he';
        var position=event.position;
        for(var i=0;i<position.length;i++){
            if(position[i]=='h'&&target.num('h')){
                event.dialog.add('手牌');
                event.dialog.add(target.get('h'));
            }
            else if(position[i]=='e'&&target.num('e')){
                event.dialog.add('装备牌');
                event.dialog.add(target.get('e'));
            }                
        }
        var dialog=event.dialog;
        var trigger=event.parent.parent;
        player.chooseButton(dialog,function(){return 1},true);;
        "step 3"
        if(result.bool){
            player.gain(result.links)
        }
        "step 4"
        player.chooseToUse('立即使用一张牌或不使用令【神权】失效');
        "step 5"
        if(result.bool){
        delete player.getStat('skill').yunshenquan;
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:function(player){
                if(_status.dying&&_status.dying.length>0) return ai.get.attitude(player,_status.dying[0]);
                return 1;
            },
                    },
                    threaten:10,
                },
            },
            yunjilve:{
                audio:"ext:云将/audio:4",
                enable:["chooseToUse","chooseToRespond"],
                fixed:true,
                unique:true,
                forced:true,
                charlotte:true,
                superCharlotte:true,
                noAdd:true,
	            noRemove:true,
			    noDisabled:true,
			    ruleSkill:true, 
                forceunique:true,
                hiddenCard:function(player,name){
                return (!player.storage.yunjilve.contains(name)&&player.countCards('hse')>0&&lib.inpile.contains(name));
                },
                init:function(player){
                if(!player.storage.yunjilve) player.storage.yunjilve=[];
                },
                chooseButton:{
                dialog:function(event,player){
                var list=[];
                for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(player.storage.yunjilve.contains(name)) continue;
                if(name=='sha'){
                    list.push(['基本','','sha']);
                    list.push(['基本','','sha','fire']);
                    list.push(['基本','','sha','thunder']);
                    list.push(['基本','','sha','ice']);
                }
                else if(get.type2(name)=='trick') list.push(['锦囊','',name]);
                else if(get.type(name)=='basic') list.push(['基本','',name]);
                }
                if(list.length==0){
                return ui.create.dialog('极略已无牌可用');
                }
                return ui.create.dialog('极略',[list,'vcard']);
                },
                filter:function(button,player){
                return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
                },
                check:function(button){
                if(_status.event.getParent().type!='phase') return 1;
                var player=_status.event.player;
                if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].contains(button.link[2])) return 0;
                return player.getUseValue({
                name:button.link[2],
                nature:button.link[3],
                });
                },
                backup:function(links,player){
                return {
                filterCard:true,
                selectCard:1,
                popname:true,
                check:function(card){
                    return 6-get.value(card);
                },
                position:'hse',
                viewAs:{name:links[0][2],nature:links[0][3]},
                onuse:function(result,player){
                    game.log(player,'发动了【极略】');
                    player.logSkill('yunjilve');
                    player.storage.yunjilve.add(result.card.name);
                },
            }
        },
                    prompt:function(links,player){
                    return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
                    },
                },
                ai:{
                    fireAttack:true,
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player){
                    if(!player.countCards('hse')) return false;
                    },
                    order:10,
                    basic:{
                        useful:[6,4,3],
                        value:[6,4,3],
                    },
                    result:{
                        player:1,
                    },
                },
                group:["yunjilve_sx"],
                subSkill:{
                    sx:{
                        trigger:{
                            global:"phaseJieshuAfter",
                        },
                        silent:true,    
                        fixed:true,
                        forced:true,
                        popup:false,
                        unique:true,
                        charlotte:true,
                        superCharlotte:true,
                        content:function(){
                        player.storage.yunjilve=[];
                        },
                        sub:true,
                    },
                },
            },
        yunyice:{
        audio:"ext:云将/audio:5",
        trigger:{
            player:"damageEnd",
        },
        forced:true,
        filter:function (event){
        return (event.num>0)
        },
        content:function(){
        "step 0"
        event.count=1;
        "step 1"
        var num=player.maxHp-player.hp;
        if(player.hp<player.maxHp){
            player.draw(num);
        }
        event.given=0;
        "step 2"
        player.chooseCardTarget({
            filterCard:true,
            selectCard:[1,(player.maxHp-player.hp)-event.given],
            filterTarget:function(card,player,target){
                return player!=target&&target!=event.temp;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'是否将最多'+get.cnNumber(player.maxHp-player.hp)+'张手牌交给一名其他角色？',
        });        
        "step 3"
        if(result.bool){
            player.say(["主公勿忧，奉孝在此！","虽然我吃喝嫖赌，但我是个好谋士。"].randomGet());
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player,'giveAuto');          
            }    
         "step 4"      
         player.judge();
         "step 5"
         event.color=result.color;
         if(event.color=='black'){
            player.chooseTarget('弃置一名角色区域内的一张牌',function(card,player,target){
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
        else{
            var next=player.recover();
        }
        "step 6"
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            if(event.color=='black'){
                player.discardPlayerCard(target,'hej',true);
            }
                else{
                    player.recover();
                }
            }
        },
                ai:{
        maixie:true,
        "maixie_hp":true,
        effect:{
            target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(target.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
        },
    },
},
            yunguimou:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
                return player!=event.player&&event.player.num('h')&&player.num('h');
                },
        check:function(event,player){
        if(player.hp<=1) return 0;
        return ai.get.attitude(player,event.player)<0;
        },
        prompt:function(event,player){
                var str='';
                str +='是否发动【鬼谋】与'+get.translation(event.player)+'进行拼点？'
                return str;
                },
        content:function(){
        'step 0'
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool){
            event.trigger('guimou')
        }
        else{
            player.damage('nosource');
            event.finish();
        }        
    },
    group:"yunguimoua",
            },
            yunguimoua:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"guimou",
                },
                forced:true,
                content:function(){
                'step 0'
                var list=[];
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var type=get.type(name);
            if(type=='trick'){
                if(lib.filter.cardEnabled({name:name},player)){
                    list.push([get.translation(type),'',name]);
                }
            }
        }
        var dialog=ui.create.dialog('鬼谋',[list,'vcard']);
        var taoyuan=0,nanman=0;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            var eff1=get.effect(players[i],{name:'taoyuan'},player,player);
            var eff2=get.effect(players[i],{name:'nanman'},player,player);
            if(eff1>0){
                taoyuan++;
            }
            else if(eff1<0){
                taoyuan--;
            }
            if(eff2>0){
                nanman++;
            }
            else if(eff2<0){
                nanman--;
            }
        }
        player.chooseButton(dialog).ai=function(button){
            var name=button.link[2];
            if(Math.max(taoyuan,nanman)>1){
                if(taoyuan>nanman) return name=='taoyuan'?1:0;
                return name=='nanman'?1:0;
            }
            if(player.countCards('h')<player.hp&&player.hp>=2){
                return name=='wuzhong'?1:0;
            }            
            if(player.countCards('h')>player.hp&&player.hp>=2){
                return name=='juedou'?1:0;
            }
            return name=='shunshou'?1:0;
        }
        'step 1'
        if(result.bool){
            player.chooseUseTarget(true,result.links[0][2]);
        }
            },
            },
            yunqizhi:{
                audio:"ext:云将/audio:5",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                marktext:"奇制",
                intro:{
                    name:"奇制",
                    content:"你已发动#次奇制",
                },
                mark:true,
                onremove:true,
                derivation:"yunchizhong",
                filter:function(event,player){
        if(!event.targets) return false;
        if(!event.isFirstTarget) return false;
        if(_status.currentPhase!=player) return false;
        var type=get.type(event.card,'trick');
        if(type!='basic'&&type!='trick') return false;
        if(event.noai) return false;
        return game.hasPlayer(function(target){
            return target.countCards('hej')>0;
        });
    },
                prompt:"是否发动【奇制】弃置一张牌",
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt('yunqizhi'),'弃置一名角色的一张牌，然后其摸一张牌',function(card,player,target){
            return target.countCards('he')>0;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(target==player) return 2; 
            if(get.attitude(player,target)<=0){
                return 1
            }
            return 0.5;
        }).set('targets',trigger.targets);
        'step 1'
        if(result.bool){
            player.getHistory('custom').push({yunqizhi:true});
            if(!event.isMine()&&!_status.connectMode) game.delay();
            player.logSkill('yunqizhi',result.targets);
            player.discardPlayerCard(result.targets[0],true,'he');
            player.addMark('yunqizhi',1);
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 2'
        if(!player.storage.yunqizhi_re)
        event.target.draw();
    },
                group:["yunqizhi_mp"],
                subSkill:{
                    mp:{
                        audio:"ext:云将/audio:5",
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        forced:true,
                        check:function (event,player){
        return player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length>=player.countCards('h');
    },
                        prompt:function (event,player){
        var num=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        return '奇制：摸'+get.cnNumber(num)+'张牌';
    },
                        content:function (){
        "step 0"
        var num=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        player.draw(num);
        "step 1"
        var num1=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        if(player.hp<=num1){
            player.say(["吴懿不在此地！","吴懿在哪？"].randomGet());
            player.addTempSkill('yunchizhong',{player:'phaseZhunbeiBegin'});
        }else{
            player.removeMark('yunqizhi',Infinity);
            }
    },
                        sub:true,
                    },
                },
            },
            yunchizhong:{
                mark:true,
                marktext:"持重",
                intro:{
                    name:"持重",
                    content:true,
                },
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                popup:false,
                content:function(){
         player.removeMark('yunqizhi',Infinity);
    },
                mod:{
                    targetEnabled:function(card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                    maxHandcardBase:function(player,num){
            return num+Math.ceil(player.storage.yunqizhi/2);
        },
                },
            },
            yuntanlang:{
                audio:"ext:云将/audio:2",
                forced:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return event.player!=player&&player.countCards('h')<player.maxHp;
    },
                content:function(){
        player.draw();
    },
                group:["yuntanlang_tl"],
                subSkill:{
                    tl:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            global:"gameStart",
                        },
                        forced:true,
                        filter:function(event,player){
        return player.identity=='zhu';
    },
                        content:function(){
                player.loseMaxHp();
            },
                        sub:true,
                    },
                },
            },
            yunwushuang:{
                audio:"ext:云将/audio:2",
                derivation:"yunjiwue",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function(){
                game.countPlayer(function(current){
                if(current!=player&&!current.hasSkill('fengyin')){
                player.line(current,'green');
                current.addTempSkill('fengyin');
                player.addTempSkill('yunjiwue');
                }
            });
        },
    },
            yunjiwu:{
                forced:true,
                popup:false,
                trigger:{
                    source:"damageBegin",
                },
                filter:function(event,player){
                return event.card&&event.card.name=='sha'&&event.notLink();
                },
                content:function(){
                trigger.num++;
                trigger._yunjiwub=true;
                },
                group:["yunjiwua"],
                },
            yunjiwua:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"dying",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return event.player!=player&&event.parent._yunjiwub&&event.parent.source==player;
                },
                check:function(event,player){
                return get.attitude(player,event.player)<0;
                },
                logTarget:"player",
                content:function(){
                'step 0'
                trigger.player.die(trigger.reason);
                'step 1'
                if(!trigger.player.isAlive()){
                trigger.cancel(true);
                }
            },
        },
            yunjiwub:{
            },
            yunjiwuc:{
                forced:true,
                popup:false,
                trigger:{
                    source:"damageBegin",
                },
                filter:function(event,player){
                return event.card&&event.card.name=='juedou'&&event.notLink();
                },
                content:function(){
                trigger.num++;
                trigger._yunjiwub=true;
                },
                group:["yunjiwua"],
                },
            yunjiwud:{
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return player.countCards('h')>0&&event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
                },
                logTarget:"target",
                content:function(){
                'step 0'
                var next=player.chooseToDiscard('h',get.prompt('yunjiwue',trigger.target),'弃置一张手牌使伤害+1');
                next.ai=function(card){
                if(get.attitude(player,trigger.player)<0){
                return 7-get.value(card);
                }
                return 3;
                }
                next.logSkill=['yunjiwue',trigger.player];
                player.say(["别心怀侥幸了，你们不可能赢！","萤烛之火，也敢与日月争辉？"].randomGet());
                'step 1'
                if(result.bool){
                player.addTempSkill('yunjiwu', 'shaAfter'); 
                };
            },
        },
            yunjiwue:{
                audio:"ext:云将/audio:4",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return player.countCards('h')>0&&event.card.name=='juedou'&&!event.getParent().directHit.contains(event.target);
                },
                logTarget:"target",
                content:function(){
                'step 0'
                var next=player.chooseToDiscard('h',get.prompt('yunjiwue',trigger.target),'弃置一张手牌使伤害+1');
                next.ai=function(card){
                if(get.attitude(player,trigger.player)<0){
                return 7-get.value(card);
                }
                return 3;
                }
                next.logSkill=['yunjiwue',trigger.player];
                player.say(["出来单挑啊!","你有没有砍过人？有没有看过死人？"].randomGet());
                'step 1'
                if(result.bool){
                player.addTempSkill('yunjiwuc', 'juedouAfter'); 
                };
            },
                group:["yunjiwud"],
                },
        yunqixing:{
        audio:"ext:云将/audio:2",
        trigger:{
            player:"phaseDrawAfter",
        },
        forced:true,
        content:function(){
        'step 0'
        event.cards=get.cards(7);
        event.gains=[]
        event.discards=[]
        var content=['牌堆顶的七张牌',event.cards];
        game.log(player,'观看了','#y牌堆顶的七张牌');
        player.chooseControl('ok').set('dialog',content);
        "step 1"
        if(get.type2(event.cards[0])!="trick"){
            event.gains.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        else{
            var bool=game.hasPlayer(function(current){
                 return player.canUse(event.cards[0],current);
            });
            if(bool){
                 player.chooseUseTarget(event.cards[0],false);
            }
        else event.discards.push(event.cards[0]);
             event.cards.remove(event.cards[0]);
        }
        "step 2"
        if(event.cards.length) event.goto(1);
        else{
            if(event.gains.length){
                player.gain(event.gains);
                event.num=event.gains.length;
                player.chooseToDiscard(event.num,'he',true);
                }
            if(event.discards.length){
                player.$throw(event.discards);
                game.cardsDiscard(event.discards);
            }
        }
    },
                ai:{
                    order:7,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            yunbazhen:{
                audio:"ext:云将/audio:2",
                filter:function(event,player){
                return event.player!=player&&event.card&&get.type2(event.card)=='trick'&&!player.hasSkill('yunbazhen_qx');
                },
                logTarget:"player",
                check:function(event,player){
                if(event.getParent().excluded.contains(player)) return false;
                else if(event.card.name=='lebu'){
                return true;
                }
                else if(event.card.name=='bingliang'){
                return true;
                }
                else if(event.card.name=='nanman'){
                return true;
                }
                else if(event.card.name=='wanjuan'){
                return true;
                }
                else if(event.card.name=='juedou'){
                return true;
                }
                else if(get.attitude(player,event.player)<=0&&event.card.name=='shunshou'){
                return true;
                }
                else if(get.attitude(player,event.player)<0&&event.card.name=='guohe'){
                
                return true;
                }
                return false;
                },
                trigger:{
                    target:"useCardToTargeted",
                },
                prompt:function(event,player){
                        var str='';
                        str +='是否发动【八阵】令'+get.translation(event.card)+'对你无效？'
                        return str;
                        },
                content:function(){
                trigger.getParent().excluded.add(player);
                player.addTempSkill('yunbazhen_qx');
                },
        ai:{
        effect:{
            target:function(card,player,target,current){
                if(get.type2(card)=='trick'&&get.attitude(player,target)<0&&!target.hasSkill('yunbazhen_qx')&&target!=player){
                    if(_status.event.name=='yunbazhen') return;
                    var bs=player.getCards('h',{type:'trick'});
                    if(bs.length<2) return 0;
                }
            },
        },
    },
                group:["yunbazhen_my","yunbazhen_sx"],
                subSkill:{
                    my:{
                        trigger:{
                            player:"damageBegin4",
                        },
                        forced:true,
                        filter:function(event,player){
                        return true;
                        },
                        content:function(){
                        player.addTempSkill('yunbazhen_bz');
                        },
                        ai:{
                            filterDamage:true,
                            skillTagFilter:function(player,tag,arg){
                            if(arg.player.hasSkillTag('jueqing',false,player)) return false;
                            },
                        },
                        sub:true,
                    },
                    qx:{
                        charlotte:true,
                        superCharlotte:true,
                        sub:true,
                    },
                    sx:{
                        trigger:{
                            global:"phaseUseEnd",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                        return event.player!=player&&player.hasSkill('yunbazhen_qx')&&player.hasSkill('yunbazhen_bz');
                        },
                        content:function(){
                        player.useSkill('yunqixing');
                        },
                        sub:true,
                    },
                    bz:{
                        trigger:{
                            player:"damageBefore",
                        },
                        mark:true,
                        marktext:"八阵",
                        forced:true,
                        charlotte:true,
                        superCharlotte:true,
                        init:function(player){
                        game.log(player,'获得了','【免疫】');
                        },
                        content:function(){
                        trigger.cancel();
                        },
                        ai:{
                            nofire:true,
                            nothunder:true,
                            nodamage:true,
                            effect:{
                                target:function(card,player,target,current){
                if(get.tag(card,'damage')) return [0,0];
            },
                            },
                        },
                        intro:{
                            name:"八阵",
                            content:"防止一切伤害",
                        },
                        sub:true,
                    },
                },
            },
            yunshelve:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseBegin",
                },
                unique:true,
                direct:true,
                filterCard:true,
                prompt:"是否发动【涉略】获得场上一个技能？",
                createDialog:function (player,target,onlylist){
        player.say(["学习？学个屁！","士别三日，当刮目相待"].randomGet());
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !lib.skill[skills[j]].unique&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            if(dialog) dialog.close();
_status.imchoosing=false;
            game.resume();
        };
        for(i=0;i<list.length;i++){
            if(lib.translate[list[i]+'_info']){
                var translation=get.translation(list[i]);
                if(translation[0]=='新'&&translation.length==3){
                    translation=translation.slice(1,3);
                }
                else{
                    translation=translation.slice(0,2);
                }
                var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
                translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
                item.firstChild.addEventListener('click',clickItem);
                item.firstChild.link=list[i];
            }
        }
        dialog.add(ui.create.div('.placeholder'));
        return dialog;
    },
                content:function (){
           'step 0'
           if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunlvmeng'){
           player.node.avatar.setBackground('yunlvmeng','character'); 
               }
           player.chooseTarget(get.prompt2('yunshelve'),function(card,player,target){
               var names=[];
               if(target.name&&!target.isUnseen(0)) names.add(target.name);
               if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
               if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
               var pss=player.getSkills();
               for(var i=0;i<names.length;i++){
                   var info=lib.character[names[i]];
                   if(info){
                       var skills=info[3];
                       for(var j=0;j<skills.length;j++){
                           if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                               !lib.skill[skills[j]].unique&&!lib.skill[skills[j]].juexingji&&!lib.skill[skills[j]].charlotte&&!lib.skill[skills[j]].dutySkill&&!lib.skill[skills[j]].hiddenSkill&&!pss.contains(skills[j])){
                               return true;
                           }
                       }
                   }
                   return false;
               }
           }).set('ai',function(target){
               return Math.random();
           });
           'step 1'
           if(result.bool){
               event.target=result.targets[0];
               player.logSkill('yunshelve',event.target);
           }
           else{
               event.finish();
           }
           'step 2'
           event.skillai=function(list){
               return get.max(list,get.skillRank,'item');
           };
           if(event.isMine()){
               event.dialog=lib.skill.yunshelve.createDialog(player,target);
               event.switchToAuto=function(){
                   event._result=event.skillai(event.list);
                   event.dialog.close();
                _status.imchoosing=false;
                   game.resume();
               };
               _status.imchoosing=true;
               game.pause();
           }
           else if(event.isOnline()){
               event.player.send(function(){
                   var event=_status.event;
                   event.skillai=function(list){
                       return get.max(list,get.skillRank,'item');
                   };
                   event.dialog=lib.skill.yunshelve.createDialog(player,target);
                event.switchToAuto=function(){
                    event._result=event.skillai(event.list);
                    event.dialog.close();
                    _status.imchoosing=false;
                    game.resume();
                };
                _status.imchoosing=true;
                game.pause();
               })
                        event.player.wait();
                        game.pause();
           }
           else{
               event._result=event.skillai(lib.skill.yunshelve.createDialog(player,target,true));
           }
           'step 3'
           event.trigger('shelve')
           player.addTempSkill(result,{ player: 'shelve' });
           player.popup(result);
           game.log(player,'获得了','【'+get.translation(result)+'】');
       },
            },      
            yunkeji:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageBefore",
                },
                priority:-10,
                filter:function(event,player){
        return player.countCards('he',{type:'equip'});
    },
                prompt:"是否发动【克己】抵消此次伤害？",
                direct:true,
                usable:1,
                content:function(){
        "step 0"
        var next=player.chooseToDiscard('he','是否弃置一张装备牌抵消伤害？',function(card,player){
            return get.type(card)=='equip';
        });
        next.logSkill='yunkeji';
        next.ai=function(card){
            if(player.hp==1||trigger.num>1){
                return 10-get.value(card);
            }
            if(player.hp==2){
                return 9-get.value(card);
            }
            if(player.hp==3){
                return 8-get.value(card);
            }
            return 7-get.value(card);
        };
        "step 1"
        if(result.bool){
            player.draw();
            game.delay();
            trigger.cancel();
        }else{
            delete player.getStat('skill').yunkeji;
            }
    },
                ai:{
                    order:8,
                    threaten:3,
                },
                group:"yunkeji_jn",
                subSkill:{
                jn:{
                audio:"ext:云将/audio:4",
                trigger:{
                    player:"useCard",
                },
                usable:1,
                filter:function(event){
        return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
    },
                forced:true,
                content:function(){ 
        'step 0' 
        var card=get.cardPile(function(card){ 
            return get.type(card)=='equip'; 
        }); 
        event.card=card; 
        'step 1' 
        if(event.card){ 
            player.gain(event.card,'gain2'); 
        } 
                },
                sub:true,
        },
                },
            },
            yunduorui:{
                audio:"ext:云将/audio:2",
                trigger:{
                    source:"damageSource",
                },
                derivation:["yunsangdan"],
                filter:function(event,player){
                if(event.player.hasSkill('yunduoruia')) return false;
                if(event._notrigger.contains(event.player)) return false;
                return event.player.isAlive()&&event.card&&player!=event.player;
                },
                check:function(event,player){
                if(get.attitude(player,event.player)>0) return false;
                },
                logTarget:"player",
                prompt:function(event,player){
                var str="是否对"+get.translation(event.player)+"发动【夺锐】？";
                return str;
                },
                content:function(){
                if(!trigger.player.hasSkill('yunsangdan')){
                trigger.player.addSkill('yunsangdan');
                }else{
                trigger.player.addTempSkill('yunfengyin',{player:'phaseAfter'});
                }
                player.say(["随我搏杀！汝等妻子曹公养之！","今日，定让虎儿丧胆！"].randomGet()); 
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            yunzhiti:{
                audio:"ext:云将/audio:3",
                mark:true,
                marktext:"止啼",
                intro:{
                    content:function (storage,player){
            var num=game.countPlayer(function(current){
                return current.isDamaged();
            })
            var str='未发动';
            if(num>=1){
                str='<li>摸牌数加一，使用杀次数加一，手牌上限加一';
            }
            if(num>=2){
                str+='<li>对每名已【丧胆】的角色一回合各一次，其摸牌阶段外获得牌后你可获得其一张手牌';
            }
            if(num>=3){
            str+='<li>已受伤的其他角色手牌上限减半（向上取整）并废除已受伤的【丧胆】角色装备栏';
            }
            return str;
        },
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        return num>=1;
    },
                content:function (){
        trigger.num+=Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
        },
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
        },
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                        var num=game.countPlayer(function(current){
                        return current.isDamaged();
                        });
                        if(num<1){
                        if(get.tag(card,'damage')){
                        if(!target.hasFriend()) return;
                        if(target.hp>=target.maxHp-1) return [0,1.5];
                        }
                        if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                        }
                    },
                },
            },
                global:"yunzhiti_sx",
                group:"yunzhiti_np",
                subSkill:{
                    np:{
                        audio:"ext:云将/audio:3",
                        trigger:{
                            global:"phaseDrawEnd",
                        },
                        check:function(event,player){
                        return ai.get.attitude(player,event.player)<=0;
                        },
                        filter:function (event,player){
                        if(!event.player.isDamaged()) return false;
                        if(event.player==player) return false;
                        if(event.player.countCards('he')<1) return false;
                        var num=game.countPlayer(function(current){
                        return current.isDamaged();
                        });
                        return num>=2;
                        },
                        popup:false,
                        lastDo:true,
                        prompt:function(event,player){
                        var str="是否对"+get.translation(event.player)+"发动【止啼】？";
                        return str;
                        },
                        content:function(){
                        if(!trigger.player.hasSkill('yunsangdan')){
                        trigger.player.chooseToDiscard('he',true);
                        }else{
                        player.gainPlayerCard(trigger.player,'he',true);
                        }
                        player.logSkill('yunzhiti_np',trigger.player);
                        },
                        ai:{
                            expose:0.5,
                        },
                        sub:true,
                    },
                },
            },
            "yunzhiti_sx":{
                mod:{
                    maxHandcardBase:function(player,num){
                    var num1=game.countPlayer(function(current){
                    return current.isDamaged();
                    })
                    if(num1>=3&&game.countPlayer(function(current){
                    return current!=player&&current.hasSkill('yunzhiti');
                    })&&player.isDamaged()){
                    return num-Math.floor(num/2);
                    }
                },
            },
        },
            yunsangdan:{
                trigger:{
                    global:["changeHp","damageEnd","loseHpEnd","gainMaxHpEnd"],
                },
                forced:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                mark:true,
                marktext:"丧胆",
                intro:{
                    name:"丧胆",
                    content:"李典：想让爷跟你配合？爷就算死也不会听你指挥!<br>乐进：没错！劳资不服你！不爽来打一架？<br>张辽：丞相来信，说让你俩只管大胆的干，他想帮你俩养老婆孩子很久了。<br>李典、乐进：辽哥你下命令吧，你说咋干就咋干。",
                },
                filter:function (event,player){
                var num=game.countPlayer(function(current){
                return current.isDamaged();
                });
                return num>=3&&player.isDamaged();
                },
                content:function(){
                player.disableEquip('equip1');
                player.disableEquip('equip2');
                player.disableEquip('equip3');
                player.disableEquip('equip4');
                player.disableEquip('equip5');
                },
                group:["yunsangdana"],
            },
            yunsangdana:{
                trigger:{
                    global:["changeHp","dieAfter","loseMaxHpAfter","recoverAfter"],
                },
                forced:true,
                popup:false,
                charlotte:true,
                superCharlotte:true,
                filter:function(event,player){
                var num=game.countPlayer(function(current){
                return current.isDamaged();
                });
                return num<3||!player.isDamaged();
                },
                content:function(){
                player.enableEquip(1);
                player.enableEquip(2);
                player.enableEquip(3);
                player.enableEquip(4);
                player.enableEquip(5);
                if(player.maxHp==player.hp){
                player.removeSkill('yunsangdan');
                }
            },
        },
            yunjieyin:{
                audio:"ext:云将/audio:2",
                unique:true,
                limited:true,
                trigger:{
                player:"phaseZhunbeiBegin",
                },
                skillAnimation:true,
                animationColor:"wood",
                filter:function(event,player){
                return !player.storage.yunjieyin;
                },
                init:function(player){
                player.storage.yunjieyin=false;
                },
                mark:true,
                intro:{
                content:"limited",
                },
                direct:true,
        derivation:"yunqingyuan",                
        content:function (){
        'step 0'
        player.chooseTarget(get.prompt('yunjieyin'),'选择一名其他角色与其结为【情缘】',function(card,player,target){
            return player!=target;
        }).set("ai",function(target){
        if(get.mode()=='identity'){
            if(player.identity=='nei'){
               if(Math.random()>2/3){
               return false;
               }
            }
        }
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
        var target=result.targets[0];
        player.awakenSkill('yunjieyin');
        player.storage.yunjieyin=true;
        player.logSkill('yunjieyin',result.targets);
        game.log(target,'成为了','【结姻】','的目标');
        player.say(["从现在开始，你就是我的人了！","我们立刻开始这段感情吧！"].randomGet());        
        target.addSkill('yunqingyuan');
        player.addSkill('yunqingyuana');
        }
    },                
                ai:{
                    expose:1,    
                    },                
            },
            yunqingyuan:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"damageAfter",
                },
                mark:true,
                marktext:"情缘",
                intro:{
                    name:"情缘",
                    content:"愿得一心人 白首不相离",
                },
                popup:false,
                forced:true,
                unique:true,
                fixed:true,
                charlotte:true,
                superCharlotte:true,
                content:function (){
        game.countPlayer(function(current){
            if(current!=player&&current.name=='yunsunshangxiang'&&!current.isDamaged()){
                player.logSkill('yunqingyuan');
                player.line(current,'green');
                current.loseHp();
            }
        });
    },
                ai:{
                    threaten:1.5,
                },
            },
            yunqingyuana:{
                unique:true,
                fixed:true,
                charlotte:true,
                superCharlotte:true,
                mark:true,
                marktext:"情缘",
                intro:{
                    name:"情缘",
                    content:"愿得一心人 白首不相离",
                },
                group:["yunqingyuana_a","yunqingyuana_b"],
                ai:{
                    threaten:1.5,
                },
                subSkill:{
                    a:{
                        trigger:{
                            player:"drawEnd",
                        },
                        popup:false,
                        forced:true,
                        content:function(){
                        game.countPlayer(function(current){
                        if(current!=player&&player.name1=='yunsunshangxiang'&&current.hasSkill('yunqingyuan')){
                        player.line(current,'green');
                        current.draw();
                        }
                    });
                },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        popup:false,
                        forced:true,
                        content:function(){
                        game.countPlayer(function(current){
                        if(current!=player&&player.name1=='yunsunshangxiang'&&current.hasSkill('yunqingyuan')){
                        player.line(current,'green');
                        current.recover();
                        }
                    });
                },
                        sub:true,
                    },
                },
            },
            yunxiaoji:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                'step 0' 
                trigger.num--;
                'step 1' 
                var list=get.inpile('equip');
                list=list.randomGets(5);
                for(var i=0;i<list.length;i++){
                list[i]=['装备','',list[i]];
                }
                var dialog=ui.create.dialog('选择一张装备牌加入你的手牌',[list,'vcard'],'hidden');
                player.chooseButton(dialog,true).set('ai',function(button){
                var card={name:button.link[2]};
                var value=get.value(card);
                return value;
                });
                'step 2'
                if(result.bool){
                player.gain(game.createCard(result.buttons[0].link[2]),'draw');
                }
            },
                group:["yunxiaoji_a","yunxiaoji_b","yunxiaoji_c","yunxiaoji_d","yunxiaoji_e"],
                ai:{
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(player==target&&get.type(card)=='equip') return [1,3];
            },
                    },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip1';
    },
        content:function(){
        player.draw(2);
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'){
        player.node.avatar.setBackground('yunsunshangxiang','character'); 
                    }
    },
                        sub:true,
                    },
                    b:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip2';
    },
                content:function(){
                player.recover();
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&!game.yjGetQhlySkin('yunsunshangxiang')){
                       player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxianga.jpg');
                    }
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang5a.jpg');
                    }      
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang9.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang9a.jpg');
                    }      
    },
                        sub:true,
                    },
                    c:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip3';
    },
             content:function(){
        var card=get.cardPile(function(card){ 
             return get.type2(card)=='trick'; 
             }); 
             event.card=card; 
             if(card) player.gain(card,'gain2');
                 if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&!game.yjGetQhlySkin('yunsunshangxiang')){
                       player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiangb.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang5b.jpg');
                    }     
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang9.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang9b.jpg');
                    }       
    },
                        sub:true,
                    },
                    d:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip4';
    },
             content:function(){
        var card=get.cardPile(function(card){ 
             return get.type2(card)=='basic'; 
             }); 
             event.card=card; 
             if(card) player.gain(card,'gain2');
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&!game.yjGetQhlySkin('yunsunshangxiang')){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiangc.jpg');
                    }
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang5c.jpg');
                    }   
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang9.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang9c.jpg');
                    }         
    },
                        sub:true,
                    },
                    e:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip5';
    },
             content:function(){
        var card=get.cardPile(function(card){ 
             return get.type2(card)=='equip'; 
             }); 
             event.card=card; 
             if(card) player.gain(card,'gain2');
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&!game.yjGetQhlySkin('yunsunshangxiang')){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiangd.jpg');
                    }
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang5d.jpg');
                    }      
                    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunshangxiang'&&game.yjGetQhlySkin('yunsunshangxiang')=='yunsunshangxiang9.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang9d.jpg');
                    }      
    },
                        sub:true,
                    },
                },
            },
            yunshangce:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                mark:true,
                marktext:"上策",
                intro:{
                    name:"上策",
                    content:"你使用的第一张【杀】无视距离，不可闪避",
                },
                content:function(){
        trigger.directHit=true;
        player.removeSkill('yunshangce');
    },
                mod:{
                    targetInRange:function(card){
            if(card.name=='sha') return true;
        },
                },
            },
            yunzhongce:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        return target.countCards('hej');
    },
                mark:true,
                marktext:"中策",
                intro:{
                    name:"中策",
                    content:"出牌阶段限一次：可以弃置一名角色区域内一张牌",
                },
                prompt:"选择【中策】弃置牌的目标",
                content:function(){
        player.discardPlayerCard(target,'hej',true);
        player.removeSkill('yunzhongce');
    },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.filter(function(esx){
                    return get.value(esx,target)>0;
                }).length==0);
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            yunxiace:{
                audio:"ext:云将/audio:2",
                mark:true,
                marktext:"下策",
                intro:{
                    name:"下策",
                    content:"回合结束阶段将手牌摸至五张",
                },
                forced:true,
                trigger:{
                    player:"phaseJieshuBegin",
                },
                content:function(){
        player.draw(5-player.countCards('h'));
    },
            },
            yunxiance:{
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                audio:"ext:云将/audio:2",
                filter:function(event,player){
                if(player!=_status.currentPhase){
                return player.countCards('he')>0;
                }        
                if(_status.currentPhase==player){
                return player.hp>0;
                }
    },
                check:function(event,player){
                if(player.name!='yunpangtong'&&player.hp==1&&_status.currentPhase==player) return false;
                return get.attitude(player,event.player)>0;
    },
                prompt:function(event,player){
                var str='';
                str +='是否发动对'+get.translation(event.player)+'发动【献策】？'
                return str;
                },
        content:function(){
        "step 0"
        if(trigger.player==player){
            player.loseHp();
            player.addTempSkill('yunshangce','phaseEnd');
            player.addTempSkill('yunzhongce','phaseEnd');
            player.addTempSkill('yunxiace','phaseEnd');
            event.finish();
        }else{            
            player.chooseToDiscard('he','请弃置一张牌发动【献策】',true).set('ai',function(card){
            if(get.attitude(player,trigger.target)>0) return true;
            return 6 - ai.get.value(card);
        });
            }
        "step 1"
        if(result.bool&&trigger.player!=player){
        trigger.player.chooseControl('上策','中策','下策',true).set('ai',function(){
        if(trigger.player.getCards('j','lebu')>0||trigger.player.getCards('j','bingliang')>0){
        return "下策";
        }
        return ["上策","中策","下策"].randomGet();
});
            }
        "step 2"
        if(result.control=='上策'){
            trigger.player.addTempSkill('yunshangce','phaseEnd');
        }
        if(result.control=='中策'){
            trigger.player.addTempSkill('yunzhongce','phaseEnd');
        }
        if(result.control=='下策'){
            trigger.player.addTempSkill('yunxiace','phaseEnd');
        }
    },
                ai:{
                    expose:0.5,
                    threaten:0.5,
                },
                "audioname2":{
                    "old_yuanshu":"weidi",
                },
            },
            yunfengming:{
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                derivation:"yunniepan",
                content:function(){
        'step 0'
        trigger.cancel();
        player.hp=1;
        player.maxHp=1;
        player.update();
        player.addSkill('yunniepan');
        player.removeSkill('yunxiance');
        player.awakenSkill('yunfengming');
        player.addTempSkill('yunfengminga',{player:'phaseZhunbeiEnd'});
    'step 1'
        player.say(["落凤坡？！","大业未成，我岂能就此而亡!"].randomGet());
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunpangtong'&&!game.yjGetQhlySkin('yunpangtong')){
        player.node.avatar.setBackgroundImage('extension/云将/yunpangtonga.jpg');
            }
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunpangtong'&&game.yjGetQhlySkin('yunpangtong')=='yunpangtong5.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yunpangtong5a.jpg');
            }
    },
            },
            yunfengminga:{
                        trigger:{
                        player:"damageBefore",
                        },
                        mark:true,
                        marktext:"凤鸣",
                        forced:true,
                        charlotte:true,
                        superCharlotte:true,
                        init:function(player){
        game.log(player,'进入了','【涅磐】状态');
    },
                        content:function(){
        trigger.cancel();
    },
                        ai:{
                            nofire:true,
                            nothunder:true,
                            nodamage:true,
                            effect:{
                                target:function(card,player,target,current){
                if(get.tag(card,'damage')) return [0,0];
            },
                            },
                        },
                        intro:{
                            name:"凤鸣",
                            content:"防止一切伤害，不可被其他角色选中",
                        },
            mod:{
        targetEnabled:function(card,player,target){
            if(player!=target) return false;
        },
    },
            },
            yunzongyu:{
                audio:"ext:云将/audio:1",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunweiwua",
                mark:false,
                init:function(player){
    player.storage.yunzongyu=false;
},
                skillAnimation:true,
                filter:function(event,player){
        return player.hasZhuSkill('yunzongyu');
        return player.storage.yunzongyu==false;
},
                enable:"phaseUse",
                prompt:"选择一名角色令其增加一点体力上限并修改势力为『魏』",
                content:function(){
    "step 0"
    player.storage.yunzongyu=true;
    player.awakenSkill("yunzongyu");
    "step 1"
    game.log(target,'成为了','【总御】','的目标');
    player.say(["扫清六合，席卷八荒！","若是无孤，天下不知几人称王，几人称帝！"].randomGet());
    target.draw(2);
    target.gainMaxHp();
    target.changeGroup('wei');
    player.addSkill('yunweiwua');
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaocao'&&!game.yjGetQhlySkin('yuncaocao')){
        player.node.avatar.setBackgroundImage('extension/云将/yuncaocaoa.jpg');
            }
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaocao'&&game.yjGetQhlySkin('yuncaocao')=='yuncaocao4.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yuncaocao4a.jpg');
                    }      
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaocao'&&game.yjGetQhlySkin('yuncaocao')=='yuncaocao5.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yuncaocao5a.jpg');
                    }      
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
                intro:{
                    content:"limited",
                },
            },
            yunweiwua:{
                audio:"ext:云将/audio:2",
                unique:true,
                check:function (event,player){
        return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
    },
                group:["yunweiwub"],
            },
            yunweiwub:{
                trigger:{
                    player:"phaseEnd",
                },
                check:function(event,player){
                return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
                },
                filter:function(event, player){
                for(var i=0;i<game.players.length;i++)
                if(game.players[i]!=player&&game.players[i].group=='wei'&&game.players[i].hp<player.hp) return true;
                return false;
                },
                direct:true,
                prompt:"是否选择一名〖魏〗势力角色令其恢复一点体力？",
                content:function(){
                'step 0'
                player.chooseTarget('是否发动【魏武】？', [1], function(card,player,target){
                return player!=target&&target.hp<target.maxHp&&target.hp<player.hp&&target.group=='wei';
                })
                'step 1'
                if(result.bool){
                player.logSkill('yunweiwua',result.targets);
                event.targets=result.targets;
                event.targets.sort(lib.sort.seat);
                }else{
                event.finish();
                }
                'step 2'
                if(event.targets.length){
                var target=event.targets.shift();
                target.recover();
                }
            },
        },
        yunxieling:{
        audio:"ext:云将/audio:2",
        skillAnimation:true,
        unique:true,
        limited:true,
        enable:"phaseUse",
        mark:true,
        intro:{
            content:"limited",
        },
        init:function(player,skill){
        player.storage[skill]=false;
        },
        filter:function(event,player){
        return Math.ceil(game.players.length>2);
        },
        filterTarget:function(card,player,target){ 
        return target.hp>player.hp&&player.canCompare(target); 
        },
        prompt:"请选择【挟令】的目标",
        content:function(){
        "step 0" 
        player.awakenSkill('yunxieling'); 
        player.storage.yunxieling=true; 
        event.targets=game.filterPlayer(); 
        event.targets.remove(player); 
        event.targets.remove(target); 
        "step 1" 
        if(event.targets.length){ 
            event.current=event.targets.shift(); 
            if(target.isAlive()){ 
                event.current.chooseToUse({name:'sha'},target,-1).set('prompt2','请选择：1. 对'+get.translation(target)+'使用一张杀；2.视为被 '+get.translation(player)+'使用一张杀');
            } 
        } 
        else{ 
            event.finish(); 
        } 
        "step 2" 
        if(result.bool==false){ 
        player.useCard({name:'sha'},event.current,false); 
        } 
        event.goto(1); 
    },
                ai:{
        order:5,
        result:{
            target:function(player,target){
                var players=game.filterPlayer();
                if(player.hp>1){
                    if(game.phaseNumber<game.players.length) return 0;
                    if(player.hasUnknown()) return 0;
                }
                var effect=0;
                for(var i=0;i<players.length;i++){
                    if(players[i]!=target&&players[i]!=player&&players[i].countCards('he'))
                    effect+=get.effect(target,{name:'sha'},players[i],target);
                }
                return effect;
            },
        },
    },
            },
    yunxiongcai:{
         audio:"ext:云将/audio:1",
         trigger:{
             global:"gameDrawAfter",
         },                
        unique:true,
        forced:true,                
        prompt:"请选择获得一个技能",
        content:function(){
        "step 0"
        player.chooseControl('雄略','归心').set('ai',function(){
return ["雄略","归心"].randomGet();
});
        "step 1"
        if(result.control=='雄略'){
            player.addSkill('yunxionglve');
        }
        if(result.control=='归心'){
            player.addSkill('yunguixin');
        }
     },
                ai:{
                    order:10,
                    result:{
                        target:10,
                    },
                },
            },
            yunguixin:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                popup:false,
                unique:true,
                mark:true,
                charlotte:true,
                superCharlotte:true,
                marktext:"归心",
                intro:{
                    name:"奸雄·归心",
                    content:true,
                },
                check:function(event,player){
                return get.attitude(player,event.target)<=0;
                },
                filter:function(event,player){
                return event.target.countCards('he')>0&&event.target!=player&&player.countCards('h')>0&&event.card.name=='sha';
                },
                content:function(){
                "step 0"
                player.chooseToDiscard('h','弃置一张手牌发动【归心】',true).set('ai',function(card){
            if(get.attitude(player,trigger.target)<=0){
            return true;
            }else{
            return false;
            }
            return 6-ai.get.value(card);
        });
        "step 1"
        if(result.bool){
            player.logSkill('yunguixin',event.targets);
            if(player.countCards('h')<player.maxHp&&player.hasSkill('yunxiongcai')){
            player.draw();
        }
            player.addSkill('yunxionglve');
            player.restoreSkill('yunxionglve');
            player.removeSkill('yunguixin');
            player.gainPlayerCard(trigger.target,'he',true);
            };
        },
                group:["yunguixin_gx"],
                subSkill:{
                    gx:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        popup:false,
                        unique:true,
                        charlotte:true,
                        superCharlotte:true,
                        filter:function(event,player){
                        return event.player.countCards('he')>0&&player.countCards('h')>0&&event.card.name=='sha';
                        },
                        check:function(event,player){ 
                        return get.attitude(player,event.player)<=0; 
                        },
                        content:function(){
                        "step 0"
                        player.chooseToDiscard('h','弃置一张手牌发动【归心】',true).set('ai',function(card){
                        if(get.attitude(event.player,player)<=0){
                        return true;
                        }else{
                        return false;
                        }
                        return 7 - ai.get.value(card);
                        });
                        "step 1"
                        if(result.bool){
                        player.logSkill('yunguixin_gx',event.targets);
                        if(player.countCards('h')<player.maxHp&&player.hasSkill('yunxiongcai')){
                        player.draw();
                        }
                        player.addSkill('yunxionglve');
                        player.restoreSkill('yunxionglve');
                        player.removeSkill('yunguixin');
                        player.gainPlayerCard(trigger.player,'he',true);
                        };
                    },
                        sub:true,
                    },
                },
            },
            yunxionglve:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                filter:function(event,player){
                return player.countCards('h')>0;
                },
                check:function(card){
                return 7-get.value(card);
                },
                derivation:"yunguixin",
                filterCard:true,
                selectCard:1,
                position:"h",
                mark:true,
                unique:true,
                marktext:"雄略",
                intro:{
                    name:"奸雄·雄略",
                    content:true,
                },
        prompt:"是否弃置一张牌发动【雄略】？",
        content:function(){
        'step 0'
        if(player.countCards('h')<player.maxHp&&player.hasSkill('yunxiongcai')){
            player.draw();
            };
        var list=get.inpile('trick');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张锦囊牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
        'step 2'
        player.addSkill('yunguixin');
        player.awakenSkill('yunxionglve');
    },
                ai:{
                    order:10,
                    threaten:3,
                    result:{
                        player:7,
                    },
                },
            },
            yunguayin:{
                skillAnimation:true,
                unique:true,
                juexingji:true,
                audio:"ext:云将/audio:2",
                derivation:["yunyijueb","yunwusheng"],
                trigger:{
                    global:"dieEnd",
                },
                forced:true,
                filter:function(event,player){
        return player.getAllHistory('sourceDamage',function(target){
            return target.player==event.player;
        }).length>0;
    },
                content:function(){
        'step 0'
        player.awakenSkill('yunguayin');       
        player.removeSkill('yunyijue');
        'step 1'
        player.addSkill('yunyijueb');
        player.addSkill('yunyangwei');
        player.addSkill('yunwusheng');
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunguanyu'&&game.yjGetQhlySkin('yunguanyu')=='yunguanyu4.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yunguanyu4a.jpg');
            }
    },
                ai:{
                    order:6,
                },
            },
            yunyijue:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player,target){        
        if(!get.tag(event.card,'damage')) return false;
        return event.targets.length==1&&!event.target.hasSkill("yunyijuea")&&event.target!=player;
    },
                prompt:function(event,player,target){
        var str='';
        str +='是否对'+get.translation(event.target)+'发动【义绝】？'
        return str;
    },
                check:function (event,player){
                    if(get.attitude(player,event.target)<=0&&event.target.hujia<1&&event.target.hp!=1) return true;
                    if(get.attitude(player,event.target)>0&&event.target.hp==1&&(event.target.hujia>0||player.countCards('hs',{name:'tao'})>=1)) return true;
                    return false;      
    },
                logTarget:"target",
                content:function(){
        "step 0"
        player.draw();
        "step 1"
        trigger.target.hp=1;
        trigger.target.update();
        "step 2"        
        trigger.target.addTempSkill('yunyijuea');
        
    },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
                ai:{
                    jueqing:true,
                    effect:{
                        player:function(card,player,target){
                if(card.name=='sha') return [0,1.5];
            },
                    },
                },
            },
            yunyijuea:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                charlotte:true,
                superCharlotte:true,
                content:function(){
        player.recover(player.maxHp-player.hp);
    },
            },
            yunyijueb:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player,target){
        return !event.target.hasSkill("yunyijuea")&&event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                logTarget:"target",
                content:function(){
        "step 0"
        trigger.target.hp=1;
        trigger.target.update();
        "step 1"        
        trigger.target.addTempSkill('yunyijuea');
        
    },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
                ai:{
                    jueqing:true,
                    effect:{
                        player:function(card,player,target){
                if(card.name=='sha'&&get.color(card)=='red') return [1,1];
            },
                    },
                },
            },            
            yunwusheng:{
                audio:"ext:云将/audio:2",
                mark:true,
                marktext:"傲",
                unique:true,
                init:function (player){
        player.storage.yunwusheng=1;
        player.markSkill('yunwusheng');
        player.syncStorage('yunwusheng');
    },
                intro:{
                    content:"手牌上限加#<br>攻击距离加#<br>其他角色计算与你的距离加#<br>摸牌阶段额外摸#张牌",
                },
                trigger:{
                    source:"dieAfter",
                },
                filter:function (event, player) {
        if(player.storage.yunwusheng>=player.maxHp) return false;
        return true;
    },
                forced:true,
                content:function (){
        player.storage.yunwusheng+=1;
        player.loseMaxHp();
        player.markSkill('yunwusheng');
        player.syncStorage('yunwusheng');
    },
                mod:{
                    attackFrom:function(from,to,num){
            return num-from.storage.yunwusheng;
        },
                    maxHandcardBase:function(player,num){
            return num+player.storage.yunwusheng;
        },
                    globalTo:function(from,to,distance){
            if(from!=to) 
                return distance==to.storage.yunwusheng;
        },
                   cardname:function(card,player,name){ 
            if(get.tag({name:name},'damage')) return 'sha'; 
        },                    
                },
                group:["yunwusheng_a","yunwusheng_b"],
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function(){
        var mps=player.storage.yunwusheng;
        trigger.num+=mps;
    },
                        ai:{
                            threaten:1.3,
                        },
                        sub:true,
                    },
                    b:{
                    audio:"ext:云将/audio:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function(event){
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
    },
                content:function(){
        player.say(["观尔等如插标卖首尔！","酒温否？"].randomGet());
        trigger.num++;
    },                
                ai:{
                    effect:{
                        player:function(card,player,target){ 
                if(card.name=='sha'&&get.color(card)=='red') return [1,1]; 
            },
                    },
                },
                sub:true,
                    }
                },
            },
            yunqieting:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                forced:true,
                direct:true,
                filter:function (event, player) {
        return event.player!=player&&player.inRange(event.player)&&event.player.countCards('he')>0;
    },
                prompt:function(event,player){
        var str="选择获得"+get.translation(event.player)+"一张牌";
        return str;
    },
                content:function(){
        player.logSkill('yunqieting',trigger.player);
        player.gainPlayerCard(trigger.player,'hej',true);
    },
                sub:true,
            },
            yunxianzhou:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                filter:function (event, player) {
        return player.countCards('h') > 0;
    },
                filterTarget:function(card,player,target){
        return player!=target;
    },
                content:function () {
        "step 0"
        player.chooseTarget('将所有手牌交给一名角色',true, function(card,player,target){
            return target!=player;
        }).ai = function (target) {
            return get.attitude(player, target);
        }
        player.say(["刘氏无德，当献曹公。","还望曹公庇护！"].randomGet());
        "step 1"
        if (result.bool) {
            player.$giveAuto(player.getCards('h').length, result.targets[0]);
            var cards=player.getCards('h');
            player.lose(cards, ui.special);
            result.targets[0].gain(cards);       
       }
    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaishi'&&!game.yjGetQhlySkin('yuncaishi')){
            player.node.avatar.setBackgroundImage('extension/云将/yuncaishia.jpg');
            }            
    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaishi'&&game.yjGetQhlySkin('yuncaishi')=='yuncaishi4.jpg'){
            player.node.avatar.setBackgroundImage('extension/云将/yuncaishi4a.jpg');
                    }      
    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaishi'&&game.yjGetQhlySkin('yuncaishi')=='yuncaishi8.jpg'){
            player.node.avatar.setBackgroundImage('extension/云将/yuncaishi8a.jpg');
                    }                         
    },
                group:["yunxianzhou_hf"],
                ai:{
                    order:6,
                    threaten:3,
                },
                subSkill:{
                    hf:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function () {
                        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaishi'){
        player.node.avatar.setBackground('yuncaishi','character'); 
        }
    },
                        sub:true,
                    },
                },
            },
            yunshangshi:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:["loseAfter","damageEnd"],
                    source:"damageEnd",
                },
                forced:true,
                filter:function(event,player){
        return player.countCards('h')<player.storage.yunjueqing;
    },
                content:function(){
        var num=player.storage.yunjueqing;
        player.draw(num-player.countCards('h'));
    },
                group:["yunshangshi_a"],
                ai:{
                    noh:true,
                    nodiscard:true,
                    skillTagFilter:function(player,tag){
            if(tag=='noh'&&player.storage.yunjueqing<player.countCards('h')){
                return false;
            }
        },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:3",
                        trigger:{
                        source:"dieAfter",
    },
                        forced:true,
                        content:function (){
                var num=player.storage.yunjueqing;
                player.removeMark('yunjueqing',Math.ceil(num/2));
                player.markSkill('yunjueqing');
                player.syncStorage('yunjueqing');
    },
                        sub:true,
                    },
                },
            },
            yunjueqing:{
                audio:"ext:云将/audio:2",
                mark:true,
                marktext:"恨",
                init:function (player){
        player.storage.yunjueqing=0;
        player.markSkill('yunjueqing');
        player.syncStorage('yunjueqing');
    },
                intro:{
                    content:"mark",
                },
                trigger:{
                    player:"damage",
                    source:"damage",
                },
                forced:true,
                filter:function (event, player) {
        var num=(player.maxHp);
        if(player.storage.yunjueqing>=num)   return false;
        return true;
    },
                content:function (){
        player.storage.yunjueqing+=1;
        player.markSkill('yunjueqing');
        player.syncStorage('yunjueqing');
    },
                group:["yunjueqing_a"],
                subSkill:{
                    a:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event){
                        return event.notLink();
            },
                        content:function(){
                        trigger.nature='ice';
            },
                        ai:{
                            jueqing:true,
                        },
                        sub:true,
                    },
                },
            },
            yunjuekou:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"damageAfter",
                },  
                usable:1,
                filter:function(event,player){
                return event.source&&event.source!=player&&event.source.hp>1&&!event.player.hasSkill('yunjuekou_off')&&event.source.isAlive();
                },
                check:function(event,player){
                return ai.get.attitude(player,event.source)<0;
                return 0;
                },
                prompt:function(event,player){
                var str='';
                str +='是否发动【绝口】对'+get.translation(event.source)+'造成一点伤害？'
                return str;
                },
                content:function(){
        'step 0'
        player.say(["只有死人才会永远保密！","只怪你看到了不该看的！听到了不该听的！"].randomGet());
        var num=player.storage.yunjueqing;
        if(player.storage.yunjueqing>0){
        player.chooseToDiscard([1,num], 'h').set('ai',function(card){
            return 6 - ai.get.value(card);
            if(card.name=='zhuge') return -10; 
            return get.attitude(player,event.player)>0;
        });
        }else{
        player.line(trigger.source);
        trigger.source.damage(player);
        trigger.player.addTempSkill('yunjuekou_off','roundStart');
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&!game.yjGetQhlySkin('yunzhangchunhua')){
        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhuaa.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&game.yjGetQhlySkin('yunzhangchunhua')=='yunzhangchunhua4.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua4a.jpg');
                }                      
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&game.yjGetQhlySkin('yunzhangchunhua')=='yunzhangchunhua5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua5a.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&game.yjGetQhlySkin('yunzhangchunhua')=='yunzhangchunhua8.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua8a.jpg');
                }      
        }
        'step 1'
        if(result.bool){
        player.line(trigger.source);
        trigger.source.damage(player);
        trigger.player.addTempSkill('yunjuekou_off','roundStart');
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&!game.yjGetQhlySkin('yunzhangchunhua')){
        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhuaa.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&game.yjGetQhlySkin('yunzhangchunhua')=='yunzhangchunhua5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua5a.jpg');
                }                      
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'&&game.yjGetQhlySkin('yunzhangchunhua')=='yunzhangchunhua8.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua8a.jpg');
                }      
           }
    },
                ai:{
                expose:0.5,
                },
                group:["yunjuekou_a"],
                ai:{
                    expose:0.3,
                },
                subSkill:{
                    a:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        usable:1,                              
                        filter:function (event, player) {
        return player.storage.yunjueqing>0;
    },
                        content:function () {
        var num=player.storage.yunjueqing;
        player.chooseToDiscard([1,num], 'h','是否弃置手牌？').set('ai',function(card){
            return 6 - ai.get.value(card);
            if(card.name=='zhuge') return -10; 
            return get.attitude(player,event.player)>0;
        });
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangchunhua'){
        player.node.avatar.setBackground('yunzhangchunhua','character'); 
                    }
    },
                        sub:true,
                    },
                },
            },
            yunjuekou_off:{
                    charlotte:true,
                    superCharlotte:true,
                    mark:true,
                    marktext:"绝口",
                    intro:{
                    name:"绝口",
                    content:"",
                },
                    },
            yunzhulian:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                usable:3,
                selectTarget:1,
                init:function(player){ 
        player.storage.zhulian=0; 
    },
                filter:function(event,player){
                return player.storage.zhulian<3;
            },
                filterTarget:function(card,player,target){
        return (!target.hasSkill('yunzhuliana'));
    },
                derivation:"yunzhuliana",
                prompt:"选择一名角色获得【株】标记",
                content:function(){
                player.storage.zhulian++; 
                target.addSkill('yunzhuliana');
},
                ai:{
                    order:10,
                    expose:0.3,
                    threaten:2.5,
                    result:{
                        target:function (player, target) {
                        return -target.num('h') - 1;
                        },
                    },
                    effect:{
                    player:function(card,player,target){
                        if(card.name=="huogong"&&target==player){
                        return [0,-99]
                        }
                    },
                },
            },
                "audioname2":{
                    yanghuiyu:"yunshenzi",
                },
            },
            yunzhuliana:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageEnd",
                },
                mark:true,
                marktext:"株连",
                intro:{
                    name:"株连",
                    content:"给本小姐跪下！",
                },
                forced:true,
                forceDie:true,
                charlotte:true,
                superCharlotte:true,
                filter:function (event, player) {
                 return event.source;
        },    
                mod:{
                    globalTo:function(from,to,current){
            return current==1;
        },
                },
                content:function(){
        trigger.source.chooseDrawRecover(2,1,true,get.prompt('yunzhuliana'));
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunzhulian')){      
                current.storage.zhulian--; 
            }
        });
        player.removeSkill('yunzhuliana');
    },
                ai:{
                    threaten:10,
                },
                group:["yunzhuliana_b"],
            subSkill:{
            b:{
            trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                forceDie:true,
                filter:function(event,player){
                return player.hasSkill('yunzhuliana');
            },
                content:function(){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunzhulian')){
                current.storage.zhulian--; 
            }
        });
        player.removeSkill('yunzhuliana');
    },
            }
        },
            },
            yunjiaoheng:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"dieAfter",
                },
                unique:true,                
                limited:true,
                mode:["identity"],
                filter:function(event,player){
                if(player.identity=='nei') return false;
                return event.player!=player&&player.storage.yunjiaoheng==false;
            },
                skillAnimation:true,
                mark:true,                                
                prompt:"是否发动【娇横】召唤『董卓』？",
                content:function(){
        'step 0'
        player.awakenSkill('yunjiaoheng');
        player.discard(player.getCards('h'));
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yundongbai'&&!game.yjGetQhlySkin('yundongbai')){
        player.node.avatar.setBackgroundImage('extension/云将/yundongbaia.jpg');
            }
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yundongbai'&&game.yjGetQhlySkin('yundongbai')=='yundongbai5.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yundongbai5a.jpg');
            }
        'step 1'
        player.awakenSkill('yunjiaoheng');   
        player.identityShown=true;
        player.showIdentity(false);     
        'step 2'
        player.say(["你知道我爷爷是谁吗？！","爷爷！有人欺负我，呜哇哇哇～"].randomGet());
            trigger.player.disableSkill('yunjiaoheng',lib.character[trigger.player.name][3]);
            var name=trigger.player.name;
            trigger.player.reinit(name,'yundongzuo'); 
            trigger.player.revive();
            trigger.player.maxHp=9; 
            trigger.player.hp=9;
            trigger.player.changeGroup('qun');
            if(player.identity=='zhu'){
                trigger.player.identity='zhong';
                game.zhong=trigger.player;
                trigger.player.showIdentity();
                }
            if(player.identity=='zhong'){
                trigger.player.identity='zhong';
                game.zhong=trigger.player;
                trigger.player.showIdentity();
                }
            if(player.identity=='fan'){
                trigger.player.identity='fan';
                game.fan=trigger.player;
                trigger.player.showIdentity();
                }
            trigger.player.update();                                  
        },
                intro:{
                    content:"limited",
                },
                ai:{
                expose:1,
                },
            group:["yunjiaoheng_bs"],
            subSkill:{
            bs:{
            audio:"jiaoheng",
            trigger:{
                player:"dying",
            },
            mode:["identity"],
            filter:function(event,player){
        return player.identity=='nei'&&player.storage.yunjiaoheng==false;
},
            skillAnimation:true,
            prompt:"是否发动【娇横】召唤『董卓』？",
            content:function(){
            player.say(["你知道我爷爷是谁吗？！","爷爷！有人欺负我，呜哇哇哇～"].randomGet());
            player.awakenSkill('yunjiaoheng');
            var name=player.name;
            player.reinit(name,'yundongzuo');
            player.maxHp=9; 
            player.hp=9;
            player.identityShown=true;
            player.showIdentity(false);
            player.update();
    },
            ai:{
                expose:1,
                },
            sub:true,
            },
            },
            },            
            yunbaonve:{
                audio:"ext:云将/audio:2",
                fixed:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,                
                trigger:{
                global:"phaseBegin",
                        },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                filter:function (event,player){
        return event.player!=player&&event.player.name!='yundongbai';
    },
                content:function (){               
            player.say(["满朝公卿，屠之如猪狗。","我董仲颖真是大汉之国柱呀，哈哈哈！"].randomGet());
            player.useCard({name:"sha"},trigger.player);
    },                 
            },
            yunchongni:{
            trigger:{
            global:"damageBegin1",
            },
            audio:"ext:云将/audio:2",
            forced:true,
            popup:false,
            fixed:true,
            unique:true,
            charlotte:true,
            superCharlotte:true,
            filter:function(event,player){
            return event.player!=player&&event.player.name=='yundongbai';
            },
            content:function(){            
            trigger.player=player;
            },
            group:["yunchongni_a","yunchongni_b"],
            subSkill:{
            a:{
            trigger:{
            source:"damageBefore",
            },
            forced:true,
            fixed:true,
            filter:function (event,player){
            return event.player.name=='yundongbai';
            },
            content:function (){
            trigger.cancel();
            },
            sub:true,
            },
            b:{
            audio:"yunchongni",
            trigger:{
                    source:"damageEnd",
                },
                forced:true,
                charlotte:true,
                superCharlotte:true,                
                content:function (){
        game.countPlayer(function(current){
            if(current.name=='yundongbai'&&current.countCards('h')<current.maxHp){
                player.line(current,'green');
                current.draw();
            }            
        });        
    },
                sub:true,
            },
            },
            },
            yunyeyan:{
                audio:"ext:云将/audio:4",
                enable:"phaseUse",
                unique:true,
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                prompt:"弃置装备区所有牌对一名角色造成等量的伤害",
                skillAnimation:true,
                init:function(player){
    player.storage.yunyeyan=false;
},
                filter:function(event,player){
        return player.countCards('e');
    },
                position:"e",
                filterCard:function(card){
        return get.subtype(card);
    },
                selectCard:-1,
                filterTarget:function(card,player,target){
        return player!=target;
    },
                content:function(){
        "step 0"
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhouyu'&&!game.yjGetQhlySkin('yunzhouyu')){
        player.node.avatar.setBackgroundImage('extension/云将/yunzhouyua.jpg');
            }
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhouyu'&&game.yjGetQhlySkin('yunzhouyu')=='yunzhouyu5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhouyu5a.jpg');
                    }                      
        player.storage.yunyeyan=true;
        player.awakenSkill("yunyeyan");
        "step 1"
        player.say(["灰飞烟灭吧！","此火，天下三分！"].randomGet());
        target.damage('fire',cards.length);
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                var es = player.countCards('e',{type:'equip'});
                var th = target.hp;
                if(es>=th) return -1;
            },
                    },
                },
            },
            yunguqu:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                direct:true,
                usable:1,
                check:function(event,player){
        return ai.get.attitude(player,event.player)<0;
    },
                filter:function(event,player){
        if(get.type(event.card)!='basic'&&get.type(event.card)!='trick'&&get.type(event.card)!='delay') return false;
        if(get.suit(event.card)&&player.countCards('he',{suit:get.suit(event.card)})){
            return event.player&&event.player!=player;
        };
        return false;
    },
                content:function(){
         'step 0'
        player.chooseToDiscard(get.prompt('yunguqu'),'he','弃置花色为'+get.translation(get.suit(trigger.card)+'2')+'的牌令'+get.translation(trigger.player)+'使用的'+get.translation(trigger.card)+'无效？',
            {suit:get.suit(trigger.card)}).set('ai',function(card){
            return get.attitude(player,trigger.player)<0;
        });
        'step 1'
        if(result.bool){
            player.logSkill('yunguqu');
            player.discard(result.cards);
            trigger.untrigger();
            trigger.finish();
        }else{
            player.storage.counttrigger.yunguqu--;
            event.finish();
        }
        'step 2'
        if(get.color(trigger.card)=='red'){
            player.draw();
        }else{
            player.chooseTarget('请选择弃置牌的目标',function(card,player,target){
            return target.countCards('hej')>0}
            ).set('ai',function(target){
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
        "step 3"
        if(result.bool){
            player.discardPlayerCard(1,result.targets[0],'hej'); 
        }else{
            event.finish();
        };
    },
                group:["yunyingzi"],
                ai:{
                    expose:0.1,
                },
            },
            yunyingzi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        trigger.player.chooseControl('装备','铁索').set('ai',function(){
return ["装备","铁索"].randomGet();
});
        "step 1"
        if(result.control=='铁索'){
            var list=['tiesuo'];
        player.gain(game.createCard(list.randomGet()));
        }
        if(result.control=='装备'){
            var list=get.inpile('equip');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['装备','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张装备牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        }
        "step 2"
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
    },
                mod:{
                    maxHandcardBase:function(player,num){
            return num+player.maxHp;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
            yunzhaolie:{
                audio:"ext:云将/audio:3",
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:false,
                delay:false,
                prepare:"give",
                prompt:"将任意张牌交给一名其他角色",
                check:function(card){
        if(ui.selected.cards.length>1) return 0;
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        var num=0;
        var evt2=_status.event.getParent();
        var num=0;
        player.getHistory('lose',function(evt){
            if(evt.getParent().skill=='yunzhaolie'&&evt.getParent(3)==evt2) num+=evt.cards.length;
        });
        if(num>1||player.countCards('h')<=1){
            if(ui.selected.cards.length){
                return -1;
            }
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isTurnedOver()&&
                   !players[i].hasJudge('lebu')&&
                    get.attitude(player,players[i])>=3&&
                    get.attitude(players[i],player)>=3){
                    return 11-get.value(card);
                }
            }
            if(player.countCards('h')>2) return 6-get.value(card);
            return -1;
        }
        return 10-get.value(card);
    },
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                filterTarget:function (card, player, target) {
        return player!=target&&!target.hasSkill('yunzhaolie_off');
    },
                content:function(){
        "step 0"
        target.gain(cards,player,'giveAuto');
        target.addTempSkill('yunzhaolie_off','phaseAfter');
        "step 1"
        player.chooseControl('武圣','咆哮','龙胆','铁骑','烈弓').set('ai',function(){
return ["武圣","咆哮","龙胆","铁骑","烈弓"].randomGet();
});
        player.say(["将军真乃一身是胆也！","匡扶汉室就仰望将军了！"].randomGet());
        "step 2"
        if(result.control=='武圣'){
            target.addTempSkill('yunzhaoliea',{player:'phaseAfter'});
        }
        if(result.control=='咆哮'){
            target.addTempSkill('yunzhaolieb',{player:'phaseAfter'});
        }
        if(result.control=='龙胆'){
            target.addTempSkill('yunzhaoliec',{player:'phaseAfter'});
        }
        if(result.control=='铁骑'){
            target.addTempSkill('yunzhaolied',{player:'phaseAfter'});
        }
        if(result.control=='烈弓'){
            target.addTempSkill('yunzhaoliee',{player:'phaseAfter'});
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:10,
                    },
                },
            },
            yunzhaoliea:{
                group:"new_rewusheng",
                mark:true,
                marktext:"武圣",
                intro:{
                    name:"昭烈·武圣",
                    content:"你可以将一张红色牌当做【杀】使用或打出。使用的方片杀没有距离限制。",
                },
            },
            yunzhaolieb:{
                group:"olpaoxiao",
                mark:true,
                marktext:"咆哮",
                intro:{
                    name:"昭烈·咆哮",
                    content:"你使用【杀】无次数限制；当你使用的【杀】被【闪】抵消时，获得一枚〖咆〗。你使用【杀】造成伤害时，弃置所有“咆”并令伤害值+X。（X为〖咆〗数）",
                },
            },
            yunzhaoliec:{
                group:"ollongdan",
                mark:true,
                marktext:"龙胆",
                intro:{
                    name:"昭烈·龙胆",
                    content:"你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
                },
            },
            yunzhaolied:{
                group:"retieji",
                mark:true,
                marktext:"铁骑",
                intro:{
                    name:"昭烈·铁骑",
                    content:"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
                },
            },
            yunzhaoliee:{
                group:"xinliegong",
                mark:true,
                marktext:"烈弓",
                intro:{
                    name:"昭烈·烈弓",
                    content:"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应，2.其体力值大于等于你的体力值，此【杀】伤害+1。",
                },
            },
            "yunzhaolie_off":{
                charlotte:true,
                superCharlotte:true,
            },
            yunsangu:{
                audio:"ext:云将/audio:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunrende",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                prompt:"选择一名角色令其增加体力上限并修改势力为『蜀』",
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunsangu')){
            player.markSkill('yunsangu');
            player.storage.yunsangu=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunsangu');
        return player.storage.yunsangu==false;
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunsangu=true;
    player.awakenSkill("yunsangu");
    game.log(target,'成为了','【三顾】','的目标');
    target.gainMaxHp();
    "step 1"
    target.recover();
    target.changeGroup('shu');
    player.addSkill('yunrende');
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunliubei'&&!game.yjGetQhlySkin('yunliubei')){
    player.node.avatar.setBackgroundImage('extension/云将/yunliubeia.jpg');
            }
},
                ai:{
                    order:6,
                    result:{
                        target:10,
                    },
                },
            },
            yunrende:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"gainAfter",
                },
                filter:function(event,player){
        return event.player!=player&&event.player.group=="shu"&&!event.player.hasSkill('yunrende_off');
    },
                direct:true,
                content:function(){
            "step 0"
        trigger.player.chooseControl(["令"+lib.translate[player.name]+"摸一张牌","取消"]).set('ai',function(event){
            if(get.attitude(trigger.player,player)>0) return "令"+lib.translate[player.name]+"摸一张牌";
            return "取消";
        }).set('prompt','请选择一项');
        "step 1"
        if(result.control=="令"+lib.translate[player.name]+"摸一张牌"){
            player.logSkill('yunrende');
            player.draw();
            trigger.player.addTempSkill('yunrende_off','roundStart');
        }
    },
            },
            yunrende_off:{
                charlotte:true,
                superCharlotte:true,
            },
            yunwanjun:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                filterCard:true,
                selectCard:2,
                position:"hes",
                selectTarget:1,
                prompt:"将两张牌当雷属性【杀】使用",
                filter:function(event,player){
        return player.countCards('hes')>1;
    },
                filterTarget:function (card, player, target) {
        return player!=target&&!target.hasSkill('yunwanjun_off');
    },
                check:function(card){
        return 10-get.value(card)
    },
                content:function (){
        target.addTempSkill('yunwanjun_off');
        player.useCard({name:'sha',nature:'thunder'},target,false);
        target.addTempSkill('yunfengyin', 'shaAfter');
        player.addTempSkill('unequip', 'shaAfter');
        player.addTempSkill('yunwanjuna','shaAfter');
        player.say(["燕人张飞在此！","三姓家奴，吃你爷爷一矛!"].randomGet());
    },
                line:"thunder",
                ai:{
                    order:function(){
    return get.order({name:'jiu'})-0.1;
},
                    expose:0.8,
                    effect:{
                        target:function(card,player,target){              
                if(player.countCards('hes')>2&&card.name=='jiu'){
                    return [0,1.5];
                }
            },
                        player:function(card,player,target){              
                if(player.countCards('hes')<=2&&card.name=='jiu'){
                    return [0,-0.5];
                }
            },
                    },
                    result:{
                        target:function (player,target){
                return -1;
            },
                    },
                },
            },
            yunwanjun_off:{
                charlotte:true,
                superCharlotte:true,
                    },
            yunwanjuna:{
                nobracket:true,
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                popup:false,
                content:function (){
    trigger.directHit=true;
    },
            },
            yunyongzhi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                filter:function (event, player) {
                return player.storage.yunyongzhi_mp>0;
    },
                content:function(){
        'step 0'
        player.draw(player.storage.yunyongzhi_mp);
        if(player.storage.yunyongzhi_mp>=3){
       var list=['jiu'];
        player.gain(game.createCard(list.randomGet()));
    }
        'step 1'
        player.removeMark('yunyongzhi_mp',Infinity);
        
    },
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='jiu') return Infinity;
        },
                    ignoredHandcard:function(card,player){
            if(card.name=='jiu'){
                return true;
            }
        },
                    cardDiscardable:function(card,player,name){
            if(name=='phaseDiscard'&&card.name=='jiu'){
                return false;
            }
        },
                },
                group:["yunyongzhi_mp"],
                subSkill:{
                    mp:{
                        trigger:{
                            source:"damage",
                        },
                        forced:true,
                        popup:false,
                        mark:true,
                        marktext:"勇智",
                        intro:{
                            content:"回合结束摸#张牌",
                        },
                        filter:function(event, player){
        if(_status.currentPhase!=player) return false;
        return event.num>0&&player.storage.yunyongzhi_mp<3;
    },
                        init:function(player){
        player.storage.yunyongzhi_mp=0;
        player.markSkill('yunyongzhi_mp');
        player.syncStorage('yunyongzhi_mp');
    },
                        content:function(){
        'step 0'
        event.num=trigger.num;
        'step 1'
        player.storage.yunyongzhi_mp+=1;
        player.markSkill('yunyongzhi_mp');
        player.syncStorage('yunyongzhi_mp');
        if(player.storage.yunyongzhi_mp==3){
            event.finish();
                }
        'step 2'
        event.num--;
        if(event.num>0){
                event.goto(1);
            }
    },
                        sub:true,
                    },
                },
            },
            yunbiyue:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                content:function(){ 
        player.logSkill('yunbiyue',event.targets);
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yundiaochan'&&!game.yjGetQhlySkin('yundiaochan')){
        player.node.avatar.setBackgroundImage('extension/云将/yundiaochana.jpg');
            }
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yundiaochan'&&game.yjGetQhlySkin('yundiaochan')=='yundiaochan7.jpg'){
        player.node.avatar.setBackgroundImage('extension/云将/yundiaochan7a.jpg');
            }
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+player.hp;
        },
                    targetEnabled:function(card,player,target,now){
            if(target.countCards('h')>target.hp){
                if(card.name=='sha'||card.name=='juedou') return false;
            }
        },
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(player.countCards('h')<=player.hp)     return 0; 
                if(card.name=='sha'&&card.name=='juedou') return 0; 
            },
                    },
                },
            },
            yunmeihuo:{
                audio:"ext:云将/audio:9",
                enable:"phaseUse",
                unique:true,
                filterCard:1,     
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                multitarget:true,
                selectTarget:2,
                usable:1,
                check:function(card){return 10-get.value(card)},                
                position:"h",
                targetprompt:["发起拼点","被拼点"],
                prompt:"弃置一张手牌并选择两名进行拼点的目标",
                content:function(){
        "step 0"
        targets[0].line(targets[1]);
        targets[0].chooseToCompare(targets[1]);
        player.say(["将军～一定要赢哟～","打打杀杀～好害怕哦～"].randomGet());
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yundiaochan'){
        player.node.avatar.setBackground('yundiaochan','character'); 
            }
        "step 1"        
        if(result.bool){
            targets[0].useCard({name:'juedou'},targets[1],false);
            targets[1].useCard({name:'sha'},targets[0],false); 
        }
        else if(result.tie){
            targets[0].chooseToDiscard('he',3,true);
            targets[1].chooseToDiscard('he',3,true);
        }
        else{
            targets[1].useCard({name:'juedou'},targets[0],false);   
            targets[0].useCard({name:'sha'},targets[1],false);        
        }
    },
                ai:{
                    order:9,
                    expose:0.3,
                    result:{
                        target:function(player,target){
            if(ai.get.attitude(player,target)<0) return -target.num('he');
              },
                    },
                },
            },
            yunzhiba:{
                unique:true,
                global:"yunzhibaa",
                audio:"ext:云将/audio:2",
            },
            yunzhibaa:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                position:"hes",
                usable:1,
                selectCard:1,
                discard:false,
                lose:false,
                delay:false,
                line:true,
                direct:true,
                clearTime:true,
                prepare:function(cards,player,targets){
        targets[0].logSkill('yunzhiba');
    },
                filter:function(event,player){
        if(player.group!='wu') return false;
        if(player.countCards('hes',{type:'equip'})==0) return 0;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasZhuSkill('yunzhiba',player);
        });
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                filterTarget:function(card,player,target){
        return target!=player&&target.hasZhuSkill('yunzhiba',player);
    },
                prompt:"选择给出一张装备牌，然后自己摸两张牌",
                content:function(){
        "step 0"
        target.gain(cards,player);
        "step 1"
        player.draw(2);
    },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
            },
            yunxianxi:{
                audio:"ext:云将/audio:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunzhiba",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunxianxi')){
            player.markSkill('yunxianxi');
            player.storage.yunxianxi=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunxianxi');
        return player.storage.yunxianxi==false;
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    event.num=2;
    player.storage.yunxianxi=true;
    player.awakenSkill("yunxianxi");
    game.log(target,'成为了目标');
    target.gainMaxHp();
    target.disableJudge();
    target.changeGroup('wu');
    player.addSkill('yunzhiba');
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunce'&&!game.yjGetQhlySkin('yunsunce')){
    player.node.avatar.setBackgroundImage('extension/云将/yunsuncea.jpg');
            } 
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
            },
            yunjiang:{
                audio:"ext:云将/audio:3",
                forced:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        var evt=event.getParent();
        return (evt&&evt.name=='juedou')>0;
    },
                content:function (){
             "step 0"
             player.chooseDrawRecover(2,true,get.prompt('yunjiang'));
             player.say(["属于我们的时代！开始啦!","激昂起来了！"].randomGet());             
    },
            },
            yunyingyang:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageEnd",
                },
                locked:true,
                usable:1,
                prompt:function(event,player){
                        var str='';
                        str +='是否对'+get.translation(event.source)+'发动【鹰扬】？'
                        return str;
                        },
                filter:function(event,player){
                return _status.currentPhase!=player&&event.source;
                },
                check:function(event,player){
                var hs1=event.source.countCards('h');
                var hs2=player.countCards('h','sha')
                if(get.attitude(player,event.source)<0&&(hs1<=hs2)){
                    return 1.5;
                }
                if(get.attitude(player,event.source)<0&&(hs1==0)){
                    return 1.5;
                }
                if(get.attitude(player,event.source)<0&&(hs1>hs2)){
                return 0;
                }
                return 0;
                },
                content:function(){
                for(var i=1;i<7;i++){
                if(player.isEmpty(i)){
                var sub='equip'+i,card=get.cardPile(function(card){
                    return get.subtype(card,false)==sub&&!get.cardtag(card,'gifts');
                });
                if(card){
                    player.$gain2(card);
                    game.delayx();
                    player.equip(card);
                    break;
                }
            }
        }
        player.useCard({name:'juedou',skill:'yunyingyang'},trigger.source);
    },
                group:["yunyingyang_a"],
                ai:{
                expose:0.3,
                },
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        enable:"phaseUse",
                        filterCard:function(card){
                        return get.type(card)=='equip';
                        },
                        position:"he",
                        prompt:"请选择【鹰扬】的目标",
                        filter:function(event,player){
                        var num=player.getStat().skill.yunyingyang_a;
                        if(num){
                        num=_status.event.player.getStat().skill.yunyingyang_a;
                        }
                        else{
                        num=1;
                        }
                        return player.countCards('hes',{type:'equip'})>=num;
                        },
                        selectCard:function(card){
                        var num=_status.event.player.getStat().skill.yunyingyang_a;
                        if(num) return num+1;
                        return 1;
                        },
                        filterTarget:function (card,player,target){
                        if(player==target) return false;
                        return true;
                        },
                        content:function(){
                        player.useCard({name:'juedou'},target,false);
                        },
                ai:{
                    wuxie:function(target,card,player,viewer){
                    if(player==game.me&&get.attitude(viewer,player)>0){
                    return 0;
                    }
                },
                order:6,
                result:{
                target:-1.5,
                player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)){
                    return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
        },
        tag:{
            respond:2,
            respondSha:2,
            damage:1,
        },
    },
                        sub:true,
                    },
                },
            },
            yunbugua:{
                audio:"yunbugua_off",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                usable:1,
                content:function(){
       player.useSkill('yunbugua_off'); 
    },
                global:"yunbugua_off",
                ai:{
                    effect:{
                        target:function(card, player, target) {
                if (get.tag(card, 'damage')&&player.storage.yunfuzhu<3){
                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                    if (!target.hasFriend()) return;
                    if (target.hp >= 4) return [1, 2];
                    if (target.hp == 3) return [1, 1.5];
                    if (target.hp == 2) return [1, 0.5];
                }
            },
                    },
                },
                subSkill:{
                    off:{
                        audio:"ext:云将/audio:2",
                        enable:"phaseUse",
                        usable:1,
                        forced:true,
                        popup:false,
                        direct:true,
                        delay:false,
                        discard:false,
                        lose:false,
                        filter:function(event,player){
        if(player.hasSkill('yunbugua')) return false;
        return game.hasPlayer(function(current){
            return current.hasSkill('yunbugua');
        });
    },
                        prompt:"令〖徐氏〗进行一次【卜算】然后你与其各摸一张牌",
                        content:function(){
        player.logSkill('yunbugua',event.targets);
        game.countPlayer(function(current){
            if(current.name=='yunxushi'){
                player.line(current,'green');
                current.chooseToGuanxing(3);
                if(current!=player){
                   player.draw();  
                }
                current.draw();
                if(current.storage.yunfuzhu<3){
                current.storage.yunfuzhu++;
                current.markSkill('yunfuzhu');
                current.syncStorage('yunfuzhu');
                    }
                if(lib.config.extension_云将_yincangpifu=='on'&&current.name=='yunxushi'){
                current.node.avatar.setBackground('yunxushi','character'); 
                    }
            }
        });
    },
                        ai:{
                            order:10,
                            result:{
                                player:function(player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('yunbugua');
                });
                if(target){
                    return get.attitude(player,target);
                }
                return 1;
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            yunfuzhu:{
                audio:"ext:云将/audio:3",
                enable:"phaseUse",
                skillAnimation:true,
                filterTarget:function(card,player,target){
        return target!=player&&player.inRange(target);
    },
                marktext:"伏诛",
                intro:{
                    name:"伏诛",
                    content:"当前已拥有#个【伏诛】标记",
                },
                mark:true,
                selectTarget:1,
                prompt:"选择【伏诛】目标",
                init:function(player){
        player.storage.yunfuzhu=0;
        player.markSkill('yunfuzhu');
        player.syncStorage('yunfuzhu');
    },
                filter:function(event,player){
        return player.storage.yunfuzhu>=3;
    },
                content:function(){
        'step 0'
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunxushi'&&!game.yjGetQhlySkin('yunxushi')){
        player.node.avatar.setBackgroundImage('extension/云将/yunxushia.jpg');
            }
        'step 1'
        player.removeMark('yunfuzhu');
        player.useCard({name:'sha'},target,false);
        player.addTempSkill('unequip', 'shaAfter');
        'step 2'
        if(target.isDead()){
             event.finish();
                }
        'step 3'
        if(player.storage.yunfuzhu>0){
                event.goto(1);
            }
        'step 4'
        player.turnOver();
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                        return get.damageEffect(target,player);
                        if(player.storage.yunfuzhu>target.hp){
                        var att=player.storage.yunfuzhu-target.hp;
                        return 5*-att;
                        }
                        var att2=player.storage.yunfuzhu;
                        return -att;
            },
                    },
                },
            },
            yundanlie:{
                mark:true,
                marktext:"胆裂",
                unique:true,
                intro:{                
                content:function(storage,player){
                var num=player.hp;
                return '<div>子龙！叶轩！贼寇已然胆寒，随我杀！<br><br>你本回合使用牌数至多为'+(num)+'<br>你计算与其他角色的距离加'+(num)+'<br>其他角色计算与你的距离减'+(num)+'</span></div>';
        },                
                },
                mod:{
                    globalFrom:function(from,to,current){
            return current+Math.max(0,from.hp);
        },
                    globalTo:function(from,to,current){
            return current-Math.max(0,from.hp);
        },
        cardEnabled:function(card,player){
						if(_status.currentPhase!=player) return;
						if(player.countUsed()>=player.hp) return false;
					}
				},
                trigger:{
                    player:"recoverEnd",
                },
                forced:true,
                content:function(){
        player.removeSkill('yundanlie');
    },
                ai:{
                    threaten:4,
                },
            },
            yunzhujing:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.countCards('he')>0&&player.hujia<1;
    },
                check:function(card){
        return 6-get.value(card)
    },
                prompt:"是否弃置至多五张牌获得等量的护甲？",
                content:function(){
        'step 0'
        var next=player.chooseToDiscard('he',[1,5]).set('ai',function(card){
            return 6 - ai.get.value(card);
            });
        "step 1"
        if(result.bool){
            player.changeHujia(result.cards.length);
        }
    },
    mod:{
        maxHandcardBase:function(player,num){
            return num+player.hujia;
        },
    },              
            },
            yunyicong:{
                audio:"ext:云将/audio:2",
                trigger:{
                    source:"damageBegin",
                },
                usable:1,
                check:function(event,player){        
        var att=get.attitude(player,event.player);
        return att<0;
    },
                derivation:"yundanlie",
                filter:function(event){
        if(event._notrigger.contains(event.player)) return false;
        return event.player.isAlive()&&event.card&&event.card.name=='sha';
    },
                content:function(){
       player.draw();
       trigger.player.addSkill('yundanlie');
    },
    
                group:["yunyicong_a"],
                ai:{
                    threaten:1,
                },
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            target:"useCardToBefore",
                        },
                        frequent:true,
                        usable:1,
                        filter:function (event, player) {
        return event.card.name == 'sha';
    },
                        content:function () {
        player.useCard({name:'sha'},trigger.player,false); 
    },
                        sub:true,
                    },
                },
            },
            yunwansha:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"dying",
                },
                prompt:"令其进行一次判定，若结果为：黑色、你令其其死亡；红色：你摸两张牌",
                logTarget:"player",
                check:function(event,player){
        return ai.get.attitude(player,event.player)<0;
    },
                filter:function(event,player){
        return _status.currentPhase==player&&event.player!=player&&!event.player.hasSkill('yunwansha_off');
    },
                content:function(){
        'step 0'
        player.judge(function(card){ 
            return get.color(card)=='black'?1:0; 
        }); 
        trigger.player.addTempSkill('yunwansha_off');
        "step 1"
        if(result.color=='black'){
            player.say(["死！","英雄，也会孤掌难鸣呐！"].randomGet());
            trigger.player.die(trigger.reason);
        }
        if(result.color=='red'){
            player.say(["哼！","濒死求活的小可怜哟～"].randomGet());            
            trigger.player.addTempSkill('yunfengyin',{player:'phaseAfter'});
        }
        'step 2'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
            },
            yunwansha_off:{
    charlotte:true,
    superCharlotte:true,
    },
            yunjimou:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                content:function(){
            player.addTempSkill('yunkongju');
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name=='db_yunjiaxu'){
            player.node.avatar.setBackground('db_yunjiaxu','character'); 
                        }                               
    },
                group:["yunjimou_a"],
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        content:function(){
            player.addTempSkill('yunweiwo',{player:'phaseZhunbeiBegin'});       
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name=='db_yunjiaxu'&&!game.yjGetQhlySkin('db_yunjiaxu')){
                        player.node.avatar.setBackgroundImage('extension/云将/db_yunjiaxua.jpg');
                    }                      
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name=='db_yunjiaxu'&&game.yjGetQhlySkin('db_yunjiaxu')=='db_yunjiaxu5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/db_yunjiaxu5a.jpg');
                    }        
    },
                        sub:true,
                    },
                },
            },
            yunyongdi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                content:function(){
        'step 0'
        player.chooseTarget(true, '选择一名其他角色作为【拥嫡】目标', function (card, player, target) {
            return target!=player;
        }).set('ai', function (target) {
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            target.gainMaxHp(true);
            target.recover();
            var mode=get.mode();
            if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
                if(target.name&&lib.character[target.name]){
                    var skills=lib.character[target.name][3];
                    target.storage.zhuSkill_yunyongdi=[];
                    for(var i=0;i<skills.length;i++){
                        var info=lib.skill[skills[i]];
                        if(info.zhuSkill){
                            target.storage.zhuSkill_yunyongdi.push(skills[i]);
                            if(info.init){
                                info.init(target);
                            }
                            if(info.init2){
                                info.init2(target);
                            }
                        }
                    }
                }
            }
        }
    },
                ai:{
                    expose:0.2,
                },
            },
            yunluanwu:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                filterTarget:function(card,player,target){
        return target!=player;
    },
                selectTarget:-1,
                content:function(){
        "step 0"
        event.current=player.next;
        event.currented=[];
        "step 1"
        event.currented.push(event.current);
        event.current.animate('target');
        event.current.chooseToUse('乱武：使用一张杀或失去一点体力',function(card){
            if(get.name(card)!='sha') return false;
            return lib.filter.filterCard.apply(this,arguments)
        },function(card,player,target){
            if(player==target) return false;
            if(target.hasSkill('yunjimou')) return false;
            var dist=get.distance(player,target);
            if(dist>1){
                if(game.hasPlayer(function(current){
                    return current!=player&&get.distance(player,current)<dist;
                })){
                    return false;
                }
            }
            return lib.filter.filterTarget.apply(this,arguments)
        }).set('ai2',function(){
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
                        player:function(player){
                if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
                    if(game.zhu.hp==1&&game.zhu.countCards('h')<=2) return 1;
                }
                var num=0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    var att=get.attitude(player,players[i]);
                    if(att>0) att=1;
                    if(att<0) att=-1;
                    if(players[i]!=player&&players[i].hp<=3){
                        if(players[i].countCards('h')==0) num+=att/players[i].hp;
                        else if(players[i].countCards('h')==1) num+=att/2/players[i].hp;
                        else if(players[i].countCards('h')==2) num+=att/4/players[i].hp;
                    }
                    if(players[i].hp==1) num+=att*1.5;
                }
                if(player.hp==1){
                    return -num;
                }
                if(player.hp==2){
                    return -game.players.length/4-num;
                }
                return -game.players.length/3-num;
            },
                    },
                },
            },
            yunkongju:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"useCardAfter",
                },
                mark:true,
                marktext:"控局",
                intro:{
                    name:"控局",
                    content:"你使用红色的基本牌／普通锦囊牌可额外结算一次",
                },
                prompt:function(event,player){
                        var str='';
                        str +='是否令'+get.translation(event.card)+'额外结算一次？'
                        return str;
                        },
                check:function(event,player){
                if(get.attitude(player,event.target)<=0||event.target==player) return true;
	            return false;
	            },
                filter:function(event,player){
        if(event.parent.name=='yunkongju') return false;
        if(!event.targets||!event.card) return false;
        if(event.card&&event.card.name=='wuxie') return false;
        if(event.card&&event.card.name=='wanjian') return false;
        if(event.card&&event.card.name=='nanman') return false;
        if(event.card&&event.card.name=='shan') return false;
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        var color=get.color(event.card);
        if(color!='red') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
        var targets=event._targets||event.targets;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isIn()) return false;
            if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
            }
        }
       return true; 
    },
                content:function(){
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0),false).set('ai',()=>-1).logSkill='yunkongju';
    },
                ai:{
                    effect:{
                        player:function(card,player,target){ 
                if(get.color(card)=='red') return [1,1]; 
            },
                    },
                },
                group:["yunkongju_a"],
                subSkill:{
                    a:{
                        audio:"yunkongju",
                        trigger:{
                            player:"useCardAfter",
                        },
                        prompt:function(event,player){
                        var str='';
                        str +='是否令'+get.translation(event.card)+'额外结算一次？'
                        return str;
                        },
                        check:function(event,player){
                if(get.attitude(player,event.target)<=0||event.target==player) return true;
	            return false;
	            },
                        filter:function(event){
        if(event.parent.name=='yunkongju_a') return false;
        return event.card&&event.card.name=='wanjian'||event.card.name=='nanman'&&get.color(event.card)=='red';
    },
                        content:function(){
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0)).set('ai',()=>-1).logSkill='yunkongju_a';
    },
                        ai:{
                            effect:{
                                player:function(card,player,target){ 
                if(get.color(card)=='red') return [1,1]; 
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            yunweiwo:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"useCard1",
                },
                mark:true,
                marktext:"帷幄",
                intro:{
                    name:"帷幄",
                    content:"其他角色使用的黑色牌不能指定你为目标。",
                },
                forced:true,
                firstDo:true,
                filter:function (event,player,card){
        if(get.color(event.card)!='black') return false;
        return event.card.name=='nanman'&&player!=event.player||event.card.name=='wanjian'&&player!=event.player||event.card.name=='taoyuan'&&player.hp<player.maxHp||event.card.name=='wugu';
    },
                content:function(){},
                mod:{
                    targetEnabled:function(card){
            if(get.color(card)=='black') return false;
        },
                },
            },
            yunjiance:{
                audio:"ext:云将/audio:4",
                enable:"phaseUse",
                usable:1,
                check:function(card){
                return 10-get.value(card);
    },
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function(card,player,target){
        if(target==player) return false;
        if(ui.selected.targets.length){
            return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
            &&!target.hasSkillTag('noCompareTarget');
        }
        return true;
    },
                filterCard:true,
                targetprompt:["发起拼点","被拼点"],
                prompt:"选择【间策】的两名目标",
                selectTarget:2,
                multitarget:true,
                content:function(){
        'step 0'
        targets[0].gain(cards,player,'give');
        'step 1'
        targets[0].chooseToCompare(targets[1]);
        'step 2'
        if(result.bool){
            targets[0].chooseToDiscard('he',2,true);
            targets[1].damage();
        }
        else if(result.tie){
            targets[0].damage()
            targets[1].damage()
        }
        else{
            targets[1].chooseToDiscard('he',2,true);
            targets[0].damage();
        }
    },
                intro:{
                    content:"limited",
                },
                ai:{
                    expose:0.3,
                    order:7,
                    result:{
                        target:function(player,target){
                if(player.hasUnknown()) return 0;
                if(ui.selected.targets.length) return -2;
                return -1;
            },
                    },
                },
            },
            yunlongdan:{
                audio:"ext:云将/audio:4",
                group:["yunlongdan_sha","yunlongdan_shan"],
                mod:{
                    cardUsable:function(card,player,num){ 
            if(card.name=='sha') 
                return num+=Math.min(2,player.getDamagedHp());
        },
                },
                ai:{
                    mapValue:2,
                },
                subSkill:{
                    sha:{
                        audio:"ext:云将/audio:2",
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:true,
                        selectCard:1,
                        position:"h",
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player){
                if(!player.countCards('h')) return false;
            },
                        prompt:"将一张手牌当杀使用或打出",
                        check:function(){return 1},
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function(player){
                    if(!player.countCards('h')) return false;
                },
                            order:function(){
                    return get.order({name:'sha'})+9;
                },
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            result:{
                                target:function(player,target,card,isLink){
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
                            canLink:function(player,target,card){
                    if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                    if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                        target:target,
                        card:card,
                    },true)) return false;
                    if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            yingbian:function(card,player,targets,viewer){
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
                        },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    shan:{
                        audio:"ext:云将/audio:2",
                        enable:["chooseToRespond","chooseToUse"],
                        filterCard:true,
                        selectCard:1,
                        position:"h",
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张手牌当闪使用或打出",
                        check:function(){return 1},
                        viewAsFilter:function(player){
                if(!player.countCards('h')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function(player){
                    if(!player.countCards('h')) return false;
                },
                            effect:{
                                target:function(card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:9,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
            },
            yunlonglie:{
                audio:"ext:云将/audio:4",
                forced:true,
                group:["yunlonglie_hong","yunlonglie_fang","yunlonglie_hei","yunlonglie_mei","yunlonglie_honga","yunlonglie_fanga","yunlonglie_heia","yunlonglie_meia"],
                subSkill:{
                    hong:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_hong.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='heart') return true;
                   }
            return false;
              },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
               player.logSkill('yunlonglie_hong',event.targets);
               player.recover();
              },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    fang:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_fang.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='diamond') return true;
               }
            return false;
            },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
                player.logSkill('yunlonglie_fang',event.targets);
            player.draw(2);
            },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    hei:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_hei.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='spade') return true;
            }
            return false;
        },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
           "step 0"
            player.chooseTarget('令一名角色受到一点伤害',get.prompt('yunlonglie_hei'),function(card,player,target){
            return player!=target;
            }).ai=function (target) {
            return ai.get.damageEffect(target, player, player);
        };
           "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_hei',result.targets);
            result.targets[0].damage(player);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    mei:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_mei.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club') return true;
            }
            return false;
        },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
            "step 0"
            player.chooseTarget('弃置一名角色一张牌',get.prompt('yunlonglie_mei'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_mei',result.targets);
            player.discardPlayerCard(result.targets[0],'he',true);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                    honga:{
                        audio:"yunlonglie_hong",
                        trigger:{
                            player:"respondEnd",
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='heart') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
                player.logSkill('yunlonglie_honga',event.targets);
            player.recover();
            },
                        sub:true,
                    },
                    fanga:{
                        audio:"yunlonglie_fanga",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='diamond') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            player.logSkill('yunlonglie_fanga',event.targets);
            player.draw(2);
            },
                        sub:true,
                    },
                    heia:{
                        audio:"yunlonglie_hei",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        usable:1,
                        popup:false,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='spade') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            "step 0"
            player.chooseTarget('令一名角色受到一点伤害',get.prompt('yunlonglie_hei'),function(card,player,target){
            return player!=target;
            }).ai = function (target) {
            return ai.get.damageEffect(target, player, player);
        };
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_heia',result.targets);
            result.targets[0].damage(player);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                    meia:{
                        audio:"yunlonglie_mei",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        usable:1,
                        popup:false,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='club') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            "step 0"
            player.chooseTarget('弃置一名角色一张牌',get.prompt('yunlonglie_meia'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_meia',result.targets);
            player.discardPlayerCard(result.targets[0],'he',true);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                },
            },
            yunqiqiao:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"equipEnd",
                },
                usable:1,
                filter:function(event,player){
        return event.player!=player;
        if(event.parent.parent.name=='phaseDraw') return false;
        if(event.parent.name=='fenlie') return false;
        if(!event.cards) return false;
        for(var i=0;i<event.cards.length;i++){
            if(!get.info(event.cards[i]).unique) return true;
        }
        return false;
    },
                content:function(){
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.info(trigger.cards[i]).unique) continue;
            cards.push(game.createCard(trigger.cards[i]));
        }
            player.gain(cards,'draw');
    },
     mod:{
    canBeGained:function(card){
		if(get.position(card)=='e'&&['equip2','equip5'].contains(get.subtype(card))) return false;
	},
	canBeDiscarded:function(card){
		if(get.position(card)=='e'&&['equip2','equip5'].contains(get.subtype(card))) return false;
	},
	     },
                group:["yunqiqiao_a","yunqiqiao_b"],
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='toulianghuanzhu'){
                    return [1,2];
                }
            },
                    },
                },
                subSkill:{
                    a:{
                        popup:false,
                        forced:true,
                        trigger:{
                            player:"damageAfter",
                        },
                        content:function () {
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhuangyueying'&&!game.yjGetQhlySkin('yunhuangyueying')){
        player.node.avatar.setBackgroundImage('extension/云将/yunhuangyueyinga.jpg');
                    }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhuangyueying'&&game.yjGetQhlySkin('yunhuangyueying')=='yunhuangyueying5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yunhuangyueying5a.jpg');
                    }        
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhuangyueying'&&game.yjGetQhlySkin('yunhuangyueying')=='yunhuangyueying9.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yunhuangyueying9a.jpg');
                    }        
    },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        popup:false,
                        forced:true,
                        content:function () {
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhuangyueying'){
        player.node.avatar.setBackground('yunhuangyueying','character'); 
                    }
    },
                        sub:true,
                    },
                },
            },
            yunlinglong:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                popup:false,
                filter:function(event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                filterTarget:function (card, player, target) {
        return !target.hasSkill('yunlinglong_off');
    },
                filterCard:{
                    type:"equip",
                },
                position:"he",
                prompt:"选择一名角色恢复一点体力或摸两张牌",
                content:function(){
        target.addTempSkill('yunlinglong_off');
        target.chooseDrawRecover(2,true,get.prompt('yunlinglong'));
        player.say(["七巧玲珑心！","夫君，切勿操劳。"].randomGet());
    },
                ai:{
                    order:3,
                    expose:1,
                    result:{
                        target:10,
                    },
                },
            },
            "yunlinglong_off":{
                charlotte:true,
                superCharlotte:true,
            },
            yunquhu:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            return current.countCards('h');
        });
    },
                filterTarget:function(card,player,target){
        return player.canCompare(target)&&!target.hasSkill('yunquhu_off');
    },
                content:function(){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        target.addTempSkill('yunquhu_off');
        if(result.bool){
            if(game.hasPlayer(function(player){
                return player!=target;
            })){
                player.recover();
                player.chooseTarget(function(card,player,target){
                    var source=_status.event.source;
                    return target!=source;   
                },true).set('ai',function(target){
                    return get.damageEffect(target,_status.event.source,player);
                }).set('source',target);
            }
            else{
                event.finish();
            }
        }
        else{
            player.damage(target);
            delete player.getStat('skill').yunquhu;
            event.finish();
        }
        "step 2"
        if(result.bool&&result.targets&&result.targets.length){
            target.line(result.targets[0],'green');
            result.targets[0].damage(target);
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var oc=(target.countCards('h')==1);
                if(att>0&&oc) return 0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i]!=target&&players[i]!=player&&
                        target.inRange(players[i])){
                        if(get.damageEffect(players[i],target,player)>0){
                            return att>0?att/2:att-(oc?5:0);
                        }
                    }
                }
                return 0;
            },
                        player:function(player,target){
                if(target.hasSkillTag('jueqing',false,target)) return -10;
                var mn=1;
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    mn=Math.max(mn,hs[i].number);
                }
                if(mn<=11&&player.hp<2) return -20;
                var max=player.maxHp-hs.length;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(get.attitude(player,players[i])>2){
                        max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                    }
                }
                switch(max){
                    case 0:return mn==13?0:-20;
                    case 1:return mn>=12?0:-15;
                    case 2:return 0;
                    case 3:return 1;
                    default:return max;
                }
            },
                    },
                    expose:0.2,
                },
            },
             yunquhu_off:{
                        charlotte:true,
                        superCharlotte:true,
                        sub:true,
                    },
            yunwangzuo:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damage",
                },
                popup:false,
                forced:true,
                filterTarget:function(card,player,target){
        return player.canCompare(target)&&!target.hasSkill('yunwangzuo_off');
    },
                content:function(){
        "step 0"
        if(player.hp<player.maxHp){
            player.draw(player.maxHp-player.hp);
        }
        "step 1"
        player.chooseTarget(get.prompt('yunwangzuo'),'令一名角色将手牌补充至体力上限。',function(card,player,target){
            return player!=target&&!target.hasSkill('yunwangzuo_off');
        }).set('ai',function(target){
            return get.attitude(player,target);
            var att=get.attitude(player,target);
            var att2=player.maxHp-player.hp;
            var att3=Math.min(5,target.maxHp)-target.countCards('h');
            if(target.hasSkillTag('nogain')) att/=6;
            if(att2<att3) return att*att3;
            if(att2>att3) return att*att2
            if(att2=att3) return att*att2;
        });
        'step 2'
        if(result.bool){
            player.logSkill('yunwangzuo',target);
            player.say(["生食汉禄，死为汉臣。","大汉岂能无守节的臣子乎！"].randomGet());
            var target=result.targets[0];
            if(target.maxHp>target.countCards('h')){
                target.draw(Math.min(5,target.maxHp-target.countCards('h')));
                }else{
                    target.draw(player.maxHp-player.hp);
                    target.addTempSkill('yunwangzuo_off');
                    }
            }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'damage')&&target.hp>2){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    var max=0;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])>0){
                            max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                        }
                    }
                    switch(max){
                        case 0:return 2;
                        case 1:return 1.5;
                        case 2:return [1,2];
                        default:return [0,max];
                    }
                }
                if((card.name=='tao'||card.name=='caoyao')&&
                    target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
            },
                    },
                },
            },
            yunwangzuo_off:{
               charlotte:true,
               superCharlotte:true,
                    },
            yunqiaobian:{
                enable:"phaseUse",
                audio:"yunqiaobian_backup",
                mark:true,
                marktext:"巧变",
                intro:{
                    content:function(storage,player){
                    var qbcs=player. storage.shanlve;
                    return '<div>还可使用'+(qbcs)+'次【巧变】</span></div>';
                    },
                },
                init:function (player){
                player. storage.shanlve=1;
                player.markSkill('shanlve');
                player.syncStorage('shanlve');
    },
                filter:function(event,player){
        if(player.hasSkill('yunqiaobian_off')||player. storage.shanlve<1) return false;
        var hs=player.getCards('h');
        if(!hs.length) return false;
        for(var i=0;i<hs.length;i++){
            var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
        if(mod2===false) return false;
        }
        return true;
    },
                chooseButton:{
                    dialog:function(player){
            var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                if(get.type(lib.inpile[i])=='basic') list.push(['基本','',lib.inpile[i]]);
                if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
            }
            return ui.create.dialog(get.translation('yunqiaobian'),[list,'vcard']);
        },
                    filter:function(button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            if(player.countCards('h',button.link[2])>0) return 0;
            if(button.link[2]=='wugu') return 0;
            var effect=player.getUseValue(button.link[2]);
            if(effect>0) return effect;
            return 0;
        },
                    backup:function(links,player){
            return {
                filterCard:true,
                selectCard:1,
                position:'hes',
                audio:"ext:云将/audio:2",
                popname:true,
                viewAs:{name:links[0][2]},
                onuse:function(result,player){
                    player. storage.shanlve--;
                    if(player. storage.shanlve<=0){
                    player.addTempSkill("yunqiaobian_off")
                    }
                },
            }
        },
                    prompt:function(links,player){
            return '将一张牌当做'+get.translation(links[0][2])+'使用';
        },
                },
                mod:{
                    aiOrder:function(player,card,num){
            if(get.itemtype(card)=='card'&&card.hasGaintag('yunqiaobian')) return num+1;
        },
                },
                ai:{
                    threaten:1.5,
                    order:6,
                    result:{
                        player:function(player){
                var allshown=true,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].ai.shown==0){
                        allshown=false;
                    }
                    if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
                        return 1;
                    }
                }
                if(allshown) return 1;
                return 0;
            },
                    },
                },
                group:["yunqiaobian_sx"],
                subSkill:{
                    sx:{
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                        return player. storage.shanlve<=0;
                        },
                        content:function(){
                        player. storage.shanlve++;
                        player.markSkill('shanlve');
                        player.syncStorage('shanlve');
                        },
                        sub:true,
                        },
                        backup:{
                        audio:"ext:云将/audio:2",
                        sub:true,
                        },
                    },
                },
                yunqiaobian_off:{
                        charlotte:true,
                        superCharlotte:true,
                        sub:true,
                        },
        yunshanlve:{
        audio:"ext:云将/audio:2",
        trigger:{
            player:"damageEnd",
        },
        forced:true,
        content:function(){
        "step 0"
        event.num=trigger.num;
        player.say(["膝盖中了一箭！","就这？！"].randomGet());
        "step 1"
        player.judge();
        "step 2"
        if(result.color=='black'){
            player. storage.shanlve++;
             player.markSkill('shanlve');
             player.syncStorage('shanlve');
            if(player. storage.shanlve>0){
            player.removeSkill('yunqiaobian_off');
            }
        }else{
            player.draw(2);
        }
        'step 3'
        event.num--;
        if(event.num>0){
                event.goto(1);
            }        
    },
            },
            yunjieyi:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                filterCard:function(card){
        return get.suit(card)=='heart';
    },
                selectCard:1,
                position:"hes",
                usable:1,
                viewAs:{
                    name:"taoyuan",
                },
                filter:function(event,player){
        return player.countCards('hes',{suit:'heart'})>0;
    },
                prompt:"将一张红桃牌当作【桃园结义】使用",
                check:function(card){
        return 7-get.useful(card)
    },
                group:["yunjieyi_a"],
                ai:{
                    threaten:1.5,
                    basic:{
                        order:function(){
                return 11;
            },
                        useful:[3,1],
                        value:0,
                    },
                    result:{
                        target:function(player,target){
                return (target.hp<target.maxHp)?2:0;
            },
                    },
                    tag:{
                        recover:0.5,
                        multitarget:1,
                    },
                },
                subSkill:{
                    a:{
                        trigger:{
                            global:"recoverAfter",
                        },
                        filter:function(event,player){
        return event.card&&event.card.name=='taoyuan';
    },
                        forced:true,
                        popup:false,
                        content:function(){
     player.draw();
    },
                        sub:true,
                    },
                },
            },
            yunniepan:{
                mark:true,
                unique:true,
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },               
                forced:true,
                content:function(){
                if(player.maxHp<9){
                player.gainMaxHp();
                }
                player.recover();
                },
                ai:{
                    threaten:9,
                },
                group:["yunniepan_a","yunniepan_b"],
                subSkill:{
                    a:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        popup:false,
                        forced:true,
                        content:function(){
                        trigger.num=player.maxHp;
                        },
                        ai:{
                            threaten:1.5,
                        },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            player:"gainMaxHpBefore",
                        },
                        popup:false,
                        forced:true,
                        filter:function(event,player){
                        return player.maxHp>=9;
                        },
                        content:function(){
                        trigger.cancel();
                        },
                        ai:{
                            threaten:1.5,
                        },
                        sub:true,
                    },
                },
            },
            yunshouji:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                filterTarget:function(card,player,target){
        if(target==player) return false;
        var stat=player.getStat('skill').yunshouji_targets;
        return !stat||!stat.contains(target);
    },
                filter:function(event,player){
        return player.countCards('h')>0&&game.hasPlayer((current)=>lib.skill.yunshouji.filterTarget(null,player,current));
    },
                lose:false,
                delay:false,
                filterCard:true,
                content:function(){
        target.gain(cards,player,'giveAuto').gaintag.add('yunshouji');
        target.addTempSkill('yunjinnang',{player:'shouji'});
        var stat=player.getStat('skill');
        if(!stat.yunshouji_targets) stat.yunshouji_targets=[];
        stat.yunshouji_targets.push(target);
    },
                check:function(card){
        return 6-get.value(card);
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                return 1;
            },
                    },
                },
            },
            yunjinnang:{
                mark:true,
                marktext:"锦囊",
                intro:{
                    name:"计",
                    content:"快打开丞相给的【锦囊】",
                },
                enable:"phaseUse",
                audio:"yunshouji",
                filter:function(event,player){
                return player.getCards('h',function(card){
                    return card.hasGaintag('yunshouji');
                }).length>0;
        var hs=player.getCards('h');
        if(!hs.length) return false;
        for(var i=0;i<hs.length;i++){
            var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
        if(mod2===false) return false;
        }
        return true;
    },
                chooseButton:{
                    dialog:function(player){
            var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
            }
            return ui.create.dialog(get.translation('yunjinnang'),[list,'vcard']);
        },
                    filter:function(button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                    return (button.link[2]=='juedou')?2:-1;
                }
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function(links,player){
            return {
                filterCard:function(card,player){
                    return card.hasGaintag('yunshouji');
                    },
                selectCard:1,
                position:'h',
                audio:"yunshouji",
                popname:true,
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function(links,player){
            return '打开〖锦囊〗使用一张'+get.translation(links[0][2])+'';
        },
                },
                mod:{
                    aiOrder:function(player,card,num){
            if(get.itemtype(card)=='card'&&card.hasGaintag('yunshouji')) return num+1;
        },
                },
                ai:{
                    order:7,
                    result:{
                        player:function(player){
                var allshown=true,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].ai.shown==0){
                        allshown=false;
                    }
                    if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
                        return 1;
                    }
                }
                if(allshown) return 1;
                return 0;
            },
                    },
                },
                group:["yunjinnang_a"],
                subSkill:{
                a:{
                trigger:{
                player:"loseEnd",
    },
                forced:true,
                popup:false,
                silent:true,
                filter:function(event,player,card){
        return player.getCards('h',function(card){
                    return card.hasGaintag('yunshouji');
                }).length==0;
    },
                content:function(){
                event.trigger('shouji')
                },
                sub:true,
                   },
                },
            },
            yunyingshi:{
                audio:"ext:云将/audio:2",
                derivation:["yunlanggu"],
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
                return player.getExpansions('yunrenjie').length>=Math.ceil(game.players.length);
                },
                content:function(){
                "step 0"
                player.maxHp=5;
                player.awakenSkill(event.name);
                player.addSkill('yunlanggu');
                player.addTempSkill('yunyingshia');
                "step 1"
                player.say(["现在是时候了！","忍无可忍，无需再忍！"].randomGet());
                player.gain(player.getExpansions('yunrenjie'),'gain2','fromStorage');
                "step 2"
                player.removeSkill('yunrenjie');
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsimayi'&&game.yjGetQhlySkin('yunsimayi')=='yunsimayi4.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yunsimayi4a.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsimayi'&&game.yjGetQhlySkin('yunsimayi')=='yunsimayi5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yunsimayi5a.jpg');
                }
            },
        },
            yunyingshia:{
                trigger:{
                    player:"phaseDrawBefore",
                },
                forced:true,
                popup:false,
                content:function(){ 
                trigger.cancel(); 
                },
            },
            yunrenjie:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:["damageEnd"],
                },
                forced:true,
                filter:function(event,player){
                return player.getExpansions('yunrenjie').length< Math.ceil(game.players.length);
                },
                content:function(){
                "step 0"
                player.draw();
                player.say(["还不到时候！还不到时候！","筹权谋变，静候天时。"].randomGet());
                'step 1'
                if(player.countCards('he')<1){
                event.finish();
                } 
                else player.chooseCard('he',true,'选择一张牌置于'+get.translation(player)+'的武将牌上作为「忍」').set('ai',function(card){
                var player=_status.event.player;
                if(player.hasUseTarget(card)&&!player.hasValueTarget(card)) return 0;
                if(['wuxie',].contains(card.name)) return 2+Math.random();
                return 1+Math.random();
                }).set('complexCard',true);
                'step 2'
                game.log(player,'选择了',result.cards);
                player.addToExpansion(result.cards,player,'give').gaintag.add('yunrenjie');
                },
                intro:{
                content:"expansion",
                markcount:"expansion",
                },
                onremove:function(player,skill){
                var cards=player.getExpansions(skill);
                if(cards.length) player.loseToDiscardpile(cards);
                },
                ai:{
                    threaten:3,
                    combo:"yunyingshi",
                },
                group:["yunrenjie_a"],
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            player:["dying"],
                        },
                        forced:true,
                        content:function(){
                        player.gain(player.getExpansions('yunrenjie'),'gain2','fromStorage');
                        },
                        sub:true,
                        },
                    },
                },
            yunlanggu:{
                audio:"ext:云将/audio:2",
                mod:{
                    targetInRange:function(card,player){
                    if(player.hp>=1) return true;
                    },
                    cardUsable:function(card,player){
                    if(player.hp>=2) return Infinity;
                    },
                },
                group:["yunlanggu_a","yunlanggu_b"],
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function(event,player){
                if(player.hp<3) return false;
                var card=event.card;
                var info=get.info(card);
                if(info.allowMultiple==false) return false;
                if(event.targets&&!info.multitarget){
                if(game.hasPlayer(function(current){
                return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current);
                })){
                return true;
                }
            }
                 return false;
            },
                content:function(){
                'step 0'
                var prompt2='是否为'+get.translation(trigger.card)+'增加一个目标';
                player.chooseTarget(get.prompt('yunlanggu'),function(card,player,target){
                var player=_status.event.player;
                return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
                }).set('prompt2',prompt2).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
                }).set('card',trigger.card).set('targets',trigger.targets);
                'step 1'
                if(result.bool){
                if(!event.isMine()) game.delayx();
                event.targets=result.targets;
                }else{
                event.finish();
                }
                'step 2'
                if(event.targets){
                player.logSkill('yunlanggu',event.targets);
                trigger.targets.addArray(event.targets);
                }
            },
                effect:{
                    player:function(card,player,target){
                    if(player.hp<2&&card.name=='tao'){
                    return [0,1.5];
                    }
                },
            },
                subSkill:{
                    a:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        filter:function(event,player){
                        return !event.numFixed&&player.maxHp-player.hp>=2;
                        },
                        content:function(){
                        trigger.num++;
                        },
                        ai:{
                            threaten:1.5,
                        },
                        mod:{
                            maxHandcardBase:function(player,num){
                            if(player.maxHp-player.hp>=1) return player.maxHp;
                            },
                        },
                        sub:true,
                        },
                        b:{
                        audio:"ext:云将/audio:1",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        filter:function(event,player){
                        return !event.numFixed&&player.maxHp-player.hp>=3;
                        },
                        content:function(){
                        "step 0"
                        player.chooseToDiscard('是否弃置牌？',[1,Infinity],'h').set('ai',function(card){
                        return 6 - ai.get.value(card); 
                        });
                        "step 1"
                        player.draw(player.maxHp-player.countCards('h'));
                        },
                        ai:{
                            maixie:true,
                            effect:{
                                target:function(card,player,target){
                                if(get.tag(card,'damage')){
                                if(!target.hasFriend()) return;
                                if(target.hp>3) return [0,1.5];
                                }
                                if(get.tag(card,'recover')&&player.hp>=player.maxHp-2) return [0,0];
                                },
                            },
                        },
                        sub:true,
                        },
                    },
                },
                yunzhiheng:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                usable:3,
                filter:function(event,player){
                var type=get.type(event.card);
                return type=='trick';
                },
                content:function(){
                'step 0'
                var goon=false;
                var info=get.info(trigger.card);
                if(trigger.targets&&!info.multitarget){
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                goon=true;break;
                }
            }
        }
                if(goon){
                player.chooseTarget([1,Infinity],'制衡：是否额外指定任意名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
                var trigger=_status.event;
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
            }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                return get.effect(target,trigger.card,player,player);
                }).set('card',trigger.card).set('targets',trigger.targets);
                }else{
                if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                event.goto(3);
                }
            }
                'step 1'
                if(result.bool){
                if(!event.isMine()) 
                game.delayx();
                event.targets=result.targets;
                }else{
                event.finish();
                }
                'step 2'
                if(event.targets){
                player.logSkill('yunzhiheng',event.targets);
                trigger.targets.addArray(event.targets);
                }
                event.finish();
                'step 3'
                player.chooseTarget([1,Infinity],'制衡：是否减少任意名名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
                return _status.event.targets.contains(target);
                }).set('ai',function(target){
                var trigger=_status.event.getTrigger();
                return -get.effect(target,trigger.card,trigger.player,_status.event.player);
                }).set('targets',trigger.targets);
                'step 4'
                if(result.bool){
                event.targets=result.targets;
                if(event.isMine()){
                player.logSkill('yunzhiheng',event.targets);
                event.finish();
                }
                for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
                }
                game.delay();
                }else{
                event.finish();
                }
                'step 5'
                player.logSkill('yunzhiheng',event.targets);
                },
                group:["yunzhiheng_jc"],
                subSkill:{
                jc:{
                audio:"ext:云将/audio:2",
                trigger:{
                     player:"damageEnd",
                },
                forced:true,
                round:1,
                content:function(){
                    var card=get.cardPile(function(card){ 
                    return get.type2(card)=='trick'; 
                    }); 
                    event.card=card; 
                    if(card) player.gain(card,'gain2');                    
                },
                sub:true,
                },
            },
        },     
                        yunhuju:{
                        trigger:{
                            global:"gameStart",
                        },
                        forced:true,
                        audio:"ext:云将/audio:2",
                        filter:function(event,player){
                        return player.identity!=='zhu';
                        },
                        content:function(){
                        player.gainMaxHp();
                        },
                    },                
            yunjianye:{
                audio:"ext:云将/audio:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
                return target!=player;
                },
                derivation:"yunhuangwu",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
                if(player.hasZhuSkill('yunjianye')){
                player.markSkill('yunjianye');
                player.storage.yunjianye=false;
                }
            },
                filter:function(event,player){
                return player.hasZhuSkill('yunjianye');
                return player.storage.yunjianye==false;
                },
                enable:"phaseUse",
                content:function(){
                "step 0"
                player.storage.yunjianye=true;
                player.awakenSkill("yunjianye");
                game.log(target,'成为了目标');
                target.gainMaxHp();
                "step 1"
                var card=get.cardPile(function(card){
                return get.type(card)=='basic'; 
                }); 
                event.card=card; 
                'step 2' 
                var list=['tao'];
                target.gain(game.createCard(list.randomGet()),'gain2');
                'step 3' 
                target.changeGroup('wu');
                player.addSkill('yunhuangwu');
                player.say("十万对八百，此战优势在我！");
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunsunquan'&&!game.yjGetQhlySkin('yunsunquan')){
                player.node.avatar.setBackgroundImage('extension/云将/yunsunquana.jpg');
                }
            },
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
                "audioname2":{
                    yuanshu:"weidi",
                },
            },
            yunhuangwu:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"recoverEnd",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
                return player!=event.player&&event.player.group=='wu'&&event.getParent().name!='yunhuangwu';
                },
                content:function(){
                'step 0'
                trigger.player.chooseBool('是否对'+get.translation(player)+'发动【黄武】？','你令其回复一点体力或摸两张牌').set('ai',function(){
                var evt=_status.event;
                return get.attitude(evt.player,evt.getParent().player)>0;
                });
                'step 1'
                if(result.bool){
                player.logSkill('yunhuangwu');
                trigger.player.line(player,'green');
                player.chooseDrawRecover(2,true,get.prompt('yunhuangwu'));
                }
            },
        },
            yunfujian:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return !game.hasPlayer(function(current){
                    return current.hasSkill('yunkunlong');
                });
            },
                check:function (event,player){
                return get.attitude(player,event.player)<0;
                },
                content:function(){
                'step 0'
                player.chooseTarget('是否选择一名角色观看其手牌', function (card, player,target){
                return target!=player&&player.inRange(target)&&target.countCards('h') > 0;
                }).set('ai', function(target){
                return 1-get.attitude(_status.event.player, target);
                });
                'step 1'
                if(result.bool){
                player.logSkill('yunfujian',event.targets);
                event.target=result.targets[0];
                player.chooseButton(['选择'+get.translation(event.target)+'的一张牌标记为〖间〗', event.target.getCards('h')],true).set('ai', function(button){
                return get.attitude(player,event.target)<=0;
                var target=event.target;
                var card=button.link;
                var val=target.getUseValue(card);
                if (val>0) return val;
                return get.value(card);
                });
            }else{
                event.finish();
                }
                'step 2'
                if(result.bool){
                player.storage.yunfujiana=event.target;
                player.storage.yunfujianb=result.links[0];
                player.addSkill('yunfujiana');
                event.target.addTempSkill('yunkunlong','fujian');
                }
            },
        },
            yunfujiana:{
                audio:"yunfujianb",
                mark:true,
                marktext:"伏间",
                intro:{
                name:"伏间",
                mark:function(dialog,content,player){
                dialog.addText('〖间〗潜伏的角色');
                dialog.add([content]);
                if(player==game.me||player.isUnderControl()){
                dialog.addText('〖间〗标记的手牌');
                dialog.add([player.storage.yunfujianb]);
                }
            },
        },
                onremove:function(player){
                delete player.storage.yunfujiana;
                delete player.storage.yunfujianb;
                },
                trigger:{
                    global:["dieEnd","loseEnd","gainEnd"],
                },
                forced:true,
                silent:true,
                lastDo:true,
                charlotte:true,
                superCharlotte:true,
                filter:function(event,player){
                if(event.name!='gain'&&event.player!=player.storage.yunfujiana) return false;
                return event.name=='die'||(event.cards.contains(player.storage.yunfujianb)&&(event.name=='gain'||event.position!=ui.ordering&&event.position!=ui.discardPile));
                },
                content:function(){
                player.removeSkill('yunfujiana');
                event.trigger('fujian');
                },
                group:["yunfujianb"],
                },
                yunfujianb:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:["loseAfter","useCard","cardsDiscardAfter"],
                },
                filter:function(event,player){
                if(event.player&&event.player!=player.storage.yunfujiana) return false;
                if(event.name=='phase') return event.player.getCards('he').contains(player.storage.yunfujianb);
                if(!event.cards.contains(player.storage.yunfujianb)) return false;
                return event.name=='useCard'||get.position(player.storage.yunfujianb,true)=='d'||event.position==ui.discardPile;
                },
                forced:true,
                charlotte:true,
                superCharlotte:true,
                logTarget:"player",                
                content:function(){
                if(trigger.name=='useCard'){
                trigger.all_excluded=true;
                trigger.targets.length=0;
                trigger.player.draw();
                event.trigger('fujian');
                player.removeSkill('yunfujiana');
                }else{
                if(trigger.name=='phase'){
                event.trigger('fujian');
                player.removeSkill('yunfujiana');     
                }else if(get.position(player.storage.yunfujianb,true)=='d'){
                event.trigger('fujian');
                player.removeSkill('yunfujiana');     
                } 
             }
        },
    },
            yunkunlong:{
                mark:true,
                marktext:"困龙",
                forced:true,
                charlotte:true,
                superCharlotte:true,
                intro:{
                mark:function(dialog,content,player){
                return game.hasPlayer(function(current){
                if(current.hasSkill('yunfujian')){
                if(current==game.me||current.isUnderControl()){
                var kl=player.getCards('h');
                if(kl.length){
                dialog.addSmall(kl);
                }else{
                dialog.addText('无手牌');
                }
            }
        }
    }); 
},
                content:function(content,player){
                var kl=player.getCards('h');
                if(kl.length){
                return get.translation(kl);
                }else{
                return '无手牌';
                }
            },
        },
    },
            yunlingrenxiaoxiong:{
                audio:"ext:云将/audio:3",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                   return player.isTurnedOver()||player.getDamagedHp()>0||player.isLinked();
                },
                content:function(){   
                player.recover(); 
                player.link(false);
                player.turnOver(false);
                player.logSkill('yunlingrenxiaoxiong',event.targets);
                },
                mod:{
                maxHandcard:function(player,num){
                if(player.hp<player.maxHp){
                return num+player.maxHp-player.hp;
                }
            },
        },
    },
            yunlingren:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                onremove:true,
                direct:true,
                unique:true,
                usable:1,
                group:["yunlingrenxiaoxiong"],
                init:function(player){
                player.storage.yunlingren=[];
                },
                intro:{
                    content:"characters",
                },
                filter:function(event,player){
                if(event.getParent().triggeredTargets3.length>1) return false;
                if(!['basic','trick'].contains(get.type(event.card))) return false;
                if(get.tag(event.card,'damage')) return true;
                return false;
                },
                content:function (){
                'step 0'
                player.chooseTarget(get.prompt('yunlingren'),'选择一名目标角色并猜测其手牌构成',function(card,player,target){
                return _status.event.targets.contains(target);
                }).set('ai',function(target){
                return 2-get.attitude(_status.event.player,target);
                }).set('targets',trigger.targets);
                'step 1'
                if(result.bool){
                player.logSkill('yunlingren',result.targets);
                var target=result.targets[0];
                event.target=target;
                event.choice={
                basic:false,
                trick:false,
                equip:false,
                }
                player.chooseBool('是否押基本牌？').ai=function(event,player){
                var rand=0.95;
                if(!target.countCards('h',{type:['basic']})) rand=0.05;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
                };
            }else{
            player.storage.counttrigger.yunlingren--;
            event.finish();
            }
            'step 2'
            if(result.bool){
            event.choice.basic=true;
            }
            player.chooseBool('是否押锦囊牌？').ai=function(event,player){
            var rand=0.9;
                if(!target.countCards('h',{type:['trick','delay']})) rand=0.1;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
            };
            'step 3'
            if(result.bool){
            event.choice.trick=true;
            }
            player.chooseBool('是否押装备牌？').ai=function(event,player){
            var rand=0.75;
                if(!target.countCards('h',{type:['equip']})) rand=0.25;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
            };
            'step 4'
            if(result.bool){
            event.choice.equip=true;
            }
            game.delay();
            var reality={
            basic:false,
            trick:false,
            equip:false,
            }
            var he=target.getCards('h');
            for(var i=0;i<he.length;i++){
            reality[get.type(he[i],'trick')]=true;
            }
            event.num=0;
            var tl=['basic','trick','equip'];
            for(var i=0;i<tl.length;i++){
            if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
            }
            'step 5'
            player.popup('猜对'+get.cnNumber(event.num)+'项');
            game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
            if(event.num>0){        
            player.draw(event.num);
            }        
            if(event.num>1){        
            target.addTempSkill('yunlingrena');
            target.storage.yunlingren={
                card:trigger.card,
            }
            player.say(["将军一副好骨，不如留于此山！","精兵如炬，困龙难飞。"].randomGet());
            }   
            if(event.num>2){
            event.trigger('yunlingren');
            if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&!game.yjGetQhlySkin('yuncaoying')){        
            if(Math.random()>1/2){
            player.node.avatar.setBackgroundImage('extension/云将/yuncaoyinga.jpg');
            }else{
            player.node.avatar.setBackground('yuncaoying','character');
            }
        }
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying1.jpg'){        
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying1a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character');
             }
        }
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying2.jpg'){        
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying2a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character');
             }
        }
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying3.jpg'){        
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying3a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character');
             }
        }
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying4.jpg'){
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying4a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character'); 
             }
        }
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying5.jpg'){
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying5a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character'); 
             }
        }     
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying7.jpg'){
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying7a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character'); 
             }     
        }        
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying8.jpg'){
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying8a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character');
             }
        }      
             if(event.num==3&&lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaoying'&&game.yjGetQhlySkin('yuncaoying')=='yuncaoying9.jpg'){
             if(Math.random()>1/2){
             player.node.avatar.setBackgroundImage('extension/云将/yuncaoying9a.jpg');
             }else{
             player.node.avatar.setBackground('yuncaoying','character'); 
             }
        }                          
        var list=[];
        var list2=[];
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list2.add(players[i].name);
            list2.add(players[i].name1);
            list2.add(players[i].name2);
        }
        for(var i in lib.character){
            if(lib.character[i][1]!='wei') continue;
            if(lib.character[i][4].contains('boss')) continue;
            if(lib.character[i][4].contains('minskin')) continue;
            var banlist=['caocao','guojia','simayi','xiahoudun','xuzhu','zhangliao','zhenji','re_zhenji','caoying','yuncaoying','xf_tangzi','heyan','xunyou','cuiyan','caoanmin','xinpi','old_caoren','jsp_caoren','old_jiakui','re_xiahouyuan','xiahouyuan','licaiwei','dianwei','xunyu','re_caopi','xuhuang','dengai','re_dengai','ol_dengai','caozhi','yujin','zhangchunhua','re_zhangchunhua','caozhang','xin_caozhang','re_caozhang','zhonghui','guohuai','ol_guohuai','yujin_yujin','xin_yujin','xin_zhonghui','old_wangyi','xin_guohuai','re_zhonghui','liuye','tw_caoang','kuailiangkuaiyue','sunziliufang','wangji','wenyang','xin_xiahoudun','re_xiahoudun','manchong','caozhen','xin_caozhen','old_caozhen','chenqun','old_chenqun','re_chenqun','hanhaoshihuan','caoxiu','old_caoxiu','guohuanghou','ol_bianfuren','jsp_guanyu','duji','zhangchangpu','ol_zhangchangpu','re_niujin','sp_xinxianying','dufuren','wangshuang','simazhao','sp_simazhao','caizhenji','guanqiujian','wenpin','old_majun','old_caochun','caohong','yuanhuan','re_guanqiujian','zhanghe','old_guanqiujian','zhanggong','sp_pangde','re_zhanggong','sp_jiangwei','sp_bianfuren','sp_huaxin','ns_xinxianying','re_xinxianying','diy_liufu','old_zhonghui','yunsimayi','yj_caoang','yuncaocao','ns_caoshuang','zangba','luzhi','ol_zhuling','yuejin','simalang','lvqian','litong','jikang','re_jikang','ns_guanlu','ol_xinxianying','re_lidian','tw_caozhao','tw_caohong','re_caozhi','re_xuhuang','chenlin','tw_guohuai','sp_jiaxu','simafu','caoang','huaxin','ol_huaxin','yangxiu'];
            if(banlist.contains(i)) continue;
            list.push(i);
        }
        var name=list.randomGet();
        var skills=lib.character[name][3];
        for(var i=0;i<skills.length;i++){
            if(!lib.skill[skills[i]].juexingji&&!lib.skill[skills[i]].charlotte&&!lib.skill[skills[i]].dutySkill&&!lib.skill[skills[i]].hiddenSkill) 
                player.addTempSkill(skills[i],{player:'yunlingren'});
                player.storage.zhuSkill_yunlingren=[skills[i]];
            }
            event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【凌人】',[[name],'character']);
            game.delay(2);
            }
            'step 6'
            if(event.num>2){
            event.dialog.close();
            }        
        },
             ai:{                    
             threaten:3,
                },
            },
            yunlingrena:{
                charlotte:true,
                superCharlotte:true,
                onremove:function (player){
                delete player.storage.yunlingren;
                },
                trigger:{
                    player:"damageBegin3",
                },
                filter:function (event,player){
                var info=player.storage.yunlingren;
                return event.card&&event.card==info.card;
                },
                silent:true,
                popup:false,
                forced:true,
                content:function(){
                trigger.num++;
                },
            },
            yunyugui:{
                audio:"ext:云将/audio:4",
                trigger:{
                    player:["phaseZhunbeiBefore","phaseJieshuEnd"],
                },
                forced:true,
                popup:false,
                unique:true,                
                content:function(){
        'step 0'
        player.chooseTarget('是否发动【驭鬼】选择一名角色令其获得一个你选择的技能',function(card,player,target){
            return !target.hasSkill('yunyugui_off');
            }).set('ai',function(target){
            var player=_status.event.player;
            var att=get.attitude(player,target);
            if(target==player){
            return 10+att;
            }
            return att;
        });
        'step 1'
        if(result.bool){
        var target=result.targets[0];
        event.target=target;
        player.line(target,'green');
        player.logSkill('yunyugui',event.targets);
        var list=[];
        if(!_status.characterlist){
            if(_status.connectMode) var list=get.character();
            else{
                var list=[];
                for(var i in lib.character){
                    if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
                    list.push(i);
                }
            }
            game.countPlayer2(function(current){
                list.remove(current.name);
                list.remove(current.name1);
                list.remove(current.name2);
                if(current.storage.rehuashen&&current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
            });
            _status.characterlist=list;
        }        
        _status.characterlist.randomSort();
        var chara=[];
        var skills=[];
        for(var i of _status.characterlist){        
            var character=lib.character[i];
            var banlist=['zhaoxiang','tw_zhaoxiang','shen_luxun','zhangji','re_sunyi','yanghuiyu','re_sunxiu','yunsunshangxiang','old_lingju','yundongbai','xinpi','re_baosanniang','sp_pangtong','yanpu','yunjiangwei','yunzhaoxiang','yuncaoying','yunzuoci','yuncaocao','yunlvmeng','yunxushi','yunsimayi'];
            if(banlist.contains(i)) continue;
            list.push(i);
            if(character&&character[3]){
                for(var j of character[3]){                    
                    var info=get.info(j);
                if(lib.config.fengyunzaiqi2){
                    if(info&&!info.limited&&!info.juexingji){
                        skills.add(j);
                        chara.add(i);
                        continue;
                    }
                }else{
                    if(info&&info.limited&&!info.zhuSkill){
                        skills.add(j);
                        chara.add(i);
                        continue;
                        }
                    }
                }
            }
            if(skills.length>=3) break;
        }
        if(!skills.length){event.finish();return}
        event.chara=chara;
        event.skills=skills;
        player.chooseControl(skills).set('dialog',['选择令'+get.translation(target)+'获得一个技能',[chara,'character']]);
            }else{ 
            event.finish(); 
        } 
        'step 2'
        event.trigger('yugui')
        player.say(["天法地，地法道，道法自然！","天法地，地法……蒂法是耶路撒冷！"].randomGet());
        target.addTempSkill(result.control,{target:'yugui'});
        target.addTempSkill('yunyugui_off','roundStart');
        target.restoreSkill(result.control);
        target.storage.zhuSkill_yunyugui=[result.control];
        target.setAvatarQueue(target.name1||target.name,[event.chara[event.skills.indexOf(result.control)]]);        
    },
                ai:{
                    expose:0.5,
                    threaten:0.5,
                },
            },
            "yunyugui_off":{
            charlotte:true,
            superCharlotte:true,
            },
            yunfengyin:{
                init:function(player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function(player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                superCharlotte:true,
                skillBlocker:function(skill,player){
        return !lib.skill[skill].charlotte;
    },
                mark:true,
                marktext:"封印",
                intro:{
                    content:function(storage,player,skill){
            var list=player.getSkills(null,false,false).filter(function(i){
                return lib.skill.baiban.skillBlocker(i,player);
            });
            if(list.length) return '武将技能已失效';
            return '无失效技能';
        },
                },
            },
            yunchengzhi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"roundStart",
                },
                unique:true,
                content:function(){
        "step 0"
        var c=[1,2,3].randomGet();
        if(c==1){
            if(player.hasSkill('yunqixing')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunqixing",{player:'chengzhi'});
                player.popup('yunqixing');
                }
        };
        if(c==2){
            if(player.hasSkill('yunbazhen')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunbazhen",{player:'chengzhi'}); 
                player.popup('yunbazhen');
                }
        }
        if(c==3){
            if(player.hasSkill('yunshouji')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunshouji",{player:'chengzhi'});
                player.popup('yunshouji');
                }
        }
        "step 1"
        player.storage.chengzhi++;
        player.markSkill('chengzhi');
        player.syncStorage('chengzhi');
    },
            },
            yunchengzhig:{
                audio:"yunchengzhi",
                trigger:{
                    global:"roundStart",
                },
                unique:true,
                forced:true,
                content:function(){
        "step 0"
        var c=[1,2,3].randomGet();
        if(c==1){
            if(player.hasSkill('yunqixing')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunqixing",{player:'chengzhi'});
                player.popup('yunqixing');
                }
        };
        if(c==2){
            if(player.hasSkill('yunbazhen')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunbazhen",{player:'chengzhi'}); 
                player.popup('yunbazhen');
                }
        }
        if(c==3){
            if(player.hasSkill('yunshouji')){
                event.goto(0); 
            }else{
                event.trigger('chengzhi');
                player.addTempSkill("yunshouji",{player:'chengzhi'});
                player.popup('yunshouji');
                }
        }
    },
            },
            yunqilin:{
                derivation:["yunjueji","yunjuezhen"],
                audio:"ext:云将/audio:2",
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                mark:true,
                marktext:"麒麟",
                usable:1,
                init:function(player,skill){
        player.storage[skill]=false;
        player.storage.chengzhi=0;
        player.markSkill('chengzhi');
        player.syncStorage('chengzhi');
    },
                intro:{
              content:function(storage,player){      
            var cz=player.storage.chengzhi;
            var ss=player.storage.yunqilin_ss;
            return '<div>【承志】已获得'+(cz)+'次技能<br>已累计造成／受到'+(ss)+'点伤害</span></div>';
        },
                },
                filter:function(event,player){
        return player.storage.chengzhi>=3;
    },
                content:function(){
        "step 0"
        player.awakenSkill(event.name);       
        player.removeMark('chengzhi',Infinity); 
        "step 1"
         if(player.storage.yunqilin_ss>3){
            player.say(["我，定不负丞相所望！"].randomGet());
            player.addSkill('yunjueji');
            player.addSkill('yunchengzhig');   
            player.removeSkill('yunchengzhi');       
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&!game.yjGetQhlySkin('yunjiangwei')){
            player.node.avatar.setBackgroundImage('extension/云将/yunjiangweia.jpg');
                 }
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&game.yjGetQhlySkin('yunjiangwei')=='yunjiangwei5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei5a.jpg');
                 }
            }
        if(player.storage.yunqilin_ss>5){
            player.say(["一切交给我，丞相且安心去吧～"].randomGet());
            player.addSkill('yunjuezhen');                  
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&!game.yjGetQhlySkin('yunjiangwei')){
            player.node.avatar.setBackgroundImage('extension/云将/yunjiangweib.jpg');
                }
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&game.yjGetQhlySkin('yunjiangwei')=='yunjiangwei5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei5b.jpg');
                 }
            }
        "step 2"
        if(player.hasSkill('yunjueji')||player.hasSkill('yunjuezhen')){
            player.loseMaxHp();
            player.removeMark('yunqilin_ss',Infinity);
            }
        if(!player.hasSkill('yunjueji')&&!player.hasSkill('yunjuezhen')){
            player.say(["丞相，请告诉我，该怎么做……"].randomGet());
            player.draw(3);
            player.restoreSkill('yunqilin');            
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&!game.yjGetQhlySkin('yunjiangwei')){
            player.node.avatar.setBackgroundImage('extension/云将/yunjiangweic.jpg');
                }
            if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunjiangwei'&&game.yjGetQhlySkin('yunjiangwei')=='yunjiangwei5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei5c.jpg');
                 }         
            }
    },
                group:["yunqilin_ss"],
                subSkill:{
                    ss:{
                        init:function(player){
                        player.storage.yunqilin_ss=0; 
                        },
                        mark:false,
                        trigger:{
                            source:"damageSource",
                            player:"damageAfter",
                        },
                        forced:true,
                        popup:false,
                        content:function(){ 
            player.storage.yunqilin_ss+=trigger.num; 
    },
                        sub:true,
                    },
                },
            },
            yunjuezhen:{
                audio:"ext:云将/audio:2",                
                        trigger:{
                            player:["chooseToRespondBegin","chooseToUseBegin"],
                        },
                        filter:function(event,player){
                if(event.responded) return false;
                if(!event.filterCard({name:'shan'},player,event)) return false;
                return !player.getEquip('bagua');
    },
                        check:function(event,player){
                if(event&&(event.ai||event.ai1)){
                var ai=event.ai||event.ai1;
                var tmp=_status.event;
                _status.event=event;
                var result=ai({name:'shan'},_status.event.player,event);
                _status.event=tmp;
                return result>0;
        }
                return true;
    },
                        content:function(){
               "step 0"
            player.logSkill('bagua_skill',event.targets);
            trigger.bagua_skill=true;
            player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5}).judge2=function(result){
            return result.bool;
        };
              "step 1"
            if(result.judge>0){
               trigger.untrigger();
               trigger.set('responded',true);
               trigger.result={bool:true,card:{name:'shan',isCard:true}}
        }
    },
                        ai:{
                            respondShan:true,
                        },
            },
            yunjueji:{
                audio:"ext:云将/audio:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function(card){
        if(ui.selected.cards.length==0) return true;
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.type(ui.selected.cards[i],'trick')==get.type(card,'trick')) return false;
        }
        return true;
    },
                complexCard:true,
                selectCard:[1,3],
                check:function(card) {
        return 10 - ai.get.value(card);
        var player=_status.event.player;
        var cards=ui.selected.cards||[];
        num =cards.length;
        var val=0,
            eff=0;
        for (var i=0;i<game.players.length; i++){
            if(!game.players[i].isIn()||game.players[i]==player||game.players[i].hasSkillTag('nodamage')) continue;
            eff=get.damageEffect(game.players[i],player,player);
            if (game.players[i].hp==1) eff*=1.5;
            val+=eff;
        }
        if (num==0){
            if (val<=0&&!player.isDamaged()) return 0;
            return 4-get.useful(card);
        } else if(num==1){
            if (player.isDamaged()&&get.recoverEffect(player,player,player)>0) return 6-get.useful(card);
            if (val>0) return 4-get.useful(card);
        } else if(num==2){
            if (val>0) return 3/Math.min(get.useful(card),1.5);
        } else if(num==3){
            return 2/Math.min(get.useful(card),1);
        }
        return -1;
    },
                content:function(){
                "step 0"
        if(cards.length>=1&&player.hasSkill('yunjuezhen')){
        var num=Math.max(1,player.maxHp-player.countCards('h'));        
        player.chooseDrawRecover(num,true);        
        }else{
        if(cards.length>=1){
           player.chooseDrawRecover(true);
        }
        }        
        if(cards.length>=2){
           game.countPlayer(function(current){
            if(current!=player){
                player.line(current,'green');
                current.chooseToDiscard('he',true);
            }
        });
      }              
        if(cards.length>=3){
           game.countPlayer(function(current){
            if(current!=player){
                player.line(current,'green');
                current.damage(player);
            }
        });        
      }             
    },
                ai:{
                    order:6,
                    result:{
                        player:1,
                    },
                },
            },
            yunchuandao:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"phaseDiscardBefore",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        return event.player!=player&&event.target!=player&&event.player.isIn()&&event.player.countCards('he')&&event.player.isDamaged();
    },
    content:function(){
        'step 0'
        trigger.player.chooseCardTarget({
            filterCard:true,
            selectCard:1,
            usable:1,
            position:'he',
            filterTarget:function(card,player,target){
                return target!=trigger.player&&target.hasSkill('yunchuandao');
            },
            ai1:function(card){
                return 9-get.value(card);
            },
            ai2:function(target){
                return get.attitude(_status.event.player,target);
            },
            prompt:'是否将一张牌交给一名拥有【传道】的角色？',
        });        
        "step 1"        
        if(result.bool&&result.targets[0]==player){                   
            player.gain(result.cards,trigger.player,'giveAuto');    
            }else{ 
            event.finish(); 
        }        
        'step 2'
        player.chooseBool('是否令'+get.translation(trigger.player)+'恢复一点体力？').set('ai',function(){
            if(get.attitude(trigger.player,player)<=0) return false;
            return get.attitude(trigger.player,player)>0;
        });
        'step 3'
        if(result.bool){
        player.logSkill('yunchuandao');
        trigger.player.recover();
        }
    },
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='tiesuo') return 'zeroplayertarget';
            },
                    },
                },
                group:["yunchuandao_f","yunchuandao_h"],
                subSkill:{
                    f:{
                        trigger:{
                            player:["linkBefore","enterGame"],
                            global:["phaseBefore","useCardAfter"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
        if(event.name=='link') return player.isLinked();
        return (event.name!='phase'||game.phaseNumber==0)&&!player.isLinked();
    },
                        content:function(){
        if(trigger.name!='link') player.link(true);
        else trigger.cancel();
    },
                        sub:true,
                    },
                    h:{
                        trigger:{
                            global:"phaseZhunbeiBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                        return player!=event.player;
    },
                        content:function(){
                        trigger.player.link(true);                        
    },
                        sub:true,
                    },
                },
            },
            yuntaiping:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageBegin3",
                },
                forced:true,
                filter:function(event){
        return event.nature=='thunder';
    },
                content:function (){
        trigger.cancel();
        var num=trigger.num
           player.chooseDrawRecover(num,num,true,get.prompt('yuntaiping'));
    },
                ai:{
                    nothunder:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'thunderDamage')) return 'zerotarget';
            },
                    },
                },
                group:["yuntaiping_lei","yuntaiping_mp"],
                subSkill:{
                    lei:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event){
                return event.notLink();
            },
                        content:function(){
                trigger.nature='thunder';
            },
                        sub:true,
                    },
                    mp:{
                        audio:"yuntaiping",
                        trigger:{
                            global:"damageEnd",
                        },
                        audio:"yuntaiping",
                        prompt:function(event,player){
                        var str='';
                        str +='是否对'+get.translation(event.player)+'发动【太平】令其摸两张牌？'
                        return str;
                        },
                        check:function (event,player){
                        return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
                        },
                        filter:function(event,player){
                        return event.nature=='thunder'&&event.player!=player&&event.player.isAlive();
                        },
                        content:function(){
                        trigger.player.draw(2);
                        },
                        sub:true,
                    },
                },
            },
            yunhuangtian:{
                audio:"ext:云将/audio:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yundunshu",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunhuangtian')){
            player.markSkill('yunhuangtian');
            player.storage.yunhuangtian=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunhuangtian');
        return player.storage.yunhuangtian==false;
        return !player.hasJudge('fulei');
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunhuangtian=true;
    player.awakenSkill("yunhuangtian");
    game.log(target,'成为了目标');    
    "step 1"
    var card=get.cardPile(function(card){ 
        return get.type2(card)==('trick'); 
    }); 
    event.card=card; 
   'step 2' 
   var list=['fulei'];
    if(event.card){ 
       player.addJudge({name:'fulei'},event.card);
    } 
        'step 3' 
    target.gainMaxHp();
    player.addSkill('yundunshu');   
    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangjiao'&&!game.yjGetQhlySkin('yunzhangjiao')){
            player.node.avatar.setBackgroundImage('extension/云将/yunzhangjiaoa.jpg');
            }             
    if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhangjiao'&&game.yjGetQhlySkin('yunzhangjiao')=='yunzhangjiao7.jpg'){
    if(Math.random()>1/2){
    player.say(["化身为黄吧！","江江～你也不想黑历史被人知道吧？"].randomGet());
    player.node.avatar.setBackgroundImage('extension/云将/yunzhangjiao7a.jpg');
        }else{
        player.say(["化身为黄吧！","江江～你也不想黑历史被人知道吧？"].randomGet());
        player.node.avatar.setBackgroundImage('extension/云将/yunzhangjiao7b.jpg');
        }     
                    } 
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
            },
            yundunshu:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
                return !game.hasPlayer(function(current){
                return current.hasJudge('fulei');
                });
            },
                content:function(){
                "step 0"
                var card=get.cardPile(function(card){
                return get.type2(card)==('trick');
                });
                event.card=card;
                'step 1'
                var list=['fulei'];
                if(event.card){
                player.addJudge({name:'fulei'},event.card);
                }
            },
        },
            yunshichou:{    
                audio:"ext:云将/audio:2",    
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                popup:false,
                content:function(){
                player.logSkill('yunshichou',event.targets);
                },        
                mod:{
                    globalFrom:function(from,to,current){
                    return current-Math.min(3,from.getDamagedHp());
                    },    
                    selectTarget:function(card,player,range){
                    if(range[1]==-1) return;
                    if(card.name=='sha'){
                    range[1]+=Math.min(3,player.getDamagedHp());
                    }
                },                
            },
                ai:{
                    effect:{
                        target:function(card,player,target){
                        if(get.tag(card,'damage')){
                        if(!target.hasFriend()) return;
                        if(target.hp>=4) return [0,1.5];
                        }
                        if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                       },
                    },
                },
                group:["yunshichou_mp"],
                subSkill:{
                    mp:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        audio:"ext:云将/audio:2",
                        forced:true,
                        filter:function(event,player){
                        return player.getDamagedHp();
                        },
                        content:function(){
                        trigger.num+=Math.min(3,player.getDamagedHp());
                        },
                        sub:true,
                    },
                },
            },
            yunjinshi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"dying",
                },
                round:1,
                forced:true,
                filter:function(event,player){
                return player.maxHp>1;
                },
                content:function(){
                "step 0"
                if(player.hasSkill('fengyunshibian_mc_qun')){
                event.goto(1);
                }else{
                player.loseMaxHp();
                }
                "step 1"
                player.recover(1-player.hp);
                },
                ai:{
                    threaten:1,
                    expose:0.2,
                },
                group:["yunjinshi_sha"],
                subSkill:{
                    sha:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            global:"useCardToTarget",
                        },
                        filter:function(event,player){
                        return event.player==player&&player!=event.target&&event.card.name=='sha';
                        },
                        forced:true,
                        preHidden:true,
                        priority:99,
                        content:function(){
                        player.say(["长须红袍的是曹操！","曹贼！奸贼！恶贼！"].randomGet());
                        if(trigger.target.countCards('h')>=player.countCards('h')){
                        trigger.target.addTempSkill('yunjinshi_shan');
                        }
                        if(trigger.target.hp>=player.hp){
                        trigger.target.addTempSkill('yunfengyin');
                        }
                    },
                        sub:true,
                    },
                shan:{
                charlotte:true,
                superCharlotte:true,
                marktext:"锦狮",
                intro:{
                    name:"锦狮",
                    content:"不能使用或打出牌",
                },
                mark:true,
                onremove:true,
                mod:{
                "cardEnabled2":function(card,player){
                return false;
                },
            },
                sub:true,
                },
            },
        },
            yunmoshi:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return !player.getStorage('yunmoshi').contains(event.card.name);
                },
                content:function(){
                player.markAuto('yunmoshi',[trigger.card.name]);
                },
                onremove:true,
                intro:{
                    content:"【默识】已记录：$",
                },
                group:"yunmoshi_jl",
                subSkill:{
                    jl:{
                        trigger:{
                            global:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                        return player!=event.player&&player.getStorage('yunmoshi').contains(event.card.name);   
                        },
                        content:function(){
                       "step 0"
                       player.logSkill('yunmoshi',event.targets);
                       var name=trigger.card.name;
                       player.unmarkAuto('yunmoshi',[name]);
                       player.discardPlayerCard(trigger.player,'he').set('ai',function(){
                       if(trigger.player.countCards('he')&&get.attitude(player,trigger.player)<0){
                       return true;
                       }else{
                       return false;
                       }
                    }).set('prompt',get.prompt2('yunmoshi_jl'),'弃置其一张牌或取消令自己摸一张牌');
                    "step 1"
                    if(!result.bool){
                    player.draw()
                    }
                },
                    sub:true,
                    },
                },
            },
            yunbeige:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"damageEnd",
                },
                check:function(event,player){
                var att1=get.attitude(player,event.player);
                var att2=get.attitude(player,event.source);
                return att1>=0&&att2<0;
                },
                filter:function(event,player){
                return event.player.isAlive()&&event.source&&event.source!=player&&event.player!=player;
                },
                preHidden:true,
                prompt:function(event,player){
                var str='';
                str +='是否对'+get.translation(event.source)+'发动【悲歌】？'
                return str;
                },
                content:function(){
                "step 0"
                player.judge();
                "step 1"
                if(result.suit=='spade'){
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/beige_hei.mp3';
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'){
                player.node.avatar.setBackground('yuncaiwenji','character');
                }
                trigger.source.addTempSkill('fengyin');
                }
                if(result.suit=='heart'){
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/beige_hong.mp3';
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&!game.yjGetQhlySkin('yuncaiwenji')){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenjia.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&game.yjGetQhlySkin('yuncaiwenji')=='yuncaiwenji5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenji5a.jpg');
                }
                trigger.player.recover();
                }
                if(result.suit=='club'){
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/beige_mei.mp3'; 
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&!game.yjGetQhlySkin('yuncaiwenji')){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenjib.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&game.yjGetQhlySkin('yuncaiwenji')=='yuncaiwenji5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenji5b.jpg');
                }
                trigger.source.loseHp();
                }
                if(result.suit=='diamond'){
                trigger.player.draw(2);
                ui.backgroundMusic.src=lib.assetURL+'extension/云将/audio/beige_fang.mp3'; 
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&!game.yjGetQhlySkin('yuncaiwenji')){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenjic.jpg');
                }
                if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaiwenji'&&game.yjGetQhlySkin('yuncaiwenji')=='yuncaiwenji5.jpg'){
                player.node.avatar.setBackgroundImage('extension/云将/yuncaiwenji5c.jpg');
                }
            }
            "step 2"
            player.say(["悲歌可以当泣，远望可以当归。","欲归家无人，欲渡河无船。"].randomGet());
            },
            ai:{
            expose:0.3,
            },
        },
            yunpolu:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                usable:1,
                forced:true,
                content:function(){
                'step 0'
                player.chooseTarget('选择一名角色对其发动【破虏】？',1,true,function(current){
               return true;
               }).set('ai',function(target){
               if(player.hp!=player.maxHp-player.hp){
               var bigger=player.maxHp-player.hp-player.hp;
               if(bigger<0){
               bigger=-bigger;
               }
               var attitude=get.attitude(player,target);
               if(attitude==0)return 0;
               if(bigger<=1){
               return attitude;
               }
               if(bigger>=3){
               if(attitude<0&&target.countCards('e')){
               return 4;
               }
            }
                if(attitude>0){
                    if(target.getUseValue({name:'sha'})>0){
                        return target.getUseValue({name:'sha'})/1.5;
                    }
                    if(target.hp<target.maxHp){
                        return 3;
                    }
                }
                return Math.random() * 3 - 1.5;
            }
            return get.attitude(player,target);   
        });
        'step 1'
        if(result.targets && result.targets.length){
            event.tar=result.targets[0];
            var str='是否令';
            str+= get.translation(event.tar);
            str+= '摸';
            str+= (player.maxHp-player.hp);
            str+= '张牌并弃置';
            str+= player.hp;
            str+= '张牌？否则';
            str+= get.translation(event.tar);
            str+= '摸';
            str+= player.hp;
            str+= '张牌并弃置';
            str+= (player.maxHp-player.hp);
            str+= '张牌。';
            var tar1=event.tar;
            var x=player.maxHp-player.hp;
            var y=player.hp;
            player.chooseBool(str).set('ai',function(){
                if(x>=y){
                    return get.attitude(player,tar1)>0;
                }else{
                    return get.attitude(player,tar1)<=0;
                }
            });
        }else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            event.dwx=player.maxHp-player.hp;
            event.dwy=player.hp;
        }else{
            event.dwx=player.hp;
            event.dwy=player.maxHp-player.hp;
        }
        'step 3'
        if(event.dwx>0){
            event.tar.draw(event.dwx);
        }
        'step 4'
        if(event.dwy>0){
            event.tar.chooseToDiscard('he',event.dwy,true);
        }
    },
                ai:{
                    threaten:1.5,
                    effect:{
                        target:function(card,player,target){
                        if(get.tag(card,'recover')){
                        if(player.maxHp-player.hp==1&&player.maxHp>3){
                        return 'zeroplayertarget';
                        }
                    }
                        var num=get.tag(card,'damage');
                        if(num){
                        if(player.hasSkillTag('jueqing',false,target,true)) return [1,-2];
                        if(!target.hasFriend()) return;
                        if(target.hp==target.maxHp) return;
                        if(target.hp==1){
                        return;
                        }  
                    }
                },
            },
        },
    },
    yunwulie:{
        audio:"ext:云将/audio:2",
        trigger:{
            player:"dieBegin",
        },
        forced:true,
        popup:false,
        forceDie:true,
        skillAnimation:true,
        content:function(){
        'step 0'
        player.chooseTarget('是否选择一名其他角色获得【破虏】',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            game.log(target,'继承了','【武烈】');
            player.awakenSkill('yunwulie');
            player.logSkill('yunwulie');
            target.gainMaxHp();
            target.addSkill('yunpolu');
            if(player.identity=='zhu'&&(target.identity=='zhong'||target.identity=='mingzhong')){
           game.broadcastAll(function(player,target){
            player.identity=target.identity;
            if(target.identity=='mingzhong') game.zhong=target;
            delete target.isZhu;
            target.identity='zhu';
            game.zhu=player;
            target.showIdentity();
            player.showIdentity();
        },target,player);
        event.trigger('zhuUpdate'); 
                if(player.isUnderControl(true)){
                target._trueMe=player;
                game.addGlobalSkill('autoswap');
                if(target==game.me){
                game.notMe=true;
                if(!_status.auto) ui.click.auto();
        }
            }
        }
      }
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+player.countCards('e');
        },
                },
            },
            yuntaolve:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:["equipAfter","discardAfter","respondAfter","useCardAfter"],
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return player.countCards('h')==0;
                },
                content:function(){
                'step 0'
                player.draw();
                'step 1'
                if(Array.isArray(result)&&result.length&&_status.currentPhase==player){
                var gained=result[0];
                if(lib.filter.cardEnabled(gained,target)){
                var next=player.chooseToUse();
                next.filterCard=function(card){
                    return card==gained;
                };
                next.prompt='是否使用'+get.translation(gained)+'？';
                player.logSkill('yuntaolve');
            }
            else{
                event.finish();
            }
        }
    },
                ai:{
                    reverseEquip:true,
                    effect:{
                        player:function(card,player,target){
                        if(card.name=='huogong'||card.name=='tao'||card.name=='jiu'){return [1,1];}               
        },
                    },
                    noh:true,
                    nodiscard:true,
                    nolose:true,
                },
                group:["yuntaolve_ll"],
                subSkill:{
                    ll:{
                    trigger:{
                    player:["loseAfter"],
                    global:["addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                forced:true,
                popup:false,
                filter:function(event,player){
                return player.countCards('h')==0;
    },
                content:function(){
                if(trigger.name=='lose'&&!['discard','useCard','respond'].contains(trigger.getParent().name)){
                player.draw();
                }
        },
                        sub:true,
                    },
                },
            },
            yunqianya:{
                audio:"ext:云将/audio:3",
                trigger:{
                    player:"phaseDrawBefore",
                },
                prompt:"是否发动【谦雅】弃置一张牌跳过摸牌阶段并令一名其他角色立即执行一次额外的摸牌阶段？",
                content:function(){
        'step 0'
        trigger.cancel();
        player.chooseToDiscard('h',true).set('ai',function(card){
            return 10 - ai.get.value(card);
        });
        'step 1'
        if(result.bool){
        player.chooseTarget('是否令一名其他角色进行一个额外的摸牌阶段',function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            return get.attitude(player,target);
        });
            }
        "step 2"
        if(result.bool){
            player.say(["谦谦君子，温润如玉！"].randomGet());
            var target=result.targets[0];
            var next=target.phaseDraw();
            event.next.remove(next);
            trigger.getParent().next.push(next);
        }
    },
                ai:{
                    expose:0.5,
                    effect:{
                    noh:true,
                    nogain:1,
                    target:function(card){
                    if(card.name=='guohe'||card.name=='shunshou'||card.name=='huogong'||card.name=='lebu'||card.name=='bingliang') return 9;
            },
                },
                    },
                group:["yunqianya_mp","yunqianya_qp"],
                subSkill:{
                    mp:{
                        audio:"yunqianya",
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        popup:false,
                        filter:function(event,player){
        if(!event.targets||event.targets.length!=1) return false;
        return get.type2(event.card)=='trick'&&event.player!=player;
    },
                        prompt:"是否发动【谦雅】弃置一张牌令一名其他角色立即执行一次额外的出牌阶段？",
                        content:function(){
        'step 0'
        player.chooseToDiscard('h',true).set('ai',function(card){
            return 10 - ai.get.value(card);
        });
        "step 1"
        if(result.bool){
        player.logSkill('yunqianya');
        player.chooseTarget('是否令一名其他角色进行一个额外的出牌阶段',function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            var num=target.countCards('h');
            var att=get.attitude(player,target);
            return num*att;
            if(target==trigger.target){
            return 1;
            }
        });
        }else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.say(["谦虚温谨,不以才地矜物。"].randomGet());
            var target=result.targets[0];
            var next=target.phaseUse();
            event.next.remove(next);
            trigger.getParent().next.push(next);
        }
    },
                        sub:true,
                    },
                    qp:{
                        audio:"yunqianya",
                        trigger:{
                            player:"phaseDiscardEnd",
                        },
                        popup:false,
                        filter:function(event,player){
        return player.isDamaged();
    },
                        
                        prompt:"是否发动【谦雅】弃置一张牌获得一点护甲并令一名其他角色立即执行一次额外的弃牌阶段？",
                        content:function(){
        'step 0'
        player.logSkill('yunqianya');
        player.chooseToDiscard('h',true).set('ai',function(card){
            return 10 - ai.get.value(card);
        });
        "step 1"
        if(result.bool){
        var num=player.maxHp-player.hp;
        if(player.hujia<num){
        player.changeHujia();
        }        
        player.chooseTarget('是否令一名其他角色进行一个额外的弃牌阶段',function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            var num=target.countCards('h');
            var att=-get.attitude(player,target);
            return num*att;
        });
    }else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.say(["虚则欹，中则正，满则震。"].randomGet());
            player.logSkill('yunqianya');
            var target=result.targets[0];
            var next=target.phaseDiscard();
            event.next.remove(next);
            trigger.getParent().next.push(next);
        }
    },
                        ai:{
                            expose:0.3,
                        },
                        sub:true,
                    },
                },
            },
            yunguose:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                filter:function(event,player){ 
        return event.cards&&event.cards.length>0&&!player.hasSkill('fengyunshibian_dxq_wu'); 
    },
                content:function(){ 
        "step 0" 
        var num=Math.min(player.hp,trigger.cards.length);
        player.chooseTarget('弃置一名角色至多'+num+'张牌',get.prompt('yunguose'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
        "step 1" 
        if(result.bool){
            player.logSkill('yunguose'); 
            var target=result.targets[0];
            var num=Math.min(player.hp,trigger.cards.length);
            player.discardPlayerCard(target,'he',[1,num],true);
            }else{
            event.finish();
        }
        "step 2"
        if(player.hasSkill('fengyunshibian_dxq_qun')){
            var num=Math.min(player.hp,trigger.cards.length);
            player.chooseTarget('弃置一名角色至多'+num+'张牌',get.prompt('yunguose'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
        }else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            player.logSkill('yunguose'); 
            var target=result.targets[0];
            var num=Math.min(player.hp,trigger.cards.length);
            player.discardPlayerCard(target,'he',[1,num],true);
            }
    },
                     ai:{
                            expose:0.3,
                        },
                group:["yunguose_cp","yunguose_fb","yunguose_shibian_wu"],
                subSkill:{
                    cp:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        init:function (player){
                player.storage.yunguose_cp=0;
                player.markSkill('yunguose_cp');
                player.syncStorage('yunguose_cp');
    },
                        filter:function(event,player){
                if(!player.isPhaseUsing()) return false;
                return player.storage.yunguose_cp<3;
    },
                        content:function(){
                player.storage.yunguose_cp++;
                player.markSkill('yunguose_cp');
                player.syncStorage('yunguose_cp');
            },
                        sub:true,
                    },
                    fb:{
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
        return player.storage.yunguose_cp>0;
    },
                        content:function(){
                "step 0" 
                var num=player.storage.yunguose_cp;
                player.draw(num);
                "step 1" 
                player.removeMark('yunguose_cp',Infinity);
            },
                        sub:true,
                    },
                    "shibian_wu":{
                        trigger:{
                            player:"phaseDiscardEnd",
                        },
                        direct:true,
                        filter:function(event,player){
                return event.cards&&event.cards.length>0&&player.hasSkill('fengyunshibian_dxq_wu');
    },
                        content:function(){ 
        "step 0" 
        var num=Math.min(player.hp,trigger.cards.length);
        player.chooseTarget('弃置一名角色至多'+num+'张牌',get.prompt('yunguose'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
        "step 1" 
        if(result.bool){
            player.logSkill('yunguose'); 
            var target=result.targets[0];
            target.disableEquip('equip1');
            target.disableEquip('equip2');
            target.disableEquip('equip3');
            target.disableEquip('equip4');
            target.disableEquip('equip5');
            var num=Math.min(player.hp,trigger.cards.length);
            player.discardPlayerCard(target,'he',[1,num],true);
            target.addTempSkill('yunguose_xz',{player:'phaseAfter'});
        } 
    },
                        sub:true,
                    },
                    xz:{
                        mark:true,
                        marktext:"国色",
                        intro:{
                            name:"国色",
                            content:"你累了，请休息吧",
                        },
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        charlotte:true,
                        superCharlotte:true,
                        content:function(){
               player.enableEquip(1);
               player.enableEquip(2);
               player.enableEquip(3);
               player.enableEquip(4);
               player.enableEquip(5);
    },
                        sub:true,
                    },
                },
            },
            yuntianxiang:{
                audio:"ext:云将/audio:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current!=player&&!current.hasSkill('yuntianxianga');
        });
    },
                content:function(){
        'step 0'
        if(!player.hasSkill('fengyunshibian_dxq_wu')){
        event.trigger('tianxiang')
        }
        player.chooseTarget('令一名角色获得【天香】标记',function(card,player,target){
            return player!=target&&!target.hasSkill('yuntianxianga');
        }).set('ai',function(target){
            return target.countCards('h')*get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(player,'选择了',target);
            if(player.hasSkill('fengyunshibian_dxq_wu')){
        target.addSkill('yuntianxianga');
        }else{
           target.addTempSkill('yuntianxianga','tianxiang'); 
        }
      }
    },
            },
            yuntianxianga:{
                audio:"ext:云将/audio:2",
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                usable:1,
                forced:true,
                charlotte:true,
                superCharlotte:true,
                mark:true,
                marktext:"天香",
                intro:{
                    name:"天香",
                    content:"江江要加油！要努力哟!",
                },
                content:function (){
        game.countPlayer(function(current){
            if(current.hasSkill('yuntianxiang')){
                player.line(current,'green');
                current.draw();                
            }            
        });        
    },
            },
            yunduodi:{
            trigger:{
            source:"damageSource",            
            },
             forced:true,
             audio:"ext:云将/audio:2",           
             filter:function(event,player){
        return Math.ceil(game.players.length)>2;
    },            
             content:function(){           
             'step 0'
             player.storage.duodi++;                 
             game.swapSeat(player,player.previous);  
             'step 1'
             player.chooseToDiscard('he',get.prompt('yunduodi',player.next),'请弃置一张牌或不弃置令'+get.translation(player.next)+'翻面').set('goon',get.attitude(player.next,player)>0).set('ai',function(card){
            if(_status.event.goon) return 7-get.value(card);
            return 0;
        });
        'step 2'
        if(!result.bool){
        player.next.turnOver(true);
        }
            },
             group:["yunduodi_cp"],
             subSkill:{
             cp:{
             audio:"ext:云将/audio:2",
             enable:"phaseUse",
             usable:1,     
             filter:function(event,player){
             return player.maxHp>player.hp;
             },
             content:function(){
             'step 0'      
             player.storage.duodi++;                      
             if(player.getSeatNum()%2==1){            
             event.goto(1);
             };
             if(player.getSeatNum()%2!==1){
             event.goto(3);
             };               
             'step 1'
             var num=Math.min(player.getDamagedHp(),player.getSeatNum());
             player.chooseTarget('选择令一名角色摸'+num+'张牌或自己摸一张牌',function(card,player,target){
            return player!=target;
            }).set('ai',function(target){
            return get.attitude(player,target);
        });
            "step 2"
            if(result.bool){   
            var target=result.targets[0];    
            var num=Math.min(player.getDamagedHp(),player.getSeatNum());
            target.draw(num);
            }else{
            player.draw();
            }
            event.finish();
            'step 3'
             var num=Math.min(player.getDamagedHp(),player.getSeatNum());
            player.chooseTarget('选择令一名角色弃置'+num+'张牌或自己摸一张牌',function(card,player,target){
            return player!=target&&target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
            "step 4"
            if(result.bool){
            var target=result.targets[0];       
            var num=Math.min(player.getDamagedHp(),player.getSeatNum());
             target.chooseToDiscard('he',num,true).ai=function(card){
            return 6-get.value(card);
        };
            }else{
            player.draw();
            }
    },
        ai:{
                    order:6,
                    expose:1,
                    result:{
                        player:3,
                    },
                },
    sub:true,
            },
       },
   },
            yunxingshang:{
            trigger:{
                global:"die",
    },
                audio:"ext:云将/audio:2",
                preHidden:true,            
                forced:true,
                popup:false,
                filter:function(event,player){
    return event.player!=player;
    },
                content:function(){                
    if(player.isDamaged()){
        player.logSkill('yunxingshang',event.targets);
        player.recover();
    }else{
    if(trigger.player.countCards('he')>0){
        player.logSkill('yunxingshang',event.targets);
        event.togain=trigger.player.getCards('he');
        player.gain(event.togain,trigger.player,'giveAuto');    
        } 
      }
    },
    group:["yunxingshanga"],
            },
            yunxingshanga:{
            audio:"yunxingshang",
            trigger:{
        global:"dieBegin",
    },
    forced:true,   
    unique:true, 
    skillAnimation:true,
    animationColor:"thunder",                
    filter:function(event,player){
        return event.player.identity=='zhu'&&(player.identity=='zhong'||player.identity=='mingzhong');
    },
    logTarget:"player",    
    content:function(){
        player.gainMaxHp();
        player.storage.xingshang++;
        game.broadcastAll(function(player,target){
            target.identity=player.identity;
            if(player.identity=='mingzhong') game.zhong=target;
            delete target.isZhu;
            player.identity='zhu';
            game.zhu=player;
            player.showIdentity();
            target.showIdentity();
        },player,trigger.player);
        event.trigger('zhuUpdate');
    },
            },
            yundengwei:{            
            audio:"ext:云将/audio:2",
                derivation:["yunchengtian","yunsongwei"],
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,    
                mark:true,
             marktext:"登位",
             init:function (player){
             player.storage.duodi=0;     
             player.storage.dengwei=0;     
    },
             intro:{
            content:function(storage,player){      
            var dd=player.storage.duodi;           
            return '<div>已发动'+(dd)+'次【夺嫡】</span></div>';
        },
                },                           
                filter:function(event,player){
        return player.storage.duodi>=5||player.storage.xingshang>0;        
    },
                content:function(){
        "step 0"
        player.gainMaxHp();        
        player.awakenSkill(event.name);        
        player.removeSkill('yunduodi');  
        player.removeSkill('yunxingshang');    
        player.addSkill('yunchengtian');
        if(player.identity=='zhu'){
        player.addSkill('yunsongwei');
        }  
        "step 1"
        player.recover();
        player.removeMark('duodi',Infinity);        
        player.removeMark('xingshang',Infinity);
        player.say(["魏文帝！魏文帝！魏文帝！","孤承天命，四海归心！"].randomGet());    
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaopi'&&!game.yjGetQhlySkin('yuncaopi')){
                        player.node.avatar.setBackgroundImage('extension/云将/yuncaopia.jpg');
            }      
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yuncaopi'&&game.yjGetQhlySkin('yuncaopi')=='yuncaopi4.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yuncaopi4a.jpg');
                    }  
    },
            },
            yunchengtian:{
             trigger:{                        
             player:"damageAfter",
             },
             audio:"ext:云将/audio:2",
             forced:true,
             filter:function(event,player){
        return Math.ceil(game.players.length)>2;
    },             
             content:function(){           
             'step 0'                 
             game.swapSeat(player,player.next);  
             'step 1'
             player.chooseToDiscard('he',get.prompt('yunchengtian',player.previous),'请弃置一张牌或不弃置令'+get.translation(player.previous)+'翻面').set('goon',get.attitude(player.previous,player)>0).set('ai',function(card){
            if(_status.event.goon) return 7-get.value(card);
            return 0;
        });
        'step 2'
        if(!result.bool){
        player.previous.turnOver(true);
        }
            },
    ai:{
        effect:{
            target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(target.hp<=1) return;
                    if(!target.hasFriend()) return;
                    var hastarget=false;
                    var turnfriend=false;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                            hastarget=true;
                        }
                        if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                            hastarget=true;
                            turnfriend=true;
                        }
                    }
                    if(get.attitude(player,target)>0&&!hastarget) return;
                    if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                    if(target.hp>1) return [1,0.5];
                }
            },
        },
    },
             group:["yunchengtian_cp"],
             subSkill:{
             cp:{
             audio:"ext:云将/audio:2",
             enable:"phaseUse",
             usable:1,
             filter:function(event,player){
             return player.maxHp>player.hp;
             },
             content:function(){
             'step 0'
             if(player.getSeatNum()%2==1){            
             event.goto(1);
             };
             if(player.getSeatNum()%2!==1){
             event.goto(3);
             };               
             'step 1'             
             var num=Math.min(player.getDamagedHp(),player.getSeatNum());    
             player.chooseTarget('令一名角色摸'+num+'张牌',function(card,player,target){
            return target=player;
            }).set('ai',function(target){
            return get.attitude(player,target);
        });
            "step 2"
            if(result.bool){   
            var target=result.targets[0];  
            var num=Math.min(player.getDamagedHp(),player.getSeatNum());    
            target.draw(num);            
            }
            event.finish();
            'step 3'
            var num=Math.min(player.getDamagedHp(),player.getSeatNum());    
            player.chooseTarget('令一名角色弃置'+num+'张牌',function(card,player,target){
            return target.countCards('he')>0;
            }).set('ai',function(target){               
                player=get.player();
                return -get.attitude(player,target);
                });
            "step 4"
            if(result.bool){
            var target=result.targets[0];       
            var num=Math.min(player.getDamagedHp(),player.getSeatNum());    
             target.chooseToDiscard('he',num,true).ai=function(card){
            return 6-get.value(card);
        };            
            }
    },
    ai:{
       order:7,
       expose:1,
       result:{
         player:3,
              },
      },
    sub:true,
            },
       },
            },
            yunsongwei:{
                audio:"ext:云将/audio:2",
                trigger:{
                    global:"damageEnd",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
    return event.player.isAlive()&&player!=event.player&&event.player.group=='wei'&&event.getParent().name!='yunsongwei'&&player.isDamaged();
    },
                content:function(){
        'step 0'
        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【颂威】？','你进行一次判定：若结果为黑色'+get.translation(player)+'恢复一点体力').set('ai',function(){
            var evt=_status.event;
            return get.attitude(evt.player,evt.getParent().player)>0;
        });
        'step 1'
        if(result.bool){
            player.logSkill('yunsongwei');
            trigger.player.judge(function(card){ 
            return get.color(card)=='black'?1:-1; 
        });            
        }        
        "step 2"
        if(result.color=='black'){
           trigger.player.line(player,'green');
           player.recover();
        }
    },
            },            
            yunfanghun:{
            trigger:{
                    global:"roundStart",
                },
                unique:true,   
                audio:"ext:云将/audio:5",      
                check:function(event,player){
	if(player.hp>2)return true;
	else return false;
},                      
                content:function(){
					'step 0'
					if(player.hp>3){
	  	 if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhaoxiang'&&game.yjGetQhlySkin('yunzhaoxiang')=='yunzhaoxiang4.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhaoxiang4a.jpg');
                }
         if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunzhaoxiang'&&game.yjGetQhlySkin('yunzhaoxiang')=='yunzhaoxiang5.jpg'){
                        player.node.avatar.setBackgroundImage('extension/云将/yunzhaoxiang5a.jpg');
                }
         }else{
        player.node.avatar.setBackground('yunzhaoxiang','character'); 
        }     
					'step 1'
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
					list.remove('zhaoxiang');
					list.remove('tw_zhaoxiang');
					list.remove('yunzhaoyun');
					list.remove('yunjiangwei');
					list.remove('yunguabyu');
					var num=Math.min(5,player.hp);
					list=list.randomGets(num);
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
							skills:skills.randomGets(num),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多'+num+'个技能',[list,'character'],'hidden');
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
									if(rSkill.length>=num) return;
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
					    event.trigger('fanghun')
						for(var i of map.skills) player.addTempSkill(i,{player:'fanghun'});
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
    yunyazi:{     
    audio:"yunmouce",       
    init:function(player){        
         player.storage.yunyazi=[];
         player.storage.yunyazi_one=[];
    },
    trigger:{
        player:"yunyazi",
    },
    forced:true,
    popup:false,
    mark:true,
    marktext:"睚眦",
    intro:{
    name:"睚眦",
        content:"已记录的牌名：$",
    },
    filter:function(event,player){
        return player.storage.yunyazi_cs<3;        
    },
    content:function(){           
        player.markSkill('yunyazi');        
        player.storage.yunyazi_cs++;   
        event.trigger('mouce');     
    },
    ai:{
        expose:0.3,
    },
        group:["yunyazi_cs","yunyazi_one","yunyazi_damage","yunyazi_damageend","yunmouce"],
        subSkill:{
                 cs:{
                     trigger:{
                        global:"phaseJieshuAfter",
                        },
                        silent:true,    
                        forced:true,
                        popup:false,
                        charlotte:true,
                        superCharlotte:true,
                        init:function(player){
                        player.storage.yunyazi_cs=0; 
                        },
                        content:function(){
                        player.removeMark('yunyazi_cs',Infinity);
                        },
                        sub:true,
                        },
        one:{
            trigger:{
                player:["useCardEnd","respondEnd"],
            },
            silent:true,    
            filter:function(event,player){
        return player.storage.yunyazi_cs<3;        
    },        
            content:function(){
                if( player.storage.yunyazi_one.contains(trigger.card.name)){
                    if(! player.storage.yunyazi.contains(trigger.card.name)){
                         player.storage.yunyazi.add(trigger.card.name);
                         event.trigger('yunyazi');
                    }
                }
                else{
                     player.storage.yunyazi_one.add(trigger.card.name);
                }
            },
            sub:true,
            forced:true,
            popup:false,
        },
        damage:{
        audio:"yunyazi",      
        trigger:{
        player:"damageEnd",
    },        
        forced:true,     
        popup:false,   
        filter:function(event,player){
        return player.storage.yunyazi_cs<3;        
    },
        content:function(){   
        player.storage.yunyazi_cs++;
        if(trigger.card&&!player.storage.yunyazi_one.contains(trigger.card.name)){
         player.storage.yunyazi_one.add(trigger.card.name);
        }
        event.trigger('mouce');
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')&&player.storage.yunyazi_cs<3){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*1.5];
                    if(target.hp==3&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*1];
                    if(target.hp==2&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*0.5];
                }
            },
        },
    },
    sub:true,
    },
        damageend:{
        audio:"ext:云将/audio:3",      
            trigger:{
        player:"damageAfter",
    },
            check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
            logTarget:"source",
            filter:function(event,player){
                return player.storage.yunyazi_cs<3&&event.card&& player.storage.yunyazi.contains(event.card.name);
            },
            content:function(){ 
                trigger.source.damage(player);
                var name=trigger.card.name;
                player.unmarkAuto('yunyazi',[name]);            
            },
            sub:true,
        },       
    },
},
        yunmouce:{
        audio:"ext:云将/audio:2",      
        trigger:{
        player:"mouce",
    },
        forced:true, 
        content:function(){   
        "step 0"             
        var num=player.maxHp-player.hp;
        event.cards=get.cards(Math.min(5,player.maxHp+num));
        game.cardsGotoOrdering(event.cards);
        event.videoId=lib.status.videoId++;
        game.broadcastAll(function(player,id,cards){
            var str;
            if(player==game.me&&!_status.auto){
                str='谋策：获取类型各不相同的牌';
            }
            else{
                str='谋策';
            }
            var dialog=ui.create.dialog(str,cards);
            dialog.videoId=id;
        },player,event.videoId,event.cards);
        event.time=get.utc();
        game.addVideo('showCards',player,['谋策',get.cardsInfo(event.cards)]);
        game.addVideo('delay',null,2);
        "step 1"
        var next=player.chooseButton([0,5],true);
        next.set('dialog',event.videoId);
        next.set('filterButton',function(button){
            for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.type(ui.selected.buttons[i].link)==get.type(button.link)) return false;
            }
            return true;
        });
        next.set('ai',function(button){
            return get.value(button.link,_status.event.player);
        });
        "step 2"
        if(result.bool&&result.links){
            event.cards2=result.links;
        }
        else{
            event.finish();
        }
        var time=1000-(get.utc()-event.time);
        if(time>0){
            game.delay(0,time);
        }
        "step 3"
        game.broadcastAll('closeDialog',event.videoId);
        var cards2=event.cards2;
        player.gain(cards2,'log','gain2');   
        "step 4"
        player.chooseCardTarget({
            filterCard:true,
            selectCard:1,
            position:'he',
            filterTarget:function(card,player,target){
                return player!=target&&target!=event.temp;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        "step 5"
        if(result.bool){
            player.say(["孝直最是知恩图报～","此獠还需将军出马！"].randomGet());    
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player,'giveAuto');          
            }             
    },
        },
        yunchangqu:{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"useCardToPlayered",
    },   
        filter:function(event,player){        
        if(!get.tag(event.card,'damage')) return false;
        return event.targets.length==1&&event.target!=player&&event.target.countDiscardableCards(player,'he')>0;
    },
    check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
    logTarget:"target",
    preHidden:true,
    prompt:function(event,player,target){
        var str='';
        str +='是否弃置'+get.translation(event.target)+'一张牌？'
        return str;
    },
    content:function(){
    player.discardPlayerCard(trigger.target,'he',true);
    },
        mod:{
        targetInRange:function(card,player,target){
            if(target.hasSkill('yunpoqiana')){
                return true;
            }
        },        
    },
    ai:{
        expose:0.5,
                },
        },
        yunpoqian:{
        audio:"ext:云将/audio:2",
    trigger:{
        global:"damageEnd",
    },
    check:function(event,player){        
        var att=get.attitude(player,event.source);
        return att<0;
    },
    preHidden:true,  
    prompt:function(event,player){
        var str='';
        str +='是否令'+get.translation(event.source)+'获得一枚【堑】？'
        return str;
    },
    filter:function (event, player) {
        if(event.source&&event.source.storage.yunpoqiana>=3) return false;
        return event.source&&event.source!=player;
    },    
    content:function(){
    if(!trigger.source.hasSkill('yunpoqiana')){
    trigger.source.addSkill('yunpoqiana');
    }
    if(trigger.source.storage.yunpoqiana<3){
       trigger.source.storage.yunpoqiana++;
       trigger.source.markSkill('yunpoqiana');
       trigger.source.syncStorage('yunpoqiana');
       }
    },
    ai:{
        expose:0.3,
                },
    group:["yunpoqian_b"],
                subSkill:{
                    b:{
            audio:"ext:云将/audio:1",
            trigger:{
                global:"dieBegin",
    },
            forced:true,
            popup:false,
            filter:function(event,player){
                return event.player.hasSkill('yunpoqiana');
            },
            content:function(){
                player.say(["今日，取关羽首级者赏黄金千两！","连破十堑，易如反掌！"].randomGet());                                              
                player.insertPhase();   
                player.addSkill('yunpoqian_c');                          
    },
                        sub:true,
                    },
            c:{
            trigger:{
                player:"phaseZhunbeiEnd",
            },
            forced:true,
            popup:false,            
            silent:true,            
            content:function(){     
                player.logSkill('yunpoqian_b',event.targets);           
                player.removeSkill('yunpoqian_c');     
                player.addTempSkill('yunpoqian_d');                
            },   
            sub:true,            
                    },
            d:{
            mod:{        
        cardUsable:function(card,player){
            return Infinity;
        },
    }, 
        sub:true,     
                    },
                },
        },
        yunpoqiana:{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    forceDie:true,
    preHidden:true,
    charlotte:true,
    superCharlotte:true,
    mark:true,
    marktext:"堑",
    intro:{
        name:"破堑",
        content:"我搥跛汝钨錥邪？",        
    },
    init:function(player,skill){
        player.storage.yunpoqiana=0;
        player.markSkill('yunpoqiana');
        player.syncStorage('yunpoqiana');
    },
    filter:function(event,player){
        return player.storage.yunpoqiana>0;
    },
    content:function(){
        if(trigger.num<=1){
            trigger.cancel();
            game.countPlayer(function(current){
            if(current.hasSkill('yunpoqian')){
                player.line(current,'green');
                current.draw();                                                
            }            
        });  
            player.removeMark('yunpoqiana'); 
            if(player.storage.yunpoqiana==0){
               player.removeSkill('yunpoqiana');
            }
            event.finish();
        }
        if(trigger.num>1){                        
        game.countPlayer(function(current){
            if(current.hasSkill('yunpoqian')){
                player.line(current,'green');
                trigger.num-=Math.ceil(trigger.num/2);
                var nump=Math.ceil(trigger.num/2);
                current.draw(nump);                                             
            }            
        });  
         player.removeMark('yunpoqiana'); 
         if(player.storage.yunpoqiana==0){
         player.removeSkill('yunpoqiana');
             }
         }
    },
        },
        yunliegong:{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"shaBegin",
    }, 
    forced:true,
    content:function(){  
        if(!player.inRange(trigger.target)){
             trigger.directHit=true;
        }
        if(player.inRange(trigger.target)){
             player.getStat().card.sha--;
        }
    },
        mod:{
        cardUsableTarget:function(card,player,target){
            if(card.name=='sha'&&player.inRange(target)) return true;
        },
        targetInRange:function (card){
            if(card.name=='sha') return true;
            },
        },
    },
    yunposhi:{
    audio:"ext:云将/audio:2",
    trigger:{
        source:"damageBegin",
    },
    forced:true,
    popup:false,
    filter:function(event,player){
        return !player.hasSkill('yunposhi_off');
    },
    mark:true,
    marktext:"破势",
    intro:{
    name:"破势",
    content:function(storage,player){      
    var ps=player.storage.poshi;
         return '<div>可额外造成'+(ps)+'点伤害并摸'+(ps)+'张牌</span></div>';
    },
                },
    init:function(player,skill){
        player.storage.poshi=0;
    },
    content:function(){   
    'step 0'
    var num=player.storage.poshi;
    if(player.storage.poshi>0){
    player.chooseBool('是否令此次伤害加'+num+'并摸'+num+'张牌？').set('ai',function(event,player){
                return get.attitude(player,trigger.player)<0&&player.storage.poshi>=trigger.player.hp;
            });
    }else{
    if(player.storage.poshi<=0){
           player.storage.poshi++;
           event.finish();
           }
    }
    'step 1'
    if(result.bool){
            player.say(["中！","看箭！"].randomGet());    
            player.logSkill('yunposhi',event.targets);
            trigger.num+=player.storage.poshi;
            player.draw(player.storage.poshi); 
            player.removeMark('poshi',Infinity);    
            player.addTempSkill('yunposhi_off');           
        }else{
           player.storage.poshi++;
    }
        },    
    },
    yunposhi_off:{
    charlotte:true,
    superCharlotte:true,
            },
            yunxuezhao:{
            audio:"ext:云将/audio:2",
            trigger:{
                    player:"useCardToPlayered",
                },
                usable:1,
                popup:false,
                filter:function(event,player){
                if(event.card&&event.card.name=='jiedao') return false;
                if(event.card&&event.card.name=="tiesuo") return false;
                return player.hp>1&&event.targets.length==1&&['basic','trick'].contains(get.type(event.card,false))&&game.hasPlayer(function(current){
            return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,event.player,current);
        });
                },
                check:function (event,player){
                    if(event.target==player) return true;
                    if(get.attitude(player,event.target)<=0&&event.card&&event.card.name!="huogong") return true;
                    if(get.attitude(player,event.target)>0&&event.card&&event.card.name=="tao") return true;
                    if(get.attitude(player,event.target)<=0&&event.card&&(event.card.name=="guohe"||event.card.name=="shunshou")&&event.target.countCards('he')>player.getDamagedHp()) return true;
                    return false;      
    },
                prompt:"是否失去一点体力发动【血诏】？",
                content:function(){
                'step 0'
                player.loseHp();
                'step 1'
                var num=Math.min(3,player.maxHp-player.hp);
                player.chooseTarget([1,num],'血诏：令至多'+num+'名角色视为对'+get.translation(trigger.target)+'使用一张'+get.translation(trigger.card)+'',function(card,player,target){
            return trigger.target!=target&&player!=target;
            }).set('ai',function(target){
            if(get.attitude(player,target)>0){
            return 3;
                      }
            if(get.attitude(player,target)<=0){
            return 1;
                      }
            });
            'step 2'
        if(result.bool){
            player.logSkill('yunxuezhao',event.targets);
            player.say(["爱卿，全靠你了～","众卿还不诛杀国贼？"].randomGet());
            event.targets=result.targets;
            }
            'step 3'
        if(event.targets.length){ 
            event.current=event.targets.shift(); 
            var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
            if(trigger.target.isAlive()&&(event.current.canUse({name:trigger.card.name},trigger.target,false,false)||lib.filter.targetEnabled2(trigger.card,event.current,trigger.target,false,false))){
                event.current.useCard(trigger.target,card,false,false);
            }
        } 
        else{ 
            event.finish(); 
        }
            'step 4'
        event.goto(3); 
               },
            },
            yuntianming:{
            audio:"ext:云将/audio:2",
            trigger:{
            global:"phaseJieshuBegin",
    },
            filter:function(event,player){
            return player.getDamagedHp()>0;
    },
            forced:true,   
            content:function(){
            var num=Math.ceil((player.maxHp-player.hp)/2);
            player.draw(num);
            player.recover(num);
            },
    },
            yunhanzuo:{
            audio:"ext:云将/audio:2",
            trigger:{
            global:"dieAfter",
            },
            forced:true,   
            zhuSkill:true,
            filter:function(event,player){
            if(event.player==player) return false;
            if(!player.hasZhuSkill('yunhanzuo')) return false;
            return true;
        },
            content:function(){
            if(trigger.player.identity=='zhong'){
            player.loseMaxHp();
            }
            if(trigger.player.identity=='nei'){
            player.link(false);
            player.turnOver(false);
            player.discard(player.getCards('j'));
            }
            if(trigger.player.identity=='fan'){
            player.chooseDrawRecover(2,true,get.prompt('yunhanzuo'));
            }
        },
    },
    yunhuwei:{
       audio:"ext:云将/audio:2",
       trigger:{               
                global:"damageBefore",
                },
                usable:1,
                "prompt2":function(event,player){
        return '是否令<span style>'+get.translation(event.player)+'</span>获得一点护甲，然后你受到一点伤害？';
    },
                locked:true,
                filter:function(event,player){
        return event.source&&event.player!=player&&event.source!=player&&event.player.isDamaged();
    },
                check:function(event,player){        
        var att=get.attitude(player,event.player);
        var att2=player.hp;
        if(att2>1){
        return att>0;
        }else{
        return false;
        }
    },
                content:function(){
        trigger.player.changeHujia();
        player.damage('nosource');
        },
        ai:{
                    expose:0.5,
                    threaten:0.5,
                },
    },
                yunelai:{
                        audio:"ext:云将/audio:2",
                        trigger:{
                            player:"damage",
                        },
                        forced:true,
                        popup:false,
                        mark:true,
                        marktext:"恶来",
                        onremove:true,
                        intro:{
                        name:"恶来",
                        content:"你已累计获得#层【恶】",
                },
                        init:function(player){ 
                        player.storage.yunelai=0; 
                        player.markSkill('yunelai');
                        player.syncStorage('yunelai');
        },
                       content:function(){ 
                       'step 0'
                       event.num=trigger.num;
                       'step 1'
                       player.storage.yunelai++;
                       player.markSkill('yunelai');
                       player.syncStorage('yunelai');
                       'step 2'
                       event.num--;
                       if(event.num>0){
                       event.goto(1);
                       }
                    },
                    ai:{
                    effect:{
                    target:function(card,player,target){
                    if(get.tag(card,'damage')){
                        if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                        if(!target.hasFriend()) return;
                        if(target.hp>=4&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*1.5];
                        if(target.hp==3&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*1];
                        if(target.hp==2&&player.storage.yunyazi_cs<3) return [1,get.tag(card,'damage')*0.5];
                        }
                    },
                },
             },
        group:["yunelai_s"],
                subSkill:{
                s:{
                audio:"yunelai",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
                return player.storage.yunelai>0;
                },
                content:function(){
                "step 0"
                var num=player.storage.yunelai;
                player.draw(Math.ceil(num/2));
                player.recover(Math.ceil(num/2));
                if(player.storage.yunelai>=2){
                player.chooseTarget('对一名角色造成一点伤害',get.prompt('yunelai_s'),function(card,player,target){
                return player!=target;
                }).ai = function (target) {
                return ai.get.damageEffect(target, player, player);
                };
            }
                "step 1"
                player.removeMark('yunelai',Infinity);
                if(result.bool){
                result.targets[0].damage(player);
                }
            },
            sub:true,    
            },
        },
    },
             yundingce:{
             audio:"ext:云将/audio:2",
                unique:true,
                limited:true,
                trigger:{
                player:"phaseZhunbeiBegin",
                },
                skillAnimation:true,
                animationColor:"wood",
                filter:function(event,player){
                return !player.storage.yundingce;
                },
                init:function(player){
                player.storage.yundingce=false;
                },
                mark:true,
                intro:{
                content:"limited",
                },
                direct:true,                
                content:function (){
                'step 0'
                player.chooseTarget(get.prompt('yundingce'),'是否发动【定策】？',function(card,player,target){
                return player!=target;
                }).set("ai",function(target){
                if(get.mode()=='identity'){
                if(player.identity=='nei'){
                if(Math.random()>2/3){
                return false;
                }
             }
         }
                 return get.attitude(player,target);
                 });
                 'step 1'
                 if(result.bool){
                 var target=result.targets[0];
                 player.awakenSkill('yundingce');
                 player.storage.yundingce=true;
                 player.logSkill('yundingce',result.targets);
                 game.log(target,'成为了','【定策】','的目标');
                 player.say(["为将军计，惟有鼎足江东，以观天下之衅！","荆楚之地若据而有之，此帝王之资也！"].randomGet());        
                 target.addSkill('yundingcea');
                 }
             },                
                 ai:{
                 expose:1,    
                 },                
             },
             yundingcea:{
             forced:true,
             charlotte:true,
             superCharlotte:true,
             mark:true,
             marktext:"定策",
             init:function(player){ 
                   player.storage.dingce=0; 
             },
             intro:{
                    name:"定策",
                    content:"你回合内使用非转化牌时随机执行一项：①摸一张牌；<br>②恢复一点体力；<br>③此牌不可响应；<br>④此回合使用【杀】次数加一。",
                },
        trigger:{
            player:"useCard",
        },
        filter:function(event,player){
              return _status.currentPhase==player&&event.card.isCard;
        },
        content:function(){
        var d=[1,2,3,4].randomGet();
        if(d==1){
             player.draw();
             if(player.storage.mp!=1){
             player.storage.mp=1;
             event.trigger('dingce')
             }
             game.log(player,'执行了','【定策】','摸牌'); 
             player.say(["【定策】摸牌！"].randomGet());        
        };
        if(d==2){
             player.recover();
             if(player.storage.hf!=1){
             player.storage.hf=1;
             event.trigger('dingce');
             }
             game.log(player,'执行了','【定策】','恢复体力'); 
             player.say(["【定策】恢复体力！"].randomGet());        
        };
        if(d==3){
             trigger.directHit.addArray(game.players);
             if(player.storage.xy!=1){
             player.storage.xy=1;
             event.trigger('dingce');
             }
             game.log(player,'执行了','【定策】','此牌不可响应'); 
             player.say(["【定策】不可响应！"].randomGet());        
        }
        if(d==4){
             player.storage.dingce++;
             if(player.storage.cs!=1){
             player.storage.cs=1;
             event.trigger('dingce');
             }
             game.log(player,'执行了','【定策】','增加【杀】的使用次数'); 
             player.say(["【定策】增加【杀】使用次数！"].randomGet());      
        }
    },
    mod:{
        cardUsable:function(card,player,num){ 
            if(card.name=='sha') 
                return num+=player.storage.dingce;
        },
                },
                group:["yundingcea_b","yundingcea_c"],
            subSkill:{
            b:{
            trigger:{
                    player:"dieBegin",
                },
                forced:true,
                popup:false,
                forceDie:true,
                filter:function(event,player){
                return player.hasSkill('yundingcea');
            },
                content:function(){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunshimeng')){
                player.line(current,'green');
                current.restoreSkill('yundingce');    
                current.storage.yundingce=false;
            }
        });
    },
        sub:true,    
        },
                      c:{
                        trigger:{
                        global:"phaseJieshuAfter",
                        },
                        silent:true,    
                        forced:true,
                        popup:false,
                        content:function(){
                        player.removeMark('dingce',Infinity);
                        player.storage.mp=0;
                        player.storage.hf=0;
                        player.storage.xy=0;
                        player.storage.cs=0;
           },
                        sub:true,
                },
            },
        },
    yunshimeng:{
    audio:"ext:云将/audio:2",
    enable:"phaseUse",
    usable:1,
    filterTarget:function(card,player,target){
        return player!=target;
    },
    content:function(){
        'step 0'
        var cards=target.getCards('h');
        if(cards.length) player.gain(cards,target,'giveAuto');
        'step 1'
        var num=Math.floor(player.countCards('h')/2);
        player.chooseCard('hse',num,true,'交给'+get.translation(target)+get.cnNumber(num)+'张牌');
        'step 2'
        if(result.bool&&result.cards&&result.cards.length) target.gain(result.cards,player,'giveAuto');
    },
    ai:{
        order:1,
        expose:0.3,
        result:{
            target:function(player,target){
                var delta=(player.countCards('h')-target.countCards('h'));
                return delta;
            },
        },
    },
    group:["yunshimeng_dc"],
            subSkill:{
            dc:{
            trigger:{
               global:"dingce",
               },
            silent:true,    
            forced:true,
            popup:false,
            content:function(){
              player.draw();
           },
           sub:true,
           },
        },
    },
        yunxiandeng:{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"phaseBefore",
    },
        forced:true,
        popup:false,
        content:function(){
        'step 0'
        player.addMark("yunxiaolie");
        if(player.countCards('h')>0&&player.countMark('yunxiaolie')<3){
        player.chooseTarget('是否发动【先登】？','选择一名其他角色与其进行拼点',function(card,player,target){
            return player.canCompare(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target)/target.countCards('h');
        });
    }
        "step 1"
        if(result.bool){
            player.logSkill('yunxiandeng',result.targets[0]);
            player.chooseToCompare(result.targets[0]);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.insertPhase();
        }
    },
},
        yunxiaolie:{
        audio:"ext:云将/audio:2",
        trigger:{
           global:"roundStart",
        },
        mark:true,
        marktext:"骁烈",
        intro:{
        "name2":"骁烈",
        content:"【先登】已执行了#个额外回合。",
        },
        forced:true,
        popup:false,
        filter:function(event,player){
        return player.countMark('yunxiaolie')>0;
    },
        content:function(){
        'step 0'
        player.logSkill('yunxiaolie')
        'step 1'
        var num=player.countMark('yunxiaolie');
        player.chooseBool('【骁烈】还可移动场上至多'+num+'张牌').set('check',player.canMoveCard(true));
        'step 2'
        if(result.bool){
        player.moveCard();
        player.removeMark('yunxiaolie',1);
        }else{
        player.removeMark('yunxiaolie',Infinity);
        event.finish();
        }
        'step 3'
        if(player.countMark('yunxiaolie')>0){
        event.goto(1);
        }
    },
        mod:{
        cardnumber:function(card){
            if(get.suit(card)=='club') return 13;
        },
        aiUseful:function(player,card,num){
            if(get.suit(card)=='club') return num+3;
        },
    },
},
        yunzhenjun:{
                audio:"ext:云将/audio:2",
                trigger:{
                player:'useCardToPlayered',
                },
				logTarget:'target',
				check:function(event,player){
				return get.attitude(player,event.target)<0;
				},
				filter:function(event,player){
					return event.target.hp>=player.hp&&event.target!=player&&get.color(event.card)=='black';
				},
				content:function(){
					trigger.target.loseHp();
				},
				ai:{
            effect:{
            player:function(card,player,target){
                if(get.color(card)=='black'&&get.attitude(player,target)<0) return [1,1];
            },
        },
    },
        },
        yunyizhong:{
                audio:"ext:云将/audio:2",
                enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.countCards('h')!=target.countCards('h');
				},
				content:function(){
					var num=player.countCards('h')-target.countCards('h');
					if(num>0){
					if(num>5){
							num=5;
						}
						target.draw(num);
					}
					else if(num<0){
						target.chooseToDiscard(-num,true);
					}
				},
				ai:{
					threaten:1.8,
					order:function(name,player){
						var max=true,num=0;
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i]==player) continue;
							var att=get.attitude(player,players[i]);
							var dh=player.countCards('h')-players[i].countCards('h');
							if(att*dh>num){
								if(att>0){
									max=true;
								}
								else if(att<0){
									max=false;
								}
								num=att*dh;
							}
						}
						if(max) return 10;
						return 0.5;
					},
					result:{
						player:function(player,target){
							return (player.countCards('h')-target.countCards('h'))*get.attitude(player,target);
						}
					},
					expose:0.2
				}
        },
        "yunmansi":{
                audio:"ext:云将/audio:2",
                    trigger:{
				        target:'useCardToBefore'
				        },
				        forced:true,
			        	priority:15,
		        		filter:function(event,player){
					    return event.card.name=='nanman';
		        		},
				        content:function(){
					       trigger.cancel();
				        },
				        ai:{
				        	effect:{
				        		target:function(card,player,target){
					        		if(card.name=='nanman') return "zeroplayertarget";
				        		}
			         		}
			        	},
				group:['yunmansi_a','yunmansi_b'],
				subSkill:{
			    a:{
			    audio:"yunmansi",
			    enable:'phaseUse',
				viewAs:{
				name:'nanman'
				},
				usable:1,
				filterCard:true,
				prompt:"将任意张手牌当做【南蛮入侵】并指定等量的角色使用",
				selectCard:function(){
					if(ui.selected.targets.length) return [ui.selected.targets.length,Math.min(ui.selected.targets.length+1,game.players.length-1)];
					return [1,game.countPlayer()-1];
				},
				check:function(card){
				var player=_status.event.player;
				if(game.countPlayer(function(current){
				return current!=player&&player.canUse('nanman',current)&&get.effect(current,{name:'nanman'},player,player)>0;
				})<=ui.selected.cards.length) return 0;
				return 7-get.value(card);
    },
				selectTarget:function(){
					return ui.selected.cards.length;
				},
	        	ai:{
                   order:5,
                   result:{
                    player:1.5,
                    target:-1.5,
                    ignoreStatus:true,
                   },
                   effect:{
                        player:function(card,player,target){ 
                           if(card.name=='nanman'&&get.attitude(player,target)>=0){
                            return "zeroplayertarget"; 
                           }
                        },
                     },      
                   },
			       sub:true,
				   },
				   b:{
				        audio:"ext:云将/audio:2",
				        trigger:{
				           source:"damageBegin1",
				        },
				        check:function(event,player){
				            if(get.attitude(player,event.player)<0&&player.storage.yunzhanyuan==false&&player.hp>1) return true;
				            if(get.attitude(player,event.player)<0&&player.storage.yunzhanyuan==true&&player.hp>2) return true;
				            return false;
				            },
				        filter:function(event,player){
				            return event.player.hp>=player.hp&&event.card&&event.card.name=='nanman';
				        },
				        preHidden:true,
				        prompt:function(event,player){
				        var str='';
				        str +='是否失去一点体力令'+get.translation(event.player)+'受到的伤害加一？'
				        return str;
				        },
				        content:function(){
				           player.loseHp();
				           trigger.num++;
				        },
				        sub:true,
				    },
				},
			},
    "yunzhanyuan":{
    audio:"ext:云将/audio:2",
    unique:true,
    trigger:{
        player:"dying",
    },
    mark:true,
    skillAnimation:true,
    marktext:"战缘",
    mark:true,
    intro:{
        content:"limited",
    },
    limited:true,
    animationColor:"orange",
    init:function(player){
        player.storage.yunzhanyuan=false;
    },
    filter:function (event,player){
        return player.storage.yunzhanyuan==false;
    },
    content:function(){
        'step 0'
        player.awakenSkill('yunzhanyuan');
        player.storage.yunzhanyuan=true;
        if(lib.config.extension_云将_yincangpifu=='on'&&player.name1=='yunhuaman'&&!game.yjGetQhlySkin('yunhuaman')){
        player.node.avatar.setBackgroundImage('extension/云将/yunhuamana.jpg');
            }
        'step 1'
        player.draw(3);
        player.recover(player.maxHp-player.hp);
        'step 2'
        if(get.mode()!='boss'){
        player.chooseTarget('请选择【战缘】的目标角色',function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            if(_status.characterlist.contains('lyz_guansuo')||_status.characterlist.contains('JX_baosanniang')){
            if(player.identity=='nei'){
               if(Math.random()>2/3){
               return false;
               }
            }
            return get.attitude(player,target);
            }else{
            return -get.attitude(player,target);
            }
        });
    }
        'step 3'
        if(result.bool){
            var target=result.targets[0];
            if((target.sex=='male'&&_status.characterlist.contains('lyz_guansuo'))||(target.sex=='female'&&_status.characterlist.contains('JX_baosanniang'))){
            var name=target.name;
            _status.characterlist.add(name);
            if(target.sex=='male'){
               player.say(["生死结缘，与君厮守。","这是哪家的小哥哥，真好看，待我绑回寨子里当压寨相公！"].randomGet());
               _status.characterlist.remove('lyz_guansuo');
               target.reinit(name,'lyz_guansuo',false);
               player.addTempSkill('yunzhanyuan_bh',{player:'zhanyuan'});
               target.changeGroup('shu');
               if(target.identity!=='zhu'){
                  target.maxHp=4;
                  }else{
                  target.maxHp=5;
               }
               target.addTempSkill('yunzhanyuan_bh',{player:'zhanyuan'});
               }
            if(target.sex=='female'){
               player.say(["那我是叫你姐姐呢？还是叫你妹妹？。","我是来加入这个家，不是来拆散你们～"].randomGet());
               _status.characterlist.remove('JX_baosanniang');
               target.reinit(name,'JX_baosanniang',false);
               player.addTempSkill('yunzhanyuan_bh',{player:'zhanyuan'});
               target.changeGroup('shu');
               if(target.identity!=='zhu'){
                  target.maxHp=3;
                  }else{
                  target.maxHp=4;
               }
               target.addTempSkill('yunzhanyuan_bh',{player:'zhanyuan'});
               }
            }else{
            target.addTempSkill('yunzhanyuan_xc',{player:'zhanyuan'});
            }
            player.turnOver(true);
            target.turnOver(true);
            player.addSkill('yunzhanyuan_fm');
            target.addSkill('yunzhanyuan_fm');
        }
    },
},
        "yunzhanyuan_xc":{
             trigger:{
                player:"dieBegin",
                },
                forced:true,
                popup:false,
                forceDie:true,
                mark:true,
                marktext:"良人",
                intro:{
                name:"良人",
                content:"“太好了，你这么年轻，应该趾高气昂，为人所不能为之事。你跟花蔓相处不过半载，感情不会太深，很容易放下的。我希望你能写封信给花蔓，说明你的胸襟不止儿女私情这么窄。”<br>“我不会写的！”<br>“你不写？你以为愤怒就能改变跟花蔓的命运？你以为很不满蜀人就会忍让南边的蛮人？要怨就怨你们生错了地方，生在这个人命如草芥的乱世，人人都这么的虚伪迂腐和势利，要怨就怨你们太多想法年少无知到以为不喜欢就能改变周围的人，以为靠你们两个就能改变这个时代！”",        
                },
                filter:function(event,player){
                return player.isTurnedOver();
                },
                content:function(){
                },
                ai:{
                threaten:10,
                },
             },
        "yunzhanyuan_bh":{
                mark:true,
                marktext:"良人",
                intro:{
                name:"良人",
                content:"所有的故事都需要有一个皆大欢喜的结局，不是吗？", 
                },
                mod:{
                targetEnabled:function(card,player,target){
                if(target.isTurnedOver()) return false;
                },
            },
        },
        "yunzhanyuan_fm":{
            trigger:{
                player:"turnOverEnd",
            },
            forced:true,
            popup:false,
            filter:function(event,player){
                return !player.isTurnedOver();
            },
            content:function(){
            event.trigger('zhanyuan')
            player.removeSkill('yunzhanyuan_fm')
            },
        },
        "yunshiguan":{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"drawBegin",
        },
        forced:true,
        content:function(){
        trigger.num=Math.min(5,player.hp);
        },
        group:['yunshiguan_qz'],
        subSkill:{
        qz:{
        trigger:{
        source:"damageEnd",
        },
        forced:true,
        filter:function(event,player){
        return _status.currentPhase==player&&player.isMaxHandcard(true);
        },
        content:function(){
        'step 0'
        var num=Math.floor(player.countCards('h')/2);
        player.chooseToDiscard(num,'h',true);
        player.recover();
        if(!player.hasZhuSkill('yunlisi')&&player.group=='qun'){
        game.countPlayer(function(current){
        if(current.name1=='yunyuanshao'&&current.hasZhuSkill('yunlisi')){
        player.line(current,'green');
        current.recover();
        }
    });
}
        'step 1'
        if(result.cards.length>=Math.ceil(player.hp/2)){
            event.trigger('shiguan');
        }
        },
        sub:true,
        },
    },
},
        "yunxiongjie":{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"shiguan",
        },
        usable:1,
        popup:false,
        content:function(){
        'step 0'
        var num=Math.ceil(player.hp/2)
        player.chooseTarget([1,num],get.prompt('yunxiongjie'),'是否发动【雄桀】选择至多'+num+'名角色？<br>视为对这些角色使用一张【万箭齐发】',function(card,player,target){
            return player!=target;
        }).set("ai",function(target){
            return -get.attitude(player,target);
        });
        'step 1'
        if(result.bool){
        var targets=result.targets;
        player.logSkill('yunxiongjie',event.targets);
        player.useCard({name:'wanjian'},targets,false);
        }
    },
},
        "yunlisi":{
        audio:"ext:云将/audio:2",
        trigger:{
        player:"phaseJieshuBegin",
        },
        zhuSkill:true,
        frequent:true,
        filter:function(event,player){
        return player.hasZhuSkill('yunlisi');
        },
        content:function(){
        "step 0"
        player.chooseTarget(get.prompt('yunlisi'),'是否令一名其他角色获得【势冠】直到其回合结束？',function(card,player,target){
        return player!=target;
        }).set("ai",function(target){
        return get.attitude(player,target);
        if(target.hp<=2) return 0;
        });
        "step 1"
        if(result.bool){
        var target=result.targets[0];
        game.log(target,'成为了','【立嗣】','的目标');
        target.addTempSkill('yunshiguan',{player:'phaseAfter'});
        }
    },
        mod:{
        maxHandcard:function(player,num){
            if(player.hasZhuSkill('yunlisi')){
            return num+=num;
            }
        },
    },
},
        "yuntianyi":{
        audio:"ext:云将/audio:2",
        enable:"phaseUse",
        usable:1,
        selectTarget:[1,Infinity],
        filterTarget:function(card,player,target){
        return player.canCompare(target);
        },
        filter:function(event,player){
        return player.countCards('h')>0;
        },
        multitarget:true,
        multiline:true,
        content:function(){
        player.chooseToCompare(targets).callback=lib.skill.yuntianyi.callback;
        },
        callback:function(){
        if(event.num1>event.num2){
        if(!player.hasSkill('yuntianyi_a')){
        player.addTempSkill('yuntianyi_a');
        }
        target.addTempSkill('yuntianyi_b');
        }else{
        if(!player.hasSkill('yuntianyi_c')){
        player.addTempSkill('yuntianyi_c');
        }
        target.addTempSkill('yuntianyi_d');
        }
    },
        ai:{
        order:4,
        result:{
        target:function(player,target){
        var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    if(get.value(hs[i])<=6){
                        switch(hs[i].number){
                            case 13:return -3.5;
                            case 12:return -3;
                            case 11:return -2.5;
                            case 10:return -2;
                            case 9:return -1.5;
                            case 8:return -1;
                            case 7:return -0.5;
                        }
                    }
                }
            },
        },
    },
},
        "yuntianyi_a":{
        trigger:{
        player:"useCard2",
        },
        direct:true,
        charlotte:true,
        superCharlotte:true,
        filter:function(event,player){
        return event.card&&event.card.name=='sha';
        },
        content:function(){
        'step 0'
        player.chooseTarget('是否发动【天义】指定额外角色成为此【杀】的目标？',[1,Infinity],function(card,player,target){
        var evt=_status.event.getTrigger();
        return target!=player&&target.hasSkill('yuntianyi_b')&&!evt.targets.contains(target);
        }).ai=function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        };
        'step 1'
        if(result.bool&&result.targets&&result.targets.length){
            var targets=result.targets;
            player.line(targets,trigger.card.nature);
            trigger.targets.addArray(targets);
            trigger.yuntianyi_a=true;
        }
    },
},
        "yuntianyi_b":{
        mark:true,
        marktext:"不义",
        intro:{
        name:"天义",
        content:"不仁不义之徒，受死!",
        charlotte:true,
        superCharlotte:true,
        },
    },
        "yuntianyi_c":{
        mod:{
            playerEnabled:function(card,player,target){
			if(target.hasSkill('yuntianyi_d')) return false;
			},
        },
    },
        "yuntianyi_d":{
        mark:true,
        marktext:"正义",
        intro:{
        name:"天义",
        content:"阁下乃正直仁爱之士，子义佩服!",
        charlotte:true,
        superCharlotte:true,
        },
    },
        "yunaozhan":{
        audio:"ext:云将/audio:2",
        trigger:{
        source:"damageEnd",
        },
        forced:true,
        filter:function(event,player){
        return event.card&&event.card.name=='sha';
        },
        content:function(){
        'step 0'
        player.draw();
        'step 1'
        var card=result[0];
        event.card=card;
        if(card.name=='sha'){
        player.getStat().card.sha--;
        }
    },
},
        
        
        
        
        },
        translate:{     
            "yungkd":"🐶",
            "yungkd_info":"【一刀斩】：Silence wench I do not wish to be horny anymore I just want to be happy。",
            "_sanfentianxia_wei":"魏武扬鞭",
            "_sanfentianxia_wei_info":"",
            "_sanfentianxia_shu":"昭烈季汉",
            "_sanfentianxia_shu_info":"",
            "_sanfentianxia_wu":"虎踞江东",
            "_sanfentianxia_wu_info":"",
            "_sanfentianxia_qun":"群雄乱武",
            "_sanfentianxia_qun_info":"",
            "_sanfentianxia_jini":"三分归晋",
            "_sanfentianxia_jin_info":"",            
            yunshenyi:"神裔",
            "yunshenyi_info":"锁定技：你的手牌数低于体力上限时，补充至体力上限。",
            yunshenzi:"神姿",
            "yunshenzi_info":"一回合限一次：场上有角色受到伤害后，你选择一项：①摸一张牌；②获得其一个技能。",
            yunshenquan:"神权",
            "yunshenquan_info":"出牌阶段，你可观看一名其他角色的手牌并获得其一张牌，然后你须立即使用一张牌（无次数限制），否则令【神权】失效直到回合结束。",
            yunjilve:"极略",
            "yunjilve_info":"你可以将一张牌当做任意基本牌或锦囊牌使用或打出。（一回合每种牌名限一次）",
            yunyice:"遗策",
            "yunyice_info":"锁定技：你每受到一点伤害后摸X张牌，并可以将最多X张手牌交给一名其他角色；之后你进行一次判定：若结果为红色：你恢复一点体力；黑色：你选择一名角色弃置其区域一张牌。（X为你已损失的体力值）",
            yunyicea:"遗策",
            "yunyicea_info":"当你受到伤害结束后进行一次判定：若结果为红色：你恢复一点体力；黑色：你选择一名角色弃置其区域内一张牌。",
            yunguimou:"鬼谋",
            "yunguimou_info":"一名其他角色的准备阶段：你可以与其拼点，若你赢，则可视为使用一张普通锦囊牌；若你没赢，则受到一点伤害。",
            yunqizhi:"奇制",
            "yunqizhi_info":"①出牌阶段你使用非装备牌指定目标后，可以弃置一名角色一张牌，然后其摸一张牌。②弃牌阶段前你摸X张牌，若X不小于你的体力值，则你获得【持重】直到你下个回合开始。(X为你出牌阶段发动【奇制】的次数)",
            yuntanlang:"贪狼",
            "yuntanlang_info":"锁定技：你的身份为[主公]／［主帅］／[地主]时不增加体力上限。其他角色的准备阶段，若你的手牌数小于体力上限，你摸一张牌。",
            yunwushuang:"无双",
            "yunwushuang_info":"锁定技：准备阶段，你令所有其他角色的非锁定技失效，获得技能【极武】直到回合结束。",
            yunqixing:"祈星",
            "yunqixing_info":"摸牌阶段结束后：你观看堆顶的七张牌，然后可依次使用其中有合法目标的锦囊牌，获得其余的非锦囊牌并弃置等量的牌。",
            yunbazhen:"八阵",
            "yunbazhen_info":"①每回合你只能受到一次伤害；②每回合限一次，你成为其他角色使用锦囊牌的目标时，你可令此牌对你无效；③一名其他角色出牌阶段结束时，若此回合你发动过【八阵】前两项效果，你发动一次【祈星】。",
            yunshelve:"涉略",
            "yunshelve_info":"准备阶段：你可以选择获得场上一个技能直到你再次发动【涉略】。（限定技、觉醒技、隐匿技、使命技除外）",
            yunkeji:"克己",
            "yunkeji_info":"锁定技，每回合各限一次：①你使用锦囊牌时，从牌堆／弃牌堆随机获得一张装备牌；②你受到伤害前，可弃置一张装备牌抵消此伤害并摸一张牌。",
            yunduorui:"夺锐",
            "yunduorui_info":"你对其他角色造成伤害后可令其进入【丧胆】状态，若其已【丧胆】则使其所有技能失效直到其回合结束。",
            yunzhiti:"止啼",
            "yunzhiti_info":"锁定技：若场上受伤角色不小于一：你摸牌阶段额外摸一张牌，出牌阶段可额外使用一张【杀】，手牌上限额外加一；不小于二：已受伤的角色摸牌阶段执行摸牌后，你可令其弃置一张牌，若其已【丧胆】则改为获得其一张牌；不小于三：已受伤的其他角色手牌上限减半（向下取整），并废除已受伤的【丧胆】角色装备栏。",
            yunjieyin:"结姻",
            "yunjieyin_info":"限定技：准备阶段，你可选择与一名其他角色结为〖情缘〗。",
            yunqingyuan:"情缘",
            "yunqingyuan_info":"锁定技：『孙尚香』摸牌/恢复体力时，你摸一张牌/恢复一点体力；你受到伤害后，若『孙尚香』未受伤，则『孙尚香』失去一点体力。",
            yunxiaoji:"枭姬",
            "yunxiaoji_info":"锁定技：摸牌阶段你少摸一张牌，额外获得一张装备牌；使用装备牌时获得额外效果:①装备武器时摸两张牌；②装备防具时恢复一点体力；③装备防御马时随机获得一张锦囊牌；④装备进攻马时随机获得一张基本牌；⑤装备宝物时随机获得一张装备牌。",
            yunshangce:"上策",
            "yunshangce_info":"你使用的【杀】无视距离、不可闪避。",
            yunzhongce:"中策",
            "yunzhongce_info":"出牌阶段限一次：你可以弃置一名角色区域内一张牌。",
            yunxiace:"下策",
            "yunxiace_info":"结束阶段你将手牌摸至五张。",
            yunxiance:"献策",
            "yunxiance_info":"一名角色的准备阶段开始时：你可以弃置一张牌令其选择获得以下一项效果直到其回合结束：〖上策〗、使用的第一张【杀】无视距离，不可被响应；〖中策〗、出牌阶段限一次，可弃置一名角色区域内一张牌；〖下策〗、结束阶段时将手牌摸至五张。若当前角色为你，则改为失去一点体力获得全部效果。",
            yunfengming:"凤鸣",
            "yunfengming_info":"觉醒技：你死亡前将体力和体力上限调整为一，获得【涅磐】失去【献策】并免疫伤害、不可选中直到你准备阶段结束后。",
            yunzongyu:"总御",
            "yunzongyu_info":"主公技：限定技，出牌阶段，你可令一名其他角色增加一点体力上限并摸两张牌，将其势力更改为『魏』，然后你获得【魏武】。",
            yunweiwua:"魏武",
            "yunweiwua_info":"结束阶段：你可令一名体力值小于你的其他『魏』势力角色恢复一点体力。",
            yunxieling:"挟令",
            "yunxieling_info":"限定技:出牌阶段：你可以指定一名体力值大于你的角色，令其余角色选择一项：1、对你指定的角色使用一张【杀】；2、被你视为使用一张杀。",
            yunguixin:"归心",
            "yunguixin_info":"你使用【杀】指定目标／被【杀】指定时，可弃置一张手牌切换至【雄略】，并获得目标一张牌。",
            yunxionglve:"雄略",
            "yunxionglve_info":"出牌阶段：你可以弃置一张手牌切换至【归心】，并获得一张锦囊牌。",
            yunguayin:"挂印",
            "yunguayin_info":"觉醒技：场上有角色死亡时，若你对其造成过伤害，你修改【义绝】，然后获得【武圣】和一枚〖傲〗标记。",
            yunyijueb:"义绝",
            "yunyijueb_info":"锁定技：一回合每名角色限一次，你使用【杀】指定目标后将其体力调整为一，其结束阶段将体力恢复至上限。",
            yunwusheng:"武圣",
            "yunwusheng_info":"锁定技：①你杀死一名角色后，若你拥有的〖傲〗标记数小于体力上限，则你失去一点体力上限获得一枚〖傲〗；②你带有〖伤害〗标签的牌均视为【杀】，且使用的红色【杀】伤害加一；③你的手牌上限加X，攻击距离加X，其他角色计算与你的距离为X，摸牌阶段额外摸X张牌。（X为你拥有的〖傲〗标记数）",
            yunqieting:"窃听",
            "yunqieting_info":"锁定技：每回合限一次，你攻击范围内的角色使用牌时，你获得其一张牌。",
            yunxianzhou:"献州",
            "yunxianzhou_info":"锁定技：你受到伤害后，须将全部手牌交给一名其他角色。",
            yunshangshi:"伤逝",
            "yunshangshi_info":"锁定技：①你的手牌数低于〖恨〗标记数量时，将手牌摸充至〖恨〗的标记数量；②你击杀一名角色后失去一半（向上取整）的〖恨〗标记。",
            yunjueqing:"绝情",
            "yunjueqing_info":"锁定技：①你造成的伤害视为由【冰杀】造成；②你造成／受到伤害时，若你拥有的〖恨〗标记小于体力上限，你获得一枚〖恨〗标记。",
            yunjuekou:"绝口",
            "yunjuekou_info":"一回合各限一次：①场上有角色受到不为你造成的伤害后，若你本轮未因其发动过发动过【绝口】且伤害来源体力值大于一，则你可以弃置至多X张手牌对伤害来源造成一点伤害；②你回复体力后可弃置至多X张手牌。（X为你拥有的〖恨〗标记数）",
            yunzhulian:"株连",
            "yunzhulian_info":"出牌阶段至多三次，若场上〖株〗标记小于三，你选择一名没有〖株〗标记的其他角色，令其获得〖株〗标记。",
            yunzhuliana:"株",
            "yunzhuliana_info":"其他角色计算与你的距离为一，你受到伤害时，伤害来源摸两张牌或恢复一点体力，然后你移除〖株连〗标记。",
            yunjiaoheng:"娇横",
            "yunjiaoheng_info":"限定技：①若你的身份不为［内奸］，一名其他角色死亡后，你可弃置所有牌，将其替换为『董卓』，身份设定为与你同一阵营进行游戏；②若你的身份为［内奸］，你濒死时可将武将牌替换为『董卓』进行游戏。",            
            yunbaonve:"暴虐",
            "yunbaonve_info":"锁定技：除『董白』以外其他角色的准备阶段时，你可视为对其使用一张【杀】。",
            yunchongni:"宠溺",
            "yunchongni_info":"锁定技：①你不会对『董白』造成伤害；②『董白』受到伤害时你代替其承担伤害；③你造成伤害时若『董白』手牌数小于体力上限，则令『董白』摸一张牌",
            yunyeyan:"业炎",
            "yunyeyan_info":"限定技：出牌阶段你可以弃置装备区所有牌，然后对一名其他角色造成等量的火属性伤害。",
            yunguqu:"顾曲",
            "yunguqu_info":"一回合限一次：一名其他角色使用非装备牌时，你可弃置一张花色相同的牌令其无效；然后若此牌为：红色、你摸一张牌；黑色、你弃置一名角色区域内一张牌。<br><br>英姿：你的手牌上限额外增加体力上限数，准备阶段你选择一项：①获得一张装备牌；②获得一张【铁索连环】。",
            yunyingzi:"英姿",
            "yunyingzi_info":"锁定技：你的手牌上限额外增加体力上限数，准备阶段你选择一项：①获得一张装备牌；②获得一张【铁索连环】。",
            yunzhaolie:"昭烈",
            "yunzhaolie_info":"出牌阶段：你可以将任意张牌交给一名此回合未对其发动过【昭烈】的其他角色，令其获得【武圣】【咆哮】【龙胆】【铁骑】【烈弓】之一直到其回合结束。",
            yunzhaoliea:"昭烈",
            "yunzhaoliea_info":"你可以将一张红色牌当做【杀】使用或打出。使用的方片杀没有距离限制。",
            yunzhaolieb:"昭烈",
            "yunzhaolieb_info":"你使用【杀】无次数限制；当你使用的【杀】被【闪】抵消时，获得一枚〖咆〗。你使用【杀】造成伤害时，弃置所有“咆”并令伤害值+X。（X为〖咆〗数）",
            yunzhaoliec:"昭烈",
            "yunzhaoliec_info":"你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
            yunzhaolied:"昭烈",
            "yunzhaolied_info":"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            yunzhaoliee:"昭烈",
            "yunzhaoliee_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应，2.其体力值大于等于你的体力值，此【杀】伤害+1。",
            yunsangu:"三顾",
            "yunsangu_info":"主公技：限定技，出牌阶段，你可令一名其他角色增加一点体力上限并恢复一点体力，将其势力更改为『蜀』，然后你获得【仁德】。",
            yunrende:"仁德",
            "yunrende_info":"场上其他『蜀』势力角色每轮限一次，其获得牌后，可令你摸一张牌。",
            yunwanjun:"万军",
            "yunwanjun_info":"出牌阶段：你可以弃置两张牌，选择一名此回合未对其发动过【万军】的其他角色，视为对其使用一张无视距离、无视防具、不可响应、不触发技能、不计入次数的【雷杀】。",
            yunyongzhi:"勇智",
            "yunyongzhi_info":"结束阶段：你摸X张牌，若X不小于三，则额外获得一张【酒】；你使用【酒】无次数限制、且【酒】不计入手牌上限。(X为你此回合造成的伤害值，最多为三)",
            yunbiyue:"闭月",
            "yunbiyue_info":"锁定技：你的手牌上限加X；当你的手牌数大于体力值时，你不会成为【杀】或【决斗】的目标。（X为你的体力值）",
            yunmeihuo:"魅惑",
            "yunmeihuo_info":"出牌阶段限一次：你可弃置一张手牌并指定两名其他角色拼点，赢家视为对输家使用一张【决斗】，输家视为对赢家使用一张【杀】，平局则双方各自弃置三张牌。",
            yunzhiba:"制霸",
            "yunzhiba_info":"场上其他『吴』势力角色在出牌阶段限一次：可以交给你一张装备牌，然后其摸两张牌。",
            yunzhibaa:"制霸",
            "yunzhibaa_info":"",
            yunxianxi:"献玺",
            "yunxianxi_info":"主公技：限定技，出牌阶段，你可令一名其他角色增加一点体力上限并废除判定区，将其势力更改为『吴』，然后你获得【制霸】。",
            yunjiang:"激昂",
            "yunjiang_info":"锁定技：你因【决斗】对其他角色造成伤害后恢复一点体力或摸两张牌。",
            yunyingyang:"鹰扬",
            "yunyingyang_info":"①出牌阶段：你可弃置X张装备牌选择一名其他角色，视为对其使用一张【决斗】(X为你此阶段发动过【鹰扬】的次数加一)；②一回合限一次：你于回合外受到伤害后，可从牌堆／弃牌堆将一张装备牌置入装备栏，然后对视为对伤害来源使用一张【决斗】。",
            yunbugua:"卜卦",
            "yunbugua_info":"场上其他角色出牌阶段限一次：可令你进行一次卜算三，然后其与你各摸一张牌；锁定技：你每回合首次受到伤害后发动一次【卜卦】，场上有角色发动【卜卦】时，若你的【伏诛】标记小于三，则你获得一枚【伏诛】标记。",
            yunfuzhu:"伏诛",
            "yunfuzhu_info":"出牌阶段：若你拥有的【伏诛】标记不小于三，则你可选择一名攻击范围内的其他角色，依次移除所有的【伏诛】标记，每移除一枚【伏诛】标记便视为对其使用一张无次数限制、无视防具的【杀】，若其未因此死亡，则你翻面。",
            yundanlie:"胆裂",
            "yundanlie_info":"你计算与其他角色的距离时始终加X，其他角色计算与你的距离始终减X，你每回合至多使用X张牌，你恢复体力后移除【胆裂】。（X为你的体力值）",
            yunyicong:"义从",
            "yunyicong_info":"每回合各限一次：①你被【杀】指定为目标时，视为对此【杀】的来源使用一张【杀】；②你使用【杀】造成伤害时可摸一张牌并令目标获得【胆裂】。",
            yunwansha:"完杀",
            "yunwansha_info":"一回合每名角色限一次：其他角色于你回合内进入濒死状态时，你可进行一次判定，若判定结果为黑色：你令其死亡；红色、你令其失去所有技能直到其回合结束。",
            yunchizhong:"持重",
            "yunchizhong_info":"锁定技：你弃牌阶段时手牌上限额外加X/2（向上取整），不会成为延时锦囊的目标。",
            yunjimou:"极谋",
            "yunjimou_info":"锁定技：准备阶段／结束阶段，你获得【控局】直到回合结束／你获得【帷幄】直到回合开始。<br><br>【控局】：你使用红色的基本牌／普通锦囊牌可额外结算一次。<br><br>【帷幄】：锁定技：其他角色使用的黑色牌不能指定你为目标。",
            yunjiance:"间策",
            "yunjiance_info":"出牌阶段限一次：你可以将一张手牌交给一名其他角色，令其与另一名角色拼点，赢的角色弃置两张牌，没赢的角色受到一点伤害。",
            yunzhujing:"筑京",
            "yunzhujing_info":"弃牌阶段：若你没有护甲值，则你可以弃置至多五张牌获得等量的护甲。锁定技：你的手牌上限额外增加拥有的护甲数。",            
            yunxiongcai:"雄才",
            "yunxiongcai_info":"游戏开始时：你选择获得【雄略】或【归心】，你每次发动【雄略】或【归心】时若手牌数低于体力上限，你摸一张牌。<br><br>雄略：出牌阶段，你可以弃置一张手牌切换至【归心】并获得一张锦囊牌。<br><br>归心：你使用【杀】指定目标／被【杀】指定为目标时，可弃置一张手牌切换至【雄略】并获得目标／【杀】的使用者一张牌。",
            yunlongdan:"龙胆",
            "yunlongdan_info":"你可将任意一张手牌当做【杀】／【闪】使用或打出；出牌阶段你使用【杀】的次数额外加X。（X为你已损失的体力值，最高增加至三次）",
            yunlonglie:"龙烈",
            "yunlonglie_info":"锁定技：你每回合发动【龙胆】首次使用／打出一种花色的牌后，若为：♠️你可令一名其他角色受到一点伤害；♥️你恢复一点体力；♣️你可弃置一名其他角色一张牌；♦️你摸两张牌。",
            yunqiqiao:"奇巧",
            "yunqiqiao_info":"①你的宝物牌与防具牌不会被其他角色获得或弃置；②每回合限一次：场上其他角色使用装备牌后，你可以获得该装备的复制牌。",
            yunquhu:"驱虎",
            "yunquhu_info":"出牌阶段限一次：你可选择与一名此回合未对其发动过【驱虎】角色拼点，若你赢：你恢复一点体力，然后令其对你指定的一名角色造成一点伤害；若你没赢：其对你造成一点伤害，然后令【驱虎】本回合使用次数加一。",
            yunwangzuo:"王佐",
            "yunwangzuo_info":"锁定技：你受到伤害时摸X张牌，然后可令一名其他角色将手牌补充至体力上限（至多为五），若其手牌数不小于体力上限，则改为摸X张牌且此回合不能再对其发动【王佐】。（X为你已损失体力值）",
            yunqiaobian:"巧变",
            "yunqiaobian_info":"出牌阶段限一次：你可以将一张牌当做任意基本牌或非延时锦囊牌使用。",
            yunshanlve:"善略",
            "yunshanlve_info":"锁定技：你每受到一点伤害后进行一次判定，若结果为黑色：出牌阶段使用【巧变】次数加一；红色：你摸两张牌。（【巧变】额外使用次数可叠加，使用后扣除）",
            yunlinglong:"玲珑",
            "yunlinglong_info":"出牌阶段每名角色各限一次：你可以弃置一张装备牌，令一名角色恢复一点体力或者摸两张牌。",
            yunjieyi:"结义",
            "yunjieyi_info":"出牌阶段限一次：你可以将一张红桃牌当做〖桃园结义〗使用。场上有角色因〖桃源结义〗恢复体力时，你摸一张牌。",
            yunniepan:"涅磐",
            "yunniepan_info":"锁定技：你的体力上限至多为九。①准备阶段你增加一点体力上限并恢复一点体力；②摸牌阶段你改为摸体力上限数的牌。",
            yunyijue:"义绝",
            "yunyijue_info":"一回合每名角色限一次：你使用带有〖伤害〗标签的牌指定唯一角色为目标后，可以摸一张牌然后将其体力调整为一，若如此做，其结束阶段将体力恢复至上限。",
            yunshouji:"授计",
            "yunshouji_info":"出牌阶段：你可将一张手牌标记为〖锦囊〗并交给一名此回合未对其发动过【授计】的其他角色，其出牌阶段可将一张【锦囊】牌当做任意普通锦囊牌使用。",
            yunjinnang:"锦囊",
            "yunjinnang_info":"出牌阶段：你可以将一张有〖锦囊〗标记的牌当做任意普通锦囊牌使用。",
            yunyingshi:"鹰视",
            "yunyingshi_info":"觉醒技：准备阶段，若你武将牌上的〖忍〗不小于场上存活人数，你将所有〖忍〗加入手牌，体力上限调整为五，然后跳过摸牌阶段并失去【忍戒】获得【狼顾】。",
            yunrenjie:"忍戒",
            "yunrenjie_info":"锁定技：你濒死时将所有〖忍〗加入手牌；场上有角色受到伤害后，若你拥有的〖忍〗小于场上存活人数，你摸一张牌然后将一张牌置于武将牌上称为〖忍〗。",
            yunqingyuana:"情缘",
            "yunqingyuana_info":"你摸牌/恢复体力时，你令【情缘】摸一张牌/恢复一点体力。",
            yunlanggu:"狼顾",
            "yunlanggu_info":"锁定技：①你使用牌时若你的体力值不小于一点：此牌无距离限制；不小于两点：此牌无次数限制；不小于三点：此牌可额外指定一个目标；②若你已损失的体力值不小于一点：你的手牌上限等于体力上限；不小于两点：你摸牌阶段额外摸一张牌；不小于三点：结束阶段你可弃置任意张手牌，然后将手牌补充至体力上限。",
            yunzhiheng:"制衡",
            "yunzhiheng_info":"锁定技：①你每轮首次受到伤害后从牌堆／弃牌堆获得一张锦囊牌；②每回合至多三次：你使用的普通锦囊牌可以增加／减少任意角色为目标。",    
             yunhuju:"虎踞",
            "yunhuju_info":"锁定技：你的身份不为[主公]／［主帅］／[地主]／时增加一点体力上限。",        
            yunjianye:"建业",
            "yunjianye_info":"主公技：限定技，出牌阶段，你可令一名其他角色增加一点体力上限并获得一张【桃】，将其势力更改为『吴』，然后你获得【黄武】。",
            yunhuangwu:"黄武",
            "yunhuangwu_info":"一回合一次：场上其他『吴』势力角色恢复体力后，其可以令你恢复一点体力或摸两张牌。",           
            yunfujian:"伏间",
            "yunfujian_info":"锁定技：一轮游戏开始时，若场上没有〖间〗，你可以观看攻击范围内一名角色的手牌，将其中一张牌标记为〖间〗。<br><br>困龙：有〖间〗的角色手牌始终对你可见，其使用〖间〗时取消〖间〗所有目标并摸一张牌，〖间〗离开其手牌时移除标记。",
            yunlingrenxiaoxiong:"枭雄",
            "yunlingrenxiaoxiong_info":"锁定技：你的手牌上限不受体力值减少影响，场上有角色死亡后你重置武将牌并恢复一点体力。",
            yunlingren:"凌人",
            "yunlingren_info":"一回合限一次：你使用带有〖伤害〗标签的牌指定目标后，可猜测其中的一个目标的手牌中是否有基本牌／锦囊牌／装备牌，若猜中的项目数不小于一：你摸猜中项目数的牌；不小于二：此牌对其造成的伤害加一；不小于三：你随机获得一个『魏』势力角色的技能直到你再次因【凌人】获得技能。（觉醒技、隐匿技、使命技除外）<br><br>枭雄：你的手牌上限不受体力值减少影响，场上有角色死亡后你重置武将牌并恢复一点体力。",                       
            yunkunlong:"困龙",
            "yunkunlong_info":"我们中出了一个奸细！",
            yunjiwue:"极武",
            "yunjiwue_info":"你使用【杀】／【决斗】指定目标时，可弃置一张手牌令此【杀】／【决斗】对目标造成的伤害加一；若目标因此进入濒死状态，你令其死亡。",
            yunyugui:"驭鬼",
            "yunyugui_info":"准备阶段／结束阶段：你可以选择一名本轮未成为过【驭鬼】目标的角色，其获得一个由你选择的限定技（启动〖风云再起〗后改为非限定技与觉醒技），若其已因【驭鬼】获得过技能，则替换并重置之。",           
            yunfengyin:"封印",
            "yunfengyin_info":"那个男人……",
            yunchengzhi:"承志",
            "yunchengzhi_info":"一轮游戏开始时，你可随机获得『诸葛亮』武将牌上的一个技能直到你再次因【承志】获得技能。",
            yunqilin:"麒麟",
            "yunqilin_info":"觉醒技：准备阶段，若你已因【承志】获得过至少三次技能，则根据已满足条件执行以下效果：①你造成／受到的伤害累计大于三，获得【绝计】；②你造成／受到的伤害累计大于五，获得【绝阵】；③以上选项均不满足，你摸三张牌，然后视为未发动【麒麟】并重置之，否则你将【承志】修改为锁定技并失去一点体力上限。",
            yunjuezhen:"绝阵",
            "yunjuezhen_info":"锁定技；你始终视为装备有【八卦阵】，并将【绝计】弃置不小于一张牌的发动效果改为摸X张牌或恢复一点体力。（X为你的体力上限减手牌数，至少为一）",
            yunchengzhig:"承志",
            "yunchengzhig_info":"锁定技：一轮游戏开始时，你随机获得『诸葛亮』武将牌上的一个技能直到你再次因【承志】获得技能。",
            yunjueji:"绝计",
            "yunjueji_info":"出牌阶段限一次：你可以弃置最多三张不同类型的牌执行以下效果：不小于一张、你摸一张牌或恢复一点体力；不小于两张、令场上其他角色弃置一张牌；不小于三张、对场上其他角色造成一点伤害。",
            yunsangdan:"丧胆",
            "yunsangdan_info":"①若场上已受伤角色小于三，你恢复已废除的装备栏；②若你未受伤，则移除【丧胆】状态。",
            yunchuandao:"传道",
            "yunchuandao_info":"锁定技：你始终处于横置状态；一名其他角色准备阶段时／弃牌阶段时，你令其横置／其可交给你一张牌然后你可令其恢复一点体力。",
            yuntaiping:"太平",
            "yuntaiping_info":"锁定技：你造成的伤害视为雷属性，受到雷属性伤害时改为恢复等量的体力或摸等量的牌；场上其他角色受到雷属性伤害后，你可令其摸两张牌。",
            yunhuangtian:"黄天",
            "yunhuangtian_info":"主公技：限定技，出牌阶段，你可选择一名其他角色令其增加一点体力上限，然后你从牌堆随机将一张锦囊牌当做【浮雷】置入判定区并获得【遁术】。",
            yundunshu:"遁术",
            "yundunshu_info":"锁定技：准备阶段，若场上没有【浮雷】，你从牌堆随机将一张锦囊牌当做【浮雷】置入判定区。",
            yunyongdi:"拥嫡",
            "yunyongdi_info":"限定技：准备阶段开始时，你可令一名其他角色增加一点体力上限并回复1点体力，然后若该角色的武将牌上有主公技且其不为主公，其获得此主公技。",
            yunluanwu:"乱武",
            "yunluanwu_info":"限定技：出牌阶段，你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】，否则失去1点体力。",
            "fengyunshibian_jx":"风云势变",
            "fengyunshibian_jx_info":"风云势变：第三轮游戏开始时，你选择切换为『群』势力：发动【乱武】，且【乱武】期间你不会成为目标／『魏』势力：发动【拥嫡】，且【拥嫡】发动无性别限制。",
            yunshichou:"誓仇",
            "yunshichou_info":"锁定技：你摸牌阶段额外摸X张牌，计算与其他角色的距离减X，使用【杀】可以额外指定X名角色为目标。（X为你已损失的体力值且至多为三）",
            yunjinshi:"锦狮",
            "yunjinshi_info":"锁定技：①一轮限一次：你濒死时失去一点体力上限，将体力恢复至一点；②你使用【杀】指定目标时，若其手牌数／体力值不小于你，则其不能使用或打出牌／技能失效直到回合结束。",            
            "fengyunshibian_mc":"风云势变",
            "fengyunshibian_mc_info":"风云势变：第三轮游戏开始时，你选择切换为『群』势力：你增加一点体力上限并取消【锦狮】失去体力上限惩罚，令场上角色受到伤害额外加一／『蜀』势力：场上角色死亡后你增加一点体力上限（最多加至九）并失去一点体力（最多失去至一），若此时不是你的回合，则你可立即使用一张【杀】。",
            yunmoshi:"默识",
            "yunmoshi_info":"锁定技：你记录你使用或打出过的牌名，场上其他角色使用或打出你记录过的同名牌时，你可选择弃置其一张牌或摸一张牌，然后移除此牌记录。",
            yunbeige:"悲歌",
            "yunbeige_info":"场上有其他角色受到不为你造成的伤害后，你可进行一次判定，若结果为：♠️伤害来源非锁定技失效直到回合结束；♥️受到伤害的角色恢复一点体力；♣️伤害来源失去一点体力；♦️受到伤害的角色摸两张牌。",
            yunpolu:"破虏",
            "yunpolu_info":"锁定技：每回合你首次造成／受到伤害后，选择令一名角色摸X张牌然后弃置Y张牌或摸Y张牌然后弃置X张牌。（X为你已损失体力值，Y为你当前体力值）",
            yunwulie:"武烈",
            "yunwulie_info":"锁定技：你手牌上限额外增加装备区的牌数；你阵亡时可选择一名其他角色增加一点体力上限并获得【破虏】，若你的身份为［主公］且其为［忠臣］，则令其以［主公］身份继续进行游戏。（若『孙坚』为玩家操控，则『孙坚』阵亡后玩家操控因【武烈】继承［主公］身份的目标进行游戏）",
            yuntaolve:"韬略",
            "yuntaolve_info":"锁定技：你失去最后一张手牌后摸一张牌，若你回合内因使用／打出／弃置牌发动【韬略】摸牌，则你可立即使用之。",
            yunqianya:"谦雅",
            "yunqianya_info":"①摸牌阶段前你可弃置一张牌并跳过此阶段，然后令一名其他角色立即执行一次额外的摸牌阶段；②其他角色使用锦囊牌指定你为唯一目标时，你可弃置一张牌令一名其他角色立即执行一次额外的出牌阶段；③弃牌阶段后你若你已受伤，则可弃置一张牌获得一点护甲（护甲至多不超过你已损失体力值），然后令一名其他角色立即执行一次额外的弃牌阶段。",
            yunguose:"国色",
            "yunguose_info":"①弃牌阶段前：你摸X张牌（X为你出牌阶段使用的牌数，至多不超过当前体力值）；②弃牌阶段后：你可选择一名其他角色弃置其至多Y张牌（Y为你弃牌阶段弃置的牌数，至多不超过当前体力值）。",
            yuntianxiang:"天香",
            "yuntianxiang_info":"锁定技：准备阶段你可令一名其他角色获得【天香】标记直到你回合开始；一回合一次：有【天香】标记的角色造成／受到伤害时，你摸一张牌。",
            "fengyunshibian_dxq":"风云势变",
            "fengyunshibian_dxq_info":"风云势变：第三轮游戏开始时，你选择切换为『群』势力：发动【国色】时可额外执行一次效果；你视为拥有【天香】标记。／『吴』势力：发动【国色】时令目标废除全部装备栏直到其回合结束；将【天香】标记持续时间调整为永续。",          
            yunduodi:"夺嫡", 
            "yunduodi_info":"锁定技：①若场上存活角色大于二，你造成伤害后与上家交换座次，然后选择弃置一张牌或令其翻面；②出牌阶段限一次：若你当前座次号数为奇数／偶数，你可令一名其他角色摸／弃置X张牌或自己摸一张牌。（X为你当前座次号数，至多不超过你已损失体力值）",            
             yundengwei:"登位",
             "yundengwei_info":"觉醒技：结束阶段，若你发动过至少五次【夺嫡】／因【行殇】继承了［主公］身份，则你增加一点体力上限并恢复一点体力，失去【夺嫡】【行殇】获得【承天】；你身份为［主公］时额外获得【颂威】。",
             yunchengtian:"承天",
             "yunchengtian_info":"①锁定技：若场上存活角色大于二，你受到伤害后与下家交换座次，然后选择弃置一张牌或令其翻面；②出牌阶段限一次，若你当前座次号数为奇数／偶数，你可令一名角色摸／弃置X张牌。（X为你当前座次号数，至多不超过你已损失体力值）",
             yunxingshang:"行殇",
             "yunxingshang_info":"锁定技：场上其他角色死亡时你恢复一点体力，若你未受伤则获得其全部牌；若其身份为［主公］且你为［忠臣］，则你增加一点体力上限并与其交换身份牌，以［主公］身份继续进行游戏。",
             yunsongwei:"颂威",
             "yunsongwei_info":"一回合限一次：场上其他『魏』势力角色受到伤害后其可进行一次判定，若结果为黑色、你恢复一点体力。",             
             yunfanghun:"芳魂",
             "yunfanghun_info":"一轮游戏开始时，你可从随机X名『蜀』势力角色中选择获得至多X个主公技、觉醒技、限定技、隐匿技、使命技以外的技能直到你再次因【芳魂】获得技能。（X为你当前体力值，最多为五）",
            yunyazi:"睚眦",
             "yunyazi_info":"锁定技：每回合至多三次，①你使用或打出【睚眦】未记录的牌后，若你本局游戏使用或打出过同名牌或受到过同名牌造成伤害，则你记录此牌名并发动一次【谋策】；②你受伤害后发动一次【谋策】，若造成伤害为【睚眦】记录牌，则你可对伤害来源造成一点伤害并移除此牌记录。<br><br>谋策：你亮出牌堆顶的X张牌并获得其中不同类型的牌各一张，然后可将一张牌交给一名其他角色。（X为你体力上限加已损失体力值，至多为五）", 
             yunmouce:"谋策",
             "yunmouce_info":"你亮出牌堆顶的X张牌并获得其中不同类型的牌各一张，然后可将一张牌交给一名其他角色。（X为你体力上限加已损失体力值，至多为五）",
             yunchangqu:"长驱",
             "yunchangqu_info":"①锁定技：你对有【堑】标记的角色使用牌无距离限制；②你使用带有〖伤害〗标签的牌指定唯一角色为目标时可弃置其一张牌。", 
             yunpoqian:"破堑",
             "yunpoqian_info":"场上角色受到不为你造成的伤害后，你可令伤害来源获得一枚【堑】（最多能获得三个【堑】）。锁定技：①有【堑】的角色摸阶段移除一枚【堑】，摸牌数减半（向上取整），然后你摸减少数的牌；②一名角色回合结束后，若此回合内有携带【堑】的角色死亡，你获得一个额外回合，你于此额外回合使用牌无次数限制。",
             yunliegong:"烈弓",
             "yunliegong_info":"锁定技：你使用【杀】无距离限制；使用【杀】指定目标时，若其在你攻击范围内／攻击范围外，此【杀】不计入次数／其不可响应此【杀】。",
             yunposhi:"破势",
             "yunposhi_info":"一回合限一次，你造成伤害时，可令此伤害加X并摸X张牌，然后你重置X的数值，且【破势】失效直到回合结束。（X为你造成伤害的次数减一）",
             yunxuezhao:"血诏",
             "yunxuezhao_info":"每回合限一次：你使用基本牌或普通锦囊牌指定唯一角色为目标时，若你体力值大于一，则你可以失去一点体力选择令至多X名其他角色视为对此牌目标使用一张同名牌。（X为你已损失体力值，至多为三）",
             yuntianming:"天命",
             "yuntianming_info":"锁定技：结束阶段，你恢复Y点体力、摸Y张牌。（Y为你已损失体力值的一半，向上取整）",
             yunhanzuo:"汉祚",
             "yunhanzuo_info":"主公技：有角色死亡后，若其身份为：［忠臣］、你失去一点体力上限；［内奸］、你清空判定区并重置武将牌；［反贼］、你恢复一点体力或摸两张牌。",
             yunhuwei:"护卫",
             "yunhuwei_info":"一回合限一次：场上一名其他角色受到不为你造成的伤害前，若其已受伤，则你可令其获得一点护甲，然后你受到一点伤害。",
             yunelai:"恶来",
             "yunelai_info":"锁定技：①你受到伤害后可获得等量层数的【恶】；②准备阶段：你移除全部的【恶】，恢复X点体力并摸X张牌，若移除的【恶】不小于二，则你可对一名其他角色造成一点伤害。（X为你移除【恶】的一半，向上取整）",
             yundingce:"定策",
             "yundingce_info":"限定技：准备阶段，你可选择一名其他角色，令其本局游戏回合内使用非转化牌时随机执行一项：①摸一张牌；②恢复一点体力；③此牌不可响应；④此回合使用【杀】次数加一。",
             yunshimeng:"誓盟",
             "yunshimeng_info":"①出牌阶段限一次：你可选择获得一名其他角色的全部手牌，然后交给其你手牌数一半的牌（向下取整）；②【定策】目标每回合首次执行【定策】的一项效果时，你摸一张牌；③【定策】目标死亡后你重置【定策】。",
             "yunxiandeng":"先登",
             "yunxiandeng_info":"你回合开始前获得一枚【骁烈】标记，若拥有的【骁烈】标记小于三，则你可与一名其他角色进行拼点，若你赢：你获得一个额外回合。",
             "yunxiaolie":"骁烈",
             "yunxiaolie_info":"锁定技：你的♣️牌点数均视为K；一轮游戏开始时，你失去全部【骁烈】标记，移动场上等量的牌。",
             "yunzhenjun":"镇军",
             "yunzhenjun_info":"你使用黑色牌指定一名体力值不小于你的角色为目标时，你可令其失去一点体力。",
             "yunyizhong":"毅重",
             "yunyizhong_info":"出牌阶段限一次：你可选择一名其他角色令其将手牌数摸至／弃至X张。（X为你的手牌数且至多为五）",
             "yunmansi":"蛮嗣",
             "yunmansi_info":"①出牌阶段限一次：你可将任意张牌当做【南蛮入侵】对等量的角色使用；②你使用【南蛮入侵】造成伤害时，若目标体力值不小于你，则你可失去一点体力令此伤害加一；③锁定技：【南蛮入侵】对你无效。",
             "yunzhanyuan":"战缘",
             "yunzhanyuan_info":"限定技：你进入濒死阶段时，可摸三张牌并将体力恢复至上限，然后你与一名其他角色翻面。<br><br>龙凤巾：若未登场的武将中有〖阳·关索〗或〖天牢·鲍三娘〗：你可令【战缘】选择的男性／女性角色将武将牌替换为〖阳·关索〗／〖天牢·鲍三娘〗，并且你与其不会成为卡牌目标直到翻回正面。",
             "yunshiguan":"势冠",
             "yunshiguan_info":"锁定技：你的摸牌数为当前体力值（至多为五）；你造成伤害后，若你的手牌数为场上最高，你须弃置一半（向下取整）手牌并恢复一点体力。",
             "yunxiongjie":"雄桀",
             "yunxiongjie_info":"一回合限一次，若你因【势冠】弃置了至少X张牌，则你可视为对至多X名角色使用一张【万箭齐发】。（X为你体力值的一半，向上取整）",
             "yunlisi":"立嗣",
             "yunlisi_info":"主公技：你的手牌上限翻倍；回合结束时，你可令一名其他角色获得【势冠】直到其回合结束，若其为『群』势力角色，则其因【势冠】弃置牌和恢复体力时，你也恢复一点体力。",
             "yuntianyi":"天义",
             "yuntianyi_info":"出牌阶段限一次，你可用一张牌与任意名角色拼点，若你赢：你本回合使用【杀】可额外指定其为目标；若你没赢：你本回合不能使用牌指定其为目标。",
             "yunaozhan":"鏖战",
             "yunaozhan_info":"锁定技：你使用【杀】造成伤害后摸一张牌，若此牌为【杀】，则重置你本回合使用【杀】的次数。",
        },
    },
    intro:"本拓展需要安装千幻聆音与十周年UI才能体验完整内容，内置部分功能，长按可查看功能介绍。<br>QQ交流群:813569942</b><br><img style=width:200px src="+lib.assetURL+"extension/云将/MG_yj.jpg>",
    author:"柚子丶奶茶丶猫",
    diskURL:"",
    forumURL:"",
    version:"8.73.65",
},files:{"character":[],"card":[],"skill":[]}}})