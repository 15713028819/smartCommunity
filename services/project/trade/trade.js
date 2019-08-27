import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

/******************************************************************************************
/* 商户列表，（点击餐饮等类别进入的页面，即设计图中 周边商家部分 的第二个页面 （与前端不同）
/******************************************************************************************/
export default {
	
	// 数据
	data: {
		list: []
	},
	
	// 模拟
	mock: {
		
	},
	
	
	/**
	 * 商户列表
	 * 
	 * @param cate_id	类别id
	 * @param condition	排序根据  count_sale  销量  (暂时就一个状态)
	 * @param keywords	关键字
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/trade/trade.php?action=load',
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
		
}
