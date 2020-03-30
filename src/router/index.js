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
        path: "expodubai",
        name: "ExpoDubai",
        component: ExpoDubai
      },
      {
        path: "brazilexpo",
        name: "BrazilExpo",
        component: BrazilExpo
      },
      {
        path: "pavilion",
        name: "Pavilion",
        component: Pavilion
      },
      {
        path: "contactus",
        name: "ContactUs",
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
