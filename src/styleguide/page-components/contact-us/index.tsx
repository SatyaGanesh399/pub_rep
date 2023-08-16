import React from "react";
import PageLayout from "@page-components/page-layout";
import ContactUsFormClipart from "@svg-resources/contact-us-form-clipart";
import ContactForm from "./contact-form";
import ContactDetails from "./contact-details";

import css from "./index.module.scss";

const ContactUs = () => {
  return (
    <PageLayout>
      <>
        <div className={css.background}>
          <h1 className={css.backgroundHeading}>Contact Us</h1>
          <p className={css.backgroundParagraph}>
            Find us here to answer all your queries
          </p>
        </div>
        <div className={css.content1366Container}>
          <div className={css.contentContainer}>
            <div className={css.blockFirst}>
              <h2 className={css.contentHeading}>Send us a message</h2>
              <ContactForm enquiredEmailFlag={false} />
            </div>
            <div className={css.blockSecond}>
              <h2 className={css.contentHeading}>Contact information</h2>
              <ContactDetails />
              <ContactUsFormClipart className={css.contactClipart} />
            </div>
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default ContactUs;
