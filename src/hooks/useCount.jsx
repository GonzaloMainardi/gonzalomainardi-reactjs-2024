import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    // if (count < stock) {
    //   setCount(count + 1);
    // }
    setCount(count + 1);
  };

  const addToCart = () => {
    alert(`Agregaste ${count} productos`);
    setCount(1);
  };

  return { count, decrement, increment, addToCart };
};
