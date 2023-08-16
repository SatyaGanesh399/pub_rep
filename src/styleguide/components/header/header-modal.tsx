import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";
import Modal from "@styleguide/components/modal";
import SignUpClipart from "@svg-resources/sign-up-clipart";
import { IconFacebook, IconGoogle } from "@icons/index";

import HeaderSignUp from "./header-signup";
import HeaderSignIn from "./header-signin";
import HeaderForgotPassword from "./header-forgot-password";
import HeaderChangePassword from "./header-change-password";
import HeaderResendVerification from "./header-resend-verification";

import css from "./index.module.scss";

type HeaderModalProps = {
  isModalOpen: boolean;
  onModalClose: Function;
  forChangePassword?: Boolean;
};

const HeaderModalTitles = ({ type, func }) => {
  switch (type) {
    case "signup":
      return (
        <>
          <div className={css.modalHeaderButtons}>
            <button
              className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
            >
              Sign up
            </button>
            <button className={css.modalTabBtn} onClick={() => func("signin")}>
              Sign in
            </button>
          </div>
          <HeaderSignUp
            EmailSenderMessageHandler={() => func("EmailSenderMessage")}
          />
        </>
      );
    case "signin":
      return (
        <>
          <div className={css.modalHeaderButtons}>
            <button className={css.modalTabBtn} onClick={() => func("signup")}>
              Sign up
            </button>
            <button
              className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
            >
              Sign in
            </button>
          </div>
          <HeaderSignIn
            forgotPasswordHandler={() => func("forgot")}
            resendVerificationHandler={() => func("resend")}
          />
        </>
      );
    case "change":
      return (
        <>
          <div className={css.modalHeaderButtons}>
            <button
              className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
            >
              Change Password
            </button>
          </div>
          <HeaderChangePassword ModalTabHandler={() => func("signin")} />
        </>
      );
    case "forgot":
      return (
        <>
          <div className={css.modalHeaderButtons}>
            <button
              className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
              onClick={() => func("signup")}
            >
              Forgot Password
            </button>
          </div>
          <HeaderForgotPassword />
        </>
      );

    case "resend":
      return (
        <>
          <div className={css.modalHeaderButtons}>
            <button
              className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
              onClick={() => func("signup")}
            >
              Resend Verification Link
            </button>
          </div>
          <HeaderResendVerification />
        </>
      );

    case "EmailSenderMessage":
      return (
        <div className={css.modalText}>
          <p>Link has been sent to your registered email id.</p>
          <p>First verify your account.</p>
          <button
            className={classNames(css.modalTabBtn, css.activeModalTabBtn)}
            onClick={() => func("signin")}
          >
            Sign In
          </button>
        </div>
      );

    default:
      break;
  }
};

const HeaderModal = ({
  isModalOpen,
  onModalClose,
  forChangePassword = false
}: HeaderModalProps) => {
  const [headerTitle, setHeaderTitle] = useState(
    forChangePassword ? "change" : "signin"
  );
  const [facebookBtnClass, setFacebookBtnClass] = useState(
    css.hideFacebookText
  );

  useEffect(() => {
    headerTitle === "forgot" ? setHeaderTitle("signup") : "";
  }, [onModalClose]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setHeaderTitle("signin"),
    onSwipedRight: () => setHeaderTitle("signup"),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div>
    <Modal
      className={css.modalClass}
      isOpen={isModalOpen}
      onClose={onModalClose}
    >
      <div className={css.modalContent}>
        <div className={css.modalClipart}>
          <SignUpClipart className={css.signUpSVG} />
        </div>
        <div
          className={css.modalForm}
          {...(headerTitle === "signup" || headerTitle === "signin"
            ? swipeHandlers
            : null)}
        >
          <HeaderModalTitles type={headerTitle} func={setHeaderTitle} />
        </div>
      </div>
    </Modal>
    </div>
  );
};

export default HeaderModal;
