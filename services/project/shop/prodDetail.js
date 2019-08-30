import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list: [],
		// 购物车商品数量
		cartNum: 0,
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取商品详情
	 * 
	 * @param id 商品id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/shop/prodDetail.php?action=load',
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
	 * 加入购物车
	 * 
	 * @param product_id 	商品id
	 * @param stid			商品id	规格id（非规格设置id）
	 */
	add_cart: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/shop/prodDetail.php?action=add_cart',
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

	
	/**
	 * 获取购物车数量
	 */
	getCartNum: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/order/cart.php?action=buycart_count',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				getApp().globalData.CARTNUM = res.data.data;
				vue.cartNum = res.data.data;

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
