import axios from "axios";

const url = "https://camoapi.com.br/wp-json/api/expodubai/o-que-e-a-expo-dubai";

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
    apiExpodubai.title = response.data.title;
    apiExpodubai.call = response.data.call;
    apiExpodubai.text = response.data.text;
    apiExpodubai.video_title = response.data.video_url_title;
    apiExpodubai.video_subtitle = response.data.video_url_subtitle;
    apiExpodubai.video = response.data.video;
    apiExpodubai.galery_title = response.data.galery_title;
    apiExpodubai.galery = response.data.galery;
  });
}
getData();

export default apiExpodubai;
