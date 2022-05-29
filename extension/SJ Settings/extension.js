/// <reference path="../../typings/index.d.ts" />
/// <reference path="./typings/index.d.ts" />
//@ts-check
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
					fontSize: '20px',
					width: '100%'
				});
				const file = ui.create.node('span', tip, '', fileName);
				file.style.width = file.style.maxWidth = '100%';
				ui.create.node('br', tip);
				const index = ui.create.node('span', tip, '', value || '0');
				ui.create.node('span', tip, '', '/');
				const maxSpan = ui.create.node('span', tip, '', (max + '') || '未知');

				ui.create.node('br', container);

				const progress = ui.create.node('progress', container);
				progress.setAttribute('value', value || '0');
				progress.setAttribute('max', max);

				parent.getTitle = () => caption.innerText;
				parent.setTitle = (title) => caption.innerText = title;
				parent.getFileName = () => file.innerText;
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
				name: '<button>点击获取扩展</button>',
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
								// console.log(window['noname_android_extension']);
								// 要下载的扩展名数组
								const extNames = Object.keys(window.noname_android_extension);
								// 展示窗口
								showDialog(extNames);
							})
							.catch(e => {
								console.log(e);
								if (navigator.onLine) getExtensions();
								else alert('当前网络未连接');
							})
					};

					/**
					 * 
					 * @param { string[] } extNames 
					 */
					function showDialog(extNames) {
						/** 
						 * @type { string[] } 最终下载哪些扩展
						 **/
						const downloadExtList = [];

						/** 
						 * 判断版本
						 * @param { string } v1 现有版本
						 * @param { string } v2 要更新的版本
						 * @returns { boolean | 'equal' }
						 */
						function compareVersion(v1 = '', v2 = '') {
							// 相等版本
							if (v1 === v2) return 'equal';
							let version_1 = v1.split('.').map(item => Number(item) || 0);
							let version_2 = v2.split('.').map(item => Number(item) || 0);
							// 现有版本: 无
							if (version_1.length == 1 && version_1[0] == 0) {
								// 要更新的版本不是 无
								if (version_2.length > 1 || version_2[0] > 0) return true;
							} else if (version_2.length == 1 && version_2[0] == 0) {
								// 要更新的版本是 无
								return true;
							} else {
								return version_2.every((v, i) => {
									return v > (version_1[i] || 0);
								});
							}
						};

						/** dialog框 */
						const dialog = ui.create.div('.dialog.scroll1', ui.window, {
							textShadow: 'none',
							fontSize: '20px',
						});
						_status.getExtensionsDialog = dialog;
						const contentContainer = ui.create.div('.content-container', dialog);
						const content = ui.create.div('.content', contentContainer);
						/** 标题 */
						const caption = ui.create.div('.caption', '请选择要下载的扩展<br>(若不显示滚动条请尝试下滑)', content);
						/** 下载扩展按钮 */
						const download = ui.create.div('.menubutton.text.active', caption, {
							innerHTML: '下载扩展',
							cursor: 'pointer',
							position: 'absolute',
							right: '15px',
							width: '65px',
							top: '15px'
						}, function() {
							delete _status.isGettingExtensions;
							ui.dialog.show();
							ui.control.show();
							_status.getExtensionsDialog.hide();
							downloadExtensions(downloadExtList);
						});
						/** 取消按钮 */
						const cancel = ui.create.div('.menubutton.text.highlight', caption, {
							innerHTML: '取消下载',
							cursor: 'pointer',
							position: 'absolute',
							left: '15px',
							width: '65px',
							top: '15px'
						}, function () {
							delete _status.isGettingExtensions;
							ui.dialog.show();
							ui.control.show();
							_status.getExtensionsDialog.hide();
						});
						for (let i = 0; i < extNames.length; i++) {
							const extName = extNames[i];
							if (!window.noname_android_extension[extName]) {
								console.warn(`【${extName}】扩展不存在`);
								continue;
							}
							const { author, size, version, nonameVersion, intro } = window.noname_android_extension[extName];
							/** 其中一个扩展的dialog框 */
							const ext = ui.create.div('.videonode.menubutton.extension.large', content, {
								marginLeft: '0px',
								maxHeight: '150px'
							});
							const ext_name = ui.create.div('.caption', extName, ext);
							const ext_author = ui.create.div('.text.author', '作者: ' + (author ? author : '未知'), ext);
							const ext_version = ui.create.div('.text', '版本: ' + (version ? version : '未知版本'), ext);
							// 提示无名杀版本不兼容
							if (typeof nonameVersion == 'string' && lib.version != nonameVersion) {
								ui.create.node('span', ext_version, {
									innerHTML: '<span style="color: turquoise;">(版本不兼容)</span>',
								});
							}
							// 提示可更新
							else if (version && lib.extensionPack && lib.extensionPack[extName] && typeof lib.extensionPack[extName].version == 'string') {
								const bool = compareVersion(lib.extensionPack[extName].version, version);
								if (bool === true) {
									ui.create.node('span', ext_version, {
										innerHTML: '<span style="color: springgreen;">(可更新)</span>',
									});
								} else if (bool === 'equal') {
									ui.create.node('span', ext_version, {
										innerHTML: '<span style="color: orange;">(与本地扩展版本相同)</span>',
									});
								} else {
									ui.create.node('span', ext_version, {
										innerHTML: '<span style="color: deepskyblue;">(本地扩展可能比服务器中的扩展版本更高)</span>',
									});
								}
							}
							const ext_size = ui.create.div('.text', '大小: ' + (size ? ('约' + size) : '未知大小'), ext);
							const ext_intro = ui.create.div('.text', ext, {
								innerHTML: intro || '暂无描述',
							});
							const download = ui.create.div(ext, {
								position: 'absolute',
								right: 0,
								top: 0,
								fontSize: '15px'
							});
							const checkbox = ui.create.node('input', download);
							checkbox.className = 'checkbox';
							checkbox.type = 'checkbox';
							checkbox.addEventListener('change', function () {
								if (this.checked) {
									// 判断是否符合无名杀版本
									if (typeof nonameVersion == 'string') {
										if (lib.version != nonameVersion) {
											alert(`为避免扩展报错，本扩展的当前版本(${version ? version : '未知版本'})只适用于无名杀版本${nonameVersion}`);
											this.checked = false;
											return false;
										}
									}
									// 判断版本
									if (lib.extensionPack && lib.extensionPack[extName] && typeof lib.extensionPack[extName].version == 'string') {
										const bool = compareVersion(lib.extensionPack[extName].version, version);
										if (bool === 'equal') {
											if (!confirm(`【${extName}】扩展与您本地的扩展版本相同，是否确认选择？`)) {
												this.checked = false;
												return false;
											}
										} else if (bool === false) {
											if (!confirm(`本地的扩展【${extName}】可能比服务器中的扩展版本更高，是否确认选择？`)) {
												this.checked = false;
												return false;
											}
										}
									} else {
										console.warn(`未找到【${extName}】扩展的配置，无法进行版本比对`);
									}
									downloadExtList.add(extName);
								} else {
									downloadExtList.remove(extName);
								}
							});
							const span = ui.create.node('span', download, {
								innerHTML: '是否下载此扩展'
							}, function() {
								checkbox.click();
							});
						}

						_status.getExtensionsDialog = dialog;
					};

					/**
					 * 
					 * @param { string[] } extList 
					 */
					function downloadExtensions(extList) {
						function df(url, onsuccess, onerror) {
							let downloadUrl = my_ext_site + url;
							let fileTransfer = new FileTransfer();
							let folder = cordova.file.externalApplicationStorageDirectory + url;
							fileTransfer.download(encodeURI(downloadUrl), folder, () => {
								onsuccess(url);
							}, onerror);
						};
						const extList2 = extList.slice(0).filter(ext => {
							// 仓库中没有这个扩展
							if (!window['noname_android_extension'][ext]) return false;
							if (!Array.isArray(window['noname_android_extension'][ext].files)) return false;
							// 还没安装这个扩展
							if (!lib.config.extensions.includes(ext)) return true;
							// 从extensionPack获取已安装扩展的版本
							if (!lib.extensionPack || !lib.extensionPack[ext]) return true;

							const { version } = lib.extensionPack[ext];
							if (version === window['noname_android_extension'][ext].version) {
								return confirm(`将要下载的【${ext}】扩展与已经安装的扩展版本号一致，是否继续安装？`);
							} else {
								return true;
							}
						});
						//不修改原数组
						extList = extList2.slice(0);
						// @ts-ignore
						const progress = game.shijianCreateProgress('下载扩展', null, '未知', '未知');
						const download = () => {
							if (extList.length) {
								const currentExt = extList.shift();
								let i = 0, 
									files = window['noname_android_extension'][currentExt].files,
									max = files.length;
								/** 重新下载 */
								const reload = (current, success, error) => {
									console.log(current + '下载失败，稍后将重新下载');
									setTimeout(() => {
										console.log('开始下载：' + files[i]);
										progress.setFileName(files[i]);
										progress.setProgressValue(i);
										df(current, success, error);
									}, 200);
								};
								const success = (current, log) => {
									if (log !== false) {
										console.log(current + '下载成功');
									}
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
									console.dir(e);
									// 网址解析错误？
									if (typeof e.exception == 'string' && e.exception.startsWith('Unable to resolve host')) {
										console.log('网址解析错误,下载不了');
										success(files[i], false);
									} else if (e.http_status === null) {
										console.log('http码为null');
										success(files[i], false);
									} else if (e.http_status == 404 || e.http_status == '404') {
										console.log('指定网址中没有这个文件');
										success(files[i], false);
									} else {
										reload(files[i], success, error);
									}
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
						if (extList.length > 0) {
							console.log(extList + '下载成功');
							progress.setProgressValue(progress.getProgressMax());
						} else {
							progress.setProgressMax(0);
						}
						progress.setFileName('下载完成');
						setTimeout(() => {
							// 移除进度条
							progress.remove();
							// 延时提示
							if (extList.length > 0) {
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
							}
						}, 200);
					}

					ui.dialog.hide();
					ui.control.hide();
					if (_status.getExtensionsDialog) {
						 _status.getExtensionsDialog.show();
					} else {
						getExtensions();
					}
				}
			}
		},
		package: {
			intro: "本扩展的功能是导入\"从其他应用使用无名杀打开的扩展包\"，请勿删除",
			author: "诗笺",
			diskURL: "",
			forumURL: "",
			version: "1.2",
		}
	};
});