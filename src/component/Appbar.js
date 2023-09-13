import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from '../img/henna-painted-hand.png'
import Cart from './Cart';

function Appbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <img
              src={img1}
              className="d-inline-block  align-bottom mb-2"
              style={{ width: "20px" }}
              alt=""
            />{" "}
            Brindha Henna Artist
          </h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            {/* <Nav.Link href="#link">Services</Nav.Link> */}
            <Nav.Link href="#menu"  className="fw-bold">
              Menu
            </Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold">
              Must Try
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">
              Contact Us
            </Nav.Link>
            <Cart/>

            {/* <NavDropdown
              title="Contact Us"
              className="fw-bold"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar