import Vue from 'vue'
import router from './router/router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import '@/assets/css/base2.css'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import './common/rem.js'
import { Lazyload } from 'vant';
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.use(Lazyload);


Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.config.productionTip = false
Vue.use(VueLazyLoad)
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
