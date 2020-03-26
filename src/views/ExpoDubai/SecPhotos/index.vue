<template>
  <div class="secPhotos">
    <div class="secPhotos__container">
      <header class="secPhotos__header">
        <h1>photos</h1>
      </header>
      <div class="secPhotos__slider">
        <carousel>
          <div class="secPhotos__slide">
            <div class="secPhotos__list">
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo1.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo2.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo3.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo4.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo5.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo6.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="secPhotos__slide">
            <div class="secPhotos__list">
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo1.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo2.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo3.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo4.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo5.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
              </div>
              <div class="secPhotos__item">
                <div class="secPhotos__figure">
                  <img
                    src="@/assets/images/expo6.jpg"
                    alt=""
                    class="secPhotos_image"
                  />
                </div>
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

export default {
  name: "SecPhotos",
  components: {
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
