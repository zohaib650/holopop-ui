import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import upload from "../../../assets/icons/UploadSimple.svg";
import "./AudioGallery.scss";
import blankAudio from "../../../assets/images/BlankAudio.jpg";

const AddAudio = ({ showModal, closeModal, rowData, setRowData }) => {
  const validationSchema = Yup.object().shape({
    Occasion: Yup.string().required("Occasion is required"),
    Title: Yup.string().required("Title is required"),
    FileName: Yup.mixed().required("Audio file is required"),
  });
  const AudioRef = useRef(null);

  return (
    <Modal size="xl" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add Audio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            Occasion: "",
            Title: "",
            FileName: "",
            viewTask: "",
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
              <div className="d-flex justify-content-between mb-3">
                <div className="input-field">
                  <label htmlFor="Occasion">Occasion</label>
                  <Field name="Occasion" type="text" placeholder="Enter Occasion" className="form-control" />
                  <ErrorMessage name="Occasion" component="div" className="text-danger" />
                </div>
                <div className="input-field">
                  <label htmlFor="Title">Add Title</label>
                  <Field name="Title" type="text" placeholder="Enter Title" className="form-control" />
                  <ErrorMessage name="Title" component="div" className="text-danger" />
                </div>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex justify-content-between position-relative mb-3 w-50">
                  {values.FileName && (
                    <span
                      className="remove-audio-file"
                      onClick={() => {
                        setFieldValue("FileName", "");
                        setFieldValue("viewTask", "");
                      }}
                    >
                      ×
                    </span>
                  )}

                  {!values.FileName ? (
                    <img src={blankAudio} alt="Audio Preview" className="audio-preview" />
                  ) : (
                    <div>
                      <audio controls>
                        <source src={values.viewTask} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}

                  <div>
                    <label className="mt-2 ms-4 ">Important guidelines: Supported formats: .mp3, .wav, .ogg</label>
                    <Button
                      onClick={() => {
                        if (AudioRef.current) {
                          AudioRef.current.click();
                        }
                      }}
                      className="upload-butn my-2 ms-4"
                    >
                      <img src={upload} className="me-2" alt="upload-icon"></img>
                      Upload Audio
                    </Button>
                    <input
                      type="file"
                      name="FileName"
                      ref={AudioRef}
                      className="form-control mt-3 ms-4 d-none "
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const audioUrl = URL.createObjectURL(file);
                          const audioName = file.name;
                          setFieldValue("viewTask", audioUrl);
                          setFieldValue("FileName", audioName);
                        }
                      }}
                      accept="audio/mpeg, audio/wav, audio/ogg"
                    />
                    <ErrorMessage name="FileName" component="div" className="text-danger" />
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

export default AddAudio;
