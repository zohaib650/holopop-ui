import React from "react";
import { Tab, Tabs, Col, Row } from "react-bootstrap";
import VideoGallery from "./videoGallery/VideoGallery";
import AudioGallery from "./audioGallery/AudioGallery";
import "../browseGallery/BrowseGallery.scss";

function BrowseGallery() {
  return (
    <Col md={12} className="table-container">
      <Tabs defaultActiveKey="video" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="video" title="Video">
          <VideoGallery />
        </Tab>
        <Tab eventKey="audio" title="Audio">
          <AudioGallery />
        </Tab>
      </Tabs>
    </Col>
  );
}

export default BrowseGallery;
