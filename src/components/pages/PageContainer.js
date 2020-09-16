import React from "react";
import PropTypes from "prop-types";
import PageNavigation from "../common/PageNavigation";

const PageContainer = ({ expanded, header, links, onExpand, children }) => {
  return (
    <>
      <div id="mainContainer">
        <PageNavigation
          expanded={expanded}
          onExpand={onExpand}
          header={header}
          links={links}
        />
        <div className="page-content scroll-bar m-1">
          <div className="container-fluid mt-2">{children}</div>
        </div>
      </div>
    </>
  );
};

PageContainer.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  header: PropTypes.object,
  links: PropTypes.array,
};

export default PageContainer;
