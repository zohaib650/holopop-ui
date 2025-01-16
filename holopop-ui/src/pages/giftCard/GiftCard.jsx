import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil-square.svg";
import "ag-grid-community/styles/ag-grid.css";
import giftCardImg1 from "../../assets/images/GiftCard-Img1.png";
import giftCardImg2 from "../../assets/images/GiftCard-Img2.png";
import giftCardImg3 from "../../assets/images/GiftCard-Img3.png";
import giftCardImg4 from "../../assets/images/GiftCard-Img4.png";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../giftCard/GiftCard.scss";
import exportDownload from "../../assets/icons/download.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import CreateGiftCard from "./CreateGiftCard";
import UpdateGiftCard from "./UpdateGiftCard";
import "./GiftCard.scss";
ModuleRegistry.registerModules([AllCommunityModule]);

function GiftCard() {
  const initialRowData = [
    {
      id: 1,
      Image: giftCardImg1,
      Brand: "Burlington",
      Status: true,
    },
    {
      id: 2,
      Image: giftCardImg2,
      Brand: "California Pizza",
      Status: false,
    },
    {
      id: 3,
      Image: giftCardImg3,
      Brand: "Workshop",
      Status: true,
    },
    {
      id: 4,
      Image: giftCardImg4,
      Brand: "Workshop",
      Status: true,
    },
  ];

  const [rowData, setRowData] = useState(initialRowData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [lgShowCreate, setLgShowCreate] = useState(false);
  const [lgShowEdit, setLgShowEdit] = useState(false);

  const deleteTask = (data) => {
    setRowData((prevData) => prevData.filter((c) => Number(c.id) !== Number(data.id)));
    toast.error("Gift Card deleted successfully!");
  };

  const editTask = (data) => {
    setSelectedRow(data);
    setLgShowEdit(true);
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");
    XLSX.writeFile(workbook, "GiftCardsData.xlsx");
  };

  const [colDefs, setColDefs] = useState([
    {
      field: "Image",
      flex: 2,
      cellRenderer: ({ value }) => {
        return (
          <div>
            <img src={value} className="image-style" />
          </div>
        );
      },
    },
    { field: "Brand", flex: 2 },
    {
      field: "Status",
      flex: 2,
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
      cellRenderer: ({ data }) => {
        return (
          <div>
            <img onClick={() => editTask(data)} src={pencil} className="action-icon" />
            <img onClick={() => deleteTask(data)} src={trash} className="action-icon" />
          </div>
        );
      },
    },
  ]);

  return (
    <Col md={12} className="table-container">
      <Row className="mt-4 mb-4">
        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
          <p className="m-0 fw-bold">Gift Cards</p>
          <Form.Control type="text" placeholder="Search" className="search w-75" />
        </Col>
        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
          <Button type="button" id="dropdown-pdf-button" onClick={exportToCSV}>
            <img src={exportDownload} className="download-img" /> Export to CSV
          </Button>
          <div>
            <DropdownButton id="dropdown-item-button" title="Active">
              <Dropdown.Item as="button">On</Dropdown.Item>
              <Dropdown.Item as="button">Off</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <DropdownButton id="dropdown-item-button" title="Select Brand">
              <Dropdown.Item as="button">Burlington</Dropdown.Item>
              <Dropdown.Item as="button">California Pizza</Dropdown.Item>
              <Dropdown.Item as="button">Workshop</Dropdown.Item>
            </DropdownButton>
          </div>

          <Button id="dropdown-create-button" type="submit" onClick={() => setLgShowCreate(true)}>
            + Gift Card
          </Button>
        </Col>
      </Row>
      <div className="grid-container ag-theme-alpine">
        <AgGridReact pagination={true} paginationPageSize={8} paginationPageSizeSelector={[8, 20, 50]} rowHeight={45} headerHeight={60} rowData={rowData} columnDefs={colDefs} />
      </div>

      <CreateGiftCard rowData={rowData} setRowData={setRowData} showModal={lgShowCreate} closeModal={() => setLgShowCreate(false)} />
      <UpdateGiftCard rowData={rowData} setRowData={setRowData} showModal={lgShowEdit} closeModal={() => setLgShowEdit(false)} selectedRow={selectedRow} />
    </Col>
  );
}

export default GiftCard;
