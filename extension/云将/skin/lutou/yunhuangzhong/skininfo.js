'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunhuangzhong",
    "origin": {
        "skill": {
            "yunliegong": {
                "content": "箭阵开道，所向无敌。<br>穿杨射柳，百发百中。"
            },
            "yunposhi": {
                "content": "哪里逃？看箭！<br>看是你快，还是我的箭快。"
            },
            "die": {
                "content": "年老……气……衰矣……"
            }
        }
    },
    "skin": {
        "yunhuangzhong3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "落日金弓",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
            "yunliegong": {
                "content": "箭阵开道，所向无敌。<br>穿杨射柳，百发百中。"
            },
            "yunposhi": {
                "content": "哪里逃？看箭！<br>看是你快，还是我的箭快。"
            },
            "die": {
                "content": "年老……气……衰矣……"
            }
        }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});