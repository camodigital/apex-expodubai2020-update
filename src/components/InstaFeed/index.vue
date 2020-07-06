<template>
  <ul class="instaFeed">
    <li v-for="item in feed" :key="item.id">
      <a :href="urlBase + item.node.shortcode" target="_blank">
        <img :src="item.node.display_url" alt />
      </a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "InstaFeed",
  data() {
    return {
      feed: null,
      urlBase: "https://www.instagram.com/p/"
    };
  },
  methods: {
    getFeed() {
      axios
        .get("https://www.instagram.com/expo2020dubai/?__a=1")
        .then(response => {
          this.feed = response.data.graphql.user.edge_owner_to_timeline_media.edges.slice(
            0,
            6
          );
        });
    }
  },
  mounted() {
    this.getFeed();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
