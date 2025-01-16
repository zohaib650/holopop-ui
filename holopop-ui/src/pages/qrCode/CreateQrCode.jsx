import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "../qrCode/Qr.scss";

// Validation schema with Yup
const validationSchema = Yup.object({
  numberOfCodes: Yup.number().required("Number of codes is required").positive("Must be a positive number"),
});

const CreateQrCode = ({ showModal, closeModal, setShowGeneratedCode }) => {
  const formik = useFormik({
    initialValues: {
      numberOfCodes: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("QR Code Generated Successfully!");
      setShowGeneratedCode(true);
      closeModal();
    },
  });

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Create QR Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-0 form-group-flex" controlId="formNumberOfCodes">
            <Form.Label>Number of QR Codes to Generate</Form.Label>
            <Form.Control
              type="number"
              name="numberOfCodes"
              placeholder="5000"
              value={formik.values.numberOfCodes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.numberOfCodes && formik.errors.numberOfCodes}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.numberOfCodes}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between mb-3 mt-3">
            <Form.Group className="mb-0 form-group-flex" controlId="formPhone">
              <Form.Label>Serial Number From</Form.Label>
              <Form.Control type="number" value={122536} readOnly />
            </Form.Group>
            <Form.Group className="mb-0 form-group-flex" controlId="formSerialNumberTo">
              <Form.Label>Serial Number To</Form.Label>
              <Form.Control type="text" value="122536" readOnly />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="secondary" onClick={closeModal} className="cancel-button">
              Cancel
            </Button>
            <Button type="submit" className="submit-button">
              Generate
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateQrCode;
