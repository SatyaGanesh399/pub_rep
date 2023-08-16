import React, { MouseEventHandler } from "react";
import classNames from "classnames";

import css from "./index.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
};

const Button = ({ className, children, type, onClick }: Props) => {
  return (
    <button
      type={type}
      className={classNames(className, css.buttonClass)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
