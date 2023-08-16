import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import classNames from "classnames";
import Button from "@styleguide/components/button";
import Input from "@styleguide/components/input";
import { GUIDANCE_TYPE_DATA } from "@src/styleguide/lib/staticData";

import css from "./index.module.scss";
import CheckBox from "@src/styleguide/components/check-box";
import { sendContactQuery } from "@src/actions/general-actions";

type ContactFormProps = {
  enquiredEmailFlag: boolean;
  setLandingModalOpenSuccess?: Function;
  setLandingModalOpen?: Function;
};

const ContactForm = ({
  enquiredEmailFlag,
  setLandingModalOpenSuccess,
  setLandingModalOpen
}: ContactFormProps) => {
  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      message: Yup.string(),
      guidanceType: Yup.array()
    });
  }, []);

  const Form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: " ",
      guidanceType: []
    },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, resetForm, setStatus }) => {
      const { name, email, phone, message, guidanceType } = values;
      setStatus({ success: false });
      sendContactQuery(name, email, phone, message, guidanceType);
      axios
        .post("/api/send-email", {
          name,
          phone,
          email,
          message,
          enquiredEmailFlag,
          guidanceType
        })
        .then(result => {
          setStatus({ success: false });
          if (result.data.messageId === undefined) {
            // Failed
            setErrors({ email: "Error: " + result.data.response });
          } else {
            // Success
            setStatus({ success: true });
            if (enquiredEmailFlag) {
              setLandingModalOpen(false);
              setLandingModalOpenSuccess(true);
            }
            setSubmitting(false);
            setTimeout(() => {
              resetForm(); // It clear status state too :(
            }, 3000);
          }
        });
    }
  });

  const {
    values: { name, phone, email, message, guidanceType },
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    isSubmitting,
    status
  } = Form;

  const [checkedGuidanceTypeState, setCheckedGuidanceTypeState] = useState(
    new Array(6).fill(false)
  );
  const [finalSelectedGuidanceTypes, setFinalSelectedGuidanceTypes] = useState(
    []
  );

  const handleOnChange = (event, position) => {
    const updatedCheckedState = checkedGuidanceTypeState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedGuidanceTypeState(updatedCheckedState);

    let selectedGuidanceTypes = [];
    updatedCheckedState.map((item, index) => {
      if (item === true) {
        selectedGuidanceTypes.push(GUIDANCE_TYPE_DATA[index].name);
      }
    });
    setFinalSelectedGuidanceTypes(selectedGuidanceTypes);
  };

  const onHandleSubmitForm = event => {
    event.preventDefault();
    finalSelectedGuidanceTypes.map(choice => {
      guidanceType.push(choice);
    });

    handleSubmit();
  };

  return (
    <form
      onSubmit={event => onHandleSubmitForm(event)}
      id="ContactForm"
      className={css.contactForm}
    >
      <div className={css.fieldRow}>
        <div>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={css.inputField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={name}
            disabled={isSubmitting}
          />
          {touched.name && errors.name && (
            <div className={css.error}>{errors.name}</div>
          )}
        </div>
        <div>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone no."
            className={css.inputField}
            onChange={handleChange}
            onBlur={handleBlur}
            value={phone}
            disabled={isSubmitting}
          />
          {touched.phone && errors.phone && (
            <div className={css.error}>{errors.phone}</div>
          )}
        </div>
      </div>
      <div className={css.fieldRowFluid}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={css.inputField}
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
          disabled={isSubmitting}
        />
        {touched.email && errors.email && (
          <div className={css.error}>{errors.email}</div>
        )}
      </div>

      <div className={css.guidanceText}>
        <span>What type of guidance are you looking for?</span>
      </div>
      <div className={css.checkBoxContainer}>
        {GUIDANCE_TYPE_DATA.map(({ id, name }, index) => {
          return (
            <CheckBox
              key={id}
              id={id}
              value={name}
              textLabel={name}
              checked={checkedGuidanceTypeState[index]}
              onChange={event => handleOnChange(event, index)}
            />
          );
        })}
      </div>

      <div className={css.fieldRowFluid}>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Your message"
          className={css.inputField}
          onChange={handleChange}
          onBlur={handleBlur}
          value={message}
          disabled={isSubmitting}
        ></textarea>
        {/* {touched.message && errors.message && (
          <div className={css.error}>{errors.message}</div>
        )} */}
      </div>
      <div className={css.fieldRow}>
        <Button
          type="submit"
          className={classNames(
            css.button,
            isSubmitting ? css.buttonDisabled : ""
          )}
        >
          {isSubmitting ? "Please wait..." : "Send"}
        </Button>
        <div className={css.formMessage}>
          {status && status.success === true ? (
            <div className={css.success}>Message is sent successfully.</div>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
