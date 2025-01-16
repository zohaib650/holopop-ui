import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Form, InputGroup, Button } from "react-bootstrap";
import ForgetImg from "../../../assets/icons/help.svg";
import * as Yup from "yup";

const InputField = ({ setIsForgotScreen }) => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    navigate("/deshboard");
  };

  const validateSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div>
      <Formik initialValues={initialState} validationSchema={validateSchema} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            {console.log(errors, "errors")}
            <div className="login-description">
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                  name="email"
                  className="rounded-4 p-3 email-input"
                  value={values.email || ""}
                  id="forEmail"
                  isInvalid={touched.email && errors.email}
                />

                {touched.email && errors.email && <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>}
              </Form.Group>
              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    className="rounded-4 p-3 w-100 password-input"
                    value={values.password || ""}
                    id="forPassword"
                    isInvalid={touched.password && errors.password}
                  />

                  <img
                    src={ForgetImg}
                    onClick={() => {
                      setIsForgotScreen(true);
                    }}
                    className="forgot-icon"
                  />
                </InputGroup>
                {touched.password && errors.password && <Form.Control.Feedback>{errors.password}</Form.Control.Feedback>}
              </Form.Group>
            </div>
            <Button type="submit" className="butn my-3 mt-4">
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputField;
