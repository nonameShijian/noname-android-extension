'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunzhanghe",
    "origin": {
        "skill": {
        "yunqiaobian": {
                    "content": "军势无常，策岂可有常？<br>用兵之法，在于度势定策而巧为之。"
                },
                "yunshanlve": {
                    "content": "统帅三军，怎能不识变数？<br>行军打仗，需得随机应变。"
                },
                "die": {
                    "content": "舍身为国，虽死无憾……"
                }
        }
    },
    "skin": {
        "yunzhanghe3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "披坚执锐",
            "order": 1,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunqiaobian": {
                    "content": "军势无常，策岂可有常？<br>用兵之法，在于度势定策而巧为之。"
                },
                "yunshanlve": {
                    "content": "统帅三军，怎能不识变数？<br>行军打仗，需得随机应变。"
                },
                "die": {
                    "content": "舍身为国，虽死无憾……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});