<template>
  <div class="secIntro">
    <div class="secIntro__container">
      <div class="secIntro__header">
        <div class="secIntro__header__logo">
          <img :src="$t('apiGeral.logo_light')" alt />
        </div>
        <div class="secIntro__header__title">
          <h1 v-html="$t('apiGeral.title')"></h1>
        </div>
        <div class="secIntro__header__subtitle">
          <h2>{{ $t("apiGeral.subtitle") }}</h2>
        </div>
      </div>
      <div class="secIntro__content">
        <div class="secIntro__content__buttons">
          <div>
            <button @click="toggler = !toggler">
              <TheButton :text="$t('apiGeral.button_video')">
                <slot>
                  <IcoPlay />
                </slot>
              </TheButton>
            </button>
          </div>

          <div>
            <a target="_blank" :href="$t('apiParticipe.link')">
              <TheButton :text="$t('apiGeral.button_participate')">
                <slot>
                  <IcoParticipate />
                </slot>
              </TheButton>
            </a>
          </div>
        </div>
      </div>
      <div class="secIntro__content__countdown">
        <TheCountDown />
      </div>
      <div class="secIntro__bg">
        <TheVideoBg />
      </div>
    </div>
    <FsLightbox
      :toggler="toggler"
      :sources="[
        'https://www.youtube.com/watch?v=-SK8Xxp3-qg&feature=emb_title'
      ]"
    />
  </div>
</template>

<script>
import TheButton from "@/components/TheButton/";
import TheCountDown from "@/components/TheCountDown/";
import TheVideoBg from "@/components/TheVideoBg";
import IcoPlay from "@/assets/images/play-button.svg";
import IcoParticipate from "@/assets/images/up.svg";
import FsLightbox from "fslightbox-vue";

export default {
  name: "SecIntro",
  components: {
    TheButton,
    TheCountDown,
    TheVideoBg,
    IcoPlay,
    IcoParticipate,
    FsLightbox
  },
  data() {
    return {
      toggler: false
    };
  },
  methods: {}
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
