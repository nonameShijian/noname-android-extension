"use strict";
game.import("extension",(lib,game,ui,get,ai,_status)=>{
	return {
		name:"大乱桌斗",
		content:(config,pack)=>{
			if(pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
			//Rank
			const RANK={
				s:[],
				ap:[],
				a:[],
				am:[],
				bp:[],
				b:[],
				bm:[],
				c:[],
				d:[],
				rarity:{
					legend:[
						"ymk_isabelle",
						"sst_sans",
						"sst_massy"
					],
					epic:[
						"sst_dr_mario",
						"sst_palutena",
						"sst_rosalina",
						"sst_zero_suit_samus",
						"sst_peach",
						"sst_byleth_female",
						"sst_byleth_male",
						"sst_mario_not_mary",
						"sst_haine",
						"sst_incineroar",
						"sst_greninja",
						"sst_king_k_rool",
						"sst_richter",
						"sst_meta_knight",
						"ska_olivia",
						"sst_mr_8",
						"sst_kyuukou",
						"sst_koopalings",
						"sst_waluigi",
						"sst_master_hand",
						"ymk_577",
						"sst_miumiu",
						"ska_super_xiaojie",
						"sst_spring_man",
						"sst_joker",
						"sst_king_dedede",
						"sst_corrin",
						"ska_bowser",
						"sst_ma",
						"sst_pikachu",
						"sst_sephiroth",
						"sst_pokemon_trainer_leaf",
						"sst_steve",
						"sst_fox",
						"ymk_yumikohimi",
						"sst_donkey_kong",
						"mnm_edelgard",
						"sst_kyo_kusanagi",
						"ska_king_olly",
						"sst_dr_wily",
						"sst_9_volt_18_volt",
						"ska_show_k",
						"sst_isabelle",
						"sst_little_mac",
						"sst_ness",
						"sst_robin",
						"sst_bowser_jr",
						"nnk_robin",
						"sst_ryu",
						"sst_pac_man",
						"sst_chrom",
						"sst_lucina",
						"ymk_tianyi",
						"sst_olimar",
						"sst_marioraz",
						"sst_piranha_plant",
						"alz_yuri_kozukata",
						"sst_ganondorf",
						"sst_r_o_b",
						"sst_bayonetta",
						"nnk_decidueye",
						"nnk_machamp"
					],
					rare:[
						"sst_mario",
						"sst_link",
						"sst_wario",
						"sst_zelda",
						"sst_marth",
						"sst_bowser",
						"sst_samus",
						"sst_ridley",
						"sst_mr_game_watch",
						"sst_yumikohimi",
						"sst_terry",
						"sst_simon",
						"sst_kirby",
						"sst_pokemon_trainer_red",
						"sst_daisy",
						"ska_bobby",
						"sst_oc",
						"sst_dark_link",
						"sst_windier",
						"sst_rentianshu",
						"sst_srf",
						"sst_ike",
						"sst_toon_link",
						"sst_wolf",
						"sst_ocarina_of_time_link",
						"sst_rex",
						"sst_cuphead_mugman",
						"sst_snake",
						"ska_show_k",
						"sst_mega_man",
						"sst_jigglypuff",
						"sst_pichu",
						"sst_feiji",
						"sst_sonic",
						"sst_hero",
						"sst_mii_fighters",
						"sst_alex",
						"sst_falco",
						"sst_sheik",
						"ska_professor_toad",
						"sst_geno",
						"sst_ken",
						"sst_pyra_mythra",
						"sst_claude",
						"alz_kyo_kusanagi",
						"ska_koopa_troopa",
						"sst_krystal",
						"sst_pauline",
						"sst_captain_falcon",
						"mnm_captain_falcon",
						"mnm_9_volt_18_volt",
						"sst_young_link",
						"sst_kazuya",
						"sst_duck_hunt",
						"sst_dark_samus",
						"sst_yoshi",
						"sst_villager",
						"sst_lucario",
						"sst_kraid",
						"sst_sora",
						"sst_mewtwo",
						"sst_paipai",
						"xsj_yu_narukami",
						"sst_luigi",
						"sst_min_min",
						"sst_bandana_waddle_dee",
						"sst_enderman",
						"sst_magolor",
						"xsj_dante",
						"sst_roy",
						"ska_daroach",
						"sst_inkling",
						"sst_wii_fit_trainer"
					],
					junk:[]
				}
			};
			for(const i in RANK){
				if(i=="rarity"){
					for(const j in RANK[i]){
						if(!Array.isArray(lib.rank[i][j])) lib.rank[i][j]=[];
						lib.rank[i][j].addArray(RANK[i][j]);
					}
				}
				else{
					if(!Array.isArray(lib.rank[i])) lib.rank[i]=[];
					lib.rank[i].addArray(RANK[i]);
				}
			}
			// 下载进度条
			if (typeof game.shijianCreateProgress != 'function') {
				game.shijianCreateProgress = (title, max, fileName, value) => {
					const parent = ui.create.div(ui.window, {
						textAlign: 'center',
						width: '300px',
						height: '150px',
						left: 'calc(50% - 150px)',
						top: 'auto',
						bottom: 'calc(50% - 75px)',
						zIndex: '10',
						boxShadow: 'rgb(0 0 0 / 40 %) 0 0 0 1px, rgb(0 0 0 / 20 %) 0 3px 10px',
						backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
						borderRadius: '8px'
					});

					// 可拖动
					parent.className = 'dialog';

					const container = ui.create.div(parent, {
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%'
					});

					container.ontouchstart = ui.click.dialogtouchStart;
					container.ontouchmove = ui.click.touchScroll;
					container.style.WebkitOverflowScrolling = 'touch';
					parent.ontouchstart = ui.click.dragtouchdialog;

					const caption = ui.create.div(container, '', title, {
						position: 'relative',
						paddingTop: '8px',
						fontSize: '20px'
					});

					ui.create.node('br', container);

					const tip = ui.create.div(container, {
						position: 'relative',
						paddingTop: '8px',
						fontSize: '20px',
						width: '100%'
					});

					const file = ui.create.node('span', tip, '', fileName);
					file.style.width = file.style.maxWidth = '100%';
					ui.create.node('br', tip);
					const index = ui.create.node('span', tip, '', String(value || '0'));
					ui.create.node('span', tip, '', '/');
					const maxSpan = ui.create.node('span', tip, '', String(max || '未知'));

					ui.create.node('br', container);

					const progress = ui.create.node('progress.zxgxProgress', container);
					progress.setAttribute('value', value || '0');
					progress.setAttribute('max', max);

					parent.getTitle = () => caption.innerText;
					parent.setTitle = (title) => caption.innerText = title;
					parent.getFileName = () => file.innerText;
					parent.setFileName = (name) => file.innerText = name;
					parent.getProgressValue = () => progress.value;
					parent.setProgressValue = (value) => progress.value = index.innerText = value;
					parent.getProgressMax = () => progress.max;
					parent.setProgressMax = (max) => progress.max = maxSpan.innerText = max;
					return parent;
				};
			}
			// 扩展自动更新(等游戏加载完成后再获取更新, 因为可以等待其他扩展加载完成)
			lib.arenaReady.push(() => {
				// 若lib.extensionPack.大乱桌斗不存在，就是这个扩展还没有开启
				if (lib.extensionPack.大乱桌斗) {
					const address = 'https://nonameShijian.unitedrhythmized.club/noname-android-extension/main/extension/大乱桌斗/';
					fetch(`${address}update.js?date=${(new Date()).getTime()}`)
						.then(response => {
							if (!response.ok) throw response;
							return response.text();
						})
						.then(text => {
							const data = eval(text);
							console.log(data);
							const localVersion = lib.extensionPack.大乱桌斗.version || '0';
							if (data.version == localVersion) return;
							else {
								/** 
								 * 判断版本
								 * @param { string } v1 现有版本
								 * @param { string } v2 要更新的版本
								 * @returns { boolean | 'equal' } v1比v2小就返回true
								 */
								function compareVersion(v1 = '', v2 = '') {
									// 相等版本
									if (v1 === v2) return 'equal';
									let version_1 = v1.split('.').map(item => Number(item) || 0);
									let version_2 = v2.split('.').map(item => Number(item) || 0);
									// 现有版本: 无
									if (version_1.length == 1 && version_1[0] == 0) {
										// 要更新的版本不是 无
										if (version_2.length > 1 || version_2[0] > 0) return true;
									} else if (version_2.length == 1 && version_2[0] == 0) {
										// 要更新的版本是 无
										return true;
									} else {
										for (let i = 0; i < version_1.length && i < version_2.length; i++) {
											version_1[i] = version_1[i] || 0;
											version_2[i] = version_2[i] || 0;
											if (version_2[i] > version_1[i]) return true;
											if (version_1[i] > version_2[i]) return false;
										}
									}
								};

								if (!compareVersion(localVersion, data.version)) return;
							}

							function myConfirm(message, callback) {
								if (navigator.notification && navigator.notification.confirm) {
									navigator.notification.confirm(message, index => {
										index == 1 && callback();
									}, ['确定', '取消']);
								} else {
									window.confirm(message) && callback();
								}
							}

							myConfirm(`《大乱桌斗》扩展检测到更新（${data.version}），是否更新？\n${data.changeLog}`, () => {
								/**
								 * 下载一个文件
								 * @param { string } url 
								 */
								function download(url, success, error) {
									const path = 'extension/大乱桌斗';
									if (window.FileTransfer) {
										// 判断是不是文件夹，不是才下载
										function downloadFile() {
											let fileTransfer = new FileTransfer();
											fileTransfer.download(encodeURI(`${address + url}?date=${(new Date()).getTime()}`), encodeURI(lib.assetURL + path + '/' + url), success, error);
										}
										window.resolveLocalFileSystemURL(lib.assetURL,
											/**
											 * @param { DirectoryEntry } DirectoryEntry 
											 */
											DirectoryEntry => {
												DirectoryEntry.getDirectory(path, { create: false }, dir => {
													dir.getDirectory(url, { create: false }, () => {
														console.error(`${path}/${url}是文件夹`);
														// 跳过下载
														success(true);
													}, downloadFile);
												}, downloadFile);
											}, downloadFile);
									} else {
										fetch(`${address + url}?date=${(new Date()).getTime()}`)
											.then(response => response.arrayBuffer())
											.then(arrayBuffer => {
												// 先创建指定文件夹
												game.ensureDirectory(path, () => {
													const fs = require('fs');
													const p = require('path');
													const filePath = p.join(__dirname, path, url);
													// 如果是个文件夹，就退出
													if (fs.existsSync(filePath)) {
														const stat = fs.statSync(filePath);
														if (stat.isDirectory()) {
															console.error(`${path + '/' + url}是个文件夹`);
															return success(true);
														}
													}
													fs.writeFile(filePath, Buffer.from(arrayBuffer), null, e => {
														if (e) error(e);
														else success();
													});
												});
											})
											.catch(response => error(new Error(response.statusText)));
									}
								}

								/**
								 * 下载文件列表
								 * @param { string[] } files 
								 */
								function downloadList(files) {
									if (!Array.isArray(files) || files.length == 0) return;
									let i = 0;
									const progress = game.shijianCreateProgress('更新《大乱桌斗》扩展', files.length, files[0], i);
									const success = skip => {
										// 下载完了就结束
										if (!files[++i]) {
											progress.setProgressValue(files.length);
											progress.setFileName('下载完成');
											setTimeout(() => {
												// 移除进度条
												progress.remove();
												// 延时提示
												setTimeout(() => {
													alert('《大乱桌斗》扩展更新完成，将自动重启');
													game.reload();
												}, 100);
											}, 200);
											return;
										}
										// 下载成功，更新进度
										progress.setProgressValue(i);
										progress.setFileName(files[i]);
										download(files[i], success, error);
									};
									const error = e => {
										console.log('下载失败', e);
										progress.setFileName('重新下载: ' + files[i]);
										download(files[i], success, error);
									};

									download(files[i], success, error);
								}

								/** @type { string[] } 要下载的文件 */
								const files = localVersion == data.oldversion ? data.updateFiles : data.allFiles;
								downloadList(files);
							});
						})
						.catch(e => {
							if (e.message == 'Failed to fetch') alert('网络连接失败');
							else if (e instanceof Response) console.error('大乱桌斗: ' + e.statusText);
							else console.error('其他错误', e);
						});
				} else {
					console.error('lib.extensionPack.大乱桌斗不存在，无法在线更新');
				}
			});
		},
		precontent:data=>{
			if(data.enable){
				const VERSION="2.1.7";
				lib.superSmashTabletop=VERSION;
				//CSS
				lib.init.css(lib.assetURL+"extension/大乱桌斗","extension");
				//SSTLib
				/**
				 * Check if already installed latest SSTLib
				 * @param {string} version 
				 * @return {boolean}
				 */
				const sstlib=version=>{
					if(typeof lib.sstlib!="string") return false;
					if(lib.sstlib==version) return true;
					/** 
					 * 判断版本
					 * @param { string } v1 现有版本
					 * @param { string } v2 要更新的版本
					 * @returns { boolean | 'equal' } v1比v2小就返回true
					 */
					const compareVersion = (v1 = '', v2 = '') => {
						// 相等版本
						if (v1 === v2) return 'equal';
						let version_1 = v1.split('.').map(item => Number(item) || 0);
						let version_2 = v2.split('.').map(item => Number(item) || 0);
						// 现有版本: 无
						if (version_1.length == 1 && version_1[0] == 0) {
							// 要更新的版本不是 无
							if (version_2.length > 1 || version_2[0] > 0) return true;
						} else if (version_2.length == 1 && version_2[0] == 0) {
							// 要更新的版本是 无
							return true;
						} else {
							for (let i = 0; i < version_1.length && i < version_2.length; i++) {
								version_1[i] = version_1[i] || 0;
								version_2[i] = version_2[i] || 0;
								if (version_2[i] > version_1[i]) return true;
								if (version_1[i] > version_2[i]) return false;
							}
						}
					};
					if(!compareVersion(lib.sstlib,version)) return true;
					return false;
				};
				if(!sstlib(VERSION)){
					const LIB={
						translate:{
							braces:'｛｝',
							exposed:'明置',
							sst_light:'光',
							sst_dark:'暗',
							sst_spirit:'魂',
							sst_reality:'现',
							sst_smash:'斗',
							sst_light2:'光明',
							sst_dark2:'黑暗',
							sst_spirit2:'命魂',
							sst_reality2:'现实',
							sst_smash2:'乱斗',
							sst_lightColor:"#f6f6f6",
							sst_darkColor:"#b0d0e2",
							sst_spiritColor:"#b2d9a9",
							sst_realityColor:"#ffddb9",
							sst_smashColor:"#ffe14c",
							group_sst_light:'光势力',
							group_sst_dark:'暗势力',
							group_sst_spirit:'魂势力',
							group_sst_reality:'现势力',
							group_sst_smash:'斗势力',
							group_sst_light_bg:'光',
							group_sst_dark_bg:'暗',
							group_sst_spirit_bg:'魂',
							group_sst_reality_bg:'现',
							group_sst_smash_bg:'斗'
						},
						translateEnglish:{},
						element:{
							content:{
								chooseToComparePileTop:()=>{
									'step 0'
									if(((!event.fixedResult||!event.fixedResult[player.playerid])&&player.countCards('h')==0)||!ui.cardPile.childNodes.length){
										event.result={cancelled:true,bool:false};
										return;
									}
									game.log(player,'对','#b牌堆顶','发起拼点');
									event.lose_list=[];
									'step 1'
									if(event.fixedResult&&event.fixedResult[player.playerid]){
										event.card1=event.fixedResult[player.playerid];
										event.lose_list.push([player,event.card1]);
									}
									else{
										event.localPlayer=true;
										player.chooseCard('请选择拼点牌',true).set('type','compare').set('glow_result',true).ai=event.ai;
									}
									'step 2'
									if(event.localPlayer){
										if(result.skill&&lib.skill[result.skill]&&lib.skill[result.skill].onCompare){
											result.cards=lib.skill[result.skill].onCompare(player);
											player.logSkill(result.skill);
										}
										else event.lose_list.push([player,result.cards[0]]);
										event.card1=result.cards[0];
									}
									'step 3'
									const card=get.cards()[0];
									//event.lose_list.push([player,card]);
									event.card2=card;
									'step 4'
									if(event.lose_list.length){
										game.loseAsync({
											lose_list:event.lose_list,
										}).setContent('chooseToCompareLose');
									}
									if(event.card2) game.cardsGotoOrdering(event.card2);
									'step 5'
									game.broadcast(()=>ui.arena.classList.add('thrownhighlight'));
									ui.arena.classList.add('thrownhighlight');
									game.addVideo('thrownhighlight1');
									player.$compare(event.card1,player,event.card2);
									game.log(player,'的拼点牌为',event.card1);
									game.log('#b牌堆顶','的拼点牌为',event.card2);
									event.num1=event.card1.number;
									event.num2=event.card2.number;
									event.trigger('compare');
									game.delay(0,1500);
									'step 6'
									event.result={
										player:event.card1,
										target:event.card2,
										num1:event.num1,
										num2:event.num2
									};
									let str;
									if(event.num1>event.num2){
										event.result.bool=true;
										event.result.winner=player;
										str=get.translation(player)+'拼点成功';
										player.popup('胜');
									}
									else{
										event.result.bool=false;
										str=get.translation(player)+'拼点失败';
										if(event.num1==event.num2){
											event.result.tie=true;
											player.popup('平');
										}
										else{
											event.result.winner=null;
											player.popup('负');
										}
									}
									game.broadcastAll(str=>{
										const dialog=ui.create.dialog(str);
										dialog.classList.add('center');
										setTimeout(()=>dialog.close(),1000);
									},str);
									game.delay(2);
									'step 7'
									game.broadcastAll(()=>ui.arena.classList.remove('thrownhighlight'));
									game.addVideo('thrownhighlight2');
									if(event.clear!==false) game.broadcastAll(ui.clear);
									if(typeof event.preserve=='function'){
										event.preserve=event.preserve(event.result);
									}
									else if(event.preserve=='win'){
										event.preserve=event.result.bool;
									}
									else if(event.preserve=='lose'){
										event.preserve=!event.result.bool;
									}
								},
								judgeCard:()=>{
									'step 0'
									if(typeof event.card=='string'){
										event.card=game.createCard(event.card,'','');
										event.card._destroy=true;
										event.card.expired=true;
									}
									'step 1'
									//player.lose(event.card,'visible',ui.ordering);
									player.$phaseJudge(event.card);
									event.cancelled=false;
									event.trigger('judgeCard');
									event.cardName=event.card.viewAs||event.card.name;
									player.popup(event.cardName,'thunder');
									if(!lib.card[event.cardName].effect){
										game.delay();
										event.finish();
									}
									else if(!lib.card[event.cardName].judge){
										game.delay();
										event.nojudge=true;
									}
									'step 2'
									if(!event.cancelled&&!event.nojudge) player.judge(event.card);
									'step 3'
									if(event.cancelled&&!event.direct){
										if(lib.card[event.cardName].cancel){
											const next=game.createEvent(event.cardName+'Cancel');
											next.setContent(lib.card[event.cardName].cancel);
											next.card=event.card;
											next.cards=[event.card];
											next.player=player;
										}
									}
									else{
										const next=game.createEvent(event.cardName);
										next.setContent(lib.card[event.cardName].effect);
										next._result=result;
										next.card=event.card;
										next.cards=[event.card];
										next.player=player;
									}
									ui.clear();
								}
							},
							player:{
								canComparePlayer:function(){
									if(!this.countCards('h')) return false;
									if(this.hasSkillTag('noCompareSource')) return false;
									return true;
								},
								chooseToComparePileTop:function(check){
									const next=game.createEvent('chooseToCompare');
									next.set('player',this);
									if(check){
										next.set('ai',check);
									}
									else{
										next.set('ai',card=>{
											if(typeof card=='string'&&lib.skill[card]){
												const ais=lib.skill[card].check||(()=>0);
												return ais();
											}
											const player=get.owner(card);
											const getn=card=>{
												if(player.hasSkill('tianbian')&&get.suit(card)=='heart') return 13;
												return get.number(card);
											};
											const event=_status.event.getParent();
											let addi=(get.value(card)>=8&&get.type(card)!='equip')?-10:0;
											if(card.name=='du') addi+=5;
											return getn(card)-get.value(card)/2+addi;
										});
									}
									next.setContent('chooseToComparePileTop');
									next.forceDie=true;
									next._args=Array.from(arguments);
									return next;
								},
								initBraces:function(num,forced){
									if(this.bracesInited()&&!forced) return;
									if(typeof num!='number') num=1;
									this.storage.braces=num;
								},
								bracesInited:function(){
									return typeof this.storage.braces=='number';
								},
								getBraces:function(){
									if(!this.bracesInited()) return 1;
									return this.storage.braces;
								},
								setBraces:function(num,log){
									if(typeof num!='number') return;
									if(log!==false) game.log(this,'的','#g｛｝','内数值变为',num);
									this.storage.braces=num;
									this.syncStorage('braces');
									this.markSkill('braces');
								},
								addBraces:function(num,log){
									if(typeof num!='number') num=1;
									if(!this.bracesInited()) this.initBraces();
									if(log!==false) game.log(this,'的','#g｛｝','内数值+',num);
									this.addMark('braces',num,false);
								},
								removeBraces:function(num,log){
									if(typeof num!='number') num=1;
									if(!this.bracesInited()) return;
									if(log!==false) game.log(this,'的','#g｛｝','内数值-',num);
									this.storage.braces-=num;
									this.syncStorage('braces');
									this.markSkill('braces');
								},
								getHp:function(){
									return Math.max(0,this.hp);
								},
								getDeckCards:function(num){
									if(typeof num!='number') num=1;
									if(!this.deckCards) return get.cards(num);
									const player=this;
									const list=[];
									for(let i=0;i<num;i++){
										if(player.deckCards.length){
											list.push(player.deckCards.pop());
										}
										else{
											list.addArray(get.cards(num-i));
											break;
										}
									}
									return list;
								},
								getLastRoundHistory:function(round,key,filter,last){
									if(typeof round!='number'||!round) round=1;
									const list=[];
									const all=[];
									for(let i=this.actionHistory.length-1;i>=0;i--){
										all.push(this.actionHistory[i]);
										if(this.actionHistory[i].isRound){
											round--;
											if(round<=0){
												break;
											}
											else{
												all.length=0;
											}
										}
									}
									all.forEach(j=>{
										if(!key||!j[key]){
											list.push(j);
										}
										else{
											if(!filter) list.addArray(j[key]);
											else{
												let history=j[key].slice(0);
												if(last) history=history.slice(0,history.indexOf(last)+1);
												history.forEach(i=>{
													if(filter(i)) list.push(i);
												});
											}
										}
									});
									return list;
								},
								judgeCard:function(card){
									const next=game.createEvent('judgeCard');
									next.player=this;
									next.card=card;
									next.setContent('judgeCard');
									return next;
								},
								canCompareTarget:function(target){
									if(this==target) return false;
									if(!target.countCards('h')) return false;
									if(this.hasSkillTag('noCompareSource')||target.hasSkillTag('noCompareTarget')) return false;
									return true;
								}
							}
						},
						skill:{},
						groupnature:{
							sst_light:'metal',
							sst_dark:'water',
							sst_spirit:'wood',
							sst_reality:'soil',
							sst_smash:'thunder'
						}
					}
					const GAME={
						updateDiscardpile:()=>{
							if(ui.discardPile){
								_status.discardPile.length=0;
								_status.discardPile.push(...Array.from(ui.discardPile.childNodes));
							}
							game.broadcast(discardPile=>_status.discardPile=discardPile,_status.discardPile);
						},
						findPlayersByPlayerid:playerid=>{
							if(Array.isArray(playerid)){
								return game.filterPlayer2(current=>playerid.contains(current.playerid));
							}
							return game.filterPlayer2(current=>current.playerid==playerid);
						},
						findPlayerByPlayerid:playerid=>game.findPlayer2(current=>current.playerid==playerid),
						createCard3:(name,suit,number,nature,tag)=>{
							if(typeof name=='object'){
								nature=name.nature;
								number=name.number;
								suit=name.suit;
								name=name.name;
							}
							if(typeof name!='string'){
								name='sha';
							}
							let noclick=false;
							if(suit=='noclick'){
								noclick=true;
								suit=null;
							}
							if(!suit&&lib.card[name].cardcolor){
								suit=lib.card[name].cardcolor;
							}
							if(!nature&&lib.card[name].cardnature){
								nature=lib.card[name].cardnature;
							}
							if(typeof suit!='string'){
								suit=['heart','diamond','club','spade'].randomGet();
							}
							else if(suit=='black'){
								suit=Math.random()<0.5?'club':'spade';
							}
							else if(suit=='red'){
								suit=Math.random()<0.5?'diamond':'heart';
							}
							if(typeof number!='number'&&typeof number!='string'){
								number=Math.ceil(Math.random()*13);
							}
							let card;
							if(noclick){
								card=ui.create.card(ui.special,'noclick',true);
							}
							else{
								card=ui.create.card(ui.special);
							}
							card.storage.vanish=true;
							return card.init([suit,number,name,nature,tag]);
						},
						createCard4:function(){
							const card=game.createCard3.apply(this,arguments);
							delete card.storage.vanish;
							return card;
						},
						cardCausedDamage:(card,player,target)=>{
							if(get.itemtype(player)=='player'){
								return player.hasHistory('sourceDamage',evt=>{
									let bool=true;
									if(get.itemtype(target)=='player'){
										bool=evt.player==target;
									}
									else if(get.itemtype(target)=='players'){
										bool=target.contains(evt.player);
									}
									return evt.card==card&&bool;
								});
							}
							return game.hasPlayer2(current=>current.hasHistory('sourceDamage',evt=>{
								let bool=true;
								if(get.itemtype(target)=='player'){
									bool=evt.player==target;
								}
								else if(get.itemtype(target)=='players'){
									bool=target.contains(evt.player);
								}
								return evt.card==card&&bool;
							}));
						}
					};
					const UI={
						create:{
							button:function(item,type,position,noclick,node){
								if(type!='blank') return this.sstlib._super.button.apply(this,arguments);
								if(get.itemtype(item)=='card'&&item.hasGaintag('exposed')){
									if(typeof item.copy=='function'){
										node=item.copy(false);
									}
									else{
										node=item.cloneNode(true);
									}
									node.classList.add('button');
									if(position) position.appendChild(node);
									node.link=item;
									if(item.style.backgroundImage){
										node.style.backgroundImage=item.style.backgroundImage;
										node.style.backgroundSize='cover';
									}
									if(item.style.color){
										node.style.color=item.style.color;
									}
									if(item.nature){
										node.classList.add(item.nature);
									}
									if(!noclick){
										lib.setIntro(node);
									}
									if(get.position(item)=='j'&&item.viewAs&&item.viewAs!=item.name&&lib.config.cardtempname!='off'){
										node._tempName=ui.create.div('.tempname',node);
										const tempname=get.translation(item.viewAs);
										node._tempName.dataset.nature='wood';
										node._tempName.innerHTML=lib.config.cardtempname=='default'?get.verticalStr(tempname):tempname;
										node._tempName.tempname=tempname;
									}
								}
								else{
									node=ui.create.div('.button.card',position);
									node.link=item;
								}
								if(!noclick){
									node.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
								}
								else{
									node.classList.add('noclick');
									if(node.querySelector('.intro')){
										node.querySelector('.intro').remove();
									}
								}
								for(const i in lib.element.button){
									node[i]=lib.element.button[i];
								}
								return node;
							}
						}
					};
					const GET={
						nodeintro:function(node,simple,evt){
							const uiintro=this.sstlib._super.nodeintro.apply(this,arguments);
							if(typeof uiintro=='undefined') return;
							if(node.classList.contains('player')&&!node.name) return uiintro;
							if(node.classList.contains('player')||node.linkplayer){
								if(node.linkplayer) node=node.link;
								if(!node.noclick){
									const exposed=node.getCards('h',card=>get.tag(card,'exposed')||card.hasGaintag('exposed'));
									if(exposed.length){
										uiintro.add('<div class="text center">明置手牌</div>');
										uiintro.addSmall(exposed);
										uiintro.add(ui.create.div('.placeholder.slim'));
									}
								}
							}
							return uiintro;
						},
						/**
						 * Insert line break opportunities into a URL
						 * @param {string} url 
						 */
						formatUrl:url=>{
							// Split the URL into an array to distinguish double slashes from single slashes
							const doubleSlash=url.split('//');
							// Format the strings on either side of double slashes separately
							const formatted=doubleSlash.map(str=>str.replace(/(?<after>:)/giu,'$1<wbr>').replace(/(?<before>[/~.,\-_?#%])/giu,'<wbr>$1').replace(/(?<beforeAndAfter>[=&])/giu,'<wbr>$1<wbr>')).join('//<wbr>');
							return formatted;
						}
					};
					const install=(destination,source)=>{
						if(typeof destination.sstlib!="object") destination.sstlib={};
						if(typeof destination.sstlib._super!="object") destination.sstlib._super={};
						for(const i in source){
							if(typeof destination[i]=="object"&&destination[i].constructor===Object){
								install(destination[i],source[i]);
							}
							else{
								if(typeof destination.sstlib._super[i]=="undefined"&&typeof destination[i]!="undefined") destination.sstlib._super[i]=destination[i];
								destination[i]=source[i];
							}
						}
					}
					install(lib,LIB);
					install(game,GAME);
					install(ui,UI);
					install(get,GET);
					lib.sstlib.version=VERSION;
				}
				//Custom groups
				if(!Array.isArray(lib.group)) lib.group=[];
				const GROUP=['sst_light','sst_dark','sst_spirit','sst_reality','sst_smash'];
				lib.group.addArray(GROUP);
				if(typeof lib.decade_extGroupImage!="object") lib.decade_extGroupImage={};
				GROUP.forEach(i=>lib.decade_extGroupImage[i]=lib.assetURL+"extension/大乱桌斗/image/decade_extGroupImage/name_"+i+".png");
				//Characters & cards
				lib.init.js(lib.assetURL+"extension/大乱桌斗/character",["sst_standard","sst_extra"]);
				lib.init.js(lib.assetURL+"extension/大乱桌斗/card","sst_standard");
				//Characters & cards config
				lib.config.all.characters.push("sst_standard");
				if(!lib.config.characters.contains("sst_standard")) lib.config.characters.push("sst_standard");
				lib.translate["sst_standard_character_config"]="大乱桌斗";
				lib.config.all.characters.push("sst_extra");
				if(!lib.config.characters.contains("sst_extra")) lib.config.characters.push("sst_extra");
				lib.translate["sst_extra_character_config"]="乱斗EX";
				lib.config.all.cards.push("sst_standard");
				if(!lib.config.cards.contains("sst_standard")) lib.config.cards.push("sst_standard");
				lib.translate["sst_standard_card_config"]="大乱桌斗";
			}
		},
		help:{},
		config:{
			sst_log:{
				clear:true,
				name:"<details>\
						<summary>\
							更新日志（"+"2.1.7"+"）\
						</summary>\
						<ol>\
							<li>\
								修复了一些小问题。\
							</li>\
						</ol>\
					</details>",
				intro:"查看更新日志"
			}
		},
		package:{
			character:{
				character:{},
				translate:{}
			},
			card:{
				card:{},
				translate:{},
				list:[]
			},
			skill:{
				skill:{},
				translate:{}
			},
			intro:"<h2><img style=\"float: left; height: 1.5em; margin-right: 5px;\" src=\""+lib.assetURL+"extension/大乱桌斗/super_smash_tabletop.png\"><ruby>大乱桌斗LITE<rp>（</rp><rt>Super Smash Tabletop LITE</rt><rp>）</rp></ruby></h2>\
				<p>\
					《大乱桌斗LITE》（原《大乱斗杀》）是《任天堂明星大乱斗》同人无名杀扩展，由《大乱桌斗》同人游戏移植而来，不隶属于<i>任天堂</i>、<i>Sora</i>和其他相关公司。\
				</p>\
				<p>\
					<details>\
						<summary>\
							作者（以斜体表示）\
						</summary>\
						<ul>\
							<li>\
								<i>Show-K</i>（程序开发，卡牌创作）\
							</li>\
							<li>\
								<i>mario not mary</i>（《大乱斗杀》计划发起，主要卡牌创作，插图）\
							</li>\
							<li>\
								<i>Yumikohimi</i>、<i>南柯</i>、<i>Axel_Zhai</i>、<i>小时节</i>等（卡牌创作）\
							</li>\
							<li>\
								<i>封羽翎烈</i>等（《任天堂明星大乱斗特别版全命魂介绍》、插图）\
							</li>\
						</ul>\
					</details>\
				</p>\
				<p>\
					对于未经允许即使用各自作者的插图的事情表示深感抱歉，会尽量标注作者以及相应地址/社交账号，若有异议可联系修改/删除。\
				</p>",
			author:"Show-K",
			diskURL:"https://github.com/Show-K/noname",
			forumURL:"https://unitedrhythmized.club/html/work/game/super-smash-tabletop.html",
			version:"2.1.7",
			changeLog:"<h2><img style=\"float: left; height: 1.5em; margin-right: 5px;\" src=\""+lib.assetURL+"extension/大乱桌斗/super_smash_tabletop.png\"><ruby>更新日志<rp>（</rp><rt>"+"2.1.7"+"</rt><rp>）</rp></ruby></h2>\
				<ol>\
					<li>\
						修复了一些小问题。\
					</li>\
				</ol>"
		},
		files:{
			character:[],
			card:[],
			skill:[]
		}
	};
});