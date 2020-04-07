<template>
  <div class="secPhotos">
    <div class="secPhotos__container">
      <header class="secPhotos__header">
        <h1 class="titleBigSpanWave" v-html="$t('ExpoDubai.titlephotos')"></h1>
      </header>
      <div class="secPhotos__slider zSlidertheme1">
        <carousel :items="1" :loop="true" :navText="['', '']">
          <div class="secPhotos__slide">
            <div class="secPhotos__list">
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(1)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-01.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(2)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-02.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(3)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-03.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(4)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-04.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(5)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-05.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(6)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-06.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="secPhotos__slide">
            <div class="secPhotos__list">
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(7)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-07.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(8)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-08.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(9)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-09.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(10)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-10.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(11)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-11.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(12)">
                  <div class="secPhotos__figure">
                    <img
                      src="@/assets/images/expo-12.jpg"
                      alt=""
                      class="secPhotos_image"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>

    <FsLightbox
      :toggler="toggler"
      :slide="slide"
      :sources="[
        'http://camodigital.com.br/cdn/images/expo-01.jpg',
        'http://camodigital.com.br/cdn/images/expo-02.jpg',
        'http://camodigital.com.br/cdn/images/expo-03.jpg',
        'http://camodigital.com.br/cdn/images/expo-04.jpg',
        'http://camodigital.com.br/cdn/images/expo-05.jpg',
        'http://camodigital.com.br/cdn/images/expo-06.jpg',
        'http://camodigital.com.br/cdn/images/expo-07.jpg',
        'http://camodigital.com.br/cdn/images/expo-08.jpg',
        'http://camodigital.com.br/cdn/images/expo-09.jpg',
        'http://camodigital.com.br/cdn/images/expo-10.jpg',
        'http://camodigital.com.br/cdn/images/expo-11.jpg',
        'http://camodigital.com.br/cdn/images/expo-12.jpg'
      ]"
      type="image"
      :types="[
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image',
        'image'
      ]"
    />
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";
import FsLightbox from "fslightbox-vue";

export default {
  name: "SecPhotos",
  components: {
    carousel,
    FsLightbox
  },
  data() {
    return {
      toggler: false,
      slide: 1
    };
  },
  methods: {
    openLightboxOnSlide: function(number) {
      this.slide = number;
      this.toggler = !this.toggler;
    },

    organizeNavSlider() {
      const slider = document.querySelector(".secPhotos .owl-carousel");
      const owlNav = document.querySelector(".secPhotos .owl-nav");
      const owlDots = document.querySelector(".secPhotos .owl-dots");
      const sliderNavigation = document.createElement("div");

      sliderNavigation.classList.add("sliderNavigation");

      slider.append(sliderNavigation);
      sliderNavigation.append(owlNav);
      sliderNavigation.append(owlDots);
    }
  },
  mounted() {
    this.organizeNavSlider();
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
