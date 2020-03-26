<template>
  <div class="secBrazilExpo">
    <div class="secBrazilExpo__container">
      <div class="secBrazilExpo__slider">
        <carousel>
          <div class="secBrazilExpo__slide">
            <div class="secBrazilExpo__col">
              <div class="secBrazilExpo__figure">
                <img
                  src="@/assets/images/brasilnaexpo.jpg"
                  alt="O Brasil na Expo"
                  class="secBrazilExpo__image"
                />
              </div>
            </div>
            <div class="secBrazilExpo__col">
              <h1 class="secBrazilExpo__title">title</h1>
              <div class="secBrazilExpo__text">text</div>
              <div class="secBrazilExpo__button">
                <TheButton text="Saiba mais" />
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import TheButton from "@/components/TheButton/";

export default {
  name: "SecBrazilExpo",
  components: {
    carousel,
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
