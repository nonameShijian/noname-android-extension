'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunxuhuang",
    "origin": {
        "skill": {
        "yunchangqu": {
                    "content": "为将者，岂能贪生怕死？<br>敌现混乱之机，我军可长驱直入！"
                },
                "yunpoqian": {
                    "content": "吾等可用釜底抽薪之计也。<br>常读兵法，终有良策也。"
                },
                "die": {
                    "content": "有负……明主之托……"
                }
        }
    },
    "skin": {
        "yunxuhuang4": {
            "level": "$extension/云将/biaoqian/ico_shishi.png",
            "translation": "长驱破堑",
            "order": 4,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "info": "拿下关羽首级者赏金千两！",
            "skill": {
                "yunchangqu": {
                    "content": "为将者，岂能贪生怕死？<br>敌现混乱之机，我军可长驱直入！"
                },
                "yunpoqian": {
                    "content": "吾等可用釜底抽薪之计也。<br>常读兵法，终有良策也。"
                },
                "die": {
                    "content": "有负……明主之托……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});