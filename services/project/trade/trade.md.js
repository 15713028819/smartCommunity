var json = {
    /**
     * 商户列表 （带筛选）
     */
    "/views/trade/trade":{
        //商户列表
        "get:load":{
            "params":{
                //类别id
                "cate_id":1,
                //排序根据  count_sale  销量  (暂时就一个状态)
                "condition":"count_sale",
                //关键字
                "keywords":"关键字",            
            },
            "data":{
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
            }
    
        },
    },

}