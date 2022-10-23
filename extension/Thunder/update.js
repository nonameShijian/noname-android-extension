// @ts-check
(() => ({
	// 扩展版本
	version: "3.32",

	// 扩展的上一个版本
	oldversion: "3.31",

	// 更新内容汇总
	changeLog: `
	-【全惠解】更新
	-现在使用觉醒框UI的武将，ai选技能时不会选择带有combo标签的技能（顺便给哀尘加了combo标签）
	-修复【尹夫人】在没牌时也可以发动拥嬖的bug
	-觉醒框UI现在在侦测到没装十周年UI时会上浮，避免遮住确定按钮
	-修复部分使用卡牌美化的人无法正常使用移动卡牌的UI补丁的bug
    `,

	// 本次更新的所有文件(不包括文件夹)
	updateFiles: [
		"extension.js",
		"thunder.css",
		"audio/die/th_re_taishici.mp3", "audio/die/th_quanhuijie.mp3", "audio/skill/th_jixu1.mp3", "audio/skill/th_jixu2.mp3", "audio/skill/th_yishu1.mp3", "audio/skill/th_yishu2.mp3", "audio/skill/th_ligong1.mp3", "audio/skill/th_ligong2.mp3", "audio/skill/th_huishu1.mp3", "audio/skill/th_huishu2.mp3"
	],
	// 扩展内所有文件(不包括文件夹)
	allFiles: [
		"extension.js",
		"thunder.css",
		"audio/die/th_bianxi.mp3",
		"audio/die/th_caiyang.mp3",
		"audio/die/th_caohua.mp3",
		"audio/die/th_daxiaoqiao.mp3",
		"audio/die/th_dukui.mp3",
		"audio/die/th_fanchou.mp3",
		"audio/die/th_fengyu.mp3",
		"audio/die/th_gongsunzan.mp3", "audio/die/th_guanning.mp3", "audio/die/th_huzhao.mp3", "audio/die/th_liuba.mp3",
		"audio/die/th_liwan.mp3", "audio/die/th_luotong.mp3", "audio/die/th_lvkuanglvxiang.mp3", "audio/die/th_old_lukai.mp3",
		"audio/die/th_old_re_xushu.mp3", "audio/die/th_qinyilu.mp3", "audio/die/th_re_guohuanghou.mp3", "audio/die/th_re_jushou.mp3", "audio/die/th_re_liufeng.mp3",
		"audio/die/th_re_mazhong.mp3", "audio/die/th_re_xushu.mp3", "audio/die/th_tw_chendong.mp3", "audio/die/th_tw_daxiaoqiao.mp3", "audio/die/th_tw_jiling.mp3",
		"audio/die/th_tw_madai.mp3", "audio/die/th_tw_re_fazheng.mp3", "audio/die/th_xin_huanghao.mp3", "audio/die/th_yanfuren.mp3",
		"audio/die/th_yanrou.mp3", "audio/die/th_yinfuren.mp3", "audio/die/th_zhangfen.mp3", "audio/die/th_zhangxuan.mp3", "audio/skill/liuli_th_daxiaoqiao1.mp3",
		"audio/skill/liuli_th_daxiaoqiao2.mp3", "audio/skill/liuli_th_tw_daxiaoqiao1.mp3", "audio/skill/liuli_th_tw_daxiaoqiao2.mp3", "audio/skill/retianxiang_th_daxiaoqiao1.mp3",
		"audio/skill/retianxiang_th_daxiaoqiao2.mp3", "audio/skill/th_baoshu1.mp3", "audio/skill/th_baoshu2.mp3", "audio/skill/th_biejun21.mp3", "audio/skill/th_biejun22.mp3",
		"audio/skill/th_caiyi1.mp3", "audio/skill/th_caiyi2.mp3", "audio/skill/th_chaixie1.mp3", "audio/skill/th_chaixie2.mp3",
		"audio/skill/th_channi1.mp3", "audio/skill/th_channi2.mp3", "audio/skill/th_choutao1.mp3", "audio/skill/th_choutao2.mp3", "audio/skill/th_dunshi1.mp3", "audio/skill/th_dunshi2.mp3",
		"audio/skill/th_dunxi1.mp3", "audio/skill/th_dunxi2.mp3", "audio/skill/th_enyuan1.mp3", "audio/skill/th_enyuan2.mp3", "audio/skill/th_fanyin1.mp3", "audio/skill/th_fanyin2.mp3",
		"audio/skill/th_fenming1.mp3", "audio/skill/th_fenming2.mp3", "audio/skill/th_guili1.mp3", "audio/skill/th_guili2.mp3",
		"audio/skill/th_hengwu1.mp3", "audio/skill/th_hengwu2.mp3", "audio/skill/th_hongju1.mp3", "audio/skill/th_hongju2.mp3", "audio/skill/th_huisheng1.mp3", "audio/skill/th_huisheng2.mp3",
		"audio/skill/th_jianyan1.mp3", "audio/skill/th_jianyan2.mp3", "audio/skill/th_jianying1.mp3", "audio/skill/th_jianying2.mp3", "audio/skill/th_jiaofeng1.mp3", "audio/skill/th_jiaofeng2.mp3",
		"audio/skill/th_jinjian1.mp3", "audio/skill/th_jinjian2.mp3", "audio/skill/th_liandui1.mp3", "audio/skill/th_liandui2.mp3", "audio/skill/th_liehou1.mp3", "audio/skill/th_liehou2.mp3",
		"audio/skill/th_liuli_th_daxiaoqiao1.mp3", "audio/skill/th_liuli_th_daxiaoqiao2.mp3", "audio/skill/th_liuli_th_tw_daxiaoqiao1.mp3", "audio/skill/th_liuli_th_tw_daxiaoqiao2.mp3",
		"audio/skill/th_liunian1.mp3", "audio/skill/th_liunian2.mp3", "audio/skill/th_liuzhuan1.mp3", "audio/skill/th_liuzhuan2.mp3", "audio/skill/th_midu1.mp3", "audio/skill/th_midu2.mp3",
		"audio/skill/th_nifu1.mp3", "audio/skill/th_nifu2.mp3", "audio/skill/th_oldbushi1.mp3", "audio/skill/th_oldbushi2.mp3", "audio/skill/th_oldzhongzhuang1.mp3", "audio/skill/th_oldzhongzhuang2.mp3",
		"audio/skill/th_oldzhuhai1.mp3", "audio/skill/th_oldzhuhai2.mp3", "audio/skill/th_peiqi1.mp3", "audio/skill/th_peiqi2.mp3", "audio/skill/th_piaoping1.mp3", "audio/skill/th_piaoping2.mp3",
		"audio/skill/th_qianxi1.mp3", "audio/skill/th_qianxi2.mp3", "audio/skill/th_qianxin1.mp3", "audio/skill/th_qianxin2.mp3", "audio/skill/th_qiaomeng1.mp3", "audio/skill/th_qiaomeng2.mp3",
		"audio/skill/th_qingce1.mp3", "audio/skill/th_qingce2.mp3", "audio/skill/th_qinqing1.mp3", "audio/skill/th_qinqing2.mp3", "audio/skill/th_redanxin1.mp3", "audio/skill/th_redanxin2.mp3",
		"audio/skill/th_refuman1.mp3", "audio/skill/th_refuman2.mp3", "audio/skill/th_rejiaozhao1.mp3", "audio/skill/th_rejiaozhao2.mp3", "audio/skill/th_renzheng1.mp3", "audio/skill/th_renzheng2.mp3",
		"audio/skill/th_reqinwang1.mp3", "audio/skill/th_reqinwang2.mp3", "audio/skill/th_rexingwu1.mp3", "audio/skill/th_rexingwu2.mp3", "audio/skill/th_rezhanjue1.mp3", "audio/skill/th_rezhanjue2.mp3", "audio/skill/th_shezang1.mp3", "audio/skill/th_shezang2.mp3", "audio/skill/th_shibei1.mp3", "audio/skill/th_shibei2.mp3", "audio/skill/th_shouli1.mp3", "audio/skill/th_shouli2.mp3", "audio/skill/th_shuangren1.mp3", "audio/skill/th_shuangren2.mp3", "audio/skill/th_shuhe1.mp3", "audio/skill/th_shuhe2.mp3", "audio/skill/th_tiqi1.mp3", "audio/skill/th_tiqi2.mp3", "audio/skill/th_tongli1.mp3", "audio/skill/th_tongli2.mp3", "audio/skill/th_tuoxian1.mp3", "audio/skill/th_tuoxian2.mp3", "audio/skill/th_wanglu1.mp3", "audio/skill/th_wanglu2.mp3", "audio/skill/th_xiansi1.mp3", "audio/skill/th_xiansi2.mp3", "audio/skill/th_xianwang1.mp3", "audio/skill/th_xianwang2.mp3", "audio/skill/th_xianzhu1.mp3", "audio/skill/th_xianzhu2.mp3", "audio/skill/th_xingchong1.mp3", "audio/skill/th_xingchong2.mp3", "audio/skill/th_xingluan1.mp3", "audio/skill/th_xingluan2.mp3", "audio/skill/th_xingwu1.mp3", "audio/skill/th_xingwu2.mp3", "audio/skill/th_xuanhuo1.mp3", "audio/skill/th_xuanhuo2.mp3", "audio/skill/th_xunji1.mp3", "audio/skill/th_xunji2.mp3", "audio/skill/th_yicong1.mp3", "audio/skill/th_yicong2.mp3", "audio/skill/th_yilie1.mp3", "audio/skill/th_yilie2.mp3", "audio/skill/th_yingyu1.mp3", "audio/skill/th_yingyu2.mp3", "audio/skill/th_yongbi1.mp3", "audio/skill/th_yongbi2.mp3", "audio/skill/th_zhanyi1.mp3", "audio/skill/th_zhanyi2.mp3", "audio/skill/th_zhengrong1.mp3", "audio/skill/th_zhengrong2.mp3", "audio/skill/th_zhubi1.mp3", "audio/skill/th_zhubi2.mp3", "audio/skill/th_zhuhai1.mp3", "audio/skill/th_zhuhai2.mp3", "audio/skill/th_zhuili1.mp3", "audio/skill/th_zhuili2.mp3", "audio/skill/tianxiang_th_daxiaoqiao1.mp3",
		"audio/skill/tianxiang_th_daxiaoqiao2.mp3", "audio/skill/tianxiang_th_tw_daxiaoqiao1.mp3", "audio/skill/tianxiang_th_tw_daxiaoqiao2.mp3", "image/character/th_bianxi.jpg", "image/character/th_caimzy.jpg",
		"image/character/th_caiyang.jpg", "image/character/th_caohua.jpg", "image/character/th_daxiaoqiao.jpg", "image/character/th_dukui.jpg", "image/character/th_fanchou.jpg", "image/character/th_fengyu.jpg",
		"image/character/th_furong.jpg", "image/character/th_gongsunzan.jpg", "image/character/th_guanning.jpg", "image/character/th_guanqiujian.jpg",
		"image/character/th_huangquan.jpg", "image/character/th_huangzu.jpg", "image/character/th_huzhao.jpg", "image/character/th_kebineng.jpg", "image/character/th_liuba.jpg",
		"image/character/th_liwan.jpg", "image/character/th_lvkuanglvxiang.jpg", "image/character/th_niufu.jpg", "image/character/th_niujin.jpg", "image/character/th_old_lukai.jpg",
		"image/character/th_old_re_xushu.jpg", "image/character/th_qinyilu.jpg", "image/character/th_quanhuijie.jpg", "image/character/th_re_guohuanghou.jpg", "image/character/th_re_handang.jpg",
		"image/character/th_re_jushou.jpg", "image/character/th_re_liufeng.jpg", "image/character/th_re_mazhong.jpg", "image/character/th_re_taishici.jpg", "image/character/th_re_xushu.jpg", "image/character/th_shiyan.jpg", "image/character/th_tw_chendong.jpg", "image/character/th_tw_daxiaoqiao.jpg", "image/character/th_tw_jiling.jpg", "image/character/th_tw_madai.jpg", "image/character/th_tw_re_fazheng.jpg", "image/character/th_unknown.jpg", "image/character/th_xin_huanghao.jpg", "image/character/th_yanfuren.jpg", "image/character/th_yanrou.jpg", "image/character/th_yinfuren.jpg", "image/character/th_zhangfen.jpg", "image/character/th_zhangxuan.jpg", "image/character/th_zhangxun.jpg", "image/character/th_zhugeshang.jpg", "image/effect/buy_dlg.png", "image/effect/common.png", "image/effect/dialog1.png", "image/effect/dialog2.png", "image/effect/epic.png", "image/effect/hand.png", "image/effect/init.png", "image/effect/junk.png", "image/effect/legend.png", "image/effect/pub_arrow_down.png", "image/effect/rare.png", "image/effect/skill2.png", "image/effect/skill3.png", "image/effect/skillsel2.png", "image/effect/skillsel3.png", "image/effect/skillsl.png", "image/effect/tenth.png", "image/effect/thunder.jpg", "image/effect/video_host_detail_array.png", "image/head/daxiaoqiao/daxiaoqiao.png", "image/head/guanzhang/guanzhang.png", "image/head/old_guanzhang/old_guanzhang.png", "image/head/sp_mifangfushiren/sp_mifangfushiren.png", "image/head/th_daxiaoqiao/th_daxiaoqiao.png", "image/head/th_tw_daxiaoqiao/th_tw_daxiaoqiao.png", "image/head/wangfuzhaolei/wangfuzhaolei.png", "image/head/wolongfengchu/wolongfengchu.png", "image/head/zhaotongzhaoguang/zhaotongzhaoguang.png", "image/stand/caocao/caocao.png", "image/stand/caojinyu/caojinyu.png", "image/stand/caojinyu/惊鸿倩影.png", "image/stand/caomao/caomao.png", "image/stand/caomao/扶剑斥奸.png", "image/stand/dengai/虚拟天团.png", "image/stand/diaochan/diaochan.png", "image/stand/diaochan/战场绝版.png", "image/stand/ganning/ganning.png", "image/stand/guanyu/guanyu.png", "image/stand/haozhao/万军之拒.png", "image/stand/lukai/lukai.png", "image/stand/machao/machao.png", "image/stand/re_caocao/山河常青.png", "image/stand/re_caocao/武将列传.png", "image/stand/re_guanyu/飞龙在天.png", "image/stand/re_machao/骠骑将军.png", "image/stand/re_sunyi/腾龙翻江.png", "image/stand/re_xuzhu/武动乾坤.png", "image/stand/ruanyu/ruanyu.png", "image/stand/ruanyu/墨卷浩瀚.png", "image/stand/shen_lvmeng/风神超迈.png",
		"image/stand/shen_machao/迅鹜惊雷.png", "image/stand/simahui/教诲不倦.png", "image/stand/tangji/月祈夕愿.png", "image/stand/th_quanhuijie/th_quanhuijie.png", "image/stand/th_zhaoang/th_zhaoang.png", "image/stand/wenyang/wenyang.png", "image/stand/wufan/wufan.png", "image/stand/wufan/夜占兴废.png", "image/stand/xiahouba/xiahouba.png", "image/stand/zhangchangpu/战场绝版.png", "image/stand/zhaoxiang/zhaoxiang.png", "image/stand/zhaoxiang/军中戏趣.png", "image/stand/zhaoxiang/含泪桃花.png", "image/stand/zhaoxiang/带军卫蜀.png", "image/stand/zhaoxiang/思亲念志.png", "image/stand/zhaoxiang/策马奔腾.png", "image/stand/zhaoxiang/芳芷飒敌.png", "audio/die/th_re_taishici.mp3", "audio/die/th_quanhuijie.mp3", "audio/skill/th_jixu1.mp3", "audio/skill/th_jixu2.mp3", "audio/skill/th_yishu1.mp3", "audio/skill/th_yishu2.mp3", "audio/skill/th_ligong1.mp3", "audio/skill/th_ligong2.mp3", "audio/skill/th_huishu1.mp3", "audio/skill/th_huishu2.mp3",
		"image/stand/zhoufei/晴空暖鸢.png"]

}))();