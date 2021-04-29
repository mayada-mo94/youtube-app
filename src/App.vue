<template>
  <div id="app">
    <banner-component/>
    <div class="main-section columns">
      <main class="column">
         <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import BannerComponent from './components/BannerHeader';

export default {
  name: 'App',
  components: {
    BannerComponent,
  }
}
</script>

<style lang="scss">
@import "./design/App.scss";
</style>
