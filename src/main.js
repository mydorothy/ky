// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import Cube from 'cube-ui'

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.use(Cube)


import App from './App'

Vue.config.productionTip = false

import '@/assets/scss/common.scss';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
