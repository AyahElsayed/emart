import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import { Home } from './components/Home'
import AllProducts from './components/AllProducts/AllProducts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React, { useState } from "react";
import SigleProduct from './components/SingleProduct/SingleProduct'

function App() {

  const [itemsCount, setItemsCount] = useState(0);
  const addToCart = (product) => {
    setItemsCount(itemsCount + 1);
  };

  return (
    <>
      <NavBar itemsCount={itemsCount} />
      <Routes>
        <Route path="/product/:id" element={<SigleProduct addToCart={addToCart}/>} />
        <Route path="/allProducts" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
