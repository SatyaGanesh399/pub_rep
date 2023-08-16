import React from "react";
import classNames from "classnames";
import { IconRight, IconLeft } from "@icons/index";

import css from "./index.module.scss";

type SliderArrowProps = {
  direction: string;
  handleClick?: Function;
  visible?: boolean;
  slideName?: string;
  arrowContainerStyle?: string;
};

const SliderArrow = ({
  direction,
  visible,
  handleClick,
  slideName,
  arrowContainerStyle
}: SliderArrowProps) => (
  <>
    {direction === "right" ? (
      <div
        className={classNames(
          css.sliderArrowContainer,
          css.sliderArrowRight,
          arrowContainerStyle
        )}
        onClick={() => handleClick()}
      >
        <IconRight className={css.slideArrow} width="0" />
      </div>
    ) : (
      <div
        className={classNames(
          css.sliderArrowContainer,
          css.sliderArrowLeft,
          arrowContainerStyle
        )}
        onClick={() => handleClick()}
      >
        <IconLeft className={css.slideArrow} width="0" />
      </div>
    )}
  </>
);

export default SliderArrow;
