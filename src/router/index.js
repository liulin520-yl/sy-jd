import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/First-Page.vue'
import ShoppingPage from '../views/Shopping-Page.vue'
import ClassifyPage from '../views/Classify.vue'
import NoloadPage from '../views/No-Load.vue'
console.log(ClassifyPage)
console.log(ShoppingPage)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First-page',
    component: FirstPage
  },
  {
    path:"/classify-page",
    name:'Classify-page',
    component:ClassifyPage
  },
  {
    path:'/shopping-page',
    name:'Shopping-page',
    component:ShoppingPage
  },
  //未登入的路由
  {
    path:'/noload-page',
    name:'Noload-page',
    component:NoloadPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
})

export default router
