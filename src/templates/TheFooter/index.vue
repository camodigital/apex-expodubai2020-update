<template>
  <footer class="theFooter">
    <div class="theFooter__container">
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
              <router-link :to="`/${$i18n.locale}/`">
                {{ $t("nav.home") }}
              </router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="`/${$i18n.locale}/expodubai`">
                {{ $t("nav.ExpoDubai") }}
              </router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="`/${$i18n.locale}/brazilexpo`">
                {{ $t("nav.BrazilExpo") }}
              </router-link>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="`/${$i18n.locale}/pavilion`">
                {{ $t("nav.pavilion") }}
              </router-link>
            </li>
            <li class="theFooter__nav__item">
              <a href="#">
                {{ $t("nav.news") }}
              </a>
            </li>
            <li class="theFooter__nav__item">
              <a href="#">
                {{ $t("nav.participate") }}
              </a>
            </li>
            <li class="theFooter__nav__item">
              <router-link :to="`/${$i18n.locale}/contactus`">
                {{ $t("nav.contactus") }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="theFooter__col">
        <div class="theFooter__social">
          <div
            class="theFooter__social__title"
            v-html="$t('footer.titlesocial')"
          ></div>
          <a href="#" class="theFooter__social__link">
            <IcoFacebook />
          </a>
          <a href="#" class="theFooter__social__link">
            <IcoInstagram />
          </a>
          <a href="#" class="theFooter__social__link">
            <IcoTwitter />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/assets/images/logo.svg";
import IcoFacebook from "@/assets/images/icoFacebook.svg";
import IcoInstagram from "@/assets/images/icoInstagram.svg";
import IcoTwitter from "@/assets/images/icoTwitter.svg";

export default {
  name: "TheFooter",
  components: {
    Logo,
    IcoFacebook,
    IcoInstagram,
    IcoTwitter
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
