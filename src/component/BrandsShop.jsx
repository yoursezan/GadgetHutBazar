import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import gadgets from "../Api/gadgets_with_rating.json"; // <-- adjust path if needed
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function BrandsShop() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = [];
    const brandMap = new Map();

    gadgets.forEach((item) => {
      if (!brandMap.has(item.brand)) {
        brandMap.set(item.brand, true);
        uniqueBrands.push({
          name: item.brand,
          image: item.brandImage, // <-- make sure your JSON has brandImage field
        });
      }
    });

    setBrands(uniqueBrands);
  }, []);

  return (
    <section style={{ padding: "10px 80px" }}>
      <Container>
        <h2 className="fw-bold text-center mb-4">
          <span style={{ color: "#2196F3" }}>Top </span>
          <span style={{ color: "#f32121ff" }}>Brands</span>
        </h2>
        <Row xs={1} md={2} className="g-4">
          {brands.map((brand, idx) => (
            <Col key={idx}>
              <Card className="shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={brand.image}
                  alt={brand.name}
                  style={{
                    height: "100px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{brand.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
