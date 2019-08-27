var json = {
	//我的票务列表
	"/views/action/myTicket":{
		//获取我的票务列表
		"get:load":{
			"params":{
				//状态（0:待付款，1待参加，2审核中，3已验票，4待退票，5退票）
				"state":1,
			},
			"data":[
				{
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
					"name": "测试票务2"
				},
	
			]
	
		}
	},
}