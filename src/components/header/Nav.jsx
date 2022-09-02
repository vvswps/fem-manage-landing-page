import React from "react";
import LOGO from "../../assets/logo.svg";

const Nav = () => {
  return (
    <nav id="nav">
      <div className="nav-container">
        <img className="logo" src={LOGO} alt="logo" />
        <div className="hamburger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
            <g fill="#242D52" fill-rule="evenodd">
              <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
          </svg>
        </div>

        <div className="links">
          <a href="#pricing">Pricing</a>
          <a href="#product">Product</a>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#community">Community</a>
        </div>
        <button className="btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Nav;
