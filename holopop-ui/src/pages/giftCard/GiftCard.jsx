import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import eyeFill from "../../assets/icons/eye-fill.svg";
import download from "../../assets/icons/download-solid.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../giftCard/GiftCard.scss";

ModuleRegistry.registerModules([AllCommunityModule]);

function GiftCard() {
  const [rowData, setRowData] = useState([
    { Image: 11125146, Brand: "Burlington", Status: "ON" },
    { Image: 11125147, Brand: "California Pizza", Status: "OFF" },
    { Image: 11125148, Brand: "Workshop", Status: "ON" },
    { Image: 11125148, Brand: "Buffalo Wild", Status: "OFF" },
    { Image: 11125148, Brand: "Amazon", Status: "ON" },
    { Image: 11125148, Brand: "Best Buy", Status: "OFF" },
    { Image: 11125148, Brand: "Guitar Center", Status: "ON" },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "Image" },
    { field: "Brand" },
    { field: "Status" },
    {
      field: "Action",
      cellRenderer: () => {
        return (
          <div>
            <img src={pencil} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={trash} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
          </div>
        );
      },
    },
  ]);

  return (
    <div>
      <Container>
        <Row className="full-height">
          <Col md={12}>
            <Row className="mt-4 mb-4">
              <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
                <p className="m-0 fw-bold">QR Codes</p>
                <Form.Control type="text" placeholder="Search" className="search w-75" />
              </Col>
              <Col xs="auto" className="head-right d-flex justify-content-between align-items-center">
                <Button type="button" id="dropdown-pdf-button">
                  <img src={download} className="download-img" /> Export to CSV
                </Button>
                <div>
                  <DropdownButton id="dropdown-item-button" title="Active">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div>
                  <DropdownButton id="dropdown-item-button" title="Select Brand">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </div>

                <Button id="dropdown-create-button" type="button">
                  + Add Gift Card
                </Button>
              </Col>
            </Row>
            <div style={{ height: 700 }} className="ag-theme-alpine">
              <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GiftCard;
