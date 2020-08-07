import axios from "axios";

const url =
  "http://camodigital.com.br/cms/expodubai/wp-json/api/expodubai/o-que-e-a-expo-dubai";

let apiExpodubai = {
  title: null,
  call: null,
  text: null,
  video_title: null,
  video_subtitle: null,
  video: null,
  galery_title: null,
  galery: null
};

function getData() {
  axios.get(url).then(response => {
    apiExpodubai.title = response.data.title_en;
    apiExpodubai.call = response.data.call_en;
    apiExpodubai.text = response.data.text_en;
    apiExpodubai.video_title = response.data.video_url_title_en;
    apiExpodubai.video_subtitle = response.data.video_url_subtitle_en;
    apiExpodubai.video = response.data.video_en;
    apiExpodubai.galery_title = response.data.galery_title_en;
    apiExpodubai.galery = response.data.galery;
  });
}
getData();

export default apiExpodubai;
