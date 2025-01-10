import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Admin from "../../../assets/icons/admin.svg";
function HeaderSection() {
  return (
    <div>
      <Row className="full-height">
        <Col md={12}>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Welcome to Admin Portal</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <img src={Admin} alt="Logo" className="nav-Imgs" />
                  <a href="#login" style={{ textDecoration: "none" }}>
                    Mark Otto
                  </a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderSection;
