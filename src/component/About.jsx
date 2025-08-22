import React from 'react'
import { Container } from 'react-bootstrap'

export default function About() {
  return (
    <div>
        <section id="about" className="py-5 bg-light">
        <Container>
          <h3 className="fw-bold text-center">
            ABOUT <span style={{ color: "#2196F3" }}>Gadget</span><span style={{ color: "#f39121ff" }}>Hut</span>Bazar
          </h3>
          <p className="text-center mt-3 mx-auto" style={{ maxWidth: "700px" }}>
            At GadgetBazar, we’re passionate about bringing you the latest and greatest 
            in electronics and gadgets. With our curated selection of high-quality products 
            and exceptional customer service, we strive to make your tech shopping experience seamless.
          </p>
        </Container>
      </section>
      </div>
  )
}
