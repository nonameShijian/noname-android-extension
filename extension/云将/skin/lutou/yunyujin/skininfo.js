'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunyujin",
    "origin": {
        "skill": {
        "yunzhenjun": {
                    "content": "肃军整备，以待后令。<br>严军重纪，只为逢战则胜。"
                },
                "yunyizhong": {
                    "content": "列队成阵，依军令而行。<br>一部受敌，余部有不救者，斩之！"
                },
                "die": {
                    "content": "想以保全身……却误此身名……"
                }
        }
    },
    "skin": {
        "yunyujin2": {
            "level": "$extension/云将/biaoqian/ico_jingpin.png",
            "translation": "统御三军",
            "order": 2,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunzhenjun": {
                    "content": "肃军整备，以待后令。<br>严军重纪，只为逢战则胜。"
                },
                "yunyizhong": {
                    "content": "列队成阵，依军令而行。<br>一部受敌，余部有不救者，斩之！"
                },
                "die": {
                    "content": "想以保全身……却误此身名……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});