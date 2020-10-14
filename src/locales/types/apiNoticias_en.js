import axios from "axios";

const url = "https://camoapi.com.br/wp-json/api/noticias";

let apiNoticias = {
  news_title: "News",
  news: null
};

function getData() {
  axios.get(url).then(response => {
    const getNews = () => {
      const newsItems = response.data;

      const newsClean = newsItems.map(item => {
        const title = item.title_en;
        const call = item.call_en;
        const photo = item.photo;
        const link = item.link;

        return {
          title,
          call,
          photo,
          link
        };
      });
      return newsClean;
    };
    apiNoticias.news = getNews();
  });
}
getData();

export default apiNoticias;
