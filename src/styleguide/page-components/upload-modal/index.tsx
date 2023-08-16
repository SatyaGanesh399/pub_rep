import React, { useState } from "react";
import Modal from "@styleguide/components/modal";
import Button from "@styleguide/components/button";
import ModalUploadClipart from "@svg-resources/upload-modal-clipart";

import css from "./index.module.scss";

type UploadModalProps = {
  isModalOpen: boolean;
  onModalClose: Function;
  modalClipartType: "report" | "avatar";
  modalText: string;
  modalBtnText: string;
  showCloseBtn: boolean;
};

type ModalClipartProps = {
  modalClipartType: "report" | "avatar";
};

const ModalClipart = ({ modalClipartType }: ModalClipartProps) => {
  switch (modalClipartType) {
    case "report":
      return null;
    case "avatar":
      return <ModalUploadClipart className={css.modalClipart} />;
    default:
      return null;
  }
};

const UploadModal = ({
  modalText,
  isModalOpen = false,
  modalBtnText,
  onModalClose,
  modalClipartType,
  showCloseBtn
}: UploadModalProps) => {
  const [formData, setFormData] = useState<FormData>(null);

  const createFormData = file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", modalClipartType);
    setFormData(formData);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      hideModalCloseBtn={showCloseBtn}
      className={css.modalClass}
    >
      <div className={css.modalContent}>
        <ModalClipart modalClipartType={modalClipartType} />
        <p className={css.modalText}>{modalText}</p>
        <input
          type="file"
          accept={modalClipartType === "report" ? ".pdf" : ".jpg"}
          onChange={e => {
            const file = e.target.files[0];
            createFormData(file);
          }}
        />
        <Button className={css.modalBtn} onClick={() => onModalClose(formData)}>
          {modalBtnText}
        </Button>
      </div>
    </Modal>
  );
};

export default UploadModal;
