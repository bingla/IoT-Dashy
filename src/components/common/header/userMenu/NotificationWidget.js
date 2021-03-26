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
    id: 1,
    type: "warning",
    date: "2020/01/05, kl 12:31",
    title: "Warning: Sensor off-line",
    message:
      "Sensor '<strong>Fort Nox</strong>' went offline and stayed down for <strong>2h, 3min</strong> before going back up",
  },
  {
    id: 2,
    type: "info",
    date: "2020/01/04, kl 12:35",
    title: "Info: Alarm triggered",
    message:
      "Alarm '<strong>GPS</strong>' for Sensor '<strong>Golfbanan i Ystad</strong>' was triggered",
  },
  {
    id: 3,
    type: "success",
    date: "2020/01/01, kl 7:35",
    title: "Success: New Sensor",
    message: "A new Sensor '<strong>Den röda gräsklipparen</strong>' was found",
  },
  {
    id: 4,
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
      case "info":
        return "fas fa-info-circle";
      case "warning":
        return "fas fa-exclamation-triangle";
      case "danger":
        return "fas fa-exclamation-triangle";
      case "success":
      default:
        return "far fa-thumbs-up";
    }
  };
  const handleNotificationCount = (notifications) => {
    const count = notifications.length;
    if (count > 9) {
      return "+9";
    }
    return count;
  };
  const handleExpansion = (event) => {
    event.preventDefault();
    handleClick();
  };
  return (
    <div id="notificationWidget">
      <a href="#2" onClick={handleExpansion} aria-label="Notifications">
        <i className="fas fa-bell"></i>
        {initNotifications.length > 0 && (
          <span className="badge badge-danger">
            {handleNotificationCount(initNotifications)}
          </span>
        )}
      </a>
      <div className={`body box-shadow rounded ${expanded ? "expanded" : ""}`}>
        <div className="scroll-bar m-2 p-2" style={{ height: "400px" }}>
          {initNotifications.map((notification) => {
            return (
              <div
                key={notification.id}
                className={`alert alert-${notification.type} mb-2`}
              >
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
