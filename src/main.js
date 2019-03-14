import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';


import {store} from './store';
import {router} from './routes.js';

import 'babel-polyfill';



Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
