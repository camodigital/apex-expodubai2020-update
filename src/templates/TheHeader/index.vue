<template>
  <header class="theHeader">
    <TheNavigation />
  </header>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  name: "TheHeader",
  components: {
    TheNavigation
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
