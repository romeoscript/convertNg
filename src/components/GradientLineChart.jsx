import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const GradientLineChart = () => {
  // Sample data for the chart
  const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"];
  const data = {
    labels,
    datasets: [
      {
        label: "ETH to BTC",
        data: [0.0325, 0.0324, 0.0323, 0.0326, 0.0324, 0.0322],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          // Create gradient
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(255, 99, 132, 0.1)");
          gradient.addColorStop(1, "rgba(255, 99, 132, 0.5)");
          return gradient;
        },
        tension: 0.4, // Smooth curve
        fill: true, // Fill the area under the line
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff", // White labels
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines
        },
        ticks: {
          color: "#fff", // White labels
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        backgroundColor: "rgba(30, 30, 30, 0.8)",
        bodyColor: "#fff",
        titleColor: "#fff",
      },
    },
  };

  return (
    <div className="relative w-full h-[400px] bg-[#1E1E1E] rounded-lg p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default GradientLineChart;
