<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">
        <img src="assets/logo.png" alt="" height="30" >
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': isActive('facturacion')}" @click="setActive('facturacion')">
            <router-link :to="{name: 'invoice-create'}" class="nav-link" >Facturación</router-link>
          </li>
          <li class="nav-item" :class="{'active': isActive('clientes')}" @click="setActive('clientes')">
            <router-link :to="{name: 'clientes-list'}" class="nav-link" >Clientes</router-link>
          </li>
          <li class="nav-item" :class="{'active': isActive('items')}" @click="setActive('items')">
            <router-link :to="{name: 'items-list'}" class="nav-link">Items</router-link>
          </li>
          <li class="nav-item" :class="{'active': isActive('listado')}"  >
            <a href="#" class="nav-link" @click="setActive('listado')">Listado Facturas</a>
          </li>
          <li class="nav-item dropdown" :class="{'active': isActive('acciones')}">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Acciones
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" ><i class="fas fa-envelope-square fa-1x"></i> Enviar grupo de facturas por Correo</a>
              <a class="dropdown-item" href="#" ><i class="fas fa-print fa-1x"></i> Imprimir Grupo de Facturas</a>
              <a class="dropdown-item" href="#" ><i class="fas fa-file-pdf fa-1x"></i> Exportar grupo de Facturas a PDF</a>
            </div>
          </li>
        </ul>


        <ul style="" class="navbar-nav">
            <li class="navbar-item" @click="setActive('settings')">
              <router-link :to="{name: 'options'}" class="nav-link btn btn-dark" :class="{'active': isActive('settings')}"> <i class="fas fa-cogs"></i> </router-link>
            </li>
        </ul>

      </div>
    </nav>
  </div>
</template>


<script>
const path = require('path');
const remote = require('electron').remote;
const $ = require('jquery');
require('popper.js');
require('bootstrap');

export default {
  name: 'navbar',
  data(){
    return {
      activeItem: 'facturacion'
    }
  },
  methods: {
    menuSelect(item){

     this.menuItems.forEach(m => m=false);
     this.menuItems[item] =true; 
      console.log(item);
    },
    isActive(menuItem){
      return this.activeItem == menuItem;
    },
    setActive(menuItem){
      this.activeItem = menuItem;
    }
  },
  created(){
      
  }
}
</script>
