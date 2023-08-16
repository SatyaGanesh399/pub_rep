import React from "react";
import ContactForm from "../../contact-us/contact-form";
import Modal from "@src/styleguide/components/modal";

import css from "./index.module.scss";
import LandingPageBg from "@src/styleguide/svg-resources/landing-page-bg";

type LandingModalProps = {
  isLandingModalOpen: boolean;
  setLandingModalOpen: Function;
  setLandingModalOpenSuccess: Function;
};

const LandingModal = ({
  isLandingModalOpen,
  setLandingModalOpen,
  setLandingModalOpenSuccess
}: LandingModalProps) => {
  return (
    <>
      <Modal
        isOpen={isLandingModalOpen}
        onClose={() => setLandingModalOpen(!isLandingModalOpen)}
        hideModalCloseBtn={false}
        className={css.modalBackground}
      >
        <div className={css.modalContainer}>
          <div style={{ position: "relative", bottom: "-50%" }}>
            <LandingPageBg />
          </div>
          <div className={css.contactContainer}>
            <h1 className={css.enquiryText}>Enquiry Form</h1>
            <ContactForm
              enquiredEmailFlag={true}
              setLandingModalOpenSuccess={setLandingModalOpenSuccess}
              setLandingModalOpen={setLandingModalOpen}
            />
          </div>
          <div className={css.featureContainer}>
            <h4 className={css.featureTitle}>What&apos;s there for you?</h4>
            <ul>
              <li>Psychometric Test for career guidance</li>
              <li>Clinical career counselling</li>
              <li>Session with an industry expert</li>
              <li>Long term hand-holding support</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LandingModal;
