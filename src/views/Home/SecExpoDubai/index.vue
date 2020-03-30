<template>
  <div class="secExpoDubai">
    <div class="secExpoDubai__container theContainer">
      <div class="secExpoDubai__content">
        <div class="zRow">
          <div class="zCol">
            <TheFigure>
              <img src="@/assets/images/expo2020-call.jpg" alt="" />
            </TheFigure>
          </div>
          <div class="zCol">
            <TheContent1
              :title="$t('ExpoDubai.titlecall')"
              :text="$t('ExpoDubai.call')"
            >
              <slot>
                <router-link :to="`/${$i18n.locale}/expodubai`">
                  <TheButton :text="$t('ExpoDubai.buttoncall')" />
                </router-link>
              </slot>
            </TheContent1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import TheButton from "@/components/TheButton/";

export default {
  name: "SecExpoDubai",
  components: {
    TheButton,
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
