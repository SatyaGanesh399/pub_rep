import React from "react";
import classNames from "classnames";
import Img from "@styleguide/components/img";
import Slider from "@styleguide/components/slider";
import HomeVideosPlayClipart from "@svg-resources/home-videos-play-clipart";

import css from "./index.module.scss";

import { SLIDER_VIDEO_DATA } from "@lib/staticData";

const HomeVideosSection = () => (
  <div className={classNames(css.promoSection, css.videoSection)}>
    <div className={css.promoHeading}>
      Our Videos
      <span />
    </div>
    <Slider
      slidesLength={SLIDER_VIDEO_DATA.length}
      sliderName="video"
      showDots={true}
      containerStyles={css.sliderVideoContainer}
      slideWidth={100}
    >
      {SLIDER_VIDEO_DATA.map((slide, i) => (
        <div key={`video-slide-${i}`} className={css.slideVideoContainer}>
          <div className={css.slideVideoImageContainer}>
            <Img
              className={css.slideVideoImage}
              src={slide.imageURl}
              alt={slide.heading}
            />
            <HomeVideosPlayClipart className={css.slideVideoPlayBtn} />
          </div>
          <div className={css.slideVideoContent}>
            <h3 className={css.slideVideoHeading}>{slide.heading}</h3>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default HomeVideosSection;
