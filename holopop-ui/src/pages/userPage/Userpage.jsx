import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Container, Row, Col, Table, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import statusON from "../../assets/icons/toggle-on.svg";
import statusOff from "../../assets/icons/toggle-off.svg";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import download from "../../assets/icons/download-solid.svg";
import "../userPage/UserPage.scss";
function Userpage() {
  const [rowData, setRowData] = useState([
    { Name: "John", Username: "John0057", Email: "www.google.com", Platform: "Android", Phone: "(+1)2250-363-148", DateOfBirth: "12/03/1995", Status: "Exported", Action: "Exported" },
    { Name: "Kathrine", Username: "Kati2233", Email: "www.bing.com", Platform: "iOS", Phone: "(+1)2250-363-148", DateOfBirth: "08/03/1992", Status: "Exported", Action: "Exported" },
    { Name: "John", Username: "John0057", Email: "www.yahoo.com", Platform: "Android", Phone: "(+1)2250-363-148", DateOfBirth: "12/03/1995", Status: "Exported", Action: "Exported" },
    { Name: "Kathrine", Username: "Kati2233", Email: "www.reddit.com", Platform: "iOS", Phone: "(+1)2250-363-148", DateOfBirth: "08/03/1992", Status: "Exported", Action: "Exported" },
    { Name: "John", Username: "John0057", Email: "www.stackoverflow.com", Platform: "Android", Phone: "(+1)2250-363-148", DateOfBirth: "12/03/1995", Status: "Exported", Action: "Exported" },
    { Name: "Kathrine", Username: "Kati2233", Email: "www.github.com", Platform: "iOS", Phone: "(+1)2250-363-148", DateOfBirth: "08/03/1992", Status: "Exported", Action: "Exported" },
    { Name: "John", Username: "John0057", Email: "www.medium.com", Platform: "Android", Phone: "(+1)2250-363-148", DateOfBirth: "12/03/1995", Status: "Exported", Action: "Exported" },
    { Name: "Kathrine", Username: "Kati2233", Email: "www.quora.com", Platform: "iOS", Phone: "(+1)2250-363-148", DateOfBirth: "08/03/1992", Status: "Exported", Action: "Exported" },
  ]);
  const [colDefs, setColDefs] = useState([
    { field: "Name", resize: true },
    { field: "Username" },
    { field: "Email" },
    { field: "Platform" },
    { field: "Phone" },
    { field: "DateOfBirth" },
    { field: "Status" },
    {
      field: "Action",
      cellRenderer: () => {
        return (
          <div>
            <img src={pencil} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={trash} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={download} style={{ width: "20px", cursor: "pointer" }} />
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
                <p className="m-0 fw-bold">Users</p>
                <Form.Control type="text" placeholder="Search" className="search w-75 " />
              </Col>
              <Col xs="auto" className="head-right d-flex justify-content-between  align-items-center ">
                <Button type="submit" id="dropdown-pdf-button">
                  Export to CSV <img src={download} className="download-img" />
                </Button>
                <div>
                  <DropdownButton id="dropdown-item-button" title="Android">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div>
                  <DropdownButton id="dropdown-item-button" title="Active">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </div>

                <Button id="dropdown-create-button" type="submit">
                  + Create User
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

export default Userpage;
