// 导入Vue、App页面
import Vue from 'vue'
import App from './App'

// 导入，并设置：store
// import Store from './part/store';
// Vue.prototype.$store = Store;

// #ifndef APP-PLUS-NVUE

/**
 * 导入
 */
 
// 组件
import CompChooseActive from './components/choose/active';
import CompChooseScene from './components/choose/scene';
import CompDataCheckbox from './components/data/checkbox';
import CompDataSwitch from './components/data/switch';
import ADBtheme1 from './components/project/ADBTheme1';
import coupon1 from './components/project/couponTheme1';
import coupon2 from './components/project/couponTheme2';
import coupon3 from './components/project/couponTheme3';
import coupon4 from './components/project/couponTheme4';
import coupon5 from './components/project/couponTheme5';
import prod1 from './components/project/prodTheme1';
import prod2 from './components/project/prodTheme2';
import prod3 from './components/project/prodTheme3';
import filed1 from './components/project/filedTheme1';
import filed2 from './components/project/filedTheme2';
import filed3 from './components/project/filedTheme3';
import filed4 from './components/project/filedTheme4';
import filed5 from './components/project/filedTheme5';
import status1 from './components/project/statusTheme1';
import status2 from './components/project/statusTheme2';
import expressItem1 from './components/project/expressItemTheme1';
import expressItem2 from './components/project/expressItemTheme2';
import expressItem3 from './components/project/expressItemTheme3';
import input1 from './components/project/inputTheme1';
import inputArea1 from './components/project/inputAreaTheme1';
import talkHeader1 from './components/project/talkHeaderTheme1';
import talkItem1 from './components/project/talkItemTheme1';
import talkFooter1 from './components/project/talkFooterTheme1';
import trade1 from './components/project/tradeTheme1';
import commonItem1 from './components/project/commonItemTheme1';
import commonItem2 from './components/project/commonItemTheme2';
import commonItem3 from './components/project/commonItemTheme3';
import commonItem4 from './components/project/commonItemTheme4';
import commonItem5 from './components/project/commonItemTheme5';
import commonItem6 from './components/project/commonItemTheme6';
import commonItem7 from './components/project/commonItemTheme7';
import commonItem8 from './components/project/commonItemTheme8';
import commonItem9 from './components/project/commonItemTheme9';
import commonItem10 from './components/project/commonItemTheme10';
import itemY from './components/project/itemY';
import avatar1 from './components/project/avatarTheme1';
import avatar2 from './components/project/avatarTheme2';

// 过滤器
import FilterDateFormat from './filters/date-format';
import FilterDateLapse from './filters/date-lapse';

// 原型方法
import * as PrototypeAssert from './prototypes/assert';
import * as PrototypeNavigate from './prototypes/navigate';
import * as PrototypeSource from './prototypes/source';
import * as PrototypeTest from './prototypes/test';


/**
 * 注册
 */

// 组件
Vue.component('jm-active', CompChooseActive);
Vue.component('jm-scene', CompChooseScene);
Vue.component('jm-checkbox', CompDataCheckbox);
Vue.component('jm-switch', CompDataSwitch);
Vue.component('ADBtheme1', ADBtheme1);
Vue.component('coupon1', coupon1);
Vue.component('coupon2', coupon2);
Vue.component('coupon3', coupon3);
Vue.component('coupon4', coupon4);
Vue.component('coupon5', coupon5);
Vue.component('prod1', prod1);
Vue.component('prod2', prod2);
Vue.component('prod3', prod3);
Vue.component('filed1', filed1);
Vue.component('filed2', filed2);
Vue.component('filed3', filed3);
Vue.component('filed4', filed4);
Vue.component('filed5', filed5);
Vue.component('status1', status1);
Vue.component('status2', status2);
Vue.component('expressItem1', expressItem1);
Vue.component('expressItem2', expressItem2);
Vue.component('expressItem3', expressItem3);
Vue.component('input1', input1);
Vue.component('inputArea1', inputArea1);
Vue.component('talkHeader1', talkHeader1);
Vue.component('talkItem1', talkItem1);
Vue.component('talkFooter1', talkFooter1);
Vue.component('trade1', trade1);
Vue.component('commonItem1', commonItem1);
Vue.component('commonItem2', commonItem2);
Vue.component('commonItem3', commonItem3);
Vue.component('commonItem4', commonItem4);
Vue.component('commonItem5', commonItem5);
Vue.component('commonItem6', commonItem6);
Vue.component('commonItem7', commonItem7);
Vue.component('commonItem8', commonItem8);
Vue.component('commonItem9', commonItem9);
Vue.component('commonItem10', commonItem10);
Vue.component('itemY', itemY);
Vue.component('avatar1', avatar1);
Vue.component('avatar2', avatar2);

// 过滤器
Vue.filter('dateFormat', FilterDateFormat);
Vue.filter('dateLapse', FilterDateLapse);

// 原型方法
const prototypes = {
	...PrototypeAssert,
	...PrototypeNavigate,
	...PrototypeSource,
	...PrototypeTest
}
for (let k in prototypes) {
	Vue.prototype[k] = prototypes[k];
}

// #endif


// 阻止vue在console输出tips
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
