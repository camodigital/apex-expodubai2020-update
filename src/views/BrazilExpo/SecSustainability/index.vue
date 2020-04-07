<template>
  <div class="secSustainability">
    <div class="secSustainability__container">
      <div class="secSustainability__content">
        <div class="secSustainability__title">
          <div class="titleIcon">
            <div class="titleIcon__icon"><IcoSust /></div>
            <h1
              class="titleIcon__title"
              v-html="$t('BrazilExpo.titlesustainability')"
            ></h1>
          </div>
        </div>
        <div class="secSustainability__text">
          <div v-html="$t('BrazilExpo.contentsustainability')"></div>
        </div>
      </div>
      <div class="secSustainability__bg">
        <TheFigure>
          <img src="@/assets/images/sustent.jpg" alt="" />
        </TheFigure>
      </div>
    </div>
  </div>
</template>

<script>
import IcoSust from "@/assets/images/icosustenta.svg";
import TheFigure from "@/components/TheFigure";

export default {
  name: "SecSustainability",
  components: {
    TheFigure,
    IcoSust
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
