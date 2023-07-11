import { SubHeader } from "../../../components/utils";

import { FaqQuestionList } from "./faq.component";

const Faq = () => {
  const faqData = [
    {
      question: "Apa saja yang akan saya dapatkan setelah konseling?",
      answer:
        "Konseling online 1 on 1 meeting akan menggunakan platform Google Meet",
      show: false,
    },
    {
      question: "Konseling itu prosesnya seperti apa?",
      answer:
        "Konseling online 1 on 1 meeting akan menggunakan platform Google Meet",
      show: false,
    },
    {
      question: "Berapa lama durasi sesi konseling online?",
      answer:
        "Konseling online 1 on 1 meeting akan menggunakan platform Google Meet",
      show: false,
    },
    {
      question: "Platform apa yang digunakan untuk konseling online?",
      answer: "Sesi konseling online berlangsung selama 1 jam",
      show: false,
    },
    {
      question: "Apakah privasi dan kerahasiaan cerita saya terjamin?",
      answer:
        "Konseling online 1 on 1 meeting akan menggunakan platform Google Meet",
      show: false,
    },
  ];
  return (
    <div id="faq">
      <SubHeader
        title={"FAQ BiLing.id"}
        desc={"Pertanyaan seputar bimbingan konseling online"}
        className="text-center mb-5"
      />
      <FaqQuestionList data={faqData} />
    </div>
  );
};

export default Faq;
