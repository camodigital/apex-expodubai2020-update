<template>
  <div class="page homePage">
    <SecIntro />
    <SecExpoDubai />
    <SecPhoto />
    <SecBrazilExpo />
    <SecPavilion />
    <SecNews />
    <SecSocial />
    <SecParticipate />
    <secContactUs />
  </div>
</template>

<script>
import SecIntro from "./SecIntro/";
import SecExpoDubai from "./SecExpoDubai/";
import SecPhoto from "./SecPhoto/";
import SecBrazilExpo from "./SecBrazilExpo/";
import SecPavilion from "./SecPavilion/";
import SecNews from "./SecNews/";
import SecSocial from "./SecSocial/";
import SecParticipate from "./SecParticipate/";
import secContactUs from "./SecContactUs/";
import { TweenMax } from "gsap/all";

export default {
  name: "HomePage",
  head: {
    title: function() {
      return {
        inner: this.$i18n.t("head.home.title"),
        separator: "-",
        complement: this.$i18n.t("head.home.subtitle")
      };
    }
  },
  components: {
    SecIntro,
    SecExpoDubai,
    SecPhoto,
    SecBrazilExpo,
    SecPavilion,
    SecNews,
    SecSocial,
    SecParticipate,
    secContactUs
  },
  methods: {
    setHeadInfo() {
      if (this.$i18n.locale == "en") {
        this.title = "ingles";
      } else {
        this.title = "portugues";
      }
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    hideLogoInHome() {
      const brand = document.querySelector(".theNavigation__brand__image");
      TweenMax.set(brand, {
        opacity: 0
      });
    }
  },
  mounted() {
    this.hideLogoInHome();
    this.toggleBodyClass("addClass", "home");
    this.setHeadInfo();
  },
  destroyed() {
    this.toggleBodyClass("removeClass", "home");
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
