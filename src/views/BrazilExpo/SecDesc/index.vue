<template>
  <div class="secDesc2">
    <div class="secDesc2__container">
      <div class="secDesc2__content">
        <div class="megaHeader">
          <div class="megaHeader__content">
            <h1 class="megaHeader__title" v-html="$t('apiBrasil.title')"></h1>
            <div class="megaHeader__text">
              <div v-html="$t('apiBrasil.text')"></div>
              <span class="theWind1">
                <TheWind />
              </span>
              <span class="theWind2">
                <TheWind />
              </span>
              <span class="theWind3">
                <TheWind />
              </span>
            </div>
          </div>
          <div class="megaHeader__bg">
            <TheFigure>
              <img
                src="@/assets/images/expodubai2020.jpg"
                :alt="$t('apiBrasil.title')"
              />
            </TheFigure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheWind from "@/components/TheWind";

export default {
  name: "SecDesc2",
  components: {
    TheFigure,
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
