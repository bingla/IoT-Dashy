import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/header/Header";
import HomePage from "../pages/homePage/HomePage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import AdminPage from "../pages/adminPage/AdminPage";
import "./app.css";

const initWidgets = [
  {
    id: 1,
    icon: "fas fa-charging-station",
    type: "BarChart",
    title: "Bar Chart",
    content: "This is some tests for bar chart",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Juni",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      data: [65, 59, 80, 81, 56, 68, 65, 59, 80, 81, 56, 68],
    },
  },
  {
    id: 2,
    icon: "fas fa-charging-station",
    type: "LineChart",
    title: "Line Chart",
    content: "This is some tests for line chart",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Juni",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      data: [65, 59, 80, 81, 56, 68, 65, 59, 80, 81, 56, 68],
    },
  },
  {
    id: 3,
    icon: "fas fa-charging-station",
    type: "DoughnutChart",
    title: "Doughnut Chart",
    content: "This is some tests for doughnut chart",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      data: [65, 59, 80, 81, 200],
    },
  },
  {
    id: 4,
    icon: "fas fa-charging-station",
    type: "PieChart",
    title: "Pie Chart",
    content: "This is some tests for pie chart",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      data: [65, 59, 80, 81, 56],
    },
  },
  {
    id: 5,
    icon: "fas fa-charging-station",
    type: "Test",
    title: "Header 5",
    content: " dfg fd",
    data: {},
  },
  {
    id: 6,
    icon: "fas fa-charging-station",
    type: "",
    title: "Header 6",
    content: "d fgd fg",
    data: {},
  },
];

function App() {
  const [expanded, setExpanded] = useState(true);
  const [widgets, setWidgets] = useState(initWidgets);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/admin">
            <AdminPage expanded={expanded} onExpand={handleExpand} />
          </Route>
          <Route path="/dashboards">
            <DashboardPage
              expanded={expanded}
              onExpand={handleExpand}
              widgets={widgets}
            />
          </Route>
          <Route path="/">
            <HomePage expanded={expanded} onExpand={handleExpand} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
