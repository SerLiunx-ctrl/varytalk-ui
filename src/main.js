import Vue from 'vue'
import PageIndex from '@/views/index.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(PageIndex),
}).$mount('#app')
