var json = {
    /**
     * 订单详情相关数据
     */
    "/views/order/detail":{
        //获取订单详情
        "get:load":{
            "params":{
                //订单id
                "id":1,
            },
            "data":{
                //
                "id": 1,
                //订单号（字符串型）
                "orderid": "CRWN1564128829",
                //用户id
                "uid": 1,
                //
                "shareid": 0,
                //
                "share_money": 0,
                //
                "share_level": 0,
                //
                "isshared": 0,
                //
                "cpid": 0,
                //
                "ctid": 0,
                //
                "aid": 1,
                //
                "eid": 0,
                //
                "mid": 0,
                //物流员
                "area_manager": "史力龙",
                //物流员电话
                "area_mobile": "18632253537",
                //
                "express": "",
                //
                "express_mobile": "",
                //收货人名称
                "take_name": "受货人",
                //收货人手机
                "take_mobile": "1346302587",
                //收货人填写地址
                "take_address": "手袋地址",
                //取货超市名称
                "supermarket": "1",
                //订单状态	0:未付款, 1:未发货, 2:已发货, 3:已完成, 4:已取消, 5:已退货
                "status": 4,
                //所购买所有商品名称(逗号','隔开)
                "name": "金龙鱼生态稻米",
                //第一个商品图片
                "img": "20171219\/1513655731752d994.jpg",
                //支付方式	0:余额全额支付, 1:微信支付, 2:货到付款
                "paytype": 1,
                //是否已支付
                "ispay": 0,
                //总价格
                "amount": 122.7,
                //该单的配送费(只是记录用)
                "fare": 0,
                //该单是否需要配送
                "isfare": 0,
                //余额支付金额
                "pay_cash": 0,
                //在线支付金额
                "pay_online": 0,
                //货到付款金额
                "pay_cod": 0,
                //
                "pay_coupon": 0,
                //
                "returned": 0,
                //
                "point": 123,
                //
                "mark": "备注信息",
                //提交时间
                "time_submit": 1564128829,
                //收货时间
                "time_receive": 0,
                //完成时间
                "time_completed": 0,
                //取消时间
                "time_cancel": 1564972605,
                //
                "content": "",
                //
                "isprint_manager": 0,
                //
                "isprint_express": 0,
                //
                "express_completed": 0,
                //
                "manager_completed": 0,
                //
                "time_manager_completed": 0,
                //
                "time_express_receive": 0,
                //
                "time_express_completed": 0,
                //
                "survey_sex": 0,
                //
                "survey_age": "",
                //
                "survey_self": 0,
                //
                "did": 0,
                //
                "isdist": 0,
                //
                "speed": 0,
                //
                "quality": 0,
                //
                "attitude": 0,
                //
                "service": 0,
                //
                "comment": "",
                "item": [
                    {
                        //
                        "id": 465919,
                        //订单号（字符串型）
                        "orderid": "CRWN1564128829",
                        //订单id
                        "oid": 1,
                        //用户id
                        "uid": 1,
                        //城市id
                        "ctid": 0,
                        //商圈id
                        "aid": 1,
                        //大类id
                        "cbid": 262,
                        //小类id
                        "csid": 263,
                        //
                        "cmid": 0,
                        //商品id
                        "pid": 2,
                        //规格id
                        "stid": 236,
                        //商品名称
                        "name": "金龙鱼生态稻米",
                        //规格名称
                        "stand": "5kg",
                        //商品图片
                        "img": "20171219\/1513655731752d994.jpg",
                        //购买数量
                        "count": 3,
                        //单价
                        "price": 40.899999999999999,
                        //提交订单时间
                        "time_submit": 1564128829,
                        //订单条目状态	0:未付款, 1:未发货, 2:已发货, 3:已完成, 4:已取消, 5:已退货
                        "status": 4
                    },        
                ]
            }
        },
        //取消订单
        "post:cancel":{
            "params":{
                //订单id
                id:1,
            },
            "data":{

            }
        },

        //订单评论
        "post:comment":{
            "params":{
                //订单id
                "id":1,
                //评论内容
                "comment":"评论内容",
            },
            "data":{

            }
        },

        //获取下单信息
        "post:get_pay":{
            "params":{
                //订单id
                "id":1,
            },
            "data":{
                "key" : "heshequwuyewxapp",
                "attach" : "shop",
                "body" : '和社区购物',
                "out_trade_no" :"DFDHGJFJHr747576765",
                "total_fee" : 10000,
                "trade_type" : "APP",
            }
        },
        
        //支付成功
        "post:pay_ok":{
            "params":{
            },
            "data":{
            }
        }

    },

}