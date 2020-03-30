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
