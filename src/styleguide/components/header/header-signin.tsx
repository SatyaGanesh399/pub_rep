import React, { useContext, useState, ChangeEventHandler } from "react";
import addToast, {Toaster} from 'react-hot-toast'
import { useRouter } from "next/router";
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@styleguide/components/input";
import Button from "@styleguide/components/button";
import { AuthorizationContext, LOGIN } from "@context/authorization-context";
import { User } from "@src/types/user";

import HeaderModalPassword from "./header-modal-password";

import css from "./index.module.scss";
import { add } from "date-fns";

const HeaderSignIn = ({ forgotPasswordHandler, resendVerificationHandler }) => {
  const { signInUserAction, dispatch } = useContext(AuthorizationContext);
  const Router = useRouter();
  const [resend, setResend] = useState(false);
  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
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

  const HeaderSignInForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus }) => {
      setSubmitting(true);
      const { email, password } = values;
      signInUserAction({
        email: email,
        password: password
      })
        .then(async (user: User) => {
          if (user != null) {
            addToast.success("Signin Succesfull")
          } else {
            addToast.error("Please verify your Account First!")
          }

          setStatus({ success: true });
          dispatch({
            type: LOGIN,
            state: {
              email: user.email
            }
          });
          await Router.push("/dashboard");
        })
        .catch(error => {
          if (error.response.data === "Unverified") {
            addToast.error("Account is not verified. Please verify via Verification Link.")
            setResend(true);
          } else {
            addToast.error(error.response.data)
          }

          setSubmitting(false);
          setStatus({ success: false });
        });
    }
  });

  const {
    values: { email, password },
    handleChange,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    status
  } = HeaderSignInForm;

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
            value={password}
            className={css.modalSignInput}
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
          Sign In
        </Button>
        <Button
          type="button"
          className={css.modalForgetBtn}
          onClick={forgotPasswordHandler}
        >
          Forgot password?
        </Button>

        {resend && (
          <Button
            type="button"
            className={css.modalForgetBtn}
            onClick={resendVerificationHandler}
          >
            Resend Verification Link
          </Button>
        )}
      </form>
      {/* <div className={css.modalFormBreak}>
        <p className={css.modalBreakText}>or sign in with</p>
      </div> */}
    </>
  );
};

export default HeaderSignIn;
