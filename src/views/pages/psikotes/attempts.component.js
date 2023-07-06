import { Container, Button } from "react-bootstrap"; 
import { Header } from "../../components/utils";
import { useNavigate } from "react-router-dom";
import { ButtonMd } from "../../components/button"; 

export const PsikotesResult = ({ title, desc, simulated }) => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/psikotes");
  };

  return (
    <>
      <div className="text-center">
        {simulated !== undefined && <p>{simulated}</p>}
        <Header
          title={title}
          description={desc}
          className={"text-center psikotes-header"}
        />
        <Button
          onClick={redirectToHome}
          className="rounded-pill mt-3 px-5 py-3"
        >
          Kembali ke Beranda
        </Button>
      </div>
    </>
  );
};

export const PsikotesQuestion = ({ question }) => {
  return <p style={{ fontSize: "24px" }}>{question}</p>;
};

export const PsikotesButton = ({ isFirst, isLast, handleButton, handleFinish }) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      {!isFirst && (
        <>
          <ButtonMd onClick={() => handleButton(-1)} label="Sebelumnya" />
          <div></div>
        </>
      )}

      {!isLast && (
        <>
          <div></div>
          <ButtonMd onClick={() => handleButton(1)} label="Selanjutnya" />
        </>
      )}
      {isLast && (
        <>
          <div></div>
          <ButtonMd onClick={handleFinish} label="Selesaikan Tes" />
        </>
      )}
    </div>
  );
};

export const PsikotesWrapper = ({ children }) => {
  return <Container className="my-5">{children}</Container>;
};

export const PsikotesSelection = ({ answers, selected, handleAnswer }) => {
  return (
    <div className="mt-5">
      {answers.map((answer, key) => {
        return (
          <Button
            key={key}
            id={key}
            onClick={handleAnswer}
            variant="white"
            className={`shadow-1 w-100 rounded-pill py-3 px-4 mb-3 text-start ${
              selected == key && "border-primary text-primary fw-bold"
            }`}
          >
            {answer}
          </Button>
        );
      })}
    </div>
  );
};
