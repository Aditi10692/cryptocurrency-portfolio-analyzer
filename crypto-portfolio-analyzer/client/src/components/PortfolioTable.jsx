function PortfolioTable({ portfolio, deleteCoin }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Portfolio Holdings
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left p-3">Coin</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Buy Price</th>
              <th className="text-left p-3">Current Price</th>
              <th className="text-left p-3">Profit/Loss</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {portfolio.map((coin, index) => {
              const profitLoss =
                (coin.currentPrice - coin.buyPrice) *
                coin.quantity;

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 capitalize">
                    {coin.coin}
                  </td>

                  <td className="p-3">
                    {coin.quantity}
                  </td>

                  <td className="p-3">
                    ${coin.buyPrice}
                  </td>

                  <td className="p-3">
                    ${coin.currentPrice}
                  </td>

                  <td
                    className={`p-3 font-semibold ${
                      profitLoss >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {profitLoss >= 0
                      ? `Profit: $${profitLoss.toFixed(2)}`
                      : `Loss: $${Math.abs(
                          profitLoss
                        ).toFixed(2)}`}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() =>
                        deleteCoin(index)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {portfolio.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No cryptocurrencies added yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default PortfolioTable;