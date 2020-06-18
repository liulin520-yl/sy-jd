import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { CountDown,SwipeItem,Swipe } from 'vant';
Vue.use(CountDown);
Vue.use(SwipeItem);
Vue.use(Swipe);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
