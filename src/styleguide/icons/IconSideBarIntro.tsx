import * as React from "react";
import SvgIcon, { IconProps } from "@styleguide/components/svgIcon";

const IconSideBarIntro = ({ className, id, size }: IconProps) => (
  <SvgIcon
    id={id || "IconSideBarIntro"}
    className={className}
    viewBoxWidth={22}
    viewBoxHeight={18.068}
    title={"IconSideBarIntro"}
    size={size}
  >
    <path
      d="m5.222 10.342a2.977 2.977 0 1 1 5.955 0v.067a3.16 3.16 0 0 0 -.041.425 2.976 2.976 0 0 1 -5.91-.492zm8.714 2.976a2.435 2.435 0 1 0 -2.39-2.871 3.907 3.907 0 0 1 -.041.425s0 .007 0 .011a2.438 2.438 0 0 0 2.435 2.435zm5.66 1.275v9.934a.906.906 0 0 1 -.9.906h-15.796a.906.906 0 0 1 -.9-.906v-9.934a.906.906 0 0 1 .9-.9h15.794a.906.906 0 0 1 .9.9zm-5.896 4.967a.18.18 0 0 0 -.1-.16l-5.433-3.01a.186.186 0 0 0 -.276.164v6.014a.189.189 0 0 0 .089.16.222.222 0 0 0 .1.026.2.2 0 0 0 .089-.022l5.44-3.009a.185.185 0 0 0 .091-.163zm6.264-2.424v4.859l4.036 2.36v-9.583zm-11.7 5.116 4.87-2.692-4.87-2.688z"
      transform="translate(-2 -7.365)"
    />
  </SvgIcon>
);

export default IconSideBarIntro;
