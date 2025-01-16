import React from "react";
import Modal from "react-bootstrap/Modal";
import "./AudioGallery.scss";
function ViewAudio({ showModal, closeShowVideo, selectedRow }) {
  if (!selectedRow) {
    return null;
  }

  return (
    <>
      <Modal centered size="md" show={showModal} onHide={() => closeShowVideo()} aria-labelledby="example-modal-sizes-title-md">
        <Modal.Header closeButton>
          <h6>File Name: {selectedRow.FileName}</h6>
        </Modal.Header>
        <Modal.Body>
          <audio className="embed-responsive-item audio-preview" controls>
            <source src={selectedRow?.viewTask} type="audio/mpeg" />
          </audio>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ViewAudio;
