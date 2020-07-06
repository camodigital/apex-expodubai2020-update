<template>
  <div class="secSocial">
    <div class="secSocial__container theContainer">
      <span class="theWave1 theWave">
        <TheWaveH />
      </span>
      <div class="secSocial__facebook">
        <div class="secSocial__facebook__header">
          <h1 class="zTitleMedium">
            <IcoFacebook />
            <span>Facebook</span>
          </h1>
          <FaceFeed />
        </div>
      </div>

      <div class="secSocial__instagram">
        <div class="secSocial__instagram__header">
          <h1 class="zTitleMedium">
            <IcoInstagram />
            <span>Instagram</span>
          </h1>
          <InstaFeed />
        </div>
      </div>
    </div>
    <span class="theWind1">
      <TheWind />
    </span>
    <span class="theWind2">
      <TheWind />
    </span>
    <span class="theWind3">
      <TheWind />
    </span>
  </div>
</template>

<script>
import IcoFacebook from "@/assets/images/icoFacebook.svg";
import IcoInstagram from "@/assets/images/icoInstagram.svg";
import TheWaveH from "@/components/TheWaveH";
import TheWind from "@/components/TheWind";
import FaceFeed from "@/components/FaceFeed";
import InstaFeed from "@/components/InstaFeed";

export default {
  name: "SecSocial",
  components: {
    IcoFacebook,
    IcoInstagram,
    TheWaveH,
    TheWind,
    FaceFeed,
    InstaFeed
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
