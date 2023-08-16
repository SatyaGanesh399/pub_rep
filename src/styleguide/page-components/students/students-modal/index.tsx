import React, { useState, MouseEventHandler, useEffect } from "react";
import * as Yup from "yup";
import Modal from "@styleguide/components/modal";
import Button from "@styleguide/components/button";
import StudentsInputClipart from "@svg-resources/students-input-clipart";
import StudentsSuccessClipart from "@svg-resources/students-success-clipart";
import addToast, {Toaster} from 'react-hot-toast'

import css from "./index.module.scss";
import { getoffervalidation } from "@src/actions/general-actions";
import { LOGIN } from "@src/context/authorization-context";

import isAfter from "date-fns/isAfter";

type StudentsModalProps = {
  isModalOpen: boolean;
  onModalClose: Function;
  modalClipartType: "input" | "done";
  modalText: string;
  modalBtnText: string;
  showCloseBtn: boolean;
  packageAmount?: String;
  setPackageAmount?: Function;
  discountAmount?: Number;
  setDiscountAmount?: Function;
  setPromocode?: Function;

  setPromoState?: Function;
  isPromoCodeAppliedState?: boolean;
};

type ModalClipartProps = {
  modalClipartType: "input" | "done";
};

const ModalClipart = ({ modalClipartType }: ModalClipartProps) => {
  switch (modalClipartType) {
    case "input":
      return <StudentsInputClipart className={css.modalClipart} />;
    case "done":
      return <StudentsSuccessClipart className={css.modalClipart} />;
    default:
      return null;
  }
};

const StudentsModal = ({
  modalText,
  isModalOpen,
  modalBtnText,
  onModalClose,
  modalClipartType,
  showCloseBtn,
  packageAmount,
  setPackageAmount,
  discountAmount,
  setDiscountAmount,
  setPromocode,
  setPromoState,
  isPromoCodeAppliedState
}: StudentsModalProps) => {
  const emailValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required")
    });
  }, []);

  const validateEmail = async () => {
    await emailValidationSchema
      .validate({ email: email })
      .then(res => {
        setErrorMsg("");
        onModalClose(res.email);
      })
      .catch(function(err) {
        setErrorMsg(err.message);
      });
  };

  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isExpand, setExpend] = useState(false);
  const [promo, setPromo] = useState("");

  const applyPromo = async () => {
    getoffervalidation(promo)
      .then(res => {
        const isNumber = isNaN(res[0].count);
        let date = new Date();
        let isDate = isAfter(new Date(res[0].datetimeOfExpire), date);

        if (
          promo === res[0].title &&
          isDate === true &&
          isPromoCodeAppliedState === false
        ) {
          if ((isNumber === false && res[0].count > 0) || isNumber == true) {
            const percentage = res[0].percentage;
            const discount = Math.floor(
              Number(packageAmount) * (percentage / 100)
            );
            setDiscountAmount(() => discount);
            setPromocode(res[0].title);
            setPackageAmount(Number(packageAmount) - discount);
            expand();
            setPromoState(true);
            addToast.success("Your Promo Code has been applied !!")
          } else {
            addToast.error("Promo Code is Invalid!")
          }
        } else {
          addToast.error("Promo Code is Invalid!")
        }
      })
      .catch(err => {
        addToast.error("Promo code do not match")
      });
    setPromo("");
  };

  function expand() {
    if (isExpand) {
      setExpend(false);
    } else {
      setExpend(true);
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      hideModalCloseBtn={showCloseBtn}
      className={css.modalClass}
    >
      <div className={css.modalContent}>
        <ModalClipart modalClipartType={modalClipartType} />
        {modalClipartType === "input" ? (
          <>
            <div className={css.amountContainer}>
              <h2
                className={
                  isPromoCodeAppliedState === true ? css.textStrike : null
                }
              >
                {" "}
                ₹{Number(packageAmount) + Number(discountAmount)}
              </h2>
              {isPromoCodeAppliedState === true && (
                <h2 className={css.disAmount}>₹{Number(packageAmount)}</h2>
              )}
            </div>

            <input
              type="text"
              placeholder={`Enter Registered Email`}
              onChange={e => setEmail(e.target.value)}
              value={email}
              className={css.formInput}
            />

            <label className={css.labeltext} onClick={expand}>
              Have a Promo Code?
            </label>

            {isExpand && (
              <div className={css.inputWithButton}>
                <input
                  type="text"
                  placeholder={`Enter Promocode`}
                  onChange={e => setPromo(e.target.value)}
                  value={promo}
                />
                <Button onClick={applyPromo}>Apply</Button>
              </div>
            )}

            {errorMsg && <div className={css.formInputError}>{errorMsg}</div>}

            {isExpand === false && (
              <Button
                className={css.modalBtn}
                onClick={isExpand === false ? validateEmail : null}
              >
                {modalBtnText}
              </Button>
            )}
          </>
        ) : (
          <>
            <p className={css.modalText}>{modalText}</p>
            <form onSubmit={() => window.location.reload()}>
              <Button
                className={css.modalBtn}
                onClick={onModalClose as MouseEventHandler}
              >
                {modalBtnText}
              </Button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default StudentsModal;
