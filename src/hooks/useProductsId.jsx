import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";

export const useProductsId = () => {
  const [product, setProduct] = React.useState({});

  const { itemId } = useParams();

  React.useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [itemId]);

  return { product };
};
