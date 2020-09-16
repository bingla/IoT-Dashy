import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import { randomHsl } from "../../../../helpers/generateHsl";
import { convertHslToHex } from "../../../../helpers/convertHslToHex";

const DoughnutChartWidget = ({ labels, data }) => {
  const handleData = () => {
    const hslBackgroundColor = randomHsl(data.length);
    const hslBackgroundColorHover = hslBackgroundColor.map((hsl) => {
      return { ...hsl, lightness: Math.floor(hsl.lightness - 30) };
    });

    return {
      labels: labels,
      datasets: [
        {
          backgroundColor: convertHslToHex(hslBackgroundColor),
          hoverBackgroundColor: convertHslToHex(hslBackgroundColorHover),
          data: data,
        },
      ],
    };
  };
  return (
    <div>
      <Doughnut
        data={handleData}
        options={{
          title: {
            display: false,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
};

DoughnutChartWidget.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
};

export default DoughnutChartWidget;
