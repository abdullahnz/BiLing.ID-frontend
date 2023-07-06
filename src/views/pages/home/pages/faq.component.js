import { useState } from "react";
import { Row } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

export const FaqQuestionList = (props) => {
  const [faqData, setFaqData] = useState(props.data);

  const handleButton = (i) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[i].show = !updatedFaqData[i].show;
    setFaqData(updatedFaqData);
  };

  return (
    <Row className="border rounded-5 py-3">
      {faqData.map((faq, i) => {
        return (
          <FaqQuestionContainer key={i} onClick={() => handleButton(i)}>
            <FaqQuestionDropdown
              question={faq.question}
              answer={faq.answer}
              show={faq.show}
            />
            <FaqQuestionIcon show={faq.show} />
          </FaqQuestionContainer>
        );
      })}
    </Row>
  );
};

export const FaqQuestionDropdown = ({ question, answer, show, onClick }) => {
  return (
    <div>
      <h4 className="fw-normal">{question}</h4>
      <p className={show ? "d-block mt-3" : "d-none mt-3"}>{answer}</p>
    </div>
  );
};

export const FaqQuestionIcon = ({ show }) => {
  return <>{show ? <CaretUpFill size={24} /> : <CaretDownFill size={24} />}</>;
};

export const FaqQuestionContainer = ({ children, onClick }) => {
  return (
    <div className="d-flex justify-content-between px-4 py-3" style={{cursor: "pointer"}} onClick={onClick}>{children}</div>
  );
};