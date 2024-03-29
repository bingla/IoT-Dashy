import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageContainer from "../../pages/PageContainer";
import IAMPage from "../iamPage/IAMPage";
import EventsPage from "../eventsPage/EventsPage";

const AdminPage = ({ expanded, onExpand }) => {
  const match = useRouteMatch();
  const header = {
    title: "Admin",
    icon: "fas fa-user-shield",
    expanded: true,
  };
  const links = [
    { id: 1, title: "IAM", icon: "fas fa-shield-alt", link: "/iam" },
    { id: 2, title: "Events", icon: "fas fa-bell", link: "/events" },
    { id: 3, title: "Statistics", icon: "fas fa-chart-pie", link: "/stats" },
    { id: 4, title: "Billing", icon: "fas fa-credit-card", link: "/billing" },
    { id: 5, title: "Support", icon: "fas fa-user-md", link: "/support" },
  ];

  return (
    <PageContainer
      expanded={expanded}
      onExpand={onExpand}
      header={header}
      links={links}
    >
      <Switch>
        <Route path={`${match.url}/iam`}>
          <IAMPage />
        </Route>
        <Route path={`${match.url}/events`}>
          <EventsPage />
        </Route>
        <Route path={match.path}>
          <div className="row">
            <div className="col-md-12">
              <h5>Admin Page</h5>
              <p>Some admin test here</p>
            </div>
          </div>
        </Route>
      </Switch>
    </PageContainer>
  );
};

AdminPage.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
};

export default AdminPage;
