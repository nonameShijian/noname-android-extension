game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"千幻聆音",content:function(config,pack){
    //提示：本扩展源代码向无名杀社区开放，欢迎大家借鉴和参考代码。

    var QHLY_DEBUGMODE = true;

    //判断是否安装了某个扩展，用来处理兼容事宜。
    game.qhly_hasExtension = function(str){
        return lib.config.extensions && lib.config.extensions.contains(str) && lib.config['extension_'+str+'_enable'];
    };
    lib.qhly_dirskininfo={};
    game.qhly_importSkinInfo=function(obj){
        lib.qhly_dirskininfo[obj.name] = obj;
    };
    lib.qhly_filterPlainText=function(str){
        if(!str)return "";
        var regex = /(<([^>]+)>)/ig;
        return str.replace(regex,"");
    };
    lib.qhly_getSkillKeyWordColorList=function(){
        if(!lib.config.qhly_keymark)return null;
        if(lib.config.qhly_keymark.length == 0)return null;
        var pairs = lib.config.qhly_keymark.split(";");
        var obj = {};
        for(var pair of pairs){
            var us = pair.split(":");
            if(us[0] && us[1] && us[0].length && us[1].length){
                obj[us[0]] = us[1];
            }
        }
        return obj;
    };
    String.prototype.replaceAll = function(s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    };
    lib.qhly_keyMark=function(str){
        if(!lib.config.qhly_keymarkopen)return str;
        var obj = lib.qhly_getSkillKeyWordColorList();
        if(!obj)return str;
        for(var k in obj){
            var v = obj[k];
            if(k.indexOf("#") == 0){
                var k2 = k.slice(1);
                str = str.replaceAll(k2,"<b style='color:"+v+"'>"+k2+"</b>");
            }else{
                str = str.replace(k,"<b style='color:"+v+"'>"+k+"</b>");
            }
        }
        return str;
    };
    game.qhly_earseExt=function(path){
        if(!path)return null;
        var foundDot = path.lastIndexOf('.');
        if(foundDot < 0)return path;
        return path.slice(0,foundDot);
    };
    HTMLDivElement.prototype.qhly_listen=function(func){
        if(lib.config.touchscreen){
            this.addEventListener('touchend',function(e){
                func.call(this,e);
            });
            var fallback=function(e){
                this.removeEventListener('click',fallback);
            }
            this.addEventListener('click',fallback);
        }
        else{
            this.addEventListener('click',func);
        }
        return this;
    };
    game.saveConfig('qhly_forceall',true);
    if(!lib.qhly_callbackList){
        lib.qhly_callbackList = [];
    }

    var originGetRarity=game.getRarity;

    game.getRarity=function(name){
        if(lib.config.qhly_rarity){
            if(lib.config.qhly_rarity[name]){
                return lib.config.qhly_rarity[name];
            }
        }
        if(originGetRarity){
            return originGetRarity(name);
        }
        return 'common';
    };

    if(!get.infoHujia){
        get.infoHujia = function(){
            return 0;
        }
    }

    var fixTextSize = function(node,size){
        if(!size)size = 25;
        node.style.fontSize;
        var base = lib.config.qhly_fontsize1;
        if(!base){
            base = 5;
        }
        if(typeof base == 'string'){
            base = parseInt(base);
        }
        if(base == 5)return size;
        var min = size/2;
        var middle = size;
        var max = size*2;
        var unit1 = (middle-min)/4;
        var unit2 = (max-middle)/4;
        if(base < 5){
            node.style.fontSize = (middle - unit1 * (5 - base)).toFixed(2) + "px";
        }else{
            node.style.fontSize = (middle + unit2 * (base - 5)).toFixed(2) + "px";
        }
    };
        //判断文件、文件夹是否存在
        game.qhly_checkFileExist=function(path,callback){
            if(lib.node && lib.node.fs){
                try{
                    var stat=lib.node.fs.statSync(__dirname+'/'+path);
                    callback(stat);
                }catch(e){
                    callback(false);
                    return;
                }
            }else{
                resolveLocalFileSystemURL(lib.assetURL+path,(function(name){
                    return function(entry){
                        callback(true);
                    }
                }(name)),function(){
                    callback(false);
                });
            }
        };
    
    window.qhly_checkObject=function(str,parent){
        if(!parent){
            parent = window;
        }
        var arr = [];
        if(typeof str == 'string'){
            if(str.indexOf(".") < 0){
                return parent[str];
            }
            arr = str.split(".");
            return window.qhly_checkObject(arr,parent);
        }else{
            arr = str;
        }
        if(arr.length == 0)return false;
        if(arr.length == 1)return parent[arr[0]];
        var m = arr[0];
        var n = parent[m];
        if(!n)return false;
        return window.qhly_checkObject(arr.slice(1),n);
    };
    if(window.qhly_checkObject("configMenu.appearence.config.name_font.item",lib)){
        var fontConfigs = [lib.configMenu.appearence.config.name_font.item,
            lib.configMenu.appearence.config.identity_font.item,
            lib.configMenu.appearence.config.cardtext_font.item,
            lib.configMenu.appearence.config.global_font.item];
        var fonts = {
            'qh_heiti':"黑体",
            'qh_zhunyuan':'准圆',
            'qh_youyuan':'幼圆',
            'qh_weili':"魏隶",
            'qh_songhei':'宋黑',
        };
        for(var i of fontConfigs){
            for(var j in fonts){
                i[j] = fonts[j];
            }
        }
    }

    if(!lib.config.qhly_currentMusic){
        lib.config.qhly_currentMusic = 'system';
    }

    //if(lib.config.qhly_newui === undefined){
        lib.config.qhly_newui = true;
        game.saveConfig('qhly_newui',true);
    //}
    if(ui && ui.css && ui.css.fontsheet && ui.css.fontsheet.sheet && ui.css.fontsheet.sheet.insertRule){
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_heiti';src: url('"+lib.assetURL+"extension/千幻聆音/heiti.ttf');}",0);
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_zhunyuan';src: url('"+lib.assetURL+"extension/千幻聆音/zhunyuan.ttf');}",0);
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_youyuan';src: url('"+lib.assetURL+"extension/千幻聆音/youyuan.ttf');}",0);
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_songhei';src: url('"+lib.assetURL+"extension/千幻聆音/songhei.ttf');}",0);
        ui.css.fontsheet.sheet.insertRule("@font-face {font-family: 'qh_weili';src: url('"+lib.assetURL+"extension/千幻聆音/weili.ttf');}",0);
    }else{
        ui.qhlycss = lib.init.sheet();
        ui.qhlycss.sheet.insertRule("@font-face {font-family: 'qh_heiti';src: url('"+lib.assetURL+"extension/千幻聆音/heiti.ttf');}",0);
        ui.qhlycss.sheet.insertRule("@font-face {font-family: 'qh_zhunyuan';src: url('"+lib.assetURL+"extension/千幻聆音/zhunyuan.ttf');}",0);
        ui.qhlycss.sheet.insertRule("@font-face {font-family: 'qh_youyuan';src: url('"+lib.assetURL+"extension/千幻聆音/youyuan.ttf');}",0);
        ui.qhlycss.sheet.insertRule("@font-face {font-family: 'qh_songhei';src: url('"+lib.assetURL+"extension/千幻聆音/songhei.ttf');}",0);
        ui.qhlycss.sheet.insertRule("@font-face {font-family: 'qh_weili';src: url('"+lib.assetURL+"extension/千幻聆音/weili.ttf');}",0);
    }
    //关闭无名杀原有的换肤功能
    if(lib.config.change_skin){
        game.saveConfig('change_skin',false);
        alert("请注意：已经为你自动关闭了无名杀自带换肤设置，并备份了原配置，因为本扩展与无名杀系统自带换肤不兼容。关闭【千幻聆音】扩展前，请在扩展界面点击【恢复官方的皮肤设置】。");
    }

    var originDiv = ui.create.div;
    ui.create.div=function(){
        try{
            return originDiv.apply(this,arguments);
        }catch(e){
            console.log(e);
            if(QHLY_DEBUGMODE){
                throw e;
            }
            return originDiv.apply(this,[]);
        }
    };

    if(game.qhly_hasExtension("概念武将")){
        if(!lib.config.qhly_gnwjMention){
            alert("检测到您开启了概念武将扩展。如果您需要使用概念武将扩展的换肤功能，推荐您关闭【千幻聆音】扩展。如果您更喜欢本扩展的风格，请关闭概念武将的换肤功能，因为可能存在一定的兼容性问题。");
            game.saveConfig('qhly_gnwjMention',true);
        }
    }

    //将无名杀原有的换肤数据存档，并清空。
    if(lib.config.skin && lib.config.skin.qhly_config != 'yes'){
        game.saveConfig('qhly_save_offical_skin',lib.config.skin);
        game.saveConfig('skin',{'qhly_config':'yes'});
    }

    lib.qhly_lihui = {};

    if(game.getFileList && lib.config.qhly_lihuiSupport){
        game.qhly_checkFileExist('extension/千幻聆音/lihui',function(s){
            var earseExt = function(path){
                if(!path)return null;
                var foundDot = path.lastIndexOf('.');
                if(foundDot < 0)return path;
                return path.slice(0,foundDot);
            };
            if(s){
                game.getFileList('extension/千幻聆音/lihui',function(folders,files){
                    if(files){
                        for(var file of files){
                            lib.qhly_lihui[earseExt(file)] = file;
                        }
                    }
                });
            }
        });
    }
    if(get.mode() == 'guozhan' && game.getFileList && lib.config.qhly_guozhan!==false){
        var cpath = lib.config.qhly_originSkinPath == 'extension/千幻聆音/sanguolutouskin/'?'extension/千幻聆音/sanguolutouskin':'extension/千幻聆音/sanguoskin';
        game.qhly_checkFileExist(cpath,function(s){
            if(s){
                game.getFileList(cpath,function(folders,files){
                    lib.config.qhly_gzskinList = [];
                    if(folders && folders.length){
                        for(var n of folders){
                            if(n.indexOf('gz_') == 0){
                                lib.config.qhly_gzskinList.add(n);
                            }
                        }
                    }
                    game.saveConfig('qhly_gzskinList',lib.config.qhly_gzskinList);
                });
            }
        });
        game.qhly_checkFileExist('extension/千幻聆音/sanguoaudio',function(s){
            if(s){
                game.getFileList('extension/千幻聆音/sanguoaudio',function(folders,files){
                    lib.config.qhly_gzaudioList = [];
                    if(folders && folders.length){
                        for(var n of folders){
                            if(n.indexOf('gz_') == 0){
                                lib.config.qhly_gzaudioList.add(n);
                            }
                        }
                    }
                    game.saveConfig('qhly_gzaudioList',lib.config.qhly_gzaudioList);
                });
            }
        });
    }
    game.qhly_hasGuozhanSkin=function(name){
        if(lib.config.qhly_gzskinList && lib.config.qhly_guozhan !== false){
            return lib.config.qhly_gzskinList.contains(name);
        }
        return false;
    };
    game.qhly_editDialog=function(title,detail,initValue,onok,onclose){
        if(!_status.qhly_editDialogId){
            _status.qhly_editDialogId = 0;
        }
        var id = _status.qhly_editDialogId;
        _status.qhly_editDialogId++;

        var dialog = ui.create.div('.qh-editdialog');
        var content = ui.create.div('.qh-editdialog-inner',dialog);
        var text = "<h2>"+title+"</h2>";
        if(detail){
            text += "<p>"+detail+"</p>";
        }
        text += '<input id="qhly_edit_text'+id+'" type="text" style="width:100%;height:30px;"/><br><br>'
        text += '<img src="'+lib.assetURL+'extension/千幻聆音/qhly_ok2.png" id="qhly_edit_okbutton'+id+'"/>&nbsp;&nbsp;&nbsp;&nbsp;';
        text += '<img src="'+lib.assetURL+'extension/千幻聆音/qhly_cancel2.png" id="qhly_edit_cancelbutton'+id+'"/>';
        content.innerHTML = text;
        document.body.appendChild(dialog);
        var img1 = document.getElementById('qhly_edit_okbutton'+id);
        var img2 = document.getElementById('qhly_edit_cancelbutton'+id);
        var input = document.getElementById('qhly_edit_text'+id);
        if(initValue)input.value = initValue;
        ui.qhly_addListenFunc(img1);
        ui.qhly_addListenFunc(img2);
        img1.listen(function(){
            if(onok){
                onok(input.value,dialog);
            }
        });
        img2.listen(function(){
            if(onclose){
                if(onclose(dialog)){
                    dialog.delete();
                }
            }else{
                dialog.delete();
            }
        });
        input.focus();
        return dialog;
    };
    game.qhly_hasGuozhanAudio=function(name){
        if(lib.config.gzaudioList && lib.config.qhly_guozhan !== false){
            return lib.config.qhly_gzaudioList.contains(name);
        }
        return false;
    };
    if(!lib.config.qhly_order){
        game.saveConfig('qhly_order',{});
    }
    game.qhly_handleRect=function(rect){
        if(game.qhly_hasExtension('十周年UI'))return rect;
        return {
            width:rect.width/game.documentZoom,
            height:rect.height/game.documentZoom,
            left:rect.left/game.documentZoom,
            top:rect.top/game.documentZoom,
            bottom:rect.bottom/game.documentZoom,
            right:rect.right/game.documentZoom,
        };
    };
    game.qhly_isForbidAI=function(name){
        if(lib.config.forbidai && lib.config.forbidai.contains(name))return true;
        if(lib.config.forbidai_user && lib.config.forbidai_user.contains(name))return true;
        return false;
    };
    game.qhly_setForbidAI=function(name,forbid){
        if(forbid!==false){
            if(lib.config.forbidai){
                lib.config.forbidai.add(name);
            }else{
                lib.config.forbidai = [name];
            }
            if(lib.config.forbidai_user){
                lib.config.forbidai_user.add(name);
            }else{
                lib.config.forbidai_user = [name];
            }
        }else{
            if(lib.config.forbidai){
                lib.config.forbidai.remove(name);
            }else{
                lib.config.forbidai = [];
            }
            if(lib.config.forbidai_user){
                lib.config.forbidai_user.remove(name);
            }else{
                lib.config.forbidai_user = [];
            }
        }
        game.saveConfig('forbidai',lib.config.forbidai);
        game.saveConfig('forbidai_user',lib.config.forbidai_user);
    };
    game.qhly_getSkillSkin=function(name,skin,skill,pkg){
        if(!pkg)pkg = game.qhly_foundPackage(name);
        if(!pkg)return null;
        if(!pkg.skillSkin)return null;
        if(typeof pkg.skillSkin != 'function')return null;
        var ret = pkg.skillSkin(name,skin,skill);
        if(!ret)return null;
        return ret;
    };
    game.qhly_getOrder=function(name,skin,pkg){
        if(lib.config.qhly_order[name+'-'+skin])return lib.config.qhly_order[name+'-'+skin];
        if(!pkg)pkg = game.qhly_foundPackage(name);
        var info = game.qhly_getSkinInfo(name,skin,pkg);
        if(!info)return 0;
        if(!info.order)return 0;
        return info.order;
    };
    game.qhly_setOrder=function(name,skin,order){
        if(order===undefined){
            delete lib.config.qhly_order[name+'-'+skin];
            game.saveConfig('qhly_order',lib.config.qhly_order);
            return;
        }
        lib.config.qhly_order[name+'-'+skin] = order;
        game.saveConfig('qhly_order',lib.config.qhly_order);
    };
    game.qhly_genId=function(){
        if(!_status.qhly_genId){
            _status.qhly_genId = 1;
        }else{
            _status.qhly_genId++;
        }
        return _status.qhly_genId;
    };
    game.qhly_parseConfig=function(obj){
        if(!_status.qhly_config_selfedit_id){
            _status.qhly_config_selfedit_id=1;
        }else{
            _status.qhly_config_selfedit_id++;
        }
        var str = "";
        var image = obj.image ? obj.image:"extension/千幻聆音/qhly_pic_config.png";
        var title = obj.title ? obj.title:"自定义设置";
        var text = obj.text ? obj.text:"";
        str += "<h2><img src='";
        str += lib.assetURL+image+"' style='width:50px'/>";
        str += title;
        str += "</h2>";
        if(text.length){
            str += "<p>"+text+"</p>";
        }
        var onfinish=function(){

        };
        if(['checkboxList','复选框'].contains(obj.type)){
            var items = obj.items ? obj.items:[];
            var oncheck = obj.oncheck?obj.oncheck:function(){};
            var checkboxRef = {};
            for(var item of items){
                var id = "qhly_selfedit_checkbox_"+game.qhly_genId();
                checkboxRef[id] = item;
                str += "<p><span style='display:inline-block;height:30px;'><img id='"+id+"'/><span id='"+id+"_text' style='display:inline-block;position:relative;bottom:25%;'>";
                if(typeof item == 'string'){
                    str += item;
                }else{
                    str += item.name;
                }
                str += "</span></span></p>";
            }
            var bindFunc=function(checkbox,text){
                if(!text)return;
                ui.qhly_addListenFunc(text);
                text.listen(function(){
                    game.qhly_playQhlyAudio('qhly_voc_check',null,true);
                    checkbox.qhly_setChecked(!checkbox.qhly_checked,true);
                });
            };
            onfinish=function(view){
                for(var id in checkboxRef){
                    var item = checkboxRef[id];
                    var current = item.current;
                    if(typeof current == 'function'){
                        current = current();
                    }
                    var checkbox = document.getElementById(id);
                    var checkboxText = document.getElementById(id+"_text");
                    ui.qhly_initCheckBox(checkbox,current?true:false);
                    bindFunc(checkbox,checkboxText);
                    (function(checkbox,item){
                        checkbox.qhly_onchecked=function(check){
                            oncheck(item,check);
                        };
                    })(checkbox,item);
                }
            };
        }else if(['selectList','下拉列表'].contains(obj.type)){
            var id = "qhly_selfedit_select_"+game.qhly_genId();
            str += "<p><select style='font-size:22px;font-family:'qh_youyuan';' id='"+id+"'></select></p>";
            onfinish=function(view){
                var select = document.getElementById(id);
                var items = obj.items ? obj.items:{};
                var current = typeof obj.current == 'function'?obj.current():obj.current;
                for(var key in items){
                    var opt = document.createElement('option');
                    opt.innerHTML = items[key];
                    opt.setAttribute('key',key);
                    if(current == key){
                        opt.selected = 'selected';
                    }
                    select.appendChild(opt);
                }
                select.onchange=function(e){
                    var event = e?e:window.event;
                    if(event.target){
                        target = event.target;
                        var opt = target[target.selectedIndex];
                        if(opt){
                            var key = opt.getAttribute('key');
                            if(obj.onchange){
                                obj.onchange(key);
                            }
                        }
                    }
                };
            };
        }
        return {
            content:str,
            onfinish:onfinish,
        };
    };
    //默认皮肤包
    var DEFAULT_PACKAGE = {
        isExt:false,//不是扩展武将
        fromExt:false,
        filterCharacter:function(name){
            return true;//对所有角色生效
        },
        skininfo:function(name,skinname){
            if(lib.qhly_sanguoskininfo){
                return lib.qhly_sanguoskininfo[name +'-'+skinname];
            }
            return null;
        },
        characterTaici:function(name){
            if(lib.qhly_sanguotaici){
                return lib.qhly_sanguotaici[name];
            }
            return null;
        },
        characterLihui:function(name,skin){
            if(!lib.config.qhly_lihuiSupport)return null;
            skin = game.qhly_earse_ext(skin);
            if(skin){
                if(lib.qhly_lihui[name+'-'+skin]){
                    return 'extension/千幻聆音/lihui/'+lib.qhly_lihui[name+'-'+skin];
                }
                if(!lib.config.qhly_nolihuiOrigin)return null;
            }
            if(lib.qhly_lihui[name]){
                return 'extension/千幻聆音/lihui/'+lib.qhly_lihui[name];
            }
            return null;
        },
        prefix:'image/character/',//武将原图在image/character内
        skin:{
            standard:(lib.config.qhly_originSkinPath?lib.config.qhly_originSkinPath:'extension/千幻聆音/sanguoskin/'),//皮肤图片在千幻聆音扩展内的位置。
        },
        audioOrigin:'',
        audio:'extension/千幻聆音/sanguoaudio/',//皮肤配音文件在千幻聆音扩展内的位置。
    };

    //初始化一个皮肤包的数组，后面会经常扫描这个数组以找到武将的皮肤。
    if(!lib.qhlypkg){
        lib.qhlypkg = [];
    }

    if(!lib.qhlyMusic){
        lib.qhlyMusic = {};
    }
    var systemMusics = {
        'music_default':'默认',
        'music_danji':'千里走单骑',
        'music_jifeng':'祭风',
        'music_jilve':'极略',
        'music_phliosophy':'Phliosophy Of Ours',
        'music_shezhan':'舌战群儒',
        'music_diaochan':'貂蝉',
        'aozhan_chaoming':'潮鸣',
        'aozhan_online':'Online鏖战',
        'aozhan_rewrite':'Rewrite',
    };

    for(var k in systemMusics){
        lib.qhlyMusic['audio/background/'+k+'.mp3'] = {
            name:systemMusics[k],
            path:'audio/background/'+k+'.mp3',
        };
    }

    if(!lib.qhlyDefaultMusic){
        lib.qhlyDefaultMusic = {};
    }

    if(!lib.config.qhly_characterMusic){
        lib.config.qhly_characterMusic = {};
    }

    if(!lib.qhly_characterMusicMapper){
        lib.qhly_characterMusicMapper = [];
    }

    lib.qhly_characterMusicMapper.push(function(name){
        if(get.character(name,1) == 'key'){
            return 'audio/background/aozhan_chaoming.mp3';
        }
    });

    game.qhly_getCharacterPackage=function(name){
        for(var i in lib.characterPack){
            if(lib.characterPack[i] && lib.characterPack[i][name]){
                return i;
            }
        }
        return null;
    };

    game.qhly_getCharacterMusic=function(name){
        var ret = lib.config.qhly_characterMusic[name];
        if(ret)return ret;
        ret = lib.qhlyDefaultMusic[name];
        var priority = -Infinity;
        for(var func of lib.qhly_characterMusicMapper){
            var rf = func(name);
            if(!rf)continue;
            if(typeof rf == 'string'){
                var p = rf;
                rf = {
                    path:p,
                    priority:1,
                };
            }
            if(!rf.priority){
                rf.priority = 1;
            }
            if(rf.priority > priority){
                priority = rf.priority;
                ret = rf.path;
            }
        }
        return ret;
    };

    game.qhly_getCurrentMusic = function(){
        var ret = null;
        if(lib.config['qhly_modemusicconfig_'+get.mode()] && lib.config['qhly_modemusicconfig_'+get.mode()]!='system'){
            ret = lib.config['qhly_modemusicconfig_'+get.mode()];
        }
        if(lib.config.qhly_enableCharacterMusic){
            if(game.me){
                var m = null;
                if(game.me.name && game.me.name.indexOf('unknown') != 0){
                    m = game.qhly_getCharacterMusic(game.me.name);
                }else if(game.me.name1){
                    m = game.qhly_getCharacterMusic(game.me.name1);
                }
                if(m){
                    ret = m;
                }
            }
        }
        if(!ret){
            ret = lib.config.qhly_currentMusic;
        }
        if(ret && ret != 'system' && ret != 'random'){
            return ret;
        }
        if(ret == 'random'){
            return Object.keys(lib.qhlyMusic).randomGet();
        }
        return 'audio/background/music_default.mp3';
    };

    if(lib.config.qhly_enableCharacterMusic || lib.config.qhly_currentMusic != 'system'){
        game.playBackgroundMusic = function(){
            if(!ui.qhly_backgroundMusic){
                ui.qhly_backgroundMusic = document.createElement('audio');
                if(ui.backgroundMusic){
                    ui.backgroundMusic.remove();
                }
                ui.backgroundMusic = ui.qhly_backgroundMusic;
                ui.backgroundMusic.volume=lib.config.volumn_background/8;
                ui.backgroundMusic.autoplay=true;
			    ui.backgroundMusic.addEventListener('ended',game.playBackgroundMusic);
            }
            if(_status.qhly_tempBgm){
                ui.backgroundMusic.src = lib.assetURL + _status.qhly_tempBgm;
            }else{
                ui.backgroundMusic.src = lib.assetURL + game.qhly_getCurrentMusic();
            }
            //alert(ui.backgroundMusic.src);
        };
    }

    get.qhly_urldecode=function(zipStr){ 
        var uzipStr = ''; 
        for (var i = 0; i < zipStr.length; i += 1) {
          var chr = zipStr.charAt(i); 
          if (chr === '+') { 
            uzipStr += ' ';
          } else if (chr === '%') { 
            var asc = zipStr.substring(i + 1, i + 3); 
            if (parseInt('0x' + asc) > 0x7f) {
              uzipStr += decodeURI('%' + asc.toString() + zipStr.substring(i+3, i+9).toString()); 
              i += 8;
            }else{ 
              uzipStr += String.fromCharCode(parseInt('0x' + asc)); 
              i += 2;
            } 
          }else{ 
            uzipStr += chr; 
            } 
        }
        return uzipStr;
    };

    game.qhly_switchBgm=function(path,replay){
        if(path){
            _status.qhly_tempBgm = path;
        }else{
            delete _status.qhly_tempBgm;
            path = game.qhly_getCurrentMusic();
        }
        if(!replay && ui.backgroundMusic.src && get.qhly_urldecode(ui.backgroundMusic.src).endsWith(path)){
            return;
        }
        game.playBackgroundMusic();
    };

    lib.skill._qhly_bgm={
        popup:false,
        forced:true,
        lastDo:true,
        trigger:{
            global:'gameStart',
        },
        filter:function(event,player){
            if(event.qhly_bgmflag)return false;
            return lib.config.qhly_enableCharacterMusic;
        },
        content:function(){
            trigger.qhly_bgmflag=true;
            game.playBackgroundMusic();
        }
    };

    if(!lib.qhly_viewskin){
        lib.qhly_viewskin = {};
    }

    if(!lib.qhly_groupimage){
        lib.qhly_groupimage = {};
    }
    lib.qhly_groupimage['wei'] = 'extension/千幻聆音/name_wei.webp';
    lib.qhly_groupimage['shu'] = 'extension/千幻聆音/name_shu.webp';
    lib.qhly_groupimage['wu'] = 'extension/千幻聆音/name_wu.webp';
    lib.qhly_groupimage['qun'] = 'extension/千幻聆音/name_qun.webp';
    lib.qhly_groupimage['jin'] = 'extension/千幻聆音/name_jin.webp';
    lib.qhly_groupimage['shen'] = 'extension/千幻聆音/name_shen.webp';
    lib.qhly_groupimage['daqin'] = 'extension/千幻聆音/name_daqin.webp';
    lib.qhly_groupimage['key'] = 'extension/千幻聆音/name_key.webp';

    if(!lib.qhly_groupcolor){
        lib.qhly_groupcolor = {};
    }
    lib.qhly_groupcolor['wei'] = "#0000CD";
    lib.qhly_groupcolor['shu'] = "#B22222";
    lib.qhly_groupcolor['wu'] = "#32CD32";
    lib.qhly_groupcolor['qun'] = "#B5B5B5";
    lib.qhly_groupcolor['jin'] = "#68228B";
    lib.qhly_groupcolor['shen'] = "#FFFF00";
    lib.qhly_groupcolor['daqin'] = "#FFD700";
    lib.qhly_groupcolor['key'] = "#9400D3";


    if(!lib.config.qhly_currentViewSkin){
        lib.config.qhly_currentViewSkin = 'xuanwujianghu';
        game.saveConfig('qhly_currentViewSkin',lib.config.qhly_currentViewSkin);
    }

    lib.qhly_viewskin['xuanwujianghu'] = {
        name:'玄武江湖',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui');
        },
        changeViewSkin:function(view){

        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['shikongshuniu'] = {
        name:'时空枢纽',
        buttonImage:'extension/千幻聆音/newui_button_sksn.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_sksn.png',
        skinPagePlayAudioButtonImage:'extension/千幻聆音/qhly_pic_playaudiobutton_wz.png',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_sksn');
        },
        changeViewSkin:function(view){

        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['sanguo'] = {
        name:'三国',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_sanguo');
        },
        skillPageSkillNameColor:'#87CEFA',
        skillPageDerivationSkillColor:'#7FFFD4',
        skinPageSkillNameColor:'#87CEFA',
        skinPageHeadTitleColor:'#90EE90',
        skinPageHeadSkinNameColor:'#EEE9E9',
        changeViewSkin:function(view){
            view.dragonhead.show();
            view.dragontail.show();
        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['sanguo2'] = {
        name:'三国2',
        buttonImage:'extension/千幻聆音/newui_button_sanguo2.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_sanguo2.png',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_sanguo2');
        },
        skillPageSkillNameColor:'#87CEFA',
        skillPageDerivationSkillColor:'#7FFFD4',
        skinPageSkillNameColor:'#87CEFA',
        skinPageHeadTitleColor:'#90EE90',
        skinPageHeadSkinNameColor:'#EEE9E9',
        changeViewSkin:function(view){
            view.dragonhead.show();
            view.dragontail.show();
        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['wangzhe'] = {
        name:'耀世星辉',
        buttonImage:'extension/千幻聆音/newui_button_wz.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_wz.png',
        favouriteImage:'extension/千幻聆音/newui_fav_wz.png',
        forbidImage:'extension/千幻聆音/newui_forbid_wz.png',
        checkBoxImage:'extension/千幻聆音/newui_checkbox_unchecked.png',
        checkBoxCheckedImage:'extension/千幻聆音/newui_checkbox_checked_wz.png',
        skillPagePlayAudioButtonImage:'extension/千幻聆音/newui_playaudio_wz.png',
        skinPagePlayAudioButtonImage:'extension/千幻聆音/qhly_pic_playaudiobutton_wz.png',

        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_wz');
        },
        skillPageSkillNameColor:'#87CEFA',
        skillPageDerivationSkillColor:'#7FFFD4',
        skinPageSkillNameColor:'#87CEFA',
        skinPageHeadTitleColor:'#90EE90',
        skinPageHeadSkinNameColor:'#EEE9E9',
        changeViewSkin:function(view){
            
        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['ranqi'] = {
        name:'染柒的世界',
        buttonImage:'extension/千幻聆音/newui_button_rq.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_rq.png',
        favouriteImage:'extension/千幻聆音/newui_fav_rq.png',
        forbidImage:'extension/千幻聆音/newui_forbid_rq.png',
        checkBoxImage:'extension/千幻聆音/newui_checkbox_unchecked.png',
        checkBoxCheckedImage:'extension/千幻聆音/newui_checkbox_checked_wz.png',

        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_rq');
        },
        skillPageSkillNameColor:'#87CEFA',
        skillPageDerivationSkillColor:'#7FFFD4',
        skinPageSkillNameColor:'#87CEFA',
        skinPageHeadTitleColor:'#90EE90',
        skinPageHeadSkinNameColor:'#EEE9E9',
        changeViewSkin:function(view){
            
        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['jingdian']={
        name:'经典怀旧',
        onchange:function(){
            
        },
        changeViewSkin:function(view){

        },
        skinPage:function(pageName,view){

        }
    };


    lib.qhly_viewskin['shuimo'] = {
        name:'水墨龙吟',
        whr:2.2028,
        isQiLayout:true,
        buttonTextSpace:false,
        lihuiSupport:true,
        layoutType:'qi',
        skillPageSkillNameColor:'#FFFFFF',
        skillPageDerivationSkillColor:'#00F5FF',
        skinPageSkillNameColor:'#FFFFFF',
        buttonImage:'extension/千幻聆音/newui_button_shuimo.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_shuimo.png',
        skillPagePlayAudioButtonImage:'extension/千幻聆音/newui_playaudio_shuimo.png',
        skinPagePlayAudioButtonImage:'extension/千幻聆音/qhly_pic_playaudiobutton_shuimo.png',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_shuimo');
        },
        changeViewSkin:function(view){
            
        },
        skinPage:function(pageName,view){

        }
    };

    lib.qhly_viewskin['lolbig'] = {
        name:'海克斯科技',
        whr:1.77778,
        isLolBigLayout:true,
        buttonTextSpace:false,
        favouriteImage:'extension/千幻聆音/newui_fav_lol.png',
        lihuiSupport:true,
        layoutType:'lolbig',
        skillPageSkillNameColor:'#C0B588',
        skillPageDerivationSkillColor:'#00F5FF',
        skinPageSkillNameColor:'#FFFFFF',
        buttonImage:'extension/千幻聆音/newui_button_lol.png',
        buttonPressedImage:'extension/千幻聆音/newui_button_selected_lol.png',
        skillPagePlayAudioButtonImage:'extension/千幻聆音/newui_playaudio_lol.png',
        skinPagePlayAudioButtonImage:'extension/千幻聆音/qhly_pic_playaudiobutton_lol.png',
        checkBoxCheckedImage:'extension/千幻聆音/newui_checkbox_checked_lol.png',
        checkBoxImage:'extension/千幻聆音/newui_checkbox_unchecked_lol.png',
        onchange:function(){
            game.saveConfig('qhly_viewskin_css','newui_lolbig');
        },
        changeViewSkin:function(view){
            
        },
        skinPage:function(pageName,view){

        }
    };

    get.qhly_getIf=function(originValue,fallback){
        if(originValue)return originValue;
        return fallback;
    };

    game.qhly_changeViewSkin=function(view){
        var skin = lib.qhly_viewskin[lib.config.qhly_currentViewSkin];
        if(skin){
            skin.changeViewSkin(view);
        }
    };

    game.qhly_changeViewPageSkin=function(page,view){
        var skin = lib.qhly_viewskin[lib.config.qhly_currentViewSkin];
        if(skin){
            skin.skinPage(page,view);
        }
    }


    get.qhly_viewSkinSet = function(){
        var ret = {};
        for(var k in lib.qhly_viewskin){
            if(lib.qhly_viewskin[k].name){
                ret[k] = lib.qhly_viewskin[k].name;
            }else{
                ret[k] = k;
            }
        }
        return ret;
    };

    lib.extensionMenu['extension_千幻聆音']['qhly_currentViewSkin'] ={
        "name":"UI套装",
        "intro":"设置UI套装样式。",
        "item":get.qhly_viewSkinSet(),
        "init":lib.config.qhly_currentViewSkin === undefined ? 'xuanwujianghu':lib.config.qhly_currentViewSkin,
        onclick:function(item){
            if(lib.qhly_viewskin[item] && lib.qhly_viewskin[item].onchange){
                lib.qhly_viewskin[item].onchange();
            }
            game.saveConfig('qhly_currentViewSkin',item);
            game.saveConfig('extension_千幻聆音_qhly_currentViewSkin',item);
            if(confirm("是否重启游戏以应用新UI？")){
                game.reload();
            }
        }
    };

    var bgmConfigs = {
        'system':'不特别配置',
        'random':'随机',
    };

    for(var p in lib.qhlyMusic){
        bgmConfigs[p] = lib.qhlyMusic[p].name;
    }

    lib.qhly_bgmConfigs = bgmConfigs;

    game.qhly_refreshBgmConfigs=function(){
        for(var p in lib.qhlyMusic){
            lib.qhly_bgmConfigs[p] = lib.qhlyMusic[p].name;
        }
    };

    lib.extensionMenu['extension_千幻聆音']['qhly_currentMusic'] ={
        "name":"设置BGM",
        "intro":"设置此选项，可以选择游戏背景音乐。将覆盖系统的配置。",
        "init":lib.config.qhly_currentMusic?lib.config.qhly_currentMusic:'system',
        "item":lib.qhly_bgmConfigs,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_currentMusic',item);
            game.saveConfig('qhly_currentMusic',item);
            game.qhly_switchBgm();
        }
    };
    lib.config.extension_千幻聆音_qhly_modemusicconfig = 
        lib.config['qhly_modemusicconfig_'+get.mode()] ?
            lib.config['qhly_modemusicconfig_'+get.mode()] : 'system';
    
    lib.extensionMenu['extension_千幻聆音']['qhly_modemusicconfig'] ={
        "name":"模式BGM",
        "intro":"设置当前模式的BGM。",
        "init":lib.config['qhly_modemusicconfig_'+get.mode()]?lib.config['qhly_modemusicconfig_'+get.mode()]:'system',
        "item":lib.qhly_bgmConfigs,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_modemusicconfig',item);
            game.saveConfig('qhly_modemusicconfig_'+get.mode(),item);
            game.qhly_switchBgm();
        }
    };

    
    if(lib.qhly_viewskin[lib.config.qhly_currentViewSkin] && lib.qhly_viewskin[lib.config.qhly_currentViewSkin].onchange){
        lib.qhly_viewskin[lib.config.qhly_currentViewSkin].onchange();
    }

    lib.qhly_level = lib.config.qhly_level ? lib.config.qhly_level: {};
    //初始化千幻聆音皮肤相关的数据
    if(!lib.config.qhly_skinset){
        game.saveConfig('qhly_skinset',{
            skin:{
                //key-value方式，存放武将皮肤名
            },
            skinAudioList:{
                //key-value方式，存放武将皮肤配音
            },
            audioReplace:{
                //key-value方式，存放配音映射逻辑。
            }
        });
    }

    if(!lib.config.qhly_winrecord){
        game.saveConfig('qhly_winrecord',{
            
        });
    }

    game.qhly_recordGameOver=function(name,win,player){
        if(win !== true && win !== false)return;
        var record = lib.config.qhly_winrecord[name];
        if(!record){
            record = {};
            lib.config.qhly_winrecord[name] = record;
        }
        var recordMode = record[get.mode()];
        if(!recordMode){
            recordMode = {};
            record[get.mode()] = recordMode;
        }
        var identity = get.mode()=='guozhan' ? player.group : player.identity;
        if(!identity){
            identity = "未知身份";
        }else{
            identity = get.translation(identity+'2');
        }
        var wlr = recordMode[identity];
        if(!wlr){
            wlr = {};
            recordMode[identity] = wlr;
        }
        if(win === true){
            if(!wlr.win){
                wlr.win = 0;
            }
            wlr.win++;
        }else if(win === false){
            if(!wlr.lose){
                wlr.lose = 0;
            }
            wlr.lose++;
        }
        game.saveConfig('qhly_winrecord',lib.config.qhly_winrecord);
    };

    lib.onover.push(function(ret){
        var name = game.me.name ? game.me.name:game.me.name1;
        if(name){
            game.qhly_recordGameOver(name,ret,game.me);
        }
        var name2 = game.me.name2;
        if(name2){
            game.qhly_recordGameOver(name2,ret,game.me);
        }
    });
    
    //持久化存储皮肤数据
    game.qhlySyncConfig=function(){
        game.saveConfig('qhly_skinset',lib.config.qhly_skinset);
    };

    //修改播放音频的函数。
    game.qhly_originPlayAudio = game.playAudio;
    game.playAudio=function(){
        var string = '';
        var others = [];
        for(var arg of arguments){//将参数拼接成一个字符串，方便查找映射
            if(typeof arg == 'string' || typeof arg == 'number'){
                string = string+"/"+arg;
            }else{
                others.push(arg);
            }
        }
        var replace = string.slice(1);
        if(replace.length){
            if(lib.config.qhly_notbb && lib.config.qhly_notbb!='none' && !_status.qhly_previewAudio){
                var keySkill = replace;
                while(keySkill.length && keySkill[keySkill.length-1].charCodeAt() >='0'.charCodeAt() && keySkill[keySkill.length-1].charCodeAt() <='9'.charCodeAt()){
                    keySkill = keySkill.slice(0,keySkill.length-1);
                }
                if(!_status.qhly_bbkey){
                    _status.qhly_bbkey={};
                }
                if(lib.config.qhly_notbb_range == 'all'){
                    keySkill = 'all';
                }else{
                    var playerP = game.findPlayer(function(current){
                        return current.hasSkill(keySkill);
                    });
                    if(playerP){
                        keySkill = playerP.playerid;
                    }
                }
                var time = _status.qhly_bbkey[keySkill];
                if(!time)time = 0;
                var ctime = (new Date()).valueOf();
                if(ctime - time > parseInt(lib.config.qhly_notbb)*1000){
                    _status.qhly_bbkey[keySkill] = ctime;
                }else{
                    return;
                }
            }
            var rp = lib.config.qhly_skinset.audioReplace[replace];
            if(rp){
                //如果存在映射，用映射的路径替换原有的路径，并调用原来的音频播放函数，以达到替换配音的效果。
                var args = rp.split("/");
                args.addArray(others);
                return game.qhly_originPlayAudio.apply(this,args);
            }
        }
        return game.qhly_originPlayAudio.apply(this,arguments);
    };

    game.qhly_playQhlyAudio=function(name,num,repeat){
        if(lib.config.qhly_closeVoice){
            return;
        }
        if(!repeat){
            if(num === undefined || num === null){
                game.playAudio('..','extension','千幻聆音',name);
            }else{
                game.playAudio('..','extension','千幻聆音',name + Math.ceil(Math.random() * num));	
            }
        }else{
            if(num === undefined || num === null){
                game.qhly_playAudioRepeatable('..','extension','千幻聆音',name);
            }else{
                game.qhly_playAudioRepeatable('..','extension','千幻聆音',name + Math.ceil(Math.random() * num));	
            }
        }
    };

    game.qhly_playAudioRepeatable=function(){
        if(_status.video&&arguments[1]!='video') return;
        var str='';
        var onerror=null;
        for(var i=0;i<arguments.length;i++){
            if(typeof arguments[i]==='string'||typeof arguments[i]=='number'){
                str+='/'+arguments[i];
            }
            else if(typeof arguments[i]=='function'){
                onerror=arguments[i]
            }
            if(_status.video) break;
        }
        //if(!lib.config.repeat_audio&&_status.skillaudio.contains(str)) return;
        _status.skillaudio.add(str);
        game.addVideo('playAudio',null,str);
        setTimeout(function(){
            _status.skillaudio.remove(str);
        },1000);
        var audio=document.createElement('audio');
        audio.autoplay=true;
        audio.volume=lib.config.volumn_audio/8;
        if(str.indexOf('.mp3')!=-1||str.indexOf('.ogg')!=-1){
            audio.src=lib.assetURL+'audio'+str;
        }
        else{
            audio.src=lib.assetURL+'audio'+str+'.mp3';
        }
        audio.addEventListener('ended',function(){
            this.remove();
        });
        audio.onerror=function(){
            if(this._changed){
                this.remove();
                if(onerror){
                    onerror();
                }
            }
            else{
                this.src=lib.assetURL+'audio'+str+'.ogg';
                this._changed=true;
            }
        };
        ui.window.appendChild(audio);
        return audio;
    };

    game.qhly_originPlaySkillAudio = game.playSkillAudio;
    game.playSkillAudio=function(name,index){
        var replaceKey = "skill/"+name;
        if(!index){
            index = Math.ceil(Math.random()*2);
        }
        replaceKey = replaceKey+index;
        var rp = lib.config.qhly_skinset.audioReplace[replaceKey];
        if(rp){
            var args = rp.split("/");
            return game.qhly_originPlayAudio.apply(this,args);
        }
        return game.qhly_originPlaySkillAudio.apply(this,arguments);
    };

    //在设置完皮肤后，刷新界面，检测场上的角色是否是设置的角色，并更换其皮肤。
    game.qhly_refresh=function(name){
        if(_status.qh_sourceNode){
            _status.qh_sourceNode.setBackground(_status.qh_sourceNodeName,'character');
        }
        var players = game.players;
        if(players){
            players = players.slice(0);
        }else{
            return;
        }
        if(game.dead){
            players = players.concat(game.dead);
        }
        if(!players.length)return;
        players = players.filter(function(player){
            if( player.name1 == name || player.name2 == name){
                return true;
            }
            var name2 = name;
            //关于国战武将特别配置。
            if(name2.indexOf('gz_') < 0){
                name2 = 'gz_'+name2;
            }else{
                name2 = name.slice(3);
            }
            return player.name1 == name2 || player.name2 == name2;
        });
        if(!players.length)return;
        for(var player of players){
            var avatar;
            var fakeavatar;
            var name2 = "";
            if(name.indexOf('gz_') < 0){
                name2 = 'gz_'+name;
            }else{
                name2 = name.slice(3);
            }
            if(player.name1 == name || player.name1 == name2){
                avatar = player.node.avatar;
                fakeavatar = avatar.cloneNode(true);
                if(player.node.qhly_skinButton1){
                    if(lib.config.qhly_dragButtonPosition === 'no'){
                        var key = 'qhly_dragButtonPositionOf_'+player.name1;
                        var skin = game.qhly_getSkin(player.name1);
                        if(skin){
                            key = key + '_'+skin;
                        }
                        if(lib.config[key]){
                            for(var s in lib.config[key]){
                                player.node.qhly_skinButton1.style[s] = lib.config[key][s];
                            }
                        }
                    }
                }
            }else if(player.name2 == name || player.name2 == name2){
                avatar = player.node.avatar2;
                fakeavatar = avatar.cloneNode(true);
                if(player.node.qhly_skinButton2){
                    if(lib.config.qhly_dragButtonPosition === 'no'){
                        var key = 'qhly_dragButtonPositionOf_'+player.name2;
                        var skin = game.qhly_getSkin(player.name2);
                        if(skin){
                            key = key + '_'+skin;
                        }
                        if(lib.config[key]){
                            for(var s in lib.config[key]){
                                player.node.qhly_skinButton2.style[s] = lib.config[key][s];
                            }
                        }
                    }
                }
            }else{
                continue;
            }
            var finish=function(bool,fakeavatar){
                var player=avatar.parentNode;
                if(bool){
                    fakeavatar.style.boxShadow='none';
                    player.insertBefore(fakeavatar,avatar.nextSibling);
                    setTimeout(function(){
                        fakeavatar.delete();
                    },100);
                }
                if(bool&&!lib.config.low_performance){
                    player.$rare();
                }
            }
            avatar.setBackground(name,'character');
            finish(true,fakeavatar);
        }
    };
    
    //修改设置背景图片的函数，以达到替换皮肤的效果。
    HTMLDivElement.prototype.qhly_origin_setBackgroundImage = HTMLDivElement.prototype.setBackgroundImage;
    HTMLDivElement.prototype.setBackgroundImage = function(name){
        if(window.qhly_setBackground_inCharacter){
            this.qhly_origin_setBackgroundImage.apply(this,arguments);
            return;
        }
        if(this.classList.contains('qh-must-replace') ||(!this.classList.contains('qh-not-replace') && (lib.config.qhly_forceall || (this.classList.contains('avatar') || this.classList.contains('avatar2'))))){
            //判断当前的div是否是人物avatar。
            var that = this;
            var setByName=function(cname,opath){
                if(lib.config.qhly_skinset.skin[cname]){
                    var skin = lib.config.qhly_skinset.skin[cname];
                    if(!skin)return false;
                    var skinPackage = game.qhly_foundPackage(cname);
                    if(opath){
                        var prefix = skinPackage.prefix;
                        if(typeof prefix == 'function'){
                            prefix = prefix(cname);
                        }
                        var lutouPrefix = skinPackage.lutouPrefix;
                        if(typeof lutouPrefix == 'function'){
                            lutouPrefix = lutouPrefix(cname);
                        }
                        if(skinPackage.isLutou){
                            if(lutouPrefix + cname != game.qhly_earse_ext(opath) && prefix + cname != game.qhly_earse_ext(opath)){
                                return false;
                            }
                        }else if(prefix + cname != game.qhly_earse_ext(opath)){
                            return false;
                        }
                    }
                    //获取相应的皮肤包，并修改图片路径。
                    var dest = null;
                    if(skinPackage.isLutou){
                        dest = skinPackage.skin.lutou;
                        if(!dest){
                            dest = skinPackage.skin.standard;
                        }
                    }else{
                        dest = skinPackage.skin.standard;
                    }
                    if(typeof dest == 'function'){
                        dest = dest(cname,skin);
                    }
                    var destpath = dest+cname+"/"+skin;
                    if(skinPackage.replaceAvatarDestination){
                        var dp = skinPackage.replaceAvatarDestination(cname,skin);
                        if(dp){
                            destpath = dp;
                        }
                    }
                    that.qhly_origin_setBackgroundImage(destpath);
                    return true;
                }
            };
            if(name && name.indexOf('image/character/') == 0){
                var that = this;
                var cname = name.replace('image/character/','');
                if(cname.indexOf('/') < 0){
                    var found = cname.lastIndexOf('.');
                    if(found >= 0){
                        cname = cname.slice(0,found);
                    }
                    if(setByName(cname)){
                        return;
                    }
                }
            }else if(name && name.indexOf('extension/') == 0){
                var that = this;
                var cname = name.replace('extension/','');
                var foundS = cname.lastIndexOf("/");
                var foundDot = cname.lastIndexOf(".");
                if(foundS >= 0){
                    if(foundDot < 0){
                        foundDot = cname.length;
                    }
                    cname = cname.slice(foundS+1,foundDot);
                }
                if(cname.length){
                    if(setByName(cname,name)){
                        return;
                    }
                }
            }
        }
        this.qhly_origin_setBackgroundImage.apply(this,arguments);
    };

    HTMLDivElement.prototype.qhly_origin_setBackground = HTMLDivElement.prototype.setBackground;
    HTMLDivElement.prototype.setBackground=function(name,type,ext,subfolder){
        if(type == 'character' && (this.classList.contains('qh-must-replace') ||(!this.classList.contains('qh-not-replace') && (lib.config.qhly_forceall || (this.classList.contains('avatar') || this.classList.contains('avatar2') || this.classList.contains('primary-avatar') || this.classList.contains('deputy-avatar') || this.classList.contains('button')))))){
            var that = this;
            var setByName=function(cname){
                if(lib.config.qhly_skinset.skin[cname]){
                    var skin = lib.config.qhly_skinset.skin[cname];
                    if(!skin)return false;
                    var skinPackage = game.qhly_foundPackage(cname);
                    //获取相应的皮肤包，并修改图片路径。
                    var dest = null;
                    if(skinPackage.isLutou){
                        dest = skinPackage.skin.lutou;
                        if(!dest){
                            dest = skinPackage.skin.standard;
                        }
                    }else{
                        dest = skinPackage.skin.standard;
                    }
                    if(typeof dest == 'function'){
                        dest = dest(cname,skin);
                    }
                    var destpath = dest+cname+"/"+skin;
                    if(skinPackage.replaceAvatarDestination){
                        var dp = skinPackage.replaceAvatarDestination(cname,skin);
                        if(dp){
                            destpath = dp;
                        }
                    }
                    window.qhly_setBackground_inCharacter = true;
                    that.setBackgroundImage(destpath);
                    that.style.backgroundSize="cover";
                    delete window.qhly_setBackground_inCharacter;
                    return true;
                }
            };
            if(!setByName(name)){
                return this.qhly_origin_setBackground(name,type,ext,subfolder);
            }
            return this;
        }else{
            return this.qhly_origin_setBackground(name,type,ext,subfolder);
        }
    };
    game.qhly_banSkin=function(name,skin,ban){
        if(ban === undefined)ban = true;
        if(!skin){
            skin = "[original]";
        }
        if(!lib.config.qhly_banskinlist){
            lib.config.qhly_banskinlist = [];
        }
        if(ban){
            lib.config.qhly_banskinlist.add(name+'-'+skin);
        }else{
            lib.config.qhly_banskinlist.remove(name+'-'+skin);
        }
        game.saveConfig('qhly_banskinlist',lib.config.qhly_banskinlist);
    };
    game.qhly_skinIsBanned=function(name,skin){
        if(!lib.config.qhly_banskinlist){
            return false;
        }
        if(!skin){
            skin = "[original]";
        }
        return lib.config.qhly_banskinlist.contains(name+'-'+skin);
    };
    //获取皮肤文件。参数为武将名称和皮肤名称。注意需要包含扩展名。
    game.qhly_getSkinFile=function(name,skin){
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        var skinPackage = game.qhly_foundPackage(name);
        if(!skin){
            return skinPackage.prefix+"/"+name+".jpg";
        }
        var dest = null;
        if(skinPackage.isLutou){
            dest = skinPackage.skin.lutou;
            if(!dest){
                dest = skinPackage.skin.standard;
            }
        }else{
            dest = skinPackage.skin.standard;
        }
        if(skinPackage.replaceAvatarDestination){
            var r = skinPackage.replaceAvatarDestination(name,skin);
            if(r)return r;
        }
        return dest + name +"/"+skin;
    };

    //获取皮肤名称。
    game.qhly_getSkin=function(name){
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        if(lib.config.qhly_skinset.skin[name]){
            return lib.config.qhly_skinset.skin[name];
        }
        return null;
    };
    game.qhly_skinIs=function(name,skinname){
        var ret = game.qhly_getSkin(name);
        if(!ret && !skinname)return true;
        return skinname == ret;
    };

    //搜索武将的皮肤包。
    game.qhly_foundPackage=function(name){
        var skinPackage = null;
        for(var pkg of lib.qhlypkg){
            if(pkg.characterList && pkg.characterList.contains(name)){
                skinPackage = pkg;
                break;
            }
            if(pkg.filterCharacter && pkg.filterCharacter(name)){
                skinPackage = pkg;
                break;
            }
        }
        if(skinPackage == null){
            if(lib.config.qhly_extcompat!=='false'){
                skinPackage = game.qhly_foundPackageExt(name);
            }
        }
        if(skinPackage == null){
            skinPackage = DEFAULT_PACKAGE;
        }
        return skinPackage;
    };
    game.qhly_getAvatarSrc=function(name){
        if(!name) return null;
        var src = null;
        var ext='.jpg';
        var subfolder='default';
        var type = 'character';
        if(type){
            var dbimage=null,extimage=null,modeimage=null;
            var nameinfo;
            var gzbool=false;
            var mode=get.mode();
            if(type=='character'){
                if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
                    if(mode=='guozhan'){
                        nameinfo=lib.character[name];
                        if(name.indexOf('gz_shibing')==0){
                            name=name.slice(3,11);
                        }
                        else{
                            if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
                            name=name.slice(3);
                        }
                    }
                    else{
                        modeimage=mode;
                    }
                }
                else if(lib.character[name]){
                    nameinfo=lib.character[name];
                }
                else if(name.indexOf('::')!=-1){
                    name=name.split('::');
                    modeimage=name[0];
                    name=name[1];
                }
            }
            if(!modeimage&&nameinfo&&nameinfo[4]){
                for(var i=0;i<nameinfo[4].length;i++){
                    if(nameinfo[4][i].indexOf('ext:')==0){
                        extimage=nameinfo[4][i];break;
                    }
                    else if(nameinfo[4][i].indexOf('db:')==0){
                        dbimage=nameinfo[4][i];break;
                    }
                    else if(nameinfo[4][i].indexOf('mode:')==0){
                        modeimage=nameinfo[4][i].slice(5);break;
                    }
                    else if(nameinfo[4][i].indexOf('character:')==0){
                        name=nameinfo[4][i].slice(10);break;
                    }
                }
            }
            if(extimage){
                src=extimage.replace(/ext:/,'extension/');
            }
            else if(dbimage){
                return null;
            }
            else if(modeimage){
                src='image/mode/'+modeimage+'/character/'+name+ext;
            }
            else if(type=='character'&&lib.config.skin[name]&&arguments[2]!='noskin'){
                src='image/skin/'+name+'/'+lib.config.skin[name]+ext;
            }
            else{
                if(type=='character'){
                    src='image/character/'+(gzbool?'gz_':'')+name+ext;
                }
                else{
                    src='image/'+type+'/'+subfolder+'/'+name+ext;
                }
            }
        }
        else{
            src='image/'+name+ext;
        }
        return src;
    };
    game.qhly_foundPackageExt=function(name){
        var cp = game.qhly_getCharacterPackage(name);
        var picSrc = game.qhly_getAvatarSrc(name);
        if(picSrc && picSrc.indexOf('image/character/') == 0){
            return null;
        }
        var extNameInPic = picSrc.replace('extension/','');
        if(extNameInPic.indexOf('/') >=0){
            extNameInPic = extNameInPic.slice(0,extNameInPic.indexOf('/'));
        }
        if(cp){
            var cpkg = lib.characterPack[cp];
            if(!cpkg)return null;
            return {
                isExt:true,
                fromExt:false,
                filterCharacter:function(name){
                    return cpkg[name]!==false;
                },
                skininfo:function(name,skinname){
                    return null;
                },
                characterTaici:function(name){
                    return null;
                },
                characterLihui:function(name,skin){
                    return null;
                },
                prefix:function(cname){
                    var src = game.qhly_getAvatarSrc(cname);
                    if(src){
                        return src.replace(cname+'.jpg','');
                    }
                    return 'extension/'+cp+'/';
                },
                skin:{
                    standard:(lib.config.qhly_originSkinPath?lib.config.qhly_originSkinPath:'extension/'+extNameInPic+'/skin/image/'),
                },
                audioOrigin:function(cname){
                    var info = get.character(cname);
                    var extName = null;
                    if(info){
                        var skills = info[3];
                        if(skills){
                            for(var skill of skills){
                                var sinfo = lib.skill[skill];
                                if(sinfo.audio !== undefined){
                                    if(typeof sinfo.audio == 'number'){
                                        return '';
                                    }else if(typeof sinfo.audio == 'string' && sinfo.audio.indexOf('ext:')==0){
                                        var infos = sinfo.audio.split(':');
                                        if(infos.length >= 2){
                                            extName = infos[1];
                                            return 'extension/'+extName+"/";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if(get.translation(cp+'_character_config')){
                        return 'extension/'+get.translation(cp+'_character_config')+'/';
                    }
                    return '';
                },
                audio:'extension/'+extNameInPic+'/skin/audio/',//皮肤配音文件在千幻聆音扩展内的位置。
            };
        }
        return null;
    };

    game.qhly_findAdditionSkins=function(name){
        var list = [];
        for(var pkg of lib.qhlypkg){
            if(pkg.getAdditionalSkins){
                list.addArray(pkg.getAdditionalSkins(name));
            }
        }
        return list;
    };

    game.qhly_findAdditionSkinsName=function(name){
        var list = game.qhly_findAdditionSkins();
        var ret = [];
        for(var l of list){
            ret.push("add::"+l.name+"::"+l.skinName);
        }
        return ret;
    };

    game.qhly_skinLock=function(name,skin){
        var pkg = game.qhly_foundPackage(name);
        if(pkg && pkg.lockSkin){
            var ret = pkg.lockSkin(name,skin);
            if(ret && ret.isLocked()){
                return ret;
            }
        }
        return false;
    };
    //获取某武将的皮肤列表。
    game.qhly_getSkinAudioList=function(name,callback,locked){
        var pkg = game.qhly_foundPackage(name);
        if(!pkg.audio){
            if(callback){
                callback(false);
            }
            return;
        }
        game.qhly_getSkinList(name,function(ret,list){
            if(!ret || !list ||!list.length){
                if(callback){
                    callback(false);
                }
                return;
            }
            var path = pkg.audio;
            game.qhly_checkFileExist(path,function(s){
                if(s){
                    game.getFileList(path,function(folders){
                        var retList = [];
                        var retList2 = [];
                        for(var item of list){
                            var nm = game.qhly_earseExt(item);
                            if(folders.contains(nm)){
                                retList.add(nm);
                                retList2.add(item);
                            }
                        }
                        if(callback){
                            callback(true,retList,retList2);
                        }
                    });
                }else{
                    if(callback){
                        callback(false);
                    }
                }
            });
        },locked);
    };
    game.qhly_getSkinList=function(name,callback,locked,loadInfoJs){
        if(locked === undefined){
            locked = true;
        }
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        var skinPackage = game.qhly_foundPackage(name);
        var handleHide=function(list){
            var ret = [];
            for(var skin of list){
                if(skinPackage.hideSkin && skinPackage.hideSkin(name,skin)){
                    continue;
                }
                if(!locked && game.qhly_skinLock(name,skin)){
                    continue;
                }
                var supportExt = ['.jpg','.jpeg','.png','.gif','.webp','.bmp','.ico'];
                for(var ext of supportExt){
                    if(skin.endsWith(ext)){
                        ret.add(skin);
                        break;
                    }
                    if(skin.endsWith(ext.toUpperCase())){
                        ret.add(skin);
                        break;
                    }
                }
            }
            return ret;
        };
        if(_status.qhly_skinListCache){
            var list = _status.qhly_skinListCache[name];
            if(list){
                var path = '';
                if(skinPackage.isLutou){
                    path = skinPackage.skin.lutou;
                }else{
                    path = skinPackage.skin.standard;
                }
                path = path + name;
                if(loadInfoJs && list.contains('skininfo.js') && !lib.qhly_dirskininfo[name]){
                    lib.init.js(lib.assetURL+path+"/skininfo.js",null,function(){
                        callback(true,handleHide(list.slice(0)));
                    },function(err){
                        callback(true,handleHide(list.slice(0)));
                    });
                }else{
                    callback(true,handleHide(list.slice(0)));
                }
                return;
            }
            if(list === false){
                callback(false);
                return;
            }
        }
        if(game.getFileList){
            var path = '';
            if(skinPackage.isLutou){
                path = skinPackage.skin.lutou;
            }else{
                path = skinPackage.skin.standard;
            }
            path = path + name;
            game.qhly_checkFileExist(path,function(s){
                if(s){
                    game.getFileList(path,function(folders,files){
                        if(!_status.qhly_skinListCache)_status.qhly_skinListCache = {};
                        var ret = files.slice(0);
                        _status.qhly_skinListCache[name] = ret;
                        if(loadInfoJs && files.contains('skininfo.js')){
                            lib.init.js(lib.assetURL+path+"/skininfo.js",null,function(){
                                callback(true,handleHide(files));
                            },function(){
                                callback(true,handleHide(files));
                            });
                        }else{
                            callback(true,handleHide(files));
                        }
                    });
                }else{
                    if(!_status.qhly_skinListCache)_status.qhly_skinListCache = {};
                    _status.qhly_skinListCache[name] = false;
                    callback(false);
                }
            });
        }else{
            if(!_status.qhly_skinListCache)_status.qhly_skinListCache = {};
            _status.qhly_skinListCache[name] = false;
            callback(false);
        }
    };
    //根据武将ID，皮肤文件名，查找皮肤的翻译命名。
    game.qhly_getSkinName=function(plname,filename,skinPackage){
        var foundDot = filename.lastIndexOf('.');
        if(foundDot == -1){
            foundDot = filename.length;
        }
        var sname = filename.slice(0,foundDot);
        if(!plname){
            return sname;
        }
        if(!skinPackage){
            //4VrLPyXM/UwVl3SXOMoDpBLQcoJHwBtPcxBNF1VM6oxC7qONebCO4KekZdetP8Zs
            skinPackage = game.qhly_foundPackage(plname);
        }
        if(skinPackage.skininfo){
            var info;
            if(typeof skinPackage.skininfo == 'function'){
                info = skinPackage.skininfo(plname,sname);
            }else{
                var tname = plname + '-' + sname;
                info = skinPackage.skininfo[tname];
                if(!info){
                    info = skinPackage.skininfo[sname];
                }
            }
            if(info && info.translation){
                return info.translation;
            }
        }
        return sname;
    };

    //获取皮肤信息。
    game.qhly_getSkinInfo=function(plname,filename,skinPackage){
        if(plname.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(plname)){
                var subplname = plname.slice(3);
                if(get.character(subplname)){
                    plname = subplname;
                }
            }
        }
        if(!filename){
            return {
                info:'',
            };
        }
        var foundDot = filename.lastIndexOf('.');
        if(foundDot == -1){
            foundDot = filename.length;
        }
        var sname = filename.slice(0,foundDot);
        if(!plname){
            return {
                info:'',
                translation:sname
            };
        }
        var dinfo = lib.qhly_dirskininfo[plname];
        if(dinfo && dinfo.skin && dinfo.skin[sname]){
            return dinfo.skin[sname];
        }
        if(!skinPackage){
            skinPackage = game.qhly_foundPackage(plname);
        }
        if(skinPackage.skininfo){
            var info;
            if(typeof skinPackage.skininfo == 'function'){
                info = skinPackage.skininfo(plname,sname);
            }else{
                var tname = plname + "-" + sname;
                info = skinPackage.skininfo[tname];
                if(!info){
                    info = skinPackage.skininfo[sname];
                }
            }
            if(info){
                return info;
            }
        }
        return {
            info:'',
            translation:sname
        };
    };
    game.qhly_getSkinImagePath=function(name,pkg){
        if(!pkg)pkg = game.qhly_foundPackage(name);
        var path = null;
        if(pkg.isLutou){
            path = pkg.skin.lutou;
        }
        if(!path){
            path = pkg.skin.standard;
        }
        return path;
    };
    //将某个文件路径抹除扩展名。如file.txt -> file
    game.qhly_earse_ext=function(path){
        if(!path)return path;
        var foundDot = path.lastIndexOf('.');
        if(foundDot < 0)return path;
        return path.slice(0,foundDot);
    };

    game.qhly_readFileAsText=function(path,callback){
        game.qhly_checkFileExist(path,function(ret){
            if(!ret){
                if(callback){
                    callback(false);
                }
            }else{
                game.readFile(path,function(result){
                    if(callback){
                        if(lib.device){
                            var ret2 = String.fromCharCode.apply(null, new Uint8Array(result));
                            callback(true,ret2);
                        }else{
                            callback(true,result.toString());
                        }
                    }
                },function(){
                    if(callback){
                        callback(false);
                    }
                });
            }
        });
    };

    game.qhly_writeTextFile=function(str,path,filename,callback){
        if(lib.device){
            game.ensureDirectory(path,function(){
                window.resolveLocalFileSystemURL(lib.assetURL+path,function(entry){
                    entry.getFile(filename,{create:true},function(fileEntry){
                        fileEntry.createWriter(function(fileWriter){
                            fileWriter.onwriteend=function(){
                                if(callback){
                                    callback(false);
                                }
                            }
                            var textFileAsBlob = new Blob([str], {type:'text/plain'});
                            fileWriter.write(textFileAsBlob);
                        });
                    });
                });
            });
        }else if(typeof window.require=='function'){
            game.ensureDirectory(path,function(){
                lib.node.fs.writeFile(__dirname+'/'+path+'/'+filename,str,null,callback);
            });
        }
    };

    game.qhly_isForbidEditTaici=function(name){
        var pkg = game.qhly_foundPackage(name);
        if(pkg && pkg.forbidEditTaici){
            if(typeof pkg.forbidEditTaici == 'function'){
                return pkg.forbidEditTaici(name);
            }
            return pkg.forbidEditTaici;
        }
        return false;
    };
    
    //设置当前的皮肤。
    game.qhly_setCurrentSkin=function(name,skin,callback){
        if(name.indexOf('gz_') == 0){//国战兼容
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        var skinPackage = game.qhly_foundPackage(name);
        if(skin){
            if(game.getFileList){
                var path;
                if(window.qhly_audio_redirect && window.qhly_audio_redirect[name+"-"+game.qhly_earse_ext(skin)]){
                    path = skinPackage.audio + name + "/" + window.qhly_audio_redirect[name+"-"+game.qhly_earse_ext(skin)];
                }else{
                    path = skinPackage.audio+name+"/"+skin;
                    path = game.qhly_earse_ext(path);
                }
                game.qhly_checkFileExist(path,function(success){
                    if(success){
                        game.getFileList(path,function(folders,files){
                            if(files.contains('audio-redirect.js')){
                                lib.init.js(lib.assetURL+path+'/audio-redirect.js',null,function(){
                                    game.qhly_setCurrentSkin(name,skin,callback);
                                });
                                return;
                            }
                            var arr = [];
                            var list = lib.config.qhly_skinset.skinAudioList[name];
                            if(list){
                                for(var m of list){
                                    delete lib.config.qhly_skinset.audioReplace[m];//删除原有的音频映射。
                                }
                            }
                            delete lib.config.qhly_skinset.audioReplace['die/'+name];
                            for(var file of files){
                                file = game.qhly_earse_ext(file);
                                if(!skinPackage.isExt){
                                    if(file == name){
                                        arr.push("die/"+name);
                                        lib.config.qhly_skinset.audioReplace["die/"+name] = "../"+path + "/" + name;
                                    }else{
                                        arr.push("skill/"+file);//创建音频映射。
                                        lib.config.qhly_skinset.audioReplace["skill/"+file] = "../"+path + "/" + file;
                                    }
                                }else{
                                    var audioOrigin = skinPackage.audioOrigin;
                                    if(typeof audioOrigin == 'function'){
                                        audioOrigin = audioOrigin(name);
                                    }
                                    arr.push("../"+audioOrigin+file);
                                    lib.config.qhly_skinset.audioReplace["../"+audioOrigin+file] = "../"+path + "/" + file;
                                }
                            }
                            lib.config.qhly_skinset.skinAudioList[name] = arr;
                            lib.config.qhly_skinset.skin[name] = skin;
                            game.qhlySyncConfig();
                            game.qhly_refresh(name,skin);
                            if(lib.qhly_callbackList){
                                for(var pubCallback of lib.qhly_callbackList){
                                    if(pubCallback.onChangeSkin){
                                        pubCallback.onChangeSkin(name,skin);
                                    }
                                }
                            }
                            if(callback){
                                callback();
                            }
                        });
                    }else{
                        var arr = [];
                        var list = lib.config.qhly_skinset.skinAudioList[name];
                        if(list){
                            for(var m of list){
                                delete lib.config.qhly_skinset.audioReplace[m];
                            }
                        }
                        delete lib.config.qhly_skinset.audioReplace['die/'+name];
                        lib.config.qhly_skinset.skinAudioList[name] = arr;
                        lib.config.qhly_skinset.skin[name] = skin;
                        game.qhlySyncConfig();
                        game.qhly_refresh(name,skin);
                        if(lib.qhly_callbackList){
                            for(var pubCallback of lib.qhly_callbackList){
                                if(pubCallback.onChangeSkin){
                                    pubCallback.onChangeSkin(name,skin);
                                }
                            }
                        }
                        if(callback){
                            callback();
                        }
                    }
                });
            }else{
                alert("尚未加载完成！");
            }
        }else{
            var list = lib.config.qhly_skinset.skinAudioList[name];
            if(list){
                for(var m of list){
                    delete lib.config.qhly_skinset.audioReplace[m];
                }
            }
            delete lib.config.qhly_skinset.audioReplace['die/'+name];
            delete lib.config.qhly_skinset.skin[name];
            delete lib.config.qhly_skinset.skinAudioList[name];
            game.qhlySyncConfig();
            game.qhly_refresh(name,skin);
            if(lib.qhly_callbackList){
                for(var pubCallback of lib.qhly_callbackList){
                    if(pubCallback.onChangeSkin){
                        pubCallback.onChangeSkin(name,skin);
                    }
                }
            }
            if(callback){
                callback();
            }
        }
    };
   get.qhly_getCurrentViewSkinValue=function(name,fallback){
        var skin = lib.qhly_viewskin[lib.config.qhly_currentViewSkin];
        if(!skin)return fallback;
        if(!skin[name])return fallback;
        return skin[name];
   };
    //播放死亡配音。
    window.qhly_playDieAudio=function(name){
        var skinPackage = game.qhly_foundPackage(name);
        if(skinPackage.isExt){
            var path = skinPackage.audioOrigin;
            if(typeof path == 'function'){
                path = path(name);
            }
            path = path + name;
            var arr = path.split("/");
            var params = [".."];
            params.addArray(arr);
            game.playAudio.apply(game,params);
        }else{
            game.playAudio("die",name,function(){
                game.playAudio('die',name.slice(name.indexOf('_')+1));
            });
        }
    };

    //播放技能语音。
    window.qhly_TrySkillAudio=function(skill,player,directaudio,which,skin){
        //alert(skill+" "+player.name);
        if(_status.qhly_viewRefreshing)return;
        var info=get.info(skill);
        if(!info) return;
        _status.qhly_previewAudio = true;
        if(true){
            var audioname=skill;
            if(info.audioname2&&info.audioname2[player.name]){
                audioname=info.audioname2[player.name];
                info=lib.skill[audioname];
            }
            var audioinfo=info.audio;
            if(typeof audioinfo=='string'&&lib.skill[audioinfo]){
                audioname=audioinfo;
                audioinfo=lib.skill[audioname].audio;
            }
            if(typeof audioinfo=='string'){
                if(audioinfo.indexOf('ext:')==0){
                    audioinfo=audioinfo.split(':');
                    if(audioinfo.length==3){
                        if(audioinfo[2]=='true'){
                            game.playAudio('..','extension',audioinfo[1],audioname);
                        }
                        else{
                            audioinfo[2]=parseInt(audioinfo[2]);
                            if(audioinfo[2]){
                                if(typeof which == 'number'){
                                    game.playAudio('..','extension',audioinfo[1],audioname+(which%audioinfo[2] + 1));
                                }else{
                                    //4VrLPyXM/UwVl3SXOMoDpBLQcoJHwBtPcxBNF1VM6oxC7qONebCO4KekZdetP8Zs
                                    game.playAudio('..','extension',audioinfo[1],audioname+Math.ceil(audioinfo[2]*Math.random()));
                                }
                            }
                        }
                    }
                    delete _status.qhly_previewAudio;
                    return;
                }
            }
            else if(Array.isArray(audioinfo)){
                audioname=audioinfo[0];
                audioinfo=audioinfo[1];
            }
            if(Array.isArray(info.audioname)&&player){
                if(info.audioname.contains(player.name)){
                    audioname+='_'+player.name;
                }
                else if(info.audioname.contains(player.name1)){
                    audioname+='_'+player.name1;
                }
                else if(info.audioname.contains(player.name2)){
                    audioname+='_'+player.name2;
                }
            }
            if(typeof audioinfo=='number'){
                if(typeof which == 'number'){
                    //alert('4');
                    game.playAudio('skill',audioname+(which%audioinfo + 1));
                }else{
                    //alert('5');
                    game.playAudio('skill',audioname+Math.ceil(audioinfo*Math.random()));
                }
            }
            else if(audioinfo){
                //alert('6');
                game.playAudio('skill',audioname);
            }
            else if(true&&info.audio!==false){
                game.playSkillAudio(audioname);
            }
        }
    };
    get.qhly_characterInfo = function(name){
        var ret = '';
        for(var obj of lib.qhlypkg){
            if(obj.characterInfo){
                var m = obj.characterInfo(name);
                if(m){
                    ret += m;
                    ret += "<br><br>";
                }
            }
        }
        if(ret.length == 0){
            ret = "<br><br>"+get.characterIntro(name)+"<br><br><br>";
        }
        return ret;
    }

    lib.qhly_getEventPosition=function(event){
        var x = event.clientX;
        var y = event.clientY;
        if(lib.config.touchscreen && event.touches && event.touches.length){
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        }
        return {x:x/game.documentZoom,y:y/game.documentZoom};
    };
    lib.qhly_computeDistance=function(x0,y0,x1,y1){
        var dx = x0 - x1;
        var dy = y0 - y1;
        return Math.sqrt(dx*dx + dy*dy);
    };
    lib.qhly_setPosition=function(div,x,y){
        div.style.left = x.toFixed(3) + 'px';
        div.style.top = y.toFixed(3) + 'px';
    };
    game.qhly_open_small_dragon=function(name,from,ingame){
        if(_status.qhly_open)return;
        _status.qhly_open = true;
        game.qhly_playQhlyAudio('qhly_voc_click3',null,true);
        var baseHeight = ui.window.offsetHeight * 0.7;
        if(lib.config.qhly_dragonsize){
            baseHeight = baseHeight * parseFloat(lib.config.qhly_dragonsize);
        }
        baseHeight = baseHeight.toFixed(3);
        var background = ui.create.div('.qhly-dragonwin-out');
        document.body.appendChild(background);
        var dragonwin = ui.create.div('.qhly-dragonback');
        ui.create.div('.qhly-dragonback-backgroundimage',dragonwin);
        var dragonhead = ui.create.div('.qhly-dragonhead');
        dragonwin.style.height = baseHeight + 'px';
        dragonwin.style.width = baseHeight +'px';
        if(lib.config.qhly_dragonlocation && lib.config.qhly_dragonlocation!='center'){
            dragonwin.style.transform = 'translate(0%, 0%)';
            if(lib.config.qhly_dragonlocation == 'head'){
                var player = from;
                if(!player){
                    var players = game.players.slice(0);
                    players.addArray(game.dead);
                    players = players.filter(function(current){
                        return current.name == name || current.name1 == name || current.name2 == name; 
                    });
                    if(players.length){
                        player = players[0];
                    }
                }
                if(player){
                    var rect = player.getBoundingClientRect();
                    rect = game.qhly_handleRect(rect);
                    var posx = rect.left - baseHeight/2 + rect.width/2;
                    var posy = rect.top - baseHeight/2 + rect.height/2;
                    //lib.qhly_setPosition(dragonhead,posx,posy);
                    lib.qhly_setPosition(dragonwin,posx,posy);
                }else{
                    dragonwin.style.left = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    dragonwin.style.top = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    //dragonhead.style.left = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    //dragonhead.style.top = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                }
            }else{
                if(!lib.config.qhly_dragonlocationValue){
                    dragonwin.style.left = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    dragonwin.style.top = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    //dragonhead.style.left = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                    //dragonhead.style.top = 'calc(50% - '+(baseHeight/2).toFixed(2)+'px)';
                }else{
                    dragonwin.style.left = lib.config.qhly_dragonlocationValue.x;
                    dragonwin.style.top = lib.config.qhly_dragonlocationValue.y;
                    //dragonhead.style.left = lib.config.qhly_dragonlocationValue.x;
                    //dragonhead.style.top = lib.config.qhly_dragonlocationValue.y;
                }
            }
        }
        background.appendChild(dragonwin);
        dragonwin.appendChild(dragonhead);
        var state = {
            preclicktime:0,
            lastSpinTime:0,
            skinWidthRate:0.20754,
            skinHeightRate:0.23095,
            curAngle:0,
            visibleAngleStart:-180,
            visibleAngleEnd:180,
            fadeAngleAreaStart:-160,
            fadeAngleAreaEnd:160,
            skinCircleRaduisRate:0.23017,
            skins:[],
            skinViews:[],
            skinOrder:function(view){
                if(view.skinOrder === undefined){
                    for(var i=0;i<this.skinViews.length;i++){
                        this.skinViews[i].skinOrder = i;
                    }
                }
                return view.skinOrder;
            },
            angleLocationOf:function(view){
                return this.curAngle + this.skinOrder(view) * this.perAngle();
            },
            perAngle:function(){
                if(this.skins.length >= 8 || this.skins.length <= 1){
                    return 45;
                }
                return 360 / this.skins.length;
            },
            refreshSkins:function(){
                for(var skinView of this.skinViews){
                    this.refreshLocation(skinView);
                }
            },
            handleRect:function(rect){
                if(game.qhly_hasExtension('十周年UI'))return rect;
                return {
                    width:rect.width/game.documentZoom,
                    height:rect.height/game.documentZoom,
                    left:rect.left/game.documentZoom,
                    top:rect.top/game.documentZoom,
                };
            },
            refreshLocation:function(view){
                if(!this.isVisible(view)){
                    view.hide();
                    return;
                }else{
                    view.show();
                }
                var rect = dragonwin.getBoundingClientRect();
                rect = this.handleRect(rect);
                var opacity = this.opacity(view);
                view.style.opacity = opacity;
                var angleLocation = this.angleLocationOf(view);
                var radius = this.skinCircleRaduisRate * rect.width;
                var angleArc = angleLocation / 180 * Math.PI;
                var xFromCenter = radius * Math.sin(angleArc);
                var yFromCenter = radius * Math.cos(angleArc);
                var x = xFromCenter + rect.width/2 - this.skinWidthRate*rect.width/2;
                var y = yFromCenter + rect.height/2 - this.skinHeightRate*rect.width/2;
                view.style.left = x.toFixed(3)+'px';
                view.style.top = y.toFixed(3)+'px';
                view.style.width = (this.skinWidthRate*rect.width).toFixed(3)+'px';
                view.style.height = (this.skinHeightRate*rect.height).toFixed(3)+'px';
                var skin = this.skins[this.skinOrder(view)];
                var currentSkinId = game.qhly_getSkin(name);
                if(skin == currentSkinId || (!skin && !currentSkinId)){
                    view.setBackgroundImage('extension/千幻聆音/newui_skin_background_shuimo.png');
                }else{
                    view.setBackgroundImage('');
                }
            },
            isVisible:function(view){
                if(this.skins.length <= 8)return true;
                var angle = this.angleLocationOf(view);
                return angle >= this.visibleAngleStart && angle <= this.visibleAngleEnd;
            },
            opacity:function(view){
                if(!this.isVisible(view))return 0;
                if(this.skins.length <= 8)return 1;
                var angle = this.angleLocationOf(view);
                if(angle > this.fadeAngleAreaStart && angle < this.fadeAngleAreaEnd){
                    return 1;
                }
                if(angle < this.fadeAngleAreaStart){
                    return Math.abs((angle-this.fadeAngleAreaStart)/(this.visibleAngleStart - this.fadeAngleAreaStart))/2;
                }
                return Math.abs((angle-this.fadeAngleAreaEnd)/(this.visibleAngleEnd - this.fadeAngleAreaEnd))/2;
            },
            onClickSkin:function(event,name,skin,skinView){
                if(this.opacity(skinView) != 1)return;
                var currentSkinId = game.qhly_getSkin(name);
                if(skin == currentSkinId || (!skin && !currentSkinId)){
                    return;
                }
                var that = this;
                game.qhly_setCurrentSkin(name,skin,function(){
                    game.qhly_playQhlyAudio('qhly_voc_click2',null,true);
                    that.refresh();
                    if(lib.config.qhly_smallwinclosewhenchange){
                        background.delete();
                        _status.qhly_open = false;
                    }
                });
            },
            refresh:function(){
                this.refreshSkins();
            },
            maxAngle:function(){
                return 0;
            },
            minAngle:function(){
                return -(this.skins.length-1) * this.perAngle();
            },
            onSpinBegin:function(e){
                var pos = lib.qhly_getEventPosition(e);
                var rect = dragonwin.getBoundingClientRect();
                rect = this.handleRect(rect);
                var centerX = rect.left + rect.width/2;
                var centerY = rect.top + rect.height/2;
                var distance = lib.qhly_computeDistance(pos.x,pos.y,centerX,centerY);
                if(distance >= rect.width * 0.1717 && distance < rect.width * 0.3758){
                    e.stopPropagation();
                    delete this.spinDirection;
                    this.isSpin = true;
                    this.spinStartPosition = pos;
                    this.spinStartAngle = this.curAngle;
                }
            },
            computeSpinDirection:function(pos0,pos1){
                var rect = dragonwin.getBoundingClientRect();
                rect = this.handleRect(rect);
                var centerX = rect.left + rect.width/2;
                var centerY = rect.top + rect.height/2;
                var posA = {x:pos0.x - centerX,y:pos0.y-centerY};
                var posB = {x:pos1.x - centerX,y:pos1.y-centerY};
                var toAngle = function(pos){
                    var cos = pos.x/Math.sqrt(pos.x*pos.x + pos.y*pos.y);
                    if(pos.y > 0)return Math.acos(cos)/Math.PI * 180;
                    return 360 - Math.acos(cos)/Math.PI * 180;
                };
                var angleA = toAngle(posA);
                var angleB = toAngle(posB);
                var ret = angleB - angleA;
                if(ret <= 180 && ret >= -180){
                    return ret;
                }
                if(ret < -180)return ret + 360;
                if(ret > 180)return ret - 360;
            },
            onSpinMove:function(e){
                if(!this.isSpin)return;
                var pos = lib.qhly_getEventPosition(e);
                var direction = this.computeSpinDirection(this.spinStartPosition,pos);
                if(Math.abs(direction) >= 5){
                    this.lastSpinTime = (new Date()).valueOf();
                }
                var newCur = this.curAngle - direction;
                if(this.skins.length <= 8){
                    while(newCur < -180){
                        newCur += 360;
                    }
                    while(newCur > 180){
                        newCur -= 360;
                    }
                }else{
                    if(newCur > this.maxAngle()){
                        newCur = this.maxAngle();
                    }else if(newCur < this.minAngle()){
                        newCur = this.minAngle();
                    }
                }
                this.curAngle = newCur;
                this.spinStartPosition = pos;
                this.refresh();
            },
            onSpinEnd:function(e){
                if(this.isSpin){
                    e.stopPropagation();
                    delete this.isSpin;
                }
            },
            onSpinCancel:function(e){
                if(this.isSpin){
                    e.stopPropagation();
                    delete this.isSpin;
                }
            },
            init:function(){
                var currentSkinId = game.qhly_getSkin(name);
                if(!currentSkinId){
                    this.curAngle = -90;
                }else{
                    for(var i=0;i<this.skins.length;i++){
                        if(this.skins[i] == currentSkinId){
                            this.curAngle = -this.perAngle() * i;
                            break;
                        }
                    }
                }
                if(this.skins.length <= 2){
                    this.skinWidthRate *= 1.35;
                    this.skinHeightRate *= 1.35;
                }else if(this.skins.length <= 4){
                    this.skinWidthRate *= 1.2;
                    this.skinHeightRate *= 1.2;
                }
                if(this.skins.length <= 8){
                    dragonhead.style.zIndex = 4;
                }else{
                    dragonhead.style.zIndex = 10;
                }
                for(var i=0;i<this.skins.length;i++){
                    var skinView = ui.create.div('.qhly-dragonskin');
                    this.skinViews.push(skinView);
                    var skinCover = ui.create.div('.qhly-dragonskincover',skinView);
                    skinCover.classList.add('qh-not-replace')
                    skinView.skinCover = skinCover;
                    skinView.skinOrder = i;
                    skinView.hide();
                    var skin = this.skins[i];
                    if(skin){
                        var file = game.qhly_getSkinFile(name,skin);
                        skinCover.qhly_origin_setBackgroundImage(file);
                    }else{
                        skinCover.qhly_origin_setBackground(name,'character');
                    }
                    var that = this;
                    (function(name,skin,skinView){
                        skinCover.qhly_listen(function(e){
                            that.onClickSkin(e,name,skin,skinView);
                        });
                    })(name,skin,skinView);
                    dragonwin.appendChild(skinView);
                    this.refreshLocation(skinView);
                }
            },
        };
        var clickOutBegin=function(event){
            var pos = lib.qhly_getEventPosition(event);
            var rect = dragonwin.getBoundingClientRect();
            rect = state.handleRect(rect);
            var centerX = rect.left + rect.width/2;
            var centerY = rect.top + rect.height/2;
            var distance = lib.qhly_computeDistance(pos.x,pos.y,centerX,centerY);
            if(distance < rect.width * 0.3758){
                return;
            }
            background.qh_startClick = true;
        };
        var clickOutLeave=function(event){
            delete background.qh_startClick;
        };
        var clickOutUp=function(event){
            if(background.qh_startClick || lib.config.touchscreen){
                if(lib.config.touchscreen){
                    var pos = lib.qhly_getEventPosition(event);
                    var rect = dragonwin.getBoundingClientRect();
                    rect = state.handleRect(rect);
                    var centerX = rect.left + rect.width/2;
                    var centerY = rect.top + rect.height/2;
                    var distance = lib.qhly_computeDistance(pos.x,pos.y,centerX,centerY);
                    if(distance < rect.width * 0.3758){
                        return;
                    }
                }
                background.delete();
                _status.qhly_open = false;
                game.qhly_playQhlyAudio('qhly_voc_click3',null,true);
            }
            delete background.qh_startClick;
        };
        if(lib.config.touchscreen){
            background.addEventListener('touchstart',clickOutBegin);
            background.addEventListener('touchend',clickOutUp);
            background.addEventListener('touchcancel',clickOutLeave);
        }else{
            background.addEventListener('mousedown',clickOutBegin);
            background.addEventListener('mouseup',clickOutUp);
            background.addEventListener('mouseleave',clickOutLeave);
        }
        if(lib.config.touchscreen){
            dragonwin.addEventListener('touchstart',function(e){
                state.onSpinBegin(e);
            });
            dragonwin.addEventListener('touchend',function(e){
                state.onSpinEnd(e);
            });
            dragonwin.addEventListener('touchmove',function(e){
                state.onSpinMove(e);
            });
            dragonwin.addEventListener('touchcancel',function(e){
                state.onSpinCancel(e);
            });
        }else{
            dragonwin.addEventListener('mousedown',function(e){
                state.onSpinBegin(e);
            });
            dragonwin.addEventListener('mouseup',function(e){
                state.onSpinEnd(e);
            });
            dragonwin.addEventListener('mousemove',function(e){
                state.onSpinMove(e);
            });
            dragonwin.addEventListener('mouseleave',function(e){
                state.onSpinCancel(e);
            });
        }
        dragonwin.listen(function(e){
            var pos = lib.qhly_getEventPosition(e);
            var rect = dragonwin.getBoundingClientRect();
            rect = state.handleRect(rect);
            var centerX = rect.left + rect.width/2;
            var centerY = rect.top + rect.height/2;
            var distance = lib.qhly_computeDistance(centerX,centerY,pos.x,pos.y);
            if(distance < rect.width * 0.3758){
                e.stopPropagation();
            }
            if(distance > rect.width * 0.1717){
                return;
            }
            var time = (new Date()).valueOf();
            if(time - state.preclicktime < 250){
                background.delete();
                _status.qhly_open = false;
                game.qhly_open_new(name,lib.config.qhly_doubledefaultpage?lib.config.qhly_doubledefaultpage:'skill',ingame);
            }
            state.preclicktime = time;
            e.stopPropagation();
        });
        if(lib.config.qhly_dragonlocation == 'drag' || lib.config.qhly_dragonlocation == 'head'){
            var dragMouseDown=function(e){
                var pos = lib.qhly_getEventPosition(e);
                var rect = dragonwin.getBoundingClientRect();
                rect = game.qhly_handleRect(rect);
                var centerX = rect.left + rect.width/2;
                var centerY = rect.top + rect.height/2;
                var distance = lib.qhly_computeDistance(centerX,centerY,pos.x,pos.y);
                if(distance < rect.width * 0.1717){
                    state.isDragging = true;
                    state.beginPosition = {
                        x:rect.left,
                        y:rect.top
                    };
                    state.beginMousePosition = {
                        x:pos.x,
                        y:pos.y
                    };
                }
            };
            var dragMouseMove=function(e){
                if(state.isDragging){
                    var pos = lib.qhly_getEventPosition(e);
                    if(lib.qhly_computeDistance(pos.x,pos.y,state.beginMousePosition.x,state.beginMousePosition.y) > 10){
                        var baisx = pos.x - state.beginMousePosition.x;
                        var baisy = pos.y - state.beginMousePosition.y;
                        var newx = state.beginPosition.x + baisx;
                        var newy = state.beginPosition.y + baisy;
                        dragonwin.style.left = newx.toFixed(3)+"px";
                        dragonwin.style.top = newy.toFixed(3)+"px";
                        //dragonhead.style.left = newx.toFixed(3)+"px";
                        //dragonhead.style.top = newy.toFixed(3)+"px";
                    }
                    e.stopPropagation();
                }
            };
            var dragMouseUp=function(e){
                if(state.isDragging){
                    var pos = lib.qhly_getEventPosition(e);
                    var baisx = pos.x - state.beginMousePosition.x;
                    var baisy = pos.y - state.beginMousePosition.y;
                    var newx = state.beginPosition.x + baisx;
                    var newy = state.beginPosition.y + baisy;
                    dragonwin.style.left = newx.toFixed(3)+"px";
                    dragonwin.style.top = newy.toFixed(3)+"px";
                    //dragonhead.style.left = newx.toFixed(3)+"px";
                    //dragonhead.style.top = newy.toFixed(3)+"px";
                    game.saveConfig('qhly_dragonlocationValue',{x:dragonwin.style.left,y:dragonwin.style.top});
                    delete state.isDragging;
                    e.stopPropagation();
                }
            };
            var dragMouseCancel=function(e){
                if(state.isDragging){
                    delete state.isDragging;
                    e.stopPropagation();
                }
            };
            if(lib.config.touchscreen){
                dragonwin.addEventListener('touchstart',dragMouseDown);
                dragonwin.addEventListener('touchend',dragMouseUp);
                dragonwin.addEventListener('touchmove',dragMouseMove);
                dragonwin.addEventListener('touchcancel',dragMouseCancel);
            }else{
                dragonwin.addEventListener('mousedown',dragMouseDown);
                dragonwin.addEventListener('mouseup',dragMouseUp);
                dragonwin.addEventListener('mousemove',dragMouseMove);
                dragonwin.addEventListener('mouseleave',dragMouseCancel);
            }
        }
        game.qhly_getSkinList(name,function(ret,list){
            var pkg = game.qhly_foundPackage(name);
            if(!list)list = [];
            list.sort(function(a,b){
                var orderA = game.qhly_getOrder(name,a,pkg);
                var orderB = game.qhly_getOrder(name,b,pkg);
                if(orderA > orderB)return 1;
                if(orderA == orderB)return 0;
                return -1;
            });
            var skinList = [null];
            if(list && list.length){
                skinList.addArray(list);
            }
            state.skins = skinList;
            state.init();
            state.refreshSkins();
        },false);

    };
    game.qhly_open_small=function(name,from,ingame){
        if(lib.config.qhly_smallwindowstyle == 'dragon' || !lib.config.qhly_smallwindowstyle){
            game.qhly_open_small_dragon(name,from,ingame);
            return;
        }
        try{
            if(_status.qhly_open)return;
            _status.qhly_open = true;
            var background = ui.create.div('.qh-skinchange-background',document.body);
            var backgroundBack = ui.create.div('.qh-skinchange-background',background);
            var dialog = ui.create.div('.qh-skinchange-dialog',background);
            var exit = ui.create.div('.qh-skinchange-exit',dialog);
            var cover = ui.create.div('.qh-skinchange-cover',dialog);
            var content = ui.create.div('.qh-skinchange-area',cover);
            var enlarge = ui.create.div('.qh-skinchange-enlarge',dialog);
            var swipe_up = lib.config.swipe_up;
            lib.config.swipe_up = '';
            var swipe_down = lib.config.swipe_down;
            lib.config.swipe_down = '';
            var swipe_left = lib.config.swipe_left;
            lib.config.swipe_left = '';
            var swipe_right = lib.config.swipe_right;
            lib.config.swipe_right = '';
            var exitListener = function(){
                lib.config.swipe_up = swipe_up;
                lib.config.swipe_down = swipe_down;
                lib.config.swipe_left = swipe_left;
                lib.config.swipe_right = swipe_right;
                if(!_status.qhly_open)return;
                background.delete();
                game.qhly_playQhlyAudio('qhly_voc_press',null,true);
                delete _status.qhly_open;
            };
            var viewState = {
                offset:0,
                skinTotalWidth:500,
                skinPerWidth:150,
                skinGap:10,
                skins:[],
                skinViews:[],
                visibleWidth:function(){
                    var rect = cover.getBoundingClientRect();
                    return rect.width;
                },
                content:content,
                refresh:function(){
                    this.content.style.width = Math.round(this.skinTotalWidth)+'px';
                    this.content.style.left = Math.round(this.offset)+"px";
                },
                refreshSkins:function(){
                    for(var i=0;i<this.skinViews.length;i++){
                        var skinView = this.skinViews[i];
                        var skin = this.skins[i];
                        if(game.qhly_skinIs(name,skin)){
                            skinView.style.filter = "saturate(100%)";
                            skinView.belowText.style.textShadow = '.2rem 0rem .5rem red,-.2rem 0rem .5rem red,0rem .2rem .5rem red,0rem -.2rem .5rem red';
                        }else{
                            skinView.style.filter = "saturate(40%)";
                            skinView.belowText.style.textShadow = '.2rem 0rem .5rem blue,-.2rem 0rem .5rem blue,0rem .2rem .5rem blue,0rem -.2rem .5rem blue';
                        }
                    }
                },
                handleMouseDown:function(x,y){
                    if(this.skinTotalWidth <= this.visibleWidth()){
                        return;
                    }
                    this.mouseDownX = x;
                    this.mouseDownY = y;
                    this.isTouching = true;
                    this.cancelClick = false;
                },
                handleMouseMove:function(x,y){
                    if(this.isTouching){
                        var slideX = x - this.mouseDownX;
                        this.tempoffset = this.offset + slideX;
                        if(this.tempoffset > 0){
                            this.tempoffset= 0;
                        }else if(this.skinTotalWidth - this.visibleWidth() < -this.tempoffset){
                            this.tempoffset = -(this.skinTotalWidth - this.visibleWidth());
                        }
                        this.content.style.left = Math.round(this.tempoffset)+"px";
                        return true;
                    }
                },
                handleMouseUp:function(x,y){
                    if(this.isTouching){
                        this.isTouching = false;
                        if(x && y){
                            var slideX = x - this.mouseDownX;
                            this.tempoffset = this.offset + slideX;
                            if(this.tempoffset > 0){
                                this.tempoffset= 0;
                            }else if(this.skinTotalWidth - this.visibleWidth() < -this.tempoffset){
                                this.tempoffset = -(this.skinTotalWidth - this.visibleWidth());
                            }
                        }
                        this.cancelClick = Math.abs(this.offset - this.tempoffset) > 50;
                        this.content.style.left = Math.round(this.tempoffset)+"px";
                        if(this.tempoffset)this.offset = this.tempoffset;
                    }else{
                        this.cancelClick = false;
                    }
                    this.previousX = this.mouseDownX;
                    this.previousY = this.mouseDownY;
                    delete this.mouseDownX;
                    delete this.mouseDownY;
                }
            };
            if(lib.config.touchscreen){
                content.addEventListener('touchstart',function(event){
                    if(event.touches && event.touches.length){
                        viewState.handleMouseDown(event.touches[0].clientX,event.touches[0].clientY);
                    }
                });
                content.addEventListener('touchend',function(event){
                    viewState.handleMouseUp();
                });
                content.addEventListener('touchcancel',function(event){
                    viewState.handleMouseUp();
                });
                content.addEventListener('touchmove',function(event){
                    if(event.touches && event.touches.length)
                    viewState.handleMouseMove(event.touches[0].clientX,event.touches[0].clientY);
                });
            }else{
                content.addEventListener('mousewheel',function(event){
                    viewState.handleMouseDown(event.clientX,event.clientY);
                    if(event.wheelDelta > 0){
                        viewState.handleMouseMove(event.clientX-30,event.clientY);
                        viewState.handleMouseUp(event.clientX-30,event.clientY);
                    }else{
                        viewState.handleMouseMove(event.clientX+30,event.clientY);
                        viewState.handleMouseUp(event.clientX+30,event.clientY);
                    }
                });
                content.addEventListener('mousedown',function(event){
                    viewState.handleMouseDown(event.clientX,event.clientY);
                });
                content.addEventListener('mouseup',function(event){
                    viewState.handleMouseUp(event.clientX,event.clientY);
                });
                content.addEventListener('mouseleave',function(event){
                    viewState.handleMouseUp(event.clientX,event.clientY);
                });
                content.addEventListener('mousemove',function(event){
                    viewState.handleMouseMove(event.clientX,event.clientY);
                });
            }
            game.qhly_getSkinList(name,function(ret,list){
                var pkg = game.qhly_foundPackage(name);
                if(!list)list = [];
                list.sort(function(a,b){
                    var orderA = game.qhly_getOrder(name,a,pkg);
                    var orderB = game.qhly_getOrder(name,b,pkg);
                    if(orderA > orderB)return 1;
                    if(orderA == orderB)return 0;
                    return -1;
                });
                var skinList = [null];
                if(list && list.length){
                    skinList.addArray(list);
                }
                viewState.skins = skinList;
                viewState.skinTotalWidth = (viewState.skinPerWidth + viewState.skinGap) * skinList.length - viewState.skinGap;
                for(var i=0;i<skinList.length;i++){
                    var skin = skinList[i];
                    var skinView = ui.create.div('.qh-skinchange-skin',content);
                    viewState.skinViews.push(skinView);
                    skinView.style.left = Math.round((viewState.skinPerWidth + viewState.skinGap)*i)+"px";
                    skinView.style.width = Math.round(viewState.skinPerWidth)+"px";
                    skinView.classList.add('qh-not-replace');
                    skinView.belowText = ui.create.div('.qh-skinchange-skin-text',skinView);
                    if(i != skinList.length-1){
                        var border = ui.create.div('.qh-skinchange-border',content);
                        border.style.width = Math.round(viewState.skinGap)+"px";
                        border.style.left = Math.round((viewState.skinPerWidth + viewState.skinGap)*i+viewState.skinPerWidth)+"px";
                    }
                    if(skin){
                        var info = game.qhly_getSkinInfo(name,skin);
                        if(info){
                            skinView.belowText.innerHTML = info.translation;
                        }
                    }else{
                        skinView.belowText.innerHTML = "初始皮肤";
                    }
                    if(game.qhly_skinIs(name,skin)){
                        skinView.style.filter = "saturate(100%)";
                        skinView.belowText.style.textShadow = '.2rem 0rem .5rem red,-.2rem 0rem .5rem red,0rem .2rem .5rem red,0rem -.2rem .5rem red';
                    }else{
                        skinView.style.filter = "saturate(40%)";
                        skinView.belowText.style.textShadow = '.2rem 0rem .5rem blue,-.2rem 0rem .5rem blue,0rem .2rem .5rem blue,0rem -.2rem .5rem blue';
                    }
                    (function(name,skin,view){
                        view.listen(function(){
                            if(viewState.cancelClick)return;
                            if(game.qhly_skinIs(name,skin))return;
                            game.qhly_playQhlyAudio('qhly_voc_fanshu',null,true);
                            game.qhly_setCurrentSkin(name,skin,function(){
                                viewState.refreshSkins();
                                if(lib.config.qhly_smallwinclosewhenchange){
                                    exitListener();
                                }
                            });
                        });
                    })(name,skin,skinView);
                    if(skin){
                        var file = game.qhly_getSkinFile(name,skin);
                        skinView.qhly_origin_setBackgroundImage(file);
                    }else{
                        skinView.qhly_origin_setBackground(name,'character');
                    }
                }
                viewState.refresh();
            },false);
            backgroundBack.listen(function(event){
                exitListener();
            });
            exit.listen(exitListener);
            enlarge.listen(function(){
                exitListener();
                game.qhly_open_new(name,lib.config.qhly_doubledefaultpage?lib.config.qhly_doubledefaultpage:'skill',ingame);
            });
        }catch(e){
            if(QHLY_DEBUGMODE){
                throw e;
            }
        }
    };
    //打开选择皮肤界面。
    game.qhly_open_new=function(name,page,ingame){
        try{
        //if(name.indexOf('gz_') == 0){
        //    name = name.slice(3);
        //}
        var cplayer = null;
        if(ingame){
            if(get.itemtype(ingame) == 'player'){
                cplayer = ingame;
            }else if( ingame.parentNode && get.itemtype(ingame.parentNode) == 'player'){
                cplayer = ingame.parentNode;
            }
        }
        if(_status.qhly_open)return;
        _status.qhly_open = true;
        _status.qhly_skillAudioWhich = {};
        var currentViewSkin = lib.qhly_viewskin[lib.config.qhly_currentViewSkin];
        var gback = ui.create.div('.qh-background');
        var background = ui.create.div('.qh-window',gback);
        var setSize = function(){
            var screenWidth = ui.window.offsetWidth;
            var screenHeight = ui.window.offsetHeight;
            var whr = currentViewSkin.whr ? currentViewSkin.whr : 1.7198;
            var width;
            var height;
            if(screenWidth / whr > screenHeight){
                height = screenHeight;
                width = height * whr;
            }else{
                width = screenWidth;
                height = screenWidth/whr;
            }
            if(height < screenHeight && lib.config.qhly_layoutFitY){
                height = screenHeight;
            }
            if(width < screenWidth && lib.config.qhly_layoutFitX){
                width = screenWidth;
            }
            background.style.height = Math.round(height)+"px";
            background.style.width = Math.round(width)+"px";
        };
        setSize();
        var backButton = ui.create.div('.qh-back',background);
        var resize = function(){
            setTimeout(setSize,500);
        };
        lib.onresize.push(resize);
        backButton.listen(function(){
            game.qhly_playQhlyAudio('qhly_voc_press',null,true);
            gback.delete(500,function(){
                lib.onresize.remove(resize);
                game.resume2();
                _status.qhly_open = false;
            });
            delete _status.qhly_skillAudioWhich;
        });
        gback.hide();
        document.body.appendChild(gback);
        game.qhly_initNewView(name,background,page,cplayer);
        gback.show();
        game.pause2();
        }catch(e){
            if(QHLY_DEBUGMODE){
                throw e;
            }
        }
    };
    get.qhly_getMp=function(name,pkg){
        if(!pkg){
            pkg = game.qhly_foundPackage(name);
        }
        if(pkg && pkg.characterMp){
            var ret = pkg.characterMp(name);
            return ret;
        }
        return null;
    };
    get.qhly_getIntroduce=function(name,pkg){
        if(!pkg){
            pkg = game.qhly_foundPackage(name);
        }
        if(pkg && pkg.characterInfo){
            var intro = pkg.characterInfo(name);
            if(intro){
                return intro;
            }
        }
        return get.characterIntro(name);
    };
    ui.qhly_addListenFunc=function(view){
        view.listen=function(func){
            if(lib.config.touchscreen){
                this.addEventListener('touchend',function(e){
                    if(!_status.dragged){
                        func.call(this,e);
                    }
                });
                var fallback=function(e){
                    if(!_status.touchconfirmed){
                        func.call(this,e);
                    }
                    else{
                        this.removeEventListener('click',fallback);
                    }
                }
                this.addEventListener('click',fallback);
            }
            else{
                this.addEventListener('click',func);
            }
            return this;
        };
    };
    ui.qhly_initCheckBox=function(view,checked){
        view.style.width = '30px';
        view.style.height = '30px';
        view.style.display = 'inline';
        view.qhly_checked = checked;
        ui.qhly_addListenFunc(view);
        if(view.qhly_checked){
            view.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxCheckedImage,'extension/千幻聆音/newui_checkbox_checked.png');
        }else{
            view.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxImage,'extension/千幻聆音/newui_checkbox_unchecked.png');
        }
        view.qhly_setChecked=function(checked,trigger){
            if(trigger === undefined)trigger = true;
            if(checked != this.qhly_checked){
                this.qhly_checked = checked;
                if(this.qhly_checked){
                    this.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxCheckedImage,'extension/千幻聆音/newui_checkbox_checked.png');
                }else{
                    this.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxImage,'extension/千幻聆音/newui_checkbox_unchecked.png');
                }
                if(trigger && this.qhly_onchecked){
                    this.qhly_onchecked(this.qhly_checked);
                }
            }
        };
        view.listen(function(){
            game.qhly_playQhlyAudio('qhly_voc_check',null,true);
            this.qhly_checked = !this.qhly_checked;
            if(this.qhly_checked){
                this.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxCheckedImage,'extension/千幻聆音/newui_checkbox_checked.png');
            }else{
                this.src = lib.assetURL+get.qhly_getIf(lib.qhly_viewskin[lib.config.qhly_currentViewSkin].checkBoxImage,'extension/千幻聆音/newui_checkbox_unchecked.png');
            }
            if(this.qhly_onchecked){
                this.qhly_onchecked(this.qhly_checked);
            }
        });
    };
    game.qhly_getCharacterTaici=function(name,skin,pkg){
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanAudio(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        if(!pkg)pkg = game.qhly_foundPackage(pkg);
        if(!skin){
            var dinfo = lib.qhly_dirskininfo[name];
            if(dinfo && dinfo.origin && dinfo.origin.skill){
                taici = dinfo.origin.skill;   
            }else if(pkg.characterTaici){
                taici = pkg.characterTaici(name);
            }else{
                taici = undefined;
            }
            return taici;
        }else{
            var skinInfo = game.qhly_getSkinInfo(name,skin,pkg);
            if(skinInfo){
                return skinInfo.skill;
            }
            return undefined;
        }
    };
    get.qhly_getAudioInfoInSkin=function(name,pkg,skin){
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanAudio(name)){
                var subname = name.slice(3);
                if(get.character(subname)){
                    name = subname;
                }
            }
        }
        if(!pkg)pkg = game.qhly_foundPackage(name);
        var list = [];
        var skills = get.character(name,3);
        if(!skills)return list;
        for(var skill of skills){
            if(!lib.translate[skill+"_info"])continue;
            list.add(skill);
            var info = get.info(skill);
            if(info.derivation){
                var derivation = [];
                if(typeof info.derivation == 'string'){
                    derivation.add(info.derivation);
                }else{
                    for(var de of info.derivation){
                        derivation.add(de);
                    }
                }
                for(var der of derivation){
                    var info = get.info(der);
                    if(info && !info.equipSkill && !info.xwMijiSkill){
                        list.add(der);
                    }
                }
            }
        }
        var ret = [];
        if(!skin){
            var taici;
            var dinfo = lib.qhly_dirskininfo[name];
            if(dinfo && dinfo.origin && dinfo.origin.skill){
                taici = dinfo.origin.skill;   
            }else if(pkg.characterTaici){
                taici = pkg.characterTaici(name);
            }else{
                taici = undefined;
            }
            for(var skill of list){
                if(!lib.translate[skill+"_info"])continue;
                var obj = {
                    id:skill,
                    name:get.translation(skill),
                };
                if(taici){
                    var skillTaici = taici[skill];
                    if(skillTaici){
                        if(skillTaici.hide)continue;
                        if(skillTaici.order)obj.order = skillTaici.order;
                        if(skillTaici.name){
                            obj.name = skillTaici.name;
                        }
                        obj.content = skillTaici.content;
                    }
                }
                ret.add(obj);
            }
            ret.sort(function(a,b){
                var orderA = a.order ? a.order:Infinity;
                var orderB = b.order ? b.order:Infinity;
                return orderA - orderB;
            });
            if(taici && taici.die){
                ret.push({
                    id:'die',
                    name:taici.die.name?taici.die.name:'阵亡',
                    content:taici.die.content,
                });
            }else{
                ret.push({
                    id:'die',
                    name:'阵亡',
                });
            }
        }else{
            var taici;
            var skinInfo = game.qhly_getSkinInfo(name,skin,pkg);
            for(var skill of list){
                if(!lib.translate[skill+"_info"])continue;
                var obj = {
                    id:skill,
                    name:get.translation(skill),
                };
                if(skinInfo.skill){
                    var skillTaici = skinInfo.skill[skill];
                    if(skillTaici){
                        if(skillTaici.hide)continue;
                        if(skillTaici.order)obj.order = skillTaici.order;
                        if(skillTaici.name){
                            obj.name = skillTaici.name;
                        }
                        obj.content = skillTaici.content;
                    }
                }
                ret.add(obj);
            }
            ret.sort(function(a,b){
                var orderA = a.order ? a.order:Infinity;
                var orderB = b.order ? b.order:Infinity;
                return orderA - orderB;
            });
            var die = {
                id:'die',
                name:'阵亡',
            };
            if(skinInfo && skinInfo.skill && skinInfo.skill.die){
                die.content = skinInfo.skill.die.content;
                if(skinInfo.skill.die.name){
                    die.name = skinInfo.skill.die.name;
                }
            }
            ret.push(die);
        }
        return ret;
    };
    game.qhly_getIntroduceExtraPage=function(name,pkg){
        var ret = [];
        if(!pkg)pkg=game.qhly_foundPackage(name);
        if(pkg.characterIntroduceExtra){
            var extra = pkg.characterIntroduceExtra(name);
            if(extra){
                ret.addArray(extra);
            }
        }
        if(lib.config.qhly_recordWin){
            ret.push({
                name:'战绩',
                qh_func:'qhly_getCharacterZhanjiPage',
            });
        }
        if(ret.length){
            return ret;
        }
    };
    game.qhly_getCharacterZhanjiPage=function(name){
        var str = "";
        var record = lib.config.qhly_winrecord;
        if(record && record[name]){
            var modekeys = Object.keys(record[name]);
            var modeSort ={
                'identity':1,
                'guozhan':2,
                'doudizhu':3,
            };
            modekeys.sort(function(a,b){
                if(a==b)return 0;
                if(modeSort[a] && modeSort[b]){
                    return modeSort[a] - modeSort[b];
                }
                if(modeSort[a]){
                    return -1;
                }
                if(modeSort[b]){
                    return 1;
                }
                return a<b ? -1:1;
            });
            for(var mode of modekeys){
                str += "<h1>"+get.translation(mode)+"模式：</h1>";
                var identitySort = {
                    '主公':1,
                    '盟主':2,
                    '忠臣':3,
                    '侠士':4,
                    '护卫':5,
                    '反贼':6,
                    '乱寇':7,
                    '刺客':8,
                    '逆贼':9,
                    '内奸':10,
                    '细作':11,
                    '僭主':12,
                    '地主':13,
                    '农民':14,
                };
                var identKeys = Object.keys(record[name][mode]);
                identKeys.sort(function(a,b){
                    if(a==b)return 0;
                    if(identitySort[a] && identitySort[b]){
                        return identitySort[a] - identitySort[b];
                    }
                    if(identitySort[a]){
                        return -1;
                    }
                    if(identitySort[b]){
                        return 1;
                    }
                    return a<b ? -1:1;
                });
                for(var identity of identKeys){
                    var ri = record[name][mode][identity];
                    var win = ri.win ? ri.win:0;
                    var lose = ri.lose? ri.lose:0;
                    str += "<h2>"+identity + "：</h2>";
                    str += "<p>胜利："+win;
                    str += "&nbsp;&nbsp;失败："+lose;
                    str += "&nbsp;&nbsp;总场："+(win+lose);
                    str += "&nbsp;&nbsp;胜率："+(((win+lose)<=0)?0:((win*100/(win+lose)).toFixed(2)))+"%";
                    str += "</p>";
                    str += "<br>";
                }
            }
        }else{
            return "该武将还未进行过对局。";
        }
        return str;
    };
    get.qhly_getOriginSkinInfo=function(name,pkg){
        if(!pkg)pkg=game.qhly_foundPackage(name);
        if(pkg.originSkinInfo){
            return pkg.originSkinInfo(name);
        }
        return "";
    };
    game.qhly_createBelowMenu=function(items,parent){
        var menu = ui.create.div('.qh-below-menu',parent);
        var content = "";
        if(!_status.qhly_belowMenuId){
            _status.qhly_belowMenuId=1;
        }else{
            _status.qhly_belowMenuId++;
        }
        var id = _status.qhly_belowMenuId;
        content += "<table style='width:100%;height:auto;' border='0' frame='void' rules='none'>";
        var bid_i = 0;
        for(var item of items){
            content += "<tr>";
            content += "<td class='qh-below-menu-item' id='qhly_below_menu_"+id+"_"+bid_i+"'>"+item.name+"</td>";
            content += "</tr>";
            bid_i++;
        }
        content += "</table>";
        menu.innerHTML = content;
        lib.setScroll(menu);
        for(var i=0;i<bid_i;i++){
            var td = document.getElementById('qhly_below_menu_'+id+"_"+i);
            if(td){
                ui.qhly_addListenFunc(td);
                (function(i,td){
                    td.listen(function(e){
                        var item = items[i];
                        if(item.onchange){
                            item.onchange();
                        }
                        e.stopPropagation();
                    });
                })(i,td);
            }
        }
        return menu;
    };
    game.qhly_initNewView=function(name,view,page,cplayer){
        var currentViewSkin = lib.qhly_viewskin[lib.config.qhly_currentViewSkin];
        var subView ={};
        if(!page){
            page = 'introduce';
        }
        var refreshRank = function(){};
        subView.avatar = ui.create.div('.qh-avatar',view);
        subView.pageButton = {
            introduce:ui.create.div('.qh-button1',view),
            skill:ui.create.div('.qh-button2',view),
            skin:ui.create.div('.qh-button3',view),
            config:ui.create.div('.qh-button4',view),
        };
        subView.menuCover = ui.create.div();
        subView.menuCover.style.width="100%";
        subView.menuCover.style.height="100%";
        subView.menuCover.style.zIndex=38;
        if(currentViewSkin.isQiLayout){
            subView.avatarImage = ui.create.div('.qh-image-standard',subView.avatar);
            subView.rank = ui.create.div('.qh-avatar-rank',subView.avatar);
            subView.avatarImage.classList.add('qh-must-replace');
            subView.avatarImage.classList.add('avatar');
            subView.avatarLabel = ui.create.div('.qh-avatar-label',view);
            subView.group = ui.create.div('.qh-avatar-label-group',subView.avatarLabel);
            if(lib.config.qhly_shilizihao){
                subView.group.style.fontSize = lib.config.qhly_shilizihao + "px";
            }
            subView.doublegroup = ui.create.div('.qh-avatar-label-group-double',subView.avatarLabel);
            subView.doublegroupA = ui.create.div('.qh-avatar-label-group-double-a',subView.doublegroup);
            subView.doublegroupB = ui.create.div('.qh-avatar-label-group-double-b',subView.doublegroup);
            if(lib.config.qhly_shilizihao){
                subView.doublegroupA.style.fontSize = parseInt(lib.config.qhly_shilizihao)*0.4 + "px";
                subView.doublegroupB.style.fontSize = parseInt(lib.config.qhly_shilizihao)*0.4 + "px";
            }
            subView.doublegroup.hide();
            subView.name = ui.create.div('.qh-avatar-label-name',subView.avatarLabel);
            subView.characterTitle = ui.create.div('.qh-avatar-label-title',subView.avatarLabel);
            subView.hp = ui.create.div('.qh-hp',view);
            subView.mp = ui.create.div('.qh-mp');
            subView.mp.hide();
            subView.pageButton.introduce.innerHTML = "简介";
            subView.pageButton.introduce.downButton = ui.create.div('.qh-otherinfoarrow',subView.pageButton.introduce);
            subView.pageButton.skill.innerHTML = "技能";
            subView.pageButton.skin.innerHTML = "皮肤";
            subView.pageButton.config.innerHTML = "选项";
            subView.cover = ui.create.div('.qh-window-cover',view);
            if(lib.config.qhly_hideShuimoCover){
                subView.cover.setBackgroundImage('extension/千幻聆音/newui_shuimo_bg3.png');
            }else{
                subView.cover.setBackgroundImage('extension/千幻聆音/newui_shuimo_bg2.png');
            }
            subView.board = ui.create.div('.qh-window-backboard',view);
            var lineHeight = (lib.config.qhly_hanggaoxiufu2?lib.config.qhly_hanggaoxiufu2:'250')+'%';
            subView.pageButton.introduce.style.lineHeight = lineHeight;
            subView.pageButton.skill.style.lineHeight = lineHeight;
            subView.pageButton.skin.style.lineHeight = lineHeight;
            subView.pageButton.config.style.lineHeight = lineHeight;
        }else if(currentViewSkin.isLolBigLayout){
            subView.avatarImage = ui.create.div('.qh-image-standard',subView.avatar);
            subView.rank = ui.create.div('.qh-avatar-rank',subView.avatar);
            subView.avatarImage.classList.add('qh-must-replace');
            subView.avatarImage.classList.add('avatar');
            subView.avatarLabel = ui.create.div('.qh-avatar-label',view);
            subView.group = ui.create.div('.qh-avatar-label-group',subView.avatarLabel);
            if(lib.config.qhly_lolshilizihao){
                subView.group.style.fontSize = lib.config.qhly_lolshilizihao + "px";
            }
            subView.doublegroup = ui.create.div('.qh-avatar-label-group-double',subView.avatarLabel);
            subView.doublegroupA = ui.create.div('.qh-avatar-label-group-double-a',subView.doublegroup);
            subView.doublegroupB = ui.create.div('.qh-avatar-label-group-double-b',subView.doublegroup);
            if(lib.config.qhly_lolshilizihao){
                subView.doublegroupA.style.fontSize = parseInt(lib.config.qhly_lolshilizihao)*0.4 + "px";
                subView.doublegroupB.style.fontSize = parseInt(lib.config.qhly_lolshilizihao)*0.4 + "px";
            }
            subView.doublegroup.hide();
            subView.name = ui.create.div('.qh-avatar-label-name',subView.avatarLabel);
            subView.characterTitle = ui.create.div('.qh-avatar-label-title',subView.avatarLabel);
            subView.hp = ui.create.div('.qh-hp',view);
            subView.mp = ui.create.div('.qh-mp');
            subView.mp.hide();
            subView.pageButton.introduce.innerHTML = "简介";
            subView.pageButton.introduce.downButton = ui.create.div('.qh-otherinfoarrow',subView.pageButton.introduce);
            subView.pageButton.skill.innerHTML = "技能";
            subView.pageButton.skin.innerHTML = "皮肤";
            subView.pageButton.config.innerHTML = "选项";
            subView.cover = ui.create.div('.qh-window-cover',view);
            subView.board = ui.create.div('.qh-window-backboard',view);
        }
        else{
            subView.avatarImage = ui.create.div('.qh-image-standard',subView.avatar);
            subView.avatarImage.classList.add('qh-must-replace');
            subView.avatarImage.classList.add('avatar');
            subView.avatarLabel = ui.create.div('.qh-avatar-label',subView.avatar);
            subView.group = ui.create.div('.qh-avatar-label-group',subView.avatarLabel);
            subView.rank = ui.create.div('.qh-avatar-label-rank',subView.avatarLabel);
            subView.name = ui.create.div('.qh-avatar-label-name',subView.avatarLabel);
            subView.hp = ui.create.div('.qh-hp',view);
            subView.hpText = ui.create.div('.qh-hptext',subView.hp);
            subView.mp = ui.create.div('.qh-mp');
            subView.mpText = ui.create.div('.qh-mptext',subView.mp);
            subView.mp.hide();
            subView.dragontail = ui.create.div('.qh-avatar-dragontail',subView.avatar);
            subView.dragontail.hide();
            subView.dragonhead = ui.create.div('.qh-avatar-dragonhead',subView.avatar);
            subView.dragonhead.hide();
            subView.pageButton.introduce.innerHTML = "简 介";
            subView.pageButton.introduce.downButton = ui.create.div('.qh-otherinfoarrow',subView.pageButton.introduce);
            subView.pageButton.skill.innerHTML = "技 能";
            subView.pageButton.skin.innerHTML = "皮 肤";
            subView.pageButton.config.innerHTML = "选 项";
        }
        subView.page = {
            introduce:{
                pageView:ui.create.div('.qh-page-introduce',view),
                refresh:function(name,state){
                    if(!this.inited)this.init(name,state);
                    if(!state.introduceExtraPage || state.introduceExtraPage == '简介'){
                        var intro = get.qhly_getIntroduce(name,state.pkg);
                        this.text.innerHTML ="<br>"+ intro +"<br><br><br><br><br><br><br>";
                        if(currentViewSkin.buttonTextSpace === false){
                            subView.pageButton.introduce.innerHTML = "简介";
                        }else{
                            subView.pageButton.introduce.innerHTML = "简 介";
                        }
                        subView.pageButton.introduce.appendChild(subView.pageButton.introduce.downButton);
                    }else{
                        var ret = '';
                        var handleView = null;
                        if(state.introduceExtraFunc){
                            var func = null;
                            if(typeof state.introduceExtraFunc == 'function'){
                                func = state.introduceExtraFunc;
                            }else{
                                func = state.pkg[state.introduceExtraFunc];
                            }
                            if(typeof func == 'function'){
                                var fc = func(name);
                                if(fc){
                                    if(typeof fc == 'string'){
                                        ret = "<br>"+fc+"<br><br><br><br><br><br><br>";
                                    }else{
                                        if(fc.content){
                                            ret = "<br>"+fc.content+"<br><br><br><br><br><br><br>";
                                        }
                                        if(fc.handleView && typeof fc.handleView == 'function'){
                                            handleView = fc.handleView;
                                        }
                                    }
                                }
                            }
                        }
                        this.text.innerHTML = ret;
                        if(handleView){
                            handleView(this.text);
                        }
                        var btname = state.introduceExtraPage;
                        if(currentViewSkin.buttonTextSpace!==false && btname.length == 2){
                            btname = btname.charAt(0)+' '+btname.charAt(1);
                        }
                        subView.pageButton.introduce.innerHTML = btname;
                        subView.pageButton.introduce.appendChild(subView.pageButton.introduce.downButton);
                    }
                },
                init:function(name,state){
                    this.text = ui.create.div('.qh-page-introduce-text',this.pageView);
                    if(lib.config.qhly_vMiddle === false && (currentViewSkin.isQiLayout||currentViewSkin.isLolBigLayout)){
                        this.text.style.height = "100%";
                        this.text.style.maxHeight = "none";
                    }
                    lib.setScroll(this.text);
                    fixTextSize(this.text);
                    game.qhly_changeViewPageSkin('introduce',this.pageView);
                    this.inited = true;
                }
            },
            skill:{
                pageView:ui.create.div('.qh-page-skill',view),
                refresh:function(name,state){
                    if(!this.inited)this.init(name,state);
                },
                init:function(name,state){
                    this.text = ui.create.div('.qh-page-skill-text',this.pageView);
                    lib.setScroll(this.text);
                    if(lib.config.qhly_vMiddle===false  && (currentViewSkin.isQiLayout||currentViewSkin.isLolBigLayout)){
                        this.text.style.maxHeight = 'none';
                        this.text.style.height = '100%';
                    }
                    fixTextSize(this.text);
                    var skills = get.character(name,3);
                    var viewSkill = [];
                    var derivation = [];
                    for(var skill of skills){
                        var info = get.info(skill);
                        if(!info || info.nopop || !get.translation(skill+'_info')){
                            continue;
                        }
                        viewSkill.add(skill);
                        if(info.derivation){
                            if(typeof info.derivation === 'string'){
                                viewSkill.add(info.derivation);
                                derivation.add(info.derivation);
                            }else{
                                for(var s of info.derivation){
                                    viewSkill.add(s);
                                    derivation.add(s);
                                }
                            }
                        }
                    }
                    var content = "<br>";
                    var pkg = state.pkg;
                    if(pkg && pkg.characterTaici){
                        var taici = pkg.characterTaici(name);
                        if(taici){
                            for(var key in taici){
                                var m = taici[key];
                                if(!m || m.hide)continue;
                                if(key != 'die'){
                                    viewSkill.add(key);
                                }
                            }
                            viewSkill.sort(function(a,b){
                                var orderA = (taici[a] && taici[a].order) ? taici[a].order:Infinity;
                                var orderB = (taici[b] && taici[b].order) ? taici[b].order:Infinity;
                                return orderA - orderB;
                            });
                        }
                    }
                    var tempSkill = [];
                    if(cplayer && lib.config.qhly_skillingame){
                        var skills = cplayer.getSkills(false,false);
                        for(var tskill of skills){
                            if(viewSkill.contains(tskill))continue;
                            var info = get.info(tskill);
                            if(!info)continue;
                            if(!lib.translate[tskill])continue;
                            if(info.popup === false)continue;
                            if(info.nopop === true)continue;
                            viewSkill.add(tskill);
                            tempSkill.add(tskill);
                        }
                    }
                    if(currentViewSkin.isQiLayout){
                        content += "<table border='2' frame='void' rules='none'>";
                        for(var skill of viewSkill){
                            if(!lib.translate[skill+"_info"])continue;
                            var detail = get.translation(skill+"_info");
                            if(detail){
                                var cskill = get.translation(skill);
                                content += "<tr>";
                                content += "<td style='text-align:center;";
                                if(cplayer && lib.config.qhly_skillingame){
                                    if(!cplayer.hasSkill(skill)){
                                        content += 'opacity:0.5;'
                                    }
                                }
                                content += "vertical-align:top;width:100px;height:100px;background-repeat:no-repeat;background-position:top left;background-size:100px 100px;background-image:url("+lib.assetURL+"extension/千幻聆音/newui_shuimo_skillname.png);";
                                content += "color:";
                                if(derivation.contains(skill)){
                                    content += get.qhly_getIf(currentViewSkin.skillPageDerivationSkillColor,"#0000ff")+";";
                                }else if(tempSkill.contains(skill)){
                                    content += get.qhly_getIf(currentViewSkin.skillPageTempSkillColor,"#00FF00")+";";
                                }else{
                                    content += get.qhly_getIf(currentViewSkin.skillPageSkillNameColor,"#5B0F00")+";";
                                }
                                if(cskill.length <= 2){
                                    content += 'font-size:30px;';
                                    content += 'line-height:'+(lib.config.qhly_hanggaoxiufu?lib.config.qhly_hanggaoxiufu:'250')+'%;';
                                }else if(cskill.length <= 3){
                                    content += 'font-size:26px;';
                                    content += 'line-height:320%;'
                                }else if(cskill.length <= 4){
                                    content += 'font-size:22px;';
                                    content += 'line-height:370%;'
                                }else{
                                    content += 'font-size:18px;';
                                    content += 'line-height:450%;'
                                }
                                content += 'font-family:qh_songhei;';
                                content += "'>";
                                content += cskill;
                                content += "</td>";
                                content += "<td style='vertical-align:top;";
                                if(cplayer && lib.config.qhly_skillingame){
                                    if(!cplayer.hasSkill(skill)){
                                        content += 'opacity:0.5;'
                                    }
                                }
                                content += "'>";
                                content += "<img style='width:135px;height:51px;' id='qhly_skillv_"+skill+"'/><br><span ";
                                var dynamicTranslate = null;
                                if(cplayer && lib.config.qhly_skillingame){
                                    var dtrans = lib.dynamicTranslate[skill];
                                    if(dtrans){
                                        dtrans = dtrans(cplayer,skill);
                                    }
                                    if(dtrans && lib.qhly_filterPlainText(dtrans)!=lib.qhly_filterPlainText(detail)){
                                        dynamicTranslate = dtrans;
                                        content += "style='opacity:0.5;text-decoration:line-through;'"
                                    }else{
                                        if(dtrans && dtrans.length){
                                            detail = dtrans;
                                        }
                                    }
                                }
                                content += '>';
                                content += lib.qhly_keyMark(detail);
                                content += "</span>";
                                if(dynamicTranslate){
                                    content += "<br><br><span style='color:orange;'>";
                                    content += dynamicTranslate;
                                    content += "</span>";
                                }
                                content += "<br>";
                                var info = get.info(skill);
                                if(info && (info.frequent||info.subfrequent)){
                                    content += "<br>&nbsp;&nbsp;<img style='vertical-align:middle;' id='qhly_autoskill_"+skill+"'/><b id='qhly_autoskill_text_"+skill+"'>自动发动</b>"
                                }
                                content += "<br>"
                                content += "</td>";
                                content += "</tr>";
                            }
                        }
                        content += "</table>";
                    }else{
                        for(var skill of viewSkill){
                            if(!lib.translate[skill+"_info"])continue;
                            var detail = get.translation(skill+"_info");
                            if(detail){
                                var skilltitle = get.translation(skill);
                                if(!currentViewSkin.isLolBigLayout){
                                    skilltitle = "【"+skilltitle+"】";
                                }else{
                                    var str = "<span style='";
                                    str += 'display:flex;justify-content:center;align-items: center;';
                                    str += "background-image:url(";
                                    str += lib.assetURL+"extension/千幻聆音/newui_lol_skill_button.png";
                                    str += ");";
                                    str += 'font-size:15px;';
                                    str += 'width:94px;height:24px;text-align:center;'
                                    str += 'background-size:100% 100%;';
                                    str += "background-repeat:no-repeat;";
                                    str += "background-position:center;";
                                    str += "' id='qhly_skillv_"+skill+"'";
                                    str += ">";
                                    str += skilltitle;
                                    str += "</span>";
                                    skilltitle = str;
                                }
                                content += "<h3";
                                if(derivation.contains(skill)){
                                    content += " style='color:"+get.qhly_getIf(currentViewSkin.skillPageDerivationSkillColor,"#0000ff")+";";
                                }else if(tempSkill.contains(skill)){
                                    content += " style='color:"+get.qhly_getIf(currentViewSkin.skillPageDerivationSkillColor,"#00ff00")+";";
                                }else{
                                    content += " style='color:"+get.qhly_getIf(currentViewSkin.skillPageSkillNameColor,"#5B0F00")+";";
                                }
                                if(cplayer && lib.config.qhly_skillingame){
                                    if(!cplayer.hasSkill(skill)){
                                        content += "opacity:0.5;"
                                    }
                                }
                                content += "'>";
                                content += skilltitle;
                                if(!currentViewSkin.isLolBigLayout){
                                    content += "<img style='vertical-align:middle;width:35px;' id='qhly_skillv_"+skill+"'/>";
                                }
                                content += "</h3>";
                                content += "<p";
                                content += ">";
                                content += "<span style='";
                                var dynamicTranslate = null;
                                if(cplayer && lib.config.qhly_skillingame){
                                    var dtrans = lib.dynamicTranslate[skill];
                                    if(dtrans){
                                        dtrans = dtrans(cplayer,skill);
                                    }
                                    if(dtrans && lib.qhly_filterPlainText(dtrans)!=lib.qhly_filterPlainText(detail)){
                                        dynamicTranslate = dtrans;
                                        content += "opacity:0.5;text-decoration:line-through;"
                                    }else{
                                        if(dtrans && dtrans.length){
                                            detail = dtrans;
                                        }
                                    }
                                    if(!cplayer.hasSkill(skill)){
                                        content += "opacity:0.5;"
                                    }
                                }
                                content += "'>";
                                content += lib.qhly_keyMark(detail);
                                content += "</span>";
                                if(dynamicTranslate){
                                    content += "<br><br><span style='color:orange;'>";
                                    content += dynamicTranslate;
                                    content += "</span>";
                                }
                                var info = get.info(skill);
                                if(info && (info.frequent||info.subfrequent)){
                                    content += "<br>&nbsp;&nbsp;<img style='vertical-align:middle;' id='qhly_autoskill_"+skill+"'/><b id='qhly_autoskill_text_"+skill+"'>自动发动</b>"
                                }
                                content += "</p>";
                            }
                        }
                    }
                    content+="<br><br><br><br><br><br>";
                    this.text.innerHTML = content;

                    var bindFunc=function(checkbox,text){
                        if(!text)return;
                        ui.qhly_addListenFunc(text);
                        text.listen(function(){
                            game.qhly_playQhlyAudio('qhly_voc_check',null,true);
                            checkbox.qhly_setChecked(!checkbox.qhly_checked,true);
                        });
                    };
                    for(var skill of viewSkill){
                        var detail = get.translation(skill+"_info");
                        if(detail){
                            (function(skill){
                                var img = document.getElementById('qhly_skillv_'+skill);
                                if(img){
                                    img.src = lib.assetURL+get.qhly_getCurrentViewSkinValue('skillPagePlayAudioButtonImage','extension/千幻聆音/newui_playaudio.png');
                                    ui.qhly_addListenFunc(img);
                                    img.listen(function(){
                                        var count = _status.qhly_skillAudioWhich[skill];
                                        if(!count){
                                            _status.qhly_skillAudioWhich[skill] = 0;
                                            count = 0;
                                        }
                                        _status.qhly_skillAudioWhich[skill]++;
                                        window.qhly_TrySkillAudio(skill,{name:name},null,count);
                                        var skillSkin = game.qhly_getSkillSkin(name,game.qhly_getSkin(name),skill);
                                        if(skillSkin){
                                            if(skillSkin === 1){
                                                subView.avatarImage.setBackground(name,'character');
                                            }else if(Array.isArray(skillSkin)){
                                                subView.avatarImage.setBackgroundImage(skillSkin[count % skillSkin.length]);
                                            }else{
                                                subView.avatarImage.setBackgroundImage(skillSkin);
                                            }
                                        }
                                    });
                                }
                                var check = document.getElementById('qhly_autoskill_'+skill);
                                if(check){
                                    var list = [];
                                    var info = get.info(skill);
                                    if(info.frequent){
                                        list.add(skill);
                                    }
                                    if(info.subfrequent){
                                        for(var sub of info.subfrequent){
                                            list.add(skill+"_"+sub);
                                        }
                                    }
                                    ui.qhly_initCheckBox(check,list.filter(function(sk){
                                        return !lib.config.autoskilllist || !lib.config.autoskilllist.contains(sk);
                                    }).length != 0);
                                    bindFunc(check,document.getElementById('qhly_autoskill_text_'+skill));
                                    check.qhly_onchecked = function(checked){
                                        var list = [];
                                        var info = get.info(skill);
                                        if(info.frequent){
                                            list.add(skill);
                                        }
                                        if(info.subfrequent){
                                            for(var sub of info.subfrequent){
                                                list.add(skill+"_"+sub);
                                            }
                                        }
                                        if(!lib.config.autoskilllist){
                                            lib.config.autoskilllist = [];
                                        }
                                        if(!checked){
                                            for(var s of list){
                                                lib.config.autoskilllist.add(s);
                                            }
                                        }else{
                                            for(var s of list){
                                                lib.config.autoskilllist.remove(s);
                                            }
                                        }
                                        game.saveConfig('autoskilllist',lib.config.autoskilllist);
                                    };
                                }
                            })(skill);
                        }
                    }
                    game.qhly_changeViewPageSkin('skill',this.pageView);
                    this.inited = true;
                }
            },
            skin:{
                pageView:ui.create.div('.qh-page-skin',view),
                skinList:[],
                currentIndex:0,
                skinListGot:false,
                firstRefresh:true,
                hideSkinMode:false,
                getCurrentSkin:function(name){
                    var skinId = game.qhly_getSkin(name);
                    for(var skin of this.skinList){
                        if(skin && skin.skinId == skinId){
                            return skin;
                        }
                        if(!skinId && !skin.skinId){
                            return skin;
                        }
                    }
                    return null;
                },
                getSkinAt:function(num){
                    return this.skinList[num+this.currentIndex];
                },
                onClickSkin:function(num,name,state){
                    var skin = this.getSkinAt(num);
                    if(!skin){
                        return;
                    }
                    if(skin.skinId == game.qhly_getSkin(name)){
                        return;
                    }
                    if(game.qhly_skinLock(name,skin.skinId)){
                        var lock = game.qhly_skinLock(name,skin.skinId);
                        if(lock.tryUnlock){
                            lock.tryUnlock();
                        }
                        if(game.qhly_skinLock(name,skin.skinId)){
                            return;
                        }
                    }
                    game.qhly_playQhlyAudio('qhly_voc_fanshu',null,true);
                    var that = this;
                    game.qhly_setCurrentSkin(name,skin.skinId,function(){
                        _status.qhly_skillAudioWhich = {};
                        if(currentViewSkin.isLolBigLayout){
                            that.currentIndex = that.currentIndex + num - 1;
                        }
                        that.refresh(name,state);
                        if(state.onChangeSkin){
                            state.onChangeSkin();
                        }
                        if((currentViewSkin.lihuiSupport) && state.pkg.characterLihui){
                            var lihuiPath = state.pkg.characterLihui(name,lib.config.qhly_skinset.skin[name]);
                            if(lihuiPath){
                                state.mainView.avatarImage.setBackgroundImage(lihuiPath);
                                state.useLihuiLayout(true);
                            }else{
                                state.mainView.avatarImage.setBackground(name,'character');
                                state.useLihuiLayout(false);
                            }
                        }else{
                            state.mainView.avatarImage.setBackground(name,'character');
                        }
                    });
                },
                canViewSkin:function(skinId){
                    for(var i=0;i<3;i++){
                        var skin = this.getSkinAt(i);
                        if(skin){
                            if(skin.skinId){
                                if(skin.skinId == skinId){
                                    return true;
                                }
                            }else{
                                if(!skinId){
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                refresh:function(name,state,forced){
                    if(!this.inited)this.init(name,state);
                    if(this.skinListGot && !forced){
                        this.refreshAfterGot(name,state);
                    }else{
                        var that = this;
                        game.qhly_getSkinList(name,function(ret,list){
                            that.afterGetSkinList(list,name,state);
                            that.refreshAfterGot(name,state);
                        },true,true);
                    }
                },
                packObject:function(name,state){
                    var packObj = {
                        name:name,
                        origin:{
                            skill:{

                            },
                        },
                        skin:{

                        }
                    };
                    for(var skin of this.skinList){
                        if(!skin.skinId){
                            var taici = game.qhly_getCharacterTaici(name,null,state.pkg);
                            if(taici){
                                packObj.origin.skill = taici;
                            }
                        }else{
                            var skinInfo = game.qhly_getSkinInfo(name,skin.skinId,state.pkg);
                            if(skinInfo){
                                packObj.skin[game.qhly_earse_ext(skin.skinId)] = skinInfo;
                            }
                        }
                    }
                    return packObj;
                },
                editOpen:function(name,skin,skill,state){
                    var obj = this.packObject(name,state);
                    var title = "台词编辑";
                    var detail = "编辑【"+((skill == 'die')?"阵亡":get.translation(skill))+"】的台词：";
                    var initValue = "";
                    if(skin){
                        var skinInfo = obj.skin[game.qhly_earseExt(skin)];
                        if(skinInfo && skinInfo.skill){
                            if(skinInfo.skill[skill] && skinInfo.skill[skill].content){
                                initValue = skinInfo.skill[skill].content;
                            }
                        }
                    }else{
                        var sskill = obj.origin.skill;
                        if(sskill[skill] && sskill[skill].content){
                            initValue = sskill[skill].content;
                        }
                    }
                    var that = this;
                    game.qhly_editDialog(title,detail,initValue,function(value,dialog){
                        if(!value)value = "";
                        while(value.indexOf("/") >= 0){
                            value = value.replace("/","<br>");
                        }
                        if(skin){
                            var m = obj.skin[game.qhly_earseExt(skin)];
                            if(m){
                                if(!m.skill)m.skill={};
                                if(!m.skill[skill]){
                                    m.skill[skill] = {};
                                }
                                m.skill[skill].content = value;
                            }
                        }else{
                            if(!obj.origin.skill[skill]){
                                obj.origin.skill[skill] = {content:''};
                            }
                            obj.origin.skill[skill].content = value;
                        }
                        var strobj = JSON.stringify(obj,null,4);
                        game.qhly_readFileAsText("extension/千幻聆音/skininfomodel.txt",function(ret,str){
                            if(ret){
                                str = str.replace("_REPLACE_OBJECT_",strobj);
                                var path = game.qhly_getSkinImagePath(name,state.pkg);
                                game.qhly_writeTextFile(str,path+name,"skininfo.js",function(err){
                                    if(!err){
                                        alert("保存成功");
                                        lib.qhly_dirskininfo[name] = obj;
                                        that.refresh(name,state,true);
                                        dialog.delete();
                                    }else{
                                        alert("保存失败："+JSON.stringify(err));
                                    }
                                });
                            }else{
                                alert("保存失败：无法读取模板。");
                            }
                        });
                    },function(dialog){
                        return true;
                    });
                },
                refreshAfterGot:function(name,state){
                    var that = this;
                    if(this.firstRefresh){
                        var ret = false;
                        for(var i=(currentViewSkin.isLolBigLayout?-1:0);i<this.skinList.length;i++){
                            var skin = this.skinList[i];
                            this.currentIndex = i;
                            if(this.canViewSkin(game.qhly_getSkin(name))){
                                if(currentViewSkin.isLolBigLayout){
                                    for(var j=0;j<3;j++){
                                        var skinAt = this.getSkinAt(j);
                                        if(skinAt && skinAt.skinId == game.qhly_getSkin(name)){
                                            this.currentIndex = i+j-1;
                                        }
                                    }
                                }
                                ret = true;
                                break;
                            }
                        }
                        if(!ret){
                            this.currentIndex = 0;
                            game.qhly_setCurrentSkin(name,null);
                        }
                        this.firstRefresh = false;
                    }
                    if(!this.hideSkinMode){
                    for(var v of this.skinViews){
                        v.show();
                    }
                    if(currentViewSkin.isLolBigLayout){
                        this.text.style.height = "70%";
                    }
                    else if(currentViewSkin.isQiLayout){
                        this.text.style.height = "63.61%";
                    }else{
                        this.text.style.height = "56.13%";
                    }
                    if(currentViewSkin.isLolBigLayout){
                        if(!this.getSkinAt(0)){
                            this.leftArrow.hide();
                        }else{
                            this.leftArrow.show();
                        }
                    }else if(this.currentIndex <= 0){
                        this.leftArrow.hide();
                    }else{
                        this.leftArrow.show();
                    }
                    if(currentViewSkin.isLolBigLayout){
                        if(!this.getSkinAt(2)){
                            this.rightArrow.hide();
                        }else{
                            this.rightArrow.show();
                        }
                    }else if(this.currentIndex+3 < this.skinList.length){
                        this.rightArrow.show();
                    }else{
                        this.rightArrow.hide();
                    }
                    var currentSkin = game.qhly_getSkin(name);
                    for(var i=0;i<3;i++){
                        var currentSkinView = this['skin'+(i+1)];
                        var levelView = this['skinLevel'+(i+1)];
                        if(this.getSkinAt(i)){
                            if(currentViewSkin.isLolBigLayout){
                                currentSkinView.qhBoard.show();
                            }
                            var skinId = this.getSkinAt(i).skinId;
                            if(game.qhly_skinLock(name,skinId)){
                                currentSkinView.qh_setLock(true);
                                currentSkinView.style.filter = "grayscale(100%)";
                            }else{
                                currentSkinView.qh_setLock(false);
                                currentSkinView.style.filter = "grayscale(0%)";
                            }
                            if(skinId){
                                currentSkinView.setBackgroundImage(game.qhly_getSkinFile(name,this.getSkinAt(i).skinId));
                            }else{
                                currentSkinView.setBackground(name,'character');
                            }
                            currentSkinView.show();
                            if(currentViewSkin.isQiLayout){
                                if(currentSkin == this.getSkinAt(i).skinId){
                                    currentSkinView.qhBoard.setBackgroundImage('extension/千幻聆音/newui_skin_background_shuimo.png');
                                    currentSkinView.qhBoard.style.zIndex = 33;
                                    currentSkinView.qhBoard.style.filter = "saturate(100%)";
                                    currentSkinView.qhTitle.show();
                                    var cskin = this.getSkinAt(i);
                                    var tname = cskin.skinId;
                                    if(!tname){
                                        tname = "初始皮肤";
                                    }else if(cskin.skinInfo.translation){
                                        tname = cskin.skinInfo.translation;
                                    }else{
                                        tname = get.translation(cskin.skinId);
                                    }
                                    currentSkinView.qhTitle.qhText.innerHTML = tname;
                                }else{
                                    currentSkinView.qhBoard.setBackgroundImage('');
                                    currentSkinView.qhBoard.style.zIndex = 34;
                                    currentSkinView.qhBoard.style.filter = "saturate(50%)";
                                    currentSkinView.qhTitle.hide();
                                }
                            }else if(currentViewSkin.isLolBigLayout){

                            }else{
                                if(currentSkin == this.getSkinAt(i).skinId){
                                    currentSkinView.qhCover.classList.add('selected');
                                    currentSkinView.style.zIndex = 33;
                                }else{
                                    currentSkinView.qhCover.classList.remove('selected');
                                    currentSkinView.style.zIndex = 34;
                                }
                            }
                            var level = this.getSkinAt(i).skinInfo.level;
                            var style = this.getSkinAt(i).skinInfo.levelStyle;
                            if(style){
                                if(!levelView.qh_savedStyle){
                                    levelView.qh_savedStyle = {};
                                    for(var m in levelView.style){
                                        levelView.qh_savedStyle[m] = levelView.style[m];
                                    }
                                }
                                for(var s in style){
                                    levelView.style[s] = style[s];
                                }
                                var es = ['left','bottom','top','right'];
                                for(var m of es){
                                    if(!style[m]){
                                        levelView.style[m] = "";
                                    }
                                }
                            }else{
                                if(levelView.qh_savedStyle){
                                    for(var m in levelView.qh_savedStyle){
                                        levelView.style[m] = levelView.qh_savedStyle[m];
                                    }
                                }
                            }
                            if(this.getSkinAt(i).skinId){
                                if(lib.qhly_level[name+'_'+this.getSkinAt(i).skinId]){
                                    level = lib.qhly_level[name+'_'+this.getSkinAt(i).skinId];
                                }
                            }
                            if(level){
                                var map={
                                    '普通':'putong',
                                    '精品':'jingpin',
                                    '史诗':'shishi',
                                    '传说':'chuanshuo',
                                    '限定':'xianding',
                                };
                                var img = null;
                                if(map[level]){
                                    img = "extension/千幻聆音/level_"+map[level]+".png";
                                }else if(level.indexOf("#") == 0){
                                    var l2 = level.replace("#","");
                                    img = "extension/千幻聆音/"+l2+".png";
                                }else if(level.indexOf("$") == 0){
                                    var l2 = level.replace("$","");
                                    img = l2;
                                }
                                if(img){
                                    levelView.show();
                                    levelView.setBackgroundImage(img);
                                }else{
                                    levelView.hide();
                                }
                            }else{
                                levelView.hide();
                            }
                        }else{
                            currentSkinView.hide();
                            levelView.hide();
                            if(currentViewSkin.isLolBigLayout){
                                currentSkinView.qhBoard.hide();
                            }
                        }
                    }
                    }else{
                        for(var v of this.skinViews){
                            v.hide();
                        }
                        if(currentViewSkin.isLolBigLayout){
                            this.text.style.height = "70%";
                        }else{
                            this.text.style.height = "100%";
                        }
                    }
                    var content = "<br>";
                    var currentSkin = this.getCurrentSkin(name);
                    if(!currentSkin){
                        return;
                    }
                    var tname = currentSkin.skinId;
                    if(!tname){
                        tname = "原始皮肤";
                    }else if(currentSkin.skinInfo.translation){
                        tname = currentSkin.skinInfo.translation;
                    }else{
                        tname = get.translation(currentSkin.skinId);
                    }
                    if(this.skinName){
                        this.skinName.innerHTML = tname;
                    }
                    if(!currentViewSkin.isQiLayout && !currentViewSkin.isLolBigLayout){
                        content += "<h2 style='color:"+get.qhly_getIf(currentViewSkin.skinPageHeadTitleColor,"#783f04")+"'>皮肤名称：<span style='color:"+get.qhly_getIf(currentViewSkin.skinPageHeadSkinNameColor,"black")+"'>"+tname+"</span></h2>";
                    }
                    var extInfo = "";
                    if(currentSkin.skinInfo.info){
                        extInfo = "<h3>"+currentSkin.skinInfo.info+"</h3>";
                    }else{
                        if(state.pkg && state.pkg.originSkinInfo){
                            var i = state.pkg.originSkinInfo(name);
                            if(i){
                                extInfo = "<h3>"+i+"</h3>";
                            }
                        }
                    }
                    if(!currentViewSkin.isQiLayout && !currentViewSkin.isLolBigLayout){
                        content += extInfo;
                    }
                    var addButton = [];
                    if(currentViewSkin.isQiLayout){
                        content += "<table border='2' frame='void' rules='none'>";
                        for(var audio of currentSkin.audios){
                            content += "<tr>";
                            content += "<td style='";
                            content += "text-align:center;vertical-align:top;width:100px;height:100px;background-repeat:no-repeat;background-position:top left;background-size:100px 100px;background-image:url("+lib.assetURL+"extension/千幻聆音/newui_shuimo_skillname.png);";
                            if(audio.id != 'die'){
                                content += "color:"+get.qhly_getIf(currentViewSkin.skinPageSkillNameColor,"#4169E1")+";";
                            }else{
                                content += "color:#ff0000;";
                            }
                            var cskill;
                            if(audio.name){
                                cskill = audio.name;
                            }else{
                                cskill = get.translation(audio.id);
                            }
                            if(cskill.length <= 2){
                                content += 'font-size:30px;';
                                content += 'line-height:'+(lib.config.qhly_hanggaoxiufu?lib.config.qhly_hanggaoxiufu:'250')+'%;';
                            }else if(cskill.length <= 3){
                                content += 'font-size:26px;';
                                content += 'line-height:320%;'
                            }else if(cskill.length <= 4){
                                content += 'font-size:22px;';
                                content += 'line-height:370%;'
                            }else{
                                content += 'font-size:18px;';
                                content += 'line-height:450%;'
                            }
                            content += 'font-family:qh_songhei;';
                            content += "'>";
                            content += cskill;
                            content += "</td>";
                            
                            content += "<td>";
                            content += "<img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('skinPagePlayAudioButtonImage','extension/千幻聆音/qhly_pic_playaudiobutton.png')+"' style='height:40px;' id='qhly_skin_skill_"+audio.id+"'/>"
                            if(lib.config.qhly_editmode && !game.qhly_isForbidEditTaici(name)){
                                content += "<img src='"+lib.assetURL+"extension/千幻聆音/qhly_editButton.png' style='height:25px;width:25px;'";
                                content += " id='qhly_skin_skill_edit_"+audio.id+"'";
                                content += "/>";
                            }
                            content += "<br>";
                            addButton.push(audio.id);
                            if(audio.content){
                                var sc = audio.content;
                                content += sc;
                            }
                            content += "<br></td>";
                            content += "</tr>";
                        }
                        content += "</table>";
                    }else{
                        for(var audio of currentSkin.audios){
                            if(audio.id != 'die'){
                                content += "<h3 style='color:"+get.qhly_getIf(currentViewSkin.skinPageSkillNameColor,"#4169E1")+"'>【";
                            }else{
                                content += "<h3 style='color:#ff0000'>【";
                            }
                            if(audio.name){
                                content += audio.name;
                            }else{
                                content += get.translation(audio.id);
                            }
                            content += "】"
                            content += "&nbsp;&nbsp;&nbsp;<img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('skinPagePlayAudioButtonImage','extension/千幻聆音/qhly_pic_playaudiobutton.png')+"' style='height:23px;vertical-align:middle;' id='qhly_skin_skill_"+audio.id+"'/>"
                            if(lib.config.qhly_editmode && !game.qhly_isForbidEditTaici(name)){
                                content += "<img src='"+lib.assetURL+"extension/千幻聆音/qhly_editButton.png' style='height:25px;width:25px;'";
                                content += " id='qhly_skin_skill_edit_"+audio.id+"'";
                                content += "/>";
                            }
                            content += "</h3>"
                            addButton.push(audio.id);
                            if(audio.content){
                                content += "<p>";
                                content += audio.content;
                                content += "</p>";
                            }
                        }
                    }
                    if(currentViewSkin.isQiLayout || currentViewSkin.isLolBigLayout){
                        content += extInfo;
                    }
                    content += "<br><br>";
                    if(lib.config.qhly_skinconfig){
                        content += "<h2>皮肤配置</h2>";
                        content += "<p><span style='display:inline-block;height:30px;'><span id='qhconfig_checkbox_banInRandom_text' style='display:inline-block;position:relative;bottom:25%;'>随机切换禁用&nbsp;&nbsp;</span><img id='qhconfig_checkbox_banInRandom'/></span></p><br>";
                        if(currentSkin.skinId){
                            content += "<p><span>皮肤品质&nbsp;&nbsp;</span><select style='font-size:22px;font-family:'qh_youyuan';' id='qhconfig_level_select'></select></p>";
                            content += "<p><span>皮肤顺序&nbsp;&nbsp;</span><select style='font-size:22px;font-family:'qh_youyuan';' id='qhconfig_order_select'></select></p>";
                            //content += "<p><span>语音重定向&nbsp;&nbsp;</span><select style='font-size:22px;font-family:'qh_youyuan';' id='qhconfig_audio_redirect_select'></select></p>";
                        }
                        content += "<br><br>";
                    }
                    content += "<br><br>";
                    this.text.innerHTML = content;
                    if(lib.config.qhly_skinconfig){
                        if(currentSkin.skinId){
                        var levelSelect = document.getElementById('qhconfig_level_select');
                        var opt = document.createElement('option');
                        opt.innerHTML = "默认";
                        opt.setAttribute('name','default');
                        levelSelect.appendChild(opt);
                        var levels = ['普通','精品','史诗','传说','限定'];
                        var map = {
                            '普通':'putong',
                            '精品':'jingpin',
                            '史诗':'shishi',
                            '传说':'chuanshuo',
                            '限定':'xianding',
                        };
                        if(!lib.qhly_level[name+'_'+currentSkin.skinId]){
                            opt.selected = 'selected';
                        }
                        for(var l of levels){
                            var opt = document.createElement('option');
                            opt.innerHTML = l;
                            opt.setAttribute('name',l);
                            if(lib.qhly_level[name+'_'+currentSkin.skinId] == l){
                                opt.selected = 'selected';
                            }
                            levelSelect.appendChild(opt);
                        }
                        levelSelect.onchange=function(e){
                            var event = e?e:window.event;
                            if(event.target){
                                target = event.target;
                                var opt = target[target.selectedIndex];
                                if(opt){
                                    var l = opt.getAttribute('name');
                                    if(l == 'default'){
                                        delete lib.qhly_level[name+'_'+currentSkin.skinId];
                                        game.saveConfig('qhly_level',lib.qhly_level);
                                        return;
                                    }
                                    var lm = map[l];
                                    if(lm){
                                        lib.qhly_level[name+'_'+currentSkin.skinId] = l;
                                        game.saveConfig('qhly_level',lib.qhly_level);
                                    }
                                }
                            }
                        };

                        var orderSelect = document.getElementById('qhconfig_order_select');
                        var opt = document.createElement('option');
                        opt.innerHTML = "默认";
                        opt.setAttribute('order','default');
                        orderSelect.appendChild(opt);
                        if(lib.config.qhly_order[name+'-'+currentSkin.skinId]===undefined){
                            opt.selected = 'selected';
                        }
                        for(var i=0;i<50;i++){
                            var opt = document.createElement('option');
                            opt.innerHTML = ""+i;
                            opt.setAttribute('order',i);
                            if(lib.config.qhly_order[name+'-'+currentSkin.skinId] == i){
                                opt.selected = 'selected';
                            }
                            orderSelect.appendChild(opt);
                        }
                        orderSelect.onchange=function(e){
                            var event = e?e:window.event;
                            if(event.target){
                                target = event.target;
                                var opt = target[target.selectedIndex];
                                if(opt){
                                    var o = opt.getAttribute('order');
                                    if(o == 'default'){
                                        game.qhly_setOrder(name,currentSkin.skinId);
                                    }else{
                                        game.qhly_setOrder(name,currentSkin.skinId,o);
                                    }
                                }
                            }
                        };
                        
                    }
                        var banInRandomCheckbox = document.getElementById('qhconfig_checkbox_banInRandom');
                        var bindFunc=function(checkbox,text){
                            if(!text)return;
                            ui.qhly_addListenFunc(text);
                            text.listen(function(){
                                game.qhly_playQhlyAudio('qhly_voc_check',null,true);
                                checkbox.qhly_setChecked(!checkbox.qhly_checked,true);
                            });
                        };
                        ui.qhly_initCheckBox(banInRandomCheckbox,game.qhly_skinIsBanned(name,currentSkin.skinId));
                        bindFunc(banInRandomCheckbox,document.getElementById('qhconfig_checkbox_banInRandom_text'));
                        banInRandomCheckbox.qhly_onchecked=function(checked){
                            game.qhly_banSkin(name,currentSkin.skinId,checked);
                        };
                    }
                    for(var vid of addButton){
                        var img = document.getElementById('qhly_skin_skill_'+vid);
                        if(img){
                            ui.qhly_addListenFunc(img);
                            var that = this;
                            (function(id){
                                img.listen(function(){
                                    that.consumeTextClick = true;
                                    if(id != 'die'){
                                        var count = _status.qhly_skillAudioWhich[id];
                                        if(!count){
                                            _status.qhly_skillAudioWhich[id] = 0;
                                            count = 0;
                                        }
                                        _status.qhly_skillAudioWhich[id]++;
                                        window.qhly_TrySkillAudio(id,{name:name},null,count);
                                        var skillSkin = game.qhly_getSkillSkin(name,game.qhly_getSkin(name),id);
                                        if(skillSkin){
                                            if(skillSkin === 1){
                                                subView.avatarImage.setBackground(name,'character');
                                            }else if(Array.isArray(skillSkin)){
                                                subView.avatarImage.setBackgroundImage(skillSkin[count % skillSkin.length]);
                                            }else{
                                                subView.avatarImage.setBackgroundImage(skillSkin);
                                            }
                                        }
                                    }else{
                                        window.qhly_playDieAudio(name);
                                    }
                                });
                            })(vid);
                        }
                        if(lib.config.qhly_editmode && !game.qhly_isForbidEditTaici(name)){
                            var imgEdit = document.getElementById('qhly_skin_skill_edit_'+vid);
                            if(imgEdit){
                                ui.qhly_addListenFunc(imgEdit);
                                (function(id){
                                    imgEdit.listen(function(){
                                        that.editOpen(name,currentSkin.skinId,id,state);
                                    });
                                })(vid);
                            }
                        }
                    }
                },
                afterGetSkinList:function(list,name,state){
                    var retList = [];
                    if(list){
                    for(var skin of list){
                            var info = game.qhly_getSkinInfo(name,skin,state.pkg);
                            var obj = {
                                order:info.order,
                                skinId:skin,
                                skinInfo:info,
                                audios:get.qhly_getAudioInfoInSkin(name,state.pkg,skin),
                            };
                            retList.push(obj);
                        }
                    }
                    this.skinList = [];
                    this.skinList.push({
                        skinId:null,
                        skinInfo:game.qhly_getSkinInfo(name,null,state.pkg),
                        audios:get.qhly_getAudioInfoInSkin(name,state.pkg,null),
                    });
                    retList.sort(function(a,b){
                        var orderA = game.qhly_getOrder(name,a.skinId,state.pkg);
                        var orderB = game.qhly_getOrder(name,b.skinId,state.pkg);
                        if(orderA > orderB)return 1;
                        if(orderA == orderB)return 0;
                        return -1;
                    });
                    for(var r of retList){
                        this.skinList.push(r);
                    }
                    this.skinListGot = true;
                },
                init:function(name,state){
                    this.text = ui.create.div('.qh-page-skin-text',this.pageView);
                    lib.setScroll(this.text);
                    fixTextSize(this.text);
                    if(currentViewSkin.isLolBigLayout){
                        this.skinName = ui.create.div('.qh-page-skin-name',this.pageView);
                    }
                    this.skinBoard1 = ui.create.div('.qh-page-skinavatar1',this.pageView);
                    this.skinBoard2 = ui.create.div('.qh-page-skinavatar2',this.pageView);
                    this.skinBoard3 = ui.create.div('.qh-page-skinavatar3',this.pageView);
                    this.skinCover1 = ui.create.div('.qh-page-skinavatarcover',this.skinBoard1);
                    this.skinCover2 = ui.create.div('.qh-page-skinavatarcover',this.skinBoard2);
                    this.skinCover3 = ui.create.div('.qh-page-skinavatarcover',this.skinBoard3);
                    this.skin1 = ui.create.div('.qh-page-skinavatarpicture',this.skinCover1);
                    this.skin1.classList.add('avatar');
                    this.skin1.qhCover = this.skinCover1;
                    this.skin1.qhBoard = this.skinBoard1;
                    this.skin2 = ui.create.div('.qh-page-skinavatarpicture',this.skinCover2);
                    this.skin2.qhCover = this.skinCover2;
                    this.skin2.qhBoard = this.skinBoard2;
                    this.skin2.classList.add('avatar');
                    this.skin3 = ui.create.div('.qh-page-skinavatarpicture',this.skinCover3);
                    this.skin3.qhCover = this.skinCover3;
                    this.skin3.qhBoard = this.skinBoard3;
                    this.skin3.classList.add('avatar');

                    var setLock = function(m){
                        if(m){
                            if(!this.qhCover.skinLock){
                                this.qhCover.skinLock = ui.create.div('.qh-lock',this.qhCover);
                            }
                            this.qhCover.skinLock.show();
                        }else{
                            if(this.qhCover.skinLock){
                                this.qhCover.skinLock.hide();
                            }
                        }
                    };

                    this.skin1.qh_setLock = setLock;
                    this.skin2.qh_setLock = setLock;
                    this.skin3.qh_setLock = setLock;

                    if(state.pkg.isLutou || lib.config.qhly_lutou){
                        for(var i=1;i<=3;i++){
                            var v = this['skin'+i];
                            v.classList.remove('qh-page-skinavatarpicture');
                            v.classList.add('qh-page-skinavatarpicture-lutou');
                        }
                    }else{
                        for(var i=1;i<=3;i++){
                            var v = this['skin'+i];
                            v.classList.remove('qh-page-skinavatarpicture-lutou');
                            v.classList.add('qh-page-skinavatarpicture');
                        }
                    }
                    this.skinLevel1 = ui.create.div('.qh-page-skinavatarlevel',this.skinBoard1);
                    this.skinLevel2 = ui.create.div('.qh-page-skinavatarlevel',this.skinBoard2);
                    this.skinLevel3 = ui.create.div('.qh-page-skinavatarlevel',this.skinBoard3);
                    this.skinLevel1.style.pointerEvents = 'none';
                    this.skinLevel2.style.pointerEvents = 'none';
                    this.skinLevel3.style.pointerEvents = 'none';

                    this.skin1.classList.add('qh-not-replace');
                    this.skin2.classList.add('qh-not-replace');
                    this.skin3.classList.add('qh-not-replace');
                    if(currentViewSkin.isQiLayout){
                        this.skinTitle1 = ui.create.div('.qh-page-skinavatartitle',this.skinCover1);
                        this.skinTitle1.qhText = ui.create.div('.qh-page-skinavatartitle-text',this.skinTitle1);
                        this.skinTitle2 = ui.create.div('.qh-page-skinavatartitle',this.skinCover2);
                        this.skinTitle2.qhText = ui.create.div('.qh-page-skinavatartitle-text',this.skinTitle2);
                        this.skinTitle3 = ui.create.div('.qh-page-skinavatartitle',this.skinCover3);
                        this.skinTitle3.qhText = ui.create.div('.qh-page-skinavatartitle-text',this.skinTitle3);
                        this.skin1.qhTitle = this.skinTitle1;
                        this.skin2.qhTitle = this.skinTitle2;
                        this.skin3.qhTitle = this.skinTitle3;
                        this.skinTitle1.hide();
                        this.skinTitle2.hide();
                        this.skinTitle3.hide();
                    }
                    var that = this;
                    this.skin1.listen(function(){
                        that.onClickSkin(0,name,state);
                    });
                    this.skin2.listen(function(){
                        that.onClickSkin(1,name,state);
                    });
                    this.skin3.listen(function(){
                        that.onClickSkin(2,name,state);
                    });
                    this.leftArrow=ui.create.div('.qh-page-skin-leftarrow',this.pageView);
                    this.rightArrow=ui.create.div('.qh-page-skin-rightarrow',this.pageView);
                    this.leftArrow.listen(function(){
                        if(currentViewSkin.isLolBigLayout){
                            if(that.getSkinAt(0)){
                                that.onClickSkin(0,name,state);
                            }
                        }else if(that.currentIndex > 0){
                            that.currentIndex--;
                            that.refresh(name,state);
                            game.qhly_playQhlyAudio('qhly_voc_press',null,true);
                        }
                    });
                    this.rightArrow.listen(function(){
                        if(currentViewSkin.isLolBigLayout){
                            if(that.getSkinAt(2)){
                                that.onClickSkin(2,name,state);
                            }
                        }else if(that.currentIndex < that.skinList.length){
                            that.currentIndex++;
                            that.refresh(name,state);
                            game.qhly_playQhlyAudio('qhly_voc_press',null,true);
                        }
                    });
                    this.skinViews = [this.skinBoard1,this.skinBoard2,this.skinBoard3,this.skin1,this.skin2,this.skin3,this.leftArrow,this.rightArrow];
                    this.hideButton = ui.create.div('.qh-hide-skin-button',this.pageView);
                    this.hideButton.listen(function(){
                        that.hideSkinMode = !that.hideSkinMode;
                        that.refresh(name,state);
                        game.qhly_playQhlyAudio('qhly_voc_press',null,true);
                    });
                    this.text.listen(function(){
                        if(currentViewSkin.isLolBigLayout)return;
                        if(that.consumeTextClick){
                            that.consumeTextClick = false;
                            return;
                        }
                        if(!that.hideSkinMode){
                            that.hideSkinMode = true;
                            that.refresh(name,state);
                        }
                    });
                    game.qhly_changeViewPageSkin('skin',this.pageView);
                    this.inited = true;
                }
            },
            config:{
                pageView:ui.create.div('.qh-page-config',view),
                refresh:function(name,state){
                    if(!this.inited)this.init(name,state);
                },
                init:function(name,state){
                    this.innerConfig = ui.create.div('.qh-page-config-text',this.pageView);
                    fixTextSize(this.innerConfig);
                    var that = this;
                    var content = "";
                    content += "<h2><img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('favouriteImage','extension/千幻聆音/newui_fav.png')+"' style='width:50px'/>收藏设置</h2>";
                    content += "<p>可以选择收藏此武将。进行自由选将操作时，可以更快找到此武将。</p>";
                    content += "<p><span style='display:inline-block;height:30px;'><img id='qhconfig_checkbox_fav'/><span id='qhconfig_checkbox_text_fav' style='display:inline-block;position:relative;bottom:25%;'>收藏"+get.translation(name)+"</span></span></p>";

                    content += "<h2><img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('forbidImage','extension/千幻聆音/newui_forbid.png')+"' style='width:50px'/>禁用设置</h2>";
                    content += "<p>可以选择在某模式下禁用或启用该武将。该设置将在重启游戏后生效。</p>"
                    content += "<p><span style='display:inline-block;height:30px;'><img id='qhconfig_checkbox_banned_mode_all'/><span id='qhconfig_checkbox_text_all' style='display:inline-block;position:relative;bottom:25%;'>所有模式禁用</span></span></p>";
                    for(var mode in lib.mode){
                        if(mode != 'connect'){
                            var translatemode = get.translation(mode);
                            if(mode == 'tafang')translatemode = '塔防';
                            else if(mode == 'chess')translatemode = '战棋';
                            content += "<p><span style='display:inline-block;height:30px;'><img id='qhconfig_checkbox_banned_mode_"+mode+"'/><span id='qhconfig_checkbox_text_"+mode+"' style='display:inline-block;position:relative;bottom:25%;'>"+translatemode+"模式禁用</span></span></p>";
                        }
                    }
                    content += "<p><span style='display:inline-block;height:30px;'><img id='qhconfig_checkbox_banned_ai'/><span id='qhconfig_checkbox_text_ai' style='display:inline-block;position:relative;bottom:25%;'>仅自由选将可选</span></span></p>";
                    
                    content += "<h2><img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('rankImage','extension/千幻聆音/newui_rank_icon.png')+"' style='width:50px'/>等阶设置</h2>";
                    content += "<p>可以设置"+get.translation(name)+"的等阶，重启后生效。</p>";
                    content += "<p><select style='font-size:22px;font-family:'qh_youyuan';' id='qhconfig_rank_select'></select></p>";

                    if(lib.config.qhly_enableCharacterMusic){
                        content += "<h2><img src='"+lib.assetURL+get.qhly_getCurrentViewSkinValue('musicImage','extension/千幻聆音/newui_music_icon.png')+"' style='width:50px'/>音乐设置</h2>";
                        content += "<p>可以设置"+get.translation(name)+"的专属背景音乐，在游戏开始时将自动切换。</p>";
                        content += "<p><select style='font-size:22px;font-family:'qh_youyuan';' id='qhconfig_music_select'></select></p>";
                    }
                    var extraConfigs = [];
                    if(state.pkg.characterConfigExtra){
                        var characterConfigExtra = state.pkg.characterConfigExtra(name);
                        if(characterConfigExtra){
                            for(var extc of characterConfigExtra){
                                var extobj = game.qhly_parseConfig(extc);
                                content += extobj.content;
                                extraConfigs.push(extobj);
                            }
                        }
                    }
                    content += "<br><br><br><br><br><br>";
                    this.innerConfig.innerHTML = content;
                    for(var extraConfig of extraConfigs){
                        if(extraConfig.onfinish){
                            extraConfig.onfinish(this.innerConfig);
                        }
                    }
                    var bindFunc=function(checkbox,text){
                        if(!text)return;
                        ui.qhly_addListenFunc(text);
                        text.listen(function(){
                            game.qhly_playQhlyAudio('qhly_voc_check',null,true);
                            checkbox.qhly_setChecked(!checkbox.qhly_checked,true);
                        });
                    };
                    var checkboxFav = document.getElementById('qhconfig_checkbox_fav');
                    ui.qhly_initCheckBox(checkboxFav,lib.config.favouriteCharacter && lib.config.favouriteCharacter.contains(name));
                    bindFunc(checkboxFav,document.getElementById('qhconfig_checkbox_text_fav'));
                    checkboxFav.qhly_onchecked=function(check){
                        if(!check){
                            if(lib.config.favouriteCharacter && lib.config.favouriteCharacter.contains(name)){
                                lib.config.favouriteCharacter.remove(name);
                            }
                        }else{
                            if(!lib.config.favouriteCharacter){
                                lib.config.favouriteCharacter = [name];
                            }else{
                                lib.config.favouriteCharacter.add(name);
                            }
                        }
                        game.saveConfig('favouriteCharacter',lib.config.favouriteCharacter);
                    };
                    var checkboxAll = document.getElementById('qhconfig_checkbox_banned_mode_all');
                    var allForbid = true;
                    for(var mode in lib.mode){
                        if(mode!='connect'){
                            if(lib.config[mode+'_banned'] && lib.config[mode+'_banned'].contains(mode)){
                                continue;
                            }
                            allForbid = false;
                            break;
                        }
                    }
                    
                    ui.qhly_initCheckBox(checkboxAll,allForbid);
                    bindFunc(checkboxAll,document.getElementById('qhconfig_checkbox_text_all'));
                    checkboxAll.qhly_onchecked = function(check){
                        if(check){
                            for(var mode in lib.mode){
                                if(mode == 'connect')continue;
                                if(that['banned_checkbox_mode_'+mode]){
                                    that['banned_checkbox_mode_'+mode].qhly_setChecked(true,true);
                                }
                            }
                        }else{
                            for(var mode in lib.mode){
                                if(mode == 'connect')continue;
                                if(that['banned_checkbox_mode_'+mode]){
                                    that['banned_checkbox_mode_'+mode].qhly_setChecked(false,true);
                                }
                            }
                        }
                    };
                    this.banned_checkbox_mode_all = checkboxAll;
                    var checkboxBanai = document.getElementById('qhconfig_checkbox_banned_ai');
                    
                    ui.qhly_initCheckBox(checkboxBanai,game.qhly_isForbidAI(name));
                    
                    bindFunc(checkboxBanai,document.getElementById('qhconfig_checkbox_text_ai'));
                    checkboxBanai.qhly_onchecked=function(check){
                        if(check){
                            game.qhly_setForbidAI(name,true);
                        }else{
                            game.qhly_setForbidAI(name,false);
                        }
                    };
                    for(var mode in lib.mode){
                        if(mode != 'connect'){
                            var checkbox = document.getElementById('qhconfig_checkbox_banned_mode_'+mode);
                            this['banned_checkbox_mode_'+mode] = checkbox;
                            if(checkbox){
                                ui.qhly_initCheckBox(checkbox,lib.config[mode+'_banned'] && lib.config[mode+'_banned'].contains(name));
                                bindFunc(checkbox,document.getElementById('qhconfig_checkbox_text_'+mode));
                                (function(mode){
                                    checkbox.qhly_onchecked = function(checked){
                                        if(!checked){
                                            that.banned_checkbox_mode_all.qhly_setChecked(false,true);
                                            if(lib.config[mode+'_banned'] && lib.config[mode+'_banned'].contains(name)){
                                                lib.config[mode+'_banned'].remove(name);
                                            }
                                        }else{
                                            if(lib.config[mode+'_banned']){
                                                lib.config[mode+'_banned'].add(name);
                                            }else{
                                                lib.config[mode+'_banned'] = [name];
                                            }
                                        }
                                        game.saveConfig(mode+'_banned',lib.config[mode+'_banned']);
                                    };
                                })(mode);
                            }
                        }
                    }
                    lib.setScroll(this.innerConfig);
                    game.qhly_changeViewPageSkin('config',this.pageView);
                    var rankSelect = document.getElementById('qhconfig_rank_select');
                    var rankList = ['默认','稀有','史诗','传说','精品','精良'];
                    var rankToEng = {
                        '默认':"default",
                        '稀有':'common',
                        '史诗':"epic",
                        '传说':"legend",
                        '精品':'rare',
                        '精良':"junk",
                    };
                    var rankToIcon = {
                        '默认':"",
                        '稀有':'A+',
                        '史诗':"SS",
                        '传说':"SSS",
                        '精品':'S',
                        '精良':"A",
                    };
                    var rank = null;
                    if(lib.config.qhly_rarity && lib.config.qhly_rarity[name]){
                        rank = lib.config.qhly_rarity[name];
                    }
                    for(var r of rankList){
                        var opt = document.createElement('option');
                        opt.innerHTML = r + rankToIcon[r];
                        opt.setAttribute('rank',rankToEng[r]);
                        if(!rank && r == '默认'){
                            opt.selected = 'selected';
                        }else if(rankToEng[r] == rank){
                            opt.selected = 'selected';
                        }
                        rankSelect.appendChild(opt);
                    }
                    rankSelect.onchange=function(e){
                        var event = e?e:window.event;
                        if(event.target){
                            target = event.target;
                            var opt = target[target.selectedIndex];
                            if(opt){
                                var rank = opt.getAttribute('rank');
                                if(!lib.config.qhly_rarity){
                                    lib.config.qhly_rarity = {};
                                }
                                if(rank == 'default'){
                                    if(lib.config.qhly_rarity[name]){
                                        delete lib.config.qhly_rarity[name];
                                    }
                                }else{
                                    lib.config.qhly_rarity[name] = rank;
                                }
                                game.saveConfig('qhly_rarity',lib.config.qhly_rarity);
                            }
                        }
                        refreshRank();
                    };
                    if(lib.config.qhly_enableCharacterMusic){
                        var select = document.getElementById('qhconfig_music_select');
                        var currentMusic = game.qhly_getCharacterMusic(name);
                        var opt = document.createElement('option');
                        opt.innerHTML = "无";
                        opt.setAttribute('musicpath','');
                        if(!currentMusic){
                            opt.selected = 'selected';
                        }
                        select.appendChild(opt);
                        for(var p in lib.qhlyMusic){
                            var opt = document.createElement('option');
                            opt.innerHTML = lib.qhlyMusic[p].name;
                            opt.setAttribute('musicpath',p);
                            if(currentMusic == p){
                                opt.selected = 'selected';
                            }
                            select.appendChild(opt);
                        }
                        select.onchange=function(e){
                            var event = e?e:window.event;
                            if(event.target){
                                target = event.target;
                                var opt = target[target.selectedIndex];
                                if(opt){
                                    var path = opt.getAttribute('musicpath');
                                    if(path){
                                        lib.config.qhly_characterMusic[name] = path;
                                    }else{
                                        delete lib.config.qhly_characterMusic[name];
                                    }
                                    game.saveConfig('qhly_characterMusic',lib.config.qhly_characterMusic);
                                    game.qhly_switchBgm();
                                }
                            }
                        };
                    }
                    this.inited = true;
                }
            }
        };
        subView.pageButton[page].setBackgroundImage(get.qhly_getIf(currentViewSkin.buttonPressedImage,'extension/千幻聆音/newui_button_selected.png'));
        view.appendChild(subView.mp);
        var state = {
            name:name,
            currentPage:page,
            skinScrollIndex:0,
            pkg:game.qhly_foundPackage(name),
            intro:get.character(name),
            mainView:subView,
        };
        subView.menuCover.listen(function(current){
            if(state.extraMenu){
                state.extraMenu.delete();
                delete state.extraMenu;
            }
            view.removeChild(subView.menuCover);
        });
        refreshRank=function(){
            if(subView.rank){
                if(lib.config.qhly_showrarity){
                    subView.rank.show();
                    var rarity = game.getRarity(state.name);
                    if(rarity){
                        subView.rank.setBackgroundImage('extension/千幻聆音/rarity_'+rarity+".png");
                    }
                }else{
                    subView.rank.hide();
                }
            }
        };
        var showPage=function(pagename){
            /*
            if(currentViewSkin.isLolBigLayout){
                if(pagename == 'skin'){
                    state.useLihuiLayout(state.useLihui());
                    subView.avatar.style.right = "50%";
                    subView.avatar.style.width="calc(40%)";
                    subView.avatar.style.transform = "translate(50%,0%)";
                    subView.board.setBackgroundImage(state.useLihui()?"extension/千幻聆音/newui_lol_bg_center_big.png":"extension/千幻聆音/newui_lol_bg_center_small.png");
                }else{
                    subView.avatar.style.right = "0px";
                    subView.avatar.style.width="calc(50%)";
                    subView.avatar.style.transform = "";
                    subView.board.setBackgroundImage(state.useLihui()?"extension/千幻聆音/newui_lol_bg1_big.png":"extension/千幻聆音/newui_lol_bg1.png");
                }
            }
            */
            var tpage = subView.page[pagename];
            subView.currentPage = pagename;
            state.currentPage = pagename;
            if(tpage){
                tpage.refresh(name,state);
            }
            state.useLihuiLayout(state.useLihui());
            for(var p in subView.page){
                if(p == pagename){
                    subView.page[p].pageView.show();
                }else{
                    subView.page[p].pageView.hide();
                }
            }
            for(var k in subView.pageButton){
                if(k == pagename){
                    subView.pageButton[k].setBackgroundImage(get.qhly_getIf(currentViewSkin.buttonPressedImage,'extension/千幻聆音/newui_button_selected.png'));
                }else{
                    subView.pageButton[k].setBackgroundImage(get.qhly_getIf(currentViewSkin.buttonImage,'extension/千幻聆音/newui_button.png'));
                }
            }
        };
        state.useLihui=function(){
            if(currentViewSkin.lihuiSupport && state.pkg.characterLihui){
                var lihuiPath = state.pkg.characterLihui(name,lib.config.qhly_skinset.skin[name]);
                return lihuiPath;
            }
            return false;
        };
        state.useLihuiLayout=function(use){
            if(use){
                if(currentViewSkin.isLolBigLayout){
                    if(state.currentPage == 'skin'){
                        //subView.rank.style.right="60px";
                        if(lib.config.qhly_showrarity){
                            subView.rank.hide();
                        }
                        subView.board.setBackgroundImage("extension/千幻聆音/newui_lol_bg_center_big.png");
                        subView.avatar.style.right = "5%";
                        subView.avatarImage.style.backgroundSize="contain";
                        subView.avatarImage.style.backgroundPosition="100% 50%";
                        subView.avatar.style.width="calc(100%)";
                        subView.avatar.style.transform = "";
                    }else{
                        //subView.rank.style.right="120px";
                        if(lib.config.qhly_showrarity){
                            subView.rank.show();
                        }
                        subView.board.setBackgroundImage("extension/千幻聆音/newui_lol_bg1_big.png");
                        subView.avatar.style.right = "0";
                        subView.avatarImage.style.backgroundSize="contain";
                        subView.avatarImage.style.backgroundPosition="100% 50%";
                        subView.avatar.style.width="calc(100%)";
                        subView.avatar.style.transform = "";
                    }
                }
            }else{
                if(currentViewSkin.isLolBigLayout){
                    if(state.currentPage == 'skin'){
                        //subView.rank.style.right="60px";
                        if(lib.config.qhly_showrarity){
                            subView.rank.hide();
                        }
                        subView.board.setBackgroundImage("extension/千幻聆音/newui_lol_bg_center_small.png");
                        subView.avatar.style.right = "50%";
                        subView.avatar.style.width="calc(40%)";
                        subView.avatarImage.style.backgroundSize="cover";
                        subView.avatarImage.style.backgroundPosition="50% 50%";
                        subView.avatar.style.transform = "translate(50%,0%)";
                    }else{
                        //subView.rank.style.right="120px";
                        if(lib.config.qhly_showrarity){
                            subView.rank.show();
                        }
                        subView.board.setBackgroundImage("extension/千幻聆音/newui_lol_bg1.png");
                        subView.avatar.style.right = "0px";
                        subView.avatar.style.width="calc(50%)";
                        subView.avatarImage.style.backgroundSize="cover";
                        subView.avatarImage.style.backgroundPosition="50% 50%";
                        subView.avatar.style.transform = "";
                    }
                }
            }
        };
        for(var k in subView.pageButton){
            (function(m){
                subView.pageButton[m].listen(function(){
                    if(subView.currentPage != m){
                        showPage(m);
                        if(state.extraMenu){
                            state.extraMenu.delete();
                            delete state.extraMenu;
                        }
                        game.qhly_playQhlyAudio('qhly_voc_press',null,true);
                    }else if(m == 'introduce'){
                        if(state.extraMenu){
                            state.extraMenu.delete();
                            delete state.extraMenu;
                        }else{
                            var extra = game.qhly_getIntroduceExtraPage(name,state.pkg);
                            if(extra){
                                game.qhly_playQhlyAudio('qhly_voc_click2',null,true);
                                var arr = [{
                                    name:'简介',
                                    onchange:function(){
                                        state.introduceExtraPage = "简介";
                                        subView.page.introduce.refresh(name,state);
                                        if(state.extraMenu){
                                            state.extraMenu.delete();
                                            delete state.extraMenu;
                                            view.removeChild(subView.menuCover);
                                        }
                                    }
                                }];
                                for(var obj of extra){
                                    (function(obj){
                                        arr.push({
                                            name:obj.name,
                                            onchange:function(){
                                                state.introduceExtraPage = obj.name;
                                                if(obj.qh_func){
                                                    state.introduceExtraFunc = game[obj.qh_func];
                                                }else{
                                                    state.introduceExtraFunc = obj.func;
                                                }
                                                subView.page.introduce.refresh(name,state);
                                                if(state.extraMenu){
                                                    state.extraMenu.delete();
                                                    delete state.extraMenu;
                                                    view.removeChild(subView.menuCover);
                                                }
                                            }
                                        });
                                    })(obj);
                                }
                                state.extraMenu = game.qhly_createBelowMenu(arr,view);
                                view.appendChild(subView.menuCover);
                            }
                        }
                    }
                });
            })(k);
        }
        var refreshView = function(state,subView){
            if(state.pkg.isLutou || lib.config.qhly_lutou){
                subView.avatarImage.classList.remove('qh-image-standard');
                subView.avatarImage.classList.add('qh-image-lutou');
                if(currentViewSkin.isQiLayout){
                    subView.board.classList.remove('qh-window-backboard');
                    subView.board.classList.add('qh-window-backboard-lutou');
                }
            }else{
                subView.avatarImage.classList.remove('qh-image-lutou');
                subView.avatarImage.classList.add('qh-image-standard');
                if(currentViewSkin.isQiLayout){
                    subView.board.classList.remove('qh-window-backboard-lutou');
                    subView.board.classList.add('qh-window-backboard');
                }
            }
            if(currentViewSkin.lihuiSupport && state.pkg.characterLihui){
                var lihuiPath = state.pkg.characterLihui(name,lib.config.qhly_skinset.skin[name]);
                if(lihuiPath){
                    subView.avatarImage.setBackgroundImage(lihuiPath);
                    state.useLihuiLayout(true);
                }else{
                    subView.avatarImage.setBackground(name,'character');
                    state.useLihuiLayout(false);
                }
            }else{
                subView.avatarImage.setBackground(name,'character');
                state.useLihuiLayout(false);
            }
            state.onChangeSkin=function(){
                if(!subView.characterTitle)return;
                var ctitle;
                if(state.pkg && state.pkg.characterTitle){
                    ctitle = state.pkg.characterTitle(name);
                    if(ctitle && ctitle[0] === '#' && ctitle.length >= 2){
                        switch(ctitle[1]){
                            case 'r':
                                subView.characterTitle.style.color = 'red';
                                break;
                            case 'g':
                                subView.characterTitle.style.color = 'green';
                                break;
                            case 'p':
                                subView.characterTitle.style.color = 'legend';
                                break;
                            case 'b':
                                subView.characterTitle.style.color = 'blue';
                                break;
                        }
                        ctitle = ctitle.slice(2);
                    }
                }else if(subView.characterTitle && lib.characterTitle[name]){
                    ctitle = lib.characterTitle[name];
                    if(ctitle && ctitle[0] === '#' && ctitle.length >= 2){
                        switch(ctitle[1]){
                            case 'r':
                                subView.characterTitle.style.color = 'red';
                                break;
                            case 'g':
                                subView.characterTitle.style.color = 'green';
                                break;
                            case 'p':
                                subView.characterTitle.style.color = 'legend';
                                break;
                            case 'b':
                                subView.characterTitle.style.color = 'blue';
                                break;
                        }
                        ctitle = ctitle.slice(2);
                    }
                }
                if(currentViewSkin.isQiLayout){
                    if(!lib.config.qhly_titlereplace || lib.config.qhly_titlereplace == 'title'){
                        if(ctitle){
                            subView.characterTitle.innerHTML = ctitle;
                        }else{
                            subView.characterTitle.innerHTML = '';
                        }
                    }else if(lib.config.qhly_titlereplace == 'skin'){
                        var skinName = game.qhly_getSkin(name);
                        if(!skinName && ctitle){
                            subView.characterTitle.innerHTML = ctitle;
                        }else{
                            var ext = game.qhly_getSkinInfo(name,skinName);
                            if(ext){
                                if(ext.translation){
                                    subView.characterTitle.innerHTML = ext.translation;
                                }else{
                                    subView.characterTitle.innerHTML = game.qhly_earse_ext(skinName);
                                }
                            }
                        }
                    }else if(lib.config.qhly_titlereplace == 'pkg'){
                        var pname = game.qhly_getCharacterPackage(name);
                        if(pname){
                            subView.characterTitle.innerHTML = get.translation(pname+"_character_config");
                        }
                    }
                }else{
                    subView.characterTitle.innerHTML = get.verticalStr(lib.qhly_filterPlainText(ctitle));
                }
            };
            state.onChangeSkin();
            var group = state.intro[1];
            if(get.is.double(state.name) && (currentViewSkin.isQiLayout || currentViewSkin.isLolBigLayout)){
                subView.group.hide();
                subView.doublegroup.show();
                var groups = get.is.double(state.name,true);
                subView.doublegroupA.innerHTML = get.translation(groups[0]);
                subView.doublegroupB.innerHTML = get.translation(groups[1]);
            }else if(group){
                if(subView.doublegroup){
                    subView.doublegroup.hide();
                }
                subView.group.show();
                if(currentViewSkin.isQiLayout || currentViewSkin.isLolBigLayout){
                    if(currentViewSkin.isLolBigLayout){
                        if(lib.qhly_groupimage[group]){
                            var groupHtml = "<img style='display:block;position:absolute;width:65%;height:65%;left:50%;top:50%;transform:translate(-50%,-50%);' ";
                            groupHtml += "src='"+lib.assetURL+lib.qhly_groupimage[group]+"'/>";
                            subView.group.innerHTML = groupHtml;
                        }else{
                            var groupHtml = "<b>";
                            groupHtml+=get.translation(group)+"</b>";
                            subView.group.innerHTML = groupHtml;               
                        }
                    }else{
                        subView.group.innerHTML = get.translation(group);
                    }
                }else{
                    if(lib.qhly_groupimage[group]){
                        subView.group.innerHTML = "";
                        subView.group.setBackgroundImage(lib.qhly_groupimage[group]);
                    }else{
                        subView.group.setBackgroundImage('');
                        subView.group.innerHTML = get.translation(group);
                        if(lib.qhly_groupcolor[group]){
                            subView.group.style.color = lib.qhly_groupcolor[group];
                        }else{
                            subView.group.style.color = 'yellow';
                        }
                    }
                }
            }
            refreshRank();
            if(state.pkg.characterNameTranslate){
                chname = state.pkg.characterNameTranslate(state.name);
            }else{
                chname = get.translation(state.name);
                if(!chname){
                    if(state.name.indexOf("gz_") == 0){
                        chname = get.translation(state.name.silce(3));
                    }
                }
                if(!chname){
                    chname = "未命名武将";
                }
            }
             if(game.qhly_getIntroduceExtraPage(name,state.pkg)){
                 subView.pageButton.introduce.downButton.show();
             }else{
                 subView.pageButton.introduce.downButton.hide();
             }
            if(currentViewSkin.isQiLayout){
                subView.name.innerHTML = chname;
            }else{
                var vname = get.verticalStr(chname);
                subView.name.innerHTML = vname;
            }
            if(!currentViewSkin.isQiLayout && !currentViewSkin.isLolBigLayout){
                if(lib.qhly_groupcolor[group]){
                    subView.name.style.textShadow = "2px 2px 2px "+lib.qhly_groupcolor[group];
                }else{
                    subView.name.style.textShadow = "2px 2px 2px #FFFF00";
                }
            }
            if(chname.length == 5){
                subView.name.style.fontSize = '2.6em';
            }else if(chname.length >= 6){
                subView.name.style.fontSize = '2.4em';
            }else{
                subView.name.style.fontSize = '2.8em';
            }
            var hp = state.intro[2];
            if(currentViewSkin.isQiLayout || currentViewSkin.isLolBigLayout){
                while(subView.hp.hasChildNodes()){
                    subView.hp.removeChild(subView.hp.lastChild);
                }
                if(typeof hp == 'number'){
                    if(!isFinite(hp)){
                        subView.hp.appendChild(ui.create.div('.qh-hpimg'));
                        var hptext = ui.create.div('.qh-hptext');
                        subView.hp.appendChild(hptext);
                        hptext.innerHTML = "×"+(currentViewSkin.isLolBigLayout?"<br>":"")+"∞";
                        if(currentViewSkin.isQiLayout){
                            hptext.style.left = "calc(12.83%)";
                        }else if(currentViewSkin.isLolBigLayout){
                            hptext.style.top = "44px";
                        }
                    }else{
                        if(hp <= 6){
                            for(var i=0;i<hp;i++){
                                var img = ui.create.div('.qh-hpimg');
                                if(currentViewSkin.isQiLayout){
                                    img.style.left = "calc("+(i * 12.83)+"%)";
                                }else if(currentViewSkin.isLolBigLayout){
                                    img.style.top = (i * 44)+"px";
                                }
                                subView.hp.appendChild(img);
                            }
                        }else{
                            subView.hp.appendChild(ui.create.div('.qh-hpimg'));
                            var hptext = ui.create.div('.qh-hptext');
                            if(currentViewSkin.isQiLayout){
                                hptext.style.left = "calc(12.83%)";
                            }else if(currentViewSkin.isLolBigLayout){
                                hptext.style.top = "44px";
                            }
                            subView.hp.appendChild(hptext);
                            hptext.innerHTML = "×"+(currentViewSkin.isLolBigLayout?"<br>":"")+hp;
                        }
                    }
                }else if(typeof hp == 'string'){
                    var index = hp.indexOf("/");
                    if(index >= 0){
                        var hp1 = get.infoHp(hp);
                        var hp2 = get.infoMaxHp(hp);
                        var hujia = get.infoHujia(hp);
                        if(isNaN(hp1) || isNaN(hp2)){
                            subView.hp.appendChild(ui.create.div('.qh-hpimg'));
                            var hptext = ui.create.div('.qh-hptext');
                            if(currentViewSkin.isQiLayout){
                                hptext.style.left = "calc(12.83%)";
                            }else if(currentViewSkin.isLolBigLayout){
                                hptext.style.top = "44px";
                            }
                            subView.hp.appendChild(hptext);
                            hptext.innerHTML = "×"+(currentViewSkin.isLolBigLayout?"<br>":"")+hp;
                        }else{
                            if(hp2 >= 6){
                                subView.hp.appendChild(ui.create.div('.qh-hpimg'));
                                var hptext = ui.create.div('.qh-hptext');
                                if(currentViewSkin.isQiLayout){
                                    hptext.style.left = "calc(12.83%)";
                                }else{
                                    hptext.style.top = "44px";
                                }
                                subView.hp.appendChild(hptext);
                                var br = (currentViewSkin.isLolBigLayout?"<br>":"");
                                hptext.innerHTML = "×"+br+hp1+br+'/'+br+hp2;
                                if(hujia){
                                    var hujiaDiv = ui.create.div('.qh-hujiaimg');
                                    if(currentViewSkin.isQiLayout){
                                        hujiaDiv.style.left = "calc(-12.83%)";
                                    }else if(currentViewSkin.isLolBigLayout){
                                        hujiaDiv.style.top = "-44px";
                                    }
                                    var hujiaInfo = ui.create.div('.qh-hujiaimg-inner');
                                    hujiaDiv.appendChild(hujiaInfo);
                                    hujiaInfo.innerHTML = ''+hujia;
                                    subView.hp.appendChild(hujiaDiv);
                                }
                            }else{
                                for(var i=0;i<hp2;i++){
                                    var img = ui.create.div('.qh-hpimg');
                                    if(currentViewSkin.isQiLayout){
                                        img.style.left = "calc("+(i * 12.83)+"%)";
                                    }else if(currentViewSkin.isLolBigLayout){
                                        img.style.top = (i * 44)+"px";
                                    }
                                    subView.hp.appendChild(img);
                                    if(i >= hp1){
                                        if(currentViewSkin.isQiLayout){
                                            img.setBackgroundImage('extension/千幻聆音/newui_shuimo_hpimg_gray.jpg');
                                        }else if(currentViewSkin.isLolBigLayout){
                                            img.setBackgroundImage('extension/千幻聆音/newui_lol_hpimg_gray.png');
                                        }
                                    }
                                }
                                if(hujia){
                                    if(hujia + hp2 <= 6){
                                        for(var i=hp2;i<hujia+hp2;i++){
                                            var img = ui.create.div('.qh-hujiaimg');
                                            if(currentViewSkin.isQiLayout){
                                                img.style.left = "calc("+(i * 12.83)+"%)";
                                            }else if(currentViewSkin.isLolBigLayout){
                                                img.style.top = (i * 44)+"px";
                                                img.style.width = "50.453px";
                                                img.style.height = '44px';
                                            }
                                            subView.hp.appendChild(img);
                                        }
                                    }else{
                                        var hujiaDiv = ui.create.div('.qh-hujiaimg');
                                        if(currentViewSkin.isQiLayout){
                                            hujiaDiv.style.left = "calc("+(i * 12.83)+"%)";
                                        }else if(currentViewSkin.isLolBigLayout){
                                            hujiaDiv.style.top = (i * 44)+"px";
                                            hujiaDiv.style.width = "50.453px";
                                            hujiaDiv.style.height = '44px';
                                        }
                                        var hujiaInfo = ui.create.div('.qh-hujiaimg-inner');
                                        hujiaDiv.appendChild(hujiaInfo);
                                        hujiaInfo.innerHTML = ''+hujia;
                                        subView.hp.appendChild(hujiaDiv);
                                    }
                                }
                            }
                        }
                    }else{
                        subView.hp.appendChild(ui.create.div('.qh-hpimg'));
                        var hptext = ui.create.div('.qh-hptext');
                        hptext.style.left = "calc(12.83%)";
                        subView.hp.appendChild(hptext);
                        hptext.innerHTML = "×"+(currentViewSkin.isLolBigLayout?"<br>":"")+hp;
                    }
                }
                while(subView.mp.hasChildNodes()){
                    subView.mp.removeChild(subView.hp.lastChild);
                }
                var mp = get.qhly_getMp(state.name,state.pkg);
                if(mp === null || mp === undefined){
                    subView.mp.hide();
                }else{
                    subView.mp.show();
                    if(mp <= 6){
                        for(var i=0;i<mp;i++){
                            var img = ui.create.div('.qh-mpimg');
                            if(currentViewSkin.isQiLayout){
                                img.style.left = "calc("+(i * 12.83)+"%)";
                            }else if(currentViewSkin.isLolBigLayout){
                                img.style.top = (i*44)+'px';
                            }
                            subView.mp.appendChild(img);
                        }
                    }else{
                        subView.mp.appendChild(ui.create.div('.qh-mpimg'));
                        var mptext = ui.create.div('.qh-mptext');
                        subView.mp.appendChild(mptext);
                        mptext.innerHTML = "×"+(currentViewSkin.isLolBigLayout?"<br>":"")+mp;
                    }
                }
            }else{
                if(typeof hp == 'number' && !isFinite(hp)){
                    hp = '∞';
                }
                if(!get.infoHujia(hp)){
                    subView.hpText.innerHTML = hp+'';
                }else{
                    var str = '';
                    if(get.infoHp(hp) != get.infoMaxHp(hp)){
                        str = get.infoHp(hp) + '/' + get.infoMaxHp(hp);
                    }else{
                        str = get.infoMaxHp(hp) + '';
                    }
                    str += "&nbsp;&nbsp;&nbsp;<img style='height:40px;weight:40px;' src='"+lib.assetURL+"extension/千幻聆音/qhly_hudun.png'/>";
                    if(get.infoHujia(hp) > 1){
                        str += ("x"+get.infoHujia(hp));
                    }
                    subView.hpText.innerHTML = str;
                    subView.hpText.style.left = "calc(30%)";
                }
                var mp = get.qhly_getMp(state.name,state.pkg);
                if(mp === null || mp === undefined){
                    subView.mp.hide();
                }else{
                    subView.mp.show();
                    subView.mpText.innerHTML = mp + "";
                }
            }
        };
        refreshView(state,subView);
        game.qhly_changeViewSkin(subView);
        showPage(page);
    };
    game.qhly_open=function(name,page,ingame){
        if(name.indexOf('gz_') == 0){
            if(lib.config.qhly_guozhan===false || get.mode() != 'guozhan' || !game.qhly_hasGuozhanSkin(name)){
                name = name.slice(3);
            }
        }
        if(lib.config.qhly_newui !== false && (lib.config.qhly_currentViewSkin != 'jingdian')){
            game.qhly_open_new(name,page?page:'skin',ingame);
            return;
        }
        //game.pause();
        if(!lib.config.qhly_huaijiu_mentioned){
            alert("【经典怀旧】UI套装已经停止维护，如果需要更好的UI体验，建议切换到别的UI套装。");
            game.saveConfig('qhly_huaijiu_mentioned',true);
        }
        var background = ui.create.div('.qhly-chgskin-background',document.body);
        background.animate('start');
        var avatar = ui.create.div('.qhly-skin',background);
        //avatar.setBackground(name,'character');
        avatar.hide();
        ui.create.div('.qhly-biankuang',avatar);
        var belowTitle = ui.create.div('.qhly-belowtitle',avatar);
        belowTitle.innerHTML = get.translation(name);
        var headTitle = ui.create.div('.qhly-headtitle',avatar);
        headTitle.innerHTML = "标准皮肤";
        var leftArrow = ui.create.div('.qhly-leftbutton',avatar);
        var rightArrow = ui.create.div('.qhly-rightbutton',avatar);
        var okButton = ui.create.div('.qhly-okbutton',avatar);
        var infobk = ui.create.div('.qhly-text-bk',background);
        var infoText = ui.create.div('.qhly-text',infobk);
        var levelText = ui.create.div('.qhly-level',avatar);
        var viewAbstract = {
            skin:lib.config.qhly_skinset.skin[name],
            index:0,
            skinCount:1,
            skinList:[false],
            //refreshing:false,
        };
        okButton.listen(function(){
            game.qhly_setCurrentSkin(name,viewAbstract.skin);
            //game.resume();
            background.delete();
        });
        var refreshView = function(name,viewAbstract){
            avatar.show();
            _status.qhly_viewRefreshing = true;
            game.qhly_setCurrentSkin(name,viewAbstract.skin,function(){
                _status.qhly_viewRefreshing = false;
            });
            //viewAbstract.refreshing = true;
            if(viewAbstract.skin){
                avatar.setBackgroundImage(game.qhly_getSkinFile(name,viewAbstract.skin));
            }else{
                avatar.setBackground(name,'character');
            }
            if(viewAbstract.index == 0){
                leftArrow.hide();
            }else{
                leftArrow.show();
            }
            if(viewAbstract.index >= viewAbstract.skinCount-1){
                rightArrow.hide();
            }else{
                rightArrow.show();
            }
            var sname;
            if(viewAbstract.skin){
                sname = game.qhly_getSkinName(name,viewAbstract.skin,null);
            }else{
                sname = "标准皮肤";
            }
            headTitle.innerHTML = sname;
            var info = game.qhly_getSkinInfo(name,viewAbstract.skin,null);
            if(viewAbstract.skin){
                var title;
                if(lib.qhly_level[name+"_"+viewAbstract.skin]){
                    title = lib.qhly_level[name+"_"+viewAbstract.skin];
                }
                if(!title || title.length == 0){
                    title = info.level ? info.level:info.title;
                }
                if(title){
                    levelText.show();
                    if(['精品','史诗','传说','限定'].contains(title)){
                        var obj = {
                            '精品':'jingpin',
                            '史诗':'shishi',
                            '传说':'chuanshuo',
                            '限定':'xianding'
                        };
                        levelText.innerHTML = '';
                        levelText.setBackgroundImage('extension/千幻聆音/level_'+obj[title]+".png");
                    }else{
                        levelText.innerHTML = title;
                        levelText.setBackgroundImage('');
                    }
                }else{
                    levelText.hide();
                }
            }else{
                levelText.hide();
            }
            var str = "技能语音：<br><br>";
            if(!window.qhly_audio_which){
                window.qhly_audio_which = {};
            }
            var skills = get.character(name,3).slice(0);
            if(skills){
                skills.remove('xwjh_audiozhenwang');
                for(var skill of skills){
                    var infoString = "";
                    window.qhly_audio_which[skill] = 1;
                    infoString += "【";
                    infoString += get.translation(skill);
                    infoString += "】";
                    if(window.qhly_TrySkillAudio){
                        infoString += "<a style='color:#ffffff' href=\"javascript:window.qhly_TrySkillAudio('"+skill+"',{name:'"+name+"'},null,window.qhly_audio_which[\'"+skill+"\'],\'"+viewAbstract.skin+"\');window.qhly_audio_which[\'"+skill+"\']++;\"><img style=height:22px src="+lib.assetURL+get.qhly_getCurrentViewSkinValue('skinPagePlayAudioButtonImage','extension/千幻聆音/qhly_pic_playaudiobutton.png')+"></a><br>";
                    }
                    infoString += "<br><br>";
                    str += infoString;
                }
            }
            str += "【阵亡】";
            str += "<a style='color:#ffffff' href=\"javascript:window.qhly_playDieAudio(\'"+name+"\');\"><img style=height:22px src="+lib.assetURL+"extension/千幻聆音/qhly_pic_playaudiobutton.png></a><br>";
            if(info.info){
                str += info.info;
            }
            if(!viewAbstract.skin){
                str += get.qhly_characterInfo(name);
            }
            infoText.innerHTML = str;
            lib.setScroll(infoText);
        };
        var finishView = function(name,viewAbstract){
            refreshView(name,viewAbstract);
            leftArrow.listen(function(){
                viewAbstract.index--;
                if(viewAbstract.index <= 0){
                    viewAbstract.index = 0;
                }
                if(viewAbstract.index >= viewAbstract.skinCount-1){
                    viewAbstract.index = viewAbstract.skinCount-1;
                }
                viewAbstract.skin = viewAbstract.skinList[viewAbstract.index];
                refreshView(name,viewAbstract);
            });
            rightArrow.listen(function(){
                viewAbstract.index++;
                if(viewAbstract.index <= 0){
                    viewAbstract.index = 0;
                }
                if(viewAbstract.index >= viewAbstract.skinCount-1){
                    viewAbstract.index = viewAbstract.skinCount-1;
                }
                viewAbstract.skin = viewAbstract.skinList[viewAbstract.index];
                refreshView(name,viewAbstract);
            });
            levelText.listen(function(){
                background.delete();
                var string = "请输入皮肤的等级";
                if(levelText.innerHTML){
                    string = "###"+string+"###"+levelText.innerHTML;
                }
                game.prompt(string,false,function(str){
                    lib.qhly_level[name+"_"+viewAbstract.skin] = str;
                    game.saveConfig('qhly_level',lib.qhly_level);
                    game.qhly_open(name);
                });
            });
        };
        game.qhly_getSkinList(name,function(success,skinList){
            if(!success){
                viewAbstract.skinCount = 1;
                viewAbstract.skinList = [false];
                viewAbstract.skin = false;
                viewAbstract.index = 0;
                finishView(name,viewAbstract);
                return;
            }else{
                viewAbstract.skinCount = 1 + skinList.length;
                viewAbstract.skinList = [false];
                viewAbstract.skinList.addArray(skinList);
                if(viewAbstract.skin){
                    for(var i=0;i<viewAbstract.skinList.length;i++){
                        if(viewAbstract.skinList[i] == viewAbstract.skin){
                            viewAbstract.index = i;
                            break;
                        }
                    }
                }else{
                    viewAbstract.index = 0;
                }
                finishView(name,viewAbstract);
            }
        },false,true);
    };

    //修改人物卡片界面，显示换肤按钮。
    var originCharacterCardFunciton = ui.click.charactercard;
    var replaceCharacterCardFunction = function(){
        if(lib.config.qhly_replaceCharacterCard2 != 'nonereplace' && lib.config.qhly_replaceCharacterCard2 != 'nonereplace2'){
            if(arguments[1]){
                _status.qh_sourceNode = arguments[1];
                _status.qh_sourceNodeName = arguments[0];
            }else{
                delete _status.qh_sourceNode;
            }
            if(arguments[4]){
                if(lib.config.qhly_replaceCharacterCard2 == 'window'){
                    game.resume2();
                    game.qhly_open_small(arguments[0],null,arguments[4]);
                }else if(lib.config.qhly_currentViewSkin != 'jingdian'){
                    game.qhly_open_new(arguments[0],lib.config.qhly_doubledefaultpage?lib.config.qhly_doubledefaultpage:'skill',arguments[4]);
                }else{
                    game.qhly_open(arguments[0]);
                }
            }else{
                if(lib.config.qhly_currentViewSkin != 'jingdian'){
                    game.qhly_open_new(arguments[0],lib.config.qhly_listdefaultpage?lib.config.qhly_listdefaultpage:'introduce');
                }else{
                    game.qhly_open(arguments[0]);
                }
            }
        }else{
            originCharacterCardFunciton.apply(this,arguments);
            var name = arguments[0];
            if(ui.window.lastChild && ui.window.lastChild.lastChild){
                var layer = ui.window.lastChild;
                var largeButton = ui.create.div('.qhly-skin-button',ui.window.lastChild.lastChild);
                largeButton.addEventListener('click',function(){
                    game.qhly_open(name);
                    layer.click();
                });
            }
        }
    };
    if(lib.config.qhly_replaceCharacterCard2 != 'nonereplace2' ){
        if(Object.defineProperty){
            Object.defineProperty(ui.click,'charactercard',{
                get: function() {
                    return replaceCharacterCardFunction;
                },
                set: function(value) {
                    if(!lib.config.qhly_mentionConflitCC){
                        var ret = confirm("你安装的扩展中，有扩展试图修改ui.click.charactercard，此行为与《千幻聆音》冲突，你可以关闭有冲突的功能。若你点击【取消】，将不再对此消息进行提示。");
                        if(!ret){
                            game.saveConfig('qhly_mentionConflitCC',true);
                        }
                    }
                },
                enumerable: true,
                configurable: true,
            });
        }else{
            ui.click.charactercard = replaceCharacterCardFunction;
        }
    }

    //修改人物信息界面，添加换肤按钮。
    /*
    var normalNodeIntro = get.nodeintro;
    get.nodeintro=function(node,simple,evt){
        var ret = normalNodeIntro.apply(this,arguments);
        if(!ret)return ret;
        if(node.classList.contains('player') && !node.name){
            return ret;
        }
        if(node.name){
            if(get.character(node.name)){
                var zhu = ui.create.div('.qhly-skin-intro-button-zhu',ret);
                zhu.innerHTML = "<img style=width:30px src="+lib.assetURL+"extension/千幻聆音/qhly_skin_bt1.png>";
                zhu.listen(function(){
                    game.qhly_open(node.name);
                });
            }
        }
        if(node.name2 && get.character(node.name2)){
            var fu = ui.create.div('.qhly-skin-intro-button-fu',ret);
            fu.innerHTML = "<img style=width:30px src="+lib.assetURL+"extension/千幻聆音/qhly_skin_bt2.png>";
            fu.listen(function(){
                game.qhly_open(node.name2);
            });
        }
        return ret;
    };*/

    //自动换肤逻辑。
    game.qhly_autoChangeSkin=function(){
        if(lib.config.qhly_autoChangeSkin && lib.config.qhly_autoChangeSkin != 'close'){
            _status.qhly_changeSkinFunc = function(){
                if(game && game.players && game.players.length){
                    var pls = game.players.slice(0);
                    var names = [];
                    for(var p of pls){
                        if(p.name)names.push(p.name);
                        if(p.name2)names.push(p.name2);
                    }
                    names.randomSort();
                    var func = function(arr,f){
                        if(arr.length == 0)return;
                        var n = arr.shift();
                        game.qhly_getSkinList(n,function(ret,list){
                            if(list && list.length){
                                var sk = game.qhly_getSkin(n);
                                if(list.contains(sk)){
                                    list.remove(sk);
                                }
                                if(sk){
                                    list.push(false);
                                }
                                list = list.filter(function(current){
                                    return !game.qhly_skinIsBanned(n,current);
                                });
                                if(list.length == 0){
                                    f(arr,f);
                                    return;
                                }
                                //game.me.say(get.translation(n)+sk+"....."+get.translation(list));
                                game.qhly_setCurrentSkin(n,list.randomGet());
                                game.qhly_autoChangeSkin();
                            }else{
                                f(arr,f);
                            }
                        },false);
                    };
                    func(names,func);
                }
            };
            setTimeout(_status.qhly_changeSkinFunc,parseInt(lib.config.qhly_autoChangeSkin)*1000);
        }
    };
    lib.skill._qhly_autoc={
        forced:true,
        popup:false,
        trigger:{
            global:'gameStart',
        },
        filter:function(event,player){
            return !_status.qhly_autoChangeSkinSetted && lib.config.qhly_autoChangeSkin && lib.config.qhly_autoChangeSkin != 'close';
        },
        content:function(){
            _status.qhly_autoChangeSkinSetted = true;
            game.qhly_autoChangeSkin();
        }
    };
    lib.skill._qhly_randskin={
        forced:true,
        popup:false,
        trigger:{
            global:'gameStart',
        },
        filter:function(event,player){
            return lib.config.qhly_randskin;
        },
        content:function(){
            if(player.name || player.name1){
                game.qhly_getSkinList(player.name ? player.name:player.name1,function(ret,list){
                    if(list && list.length){
                        list.push(false);
                        list = list.filter(function(current){
                            return !game.qhly_skinIsBanned(player.name ? player.name:player.name1,current);
                        });
                        if(list && list.length)
                        game.qhly_setCurrentSkin(player.name,list.randomGet());
                    }
                },false);
            }
            if(player.name2){
                game.qhly_getSkinList(player.name2,function(ret,list){
                    if(list && list.length){
                        list.push(false);
                        list = list.filter(function(current){
                            return !game.qhly_skinIsBanned(player.name2,current);
                        });
                        if(list && list.length)
                        game.qhly_setCurrentSkin(player.name2,list.randomGet());
                    }
                },false);
            }
        }
    };
    lib.qhly_relativePos=function(pos1,pos2){
        return {
            x:pos2.x-pos1.x,
            y:pos2.y-pos1.y
        };
    };
    lib.qhly_addPos=function(pos1,pos2){
        return {
            x:pos1.x+pos2.x,
            y:pos1.y+pos2.y
        };
    };
    game.qhly_addDrag=function(button,parent,dragCallback){
        var state = {};
        button.style.transition = 'transform 0s';
        var boundControl=function(pos){
            var rect = game.qhly_handleRect(parent.getBoundingClientRect());
            var rectb = game.qhly_handleRect(button.getBoundingClientRect());
            var x = pos.x;
            var y = pos.y;
            if(x < rect.left){
                x = rect.left;
            }
            if(x + rectb.width > rect.left + rect.width){
                x = rect.left + rect.width - rectb.width;
            }
            if(y < rect.top){
                y = rect.top;
            }
            if(y + rectb.height > rect.top + rect.height){
                y = rect.top + rect.height - rectb.height;
            }
            return {x:x,y:y};
        };
        var onMouseDown=function(event){
            var pos = lib.qhly_getEventPosition(event);
            state.originPos = pos;
            var rect = game.qhly_handleRect(button.getBoundingClientRect());
            state.originButtonPos = {x:rect.left,y:rect.top};
            state.isDragging = true;
        };
        var onMouseMove=function(event){
            if(state.isDragging){
                state.moved = true;
                var pos = lib.qhly_getEventPosition(event);
                var cpos = lib.qhly_relativePos(state.originPos,pos);
                var npos = lib.qhly_addPos(cpos,state.originButtonPos);
                npos = boundControl(npos);
                var rect = game.qhly_handleRect(parent.getBoundingClientRect());
                var fpos = lib.qhly_relativePos({x:rect.left,y:rect.top},npos);
                button.style.left = fpos.x.toFixed(2)+'px';
                button.style.top = fpos.y.toFixed(2)+'px';
                button.style.bottom = '';
                button.style.right = '';
            }
        };
        var onMouseUp=function(event){
            if(state.isDragging){
                if(state.moved){
                    var pos = lib.qhly_getEventPosition(event);
                    var cpos = lib.qhly_relativePos(state.originPos,pos);
                    var npos = lib.qhly_addPos(cpos,state.originButtonPos);
                    npos = boundControl(npos);
                    var rect = game.qhly_handleRect(parent.getBoundingClientRect());
                    var fpos = lib.qhly_relativePos({x:rect.left,y:rect.top},npos);
                    button.style.left = fpos.x.toFixed(2)+'px';
                    button.style.top = fpos.y.toFixed(2)+'px';
                    button.style.bottom = '';
                    button.style.right = '';
                    delete state.moved;
                    button.qhly_moveTime = (new Date()).valueOf();
                    if(dragCallback){
                        dragCallback({left:button.style.left,top:button.style.top,bottom:'',right:''},button);
                    }
                }
            }
            delete state.isDragging;
        }
        if(lib.config.touchscreen){
            button.addEventListener('touchstart',onMouseDown);
            button.addEventListener('touchend',onMouseUp);
            button.addEventListener('touchcancel',onMouseUp);
            button.addEventListener('touchmove',onMouseMove);
        }else{
            button.addEventListener('mousedown',onMouseDown);
            button.addEventListener('mouseup',onMouseUp);
            button.addEventListener('mouseleave',onMouseUp);
            button.addEventListener('mousemove',onMouseMove);
        }
    };
    lib.skill._qhly_addButton={
        forced:true,
        popup:false,
        trigger:{
            global:'gameStart',
        },
        filter:function(event,player){
            return lib.config.qhly_skinButton;
        },
        content:function(){
            var dragCallback=function(style,node){
                if(lib.config.qhly_dragButtonPosition !== 'no'){
                    var arr = game.qhly_getAllButtons();
                    for(var bt of arr){
                        for(var s in style){
                            bt.style[s] = style[s];
                        }
                    }
                    game.saveConfig('qhly_dragButtonPositionAll',style);
                }else{
                    var key = 'qhly_dragButtonPositionOf_'+node.qhly_chname;
                    var skin = game.qhly_getSkin(node.qhly_chname);
                    if(skin){
                        key = key + '_'+skin;
                    }
                    game.saveConfig(key,style);
                }
            };
            if(player.name1 || player.name){
                var button = ui.create.div('.qhly_skinplayerbutton',player.node.avatar);
                button.qhly_chname = player.name1 ? player.name1 : player.name;
                if(lib.config.qhly_dragButtonPosition !== 'no'){
                    if(lib.config.qhly_dragButtonPositionAll){
                        for(var s in lib.config.qhly_dragButtonPositionAll){
                            button.style[s] = lib.config.qhly_dragButtonPositionAll[s];
                        }
                    }
                }else{
                    var key = 'qhly_dragButtonPositionOf_'+button.qhly_chname;
                    var skin = game.qhly_getSkin(button.qhly_chname);
                    if(skin){
                        key = key + '_'+skin;
                    }
                    if(lib.config[key]){
                        for(var s in lib.config[key]){
                            button.style[s] = lib.config[key][s];
                        }
                    }
                }
                player.node.qhly_skinButton1 = button;
                button.listen(function(){
                    if(button.qhly_moveTime){
                        var ctime = (new Date()).valueOf();
                        if(ctime - button.qhly_moveTime <= 500){
                            return;
                        }
                    }
                    if(lib.config.qhly_smallwiningame){
                        game.qhly_open_small(player.name1 ? player.name1 : player.name,player,player);
                    }else{
                        game.qhly_open(player.name1 ? player.name1 : player.name,'skin',player);
                    }
                });
                if(lib.config.qhly_dragButton){
                    game.qhly_addDrag(button,player.node.avatar,dragCallback);
                }
                if(lib.config.qhly_buttons_hide){
                    button.hide();
                }
            }
            if(player.name2){
                var button = ui.create.div('.qhly_skinplayerbutton2',player.node.avatar2);
                button.qhly_chname = player.name2;
                player.node.qhly_skinButton2 = button;
                button.listen(function(){
                    if(lib.config.qhly_smallwiningame){
                        game.qhly_open_small(player.name2,player,player);
                    }else{
                        game.qhly_open(player.name2,'skin',player);
                    }
                });
                if(lib.config.qhly_dragButton){
                    game.qhly_addDrag(button,player.node.avatar2,dragCallback);
                }
                if(lib.config.qhly_buttons_hide){
                    button.hide();
                }
            }
            if(player == game.me && !_status.qhly_initOk){
                _status.qhly_initOk = true;
                _status.qhly_buttonShowing = !lib.config.qhly_buttons_hide;
                ui.create.system("显示/隐藏皮肤按钮",function(){
                    if(_status.qhly_buttonShowing){
                        game.qhly_hideButtons();
                    }else{
                        game.qhly_showButtons();
                    }
                },true);
            }
        }
    };
    game.qhly_getAllButtons=function(){
        var btarr = [];
        if(game && game.players){
            var arr = game.players.slice(0);
            arr.addArray(game.dead);
            for(var p of arr){
                if(p.node.qhly_skinButton1){
                    btarr.add(p.node.qhly_skinButton1);
                }
                if(p.node.qhly_skinButton2){
                    btarr.add(p.node.qhly_skinButton2);
                }
            }
        }
        return btarr;
    };
    game.qhly_hideButtons=function(){
        game.saveConfig('qhly_buttons_hide',true);
        if(game && game.players){
            var arr = game.players.slice(0);
            arr.addArray(game.dead);
            for(var p of arr){
                if(p.node.qhly_skinButton1){
                    p.node.qhly_skinButton1.style.transition = '';
                    p.node.qhly_skinButton1.hide();
                }
                if(p.node.qhly_skinButton2){
                    p.node.qhly_skinButton2.style.transition = '';
                    p.node.qhly_skinButton2.hide();
                }
            }
        }
        _status.qhly_buttonShowing = false;
    };
    game.qhly_showButtons=function(){
        game.saveConfig('qhly_buttons_hide',false);
        if(game && game.players){
            var arr = game.players.slice(0);
            arr.addArray(game.dead);
            for(var p of arr){
                if(p.node.qhly_skinButton1){
                    p.node.qhly_skinButton1.show();
                    if(lib.config.qhly_dragButton){
                        p.node.qhly_skinButton1.style.transition = 'transform 0s';
                    }
                }
                if(p.node.qhly_skinButton2){
                    p.node.qhly_skinButton2.show();
                    if(lib.config.qhly_dragButton){
                        p.node.qhly_skinButton2.style.transition = 'transform 0s';
                    }
                }
            }
        }
        _status.qhly_buttonShowing = true;
    };

    game.qhly_checkFileExist('extension/千幻聆音/music/',function(s){
        if(s && game.getFileList){
            game.getFileList('extension/千幻聆音/music/',function(folders,files){
                if(files){
                    for(var f of files){
                        if(f.endsWith('.mp3')){
                            var path = 'extension/千幻聆音/music/'+f;
                            var name = game.qhly_earse_ext(f);
                            lib.qhlyMusic[path] = {
                                name:name,
                                path:path
                            };
                        }
                    }
                    game.qhly_refreshBgmConfigs();
                }
            });
        }
    });

},precontent:function(){
    window.qhly_version = 5;
    var cssUrl = lib.assetURL + 'extension/千幻聆音';
    lib.init.css(cssUrl, 'extension');
    lib.init.css(cssUrl, lib.config.qhly_viewskin_css ?lib.config.qhly_viewskin_css:'newui');
    window.qhly_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
    window.qhly_import_safe=function(func){
        try{
            func(lib,game,ui,get,ai,_status);
        }catch(e){
            alert("JS文件解析失败");
        }
    };
    lib.init.js( lib.assetURL + 'extension/千幻聆音/sanguoskininfo.js');
    window.qhly_audio_redirect = {

    };
},config:{
    /*
    "qhly_newui":{
        "name":"新UI",
        "intro":"打开此选项，将使用新版千幻UI。",
        "init":lib.config.qhly_newui === undefined ? true:lib.config.qhly_newui,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_newui',item);
            game.saveConfig('qhly_newui',item);
        }
    },*/
    "qhly_uishezhi":{
        "name":"<font size='5' color='blue'>UI设置》</font>",
        "clear":true,
    },
    "qhly_currentViewSkin":{
        "name":"UI套装",
        "intro":"设置UI套装样式。",
        "item":{},
        "init":lib.config.qhly_currentViewSkin === undefined ? 'xuanwujianghu':lib.config.qhly_currentViewSkin,
        onclick:function(item){
            if(lib.qhly_viewskin[item] && lib.qhly_viewskin[item].onchange){
                lib.qhly_viewskin[item].onchange();
            }
            game.saveConfig('qhly_currentViewSkin',item);
            game.saveConfig('extension_千幻聆音_qhly_currentViewSkin',item);
            if(confirm("是否重启游戏以应用新UI？")){
                game.reload();
            }
        }
    },
    "qhly_layoutFitX":{
        "name":"横向拉伸适应",
        "intro":"打开此选项后，若横向布局未铺满，将拉伸至铺满布局。",
        "init":lib.config.qhly_layoutFitX === undefined ? false : lib.config.qhly_layoutFitX,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_layoutFitX',item);
            game.saveConfig('qhly_layoutFitX',item);
        }
    },
    "qhly_layoutFitY":{
        "name":"纵向拉伸适应",
        "intro":"打开此选项后，若纵向布局未铺满，将拉伸至铺满布局。",
        "init":lib.config.qhly_layoutFitY === undefined ? false : lib.config.qhly_layoutFitY,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_layoutFitY',item);
            game.saveConfig('qhly_layoutFitY',item);
        }
    },
    "qhly_vMiddle":{
        "name":"纵向居中",
        "intro":"打开此选项后，在【水墨龙吟】【海克斯科技】套装中，技能和介绍字数较少时将居中显示。",
        "init":lib.config.qhly_vMiddle === undefined ? true : lib.config.qhly_vMiddle,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_vMiddle',item);
            game.saveConfig('qhly_vMiddle',item);
        }
    },
    "qhly_fontsize1":{
        "name":"正文字号",
        "intro":"打开此选项，可调整字号（仅对新UI生效）。",
        "init":lib.config.qhly_fontsize1 === undefined ? "5" : lib.config.qhly_fontsize1,
        "item":{
            "1":"很微小",
            "2":"微小",
            "3":"较小",
            "4":"小",
            "5":"中",
            "6":"大",
            "7":"较大",
            "8":"巨大",
            "9":"超级大",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_fontsize1',item);
            game.saveConfig('qhly_fontsize1',item);
        }
    },
    "qhly_gongnengshezhi":{
        "name":"<font size='5' color='blue'>功能设置》</font>",
        "clear":true,
    },
    "qhly_replaceCharacterCard2":{
        "name":"替换默认资料卡",
        "intro":"打开此选项，将使用千幻聆音的资料卡替换无名杀默认的资料卡。",
        "init":lib.config.qhly_replaceCharacterCard2 === undefined ? 'info':lib.config.qhly_replaceCharacterCard2,
        "item":{
            'nonereplace':'不替换',
            'nonereplace2':"系统资料卡不显示换肤",
            'info':'千幻资料卡',
            'window':'千幻皮肤小窗'
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_replaceCharacterCard2',item);
            game.saveConfig('qhly_replaceCharacterCard2',item);
        }
    },
    "qhly_nolihuiOrigin":{
        "name":"无立绘皮肤显示原皮",
        "intro":"设置此选项，支持立绘的套装中，没有立绘资源的皮肤会显示原皮的立绘。",
        "init":lib.config.qhly_nolihuiOrigin === undefined ?false:lib.config.qhly_nolihuiOrigin,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_nolihuiOrigin',item);
            game.saveConfig('qhly_nolihuiOrigin',item);
        }
    },
    "qhly_smallwiningame":{
        "name":"小窗口换皮肤",
        "intro":"打开此选项，游戏内点击皮肤图标将弹出小窗口。",
        "init":lib.config.qhly_smallwiningame === undefined ? false:lib.config.qhly_smallwiningame,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_smallwiningame',item);
            game.saveConfig('qhly_smallwiningame',item);
        }
    },
    "qhly_smallwindowstyle":{
        "name":"小窗口样式",
        "intro":"可切换小窗口的样式。",
        "init":lib.config.qhly_smallwindowstyle === undefined ? 'dragon':lib.config.qhly_smallwindowstyle,
        "item":{
            'dragon':'龙头',
            'common':'经典',
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_smallwindowstyle',item);
            game.saveConfig('qhly_smallwindowstyle',item);
        }
    },
    "qhly_dragonsize":{
        "name":"龙头小窗口大小",
        "intro":"设置小窗口的大小（仅对龙头样式有效）",
        "init":lib.config.qhly_dragonsize === undefined ? '1.00':lib.config.qhly_dragonsize,
        "item":{
            '0.45':'超级小',
            '0.55':'特小',
            '0.60':'小',
            '0.80':'较小',
            '1.00':'适中',
            '1.20':'较大',
            '1.50':'大',
            '1.65':'特大',
            '1.80':'超级大',
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_dragonsize',item);
            game.saveConfig('qhly_dragonsize',item);
        }
    },
    "qhly_dragonlocation":{
        "name":"龙头小窗口位置",
        "intro":"设置小窗口的位置（仅对龙头样式有效）",
        "init":lib.config.qhly_dragonlocation === undefined ? 'center':lib.config.qhly_dragonlocation,
        "item":{
            'head':'头像上',
            'center':'正中央',
            'drag':'可拖曳',
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_dragonlocation',item);
            game.saveConfig('qhly_dragonlocation',item);
        }
    },
    "qhly_smallwinclosewhenchange":{
        "name":"自动关闭小窗口",
        "intro":"打开此选项，在小窗口内更换皮肤后，小窗口自动关闭。",
        "init":lib.config.qhly_smallwinclosewhenchange === undefined ? false:lib.config.qhly_smallwinclosewhenchange,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_smallwinclosewhenchange',item);
            game.saveConfig('qhly_smallwinclosewhenchange',item);
        }
    },
    "qhly_recordWin":{
        "name":"展示战绩",
        "intro":"打开此选项，可以在千幻资料页查看战绩。",
        "init":lib.config.qhly_recordWin === undefined ? false:lib.config.qhly_recordWin,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_recordWin',item);
            game.saveConfig('qhly_recordWin',item);
        }
    },
    "qhly_randskin":{
        "name":"随机皮肤",
        "intro":"打开此选项，游戏开始时，会随机更换皮肤。",
        "init":lib.config.qhly_randskin === undefined ? false:lib.config.qhly_randskin,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_randskin',item);
            game.saveConfig('qhly_randskin',item);
        }
    },
    "qhly_extcompat":{
        "name":"扩展兼容",
        "intro":"打开此选项，千幻聆音将在一定程度上兼容大部分带有阵亡配音的扩展。如果不玩扩展武将，关闭此选项可提升性能。",
        "init":lib.config.qhly_extcompat === undefined ? true:lib.config.qhly_extcompat,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_extcompat',item);
            game.saveConfig('qhly_extcompat',item);
        }
    },
    "qhly_lutou":{
        "name":"适配露头",
        "intro":"打开此选项，将外框调整适配露头的情况。",
        "init":lib.config.qhly_lutou === undefined ? false:lib.config.qhly_lutou,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_lutou',item);
            game.saveConfig('qhly_lutou',item);
        }
    },
    "qhly_skinButton":{
        "name":"头像显示换肤按钮",
        "intro":"打开此选项，人物头像上会出现换肤按钮。（重启后生效）",
        "init":lib.config.qhly_skinButton === undefined ? false:lib.config.qhly_skinButton,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_skinButton',item);
            game.saveConfig('qhly_skinButton',item);
        }
    },
    "qhly_showrarity":{
        "name":"显示武将等阶",
        "intro":"打开此选项，资料页内会显示武将等阶。",
        "init":lib.config.qhly_showrarity === undefined ? false:lib.config.qhly_showrarity,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_showrarity',item);
            game.saveConfig('qhly_showrarity',item);
        }
    },
    'qhly_dragButton':{
        "name":"换肤按钮可拖曳",
        "intro":"打开此选项，人物头像上的换肤按钮可以拖动位置。（重启后生效）",
        "init":lib.config.qhly_dragButton === undefined ? false:lib.config.qhly_dragButton,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_dragButton',item);
            game.saveConfig('qhly_dragButton',item);
        }
    },
    'qhly_dragButtonPosition':{
        "name":"换肤按钮拖曳同步",
        "intro":"如选择同步，拖动一名角色的换肤按钮时，其他角色将联动拖动。（重启后生效）",
        item:{
            'no':"不同步",
            'yes':'同步',
        },
        "init":lib.config.qhly_dragButtonPosition === undefined ? 'yes':lib.config.qhly_dragButtonPosition,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_dragButtonPosition',item);
            game.saveConfig('qhly_dragButtonPosition',item);
        }
    },
    "qhly_notbb":{
        "name":"防啰嗦功能",
        "intro":"打开此选项后，在固定的时间内，相同的技能不会触发多次语音。",
        item:{
            'none':'关闭',
            '2':'2秒',
            '3':'3秒',
            '4':'4秒',
            '5':'5秒',
            '6':'6秒',
            '7':'7秒',
            '8':'8秒',
            '9':'9秒',
            '10':'10秒',
        },
        "init":lib.config.qhly_notbb === undefined ? 'none' : lib.config.qhly_notbb,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_notbb',item);
            game.saveConfig('qhly_notbb',item);
        }
    },
    "qhly_notbb_range":{
        "name":"防啰嗦范围",
        "intro":"设置防啰嗦的范围。",
        item:{
            'skill':'相同技能',
            'character':'相同角色',
            'all':"所有角色",
        },
        "init":lib.config.qhly_notbb_range === undefined ? 'skill' : lib.config.qhly_notbb_range,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_notbb_range',item);
            game.saveConfig('qhly_notbb_range',item);
        }
    },
    "qhly_originSkinPath":{
        "name":"本体武将皮肤目录",
        "intro":"可设置本体武将的皮肤目录。",
        "init":lib.config.qhly_originSkinPath === undefined ? "extension/千幻聆音/sanguoskin/" : lib.config.qhly_originSkinPath,
        "item":{
            "extension/千幻聆音/sanguoskin/":"千幻聆音目录",
            "extension/千幻聆音/sanguolutouskin/":"千幻露头目录",
            "image/skin/":"本体目录",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_originSkinPath',item);
            game.saveConfig('qhly_originSkinPath',item);
            var s = confirm("是否重启游戏以应用新配置？");
            if(s){
                game.reload();
            }
        }
    },
    "qhly_autoChangeSkin":{
        "name":"自动切换皮肤",
        "intro":"打开此选项，皮肤会自动随时间随机切换。",
        "init":lib.config.qhly_autoChangeSkin === undefined ? "close" : lib.config.qhly_autoChangeSkin,
        "item":{
            "close":"关闭",
            "10":"每10秒",
            "30":"每半分钟",
            "60":"每1分钟",
            "120":"每2分钟",
            "600":"每10分钟",
        },
        onclick:function(item){
            var open = false;
            if(lib.config.qhly_autoChangeSkin == 'close' || !lib.config.qhly_autoChangeSkin){
                if(item !== 'close'){
                    open = true;
                }
            }
            game.saveConfig('extension_千幻聆音_qhly_autoChangeSkin',item);
            game.saveConfig('qhly_autoChangeSkin',item);
            if(open){
                if(game.qhly_autoChangeSkin){
                    game.qhly_autoChangeSkin();
                }else{
                    alert("打开扩展才生效。");
                }
            }else{
                if(_status.qhly_changeSkinFunc){
                    clearTimeout(_status.qhly_changeSkinFunc);
                }
            }
        }
    },
    "qhly_listdefaultpage":{
        "name":"列表进入默认页面",
        "intro":"可设置通过武将列表进入千幻聆音目录时，默认显示的页面。",
        "init":lib.config.qhly_listdefaultpage === undefined ? "introduce" : lib.config.qhly_listdefaultpage,
        "item":{
            "introduce":"人物简介",
            "skill":"技能描述",
            "skin":"皮肤信息",
            "config":"相关配置",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_listdefaultpage',item);
            game.saveConfig('qhly_listdefaultpage',item);
        }
    },
    "qhly_doubledefaultpage":{
        "name":"双击默认页面",
        "intro":"可设置通过在游戏内双击武将头像进入千幻聆音目录时，默认显示的页面。",
        "init":lib.config.qhly_doubledefaultpage === undefined ? "skill" : lib.config.qhly_doubledefaultpage,
        "item":{
            "introduce":"人物简介",
            "skill":"技能描述",
            "skin":"皮肤信息",
            "config":"相关配置",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_doubledefaultpage',item);
            game.saveConfig('qhly_doubledefaultpage',item);
        }
    },
    "qhly_guozhan":{
        "name":"国战皮肤",
        "intro":"打开此选项后，国战模式下，皮肤将从gz_开头的文件夹读取。",
        "init":lib.config.qhly_guozhan === undefined ? true : lib.config.qhly_guozhan,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_guozhan',item);
            game.saveConfig('qhly_guozhan',item);
        }
    },
    "qhly_skinconfig":{
        "name":"皮肤配置",
        "intro":"打开此选项后，可以进行一些额外的皮肤配置。",
        "init":lib.config.qhly_skinconfig === undefined ? false : lib.config.qhly_skinconfig,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_skinconfig',item);
            game.saveConfig('qhly_skinconfig',item);
        }
    },
    "qhly_editmode":{
        "name":"编辑模式",
        "intro":"打开此选项后，在千幻详情页可以编辑武将台词。",
        "init":lib.config.qhly_editmode === undefined ? false : lib.config.qhly_editmode,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_editmode',item);
            game.saveConfig('qhly_editmode',item);
        }
    },
    "qhly_skillingame":{
        "name":"显示对局技能",
        "intro":"打开此选项后，对局中查看武将技能界面时，将显示对局中的技能。",
        "init":lib.config.qhly_skillingame === undefined ? false : lib.config.qhly_skillingame,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_skillingame',item);
            game.saveConfig('qhly_skillingame',item);
        }
    },
    "qhly_keymarkopen":{
        "name":"技能关键字高亮",
        "intro":"打开此选项后，技能中相关关键字将会被高亮。",
        "init":lib.config.qhly_keymarkopen === undefined ? false : lib.config.qhly_keymarkopen,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_keymarkopen',item);
            game.saveConfig('qhly_keymarkopen',item);
            if(item){
                var ori = lib.config.qhly_keymark;
                if(!ori){
                    ori = "锁定技:blue;限定技:orange;觉醒技:red;使命技:gold;#出牌阶段:#00FF00;#摸牌阶段:#00FF00;#弃牌阶段:#00FF00;#准备阶段:#00FF00;#结束阶段:#00FF00;";
                }
                game.qhly_editDialog("关键字高亮设置","#开头为全部高亮，否则为首次出现高亮。",ori,function(value,dialog){
                    value = value.replaceAll("：",":");
                    value = value.replaceAll("；",";");
                    value = value.replaceAll("\n","");
                    value = value.replaceAll("\r","");
                    value = value.replaceAll(" ","");
                    game.saveConfig("qhly_keymark",value);
                    dialog.delete();
                },function(dialog){
                    return true;
                });
            }
        }
    },
    "qhly_yinxiaoshezhi":{
        "name":"<font size='5' color='blue'>音效设置》</font>",
        "clear":true,
    },
    "qhly_closeVoice":{
        "name":"关闭点击音效",
        "intro":"打开此选项，可关闭点击音效。",
        "init":lib.config.qhly_closeVoice === undefined ? false : lib.config.qhly_closeVoice,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_closeVoice',item);
            game.saveConfig('qhly_closeVoice',item);
        }
    },
    "qhly_currentMusic":{
        "name":"设置BGM",
        "intro":"设置此选项，可以选择游戏背景音乐。将覆盖系统的配置。",
        "init":lib.config.qhly_currentMusic?lib.config.qhly_currentMusic:'system',
        "item":{
            'system':'跟随系统',
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_currentMusic',item);
            game.saveConfig('qhly_currentMusic',item);
        }
    },
    "qhly_enableCharacterMusic":{
        "name":"角色BGM",
        "intro":"打开此选项，可以在设置界面设置角色专属BGM，重启后生效。",
        "init":lib.config.qhly_enableCharacterMusic === undefined ? false:lib.config.qhly_enableCharacterMusic,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_enableCharacterMusic',item);
            game.saveConfig('qhly_enableCharacterMusic',item);
        }
    },
    "qhly_modemusicconfig":{
        "name":"<b>模式BGM</b>",
        "intro":"设置当前模式的BGM。",
        item:{
            'system':'不特别配置',
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_modemusicconfig',item);
            game.saveConfig('qhly_modemusicconfig_'+get.mode(),item);
        }
    },
    "qhly_shuimolingyin":{
        "name":"<font size='5' color='blue'>水墨龙吟相关设置》</font>",
        "clear":true,
    },
    "qhly_titlereplace":{
        "name":"武将旁小字内容",
        "intro":"设置此选项，可调整【水墨龙吟】界面武将旁小字的内容。",
        "init":lib.config.qhly_titlereplace === undefined ? "title" : lib.config.qhly_titlereplace,
        "item":{
            "title":"武将标题",
            "skin":"皮肤名",
            "pkg":"武将包名",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_titlereplace',item);
            game.saveConfig('qhly_titlereplace',item);
        }
    },
    "qhly_hanggaoxiufu":{
        "name":"技能名行高调整",
        "intro":"设置此选项，可调整【水墨龙吟】界面按钮的文字行高。",
        "init":lib.config.qhly_hanggaoxiufu === undefined ? "250" : lib.config.qhly_hanggaoxiufu,
        "item":{
            "250":"250%",
            "260":"260%",
            "270":"270%",
            "280":"280%",
            "290":"290%",
            "300":"300%",
            "310":"310%",
            "320":"320%",
            "330":"330%",
            "340":"340%",
            "350":"350%",
            "360":"360%",
            "370":"370%",
            "380":"380%",
            "390":"390%",
            "400":"400%"
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu',item);
            game.saveConfig('qhly_hanggaoxiufu',item);
        }
    },
    "qhly_hanggaoxiufu2":{
        "name":"按钮行高调整",
        "intro":"设置此选项，可调整【水墨龙吟】界面按钮的文字行高。",
        "init":lib.config.qhly_hanggaoxiufu2 === undefined ? "250" : lib.config.qhly_hanggaoxiufu2,
        "item":{
            "250":"250%",
            "260":"260%",
            "270":"270%",
            "280":"280%",
            "290":"290%",
            "300":"300%",
            "310":"310%",
            "320":"320%",
            "330":"330%",
            "340":"340%",
            "350":"350%",
            "360":"360%",
            "370":"370%",
            "380":"380%",
            "390":"390%",
            "400":"400%",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu2',item);
            game.saveConfig('qhly_hanggaoxiufu2',item);
        }
    },
    "qhly_shilizihao":{
        "name":"势力字号调整",
        "intro":"设置此选项，可调整【水墨龙吟】界面按钮的势力字号。",
        "init":lib.config.qhly_shilizihao === undefined ? "65" : lib.config.qhly_shilizihao,
        "item":{
            "50":"50",
            "55":"55",
            "60":"60",
            "65":"65",
            "70":"70",
            "75":"75",
            "80":"80",
            "85":"85",
            "90":"90",
            "95":"95",
            "100":"100",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_shilizihao',item);
            game.saveConfig('qhly_shilizihao',item);
        }
    },
    "qhly_lihuiSupport":{
        "name":"显示立绘",
        "intro":"设置此选项，【水墨龙吟】套装将显示立绘。",
        "init":lib.config.qhly_lihuiSupport === undefined ? false:lib.config.qhly_lihuiSupport,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_lihuiSupport',item);
            game.saveConfig('qhly_lihuiSupport',item);
        }
    },
    "qhly_hideShuimoCover":{
        "name":"隐藏墨迹",
        "intro":"设置此选项，【水墨龙吟】将隐藏上面的墨迹，以显示全皮肤。",
        "init":lib.config.qhly_hideShuimoCover === undefined ? false:lib.config.qhly_hideShuimoCover,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_hideShuimoCover',item);
            game.saveConfig('qhly_hideShuimoCover',item);
        }
    },
    "qhly_lolconfig":{
        "name":"<font size='5' color='blue'>海克斯科技相关设置》</font>",
        "clear":true,
    },
    "qhly_lolhanggaoxiufu":{
        "name":"技能名行高调整",
        "intro":"设置此选项，可调整【海克斯科技】界面按钮的文字行高。",
        "init":lib.config.qhly_lolhanggaoxiufu === undefined ? "250" : lib.config.qhly_lolhanggaoxiufu,
        "item":{
            "250":"250%",
            "260":"260%",
            "270":"270%",
            "280":"280%",
            "290":"290%",
            "300":"300%",
            "310":"310%",
            "320":"320%",
            "330":"330%",
            "340":"340%",
            "350":"350%",
            "360":"360%",
            "370":"370%",
            "380":"380%",
            "390":"390%",
            "400":"400%"
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_lolhanggaoxiufu',item);
            game.saveConfig('qhly_lolhanggaoxiufu',item);
        }
    },
    "qhly_lolhanggaoxiufu2":{
        "name":"按钮行高调整",
        "intro":"设置此选项，可调整【海克斯科技】界面按钮的文字行高。",
        "init":lib.config.qhly_lolhanggaoxiufu2 === undefined ? "250" : lib.config.qhly_lolhanggaoxiufu2,
        "item":{
            "250":"250%",
            "260":"260%",
            "270":"270%",
            "280":"280%",
            "290":"290%",
            "300":"300%",
            "310":"310%",
            "320":"320%",
            "330":"330%",
            "340":"340%",
            "350":"350%",
            "360":"360%",
            "370":"370%",
            "380":"380%",
            "390":"390%",
            "400":"400%",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu2',item);
            game.saveConfig('qhly_hanggaoxiufu2',item);
        }
    },
    "qhly_lolshilizihao":{
        "name":"势力字号调整",
        "intro":"设置此选项，可调整【海克斯科技】界面按钮的势力字号。",
        "init":lib.config.qhly_lolshilizihao === undefined ? "65" : lib.config.qhly_lolshilizihao,
        "item":{
            "50":"50",
            "55":"55",
            "60":"60",
            "65":"65",
            "70":"70",
            "75":"75",
            "80":"80",
            "85":"85",
            "90":"90",
            "95":"95",
            "100":"100",
        },
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_lolshilizihao',item);
            game.saveConfig('qhly_lolshilizihao',item);
        }
    },
    "qhly_qitashezhi":{
        "name":"<font size='5' color='blue'>其他》</font>",
        "clear":true,
    },
    "qhly_clear":{
        "name":"<b>点击清空皮肤设置</b>",
        "clear":true,
        onclick:function(){
            game.saveConfig('qhly_skinset',{
                skin:{
    
                },
                skinAudioList:{
    
                },
                audioReplace:{
    
                }
            });
            alert("游戏将自动重启。");
            game.reload();
        }
    },
    "qhly_restore":{
        "name":"<b>点击恢复官方的皮肤设置</b>",
        "clear":true,
        onclick:function(){
            if(lib.config.qhly_save_offical_skin){
                game.saveConfig('skin',lib.config.qhly_save_offical_skin);
                game.saveConfig('change_skin',false);
                game.saveConfig('extension_千幻聆音_enable',true);
                game.reload();
            }
        }
    },
},help:{},package:{
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
    intro:"对局内实时换肤换音扩展！<br>感谢七.提供的【水墨龙吟】界面素材。<br>感谢灵徒℡丶提供的【海克斯科技】界面素材。<br>感谢以下群友参与了BUG反馈，并给出了可行的建议：<br>Empty city° ꧁彥꧂ 折月醉倾城 世中人 ᴀᴅɪᴏs 废城<b><br><br>玄武江湖工作室群：522136249</b><br><img style=width:238px src="+lib.assetURL+"extension/千幻聆音/xwjh_pic_erweima.jpg> <br><br><b>时空枢纽群：1075641665</b><img style=width:238px src="+lib.assetURL+"extension/千幻聆音/sksn_pic_erweima.jpg> <br><br><b>千幻聆音皮肤群：646556261</b><img style=width:238px src="+lib.assetURL+"extension/千幻聆音/qhly_pic_erweima.jpg><br><b>千幻聆音皮肤二群：859056471</b><img style=width:238px src="+lib.assetURL+"extension/千幻聆音/qhly_pic_erweima2.jpg>",
    author:"玄武江湖工作室",
    diskURL:"",
    forumURL:"",
    version:"4.0.3",
},files:{"character":[],"card":[],"skill":[]}}})