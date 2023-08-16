import React from "react";
import css from "./index.module.scss";
import { IconLinkedIn, IconFacebook } from "@icons/index";

import Img from "@styleguide/components/img";

const ComingSoonHeader = () => (
  <>
    <header className={css.headerContainer}>
      <Img className={css.headerLogo} src={"logo.png"} alt="logo" />
      <div className={css.headerSocial}>
        <IconFacebook className={css.headerTab} size={"3x"} width="0" />
        <IconLinkedIn className={css.headerTab} size={"3x"} width="0" />
      </div>
    </header>
  </>
);

export default ComingSoonHeader;
