import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gadgets from "../Api/gadgets_with_rating.json";  

export default function BrandsShop() {
  const [brands, setBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);  

  useEffect(() => {
    const uniqueBrands = [];
    const brandMap = new Map();

    gadgets.forEach((item) => {
      if (!brandMap.has(item.brand)) {
        brandMap.set(item.brand, true);
        uniqueBrands.push({
          name: item.brand,
          image: item.brandImage,  
        });
      }
    });

    setBrands(uniqueBrands);
  }, []);

   
  const displayedBrands = showAll ? brands : brands.slice(0, 4);

  return (
    <section style={{ padding: "10px 80px" }}>
      <Container>
        <h2 className="fw-bold text-center mb-4">
          <span style={{ color: "#2196F3" }}>Top </span>
          <span style={{ color: "#f32121ff" }}>Brands</span>
        </h2>

        {/* Brand Cards */}
        <Row xs={1} md={2} className="g-4">
          {displayedBrands.map((brand, idx) => (
            <Col key={idx}>
              <Card className="shadow-sm text-center h-100">
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

        {/* Toggle Button */}
        <div className="text-center mt-4">
          {showAll ? (
            <Button variant="outline-danger" onClick={() => setShowAll(false)}>
              Minimize View ↑
            </Button>
          ) : (
            brands.length > 4 && (
              <Button variant="outline-primary" onClick={() => setShowAll(true)}>
                View All Brands ↓
              </Button>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
