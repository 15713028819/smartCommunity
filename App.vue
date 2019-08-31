<script lang="ts">
	export default {
		// data() {
		// 	return {
		// 		time: 'tiem'
		// 	}
		// },
		onLaunch: function() {
			this.globalData.TEST.UP = new Date().getTime()
			console.log(this.globalData.TEST.UP)
			// getApp().globalData.TEST.TIME = new Date().getTime();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('APP 启动时间', new Date().getTime() - this.globalData.TEST.UP + '毫秒')
			// console.log('APP启动时间', new Date().getTime() - getApp().globalData.TEST.TIME)
			// console.log('APP启动时间', new Date().getTime() - getApp().globalData.TEST.TIME)
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		/**
		 * 全局数据
		 */
		globalData: {
			TEST: {
				TIME: {},
				UP: 0
			},
			TRACE: {},
			SESSION: {},
			STORE: {},
			// 邻里menu的选中项索引，在系统首页和邻里首页有使用
			TALKINDEX: 0,

			// 购物车数量
			CARTNUM: 0
		},
	}
</script>

<style lang="scss">
	@import './styles/index.scss';
</style>
