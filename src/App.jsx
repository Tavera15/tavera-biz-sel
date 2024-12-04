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

import SelfServ from "./Products/CPD/SelfService.json";
import FullServ from "./Products/CPD/FullService.json";
import TavFootBar from './Components/TavFootbar';

import Telephones from "./Products/Tech/Telephones.json";
import Calculators from "./Products/Tech/Calculators.json";

import ThermalPaper from "./Products/Supplies/ThermalPaper.json";
import FileFolders from "./Products/Supplies/FileFolders.json";
import Envelopes from './Products/Supplies/Envelopes.json';
import LabelPaper from './Products/Supplies/LabelPaper.json';
import Binders from './Products/Supplies/Binders.json';
import BusinessForms from './Products/Supplies/Forms.json';

function App() {
  
  const INK_DISCOUNT = 10;
  const TECH_DISCOUNT = 5;
  const FURNITURE_DISCOUNT = 10;
  const CPD_FS_DISCOUNT = 10;
  const CPD_SS_DISCOUNT = 20;
  const SUPPLIES_DISCOUNT = 20;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInkLoaded, setInkLoaded] = useState(false);
  const [isPrintersLoaded, setPrintersLoaded] = useState(false);
  const [isFurnitureLoaded, setFurnitureLoaded] = useState(false);
  const [isSSLoaded, setIsSSLoaded] = useState(false);
  const [isFSLoaded, setIsFSLoaded] = useState(false);
  const [isTechLoaded, setIsTechLoaded] = useState(false);
  const [isSuppliesLoaded, setIsSuppliesLoaded] = useState(false);

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    setIsLoaded(isInkLoaded && isPrintersLoaded && isFurnitureLoaded && isSSLoaded && isFSLoaded && isTechLoaded && isSuppliesLoaded);
    //console.log(products)
  }, [isInkLoaded, isPrintersLoaded, isFurnitureLoaded, isSSLoaded, isFSLoaded, isTechLoaded, isSuppliesLoaded])

  // Loading Ink & Toner
  useEffect(() => {
    if(
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
                data.ink[k][val].discount = INK_DISCOUNT;
            }
        }

        setProducts(data);
        setInkLoaded(true);
      }
  },[isInkLoaded])

  // Loading Printers
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
                data[k][val].discount = TECH_DISCOUNT;
            }
        }

        setProducts(prev => ({...prev, "printers": data}));
        setPrintersLoaded(true);
      }
  },[isPrintersLoaded])

  // Loading Furniture
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
                data[k][val].discount = FURNITURE_DISCOUNT;
            }
        }

          setProducts(prev => ({...prev, "furniture": data}));
          setFurnitureLoaded(true);
    }
  }, [isFurnitureLoaded])

  // Loading Self Service
  useEffect(() => {
    if(SelfServ.length > 0 && !isSSLoaded)
      {
          const data = {
            "self-service": SelfServ,
          }
  
          for(let k in data)
          {
              for(let val in data[k])
              {
                  data[k][val].discount = CPD_SS_DISCOUNT;
              }
          }
  
          setProducts(prev => ({...prev, "self-service": data}));
          setIsSSLoaded(true);
      }
  }, [isSSLoaded])

  // Loading Full Service
    useEffect(() => {
      if(FullServ.length > 0 && !isFSLoaded)
      {
          const res = {};

          for(let f in FullServ)
          {
              for(let i in FullServ[f])
              {
                for(let element in FullServ[f][i])
                {
                  FullServ[f][i][element].discount = CPD_FS_DISCOUNT
                }
                
                res[i] = FullServ[f][i];
              }
          }

          setProducts(prev => ({...prev, "cpd": res}));
          setIsFSLoaded(true);
      }
    }, [isFSLoaded])

    // Loading Tech
    useEffect(() => {
      if(Telephones.length > 0 && !isTechLoaded)
      {
          const data = {
            "telephones": Telephones,
            "calculators": Calculators
          }
  
          for(let k in data)
          {
              for(let val in data[k])
              {
                  data[k][val].discount = TECH_DISCOUNT;
              }
          }
  
            setProducts(prev => ({...prev, "tech": data}));
            setIsTechLoaded(true);
      }
    }, [isTechLoaded])
    
    // Loading Supplies
    useEffect(() => {
      if(ThermalPaper.length > 0 && !isSuppliesLoaded)
      {
          const data = {
            "thermalpaper": ThermalPaper,
            "filefolders": FileFolders,
            "envelopes": Envelopes,
            "labels": LabelPaper,
            "binders": Binders,
            "forms": BusinessForms
          }
  
          for(let k in data)
          {
              for(let val in data[k])
              {
                  data[k][val].discount = SUPPLIES_DISCOUNT;
              }
          }
  
            setProducts(prev => ({...prev, "supplies": data}));
            setIsSuppliesLoaded(true);
      }
    }, [isSuppliesLoaded])

  function addToCart(e, item)
  {
      e.preventDefault()
      setCart(prev => [...prev, item]);
  }

  function removeFromCart(e, item)
  {
      e.preventDefault();
      const res = [];
      let isRemoved = false;

      for(let i in cart)
      {
          const cartItem = cart[i];

          if(cartItem.sku === item.sku && cartItem.qty === item.qty && !isRemoved)
          {
              isRemoved = true;
              continue;
          }

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
              <Route path='/Products/:category/:brand' element={<ProductsPage cart={cart} products={products} isLoaded={isLoaded} addToCart={(e, item) => addToCart(e, item)} />} />
              <Route path="*" element={<ProductsPage products={products} isLoaded={isLoaded} addToCart={(e, item) => addToCart(e, item)} />} />
            </Routes>
            <TavFootBar />
        </Router>
      </div>
  )
}

export default App
