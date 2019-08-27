/**
 * 获取一个session键的值
 * 
 * @param {string} key 键名，默认为""。如果不填，则返回全部session
 * @return {any}
 */
export function getSession(key = '') {
	const app = getApp();
	if (key === '') return app.globalData.SESSION;
	return app.globalData.SESSION[key] || null;
}

/**
 * 设置一个session的值
 * 
 * @param {string} key 键名
 * @param {any} data 存储的数据值
 * @return {void}
 */
export function setSession(key, data) {
	getApp().globalData.SESSION[key] = data;
}

/**
 * 删除一条session
 * 
 * @param {string} key 键名
 * @return {void}
 */
export function removeSession(key) {
	delete getApp().globalData.SESSION[key];
}

/**
 * 清空全部session
 */
export function clearSession() {
	getApp().globalData.SESSION = {};
}
