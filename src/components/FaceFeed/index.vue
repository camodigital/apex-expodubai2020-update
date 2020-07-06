<template>
  <ul class="faceFeed">
    <li class="faceFeed__item" v-for="item in feed" :key="item.id">
      <a :href="item.postUrl" target="_blank">
        <div class="faceFeed__image">
          <img :src="item.postImages[0].image" :alt="item.postText" />
        </div>
        <div class="faceFeed__text">
          <p>{{ item.postText }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "FaceFeed",
  data() {
    return {
      feed: null
    };
  },
  methods: {
    getFeed() {
      axios
        .get("https://api.apify.com/v2/datasets/FJjV77zB3zVO2wQIJ/items")
        .then(response => {
          this.feed = response.data[0].posts.slice(0, 3);
        })
        .then(() => {
          this.limiteText();
        });
    },
    limiteText() {
      const texts = document.querySelectorAll(".faceFeed__text p");
      console.log(texts);

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
