import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

// Fetch historical market data
export const fetchMarketChart = async (coinId, days) => {
  const response = await api.get(
    `/coins/${coinId}/market_chart`,
    {
      params: {
        vs_currency: "usd",
        days: days,
      },
    }
  );
  return response.data;
};

// Fetch top gainer
export const fetchTopGainer = async () => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "price_change_percentage_24h_desc",
      per_page: 1,
      page: 1,
    },
  });
  return response.data[0];
};

// Fetch top loser
export const fetchTopLoser = async () => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "price_change_percentage_24h_asc",
      per_page: 1,
      page: 1,
    },
  });
  return response.data[0];
};
