import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import HomeHeroClipart from "@svg-resources/home-hero-clipart";
import HomeModal from "./home-modal";
import css from "./index.module.scss";

const HomeHero = () => {
  const [isHomeModal, setHomeModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setHomeModal(true), 5000);
  }, []);

  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>
            Pro Garten - India&apos;s First Clinical Career Counselling Initiative
          </div>
          <div className={css.heroText}>
            Based on the principles of brain mapping and psychometry with Real
            Life exposure opportunities for students.
          </div>
          <Link
            className={css.heroBtn}
            to="timeline"
            smooth={true}
            offset={-30}
            duration={500}
          >
            Get Started
          </Link>
        </div>
        <HomeHeroClipart className={css.heroClipart} />
      </div>

      {isHomeModal ? <HomeModal /> : <></>}
    </div>
  );
};

export default HomeHero;
