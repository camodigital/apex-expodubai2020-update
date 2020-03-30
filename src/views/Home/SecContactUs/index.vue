<template>
  <div class="secContactUs">
    <div class="secContactUs__header">
      <h1 v-html="$t('contactus.titlecall')" class="zTitleBigSpan"></h1>
      <h2 v-html="$t('contactus.subtitlecall')"></h2>
    </div>
    <div class="secContactUs__container">
      <div class="secContactUs__contact">
        <div class="secContactUs__contact__title">
          <h3 v-html="$t('contactus.titleform')" class="zTitleSmall"></h3>
        </div>
        <div class="secContactUs__contact__content">
          <TheForm />
        </div>
      </div>
      <div class="secContactUs__faq">
        <h3
          class="secContactUs__faq__title zTitleSmall"
          v-html="$t('faq.titlecall')"
        ></h3>
        <div
          class="secContactUs__faq__text zTextWaves"
          v-html="$t('faq.call')"
        ></div>
        <div class="secContactUs__faq__button">
          <router-link :to="`/${$i18n.locale}/contactus`">
            <TheButton :text="$t('faq.buttoncall')">
              <slot>
                <IcoFaq />
              </slot>
            </TheButton>
          </router-link>
        </div>
      </div>
    </div>
    <div class="secContactUs__imageBg"></div>
    <div class="secContactUs__whiteBg"></div>
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
</template>

<script>
import IcoFaq from "@/assets/images/question2.svg";
import TheButton from "@/components/TheButton";
import TheForm from "@/components/TheForm";
import TheWind from "@/components/TheWind";

export default {
  name: "SecContactUs",
  components: {
    TheButton,
    IcoFaq,
    TheForm,
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
