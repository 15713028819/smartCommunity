import { navigate, redirect, switchTab, relaunch, goback } from '@/prototypes/navigate';

export default {
	
	/**
     * 静默管道
     */
    slient: function() { 
        return function(res, that) { 

        } 
    },

    /**
     * 吐司管道
     * 
     * @param {string} title 文字，当传递''时，使用返回的文字
     * @param {string} image 图片地址
     * @param {boolean} mask 是否显示遮罩，默认false
     * @param {number} duration 显示时长，默认1500
     */
    toast: function(title = '', image = '', mask = false, duration = 1500) {
        return function(res, that) { 
			uni.showToast({
				title: title !== '' ? title : res.msg
			});
        }
    },

    /**
     * 弹窗管道
     * 
     * @param {string} title 标题，默认“提示”
     * @param {string} content 文字，默认"res.msg"
     */
    alert: function(title, content) {
        return function(res, that) {  
            uni.showModal({
            	title: title !== '' ? title : '提示',
            	content: content !== '' ? content : res.msg
            })
        }
    },

    /**
     * 场景管道
     * 
     * @param {string} scene 转到的场景名称
     */
    scene: function(scene) {
        return function(res, that) { 
            that['goto' + scene]();
        }
    },

    /**
     * navigate跳转
     * 
     * @param {string} url 页面地址
     * @param {object} params 参数
     */
    navigate: function(url, params) {
        return function(res, that) { 
            navigate(url, params); 
        }
    },
	
	/**
	 * redirect跳转
	 * 
	 * @param {string} url 页面地址
	 * @param {object} params 参数
	 */
	redirect: function(url, params) {
	    return function(res, that) { 
	        redirect(url, params); 
	    }
	},
	
	/**
	 * switchTab跳转
	 * 
	 * @param {string} url 页面地址
	 * @param {object} params 参数
	 */
	switchTab: function(url, params) {
	    return function(res, that) { 
	        switchTab(url, params); 
	    }
	},
	
	/**
	 * relaunch跳转
	 * 
	 * @param {string} url 页面地址
	 * @param {object} params 参数
	 */
	relaunch: function(url, params) {
	    return function(res, that) { 
	        relaunch(url, params); 
	    }
	},
	
	/**
	 * goback跳转
	 * 
	 * @param {string} url 页面地址
	 * @param {object} params 参数
	 */
	goback: function(url, params) {
	    return function(res, that) { 
	        goback(url, params); 
	    }
	}
}