<script lang="ts">
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
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
				TIME: {}
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
