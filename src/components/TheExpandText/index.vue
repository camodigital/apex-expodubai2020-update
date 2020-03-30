<template>
  <div class="theExpandText">
    <div class="theExpandText__container">
      <div class="theExpandText__list">
        <div class="theExpandText__item">
          <div class="theExpandText__title">
            <div v-html="$t('faq.titlequestion1')"></div>
            <div class="ico"><ArrowDown /></div>
          </div>
          <div class="theExpandText__text">
            <div v-html="$t('faq.contentquestion1')"></div>
          </div>
        </div>

        <div class="theExpandText__item">
          <div class="theExpandText__title">
            <div v-html="$t('faq.titlequestion2')"></div>
            <div class="ico"><ArrowDown /></div>
          </div>
          <div class="theExpandText__text">
            <div v-html="$t('faq.contentquestion2')"></div>
          </div>
        </div>

        <div class="theExpandText__item">
          <div class="theExpandText__title">
            <div v-html="$t('faq.titlequestion3')"></div>
            <div class="ico"><ArrowDown /></div>
          </div>
          <div class="theExpandText__text">
            <div v-html="$t('faq.contentquestion3')"></div>
          </div>
        </div>

        <div class="theExpandText__item">
          <div class="theExpandText__title">
            <div v-html="$t('faq.titlequestion4')"></div>
            <div class="ico"><ArrowDown /></div>
          </div>
          <div class="theExpandText__text">
            <div v-html="$t('faq.contentquestion4')"></div>
          </div>
        </div>

        <div class="theExpandText__item">
          <div class="theExpandText__title">
            <div v-html="$t('faq.titlequestion5')"></div>
            <div class="ico"><ArrowDown /></div>
          </div>
          <div class="theExpandText__text">
            <div v-html="$t('faq.contentquestion5')"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDown from "@/assets/images/down-arrow.svg";
import { TweenMax } from "gsap/all";

export default {
  name: "TheExpandText",
  components: {
    ArrowDown
  },
  methods: {
    handleAccordion() {
      const items = document.querySelectorAll(".theExpandText__item");
      const texts = document.querySelectorAll(".theExpandText__text div");

      TweenMax.set(texts, {
        height: 0,
        opacity: 0
      });

      texts;

      const handleClick = e => {
        const item = e.currentTarget;
        const title = item.querySelector(".theExpandText__title");
        const text = item.querySelector(".theExpandText__text div");
        const textContainer = item.querySelector(".theExpandText__text");
        // const ContainerHeight = textContainer.getBoundingClientRect().height;

        if (item.classList.contains("theExpandText__item__active")) {
          item.classList.remove("theExpandText__item__active");
          title.classList.remove("theExpandText__title__active");
          textContainer.classList.remove("theExpandText__text__active");

          TweenMax.to(text, 0.2, {
            height: 0,
            opacity: 0
          });
        } else {
          item.classList.add("theExpandText__item__active");
          title.classList.add("theExpandText__title__active");
          textContainer.classList.add("theExpandText__text__active");

          TweenMax.to(text, 0.2, {
            height: "auto",
            opacity: 1
          });
        }
      };

      items.forEach(item => {
        item.addEventListener("click", handleClick);
      });
    }
  },
  mounted() {
    this.handleAccordion();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
