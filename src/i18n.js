import Vue from "vue";
import VueI18n from "vue-i18n";
import pt from "@/locales/pt.js";
import en from "@/locales/en.js";

Vue.use(VueI18n);

const siteData = { pt, en };

export default new VueI18n({
  locale: "pt",
  fallbackLocale: "pt",
  messages: siteData
});
