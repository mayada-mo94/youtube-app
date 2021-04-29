<template>
<div class="channel-container" v-if="videos">
    <div class="channel-header">
        <img class="channel-url" v-bind:src="channelInfo.bannerUrl" />
        <div class="channel-info">
            <div>
                <p class="channel-title">{{ channelInfo.channelTitle }}</p>
                <img class="subscribe-icon" src="../assets/subscribe-icon.png" />
                <span>Subscribers {{ channelInfo.subscriberCount | formatNumber }}</span>
            </div>
        </div>
    </div>

    <table class="channel-table">
        <tr>
            <td v-for="video in videos" :key="video.videoTitle">
                <img class="img-url" v-bind:src="video.videoImgUrl" />
                <div class="video-data">
                    <span> {{ video.videoTitle }}</span>
                    <p>{{ video.videoDescription }}</p>
                    <p>views: {{ video.videoViewCount }}</p>
                </div>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import {
    Channel
} from "../service";

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
            this.videos = await Channel.getVideosOfChannel(id);
        },
        async loadChannelInfo(id) {
            this.channelInfo = {};
            this.channelInfo = await Channel.getChannelData(id);
        },
    },
};
</script>

<style lang="scss">
@import "../design/shared.scss";
@import "../design/Channel.scss";
</style>
