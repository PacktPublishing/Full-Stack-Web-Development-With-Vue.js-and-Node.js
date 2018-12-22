import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
