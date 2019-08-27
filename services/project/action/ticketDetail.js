
import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list: []
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 票务详情
	 * 
	 * @param {number} id	我的票务id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/action/ticketDetail.php?action=load',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				// 返回info（票务信息）， payinfo（支付信息：统一下单）
				vue.list = res.data

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
	 * @param {string} code 订单号码
	 */
	pay_ok(vue, data, callback) {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/action/ticketDetail.php?action=pay_ok',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				uni.showToast({title:'支付成功'})
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
