<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="assets/logo.png" alt="" width="60">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link" href="#">Crear</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Clientes</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Itemes</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Listado Facturas</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Acciones
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#"><i class="fas fa-envelope-square fa-1x"></i> Enviar grupo de facturas por Correo</a>
              <a class="dropdown-item" href="#"><i class="fas fa-print fa-1x"></i> Imprimir Grupo de Facturas</a>
              <a class="dropdown-item" href="#"><i class="fas fa-file-pdf fa-1x"></i> Exportar grupo de Facturas a PDF</a>
            </div>
          </li>
        </ul>


        <ul style="" class="navbar-nav">
            <li class="navbar-item">
              <a href="#" class="nav-link">Configuraciones</a>
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
      logo: ''
    }
  },
  created(){
      
  }
}
</script>


