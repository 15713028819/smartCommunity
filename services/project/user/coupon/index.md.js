var json = {
    /**
     * 获取用户卡券列表
     */
	"/views/user/coupon/index": {
        //获取列表
        "get:load":{
			"params": {
			},
            "data": {
                //满减券
                "user_trade_coupon": [
                    {
                        "id": 5,
                        "created": 0,
                        //状态（0待付款，1待核销，2已核销，3已失效）
                        "state": 0,
                        //商家id
                        "trade_id": 1,
                        //满减券id
                        "coupon_id": 1,
                        //用户id
                        "user_id": 1,
                        //获取积分
                        "get_point": 100,
                        //付款金额
                        "pay": 0,
                        //名称
                        "name": "满减优惠券1",
                        //价格
                        "price": 0,
                        //开始时间
                        "time_start": 1564706868,
                        //结束时间
                        "time_end": 1564706868,
                        //支付时间
                        "time_pay": 0,
                        //满足多少元条件
                        "enough": 100,
                        //优惠多少钱条件
                        "discount": 50,
                        //图片
                        "imgs": "http:\/\/pic.51yuansu.com\/pic3\/cover\/03\/06\/51\/5b337b8e98194_610.jpg",
                        //详细介绍
                        "content": ""
                    }
                ],
                //套餐券
                "user_trade_package": [
                    {
                        "id": 5,
                        "created": 0,
                        //状态（待付款，待核销，已核销，已失效）
                        "state": 0,
                        //商家id
                        "trade_id": 1,
                        //套餐id
                        "package_id": 1,
                        //用户id
                        "user_id": 1,
                        //获取积分
                        "get_point": 0,
                        //付款金额
                        "pay": 0,
                        //名称
                        "name": "套餐优惠券1",
                        //价格
                        "price": 100,
                        //开始时间
                        "time_start": 1564706868,
                        //结束时间
                        "time_end": 1564706868,
                        //支付时间
                        "time_pay": 1564706868,
                        //原价格
                        "old_price": 100,
                        //现价格
                        "now_price": 10,
                        //图片
                        "imgs": "http:\/\/pic17.nipic.com\/20111123\/1809772_130826703146_2.jpg",
                        //详细介绍
                        "content": ""
                    }
                ],
                //尊享券
                "user_trade_vip": [
                    {
                        "id": 5,
                        "created": 0,
                        //状态（待付款，使用中，使完了，已失效）
                        "state": 0,
                        //商家id
                        "trade_id": 1,
                        //尊享id
                        "vip_id": 1,
                        //用户id
                        "user_id": 1,
                        //获取积分
                        "get_point": 1,
                        //付款金额
                        "pay": 100,
                        //名称
                        "name": "VIP尊享券1",
                        //上次使用时间
                        "time_lastuse": 1564706992,
                        //开始时间
                        "time_start": 1564706992,
                        //结束时间
                        "time_end": 1564706992,
                        //支付时间
                        "time_pay": 1564706992,
                        //满足多少元条件
                        "enough": 100,
                        //优惠多少钱条件
                        "discount": 50,
                        //限用天数
                        "useday": 30,
                        //每天限用次数
                        "usenum": 10,
                        //图片
                        "imgs": "http:\/\/ku.90sjimg.com\/element_origin_min_pic\/17\/09\/13\/e8b690be14fab723f55c2c0dfe0f7bc1.jpg",
                        //详细介绍
                        "content": ""
                    }
                ]
        
            }
        }
    },

}