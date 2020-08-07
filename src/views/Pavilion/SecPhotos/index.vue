<template>
  <div class="secPhotos">
    <div class="secPhotos__container">
      <header class="secPhotos__header">
        <h1
          class="titleBigSpanWave"
          v-html="$t('apiPavilhao.galery_title')"
        ></h1>
      </header>
      <div class="secPhotos__slider zSlidertheme1">
        <carousel :items="1" :loop="true" :navText="['', '']">
          <div class="secPhotos__slide">
            <div class="secPhotos__list">
              <div class="secPhotos__item">
                <button @click="openLightboxOnSlide(1)">
                  <div class="secPhotos__figure">
                    <img
                      :src="$t('apiPavilhao.galery')[0]"
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
                      :src="$t('apiPavilhao.galery')[1]"
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
                      :src="$t('apiPavilhao.galery')[2]"
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
                      :src="$t('apiPavilhao.galery')[3]"
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
                      :src="$t('apiPavilhao.galery')[4]"
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
                      :src="$t('apiPavilhao.galery')[5]"
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
                      :src="$t('apiPavilhao.galery')[6]"
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
                      :src="$t('apiPavilhao.galery')[7]"
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
                      :src="$t('apiPavilhao.galery')[8]"
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
                      :src="$t('apiPavilhao.galery')[9]"
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
                      :src="$t('apiPavilhao.galery')[10]"
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
                      :src="$t('apiPavilhao.galery')[11]"
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
      :sources="$t('apiPavilhao.galery')"
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
