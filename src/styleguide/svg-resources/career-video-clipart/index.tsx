import React from "react";
import Svg from "@styleguide/components/svg";

type CareerVideoClipartProps = {
  className?: string;
};

const CareerVideoClipart = ({ className }: CareerVideoClipartProps) => (
  <Svg
    id="career-video-clipart"
    title="career-video-clipart"
    viewBoxWidth={49}
    viewBoxHeight={75}
    className={className}
  >
    <polygon
      fill="#F58862"
      points="15.69 43.14 32.6 32.76 15.69 22.28 15.69 43.14"
    />
    <path
      stroke="#F58862"
      strokeMiterlimit="10"
      fill="none"
      strokeWidth="2px"
      d="M46.78,29.6l-.27-.27L40.85,25V18.55A5,5,0,0,0,36,13.34H10.47a5,5,0,0,0-4.85,5.21v27.5a5,5,0,0,0,4.85,5.21H36.08a5,5,0,0,0,4.86-5.21V39.58l5.66-4.31.27-.27A4.24,4.24,0,0,0,48,32.3,4.14,4.14,0,0,0,46.78,29.6Z"
    />
  </Svg>
);

export default CareerVideoClipart;
