import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { TweenMax, TimelineMax, CSSPlugin } from "gsap/all";

import "./assets/styles/main.sass";

Vue.config.productionTip = false;

//  use beforeEach route guard to set the language
router.beforeEach((to, form, next) => {
  //  use the language from the rounting param or default language
  let language = to.params.lang;
  if (!language) {
    language = "pt";
  }

  //  set the current language for i18n
  i18n.locale = language;
  next();
});

new Vue({
  router,
  store,
  i18n,
  TweenMax,
  TimelineMax,
  CSSPlugin,
  render: h => h(App)
}).$mount("#app");
