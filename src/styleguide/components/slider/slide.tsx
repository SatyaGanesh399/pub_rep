import React from "react";

import css from "./index.module.scss";

type SlideProps = {
  children: React.ReactChild | React.ReactNode;
};

const Slide = ({ children }: SlideProps) => <>{children}</>;

export default Slide;
