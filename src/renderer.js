'use strict'

import Vue from 'vue';
import App from './app';
import router from './router';
import 'vueify/lib/insert-css';



import 'bootstrap';

const app = new Vue({
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app');


//TODO: Pending desing of rest of the views in the app.