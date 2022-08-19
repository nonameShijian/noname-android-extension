'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunhuaman",
    "origin": {
        "skill": {
        "yunmansi": {
                    "content": "后嗣娇女，也要振兴蛮族。 <br>嗣袭母志，不敢辜负。"
                },
                "yunzhanyuan": {
                    "content": "战火飞，花月缘。 <br>缘由战起，由浅至深。"
                },
                "die": {
                    "content": "南蛮的歌谣……我还想再听一次……"
                }
        }
    },
    "skin": {
        "yunhuaman4": {
            "level": "$extension/云将/biaoqian/ico_shishi_dt.png",
            "translation": "南方艳色",
            "order": 4,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmansi": {
                    "content": "后嗣娇女，也要振兴蛮族。 <br>嗣袭母志，不敢辜负。"
                },
                "yunzhanyuan": {
                    "content": "战火飞，花月缘。 <br>缘由战起，由浅至深。"
                },
                "die": {
                    "content": "南蛮的歌谣……我还想再听一次……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});