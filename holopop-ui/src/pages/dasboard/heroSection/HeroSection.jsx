import React from "react";
import Row from "react-bootstrap/Row";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import SecondUser from "../../../assets/icons/userSecond.svg";
import newWindow from "../../../assets/icons/new_window.svg";
import eyeracking from "../../../assets/icons/eye_tracking.svg";
import massage from "../../../assets/icons/massage.svg";
import "../heroSection/HeroSection.scss";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

function HeroSection() {
  const labels = ["12 Am", "04 Am ", "08 Am", "12Am", "04 Am", "08 Am"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [65, 95, 73, 85, 56, 58, 81],
        backgroundColor: "#38C1F0",
        borderColor: "#38C1F0",
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: true },
        ticks: {
          callback: function (value) {
            return `${value}k`;
          },
          stepSize: 20,
        },
      },
    },
  };
  const chartData = {
    labels: ["Android", "iOS"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#38C1F0", "#242A30"],
        borderColor: ["#38C1F0", "#242A30"],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        align: "center",
        font: {
          size: 30,
          weight: "bold",
        },
        color: "#fff",
        formatter: (value) => `${value}%`,
        padding: 10,
        borderRadius: 5,
      },
    },
  };
  return (
    <Col md={12}>
      <Row>
        <Col>
          <div className="top-grid">
            <div className="grid-decs">
              <p>New Users This Month</p>
              <h4>04.75k</h4>
            </div>
            <div className="secondUser">
              <img src={SecondUser} alt="Logo" className="nav-Imgs" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="top-grid">
            <div className="grid-decs">
              <p>Holopops Created</p>
              <h4>04.75k</h4>
            </div>
            <div className="secondUser">
              <img src={newWindow} alt="Logo" className="nav-Imgs" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="top-grid">
            <div className="grid-decs">
              <p>Holopops Viewed</p>
              <h4>04.75k</h4>
            </div>
            <div className="secondUser">
              <img src={eyeracking} alt="Logo" className="nav-Imgs" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="top-grid">
            <div className="grid-decs">
              <p>Invites Sent</p>
              <h4>04.75k</h4>
            </div>
            <div className="secondUser">
              <img src={massage} alt="Logo" className="nav-Imgs" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col>
          <div className="analytics-container">
            <div className="header">
              <h4 className="heading">Users Analytics</h4>
              <DropdownButton id="dropdown-item-button" title="Past 24 hours">
                <Dropdown.ItemText>Past 12 hours</Dropdown.ItemText>
                <Dropdown.Item as="button">Past 6 hours</Dropdown.Item>
                <Dropdown.Item as="button">Past 1 hours</Dropdown.Item>
              </DropdownButton>
            </div>
            <Bar data={data} options={options} />
          </div>
        </Col>
        <Col>
          <div>
            <h4 className="custom-heading">Android & iOS Users Purchased</h4>
          </div>
          <div className="chart-container">
            <Pie data={chartData} height={180} width={180} options={chartOptions} />
          </div>
        </Col>
      </Row>
    </Col>
  );
}

export default HeroSection;
