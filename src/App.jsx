import React, { useState } from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import TavNarBar from './Components/TavNavBar';
import CartPage from './Pages/CartPage';


function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(e, item)
  {
      console.log(item)
      setCart(prev => [...prev, item]);
  }

  function removeFromCart(e, item)
  {
      const res = [];

      for(let i in cart)
      {
          const cartItem = cart[i];

          if(cartItem.sku === item.sku) {continue;}

          res.push(cartItem);
      }

      setCart(res);
  }

  return (
      <div className='min-vh-100 bg-dark'>
        <Router>
          <TavNarBar />
          <Routes>
            <Route exact path='/' element={<HomePage addToCart={(e, item) => addToCart(e, item)} />} />
            <Route exact path='/cart' element={<CartPage cart={cart} removeFromCart={(e, item) => removeFromCart(e, item)} />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
