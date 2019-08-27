var json = {
	    //获取主办方活动列表
		"/views/action/organiger":{

			//获取主办方活动列表
			"get:load":{
				
				"params":{
					//主办方id
					"author_id":1,
					//类型id
					"type":1,
				},
				"data":{
					"author": {
						"id": 1,
						"created": 0,
						//上次登录时间
						"time_last": 0,
						//上次登录ip
						"time_ip": "",
						//等级
						"grade": 1,
						//用户名
						"username": "123",
						//密码
						"password": "123",
						//联系人
						"link_name": "商户1联系人",
						//联系电话
						"link_mobile": "138984844547",
						//名称
						"name": "大锅火锅城",
						//类型id
						"cate_id": 1,
						//头像
						"icon": "http:\/\/pic115.nipic.com\/file\/20161108\/2077063_092244321000_2.jpg",
						//顶部图片
						"headimg": "http:\/\/pic141.nipic.com\/file\/20170925\/9885883_152808300000_2.jpg",
						//公告介绍
						"des": "火锅好吃的餐馆",
						//销量
						"count_sale": 111,
						//营业时间
						"time_busess": "营业事件：7：00-24：00",
						//地址
						"address": "XX路42号又拐",
						//经度
						"longitude": "111",
						//纬度
						"latitude": "11",
						//营业资质图片
						"licenseimgs": "http:\/\/img1.cache.netease.com\/catchpic\/B\/B0\/B03F906C05258AECA3EF4ED94D753D56.jpg",
						//详细介绍
						"content": "",
					},
					"list": [
						{
							"id": 1,
							"created": 0,
							//状态（0报名中，1进行中，2已结束，3违规）
							"state": 0,
							//是否免费 是0, 否1
							"is_free": 1,
							//是否在首页显示
							"is_index": 1,
							//类型（社区活动0，商家活动1）
							"type": 0,
							//名称
							"name": "商家1活动1",
							//列表图片
							"listimg": "http:\/\/p0.so.qhimgs1.com\/sdr\/400__\/t0144f3791b24151a6c.jpg",
							//顶部图片
							"headimg": "http:\/\/p0.so.qhimgs1.com\/sdr\/400__\/t0144f3791b24151a6c.jpg",
							//主题类型id
							"cate_id": 1,
							//发起方id
							"author_id": 1,
							//发起人名称
							"author_name": "商家1",
							//开始时间
							"time_start": 1565054020,
							//结束时间
							"time_end": 1565313220,
							//活动地址
							"address": "活动地址展示文字",
							//精度
							"longitude": "11",
							//纬度
							"Latitude": "11",
							//详细介绍
							"content": "",
							//类型
							"cate_name": "活动类型1"
						},
				
						]
					}
				}
	
		}	
}