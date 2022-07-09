import React from "react";
import "./footer.css";
import LOGO from "../../assets/logo.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Youtube from "../../assets/icon-youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <h1>Simplify how your team works today.</h1>
        <button className="btn">Get Started</button>
      </div>

      <div className="bottom">
        <div className="col1">
          <img className="logo" src={LOGO} alt="logo" />
          <div className="social-icons">
            <a href="facebook.com">
              <img src={Facebook} alt="facebook icon" />
            </a>
            <a href="instagram.com">
              <img src={Instagram} alt="instagram icon" />
            </a>
            <a href="pinterest.com">
              <img src={Pinterest} alt="pinterest icon" />
            </a>
            <a href="twitter.com">
              <img src={Twitter} alt="twitter icon" />
            </a>
            <a href="youtube.com">
              <img src={Youtube} alt="youtube icon" />
            </a>
          </div>
        </div>

        <div className="col2">
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
        </div>

        <div className="col3">
          <a href="#careers">Careers</a>
          <a href="#community">Community</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="col4">
          <section>
            <input type="text" placeholder="Updates in your inbox…" />
            <button className="btn">Go</button>
          </section>
          <div className="attribution">
            <p>Copyright 2020. All Rights Reserved</p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#babajis.herokuapp.com">BABAji</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
