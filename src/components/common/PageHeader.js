import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
  return <div className="page-head">{title}&nbsp;</div>;
};

PageHeader.propTypes = {
  expanded: PropTypes.bool,
  title: PropTypes.string,
};

export default PageHeader;
