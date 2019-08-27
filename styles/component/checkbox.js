// ----------------------------------------------------------
// 默认配置
// ----------------------------------------------------------

const config = {
	
	// 自动（默认）的checkbox样式，可以根据您的设置进行选择
	autoStyle: 'radius',
	
	// 是否启用动画
	isAnimation: false	
}

// ----------------------------------------------------------
// 通用样式
// ----------------------------------------------------------

// 外框通用样式
const box = {
	width: '40rpx',
	height: '40rpx',
	paddingBottom: '6rpx',
	justifyContent: 'center',
	alignItems: 'center'
}

// 内部元素通用样式
const inner = {
	width: '16rpx',
	height: '22rpx',
	borderColor: '#fff',
	borderRightWidth: '3rpx',
	borderBottomWidth: '3rpx',
	transform: 'rotate(45deg)'
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
			borderColor: '#999',
			borderRadius: '6rpx',
		},
		
		// 已选中状态样式
		on: {
			...box,
			backgroundColor: '#ff6666',
			borderColor: '#ff3300',
			borderRadius: '6rpx'
		},
	},	
	
	// 选中时对号样式
	inner: {
		...inner
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
			borderColor: '#999',
			borderRadius: '750rpx',
		},
		
		// 已选中状态样式
		on: {
			...box,
			backgroundColor: '#ff6666',
			borderColor: '#ff3300',
			borderRadius: '750rpx'
		}
	},
	
	// 选中时对号样式
	inner: {
		...inner
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

