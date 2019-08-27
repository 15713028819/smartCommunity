var json = {
	//获取缴费详情
    "/views/prop/fee/detail":{
        "get:load":{
            "params":{
                //缴费条目的id
                "id":1,
            },
            "data":{
                //订单信息
                "info":{
                    "id": 2,
                    "created": 1565073251,
                    //状态（0未审核， 1已审核， 2已缴费）	
                    "state": 1,
                    //订单编号
                    "order_code": "fsdds",
                    //类型id
                    "type_id": 0,
                    //类型名称
                    "type_name": "",
                    //物业id
                    "pm_id": 0,
                    //物业名称
                    "pm_name": "",
                    //小区id
                    "cmt_id": 0,
                    //小区名称
                    "cmt_name": "",
                    //批次id
                    "batch_id": 0,
                    //批次名称
                    "batch_name": "",
                    //用户id
                    "user_id": 1,
                    //用户名称
                    "user_name": "",
                    //用户手机
                    "user_mobile": "",
                    //支付时间
                    "time_pay": 0,
                    //应付金额
                    "amount": 100,
                    //支付金额
                    "amount_real": 0,
                    //优惠金额
                    "count_coupon": 0,
                    //订单名称
                    "name": "测试缴费",
                    //备注
                    "mark": ""
                },
                //支付需要的数据
                "pay_info": {
                    "key": "heshequwuyewxapp",
                    "attach": "shop",
                    "body": "物业缴费",
                    "out_trade_no": "df454sd4463633",
                    "total_fee": 10000,
                    "trade_type": "APP"
                }
        
            },
    
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
    },
}