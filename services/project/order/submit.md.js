var json = {
    /**
     * 提交订单
     */
    "/views/order/submit":{

        //获取订单下单前数据
        "get:load":{
            "params":{
                "take_id": 1,
            },
            "data":{
                //收货地址
                "take": {
                    "id": 3,
                    "created": 0,
                    //是否为默认收货地址
                    "is_default": 1,
                    "user_id": 1,
                    //收货人名称
                    "name": "年底111",
                    //收货人电话
                    "mobile": "1213321321",
                    //收货人地址
                    "address": "发送到发送到发送到",
                    //经度
                    "longitude": "11",
                    //纬度
                    "latitude": "111"
                },
                //用户余额
                "user_cash": 0,
                //购物车列表
                "cart_list": {
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
                        "count": 1,
                        "time_update": 0,
                        //购物车商品名称
                        "name": "金龙鱼生态稻米",
                        //展示图片
                        "img": "20171219\/1513655731752d994.jpg",
                        //价格
                        "price": 35.5,
                        //规格
                        "standname": "5kg"
                    }
                },
                //配送费
                "send_fee": 3,
                //商品总价
                "count": 35.5,
                //总计
                "sum_count": 38.5        
            }
        }
    },

    /**
     * 获取下单支付数据
     */
    "post:get_pay":{
        "params":{
			"paytype": 0,//    支付方式   0 余额支付 ，1  微信或者混合支付  
			"isusecash":0,//   是否使用余额  0  1
			"takeid":1,//      收货地址id
			"mark":"备注信息"   //      备注信息（非必传）

        },
        "data":{
            "code": 0,
            "msg": "订单下单成功",
            "data": {
                //下面是支付需要的信息 请按照 App支付信息上传  大小写可能需要变化
                //////////////////////////////////
                "key": "heshequwuyewxapp",
                "attach": "shop",
                "body": "和社区购物",
                "out_trade_no": "IHDA1564986501",
                "total_fee": 4090,
                "trade_type": "APP"
                //////////////////////////////////
            }    
        }
    },

	//支付成功
    "post:pay_ok":{
        "params":{
            //订单号码
            "code":'FFJJKIL678988787'
        },
        "data":{

        }
    }

}