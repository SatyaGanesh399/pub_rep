import React, {
  useContext,
  ChangeEventHandler,
  useEffect,
  useState
} from "react";
import addToast from 'react-hot-toast'
import classNames from "classnames";
import moment from "moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AuthorizationContext,
  UPDATE_USER
} from "@context/authorization-context";
import Input from "@styleguide/components/input";
import Button from "@styleguide/components/button";
import Select from "@styleguide/components/select";
import DashboardProfileClipart from "@svg-resources/dashboard-profile-clipart";
import { User } from "@src/types/user";

import css from "./index.module.scss";

import {
  DASHBOARD_PERSONAL_INFO_FIELDS,
  DASHBOARD_CLASS_YEAR_LIST,
  DASHBOARD_SEX_LIST
} from "@lib/staticData";

const PaintFields = ({
  field,
  index,
  classValType,
  setClassValType,
  formHandles: { handleChange, values, isSubmitting, touched, errors }
}) => {
  switch (field.key) {
    case "classval":
      return (
        <div className={css.formGroup}>
          <div className={css.radioGroup}>
            <label
              className={css.radioContainer}
              htmlFor={`${field.key}_radio_option_1`}
            >
              <span>Class</span>
              <input
                type="radio"
                value="class"
                checked={classValType === "class"}
                name={`${field.key}_radio_class`}
                id={`${field.key}_radio_option_1`}
                onChange={() => setClassValType("class")}
              />
              <span className={css.radioCheckmark}></span>
            </label>
            <label
              className={css.radioContainer}
              htmlFor={`${field.key}_radio_option_2`}
            >
              <span>Year</span>
              <input
                type="radio"
                value="year"
                checked={classValType === "year"}
                name={`${field.key}_radio_class`}
                id={`${field.key}_radio_option_2`}
                onChange={() => setClassValType("year")}
              />
              <span className={css.radioCheckmark}></span>
            </label>
          </div>
          <Select
            id={`${field.key}_dash`}
            placeholder={`Enter ${field.name}`}
            items={DASHBOARD_CLASS_YEAR_LIST.filter(
              item => item.type === classValType
            )}
            value={values[`${field.key}`]}
            onSelect={handleChange(`${field.key}`)}
            disabled={isSubmitting}
            readonly={field.readonly}
          />
          {touched[`${field.key}`] && errors[`${field.key}`] && (
            <div className={css.formInputError}>{errors[`${field.key}`]}</div>
          )}
        </div>
      );
    case "gender":
      return (
        <div className={css.formGroup}>
          <label htmlFor={`dash_field_${index}`}>{field.name}</label>
          <Select
            id={`${field.key}_dash`}
            placeholder={`Enter ${field.name}`}
            items={DASHBOARD_SEX_LIST}
            value={values[`${field.key}`]}
            onSelect={handleChange(`${field.key}`)}
            disabled={isSubmitting}
            readonly={field.readonly}
          />
          {touched[`${field.key}`] && errors[`${field.key}`] && (
            <div className={css.formInputError}>{errors[`${field.key}`]}</div>
          )}
        </div>
      );
    case "school":
      return (
        <div className={css.formGroup}>
          <div className={css.radioGroup}>
            <label
              className={css.radioContainer}
              htmlFor={`${field.key}_radio_option_3`}
            >
              <span>School</span>
              <input
                type="radio"
                value="class"
                checked={classValType === "class"}
                name={`${field.key}_radio_school`}
                id={`${field.key}_radio_option_3`}
                onChange={() => setClassValType("class")}
              />
              <span className={css.radioCheckmark}></span>
            </label>
            <label
              className={css.radioContainer}
              htmlFor={`${field.key}_radio_option_4`}
            >
              <span>Institute</span>
              <input
                type="radio"
                value="year"
                checked={classValType === "year"}
                name={`${field.key}_radio_school`}
                id={`${field.key}_radio_option_4`}
                onChange={() => setClassValType("year")}
              />
              <span className={css.radioCheckmark}></span>
            </label>
          </div>
          <Input
            type="text"
            id={`${field.key}_dash`}
            placeholder={`Enter ${field.name}`}
            onChange={handleChange(`${field.key}`) as ChangeEventHandler}
            value={values[`${field.key}`]}
            disabled={isSubmitting}
            className={css.formInput}
            readonly={field.readonly}
          />
          {touched[`${field.key}`] && errors[`${field.key}`] && (
            <div className={css.formInputError}>{errors[`${field.key}`]}</div>
          )}
        </div>
      );
      case "dateofbirth":
      return (
        <div className={css.formGroup}>
          <label htmlFor={`dash_field_${index}`}>{field.name}</label>
          <Input
            type="text"
            id={`${field.key}_dash`}
            placeholder={`Enter ${field.name}${
              field.key === "dateofbirth" ? " DD/MM/YYYY" : ""
            }`}
            onChange={handleChange(`${field.key}`) as ChangeEventHandler}
            value={values[`${field.key}`]}
            disabled={isSubmitting}
            className={css.formInput}
            readonly={field.readonly}
          />
          {touched[`${field.key}`] && errors[`${field.key}`] && (
            <div className={css.formInputError}>{errors[`${field.key}`]}</div>
          )}
        </div>
      );
    default:
      return (
        <div className={css.formGroup}>
          <label htmlFor={`dash_field_${index}`}>{field.name}</label>
          <Input
            type="text"
            id={`${field.key}_dash`}
            placeholder={`Enter ${field.name}${
              field.key === "dateofbirth" ? " MM/DD/YYYY" : ""
            }`}
            onChange={handleChange(`${field.key}`) as ChangeEventHandler}
            value={values[`${field.key}`]}
            disabled={isSubmitting}
            className={css.formInput}
            readonly={field.readonly}
          />
          {touched[`${field.key}`] && errors[`${field.key}`] && (
            <div className={css.formInputError}>{errors[`${field.key}`]}</div>
          )}
        </div>
      );
  }
};

const DashbaordPersonalSection = () => {
  const {
    loggedInUser,
    updateUserInfoAction,
    getLocalStorageData,
    dispatch
  } = useContext(AuthorizationContext);

  const [userInfo, setUserInfo] = useState<User>({
    email: "",
    phone: "",
    name: "",
    city: "",
    gender: "",
    classval: "",
    dateofbirth: "",
    fathername: "",
    mothername: "",
    school: ""
  });

  let type: { id: number; value: string; type: string } = {
    id: 0,
    value: "",
    type: ""
  };
  useEffect(() => {
    setUserInfo(loggedInUser);
    type = DASHBOARD_CLASS_YEAR_LIST.filter(
      item => item.value === loggedInUser.classval
    )[0];
    type !== undefined ? setClassValType(type.type) : "";
  }, [loggedInUser]);

  const formValidationSchema = React.useMemo(() => {
    return Yup.object().shape({
      city: Yup.string().required("City is required"),
      classval: Yup.string().required("Class is required"),
      school: Yup.string().required("School is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number not valid"),
      gender: Yup.string()
        .equals(["Male", "Female", "Others"], "Male, Female or Others")
        .required("Gender is required"),
      dateofbirth: Yup.string()
        .required("DOB is required")
        .matches(
          /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
          "Date as DD/MM/YYYY"
        ),
      fathername: Yup.string().required("Father's Name is required"),
      mothername: Yup.string().required("Mother's name is required")
    });
  }, []);

  const DashboardPersonalInfoForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userInfo.email,
      phone: userInfo.phone,
      name: userInfo.name,
      city: userInfo.city,
      classval: userInfo.classval,
      school: userInfo.school,
      gender: userInfo.gender,
      dateofbirth: userInfo.dateofbirth,
      fathername: userInfo.fathername,
      mothername: userInfo.mothername
    },
    validationSchema: formValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, setErrors, setStatus }) => {
      setSubmitting(true);
      values["age"] = moment().diff(
        moment(values.dateofbirth, "DD.MM.YYYY"),
        "years"
      );
      const { token } = getLocalStorageData();
      updateUserInfoAction(values, token)
        .then(() => {
          dispatch({
            type: UPDATE_USER,
            state: values
          });
          addToast.success("Your information is updated.")
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

  const { handleSubmit, isSubmitting } = DashboardPersonalInfoForm;
  const [classValType, setClassValType] = useState("class");

  return (
    <div className={css.sectionDiv}>
      <form
        onSubmit={handleSubmit}
        className={css.form}
        id="DashboardPersonalInfoForm"
      >
        <div className={css.formContent}>
          <div className={css.formColumn}>
            {DASHBOARD_PERSONAL_INFO_FIELDS.slice(0, 5).map((field, i) => (
              <>
              <PaintFields
                key={`dash_field_row_1_${i}`}
                field={field}
                index={i}
                classValType={classValType}
                setClassValType={setClassValType}
                formHandles={DashboardPersonalInfoForm}
              />
              {(field.key == "dateofbirth"  && loggedInUser.dateofbirth == "") && <p className={css.mandatoryDOB}>DOB is mandatory to proceed</p>}
              </>
            ))}
          </div>
          <div className={css.formColumn}>
            {DASHBOARD_PERSONAL_INFO_FIELDS.slice(5).map((field, i) => (
              <PaintFields
                key={`dash_field_row_2_${i}`}
                field={field}
                index={i}
                classValType={classValType}
                setClassValType={setClassValType}
                formHandles={DashboardPersonalInfoForm}
              />
            ))}
          </div>
        </div>
        <Button
          type="submit"
          className={classNames(
            css.formSubmit,
            isSubmitting ? css.formSubmitDisabled : ""
          )}
        >
          Save
        </Button>
      </form>
      <div className={css.profileInfograph}>
        <span className={css.profileUser}>
          <div className={css.profileUserText}>
            {`Hello ${loggedInUser.name.split(" ")[0]}!`}
          </div>
          <span className={css.profileText}>
            “Be yourself. An original is so much better than a copy.”
          </span>
        </span>
        <DashboardProfileClipart className={css.profileClipart} />
      </div>
    </div>
  );
};

export default DashbaordPersonalSection;
