import React, { useState, useEffect } from "react";
import TestImage from "./test-pattern.png";

// Test widget
// A development widget to test things with
const TestWidget = ({ data }) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Set up interval
    const interval = setInterval(() => {
      const newDate = new Date();
      setDate(newDate.toLocaleTimeString());
    }, 1000);

    // Clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={TestImage} className="img-fluid" alt="" />
      <h5 className="text-center">
        <span className="badge badge-secondary">
          Sending will resume in 2 hours
        </span>
        <br />
        <span className="badge badge-warning">{date}</span>
      </h5>
    </div>
  );
};

export default TestWidget;
