import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p className="mb-0">&copy; 2025 Cremería "La Villa". Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;