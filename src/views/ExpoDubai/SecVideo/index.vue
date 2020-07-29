<template>
  <div class="secVideo">
    <div class="secVideo__container">
      <div class="secVideo__content">
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
              <button @click="toggler = !toggler">
                <TheButton :text="$t('ExpoDubai.buttonvideo')">
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
        'https://www.youtube.com/watch?v=-SK8Xxp3-qg&feature=emb_title'
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
  },
  methods: {
    reloadIframes() {
      const button = document.querySelector(".secVideoButton__button");

      button.addEventListener("click", () => {
        setTimeout(() => {
          //change lang
          let lang = this.$i18n.locale;

          this.$i18n.locale = lang;

          setTimeout(() => {
            //reload
            const iframe = document.querySelector(
              ".fslightbox-container iframe"
            );
            iframe.src += "";
          }, 2000);
        }, 2000);
      });
    }
  },
  mounted() {
    this.reloadIframes();
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
