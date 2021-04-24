<template>
  <div class="banner">
    <div class="banner__content">
      <div class="banner__text">
        <img alt="Vue logo" src="../assets/logo.png">
        <input type="text" placeholder="Search.." name="search">
        <font-awesome-icon icon="search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner{
    .banner__content {
      padding: 16px;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    
    .banner__text {
      flex-grow: 1;
      line-height: 1.4;
      font-family: "Quicksand", sans-serif;
    }
 }
</style>
