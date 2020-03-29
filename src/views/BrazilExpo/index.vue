<template>
  <div class="page brazilExpoPage">
    <SecDesc />
    <SecVideo />
    <SecSustainability />
    <SecGoals />
    <SecHistory />
  </div>
</template>

<script>
import SecDesc from "@/views/BrazilExpo/SecDesc";
import SecVideo from "@/views/BrazilExpo/SecVideo";
import SecSustainability from "@/views/BrazilExpo/SecSustainability";
import SecGoals from "@/views/BrazilExpo/SecGoals";
import SecHistory from "@/views/BrazilExpo/SecHistory";

export default {
  name: "BrazilExpoPage",
  components: {
    SecDesc,
    SecVideo,
    SecSustainability,
    SecGoals,
    SecHistory
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
