import React from "react";
import Img from "@styleguide/components/img";
import Slider from "@styleguide/components/slider";
import Button from "@styleguide/components/button";
import { IconRight } from "@icons/index";

import css from "./index.module.scss";

import { SLIDER_BLOG_DATA } from "@lib/staticData";

const HomeBlogSection = () => (
  <div className={css.promoSection}>
    <div className={css.promoHeading}>Read Our Blogs</div>
    <Slider
      slidesLength={SLIDER_BLOG_DATA.length}
      sliderName="blog"
      showDots={false}
      showArrows={false}
      containerStyles={css.sliderBlogContainer}
      slideWidth={297}
    >
      {SLIDER_BLOG_DATA.map((slide, i) => (
        <div key={`blog-slide-${i}`} className={css.slideBlogContainer}>
          <Img
            className={css.slideBlogImage}
            src={slide.imageURl}
            alt={slide.heading}
          />
          <div className={css.slideBlogContent}>
            <h3 className={css.slideBlogHeading}>{slide.heading}</h3>
            <p className={css.slideBlogText}>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
    <div className={css.slideBlogBtnContainer}>
      <Button className={css.slideBlogBtn}>
        View More
        <IconRight className={css.slideBlogBtnArrow} size={"2x"} width="0" />
      </Button>
    </div>
  </div>
);

export default HomeBlogSection;
