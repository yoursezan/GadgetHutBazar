import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";
// import customerImg from './8f62bdda-2d64-460e-b73b-decd3d3eb9a6.png'; // replace with your uploaded image

const testimonials = [
  {
    id: 1,
    name: "Arafath Islam",
    message:
      "Love my new Apple Airpods! It's sleek, packed with features, and has great battery life. Highly recommend!",
    image: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/475589595_1884691815692818_1202743751913865707_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHT-xRLGQ_iW3dAsziux2mELvtcYhs2kVQu-1xiGzaRVPpD6Mh0FWN9ovnB_mQ47Lz027fukNqiu04MNhc8X3KU&_nc_ohc=5do37YeB208Q7kNvwE4YkLQ&_nc_oc=AdlXbsnsltLygqNKlqnFpjDZGRNDKKf53M7Z8ATvbYksQ-a_NOpdjSXmmk6G5pkL1-M&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=RLZ5tVQ--W_0695TAlorOg&oh=00_AfVb6g0a_Mwg0CGPpQ27WXTVFbJ09J-UUVjLczIuVspuHQ&oe=68AC38C3",
  },
  {
    id: 2,
    name: "Sezan",
    message:
      "Amazing customer service and the product quality is top-notch. Very satisfied!",
    image: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/488909983_1937337817094884_7578207671086427502_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFt4snQbg3Shsgecs-_l8JR50Jmx8L0M8_nQmbHwvQzz9XOQ3nnf5KjPnMlJzVP5xBijoV97ct35guoHsIdHvE9&_nc_ohc=DScw3zX1CVIQ7kNvwHnpagg&_nc_oc=Adn64w4CPD8bpDOP4YetDP9bsbyryL3xLiOuFiCo4dJh9COvGaz4Zb6BwTJuEHg0AE8&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=nH2H2trgOZOywCdEQzVE4g&oh=00_AfVbTZpUjcJjX5GaLkgKj1WqRdptqfebJypWTsaUF_qfWA&oe=68AC2035",
  },
  {
    id: 3,
    name: "King",
    message:
      "Fast delivery and genuine products. I will definitely buy again from here.",
    image: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/484554676_1922559205239412_2600942764224413854_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH-i2xgwflLAXd75gIb5AV9s82oOr3aiaSzzag6vdqJpLOL4eJCvWCCCzqi4Fj-lGteTX-HFD3FE_zEeoYazy-I&_nc_ohc=T0hqccVn_CAQ7kNvwFCJL6z&_nc_oc=Adm-9Elqpjq3snA6zt_oNaC9M0iOPXHFBu_KCysZQuhcnf35kDDi1TMJP8kFr5N5Tfg&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=ZowwDd4LHHEf_Xi5VFZELg&oh=00_AfWHtoMF2jcKrxM8B0g7oRjxtJKVZoPh1N5KnLbLlkqPlg&oe=68AC2256",
  },
];

export default function Testimonials() {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Our Customers Says</h2>
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
                width={80}
                height={80}
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
