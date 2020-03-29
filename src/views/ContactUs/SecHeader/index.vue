<template>
  <div class="secHeader">
    <div class="secHeader__container splitterSec">
      <div class="secHeader__content">
        <h1 class="zTitleWaves" v-html="$t('contactus.titlecall')"></h1>
      </div>
    </div>
    <div class="secHeader__bg">
      <TheFigure>
        <img
          src="@/assets/images/expodubai2020.jpg"
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
