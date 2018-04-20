import Vue from 'vue';
import App from './app';

let $ = require('jquery');
require('bootstrap');
require('popper.js');
require('materialize-css');

const app = new Vue(App).$mount('#app');
