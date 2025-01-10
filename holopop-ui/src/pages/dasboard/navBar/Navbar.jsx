import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../navBar/NavBar.scss";
import logoImg from "../../../assets/icons/logo-icon.svg";
import Deshboard from "../../../assets/icons/Vector.svg";
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
          <NavLink to="/" className="navbar-brand" activeClassName="active-link">
            <img src={logoImg} alt="Logo" />
          </NavLink>
        </div>
        <Navbar className="nav">
          <img src={Deshboard} alt="Dashboard" className="nav-Imgs" />
          <NavLink to="/hero-section" className="navbar-brand" activeClassName="active-link">
            Dashboard
          </NavLink>
        </Navbar>

        <Navbar className="nav">
          <img src={User} alt="User" className="nav-Imgs" />
          <NavLink to="/userpage" className="navbar-brand" activeClassName="active-link">
            User
          </NavLink>
        </Navbar>

        <Navbar className="nav">
          <img src={QRCode} alt="QR Code" className="nav-Imgs" />
          <NavLink to="/qr-code" className="navbar-brand" activeClassName="active-link">
            QR Code
          </NavLink>
        </Navbar>

        <Navbar className="nav">
          <img src={GiftCard} alt="Gift Card" className="nav-Imgs" />
          <NavLink to="/gift-card" className="navbar-brand" activeClassName="active-link">
            Gift Card
          </NavLink>
        </Navbar>

        <Navbar className="nav">
          <img src={BrowseGallary} alt="Browse Gallery" className="nav-Imgs" />
          <NavLink to="/browse-gallery" className="navbar-brand" activeClassName="active-link">
            Browse Gallery
          </NavLink>
        </Navbar>

        <Navbar className="nav">
          <img src={Occasion} alt="Occasion" className="nav-Imgs" />
          <NavLink to="/" className="navbar-brand" activeClassName="active-link">
            Occasion
          </NavLink>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBarMain;
