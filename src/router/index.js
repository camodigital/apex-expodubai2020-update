import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/index.vue";
import ExpoDubai from "@/views/ExpoDubai/index.vue";
import BrazilExpo from "@/views/BrazilExpo/index.vue";
import Pavilion from "@/views/Pavilion/index.vue";
import ContactUs from "@/views/ContactUs/index.vue";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "o-que-e-a-expo-dubai",
        name: "O que é a Expo Dubai",
        component: ExpoDubai
      },
      {
        path: "what-is-expo-dubai",
        name: "What is expo dubai",
        component: ExpoDubai
      },
      {
        path: "o-brasil-na-expo",
        name: "O Brasil na Expo",
        component: BrazilExpo
      },
      {
        path: "brazil-at-expo-dubai",
        name: "Brazil at Expo Dubai",
        component: BrazilExpo
      },
      {
        path: "o-pavilhao-do-brasil",
        name: "O Pavilhão do Brasil",
        component: Pavilion
      },
      {
        path: "the-brazilian-pavilion",
        name: "The Brazilian Pavilion",
        component: Pavilion
      },
      {
        path: "fale-conosco",
        name: "Fale Conosco",
        component: ContactUs
      },
      {
        path: "contact-us",
        name: "Contact Us",
        component: ContactUs
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
