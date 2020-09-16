import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { randomHsl } from "../../../../helpers/generateHsl";
import { convertHslToHex } from "../../../../helpers/convertHslToHex";

const BarChartWidget = ({ labels, data }) => {
  const handleData = () => {
    const hslBackgroundColor = randomHsl(data.length);
    const hslBackgroundColorHover = hslBackgroundColor.map((hsl) => {
      return { ...hsl, lightness: Math.floor(hsl.lightness - 30) };
    });

    return {
      labels: labels,
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: convertHslToHex(hslBackgroundColor),
          hoverBackgroundColor: convertHslToHex(hslBackgroundColorHover),
          data: data,
        },
      ],
    };
  };

  return (
    <Bar
      data={handleData}
      options={{
        title: {
          display: false,
          text: "Average Rainfall per month",
          fontSize: 20,
        },
        legend: {
          display: false,
          position: "bottom",
        },
      }}
    />
  );
};

BarChartWidget.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
};

export default BarChartWidget;
