import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'invoice-create',
    component: require('./components/invoice/create')
  }
];

const router = new VueRouter({routes});


export default router;


