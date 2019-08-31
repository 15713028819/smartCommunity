import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list: {
			user_info: {
				head: '/static/image/avatar3.png'
			},
			message: []
		}
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取首页数据
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/index.php?action=load',
			data: {},
			loader: LOADER.slient,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list = res.data;

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
