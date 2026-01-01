import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const PriceChart = ({ prices }) => {
  const data = {
    labels: prices.map((price) =>
      new Date(price[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: prices.map((price) => price[1]),
        borderColor: "#1976d2",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default PriceChart;
