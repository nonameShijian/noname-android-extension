'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yuntaishici",
    "origin": {
        "skill": {
        "yuntianyi": {
                    "content": "无道之人，我当替天罚之<br>天行有常，天义昭昭！"
                },
                "yunaozhan": {
                    "content": "与君酣战，快哉！快哉！<br>伯符，且与我一战!"
                },
                "die": {
                    "content": "何须……马革裹尸……"
                }
        }
    },
    "skin": {
        "yuntaishici4": {
            "level": "$extension/云将/biaoqian/ico_shishi.png",
            "translation": "信义笃烈",
            "order": 4,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yuntianyi": {
                    "content": "无道之人，我当替天罚之<br>天行有常，天义昭昭！"
                },
                "yunaozhan": {
                    "content": "与君酣战，快哉！快哉！<br>伯符，且与我一战!"
                },
                "die": {
                    "content": "何须……马革裹尸……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});