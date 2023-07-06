import { ProgressBar, Container } from "react-bootstrap";
import Navbar from "../../layouts/header";
import Footer from "../../layouts/footer";
import { useState } from "react";
import { config } from "../../../global/config";

import {
  PsikotesResult,
  PsikotesWrapper,
  PsikotesQuestion,
  PsikotesSelection,
  PsikotesButton,
} from "./attempts.component";

const AttemptPsikotes = (props) => {
  const [questionsBank, setQuestionsBank] = useState(
    config.pages.simulation.questionBank
  );
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const isFirst = questionIndex == 0;
  const isLast = questionIndex == questionsBank.length - 1;

  const handleButton = (add) => {
    setQuestionIndex((prev) => {
      return prev + add;
    });
  };

  const handleFinish = () => {
    console.log({ questionsBank });
    setIsFinished(() => {
      return true;
    });
  };

  const handleAnswer = (event) => {
    setQuestionsBank((questionsBank) => {
      let updateAnswer = [...questionsBank];
      if (updateAnswer[questionIndex].selected === null) {
        setAnsweredQuestions((prev) => {
          return prev + 1;
        })
      }
      updateAnswer[questionIndex].selected = parseInt(event.target.id);
      return updateAnswer;
    });
  };

  return (
    <>
      <Navbar {...props} />
      {isFinished ? (
        <Container className="mt-5">
          <PsikotesResult
            title={config.pages.simulation.result.title}
            desc={config.pages.simulation.result.description}
            simulated={"Tipe kepribadian kamu adalah"}
          />
        </Container>
      ) : (
        <>
          <Container className="mt-5">
            <ProgressBar
              now={(100 / questionsBank.length) * (answeredQuestions)}
            />
            <p className="mt-3">
              Pertanyaan ke {questionIndex + 1}/{questionsBank.length}
            </p>
          </Container>

          <PsikotesWrapper>
            <PsikotesQuestion
              question={questionsBank[questionIndex].question}
            />
            <PsikotesSelection
              answers={questionsBank[questionIndex].answers}
              selected={questionsBank[questionIndex].selected}
              handleAnswer={handleAnswer}
            />
            <PsikotesButton
              isFirst={isFirst}
              isLast={isLast}
              handleButton={handleButton}
              handleFinish={handleFinish}
            />
          </PsikotesWrapper>
        </>
      )}
      <Container style={{ marginTop: "150px" }}>
        <Footer />
      </Container>
    </>
  );
};

export default AttemptPsikotes;
