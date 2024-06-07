import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();
  return (
    <div>
      <ItemListContainer
        greeting="¡BIENVENIDX A HI FIVE!"
        products={products}
      />{" "}
    </div>
  );
};

export default Home;
