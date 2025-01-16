import React, { useState, useRef } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AdminPortal.scss";
import { Button, Container, Row, Col } from "react-bootstrap";
import Profile from "../../assets/icons/Profile.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function AdminPortal() {
  const [profileImage, setProfileImage] = useState(Profile);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const profileInitialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const passwordInitialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const profileValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const passwordValidationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().min(8, "Password must be at least 8 characters").required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleProfileSubmit = (values, { setSubmitting }) => {
    console.log("Profile Form Values:", values);
    toast.success("Profile updated successfully!");
    setSubmitting(false);
  };

  const handlePasswordSubmit = (values, { setSubmitting }) => {
    console.log("Password Form Values:", values);
    toast.success("Password Change successfully!");
    setSubmitting(false);
  };

  const imgRef = useRef(null);

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={11}>
          <h4>Profile</h4>
          <div className="mb-4 position-relative image-container">
            {profileImage !== Profile && (
              <span className="remove-image" onClick={() => setProfileImage(Profile)}>
                ×
              </span>
            )}
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>

          <Formik initialValues={profileInitialValues} validationSchema={profileValidationSchema} onSubmit={handleProfileSubmit}>
            {({ setFieldValue }) => (
              <FormikForm>
                <Button
                  onClick={() => {
                    if (imgRef.current) {
                      imgRef.current.click();
                    }
                  }}
                  className="upload-photo-btn w-25 mb-4"
                >
                  Upload Photo
                </Button>

                <input type="file" ref={imgRef} accept="image/*" className="form-control mb-3 d-none" onChange={(event) => handleImageUpload(event)} />

                <div className="d-flex justify-content-between mb-3">
                  <div className="form-group name-field">
                    <label>Name</label>
                    <Field name="name" type="text" className="form-control" placeholder="Enter Name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="form-group email-field">
                    <label>Email Address</label>
                    <Field name="email" type="email" className="form-control" placeholder="joushwa2236@gmail.com" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label>Phone No</label>
                  <PhoneInput
                    name="phone"
                    international
                    defaultCountry="PK"
                    value={profileInitialValues.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    className="form-control w-50 no-border-phone"
                    placeholder="Enter phone number"
                  />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>

                <Button variant="primary" type="submit" className="update-profile-btn w-25 mb-4">
                  Update Profile
                </Button>
              </FormikForm>
            )}
          </Formik>

          <Formik initialValues={passwordInitialValues} validationSchema={passwordValidationSchema} onSubmit={handlePasswordSubmit}>
            {() => (
              <FormikForm>
                <div className="d-flex justify-content-between mb-3 mt-4">
                  <div className="form-group name-field">
                    <label>Current Password</label>
                    <Field name="currentPassword" type="password" className="form-control" placeholder="***********" />
                    <ErrorMessage name="currentPassword" component="div" className="text-danger" />
                  </div>
                  <div className="form-group email-field">
                    <label>New Password</label>
                    <Field name="newPassword" type="password" className="form-control" placeholder="************" />
                    <ErrorMessage name="newPassword" component="div" className="text-danger" />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label>Confirm Password</label>
                  <Field name="confirmPassword" type="password" className="form-control w-50" placeholder="************" />
                  <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                </div>
                <Button variant="primary" type="submit" className="update-profile-btn w-25">
                  Update Password
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPortal;
