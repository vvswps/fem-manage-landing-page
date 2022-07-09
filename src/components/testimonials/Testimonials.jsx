import React from "react";
import Carousel from "./Carousel";
import "./testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div className="testimonials-container">
        <h1 className="heading">What they've said</h1>
        <div className="carousel-container">
          <Carousel />
        </div>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Testimonials;
