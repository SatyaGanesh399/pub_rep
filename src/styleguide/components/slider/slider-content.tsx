import React from "react";

import css from "./index.module.scss";

type SliderContentProps = {
  translate: number;
  width?: number;
  children: React.ReactNode;
};

const SliderContent = ({ translate, width, children }: SliderContentProps) => {
  return (
    <div
      style={{
        transform: `translateX(-${translate}px)`,
        width: `${width}px`
      }}
      className={css.sliderContent}
    >
      {children}
    </div>
  );
};

export default SliderContent;
