import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import download from "../../assets/icons/download-solid.svg";
import on from "../../assets/icons/on.svg";
import exportDownload from "../../assets/icons/download.svg";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import * as XLSX from "xlsx";
import "../user/User.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function User() {
  const initialRowData = [
    {
      id: 1,
      Name: "John",
      Username: "John0057",
      Email: "Johnxyz365@gmail.com",
      Platform: "Android",
      Phone: "(+1)2250-363-148",
      DateOfBirth: "12-03-1995",
      Status: true,
    },
    {
      id: 2,
      Name: "Kathrine",
      Username: "Kati2233",
      Email: "Kati5455@hotmail.com",
      Platform: "iOS",
      Phone: "(+1)2250-363-148",
      DateOfBirth: "08-03-1992",
      Status: false,
    },
    {
      id: 3,
      Name: "John",
      Username: "John0057",
      Email: "Johnxyz365@gmail.com",
      Platform: "Android",
      Phone: "(+1)2250- 363-148",
      DateOfBirth: "12-03-1995",
      Status: true,
    },
    {
      id: 4,
      Name: "Kathrine",
      Username: "Kati2233",
      Email: "Kati5455@hotmail.com",
      Platform: "iOS",
      Phone: "(+1)2250-363-148",
      DateOfBirth: "08-03-1992",
      Status: false,
    },
    {
      id: 5,
      Name: "John",
      Username: "John0057",
      Email: "Johnxyz365@gmail.com",
      Platform: "Android",
      Phone: "(+1)2250-363-148",
      DateOfBirth: "12-03-1995",
      Status: true,
    },
  ];

  const [rowData, setRowData] = useState(initialRowData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [lgShow, setLgShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const deleteTask = (data) => {
    setRowData((prevData) => prevData.filter((c) => Number(c.id) !== Number(data.id)));
    toast.error("User deleted successfully!");
  };

  const editTask = (data) => {
    setSelectedRow(data);
    setEditShow(true);
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");
    XLSX.writeFile(workbook, "UsersData.xlsx");
  };

  const downloadRow = (data) => {
    const worksheet = XLSX.utils.json_to_sheet([data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RowData");
    XLSX.writeFile(workbook, data.Name + "_Data.xlsx");
  };

  const [colDefs, setColDefs] = useState([
    { field: "Name", flex: 1.5 },
    { field: "Username", flex: 1.5 },
    { field: "Email", flex: 1.5 },
    { field: "Platform", flex: 1.5 },
    { field: "Phone", flex: 1.5 },
    { field: "DateOfBirth", flex: 1.5 },
    {
      field: "Status",
      flex: 1,
      cellRenderer: () => {
        return (
          <div>
            <Form.Check className="check" type="switch" id="custom-switch" />
          </div>
        );
      },
    },
    {
      field: "Action",
      flex: 1,
      cellRenderer: ({ data }) => {
        return (
          <div>
            <img src={pencil} onClick={() => editTask(data)} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={trash} onClick={() => deleteTask(data)} style={{ width: "20px", cursor: "pointer", marginRight: "10px" }} />
            <img src={download} onClick={() => downloadRow(data)} style={{ width: "20px", cursor: "pointer" }} />
          </div>
        );
      },
    },
  ]);

  return (
    <Col md={12} className="table-container">
      <Row className="mt-4 mb-4">
        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
          <p className="m-0 fw-bold">Users</p>
          <Form.Control type="text" placeholder="Search" className="search w-75 " />
        </Col>
        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
          <Button type="button" id="dropdown-pdf-button" onClick={exportToCSV}>
            <img src={exportDownload} className="download-img" /> Export to CSV
          </Button>

          <div>
            <DropdownButton id="dropdown-item-button" title="Platform">
              <Dropdown.Item as="button">Android</Dropdown.Item>
              <Dropdown.Item as="button">iOS</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <DropdownButton id="dropdown-item-button" title="Active">
              <Dropdown.Item as="button">ON</Dropdown.Item>
              <Dropdown.Item as="button">OFF</Dropdown.Item>
            </DropdownButton>
          </div>
          <Button
            id="dropdown-create-button"
            type="button"
            onClick={() => {
              setLgShow(true);
            }}
          >
            + Create User
          </Button>
        </Col>
      </Row>

      <div style={{ height: 400 }} className="ag-theme-alpine">
        <AgGridReact rowHeight={50} headerHeight={60} paginationPageSize={8} paginationPageSizeSelector={[8, 20, 50]} rowData={rowData} columnDefs={colDefs} />
      </div>

      {lgShow && <CreateUser rowData={rowData} setRowData={setRowData} showModal={lgShow} closeModal={() => setLgShow(false)} />}

      {editShow && <UpdateUser rowData={rowData} setRowData={setRowData} selectedRow={selectedRow} showModal={editShow} closeModal={() => setEditShow(false)} />}
    </Col>
  );
}

export default User;
