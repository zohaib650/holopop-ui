import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import download from "../../assets/icons/download-solid.svg";
import downloadbottom from "../../assets/icons/downloadbottom.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../qrCode/Qr.scss";

ModuleRegistry.registerModules([AllCommunityModule]);

function QrCode() {
  const [rowData, setRowData] = useState([
    { ID: 11125146, URL: "www.google.com", Status: "Exported" },
    { ID: 11125147, URL: "www.bing.com", Status: "Non Exported" },
    { ID: 11125148, URL: "www.yahoo.com", Status: "Exported" },
    { ID: 11125149, URL: "www.reddit.com", Status: "Non Exported" },
    { ID: 11125150, URL: "www.stackoverflow.com", Status: "Exported" },
    { ID: 11125151, URL: "www.github.com", Status: "Non Exported" },
    { ID: 11125152, URL: "www.medium.com", Status: "Exported" },
    { ID: 11125153, URL: "www.quora.com", Status: "Non Exported" },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "ID" },
    { field: "URL" },
    {
      field: "Status",
      cellRenderer: ({ data }) => {
        return (
          <div>
            <Button className={data.Status === "Exported" ? "Exported" : "Non-Exported"}>{data.Status}</Button>
          </div>
        );
      },
    },
    {
      field: "Action",
      cellRenderer: () => {
        return (
          <div>
            <img src={pencil} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={trash} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={downloadbottom} style={{ width: "20px", cursor: "pointer" }} />
          </div>
        );
      },
    },
  ]);

  return (
    <Row className="full-height">
      <Col md={12}>
        <Row className="mt-4 mb-4">
          <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
            <p className="m-0 fw-bold">QR Codes</p>
            <Form.Control type="text" placeholder="Search" className="search w-75" />
          </Col>
          <Col xs="auto" className="head-right d-flex justify-content-between align-items-center">
            <Button type="button" id="dropdown-pdf-button">
              Export in Bulk <img src={download} className="download-img" />
            </Button>
            <div>
              <DropdownButton id="dropdown-item-button" title="Not Exported">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton id="dropdown-item-button" title="Generate QR">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>

            <Button id="dropdown-create-button" type="button">
              + Generate QR
            </Button>
          </Col>
        </Row>
        <div style={{ height: 700 }} className="ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </Col>
    </Row>
  );
}

export default QrCode;
