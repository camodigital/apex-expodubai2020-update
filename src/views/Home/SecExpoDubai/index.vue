<template>
  <div class="secExpoDubai">
    <div class="secExpoDubai__container">
      <div class="secExpoDubai__col">
        <div class="secExpoDubai__figure">
          <!-- <img
            src="@/assets/images/expo2020-call.jpg"
            alt="O que é a Expo 2020?"
            class="secExpoDubai__image"
          /> -->
        </div>
      </div>
      <div class="secExpoDubai__col">
        <div class="secExpoDubai__content">
          <h1
            class="secExpoDubai__content__title"
            v-html="$t('ExpoDubai.titlecall')"
          ></h1>
          <div
            class="secExpoDubai__content__text"
            v-html="$t('ExpoDubai.call')"
          ></div>
          <div class="secExpoDubai__content__button">
            <TheButton :text="$t('ExpoDubai.buttoncall')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton/";

export default {
  name: "SecExpoDubai",
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
