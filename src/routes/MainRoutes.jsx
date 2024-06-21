import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailsContainer from "../pages/ItemDetailContainer";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
