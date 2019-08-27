import { DIR, CDN } from '@/jm.config';

/**
 * 制作dir资源调用方法
 */
let dir = { };
for (let key in DIR) {
	dir[key] = function(val) {
		return DIR[key] + val;
	}
}

/**
 * 制作cdn资源调用方法
 */
let cdn = { };
for (let key in CDN) {
	cdn[key] = function(val) {
		return CDN[key] + val;
	}
}

/**
 * 导出
 */
export {
	dir, cdn
}
