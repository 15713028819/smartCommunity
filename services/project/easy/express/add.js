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
	 * 提交快递信息
	 * 
	 * @param {string} send_name	发货人姓名
	 * @param {string} send_mobile	发货人电话
	 * @param {string} send_address	发货人地址
	 * @param {string} send_des		发货介绍
	 * @param {string} imgs			图片(字符串路径，以逗号分隔，最后一位不能是逗号)
	 */
	submit: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/easy/express/add.php?action=submit',
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
