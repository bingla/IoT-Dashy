import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageContainer from "../PageContainer";
import TemplateWidget from "../../common/widgets/TemplateWidget";

const DashboardPage = ({ expanded, onExpand, widgets }) => {
  const match = useRouteMatch();
  const header = {
    title: "Dashboards",
    icon: "fas fa-columns",
    expanded: true,
  };
  const links = [
    { id: 1, title: "Sensors", icon: "fas fa-wifi", link: "/sensors" },
    { id: 2, title: "Support", icon: "fas fa-user-md", link: "/support" },
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
              <h5>Test</h5>
              <p>Some test</p>
            </div>
          </div>
          <div className="row">
            {widgets.map((widget) => (
              <TemplateWidget
                key={widget.id}
                type={widget.type}
                title={widget.title}
                icon={widget.icon}
                content={widget.content}
                data={widget.data}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </PageContainer>
  );
};

DashboardPage.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onExpand: PropTypes.func.isRequired,
  widgets: PropTypes.array.isRequired,
};

export default DashboardPage;
