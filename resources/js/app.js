import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import StoreData from './store.js'
import {initalize} from './helpers/general'
import router from './routes';

import App from './views/App.vue'
import Header from './components/Header.vue'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:3000/';
window.axios = require('axios');
//window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = new Vuex.Store(StoreData);
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

initalize(store, router);

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App, Header
    },
    render: app => app(App)
});