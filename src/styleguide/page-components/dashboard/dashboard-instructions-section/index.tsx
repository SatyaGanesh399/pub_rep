import React, { useState, useContext, useRef, LegacyRef, useEffect } from "react";
import classNames from "classnames";
import Countdown from "react-countdown";
import {
  AuthorizationContext,
  UPDATE_USER_JOURNEY,
  UPDATE_USER
} from "@context/authorization-context";
import Img from "@styleguide/components/img";
import Timer from "@styleguide/components/timer";
import Button from "@styleguide/components/button";
import DashboardTestSubmitPopup from "../dashboard-test-submit-popup";
import DashboardVideoPlayer from "../dashboard-video-player";
import DashboardTestSection from "../dashboard-test-section";
import { Responses } from "@src/types/responses";
import css from "./index.module.scss";
import { getLoggedInUserAction } from "@src/authorization-actions";
import { User } from "@src/types/user";
import addToast from "react-hot-toast";

type QuestionsType = {
  questionNumber: number;
  question?: string;
  images?: string[];
  options?: string[];
};

type InstructionsExamplesType = {
  questionNumber: string;
  question?: string;
  images?: string[];
  options?: string[];
  answer?: number;
  answerText: string;
};

type DashboardInstructionsSectionProps = {
  data: {
    instructions: {
      type: string;
      name: string;
      text: string;
      text2?: string;
      images?: boolean;
      examples?: InstructionsExamplesType[];
      followText?: string;
      followTextBullets?: string[];
    };
    test: {
      type: string;
      images?: boolean;
      questions?: QuestionsType[];
    };
  };
  testTime: number[];
  menuType: string;
  setNextTest: Function;
  checkIsInterestTest : Function;
  videoID?: string;
};

const DashboardInstructionsSection = ({
  data,
  testTime,
  menuType,
  setNextTest,
  checkIsInterestTest,
  videoID,
}: DashboardInstructionsSectionProps) => {
  const [isTestStarted, setStartTest] = useState(false);
  const [testSubmitMode, setTestSubmitMode] = useState<"timed" | "done" | "interest" | null>(
    null
  );
  const [isModalVisible, setModalVisibility] = useState(false);
  const instructionstype = data.instructions.type;

  const { saveTestResponses, getLocalStorageData, dispatch, loggedInUser } = useContext(
    AuthorizationContext
  );
  const timerRef: LegacyRef<Countdown> = useRef(null);

  function getUserTestResults(){
    const { token, userEmail } = getLocalStorageData();
    getLoggedInUserAction({
      email: userEmail
    },
    token).then((user: User) => dispatch({
      type: UPDATE_USER,
      state: user
    })).catch(e => console.log(e))
  }

  const submitTestResponses = (type: "timed" | "done" | "interest") => {
    timerRef.current.api.pause();
    const { token, userEmail } = getLocalStorageData();
    const testResponse: Responses[] = JSON.parse(
      localStorage.getItem(`${data.test.type}_test_responses`)
    );
    saveTestResponses(data.test.type, menuType, testResponse, token, userEmail)
      .then(async res => {
        localStorage.removeItem(`${data.test.type}_test_responses`);
        dispatch({
          type: UPDATE_USER_JOURNEY,
          state: menuType
        });
        if(data.test.type == "INTEREST"){
          setTestSubmitMode("interest");
        }else{
          setTestSubmitMode(type)
        }
        
        setModalVisibility(true);
        setStartTest(false);
        getUserTestResults();
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  };

  const onTimerComplete = () => {

    submitTestResponses("timed");
  };

  const renderExampleOptions = (example: InstructionsExamplesType) => {
    return (
      <>
        {example.options &&
          example.options.map((option, i) => (
            <label
              className={classNames(
                css.radioContainer,
                [
                  "WORK_ORIENTATION",
                  "EMOTIONAL_QUOTIENT",
                  "PERSONALITY",
                  "INTEREST"
                ].includes(instructionstype)
                  ? ""
                  : css.radioContainerDisabled
              )}
              key={`${instructionstype}_${example.questionNumber}_option_${i}`}
              htmlFor={`${instructionstype}_${example.questionNumber}_option_${i}`}
            >
              {option}
              <input
                type="radio"
                checked={example.answer === i ? true : false}
                name={`${instructionstype}_${example.questionNumber}_radio`}
                id={`${instructionstype}_${example.questionNumber}_option_${i}`}
                readOnly={
                  [
                    "WORK_ORIENTATION",
                    "EMOTIONAL_QUOTIENT",
                    "PERSONALITY",
                    "INTEREST"
                  ].includes(instructionstype)
                    ? false
                    : true
                }
                onChange={e => e.target.checked}
              />
              <span className={css.radioCheckmark}></span>
            </label>
          ))}
      </>
    );
  };

  const renderExampleImages = (example: InstructionsExamplesType) => {
    return (
      <>
        {data.instructions.hasOwnProperty("images") &&
        data.instructions.images === true
          ? example.images.length !== 0 &&
            example.images.map((image, i) => {
              return (
                <div
                  key={`${instructionstype}_${example.questionNumber}_img_${i}`}
                >
                  <Img
                    alt={`${instructionstype}_img_I${image}`}
                    src={`${instructionstype}/I${image}`}
                    testImagesPath={true}
                    className={
                      instructionstype !== "MA"
                        ? !["CA", "CL"].includes(instructionstype)
                          ? css.exampleImg
                          : ""
                        : css.exampleImgSized
                    }
                  />
                </div>
              );
            })
          : null}
      </>
    );
  };

  const renderExamples = (examples: InstructionsExamplesType[]) => {
    return (
      <>
        {examples &&
          examples.map((example, i) => (
            <div key={`${instructionstype}_${i}`}>
              <h2 className={css.exampleQuestionNumber}>
                Example: {example.questionNumber}
              </h2>
              <div className={css.example}>
                <div
                  className={classNames(
                    css.exampleImagesContainer,
                    example.hasOwnProperty("images") &&
                      instructionstype !== "SA"
                      ? css.exampleImagesContainerLeft
                      : ""
                  )}
                >
                  {renderExampleImages(example)}
                </div>
                <p className={css.exampleQuestion}>{example.question}</p>
                <div className={css.exampleOptions}>
                  {renderExampleOptions(example)}
                </div>
                <p className={css.exampleAnswer}>{example.answerText}</p>
              </div>
            </div>
          ))}
      </>
    );
  };
  
  return (
    <>
      {isTestStarted ? (
        <>
          <Timer
            time={testTime}
            onCompletion={onTimerComplete}
            start={false}
            timerRef={timerRef}
            className={css.testTimerContainer}
          />
          <DashboardTestSection
            data={data.test}
            testTime={testTime}
            onTestSave={() => submitTestResponses("done")}
          />
        </>
      ) : (
        <>
          <DashboardTestSubmitPopup
            isModalVisible={isModalVisible}
            setModalVisibility={setModalVisibility}
            setTestSubmitMode={setTestSubmitMode}
            testSubmitMode={testSubmitMode}
            setNextTest={setNextTest}
            checkIsInterestTest={checkIsInterestTest}
            
          />

          <div className={css.instructionsContainer}>
            {videoID && (
              <DashboardVideoPlayer
                videoID={videoID}
                thumbnail={"blog_image.png"}
              />
            )}
            <h2>Instructions</h2>
            <p>{data.instructions.text}</p>
            {data.instructions.type === "VA" ? (
              <>
                <div className={css.exampleContainer}>
                  {renderExamples([data.instructions.examples[0]])}
                </div>
                <p>{data.instructions.text2}</p>

                <div className={css.exampleContainer}>
                  {renderExamples([data.instructions.examples[1]])}
                </div>
              </>
            ) : (
              <div className={css.exampleContainer}>
                {renderExamples(data.instructions.examples)}
              </div>
            )}

            <p className={css.instructionsFollow}>
              {data.instructions.followText}
            </p>
            <ul className={css.instructionsFollowBullets}>
              {data.instructions.followTextBullets &&
                data.instructions.followTextBullets.map((point, i) => (
                  <li key={`${instructionstype}_bullet_${i}`}>{point}</li>
                ))}
            </ul>
            <div className={css.submitContainer}>
              <Button
                className={css.formSubmit}
                onClick={async () => {
                  await setStartTest(true);
                  await timerRef.current.api.start();
                }}
              >
                Start
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};


export default DashboardInstructionsSection;
