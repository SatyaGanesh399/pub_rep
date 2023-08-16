import React from "react";
import { Link } from "react-scroll";
import CareerHeroClipart from "@svg-resources/career-hero-clipart";

import css from "./index.module.scss";

const BlogHero = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.hero1366Container}>
        <div className={css.heroContent}>
          <div className={css.heroHeading}>
            <h1>Our Blogs</h1>
          </div>
          <div className={css.heroText}>
            <p className={css.heroSubText}>Stories,Inspiration,Lifestyle</p>
            <p className={css.heroSubText}>
              Knowledge from the best brains in field
            </p>
          </div>
          <Link
            className={css.heroBtn}
            to="category"
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

export default BlogHero;
