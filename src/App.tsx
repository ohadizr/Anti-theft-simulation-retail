import React from 'react';
import './App.css';
import StoreLayOut from '../src/components/StoreLayOut';
import CartRoutes from '../src/components/cart/CartRoutes';
function App() {
  
  return (
    <div className="mainContainer">
      {/* <StoreLayOut 
      /> */}
      <CartRoutes />
    </div>
  );
}

export default App;
