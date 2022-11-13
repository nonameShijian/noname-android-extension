/// <reference path="../../typings/index.d.ts" />
game.import("extension", function(lib, game, ui, get, ai, _status) {
	return {
		name: "合纵抗秦",
		/*onremove: function () {
			//删除扩展时，删除合纵抗秦关卡
			game.removeStage && game.removeStage("合纵抗秦");
		},*/
		content: function(config, pack) {
			lib.init.css(lib.assetURL + "extension/合纵抗秦", "extension");
			if (lib.config.mode == "brawl") {
				if (!lib.storage.stage) lib.storage.stage = {};
				lib.storage.stage["合纵抗秦"] = {
					name: "合纵抗秦",
					intro: "注：可在设置→开始→联机→联机昵称中设置玩家的昵称。",
					scenes: [{"name": "变法者","intro": "从“秦国”到“秦朝”，一切都开始于他...","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_shangyang","name2": "none","identity": "zhu","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_liubei","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "合纵连横","intro": "当今天下，合纵抗秦。欲破合纵，今当连横！","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhangyi","name2": "none","identity": "zhu","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "dianwei","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "始太后","intro": "“自此时此刻起，我不再为后，为太后！”","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_miyue","name2": "none","identity": "zhu","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_bubing","name2": "none","identity": "zhong","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_caocao","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "血战长平","intro": "面对未尝败绩的他，你能取得胜利吗？","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_qibing","name2": "none","identity": "zhong","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_baiqi","name2": "none","identity": "zhu","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_zhangliao","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "吕氏春秋","intro": "贩珠卖玉非我所愿，立君建国方可泽被后世","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_qibing","name2": "none","identity": "zhong","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_lvbuwei","name2": "none","identity": "zhu","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_huanggai","name2": "none","identity": "fan","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "祸乱宫闱","intro": "谅这天下，也没有一个男人能拒绝我，哼哼哼……","players": [{"name": "daqin_bubing","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhaoji","name2": "none","identity": "zhu","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_nushou","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_xiahoudun","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_caocao","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "横扫六合","intro": "横扫六合，并吞八荒。举山河内外，皆匍匐脚下。","players": [{"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_yingzheng","name2": "none","identity": "zhu","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_qibing","name2": "none","identity": "zhong","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_bubing","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_guojia","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_xiahouyuan","name2": "none","identity": "fan","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "沙丘谋变","intro": "秦皇已崩，从今天起，我姓赵的说了算。","players": [{"name": "daqin_zhaogao","name2": "none","identity": "zhu","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_qibing","name2": "none","identity": "zhong","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_nushou","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_caocao","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_liubei","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "帝国先驱","intro": "大秦帝国的革新者和战略家站在了一起","players": [{"name": "daqin_zhangyi","name2": "none","identity": "zhu","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_shangyang","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_random1","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_random2","name2": "none","identity": "fan","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "中流砥柱","intro": "内外夹击的话强烈攻势，你能否坚持多久？","players": [{"name": "daqin_baiqi","name2": "none","identity": "zhu","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_miyue","name2": "none","identity": "zhong","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "dianwei","name2": "none","identity": "fan","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "re_liubei","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "乱！","intro": "你要知道，有些人就是为乱世而生的。","players": [{"name": "daqin_lvbuwei","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhaoji","name2": "none","identity": "zhu","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhaogao","name2": "none","identity": "zhong","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "dianwei","name2": "none","identity": "fan","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "re_liubei","name2": "none","identity": "fan","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "璀璨星河","intro": "经受住考验的人，就是留名史册的人，就是英雄。","players": [{"name": "daqin_yingzheng","name2": "none","identity": "zhu","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_baiqi","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_random1","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_random2","name2": "none","identity": "fan","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhangyi","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_shangyang","name2": "none","identity": "zhong","position": 7,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "匹配模式","intro": "","players": [{"name": "daqin_alpha1","name2": "none","identity": "zhong","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_alpha0","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_alpha4","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_alpha3","name2": "none","identity": "zhong","position": 7,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_alpha2","name2": "none","identity": "zhong","position": 8,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}, {"name": "地狱匹配模式","intro": "地狱匹配模式下全体五阶","players": [{"name": "daqin_yingzheng","name2": "none","identity": "zhu","position": 1,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_baiqi","name2": "none","identity": "zhong","position": 2,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 3,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 4,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "hezongkangqin_player","name2": "none","identity": "fan","position": 5,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": true,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_zhaogao","name2": "none","identity": "zhong","position": 6,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_shangyang","name2": "none","identity": "zhong","position": 7,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}, {"name": "daqin_miyue","name2": "none","identity": "zhong","position": 8,"hp": null,"maxHp": null,"linked": false,"turnedover": false,"playercontrol": false,"handcards": [],"equips": [],"judges": []}],"cardPileTop": [],"cardPileBottom": [],"discardPile": [],"gameDraw": true}],
					mode: "normal",
					level: 13,
				};
				_status.extensionstage = true;

				if (!_status.extensionmade) _status.extensionmade = [];
				_status.extensionmade.push("合纵抗秦");
			}
			lib.group.push('daqin');
			lib.translate.daqin = '秦';
			lib.groupnature.daqin = 'thunder';
			var next = {
				versusMap: [
					['qinchao', 'daqin_shangyang', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'daqin_zhangyi', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'daqin_miyue', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'daqin_baiqi', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'daqin_zhaoji', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'daqin_yingzheng', 'qinchao', 'sanguo', 'sanguo'],
					['qinchao', 'sanguo', 'qinchao', 'sanguo', 'daqin_lvbuwei'],
					['qinchao', 'daqin_zhaogao', 'qinchao', 'sanguo', 'sanguo'],
				],
				eventInfo: {
					'变法图强': '牌堆中加入三张【商鞅变法】。若商鞅在场，商鞅使用【商鞅变法】时可以多指定一个目标。',
					'合纵连横': '每轮开始时，场上所有角色进入横置状态。若张仪在场，拥有“横”标记的角色无法对横置的角色使用牌。',
					'长平之战': '游戏进入【鏖战模式】，且所有角色响应【杀】时需额外使用一张【闪】。若白起在场，秦势力角色的回合开始时，其从牌堆中获得一张【桃】。',
					'横扫六合': '牌堆中加入传国玉玺和真龙长剑。若嬴政在场，则改为嬴政装备之。',
					'吕氏春秋': '本局游戏中，所有男性角色摸牌阶段的摸牌数+1。若吕不韦在场，则其于回合外获得牌时，其额外摸一张牌。',
					'沙丘之变': '本局游戏中，阵亡角色的手牌和装备牌改为随机分配给场上所有的男性角色。若赵高在场，则改为赵高获得之。',
					'赵姬之乱': '本局游戏中，男性角色每回合第一次造成伤害时，受伤害角色摸一张牌。若赵姬在场，此效果的适用范围改为所有非秦势力角色。',
					'始称太后': '本局游戏中，女性角色的体力值和体力上限+1。若芈月在场，男性角色的回合开始时需令芈月回复1点体力或摸一张牌。',
				},
				getLevel: function(player) {
					if (_status.brawl.scene && _status.brawl.scene.name == "地狱匹配模式") return 5;
					//地狱匹配模式下全体五阶
					if (player == game.me) return parseInt(lib.hezongkangqin.characterLevel);
					if (player._isKangqinPlayer) return [3, 3, 3, 4, 4, 5].randomGet();
					if (_status.brawl.scene) {
						var name = _status.brawl.scene.name;
						if (player.group != 'daqin') {
							if (name == '匹配模式' || name == '变法者') return 3;
							else if (['帝国先驱', '中流砥柱', '乱！', '璀璨星河'].contains(name)) return 5;
							return 4;
						} else if (get.translation(player).indexOf('秦军') == 0) {
							if (name == '匹配模式') return 3;
							return 1;
						} else {
							if (name == '匹配模式') return 4;
							else if (['帝国先驱', '中流砥柱', '乱！', '璀璨星河'].contains(name)) return ['daqin_baiqi', 'daqin_yingzheng',
								'daqin_zhaoji'
							].contains(player.name) ? 4 : 3;
							return 1;
						}
					}
					return 1;
				},
				setLevel: function(player) {
					var level = lib.hezongkangqin.getLevel(player);
					player._kangqinLevel = level;
					if (level > 2) {
						var num = level > 4 ? 2 : 1;
						player.maxHp += num;
						player.hp += num;
						player.update();
					}
					if (level == 5 && player._isKangqinPlayer) player.addSkill('oldniepan');
					ui.css.styles.sheet.insertRule(
						'.player>.count{z-index: 3 !important;border-radius: 2px !important;text-align: center !important;}', 0);
					player.node.framebg.dataset.decoration = 'none';
					if (level == 3) player.node.framebg.dataset.decoration = 'bronze';
					if (level == 4) player.node.framebg.dataset.decoration = 'silver';
					if (level == 5) player.node.framebg.dataset.decoration = 'gold';
					player.node.framebg.dataset.auto = player.node.framebg.dataset.decoration;
				},
				setEvent: function(name) {
					_status.kangqinEvent = name;
					ui.kangqinEvent = ui.create.div('.touchinfo.left', ui.window);
					ui.kangqinEvent.innerHTML = name;
					if (ui.time3) {
						if (!(lib.config.extensions && lib.config.extensions.contains('手杀ui') && lib.config['extension_手杀ui_enable']))
							ui.time3.style.display = 'none';
					}
					ui.kangqinEventInfo = ui.create.system(name, null, true);
					lib.setPopped(ui.kangqinEventInfo, function() {
						var uiintro = ui.create.dialog('hidden');
						uiintro.add(name);
						uiintro.add('<div class="text center">' + lib.hezongkangqin.eventInfo[name] + '</div>');
						return uiintro;
					}, 250);
					switch (name) {
						case '变法图强':
							lib.inpile.push('shangyangbianfa');
							for (var i = 0; i < 3; i++) {
								ui.cardPile.insertBefore(game.createCard('shangyangbianfa'), ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
							}
							game.updateRoundNumber();
							break;
						case '合纵连横':
							game.me.addSkill('kangqin_hezonglianheng');
							break;
						case '长平之战':
							ui.kangqinEvent.innerHTML += '/鏖战模式';
							_status._aozhan = true;
							game.playBackgroundMusic();
							game.countPlayer(function(current) {
								current.addSkill('aozhan')
								current.addSkill('kangqin_changpingzhizhan');
							});
							break;
						case '横扫六合':
							var player = game.findPlayer(function(current) {
								return current.name == 'daqin_yingzheng';
							});
							if (player) {
								player.equip(game.createCard('chuanguoyuxi', 'diamond', 1))._triggered=null;;
								player.equip(game.createCard('zhenlongchangjian', 'diamond', 1))._triggered=null;
							} else {
								lib.inpile.addArray(['zhenlongchangjian', 'chuanguoyuxi']);
								ui.cardPile.insertBefore(game.createCard('chuanguoyuxi', 'diamond', 1), ui.cardPile.childNodes[get.rand(ui
									.cardPile.childElementCount)]);
								ui.cardPile.insertBefore(game.createCard('zhenlongchangjian', 'diamond', 1), ui.cardPile.childNodes[get.rand(
									ui.cardPile.childElementCount)]);
							}
							break;
						case '吕氏春秋':
							game.countPlayer(function(current) {
								current.addSkill('kangqin_lvshichunqiu');
							});
							break;
						case '沙丘之变':
							game.countPlayer(function(current) {
								current.addSkill('kangqin_shaqiuzhibian');
							});
							break;
						case '赵姬之乱':
							game.countPlayer(function(current) {
								current.addSkill('kangqin_zhaojizhiluan');
							});
							break;
						case '始称太后':
							game.countPlayer(function(current) {
								if (current.sex == 'female') {
									current.maxHp++;
									current.hp++;
									current.update();
								}
								current.addSkill('kangqin_shichengtaihou');
							})
							break;
					}
					game.me.chooseControl('ok').prompt = '###本局事件：' + name + '###' + lib.hezongkangqin.eventInfo[name];
				},
				characterLevel: config.kangqin_level,
				character: config.kangqin_player,
				numOfcharacter: config.kangqin_randomCharacters,
				group: config.kangqin_group,
				config: config,
				characters: ['daqin_male1', 'daqin_female1', 'daqin_male2', 'daqin_female2', 'daqin_male3', 'daqin_female3',
					'daqin_male4', 'daqin_female4', 'daqin_male5', 'daqin_female5', 'daqin_male6', 'daqin_female6'
				],
				playername: [
					'月宫亚由', '神尾观铃', '古河渚', '坂上智代', '星野梦美', '枣铃', '库特莉亚芙卡', '神户小鸟', '立华奏', '友利奈绪', '汐奈', '鸣濑白羽', '仲村由理', '藤林杏',
					'朱鹭户沙耶', '神山识', '佐藤雏',
					'烟雨墨染', '诗笺', '苏婆玛丽奥', 'doremy', '楼小楼', '西沉', '叫我蠢直', '骑着二乔上貂蝉', '内奸不会错', '綦薵', '轮回中的消逝者', 'Sukincen', '太上大牛',
					'镜中尘', '明了', '阿Q', '昨日影', '蒜头王八', '萌新瑟瑟发抖', '情何以堪', '元春二六', '炒饭123℃', '夜渐寒忆往昔', '【物质主义】', '一曲离歌高唱', '绵绵不绝于耳',
					'L', '逆曲惜寒', '杜元枫', '三生六十', 'Itsuka士道君', '菁幽', '殇雪飘零', '瓦力', '别来无恙', '大叔viv', '深邃暖爱', '北瓜南瓜东', '染柒',
					'543(21)0', '短鸽', '短歌', '废城', '地球救济猎人', '阿七', '马孟起真神也', '迪亚波罗', '无名玩家', '把你吊着打', '血色衣冠', '有成神之日看爷都乐死了',
					'我神山识今天就要摸走你们所有的桃子', '酷小猫', '问计一个桃', '遗迹两个桃', '李木子', '界马神摧毁标四害', '欧尼斯特·渣诚', '清風為伴', '岁寒三友', '提笼架鸟', '提笼驾马',
					'阿狸', '.江边两头杨', '九杀诸神黄昏', '富贵不能淫', '时光', '凉介', 'Hydra.', '吴彦祖', '魔界人', '仲达喵~', '吴懿不在此地', '夜洛樱琉璃', '笔墨山河',
					'踏空而行', '燕十三', '神·邢道荣', '北湾', '千里冰封', '繁星', '首席白嫖怪', '生吞刘子骥', '周某', 'うん', '凉味抹茶', '竹林七闲', '三丨吾丨三', '造作达人',
					'刻晴', '寰宇星城', '阳光微凉', '陆羽', '无中一无中', '风雪谜漫', '林柒柒',
					'皇叔刘玄德','俺杀','铝宝','疼痛的爪巴','周子鱼','零二','雷','辉烬贺流年','糖送盐柠青','浪琴婊','萌新(转型中)','染柒行骗','Eng.jk','藏海','Show-K','迷之仙人','乌鸦','读书人','温如盏','无冕黎明','子琪','棘手怀念摧毁（潜水中）'
				],
				pack: {
					characterIntro: {
						daqin_shangyang: '商鞅（约公元前395年－公元前338年），姬姓，公孙氏，名鞅，卫国人。战国时期政治家、改革家、思想家，法家代表人物，卫国国君后代。商鞅辅佐秦孝公，积极实行变法，使秦国成为富裕强大的国家，史称“商鞅变法”。政治上，改革了秦国户籍、军功爵位、土地制度、行政区划、税收、度量衡以及民风民俗，并制定了严酷的法律；经济上，主张重农抑商、奖励耕战；军事上，统率秦军收复了河西之地，赐予商于十五邑，号为商君，史称为商鞅。公元前338年，秦孝公逝世后，商鞅被公子虔指为谋反，战败死于彤地，尸身车裂，全家被杀。',
						daqin_zhangyi: '张仪（？－前309年），姬姓，张氏，名仪，魏国安邑（今山西万荣县王显乡张仪村）人。魏国贵族后裔，战国时期著名的纵横家、外交家和谋略家。早年入于鬼谷子门下，学习纵横之术。出山之后，首创“连横”的外交策略，游说六国入秦。得到秦惠王赏识，封为相国，奉命出使游说各国，以“横”破“纵”，促使各国亲善秦国，受封为武信君。公元前310年，秦惠王死后，秦武王继位。张仪失去宠信，出逃魏国，担任相国，次年去世。',
						daqin_miyue: '宣太后（？―前265年），芈（mǐ）姓，出生地楚国丹阳（在今湖北省），又称芈八子、秦宣太后。战国时期秦国王太后，秦惠文王之妾，秦昭襄王之母。秦昭襄王即位之初，宣太后以太后之位主政，执政期间，攻灭义渠国，一举灭亡了秦国的西部大患。死后葬于芷阳骊山。',
						daqin_baiqi: '白起（？—公元前257年），秦国白氏，名起，郿邑（今陕西眉县常兴镇白家村）人。战国时期杰出的军事家、“兵家”代表人物。熟知兵法，善于用兵，交好秦宣太后，和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，并且被列为战国四大名将之首，名列武庙十哲。',
						daqin_zhaoji: '赵姬（？―公元前228年），秦始皇生母，秦庄襄王的王后，赵国邯郸人。一说原为吕不韦姬妾，被吕不韦献给秦国质子异人，一说为赵豪家女，于公元前259年生秦始皇嬴政，异人立其为夫人。其子嬴政即位为秦王，她成为王太后，秦始皇统一天下，追尊其为帝太后，与秦庄襄王合葬于芷阳。',
						daqin_lvbuwei: '吕不韦（？—前235年），姜姓，吕氏，名不韦，卫国濮阳（今河南省滑县）人。战国末年商人、政治家、思想家，秦国丞相，姜子牙23世孙。早年经商于阳翟，扶植秦国质子异人回国即位，成为秦庄襄王，拜为相国，封文信侯，食邑河南洛阳十万户。带兵攻取周国、赵国、卫国土地，分别设立三川郡、太原郡、东郡，对秦王嬴政兼并六国的事业作出重大贡献。庄襄王去世后，迎立太子嬴政即位，拜为相邦，尊称“仲父”，权倾天下。受到嫪毐集团叛乱牵连，罢相归国，全家流放蜀郡，途中饮鸩自尽。主持编纂《吕氏春秋》（又名《吕览》），包含八览、六论、十二纪，汇合了先秦诸子各派学说，“兼儒墨，合名法”，史称“杂家”。',
						daqin_yingzheng: '秦始皇嬴政（前259年—前210年），嬴姓，赵氏，名政（一说名“正”），又称赵政、祖龙等。秦庄襄王和赵姬之子。中国古代政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。秦始皇出生于赵国都城邯郸（今邯郸），后回到秦国。前247年，13岁时即王位。前238年，平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始亲政。重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝。秦始皇认为自己的功劳胜过之前的三皇五帝，采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事。地方上废除分封制，代以郡县制，同时书同文，车同轨，统一度量衡。对外北击匈奴，南征百越，修筑万里长城，修筑灵渠，沟通水系。但是到了晚年，求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基，前210年，秦始皇东巡途中驾崩于邢台沙丘。秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”。',
						daqin_zhaogao: '赵高（？－前207年），嬴姓，赵氏。秦朝二世皇帝时丞相，任中车府令，兼行符玺令事，“管事二十余年”。秦始皇死后，赵高发动沙丘政变，他与丞相李斯合谋伪造诏书，逼秦始皇长子扶苏自杀，另立始皇幼子胡亥为帝，是为秦二世，并自任郎中令。他在任职期间独揽大权，结党营私，征役更加繁重，行政更加苛暴。公元前208年又设计害死李斯，继之为秦朝丞相。第三年他迫秦二世自杀，另立子婴为秦王。不久被子婴设计杀掉，诛夷三族。',
					},
					character: {
						hezongkangqin_player: ['male', 'key', 3, ['hezongkangqin_player_init'],
							['unseen']
						],
						daqin_male1: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female1: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_male2: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female2: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_male3: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female3: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_male4: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female4: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_male5: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female5: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_male6: ['male', 'key', 3, [],
							['unseen']
						],
						daqin_female6: ['female', 'key', 3, [],
							['unseen']
						],
						daqin_alpha0: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_alpha1: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_alpha2: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_alpha3: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_alpha4: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_random1: ['male', 'key', 1, [],
							['unseen']
						],
						daqin_random2: ['male', 'key', 1, [],
							['unseen']
						],
					},
					skill: {
						hezongkangqin_player_init: {
							init: function(player) {
								player._isKangqinPlayer = true;
							},
							trigger: {
								global: 'gameStart'
							},
							forced: true,
							silent: true,
							charlotte: true,
							filter: function(event, player) {
								return player == game.me;
							},
							content: function() {
								'step 0'
								window.hzkq_import = fun => fun(lib, game, ui, get, ai, _status);
								lib.init.js(lib.assetURL + 'extension/合纵抗秦', 'skillAi', () => {
									console.log('skillAi加载成功');
								});
								lib.translate.zhu = '敌';
								lib.translate.fan = '友';
								lib.translate.zhong = '敌';
								lib.translate.zhu2 = ' ';
								lib.translate.fan2 = ' ';
								lib.translate.zhong2 = ' ';
								lib.element.content.gameDraw = lib.hezongkangqin.gameDraw;
								lib.element.player.dieAfter2 = lib.hezongkangqin.dieAfter2;
								game.addGlobalSkill('kangqin_level_buff');
								var skills = [];
								var characters = [
									"re_caocao", "re_simayi", "re_xiahoudun", "re_zhangliao", "re_xuzhu", "re_guojia", "re_zhenji",
									"re_liubei",
									"re_guanyu", "re_zhangfei", "re_zhaoyun", "re_machao", "re_huangyueying", "re_sunquan", "re_luxun",
									"re_sunshangxiang", "re_huatuo", "re_lvbu", "re_gongsunzan",
									"re_zhangjiao", "caoren", "ol_xiahouyuan", "re_huangzhong", "ol_weiyan",
									'dianwei', 'xunyu', 'ol_pangtong', 'ol_sp_zhugeliang', 're_taishici', 're_yanwen', 'ol_yuanshao',
									'ol_pangde',
									're_caopi', 'menghuo', 'ol_zhurong', 'ol_dongzhuo',
									're_sunben', 're_caiwenji',
									'wangji',
									'haozhao', 'ns_chendao', 'zhugezhan', 'lukang', 'zhangxiu', 'yuanshu',
									'shen_guanyu', 'shen_caocao', 'shen_zhaoyun', 'shen_ganning',
									're_caozhi', 'gaoshun',
									"caoying", "simahui", "caochun", "yuantanyuanshang",
									'guansuo', 'baosanniang', "shamoke", "xurong", 'xin_lingtong', 're_xusheng', 'liuzan', 're_wuyi',
									're_liuzan', 'luotong', 'lvdai', 'yj_jushou', "liuye", "huaxin", "xushao", "puyuan", "leitong",
									"caoxing", "mangyachang", "wanglang", "zongyu", "old_fuhuanghou", "ol_maliang", "jiakui", "yangbiao",
									"yj_zhanghe", "yj_zhangliao", "yj_xuhuang", "yj_ganning", "sp_machao", "tadun", "gaolan", 'wenyang',
									'duyu', 'zhangyì', 'zhoufang', 'liuyan', "huangfusong", "sp_xiahoushi", 'wangyi', 'xunyou', "sp_liuqi",
									"xujing", "yangxiu", 're_sunxiu', "zhugejin", 'caoshuang', 'guanzhang', "sp_diaochan", 're_fazheng',
									"zhuling", "lingcao", 're_zhuran', 're_liru', "litong", 'yujin_yujin', 're_yujin', "re_heqi", 'zhuzhi',
									'liufeng', 're_jianyong', 'caochong', 'xin_masu', 're_zhangchunhua', "gexuan", 'guohuai', 'guanping',
									're_jsp_pangtong', 'xin_handang', "sp_shenpei", "re_huanggai", 'zhangsong', 'shen_liubei', 'huanggai',
									're_caoxiu', 'caorui', 'chengong', "xizhicai", "zhujun", "dingfeng", 're_gongsunyuan', 're_guotufengji',
									'panjun', 'mateng', 'liqueguosi', 'liubian', 'caobuxing', 'jin_wangyuanji', 'jin_xiahouhui',
									'jin_yanghuiyu', "re_sunjian", "lifeng", "jiangfei", "sp_bianfuren", "re_zhoucang", "old_majun",
									're_manchong', "sp_jiben", "sp_fuhuanghou", "sp_fuwan", "fuwan", "ruanyu", "sp_mifuren", "wujing",
									"sp_sunshangxiang", "re_zhangzhang", 'sp_xinpi', 'xiahoujie', "pangdegong", 're_panfeng', 'shixie',
									'panshu', 'weiguan', 'cheliji', 'xuyou', 'huangchengyan'
								];
								if (lib.hezongkangqin.config.expand_character) characters.addArray([
									"xf_yiji", 'key_kagari', 'shen_zhenji',
									'xin_xushu', 're_wuguotai', 'chengong', "sunshao", "mazhong", "kanze", "wangyun", "sunqian", "xiahouba",
									"guanyinping", "simalang", "zhangxingcai", "zhugedan", "sp_jiangwei", "sunhao", "mayunlu", "wutugu",
									"sp_caiwenji", "zhugeguo", "jsp_huangyueying", "sunluyu", "wenpin", "daxiaoqiao", "yanbaihu", "chengyu",
									"sp_pangde", "sp_jiaxu", "mizhu", "buzhi", "ganfuren", "yuejin", "hetaihou", 'zhangchangpu',
									"cuiyan", 'xin_liaohua', 're_bulianshi', 're_chengpu', 're_liubiao', 're_caozhang',
									'yufan', 're_panzhangmazhong', 'fuhuanghou',
									're_hanhaoshihuan', 'chenqun', 'caozhen', 'zhoucang', 'guyong', 're_sunluban', 're_caifuren',
									'zhongyao', 'xiahoushi', 'liuchen', 're_zhangyi', 're_quancong',
									'sunziliufang', 'huanghao', 'liyan', 'sundeng', 'cenhun', 'zhangrang', 'liuyu',
									'jikang', 'wuxian', 'qinmi', 'xuezong', 'xushi', 'caojie', "lijue", "zhangji", "fanchou", "guosi",
									"lvkai", "zhanggong", "weiwenzhugezhi",
									"xf_tangzi", "xf_huangquan", "xf_sufei",
									"xugong", "zhangchangpu",
									"xinpi", "zhangwen",
									"guanlu",
									'xingdaorong',
									'huaman', 'wangshuang', 're_maliang',
									'wangcan', 'sp_taishici', 'duji', 'yanjun', 'liuyao',
									"taoqian", "zhaotongzhaoguang", "majun", "simazhao", "wangyuanji", "shenpei", "hujinding", "chendeng",
									"yangyi", "dengzhi", "zhengxuan", "sp_sufei", "furong",'re_niujin','zhongyan','duanwei','zhouqun','gaogan','caizhenji','duxi','heyan','jin_yanghu','wuban','yuejiu','zhouyi','dc_luotong','jianggan','tengyin','tenggongzhu','guanning','wufan','yanrou','sp_menghuo','huangzu','lvlingqi',
									"key_kud", "key_misuzu", "key_kamome", "key_nao", "ns_huangchengyan",
									"key_lucia", "key_kyousuke", "key_yuri", "key_haruko", "key_umi", "key_rei", "key_komari", "key_yukine",
									"key_yusa", "key_misa", "key_masato", "key_iwasawa", "key_kengo", "key_yoshino", "key_yui",
									"key_tsumugi", "key_saya", "key_harukakanata", "key_inari", "key_shiina", "key_sunohara", "key_rin",
									"key_sasami", "key_akane", "key_doruji", "key_yuiko", "key_riki", "key_hisako", "key_hinata",
									"key_noda", "key_tomoya", "key_nagisa", "key_ayato", "key_ao", "key_yuzuru", "sp_key_kanade", "key_mio",
									"key_midori", "key_kyoko", "key_shizuru", "key_shiorimiyuki", "key_miki", "key_shiori", "key_kaori",
									"sp_key_yuri", "key_akiko", "key_abyusa", "key_godan"
								]);
								var banned = [
									'choujue', 'beishui', 'zhaotao', 'feiying', 'xinfu_fujian', 'reyingbing', 'xinfu_zhennan', 'jinjiu',
									'mashu', 'cangzhuo', 'xinleiji_faq', 'juxiang', 'roulin', 'reqicai', 'hongyuan', 'huanshi', 'zhafu',
									'reyingzi', 'zhiyan', 'reguanxing', 'gongxin', 'rehunzi', 'qixi', 'fenwei', 'rexuanfeng', 'remieji',
									'refenyin', 'rebiyue', 'huoshou', 'xinfu_shajue', 'zhuiji', 'reyicong', 'rekurou', 'xinfu_gongqing',
									'dushi', 'yuwei', 'huirong', 'shiren', 'baoqie', 'jyishi', 'gzyinghun', "shuliang", "reduanbing",
									'fanxiang', 'spyinju', 'zhuangdan', 'qiangshou', 'nzry_cunmu', 'cheliji_sichengliangyu',
									'cheliji_tiejixuanyu', 'cheliji_feilunzhanyu',
									'buqu', 'olniepan', 'refangzhu', 'retuntian', 'olfangquan', 'benghuai', 'jinqu', 'nzry_zhizheng',
									'nzry_binglve', 'weidi',
									'new_wuhun', 'nzry_junlve', 'nzry_dinghuo',
									'rejiushi_mark', 'zhuiyi', 'qinqing', 'lianhuo', 'xinzongzuo', 'juexiang',
									'xinfu_xushen', 'jianjie_faq', 'zhaohuo', 'yirang', 'dingpan', 'yawang', 'new_luoyan', 'xinfu_dianhu',
									'yongdi', 'fenxin', 'mouduan', 'jugu', 'tianjiang', 'ranshang', 'xianfu', 'xingshen', 'olxingshen',
									'wuji', 'nuzhan', 'jyzongshi', 'tianbian', 'new_zhixi', 'rechouhai', 'qiaosi_map',
									'xinfu_tunjun', 'yechou', 'zhanyuan', 'hmxili', 'xinfu_xiaode', 'mio_tishen', 'midori_tishen',
									'ao_shixin', 'sunohara_chengshuang', 'weizhong', 'zhanwan', 'xinfu_songsang', 'xinfu_zhanji','huaiyuan','dezhang','mengqing','yuyun','liunian','zhuangrong'
								];
								for (var i = 0; i < characters.length; i++) {
									var name = characters[i];
									if (!lib.character[name]) continue;
									var skillsx = lib.character[name][3].slice(0);
									var list = skillsx.slice(0);
									for (var j = 0; j < skillsx.length; j++) {
										var info = get.info(skillsx[j]);
										if (!info) {
											skillsx.splice(j, 1);
											list.splice(j--, 1);
											continue;
										}
										if (typeof info.derivation == 'string') list.push(info.derivation);
										else if (Array.isArray(info.derivation)) list.addArray(info.derivation);
									}
									for (var j = 0; j < list.length; j++) {
										if (list[j].indexOf('rewrite') != -1 || skills.contains(list[j]) || banned.contains(list[j])) continue;
										var info = get.info(list[j]);
										if (!info || info.zhuSkill || info.juexingji || info.charlotte) continue;
										skills.push(list[j]);
										lib.card['skillCard_' + list[j]] = {
											fullimage: true,
											image: 'character:' + name,
										};
										lib.translate['skillCard_' + list[j]] = lib.translate[list[j]];
										lib.translate['skillCard_' + list[j] + '_info'] = lib.translate[list[j] + '_info'];
									}
								}
								lib.hezongkangqin.skills = skills;
								'step 1'
								event.map = lib.hezongkangqin.versusMap.randomGet();
								var list = game.filterPlayer(function(current) {
									if (current.name.indexOf('daqin_alpha') == 0) {
										var index = parseInt(current.name.slice(11));
										if (index == 1) _status.firstAct2 = current;
										var name = event.map[index];
										if (name == 'sanguo') name = _status.characterlist.randomRemove(1)[0];
										else if (name == 'qinchao') name = ['daqin_qibing', 'daqin_bubing', 'daqin_nushou'].randomGet();
										else {
											current.identity = 'zhu';
											current.setIdentity('zhu');
											game.zhu = current;
										}
										current.uninit();
										current.init(name);
										game.addVideo('reinit', current, [name, get.groupnature(lib.character[name][1])]);
									} else if (current.name.indexOf('daqin_random') == 0) {
										var name = (current.name.indexOf('1') != -1 ? ['re_liubei', 're_xiahoudun'] : ['re_zhangjiao',
											're_sunquan'
										]).randomGet();
										current.uninit();
										current.init(name);
										game.addVideo('reinit', current, [name, get.groupnature(lib.character[name][1])]);
									} else if (current._isKangqinPlayer) {
										if (current == game.me) {
											current.uninit()
											current.init(lib.hezongkangqin.character);
											current.changeGroup(lib.hezongkangqin.group, false);
											game.addVideo('reinit', current, [lib.hezongkangqin.character, get.groupnature(lib.hezongkangqin.group)]);
											current._tempTranslate = lib.config.connect_nickname;
											current.node.name.innerHTML = lib.hezongkangqin.config.vertical_id ? get.verticalStr(lib.config.connect_nickname) :
												lib.config.connect_nickname;
										} else {
											var name = lib.hezongkangqin.playername.randomRemove(1)[0];
											current.uninit();
											current.init(lib.hezongkangqin.characters.randomGet());
											current.changeGroup(['wei', 'shu', 'wu', 'qun'].randomGet(), false);
											game.addVideo('reinit', current, [current.name, get.groupnature(current.group)]);
											current.node.name.innerHTML = lib.hezongkangqin.config.vertical_id ? get.verticalStr(name) : name;
											current._tempTranslate = name;
										};
									}
									lib.hezongkangqin.setLevel(current);
									current.dieAfter2 = lib.element.player.dieAfter2;
									return current._isKangqinPlayer;
								});
								event.list = list;
								'step 2'
								if (_status.brawl && _status.brawl.scene) {
									var name;
									switch (_status.brawl.scene.name) {
										case '变法者':
											name = '变法图强';
											_status.firstAct2 = game.me;
											break;
										case '始太后':
											name = '始称太后';
											_status.firstAct2 = game.me.previous;
											break;
										case '血战长平':
											name = '长平之战';
											_status.firstAct2 = game.me.previous;
											break;
										case '吕氏春秋':
											name = '吕氏春秋';
											_status.firstAct2 = game.me;
											break;
										case '祸乱宫闱':
											name = '赵姬之乱';
											_status.firstAct2 = game.me.previous.previous;
											break;
										case '横扫六合':
											name = '横扫六合';
											_status.firstAct2 = game.me.previous.previous;
											break;
										case '合纵连横':
											name = '合纵连横';
											_status.firstAct2 = game.me;
											break;
										case '沙丘谋变':
											name = '沙丘之变';
											_status.firstAct2 = game.me.previous.previous;
											break;
										case '帝国先驱':
											name = '合纵连横';
											break;
										case '中流砥柱':
											name = '长平之战';
											break;
										case '乱！':
											name = '赵姬之乱';
											_status.firstAct2 = game.me.next.next;
											break;
										case '璀璨星河':
											name = '横扫六合';
											break;
										default:
											//匹配模式
											name = ['变法图强', '合纵连横', '长平之战', '横扫六合', '吕氏春秋', '沙丘之变', '赵姬之乱', '始称太后'].randomGet();
											break;
									}
									lib.hezongkangqin.setEvent(name);
								}
								game.showIdentity(true);
								'step 3'
								event.skillGroup = {
									//雷击配合能进行判定的技能，只要够强就不需要改判
									xinleiji: ['bazhen', 'linglong', 'retieji', 'huituo', 'reluoshen', 'rebeige', 'xinguidao',
										'xinfu_lveming', 'chexuan'
									],
									//截刀刺猬流，配合界刚烈，望归, 或者配合强命的技能
									spjiedao: ['reganglie', 'spwanggui', 'xinliegong', 'rejianchu'],
									//自书配合回合内获得牌的技能(原来自书必须开怀旧包)
									zishu: ['qizhi', 'nzry_shicai', 'reluoshen', 'rezhiheng', 'qinzheng', 'sanchen', 'qiangzhi', 'jianying',
										'fenyin', 'jishe', 'rejingce', 'yanxi'
									],
									//力激配合大过牌的技能
									liji: ['rezhiheng', 'qizhi', 'qinzheng', 'jianying', 'shenxing'],
									//诈降配合让自己体力流失的技能
									zhaxiang: ['kurou', 'xinzhanyi', 'qiangxix', 'spduanzhi', 'gangzhi', 'spwanwei', 'shibei'],
									//翻面类
									xinjushou: ['lihun', 'shebian', 'new_guixin', 'xinshensu', 'xinjiewei'],
									//拼点类
									hanzhan: ['regushe', 'zhuandui', 'xinxianzhen', 'xinfenyue', 'tianyi'],
									rejici: ['regushe'],
									//装备类
									reqizhou: ['xiaoji', 'rangjie', 'decadexuanfeng', 'dujin', 'reganlu', 'xinfu_qianchong'],
									//技能多多多！豹变+征南+凌人+兴棹 腹肌乘n！
									baobian: ['xinzhengnan', 'xinfu_lingren', 'xinfu_xingzhao'],
									//出牌阶段使用的技能，让他多触发一次
									redangxian: ['rezhiheng', 'yanxi', 'rejingce'],
									xindangxian: ['rezhiheng', 'yanxi', 'rejingce'],
									//图射配合乱击和界武圣
									xinfu_tushe: ['olluanji', 'new_rewusheng'],
									//界双雄配合无双，界奸雄和激昂
									reshuangxiong: ['wushuang', 'new_rejianxiong', 'jiang'],
									//界伤势配合乱击，仁德
									reshangshi: ['olluanji', 'rerende', 'rezhiheng', 'rebeige'],
								};
								//技能冲突的组合
								event.negSKillGroup = {
									//玲珑和八阵
									linglong: ['bazhen'],
									bazhen: ['linglong'],
									//伤势和连营
									reshangshi: ['relianying', 'zishu'],
									relianying: ['reshangshi', 'zishu'],
									//自书
									zishu: ['benyu', 'shenxian', 'xindanshou', 'reshangshi', 'relianying', 'reqianxun', 'chengxiang',
										'reluoying', 'wengua'
									],
								};

								event.recoverSKillList = ['shibei', 'huituo', 'yuce'];

								event.checkNegSKill = function(skill, resultList) {
									if (!(skill in resultList)) return;
									//技能不在resultList里
									if (!(skill in event.negSKillGroup)) return;
									//不在技能冲突的组合里
									if (resultList[skill] <= 0) return;
									//这个技能已经设为小于等于0的情况
									var group = event.negSKillGroup[skill];
									//group为与skill冲突的技能数组
									for (var i = 0; i < group.length; i++) {
										//把冲突的技能设为-1
										resultList[group[i]] = -1;
									}
								}

								'step 4'
								event.current = event.list.shift();
								var kq = lib.hezongkangqin;
								var list = kq.skills.randomGets(kq.numOfcharacter);
								var max = 2 + Math.floor((event.current._kangqinLevel - 1) / 2); //选技能的数量
								event.skillList = list.concat();
								for (var i = 0; i < list.length; i++) {
									list[i] = ['', '', 'skillCard_' + list[i]];
								}

								//技能组合
								var skillList = event.skillList;
								var skillGroup = event.skillGroup;
								var skillRecommend = '</br>技能组合推荐</br>';

								var skillGroupValue = 30; //技能价值
								var resultList = {};

								if (game.hasPlayer((p) => p.name == 'daqin_zhaogao')) {
									//如果场上有赵高,队友就不要选回血技能了
									for (var i = 0; i < event.recoverSKillList.length; i++) {
										resultList[event.recoverSKillList[i]] = -10;
									}
								}

								for (var skill in skillGroup) {
									if (!skillList.contains(skill) || (resultList[skill] && resultList[skill] <= 0)) continue;
									//没有这个技能或者技能收益小于0
									var group = skillGroup[skill];
									var group2 = skillList.filter(skill => {
										return group.contains(skill) && (!resultList[skill] || resultList[skill] > 0);
										//有这个技能组的技能，且 resultList没有这个技能，或者resultList里这个技能收益大于0
									});
									//console.log(lib.translate[skill], group2.map(key => lib.translate[key]));
									if (group2.length) {
										//如果有这个技能组的技能
										var str = '';
										event.checkNegSKill(skill, resultList);
										//检查技能冲突
										if (!resultList[skill] && max - Object.keys(resultList).filter(key => resultList[key] > 0).length > 1) {
											//大于1是为了选至少一个技能进行组合
											resultList[skill] = skillGroupValue;
										}
										for (var i = 0; i < group2.length; i++) {
											str += `${str ? ' 或 ' : ''}${lib.translate[skill]} + ${lib.translate[group2[i]]} `;
											event.checkNegSKill(group2[i], resultList);
											//检查技能冲突
											if (resultList[skill]) {
												//这个判断是根据上面，剩余技能大于1才让ai优先选择
												resultList[group2[i]] = (skillGroupValue - 0.5);
											}
										}
										if (skillGroupValue > 4) skillGroupValue -= 1;
										skillRecommend += (str + '</br>');
									}
								}
								event.resultList = resultList;

								event.current.chooseButton([
										Object.keys(resultList).filter(key => resultList[key] > 0).length ? `选择要获得的技能(至多选${max}个)` +
										skillRecommend :
										`选择要获得的技能(至多选${max}个)`, [list, 'vcard']
									], true, [0, max])
									.ai = function(card, list2) {
										var player = event.current;
										var resultList = event.resultList;
										var zhu = game.zhu;
										var cardName = card.name.slice(10);

										function Result(name, type) {
											//优先选择的技能
											if (["drlt_jieying", "nsjianglie", "guanxu", "yashi", "shanzhuan", "rejieyue", "xinfu_lingren",
													"qinzheng", "pingjian", "xinfu_yanyu"
												].contains(name)) return 10;
											if (["xinshanjia", "xinzhengnan", "gzjili", "decadexuanfeng", "repojun", "fenyin", "xinbenxi",
													"reqingxi", "rezhiheng"
												].contains(name)) return 8;
											if (["jilei", "yanxi", "linglong", "xinfu_qianchong", "rezhiyi", "regushe", "xinfu_yinshi", "rebeige",
													"xinleiji", "olyajiao", "xindanshou"
												].contains(name)) return 6;

											//根据场上角色才能判断价值的技能,比如结姻
											function getValue(object, hasMe, value) {
												loop1: for (var i = 0; i < game.players.length; i++) {
													if (game.players[i].isOut()) continue loop1;
													if (hasMe != true && game.players[i] == player) continue loop1;
													loop2: for (var j in object) {
														if (j == 'isFriend') {
															var att = get.attitude(game.players[i], player);
															if ((object[j] && att <= 0) || (!object[j] && att > 0)) continue loop1;
														} else {
															if (!Array.isArray(object[j]) && game.players[i][j] != object[j]) continue loop1;
															if (Array.isArray(object[j]) && !object[j].contains(game.players[i][j])) continue loop1;
														}
													}
													//运行到这就是符合所有条件的了，价值默认1.3
													return isNaN(value) ? 1.3 : value;
												}
												return 0;
											}

											if(name == 'liedan') {
												//主公是嬴政时不选裂胆
												if(game.zhu && game.zhu.name == 'daqin_yingzheng') return -1;
											}
											else if (name == 'rejieyin') {
												//选界结姻的条件是队友有男的
												return getValue({
													isFriend: true,
													sex: 'male',
												});
											} else if (name == 'lihun') {
												//选离魂的条件是敌方有男的
												return getValue({
													isFriend: false,
													sex: 'male',
												});
											} else if (name == 'xiefang') {
												//选撷芳的条件是场上有女的
												return getValue({
													sex: 'female',
												}, true);
											} else if (name == 'reluoying') {
												//选落英的条件是场上有步兵骑兵那种判定的
												return getValue({
													name: ["daqin_bubing", "daqin_qibing", "daqin_zhaoji", "daqin_zhangyi"],
												});
											} else if (["juexiang_rou", "renshi", "reshizhi", "rejici", "xinfu_guanwei", "rejueqing", "reqianxun",
													"reqimou", "xinjuejing", "hanzhan", "shebian", "xinfu_denglou", "drlt_jieying", "gaoyuan", "gangzhi",
													"fuzhu", "xinfu_tushe", "olluanji"
												].contains(name)) {
												return -1;
											}

											return get.skillRank(name, type);
										}

										function ResultMaiXie(name) {
											var info = get.info(name),
												num = 0;
											if (info) {
												if (info.trigger) {
													if (typeof info.trigger.player == 'string' && info.trigger.player.indexOf('damage') == 0) num += 1;
													if (Array.isArray(info.trigger.player)) {
														for (var t of info.trigger.player) {
															if (t.indexOf("damage") == 0) num += 1;
														}
													}
												}
												if (info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) {
													num += 2;
												}
											}
											return num + Result(name, "out");
										}


										if (Object.keys(resultList).length && Object.keys(resultList).contains(cardName)) {
											return resultList[cardName];
										}

										if (!zhu) return Result(cardName);

										switch (zhu.name) {
											case "daqin_lvbuwei": //吕不韦
												return Result(cardName, "in");

											case "daqin_miyue": //芈月
											case "daqin_zhaoji": //赵姬
											case "daqin_zhangyi": //张仪	     
											case "daqin_zhaogao": //赵高 
												return Result(cardName);

											case "daqin_baiqi": //白起
												return ["jilei", "zhichi"].contains(cardName.slice(10)) ? 15 : ResultMaiXie(cardName);
												//鸡肋克制白起

											case "daqin_shangyang": //商鞅	
												return ResultMaiXie(cardName);

											case "daqin_yingzheng": //嬴政
												return ["jilei", "danlao", "zhichi"].contains(cardName) ? 15 : ResultMaiXie(cardName);
												//杨修的两个技能都很克制嬴政，智迟就不用说了

											default:
												return Result(cardName);
										}
									};
								'step 5'
								for (var i = 0; i < result.links.length; i++) {
									event.current.addSkill(result.links[i][2].slice(10));
								}
								if (event.list.length) event.goto(3);
								'step 6'
								if (_status._aozhan) game.me.$fullscreenpop('鏖战模式', get.groupnature(game.me.group, 'raw'));
							},
						},
						kangqin_hezonglianheng: {
							trigger: {
								global: 'roundStart'
							},
							forced: true,
							forceDie: true,
							content: function() {
								game.countPlayer(function(current) {
									current.link(true);
								})
							},
							charlotte: true,
						},
						kangqin_changpingzhizhan: {
							inherit: 'wushuang1',
							silent: true,
							popup: false,
							charlotte: true,
							group: 'kangqin_changpingzhizhan_gain',
							subSkill: {
								gain: {
									audio: false,
									trigger: {
										player: 'phaseBeginStart'
									},
									forced: true,
									popup: false,
									filter: function(event, player) {
										return player.group == 'daqin' && game.hasPlayer(function(current) {
											return current.name == 'daqin_baiqi'
										});
									},
									content: function() {
										var card = get.cardPile(function(card) {
											return card.name == 'tao';
										});
										if (card) {
											player.$gain2(card);
											game.log(player, '获得了', card);
											player.gain(card);
										}
									},
								},
							},
						},
						kangqin_shichengtaihou: {
							trigger: {
								player: 'phaseBeginStart'
							},
							forced: true,
							popup: false,
							charlotte: true,
							filter: function(event, player) {
								return player.sex == 'male' && game.hasPlayer(function(current) {
									return current.name == 'daqin_miyue';
								});
							},
							content: function() {
								'step 0'
								var target = game.findPlayer(function(current) {
									return current.name == 'daqin_miyue';
								});
								event.target = target;
								if (target.isHealthy()) event._result = {
									control: '摸牌'
								};
								else player.chooseControl('摸牌', '回血').set('prompt', '始称太后：令芈月回复1点体力或摸一张牌').ai = function() {
									if (get.attitude(player, target) > 0) return '回血';
									return '摸牌';
								};
								'step 1'
								player.line(target);
								target[result.control == '摸牌' ? 'draw' : 'recover']();
							},
						},
						kangqin_lvshichunqiu: {
							trigger: {
								player: ['gainEnd', 'phaseDrawBegin']
							},
							forced: true,
							popup: false,
							charlotte: true,
							filter: function(event, player, name) {
								if (name == 'phaseDrawBegin') return player.sex == 'male';
								return _status.currentPhase != player && player.name == 'daqin_lvbuwei' && (event.animate == 'draw' ||
									event.getParent().name == 'draw') && event.getParent(2).name != 'kangqin_lvshichunqiu';
							},
							content: function() {
								if (trigger.name == 'phaseDraw') trigger.num++;
								else player.draw('nodelay');
							},
						},
						kangqin_zhaojizhiluan: {
							trigger: {
								source: 'damageBegin3'
							},
							forced: true,
							silent: true,
							popup: false,
							charlotte: true,
							usable: 1,
							filter: function(event, player) {
								if (player.sex != 'male') return false;
								return player.group != 'daqin' || !game.hasPlayer(function(current) {
									return current.name == 'daqin_zhaoji'
								});
							},
							content: function() {
								trigger.player.draw();
							},
						},
						kangqin_level_buff: {
							mod: {
								cardUsable: function(card, player, num) {
									if (card.name == 'sha' && player._kangqinLevel && player._kangqinLevel > 2) {
										return num + 1;
									}
								},
							},
							trigger: {
								global: 'gameDrawAfter',
								player: 'phaseDrawBegin',
							},
							filter: function(event, player) {
								var level = player._kangqinLevel;
								return level && level > (event.name == 'gameDraw' ? 1 : 3);
							},
							forced: true,
							popup: false,
							content: function() {
								if (trigger.name == 'gameDraw') {
									var card = get.cardPile(function(card) {
										return get.type(card) == 'equip';
									});
									if (card) {
										if (typeof player.directequip == 'function') {
											player.directequip([card]);
										} else {
											player.useCard(player, card)._triggered=null;
										}
									}
								} else trigger.num++;
							},
						},
						kangqin_shaqiuzhibian: {
							trigger: {
								player: 'die'
							},
							forced: true,
							popup: false,
							forceDie: true,
							filter: function(event, player) {
								return game.hasPlayer(function(current) {
									return current.name == 'daqin_zhaogao' || current.sex == 'male';
								}) && player.countCards('he') > 0;
							},
							content: function() {
								var cards = player.getCards('he');
								var zhaogao = game.findPlayer(function(current) {
									return current.name == 'daqin_zhaogao'
								});
								if (zhaogao) zhaogao.gain(cards, player, 'giveAuto');
								else {
									var list = [];
									var list2 = [];
									game.countPlayer(function(current) {
										if (current.sex == 'male') {
											list.push(current);
											list2.push([]);
										}
									});
									while (cards.length) {
										list2.randomGet().push(cards.shift());
									}
									while (list.length) {
										var current = list.shift();
										var current2 = list2.shift();
										if (current2.length) {
											current.gain(current2, player);
											player.$giveAuto(current2, current);
										}
									}
								}
							},
							/*_kangqin_global: {
								trigger: {
									
								},
								forced: true,
								content: function () {
									
								},
							},*/
						},
					},
					translate: {
						hezongkangqin_player: '抗秦主角',
						daqin_male1: '羽林内军',
						daqin_female1: '佣兵',
						daqin_male2: '常山府军',
						daqin_female2: '黑绸巫女',
						daqin_male3: '江夏弓骑兵',
						daqin_female3: '美人计',
						daqin_male4: '步兵',
						daqin_female4: '婆娑匠奴',
						daqin_male5: '太行山豪侠',
						daqin_female5: '武库清点',
						daqin_male6: '武林山隐伏',
						daqin_female6: '血婆娑巧手',
						daqin_alpha0: '占位符0',
						daqin_alpha1: '占位符1',
						daqin_alpha2: '占位符2',
						daqin_alpha3: '占位符3',
						daqin_alpha4: '占位符4',
						daqin_random1: '刘备/夏侯惇',
						daqin_random2: '张角/孙权',
					},
				},
				dieAfter2: function(source) {
					if (source) {
						if (this.group == 'daqin') source.draw(3);
						else {
							var list = game.filterPlayer(function(current) {
								return current.group != 'daqin';
							}).sortBySeat(_status.currentPhase);
							if (list.length) game.asyncDraw(list);
						}
					}
				},
				gameDraw: function() {
					"step 0"
					var end = player;
					var num = function(player) {
						return [4, 4, 5, 5, 6, 6][player._kangqinLevel || 1];
					};
					do {
						if (typeof num == 'function') {
							numx = num(player);
						}
						player.directgain(get.cards(numx));
						player = player.next;
					}
					while (player != end);
				},
			};
			next.playername.remove(lib.config.connect_nickname);
			lib.hezongkangqin = next;
			if (lib.device || lib.node) {
				for (var i in next.pack.character) {
					next.pack.character[i][4].push('ext:合纵抗秦/' + i + '.jpg');
				}
			} else {
				for (var i in next.pack.character) {
					next.pack.character[i][4].push('db:extension-合纵抗秦:' + i + '.jpg');
				}
			}
			for (var i in next.pack) {
				for (var j in next.pack[i]) lib[i][j] = next.pack[i][j];
			}
		},
		precontent: function() {},
		help: {},
		config: {
			loadUpdateContent: {
				clear: true,
				name: '<span style="text-decoration: underline;">点击显示本扩展更新内容<span>',
				intro: '本扩展历史更新内容',
				onclick: function() {
					if(_status.hzkqUpdateContent) return false;
					_status.hzkqUpdateContent = true;
					var oReq = new XMLHttpRequest();
					oReq.addEventListener("load", function() {
						var layer = ui.create.div(ui.window, '.updateContent');
						var close = ui.create.div(layer, '.updateContentClose', () => {
							delete _status.hzkqUpdateContent;
							layer.remove();
						});
						var content = ui.create.div(layer, {
							innerHTML: this.responseText,
						});
					});
					oReq.addEventListener("error", function(err) {
						delete _status.hzkqUpdateContent;
						console.error("获取历史更新内容失败", err);
						alert("获取历史更新内容失败");
					});
					oReq.open("GET", lib.assetURL + 'extension/合纵抗秦/updateContent');
					oReq.send();
				},
			},
			vertical_id: {
				name: '垂直ID',
				init: false,
				intro: '若开启此选项，将在游戏中竖行显示玩家的ID',
			},
			kangqin_player: {
				name: '玩家形象',
				intro: '选择玩家在抗秦模式中的登场形象',
				init: 'daqin_male1',
				item: {
					daqin_male1: '羽林内军(男)',
					daqin_female1: '佣兵(女)',
					daqin_male2: '常山府军(男)',
					daqin_female2: '黑绸巫女(女)',
					daqin_male3: '江夏弓骑兵(男)',
					daqin_female3: '美人计(女)',
					daqin_male4: '步兵(男)',
					daqin_female4: '婆娑匠奴(女)',
					daqin_male5: '太行山豪侠(男)',
					daqin_female5: '武库清点(女)',
					daqin_male6: '武林山隐伏(男)',
					daqin_female6: '血婆娑巧手(女)',
				},
			},
			kangqin_group: {
				name: '玩家势力',
				intro: '选择玩家在抗秦模式中的登场势力',
				init: 'wei',
				item: {
					wei: '魏',
					shu: '蜀',
					wu: '吴',
					qun: '群',
				},
			},
			kangqin_level: {
				name: '玩家等阶',
				intro: '设置玩家在抗秦模式中的等阶。<br><li>一阶：无特权。<br><li>二阶：游戏开始时随机使用一张装备牌，起始手牌+1。<br><li>三阶：体力上限和可选择技能的数量上限+1，出牌阶段可额外使用一张【杀】。<br><li>四阶：起始手牌在二阶基础上+1，摸牌阶段可多摸一张牌。<br><li>五阶:体力上限和可选择技能的数量在三阶基础上+1，且视为拥有技能〖涅槃〗。',
				init: '1',
				item: {
					'1': '一阶',
					'2': '二阶',
					'3': '三阶',
					'4': '四阶',
					'5': '五阶',
				},
			},
			kangqin_randomCharacters: {
				name: '选择技能总数量',
				init: '15',
				item: {
					'15': '15个',
					'20': '20个',
					'25': '25个',
					'30': '30个',
				},
				intro: '选择技能时，可以选择的数量',
			},
			expand_character: {
				name: '扩充将池',
				init: false,
				intro: '将论外，一将成名，SP，系列专属，星火燎原，移动版的武将加入技能将池',
			},
		},
		package: {
			character: {
				character: {
					daqin_zhangyi: ['male', 'daqin', 4, ['zhangyi_lianheng', 'zhangyi_xichu', 'zhangyi_xiongbian', 'zhangyi_qiaoshe'],
						['forbidai']
					],
					daqin_zhaogao: ['male', 'daqin', 3, ['zhaogao_zhilu', 'zhaogao_gaizhao', 'zhaogao_haizhong', 'zhaogao_aili'],
						['forbidai']
					],
					daqin_yingzheng: ["male", "daqin", 4, ["yingzheng_yitong", "yingzheng_shihuang", "yingzheng_zulong",
							"yingzheng_fenshu"
						],
						['forbidai']
					],
					daqin_shangyang: ["male", "daqin", 4, ["shangyang_bianfa", "shangyang_limu", "shangyang_kencao"],
						['forbidai']
					],
					daqin_nushou: ["male", "daqin", 3, ["daqin_tongpao", "nushou_jinnu"],
						['forbidai']
					],
					daqin_qibing: ["male", "daqin", 4, ["daqin_tongpao", "qibing_changjian", "qibing_liangju"],
						['forbidai']
					],
					daqin_bubing: ["male", "daqin", 5, ["daqin_tongpao", "bubing_fangzhen", "bubing_changbing"],
						['forbidai']
					],
					daqin_baiqi: ["male", "daqin", 4, ["baiqi_wuan", "baiqi_shashen", "baiqi_fachu", "baiqi_changsheng"],
						['forbidai']
					],
					daqin_miyue: ["female", "daqin", 3, ["miyue_zhangzheng", "miyue_taihou", "miyue_youmie", "miyue_yintui"],
						['forbidai']
					],
					daqin_lvbuwei: ["male", "daqin", 4, ["lvbuwei_jugu", "lvbuwei_qihuo", "lvbuwei_chunqiu", "lvbuwei_baixiang"],
						['forbidai']
					],
					daqin_zhaoji: ["female", "daqin", 3, ["zhaoji_shanwu", "zhaoji_daqi", "zhaoji_xianji", "zhaoji_huoluan"],
						['forbidai']
					],
				},
				translate: {
					"daqin_yingzheng": "嬴政",
					"daqin_shangyang": "商鞅",
					"daqin_nushou": "秦军弩手",
					"daqin_qibing": "秦军骑兵",
					"daqin_bubing": "秦军步兵",
					"daqin_baiqi": "白起",
					"daqin_miyue": "芈月",
					"daqin_lvbuwei": "吕不韦",
					"daqin_zhaoji": "赵姬",
					daqin_zhaogao: '赵高',
					daqin_zhangyi: '张仪',
				},
			},
			card: {
				card: {
					shangyangbianfa: {
						audio: true,
						global: 'shangyangbianfa_dying',
						type: "trick",
						enable: true,
						filterTarget: function(card, player, target) {
							return target != player;
						},
						selectTarget: 1,
						content: function() {
							'step 0'
							var num = [1, 2].randomGet();
							target.damage(num).type = 'shangyangbianfa';
						},
						ai: {
							basic: {
								order: 5,
								useful: 1,
								value: 5.5,
							},
							result: {
								target: -1.5,
							},
							tag: {
								damage: 1,
							},
						},
						fullimage: true,
					},
					zhenlongchangjian: {
						type: "equip",
						subtype: "equip1",
						distance: {
							attackFrom: -1,
						},
						ai: {
							basic: {
								equipValue: 2,
							},
						},
						skills: ["zhenlongchangjian_skill"],
						enable: true,
						fullimage: true,
					},
					chuanguoyuxi: {
						type: "equip",
						subtype: "equip5",
						ai: {
							basic: {
								equipValue: 7.5,
							},
						},
						skills: ["chuanguoyuxi_skill"],
						enable: true,
						fullimage: true,
					},
					qinnu: {
						vanish: true,
						type: "equip",
						subtype: "equip1",
						skills: ["qinnu_skill"],
						destroy: "daqin_nushou",
						distance: {
							attackFrom: -8
						},
						enable: true,
						ai: {
							basic: {
								useful: 2,
								equipValue: 1,
							},
						},
						fullimage: true,
					},
					"tongpao_bagua": {
						vanish: true,
						type: "equip",
						subtype: "equip2",
						skills: ["bagua_skill"],
						destroy: ["daqin_nushou", "daqin_qibing", "daqin_bubing"],
						enable: true,
						ai: {
							basic: {
								equipValue: 7.5,
								useful: 2,
							},
						},
						fullskin: true,
					},
					"tongpao_baiyin": {
						onLose: function() {
							player.recover();
						},
						filterLose: function(card, player) {
							if (player.hasSkillTag('unequip2')) return false;
							return player.hp < player.maxHp;
						},
						tag: {
							recover: 1,
						},
						vanish: true,
						type: "equip",
						subtype: "equip2",
						skills: ["baiyin_skill"],
						destroy: ["daqin_nushou", "daqin_qibing", "daqin_bubing"],
						enable: true,
						ai: {
							order: 9.5,
							equipValue: function(card, player) {
								if (player.hp == player.maxHp) return 5;
								if (player.countCards('h', 'baiyin')) return 6;
								return 0;
							},
							basic: {
								equipValue: 5,
								useful: 2,
							},
						},
						fullskin: true,
					},
					"tongpao_renwang": {
						vanish: true,
						type: "equip",
						subtype: "equip2",
						skills: ["renwang_skill"],
						destroy: ["daqin_nushou", "daqin_qibing", "daqin_bubing"],
						enable: true,
						ai: {
							basic: {
								equipValue: 7.5,
							},
						},
						fullskin: true,
					},
					"tongpao_tengjia": {
						cardnature: "fire",
						vanish: true,
						type: "equip",
						subtype: "equip2",
						destroy: ["daqin_nushou", "daqin_qibing", "daqin_bubing"],
						enable: true,
						ai: {
							equipValue: function(card, player) {
								if (player.hasSkillTag('maixie') && player.hp > 1) return 0;
								if (player.hasSkillTag('noDirectDamage')) return 10;
								if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
								var num = 3 - game.countPlayer(function(current) {
									return get.attitude(current, player) < 0;
								});
								if (player.hp == 1) num += 4;
								if (player.hp == 2) num += 1;
								if (player.hp == 3) num--;
								if (player.hp > 3) num -= 4;
								return num;
							},
							basic: {
								equipValue: 3,
							},
						},
						skills: ["tengjia1", "tengjia2", "tengjia3"],
						fullskin: true,
					},
				},
				translate: {
					shangyangbianfa: "商鞅变法",
					"shangyangbianfa_info": "出牌阶段，对一名其他角色使用。你对目标角色造成随机1~2点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则所有角色角色不能使用【桃】直到此濒死事件结算结束。",
					zhenlongchangjian: "真龙长剑",
					"zhenlongchangjian_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
					chuanguoyuxi: "传国玉玺",
					"chuanguoyuxi_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
					qinnu: "秦弩",
					"qinnu_info": "当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。",
					"tongpao_bagua": "八卦阵",
					"tongpao_bagua_info": "每当你需要使用（或打出）一张【闪】时，你可以进行一次判定：若结果为红色，则视为你使用（或打出）了一张【闪】；若为黑色，则你仍可从手牌里使用（或打出）。当此装备离开你的装备区时，你令此牌销毁。",
					"tongpao_baiyin": "白银狮子",
					"tongpao_baiyin_info": "锁定技，每次你受到伤害时，最多承受1点伤害（防止多余的伤害）；当你失去装备区里的白银狮子时，你回复1点体力。当此装备离开你的装备区时，你令此牌销毁。",
					"tongpao_renwang": "仁王盾",
					"tongpao_renwang_info": "锁定技，黑色的【杀】对你无效。当此装备离开你的装备区时，你令此牌销毁。",
					"tongpao_tengjia": "藤甲",
					"tongpao_tengjia_info": "锁定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。每次受到火焰伤害时，该伤害+1。当此装备离开你的装备区时，你令此牌销毁。",
				},
				list: [],
			},
			skill: {
				skill: {
					zhaogao_zhilu: {
						audio: 'ext:合纵抗秦:true',
						group: 'zhaogao_zhilu2',
						enable: ['chooseToUse', 'chooseToRespond'],
						viewAs: {
							name: 'sha'
						},
						filterCard: {
							color: 'black'
						},
						check: function(card) {
							return 1 / (get.value(card) || 0.5)
						},
						viewAsFilter: function(player) {
							return player.countCards('h', {
								color: 'black'
							}) > 0;
						},
						ai: {
							respondSha: true,
							skillTagFilter: function(player) {
								return player.countCards('h', {
									color: 'black'
								}) > 0;
							},
						},
					},
					zhaogao_zhilu2: {
						audio: 'zhaogao_zhilu',
						enable: ['chooseToUse', 'chooseToRespond'],
						viewAs: {
							name: 'shan'
						},
						filterCard: {
							color: 'red'
						},
						check: function(card) {
							return 1 / (get.value(card) || 0.5)
						},
						viewAsFilter: function(player) {
							return player.countCards('h', {
								color: 'red'
							}) > 0;
						},
						ai: {
							respondShan: true,
							skillTagFilter: function(player) {
								return player.countCards('h', {
									color: 'red'
								}) > 0;
							},
						},
					},
					zhaogao_gaizhao: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							target: 'useCardToTarget'
						},
						direct: true,
						filter: function(event, player) {
							if (get.info(event.card).multitarget) return false;
							var type = get.type(event.card);
							var name = get.name(event.card);
							if (name != 'sha' && type != 'trick') return false;
							return game.hasPlayer(function(current) {
								return current != player && current.group == 'daqin' && !event.targets.contains(current);
							});
						},
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt(event.name), '将' + get.translation(trigger.card) + '转移给其他秦势力角色', function(card,
									player, target) {
									var trigger = _status.event.getTrigger();
									return target.group == 'daqin' && !trigger.targets.contains(target) && lib.filter.targetEnabled2(trigger.card,
										trigger.player, target);
								}).set('rawEffect', get.effect(player, trigger.card, trigger.player, player))
								.ai = function(target) {
									var trigger = _status.event.getTrigger();
									var rawEffect = _status.event.rawEffect;
									var effectTarget = 0.1 + get.effect(target, trigger.card, trigger.player, _status.event.player);
									return effectTarget - rawEffect;
								};
							'step 1'
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill(event.name, target);
								trigger.targets[trigger.targets.indexOf(player)] = target;
							}
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.attitude(player, target) > 0 || _status.gaizhaoEffect) return;
									if (get.name(card) != 'sha' && get.type(card) != 'trick') return;
									if (get.info(card).multitarget || get.info(card).selectTarget == -1) return;
									var players = game.filterPlayer(function(current) {
										return current != target && current.group == 'daqin';
									});
									if (!players.length) return;
									_status.gaizhaoEffect = true;
									for (var i = 0; i < players.length; i++) {
										if (get.effect(players[i], card, player, player) <= 0) {
											delete _status.gaizhaoEffect;
											return 'zeroplayertarget';
										}
									}
									delete _status.gaizhaoEffect;
								}
							},
						}
					},
					zhaogao_haizhong: {
						global: 'zhaogao_haizhong_debuff',
						audio: 'ext:合纵抗秦:true',
						intro: {
							content: 'mark',
						},
						trigger: {
							global: 'recoverAfter'
						},
						forced: true,
						filter: function(event, player) {
							return event.player.group != 'daqin' && event.player.isAlive();
						},
						logTarget: 'player',
						content: function() {
							'step 0'
							if (!trigger.player.storage[event.name]) trigger.player.storage[event.name] = 0;
							trigger.player.storage[event.name]++;
							event.num = Math.max(1, trigger.player.storage[event.name]);
							trigger.player.markSkill(event.name);
							if (_status.dying.length) return event.finish();
							trigger.player.chooseToDiscard('he', '害忠：弃置一张红色牌，或受到' + event.num + '点伤害', {
								color: 'red'
							}).ai = function(card) {
								var trigger = _status.event.getTrigger();
								var value = get.value(card);
								if(card.name == 'du' && trigger.player.hp <= 1) return -1;
								if(10 - value < 0) return 0.5;
								return 10 - value;
							};
							'step 1'
							if (!result.bool) {
								if (trigger.player.hp <= num) trigger.player.addTempSkill('zhaogao_haizhong_dying', 'damageAfter');
								trigger.player.damage(num);
							}
						},
						subSkill: {
							dying: {
								charlotte: true,
								ai: {
									effect: {
										target: function(card, player, target) {
											if (get.tag(card, 'recover') && player != target) return 'zeroplayertarget';
										},
									},
								},
							},
							debuff: {
								ai: {
									effect: {
										player: function(card, player, target) {
											if (player.group == 'daqin' || !get.tag(card, 'recover') || target != player) return;
											if (get.name(card) == 'jiu' && !player.isDying()) return;
											if (!player.hasCard(function(otherCard) {
													return otherCard != card && get.color(otherCard) == 'red' && (get.value(card) < 10 || player.storage.zhaogao_haizhong >= player.hp);
												})) return 'zeroplayertarget';
										},
										target: function(card, player, target) {
											if (target.group == 'daqin' || !get.tag(card, 'recover') || player == target) return;
											if (!target.countCards('h')) return 'zeroplayertarget';
										},
									},
								},
							},
						}
					},
					zhaogao_aili: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: 'phaseUseBegin'
						},
						forced: true,
						content: function() {
							var list = [];
							for (var i = 0; i < 2; i++) {
								var cardx = get.cardPile2(function(card) {
									return get.type(card) == 'trick' && !list.contains(card)
								});
								if (cardx) list.push(cardx);
							}
							if (list.length) player.gain(list, 'draw');
						},
					},
					zhangyi_lianheng: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: 'phaseBegin',
						},
						forced: true,
						content: function() {
							var list = game.filterPlayer(function(current) {
								current.removeSkill('zhangyi_lianheng_mark');
								return current.group != 'daqin';
							});
							if (list.length > 1) {
								var target = list.randomGet();
								player.line(target);
								target.addSkill('zhangyi_lianheng_mark');
							}
						},
						group: ['zhangyi_lianheng_init','zhangyi_lianheng_die'],
						subSkill: {
							mark: {
								charlotte: true,
								mod: {
									playerEnabled: function(card, player, target) {
										if (target.group == 'daqin' || _status.kangqinEvent == '合纵连横' && target.isLinked()) return false;
									}
								},
								marktext: '横',
								mark: true,
								intro: {
									content: function() {
										if (_status.kangqinEvent == '合纵连横') return '不能对秦势力角色和已横置的角色使用牌';
										return '不能对秦势力角色使用牌';
									},
								},
							},
							init: {
								trigger: {
									global: 'gameDrawAfter'
								},
								forced: true,
								content: function() {
									var list = game.filterPlayer(function(current) {
										return current.group != 'daqin';
									});
									if (list.length) {
										var target = list.randomGet();
										player.line(target);
										target.addSkill('zhangyi_lianheng_mark');
									}
								},
							},
							die: {
								trigger: {
									player: 'die'
								},
								forceDie: true,
								forced: true,
								content: function() {
									var list = game.filterPlayer(function(current) {
										return target.hasSkill('zhangyi_lianheng_mark');
									});
									for (var i = 0; i < list.length; i++) {
										var target = list[i];
										player.line(target);
										target.removeSkill('zhangyi_lianheng_mark');
									}
								},
							},
						},
					},
					zhangyi_xichu: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							target: 'useCardToTarget'
						},
						forced: true,
						filter: function(event, player) {
							return event.card.name == 'sha' && game.hasPlayer(function(current) {
								return current != player && current != event.player && lib.filter.targetInRange(event.card, event.player,
									current);
							});
						},
						content: function() {
							'step 0'
							trigger.player.chooseToDiscard('戏楚：弃置一张点数为6的牌，或令' + get.translation(player) + '将此【杀】转移', function(card) {
								return get.number(card) == 6;
							}).ai = function(card) {
								return 100 - get.value(card)
							};
							'step 1'
							if (!result.bool) {
								player.chooseTarget(true, '将此【杀】转移给' + get.translation(trigger.player) + '攻击范围内的一名角色', true, function(card,
									player, target) {
									var trigger = _status.event.getTrigger();
									return target != player && target != trigger.player && !trigger.targets.contains(target) && lib.filter.targetInRange(
										trigger.card, trigger.player, target)
								}).ai = function(target) {
									var trigger = _status.event.getTrigger();
									return get.effect(target, trigger.card, trigger.player, _status.event.player);
								};
							} else event.finish();
							'step 2'
							if (result.bool) {
								player.line(result.targets[0]);
								trigger.targets[trigger.targets.indexOf(player)] = result.targets[0];
							}
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (card.name == 'sha' && !player.countCards('h', {
											number: '6'
										}) && game.hasPlayer(function(current) {
											return current != player && current != target && lib.filter.targetInRange(card, player, current);
										})) return 'zeroplayertarget';
								},
							},
						},
					},
					zhangyi_xiongbian: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							target: 'useCardToTarget'
						},
						forced: true,
						filter: function(event, player) {
							return get.type(event.card) == 'trick';
						},
						content: function() {
							'step 0'
							player.judge(function(result) {
								if (result.number == 6) return 1;
								return -1;
							}).set('no6', get.attitude(player, trigger.player) > 0);
							'step 1'
							if (result.bool) {
								trigger.getParent().targets.length = 0;
								trigger.getParent().all_excluded = true;
							}
						},
					},
					zhangyi_qiaoshe: {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							global: 'judge',
						},
						direct: true,
						content: function() {
							'step 0'
							var card = trigger.player.judging[0];
							var judge0 = trigger.judge(card);
							var judge1 = 0;
							var choice = trigger.no6 && card.number == 6 ? '+1' : 'cancel2';
							var attitude = get.attitude(player, trigger.player);
							var list = [];
							for (var i = -3; i < 4; i++) {
								if (i == 0) continue;
								list.push((i > 0 ? '+' : '') + i);
								if (!trigger.no6) {
									var judge2 = (trigger.judge({
										name: get.name(card),
										suit: get.suit(card),
										number: get.number(card) + i,
										nature: get.nature(card),
									}) - judge0) * attitude;
									if (judge2 > judge1) {
										choice = (i > 0 ? '+' : '') + i;
										judge1 = judge2;
									}
								}
							}
							list.push('cancel2');
							player.chooseControl(list).set('ai', function() {
								return _status.event.choice;
							}).set('choice', choice).prompt = get.prompt2(event.name);
							'step 1'
							if (result.control != 'cancel2') {
								player.logSkill(event.name, trigger.player);
								game.log(trigger.player, '判定结果点数', '#g' + result.control);
								player.popup(result.control, 'fire');
								if (!trigger.fixedResult) trigger.fixedResult = {};
								if (!trigger.fixedResult.number) trigger.fixedResult.number = get.number(trigger.player.judging[0]);
								trigger.fixedResult.number += parseInt(result.control);
							}
						},
					},
					"yingzheng_yitong": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							targetInRange: function(card) {
								if (card.name == 'sha' || card.name == 'shunshou') return true;
							},
						},
						trigger: {
							player: 'useCard2',
						},
						forced: true,
						filter: function(event, player) {
							if (!['shunshou', 'guohe', 'sha', 'huogong'].contains(event.card.name)) return false;
							return game.hasPlayer(function(current) {
								return current.group != 'daqin' && !event.targets.contains(current) && player.canUse(event.card, current);
							});
						},
						content: function() {
							trigger.targets.addArray(game.filterPlayer(function(current) {
								return current.group != 'daqin' && !trigger.targets.contains(current) && player.canUse(trigger.card, current);
							}));
							player.line(trigger.targets);
						},
					},
					"yingzheng_shihuang": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							global: "phaseAfter",
						},
						forced: true,
						filter: function(event, player) {
							var num = game.roundNumber / 100 * 6;
							if (num > 1) num = 1;
							return event.player != player && Math.random() <= num;
						},
						content: function() {
							player.insertPhase();
						},
					},
					"yingzheng_zulong": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						content: function() {
							var list = [];
							var card1 = get.cardPile2(function(card) {
								return card.name == 'zhenlongchangjian';
							});
							var card2 = get.cardPile2(function(card) {
								return card.name == 'chuanguoyuxi';
							});
							if (card1 && !player.countCards('he', 'zhenlongchangjian')) {
								list.push(card1);
							}
							if (card2 && !player.countCards('he', 'chuanguoyuxi')) {
								list.push(card2);
							}
							if (list.length > 0) {
								player.gain(list, 'gain2');
							} else {
								player.draw(2);
							}
						},
					},
					"yingzheng_fenshu": {
						audio: 'ext:合纵抗秦:true',
						global:'yingzheng_fenshu_order',
						trigger: {
							global: "useCard",
						},
						forced: true,
						filter: function(event, player) {
							if (event.player == _status.currentPhase && event.player.group != 'daqin' && get.type(event.card) == 'trick') {
								return event.player.getHistory('useCard', function(card) {
									return get.type(card.card) == 'trick';
								}).indexOf(event) == 0;
							}
							return false;
						},
						content: function() {
							trigger.targets.length = 0;
							trigger.all_excluded = true;
						},
						group: 'yingzheng_fenshu_order',
						subSkill: {
							order: {
								sub: true,
								mod:{
									aiOrder:function(player, card, num){
										if(typeof card == 'object' && player == _status.currentPhase && player.group != 'daqin' && get.type(card) == 'trick' && player.getHistory('useCard', function(cardx) {
											return get.type(cardx.card) == 'trick';
										}).length == 0){
											if(get.effect_use(player, card) < 0) return num + 10 - get.effect_use(player, card);
										}
									}
								},
							},
						},
					},
					"zhenlongchangjian_skill": {
						trigger: {
							player: "useCard1",
						},
						forced: true,
						filter: function(event, player) {
							return get.type(event.card) == 'trick' && player.getHistory('useCard', function(card) {
								return get.type(card.card) == 'trick';
							}).indexOf(event) == 0;
						},
						content: function() {
							trigger.nowuxie = true;
						},
					},
					"chuanguoyuxi_skill": {
						trigger: {
							player: "phaseUseBegin",
						},
						direct: true,
						content: function() {
							'step 0'
							var list = ["nanman", "wanjian", "taoyuan", "wugu"];
							player.chooseButton([get.prompt(event.name), [list, 'vcard']]).ai = function(button) {
								return _status.event.player.getUseValue({
									name: button.link[2]
								});
							}
							'step 1'
							if (result.bool) {
								player.chooseUseTarget(result.links[0][2], true, false).logSkill = event.name;
							}
						},
					},
					"qinnu_skill": {
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') {
									return num + 1;
								}
							},
						},
						inherit: 'qinggang_skill',
					},
					"shangyang_bianfa": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							selectTarget: function(card, player, range) {
								if (_status.kangqinEvent == '变法图强' && card.name == 'shangyangbianfa' && range[1] != -1) range[1]++;
							},
						},
						enable: "chooseToUse",
						usable: 1,
						filterCard: function(card) {
							return get.type(card) == 'trick';
						},
						viewAs: {
							name: "shangyangbianfa",
						},
						viewAsFilter: function(player) {
							if (!player.countCards('h', {
									type: 'trick'
								})) return false;
						},
						prompt: "将一张普通锦囊牌当作【商鞅变法】使用",
						check: function(card) {
							return 9 - get.value(card);
						},
						ai: {
							basic: {
								order: 10,
								useful: 1,
								value: 5.5,
							},
							result: {
								target: -1.5,
							},
							tag: {
								damage: 1,
							},
						},
					},
					"shangyang_limu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "useCard",
						},
						forced: true,
						filter: function(event) {
							return get.type(event.card) == 'trick';
						},
						content: function() {
							trigger.nowuxie = true;
						},
					},
					"shangyang_kencao": {
						audio: 'ext:合纵抗秦:true',
						init: function(player) {
							if (!player.storage.shangyang_kencao) player.storage.shangyang_kencao = 0;
						},
						marktext: "功",
						intro: {
							content: "当前有#个“功”标记",
						},
						trigger: {
							global: "damageAfter",
						},
						forced: true,
						filter: function(event, player) {
							return event.source && event.source.group == 'daqin' && event.source.isAlive();
						},
						content: function() {
							if (trigger.source == player) {
								player.markSkill('shangyang_kencao');
								player.storage.shangyang_kencao += trigger.num;
								player.syncStorage('shangyang_kencao');
								game.log(player, '获得了', trigger.num, '个“功”标记');
								if (player.storage.shangyang_kencao >= 3) {
									game.log(player, '移去了', player.storage.shangyang_kencao, '个“功”标记');
									player.storage.shangyang_kencao = 0;
									player.syncStorage('shangyang_kencao');
									if (player.storage.shangyang_kencao <= 0) player.unmarkSkill('shangyang_kencao');
									player.gainMaxHp();
									player.recover();
								}
							} else {
								player.line(trigger.source);
								if (trigger.source.storage.shangyang_kencao == undefined) trigger.source.storage.shangyang_kencao = 0;
								trigger.source.markSkill('shangyang_kencao');
								trigger.source.storage.shangyang_kencao += trigger.num;
								trigger.source.syncStorage('shangyang_kencao');
								game.log(trigger.source, '获得了', trigger.num, '个“功”标记');
								if (trigger.source.storage.shangyang_kencao >= 3) {
									game.log(trigger.source, '移去了', trigger.source.storage.shangyang_kencao, '个“功”标记');
									trigger.source.storage.shangyang_kencao = 0;
									trigger.source.syncStorage('shangyang_kencao');
									if (trigger.source.storage.shangyang_kencao <= 0) trigger.source.unmarkSkill('shangyang_kencao');
									trigger.source.gainMaxHp();
									trigger.source.recover();
								}
							}
						},
					},
					"shangyangbianfa_dying": {
						trigger: {
							player: "dying",
						},
						forced: true,
						popup: false,
						direct: true,
						charlotte: true,
						locked: true,
						filter: function(event, player) {
							return event.getParent().type == 'shangyangbianfa';
						},
						content: function() {
							'step 0'
							player.judge(function(card) {
								return get.color(card) == 'black' ? -1 : 0;
							})
							'step 1'
							if (result.color == 'black') {
								game.countPlayer(function(current) {
									if (current != player) current.addTempSkill('shangyangbianfa_dying_nosave', '_saveAfter');
								});
							}
						},
						subSkill: {
							nosave: {
								mod: {
									cardSavable: function() {
										return false
									}
								},
							},
						},
					},
					"nushou_jinnu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						filter: function(event, player) {
							return !player.getEquip('qinnu');
						},
						content: function() {
							var card = game.createCard('qinnu', Math.random() < 0.5 ? 'diamond' : 'club', 1);
							player.chooseUseTarget(card, true);
						},
					},
					"qibing_changjian": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							attackFrom: function(from, to, distance) {
								return distance - 1;
							},
						},
						trigger: {
							player: "useCard2",
						},
						filter: function(event, player) {
							return event.card && event.card.name == 'sha';
						},
						forced: true,
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt('qibing_changjian'), '为' + get.translation(trigger.card) + '增加一个目标，或取消并令' +
								get.translation(trigger.card) + '伤害＋1',
								function(card, player, target) {
									return !_status.event.sourcex.contains(target) && player.canUse('sha', target);
								}).set('sourcex', trigger.targets).set('ai', function(target) {
								var player = _status.event.player;
								return get.effect(target, {
									name: 'sha'
								}, player, player);
							});
							'step 1'
							if (result.bool) {
								if (!event.isMine() && !_status.connectMode) game.delayx();
								event.target = result.targets[0];
								player.line(event.target);
								trigger.targets.push(event.target);
							} else {
								if (!trigger.baseDamage) ttrigger.baseDamage = 1;
								trigger.baseDamage++;
							}
						},
					},
					"qibing_liangju": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						filter: function(event, player) {
							return event.card.name == 'sha';
						},
						content: function() {
							"step 0"
							trigger.target.judge(function(card) {
								return (get.suit(card) == 'spade') ? -2 : 0;
							});
							"step 1"
							if (result.judge < 0) {
								trigger.getParent().directHit.add(trigger.target);
							}
						},
						group: ["qibing_liangju_judge"],
						subSkill: {
							judge: {
								audio: 'qibing_liangju',
								trigger: {
									target: "useCardToTargeted",
								},
								filter: function(event, player) {
									if (event.player == player) return false;
									if (event.card.name == 'sha') return true;
									return false;
								},
								forced: true,
								content: function() {
									"step 0"
									player.judge(function(card) {
										return (get.suit(card) == 'heart') ? 2 : -1;
									});
									"step 1"
									if (result.judge > 0) {
										trigger.getParent().excluded.add(player);
									}
								},
								sub: true,
							},
						},
					},
					"bubing_fangzhen": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							target: "useCardToTargeted",
						},
						filter: function(event, player) {
							if (event.player.group == 'daqin' || event.player == player || !player.canUse({
									name: 'sha'
								}, event.player)) return false;
							if ((event.card.name == 'sha' || get.type(event.card) == 'trick') && get.distance(event.player, player,
									'attack') <= 1) return true;
							return false;
						},
						forced: true,
						content: function() {
							"step 0"
							player.judge(function(card) {
								return (get.color(card) == 'black') ? 2 : -1;
							});
							"step 1"
							if (result.judge > 0) {
								player.useCard({
									name: 'sha'
								}, trigger.player, false);
							}
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (!target.inRange(player)) return;
									if (player.group == 'daqin') return;
									if (card.name != 'sha' && get.type(card) != 'trick') return;
									var maixie = (player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp'));
									var shan = player.countCards('h', 'shan');
									var taojiu = (player.countCards('h', 'tao') + player.countCards('h', 'jiu'));
									var hp = player.hp;
									if (player.getEquip('tengjia') && get.attitude(player, target) <= 0) {
										if (get.itemtype(_status.pileTop) == 'card') {
											if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
										} else {
											return;
										}
										if (target.getEquip('zhuque') || target.getEquip('qinggang')) {
											if (shan == 0) {
												if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
												return -2;
											} else {
												return 0.2;
											}
										}
										return 1;
									}
									if (player.getEquip('bagua') && get.attitude(player, target) <= 0) {
										if (get.itemtype(_status.pileTop) == 'card') {
											if (get.color(_status.pileTop) != 'black' && get.attitude(player, target) <= 0) return 3;
										} else {
											return;
										}
										if (target.getEquip('qinggang')) {
											if (shan == 0) {
												if (maixie && (hp > 1 || taojiu > 0) && !game.players.hasSkill('daqin_wuan')) return 2;
												return -1;
											} else {
												return 0.2;
											}
										}
										return 0.5;
									}
								},
							},
						},
					},
					"bubing_changbing": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							attackFrom: function(from, to, distance) {
								return distance - 2;
							},
						},
					},
					"daqin_tongpao": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							global: "useCardAfter",
						},
						forced: true,
						filter: function(event, player) {
							return event.player != player && event.player.group == 'daqin' && !player.getEquip(2) && event.card && get.subtype(
								event.card) == 'equip2' && (event.card.name == 'bagua' || event.card.name == 'baiyin' || event.card.name ==
								'renwang' || event.card.name == 'tengjia');
						},
						content: function() {
							var name = trigger.card.name;
							var card = 'tongpao_' + name;
							var suit = get.suit(trigger.card);
							var number = trigger.card.number;
							player.useCard(game.createCard(card, suit, number), player);
						},
					},
					"baiqi_wuan": {
						audio: 'ext:合纵抗秦:true',
						locked: true,
						global: "baiqi_wuan_buff",
						subSkill: {
							buff: {
								mod: {
									cardUsable: function(card, player, num) {
										if (player.group == 'daqin' && card.name == 'sha') {
											return num + game.countPlayer(function(current) {
												return current.hasSkill('baiqi_wuan')
											});
										}
									},
								},
								sub: true,
							},
						},
					},
					"baiqi_shashen": {
						audio: 'ext:合纵抗秦:true',
						enable: ["chooseToRespond", "chooseToUse"],
						filterCard: true,
						viewAs: {
							name: "sha",
						},
						viewAsFilter: function(player) {
							if (!player.countCards('h')) return false;
						},
						prompt: "将一张手牌当作【杀】使用或打出",
						check: function(card) {
							return 4 - get.value(card);
						},
						group: ["baiqi_shashen_i"],
						subSkill: {
							i: {
								audio: 'baiqi_shashen',
								trigger: {
									source: "damageEnd",
								},
								forced: true,
								sub: true,
								filter: function(event, player) {
									return event.card && event.card.name == 'sha' && player.getHistory('useCard', function(evt) {
										return evt.card.name == 'sha';
									}).indexOf(event.getParent('useCard')) == 0;
								},
								content: function() {
									player.draw();
								},
							},
						},
						ai: {
							skillTagFilter: function(player) {
								if (!player.countCards('h')) return false;
							},
							respondSha: true,
						},
					},
					"baiqi_fachu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							source: "dying",
						},
						forced: true,
						filter: function(event, player) {
							return event.getParent().name == 'damage' && event.player.group != 'daqin';
						},
						content: function() {
							var list = [];
							for (var i = 1; i <= 5; i++) {
								if (trigger.player.isDisabled(i)) continue;
								list.add('equip' + ((i == 3 || i == 4) ? 6 : i));
							}
							if (list.length) {
								player.line(trigger.player);
								var num = list.randomGet();
								trigger.player.disableEquip(num);
								if (num == 'equip6') {
									trigger.player.disableEquip(3);
									trigger.player.disableEquip(4);
								}
							} else {
								trigger.player.loseMaxHp().source = player;
							}
						},
					},
					"baiqi_changsheng": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							targetInRange: function(card) {
								if (card.name == 'sha') return true;
							},
						},
						trigger: {
							player: "useCardToTargeted",
						},
						filter: function(event, player) {
							return event.card && event.card.name == 'sha' && !player.inRange(event.target);
						},
						forced: true,
						content: function() {},
					},
					"miyue_zhangzheng": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						filter: function(event, player) {
							return game.hasPlayer(function(current) {
								return current != player && current.group != 'daqin';
							});
						},
						content: function() {
							'step 0'
							event.players = game.filterPlayer(function(current) {
								return current != player && current.group != 'daqin';
							}).sortBySeat();
							'step 1'
							if (event.players.length) {
								event.current = event.players.shift();
								player.line(event.current);
								if (event.current.countCards('h')) {
									event.current.chooseToDiscard('h', '弃置一张手牌或失去一点体力').set('ai', function(card) {
										return 7 - get.value(card);
									});
									event.tempbool = false;
								} else {
									event.tempbool = true;
								}
							} else {
								event.finish();
							}
							'step 2'
							if (event.tempbool || result.bool == false) {
								event.current.loseHp();
							}
							event.goto(1);
						},
					},
					"miyue_taihou": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							target: "useCardToTargeted",
						},
						forced: true,
						filter: function(event, player) {
							return event.player != player && 
								event.player.sex == 'male' && 
								event.card && 
								(event.card.name == 'sha' || get.type(event.card) == 'trick');
						},
						content: function() {
							'step 0'
							player.line(trigger.player);
							var type = get.type(trigger.card);
							var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
							trigger.player.chooseToDiscard('弃置一张' + get.translation(type) + '牌，否则' + get.translation(trigger.card) + '对' +
								get.translation(player) + '无效',
								function(card) {
									return get.type(card) == _status.event.cardType;
								}).set('ai', function(card) {
								if (_status.event.eff > 0) {
									return 10 - get.value(card);
								}
								return 0;
							}).set('cardType', type).set('eff', eff);
							'step 1'
							if (!result.bool) {
								trigger.getParent().excluded.add(player);
							}
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (player.sex != "male") return;
									var type = get.type(card);
									if (get.name(card) != 'sha' && type != 'trick') return;
									if (!player.hasCard(function(otherCard) {
											return otherCard != card && get.type(otherCard) == type &&
												get.value(otherCard) < 10;
										})) return 'zeroplayertarget';
								},
							},
						},
					},
					"miyue_youmie": {
						audio: 'ext:合纵抗秦:true',
						global: 'miyue_youmie_ai',
						prompt: "出牌阶段限一次，你可以将一张牌交给一名其他角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。",
						enable: "phaseUse",
						usable: 1,
						filter: function(event, player) {
							return player.countCards('he') > 0;
						},
						discard: false,
						line: true,
						prepare: "give",
						position: "he",
						filterCard: true,
						filterTarget: true,
						check: function(card) {
							if (get.position(card) == 'e') return -1;
							return 5 - get.value(card);
						},
						content: function() {
							'step 0'
							target.gain(cards, player);
							'step 1'
							if(player.isAlive()){
								target.addSkill('miyue_youmie_debuff');
							}
						},
						ai: {
							order: 9,
							result: {
								target: function(player, target) {
									return -1;
								},
							},
						},
						group: ["miyue_youmie_delete"],
						subSkill: {
							ai: {
								directHit_ai: true,
								skillTagFilter: function(player,tag,arg){
									if (tag == 'directHit_ai') {
										if(!arg.target.hasSkillTag('miyue_youmie_debuff') || _status.currentPhase == arg.target) return false;
									}
								},
							},
							debuff: {
								charlotte: true,
								mark: true,
								marktext: "灭",
								mod: {
									cardEnabled: function(card, player, target) {
										if (_status.currentPhase != player) return false;
									},
									cardEnabled2: function(card, player, target) {
										if (_status.currentPhase != player) return false;
									},
									cardUsable: function(card, player, target) {
										if (_status.currentPhase != player) return false;
									},
									cardRespondable: function(card, player, target) {
										if (_status.currentPhase != player) return false;
									},
									cardSavable: function(card, player, target) {
										if (_status.currentPhase != player) return false;
									},
								},
								intro: {
									content: "回合外不能使用或打出卡牌",
								},
								sub: true,
							},
							delete: {
								trigger: {
									player: ["phaseBefore", "die"],
								},
								forceDie: true,
								forced: true,
								popup: false,
								filter: function(event, player) {
									return game.hasPlayer(function(current) {
										return current.hasSkill('miyue_youmie_debuff');
									});
								},
								content: function() {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].hasSkill('miyue_youmie_debuff')) {
											player.line(game.players[i]);
											game.players[i].removeSkill('miyue_youmie_debuff');
										}
									}
								},
								sub: true,
							},
						},
					},
					"miyue_yintui": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "loseEnd",
						},
						forced: true,
						filter: function(event, player) {
							if (player.countCards('h')) return false;
							for (var i = 0; i < event.cards.length; i++) {
								if (event.cards[i].original == 'h') return true;
							}
							return false;
						},
						content: function() {
							player.turnOver();
						},
						ai: {
							noh: true,
							skillTagFilter: function(player, tag) {
								if (tag == 'noh') {
									if (player.countCards('h') != 1 || player.isTurnedOver()) return false;
								}
							},
						},
						group: ["miyue_yintui_damage"],
						subSkill: {
							damage: {
								audio: 'miyue_yintui',
								trigger: {
									player: "damageBegin3",
								},
								forced: true,
								filter: function(event, player) {
									return player.isTurnedOver();
								},
								content: function() {
									trigger.num--;
									player.draw();
								},
								ai: {
									"maixie": true,
									skillTagFilter: function(player, tag) {
										if (tag == 'maixie') {
											if (!player.isTurnedOver()) return false;
										}
									},
									effect: {
										target: function(card, player, target) {
											if (player.hasSkillTag('jueqing')) return;
											if (target.hujia) return;
											if (!target.isTurnedOver()) return;
											if (get.tag(card, 'damage')) return [1, 2];
										},
									},
								},
								sub: true,
							},
						},
					},
					"lvbuwei_jugu": {
						audio: 'ext:合纵抗秦:true',
						mod: {
							maxHandcard: function(player, num) {
								return num + player.maxHp;
							},
						},
						trigger: {
							global: "gameDrawAfter",
							player: "enterGame",
						},
						forced: true,
						content: function() {
							player.draw(player.maxHp);
						},
					},
					"lvbuwei_qihuo": {
						audio: 'ext:合纵抗秦:true',
						enable: "phaseUse",
						usable: 1,
						delay: 0,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							event.list = [];
							event.cardNum = [];
							var hs = player.getCards('h');
							for (var i = 0; i < hs.length; i++) {
								var card = hs[i];
								if (event.list.contains(get.type(card, 'trick'))) {
									event.cardNum[event.list.indexOf(get.type(card, 'trick'))]++;
									continue;
								}
								event.list.push(get.type(card, 'trick'));
								event.cardNum.push(1);
							}
							'step 1'
							player.chooseControl(event.list, function(event, player) {
								return event.list[event.cardNum.indexOf(Math.max.apply(null, event.cardNum))] || event.list.randomGet();
							}).prompt = "奇货：请选择一种类别";
							'step 2'
							var cards = player.getCards('h', function(card) {
								return get.type(card, 'trick') == result.control;
							});
							player.discard(cards);
							player.draw(cards.length * 2);
						},
						ai: {
							order: 1,
							result: {
								player: 4,
							},
							threaten: 1.55,
						},
					},
					"lvbuwei_chunqiu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: ['useCard', 'respond']
						},
						filter: function(event, player) {
							var list = ['useCard', 'respond'];
							list.remove(event.name);
							return player.getHistory(event.name)[0] == event && !player.getHistory(list[0].length);
						},
						content: function() {
							player.draw();
						},
					},
					"lvbuwei_baixiang": {
						audio: 'ext:合纵抗秦:true',
						skillAnimation: true,
						animationColor: "thunfer",
						unique: true,
						trigger: {
							player: "phaseZhunbeiBegin",
						},
						forced: true,
						filter: function(event, player) {
							return player.countCards('h') >= player.hp * 3 && !player.storage.lvbuwei_baixiang;
						},
						derivation: ["lvbuwei_zhongfu"],
						content: function() {
							'step 0'
							player.storage.lvbuwei_baixiang = true;
							player.awakenSkill('lvbuwei_baixiang');
							'step 1'
							var num = player.maxHp - player.hp;
							if (num > 0) player.recover(num);
							player.addSkill('lvbuwei_zhongfu');
							game.log(player, '获得了技能〖仲父〗')
						},
						ai: {
							maixie: true,
							skillTagFilter: function(player, tag) {
								if (tag == 'maixie') {
									if (player.storage.lvbuwei_baixiang || player.countCards('h') < player.hp * 3 || player.hp < 3) return false;
								}
							},
							effect: {
								target: function(card, player, target) {
									if (target.storage.lvbuwei_baixiang || !get.tag(card, 'damage')) return;
									var num = (target.hp - get.tag(card, 'damage')) * 3;
									if (num > 0 && target.countCards('h') >= num) return [0.5, 1];
								},
							},
						},
					},
					"lvbuwei_zhongfu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						content: function() {
							var skill = ['new_rejianxiong', 'rerende', 'rezhiheng'].randomGet();
							player.addTempSkill(skill, {
								player: "phaseBefore"
							});
							game.log(player, '获得了技能', '〖', skill, '〗');
						},
					},
					"zhaoji_shanwu": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: "useCardToPlayered",
						},
						forced: true,
						filter: function(event, player) {
							return event.card.name == 'sha';
						},
						content: function() {
							"step 0"
							player.judge(function(card) {
								return (get.color(card) == 'black') ? 2 : 0;
							});
							"step 1"
							if (result.judge > 0) {
								trigger.getParent().directHit.add(trigger.target);
							}
						},
						ai: {
							effect: {
								player: function(card, player, target, current) {
									if (get.name(card) != 'sha' || get.attitude(player, target) > 0) return;
									if (target.hasSkillTag('respondShan')) return [1.2, 0];
								}
							},
						},
						group: ["zhaoji_shanwu_judge"],
						subSkill: {
							judge: {
								audio: 'zhaoji_shanwu',
								trigger: {
									target: "useCardToTargeted",
								},
								filter: function(event, player) {
									if (event.player == player) return false;
									if (event.card.name == 'sha') return true;
									return false;
								},
								forced: true,
								content: function() {
									"step 0"
									player.judge(function(card) {
										return (get.color(card) == 'red') ? 2 : 0;
									});
									"step 1"
									if (result.judge > 0) {
										trigger.getParent().excluded.add(player);
									}
								},
								sub: true,
								ai: {
									effect: {
										target: function(card, player, target, current) {
											if (get.name(card) == 'sha') return [0.5, 0];
										}
									},
								},
							},
						},
					},
					"zhaoji_daqi": {
						audio: 'ext:合纵抗秦:true',
						init: function(player) {
							if (!player.storage.zhaoji_daqi) player.storage.zhaoji_daqi = 0;
						},
						marktext: "期",
						intro: {
							content: "当前有#个“期”标记",
						},
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						filter: function(event, player) {
							return player.storage.zhaoji_daqi != Infinity && player.storage.zhaoji_daqi >= 10;
						},
						content: function() {
							game.log(player, '失去了', player.storage.zhaoji_daqi, '个“期”标记');
							player.storage.zhaoji_daqi = 0;
							player.syncStorage('zhaoji_daqi');
							player.unmarkSkill('zhaoji_daqi');
							var hp = player.maxHp - player.hp;
							var card = player.maxHp - player.countCards('h');
							if (hp > 0) player.recover(hp);
							if (card > 0) player.draw(card);
							player.storage.zhaoji_huoluan = true;
						},
						group: ["zhaoji_daqi_damage", "zhaoji_daqi_card"],
						subSkill: {
							damage: {
								trigger: {
									player: "damageAfter",
									source: "damageSource",
								},
								audio: 'zhaoji_daqi',
								forced: true,
								content: function() {
									player.storage.zhaoji_daqi += trigger.num;
									player.markSkill('zhaoji_daqi');
									game.log(player, '获得了', trigger.num, '个“期”标记');
									player.syncStorage('zhaoji_daqi');
								},
								sub: true,
							},
							card: {
								audio: 'zhaoji_daqi',
								trigger: {
									player: ["useCard", "respond"],
								},
								forced: true,
								content: function() {
									player.storage.zhaoji_daqi++;
									player.markSkill('zhaoji_daqi');
									game.log(player, '获得了1个“期”标记');
									player.syncStorage('zhaoji_daqi');
								},
								sub: true,
							},
						},
					},
					"zhaoji_xianji": {
						audio: 'ext:合纵抗秦:true',
						init: function(player) {
							player.storage.nzry_dinghuo = false;
						},
						intro: {
							content: "limited",
						},
						unique: true,
						mark: true,
						skillAnimation: true,
						animationColor: "thunder",
						enable: "phaseUse",
						filter: function(event, player) {
							return !player.storage.zhaoji_xianji && player.storage.zhaoji_daqi > 0;
						},
						check: function(event, player) {
							var hp = player.maxHp - player.hp;
							var card = 3 - player.countCards('he');
							if ((hp + card) > 0) return true;
							return false;
						},
						content: function() {
							'step 0'
							player.awakenSkill('zhaoji_xianji');
							player.storage.zhaoji_xianji = true;
							'step 1'
							var hs = player.getCards('he');
							if (hs.length) player.discard(hs);
							game.log(player, '失去了', player.storage.zhaoji_daqi, '个“期”标记');
							player.storage.zhaoji_daqi = 0;
							player.syncStorage('zhaoji_daqi');
							player.unmarkSkill('zhaoji_daqi');
							player.loseMaxHp();
							'step 2'
							var hp = player.maxHp - player.hp;
							var card = player.maxHp - player.countCards('h');
							if (hp > 0) player.recover(hp);
							if (card > 0) player.draw(card);
							player.storage.zhaoji_huoluan = true;
						},
						ai: {
							order: 1,
							result: {
								player: function(player, target) {
									var hp = player.maxHp - player.hp;
									var card = player.maxHp - player.countCards('h');
									return 0 + hp + card;
								},
							},
						},
					},
					"zhaoji_huoluan": {
						audio: 'ext:合纵抗秦:true',
						trigger: {
							player: ["zhaoji_daqiAfter", "zhaoji_xianjiAfter"],
						},
						forced: true,
						content: function() {
							'step 0'
							event.targets = game.filterPlayer();
							event.targets.remove(player);
							event.targets.sort(lib.sort.seat);
							player.line(event.targets);
							event.targets2 = event.targets.slice(0);
							'step 1'
							if (event.targets2.length) {
								event.targets2.shift().damage('nocard');
								event.redo();
							}
						},
					},
				},
				translate: {
					"zhangyi_lianheng": '连横',
					"zhangyi_lianheng_info": '锁定技，游戏开始时，你令随机一名非秦势力的角色获得“横”标记。拥有“横”标记的角色使用的牌不能指定秦势力角色为目标。你的回合开始时，场上所有角色弃置“横”标记。若非秦势力角色数大于等于2，则你令随机一名非秦势力角色获得“横”标记。',
					"zhangyi_xichu": '戏楚',
					"zhangyi_xichu_info": '锁定技，当你成为【杀】的目标时，若其攻击范围内有其他角色，则该角色需弃置一张点数为6的牌，否则此【杀】的目标转移给其攻击范围内你指定的另一名角色。',
					"zhangyi_xiongbian": '雄辩',
					"zhangyi_xiongbian_info": '锁定技，当你成为普通锦囊牌的目标后，你判定。若结果点数为6，你取消此牌的所有目标。',
					"zhangyi_qiaoshe": '巧舌',
					"zhangyi_qiaoshe_info": '当一名角色进行判定时，你可以令判定结果的点数加减3以内的任意值。',

					"yingzheng_yitong": "一统",
					"yingzheng_yitong_info": "锁定技，当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】时，你令所有不为此牌目标的非秦势力角色也成为此牌的目标。你使用【杀】和【顺手牵羊】无距离限制。",
					"yingzheng_shihuang": "始皇",
					"yingzheng_shihuang_info": "锁定技，其他角色的回合结束后，你有X%的几率进行一个额外的回合（X为当前轮数*6，且X最大为100）。",
					"yingzheng_zulong": "祖龙",
					"yingzheng_zulong_info": "锁定技，回合开始时，若牌堆里：有【传国玉玺】或【真龙长剑】，且不在你的手牌区或装备区，你获得之；没有，你摸2张牌。",
					"yingzheng_fenshu": "焚书",
					"yingzheng_fenshu_info": "锁定技，非秦势力角色使用普通锦囊牌时，若此牌是其本回合使用的第一张普通锦囊牌，则你取消此牌的所有目标。",
					"zhenlongchangjian_skill": "真龙长剑",
					"zhenlongchangjian_skill_info": "锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
					"chuanguoyuxi_skill": "传国玉玺",
					"chuanguoyuxi_skill_info": "出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
					"qinnu_skill": "秦弩",
					"qinnu_skill_info": "当你使用【杀】指定一个目标后，你令其防具无效，你于出牌阶段内使用【杀】的次数上限+1；当你失去装备区里的【秦弩】后，你令此牌销毁。",
					"shangyang_bianfa": "变法",
					"shangyang_bianfa_info": "出牌阶段限一次，你可以将一张普通锦囊牌当作【商鞅变法】使用。",
					"shangyang_limu": "立木",
					"shangyang_limu_info": "锁定技，你使用的普通锦囊牌不是【无懈可击】的合法目标。",
					"shangyang_kencao": "垦草",
					"shangyang_kencao_info": "锁定技，你存活时，秦势力角色每造成1点伤害，可获得一个“功”标记。若秦势力角色拥有大于等于3个“功”标记，则弃置所有“功”标记，增加1点体力上限，并回复1点体力。",
					"shangyangbianfa_dying": "商鞅变法",
					"shangyangbianfa_dying_info": "造成随机1~3点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
					"nushou_jinnu": "劲弩",
					"nushou_jinnu_info": "锁定技，你的回合开始时，若你的装备区里没有【秦弩】，你使用一张【秦弩】。",
					"qibing_changjian": "长剑",
					"qibing_changjian_info": "锁定技，你的攻击范围+1，你使用【杀】指定目标后，可额外选择一名目标，或令此杀伤害+1。",
					"qibing_liangju": "良驹",
					"qibing_liangju_info": "锁定技，你使用【杀】指定目标后，令目标进行判定，若为黑桃则此杀不可被闪避；当你成为【杀】的目标后，你进行判定，若为红桃则此杀对你无效。",
					"bubing_fangzhen": "方阵",
					"bubing_fangzhen_info": "锁定技，当你成为非秦势力角色使用普通锦囊或【杀】的目标后，若其在你的攻击范围内，你进行判定，若为黑色，则视为你对其使用一张【杀】。",
					"bubing_changbing": "长兵",
					"bubing_changbing_info": "锁定技，你的攻击范围+2。",
					"daqin_tongpao": "同袍",
					"daqin_tongpao_info": "锁定技，若你没有装备防具，其他秦势力角色使用防具牌时，你也视为使用一张同种防具牌。你通过“同袍”使用的防具牌离开你的装备区时会被销毁。(该技能仅限于【八卦阵】、【仁王盾】、【白银狮子】和【藤甲】)",
					"baiqi_wuan": "武安",
					"baiqi_wuan_info": "锁定技，你存活时，所有秦势力角色使用【杀】的上限+1。",
					"baiqi_shashen": "杀神",
					"baiqi_shashen_info": "你可以将手牌中的任意一张牌当【杀】使用或打出。每回合你使用的第一张【杀】造成伤害后，摸一张牌。",
					"baiqi_fachu": "伐楚",
					"baiqi_fachu_info": "锁定技，当你因对非秦势力角色造成伤害而导致其进入濒死状态后，你随机废除其一个装备栏。若其没有装备栏可废除，其改为失去一点体力上限。之后若其死亡，视为被你击杀",
					"baiqi_changsheng": "常胜",
					"baiqi_changsheng_info": "锁定技，你使用【杀】无距离限制。",
					"miyue_zhangzheng": "掌政",
					"miyue_zhangzheng_info": "锁定技，你的回合开始时，所有非秦势力角色依次选择：1.弃置一张手牌；2.失去1点体力。",
					"miyue_taihou": "太后",
					"miyue_taihou_info": "锁定技，男性角色对你使用【杀】或普通锦囊牌时，需要额外弃置一张同种类型的牌，否则此牌无效。",
					"miyue_youmie": "诱灭",
					"miyue_youmie_info": "出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。",
					"miyue_yintui": "隐退",
					"miyue_yintui_info": "锁定技，当你失去最后一张手牌时，你翻面。你的武将牌背面朝上时，若受到伤害，令此伤害-1，然后摸一张牌。",
					"lvbuwei_jugu": "巨贾",
					"lvbuwei_jugu_info": "锁定技，你的手牌上限+X；游戏开始时，你多摸X张牌（X为你的体力上限）。",
					"lvbuwei_qihuo": "奇货",
					"lvbuwei_qihuo_info": "出牌阶段限一次，你可以弃置一种类型的牌，并摸等同于你弃置牌数量2倍的牌。",
					"lvbuwei_chunqiu": "春秋",
					"lvbuwei_chunqiu_info": "锁定技，当你于一回合内首次使用或打出牌时，你摸一张牌。",
					"lvbuwei_baixiang": "拜相",
					"lvbuwei_baixiang_info": "觉醒技，你的回合开始时，若你的手牌数大于等于你当前体力的3倍，则你将体力恢复至体力上限，并获得“仲父”技能。",
					"lvbuwei_zhongfu": "仲父",
					"lvbuwei_zhongfu_info": "锁定技，你的回合开始时，直到你的下个回合开始为止，你随机获得“界奸雄”、“界仁德”、“界制衡”中的一个。",
					"zhaoji_shanwu": "善舞",
					"zhaoji_shanwu_info": "锁定技，你使用【杀】指定目标后，你进行判定，若为黑色则敌方不能打出【闪】；当你成为【杀】的目标后，你进行判定，若为红色此杀无效。",
					"zhaoji_daqi": "大期",
					"zhaoji_daqi_info": "锁定技，你每使用或打出一张手牌、造成1点伤害、受到1点伤害，均会得到一个“期”标记。你的回合开始时，若你拥有的“期”标记大于等于10，则弃置所有“期”，体力回复至体力上限，并将手牌补至体力上限。",
					"zhaoji_xianji": "献姬",
					"zhaoji_xianji_info": "限定技，出牌阶段，你可以弃置所有手牌、装备牌和“期”标记，失去1点体力上限，然后立即发动大期的回复体力和补牌效果。",
					"zhaoji_huoluan": "祸乱",
					"zhaoji_huoluan_info": "锁定技，你每次发动大期的回复体力和补牌效果后，你对所有其他角色造成1点伤害。",
					"zhaogao_zhilu": '指鹿',
					"zhaogao_zhilu2": '指鹿',
					"zhaogao_zhilu_info": '你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
					"zhaogao_zhilu2_info": '你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
					"zhaogao_gaizhao": '改诏',
					"zhaogao_gaizhao_info": '当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他秦势力角色存活，你可以将此牌的目标改为其他不是该牌目标的秦势力角色。',
					"zhaogao_haizhong": '害忠',
					"zhaogao_haizhong_info": '锁定技，非秦势力角色回复体力后，该角色获得一个“害”标记。然后若场上没有处于濒死阶段的角色，其需要选择：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的“害”标记）。',
					"zhaogao_aili": '爰历',
					"zhaogao_aili_info": '锁定技，你的出牌阶段开始时，你额外获得2张普通锦囊。',
				},
			},
			intro: "OL的合纵抗秦模式，现在由诗笺维护更新",
			author: "烟雨墨染&苏婆玛丽奥",
			diskURL: "",
			forumURL: "",
			version: "1.7",
		},
		editable: false,
		files: {
			"character": [],
			"card": [],
			"skill": []
		}
	}
})
