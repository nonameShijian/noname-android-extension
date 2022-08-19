'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "yuncaiwenji",
    "origin": {
        "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
    "skin": {
        "yuncaiwenji2": {
            "level": "$extension/云将/biaoqian/ico_jingpin.png",
            "translation": "红颜多牟",
            "order": 2,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji3": {
            "level": "$extension/云将/biaoqian/ico_xiyou.png",
            "translation": "天涯何归",
            "order": 3,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji4": {
            "level": "$extension/云将/biaoqian/ico_shishi.png",
            "translation": "风华绝代",
            "order": 4,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji5": {
            "level": "$extension/云将/biaoqian/ico_chuanshuo.png",
            "translation": "北国汉音",
            "order": 5,
            "levelStyle": {
                "width": "45px",
                "height": "45px",
                "bottom": "calc(0.00%)",
                "left": "calc(65.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji6": {
            "level": "$extension/云将/biaoqian/ico_shengdan.png",
            "translation": "圣诞快乐",
            "order": 6,
            "levelStyle": {
                "width": "50px",
                "height": "30px",
                "bottom": "calc(3.00%)",
                "left": "calc(60.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji7": {
            "level": "$extension/云将/biaoqian/ico_diancang.png",
            "translation": "秋水与共",
            "order": 7,
            "levelStyle": {
                "width": "55px",
                "height": "25px",
                "bottom": "calc(4.00%)",
                "left": "calc(57.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
        "yuncaiwenji8": {
            "level": "$extension/云将/biaoqian/ico_xinchuanshuo.png",
            "translation": "琴音袅袅",
            "order": 8,
            "levelStyle": {
                "width": "75px",
                "height": "27px",
                "bottom": "calc(4.00%)",
                "left": "calc(50.00%)",
                "opacity": "1"
            },
            "skill": {
                "yunmoshi": {
                    "content": "书卷识人，才学默心。<br>琴棋书画，妾身各得其法。"
                },
                "yunbeige": {
                    "content": "山谷眇兮路漫漫,眷东顾兮但悲叹。<br>笳一会兮琴一拍,心愤怨兮无人知。"
                },
                "die": {
                    "content": "苦我怨气兮浩于长空，六合虽广兮受之……"
                }
            }
        },
    }
};
    game.qhly_importSkinInfo(obj);
});