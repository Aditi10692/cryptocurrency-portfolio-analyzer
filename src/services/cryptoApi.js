import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoinPrice = async (coin) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/simple/price`,
      {
        params: {
          ids: coin.toLowerCase(),
          vs_currencies: "usd",
        },
      }
    );

    return response.data[coin.toLowerCase()]?.usd || 0;
  } catch (error) {
    console.error("Error fetching coin price:", error);
    return 0;
  }
};