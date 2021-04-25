<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-logo">
        <img
          alt="Youtube logo"
          class="youtube-logo"
          src="../assets/youtube-icon.png"
        />
      </div>
      <div class="banner-search">
        <input
          type="text"
          placeholder="Search.."
          for="search-video"
          v-model.trim="nameOfVideo"
          name="search"
          @keypress.enter="searchng()"
        />
        <div @click="searchng()">
          <font-awesome-icon icon="search" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "../shared";
export default {
  name: "search-videos",
  data() {
    return {
      nameOfVideo: "",
      videosFiltered: [],
    };
  },
  methods: {
    async searchng() {
      this.videosFiltered = [];
      this.videosFiltered = await data.searchForVideo(this.nameOfVideo);

      console.log(this.videosFiltered)
     this.$root.$emit("receive-filter-video",this.videosFiltered);
     this.nameOfVideo="";
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  .banner-content {
    padding: 16px;
    min-width: 100%;
    margin: 0 auto;
    display: flex;
    .youtube-logo {
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
