import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import undo from "../../../assets/icons/undo.svg";
import { useNavigate } from "react-router-dom";
import NewPassword from "../newPassword/NewPassword";
const VerificationCode = ({ setIsVerificationScreen }) => {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [isNewPassword, setNewPassword] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    setNewPassword(true);
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
              alt="Forget Icon"
              className="img"
            />
          </InputGroup.Text>
          <div className="login-description">
            <h3>Email verification code</h3>
            <p>Please check your email. We have sent you a verification code for resetting your password</p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="login-field">
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter Verification code" name="email" required className="rounded-4 p-3" id="forEmail" />
                <Form.Control.Feedback type="invalid" className="requied-dec">
                  Code is required
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <Button
              onClick={() => {
                setNewPassword(true);
              }}
              type="submit"
              className="butn my-3 mt-4"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default VerificationCode;
