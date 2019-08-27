var json = {
    //提交购票信息
    "/views/action/join":{

		/**
		 * 获取活动发行的票券
		 */
		"get:load_ticket":{
			"params":{
				//活动id
				"activity_id":1,
			},
			"data":[
				{
					'id':1,
					'created':1564706868,
					//是否免费
					'is_free':1,
					//是否需要审核
					'must_verify':1,
					//活动id
					'activity_id':1,
					//票务名称
					'name':"测试票务",
					//价格
					'price':100,
					//总数
					'count':99,
					//每人限购张数
					'limit':2,
				},
			]
		},

		/**
		 * 提交购票信息
		 */
        "post:submit":{
            "params":{
                //活动id
                "activity_id":1,
                //申请人姓名
                "name":"姓名",
                //申请人电话
                "mobile":"12345678777",
                //申请人性别
                "sex":"男",
                //申请人年龄
                "age":"27",
                //备注
                "mark":"备注信息测试",
                //购票信息  用 ， 分割   1（票务id）：2（票务数量）
                "ticket_info":"1:10,2:10",
            },
            "data":{
                //是否需要支付
                "pay": true,
                //支付信息
                "data": {
                    "key": "heshequwuyewxapp",
                    "attach": "ticket",
                    "body": "购票",
                    "out_trade_no": "PZSV1565159849",
                    "total_fee": 100000,
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
        

    },

}