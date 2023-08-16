import React from "react";

import css from "./index.module.scss";

const LandingFancyText = () => (
  <div className={css.textArea}>
    <ul>
      <li className={css.change}>
        <p className={css.fancyText}>
          <span className={css.themeColor}>Confused About</span>
          <br />
          Your Career?
        </p>
      </li>
      <li className={css.change}>
        <p className={css.fancyText}>
          <span className={css.themeColor}>Get guidance by</span>
          <br />
          psychologists.
        </p>
      </li>
      <li className={css.change}>
        <p className={css.fancyText}>
          <span className={css.themeColor}>Make a career plan</span>
          <br />
          for Happiness.
        </p>
      </li>
    </ul>
  </div>
);

export default LandingFancyText;
