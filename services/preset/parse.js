export default {
	
	// 原始解析器
    origin: function(text) {
        return {
            code: 0,
            msg: '',
            data: text
        }
    },

    // restful解析器
    restful: function(text) {
        try {
            const json = JSON.parse(text);
            if (!json.hasOwnProperty('code') || !json.hasOwnProperty('msg')) {
                return {
                    code: 5,
                    msg: '从服务器返回的JSON数据格式不正确（没有包含code和msg字段）！'
                }
            }
            return json;
        } 
        catch(e) {         
            return {
                code: 3,
                msg: e.message
            }
        }
    },

    /**
     * wechat解析器
     */
    wechat: function(text) {
        return {
            code: 0,
            msg: '',
            data: text
        }
    }
}
