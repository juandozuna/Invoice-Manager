import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'invoice-create',
    component: require('./components/invoice/create')
  },
  {
    path: '/Clientes',
    name: 'Clientes-ListView',
    component: require('./components/clients/Clients')
  }
];

const router = new VueRouter({routes});


export default router;


