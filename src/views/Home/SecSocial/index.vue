<template>
  <div class="secSocial">
    <div class="secSocial__container theContainer">
      <div class="secSocial__facebook">
        <div class="secSocial__facebook__header">
          <h1 class="zTitleMedium"><IcoFacebook />Facebook</h1>
        </div>
        <div class="secSocial__facebook__list">
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/facebook1.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a href="#" target="_blank">
                  Expo 2020 Dubai is closely monitoring ongoing developments and
                  taking all sensible precautions...
                </a>
              </div>
            </div>
          </div>
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/facebook2.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a href="#" target="_blank">
                  Experience the innovation on show in the #CanadaPavilion 🇨🇦 at
                  The World's Greatest Show...
                </a>
              </div>
            </div>
          </div>
          <div class="secSocial__facebook__item">
            <div class="secSocial__facebook__figure">
              <img
                src="@/assets/images/facebook3.jpg"
                alt=""
                class="secSocial__facebook__image"
              />
            </div>
            <div class="secSocial__facebook__content">
              <div class="secSocial__facebook__text">
                <a href="#" target="_blank">
                  Stop by our official store at Global Village to pick up some
                  exclusive #Expo2020 #Dubai...
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
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram1.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram2.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram3.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram4.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram5.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
          <div class="secSocial__instagram__item">
            <div class="secSocial__instagram__figure">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/instagram6.jpg"
                  alt=""
                  class="secSocial__instagram__image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IcoFacebook from "@/assets/images/icoFacebook.svg";
import IcoInstagram from "@/assets/images/icoInstagram.svg";
export default {
  name: "SecSocial",
  components: {
    IcoFacebook,
    IcoInstagram
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
