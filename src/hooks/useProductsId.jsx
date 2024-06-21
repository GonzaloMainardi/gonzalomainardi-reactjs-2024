import React from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../services/products";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const useProductsId = (id) => {
  const [product, setProduct] = React.useState({});

  // const { id } = useParams();

  React.useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
    // const db = getFirestore();
    // const productRef = doc(db, "products", id);

    // getDoc(productRef)
    //   .then((snapshot) => {
    //     setProduct({ id: snapshot.id, ...snapshot.data() });
    //   })
    //   .catch((error) => console.log(error))
  }, [id]);

  return { product };
};
