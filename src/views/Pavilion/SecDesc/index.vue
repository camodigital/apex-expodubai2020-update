<template>
  <div class="secDesc">
    <div class="secDesc__container">
      <div
        class="secDesc__content textCenter"
        v-html="$t('pavilion.content')"
      ></div>
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
    <span class="theWind4">
      <TheWind />
    </span>
    <span class="theWind5">
      <TheWind />
    </span>
  </div>
</template>

<script>
import TheWind from "@/components/TheWind";

export default {
  name: "SecDesc",
  components: {
    TheWind
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
