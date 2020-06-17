import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/First-Page.vue'
import ShoppingPage from '../views/Shopping-Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ShoppingPage
  },
  {
    path: '/first-page',
    name: 'First-page',
    component: FirstPage
  },
  {
    path:'/shopping-page',
    name:'Shopping-page',
    component:ShoppingPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
})

export default router
