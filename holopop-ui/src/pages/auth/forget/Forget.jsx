import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import undo from "../../../assets/icons/undo.svg";
import VerificationCode from "../verificationCode/VerificationCode";
import { Formik } from "formik";
import * as Yup from "yup";
const Forget = ({ setIsForgotScreen }) => {
  const [isVericationScreen, setIsVerificationScreen] = useState(false);
  const initialState = {
    email: "",
  };
  const velidatescema = Yup.object({
    email: Yup.string().required("Email Required"),
  });
  const handlesubmit = (values) => {
    setIsVerificationScreen(true);
  };

  return (
    <>
      {isVericationScreen ? (
        <VerificationCode setIsVerificationScreen={setIsVerificationScreen} />
      ) : (
        <div className="text-start">
          <InputGroup.Text className="undo-img bg-transparent border-0">
            <img
              onClick={() => {
                setIsForgotScreen(false);
              }}
              src={undo}
              alt="Forget Icon"
              className="img"
            />
          </InputGroup.Text>
          <div className="login-description">
            <h3>Trouble signing in?</h3>
            <p>Enter the email associated with your account and we’ll send you a link to reset your password.</p>
          </div>
          <Formik initialValues={initialState} validationSchema={velidatescema} onSubmit={handlesubmit}>
            {({ values, handleChange, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="login-field">
                  <Form.Group className="mb-3">
                    <Form.Control type="email" onChange={handleChange} placeholder="Email" name="email" className="rounded-4 p-3" value={values.email || ""} id="forEmail" />
                    {errors.email ? <Form.Control.Feedback>{errors.email}</Form.Control.Feedback> : null}
                  </Form.Group>
                </div>
                <Button type="submit" className="butn my-3 mt-4">
                  Recover Password
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default Forget;
