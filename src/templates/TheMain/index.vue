<template>
  <main class="theMain">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  name: "TheMain"
};
</script>

<style lang="sass" scoped>

.fade-enter, .fade-leave-to
  opacity: 0


.fade-enter-active, .fade-leave-active
  transition: all 1s ease
</style>
