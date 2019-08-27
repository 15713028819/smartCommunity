import { joinQueryString } from '@/functions/querystring';

/**
 * 页面Navigate跳转
 * @see https://uniapp.dcloud.io/api/router?id=navigateback
 * 
 * @param {string} url 需要跳转的地址（含参数）
 * @param {object} param 跳转的参数
 * @return {void}
 */
export const navigate = (url, param) => {
	if (typeof param === 'object') {
		uni.navigateTo({
			url: joinQueryString(url, param)
		})
	} else {
		uni.navigateTo({
			url
		})
	}
}

/**
 * 页面Redirect跳转
 * 
 * @param {string} url 需要跳转的地址（含参数）
 * @param {object} param 跳转的参数
 * @return {void}
 */
export const redirect = (url, param) => {
    if (typeof param === 'object') {
    	uni.redirectTo({
    		url: joinQueryString(url, param)
    	})
    } else {
    	uni.redirectTo({
    		url
    	})
    }
}

/**
 * 页面Switch跳转
 * 
 * @param {string} url 需要跳转的地址（含参数）
 */
export const switchTab = (url) => {
    uni.switchTab({
        url
    });
}

/**
 * 页面重新加载
 * 
 * @param {string} url 需要跳转的地址（含参数）
 * @param {object} param 跳转的参数
 * @return {void}
 */
export const relaunch = (url, param) => {
    if (typeof param === 'object') {
    	uni.reLaunch({
    		url: joinQueryString(url, param)
    	})
    } else {
    	uni.reLaunch({
    		url
    	})
    }
}

/**
 * 页面返回
 * @see https://uniapp.dcloud.io/api/router?id=navigateback
 * 
 * @param {number} delta 返回的步数，默认“1”
 * @return {void}
 */
export const goback = (delta = 1) => {
    uni.navigateBack({
        delta
    });
}
