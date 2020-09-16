import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "./userMenu/UserMenu";

import "./header.css";

function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-sm navbar-custom">
        <a className="navbar-brand" href="#0">
          <i className="fas fa-cloud"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars navbar-toggle-icon"></i>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="nav-link"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboards"
                activeClassName="active"
                className="nav-link"
              >
                Dashboards
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin"
                activeClassName="active"
                className="nav-link"
              >
                Admin
              </NavLink>
            </li>
          </ul>

          <UserMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
