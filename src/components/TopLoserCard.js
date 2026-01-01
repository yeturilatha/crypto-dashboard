import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TopLoserCard = ({ data }) => {
  if (!data) return null;

  return (
    <Card sx={{ borderLeft: "5px solid red" }}>
      <CardContent>
        <Typography variant="h6">
          <ArrowDownwardIcon color="error" /> Top Loser
        </Typography>
        <Typography>{data.name}</Typography>
        <Typography>${data.current_price}</Typography>
        <Typography color="red">
          {data.price_change_percentage_24h.toFixed(2)}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TopLoserCard;
