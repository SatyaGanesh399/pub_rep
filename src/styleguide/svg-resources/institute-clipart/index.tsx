import React from "react";
import Svg from "@styleguide/components/svg";

type InstituteClipartProps = {
  className?: string;
};

const InstituteClipart = ({ className }: InstituteClipartProps) => (
  <Svg
    id="institute-clipart"
    title="institute-clipart"
    viewBoxWidth={97}
    viewBoxHeight={97}
    className={className}
  >
    <defs />
    <g transform="translate(0 .311)">
      <g d="M0-.31h97v97H0z">
        <path
          fill="#f58862"
          d="M49.35.06c-.54-.36-1.25-.36-1.79 0l-43.2 28.8H0v9.69h3.23v6.46h3.23v35.53H3.23V87H0v9.69h96.9V87h-3.23v-6.46h-3.23V45.01h3.23v-6.46h3.23v-9.69h-4.36L49.35.06zm-.9 3.28l38.27 25.52H10.18L48.45 3.34zM6.46 83.77h83.98V87H6.46v-3.23zm19.38-38.76v35.53h-9.69V45.01h3.23v-6.46h3.23v6.46h3.23zm-9.69-3.23H6.46v-3.23h9.69v3.23zm-3.23 3.23v35.53H9.69V45.01h3.23zm48.45 0v35.53h-3.23V54.7H38.76v25.84h-3.23V45.01h3.23v-6.46h19.38v6.46h3.23zm-6.46 12.92v22.61h-4.85V57.93h4.85zm-8.07 0v22.61h-4.85V57.93h4.85zM35.53 41.78h-9.69v-3.23h9.69v3.23zm-3.23 3.23v35.53h-3.23V45.01h3.23zm48.45 0v35.53h-9.69V45.01h3.23v-6.46h3.23v6.46h3.23zm-9.69-3.23h-9.69v-3.23h9.69v3.23zm-3.23 3.23v35.53H64.6V45.01h3.23zm16.15 35.53V45.01h3.23v35.53h-3.23zm9.69 9.69v3.23H3.23v-3.23h90.44zm-3.23-48.45h-9.69v-3.23h9.69v3.23zm3.23-6.46H3.23v-3.23h90.44v3.23z"
        />
      </g>
    </g>
  </Svg>
);

export default InstituteClipart;
