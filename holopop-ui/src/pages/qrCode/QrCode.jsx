import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import exportDownload from "../../assets/icons/download.svg";
import downloadbottom from "../../assets/icons/downloadbottom.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../qrCode/Qr.scss";
import CreateQrCode from "./CreateQrCode";
import GeneratedCode from "./GenratedCode";
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
    { field: "ID", flex: 2 },
    { field: "URL", flex: 2 },
    { field: "Status", flex: 2 },
    {
      field: "Action",
      flex: 2,
      cellRenderer: () => {
        return (
          <div>
            <img src={pencil} className="icon" />
            <img src={trash} className="icon" />
            <img src={downloadbottom} className="icon" />
          </div>
        );
      },
    },
  ]);
  const [lgShow, setLgShow] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [showGeneratedCode, setShowGeneratedCode] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
  };

  return (
    <Col md={12} className="table-container">
      <Row className="mt-4 mb-4">
        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
          <p className="m-0 fw-bold">QR Codes</p>
          <Form.Control type="text" placeholder="Search" className="search w-75" />
        </Col>
        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
          <Button type="button" id="dropdown-pdf-button">
            <img src={exportDownload} className="download-img" /> Export in Bulk
          </Button>
          <div>
            <DropdownButton id="dropdown-item-button" title="Exported">
              <Dropdown.Item as="button">Export</Dropdown.Item>
              <Dropdown.Item as="button">Not Exported</Dropdown.Item>
            </DropdownButton>
          </div>
          <Button id="dropdown-create-button" type="submit" onClick={() => setLgShow(true)}>
            + Generate QR
          </Button>
        </Col>
      </Row>
      <div className="ag-container">
        <AgGridReact rowHeight={45} headerHeight={60} pagination paginationPageSize={8} rowData={rowData} columnDefs={colDefs} />
      </div>
      {console.log({ showGeneratedCode }, "showGeneratedCode")}
      {lgShow && <CreateQrCode setShowGeneratedCode={setShowGeneratedCode} rowData={rowData} setRowData={setRowData} showModal={lgShow} closeModal={() => setLgShow(false)} />}
      {showGeneratedCode && <GeneratedCode showModal={showGeneratedCode} closeGeneratedCode={() => setShowGeneratedCode(false)} />}
    </Col>
  );
}

export default QrCode;
