<template>
  <div class="secPavilion2">
    <div class="secPavilion2__container">
      <div class="secPavilion2__content">
        <div class="zRow">
          <div class="zCol">
            <TheFigure>
              <img :src="$t('apiPavilhao.photo_pavilion')" alt="" />
            </TheFigure>
          </div>
          <div class="zCol">
            <TheContent1
              :title="$t('apiPavilhao.title')"
              :text="$t('apiPavilhao.text')"
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
  name: "SecPavilion2",
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
