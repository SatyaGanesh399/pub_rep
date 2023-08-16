import * as React from "react";
import Cn from "classnames";

import Svg from "@styleguide/components/svg";
import css from "./svgIcon.module.scss";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type SvgIconProps = {
  className?: string;
  id?: string;
  size: SizeProp;
  title: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  children: React.ReactNode;
};

export type IconProps = {
  className?: string;
  id?: string;
  size: SizeProp;
};

const Index = ({
  title,
  viewBoxWidth = 16,
  viewBoxHeight = 16,
  children,
  className,
  id,
  size
}: SvgIconProps) => (
  <Svg
    id={id}
    className={Cn(className, css[`size--${size}`])}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    title={title}
  >
    {children}
  </Svg>
);

export default Index;
