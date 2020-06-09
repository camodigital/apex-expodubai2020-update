<template>
  <div class="secIntro">
    <div class="secIntro__container">
      <div class="secIntro__header">
        <div class="secIntro__header__logo">
          <Logo />
        </div>
        <div class="secIntro__header__title">
          <h1>{{ $t("intro.title") }}</h1>
        </div>
        <div class="secIntro__header__subtitle">
          <h2>{{ $t("intro.subtitle") }}</h2>
        </div>
      </div>
      <div class="secIntro__content">
        <div class="secIntro__content__buttons">
          <div>
            <button @click="toggler = !toggler">
              <TheButton :text="$t('intro.buttonvideo')">
                <slot>
                  <IcoPlay />
                </slot>
              </TheButton>
            </button>
          </div>

          <div>
            <a
              target="_blank"
              href="https://forms.office.com/FormsPro/Pages/ResponsePage.aspx?id=CEWR5Xs--Ea5jlHiOyklhsr0d7OZxXxHgC1aqdHQRlZUNzJKUlhNRTcwWlRPNkJRWlNCV1FLVjVWUy4u"
            >
              <TheButton :text="$t('intro.buttonparticipate')">
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
        'https://www.youtube.com/watch?v=BMVYTrQtrTo&feature=youtu.be'
      ]"
    />
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.svg";
import TheButton from "@/components/TheButton/";
import TheCountDown from "@/components/TheCountDown/";
import TheVideoBg from "@/components/TheVideoBg";
import IcoPlay from "@/assets/images/play-button.svg";
import IcoParticipate from "@/assets/images/up.svg";
import FsLightbox from "fslightbox-vue";

export default {
  name: "SecIntro",
  components: {
    Logo,
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
