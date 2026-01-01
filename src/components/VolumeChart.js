import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const VolumeChart = ({ volumes }) => {
  const data = {
    labels: volumes.map((v) =>
      new Date(v[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Volume",
        data: volumes.map((v) => v[1]),
        backgroundColor: "#90caf9",
      },
    ],
  };

  return <Bar data={data} />;
};

export default VolumeChart;
