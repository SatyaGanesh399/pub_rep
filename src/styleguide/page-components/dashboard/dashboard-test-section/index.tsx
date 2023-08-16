import React, { MouseEventHandler, useEffect } from "react";
import classNames from "classnames";
import { useLocalStorage } from "@styleguide/hooks/local-storage";
import Img from "@styleguide/components/img";
import Button from "@styleguide/components/button";
import { Responses } from "@src/types/responses";

import css from "./index.module.scss";

type QuestionsType = {
  questionNumber: number;
  question?: string;
  images?: string[];
  options?: string[];
};

type DashboardTestSectionProps = {
  data: {
    type: string;
    images?: boolean;
    questions?: QuestionsType[];
  };
  testTime: number[];
  onTestSave: MouseEventHandler;
};

const DashboardTestSection = ({
  data,
  onTestSave
}: DashboardTestSectionProps) => {



  const [testResponse, setTestResponse] = useLocalStorage<Responses[]>(
    `${data.type}_test_responses`,
    []
  );


  const updateTestResponses = ({ Q, R }: Responses) => {
    let responses = [...testResponse];
    let key = -1;
    responses.every((res, i) => {
      if (res.Q === Q) {
        key = i;
        return false;
      }
      return true;
    });
    key === -1 ? responses.push({ Q: Q, R: R }) : (responses[key].R = R);
    setTestResponse(responses);
  };

  const renderQuestionOptions = (question: QuestionsType) => {
    const Q = question.questionNumber;
    return (
      <>
        {question.options &&
          question.options.map((option, R) => (
            <label
              className={css.radioContainer}
              key={`${data.type}_question_${question.questionNumber}_option_${R}`}
              htmlFor={`${data.type}_question_${question.questionNumber}_option_${R}`}
            >
              {option}
              {/* TODO */}
              <input
                type="radio"
                name={`${data.type}_${question.questionNumber}_radio`}
                id={`${data.type}_question_${question.questionNumber}_option_${R}`}
                onChange={e => updateTestResponses({ Q, R })}
              />
              <span className={css.radioCheckmark}></span>
            </label>
          ))}
      </>
    );
  };

  const renderQuestionImages = (question: QuestionsType) => {
    return (
      <>
        {data.hasOwnProperty("images") && data.images === true ? (
          question.images.length !== 0 ? (
            data.type === "SA" ? (
              <>
                <div className={css.questionSingleImgContainer}>
                  <p>SAMPLE FIGURE</p>
                  <Img
                    alt={`${data.type}_img_Q${question.images[0]}`}
                    src={`${data.type}/Q${question.images[0]}`}
                    testImagesPath={true}
                    className={css.questionImgreduced}
                  />
                </div>
                <div className={css.questionSingleImgContainer}>
                  <p>TEST FIGURE</p>
                  <Img
                    alt={`${data.type}_img_Q${question.images[1]}`}
                    src={`${data.type}/Q${question.images[1]}`}
                    testImagesPath={true}
                    className={css.questionImgreduced}
                  />
                </div>
              </>
            ) : (
              question.images.map((image, i) => {
                return (
                  <div
                    key={`${data.type}_question_${question.questionNumber}_img_${i}`}
                  >
                    <Img
                      alt={`${data.type}_img_Q${image}`}
                      src={`${data.type}/Q${image}`}
                      testImagesPath={true}
                      className={classNames(
                        data.type === "CA" || data.type === "CL"
                          ? ""
                          : css.questionImgSized
                      )}
                    />
                  </div>
                );
              })
            )
          ) : null
        ) : null}
      </>
    );
  };

  const renderQuestions = (questions: QuestionsType[]) => {
    return (
      <>
        {questions &&
          questions.map((question, i) => (
            <div key={`${data.type}_question_${i}`}>
              <h2 className={css.questionQuestionNumber}>
                Question: {question.questionNumber}
              </h2>
              <div className={css.question}>
                <div
                  className={
                    data.type === "SA" ? css.questionImagesContainer : ""
                  }
                >
                  {renderQuestionImages(question)}
                </div>
                {question.hasOwnProperty("question") &&
                question.question.length !== 0 ? (
                  <p className={css.questionQuestion}>{question.question}</p>
                ) : (
                  ""
                )}
                <div className={css.questionOptions}>
                  {renderQuestionOptions(question)}
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };
  return (
    <div className={css.testContainer}>
      <div>{renderQuestions(data.questions)}</div>
      <div className={css.submitContainer}>
        <Button className={css.formSubmit} onClick={onTestSave}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DashboardTestSection;
