import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import { routes } from './routes';
import store from './store/store';

var instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
});

Vue.prototype.$http = instance;

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
