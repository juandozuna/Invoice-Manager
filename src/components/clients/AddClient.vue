<template>
    <div class="container">
        <router-link :to="{name: 'clientes-list'}" class="btn btn-secondary btn-list">Listado</router-link>
        <br>
        <client-form :client="client" @submitted="submit"></client-form>
        
    </div>
</template>


<script>
import ClientForm from './ClientForm';
const remote = require('electron').remote;
const app = remote.app;
const fs = require('fs');
const path = require('path');

const name = "clientList.json";
const pth = app.getPath('userData')

export default {
  name: 'add-client',
  components: {
      ClientForm
  },
  data(){
      return{
          client: {
              RazonSocial: '',
              Nombre: '',
              Correos: ['fulano@example.com'],
              TelefonoPrincipal: '809-000-0000',
              TelefonoSecundario: '809-000-0000',
              TelefonosAdicionales: ['809-000-0000'],
              Locales: ['101'],
              RNC: '',
              status: ['Ocupado'],
              comprobante: true,
              print_later: false,
              send_later: false
          }
      }
  },
  methods:{
    submit(){
        let contentStringify = fs.readFileSync(`${pth}/${name}`);
        let content = JSON.parse(contentStringify);

        content.clientes.push(this.client);

        fs.writeFileSync(`${pth}/${name}`, JSON.stringify(content));
        this.$router.push({
            name: 'clientes-list'
        });
      }
  }
}
</script>


<style scoped>
    .btn-list{
        position: absolute;
        top: 10%;
        left: 89%;
    }
</style>
