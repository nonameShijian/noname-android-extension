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
					fetch(address + 'update.js')
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

							myConfirm(`《大乱桌斗》扩展检测到更新(v${data.version})，是否更新？\n${data.changeLog}`, () => {
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
					console.error('“lib.extensionPack.大乱桌斗”不存在，无法在线更新');
				}
			});
		},
		precontent:config=>{
			if(config.enable){
				//CSS
				lib.init.css(lib.assetURL+"extension/大乱桌斗/","extension");
				//Override
				const _STATUS={
					mougong_buff:['sha','shan','juedou','huogong','tao']
				};
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
					skill:{
						_sst_sex_select:{
							charlotte:true,
							superCharlotte:true,
							trigger:{
								global:'gameStart',
								player:['enterGame','showCharacterEnd']
							},
							ruleSkill:true,
							silent:true,
							firstDo:true,
							priority:2020,
							filter:(event,player)=>player.sex=='',
							content:()=>{
								'step 0'
								player.chooseControl('male','female').set('prompt','选择性别').set('ai',()=>['male','female'].randomGet());
								'step 1'
								player.sex=result.control;
								game.broadcast((player,sex)=>player.sex=sex,player,result.control);
								const name=player.name;
								const differentAvatar=['sst_corrin','sst_robin','nnk_robin','sst_inkling'];
								if(differentAvatar.contains(name)) player.setAvatar(name,name+'_'+result.control);
								game.log(player,'将性别变为了','#y'+get.translation(result.control));
								const differentGroup={sst_corrin_male:'sst_dark',sst_corrin_female:'sst_light'};
								if(typeof differentGroup[name+'_'+result.control]=='string') player.changeGroup(differentGroup[name+'_'+result.control]);
								player.update();
							}
						},
						_sst_group_select:{
							charlotte:true,
							superCharlotte:true,
							trigger:{
								global:'gameStart',
								player:['enterGame','showCharacterEnd']
							},
							ruleSkill:true,
							silent:true,
							firstDo:true,
							priority:2019,
							filter:(event,player)=>!get.config('no_group')&&player.group=='sst_smash',
							content:()=>{
								'step 0'
								player.chooseControl('sst_light','sst_dark','sst_spirit','sst_reality').set('prompt','选择势力').set('ai',()=>{
									if(game.zhu&&game.zhu!=_status.event.player&&get.attitude(_status.event.player,game.zhu)>0&&_status.event.controls.contains(game.zhu.group)) return game.zhu.group;
									return _status.event.controls.randomGet();
								});
								'step 1'
								player.changeGroup(result.control);
								player.update();
							}
						},
						_useAnger_juedou:{
							ruleSkill:true,
							charlotte:true,
							forced:true,
							popup:false,
							trigger:{source:'damageBegin1'},
							filter:(event,player)=>{
								const evt=event.getParent(2);
								if(!evt||evt.name!='useCard') return false;
								if(typeof evt.th_anger!='object') return false;
								if(typeof evt.th_anger[player.playerid]!='number') return false;
								return evt.th_anger[player.playerid]!=0;
							},
							content:()=>trigger.num+=trigger.getParent(2).th_anger[player.playerid]
						},
						braces:{
							intro:{
								content:'#'
							}
						}
					},
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
							switch(type){
								case 'blank':
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
										var tempname=get.translation(item.viewAs);
										node._tempName.dataset.nature='wood';
										node._tempName.innerHTML=lib.config.cardtempname=='default'?get.verticalStr(tempname):tempname;
										node._tempName.tempname=tempname;
									}
								}
								else{
									node=ui.create.div('.button.card',position);
									node.link=item;
								}
								break;
			
								case 'card':
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
									var tempname=get.translation(item.viewAs);
									node._tempName.dataset.nature='wood';
									node._tempName.innerHTML=lib.config.cardtempname=='default'?get.verticalStr(tempname):tempname;
									node._tempName.tempname=tempname;
								}
								break;
			
								case 'vcard':
								if(typeof item=='string'){
									item=[get.type(item),'',item];
								}
								node=ui.create.card(position,'noclick',noclick);
								node.classList.add('button');
								node.init(item);
								node.link=item;
								break;
			
								case 'character':case 'player':case 'characterx':
								if(node){
									node.classList.add('button');
									node.classList.add('character');
									node.style.display='';
								}
								else{
									node=ui.create.div('.button.character',position);
								}
								node._link=item;
								if(_status.noReplaceCharacter&&type=='characterx') type='character';
								if(type=='characterx'){
									if(lib.characterReplace[item]&&lib.characterReplace[item].length) item=lib.characterReplace[item][0];
								}
								node.link=item;
								if(type=='character'||type=='characterx'){
									var double=get.is.double(node._link,true);
									if(double) node._changeGroup=true;
									if(type=='characterx'&&lib.characterReplace[node._link]&&lib.characterReplace[node._link].length>1) node._replaceButton=true;
									var func=function(node,item){
										node.setBackground(item,'character');
										if(node.node){
											node.node.name.remove();
											node.node.hp.remove();
											node.node.group.remove();
											node.node.intro.remove();
											if(node.node.replaceButton) node.node.replaceButton.remove();;
										}
										node.node={
											name:ui.create.div('.name',node),
											hp:ui.create.div('.hp',node),
											group:ui.create.div('.identity',node),
											intro:ui.create.div('.intro',node),
										};
										var infoitem=lib.character[item];
										if(!infoitem){
											for(var itemx in lib.characterPack){
												if(lib.characterPack[itemx][item]){
													infoitem=lib.characterPack[itemx][item];break;
												}
											}
										}
										node.node.name.innerHTML=get.slimName(item);
										if(lib.config.buttoncharacter_style=='default'||lib.config.buttoncharacter_style=='simple'){
											if(lib.config.buttoncharacter_style=='simple'){
												node.node.group.style.display='none';
											}
											node.node.name.dataset.nature=get.groupnature(infoitem[1]);
											node.node.group.dataset.nature=get.groupnature(infoitem[1],'raw');
											node.classList.add('newstyle');
											if(double&&double.length){
												node.node.name.dataset.nature=get.groupnature(double[0]);
												node.node.group.dataset.nature=get.groupnature(double[double.length==2?1:0]);
											}
											ui.create.div(node.node.hp);
											var hp=get.infoHp(infoitem[2]),maxHp=get.infoMaxHp(infoitem[2]),hujia=get.infoHujia(infoitem[2]);
											var str=get.numStr(hp);
											if(hp!=maxHp){
												str+='/';
												str+=get.numStr(maxHp);
											}
											var textnode=ui.create.div('.text',str,node.node.hp);
											if(infoitem[2]==0){
												node.node.hp.hide();
											}
											else if(get.infoHp(infoitem[2])<=3){
												node.node.hp.dataset.condition='mid';
											}
											else{
												node.node.hp.dataset.condition='high';
											}
											if(hujia>0){
												ui.create.div(node.node.hp,'.shield');
												ui.create.div('.text',get.numStr(hujia),node.node.hp);
											}
										}
										else{
											var hp=get.infoHp(infoitem[2]);
											var maxHp=get.infoMaxHp(infoitem[2]);
											var shield=get.infoHujia(infoitem[2]);
											if(maxHp>14){
												if(typeof infoitem[2]=='string') node.node.hp.innerHTML=infoitem[2];
												else node.node.hp.innerHTML=get.numStr(infoitem[2]);
												node.node.hp.classList.add('text');
											}
											else{
												for(var i=0;i<maxHp;i++){
													var next=ui.create.div('',node.node.hp);
													if(i>=hp) next.classList.add('exclude');
												}
												for(var i=0;i<shield;i++){
													ui.create.div(node.node.hp,'.shield');
												}
											}
										}
										if(node.node.hp.childNodes.length==0){
											node.node.name.style.top='8px';
										}
										if(node.node.name.querySelectorAll('br').length>=4){
											node.node.name.classList.add('long');
											if(lib.config.buttoncharacter_style=='old'){
												node.addEventListener('mouseenter',ui.click.buttonnameenter);
												node.addEventListener('mouseleave',ui.click.buttonnameleave);
											}
										}
										node.node.intro.innerHTML=lib.config.intro;
										if(!noclick){
											lib.setIntro(node);
										}
										if(infoitem[1]){
											if(double){
												var str='<div>';
												if(double.length==2){
													for(var i of double){
														str+=get.translation(i);
													}
												}
												else str+=get.translation(double[0]);
												str+='</div>';
												node.node.group.innerHTML=str;
											}
											else node.node.group.innerHTML='<div>'+get.translation(infoitem[1])+'</div>';
											node.node.group.style.backgroundColor=get.translation(infoitem[1]+'Color');
										}
										else{
											node.node.group.style.display='none';
										}
										if(node._replaceButton){
											var intro=ui.create.div('.button.replaceButton',node);
											node.node.replaceButton=intro;
											intro.innerHTML='切换';
											intro._node=node;
											intro.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
												_status.tempNoButton=true;
												var node=this._node;
												var list=lib.characterReplace[node._link];
												var link=node.link;
												var index=list.indexOf(link);
												if(index==list.length-1) index=0;
												else index++;
												link=list[index];
												node.link=link;
												node.refresh(node,link);
												setTimeout(function(){
													delete _status.tempNoButton;
												},200);
											});
										}
									};
									node.refresh=func;
									node.refresh(node,item);
								}
								else{
									node.node={
										name:ui.create.div('.name',node),
										intro:ui.create.div('.intro',node)
									}
									if(item.name&&item.name.indexOf('unknown')==0){
										if(item.node&&item.node.name_seat){
											node.classList.add('cardbg');
											ui.create.div('.avatar_name',node,get.translation(item.name));
										}
										else{
											node.setBackground(item.name1,'character');
										}
									}
									else{
										node.setBackground(item.name,'character');
									}
								}
								break;
			
								case 'text':
								node=ui.create.div('.button.text',position);
								node.link=item;
								node.innerHTML=item;
								break;
								
								case 'textButton':
								node=ui.create.div('.caption',position);
								node.link=item;
								node.innerHTML=item;
								break;
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
							for(var i in lib.element.button){
								node[i]=lib.element.button[i];
							}
							return node;
						}
					}
				};
				const GET={
					nodeintro:function(node,simple,evt){
						var uiintro=ui.create.dialog('hidden','notouchscroll');
						if(node.classList.contains('player')&&!node.name){
							return uiintro;
						}
						var i,translation,intro,str;
						if(node._nointro) return;
						if(typeof node._customintro=='function'){
							if(node._customintro(uiintro)===false) return;
						}
						else if(Array.isArray(node._customintro)){
							var caption=node._customintro[0];
							var content=node._customintro[1];
							if(typeof caption=='function'){
								caption=caption(node);
							}
							if(typeof content=='function'){
								content=content(node);
							}
							uiintro.add(caption);
							uiintro.add('<div class="text center" style="padding-bottom:5px">'+content+'</div>');
						}
						else if(node.classList.contains('player')||node.linkplayer){
							if(node.linkplayer){
								node=node.link;
							}
							var capt=get.translation(node.name);
							if((lib.character[node.name]&&lib.character[node.name][1])||lib.group.contains(node.group)){
								capt+='&nbsp;&nbsp;'+(lib.group.contains(node.group)?get.translation(node.group):lib.translate[lib.character[node.name][1]]);
							}
							uiintro.add(capt);
			
							if(lib.characterTitle[node.name]){
								uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
							}
			
							if(!node.noclick){
								var hs=node.getCards('h');
								if(hs.length){
									if(node.isUnderControl()||(!game.observe&&game.me&&game.me.hasSkillTag('viewHandcard',null,node,true))){
										uiintro.add('<div class="text center">手牌</div>');
										uiintro.addSmall(node.getCards('h'));
									}
									else{
										for(var j=0;j<hs.length;j++){
											if(!get.tag(hs[j],'exposed')&&!hs[j].hasGaintag('exposed')) hs.splice(j--,1);
										}
										if(hs.length){
											uiintro.add('<div class="text center">手牌</div>');
											uiintro.addSmall(hs);
										}
									}
								}
							}
			
							var skills=node.getSkills(null,false,false).slice(0);
							var skills2=game.filterSkills(skills,node);
							if(node==game.me&&node.hiddenSkills.length){
								skills.addArray(node.hiddenSkills);
							}
							for(var i in node.disabledSkills){
								if(node.disabledSkills[i].length==1&&
									node.disabledSkills[i][0]==i+'_awake'&&
									!node.hiddenSkills.contains(i)){
									skills.add(i);
								}
							}
							for(i=0;i<skills.length;i++){
								if(lib.skill[skills[i]]&&(lib.skill[skills[i]].nopop||lib.skill[skills[i]].equipSkill)) continue;
								if(lib.translate[skills[i]+'_info']){
									translation=lib.translate[skills[i]+'_ab']||get.translation(skills[i]).slice(0,2);
									if(node.forbiddenSkills[skills[i]]){
										var forbidstr='<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>';
										if(node.forbiddenSkills[skills[i]].length){
											forbidstr+='（与'+get.translation(node.forbiddenSkills[skills[i]])+'冲突）<br>';
										}
										else{
											forbidstr+='（双将禁用）<br>';
										}
										forbidstr+=get.skillInfoTranslation(skills[i],node)+'</div></div>'
										uiintro.add(forbidstr);
									}
									else if(!skills2.contains(skills[i])){
										if(lib.skill[skills[i]].preHidden&&get.mode()=='guozhan'){
											uiintro.add('<div><div class="skill" style="opacity:0.5">【'+translation+'】</div><div><span style="opacity:0.5">'+get.skillInfoTranslation(skills[i],node)+'</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
											var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
											if(_status.prehidden_skills.contains(skills[i])){
												underlinenode.classList.remove('on');
											}
											underlinenode.link=skills[i];
											underlinenode.listen(ui.click.hiddenskill);
										}
										else uiintro.add('<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
									}
									else if(lib.skill[skills[i]].temp||!node.skills.contains(skills[i])||lib.skill[skills[i]].thundertext){
										if(lib.skill[skills[i]].frequent||lib.skill[skills[i]].subfrequent){
											uiintro.add('<div><div class="skill thundertext thunderauto">【'+translation+'】</div><div class="thundertext thunderauto">'+get.skillInfoTranslation(skills[i],node)+'<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
											var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
											if(lib.skill[skills[i]].frequent){
												if(lib.config.autoskilllist.contains(skills[i])){
													underlinenode.classList.remove('on');
												}
											}
											if(lib.skill[skills[i]].subfrequent){
												for(var j=0;j<lib.skill[skills[i]].subfrequent.length;j++){
													if(lib.config.autoskilllist.contains(skills[i]+'_'+lib.skill[skills[i]].subfrequent[j])){
														underlinenode.classList.remove('on');
													}
												}
											}
											if(lib.config.autoskilllist.contains(skills[i])){
												underlinenode.classList.remove('on');
											}
											underlinenode.link=skills[i];
											underlinenode.listen(ui.click.autoskill2);
										}
										else{
											uiintro.add('<div><div class="skill thundertext thunderauto">【'+translation+'】</div><div class="thundertext thunderauto">'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
										}
									}
									else if(lib.skill[skills[i]].frequent||lib.skill[skills[i]].subfrequent){
										uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
										var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
										if(lib.skill[skills[i]].frequent){
											if(lib.config.autoskilllist.contains(skills[i])){
												underlinenode.classList.remove('on');
											}
										}
										if(lib.skill[skills[i]].subfrequent){
											for(var j=0;j<lib.skill[skills[i]].subfrequent.length;j++){
												if(lib.config.autoskilllist.contains(skills[i]+'_'+lib.skill[skills[i]].subfrequent[j])){
													underlinenode.classList.remove('on');
												}
											}
										}
										if(lib.config.autoskilllist.contains(skills[i])){
											underlinenode.classList.remove('on');
										}
										underlinenode.link=skills[i];
										underlinenode.listen(ui.click.autoskill2);
									}
									else if(lib.skill[skills[i]].clickable&&node.isIn()&&node.isUnderControl(true)){
										var intronode=uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
										if(!_status.gameStarted||(lib.skill[skills[i]].clickableFilter&&!lib.skill[skills[i]].clickableFilter(node))){
											intronode.classList.add('disabled');
											intronode.style.opacity=0.5;
										}
										else{
											intronode.link=node;
											intronode.func=lib.skill[skills[i]].clickable;
											intronode.classList.add('pointerdiv');
											intronode.listen(ui.click.skillbutton);
										}
									}
									else if(lib.skill[skills[i]].nobracket){
										uiintro.add('<div><div class="skilln">'+get.translation(skills[i])+'</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
									}
									else{
										uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i],node)+'</div></div>');
									}
									if(lib.translate[skills[i]+'_append']){
										uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
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
			
							if(lib.config.right_range&&_status.gameStarted){
								uiintro.add(ui.create.div('.placeholder'));
								var table,tr,td;
								table=document.createElement('table');
								tr=document.createElement('tr');
								table.appendChild(tr);
								td=document.createElement('td');
								td.innerHTML='距离';
								tr.appendChild(td);
								td=document.createElement('td');
								td.innerHTML='手牌';
								tr.appendChild(td);
								td=document.createElement('td');
								td.innerHTML='行动';
								tr.appendChild(td);
								td=document.createElement('td');
								td.innerHTML='伤害';
								tr.appendChild(td);
			
								tr=document.createElement('tr');
								table.appendChild(tr);
								td=document.createElement('td');
								if(node==game.me||!game.me||!game.me.isIn()){
									td.innerHTML='-';
								}
								else{
									var dist1=get.numStr(Math.max(1,game.me.distanceTo(node)));
									var dist2=get.numStr(Math.max(1,node.distanceTo(game.me)));
									if(dist1==dist2){
										td.innerHTML=dist1;
									}
									else{
										td.innerHTML=dist1+'/'+dist2;
									}
								}
								tr.appendChild(td);
								td=document.createElement('td');
								td.innerHTML=node.countCards('h');
								tr.appendChild(td);
								td=document.createElement('td');
								td.innerHTML=node.phaseNumber;
								tr.appendChild(td);
								td=document.createElement('td');
			
								(function(){
									num=0;
									for(var j=0;j<node.stat.length;j++){
										if(typeof node.stat[j].damage=='number') num+=node.stat[j].damage;
									}
									td.innerHTML=num;
								}());
								tr.appendChild(td);
								table.style.width='calc(100% - 20px)';
								table.style.marginLeft='10px';
			
								uiintro.content.appendChild(table);
								if(!lib.config.show_favourite){
									table.style.paddingBottom='5px'
								}
							}
							if(!simple||get.is.phoneLayout()){
								var es=node.getCards('e');
								for(var i=0;i<es.length;i++){
									uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+lib.translate[es[i].name+'_info']+'</div></div>');
									uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
								}
								var js=node.getCards('j');
								for(var i=0;i<js.length;i++){
									if(js[i].viewAs&&js[i].viewAs!=js[i].name){
										uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].viewAs]+'：'+lib.translate[js[i].viewAs+'_info']+'</div></div>');
									}
									else{
										uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].name+'_info']+'</div></div>');
									}
									uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
								}
								if(get.is.phoneLayout()){
									var markCoutainer=ui.create.div('.mark-container.marks');
									for(var i in node.marks){
										var nodemark=node.marks[i].cloneNode(true);
										nodemark.classList.add('pointerdiv');
										nodemark.link=node.marks[i];
										nodemark.style.transform='';
										markCoutainer.appendChild(nodemark);
										nodemark.listen(function(){
											uiintro.noresume=true;
											var rect=this.link.getBoundingClientRect();
											ui.click.intro.call(this.link,{
												clientX:rect.left+rect.width,
												clientY:rect.top+rect.height/2,
											});
											if(lib.config.touchscreen){
												uiintro._close();
											}
										});
									}
									if(markCoutainer.childElementCount){
										uiintro.addText('标记');
										uiintro.add(markCoutainer);
									}
								}
							}
							if(!game.observe&&_status.gameStarted&&game.me&&node!=game.me){
								ui.throwEmotion=[];
								uiintro.addText('发送交互表情');
								var click=function(){
									if(_status.dragged) return;
									if(_status.justdragged) return;
									if(_status.throwEmotionWait) return;
									var emotion=this.link;
									if(game.online){
										game.send('throwEmotion',node,emotion);
									}
									else game.me.throwEmotion(node,emotion);
									uiintro._close();
									_status.throwEmotionWait=true;
									setTimeout(function(){
										_status.throwEmotionWait=false;
										if(ui.throwEmotion){
											for(var i of ui.throwEmotion) i.classList.remove('exclude');
										}
									},(emotion=='flower'||emotion=='egg')?5000:10000)
								};
								var td;
								var table=document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin='0';
								table.style.width='100%';
								table.style.position='relative';
								var listi=['flower','egg'];
								for(var i=0;i<listi.length;i++){
									td=ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
									ui.throwEmotion.add(td);
									if(_status.throwEmotionWait) td.classList.add('exclude');
									td.link=listi[i];
									table.appendChild(td);
									td.innerHTML='<span>'+get.translation(listi[i])+'</span>';
									td.addEventListener(lib.config.touchscreen?'touchend':'click',click);
								}
								uiintro.content.appendChild(table);
								table=document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin='0';
								table.style.width='100%';
								table.style.position='relative';
								var listi=['wine','shoe'];
								if(game.me.storage.zhuSkill_shanli) listi=['yuxisx','jiasuo'];
								for(var i=0;i<listi.length;i++){
									td=ui.create.div('.menubutton.reduce_radius.pointerdiv.tdnode');
									ui.throwEmotion.add(td);
									if(_status.throwEmotionWait) td.classList.add('exclude');
									td.link=listi[i];
									table.appendChild(td);
									td.innerHTML='<span>'+get.translation(listi[i])+'</span>';
									td.addEventListener(lib.config.touchscreen?'touchend':'click',click);
								}
								uiintro.content.appendChild(table);
							}
							var modepack=lib.characterPack['mode_'+get.mode()];
							if(lib.config.show_favourite&&lib.character[node.name]&&game.players.contains(node)&&
								(!modepack||!modepack[node.name])&&(!simple||get.is.phoneLayout())){
								var addFavourite=ui.create.div('.text.center.pointerdiv');
								addFavourite.link=node.link;
								if(lib.config.favouriteCharacter.contains(node.name)){
									addFavourite.innerHTML='移除收藏';
								}
								else{
									addFavourite.innerHTML='添加收藏';
								}
								addFavourite.listen(ui.click.favouriteCharacter)
								uiintro.add(addFavourite);
							}
							if(!simple||get.is.phoneLayout()){
								if((lib.config.change_skin||lib.skin)&&!node.isUnseen()){
									var num=1;
									var introadded=false;
									var createButtons=function(num,avatar2){
										if(!introadded){
											introadded=true;
											uiintro.add('<div class="text center">更改皮肤</div>');
										}
										var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
										lib.setMousewheel(buttons);
										var nameskin=(avatar2?node.name2:node.name1);
										var nameskin2=nameskin;
										var gzbool=false;
										if(nameskin.indexOf('gz_shibing')==0){
											nameskin=nameskin.slice(3,11);
										}
										else if(nameskin.indexOf('gz_')==0){
											nameskin=nameskin.slice(3);
											gzbool=true;
										}
										for(var i=0;i<=num;i++){
											var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
												if(this._link){
													if(avatar2){
														lib.config.skin[nameskin]=this._link;
														node.node.avatar2.style.backgroundImage=this.style.backgroundImage;
													}
													else{
														lib.config.skin[nameskin]=this._link;
														node.node.avatar.style.backgroundImage=this.style.backgroundImage;
													}
												}
												else{
													delete lib.config.skin[nameskin];
													if(avatar2){
														if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar2.setBackground(nameskin2,'character');
														else node.node.avatar2.setBackground(nameskin,'character');
													}
													else{
														if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.node.avatar.setBackground(nameskin2,'character');
														else node.node.avatar.setBackground(nameskin,'character');
													}
												}
												game.saveConfig('skin',lib.config.skin);
											});
											button._link=i;
											if(i){
												button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
											}
											else{
												if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2,'character','noskin');
												else button.setBackground(nameskin,'character','noskin');
											}
										}
										uiintro.add(buttons);
									};
									var loadImage=function(avatar2){
										var img=new Image();
										img.onload=function(){
											num++;
											loadImage(avatar2);
										}
										img.onerror=function(){
											num--;
											if(num){
												createButtons(num,avatar2);
											}
											if(!avatar2){
												if(!node.classList.contains('unseen2')&&node.name2){
													num=1;
													loadImage(true);
												}
											}
										}
										var nameskin=(avatar2?node.name2:node.name1);
										var nameskin2=nameskin;
										var gzbool=false;
										if(nameskin.indexOf('gz_shibing')==0){
											nameskin=nameskin.slice(3,11);
										}
										else if(nameskin.indexOf('gz_')==0){
											nameskin=nameskin.slice(3);
											gzbool=true;
										}
										img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
									}
									if(lib.config.change_skin){
										if(!node.isUnseen(0)){
											loadImage();
										}
										else if(node.name2){
											loadImage(true);
										}
									}
									else{
										setTimeout(function(){
											var nameskin1=node.name1;
											var nameskin2=node.name2;
											if(nameskin1&&nameskin1.indexOf('gz_')==0){
												nameskin1=nameskin1.slice(3);
											}
											if(nameskin2&&nameskin2.indexOf('gz_')==0){
												nameskin2=nameskin2.slice(3);
											}
											if(!node.isUnseen(0)&&lib.skin[nameskin1]){
												createButtons(lib.skin[nameskin1]);
											}
											if(!node.isUnseen(1)&&lib.skin[nameskin2]){
												createButtons(lib.skin[nameskin2],true);
											}
										});
									}
								}
							}
			
							uiintro.add(ui.create.div('.placeholder.slim'));
						}
						else if(node.classList.contains('mark')&&node.info&&
							node.parentNode&&node.parentNode.parentNode&&node.parentNode.parentNode.classList.contains('player')){
							var info=node.info;
							var player=node.parentNode.parentNode;
							if(info.name){
								if(typeof info.name=='function'){
									var named=info.name(player.storage[node.skill],player);
									if(named){
										uiintro.add(named);
									}
								}
								else{
									uiintro.add(info.name);
								}
							}
							else if(info.name!==false){
								uiintro.add(get.translation(node.skill));
							}
							if(typeof info.id=='string'&&info.id.indexOf('subplayer')==0&&
								player.isUnderControl(true)&&player.storage[info.id]&&!_status.video){
								var storage=player.storage[info.id];
								uiintro.addText('当前体力：'+storage.hp+'/'+storage.maxHp);
								if(storage.hs.length){
									uiintro.addText('手牌区');
									uiintro.addSmall(storage.hs);
								}
								if(storage.es.length){
									uiintro.addText('装备区');
									uiintro.addSmall(storage.es);
								}
							}
							if(typeof info.mark=='function'){
								var stint=info.mark(uiintro,player.storage[node.skill],player);
								if(stint){
									var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
									if(stint.indexOf('<div class="skill"')!=0){
										uiintro._place_text=placetext;
									}
									// if(stint.length<=100){
									// 	uiintro.add('<div class="text center">'+stint+'</div>');
									// }
									// else{
									// 	uiintro.add('<div class="text">'+stint+'</div>');
									// }
								}
							}
							else{
								var stint=get.storageintro(info.content,player.storage[node.skill],player,uiintro,node.skill);
								if(stint){
									if(stint[0]=='@'){
										uiintro.add('<div class="caption">'+stint.slice(1)+'</div>');
									}
									else{
										var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
										if(stint.indexOf('<div class="skill"')!=0){
											uiintro._place_text=placetext;
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
						}
						else if(node.classList.contains('card')){
							//卡牌长按介绍
							if(ui.arena.classList.contains('observe')&&node.parentNode.classList.contains('handcards')){
								return;
							}
							var name=node.name;
							if(node.parentNode.cardMod){
								var moded=false;
								for(var i in node.parentNode.cardMod){
									var item=node.parentNode.cardMod[i](node);
									if(Array.isArray(item)){
										moded=true;
										uiintro.add(item[0]);
										uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+item[1]+'</div>');
									}
								}
								if(moded) return uiintro;
							}
							if(node.link&&node.link.name&&lib.card[node.link.name]){
								name=node.link.name;
							}
							if(get.position(node)=='j'&&node.viewAs&&node.viewAs!=name){
								uiintro.add(get.translation(node.viewAs));
								uiintro.add('<div class="text center">（'+get.translation(get.translation(node))+'）</div>');
								// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
								uiintro.nosub=true;
								name=node.viewAs;
							}
							else{
								uiintro.add(get.translation(node));
							}
							if(node._banning){
								var clickBanned=function(){
									var banned=lib.config[this.bannedname]||[];
									if(banned.contains(name)){
										banned.remove(name);
									}
									else{
										banned.push(name);
									}
									game.saveConfig(this.bannedname,banned);
									this.classList.toggle('on');
									if(node.updateBanned){
										node.updateBanned();
									}
								};
								var modeorder=lib.config.modeorder||[];
								for(var i in lib.mode){
									modeorder.add(i);
								}
								var list=[];
								uiintro.contentContainer.listen(function(e){
									ui.click.touchpop();
									e.stopPropagation();
								});
								for(var i=0;i<modeorder.length;i++){
									if(node._banning=='online'){
										if(!lib.mode[modeorder[i]].connect) continue;
									}
									else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
										continue;
									}
									if(lib.config.all.mode.contains(modeorder[i])){
										list.push(modeorder[i]);
									}
								}
								if(lib.card[name]&&lib.card[name].type=='trick') list.push('zhinang_tricks');
								var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
								var banall=false;
								for(var i=0;i<list.length;i++){
									var cfg=ui.create.div('.config',list[i]=='zhinang_tricks'?'设为智囊':(lib.translate[list[i]]+'模式'),page);
									cfg.classList.add('toggle');
									if(list[i]=='zhinang_tricks'){
										cfg.bannedname=((node._banning=='offline')?'':'connect_')+'zhinang_tricks';
									}
									else if(node._banning=='offline'){
										cfg.bannedname=list[i]+'_bannedcards';
									}
									else{
										cfg.bannedname='connect_'+list[i]+'_bannedcards';
									}
									cfg.listen(clickBanned);
									ui.create.div(ui.create.div(cfg));
									var banned=lib.config[cfg.bannedname]||[];
									if(banned.contains(name)==(list[i]=='zhinang_tricks')){
										cfg.classList.add('on');
										banall=true;
									}
								}
								ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
									if(this.innerHTML=='全部禁用'){
										for(var i=0;i<page.childElementCount;i++){
											if(page.childNodes[i].bannedname.indexOf('zhinang_tricks')==-1&&page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
												clickBanned.call(page.childNodes[i]);
											}
										}
										this.innerHTML='全部启用';
									}
									else{
										for(var i=0;i<page.childElementCount;i++){
											if(page.childNodes[i].bannedname.indexOf('zhinang_tricks')==-1&&page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
												clickBanned.call(page.childNodes[i]);
											}
										}
										this.innerHTML='全部禁用';
									}
								}).style.marginTop='-10px';
								ui.create.div('.placeholder.slim',uiintro.content);
							}
							else{
								if(lib.translate[name+'_info']){
									if(!uiintro.nosub){
										if(get.subtype(node)=='equip1'){
											var added=false;
											if(lib.card[node.name]&&lib.card[node.name].distance){
												var dist=lib.card[node.name].distance;
												if(dist.attackFrom){
													added=true;
													uiintro.add('<div class="text center">攻击范围：'+(-dist.attackFrom+1)+'</div>');
												}
											}
											if(!added){
												uiintro.add('<div class="text center">攻击范围：1</div>');
											}
										}
										else if(get.subtype(node)){
											uiintro.add('<div class="text center">'+get.translation(get.subtype(node))+'</div>');
										}
										else if(lib.card[name]&&lib.card[name].addinfomenu){
											uiintro.add('<div class="text center">'+lib.card[name].addinfomenu+'</div>');
										}
										else if(lib.card[name]&&lib.card[name].derivation){
											if(typeof lib.card[name].derivation=='string'){
												uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivation)+'</div>');
											}
											else if(lib.card[name].derivationpack){
												uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivationpack+'_card_config')+'包</div>');
											}
										}
										else{
											if(lib.card[name].unique){
												uiintro.add('<div class="text center">特殊'+get.translation(lib.card[name].type)+'牌</div>');
											}
											else{
												if(lib.card[name].type&&lib.translate[lib.card[name].type]) uiintro.add('<div class="text center">'+get.translation(lib.card[name].type)+'牌</div>');
											}
										}
										if(lib.card[name].unique&&lib.card[name].type=='equip'){
											if(lib.cardPile.guozhan&&lib.cardPack.guozhan.contains(name)){
												uiintro.add('<div class="text center">专属装备</div>').style.marginTop='-5px';
											}
											else{
												uiintro.add('<div class="text center">特殊装备</div>').style.marginTop='-5px';
											}
										}
									}
									if(lib.card[name].cardPrompt){
										var str=lib.card[name].cardPrompt(node.link||node),placetext=uiintro.add('<div class="text" style="display:inline">'+str+'</div>');
										if(str.indexOf('<div class="skill"')!=0){
											uiintro._place_text=placetext;
										}
									}
									else if(lib.translate[name+'_info']){
										var placetext=uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_info']+'</div>');
										if(lib.translate[name+'_info'].indexOf('<div class="skill"')!=0){
											uiintro._place_text=placetext;
										}
									}
									if(lib.card[name].yingbian_prompt&&get.is.yingbian(node.link||node)){
										if(typeof lib.card[name].yingbian_prompt=='function') uiintro.add('<div class="text" style="font-family: yuanli">应变：'+lib.card[name].yingbian_prompt(node.link||node)+'</div>');
										else uiintro.add('<div class="text" style="font-family: yuanli">应变：'+lib.card[name].yingbian_prompt+'</div>');
									}
									if(lib.translate[name+'_append']){
										uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_append']+'</div>');
									}
								}
								uiintro.add(ui.create.div('.placeholder.slim'));
							}
						}
						else if(node.classList.contains('character')){
							var character=node.link;
							if(lib.character[node.link]&&lib.character[node.link][1]){
								var group=get.is.double(node.link,true);
								if(group){
									var str=get.translation(character)+'&nbsp;&nbsp;';
									for(var i=0;i<group.length;i++){
										str+=get.translation(group[i]);
										if(i<group.length-1) str+='/';
									}
									uiintro.add(str);
								}
								else uiintro.add(get.translation(character)+'&nbsp;&nbsp;'+lib.translate[lib.character[node.link][1]]);
							}
							else{
								uiintro.add(get.translation(character));
							}
			
							if(lib.characterTitle[node.link]){
								uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
							}
			
							if(node._banning){
								var clickBanned=function(){
									var banned=lib.config[this.bannedname]||[];
									if(banned.contains(character)){
										banned.remove(character);
									}
									else{
										banned.push(character);
									}
									game.saveConfig(this.bannedname,banned);
									this.classList.toggle('on');
									if(node.updateBanned){
										node.updateBanned();
									}
								};
								var modeorder=lib.config.modeorder||[];
								for(var i in lib.mode){
									modeorder.add(i);
								}
								var list=[];
								uiintro.contentContainer.listen(function(e){
									ui.click.touchpop();
									e.stopPropagation();
								});
								for(var i=0;i<modeorder.length;i++){
									if(node._banning=='online'){
										if(!lib.mode[modeorder[i]].connect) continue;
										if(!lib.config['connect_'+modeorder[i]+'_banned']){
											lib.config['connect_'+modeorder[i]+'_banned']=[];
										}
									}
									else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
										continue;
									}
									if(lib.config.all.mode.contains(modeorder[i])){
										list.push(modeorder[i]);
									}
								}
								var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
								var banall=false;
								for(var i=0;i<list.length;i++){
									var cfg=ui.create.div('.config',lib.translate[list[i]]+'模式',page);
									cfg.classList.add('toggle');
									if(node._banning=='offline'){
										cfg.bannedname=list[i]+'_banned';
									}
									else{
										cfg.bannedname='connect_'+list[i]+'_banned';
									}
									cfg.listen(clickBanned);
									ui.create.div(ui.create.div(cfg));
									var banned=lib.config[cfg.bannedname]||[];
									if(!banned.contains(character)){
										cfg.classList.add('on');
										banall=true;
									}
								}
								if(node._banning=='offline'){
									var cfg=ui.create.div('.config','随机选将可用',page);
									cfg.classList.add('toggle');
									cfg.listen(function(){
										this.classList.toggle('on');
										if(this.classList.contains('on')){
											lib.config.forbidai_user.remove(character);
										}
										else{
											lib.config.forbidai_user.add(character);
										}
										game.saveConfig('forbidai_user',lib.config.forbidai_user);
									});
									ui.create.div(ui.create.div(cfg));
									if(!lib.config.forbidai_user.contains(character)){
										cfg.classList.add('on');
									}
								}
								ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
									if(this.innerHTML=='全部禁用'){
										for(var i=0;i<page.childElementCount;i++){
											if(page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
												clickBanned.call(page.childNodes[i]);
											}
										}
										this.innerHTML='全部启用';
									}
									else{
										for(var i=0;i<page.childElementCount;i++){
											if(page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
												clickBanned.call(page.childNodes[i]);
											}
										}
										this.innerHTML='全部禁用';
									}
								}).style.marginTop='-10px';
								ui.create.div('.placeholder.slim',uiintro.content);
							}
							else{
								var infoitem=lib.character[character];
								if(!infoitem){
									for(var itemx in lib.characterPack){
										if(lib.characterPack[itemx][character]){
											infoitem=lib.characterPack[itemx][character];break;
										}
									}
								}
								var skills=infoitem[3];
								for(i=0;i<skills.length;i++){
									if(lib.translate[skills[i]+'_info']){
										translation=lib.translate[skills[i]+'_ab']||get.translation(skills[i]).slice(0,2);
										if(lib.skill[skills[i]]&&lib.skill[skills[i]].nobracket){
											uiintro.add('<div><div class="skilln">'+get.translation(skills[i])+'</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
										}
										else{
											uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
										}
										if(lib.translate[skills[i]+'_append']){
											uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
										}
									}
								}
								var modepack=lib.characterPack['mode_'+get.mode()];
								if(lib.config.show_favourite&&
								lib.character[node.link]&&(!modepack||!modepack[node.link])&&(!simple||get.is.phoneLayout())){
									var addFavourite=ui.create.div('.text.center.pointerdiv');
									addFavourite.link=node.link;
									addFavourite.style.marginBottom='15px';
									if(lib.config.favouriteCharacter.contains(node.link)){
										addFavourite.innerHTML='移除收藏';
									}
									else{
										addFavourite.innerHTML='添加收藏';
									}
									addFavourite.listen(ui.click.favouriteCharacter)
									uiintro.add(addFavourite);
								}
								else{
									uiintro.add(ui.create.div('.placeholder.slim'));
								}
								var addskin=false;
								if(node.parentNode.classList.contains('menu-buttons')){
									addskin=!lib.config.show_charactercard;
								}
								else{
									addskin=lib.config.change_skin||lib.skin;
								}
								if(addskin&&(!simple||get.is.phoneLayout())){
									var num=1;
									var introadded=false;
									var nameskin=node.link;
									var nameskin2=nameskin;
									var gzbool=false;
									if(nameskin.indexOf('gz_shibing')==0){
										nameskin=nameskin.slice(3,11);
									}
									else if(nameskin.indexOf('gz_')==0){
										nameskin=nameskin.slice(3);
										gzbool=true;
									}
									var createButtons=function(num){
										if(!num) return;
										if(!introadded){
											introadded=true;
											uiintro.add('<div class="text center">更改皮肤</div>');
										}
										var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
										lib.setMousewheel(buttons);
										for(var i=0;i<=num;i++){
											var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
												if(this._link){
													lib.config.skin[nameskin]=this._link;
													node.style.backgroundImage=this.style.backgroundImage;
													game.saveConfig('skin',lib.config.skin);
												}
												else{
													delete lib.config.skin[nameskin];
													if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) node.setBackground(nameskin2,'character');
													else node.setBackground(nameskin,'character');
													game.saveConfig('skin',lib.config.skin);
												}
											});
											button._link=i;
											if(i){
												button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
											}
											else{
												if(gzbool&&lib.character[nameskin2][4].contains('gzskin')&&lib.config.mode_config.guozhan.guozhanSkin) button.setBackground(nameskin2,'character','noskin');
												else button.setBackground(nameskin,'character','noskin');
											}
										}
										uiintro.add(buttons);
									};
									var loadImage=function(){
										var img=new Image();
										img.onload=function(){
											num++;
											loadImage();
										}
										img.onerror=function(){
											num--;
											createButtons(num);
										}
										img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
									}
									if(lib.config.change_skin){
										loadImage();
									}
									else{
										setTimeout(function(){
											createButtons(lib.skin[nameskin]);
										});
									}
								}
							}
						}
						else if(node.classList.contains('equips')&&ui.arena.classList.contains('selecting')){
							(function(){
								uiintro.add('选择装备');
								uiintro.addSmall(Array.from(node.childNodes),true);
								uiintro.clickintro=true;
								ui.control.hide();
								uiintro._onclose=function(){
									ui.control.show();
								}
								var confirmbutton;
								for(var i=0;i<uiintro.buttons.length;i++){
									var button=uiintro.buttons[i];
									button.classList.add('pointerdiv');
									if(button.link.classList.contains('selected')){
										button.classList.add('selected');
									}
									button.listen(function(e){
										ui.click.card.call(this.link,'popequip');
										ui.click.window.call(ui.window,e);
										if(this.link.classList.contains('selected')){
											this.classList.add('selected');
										}
										else{
											this.classList.remove('selected');
										}
										if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
											confirmbutton.classList.remove('disabled');
										}
										else{
											confirmbutton.classList.add('disabled');
										}
									});
								}
								var buttoncontainer=uiintro.add(ui.create.div());
								buttoncontainer.style.display='block';
								confirmbutton=ui.create.div('.menubutton.large.pointerdiv','确定',function(){
									if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
										uiintro._clickintro();
										ui.click.ok(ui.confirm.firstChild);
									}
								},buttoncontainer);
								confirmbutton.style.position='relative';
								setTimeout(function(){
									if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
										confirmbutton.classList.remove('disabled');
									}
									else{
										confirmbutton.classList.add('disabled');
									}
								},300);
							}());
						}
						else if(node.classList.contains('identity')&&node.dataset.career){
							var career=node.dataset.career;
							uiintro.add(get.translation(career));
							uiintro.add('<div class="text center" style="padding-bottom:5px">'+lib.translate['_'+career+'_skill_info']+'</div>');
						}
						else if(node.classList.contains('skillbar')){
							if(node==ui.friendBar){
								uiintro.add('友方怒气值');
								uiintro.add('<div class="text center" style="padding-bottom:5px">'+_status.friendRage+'/100</div>');
							}
							else if(node==ui.enemyBar){
								uiintro.add('敌方怒气值');
								uiintro.add('<div class="text center" style="padding-bottom:5px">'+_status.enemyRage+'/100</div>');
							}
						}
						else if(node.parentNode==ui.historybar){
							if(node.dead){
								if(!node.source||node.source==node.player){
									uiintro.add('<div class="text center">'+get.translation(node.player)+'阵亡</div>');
									uiintro.addSmall([node.player]);
								}
								else{
									uiintro.add('<div class="text center">'+get.translation(node.player)+'被'+get.translation(node.source)+'杀害</div>');
									uiintro.addSmall([node.source]);
								}
							}
							if(node.skill){
								uiintro.add('<div class="text center">'+get.translation(node.skill,'skill')+'</div>');
								uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+get.translation(node.skill,'info')+'</div>');
							}
							if(node.targets&&get.itemtype(node.targets)=='players'){
								uiintro.add('<div class="text center">目标</div>');
								uiintro.addSmall(node.targets);
							}
							if(node.players&&node.players.length>1){
								uiintro.add('<div class="text center">使用者</div>');
								uiintro.addSmall(node.players);
							}
							if(node.cards&&node.cards.length){
								uiintro.add('<div class="text center">卡牌</div>');
								uiintro.addSmall(node.cards);
							}
							for(var i=0;i<node.added.length;i++){
								uiintro.add(node.added[i]);
							}
							if(node.added.length){
								uiintro.add(ui.create.div('.placeholder.slim'));
							}
							if(uiintro.content.firstChild){
								uiintro.content.firstChild.style.paddingTop='3px';
							}
						}
						if(lib.config.touchscreen){
							lib.setScroll(uiintro.contentContainer);
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
				const override=(destination,source)=>{
					for(const i in source){
						if(typeof destination[i]=="object"&&destination[i].constructor===Object){
							override(destination[i],source[i]);
						}
						else{
							destination[i]=source[i];
						}
					}
				}
				override(_status,_STATUS);
				override(lib,LIB);
				override(game,GAME);
				override(ui,UI);
				override(get,GET);
				if(!Array.isArray(lib.group)) lib.group=[];
				//Custom groups
				const GROUP=['sst_light','sst_dark','sst_spirit','sst_reality','sst_smash'];
				lib.group.addArray(GROUP);
				if(typeof lib.decade_extGroupImage!="object") lib.decade_extGroupImage={};
				GROUP.forEach(i=>lib.decade_extGroupImage[i]=lib.assetURL+"extension/大乱桌斗/image/decade_extGroupImage/name_"+i+".png");
				//Characters & cards
				lib.init.js(lib.assetURL+"extension/大乱桌斗/character/",["sst_standard","sst_extra"]);
				lib.init.js(lib.assetURL+"extension/大乱桌斗/card/","sst_standard");
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
							更新日志（2.1）\
						</summary>\
						<ol>\
							<li>\
								新增在线更新功能，自动在线检查扩展更新（感谢<i>诗笺</i>提供的在线更新代码）；\
							</li>\
							<li>\
								修复了诸多bug。\
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
			version:"2.1",
			changeLog:"<h2><img style=\"float: left; height: 1.5em; margin-right: 5px;\" src=\""+lib.assetURL+"extension/大乱桌斗/super_smash_tabletop.png\"><ruby>更新日志<rp>（</rp><rt>2.1</rt><rp>）</rp></ruby></h2>\
				<ol>\
					<li>\
						新增在线更新功能，自动在线检查扩展更新（感谢<i>诗笺</i>提供的在线更新代码）；\
					</li>\
					<li>\
						修复了诸多bug。\
					</li>\
				</ol>"
		},
		files:{
			character:[],
			card:[],
			skill:[]
		}
	}
});