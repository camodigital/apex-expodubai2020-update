import axios from "axios";

const url =
  "https://camoapi.com.br/wp-json/api/pavilhao/o-pavilhao-do-brasil";

let apiPavilhao = {
  title: null,
  call: null,
  text: null,
  video_title: null,
  video_subtitle: null,
  video: null,
  galery_title: null,
  galery: null,
  title_business: null,
  photo_business: null,
  text_business: null,
  title_pavilion: null,
  photo_pavilion: null,
  text_pavilion: null
};

function getData() {
  axios.get(url).then(response => {
    apiPavilhao.title = response.data.title_en;
    apiPavilhao.call = response.data.call_en;
    apiPavilhao.text = response.data.text_en;
    apiPavilhao.video_title = response.data.video_url_title_en;
    apiPavilhao.video_subtitle = response.data.video_url_subtitle_en;
    apiPavilhao.video = response.data.video_en;
    apiPavilhao.galery_title = response.data.galery_title_en;
    apiPavilhao.galery = response.data.galery;
    apiPavilhao.title_business = response.data.title_business_en;
    apiPavilhao.photo_business = response.data.photo_business;
    apiPavilhao.text_business = response.data.text_business_en;
    apiPavilhao.title_pavilion = response.data.title_pavilion_en;
    apiPavilhao.photo_pavilion = response.data.photo_pavilion;
    apiPavilhao.text_pavilion = response.data.text_pavilion_en;
  });
}
getData();

export default apiPavilhao;
