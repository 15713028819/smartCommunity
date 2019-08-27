var json = {
    /**
     *商品详情
     */
    "/views/shop/prodDetail":{

        //获取商品详情
        "get:load":{
            "params":{
                //商品id
                "id":1,
            },
            "data":{
                "stand": [
                    {   
                        //规格id 提交购物车需要
                        "id": 60,
                        //名称
                        "name": "550ml",
                        //展示图
                        "img": "20171021\/1508553826977o1fs.jpg",
                        //价格
                        "price": 3.2999999999999998,
                        //旧的价格  没有的话 没有设置
                        "old_price": 0
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



    }

}