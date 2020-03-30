<template>
  <div class="theForm">
    <div class="theForm__container">
      <form action="" class="theForm__form">
        <div class="theForm__input">
          <input type="text" :placeholder="$t('contactus.inputname')" />
        </div>
        <div class="theForm__input">
          <input type="email" :placeholder="$t('contactus.inputemail')" />
        </div>
        <div class="theForm__textarea">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            :placeholder="$t('contactus.inputmessage')"
          ></textarea>
        </div>
        <div class="theForm__button">
          <button class=" theButton">
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

export default {
  name: "TheForm",
  components: {
    IcoSubmit
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
