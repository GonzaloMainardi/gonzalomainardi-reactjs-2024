import React from "react";
import { useParams } from "react-router-dom";
import { useProductsCategories } from "../hooks/useProductsCategories";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { id } = useParams();

  const { products } = useProductsCategories(id);
  return (
    <div>
      <h3 class="titulo-principal">PRODUCTOS POR CATEGORIA</h3>

      <ItemListContainer products={products} />
    </div>)
  
};

export default Category;
