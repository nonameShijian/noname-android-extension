'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yunlusu",
    "origin": {
        "skill": {
                 "yundingce": {
                    "content": "将军降曹，何以自处？<br>我等应戮力同心，共聚大义！"
                },
                "yunshimeng": {
                    "content": "慷慨大度，不拘小利，方可成就大事。<br>身外之物，不足挂齿。"
                },
                "die": {
                    "content": "一生任劳任怨……我亦无悔……"
                }
        }
    },
    "skin": {
        "yunlusu3": {
            "level": "$extension/云将/biaoqian/ico_xuyou.png",
            "translation": "主战拒降",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                 "yundingce": {
                    "content": "将军降曹，何以自处？<br>我等当戮力同心，共聚大义！"
                },
                "yunshimeng": {
                    "content": "慷慨大度，不拘小利，方可成就大事。<br>身外之物，不足挂齿。"
                },
                "die": {
                    "content": "一生任劳任怨……我亦无悔……"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});