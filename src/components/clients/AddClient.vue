<template>
    <form>
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

        <input class="btn btn-primary" type="submit" value="Agregrar"></input>
    </form>

    <router-link :to="{name: 'clientes-list'}" class="btn btn-primary">Listado</router-link>
</template>


<script>
export default {
  name: 'add-client',
  data(){
      return{

      }
  }
}
</script>


<style scoped>

</style>
