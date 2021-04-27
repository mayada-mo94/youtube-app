<template>
  <div class="container" v-if="videos">
    <table class="table">
      <tr>
        <td v-for="video in videos" :key="video.videoTitle">
          <div class="video-img">
            <img class="img-url" v-bind:src="video.videoImgUrl" />
          </div>
          <div class="video-description">
            <p>{{ video.videoTitle }}</p>
            <router-link
              tag="button"
              class="link"
              :to="'/channel/' + video.videochannelId"
            >
              <span>{{ video.videoChannelName }}</span>
            </router-link>
            <span>{{ video.videoViewCount }} views</span>
            <p>{{ video.videoDescription }}</p>
          </div>
        </td>
      </tr>
    </table>
    <!-- <scroll-loader :loader-method="loadVideos" :loader-disable="disable">
</scroll-loader> -->
  </div>
</template>
<script>
import { data } from "../shared";

export default {
  name: "search",
  data() {
    return {
      filterText: "",
      disable: false,
      videos: [],
      // maxResults: 5,
    };
  },
  async created() {
    let parameters = this.$route.query;
    this.filterText = parameters.query;
    if (this.filterText) {
      await this.searchWithQuery();
    } else {
      await this.loadVideos();
    }

    this.$root.$on("receive-filter-video", (received) => {
      this.videos = received;
    });
  },
  methods: {
    async loadVideos() {
      this.videos = [];
      //this.maxResults
      this.videos =  await data.getVideos();
    },
    async searchWithQuery() {
      this.videos = [];
      if (this.filterText) {
        this.videos = await data.searchForVideo(this.filterText);
      }
    },
  },
  // async mounted() {
  //    async getResultSet() {
  //     window.onscroll = async () => {
  //       let bottomOfWindow = this.videos.length >= 5;
  //       // let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
  //       // let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
  //       if (bottomOfWindow) {
  //         this.maxResults += 5;
  //         console.log(this.maxResults);
  //         //this.videos = await this.loadVideos();
  //       }
  //     };
  //   },
  //   await this.getResultSet();
  // },
};
</script>
<style lang="scss">
@import "../design/shared.scss";
</style>
