<template>
  <div class="secFAQ">
    <div class="secFAQ__container .theContainer">
      <header
        class="secFAQ__header zTitleBigSpan"
        v-html="$t('apiFaq.title_faq')"
      ></header>
      <div class="secFAQ__content">
        <TheExpandText />
      </div>
    </div>
  </div>
</template>

<script>
import TheExpandText from "@/components/TheExpandText";

export default {
  name: "SecFAQ",
  components: {
    TheExpandText
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
