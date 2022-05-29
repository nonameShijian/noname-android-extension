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

declare interface Window {
	/** 无名杀诗笺版通过此内容来下载扩展 */
	noname_android_extension?: android_extension
}