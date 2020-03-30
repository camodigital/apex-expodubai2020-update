<template>
  <div class="theWaveH">
    <div class="theWaveH__container">
      <div class="theWaveH__waveOne theWaveH__wave" ref="waveone">
        <IcoWave />
      </div>
      <div class="theWaveH__waveTwo theWaveH__wave" ref="wavetwo">
        <IcoWave />
      </div>
    </div>
  </div>
</template>

<script>
import IcoWave from "@/assets/images/icoWave.svg";
import { TimelineMax, Power1 } from "gsap/all";

export default {
  name: "TheWaveH",
  components: {
    IcoWave
  },
  methods: {
    animaWave() {
      const waveone = this.$refs.waveone;
      const wavetwo = this.$refs.wavetwo;
      const tl = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 5 });

      tl.to(waveone, 1, {
        x: "-100%",
        ease: Power1.easeInOut
      }).to(
        wavetwo,
        1,
        {
          x: 0,
          ease: Power1.easeInOut
        },
        "-=1"
      );
    }
  },
  mounted() {
    this.animaWave();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
