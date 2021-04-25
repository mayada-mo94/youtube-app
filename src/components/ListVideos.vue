<template>
  <div class="container" v-if="videos">
    <table class="table">
      <tr>
        <td v-for="video in videos" :key="video.snippet.title">
        <img class="img-url" v-bind:src="video.snippet.thumbnails.medium.url" />
         <span> {{ video.snippet.title }}</span>
         <p> {{ video.snippet.description }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { data } from "../shared";

export default {
  name: "list-videos",
  data() {
    return {
      videos: [],
    };
  },
  async created() {
      this.$root.$on('receive-filter-video',(received)=>{
          this.videos= received;
console.log(received);
      }),
    await this.loadVideos();
  },
  methods: {
    async loadVideos() {
      this.videos = [];
      this.videos = await data.getVideos();
    },
  },
};
</script>
<style lang="scss" scoped>
table.table {
  width: 100%;
}

.table td {
  text-align: left;
  padding: 0.25em;
  display: block;
}

.table tr {
  border-bottom: 1px solid #ddd;
}


@media screen and (max-width: 800px) {
  tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.5em 0;
    border: 1px solid rgba(3, 3, 3, 0.2);
  }
  td,
  th {
    flex: 1 1 150px;
    border: 0.5px solid rgba(3, 3, 3, 0.2);
  }
}
</style>
