<template>
  <div class="secNews">
    <div class="secNews__container theContainer">
      <span class="theWave1 theWave"><TheWaveH /></span>
      <header class="secNews__header">
        <h1 class="zTitleBigBold" v-html="$t('apiNoticias.news_title')"></h1>
      </header>
      <div class="secNews__content">
        <div class="secNews__grid">
          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a target="_blank" :href="$t('apiNoticias.news')[0].link">
                  <TheFigure>
                    <slot>
                      <img
                        :src="$t('apiNoticias.news')[0].photo"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <TheContent1
                  :title="$t('apiNoticias.news')[0].title"
                  :text="$t('apiNoticias.news')[0].call"
                  classTitle="zTitleSmallBold"
                >
                  <slot>
                    <a target="_blank" :href="$t('apiNoticias.news')[0].link">
                      <TheButton :text="$t('apiGeral.button_readmore')" />
                    </a>
                  </slot>
                </TheContent1>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a target="_blank" :href="$t('apiNoticias.news')[1].link">
                  <TheFigure>
                    <slot>
                      <img
                        :src="$t('apiNoticias.news')[1].photo"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    :href="$t('apiNoticias.news')[1].link"
                    v-html="$t('apiNoticias.news')[1].title"
                  >
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a target="_blank" :href="$t('apiNoticias.news')[2].link">
                  <TheFigure>
                    <slot>
                      <img
                        :src="$t('apiNoticias.news')[2].photo"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    :href="$t('apiNoticias.news')[2].link"
                    v-html="$t('apiNoticias.news')[2].title"
                  >
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a target="_blank" :href="$t('apiNoticias.news')[3].link">
                  <TheFigure>
                    <slot>
                      <img
                        :src="$t('apiNoticias.news')[3].photo"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    :href="$t('apiNoticias.news')[3].link"
                    v-html="$t('apiNoticias.news')[3].title"
                  >
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import TheButton from "@/components/TheButton";
import TheWaveH from "@/components/TheWaveH";

export default {
  name: "SecNews",
  components: {
    TheButton,
    TheFigure,
    TheContent1,
    TheWaveH
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
