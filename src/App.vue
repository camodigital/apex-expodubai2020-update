<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/templates/TheHeader/";
import TheMain from "@/templates/TheMain/";
import TheFooter from "@/templates/TheFooter/";

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter
  }
};
</script>
