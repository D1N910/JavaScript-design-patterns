import Vue from 'vue'
import App from './App.vue'
import observer from '../utils/observer'
Vue.config.productionTip = false

Vue.use(observer)

new Vue({
  render: h => h(App),
}).$mount('#app')
