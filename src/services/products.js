import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://dummyjson.com/products");
};

export const getProductById = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

export const getProductsByCategory = (category) => {
  return axios.get(`https://dummyjson.com/products/category/${category}`);
};

export const getAllCategories = () => {
  return axios.get("https://dummyjson.com/products/categories");
};
