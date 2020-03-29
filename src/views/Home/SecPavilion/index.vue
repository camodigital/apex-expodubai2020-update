<template>
  <div class="secPavilion">
    <div class="secPavilion__container">
      <div class="secPavilion__content">
        <TheContent1
          :title="$t('pavilion.titlecall')"
          :text="$t('pavilion.call')"
        >
          <slot>
            <TheButton :text="$t('pavilion.buttoncall')" />
          </slot>
        </TheContent1>
      </div>
      <div class="secPavilion__slider zSlidertheme1">
        <carousel :items="1" :loop="true" :navText="['', '']">
          <div class="secPavilion__slide">
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion1.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion2.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
          </div>

          <div class="secPavilion__slide">
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion3.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion4.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
          </div>

          <div class="secPavilion__slide">
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion5.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
            <TheFigure>
              <slot>
                <img
                  src="@/assets/images/pavilion6.jpg"
                  alt="O Pavilhão do Brasil"
                />
              </slot>
            </TheFigure>
          </div>
        </carousel>
      </div>
    </div>
    <div class="secPavilion__line"></div>
    <div class="secPavilion__bg">
      <TheFigure>
        <slot>
          <img src="@/assets/images/pavilion5.jpg" alt="O Pavilhão do Brasil" />
        </slot>
      </TheFigure>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import TheButton from "@/components/TheButton/";
import carousel from "vue-owl-carousel2";

export default {
  name: "SecPavilion",
  components: {
    TheButton,
    carousel,
    TheFigure,
    TheContent1
  },
  methods: {
    organizeNavSlider() {
      const slider = document.querySelector(".secPavilion .owl-carousel");
      const owlNav = document.querySelector(".secPavilion .owl-nav");
      const owlDots = document.querySelector(".secPavilion .owl-dots");
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
