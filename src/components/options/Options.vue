<template>
    <div class="options">
        <h1 class="text-center">Configuraciones</h1>
        <hr>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <div class="container informacion options-box">
                        <h3 class="text-center">Información Compañía</h3>
                        <div class="form-group row">
                            <label class="col-sm-3">Nombre</label>
                            <input type="text" class="form-control col-sm-9" v-model="options.company.name">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Dirección 1</label>
                            <input type="text" class="form-control col-sm-9" v-model="options.company.address1">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Dirección 2</label>
                            <input type="text" class="form-control col-sm-9" v-model="options.company.address1">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Sector</label>
                            <input type="text" class="form-control col-sm-9" v-model="options.company.sector">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Teléfono: </label>
                            <input type="text" class="form-control col-sm-9" v-model="options.company.telefono">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="correo options-box">
                        <h3 class="text-center">Configuraciónes Correo Electrónico</h3>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group ">
                                    <label for="">Correo Electrónico</label>
                                    <input type="email" class="form-control" v-model="options.correo.email">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group ">
                                    <label for="">Contraseña</label>
                                    <input type="password" class="form-control" v-model="options.correo.password">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group">
                                    <label>Servidor de Salida</label>
                                    <input type="text" class="form-control" v-model="options.correo.outgoingServer">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label>Puerto de Acceso</label>
                                    <input type="text" class="form-control" v-model="options.correo.port">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "options",
  data(){
      return {
          options: {
              company: {
                  name: 'w',
                  address1: 'e',
                  address2: 'r',
                  sector: 't',
                  telefono: 'y',
              },
              correo: {
                  email: '1dfs',
                  password: 'dfsdfsds',
                  outgoingServer: 'dfs',
                  protocol: 'a',
                  port: 'df',
              }
          }
      }
  }
}
</script>


<style scoped>
    .options{
        font-family: 'Century Gothic';
    }

    .informacion{
        background-color: aliceblue;
        padding-right: 30px;
        padding-bottom: 1px;
    }

    .options-box{
        box-shadow: inset -2px -1px 3px 4px rgba(0,0,0,0.3);
        border-radius: 8px;
        border: ridge 1px rgba(0,0,0,0.5);
    }

    .correo{
        padding-left: 10px;
        padding-right: 15px;
        padding-bottom: 2px;
        background-color: rgb(253, 243, 228)
    }
</style>
