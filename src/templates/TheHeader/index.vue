<template>
  <header class="theHeader">
    <TheNavigation />
    <ThePopUp />
  </header>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
import ThePopUp from "@/components/ThePopUp";

export default {
  name: "TheHeader",
  components: {
    TheNavigation,
    ThePopUp
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
