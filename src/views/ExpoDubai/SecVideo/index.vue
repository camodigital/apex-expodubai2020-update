<template>
  <div class="secVideo">
    <div class="secVideo__container">
      <div class="secVideo__content">
        <h1>assista...</h1>
        <h2>evento...</h2>
        <div class="secVideo__button">
          <TheButton text="Assita ao vídeo">
            <slot>
              <IcoPlay />
            </slot>
          </TheButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IcoPlay from "@/assets/images/play-button.svg";
import TheButton from "@/components/TheButton/";

export default {
  name: "SecVideo",
  components: {
    IcoPlay,
    TheButton
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
