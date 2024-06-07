import React from "react";
import { useParams } from "react-router-dom";
import { useProductsCategories } from "../hooks/useProductsCategories";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { id } = useParams();

  const { products } = useProductsCategories(id);
  return <ItemListContainer products={products} />;
};

export default Category;
