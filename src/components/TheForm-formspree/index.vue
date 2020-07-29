<template>
  <div class="theForm">
    <div class="theForm__container">
      <form
        role="form"
        method="POST"
        @submit.prevent="sendEmail"
        class="theForm__form"
      >
        <div class="theForm__input">
          <input
            type="text"
            :placeholder="$t('contactus.inputname')"
            name="nome"
            v-model="nameMsg"
          />
        </div>
        <div class="theForm__input">
          <input
            type="email"
            :placeholder="$t('contactus.inputemail')"
            name="email"
            v-model="emailMsg"
          />
        </div>
        <div class="theForm__textarea">
          <textarea
            name="mensagem"
            cols="30"
            rows="10"
            :placeholder="$t('contactus.inputmessage')"
            v-model="messageMsg"
          ></textarea>
        </div>
        <div class="theForm__button">
          <button
            class="theButton"
            :disabled="!nameMsg || !emailMsg || !messageMsg"
          >
            <div class="theButton__container">
              <div class="theButton__text">
                {{ $t("contactus.buttonform") }}
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
import axios from "axios";

export default {
  name: "TheForm",
  data() {
    return {
      nameMsg: "",
      emailMsg: "",
      messageMsg: "",
      loadingTxt: true,
      showSucess: true,
      responseGeral: null
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
    sendEmail() {
      this.loadingTxt = true;
      axios
        .post("https://formspree.io/mqkydybb", {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Expo Dubai Site`,
          message: this.messageMsg
        })
        .then(response => {
          this.nameMsg = "";
          this.emailMsg = "";
          this.messageMsg = "";
          this.loadingTxt = false;
          //i redirect my app to '/success' route once payload completed.
          this.$router.push({ path: "/" });
          this.responseGeral = response;
          this.handleShowSucess();
        })
        .catch(error => {
          if (error.response) {
            // eslint-disable-next-line no-alert
            alert(error.response.data);
          }
        });
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
