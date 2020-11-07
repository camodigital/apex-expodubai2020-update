<template>
  <div class="page constactUsPage">
    <SecHeader />
    <SecFAQ />
    <SecForm />
  </div>
</template>

<script>
import SecHeader from "./SecHeader/";
import SecFAQ from "./SecFAQ/";
import SecForm from "./SecForm/";
import { TweenMax } from "gsap/all";

export default {
  name: "ConstactUsPage",
  head: {
    title: function() {
      return {
        inner: this.$i18n.t("head.contact.title"),
        separator: "-",
        complement: this.$i18n.t("head.contact.subtitle")
      };
    },
    // Meta tags
    meta: function() {
      return [
        {
          name: "application-name",
          content: this.$i18n.t("head.contact.subtitle")
        },
        {
          name: "description",
          content: this.$i18n.t("head.contact.description"),
          id: "desc"
        }, // id to replace intead of create element
        // ...
        // Twitter
        {
          name: "twitter:title",
          content: this.$i18n.t("head.contact.subtitle")
        },
        // with shorthand
        {
          n: `twitter:${this.$i18n.t("head.contact.subtitle")}`,
          c: this.$i18n.t("head.contact.description")
        },
        // Facebook / Open Graph
        { property: "fb:app_id", content: "1486431231600432" },
        { property: "fb:admins", content: "1486431231600432" },
        {
          property: "og:title",
          content: this.$i18n.t("head.contact.description")
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
    SecFAQ,
    SecForm
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
