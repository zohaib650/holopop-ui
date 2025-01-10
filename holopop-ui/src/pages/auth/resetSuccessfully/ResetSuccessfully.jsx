import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import undo from "../../../assets/icons/undo.svg";
import AuthWrapper from "../authWrapper/AuthWrapper";
import group from "../../../assets/icons/Group.svg";

export default function PasswordResetSuccess() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/hero-section");
  };

  return (
    <div>
      <AuthWrapper>
        <InputGroup.Text className="undo-img bg-transparent border-0">
          <img src={undo} alt="Forget Icon" className="img" />
        </InputGroup.Text>
        <div className="login-description">
          <h3>Password Reset Successfully!</h3>
        </div>
        <div className="group-img">
          <img src={group} alt="Group" />
        </div>

        <div className="login-field">
          <p>Your password has been successfully changed. You can now log in with your new password.</p>
        </div>
        <Button type="button" className="butn my-3 mt-4" onClick={handleLoginClick}>
          Log in
        </Button>
      </AuthWrapper>
    </div>
  );
}
