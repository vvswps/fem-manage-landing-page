import React from "react";
import LOGO from "../../assets/logo.svg";

const Nav = () => {
  return (
    <div id="nav">
      <div className="nav-container">
        <img className="logo" src={LOGO} alt="logo" />
        <div className="links">
          <a href="#pricing">Pricing</a>
          <a href="#product">Product</a>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#community">Community</a>
        </div>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Nav;
