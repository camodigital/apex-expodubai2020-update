<template>
  <div class="secVideo">
    <div class="secVideo__container">
      <div class="secVideoButton">
        <div class="secVideoButton__content">
          <h1
            class="secVideoButton__title"
            v-html="$t('ExpoDubai.titlevideo')"
          ></h1>
          <div
            class="secVideoButton__subtitle"
            v-html="$t('ExpoDubai.subtitlevideo')"
          ></div>
          <div class="secVideoButton__button">
            <TheButton :text="$t('ExpoDubai.buttonvideo')">
              <slot>
                <IcoPlay />
              </slot>
            </TheButton>
          </div>
        </div>
        <div class="secVideoButton__bg">
          <TheFigure>
            <img src="@/assets/images/expo2020-call.jpg" alt="" />
          </TheFigure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheButton from "@/components/TheButton";
import IcoPlay from "@/assets/images/play-button.svg";

export default {
  name: "SecVideo",
  components: {
    TheFigure,
    TheButton,
    IcoPlay
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
