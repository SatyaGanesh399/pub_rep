import React, { useContext, ChangeEventHandler } from "react";
import addToast from 'react-hot-toast'
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@styleguide/components/input";
import Button from "@styleguide/components/button";
import { AuthorizationContext } from "@context/authorization-context";

import HeaderModalPassword from "./header-modal-password";

import css from "./index.module.scss";

const HeaderSignUp = ({ EmailSenderMessageHandler }) => {

  const { registerUserAction } = useContext(AuthorizationContext);

  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number not valid"),
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
        )
    });
  }, []);

  const HeaderSignUpForm = useFormik({
    initialValues: { name: "", phone: "", email: "", password: "" },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      setSubmitting(true);
      const { name, phone, email, password } = values;
      registerUserAction({
        name: name,
        email: email,
        password: password,
        phone: phone
      })
        .then(res => {
          addToast.success(res.data.message)
          setSubmitting(false);
          setStatus({ success: true });
          resetForm();
          EmailSenderMessageHandler();
        })
        .catch(err => {
          addToast.error(err.response.data)
          setSubmitting(false);
          setStatus({ success: false });
          resetForm();
        });
    }
  });

  const {
    values: { name, phone, email, password },
    handleChange,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    status
  } = HeaderSignUpForm;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="SignUpForm"
        className={css.modalSignUpForm}
      >
        <div className={css.modalSignInputContainer}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className={css.modalSignInput}
            onChange={handleChange("name") as ChangeEventHandler}
            value={name}
            disabled={isSubmitting}
          />
          {touched.name && errors.name && (
            <div className={css.modalSignInputError}>{errors.name}</div>
          )}
        </div>
        <div className={css.modalSignInputContainer}>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className={css.modalSignInput}
            onChange={handleChange("phone") as ChangeEventHandler}
            value={phone}
            disabled={isSubmitting}
          />
          {touched.phone && errors.phone && (
            <div className={css.modalSignInputError}>{errors.phone}</div>
          )}
        </div>
        <div className={css.modalSignInputContainer}>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={css.modalSignInput}
            onChange={handleChange("email") as ChangeEventHandler}
            value={email}
            disabled={isSubmitting}
          />
          {touched.email && errors.email && (
            <div className={css.modalSignInputError}>{errors.email}</div>
          )}
        </div>
        <div className={css.modalSignInputContainer}>
          <HeaderModalPassword
            className={css.modalSignInput}
            value={password}
            onChange={handleChange("password") as ChangeEventHandler}
            disabled={isSubmitting}
          />
          {touched.password && errors.password && (
            <div className={css.modalSignInputError}>{errors.password}</div>
          )}
        </div>
        <Button
          type="submit"
          className={classNames(
            css.modalSubmitBtn,
            isSubmitting ? css.modalSubmitBtnDisabled : ""
          )}
        >
          Sign Up
        </Button>
      </form>
      {/* <div className={css.modalFormBreak}>
        <p className={css.modalBreakText}>or sign up with</p>
      </div> */}
    </>
  );
};

export default HeaderSignUp;
