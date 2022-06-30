/// <reference path="./typings/index.d.ts" />
"use strict";
game.import("libDescription", function (lib, game, ui, get, ai, _status) {
	if (!lib.description) lib.description = {};

	const description = {
        game: {
            "全能搜索_copy": {
                from: '全能搜索',
                description: '双击复制目标',
                return: 'undefined',
                args: {
                    target: {
                        exist: true,
                        type: '继承自HTMLElement的对象，或Text',
                        description: '要复制的目标',
                        index: '1'
                    }
                }
            },
            "全能搜索_highlight": {
                from: '全能搜索',
                description: '将js代码字符串经过hljs的函数编译成带有样式的HTML代码字符串',
                return: 'String',
                args: {
                    text: {
                        exist: true,
                        type: '字符串',
                        description: 'js代码字符串',
                        index: '1'
                    }
                }
            }
        },
        _status: {
            "全能搜索_Searcher": {
                from: '全能搜索',
                description: "搜索器的一个实例"
            }
        },
		ui: {
			Searcher: '全能搜索创建的搜索器类'
		}
    };

	for (const key in description) {
		if (!lib.description[key]) lib.description[key] = description[key];
		else {
			Object.assign(lib.description[key], description[key]);
		}
	}

    return {};
});