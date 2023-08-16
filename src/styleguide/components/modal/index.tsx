import React, { memo, Suspense } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import css from "./index.module.scss";

import { IconClose } from "@src/styleguide/icons";

type ModalProps = {
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  onClose: Function;
  hideModalCloseBtn?: boolean;
};

const Modal = ({
  children,
  className,
  onClose,
  isOpen,
  hideModalCloseBtn = false
}: ModalProps) => {
  const modalContainer = (
    <div
      className={classNames(
        css.modalOverlay,
        isOpen ? css.modalOpen : css.modalClose
      )}
    >
      <div className={classNames(css.modalContainer, className)}>
        {children}
        {hideModalCloseBtn ? null : (
          <IconClose
            className={css.modalCloseIcon}
            size={"2x"}
            onClick={() => onClose(false)}
          />
        )}
      </div>
    </div>
  );

  return (
    <Suspense fallback={null}>
      {modalContainer}
    </Suspense>
  );
};

export default Modal;
