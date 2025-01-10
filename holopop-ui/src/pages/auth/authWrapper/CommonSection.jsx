import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "../../../assets/icons/logo-icon.svg";
import * as Yup from "yup";
import AuthWrapper from "./AuthWrapper";
import Forget from "../forget/Forget";
import InputField from "../../auth/login/Login";

const CommonSection = () => {
  const [isForgotScreen, setIsForgotScreen] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const validateSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  });
  const handleSubmit = (values) => {};
  return (
    <AuthWrapper>
      <Container fluid className="main d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col lg={6} className="side-image d-flex justify-content-center align-items-center">
            <img className="logo-img" src={logo} alt="Logo" />
          </Col>
          <Col lg={6} className="forgetSection d-flex justify-content-center align-items-center text-white">
            {isForgotScreen ? (
              <Forget setIsForgotScreen={setIsForgotScreen} />
            ) : (
              <div className="text-start">
                <div className="login-description">
                  <h3>Let’s sign you in.</h3>
                  <p>Welcome to Holopop! Please enter your account details.</p>
                </div>
                <InputField setIsForgotScreen={setIsForgotScreen} validateSchema={validateSchema} initialState={initialState} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </AuthWrapper>
  );
};

export default CommonSection;
