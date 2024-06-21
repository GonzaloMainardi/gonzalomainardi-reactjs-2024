import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product, cantidad) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(p => p.id === product.id);
      if (existingProductIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          cantidad: newCart[existingProductIndex].cantidad + cantidad
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, cantidad }];
      }
    });
  };  
  
  const removeFromCart = (product, cantidad) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === product.id) {
          const newQuantity = item.cantidad - cantidad;
          if (newQuantity > 0) {
            acc.push({ ...item, cantidad: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  const deleteFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== product.id);
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
