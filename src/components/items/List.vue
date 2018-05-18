<template>
  <div>
      <add-list-item></add-list-item>
      <button @click="addItem" class="btn btn-sm btn-primary btn-add">Agregar Elemento</button>
      <b-table striped bordered :items="content.items" :fields="content.fields">
        <template slot="detalles" slot-scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  row.toggleDetails;  -->
        <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
        {{ row.detailsShowing ? 'Ocultar' : 'Mostrar'}} Detalles
        </b-button>
        <b-button size="sm" @click="edit(row.item)"  class="btn btn-info"> <i class="fas fa-edit"></i> </b-button>
        <b-button size="sm" @click="erase(row.item)"  class="btn btn-danger"> <i class="fas fa-trash"></i> </b-button>
        <!-- In some circumstances you may need to use @click.native.stop instead -->
        
        </template>
        <template slot="row-details" slot-scope="row">
        <b-card>
            <h4 class="text-center">Precios Derivados</h4>
            <div v-if="!row.item.editing">
                <div v-for="(i, key) in row.item.status" :key="key" >
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"> <b v-html="i[0]"> </b> </b-col>
                        <b-col>{{ i[1]}}</b-col>
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
                    <b-col sm="3" class="text-sm-right"> <b> <input type="text" v-model="i[0]"> </b> </b-col>
                    <b-col>
                        <input type="text" v-model="i[1]">
                        <button class="btn btn-danger btn-sm" @click="removeStatus(row.item, key)"> <i class="fas fa-times"></i> </button>  
                    </b-col>
                </b-row>
                </div>
                <button class="btn btn-primary btn-sm" @click="agregarStatus(row.item)"> <i class="fas fa-plus"></i> Agregrar Derivado </button>
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
import AddListItem from './AddListItem';
import EventBus from './../../eventBus';
import DataReader from '../../dataReader';

const fs = require('fs');
const path = require('path');
const remote = require('electron').remote;
const app = remote.app;

const name = "itemsList.json";
const pth = app.getPath('userData')



export default {
  name: "items-list",
  components: {
      AddListItem
  },
  data(){
      return {
        content: {},
      }
      
  },
  created(){
    
    if(!fs.existsSync(path.join(pth,name))){
        let demoItems = fs.readFileSync(`${app.getAppPath()}/src/assets/configurations/itemsList.json`);
        console.log(demoItems);
        fs.writeFileSync(path.join(pth, name), demoItems);
    }

    let contentStringify = fs.readFileSync(`${pth}/${name}`);
   // console.log(contentStringify);
    this.content = JSON.parse(contentStringify);
    
    //console.log(this.content);
    EventBus.$on('add-item-list', this.addNewItem);

    
  }, 
  methods: {
      addNewItem(obj){
          this.content.items.push(obj);

      },
      edit(item){
            item.editing = true;
      },
      erase(item){
          let i = this.content.items.indexOf(item);
          if(i > -1){
              this.content.items.splice(i, 1);
          }
          console.log(i + " This is item");
      },
      save(item){
        item.editing = false;
        item._showDetails = false;
        this.updateFile(item);
        item._showDetails = true;
      },
      agregarStatus(item){
        let add = ['nuevo', 1000];
        item.status.push(add);
        console.log('Derivado ran on ' + item);
      },
      updateFile(item){
        item.editing = false;
        this.updateFile();
      },
      updateFile(){
          let demoItems = this.content;
        console.log(demoItems);
        fs.writeFile(path.join(pth, name), JSON.stringify(demoItems), (err) => {
            if(err) throw err;
            console.log('Los cambios han sido guardados exitosamente');
        });
      },
      removeStatus(item, key){
        item.status.splice(key, 1);
      },
      details(showing, item){
          showing = !showing;
          if(!showing && item.editing)
            item.editing = false;
      },
      addItem(){
          EventBus.$emit('show-item-add-modal');
      }
  }
}
</script>

<style scoped>
    .btn-add{
        position: absolute;
        left: 76%;
        top: 14%;
        z-index: 2;
    }
</style>
