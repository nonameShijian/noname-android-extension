interface android_extension {
	[key: string]: {
		/** 扩展版本号 */
		version: string, 
		/** 扩展文件数组 */
		files: string[], 
		/** 扩展作者 */
		author: string,
		/** 扩展大小(未压缩) */
		size: string,
		/** 扩展的简短描述 */
		intro: string,
		/** 该扩展适合的最高无名杀版本 */
		nonameVersion?: string,
	}
}

interface noname_shijianInterfaces {
	/** cordova.plugins.wsserver */
	wsserver: any,
	/**
	 * 启动本地服务器
	 * @param port 端口号
	 */
	start: (port: number) => any,
	/**
	 * 关闭本地服务器
	 */
	stop: () => void,
	/**
	 * 重启本地服务器
	 */
	reload: () => void,
	/** 服务器启动成功的ipv4地址 */
	ipv4Addresses: string,
	/** 服务器启动成功的端口号 */
	port: number,
	/** 服务器是否启动 */
	isRunning: boolean,

	/** 导入配置 */
	importConfigData: (data: string) => void;

	// 无名杀的联机服务器代码
	bannedKeys: string[],
	bannedIps: string[],
	rooms: any[],
	events: any[],
	clients: {
		[key: string]: any
	},
	bannedKeyWords: string[],
	messages: {
		[key: string]: any
	},
	util: {
		[key: string]: any
	},
	/** app是否处于开发模式 */
	environment: boolean;
	/** 对选择文件或路径选择后返回到无名杀后执行的代码 */
	finishChooseFile: (result: {
		path: string,
		type: string | null,
		isDirectory: boolean,
		data: string
	}) => void;
}

declare interface Window {
	/** 无名杀诗笺版通过此内容来下载扩展 */
	noname_android_extension?: android_extension,

	noname_shijianInterfaces: noname_shijianInterfaces
}

declare const noname_shijianInterfaces: noname_shijianInterfaces;