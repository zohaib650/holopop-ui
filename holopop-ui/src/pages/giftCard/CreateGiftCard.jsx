import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import upload from "../../assets/icons/UploadSimple.svg";
import blankImg from "../../assets/images/blank.jpg";
import * as Yup from "yup";
import "./GiftCard.scss";

const CreateGiftCard = ({ showModal, closeModal, rowData, setRowData }) => {
  const validationSchema = Yup.object().shape({
    Brand: Yup.string().required("Brand is required"),
    Image: Yup.mixed().required("Image is required"),
  });

  const imgRef = useRef(null);

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Create Gift Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            Brand: "",
            Image: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const obj = {
              ...values,
              id: rowData.length + 1,
            };
            const copyData = [...rowData];
            setRowData([...copyData, obj]);
            closeModal();
            resetForm();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="d-flex justify-content-start mb-3">
                <div className="brand-field">
                  <label htmlFor="Brand">Brand</label>
                  <Field name="Brand" type="text" placeholder="Enter Brand" className="form-control" />
                  <ErrorMessage name="Brand" component="div" className="text-danger" />
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-start mb-3 w-75 position-relative">
                  <img src={values.Image || blankImg} alt="Preview" className="image-preview" />
                  {values.Image && (
                    <span className="remove-card-image" onClick={() => setFieldValue("Image", "")}>
                      ×
                    </span>
                  )}
                  <div>
                    <label className="mt-4">Important guidelines: 1500x938 pixels. Supported format: .jpg, .jpeg, or .png</label>
                    <Button
                      onClick={() => {
                        if (imgRef.current) {
                          imgRef.current.click();
                        }
                      }}
                      className="upload-butn my-3"
                    >
                      <img src={upload} className="me-2" alt="Upload icon"></img>
                      Upload Image
                    </Button>
                    <input
                      type="file"
                      name="Image"
                      ref={imgRef}
                      className="form-control mt-4 d-none"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setFieldValue("Image", imageUrl);
                        }
                      }}
                      accept="image/jpeg, image/png, image/gif"
                    />
                    <ErrorMessage name="Image" component="div" className="text-danger" />
                  </div>
                </div>
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
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreateGiftCard;
