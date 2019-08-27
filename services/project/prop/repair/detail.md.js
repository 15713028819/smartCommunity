var json = {
    //获取报修详情
    "/views/prop/repair/detail":{
        "get:load":{
            "params":{
                //报修条目id
                "id":0,
            },
            "data":{
                "id": 6,
                "created": 1565077089,
                //状态（0待维修，1维修中，2维修完成 ）
                "state": 2,
                //物业id
                "pm_id": 0,
                //物业名称
                "pm_name": "",
                //小区id
                "cmt_id": 0,
                //小区名称
                "cmt_name": "",
                //用户id
                "user_id": 1,
                //类型（0房屋报修，1水电报修，2车位报修）
                "type": 0,
                //联系电话
                "mobile_submit": "13654567778",
                //反馈内容
                "text_submit": "修东西，马上过来修吧",
                //图片
                "imgs_submit": "http:\/\/p1.so.qhmsg.com\/sdr\/400__\/t01f1cfbadbe570e606.jpg",
                //报修联系人
                "linkman_repair": "李师傅",
                //报修人电话
                "mobile_repair": "13544864867",
                //报修内容
                "text_repair": "修了",
                //报修图片
                "imgs_repair": "http:\/\/p1.so.qhmsg.com\/sdr\/400__\/t01f1cfbadbe570e606.jpg",
                //报修评等级（0没有，1非常满意，2比较满意，3一般，4不满意）
                "grade": 0
            },
        },

        //提交评级
        "post:set_grade":{
            "params":{
                //id   必传
                "id":6,
                //级数  数字 int
                "grade":6,
            },
            "data":{
    
            }
    
        }
    },

}