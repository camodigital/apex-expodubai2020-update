<template>
  <div class="page ExpoDubaiPage">
    <SecHeader />
    <SecDesc />
    <SecVideo />
    <SecPhotos />
  </div>
</template>

<script>
import SecHeader from "./SecHeader";
import SecDesc from "./SecDesc";
import SecVideo from "./SecVideo";
import SecPhotos from "./SecPhotos";
import { TweenMax } from "gsap/all";

export default {
  name: "ExpoDubaiPage",
  head: {
    title: function() {
      return {
        inner: this.$i18n.t("head.expodubai.title"),
        separator: "-",
        complement: this.$i18n.t("head.expodubai.subtitle")
      };
    }
  },
  components: {
    SecHeader,
    SecDesc,
    SecVideo,
    SecPhotos
  },
  methods: {
    hideLogoInHome() {
      const brand = document.querySelector(".theNavigation__brand__image");
      TweenMax.set(brand, {
        opacity: 1
      });
    }
  },
  mounted() {
    this.hideLogoInHome();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
