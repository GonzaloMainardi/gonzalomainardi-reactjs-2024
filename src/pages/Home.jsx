import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();
  return (
    <div>
      <h3 class="titulo-principal">NUESTROS PRODUCTOS</h3>

      <ItemListContainer
        products={products}
      />{" "}
    </div>
  );
};

export default Home;
