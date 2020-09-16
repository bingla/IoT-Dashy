import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageContainer from "../PageContainer";

const HomePage = ({ expanded, onExpand }) => {
  const match = useRouteMatch();
  const sideMenu = {
    header: { title: "Home", icon: "fas fa-laptop-house", expanded: true },
    links: [
      { id: 1, title: "Dashboards", icon: "fas fa-columns", link: "/" },
      { id: 2, title: "Statistics", icon: "fas fa-chart-pie", link: "/" },
      { id: 3, title: "Billing", icon: "fas fa-credit-card", link: "/" },
      { id: 4, title: "IAM & Admin", icon: "fas fa-shield-alt", link: "/" },
      { id: 5, title: "Support", icon: "fas fa-user-md", link: "/" },
    ],
  };

  return (
    <PageContainer
      expanded={expanded}
      onExpand={onExpand}
      header={sideMenu.header}
      links={sideMenu.links}
    >
      <Switch>
        <Route path={match.path}>
          <div className="row">
            <div className="col-md-12">
              <h5>Welcome</h5>
              <p>There has to be some content here, yes?</p>
            </div>
          </div>
        </Route>
      </Switch>
    </PageContainer>
  );
};

HomePage.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default HomePage;
