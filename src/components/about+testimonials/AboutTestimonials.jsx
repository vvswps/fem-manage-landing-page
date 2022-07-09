import React from "react";
import "./aboutTestimonials.css";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";

const AboutTestimonials = () => {
  return (
    <>
      <div className="aboutTestimonials-container">
        <About />
        <Testimonials />
      </div>
    </>
  );
};

export default AboutTestimonials;
