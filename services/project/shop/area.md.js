var json = {
    /**
     * 商城首页
     */
    "/views/shop/index":{

        /**
         * 获取商圈信息
         */
        "get:load_area":{
            "params":{

            },
            "data":[
                {
                    "id": 1,
                    //城市id
                    "ctid": 1,
                    //商圈名称
                    "name": "丽景蓝湾商圈",
                    //商圈管理人
                    "manager": "史力龙",
                    //商圈管理人用户id
                    "uid": 63011,
                    //管理人手机
                    "mobile": "18632253537",
                    //超市名称
                    "supermarket": "1",
                    //介绍
                    "contact": "丽景蓝湾商圈配送范围：恒祥北大街以西，七一路以北，翠园街以东，北三环以南，荣联天下城，芦庄村，尚达绿都，明珠佳苑，新儿童医院",
                    //地址
                    "address": "1",
                    //x坐标
                    "x": "",
                    //y坐标
                    "y": "",
                    //经度
                    "longitude": "",
                    //纬度
                    "latitude": "",
                    //覆盖范围最小横坐标
                    "xmin": "",
                    //覆盖范围最大横坐标
                    "xmax": "",
                    //覆盖范围最小纵坐标
                    "ymin": "",
                    //覆盖范围最大纵坐标
                    "ymax": "",
                    //银行卡号
                    "banknumber": "",
                    //开户银行
                    "bankname": "",
                },        
            ]
        },

        /**
         * 修改自己的商圈
         */
        "post:set_area":{
            "params":{
                "area_id":1,
            },
            "data":{

            }
        },
        /**
         * 添加购物车
         */
        "post:add_cart":{
            "params":{
                //商品id
                "product_id":2,
                //规格id（非规格设置id）
                "stid":236,
            },
            "data":{

            }
        },

    },

}