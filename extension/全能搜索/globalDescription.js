/// <reference path="./typings/index.d.ts" />
/// <reference path="../../typings/index.d.ts" />

"use strict";
game.import("libDescription", function (lib, game, ui, get, ai, _status) {
    /* 
        设置全局Symbol, 用于设置一个对象的描述
        window.qnssDescriptionSymbol = Symbol('description');

        设置全局Symbol,用于设置一个对象内，所有未设置描述的属性，添加一个默认的描述
        window.qnssKeySymbol = Symbol('key');

        设置全局的跳转搜索功能
        window.qnssSee = function() {
            _status.全能搜索_Searcher.tujianBegin(_status.全能搜索_Searcher.content, this.innerText, false);
        }

        点击a标签跳转
        <a class="qnssSee" onclick="qnssSee(this)">要搜索的内容</a>

        数据类型:
        string 字符串
        number 数字
        boolean 布尔值
		function 函数
        
    */
   
    lib.description = Object.assign(lib.description || {}, {
        player: {
            // 关于player这个对象的描述
            [qnssDescriptionSymbol]: '一个玩家的实例（此处是孙笨）',
            name: {
                // 指定player.name是字符串类型
                type: 'string',
                description: '玩家名称（英文id）'
            },
            hp: {
                type: 'number',
                description: '玩家的体力值',
            },
            maxHp: {
                type: 'number',
                description: '玩家的体力上限'
            },
            identity: {
                type: 'string',
                description:'玩家的身份'
            },
            group: {
                type: 'string',
                description: '玩家的势力'
            },
            sex: {
                type: 'string',
                description: '玩家的性别'
            },
            storage: {
                type: `{
                    [key: string]: any
                }`,
                [qnssDescriptionSymbol]: '玩家的储存对象（内容整局游戏存在）'
            },
            hasSex: {
                description: '判断player性别中是否包含指定性别',
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                args: {
                    sex: {
                        exist: true,
                        type: '字符串',
                        description: '指定性别（"male"或"female"字符串）',
                        index: '1'
                    }
                }
            },
            sameSexAs: {
                // 对于这个方法的描述
                description: '判断角色的性别是否和目标角色相同',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            differentSexFrom: {
                // 对于这个方法的描述
                description: '判断角色的性别是否和目标角色不同',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            addSkillBlocker: {
                // 对于这个方法的描述
                description: '添加技能屏蔽器。\n' +
                    '\t\t对一名角色添加技能屏蔽器，无效化其符合筛选条件的技能，直到技能屏蔽器被移除。<br>参考：game.js里的<a class="qnssSee" onclick="qnssSee(this)">baiban</a>技能和<a class="qnssSee" onclick="qnssSee(this)">fengyin</a>技能。或者贾诩的<a class="qnssSee" onclick="qnssSee(this)">rewansha</a>技能',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    skill: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（技能代码名）',
                        // 参数作用
                        description: '指定技能添加技能屏蔽器',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            removeSkillBlocker: {
                // 对于这个方法的描述
                description: '移除技能屏蔽器',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    skill: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（技能代码名）',
                        // 参数作用
                        description: '指定技能移除技能屏蔽器',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            loseToSpecial: {
                // 对于这个方法的描述
                description: '使角色失去牌，并将牌移动到特殊区域，也就是所谓移出游戏。（默认移动到s区域 参考星甘宁）',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'loseAsync\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    cards: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '一个卡牌数组',
                        // 参数作用
                        description: '指定要移动的卡牌数组',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    tag: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（想让这个牌上显示啥字就填什么，类似addGaintag()）',
                        // 参数作用
                        description: '想让这个牌上显示啥字就填什么，类似addGaintag()',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    target: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '将牌移动到指定的目标区域',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                }
            },
            addGaintag: {
                // 对于这个方法的描述
                description: '给玩家的卡牌添加文字标记,参考:董白',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    cards: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '一个卡牌数组',
                        // 参数作用
                        description: '指定要添加标记的卡牌数组',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    tag: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（想让这个牌上显示啥字就填什么，类似addGaintag()）',
                        // 参数作用
                        description: '想让这个牌上显示啥字就填什么，类似addGaintag()',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            removeGaintag: {
                // 对于这个方法的描述
                description: '给玩家的卡牌清除文字标记',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    cards: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个卡牌数组',
                        // 参数作用
                        description: '指定要清除标记的卡牌数组',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    tag: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（填技能id或文字）',
                        // 参数作用
                        description: '指定清除卡牌文字标记',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            canSave: {
                // 对于这个方法的描述
                description: '用于判断一名角色能否对另一名濒死角色提供帮助。（另一名濒死角色=要填的目标角色）',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            $throwEmotion: {
                // 对于这个方法的描述
                description: '发表情函数，是throwEmotion特效实现',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定表情代码名（表情id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },

                }
            },
            throwEmotion: {
                // 对于这个方法的描述
                description: '发表情函数，例如player.throwEmotion(trigger.source,\'flower\');',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定表情代码名（表情id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },

                }
            },
            showCharacter: {
                // 对于这个方法的描述
                description: '一般国战使用，将暗置的武将明置，底层调用了$showCharacter函数',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'showCharacter\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    num: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '指定要明置的武将（0是主将，1是副将，2是全部）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    log: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否打印记录',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            $showCharacter: {
                // 对于这个方法的描述
                description: '一般国战使用，将暗置的武将明置，是showCharacter的实现效果',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    num: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '指定要明置的武将（0是主将，1是副将，2是全部）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    log: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否打印记录',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            chooseToPlayBeatmap: {
                // 对于这个方法的描述
                description: '孙寒华演奏音乐的函数',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToPlayBeatmap\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    beatmap: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'object类型（对象）',
                        // 参数作用
                        description: '指定要演奏的音乐对象，格式参考lib.skill.chongxu.beatmaps.randomGet()',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            chooseToGuanxing: {
                // 对于这个方法的描述
                description: '令一名角色观看牌堆顶的X张牌并以任意顺序置于牌堆顶或牌堆顶。',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToGuanxing\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    num: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '指定num张牌并以任意顺序置于牌堆顶或牌堆顶。',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            tryJudgeAnimate: {
                // 对于这个方法的描述
                description: '判定动画  用来弹出判定失败和判定生效的',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    bool: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '指定判定成功的动画还是失败的动画',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            //unfinished（未完成）
            trySkillAnimate: {
                // 对于这个方法的描述
                description: '技能动画  弹出使用技能的动画',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定技能代码名（技能id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    popname: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定技能中文名',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    //unfinished
                    checkShow: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '(不清楚)',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                }
            },
            tryCardAnimate: {
                // 对于这个方法的描述
                description: '卡牌动画  弹出使用卡牌的动画',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    card: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一张卡牌对象',
                        // 参数作用
                        description: '指定要动画的卡牌',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌代码名（卡牌id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    }, nature: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌的属性',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                    popname: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌中文名',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '4'
                    },
                }
            },
            hasUsableCard: {
                // 对于这个方法的描述
                description: '玩家是否能够在当前的情况下使用某张牌,这个函数用于判断一名角色能否使用XX牌\n' +
                    '\t\t如果该角色手牌中有XX牌 或者能够通过技能使用XX牌 则返回值为true 否则为false\n' +
                    '\t\t例：判断能否使用【草船借箭】的代码\n' +
                    '\t\t...\n' +
                    '\t\treturn player.hasUsableCard(\'caochuan\');\n' +
                    '\t\t...\n' +
                    '\t\t直接填写要判断的卡牌名称即可',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌代码名（卡牌id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    }
                }
            },
            inRange: {
                // 对于这个方法的描述
                description: '目标是否在自己攻击范围，判断to是否在player的攻击范围内 player.inRange(to)',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    to: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            inRangeOf: {
                // 对于这个方法的描述
                description: '自己是否在来源的攻击范围，player.inRangeOf(source) 判断player是否在source的攻击范围内',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    source: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定来源对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            getDamagedHp: {
                // 对于这个方法的描述
                description: '返回玩家已损失的体力值数',
                // 返回值
                return: {
                    type: 'number',
                    description: '玩家已损失的体力值数'
                },
                // 方法的参数列表
                args: {}
            },
            changeGroup: {
                // 对于这个方法的描述
                description: '改变武将势力 ， 用于切换玩家的国籍\n' +
                    '\t\t例：player.changeGroup(\'wei\') 即为将玩家的势力切换为魏国\n' +
                    '\t\t（在国战模式下不影响势力，胜利条件，野心家判断等）',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    group: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定势力代码名（势力id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    log: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否打印记录',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    broadcast: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '指定是否使用game.broadcast()函数',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                }
            },
            chooseToDuiben: {
                // 对于这个方法的描述
                description: '对一名其他角色发起对笨(划掉)对策，\n' +
                    '\t\t为审配专门加入的函数 用法和石头剪刀布类似 只不过没有平局的结果，\n' +
                    '\t\t顺便 发起人在对策过程中是选择防御策略的角色 在用的时候不要搞错了',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToDuiben\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            chooseToPSS: {
                // 对于这个方法的描述
                description: '石头剪刀布的函数 用法和拼点类似\n' +
                    '\t\t例:player.chooseToPSS(target);\n' +
                    '\t\t如果发起玩家胜利 那么result.bool值为true 失败则为false 如果平局 那么result.tie值为true',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToPSS\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            chooseToEnable: {
                // 对于这个方法的描述
                description: '玩家选择恢复一个装备栏',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToEnable\'的事件对象'
                },
                // 方法的参数列表
                args: {}
            },
            chooseToDisable: {
                // 对于这个方法的描述
                description: '玩家选择废除一个装备栏',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'chooseToDisable\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    horse: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否将防御马和进攻马合并为一个选项',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            countDisabled: {
                // 对于这个方法的描述
                description: '返回玩家已废除的装备栏数量',
                // 返回值
                return: {
                    type: 'number',
                    description: '玩家已废除的装备栏数量'
                },
                // 方法的参数列表
                args: {}
            },
            isPhaseUsing: {
                // 对于这个方法的描述
                description: '判断玩家是否处于出牌阶段，参数为true代表不是自己的出牌阶段也行。',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '玩家是否处于出牌阶段'
                },
                // 方法的参数列表
                args: {
                    notmeisok: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '判断玩家是否处于出牌阶段，参数为true代表不是自己的出牌阶段也行。',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            swapEquip: {
                // 对于这个方法的描述
                description: '玩家和目标交换装备区的牌。',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'swapEquip\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            canCompare: {
                // 对于这个方法的描述
                description: '玩家能否对目标发起拼点',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            disableEquip: {
                // 对于这个方法的描述
                description: '废除自己的某个装备栏',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'disableEquip\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    pos: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '1:\'武器\',2:\'防具\',3:\'防御马\',4:\'攻击马\',5：‘宝物’，6：“所有马”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            $disableEquip: {
                // 对于这个方法的描述
                description: '废除自己的某个装备栏的效果',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    skill: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌subtype类型代码名（卡牌id） 如：equip4 equip3',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    }
                }
            },
            enableEquip: {
                // 对于这个方法的描述
                description: '恢复自己的某个装备栏',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'enableEquip\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    pos: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '1:\'武器\',2:\'防具\',3:\'防御马\',4:\'攻击马\',5：‘宝物’，6：“所有马”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            $enableEquip: {
                // 对于这个方法的描述
                description: '恢复自己的某个装备栏的效果',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    skill: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定卡牌subtype类型代码名（卡牌id） 如：equip4 equip3',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    }
                }
            },
            isDisabled: {
                // 对于这个方法的描述
                description: '自己装备区某个栏目是否被废除',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    arg: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '1:\'武器\',2:\'防具\',3:\'防御马\',4:\'攻击马\',5：‘宝物’，6：“所有马”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            isEmpty: {
                // 对于这个方法的描述
                description: '判断玩家的某个装备栏是不是“空栏”（即既没有被废除 栏内也没有装备牌） 请使用player.isEmpty()函数\n' +
                    '例：一个装着武器的孙笨 player.isEmpty(1)函数得到的结果为false\n' +
                    '一个废除了防具栏的陆抗 player.isEmpty(2)得到的结果为false\n' +
                    '一个宝物栏里没有宝物牌 也没有废除宝物栏的SP黄月英 player.isEmpty(5)得到的结果为true\n' +
                    '括号里面也可以填文字 用法和之前类似',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    num: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number类型（数字）',
                        // 参数作用
                        description: '1:\'武器\',2:\'防具\',3:\'防御马\',4:\'攻击马\',5：‘宝物’，6：“所有马”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            $disableJudge: {
                // 对于这个方法的描述
                description: '废除玩家的判定区动画',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {}
            },
            $enableJudge: {
                // 对于这个方法的描述
                description: '恢复玩家的判定区动画',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {}
            },
            disableJudge: {
                // 对于这个方法的描述
                description: '废除玩家的判定区',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'disableJudge\'的事件对象'
                },
                // 方法的参数列表
                args: {}
            },
            enableJudge: {
                // 对于这个方法的描述
                description: '恢复玩家的判定区',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'enableJudge\'的事件对象'
                },
                // 方法的参数列表
                args: {}
            },
            init: {
                // 对于这个方法的描述
                description: '将玩家的武将牌替换为character，character为武将名id',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    character: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    character2: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定二号武将代码名（武将id，一般国战使用）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    skill: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '指定是否添加替换武将的技能',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },

                }
            },
            initOL: {
                // 对于这个方法的描述
                description: '初始化联机头像和联机名称用的函数，（联机用的）',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '初始化武将名子，织填中文名，不填武将id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    character: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            uninitOL: {
                // 对于这个方法的描述
                description: '清除联机头像和联机名称，（联机用的）',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
            },
            //unfinished（未完成）
            initRoom: {
                // 对于这个方法的描述
                description: '初始化房间',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    info: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string',
                        // 参数作用
                        description: '不清楚',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    info2: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'Array',
                        // 参数作用
                        description: '不清楚',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            reinit: {
                // 对于这个方法的描述
                description: '将from（参数1）武将替换成to（参数2）武将,跟<a class="qnssSee" onclick="qnssSee(this)">init()</a>函数相似',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    from: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）武将的名必须是当前武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    to: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id），写想要替换成什么的武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    maxHp: {
                        exist: false,
                        type: '一个正整数',
                        description: '指定初始体力上限',
                        index: '3'
                    },
                    online: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '指定指定是否联机',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '4'
                    },
                }
            },
            uninit: {
                // 对于这个方法的描述
                description: '清除头像.名称，技能，血量（恢复到游戏开始选将的状态）',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
            },
            getLeft: {
                // 对于这个方法的描述
                description: '返回player相对于 offsetParent 节点左边界的偏移像素值(px)',
                // 返回值
                return: {
                    type: 'number',
                    description: 'player相对于 offsetParent 节点左边界的偏移像素值(px)'
                },
            },
            getTop: {
                // 对于这个方法的描述
                description: '返回player相对于 offsetParent 节点顶部边界的偏移像素值(px)',
                // 返回值
                return: {
                    type: 'number',
                    description: 'player相对于 offsetParent 节点顶部边界的偏移像素值(px)'
                },
            },
            smoothAvatar: {
                // 对于这个方法的描述
                description: '平整化身图片?在武将换图片的函数出现（表面覆盖图片又消失 的效果）',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    vice: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '填true表示用二号（国战中的副将div）武将的div，false表示一号位，不是国战用false',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    video: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否添加到录制的视频信息里',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            changeSeat: {
                // 对于这个方法的描述
                description: '改变座次',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    position: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'number',
                        // 参数作用
                        description: '填0-7数字，指定要换的座次',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    video: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '指定是否添加到录制的视频信息里，会执行game.addVideo(\'changeSeat\', player, position);',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                }
            },
            send: {
                // 对于这个方法的描述
                description: '发送联机数据,多用于联机',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    function: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '函数',
                        // 参数作用
                        description: '指定函数（不清楚）',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },

                }
            },
            getId: {
                // 对于这个方法的描述
                description: '为player设置一个id，然后函数返回player',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },

            },
            emotion: {
                // 对于这个方法的描述
                description: "发表情函数，运行图片源码路径为 ##assetURL##image/emotion/\" + pack + \"/\" + id + \".gif",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    pack: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定表情包文件名',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    id: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: 'gif的名字',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },

                }
            },
            chat: {
                // 对于这个方法的描述
                description: "在人物头像上显示对话框，发送给局内所有玩家。",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    str: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定要发送的聊天内容',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },


                }
            },
            say: {
                // 对于这个方法的描述
                description: "在人物头像上显示对话框，发送给局内所有玩家，并有声音",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    str: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定要发送的聊天内容',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },


                }
            },
            showGiveup: {
                // 对于这个方法的描述
                description: '显示投降按钮。',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },

            },
            applySkills: {
                // 对于这个方法的描述
                description: '发送联机的技能数据。',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                args: {
                    skills: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '一个技能数组',
                        // 参数作用
                        description: '指定技能数组',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            getState: {
                // 对于这个方法的描述
                description: '获取玩家数据',
                // 返回值
                return: {
                    type: `{
                        [key: string]: any
                    }`,
                    description: '玩家数据对象'
                },

            },
            setNickname: {
                // 对于这个方法的描述
                description: "设置玩家昵称，联机专属函数",
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    str: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定要设置的昵称',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },


                }
            },
            setAvatar: {
                // 对于这个方法的描述
                description: "切换武将图片",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）武将的名必须是当前武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    name2: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id），写想要替换成什么的武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    video: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否添加到录制的视频信息里',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                    fakeme: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '填false将不设定 ui.fakeme.style.backgroundImage = node.style.backgroundImage;',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '4'
                    },


                }
            },
            setAvatarQueue: {
                // 对于这个方法的描述
                description: "指定主/副将的图片按一个数组挨个变化",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）武将的名必须是当前武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    list: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'array数组',
                        // 参数作用
                        description: '指定数组挨个变化图片',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },


                }
            },
            flashAvatar: {
                // 对于这个方法的描述
                description: "skill所拥有的武将图 切换 name所拥有的武将图 再切换回原技能武将的效果（简单来说就是切换武将图的特效）",
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    skill: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串（技能代码名）',
                        // 参数作用
                        description: '填发动的技能代码名（技能id）eg：player.flashAvatar(\'rehuashen\',event.card);',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },

                    name: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定武将代码名（武将id）武将的名必须是当前武将名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },



                }
            },
            update: {
                // 对于这个方法的描述
                description: '刷新玩家的数据。',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
            },
            removeMark: {
                // 对于这个方法的描述
                description: '移除标记',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    i: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '标记名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    num: {
                        exist: false,
                        type: '一个正整数',
                        description: '指定要删除标记的数量',
                        index: '2'
                    },
                    log: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否打印记录',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },





                }
            },
            addMark: {
                // 对于这个方法的描述
                description: '添加标记',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    i: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '标记名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    num: {
                        exist: false,
                        type: '一个正整数',
                        description: '指定要添加标记的数量',
                        index: '2'
                    },
                    log: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否打印记录',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },





                }
            },
            countMark: {
                // 对于这个方法的描述
                description: '计算玩家指定标记的数量',
                // 返回值
                return: {
                    type: 'number',
                    description: '玩家指定标记的数量'
                },
                // 方法的参数列表
                args: {
                    i: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '标记名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            hasMark: {
                // 对于这个方法的描述
                description: '判断自己是否有标记',
                // 返回值
                return: {
                    type: 'boolean',
                    description: '一个boolean(布尔)值（true or false）'
                },
                // 方法的参数列表
                args: {
                    i: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '标记名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
            //unfinished
            updateMark: {
                // 对于这个方法的描述
                description: '更新标记数',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象'
                },
                // 方法的参数列表
                args: {
                    i: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '标记名id',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    storage: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: 'boolean(true or false)',
                        // 参数作用
                        description: '是否刷新技能标记  填true 将执行this.syncStorage(i);',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                }
            },
            num: {
                // 对于这个方法的描述
                description: '老版本获取玩家指定区域牌的数量，现在不用了',
                // 返回值
                return: 'number',
                return: {
                    type: 'number',
                    description: '玩家指定区域牌的数量'
                },
                // 方法的参数列表
                args: {
                    arg1: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '填卡牌位置eg: "h"或“he”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    arg2: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '字符串或对象或bool',
                        // 参数作用
                        description: '一般填字符串或对象eg: "sha" 或 {name:"sha"}，如果想用arg3，arg2的参数必须填bool',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },
                    arg3: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '字符串或对象或bool',
                        // 参数作用
                        description: '如果用到arg3，arg2必须填bool值,一般填字符串或对象eg: "sha" 或 {name:"sha"}',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '3'
                    },
                }
            },
            line: {
                // 对于这个方法的描述
                description: '向目标画指示线',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    config: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定指示线的颜色eg:"red"或“green”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },

                }
            },
            line2: {
                // 对于这个方法的描述
                description: '向目标画指示线 和line()函数很像',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
                    target: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '目标对象',
                        // 参数作用
                        description: '指定目标对象',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                    config: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: 'string字符串',
                        // 参数作用
                        description: '指定指示线的颜色eg:"red"或“green”',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '2'
                    },

                }
            },
            getNext: {
                // 对于这个方法的描述
                description: '获取玩家的下家。（玩家右边一位的角色）',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象，玩家的下家'
                },
            },
            getPrevious: {
                // 对于这个方法的描述
                description: '获取玩家的上家。（玩家左边一位的角色）',
                // 返回值
                return: {
                    type: 'Player',
                    description: 'player对象，玩家的上家'
                },
            },


            draw: {
                // 对于这个方法的描述
                description: '玩家摸牌方法',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'draw\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    // 参数名
                    source: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个玩家实例',
                        // 参数作用
                        description: '指定摸牌来源',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    num: {
                        exist: false,
                        type: '一个正整数',
                        description: '指定摸牌数量',
                        index: 'allRight'
                    },
                    animate: {
                        exist: false,
                        type: '一个布尔值（true或false）',
                        description: '指定摸牌动画（不太清楚）',
                        index: 'allRight'
                    },
                    nodelay: {
                        exist: false,
                        type: '字符串"nodelay"',
                        description: '摸牌无延迟（不太清楚）',
                        index: 'allRight'
                    },
                    visible: {
                        exist: false,
                        type: '一个布尔值（true或false）',
                        description: '此次摸的牌是否对其他人可见',
                        index: 'allRight'
                    },
                    bottom: {
                        exist: false,
                        type: '字符串"bottom"',
                        description: '此次摸牌是否从牌堆底摸牌',
                        index: 'allRight'
                    },
                    drawDeck: {
                        exist: false,
                        type: '一个object对象，对象里需要有drawDeck属性',
                        description: '不太清楚',
                        index: 'allRight'
                    }
                }
            },
            damage: {
                // 对于这个方法的描述
                description: '玩家受伤方法',
                // 返回值
                return: {
                    type: 'GameEvent',
                    description: '一个名为\'damage\'的事件对象'
                },
                // 方法的参数列表
                args: {
                    cards: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个卡牌数组',
                        // 参数作用
                        description: '指定造成伤害的卡牌数组',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    card: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一张卡牌',
                        // 参数作用
                        description: '指定造成伤害的卡牌',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    number: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个数字',
                        // 参数作用
                        description: '指定造成伤害的数值',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    player: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一名角色',
                        // 参数作用
                        description: '指定造成伤害的角色',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    obj: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个对象, 里面必须有一个name属性',
                        // 参数作用
                        description: '指定造成伤害的虚拟卡牌(不太清楚)',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    nocard: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个字符串"nocard"',
                        // 参数作用
                        description: '指定造成伤害这个事件没有卡牌参与',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    nosource: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个字符串"nosource"',
                        // 参数作用
                        description: '指定造成伤害这个事件没有伤害来源',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    notrigger: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个字符串"notrigger"',
                        // 参数作用
                        description: '指定造成伤害这个事件没有伤害来源',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                    nature: {
                        // 此参数是不是必须的
                        exist: false,
                        // 参数类型
                        type: '一个字符串，表示造成伤害的属性，且不为"stab"',
                        // 参数作用
                        description: '指定造成伤害这个事件的伤害属性',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: 'allRight'
                    },
                },
            },
        },
        card: {
            // 关于card这个对象的描述
            [qnssDescriptionSymbol]: '一个卡牌的实例（此处是一张杀）',
            name: {
                type: 'string',
                description: '卡牌的名称(英文id)'
            },
            color: {
                type: 'string',
                description: "卡牌的颜色"
            },
            suit: {
                type: 'string',
                description: "卡牌的花色"
            },
            number: {
                type: 'string',
                description: "卡牌的点数"
            },
            type: {
                type: 'string',
                description: "卡牌的类型"
            },
            addGaintag: {
                // 对于这个方法的描述
                description: '给卡牌添加文字标记,参考:董白',
                // 返回值
                return: {
                    type: 'void',
                    description: '函数无返回值'
                },
                // 方法的参数列表
                args: {
					gaintag: {
                        // 此参数是不是必须的
                        exist: true,
                        // 参数类型
                        type: '字符串',
                        // 参数作用
                        description: '想让这个牌上显示啥字就填什么',
                        // 参数的顺序，allRight指任一顺序皆可
                        index: '1'
                    },
                }
            },
        },
        lib: {
            // 关于lib这个对象的描述
            [qnssDescriptionSymbol]: '关于lib这个对象的描述',

            character: {
                [qnssDescriptionSymbol]: '关于lib.character这个对象的描述',
				// 为lib.character对象的所有属性，添加一个默认的描述，例如lib.character.sunce， lib.character.re_sunben
                [qnssKeySymbol](data) {
					return `武将${lib.translate[data.slice(14)]}的信息`
				},
            },

            element: {
                player: {
                    // 直接用字符串写也行，下面的函数形式也行，函数的参数是对象内的属性名
                    //[qnssKeySymbol]: '这些函数最终随着角色的创建而赋值到角色身上',
                    [qnssKeySymbol](data) {
                        // data.slice(12)的意思是， lib.element.player取player
                        return `这些函数最终随着角色的创建而赋值到角色身上<br>要查看函数的相关信息请跳转查看<a class="qnssSee" onclick="qnssSee(this)">${data.slice(12)}</a>`;
                    }
                }
            },
        },
        game: {
            // 关于game这个对象的描述
            [qnssDescriptionSymbol]: '关于game这个对象的描述',

            players: {
                type: 'Player[]',
                description: '在场上的玩家数组'
            },
            dead: {
                type: 'Player[]',
                description: '已经阵亡的玩家数组'
            },
        },
        _status: {
            // 关于_status这个对象的描述
            [qnssDescriptionSymbol]: '关于_status这个对象的描述',
            event: {
                name: {
                    type: 'string',
                    description: '当前事件的名称'
                },
                step: {
                    type: 'number',
                    description: '当前事件执行到的步骤数'
                },
                finished: {
                    type: 'boolean',
                    description: '当前事件是否已结束'
                },
                parent: {
                    type: 'GameEvent',
                    description: '当前事件的上一个事件'
                },

                changeToZero: {
                    // 对于这个方法的描述
                    description: '摸牌阶段，将摸牌数改成0，一般用在trigger: {player: "phaseDrawBegin"},相关时机',
                    // 返回值
                    return: {
                        type: 'void',
                        description: '函数无返回值'
                    },
                },
                finish: {
                    // 对于这个方法的描述
                    description: '结束步骤，有了event.finish();将不执行下一个“step X”',
                    // 返回值
                    return: {
                        type: 'void',
                        description: '函数无返回值'
                    },

                },
                cancel: {
                    // 对于这个方法的描述
                    description: '取消当前事件',
                    // 返回值
                    return: {
                        type: 'void',
                        description: '函数无返回值'
                    },
                    // 方法的参数列表
                    args: {
                        arg1: {
                            // 此参数是不是必须的
                            exist: false,
                            // 参数类型
                            type: 'string字符串',
                            // 参数作用
                            description: '调用event.untrigger，此参数为untrigger的第一个参数',
                            // 参数的顺序，allRight指任一顺序皆可
                            index: '1'
                        },
                        arg2: {
                            // 此参数是不是必须的
                            exist: false,
                            // 参数类型
                            type: 'Player',
                            // 参数作用
                            description: '调用event.untrigger，此参数为untrigger的第二个参数',
                            // 参数的顺序，allRight指任一顺序皆可
                            index: '2'
                        },
                        notrigger: {
                            // 此参数是不是必须的
                            exist: false,
                            // 参数类型
                            type: '字符串\'notrigger\'',
                            // 参数作用
                            description: '事件取消时不额外创建取消此事件的事件（即不触发技能）',
                            // 参数的顺序，allRight指任一顺序皆可
                            index: '3'
                        },
                    }
                },
                goto: {
                    // 对于这个方法的描述
                    description: '跳步，当前"step a"跳到指定的"step b"',
                    // 返回值
                    return: {
                        type: 'void',
                        description: '函数无返回值'
                    },
                    // 方法的参数列表
                    args: {
                        step: {
                            // 此参数是不是必须的
                            exist: true,
                            // 参数类型
                            type: 'number类型（数字）',
                            // 参数作用
                            description: '指定要跳转的step X',
                            // 参数的顺序，allRight指任一顺序皆可
                            index: '1'
                        },
                    }
                },
                redo: {
                    // 对于这个方法的描述
                    description: '重复执行当前步骤，当前"step X"后继续当前"step X"',
                    // 返回值
                    return: {
                        type: 'void',
                        description: '函数无返回值'
                    },
                },
                setHiddenSkill: {
                    description: '',
                    return: {
                        type: 'GameEvent',
                        description: '返回当前事件对象'
                    },
                },
                isMine: {
                    description: '当前事件是否处于玩家操控下（不处于托管，混乱状态，且不被神貂蝉夺取控制权）',
                    return: {
                        type: 'boolean',
                        description: '函数无返回值'
                    },
                }
            },
        },
        ui: {
            // 关于ui这个对象的描述
            [qnssDescriptionSymbol]: '关于ui这个对象的描述',
            fakeme: {
                from: 'mode/boss.js',
                type: 'HTMLDivElement',
                description: '是挑战模式下你正在操控的角色（你为boss时不显示）',

                current: {
                    type: 'string',
                    description: '正在操控的角色的名字（英文id）'
                }
            }
        },
        get: {

        },
        ai: {

        }
    });

    return {};
});