import React, { useContext, useState } from "react";
import Button from "@styleguide/components/button";
import DashboardSubmittedClipart from "@svg-resources/dashboard-submitted-clipart";
import InterestReport from "./interestReport";
import css from "./index.module.scss";
import { getLoggedInUserAction } from "@src/authorization-actions";
import { User } from "@src/types/user";
import { HEADER_STUDENTS, SOCIAL_WHATSAPP } from "@lib/staticRoutes";
import A from "@styleguide/components/a";
import {
  AuthorizationContext,
  UPDATE_USER
} from "@context/authorization-context";

type DashboardSubmittedSection = {
  setNextTest: Function;
  pageLoad : string,
  plan : string
};

const DashboardSubmittedSection = ({
  setNextTest,
  pageLoad,
  plan
}: DashboardSubmittedSection) => {
  const [showResults, setShowResults] = useState(false);
  const {getLocalStorageData, dispatch, loggedInUser } = useContext(
    AuthorizationContext
  );
  const openTable = () =>{
    setShowResults(true);
  }
  const closeTable = () =>{
    setShowResults(false);
  }

  function getUserTestResults(){
    const { token, userEmail } = getLocalStorageData();
    getLoggedInUserAction({
      email: userEmail
    },
    token).then((user: User) => {dispatch({
      type: UPDATE_USER,
      state: user
    })
  }).catch(e => console.log(e))
    setNextTest()
  }
  if(showResults){
    return (
      <div className={css.testContainer}>
      <div className={css.reportContainer}>
      <InterestReport prop={loggedInUser.testResults['INTEREST']} />
      </div>
      <Button className={css.resultsBtn} onClick={closeTable}>
        Close
      </Button>
      <A link={SOCIAL_WHATSAPP} className={css.footerSocialTabs}>
      {pageLoad == 'interest' && plan == "basic" ?
      <Button className={css.counsellorBtn}>
        Talk to our Counsellor
      </Button>
      :
      <></>
      }
      </A>
      </div>
    )
  }else return (
    <div className={css.submitContainer}>
      <DashboardSubmittedClipart className={css.submitClipart} />
      <p className={css.submitText}>The assessment is already submitted!</p>
      {pageLoad == 'interest' && loggedInUser.testResults['INTEREST'] != 'undefined' ?
      <Button className={css.resultsBtn} onClick={openTable}>
        Test Results
      </Button> :
      <></>
      }
      {pageLoad == 'interest' && plan == "basic" ?
      <A internal link={`${HEADER_STUDENTS}/#packages`}>
        <Button className={css.continueBtn}>Buy package for a comprehensive analysis
      </Button>
      </A>
       :
       pageLoad == 'interest' && plan != "basic" ? <></> :
      <Button className={css.submitBtn} onClick={() => getUserTestResults()}>
        Next Test
      </Button>
      }
     
    </div>
  );
};

export default DashboardSubmittedSection;
