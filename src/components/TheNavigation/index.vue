<template>
  <div class="theNavigation" ref="theNavigation">
    <div class="theNavigation__container">
      <div class="theNavigation__brand">
        <router-link
          :to="`/${$i18n.locale}/`"
          class="theNavigation__brand__link"
          :title="$t('intro.title')"
        >
          <div class="theNavigation__brand__image" ref="brand">
            <img src="@/assets/images/logo-branca.png" alt />
          </div>
          <div class="theNavigation__brand__imagefix">
            <img
              src="@/assets/images/logo-color.png"
              :alt="$t('intro.title')"
            />
          </div>
        </router-link>
      </div>
      <nav class="theNavigation__nav">
        <ul class="theNavigation__nav__list" ref="navList">
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
          <!-- <li class="theNavigation__nav__item">
            <a href="#">
              {{ $t("nav.news") }}
            </a>
          </li> -->
          <li class="theNavigation__nav__item">
            <a
              target="_blank"
              href="https://forms.office.com/FormsPro/Pages/ResponsePage.aspx?id=CEWR5Xs--Ea5jlHiOyklhsr0d7OZxXxHgC1aqdHQRlZUNzJKUlhNRTcwWlRPNkJRWlNCV1FLVjVWUy4u"
            >
              <span>
                {{ $t("nav.participate") }}
              </span>
            </a>
          </li>
          <li class="theNavigation__nav__item">
            <router-link :to="`/${$i18n.locale}/contactus`">
              {{ $t("nav.contactus") }}
            </router-link>
          </li>
        </ul>
        <div class="theNavigation__nav__support">
          <div class="theNavigation__nav__language">
            <button
              class="theNavigation__nav__language__button"
              ref="langButton"
            >
              {{ language }}
              <ArrowDown />
            </button>
            <ul class="theNavigation__nav__language__list" ref="langList">
              <li ref="langButtonPt"><flagPt />PT</li>
              <li ref="langButtonEn"><flagEn />EN</li>
            </ul>
          </div>
          <div class="theNavigation__nav__icon" ref="navButton">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
    <div class="theNavigation__overlay" ref="navOverlay"></div>
  </div>
</template>

<script>
import ArrowDown from "@/assets/images/down-arrow.svg";
import flagEn from "@/assets/images/en.svg";
import flagPt from "@/assets/images/pt.svg";
import { TweenMax, TimelineMax } from "gsap/all";

export default {
  name: "TheNavigation",
  data() {
    return {
      language: "PT"
    };
  },
  components: {
    ArrowDown,
    flagEn,
    flagPt
  },
  methods: {
    handleLanguage() {
      const langList = this.$refs.langList;
      const langButton = this.$refs.langButton;
      const langButtonPt = this.$refs.langButtonPt;
      const langButtonEn = this.$refs.langButtonEn;
      let langListActive = false;
      let lang = "pt";

      const openLangList = () => {
        TweenMax.to(langList, 0.5, {
          x: 0,
          opacity: 1,
          ease: "none"
        });
        langListActive = true;
      };

      const closeLangList = () => {
        TweenMax.to(langList, 0.5, {
          x: 200,
          opacity: 0,
          ease: "none"
        });
        langListActive = false;
      };

      const handleButton = () => {
        if (!langListActive) {
          openLangList();
        } else {
          closeLangList();
        }
      };

      const handleButtonPt = () => {
        if (lang != "pt") {
          this.language = "PT";
          lang = "pt";
          this.$i18n.locale = lang;
          this.$router.push({
            params: { lang: lang }
          });
          closeLangList();
        } else {
          closeLangList();
        }
      };

      const handleButtonEn = () => {
        if (lang != "en") {
          lang = "en";
          this.language = "EN";
          this.$i18n.locale = lang;
          this.$router.push({
            params: { lang: lang }
          });
          closeLangList();
        } else {
          closeLangList();
        }
      };

      langButton.addEventListener("click", handleButton);
      langButtonPt.addEventListener("click", handleButtonPt);
      langButtonEn.addEventListener("click", handleButtonEn);
    },
    fixNav() {
      const body = document.body;

      let navFix = false;
      const checkPosNav = () => {
        if (window.pageYOffset > 100 && !navFix) {
          body.classList.add("navFix");
          navFix = true;
        } else if (window.pageYOffset < 100 && navFix) {
          body.classList.remove("navFix");
          navFix = false;
        }
      };
      window.addEventListener("scroll", checkPosNav);
    },
    activeNav() {
      const navOverlay = this.$refs.navOverlay;

      if (window.innerWidth <= 1340) {
        const navButton = this.$refs.navButton;
        const body = document.body;
        const navList = this.$refs.navList;
        const navItems = document.querySelectorAll(".theNavigation__nav__item");
        let navActive = false;
        const tl = new TimelineMax();

        TweenMax.set(navList, {
          x: "100%"
        });

        TweenMax.set(navItems, {
          y: -20,
          opacity: 0
        });

        const openNav = () => {
          body.classList.add("navActived");

          tl.to(navList, 0.5, {
            x: "0"
          }).staggerTo(
            navItems,
            1,
            {
              y: 0,
              opacity: 1
            },
            0.1,
            "-=0.3"
          );

          navActive = true;
        };

        const closeNav = () => {
          body.classList.remove("navActived");

          tl.staggerTo(
            navItems,
            1,
            {
              y: -20,
              opacity: 0
            },
            0.1
          ).to(
            navList,
            0.5,
            {
              x: "100%"
            },
            "-=0.8"
          );

          navActive = false;
        };

        const handleClick = () => {
          if (!navActive) {
            openNav();
          } else {
            closeNav();
          }
        };

        navItems.forEach(item => {
          item.addEventListener("click", closeNav);
        });

        navOverlay.addEventListener("click", closeNav);

        navButton.addEventListener("click", handleClick);
      }
    },
    handleResize() {
      let wSize = window.innerWidth;

      window.addEventListener("resize", () => {
        if (window.innerWidth != wSize) {
          location.reload();
        }
      });
    }
  },
  mounted() {
    this.handleLanguage();
    this.fixNav();
    this.activeNav();
    this.handleResize();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
