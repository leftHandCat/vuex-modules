<template>
  <div id="app">
    <phone-shop></phone-shop>
  </div>
</template>

<script>
//import counter from './components/Counter'
import phoneShop from './components/phoneShop.vue'


export default {
  name: 'app',
  components: {
    phoneShop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
