<template>
  <div class="secHistory">
    <div class="secHistory__container">
      <header class="secHistory__header">
        <h1 class="titleBigSpanWaveGray" v-html="$t('history.titlecall')"></h1>
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
                    v-html="$t('history.title1851')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1851')"
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
                    v-html="$t('history.title1862')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1862')"
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
                    v-html="$t('history.title1876')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1876')"
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
                  <img
                    src="@/assets/images/expo-brasil1922.jpg"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title1922')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1922')"
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
                  <img
                    src="@/assets/images/h1939.png"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title1939')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1939')"
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
                  <img
                    src="@/assets/images/h1958.png"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title1958')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1958')"
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
                  <img
                    src="@/assets/images/h1970.png"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title1970')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content1970')"
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
                  <img
                    src="@/assets/images/h2010.png"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title2010')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content2010')"
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
                  <img
                    src="@/assets/images/h2015.png"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title2015')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content2015')"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div
            class="secHistory__slide"
            data-dot="<span class='dataHistory'>2020</span>"
          >
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasil-01z.jpg"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title2021')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content2021')"
                  ></div>
                </div>
              </div>
            </div>
          </div> -->
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
