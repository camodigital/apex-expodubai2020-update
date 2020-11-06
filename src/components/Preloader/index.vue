<template>
  <div class="preloader active">
    <img src="@/assets/images/logo-color.png" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Preloader",
  methods: {
    getContent() {
      const preloaderContent = document.querySelector(".preloader");
      preloaderContent.classList.add("active");

      axios
        .get("https://camoapi.com.br/wp-json/api/brasil/o-brasil-na-expo-dubai")
        .then(() => preloaderContent.classList.remove("active"));
    },
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
