'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunzhangjiao",
    "origin": {
        "skill": {}
    },
    "skin": {
        "yunzhangjiao4": {
            "level": "$extension/云将/biaoqian/ico_shishi.png",
            "translation": "苍天换日",
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
        "yunzhangjiao7": {
            "level": "$extension/云将/biaoqian/ico_diancang.png",
            "translation": "化身为黄",
            "order": 7,
            "levelStyle": {
                "width": "55px",
                "height": "25px",
                "bottom": "calc(4.00%)",
                "left": "calc(57.00%)",
                "opacity": "1"
            },
            "info": "夫人，你也不想黄天被别人嘲笑吧？<br><br>CV：江寒星",
            "skill": {
                "yunchuandao": {
                    "order": 1,
                    "content": "施药济民，当传太平。<br>天不仁，地无德，当善道教化天下。"
                },
                "yuntaiping": {
                    "order": 2,
                    "content": "三十六方，传诵吾名～<br>苍天已死，黄天当兴，改天换日，就在此时！"
                },
                "yunhuangtian": {
                    "order": 3,
                    "content": "苍天既无道，众生何其苦？<br>黄天当兴，皆颂吾名！"
                },
                "yundunshu": {
                    "order": 4,
                    "content": "天罚无道，雷公助我！<br>雷法既来，五方皆定！"
                },
                "die": {
                    "content": "黄天……弃我而去了吗？"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});