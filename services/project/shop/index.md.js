var json = {
    /**
     * 商城首页
     */
    "/views/shop/index":{
		"get:load":{
		    "params":{
		
		    },
		    "data":{
		        //热搜词汇
		        "search_rec": [
		            {
		                "id": 1,
		                "keyword": "西瓜",
		                "sort": 1
		            },
		        ],
		        //轮播图
		        "banner": [
		            {
		                "id": 1,
		                "created": 0,
		                //广告位唯一标识
		                "unique": 100,
		                //广告位类型（app内跳转，网址跳转）
		                "type": 0,
		                //广告位名称
		                "name": "商城轮播",
		                //展示图
		                "img": "https:\/\/desk-fd.zol-img.com.cn\/g5\/M00\/02\/00\/ChMkJlbKw6iISQ3RAAPmharbU-IAALG6gIuG_IAA-ad876.jpg",
		                //跳转链接
		                "url": "",
		                //排序
		                "sort": 0
		            }
		        ],
		        //类别
		        "cate": [
		            {
		                //类别id
		                "id": 353,
		                "fid": 0,
		                "sid": 0,
		                //名称
		                "name": "推荐类别",
		                //展示图片
		                "img": "20180828\/1535428570859f1ut.jpg",
		                "show": 1,
		                "sort": 0,
		                "recommend": 0
		            },
		        ],
		        "pro": {
		            "1": {
		                "id": 1,
		                "created": 0,
		                //类别名称
		                "name": "类别1",
		                //展示图
		                "img": "",
		                "sort": 0,
		                "list": [
		                    {
		                        "id": 2091,
		                        //名称
		                        "name": "香满园特选长粒香米东北大米",
		                        //标签
		                        "brand": "香满园",
		                        //大类id
		                        "cbid": 262,
		                        //小类id
		                        "csid": 263,
		                        //展示小图
		                        "img_small": "20171026\/1508987030969qolx.jpg",
		                        //展示大图
		                        "img_big": "",
		                        //当日价格
		                        "daily_price": 0,
		                        //排序
		                        "sort": 0,
		                        //浏览量
		                        "visited": 422,
		                        //详情
		                        "content": "<p>\n\t<span style=\"font-size:14px;\"><strong>图片仅供参考，请以收到实物为准。<\/strong><\/span>\n<\/p>",
		                        //卖价
		                        "price": 36.899999999999999,
		                        //旧价格 显示为0则没有设置
		                        "old_price":0,
		                    }
		                ]
		            },
		        }  
		    },
		},

        /**
         * 获取商圈信息
         */
        "get:load_area":{
            "params":{

            },
            "data":[
                {
                    "id": 1,
                    //城市id
                    "ctid": 1,
                    //商圈名称
                    "name": "丽景蓝湾商圈",
                    //商圈管理人
                    "manager": "史力龙",
                    //商圈管理人用户id
                    "uid": 63011,
                    //管理人手机
                    "mobile": "18632253537",
                    //超市名称
                    "supermarket": "1",
                    //介绍
                    "contact": "丽景蓝湾商圈配送范围：恒祥北大街以西，七一路以北，翠园街以东，北三环以南，荣联天下城，芦庄村，尚达绿都，明珠佳苑，新儿童医院",
                    //地址
                    "address": "1",
                    //x坐标
                    "x": "",
                    //y坐标
                    "y": "",
                    //经度
                    "longitude": "",
                    //纬度
                    "latitude": "",
                    //覆盖范围最小横坐标
                    "xmin": "",
                    //覆盖范围最大横坐标
                    "xmax": "",
                    //覆盖范围最小纵坐标
                    "ymin": "",
                    //覆盖范围最大纵坐标
                    "ymax": "",
                    //银行卡号
                    "banknumber": "",
                    //开户银行
                    "bankname": "",
                },        
            ]
        },

        /**
         * 修改自己的商圈
         */
        "post:set_area":{
            "params":{
                "area_id":1,
            },
            "data":{

            }
        },
		
		/**
		 * 添加购物车
		 */
		"post:add_cart":{
		    "params":{
		        //商品id
		        "product_id":2,
		        //规格id（非规格设置id）
		        "stid":236,
		    },
		    "data":{
		
		    }
		},

    },

}