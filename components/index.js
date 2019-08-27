import Vue from 'vue';

// 选择显示
import JMScene from './choose/scene';
import JMActive from './choose/active';

// 数据输入
import JMCheckbox from './data/checkbox';
import JMSwitch from './data/switch';

// 注册JM组件
Vue.component('jm-scene', JMScene);
Vue.component('jm-active', JMActive);
Vue.component('jm-checkbox', JMCheckbox);
Vue.component('jm-switch', JMSwitch);
