<template>
  <figure class="zFigure">
    <div class="zFigure__overlay"></div>
    <slot>
      The Figure
    </slot>
  </figure>
</template>

<script>
export default {
  name: "TheFigure"
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
