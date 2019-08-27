var json = {
    "/views/user/cash/deposit":{

        //充值
        "post:recharge":{
            "params":{
                //充值金额， 必须是数字
                "count":10,
            },
            "data":{
                //下面是支付需要的信息 请按照 App支付信息上传  大小写可能需要变化
                //////////////////////////////////
                "key": "heshequwuyewxapp",
                "attach": "cash",
                "body": "充值",
                "out_trade_no": "IHDA1564986501",
                "total_fee": 4090,
                "trade_type": "APP"
                //////////////////////////////////
            }
        },

        //充值成功
        "post:pay_ok":{
            "params":{
                //充值订单号
                "code":"FYUF46546776",
            },
            "data":{
            }
        },
        
    }
}