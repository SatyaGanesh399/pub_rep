import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "@styleguide/hooks/on-click-outside";

import css from "./index.module.scss";

import { IconUp, IconDown } from "@icons/index";

type SelectItemProps = {
  id: number;
  value: string;
  displayValue: string;
  type?: string;
};

type SelectProps = {
  id: string;
  value: string;
  onSelect: Function;
  disabled?: boolean;
  readonly?: boolean;
  placeholder: string;
  items: SelectItemProps[];
};

const Select = ({
  id,
  placeholder,
  items,
  onSelect,
  value,
  readonly = false,
  disabled = false
}: SelectProps) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<SelectItemProps[]>([]);
  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    setSelection(items.filter(item => item.value === value));
  }, [value]);

  const handleOnClick = (item: SelectItemProps) => {
    if (!selection.some(current => current.id === item.id)) {
      setSelection([item]);
      onSelect(item.value);
    } else {
      setSelection([]);
      onSelect("");
    }
    setOpen(false);
  };

  const isItemInSelection = item => {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className={css.selectWrapper} id={id}>
      <div
        tabIndex={0}
        className={classNames(
          css.selectHeader,
          disabled ? css.selectHeaderReadonly : "",
          readonly ? css.selectHeaderReadonly : ""
        )}
        role="button"
        onKeyPress={() => setOpen(true)}
        onClick={() => setOpen(true)}
      >
        {selection.length !== 0 ? (
          <p className={css.selectHeaderText}>{selection[0].displayValue}</p>
        ) : (
          <p className={css.selectHeaderPlaceholder}>{placeholder}</p>
        )}

        {open ? (
          <IconUp className={css.selectArrow} width="0" />
        ) : (
          <IconDown className={css.selectArrow} width="0" />
        )}
      </div>
      {open && (
        <ul className={css.selectList} ref={ref}>
          {items.map(item => (
            <li className={css.selectListItem} key={item.id}>
              <button
                type="button"
                onClick={() => handleOnClick(item)}
                className={classNames(
                  css.selectListItemBtn,
                  isItemInSelection(item) ? css.selectListItemBtnSelected : ""
                )}
              >
                <span>{item.displayValue}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
