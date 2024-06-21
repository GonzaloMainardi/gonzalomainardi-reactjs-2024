import { useParams } from "react-router-dom";
import { useProductsId } from "../hooks/useProductsId.jsx";
import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";

const ItemDetails = () => {
  const { id } = useParams();
  const { product } = useProductsId(id);

  return (
    <div>
      <h3 class="titulo-principal">DETALLE PRODUCTO</h3>

      <ItemDetailContainer product={product} />
    </div>
  );
};

export default ItemDetails;
