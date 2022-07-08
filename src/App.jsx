import React from "react";
import Header from "./components/header/Header";
// import About from "./components/about/About";
// import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import AboutTestimonials from "./components/about+testimonials/AboutTestimonials";

const App = () => {
  return (
    <>
      <Header />
      {/* <About />
      <Testimonials /> */}
      <AboutTestimonials />
      <Footer />
    </>
  );
};

export default App;
