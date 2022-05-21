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
			let layoutPath = lib.assetURL + 'extension/SJ Settings';
			lib.init.css(layoutPath, 'extension');

			// 下载进度
			// @ts-ignore
			game.shijianCreateProgress = (title, max, fileName, value) => {
				/** @type { progress } */
				// @ts-ignore
				const parent = ui.create.div(ui.window, {
					textAlign: 'center',
					width: '300px',
					height: '150px',
					left: 'calc(50% - 150px)',
					top: 'auto',
					bottom: 'calc(50% - 75px)',
					zIndex: '10',
					boxShadow: 'rgb(0 0 0 / 40 %) 0 0 0 1px, rgb(0 0 0 / 20 %) 0 3px 10px',
					backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
					borderRadius: '8px'
				});

				// 可拖动
				parent.className = 'dialog';

				const container = ui.create.div(parent, {
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%'
				});

				container.ontouchstart = ui.click.dialogtouchStart;
				container.ontouchmove = ui.click.touchScroll;
				// @ts-ignore
				container.style.WebkitOverflowScrolling = 'touch';
				parent.ontouchstart = ui.click.dragtouchdialog;

				const caption = ui.create.div(container, '', title, {
					position: 'relative',
					paddingTop: '8px',
					fontSize: '20px'
				});

				ui.create.node('br', container);

				const tip = ui.create.div(container, {
					position: 'relative',
					paddingTop: '8px',
					fontSize: '20px'
				});
				const file = ui.create.node('span', tip, '', fileName);
				ui.create.node('br', tip);
				const index = ui.create.node('span', tip, '', value || '0');
				ui.create.node('span', tip, '', '/');
				const maxSpan = ui.create.node('span', tip, '', (max + '') || '未知');

				ui.create.node('br', container);

				const progress = ui.create.node('progress', container);
				progress.setAttribute('value', value || '0');
				progress.setAttribute('max', max);

				//parent.getTitle = () => caption.innerText;
				parent.setTitle = (title) => caption.innerText = title;
				//parent.getFileName = () => file.innerText;
				parent.setFileName = (name) => file.innerText = name;
				parent.getProgressValue = () => progress.value;
				parent.setProgressValue = (value) => progress.value = index.innerText = value;
				parent.getProgressMax = () => progress.max;
				parent.setProgressMax = (max) => progress.max = maxSpan.innerText = max;
				return parent;
			};
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
				clear: true,
				onclick() {
					if (_status.isGettingExtensions || _status.isDownloadingExtensions || !navigator.onLine) {
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
								// const extNames = ['在线更新', '阳光包', '玄武江湖', '千幻聆音'];
								// @ts-ignore
								const extNames = Object.keys(window.noname_android_extension);//.filter(v => v != 'SJ Settings');
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
						const dialog = document.createElement('dialog');
						dialog.id = 'dialog';
						const title = document.createElement('div');
						title.id = 'dialog_title';
						title.innerHTML = '请选择要下载的扩展<br>(若不显示滚动条请尝试下滑)';
						dialog.appendChild(title);
						const extChoose = document.createElement('div');
						extChoose.id = 'dialog_extChoose';
						const parseSpanInn = function(extName) {
							// @ts-ignore
							let size = (window.noname_android_extension[extName] && window.noname_android_extension[extName].size) ? ("约" + window.noname_android_extension[extName].size) : "未知大小";
							return extName + "&nbsp;&nbsp;(" + size + ")";
						}
						for (let i = 0; i < extNames.length; i++) {
							const extName = extNames[i];
							const p = document.createElement('p');
							const checkbox = document.createElement('input');
							checkbox.className = 'checkbox';
							checkbox.type = 'checkbox';
							checkbox.addEventListener('change', function() {
								if (this.checked) {
									extNames.add(extName);
								} else {
									extNames.remove(extName);
								}
							});
							const span = document.createElement('span');
							span.style.fontSize = '18px';

							span.innerHTML = parseSpanInn(extName);
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
							downloadExtensions(extNames);
							delete _status.isGettingExtensions;
						}
						dialog.appendChild(okBtn);
						const cancelBtn = document.createElement('button');
						cancelBtn.id = 'dialog_cancel';
						cancelBtn.innerHTML = '取消';
						cancelBtn.style.position = 'absolute';
						cancelBtn.onclick = function () {
							// @ts-ignore
							dialog.close();
							delete _status.isGettingExtensions;
						}
						dialog.appendChild(cancelBtn);
						document.body.appendChild(dialog);
						_status.getExtensionsDialog = dialog;
						// @ts-ignore
						dialog.showModal();
					};

					function downloadExtensions(extList) {
						function df(url, onsuccess, onerror) {
							let downloadUrl = my_ext_site + url, path = '', name = url;
							if (url.indexOf('/') != -1) {
								path = url.slice(0, url.lastIndexOf('/'));
								name = url.slice(url.lastIndexOf('/') + 1);
							}
							fetch(downloadUrl)
								.then(response => {
									const { ok, status } = response;
									if (!ok || status != 200) {
										throw response;
									} else {
										return response.arrayBuffer();
									}
								})
								.then(arrayBuffer => {
									// 创建文件夹
									game.ensureDirectory(path, () => {
										if (lib.node && lib.node.fs) {
											const filePath = __dirname + '/' + path + '/' + name;
											lib.node.fs.writeFile(filePath, Buffer.from(arrayBuffer), null, e => {
												if (e) onerror(e);
												else onsuccess(url);
											});
										} else if (typeof window.resolveLocalFileSystemURL == 'function') {
											window.resolveLocalFileSystemURL(lib.assetURL + path,
												/** @param { DirectoryEntry } entry */
												entry => {
													entry.getFile(name, { create: true }, fileEntry => {
														fileEntry.createWriter(fileWriter => {
															fileWriter.onwriteend = () => {
																onsuccess(url);
															};
															fileWriter.write(arrayBuffer);
														}, onerror);
													}, onerror);
												}, onerror);
										}
									});
								})
						};
						//不修改原数组
						extList = extList.slice(0);
						const extList2 = extList.slice(0);
						// @ts-ignore
						const progress = game.shijianCreateProgress('下载扩展', null, '未知', '未知');
						const download = () => {
							if (extList.length) {
								const currentExt = extList.shift();
								if (!window['noname_android_extension'][currentExt] || !Array.isArray(window['noname_android_extension'][currentExt].files)) {
									console.log('下载源中没有这个扩展：' + currentExt);
									download();
								}
								let i = 0, 
									files = window['noname_android_extension'][currentExt].files,
									max = files.length;
								const reload = (current, success, error) => {
									console.log(current + '下载失败，稍后将重新下载');
									setTimeout(() => {
										console.log('开始下载：' + files[i]);
										progress.setFileName(files[i]);
										progress.setProgressValue(i);
										df(current, success, error);
									}, 200);
								};
								const success = (current) => {
									console.log(current + '下载成功');
									if (++i < max) {
										console.log('开始下载：' + files[i]);
										progress.setFileName(files[i]);
										progress.setProgressValue(i);
										df(files[i], success, error);
									} else {
										//自调用
										download();
									}
								};
								const error = (e) => {
									console.error(e);
									reload(files[i], success, error);
								}
								console.log('开始下载：' + files[i]);
								progress.setFileName(files[i]);
								progress.setProgressMax(files.length);
								progress.setProgressValue(i);
								df(files[i], success, error);
							} else {
								onfinish(extList2, progress);
							}
						};
						_status.isDownloadingExtensions = true;
						download();
					};

					function onfinish(extList, progress) {
						delete _status.isDownloadingExtensions;
						console.log(extList + '下载成功');
						// 更新进度
						progress.setProgressValue(progress.getProgressMax());
						progress.setFileName('下载完成');
						setTimeout(() => {
							// 移除进度条
							progress.remove();
							// 延时提示
							setTimeout(() => {
								extList.forEach(v => {
									if (window['noname_android_extension'][v] && Array.isArray(window['noname_android_extension'][v].files)) {
										lib.config.extensions.add(v);
										game.saveConfigValue('extensions');
										game.saveConfig('extension_' + v + "_enable", true);
									}
								});
								if (confirm('下载完成，是否重启？')) game.reload();
							}, 100);
						}, 200);
					}

					if (_status.getExtensionsDialog) {
						 _status.getExtensionsDialog.showModal();
					} else {
						getExtensions();
					}
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