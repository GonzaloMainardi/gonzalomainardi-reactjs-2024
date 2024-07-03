import React from "react";
// import { getAllProducts } from "../services/products";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useCollectionItems = (collectionName) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    // getAllProducts()
    //   .then((res) => setProducts(res.data.products))
    //   .catch((err) => console.error(err));
    const db = getFirestore();

    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { items };
};
