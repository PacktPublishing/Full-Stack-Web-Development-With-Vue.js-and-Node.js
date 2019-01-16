import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import VueYoutube from 'vue-youtube'

import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.use(Vuetify,{
  iconfont : 'mdi'
})
Vue.use(VueRouter)
Vue.use(VueYoutube)

import routes from './routes'

const router = new VueRouter({
  routes : routes,
  mode:'history'
})

new Vue({
  router : router,
  store,
  render: h => h(App),
}).$mount('#app')
