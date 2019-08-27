var json = {
    //获取消息详情
    "/views/msg/detail":{
        //获取消息详情
        "get:load":{
            "params":{
                //消息id
                "id":1,
            },
            "data":{
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
    
        },
        //已读
        "post:read":{
            "params":{
                //消息id
                "msg_id":1,
            },
            "data":{

            }
        }
    }
}