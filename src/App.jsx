import { useState, useEffect } from "react";
import "./assets/App.css";
import Index from "./pages/Index";
import "./index.css"
import CategoryProvider from "./CategoryContext";

const App = () => {


  return (
    <CategoryProvider>
      <Index />
    </CategoryProvider>
  );
};

export default App;
