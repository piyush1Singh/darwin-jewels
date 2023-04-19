import { useState, useEffect } from "react";
import "./assets/App.css";
import Index from "./pages/Index";
import "./index.css"
import CategoryProvider from "./CategoryContext";
import CategoryProduct from "./pages/CategoryProduct";
import { Routes, Route } from "react-router-dom";

const App = () => {


  return (
    <CategoryProvider>   
    <Routes>
    <Route path="/categories/:id" element={<CategoryProduct />} />
    <Route path="/" element={<Index />} />
    </Routes>
    </CategoryProvider>
  );
};

export default App;
