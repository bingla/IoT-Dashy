import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

const PageNavigation = ({ expanded, onExpand, header, links }) => {
  const match = useRouteMatch();

  return (
    <>
      <div className={`page-nav ${!expanded ? "hidden" : ""}`}>
        {header.expanded && (
          <div className="page-head">
            <i className={header.icon}></i>
            {header.title}
          </div>
        )}
        <nav>
          <ul className="list-unstyled">
            {links !== undefined &&
              links.length > 0 &&
              links.map((link) => (
                <li key={link.id} className="nav-item">
                  <NavLink to={`${match.url}${link.link}`} className="nav-link">
                    <i className={link.icon}></i>
                    <span className="nav-text">{link.title}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
        <hr />
        <nav>
          <ul className="list-unstyled">
            <li className="nav-item">
              <a href="#11" className="nav-link" onClick={onExpand}>
                {expanded ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
                <span className="nav-text">{expanded ? "Close" : "Open"}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

PageNavigation.propTypes = {
  onExpand: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  header: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
};

export default PageNavigation;
