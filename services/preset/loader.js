export default {
	
	// 静默加载器
    slient: {
        start: function() {

        },
        end: function() {

        }
    },

    // Loading加载器
    loading: {
        start: function() { 
            uni.showLoading({
            	title: '加载中',
            	mask: false
            });
        },
        end: function() { 
            uni.hideLoading();
        }
    },

    // 场景加载器（仅处理loading与success场景，其它场景请使用回调处理）
    scene: {
        start: function(res, that) { 
            that.gotoLoading();
        },
        end: function(res, that) {
            const arr = ['Success', 'FailPower', 'FailLogic', 'FailError', 'FailNetwork', 'FailOffline'];
            that['goto' + arr[res.code]]();
        }
    }
}