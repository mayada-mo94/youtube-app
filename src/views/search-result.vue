<template>
  <div class="container" v-if="videos" id="container-videos"> 
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
    <scroll-loader :loader-method="loadVideos" :loader-disable="disable">
    </scroll-loader>
  </div>
</template>
<script>
import { videos_service } from "../shared";

export default {
  name: "search",
  data() {
    return {
      filterText: "",
      disable: true,
      videos: [],
    };
  },
  async created() {
    this.videos=[];
    this.filterText = this.$route.query.query;

    if (this.filterText) {
      this.videos = [];
      await this.searchWithQuery();
    } else {
      await this.loadVideos();
    }
    this.$root.$on("receive-filter-video", (received) => {
      this.videos = [];
      this.videos = received;
    });
  },
  methods: {
    async loadVideos() {
     await videos_service.getVideos().then((newVidoes)=>{
       this.videos.push(...newVidoes);
       })
       this.disable = true;
    },
    async searchWithQuery() {
      if (this.filterText) {
       await videos_service.searchForVideo(this.filterText).then((newVidoes)=>{
        this.videos.push(...newVidoes);
       })
       this.disable = true;
      }
    },
   async handleScroll(){
     window.onscroll = async () => {
       let element = document.getElementById('container-videos');
       let bottomOfWindow = element.getBoundingClientRect().bottom < window.innerHeight;
       if(bottomOfWindow)
       {
          this.disable = false;
          await this.loadVideos();
       }
     }
  }
  },
  async mounted() {
    this.handleScroll();
  }
};
</script>
<style lang="scss">
@import "../design/shared.scss";
</style>
