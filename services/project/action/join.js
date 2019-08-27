
import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		// 票券列表
		list: [],
		// 提交购票返回的信息
		ticket: {}
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取活动发行的票券
	 * 
	 * @param activity_id 活动id
	 */
	load_ticket: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/action/join.php?action=load_ticket',
			data: {
				activity_id: data.activity_id
			},
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list = res.data;
				for(let item in vue.list) {
					console.log('item', item)
					vue.list[item].buy = 1;
				}

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
	 * 提交报名信息
	 * 
	 * @param	{number}	activity_id	活动id
	 * @param	{string}	name		申请人姓名
	 * @param	{string}	mobile		申请人电话
	 * @param	{string}	sex			申请人性别
	 * @param	{string}	age			申请人年龄
	 * @param	{string}	mark		备注
	 * @param	{string}	ticket_info	购票信息  用 ',' 分割   1（票务id）：2（票务数量）
	 */
	submit: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/action/join.php?action=submit',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.ticket = res.data
				// 返回pay（是否支付） 和 data(统一下单信息)

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
			url: 'views/action/join.php?action=pay_ok',
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
