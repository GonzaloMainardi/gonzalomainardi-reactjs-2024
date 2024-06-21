import React from "react";
// import { getAllProducts } from "../services/products";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // getAllProducts()
    //   .then((res) => setProducts(res.data.products))
    //   .catch((err) => console.error(err));
    const db = getFirestore();

    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
  }, []);

  return { products };
};
