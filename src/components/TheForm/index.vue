<template>
  <div class="theForm">
    <div class="theForm__container">
      <div v-if="showSucess" class="showSucess">E-mail enviado.</div>
      <div v-if="loadingTxt" class="showSend">Enviando sua mensagem...</div>
      <form
        role="form"
        method="POST"
        @submit.prevent="sendEmail"
        class="theForm__form"
      >
        <div class="theForm__input">
          <input
            type="text"
            :placeholder="$t('apiFaq.name_form')"
            name="user_name"
            v-model="nameMsg"
          />
        </div>
        <div class="theForm__input">
          <input
            type="email"
            :placeholder="$t('apiFaq.email_form')"
            name="user_email"
            v-model="emailMsg"
          />
        </div>
        <div class="theForm__textarea">
          <textarea
            name="message"
            cols="30"
            rows="10"
            :placeholder="$t('apiFaq.message_form')"
            v-model="messageMsg"
          ></textarea>
        </div>
        <div class="theForm__button">
          <button
            class=" theButton"
            :disabled="!nameMsg || !emailMsg || !messageMsg"
          >
            <div class="theButton__container">
              <div class="theButton__text">
                {{ $t("apiGeral.button_send") }}
              </div>
              <div class="theButton__icon">
                <slot>
                  <IcoSubmit />
                </slot>
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IcoSubmit from "@/assets/images/telegram.svg";
import emailjs from "emailjs-com";

export default {
  name: "TheForm",
  data() {
    return {
      nameMsg: "",
      emailMsg: "",
      messageMsg: "",
      loadingTxt: false,
      showSucess: false,
      result: null,
      error: null
    };
  },
  components: {
    IcoSubmit
  },
  methods: {
    handleShowSucess() {
      this.showSucess = true;

      setInterval(() => {
        this.showSucess = false;
      }, 2000);
    },
    sendEmail: e => {
      emailjs
        .sendForm(
          "gmail",
          "form_contact",
          e.target,
          "user_O0PbwXD0k2e7p6gFB4PeB"
        )
        .then(
          result => {
            // console.log("SUCCESS!", result.status, result.text);
            alert("Mensagem enviada com sucesso.");
            this.result = result;
          },
          error => {
            // console.log("FAILED...", error);
            this.error = error;
          }
        );
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
