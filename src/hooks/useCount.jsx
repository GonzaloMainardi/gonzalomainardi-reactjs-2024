import React, { useState } from "react";
import { CartContext } from "../context/CartContext";

export const useCount = (product) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [cantidad, setCantidad] = React.useState(0);

  const decrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      removeFromCart(product, 1);
    }
  };

  const increment = () => {
    setCantidad(cantidad + 1);
    addToCart(product, 1);
  };

  const confirmAdd = () => {
    alert(`Agregaste ${cantidad} productos`);
  };

  return { cantidad, decrement, increment, confirmAdd };
};
