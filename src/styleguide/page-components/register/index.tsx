import React, { ChangeEventHandler, useEffect, useState } from "react";
import addToast, {Toaster} from 'react-hot-toast'
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@styleguide/components/input";
import EventsRegisterClipart from "@svg-resources/events-register-clipart";
import Button from "@styleguide/components/button";
import Select from "@styleguide/components/select";
import { Event } from "@src/types/event";
import {
  getEventsAction,
  registerForEventAction
} from "@src/actions/general-actions";

import css from "./index.module.scss";

const EventsRegisterSection = () => {
  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number not valid"),
      event: Yup.string().required("Event is required")
    });
  }, []);

  const EventsRegisterForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      phone: "",
      name: "",
      event: ""
    },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
      registerForEventAction(values.event, {
        name: values.name,
        email: values.email,
        phone: values.phone
      })
        .then(() => {
          addToast.success("Registration Successful. Thank you for Registering.")
          resetForm();
          setSubmitting(false);
          setStatus({ success: false });
        })
        .catch(error => {
          addToast.error(error.response.data)
          setSubmitting(false);
          setStatus({ success: false });
        });
    }
  });

  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    getEventsAction().then(events =>
      setEvents(events.filter(event => event.status === "active"))
    );
  }, []);

  const {
    handleSubmit,
    isSubmitting,
    touched,
    values,
    handleChange,
    errors
  } = EventsRegisterForm;

  return (
    <>
    <Toaster />
      <div className={css.clipartContainer1}>
        <EventsRegisterClipart className={css.registerClipart1} />
      </div>
      <div className={css.eventHeading}>Registration Form</div>
      <div className={css.registerContainer}>
        <div className={css.clipartContainer}>
          <EventsRegisterClipart className={css.registerClipart} />
        </div>
        <div className={css.registerForm}>
          <form onSubmit={handleSubmit} id="DashboardPersonalInfoForm">
            <div className={css.formGroup}>
              <label htmlFor={`dash_field_name`}>Full Name</label>
              <Input
                type="text"
                id={`dash_field_name`}
                placeholder={`Enter Full Name`}
                onChange={handleChange("name") as ChangeEventHandler}
                value={values["name"]}
                disabled={isSubmitting}
                className={css.formInput}
              />
              {touched["name"] && errors["name"] && (
                <div className={css.formInputError}>{errors["name"]}</div>
              )}
            </div>
            <div className={css.formGroup}>
              <label htmlFor={`dash_field_phone`}>Phone Number</label>
              <Input
                type="text"
                id={`dash_field_phone`}
                placeholder={`Enter Phone Number`}
                onChange={handleChange("phone") as ChangeEventHandler}
                value={values["phone"]}
                disabled={isSubmitting}
                className={css.formInput}
              />
              {touched["phone"] && errors["phone"] && (
                <div className={css.formInputError}>{errors["phone"]}</div>
              )}
            </div>
            <div className={css.formGroup}>
              <label htmlFor={`dash_field_email`}>Email</label>
              <Input
                type="text"
                id={`dash_field_email`}
                placeholder={`Enter Email`}
                onChange={handleChange("email") as ChangeEventHandler}
                value={values["email"]}
                disabled={isSubmitting}
                className={css.formInput}
              />
              {touched["email"] && errors["email"] && (
                <div className={css.formInputError}>{errors["email"]}</div>
              )}
            </div>
            <div className={css.formGroup}>
              <label htmlFor={`dash_field_email`}>Event</label>
              <Select
                id={`dash_field_event`}
                placeholder={`Select Event`}
                items={events.map((event, i) => {
                  return {
                    id: i,
                    value: event._id,
                    displayValue: event.title
                  };
                })}
                value={values["event"]}
                onSelect={handleChange("event") as ChangeEventHandler}
                disabled={isSubmitting}
              />
              {touched["event"] && errors["event"] && (
                <div className={css.formInputError}>{errors["event"]}</div>
              )}
            </div>
            <Button
              type="submit"
              className={classNames(
                css.formSubmit,
                isSubmitting ? css.formSubmitDisabled : ""
              )}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventsRegisterSection;
