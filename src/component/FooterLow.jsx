import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function FooterLow() {
  return (
    <footer style={{ backgroundColor: "#92c7f8ff", padding: "40px 0 0 0" }}>
      <Container fluid>
        <Row className="gy-4 px-5">
          {/* Contact Us */}
          <Col md={3}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" /> Mohammedpur, Dhaka, 1235</p>
            <p><FaPhone className="me-2" /> +880 1719******</p>
            <p><FaEnvelope className="me-2" /> gedgethutbazar@gmail.com</p>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/products" className="text-dark text-decoration-none">Product</a></li>
              <li><a href="#contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social + Customer Service */}
          <Col md={3}>
            <h5 className="fw-bold mb-3">Social Handles</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-dark fs-5"><FaInstagram /></a>
              <a href="#" className="text-dark fs-5"><FaTwitter /></a>
              <a href="#" className="text-dark fs-5"><FaFacebookF /></a>
            </div>
            <h5 className="fw-bold mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#terms" className="text-dark text-decoration-none">Terms of Use</a></li>
              <li><a href="#faq" className="text-dark text-decoration-none">FAQ</a></li>
              <li><a href="#report" className="text-dark text-decoration-none">Report Issues</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Subscribe to our News Letter</h5>
            <p>Sign up to be the first to receive latest news about our products.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address"
                className="me-2"
              />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom bar */}
        <Row className="mt-4">
         <Col
    className="text-center"
    style={{
      backgroundColor: "#2196F3",
      padding: "10px",
      color: "#fff"
    }}
  >
    ©2025 GadgetHutBazar, Shop With Us
  </Col>
        </Row>
      </Container>
    </footer>
  );
}
