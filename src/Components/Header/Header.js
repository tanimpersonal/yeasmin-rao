import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Navbar bg="none" expand="lg">
        <Container>
          <div className="brand">
            <Navbar.Brand href="#home">Goriber Photographer</Navbar.Brand>
          </div>
          <div className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link
                  className="text-decoration-none"
                  as={CustomLink}
                  to="/services"
                >
                  Services
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="myname"></div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
