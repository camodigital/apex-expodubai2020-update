<template>
  <div class="secNews">
    <div class="secNews__container theContainer">
      <header class="secNews__header">
        <h1 class="zTitleBigBold">Notícias</h1>
      </header>
      <div class="secNews__content">
        <div class="secNews__grid">
          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <slot>
                    <img
                      src="@/assets/images/news1.jpg"
                      alt="O Pavilhão do Brasil"
                    />
                  </slot>
                </TheFigure>
              </div>
              <div class="zCol">
                <TheContent1
                  title="Brasil inaugura obra do Pavilhão Nacional naExpo 2020, em Dubai"
                  text="Previsão é de que a obra seja iniciada em dezembro. País é, neste omento, o que está em mais avançado estágio de preparação no continente, à frente inclusive de EUA e Canadá"
                  classTitle="zTitleSmallBold"
                >
                  <slot>
                    <TheButton text="saiba mais" />
                  </slot>
                </TheContent1>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <slot>
                    <img
                      src="@/assets/images/news2.jpg"
                      alt="O Pavilhão do Brasil"
                    />
                  </slot>
                </TheFigure>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a href="">
                    Aberto credenciamento de mídia para cobertura da Expo 2020
                    em Dubai
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <slot>
                    <img
                      src="@/assets/images/news3.jpg"
                      alt="O Pavilhão do Brasil"
                    />
                  </slot>
                </TheFigure>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a href="">
                    Projeto arquitetônico para o pavilhão do Brasil na Expo
                    Dubai 2020 é divulgado
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <TheFigure>
                  <slot>
                    <img
                      src="@/assets/images/news4.jpg"
                      alt="O Pavilhão do Brasil"
                    />
                  </slot>
                </TheFigure>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a href="">
                    Reta final: Inscrição para seleção do projeto para a Expo
                    Dubai 2020 termina sábado, 27/10
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFigure from "@/components/TheFigure";
import TheContent1 from "@/components/TheContent1";
import TheButton from "@/components/TheButton";

export default {
  name: "SecNews",
  components: {
    TheButton,
    TheFigure,
    TheContent1
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
