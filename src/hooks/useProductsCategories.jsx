import React from "react";
import { getProductsByCategory } from "../services/products";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const useProductsCategories = (category) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // getProductsByCategory(category)
    //   .then((res) => setProducts(res.data.products))
    //   .catch((err) => console.error(err));
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const productsQuery = query(
      productsCollection,
      where("category", "==", category)
    );

    getDocs(productsQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [category]);

  return { products };
};
