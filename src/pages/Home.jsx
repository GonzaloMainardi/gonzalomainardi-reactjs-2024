import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useCollectionItems } from "../hooks/useCollectionItems";

const Home = () => {
  const { items } = useCollectionItems("products");
  return (
    <div>
      <h3 class="titulo-principal">NUESTROS PRODUCTOS</h3>

      <ItemListContainer
        products={items}
      />{" "}
    </div>
  );
};

export default Home;
