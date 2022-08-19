'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yundongzuo",
    "origin": {
        "skill": {
        "yunbaonve": {
                    "content": "大汉天下，唯我独尊！<br>那个敢反我？"
                },
                "yunchongni": {
                    "content": "朝纲王法，于我无效。<br>大汉权责，由我掌控。"
                },
                "die": {
                    "content": "若无老夫，这天下……岂不是要寂寞许多？"
                }
        }
    },
    "skin": {
        "yundongzuo1": {
            "level": "$extension/云将/biaoqian/ico_xianding.png",
            "translation": "秽乱朝纲",
            "order": 1,
            "levelStyle": {
                "width": "60px",
                "height": "22.5px",
                "bottom": "calc(4.00%)",
                "left": "calc(57.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunbaonve": {
                    "content": "大汉天下，唯我独尊！<br>那个敢反我？"
                },
                "yunchongni": {
                    "content": "朝纲王法，于我无效。<br>大汉权责，由我掌控。"
                },
                "die": {
                    "content": "若无老夫，这天下……岂不是要寂寞许多？"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});