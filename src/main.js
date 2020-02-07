// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import global from './common/global'  //引入全局变量
import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios' //实现前后端交互

//引入iView-ui
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);
// Vue.prototype.GLOBAL = global;

//引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//引入echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts;
Vue.use(echarts);

//实现前后端交互
//Vue.prototype.$axios = axios
//Vue.prototype.HOST = '/api'

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
