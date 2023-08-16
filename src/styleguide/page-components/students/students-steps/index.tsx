import React from "react";

import StudentsStep1Clipart from "@svg-resources/students-step1-clipart";
import StudentsStep2Clipart from "@svg-resources/students-step2-clipart";
import StudentsStep3Clipart from "@svg-resources/students-step3-clipart";
import StudentsStep4Clipart from "@svg-resources/students-step4-clipart";

import css from "./index.module.scss";

const StudentsSteps = () => (
  <div className={css.stepsContainer} id="steps">
    <div className={css.stepsHeading}>Roadmap To Career Counselling</div>
    <div className={css.steps}>
      <div className={css.stepItem}>
        <div className={css.stepInfographContainer}>
          <StudentsStep1Clipart className={css.stepInfograph} />
        </div>
        <div className={css.stepContentContainer}>
          <span className={css.stepNumber}>1</span>
          <div className={css.stepHeading}>
            <span className={css.stepNumber2}>1. </span>
            Psychometric Assessment
          </div>
          <div className={css.stepContent}>
            The assessment is a true reflection of who you are, take one today
            and examine the answers which exist within you.
          </div>
        </div>
      </div>
      <div className={css.stepItem}>
        <div className={css.stepInfographContainer}>
          <StudentsStep2Clipart className={css.stepInfograph} />
        </div>
        <div className={css.stepContentContainer}>
          <span className={css.stepNumber}>2</span>
          <div className={css.stepHeading}>
            <span className={css.stepNumber2}>2. </span>
            Career Report
          </div>
          <div className={css.stepContent}>
            The report will be elaborate and insightful, counting in all your
            strengths and weaknesses to reveal your potential.
          </div>
        </div>
      </div>
      <div className={css.stepItem}>
        <div className={css.stepInfographContainer}>
          <StudentsStep3Clipart className={css.stepInfograph} />
        </div>
        <div className={css.stepContentContainer}>
          <span className={css.stepNumber}>3</span>
          <div className={css.stepHeading}>
            <span className={css.stepNumber2}>3. </span>
            Personal Counselling
          </div>
          <div className={css.stepContent}>
            The counsellor is exclusively focused on your report and giving you
            the direction that will take you miles ahead in your career plan.
          </div>
        </div>
      </div>
      <div className={css.stepItem}>
        <div className={css.stepInfographContainer}>
          <StudentsStep4Clipart className={css.stepInfograph} />
        </div>
        <div className={css.stepContentContainer}>
          <span className={css.stepNumber}>4</span>
          <div className={css.stepHeading}>
            <span className={css.stepNumber2}>4. </span>
            Industry Exposure
          </div>
          <div className={css.stepContent}>
            You wouldn’t know till you experience, the bootcamp allows you to
            feel like a professional so you know what you’re getting into.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentsSteps;
