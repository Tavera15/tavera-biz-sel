import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import TavNarBar from './Components/TavNavBar';
import CartPage from './Pages/CartPage';

import HPInk from "./Products/HPInk.json";
import HPToner from "./Products/HPToner.json";

import BrotherInk from "./Products/BrotherInk.json";
import BrotherToner from "./Products/BrotherToner.json";

import CanonInk from "./Products/CanonInk.json";
import CanonToner from "./Products/CanonToner.json";

import EpsonInk from "./Products/EpsonInk.json";

import ODInk from "./Products/ODInk.json";
import ODToner from "./Products/ODToner.json";

function App() {
  
  const inkDiscount = 10;

  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState({});

  const [HPInknToner, setHP] = useState([]);
  const [BrotherInknToner, setBrother] = useState([]);
  const [CanonInknToner, setCanon] = useState([]);
  const [ODInknToner, setOD] = useState([]);
  const [Epson, setEpson] = useState([]);

  useEffect(() => {
    if  (
            HPInk.length > 0 && HPToner.length > 0
            && BrotherInk.length > 0 && BrotherToner.length > 0
            && CanonInk.length > 0 && CanonToner.length > 0
            && ODInk.length > 0 && ODToner.length > 0
            && EpsonInk.length > 0
            && !isLoaded
        )
    {
        setHP(HPInknToner.concat(HPInk, HPToner));
        setBrother(BrotherInknToner.concat(BrotherInk, BrotherToner));
        setCanon(CanonInknToner.concat(CanonInk, CanonToner));
        setOD(ODInknToner.concat(ODInk, ODToner));
        setEpson(Epson.concat(EpsonInk));

        const data = {
          ink: {
            "hp": HPInknToner.concat(HPInk, HPToner),
            "brother": BrotherInknToner.concat(BrotherInk, BrotherToner),
            "canon": CanonInknToner.concat(CanonInk, CanonToner),
            "od": ODInknToner.concat(ODInk, ODToner),
            "epson": EpsonInk
          }
        }

        for(let k in data.ink)
        {
            for(let val in data.ink[k])
            {
                data.ink[k][val].discount = inkDiscount;
            }
        };

        setProducts(data);
        setIsLoaded(true);
    }

},[isLoaded])

  function addToCart(e, item)
  {
      e.preventDefault()
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
        <div className='container col-6 col-sm-3 col-md-3 col-lg-2'>
          <img src="/TaveraLogo.png" className='col-12' alt='logo'/>
        </div>
        <Router>
            <TavNarBar />
            <Routes>
              <Route exact path='/' element={<HomePage addToCart={(e, item) => addToCart(e, item)} />} />
              <Route exact path='/cart' element={<CartPage cart={cart} removeFromCart={(e, item) => removeFromCart(e, item)} />} />
              <Route path='/Products/:category/:brand' element={<ProductsPage products={products} isLoaded={isLoaded} addToCart={(e, item) => addToCart(e, item)} />} />
            </Routes>
        </Router>
      </div>
  )
}

export default App
