import React, { useState } from "react";
import Input from "@styleguide/components/input";
import { IconEyeSlash, IconEye } from "@icons/index";

import css from "./index.module.scss";

type HeaderModalPasswordProps = {
  value?: string;
  onChange?: Function;
  onBlur?: Function;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

const HeaderModalPassword = ({
  value,
  onChange,
  disabled,
  className,
  placeholder
}: HeaderModalPasswordProps) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <div className={css.modalFormPassword}>
      <Input
        type={isPasswordVisible ? "text" : "password"}
        name="password"
        id="password"
        className={className}
        placeholder={placeholder ? placeholder : "Password"}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {isPasswordVisible ? (
        <IconEyeSlash
          className={css.modalFormPasswordIcon}
          size={"2x"}
          onClick={() => setPasswordVisibility(false)}
          width="0"
        />
      ) : (
        <IconEye
          className={css.modalFormPasswordIcon}
          size={"2x"}
          onClick={() => setPasswordVisibility(true)}
          width="0"
        />
      )}
    </div>
  );
};

export default HeaderModalPassword;
