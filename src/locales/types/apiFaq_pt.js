import axios from "axios";

const url = "https://camoapi.com.br/wp-json/api/faq/perguntas-frequentes";

let apiFaq = {
  title: null,
  subtitle:
    "Tem alguma dúvida sobre o evento?<br/> Nos mande a mensagem ou acesse a nossa seção de perguntas frequentes.",
  title_form: "Entre em contato",
  name_form: "Nome",
  email_form: "E-mail",
  message_form: "Mensagem",
  call: null,
  title_faq: null,
  faq: null
};

function getData() {
  axios.get(url).then(response => {
    apiFaq.title = response.data.title;
    apiFaq.call = response.data.call;
    apiFaq.title_faq = response.data.title_faq;

    // Get custom faq
    const getFaq = () => {
      const faqItems = response.data.faq;

      const faqClean = faqItems.map(faq => {
        const question = faq.faq_question;
        const answer = faq.faq_answer;

        return {
          question,
          answer
        };
      });

      return faqClean;
    };
    apiFaq.faq = getFaq();
  });
}
getData();

export default apiFaq;
