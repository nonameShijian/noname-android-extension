"use strict";
game.import("card",(lib,game,ui,get,ai,_status)=>{
	/**
	 * @type {importCardConfig}
	 */
	const SST_STANDARD={
		name:"sst_standard",
		connect:true,
		card:{
			//Exclusive
			sst_aegises:{
				fullskin:true,
				type:"equip",
				subtype:"equip1",
				distance:{attackFrom:-2},
				onEquip:()=>{
					player.markSkill("sst_aegises_skill");
				},
				onLose:()=>{
					player.unmarkSkill("sst_aegises_skill");
				},
				equipDelay:false,
				yingbian_prompt:"当你声明使用此牌时，你摸一张牌",
				yingbian_tags:["draw"],
				yingbian:event=>event.player.draw(),
				ai:{
					basic:{
						equipValue:4.5
					}
				},
				skills:["sst_aegises_skill"]
			},
			sst_spear_thrust:{
				nodelay:true,
				fullskin:true,
				type:"basic",
				enable:true,
				range:(card,player,target)=>player.inRange(target),
				selectTarget:1,
				filterTarget:lib.filter.notMe,
				yingbian_prompt:card=>{
					let str="";
					if(get.cardtag(card,"yingbian_damage")){
						str+="此牌的伤害值基数+1";
					}
					if(get.cardtag(card,"yingbian_hit")){
						if(str.length) str+="；";
						str+="此牌不可被响应";
					}
					if(get.cardtag(card,"yingbian_draw")){
						if(str.length) str+="；";
						str+="当你声明使用此牌时，你摸一张牌";
					}
					if(!str.length||get.cardtag(card,"yingbian_add")){
						if(str.length) str+="；";
						str+="当你使用此牌选择目标后，你可为此牌增加一个目标";
					}
					return str;
				},
				yingbian_tags:["damage","hit","draw","add"],
				yingbian:event=>{
					const card=event.card;
					let bool=false;
					if(get.cardtag(card,"yingbian_damage")){
						bool=true;
						if(typeof event.baseDamage!="number") event.baseDamage=1;
						event.baseDamage++;
						game.log(card,"的伤害值基数+1");
					}
					if(get.cardtag(card,"yingbian_hit")){
						bool=true;
						event.directHit.addArray(game.players);
						game.log(card,"不可被响应");
					}
					if(get.cardtag(card,"yingbian_draw")){
						bool=true;
						event.player.draw();
					}
					if(!bool||get.cardtag(card,"yingbian_add")) event.yingbian_addTarget=true;
				},
				content:()=>{
					"step 0"
					if(typeof event.baseDamage!="number") event.baseDamage=1;
					if(event.directHit){
						event._result={bool:false};
					}
					else{
						let str="刺枪：打出一张基本牌";
						if(target.countCards("sx")){
							str+="（或取消并改为决定是否将武将牌上一张牌置入弃牌堆）";
						}
						else{
							str+=`，否则${get.translation(player)}对你造成1点伤害`;
						}
						const next=target.chooseToRespond(str,card=>get.type(card)=="basic");
						next.set("ai",card=>{
							const evt=_status.event.getParent();
							if(get.damageEffect(evt.target,evt.player,_status.event.player)>=0) return 0;
							return get.order(card);
						});
						next.set("position","hes");
					}
					"step 1"
					if(result.bool==false){
						if(target.countCards("sx")){
							target.chooseCardButton(`刺枪：将武将牌上一张牌置入弃牌堆，否则${get.translation(player)}对你造成1点伤害`,target.getCards("sx")).set("ai",button=>11-get.useful(button.link));
						}
						else{
							target.damage(player);
							event.finish();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links&&result.links.length){
						target.loseToDiscardpile(result.links);
					}
					else{
						target.damage(player);
					}
				},
				ai:{
					basic:{
						useful:[5,3,1],
						value:[5,3,1]
					},
					order:3.05,
					result:{
						target:(player,target,card)=>{
							if((target.hasSha()||target.mayHaveShan())&&!player.hasSkillTag("directHit_ai",true,{
								target:target,
								card:card
							},true)) return -1.5/1.2;
							return -1.5;
						}
					},
					tag:{
						respond:1,
						respondSha:1,
						respondShan:1,
						respondTao:1,
						damage:1
					}
				}
			},
			sst_ink:{
				type:"equip",
				subtype:"equip2",
				fullborder:"simple",
				skills:["sst_ink_skill"],
				selectTarget:[-1,-2],
				yingbian_prompt:"当你声明使用此牌时，你摸一张牌",
				yingbian_tags:["draw"],
				yingbian:event=>event.player.draw(),
				ai:{
					order:9,
					equipValue:card=>{
						if(get.position(card)=="e") return -1;
						return 1;
					},
					value:(card,player)=>{
						if(player.getEquip(2)==card) return -2.5;
						return 2.5;
					},
					basic:{
						equipValue:5,
					},
					result:{
						keepAI:true,
						target:(player,target)=>{
							let val=0;
							const card=target.getEquip(2);
							if(card){
								val=get.value(card,target);
								if(val<0) return 0;
							}
							return -2.5-val;
						}
					}
				}
			}
		},
		skill:{
			sst_aegises_skill:{
				marktext:"☯",
				intro:{
					content:storage=>storage?"转换技，出牌阶段限一次，你可以与牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点雷电伤害。":"转换技，出牌阶段限一次，你可以与一名角色拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点火焰伤害。"
				},
				equipSkill:true,
				zhuanhuanji:true,
				inherit:"sst_xuanyi",
				filter:(event,player)=>{
					if(player.storage.sst_aegises_skill) return player.canComparePlayer();
					return game.hasPlayer(current=>player.canCompare(current));
				},
				filterTarget:(card,player,target)=>{
					if(player.storage.sst_aegises_skill) return false;
					return player.canCompare(target);
				},
				selectTarget:()=>{
					if(_status.event.player.storage.sst_aegises_skill) return 0;
					return 1;
				},
				delay:false,
				ai:{
					order:5,
					expose:0.2,
					damage:true,
					result:{
						player:(player,target)=>{
							if(!player.storage.sst_aegises_skill) return -get.attitude(player,target)/2;
							return 1;
						}
					}
				}
			},
			sst_ink_skill:{
				mod:{
					globalFrom:(from,to,distance)=>distance+1
				},
				forced:true,
				trigger:{player:"damageBegin1"},
				filter:event=>event.source&&(event.source.name=="sst_inkling"||event.source.name2=="sst_inkling"),
				content:()=>{
					trigger.num++;
				}
			}
		},
		translate:{
			//Tag
			sst_64_tag:"64",
			sst_melee_tag:"Melee",
			sst_brawl_tag:"Brawl",
			sst_4_tag:"For WiiU/3DS",
			sst_ultimate_tag:"Ultimate",
			sst_spirits_tag:"命魂",
			sst_players_tag:"玩家",
			sst_sp_tag:"SP",
			sst_light_tag:"光",
			sst_reality_tag:"现",
			sst_smash_tag:"斗",
			//Exclusive
			sst_spear_thrust:"刺枪",
			sst_spear_thrust_info:"出牌阶段，对你攻击范围内的一名角色使用。其须打出一张基本牌或将其武将牌上一张牌置入弃牌堆，否则你对其造成1点伤害。",
			sst_spear_thrust_append:`<span class="text" style="font-family: yuanli">吾乃噗噗噗大陆头巾瓦豆鲁迪也！</span>`,
			//Equip
			sst_aegises:"天之圣杯",
			sst_aegises_info:"转换技，出牌阶段限一次，你可以与①一名角色②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰②雷电伤害。",
			sst_aegises_append:`<span class="text" style="font-family: yuanli">所以到底算不算大家。</span>`,
			sst_ink:"墨水",
			sst_ink_info:"锁定技，你计算与其他角色的距离+1，【鱿鱼】对你造成的伤害+1。",
			sst_ink_append:`<span class="text" style="font-family: yuanli">禁止泼墨！</span>`,
			//Skill
			sst_aegises_skill:"天之圣杯",
			sst_aegises_skill_info:"转换技，出牌阶段限一次，你可以与①一名角色②牌堆顶的一张牌拼点，赢的一方获得没赢的一方拼点的牌，然后若你没有获得牌，你对一名角色造成1点①火焰②雷电伤害。",
			sst_ink_skill:"墨水",
			sst_ink_skill_info:"锁定技，你计算与其他角色的距离+1，【鱿鱼】对你造成的伤害+1。"
		},
		list:[]
	};
	for(const i in SST_STANDARD.card){
		SST_STANDARD.card[i].image=(`ext:大乱桌斗/image/card/${i}.png`);
	}
	return SST_STANDARD;
});