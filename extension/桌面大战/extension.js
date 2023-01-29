"use strict";
game.import("extension", (lib, game, ui, get, ai, _status) => {
	return {
		name: "桌面大战",
		content: (config, pack) => {
			if (typeof game.shijianCreateProgress != "function") {
				game.shijianCreateProgress = (title, max, fileName, value) => {
					const parent = ui.create.div(ui.window, {
						textAlign: "center",
						width: "300px",
						height: "150px",
						left: "calc(50% - 150px)",
						top: "auto",
						bottom: "calc(50% - 75px)",
						zIndex: "10",
						boxShadow: "rgb(0 0 0 / 40 %) 0 0 0 1px, rgb(0 0 0 / 20 %) 0 3px 10px",
						backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
						borderRadius: "8px"
					});

					parent.className = "dialog";

					const container = ui.create.div(parent, {
						position: "absolute",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%"
					});

					container.ontouchstart = ui.click.dialogtouchStart;
					container.ontouchmove = ui.click.touchScroll;
					container.style.WebkitOverflowScrolling = "touch";
					parent.ontouchstart = ui.click.dragtouchdialog;

					const caption = ui.create.div(container, "", title, {
						position: "relative",
						paddingTop: "8px",
						fontSize: "20px"
					});

					ui.create.node("br", container);

					const tip = ui.create.div(container, {
						position: "relative",
						paddingTop: "8px",
						fontSize: "20px",
						width: "100%"
					});

					const file = ui.create.node("span", tip, "", fileName);
					file.style.width = file.style.maxWidth = "100%";
					ui.create.node("br", tip);
					const index = ui.create.node("span", tip, "", String(value || "0"));
					ui.create.node("span", tip, "", "/");
					const maxSpan = ui.create.node("span", tip, "", String(max || "未知"));

					ui.create.node("br", container);

					const progress = ui.create.node("progress.zxgxProgress", container);
					progress.setAttribute("value", value || "0");
					progress.setAttribute("max", max);

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
			}
			lib.arenaReady.push(() => {
				if (lib.extensionPack.桌面大战) {
					const address = "https://nonameShijian.unitedrhythmized.club/noname-android-extension/main/extension/桌面大战/";
					fetch(`${address}update.js?date=${(new Date()).getTime()}`)
						.then(response => {
							if (!response.ok) throw response;
							return response.text();
						})
						.then(text => {
							const data = eval(text);
							console.log(data);
							const localVersion = lib.extensionPack.桌面大战.version || "0";
							if (data.version == localVersion) return;
							else {
								/**
								 * @param { string } v1
								 * @param { string } v2
								 * @returns { boolean | "equal" }
								 */
								function compareVersion(v1 = "", v2 = "") {
									if (v1 === v2) return "equal";
									let version_1 = v1.split(".").map(item => Number(item) || 0);
									let version_2 = v2.split(".").map(item => Number(item) || 0);
									if (version_1.length == 1 && version_1[0] == 0) {
										if (version_2.length > 1 || version_2[0] > 0) return true;
									} else if (version_2.length == 1 && version_2[0] == 0) {
										return true;
									} else {
										for (let i = 0; i < version_1.length && i < version_2.length; i++) {
											version_1[i] = version_1[i] || 0;
											version_2[i] = version_2[i] || 0;
											if (version_2[i] > version_1[i]) return true;
											if (version_1[i] > version_2[i]) return false;
										}
									}
								};

								if (!compareVersion(localVersion, data.version)) return;
							}

							function myConfirm(message, callback) {
								if (navigator.notification && navigator.notification.confirm) {
									navigator.notification.confirm(message, index => {
										index == 1 && callback();
									}, ["确定", "取消"]);
								} else {
									window.confirm(message) && callback();
								}
							}

							myConfirm(`《桌面大战》扩展检测到更新（${data.version}），是否更新？\n${data.changeLog}`, () => {
								/**
								 * @param { string } url 
								 */
								function download(url, success, error) {
									const path = "extension/桌面大战";
									if (window.FileTransfer) {
										function downloadFile() {
											let fileTransfer = new FileTransfer();
											fileTransfer.download(encodeURI(`${address}${url}?date=${(new Date()).getTime()}`), encodeURI(`${lib.assetURL}${path}/${url}`), success, error);
										}
										window.resolveLocalFileSystemURL(lib.assetURL,
											/**
											 * @param { DirectoryEntry } DirectoryEntry 
											 */
											DirectoryEntry => {
												DirectoryEntry.getDirectory(path, { create: false }, dir => {
													dir.getDirectory(url, { create: false }, () => {
														console.error(`${path}/${url}是文件夹`);
														success(true);
													}, downloadFile);
												}, downloadFile);
											}, downloadFile);
									} else {
										fetch(`${address}${url}?date=${(new Date()).getTime()}`)
											.then(response => response.arrayBuffer())
											.then(arrayBuffer => {
												game.ensureDirectory(path, () => {
													const fs = require("fs");
													const p = require("path");
													const filePath = p.join(__dirname, path, url);
													if (fs.existsSync(filePath)) {
														const stat = fs.statSync(filePath);
														if (stat.isDirectory()) {
															console.error(`${path}/${url}是个文件夹`);
															return success(true);
														}
													}
													fs.writeFile(filePath, Buffer.from(arrayBuffer), null, e => {
														if (e) error(e);
														else success();
													});
												});
											})
											.catch(response => error(new Error(response.statusText)));
									}
								}

								/**
								 * @param { string[] } files 
								 */
								function downloadList(files) {
									if (!Array.isArray(files) || files.length == 0) return;
									let i = 0;
									const progress = game.shijianCreateProgress("更新《桌面大战》扩展", files.length, files[0], i);
									const success = skip => {
										if (!files[++i]) {
											progress.setProgressValue(files.length);
											progress.setFileName("下载完成");
											setTimeout(() => {
												progress.remove();
												setTimeout(() => {
													alert("《桌面大战》扩展更新完成，将自动重启");
													game.reload();
												}, 100);
											}, 200);
											return;
										}
										progress.setProgressValue(i);
										progress.setFileName(files[i]);
										download(files[i], success, error);
									};
									const error = e => {
										console.log("下载失败", e);
										progress.setFileName(`重新下载: ${files[i]}`);
										download(files[i], success, error);
									};

									download(files[i], success, error);
								}

								/** @type { string[] } */
								const files = localVersion == data.oldversion ? data.updateFiles : data.allFiles;
								downloadList(files);
							});
						})
						.catch(e => {
							if (e.message == "Failed to fetch") alert("网络连接失败");
							else if (e instanceof Response) console.error(`桌面大战: ${e.statusText}`);
							else console.error("其他错误", e);
						});
				} else {
					console.error("lib.extensionPack.桌面大战不存在，无法在线更新");
				}
			});
			const RANK = {
				s: [],
				ap: [],
				a: [],
				am: [],
				bp: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one", "avn_the_dark_lord", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red", "avn_green", "avn_blue", "avn_yellow"],
				b: [],
				bm: [],
				c: [],
				d: [],
				rarity: {
					legend: [],
					epic: [],
					rare: ["avn_alan_becker", "avn_victim", "avn_the_chosen_one", "avn_the_dark_lord", "avn_the_second_coming", "avn_the_second_coming_the_chosen_one_s_return", "avn_red", "avn_green", "avn_blue", "avn_yellow"],
					junk: []
				}
			};
			for (const rank in RANK) {
				if (rank == "rarity") for (const rarity in RANK[rank]) {
					if (!Array.isArray(lib.rank[rank][rarity])) lib.rank[rank][rarity] = [];
					lib.rank[rank][rarity].addArray(RANK[rank][rarity]);
				}
				else {
					if (!Array.isArray(lib.rank[rank])) lib.rank[rank] = [];
					lib.rank[rank].addArray(RANK[rank]);
				}
			}
			if (config.unlocked_characters.contains("avn_the_second_coming_the_chosen_one_s_return")) lib.extensionMenu.extension_桌面大战.intro.name = lib.extensionMenu.extension_桌面大战.intro.name.replace(`桌面大战<rp>（</rp><rt>Animation vs. Noname</rt><rp>）</rp>`, `<span style="color: red;">桌</span><span style="color: green;">面</span><span style="color: #00f7ff;">大</span><span style="color: yellow;">战</span><rp>（</rp><rt><span style="color: orange;">Animation vs. Noname</span></rt><rp>）</rp>`);
			for (const character in lib.characterPack.animation_vs_noname) {
				if (character != "avn_the_second_coming_the_chosen_one_s_return" && lib.characterPack.animation_vs_noname[character][4].contains("unseen")) {
					const fightingStickFigures = ["avn_red", "avn_green", "avn_blue", "avn_yellow"];
					if (fightingStickFigures.contains(character)) lib.extensionMenu.extension_桌面大战.intro.name = `<p><cite>${fightingStickFigures.reduce((previousValue, currentValue) => {
						if (lib.characterPack.animation_vs_noname[currentValue][4].contains("unseen")) return `${previousValue}“${lib.characterTitle[currentValue]}”`;
						return previousValue;
					}, "")}</cite></p>${lib.extensionMenu.extension_桌面大战.intro.name}`;
					else lib.extensionMenu.extension_桌面大战.intro.name = `<p><cite>“${lib.characterTitle[character]}”</cite></p>${lib.extensionMenu.extension_桌面大战.intro.name}`;
					break;
				}
			}
			const newUnlockedCharacters = config.unlocked_characters.filter(value => !config.confirmed_unlocked_characters.contains(value));
			if (newUnlockedCharacters.length) {
				lib.config.extension_桌面大战_confirmed_unlocked_characters.addArray(newUnlockedCharacters);
				game.saveConfig("extension_桌面大战_confirmed_unlocked_characters", lib.config.extension_桌面大战_confirmed_unlocked_characters);
				lib.arenaReady.push(() => {
					const dialog = ui.create.dialog(newUnlockedCharacters.contains("avn_the_second_coming_the_chosen_one_s_return") ? `<ruby style="font-size: 2em; font-weight: bold;"><span style="color: red;">武</span><span style="color: green;">将</span><span style="color: #00f7ff;">解</span><span style="color: yellow;">锁</span><rp>（</rp><rt><span style="color: orange;">Character Unlocked</span></rt><rp>）</rp></ruby>` : `<ruby style="font-size: 2em; font-weight: bold;">武将解锁<rp>（</rp><rt>Character Unlocked</rt><rp>）</rp></ruby>`, "hidden");
					if (newUnlockedCharacters.length == 1) {
						const newUnlockedCharacter = newUnlockedCharacters[0];
						dialog.add(`<span style="font-size: 1.5em; font-weight: bold;">${get.translation(newUnlockedCharacter)}</span>`);
						dialog.addText(`<span style="font-size: 1.17em; font-weight: bold;">${lib.characterTitle[newUnlockedCharacter]}</span>`);
					}
					if (newUnlockedCharacters.length > 3) dialog.addSmall([newUnlockedCharacters, "character"], true);
					else dialog.add([newUnlockedCharacters, "character"], true);
					dialog.classList.add("forcebutton", "withbg");
					dialog.addText("查看：选项→武将→桌面大战");
					game.playAudio("..", "extension", "桌面大战", "audio", "effect", "avn_character_unlocked.mp3");
					dialog.open();
					let hidden = false;
					if (!ui.auto.classList.contains("hidden")) {
						ui.auto.hide();
						hidden = true;
					}
					game.pause();
					setTimeout((dialog, hidden) => {
						dialog.close();
						if (hidden) ui.auto.show();
						game.resume();
					}, 2000, dialog, hidden);
				});
			}
			if (pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
		},
		precontent: data => {
			if (data.enable) {
				if (!Array.isArray(lib.config.extension_桌面大战_unlocked_characters)) game.saveConfig("extension_桌面大战_unlocked_characters", lib.config.extension_桌面大战_unlocked_characters = []);
				if (!Array.isArray(lib.config.extension_桌面大战_confirmed_unlocked_characters)) game.saveConfig("extension_桌面大战_confirmed_unlocked_characters", lib.config.extension_桌面大战_confirmed_unlocked_characters = []);
				lib.init.css(`${lib.assetURL}extension/桌面大战`, "extension");
				lib.init.js(`${lib.assetURL}extension/桌面大战/character`, "animation_vs_noname");
				lib.config.all.characters.push("animation_vs_noname");
				if (!lib.config.characters.contains("animation_vs_noname")) lib.config.characters.push("animation_vs_noname");
				lib.translate["animation_vs_noname_character_config"] = "桌面大战";
			}
		},
		help: {},
		config: {
			avn_change_log: {
				name: `<details>
						<summary>
							更新日志（1）
						</summary>
						<ol>
							<li>
								最初版本。
							</li>
						</ol>
					</details>`,
				clear: true,
				nopointer: true
			}
		},
		package: {
			character: {
				character: {},
				translate: {}
			},
			card: {
				card: {},
				translate: {},
				list: []
			},
			skill: {
				skill: {},
				translate: {}
			},
			intro: `<h2><img style="float: left; height: 1.5em; margin-right: 5px;" src="${lib.assetURL}extension/桌面大战/animation_vs_noname.webp"><ruby>桌面大战<rp>（</rp><rt>Animation vs. Noname</rt><rp>）</rp></ruby></h2><p><cite>当传说中的那5个火柴人，不经意间闯入了你的无名杀……</cite></p><p>一个基于《桌面大战》（《火柴人VS动画师》）系列的同人《无名杀》扩展，不隶属于Alan Becker等相关创作者。</p>`,
			author: "Show-K",
			diskURL: "https://github.com/Show-K/animation-vs-noname",
			forumURL: "https://github.com/Show-K/animation-vs-noname/issues",
			version: "1",
			changeLog: `<h2><img style="float: left; height: 1.5em; margin-right: 5px;" src="${lib.assetURL}extension/桌面大战/animation_vs_noname.webp"><ruby>更新日志<rp>（</rp><rt>1</rt><rp>）</rp></ruby></h2>
				<ol>
					<li>
						最初版本。
					</li>
				</ol>`
		},
		files: {
			character: [],
			card: [],
			skill: []
		}
	};
});