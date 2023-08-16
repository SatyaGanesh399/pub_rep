import React from "react";
import Img from "@styleguide/components/img";
import Slider from "@styleguide/components/slider";

import css from "./index.module.scss";

import { IconUser } from "@icons/index";
import { SLIDER_TESTIMONIAL_DATA } from "@lib/staticData";

const StudentsTestimonialsSection = () => (
  <div className={css.promoSection}>
    <div className={css.promoHeading}>Our Happy Students</div>

    <Slider
      slidesLength={SLIDER_TESTIMONIAL_DATA.length}
      sliderName="testi"
      containerStyles={css.sliderTestimonialContainer}
      slideWidth={290}
      sliderWindowWidth={290 * SLIDER_TESTIMONIAL_DATA.length}
    >
      {SLIDER_TESTIMONIAL_DATA.map((slide, i) => (
        <div key={`testi-slide-${i}`} className={css.slideTestimonialContainer}>
          {slide.imageURl.length === 0 ? (
            <IconUser
              className={css.slideTestimonialIcon}
              size={"6x"}
              width="0"
            />
          ) : (
            <Img
              className={css.slideTestimonialImage}
              src={slide.imageURl}
              alt={slide.heading}
            />
          )}
          <div className={css.slideTestimonialContent}>
            <h3 className={css.slideTestimonialHeading}>{slide.heading}</h3>
            <p className={css.slideTestimonialText}>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default StudentsTestimonialsSection;
