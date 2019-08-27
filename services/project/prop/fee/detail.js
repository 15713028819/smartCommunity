
import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list:[]
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取缴费详情
	 * 
	 * @param id 	缴费条目的id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/prop/fee/detail.php?action=load',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
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
	 * @param code		订单号码
	 */
	pay_ok: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/submit.php?action=pay_ok',
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
