import * as React from "react";
import SvgIcon, { IconProps } from "@styleguide/components/svgIcon";

const IconSideBarReport = ({ className, id, size }: IconProps) => (
  <SvgIcon
    id={id || "IconSideBarReport"}
    className={className}
    viewBoxWidth={21}
    viewBoxHeight={19.984}
    title={"IconSideBarReport"}
    size={size}
  >
    <g transform="translate(0 -3)">
      <ellipse cx="4.718" cy="14.315" rx=".554" ry=".553" />
      <ellipse cx="12.795" cy="12.653" rx=".554" ry=".553" />
      <ellipse cx="8.914" cy="8.799" rx=".554" ry=".553" />
      <path
        d="m37.212 95.456-.036 2.287a.388.388 0 0 1 -.2.334l-3.1 1.705h9.516l-3.135-1.713a.388.388 0 0 1 -.2-.342l.007-2.271z"
        transform="translate(-28.141 -76.798)"
      />
      <ellipse cx="16.281" cy="6.716" rx=".554" ry=".553" />
      <path d="m20.638 3h-20.276a.362.362 0 0 0 -.362.361v14.372a.362.362 0 0 0 .362.361h20.276a.362.362 0 0 0 .362-.361v-14.372a.362.362 0 0 0 -.362-.361zm-1.022 13.435a.361.361 0 0 1 -.362.361h-17.508a.361.361 0 0 1 -.362-.361v-11.972a.361.361 0 0 1 .362-.363h17.508a.361.361 0 0 1 .362.361z" />
      <path
        d="m12.448 25.016h16.784v-11.251h-16.784zm2.61-3.034a1.273 1.273 0 0 1 .356.051l2.748-3.633a1.261 1.261 0 0 1 -.187-.659 1.279 1.279 0 0 1 2.557 0 1.262 1.262 0 0 1 -.161.617l2.112 2.142a1.284 1.284 0 0 1 .919-.151l2.258-3.849a1.265 1.265 0 0 1 -.317-.837 1.283 1.283 0 1 1 .929 1.224l-2.233 3.812a1.279 1.279 0 1 1 -2.048.336l-2.135-2.165a1.285 1.285 0 0 1 -1.156.023l-2.675 3.537a1.265 1.265 0 0 1 .312.832 1.279 1.279 0 1 1 -1.279-1.274z"
        transform="translate(-10.34 -8.942)"
      />
    </g>
  </SvgIcon>
);

export default IconSideBarReport;
