<template>
  <div class="container" v-if="videos">
    <div class="channel-header">
      <img class="channel-url" v-bind:src="channelInfo.bannerUrl" />
      <div class="channel-info">
        <div></div>
        <div>
          <p class="channel-title">{{ channelInfo.channelTitle }}</p>
          <img class="subscribe-icon" src="../assets/subscribe-icon.png" />
          <span>Subscribers {{ channelInfo.subscriberCount | formatNumber }}</span>
        </div>
        <div></div>
      </div>
    </div>

    <table class="table">
      <tr>
        <td v-for="video in videos" :key="video.videoTitle">
          <img class="img-url" v-bind:src="video.videoImgUrl" />
          <span> {{ video.videoTitle }}</span>
          <p>{{ video.videoDescription }}</p>
          <p>views: {{ video.videoViewCount }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { channel } from "../shared";

export default {
  name: "Channel",
  props: {
    id: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      videos: [],
      channelInfo: {},
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.loadVideos(this.id);
    await this.loadChannelInfo(this.id);
  },
  methods: {
    async loadVideos(id) {
      this.videos = [];
      this.videos = await channel.getVideosOfChannel(id);
    },
    async loadChannelInfo(id) {
      this.channelInfo = {};
      this.channelInfo = await channel.getChannelData(id);
    },
  },
};
</script>
<style scoped>
.channel-header {
  padding: 30px;
}
.channel-url {
  margin-top: 40px;
  min-width: 55%;
  height: calc((150vw - 240px) / 6.2 - 1px);
}
.channel-info {
  display: flex;
}
.channel-info > div {
  text-align: left;
  flex: 1;
}
.channel-title {
  margin: 1px;
}
.subscribe-icon {
  height: 32px;
  margin-bottom: -10px;
}
</style>