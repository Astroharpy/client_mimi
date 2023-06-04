import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { ProductProvider } from "./Context/ProductsContext";
import { BagProvider } from './Context/BagContext';
import Home from "./components/Home"
import Admin from "./admin/Admin"
import SideBar from './components/SideBar';
import Checkout from './components/Checkout'
import Details from './components/Details';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Footer from './components/Footer';


function App() {
  const [bagToggle, setBagToggle] = useState(false)

  const haddleToggle = ()=>{
    const current = !bagToggle
    setBagToggle(current)
  }


  return (
    <div className="relative">
       <ProductProvider>
        <Header toggle = {haddleToggle}/>
        {bagToggle? <BagProvider><SideBar toggle = {haddleToggle}/></BagProvider> : null}

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
                <ProductList />
             } />
            <Route path="/products/:id" element={
                <ProductDetails />
             } />

             <Route path="/checkout" element = {<Checkout />} >
                <Route path="" element = {<Details />} />
                <Route path='shipping' element={<Shipping/>} />
                <Route path='payment' element={<Payment />} />

             </Route>

             <Route path="checkout/payment/return" element ={ <h1>Welcome</h1>} />
             <Route path="checkout/payment/cancel" element ={ <h1>Welcome</h1>} />
             <Route path="checkout/payment/notify" element ={ <h1>Welcome</h1>} />

            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<p>Not Found</p>}/>     
        </Routes> 
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
