<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-logo">
        <img alt="Youtube logo" class="youtube-logo" src="../assets/youtube-icon.png" />
      </div>
      <div class="banner-search">
        <input type="text" placeholder="Search.." name="search" />
        <font-awesome-icon icon="search" />
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  .banner-content {
    padding: 16px;
    min-width: 100%;
    margin: 0 auto;
    display: flex;
    .youtube-logo{
    height: 30%;
}
    .banner-search {
    flex-grow: 1;
    line-height: 1.4;
    font-family: "Quicksand", sans-serif;
  }
  }
}
</style>
