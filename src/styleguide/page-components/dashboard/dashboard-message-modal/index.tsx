import React, { MouseEventHandler } from "react";
import Modal from "@styleguide/components/modal";
import Button from "@styleguide/components/button";
import DashboardTimedClipart from "@svg-resources/dashboard-timed-clipart";
import DashboardBreakClipart from "@svg-resources/dashboard-break-clipart";
import DashboardDoneClipart from "@svg-resources/dashboard-done-clipart";

import css from "./index.module.scss";

type DashboardMessageModalProps = {
  isModalOpen: boolean;
  onModalClose: Function;
  modalClipartType: "timed" | "done" | "break";
  modalText: string;
  modalBtnText: string;
};

type ModalClipartProps = {
  modalClipartType: "timed" | "done" | "break";
};

const ModalClipart = ({ modalClipartType }: ModalClipartProps) => {
  switch (modalClipartType) {
    case "timed":
      return <DashboardTimedClipart className={css.modalClipart} />;
    case "break":
      return <DashboardBreakClipart className={css.modalClipart} />;
    case "done":
      return <DashboardDoneClipart className={css.modalClipart} />;
    default:
      return null;
  }
};

const DashboardMessageModal = ({
  modalText,
  isModalOpen,
  modalBtnText,
  onModalClose,
  modalClipartType
}: DashboardMessageModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      hideModalCloseBtn={true}
      className={css.modalClass}
    >
      <div className={css.modalContent}>
        <ModalClipart modalClipartType={modalClipartType} />
        <p className={css.modalText}>{modalText}</p>
        <Button
          className={css.modalBtn}
          onClick={onModalClose as MouseEventHandler}
        >
          {modalBtnText}
        </Button>
      </div>
    </Modal>
  );
};

export default DashboardMessageModal;
