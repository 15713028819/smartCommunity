var json = {
    "/views/power/forget":{

        /**
         * 获取验证码
         */
        "get:get_forgetcode":{
            "params":{

            },
            "data":{
                //验证码
                "forgetcode":"156745",
            }    
        },

        /**
         * 注册
         */
        "post:change_password":{
            "params":{
                //用户名
                "username":"123",
                //密码
                "password":"123",
                //验证码
                "forgetcode":"464553",
            },
            "data":{
                //验证码
                "forgetcode":"156745",
            }    
        }

    }
}