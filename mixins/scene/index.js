export default {
	
	data() {
		return {
			SCENE: 'loading'
		}
	},
	
	created() {
		if (this.$options.scene && typeof this.$options.scene === 'string') {
			this.SCENE = this.$options.scene;
		}
	},
	
	methods: {
		
		/**
		 * 跳转到加载场景
		 */
		gotoLoading() {
			this.SCENE = 'loading';
		},
		
		/**
		 * 跳转到成功场景
		 */
		gotoSuccess() {
			this.SCENE = 'success';
		},
		
		/**
		 * 跳转到空数据场景
		 */
		gotoEmpty() {
			this.SCENE = 'empty';
		},
		
		/**
		 * 跳转到权限出错场景
		 */
		gotoFailPower() {
			this.SCENE = 'failPower';
		},
		
		/**
		 * 跳转到逻辑出错场景
		 */
		gotoFailLogic() {
			this.SCENE = 'failLogic';
		},
		
		/**
		 * 跳转到系统错误场景
		 */
		gotoFailError() {
			this.SCENE = 'failError';
		},
		
		/**
		 * 跳转到网络出错场景
		 */
		gotoFailNetwork() {
			this.SCENE = 'failNetwork';
		},
		
		/**
		 * 跳转到未联网场景
		 */
		gotoFailOffline() {
			this.SCENE = 'failOffline';
		}
	}
}
