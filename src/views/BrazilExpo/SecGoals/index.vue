<template>
  <div class="secGoals">
    <div class="secGoals__container">
      <div class="secGoals__header">
        <h1 class="titleBigSpanWave" v-html="$t('BrazilExpo.titlegoals')"></h1>
      </div>
      <div class="secGoals__content">
        <div class="secGoals__grid">
          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal1.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.increasetourism')"
              ></div>
            </div>
          </div>

          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal2.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.promoteinnovation')"
              ></div>
            </div>
          </div>

          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal3.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.promotesustainability')"
              ></div>
            </div>
          </div>

          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal4.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.diversifymarkets')"
              ></div>
            </div>
          </div>

          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal5.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.supporteducation')"
              ></div>
            </div>
          </div>

          <div class="secGoals__item">
            <div class="cardIcon">
              <div class="cardIcon__icon">
                <img
                  src="@/assets/images/goal6.png"
                  :alt="$t('BrazilExpo.titlegoals')"
                />
              </div>
              <div
                class="cardIcon__text"
                v-html="$t('BrazilExpo.attractinvestments')"
              ></div>
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
