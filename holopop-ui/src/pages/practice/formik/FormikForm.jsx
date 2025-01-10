import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  const handleSubmit = (values) => {
    console.log(values, "1234567");
  };
  return (
    <>
      <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="firstName" value={values.firstName || ""} />
            {errors.firstName ? <p>{errors.firstName}</p> : null}
            <input type="text" onChange={handleChange} name="lastName" value={values.lastName || ""} />
            {errors.lastName ? <p>{errors.lastName}</p> : null}
            <input type="email" onChange={handleChange} name="email" value={values.email || ""} />
            {errors.email ? <p>{errors.email}</p> : null}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
