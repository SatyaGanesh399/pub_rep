import React from "react";
import Modal from "@src/styleguide/components/modal";
import A from "@src/styleguide/components/a";
import Link from "next/link";
import { SOCIAL_WHATSAPP_GROUP } from "@src/styleguide/lib/staticRoutes";

import css from "./index.module.scss";

type LandingModalSuccessProps = {
  isLandingModalOpenSuccess: boolean;
  setLandingModalOpenSuccess: Function;
};

const LandingModalSuccess = ({
  isLandingModalOpenSuccess,
  setLandingModalOpenSuccess
}: LandingModalSuccessProps) => {
  return (
    <>
      <Modal
        isOpen={isLandingModalOpenSuccess}
        onClose={() => setLandingModalOpenSuccess(!isLandingModalOpenSuccess)}
        hideModalCloseBtn={false}
        className={css.contactContainer}
      >
        <div className={css.modalContainer}>
          <h1 className={css.enquiryText}>
            Thank you for filling the enquiry form. We&apos;ll get back to you soon!
          </h1>

          <div className={css.subTextContainer}>
            <h3 className={css.whatsAppText}>
              Get free updates about colleges, exams, career trends and a lot
              more by joining our WhatsApp group now!
            </h3>

            <Link href={SOCIAL_WHATSAPP_GROUP}>
              <span className={css.infoBtn}>Join Now</span>
            </Link>
          </div>

          <div className={css.homepageLink}>
            <A link={"/#services"} className={css.linkColor}>
              Visit our website
            </A>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LandingModalSuccess;
