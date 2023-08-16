import React from "react";
import { Link } from "react-scroll";
import InstitutionHeroClipart from "@svg-resources/institution-hero-clipart";

import css from "./index.module.scss";

const InstitutionHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>
            Want to raise the standard of your results?
          </div>
          <div className={css.heroText}>
            Let us guide your students so that they can make you proud!
          </div>
          <Link
            className={css.heroBtn}
            to="types"
            smooth={true}
            offset={-30}
            duration={500}
          >
            Get Started
          </Link>
        </div>
        <InstitutionHeroClipart className={css.heroClipart} />
      </div>
    </div>
  );
};

export default InstitutionHero;
