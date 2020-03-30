<template>
  <div class="secSocial">
    <div class="secSocial__container theContainer">
      <span class="theWave1 theWave"><TheWaveH /></span>
      <div class="secSocial__facebook">
        <div class="secSocial__facebook__header">
          <h1 class="zTitleMedium"><IcoFacebook />Facebook</h1>
        </div>
        <div class="secSocial__facebook__list">
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/face-01.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a
                  href="https://www.facebook.com/Expo2020Dubai/videos/204891537481295"
                  target="_blank"
                >
                  The time we spend apart should remind us how crucial it is
                  that we stand together...
                </a>
              </div>
            </div>
          </div>
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/face-02.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a
                  href="https://www.facebook.com/Expo2020Dubai/videos/233157807829289"
                  target="_blank"
                >
                  The health and safety of everyone involved in #Expo2020 is our
                  top priority. Watch to learn more about our..
                </a>
              </div>
            </div>
          </div>
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/face-03.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a
                  href="https://www.facebook.com/photo?fbid=4126859867327830&set=a.441478172532703"
                  target="_blank"
                >
                  يراقب إكسبو 2020 دبي التطورات الجارية عن كثب، ويتخذ حزمة من
                  الاحتياطات اللازمة للحد من خطورة الإصابة بالفيروس بين جميع
                  المعنيين بإكسبو في ضوء استعد...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="secSocial__instagram">
        <div class="secSocial__instagram__header">
          <h1 class="zTitleMedium"><IcoInstagram />Instagram</h1>
        </div>
        <div class="secSocial__instagram__list">
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B-UzNb8nqx-/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-01.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B-SxcsqHGyr/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-02.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B-DB_JUHU8C/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-03.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B9tOCr7nHU2/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-04.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B9o0lsUHEPR/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-05.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a
                href="https://www.instagram.com/p/B9jq7tonNzI/"
                target="_blank"
              >
                <img
                  src="@/assets/images/insta-06.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="theWind1">
      <TheWind />
    </span>
    <span class="theWind2">
      <TheWind />
    </span>
    <span class="theWind3">
      <TheWind />
    </span>
  </div>
</template>

<script>
import IcoFacebook from "@/assets/images/icoFacebook.svg";
import IcoInstagram from "@/assets/images/icoInstagram.svg";
import TheWaveH from "@/components/TheWaveH";
import TheWind from "@/components/TheWind";

export default {
  name: "SecSocial",
  components: {
    IcoFacebook,
    IcoInstagram,
    TheWaveH,
    TheWind
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
