import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageContainer from "../PageContainer";

const HomePage = ({ expanded, onExpand }) => {
  const match = useRouteMatch();
  const header = { title: "Home", icon: "fas fa-laptop-house", expanded: true };
  const links = [
    {
      id: 1,
      title: "Dashboards",
      icon: "fas fa-columns",
      link: "dashboards",
    },
    { id: 2, title: "Logs", icon: "fas fa-tasks", link: "admin/logs" },
    {
      id: 4,
      title: "Billing",
      icon: "fas fa-credit-card",
      link: "admin/billing",
    },
    {
      id: 5,
      title: "IAM",
      icon: "fas fa-shield-alt",
      link: "admin/iam",
    },
    { id: 6, title: "Support", icon: "fas fa-user-md", link: "admin" },
  ];

  return (
    <PageContainer
      expanded={expanded}
      onExpand={onExpand}
      header={header}
      links={links}
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
