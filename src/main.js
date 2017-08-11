import Vue from 'vue'
import  VueRouter  from 'vue-router'
import login from 'components/login.vue'
import App from './App.vue'
import  goods from 'components/goods.vue'
import  shoppingCart from 'components/shoppingCart.vue'
import main from 'components/main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: login },
    { path: '/app', component: App,
      children:[
        { path: '/goods', component: goods },
        { path: '/shoppingCart', component: shoppingCart },
        { path: '/main', component: main },
      ]
    },

  ],
})

const app = new Vue({
  router:router,
  // render: h => h(login)
}).$mount('#main')






