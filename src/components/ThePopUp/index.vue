<template>
  <div class="thePopUp">
    <div class="thePopUp__container">
      <div class="thePopUp__content">
        <div class="thePopUp__close"><buttonClose @click="hide" /></div>
        <div class="thePopUp__message">
          <p>
            A Expo 2020 Dubai foi adiada para 2021/2022 em razão da pandemia da
            Covid-19.
          </p>
          <p>
            Expo 2020 Dubai was postponed to 2021/2022 due to the Covid-19
            pandemic.
          </p>
        </div>
        <div class="thePopUp__learnMore">
          <a
            target="_blank"
            href="https://portal.apexbrasil.com.br/noticia/expo-2020-dubai-e-adiada-em-um-ano/"
          >
            Saiba Mais / Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonClose from "@/assets/images/close.svg";

export default {
  name: "ThePopUp",
  components: {
    buttonClose
  },
  methods: {
    hide() {
      const popUp = document.querySelector(".thePopUp");
      popUp.classList.add("thePopUp__hide");
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
