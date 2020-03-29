<template>
  <div class="secParticipate">
    <div class="secParticipate__container">
      <div class="secParticipate__content">
        <TheContent1
          :title="$t('participate.titlecall')"
          :text="$t('participate.call')"
          classTitle="zTitleWave"
        >
          <slot>
            <TheButton :text="$t('participate.button')">
              <slot>
                <IcoParticipate />
              </slot>
            </TheButton>
          </slot>
        </TheContent1>
      </div>
    </div>
    <div class="secParticipate__bg">
      <TheFigure>
        <slot>
          <img
            src="@/assets/images/participate.jpg"
            alt="O Pavilhão do Brasil"
          />
        </slot>
      </TheFigure>
    </div>
  </div>
</template>

<script>
import TheContent1 from "@/components/TheContent1/";
import TheFigure from "@/components/TheFigure";
import TheButton from "@/components/TheButton";
import IcoParticipate from "@/assets/images/up.svg";

export default {
  name: "SecParticipate",
  components: {
    TheButton,
    IcoParticipate,
    TheContent1,
    TheFigure
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
