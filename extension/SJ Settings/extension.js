/// <reference path="E:/无名杀/resources/app/typings/index.d.ts" />
// @ts-check
"use strict";
game.import("extension", function (lib, game, ui, get, ai, _status) {
	let exts;
	if (localStorage.getItem('noname_android_extension')) {
		exts = JSON.parse(localStorage.getItem('noname_android_extension'));
		localStorage.removeItem('noname_android_extension');
	} else {
		exts = ['SJ Settings'];
	}
	for (const extensionName of exts) {
		if (!lib.config.extensions.contains(extensionName)) {
			lib.config.extensions.push(extensionName);
		}
		if (!lib.config[`extension_${extensionName}_enable`]) {
			game.saveExtensionConfig(extensionName, 'enable', true);
		}
		game.saveConfigValue('extensions');
	}
	
	//避免提示是否下载图片和字体素材
	if (!lib.config.asset_version) {
		game.saveConfig('asset_version', '无');
	}

	return {
		name: "SJ Settings",
		editable: false,
		content: function (config, pack) {
			delete lib.extensionMenu['extension_SJ Settings'].delete;
		},
		precontent: function() {
			const emptyFun = () => {};
			document.addEventListener('deviceready', () => {
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
				// @ts-ignore
				const permissions = cordova.plugins.permissions;
				// 请求写入权限, 不然可能不能读写扩展
				const WRITE_EXTERNAL_STORAGE = permissions['WRITE_EXTERNAL_STORAGE'];
				permissions.checkPermission(WRITE_EXTERNAL_STORAGE, (status) => {
					if (!status.hasPermission) {
						permissions.requestPermission(WRITE_EXTERNAL_STORAGE, emptyFun, emptyFun);
					}
				}, emptyFun);
			}, false);
		},
		config: {
			getExtensions: {
				name: '获取扩展',
				intro: '点击获取扩展',
				onclick() {
					if (_status.isGettingExtensions || !navigator.onLine) {
						if (!navigator.onLine) alert('当前网络未连接');
						return;
					} else _status.isGettingExtensions = true;
					/** 扩展下载地址 */
					const my_ext_site = 'https://raw.fastgit.org/nonameShijian/noname-android-extension/main/';
					function getExtensions() {
						fetch(my_ext_site + 'update.js')
							.then(res => {
								if (!res.ok || res.status != 200) throw 'err';
								return res.text()
							})
							.then(text => {
								eval(text);
								if (!window['noname_android_extension']) throw 'err';
								console.log(window['noname_android_extension']);
								// 要下载的扩展名数组
								const extNames = ['在线更新', '阳光包', '玄武江湖', '千幻聆音'];
								// 展示窗口
								showDialog(extNames);
							})
							.catch(e => {
								console.log(e);
								if (navigator.onLine) getExtensions()
								else alert('当前网络未连接');
							})
					};

					function showDialog(extNames) {
						if (_status.getExtensionsDialog) {
							return _status.getExtensionsDialog.showModal();
						}
						const dialog = document.createElement('dialog');
						const title = document.createElement('div');
						title.innerHTML = '请选择要下载的扩展';
						dialog.appendChild(title);
						const extChoose = document.createElement('div');
						// @ts-ignore
						const exts = Object.keys(window.noname_android_extension).filter(v => v != 'SJ Settings');
						for (let i = 0; i < exts.length; i++) {
							const extName = exts[i];
							const p = document.createElement('p');
							const checkbox = document.createElement('input');
							checkbox.type = 'checkbox';
							checkbox.addEventListener('change', function() {
								if (this.checked) {
									extNames.add(extName);
								} else {
									extNames.remove(extName);
								}
							});
							if (extNames.includes(extName)) {
								checkbox.checked = true;
							}
							const span = document.createElement('span');
							span.style.fontSize = '18px';
							span.innerHTML = extName;
							span.onclick = function () {
								checkbox.click();
							}
							p.appendChild(checkbox);
							p.appendChild(span);
							extChoose.appendChild(p);
						}
						dialog.appendChild(extChoose);
						const okBtn = document.createElement('button');
						okBtn.id = 'dialog_ok';
						okBtn.innerHTML = '开始下载';
						okBtn.style.position = 'absolute';
						okBtn.onclick = function () {
							// @ts-ignore
							dialog.close();
						}
						dialog.appendChild(okBtn);
						document.body.appendChild(dialog);
						_status.getExtensionsDialog = dialog;
						// @ts-ignore
						dialog.showModal();
					};

					getExtensions();
				}
			}
		},
		package: {
			intro: "",
			author: "诗笺",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		}
	};
});