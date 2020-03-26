<template>
  <footer class="theFooter">
    <div class="theFooter__cotainer">
      <div class="theFooter__col">
        <div class="theFooter__logo">
          <a href="">
            <Logo />
          </a>
        </div>
      </div>
      <div class="theFooter__col">
        <nav class="theFooter__nav">
          <ul class="theFooter__nav__list">
            <li class="theFooter__nav__item">
              <router-link :to="{ name: 'Home' }">home</router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="{ name: 'ExpoDubai' }">ExpoDubai</router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="{ name: 'BrazilExpo' }">BrazilExpo</router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="{ name: 'Pavilion' }">Pavilion</router-link>
            </li>
            <li class="theFooter__nav__item">
              <a href="#">Noticias</a>
            </li>
            <li class="theFooter__nav__item">
              <a href="#">Participe</a>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="{ name: 'ContactUs' }">ContactUs</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="theFooter__col__">
        <div class="theFooter__social__title">siga</div>
        <a href="#" class="theFooter__social__link">
          <IcoFacebook />
        </a>
        <a href="#" class="theFooter__social__link">
          <IcoInstagram />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/assets/images/logo.svg";
import IcoFacebook from "@/assets/images/icofacebook.svg";
import IcoInstagram from "@/assets/images/icoinstagram.svg";

export default {
  name: "TheFooter",
  components: {
    Logo,
    IcoFacebook,
    IcoInstagram
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
