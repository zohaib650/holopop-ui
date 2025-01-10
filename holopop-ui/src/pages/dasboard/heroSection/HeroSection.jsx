import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecondUser from "../../../assets/icons/userSecond.svg";
import newWindow from "../../../assets/icons/new_window.svg";
import "../heroSection/HeroSection.scss";
import eyeracking from "../../../assets/icons/eye_tracking.svg";
import massage from "../../../assets/icons/massage.svg";
import { PieChart } from "@mui/x-charts/PieChart";

function HeroSection() {
  return (
    <div>
      <Container>
        <Row className="full-height">
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
            <Row>
              <div>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 1, value: 70, color: "#38C1F0" },
                        { id: 0, value: 30, color: "##242A30" },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
