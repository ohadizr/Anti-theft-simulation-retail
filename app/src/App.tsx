import React from "react";
import "./App.css";
import StoreLayOut from "../src/components/StoreLayOut";
import CartRoutes from "../src/components/cart/CartRoutes";
import DashBoard from "./components/DashBoard";
import { useGlobalState } from "./GlobalContext";
function App() {
  return (
    <div className="mainContainer">
      <StoreLayOut />
      <DashBoard />
    </div>
  );
}

export default App;
