import React from "react";
import { Container } from "react-bootstrap";

const values = [
  { title: "Innovation", desc: "Always bringing you the latest tech trends." },
  { title: "Quality", desc: "We deliver only tested and trusted gadgets." },
  { title: "Customer Focus", desc: "Your satisfaction is our priority." },
];

export default function About() {
 return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <div className="row g-4">
        {/* Service 1 */}
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-truck display-5 text-primary mb-3"></i>
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text text-muted">
                Get your gadgets delivered quickly and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-shield-lock display-5 text-success mb-3"></i>
              <h5 className="card-title">Secure Payment</h5>
              <p className="card-text text-muted">
                Pay with confidence using our 100% secure payment methods.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-headset display-5 text-warning mb-3"></i>
              <h5 className="card-title">24/7 Support</h5>
              <p className="card-text text-muted">
                Our customer support team is always ready to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm h-100 border-0">
            <div className="card-body">
              <i className="bi bi-arrow-repeat display-5 text-danger mb-3"></i>
              <h5 className="card-title">Easy Returns</h5>
              <p className="card-text text-muted">
                Hassle-free returns within 7 days for a worry-free shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
