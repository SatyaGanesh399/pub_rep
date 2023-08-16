import * as React from "react";

type SvgTemplateProps = {
  children?: React.ReactNode;
  title: string;
  className?: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  id?: string;
};

const Svg = ({
  children,
  title,
  viewBoxWidth,
  viewBoxHeight,
  ...otherProps
}: SvgTemplateProps) => {
  const svgId = otherProps.id
    ? `svg-${title}-${otherProps.id}`
    : `svg-${title}`;

  return (
    <svg
      {...otherProps}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={svgId}
    >
      <title id={svgId}>{title}</title>
      {children}
    </svg>
  );
};

export default Svg;
