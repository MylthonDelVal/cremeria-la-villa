import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const Header = () => {
  return (
    <Navbar className="header" expand="lg" variant="dark">
      <Navbar.Brand href="#home" className="logo">La Villa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
          <Nav.Item className="social-icons d-flex align-items-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;