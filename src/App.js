import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import { Home } from './components/Home'
import AllProducts from './components/AllProducts/AllProducts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from "react";
import SigleProduct from './components/SingleProduct/SingleProduct'
import Cart from './components/Cart/Cart'

function App() {

  const [itemsCount, setItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
    }
    else {
      setItemsCount(itemsCount + 1);
      const temp = cartItems
      setCartItems([...temp, product])
      // console.log('cartItems', cartItems)
    }
  };

  const deleteFromCart = (product) => {
    const wantDeleted = cartItems.find((x) => x.id === product.id)
    const updated = cartItems.filter((x) => x.id !== wantDeleted.id)
    setCartItems(updated)
    setItemsCount(itemsCount - 1)
    // console.log('updated', updated)
  }

  const totalPrice = (cartItems) => {
    let totalVal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalVal += cartItems[i].price;
    }
    setTotal(totalVal)
  }

  useEffect(() => {
    totalPrice(cartItems);
  }, [cartItems]);
  return (
    <>
      <NavBar itemsCount={itemsCount} />
      <Routes>
        <Route path="/product/:id" element={<SigleProduct addToCart={addToCart} />} />
        <Route path="/allProducts" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} deleteFromCart={deleteFromCart} total={total} />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
