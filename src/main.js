import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { CountDown,SwipeItem,Swipe } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';
import { Toast } from 'vant';
Vue.use(CountDown);
Vue.use(SwipeItem);
Vue.use(Swipe);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Popup);
Vue.use(Toast);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
