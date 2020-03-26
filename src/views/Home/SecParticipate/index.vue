<template>
  <div class="secParticipate">
    <div class="secParticipate__container">
      <div class="secParticipate__content">
        <div class="secParticipate__title">
          <h1>title</h1>
        </div>
        <div class="secParticipate__text">
          text
        </div>
        <div class="secParticipate__button">
          <TheButton text="Participe">
            <slot>
              <IcoParticipate />
            </slot>
          </TheButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton";
import IcoParticipate from "@/assets/images/up.svg";

export default {
  name: "SecParticipate",
  components: {
    TheButton,
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
