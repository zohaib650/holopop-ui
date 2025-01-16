import React, { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import upload from "../../assets/icons/UploadSimple.svg";
import "./GiftCard.scss";

const UpdateGiftCard = ({ showModal, closeModal, rowData, setRowData, selectedRow }) => {
  const [formData, setFormData] = useState({
    Brand: "",
    Image: "", // Default image field is empty
  });

  const AudioRef = useRef(null);

  // Update formData when selectedRow changes
  useEffect(() => {
    if (selectedRow) {
      setFormData({
        Brand: selectedRow.Brand,
        Image: selectedRow.Image || "", // Use existing Image URL if available
      });
    }
  }, [selectedRow]);

  const handleSubmit = () => {
    if (!formData.Brand || !formData.Image) {
      alert("Please fill in both fields: Brand and Image.");
      return;
    }

    const updatedRowData = rowData.map((row) => (row.id === selectedRow.id ? { ...row, ...formData } : row));
    setRowData(updatedRowData);
    closeModal();
  };

  const removeImage = () => {
    setFormData({ ...formData, Image: "" }); // Reset image field to empty
  };

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Update Gift Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-start mb-3">
            <Form.Group className="mb-0 w-100" controlId="formBrand">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" value={formData.Brand} placeholder="Enter Brand" onChange={(e) => setFormData({ ...formData, Brand: e.target.value })} required />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-start mb-3">
            <Form.Group className="mb-0 w-50" controlId="formImage">
              <Form.Label>Upload Image: Important guidelines: 1500x938 pixels. Supported format: .jpg, .jpeg, or .png</Form.Label>
              <Button
                onClick={() => {
                  if (AudioRef.current) {
                    AudioRef.current.click();
                  }
                }}
                className="upload-butn my-2"
              >
                <img src={upload} className="me-2" alt="Upload Icon" />
                Upload Image
              </Button>
              <Form.Control
                type="file"
                ref={AudioRef}
                className="d-none"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setFormData({ ...formData, Image: imageUrl });
                  }
                }}
                accept="image/jpeg, image/png, image/gif"
                required
              />
            </Form.Group>
          </div>

          {/* Image Preview with Remove Button */}
          {formData.Image && (
            <div className="image-preview">
              <img src={formData.Image} alt="Preview" className="preview-update-img" />
              <button type="button" className="remove-gift-update-image" onClick={removeImage}>
                X
              </button>
            </div>
          )}

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

export default UpdateGiftCard;
