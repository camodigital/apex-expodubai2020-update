<template>
  <header class="theHeader">
    <router-link :to="{ name: 'Home' }">home</router-link>
    <router-link :to="{ name: 'ExpoDubai' }">ExpoDubai</router-link>
    <router-link :to="{ name: 'BrazilExpo' }">BrazilExpo</router-link>
    <router-link :to="{ name: 'Pavilion' }">Pavilion</router-link>
    <router-link :to="{ name: 'ContactUs' }">ContactUs</router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
