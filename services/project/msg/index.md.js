var json = {
	    /**
     * 获取消息首页
     */
    "/views/msg/index":{

		//获取首页消息
        "get:load":{
            "params":{

            },
            "data":{
                //系统消息
                "system_msg": [
                    {
                        "id": 0,
                        "created": 0,
                        //状态（已发布，已驳回）
                        "state": 0,
                        //类型（0系统，1社区，2商家）
                        "type": 0,
                        //发起方id
                        "author_id": 0,
                        //标题
                        "title": "标题",
                        //图片
                        "img": "http:\/\/p1.so.qhmsg.com\/sdr\/400__\/t01f1cfbadbe570e606.jpg",
                        //跳转的连接
                        "url": "",
                        //详细介绍
                        "content": ""
                    }
                ],
                //小区消息
                "community_msg": [
                    {
                        "id": 9,
                        "created": 0,
                        "state": 0,
                        "type": 1,
                        "author_id": 0,
                        "title": "标题2",
                        "img": "http:\/\/p1.so.qhmsg.com\/sdr\/400__\/t01f1cfbadbe570e606.jpg",
                        "url": "",
                        "content": ""
                    }
                ],
                //商家消息
                "trade_msg": [
                    {
                        "id": 10,
                        "created": 0,
                        "state": 0,
                        "type": 2,
                        "author_id": 0,
                        "title": "标题3",
                        "img": "http:\/\/p1.so.qhmsg.com\/sdr\/400__\/t01f1cfbadbe570e606.jpg",
                        "url": "",
                        "content": ""
                    }
                ]
        
            }
    
        }

    },

}