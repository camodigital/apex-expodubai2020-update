<template>
  <div class="page pavilionPage">
    <SecHeader />
    <SecDesc />
    <SecBusiness />
    <SecPavilion />
    <SecVideo />
    <SecPhotos />
  </div>
</template>

<script>
import SecHeader from "./SecHeader";
import SecDesc from "./SecDesc";
import SecBusiness from "./SecBusiness";
import SecPavilion from "./SecPavilion";
import SecVideo from "./SecVideo";
import SecPhotos from "./SecPhotos";
import { TweenMax } from "gsap/all";

export default {
  name: "PavilionPage",
  head: {
    title: function() {
      return {
        inner: this.$i18n.t("head.pavilion.title"),
        separator: "-",
        complement: this.$i18n.t("head.pavilion.subtitle")
      };
    }
  },
  components: {
    SecHeader,
    SecDesc,
    SecBusiness,
    SecPavilion,
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
