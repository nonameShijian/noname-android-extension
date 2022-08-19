'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunlejin",
    "origin": {
        "skill": {
                "yunxiandeng": {
                    "content": "奋强突固，无坚不可陷！<br>亲临战场，比为三军表率。"
                },
                "yunxiaolie": {
                    "content": "统御师旅，抚众则和，奉令无犯。<br>当敌制决，靡有遗失。"
                },
                "die": {
                    "content": "不能再为主公……杀敌了……"
                }
            }
    },
    "skin": {
        "yunlejin2": {
            "level": "$extension/云将/biaoqian/ico_jingpin.png",
            "translation": "勇烈骁果",
            "order": 2,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunxiandeng": {
                    "content": "奋强突固，无坚不可陷！<br>亲临战场，比为三军表率。"
                },
                "yunxiaolie": {
                    "content": "统御师旅，抚众则和，奉令无犯。<br>当敌制决，靡有遗失。"
                },
                "die": {
                    "content": "不能再为主公……杀敌了……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});