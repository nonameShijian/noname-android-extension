"use strict";
game.import("character", (lib, game, ui, get, ai, _status) => {
	/**
	 * @type {importCharacterConfig}
	 */
	const ANIMATION_VS_NONAME = {
		name: "animation_vs_noname",
		connect: true,
		character: {
			avn_alan_becker: ["male", "jin", 4, ["avn_animate"], []],
			avn_victim: ["none", "wu", 4, ["avn_adaptive"], []],
			avn_the_chosen_one: ["none", "wei", 4, ["avn_overflow"], []],
			avn_the_dark_lord: ["none", "shu", 4, ["avn_terminal"], []],
			avn_the_second_coming: ["male", "qun", 4, ["avn_passionate"], []],
			avn_the_second_coming_the_chosen_one_s_return: ["male", "qun", 4, ["avn_awakening"], []],
			avn_red: ["male", "shu", 4, ["avn_combative"], []],
			avn_green: ["male", "wu", 4, ["avn_progressive"], []],
			avn_blue: ["none", "wei", 4, ["avn_midas_touch"], []],
			avn_yellow: ["male", "qun", 4, ["avn_technological"], []]
		},
		characterFilter: {},
		characterSort: {
			animation_vs_noname: {
				avn_animator_vs_animation: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one", "avn_the_dark_lord", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red", "avn_green", "avn_blue", "avn_yellow"]
			}
		},
		characterIntro: {
			avn_alan_becker: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN0. 艾伦·贝克尔/Alan Becker<br>
				首次登场：<ruby>火柴人VS动画师 第一集<rp>（</rp><rt>Animator vs. Animation</rt><rp>）</rp></ruby><br>
				动画师，通常以鼠标的形象登场。<br>
				——《维基百科》<br>
				<hr>
				伴随火柴人们一起成长。`,
			avn_victim: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN1. 受害者/Victim<br>
				首次登场：<ruby>火柴人VS动画师 第一集<rp>（</rp><rt>Animator vs. Animation</rt><rp>）</rp></ruby><br>
				跟天选之子一样，但没有性别和任何超能力。只拥有很高攻击性，同时于第一集艾伦制造他使用来测试，但主要也是破坏艾伦的Windows XP，也有制造武器的能力，一直捣乱，艾伦尝试制止他，但他也有每一种能力去毁灭艾伦的制止器物品，然后复制更多的自己，想把艾伦的电脑炸爆，可惜没有超能力的关系，他无法阻止艾伦关闭视窗，最后就死在没有储存Flash。<br>
				——《维基百科》<br>
				<hr>
				一切的开始。`,
			avn_the_chosen_one: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN2. 天选之子/The Chosen One<br>
				首次登场：<ruby>火柴人VS动画师 第二集<rp>（</rp><rt>Animator vs. Animation 2</rt><rp>）</rp></ruby><br>
				黑色火柴人，拥有飞行、激光眼、发射火球等超能力，最后隐居在网络世界中。<br>
				——《维基百科》<br>
				<hr>
				未解之谜。`,
			avn_the_dark_lord: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN3. 黑暗领主/The Dark Lord<br>
				首次登场：<ruby>火柴人VS动画师 第三集<rp>（</rp><rt>Animator vs. Animation III</rt><rp>）</rp></ruby><br>
				做事激进的火柴人，有着和天选之子一样的实力。首次出场于《火柴人VS动画师》第三集，原是为消灭天选之子而创造出来，后与其一同攻击艾伦。与天选之子隐居在网络世界后，有着大量创造电脑病毒统治世界的野心，但被洗心革面的天选之子牵制住，最后被再临者打败。<br>
				——《维基百科》<br>
				<hr>
				“mission.The_Dark_Lord = destroy(The_Chosen_One);”`,
			avn_the_second_coming: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN4. 再临者/The Second Coming<br>
				首次登场：<ruby>火柴人VS动画师 第四集<rp>（</rp><rt>Animator vs. Animation IV</rt><rp>）</rp></ruby><br>
				橙色火柴人，首次出场于《火柴人VS动画师》第四集。实为天选之子以再临者的身份归来（不过桌面大战短集篇证实两者为不同人），并在动画师的电脑上结识了另外四位火柴人。起初动画师在与再临者展开决斗，不过最终和解，并与其他四人一起处理动画师的电脑中大大小小事。在第五集中，和同伴一起跟着天选之子，试图阻止黑暗领主的野心。在天选之子被病毒牵制住时，和其他人挑战黑暗领主，但远远不是有着超人设定的黑暗领主的对手。随着被分解代码的过程中，恢复爆发出超越黑暗领主和天选之子，再临者的力量。黑暗领主完全不敌的被打败，并用黑暗领主的电脑，恢复病毒造成的伤害后昏迷。最后告别天选之子，搭乘箭头与同伴回去。<br>
				在衍生系列《火柴人VS我的世界短集篇》中得知他擅长与战斗有关的事物，对很多技能都有一点熟悉（例如和动画师一起做动画、画图等），比起其他火柴人，有着出色的学习技能的速度，也很有创造力，处理事情总能另辟蹊径，且时常担任五个火柴人之中的领导人。<br>
				——《维基百科》<br>
				<hr>
				嘿！需要帮忙？`,
			avn_the_second_coming_the_chosen_one_s_return: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN4+. 再临者（天选之子归来）/The Second Coming (The Chosen One's Return)<br>
				首次登场：<ruby>新版火柴人 VS 动画师 第四集 决战<rp>（</rp><rt>The Showdown - AVA Shorts Episode 4</rt><rp>）</rp></ruby><br>
				<hr>
				<span style="font-size: 30px; font-weight: bold;">你终结了我的朋友。<br>现在我要终结你。</span>`,
			avn_red: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN5. 红/Red<br>
				首次登场：<ruby>火柴人VS动画师 第四集<rp>（</rp><rt>Animator vs. Animation IV</rt><rp>）</rp></ruby><br>
				曾在衍生短片《火柴人VS我的世界》中被Herobrine附身。有着出色的格斗技巧，擅长流行音乐和动物驯养。第三季第七集吸入传送门后进入怪物学院，一开始被所有人欺负，最后受到队友接受，羸得冠军。并在下界和橙国王决战，但被压制。<br>
				——《维基百科》<br>
				<hr>
				身先士卒。`,
			avn_green: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN6. 绿/Green<br>
				首次登场：<ruby>火柴人VS动画师 第四集<rp>（</rp><rt>Animator vs. Animation IV</rt><rp>）</rp></ruby><br>
				绿色火柴人，首次出场于《火柴人VS动画师》第四集。当时与红，蓝和黄被关在sticksfight.com，再临者的好朋友之一。<br>
				在衍生系列《火柴人VS我的世界短集篇》第一季第二集和第二季第三集中得知他擅长建筑，第二季第三集中建筑最后被炸烂了，不过还能从剩余的底部推断出是一个出色的建筑，同时也精通音乐。在战斗中时常使用钓鱼竿等机动性高的武器。<br>
				——《维基百科》<br>
				<hr>
				半夜不睡觉是吧？`,
			avn_blue: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN7. 蓝/Blue<br>
				首次登场：<ruby>火柴人VS动画师 第四集<rp>（</rp><rt>Animator vs. Animation IV</rt><rp>）</rp></ruby><br>
				再临者的好朋友之一。在衍生系列《火柴人VS我的世界短集篇》第二季第三集中得知和绿一样很擅长建筑。擅长爵士乐和药水制作。在战斗中时常使用弓箭等远程距离武器。<br>
				——《维基百科》<br>
				<hr>
				下——界——疣——`,
			avn_yellow: `武将作者：Show-K<br>
				插图作者：Alan Becker<br>
				<hr>
				AvN8. 黄/Yellow<br>
				首次登场：<ruby>火柴人VS动画师 第四集<rp>（</rp><rt>Animator vs. Animation IV</rt><rp>）</rp></ruby><br>
				精通计算机程序，在被电脑病毒攻击时，他以一己之力把动画师带到战场帮忙。<br>
				在衍生系列《火柴人VS我的世界短集篇》中精通《我的世界》中的红石机关，而且擅长爵士鼓。在战斗中经常利用自己出色的红石技巧。第三季第七集与蓝进入村庄，被掠夺者监禁。逃离后牧师使用了附魔台制作蓝色的权杖，并利用命令方块的力量驱赶掠夺者军团并在下界和橙国王决战，但被压制。<br>
				——《维基百科》<br>
				<hr>
				“ITSMEYELLOW”`
		},
		characterTitle: {
			avn_alan_becker: "动画师",
			avn_victim: "起源",
			avn_the_chosen_one: "自由",
			avn_the_dark_lord: "天选之子之敌",
			avn_the_second_coming: "全能选手",
			avn_the_second_coming_the_chosen_one_s_return: "天选之子归来",
			avn_red: "格斗驯师",
			avn_green: "艺术专家",
			avn_blue: "制产劳工",
			avn_yellow: "技术支援"
		},
		perfectPair: {
			avn_victim: ["avn_alan_becker"],
			avn_the_chosen_one: ["avn_alan_becker", "avn_victim"],
			avn_the_dark_lord: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one"],
			avn_the_second_coming: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one", "avn_the_dark_lord"],
			avn_the_second_coming_the_chosen_one_s_return: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one", "avn_the_dark_lord", "avn_the_second_coming"],
			avn_red: ["avn_alan_becker", "avn_the_chosen_one", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return"],
			avn_green: ["avn_alan_becker", "avn_the_chosen_one", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red"],
			avn_blue: ["avn_alan_becker", "avn_the_chosen_one", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red", "avn_green"],
			avn_yellow: ["avn_alan_becker", "avn_the_chosen_one", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red", "avn_green", "avn_blue"]
		},
		skill: {
			// Character Unlocking
			_avn_character_unlocking: {
				ruleSkill: true,
				forced: true,
				trigger: {
					global: "phaseBefore",
					player: "enterGame"
				},
				filter: (event, player) => event.name != "phase" || game.phaseNumber == 0,
				content: (event, step, source, player) => {
					[player.name, player.name1, player.name2].forEach(value => {
						switch (value) {
							case "avn_alan_becker":
								if (!lib.config.extension_桌面大战_unlocked_characters.contains("avn_victim")) {
									lib.config.extension_桌面大战_unlocked_characters.push("avn_victim");
									game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
								}
								break;
							case "avn_victim":
								if (!lib.config.extension_桌面大战_unlocked_characters.contains("avn_the_chosen_one")) {
									lib.config.extension_桌面大战_unlocked_characters.push("avn_the_chosen_one");
									game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
								}
								break;
							case "avn_the_chosen_one":
								if (!lib.config.extension_桌面大战_unlocked_characters.contains("avn_the_dark_lord")) {
									lib.config.extension_桌面大战_unlocked_characters.push("avn_the_dark_lord");
									game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
								}
								break;
							case "avn_the_dark_lord":
								if (!lib.config.extension_桌面大战_unlocked_characters.contains("avn_the_second_coming")) {
									lib.config.extension_桌面大战_unlocked_characters.push("avn_the_second_coming");
									game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
								}
								break;
							case "avn_the_second_coming":
								const lockedCharacters = ["avn_red", "avn_green", "avn_blue", "avn_yellow"].filter(value => !lib.config.extension_桌面大战_unlocked_characters.contains(value));
								if (lockedCharacters.length) {
									lib.config.extension_桌面大战_unlocked_characters.push(...lockedCharacters);
									game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
								}
								break;
						}
					});
				}
			},
			// Alan Becker
			avn_animate: {
				delay: false,
				enable: "phaseUse",
				usable: 1,
				position: "h",
				filterCard: card => {
					const type = get.type(card);
					return type == "basic" || type == "trick";
				},
				filterTarget: true,
				filter: (event, player) => player.hasCard(card => {
					const type = get.type(card);
					return type == "basic" || type == "trick";
				}, "h"),
				discard: false,
				lose: false,
				check: card => {
					const handCardValues = _status.event.player.getCards("h").map(value => get.value(value));
					return Math.abs(get.value(card) - handCardValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / handCardValues.length);
				},
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					event.card = cards[0];
					player.showCards(event.card, `${get.translation(player)}对${(targets => {
						if (get.itemtype(targets) == "player") targets = [targets];
						if (targets[0] == player) {
							if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
							return "自己";
						}
						return get.translation(targets);
					})(target)}发动了【${get.skillTranslation(event.name, player)}】`);
					"step 1"
					if (target.hp > 0) player.choosePlayerCard(target, "h", [1, target.hp], `${get.skillTranslation(event.name, player)}：令${get.translation(target)}至多${get.cnNumber(target.hp)}张手牌均视为${get.translation({
						name: get.name(card),
						nature: get.nature(card)
					})}，直到其使用牌结算/回合结束后`).ai = button => get.attitude(_status.event.player, _status.event.getParent().target) > 0 ? 11 - get.buttonValue(button) : get.buttonValue(button);
					else event.finish();
					"step 2"
					if (result.cards && result.cards.length) {
						const effectSkillName = `${event.name}_effect`;
						target.addGaintag(result.cards, effectSkillName);
						const name = get.name(card);
						const nature = get.nature(card);
						target.popup(name, nature);
						target.addTempSkill(effectSkillName, {
							player: ["useCardAfter", "phaseAfter"]
						});
						target.storage[effectSkillName].add({
							name: name,
							nature: nature
						});
						game.delayx();
					}
				},
				ai: {
					order: 10,
					result: {
						target: (player, target) => {
							if (ui.selected.cards.length) {
								const cardValue = get.value(ui.selected.cards[0]);
								const handCardValues = player.getCards("h").map(value => get.value(value));
								const averageHandCardValue = handCardValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / handCardValues.length;
								if (cardValue < averageHandCardValue) return -Math.min(target.countCards("h"), Math.max(target.hp, 0));
								if (cardValue > averageHandCardValue) return Math.min(target.countCards("h"), Math.max(target.hp, 0));
							}
							return 0;
						}
					}
				}
			},
			avn_animate_effect: {
				charlotte: true,
				init: (player, skill) => {
					if (!Array.isArray(player.storage[skill])) player.storage[skill] = [];
				},
				onremove: (player, skill) => {
					player.removeGaintag(skill);
					delete player.storage[skill];
				},
				mark: true,
				intro: {
					content: (storage, player) => {
						const affectedHandCards = player.getCards("h", card => card.hasGaintag("avn_animate_effect"));
						if (!affectedHandCards.length) return `无效果`;
						if (player.isUnderControl(true)) return `${get.translation(affectedHandCards)}${affectedHandCards.length > 1 && "均"}视为${get.translation(storage[storage.length - 1])}`;
						return `有${get.cnNumber(affectedHandCards.length)}张手牌${affectedHandCards.length > 1 ? "均" : ""}视为${get.translation(storage[storage.length - 1])}`;
					},
					markcount: (storage, player) => player.countCards("h", card => card.hasGaintag("avn_animate_effect"))
				},
				mod: {
					cardname: (card, player) => {
						if (card.hasGaintag("avn_animate_effect")) {
							const storage = player.getStorage("avn_animate_effect");
							return storage[storage.length - 1].name;
						}
					},
					cardnature: (card, player) => {
						if (card.hasGaintag("avn_animate_effect")) {
							const storage = player.getStorage("avn_animate_effect");
							return storage[storage.length - 1].nature;
						}
					}
				},
				ai: {
					nokeep: true
				}
			},
			// Victim
			avn_adaptive: {
				init: (player, skill) => {
					player.addSkill(`${skill}_previous`);
				},
				hiddenCard: (player, name) => {
					if (player.getStat("skill").avn_adaptive) return false;
					if (!player.countCards("hes")) return false;
					if (typeof player.storage.avn_adaptive_previous != "object") return false;
					return player.storage.avn_adaptive_previous.name == name;
				},
				locked: false,
				enable: ["chooseToUse", "chooseToRespond"],
				usable: 1,
				position: "hes",
				filterCard: true,
				viewAs: (cards, player) => typeof player.storage.avn_adaptive_previous == "object" ? player.storage.avn_adaptive_previous : null,
				filter: (event, player) => {
					if (!player.countCards("hes")) return false;
					if (typeof player.storage.avn_adaptive_previous != "object") return false;
					return event.filterCard(player.storage.avn_adaptive_previous, player, event);
				},
				prompt: () => {
					const avn_adaptive_previous = _status.event.player.storage.avn_adaptive_previous;
					return `你可以展示所有手牌，并将一张牌当做${typeof avn_adaptive_previous == "object" ? get.translation(avn_adaptive_previous) : ""}使用或打出`;
				},
				check: card => 7 - get.value(card),
				precontent: (event, step, source, player) => {
					const skill = event.result.skill;
					delete event.result.skill;
					const skillStat = player.stat[player.stat.length - 1].skill;
					if (typeof skillStat[skill] == "undefined") skillStat[skill] = 1;
					else skillStat[skill]++;
					const targets = event.result.targets;
					player.logSkill(skill, targets);
					player.showHandcards(`${get.translation(player)}对${(targets => {
						if (get.itemtype(targets) == "player") targets = [targets];
						if (targets[0] == player) {
							if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
							return "自己";
						}
						return get.translation(targets);
					})(targets)}发动了【${get.skillTranslation(skill, player)}】`);
				},
				mod: {
					targetInRange: card => {
						if (card.storage && card.storage.avn_adaptive) return true;
					},
					cardUsable: card => {
						if (card.storage && card.storage.avn_adaptive) return Infinity;
					}
				},
				ai: {
					fireAttack: true,
					respondSha: true,
					respondShan: true,
					respondTao: true,
					save: true,
					skillTagFilter: (player, tag) => {
						if (player.getStat("skill").avn_adaptive) return false;
						if (!player.countCards("hes")) return false;
						if (typeof player.storage.avn_adaptive_previous != "object") return false;
						switch (tag) {
							case "fireAttack":
								if (player.storage.avn_adaptive_previous.name != "huogong") return false;
								break;
							case "respondSha":
								if (player.storage.avn_adaptive_previous.name != "sha") return false;
								break;
							case "respondShan":
								if (player.storage.avn_adaptive_previous.name != "shan") return false;
								break;
							case "respondTao":
								if (player.storage.avn_adaptive_previous.name != "tao") return false;
								break;
							case "save":
								if (!get.tag(player.storage.avn_adaptive_previous, "save")) return false;
						}
					},
					order: (item, player) => typeof player.storage.avn_adaptive_previous == "object" ? get.order(player.storage.avn_adaptive_previous) - 0.1 : 10
				}
			},
			avn_adaptive_previous: {
				charlotte: true,
				firstDo: true,
				silent: true,
				trigger: { global: "useCard1" },
				filter: event => {
					const type = get.type(event.card);
					return type == "basic" || type == "trick";
				},
				content: () => {
					const card = player.storage.avn_adaptive_previous = Object.assign({}, trigger.card);
					delete card.isCard;
					delete card.suit;
					delete card.number;
					if (!card.storage) card.storage = {};
					card.storage.avn_adaptive = true;
				}
			},
			// The Chosen One
			avn_overflow: {
				direct: true,
				trigger: {
					player: "phaseUseBegin"
				},
				filter: (event, player) => player.hasCard(card => lib.filter.cardDiscardable(card, player)),
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.chooseCardTarget({
						position: "h",
						filterCard: (card, player) => lib.filter.cardDiscardable(card, player) && (!ui.selected.cards.length || get.suit(card) == get.suit(ui.selected.cards[0])),
						selectCard: () => ui.selected.cards.length ? _status.event.player.countCards("h", card => lib.filter.cardDiscardable(card, _status.event.player) && get.suit(card) == get.suit(ui.selected.cards[0])) : [1, Infinity],
						filterTarget: true,
						ai1: card => 8 - get.useful(card) - Math.pow(_status.event.player.countCards("h", value => get.suit(value) == get.suit(card)), 2),
						ai2: target => {
							const controls = lib.linked.slice();
							controls.remove("kami");
							controls.push("cancel2");
							const player = _status.event.player;
							return Math.max(...controls.map(value => get.damageEffect(target, player, player, value)));
						},
						prompt: get.prompt(event.name),
						prompt2: get.skillInfoTranslation(event.name, player)
					});
					"step 1"
					if (result.cards && result.cards.length && result.targets && result.targets.length) {
						event.cards = result.cards;
						event.target = result.targets[0];
						player.logSkill(event.name, event.target);
						player.showHandcards(`${get.translation(player)}对${(targets => {
							if (get.itemtype(targets) == "player") targets = [targets];
							if (targets[0] == player) {
								if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
								return "自己";
							}
							return get.translation(targets);
						})(event.target)}发动了【${get.skillTranslation(event.name, player)}】`);
						if (event.target != player) player.addExpose(0.2);
					}
					else event.finish();
					"step 2"
					player.discard(cards.filter(value => lib.filter.cardDiscardable(value, player)));
					"step 3"
					const controls = lib.linked.slice();
					controls.remove("kami");
					player.chooseControl(...controls).set("prompt", `${get.skillTranslation(event.name, player)}：对${get.translation(target)}造成1点你指定的属性伤害`).ai = (event, player) => {
						const choices = _status.event.controls.map(value => get.damageEffect(_status.event.getParent().target, player, player, value));
						const max = Math.max(...choices);
						return choices.reduce((previousValue, currentValue, currentIndex) => {
							if (currentValue == max) previousValue.push(currentIndex);
							return previousValue;
						}, []).randomGet();
					};
					"step 4"
					if (result.control) {
						player.line(target, result.control);
						const delayx = game.createEvent("delayx");
						event.next.remove(delayx);
						target.damage(player, result.control, "nocard").after.push(delayx);
						delayx.setContent(() => {
							game.delayx();
						});
					}
				}
			},
			// The Dark Lord
			avn_terminal: {
				direct: true,
				trigger: {
					player: "phaseUseEnd"
				},
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.chooseTarget(get.prompt2(event.name)).ai = target => {
						const attitude = get.attitude(_status.event.player, target);
						return (attitude < 0 ? -Math.sqrt(-attitude) : Math.sqrt(attitude)) * (() => {
							if (target.countCards("h") == 0 || target.hasSkillTag("noh")) return 0;
							if (attitude <= 0 && !target.countCards("h")) return 1.5;
							return -1.5;
						})();
					};
					"step 1"
					if (result.targets && result.targets.length) {
						event.target = result.targets[0];
						player.logSkill(event.name, event.target);
						player.showCards(event.target.getCards("h"), `${get.translation(player)}对${(targets => {
							if (get.itemtype(targets) == "player") targets = [targets];
							if (targets[0] == player) {
								if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
								return "自己";
							}
							return get.translation(targets);
						})(event.target)}发动了【${get.skillTranslation(event.name, player)}】`);
						if (event.target != player) player.addExpose(0.2);
					}
					else event.finish();
					"step 2"
					if (target.countDiscardableCards(player, "h")) player.discardPlayerCard(`${get.skillTranslation(event.name, player)}：你可以弃置${get.translation(target)}的手牌中一种花色的所有牌`, target, "h", "visible").set("complexSelect", true).set("filterButton", button => !ui.selected.buttons.length || get.suit(button.link) == get.suit(ui.selected.buttons[0].link)).set("selectButton", () => ui.selected.buttons.length ? _status.event.getParent().target.countDiscardableCards(_status.event.player, "h", card => get.suit(card) == get.suit(ui.selected.buttons[0].link)) : [1, Infinity]).ai = button => {
						const player = _status.event.player;
						const target = _status.event.getParent().target;
						const buttonValue = get.buttonValue(button) + Math.pow(target.countDiscardableCards(player, "h", card => get.suit(card) == get.suit(button.link)), 2) - 1;
						if (get.attitude(player, target) > 0) return -buttonValue;
						return buttonValue;
					};
					else event.finish();
					"step 3"
					if (target != player && result.cards && result.cards.length) player.addExpose(0.2);
				}
			},
			// The Second Coming
			avn_passionate: {
				intro: {
					content: "上一张展示牌的颜色为$"
				},
				delay: false,
				enable: "phaseUse",
				usable: 1,
				filterTarget: (card, player, target) => target.countCards("h"),
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.choosePlayerCard(target, "h", `${get.skillTranslation(event.name, player)}：展示${get.translation(target)}一张手牌。若展示牌为红/黑色，你可以令一名角色摸/弃置一张牌${typeof player.storage[event.name] == "string" ? `；若展示牌不为${get.translation(player.storage[event.name])}，你可以再令一名角色执行另一项` : ""}`, true);
					"step 1"
					if (result.cards && result.cards.length) {
						const next = game.createEvent("showCardsFinish");
						event.next.remove(next);
						player.showCards(result.cards, `${get.translation(player)}对${(targets => {
							if (get.itemtype(targets) == "player") targets = [targets];
							if (targets[0] == player) {
								if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
								return "自己";
							}
							return get.translation(targets);
						})(target)}发动了【${get.skillTranslation(event.name, player)}】`).after.push(next);
						next.player = player;
						next.skill = event.name;
						next.color = event.color = get.color(result.cards);
						event.previousColor = player.storage[event.name];
						next.setContent(() => {
							player.storage[skill] = event.color;
							player.markSkill(skill);
							game.broadcastAll((player, skill, innerHTML) => player.marks[skill].firstChild.innerHTML = innerHTML, player, skill, get.translation(event.color)[0]);
						});
					}
					"step 2"
					if (event.color == "red" || event.color == "black")
						player.chooseTarget(`${get.skillTranslation(event.name, player)}：你可以令一名角色${event.color == "red" ? "摸" : "弃置"}一张牌`, (card, player, target) => _status.event.getParent().color == "red" || target.hasCard(card => lib.filter.cardDiscardable(card, target), "he")).set("targetprompt", () => _status.event.getParent().color == "red" ? "摸牌" : "弃置牌").ai = target => _status.event.getParent().color == "red" ? get.sgnAttitude(_status.event.player, target) : (target.hasCard(card => get.value(card, target) <= 0, "e") ? 1 : -1) * get.attitude(_status.event.player, target);
					else
						event.finish();
					"step 3"
					if (result.targets && result.targets.length) {
						player.line(result.targets, "green");
						switch (event.color) {
							case "red":
								result.targets[0].draw();
								break;
							case "black":
								result.targets[0].chooseToDiscard(`${get.skillTranslation(event.name, player)}：弃置一张牌`, "he", true);
						}
					}
					"step 4"
					if (typeof event.previousColor == "string" && event.color != event.previousColor) player.chooseTarget(`${get.skillTranslation(event.name, player)}：你可以令一名角色${event.color == "black" ? "摸" : "弃置"}一张牌`, (card, player, target) => _status.event.getParent().color == "black" || target.hasCard(card => lib.filter.cardDiscardable(card, target), "he")).set("targetprompt", () => _status.event.getParent().color == "black" ? "摸牌" : "弃置牌").ai = target => _status.event.getParent().color == "black" ? get.sgnAttitude(_status.event.player, target) : (target.hasCard(card => get.value(card, target) <= 0, "e") ? 1 : -1) * get.attitude(player, target);
					else event.finish();
					"step 5"
					if (result.targets && result.targets.length) {
						player.line(result.targets, "green");
						switch (event.color) {
							case "black":
								result.targets[0].draw();
								break;
							case "red":
								result.targets[0].chooseToDiscard(`${get.skillTranslation(event.name, player)}：弃置一张牌`, "he", true);
						}
					}
				},
				ai: {
					order: 10,
					result: {
						target: (player, target) => Math.min(get.sgnAttitude(player, target), 0)
					}
				}
			},
			avn_anomaly: {
				charlotte: true,
				init: (player, skill) => {
					if (!player.storage[skill]) {
						player.storage[skill] = 1;
						game.broadcastAll(player => {
							player.nodying = true;
							document.body.addEventListener("animationend", ev => {
								if (ev.animationName == "avn-pulse" || ev.animationName == "avn-strong-pulse") document.body.classList.remove(ev.animationName);
							});
							setTimeout(() => {
								const preloadLink = document.createElement("link");
								preloadLink.rel = "preload";
								preloadLink.href = `${lib.assetURL}extension/桌面大战/image/background/avn_the_second_coming_the_chosen_one_s_return_bg.webp`;
								preloadLink.as = "image";
								document.head.appendChild(preloadLink);
							}, 1000);
						}, player);
					}
				},
				forced: true,
				trigger: {
					global: "phaseZhunbeiBegin"
				},
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger) => {
					"step 0"
					if (player.storage[event.name] == 1 && trigger.player == player && (player.name == "avn_the_second_coming" || player.name1 == "avn_the_second_coming" || player.name2 == "avn_the_second_coming")) {
						game.broadcastAll(player => {
							const preAnomaly = document.getElementById("avn-pre-anomaly");
							if (preAnomaly) {
								preAnomaly.style.transitionDuration = "1s";
								preAnomaly.style.boxShadow = "inset 0 0 200px 400px #d8eec2";
								preAnomaly.style.opacity = "1";
							}
							setTimeout(preAnomaly => {
								_status._aozhan = true;
								game.playBackgroundMusic();
								if (ui.background) ui.background.setBackgroundImage(`extension/桌面大战/image/background/avn_the_second_coming_the_chosen_one_s_return_bg.webp`);
								if (preAnomaly) {
									preAnomaly.style.boxShadow = "inset 0 0 200px 200px #d8eec2";
									preAnomaly.style.opacity = "0";
								}
							}, 1000, preAnomaly);
							if (player.showIdentity) player.showIdentity();
						}, player);
						player.storage[event.name] == 2;
						if (player.name == "avn_the_second_coming") player.reinit(player.name, "avn_the_second_coming_the_chosen_one_s_return");
						if (player.name1 == "avn_the_second_coming") player.reinit(player.name1, "avn_the_second_coming_the_chosen_one_s_return");
						if (player.name2 == "avn_the_second_coming") player.reinit(player.name2, "avn_the_second_coming_the_chosen_one_s_return");
						game.triggerEnter(player);
					}
					else {
						if (player.getDamagedHp()) {
							player.recover("nocard");
							player.draw();
						}
						event.finish();
					}
					"step 1"
					if (player.getDamagedHp()) {
						const damagedHp = player.maxHp - player.hp;
						player.recover(damagedHp, "nocard");
						player.draw(damagedHp);
					}
					game.broadcastAll(player => delete player.nodying, player);
					lib.onover.push(resultbool => {
						if (resultbool) game.filterPlayer2(current => current.isUnderControl(true) && (current.name == "avn_the_second_coming_the_chosen_one_s_return" || current.name1 == "avn_the_second_coming_the_chosen_one_s_return" || current.name2 == "avn_the_second_coming_the_chosen_one_s_return")).forEach(value => game.filterPlayer2(current => {
							lib.config.extension_桌面大战_unlocked_characters.add("avn_the_second_coming_the_chosen_one_s_return");
							game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters);
							if (!current.isIn() && (current.isFriendsOf(value) || value.isFriendsOf(current))) game.broadcastAll(current => {
								value.line(current, "green");
								current.in();
								if (current.isDead()) current.revive(current.maxHp);
							}, current);
						}));
					});
				}
			},
			_avn_anomaly_check: {
				ruleSkill: true,
				forced: true,
				trigger: {
					player: "changeHp"
				},
				filter: (event, player) => {
					if (lib.config.extension_桌面大战_unlocked_characters.contains("avn_the_second_coming_the_chosen_one_s_return")) return false;
					if (player.storage.avn_anomaly) return false;
					if (event.num > 0) return false;
					if (player.name != "avn_the_second_coming" && player.name1 != "avn_the_second_coming" && player.name2 != "avn_the_second_coming") return false;
					const friends = game.filterPlayer2(current => current.isFriendsOf(player) || player.isFriendsOf(current));
					const inGameFriends = friends.filter(value => value.isIn());
					return inGameFriends.length < friends.length && inGameFriends.every(value => value.name == "avn_the_second_coming" || value.name1 == "avn_the_second_coming" || value.name2 == "avn_the_second_coming");
				},
				content: (event, step, source, player) => {
					if (!player.storage.avn_pre_anomaly) {
						player.storage.avn_pre_anomaly = true;
						game.broadcastAll(() => {
							const preAnomaly = document.createElement("div");
							document.body.append(preAnomaly);
							preAnomaly.id = "avn-pre-anomaly";
							setTimeout(preAnomaly => preAnomaly.style.opacity = "0.5", 1000, preAnomaly);
						});
					}
					if (player.hp <= 0) player.addSkill("avn_anomaly");
				}
			},
			_avn_anomaly_effect: {
				ruleSkill: true,
				forced: true,
				trigger: {
					global: "changeHp"
				},
				filter: event => {
					if (lib.config.extension_桌面大战_unlocked_characters.contains("avn_the_second_coming_the_chosen_one_s_return")) return false;
					const evt = event.getParent();
					switch (evt.name) {
						case "damage": return evt.player && evt.player.storage.avn_anomaly || evt.source && evt.source.storage.avn_anomaly;
						case "loseHp":
							if (evt.player && evt.player.storage.avn_anomaly) return true;
							const parent = evt.getParent();
							return parent.player && parent.player.storage.avn_anomaly;
					}
					return false;
				},
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger) => {
					if (trigger.num < -1) game.broadcastAll(() => {
						document.body.classList.add("avn-strong-pulse");
					});
					else game.broadcastAll(() => {
						document.body.classList.add("avn-pulse");
					});
				}
			},
			// The Second Coming (The Chosen One's Return)
			avn_awakening: {
				delay: false,
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.showCards(target.getCards("h"), `${get.translation(player)}对${(targets => {
						if (get.itemtype(targets) == "player") targets = [targets];
						if (targets[0] == player) {
							if (targets.length > 1) return `自己、${get.translation(targets.slice(1))}`;
							return "自己";
						}
						return get.translation(targets);
					})(target)}发动了【${get.skillTranslation(event.name, player)}】`);
					"step 1"
					const controls = ["选项二", "cancel2"];
					const lengthOfBlackCards = target.countCards("h", {
						color: "black"
					});
					const choiceList = [`令${get.translation(target)}${lengthOfBlackCards ? `摸${get.cnNumber(lengthOfBlackCards)}张牌，然后` : ""}失去1点体力`];
					const firstControl = [];
					const redCards = target.getCards("h", card => lib.filter.cardDiscardable(card, target) && get.color(card) == "red");
					if (redCards.length) firstControl.push(`弃置${get.translation(redCards)}`);
					if (target.getDamagedHp()) firstControl.push("回复1点体力");
					if (firstControl.length) {
						controls.unshift("选项一");
						choiceList.unshift(`令${get.translation(target)}${firstControl.join("，然后")}`);
					}
					else choiceList.unshift(`<span style="opacity: 0.5;">此选项不可用</span>`);
					player.chooseControl(...controls).set("choiceList", choiceList).set("prompt", `${get.skillTranslation(event.name, player)}：你可以选择一项`).ai = (event, player) => {
						const choices = _status.event.controls.filter(value => {
							if (value == "选项一" || value == "选项二") {
								const target = event.target;
								const attitude = -get.attitude(player, target);
								const squareRootOfAttitude = (attitude < 0 ? -Math.sqrt(-attitude) : Math.sqrt(attitude));
								if (value == "选项一") {
									const valueOfRedCards = target.getCards("h", card => lib.filter.cardDiscardable(card, target) && get.color(card) == "red").reduce((previousValue, currentValue) => previousValue + get.value(currentValue, target), 0);
									return -squareRootOfAttitude * (valueOfRedCards < 0 ? -Math.sqrt(-valueOfRedCards) : Math.sqrt(valueOfRedCards)) + get.recoverEffect(target, player, player) > 0;
								}
								else return squareRootOfAttitude * target.countCards("h", {
									color: "black"
								}) * 0.75 + get.effect(target, {
									name: "losehp"
								}, player, player) > 0;
							}
							return false;
						});
						if (choices.length) return choices.randomGet();
						return "cancel2";
					};
					"step 2"
					switch (result.control) {
						case "选项一":
							const redCards = target.getCards("h", card => lib.filter.cardDiscardable(card, target) && get.color(card) == "red");
							if (redCards.length) target.discard(redCards);
							if (target.getDamagedHp()) {
								const delayx = game.createEvent("delayx");
								event.next.remove(delayx);
								target.recover("nocard").after.push(delayx);
								delayx.setContent(() => {
									game.delayx();
								});
							}
							break;
						case "选项二":
							const lengthOfBlackCards = target.countCards("h", {
								color: "black"
							});
							if (lengthOfBlackCards) target.draw(lengthOfBlackCards);
							const delayx = game.createEvent("delayx");
							event.next.remove(delayx);
							target.loseHp().after.push(delayx);
							delayx.setContent(() => {
								game.delayx();
							});
					}
				},
				ai: {
					order: 10,
					result: {
						target: (player, target) => get.sgnAttitude(player, target)
					}
				}
			},
			// Red
			avn_combative: {
				intro: {
					content: "expansion",
					markcount: "expansion"
				},
				onremove: (player, skill) => {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				direct: true,
				trigger: {
					global: ["eventNeutralized", "shaMiss"],
					player: "damageEnd"
				},
				filter: (event, player, name) => name == "damageEnd" ? player.hasCard(card => game.hasPlayer(current => lib.filter.canBeGained(card, current, player)), "sx") : player.countCards("hej"),
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					if (event.triggername == "damageEnd") player.chooseTarget(get.prompt(event.name), `你可以将武将牌上${trigger.num > 1 ? "至多" : ""}${get.cnNumber(trigger.num)}张牌交给一名角色`).ai = target => Math.max(..._status.event.player.getCards("sx", card => lib.filter.canBeGained(card, target, _status.event.player)).map(value => get.sgnAttitude(_status.event.player, target) * get.value(value, target)));
					else player.choosePlayerCard(player, "hej", `###${get.prompt(event.name)}###你可以将区域内一张红色牌置于武将牌上，视为使用一张决斗`).set("filterButton", button => get.color(button.link) == "red").ai = button => {
						const buttonValue = get.buttonValue(button);
						return buttonValue < 0 ? -buttonValue : _status.event.player.getUseValue({
							name: "juedou",
							isCard: true
						}) > 0 ? 8 - buttonValue : 0;
					};
					"step 1"
					if (event.triggername == "damageEnd") {
						if (result.targets && result.targets.length) {
							event.target = result.targets[0];
							player.logSkill(event.name, event.target);
							player.chooseCardButton(`${get.skillTranslation(event.name, player)}：你可以将武将牌上${trigger.num > 1 ? "至多" : ""}${get.cnNumber(trigger.num)}张牌交给${get.translation(event.target)}`, true, [1, trigger.num], player.getCards("sx")).set("filterButton", (button, player) => lib.filter.canBeGained(button.link, _status.event.getParent().target, player)).ai = button => {
								const target = _status.event.getParent().target;
								return get.attitude(_status.event.player, target) * get.value(button.link, target);
							};
						}
						else event.finish();
					}
					else if (result.links && result.links.length) {
						player.logSkill(event.name);
						player.addToExpansion(result.links, player, "give").gaintag.add(event.name);
					}
					else event.finish();
					"step 2"
					if (event.triggername == "damageEnd") {
						if (result.links && result.links.length) {
							player.give(result.links, target);
							player.addExpose(0.2);
						}
					}
					else player.chooseUseTarget({
						name: "juedou",
						isCard: true
					}, true, false);
				},
				ai: {
					maixie: true,
					skillTagFilter: player => {
						if (!player.hasCard(card => game.hasPlayer(current => lib.filter.canBeGained(card, current, player)), "sx")) return false;
					}
				}
			},
			// Green
			avn_progressive: {
				locked: false,
				mod: {
					aiOrder: (player, card, num) => {
						const history = player.getAllHistory("useCard");
						if (!history.length) return Math.max(num + Math.pow(Math.abs(card.number - 7), 2), 1);
						const cardNumbers = history.map(evt => evt.card.number);
						const length = cardNumbers.length;
						const secondCardNumber = cardNumbers[length - 1];
						const thirdCardNumber = card.number;
						if (history.length > 1) {
							const firstCardNumber = cardNumbers[length - 2];
							if (firstCardNumber <= secondCardNumber && secondCardNumber <= thirdCardNumber) return Math.max(20 - Math.pow(thirdCardNumber + secondCardNumber, 2), 1);
							if (firstCardNumber >= secondCardNumber && secondCardNumber >= thirdCardNumber) return Math.max(20 - Math.pow(secondCardNumber + thirdCardNumber, 2), 1);
						}
						return Math.max(num + 10 - Math.pow(Math.abs(secondCardNumber - thirdCardNumber), 2), 1);
					}
				},
				direct: true,
				trigger: {
					player: "useCard"
				},
				filter: (event, player) => {
					const history = player.getAllHistory("useCard");
					if (history.length < 3) return false;
					const cardNumbers = history.map(evt => evt.card.number);
					const length = cardNumbers.length;
					const firstCardNumber = cardNumbers[length - 3];
					const secondCardNumber = cardNumbers[length - 2];
					const thirdCardNumber = event.card.number;
					return firstCardNumber <= secondCardNumber && secondCardNumber <= thirdCardNumber || firstCardNumber >= secondCardNumber && secondCardNumber >= thirdCardNumber;
				},
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.chooseCardTarget({
						position: "he",
						filterCard: lib.filter.cardDiscardable,
						selectCard: [0, Infinity],
						filterTarget: true,
						selectTarget: () => [1, ui.selected.cards.length + 1],
						ai1: card => ui.selected.cards.length + 1 < game.filterPlayer(current => get.attitude(_status.event.player, current) > 0).length && 5 - get.useful(card),
						ai2: target => get.attitude(player, target),
						prompt: get.prompt(event.name),
						prompt2: get.skillInfoTranslation(event.name, player)
					});
					"step 1"
					if (result.targets && result.targets.length) {
						const targets = result.targets.sortBySeat(_status.currentPhase);
						player.logSkill(event.name, targets);
						if (targets.filter(value => value != player).length) player.addExpose(0.2);
						if (result.cards && result.cards.length) player.discard(result.cards).delay = false;
						game.asyncDraw(targets);
					}
				}
			},
			// Blue
			avn_midas_touch: {
				frequent: true,
				trigger: {
					global: "phaseJieshuBegin"
				},
				filter: (event, player) => player.hasHistory("useCard", evt => evt.card.suit == "club") || player.hasHistory("respond", evt => evt.card.suit == "club"),
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.showCards(event.cards = game.cardsGotoOrdering(get.cards(3)).cards, `${get.translation(player)}发动了【${get.skillTranslation(event.name, player)}】`);
					"step 1"
					if (cards.length) player.chooseTarget([1, 3], `${get.skillTranslation(event.name, player)}：令至多三名角色可以依次获得${get.translation(cards)}${cards.length > 1 ? "中的一张牌" : ""}`).ai = target => {
						const attitude = get.attitude(_status.event.player, target);
						const squareRootOfAttitude = attitude < 0 ? -Math.sqrt(-attitude) : Math.sqrt(attitude);
						const cards = _status.event.getParent().cards;
						const preChosenTargets = ui.selected.targets.slice();
						preChosenTargets.add(target);
						preChosenTargets.sortBySeat(_status.currentPhase).splice(preChosenTargets.indexOf(target));
						if (!preChosenTargets.length) {
							const possibleEffects = cards.map(value => squareRootOfAttitude * get.value(value, target));
							return attitude > 0 ? Math.max(...possibleEffects) : Math.min(...possibleEffects);
						}
						const possibleEffects = preChosenTargets.reduce((previousValue, currentValue) => {
							const possibleCardValues = previousValue.map(value => get.value(value, currentValue));
							const max = Math.max(...possibleCardValues);
							if (max > 0) previousValue.splice(possibleCardValues.indexOf(max), 1);
							return previousValue;
						}, cards.slice()).map(value => squareRootOfAttitude * get.value(value, target));
						return attitude > 0 ? Math.max(...possibleEffects) : Math.min(...possibleEffects);
					};
					else event.finish();
					"step 2"
					if (result.targets && result.targets.length) {
						player.line(event.targets = result.targets.sortBySeat(_status.currentPhase), "green");
						event.num = 0;
					}
					else event.finish();
					"step 3"
					targets[num].chooseCardButton(`${get.skillTranslation(event.name, player)}：你可以获得${get.translation(cards)}${cards.length > 1 ? "中的一张牌" : ""}`, cards).ai = button => get.value(button.link, _status.event.player);
					"step 4"
					if (result.links && result.links.length) {
						const links = result.links;
						cards.removeArray(links);
						targets[num].gain(links, "gain2");
					}
					event.num++;
					if (event.num < targets.length) event.goto(3);
				}
			},
			// Yellow
			avn_technological: {
				round: 1,
				direct: true,
				trigger: {
					player: "phaseEnd"
				},
				filter: () => Math.log2(game.getGlobalHistory("cardMove", evt => evt.name == "lose" && evt.position == ui.discardPile || evt.name == "cardsDiscard").map(value => value.cards).flat().reduce((previousValue, currentValue) => previousValue + get.translation(currentValue.name).length, 0)) % 1 === 0,
				content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
					"step 0"
					player.chooseTarget(get.prompt2(event.name)).ai = target => {
						if (target.hasJudge("lebu")) return -1;
						if (get.attitude(player, target) > 4) return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards("h") + 1);
						return -1;
					};
					"step 1"
					if (result.targets && result.targets.length) {
						const target = result.targets[0];
						player.logSkill(event.name, target);
						if (target != player) player.addExpose(0.2);
						target.insertPhase();
					}
				}
			}
		},
		dynamicTranslate: {},
		characterReplace: {
			avn_the_second_coming: ["avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return"]
		},
		translate: {
			avn_animator_vs_animation: "火柴人VS动画师",
			// Alan Becker
			avn_alan_becker: "艾伦·贝克尔",
			avn_alan_becker_ab: "艾伦贝克尔",
			avn_animate: "赋名",
			avn_animate_effect: "赋名",
			avn_animate_info: "出牌阶段限一次，你可以展示一张基本牌或普通锦囊牌，令一名角色至多其体力值张手牌均视为此牌，直到其使用牌结算/回合结束后。",
			// Victim
			avn_victim: "受害者",
			avn_adaptive: "应识",
			avn_adaptive_info: "每回合限一次，你可以展示所有手牌，并将一张牌当做上一张被使用的基本牌或普通锦囊牌使用或打出（无距离和次数限制）。",
			// The Chosen One
			avn_the_chosen_one: "天选之子",
			avn_overflow: "超限",
			avn_overflow_backup: "超限",
			avn_overflow_info: "出牌阶段开始时，你可以展示所有手牌并弃置一种花色的所有牌（至少一张），对一名角色造成1点属性伤害。",
			// The Dark Lord
			avn_the_dark_lord: "黑暗领主",
			avn_terminal: "终焉",
			avn_terminal_info: "出牌阶段结束时，你可以展示一名角色的所有手牌，然后你可以弃置其中一种花色的所有牌。",
			// The Second Coming
			avn_the_second_coming: "再临者",
			avn_passionate: "炽觉",
			avn_passionate_info: "出牌阶段限一次，你可以展示一名角色的一张手牌。若展示牌为红/黑色，你可以令一名角色摸/弃置一张牌。若展示牌与上一张的颜色不同，你可以再令一名角色执行另一项。",
			// The Second Coming (The Chosen One's Return)
			avn_the_second_coming_the_chosen_one_s_return: "再临者",
			avn_awakening: "决唤",
			avn_awakening_info: "出牌阶段限一次，你可以展示一名角色的所有手牌，然后你可以选择一项：1. 令其弃置所有红色手牌，然后回复1点体力；2. 令其摸黑色手牌数量张牌，然后失去1点体力。",
			// Red
			avn_red: "红",
			avn_combative: "攻先",
			avn_combative_info: "当有牌被抵消后，你可以将区域内一张红色牌置于武将牌上，视为使用一张【决斗】；当你受到伤害后，你可以将武将牌上至多伤害值张牌交给一名角色。",
			// Green
			avn_green: "绿",
			avn_progressive: "筑韵",
			avn_progressive_info: "当你使用一张牌时，若你使用的上上一张、上一张、此牌的点数为单调递增/减，你可以弃置任意张牌，令至多X+1名角色各摸一张牌（X为弃置的牌数）。",
			// Blue
			avn_blue: "蓝",
			avn_midas_touch: "点金",
			avn_midas_touch_info: "一名角色的结束阶段，若你于此回合内使用或打出过♣牌，你可以亮出牌堆顶三张牌，令至多三名角色可以依次获得亮出牌中的一张。",
			// Yellow
			avn_yellow: "黄",
			avn_technological: "械智",
			avn_technological_info: "每轮限一次，回合结束时，若本回合进入弃牌堆的牌的名称字数之和为2的自然数次方，你可以令一名角色执行一个额外回合。"
		},
		help: {}
	};
	if (lib.device || lib.node) for (const character in ANIMATION_VS_NONAME.character) {
		ANIMATION_VS_NONAME.character[character][4].push(`ext:桌面大战/image/character/${character}.webp`);
	}
	else for (const character in ANIMATION_VS_NONAME.character) {
		ANIMATION_VS_NONAME.character[character][4].push(`db:extension-桌面大战:image/character/${character}.webp`);
	}
	if (lib.config.game == "super_smash_tabletop") for (const character in ANIMATION_VS_NONAME.character) {
		ANIMATION_VS_NONAME.character[character][1] = "sst_spirit";
	}
	for (const character in ANIMATION_VS_NONAME.character) {
		if (character != "avn_alan_becker" && !lib.config.extension_桌面大战_unlocked_characters.contains(character)) ANIMATION_VS_NONAME.character[character][4].push("unseen");
	}
	return ANIMATION_VS_NONAME;
});