import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入全局ui组件库-vantui
import '@/plugins/vant'
import 'amfe-flexible'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
