import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "./User.scss";

const validationSchema = Yup.object({
  Name: Yup.string().required("Name is required"),
  Username: Yup.string().required("Username is required"),
  Phone: Yup.string().required("Phone number is required"),
  DateOfBirth: Yup.string().required("Date of birth is required"),
  Email: Yup.string().email("Invalid email address").required("Email is required"),
});

const CreateUser = ({ showModal, closeModal, rowData, setRowData }) => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Username: "",
      Phone: "",
      DateOfBirth: "",
      Email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newUser = {
        ...values,
        id: rowData.length + 1,
        Platform: "Android",
      };
      const updatedData = [...rowData, newUser];
      setRowData(updatedData);
      formik.resetForm();
      toast.success("User successfully created!");
      closeModal();
    },
  });

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group className="mb-0 form-group-flex" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Name && formik.errors.Name}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.Name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-0 form-group-flex" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="Username"
                placeholder="Enter User Name"
                value={formik.values.Username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Username && formik.errors.Username}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.Username}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <Form.Group className="mb-0 form-group-flex" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="Phone"
                placeholder="Enter Phone Number"
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Phone && formik.errors.Phone}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.Phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-0 form-group-flex" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="DateOfBirth"
                value={formik.values.DateOfBirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.DateOfBirth}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-start mb-3">
            <Form.Group className="mb-0 form-group-width" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.Email && formik.errors.Email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.Email}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="secondary" onClick={closeModal} className="cancel-button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUser;
