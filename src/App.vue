<template>
  <div id="app">
    <Preloader />
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import TheHeader from "@/templates/TheHeader/";
import TheMain from "@/templates/TheMain/";
import TheFooter from "@/templates/TheFooter/";

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    Preloader
  }
};
</script>
