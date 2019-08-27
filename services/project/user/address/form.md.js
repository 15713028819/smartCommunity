var json = {

    //用户地址form表单相关
	"/views/user/address/form": {
        //获取信息
        "get:load":{
			"params": {
			},
            "data": {
                    "id": 1,
                    "created": 0,
                    //是否默认地址
                    "is_default": 1,
                    //用户id
                    "user_id": 1,
                    //收货人姓名
                    "name": "受货人",
                    //收货人电话
                    "mobile": "1346302587",
                    //收货地址
                    "address": "手袋地址",
                    //经度
                    "longitude": "",
                    //纬度
                    "latitude": "11"
            }
        },
        //新添加收货地址
        "post:add":{
            "params":{
                //是否默认收货地址（非必传）
                "is_default": 1,
                //用户id
                "user_id": 1,
                //收货人姓名
                "name": "受货人",
                //收货人电话
                "mobile": "1346302587",
                //收货地址
                "address": "手袋地址",
                //经度
                "longitude": "",
                //纬度
                "latitude": "11"
            },
            data:{

            }
        },
        //修改收货地址  获取设置默认地址
        "post:update":{
            "params":{
                //id
                "id": 1,
                //是否默认收货地址（非必传）
                "is_default": 1,
                //用户id
                "user_id": 1,
                //收货人姓名
                "name": "受货人",
                //收货人电话
                "mobile": "1346302587",
                //收货地址
                "address": "手袋地址",
                //经度
                "longitude": "",
                //纬度
                "latitude": "11"
            },
            data:{

            }
        }

    },

}