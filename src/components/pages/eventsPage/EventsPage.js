import React, { useState } from "react";
import { format } from "date-fns";

import PageHeader from "../../common/PageHeader";
import EventRealtimeData from "../../common/events/EventRealtimeData";
import EventHistoricalData from "../../common/events/EventHistoricalData";

const EVENTDATA_ACTION_UPDATE = "EVENTDATA_ACTION_UPDATE";
const EVENTDATA_ACTION_TRIGGER = "EVENTDATA_ACTION_TRIGGER";

const EVENTDATA_STATUS_ALL = "EVENTDATA_STATUS_ALL";
const EVENTDATA_STATUS_SUCCESS = "EVENTDATA_STATUS_SUCCESS";
const EVENTDATA_STATUS_FAILURE = "EVENTDATA_STATUS_FAILURE";
const EVENTDATA_STATUS_WARNING = "EVENTDATA_STATUS_WARNING";
const EVENTDATA_STATUS_INFO = "EVENTDATA_STATUS_INFO";

const eventDefault = [
  {
    sensorId: 1,
    action: EVENTDATA_ACTION_UPDATE,
    dateTime: new Date(),
    info: "Writing sensor data",
    status: EVENTDATA_STATUS_SUCCESS,
  },
  {
    sensorId: 2,
    action: EVENTDATA_ACTION_UPDATE,
    dateTime: new Date(),
    info: "Writing sensor data",
    status: EVENTDATA_STATUS_FAILURE,
  },
  {
    sensorId: 3,
    action: EVENTDATA_ACTION_TRIGGER,
    dateTime: new Date(),
    info: "Rule: 'value larger than 10'",
    status: EVENTDATA_STATUS_INFO,
  },
  {
    sensorId: 4,
    action: EVENTDATA_ACTION_UPDATE,
    dateTime: new Date(),
    info: "Value recieved but sensor not configured",
    status: EVENTDATA_STATUS_WARNING,
  },
  {
    sensorId: 1,
    action: EVENTDATA_ACTION_UPDATE,
    dateTime: new Date(),
    info: "Writing sensor data",
    status: EVENTDATA_STATUS_SUCCESS,
  },
  {
    sensorId: 6,
    action: EVENTDATA_ACTION_UPDATE,
    dateTime: new Date(),
    info: "Writing sensor data",
    status: EVENTDATA_STATUS_SUCCESS,
  },
];

const tabDefault = [
  { label: "all events", status: EVENTDATA_STATUS_ALL, active: true },
  { label: "successes", status: EVENTDATA_STATUS_SUCCESS, active: false },
  { label: "failures", status: EVENTDATA_STATUS_FAILURE, active: false },
  { label: "warnings", status: EVENTDATA_STATUS_WARNING, active: false },
  { label: "triggers", status: EVENTDATA_STATUS_INFO, active: false },
];

const EventsPage = () => {
  const [eventData, setEventData] = useState(eventDefault);
  const [tabItems, setTabItems] = useState(tabDefault);

  const onHandleTabClick = (e, status) => {
    e.stopPropagation();

    const label = e.target.textContent;
    const newTabs = tabItems.map((tab) => {
      return tab.label == label
        ? { ...tab, active: true }
        : { ...tab, active: false };
    });
    setTabItems(newTabs);
    setEventListData(status);
  };

  const setEventListData = (status) => {
    let newData = [];
    if (status == EVENTDATA_STATUS_ALL) {
      newData = [...eventDefault];
    } else {
      newData = [...eventDefault].filter((item) => {
        return item.status == status;
      });
    }
    setEventData([...newData]);
  };

  const getEventStateBadge = (state) => {
    switch (state) {
      case EVENTDATA_STATUS_FAILURE:
        return <span className="badge bg-danger text-light">Failed</span>;
      case EVENTDATA_STATUS_WARNING:
        return <span className="badge bg-warning text-dark">Warning</span>;
      case EVENTDATA_STATUS_INFO:
        return <span className="badge bg-info text-light">Info</span>;
      default:
        return <span className="badge bg-success text-light">Success</span>;
    }
  };

  return (
    <div>
      <PageHeader title="Events" />
      <br />
      <h1>Events</h1>
      <p>This is some text I have on this page</p>

      <h4 className="mb-4">Realtime graph</h4>
      <EventRealtimeData />
      <br />
      <br />

      <h4 className="mb-4">Historical graph</h4>
      <EventHistoricalData />
      <br />
      <br />

      <ul className="nav nav-tabs nav-fill">
        {tabItems.map((item, i) => {
          return (
            <li key={i} className="nav-item">
              {item.active ? (
                <a
                  className="nav-link active"
                  style={{ fontWeight: "bold" }}
                  aria-current="page"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => onHandleTabClick(e, item.status)}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <div className="py-5 mx-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SensorId#</th>
              <th scope="col">Action</th>
              <th scope="col">Date & Time</th>
              <th scope="col">Info</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {eventData.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.sensorId}</th>
                  <td>
                    {item.action.replace("EVENTDATA_ACTION_", "").toLowerCase()}
                  </td>
                  <td>{format(item.dateTime, "yyyy-MM-dd")}</td>
                  <td>{item.info}</td>
                  <td>
                    <h5>{getEventStateBadge(item.status)}</h5>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsPage;
