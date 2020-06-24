import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../views/First-Page.vue'
import ShoppingPage from '../views/Shopping-Page.vue'
import ClassifyPage from '../views/Classify.vue'
import NoloadPage from '../views/No-Load.vue'
import Personage from '../views/Personage.vue'
import PartMain from '../components/PartMain.vue'
import Focus from '../views/Focus.vue'

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
    component:NoloadPage,
  },
  // 登录的路由
  {
    path:'/personage-page',
    name:'Personage-page',
    component:Personage,
  },
  // 聚焦的路由
  {
    path:'/focus-page',
    name:'Focus-page',
    component:Focus
  },
  // 商品详情
  {
    path:'/part-main',
    name:'part-main',
    component:PartMain
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
})
export default router
