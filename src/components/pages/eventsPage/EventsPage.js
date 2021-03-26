import React, { useState } from "react";
import PageHeader from "../../common/PageHeader";
import EventRealtimeData from "../../common/events/eventRealtimeData";
import EventHistoricalData from "../../common/events/eventHistoricalData";

const EventsPage = () => {
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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Events{" "}
            <span className="badge rounded-pill bg-light text-dark">1</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Success
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Fails
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Triggers
          </a>
        </li>
      </ul>

      <div className="mt-5 mx-4">
        <table class="table">
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
            <tr>
              <th scope="row">1</th>
              <td>Update</td>
              <td>2021-10-10, 10:10.50</td>
              <td>Writing sensor data</td>
              <td>
                <span class="badge bg-success text-light">Success</span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Update</td>
              <td>2021-10-10, 10:10.50</td>
              <td>Writing sensor data</td>
              <td>
                <span class="badge bg-danger text-light">Failed</span>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Trigger</td>
              <td>2021-10-10, 10:09.51</td>
              <td>Rule: 'value larger than 10'</td>
              <td>
                <span class="badge bg-warning text-dark">Warning</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsPage;
