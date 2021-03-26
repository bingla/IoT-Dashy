import React, { useState } from "react";
import AboutWidget from "./AboutWidget";
import NotificationWidget from "./NotificationWidget";
import EditWidget from "./EditWidget";
import UserWidget from "./UserWidget";

import "./userMenu.css";

const UserMenu = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [notificationsExpanded, setNotificationsExpanded] = useState(false);
  const [userExpanded, setUserExpanded] = useState(false);

  const handleAboutExpanded = () => {
    setAboutExpanded(!aboutExpanded);
    setNotificationsExpanded(false);
    setUserExpanded(false);
  };
  const handleNotificationsExpanded = () => {
    setNotificationsExpanded(!notificationsExpanded);
    setAboutExpanded(false);
    setUserExpanded(false);
  };
  const handleUserExpanded = () => {
    setUserExpanded(!userExpanded);
    setAboutExpanded(false);
    setNotificationsExpanded(false);
  };
  return (
    <div id="userMenu">
      <ul className="list-unstyled clearfix">
        <li>
          <AboutWidget
            handleClick={handleAboutExpanded}
            expanded={aboutExpanded}
          />
        </li>
        <li>
          <NotificationWidget
            handleClick={handleNotificationsExpanded}
            expanded={notificationsExpanded}
          />
        </li>
        <li>
          <EditWidget />
        </li>
        <li>
          <UserWidget
            handleClick={handleUserExpanded}
            expanded={userExpanded}
          />
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
