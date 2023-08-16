import React, { FocusEventHandler } from "react";
import classNames from "classnames";

import css from "./index.module.scss";

type InputProps = {
  id?: string;
  name?: string;
  className?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  value?: string;
  onChange?: Function;
  onBlur?: FocusEventHandler;
  disabled?: boolean;
  readonly?: boolean;
};

const Input = ({
  name,
  id,
  className,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  disabled,
  readonly
}: InputProps) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      className={classNames(
        className,
        css.inputClass,
        disabled ? css.inputClassReadonly : "",
        readonly ? css.inputClassReadonly : ""
      )}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e)}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readonly}
    />
  );
};

export default Input;
