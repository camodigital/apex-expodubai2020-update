import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/index.vue";
import ExpoDubai from "@/views/ExpoDubai/index.vue";
import BrazilExpo from "@/views/BrazilExpo/index.vue";
import Pavilion from "@/views/Pavilion/index.vue";
import ContactUs from "@/views/ContactUs/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ExpoDubai",
    name: "ExpoDubai",
    component: ExpoDubai
  },
  {
    path: "/BrazilExpo",
    name: "BrazilExpo",
    component: BrazilExpo
  },
  {
    path: "/Pavilion",
    name: "Pavilion",
    component: Pavilion
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
