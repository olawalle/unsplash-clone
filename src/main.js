import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

// token interceptor

axios.defaults.headers.common['Authorization'] = "Client-ID 38ea2fdc9b05d669f05e17fe07697f876853a32dbd6f00d51e7d28a6091afb3b";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
