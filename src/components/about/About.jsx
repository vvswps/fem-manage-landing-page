import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="text">
          <h1 className="heading">What’s different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <ul className="list">
          <li className="list-item">
            Track company-wide progress See how your day-to-day tasks fit into
            the wider vision. Go from tracking progress at the milestone level
            all the way done to the smallest of details. Never lose sight of the
            bigger picture again.
          </li>
          <li className="list-item">
            Advanced built-in reports Set internal delivery estimates and track
            progress toward company goals. Our customisable dashboard helps you
            build out the reports you need to keep key stakeholders informed.
          </li>
          <li className="list-item">
            Everything you need in one place Stop jumping from one service to
            another to communicate, store files, track tasks and share
            documents. Manage offers an all-in-one team productivity solution.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
