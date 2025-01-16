import React from "react";
import Modal from "react-bootstrap/Modal";
import "./VideoGallery.scss";
function ViewVideo({ showModal, closeShowVideo, selectedRow }) {
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
          <video className="embed-responsive-item video-view-preview" controls>
            <source src={selectedRow?.viewTask} type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ViewVideo;
