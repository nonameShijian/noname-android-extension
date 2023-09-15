/// <reference path="./typings/index.d.ts" />
/// <reference path="./typings/highlight.d.ts" />
/// <reference path="../../typings/index.d.ts" />
"use strict";
game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "全能搜索",
        editable: false,
        // @ts-ignore
        content: function (config, pack) {
            /********************************************************************************************* */
            //向【诗笺】致敬，斗胆增加一点功能。下面是更改的内容。

            get.qnssAllDerivation = function (skill, step) {
                step = step || 0;
                if (step >= 2) return [];
                const skillobj = lib.skill[skill];
                if (!skillobj) return [];
                let subSkillList = [];
                //添加技能中derivation,group和global中的技能
                const arr = ['derivation', 'group', 'global'];
                arr.forEach((i) => {
                    if (skillobj[i]) {
                        if (typeof skillobj[i] == 'string') {
                            subSkillList.add(skillobj[i]);
                        } else if (Array.isArray(skillobj[i])) {
                            subSkillList.addArray(skillobj[i]);
                        }
                    }
                });

                const reg = /(addTempSkill|addSkill|addAdditionalSkill)\((['"])([\w]+)\2/g;
                let str = get.stringify(skillobj);
                for (let match of str.matchAll(reg)) {
                    if (match && match[3]) subSkillList.add(match[3]);
                }
                for (let s of subSkillList) {
                    subSkillList.addArray(get.qnssAllDerivation(s, step + 1));
                }
                return subSkillList;
            };

            /******************************************************************************************** */

            // 移除武将卡牌搜索器扩展
            // game.removeExtension("武将卡牌搜索器", false);

            let layoutPath = lib.assetURL + 'extension/全能搜索/';

            // 加入hljs
            lib.init.js(layoutPath, 'highlight.min', () => {
                window.hljs.configure({
                    // tabReplace: '	',
                    // useBR: true,
                    languages: ['javaScript'],
                });
                game.全能搜索_highlight = text => window.hljs.highlightAuto(text).value;
            }, () => { });

            // 加入分页插件
            lib.init.js(layoutPath, 'SimplePagination');

            //加入css
            lib.init.css(layoutPath, 'css/extension');
            ui.qnssEditorCss = lib.init.css(layoutPath, `css/${game.getExtensionConfig('全能搜索', 'css') ? game.getExtensionConfig('全能搜索', 'css').slice(0, -4) : 'vs2015.min'}`);

            const css = ['a11y-dark.min.css', 'an-old-hope.min.css', 'atom-one-dark.min.css', 'extension.css', 'felipec.min.css', 'gml.min.css', 'vs2015.min.css'];
            ui.qnssChangeEditorCss = (name) => {
                if (css.includes(`${name}.min.css`) || css.includes(name)) {
                    ui.qnssEditorCss && ui.qnssEditorCss.remove();
                    if (!name.endsWith('.min.css')) name = name + '.min.css';
                    ui.qnssEditorCss = lib.init.css(layoutPath, `css/${name.slice(0, -4)}`);
                }
            };

            // 设置全局Symbol,用于设置一个对象的描述
            window.qnssDescriptionSymbol = Symbol('description');
            // 设置全局Symbol,用于设置一个对象内，所有未设置描述的属性，添加一个默认的描述
            window.qnssKeySymbol = Symbol('key');
            // 设置全局的跳转搜索功能
            window.qnssSee = function (a) {
                _status.全能搜索_Searcher.tujianBegin(_status.全能搜索_Searcher.content, a ? a.innerText : undefined, false, true);
            };
            // 显示/关闭代码
            window.qnssShowCode = function (type) {
                if (type) {
                    // @ts-ignore
                    var display = this.nextElementSibling.style.display;
                    // @ts-ignore
                    this.nextElementSibling.style.display = (display == "none" ? "" : "none");
                    this.innerHTML = (display !== "none" ? `点击查看${type}代码` : `点击关闭${type}代码`);
                } else {
                    type = '技能';
                    // @ts-ignore
                    var display = this.parentNode.nextElementSibling.style.display;
                    // @ts-ignore
                    this.parentNode.nextElementSibling.style.display = (display == "none" ? "" : "none");
                    this.innerHTML = (display !== "none" ? `点击查看${type}代码` : `点击关闭${type}代码`);
                }
            };

            window.qnssPlayCardAudio = function (sex, cardName, nature) {
                let audioinfo = lib.card[cardName].audio;
                if (cardName == 'sha' && ['fire', 'thunder', 'ice'].includes(nature)) {
                    game.playAudio('card', sex, `sha_${nature}`);
                } else {
                    if (typeof audioinfo == 'string') {
                        if (audioinfo.indexOf('ext:') == 0) game.playAudio('..', 'extension', audioinfo.slice(4), `${cardName}_male`);
                        else game.playAudio('card', sex, audioinfo);
                    }
                    else {
                        game.playAudio('card', sex, cardName);
                    }
                }
            };

            window.qnssPlayDieAudio = function (charName) {
                let findInExt = false;
                // @ts-ignore
                Object.keys(lib.characterPack).forEach(key => {
                    // 扩展自带的武将包
                    if (key.includes("mode_extension_")) {
                        if (charName in lib.characterPack[key] && lib.character[charName] == lib.characterPack[key][charName]) {
                            // @ts-ignore
                            findInExt = key.slice(15);
                        }
                    }
                    // 扩展自定义的武将包
                    if (lib.config.extensions.includes(lib.translate[key + "_character_config"])) {
                        if (charName in lib.characterPack[key] && lib.character[charName] == lib.characterPack[key][charName]) {
                            // @ts-ignore
                            findInExt = lib.translate[key + "_character_config"];
                        }
                    }
                });
                if (findInExt) {
                    // @ts-ignore
                    game.playAudio("..", "extension", findInExt, charName, function () {
                        // @ts-ignore
                        window.qnssFindDieAudio(findInExt, charName)
                    });
                } else if (lib.character[charName] && lib.character[charName][4].contains("die_audio")) {
                    // @ts-ignore
                    game.playAudio("die", charName, function () {
                        game.alert("该武将没有阵亡语音");
                    });
                } else {
                    // @ts-ignore
                    game.playAudio("die", charName, function () {
                        // @ts-ignore
                        game.playAudio("die", charName.slice(charName.indexOf("_") + 1), function () {
                            game.alert("该武将没有阵亡语音");
                        });
                    });
                }
            };

            if (!('scrollBehavior' in document.documentElement.style)) {
                const Element = window.HTMLElement || window.Element;
                Object.defineProperty(Element.prototype, 'scrollTo', {
                    enumerable: false,
                    configurable: true,
                    get() {
                        return function () {
                            let left = 0;
                            let top = 0;
                            if (arguments.length > 1) {
                                left = arguments[0];
                                top = arguments[1];
                            } else {
                                left = arguments[0].left;
                                top = arguments[0].top;
                            }
                            this.scrollLeft = left;
                            this.scrollTop = top;
                        };
                    },
                    // @ts-ignore
                    set(v) { }
                });
            }

            if (!('includes' in Array.prototype)) {
                Object.defineProperty(Array.prototype, 'includes', {
                    enumerable: false,
                    configurable: true,
                    get() {
                        return Array.prototype.contains;
                    },
                    // @ts-ignore
                    set(v) { }
                });
            }

            if (!('allSettled' in Promise)) {
                Object.defineProperty(Promise, 'allSettled', {
                    enumerable: false,
                    configurable: true,
                    get() {
                        return function (arr) {
                            var P = this;
                            return new P(function (resolve, reject) {
                                if (Object.prototype.toString.call(arr) !== '[object Array]') {
                                    return reject(new TypeError(typeof arr + ' ' + arr +
                                        ' ' + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
                                }
                                var args = Array.prototype.slice.call(arr);
                                if (args.length === 0) return resolve([]);
                                var arrCount = args.length;

                                function resolvePromise(index, value) {
                                    if (typeof value === 'object') {
                                        var then = value.then;
                                        if (typeof then === 'function') {
                                            then.call(value, function (val) {
                                                args[index] = { status: 'fulfilled', value: val };
                                                if (--arrCount === 0) {
                                                    resolve(args);
                                                }
                                            }, function (e) {
                                                args[index] = { status: 'rejected', reason: e };
                                                if (--arrCount === 0) {
                                                    resolve(args);
                                                }
                                            })
                                        }
                                    }
                                }

                                for (var i = 0; i < args.length; i++) {
                                    resolvePromise(i, args[i]);
                                }
                            })
                        };
                    },
                    // @ts-ignore
                    set(v) { }
                });
            }

            window.qnssFindDieAudio = function (ext, charName) {
                if (lib.skill["_ansory@method_die.audio"]) {
                    const info = lib.character[charName];
                    if (info && Array.isArray(info[4])) {
                        const dieTags = info[4].filter(tag => /^die:/.test(tag));
                        if (dieTags.length > 0) {
                            const dieTag = dieTags[0];
                            const matchResult = dieTag.match(/^die:(?:ext:(.+?)\/)?(.+)$/);
                            if (matchResult != null) {
                                const extensionName = matchResult[1], path = matchResult[2];
                                if (extensionName) {
                                    game.playAudio("..", "extension", extensionName, path);
                                } else {
                                    game.playAudio("..", path);
                                }
                                return;
                            }
                        }
                    }
                }
                const r = new RegExp(`game.playAudio\\(['"]..['"],\\s*['"]extension['"],\\s*['"]` + ext + `\\S*['"],\\s*\\S+\\)`);
                const player = ui.create.player().init(charName);
                const dieAudioSkills = Object.keys(lib.skill).filter(v => {
                    if (!v.startsWith('_')) return false;
                    const info = lib.skill[v];
                    if (typeof info.trigger != 'object' || typeof info.content != 'function') return false;
                    for (const t in info.trigger) {
                        if (['global', 'player'].contains(t)) {
                            if (!Array.isArray(info.trigger[t])) info.trigger[t] = [info.trigger[t]];
                            if (!info.trigger[t].some(v => v.startsWith('die'))) return false;
                        }
                    }
                    if (typeof info.filter == 'function') {
                        try {
                            // @ts-ignore
                            if (info.filter({ player }, player) == false) return false;
                        } catch (e) {
                            return false;
                        }
                    }
                    if (r.test(info.content.toString()) == false) return false;
                    return true;
                });
                if (!dieAudioSkills.length) {
                    game.alert("该武将没有阵亡语音");
                } else {
                    const dieAudioSkillsPromise = dieAudioSkills.map(skill => {
                        return new Promise((resolve, reject) => {
                            // @ts-ignore
                            const toString = lib.skill[skill].content.toString();
                            const match = toString.match(r);
                            if (!match) reject();
                            // @ts-ignore
                            let evalArgs = match[0];
                            evalArgs = evalArgs.slice(0, evalArgs.lastIndexOf(',') + 1) + '\'' + player.name + '\'' + ', (e) => { reject(e); });';
                            // console.log(evalArgs);
                            eval(evalArgs);
                            // audio的onerror是异步触发的
                            setTimeout(() => {
                                resolve(null);
                            }, 100);
                        });
                    });
                    Promise.allSettled(dieAudioSkillsPromise).then(result => {
                        if (result.every(v => v.status == 'rejected')) {
                            game.alert("该武将没有阵亡语音");
                        }
                    });
                }
            };

            if (!window.qnssGame) {
                Object.defineProperty(window, 'qnssGame', {
                    enumerable: false,
                    configurable: true,
                    get() {
                        return game;
                    },
                    // @ts-ignore
                    set(v) { }
                });
            }

            // 引入全局api描述
            // 创建Promise
            const importDescription = function (path, file) {
                return new Promise(resolve => {
                    // 引入js
                    lib.init.js(path, file, () => {
                        delete lib.imported.libDescription;
                        resolve(null);
                        // @ts-ignore
                    }, resolve);
                });
            };

            importDescription(layoutPath, 'globalDescription').then(e => {
                if (e) return;
                // 引入扩展添加api描述
                for (const extName of lib.config.extensions) {
                    if (!game.getExtensionConfig(extName, 'enable')) continue;
                    importDescription(`${lib.assetURL}extension/${extName}/`, 'description');
                }
                const exts = lib.config.extensions.filter(extName => game.getExtensionConfig(extName, 'enable')).map(extName => importDescription(`${lib.assetURL}extension/${extName}/`, 'description'));
                Promise.allSettled(exts).then(() => {
                    console.log('importDescription finish');
                }).catch(console.error);
            }).catch(console.error);

            /** 
             * @description 双击复制
             * @param target 要复制的目标
             * */
            game.全能搜索_copy = function (target) {
                function error() {
                    // target可写
                    target.setAttribute('contenteditable', true);
                    // 自动选中文字
                    // @ts-ignore
                    if (document.body.createTextRange) {
                        // @ts-ignore
                        const range = document.body.createTextRange();
                        range.moveToElementText(target);
                        range.select();
                    } else if (window.getSelection) {
                        const selection = window.getSelection();
                        const range = document.createRange();
                        range.selectNodeContents(target);
                        // @ts-ignore
                        selection.removeAllRanges();
                        // @ts-ignore
                        selection.addRange(range);
                    } else {
                        // 选中失败
                        return;
                    }
                    typeof target.focus == 'function' && target.focus();
                    let contextmenuEvent = new Event("contextmenu", { "bubbles": false, "cancelable": false });
                    target.dispatchEvent(contextmenuEvent);
                }
                if (!target) return;
                let text;
                if (typeof target == "string") {
                    text = target;
                } else {
                    text = (target.toString() == "[object Text]" ? target.textContent : target.innerText);
                }
                if (!text) return;
                if (!navigator.clipboard) {
                    //alert('此版本不支持写入剪切板');
                    return error();
                };
                // @ts-ignore
                navigator.clipboard.writeText(text).then(e => {
                    game.alert("复制成功！\n" + text);
                }).catch(error);
            };

            game.全能搜索_createWaveText = (text, style) => {
                const div = document.createElement('div');
                div.classList.add('qnssWave')
                div.innerText = text;
                div.dataset.text = text;
                if (typeof style == 'object') {
                    div.css(style);
                }
                return div;
            };

            const qnssVariable = { player: null, card: null, lib: lib, game: game, ui: ui, get: get, ai: ai, _status: _status };

            /** 搜索器类 */
            class Searcher {
                // [Symbol.toStringTag] = "Searcher"
                //构造方法
                constructor(target) {
                    /** @type {string} 原先的背景图片 **/
                    this.Image = ui.background.style.backgroundImage;

                    if (game.getExtensionConfig('全能搜索', 'backgroundImage') !== 'none') {
                        if (game.getExtensionConfig('全能搜索', 'backgroundImage') == '随机') {
                            ui.background.setBackgroundImage("extension/全能搜索/img/" + ['相爱相杀', 'picture'].randomGet() + ".png");
                        } else {
                            ui.background.setBackgroundImage("extension/全能搜索/img/" + game.getExtensionConfig('全能搜索', 'backgroundImage'));
                        }
                    }

                    // 暂时不会隐藏canvas
                    // this.canvas = Array.from(document.getElementsByTagName('canvas'));

                    /** @type {HTMLDivElement} */
                    this.manual = ui.create.div('.Searcher');
                    /** @type {HTMLDivElement} */
                    this.menu = ui.create.div('.menu', this.manual);
                    /** @type {HTMLInputElement} */
                    this.input = this.menu.appendChild(document.createElement('input'));

                    this.input.addEventListener('animationend', function (e) {
                        if (e.animationName == 'qnssWrong') this.classList.remove('qnssWrong');
                    });

                    /**
                     * @description 搜索历史
                     * @type {string[]}
                     *  */
                    this.searchList = game.getExtensionConfig('全能搜索', 'searchList') || [];
                    /**
                     * @description 搜索历史, 用于和武将界面联动。该config不随“清空历史”而清空
                     * @type {string[]}
                     *  */
                    this.tsymqSearchList = game.getExtensionConfig('全能搜索', 'tsymqSearchList') || [];
                    /** @type {HTMLUListElement} */
                    this.ul = this.menu.appendChild(document.createElement('ul'));

                    this.hoverLi = null;
                    this.search = ui.create.div('.search', this.menu, '搜索');
                    this.clear = ui.create.div('.clear', this.menu, '清空历史', this.clearDataList.bind(this));
                    this.close = ui.create.div('.close', this.menu, '关闭');
                    this.oldDialog = _status.event.dialog || ui.dialog;
                    this.dialog = ui.create.dialog();
                    // 防止国战dialog.filterButton报错
                    ui.dialog = this.oldDialog;
                    this.content = this.manual.appendChild(this.dialog);
                    // 选择搜索方式
                    this.searcherModule = game.getExtensionConfig('全能搜索', 'searcherModule') || ['findCharacter', 'findCard', 'findSkill', 'findCode'];
                    game.saveExtensionConfig('全能搜索', 'searcherModule', this.searcherModule);
                    this.chooseModuleDiv = ui.create.div('.chooseModule', this.menu, '搜索模式', function (e) {
                        // 解决chrome109废弃event.path的问题
                        if (e.target != this) return;
                        this.firstElementChild.classList.toggle('hover');
                    });

                    /** @type { HTMLUListElement }  */
                    const cm = ui.create.node('ul.list', this.chooseModuleDiv);
                    for (const arr of [['findCharacter', '搜索武将'], ['findCard', '搜索卡牌'], ['findSkill', '搜索技能'], ['findCode', '搜索代码']]) {
                        const key = arr[0];
                        const value = arr[1];
                        const li = ui.create.node('li');
                        cm.appendChild(li);
                        const input = ui.create.node('input');
                        input.type = 'checkbox';
                        input.value = key;
                        input.checked = this.searcherModule.contains(key);
                        input.addEventListener('change', () => {
                            if (input.checked) {
                                this.searcherModule.add(key);
                            } else {
                                this.searcherModule.remove(key);
                            }
                            game.saveExtensionConfig('全能搜索', 'searcherModule', this.searcherModule);
                        });
                        this[key + 'Input'] = input;
                        li.appendChild(input);
                        li.appendChild(ui.create.node('span', value));
                    }

                    // 暂停游戏 
                    game.pause2();
                    // 复制时会触发window.onkeydown
                    this.keydownFun = window.onkeydown;
                    window.onkeydown = null;

                    // this.input.setAttribute('list', '全能搜索_datalist');
                    this.ul.setAttribute('id', '全能搜索_datalist');

                    //主要函数放在window里
                    lib.cheat.i();

                    /** 提示这些 */
                    let alwaysShow = this.searchList.slice(0).sort();
                    this.alwaysShow = alwaysShow;

                    /** 显示ul */
                    let showUl = () => {
                        if (this.ul.hasChildNodes()) {
                            this.ul.style.display = '';
                        }
                    };

                    let getDescription = (result, descriptionArray, data) => {
                        if (get.objtype(result) == 'object') {
                            // @ts-ignore
                            return result.description || result[qnssDescriptionSymbol];
                        } else if (result && result.description) {
                            return result.description;
                        } else if (typeof result == 'string') {
                            return result;
                        } else {
                            const last = descriptionArray.slice(0, -1).reduce((previous, current) => {
                                if (previous && previous[current]) {
                                    return previous[current];
                                }
                            }, lib.description);
                            // @ts-ignore
                            if (last && last[qnssKeySymbol]) {
                                // @ts-ignore
                                if (typeof last[qnssKeySymbol] == 'string') {
                                    // @ts-ignore
                                    return last[qnssKeySymbol];
                                }
                                // @ts-ignore
                                else if (typeof last[qnssKeySymbol] == 'function') {
                                    // @ts-ignore
                                    return last[qnssKeySymbol](data);
                                }
                            }
                        }
                    }

                    let createLi = (data) => {
                        let li = document.createElement('li');
                        li.innerText = data;

                        // 去掉最后一个元素的数组
                        const descriptionArray = data.split('.');
                        // 结果变量
                        const result = descriptionArray.reduce((previous, current) => {
                            if (previous && previous[current]) {
                                return previous[current];
                            }
                        }, lib.description);

                        const description = getDescription(result, descriptionArray, data);
                        if (description) {
                            // 添加注释
                            let descriptionDiv = document.createElement('div');
                            descriptionDiv.className = 'description';
                            //console.log({ description });
                            // @ts-ignore
                            descriptionDiv.description = description;
                            // 单机图标或者右键/长按
                            descriptionDiv.onclick = li.oncontextmenu = (e) => {
                                e.stopPropagation();
                                li.dispatchEvent(new CustomEvent('onmouseover'));
                            }
                            li.appendChild(descriptionDiv);
                        }

                        li.addEventListener('click', () => {
                            this.input.value = li.innerText;
                            this.input.dispatchEvent(new CustomEvent('changeInput'));
                            this.ul.style.display = 'none';
                        });

                        li.addEventListener('mouseover', (e) => {
                            if (e.clientX && e.clientY) {
                                const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
                                // @ts-ignore
                                if (hoverElement == this.ul.descriptionDiv) return;
                            }
                            if (this.hoverLi == li) return;
                            else if (this.hoverLi) {
                                // @ts-ignore
                                if (this.ul.descriptionDiv) {
                                    // @ts-ignore
                                    this.ul.descriptionDiv.remove();
                                    // @ts-ignore
                                    delete this.ul.descriptionDiv;
                                }
                                this.hoverLi.classList.remove('hover');
                            }
                            this.hoverLi = li;
                            li.classList.add('hover');
                            const descriptionDiv = li.querySelector('.description');
                            if (descriptionDiv) {
                                // @ts-ignore
                                const description = descriptionDiv.description;
                                const css = li.getBoundingClientRect();
                                const ulCss = this.ul.getBoundingClientRect();
                                /**@type DOMRect */
                                const uiCss = ui.window.getBoundingClientRect();

                                let showDescriptionDiv = document.createElement('div');
                                showDescriptionDiv.className = 'showDescription';
                                showDescriptionDiv.innerHTML = `
									<span style="margin: 15px;">${li.innerText}:</span>
									<br>
									<span style="margin: 15px;">${description}</span>
								`;
                                // @ts-ignore
                                showDescriptionDiv.li = li;
                                showDescriptionDiv.style.position = 'absolute';
                                showDescriptionDiv.style.zIndex = '1001';
                                this.manual.appendChild(showDescriptionDiv);

                                const divCss = showDescriptionDiv.getBoundingClientRect();

                                // 左右边框共占2px
                                // 如果宽度足够
                                if (css.right + divCss.width + 2 <= uiCss.width) {
                                    showDescriptionDiv.style.top = css.top + 'px';
                                    showDescriptionDiv.style.left = ulCss.right + 1 + 'px';
                                } else {
                                    // 如果左边宽度够放
                                    if (css.left > divCss.width + 2) {
                                        showDescriptionDiv.style.top = css.top + 'px';
                                        showDescriptionDiv.style.left = ulCss.left - divCss.width - 1 + 'px';
                                    } else {
                                        // 不能的话，只能放右边了, 然后高度下调
                                        showDescriptionDiv.style.top = css.top + 50 + 'px';
                                        showDescriptionDiv.style.left = uiCss.width - divCss.width - 7 + 'px';
                                    }
                                }
                                // @ts-ignore
                                this.ul.descriptionDiv = showDescriptionDiv;
                            }
                        });

                        li.addEventListener('mouseleave', (e) => {
                            // @ts-ignore
                            if (this.ul.descriptionDiv) {
                                if (e.clientX && e.clientY) {
                                    const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
                                    // @ts-ignore
                                    if (hoverElement == this.ul.descriptionDiv) return;
                                }
                                // @ts-ignore
                                this.ul.descriptionDiv.remove();
                                // @ts-ignore
                                delete this.ul.descriptionDiv;
                            }
                            if (this.hoverLi == li) {
                                this.hoverLi = null;
                            }
                            li.classList.remove('hover');
                        });

                        return li;
                    }

                    /** 重新设置ul的子元素 */
                    let updateDescription = () => {
                        while (this.ul.hasChildNodes()) {
                            // @ts-ignore
                            this.ul.removeChild(this.ul.firstChild);
                        }
                        if (!this.input.value) return;
                        this.alwaysShow.sort();
                        for (let data of this.alwaysShow.filter(data => data.startsWith(this.input.value) && this.input.value != data)) {
                            if (!this.searchList.contains(data) && !lib.skill[data]) {
                                continue;
                            }
                            this.ul.appendChild(createLi(data));
                        }
                        showUl();
                    }

                    /** 添加提示 */
                    let addOptions = (value, array) => {
                        for (const key of array) {
                            // 最多显示30条信息
                            if (this.ul.childElementCount >= 30) return;
                            if (this.searchList.contains(value + key)) {
                                continue;
                            } else if (!this.input.value) {
                                continue;
                            } else if (!(value + key).startsWith(this.input.value)) {
                                continue;
                            }
                            if (alwaysShow.add(value + key) != false) {
                                alwaysShow.sort();
                                const li = createLi(value + key);
                                let index = alwaysShow.indexOf(value + key);
                                this.ul.insertBefore(li, this.ul.childNodes[index]);
                                showUl();
                            }
                        }
                    };

                    /** 清除提示 */
                    let clearOptions = () => {
                        alwaysShow = this.searchList.slice(0).sort();
                        updateDescription();
                    };

                    this.clearOptions = clearOptions;

                    // 初始化
                    updateDescription();
                    this.ul.style.display = 'none';

                    // 选择一个下拉框的值后，清空
                    this.input.addEventListener('changeInput', () => {
                        // @ts-ignore
                        if (this.ul.descriptionDiv) {
                            // @ts-ignore
                            this.ul.descriptionDiv.remove();
                            // @ts-ignore
                            delete this.ul.descriptionDiv;
                        }
                        clearOptions();
                    });

                    //获得焦点
                    this.input.onfocus = showUl;

                    //按下回车键开始搜索
                    //并且停止冒泡
                    this.input.onkeyup = e => {
                        e.stopPropagation();
                        if (e.key == 'Enter') {
                            //回车
                            this.ul.style.display = 'none';
                            if (this.hoverLi) {
                                this.input.value = this.hoverLi.innerText;
                                delete this.hoverLi;
                                this.input.dispatchEvent(new CustomEvent('changeInput'));
                                this.ul.style.display = 'none';
                                while (this.ul.hasChildNodes()) {
                                    // @ts-ignore
                                    this.ul.removeChild(this.ul.firstChild);
                                }
                            }
                            // @ts-ignore
                            if (this.ul.descriptionDiv) {
                                // @ts-ignore
                                this.ul.descriptionDiv.remove();
                                // @ts-ignore
                                delete this.ul.descriptionDiv;
                            }
                            this.tujianBegin(this.content, this.input.value, true);
                        } else if (e.key == 'ArrowUp') {
                            //上一个
                            if (!this.ul.hasChildNodes()) return;
                            e.preventDefault();
                            if (!this.hoverLi || !this.hoverLi.previousSibling) {
                                this.hoverLi && this.hoverLi.classList.remove('hover');
                                this.hoverLi = this.ul.lastChild;
                                this.hoverLi.classList.add('hover');
                            } else {
                                this.hoverLi.classList.remove('hover');
                                this.hoverLi = this.hoverLi.previousSibling;
                                this.hoverLi.classList.add('hover');
                            }
                            if (this.hoverLi) {
                                this.hoverLi.dispatchEvent(new CustomEvent('mouseover'));
                            }
                            this.input.setSelectionRange(-1, -1);
                        } else if (e.key == 'ArrowDown') {
                            //下一个
                            if (!this.ul.hasChildNodes()) return;
                            e.preventDefault();
                            if (!this.hoverLi || !this.hoverLi.nextSibling) {
                                this.hoverLi && this.hoverLi.classList.remove('hover');
                                this.hoverLi = this.ul.firstChild;
                                this.hoverLi.classList.add('hover');
                            } else {
                                this.hoverLi.classList.remove('hover');
                                this.hoverLi = this.hoverLi.nextSibling;
                                this.hoverLi.classList.add('hover');
                            }
                            if (this.hoverLi) {
                                this.hoverLi.dispatchEvent(new CustomEvent('mouseover'));
                            }
                            this.input.setSelectionRange(-1, -1);
                        } else if (e.key == 'Tab') {
                            if (!this.ul.hasChildNodes()) return;
                            const li = this.hoverLi || this.ul.firstChild;
                            this.input.dispatchEvent(new CustomEvent('changeInput'));
                            this.input.value = li.innerText;
                            if (this.hoverLi) {
                                delete this.hoverLi;
                            }
                            this.ul.style.display = 'none';
                            while (this.ul.hasChildNodes()) {
                                // @ts-ignore
                                this.ul.removeChild(this.ul.firstChild);
                            }
                        } else {
                            // 关于搜索代码的判断
                            const value = this.input.value;
                            const variableKeys = Object.keys(qnssVariable);
                            let key;
                            if (value) {
                                // 由于水乎改了array.find,只能用别的办法写
                                /*
                                for (const variable of variableKeys) {
                                    if (value.startsWith(variable + '.') || variable.startsWith(value)) {
                                        key = variable;
                                        break;
                                    }
                                }
                                */
                                // 后面苏婆把array.find改回来了
                                key = variableKeys.find(current => {
                                    return value.startsWith(current + '.') || current.startsWith(value)
                                });
                            }
                            if (!key) {
                                clearOptions();
                                if (this.input.value.length > 0) {
                                    for (const item of this.searchList) {
                                        if (item.startsWith(this.input.value) && this.input.value != item) {
                                            this.alwaysShow.add(item);
                                            break;
                                        }
                                    }

                                    // 添加技能id的提示
                                    const skillNames = Object.keys(lib.skill).filter(key => typeof lib.skill[key] == 'object' && key.startsWith(this.input.value) && this.input.value != key);
                                    skillNames.forEach(key => {
                                        this.alwaysShow.add(key);
                                    });
                                }
                                return updateDescription();
                            }
                            if (!qnssVariable.player && !qnssVariable.card) {
                                // @ts-ignore
                                qnssVariable.player = ui.create.player().init('sunce');
                                // @ts-ignore
                                qnssVariable.card = game.createCard('sha');
                            }
                            // 清空ul
                            clearOptions();
                            if (value === key + '.') {
                                // 结果添加到ul
                                addOptions(value, Object.keys(qnssVariable[key]).sort());
                            } else {
                                // 去掉最后一个元素的数组
                                const exceptLast = value.split('.').slice(0, -1);
                                // 只取最后一个 . 之前的字符串
                                const str = exceptLast.join('.');
                                // 结果变量
                                const result = exceptLast.reduce((previous, current) => {
                                    if (previous && previous[current]) {
                                        return previous[current];
                                    }
                                }, qnssVariable);
                                if (result) {
                                    const keys = Object.keys(result);
                                    // 最后一个 . 之后的字符串
                                    const last = value.split('.').slice(-1);
                                    // 结果添加到ul
                                    // @ts-ignore
                                    addOptions(str ? (str + '.') : '', keys.filter(i => i.startsWith(last)).sort());
                                }
                            }
                        }
                    };

                    // 使tab补全而不移动焦点
                    this.input.onkeydown = e => {
                        e.stopPropagation();
                        if (e.code == "Tab") {
                            e.returnValue = false;

                        }
                    };

                    this.content.classList.remove('nobutton');
                    this.content.classList.add('content');
                    this.content.classList.add('fixed');
                    this.content.style.transform = '';
                    this.content.style.opacity = '';
                    this.content.style.height = '';

                    //搜索按钮
                    this.search.addEventListener('click', () => {
                        this.tujianBegin(this.content, this.input.value, true);
                        // this.input.value = "";
                        this.ul.style.display = 'none';
                    });

                    this.close.addEventListener('click', () => this.closeDialog());

                    ui.arena.classList.remove('menupaused');
                    ui.arena.hide();
                    ui.system.hide();
                    ui.menuContainer && ui.menuContainer.hide();
                    ui.window.appendChild(this.manual);

                    /** @type { DocumentFragment[] } */
                    this.fragmentList = [];
                    /** @type { Function[] [] } 无名杀的武将转换为字符串太费劲，不如变成函数 */
                    this.fragmentDataList = [
                        // [fun1, fun2]
                    ];

                    /** @type { HTMLDivElement } */
                    this.page = ui.create.div('.pagination', this.dialog.content);

                    // @ts-ignore
                    const slp = new SimplePagination(1);
                    this.slp = slp;
                    slp.init({
                        container: '.pagination',
                        onPageChange: state => {
                            this.updatePage(state.pageNumber);
                        }
                    });

                    // 定义一个方法用来渲染容器
                    this.updatePage = page => {
                        this.clearDialog(this.dialog);
                        // console.log(this.fragmentDataList);
                        const fragment = this.fragmentList[page - 1];
                        // @ts-ignore
                        if (!fragment.loadDom) {
                            // @ts-ignore
                            fragment.loadDom = true;
                            const data = this.fragmentDataList[page - 1];
                            data.forEach(fun => fun(fragment));
                        }
                        this.dialog.content.appendChild(fragment.cloneNode(true));
                        // @ts-ignore
                        if (slp.state.totalPageCount != this.fragmentList.length) {
                            slp.setTotalPageCount(this.fragmentList.length);
                        }
                    }

                    if (typeof target == 'string') {
                        this.input.value = target;
                        this.search.click();
                    }
                }
                /** 关闭dialog */
                closeDialog() {
                    //不是开发者模式删除全局变量
                    if (!lib.config.dev) {
                        // @ts-ignore
                        delete window.cheat;
                        // @ts-ignore
                        delete window.game;
                        // @ts-ignore
                        delete window.ui;
                        // @ts-ignore
                        delete window.get;
                        // @ts-ignore
                        delete window.ai;
                        // @ts-ignore
                        delete window.lib;
                        // @ts-ignore
                        delete window._status;
                    }
                    this.manual.remove();
                    ui.arena.show();
                    ui.system.show();
                    ui.background.style.backgroundImage = this.Image;
                    ui.arena.classList.add('menupaused');
                    ui.menuContainer.show();
                    // ui.dialog = this.oldDialog;
                    if (ui.dialog) ui.dialog.show();
                    _status.全能搜索_Searcher = null;
                    window.onkeydown = this.keydownFun;
                    lib.qnssOnClose.forEach(fun => {
                        fun();
                    });
                }
                /** 清除dialog内容 */
                clearDialog(dialog) {
                    dialog.content.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    Array.from(dialog.content.childNodes)
                        .filter(v => v != this.page)
                        .forEach(e => dialog.content.removeChild(e));
                }
                /** 寻找角色 */
                findCharacter(result) {
                    console.time('findCharacter');
                    /** 
                     * @type { ({ packName: string, packTranslate: string, characterName: string, characterData: HeroData })[] }
                     */
                    let name = [];
                    for (const packName in lib.characterPack) {
                        for (const characterName in lib.characterPack[packName]) {
                            // 没有翻译的武将不显示
                            if (typeof lib.translate[characterName] != 'string') continue;
                            /** 
                             * 武将信息
                             * @type { HeroData } 
                             */
                            const characterData = lib.characterPack[packName][characterName];
                            // 如果result是中文
                            if (lib.translate[characterName].includes(result)) {
                                name.push({
                                    packName,
                                    packTranslate: lib.translate[packName + '_character_config'],
                                    characterName,
                                    characterData
                                });
                            }
                            // 模糊搜索 (例子: 搜索'lidian'显示're_lidian')
                            // endsWith也包括了全等
                            else if (characterName.endsWith(result)) {
                                name.push({
                                    packName,
                                    packTranslate: lib.translate[packName + '_character_config'],
                                    characterName,
                                    characterData
                                });
                            }
                        }
                    }
                    (function () {
                        if (!name.length) {
                            const reg = /武将(\d+)-(\d+)/g
                            const match = reg.exec(result)
                            if (!match) return
                            const start = parseInt(match[1])
                            const end = parseInt(match[2])
                            let packName
                            let characterName
                            let characterData
                            let packTranslate
                            const maxLength = Object.keys(lib.character).length
                            if (start <= end && start > 0) {

                                let list = Object.keys(lib.character).slice(start - 1, Math.min(end, maxLength))
                                for (let j of list) {
                                    for (let packname in lib.characterPack) {
                                        if (j in lib.characterPack[packname]) {
                                            packName = packname
                                            packTranslate = lib.translate[packName + '_character_config']
                                            break;
                                        }
                                    }
                                    name.push({
                                        characterName: j,
                                        // @ts-ignore
                                        packName: packName,
                                        characterData: lib.character[j],
                                        // @ts-ignore
                                        packTranslate

                                    })
                                }
                                game.alert(`共有${maxLength}个武将，第${start}个到第${end}个`)
                            }
                        }
                    })();

                    if (name.length == 0) {
                        console.timeEnd('findCharacter');
                        return false;
                    }

                    let lastFragment = document.createDocumentFragment();
                    this.fragmentList.push(lastFragment);
                    this.fragmentDataList.push([]);

                    const qnssCaption = ui.create.div('.caption.qnssCaption');
                    lastFragment.appendChild(qnssCaption);

                    qnssCaption.appendChild(game.全能搜索_createWaveText('武将搜索结果'));

                    /*
                    const content = this.dialog.content;
                    qnssCaption.appendChild(ui.create.div(hide ? '.qnssArrowDown' : '.qnssArrowUp').listen(function() {
                        const show = this.classList.contains('qnssArrowDown');

                        this.classList.toggle('qnssArrowUp');
                        this.classList.toggle('qnssArrowDown');

                        const captionList = Array.from(document.querySelectorAll('.caption.qnssCaption')).filter(v => v != this.parentElement);
                        const child = Array.from(content.childNodes);
                        // @ts-ignore
                        const begin = child.indexOf(this.parentElement);
                        const endList = captionList.map(v => child.indexOf(v)).filter(v => v > begin);
                        const end = endList.length == 0 ? child.length : Math.min.apply(null, endList);
                        child.forEach((v, i) => {
                            if (i > begin && i < end) {
                                 // @ts-ignore
                                 v.style.display = (show ? '' : 'none');
                            }
                        });
                    }));
                    */

                    for (const data of name) {
                        let character = data.characterData;
                        /** 展示的技能html字符串 */
                        let skillstr = '';
                        /** 角色技能数组 */
                        let skills = character[3];
                        /** 角色id */
                        let charName = data.characterName;
                        /** 展示的衍生技能html字符串 */
                        let skillDerivationstr = '';
                        /** 衍生技能数组 */
                        let skillDerivation = [];

                        for (const skill of skills) {
                            if (!lib.skill[skill]) continue;
                            // 衍生技
                            // let derivation = lib.skill[skill].derivation;
                            let derivation = get.qnssAllDerivation(skill);

                            if (derivation) {
                                if (Array.isArray(derivation)) {
                                    skillDerivation.addArray(derivation);
                                } else if (typeof derivation == 'string') {
                                    skillDerivation.add(derivation);
                                }
                            }
                            // 添加字符串
                            if (lib.translate[skill]) {
                                skillstr +=
                                    `<li>
                                        <font color="21ffd8" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">[ ${lib.translate[skill]} ]</font>
                                        <font color=6df95b>[</font>
                                        <font color=6df95b>${skill}</font>
                                        <font color=6df95b>]</font>
                                        </br>

                                        <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">技能描述&nbsp</span><span>${(lib.translate[skill + '_info'] || '无技能描述').replace(/<\/li>/g, '').split('<li>').map((v, i) => i == 0 ? v : ('•' + v)).join('<br/>')}</span>
                                        </br>

                                        <span class="bluetext">技能语音&nbsp</span>
                                        <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${skill}", {name:"${charName}"}, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' />
                                        </br>

                                        <span class="bluetext">技能代码&nbsp</span>
                                        <a onclick='window.qnssShowCode.call(this)'>点击查看技能代码</a>
                                    </li>

                                    <li style="display: none; list-style-type: none;">
                                        <font color="21ffd8">[ ${lib.translate[skill]} ] </font>技能代码：</br>
                                        <pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[skill]))}</pre>
                                    </li>`;
                            }
                        }

                        for (const derivation of skillDerivation) {
                            skillDerivationstr +=
                                `<li>
                                    <font color="21ffd8" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">[ ${lib.translate[derivation]} ]</font>
                                    <font color=6df95b>[</font>
                                    <font color=6df95b>${derivation}</font>
                                    <font color=6df95b>]</font></br>
                                    <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">技能描述&nbsp</span><span>${(lib.translate[derivation + '_info'] || '无').replace(/<\/li>/g, '').split('<li>').map((v, i) => i == 0 ? v : ('•' + v)).join('<br/>')}</span></br>
                                    <span class="bluetext">技能语音&nbsp</span>
                                    <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${derivation}", {name:"${charName}"}, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
                                    <span class="bluetext">技能代码&nbsp</span>
                                    <a onclick='window.qnssShowCode.call(this)'>点击查看技能代码</a>
                                </li>

                                <li style="display: none; list-style-type: none;">
                                    <font color="21ffd8">[ ${lib.translate[derivation]} ] </font>技能代码：</br>
                                    <pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[derivation]))}</pre>
                                </li>`;
                        }

                        /*this.dialog.addSmall([
                            [charName], 'character'
                        ]);*/

                        this.fragmentDataList[this.fragmentList.length - 1].push((lastFragment) => {
                            const buttons = ui.create.div('.buttons');
                            buttons.classList.add('smallzoom');
                            this.dialog.buttons =
                                this.dialog.buttons.concat(
                                    ui.create.buttons([charName], 'character', buttons, false)
                                );

                            lastFragment.appendChild(buttons);

                            const caption = ui.create.div('.caption');

                            const d = ui.create.div(ui.create.div(ui.create.div('.text.center', caption)), {
                                display: 'block',
                                left: 'auto',
                                textAlign: 'left',
                                fontSize: '20px'
                            });

                            d.insertAdjacentHTML('afterbegin', `
                                </br>
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling)">武将信息&nbsp</span>
                                <span>${get.characterIntro(charName)}</span>
                                </br>

                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling.nextElementSibling)">所在武将包&nbsp</span>
                                <span>${data.packTranslate}</span>
                                <font color=6df95b>[</font>
                                <font color=6df95b>${data.packName}</font>
                                <font color=6df95b>]</font>
                                </br>
                                
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">武将名称&nbsp</span>
                                    ${lib.translate[charName]}
                                    <font color=6df95b>[</font>
                                    <font color=6df95b>${charName}</font>
                                    <font color=6df95b>]</font>
                                </br>
                                
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling)">武将称号&nbsp</span>
                                <span>${get.colorspan(lib.characterTitle[charName] || "暂无称号")}</span>
                                </br>

                                <span class="bluetext">武将性别&nbsp</span><span>${lib.translate[character[0]]}</span>
                                </br>

                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling.nextElementSibling)">武将势力&nbsp</span>
                                <span>${lib.translate[character[1]]}</span>
                                <font color=6df95b>[</font>
                                <font color=6df95b>${character[1]}</font>
                                <font color=6df95b>]</font>
                                </br>

                                <span class="bluetext">体力上限&nbsp</span><span>${character[2]}</span>
                                </br>
                                            
                                <span class="bluetext">阵亡语音&nbsp</span>
                                <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放阵亡语音' onclick='window.qnssPlayDieAudio("${charName}");'style='position: absolute; width: 100px; margin: 0; padding: 0;' />
                                </br>

                                <span class="bluetext">武将技能</span>${skillstr}
                                </br>

                                <span class="bluetext">武将衍生技</span><span>${skillDerivationstr.length > 0 ? skillDerivationstr : '无'}</span>

                                </br></br></br>
                            `);

                            lastFragment.appendChild(caption);
                        });

                        if (this.fragmentDataList[this.fragmentList.length - 1].length > 9) {
                            lastFragment = document.createDocumentFragment();
                            this.fragmentList.push(lastFragment);
                            this.fragmentDataList.push([]);
                        }
                    }

                    console.timeEnd('findCharacter');
                }
                /** 寻找卡牌 */
                findCard(result) {
                    console.time('findCard');
                    /** 
                    * @type { ({ packName: string, packTranslate: string, cardName: string, cardData: ExCardData, nature?: string })[] }
                    */
                    let name = [];

                    if (['leisha', 'huosha', 'icesha', 'kamisha', 'cisha'].contains(result)) {
                        let nature;
                        switch (result) {
                            case 'leisha':
                                nature = 'thunder';
                                break;
                            case 'huosha':
                                nature = 'fire';
                                break;
                            case 'icesha':
                                nature = 'ice';
                                break;
                            case 'kamisha':
                                nature = 'kami';
                                break;
                            case 'cisha':
                                nature = 'stab';
                        }
                        name.push({
                            packName: 'standard',
                            packTranslate: lib.translate['standard_card_config'],
                            cardName: 'sha',
                            cardData: lib.card['sha'],
                            nature
                        });
                    } else if (['雷杀', '火杀', '冰杀', '神杀', '刺杀'].contains(result)) {
                        let nature;
                        switch (result) {
                            case '雷杀':
                                nature = 'thunder';
                                break;
                            case '火杀':
                                nature = 'fire';
                                break;
                            case '冰杀':
                                nature = 'ice';
                                break;
                            case '神杀':
                                nature = 'kami';
                                break;
                            case '刺杀':
                                nature = 'stab';
                        }
                        name.push({
                            packName: 'standard',
                            packTranslate: lib.translate['standard_card_config'],
                            cardName: 'sha',
                            cardData: lib.card['sha'],
                            nature
                        });
                    } else if (['杀', 'sha'].contains(result)) {
                        [undefined, 'thunder', 'fire', 'ice', 'kami', 'stab'].forEach(nature => {
                            name.push({
                                packName: 'standard',
                                packTranslate: lib.translate['standard_card_config'],
                                cardName: 'sha',
                                cardData: lib.card['sha'],
                                nature
                            });
                        });
                    } else {
                        for (const packName in lib.cardPack) {
                            for (const cardName of lib.cardPack[packName]) {
                                if (cardName === result) {
                                    name.push({
                                        packName,
                                        packTranslate: lib.translate[packName + '_card_config'],
                                        cardName,
                                        cardData: lib.card[cardName]
                                    });
                                } else if (typeof lib.translate[cardName] == 'string' && lib.translate[cardName].includes(result)) {
                                    name.push({
                                        packName,
                                        packTranslate: lib.translate[packName + '_card_config'],
                                        cardName,
                                        cardData: lib.card[cardName]
                                    });
                                }
                            }
                        }
                    }

                    if (name.length == 0) {
                        console.timeEnd('findCard');
                        return false;
                    }

                    let lastFragment = document.createDocumentFragment();
                    this.fragmentList.push(lastFragment);
                    this.fragmentDataList.push([]);

                    const qnssCaption = ui.create.div('.caption.qnssCaption');
                    lastFragment.appendChild(qnssCaption);

                    qnssCaption.appendChild(game.全能搜索_createWaveText('卡牌搜索结果'));

                    /*
                    const content = this.dialog.content;

                    qnssCaption.appendChild(ui.create.div(hide ? '.qnssArrowDown' : '.qnssArrowUp').listen(function () {
                        const show = this.classList.contains('qnssArrowDown');

                        this.classList.toggle('qnssArrowUp');
                        this.classList.toggle('qnssArrowDown');

                        const captionList = Array.from(document.querySelectorAll('.caption.qnssCaption')).filter(v => v != this.parentElement);
                        const child = Array.from(content.childNodes);
                        // @ts-ignore
                        const begin = child.indexOf(this.parentElement);
                        const endList = captionList.map(v => child.indexOf(v)).filter(v => v > begin);
                        const end = endList.length == 0 ? child.length : Math.min.apply(null, endList);
                        child.forEach((v, i) => {
                            if (i > begin && i < end) {
                                // @ts-ignore
                                v.style.display = (show ? '' : 'none');
                            }
                        });
                    }));
                    */

                    for (const data of name) {
                        const cardPack = data.packName;
                        const packTranslate = data.packTranslate;
                        const cardName = data.cardName;
                        const cardData = data.cardData;
                        const nature = data.nature;

                        /*
                        this.dialog.addSmall([
                            [{
                                name: data.cardName,
                                nature: data.nature
                            }], 'vcard'
                        ]);
                        */

                        this.fragmentDataList[this.fragmentList.length - 1].push((lastFragment) => {
                            const buttons = ui.create.div('.buttons');
                            buttons.classList.add('smallzoom');
                            this.dialog.buttons = this.dialog.buttons.concat(ui.create.buttons([{
                                name: data.cardName,
                                nature: data.nature
                            }], 'vcard', buttons, false));

                            lastFragment.appendChild(buttons);

                            const caption = ui.create.div('.caption');

                            const d = ui.create.div(ui.create.div(ui.create.div('.text.center', caption)), {
                                display: 'block',
                                left: 'auto',
                                textAlign: 'left',
                                fontSize: '20px'
                            });

                            d.insertAdjacentHTML('afterbegin', `
                                </br>
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling.nextElementSibling)">卡牌名称</span>
                                <span>${lib.translate[cardName]}</span>
                                <font color=6df95b>[ </font>
                                <font color=6df95b>${cardName}</font>
                                <font color=6df95b> ]</font>
                                </br>

                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling.nextElementSibling)">卡牌类别</span>
                                <span>${cardData.type ? lib.translate[cardData.type] : '无'}</span>
                                <font color=6df95b>[ </font>
                                <font color=6df95b>${cardData.type ? lib.translate[cardData.type] : '无'}</font>
                                <font color=6df95b> ]</font>
                                </br>
                                
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">卡牌效果</span>${nature ? lib.card.sha.cardPrompt({ name: 'sha', nature }) : lib.translate[cardName + '_info']}
                                </br>
                                
                                <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">所在卡牌包</span>${packTranslate || '无'}
                                <font color=6df95b>[ </font>
                                <font color=6df95b>${cardPack || '无'}</font>
                                <font color=6df95b> ]</font>
                                </br>

                                ${cardData.derivation ? (
                                    '<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">卡牌来源</span>' + lib.translate[cardData.derivation] +
                                    '<font color="6df95b"> [ </font>' +
                                    '<font color="6df95b">' + cardData.derivation + '</font>' +
                                    '<font color="6df95b"> ]</font>' +
                                    '</br>'
                                ) : ''
                                }

                                <span class="bluetext">卡牌语音（男）</span>
                                <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='卡牌语音（男）' onclick="window.qnssPlayCardAudio('male', '${cardName}', '${nature}');" style='position: absolute; width: 100px; margin: 0; padding: 0;' />
                                </br>

                                <span class="bluetext">卡牌语音（女）</span>：
                                <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='卡牌语音（女）' onclick="window.qnssPlayCardAudio('female', '${cardName}', '${nature}');" style='position: absolute; width: 100px; margin: 0; padding: 0;' />
                                </br>

                                <span class="bluetext">卡牌代码</span>
                                <span style="color: white;" onclick='window.qnssShowCode.call(this, "${lib.translate[cardName]}")'>点击查看${lib.translate[cardName]}代码</span>
                                
                                <span style="display: none;">
                                    </br>
                                    <font color="21ffd8">[ ${lib.translate[cardName]} ] </font>卡牌代码：</br>
                                    <pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(cardData))}</pre>
                                </span>
                                
                                </br></br></br>
                            `);

                            lastFragment.appendChild(caption);
                        });

                        if (this.fragmentDataList[this.fragmentList.length - 1].length > 9) {
                            lastFragment = document.createDocumentFragment();
                            this.fragmentList.push(lastFragment);
                            this.fragmentDataList.push([]);
                        }
                    }

                    console.timeEnd('findCard');
                }
                /** 寻找技能 */
                findSkill(result) {
                    console.time('findSkill');
                    /** @type { { skillName: string, translate: string, info: string }[] }  */
                    let skills = [];

                    for (let skillName in lib.skill) {
                        if (['global', 'globalmap', 'storage'].contains(skillName) || typeof lib.skill[skillName] != 'object') continue;
                        // 中文包含的，或者英文id对应的
                        if ((lib.translate[skillName] && lib.translate[skillName].includes(result)) || skillName === result) skills.push({
                            skillName,
                            translate: lib.translate[skillName],
                            info: lib.translate[skillName + '_info'] || '无',
                            // append: lib.translate[skillName + '_append']
                        });
                    }
                    // 大约3487个
                    // 数据结构: { name: 'xx_info', translate: '技能描述' }
                    let translates = Object.keys(lib.translate).filter(v => typeof lib.translate[v] == 'string' && v.endsWith('_info') && lib.skill[v.slice(0, -5)]).map(v => ({ name: v, translate: lib.translate[v] }));
                    // 按描述搜索
                    // 搜索的字高亮显示
                    const indexs = [];
                    const translateSearcher = result.split(/\s+/);
                    if (translateSearcher.length > 0) {
                        translates = translates.filter(v => translateSearcher.every(s => v.translate.includes(s)));
                        translates.forEach(v => {
                            let index = -1;
                            let translate = v.translate;
                            for (const str of translateSearcher) {
                                translate = translate.slice(index == -1 ? 0 : index);
                                const index2 = translate.indexOf(str);
                                if (index2 != -1) {
                                    index += index2;
                                }
                                else return;
                            }
                            indexs.push(skills.push({
                                skillName: v.name.slice(0, -5),
                                translate: lib.translate[v.name.slice(0, -5)],
                                info: v.translate,
                                // append: lib.translate[v.name.slice(0, -5) + '_append']
                            }) - 1);
                        });
                    }
                    if (skills.length == 0) {
                        console.timeEnd('findSkill');
                        return false;
                    }

                    let lastFragment = document.createDocumentFragment();
                    this.fragmentList.push(lastFragment);
                    this.fragmentDataList.push([]);

                    const qnssCaption = ui.create.div('.caption.qnssCaption');
                    lastFragment.appendChild(qnssCaption);

                    qnssCaption.appendChild(game.全能搜索_createWaveText('技能搜索结果'));

                    /*
                    const content = this.dialog.content;

                    qnssCaption.appendChild(ui.create.div(hide ? '.qnssArrowDown' : '.qnssArrowUp').listen(function () {
                        const show = this.classList.contains('qnssArrowDown');

                        this.classList.toggle('qnssArrowUp');
                        this.classList.toggle('qnssArrowDown');

                        const captionList = Array.from(document.querySelectorAll('.caption.qnssCaption')).filter(v => v != this.parentElement);
                        const child = Array.from(content.childNodes);
                        // @ts-ignore
                        const begin = child.indexOf(this.parentElement);
                        const endList = captionList.map(v => child.indexOf(v)).filter(v => v > begin);
                        const end = endList.length == 0 ? child.length : Math.min.apply(null, endList);
                        child.forEach((v, i) => {
                            if (i > begin && i < end) {
                                // @ts-ignore
                                v.style.display = (show ? '' : 'none');
                            }
                        });
                    }));
                    */

                    for (let i = 0; i < skills.length; i++) {
                        const skill = skills[i];
                        const skillName = skill.skillName;
                        const translate = skill.translate;
                        let info = skill.info;
                        // const append = skill.append;

                        // 关键字高亮
                        if (indexs.contains(i)) {
                            let index = -1;
                            let translate = info;
                            for (const str of translateSearcher) {
                                translate = info.slice(index == -1 ? 0 : index);
                                const index2 = translate.indexOf(str);
                                if (index2 != -1) {
                                    const insert = `<span style="color: red;">${str}</span>`;
                                    const addIndex = index2 + (index == -1 ? 0 : index);
                                    info = info.slice(0, addIndex) + insert + info.slice(addIndex + str.length);
                                    index += index2 + insert.length;
                                }
                                else break;
                            }
                        }

                        // 技能拥有者
                        let name = [];
                        for (const packName in lib.characterPack) {
                            for (const characterName in lib.characterPack[packName]) {
                                // 没有翻译的武将不显示
                                if (typeof lib.translate[characterName] != 'string') continue;
                                /** 
                                 * 武将信息
                                 * @type { HeroData } 
                                 */
                                const characterData = lib.characterPack[packName][characterName];
                                // 如果result是中文
                                if (characterData[3].includes(skillName)) {
                                    name.push(characterName);
                                }
                            }
                        }

                        this.fragmentDataList[this.fragmentList.length - 1].push((lastFragment) => {
                            const caption = ui.create.div('.caption');

                            const d = ui.create.div(ui.create.div(ui.create.div('.text.center', caption)), {
                                display: 'block',
                                left: 'auto',
                                textAlign: 'left',
                                fontSize: '20px'
                            });

                            d.insertAdjacentHTML('afterbegin', `
                                <li>
                                    <!-- 技能中文名 -->
                                    <font color="21ffd8">[ ${translate} ]</font>
                                    <!-- 技能id -->
                                    <font color=6df95b>[ ${skillName} ]</font></br>
                                    <span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling)">技能描述</span>：<span>${info.replace(/<\/li>/g, '').split('<li>').map((v, i) => i == 0 ? v : ('•' + v)).join('<br/>')}</span></br>
                                    <span class="bluetext">技能语音</span>：
                                    <img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${skillName}", null, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
                                    <span class="bluetext">技能拥有者</span>：<div id="replaceCharacters"></div></br>
                                    <span class="bluetext">技能代码</span>：
                                    <a onclick='window.qnssShowCode.call(this)'>点击查看技能代码</a>
                                </li>

                                <li style="display: none; list-style-type: none;">
                                    <font color="21ffd8">[ ${translate} ] </font>技能代码：</br>
                                    <pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[skillName]))}</pre>
                                </li>

                                </br></br></br>
                            `);

                            const replaceCharacters = d.querySelector("#replaceCharacters");
                            if (replaceCharacters) {
                                if (name.length > 0) {
                                    /*
                                    const buttons = ui.create.div('.buttons', d);
                                    buttons.classList.add('smallzoom');
                                    const buttons2 = ui.create.buttons(name, 'character', buttons, false);
                                    buttons2.forEach(v => {
                                        v.style.height = '108px';
     
                                        const hps = v.getElementsByClassName('hp');
                                        // @ts-ignore
                                        const hp = hps[0];
                                        hp.style.left = 'auto';
                                        hp.style.right = '6px';
                                        hp.style.top = 'auto';
                                        hp.style.bottom = '5px';
                                        hp.style.textAlign = 'right';
     
                                        const identitys = v.getElementsByClassName('identity');
                                        // @ts-ignore
                                        const identity = identitys[0];
                                        identity.style.left = 'auto';
                                        identity.style.right = '3px';
                                        identity.style.top = '3px';
                                        
                                        v.setAttribute('onclick', `
                                            if (confirm("是否查看" + this.link + "的信息？")) {
                                                _status.全能搜索_Searcher.tujianBegin(this.link);
                                            }
                                        `);
                                    });
                                    this.dialog.buttons = this.dialog.buttons.concat(buttons2);
                                    // @ts-ignore
                                    replaceCharacters.insertAdjacentElement('afterend', buttons);
                                    */
                                    name.map(name => {
                                        const a = document.createElement('a');
                                        a.classList.add('qnssSee');
                                        a.style.color = 'white';
                                        a.setAttribute('onclick', 'window.qnssSee(this)');
                                        a.innerText = lib.translate[name];
                                        return a;
                                    }).forEach(a => {
                                        replaceCharacters.insertAdjacentElement('afterend', a);
                                        replaceCharacters.insertAdjacentHTML('afterend', '&nbsp&nbsp');
                                    });
                                } else {
                                    const span = document.createElement('span');
                                    span.innerText = '无';
                                    replaceCharacters.insertAdjacentElement('afterend', span);
                                }
                                replaceCharacters.remove();
                            }

                            lastFragment.appendChild(caption);
                        });

                        if (this.fragmentDataList[this.fragmentList.length - 1].length > 9) {
                            lastFragment = document.createDocumentFragment();
                            this.fragmentList.push(lastFragment);
                            this.fragmentDataList.push([]);
                        }
                    }

                    console.timeEnd('findSkill');
                }
                /** 寻找代码 */
                findCode(result) {
                    console.time('findCode');
                    const variableKeys = Object.keys(qnssVariable);//['lib', 'game', 'ui', 'get', 'ai', '_status', 'player', 'card'];
                    let key;
                    for (const variable of variableKeys) {
                        if (result.startsWith(variable + '.') || result === variable) {
                            key = variable;
                            break;
                        }
                    }
                    // 防止执行函数
                    if (result.indexOf('(') != -1 || result.indexOf(')') != -1) {
                        console.error('寻找代码功能，不能寻找带有小括号的代码（防止执行函数）');
                        console.timeEnd('findCode');
                        return false;
                    }

                    if (!qnssVariable.player && !qnssVariable.card) {
                        // @ts-ignore
                        qnssVariable.player = ui.create.player().init('sunce');
                        // @ts-ignore
                        qnssVariable.card = game.createCard('sha');
                    }

                    // 去掉最后一个元素的数组
                    const exceptLast = result.split('.').slice(0, -1);
                    // 最后一个 . 之后的字符串
                    const last = result.split('.').slice(-1);
                    // 去掉最后一个元素的结果变量
                    const exceptResult = exceptLast.reduce((previous, current) => {
                        if (previous && previous[current]) {
                            return previous[current];
                        }
                    }, qnssVariable);

                    if (exceptResult) {
                        //result 字符串 -> 代码变量
                        const obj = exceptResult[last];

                        if (!key || (!obj && !(last in exceptResult))) {
                            console.timeEnd('findCode');
                            return false;
                        }

                        function stringify(obj, level) {
                            level = level || 0;
                            let indent = '';
                            let str;
                            for (let i = 0; i < level; i++) {
                                indent += '    ';
                            }
                            if (get.objtype(obj) == 'object') {
                                str = '{\n';
                                for (let i in obj) {
                                    if (/[^a-zA-Z]/.test(i)) {
                                        str += indent + '    "' + i + '":' + stringify(obj[i], level + 1) + ',\n';
                                    }
                                    else {
                                        str += indent + '    ' + i + ':' + stringify(obj[i], level + 1) + ',\n';
                                    }
                                }
                                str += indent + '}';
                                return str;
                            }
                            else {
                                if (typeof obj == 'function') {
                                    str = obj.toString();
                                    str = str.replace(/\t/g, '    ');
                                    let i = str.lastIndexOf('\n');
                                    let num = 0;
                                    for (let j = i + 1; j < str.length && str[j] == ' '; j++) {
                                        num++;
                                    }
                                    num = Math.floor(num / 4);
                                    for (i = 0; i < num - level; i++) {
                                        str = str.replace(/\n    /g, '\n');
                                    }
                                }
                                else {
                                    try {
                                        if (Array.isArray(obj) && obj.contains(Infinity)) {
                                            obj = obj.slice(0);
                                            let rand = get.id();
                                            for (let i = 0; i < obj.length; i++) {
                                                if (obj[i] === Infinity) {
                                                    obj[i] = parseInt(rand);
                                                }
                                            }
                                            str = JSON.stringify(obj).replace(new RegExp(rand, 'g'), 'Infinity');
                                        }
                                        else {
                                            //str = JSON.stringify(obj) || '';
                                            if (Array.isArray(obj)) {
                                                str = '[';
                                                for (let index = 0; index < obj.length; index++) {
                                                    str += stringify(obj[index]);
                                                    if (obj[index + 1]) {
                                                        str += ', ';
                                                    }
                                                }
                                                str += ']';
                                            } else if (obj instanceof DOMTokenList) {
                                                str = JSON.stringify(Array.from(obj));
                                            } else if (obj === undefined) {
                                                str = 'undefined';
                                            } else if (typeof obj !== 'object') {
                                                str = JSON.stringify(obj);
                                            } else if (obj === null) {
                                                str = 'null';
                                            } else {
                                                str = obj.toString();
                                            }
                                        }
                                    }
                                    catch (e) {
                                        str = '';
                                        console.log(e);
                                    }
                                }
                                return str;
                            }
                        }

                        let descriptionStr = '';

                        if (get.objtype(lib.description) === 'object') {
                            // 获取注释
                            const descriptionObj = result.split('.').reduce((previous, current) => {
                                if (previous && previous[current]) {
                                    return previous[current];
                                }
                            }, lib.description);

                            const exceptDescriptionResult = exceptLast.reduce((previous, current) => {
                                if (previous && previous[current]) {
                                    return previous[current];
                                }
                            }, lib.description);

                            if (!descriptionObj) {
                                // @ts-ignore
                                if (exceptDescriptionResult && exceptDescriptionResult[qnssKeySymbol]) {
                                    let descriptionResult = '';
                                    // @ts-ignore
                                    if (typeof exceptDescriptionResult[qnssKeySymbol] == 'string') {
                                        // @ts-ignore
                                        descriptionResult = exceptDescriptionResult[qnssKeySymbol];
                                        // @ts-ignore
                                    } else if (typeof exceptDescriptionResult[qnssKeySymbol] == 'function') {
                                        // @ts-ignore
                                        descriptionResult = exceptDescriptionResult[qnssKeySymbol](result);
                                    }
                                    descriptionStr += `
                                        <span class="bluetext">代码描述</span>：<span>${descriptionResult}</span></br>
                                    `;
                                }
                            }
                            else if (typeof descriptionObj === 'string') {
                                descriptionStr += `
                                    <span class="bluetext">代码描述</span>：<span>${descriptionObj}</span></br>
                                `;
                            }
                            else if (descriptionObj && get.objtype(obj) !== 'object' && obj != qnssVariable.player && obj != qnssVariable.card) {
                                // 如果指定了代码的来源扩展
                                if (descriptionObj.from) {
                                    descriptionStr += `
                                        <span class="bluetext">代码来源</span>：
                                        <span>${lib.config.extensions.contains(descriptionObj.from) ? ('扩展【' + descriptionObj.from + '】') : descriptionObj.from}</span>
                                        </br>
                                    `;
                                }

                                // 如果指定了代码的类型
                                if (get.objtype(descriptionObj.type) == 'object' || descriptionObj.args || descriptionObj.return) {
                                    descriptionStr += `
                                        <span class="bluetext">代码类型</span>：
                                        <span>${(!descriptionObj.args && !descriptionObj.return) ? descriptionObj.type : 'function'}</span>
                                        </br>
                                    `;
                                }

                                // 如果有对此api的描述
                                if (descriptionObj.description) {
                                    descriptionStr += `
                                        <span class="bluetext">代码描述</span>：<span>${descriptionObj.description}</span></br>
                                    `;
                                }
                                // 如果此api是函数，且有对此api返回值的注释
                                if (typeof obj == 'function' && descriptionObj.return) {
                                    descriptionStr += `
                                        <span class="bluetext">函数返回值</span>：
                                    `;
                                    if (get.objtype(descriptionObj.return) !== 'object') {
                                        descriptionStr += `<span>${descriptionObj.return || '未知'}</span>`;
                                    } else {
                                        descriptionStr += `
                                            <li style="padding-left: 50px;">
                                                <span class="bluetext">返回值类型</span>: <span>${descriptionObj.return.type || '未知'}</span>
                                            </li>
                                            <li style="padding-left: 50px;">
                                                <span class="bluetext">返回值描述</span>: <span>${descriptionObj.return.description || '未知'}</span>
                                            </li>
                                        `;
                                    }
                                    descriptionStr += '</br>';
                                }
                                // 如果此api是函数，且有对此api参数的注释
                                if (typeof obj == 'function' && descriptionObj.args && Object.keys(descriptionObj.args).length > 0) {
                                    descriptionStr += `
                                        <span class="bluetext">代码参数</span>：
                                            <button onclick="
                                                'use strict';
                                                let list = Array.from(this.parentElement.children);
                                                let index = list.indexOf(this);
                                                list = list.filter(i => i instanceof HTMLLIElement && list.indexOf(i) > index);
												if (list.length > 0) {
													list.forEach(i => {
                                                        if(i.style.display == 'none') {
                                                            i.style.display = '';
                                                        } else {
                                                            i.style.display = 'none';
                                                        }
                                                    });
												} else if (this.parentElement.nextElementSibling instanceof HTMLLIElement) {
													let i = this.parentElement.nextElementSibling;
													if(i.style.display == 'none') {
                                                        i.style.display = '';
                                                    } else {
                                                        i.style.display = 'none';
                                                    }
												}
                                            ">点击显示/隐藏参数信息</button>
                                            </br>
                                    `;
                                    for (const key in descriptionObj.args) {
                                        const arg = descriptionObj.args[key];
                                        descriptionStr += `
                                            <li style="padding-left: 50px;">
                                                <!-- 参数名 -->
                                                <font color="21ffd8">[ ${key} ]</font></br>
                                                <span class="bluetext">参数描述</span>：${arg.description || '暂无注释'}</br>
                                                <span class="bluetext">参数类型</span>：${arg.type || '暂无注释'}</br>
                                                <span class="bluetext">是否必须存在</span>：${arg.exist === true ? '是' : arg.exist === false ? '否' : '暂无注释'}</br>
                                                <span class="bluetext">参数顺序</span>：${arg.index == 'allRight' ? '任一顺序皆可' : arg.index ? ('第' + arg.index + '位') : '暂无注释'}</br>
                                            </li>
                                        `;
                                    }
                                }
                            } else {
                                // 如果指定了代码的类型
                                if (get.objtype(descriptionObj.type) == 'object' && !descriptionObj.type.type) {
                                    descriptionStr += `
                                        <span class="bluetext">代码类型</span>：
                                        <span>${descriptionObj.type}</span>
                                        </br>
                                    `;
                                }
                                // 如果有对此对象的描述
                                // @ts-ignore
                                if (descriptionObj && descriptionObj[window.qnssDescriptionSymbol]) {
                                    descriptionStr += `
                                        <span class="bluetext">代码描述</span>：<span>${descriptionObj[
                                        // @ts-ignore
                                        window.qnssDescriptionSymbol]}</span></br>
                                    `;
                                }
                            }
                        }

                        let lastFragment = document.createDocumentFragment();
                        this.fragmentList.push(lastFragment);
                        this.fragmentDataList.push([]);

                        const qnssCaption = ui.create.div('.caption.qnssCaption');
                        lastFragment.appendChild(qnssCaption);

                        qnssCaption.appendChild(game.全能搜索_createWaveText('代码搜索结果'));

                        /*
                        const content = this.dialog.content;

                        qnssCaption.appendChild(ui.create.div(hide ? '.qnssArrowDown' : '.qnssArrowUp').listen(function () {
                            const show = this.classList.contains('qnssArrowDown');

                            this.classList.toggle('qnssArrowUp');
                            this.classList.toggle('qnssArrowDown');

                            const captionList = Array.from(document.querySelectorAll('.caption.qnssCaption')).filter(v => v != this.parentElement);
                            const child = Array.from(content.childNodes);
                            // @ts-ignore
                            const begin = child.indexOf(this.parentElement);
                            const endList = captionList.map(v => child.indexOf(v)).filter(v => v > begin);
                            const end = endList.length == 0 ? child.length : Math.min.apply(null, endList);
                            child.forEach((v, i) => {
                                if (i > begin && i < end) {
                                    // @ts-ignore
                                    v.style.display = (show ? '' : 'none');
                                }
                            });
                        }));
                        */

                        this.fragmentDataList[this.fragmentList.length - 1].push((lastFragment) => {
                            const caption = ui.create.div('.caption');

                            const d = ui.create.div(ui.create.div(ui.create.div('.text.center', caption)), {
                                display: 'block',
                                left: 'auto',
                                textAlign: 'left',
                                fontSize: '20px'
                            });

                            d.insertAdjacentHTML('afterbegin', `
                                <li>
                                    <font color="21ffd8">[ ${result} ] </font>搜索结果：</br>
                                    ${descriptionStr}
                                    <pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${result + ' = '}${game.全能搜索_highlight(stringify(obj))}</pre>
                                </li>
                            `);

                            lastFragment.appendChild(caption);
                        });

                        if (this.fragmentDataList[this.fragmentList.length - 1].length > 9) {
                            lastFragment = document.createDocumentFragment();
                            this.fragmentList.push(lastFragment);
                        }

                        console.timeEnd('findCode');

                    } else {
                        console.timeEnd('findCode');
                        return false;
                    }
                }
                /** 将内容加入到下拉框 */
                addToDataList(data) {
                    if (this.searchList.add(data) !== false) {
                        game.saveExtensionConfig('全能搜索', 'searchList', this.searchList);
                    }
                    if (this.tsymqSearchList.add(data) !== false) {
                        game.saveExtensionConfig('全能搜索', 'tsymqSearchList', [...new Set(this.tsymqSearchList)]);
                    }
                    //输入框失去焦点
                    this.input.blur();
                }
                /** 清除历史搜索内容 */
                clearDataList() {
                    this.searchList = [];
                    this.clearOptions();
                    game.saveExtensionConfig('全能搜索', 'searchList', this.searchList);
                    game.alert("搜索历史已清空");
                }
                /**
                 * 展示
                 * @param { Lib.element.Dialog } dialog 
                 * @param { string } result 
                 * @param { boolean } [canAddToDataList] 
                 * @param { boolean } [notCheckKey] 
                 * @returns 
                 */
                tujianBegin(dialog, result, canAddToDataList, notCheckKey) {
                    this.clearDialog(dialog);
                    this.fragmentList = [];
                    this.fragmentDataList = [];
                    if (result === "" || result === null || result === undefined) return game.alert("请输入名称");
                    game.saveExtensionConfig('全能搜索', 'searchList', this.searchList);

                    this.dialog.buttons = [];

                    console.log('------------------------');
                    console.log('搜索内容: ' + result);

                    const containsKey = key => notCheckKey || this.searcherModule.contains(key);

                    let resultCharacter = containsKey('findCharacter') ? this.findCharacter(result) : false;
                    let resultCard = containsKey('findCard') ? this.findCard(result) : false;
                    let resultSKill = containsKey('findSkill') ? this.findSkill(result) : false;
                    let resultCode = containsKey('findCode') ? this.findCode(result) : false;

                    if ([resultCharacter, resultCard, resultSKill, resultCode].every(v => v == false)) {
                        this.input.blur();
                        this.input.classList.add('qnssWrong');
                        game.alert(`没有符合条件的武将，卡牌，技能或代码!(搜索内容："${result}")`);
                        this.clearDialog(dialog);
                        return;
                    }

                    // 只搜索到代码的，不加入搜索历史
                    if (![resultCharacter, resultCard, resultSKill].every(v => v === false)) {
                        // 搜索的字大于1 或 搜索内容不包括技能且单字为汉字
                        if (result.length > 1 || (resultSKill === false && /[\u4e00-\u9fa5]+/.test(result))) {
                            canAddToDataList && this.addToDataList(result);
                        }
                    }

                    // 添加技能id的搜索提示后，this.alwaysShow的元素就过多了
                    this.alwaysShow = this.searchList.slice(0).sort();

                    // console.log(this.fragmentList);
                    if (this.fragmentList.length) {
                        this.updatePage(1);
                    }
                }
            }

            window.诗笺_manual = {
                show(target) {
                    lib.qnssOnCreate.forEach(fun => {
                        fun();
                    });
                    if (!_status.全能搜索_Searcher) {
                        _status.全能搜索_Searcher = new Searcher(target);
                    } else if (_status.全能搜索_Searcher.constructor === Searcher) {
                        // @ts-ignore
                        _status.全能搜索_Searcher.tujianBegin(_status.全能搜索_Searcher.content, target);
                    } else {
                        delete _status.全能搜索_Searcher;
                        _status.全能搜索_Searcher = new Searcher(target);
                    }
                }
            };

            if (!Array.isArray(lib.qnssOnCreate)) lib.qnssOnCreate = [];
            if (!Array.isArray(lib.qnssOnClose)) lib.qnssOnClose = [];

            const getSystem = setInterval(() => {
                if (ui.system1 || ui.system2) {
                    clearInterval(getSystem);
                    ui.Searcher = ui.create.system('全能搜索', function () {
                        window.诗笺_manual.show();
                    });
                }
            }, 500);
        },
        precontent: function () {},
        help: {},
        config: {
            version: {
                nopointer: true,
                clear: true,
                name: "扩展版本: v3.4<br>更新日期: 2023-09-14",
            },
            css: {
                clear: true,
                'name': '更换代码高亮样式',
                'init': 'vs2015.min.css',
                'item': {
                    'a11y-dark.min.css': 'a11y-dark',
                    'an-old-hope.min.css': 'an-old-hope',
                    'atom-one-dark.min.css': 'atom-one-dark',
                    'felipec.min.css': 'felipec',
                    'gml.min.css': 'gml',
                    'vs2015.min.css': 'vs2015'
                },
                onclick(item) {
                    game.saveExtensionConfig('全能搜索', 'css', item);
                    ui.qnssChangeEditorCss(item)
                }
            },
            background: {
                'name': '搜索界面背景图片',
                'init': '相爱相杀.png',
                'item': {
                    '相爱相杀.png': '相爱相杀.png',
                    'picture.png': 'picture.png',
                    '随机': '随机',
                    'none': '本体默认背景'
                },
                onclick(item) {
                    game.saveExtensionConfig('全能搜索', 'backgroundImage', item);
                }
            },
            "loadUpdateContent": {
                clear: true,
                name: '<span style="text-decoration: underline;">点击显示本扩展更新内容<span>',
                intro: '本扩展历史更新内容',
                onclick: function () {
                    if (_status.qnssUpdateContent) return false;
                    _status.qnssUpdateContent = true;

                    let oReq = new XMLHttpRequest();

                    oReq.addEventListener("load", function () {
                        let layer = ui.create.div(ui.window, '.updateContent');
                        // @ts-ignore
                        let close = ui.create.div(layer, '.updateContentClose', () => {
                            delete _status.qnssUpdateContent;
                            layer.remove();
                        });
                        // @ts-ignore
                        let content = ui.create.div(layer, {
                            width: '100%',
                            height: '100%',
                            innerHTML: this.responseText,
                        });
                    });

                    oReq.addEventListener("error", err => {
                        delete _status.qnssUpdateContent;
                        console.error("获取历史更新内容失败", err);
                        alert("获取历史更新内容失败");
                    });

                    oReq.open("GET", lib.assetURL + 'extension/全能搜索/updateContent');
                    oReq.send();
                },
            },
            "Searcher": {
                "name": "<span style='text-decoration: underline;'>点击此处进行搜索</span>",
                "clear": true,
                onclick: function () {
                    window.诗笺_manual.show();
                },
            }
        },
        package: {
            intro: '【武将卡牌搜索器】的重命名版本。',
            author: "<span class='bluetext'>诗笺</span>",
            version: "3.4",
        },
    }
});
