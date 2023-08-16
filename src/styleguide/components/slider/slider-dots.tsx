import React from "react";
import classNames from "classnames";
import _ from "lodash";

import css from "./index.module.scss";

type DotProps = {
  active: boolean;
};

type SliderDotsProps = {
  number: number;
  activeIndex: number;
  sliderName: string;
};

const Dot = ({ active }: DotProps) => (
  <span
    className={classNames(
      css.sliderDotStyle,
      active ? css.sliderDotActive : ""
    )}
  />
);

const SliderDots = ({ number, activeIndex, sliderName }: SliderDotsProps) => {
  let dots: JSX.Element[] = [];
  _.times(number, (i) => {
    if (activeIndex === number) {
      activeIndex = 0;
    }

    dots.push(
      <Dot key={`dots-${sliderName}-${i}`} active={activeIndex === i} />
    );
  });
  return <div className={css.sliderDotContainer}>{dots}</div>;
};

export default SliderDots;
