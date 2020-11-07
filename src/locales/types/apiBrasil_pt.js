import axios from "axios";

const url = "https://camoapi.com.br/wp-json/api/brasil/o-brasil-na-expo-dubai";

let apiBrasil = {
  title: "null",
  call: "null",
  text: "null",
  photo: "null",
  video_title: "null",
  video_subtitle: "null",
  video: "null",
  title_sustainability: "null",
  text_sustainability: "null",
  goals_title: "null",
  goals: "null",
  history_title: "null",
  history_photo: "null",
  history_call: "null",
  history: "null"
};

function getData() {
  axios.get(url).then(response => {
    apiBrasil.title = response.data.title;
    apiBrasil.call = response.data.call;
    apiBrasil.text = response.data.text;
    apiBrasil.photo = response.data.photo;
    apiBrasil.video_title = response.data.video_url_title;
    apiBrasil.video_subtitle = response.data.video_url_subtitle;
    apiBrasil.video = response.data.video;
    apiBrasil.title_sustainability = response.data.title_sustainability;
    apiBrasil.text_sustainability = response.data.text_sustainability;
    apiBrasil.goals_title = response.data.goals_title;
    apiBrasil.history_title = response.data.history_title;
    apiBrasil.history_photo = response.data.history_photo;
    apiBrasil.history_call = response.data.history_call;

    // Get custom goals
    const getGoals = () => {
      const goalsItems = response.data.goals;

      const goalsClean = goalsItems.map(goal => {
        const title = goal.title_goal;
        const icon = goal.icon_goal;

        return {
          title,
          icon
        };
      });

      return goalsClean;
    };
    apiBrasil.goals = getGoals();

    // Get custom history
    const getHistory = () => {
      const historyItems = response.data.history;

      const historyClean = historyItems.map(history => {
        const date = history.date_history;
        const title = history.title_history;
        const text = history.text_history;
        const photo = history.photo_history;

        return {
          date,
          title,
          text,
          photo
        };
      });

      return historyClean;
    };
    apiBrasil.history = getHistory();
  });
}
getData();

export default apiBrasil;
