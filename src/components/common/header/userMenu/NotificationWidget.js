import React from "react";
import PropTypes from "prop-types";

// TODO: HTML-formatted message is injected straight into page and
// is vunerable for JS-injection. See if there are a fix for this by either:
// * Parse message for whitelisted tags
// * Use stand-in tags, ie %%bold%% - %%/bold%% or some such
// * Use a third party injector
// * Skip formatting all together
const initNotifications = [
  {
    type: "warning",
    date: "2020/01/05, kl 12:31",
    title: "Warning: Sensor off-line",
    message:
      "Sensor '<strong>Fort Nox</strong>' went offline and stayed down for <strong>2h, 3min</strong> before going back up",
  },
  {
    type: "info",
    date: "2020/01/04, kl 12:35",
    title: "Info: Alarm triggered",
    message:
      "Alarm '<strong>GPS</strong>' for Sensor '<strong>Golfbanan i Ystad</strong>' was triggered",
  },
  {
    type: "success",
    date: "2020/01/01, kl 7:35",
    title: "Success: New Sensor",
    message: "A new Sensor '<strong>Den röda gräsklipparen</strong>' was found",
  },
  {
    type: "danger",
    date: "2020/01/05, kl 12:31",
    title: "Warning: Sensor off-line",
    message:
      "Sensor '<strong>Fort Nox</strong>' went offline and hasn't gone up again",
  },
];

const NotificationWidget = ({ handleClick, expanded }) => {
  const getIconByType = (type) => {
    switch (type) {
      case "success":
        return "far fa-thumbs-up";
      case "info":
        return "fas fa-info-circle";
      case "warning":
        return "fas fa-exclamation-triangle";
      case "danger":
        return "fas fa-exclamation-triangle";
    }
  };
  const handleExpansion = (event) => {
    event.preventDefault();
    handleClick();
  };
  return (
    <div id="notificationWidget">
      <a href="#2" onClick={handleExpansion}>
        <i className="fas fa-bell"></i>
        <span className="badge badge-danger">+3</span>
      </a>
      <div className={`body box-shadow rounded ${expanded ? "expanded" : ""}`}>
        <div className="scroll-bar m-2 p-2" style={{ height: "400px" }}>
          {initNotifications.map((notification) => {
            return (
              <div className={`alert alert-${notification.type} mb-2`}>
                <i className={`${getIconByType(notification.type)} mr-3`}></i>
                <strong>{notification.title}</strong>
                <br />
                <small>
                  <i>{notification.date}</i>
                </small>
                <br />
                <small
                  dangerouslySetInnerHTML={{ __html: notification.message }}
                ></small>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="btn btn-outline-secondary btn-sm m-2">
            View all
          </button>
          <button className="btn btn-primary btn-sm m-2">
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};

NotificationWidget.propTypes = {
  handleClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default NotificationWidget;
