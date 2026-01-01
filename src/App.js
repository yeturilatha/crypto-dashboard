import React from "react";
import { CryptoProvider } from "./context/CryptoContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <CryptoProvider>
      <Dashboard />
    </CryptoProvider>
  );
}

export default App;
