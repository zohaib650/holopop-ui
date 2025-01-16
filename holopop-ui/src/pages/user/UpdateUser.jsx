import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUser = ({ showModal, closeModal, rowData, setRowData, selectedRow }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Username: "",
    Phone: "",
    DateOfBirth: "",
    Email: "",
  });

  useEffect(() => {
    if (selectedRow) {
      setFormData({
        Name: selectedRow.Name,
        Username: selectedRow.Username,
        Phone: selectedRow.Phone,
        DateOfBirth: selectedRow.DateOfBirth,
        Email: selectedRow.Email,
      });
    }
  }, [selectedRow]);

  const handleSubmit = () => {
    const updatedRowData = rowData.map((row) => (row.id === selectedRow.id ? { ...row, ...formData } : row));
    setRowData(updatedRowData);
    toast.success("User updated successfully!");
    closeModal();
  };

  return (
    <Modal size="lg" show={showModal} onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group controlId="formName" style={{ flex: 1, marginRight: "10px" }}>
              <Form.Label>Name</Form.Label>
              <Form.Control value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formUsername" style={{ flex: 1 }}>
              <Form.Label>Username</Form.Label>
              <Form.Control value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} type="text" placeholder="Enter username" />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group controlId="formPhone" style={{ flex: 1, marginRight: "10px" }}>
              <Form.Label>Phone</Form.Label>
              <Form.Control value={formData.Phone} onChange={(e) => setFormData({ ...formData, Phone: e.target.value })} type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth" style={{ flex: 1 }}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control value={formData.DateOfBirth} onChange={(e) => setFormData({ ...formData, DateOfBirth: e.target.value })} type="date" />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <Form.Group controlId="formEmail" style={{ width: "50%" }}>
              <Form.Label>Email</Form.Label>
              <Form.Control value={formData.Email} onChange={(e) => setFormData({ ...formData, Email: e.target.value })} type="email" placeholder="Enter email" />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="secondary"
              onClick={closeModal}
              style={{
                backgroundColor: "#D8D9DA",
                color: "black",
                border: "none",
                padding: "10px 20px",
                width: "49%",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#38C1F0",
                color: "#ffff",
                border: "none",
                padding: "10px 20px",
                width: "49%",
              }}
            >
              Update
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateUser;
