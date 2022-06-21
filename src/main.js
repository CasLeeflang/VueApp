import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Adal from 'vue-adal'
import VueJwtDecode from 'vue-jwt-decode'


Vue.config.productionTip = false
Vue.use(VueJwtDecode)

Vue.use(Adal, {
  config: {
    tenant: 'e5f13437-7ed2-4d8e-9e3c-cac8cd067f51',
    clientId: 'fbfc966b-b491-44f7-9a05-17aac9ce422f',
    // Change depending on where it is hosted
    redirectUri: 'http://localhost:3000',

    cacheLocation: 'localStorage'
  },

  requireAuthOnInitialize: true,
  router: router

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
