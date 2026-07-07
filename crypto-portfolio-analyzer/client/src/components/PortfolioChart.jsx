import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PortfolioChart({ portfolio }) {
  const data = {
    labels: portfolio.map((coin) => coin.coin),

    datasets: [
      {
        label: "Portfolio Allocation",

        data: portfolio.map(
          (coin) => coin.currentPrice * coin.quantity
        ),

        backgroundColor: [
          "#F7931A", // Bitcoin Orange
          "#627EEA", // Ethereum Blue
          "#14F195", // Solana Green
          "#0033AD", // Cardano Blue
          "#C2A633", // Dogecoin Gold
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#8BC34A",
        ],

        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },

      title: {
        display: true,
        text: "Portfolio Allocation",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Portfolio Allocation
      </h2>

      <div className="max-w-lg mx-auto">
        <Pie
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default PortfolioChart;