
import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		cate: [],
		list: []
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取活动首页数据
	 * 
	 * @param cate_id	类型id	非必传 用于筛选
	 * @param day	活动日期（时长）  比如一天后（1）  三天后 （3）  七天后（7）	非必传 用于筛选
	 * @param is_free	值为0或1	是否免费	非必传 用于筛选
	 */ 
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/action/index.php?action=load',
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
	 * 获取类型
	 */ 
	load_cate: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/action/index.php?action=load_cate',
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.cate = res.data

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
