import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { FormControl, Select, MenuItem } from "@mui/material";

const CryptoSelector = () => {
  const { selectedCoin, setSelectedCoin } = useContext(CryptoContext);

  return (
    <FormControl fullWidth>
      <Select
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
      >
        <MenuItem value="bitcoin">Bitcoin</MenuItem>
        <MenuItem value="ethereum">Ethereum</MenuItem>
        <MenuItem value="solana">Solana</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CryptoSelector;
