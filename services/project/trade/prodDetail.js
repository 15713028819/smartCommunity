import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

/******************************************************************************************
 * 商品（即优惠券、会员卡等）的详情页面，不同于我的优惠券详情 
 ******************************************************************************************/
export default {
	
	// 数据
	data: {
		list: []
	},
	
	// 模拟
	mock: {
		
	},
	
	
	/**
	 * 优惠券详情
	 * 
	 * @param id	卡券id
	 * @param type	卡券类型 coupon 满减券  package 套餐券  vip 尊享券
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/trade/prodDetail.php?action=load',
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
	 * 获取优惠券
	 * 
	 * @param id	优惠券id
	 * @param type	类型coupon  package vip
	 */
	get_card: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/trade/prodDetail.php?action=get_card',
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
			url: 'views/trade/prodDetail.php?action=pay_ok',
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
