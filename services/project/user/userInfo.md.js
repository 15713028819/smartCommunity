var json ={
	// 用户修改资料
	"/views/user/userInfo": {
        //获取用户信息
		"get:load": {
			"params": {
			},
            "data": {
                "id": 1,
                "created": 0,
                //是否注销
                "is_disabled": 0,
                "openid": "",
                "unionid": "",
                //商圈id
                "area_id": 1,
                //昵称
                "nick": "九筒SIR",
                //头像
                "head": "http:\/\/tx.haiqq.com\/uploads\/allimg\/110811\/1203035233-1.jpg",
                //性别
                "sex": "",
                //生日
                "birthday": 0,
                //手机号
                "mobile": "",
                //电子邮箱
                "email": "",
                //商家满减券数量
                "count_trade_coupon": 0,
                //商家头餐券数量
                "count_trade_package": 0,
                //商家尊享券数量
                "count_trade_vip": 0,
                //及买即送购买次数
                "count_shop_buy": 11,
                //及买即送购买总金额
                "count_shop_pay": 11,
                //及买即送购买总件数
                "count_shop_pnum": 450,
                //余额
                "point": 490.80000000000001,
                //积分
                "cash": 0        
            }		
        },
        //修改用户数据,或者注销账号都使用
        "post:update":{
			"params": {
                //是否注销
                "is_disabled": 0,
                //商圈id
                "area_id": 1,
                //昵称
                "nick": "九筒SIR",
                //头像
                "head": "http:\/\/tx.haiqq.com\/uploads\/allimg\/110811\/1203035233-1.jpg",
                //性别
                "sex": "",
                //生日
                "birthday": 0,
                //手机号
                "mobile": "",
                //电子邮箱
                "email": "",
			},
            "data": {
            }		
        }
    },

}