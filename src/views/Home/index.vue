<template>
  <div class="homePage">
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

export default {
  name: "HomePage",
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
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
