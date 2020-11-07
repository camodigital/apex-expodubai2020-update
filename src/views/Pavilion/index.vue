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
    },
    // Meta tags
    meta: function() {
      return [
        {
          name: "application-name",
          content: this.$i18n.t("head.pavilion.subtitle")
        },
        {
          name: "description",
          content: this.$i18n.t("head.pavilion.description"),
          id: "desc"
        }, // id to replace intead of create element
        // ...
        // Twitter
        {
          name: "twitter:title",
          content: this.$i18n.t("head.pavilion.subtitle")
        },
        // with shorthand
        {
          n: `twitter:${this.$i18n.t("head.pavilion.subtitle")}`,
          c: this.$i18n.t("head.pavilion.description")
        },
        // Facebook / Open Graph
        { property: "fb:app_id", content: "1486431231600432" },
        { property: "fb:admins", content: "1486431231600432" },
        {
          property: "og:title",
          content: this.$i18n.t("head.pavilion.description")
        },
        // with shorthand
        {
          p: "og:image",
          c: "https://brasilexpodubai2020.com/img/logo-color.aa7c60fc.png"
        }
        // ...
      ];
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
