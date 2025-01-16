import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import upload from "../../../assets/icons/UploadSimple.svg";
import "./AudioGallery.scss";

const UpdateAudio = ({ showModal, closeModal, rowData, setRowData, selectedRow }) => {
  const [formData, setFormData] = useState({
    Occasion: "",
    Title: "",
    FileName: "",
    viewTask: "",
  });
  const AudioRef = useRef(null);

  useEffect(() => {
    if (selectedRow) {
      setFormData({
        Occasion: selectedRow.Occasion,
        Title: selectedRow.Title,
        FileName: selectedRow.FileName,
        viewTask: selectedRow.viewTask,
      });
    }
  }, [selectedRow]);

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const AudioUrl = URL.createObjectURL(file);
      const AudioName = file.name;
      setFormData({ ...formData, viewTask: AudioUrl, FileName: AudioName });
    }
  };

  const handleSubmit = () => {
    const updatedRowData = rowData.map((row) => (row.id === selectedRow.id ? { ...row, ...formData } : row));
    setRowData(updatedRowData);
    closeModal();
  };

  const handleRemoveAudio = () => {
    setFormData({ ...formData, viewTask: "", FileName: "" });
  };

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Update Audio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group className="mb-0" className="input-field">
              <Form.Label>Occasion</Form.Label>
              <Form.Control type="text" value={formData.Occasion} placeholder="Enter Occasion" onChange={(e) => setFormData({ ...formData, Occasion: e.target.value })} required />
            </Form.Group>
            <Form.Group className="mb-0" className="input-field">
              <Form.Label>Update Title</Form.Label>
              <Form.Control type="text" value={formData.Title} placeholder="Enter Occasion" onChange={(e) => setFormData({ ...formData, Title: e.target.value })} required />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group className="mb-0" controlId="formAudio" className="input-field">
              <Form.Label>Update Audio : Important guidelines: Supported formats: .mp3, .wav, .ogg</Form.Label>
              <Button
                onClick={() => {
                  if (AudioRef.current) {
                    AudioRef.current.click();
                  }
                }}
                className="upload-butn my-2"
              >
                <img src={upload} className="me-2"></img>
                Upload Audio
              </Button>
              <Form.Control ref={AudioRef} className="d-none" type="file" onChange={handleAudioChange} required accept="audio/mpeg, audio/wav, audio/ogg" />
            </Form.Group>
            {formData.viewTask && (
              <div className="remove-update-audio" onClick={handleRemoveAudio}>
                x
              </div>
            )}
            {formData.viewTask && (
              <audio controls>
                <source src={formData.viewTask} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
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

export default UpdateAudio;
