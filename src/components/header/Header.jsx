import React from "react";
import "./header.css";
import IMAGE from "../../assets/illustration-intro.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="header-container">
        <div className="text">
          <h1 className="heading heading-700">
            Bring everyone together to build better products.
          </h1>
          <p className="text-light">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="btn">Get Started</button>
        </div>

        <img src={IMAGE} alt="intro" />
      </div>
    </header>
  );
};

export default Header;
