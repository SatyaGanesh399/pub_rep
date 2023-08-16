import React from "react";
import {Link} from 'react-scroll'
import StudentsHeroClipart from "@svg-resources/students-hero-clipart";

import css from "./index.module.scss";

const StudentsHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>Are you confused?</div>
          <div className={css.heroText}>
            We know the dilemmas that you might be facing, and we are here for
            all your queries.
          </div>
          <Link
            className={css.heroBtn}
            to="steps"
            smooth={true}
            offset={-30}
            duration={500}
          >
            Get Started
          </Link>
        </div>
        <StudentsHeroClipart className={css.heroClipart} />
      </div>
    </div>
  );
};

export default StudentsHero;
