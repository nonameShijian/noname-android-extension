'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yundianwei",
    "origin": {
        "skill": {
        "yunhuwei": {
                    "content": "休想靠近主公一步！<br>勇字当头，义字当先！"
                },
                "yunelai": {
                    "content": "威烁万军辟,戟出神鬼惊! <br>口出狂言，汝命已结！"
                },
                "die": {
                    "content": "九幽黄泉……典韦来也！"
                }
        }
    },
    "skin": {
        "yundianwei3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "林涧擒虎",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunhuwei": {
                    "content": "休想靠近主公一步！<br>勇字当头，义字当先！"
                },
                "yunelai": {
                    "content": "威烁万军辟,戟出神鬼惊! <br>口出狂言，汝命已结！"
                },
                "die": {
                    "content": "九幽黄泉……典韦来也！"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});