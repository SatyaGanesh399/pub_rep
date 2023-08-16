import React, { useState } from "react";
import Button from "@src/styleguide/components/button";
import LandingLeftClipArt from "@src/styleguide/svg-resources/landing-left-clipart";
import LandingRightClipArt from "@src/styleguide/svg-resources/landing-right-clipart";
import LandingMainClipArt from "@src/styleguide/svg-resources/landing-main-clipart";
import LandingFooter from "./landing-footer";
import LandingHeader from "./landing-header";
import LandingFancyText from "./landing-fancy-text";
import LandingModal from "./landing-modal";
import LandingModalSuccess from "./landing-modal-success";

import css from "./index.module.scss";

const Landing = () => {
  const [isLandingModalOpen, setLandingModalOpen] = useState(false);
  const [isLandingModalOpenSuccess, setLandingModalOpenSuccess] = useState(
    false
  );
  return (
    <>
      <div className={css.siteWrapper}>
        <LandingHeader />
        <div className={css.leftBottom}>
          <LandingLeftClipArt />
        </div>
        <div className={css.topRight}>
          <LandingRightClipArt />
        </div>
        <div className={css.centerContainer}>
          <div className={css.fancyTextContainer}>
            <LandingFancyText />
            <Button
              className={css.enquireButton}
              onClick={() => setLandingModalOpen(!isLandingModalOpen)}
            >
              Enquire Now
            </Button>
          </div>
          <div className={css.floatingContainer}>
            <div className={css.floatingMainSVG}>
              <LandingMainClipArt />
            </div>
          </div>
        </div>
        <LandingModal
          isLandingModalOpen={isLandingModalOpen}
          setLandingModalOpen={setLandingModalOpen}
          setLandingModalOpenSuccess={setLandingModalOpenSuccess}
        />
        <LandingModalSuccess
          isLandingModalOpenSuccess={isLandingModalOpenSuccess}
          setLandingModalOpenSuccess={setLandingModalOpenSuccess}
        />
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
