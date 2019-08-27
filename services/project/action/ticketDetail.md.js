var json = {
	//我的票务详情
	"/views/action/ticketDetail":{
		//获取我的票务详情
		"get:load":{
			"params":{
				//票务id
				"id":1,
			},
			"data":{
				"info":{
					"id": 103,
					"created": 0,
					//状态（待付款，待参加，审核中，已验票，待退票，退票）
					"state": 2,
					//是否免费
					"is_free": 1,
					//退票时间
					"time_return": 0,
					//支付时间
					"time_pay": 1565161331,
					//是否需要审核
					"must_verify": 1,
					//活动id
					"activity_id": 1,
					//票务id
					"ticket_id": 2,
					//用户id
					"user_id": 1,
					//参加活动记录id
					"log_id": 34,
					//取票码
					"code": "JEVU1565161331",
					//票务名称
					"name": "测试票务2",
					//票务价格
					"price": 100
				},
				//支付信息
				"payinfo": {
					"key": "heshequwuyewxapp",
					"attach": "ticket",
					"body": "购票",
					"out_trade_no": "OHTH1565161331",
					"total_fee": 10000,
					"trade_type": "APP"
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
}