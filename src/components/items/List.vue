<template>
  <div>
      <b-table striped bordered :items="items" :fields="fields">
        <template slot="detalles" slot-scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  row.toggleDetails;  -->
        <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
        {{ row.detailsShowing ? 'Ocultar' : 'Mostrar'}} Detalles
        </b-button>
        <b-button size="sm" @click="edit(row.item)"  class="btn btn-info"> <i class="fas fa-edit"></i> </b-button>
        <!-- In some circumstances you may need to use @click.native.stop instead -->
        
        </template>
        <template slot="row-details" slot-scope="row">
        <b-card>
            <h4 class="text-center">Precios Derivados</h4>
            <div v-if="!row.item.editing">
                <div v-for="(i, key) in row.item.status" :key="key" >
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"> <b>{{i[0]}}: </b> </b-col>
                        <b-col>{{ i[1] }}</b-col>
                    </b-row>
                </div>
                <button class="btn btn-primary" @click="row.item.editing = true"> <i class="fas fa-edit"></i> Editar</button>
            </div>
            <div v-else>
                <div style="margin-right: 30px">
                    <div class="form-group">
                        <label>Descripción</label>  
                        <input type="text" class="form-control" v-model="row.item.descripcion">
                    </div>  
                </div>
            
                <div>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"> <b>Precio Estandar: </b> </b-col>
                    <b-col>
                        <input type="text" v-model="row.item.precio">
                    </b-col>
                </b-row>
                <b-row class="mb-2" v-for="(i ,key) in row.item.status" :key="key">
                    <b-col sm="3" class="text-sm-right"> <b>{{i[0]}}: </b> </b-col>
                    <b-col>
                        <input type="text" v-model="i[1]">
                    </b-col>
                </b-row>
                </div>
                <div class="btn-group">
                <button class="btn btn-success" @click="save(row.item)"> <i class="fas fa-save"></i> Guardar </button>
                <button class="btn btn-danger" @click="row.item.editing = false"> <i class="fas fa-times"></i> Cancelar</button>
                </div>
            </div>
        
        </b-card>
        </template>
    </b-table>
  </div>
</template>

<script>

export default {
  name: "items-list",
  data(){
      return {
        fields: [ 'codigo', 'descripcion', 'precio', 'detalles' ],
        items: [
            { 
                codigo: '001', 
                descripcion: 'Cuota mantenimiento enero 2018', 
                precio: '14,000.00', 
                status: [
                    ['Ocupado', '14,000.00'],
                    ['Desocupado', '7,000.00'],
                    ['Sotano', '1,500.00'],
                    ['900', '56,000.00']
                ],
                editing: false,
                _showDetails: false
            },
            { 
                codigo: '002', 
                descripcion: 'Cuota mantenimiento febrero 2018', 
                precio: '14,000.00', 
                status: [
                    ['Ocupado', '14,000.00'],
                    ['Desocupado', '7,000.dd00'],
                    ['Sotano', '1,500.00'],
                    ['900', '56,000.00']
                ],
                editing: false,
                _showDetails: false
            },
            { 
                codigo: '003', 
                descripcion: 'Cuota mantenimiento marzo 2018', 
                precio: '14,000.00', 
                status: [
                    ['Ocupado', '14,000.00'],
                    ['Desocupado', '7,000.00'],
                    ['Sotano', '1,500.00'],
                    ['900', '56,000.00']
                ],
                editing: false,
                _showDetails: false
            },
            
        ]
      }
  },
  methods: {
      edit(item){
            item.editing = true;

      },
      save(item){
          item.editing = false;
      },
      details(showing, item){
          showing = !showing;
          if(!showing && item.editing)
            item.editing = false;

      }
  }
}
</script>

