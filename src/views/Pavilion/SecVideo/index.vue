<template>
  <div class="secVideo">
    <div class="secVideo__container">
      <div class="secVideo__content">
        <div class="secVideoButton">
          <div class="secVideoButton__content">
            <h1
              class="secVideoButton__title"
              v-html="$t('apiPavilhao.video_title')"
            ></h1>
            <div
              class="secVideoButton__subtitle"
              v-html="$t('apiPavilhao.video_subtitle')"
            ></div>
            <div class="secVideoButton__button">
              <button @click="toggler = !toggler">
                <TheButton :text="$t('apiGeral.button_click')">
                  <slot>
                    <IcoPlay />
                  </slot>
                </TheButton>
              </button>
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
    <FsLightbox
      :toggler="toggler"
      :sources="[
        'https://www.youtube.com/watch?v=BMVYTrQtrTo&feature=youtu.be'
      ]"
    />
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import IcoPlay from "@/assets/images/play-button.svg";
import TheButton from "@/components/TheButton/";
import FsLightbox from "fslightbox-vue";

export default {
  name: "SecVideo",
  components: {
    IcoPlay,
    TheButton,
    TheFigure,
    FsLightbox
  },
  data() {
    return {
      toggler: false
    };
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
