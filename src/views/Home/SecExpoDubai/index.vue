<template>
  <div class="secExpoDubai">
    <div class="secExpoDubai__container theContainer">
      <div class="secExpoDubai__content">
        <TheWaveH />
        <div class="zRow">
          <div class="zCol">
            <TheFigure>
              <img src="@/assets/images/expo2020-call.jpg" alt="" />
            </TheFigure>
          </div>
          <div class="zCol">
            <TheContent1
              :title="$t('apiExpodubai.title')"
              :text="$t('apiExpodubai.call')"
            >
              <slot>
                <router-link :to="`/${$i18n.locale}/expodubai`">
                  <TheButton :text="$t('apiGeral.button_readmore')" />
                </router-link>
              </slot>
            </TheContent1>
          </div>
        </div>
      </div>
    </div>
    <span class="theWind1">
      <TheWind />
    </span>
    <span class="theWind2">
      <TheWind />
    </span>
    <span class="theWind3">
      <TheWind />
    </span>
    <span class="theWind4">
      <TheWind />
    </span>
    <span class="theWind5">
      <TheWind />
    </span>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import TheButton from "@/components/TheButton/";
import TheWaveH from "@/components/TheWaveH";
import TheWind from "@/components/TheWind";

export default {
  name: "SecExpoDubai",
  components: {
    TheButton,
    TheContent1,
    TheFigure,
    TheWaveH,
    TheWind
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
