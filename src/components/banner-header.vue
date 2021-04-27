<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-logo">
        <picture>
          <source
            media="(min-width: 56.25em)"
            srcset="../assets/youtube-icon.jpg"
          />
          <source srcset="../assets/subscribe-icon.png" />
          <img
            src="../assets/subscribe-icon.png"
            alt="Youtube logo"
            class="youtube-logo"
          />
        </picture>
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
        <button @click="searchng()"><font-awesome-icon icon="search" /></button>
      </div>
      <div class="mobile-banner-search">
        <form id="app" action="#">
          <label :data-state="state" class="mobile-label" for="search">
            <button @click="searchng()" class="search-mobile">
            <font-awesome-icon icon="arrow-right" />
            </button>
            <input
              type="text"
              placeholder="Search"
              v-model.trim="nameOfVideo"
              @click="state = 'opan'"
            />
              <!-- @blur="state = 'close'" -->

            <font-awesome-icon icon="search" aria-hidden="true" />
          </label>
        </form>
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
      state: "close",
      nameOfVideo: "",
      videosFiltered: [],
    };
  },
  methods: {
    async searchng() {
      this.videosFiltered = [];
      this.videosFiltered = await data.searchForVideo(this.nameOfVideo);

      console.log(this.videosFiltered);
      this.$root.$emit("receive-filter-video", this.videosFiltered);
      this.nameOfVideo = "";
    },
  },
};
</script>
<style lang="scss">
@import "../design/shared.scss";
</style>