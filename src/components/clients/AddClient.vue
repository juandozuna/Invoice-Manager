<template>
    <div>
        <router-link :to="{name: 'clientes-list'}" class="btn btn-secondary float-right">Listado</router-link>
        <br>
    <form @submit.prevent="submit">
        <div class="form-group">
            <label>Nombre</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Telefono</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control">
        </div>

        <input class="btn btn-primary" type="submit" value="Agregrar">
    </form>

    
    </div>
</template>


<script>
export default {
  name: 'add-client',
  data(){
      return{

      }
  },
  methods:{
      submit(){
          this.$router.push({
              name: 'clientes-list'
          });
      }
  }
}
</script>


<style scoped>

</style>
