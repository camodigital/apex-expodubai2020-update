<template>
  <div class="secHistory">
    <div class="secHistory__container">
      <header class="secHistory__header">
        <h1 class="titleBigSpanWave" v-html="$t('history.titlecall')"></h1>
      </header>
      <div class="secHistory__slider">
        <carousel :items="1" :loop="true" :navText="['', '']">
          <div class="secHistory__slide s1">
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

          <div class="secHistory__slide s2">
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

          <div class="secHistory__slide s3">
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

          <div class="secHistory__slide s4">
            <div class="zRow">
              <div class="zCol"></div>
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
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

          <div class="secHistory__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <div class="secHistory__content">
                  <h2
                    class="secHistory__title zTitleSmallBold"
                    v-html="$t('history.title2020')"
                  ></h2>
                  <div
                    class="secHistory__title"
                    v-html="$t('history.content2020')"
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
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
