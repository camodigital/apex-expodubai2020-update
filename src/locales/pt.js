import apiGeral from "@/locales/types/apiGeral_pt";
import apiBrasil from "@/locales/types/apiBrasil_pt";
import apiExpodubai from "@/locales/types/apiExpodubai_pt";
import apiPavilhao from "@/locales/types/apiPavilhao_pt";
import apiFaq from "@/locales/types/apiFaq_pt";
import apiParticipe from "@/locales/types/apiParticipe_pt";
import apiNoticias from "@/locales/types/apiNoticias_pt";

const pt = {
  head: {
    home: {
      title: "Home",
      subtitle: "O Brasil na Expo Dubai 2020"
    },
    expodubai: {
      title: "O que é a Expo Dubai?",
      subtitle: "O Brasil na Expo Dubai 2020"
    },
    brazilexpo: {
      title: "O Brasil na Expo",
      subtitle: "O Brasil na Expo Dubai 2020"
    },
    pavilion: {
      title: "O Pavilhão do Brasil",
      subtitle: "O Brasil na Expo Dubai 2020"
    },
    contact: {
      title: "Fale Conosco",
      subtitle: "O Brasil na Expo Dubai 2020"
    }
  },
  routes: {
    expodubai: "o-que-e-a-expo-dubai",
    brazilexpo: "o-brasil-na-expo",
    pavilion: "o-pavilhao-do-brasil",
    contact: "fale-conosco"
  },
  apiGeral,
  apiBrasil,
  apiExpodubai,
  apiPavilhao,
  apiFaq,
  apiParticipe,
  apiNoticias
};

export default pt;
