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
	 * 获取单条用户地址信息
	 * 
	 * @param id 地址id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/user/address/form.php?action=load',
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
	 * 添加收货地址
	 * 
	 * @param is_default	非必传 默认为0（非默认地址）	是否默认收货地址（非必传）
	 * @param name			收货人姓名
	 * @param mobile		收货人电话
	 * @param address		收货地址
	 * @param longitude		经度
	 * @param latitude		纬度
	 */
	add: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/address/form.php?action=add',
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
	 * 编辑收货地址
	 * 
	 * @param id			地址id
	 * @param is_default	非必传 默认为0（非默认地址）	是否默认收货地址（非必传）
	 * @param name			收货人姓名
	 * @param mobile		收货人电话
	 * @param address		收货地址
	 * @param longitude		经度
	 * @param latitude		纬度
	 */
	update: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/address/form.php?action=update',
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
	 * 编辑收货地址
	 * 
	 * @param id			地址id
	 */
	delete: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/address/form.php?action=delete',
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
	
		
}
