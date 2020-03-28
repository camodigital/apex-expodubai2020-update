<template>
  <div class="secPavilion">
    <div class="secPavilion__container">
      <div class="secPavilion__header">
        <h1 v-html="$t('pavilion.titlecall')" class="zBigTitle"></h1>
      </div>
      <div class="secPavilion__content">
        <div class="secPavilion__text" v-html="$t('pavilion.call')"></div>
        <div class="secPavilion__button">
          <TheButton :text="$t('pavilion.buttoncall')" />
        </div>
      </div>
      <div class="secPavilion__slider">
        <carousel :items="2" :loop="true">
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
    <div class="secPavilion__line"></div>
    <div class="secPavilion__overlay"></div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton/";
import carousel from "vue-owl-carousel2";

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
