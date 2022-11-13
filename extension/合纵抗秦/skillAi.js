window.hzkq_import(function(lib, game, ui, get, ai, _status){
	window.game = game;
	if(lib.skill.jilei) {
		//鸡肋加强命ai
		lib.skill.jilei.global = 'jilei_ai';
		lib.skill.jilei_ai = {
			directHit_ai: true,
			skillTagFilter: function(player,tag,arg){
				if (tag == 'directHit_ai') {
					if(!arg.target.hasSkillTag('jilei2') || !Array.isArray(arg.target.storage.jilei2) || !arg.target.storage.jilei2.contains('basic')) return false;
				}
			},
		};
	}
	
	if (lib.skill.kurou) {
		//苦肉考虑诈降
		lib.skill.kurou.ai = {
			basic: {
				order:1,
			},
			result: {
				player: function(player) {
					var bool = player.hasSkill('zhaxiang');
					if(!bool && player.countCards('h') >= player.hp - 1) return -1;
					if(player.hp < (bool ? 2 : 3)) return -1;
					return bool ? 5 : 2;
				},
			},
		};
	}
	
	if (lib.skill.xindanshou) {
		//胆守加透视ai
		lib.skill.xindanshou.content = function(){
			'step 0'
			if (event.triggername == 'phaseJieshuBegin') {
				var num = trigger.player.countCards('h');
				if (num > 0) player.chooseToDiscard(get.prompt('xindanshou', trigger.player), num, '弃置' + get.cnNumber(num) +
					'张牌并对' + get.translation(trigger.player) + '造成1点伤害', 'he').set('logSkill', ['xindanshou', trigger.player]).set(
					'ai',
					function(card) {
						if (get.damageEffect(_status.event.getTrigger().player, _status.event.player, _status.event.player) > 0)
							return 6 - get.value(card);
						return -1;
					});
				else player.chooseBool(get.prompt('xindanshou', trigger.player), '对' + get.translation(trigger.player) +
					'造成1点伤害').ai = function() {
					return get.damageEffect(trigger.player, player, player) > 0
				};
			} else {
				var num = 0;
				game.countPlayer2(function(current) {
					var history = current.getHistory('useCard');
					for (var j = 0; j < history.length; j++) {
						if (['basic', 'trick'].contains(get.type(history[j].card, 'trick')) && history[j].targets && history[j].targets
							.contains(player)) num++;
					}
				});
				event.num = num;
				player.chooseBool(get.prompt('xindanshou') + '（可摸' + get.cnNumber(num) + '张牌）', get.translation('xindanshou_info'))
				.ai = function(event, player) {
					var evtPlayer = _status.currentPhase;
					//判断当前回合角色是否是队友
					var isFriend = player.getFriends().contains(evtPlayer);
					//判断卡牌是否是aoe
					var isAOE = card => (get.info(card).multitarget || get.info(card).selectTarget == -1) && get.type(card, 'trick') == 'trick';
					var Friends = evtPlayer.getFriends().length;
					var Enemies = evtPlayer.getEnemies().length;
					//判断卡牌是否对自己效果最大
					var getMaxEffectIsPlayer = card => {
						if(['shunshou', 'guohe', 'sha', 'huogong'].contains(card.name) && evtPlayer.hasSkill("yingzheng_yitong")) return true;
						var myEffect = get.effect(player, card, player, evtPlayer);
						var playerList = player.getFriends().filter(p => evtPlayer.canUse(card, p));
						if(!playerList.length) return true;
						var effectList = playerList.map(item => get.effect(item, card, item, evtPlayer));
						var getMaxEffectByFriends = Math.max.apply(null, effectList);
						return myEffect >= getMaxEffectByFriends;
					}
					if(evtPlayer == player) {
						//自己的回合，没有可以对自己使用的牌时才发动
						var i = 0;
						var canUseToPlayer = evtPlayer.getCards('h')
						.filter(item => {
							if(!evtPlayer.canUse(item, evtPlayer) || get.effect_use(player, item) <= 0) return false;
							if(get.type(item) == 'equip' || get.type(item) == 'delay') return false;
							if(isAOE(item)) {
								return get.tag(item, 'damage') ? Enemies >= Friends : Friends >= Enemies;
							}
							if(item.name == 'jiu') return evtPlayer.getCardUsable('jiu') > 0  &&  evtPlayer.getCardUsable('sha') > 0;
							if(item.name != 'tao') {
								return getMaxEffectIsPlayer(item);
							}
							return evtPlayer.getDamagedHp() > ++i;
						});
						return !canUseToPlayer.length;
					} else {
						//判断当前回合角色是否有aoe牌
						var hasAOE = evtPlayer.getCards('h').filter(item => isAOE(item) && evtPlayer.canUse(item, player));
						if(hasAOE.length) {
							var check = hasAOE.filter(item => {
								if(item.name == 'shengdong' || item.name == 'jiedao') return false;
								return get.tag(item, 'damage') ? Enemies >= Friends : Friends >= Enemies;
							});
							if(check.length) return false;
						}
						
						//判断player是否可以用技能转化为某牌
						var viewAsSkills = (cardName, card, player) => {
							var result = [];
							var getViewAs = skill => get.info(skill).viewAs;
							var select = skill => Math.min.apply(null, get.select(get.info(skill).selectCard)) == 1;
							var checkSkill = skill => {
								if(getViewAs(skill) && getViewAs(skill).name == cardName && select(skill)) result.add(skill);
								if(get.info(skill).group) {
									var group = Array.isArray(get.info(skill).group) ? get.info(skill).group : [get.info(skill).group];
									for (var i = 0; i < group.length; i++) {
										if(getViewAs(group[i]) &&  getViewAs(group[i]).name == cardName && select(group[i])) result.add(skill);
									}
								}
							}
							player.getSkills().concat(lib.skill.global).forEach(checkSkill);
							return result;
						}
						
						//判断是否可以用技能转化为某牌对目标使用
						var canUseViewAs = (skill, cards, player, target) => {
							if(!lib.skill[skill].viewAs || !get.info(lib.skill[skill].viewAs)) {
								return false;
							}
							var card = get.autoViewAs(lib.skill[skill].viewAs,  Array.isArray(cards) ? cards : [cards]);
							return player.canUse(card, target);
						}
						
						var canUseToPlayer = evtPlayer.getCards('h')
						.filter(item => {
							return evtPlayer.canUse(item, player) && getMaxEffectIsPlayer(item);
						});
						//可对自己使用的牌越少，ai发动的几率越大
						var random = Math.random() <= (8 - canUseToPlayer.length) * 0.1;
						if(isFriend) {
							return canUseToPlayer.length ? random : true;
						} else {
							//能用几张杀
							var canUseShaNum = evtPlayer.getCardUsable('sha');
							//手牌中有几张杀
							var canUseShaToPlayer = evtPlayer.getCards('h', item => {
								return (item.name == 'sha' || viewAsSkills('sha', item, evtPlayer).length > 0) && (getMaxEffectIsPlayer(item) || evtPlayer.hasSkill('yingzheng_yitong'));
							}).filter(item => {
								if(evtPlayer.canUse(item, player)) return true;
								else {
									var skills = viewAsSkills('sha', item, evtPlayer);
									if(!skills.length) return false;
									for (var i = 0; i < skills.length; i++) {
										var bool = canUseViewAs(skills[i], [item], evtPlayer, player);
										if(bool) return true;
									}
								}
							});
							if(canUseShaNum > 0 && canUseShaToPlayer.length) return false;
							return canUseToPlayer.length ? random : true;
						}
					}
				};
			}
			'step 1'
			if (result.bool) {
				if (!result.cards || !result.cards.length) {
					player.logSkill('xindanshou', trigger.player);
				}
				if (event.triggername == 'useCardToTargeted') {
					player.draw(num);
					player.addTempSkill('xindanshou_as');
				} else {
					trigger.player.damage('nocard');
				}
			}
		}
	}
});