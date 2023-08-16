import React from "react";
import Subscribe from "@styleguide/components/subscribe";
import FooterSections from "./footer-sections";
import FooterCopyright from "./footer-copyright";
import FooterDotsClipart from "@svg-resources/footer-dots-clipart";

import css from "./index.module.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <FooterDotsClipart className={css.footerDotsStyle} />
      <div className={css.footer1366Container}>
        <div className={css.footerContainer}>
          <FooterSections />
          <Subscribe className={css.subscribeClass}>
            Subscribe to our newsletter
          </Subscribe>
        </div>
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
