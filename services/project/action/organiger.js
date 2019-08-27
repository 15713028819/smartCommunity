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
	 * 主办方 活动列表和信息
	 * 
	 * @param {number} author_id 主办方id
	 * @param {number} type 类型id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/action/organiger.php?action=load',
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
	}
}
