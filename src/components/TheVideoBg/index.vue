<template>
  <div class="theVideoBg">
    <div class="theVideoBg__overlay"></div>
    <div v-if="showVideo" class="theVideoBg__container">
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
  name: "TheVideoBg",
  data() {
    return {
      showVideo: false
    };
  },
  methods: {
    isMobile() {
      if (window.innerWidth < 600) {
        this.showVideo = false;
      } else {
        this.showVideo = true;
      }
    }
  },
  mounted() {
    this.isMobile();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
