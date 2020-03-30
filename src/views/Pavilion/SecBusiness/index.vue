<template>
  <div class="secBusiness">
    <div class="secBusiness__container">
      <div class="secBusiness__content">
        <div class="zRow">
          <div class="zCol">
            <TheFigure>
              <img src="@/assets/images/expo2020-call.jpg" alt="" />
            </TheFigure>
          </div>
          <div class="zCol">
            <TheContent1
              :title="$t('pavilion.titlebusinessgeneration')"
              :text="$t('pavilion.contentbusinessgeneration')"
            >
              <slot> </slot>
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

export default {
  name: "SecBusiness",
  components: {
    TheFigure,
    TheContent1
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
