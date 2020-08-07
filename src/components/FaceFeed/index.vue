<template>
  <ul class="faceFeed">
    <li class="faceFeed__item" v-for="item in feed" :key="item.id">
      <a href="https://www.facebook.com/Expo2020Dubai/" target="_blank">
        <div class="faceFeed__image">
          <img :src="item.node.display_url" />
        </div>
        <div class="faceFeed__text">
          <p>
            {{ item.node.edge_media_to_caption.edges[0].node.text }}
          </p>
        </div>
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
            3
          );
        })
        .then(() => {
          this.limiteText();
        });
    },
    limiteText() {
      const texts = document.querySelectorAll(".faceFeed__text p");
      texts.forEach(text => {
        let currentText = text.innerHTML;
        text.innerHTML = currentText.slice(0, 80) + "...";
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
