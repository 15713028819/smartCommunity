var json = {
    //获取商品列表
    "/views/shop/prodList":{
        "get:load":{
            "params":{
                //非必填  大类id
                "cbid":1,
                //非必填  小类id
                "csid":2,
                //非必填  大类搜索关键词
                "keywords":"",
            },
            "data":{
                //列表总条数
                "count": 84,
                //商品列表
                "list": [
                    {
                        "id": 2091,
                        //名称
                        "name": "香满园特选长粒香米东北大米",
                        //标签
                        "brand": "香满园",
                        //大类id
                        "cbid": 262,
                        //小类id
                        "csid": 263,
                        //展示小图
                        "img_small": "20171026\/1508987030969qolx.jpg",
                        //展示大图
                        "img_big": "",
                        //当日价格
                        "daily_price": 0,
                        //排序
                        "sort": 0,
                        //浏览量
                        "visited": 422,
                        //详情
                        "content": "<p>\n\t<span style=\"font-size:14px;\"><strong>图片仅供参考，请以收到实物为准。<\/strong><\/span>\n<\/p>",
                        //卖价
                        "price": 36.899999999999999,
                        //旧价格 显示为0则没有设置
                        "old_price":0,
                    },        
                ]
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