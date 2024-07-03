import React, { useState } from "react";
import { CartContext } from "../context/CartContext";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

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
    Toastify({
      text: "PRODUCTO AGREGADO",
      duration: 1000,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  };

  return { cantidad, decrement, increment, confirmAdd };
};
