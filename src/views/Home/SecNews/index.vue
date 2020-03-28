<template>
  <div class="secNews">
    <div class="secNews__container">
      <header class="secNews__header">
        <h1 class="zBigTitleSimple">Noticias</h1>
      </header>
      <div class="secNews__list">
        <div class="secNews__col">
          <div class="secNews__content">
            <div class="secNews__title">
              <h2 class="zTitleSmall">
                Brasil inaugura obra do Pavilhão Nacional na Expo 2020, em Dubai
              </h2>
            </div>
            <div class="secNews__call">
              Previsão é de que a obra seja iniciada em dezembro. País é, neste
              momento, o que está em mais avançado estágio de preparação no
              continente, à frente inclusive de EUA e Canadá
            </div>
            <div class="secNews__button">
              <TheButton text="saiba mais" />
            </div>
          </div>
          <div class="secNews__figure">
            <img
              src="@/assets/images/news1.jpg"
              alt=""
              class="secNews__image"
            />
          </div>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news2.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3 class="zTitleSmall">
            Aberto credenciamento de mídia para cobertura da Expo 2020 em Dubai
          </h3>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news3.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3 class="zTitleSmall">
            Projeto arquitetônico para o pavilhão do Brasil na Expo Dubai 2020 é
            divulgado
          </h3>
        </div>
        <div class="secNews__col">
          <div class="secNews__figure">
            <img
              src="@/assets/images/news4.jpg"
              alt=""
              class="secNews__images"
            />
          </div>
          <h3 class="zTitleSmall">
            Reta final: Inscrição para seleção do projeto para a Expo Dubai 2020
            termina sábado, 27/10
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton";

export default {
  name: "SecNews",
  components: {
    TheButton
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
