import axios from "axios";

const url =
  "http://camodigital.com.br/cms/expodubai/wp-json/api/geral/o-brasil-na-expo-dubai";

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
    apiGeral.title = response.data.title;
    apiGeral.subtitle = response.data.subtitle;
    apiGeral.logo_light = response.data.logo_light;
    apiGeral.logo_dark = response.data.logo_dark;
    apiGeral.event_date = response.data.event_date;
    apiGeral.video = response.data.video;
    apiGeral.active_popup = response.data.active_popup;
    apiGeral.text_popup = response.data.text_popup;
    apiGeral.nav_home = response.data.nav_home;
    apiGeral.nav_expodubai = response.data.nav_expodubai;
    apiGeral.nav_brazil = response.data.nav_brazil;
    apiGeral.nav_pavilion = response.data.nav_pavilion;
    apiGeral.nav_participate = response.data.nav_participate;
    apiGeral.nav_faq = response.data.nav_faq;
    apiGeral.title_countdown = response.data.title_countdown;
    apiGeral.date_countdown = response.data.date_countdown;
    apiGeral.days_countdown = response.data.days_countdown;
    apiGeral.hours_countdown = response.data.hours_countdown;
    apiGeral.minutes_countdown = response.data.minutes_countdown;
    apiGeral.seconds_countdown = response.data.seconds_countdown;
    apiGeral.button_video = response.data.button_video;
    apiGeral.button_participate = response.data.button_participate;
    apiGeral.button_readmore = response.data.button_readmore;
    apiGeral.button_send = response.data.button_send;
    apiGeral.button_signin = response.data.button_signin;
    apiGeral.button_faq = response.data.button_faq;
    apiGeral.button_click = response.data.button_click;
  });
}
getData();

export default apiGeral;
