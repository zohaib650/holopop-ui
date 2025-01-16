import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import blankImg from "../../../assets/images/blank.jpg";
import blankVideo from "../../../assets/images/blankVideo.jpg";
import upload from "../../../assets/icons/UploadSimple.svg";
import * as Yup from "yup";
import "./VideoGallery.scss";

const AddVideo = ({ showModal, closeModal, rowData, setRowData }) => {
  const validationSchema = Yup.object().shape({
    Occasion: Yup.string().required("Occasion is required"),
    Thumbnail: Yup.mixed().required("Image file is required"),
    FileName: Yup.mixed().required("Video file is required"),
  });

  const imgRef = useRef(null);
  const videoRef = useRef(null);

  return (
    <Modal size="xl" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            Occasion: "",
            Thumbnail: "",
            FileName: "",
            viewTask: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const obj = {
              ...values,
              id: rowData.length + 1,
            };
            setRowData([...rowData, obj]);
            closeModal();
            resetForm();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="d-flex justify-content-start mb-3">
                <div className="occasion-field">
                  <label htmlFor="Occasion">Occasion</label>
                  <Field name="Occasion" type="text" placeholder="Enter Occasion" className="form-control" />
                  <ErrorMessage name="Occasion" component="div" className="text-danger" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex justify-content-start position-relative w-50">
                  {values.Thumbnail && (
                    <span className="remove-Thumbnail-image" onClick={() => setFieldValue("Thumbnail", "")}>
                      ×
                    </span>
                  )}
                  <img src={values.Thumbnail || blankImg} alt="Preview" className="thumbnail-upload-preview" />
                  <div>
                    <label className="mt-2">Important guidelines: 1500x938 pixels. Supported format: .jpg, .jpeg, or .png</label>
                    <Button
                      onClick={() => {
                        if (imgRef.current) {
                          imgRef.current.click();
                        }
                      }}
                      className="upload-butn my-2"
                    >
                      <img src={upload} className="me-2" alt="upload-icon"></img>
                      Upload Image
                    </Button>
                    <input
                      ref={imgRef}
                      type="file"
                      name="Thumbnail"
                      className="form-control mt-3 d-none"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setFieldValue("Thumbnail", imageUrl);
                        }
                      }}
                      accept="image/jpeg, image/png, image/gif"
                    />
                    <ErrorMessage name="Thumbnail" component="div" className="text-danger" />
                  </div>
                </div>

                <div className="d-flex justify-content-start position-relative w-50">
                  {values.FileName && (
                    <span className="remove-selected-video" onClick={() => setFieldValue("FileName", "")}>
                      ×
                    </span>
                  )}
                  <div>
                    {values.FileName ? (
                      <video className="media-preview" width="180" height="130" controls>
                        <source src={values.viewTask} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={blankVideo} alt="Video Preview" className="media-preview" />
                    )}
                  </div>
                  <div>
                    <label htmlFor="FileName">Important guidelines: 1080x1920 pixels. Supported format: .mp4, .m4v, or .mov</label>
                    <Button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.click();
                        }
                      }}
                      className="upload-butn my-2"
                    >
                      <img src={upload} className="me-2" alt="upload-icon"></img>
                      Upload Video
                    </Button>
                    <input
                      ref={videoRef}
                      type="file"
                      name="FileName"
                      className="form-control mt-3 d-none"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const videoUrl = URL.createObjectURL(file);
                          const videoName = file.name;
                          setFieldValue("FileName", videoName);
                          setFieldValue("viewTask", videoUrl);
                        }
                      }}
                      accept="video/mp4, video/webm, video/ogg"
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

export default AddVideo;
