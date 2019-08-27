import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		// 订单信息
		list: [],
		// 支付数据
		payData: {}

	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取提交订单详情
	 * 
	 * @param take_id	收货地址id，如果不填就是默认id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/order/submit.php?action=load',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list = res.data

                // 回调函数
                if(typeof callback === 'function') callback(res);
			},
			fail: {
				power: (res)=>{
					if(res.msg == '请添加收货地址') {
						uni.showToast({
							title: '您还没有收获地址',
							icon: 'none'
						});
						setTimeout(()=>{
							uni.navigateTo({
								url: '/views/user/address/form?type=order'
							})
						}, 1000)
					}
				},
				logic: PIPE.alert('逻辑出错'),
				error: PIPE.alert('系统出错'),
				network: PIPE.alert('网络出错'),
				offline: PIPE.alert('未联网')
			}
		});
	},
	
	/**
	 * 获取下单支付数据
	 * 
	 * @param paytype	支付方式   0 余额支付 ，1  微信或者混合支付  
	 * @param isusecash	是否使用余额  0  1 
	 * @param takeid	收货地址id
	 * @param mark		备注信息（非必传）
	 */
	get_pay: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/submit.php?action=get_pay',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.payData = res.data

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
