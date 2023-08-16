import React from "react";
import Svg from "@styleguide/components/svg";

type BlogLinkedInClipartProps = {
  className?: string;
};

const BlogLinkedInClipart = ({ className }: BlogLinkedInClipartProps) => (
  <Svg
    id="career-contact-clipart"
    title="career-contact-clipart"
    viewBoxWidth={756}
    viewBoxHeight={602}
    className={className}
  >
    <circle fill="#F7D5C9" cx="25" cy="25" r="25" />
    <path
      fill="#EF7E5C"
      d="M14.52,20.34h4.84V35.9h-4.84V20.34z M16.94,12.61c1.55,0,2.8,1.26,2.8,2.8
		c0,1.55-1.25,2.81-2.8,2.81c-1.55,0-2.81-1.26-2.81-2.81C14.13,13.87,15.39,12.61,16.94,12.61"
    />
    <path
      fill="#EF7E5C"
      d="M22.39,20.34h4.64v2.13h0.06c0.65-1.22,2.22-2.51,4.58-2.51c4.89,0,5.8,3.22,5.8,7.41v8.53h-4.83
		v-7.56c0-1.81-0.04-4.12-2.51-4.12c-2.52,0-2.9,1.96-2.9,3.99v7.69h-4.83V20.34z"
    />
  </Svg>
);

export default BlogLinkedInClipart;
