import React from "react";
import "./WelcomePage.css";

const WelcomePage = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Photo Collage Maker</h1>
      <p className="welcome-description">
        Create stunning photo collages effortlessly! Upload your images, drag and drop to arrange them, and bring your memories to life.
      </p>
      <button className="welcome-button" onClick={onStart}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
