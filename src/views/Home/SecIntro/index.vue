<template>
  <div class="secIntro">
    <div class="secIntro__container">
      <div class="secIntro__header">
        <div class="secIntro__header__logo">
          <Logo />
        </div>
        <div class="secIntro__header__title">
          <h1>O Brasil na Expo Dubai 2020</h1>
        </div>
        <div class="secIntro__header__subtitle">
          <h2>De 20.10.2020 a 10.04.2021 Dubai, Emirados Árabes Unidos</h2>
        </div>
      </div>
      <div class="secIntro__content">
        <div class="secIntro__content__buttons">
          <TheButton text="Assita ao vídeo">
            <slot>
              <IcoPlay />
            </slot>
          </TheButton>
          <TheButton text="Participe">
            <slot>
              <IcoParticipate />
            </slot>
          </TheButton>
        </div>
      </div>
      <div class="secIntro__content__countdown">
        <TheCountDown />
      </div>
      <div class="secIntro__bg">
        <TheVideoBg />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.svg";
import TheButton from "@/components/TheButton/";
import TheCountDown from "@/components/TheCountDown/";
import TheVideoBg from "@/components/TheVideoBg";
import IcoPlay from "@/assets/images/play-button.svg";
import IcoParticipate from "@/assets/images/up.svg";

export default {
  name: "SecIntro",
  components: {
    Logo,
    TheButton,
    TheCountDown,
    TheVideoBg,
    IcoPlay,
    IcoParticipate
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
