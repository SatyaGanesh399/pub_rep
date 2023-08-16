import React from "react";

type Props = {
  alt: string;
  className?: string;
  src: string;
  testImagesPath?: boolean;
  https?: boolean;
};

const Img = ({
  alt,
  className,
  src,
  testImagesPath = false,
  https = false
}: Props) => {
  return (
    <img
      className={className}
      src={
        https
          ? `${src}`
          : testImagesPath
          ? `${process.env.TEST_IMAGES_PATH}/${src}`
          : `${process.env.IMAGES_PATH}/${src}`
      }
      alt={alt}
    />
  );
};

export default Img;
