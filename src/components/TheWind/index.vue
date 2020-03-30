<template>
  <div class="theWind">
    <div class="theWind__container">
      <div class="theWind__head">
        <img src="@/assets/images/propellerhead.png" ref="windHead" />
      </div>
      <div class="theWind__body">
        <img src="@/assets/images/propellerbody.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power0 } from "gsap/all";

export default {
  name: "TheWind",
  methods: {
    animeWind() {
      const windHead = this.$refs.windHead;

      TweenMax.to(windHead, 30, {
        rotation: "3060",
        repeat: -1,
        ease: Power0.easeNone
      });
    }
  },
  mounted() {
    this.animeWind();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
