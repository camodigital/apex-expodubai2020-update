<template>
  <div class="theNavigation">
    <div class="TheNavigation__container">
      <div class="TheNavigation__brand">
        <a
          href="#"
          class="TheNavigation__brand__link"
          title="Brasil na Expo Dubai 2020"
        >
          <div class="TheNavigation__brand__imagefix">
            <Logo />
          </div>
          <div class="TheNavigation__brand__image">
            <img
              src="@/assets/images/logo-color.png"
              alt="Brasil na Expo Dubai 2020"
            />
          </div>
        </a>
      </div>
      <nav class="theNavigation__nav">
        <div class="theNavigation__nav__icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul class="theNavigation__nav__list">
          <li class="theNavigation__nav__item">
            <router-link :to="{ name: 'Home' }">home</router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="{ name: 'ExpoDubai' }">ExpoDubai</router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="{ name: 'BrazilExpo' }">BrazilExpo</router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="{ name: 'Pavilion' }">Pavilion</router-link>
          </li>
          <li>
            <a href="#">Noticias</a>
          </li>
          <li>
            <a href="#">Participe</a>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="{ name: 'ContactUs' }">ContactUs</router-link>
          </li>
        </ul>
        <div class="theNavigation__nav__language">
          <span>PT</span>
          <span>EN</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.svg";

export default {
  name: "TheNavigation",
  components: {
    Logo
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
