// ----------------------------------------------------------
// 默认配置
// ----------------------------------------------------------

const config = {
	
	// 自动（默认）的checkbox样式，可以根据您的设置进行选择
	autoStyle: 'cycle',
	
	// 是否启用动画
	isAnimation: false	
}

// ----------------------------------------------------------
// 通用样式
// ----------------------------------------------------------

// 外框通用样式
const box = {
	width: '80rpx',
	height: '40rpx',
	position: 'relative'
}

// 内部元素通用样式
const inner = {
	width: '36rpx',
	height: '36rpx',
	backgroundColor: '#fff',
	position: 'absolute'
}

// ----------------------------------------------------------
// 样式设置
// ----------------------------------------------------------

/**
 * 圆角形
 */
const radius = {
	
	// 盒子样式
	box: {
		
		// 未选中状态样式
		off: {
			...box,
			backgroundColor: '#ddd',
			borderRadius: '8rpx',
		},
		
		// 已选中状态样式
		on: {
			...box,
			backgroundColor: '#ff6666',
			borderRadius: '8rpx'
		},
	},	
	
	// 选中时对号样式
	inner: {
		
		// 未选中的状态
		off: {
			...inner,
			borderRadius: '8rpx',
			top: '2rpx',
			left: '2rpx'
		},
		
		// 已选中的状态
		on: {
			...inner,
			borderRadius: '8rpx',
			top: '2rpx',
			right: '2rpx'
		}
	}
}

/**
 * 圆形
 */
const cycle = {
	
	// 盒子样式
	box: {
		
		// 未选中状态样式
		off: {
			...box,
			backgroundColor: '#ddd',
			borderRadius: '750rpx',
		},
		
		// 已选中状态样式
		on: {
			...box,
			backgroundColor: '#CF1322',
			borderRadius: '750rpx'
		},
	},	
	
	// 选中时对号样式
	inner: {
		
		// 未选中的状态
		off: {
			...inner,
			borderRadius: '750rpx',
			top: '2rpx',
			left: '2rpx'
		},
		
		// 已选中的状态
		on: {
			...inner,
			borderRadius: '750rpx',
			top: '2rpx',
			right: '2rpx'
		}
	}
}

// ----------------------------------------------------------
// 导出（如果您添加了样式，请记着在此导出）
// ----------------------------------------------------------

export default {
	config,
	radius,
	cycle	
}

