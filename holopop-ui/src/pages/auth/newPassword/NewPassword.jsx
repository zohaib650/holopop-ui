import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import undo from "../../../assets/icons/undo.svg";
import ResetSuccessfully from "../resetSuccessfully/ResetSuccessfully";

const NewPassword = ({ setNewPassword }) => {
  const [validated, setValidated] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setIsResetPassword(true);
  };

  return (
    <div className="text-start">
      {isResetPassword ? (
        <ResetSuccessfully setIsResetPassword={setIsResetPassword} />
      ) : (
        <div>
          <InputGroup.Text className="undo-img bg-transparent border-0">
            <img
              onClick={() => {
                setNewPassword(false);
              }}
              src={undo}
              alt="Back"
              className="img"
              style={{ cursor: "pointer" }}
            />
          </InputGroup.Text>
          <div className="login-description">
            <h3>Create New Password</h3>
            <p>Please reset your password.</p>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="login-field">
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Enter Password" name="password" required className="rounded-4 p-3" id="forEmail" />
                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" required className="rounded-4 p-3" id="forEmail" />
                <Form.Control.Feedback type="invalid">Confirm Password is required</Form.Control.Feedback>
              </Form.Group>
            </div>
            <Button
              onClick={() => {
                setIsResetPassword(true);
              }}
              type="submit"
              className="butn my-3 mt-4"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
