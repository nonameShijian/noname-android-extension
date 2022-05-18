"use strict";
game.import("extension", function (lib, game, ui, get, ai, _status) {
	//保存扩展
	let exts;
	if (localStorage.getItem('noname_android_extension')) {
		exts = JSON.parse(localStorage.getItem('noname_android_extension'));
		localStorage.removeItem('noname_android_extension');
	} else {
		exts = ['SJ Settings'];
	}
	exts.forEach(extensionName => {
		if (!lib.config.extensions.contains(extensionName)) {
			lib.config.extensions.push(extensionName);
		}
		if (!lib.config[`extension_${extensionName}_enable`]) {
			game.saveExtensionConfig(extensionName, 'enable', true);
		}
		game.saveConfigValue('extensions');
	});
	
	//避免提示是否下载图片和字体素材
	if (!lib.config.asset_version) {
		game.saveConfig('asset_version', '无');
	}

	return {
		name: "SJ Settings",
		editable: false,
		content: function (config, pack) {
			cordova.exec(result => {
				if (result && result.type == 'extension') {
					const name = result.message;
					lib.config.extensions.add(name);
					game.saveConfigValue('extensions');
					game.saveConfig('extension_' + name + "_enable", true);
					alert("扩展" + name + "导入完成。正在重新启动。");
					cordova.exec(game.reload, game.reload, 'FinishImport', 'importReceived', []);
				}
			}, () => {}, 'FinishImport', 'importReady', []);
		},
		precontent: function() {
			const emptyFun = () => {};
			
			const permissions = cordova.plugins.permissions;
			// 请求写入权限, 不然不能读写扩展
			const WRITE_EXTERNAL_STORAGE = permissions['WRITE_EXTERNAL_STORAGE'];
			permissions.checkPermission(WRITE_EXTERNAL_STORAGE, (status) => {
				if (!status.hasPermission) {
					permissions.requestPermission(WRITE_EXTERNAL_STORAGE, emptyFun, emptyFun);
				}
			}, emptyFun);
		},
		config: {},
		package: {
			intro: "",
			author: "诗笺",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		}
	};
});