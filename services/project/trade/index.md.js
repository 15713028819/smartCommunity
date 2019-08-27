var json = {
    /**
     * 商户首页
     */
    "/views/trade/index":{
        //商户首页
        "get:load":{
            "params":{
            },
            "data":{
                "cate": [
                    {
                        "id": 1,
                        "created": 0,
                        "is_tindex": 1,
                        //名称
                        "name": "类别1",
                        //图片
                        "img": "",
                        "sort": 0
                    }
                ],

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
                ],

                //推荐商家
                "trade_list": {
                    "1": {
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
                        "content": "",
                        //满减券
                        "coupon_list": [
                            {
                                //名字
                                "name": "满减券",
                                //商户id
                                "trade_id": 1
                            }
                        ],
                        //套餐券
                        "package_list": [
                            {
                                //名字
                                "name": "套餐优惠券1",
                                //商户id
                                "trade_id": 1
                            }
                        ],
                        //尊享券
                        "vip_list": [
                            {
                                //名字
                                "name": "VIP尊享券1",
                                //商户id
                                "trade_id": 1
                            }
                        ],

                    }
    
                },
            },
        },
    },

}