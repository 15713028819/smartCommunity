import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		text: '暂未登陆'
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 登录
	 * 
	 * @param username	登录名（手机号）
	 * @param password	登录密码
	 */
	login: (vue, data)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/power/login.php?action=login',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
			vue.text = '账号密码登录成功';
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
	 * 静默登陆	通过token自动登录
	 * 
	 * @param token	前端获取的token
	 */
	auto_login:(vue, data)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/power/login.php?action=auto_login',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.text = '自动登录成功';
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
	 * 游客登录
	 */
	visitor:(vue, data)=>{
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/power/login.php?action=visitor',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.text = '游客登录成功';
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
