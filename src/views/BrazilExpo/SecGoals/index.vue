<template>
  <div class="secGoals">
    <div class="secGoals__container">
      <div class="secGoals__header">
        <h1 class="titleBigSpanWave" v-html="$t('apiBrasil.goals_title')"></h1>
      </div>
      <div class="secGoals__content">
        <div class="secGoals__grid">
          <div
            class="secGoals__item"
            v-for="goal in $t('apiBrasil.goals')"
            v-bind:key="goal.title"
          >
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img :src="goal.icon" :alt="$t('apiBrasil.titlegoals')" />
              </div>
              <div class="cardIcon__text" v-html="goal.title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecGoals",
  components: {}
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
