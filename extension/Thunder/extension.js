game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "Thunder",
        editable: false,
        content: function (config, pack) {
            if (pack.changeLog) {
                game.showExtensionChangeLog(pack.changeLog);
            }
            if (lib.config['extension_Thunder_jiufatext'] == true && lib.skill.jiufa != undefined) lib.skill.jiufa.marktext = '九伐';

            function thunderIntro(node, simple, evt) {
                var uiintro = ui.create.dialog('hidden', 'notouchscroll');
                if (node.classList.contains('player') && !node.name) {
                    return uiintro;
                }
                var i, translation, intro, str;
                if (node._nointro) return;
                if (typeof node._customintro == 'function') {
                    if (node._customintro(uiintro) === false) return;
                } else if (Array.isArray(node._customintro)) {
                    var caption = node._customintro[0];
                    var content = node._customintro[1];
                    if (typeof caption == 'function') {
                        caption = caption(node);
                    }
                    if (typeof content == 'function') {
                        content = content(node);
                    }
                    uiintro.add(caption);
                    uiintro.add('<div class="text center" style="padding-bottom:5px">' + content + '</div>');
                } else if (node.classList.contains('player') || node.linkplayer) {
                    if (node.linkplayer) {
                        node = node.link;
                    }
                    var capt = get.translation(node.name);
                    if ((lib.character[node.name] && lib.character[node.name][1]) || lib.group.contains(node.group)) {
                        capt += '&nbsp;&nbsp;' + (lib.group.contains(node.group) ? get.translation(node.group) : lib.translate[lib.character[node.name][1]]);
                    }
                    uiintro.add(capt);

                    if (lib.characterTitle[node.name]) {
                        uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
                    }

                    if (!node.noclick && (node.isUnderControl() || (!game.observe && game.me && game.me.hasSkillTag('viewHandcard', null, node, true)))) {
                        var hs = node.getCards('h');
                        if (hs.length) {
                            uiintro.add('<div class="text center">手牌</div>');
                            uiintro.addSmall(node.getCards('h'));
                        }
                    }

                    //------------------------------------------------------Thunder--------------------------------------------
                    if (!node.noclick && (node.isUnderControl() || (!game.observe && game.me && node.hasSkill('th_koujing_use')))) {
                        var hs = node.getCards('h', function (card) { return card.getAttribute('data-thkoujing') });
                        if (hs.length) {
                            uiintro.add('<div class="text center">可见手牌</div>');
                            uiintro.addSmall(hs);
                        }
                    }
                    //------------------------------------------------------Thunder--------------------------------------------

                    var skills = node.getSkills(null, false, false).slice(0);
                    var skills2 = game.filterSkills(skills, node);
                    if (node == game.me && node.hiddenSkills.length) {
                        skills.addArray(node.hiddenSkills);
                    }
                    for (var i in node.disabledSkills) {
                        if (node.disabledSkills[i].length == 1 &&
                            node.disabledSkills[i][0] == i + '_awake' &&
                            !node.hiddenSkills.contains(i)) {
                            skills.add(i);
                        }
                    }
                    for (i = 0; i < skills.length; i++) {
                        if (lib.skill[skills[i]] && (lib.skill[skills[i]].nopop || lib.skill[skills[i]].equipSkill)) continue;
                        if (lib.translate[skills[i] + '_info']) {
                            translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
                            if (node.forbiddenSkills[skills[i]]) {
                                var forbidstr = '<div style="opacity:0.5"><div class="skill">【' + translation + '】</div><div>';
                                if (node.forbiddenSkills[skills[i]].length) {
                                    forbidstr += '（与' + get.translation(node.forbiddenSkills[skills[i]]) + '冲突）<br>';
                                } else {
                                    forbidstr += '（双将禁用）<br>';
                                }
                                forbidstr += get.skillInfoTranslation(skills[i], node) + '</div></div>'
                                uiintro.add(forbidstr);
                            } else if (!skills2.contains(skills[i])) {
                                if (lib.skill[skills[i]].preHidden && get.mode() == 'guozhan') {
                                    uiintro.add('<div><div class="skill" style="opacity:0.5">【' + translation + '】</div><div><span style="opacity:0.5">' + get.skillInfoTranslation(skills[i], node) + '</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
                                    var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
                                    if (_status.prehidden_skills.contains(skills[i])) {
                                        underlinenode.classList.remove('on');
                                    }
                                    underlinenode.link = skills[i];
                                    underlinenode.listen(ui.click.hiddenskill);
                                } else uiintro.add('<div style="opacity:0.5"><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
                            } else if (lib.skill[skills[i]].temp || !node.skills.contains(skills[i]) || lib.skill[skills[i]].thundertext) {
                                if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
                                    uiintro.add('<div><div class="skill thundertext thunderauto">【' + translation + '】</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
                                    var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
                                    if (lib.skill[skills[i]].frequent) {
                                        if (lib.config.autoskilllist.contains(skills[i])) {
                                            underlinenode.classList.remove('on');
                                        }
                                    }
                                    if (lib.skill[skills[i]].subfrequent) {
                                        for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
                                            if (lib.config.autoskilllist.contains(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
                                                underlinenode.classList.remove('on');
                                            }
                                        }
                                    }
                                    if (lib.config.autoskilllist.contains(skills[i])) {
                                        underlinenode.classList.remove('on');
                                    }
                                    underlinenode.link = skills[i];
                                    underlinenode.listen(ui.click.autoskill2);
                                } else {
                                    uiintro.add('<div><div class="skill thundertext thunderauto">【' + translation + '】</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
                                }
                            } else if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
                                uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
                                var underlinenode = uiintro.content.lastChild.querySelector('.underlinenode');
                                if (lib.skill[skills[i]].frequent) {
                                    if (lib.config.autoskilllist.contains(skills[i])) {
                                        underlinenode.classList.remove('on');
                                    }
                                }
                                if (lib.skill[skills[i]].subfrequent) {
                                    for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
                                        if (lib.config.autoskilllist.contains(skills[i] + '_' + lib.skill[skills[i]].subfrequent[j])) {
                                            underlinenode.classList.remove('on');
                                        }
                                    }
                                }
                                if (lib.config.autoskilllist.contains(skills[i])) {
                                    underlinenode.classList.remove('on');
                                }
                                underlinenode.link = skills[i];
                                underlinenode.listen(ui.click.autoskill2);
                            } else if (lib.skill[skills[i]].clickable && node.isIn() && node.isUnderControl(true)) {
                                var intronode = uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
                                if (!_status.gameStarted || (lib.skill[skills[i]].clickableFilter && !lib.skill[skills[i]].clickableFilter(node))) {
                                    intronode.classList.add('disabled');
                                    intronode.style.opacity = 0.5;
                                } else {
                                    intronode.link = node;
                                    intronode.func = lib.skill[skills[i]].clickable;
                                    intronode.classList.add('pointerdiv');
                                    intronode.listen(ui.click.skillbutton);
                                }
                            } else if (lib.skill[skills[i]].nobracket) {
                                uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                            } else {
                                uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i], node) + '</div></div>');
                            }
                            if (lib.translate[skills[i] + '_append']) {
                                uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>')
                            }
                        }
                    }
                    // if(get.is.phoneLayout()){
                    //     var storage=node.storage;
                    //     for(i in storage){
                    //      			if(get.info(i)&&get.info(i).intro){
                    //      						 intro=get.info(i).intro;
                    //      						 if(node.getSkills().concat(lib.skill.global).contains(i)==false&&!intro.show) continue;
                    //      						 var name=intro.name?intro.name:get.translation(i);
                    //      						 if(typeof name=='function'){
                    //      									  name=name(storage[i],node);
                    //      						 }
                    //      						 translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
                    //      						 var stint=get.storageintro(intro.content,storage[i],node,null,i);
                    //      						 if(stint){
                    //      									  translation+=stint+'</div></div>';
                    //      									  uiintro.add(translation);
                    //      						 }
                    //      			}
                    //     }
                    // }

                    if (lib.config.right_range && _status.gameStarted) {
                        uiintro.add(ui.create.div('.placeholder'));
                        var table, tr, td;
                        table = document.createElement('table');
                        tr = document.createElement('tr');
                        table.appendChild(tr);
                        td = document.createElement('td');
                        td.innerHTML = '距离';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '手牌';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '行动';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '伤害';
                        tr.appendChild(td);

                        tr = document.createElement('tr');
                        table.appendChild(tr);
                        td = document.createElement('td');
                        if (node == game.me || !game.me || !game.me.isIn()) {
                            td.innerHTML = '-';
                        } else {
                            var dist1 = get.numStr(Math.max(1, game.me.distanceTo(node)));
                            var dist2 = get.numStr(Math.max(1, node.distanceTo(game.me)));
                            if (dist1 == dist2) {
                                td.innerHTML = dist1;
                            } else {
                                td.innerHTML = dist1 + '/' + dist2;
                            }
                        }
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = node.countCards('h');
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = node.phaseNumber;
                        tr.appendChild(td);
                        td = document.createElement('td');

                        (function () {
                            num = 0;
                            for (var j = 0; j < node.stat.length; j++) {
                                if (typeof node.stat[j].damage == 'number') num += node.stat[j].damage;
                            }
                            td.innerHTML = num;
                        }());
                        tr.appendChild(td);
                        table.style.width = 'calc(100% - 20px)';
                        table.style.marginLeft = '10px';

                        uiintro.content.appendChild(table);
                        if (!lib.config.show_favourite) {
                            table.style.paddingBottom = '5px'
                        }
                    }
                    if (!simple || get.is.phoneLayout()) {
                        var es = node.getCards('e');
                        for (var i = 0; i < es.length; i++) {
                            uiintro.add('<div><div class="skill">' + es[i].outerHTML + '</div><div>' + lib.translate[es[i].name + '_info'] + '</div></div>');
                            uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
                        }
                        var js = node.getCards('j');
                        for (var i = 0; i < js.length; i++) {
                            if (js[i].viewAs && js[i].viewAs != js[i].name) {
                                uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].viewAs] + '：' + lib.translate[js[i].viewAs + '_info'] + '</div></div>');
                            } else {
                                uiintro.add('<div><div class="skill">' + js[i].outerHTML + '</div><div>' + lib.translate[js[i].name + '_info'] + '</div></div>');
                            }
                            uiintro.content.lastChild.querySelector('.skill>.card').style.transform = '';
                        }
                        if (get.is.phoneLayout()) {
                            var markCoutainer = ui.create.div('.mark-container.marks');
                            for (var i in node.marks) {
                                var nodemark = node.marks[i].cloneNode(true);
                                nodemark.classList.add('pointerdiv');
                                nodemark.link = node.marks[i];
                                nodemark.style.transform = '';
                                markCoutainer.appendChild(nodemark);
                                nodemark.listen(function () {
                                    uiintro.noresume = true;
                                    var rect = this.link.getBoundingClientRect();
                                    ui.click.intro.call(this.link, {
                                        clientX: rect.left + rect.width,
                                        clientY: rect.top + rect.height / 2,
                                    });
                                    if (lib.config.touchscreen) {
                                        uiintro._close();
                                    }
                                });
                            }
                            if (markCoutainer.childElementCount) {
                                uiintro.addText('标记');
                                uiintro.add(markCoutainer);
                            }
                        }
                    }
                    if (!game.observe && _status.gameStarted && game.me && node != game.me) {
                        ui.throwEmotion = [];
                        uiintro.addText('发送交互表情');
                        var click = function () {
                            if (_status.dragged) return;
                            if (_status.justdragged) return;
                            if (_status.throwEmotionWait) return;
                            var emotion = this.link;
                            if (game.online) {
                                game.send('throwEmotion', node, emotion);
                            } else game.me.throwEmotion(node, emotion);
                            uiintro._close();
                            _status.throwEmotionWait = true;
                            setTimeout(function () {
                                _status.throwEmotionWait = false;
                                if (ui.throwEmotion) {
                                    for (var i of ui.throwEmotion) i.classList.remove('exclude');
                                }
                            }, (emotion == 'flower' || emotion == 'egg') ? 5000 : 10000)
                        };
                        var td;
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        var listi = ['flower', 'egg'];
                        for (var i = 0; i < listi.length; i++) {
                            td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
                            ui.throwEmotion.add(td);
                            if (_status.throwEmotionWait) td.classList.add('exclude');
                            td.link = listi[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
                        }
                        uiintro.content.appendChild(table);
                        table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        var listi = ['wine', 'shoe'];
                        if (game.me.storage.zhuSkill_shanli) listi = ['yuxisx', 'jiasuo'];
                        for (var i = 0; i < listi.length; i++) {
                            td = ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
                            ui.throwEmotion.add(td);
                            if (_status.throwEmotionWait) td.classList.add('exclude');
                            td.link = listi[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', click);
                        }
                        uiintro.content.appendChild(table);
                    }
                    var modepack = lib.characterPack['mode_' + get.mode()];
                    if (lib.config.show_favourite && lib.character[node.name] && game.players.contains(node) &&
                        (!modepack || !modepack[node.name]) && (!simple || get.is.phoneLayout())) {
                        var addFavourite = ui.create.div('.text.center.pointerdiv');
                        addFavourite.link = node.link;
                        if (lib.config.favouriteCharacter.contains(node.name)) {
                            addFavourite.innerHTML = '移除收藏';
                        } else {
                            addFavourite.innerHTML = '添加收藏';
                        }
                        addFavourite.listen(ui.click.favouriteCharacter)
                        uiintro.add(addFavourite);
                    }
                    if (!simple || get.is.phoneLayout()) {
                        if ((lib.config.change_skin || lib.skin) && !node.isUnseen()) {
                            var num = 1;
                            var introadded = false;
                            var createButtons = function (num, avatar2) {
                                if (!introadded) {
                                    introadded = true;
                                    uiintro.add('<div class="text center">更改皮肤</div>');
                                }
                                var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
                                lib.setMousewheel(buttons);
                                var nameskin = (avatar2 ? node.name2 : node.name1);
                                var nameskin2 = nameskin;
                                var gzbool = false;
                                if (nameskin.indexOf('gz_shibing') == 0) {
                                    nameskin = nameskin.slice(3, 11);
                                } else if (nameskin.indexOf('gz_') == 0) {
                                    nameskin = nameskin.slice(3);
                                    gzbool = true;
                                }
                                for (var i = 0; i <= num; i++) {
                                    var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
                                        if (this._link) {
                                            if (avatar2) {
                                                lib.config.skin[nameskin] = this._link;
                                                node.node.avatar2.style.backgroundImage = this.style.backgroundImage;
                                            } else {
                                                lib.config.skin[nameskin] = this._link;
                                                node.node.avatar.style.backgroundImage = this.style.backgroundImage;
                                            }
                                        } else {
                                            delete lib.config.skin[nameskin];
                                            if (avatar2) {
                                                if (gzbool && lib.character[nameskin2][4].contains('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2, 'character');
                                                else node.node.avatar2.setBackground(nameskin, 'character');
                                            } else {
                                                if (gzbool && lib.character[nameskin2][4].contains('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2, 'character');
                                                else node.node.avatar.setBackground(nameskin, 'character');
                                            }
                                        }
                                        game.saveConfig('skin', lib.config.skin);
                                    });
                                    button._link = i;
                                    if (i) {
                                        button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
                                    } else {
                                        if (gzbool && lib.character[nameskin2][4].contains('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
                                        else button.setBackground(nameskin, 'character', 'noskin');
                                    }
                                }
                                uiintro.add(buttons);
                            };
                            var loadImage = function (avatar2) {
                                var img = new Image();
                                img.onload = function () {
                                    num++;
                                    loadImage(avatar2);
                                }
                                img.onerror = function () {
                                    num--;
                                    if (num) {
                                        createButtons(num, avatar2);
                                    }
                                    if (!avatar2) {
                                        if (!node.classList.contains('unseen2') && node.name2) {
                                            num = 1;
                                            loadImage(true);
                                        }
                                    }
                                }
                                var nameskin = (avatar2 ? node.name2 : node.name1);
                                var nameskin2 = nameskin;
                                var gzbool = false;
                                if (nameskin.indexOf('gz_shibing') == 0) {
                                    nameskin = nameskin.slice(3, 11);
                                } else if (nameskin.indexOf('gz_') == 0) {
                                    nameskin = nameskin.slice(3);
                                    gzbool = true;
                                }
                                img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
                            }
                            if (lib.config.change_skin) {
                                if (!node.isUnseen(0)) {
                                    loadImage();
                                } else if (node.name2) {
                                    loadImage(true);
                                }
                            } else {
                                setTimeout(function () {
                                    var nameskin1 = node.name1;
                                    var nameskin2 = node.name2;
                                    if (nameskin1 && nameskin1.indexOf('gz_') == 0) {
                                        nameskin1 = nameskin1.slice(3);
                                    }
                                    if (nameskin2 && nameskin2.indexOf('gz_') == 0) {
                                        nameskin2 = nameskin2.slice(3);
                                    }
                                    if (!node.isUnseen(0) && lib.skin[nameskin1]) {
                                        createButtons(lib.skin[nameskin1]);
                                    }
                                    if (!node.isUnseen(1) && lib.skin[nameskin2]) {
                                        createButtons(lib.skin[nameskin2], true);
                                    }
                                });
                            }
                        }
                    }

                    uiintro.add(ui.create.div('.placeholder.slim'));
                } else if (node.classList.contains('mark') && node.info &&
                    node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.classList.contains('player')) {
                    var info = node.info;
                    var player = node.parentNode.parentNode;
                    if (info.name) {
                        if (typeof info.name == 'function') {
                            var named = info.name(player.storage[node.skill], player);
                            if (named) {
                                uiintro.add(named);
                            }
                        } else {
                            uiintro.add(info.name);
                        }
                    } else if (info.name !== false) {
                        uiintro.add(get.translation(node.skill));
                    }
                    if (typeof info.id == 'string' && info.id.indexOf('subplayer') == 0 &&
                        player.isUnderControl(true) && player.storage[info.id] && !_status.video) {
                        var storage = player.storage[info.id];
                        uiintro.addText('当前体力：' + storage.hp + '/' + storage.maxHp);
                        if (storage.hs.length) {
                            uiintro.addText('手牌区');
                            uiintro.addSmall(storage.hs);
                        }
                        if (storage.es.length) {
                            uiintro.addText('装备区');
                            uiintro.addSmall(storage.es);
                        }
                    }
                    if (typeof info.mark == 'function') {
                        var stint = info.mark(uiintro, player.storage[node.skill], player);
                        if (stint) {
                            var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
                            if (stint.indexOf('<div class="skill"') != 0) {
                                uiintro._place_text = placetext;
                            }
                            // if(stint.length<=100){
                            // 	uiintro.add('<div class="text center">'+stint+'</div>');
                            // }
                            // else{
                            // 	uiintro.add('<div class="text">'+stint+'</div>');
                            // }
                        }
                    } else {
                        var stint = get.storageintro(info.content, player.storage[node.skill], player, uiintro, node.skill);
                        if (stint) {
                            if (stint[0] == '@') {
                                uiintro.add('<div class="caption">' + stint.slice(1) + '</div>');
                            } else {
                                var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + '</div>');
                                if (stint.indexOf('<div class="skill"') != 0) {
                                    uiintro._place_text = placetext;
                                }
                            }
                            // else if(stint.length<=100){
                            // 	uiintro.add('<div class="text center">'+stint+'</div>');
                            // }
                            // else{
                            // 	uiintro.add('<div class="text">'+stint+'</div>');
                            // }
                        }
                    }
                    uiintro.add(ui.create.div('.placeholder.slim'));
                } else if (node.classList.contains('card')) {
                    //卡牌长按介绍
                    if (ui.arena.classList.contains('observe') && node.parentNode.classList.contains('handcards')) {
                        return;
                    }
                    var name = node.name;
                    if (node.parentNode.cardMod) {
                        var moded = false;
                        for (var i in node.parentNode.cardMod) {
                            var item = node.parentNode.cardMod[i](node);
                            if (Array.isArray(item)) {
                                moded = true;
                                uiintro.add(item[0]);
                                uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + item[1] + '</div>');
                            }
                        }
                        if (moded) return uiintro;
                    }
                    if (node.link && node.link.name && lib.card[node.link.name]) {
                        name = node.link.name;
                    }
                    if (get.position(node) == 'j' && node.viewAs && node.viewAs != name) {
                        uiintro.add(get.translation(node.viewAs));
                        uiintro.add('<div class="text center">（' + get.translation(get.translation(node)) + '）</div>');
                        // uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
                        uiintro.nosub = true;
                        name = node.viewAs;
                    } else {
                        uiintro.add(get.translation(node));
                    }
                    if (node._banning) {
                        var clickBanned = function () {
                            var banned = lib.config[this.bannedname] || [];
                            if (banned.contains(name)) {
                                banned.remove(name);
                            } else {
                                banned.push(name);
                            }
                            game.saveConfig(this.bannedname, banned);
                            this.classList.toggle('on');
                            if (node.updateBanned) {
                                node.updateBanned();
                            }
                        };
                        var modeorder = lib.config.modeorder || [];
                        for (var i in lib.mode) {
                            modeorder.add(i);
                        }
                        var list = [];
                        uiintro.contentContainer.listen(function (e) {
                            ui.click.touchpop();
                            e.stopPropagation();
                        });
                        for (var i = 0; i < modeorder.length; i++) {
                            if (node._banning == 'online') {
                                if (!lib.mode[modeorder[i]].connect) continue;
                            } else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
                                continue;
                            }
                            if (lib.config.all.mode.contains(modeorder[i])) {
                                list.push(modeorder[i]);
                            }
                        }
                        if (lib.card[name] && lib.card[name].type == 'trick') list.push('zhinang_tricks');
                        var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
                        var banall = false;
                        for (var i = 0; i < list.length; i++) {
                            var cfg = ui.create.div('.config', list[i] == 'zhinang_tricks' ? '设为智囊' : (lib.translate[list[i]] + '模式'), page);
                            cfg.classList.add('toggle');
                            if (list[i] == 'zhinang_tricks') {
                                cfg.bannedname = ((node._banning == 'offline') ? '' : 'connect_') + 'zhinang_tricks';
                            } else if (node._banning == 'offline') {
                                cfg.bannedname = list[i] + '_bannedcards';
                            } else {
                                cfg.bannedname = 'connect_' + list[i] + '_bannedcards';
                            }
                            cfg.listen(clickBanned);
                            ui.create.div(ui.create.div(cfg));
                            var banned = lib.config[cfg.bannedname] || [];
                            if (banned.contains(name) == (list[i] == 'zhinang_tricks')) {
                                cfg.classList.add('on');
                                banall = true;
                            }
                        }
                        ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
                            if (this.innerHTML == '全部禁用') {
                                for (var i = 0; i < page.childElementCount; i++) {
                                    if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
                                        clickBanned.call(page.childNodes[i]);
                                    }
                                }
                                this.innerHTML = '全部启用';
                            } else {
                                for (var i = 0; i < page.childElementCount; i++) {
                                    if (page.childNodes[i].bannedname.indexOf('zhinang_tricks') == -1 && page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
                                        clickBanned.call(page.childNodes[i]);
                                    }
                                }
                                this.innerHTML = '全部禁用';
                            }
                        }).style.marginTop = '-10px';
                        ui.create.div('.placeholder.slim', uiintro.content);
                    } else {
                        if (lib.translate[name + '_info']) {
                            if (!uiintro.nosub) {
                                if (get.subtype(node) == 'equip1') {
                                    var added = false;
                                    if (lib.card[node.name] && lib.card[node.name].distance) {
                                        var dist = lib.card[node.name].distance;
                                        if (dist.attackFrom) {
                                            added = true;
                                            uiintro.add('<div class="text center">攻击范围：' + (-dist.attackFrom + 1) + '</div>');
                                        }
                                    }
                                    if (!added) {
                                        uiintro.add('<div class="text center">攻击范围：1</div>');
                                    }
                                } else if (get.subtype(node)) {
                                    uiintro.add('<div class="text center">' + get.translation(get.subtype(node)) + '</div>');
                                } else if (lib.card[name] && lib.card[name].addinfomenu) {
                                    uiintro.add('<div class="text center">' + lib.card[name].addinfomenu + '</div>');
                                } else if (lib.card[name] && lib.card[name].derivation) {
                                    if (typeof lib.card[name].derivation == 'string') {
                                        uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivation) + '</div>');
                                    } else if (lib.card[name].derivationpack) {
                                        uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivationpack + '_card_config') + '包</div>');
                                    }
                                } else {
                                    if (lib.card[name].unique) {
                                        uiintro.add('<div class="text center">特殊' + get.translation(lib.card[name].type) + '牌</div>');
                                    } else {
                                        if (lib.card[name].type && lib.translate[lib.card[name].type]) uiintro.add('<div class="text center">' + get.translation(lib.card[name].type) + '牌</div>');
                                    }
                                }
                                if (lib.card[name].unique && lib.card[name].type == 'equip') {
                                    if (lib.cardPile.guozhan && lib.cardPack.guozhan.contains(name)) {
                                        uiintro.add('<div class="text center">专属装备</div>').style.marginTop = '-5px';
                                    } else {
                                        uiintro.add('<div class="text center">特殊装备</div>').style.marginTop = '-5px';
                                    }
                                }
                            }
                            if (lib.card[name].cardPrompt) {
                                var str = lib.card[name].cardPrompt(node.link || node),
                                    placetext = uiintro.add('<div class="text" style="display:inline">' + str + '</div>');
                                if (str.indexOf('<div class="skill"') != 0) {
                                    uiintro._place_text = placetext;
                                }
                            } else if (lib.translate[name + '_info']) {
                                var placetext = uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_info'] + '</div>');
                                if (lib.translate[name + '_info'].indexOf('<div class="skill"') != 0) {
                                    uiintro._place_text = placetext;
                                }
                            }
                            if (lib.card[name].yingbian_prompt && get.is.yingbian(node.link || node)) {
                                if (typeof lib.card[name].yingbian_prompt == 'function') uiintro.add('<div class="text" style="font-family: yuanli">应变：' + lib.card[name].yingbian_prompt(node.link || node) + '</div>');
                                else uiintro.add('<div class="text" style="font-family: yuanli">应变：' + lib.card[name].yingbian_prompt + '</div>');
                            }
                            if (lib.translate[name + '_append']) {
                                uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + '_append'] + '</div>');
                            }
                        }
                        uiintro.add(ui.create.div('.placeholder.slim'));
                    }
                } else if (node.classList.contains('character')) {
                    var character = node.link;
                    if (lib.character[node.link] && lib.character[node.link][1]) {
                        var group = get.is.double(node.link, true);
                        if (group) {
                            var str = get.translation(character) + '&nbsp;&nbsp;';
                            for (var i = 0; i < group.length; i++) {
                                str += get.translation(group[i]);
                                if (i < group.length - 1) str += '/';
                            }
                            uiintro.add(str);
                        } else uiintro.add(get.translation(character) + '&nbsp;&nbsp;' + lib.translate[lib.character[node.link][1]]);
                    } else {
                        uiintro.add(get.translation(character));
                    }

                    if (lib.characterTitle[node.link]) {
                        uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
                    }

                    if (node._banning) {
                        var clickBanned = function () {
                            var banned = lib.config[this.bannedname] || [];
                            if (banned.contains(character)) {
                                banned.remove(character);
                            } else {
                                banned.push(character);
                            }
                            game.saveConfig(this.bannedname, banned);
                            this.classList.toggle('on');
                            if (node.updateBanned) {
                                node.updateBanned();
                            }
                        };
                        var modeorder = lib.config.modeorder || [];
                        for (var i in lib.mode) {
                            modeorder.add(i);
                        }
                        var list = [];
                        uiintro.contentContainer.listen(function (e) {
                            ui.click.touchpop();
                            e.stopPropagation();
                        });
                        for (var i = 0; i < modeorder.length; i++) {
                            if (node._banning == 'online') {
                                if (!lib.mode[modeorder[i]].connect) continue;
                                if (!lib.config['connect_' + modeorder[i] + '_banned']) {
                                    lib.config['connect_' + modeorder[i] + '_banned'] = [];
                                }
                            } else if (modeorder[i] == 'connect' || modeorder[i] == 'brawl') {
                                continue;
                            }
                            if (lib.config.all.mode.contains(modeorder[i])) {
                                list.push(modeorder[i]);
                            }
                        }
                        var page = ui.create.div('.menu-buttons.configpopped', uiintro.content);
                        var banall = false;
                        for (var i = 0; i < list.length; i++) {
                            var cfg = ui.create.div('.config', lib.translate[list[i]] + '模式', page);
                            cfg.classList.add('toggle');
                            if (node._banning == 'offline') {
                                cfg.bannedname = list[i] + '_banned';
                            } else {
                                cfg.bannedname = 'connect_' + list[i] + '_banned';
                            }
                            cfg.listen(clickBanned);
                            ui.create.div(ui.create.div(cfg));
                            var banned = lib.config[cfg.bannedname] || [];
                            if (!banned.contains(character)) {
                                cfg.classList.add('on');
                                banall = true;
                            }
                        }
                        if (node._banning == 'offline') {
                            var cfg = ui.create.div('.config', '随机选将可用', page);
                            cfg.classList.add('toggle');
                            cfg.listen(function () {
                                this.classList.toggle('on');
                                if (this.classList.contains('on')) {
                                    lib.config.forbidai_user.remove(character);
                                } else {
                                    lib.config.forbidai_user.add(character);
                                }
                                game.saveConfig('forbidai_user', lib.config.forbidai_user);
                            });
                            ui.create.div(ui.create.div(cfg));
                            if (!lib.config.forbidai_user.contains(character)) {
                                cfg.classList.add('on');
                            }
                        }
                        ui.create.div('.menubutton.pointerdiv', banall ? '全部禁用' : '全部启用', uiintro.content, function () {
                            if (this.innerHTML == '全部禁用') {
                                for (var i = 0; i < page.childElementCount; i++) {
                                    if (page.childNodes[i].bannedname && page.childNodes[i].classList.contains('on')) {
                                        clickBanned.call(page.childNodes[i]);
                                    }
                                }
                                this.innerHTML = '全部启用';
                            } else {
                                for (var i = 0; i < page.childElementCount; i++) {
                                    if (page.childNodes[i].bannedname && !page.childNodes[i].classList.contains('on')) {
                                        clickBanned.call(page.childNodes[i]);
                                    }
                                }
                                this.innerHTML = '全部禁用';
                            }
                        }).style.marginTop = '-10px';
                        ui.create.div('.placeholder.slim', uiintro.content);
                    } else {
                        var infoitem = lib.character[character];
                        if (!infoitem) {
                            for (var itemx in lib.characterPack) {
                                if (lib.characterPack[itemx][character]) {
                                    infoitem = lib.characterPack[itemx][character];
                                    break;
                                }
                            }
                        }
                        var skills = infoitem[3];
                        for (i = 0; i < skills.length; i++) {
                            if (lib.translate[skills[i] + '_info']) {
                                translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
                                if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
                                    uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                                } else {
                                    uiintro.add('<div><div class="skill">【' + translation + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                                }
                                if (lib.translate[skills[i] + '_append']) {
                                    uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + '_append'] + '</div>')
                                }
                            }
                        }
                        var modepack = lib.characterPack['mode_' + get.mode()];
                        if (lib.config.show_favourite &&
                            lib.character[node.link] && (!modepack || !modepack[node.link]) && (!simple || get.is.phoneLayout())) {
                            var addFavourite = ui.create.div('.text.center.pointerdiv');
                            addFavourite.link = node.link;
                            addFavourite.style.marginBottom = '15px';
                            if (lib.config.favouriteCharacter.contains(node.link)) {
                                addFavourite.innerHTML = '移除收藏';
                            } else {
                                addFavourite.innerHTML = '添加收藏';
                            }
                            addFavourite.listen(ui.click.favouriteCharacter)
                            uiintro.add(addFavourite);
                        } else {
                            uiintro.add(ui.create.div('.placeholder.slim'));
                        }
                        var addskin = false;
                        if (node.parentNode.classList.contains('menu-buttons')) {
                            addskin = !lib.config.show_charactercard;
                        } else {
                            addskin = lib.config.change_skin || lib.skin;
                        }
                        if (addskin && (!simple || get.is.phoneLayout())) {
                            var num = 1;
                            var introadded = false;
                            var nameskin = node.link;
                            var nameskin2 = nameskin;
                            var gzbool = false;
                            if (nameskin.indexOf('gz_shibing') == 0) {
                                nameskin = nameskin.slice(3, 11);
                            } else if (nameskin.indexOf('gz_') == 0) {
                                nameskin = nameskin.slice(3);
                                gzbool = true;
                            }
                            var createButtons = function (num) {
                                if (!num) return;
                                if (!introadded) {
                                    introadded = true;
                                    uiintro.add('<div class="text center">更改皮肤</div>');
                                }
                                var buttons = ui.create.div('.buttons.smallzoom.scrollbuttons');
                                lib.setMousewheel(buttons);
                                for (var i = 0; i <= num; i++) {
                                    var button = ui.create.div('.button.character.pointerdiv', buttons, function () {
                                        if (this._link) {
                                            lib.config.skin[nameskin] = this._link;
                                            node.style.backgroundImage = this.style.backgroundImage;
                                            game.saveConfig('skin', lib.config.skin);
                                        } else {
                                            delete lib.config.skin[nameskin];
                                            if (gzbool && lib.character[nameskin2][4].contains('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2, 'character');
                                            else node.setBackground(nameskin, 'character');
                                            game.saveConfig('skin', lib.config.skin);
                                        }
                                    });
                                    button._link = i;
                                    if (i) {
                                        button.setBackgroundImage('image/skin/' + nameskin + '/' + i + '.jpg');
                                    } else {
                                        if (gzbool && lib.character[nameskin2][4].contains('gzskin') && lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2, 'character', 'noskin');
                                        else button.setBackground(nameskin, 'character', 'noskin');
                                    }
                                }
                                uiintro.add(buttons);
                            };
                            var loadImage = function () {
                                var img = new Image();
                                img.onload = function () {
                                    num++;
                                    loadImage();
                                }
                                img.onerror = function () {
                                    num--;
                                    createButtons(num);
                                }
                                img.src = lib.assetURL + 'image/skin/' + nameskin + '/' + num + '.jpg';
                            }
                            if (lib.config.change_skin) {
                                loadImage();
                            } else {
                                setTimeout(function () {
                                    createButtons(lib.skin[nameskin]);
                                });
                            }
                        }
                    }
                } else if (node.classList.contains('equips') && ui.arena.classList.contains('selecting')) {
                    (function () {
                        uiintro.add('选择装备');
                        uiintro.addSmall(Array.from(node.childNodes), true);
                        uiintro.clickintro = true;
                        ui.control.hide();
                        uiintro._onclose = function () {
                            ui.control.show();
                        }
                        var confirmbutton;
                        for (var i = 0; i < uiintro.buttons.length; i++) {
                            var button = uiintro.buttons[i];
                            button.classList.add('pointerdiv');
                            if (button.link.classList.contains('selected')) {
                                button.classList.add('selected');
                            }
                            button.listen(function (e) {
                                ui.click.card.call(this.link, 'popequip');
                                ui.click.window.call(ui.window, e);
                                if (this.link.classList.contains('selected')) {
                                    this.classList.add('selected');
                                } else {
                                    this.classList.remove('selected');
                                }
                                if (ui.confirm && ui.confirm.str && ui.confirm.str.indexOf('o') != -1) {
                                    confirmbutton.classList.remove('disabled');
                                } else {
                                    confirmbutton.classList.add('disabled');
                                }
                            });
                        }
                        var buttoncontainer = uiintro.add(ui.create.div());
                        buttoncontainer.style.display = 'block';
                        confirmbutton = ui.create.div('.menubutton.large.pointerdiv', '确定', function () {
                            if (ui.confirm && ui.confirm.str && ui.confirm.str.indexOf('o') != -1) {
                                uiintro._clickintro();
                                ui.click.ok(ui.confirm.firstChild);
                            }
                        }, buttoncontainer);
                        confirmbutton.style.position = 'relative';
                        setTimeout(function () {
                            if (ui.confirm && ui.confirm.str && ui.confirm.str.indexOf('o') != -1) {
                                confirmbutton.classList.remove('disabled');
                            } else {
                                confirmbutton.classList.add('disabled');
                            }
                        }, 300);
                    }());
                } else if (node.classList.contains('identity') && node.dataset.career) {
                    var career = node.dataset.career;
                    uiintro.add(get.translation(career));
                    uiintro.add('<div class="text center" style="padding-bottom:5px">' + lib.translate['_' + career + '_skill_info'] + '</div>');
                } else if (node.classList.contains('skillbar')) {
                    if (node == ui.friendBar) {
                        uiintro.add('友方怒气值');
                        uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.friendRage + '/100</div>');
                    } else if (node == ui.enemyBar) {
                        uiintro.add('敌方怒气值');
                        uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.enemyRage + '/100</div>');
                    }
                } else if (node.parentNode == ui.historybar) {
                    if (node.dead) {
                        if (!node.source || node.source == node.player) {
                            uiintro.add('<div class="text center">' + get.translation(node.player) + '阵亡</div>');
                            uiintro.addSmall([node.player]);
                        } else {
                            uiintro.add('<div class="text center">' + get.translation(node.player) + '被' + get.translation(node.source) + '杀害</div>');
                            uiintro.addSmall([node.source]);
                        }
                    }
                    if (node.skill) {
                        uiintro.add('<div class="text center">' + get.translation(node.skill, 'skill') + '</div>');
                        uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + get.translation(node.skill, 'info') + '</div>');
                    }
                    if (node.targets && get.itemtype(node.targets) == 'players') {
                        uiintro.add('<div class="text center">目标</div>');
                        uiintro.addSmall(node.targets);
                    }
                    if (node.players && node.players.length > 1) {
                        uiintro.add('<div class="text center">使用者</div>');
                        uiintro.addSmall(node.players);
                    }
                    if (node.cards && node.cards.length) {
                        uiintro.add('<div class="text center">卡牌</div>');
                        uiintro.addSmall(node.cards);
                    }
                    for (var i = 0; i < node.added.length; i++) {
                        uiintro.add(node.added[i]);
                    }
                    if (node.added.length) {
                        uiintro.add(ui.create.div('.placeholder.slim'));
                    }
                    if (uiintro.content.firstChild) {
                        uiintro.content.firstChild.style.paddingTop = '3px';
                    }
                }
                if (lib.config.touchscreen) {
                    lib.setScroll(uiintro.contentContainer);
                }
                return uiintro;
            }

            function thunderButton(item, type, position, noclick, node) {
                switch (type) {
                    case 'blank':
                        //---------------------------------------Thunder-------------------------------------------
                        if (item.getAttribute('data-thkoujing')) {
                            if (typeof item.copy == 'function') {
                                node = item.copy(false);
                            } else {
                                node = item.cloneNode(true);
                            }
                            node.classList.add('button');
                            if (position) position.appendChild(node);
                            node.link = item;
                            if (item.style.backgroundImage) {
                                node.style.backgroundImage = item.style.backgroundImage;
                                node.style.backgroundSize = 'cover';
                            }
                            if (item.style.color) {
                                node.style.color = item.style.color;
                            }
                            if (item.nature) {
                                node.classList.add(item.nature);
                            }
                            if (!noclick) {
                                lib.setIntro(node);
                            }
                        } else {
                            node = ui.create.div('.button.card', position);
                            node.link = item;
                        }
                        //---------------------------------------Thunder-------------------------------------------
                        break;
                    case 'card':
                        if (typeof item.copy == 'function') {
                            node = item.copy(false);
                        } else {
                            node = item.cloneNode(true);
                        }
                        node.classList.add('button');
                        if (position) position.appendChild(node);
                        node.link = item;
                        if (item.style.backgroundImage) {
                            node.style.backgroundImage = item.style.backgroundImage;
                            node.style.backgroundSize = 'cover';
                        }
                        if (item.style.color) {
                            node.style.color = item.style.color;
                        }
                        if (item.nature) {
                            node.classList.add(item.nature);
                        }
                        if (!noclick) {
                            lib.setIntro(node);
                        }
                        if (get.position(item) == 'j' && item.viewAs && item.viewAs != item.name && lib.config.cardtempname != 'off') {
                            node._tempName = ui.create.div('.tempname', node);
                            var tempname = get.translation(item.viewAs);
                            node._tempName.dataset.nature = 'wood';
                            node._tempName.innerHTML = lib.config.cardtempname == 'default' ? get.verticalStr(tempname) : tempname;
                            node._tempName.tempname = tempname;
                        }
                        break;

                    case 'vcard':
                        if (typeof item == 'string') {
                            item = [get.type(item), '', item];
                        }
                        node = ui.create.card(position, 'noclick', noclick);
                        node.classList.add('button');
                        node.init(item);
                        node.link = item;
                        break;

                    case 'character':
                    case 'player':
                    case 'characterx':
                        if (node) {
                            node.classList.add('button');
                            node.classList.add('character');
                            node.style.display = '';
                        } else {
                            node = ui.create.div('.button.character', position);
                        }
                        node._link = item;
                        if (_status.noReplaceCharacter && type == 'characterx') type = 'character';
                        if (type == 'characterx') {
                            if (lib.characterReplace[item] && lib.characterReplace[item].length) item = lib.characterReplace[item][0];
                        }
                        node.link = item;
                        if (type == 'character' || type == 'characterx') {
                            var double = get.is.double(node._link, true);
                            if (double) node._changeGroup = true;
                            if (type == 'characterx' && lib.characterReplace[node._link] && lib.characterReplace[node._link].length > 1) node._replaceButton = true;
                            var func = function (node, item) {
                                node.setBackground(item, 'character');
                                if (node.node) {
                                    node.node.name.remove();
                                    node.node.hp.remove();
                                    node.node.group.remove();
                                    node.node.intro.remove();
                                    if (node.node.replaceButton) node.node.replaceButton.remove();;
                                }
                                node.node = {
                                    name: ui.create.div('.name', node),
                                    hp: ui.create.div('.hp', node),
                                    group: ui.create.div('.identity', node),
                                    intro: ui.create.div('.intro', node),
                                };
                                var infoitem = lib.character[item];
                                if (!infoitem) {
                                    for (var itemx in lib.characterPack) {
                                        if (lib.characterPack[itemx][item]) {
                                            infoitem = lib.characterPack[itemx][item];
                                            break;
                                        }
                                    }
                                }
                                node.node.name.innerHTML = get.slimName(item);
                                if (lib.config.buttoncharacter_style == 'default' || lib.config.buttoncharacter_style == 'simple') {
                                    if (lib.config.buttoncharacter_style == 'simple') {
                                        node.node.group.style.display = 'none';
                                    }
                                    node.node.name.dataset.nature = get.groupnature(infoitem[1]);
                                    node.node.group.dataset.nature = get.groupnature(infoitem[1], 'raw');
                                    node.classList.add('newstyle');
                                    if (double && double.length) {
                                        node.node.name.dataset.nature = get.groupnature(double[0]);
                                        node.node.group.dataset.nature = get.groupnature(double[double.length == 2 ? 1 : 0]);
                                    }
                                    ui.create.div(node.node.hp);
                                    var hp = get.infoHp(infoitem[2]),
                                        maxHp = get.infoMaxHp(infoitem[2]),
                                        hujia = get.infoHujia(infoitem[2]);
                                    var str = get.numStr(hp);
                                    if (hp != maxHp) {
                                        str += '/';
                                        str += get.numStr(maxHp);
                                    }
                                    var textnode = ui.create.div('.text', str, node.node.hp);
                                    if (infoitem[2] == 0) {
                                        node.node.hp.hide();
                                    } else if (get.infoHp(infoitem[2]) <= 3) {
                                        node.node.hp.dataset.condition = 'mid';
                                    } else {
                                        node.node.hp.dataset.condition = 'high';
                                    }
                                    if (hujia > 0) {
                                        ui.create.div(node.node.hp, '.shield');
                                        ui.create.div('.text', get.numStr(hujia), node.node.hp);
                                    }
                                } else {
                                    var hp = get.infoHp(infoitem[2]);
                                    var maxHp = get.infoMaxHp(infoitem[2]);
                                    var shield = get.infoHujia(infoitem[2]);
                                    if (maxHp > 14) {
                                        if (typeof infoitem[2] == 'string') node.node.hp.innerHTML = infoitem[2];
                                        else node.node.hp.innerHTML = get.numStr(infoitem[2]);
                                        node.node.hp.classList.add('text');
                                    } else {
                                        for (var i = 0; i < maxHp; i++) {
                                            var next = ui.create.div('', node.node.hp);
                                            if (i >= hp) next.classList.add('exclude');
                                        }
                                        for (var i = 0; i < shield; i++) {
                                            ui.create.div(node.node.hp, '.shield');
                                        }
                                    }
                                }
                                if (node.node.hp.childNodes.length == 0) {
                                    node.node.name.style.top = '8px';
                                }
                                if (node.node.name.querySelectorAll('br').length >= 4) {
                                    node.node.name.classList.add('long');
                                    if (lib.config.buttoncharacter_style == 'old') {
                                        node.addEventListener('mouseenter', ui.click.buttonnameenter);
                                        node.addEventListener('mouseleave', ui.click.buttonnameleave);
                                    }
                                }
                                node.node.intro.innerHTML = lib.config.intro;
                                if (!noclick) {
                                    lib.setIntro(node);
                                }
                                if (infoitem[1]) {
                                    if (double) {
                                        var str = '<div>';
                                        if (double.length == 2) {
                                            for (var i of double) {
                                                str += get.translation(i);
                                            }
                                        } else str += get.translation(double[0]);
                                        str += '</div>';
                                        node.node.group.innerHTML = str;
                                    } else node.node.group.innerHTML = '<div>' + get.translation(infoitem[1]) + '</div>';
                                    node.node.group.style.backgroundColor = get.translation(infoitem[1] + 'Color');
                                } else {
                                    node.node.group.style.display = 'none';
                                }
                                if (node._replaceButton) {
                                    var intro = ui.create.div('.button.replaceButton', node);
                                    node.node.replaceButton = intro;
                                    intro.innerHTML = '切换';
                                    intro._node = node;
                                    intro.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                        _status.tempNoButton = true;
                                        var node = this._node;
                                        var list = lib.characterReplace[node._link];
                                        var link = node.link;
                                        var index = list.indexOf(link);
                                        if (index == list.length - 1) index = 0;
                                        else index++;
                                        link = list[index];
                                        node.link = link;
                                        node.refresh(node, link);
                                        setTimeout(function () {
                                            delete _status.tempNoButton;
                                        }, 200);
                                    });
                                }
                            };
                            node.refresh = func;
                            node.refresh(node, item);
                        } else {
                            node.node = {
                                name: ui.create.div('.name', node),
                                intro: ui.create.div('.intro', node)
                            }
                            if (item.name && item.name.indexOf('unknown') == 0) {
                                if (item.node && item.node.name_seat) {
                                    node.classList.add('cardbg');
                                    ui.create.div('.avatar_name', node, get.translation(item.name));
                                } else {
                                    node.setBackground(item.name1, 'character');
                                }
                            } else {
                                node.setBackground(item.name, 'character');
                            }
                        }
                        break;

                    case 'text':
                        node = ui.create.div('.button.text', position);
                        node.link = item;
                        node.innerHTML = item;
                        break;

                    case 'textButton':
                        node = ui.create.div('.caption', position);
                        node.link = item;
                        node.innerHTML = item;
                        break;
                }
                if (!noclick) {
                    node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                } else {
                    node.classList.add('noclick');
                    if (node.querySelector('.intro')) {
                        node.querySelector('.intro').remove();
                    }
                }
                for (var i in lib.element.button) {
                    node[i] = lib.element.button[i];
                }
                return node;
            }

            function thunderTenthButton(item, type, position, noclick, node) {
                if (type != 'character' && type != 'characterx') {
                    var button = thunderButton.apply(this, arguments);
                    if (position) position.appendChild(button);
                    return button;
                }

                if (node) {
                    node.classList.add('button');
                    node.classList.add('character');
                    node.classList.add('decadeUI');
                    node.style.display = '';
                } else {
                    node = ui.create.div('.button.character.decadeUI');
                }

                node._link = item;
                if (type == 'characterx') {
                    if (_status.noReplaceCharacter) {
                        type = 'character';
                    } else if (lib.characterReplace[item] && lib.characterReplace[item].length) {
                        item = lib.characterReplace[item][0];
                    }
                }

                node.link = item;
                var doubleCamp = get.is.double(node._link, true);
                var character = dui.element.create('character', node);

                if (doubleCamp) node._changeGroup = true;
                var double = get.is.double(node._link, true);
                if (double) node._changeGroup = true;
                if (type == 'characterx' && lib.characterReplace[node._link] && lib.characterReplace[node._link].length > 1) {
                    node._replaceButton = true;
                }

                node.refresh = function (node, item, intersection) {
                    if (intersection) {
                        node.awaitItem = item;
                        intersection.observe(node);
                        // node.setBackground(item, 'character');
                    } else {
                        node.setBackground(item, 'character');
                    }

                    if (node.node) {
                        node.node.name.remove();
                        node.node.hp.remove();
                        node.node.group.remove();
                        node.node.intro.remove();
                        if (node.node.replaceButton) node.node.replaceButton.remove();
                    }
                    node.node = {
                        name: decadeUI.element.create('name', node),
                        hp: decadeUI.element.create('hp', node),
                        group: decadeUI.element.create('identity', node),
                        intro: decadeUI.element.create('intro', node),
                    };
                    var infoitem = lib.character[item];
                    if (!infoitem) {
                        for (var itemx in lib.characterPack) {
                            if (lib.characterPack[itemx][item]) {
                                infoitem = lib.characterPack[itemx][item];
                                break;
                            }
                        }
                    }

                    node.node.name.innerText = get.slimName(item).replace(/<br>/g, '\n');
                    if (lib.config.buttoncharacter_style == 'default' || lib.config.buttoncharacter_style == 'simple') {
                        if (lib.config.buttoncharacter_style == 'simple') {
                            node.node.group.style.display = 'none';
                        }
                        node.node.name.dataset.nature = get.groupnature(infoitem[1]);
                        node.node.group.dataset.nature = get.groupnature(infoitem[1], 'raw');
                        node.classList.add('newstyle');
                        if (double && double.length) {
                            node.node.name.dataset.nature = get.groupnature(double[0]);
                            node.node.group.dataset.nature = get.groupnature(double[double.length == 2 ? 1 : 0]);
                        }
                        ui.create.div(node.node.hp);
                        var hp = get.infoHp(infoitem[2]),
                            maxHp = get.infoMaxHp(infoitem[2]),
                            hujia = get.infoHujia(infoitem[2]);
                        var str = get.numStr(hp);
                        if (hp != maxHp) {
                            str += '/';
                            str += get.numStr(maxHp);
                        }
                        var textnode = ui.create.div('.text', str, node.node.hp);
                        if (infoitem[2] == 0) {
                            node.node.hp.hide();
                        } else if (get.infoHp(infoitem[2]) <= 3) {
                            node.node.hp.dataset.condition = 'mid';
                        } else {
                            node.node.hp.dataset.condition = 'high';
                        }
                        if (hujia > 0) {
                            ui.create.div(node.node.hp, '.shield');
                            ui.create.div('.text', get.numStr(hujia), node.node.hp);
                        }
                    } else {
                        var hp = get.infoHp(infoitem[2]);
                        var maxHp = get.infoMaxHp(infoitem[2]);
                        var shield = get.infoHujia(infoitem[2]);
                        if (maxHp > 14) {
                            if (typeof infoitem[2] == 'string') node.node.hp.innerHTML = infoitem[2];
                            else node.node.hp.innerHTML = get.numStr(infoitem[2]);
                            node.node.hp.classList.add('text');
                        } else {
                            for (var i = 0; i < maxHp; i++) {
                                var next = ui.create.div('', node.node.hp);
                                if (i >= hp) next.classList.add('exclude');
                            }
                            for (var i = 0; i < shield; i++) {
                                ui.create.div(node.node.hp, '.shield');
                            }
                        }
                    }
                    if (node.node.hp.childNodes.length == 0) {
                        node.node.name.style.top = '8px';
                    }
                    if (node.node.name.querySelectorAll('br').length >= 4) {
                        node.node.name.classList.add('long');
                        if (lib.config.buttoncharacter_style == 'old') {
                            node.addEventListener('mouseenter', ui.click.buttonnameenter);
                            node.addEventListener('mouseleave', ui.click.buttonnameleave);
                        }
                    }

                    node.node.intro.innerText = lib.config.intro;
                    if (!noclick) lib.setIntro(node);
                    if (infoitem[1]) {
                        if (doubleCamp) {
                            var text = '';
                            if (doubleCamp.length == 2) {
                                for (var i = 0; i < doubleCamp.length; i++) text += get.translation(doubleCamp[i]);
                            } else {
                                text = get.translation(doubleCamp[0]);
                            }
                            node.node.group.innerText = text;
                        } else {
                            node.node.group.innerText = get.translation(infoitem[1]);
                        }
                        node.node.group.style.backgroundColor = get.translation(infoitem[1] + 'Color');
                    } else {
                        node.node.group.style.display = 'none';
                    }
                    if (node._replaceButton) {
                        var intro = ui.create.div('.button.replaceButton', node);
                        node.node.replaceButton = intro;
                        intro.innerText = '切换';
                        intro._node = node;
                        intro.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            _status.tempNoButton = true;
                            var node = this._node;
                            var list = lib.characterReplace[node._link];
                            var link = node.link;
                            var index = list.indexOf(link);
                            if (index == list.length - 1) index = 0;
                            else index++;
                            link = list[index];
                            node.link = link;
                            node.refresh(node, link);
                            setTimeout(function (_status) { _status.tempNoButton = undefined; }, 200, _status);
                        });
                    }
                };

                node.refresh(node, item, position ? position.intersection : undefined);
                if (!noclick) {
                    node.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                } else {
                    node.classList.add('noclick');
                    if (node.querySelector('.intro')) {
                        node.querySelector('.intro').remove();
                    }
                }

                for (var i in lib.element.button) node[i] = lib.element.button[i];
                if (position) position.appendChild(node);

                return node;
            }
            //1、给现有技能加ai——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
            Object.assign(lib.skill.zhafu, {
                ai: {
                    order: 1,
                    result: {
                        target: function (player, target) {
                            return -target.countCards('h');
                        }
                    }
                }
            })
            Object.assign(lib.skill.xinfu_tunjun, {
                ai: {
                    order: 7,
                    result: {
                        target: function (player, target) {
                            if (player.storage.xinfu_lveming < 2) return 0;
                            if (target.countCards('e') > 2) return 0;
                            return 5 - target.countCards('e');
                        }
                    }
                }
            })
            Object.assign(lib.skill.yinju, {
                content: function () {
                    player.awakenSkill('yinju');
                    player.storage.yinju2 = target;
                    player.addTempSkill('yinju2');
                    target.addTempSkill('th_yinju');
                },
                ai: {
                    order: 10,
                    result: {
                        target: function (player, target) {
                            if (player.countCards('h', function (card) { return player.getUseValue(card) > 0 && get.tag(card, 'damage') }) < 2) return 0;
                            if (get.attitude(player, target) <= 0) return 0;
                            return 100 - target.hp;
                        }
                    }
                }
            })
            Object.assign(lib.skill.xinfu_zengdao, {
                ai: {
                    order: 1,
                    result: {
                        target: function (player, target) {
                            if (player.countCards('e') == 0) return 0;
                            return lib.skill.th_suizheng.playerRank(target) + target.hp;
                        },
                    },
                },
            })

            //2、lib.element.player——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
            Object.assign(lib.element.player, {
                $showdam: function (num, font) {
                    game.addVideo('showdam', this, [num, font]);
                    var node = ui.create.div('.damage');
                    if (font) {
                        node.classList.add('normal-font');
                    }
                    if (typeof num == 'number' && num > 0) {
                        if (num == Infinity) num = '∞'
                        else num = '-' + num;
                    } else if (num == -Infinity) num = '-∞';
                    node.innerHTML = num;
                    this.appendChild(node);
                    ui.refresh(node);
                    node.classList.add('damageadded');
                },
                $deletedam: function () {
                    var node = this.getElementsByClassName('damageadded')[0];
                    if (node) node.delete();
                },
                getSuitNum: function () {
                    if (this.countCards('h') == 0) return 0;
                    var list = [],
                        cards = this.getCards('h');
                    for (var i = 0; i < cards.length; i++) {
                        if (!list.contains(get.suit(cards[i]))) list.push(get.suit(cards[i]));
                    }
                    return list.length;
                },
                caiyi: function (list, control, source) {
                    var next = game.createEvent('thcaiyi');
                    next.list = list;
                    next.control = control;
                    next.player = this;
                    next.source = source;
                    next.setContent('thcaiyi');
                    return next;
                },
                chooseToInit: function (topic, list1, list2, total) {
                    var next = game.createEvent('chooseToInit');
                    next.list1 = list1;
                    next.list2 = list2;
                    next.topic = topic;
                    next.total = total;
                    next.player = this;
                    next.setContent('chooseToInit');
                    return next;
                }

            })

            //3、lib.element.content——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
            Object.assign(lib.element.content, {
                $deletedam: function () {
                    var node = this.getElementsByClassName('damageadded')[0];
                    if (node) node.delete();
                },
                thcaiyi: function () {
                    'step 0'
                    event.videoId = lib.status.videoId++;
                    event.num = 0;
                    for (var i = 0; i < event.source.storage[event.control].length; i++) {
                        if (event.source.storage[event.control][i] == 0) event.num++;
                    }
                    var func = function (id, bool) {
                        var str = '彩翼：执行一项后移除';
                        var choiceList = ui.create.dialog(str, 'forcebutton');
                        choiceList.videoId = id;
                        for (var i = 0; i < event.list.length; i++) {
                            var numx = 4 - event.num;
                            event.list[i] = event.list[i].replace(/X/, numx);
                            if (event.source.storage[event.control][i] == 0) event.list[i] += '（已移除）';
                            var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                            var bool = event.source.storage[event.control][i] == 1;
                            if (!bool) str += '<div style="opacity:0.5">';
                            str += event.list[i];
                            str += '</div>';
                            var next = choiceList.add(str);
                            next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                            next.firstChild.link = i;
                            for (var j in lib.element.button) {
                                next[j] = lib.element.button[j];
                            }
                            choiceList.buttons.add(next.firstChild);
                        }
                        return choiceList;
                    };
                    if (player.isOnline2()) {
                        player.send(func, event.videoId);
                    }
                    event.dialog = func(event.videoId);
                    if (player != game.me || _status.auto) {
                        event.dialog.style.display = 'none';
                    }
                    var next = player.chooseButton();
                    next.set('dialog', event.videoId);
                    next.set('forced', true);
                    next.set('filterButton', function (button) {
                        return event.source.storage[event.control][button.link] == 1;
                    });
                    next.set('ai', function (button) {
                        var num = 4 - event.num;
                        switch (button.link) {
                            case 0:
                                {
                                    if (event.control == 'th_caiyiyang') {
                                        if (player.getDamagedHp() >= num) return 1.6 + Math.random();
                                        if (player.hp == 1) return 1 + Math.random();
                                        return 0;
                                    } else {
                                        if (player.hp > num && player.hp > 4) return Math.random();
                                        return 0;
                                    }
                                }
                            case 1:
                                {
                                    if (event.control == 'th_caiyiyang') {
                                        if (player.needsToDiscard()) return 0;
                                        return Math.random();
                                    } else {
                                        if (player.countCards('he') - 2 > num || player.countCards('he') < num) return 2.5 + Math.random();
                                        return 1.6 + Math.random();
                                    }

                                }
                            case 2:
                                {
                                    if (event.control == 'th_caiyiyang') {
                                        if (player.isTurnedOver()) return 2.5 + Math.random();
                                        return 0;
                                    } else {
                                        if (player.isTurnedOver()) return 3 + Math.random();
                                        return Math.random();
                                    }
                                }
                            case 3:
                                {
                                    if (event.control == 'th_caiyiyang') {
                                        if (event.source.storage.th_caiyiyang[0] == 0 && player.isDamaged()) return 2.5 + Math.random();
                                        if (event.source.storage.th_caiyiyang[1] == 0) return 1.6 + Math.random();
                                        return 0.6 + Math.random();
                                    } else {
                                        if (event.source.storage.th_caiyiyin[0] == 0 && player.hp <= 2) return 0;
                                        if (event.source.storage.th_caiyiyin[1] == 0 && (player.countCards('he') < num || player.countCards('he') - 2 > num)) return 2.5 + Math.random();
                                        return Math.random();
                                    }
                                }
                        }
                    });
                    'step 1'
                    if (player.isOnline2()) {
                        player.send('closeDialog', event.videoId);
                    }
                    event.dialog.close();
                    if (result.bool) {
                        game.log(player, '选择了', '#g【彩翼】', '的', '#y选项' + get.cnNumber(result.links[0] + 1, true));
                        if (result.links[0] != 3 && event.source.storage[event.control][3] > 1) event.source.storage[event.control][3]--;
                        event.source.storage[event.control][result.links[0]]--;
                        switch (result.links[0]) {
                            case 0:
                                event.goto(3);
                                break;
                            case 1:
                                event.goto(4);
                                break;
                            case 2:
                                event.goto(5);
                                break;
                            default:
                                event.goto(6);
                        }
                    }
                    'step 2'
                    event.finish();
                    'step 3'
                    if (event.control == 'th_caiyiyang') player.recover(4 - event.num);
                    else player.damage(4 - event.num);
                    event.finish();
                    'step 4'
                    if (event.control == 'th_caiyiyang') player.draw(4 - event.num);
                    else player.chooseToDiscard('he', 4 - event.num, true);
                    event.finish();
                    'step 5'
                    if (event.control == 'th_caiyiyang') {
                        player.link(false);
                        player.turnOver(false);
                    } else {
                        player.link(true);
                        player.turnOver(true);
                    }
                    event.finish();
                    'step 6'
                    var list = [],
                        numx = 0;
                    for (var i = 0; i < event.source.storage[event.control].length - 1; i++) {
                        if (event.source.storage[event.control][i] == 0) {
                            list[numx] = i;
                            numx++;
                        };
                    }
                    if (list.length) {
                        var num = list.randomGet() + 3;
                        event.goto(num);
                    }
                },
                chooseToYuqi: function () {
                    'step 0'
                    if (event.chooseTime && _status.connectMode && !game.online) {
                        event.time = lib.configOL.choose_timeout;
                        game.broadcastAll(function (time) {
                            lib.configOL.choose_timeout = time;
                        }, event.chooseTime);
                    }
                    function isOverlap(obj1, obj2) {
                        if (!obj1 || !obj2) return false;
                        var rect1 = obj1.getBoundingClientRect(), rect2 = obj2.getBoundingClientRect();
                        var numx = (rect1.right - rect1.left) / 2, numy = (rect1.bottom - rect1.top) / 2;
                        if (rect1.left + numx > rect2.left && rect1.left + numx < rect2.right && rect1.top + numy > rect2.top && rect1.top + numy < rect2.bottom) return true;
                        return false;
                    }
                    if (event.isMine()) {
                        event.swipe = lib.config.swipe;
                        lib.config.swipe = false;
                        delete ui.selected.guanxing_button;
                        var list = event.list,
                            filterMove = event.filterMove,
                            filterOk = event.filterOk,
                            theme = []
                        zoom = 0.9;
                        _status.imchoosing = true;
                        var event = _status.event;
                        event.settleed = false;
                        theme[0] = lib.config['extension_Thunder_yuqiTheme'];
                        switch (theme[0]) {                   //0主题1宽度2内空高3外空高4提示高度
                            case 'tenth': {
                                theme[1] = game.thunderIsPhone() ? '800px' : '1000px';
                                theme[2] = 0.82;
                                theme[3] = game.thunderIsPhone() ? 338 : 440;
                                theme[4] = game.thunderIsPhone() ? 26 : 30;
                            } break;
                            case 'hand': {
                                theme[1] = document.body.offsetWidth + 'px';
                                theme[2] = 0.65;
                                theme[3] = game.thunderIsPhone() ? 425 : 555;
                                theme[4] = theme[3] * 0.11;
                            } break;
                            default: {
                                theme[1] = game.thunderIsPhone() ? '800px' : '1000px';
                                theme[2] = 0;
                                theme[3] = game.thunderIsPhone() ? 340 : 440;
                                theme[4] = game.thunderIsPhone() ? 24 : 30;
                            }
                        }
                        if (!game.thunderHasExt('十周年')) {
                            theme[3] *= 0.77;
                            theme[4] *= 0.77;
                        }
                        event.yuqiDialog = ui.create.div('.yuqi', document.body);
                        event.yuqiDialog.draggable = true;
                        event.yuqiDialog.style.backgroundImage = 'url(' + lib.assetURL + 'extension/Thunder/image/effect/' + theme[0] + '.png)';
                        event.yuqiDialog.style.padding = parseInt(lib.config['extension_Thunder_UItopblank']) * 0.6 + '% ' + lib.config['extension_Thunder_UIsidesblank'] + '%';
                        event.yuqiDialog.style.setProperty('--w', theme[1]);
                        event.yuqiDialog.style.setProperty('--h', theme[3] + 'px');
                        event.yuqiDialog.style.transform = 'translate(-50%, -' + (game.thunderHasExt('十周年') ? 55 : 75) + '%)'
                        if (game.thunderHasExt('十周年') && game.thunderIsPhone()) event.yuqiDialog.classList.add('dui-mobile');
                        var yuqiTopic = ui.create.div('.yuqitishi', event.yuqiDialog);
                        var str = get.translation(event.getParent().name) || event.prompt || '请选择要操作的牌';
                        if (theme[0] == 'hand') {
                            str += '　';
                            yuqiTopic.style.fontFamily = 'shousha';
                            yuqiTopic.style.setProperty('--y', '0.66');
                            yuqiTopic.classList.add('shoushaFont');
                        }
                        yuqiTopic.textContent = str;
                        yuqiTopic.style.setProperty('--h', theme[4] + 'px');
                        if (lib.config['extension_Thunder_yuqiTheme'] == 'hand') ui.create.div('.yuqitishiimg', yuqiTopic)
                        event.switchToAuto = function () {
                            if (!filterOk(event.moved)) {
                                if (!event.forced) event._result = { bool: false };
                                else event._result = 'ai';
                            } else {
                                event._result = {
                                    bool: true,
                                    moved: event.moved,
                                };
                            }
                            event.yuqiDialog.remove();
                            if (ui.confirm) ui.confirm.close();
                            game.resume();
                            _status.imchoosing = false;
                        };

                        event.moved = [];
                        var buttonss = [];
                        event.buttonss = buttonss;
                        var updateButtons = function () {
                            var yuqi = document.getElementsByClassName('yuqiAll');
                            for (var i = 0; i < yuqi.length; i++) {
                                for (var x = 0; x < yuqi[i].childNodes.length; x++) {
                                    if (yuqi[i].offsetWidth - 10 < yuqi[i].childNodes.length * (yuqi[i].childNodes[0].offsetWidth + 14)) {
                                        yuqi[i].childNodes[x].style.transform = 'translate(' + ((yuqi[i].offsetWidth - 5 - yuqi[i].childNodes.length * (yuqi[i].childNodes[0].offsetWidth + 14)) / (yuqi[i].childNodes.length - 1) * x) + 'px , 0px)';
                                    } else yuqi[i].childNodes[x].style.transform = 'translate(0,0)';
                                }
                            }
                            var buttont = null;
                            for (var i of buttonss) {
                                event.moved[i._link] = get.links(Array.from(i.childNodes));
                                if (i.textPrompt) i.previousSibling.textContent = i.textPrompt(event.moved[i._link]);
                            }
                            if (filterOk(event.moved)) {
                                buttont = ui.create.confirm('o');
                            } else {
                                if (!event.forced) buttont = ui.create.confirm('c');
                                else if (ui.confirm) ui.confirm.close();
                            }
                            if (game.thunderHasExt('十周年')) {
                                var con = document.getElementById('dui-controls');
                                con.classList.add('confirmdown');
                            }
                        };

                        if (!game.thunderHasExt('十周年')) theme[2] -= 0.04;
                        game.thunderCreateStand(player, event.yuqiDialog, theme[3], theme[2]);
                        /* var jinyu = ui.create.div('.jinyu', event.yuqiDialog);
                        jinyu.style.setProperty('--h', theme[3] + 'px');
                        jinyu.style.setProperty('--y', theme[2]);

                        var playerSkin = player.childNodes[0].style.backgroundImage.split('/');
                        var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                        var skinStr = playerSkin[playerSkin.length - 1].split('.')[0], skinPath;
                        if (reg.test(playerSkin[playerSkin.length - 1])) {
                            skinPath = lib.assetURL + 'extension/Thunder/image/stand/' + playerSkin[playerSkin.length - 2] + '/' + skinStr + '.png'
                        } else {
                            skinPath = lib.assetURL + 'extension/Thunder/image/stand/' + skinStr + '/' + skinStr + '.png';
                        }
                        if (game.thunderFileExist(skinPath)) jinyu.style.backgroundImage = 'url(' + skinPath + ')';
                        else jinyu.style.backgroundImage = player.childNodes[0].style.backgroundImage; */

                        var cardborder = ui.create.div('.yuqicards', event.yuqiDialog);
                        cardborder.style.setProperty('--h', theme[3] + 'px');
                        cardborder.style.setProperty('--y', theme[2]);

                        document.addEventListener("dragover", function (event) {
                            event.preventDefault();
                        });

                        for (var i = 0; i < list.length; i++) {
                            var tishi = ui.create.div('.tishi' + i, cardborder);
                            if (list.length == 2 && i > 0) tishi.style.setProperty('--w', '99.5%');
                            if (list.length > 2 && i > 0 && game.thunderIsPhone()) tishi.style.setProperty('--w', '49.2%');
                            tishi.textContent = list[i][0];
                            var buttons = ui.create.div('.buttons', cardborder);
                            buttonss.push(buttons);
                            buttons.classList.add('popup');
                            buttons.classList.add('yuqiAll', 'yuqi' + i);
                            if (lib.config['extension_Thunder_yuqiTheme'] == 'tenth') buttons.style.backgroundColor = 'rgba(162, 133, 91, 0.4)';
                            else buttons.style.backgroundColor = 'rgba(76, 65, 59, 0.4)';
                            if (game.thunderIsPhone()) buttons.style.setProperty('--z', 0.65);
                            if (game.thunderIsPhone()) buttons.style.setProperty('--h', '38px');

                            var butWidth = game.thunderIsPhone() ? '98.4%' : '98%';
                            if (i == 0 && game.thunderIsPhone()) buttons.style.setProperty('--w', butWidth);
                            if (i > 0 && list.length == 2) buttons.style.setProperty('--w', butWidth);
                            buttons._link = i;
                            var isMoved = false;
                            if (list[i][1]) {
                                var bb = ui.create.buttons(list[i][1], 'card', buttons);
                                for (var j of bb) {
                                    j.draggable = true;
                                    j.style.transition = 'all 10ms linear';
                                    j.addEventListener('dragstart', function () {
                                        ui.selected.guanxing_button = this;
                                    })
                                    j.addEventListener('drop', function () {
                                        if (!ui.selected.guanxing_button) return;
                                        if (filterMove(ui.selected.guanxing_button, this.parentNode._link, event.moved) && this.parentNode != ui.selected.guanxing_button.parentNode) return;
                                        if (!filterMove(this, ui.selected.guanxing_button, event.moved)) return;
                                        var par1 = ui.selected.guanxing_button.parentNode, ind1 = ui.selected.guanxing_button.nextSibling, par2 = this.parentNode, ind2 = this.nextSibling;
                                        par1.insertBefore(this, ind1);
                                        par2.insertBefore(ui.selected.guanxing_button, ind2);
                                        delete ui.selected.guanxing_button;
                                        updateButtons();
                                    })
                                    j.addEventListener('click', function () {
                                        clickButton(this)
                                    })
                                    j.ontouchstart = function (evt) {
                                        if (event.clone) event.clone.remove();
                                        var guanxingButton = evt.target, num = 0;
                                        while (guanxingButton.className.indexOf('fullskin') == -1 && num < 6) {
                                            guanxingButton = guanxingButton.parentNode;
                                            num++;
                                        }
                                        if (guanxingButton.className.indexOf('fullskin') == -1) return;
                                        guanxingButton.copy = lib.element.card.copy;

                                        ui.selected.guanxing_button = guanxingButton;
                                        _status.yuqiTouchX = evt.touches[0].pageX;
                                        _status.yuqiTouchY = evt.touches[0].pageY;
                                        _status.yuqiTrans = ui.selected.guanxing_button.style.transform || 'translate(0,0)';

                                        event.clone = guanxingButton.copy();
                                        event.clone.style.transform = guanxingButton.style.transform;
                                        event.clone.style.left = (guanxingButton.offsetLeft + guanxingButton.parentNode.offsetLeft - 5) + 'px';
                                        event.clone.style.top = (guanxingButton.offsetTop + guanxingButton.parentNode.offsetTop - 38) + 'px';
                                        event.clone.style.zoom = game.thunderIsPhone() ? 0.65 : 0.9;
                                        event.clone.style.zIndex = 7;
                                        ui.selected.guanxing_button.style.opacity = 0;
                                        cardborder.appendChild(event.clone);
                                    }
                                    j.ontouchmove = function (evt) {
                                        isMoved = true;
                                        if (!ui.selected.guanxing_button) return;
                                        let x = (evt.touches[0].pageX - _status.yuqiTouchX) * 1.7 + 'px';
                                        let y = (evt.touches[0].pageY - _status.yuqiTouchY) * 1.7 + 'px';
                                        event.clone.style.transform = 'translate(' + x + ',' + y + ')';
                                    }
                                    j.ontouchend = function (evt) {
                                        if (!isMoved) {
                                            console.log(0, '没有移动')
                                            event.clone.parentNode.removeChild(event.clone);
                                            ui.selected.guanxing_button.style.opacity = 1;
                                            return;
                                        }
                                        isMoved = false;
                                        if (!ui.selected.guanxing_button) return;
                                        var butt1 = document.getElementsByClassName('yuqiAll');
                                        for (var k = 0; k < butt1.length; k++) {    //遍历butt1
                                            if (isOverlap(event.clone, butt1[k])) {          //如果与卡槽相交
                                                if (ui.selected.guanxing_button && ui.selected.guanxing_button.parentNode != butt1[k] && filterMove(ui.selected.guanxing_button, butt1[k]._link, event.moved)) {
                                                    butt1[k].appendChild(ui.selected.guanxing_button);
                                                    console.log(4, '与卡槽相交且能进入卡槽')
                                                    event.clone.parentNode.removeChild(event.clone);
                                                    ui.selected.guanxing_button.style.opacity = 1;
                                                    bool1 = false;
                                                    delete ui.selected.guanxing_button;
                                                    updateButtons();
                                                    return;
                                                } else {//检查是否与卡牌相交
                                                    for (var l of butt1[k].childNodes) {
                                                        if (isOverlap(event.clone, l)) {
                                                            if (ui.selected.guanxing_button && filterMove(l, ui.selected.guanxing_button, event.moved) && ui.selected.guanxing_button != l) {
                                                                var par1 = ui.selected.guanxing_button.parentNode, ind1 = ui.selected.guanxing_button.nextSibling, par2 = l.parentNode, ind2 = l.nextSibling;
                                                                event.clone.parentNode.removeChild(event.clone);
                                                                ui.selected.guanxing_button.style.opacity = 1;
                                                                par1.insertBefore(l, ind1);
                                                                par2.insertBefore(ui.selected.guanxing_button, ind2);
                                                                console.log(2, '与卡牌相交能互换')
                                                                delete ui.selected.guanxing_button;
                                                                updateButtons();
                                                                return;
                                                            }
                                                        }
                                                    }
                                                    if (k == butt1.length - 1) {
                                                        console.log(3, '与卡槽相交但没与合法卡牌相交且不能进入卡槽')
                                                        event.clone.parentNode.removeChild(event.clone);
                                                        ui.selected.guanxing_button.style.opacity = 1;
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                        console.log(5, '没与任何合法的相交')
                                        event.clone.parentNode.removeChild(event.clone);
                                        ui.selected.guanxing_button.style.opacity = 1;
                                    }
                                }
                            }
                            buttons.addEventListener('drop', function () {
                                if (!ui.selected.guanxing_button) return;
                                if (ui.selected.guanxing_button.parentNode == this) return;
                                if (!filterMove(ui.selected.guanxing_button, this._link, event.moved)) return;
                                this.appendChild(ui.selected.guanxing_button);
                                delete ui.selected.guanxing_button;
                                updateButtons();
                            })
                            if (!game.thunderHasExt('十周年')) buttons.style.setProperty('height', '105px');
                            if (list[i][2]) buttons.textPrompt = list[i][2];
                        }
                        updateButtons();

                        function clickButton(button) {
                            var node = button.parentNode;
                            if (!buttonss.contains(node)) return;
                            ui.selected.guanxing_button = button;
                            if (node.classList.contains('yuqi0')) {
                                var num = 1;
                                while (num < list.length) {
                                    if (!filterMove(ui.selected.guanxing_button, num, event.moved)) {
                                        num++;
                                        continue;
                                    } else {
                                        document.getElementsByClassName('yuqi' + num)[0].appendChild(ui.selected.guanxing_button);
                                        break;
                                    }
                                }
                            } else {
                                if (!filterMove(ui.selected.guanxing_button, 0, event.moved)) return;
                                document.getElementsByClassName('yuqi0')[0].appendChild(ui.selected.guanxing_button);
                            }
                            delete ui.selected.guanxing_button;
                            updateButtons();
                        }

                        event.custom.replace.confirm = function (bool) {
                            if (bool) event._result = {
                                bool: true,
                                moved: event.moved,
                            };
                            else event._result = { bool: false };
                            if (_status.dragged) delete _status.dragged;
                            if (_status.clicked) delete _status.clicked;
                            if (game.thunderHasExt('十周年')) {
                                var con = document.getElementById('dui-controls');
                                con.classList.remove('confirmdown');
                            }
                            event.yuqiDialog.remove();
                            if (ui.confirm) ui.confirm.close();
                            lib.config.swipe = event.swipe;
                            game.resume();
                            _status.imchoosing = false;
                        };


                        game.pause();
                        game.countChoose();
                        event.choosing = true;
                    } else if (event.isOnline()) {
                        event.send();
                    } else {
                        event.result = 'ai';
                    }
                    "step 1"
                    if (event.time) game.broadcastAll(function (time) {
                        lib.configOL.choose_timeout = time;
                    }, event.time);
                    var result = event.result || result;
                    if ((!result || result == 'ai' || (event.forced && !result.bool)) && event.processAI) {
                        var moved = event.processAI(event.list);
                        if (moved) result = {
                            bool: true,
                            moved: moved,
                        }
                        else result = { bool: false };
                    }
                    event.result = result;
                },
                die: function () {
                    "step 0"
                    event.forceDie = true;
                    if (_status.roundStart == player) {
                        _status.roundStart = player.next || player.getNext() || game.players[0];
                    }
                    if (ui.land && ui.land.player == player) {
                        game.addVideo('destroyLand');
                        ui.land.destroy();
                    }
                    var unseen = false;
                    if (player.classList.contains('unseen')) {
                        player.classList.remove('unseen');
                        unseen = true;
                    }
                    var logvid = game.logv(player, 'die', source);
                    event.logvid = logvid;
                    if (unseen) {
                        player.classList.add('unseen');
                    }
                    if (source) {
                        game.log(player, '被', source, '杀害');
                        if (source.stat[source.stat.length - 1].kill == undefined) {
                            source.stat[source.stat.length - 1].kill = 1;
                        } else {
                            source.stat[source.stat.length - 1].kill++;
                        }
                    } else {
                        game.log(player, '阵亡')
                    }


                    // player.removeEquipTrigger();

                    // for(var i in lib.skill.globalmap){
                    //     if(lib.skill.globalmap[i].contains(player)){
                    //      			lib.skill.globalmap[i].remove(player);
                    //      			if(lib.skill.globalmap[i].length==0&&!lib.skill[i].globalFixed){
                    //      						 game.removeGlobalSkill(i);
                    //      			}
                    //     }
                    // }

                    game.broadcastAll(function (player) {
                        player.classList.add('dead');
                        player.removeLink();
                        player.classList.remove('turnedover');
                        player.classList.remove('out');
                        player.node.count.innerHTML = '0';
                        player.node.hp.hide();
                        player.node.equips.hide();
                        player.node.count.hide();
                        player.previous.next = player.next;
                        player.next.previous = player.previous;
                        game.players.remove(player);
                        game.dead.push(player);
                        _status.dying.remove(player);

                        if (lib.config.background_speak) {
                            var path = '';
                            if (player.name.indexOf('th_g_') == 0) path = '../extension/小游戏武将/audio';
                            else if (player.name.indexOf('th_') == 0) path = '../extension/Thunder/audio';
                            if (lib.character[player.name] && lib.character[player.name][4].contains('die_audio')) {
                                game.playAudio(path, 'die', player.name);
                            }
                            // else if(true){
                            else {
                                game.playAudio('die', player.name, function () {
                                    game.playAudio('die', player.name.slice(player.name.indexOf('_') + 1));
                                });
                            }
                        }
                    }, player);

                    game.addVideo('diex', player);
                    if (event.animate !== false) {
                        player.$die(source);
                    }
                    if (player.hp != 0) {
                        player.changeHp(0 - player.hp, false).forceDie = true;
                    }
                    "step 1"
                    if (player.dieAfter) player.dieAfter(source);
                    "step 2"
                    event.trigger('die');
                    "step 3"
                    if (player.isDead()) {
                        if (!game.reserveDead) {
                            for (var mark in player.marks) {
                                player.unmarkSkill(mark);
                            }
                            while (player.node.marks.childNodes.length > 1) {
                                player.node.marks.lastChild.remove();
                            }
                            game.broadcast(function (player) {
                                while (player.node.marks.childNodes.length > 1) {
                                    player.node.marks.lastChild.remove();
                                }
                            }, player);
                        }
                        for (var i in player.tempSkills) {
                            player.removeSkill(i);
                        }
                        var skills = player.getSkills();
                        for (var i = 0; i < skills.length; i++) {
                            if (lib.skill[skills[i]].temp) {
                                player.removeSkill(skills[i]);
                            }
                        }
                        if (_status.characterlist) {
                            if (lib.character[player.name] && player.name.indexOf('gz_shibing') != 0) _status.characterlist.add(player.name);
                            if (lib.character[player.name1] && player.name1.indexOf('gz_shibing') != 0) _status.characterlist.add(player.name1);
                            if (lib.character[player.name2] && player.name2.indexOf('gz_shibing') != 0) _status.characterlist.add(player.name2);
                        }
                        event.cards = player.getCards('hejsx');
                        if (event.cards.length) {
                            player.discard(event.cards).forceDie = true;
                            //player.$throw(event.cards,1000);
                        }
                    }
                    "step 4"
                    if (player.dieAfter2) player.dieAfter2(source);
                    "step 5"
                    game.broadcastAll(function (player) {
                        if (game.online && player == game.me && !_status.over && !game.controlOver && !ui.exit) {
                            if (lib.mode[lib.configOL.mode].config.dierestart) {
                                ui.create.exit();
                            }
                        }
                    }, player);
                    if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                        ui.control.show();
                        if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                            ui.revive = ui.create.control('revive', ui.click.dierevive);
                        }
                        if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl && !game.no_continue_game) {
                            ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                        }
                        if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                            ui.restart = ui.create.control('restart', game.reload);
                        }
                    }

                    if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                        // _status.auto=false;
                        if (ui.auto) {
                            // ui.auto.classList.remove('glow');
                            ui.auto.hide();
                        }
                        if (ui.wuxie) ui.wuxie.hide();
                    }

                    if (typeof _status.coin == 'number' && source && !_status.auto) {
                        if (source == game.me || source.isUnderControl()) {
                            _status.coin += 10;
                        }
                    }
                    if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                        switch (source.node.framebg.dataset.auto) {
                            case 'gold':
                            case 'silver':
                                source.node.framebg.dataset.auto = 'gold';
                                break;
                            case 'bronze':
                                source.node.framebg.dataset.auto = 'silver';
                                break;
                            default:
                                source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                        }
                        if (lib.config.autoborder_count == 'kill') {
                            source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                        } else {
                            var dnum = 0;
                            for (var j = 0; j < source.stat.length; j++) {
                                if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                            }
                            source.node.framebg.dataset.decoration = '';
                            switch (source.node.framebg.dataset.auto) {
                                case 'bronze':
                                    if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                    break;
                                case 'silver':
                                    if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                    break;
                                case 'gold':
                                    if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                    break;
                            }
                        }
                        source.classList.add('topcount');
                    }
                },
                chooseToInit: function () {
                    'step 0'
                    var list1 = event.list1,
                        list2 = event.list2;
                    var switchToAuto = function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            skills: list2.flat().randomGets(event.total),
                        };
                        if (event.initbg) event.initbg.close();
                        if (event.control) event.control.close();
                    };
                    var chooseButton = function (list1, list2) {
                        var event = _status.event;
                        if (!event._result) event._result = {};
                        event._result.skills = [];
                        if (game.thunderHasExt('十周年')) {
                            var con = document.getElementById('dui-controls');
                            if (con) con.classList.add('confirmdown2');
                        }
                        event.initbg = ui.create.div('.initbg', document.body);
                        event.initbg.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            game.removeSkillInfo();
                        }, true)
                        var initDialog = ui.create.div('.init', event.initbg);
                        initDialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            game.removeSkillInfo();
                        }, true)
                        var initTopic = ui.create.div('.inittishi', initDialog);
                        initTopic.textContent = event.topic;
                        game.thunderCreateStand(player, initDialog, 266, 1);
                        var initBord = ui.create.div('', initDialog);
                        initBord.style.cssText = 'width:586px;height:216px;top:33px;right:60px;positon:"absolute";';
                        var skills = event.list2.flat(), num = 0;
                        for (var i = 0; i < event.list1.length; i++) {
                            var x = i * (104 - list1.length * 4) + (8 - list1.length) * 35 + 35;
                            game.thunderCreateHead(event.list1[i], initBord, 68, x, 12);
                            for (var j = 0; j < event.list2[i].length; j++) {
                                var td = ui.create.div('.skillnode', initBord);
                                td.link = skills[num];
                                num++;
                                td.textContent = get.translation(event.list2[i][j]);
                                td.style.left = (x - 3) + 'px';
                                td.style.top = (84 + j * 40) + 'px';
                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    this.style.animation = 'initbutton 0.2s forwards';
                                    this.addEventListener('animationend', function () { this.style.animation = ''; });
                                    game.removeSkillInfo();
                                    if (this.classList.contains('initselected')) {
                                        this.classList.remove('initselected');
                                        event._result.skills.remove(this.link);
                                    } else {
                                        if (event._result.skills.length < event.total) {
                                            this.classList.add('initselected');
                                            event._result.skills.push(this.link);
                                        }
                                        game.createSkillInfo(this.link, event.initbg);
                                    }
                                }, true)
                            }
                        }
                        var prompt = ui.create.div('', initDialog);
                        prompt.style.cssText = 'width:100%;height:20px;left:0;bottom:0;text-align:center;font-family:"yuanli";font-size:20px;line-height:18px;color:#f1dfcc;filter: drop-shadow(2px 0 0 #664934) drop-shadow(-2px 0 0 #664934) drop-shadow(0 2px 0 #664934) drop-shadow(0 -2px 0 #664934);transform:translateY(220%);letter-spacing:3px;pointer-events:none;';
                        prompt.textContent = '请选择' + get.cnNumber(event.total) + '个武将技能';
                        event.switchToAuto = function () {
                            if (game.thunderHasExt('十周年')) {
                                var con = document.getElementById('dui-controls');
                                if (con) con.classList.remove('confirmdown2');
                            }
                            event.initbg.remove();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        };
                        event.control = ui.create.control('ok', function (link) {
                            if (game.thunderHasExt('十周年')) {
                                var con = document.getElementById('dui-controls');
                                if (con) con.classList.remove('confirmdown2');
                            }
                            event.initbg.remove();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(list1, list2);
                    }
                    else if (event.isOnline()) {
                        event.player.send(chooseButton, list1, list2);
                        event.player.wait();
                        game.pause();
                    }
                    else {
                        switchToAuto();
                    }
                    'step 1'
                    var map = event.result || result;
                    if (map && map.skills && map.skills.length) {
                        for (var i of map.skills) player.addSkillLog(i);
                    }
                    game.broadcastAll(function (list) {
                        game.expandSkills(list);
                        for (var i of list) {
                            var info = lib.skill[i];
                            if (!info) continue;
                            if (!info.audioname2) info.audioname2 = {};
                            info.audioname2.old_yuanshu = 'weidi';
                        }
                    }, map.skills);
                }
            })

            //4、game——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
            Object.assign(game, {
                thunderHasExt: function (str) {
                    if (!str || typeof str != 'string') return false;
                    if (lib.config && lib.config.extensions) {
                        for (var i of lib.config.extensions) {
                            if (i.indexOf(str) == 0) {
                                if (lib.config['extension_' + i + '_enable']) return true;
                            }
                        }
                    }
                    //if (lib.config.extensions && lib.config.extensions.contains(str) && lib.config['extension_' + str + '_enable']) return true;
                    return false;
                },
                thunderFileExist(url) {
                    if (window.XMLHttpRequest) {
                        var http = new XMLHttpRequest();
                    }
                    else {
                        var http = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    http.open('HEAD', url, false);
                    try {
                        http.send();
                    } catch (err) {
                        return false;
                    }
                    return http.status != 404;
                },
                thunderIsPhone() {
                    //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
                    var info = navigator.userAgent;
                    //通过正则表达式的test方法判断是否包含“Mobile”字符串
                    var isPhone = /mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(info);
                    //如果包含“Mobile”（是手机设备）则返回true
                    return isPhone;
                },
                thunderCreateStand: function (player, dialog, height, y) {
                    var jinyu = ui.create.div('.jinyu', dialog);
                    jinyu.style.setProperty('--h', height + 'px');
                    jinyu.style.setProperty('--y', y);

                    var playerSkin = player.childNodes[0].style.backgroundImage.split('/');
                    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                    var skinStr = playerSkin[playerSkin.length - 1].split('.')[0], skinPath;
                    if (reg.test(playerSkin[playerSkin.length - 1])) {
                        skinPath = lib.assetURL + 'extension/Thunder/image/stand/' + playerSkin[playerSkin.length - 2] + '/' + skinStr + '.png'
                    } else {
                        skinPath = lib.assetURL + 'extension/Thunder/image/stand/' + skinStr + '/' + skinStr + '.png';
                    }
                    if (game.thunderFileExist(skinPath)) jinyu.style.backgroundImage = 'url(' + skinPath + ')';
                    else jinyu.style.backgroundImage = player.childNodes[0].style.backgroundImage;
                },
                thunderCreateHead: function (player, dialog, width, x, y) {
                    var head = ui.create.div('.headpic', dialog);
                    head.style.setProperty('--w', width + 'px');
                    head.style.left = x + 'px';
                    head.style.top = y + 'px';
                    // var playerHead = player.childNodes[0].style.backgroundImage.split('/');
                    // var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                    // var headStr = playerHead[playerHead.length - 1].split('.')[0], headPath;
                    // if (reg.test(playerHead[playerHead.length - 1])) {
                    // headPath = lib.assetURL + 'extension/Thunder/image/head/' + playerHead[playerHead.length - 2] + '/' + headStr + '.png'
                    // } else {
                    var headPath = lib.assetURL + 'extension/Thunder/image/head/' + player + '/' + player + '.png';
                    // }
                    if (game.thunderFileExist(headPath)) head.style.backgroundImage = 'url(' + headPath + ')';
                    else {
                        head.setBackground(player, 'character');
                        head.style.backgroundSize = '200%';
                        head.style.backgroundPosition = '50% 10%';
                    }
                    var playerRank = 'normal';
                    for (var i of Object.keys(lib.rank.rarity)) {
                        if (lib.rank.rarity[i].contains(player)) {
                            playerRank = i;
                        }
                    }
                    let headbord = ui.create.div('', head);
                    headbord.style.cssText = 'width:100%;height:100%;top:0;left:0;background-size:100%;';
                    headbord.style['background-image'] = 'url("' + lib.assetURL + 'extension/Thunder/image/effect/' + playerRank + '.png")';
                    let back = ui.create.div('', head);
                    back.style.cssText = 'width:31%;height:96%;top:-1px;left:-1px;background-size:100% 100%;background-repeat:no-repeat;'
                    back.style['background-image'] = 'url("' + lib.assetURL + 'extension/Thunder/image/effect/back.png")';
                    let headName = ui.create.div('.headname', back);
                    headName.textContent = get.rawName(player).slice(0, 5);
                },
                createSkillInfo(skill, dialog) {
                    var node = ui.create.div('.skilltishi', dialog),
                        node1 = ui.create.div('.radiusTL', node),
                        node2 = ui.create.div('.radiusTR', node),
                        node3 = ui.create.div('.radiusBL', node),
                        ndoe4 = ui.create.div('.radiusBR', node),
                        topic = ui.create.div('', node),
                        content = ui.create.div('', node);
                    topic.style.cssText = 'width:90%;height:20px;font-size:18px;color:#58bf32;font-family:"yuanli";position:absolute;left:5%;top:5px;';
                    topic.textContent = get.translation(skill);
                    content.style.cssText = 'width:90%;height:auto;font-size:13px;font-family:"yuanli";position:absolute;left:5%;top:30px;';
                    content.textContent = '    ' + get.translation(skill + '_info');
                    node.style.setProperty('--h', (content.offsetHeight + 38) + 'px');
                },
                removeSkillInfo() {
                    var node = document.getElementsByClassName('skilltishi');
                    if (!node) return;
                    for (var i = 0; i < node.length; i++) {
                        node[i].remove();
                    }
                }
            })

            setTimeout(function () {
                if (lib.config['extension_Thunder_UIpatch'] == true) {
                    //lib.element.player.chooseToMove = lib.element.player.chooseToYuqi;
                    lib.element.content.chooseToMoveTemp = lib.element.content.chooseToMove;
                    lib.element.content.chooseToMove = lib.element.content.chooseToYuqi;
                }
                if (lib.config['extension_Thunder_zhaoxiang'] == true) {
                    Object.assign(lib.skill.refuhan, {
                        content: function () {
                            'step 0'
                            if (player.storage.fanghun) player.draw(player.storage.fanghun);
                            player.removeMark('fanghun', player.storage.fanghun);
                            player.awakenSkill('refuhan');
                            'step 1'
                            var list;
                            if (_status.characterlist) {
                                list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (lib.character[name][1] == 'shu') list.push(name);
                                }
                            }
                            else if (_status.connectMode) {
                                list = get.charactersOL(function (i) {
                                    return lib.character[i][1] != 'shu';
                                });
                            }
                            else {
                                list = get.gainableCharacters(function (info) {
                                    return info[1] == 'shu';
                                });
                            }
                            var players = game.players.concat(game.dead);
                            for (var i = 0; i < players.length; i++) {
                                list.remove(players[i].name);
                                list.remove(players[i].name1);
                                list.remove(players[i].name2);
                            }
                            list.remove('zhaoyun');
                            list.remove('re_zhaoyun');
                            list.remove('ol_zhaoyun');
                            list = list.randomGets(Math.max(4, game.countPlayer()));
                            var skills = [];
                            for (var i = 0; i < list.length; i++) {
                                skills[i] = (lib.character[list[i]][3] || []).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                });
                            }
                            if (!list.length || !skills.length) { event.finish(); return; }
                            if (player.isUnderControl()) {
                                game.swapPlayerAuto(player);
                            }
                            player.chooseToInit('扶汉', list, skills, 2);
                            'step 2'
                            if (player.isMinHp()) player.recover();
                        },
                    })
                }
                if (lib.config['extension_Thunder_jinyu'] == true) {
                    Object.assign(lib.skill.yuqi, {
                        intro: {
                            content: function (storage, player) {
                                var info = lib.skill.yuqi.getInfo(player);
                                return '<div class="text center">距离：' + info[0] + '<br>观看牌堆顶：' + info[1] + '<br>给别人：' + info[2] + '<br>给自己：' + info[3] + '</div>'
                            },
                        },
                    })
                    Object.assign(lib.skill.shanshen, {
                        content: function () {
                            'step 0'
                            event.goon = !player.hasAllHistory('sourceDamage', function (evt) {
                                return evt.player == trigger.player;
                            });
                            event.list = ['距离', '观看牌堆', '交给别人', '交给自己'];
                            var list = event.list.filter(i => {
                                var list1 = lib.skill.yuqi.getInfo(player);
                                return list1[event.list.map(item => item).indexOf(i)] < 5;

                            });
                            if (list.length) player.chooseControl(list, 'cancel2').set('prompt', get.prompt('shanshen')).set('prompt2', '令〖隅泣〗中的一个数字+2' + (event.goon ? '并回复1点体力' : '')).set('ai', function () {
                                var player = _status.event.player,
                                    info = lib.skill.yuqi.getInfo(player);
                                if (info[0] < info[3] && game.countPlayer(function (current) {
                                    return get.distance(player, current) <= info[0];
                                }) < Math.min(3, game.countPlayer()) && info[0] < 5) return '距离';
                                if (info[3] < info[1] - 1 && info[3] < 5) return '交给自己';
                                if (info[1] < 5 && info[1] < 5) return '观看牌堆';
                                if (info[0] < 5 && game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current) > info[0];
                                })) return '距离';
                                if (info[2] < 5) return '交给别人';
                                return 'cancel2';
                            });
                            else event.finish();
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill('shanshen', trigger.player);
                                var num = event.list.map(item => item).indexOf(result.control);
                                var list = lib.skill.yuqi.getInfo(player);
                                list[num] = Math.min(5, list[num] + 2);
                                game.log(player, '将', result.control, '数字改为', '#y' + list[num])
                                player.markSkill('yuqi');
                                if (event.goon) player.recover();
                            }
                        }
                    })
                    Object.assign(lib.skill.xianjing, {
                        content: function () {
                            'step 0'
                            event.list = ['距离', '观看牌堆', '交给别人', '交给自己'];
                            var list = event.list.filter(i => {
                                var list1 = lib.skill.yuqi.getInfo(player);
                                return list1[event.list.map(item => item).indexOf(i)] < 5;

                            });
                            if (list.length) player.chooseControl(list, 'cancel2').set('prompt', get.prompt('xianjing')).set('prompt2', '令〖隅泣〗中的一个数字+1').set('ai', function () {
                                var player = _status.event.player,
                                    info = lib.skill.yuqi.getInfo(player);
                                if (info[0] < info[3] && game.countPlayer(function (current) {
                                    return get.distance(player, current) <= info[0];
                                }) < Math.min(3, game.countPlayer()) && info[0] < 5) return '距离';
                                if (info[3] < info[1] - 1 && info[3] < 5) return '交给自己';
                                if (info[1] < 5 && info[1] < 5) return '观看牌堆';
                                if (info[0] < 5 && game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current) > info[0];
                                })) return '距离';
                                if (info[2] < 5) return '交给别人';
                                return 'cancel2';
                            });
                            else event.finish();
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill('xianjing');
                                var num = event.list.map(item => item).indexOf(result.control);
                                var list = lib.skill.yuqi.getInfo(player);
                                list[num] = Math.min(5, list[num] + 1);
                                game.log(player, '将', result.control, '数字改为', '#y' + list[num])
                                player.markSkill('yuqi');
                                if (player.isDamaged()) event.finish();
                            } else event.finish();
                            'step 2'
                            var list = event.list.filter(i => {
                                var list1 = lib.skill.yuqi.getInfo(player);
                                return list1[event.list.map(item => item).indexOf(i)] < 5;

                            });
                            if (list.length) player.chooseControl(list, 'cancel2').set('prompt', '是否令〖隅泣〗中的一个数字+1？').set('ai', function () {
                                var player = _status.event.player,
                                    info = lib.skill.yuqi.getInfo(player);
                                if (info[0] < info[3] && game.countPlayer(function (current) {
                                    return get.distance(player, current) <= info[0];
                                }) < Math.min(3, game.countPlayer()) && info[0] < 5) return '距离';
                                if (info[3] < info[1] - 1 && info[3] < 5) return '交给自己';
                                if (info[1] < 5 && info[1] < 5) return '观看牌堆';
                                if (info[0] < 5 && game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current) > info[0];
                                })) return '距离';
                                if (info[2] < 5) return '交给别人';
                                return 'cancel2';
                            });
                            else event.finish();
                            'step 3'
                            if (result.control != 'cancel2') {
                                var num = event.list.map(item => item).indexOf(result.control);
                                var list = lib.skill.yuqi.getInfo(player);
                                list[num] = Math.min(5, list[num] + 1);
                                game.log(player, '将', result.control, '数字改为', '#y' + list[num])
                                player.markSkill('yuqi');
                            }
                        }
                    })
                }
                if (lib.config['extension_Thunder_kebineng'] == false && lib.character.th_kebineng) lib.character.th_kebineng[4].push('unseen');
                if (lib.config['extension_Thunder_kebineng'] == true) {
                    get.nodeintro = thunderIntro;
                    if (!game.thunderHasExt('十周年')) ui.create.button = thunderButton;
                    else if (lib.config['extension_Thunder_kebineng'] == true) ui.create.button = thunderTenthButton;
                }
            }, 1000)

            if (lib.rank) {
                var rank = {
                    s: [ // boss将

                    ],
                    ap: [ // 阴间

                    ],
                    a: [ // 阳顶天
                        'th_fengyu',
                        'th_re_guohuanghou',
                        'th_yanfuren',
                        'th_shen_guanyu',
                        'th_wangcan',
                        'th_guanning',
                        'th_caohua',
                        'th_zhaoang',
                    ],
                    am: [ //中强将
                        'th_re_jushou',
                        'th_old_re_xushu',
                        'th_tw_daxiaoqiao',
                        'th_re_handang',
                        'th_tw_madai',
                        'th_xiahoulingnv',
                        'th_kebineng',
                        'th_zhangxuan',
                        'th_zhugeshang',
                        'th_old_lukai',
                        'th_fengfang',
                        'th_wangchang',
                        'th_huangzu',
                        'th_quanhuijie',
                        'th_huzhao',
                        'th_huangquan',
                    ],
                    bp: [ // 中等偏上强度
                        'th_daxiaoqiao',
                        'th_niujin',
                        'th_guanqiujian',
                        'th_tw_jiling',
                        'th_tw_chendong',
                        'th_qinyilu',
                        'th_re_mazhong',
                        'th_lukai',
                        'th_re_liuchen',
                        'th_bianxi',
                        'th_sunru',
                        'th_lvkuanglvxiang',
                        'th_caiyang',
                    ],
                    b: [ // 中规中矩
                        'th_jiling',
                        'th_tw_re_fazheng',
                        'th_furong',
                        'th_fanchou',
                        'th_liwan',
                        'th_liuba',
                        'th_re_xushu',
                    ],
                    bm: [ // 一般没发挥的武将
                        'th_xin_huanghao',
                        'th_zhangxun',
                        'th_wujing',
                    ],
                    c: [ // 很弱的
                    ],
                    d: [ // ……呃？
                    ],
                    rarity: {
                        legend: [ // 传说SSS
                            'th_fengyu',
                            'th_shen_jiangwei',
                            'th_shen_guanyu',
                            'th_caohua',
                            'th_zhaoang',
                            'th_quanhuijie',
                        ],
                        epic: [ // 史诗SS
                            'th_fengfang',
                            'th_bianxi',
                            'th_wangchang',
                            'th_zhugeshang',
                            'th_re_jushou',
                            'th_old_lukai',
                            'th_lukai',
                            'th_xiahoulingnv',
                            'th_kebineng',
                            'th_re_xushu',
                            'th_old_re_xushu',
                            'th_re_guohuanghou',
                            'th_re_mazhong',
                            'th_re_liuchen',
                            'th_yanfuren',
                            'th_tw_daxiaoqiao',
                            'th_daxiaoqiao',
                            'th_niujin',
                            'th_re_handang',
                            'th_guanqiujian',
                            'th_tw_jiling',
                            'th_tw_re_fazheng',
                            'th_tw_madai',
                            'th_tw_chendong',
                            'th_furong',
                            'th_guanning',
                            'th_qinyilu',
                            'th_liuba',
                            'th_liwan',
                            'th_zhangxuan',
                            'th_huangzu',
                            'th_sunru',
                            'th_lvkuanglvxiang',
                            'th_huzhao',
                            'th_huangquan',
                            'th_caiyang',
                        ],
                        rare: [ // 稀有S
                            'th_jiling',
                            'th_xin_huanghao',
                            'th_fanchou',
                            'th_zhangxun',
                        ],
                        junk: [ // 平凡A

                        ],
                    },
                }
                var addRank = function (rank) {
                    if (!lib.rank) return;
                    for (var i in rank) {
                        if (i == 'rarity') continue;
                        lib.rank[i].addArray(rank[i]);
                    }
                    if (rank.rarity && lib.rank.rarity) {
                        for (var i in rank.rarity) {
                            if (lib.rank.rarity[i] === undefined) {
                                lib.rank.rarity[i] = [];
                            }
                            lib.rank.rarity[i].addArray(rank.rarity[i]);
                        }
                    }
                }
                addRank(rank);
            }

            lib.skill._th_roundEnd = {
                trigger: { player: ['phaseAfter', 'phaseCancelled', 'phaseSkipped'] },
                forced: true,
                priority: 100,
                popup: false,
                lastDo: true,
                content: function () {
                    if (!trigger.skill) {
                        var endRound = false;
                        if (trigger.player.getSeatNum() > trigger.player.next.getSeatNum()) endRound = true;
                        if (endRound) {
                            event.trigger('thunderRoundEnd');
                        }
                    }
                },
            }

            lib.translate.daxiaoqiao = 'OL大小乔'
            lib.translate.huanghao = 'OL黄皓'
            lib.skill.th_dunshi.derivation = Object.keys(lib.skill.th_dunshi.getSkill(lib.config['extension_Thunder_guanning'])).map(i => lib.skill.th_dunshi.getSkill(lib.config['extension_Thunder_guanning'])[i][0]).addArray(['benghuai', 'weizhong'])
        },
        precontent: function () {
            game.import('character', function () {
                var thunder = {
                    name: 'thunder',
                    connect: true,
                    characterSort: {
                        thunder: {
                            tenthAnniv: ['th_xin_huanghao', 'th_liuba', 'th_fengfang', 'th_wangchang', 'th_zhaoang', 'th_sunru', 'th_quanhuijie', 'th_caiyang',
                                'th_xiahoulingnv', 'th_jiling', 'th_re_mazhong', 'th_re_liuchen', 'th_lukai', 'th_kebineng', 'th_liwan', 'th_huzhao', 'th_huangquan',
                                'th_bianxi', 'th_zhangxun', 'th_daxiaoqiao', 'th_fanchou', 'th_zhugeshang', 'th_lvkuanglvxiang', 'th_re_liufeng', 'th_re_taishici', 'th_niufu',
                            ],
                            //ollike: [],
                            abroad: ['th_guanqiujian', 'th_tw_daxiaoqiao', 'th_shen_guanyu', 'th_niujin', 'th_re_handang', 'th_tw_jiling',
                                'th_furong', 'th_tw_madai', 'th_tw_chendong', 'th_tw_re_fazheng',
                            ],
                            has: ['th_re_guohuanghou', 'th_re_jushou', 'th_yanfuren', 'th_re_xushu', 'th_fengyu', 'th_guanning', 'th_huangzu', 'th_zhangxuan', 'th_caohua', 'th_qinyilu',
                            ],
                            castratless: ['th_old_lukai', 'th_old_re_xushu',
                            ],
                        },
                    },
                    character: {
                        th_re_liufeng: ['male', 'shu', 4, ['th_xiansi'], ['die_audio']],
                        th_re_taishici: ['male', 'qun', 4, ['th_jixu'], ['die_audio']],
                        th_niufu: ['male', 'qun', '4/7', ['th_xiaoxi', 'th_xiongrao'], ['die_audio']],
                        th_caiyang: ['male', 'wei', 4, ['th_xunji', 'th_jiaofeng'], ['die_audio']],
                        th_quanhuijie: ['female', 'wu', 3, ['th_huishu', 'th_yishu', 'th_ligong'], ['die_audio']],
                        th_huzhao: ['male', 'qun', 3, ['th_midu', 'th_xianwang'], ['die_audio']],
                        th_huangquan: ['male', 'shu', 3, ['th_quanjian', 'th_tujue'], ['die_audio']],
                        th_lvkuanglvxiang: ['male', 'wei', 4, ['th_shuhe', 'th_liehou'], ['die_audio']],
                        th_sunru: ['female', 'wu', 3, ['th_xiecui', 'th_youxu'], ['die_audio']],
                        th_zhaoang: ['male', 'wei', '3/4', ['th_zhongjie', 'th_sushou'], ['die_audio']],
                        th_fengfang: ['male', 'qun', 3, ['th_diting', 'th_bihuo'], ['die_audio']],
                        th_wangchang: ['male', 'wei', 3, ['th_kaiji', 'th_pingxi'], ['die_audio']],
                        th_liwan: ['female', 'wei', 3, ['th_liandui', 'th_biejun'], ['die_audio']],
                        th_kebineng: ['male', 'qun', 4, ['th_koujing'], ['die_audio']],
                        th_old_lukai: ['male', 'wu', 4, ['th_oldbushi', 'th_oldzhongzhuang'], ['die_audio']],
                        th_lukai: ['male', 'wu', 4, ['th_bushi', 'th_zhongzhuang'], ['die_audio']],
                        th_zhugeshang: ["male", "shu", 3, ["th_sangu", "th_yizu"], ['die_audio']],
                        th_liuba: ['male', 'shu', 3, ['th_zhubi', 'th_liuzhuan'], ['die_audio']],
                        th_fanchou: ["male", "qun", 4, ["th_xingluan"], ['die_audio']],
                        th_qinyilu: ["male", "qun", 3, ["th_piaoping", "th_tuoxian", "th_zhuili"], ['die_audio']],
                        th_xiahoulingnv: ["female", "wei", 4, ["th_fuping", "th_weilie"], ['die_audio']],
                        th_caohua: ["female", "wei", 3, ["th_caiyi", "th_guili"], ['die_audio']],
                        th_zhangxuan: ["female", "wu", 4, ["th_tongli", "th_shezang"], ['die_audio']],
                        th_re_jushou: ["male", "qun", 3, ["th_jianying", "th_shibei"], ['die_audio']],
                        th_re_guohuanghou: ["female", "wei", 3, ["th_redanxin", "th_rejiaozhao"], ['die_audio']],
                        th_xin_huanghao: ["male", "shu", 3, ["th_qinqing", "th_huisheng", "th_cunwei"], ['die_audio']],
                        th_yanfuren: ["female", "qun", 3, ["th_channi", "th_nifu"], ['die_audio']],
                        th_re_xushu: ["male", "shu", 4, ["th_zhuhai", "th_qianxin"], ['die_audio']],
                        th_old_re_xushu: ["male", "shu", 4, ["th_oldzhuhai", "th_qianxin"], ['die_audio']],
                        th_fengyu: ["female", "qun", 3, ["th_tiqi", "th_baoshu"], ['die_audio']],
                        th_guanqiujian: ["male", "wei", 4, ["th_zhengrong", "th_hongju"], []],
                        th_tw_daxiaoqiao: ["female", "wu", 3, ["th_xingwu", "th_pingting"], ['die_audio']],
                        th_daxiaoqiao: ["female", "wu", 3, ["th_rexingwu", "th_luoyan"], ['die_audio']],
                        th_zhangxun: ["male", "qun", 4, ["th_suizheng"], ['die_audio']],
                        th_shen_guanyu: ["male", "shen", 5, ["th_wushen", "th_wuhun"], []],
                        th_niujin: ['male', 'wei', 4, ["th_cuorui", "th_liewei"], []],
                        th_re_handang: ['male', 'wu', 4, ["th_gongqi", "th_jiefan"], []],
                        th_tw_jiling: ["male", "qun", 4, ["th_shuangren"], ['die_audio']],
                        th_jiling: ["male", "qun", 4, ["th_reshuangren"], ['die_audio']],
                        th_jiling: ["male", "qun", 4, ["th_reshuangren"], ['die_audio']],
                        th_tw_re_fazheng: ['male', 'shu', 3, ['th_enyuan', 'th_xuanhuo'], ['die_audio']],
                        th_tw_chendong: ['male', 'wu', 4, ['th_yilie', 'th_fenming'], ['die_audio']],
                        th_furong: ['male', 'shu', 4, ['th_xuewei', 'th_liechi'], []],
                        th_tw_madai: ['male', 'shu', 4, ['mashu', 'th_qianxi'], ['die_audio']],
                        th_guanning: ['male', 'qun', '3/7', ['th_dunshi'], ['die_audio']],
                        th_re_mazhong: ['male', 'shu', 4, ['th_refuman'], ['die_audio']],
                        th_bianxi: ['male', 'wei', 4, ['th_dunxi'], ['die_audio']],
                        th_huangzu: ["male", "qun", 4, ["th_jinggong", "th_xiaojun"], ['die_audio']],
                        /* th_shiyan: ['male', 'shu', 9, ['th_shiyanskill'],[]], */
                    },
                    characterIntro: {
                        th_quanhuijie: '全皇后（244年－301年），吴郡钱塘（今浙江杭州）人，吴废帝孙亮的皇后，全尚之女，母孙恭之女。吴大帝长女全公主的侄孙女。赤乌十三年（250年），因全公主推荐全氏被册为孙亮的太子妃，建兴二年（253年），全氏被立为皇后。太平三年（258年），孙亮被权臣孙綝贬为会稽王，全皇后也一同贬为会稽王夫人。永安三年（260年），全皇后随夫到侯官，孙亮在途中死去，全皇后在侯官居住二十余年，吴亡后返回吴郡，永宁元年（301年）去世。',
                        th_huzhao: '胡昭（162年－250年），字孔明，颍川（治今河南禹州）人。汉末三国时期隐士、书法家。胡昭善长隶书，与钟繇、邯郸淳、卫觊、韦诞齐名。有“钟氏小巧，胡氏豪放”之说，世人并称“钟胡”。',
                        th_zhaoang: '赵昂，字伟章（一作伟璋），天水冀人。汉末时曹操部下。初为羌道令，建安中转参军事徒居州治冀城。建安十八年，马超围冀城多天，城中饥困，凉州刺史韦康不愿百姓再受苦而打算投降，赵昂进劝但不为所纳。后马超背信弃义杀韦康并劫其子赵月为人质，把他送至南郑。欲以此要迫使赵昂为己所用。后与梁宽、赵衢、庞恭、杨阜等结谋为康报仇，并举兵讨伐马超。马超兵败遂弃城，投奔张鲁。得张鲁之援后马超于建安十九年复寇，赵昂与妻子王异坚守祁山三十天至夏侯渊的救兵解围，其子赵月终为马超斩杀。自冀城之难，至于祁山，赵昂出九奇策。',
                        th_bianxi: '卞喜，其字不详，并州人士，汜水关守将。明代小说《三国演义》中的人物，史无记载。卞喜原为黄巾军，擅使流星锤。后投曹操，被任命为汜水关守将。关羽千里寻兄之时，斩杀孔秀、韩福。卞喜得知消息后自知不敌，邀请其至镇国寺，假意款待，实则布下刀斧手二百余人，试图谋害关羽。不料镇国寺僧人普净是关羽同乡，警告关羽寺中有埋伏。关羽得以识破卞喜阴谋，拔剑斩尽刀斧手，而后弃剑取刀追赶卞喜。卞喜以流星锤暗算，被关羽用大刀格开，赶上前去一刀将卞喜劈为两段。',
                        th_re_mazhong: '本名狐笃，字德信，巴西阆中人，初次出场时随丞相诸葛亮南征孟获，诸葛亮遣马忠与赵云两路夹攻，大败蛮将阿会喃。孟获派弟孟优赴汉军处假投降，欲内应外合，诸葛亮将计就计，埋伏擒获孟获和诸洞酋长，马忠亦于此战立下战功。后诸葛亮北伐时亦数次出阵，立下汗马功劳。',
                        th_re_liuchen: '刘禅第五子，自幼聪明，英敏过人。魏军兵临城下时，刘禅准备投降，刘谌劝阻刘禅投降不成后悲愤不已，遂自杀于昭烈庙。',
                        th_fengfang: '冯方，东汉历史人物，中常侍曹节女婿，灵帝初为尚书郎，后为大司农、司隶校尉。',
                        th_kebineng: '轲比能（？～235年），为中国三国时期的鲜卑首领之一。轲比能出身鲜卑支部，因他作战勇敢，执法公平，不贪财物，所以被鲜卑民众推举为大人。轲比能因其部落近塞，所以他抓住有利条件积极学习汉族先进技术和文化，促进了鲜卑族的进步和北方的民族融合。',
                        th_lukai: '陆凯（198－269年），字敬风，吴郡吴县（今江苏省苏州市）人。三国时期吴国重臣，丞相陆逊的族侄，大司马陆抗的族兄。',
                        th_old_lukai: '陆凯（198－269年），字敬风，吴郡吴县（今江苏省苏州市）人。三国时期吴国重臣，丞相陆逊的族侄，大司马陆抗的族兄。',
                        th_zhugeshang: '诸葛尚（244年2月－263年11月），琅琊阳都（今山东沂南）人，三国时期的人物，诸葛瞻长子，诸葛亮之孙。',
                        th_qinyilu: '秦宜禄（？—200年），并州云中郡云中县人（今内蒙古自治区呼和浩特市托克托县古城镇）。东汉军阀吕布的部将。吕布战败后归降曹操，后为张飞所杀。',
                        th_xiahoulingnv: '夏侯令女，字令女，名不详。生卒年不详，三国时期人物。夏侯文宁之女（《三国演义》中为夏侯令之女），曹文叔之妻。',
                        th_caohua: '曹操之女，为汉献帝妃嫔。建安十八年（213年），曹操进为魏公，把曹宪、曹节、曹华三个女儿，一齐都送给汉献帝刘协做了妃子，皆封为夫人，聘以束帛五万匹，年龄尚小者在魏公国待年长而聘。',
                        th_zhangxuan: ' 张布大女儿，张媱姐姐。',
                        th_re_jushou: '袁绍帐下谋士。史载他“少有大志，擅于谋略”。曾为冀州别驾，举茂才，并当过两次县令。后来又当韩馥别驾，被韩馥表为骑都尉。袁绍占据冀州后任用沮授为从事。经常对袁绍提出良策，但很多时候袁绍并不听从。官渡之战时袁绍大败，沮授未及逃走，被曹操所获，因拒降被曹操处死。',
                        th_re_guohuanghou: "明元郭皇后（？－264年），郭氏，西平郡人，魏明帝曹叡的皇后。郭氏出身于河西大族，黄初元年（220年），金城太守苏则平定西平郡叛乱，临走时将郭氏带入皇宫，成为皇子曹叡的妾室。",
                        th_xin_huanghao: "黄皓是蜀汉后期的宦官，随侍刘禅左右多年。董允死后逐渐参与政事，最终把持朝政，结党营私众多。多次进谗言将前线的姜维召回，致使北伐无以为继，姜维惧其党羽而屯田在外，不敢回朝。又隐瞒战事，终日蒙蔽刘禅，使刘禅无心朝政，魏军压境后以重金贿赂魏兵而逃生。",
                        th_re_xushu: "徐庶本名徐福，出身寒门。早年为人报仇，获救后改名徐庶。后与同郡石广元避难于荆州，与司马徽、诸葛亮、崔州平等人来往密切。刘备屯驻新野时，徐庶前往投奔，并向刘备推荐诸葛亮。徐庶南下时因母亲被曹操所获，辞别刘备，进入曹营。后来此事被艺术加工为“徐庶进曹营，一言不发”等歇后语，被广为流传。而徐庶也成为孝子的典范被加以称赞。魏文帝时，徐庶官至右中郎将、御史中丞。",
                        th_old_re_xushu: "徐庶本名徐福，出身寒门。早年为人报仇，获救后改名徐庶。后与同郡石广元避难于荆州，与司马徽、诸葛亮、崔州平等人来往密切。刘备屯驻新野时，徐庶前往投奔，并向刘备推荐诸葛亮。徐庶南下时因母亲被曹操所获，辞别刘备，进入曹营。后来此事被艺术加工为“徐庶进曹营，一言不发”等歇后语，被广为流传。而徐庶也成为孝子的典范被加以称赞。魏文帝时，徐庶官至右中郎将、御史中丞。",
                        th_fengyu: "冯妤，司隶人，袁术妻妾。在史书中被记载为天姿国色的美人。",
                        th_zhuling: "朱灵（生卒年不详），字文博，冀州清河国人，三国时期曹魏名将。官至后将军，封为高唐侯，谥号威侯。初为袁绍部将，后归顺曹操，随曹操征伐四方，屡建战功。",
                        th_shen_jiangwei: "姜维（202年～264年3月3日），字伯约，天水郡冀县（今甘肃省天水市甘谷县）人。三国时期蜀汉名将，天水功曹姜冏之子。",
                        th_tw_daxiaoqiao: "大乔，庐江皖县人，为乔公长女，孙策之妻，容貌国色流离。小乔为大乔之妹，周瑜之妻，资貌绝伦。两人合称“二乔”。",
                        th_zhangxun: "张勋是东汉末年军阀袁术麾下的重要将领，袁术称帝后的大将军。",
                        th_tw_jiling: "东汉末年袁术帐下将领，勇猛非常，曾奉命率军攻打小沛的刘备，在吕布辕门射戟的调停下撤兵。",
                        th_tw_re_fazheng: '字孝直，本为刘璋部下，刘备围成都时劝说刘璋投降，而后又与刘备进取汉中，献计将曹操大将夏侯渊斩首。法正善奇谋，深受刘备信任和敬重。',
                        th_tw_chendong: '陈武，东吴将领，孙策攻打刘繇，陈武前来相助，孙策非常喜爱陈武，拜为校尉，使作先锋。陈武以十数骑兵力杀敌五十余人。后于赤壁等战役屡立功勋。董袭献上严虎的人头来降孙策。赤壁之战，董袭受周瑜命，分兵去汉阳，合肥会战时接应太史慈，逍遥津支援孙权。濡须口之战时，董袭在船上督战，船覆董袭坚守殉职。',
                        th_tw_madai: '名将马超的从弟。早年他曾经从曹操手中死里逃生，后跟随马超大战曹操。后在诸葛亮病逝后受杨仪派遣斩杀了蜀将魏延。曾率领军队出师北伐，被魏将牛金击败而退还。',
                        th_caiyang: '蔡阳（？－201年），又作蔡扬，东汉丞相曹操部下武将，汝南太守。于建安六年（201）奉曹操之命攻击与刘备联合的汝南贼龚都等人，兵败被刘备所杀。',
                    },
                    characterTitle: {

                    },
                    characterReplace: {
                        tw_wangchang: ['tw_wangchang', 'th_wangchang'],
                        mazhong: ['mazhong', 'th_re_mazhong'],
                        liuchen: ['liuchen', 'th_re_liuchen'],
                        liuba: ['liuba', 'th_liuba'],
                        th_lukai: ['th_lukai', 'th_old_lukai'],
                        fanchou: ['fanchou', 'ns_fanchou', 'th_fanchou'],
                        yj_jushou: ['xin_jushou', 'yj_jushou', 'th_re_jushou'],
                        guohuanghou: ['th_re_guohuanghou', 'guohuanghou'],
                        huanghao: ['th_xin_huanghao', 'huanghao'],
                        xushu: ['re_xushu', 'xin_xushu', 'xushu', 'th_re_xushu', 'th_old_re_xushu'],
                        fengfangnv: ['fengfangnv', 'th_fengyu'],
                        guanqiujian: ['guanqiujian', 're_guanqiujian', 'old_guanqiujian', 'th_guanqiujian'],
                        daxiaoqiao: ['daxiaoqiao', 'th_tw_daxiaoqiao', 'th_daxiaoqiao'],
                        shen_guanyu: ['shen_guanyu', 'th_shen_guanyu'],
                        niujin: ['niujin', 're_niujin', 'th_niujin'],
                        handang: ['xin_handang', 're_handang', 'handang', 'th_re_handang'],
                        jiling: ['jiling', 'th_tw_jiling', 'th_jiling'],
                        fazheng: ['re_fazheng', 'xin_fazheng', 'fazheng', 'th_tw_re_fazheng'],
                        chendong: ['chendong', 'sp_chendong', 'th_tw_chendong'],
                        furong: ['furong', 'th_furong'],
                        madai: ['re_madai', 'old_madai', 'madai', 'th_tw_madai'],
                        huangzu: ['huangzu', 'th_huangzu', 'dc_huangzu'],
                        sunru: ['sunru', 'th_sunru'],
                        lvkuanglvxiang: ['lvkuanglvxiang', 'th_lvkuanglvxiang'],
                        liufeng: ['liufeng', 'th_re_liufeng'],
                        taishici: [],
                    },
                    translate: {
                        th_shiyan: '试验',
                        th_shiyanskill: '试验',
                        th_shiyanskill_info: '试验',
                        has: '本体已有',
                        castratless: '爆料版',
                        th_re_guohuanghou: "界郭皇后",
                        th_xin_huanghao: "黄皓",
                        th_yanfuren: "严夫人",
                        th_re_xushu: "界徐庶",
                        th_old_re_xushu: "爆料版界徐庶",
                        th_old_re_xushu_ab: "界徐庶",
                        th_fengyu: "冯妤",
                        th_guanqiujian: "TW毌丘俭",
                        th_tw_daxiaoqiao: "TW大小乔",
                        th_daxiaoqiao: "大小乔",
                        th_zhangxun: "张勋",
                        th_shen_guanyu: "TW神关羽",
                        th_niujin: "TW牛金",
                        th_re_handang: "TW界韩当",
                        th_tw_jiling: "TW纪灵",
                        th_tw_re_fazheng: 'TW界法正',
                        th_tw_chendong: 'TW陈武董袭',
                        th_furong: 'TW傅肜',
                        th_guanning: '管宁',
                        th_tw_madai: 'TW界马岱',
                        th_qinyilu: '秦宜禄',
                        th_piaoping: '漂萍',
                        th_tuoxian: '托献',
                        th_zhuili: '惴栗',
                        th_fanchou: '樊稠',
                        th_xingluan: '兴乱',
                        th_jiling: '纪灵',
                        th_reshuangren: '双刃',
                        ollike: 'OL武将',
                        th_liuba: '刘巴',
                        th_zhubi: '铸币',
                        th_liuzhuan: '流转',
                        th_zhugeshang: '诸葛尚',
                        th_sangu: '三顾',
                        th_yizu: '轶祖',
                        th_lukai: '陆凯',
                        th_bushi: '卜筮',
                        th_zhongzhuang: '忠壮',
                        th_old_lukai: '爆料版陆凯',
                        th_old_lukai_ab: '陆凯',
                        th_oldbushi: '卜筮',
                        th_oldzhongzhuang: '忠壮',
                        th_kebineng: '轲比能',
                        th_koujing: '寇旌',
                        th_liwan: '李婉',
                        th_liandui: '联对',
                        th_biejun: '别君',
                        th_biejun2: '别君',
                        th_liandui_info: '你使用一张牌时，若上一张牌的使用者不为你，你可以令其摸两张牌；其他角色使用一张牌时，若上一张牌的使用者为你，其可以令你摸两张牌。',
                        th_biejun_info: '其他角色出牌阶段限一次，其可以交给你一张手牌。当你每回合第一次受到伤害时，若你手牌中没有本回合以此法获得的牌，你可以翻面并防止此伤害。',
                        th_koujing_info: '出牌阶段限一次，你可以明置任意张手牌至回合结束，这些牌视为无视次数的〖杀〗。其他角色因此受到伤害后，可以用所有手牌（至少一张）与这些牌交换。',
                        th_bushi_info: '准备阶段，你可以将四种花色重新分配至以下描述的“[]”框中：你使用[♠]牌无次数限制；你使用或打出[♥]后，摸一张牌；当你成为[♣]牌的目标后，可弃置一张牌并令此牌对你无效；结束阶段，你从牌堆或弃牌堆中获得一张[♦]牌。',
                        th_zhongzhuang_info: '锁定技，你使用【杀】造成伤害时，若你的攻击范围大于3，则此伤害+1；若你的攻击范围小于3，则此伤害最多为1点。',
                        th_oldbushi_info: '锁定技，你使用♠牌无次数限制；你使用或打出♦牌后，摸两张牌；当你成为♣牌的目标后/结束阶段，获得一张♥牌。准备阶段，你重新分配四花色。',
                        th_oldzhongzhuang_info: '锁定技，当你造成伤害时，若你的攻击范围大于3，则你只能造成1点伤害；若你的攻击范围小于3，则此伤害+1。',
                        th_sangu_info: '一名角色的出牌阶段开始时，若其手牌数不大于其体力上限，你可以观看牌堆顶三张牌，然后亮出其中一张非装备牌，该角色此阶段可以将所有手牌当此牌使用。',
                        th_yizu_info: '锁定技，每个回合限一次，当你成为〖杀〗或〖决斗〗的目标后，若你的体力值不大于使用者的体力值，你回复1点体力。',
                        th_zhubi_info: '当方块牌因弃置而进入弃牌堆后，你可以从牌堆或弃牌堆将一张【无中生有】置于牌堆顶',
                        th_liuzhuan_info: '锁定技，其他角色的回合内，其于摸牌阶段外获得的牌无法对你使用，这些牌本回合进入弃牌堆后，你获得之。',
                        th_reshuangren_info: '出牌阶段开始时，你可以与一名角色拼点。若你赢，你视为对其（和/或）与其势力相同的另一名角色使用一张【杀】（无距离和次数限制）；若你没赢，你此阶段不能使用【杀】。',
                        th_xingluan_info: '出牌阶段限一次，当你使用仅指定一个目标的牌后，你可以获得牌堆里的随机一张点数为6的牌（没有则改为摸六张牌）。',
                        th_piaoping_info: '锁定技，转换技，当你使用一张牌时，阳：你摸X张牌；阴：你弃置X张牌。（X为本回合“漂萍”发动次数且至多为你当前体力值）',
                        th_tuoxian_info: '每局游戏限零次，当你因“漂萍”弃置牌时，你可以改为将这些牌交给一名其他角色，然后令该角色选择一项：<br>1.其弃置其区域内等量的牌；<br>2.令你的“漂萍”技能本回合失效。',
                        th_zhuili_info: '锁定技，当你成为其他角色使用黑色牌的目标时，若此时你的“漂萍”技能状态为：阳，令你的“托献”技能使用次数+1，然后此技能本回合失效；阴，令你的“漂萍”状态转换为阳。',
                        th_xiahoulingnv: '夏侯令女',
                        th_fuping_info: '当你成为其他角色使用牌的目标且结算后，若此牌未被记录且你有未被废除的装备栏，你可以废除你装备区里一个装备栏，并记录此牌，然后本局你可以将一张非基本牌当已记录的牌使用或打出（每种牌名每回合限一次）。若你的装备栏均被废除过，你使用牌无距离限制。',
                        th_weilie_info: '每局游戏限一次，出牌阶段，你可以弃置一张牌令一名角色回复1点体力，然后若其体力值未满，则摸一张牌。你每次发动“浮萍”记录牌名时，此技能使用次数+1。',
                        th_fuping: '浮萍',
                        th_weilie: '炜烈',
                        th_caohua: '曹华',
                        th_caiyi_info: '转换技，结束阶段，你可令一名角色选择一项执行后移除：阳：回复X点体力；摸X张牌；复原武将牌；随机执行一个已移除的阳选项。阴：受到X点伤害；弃X张牌；翻面并横置；随机执行一个已移除的阴选项。（X为该状态剩余选项数量）',
                        th_guili_info: '你的第一个回合开始时，你选择一名其他角色，该角色每轮第一个回合结束后，若其本回合未造成伤害，你执行一个额外回合。',
                        th_caiyi: '彩翼',
                        th_guili: '归离',
                        th_zhangxuan: '张嫙',
                        th_tongli_info: '出牌阶段，当你使用牌指定目标后，若你手牌中的花色数等于你此阶段已使用牌的张数，可令此牌效果额外执行X次（X为你手牌中的花色数）。',
                        th_shezang_info: '每轮限一次，当你或你回合内有角色进入濒死状态时，你可以从牌堆获得不同花色的牌各一张。',
                        th_tongli: '同礼',
                        th_shezang: '奢葬',
                        th_re_jushou: '界沮授',
                        th_jianying: '渐营',
                        th_jianying_info: '当你使用牌时，若此牌与你使用的上一张牌点数或花色相同，则你可以摸一张牌。',
                        th_shibei: '矢北',
                        th_shibei_info: '锁定技，你每回合第一次受到伤害后，回复1点体力。你每回合第二次受到伤害后，失去1点体力。',
                        th_rejiaozhao: "矫诏",
                        "th_rejiaozhao_info": "出牌阶段限一次，你可以展示一张手牌，然后：</br>0级：令你距离最近的其他角色声明一种基本牌或普通锦囊牌，你可将此牌当声明的牌使用（不能对自己使用）。</br>1级：出牌阶段限一次，你可以将一张手牌当任意一种基本牌或普通锦囊牌使用（不能对自己使用）。</br>2级：出牌阶段，你可以将一张手牌当任意一种基本牌或普通锦囊牌使用（每种类型的牌限一次）。",
                        th_rejiaozhao2: "矫诏",
                        th_redanxin: "殚心",
                        "th_redanxin_info": "当你受到伤害后，你可以摸一张牌，然后升级矫诏。",
                        th_qinqing: "寝情",
                        "th_qinqing_info": "结束阶段，你可以弃置攻击范围内含有一号位的一名其他角色的一张牌。然后若其手牌比一号位少，该角色摸一张牌；若其手牌比一号位多，你摸一张牌。",
                        th_huisheng: "贿生",
                        "th_huisheng_info": "当你受到其他角色对你造成的伤害时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此伤害，然后你不能再对其发动〖贿生〗；2.弃置等量的牌",
                        th_cunwei: "存畏",
                        "th_cunwei_info": "锁定技，当你成为其他角色使用普通锦囊牌的目标后，若你不是此牌唯一目标，你弃置一张牌。若此牌为黑色且你是此牌唯一目标，你摸一张牌。",
                        th_channi: "谗逆",
                        "th_channi_info": "出牌阶段限一次，你可以交给一名其他角色任意张手牌，然后该角色可以将至多等量的手牌当【决斗】使用。若其使用此【决斗】造成了伤害，其摸X张牌（X为其当【决斗】牌的张数），若其因此【决斗】受到了伤害，你弃置所有手牌。",
                        th_nifu: "匿伏",
                        "th_nifu_info": "锁定技，每个回合结束时，你将手牌摸至或弃至三张。",
                        th_yusui: "玉碎",
                        "th_yusui_info": "当你成为其他角色使用黑色牌的目标后，你可以失去一点体力然后选择一项：1、令其弃置手牌至与你相同；2、令其失去体力值至与你相同。",
                        th_boyan: "驳言",
                        "th_boyan_info": "出牌阶段限一次，你可以选择一名其他角色，该角色将手牌摸至体力上限（最多摸至5张），然后本回合不能使用或打出手牌。",
                        th_zhuhai: "诛害",
                        "th_zhuhai_info": "其他角色的结束阶段，若该角色本回合造成过伤害，则你可以将一张手牌当【杀】或【过河拆桥】对其使用。",
                        th_oldzhuhai: "诛害",
                        "th_oldzhuhai_info": "其他角色的结束阶段，若该角色本回合造成过伤害，则你可以视为对其使用一张【杀】或【过河拆桥】。",
                        th_qianxin: "潜心",
                        th_jianyan: "荐言",
                        th_qianxi: '潜袭',
                        th_qianxi2: '潜袭',
                        th_qianxi_info: '准备阶段，你可以摸一张牌并弃置一张牌，然后令距离为1的一名角色本回合不能使用或打出与你弃置牌颜色相同的手牌。结束阶段，若你于本回合使用【杀】对其造成过伤害，你令其不能使用或打出另一种颜色的牌至其下回合结束。',
                        th_yanhuo: "延祸",
                        "th_yanhuo_info": "你死亡时，你可令本局游戏【杀】造成的伤害+1。",
                        "th_qianxin_info": "觉醒技，当你造成一次伤害后，若你已受伤，你须减1点体力上限，并获得技能“荐言”。",
                        "th_jianyan_info": "出牌阶段每项限一次，你可以声明：一种牌的类别或一种牌的颜色，然后亮出牌库中第一张符合你声明的牌，然后你令一名男性角色获得此牌",
                        th_tiqi: "涕泣",
                        th_baoshu: "宝梳",
                        "th_tiqi_info": "其他角色的出牌阶段开始前，若其本回合摸牌阶段摸牌数不等于2，则你可以摸与超出或少于2等量的牌，然后可以令该角色本回合手牌上限增加或减少同样的数值。",
                        "th_baoshu_info": "准备阶段，你可以选择至多X名角色（X为你的体力上限），这些角色各获得一个“梳”标记并重置武将牌（有“梳”标记的角色摸牌阶段多摸与其“梳”等量的牌，然后移去其所有“梳”），你每少选一名角色，其余的目标角色便多获得一个“梳”。",
                        tenthAnniv: "十周年补全",
                        abroad: "海外异构",
                        th_zhengrong: "征荣",
                        "th_zhengrong_info": "锁定技，每当你于出牌阶段对其他角色使用累计偶数张牌后，或当你于出牌阶段第一次造成伤害后，你可以将一名其他角色的一张牌置于你的武将牌上，称为“荣”。",
                        th_hongju: "鸿举",
                        "th_hongju_info": "觉醒技，准备阶段，若“荣”的数量不小于3，则你摸等同“荣”数量的牌，然后用任意张手牌替换等量的“荣”，之后获得技能“清侧”并选择是否减1点体力上限获得技能“扫讨”。",
                        th_qingce: "清侧",
                        "th_qingce_info": "出牌阶段，你可以移去一张“荣”，然后弃置其他角色区域内的一张牌。",
                        th_saotao: "扫讨",
                        "th_saotao_info": "锁定技，你使用的【杀】和普通锦囊牌不能被响应。",
                        th_xingwu: "星舞",
                        "th_xingwu_info": "弃牌阶段开始时，你可以将一张牌置于武将牌上，然后你可移去三张“星舞”牌，弃置一名其他角色装备区里的所有牌，然后对其造成2点伤害（若为女性角色则改为1点伤害）。",
                        th_pingting: "娉婷",
                        "th_pingting_info": "锁定技，每轮开始时或其他角色于你回合内进入濒死状态时，你摸一张牌然后将一张牌作为“星舞”牌置于武将牌上；若你有“星舞”牌，你视为拥有技能“天香”和“流离”。",
                        th_jingce: "精策",
                        "th_jingce_info": "出牌阶段，当你使用了第X张牌时（X为你当前体力值），你可以摸等量张牌。若这不是你本阶段第一次摸牌或本回合你已造成过伤害，你获得一个“策”标记。",
                        th_yuzhang: "御嶂",
                        "th_yuzhang_info": "你可弃置一个“策”，跳过一个阶段。当你受到伤害后，你可弃置一个“策”并选择一项令伤害来源执行：1.本回合不可再使用或打出手牌；2.弃置等同其体力值数量的牌。",
                        th_rexingwu: "星舞",
                        "th_rexingwu_info": "弃牌阶段开始时，你可以将一张手牌置于武将牌上，称为“舞”。若你的“舞”达到三张，则你可移去三张“舞”，弃置一名其他角色装备区里的所有牌，然后对其造成X点伤害（X为移去“舞”的花色数，若为女性角色则改为1点伤害）。",
                        th_luoyan: "落雁",
                        "th_luoyan_info": "锁定技，若你有“舞”，你视为拥有技能“天香”和“流离”。",
                        th_suizheng: "随征",
                        "th_suizheng_info": "结束阶段,你可以选择一名角色。该角色下个回合的出牌阶段使用【杀】无距离限制且可以多使用一张【杀】。然后其出牌阶段结束时，你可以视为对其本回合造成过伤害的一名其他角色使用一张【杀】。",
                        th_wushen: "武神",
                        "th_wushen_info": "锁定技，你每阶段使用的第一张【杀】不可被响应；你的红桃手牌视为【杀】；你使用红桃【杀】无距离和次数限制，且额外指定所有拥有“梦魇”标记的角色为目标。",
                        th_wuhun: "武魂",
                        "th_wuhun_info": "锁定技，当你受到1点伤害后，你令伤害来源获得1枚“梦魇”标记，当你对有“梦魇”标记的角色造成伤害后，你令其获得1枚“梦魇”标记。当你死亡时，你可以进行判定，若结果不为【桃】或【桃园结义】，你选择至少一名拥有“梦魇”标记的角色，令这些角色各自依次失去X点体力（X为其拥有的“梦魇”标记数）。",
                        th_cuorui: "挫锐",
                        th_cuorui_info: "限定技，准备阶段，你可将牌摸至X张（X为场上角色手牌最多的数量且最多摸5张）并废除你的判定区，若你的判定区已废除，则改为对你选择的一名其他角色造成1点伤害。",
                        th_liewei: "裂围",
                        th_liewei_info: "锁定技，当你杀死一名角色后，你选择一项：1.摸两张牌；2.令“挫锐”视为未发动过（本局游戏未发动过挫锐则不可选择）。",
                        th_gongqi: "弓骑",
                        th_gongqi_info: "你的攻击范围无限。出牌阶段限一次，你可以弃置一张牌，然后你本阶段与弃置的牌花色相同的【杀】无次数限制；若你以此法弃置的牌为装备牌，你可以弃置一名其他角色的一张牌。",
                        th_jiefan: "解烦",
                        th_jiefan_info: "限定技，出牌阶段，你可以选择一名角色，然后令攻击范围内含有该角色的所有角色各选择一项：1.弃置一张武器牌；2.令其摸一张牌。若你上一次发动“解烦”的目标角色进入了濒死状态，则此限定技视为未发动过。",
                        th_shuangren: "双刃",
                        th_shuangren_info: "出牌阶段开始时，你可以与一名角色拼点。若你赢，可视为对与其距离不大于1的至多两名角色依次使用一张无距离限制且不计入次数的【杀】；若你没赢，其可以选择视为对你使用一张无距离限制的【杀】。出牌阶段结束时，若你本回合未发动过“双刃”且未使用【杀】造成过伤害，则你可以弃一张牌发动“双刃”。",
                        th_enyuan: '恩怨',
                        th_enyuan1: '恩怨',
                        th_enyuan2: '恩怨',
                        th_enyuan_info: '当你获得一名其他角色的至少两张牌后，你可以令其摸一张牌；若其手牌区或装备区没有牌，你可改为令其回复1点体力。当你受到1点伤害后，除非伤害来源交给你一张手牌，否则其失去1点体力；若其交给你的牌不为♥，则你摸一张牌。',
                        th_xuanhuo: '眩惑',
                        th_xuanhuo_info: '摸牌阶段结束时，你可以交给一名其他角色两张手牌，然后该角色选择一项：1. 视为对你选择的另一名角色使用任意一张【杀】或【决斗】，2. 你获得其两张牌。',
                        th_yilie: '毅烈',
                        th_yilie_info: '出牌阶段开始时，你可选择：①本阶段内使用【杀】的次数上限+1。②本回合内使用【杀】指定横置角色后，或被【闪】抵消时，摸一张牌。③背水：失去1点体力。',
                        th_fenming: '奋命',
                        th_fenming_info: '准备阶段，你可以选择一名角色，令其：1.弃置一张牌；2.进入连环状态。背水：你进入连环状态。',
                        th_xuewei: '血卫',
                        th_xuewei_info: '每轮限一次，其他角色的出牌阶段开始时，你可以选择另一名其他角色并令当前回合角色选择一项：1. 直到本回合结束，其不能对你选择的另一名其他角色使用【杀】且手牌上限-2。2. 视为你对其使用一张【决斗】。',
                        th_liechi: '烈斥',
                        th_liechi_info: '锁定技，当你受到伤害后，若你的体力值不大于伤害来源，你选择一项：1. 令其将手牌弃至与你手牌数相同；2. 弃置其一张牌。若本回合你进入过濒死状态，则你可以背水：弃置一张装备牌。',
                        th_dunshi: '遁世',
                        th_dunshi_info: '每回合限一次，你可视为使用或打出一张【杀】，【闪】，【桃】或【酒】。然后当前回合角色本回合下次造成伤害时，你选择两项：</br>1.防止此伤害，选择1个包含“仁义礼智信”的技能令其获得；</br>2.减1点体力上限并摸X张牌（X为你选择3的次数）；</br>3.删除你本次视为使用的牌名。',
                        th_wangchang: '王昶',
                        th_fengfang: '冯方',
                        th_diting: '谛听',
                        th_diting_info: '其他角色的出牌阶段开始时，若你在其攻击范围内，你可以观看其X张手牌（X为你的体力值），然后秘密选择其中一张。选择完成后，该角色此阶段获得以下效果：使用此牌指定你为目标后，此牌对你无效；使用此牌没有指定你为目标，你摸两张牌；若其出牌阶段结束时此牌仍在手中，你获得之。',
                        th_bihuo: '避祸',
                        th_bihuo_info: '当你受到其他角色造成的伤害后，你可令一名角色下回合的摸牌阶段摸牌数+1；当你对其他角色造成伤害后，你可令一名角色下回合的摸牌阶段摸牌数-1。',
                        th_kaiji: '开济',
                        th_kaiji_info: '转换技，出牌阶段限一次，阳：你可以摸等于体力上限张数的牌；阴：你可以弃置至多等于体力上限张数的牌（至少一张）。',
                        th_pingxi: '平袭',
                        th_pingxi_info: '结束阶段，若本回合有牌因弃置进入弃牌堆，你选择至多X名其他角色（X为本回合因弃置进入弃牌堆的牌数），弃置这些角色各一张牌，然后视为对这些角色各使用一张【杀】。',
                        th_re_mazhong: '界马忠',
                        th_refuman: '抚蛮',
                        th_refuman2: '抚蛮',
                        th_refuman_info: '出牌阶段每名角色限一次，你可以弃置一张牌，然后令一名其他角色随机获得弃牌堆一张【杀】，直到其下回合结束，其使用或打出“抚蛮”牌时，你与其各摸一张牌。',
                        th_re_liuchen: '界刘谌',
                        th_rezhanjue: '战绝',
                        th_reqinwang: '勤王',
                        th_rezhanjue_info: '出牌阶段，你可以将所有手牌当【决斗】使用，然后你和受伤的角色各摸一张牌。若你因此摸过三张或更多的牌，则本回合“战绝”失效。',
                        th_reqinwang_info: '主公技，出牌阶段限一次，你可令所有其他蜀国角色依次选择是否交给你一张【杀】，然后你可令选择是的角色摸一张牌。以此法获得的【杀】本回合不计算在“战绝”使用的牌中。',
                        th_bianxi: '卞喜',
                        th_dunxi: '钝袭',
                        th_dunxi_info: '当你使用伤害牌指定其他角色结算完成后，你可令其中一个目标获得1个“钝”标记。有“钝”标记的角色使用基本牌或锦囊牌指定单一目标时，移去一个“钝”，然后目标改为随机一名角色。若随机的目标与原本目标相同，则移去所有“钝”，失去1点体力并结束自己的出牌阶段。',
                        th_huangzu: '黄祖',
                        th_jinggong_info: '你可以将装备牌当无距离限制的【杀】使用。此【杀】造成的伤害改为X（X为你计算与该角色的距离且至多为3）。',
                        th_xiaojun_info: '你使用牌指定唯一目标后，你可以弃置其一半数量的手牌（向下取整）。若其中有与你指定其为目标的牌花色相同的牌，你弃置一半数量的手牌（向下取整）。',
                        th_jinggong: '精弓',
                        th_xiaojun: '骁隽',
                        th_zhaoang: '赵昂',
                        th_sunru: '孙茹',
                        th_zhongjie: '忠节',
                        th_sushou: '夙守',
                        th_zhongjie_info: '每轮限一次，当一名角色因失去体力而进入濒死状态时，你可以令其回复1点体力并摸一张牌。',
                        th_sushou_info: '一名角色的出牌阶段开始时，若其手牌数是全场唯一最多的，你可以失去1点体力并摸X张牌。若此时不是你的回合内，你观看当前回合角色一半数量的手牌（向下取整），你可以用至多X张手牌替换其中等量的牌。（X为你已损失的体力值）',
                        th_xiecui: '撷翠',
                        th_youxu: '忧恤',
                        th_xiecui_info: '有角色在自己回合内使用牌首次造成伤害时，你可令此伤害+1。若该角色为吴势力角色，其获得此伤害牌且本回合手牌上限+1。',
                        th_youxu_info: '一名角色回合结束时，若其手牌数大于体力值，你可以展示其一张手牌然后交给另一名角色。若获得牌的角色体力值全场最低，回复一点体力。',
                        th_quanhuijie: '全惠解',
                        th_huishu: '慧淑',
                        th_yishu: '易数',
                        th_ligong: '离宫',
                        th_huishu_info: '摸牌阶段结束时，你可以摸2张牌然后弃置1张手牌。若如此做，你本回合弃置超过2张牌时，从弃牌堆中随机获得一张锦囊牌。',
                        th_yishu_info: '当你于出牌阶段外失去牌后，“慧淑”中最小的一个数字+2且最大的一个数字-1。',
                        th_ligong_info: '觉醒技，准备阶段，若“慧淑”有数字达到5，你加1点体力上限并回复1点体力，失去“慧淑”和“易数”，然后从随机四个已开通的吴国女性武将中选择两个技能获得。',
                        th_huzhao: '胡昭',
                        th_midu: '弥笃',
                        th_xianwang: '贤望',
                        th_midu_info: '出牌阶段限一次，你可以选择一项：1. 废除你任意数量的装备栏，然后令一名角色摸等量的牌；2. 恢复你的一个被废除的装备栏，你获得“活墨”直到你的下个回合开始。',
                        th_xianwang_info: '锁定技，当你有废除的装备栏时，若废除的栏数小于3，其他角色与你计算距离+1；否则其他角色与你计算距离+2。',
                        th_huangquan: '黄权',
                        th_quanjian: '劝谏',
                        th_tujue: '途绝',
                        th_quanjian_info: '出牌阶段每项限一次，你选择以下一项令一名其他角色选择是否执行：1. 视为对一名其攻击范围内你指定的角色造成1点伤害。2. 将手牌调整至手牌上限（最多摸到5张），其不能使用手牌直到回合结束。若其不执行，则其本回合下次受到的伤害+1。',
                        th_tujue_info: '限定技，当你进入濒死状态时，你可以将所有牌交给一名其他角色，然后你回复等量的体力值并摸等量的牌。',
                        th_lvkuanglvxiang: '吕旷吕翔',
                        th_shuhe: '数合',
                        th_liehou: '列侯',
                        th_shuhe_info: '出牌阶段限一次，你可以展示一张手牌，并获得场上与展示牌相同点数的牌。如果你没有因此获得牌，你需将展示牌交给一名其他角色，然后“列侯”的额外摸牌数+1（不能超过5）。',
                        th_liehou_info: '锁定技，摸牌阶段，你额外摸1张牌，然后选择一项：1. 弃置与额外摸牌数等量张牌；2. 失去1点体力。',
                        th_caiyang: '蔡阳',
                        th_xunji: '寻嫉',
                        th_jiaofeng: '交锋',
                        th_xunji_info: '出牌阶段限一次，你可以选择一名其他角色。然后若该角色于其下个回合内造成过伤害，则其结束阶段你视为对其使用一张【决斗】。此【决斗】对其造成伤害后，你失去等量的体力。',
                        th_jiaofeng_info: '锁定技，当你每回合首次造成伤害时，若你已损失的体力值：大于0，你摸一张牌；大于1，此伤害+1；大于2，你回复1点体力。 备注：大于1前两项都执行，大于2时前三项都执行。',
                        th_re_liufeng: '刘封',
                        th_re_taishici: '太史慈',
                        th_niufu: '牛辅',
                        th_xiansi: '陷嗣',
                        th_xiansi2: '陷嗣',
                        th_xiansi3: '陷嗣',
                        th_jixu: '击虚',
                        th_xiaoxi: '宵袭',
                        th_xiongrao: '熊扰',
                        th_xiansi_info: '准备阶段，你可以将至多两名角色的各一张牌置于武将牌上，称为"逆"；其他角色可以移去两张"逆"，视为对你使用【杀】。若“逆”数超过你的体力值，你可以移去一张“逆”视为使用一张【杀】。',
                        th_jixu_info: '出牌阶段限一次，你选择至多与你体力值相等数量的其他角色各猜测你的手牌区里是否有【杀】。系统公布这些角色各自的选择和猜测结果。若你的手牌区里：有【杀】，你此阶段使用【杀】次数+X且你可令所有猜错的角色也成为你使用【杀】的目标；没有【杀】，你弃置所有猜错的角色一张牌。结算完成后，你摸X张牌（X为猜错的角色数）。',
                        th_xiaoxi_info: '锁定技，准备阶段，你减1~2体力上限，然后选择一项：1.获得你攻击范围内一名其他角色的X张牌；2.视为对你攻击范围内的一名其他角色使用X张【杀】（X为你本次减少的体力上限）。',
                        th_xiongrao_info: '限定技，出牌阶段，你可以令所有其他角色本回合除锁定技、限定技、觉醒技以外的技能全部失效，然后你将体力上限增加至7并摸等同于增加体力上限张数的牌。',
                    },
                    skill: {
                        th_rejiaozhao: {
                            enable: "phaseUse",
                            audio: "ext:Thunder/audio/skill:2",
                            locked: false,
                            check: function (card) {
                                return 8 - get.value(card);
                            },
                            filter: function (event, player) {
                                if (player.getCards('h').contains(player.storage.th_rejiaozhao)) return false;
                                return !player.hasSkill('th_rejiaozhao_used') && player.countCards('h') > 0;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            content: function () {
                                'step 0'
                                if (player.countMark('th_redanxin') == 2 && !player.storage.th_rejiaozhao3) player.storage.th_rejiaozhao3 = [];
                                player.showCards(cards);
                                'step 1'
                                if (player.countMark('th_redanxin') > 0) {
                                    event.target = player;
                                } else {
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(function (a, b) {
                                        return Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b));
                                    });
                                    var distance = Math.max(1, get.distance(player, targets[0]));
                                    for (var i = 1; i < targets.length; i++) {
                                        if (Math.max(1, get.distance(player, targets[i])) > distance) {
                                            targets.splice(i);
                                            break;
                                        }
                                    }
                                    player.chooseTarget('请选择【矫诏】的目标', true, function (card, player, target) {
                                        return _status.event.targets.contains(target);
                                    }).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    }).set('targets', targets);
                                }
                                'step 2'
                                if (!event.target) {
                                    event.target = result.targets[0];
                                    player.line(result.targets, 'green');
                                }
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                var list = [];
                                if (player.storage.th_rejiaozhao3) { list2 = player.storage.th_rejiaozhao3; } else list2 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name == 'sha' && !list2.contains('basic')) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    } else if (get.type(name) == 'basic' && !list2.contains('basic')) list.push(['基本', '', name]);
                                    else if (get.type(name) == 'trick' && !list2.contains('trick')) list.push(['锦囊', '', name]);
                                }
                                event.target.chooseButton(['矫诏', [list, 'vcard']], true).set('ai', function (button) {
                                    var player = _status.event.getParent().player,
                                        card = {
                                            name: button.link[2],
                                            nature: button.link[3],
                                            storage: {
                                                //nowuxie:true,
                                                th_rejiaozhao: player,
                                            }
                                        };
                                    return player.getUseValue(card, null, true) * _status.event.att;
                                }).set('att', get.attitude(event.target, player) > 0 ? 1 : -1);
                                'step 3'
                                var chosen = result.links[0][2];
                                var nature = result.links[0][3];
                                if (player.countMark('th_redanxin') == 2) player.storage.th_rejiaozhao3.push(get.type(result.links[0][2]));
                                var fakecard = {
                                    name: chosen,
                                    storage: { /* nowuxie:true, */ th_rejiaozhao: player },
                                };
                                if (nature) fakecard.nature = nature;
                                event.target.showCards(game.createCard({
                                    name: chosen,
                                    nature: nature,
                                    suit: cards[0].suit,
                                    number: cards[0].number,
                                }), get.translation(event.target) + '声明了' + get.translation(chosen));
                                player.storage.th_rejiaozhao = cards[0];
                                player.storage.th_rejiaozhao_card = fakecard;
                                game.broadcastAll(function (name, card) {
                                    lib.skill.th_rejiaozhao2.viewAs = fakecard;
                                    card.addGaintag('th_rejiaozhao');
                                }, fakecard, cards[0]);
                                if (!player.storage.th_rejiaozhao3 || player.storage.th_rejiaozhao3.length == 2) player.addTempSkill('th_rejiaozhao_used', 'phaseEnd');
                                player.enableSkill('th_rejiaozhao');
                                player.addTempSkill('th_rejiaozhao2');
                                player.disableSkill('th_rejiaozhao', 'th_rejiaozhao');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                used: {
                                    sub: true,
                                },
                            },
                        },
                        th_rejiaozhao2: {
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (player.countMark('th_redanxin') < 2 && card.storage && card.storage.th_rejiaozhao && card.storage.th_rejiaozhao == target) return false;
                                },
                            },
                            enable: "phaseUse",
                            audio: "th_rejiaozhao",
                            charlotte: true,
                            filter: function (event, player) {
                                if (!player.storage.th_rejiaozhao || !lib.skill.th_rejiaozhao2.viewAs) return false;
                                var name = lib.skill.th_rejiaozhao2.viewAs.name;
                                return player.getCards('h').contains(player.storage.th_rejiaozhao) && player.storage.th_rejiaozhao.hasGaintag('th_rejiaozhao') && game.checkMod(player.storage.th_rejiaozhao, player, 'unchanged', 'cardEnabled2', player) !== false;
                            },
                            filterCard: function (card, player) {
                                return card == player.storage.th_rejiaozhao;
                            },
                            selectCard: -1,
                            popname: true,
                            prompt: function () {
                                return '请选择' + get.translation(lib.skill.th_rejiaozhao2.viewAs) + '的目标：';
                            },
                            check: function (card) {
                                return 8 - get.value(card);
                            },
                            onuse: function (result, player) {
                                if (player.storage.th_rejiaozhao3 && player.storage.th_rejiaozhao3.length == 1) {
                                    player.enableSkill('th_rejiaozhao');
                                    player.disableSkill('th_rejiaozhao', 'th_rejiaozhao2');
                                }
                            },
                            onremove: function (player) {
                                player.removeGaintag('th_rejiaozhao');
                                delete player.storage.th_rejiaozhao;
                                delete player.storage.th_rejiaozhao_card;
                                delete player.storage.th_rejiaozhao3;
                                player.enableSkill('th_rejiaozhao');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        th_redanxin: {
                            trigger: {
                                player: "damageEnd",
                            },
                            frequent: true,
                            audio: "ext:Thunder/audio/skill:2",
                            content: function () {
                                player.draw();
                                if (player.storage.th_redanxin) { player.storage.th_redanxin = player.countMark('th_redanxin'); } else player.storage.th_redanxin = 0;
                                if (player.countMark('th_redanxin') < 2) {
                                    player.addMark('th_redanxin', 1, false);
                                    game.log(player, '修改了技能', '#g【矫诏】');
                                }
                            },
                            intro: {
                                content: "【矫诏】加成等级：Lv.#",
                            },
                            ai: {
                                "maixie_hp": true,
                            },
                        },
                        th_qinqing: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                player: "phaseJieshuBegin",
                            },
                            direct: true,
                            filter: function (event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.getSeatNum() == 1;
                                });
                            },
                            content: function () {
                                'step 0'
                                event.Num1 = game.filterPlayer(function (current) {
                                    return current.getSeatNum() == 1;
                                })[0];
                                player.chooseTarget(get.prompt2('th_qinqing'), 1, function (card, player, target) {
                                    return target.inRange(event.Num1) && target != player;
                                }).set('ai', function (target) {
                                    var he = target.countCards('he')
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.countCards('h') == event.Num1.countCards('h') + 1) return -1;
                                    } else {
                                        if (he > 0) return 1;
                                    }
                                    return 0;
                                });
                                'step 1'
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    //event.list=event.targets.slice(0);
                                    player.logSkill('th_qinqing', event.target);
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (event.target.countCards('he')) {
                                    player.discardPlayerCard(target, 'he', true);
                                }
                                'step 3'
                                var zhu = game.players[0];
                                if (event.target.countCards('h') > event.Num1.countCards('h')) player.draw();
                                if (event.target.countCards('h') < event.Num1.countCards('h')) event.target.draw();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        th_huisheng: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                player: "damageBegin4",
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (!player.countCards('he')) return false;
                                if (!event.source || event.source == player || !event.source.isIn()) return false;
                                if (player.storage.th_huisheng && player.storage.th_huisheng.contains(event.source)) return false;
                                return true;
                            },
                            init: function (player) {
                                if (player.storage.th_huisheng) player.storage.th_huisheng = [];
                            },
                            content: function () {
                                'step 0'
                                var att = (get.attitude(player, trigger.source) > 0);
                                var goon = false;
                                if (player.hp == 1) {
                                    goon = true;
                                } else {
                                    var he = player.getCards('he');
                                    var num = 0;
                                    for (var i = 0; i < he.length; i++) {
                                        if (get.value(he[i]) < 8) {
                                            num++;
                                            if (num >= 2) {
                                                goon = true;
                                                break;
                                            }
                                        }
                                    }
                                }
                                player.chooseCard('he', [1, player.countCards('he')], get.prompt2('th_huisheng', trigger.source)).set('ai', function (card) {
                                    if (_status.event.att) {
                                        return 10 - get.value(card);
                                    }
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    if (!ui.selected.cards.length) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                }).set('goon', goon).set('att', att);
                                'step 1'
                                if (result.bool) {
                                    player.logSkill('th_huisheng', trigger.source);
                                    game.delay();
                                    event.num = result.cards.length;
                                    var goon = false;
                                    if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
                                        goon = true;
                                    }
                                    var forced = false;
                                    var str = '获得其中一张牌并防止伤害';
                                    if (trigger.source.countCards('he') < event.num) {
                                        forced = true;
                                    } else {
                                        str += '，或取消并弃置' + get.cnNumber(result.cards.length) + '张牌';
                                    }
                                    trigger.source.chooseButton([str, result.cards], forced).set('ai', function (button) {
                                        if (_status.event.goon) {
                                            return get.value(button.link);
                                        }
                                        return get.value(button.link) - 8;
                                    }).set('goon', goon);
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    var card = result.links[0];
                                    trigger.source.gain(card, player, 'giveAuto');
                                    trigger.cancel();
                                    if (!player.storage.th_huisheng) player.storage.th_huisheng = [];
                                    player.storage.th_huisheng.push(trigger.source);
                                } else {
                                    trigger.source.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                        },
                        th_cunwei: {
                            audio: "ext:Thunder/audio/skill:2",
                            forced: true,
                            trigger: {
                                target: "useCardToTargeted",
                            },
                            filter: function (event, player) {
                                if (player == event.player) return false;
                                return get.type(event.card) == 'trick';
                            },
                            content: function () {
                                if (trigger.targets.length != 1) player.chooseToDiscard('he', 1, true);
                                if (trigger.targets.length == 1 && get.color(trigger.card) == 'black') player.draw();
                            },
                        },
                        th_channi: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: "phaseUse",
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: 0,
                            usable: 1,
                            filterTarget: function (card, player, target) {
                                return player != target;
                            },
                            check: function (card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (player.countCards('h') <= 1) {
                                    if (ui.selected.cards.length) {
                                        return -1;
                                    }
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') &&
                                            !players[i].isTurnedOver() &&
                                            !players[i].hasJudge('lebu') &&
                                            get.attitude(player, players[i]) >= 3 &&
                                            get.attitude(players[i], player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            content: function () {
                                'step 0'
                                target.gain(cards, player, 'giveAuto');
                                var num = cards.length;
                                target.chooseCardTarget({
                                    prompt: '将至多' + num + '张手牌当做【决斗】使用：',
                                    filterCard: true,
                                    filterTarget: function (card, player, target) {
                                        return lib.filter['targetEnabled']({ name: 'juedou' }, _status.event.player, target);
                                    },
                                    selectCard: [0, num],
                                    selectTarget: 1,
                                    ai1: (card) => 4 - get.value(card),
                                    ai2: function (target) {
                                        var num = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].countCards('h') > num) num = game.players[i].countCards('h');
                                        }
                                        return -get.attitude(_status.event.player, target) * (num - target.countCards('h') + 1);
                                    }
                                });
                                'step 1'
                                if (result.targets && result.targets.length && result.cards && result.cards.length) {
                                    event.num1 = result.cards.length;
                                    target.useCard({ name: 'juedou' }, result.cards, result.targets[0], false);
                                } else event.finish();
                                'step 2'
                                if (target.getHistory('sourceDamage', function (evt) {
                                    var card = evt.card;
                                    if (!card && get.name(card) != "juedou") return false;
                                    var evtx = evt.getParent('useCard');
                                    return evtx.card == card && evtx.getParent() == event;
                                }).length) target.draw(event.num1);
                                if (target.getHistory('damage', function (evt) {
                                    var card = evt.card;
                                    if (!card && get.name(card) != "juedou") return false;
                                    var evtx = evt.getParent('useCard');
                                    return evtx.card == card && evtx.getParent() == event;
                                }).length) player.discard(player.getCards('h'));
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: function (player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (target.hasSkillTag('directHit')) return 10;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target: function (card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                                        return 0;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        th_nifu: {
                            audio: "ext:Thunder/audio/skill:2",
                            forced: true,
                            trigger: {
                                global: "phaseEnd",
                            },
                            filter: function (event, player) {
                                return player.countCards('h') != 3;
                            },
                            content: function () {
                                if (player.countCards('h') < 3) player.drawTo(3);
                                else player.chooseToDiscard('h', player.countCards('h') - 3, true);
                            },
                        },
                        th_zhuhai: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                global: "phaseJieshuBegin",
                            },
                            direct: true,
                            filter: function (event, player) {
                                return player.countCards('h') && event.player.isAlive() && event.player.getStat('damage') &&
                                    (lib.filter.targetEnabled({ name: 'sha' }, player, event.player) || lib.filter.targetEnabled({ name: 'guohe' }, player, event.player));
                            },
                            check: function (event, player) {
                                return get.effect(event.player, { name: 'sha' }, player, player) || get.effect(event.player, { name: 'guohe' }, player, player)
                            },
                            content: function () {
                                'step 0'
                                player.chooseButton(['诛害：是否将一张手牌当做以下卡牌之一对' + get.translation(trigger.player) + '使用：', [
                                    [
                                        ['', '', 'sha'],
                                        ['', '', 'guohe']
                                    ], 'vcard'
                                ]]).set('filterButton', function (button) {
                                    var target = trigger.player;
                                    return lib.filter['targetEnabled']({ name: button.link[2] }, player, target);
                                }).ai = (button) => {
                                    var target = trigger.player;
                                    var eff = get.effect(target, { name: button.link[2] }, player, player);
                                    if (button.link[2] == 'sha' && !player.hasSkill('th_jianyan') && !player.isHealthy()) eff *= 20;
                                    return eff;
                                }
                                'step 1'
                                if (result.bool) {
                                    var card = { name: result.links[0][2] };
                                    game.broadcastAll(function (card) {
                                        lib.skill.th_zhuhai_backup.viewAs = card;
                                    }, card);
                                    var next = player.chooseToUse(function (card, player, event) {
                                        return lib.filter.filterCard.apply(this, arguments);
                                    }, '选择一张手牌当做' + get.translation(result.links[0][2]) + '对' + get.translation(trigger.player) + '使用：').set('logSkill', 'th_zhuhai').set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                        if (target != trigger.player && !ui.selected.targets.contains(trigger.player)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    });
                                    next.set('_backupevent', 'th_zhuhai_backup');
                                    next.backup('th_zhuhai_backup');
                                }
                            },
                            subSkill: {
                                backup: {
                                    filterCard: function (card) {
                                        return get.itemtype(card) == 'card';
                                    },
                                    position: "h",
                                    selectCard: 1,
                                    check: (card) => 6 - get.value(card),
                                    log: false,
                                    precontent: function () {
                                        delete event.result.skill;
                                    },
                                    sub: true,
                                    viewAs: {
                                        name: "sha",
                                    },
                                    ai: {
                                        basic: {
                                            order: 9,
                                            useful: 5,
                                            value: 5,
                                        },
                                        yingbian: function (card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            if (game.hasPlayer(function (current) {
                                                return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })) return 6;
                                            return 0;
                                        },
                                        result: {
                                            target: function (player, target) {
                                                var att = get.attitude(player, target);
                                                var nh = target.countCards('h');
                                                if (att > 0) {
                                                    if (target.countCards('j', function (card) {
                                                        var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                        return get.effect(target, cardj, target, player) < 0;
                                                    }) > 0) return 3;
                                                    if (target.getEquip('baiyin') && target.isDamaged() &&
                                                        get.recoverEffect(target, player, player) > 0) {
                                                        if (target.hp == 1 && !target.hujia) return 1.6;
                                                    }
                                                    if (target.countCards('e', function (card) {
                                                        if (get.position(card) == 'e') return get.value(card, target) < 0;
                                                    }) > 0) return 1;
                                                }
                                                var es = target.getCards('e');
                                                var noe = (es.length == 0 || target.hasSkillTag('noe'));
                                                var noe2 = (es.filter(function (esx) {
                                                    return get.value(esx, target) > 0;
                                                }).length == 0);
                                                var noh = (nh == 0 || target.hasSkillTag('noh'));
                                                if (noh && (noe || noe2)) return 0;
                                                if (att <= 0 && !target.countCards('he')) return 1.5;
                                                return -1.5;
                                            },
                                        },
                                        tag: {
                                            loseCard: 1,
                                            discard: 1,
                                            respond: 1,
                                            respondShan: 1,
                                            damage: function (card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage: function (card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage: function (card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage: function (card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage: function (card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                        canLink: function (player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        order: function (item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.contains(get.nature(item))) {
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                }) && game.countPlayer(function (current) {
                                                    return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                }) > 1) return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                    },
                                },
                            },
                        },
                        th_oldzhuhai: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                global: "phaseJieshuBegin",
                            },
                            direct: true,
                            filter: function (event, player) {
                                return event.player.isIn() && event.player.getStat('damage') &&
                                    (lib.filter.targetEnabled({ name: 'sha' }, player, event.player) || lib.filter.targetEnabled({ name: 'guohe' }, player, event.player));
                            },
                            check: function (event, player) {
                                return get.effect(event.player, { name: 'sha' }, player, player) || get.effect(event.player, { name: 'guohe' }, player, player)
                            },
                            content: function () {
                                'step 0'
                                player.chooseControl('杀', '过河拆桥', 'cancel2').set('prompt', '是否视为对' + get.translation(trigger.player) + '使用一张【杀】或【过河拆桥】？').set('ai', function () {
                                    if (get.attitude(player, trigger.player) >= 0) return 'cancel2';
                                    if (player.isDamaged() && get.effect(event.player, { name: 'sha' }, player, player) || get.effect(event.player, { name: 'guohe' }, player, player) < get.effect(event.player, { name: 'sha' }, player, player)) return '杀';
                                    return '过河拆桥';
                                });
                                'step 1'
                                if (result.control != 'cancel2') {
                                    if (result.control == '杀') event.card = { name: 'sha', isCard: true };
                                    else event.card = { name: 'guohe', isCard: true };
                                    player.useCard(event.card, trigger.player, false);
                                }
                            },
                        },
                        th_qianxin: {
                            skillAnimation: true,
                            animationColor: "orange",
                            audio: "ext:Thunder/audio/skill:2",
                            unique: true,
                            juexingji: true,
                            trigger: {
                                source: "damageSource",
                            },
                            forced: true,
                            derivation: "th_jianyan",
                            filter: function (event, player) {
                                return player.hp < player.maxHp;
                            },
                            content: function () {
                                player.awakenSkill('th_qianxin');
                                player.addSkill('th_jianyan');
                                player.loseMaxHp();
                            },
                        },
                        th_jianyan: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: "phaseUse",
                            delay: false,
                            filter: function (event, player) {
                                if (!player.storage.th_jianyan) player.storage.th_jianyan = ['red', 'black', 'basic', 'trick', 'equip'];
                                if (player.storage.th_jianyan.length == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSex('male');
                                });
                            },
                            content: function () {
                                "step 0"
                                player.addTempSkill('th_jianyan2');
                                if (!player.storage.th_jianyan) player.storage.th_jianyan = ['red', 'black', 'basic', 'trick', 'equip'];
                                player.chooseControl(player.storage.th_jianyan).set('ai', function () {
                                    var player = _status.event.player;
                                    if (player.storage.th_jianyan.contains('basic')) {
                                        if (!player.hasShan()) return 'basic';
                                        if (player.countCards('e') <= 1) return 'equip';
                                        if (player.countCards('h') > 2) return 'trick';
                                        if (!player.storage.th_jianyan.contains('red')) return 'basic';
                                    }
                                    return 'red';
                                });
                                "step 1"
                                if (result.control == 'black' || result.control == 'red') player.storage.th_jianyan.removeArray(['red', 'black']);
                                else player.storage.th_jianyan.removeArray(['basic', 'trick', 'equip']);
                                event.card = get.cardPile(function (card) {
                                    if (get.color(card) == result.control) return true;
                                    if (get.type(card, 'trick') == result.control) return true;
                                    return false;
                                }, 'cardPile');
                                if (!event.card) {
                                    event.finish();
                                    return;
                                }
                                player.showCards([event.card]);
                                "step 2"
                                player.chooseTarget(true, '选择一名男性角色送出' + get.translation(event.card), function (card, player, target) {
                                    return target.hasSex('male');
                                }).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (_status.event.neg) return -att;
                                    return att;
                                }).set('neg', get.value(event.card, player, 'raw') < 0);
                                "step 3"
                                player.line(result.targets, 'green');
                                result.targets[0].gain(event.card, 'gain2');

                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: function (player) {
                                        if (game.hasPlayer(function (current) {
                                            return current.hasSex('male') && get.attitude(player, current) > 0;
                                        })) return 2;
                                        return 0;
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        th_jianyan2: {
                            onremove: function (player) {
                                delete player.storage.th_jianyan;
                            },
                        },
                        th_yanhuo: {
                            trigger: {
                                player: "dieBegin",
                            },
                            forceDie: true,
                            lastDo: true,
                            content: function () {
                                player.addSkill('th_yanhuo_effect');
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        global: "shaBegin",
                                    },
                                    forceDie: true,
                                    forced: true,
                                    direct: true,
                                    content: function () {
                                        trigger.baseDamage++;
                                    },
                                    sub: true,
                                },
                            },
                        },
                        th_tiqi: {
                            trigger: {
                                global: ["phaseJudgeEnd", "phaseDrawEnd", "phaseUseBefore"],
                            },
                            firstDo: true,
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                player.storage.th_tiqi = 0;
                                if (event.name == "phaseJudge") {
                                    if (event.player.skipList.contains('phaseDraw')) return !player.hasSkill('th_tiqi_used');
                                    return false;
                                }
                                for (var i of event.player.getHistory('skipped')) {
                                    if (i == 'phaseDraw') return !player.hasSkill('th_tiqi_used');
                                }
                                for (var i of event.player.getHistory('gain')) {
                                    if (i.getParent) {
                                        if (i.getParent('phaseDraw').name == 'phaseDraw' && i.getParent().name == 'draw') player.storage.th_tiqi += i.cards.length;
                                    }
                                }
                                return player.storage.th_tiqi != 2 && !player.hasSkill('th_tiqi_used');
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            content: function () {
                                'step 0'
                                player.addTempSkill('th_tiqi_used');
                                var num = Math.abs(2 - player.storage.th_tiqi),
                                    str = player.storage.th_tiqi > 2 ? '+' : '-';
                                player.draw(num);
                                player.chooseControl('+' + num, '-' + num, 'cancel2').set('prompt', '是否令' + get.translation(trigger.player) + '本回合手牌上限改变？').ai = () => {
                                    if (get.attitude(player, trigger.player) > 0) return 0;
                                    else if (get.attitude(player, trigger.player) == 0) return 2;
                                    else return 1;
                                }
                                'step 1'
                                if (result.control != 'cancel2') {
                                    if (result.index == 0) trigger.player.storage.th_tiqi = Math.abs(2 - player.storage.th_tiqi);
                                    else trigger.player.storage.th_tiqi = -Math.abs(2 - player.storage.th_tiqi);
                                    trigger.player.addTempSkill('th_tiqi_limit');
                                }
                            },
                            subSkill: {
                                limit: {
                                    mod: {
                                        maxHandcard: function (player, num) {
                                            return num += player.storage.th_tiqi;
                                        },
                                    },
                                    intro: {
                                        content: function (storage, player) {
                                            if (player.storage.th_tiqi > 0) return "本回合手牌上限+" + player.storage.th_tiqi;
                                            else return "本回合手牌上限" + player.storage.th_tiqi;
                                        },
                                    },
                                    marktext: "涕泣",
                                    mark: true,
                                    sub: true,
                                },
                                used: {
                                    onremove: true,
                                    sub: true,
                                },
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            }
                        },
                        th_baoshu: {
                            trigger: {
                                player: "phaseZhunbeiBegin",
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            direct: true,
                            skipPhaseDraw: function (player) {
                                var allSkills = player.getStockSkills(true, true),
                                    list = ['shensu'];
                                for (var skills of allSkills) {
                                    if (list.some(i => skills.length >= i.length && skills.indexOf(i) == skills.length - i.length)) return true;
                                    var trans = get.skillInfoTranslation(skills);
                                    if (trans.indexOf('跳过') != -1 || trans.indexOf('放弃') != -1 || trans.indexOf('改为') != -1) {
                                        var skills2 = [skills];
                                        game.expandSkills(skills2);
                                        for (var skill of skills2) {
                                            var info = get.info(skill);
                                            if (!info || !info.trigger || !info.trigger.player) continue;
                                            if (info.trigger.player.indexOf('phaseDraw') != -1 || Array.isArray(info.trigger.player) && info.trigger.player.some(trg => trg.indexOf('phaseDraw') != -1)) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            content: function () {
                                'step 0'
                                player.chooseTarget('选择至多' + get.cnNumber(player.maxHp) + '名角色获得“梳”：', [1, player.maxHp]).set('prompt', get.prompt('th_baoshu')).set('ai', function (target) {
                                    if (target == player && game.countPlayer(current => player != current && get.attitude(player, current) > 2 && !lib.skill.th_baoshu.skipPhaseDraw(current)) >= player.maxHp) return 0;
                                    if (lib.skill.th_baoshu.skipPhaseDraw(target)) return 0;
                                    return get.attitude(player, target) - 2;
                                });
                                'step 1'
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.logSkill('th_baoshu', result.targets);
                                    var num = player.maxHp - result.targets.length + 1;
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addMark('th_baoshu_draw', num);
                                        if (result.targets[i].isLinked()) result.targets[i].link();
                                        if (result.targets[i].isTurnedOver()) result.targets[i].turnOver();
                                        result.targets[i].addTempSkill('th_baoshu_draw', { player: 'phaseDrawEnd' });
                                    }
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: "phaseDrawBegin2",
                                    },
                                    forced: true,
                                    marktext: "梳",
                                    firstDo: true,
                                    intro: {
                                        content: "梳：#",
                                    },
                                    filter: function (event, player) {
                                        return !event.numFixed && player.countMark('th_baoshu_draw') > 0;
                                    },
                                    content: function () {
                                        trigger.num += player.countMark('th_baoshu_draw');
                                    },
                                    onremove: function (player) {
                                        player.storage.th_baoshu_draw = 0;
                                        player.unmarkSkill('th_baoshu_draw')
                                    },
                                    sub: true,
                                },
                            },
                        },
                        th_zhengrong: {
                            trigger: { player: 'phaseBegin' },
                            audio: "drlt_zhenrong",
                            forced: true,
                            direct: true,
                            content: function () { player.addTempSkill('th_zhengrong_use') },
                            intro: {
                                name: '荣',
                                content: "expansion",
                                markcount: "expansion",
                            },
                            subSkill: {
                                use: {
                                    init: function (player) { player.storage.th_zhengrong = 0 },
                                    trigger: { player: 'useCard1', source: 'damageSource' },
                                    forced: true,
                                    direct: true,
                                    firstDo: true,
                                    filter: function (event, player) { return player.isPhaseUsing() },
                                    content: function () {
                                        'step 0'
                                        var bool1 = false,
                                            bool2 = false;
                                        if (trigger.name == 'damage' && player.getHistory('sourceDamage').length == 1) bool2 = true;
                                        if (trigger.name == 'useCard') {
                                            if (trigger.targets && trigger.targets.length > 1) {
                                                bool1 = true;
                                                player.storage.th_zhengrong++
                                            } else if (trigger.targets && trigger.targets[0] != player) {
                                                bool1 = true;
                                                player.storage.th_zhengrong++
                                            }
                                        }
                                        if (bool1 && player.storage.th_zhengrong != 0 && player.storage.th_zhengrong % 2 == 0) bool2 = true;
                                        if (bool2) player.chooseTarget(get.prompt('th_zhengrong'), function (card, player, target) {
                                            return target != player && target.countCards('he') > 0;
                                        }).set('prompt2', '选择一名其他角色，将其一张牌置于你的武将牌上，称为“荣”').ai = (target) => -get.attitude(player, target);
                                        else event.finish();
                                        'step 1'
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            player.logSkill('th_zhengrong', event.target);
                                            player.gainPlayerCard(event.target, 'he');
                                        } else event.finish();
                                        'step 2'
                                        if (result.bool) {
                                            player.addToExpansion(result.cards, 'lose').gaintag.add('th_zhengrong');
                                        }
                                    },
                                    onremove: function (player) { player.storage.th_zhengrong = 0 },
                                },
                            }
                        },
                        th_hongju: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            audio: "drlt_hongju",
                            juexingji: true,
                            forced: true,
                            derivation: ['th_qingce', 'th_saotao'],
                            skillAnimation: true,
                            animationColor: 'wood',
                            filter: function (event, player) {
                                return player.getExpansions('th_zhengrong').length >= 3;
                            },
                            content: function () {
                                'step 0'
                                player.awakenSkill('th_hongju');
                                player.draw(player.getExpansions('th_zhengrong').length);
                                'step 1'
                                var cards = player.getExpansions('th_zhengrong');
                                event.cards2 = cards;
                                var next = player.chooseToMove('鸿举：用任意张手牌替换等量的“荣”：');
                                var list = [
                                    ['荣', cards]
                                ],
                                    hs = player.getCards('h');
                                if (hs.length) {
                                    list.push(['手牌', hs]);
                                    next.set('filterMove', function (from, to) {
                                        return typeof to != 'number';
                                    });
                                }
                                next.set('list', list);
                                next.set('processAI', function (list) {
                                    var allcards = list[0][1].concat(list[1][1]),
                                        canchoose = allcards.slice(0),
                                        cards = [];
                                    var player = _status.event.player;
                                    var getv = function (button) {
                                        /* if (button.name == 'sha' && allcards.filter(function (card) {
                                            return card.name == 'sha' && !cards.filter(function () {
                                                return button == card;
                                            }).length;
                                        }).length > player.getCardUsable({ name: 'sha' })) return 10; */
                                        return player.getUseValue(button, player);
                                    };
                                    while (cards.length < player.countCards('h')) {
                                        canchoose.sort(function (a, b) {
                                            return getv(b) - getv(a);
                                        });
                                        cards.push(canchoose.shift());
                                    }
                                    return [canchoose, cards];
                                });
                                'step 2'
                                if (result.bool) {
                                    event.forceDie = true;
                                    var cards0 = result.moved[0],
                                        cards1 = result.moved[1],
                                        hs = player.getCards('h'),
                                        lose = [],
                                        gain = [];
                                    for (var i of cards1) {
                                        if (!hs.contains(i)) gain.push(i);
                                    }
                                    for (var i of hs) {
                                        if (cards0.contains(i)) lose.push(i);
                                    }
                                    if (lose.length) player.addToExpansion(lose, 'give').gaintag.add('th_zhengrong');
                                    if (gain.length) player.gain(gain, 'gain2');
                                } else event.finish();
                                'step 3'
                                player.addSkill('th_qingce');
                                game.log(player, '获得了技能<span class="greentext">【清侧】</span>');
                                player.chooseBool('是否减一点体力上限获得技能【扫讨】？').ai = () => true;
                                'step 4'
                                if (result.bool) {
                                    player.loseMaxHp();
                                    player.addSkill('th_saotao');
                                    game.log(player, '获得了技能<span class="greentext">【扫讨】</span>');
                                }
                            }
                        },
                        th_qingce: {
                            enable: 'phaseUse',
                            audio: 'drlt_qingce',
                            filter: function (event, player) {
                                return player.getExpansions('th_zhengrong').length && game.hasPlayer(function (current) {
                                    return current != player && current.countDiscardableCards(player, 'hej') > 0;
                                })
                            },
                            chooseButton: {
                                dialog: function (event, player) {
                                    return ui.create.dialog('清侧：请选择要弃置的“荣”', player.getExpansions('th_zhengrong'), 'hidden');
                                },
                                backup: function (links, player) {
                                    return {
                                        audio: 'drlt_qingce',
                                        filterTarget: function (card, player, target) {
                                            return target != player && target.countDiscardableCards(player, 'hej') > 0;
                                        },
                                        filterCard: function () { return false },
                                        selectCard: -1,
                                        card: links[0],
                                        content: lib.skill.th_qingce.contentx,
                                        ai: {
                                            result: {
                                                target: function (player, target) {
                                                    if (get.attitude(player, target) > 0 && target.countCards('j') > 0) return 1;
                                                    if (target.countCards('e') > 0 || target.countCards('h') == 1) return -Math.random();
                                                    return 0;
                                                }
                                            }
                                        }
                                    }
                                },
                                prompt: function (links, player) { return '选择一名角色，弃置其区域内的一张牌：' },
                            },
                            contentx: function () {
                                player.loseToDiscardpile(lib.skill.th_qingce_backup.card);
                                player.discardPlayerCard(target, 'hej');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: function (player) {
                                        if (game.hasPlayer(function (current) {
                                            return current != player && get.attitude(player, current) > 0 && current.countCards('j') > 0;
                                        })) return 1;
                                        if (game.hasPlayer(function (current) {
                                            return current != player && get.attitude(player, current) < 0 && (current.countCards('e') > 0 || current.countCards('h') == 1);
                                        })) return 1;
                                        return 0;
                                    }
                                }
                            },
                            subSkill: { backup: {} }
                        },
                        th_saotao: {
                            //audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'useCard1' },
                            filter: function (event, player) {
                                return get.name(event.card) == 'sha' || get.type(event.card) == 'trick';
                            },
                            forced: true,
                            content: function () {
                                trigger.directHit.addArray(game.players);
                            },
                            ai: {
                                directHit_ai: true,
                            }
                        },
                        th_xingwu: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                player: "phaseDiscardBegin",
                            },
                            direct: true,
                            intro: {
                                content: "expansion",
                                markcount: 'expansion',
                                onunmark: function (storage, player) {
                                    player.removeAdditionalSkill('th_pingting_1');
                                },
                            },
                            onremove: function (player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            filter: function (event, player) {
                                return player.countCards('he') > 0;
                            },
                            content: function () {
                                'step 0'
                                player.chooseCard('he', get.prompt('th_xingwu'), '星舞：将一张牌作为“星舞”置于武将牌上').set('ai', function (card) {
                                    var att = 1;
                                    if (get.suit(card) != 'heart') att = 2;
                                    if (_status.event.goon) return 20 - get.value(card);
                                    return (7 - get.value(card)) * att;
                                }).set('goon', player.needsToDiscard() || player.getStorage('th_xingwu').length == 2);
                                'step 1'
                                if (result.bool) {
                                    player.logSkill('th_xingwu');
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'give').gaintag.add('th_xingwu');
                                    if (player.hasSkill('th_pingting_1')) player.addAdditionalSkill('th_pingting_1', ['tianxiang', 'liuli']);
                                }
                                'step 2'
                                game.delayx();
                                if (player.getExpansions('th_xingwu').length > 2) {
                                    player.chooseButton(['是否移去3张“星舞”牌并对一名角色发动【星舞】：', player.getExpansions('th_xingwu')], 3).ai = (button) => {
                                        if (game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        })) return 1;
                                        return 0
                                    }
                                } else event.finish();
                                'step 3'
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.chooseTarget('请选择【星舞】的目标', lib.filter.notMe).ai = (target) => {
                                        var att = 1;
                                        if (target.hasSex('male')) att = 1.5;
                                        if (target.hp == target.hasSex('male') ? 2 : 1) att *= 1.2;
                                        if (get.mode() == 'identity' && player.identity == 'fan' && target.isZhu) att *= 3;
                                        return (-get.attitude(player, target)) * att * (Math.max(1, target.countCards('e')));
                                    }
                                }
                                'step 4'
                                if (result.bool) {
                                    player.loseToDiscardpile(event.cards);
                                    player.logSkill('th_xingwu', result.targets[0]);
                                    player.discardPlayerCard(result.targets[0], 'e', result.targets[0].countCards('e'), true);
                                    result.targets[0].damage(result.targets[0].hasSex('female') ? 1 : 2);
                                }
                            },
                        },
                        th_pingting: {
                            trigger: { global: ['roundStart', 'dying'] },
                            derivation: ['tianxiang', 'liuli'],
                            filter: function (event, player) {
                                if (event.name == 'dying') return event.player != player && player == _status.currentPhase;
                                return true;
                            },
                            forced: true,
                            audio: 'th_xingwu',
                            content: function () {
                                'step 0'
                                player.draw();
                                player.chooseCard('he', '娉婷：将一张牌作为“星舞”置于武将牌上', true).ai = (card) => {
                                    var att = 1;
                                    if (get.suit(card) != 'heart') att = 2;
                                    return (7 - get.value(card)) * att;
                                };
                                'step 1'
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'give').gaintag.add('th_xingwu');
                                    if (player.hasSkill('th_pingting_1')) player.addAdditionalSkill('th_pingting_1', ['tianxiang', 'liuli']);
                                }
                            },
                            group: 'th_pingting_1',
                            subSkill: {
                                1: {
                                    init: function (player) {
                                        if (player.getStorage('th_xingwu').length) player.addAdditionalSkill('th_pingting_1', ['tianxiang', 'liuli']);
                                    },
                                    onremove: function (player) {
                                        player.removeAdditionalSkill('th_pingting_1');
                                    },
                                    derivation: ['tianxiang', 'liuli'],
                                }
                            }
                        },
                        th_rexingwu: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                player: "phaseDiscardBegin",
                            },
                            direct: true,
                            intro: {
                                name: '舞',
                                content: "expansion",
                                markcount: 'expansion',
                                onunmark: function (storage, player) {
                                    player.removeAdditionalSkill('th_luoyan');
                                },
                            },
                            onremove: function (player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            filter: function (event, player) {
                                return player.countCards('h') > 0;
                            },
                            content: function () {
                                'step 0'
                                player.chooseCard('h', get.prompt('th_rexingwu'), '星舞：将一张手牌作为“舞”置于武将牌上').set('ai', function (card) {
                                    var att = 1,
                                        list = [];
                                    for (var i of player.getExpansions('th_rexingwu')) {
                                        if (!list.contains(get.suit(i))) list.push(get.suit(i));
                                    }
                                    if (!list.contains(get.suit(card))) att = 2;
                                    if (_status.event.goon) return (20 - get.value(card)) * att;
                                    return (7 - get.value(card)) * att;
                                }).set('goon', player.needsToDiscard() || player.getStorage('th_rexingwu').length == 2);
                                'step 1'
                                if (result.bool) {
                                    player.logSkill('th_rexingwu');
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'give').gaintag.add('th_rexingwu');
                                    if (player.hasSkill('th_luoyan')) player.addAdditionalSkill('th_luoyan', ['retianxiang', 'liuli']);
                                }
                                'step 2'
                                game.delayx();
                                if (player.getExpansions('th_rexingwu').length > 2) {
                                    player.chooseButton(['是否移去3张“舞”牌并对一名角色发动【星舞】：', player.getExpansions('th_rexingwu')], 3).ai = (button) => {
                                        if (game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        })) return 1;
                                        return 0;
                                    }
                                } else event.finish();
                                'step 3'
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.chooseTarget('请选择【星舞】的目标', lib.filter.notMe).ai = (target) => {
                                        var att = 1;
                                        if (target.hasSex('male')) att = 1.5;
                                        if (target.hp == target.hasSex('male') ? 2 : 1) att *= 1.2;
                                        if (get.mode() == 'identity' && player.identity == 'fan' && target.isZhu) att *= 3;
                                        return (-get.attitude(player, target)) * att * (Math.max(1, target.countCards('e')));
                                    }
                                }
                                'step 4'
                                if (result.bool) {
                                    var list = [];
                                    for (var i of event.cards) {
                                        if (!list.contains(get.suit(i))) list.push(get.suit(i));
                                    }
                                    player.loseToDiscardpile(event.cards);
                                    player.logSkill('th_rexingwu', result.targets[0]);
                                    player.discardPlayerCard(result.targets[0], 'e', result.targets[0].countCards('e'), true);
                                    result.targets[0].damage(result.targets[0].hasSex('female') ? 1 : list.length);
                                }
                            },
                        },
                        th_luoyan: {
                            derivation: ['retianxiang', 'liuli'],
                            init: function (player) {
                                if (player.getStorage('th_rexingwu').length) player.addAdditionalSkill('th_luoyan', ['retianxiang', 'liuli']);
                            },
                            onremove: function (player) {
                                player.removeAdditionalSkill('th_luoyan');
                            },
                        },
                        th_suizheng: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseJieshuBegin' },
                            direct: true,
                            playerRank: function (player) {
                                var list = ['s', 'ap', 'a', 'am', 'bp', 'b', 'bm', 'c', 'd'];
                                for (var i = 0; i < list.length; i++) {
                                    for (var j of lib.rank[list[i]]) {
                                        if (player.name.indexOf(j) >= 0) return 9 - i;
                                    }
                                }
                                return 0;
                            },
                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt('th_suizheng')).ai = (target) => {
                                    if (target.hasJudge('lebu') || target.isTurnedOver()) return -1;
                                    if (get.attitude(player, target) > 2) {
                                        var att = 1;
                                        if (target == player) att = 0.5;
                                        return att * Math.sqrt(lib.skill.th_suizheng.playerRank(target)) * Math.sqrt(target.hp) * Math.sqrt(target.countCards('h') + 1);
                                    }
                                    return get.attitude(player, target);
                                };
                                'step 1'
                                if (result.bool) {
                                    player.logSkill('th_suizheng', result.targets[0]);
                                    result.targets[0].storage.th_suizheng = player;
                                    result.targets[0].addTempSkill('th_suizheng_effect', { player: 'phaseUseAfter' });
                                }
                            },
                            subSkill: {
                                effect: {
                                    mark: true,
                                    marktext: '随征',
                                    intro: { content: '使用【杀】无距离限制且可以多使用一张杀' },
                                    mod: {
                                        targetInRange: function (card) {
                                            if (card.name == 'sha') return true;
                                        },
                                        cardUsable: function (card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                    trigger: { player: 'phaseUseEnd' },
                                    direct: true,
                                    filter: function (event, player) {
                                        var targets = [];
                                        for (var i of player.getHistory('sourceDamage')) {
                                            if (i.player && i.player.isIn() && !targets.contains(i.player) && i.player != player.storage.th_suizheng) targets.push(i.player);
                                        }
                                        return targets.length && player.storage.th_suizheng.isIn();
                                    },
                                    content: function () {
                                        'step 0'
                                        var targets = [];
                                        for (var i of player.getHistory('sourceDamage')) {
                                            if (i.player && !targets.contains(i.player) && i.player != player.storage.th_suizheng) targets.push(i.player);
                                        }
                                        var str = targets.length > 1 ? '中的一人' : '';
                                        player.storage.th_suizheng.chooseTarget(get.prompt('th_suizheng'), function (card, player, target) {
                                            return _status.event.sourcex.contains(target);
                                        }).set('complexSelect', true).set('prompt2', '选择视为对一名角色使用一张【杀】').set('sourcex', targets).ai = (target) => get.effect(target, { name: 'sha' }, player, player);
                                        'step 1'
                                        if (result.bool) {
                                            player.storage.th_suizheng.useCard({ name: 'sha', isCard: true }, result.targets[0], false);
                                        }
                                    }
                                }
                            }
                        },
                        th_wushen: {
                            mod: {
                                cardname: function (card, player, name) {
                                    if (get.suit(card) == 'heart') return 'sha';
                                },
                                cardnature: function (card, player) {
                                    if (get.suit(card) == 'heart') return false;
                                },
                                targetInRange: function (card) {
                                    if (get.suit(card) == 'heart') return true;
                                },
                                cardUsable: function (card) {
                                    if (card.name == 'sha' && get.suit(card) == 'heart') return Infinity;
                                }
                            },
                            trigger: { player: 'useCard' },
                            audio: "ext:Thunder/audio/skill:2",
                            forced: true,
                            filter: function (event, player) {
                                return get.name(event.card) == 'sha' && player.countUsed('sha', true) == 1;
                            },
                            content: function () {
                                trigger.directHit.addArray(game.players);
                            },
                            group: 'th_wushen_add',
                            ai: {
                                effect: {
                                    target: function (card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                    }
                                },
                                directHit_ai: true,
                                skillTagFilter: function (player, tag, arg) {
                                    return arg.card.name == 'sha' && player.countUsed('sha', true) == 1;
                                },
                            },
                            subSkill: {
                                add: {
                                    audio: 'th_wushen',
                                    trigger: { player: 'useCard2' },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (get.name(event.card) != 'sha') return false;
                                        if (!event.targets) return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.contains(current) && current.hasMark('th_wuhun_mark') && lib.filter.targetEnabled2(event.card, player, current);
                                        });
                                    },
                                    content: function () {
                                        'step 0'
                                        if (!event.isMine() && !event.isOnline()) game.delayx();
                                        event.targets = game.filterPlayer(function (current) { return !trigger.targets.contains(current) && current.hasMark('th_wuhun_mark') && lib.filter.targetEnabled2(trigger.card, player, current) }).sortBySeat();
                                        'step 2'
                                        player.logSkill('th_wushen', event.targets);
                                        trigger.targets.addArray(event.targets);
                                    }
                                },
                            }
                        },
                        th_wuhun: {
                            audio: "wuhun21",
                            trigger: {
                                player: "damageEnd",
                            },
                            filter: function (event, player) {
                                if (event.source == undefined) return false;
                                return true;
                            },
                            forced: true,
                            content: function () {
                                if (!trigger.source.storage.th_wuhun_mark) {
                                    trigger.source.storage.th_wuhun_mark = 0;
                                }
                                trigger.source.storage.th_wuhun_mark += trigger.num;
                                trigger.source.syncStorage('th_wuhun_mark');
                                trigger.source.markSkill('th_wuhun_mark');
                            },
                            global: "th_wuhun_mark",
                            group: ["th_wuhun_source", "th_wuhun_die"],
                            subSkill: {
                                mark: {
                                    marktext: "梦魇",
                                    intro: {
                                        content: "mark",
                                    },
                                    sub: true,
                                },
                                source: {
                                    trigger: { source: 'damageSource' },
                                    filter: function (event, player) {
                                        return event.player.hasMark('th_wuhun_mark') && event.num > 0;
                                    },
                                    forced: true,
                                    content: function () {
                                        trigger.player.storage.th_wuhun_mark++;
                                        trigger.player.syncStorage('th_wuhun_mark');
                                        trigger.player.markSkill('th_wuhun_mark');
                                    }
                                },
                                die: {
                                    trigger: { player: 'die' },
                                    forceDie: true,
                                    skillAnimation: true,
                                    animationColor: 'soil',
                                    filter: function (event, player) {
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] != player && game.players[i].storage.th_wuhun_mark) return true;
                                        }
                                        return false;
                                    },
                                    content: function () {
                                        "step 0"
                                        player.judge(function (card) {
                                            if (['tao', 'taoyuan'].contains(card.name)) return 10;
                                            return -10;
                                        }).judge2 = function (result) {
                                            return result.bool == false ? true : false;
                                        };
                                        "step 1"
                                        if (result.bool) {
                                            player.die();
                                            for (var i of game.filterPlayer(function (current) {
                                                return i.hasMark('th_wuhun_mark');
                                            })) {
                                                i.unmarkSkill('th_wuhun_mark');
                                            }
                                            event.finish();
                                        } else {
                                            player.chooseTarget('选择至少一名拥有“梦魇”标记的角色，其失去标记数量的体力：', [1, Infinity], function (card, player, target) {
                                                return target != player && target.hasMark('th_wuhun_mark');
                                            }, true).ai = (target) => -get.attitude(player, target);
                                        }
                                        "step 2"
                                        if (result.bool) {
                                            result.targets.sortBySeat();
                                            for (var i = 0; i < result.targets.length; i++) {
                                                result.targets[i].loseHp(result.targets[i].countMark('th_wuhun_mark'));
                                                result.targets[i].unmarkSkill('th_wuhun_mark');
                                            }
                                        }
                                    }
                                },
                            },
                        },
                        th_cuorui: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            audio: "cuorui",
                            limited: true,
                            skillAnimation: true,
                            animationColor: 'gray',
                            content: function () {
                                'step 0'
                                player.awakenSkill('th_cuorui');
                                var num = game.filterPlayer(function (target) {
                                    return target.isMaxHandcard();
                                })[0].countCards('h');
                                if (player.countCards('h') < num) player.draw(Math.min(5, num - player.countCards('h')));
                                'step 1'
                                if (player.storage._disableJudge) {
                                    player.chooseTarget('对一名其他角色造成1点伤害', lib.filter.notMe, true).ai = (target) => -get.attitude(player, target);
                                } else {
                                    player.disableJudge();
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) result.targets[0].damage();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: function (player, target) {
                                        var num = game.filterPlayer(function (current) {
                                            return current.isMaxHandcard();
                                        })[0].countCards('h');
                                        if (num - player.countCards('h') >= 2) return 1;
                                        return 0;
                                    }
                                }
                            },
                        },
                        th_liewei: {
                            trigger: { global: 'dieAfter' },
                            audio: "liewei",
                            forced: true,
                            firstDo: true,
                            filter: function (event, player) { return event.source == player },
                            content: function () {
                                'step 0'
                                if (player.hasSkill('th_cuorui')) {
                                    player.draw(2);
                                    event.finish();
                                }
                                'step 1'
                                var choiceList = ['摸两张牌', '视“挫锐”为未发动过'];
                                player.chooseControl().set('choiceList', choiceList).set('prompt', '裂围：选择一项执行：').ai = () => 1;
                                'step 2'
                                if (result.index == 1) {
                                    player.restoreSkill('th_cuorui');
                                } else player.draw(2);
                            }
                        },
                        th_gongqi: {
                            mod: {
                                attackRangeBase: function () {
                                    return Infinity;
                                },
                                cardUsable: function (card, player) {
                                    if (card.name == 'sha' && player.storage.th_gongqi.contains(get.suit(card))) return Infinity;
                                },
                                aiOrder: function (player, card, num) {
                                    if (get.name(card) == 'sha' && !player.storage.th_gongqi.contains(get.suit(card))) return num + 1;
                                },
                            },
                            init: function (player) { player.storage.th_gongqi = [] },
                            intro: {
                                content: '使用$花色的杀无次数限制',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'xingongji',
                            position: 'he',
                            filterCard: true,
                            filter: function (event, player) {
                                return player.countCards('h') > 0;
                            },
                            check: function (card) {
                                var base = 0,
                                    player = _status.event.player,
                                    suit = get.suit(card, player),
                                    added = false,
                                    added2 = false,
                                    added3;
                                if (get.type(card) == 'equip' && game.hasPlayer(function (target) {
                                    var att = get.attitude(player, target);
                                    if (att >= 0) return 0;
                                    if (target.countCards('he', function (card) {
                                        return get.value(card) > 5;
                                    })) return -att;
                                })) base += 6;
                                var hs = player.getCards('h');
                                var muniu = player.getEquip('muniu');
                                if (muniu && card != muniu && muniu.cards) hs = hs.concat(muniu.cards);
                                for (var i of hs) {
                                    if (i != card && get.name(i) == 'sha') {
                                        if (get.suit(i, player) == suit) {
                                            if (player.hasValueTarget(i, false)) {
                                                added3 = true;
                                                base += 5.5;
                                            }
                                        } else {
                                            if (player.hasValueTarget(i, false)) added2 = true;
                                            if (!added && !player.hasValueTarget(i, null, true) && player.hasValueTarget(i, false, true)) {
                                                base += 4;
                                                added = true;
                                            }
                                        }
                                    }
                                }
                                if (added3 && !added2) base -= 4.5;
                                return base - get.value(card);
                            },
                            content: function () {
                                "step 0"
                                player.storage.th_gongqi.add(get.suit(cards[0], player));
                                player.markSkill('th_gongqi');
                                "step 1"
                                if (get.type(cards[0], null, cards[0].original == 'h' ? player : false) == 'equip') {
                                    player.chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
                                        return player != target && target.countCards('he') > 0;
                                    }).set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att >= 0) return 0;
                                        if (target.countCards('he', function (card) {
                                            return get.value(card) > 5;
                                        })) return -att;
                                        return -att * 0.8;
                                    });
                                } else {
                                    event.finish();
                                }
                                "step 2"
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    player.discardPlayerCard(result.targets[0], 'he', true);
                                }
                            },
                            ai: {
                                order: 4.5,
                                result: {
                                    player: 1
                                }
                            },
                            group: 'th_gongqi_end',
                            subSkill: {
                                end: {
                                    forced: true,
                                    direct: true,
                                    trigger: { player: 'phaseEnd' },
                                    content: function () {
                                        player.storage.th_gongqi = [];
                                        player.unmarkSkill('th_gongqi')
                                    }
                                }
                            }
                        },
                        th_jiefan: {
                            skillAnimation: true,
                            animationColor: 'wood',
                            audio: 'xinjiefan',
                            unique: true,
                            limited: true,
                            enable: 'phaseUse',
                            filterTarget: true,
                            content: function () {
                                "step 0"
                                player.awakenSkill('th_jiefan');
                                player.storage.th_jiefanused = target;
                                event.players = game.filterPlayer(function (current) {
                                    return current != target && current.inRange(target);
                                });
                                event.players.sortBySeat();
                                "step 1"
                                if (event.players.length) {
                                    event.current = event.players.shift();
                                    event.current.animate('target');
                                    player.line(event.current, 'green');
                                    if (event.current.countCards('he') && target.isAlive()) {
                                        event.current.chooseToDiscard({ subtype: 'equip1' }, 'he', '弃置一张武器牌或让' +
                                            get.translation(target) + '摸一张牌').set('ai', function (card) {
                                                if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
                                                return -1;
                                            }).set('target', target);
                                        event.tempbool = false;
                                    } else {
                                        event.tempbool = true;
                                    }
                                } else {
                                    event.finish();
                                }
                                "step 2"
                                if (event.tempbool || result.bool == false) {
                                    target.draw();
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: function (player, target) {
                                        var num = 0,
                                            players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != target && players[i].inRange(target)) {
                                                num++;
                                            }
                                        }
                                        return num;
                                    }
                                }
                            },
                            group: 'th_jiefan_refresh',
                            subSkill: {
                                refresh: {
                                    trigger: { global: 'dying' },
                                    forced: true,
                                    popup: false,
                                    filter: function (event, player) {
                                        if (!player.storage.th_jiefanused) return false;
                                        return player.storage.th_jiefanused == event.player;
                                    },
                                    content: function () {
                                        player.restoreSkill('th_jiefan');
                                    },
                                }
                            }
                        },
                        th_shuangren: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseUseBegin' },
                            direct: true,
                            preHidden: true,
                            content: function () {
                                'step 0'
                                var goon;
                                if (player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                    goon = player.hasCard(function (card) {
                                        return card.number == 13;
                                    });
                                } else if (player.needsToDiscard() > 1) {
                                    goon = player.hasCard(function (card) {
                                        return card.number > 8 && get.value(card) <= 7;
                                    });
                                } else {
                                    goon = player.hasCard(function (card) {
                                        return (card.number > 9 && get.value(card) <= 6) || get.value(card) <= 5;
                                    });
                                }
                                player.chooseTarget(get.prompt2('shuangren'), function (card, player, target) {
                                    return player.canCompare(target);
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (_status.event.goon && get.attitude(player, target) < 0) {
                                        if (game.hasPlayer(function (current) {
                                            return current != target && get.distance(target, current) <= 1 && get.effect(target, { name: 'sha' }, player, player) > 0 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        })) return 20;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    }
                                    return 0;
                                }).set('goon', goon);
                                'step 1'
                                if (result.bool) {
                                    player.addTempSkill('th_shuangren_used');
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.logSkill('th_shuangren', target);
                                    player.chooseToCompare(target);
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    player.chooseTarget('选择至多两名与' + get.translation(event.target) + '距离不大于1的角色，视为对其出杀：', function (card, player, target) {
                                        return get.distance(target, event.target) <= 1 && player.canUse('sha', target, false);
                                    }, [1, 2]).ai = (target) => get.effect(target, { name: 'sha' }, player, player);
                                } else event.goto(6);
                                'step 3'
                                if (result.bool) {
                                    event.targets = result.targets.sortBySeat();
                                } else event.finish();
                                'step 4'
                                event.current = event.targets.shift();
                                player.useCard({ name: 'sha', isCard: true }, event.current, false).set('addCount', false);
                                if (event.targets.length) event.redo();
                                'step 5'
                                event.finish();
                                'step 6'
                                event.target.chooseBool('是否视为对' + get.translation(player) + '使用一张无视距离的杀').ai = () => get.effect(player, { name: 'sha' }, event.target, event.target) > 0;
                                'step 7'
                                if (result.bool) {
                                    event.target.useCard({ name: 'sha', isCard: true }, player, false);
                                }
                            },
                            group: 'th_shuangren_end',
                            subSkill: {
                                used: { onremove: true },
                                end: {
                                    trigger: { player: 'phaseUseEnd' },
                                    direct: true,
                                    filter: function (event, player) {
                                        return !player.hasSkill('th_shuangren_used') && player.getHistory('sourceDamage', function (evt) {
                                            return evt.card && evt.card.name == 'sha'
                                        }).length == 0;
                                    },
                                    content: function () {
                                        'step 0'
                                        player.chooseToDiscard('是否弃置一张牌并发动【双刃】', 'he').ai = (card) => {
                                            if (player.hp == 1 && player.countCards('h', 'shan') == 0) return 0;
                                            else if (player.needsToDiscard() > 1) return 10 - get.value(card);
                                            else {
                                                if (player.hasCard(function (card) {
                                                    return card.number > 8 && get.value(card) <= 7;
                                                })) return 7 - get.value(card);
                                            }
                                            return 0;
                                        }
                                        'step 1'
                                        if (result.bool) {
                                            var next = game.createEvent('end_shuangren');
                                            next.player = player;
                                            next.setContent(lib.skill.th_shuangren.content);
                                        }
                                    }
                                }
                            },
                            ai: { expose: 0.4, }
                        },
                        th_enyuan: {
                            audio: "ext:Thunder/audio/skill:2",
                            group: ['th_enyuan1', 'th_enyuan2'],
                        },
                        th_enyuan1: {
                            audio: 'th_enyuan',
                            trigger: { player: 'gainEnd' },
                            filter: function (event, player) {
                                if (!event.source || event.source == player || !event.source.isIn() || event.cards.length < 2) return false;
                                var evt = event.getl(event.source);
                                return evt && evt.cards2 && evt.cards2.length > 1;
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                var list = ['摸一张牌'];
                                if ((trigger.source.countCards('h') == 0 || trigger.source.countCards('e') == 0) && trigger.source.isDamaged()) list.push('回复1点体力');
                                list.push('cancel2');
                                player.chooseControl(list).set('prompt', get.prompt('th_enyuan')).set('prompt2', '令' + get.translation(trigger.source) + '执行：').ai = () => {
                                    if (get.attitude(player, trigger.source) < 0) return 'cancel2';
                                    if (trigger.source.hp <= trigger.source.getDamagedHp() && list.contains('回复1点体力')) return '回复1点体力';
                                    return '摸一张牌';
                                }
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.logSkill('th_enyuan', trigger.source);
                                    if (result.control == '回复1点体力') trigger.source.recover();
                                    else trigger.source.draw();
                                }
                            },
                        },
                        th_enyuan2: {
                            audio: 'th_enyuan',
                            trigger: { player: 'damageEnd' },
                            logTarget: 'source',
                            filter: function (event, player) {
                                return event.source && event.source != player && event.source.isAlive();
                            },
                            check: function (event, player) {
                                var att = get.attitude(player, event.source);
                                var num = event.source.countCards('h');
                                if (att <= 0) return true;
                                if (num > 2) return true;
                                if (num) return att < 4;
                                return false;
                            },
                            prompt2: '令该角色除非交给你一张手牌，否则失去1点体力。若此牌不为♥，则你摸一张牌。',
                            content: function () {
                                'step 0'
                                event.count = trigger.num;
                                'step 1'
                                var target = trigger.source;
                                event.count--;
                                if (!target.countCards('h')) event._result = { bool: false };
                                else target.chooseCard('h', '恩怨：将一张手牌交给' + get.translation(player) + '，或失去1点体力').set('ai', function (card) {
                                    if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
                                        if (get.suit(card) != 'heart') return 15 - get.value(card);
                                        return 11 - get.value(card);
                                    } else {
                                        var num = 12 - _status.event.player.hp * 2;
                                        if (get.suit(card) != 'heart') num -= 2;
                                        return num - get.value(card);
                                    }
                                });
                                'step 2'
                                var target = trigger.source;
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.card = card;
                                    player.gain(card, target, 'giveAuto');
                                } else {
                                    target.loseHp();
                                    event.goto(4);
                                }
                                'step 3'
                                if (get.suit(card) != 'heart') player.draw();
                                'step 4'
                                var target = trigger.source;
                                if (target.isAlive() && event.count > 0) player.chooseBool(get.prompt('th_enyuan', target), '令该角色除非交给你一张手牌，否则失去1点体力。若此牌不为♥，则你摸一张牌。').set('ai', function () {
                                    var evt = _status.event.getTrigger();
                                    return lib.skill.th_enyuan2.check(evt, evt.player);
                                });
                                else event.finish();
                                'step 5'
                                if (result.bool) {
                                    player.logSkill('th_enyuan2', trigger.source);
                                    event.goto(1);
                                }
                            },
                        },
                        th_xuanhuo: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseDrawEnd' },
                            direct: true,
                            filter: function (event, player) {
                                return player.countCards('h') > 1 && game.countPlayer() > 2;
                            },
                            content: function () {
                                'step 0'
                                var ai2 = function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) <= 0) return 0;
                                    var list = [null, 'juedou'].concat(lib.inpile_nature);
                                    if (target.hasSkill('ayato_zenshen')) list.push('kami');
                                    var num = Math.max.apply(Math, list.map(function (i) {
                                        if (i == 'juedou') return target.getUseValue({ name: 'juedou', isCard: true }, false);
                                        var card = { name: 'sha', nature: i, isCard: true };
                                        return target.getUseValue(card, false);
                                    }));
                                    if (target.hasSkillTag('nogain')) num /= 4;
                                    return num;
                                };
                                player.chooseCardTarget({
                                    prompt: get.prompt2('th_xuanhuo'),
                                    filterCard: true,
                                    selectCard: 2,
                                    position: 'h',
                                    filterTarget: lib.filter.notMe,
                                    goon: game.hasPlayer(function (current) {
                                        return current != player && ai2(player, current) > 0;
                                    }),
                                    ai1: function (card) {
                                        if (!_status.event.goon) return 0;
                                        return 7 - get.value(card);
                                    },
                                    ai2: ai2,
                                });
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.logSkill('th_xuanhuo', target);
                                    target.gain(result.cards, player, 'giveAuto');
                                } else event.finish();
                                'step 2'
                                if (game.hasPlayer(function (current) {
                                    return current != player && current != target;
                                })) player.chooseTarget(function (card, player, target) {
                                    return target != player && target != _status.event.target;
                                }, '选择' + get.translation(target) + '使用【杀】或【决斗】的目标', true).set('target', target).set('ai', function (target) {
                                    var evt = _status.event;
                                    var list = [null, 'juedou'] /* .concat(lib.inpile_nature) */;
                                    //if (evt.target.hasSkill('ayato_zenshen')) list.push('kami')
                                    return Math.max.apply(Math, list.map(function (i) {
                                        var card = { name: 'sha', isCard: true };
                                        if (i == 'juedou') card.name = 'juedou';
                                        //else if (i) card.nature = i;
                                        if (!evt.target.canUse(card, target, false)) return 0;
                                        return get.effect(target, card, evt.target, evt.player);
                                    }));
                                });
                                else event.finish();
                                'step 3'
                                var target2 = result.targets[0];
                                event.target2 = target2;
                                player.line(target2);
                                game.log(player, '选择了', target2);
                                /* var list = lib.inpile_nature.slice(0);
                                list.unshift(null); */
                                var vcards = [];
                                //if (target.hasSkill('ayato_zenshen')) list.add('kami');
                                //for (var i of list) {
                                if (target.canUse({ name: 'sha', isCard: true, /* nature: i  */ }, target2, false)) vcards.push(['基本', '', 'sha' /* , i */]);
                                //}
                                if (target.canUse({ name: 'juedou', isCard: true }, target2, false)) vcards.push(['基本', '', 'juedou']);
                                if (!vcards.length) {
                                    if (!target.countCards('h')) event.finish();
                                    else event._result = { index: 1 };
                                } else if (!target.countCards('h')) {
                                    event.vcards = vcards;
                                    event._result = { index: 0 };
                                } else {
                                    event.vcards = vcards;
                                    target.chooseControl().set('choiceList', [
                                        '视为对' + get.translation(target2) + '使用任意一张【杀】或【决斗】',
                                        '令' + get.translation(player) + '获得你两张牌',
                                    ]);
                                }
                                'step 4'
                                if (result.index == 0) {
                                    if (event.vcards.length == 1) event._result = { links: event.vcards, bool: true };
                                    else target.chooseButton(['请选择要对' + get.translation(event.target2) + '使用的牌', [event.vcards, 'vcard']], true).set('ai', function (button) {
                                        var player = _status.event.player;
                                        return get.effect(_status.event.getParent().target2, { name: button.link[2], isCard: true, nature: button.link[3] }, player, player);
                                    });
                                } else {
                                    player.gainPlayerCard(target, 'he', [1, 2]);
                                    event.finish();
                                }
                                'step 5'
                                if (result.bool) target.useCard({ name: result.links[0][2], isCard: true, nature: result.links[0][3] }, false, event.target2);
                            },
                            ai: {
                                expose: 0.17,
                                fireAttack: true,
                                skillTagFilter: function (player) {
                                    return player.hasFriend();
                                },
                            },
                        },
                        //海外陈董
                        th_yilie: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseUseBegin' },
                            direct: true,
                            content: function () {
                                'step 0'
                                player.chooseControl('选项一', '选项二', '背水！', 'cancel2').set('choiceList', [
                                    '本阶段内使用【杀】的次数上限+1',
                                    '本回合内使用【杀】指定横置角色为目标后，或被【闪】抵消时摸一张牌',
                                    '背水！失去1点体力并依次执行上述所有选项',
                                ]).set('ai', function () {
                                    if (player.countCards('hs', function (card) {
                                        return get.name(card) == 'sha' && player.hasValueTarget(card);
                                    }) > player.getCardUsable({ name: 'sha' })) return 0;
                                    return 1;
                                });
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.logSkill('th_yilie');
                                    game.log(player, '选择了', '#g【毅烈】', '的', '#y' + result.control);
                                    if (result.index % 2 == 0) player.addTempSkill('th_yilie_add', 'phaseUseEnd');
                                    if (result.index > 0) player.addTempSkill('th_yilie_miss');
                                    if (result.index == 2) player.loseHp();
                                }
                            },
                            subSkill: {
                                add: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable: function (card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                miss: {
                                    charlotte: true,
                                    audio: 'th_yilie',
                                    trigger: { player: ['shaMiss', 'useCardToPlayered'] },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (event.card.name != 'sha') return false;
                                        if (event.name == "useCardToPlayered" && event.target && !event.target.isLinked()) return false;
                                        return true;
                                    },
                                    content: function () {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        th_fenming: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseZhunbeiBegin' },
                            direct: true,
                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt('th_fenming')).set('prompt2', get.prompt2('th_fenming_info')).ai = (target) => {
                                    if (target.countCards('he') > 0 && !target.isLinked() && get.attitude(player, target) < 0) return 15;
                                    return -get.attitude(player, target);
                                }
                                'step 1'
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.logSkill('th_fenming', result.targets[0]);
                                    player.chooseControl('选项一', '选项二', '背水！', 'cancel2').set('choiceList', [
                                        '令' + get.translation(event.target) + '弃置一张牌',
                                        '令' + get.translation(event.target) + '进入连环状态',
                                        '背水！你进入连环状态然后执行前两项',
                                    ]).set('ai', function () {
                                        if (player.isLinked()) return 2;
                                        if (event.target.countCards('he') == 0 && !event.target.isLinked()) return 1;
                                        return 0;
                                    });
                                } else event.finish();
                                'step 2'
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#g【奋命】', '的', '#y' + result.control);
                                    if (result.index % 2 == 0) event.target.chooseToDiscard('he', true);
                                    if (result.index > 0 && !event.target.isLinked()) event.target.link();
                                    if (result.index == 2 && !player.isLinked()) player.link();
                                }
                            },
                        },
                        //海外马岱
                        th_qianxi: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter: function (event, player) {
                                player.storage.th_qianxi = [];
                                return true;
                            },
                            preHidden: true,
                            content: function () {
                                "step 0"
                                player.draw();
                                player.chooseToDiscard('he', true);
                                "step 1"
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                event.color = get.color(result.cards[0], result.cards[0].original == 'h' ? player : false);
                                player.chooseTarget(function (card, player, target) {
                                    return player != target && get.distance(player, target) <= 1;
                                }, true).set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                "step 2"
                                if (result.bool && result.targets.length) {
                                    player.storage.th_qianxi[0] = result.targets[0];
                                    player.storage.th_qianxi[1] = result.targets[0].storage.th_qianxi2 = event.color;
                                    result.targets[0].addTempSkill('th_qianxi2');
                                    player.line(result.targets, 'green');
                                    game.addVideo('storage', result.targets[0], ['th_qianxi2', event.color]);
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter: function (player, tag, arg) {
                                    if (!arg.target.hasSkill('th_qianxi2')) return false;
                                    if (arg.card.name == 'sha') return arg.target.storage.th_qianxi2 == 'red' && (!arg.target.getEquip('bagua') || player.hasSkillTag('unequip', false, {
                                        name: arg.card ? arg.card.name : null,
                                        target: arg.target,
                                        card: arg.card
                                    }) || player.hasSkillTag('unequip_ai', false, {
                                        name: arg.card ? arg.card.name : null,
                                        target: arg.target,
                                        card: arg.card
                                    }));
                                    return arg.target.storage.th_qianxi2 == 'black';
                                }
                            },
                            group: 'th_qianxi_end',
                            subSkill: {
                                end: {
                                    trigger: { player: 'phaseJieshuBegin' },
                                    audio: 'th_qianxi',
                                    filter: function (event, player) {
                                        if (!player.storage.th_qianxi.length) return false;
                                        return player.getHistory('sourceDamage', function (evt) {
                                            return evt.card.name == 'sha' && evt.player == player.storage.th_qianxi[0] && evt.player.isIn();
                                        }).length;
                                    },
                                    forced: true,
                                    content: function (event, player) {
                                        'step 0'
                                        for (var i of player.getHistory('sourceDamage', function (evt) {
                                            return evt.card.name == 'sha' && evt.player == player.storage.th_qianxi[0];
                                        })) {
                                            if (player.storage.th_qianxi[1] == 'red') event.color = 'black';
                                            else event.color = 'red';
                                            i.player.storage.th_qianxi2 = event.color;
                                            i.player.addTempSkill('th_qianxi2', { player: 'phaseEnd' });
                                            player.line(i.player, 'red');
                                            game.addVideo('storage', i.player, ['th_qianxi2', event.color]);
                                        }
                                        'step 1'
                                        delete player.storage.th_qianxi;
                                    }
                                }
                            }
                        },
                        th_qianxi2: {
                            forced: true,
                            mark: true,
                            audio: false,
                            mod: {
                                cardEnabled2: function (card, player) {
                                    if (get.color(card) == player.storage.th_qianxi2 && get.position(card) == 'h') return false;
                                },
                            },
                            intro: {
                                content: function (color) {
                                    return '不能使用或打出' + get.translation(color) + '的手牌';
                                }
                            }
                        },
                        //海外傅肜
                        th_xuewei: {
                            audio: 'xuewei',
                            trigger: { global: 'phaseUseBegin' },
                            filter: function (event, player) {
                                return event.player != player && game.hasPlayer(function (target) { return target != player && target != event.player }) && player.storage.th_xuewei_used == 0;
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt2('th_xuewei'), function (card, player, target) {
                                    return target != player && target != trigger.player;
                                }).set('ai', function (target) {
                                    if (get.attitude(player, trigger.player) >= 0) return 0;
                                    return get.attitude(player, target);
                                }).animate = false;
                                'step 1'
                                if (result.bool) {
                                    player.storage.th_xuewei_used++;
                                    event.target = result.targets[0];
                                    game.log(player, '对', trigger.player, '发动了', '<span class="greentext">【血卫】</span>  （指向', event.target, '）');
                                    game.trySkillAudio('th_xuewei', player, true);
                                    trigger.player.chooseControl('选项一', '选项二').set('choiceList', [
                                        '不能对' + get.translation(event.target) + '使用【杀】且手牌上限-2',
                                        '令' + get.translation(player) + '视为对你使用一张【决斗】',
                                    ]).set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp - player.countCards('h') > 1 || player.hp == 1 && player.countCards('h', 'sha') < 2) return 0;
                                        return 1;
                                    });
                                } else event.finish();
                                'step 2'
                                game.log(trigger.player, '选择了', '#g【血卫】', '的', '#y' + result.control);
                                if (result.index == 1) {
                                    player.useCard({ name: 'juedou', isCard: true }, trigger.player, false);
                                } else {
                                    trigger.player.storage.th_xuewei = event.target;
                                    trigger.player.addTempSkill('th_xuewei_effect');
                                }
                            },
                            ai: {
                                threaten: 1.25,
                            },
                            group: 'th_xuewei_round',
                            subSkill: {
                                effect: {
                                    mod: {
                                        maxHandcard: function (player, num) {
                                            return num - 2;
                                        },
                                        playerEnabled: function (card, player, target) {
                                            if (card.name == 'sha' && (player.storage.th_xuewei && player.storage.th_xuewei.contains(target))) return false;
                                        },
                                    }
                                },
                                round: {
                                    trigger: { global: 'roundStart' },
                                    direct: true,
                                    forced: true,
                                    content: function () {
                                        player.storage.th_xuewei_used = 0;
                                    }
                                }
                            }
                        },
                        th_liechi: {
                            trigger: { player: 'damageEnd' },
                            audio: 'liechi',
                            filter: function (event, player) {
                                return event.source && event.source.isIn() && player.hp <= event.source.hp && event.source.countCards('he');
                            },
                            forced: true,
                            direct: true,
                            content: function () {
                                'step 0'
                                var choiceList = ['令' + get.translation(trigger.source) + '将手牌弃至与你手牌数相同', '弃置' + get.translation(trigger.source) + '一张牌'];
                                if (player.hasSkill('th_liechi_dead') && player.countCards('e')) choiceList.push('背水：弃置一张装备牌，并执行上述两项');
                                var i = ['选项一', '选项二'];
                                if (choiceList.length == 3) i.push('背水！');
                                player.chooseControl(i).set('choiceList', choiceList).set('ai', function () {
                                    if (choiceList.length == 3 && trigger.source.countCards('h') > player.countCards('h') && trigger.source.countCards('he') - player.countCards('h') > 0) return 2;
                                    if (trigger.source.countCards('h') - player.countCards('h') > 1) return 0;
                                    return 1;
                                });
                                'step 1'
                                game.log(player, '选择了', '#g【烈斥】', '的', '#y' + result.control);
                                if (result.index % 2 == 0 && trigger.source.countCards('h') > player.countCards('h')) trigger.source.chooseToDiscard('h', trigger.source.countCards('h') - player.countCards('h'), true);
                                if (result.index > 0 && trigger.source.countCards('he')) player.discardPlayerCard(trigger.source, 'he', true);
                                if (result.index == 2 && player.countCards('e')) player.chooseToDiscard('e', true);
                            },
                            group: 'th_liechi_dying',
                            subSkill: {
                                dying: {
                                    trigger: { player: 'dying' },
                                    forced: true,
                                    direct: true,
                                    content: function () {
                                        player.addTempSkill('th_liechi_dead');
                                    },
                                },
                                dead: { onremove: true },
                            }
                        },
                        th_dunshi: {
                            audio: "ext:Thunder/audio/skill:2",
                            hiddenCard: function (player, name) {
                                return player.storage.th_dunshi.contains(name) && !player.hasSkill('th_dunshi_used');
                            },
                            init: function (player) {
                                player.storage.th_dunshi = ['sha', 'shan', 'tao', 'jiu'];
                                player.storage.dunshiChooseThree = 0;
                                player.storage.th_dunshiDelete = []
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter: function (event, player) {
                                if (player.hasSkill('th_dunshi_used')) return false;
                                for (var i of lib.inpile) {
                                    if (player.storage.th_dunshi.contains(i) && event.filterCard({
                                        name: i,
                                    }, player, event)) return true;
                                }
                                return false;
                            },
                            ai: {
                                order: function () {
                                    if (_status.event.player.storage.th_dunshi.contains('sha')) return get.order({ name: 'sha' }) + 0.5;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player: function (player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            getSkillRank: function (target, skill) {
                                switch (get.translation(skill)) {
                                    case '仁政':
                                        return 3;
                                    case '仁心':
                                        return 1;
                                    case '仁德':
                                        return 2;
                                    case '义从':
                                        return 1.8;
                                    case '天义':
                                        return 2;
                                    case '举义':
                                        if (target.maxHp < 5) {
                                            return 0.8;
                                        } else {
                                            return target.maxHp - 3;
                                        }
                                    case '义襄':
                                        return 3;
                                    case '义舍':
                                        return 0.5;
                                    case '礼下':
                                        return 0.75;
                                    case '礼赂':
                                        return 10;
                                    case '遗礼':
                                        return -1;
                                    case '智愚':
                                        return 1.5;
                                    case '集智':
                                        if (target.countCards('h') > 3) return 3;
                                        return 2.5;
                                    case '同礼':
                                        return 4;
                                    case '智迟':
                                        if (target.hp > 4) return 2.2;
                                        return 3.5;
                                    case '遣信':
                                        return 0.75;
                                    default:
                                        return get.skillRank(skill, 'in') + get.skillRank(skill, 'out');
                                }
                            },
                            chooseButton: {
                                dialog: function (event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (player.storage.th_dunshi.contains(i) && event.filterCard({
                                            name: i,
                                        }, player, event)) {
                                            list.push(['基本', '', i]);
                                        }
                                    }
                                    return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                                },
                                check: function (button) {
                                    var player = _status.event.player;
                                    if (_status.event.getParent().type != 'phase') return 1;
                                    return player.getUseValue({ name: button.link[2] }) + 1;
                                },
                                backup: function (links, player) {
                                    return {
                                        audio: 'th_dunshi',
                                        popname: true,
                                        filterCard: function (card) { return false },
                                        selectCard: -1,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        onuse: function (result, player) {
                                            player.storage.th_dunshi_temp = result.card.name;
                                            player.addTempSkill('th_dunshi_used');
                                            player.addTempSkill('th_dunshi_effect');
                                            _status.currentPhase.addTempSkill('th_dunshi_Ai');
                                        },
                                        onrespond: function () { return lib.skill.th_dunshi_backup.onuse.apply(this, arguments) },
                                    }
                                },
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: function (storage, player) {
                                            return '已删除牌名：' + get.translation(player.storage.th_dunshiDelete);
                                        }
                                    }
                                },
                                backup: {},
                                used: { onremove: true },
                                Ai: {
                                    ai: {
                                        effect: {
                                            player: function (card, player, target) {
                                                if (get.tag(card, 'damage') && get.attitude(player, target) >= 0 && player.hasSkill('th_dunshi_effect')) return [0, 0.1, 0, 0.1];
                                            }
                                        }
                                    },
                                },
                                effect: {
                                    trigger: { global: 'damageBegin2' },
                                    forced: true,
                                    filter: function (event, player) {
                                        return event.source && event.source.isIn() && event.source == _status.currentPhase;
                                    },
                                    onremove: function (player) { delete player.storage.th_dunshi_temp },
                                    content: function () {
                                        'step 0'
                                        event.addIndex = 0;
                                        'step 1'
                                        var list = [
                                            '防止此伤害，选择1个包含“仁义礼智信”的技能令' + get.translation(_status.currentPhase) + '获得',
                                            '减1点体力上限并摸' + player.storage.dunshiChooseThree + '张牌',
                                            '删除你本次视为使用或打出的牌名（' + get.translation(player.storage.th_dunshi_temp) + '）',
                                        ];
                                        if (event.choice != undefined) list.splice(event.choice, 1);
                                        event.videoId = lib.status.videoId++;
                                        var func = function (id, bool) {
                                            var choiceList = ui.create.dialog('遁世：选择一项执行：', 'forcebutton');
                                            choiceList.videoId = id;
                                            for (var i = 0; i < list.length; i++) {
                                                var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                                str += list[i];
                                                str += '</div>';
                                                var next = choiceList.add(str);
                                                next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                                next.firstChild.link = i;
                                                for (var j in lib.element.button) {
                                                    next[j] = lib.element.button[j];
                                                }
                                                choiceList.buttons.add(next.firstChild);
                                            }
                                            return choiceList;
                                        };
                                        if (player.isOnline2()) {
                                            player.send(func, event.videoId);
                                        }
                                        event.dialog = func(event.videoId);
                                        if (player != game.me || _status.auto) {
                                            event.dialog.style.display = 'none';
                                        }
                                        var next = player.chooseButton();
                                        next.set('dialog', event.videoId);
                                        next.set('selectButton', 1);
                                        next.set('forced', true);
                                        next.set('ai', function (button) {
                                            var num = 0;
                                            if (event.choice != undefined && button.link >= event.choice) num = 1;
                                            switch (button.link + num) {
                                                case 0:
                                                    {
                                                        if (get.attitude(player, _status.currentPhase) > 0) return 2.5 + Math.random();
                                                        else if (player.storage.th_dunshi.length <= 2) return 0.5 + Math.random();
                                                        return 0;
                                                    }
                                                case 1:
                                                    {
                                                        if (player.maxHp <= 2 || player.storage.dunshiChooseThree == 0) return 0;
                                                        return Math.random();
                                                    }
                                                case 2:
                                                    {
                                                        if (player.storage.th_dunshi_temp == 'tao' || player.storage.th_dunshi_temp == 'shan') return 0;
                                                        return 1.2 + Math.random();
                                                    }
                                            }
                                        });
                                        'step 2'
                                        if (player.isOnline2()) {
                                            player.send('closeDialog', event.videoId);
                                        }
                                        event.dialog.close();
                                        var map = [
                                            function (trigger, player, event) {
                                                trigger.cancel();
                                                var next = game.createEvent('th_dunshi_getSkill');
                                                next.player = player;
                                                next.setContent(lib.skill.th_dunshi.contentx);
                                            },
                                            function (trigger, player, event) {
                                                player.loseMaxHp();
                                                player.draw(player.storage.dunshiChooseThree);
                                            },
                                            function (trigger, player, event) {
                                                game.log(player, '删除了', '#g【遁世】', '的牌名', '#y【' + get.translation(player.storage.th_dunshi_temp) + '】')
                                                player.storage.th_dunshi.remove(player.storage.th_dunshi_temp);
                                                player.storage.th_dunshiDelete.push(player.storage.th_dunshi_temp);
                                                player.markSkill('th_dunshi_mark');
                                                player.storage.dunshiChooseThree++;
                                            },
                                        ];
                                        var num = 0;
                                        if (event.choice != undefined && result.links[0] >= event.choice) num = 1;
                                        map[result.links[0] + num](trigger, player, event);
                                        event.choice = result.links[0];
                                        'step 3'
                                        event.addIndex++;
                                        if (event.addIndex < 2) event.goto(1);
                                        'step 4'
                                        player.removeSkill('th_dunshi_effect');
                                    }
                                }
                            },
                            getSkill: function (config, target) {
                                var map = {};
                                if (config) {
                                    var str = '仁义礼智信';
                                    var list = [],
                                        list2 = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled(i) || lib.filter.characterDisabled2(i)) continue;
                                        list.push(i);
                                    }
                                    for (var i of list) {
                                        for (var j of lib.character[i][3]) {
                                            var info = get.translation(j);
                                            for (var k of str) {
                                                if (info.indexOf(k) != -1) {
                                                    var bool1 = true;
                                                    if (target) {
                                                        var skills = target.getSkills();
                                                        if (target.disabledSkills) {
                                                            for (var dis in target.disabledSkills) {
                                                                skills.push(dis);
                                                            }
                                                        }
                                                        for (var ski of skills) {
                                                            if (get.translation(ski) == get.translation(j)) bool1 = false;
                                                        }

                                                    }
                                                    if (!map[info] && bool1) map[info] = [];
                                                    if (bool1) map[info].push(j);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    var skillList = ['renzheng', 'th_tongli', 'renxin', 'rerende', 'yicong', 'new_yijue', 'tianyi', 'juyi', 'reyixiang', 'lixia', 'cslilu', 'zhiyu', 'xinfu_qianxin', 'zhichi', 'rejizhi', 'yishe', 'nzry_yili'];
                                    for (var i of skillList) {
                                        var info = get.translation(i);
                                        var bool1 = true;
                                        if (target) {
                                            var skills = target.getSkills();
                                            if (target.disabledSkills) {
                                                for (var dis in target.disabledSkills) {
                                                    skills.push(dis);
                                                }
                                            }

                                            for (var ski of skills) {
                                                if (get.translation(ski) == get.translation(i)) bool1 = false;
                                            }
                                        }
                                        if (!map[info] && bool1) map[info] = [];
                                        if (bool1) map[info].push(i);
                                    }
                                }
                                return map;
                            },
                            contentx: function () {
                                'step 0'
                                var skills = lib.skill.th_dunshi.getSkill(lib.config['extension_Thunder_guanning'], _status.currentPhase);
                                if (!Object.keys(skills).length) {
                                    event.finish();
                                    return;
                                } else {
                                    while (Object.keys(skills).length > Math.min(3, Object.keys(skills).length)) {
                                        var a = Math.floor(Math.random() * Object.keys(skills).length);
                                        delete skills[Object.keys(skills)[a]];
                                    }
                                }
                                var list = [],
                                    list1 = Object.keys(skills),
                                    list2 = [],
                                    a = [0, 0, 0, 0, 0, 0];
                                for (var i in skills) {
                                    list2.push(get.skillInfoTranslation(skills[i][0], player));
                                }
                                for (var i = 0; i < list1.length; i++) {
                                    list[i] = '【' + list1[i];
                                    if (skills[list1[i]].length > 1) list[i] += '1'
                                    list[i] += '】' + list2[i];
                                    if (skills[list1[i]].length > 1) list[i] += '　　<span class="yellowtext">(点击切换)</span>';
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    var list = [];
                                    for (var i in skills) {
                                        list.push(skills[i][0]);
                                    }
                                    var aiSkill = () => list.slice().sort((a, b) => {
                                        return get.sgn(get.attitude(player, _status.currentPhase)) * (lib.skill.th_dunshi.getSkillRank(_status.currentPhase, b) - lib.skill.th_dunshi.getSkillRank(_status.currentPhase, a));
                                    })[0];
                                    event._result = {
                                        bool: true,
                                        skill: aiSkill(),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                event.videoId = lib.status.videoId++;
                                var chooseButton = function (player, id) {
                                    var choiceList = ui.create.dialog('遁世：请选择令' + get.translation(_status.currentPhase) + '获得的技能：');
                                    choiceList.videoId = id;
                                    choiceList.classList.add('fullwidth');
                                    event.dialog = choiceList;
                                    event._result.skill = skills[list1[0]][0];
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        if (i == 0) next.firstChild.classList.add('bluebg');
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var nodes = this.parentNode.parentNode.childNodes;
                                            for (var node of nodes) {
                                                if (node.childNodes[0] && node.childNodes[0].classList && node.childNodes[0].classList.contains('bluebg')) node.childNodes[0].classList.remove('bluebg');
                                            }
                                            this.classList.add('bluebg');
                                            var link = this.link;
                                            a[link]++;
                                            var num = a[link] % skills[list1[link]].length;
                                            if (this.innerHTML.indexOf('点击切换') != -1) {
                                                list2[link] = get.skillInfoTranslation(skills[list1[link]][num], player);
                                                this.innerHTML = this.innerHTML.replace(/【\S+　　/, '【' + list1[link] + (num + 1) + '】' + list2[link] + '　　');
                                            }
                                            event._result.skill = skills[list1[link]][num];
                                        });
                                        next.firstChild.link = i;
                                        for (var j in lib.element.button) {
                                            next[j] = lib.element.button[j];
                                        }
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    event.switchToAuto = function () {
                                        _status.imchoosing = false;
                                        var list = [];
                                        for (var i in skills) {
                                            list.push(skills[i][0]);
                                        }
                                        var aiSkill = () => list.slice().sort((a, b) => {
                                            return get.sgn(get.attitude(player, _status.currentPhase)) * (lib.skill.th_dunshi.getSkillRank(_status.currentPhase, b) - lib.skill.th_dunshi.getSkillRank(_status.currentPhase, a));
                                        })[0];
                                        event._result = {
                                            bool: true,
                                            skill: aiSkill(),
                                        };
                                        if (event.dialog) event.dialog.close();
                                        if (event.control) event.control.close();
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        var result = event._result;
                                        result.bool = true;
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(player, event.videoId);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.player, event.videoId);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                'step 1'
                                player.line(_status.currentPhase, 'green');
                                _status.currentPhase.addSkillLog(result.skill);
                            }
                        },
                        th_shiyanskill: {
                            trigger: { global: 'addSkill' },
                            direct: true,
                            content: function () {
                                console.log(111)
                            }
                        },
                        th_piaoping: {
                            trigger: { player: 'useCard1' },
                            forced: true,
                            audio: "ext:Thunder/audio/skill:2",
                            zhuanhuanji: true,
                            marktext: '☯',
                            mark: true,
                            intro: {
                                content: function (storage, player) {
                                    if (!player.storage.th_piaoping_count) player.storage.th_piaoping_count = 0;
                                    var num = Math.min(player.storage.th_piaoping_count + 1, player.hp);
                                    return '当你使用一张牌时，' + (storage ? '你弃置' + num + '张牌。' : '你摸' + num + '张牌。');
                                },
                            },
                            filter: function (event, player) {
                                return !player.hasSkill('th_piaoping_block');
                            },
                            content: function () {
                                if (!player.storage.th_piaoping_count) player.storage.th_piaoping_count = 0;
                                player.storage.th_piaoping_count++;
                                var num = Math.min(player.storage.th_piaoping_count, player.hp);
                                if (player.storage.th_piaoping) player.chooseToDiscard('he', num, true);
                                else player.draw(num);
                                player.changeZhuanhuanji('th_piaoping');
                            },
                            group: 'th_piaoping_end',
                            subSkill: {
                                end: {
                                    trigger: { global: 'phaseEnd' },
                                    forced: true,
                                    direct: true,
                                    lastDo: true,
                                    content: function () {
                                        player.storage.th_piaoping_count = 0;
                                    }
                                },
                                block: {}
                            }
                        },
                        th_tuoxian: {
                            trigger: { player: 'loseAfter' },
                            init: function (player) {
                                player.storage.th_tuoxian = 0;
                                player.storage.th_tuoxian_used = 0
                            },
                            filter: function (event, player) {
                                if (player.storage.th_tuoxian_used >= player.storage.th_tuoxian) return false;
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (get.position(event.cards2[i]) == 'd') {
                                        return event.getParent(3).name == 'th_piaoping';
                                    }
                                }
                                return false;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            direct: true,
                            content: function () {
                                "step 0"
                                if (trigger.delay == false) game.delay();
                                event.cards = [];
                                event.logged = false;
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    if (get.position(trigger.cards2[i], true) == 'd') {
                                        event.cards.push(trigger.cards2[i]);
                                    }
                                }
                                "step 1"
                                if (event.cards.length) {
                                    player.chooseTarget(get.prompt('th_tuoxian'), lib.filter.notMe).set('prompt2', '将【漂萍】弃置的牌交给一名其他角色：').ai = (target) => {
                                        if (get.attitude(player, target) < 0) return 0;
                                        if (get.attitude(player, target) > 0) {
                                            for (var i of event.cards) {
                                                if ((i.name == 'tao' || i.name == 'jiu') && target.isDamaged()) return target.getDamagedHp() + 12;
                                            }
                                            return 10 - target.needsToDiscard();
                                        }
                                        return 0.1
                                    }
                                } else event.finish();
                                "step 2"
                                if (result.bool) {
                                    player.storage.th_tuoxian_used++;
                                    event.target = result.targets[0]
                                    player.logSkill('th_tuoxian', event.target);
                                    result.targets[0].gain(event.cards, 'gain2');
                                    result.targets[0].chooseControl().set('choiceList', ['弃置自己区域内的' + event.cards.length + '张牌', '令' + get.translation(player) + '本回合【漂萍】技能失效']).set('ai', function () {
                                        if (get.attitude(result.targets[0], player) <= 0) return 1;
                                        return 0;
                                    });
                                } else event.finish();
                                'step 3'
                                if (result.index == 0) event.target.chooseToDiscard('hej', event.cards.length, true);
                                else player.addTempSkill('th_piaoping_block');
                            },
                            mark: true,
                            intro: {
                                content: function (storage, player) {
                                    return '本局游戏共可使用' + player.storage.th_tuoxian + '次<br>已使用' + player.storage.th_tuoxian_used + '次';
                                },
                                onunmark: true,
                                markcount: function (storage, player) { return player.storage.th_tuoxian - player.storage.th_tuoxian_used }
                            }
                        },
                        th_zhuili: {
                            trigger: { target: 'useCardToTargeted', },
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                return get.color(event.card) == 'black' && !player.hasSkill('th_zhuili_block');
                            },
                            forced: true,
                            audio: "ext:Thunder/audio/skill:2",
                            content: function () {
                                if (player.storage.th_piaoping) player.changeZhuanhuanji('th_piaoping');
                                else {
                                    player.storage.th_tuoxian++;
                                    player.addTempSkill('th_zhuili_block');
                                }
                            },
                            subSkill: {
                                block: {}
                            }
                        },
                        th_fuping: {
                            locked: false,
                            mod: {
                                targetInRange: function (card, player, target, now) {
                                    if (player.countDisabled() >= 5) return true;
                                },
                            },
                            trigger: { global: 'useCardAfter' },
                            init: function (player) { player.storage.th_fuping = [] },
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                if (!event.targets || event.targets && !event.targets.contains(player)) return false;
                                if (!event.targets || !event.targets.contains(player) || player.countDisabled() >= 5 || player.storage.th_fuping.contains(event.card.name)) return false;
                                return true;
                            },
                            direct: true,
                            audio: "ext:Thunder/audio/skill:2",
                            intro: {
                                content: '已记录牌名：$',
                                onunmark: true,
                            },
                            content: function () {
                                'step 0'
                                var list = [];
                                for (var i = 1; i < 6; i++) {
                                    if (!player.isDisabled(i)) list.push('equip' + i);
                                }
                                list.push('cancel2');
                                player.chooseControl(list).set('prompt', '是否废除一个装备栏并记录【' + get.translation(trigger.card.name) + '】').ai = () => {
                                    if (trigger.card.name != 'tiesuo') {
                                        for (var i = 5; i > 0; i--) {
                                            if (player.isEmpty(i)) return ('equip' + i);
                                        }
                                    }
                                    return 'cancel2';
                                };
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.logSkill('th_fuping');
                                    player.disableEquip(result.control);
                                    player.storage.th_fuping.add(trigger.card.name);
                                    player.markAuto('th_fuping', [trigger.card.name]);
                                }
                            },
                            group: ['th_fuping_use', 'th_fuping_end'],
                            subSkill: {
                                use: {
                                    init: function (player) { player.storage.th_fuping_used = [] },
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filter: function (event, player) {
                                        if (player.countCards('hes', function (card) { return get.type(card) != 'basic' }) == 0) return false;
                                        var list = player.storage.th_fuping.slice(0).removeArray(player.storage.th_fuping_used);
                                        for (var i of lib.inpile) {
                                            if (list.contains(i) && event.filterCard({ name: i, }, player, event)) return true;
                                        }
                                        return false;
                                    },
                                    hiddenCard: function (player, name) {
                                        var list = player.storage.th_fuping.slice(0).removeArray(player.storage.th_fuping_used);
                                        if (list.length && list.contains(name)) return true;
                                        return false;
                                    },
                                    audio: 'th_fuping',
                                    chooseButton: {
                                        dialog: function (event, player) {
                                            var cards = player.getCards('hes', function (card) { return get.type(card) != 'basic' });
                                            var listx = player.storage.th_fuping.slice(0).removeArray(player.storage.th_fuping_used);
                                            var list = [];
                                            for (var i of lib.inpile) {
                                                if (listx.contains(i) && event.filterCard({ name: i, }, player, event)) {
                                                    list.push(['', '', i]);
                                                }
                                            }
                                            return ui.create.dialog('浮萍', [list, 'vcard'], 'hidden');
                                        },
                                        check: function (button) {
                                            var player = _status.event.player;
                                            if (_status.event.getParent().type != 'phase') return 1;
                                            return player.getUseValue({ name: button.link[2] }) + 1;
                                        },
                                        backup: function (links, player) {
                                            return {
                                                audio: 'th_fuping',
                                                popname: true,
                                                filterCard: function (card) { return get.type(card) != 'basic' },
                                                selectCard: 1,
                                                check: function (card) {
                                                    return 6 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: {
                                                    name: links[0][2],
                                                },
                                                onuse: function (links, player) {
                                                    player.storage.th_fuping_used.add(links.card.name);
                                                },
                                            }
                                        },
                                        prompt: function (links, player) {
                                            return '将1张非基本牌当做' + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        respondSha: true,
                                        save: true,
                                        skillTagFilter: function (player, tag, arg) {
                                            var list = player.storage.th_fuping.slice(0).removeArray(player.storage.th_fuping_used);
                                            if (!list || !list.length) return false;
                                            switch (tag) {
                                                case 'respondSha':
                                                    return (_status.event.type != 'phase' || (player == game.me || player.isUnderControl() || player.isOnline())) && list.contains('sha');
                                                case 'save':
                                                    return list.contains('tao');
                                            }
                                        },
                                        order: 8,
                                        result: {
                                            player: function (player) {
                                                if (_status.event.type == 'dying') {
                                                    return get.attitude(player, _status.event.dying);
                                                }
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                end: {
                                    trigger: { global: 'phaseAfter' },
                                    forced: true,
                                    direct: true,
                                    lastDo: true,
                                    filter: function (event, player) { return player.storage.th_fuping_used },
                                    content: function () {
                                        player.storage.th_fuping_used = [];
                                    }
                                },
                            }
                        },
                        th_weilie: {
                            enable: 'phaseUse',
                            init: function (player) {
                                player.storage.th_weilie = 1;
                                player.markSkill('th_weilie')
                            },
                            filter: function (event, player) {
                                return player.storage.th_weilie > 0;
                            },
                            filterTarget: function (card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            filterCard: true,
                            position: 'hes',
                            audio: "ext:Thunder/audio/skill:2",
                            check: function (card) {
                                return 6 - get.value(card)
                            },
                            content: function () {
                                'step 0'
                                player.storage.th_weilie--;
                                target.recover();
                                'step 1'
                                if (target.isDamaged()) target.draw();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: function (player, target) {
                                        if (target.hp / target.maxHp < 0.5) return 5;
                                        return Math.round(Math.random());
                                    }
                                },
                            },
                            intro: {
                                content: '还可使用#次',
                                markcount: 'storage',
                                onunmark: true,
                            },
                            group: 'th_weilie_add',
                            subSkill: {
                                add: {
                                    trigger: { player: 'th_fupingAfter' },
                                    filter: function (event, player) {
                                        return event._result.control && event._result.control != 'cancel2';
                                    },
                                    forced: true,
                                    content: function () { player.storage.th_weilie++ },
                                }
                            }
                        },
                        th_caiyi: {
                            trigger: { player: 'phaseJieshuBegin' },
                            zhuanhuanji: true,
                            init: function (player) {
                                player.storage.th_caiyiyang = [1, 1, 1, 2];
                                player.storage.th_caiyiyin = [1, 1, 1, 2]
                            },
                            marktext: '☯',
                            mark: true,
                            intro: {
                                content: function (storage, player) {
                                    return storage ? '当前为伤害型' : '当前为回复型';
                                },
                            },
                            filter: function (event, player) {
                                var str, num = 0;
                                if (player.storage.th_caiyi) str = 'th_caiyiyin';
                                else str = 'th_caiyiyang';
                                for (var i = 0; i < player.storage[str].length; i++) {
                                    if (player.storage[str][i] == 0) num++;
                                }
                                return num < 4;
                            },
                            direct: true,
                            audio: "ext:Thunder/audio/skill:2",
                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt('th_caiyi')).set('prompt2', player.storage.th_caiyi ? '当前为伤害型选项：' : '当前为回复型选项：').ai = (target) => {
                                    if (player.storage.th_caiyi) return -get.attitude(player, target) + target.countCards('he');
                                    else {
                                        if (!game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        })) return 0;
                                        return get.attitude(player, target) + target.getDamagedHp();
                                    }
                                }
                                'step 1'
                                if (result.bool) {
                                    var list = [],
                                        str;
                                    if (player.storage.th_caiyi) {
                                        str = 'th_caiyiyin';
                                        list = ['受到X点伤害', '弃X张牌', '翻面并横置', '随机执行一个已移除的阴选项'];
                                    } else {
                                        str = 'th_caiyiyang';
                                        list = ['回复X点体力', '摸X张牌', '复原武将牌', '随机执行一个已移除的阳选项'];
                                    }
                                    player.logSkill('th_caiyi', result.targets[0]);
                                    result.targets[0].caiyi(list, str, player);
                                    player.changeZhuanhuanji('th_caiyi');
                                }
                            }
                        },
                        th_guili: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseBegin' },
                            direct: true,
                            filter: function (event, player) {
                                return player.phaseNumber == 1 && !player.storage.th_guili;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            content: function () {
                                'step 0'
                                player.chooseTarget('请选择【归离】的目标', '其每轮第一个回合结束后，若其本回合未造成伤害，你执行一个额外回合。', lib.filter.notMe, true).set('ai', function (target) {
                                    return game.players.randomGet();
                                });
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.logSkill('th_guili', target);
                                    player.addSkill('th_guili_effect');
                                    player.storage.th_guili = target;
                                    player.markSkill('th_guili');
                                    game.delayx();
                                }
                            },
                            intro: { content: '已指定$为目标' },
                            subSkill: {
                                effect: {
                                    trigger: { global: 'phaseEnd' },
                                    filter: function (event, player) {
                                        if (event.player != player.storage.th_guili || player.hasSkill('th_guili_acted')) return false;
                                        return !event.player.getHistory('sourceDamage').length;
                                    },
                                    forced: true,
                                    content: function () {
                                        player.addTempSkill('th_guili_acted', 'roundStart');
                                        game.log(player, '执行一个额外的回合');
                                        player.insertPhase();
                                    }
                                },
                                acted: {}
                            }
                        },
                        th_tongli: {
                            trigger: { player: 'useCardToTargeted' },
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                if (!player.isPhaseUsing()) return false;
                                return player.getSuitNum() == player.getHistory('useCard').length && event.targets.length == event.parent.triggeredTargets4.length && !event.getParent().th_tongliNum && !event.getParent().th_tongli2;
                            },
                            prompt: function () {
                                var player = _status.event.player, card = _status.event.getParent('useCard').card || '';
                                return '是否令' + get.translation(card) + '额外执行' + get.cnNumber(player.getSuitNum()) + '次：';
                            },
                            content: function () {
                                trigger.getParent().set('th_tongliNum', player.getSuitNum());
                                if (get.type(trigger.card) != 'equip' && get.type(trigger.card) != 'delay') player.addSkill('th_tongli2');
                            },
                            mod: {
                                aiOrder: function (player, card, num) {
                                    var list = [], cards = player.getCards('h', function (cardx) { return cardx != card });
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!list.contains(get.suit(cards[i]))) list.push(get.suit(cards[i]));
                                    }
                                    if (player.getHistory('useCard').length + 1 == list.length) return num + 10;
                                },
                            }
                        },
                        th_tongli2: {
                            trigger: { player: 'useCardEnd' },
                            filter: function (event, player) { return event.th_tongliNum },
                            forced: true,
                            direct: true,
                            charlotte: true,
                            content: function () {
                                'step 0'
                                event.num = trigger.th_tongliNum;
                                event.card = { name: get.name(trigger.card, player), nature: get.nature(trigger.card), isCard: true };
                                for (var i of trigger.targets) {
                                    if (!lib.filter.targetEnabled(event.card, player, i) || !i.isIn()) event.finish();
                                }
                                'step 1'
                                var next = player.useCard(event.card, trigger.targets, false);
                                next.set('addCount', false);
                                next.set('th_tongli2', true);
                                player.actionHistory[player.actionHistory.length - 1].useCard.pop();
                                'step 2'
                                event.num--;
                                var bool1 = true;
                                for (var i of trigger.targets) {
                                    if (!lib.filter.targetEnabled(event.card, player, i) || !i.isIn()) bool1 = false;
                                }
                                if (event.num > 0 && player.isIn() && bool1) event.goto(1);
                                'step 3'
                                player.removeSkill('th_tongli2');
                            }
                        },
                        th_shezang: {
                            trigger: { global: 'dying' },
                            forceDie: true,
                            round: 1,
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                return event.player == player || player == _status.currentPhase;
                            },
                            content: function () {
                                var suits = lib.suit.slice(0);
                                var cards = [];
                                for (var i of suits) {
                                    var card = get.cardPile2(function (card) {
                                        return get.suit(card, false) == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            }
                        },

                        th_jianying: {
                            audio: "ext:Thunder/audio/skill:2",
                            locked: false,
                            mod: {
                                aiOrder: function (player, card, num) {
                                    if (typeof card == 'object') {
                                        if (player.storage.th_jianying_use && (get.suit(player.storage.th_jianying_use) && get.suit(player.storage.th_jianying_use) == get.suit(card) || player.storage.th_jianying_use.number && player.storage.th_jianying_use.number == get.number(card))) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            trigger: { player: 'useCard1' },
                            frequent: true,
                            filter: function (event, player) {
                                if (!player.storage.th_jianying_use) return false;
                                return get.suit(player.storage.th_jianying_use) != 'none' && get.suit(player.storage.th_jianying_use) == get.suit(event.card) ||
                                    typeof get.number(player.storage.th_jianying_use, false) == 'number' && get.number(player.storage.th_jianying_use, false) == get.number(event.card);
                            },
                            content: function () {
                                player.draw();
                            },
                            group: 'th_jianying_use',
                            subSkill: {
                                use: {
                                    trigger: { player: 'useCard2' },
                                    forced: true,
                                    mark: true,
                                    direct: true,
                                    intro: {
                                        content: function (storage, player) {
                                            return '上一张使用的是：' + get.translation(player.storage.th_jianying_use);
                                        },
                                        onunmark: true,
                                    },
                                    content: function () {
                                        var suit = get.suit(trigger.card, player);
                                        if (suit == 'none') suit = '-';
                                        var number = get.number(trigger.card, player);
                                        if (number == undefined) number = '-';
                                        else {
                                            if ([1, 11, 12, 13].contains(number)) {
                                                number = { '1': 'A', '11': 'J', '12': 'Q', '13': 'K' }[number];
                                            }
                                        }
                                        if (suit == '-' && number == '-' && player.storage.th_jianying_use) delete player.storage.th_jianying_use;
                                        else {
                                            player.storage.th_jianying_use = trigger.card;
                                            player.markSkill('th_jianying_use');
                                            player.marks.th_jianying_use.textContent = get.translation(suit) + number;
                                            if (game.thunderHasExt('十周年')) {
                                                player.marks.th_jianying_use.style.color = 'white';
                                                player.marks.th_jianying_use.style.fontDisplay = 'swap';
                                                player.marks.th_jianying_use.style.textShadow = '-0.5px 0px 1.7px #f5e5e5, 0.5px -0.5px 1.7px #f5e5e5, 0px 0.5px 1.7px #f5e5e5, 0px 0.5px 1.7px #f5e5e5,'
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        th_shibei: {
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            audio: "ext:Thunder/audio/skill:2",
                            check: function (event, player) {
                                return player.getHistory('damage', function (evt) {
                                    return evt != event
                                }).length == 0;
                            },
                            content: function () {
                                var num = player.getHistory('damage', function (evt) {
                                    return evt != trigger
                                }).length;
                                if (num == 1) {
                                    player.loseHp();
                                } else if (num == 0) {
                                    player.recover();
                                }
                            },
                            subSkill: {
                                damaged: {},
                                ai: {}
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                                effect: {
                                    target: function (card, player, target) {
                                        if (player.hasSkillTag('jueqing')) return;
                                        if (target.hujia) return;
                                        if (player._th_shibei_tmp) return;
                                        if (target.hasSkill('th_shibei_ai')) return;
                                        if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                                        if (get.tag(card, 'damage')) {
                                            if (target.getHistory('damage').length > 0) {
                                                return [1, -2];
                                            } else {
                                                if (get.attitude(player, target) > 0 && target.hp > 1) {
                                                    return 0;
                                                }
                                                if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                                    if (card.name == 'sha') return;
                                                    var sha = false;
                                                    player._th_shibei_tmp = true;
                                                    var num = player.countCards('h', function (card) {
                                                        if (card.name == 'sha') {
                                                            if (sha) {
                                                                return false;
                                                            } else {
                                                                sha = true;
                                                            }
                                                        }
                                                        return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                                    });
                                                    delete player._th_shibei_tmp;
                                                    if (player.hasSkillTag('damage')) {
                                                        num++;
                                                    }
                                                    if (num < 2) {
                                                        var enemies = player.getEnemies();
                                                        if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
                                                            return;
                                                        }
                                                        return 0;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        th_xingluan: {
                            audio: "ext:Thunder/audio/skill:2",
                            usable: 1,
                            trigger: { player: 'useCardAfter' },
                            filter: function (event, player) {
                                return event.targets && event.targets.length == 1 && player.isPhaseUsing();
                            },
                            frequent: true,
                            content: function () {
                                var card = get.cardPile2(function (card) {
                                    return get.number(card, player) == 6;
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                } else {
                                    player.draw(6);
                                }
                            },
                        },
                        th_reshuangren: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseUseBegin' },
                            direct: true,
                            preHidden: true,
                            content: function () {
                                'step 0'
                                var goon;
                                if (player.countCards('h', 'sha') == 0 || !game.hasPlayer(function (current) { return player.inRange(current) && get.effect(current, { name: 'sha' }, player, player) > 0 })) goon = true;
                                else if (player.needsToDiscard() > 1) {
                                    goon = player.hasCard(function (card) {
                                        return card.number > 10 && get.value(card) <= 5;
                                    });
                                } else {
                                    goon = player.hasCard(function (card) {
                                        return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
                                    });
                                }
                                player.chooseTarget(get.prompt2('th_reshuangren'), function (card, player, target) {
                                    return player.canCompare(target);
                                }).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (_status.event.goon && get.attitude(player, target) < 0) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    }
                                    return 0;
                                }).set('goon', goon).setHiddenSkill(event.name);
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.logSkill('th_reshuangren', target);
                                    player.chooseToCompare(target);
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    var targetx = event.target,
                                        targets = game.filterPlayer(function (current) { return player.canUse('sha', current, false) && current.group == targetx.group });
                                    if (targets.length > 1) {
                                        player.chooseTarget('选择对' + get.translation(target) + '（和/或）与' + get.translation(target) + '势力相同的另一名角色使用一张杀', true, function (card, player, target) {
                                            return targets.contains(target);
                                        }, [1, 2]).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                    } else {
                                        event._result = { bool: true, targets: [targetx] }
                                    }
                                } else {
                                    player.addTempSkill('th_reshuangren_block', 'phaseUseEnd');
                                    event.finish();
                                }
                                'step 3'
                                if (result.bool && result.targets && result.targets.length) {
                                    result.targets.sortBySeat();
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.useCard({ name: 'sha', isCard: true }, result.targets[i], false);
                                    }
                                }
                            },
                            subSkill: {
                                block: {
                                    mod: {
                                        cardEnabled: function (card, player) {
                                            if (card.name == 'sha') return false;
                                        },
                                    },
                                    mark: true,
                                    intro: { content: '不能使用【杀】' },
                                }
                            }
                        },

                        //刘巴
                        th_zhubi: {
                            trigger: { global: 'loseAfter' },
                            filter: function (event, player) {
                                if (event.type != 'discard' || !event.cards2 || !event.cards2.length) return false;
                                var list = [];
                                for (var i of event.cards2) {
                                    if (get.suit(i, player) == 'diamond') return true;
                                }
                                return false;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            check: function (event, player) {
                                if (_status.currentPhase.isPhaseUsing()) return get.attitude(player, _status.currentPhase) >= 0;
                                return get.attitude(player, _status.currentPhase.next) >= 0;
                            },
                            content: function () {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'wuzhong';
                                });
                                if (card) {
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.log(player, '将', '#y' + get.translation(card), '置于了牌堆顶');
                                }
                            }
                        },
                        th_liuzhuan: { //by cop
                            mod: {
                                targetEnabled: function (card, player, target) {
                                    if (player != target && player == _status.currentPhase && player.hasHistory('gain', evt => {
                                        if (evt.getParent('phaseDraw').player == player) return false;
                                        if (card.cards && card.cards.length && card.cards.filter(cardx => evt.cards.contains(cardx)).length == card.cards.length) return true;
                                        return false;
                                    })) return false;
                                },
                            },
                            trigger: { global: ['loseAfter', 'cardsDiscardAfter'] },
                            forced: true,
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                var owner = event.player || event.getParent().relatedEvent && event.getParent().relatedEvent.player;
                                if (!owner || owner == player || owner != _status.currentPhase) return false;
                                return owner.hasHistory('gain', evt => {
                                    if (evt.getParent('phaseDraw').player == owner) return false;
                                    for (var card of event.cards) {
                                        if (evt.cards.contains(card) && get.position(card, true) == 'd') return true;
                                    }
                                    return false;
                                });
                            },
                            content: function () {
                                var list = [],
                                    owner = trigger.player || trigger.getParent().relatedEvent.player;;
                                owner.getHistory('gain', evt => {
                                    if (evt.getParent('phaseDraw').player == owner) return false;
                                    list.addArray(trigger.cards.filter(card => evt.cards.contains(card) && get.position(card, true) == 'd'));
                                })
                                if (list.length) player.gain(list, 'gain2', 'log');
                            },
                        },

                        //诸葛尚
                        th_sangu: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { global: 'phaseUseBegin' },
                            filter: function (event, player) {
                                return event.player.countCards('h') <= event.player.maxHp;
                            },
                            check: function (event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            content: function () {
                                'step 0'
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = ui.cardPile.childNodes[i];
                                    if (card) cards.push(card);
                                    else break;
                                }
                                var str;
                                event.videoId = lib.status.videoId++;
                                if (player == game.me && !_status.auto) {
                                    if (cards.length) {
                                        str = '三顾：选择一张牌亮出';
                                    }
                                    else str = '三顾：牌堆无牌';
                                } else {
                                    str = '三顾';
                                }
                                game.broadcastAll(function (player, id, cards) {
                                    var dialog = ui.create.dialog(str, cards);
                                    dialog.videoId = id;
                                }, player, event.videoId, cards);
                                event.time = get.utc();
                                game.addVideo('delay', null, 2);
                                var next = player.chooseButton(true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) { return get.type(button.link) != 'equip' });
                                next.set('ai', function (button) {
                                    return get.value(button.link, trigger.player);
                                });
                                'step 1'
                                if (result.bool && result.links) {
                                    event.cards2 = result.links;
                                    player.showCards(event.cards2);
                                    game.addVideo('showCards', player, ['三顾', get.cardsInfo(event.cards2)]);
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                    game.delay(0, time);
                                }
                                'step 2'
                                game.broadcastAll('closeDialog', event.videoId);
                                trigger.player.addTempSkill('th_sangu_use');
                                lib.skill.th_sangu_use.viewAs = event.cards2[0];
                            },
                            subSkill: {
                                use: {
                                    position: 'h',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterCard: true,
                                    selectCard: -1,
                                    filter: function (event, player) {
                                        return lib.skill.th_sangu_use.viewAs;
                                    },
                                    filter: function (event, player) {
                                        var hs = player.getCards('h');
                                        if (!hs.length) return false;
                                        for (var i = 0; i < hs.length; i++) {
                                            var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) return false;
                                        }
                                        return true;
                                    },
                                    onremove: function (player) { delete lib.skill.th_sangu_use.viewAs },
                                    ai: { order: 0.1 },
                                }
                            }
                        },
                        th_yizu: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                target: 'useCardToPlayered',
                            },
                            forced: true,
                            usable: 1,
                            filter: function (event, player) {
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
                                return player == event.target && player.hp <= event.player.hp;
                            },
                            content: function () {
                                player.recover();
                            }
                        },

                        //新陆凯              by  萌新（转型中）
                        th_bushi: {
                            init: function (player) {
                                player.storage.th_bushi = ['spade', 'heart', 'club', 'diamond'];
                            },
                            mod: {
                                cardUsable: function (card, player) {
                                    if (!player.storage.th_bushi) return;
                                    if (get.suit(card) == player.storage.th_bushi[0]) return Infinity;
                                },
                            },
                            group: ['th_bushi_target', 'th_bushi_gain', 'th_bushi_fenpei'],
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: ['useCardAfter', 'respondAfter'] },
                            filter: function (event, player) {
                                if (!player.storage.th_bushi) return false;
                                return get.suit(event.card) == player.storage.th_bushi[1];
                            },
                            forced: true,
                            locked: false,
                            content: function () {
                                player.draw();
                            },
                            subSkill: {
                                target: {
                                    trigger: { target: 'useCardToTargeted' },
                                    filter: function (event, player) {
                                        if (!player.storage.th_bushi) return false;
                                        return player.countCards('he') && get.suit(event.card) == player.storage.th_bushi[2];
                                    },
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        player.chooseToDiscard('he', get.prompt('th_bushi'), '弃置一张牌并令' + get.translation(trigger.card) + '对你无效').set('ai', function (card) {
                                            if (_status.event.goon) return 10 - get.value(card);
                                            return 0;
                                        }).set('goon', get.effect(player, trigger.card, trigger.player, player) < 0).logSkill = 'th_bushi';
                                        'step 1'
                                        if (result.bool) trigger.getParent().excluded.add(player);
                                    },
                                },
                                gain: {
                                    audio: 'th_bushi',
                                    trigger: { player: 'phaseJieshuBegin' },
                                    filter: function (event, player) {
                                        if (!player.storage.th_bushi) return false;
                                        return true;
                                    },
                                    forced: true,
                                    locked: false,
                                    content: function () {
                                        var card = get.cardPile(function (card) {
                                            return get.suit(card) == player.storage.th_bushi[3];
                                        });
                                        if (card) player.gain(card, 'gain2');
                                    },
                                },
                                fenpei: {
                                    audio: 'th_bushi',
                                    trigger: { player: 'phaseZhunbeiBegin' },
                                    filter: function (event, player) {
                                        if (!player.storage.th_bushi) return false;
                                        return true;
                                    },
                                    forced: true,
                                    locked: false,
                                    content: function () {
                                        'step 0'
                                        event.list = [];
                                        event.list2 = [];
                                        for (var i of lib.suit) event.list.push(i);
                                        event.num = event.list.length;
                                        'step 1'
                                        player.chooseControl(event.list).set('prompt', '请分配第' + get.cnNumber(event.num - event.list.length + 1, true) + '种花色').set('prompt2', '使用此花色的牌无次数限制').set('ai', function () {
                                            return _status.event.list.randomGet();
                                        }).set('list', event.list);
                                        'step 2'
                                        player.popup(result.control);
                                        game.log(player, '使用' + get.translation(result.control) + '牌无次数限制');
                                        event.list.remove(result.control);
                                        event.list2.push(result.control);
                                        player.chooseControl(event.list).set('prompt', '请分配第' + get.cnNumber(event.num - event.list.length + 1, true) + '种花色').set('prompt2', '使用或打出此花色的牌后摸一张牌').set('ai', function () {
                                            return _status.event.list.randomGet();
                                        }).set('list', event.list);
                                        'step 3'
                                        player.popup(result.control);
                                        game.log(player, '使用或打出' + get.translation(result.control) + '牌后摸一张牌');
                                        event.list.remove(result.control);
                                        event.list2.push(result.control);
                                        player.chooseControl(event.list).set('prompt', '请分配第' + get.cnNumber(event.num - event.list.length + 1, true) + '种花色').set('prompt2', '成为此花色的牌的目标时可弃置一张牌并令此牌无效').set('ai', function () {
                                            return _status.event.list.randomGet();
                                        }).set('list', event.list);
                                        'step 4'
                                        player.popup(result.control);
                                        game.log(player, '成为' + get.translation(result.control) + '牌的目标时可弃置一张牌并令此牌无效');
                                        event.list.remove(result.control);
                                        event.list2.push(result.control);
                                        player.chooseControl(event.list).set('prompt', '请分配第' + get.cnNumber(event.num - event.list.length + 1, true) + '种花色').set('prompt2', '可于结束阶段从牌堆或弃牌堆获得一张此花色的牌').set('ai', function () {
                                            return _status.event.list.randomGet();
                                        }).set('list', event.list);
                                        'step 5'
                                        player.popup(result.control);
                                        game.log(player, '于结束阶段从牌堆或弃牌堆获得一张' + get.translation(result.control) + '牌');
                                        event.list.remove(result.control);
                                        event.list2.push(result.control);
                                        'step 6'
                                        player.storage.th_bushi = event.list2;
                                    },
                                },
                            },
                        },
                        th_zhongzhuang: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { source: 'damageBegin2' },
                            filter: function (event, player) {
                                return event.card && event.card.name == 'sha' && player.getAttackRange() != 3;
                            },
                            forced: true,
                            content: function () {
                                var num = player.getAttackRange();
                                if (num > 3) trigger.num++;
                                else trigger.player.addTempSkill('th_zhongzhuang2', { player: ['damageAfter', 'damageCancelled', 'damageZero'] });
                            },
                        },
                        th_zhongzhuang2: {
                            charlotte: true,
                            trigger: { player: 'damageBegin4' },
                            filter: function (event, player) {
                                return event.num > 1;
                            },
                            direct: true,
                            lastDo: true,
                            content: function () {
                                trigger.num = 1;
                            },
                        },

                        // 怀旧陆凯                by cop
                        th_oldbushi: {
                            audio: "ext:Thunder/audio/skill:2",
                            init: function (player) {
                                if (!player.storage.th_oldbushi) player.storage.th_oldbushi = ['spade', 'diamond', 'club', 'heart'];
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            group: ['th_oldbushi_draw', 'th_oldbushi_gain'],
                            content: function () {
                                'step 0'
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        suits: lib.suit.slice().randomSort()
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };

                                var chooseButton = function (player) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    event._result.suits = [];
                                    var suits = ['spade', 'heart', 'club', 'diamond'];
                                    var prompt = ['你使用', '牌无次数限制；你使用或打出', '牌后，摸两张牌；当你成为', '牌的目标后/结束阶段，获得一张', '牌。'];
                                    var texts = [
                                        '花色A',
                                        '花色B',
                                        '花色C',
                                        '花色D',
                                    ]
                                    var updatePrompt = function () {
                                        var str = '';
                                        prompt.forEach((txt, ind) => {
                                            str += txt;
                                            if (ind < 4) str += event._result.suits[ind] ? get.translation(event._result.suits[ind]) : '[' + texts[ind] + ']的';
                                        })
                                        event.promptNode.innerHTML = str;
                                    }

                                    if (!event._result) event._result = {};
                                    event._result.damage = [];
                                    var dialog = ui.create.dialog('【卜筮】请分配花色', 'forcebutton', 'hidden');
                                    event.dialog = dialog;

                                    dialog.addText(texts[i]);
                                    event.promptNode = dialog.content.querySelector('.text');

                                    for (var i = 0; i < texts.length; i++) {
                                        dialog.addText(texts[i]);
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        table._index = i;
                                        for (var j = 0; j < suits.length; j++) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link = suits[j];
                                            table.appendChild(td);
                                            td.innerHTML = '' + get.translation(suits[j]) + '';
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                var index = this.parentNode._index;

                                                // if (event._result.suits.contains(link)) return;
                                                var current = this.parentNode.querySelector('.bluebg');
                                                if (current) {
                                                    current.classList.remove('bluebg');
                                                }
                                                var btnGroups = event.dialog.content.querySelectorAll('.add-setting');
                                                btnGroups.forEach(btns => {
                                                    var btn = btns.querySelector('.bluebg');
                                                    if (btn && btn.link == link) {
                                                        btn.classList.remove('bluebg');
                                                        delete event._result.suits[btns._index];
                                                    }
                                                })
                                                this.classList.add('bluebg');
                                                event._result.suits[index] = link;
                                                updatePrompt();
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                        // dialog.add('　　');
                                    }
                                    dialog.add('　　');
                                    updatePrompt();
                                    event.dialog.open();

                                    event.switchToAuto = function () {
                                        _status.imchoosing = false;
                                        event._result = {
                                            bool: true,
                                            suits: lib.suit.slice().randomSort()
                                        };
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        var result = event._result;
                                        if (!result.suits || !result.suits.length) return;
                                        if (result.suits.filter(i => i).length != 4) return;
                                        result.bool = true;
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(player, targets);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.player, event.players);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                'step 1'
                                var result = event.result || result;
                                player.storage.th_oldbushi = result.suits.slice();
                                game.log(player, '选择了', '#y' + get.translation(result.suits));
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (!player.storage.th_oldbushi) return;
                                    if (get.suit(card, player) == player.storage.th_oldbushi[0]) return Infinity;
                                },
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (!player.storage.th_oldbushi) return false;
                                        return get.suit(event.card) == player.storage.th_oldbushi[1];
                                    },
                                    content: function () {
                                        player.draw(2);
                                    }
                                },
                                gain: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                        target: 'useCardToTargeted'
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (!player.storage.th_oldbushi) return false;
                                        if (event.name == 'phaseJieshu') return true;
                                        return get.suit(event.card) == player.storage.th_oldbushi[2];
                                    },
                                    content: function () {
                                        var card = get.cardPile(card => get.suit(card, false) == player.storage.th_oldbushi[3]);
                                        if (card) player.gain(card, 'log', 'gain2');
                                        game.updateRoundNumber();
                                    }
                                }
                            }
                        },
                        th_oldzhongzhuang: {
                            trigger: {
                                source: ['damageBegin1', 'damageBegin2'],
                            },
                            forced: true,
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player, name) {
                                var range = player.getAttackRange();
                                if (name == 'damageBegin1') {
                                    return range < 3;
                                }
                                return event.num > 1 && range > 3;
                            },
                            content: function () {
                                if (event.triggername == 'damageBegin1') {
                                    trigger.num++;
                                } else {
                                    trigger.num = 1;
                                }
                            },
                            ai: {
                                effect: {
                                    target: function (card, player, target) {
                                        if (card.name == 'jiu' && target != _status.event.dying && target.getAttackRange() > 3) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },

                        //轲比能
                        th_koujing: {
                            mod: {
                                cardname: function (card) {
                                    if (card.getAttribute && card.getAttribute('data-thkoujing')) return 'sha';
                                },
                                cardUsable: function (card) {
                                    if (!card.cards || card.cards.length > 1) return;
                                    if (card.cards[0].getAttribute && card.cards[0].getAttribute('data-thkoujing')) return Infinity;
                                },
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            usable: 1,
                            filter: function (event, player) {
                                return player.countCards('h');
                            },
                            selectCard: [1, Infinity],
                            filterCard: true,
                            discard: false,
                            lose: false,
                            check: function (card) {
                                var player = _status.event.player;
                                if (card.name == 'tao') return 0;
                                if (card.name == 'sha') return 1;
                                return 6 - player.getUseValue(card);
                            },
                            content: function () {
                                'step 0'
                                player.showCards(cards);
                                for (var i = 0; i < cards.length; i++) {
                                    cards[i].setAttribute('data-thkoujing', true);
                                }
                                player.addTempSkill('th_koujing_use');
                            },
                            group: 'th_koujing_lose',
                            global: 'th_koujing_gain',
                            subSkill: {
                                use: {
                                    onremove: function (player) {
                                        for (var i = 0; i < player.getCards('h').length; i++) {
                                            if (player.getCards('h')[i].getAttribute('data-thkoujing')) player.getCards('h')[i].removeAttribute('data-thkoujing');
                                        }
                                    }
                                },
                                lose: {
                                    trigger: {
                                        player: ['loseAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter: function (event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                        if (event.name == 'lose') {
                                            for (var i = 0; i < event.cards2.length; i++) {
                                                if (event.cards2[i].getAttribute('data-thkoujing')) return true;
                                            }
                                            return false;
                                        }
                                        return player.hasHistory('lose', function (evt) {
                                            if (event != evt.getParent()) return false;
                                            for (var i = 0; i < evt.cards.length; i++) {
                                                if (evt.cards[i].getAttribute('data-thkoujing')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    forced: true,
                                    charlotte: true,
                                    onremove: true,
                                    direct: true,
                                    content: function () {
                                        if (trigger.name == 'lose') {
                                            for (var i = 0; i < trigger.cards2.length; i++) {
                                                if (trigger.cards2[i].getAttribute('data-thkoujing')) trigger.cards2[i].removeAttribute('data-thkoujing');
                                            }
                                        } else player.getHistory('lose', function (evt) {
                                            if (trigger != evt.getParent()) return false;
                                            for (var i = 0; i < evt.cards.length; i++) {
                                                if (evt.cards[i].getAttribute('data-thkoujing')) evt.cards[i].removeAttribute('data-thkoujing');
                                            }
                                        });
                                    }
                                },
                                gain: {
                                    trigger: { player: 'damageEnd' },
                                    filter: function (event, player) {
                                        if (player.hasSkill('th_koujing_use')) return false;
                                        if (player.countCards('h') == 0) return false;
                                        return event.source && event.source.isIn() && event.source.hasSkill('th_koujing_use') && event.source.countCards('h', function (card) { return card.getAttribute('data-thkoujing') });
                                    },
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        event.cards = trigger.source.getCards('h', function (card) { return card.getAttribute('data-thkoujing') });
                                        player.chooseBool('是否将所有手牌与寇旌明制的牌对换').ai = () => {
                                            if (event.cards.length < player.countCards('h') && event.cards.length == 1) return false;
                                            if (player.countCards('h', { name: ['tao', 'jiu'] }) > 0) return false;
                                            return true;
                                        }
                                        'step 1'
                                        if (result.bool) {
                                            game.cardsGotoOrdering(event.cards);
                                            trigger.source.gain(player.getCards('h'), 'gani2');
                                            player.gain(event.cards, 'gain2');
                                            game.updateRoundNumber();
                                        }
                                    }
                                },
                            },
                            ai: {
                                order: 10,
                                result: { player: 1, }
                            }
                        },

                        //李婉
                        th_liandui: {
                            trigger: { global: 'useCard1' },
                            filter: function (event, player) {
                                if (player.storage.th_liandui) return player.storage.th_liandui.isIn();
                                return true;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            direct: true,
                            content: function () {
                                'step 0'
                                if (!player.storage.th_liandui) event.goto(3);
                                if (trigger.player != player && player.storage.th_liandui != player || trigger.player == player && player.storage.th_liandui == player) event.goto(3);
                                'step 1'
                                trigger.player.chooseBool('是否令' + get.translation(player.storage.th_liandui) + '摸两张牌').set('ai', function () { return get.attitude(trigger.player, player.storage.th_liandui) > 0; })
                                'step 2'
                                if (result.bool) {
                                    trigger.player.logSkill('th_liandui', player.storage.th_liandui);
                                    player.storage.th_liandui.draw(2);
                                }
                                'step 3'
                                player.storage.th_liandui = trigger.player;
                            }
                        },
                        th_biejun: {
                            global: 'th_biejun2',
                            audio: 'th_biejun2',
                        },
                        th_biejun2: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                return !player.hasSkill('th_biejun') && game.hasPlayer(function (current) { return current.hasSkill('th_biejun') });
                            },
                            filterTarget: function (card, player, target) {
                                return target.hasSkill('th_biejun');
                            },
                            check: function (card) {
                                var player = _status.event.player, target = game.filterPlayer(function (current) { return current.hasSkill('th_biejun') })[0];
                                if (get.attitude(player, target) > 0) return 6 - get.value(card);
                                return -get.value(card);
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            content: function () {
                                target.gain(cards, 'gain2');
                                target.addTempSkill('th_biejun2_effect');
                            },
                            subSkill: {
                                effect: {
                                    trigger: { player: 'damageBegin2' },
                                    filter: function (event, player) {
                                        return !player.hasSkill('th_biejun2_used');
                                    },
                                    audio: 'th_biejun',
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        player.chooseBool('别君：是否翻面并防止本次伤害？').ai = () => {
                                            if (player.isTurnedOver()) return true;
                                            if (player.hp - trigger.num <= 0) return true;
                                            return false;
                                        }
                                        'step 1'
                                        player.addTempSkill('th_biejun2_used');
                                        if (result.bool) {
                                            player.logSkill('th_biejun2');
                                            player.turnOver();
                                            trigger.cancel();
                                        }
                                    },
                                },
                                used: {},
                            },
                            ai: {
                                order: 3,
                                result: { player: 1 }
                            }
                        },
                        th_yinju: {
                            ai: {
                                effect: {
                                    target: function (card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            return [0, 5];
                                        }
                                    }
                                }
                            }
                        },

                        //冯方
                        th_diting: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { global: 'phaseUseBegin' },
                            filter: function (event, player) {
                                return player != event.player && event.player.countCards('h') > 0 && event.player.inRange(player);
                            },
                            content: function () {
                                'step 0'
                                var num = Math.min(trigger.player.countCards('h'), player.hp);
                                var cards = trigger.player.getCards('h').randomGets(num);
                                player.chooseButton(['谛听：选择一张' + get.translation(trigger.player) + '的牌', cards], true)
                                'step 1'
                                if (result.bool) {
                                    var card = result.links[0];
                                    player.storage.th_diting = [trigger.player, card];
                                    player.addTempSkill('th_diting_effect', 'phaseUseAfter');
                                    trigger.player.storage.th_diting = [player, card];
                                    trigger.player.addTempSkill('th_diting_use', 'phaseUseAfter');
                                }
                            },
                            subSkill: {
                                use: {
                                    trigger: { player: 'useCardToTargeted' },
                                    forced: true,
                                    charlotte: true,
                                    onremove: true,
                                    direct: true,
                                    filter: function (event, player) {
                                        return event.cards && event.cards.length == 1 && player.storage.th_diting && event.cards[0] == player.storage.th_diting[1] && player.storage.th_diting[0].isIn()
                                    },
                                    content: function () {
                                        player.storage.th_diting[0].logSkill('th_diting');
                                        if (trigger.targets.contains(player.storage.th_diting[0])) trigger.getParent().excluded.add(player.storage.th_diting[0]);
                                        else player.storage.th_diting[0].draw(2);
                                    },
                                },
                                effect: {
                                    trigger: { global: 'phaseUseEnd' },
                                    forced: true,
                                    charlotte: true,
                                    onremove: true,
                                    logTarget: 'player',
                                    filter: function (event, player) { return player.storage.th_diting && player.storage.th_diting[0] == event.player && event.player.getCards('h').contains(player.storage.th_diting[1]) },
                                    content: function () {
                                        player.gain(player.storage.th_diting[1], trigger.player, 'gain2');
                                    },
                                },
                            },
                        },
                        th_bihuo: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            direct: true,
                            filter: function (event, player) {
                                if (event.source && event.source == player) return event.player && event.player.isIn() && event.player != player;
                                return event.source && event.source != player;
                            },
                            content: function () {
                                'step 0'
                                var str = '+1：';
                                if (trigger.source == player) str = '-1：';
                                player.chooseTarget(get.prompt('th_bihuo')).set('prompt2', '另一名角色下回合摸牌阶段摸牌数' + str).ai = (target) => {
                                    if (target.hasJudge('lebu') || target.hasJudge('bingliang')) return 0;
                                    if (lib.skill.th_baoshu.skipPhaseDraw(target)) return 0;
                                    if (target.storage.th_bihuo_draw && target.storage.th_bihuo_draw <= -2) return 0;
                                    if (trigger.source == player) return -get.attitude(player, target);
                                    return get.attitude(player, target);
                                }
                                'step 1'
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'thunder');
                                    if (!target.storage.th_bihuo_draw) target.storage.th_bihuo_draw = 0;
                                    if (trigger.source != player) target.storage.th_bihuo_draw++;
                                    else target.storage.th_bihuo_draw--;
                                    target.addTempSkill('th_bihuo_draw', { player: 'phaseAfter' });
                                    target.markSkill('th_bihuo_draw');
                                }
                            },
                            subSkill: {
                                draw: {
                                    charlotte: true,
                                    onremove: true,
                                    intro: {
                                        content: function (storage) {
                                            return '额定摸牌数' + (storage >= 0 ? '+' : '') + storage;
                                        },
                                    },
                                    trigger: { player: ['phaseDrawBegin2', 'phaseDrawSkipped', 'phaseDrawCancelled'] },
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.storage.th_bihuo_draw && !event.numFixed;
                                    },
                                    content: function () {
                                        trigger.num += player.storage.th_bihuo_draw;
                                        delete player.storage.th_bihuo_draw;
                                    },
                                },
                            }
                        },

                        //十周年王昶
                        th_kaiji: {
                            enable: 'phaseUse',
                            audio: "ext:Thunder/audio/skill:2",
                            zhuanhuanji: true,
                            marktext: '☯',
                            usable: 1,
                            mark: true,
                            intro: {
                                content: function (storage, player) {
                                    var num = player.maxHp;
                                    return storage ? '你可以弃置至多' + num + '张牌。（至少1张）' : '你可以摸' + num + '张牌。';
                                },
                            },
                            filter: function (event, player) {
                                if (player.storage.th_kaiji) return player.countCards('he');
                                return true;
                            },
                            content: function () {
                                if (!player.storage.th_kaiji) player.draw(player.maxHp);
                                else player.chooseToDiscard('he', [1, player.maxHp], true).set('ai', function (card) {
                                    var num = game.filterPlayer(function (current) { return get.effect(current, { name: 'sha', isCard: true }, player, player) > 0 });
                                    return 6 - ui.selected.cards.length - get.value(card);
                                });
                                player.changeZhuanhuanji('th_kaiji');
                            },
                            ai: {
                                order: function () {
                                    var player = _status.event.player;
                                    if (player.storage.th_kaiji) return 1;
                                    return 10;
                                },
                                result: { player: 1 }
                            }
                        },

                        th_pingxi: {
                            trigger: { player: 'phaseJieshuBegin' },
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) { return player.storage.th_pingxi_count && player.storage.th_pingxi_count > 0; },
                            direct: true,
                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt('th_pingxi'), lib.filter.notMe, [1, player.storage.th_pingxi_count]).set('prompt2', '选择至多' + get.cnNumber(player.storage.th_pingxi_count) + '名角色，弃置其1张牌并视为对其使用1张【杀】：').ai = (target) => { return -get.attitude(player, target) }
                                'step 1'
                                if (result.bool) {
                                    event.targets = result.targets.sortBySeat();
                                    event.targets2 = event.targets.slice(0);
                                    player.line(targets, 'fire');
                                    player.logSkill('th_pingxi', event.targets);
                                } else event.finish();
                                'step 2'
                                event.target = event.targets.shift();
                                if (event.target.isIn() && event.target.countCards('he')) player.discardPlayerCard(event.target, 'he');
                                if (event.targets.length) event.redo();
                                'step 3'
                                event.target = event.targets2.shift();
                                if (event.target.isIn()) player.useCard({ name: 'sha', isCard: true }, event.target, false);
                                if (event.targets2.length) event.redo();
                            },
                            group: 'th_pingxi_count',
                            subSkill: {
                                count: {
                                    trigger: { global: 'loseAfter' },
                                    forced: true,
                                    charlotte: true,
                                    direct: true,
                                    filter: function (event, player) {
                                        if (event.type != 'discard' || !event.cards2 || !event.cards2.length || player != _status.currentPhase) return false;
                                        return true;
                                    },
                                    intro: {
                                        content: function (storage, player) {
                                            if (!player.storage.th_pingxi_count) player.storage.th_pingxi_count = 0;
                                            return '本回合因弃置进入弃牌堆的牌数：' + player.storage.th_pingxi_count;
                                        }
                                    },
                                    content: function () {
                                        if (!player.storage.th_pingxi_count) player.storage.th_pingxi_count = 0;
                                        player.storage.th_pingxi_count += trigger.cards2.length;
                                        player.markSkill('th_pingxi_count');
                                        player.addTempSkill('th_pingxi_clear', 'phaseAfter');
                                    }
                                },
                                clear: {
                                    onremove: function (player) {
                                        delete player.storage.th_pingxi_count;
                                        player.unmarkSkill('th_pingxi_count');
                                    }
                                }
                            }
                        },

                        //界马忠
                        th_refuman: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            filterTarget: function (card, player, target) {
                                if (target == player) return false;
                                var stat = player.getStat('skill').th_refuman_targets;
                                return !stat || !stat.contains(target);
                            },
                            filter: function (event, player) {
                                return player.countCards('he') > 0 && game.hasPlayer((current) => lib.skill.th_refuman.filterTarget(null, player, current));
                            },
                            filterCard: true,
                            position: 'he',
                            delay: false,
                            content: function () {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                }, 'discardPile');
                                if (card) target.gain(card, 'gain2').gaintag.add('th_refuman');
                                target.addSkill('th_refuman2');
                                player.addSkill('th_refuman_draw');
                                var stat = player.getStat('skill');
                                if (!stat.th_refuman_targets) stat.th_refuman_targets = [];
                                stat.th_refuman_targets.push(target);
                            },
                            check: function (card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: function (player, target) {
                                        if (!target.hasSha()) return 1.2;
                                        return 1;
                                    }
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: { global: ['useCard', 'respond'] },
                                    forced: true,
                                    charlotte: true,
                                    filter: function (event, player) {
                                        return event.player.hasHistory('lose', function (evt) {
                                            if (evt.getParent() != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].contains('th_refuman')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    logTarget: 'player',
                                    content: function () {
                                        trigger.player.draw();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        th_refuman2: {
                            mod: {
                                aiOrder: function (player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('th_refuman')) return num + 1;
                                },
                                cardname: function (card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('th_refuman')) return 'sha';
                                },
                            },
                        },

                        //界刘谌
                        th_rezhanjue: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            filterCard: function (card) { return !card.hasGaintag('th_reqinwang') },
                            selectCard: -1,
                            position: 'h',
                            filter: function (event, player) {
                                if (player.getStat().skill.th_rezhanjue_draw && player.getStat().skill.th_rezhanjue_draw >= 3) return false;
                                var hs = player.getCards('h', function (card) { return !card.hasGaintag('th_reqinwang') });
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            viewAs: { name: 'juedou' },
                            group: ['th_rezhanjue4'],
                            ai: {
                                damage: true,
                                order: 1,
                                effect: {
                                    player: function (card, player, target) {
                                        if (_status.event.skill == 'th_rezhanjue') {
                                            if (player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return;
                                            if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                            if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                            if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                                        }
                                    }
                                }
                            }
                        },
                        th_rezhanjue2: {
                            audio: false,
                            trigger: { player: 'phaseBefore' },
                            silent: true,
                            content: function () {
                                player.storage.th_rezhanjue = 0;
                            }
                        },
                        th_rezhanjue3: {
                            audio: false,
                            trigger: { player: 'damageAfter', source: 'damageAfter' },
                            forced: true,
                            popup: false,
                            filter: function (event, player) {
                                return event.parent.skill == 'th_rezhanjue';
                            },
                            content: function () {
                                trigger.player.addTempSkill('th_rezhanjue5');
                            }
                        },
                        th_rezhanjue4: {
                            audio: false,
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            popup: false,
                            filter: function (event, player) {
                                return event.skill == 'th_rezhanjue';
                            },
                            content: function () {
                                "step 0"
                                var stat = player.getStat().skill;
                                if (!stat.th_rezhanjue_draw) stat.th_rezhanjue_draw = 0;
                                stat.th_rezhanjue_draw++;
                                player.draw('nodelay');
                                var list = game.filterPlayer(function (current) {
                                    if (current.getHistory('damage', function (evt) {
                                        return evt.card == trigger.card;
                                    }).length > 0) {
                                        if (current == player) {
                                            stat.th_rezhanjue_draw++;
                                        }
                                        return true;
                                    }
                                    return false;
                                });
                                if (list.length) {
                                    list.sortBySeat();
                                    game.asyncDraw(list);
                                }
                                "step 1"
                                game.delay();
                            }
                        },
                        th_rezhanjue5: {},
                        th_reqinwang: {
                            enable: 'phaseUse',
                            zhuSkill: true,
                            audio: "ext:Thunder/audio/skill:2",
                            usable: 1,
                            filter: function (event, player) {
                                return player.hasZhuSkill('th_reqinwang') && game.hasPlayer(function (current) { return current != player && current.group == 'shu' });
                            },
                            filterTarget: function (card, player, target) {
                                return target != player && target.group == 'shu';
                            },
                            selectTarget: -1,
                            content: function () {
                                'step 0'
                                if (!target.countCards('he', 'sha')) event._result = { bool: false };
                                else target.chooseCard('he', '是否交给' + get.translation(player) + '一张【杀】', function (card) { return card.name == 'sha' }).set('ai', function (card) {
                                    return get.attitude(target, player);
                                });
                                'step 1'
                                if (result.bool) {
                                    player.gain(result.cards, target, 'giveAuto').gaintag.add('th_reqinwang');
                                    player.chooseBool('是否令' + get.translation(target) + '摸1张牌？');
                                }
                                else event._result = { bool: false };
                                'step 2'
                                if (result.bool) {
                                    target.draw();
                                }
                            },
                            group: 'th_reqinwang_clear',
                            ai: {
                                order: 4,
                                result: { player: 1 }
                            },
                            subSkill: {
                                clear: {
                                    trigger: { player: 'phaseAfter' },
                                    direct: true,
                                    charlotte: true,
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.countCards('h', function (card) { return card.hasGaintag('th_reqinwang') }) > 0;
                                    },
                                    content: function () {
                                        player.removeGaintag('th_reqinwang');
                                    },
                                }
                            }
                        },

                        //卞喜
                        th_dunxi: {
                            trigger: { player: 'useCardAfter' },
                            filter: function (event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                if (!event.targets || event.targets && event.targets.filter(current => current != player && current.isIn()).length == 0) return false;
                                return true;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            direct: true,

                            content: function () {
                                'step 0'
                                player.chooseTarget(get.prompt('th_dunxi'), function (card, player, target) {
                                    return trigger.targets && trigger.targets.contains(target) && target != player;
                                }).set('prompt2', '是否为其中一个目标添加“钝”标记？').set('ai', function (target) {
                                    return get.attitude(player, target) <= 0;
                                });
                                'step 1'
                                if (result.bool) {
                                    player.logSkill('th_dunxi', result.targets[0]);
                                    result.targets[0].addMark('th_dunxi_mark');
                                }
                            },
                            global: 'th_dunxi2',
                            subSkill: {
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: '使用基本牌或锦囊牌指定单一目标时，移去一个“钝”，然后目标改为随机一名角色。若随机的目标与原本目标相同，则移去所有“钝”，失去1点体力并结束自己的出牌阶段。',
                                        onunmark: true,
                                    },
                                }
                            }
                        },
                        th_dunxi2: {
                            trigger: { player: 'useCard2' },
                            filter: function (event, player) {
                                if (!player.countMark('th_dunxi_mark')) return false;
                                if (!event.targets || event.targets.length != 1) return false;
                                return get.type(event.card) == 'basic' || get.type2(event.card) == 'trick';
                            },
                            audio: 'th_dunxi',
                            forced: true,
                            charlotte: true,
                            content: function () {
                                'step 0'
                                event.targets = game.filterPlayer(function (current) {
                                    return lib.filter.targetEnabled2(trigger.card, player, current);
                                });
                                event.target = event.targets.randomGet();
                                if (event.target == undefined || event.target == trigger.targets[0]) event.bool1 = true;
                                'step 1'
                                if (event.bool1) {
                                    player.removeMark('th_dunxi_mark', player.countMark('th_dunxi_mark'));
                                    player.loseHp();
                                } else {
                                    player.removeMark('th_dunxi_mark', 1);
                                    trigger.targets[0].line(event.target, 'fire');
                                    if (trigger.triggeredTargets2) trigger.triggeredTargets2.remove(trigger.targets[0]);
                                    trigger.targets.remove(trigger.targets[0]);
                                    trigger.targets.push(event.target);
                                    game.log(player, '触发了“钝”效果，', trigger.card, '的目标更改为', event.target);
                                }
                                if (!player.countMark('th_dunxi_mark')) player.unmarkSkill('th_dunxi_mark');
                                'step 2'
                                if (event.bool1 && trigger.player == _status.currentPhase) event.getParent(5).skipped = true;
                            }
                        },

                        //黄祖
                        th_jinggong: {
                            locked: false,
                            mod: {
                                targetInRange: function (card) {
                                    if (card.th_jinggong) return true;
                                },
                                aiOrder: function (player, card, numx) {
                                    var num = _status.event._th_jinggong_baseValue;
                                    if (num > 0 && get.type(card) == 'equip' && player.getUseValue(card) < num) return numx / 10;
                                },
                            },
                            enable: 'chooseToUse',
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                return player.countCards('hes', (card) => get.type(card) == 'equip') > 0;
                            },
                            filterCard: function (card) {
                                return get.type(card) == 'equip';
                            },
                            position: 'hes',
                            onChooseToUse: function (event) {
                                event._th_jinggong_baseValue = event.player.getUseValue({ name: 'sha' });
                            },
                            check: function (card) {
                                var num = _status.event._th_jinggong_baseValue,
                                    player = _status.event.player;
                                return num - player.getUseValue(card);
                            },
                            prompt: '将一张装备牌当做【杀】使用',
                            viewAs: {
                                name: 'sha',
                                th_jinggong: true,
                            },
                            group: 'th_jinggong_damage',
                            ai: {
                                respondSha: true,
                                skillTagFilter: (player) => player.countCards('hes', (card) => get.type(card) == 'equip') > 0,
                            },
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    direct: true,
                                    filter: function (event, player) {
                                        return event.card && event.card.th_jinggong;
                                    },
                                    content: function () {
                                        trigger.num = Math.min(3, get.distance(player, trigger.player));
                                    }
                                }
                            }
                        },
                        th_xiaojun: {
                            trigger: { player: 'useCardToPlayered' },
                            filter: function (event, player) {
                                return event.targets.length == 1 && event.targets[0].countCards('h') > 0;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            logTarget: 'target',
                            check: function (event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content: function () {
                                'step 0'
                                player.discardPlayerCard(trigger.target, 'h', Math.floor(trigger.target.countCards('h') / 2), true);
                                'step 1'
                                for (var i of result.cards) {
                                    if (get.suit(i, player) == get.suit(trigger.card, player)) {
                                        player.chooseToDiscard('h', Math.floor(player.countCards('h') / 2), true);
                                        break;
                                    }
                                }
                            },
                        },

                        //赵昂
                        th_zhongjie: {
                            trigger: { global: 'dying' },
                            audio: "ext:Thunder/audio/skill:2",
                            filter: function (event, player) {
                                return event.getParent().name == 'loseHp' && !player.hasSkill('th_zhongjie_block');
                            },
                            check: function (event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content: function () {
                                trigger.player.recover();
                                trigger.player.draw();
                                player.addTempSkill('th_zhongjie_block', 'roundStart');
                            },
                            subSkill: {
                                block: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已使用过【忠节】',
                                    }
                                }
                            }
                        },
                        th_sushou: {
                            trigger: { global: 'phaseUseBegin' },
                            filter: function (event, player) {
                                return event.player.isMaxHandcard(true);
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            check: function (event, player) {
                                if (player.hp == 1 && !game.hasPlayer(function (current) {
                                    return get.attitude(current, player) > 0 && current.hasSkill('th_zhongjie') && !current.hasSkill('th_zhongjie_block');
                                }) && player.countCards('h', { name: ['jiu', 'tao'] }) == 0) return false;
                                return get.attitude(player, event.player);
                            },
                            logTarget: 'player',
                            content: function () {
                                'step 0'
                                player.loseHp();
                                'step 1'
                                player.draw(player.getDamagedHp());
                                'step 2'
                                if (player == _status.currentPhase) event.finish();
                                'step 3'
                                event.num = Math.floor(trigger.player.countCards('h') / 2);
                                if (event.num == 0 || player.getDamagedHp() == 0 || player.countCards('h') == 0) event.finish();
                                'step 4'
                                var cards = trigger.player.getCards('h').randomGets(event.num);
                                event.cards2 = cards;
                                var next = player.chooseToMove('夙守：将手牌中至多' + get.cnNumber(player.getDamagedHp()) + '张牌与之对换');
                                var list = [[get.translation(trigger.player) + '一半的手牌', cards]], hs = player.getCards('h');
                                if (hs.length) {
                                    list.push(['你的手牌', hs]);
                                    next.set('filterMove', function (from, to, moved) {
                                        if (typeof to == 'number') return false;
                                        var num = 0;
                                        for (var i of moved[1]) {
                                            if (!hs.includes(i)) num++;
                                        }
                                        if (moved[0].contains(to.link) && !hs.contains(to.link)) {
                                            return num < player.getDamagedHp();
                                        }
                                        if (moved[1].contains(to.link) && !hs.contains(from.link)) {
                                            return num < player.getDamagedHp();
                                        }
                                        return true;
                                    });
                                }
                                next.set('list', list);
                                next.set('processAI', function (list) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, trigger.player) > 2) return [list[0][1], list[1][1]];
                                    var cards1 = list[0][1].sort(function (a, b) {
                                        return get.value(b) - get.value(a)
                                    }), cards2 = list[1][1].sort(function (a, b) {
                                        return get.value(a) - get.value(b)
                                    }), num = 0;
                                    while (num < player.getDamagedHp()) {
                                        var card1 = cards1[0], card2 = cards2[0];
                                        cards1.remove(card1);
                                        cards2.push(card1);
                                        cards2.remove(card2);
                                        cards1.push(card2);
                                        num++;
                                    }
                                    return [cards1, cards2];
                                })
                                'step 5'
                                if (result.bool) {
                                    event.forceDie = true;
                                    var cards0 = result.moved[0],
                                        cards1 = result.moved[1],
                                        hs = player.getCards('h'),
                                        lose = [],
                                        gain = [];
                                    for (var i of cards1) {
                                        if (!hs.contains(i)) gain.push(i);
                                    }
                                    for (var i of hs) {
                                        if (cards0.contains(i)) lose.push(i);
                                    }
                                    if (lose.length) trigger.player.gain(lose, 'hidden');
                                    if (gain.length) player.gain(gain, 'hidden');
                                }
                                else event.finish();
                                'step 6'
                                game.updateRoundNumber();
                            }
                        },

                        //孙茹
                        th_xiecui: {
                            trigger: { global: 'damageBegin2' },
                            filter: function (event, player) {
                                if (!event.source || event.source != _status.currentPhase) return false;
                                if (!event.cards || !event.cards.length) return false;
                                return event.source.getHistory('sourceDamage', function (evt) {
                                    return evt.card && evt.cards && evt.cards.length;
                                }).length == 0;
                            },
                            logTarget: 'source',
                            audio: "ext:Thunder/audio/skill:2",
                            check: function (event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content: function () {
                                'step 0'
                                trigger.num++;
                                'step 1'
                                if (trigger.source.group == 'wu') {
                                    trigger.source.gain(trigger.cards, 'gain2');
                                    trigger.source.addTempSkill('th_xiecui_effect')
                                }
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: "本回合手牌上限+1",
                                    },
                                    mod: {
                                        maxHandcard: function (player, num) {
                                            return num + 1;
                                        },
                                    },
                                    sub: true,
                                }
                            },
                            ai: {
                                expose: 0.4,
                            }
                        },
                        th_youxu: {
                            trigger: { global: 'phaseJieshuBegin' },
                            filter: function (event, player) {
                                return event.player.countCards('h') > event.player.hp;
                            },
                            audio: "ext:Thunder/audio/skill:2",
                            logTarget: 'player',
                            check: function (event, player) {
                                if (event.player == player) return game.hasPlayer(function (current) {
                                    return player != current && get.attitude(player, current) > 0 && current.isMinHp();
                                });
                                return get.attitude(player, event.player) < 0;
                            },
                            content: function () {
                                'step 0'
                                event.card = trigger.player.getCards('h').randomGet();
                                player.showCards(event.card);
                                'step 1'
                                player.chooseTarget('选择将' + get.translation(event.card) + '交给一名角色', function (card, player, target) {
                                    return target != trigger.player;
                                }).ai = (target) => {
                                    if (get.attitude(player, target) <= 0) return 0;
                                    if (target.isMinHp()) return 20;
                                    return 20 - target.countCards('h');
                                }
                                'step 2'
                                if (result.bool) {
                                    result.targets[0].gain(event.card, trigger.player, 'gain2');
                                    if (result.targets[0].isMinHp()) result.targets[0].recover();
                                }
                            },
                            ai: {
                                expose: 0.4,
                            }
                        },

                        //全惠解
                        th_huishu: {
                            audio: "ext:Thunder/audio/skill:2",
                            init: function (player) {
                                if (!player.storage.th_huishu) player.storage.th_huishu = [2, 1, 2];
                            },
                            getInfo: function (player) {
                                if (!player.storage.th_huishu) player.storage.th_huishu = [2, 1, 2];
                                return player.storage.th_huishu;
                            },
                            trigger: { player: 'phaseDrawEnd' },
                            content: function () {
                                'step 0'
                                player.addTempSkill('th_huishu_effect', 'phaseAfter');
                                'step 1'
                                var info = lib.skill.th_huishu.getInfo(_status.event.player);
                                player.draw(info[0]);
                                player.chooseToDiscard('h', info[1], true);

                            },
                            subSkill: {
                                effect: {
                                    init: function (player) {
                                        if (!player.storage.th_huishuDc) player.storage.th_huishuDc = 0;
                                    },
                                    trigger: { player: 'loseAfter' },
                                    filter: function (event, player) {
                                        return event.type == 'discard' && !player.hasSkill('th_huishu_used');
                                    },
                                    firstDo: true,
                                    forced: true,
                                    charlotte: true,
                                    content: function () {
                                        for (var i = 0; i < trigger.cards2.length; i++) {
                                            if (get.position(trigger.cards2[i], true) == 'd') {
                                                player.storage.th_huishuDc++;
                                            }
                                        }
                                        if (player.storage.th_huishuDc > lib.skill.th_huishu.getInfo(player)[2]) {
                                            player.addTempSkill('th_huishu_used');
                                            var card = get.cardPile(function (card) {
                                                return get.type2(card) == 'trick';
                                            }, 'discardPile');
                                            if (card) {
                                                player.gain(card, 'gain2');
                                            }
                                        }
                                    }
                                },
                                used: {}
                            },
                            mark: true,
                            intro: {
                                content: function (storage, player) {
                                    var info = lib.skill.th_huishu.getInfo(player);
                                    return '<div class="text center">摸牌数：' + info[0] + '</span><br>弃牌数：' + info[1] + '</span><br>超出数：' + info[2] + '</span></div>'
                                },
                            },
                        },
                        th_yishu: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: {
                                player: ['loseAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter: function (event, player) {
                                if (player.isPhaseUsing()) return false;
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                if (event.name == 'lose') return true;
                                return player.hasHistory('lose', function (evt) {
                                    if (event != evt.getParent()) return false;
                                    return true;
                                });
                            },
                            getMinMax: function (player) {
                                var info = lib.skill.th_huishu.getInfo(player);
                                var min = info[0], max = info[0], minW = [], maxW = [];
                                for (var i = 0; i < info.length; i++) {
                                    if (info[i] < min) {
                                        min = info[i];
                                        minW = [];
                                        minW.push(i);
                                    } else if (info[i] == min) {
                                        minW.push(i);
                                    }
                                    if (info[i] > max) {
                                        max = info[i];
                                        maxW = [];
                                        maxW.push(i);
                                    } else if (info[i] == max) {
                                        maxW.push(i);
                                    }
                                }
                                return [minW, maxW];
                            },
                            forced: true,
                            charlotte: true,
                            content: function () {
                                'step 0'
                                event.info = lib.skill.th_yishu.getMinMax(player);
                                if (event.info[0].length == 1) {
                                    player.storage.th_huishu[event.info[0][0]] += 2;
                                    event.goto(2);
                                }
                                else {
                                    var list1 = ['摸牌数', '弃牌数', '超出数'];
                                    var list2 = list1.filter(i => {
                                        return event.info[0].indexOf(list1.indexOf(i)) != -1;
                                    });
                                    player.chooseControl(list2).set('prompt', '选择一项最小值令其+2').set('ai', function () {
                                        if (list2.contains('摸牌数')) return '摸牌数';
                                        else if (list2.contains('超出数')) return '超出数';
                                        return '弃牌数';
                                    });
                                }
                                'step 1'
                                if (result.control) {
                                    switch (result.control) {
                                        case '摸牌数': player.storage.th_huishu[0] += 2; break;
                                        case '弃牌数': player.storage.th_huishu[1] += 2; break;
                                        default: player.storage.th_huishu[2] += 2;
                                    }
                                }
                                'step 2'
                                if (event.info[1].length == 1) {
                                    player.storage.th_huishu[event.info[1][0]]--;
                                    event.finish();
                                }
                                else {
                                    var list1 = ['摸牌数', '弃牌数', '超出数'];
                                    var list2 = list1.filter(i => {
                                        return event.info[1].indexOf(list1.indexOf(i)) != -1;
                                    });
                                    player.chooseControl(list2).set('prompt', '选择一项最大值令其-1').set('ai', function () {
                                        if (list2.contains('弃牌数')) return '弃牌数';
                                        else if (list2.contains('超出数')) return '超出数';
                                        return '摸牌数';
                                    });
                                }
                                'step 3'
                                if (result.control) {
                                    switch (result.control) {
                                        case '摸牌数': player.storage.th_huishu[0]--; break;
                                        case '弃牌数': player.storage.th_huishu[1]--; break;
                                        default: player.storage.th_huishu[2]--;
                                    }
                                }
                            }
                        },
                        th_ligong: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseZhunbeiBegin' },
                            unique: true,
                            juexingji: true,
                            forced: true,
                            skillAnimation: true,
                            animationColor: 'wood',
                            forceunique: true,
                            filter: function (event, player) {
                                if (!player.storage.th_huishu) return false;
                                for (var i = 0; i < player.storage.th_huishu.length; i++) {
                                    if (player.storage.th_huishu[i] >= 5) return true;
                                }
                                return false;
                            },
                            content: function () {
                                'step 0'
                                player.gainMaxHp();
                                player.recover();
                                player.removeSkill('th_huishu');
                                player.removeSkill('th_yishu');
                                player.awakenSkill('th_ligong');
                                'step 1'
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][0] == 'female' && lib.character[name][1] == 'wu') list.push(name);
                                    }
                                }
                                else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[name][0] != 'female' && lib.character[i][1] != 'wu';
                                    });
                                }
                                else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[0] == 'female' && info[1] == 'wu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('th_quanhuijie');
                                list.remove('quanhuijie');
                                list = list.randomGets(4);
                                var skills = [];
                                for (var i = 0; i < list.length; i++) {
                                    skills[i] = (lib.character[list[i]][3] || []).filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    });
                                }
                                if (!list.length || !skills.length) { event.finish(); return; }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                player.chooseToInit('离宫', list, skills, 2);
                            },
                        },

                        //'胡昭',
                        th_midu: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            filter: function (event, player) { return !player.hasSkill('th_midu_used') },
                            content: function () {
                                'step 0'
                                var list = [];
                                event.addIndex = 0;
                                if (player.storage.disableEquip != undefined && player.storage.disableEquip.length < 5) list.push('废除任意数量的装备栏并另一名角色摸等量的牌');
                                else event.addIndex++;
                                if (player.storage.disableEquip != undefined && player.storage.disableEquip.length > 0) list.push('恢复一个装备栏并获得【活墨】至下回合开始');
                                if (list.length) {
                                    player.chooseControl('cancel2').set('choiceList', list).set('ai', function () {
                                        for (var i of player.getCards('h')) {
                                            if (get.type(i) != 'equip') continue;
                                            if (player.isDisabled(get.subtype(i)) && list.length > 1) return 1;
                                        }
                                        for (var j = 1; j <= 5; j++) {
                                            if (player.isEmpty(j)) return 0;
                                        }
                                        if (event.addIndex > 0) return 0;
                                        return 1;
                                    })
                                } else event.finish();
                                'step 1'
                                if (result.control != 'cancel2') {
                                    event.videoId = lib.status.videoId++;
                                    event.addIndex += result.index;
                                    event.list = [];
                                    var func = function (id) {
                                        var list1 = [], list2 = [], title = '';
                                        for (var i = 1; i < 6; i++) {
                                            if (!player.isDisabled(i)) list1.push('equip' + i);
                                            else list2.push('equip' + i);
                                        }
                                        if (event.addIndex == 0) {
                                            title = '【弥笃】：请选择要废除的装备栏：'
                                        } else {
                                            title = '【弥笃】：请选择要恢复的装备栏：'
                                        }
                                        var choiceList = ui.create.dialog(title, 'forcebutton');
                                        choiceList.videoId = id;
                                        event.list = event.addIndex == 0 ? list1 : list2;
                                        for (var i = 0; i < event.list.length; i++) {
                                            var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                            //if (i == 0) str += '<div style="opacity:0.5">';
                                            str += get.translation(event.list[i]);
                                            if (i == 0) str += '</div>';
                                            str += '</div>';
                                            var next = choiceList.add(str);
                                            next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                            next.firstChild.link = i;
                                            for (var j in lib.element.button) {
                                                next[j] = lib.element.button[j];
                                            }
                                            choiceList.buttons.add(next.firstChild);
                                        }
                                        return choiceList;
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    }

                                    event.dialog = func(event.videoId);
                                    if (player != game.me || _status.auto) {
                                        event.dialog.style.display = 'none';
                                    }
                                    var next = player.chooseButton();
                                    next.set('dialog', event.videoId);
                                    next.set('forced', true);
                                    if (result.index + event.addIndex == 0) next.set('selectButton', [1, 5]);
                                    next.set('ai', function (button) {
                                        if (event.addIndex > 0) {
                                            for (var i of player.getCards('h')) {
                                                if (get.type(i) != 'equip') continue;
                                                if (player.isDisabled(get.subtype(i)) && event.list[button.link] == get.subtype(i)) return 1;
                                            }
                                        }
                                        if (!player.isEmpty(event.list[button.link])) return 0;
                                        return Math.random();
                                    });
                                } else event.finish();
                                'step 2'
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                if (result.bool) {
                                    player.addTempSkill('th_midu_used');
                                    if (event.addIndex == 0) {
                                        event.num = result.links.length;
                                        for (var i = 0; i < event.num; i++) {
                                            player.disableEquip(event.list[result.links[i]]);
                                        }
                                        player.storage.th_xianwang = player.storage.disableEquip.length;
                                        player.chooseTarget('选择一名角色摸' + event.num + '张牌：', true).set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (target.hasJudge('lebu')) return 0;
                                            return get.attitude(player, target) > 2;
                                        });
                                    } else {
                                        player.enableEquip(event.list[result.links[0]]);
                                        player.storage.th_xianwang = player.storage.disableEquip.length;
                                        player.addTempSkill('huomo', { player: 'phaseBegin' });
                                    }
                                } else event.finish();
                                'step 3'
                                player.storage.th_xianwang = player.countDisabled();
                                if (result.bool && result.targets && result.targets.length) {
                                    result.targets[0].draw(event.num);
                                }
                            },
                            subSkill: {
                                used: {}
                            },
                            ai: {
                                order: function () {
                                    return get.order({ name: 'sha' }) + 0.05;
                                },
                                result: {
                                    player: 1,
                                }
                            }
                        },
                        th_xianwang: {
                            audio: "ext:Thunder/audio/skill:2",
                            mark: true,
                            charlotte: true,
                            intro: {
                                content: function (storage) {
                                    if (storage == 0) {
                                        return '无距离变化';
                                    }
                                    else if (storage < 3) {
                                        return '其他角色计算与你的距离时+1';
                                    }
                                    else {
                                        return '其他角色计算与你的距离时+2';
                                    }
                                }
                            },
                            init: function (player) {
                                if (typeof player.storage.th_xianwang != 'number') player.storage.th_xianwang = 0;
                            },
                            mod: {
                                globalTo: function (from, to, distance) {
                                    if (to.countDisabled() == 0) return;
                                    if (to.countDisabled() < 3) {
                                        return distance + 1;
                                    } else {
                                        return distance + 2;
                                    }
                                }
                            }
                        },

                        //'黄权',
                        th_quanjian: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            filter: function (event, player) { return !player.hasSkill('th_quanjian_1') || !player.hasSkill('th_quanjian_2') },
                            content: function () {
                                'step 0'
                                var list = [];
                                event.addIndex = 0;
                                if (!player.hasSkill('th_quanjian_1')) list.push('视为对一名其攻击范围内你指定的角色造成1点伤害。');
                                else event.addIndex++;
                                if (!player.hasSkill('th_quanjian_2')) list.push('将手牌调整至手牌上限（最多摸到5张），其不能使用手牌直到回合结束。');
                                if (list.length) {
                                    player.chooseControl('cancel2').set('choiceList', list).set('ai', function () {
                                        if (list.length > 1) return 1;
                                        return 0;
                                    })
                                } else event.finish();
                                'step 1'
                                if (result.control != 'cancel2') {
                                    event.addIndex += result.index;
                                    player.chooseTarget('选择一名角色执行效果：', lib.filter.notMe).ai = (target) => {
                                        if (event.addIndex == 0) {
                                            var targets = game.filterPlayer(function (current) {
                                                return current.hasSkill('th_quanjian_jinjian') && get.attitude(player, current) < 0;
                                            });
                                            if (targets.length) {
                                                for (var i = 0; i < targets.length; i++) {
                                                    if (target.inRange(targets[i])) {
                                                        if (get.attitude(player, target) > 0) return 20;
                                                        return 15;
                                                    }
                                                }
                                            }
                                            if (get.mode() == 'identity' && ['fan', 'nei'].contains(player.identity)) {
                                                if (target.identity == 'zhu' && game.hasPlayer(function (current) {
                                                    return target.inRange(current) && current.identity == 'zhong' && get.attitude(player, target) < 0;
                                                })) return 15;
                                            }
                                            return get.attitude(player, target);
                                        };
                                        if (get.attitude(player, target) > 0) return Math.max(0, Math.min(5, target.maxHp) - target.countCards('h'));
                                        if (Math.max(0, Math.min(5, target.maxHp) - target.countCards('h')) <= 1 && target.countCards('h', 'shan') && !target.hasSkillTag('respondShan', true, null, true) && player.countCards('h', function (card) {
                                            return get.tag(card, 'respondShan') && player.getUseValue(card, null, true) > 0 && get.effect(target, card, player, player) > 0;
                                        })) return 2;
                                        player.addTempSkill('th_quanjian_AI');
                                        return 0;
                                    }
                                } else event.finish();
                                'step 2'
                                if (result.bool) {
                                    event.target1 = result.targets[0];
                                    player.logSkill('th_quanjian', event.target1);
                                    if (event.addIndex == 0) {
                                        player.chooseTarget('选择令' + get.translation(event.target1) + '造成伤害的角色', function (card, player, target) {
                                            return event.target1.inRange(target);
                                        }, true).ai = (target) => {
                                            if (get.attitude(player, target) < 0 && target.hasSkill('th_quanjian_jinjian')) return 20;
                                            if (get.mode() == 'identity' && ['fan', 'nei'].contains(player.identity)) {
                                                if (event.target1.identity == 'zhu' && target.inRange(event.target1) && target.identity == 'zhong' && get.attitude(player, event.target1) < 0) return 15;
                                            }
                                            return -get.attitude(player, target);
                                        }
                                    }
                                    player.addTempSkill('th_quanjian_' + (event.addIndex + 1));
                                    game.log(player, '选择了', '#g【劝谏】', '的', '#y效果' + get.cnNumber(event.addIndex + 1, true));
                                } else event.finish();
                                'step 3'
                                var str = '';
                                if (event.addIndex == 0) {
                                    if (result.bool) {
                                        event.target2 = result.targets[0];
                                        str = '是否视为对' + get.translation(event.target2) + '造成1点伤害，否则本回合下次受伤+1'
                                    } else event.finish();
                                } else str = '是否将手牌调整至手牌上限（最多摸到5张），不能使用手牌直到回合结束，否则本回合下次受伤+1'
                                event.target1.chooseBool(str).ai = () => {
                                    if (event.addIndex == 0) {
                                        if (get.attitude(event.target1, player) >= 0 || get.attitude(event.target1, event.target2) <= 0) return true;
                                        if (event.target2.hasSkillTag('maixie')) return true;
                                        return false;
                                    } else {
                                        if (event.target1.countCards('h') >= event.target1.hp && get.attitude(event.target1, player) >= 0) return false;
                                        if (event.target1.hp - event.target1.countCards('h') < 3 && get.attitude(event.target1, player) < 0) return false;
                                        return true;
                                    }
                                }
                                'step 4'
                                if (result.bool) {
                                    if (event.addIndex == 0) event.target2.damage(1, event.target1);
                                    else {
                                        if (event.target1.needsToDiscard()) event.target1.chooseToDiscard('h', event.target1.needsToDiscard(), true);
                                        else event.target1.drawTo(Math.min(5, event.target1.maxHp));
                                        event.target1.addTempSkill('th_quanjian_block');
                                    }
                                } else event.target1.addTempSkill('th_quanjian_jinjian');
                            },
                            subSkill: {
                                '1': {},
                                '2': {},
                                block: {
                                    mark: true,
                                    intro: { content: '不能使用或打出手牌' },
                                    charlotte: true,
                                    mod: {
                                        cardEnabled2: function (card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                },
                                jinjian: {
                                    trigger: { player: 'damageBegin3' },
                                    forced: true,
                                    charlotte: true,
                                    content: function () {
                                        trigger.num++;
                                        player.removeSkill('th_quanjian_jinjian');
                                    },
                                    marktext: ' +1 ',
                                    intro: {
                                        content: '下次受到的伤害+1',
                                    },
                                },
                                AI: {}
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: function (player, target) {
                                        if (player.hasSkill('th_quanjian_AI')) return 0;
                                        if (game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        })) return 1;
                                        return 0;
                                    },
                                }
                            }
                        },
                        th_tujue: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'dying' },
                            limited: true,
                            skillAnimation: true,
                            animationColor: 'gray',
                            filter: function (event, player) { return player.countCards('he') },
                            content: function () {
                                'step 0'
                                player.awakenSkill('th_tujue');
                                player.chooseTarget('选择将所有牌给一名其他角色', lib.filter.notMe, true).ai = (target) => get.attitude(player, target) > 0;
                                'step 1'
                                if (result.bool) {
                                    var num = player.countCards('he');
                                    result.targets[0].gain(player.getCards('he'), player, false);
                                    game.log(result.targets[0], '获得了', player, '的' + get.cnNumber(num) + '张牌')
                                    player.recover(num);
                                    player.draw(num);
                                }
                            }
                        },

                        //'吕旷&吕翔',
                        th_shuhe: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            usable: 1,
                            filter: function (event, player) { return player.countCards('h') },
                            filterCard: true,
                            check: function (card) {
                                if (game.hasPlayer(function (current) {
                                    return current.hasCard(function (cardx) {
                                        return get.number(cardx) == card.number && lib.filter.canBeGained(cardx, current, player);
                                    }, 'ej');
                                })) return 6;
                                return 1;
                            },
                            lose: false,
                            discard: false,
                            ai: {
                                order: 8,
                                result: { player: 1 }
                            },
                            content: function () {
                                'step 0'
                                event.card = cards[0]
                                player.showCards(event.card);
                                var list = [];
                                for (var i = 0; i < game.players.length; i++) {
                                    for (var j of game.players[i].getCards('ej')) {
                                        if (get.number(j) == event.card.number && lib.filter.canBeGained(j, game.players[i], player)) list.push(j);
                                    }
                                }
                                if (list.length) {
                                    player.gain(list, 'log');
                                    event.finish();
                                }
                                else player.chooseTarget('选择将' + get.translation(event.card) + '交给一名其他角色', lib.filter.notMe, true).ai = (target) => get.attitude(player, target);
                                'step 1'
                                if (result.bool) {
                                    result.targets[0].gain(event.card, player, 'log');
                                    if (!player.storage.th_liehou) player.storage.th_liehou = 1;
                                    if (player.storage.th_liehou < 5) player.storage.th_liehou++;
                                }
                            }
                        },
                        th_liehou: {
                            init: function (player) { player.storage.th_liehou = 1 },
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseDrawEnd' },
                            forced: true,
                            direct: true,
                            content: function () {
                                'step 0'
                                if (!player.storage.th_liehou) player.storage.th_liehou = 1;
                                player.chooseControl('弃置' + get.cnNumber(player.storage.th_liehou) + '张牌', '失去1点体力').ai = () => {
                                    if (player.storage.th_liehou <= 2 || player.hp == 1 && player.countCards('h', { name: ['tao', 'jiu'] }) == 0) return 0;
                                    return 1;
                                }
                                'step 1'
                                if (result.index == 0) {
                                    player.chooseToDiscard('he', player.storage.th_liehou, true);
                                } else {
                                    player.loseHp();
                                }
                            },
                            mark: true,
                            intro: {
                                content: '摸牌阶段额外摸#张牌'
                            },
                            group: 'th_liehou_draw',
                            subSkill: {
                                draw: {
                                    audio: 'th_liehou',
                                    trigger: { player: 'phaseDrawBegin2' },
                                    forced: true,
                                    filter: function (event, player) {
                                        return !event.numFixed;
                                    },
                                    content: function () {
                                        if (!player.storage.th_liehou) player.storage.th_liehou = 1;
                                        trigger.num += player.storage.th_liehou;
                                    },

                                }
                            }
                        },

                        //蔡阳
                        th_xunji: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: lib.filter.notMe,
                            logTarget: 'target',
                            content: function () {
                                target.addTempSkill('th_xunji_mark', { player: 'phaseAfter' });
                            },
                            group: 'th_xunji_effect',
                            ai: {
                                order: 1,
                                result: {
                                    target: -1.5
                                }
                            },
                            subSkill: {
                                effect: {
                                    trigger: { global: 'phaseJieshuBegin' },
                                    filter: function (event, player) {
                                        return event.player.hasSkill('th_xunji_mark') && event.player.getHistory('sourceDamage').length;
                                    },
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        player.chooseBool('是否视为对' + get.translation(trigger.player) + '使用一张【决斗】？').ai = () => {
                                            if (get.effect(trigger.player, { name: 'juedou' }, player, player) < 0) return false;
                                            return true;
                                        }
                                        'step 1'
                                        if (result.bool) {
                                            player.logSkill('th_xunji', trigger.player);
                                            player.useCard({ name: 'juedou', isCard: true }, trigger.player, false);
                                        } else event.finish();
                                        'step 2'
                                        var evts = player.getHistory('sourceDamage', function (evt) {
                                            return evt.card.name == 'juedou' && evt.getParent(3) == event;
                                        })
                                        if (evts.length) player.loseHp(evts[0].num);
                                    }
                                },
                                mark: {
                                    mark: true,
                                    intro: {
                                        content: '寻嫉对象',
                                    },
                                }
                            }
                        },
                        th_jiaofeng: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            filter: function (event, player) {
                                return !player.getHistory('sourceDamage').length;
                            },
                            content: function () {
                                var num = player.getDamagedHp();
                                if (num > 0) player.draw();
                                if (num > 1) trigger.num++;
                                if (num > 2) player.recover();
                            }
                        },

                        //刘封
                        th_xiansi: {
                            audio: "ext:Thunder/audio/skill:2",
                            trigger: { player: 'phaseZhunbeiBegin' },
                            direct: true,
                            content: function () {
                                "step 0"
                                player.chooseTarget(get.prompt2('th_xiansi'), [1, 2], function (card, player, target) {
                                    return target.countCards('he') > 0;
                                }, function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                "step 1"
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.logSkill('th_xiansi', result.targets);
                                    event.targets = result.targets;
                                }
                                else {
                                    event.finish();
                                }
                                "step 2"
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard(target, true);
                                }
                                else {
                                    event.finish();
                                }
                                "step 3"
                                if (result.bool) {
                                    player.addToExpansion(result.cards, event.current, 'give').gaintag.add('th_xiansi');
                                    event.goto(2);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove: function (player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                threaten: 2
                            },
                            global: 'th_xiansi2',
                            group: 'th_xiansi3',
                        },
                        th_xiansi2: {
                            enable: 'chooseToUse',
                            audio: "ext:Thunder/audio/skill:2",
                            viewAs: { name: 'sha', isCard: true },
                            filter: function (event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('th_xiansi') && current.getExpansions('th_xiansi').length > 1 && event.filterTarget({ name: 'sha' }, player, current);
                                });
                            },
                            filterTarget: function (card, player, target) {
                                var bool = false;
                                var players = ui.selected.targets.slice(0);
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hasSkill('th_xiansi') && players[i].getExpansions('th_xiansi').length > 1) bool = true; break;
                                }
                                if (!bool && (!target.hasSkill('th_xiansi') || target.getExpansions('th_xiansi').length <= 1)) return false;
                                return _status.event._backup.filterTarget.apply(this, arguments);
                            },
                            complexSelect: true,
                            selectCard: -1,
                            filterCard: function () {
                                return false;
                            },
                            forceaudio: true,
                            direct: true,
                            prompt: '弃置一名有【逆】的角色的两张【逆】，然后视为对包含其在内的角色使用【杀】。',
                            delay: false,
                            log: false,
                            precontent: function () {
                                "step 0"
                                var targets = game.filterPlayer(function (current) {
                                    if (event.result.targets.contains(current) && current.getExpansions('th_xiansi')) {
                                        return current.getExpansions('th_xiansi').length > 1;
                                    }
                                    return false;
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    event.goto(2);
                                }
                                else if (targets.length > 0) {
                                    player.chooseTarget(true, '选择弃置【陷嗣】牌的目标', function (card, player, target) {
                                        return _status.event.list.contains(target);
                                    }).set('list', targets).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    });
                                }
                                else {
                                    event.finish();
                                }
                                "step 1"
                                if (result.bool && result.targets.length) {
                                    event.target = result.targets[0];
                                }
                                else {
                                    event.finish();
                                }
                                "step 2"
                                if (event.target) {
                                    if (event.target.getExpansions('th_xiansi').length == 2) {
                                        event.directresult = event.target.getExpansions('th_xiansi').slice(0);
                                    }
                                    else {
                                        player.chooseCardButton('移去两张“逆”', 2, event.target.getExpansions('th_xiansi'), true);
                                    }
                                }
                                else {
                                    event.finish();
                                }
                                "step 3"
                                if (event.directresult || result.bool) {
                                    player.logSkill('th_xiansi2', event.target);
                                    var links = event.directresult || result.links;
                                    target.loseToDiscardpile(links);
                                }
                            },
                            ai: {
                                order: function () {
                                    return get.order({ name: 'sha' }) + 0.05;
                                },
                            }
                        },
                        th_xiansi3: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            viewAs: { name: 'sha', isCard: true },
                            filter: function (event, player) {
                                return event.filterCard({ name: 'sha' }, player, event) && player.hasSkill('th_xiansi') && player.getExpansions('th_xiansi').length && player.getExpansions('th_xiansi').length > player.hp;
                            },
                            selectCard: -1,
                            filterCard: function () {
                                return false;
                            },
                            forceaudio: true,
                            direct: true,
                            prompt: '移除一张【逆】，并视为使用一张【杀】。',
                            delay: false,
                            log: false,
                            precontent: function () {
                                "step 0"
                                if (player.getExpansions('th_xiansi').length == 1) {
                                    event.directresult = player.getExpansions('th_xiansi').slice(0);
                                }
                                else {
                                    player.chooseCardButton('移去一张“逆”', 1, player.getExpansions('th_xiansi'), true);
                                }
                                "step 1"
                                if (event.directresult || result.bool) {
                                    player.logSkill('th_xiansi3');
                                    var links = event.directresult || result.links;
                                    player.loseToDiscardpile(links);
                                }
                            },
                            ai: {
                                order: function () {
                                    return get.order({ name: 'sha' }) + 0.05;
                                },
                            }
                        },

                        //太史慈
                        th_jixu: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: "phaseUse",
                            usable: 1,
                            init: function () {
                                var num = 0;
                                for (var i of Object.keys(lib.cardPile)) {
                                    num += lib.cardPile[i].length;
                                }
                                _status.th_jixuCardNum = num;
                            },
                            filter: function (event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget: function (card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length) {
                                    return ui.selected.targets.length < player.hp;
                                }
                                return true;
                            },
                            selectTarget: [1, Infinity],
                            multitarget: true,
                            multiline: true,
                            content: function () {
                                "step 0"
                                targets.sort(lib.sort.seat);
                                "step 1"
                                if (!event.num) event.num = 0;
                                if (!event.caicuolist) event.caicuolist = [];
                                targets[event.num].chooseBool("是否押杀？").ai = function (event, player) {
                                    var evt = _status.event.getParent();
                                    var num = 0;
                                    for (var i = 0; i < lib.card.list.length; i++) {
                                        if (lib.card.list[i][2] == 'sha') num++;
                                    }
                                    var xishu = (num / _status.th_jixuCardNum) * evt.player.countCards('h');
                                    if (xishu > Math.random() * 1.2 + 0.8) return true;
                                    if (xishu < Math.random() * 0.2) return false;
                                    return Math.random() < 0.5;
                                };
                                "step 2"
                                if (result.bool) {
                                    targets[event.num].chat('有杀');
                                    game.log(targets[event.num], '认为', player, '#g有杀');
                                    if (!player.countCards('h', 'sha')) event.caicuolist.add(targets[event.num]);
                                } else {
                                    targets[event.num].chat('没杀');
                                    game.log(targets[event.num], '认为', player, '#y没有杀');
                                    if (player.countCards('h', 'sha')) event.caicuolist.add(targets[event.num]);
                                }
                                event.num++;
                                game.delay();
                                if (event.num < targets.length) event.goto(1);
                                "step 3"
                                player.popup(player.countCards('h', 'sha') ? "有杀" : "没杀");
                                game.log(player, player.countCards('h', 'sha') ? "有杀" : "没杀");
                                player.draw(event.caicuolist.length)
                                if (player.countCards('h', 'sha')) {
                                    player.addTempSkill('th_jixu_sha');
                                    player.storage.th_jixu_sha = event.caicuolist;
                                    player.addTempSkill('th_jixu_add')
                                    event.finish();
                                }
                                else event.num = 0;
                                "step 4"
                                if (event.num < event.caicuolist.length) {
                                    var target = event.caicuolist[event.num];
                                    player.discardPlayerCard(true, 'he', target);
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 6.5,
                                result: {
                                    target: -1,
                                },
                                expose: 0.4,
                            },
                            subSkill: {
                                add: {
                                    mod: {
                                        cardUsable: function (card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.th_jixu_sha.length;
                                        },
                                    },
                                    mark: true,
                                    intro: {
                                        content: function (storage, player) {
                                            if (player.storage.th_jixu_sha) return '本阶段出杀次数+' + player.storage.th_jixu_sha.length;
                                        }
                                    }
                                }
                            }
                        },
                        th_jixu_sha: {
                            audio: "th_jixu",
                            trigger: {
                                player: "useCard",
                            },
                            onremove: function (player) {
                                delete player.storage.th_jixu_sha;
                            },
                            filter: function (event, player) {
                                if (event.card.name == 'sha') {
                                    return game.hasPlayer(function (current) {
                                        return current != player && player.storage.th_jixu_sha.contains(current) && !event.targets.contains(current);
                                    });
                                }
                                return false;
                            },
                            prompt: '是否增加所有猜错角色为【杀】的目标？',
                            popup: false,
                            content: function () {
                                player.logSkill("th_jixu");
                                for (var i = 0; i < player.storage.th_jixu_sha.length; i++) {
                                    if (!trigger.targets.contains(player.storage.th_jixu_sha[i]) && player.canUse('sha', player.storage.th_jixu_sha[i], false)) {
                                        player.line(player.storage.th_jixu_sha[i], trigger.card.nature);
                                        trigger.targets.push(player.storage.th_jixu_sha[i]);
                                    }
                                }
                            },
                        },

                        //牛辅
                        th_xiaoxi: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            audio: "ext:Thunder/audio/skill:2",
                            forced: true,
                            content: () => {
                                'step 0'
                                player.chooseControl('1点上限', '2点上限').set('prompt', '选择减少的体力上限值:').set('ai', function () {
                                    if (player.maxHp - player.hp >= 2 && game.hasPlayer(function (current) { return player != current && player.inRange(current) && get.attitude(player, current) < 0 })) return '2点上限';
                                    return '1点上限';
                                })
                                'step 1'
                                if (result.control) {
                                    event.num = result.index + 1
                                    player.loseMaxHp(event.num);
                                }
                                'step 2'
                                var list = [];
                                event.addIndex = 0;
                                if (game.hasPlayer(function (current) { return player != current && player.inRange(current) && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he') })) list.push('获得你攻击范围内一名其他角色的' + event.num + '张牌');
                                else event.addIndex++;
                                if (game.hasPlayer(function (current) { return player != current && player.inRange(current) && player.canUse({ name: 'sha' }, current, false) })) list.push('视为对你攻击范围内的一名其他角色使用' + event.num + '张【杀】');
                                if (list.length) {
                                    player.chooseControl().set('choiceList', list).set('ai', function () {
                                        if (game.hasPlayer(function (current) {
                                            return get.effect(current, { name: 'sha' }, player, player) > 0 && player.inRange(current);
                                        })) return 1;
                                        return 0;
                                    })
                                } else event.finish();
                                'step 3'
                                event.addIndex += result.index;
                                switch (event.addIndex) {
                                    case 0: {
                                        player.chooseTarget(true, '获得一名其他角色的' + get.cnNumber(event.num) + '张牌', function (card, player, current) {
                                            return current != player && current.hasCard((card) => lib.filter.canBeGained(card, current, player), 'he') && player.inRange(current);
                                        }).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'shunshou_copy' }, player, player);
                                        });
                                    } break;
                                    default: {
                                        player.chooseTarget(true, '选择对一名其他角色使用' + get.cnNumber(event.num) + '张【杀】', function (card, player, current) {
                                            return current != player && player.inRange(current) && player.canUse({ name: 'sha' }, current, false);
                                        }).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        });
                                    }
                                }
                                'step 4'
                                event.target = result.targets[0];
                                player.line(event.target, 'green');
                                if (event.addIndex == 0) {
                                    player.gainPlayerCard(event.target, 'he', event.num, true);
                                    event.finish()
                                }
                                'step 5'
                                event.num--;
                                player.useCard({ name: 'sha' }, event.target, false);
                                'step 6'
                                if (event.num > 0) event.goto(5)
                            }
                        },
                        th_xiongrao: {
                            audio: "ext:Thunder/audio/skill:2",
                            enable: 'phaseUse',
                            limited: true,
                            skillAnimation: true,
                            animationColor: 'orange',
                            complexSelect: true,
                            filterTarget: lib.filter.notMe,
                            selectTarget: -1,
                            precontent: () => { player.awakenSkill('th_xiongrao') },
                            content: () => {
                                'step 0'
                                target.addTempSkill('th_xiongrao_block');
                                'step 1'
                                var num = 7 - player.maxHp
                                player.gainMaxHp(num);
                                player.draw(num);
                            },
                            subSkill: {
                                block: {
                                    init: function (player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove: function (player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    locked: true,
                                    skillBlocker: function (skill, player) {
                                        return !get.is.locked(skill) && !lib.skill[skill].limited && !lib.skill[skill].juexingji && !lib.skill[skill].charlotte;
                                    },
                                    mark: true,
                                    intro: {
                                        content: function (storage, player, skill) {
                                            var str = '<li>本回合除锁定技、限定技、觉醒技以外的技能全部失效。';
                                            var list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.th_xiongrao_block.skillBlocker(i, player);
                                            });
                                            if (list.length) str += ('<br><li>失效技能：' + get.translation(list))
                                            return str;
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: function (player) {
                                        if (player.maxHp <= 3) return 1;
                                        return 0;
                                    }
                                }
                            }
                        },








                    },
                    dynamicTranslate: {
                        th_huishu: function (player) {
                            var info = player.storage.th_huishu;
                            return '摸牌阶段结束时，你可以摸' + get.translation(info[0]) + '张牌然后弃置' + get.translation(info[1]) + '张手牌。若如此做，你本回合弃置超过' + get.translation(info[2]) + '张牌时，从弃牌堆中随机获得一张锦囊牌。';
                        },
                        th_bushi: function (player) {
                            var suits = player.storage.th_bushi;
                            return '准备阶段，你可以将四种花色重新分配至以下描述的“[]”框中：你使用[' + get.translation(suits[0]) + ']牌无距离限制；你使用或打出[' + get.translation(suits[1]) + ']后，摸一张牌；当你成为[' + get.translation(suits[2]) + ']牌的目标后，可弃置一张牌并令此牌对你无效；结束阶段，你从牌堆或弃牌堆中获得一张[' + get.translation(suits[3]) + ']牌。';
                        },
                    },
                };
                if (lib.device || lib.node) {
                    for (var i in thunder.character) { thunder.character[i][4].push('ext:Thunder/image/character/' + i + '.jpg'); }
                } else {
                    for (var i in thunder.character) { thunder.character[i][4].push('db:extension-Thunder/image/character:' + i + '.jpg'); }
                }
                return thunder;
            });
            lib.config.all.characters.push('thunder');
            if (!lib.config.characters.contains('thunder')) lib.config.characters.add('thunder');
            lib.translate['thunder_character_config'] = 'Thunder';
            game.import('card', function () {
                var thunder_card = {
                    name: 'thunder_card',
                    connect: true,
                    card: {
                    },
                    translate: {
                        thunder_card: "Thunder",
                    },
                    list: [],
                }
                var extname = _status.extension;
                for (var cardName in thunder_card.card) {
                    var card = thunder_card.card[cardName];
                    if (card.fullimage) {
                        if (_status.evaluatingExtension) {
                            card.image = `db:extension-${extname}/image/card:${cardName}.jpg`;
                        } else {
                            card.image = `ext:${extname}/image/card/${cardName}.jpg`;
                        }
                    }
                    if (card.audio === true) {
                        card.audio = `ext:${extname}/audio/card`;
                    }
                }
                return thunder_card;
            });
            lib.config.all.cards.push('thunder_card');
            lib.translate['thuner_card_config'] = 'Thunder';
            lib.init.css(lib.assetURL + 'extension/Thunder', 'thunder');
            lib.element.player.caiyi = function (list, control, source) {
                var next = game.createEvent('thcaiyi');
                next.list = list;
                next.control = control;
                next.player = this;
                next.source = source;
                next.setContent('thcaiyi');
                return next;
            }
        },
        help: {},
        config: {
            "introduc": {
                name: "<span style=\"color:red\">扩展食用说明(重要)：</span>", init: 'intro', item: {
                    "intro": '点击查看',
                },
                "textMenu": function (node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.width = "400px";
                    node.parentNode.style.transform = "translateY(-100px)";
                    switch (link) {
                        case "intro":
                            var str = "<ol><li>武将轲比能需要在扩展设置里手动打开才可以使用(默认关闭)，如果出现界面显示异常请关闭武将轲比能。</li>";
                            str += "<li><ul style=\"padding-left:0\">关于本体已更新但本扩展未删除的武将的说明：<li>界徐庶：保持与官服技能一致。</li><li>严夫人：保持与官服技能一致。</li><li>黄祖：本体当前版本存在结算bug。</li><li>曹华：本体当前版本存在结算bug。</li><li>秦宜禄：本体当前版本存在结算bug。</li><li>张嫙：应群友要求。</li><li>界沮授：可视化标记显示上一张使用的牌。</li><li>郭皇后：安装十周年UI后本体的郭皇后会出现多个矫诏的技能按钮，扩展的隐藏了多余矫诏按钮。</li><li>冯妤：提高AI，宝梳不会发给会跳过摸牌阶段的队友。</li><li>管宁：提高管宁AI，且可选择技能库是否为全扩。</li></ul></li>";
                            str += "</ol>";
                            node.innerHTML = str;
                    }
                },
            },
            "group": {
                name: "我要加群：", init: '1', item: {
                    "1": '点击查看群二维码',
                },
                "textMenu": function (node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.width = "320px";
                    node.parentNode.style.transform = "translateY(-100px)";
                    switch (link) {
                        case "1":
                            node.innerHTML = "    两个群的资源内容完全相同，请不要重复添加。<br><img style=width:300px  alt='Thunder扩展1群：991761102<br>Thunder扩展2群：484475852' src=" + lib.assetURL +
                                "extension/Thunder/image/effect/thunder.jpg>";
                    }
                },

            },
            "fengexian1": { name: "———— UI补丁 ————", clear: true },
            "UIpatch": { "name": "UI补丁", "init": true, },
            "UIItroduc": {
                name: "<span style=\"color:red\">UI补丁使用指南：</span>", init: 'intro', item: {
                    intro: '点击查看UI补丁使用指南',
                    "intro": '点击查看',
                },
                "textMenu": function (node, link) {
                    lib.setScroll(node.parentNode);
                    node.parentNode.style.width = "400px";
                    node.parentNode.style.transform = "translateY(-100px)";
                    switch (link) {
                        case "intro":
                            var str = "<ol><li>UI补丁立绘文件放在扩展目录image/stand/文件夹下，立绘会根据当前皮肤自动切换（需有同名的立绘文件），如果没有同名立绘文件，立绘处会放置当前人物皮肤作为立绘，补充立绘文件的命名方式参考曹金玉，需要皮肤文件和立绘文件的命名一致才可切换成功。</li>";
                            str += "<li>UI补丁内置两套主题“十周年”及“手杀”，可随时切换无需重启，并支持自定义主题，自定义主题的对话框底背景图命名为“dialog.png”，放在扩展目录image/effect/文件夹下，对话框内容左右及顶端留白可在“UI补丁两侧间距”进行调整</li>";
                            str += "</ol>";
                            node.innerHTML = str;
                    }
                },
            },
            yuqiTheme: {
                'name': 'UI主题',
                intro: '设置对话框主题',
                init: 'tenth',
                item: {
                    'tenth': '十周年',
                    'hand': '手杀',
                    'dialog': '自定义',
                },
                visualMenu: function (node, link, name, config) {
                    node.style.backgroundSize = '100% 100%';
                    switch (link) {
                        case 'tenth': node.className = 'button character'; node.setBackgroundImage('extension/Thunder/image/effect/dialog1.png'); break;
                        case 'hand': node.className = 'button character'; node.setBackgroundImage('extension/Thunder/image/effect/dialog2.png'); break;
                        default: node.className = 'button character'; node.setBackgroundImage('extension/Thunder/image/effect/dialog.png'); break;
                    }
                },
                onclick: function (layout) {
                    switch (layout) {
                        case 'tenth': {
                            lib.config['extension_Thunder_UItopblank'] = 1;
                            lib.config['extension_Thunder_UIsidesblank'] = 7;
                        } break;
                        case 'hand': {
                            lib.config['extension_Thunder_UItopblank'] = 2;
                            lib.config['extension_Thunder_UIsidesblank'] = 9;
                        } break;
                    }
                    game.saveConfig('extension_Thunder_UItopblank', lib.config['extension_Thunder_UItopblank']);
                    game.saveConfig('extension_Thunder_UIsidesblank', lib.config['extension_Thunder_UIsidesblank']);
                    game.saveConfig('extension_Thunder_yuqiTheme', layout);
                },
            },
            "UItopblank": {
                "name": "UI补丁顶部间距", init: "1", item: {
                    "0": "0",
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5",
                    "6": "6",
                    "7": "7",
                    "8": "8",
                    "9": "9",
                },
            },
            "UIsidesblank": {
                "name": "UI补丁两侧间距", init: "7", item: {
                    "0": "0",
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5",
                    "6": "6",
                    "7": "7",
                    "8": "8",
                    "9": "9",
                },
            },
            "jinyu": { "name": "曹金玉标记补丁", "intro": "曹金玉标记转人话", "init": true },
            "zhaoxiang": { "name": "赵元帅补丁", "intro": "赵元帅还原UI", "init": true },
            "fengexian2": { name: "———— 其他设置 ————", clear: true },
            "kebineng": {
                "name": "打开武将轲比能", "init": false,
                onclick: function (bool) {
                    game.saveConfig('extension_Thunder_kebineng', bool);
                    if (bool) {
                        alert('武将轲比能修改了本体的一些UI函数，可能会与其他修改了UI函数的扩展冲突，如果打开后出现报错请重新关闭武将轲比能！');
                    }
                }
            },
            "guanning": { "name": "技能全扩版管宁", "intro": "打开此选项后，管宁技能库扩充至全扩", "init": false },
            "jiufatext": { "name": "神姜维九伐标记改文字", "init": true },
        },
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {},
                list: [],
            },
            skill: {
                skill: {},
                translate: {},
            },
            intro: "<p style=\"color:rgb(255,128,64); font-size:12px; line-height:14px; text-shadow: 0 0 2px black;\">版本号：3.26</br>    欢迎加入Thunder扩展交流群一起探讨武将、聊天吹水。</p>",
            author: "雷",
            diskURL: "",
            forumURL: "",
            version: "3.26",
            changeLog: `<span class="bluetext">2022/09/27日更新</span><br>
                       -修复武将<span class="bluetext">【界SP太史慈】【全惠解】【黄权】</span>结算bug<br>
                       -新增变身武将UI（仅影响全惠解和赵襄）<br>
                       `,
        },
        files: { "character": [], "card": [], "skill": [] }
    }
})