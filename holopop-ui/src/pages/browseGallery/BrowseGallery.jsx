import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import trash from "../../assets/icons/trash.svg";
import eyeFill from "../../assets/icons/eye-fill.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../browseGallery/BrowseGallery.scss";

ModuleRegistry.registerModules([AllCommunityModule]);

function BrowseGallery() {
  const [videoRowData, setVideoRowData] = useState([
    { Thumbnail: 11125146, Occasion: "Birthday", FileName: "Video1.mp4", Status: "ON" },
    { Thumbnail: 11125147, Occasion: "California Pizza", FileName: "Video2.mp4", Status: "OFF" },
    { Thumbnail: 11125148, Occasion: "Birthday", FileName: "Video3.mp4", Status: "ON" },
    { Thumbnail: 11125149, Occasion: "Buffalo Wild", FileName: "Video4.mp4", Status: "OFF" },
    { Thumbnail: 11125149, Occasion: "Buffalo Wild", FileName: "Video4.mp4", Status: "OFF" },
    { Thumbnail: 11125149, Occasion: "Buffalo Wild", FileName: "Video4.mp4", Status: "OFF" },

    { Thumbnail: 11125149, Occasion: "Buffalo Wild", FileName: "Video4.mp4", Status: "OFF" },
  ]);
  const [audioRowData, setAudioRowData] = useState([
    { Title: "As Time Goes By", Occasion: "Birthday", FileName: "Audio1.mp3", Status: "ON" },
    { Title: "Summertime Blues", Occasion: "California Pizza", FileName: "Audio2.mp3", Status: "OFF" },
    { Title: "Bohemian Rhapsody", Occasion: "Buffalo Wild", FileName: "Audio3.mp3", Status: "ON" },
    { Title: "Sweet Child O' Mine", Occasion: "Best Buy", FileName: "Audio4.mp3", Status: "OFF" },
    { Title: "Sweet Child O' Mine", Occasion: "Best Buy", FileName: "Audio4.mp3", Status: "OFF" },
    { Title: "Sweet Child O' Mine", Occasion: "Best Buy", FileName: "Audio4.mp3", Status: "OFF" },
    { Title: "Summertime Blues", Occasion: "California Pizza", FileName: "Audio2.mp3", Status: "OFF" },
  ]);
  const colDefs = [
    { field: "FileName" },
    { field: "Occasion" },
    { field: "Status" },
    {
      field: "Action",
      cellRenderer: () => {
        return (
          <div>
            <img src={eyeFill} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={pencil} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={trash} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Container>
        <Row className="full-height">
          <Col md={12}>
            <Row>
              <Tabs defaultActiveKey="video" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="video" title="Video">
                  <div className="tab-content">
                    <Col md={12}>
                      <Row className="mt-4 mb-4">
                        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
                          <p className="m-0 fw-bold">Video Gallery</p>
                          <Form.Control type="text" placeholder="Search" className="search w-75" />
                        </Col>
                        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
                          <div>
                            <DropdownButton id="dropdown-item-button" title="Select Occasion">
                              <Dropdown.Item as="button">Action</Dropdown.Item>
                              <Dropdown.Item as="button">Another action</Dropdown.Item>
                              <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                          </div>
                          <Button id="dropdown-create-button" type="button">
                            + Add Video
                          </Button>
                        </Col>
                      </Row>
                      <div style={{ height: 700 }} className="ag-theme-alpine">
                        <AgGridReact rowData={videoRowData} columnDefs={colDefs} />
                      </div>
                    </Col>
                  </div>
                </Tab>
                <Tab eventKey="audio" title="Audio">
                  <div className="tab-content">
                    <Col md={12}>
                      <Row className="mt-4 mb-4">
                        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
                          <p className="m-0 fw-bold">Audio Gallery</p>
                          <Form.Control type="text" placeholder="Search" className="search w-75" />
                        </Col>
                        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
                          <div>
                            <DropdownButton id="dropdown-item-button" title="Select Occasion">
                              <Dropdown.Item as="button">Action</Dropdown.Item>
                              <Dropdown.Item as="button">Another action</Dropdown.Item>
                              <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                          </div>
                          <Button id="dropdown-create-button" type="button">
                            + Add Audio
                          </Button>
                        </Col>
                      </Row>
                      <div style={{ height: 700 }} className="ag-theme-alpine">
                        <AgGridReact rowData={audioRowData} columnDefs={colDefs} />
                      </div>
                    </Col>
                  </div>
                </Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BrowseGallery;
