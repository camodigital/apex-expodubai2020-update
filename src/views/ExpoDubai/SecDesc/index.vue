<template>
  <div class="secDesc">
    <div class="secDesc__container">
      <div
        class="secDesc__content textCenter"
        v-html="$t('ExpoDubai.call')"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecDesc"
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
