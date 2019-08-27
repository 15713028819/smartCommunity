import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		order: {},

		// 下单信息
		payInfo: {},
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取订单详情
	 * 
	 * @param {number} id 订单id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/order/detail.php?action=load',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.order = res.data

                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: PIPE.alert('权限出错'),
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	},

	/**
	 * 取消订单
	 * 
	 * @param {number} id	订单id
	 */
	cancel: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/detail.php?action=cancel',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.payInfo = res.data;
                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: PIPE.alert('权限出错'),
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	},

	/**
	 * 订单评论
	 * 
	 * @param {number} id		订单id
	 * @param {number} comment	评论内容
	 */
	comment: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/detail.php?action=comment',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: PIPE.alert('权限出错'),
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	},

	/**
	 * 获取下单信息
	 * 
	 * @param {number} id	订单id
	 */
	get_pay: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/detail.php?action=get_pay',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: PIPE.alert('权限出错'),
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	},

	/**
	 * 支付成功
	 * 
	 * @param code		订单号码
	 */
	pay_ok: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/detail.php?action=pay_ok',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: PIPE.alert('权限出错'),
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	}
}
