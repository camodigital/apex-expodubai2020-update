<template>
  <div class="page brazilExpoPage">
    <SecDesc />
    <SecVideo />
    <SecSustainability />
    <SecGoals />
    <SecHistory />
  </div>
</template>

<script>
import SecDesc from "@/views/BrazilExpo/SecDesc";
import SecVideo from "@/views/BrazilExpo/SecVideo";
import SecSustainability from "@/views/BrazilExpo/SecSustainability";
import SecGoals from "@/views/BrazilExpo/SecGoals";
import SecHistory from "@/views/BrazilExpo/SecHistory";
import { TweenMax } from "gsap/all";

export default {
  name: "BrazilExpoPage",
  head: {
    title: function() {
      return {
        inner: this.$i18n.t("head.brazilexpo.title"),
        separator: "-",
        complement: this.$i18n.t("head.brazilexpo.subtitle")
      };
    }
  },
  components: {
    SecDesc,
    SecVideo,
    SecSustainability,
    SecGoals,
    SecHistory
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
