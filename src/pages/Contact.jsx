import React from "react";

export default function Contact() {
  return (

    <>
    <h2 className="text-center  text-blue py-2 rounded mb-4">
          Contact Us
        </h2>
        <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%" }}>
        

        <form>
          <fieldset className="border rounded p-4">
            <legend className="float-none w-auto px-2 fs-5">Message Form</legend>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    </>
    
  );
}
