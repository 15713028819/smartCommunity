import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list: {}
	},
	
	// 模拟
	mock: {
		
	},
	
	// 获取用户信息
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/user/userInfo.php?action=load',
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
	 * 修改用户数据,或者注销账号都使用
	 * 
	 * @param is_disabled		可选 是否注销
	 * @param area_id			可选 商圈id
	 * @param nick				可选 昵称
	 * @param head				可选 头像
	 * @param sex				可选 性别	'男'、‘女’、‘保密’，这个后端没有定，前端定
	 * @param birthday			可选 生日	传时间戳
	 * @param mobile			可选 手机号
	 * @param email				可选 电子邮箱
	 */
	update: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/userInfo.php?action=update',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				
				// 静态修改本地数据
				for(let item in data) {
					vue.list[item] = data[item]
				}

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
