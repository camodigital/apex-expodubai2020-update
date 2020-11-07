<template>
  <div id="app" v-if="data">
    <Preloader />
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import TheHeader from "@/templates/TheHeader/";
import TheMain from "@/templates/TheMain/";
import TheFooter from "@/templates/TheFooter/";

import axios from "axios";

export default {
  data() {
    return {
      data: null
    };
  },
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    Preloader
  },
  methods: {
    loadData() {
      let data1 =
        "https://camoapi.com.br/wp-json/api/brasil/o-brasil-na-expo-dubai";
      let data2 =
        "https://camoapi.com.br/wp-json/api/expodubai/o-que-e-a-expo-dubai";
      let data3 = "https://camoapi.com.br/wp-json/api/faq/perguntas-frequentes";
      let data4 =
        "https://camoapi.com.br/wp-json/api/geral/o-brasil-na-expo-dubai";
      let data5 = "https://camoapi.com.br/wp-json/api/noticias";
      let data6 = "https://camoapi.com.br/wp-json/api/participe/participe";
      let data7 =
        "https://camoapi.com.br/wp-json/api/pavilhao/o-pavilhao-do-brasil";

      const request1 = axios.get(data1);
      const request2 = axios.get(data2);
      const request3 = axios.get(data3);
      const request4 = axios.get(data4);
      const request5 = axios.get(data5);
      const request6 = axios.get(data6);
      const request7 = axios.get(data7);

      axios
        .all([
          request1,
          request2,
          request3,
          request4,
          request5,
          request6,
          request7
        ])
        .then(
          axios.spread((...responses) => {
            const response1 = responses[0];
            const response2 = responses[1];
            const respones3 = responses[2];
            const response4 = responses[3];
            const response5 = responses[4];
            const respones6 = responses[5];
            const respones7 = responses[6];

            // use/access the results
            this.data = [
              response1,
              response2,
              respones3,
              response4,
              response5,
              respones6,
              respones7
            ];
          })
        )
        .catch(errors => {
          // react on errors.
          console.error(errors);
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
