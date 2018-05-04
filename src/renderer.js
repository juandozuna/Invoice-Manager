'use strict'

import Vue from 'vue';
import App from './app';
import router from './router';
import 'vueify/lib/insert-css';
require('datatables.net-bs4')();

const $ = require('jquery');

import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';


Vue.use(BootstrapVue);

Vue.prototype.$eventHub = new Vue();

const app = new Vue({
  router,
  components: {
    App
  },
  render: h => h(App),
  created(){
    
  }
}).$mount('#app');


//TODO: Pending desing of rest of the views in the app.