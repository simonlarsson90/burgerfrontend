import React, { Component } from 'react';
import { render } from 'react-dom';

import { PriceList } from './components/PriceList';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';

import "./App.css"

const App = () => {
  return (
    <CartProvider>
      <div>
        <Cart />
        <PriceList />
      </div>
    </CartProvider>
  )
}

export default App;









