

import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		// 首页数据
		list: [],
		// 商圈列表
		areaList:[]
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取商城首页数据
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/shop/index.php?action=load',
			data,
			loader: LOADER.scene,
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
	 * 获取商圈列表
	 */
	load_area: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/shop/index.php?action=load_area',
			data,
			loader: LOADER.slient,
			parse: PARSE.restful,
			success(res, vue) {
				vue.areaList = res.data

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
	 * 设置用户自身商圈
	 * 
	 * @param area_id	商圈id
	 */
	set_area: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/shop/index.php?action=set_area',
			data,
			loader: LOADER.slient,
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
	 * 添加购物车
	 * 
	 * @param product_id	商品id
	 * @param stid			规格id（非规格设置id）
	 */
	addcart: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/shop/index.php?action=add_cart',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				uni.showToast({title: '添加成功'})

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
