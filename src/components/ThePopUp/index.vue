<template>
  <div class="thePopUp thePopUp__hide">
    <div class="thePopUp__container">
      <div class="thePopUp__content">
        <div class="thePopUp__close"><buttonClose @click="hide" /></div>
        <div class="thePopUp__message" v-html="$t('apiGeral.text_popup')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonClose from "@/assets/images/close.svg";
import axios from "axios";

export default {
  name: "ThePopUp",
  data() {
    return {
      actived: null,
      urlBase:
        "http://camodigital.com.br/cms/expodubai/wp-json/api/geral/o-brasil-na-expo-dubai"
    };
  },
  components: {
    buttonClose
  },
  methods: {
    active() {
      axios.get(this.urlBase).then(response => {
        this.actived = response.data.active_popup;

        if (this.actived) {
          const popUp = document.querySelector(".thePopUp");
          popUp.classList.remove("thePopUp__hide");
        }
      });
    },
    hide() {
      const popUp = document.querySelector(".thePopUp");
      popUp.classList.add("thePopUp__hide");
    }
  },
  mounted() {
    this.active();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
