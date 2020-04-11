import Vue from 'vue'
import App from './App.vue'
import VueXlsxFormatFilters from './index'

Vue.config.productionTip = false
Vue.use(VueXlsxFormatFilters)

new Vue({
  render: h => h(App),
}).$mount('#app')
