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
	 * 获取商品详情
	 * 
	 * @param cbid 			非必填  大类id
	 * @param csid 			非必填  小类id
	 * @param keywords 		非必填  大类搜索关键词
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/shop/prodList.php?action=load',
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
			url: 'views/shop/prodList.php?action=add_cart',
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
