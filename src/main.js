// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import common from './assets/js/common'

import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
Vue.prototype.$common = common;
Vue.use(ElementUI)   //新添加
Vue.config.productionTip = false
Vue.prototype.$axios=axios 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
