<template>
  <div class="theVideoBg">
    <div class="theVideoBg__container">
      <div class="theVideoBg__overlay"></div>
      <video
        class="theVideoBg__video"
        poster="@/assets/images/intro.jpg"
        loop
        muted
        autoplay
      >
        <source src="@/assets/images/videointro.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheVideoBg"
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
