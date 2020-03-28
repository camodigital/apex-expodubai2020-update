<template>
  <div class="theButton">
    <div class="theButton__container">
      <div class="theButton__text">{{ text }}</div>
      <div class="theButton__icon">
        <slot>
          <IcoReadMore />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import IcoReadMore from "@/assets/images/icosaibamais.svg";

export default {
  name: "TheButton",
  components: {
    IcoReadMore
  },
  props: {
    text: {
      default: "saiba mais"
    }
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
