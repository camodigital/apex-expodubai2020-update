<template>
  <div class="secBrazilExpo">
    <div class="secBrazilExpo__container theContainerFluid">
      <div class="secBrazilExpo__slider zSlidertheme1">
        <carousel
          :items="1"
          :loop="true"
          :navText="['', '']"
          animateOut="fadeOut"
        >
          <div class="secBrazilExpo__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/brasilnaexpo.jpg"
                    :alt="$t('BrazilExpo.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <TheContent1
                  :title="$t('BrazilExpo.titlecall')"
                  :text="$t('BrazilExpo.call')"
                >
                  <slot>
                    <TheButton :text="$t('BrazilExpo.buttoncall')" />
                  </slot>
                </TheContent1>
              </div>
            </div>
          </div>

          <div class="secBrazilExpo__slide">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <img
                    src="@/assets/images/historiaexpo.jpg"
                    :alt="$t('history.titlecall')"
                  />
                </TheFigure>
              </div>
              <div class="zCol">
                <TheContent1
                  :title="$t('history.titlecall')"
                  :text="$t('history.call')"
                >
                  <slot>
                    <TheButton :text="$t('history.buttoncall')" />
                  </slot>
                </TheContent1>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import carousel from "vue-owl-carousel2";
import TheButton from "@/components/TheButton/";

export default {
  name: "SecBrazilExpo",
  components: {
    carousel,
    TheButton,
    TheFigure,
    TheContent1
  },
  methods: {
    organizeNavSlider() {
      const slider = document.querySelector(".secBrazilExpo .owl-carousel");
      const owlNav = document.querySelector(".secBrazilExpo .owl-nav");
      const owlDots = document.querySelector(".secBrazilExpo .owl-dots");
      const sliderNavigation = document.createElement("div");

      sliderNavigation.classList.add("sliderNavigation");

      slider.append(sliderNavigation);
      sliderNavigation.append(owlNav);
      sliderNavigation.append(owlDots);
    }
  },
  mounted() {
    this.organizeNavSlider();
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
