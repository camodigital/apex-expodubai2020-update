import axios from "axios";

const url =
  "https://camoapi.com.br/wp-json/api/faq/perguntas-frequentes";

let apiFaq = {
  title: null,
  subtitle:
    "Tem alguma dúvida sobre o evento?<br/> Nos mande a mensagem ou acesse a nossa seção de perguntas frequentes.",
  title_form: "Contact Us",
  name_form: "Name",
  email_form: "Email",
  message_form: "Message",
  call: null,
  title_faq: null,
  faq: null
};

function getData() {
  axios.get(url).then(response => {
    apiFaq.title = response.data.title_en;
    apiFaq.call = response.data.call_en;
    apiFaq.title_faq = response.data.title_faq_en;

    // Get custom faq
    const getFaq = () => {
      const faqItems = response.data.faq;

      const faqClean = faqItems.map(faq => {
        const question = faq.faq_question_en;
        const answer = faq.faq_answer_en;

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
