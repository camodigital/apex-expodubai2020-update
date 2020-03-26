<template>
  <div class="secNews">
    <div class="secNews__container">
      <header class="secNews__header">
        <h1>Noticias</h1>
      </header>
      <div class="secNews__list">
        <div class="secNews__col">
          <div class="secNews__content">
            <div class="secNews__title">
              <h2>title</h2>
            </div>
            <div class="secNews__call">
              call
            </div>
            <div class="secNews__button">
              <TheButton text="saiba mais" />
            </div>
          </div>
          <div class="secNews__figure">
            <img
              src="@/assets/images/news1.jpg"
              alt=""
              class="secNews__image"
            />
          </div>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news2.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3>title</h3>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news3.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3>title</h3>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news4.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3>title</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton";

export default {
  name: "SecNews",
  components: {
    TheButton
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
