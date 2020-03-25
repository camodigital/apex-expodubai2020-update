<template>
  <main class="theMain">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "TheMain"
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
