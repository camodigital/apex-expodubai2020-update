<template>
  <div class="theCountdown">
    <h3
      class="theCountdown__title"
      v-html="$t('apiGeral.title_countdown')"
    ></h3>
    <div class="theCountdown__list">
      <div class="theCountdown__item">
        <div class="theCountdown__number">
          <span class="theCountdown__days"></span>
          <countDownIcon />
        </div>
        <div class="theCountdown__text">
          {{ $t("apiGeral.days_countdown") }}
        </div>
      </div>
      <div class="theCountdown__item">
        <div class="theCountdown__number">
          <span class="theCountdown__hours"></span>
          <countDownIcon />
        </div>
        <div class="theCountdown__text">
          {{ $t("apiGeral.hours_countdown") }}
        </div>
      </div>
      <div class="theCountdown__item">
        <div class="theCountdown__number">
          <span class="theCountdown__minutes"></span>
          <countDownIcon />
        </div>
        <div class="theCountdown__text">
          {{ $t("apiGeral.minutes_countdown") }}
        </div>
      </div>
      <div class="theCountdown__item">
        <div class="theCountdown__number">
          <span class="theCountdown__seconds"></span>
          <countDownIcon />
        </div>
        <div class="theCountdown__text">
          {{ $t("apiGeral.seconds_countdown") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countDownIcon from "../../assets/images/icocountdown.svg";

export default {
  name: "TheCountdown",
  data() {
    return {
      dateCountDown: "Oct 1, 2021 12:00:00"
    };
  },
  components: {
    countDownIcon
  },
  methods: {
    countDown() {
      const page = document.querySelector(".page");

      if (page.classList.contains("homePage")) {
        // Set the date we're counting down to
        let countDownDate = new Date(this.dateCountDown).getTime();

        // Update the count down every 1 second
        let x = setInterval(function() {
          // Get today's date and time
          let now = new Date().getTime();

          // Find the distance between now and the count down date
          let distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result
          document.querySelector(".theCountdown__days").innerHTML = days;
          document.querySelector(".theCountdown__hours").innerHTML = hours;
          document.querySelector(".theCountdown__minutes").innerHTML = minutes;
          document.querySelector(".theCountdown__seconds").innerHTML = seconds;

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
          }
        }, 1000);
      }
    }
  },
  mounted() {
    this.countDown();
  }
};
</script>

<style lang="sass">
@import '../../assets/styles/settings/vars'
@import '../../assets/styles/settings/mixins'
@import '../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
