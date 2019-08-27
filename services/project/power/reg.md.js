var json = {
	//注册
	"/views/power/reg":{

		/**
         * 获取验证码
         */
        "get:get_forgetcode":{
            "params":{

            },
            "data":{
                //验证码
                regcode:"156745",
            }    
        },

		//注册
		"post:reg":{
			"params":{
				"username":"",
				"password":"",
			},
			"data":{
	
			}    
		},

		//游客登录
        "post:visitor":{
            "params":{
            },
            "data":{
    
            }    
        },

	},
}