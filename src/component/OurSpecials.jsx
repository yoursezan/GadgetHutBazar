import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gadgetsData from "../Api/gadgets_with_rating.json";
import { useNavigate } from "react-router-dom";

export default function OurSpecials() {
  const [gadgets, setGadgets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Sort by rating (highest first)
    const sorted = [...gadgetsData].sort((a, b) => b.rating - a.rating);
    setGadgets(sorted);
  }, []);

  return (
    <section style={{ padding: "10px 20px" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5">
          Our <span style={{ color: "#2196F3" }}>Specials</span>
        </h2>

        <Row className="g-4">
          {gadgets.slice(0, 3).map((item) => (
            <Col md={4} sm={6} key={item.id}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ borderRadius: "15px" }}
              >
                <div style={{ position: "relative" }}>
                  <Card.Img class="rounded-xl object-contain lg:h-[100px] h-[30px]  w-full p-5"
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      height: "220px", // fixed height for all images
                      objectFit: "cover", // crop nicely instead of stretching
                      width: "100%", // ensures full card width
                    }}
                  />

                  <span 
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "15px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#000",
                    }}
                  >
                    ${item.price}
                  </span>
                </div>
                <Card.Body class='items-center text-center'>
                  <Card.Title className="fw-bold">{item.name}</Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>
                    {item.description}
                  </Card.Text>
                  <p className="mb-2">⭐ {item.rating.toFixed(1)} / 5</p>
                  <Button variant="primary">More Information →</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {gadgets.length > 6 && (
          <div className="text-center mt-4">
            <Button
              variant="outline-primary"
              onClick={() => navigate("/products")} // navigate to products page
            >
              View All Products
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
