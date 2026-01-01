import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TopGainerCard = ({ data }) => {
  if (!data) return null;

  return (
    <Card sx={{ borderLeft: "5px solid green" }}>
      <CardContent>
        <Typography variant="h6">
          <ArrowUpwardIcon color="success" /> Top Gainer
        </Typography>
        <Typography>{data.name}</Typography>
        <Typography>${data.current_price}</Typography>
        <Typography color="green">
          {data.price_change_percentage_24h.toFixed(2)}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TopGainerCard;
