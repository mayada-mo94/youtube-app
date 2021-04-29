<template>
<div class="banner">
    <div class="banner-content">
        <div class="banner-logo">
            <!-- render youtube logo based on view size -->
            <picture>
                <source media="(min-width: 56.25em)" srcset="../assets/youtube-icon.jpg" />
                <source srcset="../assets/subscribe-icon.png" />
                <img src="../assets/subscribe-icon.png" alt="Youtube logo" class="youtube-logo" />
            </picture>
        </div>
        <!-- search box in desktop view -->
        <div class="banner-search">
            <input type="text" placeholder="Search.." for="search-video" v-model.trim="nameOfVideo" name="search" @keypress.enter="searchng()" />
            <button @click="searchng()">
                <font-awesome-icon icon="search" /></button>
        </div>
        <!-- search box in mobile view -->
        <div class="mobile-banner-search">
            <form id="app" @action="searchng()">
                <label :data-state="state" class="mobile-label" for="search">
                    <button @click="searchng()" class="search-mobile">
                        <font-awesome-icon icon="arrow-right" />
                    </button>
                    <input type="text" placeholder="Search" v-model.trim="nameOfVideo" @click="state = 'opan'" />
                    <font-awesome-icon icon="search" aria-hidden="true" />
                </label>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {
    VideosService
} from "../service";
export default {
    name: "banner-header",
    data() {
        return {
            state: "close",
            nameOfVideo: "",
            videosFiltered: [],
        };
    },
    methods: {
        async searchng() {
            // check if search from channel view then redirect to search view
            let searchFromChannel = window.location.pathname.includes("channel");
            if (searchFromChannel) {
                this.$router.push(`/search?query=${this.nameOfVideo}`);
            } else {
                this.videosFiltered = [];
                this.videosFiltered = await VideosService.searchForVideo(
                    this.nameOfVideo
                );
               // emit data to search view 
                this.$root.$emit(
                    "receive-filter-video",
                    this.videosFiltered,
                    this.nameOfVideo
                );
            }
        },
    },
};
</script>

<style lang="scss">
@import "../design/Banner.scss";
</style>
