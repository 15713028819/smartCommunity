var json = {
    /**
     * 购物车相关数据
     */
    "/views/order/cart":{
        //获取购物车列表
        "get:load":{
            "params":{
            },
            "data":{
                "2": {
                    "id": 1,
                    "created": 0,
                    //是否选中
                    "checked": 1,
                    "user_id": 1,
                    "area_id": 1,
                    "cbid": 262,
                    "csid": 263,
                    "stid": 236,
                    "product_id": 2,
                    //购物数量
                    "count": 1,
                    "time_update": 0,
                    //名称
                    "name": "金龙鱼生态稻米",
                    //展示图
                    "img": "20171219\/1513655731752d994.jpg",
                    //价格
                    "price": 35.5,
                    //规格
                    "standname": "5kg"
                }
            }
        },

        /**
         * 添加购物车  前端用不到
         */
        // "post:add_cart":{
        //     "params":{
        //         //商品id
        //         "product_id":2,
        //         //规格id（非规格设置id）
        //         "stid":236,
        //     },
        //     "data":{

        //     }
        // },

        /**
         * 单个购物车选中状态
         */
        "post:check":{
            "params":{
                //购物车的id
                "id":1,
                //选中 或者 取消选中  0 取消选中  1选中
                "check":1,
            },  
            "data":{
            }
        },
        /**
         * 全部购物车选中状态
         */
        "post:check_all":{
            "params":{
                //选中 或者 取消选中  0 取消选中  1选中
                "check":1,
            },
            "data":{

            }
        },
        /**
         * 当个购物车商品+1
         */
        "post:addpro":{
            "params":{
                //购物车id
                "id":1,
            },
            "data":{
            }
        },
        /**
         * 当个购物车商品-1
         */
        "post:reducepro":{
            "params":{
                //购物车id
                "id":1,
            }
        },
        /**
         * 删除购物车选中项
         */
        "post:delete":{
            "params":{
            },
            "data":{
                
            }
        },

    },

}