/// <reference path="./typings/index.d.ts" />
/// <reference path="../../typings/index.d.ts" />
"use strict";
game.import("extension", function(lib, game, ui, get, ai, _status) {
	return {
		name: "全能搜索",
		editable: false,
		onremove: function () {
			// game.saveExtensionConfig('全能搜索', 'searchList');
		},
		content: function(config, pack) {
            //移除武将卡牌搜索器扩展
            game.removeExtension("武将卡牌搜索器", false);

            let layoutPath = lib.assetURL + 'extension/全能搜索/';
            //加入hljs
            lib.init.js(layoutPath, 'highlight.min', () => {
                hljs.configure({
                    tabReplace: '	',
                    useBR: true,
                    languages: ['javaScript'],
                });
                game.全能搜索_highlight = text => hljs.highlightAuto(text).value;
            });

            //加入css
            lib.init.css(layoutPath, 'css/extension');
            lib.init.css(layoutPath, 'css/vs2015.min');

            // 设置全局Symbol,用于设置一个对象的描述
            window.qnssDescriptionSymbol = Symbol('description');
            // 设置全局Symbol,用于设置一个对象内，所有未设置描述的属性，添加一个默认的描述
            window.qnssKeySymbol = Symbol('key');
            // 设置全局的跳转搜索功能
            window.qnssSee = function (a) {
                _status.全能搜索_Searcher.tujianBegin(_status.全能搜索_Searcher.content, a ? a.innerText : undefined, false);
            };

			Promise.allSettled = Promise.allSettled || function (arr) {
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
			// 韩云
			window.qnssFindDieAudio = function (ext, charName) {
				const r =  new RegExp(`game.playAudio\\(['"]..['"],\\s*['"]extension['"],\\s*['"]` + ext + `\\S*['"],\\s*\\S+\\)`);
				const player = ui.create.player().init(charName);
				const dieAudioSkills = Object.keys(lib.skill).filter(v => {
					if (!v.startsWith('_')) return false;
					const info = lib.skill[v];
					if (typeof info.trigger != 'object' || typeof info.content != 'function') return false;
					for (let [evtPlayer, value] of Object.entries(info.trigger)) {
						if (['global', 'player'].includes(evtPlayer)) {
							if (!Array.isArray(value)) value = [value];
							if (!value.some(v => v.startsWith('die'))) return false;
						}
					}
					if (typeof info.filter == 'function') {
						try {
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
							const toString = lib.skill[skill].content.toString();
							const match = toString.match(r);
							if (!match) reject();
							let evalArgs = match[0];
							evalArgs = evalArgs.slice(0, evalArgs.lastIndexOf(',') + 1) + '\'' + player.name + '\'' + ', (e) => { reject(e); });';
							// console.log(evalArgs);
							eval(evalArgs);
							// audio的onerror是异步触发的
							setTimeout(() => {
								resolve();
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
            // 引入全局api描述
            // 创建Promise
            const importDescription = function(path, file) {
                return new Promise((resolve, reject) => {
					// 变量添加到全局
					lib.cheat.i();
					// 引入js
                    lib.init.js(path, file, () => {
                        delete lib.imported.libDescription;
                        resolve();
                    }, resolve);
                });
            };
            
            importDescription(layoutPath, 'globalDescription')
                .then(async (error) => {
                    if (error) return;
                    // 引入扩展添加api描述
                    for (const extName of lib.config.extensions) {
                        if (!game.getExtensionConfig(extName, 'enable')) continue;
                        await importDescription(`${lib.assetURL}extension/${extName}/`, 'description');
                    }
                    // 删除全局变量
                    if (!lib.config.dev) {
                        delete window.cheat;
                        delete window.game;
                        delete window.ui;
                        delete window.get;
                        delete window.ai;
                        delete window.lib;
                        delete window._status;
                    }
                });

            /** 
             * @description 双击复制
             * @param target 要复制的目标
             * */
            game.全能搜索_copy = function (target) {
                function error() {
                    // target可写
                    target.setAttribute('contenteditable', true);
                    // 自动选中文字
                    if (document.body.createTextRange) {
                        const range = document.body.createTextRange();
                        range.moveToElementText(target);
                        range.select();
                    } else if (window.getSelection) {
                        const selection = window.getSelection();
                        const range = document.createRange();
                        range.selectNodeContents(target);
                        selection.removeAllRanges();
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
                navigator.clipboard.writeText(text).then(e => {
                    game.alert("复制成功！\n" + text);
                }).catch(error);
            };

            const qnssVariable = { player: null, card: null, lib, game, ui, get, ai, _status };

            /** 搜索器类 */
            class Searcher {
                [Symbol.toStringTag] = "Searcher"
                //构造方法
                constructor(target) {
                    /** @type {string} 原先的背景图片 **/
                    this.Image = ui.background.style.backgroundImage;
                    /** @type {HTMLDivElement} */
                    this.manual = ui.create.div('.Searcher');
                    /** @type {HTMLDivElement} */
                    this.menu = ui.create.div('.menu', this.manual);
                    /** @type {HTMLInputElement} */
                    this.input = this.menu.appendChild(document.createElement('input'));
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

                    /* this.logindex = -1; */
                    this.hoverLi = null;
                    this.search = ui.create.div('.search', this.menu, '搜索');
                    this.clear = ui.create.div('.clear', this.menu, '清空历史', this.clearDataList.bind(this));
                    this.close = ui.create.div('.close', this.menu, '关闭');
                    this.oldDialog = _status.event.dialog || ui.dialog;
                    this.dialog = ui.create.dialog();
                    this.content = this.manual.appendChild(this.dialog);
					// 选择搜索方式
					this.searcherModule = game.getExtensionConfig('全能搜索', 'searcherModule') || ['findCharacter', 'findCard', 'findSkill', 'findCode'];
					game.saveExtensionConfig('全能搜索', 'searcherModule', this.searcherModule);
					this.chooseModuleDiv = ui.create.div('.chooseModule', this.menu, '搜索模式', function(e) {
						if (e.path[0] != this) return;
						this.firstElementChild.classList.toggle('hover');
					});
					/** @type { HTMLUListElement }  */
					const cm = ui.create.node('ul.list', this.chooseModuleDiv);
					for (const [key, value] of [['findCharacter', '搜索武将'], ['findCard', '搜索卡牌'], ['findSkill', '搜索技能'], ['findCode', '搜索代码']]) {
						const li = ui.create.node('li');
						cm.appendChild(li);
						const input = ui.create.node('input');
						input.type = 'checkbox';
						input.value = key;
						input.checked = this.searcherModule.includes(key);
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

                    //this.input.setAttribute('list', '全能搜索_datalist');
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
                        //if (!result) return;
                        if (get.objtype(result) == 'object') {
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
                            if (last && last[qnssKeySymbol]) {
                                if (typeof last[qnssKeySymbol] == 'string') {
                                    return last[qnssKeySymbol];
                                }
                                else if (typeof last[qnssKeySymbol] == 'function') {
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
                                if (hoverElement == this.ul.descriptionDiv) return;
                            }
                            if (this.hoverLi == li) return;
                            else if (this.hoverLi) {
                                if (this.ul.descriptionDiv) {
                                    this.ul.descriptionDiv.remove();
                                    delete this.ul.descriptionDiv;
                                }
                                this.hoverLi.classList.remove('hover');
                            }
                            this.hoverLi = li;
                            li.classList.add('hover');
                            const descriptionDiv = li.querySelector('.description');
                            if (descriptionDiv) {
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
                                showDescriptionDiv.li = li;
                                showDescriptionDiv.style.position = 'absolute';
                                showDescriptionDiv.style.zIndex = 1001;
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

                                this.ul.descriptionDiv = showDescriptionDiv;
                            }
                        });

                        li.addEventListener('mouseleave', (e) => {
                            if (this.ul.descriptionDiv) {
                                if (e.clientX && e.clientY) {
                                    const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
                                    if (hoverElement == this.ul.descriptionDiv) return;
                                }
                                this.ul.descriptionDiv.remove();
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
                            this.ul.removeChild(this.ul.firstChild);
                        }
                        if (!this.input.value) return;
                        alwaysShow.sort();
                        for (let data of alwaysShow) {
                            if (!this.searchList.contains(data) || !data.startsWith(this.input.value)) {
                                continue;
                            }
                            this.ul.appendChild(createLi(data));
                        }
                        showUl();
                    }

                    /** 添加提示 */
                    let addOptions = (value, array) => {
                        for (const key of array) {
							// 最多显示50条信息
							if (this.ul.childElementCount >= 50) return;
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

                    /**清除提示 */
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
                        if (this.ul.descriptionDiv) {
                            this.ul.descriptionDiv.remove();
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
									this.ul.removeChild(this.ul.firstChild);
								}
								return;
                            }
                            this.tujianBegin(this.content, this.input.value, true);
                            // this.input.value = '';
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
                        } else {
                            // 关于搜索代码的判断
                            const value = this.input.value;
                            const variableKeys = Object.keys(qnssVariable);
                            // 由于水乎改了array.find,只能用别的办法写
                            let key;
                            if (value) {
                                for (const variable of variableKeys) {
                                    if (value.startsWith(variable + '.') || variable.startsWith(value)) {
                                        key = variable;
                                        break;
                                    }
                                }
                            }
                            if (!key) {
                                clearOptions();
                                for (const item of this.searchList) {
									if (item.startsWith(this.input.value) && this.input.value.length > 0) {
                                        this.alwaysShow.add(item);
                                        updateDescription();
                                        break;
                                    }
                                }
                                return;
                            }
                            if (!qnssVariable.player && !qnssVariable.card) {
                                qnssVariable.player = ui.create.player().init('sunce');
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
                                    addOptions(str ? (str + '.') : '', keys.filter(i => i.startsWith(last)).sort());
                                }
                            }
                        }
                    };

                    this.input.onkeydown = e => e.stopPropagation();

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

                    if (typeof target == 'string') {
                        this.input.value = target;
                        this.search.click();
                    }
                }
                /** 关闭dialog */
                closeDialog() {
                    //不是开发者模式删除全局变量
                    if (!lib.config.dev) {
                        delete window.cheat;
                        delete window.game;
                        delete window.ui;
                        delete window.get;
                        delete window.ai;
                        delete window.lib;
                        delete window._status;
                    }

                    this.manual.remove();
                    ui.arena.show();
                    ui.system.show();
                    ui.background.style.backgroundImage = this.Image;
                    ui.arena.classList.add('menupaused');
                    ui.menuContainer.show();
                    ui.dialog = this.oldDialog;
                    if (ui.dialog) ui.dialog.show();
                    _status.全能搜索_Searcher = null;
                    window.onkeydown = this.keydownFun;
                }
                /** 清除dialog内容 */
                clearDialog(dialog) {
					dialog.content.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					});
                    while (dialog.content.hasChildNodes()) {
                        dialog.content.removeChild(dialog.content.firstChild);
                    }
                }
                /** 寻找角色 */
                findCharacter(result) {
                    let name = [];
                    for (let a in lib.character) {
						if (typeof lib.translate[a] != 'string') continue;
						// 中文名包含的武将
                        if (lib.translate[a].includes(result)) name.push(a);
						// 模糊搜索
						if (a.endsWith(result)) name.push(a);
                    }
                    if (name.length == 0) return false;
                    this.dialog.addText('<div style="text-align:center; font-size: 25px;">武将搜索结果</div>');

                    for (let i = 0; i < name.length; i++) {
                        let character = lib.character[name[i]];
                        if (!character) continue; //没有这个武将就跳过这次循环
                        let str = ''; //展示的html代码
                        let allcharacter = lib.characterPack; //所有武将包
                        let Packname; //包名
                        for (let b in allcharacter) {
                            if ((name[i] in allcharacter[b]) && character == allcharacter[b][name[i]]) {
                                Packname = lib.translate[b + '_character_config'];
                                break;
                            }
                        }
                        let skillstr = '';
                        let char3 = character[3];
                        let charName = name[i];
                        let skillDerivationstr = '';
                        let skillDerivation = [];

                        for (let i = 0; i < char3.length; i++) {
                            //衍生技
							if (!lib.skill[char3[i]]) continue;
                            let derivation = lib.skill[char3[i]].derivation;
                            if (derivation) {
                                if (Array.isArray(derivation)) {
                                    skillDerivation.addArray(derivation);
                                } else if (typeof derivation == 'string') {
                                    skillDerivation.add(derivation);
                                }
                            }

                            if (lib.translate[char3[i]]) {
                                skillstr +=
                                    `<li>
										<font color="21ffd8" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">[ ${lib.translate[char3[i]]} ]</font>
										<font color=6df95b>[</font>
										<font color=6df95b>${char3[i]}</font>
										<font color=6df95b>]</font></br>
										<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">技能描述&nbsp</span><span>${lib.translate[char3[i] + '_info']}</span></br>
										<span class="bluetext">技能语音&nbsp</span>
										<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${char3[i]}", {name:"${charName}"}, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
										<span class="bluetext">技能代码&nbsp</span>
										<a onclick='
										let display = this.parentNode.nextElementSibling.style.display;
										this.parentNode.nextElementSibling.style.display = (display == "none" ? "" : "none");
										this.innerHTML = (display !== "none" ? "点击查看技能代码" : "点击关闭技能代码");
										'>点击查看技能代码</a>
									</li>
									<li style="display: none; list-style-type: none;">
										<font color="21ffd8">[ ${lib.translate[char3[i]]} ] </font>技能代码：</br>
										<pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[char3[i]]))}</pre>
									</li>`;
                            }
                        }

                        for (let i = 0; i < skillDerivation.length; i++) {
                            skillDerivationstr +=
                                `<li>
									<font color="21ffd8" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">[ ${lib.translate[skillDerivation[i]]} ]</font>
									<font color=6df95b>[</font>
									<font color=6df95b>${skillDerivation[i]}</font>
									<font color=6df95b>]</font></br>
									<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">技能描述&nbsp</span><span>${lib.translate[skillDerivation[i] + '_info']}</span></br>
									<span class="bluetext">技能语音&nbsp</span>
									<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${skillDerivation[i]}", {name:"${charName}"}, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
									<span class="bluetext">技能代码&nbsp</span>
									<a onclick='
									let display = this.parentNode.nextElementSibling.style.display;
									this.parentNode.nextElementSibling.style.display = (display == "none" ? "" : "none");
									this.innerHTML = (display !== "none" ? "点击查看技能代码" : "点击关闭技能代码");
									'>点击查看技能代码</a>
								</li>
								<li style="display: none; list-style-type: none;">
									<font color="21ffd8">[ ${lib.translate[skillDerivation[i]]} ] </font>技能代码：</br>
									<pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[skillDerivation[i]]))}</pre>
								</li>`;
                        }

                        str +=`</br><span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">武将信息&nbsp</span><span>${get.characterIntro(charName)}</span></br>
							<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">所在武将包&nbsp</span><span>${Packname}</span></br>
							<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">武将名称&nbsp</span>
							${lib.translate[charName]}
							<font color=6df95b>[</font>
							<font color=6df95b>${charName}</font>
							<font color=6df95b>]</font></br>
							<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">武将称号&nbsp</span><span>${get.colorspan(lib.characterTitle[charName] || "暂无称号")}</span></br>
							<span class="bluetext">武将性别&nbsp</span><span>${lib.translate[character[0]]}</span></br>
							<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">武将势力&nbsp</span>
							${lib.translate[character[1]]}
							<font color=6df95b>[</font>
							<font color=6df95b>${character[1]}</font>
							<font color=6df95b>]</font></br>
							<span class="bluetext">体力上限&nbsp</span>${character[2]} </br>
							<span class="bluetext">阵亡语音&nbsp</span>
							<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放阵亡语音' 
							onclick='
							let findInExt = false;
							Object.keys(lib.characterPack).forEach((key, index, arr) => {
								// 扩展自带的武将包
								if(key.includes("mode_extension_")) {
									if("${charName}" in lib.characterPack[key] && lib.character["${charName}"] == lib.characterPack[key]["${charName}"]) {
										findInExt = key.slice(15);
									}
								}
								// 扩展自定义的武将包
								if (lib.config.extensions.includes( lib.translate[key + "_character_config"] )) {
									if("${charName}" in lib.characterPack[key] && lib.character["${charName}"] == lib.characterPack[key]["${charName}"]) {
										findInExt = lib.translate[key + "_character_config"];
									}
								}
							});
							if(findInExt){
								game.playAudio("..", "extension", findInExt, "${charName}", function() {
									window.qnssFindDieAudio(findInExt, "${charName}")
								});
							} else if(lib.character["${charName}"] && lib.character["${charName}"][4].contains("die_audio")){
								game.playAudio("die", "${charName}", function() {
									game.alert("该武将没有阵亡语音");
								});
							} else{
								game.playAudio("die", "${charName}",function() {
									game.playAudio("die", "${charName}".slice("${charName}".indexOf("_") + 1), function(){
										game.alert("该武将没有阵亡语音");
									});
								});
							}'
							style='position: absolute; width: 100px; margin: 0; padding: 0;' /> </br>
							<span class="bluetext">武将技能</span>：${skillstr}`;

                        if (skillDerivation.length) {
                            str += `</br><span class="bluetext">武将衍生技</span>：${skillDerivationstr}`;
                        }

                        str += `</br></br></br>`;
						//setTimeout(() => {
							this.dialog.addSmall([
								[name[i]], 'character'
							]);
							this.dialog.addText(`
							<div>
								<div style="display:block; left:auto; text-align:left; font-size: 20px;"> ${str} </div>
							</div>`);
						//}, 0);
                    }
                }
                /** 寻找卡牌 */
                findCard(result) {
                    let name = [];
                    let nature, cardName;
                    if (['leisha', 'huosha', 'icesha', 'kamisha', 'cisha'].includes(result)) {
                        name.push(result);
                    } else if (['雷杀', '火杀', '冰杀', '神杀', '刺杀'].includes(result)) {
                        switch (result) {
                            case '雷杀':
                                name.push('leisha');
                                break;
                            case '火杀':
                                name.push('huosha');
                                break;
                            case '冰杀':
                                name.push('icesha');
                                break;
                            case '神杀':
                                name.push('kamisha');
                                break;
                            case '刺杀':
                                name.push('cisha');
                        }
                    } else {
                        Object.keys(lib.card)
                            .forEach(item => {
                                if (Object.prototype.toString.call(lib.card[item]) !== '[object Object]') return;
                                if (item == result || (typeof lib.translate[item] == 'string' && lib.translate[item].includes(result))) name.push(item);
                            });
                    }

                    if (name.length == 0) return false;

                    this.dialog.addText('<div style="text-align:center; font-size: 25px;">卡牌搜索结果</div>');

                    for (let i = 0; i < name.length; i++) {
                        let card = lib.card[name[i]];
                        if (!card) {
                            if (!['leisha', 'huosha', 'icesha', 'kamisha', 'cisha'].includes(name[i]))
                                //没有这个卡牌就跳过这次循环
                                continue;
                            else {
                                switch (name[i]) {
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

                                card = lib.card['sha'];
                                cardName = 'sha';

                                this.dialog.addSmall([
                                    [{
                                        name: 'sha',
                                        nature
                                    }], 'vcard'
                                ]);
                            }
                        } else {
                            this.dialog.addSmall([
                                [name[i]], 'vcard'
                            ]);
                        }

                        let str = '';
                        let allcard = lib.cardPack;
                        let Packname, Packname_translate;
                        for (let b in allcard) {
                            if (allcard[b].contains(name[i])) {
                                Packname = b;
                                Packname_translate = lib.translate[b + '_card_config'];
                                break;
                            }
                        }
                        str +=
                            `</br><span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">卡牌名称</span> ${lib.translate[name[i]]}
							<font color=6df95b>[ </font>
							<font color=6df95b>${name[i]}</font>
							<font color=6df95b> ]</font>
								</br><span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">卡牌类别</span> ： ${lib.translate[card.type]}
								<font color=6df95b>[ </font>
								<font color=6df95b>${card.type}</font>
								<font color=6df95b> ]</font>
								</br><span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">卡牌效果</span>：${nature ? lib.card.sha.cardPrompt({ name: 'sha', nature }) : lib.translate[name[i] + '_info']}
								</br><span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">所在卡牌包</span>：${Packname_translate || '无'}
								<font color=6df95b>[ </font>
								<font color=6df95b>${Packname || '无'}</font>
								<font color=6df95b> ]</font>
								</br>`;
                        if (card.derivation) {
                            str += `<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextElementSibling.nextElementSibling)">卡牌来源</span> ：${lib.translate[card.derivation]}
								<font color=6df95b>[ </font>
								<font color=6df95b>${card.derivation}</font>
								<font color=6df95b> ]</font>
								</br>`;
                        }
                        str += `
							<span class="bluetext">卡牌语音（男）</span>：
							<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='卡牌语音（男）' onclick="
							let audioinfo = lib.card['${cardName || name[i]}'].audio;
							if('${cardName || name[i]}' == 'sha' && ['fire', 'thunder', 'ice'].includes('${nature}') ){
								game.playAudio('card', 'male', 'sha_${nature}');
							} else {
								if (typeof audioinfo == 'string') {
									if (audioinfo.indexOf('ext:') == 0) game.playAudio('..', 'extension', audioinfo.slice(4), '${name[i]}_male');
									else game.playAudio('card', 'male', audioinfo);
								}
								else {
									game.playAudio('card', 'male', '${name[i]}');
								}
							}
							" style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
							<span class="bluetext">卡牌语音（女）</span>：
							<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='卡牌语音（女）' onclick="
							let audioinfo = lib.card['${cardName || name[i]}'].audio;
							if('${cardName || name[i]}' == 'sha' && ['fire', 'thunder', 'ice'].includes('${nature}') ){
								game.playAudio('card', 'female', 'sha_${nature}');
							} else {
								if (typeof audioinfo == 'string') {
									if (audioinfo.indexOf('ext:') == 0) game.playAudio('..', 'extension', audioinfo.slice(4), '${name[i]}_female');
									else game.playAudio('card', 'female', audioinfo);
								}
								else {
									game.playAudio('card', 'female', '${name[i]}');
								}
							}
							" style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
							<span class="bluetext">卡牌代码</span>：
							<span style="color:6df95b" onclick='
								let display = this.nextElementSibling.style.display;
								this.nextElementSibling.style.display = display == "none" ? "" : "none";
								this.innerHTML = (display !== "none" ? "点击查看${lib.translate[name[i]]}代码" : "点击关闭${lib.translate[name[i]]}代码");
							'>点击查看${lib.translate[name[i]]}代码</span>
							<span style="display: none;">
								</br>
								<font color="21ffd8">[ ${lib.translate[name[i]]} ] </font>卡牌代码：</br>
								<pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(card))}</pre>
							</span>
							</br></br></br>`;
						this.dialog.addText(`
						<div>
							<div style="display:block; left:auto; text-align:left; font-size: 20px;"> ${str} </div>
						</div>`);
                    }
                }
                /** 寻找技能 */
                findSkill(result) {
                    let skills = [];
					// 大约3429个
					let translates = Object.keys(lib.translate).filter(v => v.endsWith('_info') && lib.skill[v.slice(0, -5)] && typeof lib.translate[v] == 'string').map(v => ({ name: v, translate: lib.translate[v] }));
                    for (let a in lib.skill) {
						if (typeof lib.translate[a] != 'string') continue;
						// 中文名包含的，或者英文id对应的
                        if (lib.translate[a].includes(result) || a === result) skills.push(a);
					}
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
							indexs.push(skills.push(v.name.slice(0, -5)) - 1);
						});
					}
                    if (skills.length == 0) return false;
                    let str = '';
                    // 展示的html代码
                    for (let i = 0; i < skills.length; i++) {
						let info;
						if (lib.translate[skills[i] + '_info']) {
							info = lib.translate[skills[i] + '_info'].slice(0);
						} else if (skills[i].endsWith('_info')) {
							skills[i] = skills[i].slice(0, -5);
							continue;
						}
						if (indexs.includes(i)) {
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
                        str += `<li>
								<!-- 技能中文名 -->
								<font color="21ffd8">[ ${lib.translate[skills[i]]} ]</font>
								<!-- 技能id -->
								<font color=6df95b>[ ${skills[i]} ]</font></br>
								<span class="bluetext" ondblclick="game.全能搜索_copy(this.nextSibling)">技能描述</span>：${info}</br>
								<span class="bluetext">技能语音</span>：
								<img src='${layoutPath}img/qhly_pic_playaudiobutton.png' alt='点击播放技能语音' onclick='game.trySkillAudio("${skills[i]}", null, true)' style='position: absolute; width: 100px; margin: 0; padding: 0;' /></br>
								<span class="bluetext">技能代码</span>：
								<a onclick='
								let display = this.parentNode.nextElementSibling.style.display;
								this.parentNode.nextElementSibling.style.display = (display == "none" ? "" : "none");
								this.innerHTML = (display !== "none" ? "点击查看技能代码" : "点击关闭技能代码");
								'>点击查看技能代码</a>
							</li>
							<li style="display: none; list-style-type: none;">
								<font color="21ffd8">[ ${lib.translate[skills[i]]} ] </font>技能代码：</br>
								<pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${game.全能搜索_highlight(get.stringify(lib.skill[skills[i]]))}</pre>
							</li>
							</br></br></br>
						`;
                    }
                    this.dialog.addText(`<div>
							<div style="text-align:center; font-size: 25px;">技能搜索结果</div>
							<div style="display:block; left:auto; text-align:left; font-size: 20px;"> ${str} </div>
						</div>
					`);
                }
                /** 寻找代码 */
                findCode(result) {
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
                        return false;
                    }

                    if (!qnssVariable.player && !qnssVariable.card) {
                        qnssVariable.player = ui.create.player().init('sunce');
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

                        if (!key || (!obj && !(last in exceptResult))) return false;

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
                                if (exceptDescriptionResult && exceptDescriptionResult[qnssKeySymbol]) {
                                    let descriptionResult = '';
                                    if (typeof exceptDescriptionResult[qnssKeySymbol] == 'string') {
                                        descriptionResult = exceptDescriptionResult[qnssKeySymbol];
                                    } else if (typeof exceptDescriptionResult[qnssKeySymbol] == 'function') {
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
                                        <span>${ lib.config.extensions.contains(descriptionObj.from) ? ('扩展【' + descriptionObj.from +'】') : descriptionObj.from }</span>
                                        </br>
                                    `;
                                }

                                // 如果指定了代码的类型
                                if (get.objtype(descriptionObj.type) == 'object' || descriptionObj.args || descriptionObj.return) {
                                    descriptionStr += `
                                        <span class="bluetext">代码类型</span>：
                                        <span>${ (!descriptionObj.args && !descriptionObj.return) ? descriptionObj.type : 'function' }</span>
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
                                if (descriptionObj && descriptionObj[window.qnssDescriptionSymbol]) {
                                    descriptionStr += `
                                        <span class="bluetext">代码描述</span>：<span>${descriptionObj[window.qnssDescriptionSymbol]}</span></br>
                                    `;
                                }
                            }
                        }

                        this.dialog.addText(`
							<div>
								<div style="text-align:center; font-size: 25px;">代码搜索结果</div>
								<div style="display:block; left:auto; text-align:left; font-size: 20px;">
									<li>
										<font color="21ffd8">[ ${result} ] </font>搜索结果：</br>
										${descriptionStr}
										<pre class="hljs language-javascript" style="user-select:text;-webkit-user-select:text;">${result + ' = '}${game.全能搜索_highlight(stringify(obj))}</pre>
									</li>
								</div>
							</div>
						`);
                    } else {
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
				 * @returns 
				 */
                tujianBegin(dialog, result, canAddToDataList) {
                    this.clearDialog(dialog);
                    if (result === "" || result === null || result === undefined) return game.alert("请输入名称");
                    game.saveExtensionConfig('全能搜索', 'searchList', this.searchList);

					const containsKey = key => this.searcherModule.contains(key);

					let resultCharacter = containsKey('findCharacter') ? this.findCharacter(result) : false;
					let resultCard = containsKey('findCard') ? this.findCard(result) : false;
					let resultSKill = containsKey('findSkill') ? this.findSkill(result) : false;
					let resultCode = containsKey('findCode') ? this.findCode(result) : false;

					if ([resultCharacter, resultCard, resultSKill, resultCode].every(v => v == false)) {
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

                    ui.background.setBackgroundImage("extension/全能搜索/img/" + ['相爱相杀', 'picture'].randomGet() + ".png");
                }
            }

            window.诗笺_manual = {
                show(target) {
                    if (!_status.全能搜索_Searcher) {
                        _status.全能搜索_Searcher = new Searcher(target);
                    } else if (_status.全能搜索_Searcher.constructor === Searcher) {
                        _status.全能搜索_Searcher.tujianBegin(_status.全能搜索_Searcher.content, target);
                    } else {
                        delete _status.全能搜索_Searcher;
                        _status.全能搜索_Searcher = new Searcher(target);
                    }
                }
            };

            const getSystem = setInterval(() => {
                if (ui.system1 || ui.system2) {
                    clearInterval(getSystem);
                    ui.Searcher = ui.create.system('全能搜索', function () {
                        window.诗笺_manual.show();
                    });
                }
            }, 500);
        },
		precontent: function() {},
		help: {},
		config: {
			"loadUpdateContent": {
				clear: true,
				name: '<span style="text-decoration: underline;">点击显示本扩展更新内容<span>',
				intro: '本扩展历史更新内容',
				onclick: function() {
					if(_status.qnssUpdateContent) return false;
					_status.qnssUpdateContent = true;
					
					let oReq = new XMLHttpRequest();
					
					oReq.addEventListener("load", function() {
						let layer = ui.create.div(ui.window, '.updateContent');
						let close = ui.create.div(layer, '.updateContentClose', () => {
							delete _status.qnssUpdateContent;
							layer.remove();
						});
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
                onclick: function() {
                    window.诗笺_manual.show();
				},
			}
		},
		package: {
			intro: '【武将卡牌搜索器】的重命名版本,导入后会自动卸载【武将卡牌搜索器】。',
			author: "<span class='bluetext'>诗笺</span>",
			version: "2.15",
		},
	}
});
