import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/First-Page.vue'

Vue.use(VueRouter)

const routes = [
  {

    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/first-page',
    name: 'First-page',
    component: FirstPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
})

export default router
