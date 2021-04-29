<template>
<div class="container" v-if="videos" id="container-videos">
    <table class="table">
        <tr>
            <td v-for="video in videos" :key="video.videoRowKey">
                <div class="video-img">
                    <img class="img-url" v-bind:src="video.videoImgUrl" />
                </div>
                <div class="video-description">
                    <p>{{ video.videoTitle }}</p>
                    <router-link tag="button" class="link" :to="'/channel/' + video.videochannelId">
                        <span>{{ video.videoChannelName }}</span>
                    </router-link>
                    <span>{{ video.videoViewCount }} views</span>
                    <p>{{ video.videoDescription }}</p>
                </div>
            </td>
        </tr>
    </table>
    <input ref="nameOfVideo" v-model.trim="nameOfVideo" id="nameOfVideoHidden" />
    <!-- scroll loader dispalyed when scroll down -->
    <scroll-loader :loader-method="loadVideos" :loader-disable="disable">
    </scroll-loader>
</div>
</template>

<script>
import {
    VideosService
} from "../service";

export default {
    name: "search",
    data() {
        return {
            filterText: "",
            disable: true,
            videos: [],
            nameOfVideo: "",
        };
    },
    async created() {
        this.videos = [];
        this.filterText = this.$route.query.query;

        if (this.filterText) {
            this.videos = [];
            await this.searchWithQuery();
        } else {
            await this.loadVideos();
        }
        this.$root.$on("receive-filter-video", (received, nameOfVideo) => {
            this.videos = [];
            this.videos = received;
            this.nameOfVideo = nameOfVideo;
        });
    },
    methods: {
        async loadVideos() {
            this.disable = false;
            await VideosService.getVideos().then((newVidoes) => {
                this.videos.push(...newVidoes);
            });
            this.disable = true;
        },
        async searchWithQuery() {
            if (this.filterText) {
                this.disable = false;
                await VideosService.searchForVideo(this.filterText).then(
                    (newVidoes) => {
                        this.videos.push(...newVidoes);
                    }
                );
                this.disable = true;
            }
        },
        async handleScroll() {
            window.onscroll = async () => {
                let element = document.getElementById("container-videos");
                let bottomOfWindow = element.getBoundingClientRect().bottom - 20 < window.innerHeight;
                if (bottomOfWindow) {
                    this.disable = false;
                    // try to handle endless scrolling during search with specific data
                    if (this.filterText || this.nameOfVideo) {
                        this.filterText = this.nameOfVideo;
                        await this.searchWithQuery();
                    } else {
                        await this.loadVideos();
                    }
                }
            };
        },
    },
    async mounted() {
        this.handleScroll();
    },
};
</script>

<style lang="scss">
@import "../design/shared.scss";
</style>
