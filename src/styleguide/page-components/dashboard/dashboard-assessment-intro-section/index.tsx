import React, { MouseEventHandler, useContext } from "react";
import Img from "@styleguide/components/img";
import Button from "@styleguide/components/button";
import HomeVideosPlayClipart from "@svg-resources/home-videos-play-clipart";
import {
  AuthorizationContext
} from "@context/authorization-context";
import css from "./index.module.scss";

type DashbaordAssessmentIntroSectionProps = {
  setNextTest: Function;
  checkIsInterestTest : Function;
};

const DashbaordAssessmentIntroSection = ({
  setNextTest,
  checkIsInterestTest
}: DashbaordAssessmentIntroSectionProps) => {
  const { loggedInUser} = useContext(
    AuthorizationContext
  );
  function onClickHandler(){
    if(loggedInUser.package == "basic"){
      checkIsInterestTest(true)
    }
    setNextTest(true)
  }
  return(
  <div className={css.assessmentContainer}>
    <div className={css.assessmentHeading}>Here&apos;s a Video To Get Started</div>
    <div className={css.videoImageContainer}>
      <div className={css.videoIframeContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hNeRpFVpSjg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
    <div className={css.assessmentNotes}>
      <h2>More About Test Section</h2>
      <p>
        All of our tests are Internationally standardised and validated. They
        test the core abilities of an individual, the complete 5 Dimensional
        Assessment gives the most comprehensive analysis for career selection.
      </p>
    </div>
    <Button className={css.formSubmit} onClick={() => onClickHandler()}>
      Get Started
    </Button>
  </div>
  )
};

export default DashbaordAssessmentIntroSection;
