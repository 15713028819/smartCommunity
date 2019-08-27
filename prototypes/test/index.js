import { getTime13 } from '@/functions/date';

/**
 * 非生产环境下打印log信息
 * 
 * @param {any[]} param 需要打印的数据
 * @return {void}
 */
export function __log(...param) {
	if (process.env.NODE_ENV !== 'production') {
		console.log(...param);
	}
}

/**
 * 非生产环境下输出警告信息
 * 
 * @param {any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function __warn(...params) {
    if (process.env.NODE_ENV !== 'production') {
        console.warn(...params);
    }
}

/**
 * 非生产环境下输出错误信息
 * 
 * @param {any[]} params 需要输出的内容数组，任意类型
 * @return {Void}
 */
export function __error(...params) {
    if (process.env.NODE_ENV !== 'production') {
        console.error(...params);
    }
}

/**
 * 弹出测试信息
 * 
 * @param {string} content 需要输出的内容，必须是字符串
 * @return {Void}
 */
export function __poplog(content) {
    if (process.env.NODE_ENV !== 'production') {
		if (typeof content === 'object') {
			content = JSON.stringify(content);
		}
        uni.showModal({
            title: 'JM测试',
            content,
			showCancel: false
        })
    }
}

/**
 * 非生产环境下记录启动时间
 * 
 * @param {string} name 计时的名称
 */
export function __start(name) {
    if (process.env.NODE_ENV !== 'production') {
        getApp().globalData.TEST['TIME'][name] = getTime13();
    }
}

/**
 * 非生产环境下，打印从timeStart开始计时的算法效率
 * 
 * @param {string} name 计时的名称
 */
export function __end(name) {
    if (process.env.NODE_ENV !== 'production') {
		const app = getApp();
        console.log('效率测试: ' + name + ': ' +  (getTime13() - app.globalData.TEST['TIME'][name]) + ' 毫秒');
		delete app.globalData.TEST['TIME'][name];
    }
}
