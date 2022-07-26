import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";

const CartButton = ({ id, handleUpdateToCart, productsInCart = [] }) => {
  const addToCartText = productsInCart.includes(id)
    ? label.removeFromCart
    : label.addToCart;
  return (
    <button onClick={() => handleUpdateToCart(id)}>{addToCartText}</button>
  );
};

export default CartButton;
