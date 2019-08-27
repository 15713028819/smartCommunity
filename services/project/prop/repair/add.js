
import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 提交报修
	 * 
	 * @param type 			类型（0房屋报修，1水电报修，2车位报修）   必传
	 * @param text_submit 	提交文本 必传
	 * @param mobile_submit 手机号 必传
	 * @param imgs_submit 	图片 不必传  字符串英文逗号分隔
	 */
	submit: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/prop/repair/add.php?action=submit',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				uni.showToast({title: '提交成功'})

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
