var json = {
    /**
     * 获取获取卡券详情
     */
	"/views/user/coupon/detail": {
        /**
         * 获取卡券详情
         */
        "get:load":{
			"params": {
                //用户卡券id
                "id":5,
                //卡券类型 coupon 满减券  package 套餐券  vip 尊享券
                "type":"coupon",
			},
            "data": {
                //卡券信息 分三种类型  满减  套餐  尊享
                "info": {
                    //满减 类型返回>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
                    "content": "",

                    //套餐 类型返回>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
                    "content": "",

                    //尊享 类型返回>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    "id": 5,
                    "created": 0,
                    //状态（待付款，使用中，使完了，已失效）
                    "state": 0,

                    //今日是否可用
                    "can_use": false,
                    //总共可使用多少次
                    "countnum": 10,
                    //使用了多少次
                    "countuse": 0,

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
                    "content": "",
                    //使用记录（只有尊享券有相关信息）  最多显示5条
                    "log": [
                        {
                            "id": 5,
                            //创建事件
                            "created": 1564706992,
                            //卡券名称
                            "name": "VIP尊享券1",
                            //尊享券id
                            "uservip_id": 5,
                            //用户id
                            "user_id": 1,
                            //当前使用了多少次
                            "use_num": 2,
                            //总共可以使用多少次
                            "countnum": 100,
                            //满足多少元条件
                            "enough": 100,
                            //优惠多少钱条件
                            "discount": 50,

                        }        
                    ],

                },
                "trade": {
                    "id": 1,
                    "created": 0,
                    //上次登录时间
                    "time_last": 0,
                    //上次登录ip
                    "time_ip": "",
                    //等级
                    "grade": 1,
                    //用户名
                    "username": "123",
                    //密码
                    "password": "123",
                    //联系人
                    "link_name": "商户1联系人",
                    //联系电话
                    "link_mobile": "138984844547",
                    //名称
                    "name": "大锅火锅城",
                    //类型id
                    "cate_id": 1,
                    //头像
                    "icon": "http:\/\/pic115.nipic.com\/file\/20161108\/2077063_092244321000_2.jpg",
                    //顶部图片
                    "headimg": "http:\/\/pic141.nipic.com\/file\/20170925\/9885883_152808300000_2.jpg",
                    //公告介绍
                    "des": "火锅好吃的餐馆",
                    //销量
                    "count_sale": 111,
                    //营业时间
                    "time_busess": "营业事件：7：00-24：00",
                    //地址
                    "address": "XX路42号又拐",
                    //经度
                    "longitude": "111",
                    //纬度
                    "latitude": "11",
                    //营业资质图片
                    "licenseimgs": "http:\/\/img1.cache.netease.com\/catchpic\/B\/B0\/B03F906C05258AECA3EF4ED94D753D56.jpg",
                    //详细介绍
                    "content": ""
                }
        
            }
        }
    },

}