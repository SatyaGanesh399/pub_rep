import React from "react";
import { Link } from "react-scroll";
import CareerHeroClipart from "@svg-resources/career-hero-clipart";

import css from "./index.module.scss";

const CareerHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>Learn about the possibilities</div>
          <div className={css.heroText}>
            Let this career bank take you on an exploration of options available
          </div>
          <Link
            className={css.heroBtn}
            to="summary"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Get Started
          </Link>
        </div>
        <CareerHeroClipart className={css.heroClipart} />
      </div>
    </div>
  );
};

export default CareerHero;
