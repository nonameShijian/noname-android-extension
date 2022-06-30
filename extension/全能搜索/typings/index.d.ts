declare interface Window {
    /**
     * 【全能搜索】扩展暴露给全局的接口
     */
    诗笺_manual: {
        /**
         * 
         * 打开【全能搜索】扩展的搜索框
         * 
         * @param target 要搜索的内容，可省略
         */
        show(target?: string): void
    }

    /** 设置全局Symbol,用于设置一个对象的描述 */
    qnssDescriptionSymbol: Symbol

    /** 设置全局Symbol,用于设置一个对象内，所有未设置描述的属性，添加一个默认的描述 */
    qnssKeySymbol: Symbol

    /** 设置全局的跳转搜索功能 */
    qnssSee: (a: HTMLAnchorElement) => void
}

/** 设置全局Symbol,用于设置一个对象的描述 */
declare const qnssDescriptionSymbol: Symbol;

/** 设置全局Symbol,用于设置一个对象内，所有未设置描述的属性，添加一个默认的描述 */
declare const qnssKeySymbol: Symbol

/** 设置全局的跳转搜索功能 */
declare const qnssSee: (a: HTMLAnchorElement) => void

declare interface Lib {
    /** 对于每个方法的注释 */
    description: {
		player: Map<string | Symbol, any>,
		card: Map<string | Symbol, any>, 
		lib: Map<string | Symbol, any>, 
		game: Map<string | Symbol, any>, 
		ui: Map<string | Symbol, any>, 
		get: Map<string | Symbol, any>, 
		ai: Map<string | Symbol, any>, 
		_status: Map<string | Symbol, any>
	}
}

declare interface Game {
	/** 把js代码高亮显示 */
	全能搜索_highlight: (text: string) => string;
	/** 双击复制target */
	全能搜索_copy: (target: any) => void;
}

declare interface UI {
	/** 点击进入全能搜索界面 */
	Searcher: HTMLDivElement;
}