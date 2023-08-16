import React from "react";
import { Link } from "react-scroll";
import EventsHeroClipart from "@svg-resources/events-hero-clipart";

import css from "./index.module.scss";

const EventsHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>Catch us live!</div>
          <div className={css.heroText}>
            We are available for seminars, webinars and live events. Follow us
            on social media for the latest updates.
          </div>
          <Link
            className={css.heroBtn}
            to="events"
            smooth={true}
            offset={-30}
            duration={500}
          >
            Get Started
          </Link>
        </div>
        <EventsHeroClipart className={css.heroClipart} />
      </div>
    </div>
  );
};

export default EventsHero;
