import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <header className="vid-header vid-container">
      <div className="vid-fullscreen">
        <video src="mac.mp4" autoPlay="true" loop="true" />
      </div>
      <div className="header-overlay" />
      <div className="header-content text-md-center">
        <h1>React Application</h1>
        <p>
          This application allows users to retrieve Github profile and repos by
          typing in a username
        </p>
        <NavLink tag={Link} to="/githubapp">
          <button className="btn btn-primary">View Application</button>
        </NavLink>
      </div>
    </header>
  );
};

export default LandingPage;
