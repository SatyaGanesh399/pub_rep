import React from "react";
import Svg from "@styleguide/components/svg";

type BlogFacebookClipartProps = {
  className?: string;
};

const BlogFacebookClipart = ({ className }: BlogFacebookClipartProps) => (
  <Svg
    id="career-contact-clipart"
    title="career-contact-clipart"
    viewBoxWidth={756}
    viewBoxHeight={602}
    className={className}
  >
    <path
      fill="#F7D5C9"
      d="M50,25C50,11.19,38.81,0,25,0C11.19,0,0,11.19,0,25c0,12.48,9.14,22.82,21.09,24.7V32.23h-6.35V25
			h6.35v-5.51c0-6.27,3.73-9.73,9.44-9.73c2.74,0,5.6,0.49,5.6,0.49v6.15h-3.15c-3.11,0-4.07,1.93-4.07,3.9V25h6.93l-1.11,7.23
			h-5.83V49.7C40.86,47.82,50,37.48,50,25z"
    />
    <path
      fill="#EF7E5C"
      d="M34.73,32.23L35.84,25h-6.93v-4.69c0-1.98,0.97-3.9,4.07-3.9h3.15v-6.15c0,0-2.86-0.49-5.6-0.49
			c-5.71,0-9.44,3.46-9.44,9.73V25h-6.35v7.23h6.35V49.7C22.37,49.9,23.67,50,25,50c1.33,0,2.63-0.1,3.91-0.3V32.23H34.73z"
    />
  </Svg>
);

export default BlogFacebookClipart;
