<template>
  <div>
    <div class="bg"></div>
    <navbar></navbar>

    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/header/Navbar';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  @import './main.css';
</style>



