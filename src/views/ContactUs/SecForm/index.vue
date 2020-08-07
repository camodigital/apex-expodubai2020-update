<template>
  <div class="secForm">
    <header class="secForm__header">
      <h1 class="titleBigSpanWave" v-html="$t('apiFaq.title_form')"></h1>
    </header>
    <div class="container">
      <div class="secForm__content"><TheForm /></div>
    </div>
  </div>
</template>

<script>
import TheForm from "@/components/TheForm";

export default {
  name: "SecForm",
  components: {
    TheForm
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
