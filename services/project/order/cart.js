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
	 * 获取购物车列表
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=load',
			data: data,
			loader: LOADER.slient,
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
	 * 选中一个购物车条目
	 * 
	 * @param {number} id			购物车条目的id	（用于提交数据）
	 * @param {number} check		选中 或者 取消选中  0 取消选中  1选中	（用于提交数据）
	 * 
	 * @param key 条目的索引值（用于更新页面数据）
	 */
	check: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=check',
			data: {
				id: data.id,
				check: data.check,
			},
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list[data.key].checked = data.check;
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
	 * 全选购物车条目
	 * 
	 * @param {number} check		选中 或者 取消选中  0 取消选中  1选中
	 */
	check_all: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=check_all',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				console.log(data.check)
				console.log(vue.check)
				for(let item in vue.list) {
					vue.list[item].checked = data.check;
				}
				vue.check = data.check;
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
	 * 商品 + 1
	 * 
	 * @param id 购物车条目的id号（用于提交数据）
	 * 
	 * @param key 条目的索引值（用于更新页面数据）
	 */
	addpro: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=addpro',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list[data.index]['count'] += 1;

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
	 * 商品 - 1
	 * 
	 * @param id 购物车条目的id号（用于提交数据）
	 * 
	 * @param key 条目的索引值（用于更新页面数据）
	 */
	reducepro: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=reducepro',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list[data.index]['count']--;

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
	 * 删除选中的商品
	 */
	deletepro: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=delete',
			data: data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				uni.showToast({title: '删除成功'})

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
	 * 提交购物车选中条目的id
	 */
	check_by_ids: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=check_by_ids',
			data: data,
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
}
