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
	 * 获取我的动态列表
	 * 
	 * @param last_id	可选   最后一条的id 用于下拉查看  
	 * @param cate_id	可选   类别id 用于筛选   
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/user/talk/index.php?action=load',
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
	 * 点赞 自动取消 或者点赞
	 * 
	 * @param neighbor_id	动态id
	 */
	good: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/talk/index.php?action=good',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

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
	 * 添加评论
	 * 
	 * @param neighbor_id	动态id
	 * @param text			提交的字
	 */
	add_comment: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/talk/index.php?action=add_comment',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

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
	 * 删除评论
	 * 
	 * @param comment_id	评论的id
	 */
	delete_comment: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/user/talk/index.php?action=delete_comment',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {

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
