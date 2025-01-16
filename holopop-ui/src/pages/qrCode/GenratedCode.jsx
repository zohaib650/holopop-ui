import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import qrCode from "../../assets/images/qr.png";
function GeneratedCode({ showModal, closeGeneratedCode }) {
  return (
    <>
      <Modal
        centered
        size="sm"
        show={showModal}
        onHide={() => {
          closeGeneratedCode();
        }}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center pt-4">
            <img height="180px" width="180px" src={qrCode} alt="QR Code" />
            <p className="pt-3">11131313</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GeneratedCode;
