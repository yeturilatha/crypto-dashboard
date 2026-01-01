import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { ButtonGroup, Button } from "@mui/material";

const TimeRangeSelector = () => {
  const { setDays } = useContext(CryptoContext);

  return (
    <ButtonGroup>
      <Button onClick={() => setDays(7)}>7 Days</Button>
      <Button onClick={() => setDays(14)}>14 Days</Button>
      <Button onClick={() => setDays(30)}>30 Days</Button>
    </ButtonGroup>
  );
};

export default TimeRangeSelector;
