<template>
  <div>
    <div class="bg"></div>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/header/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
  @import './main.css';
</style>



