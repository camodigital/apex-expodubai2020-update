<template>
  <div class="theNavigation">
    <div class="TheNavigation__container">
      <div class="TheNavigation__brand">
        <router-link
          :to="`/${$i18n.language}/`"
          class="TheNavigation__brand__link"
          :title="$t('intro.title')"
        >
          <div class="TheNavigation__brand__imagefix">
            <Logo />
          </div>
          <div class="TheNavigation__brand__image">
            <img
              src="@/assets/images/logo-color.png"
              :alt="$t('intro.title')"
            />
          </div>
        </router-link>
      </div>
      <nav class="theNavigation__nav">
        <div class="theNavigation__nav__icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul class="theNavigation__nav__list">
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/`">
              {{ $t("nav.home") }}
            </router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/expodubai`">
              {{ $t("nav.ExpoDubai") }}
            </router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/brazilexpo`">
              {{ $t("nav.BrazilExpo") }}
            </router-link>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/pavilion`">
              {{ $t("nav.pavilion") }}
            </router-link>
          </li>
          <li class="theNavigation__nav__item">
            <a href="#">
              {{ $t("nav.news") }}
            </a>
          </li>
          <li class="theNavigation__nav__item">
            <a href="#">
              {{ $t("nav.participate") }}
            </a>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/contactus`">
              {{ $t("nav.contactus") }}
            </router-link>
          </li>
        </ul>
        <div class="theNavigation__nav__language">
          <span @click.prevent="setLocale('pt')">PT</span>
          <span @click.prevent="setLocale('en')">EN</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.svg";

export default {
  name: "TheNavigation",
  data() {
    return {
      language: "pt"
    };
  },
  components: {
    Logo
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
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
