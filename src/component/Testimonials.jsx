import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Arafath Islam",
    message:
      "Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  {
    id: 2,
    name: "Sezan",
    message:
      "Amazing customer service and the product quality is top-notch. Very satisfied!",
    image:
      "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "King",
    message:
      "Fast delivery and genuine products. I will definitely buy again from here.",
    image:
      "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
  },
];

export default function Testimonials() {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Our Customers Say</h2>
      <Carousel indicators={false} controls={true} interval={5000}>
        {testimonials.map((t) => (
          <Carousel.Item key={t.id}>
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: "250px" }}
            >
              <Image
                src={t.image}
                roundedCircle
                style={{
                  maxWidth: "150px", // maximum width
                  maxHeight: "150px", // maximum height
                  objectFit: "cover",
                }}
                className="mb-3"
              />
              <h5>{t.name}</h5>
              <p className="mx-auto" style={{ maxWidth: "500px" }}>
                “{t.message}”
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
