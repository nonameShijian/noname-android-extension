'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunliuxie",
    "origin": {
        "skill": {
        "yunxuezhao": {
                    "content": "见诏，如见朕！。<br>汝等奉诏入宫，助朕铲除逆臣。"
                },
        "yuntianming": {
                    "content": "大汉天命之传承，皆在吾身。<br>朕乃天子，定得天助！"
                },
         "yunhanzuo": {
                    "content": "炎汉的国运，请再帮我一把。<br>这天下，哪能轻易换主！"
                },
                "die": {
                    "content": "愧对……列位先帝……"
                }
        }
    },
    "skin": {
        "yunliuxie3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "末代龙裔",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunxuezhao": {
                    "content": "见诏，如见朕！。<br>汝等奉诏入宫，助朕铲除逆臣。"
                },
        "yuntianming": {
                    "content": "大汉天命之传承，皆在吾身。<br>朕乃天子，定得天助！"
                },
         "yunhanzuo": {
                    "content": "炎汉的国运，请再帮我一把。<br>这天下，哪能轻易换主！"
                },
                "die": {
                    "content": "愧对……列为先帝……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});