import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { format } from "date-fns";

const EventRealtimeData = () => {
  const handleData = () => {
    const numDataPoints = 100;
    let successfullEvents = [];
    let errorEvents = [];
    let triggerEvents = [];
    let labels = [];
    let startDate = new Date();
    startDate.setDate(new Date().getDate() - numDataPoints);
    for (let i = 0; i < numDataPoints; i++) {
      successfullEvents.push(Math.floor(Math.random() * 50) + 50);
      errorEvents.push(Math.floor(Math.random() * 20));
      if (Math.random() > 0.8) {
        triggerEvents.push(Math.floor(Math.random() * 5) + 2);
      } else {
        triggerEvents.push(0);
      }

      labels.push(
        format(new Date().setDate(startDate.getDate() + i), "MM/dd-yy")
      );
    }

    return {
      labels: labels,
      datasets: [
        {
          barPercentage: 0.95,
          categoryPercentage: 1,
          label: "Sucessful",
          backgroundColor: "#0e9819d9",
          hoverBackgroundColor: "#03ca09",
          data: successfullEvents,
        },
        {
          barPercentage: 0.95,
          categoryPercentage: 1,
          label: "Failed",
          backgroundColor: "#dc3545",
          hoverBackgroundColor: "#ea3131",
          data: errorEvents,
        },
        {
          barPercentage: 0.95,
          categoryPercentage: 1,
          label: "Trigger",
          backgroundColor: "#ffc107",
          hoverBackgroundColor: "#ffd24b",
          data: triggerEvents,
        },
      ],
    };
  };

  return (
    <Bar
      height={50}
      data={handleData()}
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
        tooltips: {
          callbacks: {
            label: (tooltipItem, data) => {
              return `${tooltipItem.value} ${
                data.datasets[tooltipItem.datasetIndex].label
              } events`;
            },
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default EventRealtimeData;
