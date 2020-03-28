<template>
  <div class="zContent1">
    <h1 class="zContent1__title" v-html="title" :class="classTitle"></h1>
    <div class="zContent1__text" v-html="text"></div>
    <div class="zContent1__button">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheContent",
  props: {
    title: {
      default: "Title Default"
    },
    text: {
      default: "Text Default"
    },
    classTitle: {
      default: "zTitleBigSpan"
    }
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
