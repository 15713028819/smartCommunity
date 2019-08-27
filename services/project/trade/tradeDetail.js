import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

/******************************************************************************************
/* 商家详情，（即设计图中 周边商家部分 的最后一个页面 （同前段的trade页面）
/******************************************************************************************/
export default {
	
	// 数据
	data: {
		list: [],
		// 评论列表
		comment_list:[]
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取商户详情
	 * 
	 * @param id	商户id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/trade/tradeDetail.php?action=load',
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
	 * 获取商户评论
	 * 
	 * @param	trade_id		商户id
	 */
	load_comment: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/trade/tradeDetail.php?action=load_comment',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				// 评论列表
				vue.comment_list = res.data;

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
	 * 关注商家
	 * 
	 * @param	trade_id		商户id
	 */
	follow: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/trade/tradeDetail.php?action=follow',
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
	 * 获取优惠券
	 * 
	 * @param id	优惠券id
	 * @param type	类型coupon  package vip
	 */
	get_card: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/trade/tradeDetail.php?action=get_card',
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
			url: 'views/trade/tradeDetail.php?action=pay_ok',
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
