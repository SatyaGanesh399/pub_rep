import React from "react";
import css from "./index.module.scss";
import Img from "@styleguide/components/img";

import { CONTACT_PHONE_NUMBER } from "@lib/constants";

const ComingSoonFooter = () => (
  <footer className={css.footerContainer}>
    <Img className={css.backgroundImg} src={"whatsapp.png"} alt="whatsapp" />
    <a
      href={`https://api.whatsapp.com/send?phone=+*${CONTACT_PHONE_NUMBER}*`}
      className={css.footerContent}
    >
      {CONTACT_PHONE_NUMBER}
    </a>
  </footer>
);

export default ComingSoonFooter;
