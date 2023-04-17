import React from "react";
import "./assets/App.css";
import Index from "./pages/Index";
import CategoryProvider from "./CategoryContext";

const App = () => {

  return (
    <CategoryProvider>
      <Index />
    </CategoryProvider>
  );
};

export default App;
