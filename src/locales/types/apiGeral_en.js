import axios from "axios";

const url =
  "https://camoapi.com.br/wp-json/api/geral/o-brasil-na-expo-dubai";

let apiGeral = {
  title: null,
  subtitle: null,
  logo_light: null,
  logo_dark: null,
  event_date: null,
  video: null,
  active_popup: null,
  text_popup: null,
  nav_home: null,
  nav_expodubai: null,
  nav_brazil: null,
  nav_pavilion: null,
  nav_participate: null,
  nav_faq: null,
  activate_countdown: null,
  title_countdown: null,
  date_countdown: null,
  days_countdown: null,
  hours_countdown: null,
  minutes_countdown: null,
  seconds_countdown: null,
  button_video: null,
  button_participate: null,
  button_readmore: null,
  button_send: null,
  button_signin: null,
  button_faq: null,
  button_click: null
};

function getData() {
  axios.get(url).then(response => {
    apiGeral.title = response.data.title_en;
    apiGeral.subtitle = response.data.subtitle_en;
    apiGeral.logo_light = response.data.logo_light;
    apiGeral.logo_dark = response.data.logo_dark;
    apiGeral.event_date = response.data.event_date;
    apiGeral.video = response.data.video_en;
    apiGeral.active_popup = response.data.active_popup;
    apiGeral.text_popup = response.data.text_popup_en;
    apiGeral.nav_home = response.data.nav_home_en;
    apiGeral.nav_expodubai = response.data.nav_expodubai_en;
    apiGeral.nav_brazil = response.data.nav_brazil_en;
    apiGeral.nav_pavilion = response.data.nav_pavilion_en;
    apiGeral.nav_participate = response.data.nav_participate_en;
    apiGeral.nav_faq = response.data.nav_faq_en;
    apiGeral.title_countdown = response.data.title_countdown_en;
    apiGeral.date_countdown = response.data.date_countdown_en;
    apiGeral.days_countdown = response.data.days_countdown_en;
    apiGeral.hours_countdown = response.data.hours_countdown_en;
    apiGeral.minutes_countdown = response.data.minutes_countdown_en;
    apiGeral.seconds_countdown = response.data.seconds_countdown_en;
    apiGeral.button_video = response.data.button_video_en;
    apiGeral.button_participate = response.data.button_participate_en;
    apiGeral.button_readmore = response.data.button_readmore_en;
    apiGeral.button_send = response.data.button_send_en;
    apiGeral.button_signin = response.data.button_signin_en;
    apiGeral.button_faq = response.data.button_faq_en;
    apiGeral.button_click = response.data.button_click_en;
  });
}
getData();

export default apiGeral;
