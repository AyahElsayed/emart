import React from "react";

const Cart = ({ cartItems }) => {
  return (
    < >
      {
        cartItems.length > 0 ?
          cartItems.map((item) => (
            <p>{item.title}</p>
          ))
          :
          "no items in your cart, shopping now!"
      }
    </>
  );
};

export default Cart;