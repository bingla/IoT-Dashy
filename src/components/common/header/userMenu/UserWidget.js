import React from "react";
import PropTypes from "prop-types";
import ProfilePic from "./profile-pic.jpg";

const UserWidget = ({ handleClick, expanded }) => {
  const handleExpansion = (event) => {
    event.preventDefault();
    handleClick();
  };
  return (
    <div id="userWidget">
      <div className="profile-pic rounded-circle" onClick={handleExpansion}>
        <img src={ProfilePic} alt="Profile" />
      </div>

      <div className={`body box-shadow rounded ${expanded ? "expanded" : ""}`}>
        <ul className="list-unstyled">
          <li className="nav-item">
            <a href="#1" className="nav-link">
              <i className="far fa-user mr-3"></i>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#2" className="nav-link">
              <i className="fas fa-clipboard mr-3"></i>
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a href="#3" className="nav-link">
              <i className="far fa-clock mr-3"></i>
              History
            </a>
          </li>
          <li className="nav-item border-top">
            <a href="#4" className="nav-link">
              <i className="fas fa-cog mr-3"></i>
              Account Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserWidget.propTypes = {
  handleClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default UserWidget;
