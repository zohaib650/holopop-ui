import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import undo from "../../../assets/icons/undo.svg";
import NewPassword from "../newPassword/NewPassword";

const VerificationCode = ({ setIsVerificationScreen }) => {
  const [validated, setValidated] = useState(false);
  const [isNewPassword, setNewPassword] = useState(false);
  const [formValues, setFormValues] = useState({ code: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setNewPassword(true); // Proceed to the next step
  };

  return (
    <>
      {isNewPassword ? (
        <NewPassword setNewPassword={setNewPassword} />
      ) : (
        <div className="text-start">
          <InputGroup.Text className="undo-img bg-transparent border-0">
            <img
              onClick={() => {
                setIsVerificationScreen(false);
              }}
              src={undo}
              alt="Back Icon"
              className="img"
              style={{ cursor: "pointer" }}
            />
          </InputGroup.Text>
          <div className="login-description">
            <h3>Email Verification Code</h3>
            <p>Please check your email. We have sent you a verification code for resetting your password.</p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="login-field">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Verification Code"
                  name="code"
                  required
                  className="rounded-4 p-3"
                  value={formValues.code}
                  onChange={handleInputChange}
                  style={{ color: formValues.code ? "white" : "black" }}
                />
                <Form.Control.Feedback type="invalid">Verification code is required.</Form.Control.Feedback>
              </Form.Group>
            </div>
            <Button type="submit" className="butn my-3 mt-4">
              Reset Password
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default VerificationCode;
