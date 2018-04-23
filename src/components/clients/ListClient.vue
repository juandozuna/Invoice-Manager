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
              <th>Nombre</th>
              <th>Correos</th>
              <th>Telefono Principal</th>
              <th>Telefono Secundario</th>
              <th>Estatus</th>
              <th>Locales</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Daniel Ozuna</td>
              <td>juandaniel@hotmail.com</td>
              <td>809-453-3433</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>203 | 205 | 504</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Kenia Espinal</td>
              <td>keespinal@yahoo.es</td>
              <td>809-756-6565</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>404</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Moringa Perez</td>
              <td>moringito@hotmail.com</td>
              <td>809-465-3433</td>
              <td>809-435-5513</td>
              <td>Ocupado</td>
              <td>204</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Monica Espinal</td>
              <td>moniespinal@hotmail.com</td>
              <td>809-234-2144</td>
              <td>809-459-4243</td>
              <td>Desocupado</td>
              <td>402</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Juan Daniel Ozuna</td>
              <td>juandaniel@hotmail.com</td>
              <td>809-453-3433</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>203 | 205 | 504</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Kenia Espinal</td>
              <td>keespinal@yahoo.es</td>
              <td>809-756-6565</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>404</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Moringa Perez</td>
              <td>moringito@hotmail.com</td>
              <td>809-465-3433</td>
              <td>809-435-5513</td>
              <td>Ocupado</td>
              <td>204</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Monica Espinal</td>
              <td>moniespinal@hotmail.com</td>
              <td>809-234-2144</td>
              <td>809-459-4243</td>
              <td>Desocupado</td>
              <td>402</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Juan Daniel Ozuna</td>
              <td>juandaniel@hotmail.com</td>
              <td>809-453-3433</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>203 | 205 | 504</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Kenia Espinal</td>
              <td>keespinal@yahoo.es</td>
              <td>809-756-6565</td>
              <td>809-683-5513</td>
              <td>Ocupado</td>
              <td>404</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Moringa Perez</td>
              <td>moringito@hotmail.com</td>
              <td>809-465-3433</td>
              <td>809-435-5513</td>
              <td>Ocupado</td>
              <td>204</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Monica Espinal</td>
              <td>moniespinal@hotmail.com</td>
              <td>809-234-2144</td>
              <td>809-459-4243</td>
              <td>Desocupado</td>
              <td>402</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                  <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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

export default {
  name: 'client-list',
  components: {
    'ag-grid-vue':AgGridVue
  },
  data(){
    return{
      gridOptions: {},
      columnDefs: null,
      rowData: null,
      options: {}
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
  }
}
</script>


<style>
  


</style>

