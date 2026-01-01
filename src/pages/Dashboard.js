import React, { useContext } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { CryptoContext } from "../context/CryptoContext";
import CryptoSelector from "../components/CryptoSelector";
import TimeRangeSelector from "../components/TimeRangeSelector";
import PriceChart from "../components/PriceChart";
import VolumeChart from "../components/VolumeChart";
import TopLoserCard from "../components/TopLoserCard";
import TopGainerCard from "../components/TopGainerCard";

const Dashboard = () => {
  const { marketData, loading, topGainer, topLoser } =
    useContext(CryptoContext);

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CryptoSelector />
        <TimeRangeSelector />
      </Grid>

      {marketData && (
        <>
          <Grid item xs={12}>
            <PriceChart prices={marketData.prices} />
          </Grid>
          <Grid item xs={12}>
            <VolumeChart volumes={marketData.total_volumes} />
          </Grid>
        </>
      )}

      <Grid item xs={6}>
        <TopGainerCard data={topGainer} />
      </Grid>
      <Grid item xs={6}>
        <TopLoserCard data={topLoser} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
