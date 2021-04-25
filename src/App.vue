<template>
  <div id="app">
    <banner-component/>
    <div class="main-section columns">
      <main class="column">
        <list-videos/>
      </main>
    </div>
  </div>
</template>

<script>
import BannerComponent from './components/Banner';
import ListVideos from './components/ListVideos.vue';

export default {
  name: 'App',
  components: {
    BannerComponent,
    ListVideos
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
}
</style>
