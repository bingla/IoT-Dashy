import React from "react";

const titleStyle = { fontSize: "50px", fontWeight: 700, color: "grey" };
const bylineStyle = { fontWeight: 500, color: "grey" };
const contentStyle = { margin: "0 50px 0 50px", fontSize: "13px" };

// Default widget
// Displayed of to widget type match
const DefaultWidget = () => {
  return (
    <div>
      <h2 className="text-center" style={titleStyle}>
        404
      </h2>
      <p className="text-center" style={bylineStyle}>
        Widget not found
      </p>
      <div className="text-center" style={contentStyle}>
        <p>
          <b>It's not you, it's us :'(</b>
        </p>
        <hr />
        <p>
          We have alerted the code monkeys of the problem, you don't have to do
          anything.
        </p>

        <hr />
      </div>
    </div>
  );
};

export default DefaultWidget;
