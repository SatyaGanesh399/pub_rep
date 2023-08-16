import React from "react";
import Img from "@styleguide/components/img";
import ComingSoonFooter from "./coming-soon-footer";
import ComingSoonHeader from "./coming-soon-header";
import ComingSoonSubscribe from "./coming-soon-subscribe";

import css from "./index.module.scss";

const ComingSoon = () => {
  return (
    <div className={css.comingSoonContainer}>
      <ComingSoonHeader />
      <main className={css.mainContainer}>
        <div className={css.background}>
          <Img className={css.backgroundImg} src={"bg.png"} alt="background" />
        </div>
        <div className={css.contentContainer}>
          <h1 className={css.contentHeading}>We are launching soon</h1>
          <p className={css.contentFollow}>
            India&apos;s first Clinical Career Counselling Initiative
          </p>
          <div className={css.contentSubscribe}>
            <ComingSoonSubscribe />
          </div>
        </div>
      </main>
      <ComingSoonFooter />
    </div>
  );
};

export default ComingSoon;
