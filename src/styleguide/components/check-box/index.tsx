import React, { ChangeEventHandler, FocusEventHandler } from "react";
import classNames from "classnames";

import css from "./index.module.scss";

type CheckBoxProps = {
  id?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  textLabel?: string;
  checked?: boolean;
};

const CheckBox = ({
  name,
  id,
  textLabel,
  value,
  onChange,
  checked
}: CheckBoxProps) => {
  return (
    <div className={css.checkBoxLabel}>
      <label>
        <input
          type="checkbox"
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {textLabel}
      </label>
    </div>
  );
};

export default CheckBox;
