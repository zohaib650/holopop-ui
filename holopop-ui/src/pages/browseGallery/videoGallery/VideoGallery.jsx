import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Row, Col, Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import trash from "../../../assets/icons/trash.svg";
import pencil from "../../../assets/icons/pencil-square.svg";
import eyes from "../../../assets/icons/eyes.svg";
import { toast } from "react-toastify";
import videoGalleryImg1 from "../../../assets/images/videoGalleryImg1.png";
import videoGalleryImg2 from "../../../assets/images/videoGalleryImg2.png";
import videoGalleryImg3 from "../../../assets/images/videoGalleryImg3.png";
import AddVideo from "../videoGallery/AddVideo";
import UpdateVideo from "./UpdateVideo";
import ViewVideo from "./ViewVideo";
import "./VideoGallery.scss";

function VideoGallery() {
  const initialRowData = [
    {
      id: 1,
      Thumbnail: videoGalleryImg1,
      Occasion: "Birthday",
      FileName: "Video1.mp4",
      Status: true,
    },
    {
      id: 2,
      Thumbnail: videoGalleryImg2,
      Occasion: "Marriage",
      FileName: "Video2.mp4",
      Status: false,
    },
    {
      id: 3,
      Thumbnail: videoGalleryImg3,
      Occasion: "Christmas",
      FileName: "Video3.mp4",
      Status: true,
    },
    {
      id: 4,
      Thumbnail: videoGalleryImg1,
      Occasion: "Marriage",
      FileName: "Video4.mp4",
      Status: true,
    },
  ];

  const [rowData, setRowData] = useState(initialRowData);
  const [selectedRow, setSelectedRow] = useState(null);
  const [lgShowCreate, setLgShowCreate] = useState(false);
  const [lgShowEdit, setLgShowEdit] = useState(false);
  const [lgShowVideo, setLgShowVideo] = useState(false);

  const deleteTask = (data) => {
    setRowData((prevData) => prevData.filter((c) => Number(c.id) !== Number(data.id)));
    toast.success("Video deleted successfully!");
  };

  const editTask = (data) => {
    setSelectedRow(data);
    setLgShowEdit(true);
    toast.info("Editing Video: " + data.FileName);
  };

  const viewTask = (data) => {
    setSelectedRow(data);
    setLgShowVideo(true);
  };

  const [colDefs, setColDefs] = useState([
    {
      field: "Thumbnail",
      flex: 2,
      cellRenderer: ({ value }) => {
        return <img src={value} className="thumbnail-image" />;
      },
    },
    { field: "Occasion", flex: 2 },
    { field: "FileName", flex: 2 },
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
            <img
              onClick={() => {
                viewTask(data);
              }}
              src={eyes}
              className="icon-image"
            />
            <img onClick={() => editTask(data)} src={pencil} className="icon-image" />
            <img onClick={() => deleteTask(data)} src={trash} className="icon-image" />
          </div>
        );
      },
    },
  ]);

  return (
    <Col md={12}>
      <Row className="mt-4 mb-4">
        <Col xs="auto" className="head-left d-flex justify-content-between align-items-center">
          <p className="m-0 fw-bold">Gallery</p>
          <Form.Control type="text" placeholder="Search" className="search w-75" />
        </Col>
        <Col xs="auto" className="head-right d-flex justify-content-end gap-4 align-items-center">
          <div>
            <DropdownButton id="dropdown-item-button" title="Select Brand">
              <Dropdown.Item as="button">Burlington</Dropdown.Item>
              <Dropdown.Item as="button">California Pizza</Dropdown.Item>
              <Dropdown.Item as="button">Workshop</Dropdown.Item>
            </DropdownButton>
          </div>

          <Button id="dropdown-create-button" type="submit" onClick={() => setLgShowCreate(true)}>
            + Add Video
          </Button>
        </Col>
      </Row>
      <div className="ag-grid-container">
        <AgGridReact pagination={true} paginationPageSize={8} paginationPageSizeSelector={[8, 20, 50]} rowHeight={45} headerHeight={60} rowData={rowData} columnDefs={colDefs} />
      </div>

      <AddVideo rowData={rowData} setRowData={setRowData} showModal={lgShowCreate} closeModal={() => setLgShowCreate(false)} />
      <UpdateVideo rowData={rowData} setRowData={setRowData} showModal={lgShowEdit} closeModal={() => setLgShowEdit(false)} selectedRow={selectedRow} />
      <ViewVideo showModal={lgShowVideo} closeShowVideo={() => setLgShowVideo(false)} selectedRow={selectedRow} />
    </Col>
  );
}

export default VideoGallery;
