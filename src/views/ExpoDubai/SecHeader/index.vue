<template>
  <div class="secHeader">
    <div class="secHeader__container">
      <h1 v-html="$t('BrazilExpo.titlecall')"></h1>
    </div>
    <div class="secHeader__bg">
      <TheFigure>
        <img
          src="@/assets/images/expo2020-call.jpg"
          :alt="$t('BrazilExpo.titlecall')"
        />
      </TheFigure>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";

export default {
  name: "SecHeader",
  components: {
    TheFigure
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
