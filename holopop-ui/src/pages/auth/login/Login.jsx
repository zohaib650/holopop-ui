import React from "react";
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
    navigate("/hero-section");
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
            <div className="login-description">
              <Form.Group className="mb-3">
                <Form.Control type="email" onChange={handleChange} placeholder="Email" name="email" className="rounded-4 p-3" value={values.email || ""} id="forEmail" />
                {touched.email && errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
              </Form.Group>
              <Form.Group className="mb-3">
                <InputGroup>
                  <Form.Control
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    className="rounded-4 p-3"
                    value={values.password || ""}
                    id="forEmail"
                    isInvalid={touched.password && errors.password}
                  />
                  <img
                    src={ForgetImg}
                    onClick={() => {
                      setIsForgotScreen(true);
                    }}
                    style={{
                      position: "absolute",
                      right: "36px",
                      top: "40%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      cursor: "pointer",
                    }}
                  />
                </InputGroup>
                {errors.password && errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
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
