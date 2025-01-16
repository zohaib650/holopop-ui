import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../navBar/NavBar.scss";
import logoImg from "../../../assets/icons/logo-icon.svg";
import Deshboard from "../../../assets/icons/Vector.svg";
import logout from "../../../assets/icons/logoutt.svg";
import User from "../../../assets/icons/carbon_machine-learning-model.svg";
import QRCode from "../../../assets/icons/qr_code_2.svg";
import GiftCard from "../../../assets/icons/featured_seasonal_and_gifts.svg";
import BrowseGallary from "../../../assets/icons/gallery_thumbnail.svg";
import Occasion from "../../../assets/icons/Occasion.svg";

const NavBarMain = () => {
  return (
    <Row className="full-height w-100 m-0">
      <Col md={12} className="navCol">
        <div className="logo-Img">
          <NavLink to="/deshboard" className="navbar-brand">
            <img src={logoImg} alt="Logo" />
          </NavLink>
        </div>

        <NavLink to="/deshboard" className="navbar-brand">
          <Navbar className="nav">
            <img src={Deshboard} alt="Dashboard" className="nav-Imgs" />
            Dashboard
          </Navbar>
        </NavLink>

        <NavLink to="/user" className="navbar-brand">
          <Navbar className="nav">
            <img src={User} alt="User" className="nav-Imgs" />
            User
          </Navbar>
        </NavLink>

        <NavLink to="/qr" className="navbar-brand">
          <Navbar className="nav">
            <img src={QRCode} alt="QR Code" className="nav-Imgs" />
            QR Code
          </Navbar>
        </NavLink>

        <NavLink to="/gift" className="navbar-brand">
          <Navbar className="nav">
            <img src={GiftCard} alt="Gift Card" className="nav-Imgs" />
            Gift Card
          </Navbar>
        </NavLink>

        <NavLink to="/gallery" className="navbar-brand">
          <Navbar className="nav">
            <img src={BrowseGallary} alt="Browse Gallery" className="nav-Imgs" />
            Browse Gallery
          </Navbar>
        </NavLink>

        <NavLink to="/deshboard" className="navbar-brand">
          <Navbar className="nav">
            <img src={Occasion} alt="Occasion" className="nav-Imgs" />
            Occasion
          </Navbar>
        </NavLink>

        <NavLink to="/" className="navbar-brand-out">
          <Navbar className="custom-nav">
            <img src={logout} alt="Occasion" className="nav-Imgs" />
            LogOut
          </Navbar>
        </NavLink>
      </Col>
    </Row>
  );
};

export default NavBarMain;
