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
    description: {}
}