<template>
  <div class="secPavilion">
    <div class="secPavilion__container">
      <div class="secPavilion__header">
        <h1>title</h1>
      </div>
      <div class="secPavilion__content">
        <div class="secPavilion__text">
          text
        </div>
        <div class="secPavilion__button">
          <TheButton text="saiba mais" />
        </div>
      </div>
      <div class="secPavilion__slider">
        <carousel>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion1.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion2.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion3.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion4.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion5.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
          <div class="secPavilion__slide">
            <div class="secPavilion__slide__figure">
              <img
                src="@/assets/images/pavilion6.jpg"
                alt="O Pavilhão do Brasil"
                class="secPavilion__slide__image"
              />
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton/";
import carousel from "vue-owl-carousel";

export default {
  name: "SecPavilion",
  components: {
    TheButton,
    carousel
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
