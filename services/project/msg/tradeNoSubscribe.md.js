var json = {

    /**
     * 未关注的商家
     */
    "/views/msg/tradeNoSubscribe":{
        "get:load":{
            "params":{

            },
            "data":{
                //关注的商家
                "trade_list": [
                    [
                        {
                            //商家id
                            "id": 1,
                            //商家头像
                            "icon": "http:\/\/pic115.nipic.com\/file\/20161108\/2077063_092244321000_2.jpg",
                            //商家名称
                            "name": "大锅火锅城"
                        }
                    ]
                ],
                //未关注的商家的消息
                "list": [
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
                ]
        
            }
        }
    },

}