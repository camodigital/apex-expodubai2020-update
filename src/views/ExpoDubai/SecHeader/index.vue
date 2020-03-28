<template>
  <div class="secHeader">
    <div class="secHeader__container">
      <h1 v-html="$t('BrazilExpo.titlecall')"></h1>
      <div class="secHeader__overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecHeader"
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
