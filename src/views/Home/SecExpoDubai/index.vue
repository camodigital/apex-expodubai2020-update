<template>
  <div class="SecExpoDubai">
    <div class="SecExpoDubai__container">
      <div class="SecExpoDubai__col">
        <div class="SecExpoDubai__figure">
          <img
            src="@/assets/images/expo2020-call.jpg"
            alt="O que é a Expo 2020?"
            class="SecExpoDubai__image"
          />
        </div>
      </div>
      <div class="SecExpoDubai__col">
        <div class="SecExpoDubai__content">
          <h1 class="SecExpoDubai__content__title">
            O que é a Expo 2020?
          </h1>
          <div class="SecExpoDubai__content__text">
            call
          </div>
          <div class="SecExpoDubai__content__button">
            <TheButton text="Saiba Mais" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton/";

export default {
  name: "secExpoDubai",
  components: {
    TheButton
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
