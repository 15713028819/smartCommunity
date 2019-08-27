var json = {

    /**
     * 动态添加页面
     */
    "/views/talk/add":{
        //获取动态类别
        "get:load_cate":{
            "params":{

            },
            "data":[
                {
                    "id": 1,
                    "created": 0,
                    "name": "类别1",
                    "img": "",
                    "sort": 0
                },
                {
                    "id": 22,
                    "created": 0,
                    "name": "类别2",
                    "img": "",
                    "sort": 0
                }
            ]
        },

        //添加动态
        "post:submit":{
            "params":{
                //类型id
                "cate_id":1,
                //发布的文字
                "text":"发布一条测试动态。发布一条测试动态。发布一条测试动态。发布一条测试动态。",
                //图片
                "imgs":"https://p1.ssl.qhimgs1.com/sdr/400__/t01ac1848132f94d2a1.jpg",
            },
            "data":{

            }
        }


    }

}