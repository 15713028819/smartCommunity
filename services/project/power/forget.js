import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		text: '暂未登陆',
		forgetcode: ''
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 修改密码
	 * 
	 * @param username		用户名(手机号)
	 * @param password		密码
	 * @param forgetcode	验证码
	 */
	change_password: (vue, data)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/power/forget.php?action=change_password',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.text = '修改成功';
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

	//获取验证码
	get_forgetcode:(vue, data)=>{
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/power/forget.php?action=get_forgetcode',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.forgetcode = res.data.forgetcode;
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
