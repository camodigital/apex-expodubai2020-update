import axios from "axios";

const url =
  "http://camodigital.com.br/cms/expodubai/wp-json/api/participe/participe";

let apiParticipe = {
  title: null,
  text: null,
  link: null
};

function getData() {
  axios.get(url).then(response => {
    apiParticipe.title = response.data.title_en;
    apiParticipe.text = response.data.text_en;
    apiParticipe.link = response.data.link;
  });
}
getData();

export default apiParticipe;
