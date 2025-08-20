 
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaShippingFast, FaHeadset, FaTags, FaDollarSign } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // scrollable effect
        position: "relative",
      }}
    >
      {/* Overlay with blur effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(6px)", // blur effect
          backgroundColor: "rgba(255, 255, 255, 0.6)", // semi-transparent overlay
        }}
      />

      {/* Content on top of blur */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="g-4">
          <Col md={3} sm={6}>
            <ServiceCard
              icon={<FaShippingFast size={28} />}
              text="Offering expedited shipping options and ensuring timely delivery of orders, with tracking information available for customers."
            />
          </Col>
          <Col md={3} sm={6}>
            <ServiceCard
              icon={<FaHeadset size={28} />}
              text="Providing multiple channels for customer support, including live chat, email, and phone support, to address any queries or issues promptly."
            />
          </Col>
          <Col md={3} sm={6}>
            <ServiceCard
              icon={<FaTags size={28} />}
              text="Offering discounts, coupons, and promotional offers to incentivize purchases and reward loyal customers."
            />
          </Col>
          <Col md={3} sm={6}>
            <ServiceCard
              icon={<FaDollarSign size={28} />}
              text="Providing a hassle-free return policy and easy refund process for customers in case they are not satisfied with their purchases."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Reusable Service Card
function ServiceCard({ icon, text }) {
  return (
    <Card
      className="h-100 shadow-sm border-0 text-center"
      style={{ borderRadius: "15px", backgroundColor: "#BBDEFB" }}
    >
      <Card.Body>
        <div
          style={{
            backgroundColor: "#2196F3",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            marginBottom: "15px",
            color: "#fff",
          }}
        >
          {icon}
        </div>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
