import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import upload from "../../../assets/icons/UploadSimple.svg";
import "./VideoGallery.scss";

const UpdateVideo = ({ showModal, closeModal, rowData, setRowData, selectedRow }) => {
  const [formData, setFormData] = useState({
    Occasion: "",
    Thumbnail: "",
    FileName: "",
    viewTask: "",
  });

  useEffect(() => {
    if (selectedRow) {
      setFormData({
        Occasion: selectedRow.Occasion,
        Thumbnail: selectedRow.Thumbnail,
        FileName: selectedRow.FileName,
        viewTask: selectedRow.viewTask,
      });
    }
  }, [selectedRow]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, Thumbnail: imageUrl });
    }
  };

  const imgRef = useRef(null);
  const VideoRef = useRef(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      const videoName = file.name;
      setFormData({ ...formData, viewTask: videoUrl, FileName: videoName });
    }
  };

  const handleRemoveThumbnail = () => {
    setFormData({ ...formData, Thumbnail: "" });
  };

  const handleRemoveVideo = () => {
    setFormData({ ...formData, viewTask: "", FileName: "" });
  };

  const handleSubmit = () => {
    const updatedRowData = rowData.map((row) => (row.id === selectedRow.id ? { ...row, ...formData } : row));
    setRowData(updatedRowData);
    closeModal();
  };

  return (
    <Modal size="xl" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Update Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-start mb-3">
            <Form.Group className="mb-0 occasion-group" controlId="formOccasion">
              <Form.Label>Occasion</Form.Label>
              <Form.Control type="text" value={formData.Occasion} placeholder="Enter Occasion" onChange={(e) => setFormData({ ...formData, Occasion: e.target.value })} required />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <Form.Group className="d-flex justify-content-between align-items-center mb-0 image-group" controlId="formImage">
              <Form.Control ref={imgRef} className="d-none " type="file" onChange={handleImageChange} accept="image/jpeg, image/png, image/gif" />
              {formData.Thumbnail && (
                <div className="position-relative">
                  <img src={formData.Thumbnail} alt="Current Thumbnail" className="thumbnail-update-preview" />
                  <div className="remove-update-Thumbnail" onClick={handleRemoveThumbnail}>
                    x
                  </div>
                </div>
              )}
              <div className="d-flex flex-column ms-4">
                <Form.Label>Update Image : Important guidelines: 1500x938 pixels. Supported format: .jpg, .jpeg, or .png</Form.Label>
                <Button
                  onClick={() => {
                    if (imgRef.current) {
                      imgRef.current.click();
                    }
                  }}
                  className="upload-butn my-2 w-75"
                >
                  <img src={upload} className="me-2"></img>
                  Upload Thumbnail
                </Button>
              </div>
            </Form.Group>
            <Form.Group className=" d-flex justify-content-between align-items-center mb-0 video-group" controlId="formVideo">
              <Form.Control type="file" ref={VideoRef} className="d-none" onChange={handleVideoChange} accept="video/mp4, video/webm, video/ogg" />
              {formData.viewTask && (
                <div className="position-relative">
                  <video src={formData.viewTask} controls className="video-update-preview" />
                  <div className="remove-update-video" onClick={handleRemoveVideo}>
                    x
                  </div>
                </div>
              )}
              <div className="ms-4 d-flex flex-column">
                <Form.Label>Update Video : Important guidelines: 1080x1920 pixels. Supported format: .mp4, .m4v, or .mov</Form.Label>
                <Button
                  onClick={() => {
                    if (VideoRef.current) {
                      VideoRef.current.click();
                    }
                  }}
                  className="upload-butn my-2 w-75"
                >
                  <img src={upload} className="me-2"></img>
                  Upload Video
                </Button>
              </div>
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="secondary" onClick={closeModal} className="cancel-button">
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit} className="submit-button">
              Update
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateVideo;
