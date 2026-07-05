import { useState } from "react";
import { getCoinPrice } from "../services/cryptoApi";

function AddCoinForm({ addCoin }) {
  const [coin, setCoin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentPrice = await getCoinPrice(coin);

    const newCoin = {
      coin,
      quantity: Number(quantity),
      buyPrice: Number(buyPrice),
      currentPrice,
    };

    addCoin(newCoin);

    setCoin("");
    setQuantity("");
    setBuyPrice("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">
        Add Cryptocurrency
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Coin Name (bitcoin, ethereum, solana)"
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Coin
        </button>
      </form>
    </div>
  );
}

export default AddCoinForm;