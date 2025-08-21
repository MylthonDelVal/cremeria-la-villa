import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

// Importa las imágenes
import quesoImage from '../assets/images/queso.jpg';
import cremaImage from '../assets/images/crema.jpg';
import yogurtImage from '../assets/images/yogurt.jpg';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="hero-section text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Bienvenidos a Cremería "La Villa"</h1>
          <p className="lead">Tu destino para los productos lácteos más frescos y deliciosos.</p>
          <Button variant="warning" size="lg" className="mt-3">Ver Productos</Button>
        </Container>
      </div>

      <Container id="productos" className="products-section my-5">
        <h2 className="text-center mb-5 display-5 fw-bold text-brown">Nuestros Productos</h2>
        <Row className="justify-content-center g-4">
          <Col md={4}>
            <Card className="product-card h-100">
              <Card.Img variant="top" src={quesoImage} alt="Queso" />
              <Card.Body>
                <Card.Title className="fw-bold">Quesos Artesanales</Card.Title>
                <Card.Text>Elaborados con la mejor leche de la región.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="product-card h-100">
              <Card.Img variant="top" src={cremaImage} alt="Crema" />
              <Card.Body>
                <Card.Title className="fw-bold">Crema Natural</Card.Title>
                <Card.Text>Perfecta para tus platillos y postres favoritos.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="product-card h-100">
              <Card.Img variant="top" src={yogurtImage} alt="Yogurt" />
              <Card.Body>
                <Card.Title className="fw-bold">Yogurt Casero</Card.Title>
                <Card.Text>Sabor y frescura en cada cucharada.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="contacto" className="contact-section my-5">
        <h2 className="text-center mb-4 display-5 fw-bold text-brown">Contáctanos</h2>
        <p className="text-center">Visítanos en nuestra tienda o contáctanos para pedidos.</p>
        <div className="contact-info text-center mt-4">
          <p><strong>Dirección:</strong> Av. Principal #123, Ciudad, País</p>
          <p><strong>Teléfono:</strong> +52 123 456 7890</p>
          <p><strong>Correo:</strong> info@cremerialavilla.com</p>
        </div>
      </Container>
    </main>
  );
};

export default MainContent;