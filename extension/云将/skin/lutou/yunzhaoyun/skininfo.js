'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunzhaoyun",
    "origin": {
        "skill": {}
    },
    "skin": {
        "yunzhaoyun2": {
            "level": "$extension/云将/biaoqian/ico_jingpin.png",
            "translation": "斩将夺旗",
            "order": 2,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "info": "吾乃常山赵子龙是也！",
            "skill": {}
        },
        "yunzhaoyun3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "龙战于野",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {}
        },
        "yunzhaoyun5": {
            "level": "$extension/云将/biaoqian/ico_chuanshuo.png",
            "translation": "煌龙翔天",
            "order": 5,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "info": "我没看错，那位将军是神龙下凡！",
            "skill": {
                "yunlongdan": {
                    "content": "龙游沙场，胆颤群雄。<br>枪出如龙，索命夺魂！<br>龙鳞佑我，无伤分毫。<br>潜龙勿用，藏锋守拙。"
                },
                "yunlonglie": {
                    "content": "八方风雨，天涯何归？<br>滴水不漏，稳若泰山。<br>海角天涯无对！<br>枪挑四海，咫尺天涯。"
                },
                "die": {
                    "content": "这次……有负主公所托了……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});