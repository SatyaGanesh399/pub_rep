import React, { ChangeEventHandler } from "react";
import { useRouter } from "next/router";
import toast from 'react-hot-toast';
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@styleguide/components/button";
import Input from "@styleguide/components/input";
import HeaderModalPassword from "./header-modal-password";
import { updateUserPassword } from "@src/actions/authorization-actions";
import css from "./index.module.scss";

const HeaderChangePassword = ({ ModalTabHandler }) => {
  const Router = useRouter();
  const queryKey = "email";
  const queryValue = Router.query[queryKey];

  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
        ),
      confirmpassword: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
        )
    });
  }, []);

  const HeaderChangePasswordForm = useFormik({
    initialValues: { password: "", confirmpassword: "" },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      setSubmitting(true);
      const { password, confirmpassword } = values;
      if (password === confirmpassword) {
        updateUserPassword(password, queryValue as string).then(res => {
          if (res) {
            Router.push("/authentication");
          }
        });
      } else {
        toast.error("Passwords do not match")
        setSubmitting(false);
        setStatus({ success: false });
        resetForm();
      }
      ModalTabHandler();
    }
  });

  const {
    values: { password, confirmpassword },
    handleChange,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    status
  } = HeaderChangePasswordForm;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="SignInForm"
        className={css.modalSignInForm}
      >
        <div className={css.modalSignInputContainer}>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={css.modalSignInputdisable}
            onChange={handleChange("email") as ChangeEventHandler}
            value={queryValue as string}
            disabled={isSubmitting}
            readonly={false}
          />
        </div>
        <div className={css.modalSignInputContainer}>
          <HeaderModalPassword
            value={password}
            className={css.modalSignInput}
            onChange={handleChange("password") as ChangeEventHandler}
            disabled={isSubmitting}
          />
          {touched.password && errors.password && (
            <div className={css.modalSignInputError}>{errors.password}</div>
          )}
        </div>
        <div className={css.modalSignInputContainer}>
          <HeaderModalPassword
            value={confirmpassword}
            placeholder="Confirm Password"
            className={css.modalSignInput}
            onChange={handleChange("confirmpassword") as ChangeEventHandler}
            disabled={isSubmitting}
          />
          {touched.confirmpassword && errors.confirmpassword && (
            <div className={css.modalSignInputError}>
              {errors.confirmpassword}
            </div>
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
    </>
  );
};

export default HeaderChangePassword;
