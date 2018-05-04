<template>
  <div class="container-fluid" >
      <div>
        <h3 class="text-center">Listado</h3>
      </div>
      <div class="btn-group" role="group" style="float: right">
        <router-link :to="{name: 'clientes-add'}"  class="btn btn-primary"> <i class="fas fa-user-plus"></i> Agregar</router-link >
      </div>
      <hr>
      <table id="tabla" class="table table-bordered table-striped table-hover table-sm">
          <thead>
            <tr class="">
              <th>Razon Social</th>
              <th>Nombre</th>
              <th>Correos</th>
              <th>Telefono Principal</th>
              <th>Telefono Secundario</th>
              <th>RNC</th>
              <th>Estatus</th>
              <th>Locales</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(c, key) in content.clientes" :key="key"> 
              <td>{{c.RazonSocial}}</td>
              <td>{{c.Nombre}}</td>
              <td> <a v-for="(i, key) in c.Correos" :key="key" :href="'mailto:' + i"> {{i}}, </a> </td>
              <td>{{c.TelefonoPrincipal}}</td>
              <td>{{c.TelefonoSecundario}}</td>
              <td>{{c.RNC}}</td>
              <td> <span v-for="(i, key) in c.status" :key="key"> {{i}}, </span> </td>
              <td> <span v-for="(i, key) in c.Locales" :key="key"> {{i}}, </span> </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info" @click="edit(key)"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger" @click="trash(key)"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
           
          </tbody>
      </table>
  </div>
</template>


<script>
import {AgGridVue} from 'ag-grid-vue';
const $ = require('jquery');
const dt = require('datatables.net')(window, $);

const fs = require('fs');
const path = require('path');
const remote = require('electron').remote;
const app = remote.app;

const name = "clientList.json";
const pth = app.getPath('userData')

export default {
  name: 'client-list',
  components: {
    'ag-grid-vue':AgGridVue
  },
  data(){
    return{
      options: {},
      content: {}
    }
  },
  methods: {
    trash(key){

    },
    edit(key){

    },
    added(key){

    },
    updateFile(){
      
    }
  },
  created(){
    this.options = {
      language: {
        emptyTable: "No hay data disponible en la tabla",
        info: "Entradas del _START_  al _END_ de _TOTAL_ ",
        infoEmpty: "Sin entradas",
        infoFiltered: '(Filtrado de _MAX_ entradas)',
        paginate: {
          first: "Primero",
          last: "Ultimo",
          next: " <i class='fas fa-caret-right'></i> ",
          previous: "<i class='fas fa-caret-left'></i> "
        },
        zeroRecords: "No se encontró data con los criterios de busqueda",
        search: "Buscar: ",
        processing: 'Procesando...',
        lengthMenu: 'Mostrar _MENU_ entradas',
        aria: {
          sortAscending : "<i class='fas fa-caret-up></i>'",
          sortDescending: "<i class='fas fa-caret-bottom></i>'",
        }
      }
    }
    $(document).ready(() => {
      $('#tabla').DataTable(this.options);
    });

    if(!fs.existsSync(path.join(pth,name))){
        let demoItems = fs.readFileSync(`${app.getAppPath()}/src/assets/configurations/${name}`);
        console.log(demoItems);
        fs.writeFileSync(path.join(pth, name), demoItems);
    }
    let contentStringify = fs.readFileSync(`${pth}/${name}`);
   // console.log(contentStringify);
    this.content = JSON.parse(contentStringify);
  }
}
</script>


<style>
  


</style>

