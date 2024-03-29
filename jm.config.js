/* *********************************************************************************
 * 环境设置
 * ---------------------------------------------------------------------------------
 * 取值说明
 * ---------------------------------------------------------------------------------
 * production: 	生产环境，使用生产环境配置项。一切调度信息失效，并收集错误、警告等信息上报到服务器
 * test: 		测试环境，使用测试环境配置项
 * develpment: 	开发环境，使用开发环境配置项
 * *********************************************************************************/
export const ENV = 'develpment';

/* *********************************************************************************
 * MOCK设置
 * ---------------------------------------------------------------------------------
 * 取值说明
 * ---------------------------------------------------------------------------------
 * MOCK可以设置为false（代表整个系统不使用mock）
 * 也可以设置为一个对象（必须遵守格式）
 * ---------------------------------------------------------------------------------
 * 对象字段说明
 * ---------------------------------------------------------------------------------
 * duration: 	模拟http时的持续时间，即访问后多长时间返回数据
 * random: 		各种情况发生的权重值
 * *********************************************************************************/
export default false;
// export const MOCK = {
// 	duration: 500,
// 	random: {
// 		success: 100,
// 		failPower: 50,
// 		failLogic: 50,
// 		failError: 50,
// 		failNetwork: 50,
// 		failOffline: 50
// 	}
// }

/* *********************************************************************************
 * 图标设置
 * ---------------------------------------------------------------------------------
 * 字段说明
 * ---------------------------------------------------------------------------------
 * src: 		字体内容。可以是url或base64数据
 * ---------------------------------------------------------------------------------
 * 参阅：https://weex.apache.org/zh/docs/modules/dom.html#addrule
 * *********************************************************************************/
export const ICON = {
	'src': "url('https://at.alicdn.com/t/font_1271977_m2vhyl6oere.ttf')"
}

/* *********************************************************************************
 * 图片设置
 * ---------------------------------------------------------------------------------
 * 自有字段说明
 * ---------------------------------------------------------------------------------
 * lazyload: 	是否启用列表图片懒加载（非weex自带，图片只有进入屏幕才加载）
 * ---------------------------------------------------------------------------------
 * weex字段说明
 * ---------------------------------------------------------------------------------
 * placeholder: 图片加载过程中显示的图片（懒加载也使用此图）。可以是普通url地址，也可以是base64图片数据
 * resize: 		和background-image的设置很相似。可选：contain, cover, stretch
 * quality: 	图片的质量。可选：original, normal, low, high, auto
 * autoBitmapRecycle: 控制当图片滚出屏幕时是否回收相关内存（仅Android）
 * ---------------------------------------------------------------------------------
 * weex字段，参阅：https://weex.apache.org/zh/docs/components/image.html
 * *********************************************************************************/
export const IMAGE = {
	lazyload: true,
	placeholder: 'https://cdn.dribbble.com/users/79978/screenshots/3892720/bliss_club.png',
	resize: 'stretch',
	quality: 'auto',
	autoBitmapRecycle: true
}

/* *********************************************************************************
 * 本地目录设置
 * ---------------------------------------------------------------------------------
 * 可以添加任意字段，每个字段都会在mixins/page混合注册为一个方法。如：DIR.image，会被解析为DIR_IMAGE方法
 * 此方法可以在引入minixs/page混合的页面的template标签里，直接使用该方法
 * 例子：<image :src="DIR_/static/image/image.png"></image>
 * *********************************************************************************/
export const DIR = {
	image: '@/static/image/',
	icon: '@/static/icon/',
	tabbar: '@/static/tabbar/',
	shop_prod: 'http://image.cdn.hesq.com.cn/shop/product/',
	shop_cate: 'http://image.cdn.hesq.com.cn/shop/category/',
	shop_stand: 'http://image.cdn.hesq.com.cn/shop/stand/',
	shop_area: 'http://image.cdn.hesq.com.cn/shop/area/',
}

/* *********************************************************************************
 * 内容分发网络设置
 * ---------------------------------------------------------------------------------
 * 可以添加任意字段，每个字段都会在mixins/page混合注册为一个方法。如：CDN.image，会被解析为CDN_IMAGE方法
 * 此方法可以在引入minixs/page混合的页面的template标签里，直接使用该方法
 * 例子：<image :src="CDN_/static/image/image.png"></image>
 * *********************************************************************************/
export const CDN = {
	image: ''
}

/* *********************************************************************************
 * URL设置
 * ---------------------------------------------------------------------------------
 * 前缀地址说明
 * ---------------------------------------------------------------------------------
 * 用于get、post类型的http访问时，设置到url之前的前缀
 * 如前缀地址为：https://www.baidu.com。url为：index.php
 * 则访问的实际地址为：https://www.baidu.com/index.php
 * data、centrum为引用地址
 * ---------------------------------------------------------------------------------
 * 具体地址说明
 * ---------------------------------------------------------------------------------
 * 用于report、upload类型的http访问时的固定url地址
 * 此时传递url参数给http是无效的
 * report、upload为具体地址
 * ---------------------------------------------------------------------------------
 * 字段说明
 * ---------------------------------------------------------------------------------
 * key: 		与服务端维定的key值（用于安全，以及标识客户端身份），没有可不填
 * development: 开发环境下的地址
 * test: 		测试环境下的地址
 * production:	生产环境下的地址
 * *********************************************************************************/
export const URL = {
	
	/**
	 * 前缀地址：数据业务地址
	 */
	data: {
		key: 			'',
		development: 	'http://hsqapp.sgboke.com/face/restful/',
		test: 			'http://hsqapp.sgboke.com/face/restful/',
		production: 	'http://hsqapp.sgboke.com/face/restful/'
		// production: 	'http://192.168.0.225:6079/face/restful/'
	},
	
	/**
	 * 前缀地址：中央业务地址
	 */
	centrum: {
		key: 			'',
		development: 	'',
		test: 			'',
		production: 	''
	},
	
	/**
	 * 具体地址：数据上报地址
	 */
	report: {
		key: 			'',
		development: 	'',
		test: 			'',
		production: 	''
	},
	
	/**
	 * 具体地址：文件上传地址
	 */
	upload: {
		key: 			'',
		development: 	'',
		test: 			'',
		production: 	''
	}
}

/* *********************************************************************************
 * 默认分享设置
 * ---------------------------------------------------------------------------------
 * 字段说明
 * ---------------------------------------------------------------------------------
 * title: 		分享标题
 * desc: 		文字说明
 * link: 		点击后的跳转地址
 * imageUrl:	图片URL
 * *********************************************************************************/
export const SHARE = {
	title: '测试title',
	desc: '',
	link: '',
	imgUrl: ''
}
