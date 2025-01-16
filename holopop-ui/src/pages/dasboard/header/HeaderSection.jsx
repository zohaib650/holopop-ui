import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Admin from "../../../assets/icons/admin.svg";
import { NavLink } from "react-router-dom";
import "./HeaderSection.scss";
function HeaderSection() {
  return (
    <Col md={12}>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Welcome to Admin Portal</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink to="/admin" className="navbar-brand">
                <img src={Admin} alt="Logo" className="nav-Img" />
                <p>Mark Otto</p>
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  );
}

export default HeaderSection;
