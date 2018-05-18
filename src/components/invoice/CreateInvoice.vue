<template>
  <div class="container invoice">
    <div class="header">
      <div class="left">
        <img src="assets/tower.png" alt="Company Logo" class="">
        <div class="info">
          <p>
            Pedro Henriquez Ureña no.138 <br>
            La Esperilla <br>
            Teléfono (809) 381-2225
          </p>
          <p><strong>RNC: 43-0028878</strong></p>
        </div>
      </div>
      <h1 class="display-4 text-center">NAME</h1> <!--(MAX: 25) -->

      <div class="right">
        <p><strong>Fecha: </strong> <input type="date" v-model="date"/> </p>
        <p><strong>Fact: </strong> 4560</p> 
        <p><strong>NCF: </strong> B0100000123</p>
      </div>
    

      <div class="promise">
        <div class="mover-controls">
          <button @click="prev"> <i class="fas fa-caret-left"></i> </button>
          <button @click="nxt" > <i class="fas fa-caret-right"></i> </button>
        </div>

        <h4 class="text-center">Factura Válida para Crédito Fiscal</h4>
        
        <div class="controls">
          <button class="btn btn-success" data-toggle="tooltip" title="Guardar y hacer una factura nuevas" @click="newInv"><i class="fas fa-save"></i> Nuevo <i class="fas fa-plus"></i> </button>
          <button class="btn btn-primary" title="Solo guarda lo que ya se a hecho" @click="save"><i class="fas fa-save"></i> Guardar</button>
          <button class="btn btn-danger" @click="reset"><i class="fas fa-times"></i> Resetear</button>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="print" v-model="info.print_later">
            <label class="form-check-label">Imprimir Luego</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" value="email" v-model="info.send_later" >
            <label class="form-check-label" > Enviar Luego</label>
          </div>
        </div>
      </div>
    </div>
    
     <br>
    <!-- Added Component to handle Client Selection -->
    <div class="buscar-autocomplete row">
      <div class="col-4 text-right">
        <h4>Buscar Cliente</h4>
      </div>
      <div class="col-8">
        <autocomplete-input 
          inputClass="form-control mr-auto"
          :items="autoCompleteItems"
          @autocomplete-selected-client="selectedClient"
          ></autocomplete-input>
      </div>
    </div>
    <br>
    <!-- This is the place where the actual information of the invoice starts to be afected -->
   
    <div class="client-info">
        <table class="table info">
          <tbody>
            <tr>
              <td>NOMBRE O RAZON SOCIAL</td>
              <td><input type="text" class="invoice-control" v-model="info.RazonSocial"></td>
              <td>LOCAL</td>
              <td><input type="text" class="invoice-control" v-model="info.Locales"></td>
            </tr>
             <tr>
              <td>RNC CLIENTE</td>
              <td><input type="text" class="invoice-control" v-model="info.RNC"></td>
              <td>STATUS</td>
              <td><input type="text" class="invoice-control" v-model="info.status"></td>
            </tr>
          </tbody>
        </table>

    </div>


    <div class="content">
      <table class=" table-bordered">
        <col width="100">
        <col width="65%">
        <col width="75px">
        <col width="220">
        <col width="220">
        <thead>
          <tr class="text-center">
            <th>Item</th>
            <th>Descripción</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Totales</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(b, key) in body" :key="key">
            <td><input type="text" class="invoice-input text-center" v-model="b.codigo" v-on:change="getItemData(key)"></td>
            <td><input type="text" class="invoice-input" v-model="b.descripcion"></td>
            <td><input type="number" class="invoice-input text-center" min="0" v-model="b.cantidad" v-on:change="calculateTotal(key)"></td>
            <td><input type="number" class="invoice-input text-center" v-model="b.precio" v-on:change="calculateTotal(key)"></td>
            <td><span type="text" class="invoice-input text-center">{{ numeral(b.total).format('$0,0.00') }} </span></td>
          </tr>
        </tbody>
      </table>

      <div class="float-left">
          <h3>Total: {{totalDeTodo}}</h3>
      </div>

      <div class="bottom-controls">
        <button class="btn btn-primary" @click="addRow"><i class="fas fa-plus"></i> Agregar Fila</button>
        <button class="btn btn-primary" @click="removeRow"><i class="fas fa-cross"></i> Quitar Fila</button>
      </div>
    </div>

  </div>
</template>


<script>
import AutocompleteInput from './../Textboxes/AutocompleteInput';
const $ = require('jquery');
require('popper.js');
require('bootstrap');

const numeral = require('numeral');
const path = require('path');
const fs = require('fs');
const app = require('electron').remote.app;

export default {
  name: 'create-invoice',
  components: {
    AutocompleteInput
  },
  data(){
    return {
      date: '',
      info: {
        RazonSocial: '',
        Locales: '',
        RNC: '',
        status: '',
        print_later: false,
        send_later: false,
      },
      body: [],
      items: [],
      clientes: [],
      autoCompleteItems: [],
      numeral: require('numeral')
    }
  },
  computed: {
    totalDeTodo(){
      var number = 0;
      this.body.forEach(b => {
        number += Number(b.total);
      });
      return this.numeral(number).format('$0,0.00');
    }
  },
  methods: {
    calculateTotal(key){
      let total = Number(this.body[key].precio) * Number(this.body[key].cantidad);
      this.body[key].total = total
    },
    getItemData(key){
      let item = {}
    
      if(this.body[key].codigo != ''){
      this.items.forEach( (it) => {
        if(it.codigo === this.body[key].codigo)
        {
          item = it;
        }
      });

      if(!item.hasOwnProperty('codigo')) {
        console.log('No se encontró el item');
        return;
      } 
      console.log('item: ' + item);
      console.log(item);

      //TODO: Assign price according to status 
      this.body[key].descripcion = item.descripcion;
      this.body[key].precio = numeral(item.precio).format('0');

      //TODO: cantidad must be set according to LOCAL amount
      this.body[key].cantidad = 1;
      this.body[key].total = Number(this.body[key].precio) * Number(this.body[key].cantidad);

      }else{
        this.body[key].descripcion = '';
        this.body[key].precio =  0;
        this.body[key].cantidad = 0;
        this.body[key].total = 0;
      }
    },
    selectedClient(index){
      let client = this.clientes[index];
      this.info.RazonSocial = client.RazonSocial;
      this.info.status = client.status[0];
      this.info.RNC = client.RNC;
      this.info.print_later = client.print_later;
      this.info.send_later = client.send_later;
      let locales = '';
      client.Locales.forEach((l,i) => {
        if(i >= client.Locales.length-1)
          locales += `${l}`;
        else locales += `${l} |`;
      });
      this.info.Locales = locales;
    },
    addRow(){
      this.body.push({
        codigo : '',
        descripcion : '',
        cantidad : 0,
        precio : 0,
        total: 0
      });
    },
    removeRow(){
      this.body.splice(this.body.length-1, 1);
    },

    prev(){
      //TODO: Code to travel to previous invoice
    },

    nxt(){
      //TODO: Code to travel to next invoice
    },

    save(){
      //TODO: Code to save invoice
    },

    newInv(){
      //TODO: Code to create new INovice
      
      //Before Createing a new invoice you must save the actual one
      this.save();
      this.reset();
    },

    reset(){
      //TODO: Code to reset the invoice to start from scratch 

    },

    hardReset(){
      //TODO: Code to destroy all of the aspects of the invoice 
    }





  },
  created(){
    this.items = JSON.parse(fs.readFileSync(`${app.getPath('userData')}/itemsList.json`)).items;
    this.clientes = JSON.parse(fs.readFileSync(`${app.getPath('userData')}/clientList.json`)).clientes;
    this.clientes.forEach((c, index) => {
      let locales = '';
      c.Locales.forEach( l => {
        locales += l + '|';
      });
      this.autoCompleteItems.push([`${locales}-${c.RazonSocial}`, index]);
    });


    this.date = "2018-01-01";

    for(let i = 0; i < 5; i++){
      this.body.push({
        codigo : '',
        descripcion : '',
        cantidad : 0,
        precio : 0,
        total: 0
      });
    }
  },
  /*beforeRouteLeave(to, from, next){
    this.$router.push(to);
  }*/
  //TODO: Code and functionality pending to be able to create invoices. Design of rest
}
</script>


<style scoped>
  .buscar-autocomplete{
    width: 57%;
    margin: 0 auto;
  }

  .buscar-autocomplete h4{
    color:rgb(0, 122, 204)
  }

  .mover-controls{
    position: absolute;
    top: -56px;
    left: 9%;
  }

  .mover-controls button{
    background-color: rgba(108, 156, 189, 0.23);
    color: rgb(20, 72, 123);
    border-radius: 3px;
    border: none;
    font-size: 2em;
    margin: 0 6em;
    display: inline;

  }

  .bottom-controls{
    margin-top: 10px;
    margin-bottom: 20px;
    float: right;
  }

  .controls{
    position: absolute;
    display: inline-block;
    z-index: 1;
    top: -30px;
    left: 67%;
  }

  .invoice-input{
    background-color: #fff;
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    font-size: 1.1em;
    margin: 0px;
  }

  .invoice-input:focus{

    outline: none;
    background-color: rgba(132, 224, 255, 0.027);
    color: black;
    border-bottom: double 2px rgba(54, 69, 83, 0.425);
  }

  .content table tr{
    height: 50px;
  }

  .invoice{
    margin-top: 16px;
    margin-bottom: 30px;
  }

  .invoice .header{
    height: 264px;
  }
  .invoice .header h1{
    position: relative;
    display: inline;
    top: 40px;
    left: -3%;
    font-size: 3em;
    font-family: 'century';
    font-weight: bolder;
    color: rgb(20, 72, 123);
  }

  .invoice .header img{
    height: 150px;
  }

  .invoice .header .left{
    text: left;
    float: left;
    display: inline;
  }

  .invoice .header .right{
    font-size: 1.1em;
    font-family: 'century';
    text: right;
    float: right;
    display: inline;
    margin-right: 0%;
    margin-top: 46px;;
  }

  .invoice .header .promise{
    position: relative;
    top: 167px;
  }

  .table .invoice-control{
    width: 100%;
    border: none;
    border-bottom: solid 1px darkgray;
  }

  .table .invoice-control:focus{
    border: none;
    outline: none;
    border-bottom: solid 3px cadetblue;
  }

  .table.info, .table.info tr{
    border: none;
  }

</style>
