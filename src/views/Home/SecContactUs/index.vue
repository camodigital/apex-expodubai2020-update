<template>
  <div class="secContactUs">
    <div class="secContactUs__header">
      <h1 v-html="$t('contactus.titlecall')" class="zBigTitle"></h1>
      <h2 v-html="$t('contactus.subtitlecall')"></h2>
    </div>
    <div class="secContactUs__container">
      <div class="secContactUs__contact">
        <div class="secContactUs__contact__title">
          <h3 v-html="$t('contactus.titleform')" class="zTitleSmall"></h3>
        </div>
        <div class="secContactUs__contact__content">
          <form action="" class="secContactUs__contact__form">
            <input
              type="text"
              class="secContactUs__contact__input"
              placeholder="Name"
            />
            <input
              type="text"
              class="secContactUs__contact__input"
              placeholder="E-mail"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensagem"
              class="secContactUs__contact__textarea"
            ></textarea>
            <div class="secContactUs__contact__button">
              <TheButton :text="$t('contactus.buttonform')">
                <slot>
                  <IcoSubmit />
                </slot>
              </TheButton>
            </div>
          </form>
        </div>
      </div>
      <div class="secContactUs__faq">
        <h3
          class="secContactUs__faq__title zTitleSmall"
          v-html="$t('faq.titlecall')"
        ></h3>
        <div class="secContactUs__faq__text" v-html="$t('faq.call')"></div>
        <div class="secContactUs__faq__button">
          <TheButton :text="$t('faq.buttoncall')">
            <slot>
              <IcoFaq />
            </slot>
          </TheButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IcoFaq from "@/assets/images/question2.svg";
import TheButton from "@/components/TheButton";
import IcoSubmit from "@/assets/images/telegram.svg";

export default {
  name: "SecContactUs",
  components: {
    TheButton,
    IcoFaq,
    IcoSubmit
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
