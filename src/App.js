import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import { Home } from './components/Home'
import AllProducts from './components/AllProducts/AllProducts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React, { useState } from "react";
import SigleProduct from './components/SingleProduct/SingleProduct'
import Cart from './components/Cart/Cart'

function App() {

  const [itemsCount, setItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    setQty(qty + 1)
    if (exist) {
      setQty(qty + 1)
    }
    else {
      setItemsCount(itemsCount + 1);
      const temp = cartItems
      setCartItems([...temp, product])
      console.log('cartItems', cartItems)
    }
    console.log('qty', qty)
  };

  return (
    <>
      <NavBar itemsCount={itemsCount} />
      <Routes>
        <Route path="/product/:id" element={<SigleProduct addToCart={addToCart} />} />
        <Route path="/allProducts" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} qty={qty} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
