import React from "react";
import AllProducts from "./AllProducts/AllProducts";
import HeroView from "./HeroView/HeroView";

export const Home = ({addToCart}) =>{

  
  return (
    <>
      <HeroView />
      <AllProducts addToCart={addToCart} />
    </>
  )
}