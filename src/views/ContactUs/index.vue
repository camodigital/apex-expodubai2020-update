<template>
  <div class="page constactUsPage">
    <SecHeader />
    <SecFAQ />
    <SecForm />
  </div>
</template>

<script>
import SecHeader from "./SecHeader/";
import SecFAQ from "./SecFAQ/";
import SecForm from "./SecForm/";

export default {
  name: "ConstactUsPage",
  components: {
    SecHeader,
    SecFAQ,
    SecForm
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
