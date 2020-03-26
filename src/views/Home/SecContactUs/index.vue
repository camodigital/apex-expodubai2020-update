<template>
  <div class="secContactUs">
    <div class="secContactUs__header">
      <h1>fale conosco</h1>
      <h2>subtitle</h2>
    </div>
    <div class="secContactUs__container">
      <div class="secContactUs__contact">
        <div class="secContactUs__contact__title">
          <h2>Entre em contato</h2>
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
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
      <div class="secContactUs__faq">
        <h2 class="secContactUs__faq__title">perguntas frequentes</h2>
        <div class="secContactUs__faq__text">text</div>
        <div class="secContactUs__faq__button">
          <TheButton text="Acessar o faq">
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

export default {
  name: "SecContactUs",
  components: {
    TheButton,
    IcoFaq
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
