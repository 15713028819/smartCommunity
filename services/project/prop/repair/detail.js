
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
	 * 获取报修详情
	 * 
	 * @param id 报修id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/prop/repair/detail.php?action=load',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list = res.data
				// if(res.data.imgs_submit)
				// vue.list.imgs = res.data.imgs_submit.split(',');
				// if(res.data.imgs_repair)
				// vue.list.repairImgs = res.data.imgs_repair.split(',');
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
	 * 获取报修详情
	 * 
	 * @param {number} id 		报修id
	 * @param {number} grade 	级数  0没有，1非常满意，2比较满意，3一般，4不满意
	 */
	set_grade: (vue, data, callback)=> {
		httpPost({
			vue,
			preurl: URL.data,
			url: 'views/prop/repair/detail.php?action=set_grade',
			data,
			loader: LOADER.loading,
			parse: PARSE.restful,
			success(res, vue) {
				vue.list.grade = data.grade;

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
