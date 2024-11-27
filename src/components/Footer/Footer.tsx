import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>
              We are a modern company providing the best services to our customers.
            </p>
          </Col>
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p>
              Email: info@example.com<br />
              Phone: +123 456 7890
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12" className="text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;