import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Practice = () => {
  const chartData = {
    labels: ["Android", "iOS"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#38C1F0", "#242A30"],
        borderColor: ["#38C1F0", "#242A30"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        align: "center",
        font: {
          size: 30,
          weight: "bold",
        },
        color: "#fff",
        formatter: (value) => `${value}%`,
        padding: 10,
        borderRadius: 5,
      },
    },
  };

  return (
    <div>
      <div style={{ width: "300px", height: "400px" }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Practice;
