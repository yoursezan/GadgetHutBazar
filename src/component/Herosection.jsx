import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaMusic, FaHeartbeat, FaSyncAlt, FaMapMarkerAlt } from "react-icons/fa";

// Reusable Feature component
function Feature({ icon, text }) {
  return (
    <div
      className="px-3 py-2 d-flex align-items-center gap-2 rounded-pill shadow-sm"
      style={{ backgroundColor: "rgba(227, 242, 253, 0.85)", fontSize: "14px" }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default function Herosection() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // keeps scrollable effect
        position: "relative",
      }}
    >
      {/* Overlay with blur + semi-transparent background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(6px)", // blur effect
          backgroundColor: "rgba(255, 255, 255, 0.6)", // light overlay
        }}
      />

      {/* Content on top */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold text-dark">
              Introducing Our <br /> Top Pick of the Week
            </h1>
            <p className="text-dark mt-3">
              Behold the{" "}
              <span style={{ color: "#2196F3" }}>TechFit Pro</span> Smartwatch,
              the ultimate companion for modern living.
            </p>
            <Button variant="primary" className="mt-3">
              Learn More
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp"
              alt="Smartwatch"
              style={{ width: "300px", borderRadius: "12px" }}
            />
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
              <Feature icon={<FaHeartbeat />} text="Fitness Tracking" />
              <Feature icon={<FaMusic />} text="Music Control" />
              <Feature icon={<FaSyncAlt />} text="Compatibility" />
              <Feature icon={<FaMapMarkerAlt />} text="GPS Tracking" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
