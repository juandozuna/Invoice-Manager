<template>
  <div class="container-fluid" >
      <table id="tabla" class="table table-bordered table-striped table-sm">
          <thead>
            <tr class="text-center">
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
                <button class="btn btn-info"> <i class="fas fa-edit"></i> </button>
                <button class="btn btn-danger"> <i class="fas fa-trash"></i> </button>
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
  name: 'clientes',
  components: {
    'ag-grid-vue':AgGridVue
  },
  data(){
    return{
      gridOptions: {},
      columnDefs: null,
      rowData: null
    }
  },
  created(){
    $(document).ready(() => {
      $('#tabla').DataTable({
         columnDefs: [{
           targets: [0],
           orderData: [0,1]
         },{
           targets:[1],
           orderData: [1,0]
         }]
      });
    });
  }
}
</script>


<style>
  


</style>

