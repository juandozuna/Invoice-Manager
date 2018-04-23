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
    component: require('./components/clients/Clients'),
    children: [
      {
        path: '/',
        name: 'clientes-list',
        component: require('./components/clients/ListClient')
      },
      {
        path: 'Add',
        name: 'clientes-add',
        component: require('./components/clients/AddClient')
      }
    ]
  }
];

const router = new VueRouter({routes});


export default router;


