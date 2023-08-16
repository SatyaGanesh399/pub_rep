import Img from "@src/styleguide/components/img";
import React from "react";

import css from "./index.module.scss";

const LandingHeader = () => (
  <header className={css.headerContainer}>
    <Img className={css.headerLogo} src={"logo.png"} alt="logo" />
  </header>
);

export default LandingHeader;
