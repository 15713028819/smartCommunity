// import Vue from 'vue';
import { MOCK } from '@/jm.config';

/**
 * 执行get请求
 * 
 * @param {ParamRequest} req request参数对象
 */
export function httpGet(req) {
    if (process.env.NODE_ENV !== 'production' && MOCK && req.mock) {
        mock(req);
        return;
    }
    request(req, 'GET', true);
}

/**
 * 执行post请求
 * 
 * @param {ParamRequest} req request参数对象
 */
export function httpPost(req) {
    if (process.env.NODE_ENV !== 'production' && MOCK && req.mock) {
        mock(req);
        return;
    }
    request(req, 'POST', true);
}

/**
 * 执行文件上传请求
 * 
 * @param {object} data 需要上传的数据
 */
export function httpUpload(data) {

}

/**
 * 执行数据上报请求
 * 
 * @param {object} data 需要上报的数据
 */
export function httpReport(data) {

}

/**
 * 执行获取jssdk请求
 */
export function httpJssdk() {

}

// ----------------------------------------------------------------------------
// 私有函数部分
// ----------------------------------------------------------------------------

/**
 * 返回mock数据
 * 
 * @param {ParamRequest} req request参数对象
 */
function mock(req) {

    // typescript的类型辨识
    if (req.mock) {
		
		// 启动加载器
		req.loader.start(undefined, req.vue);

        // 计算全部概率，和各起始点和终结点
        const randSuccess = MOCK.random.success;
        const randPower = randSuccess + MOCK.random.failPower;
        const randLogic = randPower + MOCK.random.failLogic;
        const randError = randLogic + MOCK.random.failError;
        const randNetwork = randError + MOCK.random.failNetwork;
        const randOffline = randNetwork + MOCK.random.failOffline;

        // 取随机数
        const rand = Math.round(Math.random() * randOffline);
		
		// 设置result变量
		let result;

        // 判断返回success
        if (rand <= randSuccess) {

            // 声明初值
            result = {
                code: 0,
                msg: '',
                data: {}
            };

            // 如果req.mock的长度大于0，代表有返回的随机列表
            if (req.mock.length > 0) {

                // 如果req.mock的长度大于1，则需要进行随机摘取
                if (req.mock.length > 1) {
                    const r = Math.floor(Math.random() * req.mock.length);
                    const data = req.mock[r];
                    if (data) {
                        result['data'] = data;
                    }
                } 
                
                // 否则，即；req.mock长度等于1，则直接将result.data赋值为req.mock[0]
                else {
                    result['data'] = req.mock[0];
                }
            }
			setTimeout(()=> {
				req.success(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }

        // 判断返回fail.power
        else if (rand > randSuccess && rand <= randPower) {
            result = {
                code: 1,
                msg: 'mock: 没有权限'
            };
			setTimeout(()=> {
				req.fail.power(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }

        // 判断返回fail.logic
        else if (rand > randPower && rand <= randLogic) {
            result = {
                code: 2,
                msg: 'mock: 逻辑错误'
            };
			setTimeout(()=> {
				req.fail.logic(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }

        // 判断返回fail.error
        else if (rand > randLogic && rand <= randError) {
            result = {
                code: 3,
                msg: 'mock: 系统错误'
            };
			setTimeout(()=> {
				req.fail.error(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }

        // 判断返回fail.network
        else if (rand > randError && rand <= randNetwork) {
            result = {
                code: 4,
                msg: 'mock: 网络错误'
            };
			setTimeout(()=> {
				req.fail.network(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }

        // 判断返回fail.offline
        else {
            result = {
                code: 5,
                msg: 'mock: 没有联网'
            };
			setTimeout(()=> {
				req.fail.offline(result, req.vue);
				req.loader.end(result, req.vue);
			}, MOCK.duration);
        }
    }
}

/**
 * 实际的请求执行函数
 * 
 * @param {ParamRequest} req request参数对象
 */
function request(req, method, isComputeURL = false) {
	
    // ------------------------------------------------------ 设置部分

    // 启动加载器
    req.loader.start(undefined, req.vue);

    // 设置method
    req['method'] = method;

    // 设置header
    req['header'] = req.header ? req.header : {
		'Authorization': '123123',
        'content-type': 'application/x-www-form-urlencoded'
    };

    // 计算url
    if (isComputeURL && req.preurl) {
        switch (process.env.NODE_ENV) {
            case 'production':
                req.url = req.preurl.production + req.url;
                break;
            case 'development':
                req.url = req.preurl.development + req.url;
                break;
            default:
                break;
        }
    }

    // 查看是否联网
	uni.getNetworkType({
		success: (res)=> {

			// 非H5端，无网络，直接进入无网络管道，并在执行完管道函数后，直接返回（不进行网络请求）
			if (res.networkType === 'none') {

				// 声明返回对象
				const result = {
					code: 5, 
					msg: '没有联网'
				};

				// 调用offline管道函数
				req.fail.offline(result, req.vue);

				// 结束加载器
				req.loader.end(result, req.vue);

				// 返回
				return;
			}

			// 非H5端，有网络，执行访问请求
			action(req);
		}
	});
}

/**
 * 实际的请求执行函数
 * 
 * @param {ParamRequest} req request参数对象
 */
function action(req) {

    // 请求网络
    uni.request({
		
		// 设置属性
        method: req.method,
        header: req.header,
        url: req.url,
        data: req.data,
        dataType: 'text',
        responseType: 'text',
        // mode: 'no-cors',
        // credentials: 'include',
		
		// 成功回调
		success: (res)=> {
			
			// 取回状态码和数据
			let {statusCode, data} = res;
	
			// 判断状态码是否出错，如果出错，则进入出错管道（注意，404在这里是抓不到的）
			if (statusCode !== 200) {
				req.fail.error({code: 3, msg: '状态码出错'}, req.vue);
				return;
			}
	
			// 使用解析器，将数据解析成RestfulResult
			if (!data) data = '';	// 注意由于uni-app返回的data可能是undefined，所以如果为undefined，则设其值为空字符串
			const result = req.parse(data);

			// 根据result.code，确定需要调用哪个管道函数的名称
			switch (parseInt(result.code.toString())) {
				case 0:
					req.success(result, req.vue);
					break;
				case 1:
					req.fail.power(result, req.vue);
					break;
				case 2:
					req.fail.logic(result, req.vue);
					break;
				case 3:
					req.fail.error(result, req.vue);
					break;
				case 4:
					req.fail.network(result, req.vue);
					break;
				case 5:
					req.fail.offline(result, req.vue);
					break;
				default:
				break;
			}
			
			// 结束loader
			req.loader.end(result, req.vue);
		},
		
		// 失败回调
		fail: (res)=> {
			// 声明错误对象
			const result = {
				code: 3,
				msg: '访问出错'
			};
	
			// 调用错误管道函数
			req.fail.error(result, req.vue);
	
			// 结束loader
			req.loader.end(result, req.vue);
		}
    })
}


// ----------------------------------------------------------------------------
// 私有类型定义部分
// ----------------------------------------------------------------------------

// /**
//  * http restful 返回结构
//  */
// export type RestfulResult = {
//     code: number;               // 状态码
//     msg: string;                // 消息
//     data?: any;                 // 数据
// }

// /**
//  * 加载处理器
//  */
// export type HandlerLoader = (res?: RestfulResult, vue?: Vue) => void; 

// /**
//  * http数据解析处理器
//  */
// export type HandlerParse = (text: string) => RestfulResult; 

// /**
//  * http管道处理器
//  */
// export type HandlerPipe = (res: RestfulResult, vue?: Vue)=> void;

// /**
//  * http请求参数对象
//  */
// export type ParamRequest = {
// 		vue?: Vue,									// Vue对象
//     	method?: 'GET' | 'POST',                    // 请求方法                        
//     	header?: object,                            // 请求头
// 		mock?: any[],                               // mock数据列表  
// 		preurl?: {                                  // 预置url
// 	    	key: string,                            // 服务器端申请的key值
// 	    	dev: string,                            // 开发环境url
// 	    	prod: string,                           // 生产环境url
// 		},
//     	url: string,                                // url
// 		data?: object,                              // 参数
// 		loader: {                                   // 加载器
// 	    	start: HandlerLoader,                   // 请求开始时的回调函数
// 	    	end: HandlerLoader,                     // 请求结束时的回调函数
// 		},        
//     parse: HandlerParse,                        // 解析器
//     success: HandlerPipe,                       // 成功回调：对应code: 0
// 		fail: {
// 			power: HandlerPipe,                     // 没有权限：对应code: 1
// 			logic: HandlerPipe,                     // 逻辑错误：对应code: 2
// 			error: HandlerPipe,                     // 程序错误：对应code: 3
// 			network: HandlerPipe,                   // 网络错误：对应code: 4
// 			offline: HandlerPipe                    // 没有联网：对应code: 5
// 		}
// }
