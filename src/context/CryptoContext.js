import React, { createContext, useState, useEffect } from "react";
import {
  fetchMarketChart,
  fetchTopGainer,
  fetchTopLoser,
} from "../services/coingeckoApi";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [days, setDays] = useState(7);
  const [marketData, setMarketData] = useState(null);
  const [topGainer, setTopGainer] = useState(null);
  const [topLoser, setTopLoser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch historical data
  useEffect(() => {
    const loadMarketData = async () => {
      setLoading(true);
      const data = await fetchMarketChart(selectedCoin, days);
      setMarketData(data);
      setLoading(false);
    };
    loadMarketData();
  }, [selectedCoin, days]);

  // Fetch gainer & loser once
  useEffect(() => {
    const loadGainersLosers = async () => {
      const gainer = await fetchTopGainer();
      const loser = await fetchTopLoser();
      setTopGainer(gainer);
      setTopLoser(loser);
    };
    loadGainersLosers();
  }, []);

  return (
    <CryptoContext.Provider
      value={{
        selectedCoin,
        setSelectedCoin,
        days,
        setDays,
        marketData,
        topGainer,
        topLoser,
        loading,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
