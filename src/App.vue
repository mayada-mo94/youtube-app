<template>
  <div id="app">
    <banner-component/>
  </div>
</template>

<script>
import BannerComponent from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    BannerComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
