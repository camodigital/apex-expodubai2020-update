<template>
  <div class="pavilionPage">
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

export default {
  name: "PavilionPage",
  components: {
    SecHeader,
    SecDesc,
    SecBusiness,
    SecPavilion,
    SecVideo,
    SecPhotos
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
