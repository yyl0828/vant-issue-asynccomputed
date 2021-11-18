import Vue from "vue";
import Vant from 'vant';
import 'vant/lib/index.css';
import App from "./App.vue";
import AsyncComputed from 'vue-async-computed'
Vue.use(Vant);
Vue.use(AsyncComputed)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
