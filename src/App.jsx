import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import TavNarBar from './Components/TavNavBar';
import CartPage from './Pages/CartPage';

import HPInk from "./Products/Ink/HPInk.json";
import HPToner from "./Products/Ink/HPToner.json";
import BrotherInk from "./Products/Ink/BrotherInk.json";
import BrotherToner from "./Products/Ink/BrotherToner.json";
import CanonInk from "./Products/Ink/CanonInk.json";
import CanonToner from "./Products/Ink/CanonToner.json";
import EpsonInk from "./Products/Ink/EpsonInk.json";
import ODInk from "./Products/Ink/ODInk.json";
import ODToner from "./Products/Ink/ODToner.json";

import HPPrinters from "./Products/Printers/HPPrinters.json"
import BrotherPrinters from "./Products/Printers/BrotherPrinters.json";
import EpsonPrinters from "./Products/Printers/EpsonPrinters.json";
import CanonPrinters from "./Products/Printers/Canon.json";

import Chairs from "./Products/Furniture/Chairs.json";
import Desks from "./Products/Furniture/Desks.json";
import CasesnDrawers from "./Products/Furniture/CasesAndDrawers.json";

function App() {
  
  const inkDiscount = 10;
  const techDiscount = 5;
  const furnitureDiscount = 10;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInkLoaded, setInkLoaded] = useState(false);
  const [isPrintersLoaded, setPrintersLoaded] = useState(false);
  const [isFurnitureLoaded, setFurnitureLoaded] = useState(false);

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    setIsLoaded(isInkLoaded && isPrintersLoaded && isFurnitureLoaded);
  }, [isInkLoaded, isPrintersLoaded, isFurnitureLoaded])

  useEffect(() => {
    if  (
            HPInk.length > 0 && HPToner.length > 0
            && BrotherInk.length > 0 && BrotherToner.length > 0
            && CanonInk.length > 0 && CanonToner.length > 0
            && ODInk.length > 0 && ODToner.length > 0
            && EpsonInk.length > 0
            && !isInkLoaded
        )
    {
        const data = {
          ink: {
            "hp": [].concat(HPInk, HPToner),
            "brother": [].concat(BrotherInk, BrotherToner),
            "canon": [].concat(CanonInk, CanonToner),
            "od": [].concat(ODInk, ODToner),
            "epson": EpsonInk
          }
        }

        for(let k in data.ink)
        {
            for(let val in data.ink[k])
            {
                data.ink[k][val].discount = inkDiscount;
            }
        }

        setProducts(data);
        setInkLoaded(true);
    }
  },[isInkLoaded])

  useEffect(() => {
    if(
        HPPrinters.length > 0 && BrotherPrinters.length > 0
        && EpsonPrinters.length && CanonPrinters.length > 0
        && !isPrintersLoaded
      )
      {
        const data = {
            "hp": HPPrinters,
            "brother": BrotherPrinters,
            "epson": EpsonPrinters,
            "canon": CanonPrinters
        }

        for(let k in data)
        {
            for(let val in data[k])
            {
                data[k][val].discount = techDiscount;
            }
        }

        setProducts(prev => ({...prev, "printers": data}));
        setPrintersLoaded(true);
      }
  },[isPrintersLoaded])

  useEffect(() => {
    if(Chairs.length > 0 && Desks.length > 0 && !isFurnitureLoaded)
    {
        const data = {
          "chairs": Chairs,
          "desks": Desks,
          "casesanddrawers": CasesnDrawers
        }

        for(let k in data)
        {
            for(let val in data[k])
            {
                data[k][val].discount = furnitureDiscount;
            }
        }

          setProducts(prev => ({...prev, "furniture": data}));
          setFurnitureLoaded(true);
    }
  }, [isFurnitureLoaded])


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
        <Router>
            <TavNarBar />
            <Routes>
              <Route exact path='/' element={<HomePage addToCart={(e, item) => addToCart(e, item)} />} />
              <Route exact path='/cart' element={<CartPage cart={cart} removeFromCart={(e, item) => removeFromCart(e, item)} />} />
              <Route path='/Products/:category/:brand' element={<ProductsPage products={products} isLoaded={isLoaded} addToCart={(e, item) => addToCart(e, item)} />} />
              <Route path="*" element={<ProductsPage products={products} isLoaded={isLoaded} addToCart={(e, item) => addToCart(e, item)} />} />
            </Routes>
        </Router>
      </div>
  )
}

export default App
