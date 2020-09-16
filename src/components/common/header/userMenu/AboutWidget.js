import React from "react";
import PropTypes from "prop-types";

const AboutWidget = ({ handleClick, expanded }) => {
  const handleExpansion = (event) => {
    event.preventDefault();
    handleClick();
  };
  return (
    <div id="aboutWidget">
      <a href="#1" onClick={handleExpansion}>
        <i className="fas fa-question-circle"></i>
      </a>
      <div className={`body box-shadow rounded ${expanded ? "expanded" : ""}`}>
        <p className="lead text-center p-1">
          IoT Dashy &nbsp;
          <mark className="text-muted small">ver 1.2</mark>
        </p>
        <hr />
        <p className="px-3">
          Version: 1.2
          <br />
          Authors: Many and lots
        </p>
        <hr />
        <p className="text-center px-3">
          <small>Made by remarkable people, for remarkable people</small>
        </p>
      </div>
    </div>
  );
};

AboutWidget.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default AboutWidget;
