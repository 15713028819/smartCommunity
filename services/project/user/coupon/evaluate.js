import { LOADER, PARSE, PIPE, REQUEST } from '@/services/preset';
import { URL } from '@/jm.config';
import { httpGet, httpPost } from '@/functions/http';

export default {
	
	// 数据
	data: {
		list: {},
		pagetype: null
	},
	
	// 模拟
	mock: {
		
	},
	
	/**
	 * 获取信息
	 * 
	 * @param trade_id 	商家id
	 */
	load: (vue, data, callback)=> {
		httpGet({
			vue,
			preurl: URL.data,
			url: 'views/user/coupon/evaluate.php?action=load',
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
     * 提交评价
     * 
     * @param cate_id	优惠券id
     * @param trade_id	商家id
     * @param set_grade	评级
     * @param text	评论内容
     */
    submit: (vue, data, callback)=> {
        httpPost({
            vue,
            preurl: URL.data,
            url: 'views/user/coupon/evaluate.php?action=submit',
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
