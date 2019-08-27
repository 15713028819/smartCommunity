export default {

	/**
	 * 页面加载
	 */
	onLoad(option) {
		if (this.$options.life && typeof this.$options.life.load === 'function') {
			this.$options.life.load.apply(this, option);
		}
	},
	
	/**
	 * 页面每次显示
	 */
	onShow() {
		if (this.$options.life && typeof this.$options.life.show === 'function') {
			this.$options.life.show.apply(this);
		}
	},
	
	/**
	 * 页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
	 */
	onReady() {
		if (this.$options.life && typeof this.$options.life.ready === 'function') {
			this.$options.life.ready.apply(this);
		}
	},
	
	/**
	 * 页面隐藏
	 */
	onHide() {
		if (this.$options.life && typeof this.$options.life.hide === 'function') {
			this.$options.life.hide.apply(this);
		}
	},
	
	/**
	 * 页面卸载
	 */
	onUnload() {
		if (this.$options.life && typeof this.$options.life.unload === 'function') {
			this.$options.life.unload.apply(this);
		}
	},
	
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {
		if (this.$options.life && typeof this.$options.life.share === 'function') {
			this.$options.life.share.apply(this);
		}
	},
	
	/**
	 * 页面返回
	 */
	onBackPress() {
		if (this.$options.life && typeof this.$options.life.back === 'function') {
			this.$options.life.back.apply(this);
		}
	},
	
	/**
	 * 页面滚动
	 */
	onPageScroll(object) {
		if (this.$options.life && typeof this.$options.life.scroll === 'function') {
			this.$options.life.scroll.apply(this, object);
		}
	},
	
	/**
	 * 页面下拉
	 */
	onPullDownRefresh() {
		if (this.$options.life && typeof this.$options.life.pullDown === 'function') {
			this.$options.life.pullDown.apply(this);
		}
	},
	
	/**
	 * 页面上拉触底
	 */
	onReachBottom() {
		if (this.$options.life && typeof this.$options.life.reachBottom === 'function') {
			this.$options.life.reachBottom.apply(this);
		}
	},
	
	/**
	 * 导航栏搜索数据改变
	 */
	onNavigationBarSearchInputChanged() {
		if (this.$options.life && typeof this.$options.life.searchChange === 'function') {
			this.$options.life.searchChange.apply(this);
		}
	},
	
	/**
	 * 导航栏点击软键盘上的“搜索”按钮时触发
	 */
	onNavigationBarSearchInputConfirmed() {
		if (this.$options.life && typeof this.$options.life.searchConfirm === 'function') {
			this.$options.life.searchConfirm.apply(this);
		}
	},
	
	/**
	 * 原生标题栏搜索输入框点击
	 */
	onNavigationBarSearchInputClicked() {
		if (this.$options.life && typeof this.$options.life.searchClick === 'function') {
			this.$options.life.searchClick.apply(this);
		}
	}
}
