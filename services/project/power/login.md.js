var json = {
    //登录
    "/views/power/login":{

        "post:login":{
            "params":{
                "username":"",
                "password":"",
            },
            "data":{
    
            }    
		},
		
		//静默登录
        "post:auto_login":{
            "params":{
				//前端获取的token
                "token":"",
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