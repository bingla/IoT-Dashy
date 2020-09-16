import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const LineChartWidget = ({ labels, data }) => {
  const handleData = () => {
    return {
      labels: labels,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: data,
        },
      ],
    };
  };
  return (
    <div>
      <Line
        data={handleData}
        options={{
          title: {
            display: false,
            text: "Average Rainfall per month",
            fontSize: 17,
          },
          legend: {
            display: false,
            position: "right",
          },
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

LineChartWidget.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
};

export default LineChartWidget;
