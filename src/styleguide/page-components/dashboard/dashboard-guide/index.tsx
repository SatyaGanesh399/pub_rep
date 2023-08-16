import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("reactour"), { ssr: false });
import {
  getLocalStorageData,
  updateGuidedTourAction
} from "@src/actions/authorization-actions";

import css from "./index.module.scss";

type DashboardGuideProps = {
  userName: string;
  userPackage : string;
};


const DashboardGuide = ({ userName, userPackage }: DashboardGuideProps) => {
  const [isTourOpen, setIsTourOpen] = useState(true);
  
  const tourSteps = userPackage != "basic" ? [{
    selector: "#welcome",
    content: `Hello ${userName}!`
  },
  {
    selector: "#DashboardPersonalInfoForm",
    content: "Fill in your details here!"
  },
  {
    selector: "#intro",
    content: "Go through the instructions before starting."
  },
  {
    selector: "#verbal",
    content: "Here’s your first test!"
  },
  {
    selector: "#report",
    content: "Your report will be here once it's ready!"
  },
  {
    selector: "#session",
    content: "Book your session here."
  },
  {
    selector: "#career",
    content: "Explore careers here!"
  }] : [{
    selector: "#welcome",
    content: `Hello ${userName}!`
  },
  {
    selector: "#DashboardPersonalInfoForm",
    content: "Fill in your details here!"
  },
  {
    selector: "#intro",
    content: "Go through the instructions before starting."
  },
  {
    selector: "#interest",
    content: "Here’s your first test!"
  },]

  const pageWidth = document.documentElement.clientWidth;

  if (pageWidth > 1080) {
    const tourProps: any = {
      steps: tourSteps,
      isOpen: isTourOpen,
      onRequestClose: () => {
        setIsTourOpen(false);
        const { token } = getLocalStorageData();
        updateGuidedTourAction(false, token);
      },
      className: css.guideBox,
      disableFocusLock: true
    };

    return (
      <>
        <Tour {...tourProps} />
      </>
    );
  } else {
    return null;
  }
};


export default DashboardGuide;
