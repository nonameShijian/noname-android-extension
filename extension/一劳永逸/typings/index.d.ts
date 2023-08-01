interface fetchOptions {
	/** 超时时间 */
	timeout: number;
}

interface progress extends HTMLDivElement {
	/** 获取标题 */
	getTitle: (title: string) => string;
	/** 更改标题 */
	setTitle: (title: string) => void;
	/** 获取显示的文件名 */
	getFileName: (title: string) => string;
	/** 更改显示的文件名 */
	setFileName: (title: string) => void;
	/** 获取进度*/
	getProgressValue: () => number;
	/** 更改进度*/
	setProgressValue: (value: number) => void;
	/** 获取下载文件总数 */
	getProgressMax: () => number;
	/** 修改下载文件总数 */
	setProgressMax: (max: number) => void;
	/** 通过数组自动解析文件名 */
	autoSetFileNameFromArray: (fileNameList: string[]) => void;
}

interface notLogin {
	code: number,
	data: { account_type: string },
	msg: { user_not_login: string },
}

interface noname_update {
	version: string;
	update: string;
	changeLog: string[];
	files: string[];
}

declare interface Window {
	/** 保存没下载完的文件( from: extension/一劳永逸 )  */
	showKSaveBrokenFile: VoidFunction;
}

declare interface LibConfigData {
	/**
	 * 更新时是否检查音频文件
	 */
	"extension_一劳永逸_assetAudio": boolean;
	/**
	 * 更新时是否检查字体文件
	 */
	"extension_一劳永逸_assetFont": boolean;
	/**
	 * 更新时是否检查图片文件（部分）
	 */
	"extension_一劳永逸_assetImage": boolean;
	/**
	 * 更新时是否检查图片文件（全部）
	 */
	"extension_一劳永逸_assetImageFull": boolean;
	/**
	 * 更新时是否检查皮肤文件
	 */
	"extension_一劳永逸_assetSkin": boolean;
	/**
	 * 储存还未更新完的文件
	 */
	"extension_一劳永逸_brokenFile": string[];
	/**
	 * 扩展是否开启
	 */
	"extension_一劳永逸_enable": boolean;
	/**
	 * 是否强制更新所有主要(非素材)文件
	 */
	"extension_一劳永逸_updateAll": boolean;
	/**
	 * 修改更新地址
	 */
	"extension_一劳永逸_update_link": string;
	/**
	 * 更新地址说明
	 */
	"extension_一劳永逸_update_link_explain": string;
	/**
	 * 是否覆盖游戏的更新按钮
	 */
	"extension_一劳永逸_rewriteUpdateButton": boolean;
	/**
	 * 请求最大并发数
	 */
	"extension_一劳永逸_maxFetchNum": number;
}

type AsyncFunction<A, O> = (...args: A) => Promise<O>;

declare interface Lib {
	updateURLS: {
		/** 感谢Show-K */
		URCOAFA: "https://unitedrhythmized.club/Show-K/noname",
		codingOAFA: "https://ghproxy.com/https://raw.githubusercontent.com/Show-K/noname",
		fastGitOAFA: "https://raw.fgit.ml/Show-K/noname",
		githubOAFA: "https://raw.githubusercontent.com/Show-K/noname",
		/** 感谢Show-K */
		URC: 'https://unitedrhythmized.club/libccy/noname',
		fastGit: 'https://raw.fgit.ml/libccy/noname',
		github: 'https://raw.githubusercontent.com/libccy/noname',
		coding: 'https://ghproxy.com/https://raw.githubusercontent.com/libccy/noname'
	},
	/**
	 * 游戏更新完成后覆盖文件(于v1.6添加)
	 * ```
	 * lib.updateReady.push({ 'extension/一劳永逸/extension.js': 'a.js' });
	 * ```
	 */
	updateReady: { [key: string]: string }[];
	/**
	 * 游戏素材更新完成后覆盖文件(于v1.6添加)
	 * ```
	 * lib.updateReady.push({ 'extension/一劳永逸/extension.js': 'a.js' });
	 * ```
	 */
	updateAssetReady: { [key: string]: string }[];
}

declare interface Game {
	/**
	 * 请求错误达到5次提示更换更新源
	 */
	showKUpdateErrors: number;
	/**
	 * 正在更新游戏文件
	 */
	showKUpdating?: boolean;
	/**
	 * 游戏文件和素材全部更新完毕
	 */
	showKAllUpdatesCompleted?: boolean;
	/**
	 * 正在更新游戏素材
	 */
	showKUpdatingForAsset?: boolean;
	/**
	 * 游戏是否更新完毕
	 */
	showKUnwantedToUpdate?: boolean;
	/**
	 * 素材是否更新完毕
	 */
	showKUnwantedToUpdateAsset?: boolean;
	/**
	 * 获取最快连接到的更新源
	 * @param updateURLS 默认为lib.updateURL
	 * @param translate 默认为{
		coding: 'Coding',
		github: 'GitHub',
		fastgit: 'GitHub镜像',
		URC: 'URC'
	}
	 */
	showKGetFastestUpdateURL: (updateURLS: SMap<string> = lib.updateURLS, translate: SMap<string> = {
		URCOAFA: '一劳永逸URC',
		codingOAFA: '一劳永逸GitHub Proxy',
		fastGitOAFA: '一劳永逸Fast Git',
		githubOAFA: '一劳永逸GitHub',
		URC: 'URC',
		fastGit: 'Fast Git',
		github: 'GitHub',
		coding: 'GitHub Proxy'
	}) => never |
		Promise<{
			success: Array<{ key: string, finish: number }>;
			failed: Error | Array<{ key: string, err: Error }>;
			fastest?: { key: string, finish: number };
		}>;

	/**
	 * 通过@url参数下载文件，并通过onsuccess和onerror回调
	 */
	showKDownload: (url: string, onsuccess?: (skipDownload?: boolean) => void, onerror?: (e: FileTransferError | Error, message?: string) => void, onprogress?: (loaded: number, total: number) => void) => void;

	/**
	 * 将current分别显示在无名杀控制台中，比game.showKDownload做出了更细致的错误划分
	 * 
	 * onsuccess中的bool代表当前文件是否下载了（即是否是404）
	 * 
	 * @deprecated 在v1.4及以后的一劳永逸扩展中弃用此函数
	 */
	showKDownloadFile: (current: string, onsuccess: (current: string, bool?: boolean) => void, onerror: (current: string) => void, onprogress?: (current: string, loaded: number, total: number) => void) => void;

	/**
	 * 根据字符串数组下载文件
	 * 
	 * v1.6: 改为多线程下载，保证同时请求下载多个文件
	 */
	showKMultiDownload: (list: string[], onsuccess: (fileNameList: string[]) => void, onerror: (e: FileTransferError | Error, message?: string) => void, onfinish: VoidFunction, onprogress?: (current: string, loaded: number, total: number) => void) => void;

	/**
	 * 显示一个进度条，后续需要开发者手动控制
	 * @param title 标题
	 * @param max 文件总数
	 * @param fileName 当前下载的文件名
	 * @param value 当前下载进度
	 */
	showKCreateProgress: (title: string, max: number, fileName?: string, value?: number) => progress;

	/**
	 * 从更新源获取要更新的文件(不包括素材)
	 * 
	 * 最大重试次数为5次
	 */
	showKGetUpdateFiles: () => Promise<{
		/** window.noname_update */
		update: noname_update,
		/** window.noname_source_list */
		source_list: string[],
	}>;

	/**
	 * 从更新源获取要更新的素材(皮肤文件除外)
	 * 
	 * 最大重试次数为5次
	 */
	showKGetUpdateAssets: () => Promise<{
		assets: string[],
		skins: {
			[key: string]: number
		},
	}>;

	/**
	 * 是否有本地通知功能(安卓)
	 */
	showKHasLocalNotification: () => boolean;

	/**
	 * 一劳永逸扩展安装后，禁用此函数，使此函数无效果
	 */
	checkForUpdate: VoidFunction;

	/**
	 * (于v1.62添加) 判断版本号2相对于版本号1的情况。
	 * 
	 * 灵感来源于b站渡一教育的相关视频
	 * 
	 * @param ver1 版本号1
	 * @param ver2 版本号2
	 * @example
	 * ```
	 * game.showKCheckVersion('1.61', '1.62'); // -1
	 * game.showKCheckVersion('1.61.1', '1.61'); // 1
	 * game.showKCheckVersion('1.61', '1.61'); // 0
	 * ```
	 */
	showKCheckVersion: (ver1: string, ver2: string) => -1 | 0 | 1;
}