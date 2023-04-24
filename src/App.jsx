import { useState, useEffect } from "react";
import "./assets/App.css";
import Index from "./pages/Index";
import "./index.css";
import CategoryProvider from "./CategoryContext";
import CategoryProduct from "./pages/CategoryProduct";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./component/ProductDescription";
import CartProvider from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <CategoryProvider>
        <Routes>
          <Route path="/categories/:id" element={<CategoryProduct />} />
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
      </CategoryProvider>
    </CartProvider>
  );
};

export default App;
