<template>
  <div class="secHistory">
    <div class="secHistory__container">
      <header class="secHistory__header">
        <h1
          class="titleBigSpanWaveGray"
          v-html="$t('apiBrasil.history_title')"
        ></h1>
      </header>
      <div class="secHistory__slider zSlidertheme2">
        <carousel :items="1" :loop="true" :navText="['&#10229;', '&#10230;']">
          <div
            class="secHistory__slide s1"
            data-dot="<span class='dataHistory'>1851</span>"
          >
            <div class="zRow">
              <div class="zCol"></div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[0].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[0].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide s2"
            data-dot="<span class='dataHistory'>1862</span>"
          >
            <div class="zRow">
              <div class="zCol"></div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[1].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[1].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide s3"
            data-dot="<span class='dataHistory'>1876</span>"
          >
            <div class="zRow">
              <div class="zCol"></div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[2].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[2].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide s4"
            data-dot="<span class='dataHistory'>1922</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[3].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[3].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[3].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>1939</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[4].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[4].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[4].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>1958</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[5].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[5].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[5].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>1970</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[6].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[6].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[6].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>2010</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[7].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[7].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[7].text"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>2015</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img :src="$t('apiBrasil.history')[8].photo" />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('apiBrasil.history')[8].title"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('apiBrasil.history')[8].text"
                  ></div>
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
import TheFigure from "@/components/TheFigure";
import carousel from "vue-owl-carousel2";

export default {
  name: "SecHistory",
  components: {
    TheFigure,
    carousel
  },
  methods: {
    organizeNavSlider() {
      const slider = document.querySelector(".secHistory .owl-carousel");
      const owlDots = document.querySelector(".secHistory .owl-dots");
      const owlNav = document.querySelector(".secHistory .owl-nav");
      const sliderNavigation = document.createElement("div");

      sliderNavigation.classList.add("sliderNavigation");

      slider.append(sliderNavigation);
      sliderNavigation.append(owlDots);
      sliderNavigation.append(owlNav);
    },
    insertDataDots() {
      const dots = document.querySelectorAll(".secHistory .owl-dot span");
      const dates = [
        "1851",
        "1862",
        "1876",
        "1922",
        "1939",
        "1958",
        "1970",
        "2010",
        "2015",
        "2020"
      ];

      dots.forEach((dot, index) => {
        dot.innerHTML = dates[index];
      });
    }
  },
  mounted() {
    this.organizeNavSlider();
    this.insertDataDots();
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
