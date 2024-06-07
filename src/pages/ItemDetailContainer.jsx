import { useParams } from "react-router-dom";
import { useProductsId } from "../hooks/useProductsId.jsx";
import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";

const ItemDetails = () => {
  const {id} = useParams();
  const { product } = useProductsId(id);

  return <ItemDetailContainer product={product} />;

};

export default ItemDetails;
