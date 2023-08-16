import React, { ChangeEventHandler } from "react";
import addToast from 'react-hot-toast'
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@styleguide/components/input";
import Button from "@styleguide/components/button";
import {
  validateUser,
  resendVerificationMail
} from "@src/actions/general-actions";

import css from "./index.module.scss";

const HeaderResendVerification = () => {

  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required")
    });
  }, []);

  const HeaderResendVerificationForm = useFormik({
    initialValues: { email: "" },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      setSubmitting(true);
      const { email } = values;
      validateUser(email).then(res => {
        if (res.status) {
          resendVerificationMail(email)
            .then(res => {
              if (res) {
                addToast.success("Link will been sent to your mail in a minute")
              }
              resetForm();
            })
            .catch(error => {
              addToast.error(error.response.data)
              setSubmitting(false);
              setStatus({ success: false });
            });
        } else {
          addToast.error("Email provided is not registered")
        }
      });
    }
  });

  const {
    values: { email },
    handleChange,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    status
  } = HeaderResendVerificationForm;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="resendForm"
        className={css.modalSignInForm}
      >
        <div className={css.modalSignInputContainer}>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Registered Email ID"
            className={css.modalSignInput}
            onChange={handleChange("email") as ChangeEventHandler}
            value={email}
            disabled={isSubmitting}
          />
          {touched.email && errors.email && (
            <div className={css.modalSignInputError}>{errors.email}</div>
          )}
        </div>
        <Button
          type="submit"
          className={classNames(
            css.modalSubmitBtn,
            isSubmitting ? css.modalSubmitBtnDisabled : ""
          )}
        >
          Submit
        </Button>
      </form>
      {/* <div className={css.modalFormBreak}>
        <p className={css.modalBreakText}>or sign in with</p>
      </div> */}
    </>
  );
};

export default HeaderResendVerification;
