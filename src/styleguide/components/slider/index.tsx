import React, { useState, useEffect } from "react";
import classNames from "classnames";

import SliderContent from "./slider-content";
import SliderArrow from "./slider-arrow";
import SliderDots from "./slider-dots";
import Slide from "./slide";

import css from "./index.module.scss";

type SliderProps = {
  slidesLength: number;
  showDots?: boolean;
  showArrows?: boolean;
  children: JSX.Element[];
  sliderName: string;
  containerStyles?: string;
  arrowContainerStyle?: string;
  slideWidth: number;
  sliderWindowWidth?: number;
};

const Slider = ({
  slidesLength,
  children,
  sliderName,
  showArrows = true,
  showDots = true,
  containerStyles,
  arrowContainerStyle,
  slideWidth,
  sliderWindowWidth
}: SliderProps) => {
  useEffect(() => {
    setWindowWidth(() => window.innerWidth);
  }, []);

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0
  });
  const [windowWidth, setWindowWidth] = useState(0);
  const { translate, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slidesLength - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * slideWidth
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slidesLength - 1) * slideWidth,
        activeIndex: slidesLength - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * slideWidth
    });
  };
  return (
    <div className={containerStyles}>
      <SliderContent
        translate={translate}
        width={sliderWindowWidth ? sliderWindowWidth : windowWidth}
        key={sliderName}
      >
        {children.map((child, i) => (
          <Slide key={`slide-${sliderName}-${i}`}>{child}</Slide>
        ))}
      </SliderContent>

      {showArrows ? (
        <>
          <SliderArrow
            direction="left"
            handleClick={prevSlide}
            slideName={sliderName}
            arrowContainerStyle={arrowContainerStyle}
          />
          <SliderArrow
            direction="right"
            handleClick={nextSlide}
            slideName={sliderName}
            arrowContainerStyle={arrowContainerStyle}
          />
        </>
      ) : null}

      {showDots ? (
        <SliderDots
          number={slidesLength}
          activeIndex={activeIndex}
          sliderName={sliderName}
        />
      ) : null}
    </div>
  );
};

export default Slider;
