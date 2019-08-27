var json = {
    /**
     * 获取我的动态
     */
    "/views/user/talk/index": {
        "get:load":{
			"params": {
                //可选  最后一条的id 用于下拉查看  
                "last_id":1,
                //可选   类别id 用于筛选   
                "cate_id":1,
            },
            "data":{

                "22": {
                    "id": 22,
                    "created": 0,
                    //状态（0已发布，1已驳回，2已置顶）
                    "state": 0,
                    //物业id
                    "pm_id": 0,
                    //小区id
                    "cmt_id": 0,
                    //消息类型id
                    "cate_id": 2,
                    //用户id
                    "user_id": 1,
                    //消息内容
                    "text": "大师大萨达",
                    //图片
                    "imgs": "",
                    //点赞数
                    "count_goods": 100,
                    //评论数
                    "count_comment": 100,
                    //昵称
                    "nick": "HelloNI尼",
                    //头像
                    "head": "http:\/\/tx.haiqq.com\/uploads\/allimg\/110811\/1203035233-1.jpg",
                    //评论列表
                    "comment": [
                        {
                            "id": 25,
                            "created": 0,
                            //物业id
                            "pm_id": 0,
                            //小区id
                            "cmt_id": 0,
                            //消息类型id
                            "cate_id": 0,
                            //用户id
                            "user_id": 1,
                            //消息内容
                            "text": "评论3",
                            //动态消息id
                            "neighbor_id": 22,
                            //评论id
                            "comment_id": 0,
                            //昵称
                            "nick": "HelloNI尼",
                            //头像
                            "head": "http:\/\/tx.haiqq.com\/uploads\/allimg\/110811\/1203035233-1.jpg"
                        },        
                    ],
                }

            }
        },
        
        //点赞或者取消点赞  （自动）
        "post:good":{
            "params":{
                //动态id
                "neighbor_id":1,
            },
            "data":{

            }
        },

        //添加评论
        "post:add_comment":{
            "params":{
                //动态id
                "neighbor_id":1,
                //提交的字
                "text":"测试评论",
            },  
            "data":{

            }
        },

        //删除评论
        "post:delete_comment":{
            "params":{
                //评论的id
                "comment_id":1,
            },
            "data":{
                
            }
        }

    },


}