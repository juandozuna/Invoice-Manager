<template>
  <form @submit.prevent="submit">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Razon Social</label>
                    <input type="text" v-model="client.RazonSocial" class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="client.Nombre">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>Telefono Principal</label>
                    <input type="text" class="form-control" v-model="client.TelefonoPrincipal">
                </div>
            </div>
             <div class="col">
                <div class="form-group">
                    <label>Telefono Secundario</label>
                    <input type="text" class="form-control" v-model="client.TelefonoSecundario">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">RNC: </span>
                    </div>
                    <input type="text" class="form-control" v-model="client.RNC">
                </div>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="client.comprobante" type="checkbox" name="estatusPrincipal">
                    <label class="form-check-label">Usa Compraboante</label>
                </div>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="client.print_later" type="checkbox" name="estatusPrincipal">
                    <label class="form-check-label">Se le imprime factura</label>
                </div>
            </div>
            <div class="col">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" v-model="client.send_later" type="checkbox" name="estatusPrincipal">
                    <label class="form-check-label">Se le envía factura</label>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <h4 class="text-center" >Telefonos Adicionales</h4>
                <div  v-for="(t, key) in client.TelefonosAdicionales" :key="key+'tel'">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Teléfono {{key+1}}: </span>
                        </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="client.TelefonosAdicionales[key]">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-danger text-white" id="basic-addon3"> 
                                <button type="button" @click="client.TelefonosAdicionales.splice(key, 1)" class="btn btn-danger btn-sm"> 
                                    <i class="fas fa-trash"></i> 
                                </button> 
                            </span>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success btn-sm" @click="client.TelefonosAdicionales.push('')" type="button"><i class="fas fa-plus"></i>  <i class="fas fa-phone"></i> </button>
            </div>
            <div class="col">
                <h4 class="text-center">Correos Electrónicos</h4>
                <div  v-for="(e, key) in client.Correos" :key="key + 'email'">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Correo {{key+1}}: </span>
                        </div>
                        <input type="email" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="client.Correos[key]">
                        <div class="input-group-prepend" v-if="key > 0">
                            <span class="input-group-text bg-danger text-white" id="basic-addon3"> 
                                <button type="button" @click="client.Correos.splice(key, 1)" class="btn btn-danger btn-sm"> 
                                    <i class="fas fa-trash"></i> 
                                </button> 
                            </span>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success btn-sm" @click="client.Correos.push('')" type="button"><i class="fas fa-plus"></i>  <i class="fas fa-envelope"></i> </button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-4">
                <h4 class="text-center" >Locales</h4>
                <div  v-for="(l, key) in client.Locales" :key="key+'local'">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Local {{key+1}}: </span>
                        </div>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="client.Locales[key]">
                        <div class="input-group-prepend" v-if="key > 0">
                            <span class="input-group-text bg-danger text-white" id="basic-addon3"> 
                                <button type="button" @click="client.Locales.splice(key, 1)" class="btn btn-danger btn-sm"> 
                                    <i class="fas fa-trash"></i> 
                                </button> 
                            </span>
                        </div>
                    </div>
                </div>
                <button class="btn btn-success btn-sm" @click="client.Locales.push('')" type="button"><i class="fas fa-plus"></i>  <i class="fas fa-building"></i> </button>
            </div>
            <div class="col-8">
                <div class="container">
                    <h4 class="text-center">Estatus</h4>
                        <span class='text-muted'>Estatus Principal</span >
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" v-model="client.status[0]" type="radio" name="estatusPrincipal" id="estatusRadio1" value="Ocupado">
                            <label class="form-check-label">Ocupado</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" v-model="client.status[0]" type="radio" name="estatusPrincipal" id="estatusRadio2" value="Desocupado">
                            <label class="form-check-label">Desocupado</label>
                        </div>

                    <div  v-for="(l, key) in client.status" :key="key+'status'">
                        <div class="input-group mb-3" v-if="key > 0">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">{{key}}: </span>
                            </div>
                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="client.status[key]">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-danger text-white" id="basic-addon3"> 
                                    <button type="button" @click="client.status.splice(key, 1)" class="btn btn-danger btn-sm"> 
                                        <i class="fas fa-trash"></i> 
                                    </button> 
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success btn-sm" @click="client.status.push('')" type="button"><i class="fas fa-plus"></i><i class="fas fa-info"></i> </button>
                </div>
            </div>
        </div>
    

        <br><br>
        <input class="btn btn-primary float-right" type="submit" value="Guardar">
    </form>
</template>

<script>
export default {
  name: 'client-form',
  props: ['client'],
  methods: {
      submit(){
          this.$emit('submitted');
      }
  }
}
</script>

