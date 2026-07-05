import { useState } from "react";
import Navbar from "../components/Navbar";
import AddCoinForm from "../components/AddCoinForm";
import PortfolioTable from "../components/PortfolioTable";
import PortfolioChart from "../components/PortfolioChart";

function Dashboard() {
  const [portfolio, setPortfolio] = useState([
    {
      coin: "Bitcoin",
      quantity: 0.5,
      buyPrice: 95000,
      currentPrice: 118000,
    },
    {
      coin: "Ethereum",
      quantity: 2,
      buyPrice: 5000,
      currentPrice: 6200,
    },
  ]);

  const addCoin = (newCoin) => {
    setPortfolio([...portfolio, newCoin]);
  };

  const deleteCoin = (indexToDelete) => {
    setPortfolio(
      portfolio.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  const portfolioValue = portfolio.reduce(
    (total, coin) =>
      total + coin.currentPrice * coin.quantity,
    0
  );

  const totalProfitLoss = portfolio.reduce(
    (total, coin) =>
      total +
      (coin.currentPrice - coin.buyPrice) *
        coin.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">
          Cryptocurrency Portfolio Dashboard
        </h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Portfolio Value
            </h3>

            <p className="text-2xl font-bold">
              ${portfolioValue.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Profit / Loss
            </h3>

            <p
              className={`text-2xl font-bold ${
                totalProfitLoss >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ${totalProfitLoss.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Assets Held
            </h3>

            <p className="text-2xl font-bold">
              {portfolio.length} Coins
            </p>
          </div>
        </div>

        {/* Add Coin Form */}
        <AddCoinForm addCoin={addCoin} />

        {/* Portfolio Table */}
        <PortfolioTable
          portfolio={portfolio}
          deleteCoin={deleteCoin}
        />

        {/* Pie Chart */}
        <PortfolioChart portfolio={portfolio} />
      </div>
    </>
  );
}

export default Dashboard;