<template>
  <div class="secNews">
    <div class="secNews__container theContainer">
      <span class="theWave1 theWave"><TheWaveH /></span>
      <header class="secNews__header">
        <h1 class="zTitleBigBold" v-html="$t('news.titlecall')"></h1>
      </header>
      <div class="secNews__content">
        <div class="secNews__grid">
          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a
                  target="_blank"
                  href="https://portal.apexbrasil.com.br/noticia/brasil-inaugura-obra-do-pavilhao-nacional-na-expo-2020-em-dubai/"
                >
                  <TheFigure>
                    <slot>
                      <img
                        src="@/assets/images/news1.jpg"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <TheContent1
                  title="Brasil inaugura obra do Pavilhão Nacional naExpo 2020, em Dubai"
                  text="Previsão é de que a obra seja iniciada em dezembro. País é, neste omento, o que está em mais avançado estágio de preparação no continente, à frente inclusive de EUA e Canadá"
                  classTitle="zTitleSmallBold"
                >
                  <slot>
                    <a
                      target="_blank"
                      href="https://portal.apexbrasil.com.br/noticia/brasil-inaugura-obra-do-pavilhao-nacional-na-expo-2020-em-dubai/"
                    >
                      <TheButton :text="$t('news.buttoncall')" />
                    </a>
                  </slot>
                </TheContent1>
              </div>
            </div>
          </div>

          <div class="secNews__item">
            <div class="zRow">
              <div class="zCol">
                <a
                  target="_blank"
                  href="https://portal.apexbrasil.com.br/noticia/aberto-credenciamento-de-midia-para-cobertura-da-expo-2020-em-dubai/"
                >
                  <TheFigure>
                    <slot>
                      <img
                        src="@/assets/images/news2.jpg"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    href="https://portal.apexbrasil.com.br/noticia/aberto-credenciamento-de-midia-para-cobertura-da-expo-2020-em-dubai/"
                  >
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
                <a
                  target="_blank"
                  href="https://portal.apexbrasil.com.br/noticia/Projeto-arquitetonico-para-o-pavilhao-do-Brasil-na-Expo-Dubai-2020-e-divulgado/"
                >
                  <TheFigure>
                    <slot>
                      <img
                        src="@/assets/images/news3.jpg"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    href="https://portal.apexbrasil.com.br/noticia/Projeto-arquitetonico-para-o-pavilhao-do-Brasil-na-Expo-Dubai-2020-e-divulgado/"
                  >
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
                <a
                  target="_blank"
                  href="https://portal.apexbrasil.com.br/noticia/RETA-FINAL-INSCRICAO-PARA-SELECAO-DO-PROJETO-PARA-A-EXPO-DUBAI-2020-TERMINA-SABADO-27-10/"
                >
                  <TheFigure>
                    <slot>
                      <img
                        src="@/assets/images/news4.jpg"
                        alt="O Pavilhão do Brasil"
                      />
                    </slot>
                  </TheFigure>
                </a>
              </div>
              <div class="zCol">
                <h2 class="zTitleSmallBold">
                  <a
                    target="_blank"
                    href="https://portal.apexbrasil.com.br/noticia/RETA-FINAL-INSCRICAO-PARA-SELECAO-DO-PROJETO-PARA-A-EXPO-DUBAI-2020-TERMINA-SABADO-27-10/"
                  >
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
import TheWaveH from "@/components/TheWaveH";

export default {
  name: "SecNews",
  components: {
    TheButton,
    TheFigure,
    TheContent1,
    TheWaveH
  }
};
</script>

<style lang="sass">
@import '../../../assets/styles/settings/vars'
@import '../../../assets/styles/settings/mixins'
@import '../../../assets/styles/settings/mediaQueries'
@import "./styles/index"
</style>
