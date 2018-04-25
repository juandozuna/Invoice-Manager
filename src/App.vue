<template>
  <div>
    <div class="bg"></div>
    <navbar></navbar>
    <br><br>
    <div style="margin-bottom: 40px"></div>
    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/header/Navbar';


export default {
  name: 'app',
  components: {
    Navbar
  },
  created(){
    
  }
}
</script>

<style>
  @import './main.css';
</style>



