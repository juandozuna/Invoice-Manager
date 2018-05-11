<template>
  <div>
    <input type="text" :class="inputClass">
  </div>
</template>


<script>
export default {
  name: 'autocomplete-input',
  props:{
    "inputClass": {
      default: 'form-control'
    }
  }
}
</script>


<style scoped>

</style>
