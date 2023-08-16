import React from "react";
import Svg from "@styleguide/components/svg";

type HomeVideosPlayClipartProps = {
  className?: string;
};

const HomeVideosPlayClipart = ({ className }: HomeVideosPlayClipartProps) => {
  return (
    <Svg
      id="home-videos-play-clipart"
      title="home-videos-play-clipart"
      className={className}
      viewBoxWidth={39}
      viewBoxHeight={39}
    >
      <defs />
      <g data-name="Group 2011" transform="translate(.42 -.204)">
        <circle
          cx="19.5"
          cy="19.5"
          r="19.5"
          fill="#f58862"
          data-name="Ellipse 21"
          transform="translate(-.42 .204)"
        />
        <path fill="#fff" d="M28.58 19.204l-14 9v-18z" data-name="Polygon 1" />
      </g>
    </Svg>
  );
};

export default HomeVideosPlayClipart;
