import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import gadgetsData from "../Api/gadgets_with_rating.json";

export default function ProductsPage() {
  const [gadgets, setGadgets] = useState([]);
  const [sortOption, setSortOption] = useState("rating"); // default sort by rating

  useEffect(() => {
    handleSort("rating"); // initial sort by rating
  }, []);

  const handleSort = (option) => {
    let sorted = [...gadgetsData];
    if (option === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (option === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setGadgets(sorted);
    setSortOption(option);
  };

  return (
    <section style={{ padding: "60px 20px" }}>
      <Container>
        <h2 className="fw-bold text-center mb-4">
          All <span style={{ color: "#2196F3" }}>Products</span>
        </h2>

        {/* Filter Bar */}
        <div className="d-flex justify-content-end mb-4">
          <DropdownButton
            id="dropdown-sort"
            title={`Sort by: ${
              sortOption === "rating"
                ? "Rating"
                : sortOption === "price-high"
                ? "Price (High → Low)"
                : "Price (Low → High)"
            }`}
            variant="outline-primary"
            onSelect={(e) => handleSort(e)}
          >
            <Dropdown.Item eventKey="rating">Rating (High → Low)</Dropdown.Item>
            <Dropdown.Item eventKey="price-high">
              Price (High → Low)
            </Dropdown.Item>
            <Dropdown.Item eventKey="price-low">
              Price (Low → High)
            </Dropdown.Item>
          </DropdownButton>
        </div>

        {/* Product Grid */}
        <Row className="gx-5 gy-5">
          {gadgets.map((item) => (
            <Col md={4} sm={6} key={item.id}>
              <Card
                className="h-100 border-0"
                style={{
                  borderRadius: "15px",
                  minHeight: "500px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.15)";
                }}
              >
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      height: "300px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "15px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#1042caff",
                    }}
                  >
                    {item.price} taka
                  </span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{item.name}</Card.Title>
                  <Card.Text style={{ fontSize: "14px", flexGrow: 1 }}>
                    {item.description}
                  </Card.Text>
                  <p className="mb-2">⭐ {item.rating.toFixed(1)} / 5</p>
                  <Button variant="primary" className="mt-auto">
                    More Information →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
